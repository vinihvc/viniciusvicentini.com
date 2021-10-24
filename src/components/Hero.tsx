import Flex from '@primitives/Flex'
import Grid from '@primitives/Grid'
import Box from '@primitives/Box'
import Heading from '@primitives/Heading'
import Text from '@primitives/Text'
import Button from '@primitives/Button'

import Container from '@components/Container'

const Hero = () => {
  return (
    <Flex css={{ h: 500, align: 'center' }}>
      <Container>
        <Grid
          css={{
            columns: 'repeat(1, 1fr)',
            '@md': {
              columns: 'repeat(2, 1fr)'
            }
          }}
        >
          <Box>
            <Heading css={{ fontSize: '$3xl' }}>Hello, I’m Vini</Heading>

            <Text css={{ mt: '$5' }}>
              Brazilian front-end engineer based in São Paulo, Brazil.
            </Text>
          </Box>
        </Grid>

        <Button css={{ mt: '$10' }}>About me</Button>
      </Container>
    </Flex>
  )
}

export default Hero
