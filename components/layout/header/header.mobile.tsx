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
import { APP_ROUTES } from './header.routes'

export const HeaderMobile = () => {
	return (
		<Sheet>
			<SheetTrigger asChild>
				<Button className="sm:hidden" variant="ghost" size="xs">
					<Menu />
				</Button>
			</SheetTrigger>

			<SheetContent>
				<HeaderLogo className="inline-block bg-white/10 rounded mb-20 scale-150 origin-top-left" />

				<nav className="space-y-4">
					{APP_ROUTES.map((route) => (
						<SheetClose key={route.href} asChild>
							<HeaderNavItem className="text-4xl px-0 font-bold" data={route} />
						</SheetClose>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	)
}
