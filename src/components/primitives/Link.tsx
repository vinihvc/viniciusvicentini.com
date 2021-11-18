import { AnchorHTMLAttributes, forwardRef } from 'react'

import { styled, CSS, VariantProps } from 'stitches.config'

export const LinkStyled = styled('a', {
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

type LinkProps = {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean
  /**
   *  Add a decoration to the link
   */
  decorated?: VariantProps<typeof LinkStyled>['decorated']
  /**
   * The content of the link
   */
  css?: CSS
  /**
   * The content of the link
   */
  children?: React.ReactNode
} & AnchorHTMLAttributes<HTMLAnchorElement>

const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  const { isExternal, children, ...rest } = props

  return (
    <LinkStyled
      ref={ref}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      target={isExternal ? '_blank' : undefined}
      {...rest}
    >
      {children}
    </LinkStyled>
  )
})

export default Link
