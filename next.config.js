/** @type {import('next').NextConfig} */

const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching,
});

const nextConfig = withPWA({
  async redirects() {
    return [
      {
        source: '/',
        destination: '/marketplace',
        permanent: true,
        basePath: false,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
      },
    ],
  },
  ...(process.env.NODE_ENV === 'production' && {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
  }),
  env: {
    MORALIS_API_KEY:
      'xPGwTZFZ5HA3XNBrShalY9kpFsaSS9PyBYBoyjOaVCyfJeTzgsQ3FrKQEa8hEG8z',
  },
});
module.exports = nextConfig;
