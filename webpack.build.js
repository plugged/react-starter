const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ENV = process.env.npm_lifecycle_event;
const runAnalyzer = ENV.includes('analyze');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    application: './src/index',
    vendor: ['react', 'react-dom', 'react-redux', 'redux']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].[hash:4].js',
    publicPath: '/'
  },
  plugins: [
    new CopyWebpackPlugin([
      {from: 'public'}
    ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin({name: 'vendor', minChunks: Infinity}),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        keep_fnames: true,
        screw_ie8: true
      },
      compress: {
        screw_ie8: true,
        warnings: false,
        unused: true,
        dead_code: true
      },
      output: {
        comments: false,
        screw_ie8: true
      },
      sourceMap: true
    }),
    // new webpack.ProgressPlugin({
    //   profile: true
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        context: __dirname,
        postcss: [
          autoprefixer({browsers: 'last 2 versions'}),
        ],
      },
    }),
    new ExtractTextPlugin('[name].[hash:4].css')
  ].concat(runAnalyzer ? new BundleAnalyzerPlugin() : []),
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      // loader: 'happypack/loader?id=babel', // todo
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      exclude: path.join(__dirname, 'src', 'app'),
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: 'css-loader?sourceMap!postcss-loader!sass-loader?sourceMap'
      })
    }]
  }
};
