import { ComponentProps, forwardRef } from 'react'

import { styled } from 'stitches.config'

import Text from '@primitives/Text'

const LogoStyled = styled(Text, {
  d: 'flex',
  cursor: 'pointer'
})

type LogoProps = ComponentProps<typeof LogoStyled>

const Logo = forwardRef<HTMLDivElement, LogoProps>(({ ...props }, ref) => (
  <LogoStyled ref={ref} role="img" size="2xl" weight="bold" {...props}>
    Vini
  </LogoStyled>
))

Logo.displayName = 'Logo'

export default Logo
