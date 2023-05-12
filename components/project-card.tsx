import * as React from 'react'
import { REPO_LINKS } from '@/constants/repo'

import { Link } from '@/components/ui/link'

type ProjectCardProps = (typeof REPO_LINKS)[0]

export const ProjectCard = (props: ProjectCardProps) => {
  const { title, description, repo_url, website_url, icon } = props

  return (
    <article className="flex flex-col space-y-5">
      {React.createElement(icon, {
        size: 16,
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
