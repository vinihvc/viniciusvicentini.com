import { useRouter } from 'next/router'

import Link from 'next/link'

import { styled } from 'stitches.config'

import { pageLinks } from '@/constants/page-links'
import { m } from 'framer-motion'

const LinkStyled = styled(Link, {
  color: '$grey',
  p: '$2 $4',
  fontSize: '$3xl',
  transition: '$fast',

  '@sm': {
    fontSize: '$lg',
  },

  '&:hover, &:focus, &:active, &[aria-current="true"]': {
    color: '$white',
  },
})

type HeaderLinksProps = {
  onClick?: () => void
}

export const HeaderLinks = (props: HeaderLinksProps) => {
  const { pathname } = useRouter()

  return (
    <>
      {pageLinks.map(({ href, label }) => (
        <m.div key={href} initial={{ x: -100 }} animate={{ x: 0 }}>
          <LinkStyled
            href={href}
            aria-current={href === pathname || undefined}
            {...props}
          >
            {label}
          </LinkStyled>
        </m.div>
      ))}
    </>
  )
}
