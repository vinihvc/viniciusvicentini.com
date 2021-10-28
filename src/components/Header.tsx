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
        {...animations.fadeIn(0.25)}
        css={{ fontSize: '$3xl', '@sm': { fontSize: '$md' } }}
      >
        Home
      </Link>
    </NextLink>

    <NextLink href="/about" passHref>
      <Link
        {...animations.fadeIn(0.5)}
        css={{ fontSize: '$3xl', '@sm': { fontSize: '$md' } }}
      >
        About
      </Link>
    </NextLink>

    <NextLink href="/repo" passHref>
      <Link
        {...animations.fadeIn(0.75)}
        css={{ fontSize: '$3xl', '@sm': { fontSize: '$md' } }}
      >
        Repositories
      </Link>
    </NextLink>

    <NextLink href="/blog" passHref>
      <Link
        {...animations.fadeIn(0.75)}
        css={{ fontSize: '$3xl', '@sm': { fontSize: '$md' } }}
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
        <Logo
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ duration: 1.25 }}
        />
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
