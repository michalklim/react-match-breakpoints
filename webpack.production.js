const pkg = require('./package.json')

module.exports = () => ({
  mode: 'production',
  devtool: 'source-maps',
  output: {
    filename: 'index.js',
    libraryTarget: 'umd',
    library: pkg.name,
  },
  externals: {
    react: 'react',
  },
})
