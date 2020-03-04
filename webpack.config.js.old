/* global require, module*/
const webpack = require('webpack')
const path = require('path')
const pkg = require('./package.json')

let libraryName = pkg.name

const reactExternal = {
  root: 'React',
  commonjs2: 'react',
  commonjs: 'react',
  amd: 'react',
}

module.exports = env => ({
  externals: {
    react: reactExternal,
  },
  mode: env.production ? 'production' : 'development',
  devtool: env.production ? 'source-maps' : 'eval',
  entry: path.resolve('./src/index.js'),
  output: {
    path: path.resolve('./dist'),
    filename: libraryName + (env.production ? '.min' : '') + '.js',
    libraryTarget: 'umd',
    library: 'react-match-breakpoints',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js'],
  },
})
