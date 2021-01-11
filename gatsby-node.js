const path = require("path")

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
        ],
      },
    })
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@config": path.resolve(__dirname, "src/config"),
        "@components": path.resolve(__dirname, "src/components"),
        "@icons": path.resolve(__dirname, "src/components/icons"),
        "@styles": path.resolve(__dirname, "src/styles"),
        "@utils": path.resolve(__dirname, "src/utils"),
        "@fonts": path.resolve(__dirname, "src/fonts"),
      },
    },
  })
}
