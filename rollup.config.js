import typescript from '@rollup/plugin-typescript'
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import resolve from "@rollup/plugin-node-resolve"

import pkg from './package.json'

// continued
export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    }
  ],
  plugins: [
    //sass({ insert: true }),
    typescript(),
    peerDepsExternal(),
    resolve(),
    commonjs(),
    babel({ exclude: "node_modules/**", babelHelpers: "bundled" }),
  ],
  external: ['react', 'react-dom']
}