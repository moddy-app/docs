const fs = require('fs');
const path = require('path');
const https = require('https');

const contentDir = path.join(__dirname, '../../../content/authors');

function fetchDiscordUser(discordId) {
  return new Promise((resolve) => {
    const url = `https://api.moddy.app/users/${discordId}`;
    https
      .get(url, (res) => {
        let data = '';
        res.on('data', (chunk) => (data += chunk));
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch {
            resolve(null);
          }
        });
      })
      .on('error', () => resolve(null));
  });
}

module.exports = async function () {
  if (!fs.existsSync(contentDir)) return [];

  const dirs = fs
    .readdirSync(contentDir, {withFileTypes: true})
    .filter((d) => d.isDirectory())
    .map((d) => d.name);

  const authors = [];

  for (const id of dirs) {
    const metaPath = path.join(contentDir, id, 'meta.json');
    if (!fs.existsSync(metaPath)) continue;

    const meta = JSON.parse(fs.readFileSync(metaPath, 'utf8'));

    const needsDiscord =
      meta.avatar === 'DISCORD' ||
      meta.banner_url === 'DISCORD' ||
      meta.avatar_decoration === 'DISCORD';

    if (needsDiscord && meta.discord_id) {
      const discordData = await fetchDiscordUser(meta.discord_id);
      if (discordData) {
        if (meta.avatar === 'DISCORD') meta.avatar = discordData.avatar_url || null;
        if (meta.banner_url === 'DISCORD') meta.banner_url = discordData.banner_url || null;
        if (meta.avatar_decoration === 'DISCORD') {
          meta.avatar_decoration = discordData.avatar_decoration_data?.asset_url || null;
        }
        if (!meta.username) meta.username = discordData.username;
        if (!meta.accent_color) meta.accent_color = discordData.accent_color;
        meta._discord_badges = discordData.badges || [];
      }
    }

    authors.push(meta);
  }

  return authors;
};
