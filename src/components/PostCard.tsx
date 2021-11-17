import NextLink from 'next/link'

import { styled } from 'stitches.config'

import Box from '@primitives/Box'
import Text from '@primitives/Text'

import { PostProps } from 'src/types/post'

const Content = styled(Text, {
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
})

type PostCardProps = {
  post: PostProps
}

const PostCard = ({ post }: PostCardProps) => {
  const {
    metadata: { title },
    content,
  } = post

  const minText = content.slice(0, 100)

  return (
    <NextLink href={`/blog/${post.slug}`} passHref>
      <Box as="a">
        <Box as="article">
          <Text as="h3" weight="bold">
            {title}
          </Text>

          <Content>{minText}</Content>
        </Box>
      </Box>
    </NextLink>
  )
}

export default PostCard
