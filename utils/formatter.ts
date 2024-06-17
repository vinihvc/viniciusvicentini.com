import type { Post } from '@/.contentlayer/generated'
import { format } from 'date-fns'

/**
 * Calculate the read time of a post
 *
 */
export const readTime = (content: string, wordsPerMinute = 238) => {
	const contentText = JSON.stringify(content)

	const words = contentText.split(' ').length

	return Math.ceil(words / wordsPerMinute)
}

/**
 * Don't send fields we don't use to the client
 *
 */
export const formatPost = (post: Post) => {
	return {
		title: post.title,
		slug: post.slug,
		publishedAt: format(post.publishedAt, 'MMMM d, y'),
		updatedAt: post.updatedAt ? format(post.updatedAt, 'MMMM d, y') : null,
		description: post.description,

		body: {
			code: post.body.code,
			raw: post.body.raw,
		},
	}
}
