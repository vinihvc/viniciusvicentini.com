import { motion } from 'framer-motion'

import animations from '@lib/animations'

import Flex from '@primitives/Flex'
import Grid from '@primitives/Grid'
import Box from '@primitives/Box'
import Heading from '@primitives/Heading'
import Text from '@primitives/Text'
import Button from '@primitives/Button'

import Container from '@components/Container'

const HomeHero = () => {
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
            <Heading
              as={motion.h1}
              css={{ fontSize: '$3xl' }}
              {...animations.fadeIn()}
            >
              Hello, I’m Vini
            </Heading>

            <Text css={{ mt: '$5' }} {...animations.fadeIn(0.5)}>
              Brazilian front-end engineer based in São Paulo, Brazil.
            </Text>
          </Box>
        </Grid>

        <Button css={{ mt: '$10' }} {...animations.fadeIn(0.75)}>
          About me
        </Button>
      </Container>
    </Flex>
  )
}

export default HomeHero
