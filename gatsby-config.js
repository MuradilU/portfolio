module.exports = {
  siteMetadata: {
    title: "Muradil Udun",
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
  ],
}
