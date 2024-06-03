import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'

import { cn } from '@/utils/cn'

export const buttonVariants = tv({
	base: [
		'inline-flex items-center justify-center',
		'font-medium',
		'rounded',
		'transition-colors',
		'ring-offset-black',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/10 focus-visible:ring-offset-2',
		'disabled:opacity-50 disabled:pointer-events-none',
	],
	variants: {
		variant: {
			solid: 'bg-primary hover:bg-primary-foreground',
			ghost: 'hover:bg-white/5',
		},
		size: {
			xs: 'size-8',
			sm: 'h-9 px-3',
			md: 'h-10 py-2 px-4',
			lg: 'h-11 px-8',
		},
	},
	defaultVariants: {
		variant: 'solid',
		size: 'md',
	},
})

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {}

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
