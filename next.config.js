/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowMiddlewareResponseBody: true,
  },
  // output: 'export',
  images: {
    // unoptimized: true,
    // formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
