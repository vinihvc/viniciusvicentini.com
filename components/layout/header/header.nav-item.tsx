import { Link } from '@/components/ui/link'

import type { RouteType } from './header.routes'
import { cn } from '@/utils/cn'

interface HeaderNavItemProps extends React.HTMLAttributes<HTMLElement> {
	data: RouteType
}

export const HeaderNavItem = (props: HeaderNavItemProps) => {
	const { data, className, ...rest } = props

	return (
		<Link
			href={data.href}
			className={cn(
				'relative flex items-center py-2 px-4 font-medium text-muted sm:hover:text-white sm:[&.active]:bg-white/5 rounded transition',
				className,
			)}
			{...rest}
		>
			{data.label}
		</Link>
	)
}
