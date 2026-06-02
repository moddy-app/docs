# TODO — Moddy Docs

## ✅ Fait

- [x] Architecture Astro 5 complète
- [x] Layout Base avec Material Web (CDN importmap)
- [x] Tokens MD3 dynamiques (light/dark)
- [x] Navigation fixe avec recherche, sélecteur de langue, toggle thème
- [x] Composant ArticleCard
- [x] Composant AuthorChip
- [x] Composant LabelChip
- [x] Page d'accueil (hero + grille articles + collections)
- [x] Page article (header immersif, prose, sidebar, articles liés)
- [x] Page auteur (header avec avatar Discord, articles)
- [x] Page collection/label
- [x] Page 404
- [x] Redirections `/{id}` → bonne URL
- [x] Index de recherche JSON (`/search-index.json`)
- [x] i18n fr/en (auto-detect + switcher)
- [x] API Discord (fetch au build si champ = "DISCORD")
- [x] Contenu exemple : 2 articles, 1 auteur, 2 labels
- [x] Documentation `/docs/`
- [x] CLAUDE.md

## 🔄 En cours / Priorité haute

- [ ] **Refaire le design pour matcher les maquettes `/examples/`** (voir ci-dessous)
  - [ ] Typography : Google Sans Code pour le logo, espacements exacts
  - [ ] Grille home : layout exact avec card featured span-2
  - [ ] Article header : parallax sur la bannière, overlay gradient exact
  - [ ] Author page : avatar avec decoration frame comme dans la maquette
  - [ ] Collection page : icône colorée + fond dégradé

## 📋 À faire

### Design
- [ ] Analyser en détail les maquettes `/examples/` pour reproduire les spacing, card shadows, font sizes
- [ ] Implémenter les animations de transition (skeleton loaders, hover effects)
- [ ] Ajouter les `--md-ripple-*` custom colors per page theme
- [ ] Responsive mobile : bottom navigation bar (md-navigation-bar quand dispo)

### Fonctionnalités
- [ ] Moteur de recherche client-side complet (fuzzy search avec fuse.js ou pagefind)
- [ ] Pagination sur la liste des articles (`/articles` page)
- [ ] Support des bannières SVG animées
- [ ] Carousel d'images dans les articles (composant custom avec md-ripple)
- [ ] Spoiler/accordéon dans les articles
- [ ] Breadcrumbs sur les pages article/auteur/collection
- [ ] Partage article (Web Share API)
- [ ] Scroll progress indicator dans les articles
- [ ] Table des matières auto-générée depuis les headers de l'article

### Build & Deploy
- [ ] Assets statiques des articles copiés dans `dist/` (symlink ou plugin Astro)
- [ ] Sitemap étendu avec priorités par niveau de référencement
- [ ] Compresser les images avec sharp au build
- [ ] CSP headers

### Contenu
- [ ] Article : FAQ Moddy
- [ ] Article : Commandes de modération (référencement 1)
- [ ] Article : Configurer les logs (référencement 1)
- [ ] Article : Système de bienvenue (référencement 1)
