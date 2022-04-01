import { styled } from 'stitches.config'

/**
 * @example
 * ```js
 *  $$start: '$colors$text',
 *  $$end: '$colors$text',
 * ```
 */
export const PageTitle = styled('h1', {
  // variables
  $$start: '$colors$text',
  $$end: '$colors$text',

  fontWeight: '$bold',
  fontSize: '$4xl',
  backgroundColor: '$text',
  bg: 'linear-gradient(to right, $$start, $$end)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',
  transition: '$fast',

  '@sm': {
    fontSize: '$5xl',
  },
})
