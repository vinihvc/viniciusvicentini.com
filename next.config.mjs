/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
}

export default nextConfig
