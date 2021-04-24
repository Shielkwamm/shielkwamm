import typescript from '@rollup/plugin-typescript'

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
      strict: false
    }
  ],
  plugins: [
    //sass({ insert: true }),
    typescript()
  ],
  external: ['react', 'react-dom']
}