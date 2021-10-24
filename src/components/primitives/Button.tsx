import { forwardRef } from 'react'

import { motion } from 'framer-motion'

import { styled } from 'stitches.config'

export const ButtonStyled = styled(motion.button, {
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
    color: '$white'
  }
})

type ButtonProps = React.ComponentProps<typeof ButtonStyled>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, ...props }, ref) => (
    <ButtonStyled ref={ref} {...props}>
      {children}
    </ButtonStyled>
  )
)

Button.displayName = 'Button'

export default Button
