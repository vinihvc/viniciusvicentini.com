import { motion } from 'framer-motion'

import { Flex } from '@primitives/flex'

import { PageTitle } from '@components/page-title'

type HeroProps = {
  /**
   * Gradient start color
   */
  start: string
  /**
   * Gradient end color
   */
  end: string
  /**
   * Title of the hero
   */
  children: React.ReactNode
}

export const Hero = ({ start, end, children }: HeroProps) => {
  return (
    <Flex
      css={{
        h: 200,
        align: 'center',

        '@md': {
          h: 300,
        },
      }}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        <PageTitle css={{ $$start: start, $$end: end }}>{children}</PageTitle>
      </motion.div>
    </Flex>
  )
}
