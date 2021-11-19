import Flex from '@primitives/Flex'

import Container from '@components/Container'

import HomeHero from './components/Hero'

const HomeTemplate = () => {
  return (
    <Container>
      <Flex
        css={{
          w: '$full',
          h: '90vh',
          justify: 'center',
          align: 'center',
        }}
      >
        <HomeHero />
      </Flex>
    </Container>
  )
}

export default HomeTemplate
