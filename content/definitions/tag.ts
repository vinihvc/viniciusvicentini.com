import { allTagNames, allTagSlugs } from '@/lib/contentlayer'
import { defineNestedType } from 'contentlayer/source-files'

export const Tag = defineNestedType(() => ({
	name: 'Tag',
	fields: {
		title: {
			type: 'enum',
			required: true,
			options: allTagNames,
		},
		slug: {
			type: 'enum',
			required: true,
			options: allTagSlugs,
		},
	},
}))
