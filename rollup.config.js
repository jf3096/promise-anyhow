import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import size from 'rollup-plugin-filesize';
import replace from 'rollup-plugin-replace';
import pkg from './package.json';

const plugins = [
  replace({
    delimiters: ['@@', '@@'],
    PACKAGE_NAME: JSON.stringify(pkg.name)
  }),
  resolve(),
  commonjs(),
  babel({
    exclude: 'node_modules/**',
  }),
  size()
];

export default [
  {
    input: 'src/index.js',
    output: {
      sourcemap: true,
      name: pkg.name,
      file: pkg.browser,
      format: 'umd'
    },
    plugins
  },
  {
    input: 'src/index.js',
    output: {
      sourcemap: true,
      name: pkg.name,
      file: pkg['browser-min'],
      format: 'umd'
    },
    plugins: [
      ...plugins,
      uglify(),
    ]
  },
  {
    input: 'src/index.js',
    output: [
      {file: pkg.main, format: 'cjs', name: pkg.name, sourcemap: true},
      {file: pkg.module, format: 'es', name: pkg.name, sourcemap: true}
    ],
    plugins
  }
];

