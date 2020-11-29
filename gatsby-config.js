module.exports = {
  siteMetadata: {
    title: "Muradil Udun",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/content/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
