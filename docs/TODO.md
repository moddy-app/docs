# TODO — Moddy Docs

Liste des tâches restantes classées par priorité. Cocher une tâche = la supprimer ou la déplacer dans `docs/CHANGELOG-tasks.md`.

---

## 🔴 Critique (bloque la production)

- [ ] **Tester le build complet** (`cd site && npm run build:prod`) dans un environnement propre et vérifier qu'il n'y a pas d'erreurs Eleventy / esbuild
- [ ] **Vérifier les permaliens** : s'assurer que tous les templates de pagination (`article.njk`, `label.njk`, `author.njk`, `legalPage.njk`) génèrent bien les bonnes URLs sans conflit
- [ ] **Vérifier que `site/site/legal/` ne contient plus d'anciens fichiers `.md`** (ex: `tos.md`, `cookies.md`) qui créeraient des conflits de permaliens avec le nouveau système de pagination
- [ ] **Vérifier les chemins relatifs dans `_data/articles.js`** : le `path.join(__dirname, '../../../content/')` doit pointer au bon endroit selon l'emplacement réel du fichier

---

## 🟠 Important (fonctionnalités incomplètes)

### Mode neutre dans `theme-changer.ts`
- [ ] Ajouter un bouton « Neutre » dans le composant `site/src/components/theme-changer.ts`
- [ ] Appliquer la seed `#607D8B` (Blue Grey M3) quand le mode neutre est activé
- [ ] Stocker la préférence : `localStorage.setItem('material-theme', JSON.stringify({ mode: 'neutral', seed: '#607D8B' }))`
- [ ] Le CLAUDE.md et le CSS documentent déjà ce mode — il ne manque que l'implémentation UI

### Auteur réel avec ID Discord
- [ ] Créer au moins un `content/authors/{discord-id}/meta.json` avec un vrai ID Discord et les champs `avatar: "DISCORD"` pour valider le flux de récupération API au build
- [ ] Vérifier que `site/site/_data/authors.js` gère bien les erreurs réseau (API `api.moddy.app` indisponible → fallback gracieux)

### Contenu légal complet
- [ ] Rédiger le contenu complet des CGU (`content/legal/tos/fr.md` et `en.md`) — actuellement présent mais résumé
- [ ] Vérifier / compléter `content/legal/privacy/fr.md` et `en.md`
- [ ] Vérifier `content/legal/license/fr.md` et `en.md`

### Menu mobile
- [ ] Tester le comportement du menu hamburger sur mobile (overlay, fermeture au clic extérieur)
- [ ] Vérifier que `applyMobileMenu()` dans `site/src/pages/global.ts` fonctionne correctement
- [ ] Ajouter une animation d'ouverture/fermeture fluide au menu mobile

---

## 🟡 Améliorations UX / Design

### Page d'accueil
- [ ] Ajouter une vraie illustration ou animation dans la section hero
- [ ] Vérifier que la grille « Derniers articles » est responsive sur mobile
- [ ] Ajouter un lien « Voir tous les articles » sous la grille

### Pages article
- [ ] Implémenter l'affichage du **banner** (si `banner !== null`) en haut de l'article
- [ ] Tester l'affichage des **chips de labels** avec la couleur hex dynamique
- [ ] Ajouter une **table des matières** (TOC) générée depuis les headings Markdown
- [ ] Ajouter des boutons de partage (copier le lien, Twitter/X)
- [ ] Ajouter le **temps de lecture estimé** (mots / 200)

### Pages collection (labels)
- [ ] Afficher le nombre d'articles dans chaque collection sur la page `/collections`
- [ ] Ajouter un filtre de tri sur la page collection (date, alphabétique)

### Pages auteur
- [ ] Afficher l'`avatar_decoration` si présente (superposée sur l'avatar)
- [ ] Gérer le cas `avatar === null` avec un avatar par défaut (initiales ou icône)

### Recherche
- [ ] Tester la recherche dans les deux langues
- [ ] Améliorer le score de pertinence (titre > abstract > contenu)
- [ ] Ajouter la navigation clavier dans les résultats de recherche (↑↓ + Entrée)
- [ ] Ajouter un état « Aucun résultat » stylisé

---

## 🟢 Technique / Qualité

### Nettoyage
- [ ] Vérifier si le dossier `site/site/stories/` existe encore et le supprimer s'il contient des stories MWC non pertinentes
- [ ] Vérifier / supprimer `site/site/about/` si des vieux fichiers Material Catalog persistent
- [ ] Nettoyer les imports inutilisés dans les composants Lit après la refonte

### TypeScript / Build
- [ ] Ajouter les types pour les données Eleventy (articles, auteurs, labels) dans `site/src/types/`
- [ ] S'assurer qu'il n'y a pas d'erreurs TypeScript (`tsc --noEmit`) après toutes les modifications
- [ ] Vérifier que `wireit` surveille bien `../content/**` dans les globs de watch (ajouté dans `package.json`)

### Performance
- [ ] Vérifier les scores Lighthouse (Performance, Accessibility, SEO) sur une page article
- [ ] Ajouter `loading="lazy"` sur les images des cards articles
- [ ] Vérifier que le CSS critique est bien inliné / chargé sans render-blocking

### SEO
- [ ] Ajouter les balises `<meta name="description">` sur chaque page (utiliser l'abstract de l'article)
- [ ] Ajouter `<meta name="robots" content="noindex">` pour les articles `visibility: 3`
- [ ] Générer un `sitemap.xml` (plugin Eleventy ou template custom)
- [ ] Ajouter les balises Open Graph (`og:title`, `og:description`, `og:image`)

### Vercel
- [ ] Tester le déploiement Vercel avec la config `vercel.json` actuelle
- [ ] Vérifier que toutes les redirections `/{id}` fonctionnent en production
- [ ] Ajouter les headers de cache (`Cache-Control`) pour les assets statiques dans `vercel.json`

---

## 🔵 Fonctionnalités futures (backlog)

- [ ] **Système de versioning** : afficher la version de Moddy à laquelle s'applique chaque article
- [ ] **Articles épinglés** : champ `pinned: true` dans `meta.json`, affichés en priorité sur l'accueil
- [ ] **Articles liés** : champ `related: ["id1", "id2"]` dans `meta.json`, affichés en bas de l'article
- [ ] **Newsletter / flux RSS** : générer un `feed.xml` pour les nouveaux articles
- [ ] **Pagination** sur la page `/articles` si le nombre d'articles dépasse 20
- [ ] **Mode impression** (`@media print`) pour les pages légales et guides
- [ ] **Intégration GitHub** : lien « Modifier cette page » pointant vers le fichier Markdown sur GitHub
- [ ] **Commentaires** : intégration optionnelle (ex: giscus basé sur GitHub Discussions)
- [ ] **Analytics** : intégrer un outil respectueux de la vie privée (ex: Plausible, Umami)

---

## ✅ Déjà fait (référence)

- [x] Structure de contenu `/content/articles/`, `/content/authors/`, `/content/labels/`, `/content/legal/`
- [x] Templates Eleventy pagination pour articles, auteurs, labels, légal
- [x] Layouts Nunjucks (`article.html`, `author.html`, `label.html`, `legal.html`)
- [x] Suppression de la sidebar (nav-drawer)
- [x] Design encadré (frame avec couleur accent, surface arrondie)
- [x] i18n fr/en sans flash (script inline + CSS `[data-lang]`)
- [x] Composant `language-switcher.ts`
- [x] Composant `docs-search.ts` avec index statique
- [x] Données globales Eleventy (`articles.js`, `authors.js`, `labels.js`, `legalPages.js`, `translations.js`)
- [x] Récupération API Discord au build (`authors.js`)
- [x] 6 labels créés (documentation, changelog, legal, moderation, premium, tickets)
- [x] 7 articles de contenu (quick-start + 6 articles de test)
- [x] 3 pages légales (privacy, tos, license)
- [x] `vercel.json` avec redirections `/{id}`
- [x] `CLAUDE.md` — documentation technique pour les sessions Claude Code
- [x] `docs/ARCHITECTURE.md` — architecture du projet
- [x] `docs/CONTENT-GUIDE.md` — guide pour ajouter du contenu
- [x] Migration du contenu existant (quick-start, légal)
- [x] Suppression des anciens fichiers Material Catalog (`site/site/about/`)
- [x] Suppression de `site/site/legal/privacy.md` (conflit de permalien)
