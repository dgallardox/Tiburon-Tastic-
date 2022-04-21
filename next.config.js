/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  future: { webpack5: true },
  nextConfig,
  images: {
    domains: [
      "tiburontastic.wpengine.com",
      "images.unsplash.com",
      "i.ibb.co"
    ],
  },
  }
