import { defineConfig } from 'vite';
import nodePolyfills from 'rollup-plugin-node-polyfills';

export default defineConfig({
  plugins: [nodePolyfills()],
  define: {
    'process.env': {}
  },
  build: {
    rollupOptions: {
      output: {
        sourcemap: false,
      },
    },
  },
});
