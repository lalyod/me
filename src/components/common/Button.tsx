import clsx from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

const compiledVariantClass = {
  primary: 'border border-black bg-black text-white',
}

const compiledButtonStyleClass = {
  solid: '',
  outline: 'bg-transparent !border-zinc-400 !text-black',
}

interface ButtonProps {
  variant?: 'primary'
  buttonStyle?: 'solid' | 'outline'
}

const Button: FC<
  PropsWithChildren & ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps
> = ({
  children,
  variant = 'primary',
  buttonStyle = 'solid',
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        'py-2 px-3.5 rounded-xl text-sm cursor-pointer transition-all duration-150 hover:scale-105',
        compiledVariantClass[variant],
        compiledButtonStyleClass[buttonStyle],
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
