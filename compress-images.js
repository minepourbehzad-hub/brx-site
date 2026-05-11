const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = "./public/images";
const quality = 70;

async function compressImages(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      await compressImages(fullPath);
    } else {
      const ext = path.extname(file).toLowerCase();

      if ([".jpg", ".jpeg", ".png"].includes(ext)) {
        const outputPath = fullPath.replace(ext, ".webp");

        await sharp(fullPath)
          .resize({ width: 1600, withoutEnlargement: true })
          .webp({ quality })
          .toFile(outputPath);

        console.log(`Compressed: ${outputPath}`);
      }
    }
  }
}

compressImages(inputDir)
  .then(() => console.log("Done"))
  .catch(console.error);