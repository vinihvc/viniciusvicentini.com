/**
 * Format date to MMM YYYY
 *
 * ```ts
 * formatDate('2021-01-01') // JAN 2021
 * ```
 */
const formatDate = (date: string) => {
	return new Intl.DateTimeFormat('en-US', {
		year: 'numeric',
		month: 'short',
	}).format(new Date(date))
}

export default formatDate
