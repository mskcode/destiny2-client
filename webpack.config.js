const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

//
// Since we want to do everything client-side without any server
// infrastructure, notice `output.publicPath` and
// `devServer.historyApiFallback` settings below.
//
module.exports = {
  entry: "./src/index.tsx",
  devtool: "inline-source-map",

  // https://webpack.js.org/configuration/dev-server/
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    server: {
      type: "https",
      options: {
        key: "./certs/localhost-key.pem",
        cert: "./certs/localhost.pem",
      },
    },
    compress: false,
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },

  // https://webpack.js.org/concepts/output/
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "postcss-loader"],
        include: path.resolve(__dirname, "src"),
      },
    ],
  },

  // https://webpack.js.org/configuration/plugins/
  plugins: [
    // https://webpack.js.org/plugins/html-webpack-plugin/
    // https://github.com/jantimon/html-webpack-plugin#options
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
