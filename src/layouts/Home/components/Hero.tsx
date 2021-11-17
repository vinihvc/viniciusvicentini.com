import Flex from '@primitives/Flex'
import Box from '@primitives/Box'
import Text from '@primitives/Text'
import Link from '@primitives/Link'

import HomeSocialMedias from './SocialMedia'

const HomeHero = () => {
  return (
    <Flex
      css={{
        w: '$full',
        h: '90vh',
        justify: 'center',
        align: 'center',
      }}
    >
      <Box>
        <Text as="h1" size={{ '@initial': '2xl', '@sm': '4xl' }} weight="bold">
          Vinicius Vicentini
        </Text>

        <Text color="grey">
          Design engineer in love with emotional interfaces.
        </Text>

        <Box
          as="hr"
          css={{
            maxW: 50,
            m: '$5 0',
            border: '1px dashed $colors$white',
          }}
        />

        <Text color="grey">
          Brazilian front-end engineer based in Ribeirão Preto, Brazil.
        </Text>

        <Text color="grey">
          {'Currently working at '}

          <Link
            href="https://fotontech.io/"
            target="_blank"
            rel="noreferrer noopener"
            decorated
          >
            Foton Tech.
          </Link>
        </Text>

        <HomeSocialMedias />
      </Box>
    </Flex>
  )
}

export default HomeHero
