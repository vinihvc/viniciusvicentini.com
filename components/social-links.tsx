import * as React from 'react'
import { socialLinks } from '@/constants/social-links'
import { m } from 'framer-motion'

import { Link } from '@/components/ui/link'

export const SocialLinks = () => {
  return (
    <m.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 1.7 }}
      className="mt-5 flex space-x-10 md:space-x-5"
    >
      {socialLinks.map(({ title, icon, link }) => (
        <Link
          key={link}
          href={link}
          title={`Visit my ${title}`}
          isExternal
          className="transition duration-150 hover:text-gray-400"
        >
          {React.createElement(icon, {
            'aria-hidden': true,
            className: 'text-2xl transition duration-150 md:text-lg',
          })}
        </Link>
      ))}
    </m.div>
  )
}
