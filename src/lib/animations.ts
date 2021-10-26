/**
 * @example
 * ```js
 * fadeIn(0.25)
 * ```
 *
 * @param delay duration of animation
 */
export const fadeIn = (delay = 0.25) => ({
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  transition: {
    delay
  }
})

export default {
  fadeIn
}
