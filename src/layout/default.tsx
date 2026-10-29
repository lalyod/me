import { useEffect, useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from '../components/Header/index'
import Footer from '../components/Footer'
import PageTransition from '../components/common/PageTransition'
import { play } from '../lib/sfx'

const LayoutDefault = () => {
  const { pathname } = useLocation()
  // useOutlet (not <Outlet/>) so the exiting page keeps its own element during the wipe
  const outlet = useOutlet()
  const firstRender = useRef(true)

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if ((e.target as Element).closest('a, button')) play('click')
    }
    const onOver = (e: PointerEvent) => {
      if (
        e.pointerType === 'mouse' &&
        (e.target as Element).closest('a, button')
      )
        play('tick')
    }
    document.addEventListener('click', onClick)
    document.addEventListener('pointerover', onOver)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('pointerover', onOver)
    }
  }, [])

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    play('swoosh')
  }, [pathname])

  return (
    <div>
      <Header />
      <main>
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => scrollTo(0, 0)}
        >
          <PageTransition key={pathname}>{outlet}</PageTransition>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default LayoutDefault
