/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "KAA Construction",
  },
  plugins: [
    "gatsby-plugin-image",
  "gatsby-plugin-sharp",
  `gatsby-plugin-mdx`,
  "gatsby-transformer-sharp",
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `blog`,
      path: `${__dirname}/blog`,
    }
  },
  {
    resolve: "gatsby-source-filesystem",
    options: {
      name: `data`,
      path: `${__dirname}/data`,
    }
  },
  {
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /assets/
      }
    }
  }
],
}
