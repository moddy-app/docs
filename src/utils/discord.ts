// Discord user data shape returned by api.moddy.app
export interface DiscordUser {
  user_id: string;
  username: string;
  global_name: string | null;
  discriminator: string;
  avatar: string | null;
  avatar_url: string | null;
  banner: string | null;
  banner_url: string | null;
  accent_color: number | null;
  avatar_decoration_data: {
    asset: string;
    sku_id: string;
    asset_url: string;
  } | null;
  public_flags: number;
  badges: string[];
  bot: boolean;
}

const MODDY_API = 'https://api.moddy.app';

// Server-side fetch — called at build time for authors that have "DISCORD" fields
export async function fetchDiscordUser(userId: string): Promise<DiscordUser | null> {
  try {
    const res = await fetch(`${MODDY_API}/users/${userId}`);
    if (!res.ok) return null;
    return (await res.json()) as DiscordUser;
  } catch {
    return null;
  }
}

export function accentColorToHex(accent: number | null): string | null {
  if (accent === null) return null;
  return `#${accent.toString(16).padStart(6, '0')}`;
}
