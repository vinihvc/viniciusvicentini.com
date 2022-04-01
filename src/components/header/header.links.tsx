import { useRouter } from 'next/router'

import Link from 'next/link'

import { styled } from 'stitches.config'

import { pageLinks } from '@constants/page-links'
import { motion } from 'framer-motion'

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

export const HeaderLinks = (props: HeaderLinksProps) => {
  const { pathname } = useRouter()

  return (
    <>
      {pageLinks.map(({ href, label }) => (
        <motion.div key={href} initial={{ x: -100 }} animate={{ x: 0 }}>
          <Link href={href} passHref>
            <LinkStyled
              aria-current={href === pathname || undefined}
              {...props}
            >
              {label}
            </LinkStyled>
          </Link>
        </motion.div>
      ))}
    </>
  )
}
