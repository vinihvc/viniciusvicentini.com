/**
 * Convert px to rem
 *
 * @example
 * ```js
 * pxToRem(16) // 1rem
 * ```
 */
const pxToRem = (px: number, base = 16) => `${px / base}rem`

export default pxToRem
