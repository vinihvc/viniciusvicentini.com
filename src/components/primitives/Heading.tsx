import { motion } from 'framer-motion'

import { styled } from 'stitches.config'

export const Heading = styled(motion.h2, {
  variants: {
    level: {
      1: {
        fontSize: '$2xl',
        fontWeight: '$bold',
        lineHeight: '$2xl'
      },
      2: {
        fontSize: '$xl',
        fontWeight: '$bold',
        lineHeight: '$xl'
      },
      3: {
        fontSize: '$lg',
        fontWeight: '$bold',
        lineHeight: '$lg'
      },
      4: {
        fontSize: '$md',
        fontWeight: '$bold',
        lineHeight: '$md'
      },
      5: {
        fontSize: '$sm',
        fontWeight: '$bold',
        lineHeight: '$sm'
      },
      6: {
        fontSize: '$xs',
        fontWeight: '$bold',
        lineHeight: '$xs'
      }
    }
  },

  defaultVariants: {
    level: 2
  }
})

export default Heading
