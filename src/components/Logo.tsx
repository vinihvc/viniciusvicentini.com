import { ComponentProps, forwardRef } from 'react'

import { styled } from 'stitches.config'

import Text from '@primitives/Text'

const LogoStyled = styled(Text, {
  d: 'flex',
  h: 33,
  px: '$2',
  br: '$full',
  cursor: 'pointer',
  transition: '$fast',

  '&:hover': {
    bg: '$hover',
  },
})

type LogoProps = ComponentProps<typeof LogoStyled>

const Logo = forwardRef<HTMLDivElement, LogoProps>(({ ...props }, ref) => (
  <LogoStyled ref={ref} role="img" size="2xl" weight="bold" {...props}>
    V
  </LogoStyled>
))

Logo.displayName = 'Logo'

export default Logo
