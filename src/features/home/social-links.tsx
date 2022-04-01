import { createElement } from 'react'

import { motion } from 'framer-motion'

import { Stack } from '@primitives/stack'
import { Link } from '@primitives/link'

import { socialLinks } from '@constants/social-links'

export const HomeSocialLinks = () => {
  return (
    <Stack
      as="section"
      css={{
        $$gap: '$space$5',
        mt: '$5',
      }}
    >
      {socialLinks.map(({ title, icon, link }, i) => (
        <motion.div
          key={link}
          layoutId={link}
          initial={{ opacity: 0, scale: 0 }}
          viewport={{
            amount: 0.5,
          }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            delay: 6 * 0.3 + i,
          }}
        >
          <Link href={link} title={`Visit my ${title}`} isExternal>
            {createElement(icon, {
              'aria-hidden': true,
            })}
          </Link>
        </motion.div>
      ))}
    </Stack>
  )
}
