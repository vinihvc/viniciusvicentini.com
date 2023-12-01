import { SEO } from '@/constants/seo'
import { MetadataRoute } from 'next'

 const  manifest = (): MetadataRoute.Manifest =>{
  return {
    name: SEO.title,
    short_name: SEO.title,
    description: SEO.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0A0A',
    theme_color: '#0A0A0A',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

export default manifest
