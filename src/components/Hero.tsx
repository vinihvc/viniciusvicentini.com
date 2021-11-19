import Flex from '@primitives/Flex'

import Title from '@components/Title'

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

const Hero = ({ start, end, children }: HeroProps) => {
  return (
    <Flex css={{ h: 200, align: 'center', '@md': { h: 300 } }}>
      <Title css={{ $$start: start, $$end: end }}>{children}</Title>
    </Flex>
  )
}

export default Hero
