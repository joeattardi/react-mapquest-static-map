import babel from 'rollup-plugin-babel';

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: {
    format: 'cjs',
    file: pkg.main
  },
  external: [
    'react'
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};
