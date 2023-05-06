/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  compiler: {
    reactRemoveProperties: { properties: ['^data-testid$'] },
    styledComponents: true,
  },
};

module.exports = nextConfig;
