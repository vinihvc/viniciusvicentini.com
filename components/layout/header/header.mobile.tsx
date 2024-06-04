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
					<Menu className="size-8" />
				</Button>
			</SheetTrigger>

			<SheetContent>
				<HeaderLogo className="inline-block bg-white/10 rounded scale-150 origin-top-left mb-20 animate-in zoom-in-50 transform-gpu" />

				<nav className="space-y-4">
					{APP_ROUTES.map((route) => (
						<SheetClose key={route.href} asChild>
							<HeaderNavItem
								className="text-4xl px-0 font-bold animate-in fade-in slide-in-from-left-4 duration-500 transform-gpu"
								data={route}
							/>
						</SheetClose>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	)
}
