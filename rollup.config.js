import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';

const packageJson = require('./package.json');

export default [
  {
    // NOTE: 실제로 사용할 cjs 파일들을 code splitting 하여 빌드한다.
    input: {
      index: 'src/index.ts',
      'assets/Icon/index': 'src/assets/Icon/index.ts',
      'assets/Logo/index': 'src/assets/Logo/index.ts',
      'core/index': 'src/core/index.ts',
      'components/index': 'src/components/index.ts',
      'components/Button/index': 'src/components/Button/index.tsx',
    },
    output: [
      {
        dir: '.',
        format: 'cjs',
        sourcemap: true,
        exports: 'auto',
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      postcss({
        extensions: ['.css'],
      }),
      image(),
    ],
  },
  {
    // NOTE: autocomplete file path를 지원하기위해 esm 파일도 빌드한다.
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({ useTsconfigDeclarationDir: true }),
      postcss({
        extensions: ['.css'],
      }),
      image(),
    ],
  },
];
