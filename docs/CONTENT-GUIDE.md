# Guide d'ajout de contenu

## Ajouter un article

1. Créer le dossier `content/articles/{id}/`
2. Créer `meta.json` :

```json
{
  "id": "mon-article",
  "title": {
    "fr": "Mon Article",
    "en": "My Article"
  },
  "authors": [],
  "created_at": "2026-01-01",
  "abstract": {
    "fr": "Résumé en français.",
    "en": "English summary."
  },
  "banner": null,
  "visibility": 1,
  "labels": ["documentation"]
}
```

3. Créer `fr.md` (contenu Markdown français)
4. Créer `en.md` (contenu Markdown anglais)
5. (Optionnel) Créer `assets/` pour les images et fichiers
6. Ajouter la redirection dans `vercel.json` :

```json
{ "source": "/mon-article", "destination": "/articles/mon-article", "permanent": true }
```

### Bannière

- `null` → couleur du premier label
- `"assets/banner.png"` → image depuis le dossier assets de l'article
- URL absolue → image externe

### Visibilité

- `1` → article normal, indexé partout
- `2` → accessible via recherche et pages label/auteur uniquement
- `3` → lien direct uniquement (meta noindex, exclu de l'index)

## Ajouter un auteur

1. Créer `content/authors/{discord-id}/meta.json` :

```json
{
  "id": "123456789012345678",
  "discord_id": "123456789012345678",
  "username": "johndoe",
  "avatar": "DISCORD",
  "avatar_decoration": "DISCORD",
  "post": {
    "fr": "Product Manager",
    "en": "Product Manager"
  },
  "bio": {
    "fr": "Bonjour ! Je suis...",
    "en": "Hello! I am..."
  },
  "banner_color": "#FF5733",
  "links": [
    {
      "name": "Twitter",
      "url": "https://twitter.com/johndoe",
      "icon": "<svg>...</svg>"
    }
  ]
}
```

### Champs DISCORD

Si `avatar`, `banner_url`, ou `avatar_decoration` vaut `"DISCORD"`, la valeur sera auto-récupérée depuis `https://api.moddy.app/users/{discord_id}` au moment du build Eleventy.

Vous pouvez mixer : par exemple mettre `avatar = "DISCORD"` pour utiliser la vraie PP Discord, et renseigner `bio` manuellement.

## Ajouter un label

1. Créer `content/labels/{id}/meta.json` :

```json
{
  "id": "mon-label",
  "name": {
    "fr": "Mon Label",
    "en": "My Label"
  },
  "color": "#FF6B6B"
}
```

2. Ajouter la redirection dans `vercel.json` :

```json
{ "source": "/mon-label", "destination": "/collections/mon-label", "permanent": true }
```

## Markdown

Le contenu Markdown supporte :

- Titres (`# H1`, `## H2`, etc.)
- Code avec coloration syntaxique (```lang)
- Tableaux
- Blockquotes
- Liens et images
- Composants Material Web dans le contenu (`<md-button>`, etc.)

### Blockquotes spéciaux

Ajouter une classe pour des variantes colorées :

```markdown
> Blockquote normal

> Important
{.important}

> Warning
{.warning}
```
