import { FC, PropsWithChildren } from 'react'

const NavGroup: FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav aria-label="Main">
      <ul className="flex gap-1 items-center md:gap-4">{children}</ul>
    </nav>
  )
}

export default NavGroup
