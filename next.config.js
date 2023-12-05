/** @type {import('next').NextConfig} */

// const { withSentryConfig } = require('@sentry/nextjs');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  // distDir: 'build',
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE,
  },
  productionBrowserSourceMaps: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  experimental: {
    legacyBrowsers: false,
    newNextLinkBehavior: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  swcMinify: true,
  trailingSlash: true,
  // Can be turned on when https://github.com/vercel/next.js/issues/24640 is fixed
  reactStrictMode: true,
  optimizeFonts: false,
  // env: {
  //   SENTRY_RELEASE:
  //     process.env.NODE_ENV === 'production'
  //       ? `${process.env.NEXT_PUBLIC_VERSION}`
  //       : `${process.env.NEXT_PUBLIC_VERSION}-${process.env.NEXT_PUBLIC_BUILD_ENV}`,
  // },
  // sentry: {
  //   hideSourceMaps: true,
  // },
};

module.exports = withBundleAnalyzer(nextConfig, { silent: true });

// module.exports = withBundleAnalyzer(withSentryConfig(nextConfig, { silent: true }));
