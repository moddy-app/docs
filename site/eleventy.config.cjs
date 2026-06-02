/**
 * Eleventy configuration for Moddy Docs.
 * Stack: Eleventy v2 + Nunjucks + Lit + @material/web
 */

const litPlugin = require('@lit-labs/eleventy-plugin-lit');
const inlineCss = require('./eleventy-helpers/shortcodes/inline-css.cjs');
const inlineJS = require('./eleventy-helpers/shortcodes/inline-js.cjs');
const playgroundExample = require('./eleventy-helpers/shortcodes/playground-example.cjs');
const minifyHTML = require('./eleventy-helpers/transforms/minify-html.cjs');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const pluginTOC = require('eleventy-plugin-nesting-toc');
const permalinks = require('./eleventy-helpers/plugins/permalinks.cjs');
const filterToc = require('./eleventy-helpers/filters/filter-toc.cjs');
const filterSort = require('./eleventy-helpers/filters/filter-sort.cjs');
const mdMarkdown = require('./eleventy-helpers/filters/md-markdown.cjs');
const copyCodeButtonPlugin = require('./eleventy-helpers/plugins/copy-code-button.cjs');
const markdownIt = require('markdown-it');
const {compress} = require('eleventy-plugin-compress');

const DEV = process.env.NODE_ENV === 'DEV';
const jsDir = DEV ? 'lib' : 'build';
const outputFolder = DEV ? '_dev' : '_prod';

/** Slugify a heading text to match markdown-it-anchor output. */
function slugifyHeading(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[`*_~[\]]/g, '')
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

module.exports = function (eleventyConfig) {
  // Passthrough copies
  eleventyConfig
    .addPassthroughCopy({[`${jsDir}/`]: 'js/'})
    .addPassthroughCopy('site/css')
    .addPassthroughCopy('site/fonts')
    .addPassthroughCopy('site/images');

  // Watch targets
  eleventyConfig.addWatchTarget(`./${jsDir}/**/*.js`);

  // Shortcodes
  inlineCss(eleventyConfig, DEV);
  inlineJS(eleventyConfig, DEV, {jsDir});
  playgroundExample(eleventyConfig);

  // Built-in filters
  filterSort(eleventyConfig);
  filterToc(eleventyConfig);
  mdMarkdown(eleventyConfig, []);

  // Transforms
  minifyHTML(eleventyConfig, DEV);

  // Syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // Markdown-it setup
  const md = markdownIt({
    html: true,
    breaks: false,
    linkify: true,
  });

  permalinks(md);
  copyCodeButtonPlugin(md);
  eleventyConfig.setLibrary('md', md);

  // Table of contents (for standard page content)
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3', 'h4'],
    wrapper: 'div',
  });

  // Compression
  eleventyConfig.addPlugin(compress, {enabled: !DEV});

  // =========================================
  // Custom filters for articles/authors/labels
  // =========================================

  /** Render a raw markdown string to HTML. */
  eleventyConfig.addFilter('renderMarkdown', function (content) {
    if (!content) return '';
    return md.render(content);
  });

  /** Format a date string (YYYY-MM-DD) to a localised string. */
  eleventyConfig.addFilter('formatDate', function (dateStr) {
    if (!dateStr) return '';
    try {
      return new Date(dateStr).toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch {
      return dateStr;
    }
  });

  /** Find a label object by ID from the labels array. */
  eleventyConfig.addFilter('filterLabelById', function (labels, id) {
    if (!labels || !id) return null;
    return labels.find((l) => l.id === id) || null;
  });

  /** Find an author object by discord_id or id. */
  eleventyConfig.addFilter('filterAuthorById', function (authors, id) {
    if (!authors || !id) return null;
    return (
      authors.find((a) => a.discord_id === id || a.id === id) || null
    );
  });

  /** Filter articles that have a specific label. */
  eleventyConfig.addFilter('filterArticlesByLabel', function (articles, labelId) {
    if (!articles || !labelId) return [];
    return articles.filter(
      (a) => Array.isArray(a.labels) && a.labels.includes(labelId),
    );
  });

  /** Filter articles by a specific author ID. */
  eleventyConfig.addFilter('filterArticlesByAuthor', function (articles, authorId) {
    if (!articles || !authorId) return [];
    return articles.filter(
      (a) =>
        Array.isArray(a.authors) &&
        a.authors.some((id) => id === authorId),
    );
  });

  /** Filter articles by max visibility level. */
  eleventyConfig.addFilter('filterByVisibility', function (articles, maxLevel) {
    if (!articles) return [];
    return articles.filter((a) => (a.visibility || 1) <= maxLevel);
  });

  /** Limit an array to N items. */
  eleventyConfig.addFilter('limit', function (arr, n) {
    if (!arr) return [];
    return arr.slice(0, n);
  });

  /**
   * Generate a TOC nav from a markdown string.
   * Parses ## and ### headings; returns '' if fewer than 2 headings found.
   * IDs are slugified to match markdown-it-anchor defaults.
   */
  eleventyConfig.addFilter('generateToc', function (markdown) {
    if (!markdown) return '';
    const lines = markdown.split('\n');
    const headings = [];

    for (const line of lines) {
      const m2 = line.match(/^## (.+)$/);
      const m3 = line.match(/^### (.+)$/);
      const m = m2 || m3;
      if (m) {
        const rawText = m[1]
          .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // unwrap markdown links
          .replace(/[`*_~]/g, '') // strip inline formatting
          .trim();
        headings.push({
          level: m2 ? 2 : 3,
          text: rawText,
          id: slugifyHeading(rawText),
        });
      }
    }

    if (headings.length < 2) return '';

    let html = '<nav class="article-toc-nav" aria-label="Table des matières"><ul>';
    for (const h of headings) {
      const cls = h.level === 3 ? ' class="toc-h3"' : '';
      html += `<li${cls}><a href="#${h.id}">${h.text}</a></li>`;
    }
    html += '</ul></nav>';
    return html;
  });

  // =========================================
  // Output config
  // =========================================
  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'site',
      output: outputFolder,
    },
    useGitIgnore: false,
  };
};
