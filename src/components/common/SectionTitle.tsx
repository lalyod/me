import { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

// Ransom-note letter tiles, palette per game.
const tones = {
  p5: [
    'bg-paper text-ink',
    'bg-ink text-paper border border-paper',
    'bg-p5 text-paper',
  ],
  p3: [
    'bg-p3 text-ink',
    'bg-p3-deep text-p3 border border-p3',
    'bg-paper text-ink',
  ],
  zzz: [
    'bg-zzz text-ink',
    'bg-ink text-zzz border border-zzz',
    'bg-paper text-ink',
  ],
}
const tilts = [
  '-rotate-3',
  'rotate-2',
  '-rotate-1',
  'rotate-3',
  'rotate-1',
  '-rotate-2',
]

interface SectionTitleProps {
  children: string
  tone?: keyof typeof tones
  className?: string
}

const SectionTitle: FC<SectionTitleProps> = ({
  children,
  tone = 'p5',
  className,
}) => {
  const palette = tones[tone]

  return (
    <h2
      aria-label={children}
      className={clsx(
        'flex flex-wrap gap-x-5 gap-y-2 font-display text-4xl uppercase md:text-6xl',
        className
      )}
    >
      {children.split(' ').map((word, w) => (
        <span key={w} aria-hidden className="flex">
          {[...word].map((letter, i) => {
            const n = w * 7 + i
            return (
              <motion.span
                key={i}
                className={clsx(
                  'px-1.5 py-0.5 md:px-2.5',
                  palette[n % palette.length],
                  tilts[n % tilts.length]
                )}
                initial={{ opacity: 0, scale: 0.4, rotate: n % 2 ? 12 : -12 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 18,
                  delay: n * 0.03,
                }}
              >
                {letter}
              </motion.span>
            )
          })}
        </span>
      ))}
    </h2>
  )
}

export default SectionTitle
