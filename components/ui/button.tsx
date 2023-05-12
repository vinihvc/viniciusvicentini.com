import React from 'react'
import { cn } from '@/utils/cn'
import { VariantProps, tv } from 'tailwind-variants'

export const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center ',
    'font-semibold',
    'transition-colors',
    'ring-offset-background',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:pointer-events-none',
  ],
  variants: {
    variant: {
      default: 'bg-pink-500 text-pink-500-foreground hover:bg-pink-500/50',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
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
