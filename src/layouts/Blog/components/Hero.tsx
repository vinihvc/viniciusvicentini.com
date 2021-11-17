import Flex from '@primitives/Flex'

import Title from '@components/Title'

const BlogHero = () => {
  return (
    <Flex css={{ h: 300, align: 'center' }}>
      <Title css={{ $$start: '#36d1dc', $$end: '#c4e0e5' }}>blog</Title>
    </Flex>
  )
}

export default BlogHero
