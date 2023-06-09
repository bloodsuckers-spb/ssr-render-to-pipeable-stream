/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

import react from '@vitejs/plugin-react';
import istanbul from 'vite-plugin-istanbul';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    istanbul({
      cypress: true,
      requireEnv: false,
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
    coverage: {
      enabled: true,
      provider: 'c8',
      all: true,
      include: ['src/**/*.tsx'],
      exclude: [
        '**/*.test.tsx',
        '**/routes.tsx',
        '**/App.tsx',
        '**/entry*.tsx',
      ],
    },
  },
  build: {
    sourcemap: 'hidden',
  },
});
