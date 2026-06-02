import { readFile, readdir } from 'node:fs/promises';
import { join } from 'node:path';
import type { Lang } from '../i18n/translations.ts';

const ROOT = process.cwd();

// ─── Types ────────────────────────────────────────────────────────────────────

export interface ArticleMeta {
  id: string;
  title: Record<Lang, string>;
  summary: Record<Lang, string>;
  authors: string[];
  createdAt: string;        // ISO date string
  labels: string[];
  banner: string | null;    // relative to article assets/ folder, or absolute URL, or null
  referencing: 1 | 2 | 3;
}

export interface AuthorMeta {
  id: string;
  discordId: string | null;
  username: string;
  avatarUrl: string | null;             // "DISCORD" | URL | null
  avatarDecorationUrl: string | null;   // "DISCORD" | URL | null
  bannerColor: string | null;           // "DISCORD" | hex | null
  role: Record<Lang, string>;
  bio: Record<Lang, string>;
  links: AuthorLink[];
}

export interface AuthorLink {
  name: string;
  url: string;
  icon: string;  // SVG path or named icon (e.g. "link", "language")
}

export interface LabelMeta {
  id: string;
  name: string;
  color: string;  // hex
}

// ─── Loaders ──────────────────────────────────────────────────────────────────

export async function getAllArticles(): Promise<ArticleMeta[]> {
  const dir = join(ROOT, 'content/articles');
  let entries: string[] = [];
  try {
    entries = await readdir(dir);
  } catch {
    return [];
  }

  const articles: ArticleMeta[] = [];
  for (const entry of entries) {
    try {
      const meta = await getArticle(entry);
      if (meta) articles.push(meta);
    } catch {
      // skip malformed articles
    }
  }
  return articles.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function getArticle(id: string): Promise<ArticleMeta | null> {
  const metaPath = join(ROOT, 'content/articles', id, 'meta.json');
  try {
    const raw = await readFile(metaPath, 'utf-8');
    return JSON.parse(raw) as ArticleMeta;
  } catch {
    return null;
  }
}

export async function getArticleContent(id: string, lang: Lang): Promise<string> {
  const mdPath = join(ROOT, 'content/articles', id, `${lang}.md`);
  try {
    return await readFile(mdPath, 'utf-8');
  } catch {
    // Fallback to other language
    const fallbackPath = join(ROOT, 'content/articles', id, 'fr.md');
    try {
      return await readFile(fallbackPath, 'utf-8');
    } catch {
      return '';
    }
  }
}

export async function getAllAuthors(): Promise<AuthorMeta[]> {
  const dir = join(ROOT, 'content/authors');
  let entries: string[] = [];
  try {
    entries = await readdir(dir);
  } catch {
    return [];
  }

  const authors: AuthorMeta[] = [];
  for (const entry of entries) {
    if (!entry.endsWith('.json')) continue;
    try {
      const raw = await readFile(join(dir, entry), 'utf-8');
      authors.push(JSON.parse(raw) as AuthorMeta);
    } catch {
      // skip
    }
  }
  return authors;
}

export async function getAuthor(id: string): Promise<AuthorMeta | null> {
  const path = join(ROOT, 'content/authors', `${id}.json`);
  try {
    const raw = await readFile(path, 'utf-8');
    return JSON.parse(raw) as AuthorMeta;
  } catch {
    return null;
  }
}

export async function getAllLabels(): Promise<LabelMeta[]> {
  const dir = join(ROOT, 'content/labels');
  let entries: string[] = [];
  try {
    entries = await readdir(dir);
  } catch {
    return [];
  }

  const labels: LabelMeta[] = [];
  for (const entry of entries) {
    if (!entry.endsWith('.json')) continue;
    try {
      const raw = await readFile(join(dir, entry), 'utf-8');
      labels.push(JSON.parse(raw) as LabelMeta);
    } catch {
      // skip
    }
  }
  return labels;
}

export async function getLabel(id: string): Promise<LabelMeta | null> {
  const path = join(ROOT, 'content/labels', `${id}.json`);
  try {
    const raw = await readFile(path, 'utf-8');
    return JSON.parse(raw) as LabelMeta;
  } catch {
    return null;
  }
}

export async function getArticlesByLabel(labelId: string): Promise<ArticleMeta[]> {
  const all = await getAllArticles();
  return all.filter(a => a.labels.includes(labelId));
}

export async function getArticlesByAuthor(authorId: string): Promise<ArticleMeta[]> {
  const all = await getAllArticles();
  return all.filter(a => a.authors.includes(authorId));
}

export function getArticleBannerUrl(articleId: string, banner: string | null): string | null {
  if (!banner) return null;
  if (banner.startsWith('http')) return banner;
  return `/_assets/articles/${articleId}/${banner}`;
}

export function getAuthorAvatarUrl(author: AuthorMeta): string | null {
  if (!author.avatarUrl || author.avatarUrl === 'DISCORD') return null;
  if (author.avatarUrl.startsWith('http')) return author.avatarUrl;
  return `/_assets/authors/${author.avatarUrl}`;
}
