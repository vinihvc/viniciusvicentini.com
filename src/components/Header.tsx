import NextLink from 'next/link'

import Box from '@primitives/Box'
import Stack from '@primitives/Stack'
import Link from '@primitives/Link'

import Container from '@components/Container'
import Logo from '@components/Logo'
import MobileMenu from '@components/MobileMenu'
import { styled } from 'stitches.config'

const LinkStyled = styled(Link, {
  fontSize: '$3xl',
  p: '$2 $4',
  br: '$full',
  transition: '$fast',
  border: '1px solid transparent',
  textAlign: 'center',

  '@sm': {
    fontSize: '$md',
  },

  '&:hover': {
    bg: '$hover',
  },

  '&:focus': {
    borderColor: '$grey',
  },
})

const NavLinks = () => (
  <>
    <NextLink href="/about" passHref>
      <LinkStyled>About</LinkStyled>
    </NextLink>

    <NextLink href="/repo" passHref>
      <LinkStyled>Projects</LinkStyled>
    </NextLink>

    <NextLink href="/blog" passHref>
      <LinkStyled>Blog</LinkStyled>
    </NextLink>
  </>
)

const Header = () => (
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
        <NavLinks />
      </Stack>

      <MobileMenu css={{ '@sm': { d: 'none' } }}>
        <NavLinks />
      </MobileMenu>
    </Container>
  </Box>
)

export default Header
