import { cn } from '@/utils/cn'

import { NavLink } from '@/components/ui/nav-link'
import { SIDEBAR_DATA } from './sidebar.data'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Sidebar = (props: SidebarProps) => {
  const { className, ...rest } = props

  return (
    <aside className={cn('flex flex-col overflow-y-auto', className)} {...rest}>
      {Object.entries(SIDEBAR_DATA).map(([key, items]) => (
        <div className="pb-4" key={key}>
          <h4 className="mb-1 rounded-md py-1 text-sm font-semibold capitalize">
            {key}
          </h4>

          <div className="grid grid-flow-row auto-rows-max text-sm">
            {items.map((item) => (
              <NavLink
                href={item.href}
                key={item.href}
                className="text-muted-foreground py-2 hover:underline [&.active]:text-white [&.active]:underline"
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </aside>
  )
}
