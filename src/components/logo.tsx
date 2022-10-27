import { ComponentProps, forwardRef } from 'react'

import { styled } from 'stitches.config'

const LogoStyled = styled('div', {
  d: 'flex',
  size: 33,
  color: '$white',
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

export const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ ...props }, ref) => (
    <LogoStyled ref={ref} role="img" {...props}>
      V
    </LogoStyled>
  ),
)
