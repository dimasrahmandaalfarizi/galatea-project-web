const fs = require('fs');
const https = require('https');
const path = require('path');

const urls = [
  'https://upload.wikimedia.org/wikipedia/commons/6/67/Environment-green-e.svg',
  'https://upload.wikimedia.org/wikipedia/commons/3/3d/Recycling_symbol.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/4c/Biohazard_symbol.svg',
  'https://upload.wikimedia.org/wikipedia/commons/a/af/Recycling_symbol2.svg',
  'https://upload.wikimedia.org/wikipedia/commons/e/ed/Recycle001.svg',
  'https://upload.wikimedia.org/wikipedia/commons/c/c5/Waste_container.svg'
];

const dir = path.join(__dirname, 'public', 'posters');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

urls.forEach((url, index) => {
  const filePath = path.join(dir, `${index + 1}.svg`);
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${index + 1}.svg`);
      });
    } else {
      console.log(`Failed to download ${url}: ${res.statusCode}`);
    }
  }).on('error', (err) => {
    console.error(`Error downloading ${url}:`, err.message);
  });
});
