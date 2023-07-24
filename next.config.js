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
    dangerouslyAllowSVG: true,
    domains: [
      '0.ssl.belga.be',
      'api-production3.gopress.be',
      'via.placeholder.com',
      'spacelift.io',
      'm.media-amazon.com',
      'ik.imagekit.io',
      'store.storeimages.cdn-apple.com',
      'tailwindui.com',
      'images.unsplash.com',
      'cdn.dribbble.com',
      'miro.medium.com',
      'www.apple.com',
      'images.thenorthface.com',
      'parsefiles.back4app.com',
      'w7.pngwing.com',
      'navicat.com',
    ],
    deviceSizes: [128, 256, 384, 512, 750, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64],
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
