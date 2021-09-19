import * as dotenv from 'dotenv';
dotenv.config({ path: __dirname + '/.env' });

export default {
  siteMetadata: {
    title: process.env.APP_NAME,
    description: `Ultimate life of bisseninja.`,
    author: `@ioni`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog`,
        name: `markdown-pages`
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#6fb22b`,
        theme_color: `#6fb22b`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-gatsby-cloud`
  ]
};
