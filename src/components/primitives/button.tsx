import { styled } from 'stitches.config'

export const Button = styled('button', {
  appearance: 'none',
  border: 'none',
  margin: 0,
  height: 50,
  px: '$10',
  backgroundColor: '$primary',
  color: '$white',
  fontFamily: '$system',
  fontSize: '$3',
  lineHeight: 1,
  cursor: 'pointer',
  transition: '$fast',

  '&:hover': {
    bg: '$black',
    color: '$white',
  },
})
