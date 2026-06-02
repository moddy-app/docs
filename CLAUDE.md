# Moddy Docs — CLAUDE.md

Documentation de référence pour les sessions Claude Code sur ce dépôt.

## Stack technique

- **Eleventy (11ty) v2** — SSG
- **Nunjucks** — templates HTML
- **Lit + TypeScript** — web components
- **@material/web** — composants Material Design 3
- **esbuild** — bundler TypeScript
- **wireit** — orchestration du build
- **Vercel** — hébergement (vercel.json à la racine)

## Structure du dépôt

```
/
├── content/           ← Contenu (articles, auteurs, labels, légal)
│   ├── articles/      ← {id}/meta.json · fr.md · en.md · assets/
│   ├── authors/       ← {discord-id}/meta.json
│   ├── labels/        ← {id}/meta.json
│   └── legal/         ← {id}/meta.json · fr.md · en.md
├── docs/              ← Documentation technique du projet
├── guide-syntaxe/     ← Guide syntaxe Moddy (référence)
├── site/              ← Projet Eleventy
│   ├── eleventy.config.cjs
│   ├── esbuild.config.mjs
│   ├── package.json
│   ├── src/
│   │   ├── components/          ← Composants Lit custom
│   │   ├── hydration-entrypoints/ ← Entrypoints pour lit-island
│   │   ├── pages/               ← Scripts JS par page
│   │   ├── inline/              ← Scripts inlinés dans <head>
│   │   └── utils/               ← Utilitaires partagés
│   └── site/          ← Dossier d'entrée Eleventy
│       ├── _includes/   ← Layouts Nunjucks
│       ├── _data/       ← Données globales Eleventy
│       ├── css/         ← Feuilles de style
│       ├── images/      ← Assets statiques
│       ├── articles/    ← Templates de pagination articles
│       ├── collections/ ← Templates de pagination labels
│       ├── authors/     ← Templates de pagination auteurs
│       └── legal/       ← Templates pages légales
└── vercel.json        ← Config Vercel (hébergement + redirections)
```

## URLs

| Type | URL |
|------|-----|
| Article | `/articles/{article-id}` |
| Label/Collection | `/collections/{label-id}` |
| Auteur | `/authors/{author-id}` |
| Page légale | `/legal/{id}` |
| Raccourci | `/{id}` → redirige vers la bonne URL (vercel.json) |

## Format du contenu

### Articles (`content/articles/{id}/`)

- `meta.json` — métadonnées (titre, auteurs, date, résumé, bannière, visibilité, labels)
- `fr.md` — contenu Markdown français
- `en.md` — contenu Markdown anglais
- `assets/` — assets spécifiques à l'article

**Niveaux de visibilité :**
1. Indexation normale (apparaît partout)
2. Restreint (barre de recherche + pages label/auteur uniquement)
3. Lien direct uniquement (exclu de l'index, noindex meta)

**Format `meta.json` :**
```json
{
  "id": "quick-start",
  "title": { "fr": "...", "en": "..." },
  "authors": ["discord_id_1"],
  "created_at": "2025-12-29",
  "abstract": { "fr": "...", "en": "..." },
  "banner": null,
  "visibility": 1,
  "labels": ["documentation"]
}
```

### Auteurs (`content/authors/{discord-id}/`)

- `meta.json` — profil auteur

Lorsque `avatar`, `banner_url`, ou `avatar_decoration` vaut `"DISCORD"`, la valeur est auto-récupérée depuis `api.moddy.app/users/{discord_id}` au moment du build.

**Format `meta.json` :**
```json
{
  "id": "123456789012345678",
  "discord_id": "123456789012345678",
  "username": "johndoe",
  "avatar": "DISCORD",
  "post": { "fr": "Product Manager", "en": "Product Manager" },
  "bio": { "fr": "...", "en": "..." },
  "banner_color": "#FF5733",
  "links": [
    { "name": "Twitter", "url": "https://twitter.com/johndoe", "icon": "<svg>...</svg>" }
  ]
}
```

### Labels (`content/labels/{id}/`)

- `meta.json` — nom bilingue et couleur hex

**Format `meta.json` :**
```json
{
  "id": "documentation",
  "name": { "fr": "Documentation", "en": "Documentation" },
  "color": "#4285F4"
}
```

### Légal (`content/legal/{id}/`)

- `meta.json` — métadonnées
- `fr.md` — contenu français
- `en.md` — contenu anglais

## i18n

Langues supportées : `fr` (français) et `en` (anglais). Défaut : `fr`.

La langue est détectée depuis le navigateur (`navigator.language`) et stockée dans `localStorage` sous la clé `moddy-docs-lang`. L'utilisateur peut changer via le sélecteur de langue dans la barre du haut.

Le script `site/src/inline/apply-saved-lang.ts` est inliné dans `<head>` et applique la langue **avant** le rendu du corps de page (pas de flash).

Côté CSS : `[data-lang="fr"] .lang-en { display: none }` et vice versa.

## Thème

Le site utilise le thème dynamique Material Design 3. La couleur seed génère une palette M3 complète via `@material/material-color-utilities`.

- **Modes** : Light / Dark / Auto
- **Mode neutre** : palette neutral prédéfinie (seed `#607D8B`), non personnalisée
- **Thèmes** : Moddy par défaut (`#ECAA2E`) + personnalisé + neutre
- Stocké dans `localStorage` sous la clé `material-theme`

## Build

```bash
cd site
npm install
npm run build:prod   # Build de production
npm run dev          # Serveur de développement
```

## Ajouter du contenu

Voir `docs/CONTENT-GUIDE.md`.

## Redirections Vercel

Les URLs raccourcies `/{id}` sont configurées dans `vercel.json` à la racine. Ajouter une redirection pour chaque nouvel article, auteur ou label.
