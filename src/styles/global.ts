import { globalCss } from 'stitches.config'

import resetStyles from './reset'

const globalStyles = globalCss({
  // Reset
  ...resetStyles,

  body: {
    fontFamily: '$sans',
    bg: '$bg',
    color: '$white',
    overflowY: 'scroll'
  }
})

export default globalStyles
