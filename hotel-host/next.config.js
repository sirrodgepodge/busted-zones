/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/host',
  transpilePackages: ["@hotel/shared"],
}

module.exports = nextConfig
