/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static01.nyt.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'random.imagecdn.app',
      },
      {
        protocol: 'https',
        hostname: 'c4.wallpaperflare.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'prod-images.dacast.com',
      },
      {
        protocol: 'https',
        hostname: 'gisgeography.com',
      },
    ],
  },
};

module.exports = nextConfig;
