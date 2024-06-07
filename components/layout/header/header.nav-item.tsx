import { Link } from '@/components/ui/link'

import type { RouteType } from './header.routes'
import { cn } from '@/utils/cn'
import { Button } from '@/components/ui/button'

interface HeaderNavItemProps extends React.HTMLAttributes<HTMLElement> {
	data: RouteType
}

export const HeaderNavItem = (props: HeaderNavItemProps) => {
	const { data, className, ...rest } = props

	return (
		<Button asChild>
			<Link
				href={data.href}
				className={cn(
					'bg-transparent block border-none hover:bg-transparent py-2 px-4 hover:text-white sm:[&.active]:bg-white/5 [&.active]:text-white',
					className,
				)}
				{...rest}
			>
				{data.label}
			</Link>
		</Button>
	)
}
