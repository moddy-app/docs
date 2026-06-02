# v1.0 — Changelog Moddy

Bienvenue dans la version **1.0** de Moddy ! Cette mise à jour majeure apporte de nombreuses améliorations.

## ✨ Nouveautés

### Système de tickets refondu

Le système de tickets a été entièrement revu :

- **Panels de tickets** personnalisables avec boutons et émoticons
- **Catégories** multiples par panel
- **Transcripts** automatiques envoyés par e-mail
- **Attribution** des tickets à des membres du staff
- **Priorités** (Basse, Normale, Haute, Urgente)

```
/ticket panel create nom:"Support" description:"Ouvrez un ticket ici"
```

### Modération automatique v2

La modération automatique a été entièrement réécrite :

| Fonctionnalité | Disponibilité |
|---|---|
| Anti-spam | Tous |
| Anti-flood | Tous |
| Filtre de mots | Tous |
| Détection d'invitations | Tous |
| IA Anti-toxicité | Premium |
| Détection de liens malveillants | Premium |

### Nouveau système de logs

Les logs sont maintenant séparés par catégorie :

- Logs de modération
- Logs de membres (join/leave)
- Logs de messages (edit/delete)
- Logs de serveur (channels, rôles)

## 🔧 Améliorations

- **Performances** : temps de réponse réduit de 40%
- **Rappels** : support des récurrences (quotidien, hebdomadaire, mensuel)
- **Commandes** : auto-complétion améliorée
- **Dashboard** : refonte complète du panneau d'administration

## 🐛 Corrections

- Correction du bug où les sanctions n'étaient pas enregistrées en cas de déconnexion
- Correction de l'affichage des avatars animés dans les embeds
- Correction du calcul des permissions pour les rôles multiples
- Plus de 50 corrections mineures

## 🚨 Breaking Changes

> Ces changements nécessitent une action de votre part.

- La commande `/warn` est maintenant `/mod warn` — un alias `/warn` reste disponible jusqu'à la v1.1
- Les webhooks de logs doivent être reconfigurés avec `/logs setup`

## 📅 Prochainement

Voici ce que nous préparons pour la **v1.1** :

- Intégration Discord Forum
- Système de sondages avancés
- API publique

---

Merci d'utiliser Moddy ! Pour toute question, rejoignez notre [serveur de support](https://moddy.app/support/).
