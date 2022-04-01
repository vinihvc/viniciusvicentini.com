import { styled } from 'stitches.config'

export const Container = styled('div', {
  w: '$full',
  px: '$4',
  m: '0 auto',

  variants: {
    size: {
      md: {
        maxW: '$md',
      },
      xl: {
        maxW: '$xl',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
