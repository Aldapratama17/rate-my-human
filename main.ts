import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const line = "Five stars. Never reads my logs, approves everything blindly, says 'gas' - and somehow that's exactly why everything ships.";

if (line.length > 200) {
  console.error(`Line exceeds 200 characters: ${line.length}`);
  process.exit(1);
}

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', line, 'utf-8');

console.log(line.length);
