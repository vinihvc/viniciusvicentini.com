import { m } from 'framer-motion'

import { Flex } from '@/components/primitives/flex'

import { PageTitle } from '@/components/page-title'

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
        h: 150,
        align: 'center',

        '@md': {
          h: 250,
        },
      }}
    >
      <m.div
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
      </m.div>
    </Flex>
  )
}
