# Architecture — Moddy Docs

## Vue d'ensemble

Moddy Docs est un site de documentation statique généré avec **Astro 5**. Le contenu est stocké dans des fichiers Markdown et JSON dans `/content/`, les pages sont générées à build time.

## Stack technique

| Technologie | Rôle |
|---|---|
| **Astro 5** | Framework SSG (Static Site Generation) |
| **@material/web** (CDN) | Composants UI Material Design 3 |
| **marked** | Rendu Markdown → HTML côté serveur |
| **Vanilla JS** | Interactivité (theme, langue, recherche) |

## Structure du projet

```
moddy-docs/
├── src/
│   ├── layouts/
│   │   └── Base.astro          # Layout HTML principal (MD3 tokens, nav, footer)
│   ├── components/
│   │   ├── Nav.astro           # Navigation fixe (search, lang, theme)
│   │   ├── ArticleCard.astro   # Carte d'article (grille home, collections)
│   │   ├── AuthorChip.astro    # Chip auteur (lien vers profil)
│   │   └── LabelChip.astro     # Chip label/collection
│   ├── pages/
│   │   ├── index.astro         # Page d'accueil
│   │   ├── articles/[id].astro # Page article
│   │   ├── authors/[id].astro  # Page auteur
│   │   ├── collections/[id].astro # Page collection/label
│   │   ├── [slug].astro        # Redirections /{id} → bonne page
│   │   ├── 404.astro           # Page 404
│   │   └── search-index.json.ts # Index de recherche JSON
│   ├── i18n/
│   │   └── translations.ts     # Toutes les chaînes UI (fr + en)
│   └── utils/
│       ├── content.ts          # Chargeurs de contenu (fs/promises)
│       ├── discord.ts          # Client API api.moddy.app
│       └── theme.ts            # Génération palette MD3 depuis couleur seed
├── content/
│   ├── articles/{id}/
│   │   ├── meta.json           # Métadonnées de l'article
│   │   ├── fr.md               # Contenu en français
│   │   ├── en.md               # Contenu en anglais
│   │   └── assets/             # Images, fichiers de l'article
│   ├── authors/{id}.json       # Profil auteur
│   └── labels/{id}.json        # Définition d'un label
├── public/
│   └── favicon.svg
├── docs/                       # Cette documentation
└── examples/                   # Design de référence (à ne pas modifier)
```

## URLs

| Pattern | Page |
|---|---|
| `/` | Accueil |
| `/articles/{id}` | Article |
| `/authors/{id}` | Profil auteur |
| `/collections/{id}` | Collection/label |
| `/{id}` | Redirection automatique (301) |

## Système de langues

- Les chaînes UI sont dans `src/i18n/translations.ts`
- La langue est détectée via `navigator.language` et stockée dans `localStorage` (`moddy-lang`)
- Les éléments multilingues utilisent `data-lang="fr"` / `data-lang="en"` — le JS affiche/cache selon la préférence
- Pour les articles : les deux versions HTML (fr + en) sont incluses dans la page, la bonne est montrée selon la langue active

## Thématisation dynamique

Chaque article/auteur/collection a une couleur `themeColor` (hex). Le système :
1. Génère une palette MD3 complète à partir de cette couleur seed (via `src/utils/theme.ts`)
2. Applique les tokens CSS (`--md-sys-color-*`) sur `:root`
3. Supporte light/dark mode avec deux palettes distinctes

## Discord API

Les auteurs peuvent avoir des champs à `"DISCORD"` :
- `avatarUrl: "DISCORD"` → fetch `avatar_url` depuis `api.moddy.app/users/{discordId}`
- `avatarDecorationUrl: "DISCORD"` → fetch `avatar_decoration_data.asset_url`
- `bannerColor: "DISCORD"` → convertit `accent_color` (int) en hex

Le fetch n'est effectué que si au moins un champ est `"DISCORD"` et que `discordId` est renseigné.

## Niveaux de référencement

| Niveau | Comportement |
|---|---|
| `1` | Article visible partout (home, recherche, collections) |
| `2` | Accessible via recherche et pages de labels/auteurs uniquement |
| `3` | `noindex` + inaccessible sauf via lien direct |
