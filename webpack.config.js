/* eslint-env node */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WorkboxPlugin = require("workbox-webpack-plugin");

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
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
      include: [/\.html$/, /\.js$/, /\.css$/],
      directoryIndex: "/index.html",
      navigateFallback: "/index.html",
      additionalManifestEntries: ["/index.html"],
      runtimeCaching: [
        {
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "google-fonts",
            expiration: { maxEntries: 20 },
          },
          urlPattern: ({ url }) =>
            url.origin === "https://fonts.googleapis.com" ||
            url.origin === "https://fonts.gstatic.com",
        },
        {
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "product-images",
            expiration: { maxEntries: 100 },
          },
          urlPattern: ({ url }) => url.origin === "https://media.4rgos.it",
        },
        {
          handler: "StaleWhileRevalidate",
          options: {
            cacheName: "product-json",
            expiration: { maxEntries: 1 },
          },
          urlPattern: ({ url }) =>
            url.pathname === "/front-end-test/products.json",
        },
      ],
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
