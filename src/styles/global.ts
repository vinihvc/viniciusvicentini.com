import { globalCss } from 'stitches.config'

import resetStyles from './reset'

const globalStyles = globalCss({
  // Reset
  ...resetStyles,

  body: {
    fontFamily: '$sans',
    bg: '$bg',
    color: '$white',
    overflowY: 'scroll',
  },

  '::selection': {
    color: '$black',
    background: '$white',
  },
})

export default globalStyles
