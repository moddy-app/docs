// Runs inline in <head> to apply saved language before first paint (prevents flash)
(function () {
  const saved = localStorage.getItem('moddy-lang');
  const browserLang = (navigator.language || 'fr').split('-')[0];
  const supported = ['fr', 'en'];
  const lang = supported.includes(saved ?? '') ? saved! : supported.includes(browserLang) ? browserLang : 'fr';
  document.documentElement.dataset.lang = lang;
})();
