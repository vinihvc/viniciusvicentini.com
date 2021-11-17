import { NextSeo } from 'next-seo'

import BlogTemplate from '@layouts/Blog'
import { postFilePaths, POSTS_PATH } from '@lib/mdxUtils'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { PostProps } from 'src/types/post'

export type BlogPageProps = {
  posts: PostProps[]
}

const BlogPage = ({ ...props }: BlogPageProps) => {
  return (
    <>
      <NextSeo title="Blog" />

      <BlogTemplate {...props} />
    </>
  )
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { content, data: metadata } = matter(source)
    const slug = filePath.replace(/\.mdx?$/, '')

    return {
      content,
      metadata,
      slug,
    }
  })

  return { props: { posts } }
}

export default BlogPage
