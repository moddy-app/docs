---

name: Markdown Test
title: Test complet Markdown
dirname: markdown-test
order: 99
---------

# 🧪 Test complet de syntaxe Markdown

Ce fichier sert à vérifier que toutes les syntaxes supportées par la documentation Moddy s’affichent correctement.

---

## 📋 Table des matières

* [En-têtes](#en-têtes)
* [Texte](#texte)
* [Listes](#listes)
* [Liens](#liens)
* [Code](#code)
* [Tableaux](#tableaux)
* [Citations](#citations)
* [Images](#images)
* [HTML & composants](#html--composants)
* [Commentaires conditionnels](#commentaires-conditionnels)

---

## En-têtes

# H1 (titre principal)

## H2 (section)

### H3 (sous-section)

#### H4 (détails)

---

## Texte

Texte normal avec **gras**, *italique*, ***gras italique***, ~~barré~~ et `inline code`.

Combinaison : **gras et *italique imbriqué***.

---

## Listes

### Puces

* A
* B

  * B1
  * B2

    * B2a
* C

### Numérotée

1. Étape 1
2. Étape 2

   1. Sous-étape
   2. Sous-étape
3. Étape 3

### Checklist

* [x] Fait
* [ ] À faire
* [ ] En cours

---

## Liens

* [https://example.com](https://example.com)
* [Lien texte](https://example.com)
* [Lien externe](https://example.com)<!-- {.external} -->
* [Lien interne](#texte)

---

## Code

### Inline

Utiliser `const x = 10`.

### JavaScript

```js id="js_test"
const sum = (a, b) => a + b;
console.log(sum(2, 3));
```

### Python

```py id="py_test"
def add(a, b):
    return a + b

print(add(2, 3))
```

### Bash

```bash id="bash_test"
echo "Hello world"
ls -la
```

### JSON

```json id="json_test"
{
  "name": "Moddy",
  "active": true,
  "value": 123
}
```

---

## Tableaux

| Propriété | Type   | Description      |
| --------- | ------ | ---------------- |
| name      | string | Nom affiché      |
| order     | number | Ordre navigation |
| dirname   | string | Dossier exemple  |

---

## Citations

> Note: Ceci est une note.

> Warning: Ceci est un avertissement.

> Tip: Ceci est un conseil.

> Important: Ceci est une information importante.

---

## Images

![Image exemple](images/test/hero.webp)

---

## HTML & composants

<catalog-component-header>
<catalog-component-header-title slot="title">

# Test Markdown

Test de rendu complet de la documentation Moddy.

</catalog-component-header-title>

<img class="hero" alt="Test image" src="images/test/hero.webp">

</catalog-component-header>

---

<details>
<summary>Section cachée</summary>

* élément 1
* élément 2

</details>

---

## Shortcode

{% playgroundexample dirname=dirname %}

---

## Séparateurs

---

---

---

---

## Liens de référence

[Google][1]
[GitHub][2]

[1]: https://google.com
[2]: https://github.com

---

## Footnotes

Texte avec note[^1]

[^1]: Ceci est une note de bas de page

---

## Échappement

* pas italique *
# pas titre
` pas code `

---

## Emojis

🔥 🚀 ✔️ ❌ 🧠 ⚡

---

## Commentaires conditionnels

<!-- catalog-only-start -->

Visible uniquement sur le site de documentation Moddy.

<!-- catalog-only-end -->

<!-- no-catalog-start -->

Masqué dans la version site.

<!-- no-catalog-end -->

---

## Math (si supporté)

Inline: $a^2 + b^2 = c^2$

Block:
$$
E = mc^2
$$

---

## Fin du test

✔️ Test complet conforme au guide de syntaxe Moddy
