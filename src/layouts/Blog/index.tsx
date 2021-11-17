import Grid from '@primitives/Grid'

import PostCard from '@components/PostCard'
import Container from '@components/Container'

import BlogHero from './components/Hero'

import { BlogPageProps } from 'src/pages/blog'

const BlogTemplate = ({ posts }: BlogPageProps) => {
  return (
    <Container>
      <BlogHero />

      <Grid
        css={{
          columns: 'repeat(1, 1fr)',
          gap: '$5',
          '@md': {
            columns: 'repeat(2, 1fr)',
          },
        }}
      >
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </Grid>
    </Container>
  )
}

export default BlogTemplate
