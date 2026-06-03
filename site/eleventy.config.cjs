/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
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
const { compress } = require('eleventy-plugin-compress');

// dev mode build
const DEV = process.env.NODE_ENV === 'DEV';
// where the JS files are outputted
const jsDir = DEV ? 'lib' : 'build';
// where to output 11ty output
const outputFolder = DEV ? '_dev' : '_prod';

module.exports = function (eleventyConfig) {
  // copy folders to the 11ty output folder
  eleventyConfig
    .addPassthroughCopy({ [`${jsDir}/`]: 'js/' })
    .addPassthroughCopy('site/css')
    .addPassthroughCopy('site/fonts')
    .addPassthroughCopy('site/images');

  // add the lit-ssr plugin (disabled due to SSR compatibility issues with Material Web components)
  // The site works fine without SSR as the components are hydrated on the client side
  // if (!DEV) {
  //   eleventyConfig.addPlugin(litPlugin, {
  //     mode: 'worker',
  //     componentModules: [`./${jsDir}/ssr.js`],
  //   });
  // }

  // Add this for 11ty's --watch flag
  eleventyConfig.addWatchTarget(`./${jsDir}/**/*.js`);
  // Watch content directory for articles, authors, labels
  eleventyConfig.addWatchTarget('../content/**/*');

  // Pass through article assets (only the assets/ subdirectories)
  const contentDir = require('path').resolve(__dirname, '../content/articles');
  const fsSync = require('fs');
  if (fsSync.existsSync(contentDir)) {
    fsSync.readdirSync(contentDir).forEach((articleId) => {
      const assetsPath = require('path').join(contentDir, articleId, 'assets');
      if (fsSync.existsSync(assetsPath)) {
        eleventyConfig.addPassthroughCopy({
          [assetsPath]: `articles/${articleId}/assets`,
        });
      }
    });
  }

  // install shortcodes
  inlineCss(eleventyConfig, DEV);
  inlineJS(eleventyConfig, DEV, { jsDir });
  playgroundExample(eleventyConfig);

  // install filters
  filterSort(eleventyConfig);
  filterToc(eleventyConfig);
  // list of our transforms that we want to apply to markdown links.
  mdMarkdown(eleventyConfig, []);

  // install transforms
  minifyHTML(eleventyConfig, DEV);

  // install code syntax highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  const md = markdownIt({
    html: true,
    breaks: false, // 2 newlines for paragraph break instead of 1
    linkify: true,
  });

  // permalink markdown plugin
  permalinks(md);

  // copy code button plugin
  copyCodeButtonPlugin(md);

  eleventyConfig.setLibrary('md', md);

  // Filter to render raw markdown using the same md instance (with all plugins)
  eleventyConfig.addFilter('renderMarkdown', (content) => {
    if (!content) return '';
    return md.render(content);
  });

  // Generate a unique CSS gradient from a string ID (article or author)
  eleventyConfig.addFilter('articleGradient', (id) => {
    let h = 0;
    const str = String(id);
    for (let i = 0; i < str.length; i++) {
      h = (((h << 5) - h) + str.charCodeAt(i)) | 0;
    }
    h = Math.abs(h);
    const hue1 = h % 360;
    const hue2 = (hue1 + 40 + ((h >> 8) % 80)) % 360;
    const angle = 110 + (h % 80);
    return `linear-gradient(${angle}deg, hsl(${hue1},65%,52%), hsl(${hue2},75%,40%))`;
  });

  // Format a date string for a given locale ('fr' or 'en')
  eleventyConfig.addFilter('formatDate', (date, locale) => {
    if (!date) return '';
    const d = new Date(String(date) + 'T00:00:00');
    return d.toLocaleDateString(locale === 'en' ? 'en-US' : 'fr-FR', {
      year: 'numeric', month: 'long', day: 'numeric',
    });
  });

  // Add a TOC plugin (implementation is wip for now)
  eleventyConfig.addPlugin(pluginTOC, {
    tags: ['h2', 'h3', 'h4'],
    wrapper: 'div',
  });

  eleventyConfig.addPlugin(compress, {
    enabled: !DEV,
  });

  // set output folders and use nunjucks for html templating engine. see
  // nunjucks docs and 11ty docs for more info on nunjucks templating
  return {
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'site',
      output: outputFolder,
    },
    // Disable useGitIgnore so Eleventy can process generated markdown files
    // that are in .gitignore (generated during build from /docs)
    useGitIgnore: false,
  };
};
