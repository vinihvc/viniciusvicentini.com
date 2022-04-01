import { ComponentProps, forwardRef } from 'react'

import { styled } from 'stitches.config'

const LogoStyled = styled('a', {
  d: 'flex',
  size: 33,
  color: 'currentColor',
  justify: 'center',
  align: 'center',
  fontSize: '$2xl',
  fontWeight: '$bold',
  br: '$full',
  cursor: 'pointer',
  transition: '$fast',

  '&:hover': {
    bg: '$hover',
  },
})

type LogoProps = ComponentProps<typeof LogoStyled>

export const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ ...props }, ref) => (
    <LogoStyled as="a" ref={ref} role="img" {...props}>
      V
    </LogoStyled>
  ),
)
