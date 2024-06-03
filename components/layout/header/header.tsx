import { tv } from 'tailwind-variants'

import { HeaderNavItem } from './header.nav-item'
import { HeaderMobile } from './header.mobile'
import { HeaderLogo } from './header.logo'
import { APP_ROUTES } from './header.routes'

const headerStyle = tv({
	base: [
		'z-10 h-16 container',
		'sticky inset-x-2 top-0 sm:top-5',
		'sm:rounded-xl',
		'flex items-center justify-between',
		'px-3 sm:px-5 bg-black/20',
		'backdrop-blur drop-shadow',
		'selection:bg-pink-500 transition-all',
	],
})

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

export const Header = (props: HeaderProps) => {
	const { className, ...rest } = props

	return (
		<header className={headerStyle({ className })} {...rest}>
			<HeaderLogo />

			<nav className="flex max-sm:flex-col gap-2 max-sm:hidden">
				{APP_ROUTES.map((route) => (
					<HeaderNavItem key={route.href} data={route} />
				))}
			</nav>

			<HeaderMobile />
		</header>
	)
}
