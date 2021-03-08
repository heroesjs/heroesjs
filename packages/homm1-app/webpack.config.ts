import HtmlWebpackPlugin from "html-webpack-plugin";
import Webpack from "webpack";

const config: Webpack.Configuration = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.tsx?$/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
  ],
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".js",
    ],
  },
};

export default config;
