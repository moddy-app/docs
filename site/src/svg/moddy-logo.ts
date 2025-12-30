/**
 * @license
 * Moddy Logo
 */

import {html} from 'lit';

/**
 * The Moddy logo.
 */
export const moddyLogo = html` <svg
  viewBox="0 0 100 100"
  fill="currentColor">
  <!--
    REMPLACE CE COMMENTAIRE PAR TON SVG

    IMPORTANT :
    - Garde fill="currentColor" sur le <svg> OU sur les <path>
    - Supprime tous les attributs fill="#..." de ton SVG original
    - Si ton SVG a plusieurs couleurs, utilise :
      - currentColor pour la couleur principale
      - var(--md-sys-color-primary) pour d'autres couleurs du thème

    Exemple :
    <path d="M10 10 L90 90" fill="currentColor" />
    <circle cx="50" cy="50" r="40" fill="var(--md-sys-color-primary)" />
  -->
</svg>`;
