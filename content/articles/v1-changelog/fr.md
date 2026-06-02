# v1.0 — Changelog Moddy

Bienvenue dans la première version publique de **Moddy** ! Cette release marque le début d'une aventure — un bot Discord pensé pour les gestionnaires de communauté qui veulent se concentrer sur l'essentiel.

---

## 🚀 Nouvelles fonctionnalités

### Modération

- **`/ban`** — Bannir un membre avec raison et durée optionnelles
- **`/kick`** — Exclure un membre du serveur
- **`/mute`** — Réduire au silence temporairement un membre (timeout)
- **`/warn`** — Émettre un avertissement enregistré
- **`/warnings`** — Consulter les avertissements d'un membre
- **`/clear`** — Supprimer des messages en masse (1–100)

### Bienvenue

- **Système de bienvenue** configurable avec message personnalisé, image de bannière et canal dédié
- Support des variables dynamiques : `{user}`, `{server}`, `{count}`
- Rôle automatique à l'arrivée d'un nouveau membre

### Logs

- **Logs d'audit** : connexions, départs, modifications de rôles, bans, kicks
- Canal de logs configurable par catégorie
- Horodatage et auteur de chaque action

### Configuration

- **`/setup`** — Assistant de configuration interactif
- **`/config`** — Voir et modifier la configuration actuelle
- Toutes les configurations sauvegardées par serveur

---

## 🐛 Corrections

- Stabilité générale améliorée lors des pics de trafic
- Correction d'un crash au démarrage sur certaines configurations Docker

---

## ⚠️ Notes

> Cette version est une **beta publique**. Des changements peuvent intervenir sans préavis. Rejoignez notre serveur Discord pour signaler des bugs ou proposer des fonctionnalités.

---

## 📦 Installation

```bash
# Inviter Moddy sur votre serveur
https://discord.com/oauth2/authorize?client_id=MODDY_ID&permissions=8&scope=bot+applications.commands
```

Puis lancez `/setup` pour configurer Moddy en quelques minutes.

---

*Merci d'utiliser Moddy — Built to let you focus on your community.* 🎉
