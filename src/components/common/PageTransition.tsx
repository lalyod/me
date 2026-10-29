import { FC, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

const covered = 'polygon(-30% 0, 130% 0, 130% 100%, -50% 100%)'
const fromLeft = 'polygon(-30% 0, -30% 0, -50% 100%, -50% 100%)'
const toRight = 'polygon(130% 0, 130% 0, 130% 100%, 130% 100%)'

// Red slab then black slab sweep across on the way out, and peel off on the way in.
const slabs = [
  { color: 'bg-p5', exitDelay: 0, enterDelay: 0.08 },
  { color: 'bg-ink', exitDelay: 0.08, enterDelay: 0 },
]

const PageTransition: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.3 } }}
      >
        {children}
      </motion.div>
      {slabs.map(({ color, exitDelay, enterDelay }) => (
        <motion.div
          key={color}
          aria-hidden
          className={`pointer-events-none fixed inset-0 z-[60] ${color}`}
          initial={{ clipPath: covered }}
          animate={{
            clipPath: toRight,
            transition: { duration: 0.45, delay: 0.05 + enterDelay },
          }}
          exit={{
            clipPath: [fromLeft, covered],
            transition: { duration: 0.35, delay: exitDelay },
          }}
        />
      ))}
    </>
  )
}

export default PageTransition
