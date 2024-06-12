import { SEO } from '@/constants/seo'

const robots = () => {
	return {
		rules: [
			{
				userAgent: '*',
			},
		],
		sitemap: `${SEO.url}/sitemap.xml`,
	}
}

export default robots
