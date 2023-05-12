import * as React from 'react'

import { Link } from '@/components/link'
import { REPO_LINKS } from '@/constants/repo'

type RepoProps = (typeof REPO_LINKS)[0]

export const Repo = (props: RepoProps) => {
  const { title, description, repo_url, website_url, icon } = props

  return (
    <article className="flex flex-col space-y-5">
      {React.createElement(icon, {
        size: 16,
        'aria-hidden': true,
      })}

      <h3 className="text-lg font-medium">{title}</h3>

      <p className="text-muted">{description}</p>

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
