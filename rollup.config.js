import typescript from 'rollup-plugin-typescript2';
import compiler from '@ampproject/rollup-plugin-closure-compiler';

/** @type {import('rollup').RollupOptions[]} */
const options = [
  {
    input: './src/main.tsx',
    plugins: [
      typescript({
        tsconfigOverride: {
          compilerOptions: {
            module: 'ESNext',
            declaration: false,
          },
        },
      }),
      compiler(),
    ],
    external: ['react/jsx-runtime', 'fs', 'path', '@react-pdf/renderer'],
    output: [
      {
        format: 'cjs',
        file: './lib/main.js',
      },
    ],
  },
];

export default options;
