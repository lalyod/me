import { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren> = ({ children }) => {
  return <div className="max-w-6xl mx-auto px-4 md:px-6">{children}</div>
}

export default Container
