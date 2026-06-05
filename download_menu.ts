import fs from 'fs';
import https from 'https';
import path from 'path';

const urls = [
  'https://storage.googleapis.com/manta-zmt/tmp/turn-38/image-0.jpeg',
  'https://storage.googleapis.com/manta-zmt/tmp/turn-38/image-1.jpeg',
  'https://storage.googleapis.com/manta-zmt/tmp/turn-38/image-2.jpeg',
  'https://storage.googleapis.com/manta-zmt/tmp/turn-38/image-3.jpeg',
  'https://storage.googleapis.com/manta-zmt/tmp/turn-38/image-4.jpeg'
];

const destDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

urls.forEach((url, i) => {
  const destPath = path.join(destDir, `menu-${i}.jpeg`);
  const file = fs.createWriteStream(destPath);
  https.get(url, function(response) {
    if (response.statusCode === 200) {
      response.pipe(file);
      file.on('finish', function() {
        file.close();  
        console.log(`Downloaded ${url} to ${destPath}`);
      });
    } else {
      console.log(`Failed to download ${url}: ${response.statusCode}`);
    }
  }).on('error', function(err) {
    fs.unlink(destPath, () => {}); 
    console.log(`Error downloading ${url}: ${err.message}`);
  });
});
