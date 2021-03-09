import Webpack from "webpack";

const config: Webpack.Configuration = {
  entry: "./src/index.ts",
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.tsx?$/,
      },
      {
        loader: "file-loader",
        test: /\.(jpg|png)/,
      },
    ],
  },
  resolve: {
    extensions: [
      ".tsx",
      ".ts",
      ".js",
    ],
  },
};

export default config;
