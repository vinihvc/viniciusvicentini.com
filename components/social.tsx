import * as React from 'react'
import { motion } from 'framer-motion'

import { Link } from '@/components/link'
import { SOCIAL_LINKS } from '@/constants/social'

export const Social = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 1.7 }}
      className="mt-5 flex space-x-10 md:space-x-5"
    >
      {SOCIAL_LINKS.map(({ title, icon, link }) => (
        <Link
          key={link}
          href={link}
          className="text-primary transition duration-150 hover:text-primaryHover"
          isExternal
        >
          {React.createElement(icon, {
            className: 'w-7 h-7 sm:w-5 sm:h-5',
            'aria-hidden': true,
          })}

          <span className="sr-only">{`Visit my ${title}`}</span>
        </Link>
      ))}
    </motion.div>
  )
}
