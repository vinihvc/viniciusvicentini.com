/* eslint-disable @typescript-eslint/ban-ts-comment */

import { globalCss } from 'stitches.config'

const globalStyles = globalCss({
  'html, body': {
    transition: '$fast'
  },
  body: {
    fontFamily: '$sans',
    bg: '$bg',
    color: '$white'
  }
})

export default globalStyles
