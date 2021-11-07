import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

import { MDXRemote } from 'next-mdx-remote'

import Container from '@components/Container'
import { PostProps } from 'src/types/post'

type BlogPostPageProps = {
  post: PostProps
}

export default function BlogPostPage({ post }: BlogPostPageProps) {
  return (
    <Container>
      <MDXRemote {...post.content} />
    </Container>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('content/posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.mdx', '')
    }
  }))

  return {
    paths,
    fallback: false
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
    'utf-8'
  )

  const { content, data } = matter(markdownWithMeta)

  return {
    props: {
      post: {
        content: await serialize(content),
        metadata: data
      }
    }
  }
}
