// const withSass = require('@zeit/next-sass');

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
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader', // Adds CSS to the DOM by injecting a <style> tag
          'css-loader', // Translates CSS into CommonJS
          'sass-loader', // Compiles Sass to CSS
        ],
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: 'upgrade-insecure-requests',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
