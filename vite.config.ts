import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,  // Ensures the app is accessible externally
    port: 3000,
  },
  build: {
    outDir: 'dist',  // Default directory for production build
    sourcemap: false,  // Disable sourcemaps for production
  },
  define: {
    'process.env': {},
  },
});
