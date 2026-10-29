import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NavLink from './NavLink'
import NavGroup from './NavGroup'
import Container from '@components/Container'
import SoundToggle from '@components/common/SoundToggle'
import clsx from 'clsx'
import { isEnabled, setEnabled } from '../../lib/sfx'
import { isPlaying, startBgm, stopBgm } from '../../lib/bgm'

const Header = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false)

  const handleScroll = () => {
    if (scrollY > 100) {
      setIsScroll(true)
    } else {
      setIsScroll(false)
    }
  }

  useEffect(() => {
    addEventListener('scroll', handleScroll)
    return () => {
      removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={clsx(
        'z-50 sticky top-0 py-3 border-b-4 transition-colors duration-300',
        isScroll ? 'border-p5 bg-ink/95 backdrop-blur' : 'border-transparent'
      )}
    >
      <Container>
        {/* wraps on phones: logo + nav on the first row, toggles on the second */}
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
          <Link
            to="/"
            className="-skew-x-12 bg-p5 px-3 font-display text-xl uppercase tracking-wider text-paper md:text-2xl"
          >
            Lyod
          </Link>
          <NavGroup>
            <NavLink to="/" name="Home" />
            <NavLink to="/projects" name="Projects" />
            <NavLink to="/photos" name="Photos" />
          </NavGroup>
          <div className="flex items-center gap-2 max-md:order-last">
            <SoundToggle
              label="SFX"
              initial={isEnabled()}
              onChange={setEnabled}
            />
            <SoundToggle
              label="Music"
              initial={isPlaying()}
              onChange={(on) => (on ? startBgm() : stopBgm())}
            />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
