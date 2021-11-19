import NextLink from 'next/link'

import { styled } from 'stitches.config'

import Box from '@primitives/Box'
import Text from '@primitives/Text'

import { ArticleProps } from 'src/types/article'

const Content = styled(Text, {
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
})

type ArticleCardProps = {
  article: ArticleProps
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  const {
    metadata: { title },
    content,
  } = article

  const minText = content.slice(0, 100)

  return (
    <NextLink href={`/articles/${article.slug}`} passHref>
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

export default ArticleCard
