import { styled } from 'stitches.config'

const Title = styled('h1', {
  // variables
  $$start: '$colors$text',
  $$end: '$colors$text',
  fontWeight: '$bold',
  fontSize: '$3xl',
  backgroundColor: '$text',
  bg: 'linear-gradient(to right, $$start, $$end)',
  '-webkit-background-clip': 'text',
  '-webkit-text-fill-color': 'transparent',

  '@sm': {
    fontSize: '$5xl',
  },
})

export default Title
