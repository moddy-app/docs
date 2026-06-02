import type { APIRoute } from 'astro';
import { getAllArticles } from '../utils/content.ts';

export const GET: APIRoute = async () => {
  const articles = await getAllArticles();
  const publicArticles = articles.filter(a => a.referencing === 1);

  const index = publicArticles.map(a => ({
    id: a.id,
    title: a.title['fr'] ?? a.title['en'] ?? '',
    titleEn: a.title['en'] ?? a.title['fr'] ?? '',
    summary: a.summary['fr'] ?? a.summary['en'] ?? '',
    summaryEn: a.summary['en'] ?? a.summary['fr'] ?? '',
    url: `/articles/${a.id}`,
    labels: a.labels,
  }));

  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
};
