import { useEffect, useState } from 'react'
import NavLink from './NavLink'
import NavGroup from './NavGroup'
import Container from '@components/Container'
import clsx from 'clsx'

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
        'z-50 sticky top-0 py-4 transition-all duration-300',
        isScroll && 'bg-white shadow-lg'
      )}
    >
      <Container>
        <NavGroup>
          <NavLink to="/" name="Home" />
          <NavLink to="/projects" name="Projects" />
          <NavLink to="/photos" name="Photos" />
        </NavGroup>
      </Container>
    </header>
  )
}

export default Header
