import { FC } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'
import clsx from 'clsx'

interface NavLinkProps {
  to: string
  name: string
}

// Persona-menu style: the selected entry becomes a slanted red plate with an arrow.
const NavLink: FC<NavLinkProps> = ({ to, name }) => {
  return (
    <li>
      <RouterLink
        to={to}
        className={({ isActive }) =>
          clsx(
            'relative isolate block px-2.5 py-1 font-display text-lg uppercase tracking-wider transition-colors md:px-4 md:text-xl',
            "before:absolute before:inset-0 before:-z-10 before:-skew-x-12 before:transition-colors before:content-['']",
            isActive
              ? 'text-paper before:bg-p5'
              : 'text-paper/70 hover:text-ink hover:before:bg-paper'
          )
        }
      >
        {({ isActive }) => (
          <>
            {isActive && (
              <span aria-hidden className="mr-1 hidden md:inline">
                ▶
              </span>
            )}
            {name}
          </>
        )}
      </RouterLink>
    </li>
  )
}

export default NavLink
