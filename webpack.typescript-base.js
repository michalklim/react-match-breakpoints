const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = (env, argv) => ({
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      eslint: true,
      eslintOptions: {
        emitError: argv.mode === 'production',
      },
      async: argv.mode !== 'production',
    }),
  ],
})
