'use strict';

const webpack = require('webpack');
const helper = require('../utils');

module.exports = (app) => {
  helper.injectPlugin(app);
  const config = app.config.webpack;
  const webpackConfig = helper.getWebpackConfig(config, app);
  const compiler = webpack(webpackConfig);
  return compiler;
};
