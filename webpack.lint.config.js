const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
// const StyleLintPlugin = require('stylelint-webpack-plugin');

const PostcssImport = require('postcss-easy-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const APP = path.join(__dirname, '/app');
const BUILD = path.join(__dirname, '/build');
const PUBLIC = path.join(__dirname, '/app/public');
const STYLE = path.join(__dirname, '/app/style.css');
const TEMPLATE = path.join(__dirname, '/app/templates/index.html');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;
const PROXY = `http://${HOST}:${PORT}`;

const LINT = path.join(__dirname, '.eslintrc.js');
// const STYLELINT = ['./app/styles/**/*.css', './app/styles.css'];

module.exports = {
  entry: {
    app: APP,
    style: STYLE
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    alias: {
      'mapbox-gl': path.resolve('./node_modules/mapbox-gl/dist/mapbox-gl.js')
    }
  },
  output: {
    path: BUILD,
    filename: '[name].js'
  },
  module: {
    preloaders: [
      {
        test: /\.jsx?$/,
        loaders: ['eslint'],
        include: APP
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: APP
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
        include: APP
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    stats: 'errors-only',

    host: HOST,
    port: PORT,
    outputPath: BUILD,
    contentBase: BUILD
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: TEMPLATE,
      inject: 'body'
    }),
    // new StyleLintPlugin({
    //   files: STYLELINT,
    //   syntax: 'scss',
    //   formatter: 'json'
    // }),
    new BrowserSyncPlugin(
      {
        host: HOST,
        port: PORT,
        proxy: PROXY,
        browser: 'google chrome canary'
      },
      {
        reload: false
      }
    ),
    new webpack.HotModuleReplacementPlugin(),
    new CopyWebpackPlugin([{ from: PUBLIC, to: BUILD }],
      { ignore: ['.DS_Store'] })
  ],
  postcss: function (webpack) {
    return [
      PostcssImport({ addDependencyTo: webpack, prefix: '_' }),
      precss,
      autoprefixer({ browsers: ['last 2 versions'] })
    ];
  },
  eslint: {
    configFile: LINT,
    emitError: true
  }
};
