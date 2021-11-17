import { styled } from 'stitches.config'

import Box from '@primitives/Box'

const childWithGap = '> * + *'

export const Stack = styled(Box, {
  d: 'flex',
  $$gap: '$space$10',

  variants: {
    direction: {
      column: {
        flexDirection: 'column',
        [childWithGap]: { m: '$$gap 0 0 0' },
      },
      row: {
        flexDirection: 'row',
        [childWithGap]: { m: '0 0 0 $$gap' },
      },
      'row-reverse': {
        flexDirection: 'row-reverse',
        [childWithGap]: { m: '0 $$gap 0 0' },
      },
      'column-reverse': {
        flexDirection: 'column-reverse',
        [childWithGap]: { m: '0 0 $$gap 0' },
      },
    },
  },
  defaultVariants: {
    direction: 'row',
  },
})

export default Stack
