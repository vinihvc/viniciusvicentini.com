import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
  },
  computedFields: {
    slug: { type: 'string', resolve: (post) => post._raw.sourceFileName.replace('.mdx', '')}
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post]
})
