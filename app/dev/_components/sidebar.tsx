import { allComponents } from '@/.contentlayer/generated'
import { cn } from '@/utils/cn'
import { pluralize } from '@/utils/formatter'

import { NavLink } from '@/components/ui/nav-link'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Sidebar = (props: SidebarProps) => {
  const { className, ...rest } = props

  const categories = new Set(allComponents.map((c) => c.category))

  const componentsByCategory = Array.from(categories).map((category) => ({
    name: category,
    components: allComponents.filter((c) => c.category === category),
  }))

  return (
    <aside className={cn('flex flex-col shrink-0', className)} {...rest}>
      {componentsByCategory.map((category) => (
        <div className="pb-4" key={category.name}>
          <h4 className="mb-1 rounded-md py-1 text-sm font-semibold capitalize">
            {pluralize(category.name, 2)}
          </h4>

          <div className="grid grid-flow-row auto-rows-max text-sm">
            {category.components.map((component) => (
              <NavLink
                href={`/dev/${component.slugAsParams}`}
                key={component.slugAsParams}
                className="text-muted-foreground py-2 hover:underline [&.active]:text-white [&.active]:underline"
              >
                {component.title}
              </NavLink>
            ))}
          </div>
        </div>
      ))}
    </aside>
  )
}
