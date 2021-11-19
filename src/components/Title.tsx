import { styled } from 'stitches.config'

/**
 * @example
 * ```js
 *  $$start: '$colors$text',
 *  $$end: '$colors$text',
 * ```
 */
const Title = styled('h1', {
  // variables
  $$start: '$colors$text',
  $$end: '$colors$text',
  fontWeight: '$bold',
  fontSize: '$4xl',
  backgroundColor: '$text',
  bg: 'linear-gradient(to right, $$start, $$end)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',

  '@sm': {
    fontSize: '$5xl',
  },
})

export default Title
