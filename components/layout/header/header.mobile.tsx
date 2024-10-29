import { cn } from '@/utils/cn'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'

import { HeaderLogo } from './header.logo'
import { HeaderNavItem } from './header.nav-item'
import type { RouteType } from './header.routes'

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
          <HeaderLogo className="mb-20 inline-block origin-top-left scale-150 transform-gpu rounded bg-white/10 animate-in zoom-in-50" />
        </SheetClose>

        <nav className="space-y-14">
          {routes.map((route) => (
            <SheetClose key={route.href} asChild>
              <HeaderNavItem
                className="transform-gpu text-5xl font-bold duration-500 animate-in fade-in slide-in-from-left-4"
                data={route}
              />
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
