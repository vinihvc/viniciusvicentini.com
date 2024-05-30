import React from 'react'
import { tv } from 'tailwind-variants'

import { Link } from '@/components/ui/link'
import { Logo } from '@/components/ui/logo'
import { APP_ROUTES } from '@/constants/routes'

const headerStyle = tv({
	base: [
		'z-10 h-14 max-w-3xl mx-auto',
		'fixed inset-x-2 top-1 sm:top-5',
		'rounded-full border border-border text-sm',
		'flex items-center justify-between',
		'backdrop-blur-sm bg-black/50 px-5 uppercase',
	],
})

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header = (props: HeaderProps) => {
	const { className, ...rest } = props

	return (
		<header className={headerStyle({ className })} {...rest}>
			<Link href="/" aria-label="Vinicius Vicentini, Back to homepage">
				<Logo />
			</Link>

			<nav className="flex items-center">
				<div className="flex space-x-5">
					{APP_ROUTES.map((route) => (
						<Link
							key={route.href}
							href={route.href}
							className="flex items-center space-x-2 font-medium hover:text-primary"
							showActive
						>
							<span>{route.label}</span>

							{React.createElement(route.icon, {
								size: 16,
								'aria-hidden': true,
							})}
						</Link>
					))}
				</div>
			</nav>
		</header>
	)
}
