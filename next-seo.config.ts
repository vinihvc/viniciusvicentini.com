/**
 * File used by next-seo
 *
 * @see https://github.com/garmeeh/next-seo
 */
export default {
  titleTemplate: '%s // Vinicius Vicentini',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vini-boilerplate.vercel.app',
    site_name: 'Vinicius Vicentini',
    title: 'Vinicius Vicentini',
    images: [
      {
        url: 'https://github.com/vinihvc.png',
        width: 512,
        height: 512,
        alt: 'Vinicius Vicentini',
      },
    ],
  },
  twitter: {
    handle: '@vinihvc',
    site: 'http',
    cardType: 'summary_large_image',
  },
}
