// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Optimization
  vite: {
    ssr: {
      external: ['nodemailer']
    }
  },
  // Build optimization
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto',
  },
  // Prefetch strategy
  prefetch: {
    prefetchAll: true
  }
});
