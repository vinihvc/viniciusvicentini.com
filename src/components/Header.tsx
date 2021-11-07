import NextLink from 'next/link'

import animations from '@lib/animations'

import Box from '@primitives/Box'
import Stack from '@primitives/Stack'
import Link from '@primitives/Link'

import Container from '@components/Container'
import Logo from '@components/Logo'
import MobileMenu from '@components/MobileMenu'

const NavLinks = () => (
  <>
    <NextLink href="/" passHref>
      <Link
        css={{ fontSize: '$3xl', '@sm': { fontSize: '$md' } }}
        {...animations.fadeIn(0.5)}
      >
        Home
      </Link>
    </NextLink>

    <NextLink href="/about" passHref>
      <Link
        css={{ fontSize: '$3xl', '@sm': { fontSize: '$md' } }}
        {...animations.fadeIn(0.75)}
      >
        About
      </Link>
    </NextLink>

    <NextLink href="/repo" passHref>
      <Link
        css={{ fontSize: '$3xl', '@sm': { fontSize: '$md' } }}
        {...animations.fadeIn(1)}
      >
        Repositories
      </Link>
    </NextLink>

    <NextLink href="/blog" passHref>
      <Link
        css={{ fontSize: '$3xl', '@sm': { fontSize: '$md' } }}
        {...animations.fadeIn(1.25)}
      >
        Blog
      </Link>
    </NextLink>
  </>
)

const Header = () => (
  <Box as="header">
    <Container
      css={{
        d: 'flex',
        justify: 'space-between',
        align: 'center',
        h: 70
      }}
    >
      <NextLink href="/" passHref>
        <Logo {...animations.fadeIn(0.25)} />
      </NextLink>

      <Stack
        as="nav"
        css={{
          d: 'none',
          '@sm': {
            d: 'flex'
          }
        }}
      >
        <NavLinks />
      </Stack>

      <MobileMenu css={{ '@sm': { d: 'none' } }}>
        <NavLinks />
      </MobileMenu>
    </Container>
  </Box>
)

export default Header
