/* eslint-disable @typescript-eslint/no-var-requires */

// Environment type
const isProd = process.env.NODE_ENV === 'production'

//Compose Plugins
const withPlugins = require('next-compose-plugins')

// Generate PWA manifest
const withPWA = require('next-pwa')

// Bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')

// MDX support
const withMDX = require('@next/mdx')

// Next configs
const nextConfigs = {
  reactStrictMode: true,
  swcMinify: true
}

// Redirects to social media
const redirectConfigs = async () => [
  {
    source: '/twitter',
    destination: 'https://twitter.com/viniciushvc',
    permanent: true
  },
  {
    source: '/github',
    destination: 'https://github.com/viniciushvc',
    permanent: true
  }
]

// Replace React with Preact
const replaceReactConfig = {
  webpack: (config, { dev, isServer }) => {
    // only in client production build
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }

    return config
  }
}

// Export config
module.exports = withPlugins(
  [
    withBundleAnalyzer({
      enabled: process.env.ANALYZE === 'true'
    }),
    withMDX({
      extension: /\.mdx?$/
    }),
    withPWA({
      pwa: {
        dest: 'public',
        disable: !isProd
      }
    })
  ],
  { ...nextConfigs, redirectConfigs, ...replaceReactConfig }
)
