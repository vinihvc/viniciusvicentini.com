import NextLink from 'next/link'

import { styled } from 'stitches.config'

import Link from '@primitives/Link'

import pageLinks from '@configs/page-links'

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

const HeaderLinks = () => (
  <>
    {pageLinks.map(({ href, label }) => (
      <NextLink key={href} href={href} passHref>
        <LinkStyled>{label}</LinkStyled>
      </NextLink>
    ))}
  </>
)

export default HeaderLinks
