import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
	return [
		{
			url: 'https://viniciusvicentini.com',
			lastModified: new Date(),
		},
		{
			url: 'https://viniciusvicentini.com/about',
			lastModified: new Date(),
		},
		{
			url: 'https://viniciusvicentini.com/projects',
			lastModified: new Date(),
		},
		{
			url: 'https://viniciusvicentini.com/uses',
			lastModified: new Date(),
		},
		{
			url: 'https://viniciusvicentini.com/bookshelf',
			lastModified: new Date(),
		},
	]
}

export default sitemap
