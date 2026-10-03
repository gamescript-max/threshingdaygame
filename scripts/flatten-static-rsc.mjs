import { copyFile, readdir } from 'node:fs/promises';
import path from 'node:path';
const root = path.resolve('out');
let count = 0;
async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) { await walk(file); continue; }
    if (entry.name !== '__PAGE__.txt') continue;
    const parts = path.relative(root, file).split(path.sep);
    const index = parts.findIndex(part => part.startsWith('__next.'));
    if (index < 0 || index === parts.length - 1) continue;
    await copyFile(file, path.join(root, ...parts.slice(0, index), parts.slice(index).join('.')));
    count++;
  }
}
await walk(root);
console.log(`Static route payloads: ${count} compatibility aliases written.`);
