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
 * Pluralize a word
 *
 * ```ts
 * pluralize('cat', 1) // cat
 * pluralize('cat', 2) // cats
 * ```
 */
export const pluralize = (word: string, count: number) => {
  return `${word}${count > 1 ? 's' : ''}`
}
