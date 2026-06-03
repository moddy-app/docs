const fs = require('fs');
const path = require('path');

const CONTENT_DIR = path.resolve(__dirname, '../../../content/authors');
const API_BASE = 'https://api.moddy.app/users';
const DISCORD_PLACEHOLDER = 'DISCORD';

async function fetchDiscordUser(userId) {
  try {
    const res = await fetch(`${API_BASE}/${userId}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function needsDiscordFetch(author) {
  return (
    author.username === DISCORD_PLACEHOLDER ||
    author.avatar === DISCORD_PLACEHOLDER ||
    author.avatar_decoration === DISCORD_PLACEHOLDER
  );
}

module.exports = async function () {
  if (!fs.existsSync(CONTENT_DIR)) return [];

  const authors = [];

  for (const file of fs.readdirSync(CONTENT_DIR)) {
    if (!file.endsWith('.json')) continue;

    const filePath = path.join(CONTENT_DIR, file);
    const author = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    if (needsDiscordFetch(author)) {
      const discordData = await fetchDiscordUser(author.id);
      if (discordData) {
        if (author.username === DISCORD_PLACEHOLDER) {
          author.username = discordData.global_name || discordData.username;
        }
        if (author.avatar === DISCORD_PLACEHOLDER) {
          author.avatar = discordData.avatar_url || null;
        }
        if (author.avatar_decoration === DISCORD_PLACEHOLDER) {
          author.avatar_decoration =
            discordData.avatar_decoration_data?.asset_url || null;
        }
        // Store extra Discord data
        author._discord = {
          badges: discordData.badges || [],
          accent_color: discordData.accent_color,
        };
      } else {
        // Fallback: clear DISCORD placeholders
        if (author.username === DISCORD_PLACEHOLDER) author.username = author.id;
        if (author.avatar === DISCORD_PLACEHOLDER) author.avatar = null;
        if (author.avatar_decoration === DISCORD_PLACEHOLDER)
          author.avatar_decoration = null;
      }
    }

    authors.push(author);
  }

  return authors;
};
