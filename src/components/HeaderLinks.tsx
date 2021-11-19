import { useRouter } from 'next/router'

import NextLink from 'next/link'

import { styled } from 'stitches.config'

import pageLinks from '@configs/page-links'

const LinkStyled = styled('a', {
  color: '$grey',
  p: '$2 $4',
  fontSize: '$3xl',
  transition: '$fast',

  '@sm': {
    fontSize: '$md',
  },

  '&:hover, &:focus, &:active, &[aria-current="true"]': {
    color: '$white',
  },
})

type HeaderLinksProps = {
  onClick?: () => void
}

const HeaderLinks = (props: HeaderLinksProps) => {
  const { pathname } = useRouter()

  return (
    <>
      {pageLinks.map(({ href, label }) => (
        <NextLink key={href} href={href} passHref>
          <LinkStyled aria-current={href === pathname || undefined} {...props}>
            {label}
          </LinkStyled>
        </NextLink>
      ))}
    </>
  )
}

export default HeaderLinks
