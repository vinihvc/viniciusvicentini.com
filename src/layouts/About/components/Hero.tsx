import Flex from '@primitives/Flex'

import Title from '@components/Title'

const AboutHero = () => {
  return (
    <Flex css={{ h: 300, align: 'center' }}>
      <Title css={{ $$start: '#cc2b5e', $$end: '#753a88' }}>about me</Title>
    </Flex>
  )
}

export default AboutHero
