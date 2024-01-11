/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'cdn.discordapp.com',
      },
      {
        hostname: 'github.com',
      },
    ],
  },
}

module.exports = nextConfig
