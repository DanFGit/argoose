/* eslint-env node */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const config = {
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "argoose.js",
  },
  module: {
    rules: [{ test: /\.js$/, use: "babel-loader" }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Argoose",
      template: "./src/index.html",
      favicon: "./static/favicon.ico",
    }),
  ],
  devServer: {
    port: 3000,
    contentBase: "./public",
    hot: true,
    historyApiFallback: {
      index: "index.html",
    },
  },
};

module.exports = config;
