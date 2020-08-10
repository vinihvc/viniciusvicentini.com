import metas from './content/metas'

export default {
  target: 'static',
  buildModules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/google-analytics',
  ],
  head: {
    htmlAttrs: {
      lang: 'pt-br',
    },
    titleTemplate: '%s | Vinicius Vicentini',
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
    metas,
  },
  css: ['@/styles/global.scss'],
  styleResources: {
    scss: ['@/styles/variables.scss', '@/styles/breakpoints.scss'],
  },
  loading: { color: '#03a9f4' },
  pwa: {
    manifest: {
      name: 'Vinicius Vicentini',
      short_name: 'Vicentini',
      lang: 'pt-br',
      background_color: '#37383c',
    },
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
}
