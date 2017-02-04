var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Chrome'],
    singleRun: true,
    frameworks: ['mocha'],
    reporters: ['mocha'],
    client: {
      timeout: '5000'
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
}