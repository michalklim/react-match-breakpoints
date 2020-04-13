const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const pkg = require('./package.json')
const webpackMerge = require('webpack-merge')
const typescriptConfig = require('./webpack.typescript-base')

module.exports = (env, argv) =>
  webpackMerge(
    {
      plugins: [new webpack.ProgressPlugin(), new CleanWebpackPlugin()],
      mode: argv.mode,
      devtool: 'source-maps',
      output: {
        filename: 'index.js',
        libraryTarget: 'umd',
        globalObject: 'this',
        library: pkg.name,
      },
      externals: {
        react: 'react',
      },
    },
    typescriptConfig(env, argv),
  )
