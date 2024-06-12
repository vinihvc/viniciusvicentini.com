import { SEO } from '@/constants/seo'
import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
	const blogs = []?.map((post: any) => ({
		url: `${SEO.url}/blog/${post.slug}`,
		lastModified: post.metadata.publishedAt,
	}))

	const routes = ['', 'about', 'projects', 'uses', 'bookshelf'].map(
		(route) => ({
			url: `${SEO.url}/${route}`,
			lastModified: new Date().toISOString().split('T')[0],
		}),
	)

	return [...routes, ...blogs]
}

export default sitemap
