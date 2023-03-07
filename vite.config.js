import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'node-fetch': 'isomorphic-fetch', // fix: https://stackoverflow.com/a/73095593/9370788
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@stores': fileURLToPath(new URL('./src/stores', import.meta.url)),
      '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
      '@components': fileURLToPath(new URL('./src/components', import.meta.url))
    }
  }
})
