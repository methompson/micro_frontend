import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  define: {
    'process.env': {},
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'microAppTwo',
      // the proper extensions will be added
      fileName: 'microAppTwo',
      formats: ['es'],
    },
    rollupOptions: {
      output: {
        // footer: 'window.makeMicroAppTwo = makeMicroAppTwo',
      },
    },
  },
});
