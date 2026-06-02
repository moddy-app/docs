import {css, html, LitElement} from 'lit';
import {customElement, state} from 'lit/decorators.js';

type Lang = 'fr' | 'en';

const STORAGE_KEY = 'moddy-docs-lang';

/**
 * Language switcher component for fr/en switching.
 */
@customElement('language-switcher')
export class LanguageSwitcher extends LitElement {
  @state() private lang: Lang = 'fr';

  override connectedCallback() {
    super.connectedCallback();
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
      const browser = (navigator.language || 'fr').toLowerCase();
      this.lang = saved || (browser.startsWith('en') ? 'en' : 'fr');
    } catch {
      this.lang = 'fr';
    }
  }

  private setLang(lang: Lang) {
    this.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {}
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang);
  }

  override render() {
    return html`
      <div class="lang-switcher" role="group" aria-label="Language / Langue">
        <button
          class="lang-btn ${this.lang === 'fr' ? 'active' : ''}"
          @click=${() => this.setLang('fr')}
          aria-pressed=${this.lang === 'fr'}
          title="Français"
        >
          FR
        </button>
        <button
          class="lang-btn ${this.lang === 'en' ? 'active' : ''}"
          @click=${() => this.setLang('en')}
          aria-pressed=${this.lang === 'en'}
          title="English"
        >
          EN
        </button>
      </div>
    `;
  }

  static override styles = css`
    :host {
      display: inline-flex;
      align-items: center;
    }

    .lang-switcher {
      display: flex;
      align-items: center;
      border-radius: 100px;
      overflow: hidden;
      border: 1px solid var(--md-sys-color-outline-variant);
      background: var(--md-sys-color-surface-container);
    }

    .lang-btn {
      all: unset;
      padding: 6px 12px;
      font-size: 12px;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      color: var(--md-sys-color-on-surface-variant);
      transition: background 0.15s, color 0.15s;
      border-radius: 100px;
    }

    .lang-btn:hover {
      background: var(--md-sys-color-surface-container-high);
      color: var(--md-sys-color-on-surface);
    }

    .lang-btn.active {
      background: var(--md-sys-color-primary);
      color: var(--md-sys-color-on-primary);
    }

    .lang-btn:focus-visible {
      outline: 2px solid var(--md-sys-color-primary);
      outline-offset: 2px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'language-switcher': LanguageSwitcher;
  }
}
