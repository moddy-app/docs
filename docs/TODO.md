# TODO — Moddy Docs

Tâches restantes, classées par priorité. Une tâche terminée va dans la section **Fait**.

---

## 🔴 Critique (bloque la production)

- [ ] **Vérifier le build Vercel** après le fix `esbuild-plugin-minify-html-literals` — attendre le prochain déploiement pour confirmer que `npm install` réussit
- [ ] **Vérifier les permaliens Eleventy** : s'assurer que `article.njk`, `label.njk`, `author.njk`, `legalPage.njk` génèrent bien les URLs sans conflit ni doublon
- [ ] **Vérifier les chemins dans `_data/*.js`** : le `path.join(__dirname, '../../../content/')` doit pointer correctement depuis `site/site/_data/`
- [ ] **Vérifier `site/site/legal/`** : aucun ancien fichier `.md` (ex : `tos.md`, `cookies.md`) ne doit persister et créer un conflit avec la pagination

---

## 🟠 Important (fonctionnalités manquantes)

### Mode neutre dans `theme-changer.ts`
- [ ] Ajouter un bouton « Neutre » dans `site/src/components/theme-changer.ts`
- [ ] Appliquer la seed `#607D8B` (Blue Grey) quand le mode neutre est activé
- [ ] Stocker dans `localStorage` : `{ mode: 'neutral', seed: '#607D8B' }`

### Auteur réel avec Discord ID
- [ ] Créer `content/authors/{discord-id}/meta.json` avec un vrai ID et `avatar: "DISCORD"` pour tester le flux API build-time
- [ ] Gérer les erreurs réseau dans `site/site/_data/authors.js` (API indisponible → fallback `null`)

### Contenu légal
- [ ] Rédiger le contenu complet de `content/legal/tos/fr.md` et `en.md`
- [ ] Vérifier / compléter `content/legal/privacy/` et `content/legal/license/`

---

## 🟡 UX / Design

- [ ] Tester le menu hamburger mobile (overlay, fermeture au clic extérieur, animation)
- [ ] Implémenter l'affichage du **banner** d'article si `banner !== null`
- [ ] Ajouter une **table des matières** générée depuis les headings Markdown
- [ ] Ajouter le **temps de lecture estimé** (mots ÷ 200)
- [ ] Boutons de partage sur les pages article (copier lien)
- [ ] Afficher le nombre d'articles par collection sur `/collections`
- [ ] Afficher `avatar_decoration` sur la page auteur (superposée sur l'avatar)
- [ ] Avatar par défaut (initiales) si `avatar === null`
- [ ] Navigation clavier dans les résultats de recherche (↑↓ + Entrée)
- [ ] État « Aucun résultat » stylisé dans `docs-search`

---

## 🟢 Technique

- [ ] Nettoyer `site/site/stories/` si le dossier contient encore des stories MWC non pertinentes
- [ ] Ajouter des types TypeScript pour les données Eleventy dans `site/src/types/`
- [ ] Vérifier qu'il n'y a pas d'erreurs `tsc --noEmit`
- [ ] Scores Lighthouse (Performance, Accessibility, SEO) sur une page article
- [ ] Balises `<meta name="description">` sur chaque page (utiliser l'abstract)
- [ ] `<meta name="robots" content="noindex">` pour les articles `visibility: 3`
- [ ] Générer un `sitemap.xml`
- [ ] Balises Open Graph (`og:title`, `og:description`, `og:image`)
- [ ] Vérifier les redirections `/{id}` en production Vercel

---

## 🔵 Backlog

- [ ] Articles épinglés (`pinned: true` dans `meta.json`)
- [ ] Articles liés (`related: ["id1", "id2"]`)
- [ ] Flux RSS / `feed.xml`
- [ ] Pagination sur `/articles` si > 20 articles
- [ ] Lien « Modifier cette page sur GitHub »
- [ ] Versioning articles (version Moddy concernée)
- [ ] Analytics (Plausible ou Umami)

---

## ✅ Fait

- [x] Structure `/content/articles/`, `/content/authors/`, `/content/labels/`, `/content/legal/`
- [x] Templates Eleventy pagination (articles, auteurs, labels, légal)
- [x] Layouts Nunjucks (`article.html`, `author.html`, `label.html`, `legal.html`)
- [x] Suppression de la sidebar (nav-drawer)
- [x] Design encadré (frame accent + surface arrondie)
- [x] i18n fr/en sans flash (script inline `<head>` + CSS `[data-lang]`)
- [x] Composant `language-switcher.ts`
- [x] Composant `docs-search.ts` avec index statique `/search-index.json`
- [x] Données globales Eleventy (`articles.js`, `authors.js`, `labels.js`, `legalPages.js`, `translations.js`)
- [x] Récupération API Discord au build (`authors.js`)
- [x] 6 labels (documentation, changelog, legal, moderation, premium, tickets)
- [x] 7 articles (quick-start + 6 de test)
- [x] 3 pages légales (privacy, tos, license)
- [x] `vercel.json` avec redirections `/{id}` et headers cache
- [x] `CLAUDE.md`, `docs/ARCHITECTURE.md`, `docs/CONTENT-GUIDE.md`
- [x] Suppression des anciens fichiers Material Catalog (`site/site/about/`)
- [x] Suppression de `site/site/legal/privacy.md` (conflit de permalien)
- [x] Fix erreur npm ERESOLVE : suppression de `esbuild-plugin-minify-html-literals` (plugin déjà commenté dans `esbuild.config.mjs`, incompatible avec esbuild 0.25)
