import { FC, PropsWithChildren } from 'react'

const Container: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="lg:max-w-6xl md:max-w-lg mx-auto max-md:mx-3">
      {children}
    </div>
  )
}

export default Container
