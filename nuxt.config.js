import dotenv from 'dotenv'
dotenv.config()

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
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/icon.png' }],
  },
  css: ['@/styles/global.scss'],
  styleResources: {
    scss: ['@/styles/variables.scss', '@/styles/breakpoints.scss'],
  },
  loading: { color: '#03a9f4' },
  pwa: {
    manifest: {
      name: 'Vinicius Vicentini',
      lang: 'pt-br',
      display: 'standalone',
      background_color: '#03a9f4',
    },
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
}
