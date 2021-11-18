import { ComponentProps } from 'react'

import { MDXRemote } from 'next-mdx-remote'

import { CSS, styled } from 'stitches.config'

const Wrapper = styled('div', {
  color: '$text',
  fontFamily: '$sans',
  fontSize: '$xl',
  letterSpacing: 1.1,
  lineHeight: 1.7,

  'p, span': {
    fontWeight: '$thin',
  },

  'h1, h2, h3, h4, h5, h6': {
    fontWeight: '$bold',
  },

  '> *': {
    mb: '$4',
  },

  'img, iframe': {
    w: '$full',
    br: '$md',
  },

  ul: {
    listStyle: 'inside',
    pl: '$5',
  },

  li: {
    fontWeight: '$thin',
    fontStyle: 'italic',
  },
})

type PostContentProps = {
  css?: CSS
} & ComponentProps<typeof MDXRemote>

const PostContent = ({ css, ...props }: PostContentProps) => {
  return (
    <Wrapper css={css}>
      <MDXRemote {...props} />
    </Wrapper>
  )
}

export default PostContent
