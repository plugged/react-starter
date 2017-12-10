/* eslint-env node */
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HappyPack = require('happypack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const vendorManifest = require('./src/dll/vendor-manifest.json');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ENV = process.env.npm_lifecycle_event || [];
const runAnalyzer = ENV.includes('analyze');

module.exports = {
  resolve: {
    modules: ['src', 'node_modules']
  },
  devtool: 'cheap-module-eval-source-map',
  entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client', './src/index'],
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProgressPlugin({
      profile: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname,
        postcss: [autoprefixer({ browsers: 'last 2 versions' })]
      }
    }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: vendorManifest
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      isProd: false,
      inject: false
    }),
    new HappyPack({
      id: 'babel',
      loaders: ['babel-loader']
    }),
    new HappyPack({
      id: 'styles',
      loaders: [
        'style-loader?sourceMap',
        'css-loader?sourceMap',
        'postcss-loader?sourceMap',
        'sass-loader?sourceMap'
      ]
    })
  ].concat(runAnalyzer ? new BundleAnalyzerPlugin() : []),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['cache-loader', 'happypack/loader?id=babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        exclude: path.join(__dirname, 'src', 'app'),
        use: ['cache-loader', 'happypack/loader?id=styles']
      }
    ]
  }
};
