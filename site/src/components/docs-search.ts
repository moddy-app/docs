import '@material/web/icon/icon.js';
import {css, html, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';

interface SearchEntry {
  id: string;
  title_fr: string;
  title_en: string;
  abstract_fr: string;
  abstract_en: string;
  labels: string[];
  url: string;
  date: string;
}

type Lang = 'fr' | 'en';

/**
 * Client-side full-text search over /search-index.json.
 */
@customElement('docs-search')
export class DocsSearch extends LitElement {
  @state() private open = false;
  @state() private query = '';
  @state() private results: SearchEntry[] = [];
  @state() private index: SearchEntry[] | null = null;
  @state() private activeLang: Lang = 'fr';
  @state() private activeIndex = -1;

  private fetchIndex() {
    if (this.index !== null) return;
    fetch('/search-index.json')
      .then((r) => r.json())
      .then((data) => {
        this.index = data as SearchEntry[];
      })
      .catch(() => {
        this.index = [];
      });
  }

  private getLang(): Lang {
    return (document.documentElement.getAttribute('data-lang') as Lang) || 'fr';
  }

  private search(q: string) {
    this.query = q;
    this.activeIndex = -1;
    if (!q.trim() || !this.index) {
      this.results = [];
      return;
    }
    const lang = this.getLang();
    const lower = q.toLowerCase();
    this.results = this.index
      .filter((e) => {
        const title = lang === 'fr' ? e.title_fr : e.title_en;
        const abstract = lang === 'fr' ? e.abstract_fr : e.abstract_en;
        return (
          title.toLowerCase().includes(lower) ||
          abstract.toLowerCase().includes(lower)
        );
      })
      .slice(0, 6);
  }

  private onFocus() {
    this.open = true;
    this.activeLang = this.getLang();
    this.fetchIndex();
  }

  private onBlur(e: FocusEvent) {
    if (!this.shadowRoot?.contains(e.relatedTarget as Node)) {
      setTimeout(() => {
        this.open = false;
        this.activeIndex = -1;
      }, 150);
    }
  }

  private onInput(e: Event) {
    this.search((e.target as HTMLInputElement).value);
  }

  private onKeyDown(e: KeyboardEvent) {
    if (!this.open || !this.query) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.activeIndex = Math.min(this.activeIndex + 1, this.results.length - 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.activeIndex = Math.max(this.activeIndex - 1, -1);
    } else if (e.key === 'Enter' && this.activeIndex >= 0) {
      e.preventDefault();
      const result = this.results[this.activeIndex];
      if (result) window.location.href = result.url;
    } else if (e.key === 'Escape') {
      this.open = false;
      this.activeIndex = -1;
    }
  }

  private clear() {
    this.query = '';
    this.results = [];
    this.activeIndex = -1;
    this.shadowRoot?.querySelector('input')?.focus();
  }

  override render() {
    const lang = this.activeLang || this.getLang();
    const placeholder = lang === 'fr' ? 'Rechercher...' : 'Search...';
    const noResults = lang === 'fr' ? 'Aucun résultat.' : 'No results.';

    return html`
      <div class="search-wrapper" @focusout=${this.onBlur}>
        <div class="search-input-row">
          <span class="material-symbols-outlined search-icon" aria-hidden="true">search</span>
          <input
            type="search"
            class="search-input"
            placeholder="${placeholder}"
            .value=${this.query}
            @input=${this.onInput}
            @focus=${this.onFocus}
            @keydown=${this.onKeyDown}
            aria-label="${placeholder}"
            aria-expanded=${this.open && this.query.length > 0}
            aria-autocomplete="list"
            autocomplete="off"
            spellcheck="false"
          />
          ${this.query
            ? html`<button class="clear-btn" @click=${this.clear} aria-label="Effacer">
                <span class="material-symbols-outlined">close</span>
              </button>`
            : ''}
        </div>

        ${this.open && this.query
          ? html`
              <div class="search-results" role="listbox">
                ${this.results.length === 0
                  ? html`<div class="search-empty">${noResults}</div>`
                  : this.results.map(
                      (r, i) => html`
                        <a
                          href="${r.url}"
                          class="search-result-item ${this.activeIndex === i ? 'search-result-active' : ''}"
                          role="option"
                          aria-selected="${this.activeIndex === i}"
                        >
                          <span class="result-title">
                            ${lang === 'fr' ? r.title_fr : r.title_en}
                          </span>
                          <span class="result-abstract">
                            ${lang === 'fr' ? r.abstract_fr : r.abstract_en}
                          </span>
                        </a>
                      `,
                    )}
              </div>
            `
          : ''}
      </div>
    `;
  }

  static override styles = css`
    :host {
      display: inline-block;
      position: relative;
    }

    .search-wrapper {
      position: relative;
    }

    .search-input-row {
      display: flex;
      align-items: center;
      border: 1px solid var(--md-sys-color-outline-variant);
      border-radius: 100px;
      background: var(--md-sys-color-surface-container);
      padding: 0 12px;
      gap: 8px;
      transition: border-color 0.15s, box-shadow 0.15s;
    }

    .search-input-row:focus-within {
      border-color: var(--md-sys-color-primary);
      box-shadow: 0 0 0 2px color-mix(in srgb, var(--md-sys-color-primary) 20%, transparent);
    }

    .search-icon {
      font-size: 18px;
      color: var(--md-sys-color-on-surface-variant);
      flex-shrink: 0;
    }

    .search-input {
      border: none;
      background: transparent;
      font-family: inherit;
      font-size: 14px;
      color: var(--md-sys-color-on-surface);
      width: 180px;
      padding: 8px 0;
      outline: none;
    }

    .search-input::placeholder {
      color: var(--md-sys-color-on-surface-variant);
    }

    .search-input::-webkit-search-decoration,
    .search-input::-webkit-search-cancel-button {
      display: none;
    }

    .clear-btn {
      all: unset;
      cursor: pointer;
      display: flex;
      align-items: center;
      color: var(--md-sys-color-on-surface-variant);
    }

    .clear-btn .material-symbols-outlined {
      font-size: 16px;
    }

    .search-results {
      position: absolute;
      top: calc(100% + 8px);
      left: 0;
      right: 0;
      min-width: 320px;
      background: var(--md-sys-color-surface);
      border: 1px solid var(--md-sys-color-outline-variant);
      border-radius: var(--catalog-shape-l);
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
      z-index: 999;
      overflow: hidden;
      max-height: 360px;
      overflow-y: auto;
    }

    .search-empty {
      padding: 16px;
      color: var(--md-sys-color-on-surface-variant);
      font-size: 14px;
      text-align: center;
    }

    .search-result-item {
      display: block;
      padding: 12px 16px;
      text-decoration: none;
      color: var(--md-sys-color-on-surface);
      transition: background 0.1s;
      border-bottom: 1px solid var(--md-sys-color-outline-variant);
    }

    .search-result-item:last-child {
      border-bottom: none;
    }

    .search-result-item:hover,
    .search-result-active {
      background: var(--md-sys-color-surface-container);
      text-decoration: none;
    }

    .search-result-active {
      outline: 2px solid var(--md-sys-color-primary);
      outline-offset: -2px;
    }

    .result-title {
      display: block;
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 2px;
    }

    .result-abstract {
      display: block;
      font-size: 12px;
      color: var(--md-sys-color-on-surface-variant);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    @media (max-width: 600px) {
      .search-input {
        width: 120px;
      }
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'docs-search': DocsSearch;
  }
}
