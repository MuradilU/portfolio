module.exports = {
  siteMetadata: {
    title: "Muradil Udun",
    description:
      "Muradil Udun is a Computer Engineering student at the University of Waterloo with an interest in building and designing software and hardware.",
    siteUrl: "https://muradil.com",
    image: "/landing.png",
    twitterUsername: "@MuradilUdun",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MuradilUdun`,
        short_name: `MuradilUdun`,
        start_url: `/`,
        background_color: `#1F2833`,
        theme_color: `#1F2833`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
  ],
}
