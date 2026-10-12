// Copies the PowerPoint export library into www/lib so the APK works offline.
const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'node_modules', 'pptxgenjs', 'dist', 'pptxgen.bundle.js');
const dstDir = path.join(__dirname, '..', 'www', 'lib');
if (!fs.existsSync(src)) {
  console.error('Missing ' + src + ' - run "npm install" first.');
  process.exit(1);
}
fs.mkdirSync(dstDir, { recursive: true });
fs.copyFileSync(src, path.join(dstDir, 'pptxgen.bundle.js'));
console.log('Copied pptxgen.bundle.js to www/lib');
