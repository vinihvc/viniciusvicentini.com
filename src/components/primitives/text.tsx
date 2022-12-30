import { styled } from 'stitches.config'

export const Text = styled('span', {
  // reset
  d: 'block',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
  margin: 0,

  color: 'currentColor',

  variants: {
    size: {
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs',
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      md: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg',
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$2xl',
      },
      '3xl': {
        fontSize: '$3xl',
        lineHeight: '$3xl',
      },
      '4xl': {
        fontSize: '$4xl',
        lineHeight: '$4xl',
      },
    },
    weight: {
      thin: {
        fontStyle: 'normal',
        fontWeight: '$thin',
      },
      normal: {
        fontStyle: 'normal',
        fontWeight: '$normal',
      },
      medium: {
        fontStyle: 'normal',
        fontWeight: '$medium',
      },
      bold: {
        fontStyle: 'normal',
        fontWeight: '$bold',
      },
    },
    color: {
      text: {
        color: '$text',
      },
      grey: {
        color: '$grey',
      },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})
