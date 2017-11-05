const CopyWebpackPlugin = require("copy-webpack-plugin");
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

const hot = new webpack.HotModuleReplacementPlugin();

const html = new HtmlWebpackPlugin({
  template: "src/index.html"
});

const copy = new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ]);

const dotenv = new Dotenv();

const PORT = process.env.PORT || 4000;

const plugins = [hot, html, copy, dotenv];

module.exports = {
  entry: "./src/index.tsx",

  output: {
    filename: "bundle.js",
    path: __dirname + "/build",
    publicPath: "/"
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "babel-loader"
          },
          {
            loader: "ts-loader"
          }
        ]
      },

      // All SCSS files will be handled by a series of stylesheet handling loaders
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          },
        ]
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },

      // All font files processed by url-loader
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },

  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: PORT,
    hot: true,
    proxy: [{
      path: "/faults",
      target: "http://localhost:8000",
      changeOrigin: true,
      secure: false
    }]
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },

  plugins: plugins
};
