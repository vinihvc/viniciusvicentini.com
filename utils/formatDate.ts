/**
 * Formats a date to a string
 *
 * @description return a string with the date formatted
 */
const formatDate = (date: string) => {
  if (!date) return ''

  // MM/YYYY
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
  }).format(new Date(date))
}

export default formatDate
