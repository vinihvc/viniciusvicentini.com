import React from 'react'
import { useRouter } from 'next/router'
import { APP_ROUTES } from '@/constants/page-links'

import { Link } from '@/components/ui/link'

type HeaderLinksProps = React.HTMLAttributes<HTMLDivElement>

export const HeaderLinks = (props: HeaderLinksProps) => {
  const { pathname } = useRouter()

  return (
    <div {...props}>
      {APP_ROUTES.map(({ href, label }) => (
        <Link
          key={href}
          className="text-3xl font-semibold text-gray-400 aria-[current=true]:text-white sm:text-lg"
          href={href}
          aria-current={href === pathname || undefined}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
