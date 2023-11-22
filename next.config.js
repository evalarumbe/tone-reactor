/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'user-images.githubusercontent.com',
        port: '',
        pathname: '/19648700/**',
      },
    ],
  },
}

module.exports = nextConfig
