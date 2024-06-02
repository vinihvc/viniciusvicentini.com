import React from 'react'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
	({ ...props }, ref) => (
		<div
			className="flex size-12 items-center justify-center rounded-full hover:bg-border text-2xl font-bold transition"
			ref={ref}
			{...props}
		>
			<span className="relative top-1">V</span>
		</div>
	),
)

Logo.displayName = 'Logo'
