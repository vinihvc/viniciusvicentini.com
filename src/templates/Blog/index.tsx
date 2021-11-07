import NextLink from 'next/link'

import Container from '@components/Container'

import { BlogPageProps } from 'src/pages/blog'

import BlogHero from './components/Hero'

const BlogTemplate = ({ posts }: BlogPageProps) => {
  return (
    <Container>
      <BlogHero />

      {posts.map((post) => (
        <div key={post.slug}>
          <NextLink href={`/blog/${post.slug}`} passHref>
            <a>{post.metadata.title}</a>
          </NextLink>
        </div>
      ))}
    </Container>
  )
}

export default BlogTemplate
