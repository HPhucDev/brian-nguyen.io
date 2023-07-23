/** @type {import('next-sitemap').IConfig} */
module.exports = {
  sourceDir: 'build',
  siteUrl: process.env.NEXT_PUBLIC_FRONTEND_DOMAIN || 'http://nextjs.staging.belga.be/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies:
      process.env.NEXT_PUBLIC_BUILD_ENV === 'production'
        ? [{ userAgent: '*', allow: '/' }]
        : [{ userAgent: '*', disallow: '/' }],
  },
  generateIndexSitemap: true,
};
