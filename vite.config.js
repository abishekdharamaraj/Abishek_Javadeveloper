import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(({ command }) => ({
  root: resolve(projectRoot, 'src'),
  publicDir: false,
  plugins: [react()],
  // Use root paths during local development; production defaults to this repo's Pages URL.
  base: command === 'serve' ? '/' : process.env.VITE_BASE_PATH || '/Abishek_Javadeveloper/',
  build: {
    outDir: projectRoot,
    emptyOutDir: false,
  },
}));