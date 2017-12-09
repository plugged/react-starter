/* eslint no-console: "off" */
/* eslint consistent-return: "off" */
/* eslint-env node */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const webpack = require('webpack');
const express = require('express');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);
compiler.apply(new DashboardPlugin());

app.use(devMiddleware(compiler, {
  publicPath: '/',
  historyApiFallback: true,
  contentBase: path.join(__dirname, 'src'),
  stats: {
    colors: true
  }
}));

app.use(hotMiddleware(compiler));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/dll/:filename', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'dll', req.params.filename));
});

app.get('*', (req, res, next) => {
  const filename = path.join(compiler.outputPath, 'index.html');
  compiler.outputFileSystem.readFile(filename, (err, result) => {
    if (err) {
      return next(err);
    }
    res.set('content-type', 'text/html');
    res.send(result);
    res.end();
  });
});

app.listen(3000, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Listening at http://localhost:3000/');
  }
});
