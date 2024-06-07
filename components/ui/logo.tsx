import React from 'react'

import { cn } from '@/utils/cn'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
	(props, ref) => {
		const { className, ...rest } = props

		return (
			<span
				ref={ref}
				role="img"
				className={cn(
					'flex size-10 items-center justify-center text-2xl font-bold',
					className,
				)}
				{...rest}
			>
				V
			</span>
		)
	},
)

Logo.displayName = 'Logo'
