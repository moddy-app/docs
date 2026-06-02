# Guide : Formatage Markdown → HTML

## 📦 Stack utilisée
- **Eleventy (11ty)** : Générateur de site statique
- **Markdown-it** : Parser markdown avec support HTML
- **Syntax Highlight** : Coloration du code
- **TOC Plugin** : Table des matières automatique (H2, H3, H4)

---

## ⚙️ Configuration Markdown

```javascript
const md = markdownIt({
  html: true,           // Les balises HTML sont autorisées dans le markdown
  breaks: false,        // 2 newlines = nouveau paragraphe
  linkify: true,        // URLs deviennent automatiquement des liens
});
```

---

## 🎯 Syntaxe Markdown Standard

### Titres
```markdown
# H1 - Titre principal
## H2 - Section (génère TOC)
### H3 - Sous-section (génère TOC)
#### H4 - Détail (génère TOC)
```

### Texte
```markdown
**Gras** ou __Gras__
*Italique* ou _Italique_
~~Barré~~
`Code inline`
```

### Listes
```markdown
- Item 1
- Item 2
  - Sous-item
  
1. Premier
2. Deuxième
3. Troisième
```

### Liens & Images
```markdown
[Texte du lien](https://example.com)
![Alt text](images/file.webp)
```

### Code
```markdown
\```javascript
const x = 42;
\```
```

### Citations
```markdown
> Citation importante
> Ligne 2
```

### Tableaux
```markdown
| Colonne 1 | Colonne 2 |
|-----------|-----------|
| Cellule 1 | Cellule 2 |
```

---

## 🎨 HTML Custom

Vous pouvez inclure du HTML directement (option `html: true`):

```html
<div class="custom">
  <p>Contenu HTML</p>
</div>
```

---

## 📝 Frontmatter (Métadonnées)

```yaml
---
name: Page Name
title: Page Title for SEO
dirname: directory-name
order: 1
---

# Contenu markdown ici
```

---

## ✨ Plugins Spécialisés

| Plugin | Fonction | Exemple |
|--------|----------|---------|
| **Shortcodes** | Code réutilisable | `{% inline-css %}...{% endinline-css %}` |
| **TOC** | Table des matières | Auto-générée pour H2, H3, H4 |
| **Copy Button** | Bouton copier code | Auto sur `<pre><code>` |
| **Syntax Highlight** | Coloration code | Auto pour blocs ` ``` ` |
| **Permalink** | Ancres sur titres | Auto sur tous les H# |

---

## 🔗 Transformations Automatiques

- ✅ URLs → Liens (linkify)
- ✅ `# Titre` → `<h1>Titre</h1>` + ancre
- ✅ Code blocks → Coloration syntaxe
- ✅ Tableaux markdown → Tables HTML5
- ✅ Emoji supportés ✨

---

## 📦 Pour votre site

Pour reproduire ailleurs, vous avez besoin:

```bash
npm install markdown-it markdown-it-anchor @11ty/eleventy
```

Code minimal:
```javascript
const markdownIt = require('markdown-it');
const md = markdownIt({ html: true, breaks: false, linkify: true });

const htmlOutput = md.render(markdownContent);
```

---

**Généré depuis le projet `moddy-app/docs`** ✨
