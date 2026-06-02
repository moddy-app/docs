const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../../../content/labels');

module.exports = function () {
  if (!fs.existsSync(contentDir)) return [];

  const dirs = fs
    .readdirSync(contentDir, {withFileTypes: true})
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const labels = [];

  for (const id of dirs) {
    const metaPath = path.join(contentDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) continue;

    labels.push(JSON.parse(fs.readFileSync(metaPath, 'utf8')));
  }

  labels.sort((a, b) => a.id.localeCompare(b.id));

  return labels;
};
