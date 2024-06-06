import { defineConfig } from 'rollup';
import path from 'path';
import pluginTs from '@rollup/plugin-typescript';

export default defineConfig([
  {
    input: path.join(process.cwd(), 'src/index.ts'),
    output: [
      {
        dir: 'dist',
        format: 'es',
        entryFileNames: '[name].mjs',
        preserveModules: true,
        sourcemap: true,
      },
    ],
    plugins: [
      pluginTs(),
    ],
  },
])