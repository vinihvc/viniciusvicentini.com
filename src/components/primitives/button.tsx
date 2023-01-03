import { styled } from 'stitches.config'

export const Button = styled('button', {
  // reset
  appearance: 'none',
  border: 'none',
  outline: 'none',
  textDecoration: 'none',

  h: 50,
  d: 'flex',
  justify: 'center',
  align: 'center',
  px: '$10',
  bg: '$primary',
  color: '$white',
  fontFamily: '$system',
  fontSize: '$md',
  lineHeight: 1,
  cursor: 'pointer',
  transition: '$fast',

  '&:hover': {
    bg: '$black',
    color: '$white',
  },
})
