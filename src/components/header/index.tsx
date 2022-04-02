import dynamic from 'next/dynamic'
import NextLink from 'next/link'

import { Box } from '@primitives/box'
import { Stack } from '@primitives/stack'

import { Container } from '@components/container'
import { Logo } from '@components/logo'

import { HeaderLinks } from '@components/header/header.links'

const HeaderMobile = dynamic(() => import('./header.mobile'))

export const Header = () => {
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