/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['s3.filebase.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.filebase.com',
      },
    ],
  },
};

module.exports = nextConfig;
