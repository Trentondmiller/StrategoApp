var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './app/App.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
   devServer: {
        inline: true,
        contentBase: './public/',
        port: 3000
    },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules',
      './app/components',
      'Media'
    ],
    alias: {
      app: 'app',
      actions: 'app/actions/actions.jsx',
      reducers: 'app/reducers/reducers.jsx',
      configureStore: 'app/store/configureStore.jsx',
      applicationStyles: 'app/styles/main.scss'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
      loaders: [
        {
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0']
          },
          exclude: /(node_modules|bower_components)/,
        },
        {
          test: /\.(jpg|png)$/,
          loader: 'url-loader',
          options: {
            limit: 25000,
          }
        },
        {
          test: /\.scss/,
          loader: 'style-loader!css-loader!sass-loader'
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader'
        }
      ]
    }
}