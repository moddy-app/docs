/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import '@material/web/focus/md-focus-ring.js';
import '@material/web/icon/icon.js';
import '@material/web/iconbutton/icon-button.js';

import type {MdIconButton} from '@material/web/iconbutton/icon-button.js';
import {css, html, LitElement} from 'lit';
import {customElement, query, state} from 'lit/decorators.js';
import {live} from 'lit/directives/live.js';

import {drawerOpenSignal} from '../signals/drawer-open-state.js';
import {inertContentSignal, inertSidebarSignal} from '../signals/inert.js';
import {SignalElement} from '../signals/signal-element.js';
import {moddyLogo} from '../svg/moddy-logo.js';

/**
 * Top app bar of the catalog.
 */
@customElement('top-app-bar')
export class TopAppBar extends SignalElement(LitElement) {
  /**
   * Whether or not the color picker menu is open.
   */
  @state() private menuOpen = false;
  @state() private langMenuOpen = false;
  @state() private currentLang = 'fr';
  @query('theme-changer') private themeChanger!: HTMLElement;
  private _langObserver?: MutationObserver;

  override connectedCallback() {
    super.connectedCallback();
    this.currentLang = document.documentElement.dataset.lang || 'fr';
    this._langObserver = new MutationObserver(() => {
      const lang = document.documentElement.dataset.lang || 'fr';
      if (lang !== this.currentLang) this.currentLang = lang;
    });
    this._langObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-lang'],
    });
  }

  override disconnectedCallback() {
    super.disconnectedCallback();
    this._langObserver?.disconnect();
  }

  render() {
    return html`
      <header>
        <div class="default-content">
          <section class="start">
            <md-icon-button
              toggle
              class="menu-button"
              aria-label-selected="open navigation menu"
              aria-label="close navigation menu"
              aria-expanded=${drawerOpenSignal.value ? 'false' : 'true'}
              title="${!drawerOpenSignal.value
                ? 'Open'
                : 'Close'} navigation menu"
              .selected=${live(!drawerOpenSignal.value)}
              @input=${this.onMenuIconToggle}>
              <md-icon slot="selected">menu</md-icon>
              <md-icon>menu_open</md-icon>
            </md-icon-button>
            <a
              href="/"
              id="home-link"
              class="logo-link"
              title="Home"
              aria-label="Home">
              ${moddyLogo}
              <md-focus-ring for="home-link"></md-focus-ring>
            </a>
          </section>

          <a id="skip-to-main" href="#main-content" tabindex="0">
            Skip to main content
          </a>

          <section class="end">
            <lit-island
              on:interaction="pointerenter,focusin,pointerdown"
              import="/js/hydration-entrypoints/menu.js"
              id="menu-island">
              <md-icon-button
                title="GitHub repository"
                aria-label="GitHub repository"
                href="https://github.com/moddy-app/docs"
                target="_blank">
                <md-icon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
                  </svg>
                </md-icon>
              </md-icon-button>
              <md-icon-button
                id="lang-button"
                @click="${this.onLangMenuOpen}"
                title="${this.currentLang === 'fr' ? 'Changer de langue' : 'Change language'}"
                aria-label="${this.currentLang === 'fr' ? 'Changer de langue' : 'Change language'}"
                aria-haspopup="listbox"
                aria-expanded=${this.langMenuOpen ? 'true' : 'false'}>
                <md-icon>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2Zm6.93 6h-2.95a15.65 15.65 0 0 0-1.38-3.56A8.03 8.03 0 0 1 18.92 8ZM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96ZM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2s.06 1.34.14 2H4.26Zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 5.08 16Zm2.95-8H5.08a7.987 7.987 0 0 1 4.33-3.56A15.65 15.65 0 0 0 8.03 8ZM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM14.34 14H9.66c-.09-.66-.16-1.32-.16-2s.07-1.35.16-2h4.68c.09.65.16 1.32.16 2s-.07 1.34-.16 2Zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM16.36 14c.08-.66.14-1.32.14-2s-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38Z"/>
                  </svg>
                </md-icon>
              </md-icon-button>
              <md-menu
                anchor="lang-button"
                menu-corner="start-end"
                anchor-corner="end-end"
                default-focus="none"
                role="listbox"
                aria-label="${this.currentLang === 'fr' ? 'Sélectionner une langue' : 'Select a language'}"
                .open=${this.langMenuOpen}
                @closed=${this.onLangMenuClosed}>
                <md-menu-item
                  @click="${() => this.setLang('fr')}">
                  <span slot="headline">Français</span>
                  ${this.currentLang === 'fr' ? html`<md-icon slot="end">check</md-icon>` : ''}
                </md-menu-item>
                <md-menu-item
                  @click="${() => this.setLang('en')}">
                  <span slot="headline">English</span>
                  ${this.currentLang === 'en' ? html`<md-icon slot="end">check</md-icon>` : ''}
                </md-menu-item>
              </md-menu>
              <md-icon-button
                id="theme-button"
                @click="${this.onPaletteClick}"
                title="Page theme controls"
                aria-label="Page theme controls"
                aria-haspopup="dialog"
                aria-expanded=${this.menuOpen ? 'true' : 'false'}>
                <md-icon>palette</md-icon>
              </md-icon-button>
              <md-menu
                anchor="theme-button"
                menu-corner="start-end"
                anchor-corner="end-end"
                default-focus="none"
                role="dialog"
                aria-label="Page color theme controls"
                .open=${this.menuOpen}
                @opened=${this.onMenuOpened}
                @closed=${this.onMenuClosed}
                @keydown=${this.onKeydown}>
                <theme-changer></theme-changer>
              </md-menu>
            </lit-island>
          </section>
        </div>
        <slot></slot>
      </header>
    `;
  }

  /**
   * Opens the theme changer menu and inerts the rest of the page.
   */
  private onPaletteClick() {
    this.menuOpen = true;
    inertContentSignal.value = true;
    inertSidebarSignal.value = true;
    drawerOpenSignal.value = false;
  }

  /**
   * Syncs current menu state with actual menu state and makes the rest of the
   * page interactive again.
   */
  private onMenuClosed() {
    this.menuOpen = false;
    inertContentSignal.value = false;
    inertSidebarSignal.value = false;
  }

  private onMenuOpened() {
    this.themeChanger.focus();
  }

  private onKeydown(e: KeyboardEvent) {
    if (!e.defaultPrevented && e.key === 'Escape') {
      e.preventDefault();
      this.menuOpen = false;
    }
  }

  /**
   * Toggles the sidebar's open state.
   */
  private onMenuIconToggle(e: InputEvent) {
    drawerOpenSignal.value = !(e.target as MdIconButton).selected;
  }

  private onLangMenuOpen() {
    this.langMenuOpen = true;
  }

  private onLangMenuClosed() {
    this.langMenuOpen = false;
  }

  private setLang(lang: string) {
    this.currentLang = lang;
    this.langMenuOpen = false;
    document.documentElement.dataset.lang = lang;
    try {
      localStorage.setItem('moddy-lang', lang);
    } catch {}
  }

  static styles = css`
    :host,
    header {
      display: block;
      height: var(--catalog-top-app-bar-height);
    }

    header {
      position: fixed;
      inset: 0 0 auto 0;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: var(--catalog-spacing-m) var(--catalog-spacing-l);
      background-color: var(--md-sys-color-surface-container);
      color: var(--md-sys-color-on-surface);
      z-index: 12;
      transition: background-color 0.4s ease, color 0.4s ease;
    }

    .default-content {
      width: 100%;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    md-icon-button:not(:defined) {
      width: 40px;
      height: 40px;
      display: flex;
      visibility: hidden;
    }

    md-icon-button * {
      display: block;
    }

    a {
      color: var(--md-sys-color-primary);
      font-size: max(var(--catalog-title-l-font-size), 22px);
      font-weight: 700;
      text-decoration: none;
      padding-inline: 2px;
      position: relative;
      outline: none;
      vertical-align: middle;
    }

    .logo-link {
      display: flex;
      align-items: center;
      padding: 0;
      margin-inline-start: 6px;
    }

    .logo-link svg {
      height: 1.35em;
      width: auto;
      color: var(--md-sys-color-primary);
    }

    .start .menu-button {
      display: none;
    }

    .end {
      flex-grow: 1;
      display: flex;
      justify-content: flex-end;
    }

    #menu-island {
      position: relative;
    }

    #skip-to-main {
      padding: var(--catalog-spacing-s);
      border-radius: var(--catalog-shape-m);
      background-color: var(--md-sys-color-inverse-surface);
      color: var(--md-sys-color-inverse-on-surface);
      opacity: 0;
      position: absolute;
      pointer-events: none;
    }

    #skip-to-main:focus-visible {
      opacity: 1;
      pointer-events: auto;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'top-app-bar': TopAppBar;
  }
}
