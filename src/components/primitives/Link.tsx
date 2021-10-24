import { motion } from 'framer-motion'

import { styled } from 'stitches.config'

export const Link = styled(motion.a, {
  d: 'block',
  textDecoration: 'none',
  color: '$white',

  '&:visited': {
    color: '$white'
  },

  '&:hover': {
    color: '$primary'
  }
})

export default Link
