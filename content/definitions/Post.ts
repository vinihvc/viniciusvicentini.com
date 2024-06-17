import { defineDocumentType } from 'contentlayer/source-files'

export const Post = defineDocumentType(() => ({
	name: 'Post',
	// Location of Post source files (relative to `contentDirPath`)
	filePathPattern: 'posts/*.mdx',
	contentType: 'mdx',
	fields: {
		title: { type: 'string', required: true },
		description: { type: 'string', required: true },
		publishedAt: { type: 'string', required: true },
		updatedAt: { type: 'string', required: false },
		status: { type: 'enum', options: ['draft', 'published'], required: true },
	},
	computedFields: {
		slug: {
			type: 'string',
			resolve: (post) =>
				post._raw.sourceFileName
					// hello-world.mdx => hello-world
					.replace(/\.mdx$/, ''),
		},
	},
}))
