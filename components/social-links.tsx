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
          className="transition duration-150 hover:text-pink-500"
          isExternal
        >
          {React.createElement(icon, {
            className: 'w-7 h-7 sm:w-5 sm:h-5',
            'aria-hidden': true,
          })}

          <span className="sr-only">{`Visit my ${title}`}</span>
        </Link>
      ))}
    </m.div>
  )
}
