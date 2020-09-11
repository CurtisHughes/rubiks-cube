import pkg from './package.json'
import typescript from '@rollup/plugin-typescript';

export default [
  // ES
  {
    input: 'src/index.ts',
    output: { dir: './', entryFileNames: pkg.module, format: 'es' },
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
        typescript({
            declaration: true,
            declarationDir: 'dist/types/',
            rootDir: 'src/'
        }),
    ]
  },
  
  // UMD
  {
    input: 'src/index.ts',
    output: { file: 'dist/index.umd.js', format: 'umd', name: 'RubiksCube' },
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
      typescript(),
    ]
  },
]
