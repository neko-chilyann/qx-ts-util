import { Config } from '@stencil/core';
import eslint from '@rollup/plugin-eslint';

export const config: Config = {
  namespace: 'qx-util',
  globalScript: './src/global',
  rollupPlugins: {
    before: [eslint()],
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
  ],
  devServer: {
    port: 3000,
  },
};
