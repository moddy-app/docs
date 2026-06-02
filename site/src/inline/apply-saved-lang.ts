/**
 * Applies the saved language preference before the page renders.
 * Runs synchronously in <head> to prevent any language flash.
 */
(function () {
  try {
    const saved = localStorage.getItem('moddy-docs-lang');
    const browser = (navigator.language || 'fr').toLowerCase();
    const lang = saved || (browser.startsWith('en') ? 'en' : 'fr');
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  } catch {
    document.documentElement.setAttribute('data-lang', 'fr');
  }
})();
