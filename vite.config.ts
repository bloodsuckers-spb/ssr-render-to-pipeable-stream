/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  resolve: {
    alias: {
      app: '/src/app',
      pages: '/src/pages',
      shared: '/src/shared',
      widgets: 'src/widgets',
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
  build: {
    sourcemap: 'hidden',
  },
});
