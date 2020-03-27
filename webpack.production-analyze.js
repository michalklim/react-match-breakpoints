const webpackMerge = require('webpack-merge')
const productionConfig = require('./webpack.production')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = () =>
  webpackMerge(productionConfig(), {
    plugins: [new BundleAnalyzerPlugin()],
  })
