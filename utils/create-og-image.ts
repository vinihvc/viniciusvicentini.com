import { SEO } from '@/constants/seo'

/**
 * Create an og:image URL with the title and font size
 *
 * ```ts
 * createOgImage('Hello World', 80) // https://www.vini.one/api/og?title=Hello%20World&fontSize=80
 * ```
 */
export const createOgImage = (title: string, fontSize: number) => {
	return `${SEO.url}/api/og?title=${title}&fontSize=${fontSize}`
}
