import { FC } from 'react'
import { NavLink as RouterLink } from 'react-router-dom'

interface NavLinkProps {
  to: string
  name: string
}

const NavLink: FC<NavLinkProps> = ({ to, name }) => {
  return (
    <li>
      <RouterLink
        to={to}
        className="text-zinc-500 text-sm py-1 px-2.5 transition-all duration-300 hover:bg-zinc-200 rounded-md"
      >
        {name}
      </RouterLink>
    </li>
  )
}

export default NavLink
