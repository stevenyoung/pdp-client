const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PostcssImport = require('postcss-easy-import');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const APP = path.join(__dirname, '/app');
const BUILD = path.join(__dirname, '/build');
const PUBLIC = path.join(__dirname, '/app/public');
const STYLE = path.join(__dirname, '/app/style.css');
const TEMPLATE = path.join(__dirname, '/app/templates/index.html');
const PACKAGE = Object.keys(
  require('./package.json').dependencies
);

module.exports = {
  entry: {
    app: APP,
    style: STYLE,
    vendor: PACKAGE
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: BUILD,
    filename: '[name].[chunkhash].js',
    chunkFilename: '[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?cacheDirectory'],
        include: APP
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
        include: APP
      }
    ]
  },
  plugins: [
    new CleanPlugin([BUILD]),
    new HtmlWebpackPlugin({
      template: TEMPLATE,
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    }),
    new ExtractTextPlugin('[name].[chunkhash].css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new CopyWebPackPlugin([{ from: PUBLIC, to: BUILD }],
      { ignore: ['.DS_Store'] })
  ],
  postcss: function() {
    return [
      PostcssImport({
        addDependencyTo: webpack,
        prefix: '_'
      }),
      precss,
      autoprefixer({
        browsers: ['last 2 versions']
      })
    ];
  }
};
