import { SEO } from '@/constants/seo'

export const createOgImage = (title: string, fontSize: number) => {
	return `${SEO.url}/api/og?title=${title}&fontSize=${fontSize}`
}
