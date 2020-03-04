const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = () => ({
  devtool: 'eval',
  plugins: [new ForkTsCheckerWebpackPlugin()],
})
