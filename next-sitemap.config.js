/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://react-vercel-blog.vercel.app/',
  generateRobotsTxt: true, // (optional)
  // ...other options
}
