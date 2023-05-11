import React from 'react'
import { useRouter } from 'next/router'
import { pageLinks } from '@/constants/page-links'
import { m } from 'framer-motion'

import { Link } from '@/components/ui/link'

type HeaderLinksProps = React.HTMLAttributes<HTMLDivElement>

export const HeaderLinks = (props: HeaderLinksProps) => {
  const { pathname } = useRouter()

  return (
    <div {...props}>
      {pageLinks.map(({ href, label }) => (
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
