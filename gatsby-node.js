const path = require("path")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@config": path.resolve(__dirname, "src/config"),
        "@components": path.resolve(__dirname, "src/components"),
        "@icons": path.resolve(__dirname, "src/components/icons"),
        "@styles": path.resolve(__dirname, "src/styles"),
      },
    },
  })
}
