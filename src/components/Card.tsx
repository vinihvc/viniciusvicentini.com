import Box from '@primitives/Box'
import Text from '@primitives/Text'

type CardProps = {
  title: string
  children: React.ReactNode
}

const Card = ({ title, children }: CardProps) => {
  return (
    <Box as="article" css={{ p: '$5', bg: '$card', color: '$white' }}>
      <Text>{title}</Text>

      <Text>{children}</Text>
    </Box>
  )
}

export default Card
