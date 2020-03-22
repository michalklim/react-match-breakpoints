const webpack = require('webpack')
const pkg = require('./package.json')
const webpackMerge = require('webpack-merge')
const typescriptConfig = require('./webpack.typescript-base')

module.exports = () =>
  webpackMerge(
    {
      plugins: [new webpack.ProgressPlugin()],
      mode: 'production',
      devtool: 'source-maps',
      output: {
        filename: 'index.js',
        libraryTarget: 'umd',
        library: pkg.name,
      },
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
            options: {
              emitError: true,
            },
          },
        ],
      },
      externals: {
        react: 'react',
      },
    },
    typescriptConfig,
  )
