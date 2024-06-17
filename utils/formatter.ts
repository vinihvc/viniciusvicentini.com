import type { Post } from '@/.contentlayer/generated'
import { format, isThisYear } from 'date-fns'

/**
 * Format date to YYYY
 *
 * ```ts
 * formatDate('2021-01-01') // 2021
 * ```
 */
export const formatDate = (date: string) => {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
	}).format(new Date(date))
}

/**
 *
 */
export const formatShortDate = (date: string) => {
	const _date = new Date(date)

	return isThisYear(_date) ? format(_date, 'MMM d') : format(_date, 'MMM d, y')
}

/**
 * Don't send fields we don't use to the client
 *
 * @see post.body.raw
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
