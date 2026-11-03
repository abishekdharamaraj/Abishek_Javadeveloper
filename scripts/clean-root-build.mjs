import { rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));

await Promise.all([
  rm(resolve(projectRoot, 'assets'), { force: true, recursive: true }),
  rm(resolve(projectRoot, 'dist'), { force: true, recursive: true }),
  rm(resolve(projectRoot, 'index.html'), { force: true }),
]);
