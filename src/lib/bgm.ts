import { getCtx, noiseBuffer } from './sfx'

const BPM = 88
const STEP = 60 / BPM / 4 // one 16th note
const SWING = 0.4 // off-beat 8ths land late, in 16ths
const AHEAD = 0.1 // seconds scheduled in advance
const FADE = 0.6
const LEVEL = 0.18

const midi = (n: number) => 440 * 2 ** ((n - 69) / 12)

// Dm9 - G13 - Cmaj9 - Am7: bass root, soft chord voicing and a sparse
// melody per bar (all MIDI). Melody is [step, note, length in steps].
const bars = [
  {
    root: 38,
    chord: [53, 57, 60, 64],
    melody: [
      [4, 69, 3],
      [8, 72, 5],
    ],
  },
  {
    root: 43,
    chord: [53, 59, 64, 69],
    melody: [
      [0, 71, 4],
      [6, 69, 3],
      [10, 67, 5],
    ],
  },
  {
    root: 36,
    chord: [52, 55, 59, 62],
    melody: [
      [2, 76, 5],
      [10, 74, 5],
    ],
  },
  {
    root: 45,
    chord: [55, 60, 64, 67],
    melody: [
      [4, 72, 4],
      [10, 69, 6],
    ],
  },
]
const LOOP_STEPS = 16 * bars.length * 2 // 2nd pass adds the melody
// step in bar -> semitones above the bar root
const bass: Record<number, number> = { 0: 0, 7: 0, 10: 7 }
// step in bar -> [volume, length in steps]
const comp: Record<number, [number, number]> = {
  0: [1, 7],
  6: [0.7, 3],
  10: [0.8, 5],
}
const kicks = [0, 10]
const snares = [4, 12]

let timer: number | undefined
let master: GainNode | undefined
let noise: AudioBuffer
let nextTime = 0
let step = 0

const tone = (
  c: AudioContext,
  dest: AudioNode,
  type: OscillatorType,
  freq: number,
  t: number,
  dur: number,
  peak: number,
  cutoff: number
) => {
  const osc = c.createOscillator()
  osc.type = type
  osc.frequency.value = freq
  const lp = c.createBiquadFilter()
  lp.type = 'lowpass'
  lp.frequency.value = cutoff
  const g = c.createGain()
  g.gain.setValueAtTime(0.0001, t)
  g.gain.exponentialRampToValueAtTime(peak, t + 0.015)
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  osc.connect(lp).connect(g).connect(dest)
  osc.start(t)
  osc.stop(t + dur + 0.02)
}

const kick = (c: AudioContext, dest: AudioNode, t: number) => {
  const osc = c.createOscillator()
  osc.frequency.setValueAtTime(110, t)
  osc.frequency.exponentialRampToValueAtTime(45, t + 0.15)
  const g = c.createGain()
  g.gain.setValueAtTime(0.6, t)
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.25)
  osc.connect(g).connect(dest)
  osc.start(t)
  osc.stop(t + 0.27)
}

const hit = (
  c: AudioContext,
  dest: AudioNode,
  t: number,
  type: BiquadFilterType,
  freq: number,
  dur: number,
  peak: number
) => {
  const src = c.createBufferSource()
  src.buffer = noise
  const f = c.createBiquadFilter()
  f.type = type
  f.frequency.value = freq
  const g = c.createGain()
  g.gain.setValueAtTime(peak, t)
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
  src.connect(f).connect(g).connect(dest)
  src.start(t)
  src.stop(t + dur)
}

const playStep = (
  c: AudioContext,
  dest: AudioNode,
  echo: AudioNode,
  s: number,
  at: number
) => {
  const barIndex = Math.floor(s / 16)
  const bar = bars[barIndex % bars.length]
  const i = s % 16
  // laid-back swing: every off-beat 8th is pushed late
  const t = at + (i % 4 === 2 ? STEP * SWING : 0)

  if (i in bass)
    tone(c, dest, 'sine', midi(bar.root + bass[i]), t, STEP * 3, 0.6, 400)
  if (i in comp) {
    const [vol, len] = comp[i]
    for (const n of bar.chord) {
      // Rhodes-ish: soft body plus a quiet bell an octave up
      tone(c, dest, 'triangle', midi(n), t, STEP * len, 0.09 * vol, 1400)
      tone(c, dest, 'sine', midi(n + 12), t, STEP * len * 0.5, 0.03 * vol, 3000)
    }
  }
  if (barIndex >= bars.length)
    for (const [at16, note, len] of bar.melody)
      if (at16 === i)
        tone(c, echo, 'triangle', midi(note), t, STEP * len, 0.1, 2500)
  if (kicks.includes(i)) kick(c, dest, t)
  if (snares.includes(i)) hit(c, dest, t, 'bandpass', 1500, 0.12, 0.18)
  if (i % 2 === 0)
    hit(c, dest, t, 'highpass', 8000, 0.04, i % 4 === 0 ? 0.07 : 0.04)
}

const schedule = (c: AudioContext, out: AudioNode, echo: AudioNode) => {
  // after a stall (debugger, throttled tab) skip ahead instead of bursting old notes
  if (nextTime < c.currentTime) nextTime = c.currentTime
  while (nextTime < c.currentTime + AHEAD) {
    playStep(c, out, echo, step, nextTime)
    nextTime += STEP
    step = (step + 1) % LOOP_STEPS
  }
}

export const isPlaying = () => timer !== undefined

export const startBgm = () => {
  if (timer !== undefined) return
  const c = getCtx()
  const out = c.createGain()
  out.gain.setValueAtTime(0.0001, c.currentTime)
  out.gain.exponentialRampToValueAtTime(LEVEL, c.currentTime + FADE)
  out.connect(c.destination)

  // melody bus: dry plus a dotted-8th echo for a roomy, dreamy tail
  const echo = c.createGain()
  const delay = c.createDelay(1)
  delay.delayTime.value = STEP * 3
  const feedback = c.createGain()
  feedback.gain.value = 0.35
  const wet = c.createGain()
  wet.gain.value = 0.4
  echo.connect(out)
  echo.connect(delay)
  delay.connect(feedback).connect(delay)
  delay.connect(wet).connect(out)

  master = out
  noise = noiseBuffer(c, 0.3)
  nextTime = c.currentTime + 0.05
  step = 0
  timer = window.setInterval(() => schedule(c, out, echo), 25)
}

export const stopBgm = () => {
  if (timer === undefined || !master) return
  const out = master
  const now = out.context.currentTime
  clearInterval(timer)
  timer = undefined
  master = undefined
  out.gain.cancelScheduledValues(now)
  out.gain.setValueAtTime(out.gain.value, now)
  out.gain.exponentialRampToValueAtTime(0.0001, now + FADE)
  setTimeout(() => out.disconnect(), FADE * 1000 + 100)
}

// Freeze the audio clock in a hidden tab so the beat resumes in time.
document.addEventListener('visibilitychange', () => {
  if (timer === undefined) return
  const c = getCtx()
  void (document.hidden ? c.suspend() : c.resume())
})
