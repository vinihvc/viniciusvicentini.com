import Flex from '@primitives/Flex'
import Heading from '@primitives/Heading'

import Container from '@components/Container'

const RepoHero = () => {
  return (
    <Flex css={{ h: 300, align: 'center' }}>
      <Container>
        <Heading as="h2" css={{ fontSize: '$5xl', textAlign: 'center' }}>
          my repositories
        </Heading>
      </Container>
    </Flex>
  )
}

export default RepoHero
