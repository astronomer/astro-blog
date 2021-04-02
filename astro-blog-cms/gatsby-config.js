/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
 plugins: [
   {
     resolve: 'gatsby-plugin-netlify-cms',
     options: {
       modulePath: `${__dirname}/src/cms/netlify.js`,
     },
   },
 ],
}
