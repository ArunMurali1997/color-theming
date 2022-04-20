const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const port = process.env.PORT || 3000;
module.exports = {
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.[hash].js",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
  ],
  devServer: {
    compress: true,
    hot: true,
    host: "localhost",
    port,
    historyApiFallback: true,
    open: true,
  },
};

// module.exports = {
//   // mode: "development",
//   entry: "./index.js",
//   output: { path: path.join(__dirname, "public"), filename: "bundle.js" },
//   module: {
//     rules: [
//       { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
//       { test: /\.css$/, use: ["style-loader", "css-loader"] },
//     ],
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "public"),
//     },
//     compress: true,
//     port,
//   },
// };
// {
//   test: /\.css$/,
//   use: [
//     {
//       loader: "style-loader",
//     },
//     {
//       loader: "css-loader",
//       // options: {
//       //   modules: true,
//       //   localsConvention: "camelCase",
//       //   sourceMap: true,
//       // },
//     },
