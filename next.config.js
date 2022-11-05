/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    REALM_ID: process.env.REALM_ID,
  },
};

module.exports = nextConfig;
