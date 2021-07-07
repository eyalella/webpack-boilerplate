const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: "source-map",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 8880
  }
});