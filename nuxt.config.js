export default {
  target: 'static',
  buildModules: ['@nuxt/content', '@nuxtjs/color-mode', '@nuxtjs/pwa'],
  head: {
    title: 'Vicentini',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },
  css: [
    '@/styles/variables.scss',
    '@/styles/normalize.scss',
    '@/styles/global.scss',
  ],
}
