const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env = {}) => {
  console.info("env", env);

  const plugins = [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ];
  
  return {
    mode: "development",
    devtool: "source-map",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: "/",
    },
    devServer: {
      port: 3000,
      static: "./",
    },
    module: {
      rules: [],
    },
    plugins: plugins,
  };
};
