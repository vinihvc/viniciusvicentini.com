import Box from '@primitives/Box'
import Text from '@primitives/Text'
import Link from '@primitives/Link'

import HomeSocialMedias from './SocialMedia'

const HomeHero = () => {
  return (
    <Box>
      <Text as="h1" size={{ '@initial': '2xl', '@sm': '4xl' }} weight="bold">
        Vinicius Vicentini
      </Text>

      <Text weight="normal" color="grey">
        Front-end engineer who loves UX, Performance and Design.
      </Text>

      <Box
        as="hr"
        css={{
          maxW: 50,
          m: '$5 0',
          border: '1px dashed $colors$white',
        }}
      />

      <Text weight="normal" color="grey">
        Brazilian based in Ribeirão Preto, Brazil.
      </Text>

      <Text weight="normal" color="grey">
        {'Currently working at '}

        <Link
          href="https://blockade.games/"
          target="_blank"
          rel="noreferrer noopener"
          decorated
        >
          Blockade Games.
        </Link>
      </Text>

      <HomeSocialMedias />
    </Box>
  )
}

export default HomeHero
