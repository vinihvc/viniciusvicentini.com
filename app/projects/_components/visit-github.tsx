import { cn } from '@/utils/cn'
import { ExternalLink } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/ui/nav-link'

interface VisitGithubProps extends React.HTMLAttributes<HTMLDivElement> {}

export const VisitGithub = (props: VisitGithubProps) => {
  const { className, ...rest } = props

  return (
    <div className={cn('flex justify-end', className)} {...rest}>
      <Button asChild>
        <NavLink
          className="ring-green-500"
          href="https://github.com/vinihvc?tab=repositories"
          isExternal
        >
          Visit my GitHub
          <ExternalLink className="size-4" />
        </NavLink>
      </Button>
    </div>
  )
}
