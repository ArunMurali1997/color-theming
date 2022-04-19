const path = require("path");
module.exports = {
  // mode: "development",
  entry: "./index.js",
  output: { path: path.join(__dirname, "public"), filename: "bundle.js" },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 3000,
  },
};
