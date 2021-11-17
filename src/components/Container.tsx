import { styled } from 'stitches.config'

import Box from '@primitives/Box'

export const Container = styled(Box, {
  w: '$full',
  px: '$4',
  mx: 'auto',

  variants: {
    size: {
      md: {
        maxWidth: '$md',
      },
      xl: {
        maxWidth: '$xl',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

export default Container
