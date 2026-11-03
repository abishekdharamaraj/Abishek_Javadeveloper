import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  root: resolve(projectRoot, 'src'),
  publicDir: false,
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
  build: {
    outDir: projectRoot,
    emptyOutDir: false,
  },
});