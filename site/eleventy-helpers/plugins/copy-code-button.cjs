/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Mirrors markdown-it's built-in fence renderer so we can call options.highlight.
function defaultFenceRenderer(tokens, idx, options) {
  const token = tokens[idx];
  const info = token.info ? token.info.trim() : '';
  const langName = info ? info.split(/\s+/g)[0] : '';

  let highlighted;
  if (options.highlight) {
    highlighted = options.highlight(token.content, langName, '') || escapeHtml(token.content);
  } else {
    highlighted = escapeHtml(token.content);
  }

  if (highlighted.startsWith('<pre')) {
    return highlighted + '\n';
  }

  const langClass = langName ? ` class="language-${langName}"` : '';
  return `<pre${langClass}><code${langClass}>${highlighted}</code></pre>\n`;
}

function defaultCodeBlockRenderer(tokens, idx) {
  return `<pre><code>${escapeHtml(tokens[idx].content)}</code></pre>\n`;
}

/**
 * Renders a copy-code-button component around the original markdown code block
 * if the codeblock is not empty.
 */
function renderCode(originalRule, fallback) {
  return (...args) => {
    const [tokens, idx] = args;
    const codeblockContent = tokens[idx].content
      .replaceAll('"', '&quot;')
      .replaceAll("'", "&apos;");

    const originalHTMLContent = typeof originalRule === 'function'
      ? originalRule(...args)
      : fallback(...args);

    if (codeblockContent.length === 0) {
      return originalHTMLContent;
    }

    return `
<lit-island
    import="/js/hydration-entrypoints/copy-code-button.js"
    on:interaction="focusin,pointerenter,touchstart">
  <copy-code-button>
    ${originalHTMLContent}
  </copy-code-button>
</lit-island>
`;
  };
}

/**
 * Adds a copy code button to code blocks.
 *
 * @param markdownIt The markdown-it instance to use.
 */
function copyCodeButtonPlugin(markdownIt) {
  markdownIt.use(() => {
    markdownIt.renderer.rules.code_block = renderCode(
      markdownIt.renderer.rules.code_block,
      defaultCodeBlockRenderer
    );
    markdownIt.renderer.rules.fence = renderCode(
      markdownIt.renderer.rules.fence,
      defaultFenceRenderer
    );
  });
}

module.exports = copyCodeButtonPlugin;