import { motion } from 'framer-motion'

import { styled } from 'stitches.config'

export const Text = styled(motion.span, {
  d: 'block',
  fontFamily: 'inherit',
  lineHeight: 'inherit',
  margin: 0,

  variants: {
    size: {
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm'
      },
      md: {
        fontSize: '$md',
        lineHeight: '$md'
      },
      lg: {
        fontSize: '$lg',
        lineHeight: '$lg'
      },
      xl: {
        fontSize: '$xl',
        lineHeight: '$xl'
      },
      '2xl': {
        fontSize: '$2xl',
        lineHeight: '$2xl'
      }
    },
    weight: {
      normal: {
        fontStyle: 'normal',
        fontWeight: '$normal'
      },
      medium: {
        fontStyle: 'normal',
        fontWeight: '$medium'
      },
      bold: {
        fontStyle: 'normal',
        fontWeight: '$bold'
      }
    }
  },

  defaultVariants: {
    size: 'md',
    weight: 'medium'
  }
})

export default Text
