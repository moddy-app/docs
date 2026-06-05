# Moddy Docs — CLAUDE.md

## Vue d'ensemble

Site de documentation pour le bot Discord **Moddy**, construit avec **Eleventy (11ty)** + **Lit.js** + **Material Web Components**.

Repo racine : `/home/user/docs/`
Projet Eleventy : `/home/user/docs/site/`

---

## Structure du projet

```
/
├── content/                  # Contenu éditorial (articles, auteurs, labels)
│   ├── articles/
│   │   └── {article-id}/
│   │       ├── meta.json     # Métadonnées de l'article
│   │       ├── fr.md         # Contenu français
│   │       ├── en.md         # Contenu anglais
│   │       └── assets/       # Images et ressources
│   ├── authors/
│   │   └── {discord-id}.json # Profil auteur
│   └── labels/
│       └── {label-id}.json   # Label/catégorie
│
├── docs/                     # Documentation legacy (pages /about/)
│   ├── quick-start.md
│   ├── intro.md
│   └── Legal/
│
├── site/                     # Projet Eleventy
│   ├── src/                  # TypeScript source (composants Lit)
│   ├── site/                 # Input Eleventy (templates Nunjucks)
│   │   ├── _includes/        # Layouts HTML
│   │   ├── _data/            # Data files (articles.js, authors.js, labels.js, i18n.js)
│   │   ├── articles/         # Template pagination articles → /articles/{id}/
│   │   ├── collections/      # Template pagination labels → /collections/{id}/
│   │   ├── authors/          # Template pagination auteurs → /authors/{id}/
│   │   ├── about/            # Pages docs legacy
│   │   └── css/              # Feuilles de style
│   ├── eleventy-helpers/     # Plugins/filtres Eleventy custom
│   ├── scripts/              # Scripts de build
│   └── eleventy.config.cjs   # Config Eleventy
│
└── vercel.json               # Config déploiement Vercel
```

---

## Architecture du contenu

### Articles (`/content/articles/{id}/`)

**`meta.json`** — Métadonnées :
```json
{
  "title": "Titre de l'article",
  "id": "slug-article",
  "authors": ["discord-id-1"],
  "date": "2024-01-15",
  "chapeau": { "fr": "Résumé FR", "en": "Summary EN" },
  "banner": null,
  "seo_level": 1,
  "labels": ["label-id"]
}
```

**Niveaux SEO :**
- `1` = Référencement normal
- `2` = Accessible via recherche ou lien label/auteur uniquement (`noindex`)
- `3` = Accessible uniquement via lien direct (`noindex, nofollow`)

**`fr.md` / `en.md`** — Contenu Markdown par langue.

**`assets/`** — Ressources (images, SVG…). Accessibles à `/articles/{id}/assets/`.

---

### Auteurs (`/content/authors/{discord-id}.json`)

```json
{
  "id": "123456789012345678",
  "username": "DISCORD",
  "avatar": "DISCORD",
  "avatar_decoration": "DISCORD",
  "post": "Product Manager",
  "bio": "…",
  "banner_color": "#5793f2",
  "links": [
    { "name": "Twitter", "icon": "<svg>…</svg>", "url": "https://…" }
  ]
}
```

La valeur `"DISCORD"` dans `username`, `avatar`, ou `avatar_decoration` déclenche un fetch automatique vers `https://api.moddy.app/users/{id}` au **build time**.

**API Moddy** : `GET https://api.moddy.app/users/{user_id}`
- Retourne `avatar_url`, `global_name`, `avatar_decoration_data.asset_url`, etc.
- Cache 5 minutes côté API.

---

### Labels (`/content/labels/{id}.json`)

```json
{
  "id": "change-logs",
  "name": { "fr": "Changelogs", "en": "Changelogs" },
  "color": "#4caf50"
}
```

---

## URLs

| Type | URL | Redirect depuis |
|------|-----|-----------------|
| Article | `/articles/{article-id}/` | `/{article-id}/` |
| Collection | `/collections/{label-id}/` | `/{label-id}/` |
| Auteur | `/authors/{discord-id}/` | `/{discord-id}/` |

Les redirects courts sont générés statiquement via des templates Eleventy pagination (`redirect-articles.njk`, `redirect-labels.njk`, `redirect-authors.njk`).

---

## Internationalisation (i18n)

- Langues supportées : **fr** (défaut), **en**
- Détection automatique via `navigator.language` + `localStorage` (`moddy-lang`)
- Appliqué immédiatement au `<html data-lang="fr|en">` via `src/inline/apply-lang.ts` (inliné dans le HTML)
- Switcher dans la top app bar (boutons FR / EN)

### Affichage du contenu multilingue

Tout contenu conditionnel utilise l'attribut `data-lang-content` :
```html
<span data-lang-content="fr">Bonjour</span>
<span data-lang-content="en">Hello</span>
```

CSS dans `/css/article.css` :
```css
[data-lang-content] { display: none; }
:root[data-lang="fr"] [data-lang-content="fr"] { display: revert; }
:root[data-lang="en"] [data-lang-content="en"] { display: revert; }
```

---

## Build

```bash
cd site
npm install --legacy-peer-deps

# Développement (watch)
npm run serve:dev

# Production
npm run build:prod
```

**Pipeline Wireit :**
1. `build:copy-docs` — Copie `/docs/*.md` → `site/about/`
2. `build:dev:ts` — TypeScript → `/lib` (ou `/build` en prod)
3. `build:dev:eleventy` — Eleventy lit `site/site/` + `../content/` → `/_dev`

---

## Data files Eleventy

Situés dans `site/site/_data/` :
- `articles.js` — Lit `/content/articles/`, parse les markdown, retourne le tableau trié par date
- `authors.js` — Lit `/content/authors/`, fetch Discord API si `"DISCORD"` présent
- `labels.js` — Lit `/content/labels/`
- `i18n.js` — Traductions UI (fr/en)

---

## Conventions

- Les IDs d'articles et labels sont des slugs kebab-case (ex: `v1-changelog`, `change-logs`)
- Les IDs d'auteurs sont les IDs Discord (entiers 64-bit en string)
- Les bannières peuvent être `null`, une URL, ou un chemin relatif aux assets
- Ne jamais modifier les fichiers dans `_dev/` ou `_prod/` (générés au build)
- Ne pas modifier les fichiers copiés dans `site/site/about/` (générés depuis `/docs/`)
