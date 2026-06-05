const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.resolve(__dirname, '../../../content/labels');

module.exports = function () {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  return fs
    .readdirSync(CONTENT_DIR)
    .filter((f) => f.endsWith('.json'))
    .map((f) => JSON.parse(fs.readFileSync(path.join(CONTENT_DIR, f), 'utf8')));
};
