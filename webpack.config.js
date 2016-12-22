const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
// const HappyPack = require('happypack');
const vendorManifest = require('./src/dll/vendor-manifest.json');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.resolve(__dirname, 'src'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    // new BundleAnalyzerPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProgressPlugin({
      profile: true
    }),
    new webpack.LoaderOptionsPlugin({
      debug: true,
      options: {
        context: __dirname,
        postcss: [
          autoprefixer({browsers: 'last 2 versions'}),
        ],
      },
    }),
    // new HappyPack({
    //   id: 'babel',
    //   loaders: ['babel-loader']
    // }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: vendorManifest
    })
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      // loader: 'happypack/loader?id=babel', // todo
      include: path.join(__dirname, 'src')
    }, {
      test: /\.scss$/,
      exclude: path.join(__dirname, 'src', 'app'),
      loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']
    }]
  }
};
