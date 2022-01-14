import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import multiInput from 'rollup-plugin-multi-input';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import copy from 'rollup-plugin-copy';
import { visualizer } from 'rollup-plugin-visualizer';

export default {
  // NOTE: tree shaking 을 위해 esm 파일들을 code splitting 하여 빌드한다.
  input: ['src/**/index.ts', 'src/**/index.tsx', 'src/**/generated/*.tsx'],
  output: [
    {
      dir: '.',
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(),
    multiInput(),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    postcss({
      extensions: ['.css'],
    }),
    image(),
    visualizer(),
    copy({
      targets: [{ src: 'src/core/styles/index.scss', dest: 'core/styles' }],
    }),
  ],
};
