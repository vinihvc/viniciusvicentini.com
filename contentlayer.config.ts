import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Component = defineDocumentType(() => ({
  name: 'Component',
  filePathPattern: '**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    category: {
      type: 'enum',
      options: ['component', 'hook', 'utility'],
      required: true,
    },
    published: {
      type: 'boolean',
      required: true,
    },
    publishedAt: {
      type: 'string',
      required: true,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (f) => `/${f._raw.flattenedPath}`,
    },
    slugAsParams: {
      type: 'string',
      resolve: (f) => f._raw.flattenedPath.split('/').slice(1).join('/'),
    },
  },
}))

export default makeSource({
  contentDirPath: './content',
  documentTypes: [Component],
  mdx: {
    cwd: process.cwd(),
  },
})
