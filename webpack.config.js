const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const modeConfig = mode => require(`./webpack.${mode}.js`)(mode)
const typescriptConfig = require('./webpack.typescript-base')

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
  devtool: 'source-maps',
  target: 'node',
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
module.exports = ({ mode } = { mode: 'development' }) => {
  return webpackMerge(
    {
      mode,
      plugins: [new webpack.ProgressPlugin()],
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            loader: 'eslint-loader',
          },
        ],
      },
    },
    typescriptConfig,
    modeConfig(mode),
  )
}
