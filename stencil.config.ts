import { Config } from '@stencil/core';
import eslint from '@rollup/plugin-eslint';
import NodePolyfills from 'rollup-plugin-node-polyfills';

export const config: Config = {
  namespace: 'qx-util',
  globalScript: './src/global',
  rollupPlugins: {
    before: [eslint(), NodePolyfills()],
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
