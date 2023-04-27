/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
    domains: ['ucarecdn.com'],
  }
}

module.exports = nextConfig
