import { styled } from 'stitches.config'

export const Link = styled('a', {
  textDecoration: 'none',
  color: '$white',
  cursor: 'pointer',

  '&:visited': {
    color: '$white',
  },

  '&:hover': {
    color: '$white',
  },

  variants: {
    decorated: {
      true: {
        borderBottom: '1px solid $colors$grey',
        pb: 2,
        transition: '$fast',

        '&:hover': {
          borderBottomColor: '$colors$white',
        },
      },
    },
  },
})

export default Link
