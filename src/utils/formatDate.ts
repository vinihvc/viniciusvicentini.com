/**
 * Formats a date to a string
 *
 * @description return a string with the date formatted
 */
const formatDate = (date: string) => {
  if (!date) return ''

  return new Intl.DateTimeFormat('en-US', {
    month: 'numeric',
    year: 'numeric',
  }).format(new Date(date))
}

export default formatDate
