---
name: Architecture
title: Architecture du système de contenu
order: 10
---

# Architecture du système de contenu

## Vue d'ensemble

Le site Moddy Docs utilise un système de contenu structuré basé sur des fichiers JSON et Markdown dans `/content/`.

## Dossier `/content/`

```
content/
├── articles/           # Articles du blog / documentation
│   └── {article-id}/
│       ├── meta.json   # Métadonnées
│       ├── fr.md       # Contenu français
│       ├── en.md       # Contenu anglais
│       └── assets/     # Ressources statiques
├── authors/            # Profils auteurs
│   └── {discord-id}.json
└── labels/             # Labels/catégories
    └── {label-id}.json
```

## Flux de données au build

1. Les data files Eleventy (`_data/*.js`) lisent `/content/` au démarrage du build.
2. Les fichiers Markdown sont transformés en HTML via `markdown-it`.
3. Les auteurs avec `"DISCORD"` déclenchent un fetch vers `api.moddy.app`.
4. Eleventy génère les pages via pagination depuis ces données.

## Internationalisation

La langue active est stockée dans `localStorage` et appliquée comme attribut `data-lang` sur `<html>`. Le CSS affiche/masque le bon contenu en conséquence.

Voir `CLAUDE.md` pour les détails complets.
