/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  env: {
    REALM_ID: process.env.REALM_ID,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
    STRIPE_WEBHOOK_ID: process.env.STRIPE_WEBHOOK_ID,
  },
};

module.exports = nextConfig;
