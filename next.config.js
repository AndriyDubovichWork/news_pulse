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
      // {
      //   source: '/api/:path*',
      //   headers: [
      //     { key: 'Access-Control-Allow-Credentials', value: 'true' },
      //     { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
      //     {
      //       key: 'Access-Control-Allow-Methods',
      //       value: 'GET,DELETE,PATCH,POST,PUT',
      //     },
      //     {
      //       key: 'Access-Control-Allow-Headers',
      //       value:
      //         'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
      //     },
      //   ],
      // },
    ];
  },
};

module.exports = nextConfig;
