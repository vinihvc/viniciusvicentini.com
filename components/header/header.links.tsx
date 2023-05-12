import React from 'react'

import { Link } from '@/components/link'
import { APP_ROUTES } from '@/constants/routes'

type HeaderLinksProps = React.HTMLAttributes<HTMLDivElement>

export const HeaderLinks = (props: HeaderLinksProps) => {
  return (
    <div {...props}>
      {APP_ROUTES.map(({ href, label }) => (
        <Link
          key={href}
          className="text-3xl font-semibold text-muted aria-[current=true]:text-white sm:text-lg"
          href={href}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
