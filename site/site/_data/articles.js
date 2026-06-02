const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../../../content/articles');

function readingTime(text) {
  const words = (text || '').trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

module.exports = function () {
  if (!fs.existsSync(contentDir)) return [];

  const dirs = fs
    .readdirSync(contentDir, {withFileTypes: true})
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const articles = [];

  for (const id of dirs) {
    const metaPath = path.join(contentDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) continue;

    let meta;
    try {
      meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
    } catch (e) {
      console.warn(`[articles] Failed to parse ${metaPath}: ${e.message}`);
      continue;
    }

    const frPath = path.join(contentDir, id, 'fr.md');
    const enPath = path.join(contentDir, id, 'en.md');

    meta.content_fr = fs.existsSync(frPath)
      ? fs.readFileSync(frPath, 'utf8')
      : '';
    meta.content_en = fs.existsSync(enPath)
      ? fs.readFileSync(enPath, 'utf8')
      : meta.content_fr;

    meta.reading_time_fr = readingTime(meta.content_fr);
    meta.reading_time_en = readingTime(meta.content_en);

    meta.assetsBase = `/content-assets/articles/${id}/`;

    articles.push(meta);
  }

  articles.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  return articles;
};
