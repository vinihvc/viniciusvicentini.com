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

export const formatShortDate = (date: string) => {
	const _date = new Date(date)

	return isThisYear(_date) ? format(_date, 'MMM d') : format(_date, 'MMM d, y')
}
