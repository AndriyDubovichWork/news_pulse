/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static01.nyt.com',
        port: '',
        // pathname: '/image/upload/**',
      },
    ],
  },
};

module.exports = nextConfig;
