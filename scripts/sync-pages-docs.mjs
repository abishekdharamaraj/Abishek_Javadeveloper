import { cp, mkdir, rm, copyFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const docsDirectory = resolve(projectRoot, 'docs');

await rm(resolve(docsDirectory, 'assets'), { force: true, recursive: true });
await rm(resolve(docsDirectory, 'index.html'), { force: true });
await mkdir(resolve(docsDirectory, 'assets'), { recursive: true });
await copyFile(resolve(projectRoot, 'index.html'), resolve(docsDirectory, 'index.html'));
await cp(resolve(projectRoot, 'assets'), resolve(docsDirectory, 'assets'), { recursive: true });
await writeFile(resolve(docsDirectory, '.nojekyll'), '');