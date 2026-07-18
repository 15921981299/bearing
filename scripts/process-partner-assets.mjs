import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { join } from 'node:path';

const inputDir = 'src/assets/partner-facility';
const outputDir = 'public/images/partner-facility';
await mkdir(outputDir, { recursive: true });

const assets = [
  ['jade-cnc-machining-capacity-source.jpg', 'jade-bearing-cnc-machining-workshop.webp'],
  ['jade-cnc-grinding-capacity-source.jpg', 'jade-bearing-cnc-machining-centers.webp'],
  ['jade-inspection-equipment-01-source.jpg', 'jade-bearing-length-measuring-instrument.webp'],
  ['jade-inspection-equipment-02-source.jpg', 'jade-bearing-optical-measuring-instrument.webp'],
];

for (const [input, output] of assets) {
  await sharp(join(inputDir, input), { failOn: 'none' })
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 80, effort: 5 })
    .toFile(join(outputDir, output));
  console.log(join(outputDir, output));
}
