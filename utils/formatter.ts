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
