import { FC, PropsWithChildren } from 'react'

const NavGroup: FC<PropsWithChildren> = ({ children }) => {
  return (
    <nav>
      <ul className="flex gap-7 items-center">{children}</ul>
    </nav>
  )
}

export default NavGroup
