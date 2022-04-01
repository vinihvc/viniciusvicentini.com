import { styled } from 'stitches.config'

export const Container = styled('div', {
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
