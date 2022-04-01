import { motion } from 'framer-motion'

import { Box } from '@primitives/box'
import { Text } from '@primitives/text'
import { Link } from '@primitives/link'
import { Flex } from '@primitives/flex'

import { HomeSocialLinks } from './social-links'

export const HomeHero = () => {
  return (
    <Box>
      <Text
        as={motion.h1}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        size={{ '@initial': '2xl', '@sm': '4xl' }}
        weight="bold"
      >
        Vinicius Vicentini
      </Text>

      <Text
        as={motion.h2}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        viewport={{ once: true }}
        weight="normal"
        color="grey"
      >
        Front-end engineer who loves UX, Performance and Design.
      </Text>

      <Flex css={{ gap: '$1', ml: '$1', my: '$5' }}>
        {[...Array(5)].map((_, i) => (
          <Box
            as={motion.div}
            key={i}
            layoutId={`dot-${i}`}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.6 + 0.1 * i }}
            viewport={{ once: true }}
            css={{
              size: 3,
              bg: '$white',
            }}
            aria-hidden
          />
        ))}
      </Flex>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.3 }}
      >
        <Text weight="normal" color="grey">
          Brazilian based in Ribeirão Preto, Brazil.
        </Text>

        <Text weight="normal" color="grey">
          {'Currently working at '}

          <Link
            href="https://blockade.games/"
            target="_blank"
            rel="noreferrer noopener"
            decorated
          >
            Blockade Games.
          </Link>
        </Text>
      </motion.div>

      <HomeSocialLinks />
    </Box>
  )
}
