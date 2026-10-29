import clsx from 'clsx'

const variants = {
  primary:
    'text-paper before:bg-p5 before:border-paper hover:text-p5 hover:before:bg-paper',
  ghost:
    'text-paper before:bg-ink before:border-paper hover:text-ink hover:before:bg-p3 hover:before:border-p3',
  accent:
    'text-ink before:bg-zzz before:border-ink hover:before:bg-paper',
}

export type ButtonVariant = keyof typeof variants

// The slanted plate is a pseudo-element so the label itself stays upright.
export const buttonClasses = (
  variant: ButtonVariant = 'primary',
  className?: string
) =>
  clsx(
    "relative isolate inline-block cursor-pointer px-7 py-2.5 font-display text-lg uppercase tracking-wider transition-transform duration-150 hover:-translate-y-0.5",
    "before:absolute before:inset-0 before:-z-10 before:-skew-x-12 before:border-2 before:shadow-[4px_4px_0_#0a0a0a] before:transition-colors before:content-['']",
    variants[variant],
    className
  )
