/**
 * Read time function
 *
 * @description return estimated time to read some text.
 */
const readTime = (content: string, wordsPerMinute = 200) => {
  const contentText = JSON.stringify(content)

  const words = contentText.split(' ').length

  return Math.ceil(words / wordsPerMinute)
}

export default readTime
