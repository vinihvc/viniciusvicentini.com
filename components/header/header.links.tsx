import { useRouter } from 'next/router'
import { pageLinks } from '@/constants/page-links'
import { m } from 'framer-motion'

import { Link } from '@/components/ui/link'

type HeaderLinksProps = {
  onClick?: () => void
}

export const HeaderLinks = (props: HeaderLinksProps) => {
  const { pathname } = useRouter()

  return (
    <div className="flex space-x-10">
      {pageLinks.map(({ href, label }) => (
        <Link
          key={href}
          className="text-3xl text-gray-400 aria-[current=true]:text-white sm:text-lg"
          href={href}
          aria-current={href === pathname || undefined}
          {...props}
        >
          {label}
        </Link>
      ))}
    </div>
  )
}
