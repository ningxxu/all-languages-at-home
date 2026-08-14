import { copyFile, mkdir, rm } from 'node:fs/promises';

const outputDir = new URL('../dist/', import.meta.url);
const files = [
  'index.html',
  'app.js',
  'styles.css',
  'favicon.svg',
  'apple-touch-icon.png',
];

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const file of files) {
  await copyFile(new URL(`../${file}`, import.meta.url), new URL(file, outputDir));
}

console.log(`Built ${files.length} static files in dist/.`);
