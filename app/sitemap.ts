import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://viniciusvicentini.com',
      lastModified: new Date(),
    },
    {
      url: 'https://viniciusvicentini.com/career',
      lastModified: new Date(),
    },
    {
      url: 'https://viniciusvicentini.com/projects',
      lastModified: new Date(),
    },
    {
      url: 'https://viniciusvicentini.com/labs',
      lastModified: new Date(),
    },
  ]
}
