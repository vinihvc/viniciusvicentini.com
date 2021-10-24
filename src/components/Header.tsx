import NextLink from 'next/link'

import Box from '@primitives/Box'
import Stack from '@primitives/Stack'
import Link from '@primitives/Link'

import Container from '@components/Container'
import Logo from '@components/Logo'
import MobileMenu from '@components/MobileMenu'

const Header = () => (
  <Box as="header">
    <Container
      as="nav"
      css={{
        d: 'flex',
        justify: 'space-between',
        align: 'center',
        h: 70
      }}
    >
      <NextLink href="/" passHref>
        <Logo />
      </NextLink>

      <Stack
        css={{
          d: 'none',
          '@sm': { d: 'flex' }
        }}
      >
        <Link href="#">Home</Link>
        <Link href="#">About</Link>
        <Link href="#">Blog</Link>
      </Stack>

      <MobileMenu css={{ '@sm': { d: 'none' } }} />
    </Container>
  </Box>
)

export default Header
