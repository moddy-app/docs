import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://docs.moddy.app',
  integrations: [sitemap()],
  output: 'static',
  build: {
    assets: '_assets',
  },
});
