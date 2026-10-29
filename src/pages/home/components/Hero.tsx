import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Container from '@components/Container'
import { buttonClasses } from '@components/common/buttonClasses'

const greeting = "Hello!, I'm Pradita Adiantama"
const slam = { type: 'spring', stiffness: 220, damping: 18 } as const

const Hero = () => {
  const [name, setName] = useState<string>('')

  useEffect(() => {
    let i = 0
    let val = ''

    const interval = setInterval(() => {
      if (i < greeting.length) {
        val += greeting[i]
        i++
        setName(val)
      } else {
        clearInterval(interval)
      }
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative isolate overflow-hidden">
      <div className="halftone clip-slash absolute -right-24 top-0 -z-10 h-full w-3/4 text-p5/40" />
      <Container>
        <div className="grid items-center gap-12 py-16 md:py-24 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <span className="mb-4 inline-block -skew-x-12 bg-zzz px-3 py-0.5 font-display text-sm uppercase tracking-widest text-ink">
              IT Professional
            </span>
            <h1 className="font-display text-6xl uppercase leading-none sm:text-7xl lg:text-8xl">
              <motion.span
                className="clip-slash inline-block -rotate-2 bg-p5 px-5 py-2"
                initial={{ x: -160, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={slam}
              >
                Pradita
              </motion.span>
              <br />
              <motion.span
                className="clip-slash mt-3 ml-4 inline-block rotate-1 bg-paper px-5 py-2 text-ink"
                initial={{ x: -160, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ ...slam, delay: 0.15 }}
              >
                Adiantama
              </motion.span>
            </h1>

            <h2 className="mt-8 max-w-xl text-2xl font-medium lg:text-3xl">
              A 19 years old Programmer that has many other hobbies
            </h2>
            <p className="mt-2 text-paper/60">Eager to learn new things</p>

            <div className="relative mt-8 max-w-xl border-2 border-paper bg-ink/90 p-4 pt-6 shadow-[6px_6px_0_#e60012]">
              <span className="absolute -top-3.5 left-4 -skew-x-12 bg-p5 px-3 font-display uppercase tracking-wider">
                Pradita
              </span>
              <p className="min-h-7 text-lg">
                <span className="sr-only">{greeting}</span>
                <span aria-hidden>{name}</span>
                <span
                  aria-hidden
                  className="type-pulse ml-0.5 inline-block h-5 w-0.5 translate-y-1 bg-zzz"
                />
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-5">
              <Link to="/projects" className={buttonClasses('primary')}>
                View Projects
              </Link>
              <a
                href="https://github.com/lalyod"
                target="_blank"
                rel="noreferrer"
                className={buttonClasses('ghost')}
              >
                GitHub
              </a>
            </div>
          </div>

          <motion.div
            className="mx-auto drop-shadow-[8px_8px_0_#f4f1ea]"
            initial={{ scale: 0.6, rotate: -12, opacity: 0 }}
            animate={{ scale: 1, rotate: 3, opacity: 1 }}
            transition={{ ...slam, delay: 0.3 }}
          >
            <div className="clip-card bg-p5 p-2">
              <img
                src="https://avatars.githubusercontent.com/u/81001767?v=4"
                alt="github-profile"
                className="clip-card h-60 w-60 object-cover lg:h-72 lg:w-72"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default Hero
