import babel from '@rollup/plugin-babel';
import autoExternal from 'rollup-plugin-auto-external';
import visualizer from 'rollup-plugin-visualizer';
import del from 'rollup-plugin-delete';
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
        extensions: ['.js'],
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
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
  },
];

export default config;
