/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: '/shop/product',
        destination: '/shop',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
