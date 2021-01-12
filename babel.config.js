module.exports = {
  presets: ['@babel/preset-react', '@babel/preset-typescript'],
  env: {
    test: {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              browsers: ['last 2 versions', 'not dead', '>0.25%'],
              node: 'current',
            },
          },
        ],
      ],
      plugins: [
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
        '@babel/plugin-transform-modules-commonjs',
      ],
    },
  },
}
