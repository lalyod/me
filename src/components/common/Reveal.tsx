import { FC, PropsWithChildren } from 'react'
import { motion } from 'framer-motion'

const offsets = {
  up: { y: 24 },
  left: { x: -40 },
  right: { x: 40 },
}

interface RevealProps {
  delay?: number
  from?: keyof typeof offsets
  className?: string
}

const Reveal: FC<PropsWithChildren<RevealProps>> = ({
  children,
  delay = 0,
  from = 'up',
  className,
}) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offsets[from] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
