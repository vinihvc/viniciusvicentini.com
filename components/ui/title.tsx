import type React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/utils/cn'

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
	/**
	 * If true, the title will be rendered as a child of another component
	 */
	asChild?: boolean
}

export const Title = (props: TitleProps) => {
	const { asChild, className, ...rest } = props

	const Comp = asChild ? Slot : 'h1'

	return (
		<Comp
			className={cn(
				'text-5xl font-bold bg-gradient-to-r inline-block text-transparent bg-clip-text',
				className,
			)}
			{...rest}
		/>
	)
}
