import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

import Box from '@primitives/Box'
import Text from '@primitives/Text'

import Container from '@components/Container'
import PostContent from '@components/PostContent'

import readTime from '@utils/readTime'

import { PostProps } from 'src/types/post'

type BlogPostPageProps = {
  post: PostProps
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  const time = readTime(post.content)

  return (
    <Box>
      <Box css={{ h: 200 }} />

      <Container>
        <Text>{time} minutes to read</Text>

        <Text as="h1" size="4xl" weight="bold">
          {post.metadata.title}
        </Text>

        <PostContent css={{ mt: '$10' }} {...post.content} />
      </Container>
    </Box>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content/posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params: { slug } }: Params) {
  const markdownWithMeta = fs.readFileSync(
    path.join('content/posts', slug + '.mdx'),
    'utf-8',
  )

  const { content, data } = matter(markdownWithMeta)

  return {
    props: {
      post: {
        content: await serialize(content),
        metadata: data,
      },
    },
  }
}
