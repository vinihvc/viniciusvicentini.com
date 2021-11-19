import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

import { NextSeo } from 'next-seo'

import ArticleLayout from '@layouts/Article'

import { ArticleProps } from 'src/types/article'

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('content/articles'))

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

export const getStaticProps = async ({ params: { slug } }: Params) => {
  const markdownWithMeta = fs.readFileSync(
    path.join('content/articles', slug + '.mdx'),
    'utf-8',
  )

  const { content, data } = matter(markdownWithMeta)

  return {
    props: {
      article: {
        content: await serialize(content),
        metadata: data,
      },
    },
  }
}

export type ArticlePageProps = {
  article: ArticleProps
}

const ArticlePage = ({ article }: ArticlePageProps) => {
  return (
    <>
      <NextSeo title={article.metadata.title} />

      <ArticleLayout article={article} />
    </>
  )
}

export default ArticlePage
