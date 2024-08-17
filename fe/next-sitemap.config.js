// ** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://site.name.com",
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  changefreq: false,
  outDir: "public",
  priority: false,
  exclude: ["/coming-soon"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: "/",
      },
    ],
    transformRobotsTxt: async () => {},
  },
};
