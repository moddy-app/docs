const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../../../content/legal');

module.exports = function () {
  if (!fs.existsSync(contentDir)) return [];

  const dirs = fs
    .readdirSync(contentDir, {withFileTypes: true})
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const pages = [];

  for (const id of dirs) {
    const metaPath = path.join(contentDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) continue;

    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));

    const frPath = path.join(contentDir, id, 'fr.md');
    const enPath = path.join(contentDir, id, 'en.md');

    meta.content_fr = fs.existsSync(frPath)
      ? fs.readFileSync(frPath, 'utf8')
      : '';
    meta.content_en = fs.existsSync(enPath)
      ? fs.readFileSync(enPath, 'utf8')
      : meta.content_fr;

    pages.push(meta);
  }

  return pages;
};
