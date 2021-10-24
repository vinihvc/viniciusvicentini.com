import Box from '@primitives/Box'
import Heading from '@primitives/Heading'
import Text from '@primitives/Text'

type CardProps = {
  title: string
  children: React.ReactNode
}

const Card = ({ title, children }: CardProps) => {
  return (
    <Box as="article" css={{ p: '$5', bg: '$card', color: '$white' }}>
      <Heading>{title}</Heading>

      <Text>{children}</Text>
    </Box>
  )
}

export default Card
