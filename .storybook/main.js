const webpackMerge = require('webpack-merge')
const typescriptConfig = require('../webpack.typescript-base')

module.exports = {
  stories: ['../stories/**/*.stories.(tsx|mdx)'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links', '@storybook/addon-docs'],
  webpackFinal: async (config, { configType }) => {
    return webpackMerge(config, typescriptConfig(process.env, { mode: configType.toLowerCase() }))
  },
}
