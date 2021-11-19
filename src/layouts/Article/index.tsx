import NextLink from 'next/link'

import { ArticlePageProps } from '@pages/articles/[slug]'

import Box from '@primitives/Box'
import Text from '@primitives/Text'
import Link from '@primitives/Link'

import Container from '@components/Container'
import ArticleContent from '@components/ArticleContent'

import readTime from '@utils/readTime'

const ArticleLayout = ({ article }: ArticlePageProps) => {
  const time = readTime(article.content)

  return (
    <Box>
      <Box css={{ h: 200 }} />

      <Container>
        <NextLink href="/articles" passHref>
          <Link css={{ d: 'inline-flex', mb: '$10' }} decorated>
            ← Back to articles
          </Link>
        </NextLink>

        <Text>{time} minutes to read</Text>

        <Text as="h1" size="4xl" weight="bold">
          {article.metadata.title}
        </Text>

        <ArticleContent css={{ mt: '$10' }} {...article.content} />
      </Container>
    </Box>
  )
}

export default ArticleLayout
