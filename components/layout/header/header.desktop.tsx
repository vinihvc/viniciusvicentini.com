import { cn } from '@/utils/cn'

import { HeaderNavItem } from './header.nav-item'
import type { RouteType } from './header.routes'

interface HeaderDesktopProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Routes to be displayed in the mobile menu
   */
  routes: RouteType[]
}

export const HeaderDesktop = (props: HeaderDesktopProps) => {
  const { routes, className, ...rest } = props

  return (
    <nav className={cn('flex gap-2 max-sm:flex-col', className)} {...rest}>
      {routes.map((route) => (
        <HeaderNavItem key={route.href} data={route} />
      ))}
    </nav>
  )
}
