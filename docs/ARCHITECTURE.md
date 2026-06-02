# Architecture de Moddy Docs

## Vue d'ensemble

Moddy Docs est un site statique généré par **Eleventy (11ty) v2** avec des composants interactifs en **Lit** et des éléments UI **@material/web** (Material Design 3).

## Flux de données

```
content/ (JSON + Markdown)
    ↓
site/site/_data/*.js (scripts Eleventy)
    ↓
site/site/**/*.njk (templates Nunjucks)
    ↓
site/_prod/ (HTML statique)
    ↓
Vercel (CDN)
```

## Composants Lit

| Composant | Fichier | Rôle |
|-----------|---------|------|
| `language-switcher` | `src/components/language-switcher.ts` | Bascule fr/en |
| `docs-search` | `src/components/docs-search.ts` | Recherche plein texte |
| `article-card` | `src/components/article-card.ts` | Carte article |
| `theme-changer` | `src/components/theme-changer.ts` | Contrôle du thème |
| `top-app-bar` | `src/components/top-app-bar.ts` | Barre du haut |

## Scripts inline (`src/inline/`)

Ces scripts sont compilés en IIFE et injectés dans `<head>` pour s'exécuter **avant** le rendu du body (évite les flash).

| Script | Rôle |
|--------|------|
| `apply-saved-theme.ts` | Applique le thème M3 sauvegardé |
| `apply-saved-lang.ts` | Applique la langue sauvegardée |

## Hydration

Les composants Lit sont chargés à la demande via `<lit-island>` :

```html
<lit-island on:visible import="/js/hydration-entrypoints/navigation.js">
  <theme-changer></theme-changer>
</lit-island>
```

## i18n

Approche SSG avec commutation client-side :
1. Les deux versions linguistiques sont dans le HTML
2. Script inline applique `data-lang` sur `<html>` avant rendu
3. CSS cache la version non-active : `[data-lang="en"] .lang-fr { display: none }`

## Système de thème

Basé sur Material Color Utilities. Un script inline lit `localStorage['material-theme']` et applique les custom properties CSS avant affichage.

Mode neutre : seed color `#607D8B` (bleu-gris M3) → palette neutre sans choix utilisateur.
