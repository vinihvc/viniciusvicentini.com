/* eslint-disable @typescript-eslint/no-var-requires */

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      nextScriptWorkers: true,
    },

    async redirects() {
      return [
        {
          source: '/github',
          destination: 'https://github.com/vinihvc',
          permanent: true,
        },
        {
          source: '/twitter',
          destination: 'https://twitter.com/vinihvc',
          permanent: true,
        },
        {
          source: '/linkedin',
          destination: 'https://www.linkedin.com/in/vinihvc',
          permanent: true,
        },
        {
          source: '/instagram',
          destination: 'https://www.instagram.com/vinihvc',
          permanent: true,
        },
      ]
    },
  }),
)
