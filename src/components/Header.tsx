import NextLink from 'next/link'

import Box from '@primitives/Box'
import Stack from '@primitives/Stack'

import Container from '@components/Container'
import Logo from '@components/Logo'
import HeaderLinks from '@components/HeaderLinks'
import HeaderMobile from '@components/HeaderMobile'

const Header = () => {
  return (
    <Box as="header">
      <Container
        size="xl"
        css={{
          d: 'flex',
          justify: 'space-between',
          align: 'center',
          h: 70,
        }}
      >
        <NextLink href="/" passHref>
          <Logo />
        </NextLink>

        <Stack
          as="nav"
          css={{
            $$gap: '$space$3',
            d: 'none',
            '@sm': {
              d: 'flex',
            },
          }}
        >
          <HeaderLinks />
        </Stack>

        <HeaderMobile css={{ '@sm': { d: 'none' } }} />
      </Container>
    </Box>
  )
}

export default Header
