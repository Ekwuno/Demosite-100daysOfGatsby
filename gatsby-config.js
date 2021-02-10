require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: "Severus Snape",
    titleTemplate: "%s · The Real Hero",
    description:
      "Hogwarts Potions master, Head of Slytherin house and former Death Eater.",
    url: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/snape.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@occlumency",
  },
  
    plugins: [
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-react-helmet`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `image`,
          path: `${__dirname}/src/images/`,
        },
      },
        {
            resolve: `gatsby-source-contentful`,
            options:
            {
              spaceId:process.env.CONTENTFUL_SPACE_ID,
              accessToken:process.env.CONTENTFUL_ACCESS_TOKEN
            }
          }, 
          {
            resolve: "@chakra-ui/gatsby-plugin",
            options: {
              /**
               * @property {boolean} [isResettingCSS=true]
               * if `false`, this plugin will not use `<CSSReset />
               */
              isResettingCSS: true,
              /**
               * @property {boolean} [isUsingColorMode=true]
               * if `false`, this plugin will not use <ColorModeProvider />
               */
              isUsingColorMode: false,
              /**
               * @property {number} [portalZIndex=40]
               * The z-index to apply to all portal nodes. This is useful
               * if your app uses a lot z-index to position elements.
               */
              portalZIndex: 40,
            },
          },
          {
            resolve: `gatsby-source-formium`,
            options: {
              // Get your projectId from https://dashboard.formium.io
              projectId: process.env.GATSBY_FORMIUM_PROJECTID,
              // Generate a personal access token by going to https://dashboard.formium.io/account#tokens and put it into a .env file (learn more about Gatsby environment variables here: https://gatsby.dev/env-vars).
              accessToken: process.env.FORMIUM_TOKEN
            },
          },
          {
            resolve: `gatsby-plugin-manifest`,
            options: {
              name: `GatsbyJS`,
              short_name: `GatsbyJS`,
              start_url: `/`,
              background_color: `#f7f0eb`,
              icon: `src/images/icon.png`,
              theme_color: `#a2466c`,
              display: `standalone`,
            },
          },
          {
            resolve: `gatsby-plugin-offline`,
            options: {
              precachePages: [`/about/`, `/index/`,`/pages/city/*`],
            },
          },

   

    ]
}