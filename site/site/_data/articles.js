const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.resolve(__dirname, '../../../content/articles');

module.exports = async function () {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const articles = [];

  for (const articleId of fs.readdirSync(CONTENT_DIR)) {
    const articleDir = path.join(CONTENT_DIR, articleId);
    if (!fs.statSync(articleDir).isDirectory()) continue;

    const metaPath = path.join(articleDir, 'meta.json');
    if (!fs.existsSync(metaPath)) continue;

    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));
    const rawContent = {};

    for (const lang of ['fr', 'en']) {
      const langPath = path.join(articleDir, `${lang}.md`);
      if (fs.existsSync(langPath)) {
        rawContent[lang] = fs.readFileSync(langPath, 'utf8');
      }
    }

    const assetsDir = path.join(articleDir, 'assets');
    const hasAssets = fs.existsSync(assetsDir);

    articles.push({
      ...meta,
      rawContent,
      hasAssets,
      assetsPath: hasAssets ? `/articles/${meta.id}/assets/` : null,
    });
  }

  articles.sort((a, b) => new Date(b.date) - new Date(a.date));

  return articles;
};
