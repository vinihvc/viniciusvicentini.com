import { motion } from 'framer-motion'

import { Stack } from '@primitives/stack'
import { Link } from '@primitives/link'
import { Box } from '@primitives/box'

import { socialLinks } from '@constants/social-links'

export const HomeSocialLinks = () => {
  return (
    <Stack
      as={motion.div}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 1.7 }}
      css={{
        $$gap: '$space$10',
        mt: '$5',

        '@md': {
          $$gap: '$space$5',
        },
      }}
    >
      {socialLinks.map(({ title, icon, link }) => (
        <Link
          key={link}
          href={link}
          title={`Visit my ${title}`}
          isExternal
          css={{
            transition: '$fast',
            '&:hover': {
              color: '$primary',
            },
          }}
        >
          <Box
            as={icon}
            aria-hidden
            css={{
              fontSize: '$2xl',
              transition: '$fast',
              '@md': {
                fontSize: '$lg',
              },
            }}
          />
        </Link>
      ))}
    </Stack>
  )
}
