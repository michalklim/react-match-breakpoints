import { nodeResolve } from '@rollup/plugin-node-resolve'
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import path from 'path'
import pkg from './package.json'

console.log(path.resolve(__dirname, 'babel.config.esm.js'))

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
      plugins: [
        getBabelOutputPlugin({
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
          plugins: ['@babel/proposal-class-properties', '@babel/proposal-object-rest-spread'],
        }),
        terser(),
      ],
    },
    {
      file: 'dist/index.js',
      format: 'es',
      exports: 'named',
      plugins: [terser()],
    },
  ],
  external: [...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    nodeResolve({
      extensions: ['.ts', '.tsx'],
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts', '.tsx'],
      exclude: 'node_modules/**',
    }),
  ],
}
