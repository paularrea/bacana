module.exports = {
  siteMetadata: {
    title: `Bacana Studio`,
    description: `We are an interior design and architecture company focusing on hospitality, workplaces and residential projects around the world. Listening to our clients and understanding their needs, the environment and the communities behind every project is what drives our creativity while strategically developing individual concepts around business models.`,
    author: `Pau Larrea`,
    siteUrl: `https://www.bacanastudio.com/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-scroll-reveal`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/bacana-logo.png`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 2000,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
  ],
}
