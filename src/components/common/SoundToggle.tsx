import { FC, useState } from 'react'
import clsx from 'clsx'

interface SoundToggleProps {
  label: string
  initial: boolean
  onChange: (on: boolean) => void
}

// The delegated click listener in the layout plays the confirm click after this runs.
const SoundToggle: FC<SoundToggleProps> = ({ label, initial, onChange }) => {
  const [on, setOn] = useState<boolean>(initial)

  const toggle = () => {
    onChange(!on)
    setOn(!on)
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={on}
      aria-label={label}
      className={clsx(
        '-skew-x-12 cursor-pointer border-2 px-2.5 py-0.5 font-display text-sm uppercase tracking-wider transition-colors',
        on
          ? 'border-zzz bg-zzz text-ink'
          : 'border-paper/40 text-paper/70 hover:border-p3 hover:text-p3'
      )}
    >
      {label} {on ? 'On' : 'Off'}
    </button>
  )
}

export default SoundToggle
