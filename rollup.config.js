import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import svgr from '@svgr/rollup'
import visualizer from 'rollup-plugin-visualizer'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
  input: "src/index.js",
  output: [
    {
      file: `cjs/${pkg.name}.js`,
      format: 'cjs',
      sourcemap: true,
      esModule: false
    },
    {
      file: `es/${pkg.name}.js`,
      format: "esm",
      sourcemap: true
    },
  ],
  plugins: [
    postcss({
      plugins: [],
      extensions: ['.css', '.scss', '.less'],
      use: [
        'sass',
        ['less', { javascriptEnabled: true }]
      ],
      minimize: true,
      sourceMap: 'inline',
    }),
    external({
      includeDependencies: true,
    }),
    url(),
    svgr(),
    resolve(),
    babel({
      plugins: [
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-proposal-optional-chaining',
        '@babel/plugin-syntax-dynamic-import',
        '@babel/plugin-proposal-class-properties',
        'transform-react-remove-prop-types',
        ["@babel/transform-runtime", { useESModules: true }]
      ],
      sourceMaps: true,
      runtimeHelpers: true,
      exclude: 'node_modules/**',
    }),
    commonjs(),
    terser(),
    visualizer()
  ],
}
