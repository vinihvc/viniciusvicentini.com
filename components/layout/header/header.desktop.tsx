import { HeaderNavItem } from './header.nav-item'

import type { RouteType } from './header.routes'

import { cn } from '@/utils/cn'

interface HeaderDesktopProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * Routes to be displayed in the mobile menu
	 */
	routes: RouteType[]
}

export const HeaderDesktop = (props: HeaderDesktopProps) => {
	const { routes, className, ...rest } = props

	return (
		<nav className={cn('flex max-sm:flex-col gap-2', className)} {...rest}>
			{routes.map((route) => (
				<HeaderNavItem key={route.href} data={route} />
			))}
		</nav>
	)
}
