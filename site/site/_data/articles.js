const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.resolve(__dirname, '../../../content/articles');
const LABELS_DIR = path.resolve(__dirname, '../../../content/labels');

function loadLabelColors() {
  const map = {};
  if (!fs.existsSync(LABELS_DIR)) return map;
  for (const file of fs.readdirSync(LABELS_DIR)) {
    if (!file.endsWith('.json')) continue;
    const label = JSON.parse(fs.readFileSync(path.join(LABELS_DIR, file), 'utf8'));
    map[label.id] = label.color;
  }
  return map;
}

module.exports = async function () {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const labelColors = loadLabelColors();
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

    // Support optional title_translations: { fr, en } in meta.json.
    // Falls back to the plain title string for both languages.
    const titleLocalized = meta.title_translations || {
      fr: meta.title,
      en: meta.title,
    };

    // theme_color resolution:
    //   - key present with a string → use that value (explicit override)
    //   - key present with null     → no theme color (explicit disable)
    //   - key absent                → auto: use first label's color
    let theme_color;
    if ('theme_color' in meta) {
      theme_color = meta.theme_color;
    } else {
      const firstLabel = meta.labels?.[0];
      theme_color = firstLabel ? (labelColors[firstLabel] ?? null) : null;
    }

    articles.push({
      ...meta,
      theme_color,
      titleLocalized,
      rawContent,
      hasAssets,
      assetsPath: hasAssets ? `/articles/${meta.id}/assets/` : null,
    });
  }

  articles.sort((a, b) => new Date(b.date) - new Date(a.date));

  return articles;
};
