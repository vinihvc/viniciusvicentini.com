import { NextSeo } from 'next-seo'

import ArticlesTemplate from '@layouts/Articles'
import { articleFilePaths, ARTICLES_PATH } from '@lib/mdxUtils'

import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { ArticleProps } from 'src/types/article'

export type ArticlesPageProps = {
  articles: ArticleProps[]
}

const ArticlesPage = ({ ...props }: ArticlesPageProps) => {
  return (
    <>
      <NextSeo title="Articles" />

      <ArticlesTemplate {...props} />
    </>
  )
}

export const getStaticProps = () => {
  const articles = articleFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(ARTICLES_PATH, filePath))
    const { content, data: metadata } = matter(source)
    const slug = filePath.replace(/\.mdx?$/, '')

    return {
      content,
      metadata,
      slug,
    }
  })

  return { props: { articles } }
}

export default ArticlesPage
