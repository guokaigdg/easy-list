const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  mode: "development",
  entry: "./src/index.tsx",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["awesome-typescript-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
  },
};

module.exports = config;
