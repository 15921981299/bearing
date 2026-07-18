import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const inputDir = 'src/assets/factory-facility';
const outputDir = 'public/images/factory-facility';
await mkdir(outputDir, { recursive: true });

const assets = [
  ['cnc-machining-workshop-source.jpg', 'cnc-machining-workshop.webp'],
  ['cnc-machining-centers-source.jpg', 'cnc-machining-centers.webp'],
  ['length-measuring-instrument-source.jpg', 'length-measuring-instrument.webp'],
  ['optical-measuring-instrument-source.jpg', 'optical-measuring-instrument.webp'],
];

for (const [input, output] of assets) {
  await sharp(join(inputDir, input), { failOn: 'none' })
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(join(outputDir, output));
  console.log(join(outputDir, output));
}
