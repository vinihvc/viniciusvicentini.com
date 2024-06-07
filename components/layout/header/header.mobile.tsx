import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import { HeaderNavItem } from './header.nav-item'
import { HeaderLogo } from './header.logo'
import type { RouteType } from './header.routes'
import { cn } from '@/utils/cn'

interface HeaderMobileProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * Routes to be displayed in the mobile menu
	 */
	routes: RouteType[]
}

export const HeaderMobile = (props: HeaderMobileProps) => {
	const { routes, className, ...rest } = props

	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className={cn(className)} variant="ghost" size="xs" {...rest}>
					<Menu className="size-8" />
					<div className="sr-only">Open menu</div>
				</Button>
			</SheetTrigger>

			<SheetContent>
				<SheetClose asChild>
					<HeaderLogo className="inline-block bg-white/10 rounded scale-150 origin-top-left mb-20 animate-in zoom-in-50 transform-gpu" />
				</SheetClose>

				<nav className="space-y-14">
					{routes.map((route) => (
						<SheetClose key={route.href} asChild>
							<HeaderNavItem
								className="text-5xl font-bold animate-in fade-in slide-in-from-left-4 duration-500 transform-gpu"
								data={route}
							/>
						</SheetClose>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	)
}
