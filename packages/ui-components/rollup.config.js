import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import autoExternal from 'rollup-plugin-auto-external';
import visualizer from 'rollup-plugin-visualizer';
import del from 'rollup-plugin-delete';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const config = [
  {
    input: pkg.source,
    output: [{ file: pkg.main, format: 'cjs' }],
    plugins: [
      resolve({
        mainFields: ['main'],
        extensions: ['.js', '.jsx'],
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      image(),
      postcss({
        extract: true,
        minimize: true,
      }),
      terser(),
      autoExternal({
        builtins: false,
        dependencies: true,
        peerDependencies: true,
        packagePath: './package.json',
      }),
      visualizer({
        title: 'visualizer',
        template: 'treemap',
      }),
      del({ targets: ['dist/*'] }),
    ],
    external: ['react', 'react-dom', 'react-scripts', 'prop-types'],
  },
];

export default config;
