module.exports = {
  siteMetadata: {
    title: "Muradil Udun",
    description:
      "Muradil Udun is a Computer Engineering student at the University of Waterloo with a passion for softare and hardware.",
    url: "https://muradil.com",
    image: "/landing.png",
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
