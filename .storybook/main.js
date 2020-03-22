const webpackMerge = require('webpack-merge')
const typescriptConfig = require('../webpack.typescript-base')
module.exports = {
  stories: ['../stories/**/*.stories.tsx'],
  addons: ['@storybook/addon-actions', '@storybook/addon-links'],
  webpackFinal: async config => {
    return webpackMerge(config, typescriptConfig)
  },
}
