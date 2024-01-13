import React from 'react'
import { ExternalLink } from 'lucide-react'

import { REPO_LINKS } from '@/constants/repo'
import { cn } from '@/utils/cn'

interface RepoProps extends React.HTMLAttributes<HTMLDivElement> {
  data: (typeof REPO_LINKS)[0]
}

export const Repo = (props: RepoProps) => {
  const { data, className, ...rest } = props

  if (!data) {
    throw new Error('Repo data is required')
  }

  return (
    <div
      className={cn(
        'group relative flex h-full items-center gap-x-4 rounded-lg border border-border bg-background p-4 drop-shadow-lg duration-200 hover:border-border-hover',
        className,
      )}
      {...rest}
    >
      <div>
        {React.createElement(data.icon, {
          size: 32,
          'aria-hidden': true,
        })}
      </div>

      <div>
        <h2 className="mb-1 text-lg font-semibold tracking-wide">
          {data.title}
        </h2>

        <div className="line-clamp-2 text-sm text-muted">
          {data.description}
        </div>
      </div>

      <div className="absolute right-3 top-3">
        <ExternalLink
          size={12}
          className="opacity-50 duration-200 group-hover:opacity-100"
        />
      </div>
    </div>
  )
}
