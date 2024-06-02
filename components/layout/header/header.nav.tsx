import { Link } from '@/components/ui/link'

import { APP_ROUTES } from './header.routes'
import { cn } from '@/utils/cn'

interface HeaderNavProps extends React.HTMLAttributes<HTMLElement> {}

export const HeaderNav = (props: HeaderNavProps) => {
	const { className, ...rest } = props

	return (
		<nav className={cn('flex items-center', className)} {...rest}>
			<div className="flex space-x-2">
				{APP_ROUTES.map((route) => (
					<Link
						key={route.href}
						href={route.href}
						className={cn(
							'relative flex items-center py-2 px-4 font-medium text-muted hover:text-white [&.active]:bg-white/5 rounded transition',
						)}
					>
						<span className="relative top-0.5">{route.label}</span>
					</Link>
				))}
			</div>
		</nav>
	)
}
