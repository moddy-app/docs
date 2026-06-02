import {
  changeColor,
  changeColorAndMode,
  changeColorMode,
  getCurrentMode,
  getCurrentSeedColor,
  getCurrentThemeString,
  getLastSavedAutoColorMode,
  isModeDark,
} from '../utils/theme.js';

function applyColorThemeListeners() {
  document.body.addEventListener('change-color', (event) => {
    changeColor(
      (event as unknown as CustomEvent).detail?.color ?? (event as any).color,
    );
  });

  document.body.addEventListener('change-mode', (event) => {
    changeColorMode(
      (event as unknown as CustomEvent).detail?.mode ?? (event as any).mode,
    );
  });

  window
    .matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', () => {
      if (getCurrentMode() !== 'auto') return;
      changeColor(getCurrentSeedColor()!);
    });
}

function initializeTheme() {
  if (!getCurrentThemeString()) {
    changeColorAndMode('#ECAA2E', 'auto');
  }
}

function determinePageNavigationAutoMode() {
  if (getCurrentMode() !== 'auto') return;
  const actualColorMode = isModeDark('auto', false) ? 'dark' : 'light';
  const lastSavedAutoColorMode = getLastSavedAutoColorMode();
  if (actualColorMode !== lastSavedAutoColorMode) {
    changeColorMode('auto');
  }
}

function applySmoothScrolling() {
  const scrollToHash = () => {
    if (window.location.hash) {
      setTimeout(() => {
        const target = document.querySelector(window.location.hash);
        if (target) target.scrollIntoView({behavior: 'smooth', block: 'start'});
      }, 300);
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', scrollToHash);
  } else {
    scrollToHash();
  }
  window.addEventListener('load', scrollToHash);

  document.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const anchor = target.closest('a[href^="#"]');
    if (!anchor) return;
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({behavior: 'smooth', block: 'start'});
      history.pushState(null, '', href);
    }
  });
}

function applyMobileMenu() {
  const btn = document.querySelector('.mobile-menu-btn');
  const nav = document.querySelector('.mobile-nav') as HTMLElement | null;
  if (!btn || !nav) return;

  btn.addEventListener('click', () => {
    const isOpen = !nav.hidden;
    nav.hidden = isOpen;
    btn.setAttribute('aria-expanded', String(!isOpen));
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  nav.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).tagName === 'A') {
      nav.hidden = true;
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  });
}

applyColorThemeListeners();
initializeTheme();
determinePageNavigationAutoMode();
applySmoothScrolling();
applyMobileMenu();
