# Guide de contenu — Moddy Docs

## Créer un article

### 1. Créer le dossier

```
content/articles/{article-id}/
├── meta.json
├── fr.md
├── en.md
└── assets/         ← optionnel
    └── banner.png
```

### 2. `meta.json`

```json
{
  "id": "mon-article",
  "title": {
    "fr": "Titre en français",
    "en": "Title in English"
  },
  "summary": {
    "fr": "Résumé court (1-2 phrases).",
    "en": "Short summary (1-2 sentences)."
  },
  "authors": ["juthing"],
  "createdAt": "2026-06-02",
  "labels": ["changelog"],
  "banner": "assets/banner.png",
  "referencing": 1
}
```

**Champs :**

| Champ | Type | Description |
|---|---|---|
| `id` | `string` | Identifiant unique, utilisé dans l'URL |
| `title` | `{fr, en}` | Titre dans chaque langue |
| `summary` | `{fr, en}` | Résumé / chapô |
| `authors` | `string[]` | IDs des auteurs (dossier `content/authors/`) |
| `createdAt` | ISO date | Date de création |
| `labels` | `string[]` | IDs des labels (dossier `content/labels/`) |
| `banner` | `string\|null` | Chemin relatif vers l'image bannière ou `null` |
| `referencing` | `1\|2\|3` | Niveau de visibilité (voir Architecture) |

### 3. Contenu Markdown

`fr.md` et `en.md` sont du Markdown standard. Fonctionnalités supportées :

- Titres `# ## ###`
- Code inline et blocs de code avec highlight
- Tableaux
- Blockquotes
- Listes ordonnées et non-ordonnées
- Images `![alt](url)`
- Liens `[texte](url)`
- Gras, italique, barré

---

## Créer un auteur

```
content/authors/{author-id}.json
```

```json
{
  "id": "juthing",
  "discordId": "123456789012345678",
  "username": "juthing",
  "avatarUrl": "DISCORD",
  "avatarDecorationUrl": "DISCORD",
  "bannerColor": "DISCORD",
  "role": {
    "fr": "Product Manager & Développeur",
    "en": "Product Manager & Developer"
  },
  "bio": {
    "fr": "Bonjour ! Je développe Moddy.",
    "en": "Hi! I develop Moddy."
  },
  "links": [
    {
      "name": "Discord",
      "url": "https://discord.gg/moddy",
      "icon": "chat_bubble"
    }
  ]
}
```

**Champs DISCORD :** Si un champ vaut `"DISCORD"`, sa valeur est automatiquement récupérée depuis `api.moddy.app/users/{discordId}` au moment du build.

| Champ | Valeur `"DISCORD"` → |
|---|---|
| `avatarUrl` | `avatar_url` |
| `avatarDecorationUrl` | `avatar_decoration_data.asset_url` |
| `bannerColor` | `accent_color` converti en hex |

**Icônes :** Utiliser les noms Material Symbols (ex: `language`, `chat_bubble`, `link`).

---

## Créer un label

```
content/labels/{label-id}.json
```

```json
{
  "id": "mon-label",
  "name": "Mon Label",
  "color": "#FF6B6B"
}
```

---

## Bonnes pratiques

- **IDs** : minuscules, tirets, pas d'espaces (ex: `v1-changelog`, `getting-started`)
- **Dates** : format ISO `YYYY-MM-DD`
- **Bannières** : 16:9 recommandé, formats PNG/WebP/JPG/SVG acceptés
- **Résumés** : 1-2 phrases maximum, sans Markdown
- **Assets** : toujours dans `assets/` du dossier de l'article
