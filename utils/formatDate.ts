/**
 * Formats a date to a string
 *
 * @description return a string with the date formatted
 */
const formatDate = (date: string) => {
  if (!date) return ''

  // MM/YYYY
  return new Intl.DateTimeFormat('en-US', {
    month: '2-digit',
    year: 'numeric',
  }).format(new Date(date))
}

export default formatDate
