import { styled } from 'stitches.config'

import Box from '@primitives/Box'

const Shape = styled(Box, {
  // variables
  $$size: '50px',
  $$bg: '$colors$primary',

  position: 'absolute',
  size: '$$size',
  bg: '$$bg',
  zIndex: -1,

  variants: {
    shape: {
      square: {
        br: 0
      },
      circle: {
        br: '$full'
      },
      rounded: {
        br: '8px'
      }
    }
  },

  defaultVariants: {
    shape: 'circle'
  }
})

export default Shape
