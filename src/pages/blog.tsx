import { NextSeo } from 'next-seo'

import BlogTemplate from '@templates/Blog'

const BlogPage = () => {
  return (
    <>
      <NextSeo title="Blog" />

      <BlogTemplate />
    </>
  )
}

export default BlogPage
