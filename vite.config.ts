import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import { resolve } from 'path';

const REPLACEMENT = `${resolve(__dirname, './src')}/`;

export default defineConfig({
  server: {
    port: 2999
  },
  plugins: [
    vue(),
    vueJsx()
  ],
  resolve: {
    alias: [
      {
        find: '@/',
        replacement: REPLACEMENT
      }
    ]
  }
});
