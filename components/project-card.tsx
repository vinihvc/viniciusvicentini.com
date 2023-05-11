import * as React from 'react'

import { Link } from '@/components/ui/link'

type ProjectCardProps = {
  title: string
  description: string
  repo_url: string
  website_url: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const ProjectCard = ({
  title,
  description,
  repo_url,
  website_url,
  icon,
}: ProjectCardProps) => {
  return (
    <article className="flex flex-col space-y-5">
      {React.createElement(icon, {
        'aria-hidden': true,
      })}

      <h3 className="text-lg font-medium">{title}</h3>

      <p className="text-gray-400">{description}</p>

      <div>
        <Link href={repo_url} decorated isExternal>
          Repository
        </Link>

        {' • '}

        <Link href={website_url} decorated isExternal>
          Website
        </Link>
      </div>
    </article>
  )
}
