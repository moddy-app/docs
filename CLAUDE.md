# CLAUDE.md — Moddy Docs

## Présentation du projet

Site de documentation officielle de **Moddy**, un bot Discord public en Python développé par @juthing (PM + dev). Tagline : *"Built to let you focus on your community."*

URL de production : `docs.moddy.app`

## Stack technique

- **Astro 5** — SSG (Static Site Generation)
- **@material/web** — Composants UI Material Design 3 (chargés via CDN importmap)
- **marked** — Rendu Markdown côté serveur
- **Vanilla JS** — Interactivité (theme, langue, recherche)
- **TypeScript** — Typages partout

## Commandes

```bash
npm run dev      # Serveur de développement (http://localhost:4321)
npm run build    # Build de production dans dist/
npm run preview  # Prévisualiser le build
```

## Architecture rapide

```
src/layouts/Base.astro          ← Layout principal (tokens MD3, nav, footer)
src/components/Nav.astro        ← Navbar (search, lang, theme)
src/pages/index.astro           ← Accueil
src/pages/articles/[id].astro   ← Page article
src/pages/authors/[id].astro    ← Page auteur
src/pages/collections/[id].astro ← Page collection
content/articles/{id}/          ← Dossier article (meta.json + fr.md + en.md)
content/authors/{id}.json       ← Profil auteur
content/labels/{id}.json        ← Label/collection
docs/                           ← Documentation complète
```

**Docs complètes :** voir `docs/architecture.md` et `docs/content-guide.md`

## Règles de développement

### Material Web
- Utiliser UNIQUEMENT les composants `@material/web` pour tous les éléments interactifs
- Ne jamais utiliser de bibliothèques UI tierces (Bootstrap, Tailwind, etc.)
- Les tokens CSS sont les seuls moyens de customiser les composants : `--md-sys-color-*`, `--md-sys-shape-*`, etc.
- Import via CDN dans `Base.astro` — ajouter les nouveaux composants à la liste d'imports si besoin

### Design
- Référence visuelle : dossier `/examples/` (maquettes HTML du site cible)
- Ne jamais modifier le dossier `/examples/`
- Reproduire fidèlement les espacements, typographies, effets des maquettes
- Couleurs dynamiques : chaque article/auteur/label a un `themeColor` qui génère une palette MD3

### i18n
- Les chaînes UI sont dans `src/i18n/translations.ts`
- Les articles ont `fr.md` + `en.md` — les deux sont rendus dans la page, JS switch selon langue
- Toujours ajouter les deux langues quand on ajoute une chaîne
- Language stocké dans `localStorage('moddy-lang')`, détecté via `navigator.language`

### Contenu
- Suivre strictement le format de `docs/content-guide.md`
- Les IDs sont en kebab-case minuscule
- Les dates sont ISO YYYY-MM-DD
- Niveaux de référencement : 1 = public, 2 = découvrable, 3 = lien direct uniquement

### API Discord
- Endpoint : `https://api.moddy.app/users/{user_id}`
- Utiliser `src/utils/discord.ts` pour les fetches
- Ne fetch que si au moins un champ auteur est `"DISCORD"`
- Les fetches se font au **build time** dans les pages `.astro`

### Git
- Branche de travail : `claude/lucid-mccarthy-w4dAo`
- Ne jamais committer `dist/`, `node_modules/`, `.astro/`
- Messages de commit clairs et en français ou anglais

## Todolist

Voir `docs/todo.md` pour l'état complet des tâches.
