const webpackMerge = require('webpack-merge')
const productionConfig = require('./webpack.production')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = (env, argv) =>
  webpackMerge(productionConfig(env, argv), {
    plugins: [new BundleAnalyzerPlugin()],
  })
