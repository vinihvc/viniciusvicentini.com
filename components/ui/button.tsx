import React from 'react'
import { tv, type VariantProps } from 'tailwind-variants'
import { Slot } from '@radix-ui/react-slot'

export const buttonStyle = tv({
	base: [
		'inline-flex items-center justify-center',
		'font-medium text-muted hover:text-white ',
		'gap-2',
		'rounded-lg drop-shadow',
		'transition-colors',
		'outline-none focus-visible:text-white focus-visible:ring-2 ring-white/30 ring-offset-2 ring-offset-black',
		'disabled:opacity-50 disabled:pointer-events-none',
	],
	variants: {
		variant: {
			solid: 'bg-white/5 hover:bg-white/10',
			ghost: 'hover:bg-white/5',
		},
		size: {
			xs: 'size-8',
			sm: 'h-9 px-3',
			md: 'h-10 py-2 px-4',
			lg: 'h-12 px-8',
		},
	},
	defaultVariants: {
		variant: 'solid',
		size: 'md',
	},
})

interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonStyle> {
	/**
	 * If true, the button will be rendered as a child of a link
	 */
	asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(props, ref) => {
		const {
			type = 'button',
			variant,
			size,
			asChild,
			className,
			children,
			...rest
		} = props

		const Comp = asChild ? Slot : 'button'

		return (
			<Comp
				ref={ref}
				type={type}
				className={buttonStyle({ variant, size, className })}
				{...rest}
			>
				{children}
			</Comp>
		)
	},
)

Button.displayName = 'Button'
