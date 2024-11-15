import { cn } from '@/utils/cn'

import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/ui/nav-link'

import type { RouteType } from './header.routes'

interface HeaderNavItemProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Route data
   */
  data: RouteType
}

export const HeaderNavItem = (props: HeaderNavItemProps) => {
  const { data, className, ...rest } = props

  return (
    <Button asChild>
      <NavLink
        href={data.href}
        className={cn(
          'block border-none bg-transparent px-4 py-2 hover:bg-transparent hover:text-white [&.active]:text-white sm:[&.active]:bg-white/5',
          className,
        )}
        {...rest}
      >
        {data.label}
      </NavLink>
    </Button>
  )
}
