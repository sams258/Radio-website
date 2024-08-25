// next-sitemap.config.js

module.exports = {
    siteUrl: 'https://lbiradio.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    exclude: ['/admin/*', '/login'],
    robotsTxtOptions: {
      additionalSitemaps: [
        'https://lbiradio.com/my-custom-sitemap-1.xml',
        'https://lbiradio.com/my-custom-sitemap-2.xml',
      ],
    },
  }
  