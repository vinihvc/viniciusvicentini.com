import { allTagSlugs, formatPostPreview } from '@/lib/contentlayer'
import { allPosts, type Tag } from 'contentlayer/generated'

export const getParams = () => {
	return [
		// // `/`
		// { filters: [] },
		// `/blog`
		{ filters: ['blog'] },
		// `/tag/[tag]`
		...allTagSlugs.map((tag) => ({ filters: ['tag', tag] })),
		// `/blog/tag/[tag]`
		...allTagSlugs.map((tag) => ({ filters: ['blog', 'tag', tag] })),
	]
}

export type PostParams = {
	filters: ['blog' | 'tag', string?, string?] | undefined
}

const getTag = (params: PostParams) => {
	let tag: Tag['slug'] | undefined = undefined

	if (params.filters) {
		if (
			// `/tag/[tag]`
			params.filters[0] === 'tag' &&
			params.filters[1]
		) {
			tag = params.filters[1] as Tag['slug']
		} else if (
			// `[type]/tag/[tag]`
			params.filters[1] === 'tag' &&
			params.filters[2]
		) {
			tag = params.filters[2] as Tag['slug']
		}
	}

	return tag
}

// Get all videos and posts, apply filters if params exist, and return the
// subset of fields used for preview cards
export const getPosts = (params?: PostParams) => {
	let posts = [
		...allPosts
			// filter out draft posts
			.filter((p) => p.status === 'published')
			.map(formatPostPreview),
	]
		// sort posts by published date
		.sort(
			(a, b) =>
				Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt)),
		)

	// format filters so they're easier to work with
	let filters:
		| {
				type?: 'blog'
				tag?: Tag['slug']
		  }
		| undefined = undefined

	// if params are provided, filter out posts that don't match
	if (params?.filters) {
		filters = {}

		if (params.filters[0] === 'blog') {
			filters.type = 'blog'
			// filter by post type
			posts = posts.filter((p) => p.type === 'Post')
		}

		const tag = getTag(params)

		if (tag) {
			filters.tag = tag
			// filter by post tag
			posts = posts.filter((p) => p.tags.find((x) => x.slug === tag))
		}
	}

	return { posts, filters }
}
