import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'
import { ButtonVariant, buttonClasses } from './buttonClasses'

interface ButtonProps {
  variant?: ButtonVariant
}

const Button: FC<
  PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({ children, variant = 'primary', className, ...props }) => {
  return (
    <button {...props} className={buttonClasses(variant, className)}>
      {children}
    </button>
  )
}

export default Button
