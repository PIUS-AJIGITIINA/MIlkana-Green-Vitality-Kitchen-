import fs from 'fs';

async function download() {
  const urls = [
    'https://storage.googleapis.com/manta-zmt/tmp/turn-38/image-0.jpeg',
    'https://storage.googleapis.com/manta-zmt/tmp/turn-38/image-1.jpeg',
    'https://storage.googleapis.com/manta-zmt/tmp/turn-38/image-2.jpeg',
    'https://storage.googleapis.com/manta-zmt/tmp/turn-38/image-3.jpeg',
    'https://storage.googleapis.com/manta-zmt/tmp/turn-38/image-4.jpeg'
  ];

  for (let i = 0; i < urls.length; i++) {
    try {
      const res = await fetch(urls[i]);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const arrayBuffer = await res.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      fs.writeFileSync(`public/menu-${i}.jpeg`, buffer);
      console.log(`Downloaded menu-${i}.jpeg, size: ${buffer.length}`);
    } catch (err) {
      console.error(`Error downloading ${urls[i]}:`, err);
    }
  }
}

download();
