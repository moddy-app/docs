/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// Client-side interactivity for the home page: search, label/author filters,
// and the "see all" toggle.

function init() {
  const grid = document.getElementById('home-articles-grid');
  const searchInput = document.getElementById('home-search') as HTMLInputElement | null;
  const seeAllContainer = document.getElementById('home-see-all');
  const seeAllBtn = document.getElementById('home-see-all-btn') as HTMLButtonElement | null;
  const filterChips = document.querySelectorAll<HTMLButtonElement>('.home-filter-chip');

  if (!grid) return;

  const cards = Array.from(grid.querySelectorAll<HTMLAnchorElement>('.article-card'));
  const initiallyHidden = cards.filter(c => c.classList.contains('article-card--initially-hidden'));

  let showAll = false;
  let activeLabels = new Set<string>();
  let activeAuthors = new Set<string>();
  let searchQuery = '';

  function applyFilters() {
    let visibleCount = 0;
    const hasFilters = searchQuery || activeLabels.size > 0 || activeAuthors.size > 0;

    for (const card of cards) {
      const title = (card.dataset.title ?? '').toLowerCase();
      const labelsStr = card.dataset.labels ?? '';
      const authorsStr = card.dataset.authors ?? '';
      const cardLabels = labelsStr ? labelsStr.split(',') : [];
      const cardAuthors = authorsStr ? authorsStr.split(',') : [];

      const matchesSearch = !searchQuery || title.includes(searchQuery);
      const matchesLabel = activeLabels.size === 0 || cardLabels.some(l => activeLabels.has(l));
      const matchesAuthor = activeAuthors.size === 0 || cardAuthors.some(a => activeAuthors.has(a));

      const passesFilter = matchesSearch && matchesLabel && matchesAuthor;

      // visibility accounting for "see all" toggle
      const isInitiallyHidden = card.classList.contains('article-card--initially-hidden');

      if (passesFilter && (showAll || hasFilters || !isInitiallyHidden)) {
        card.classList.remove('article-card--search-hidden');
        visibleCount++;
      } else {
        card.classList.add('article-card--search-hidden');
      }
    }

    // show/hide "see all" button: only when no filters active and there are hidden cards
    if (seeAllContainer) {
      const hasHiddenCards = initiallyHidden.length > 0;
      if (hasFilters || showAll || !hasHiddenCards) {
        seeAllContainer.setAttribute('hidden', '');
      } else {
        seeAllContainer.removeAttribute('hidden');
      }
    }

    // update "no results" message
    let noResults = grid.querySelector<HTMLElement>('.home-no-results');
    if (!noResults) {
      noResults = document.createElement('p');
      noResults.className = 'home-no-results';
      noResults.innerHTML =
        '<span data-lang-content="fr">Aucun article ne correspond à votre recherche.</span>' +
        '<span data-lang-content="en">No articles match your search.</span>';
      grid.appendChild(noResults);
      // apply current lang to new element
      const lang = document.documentElement.dataset.lang || 'fr';
      applyLangToElement(noResults, lang);
    }
    if (visibleCount === 0) {
      noResults.classList.add('visible');
    } else {
      noResults.classList.remove('visible');
    }
  }

  function applyLangToElement(el: HTMLElement, lang: string) {
    el.querySelectorAll<HTMLElement>('[data-lang-content]').forEach(span => {
      span.style.display = span.dataset.langContent === lang ? 'inline' : 'none';
    });
  }

  // Search input
  if (searchInput) {
    // update placeholder text based on language
    function updatePlaceholder() {
      const lang = document.documentElement.dataset.lang || 'fr';
      searchInput!.placeholder =
        lang === 'en'
          ? (searchInput!.dataset.placeholderEn ?? 'Search articles…')
          : (searchInput!.dataset.placeholderFr ?? 'Rechercher un article…');
    }
    updatePlaceholder();

    // watch for lang changes
    const observer = new MutationObserver(() => updatePlaceholder());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang'] });

    searchInput.addEventListener('input', () => {
      searchQuery = searchInput.value.toLowerCase().trim();
      applyFilters();
    });
  }

  // Filter chips
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const type = chip.dataset.filterType;
      const value = chip.dataset.filterValue ?? '';
      const isActive = chip.getAttribute('aria-pressed') === 'true';

      chip.setAttribute('aria-pressed', isActive ? 'false' : 'true');

      if (type === 'label') {
        if (isActive) activeLabels.delete(value);
        else activeLabels.add(value);
      } else if (type === 'author') {
        if (isActive) activeAuthors.delete(value);
        else activeAuthors.add(value);
      }

      applyFilters();
    });
  });

  // See all button
  if (seeAllBtn) {
    seeAllBtn.addEventListener('click', () => {
      showAll = true;
      seeAllBtn.setAttribute('aria-expanded', 'true');
      applyFilters();
    });
  }

  applyFilters();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
