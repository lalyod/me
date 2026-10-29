export type Sfx = 'click' | 'tick' | 'swoosh'

const KEY = 'sfx'

let ctx: AudioContext | undefined
let enabled = false
try {
  enabled = localStorage.getItem(KEY) === 'on'
} catch {
  // storage blocked: stay off
}

export const isEnabled = () => enabled

export const setEnabled = (on: boolean) => {
  enabled = on
  try {
    localStorage.setItem(KEY, on ? 'on' : 'off')
  } catch {
    // not persisted, still works for this visit
  }
}

// Envelope: jump to `peak`, decay to silence over `dur` seconds.
const envelope = (c: AudioContext, peak: number, dur: number) => {
  const gain = c.createGain()
  gain.gain.setValueAtTime(peak, c.currentTime)
  gain.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur)
  gain.connect(c.destination)
  return gain
}

const blip = (
  c: AudioContext,
  type: OscillatorType,
  from: number,
  to: number,
  dur: number,
  peak: number
) => {
  const osc = c.createOscillator()
  osc.type = type
  osc.frequency.setValueAtTime(from, c.currentTime)
  osc.frequency.exponentialRampToValueAtTime(to, c.currentTime + dur)
  osc.connect(envelope(c, peak, dur))
  osc.start()
  osc.stop(c.currentTime + dur)
}

export const noiseBuffer = (c: AudioContext, dur: number) => {
  const buffer = c.createBuffer(1, Math.round(c.sampleRate * dur), c.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
  return buffer
}

const swoosh = (c: AudioContext) => {
  const dur = 0.35
  const noise = c.createBufferSource()
  noise.buffer = noiseBuffer(c, dur)
  const filter = c.createBiquadFilter()
  filter.type = 'lowpass'
  filter.frequency.setValueAtTime(300, c.currentTime)
  filter.frequency.exponentialRampToValueAtTime(5000, c.currentTime + dur)
  noise.connect(filter).connect(envelope(c, 0.1, dur))
  noise.start()
}

// Shared by bgm.ts. Must first be called from a user gesture (autoplay rules).
export const getCtx = () => {
  ctx ??= new AudioContext()
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

export const play = (kind: Sfx) => {
  if (!enabled) return
  const c = getCtx()

  if (kind === 'click') blip(c, 'square', 520, 260, 0.09, 0.08)
  else if (kind === 'tick') blip(c, 'triangle', 1200, 1000, 0.03, 0.04)
  else swoosh(c)
}
