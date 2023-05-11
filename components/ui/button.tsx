import React from 'react'
import { cn } from '@/utils/cn'
import { VariantProps, tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: 'appearance-none border-none outline-none text-decoration-none h-[50] flex items-center justify-center px-10 text-white font-sans text-base leading-[1] cursor-pointer transition-colors duration-200 ease-in-out hover:bg-black hover:text-white',
  variants: {
    variant: {
      default: 'bg-pink-500 text-pink-500-foreground hover:bg-pink-500/90',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline:
        'border border-input hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
      link: 'underline-offset-4 hover:underline text-pink-500',
    },
    size: {
      default: 'h-10 py-2 px-4',
      sm: 'h-9 px-3 rounded-md',
      lg: 'h-11 px-8 rounded-md',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant, size, children, className, ...rest } = props

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...rest}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
