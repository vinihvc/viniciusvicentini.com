import { ArticlesPageProps } from '@pages/articles'

import Grid from '@primitives/Grid'

import ArticleCard from '@components/ArticleCard'
import Container from '@components/Container'
import Hero from '@components/Hero'

const ArticleTemplate = ({ articles }: ArticlesPageProps) => {
  return (
    <Container>
      <Hero start="#36d1dc" end="#c4e0e5">
        articles
      </Hero>

      <Grid
        css={{
          columns: 'repeat(1, 1fr)',
          gap: '$5',
          '@md': {
            columns: 'repeat(2, 1fr)',
          },
        }}
      >
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </Grid>
    </Container>
  )
}

export default ArticleTemplate
