/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  pageExtensions: ['page.tsx']
  // future: {
  //   webpack5: true, // If you're using Next.js 11 or above
  // },
};

module.exports = nextConfig;
