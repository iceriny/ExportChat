import { build } from 'esbuild';
import progress from 'esbuild-plugin-progress';
import time from 'esbuild-plugin-time';
import copy from 'esbuild-copy-files-plugin';
import fs from 'fs';

(async () => {
  const serverPath = 'https://*.github.io/ExportChat';

  await build({
    entryPoints: ['./src/ExportChat.ts'],
    outfile: './dist/main.js',
    format: 'iife',
    globalName: 'ExportChat',
    bundle: true,
    sourcemap: true,
    loader: {
      '.css': 'text',
      '.html': 'text'
    },
    treeShaking: true,
    keepNames: true,
    plugins: [
      progress(),
      time()
    ],
  }).then(() => {
    let bundleContent = fs.readFileSync('./dist/main.js', 'utf-8');
    bundleContent = bundleContent.replace(
      '(() => {',
      `(() => {\nconst serverUrl = '${serverPath}';`
    );
    fs.writeFileSync('./dist/main.js', bundleContent);
  }).catch((error) => {
    process.exit(1);
  });
})();
