export default {
  target: 'static',
  buildModules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  head: {
    htmlAttrs: {
      lang: 'pt-br',
    },
    titleTemplate: '%s | Vicentini',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },
  css: ['@/styles/global.scss'],
  styleResources: {
    scss: ['@/styles/variables.scss', '@/styles/mixins.scss'],
  },
  loading: { color: '#0065ff' },
}
