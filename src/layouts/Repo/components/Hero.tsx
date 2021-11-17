import Flex from '@primitives/Flex'

import Title from '@components/Title'

const RepoHero = () => {
  return (
    <Flex css={{ h: 300, align: 'center' }}>
      <Title css={{ $$start: '#4568dc', $$end: '#b06ab3' }}>projects</Title>
    </Flex>
  )
}

export default RepoHero
