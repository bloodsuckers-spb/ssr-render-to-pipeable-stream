/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      pages: '/src/pages',
      widgets: 'src/widgets',
      shared: '/src/shared',
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
    coverage: {
      enabled: true,
      provider: 'c8',
      all: true,
      include: ['src/**/*.tsx'],
      exclude: ['**/*.test.tsx', '**/routes.tsx', '**/main.tsx', '**/App.tsx'],
    },
  },
});
