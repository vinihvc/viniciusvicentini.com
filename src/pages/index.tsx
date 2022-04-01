import { Flex } from '@primitives/flex'

import { Container } from '@components/container'

import { HomeHero } from '@features/home/hero'

const HomePage = () => {
  return (
    <Container>
      <Flex
        css={{
          w: '$full',
          h: 'calc(100vh - 100px)',
          justify: 'center',
          align: 'center',
        }}
      >
        <HomeHero />
      </Flex>
    </Container>
  )
}

export default HomePage
