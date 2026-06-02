# Configurer la modération automatique

La modération automatique de Moddy vous permet de protéger votre serveur contre le spam, les messages inappropriés et bien plus encore.

## Prérequis

- Moddy doit être invité sur votre serveur
- Vous devez avoir la permission **Gérer le serveur**
- Moddy doit avoir les permissions **Modérer les membres**, **Gérer les messages** et **Expulser des membres**

## Activer la modération automatique

Pour activer la modération automatique, utilisez la commande :

```
/automod enable
```

Pour la désactiver :

```
/automod disable
```

## Configuration des règles

### Anti-spam

L'anti-spam bloque automatiquement les utilisateurs qui envoient trop de messages en peu de temps.

```
/automod spam sensitivity:moyen action:mute duree:5m
```

Niveaux de sensibilité disponibles : `faible`, `moyen`, `eleve`, `extreme`

### Filtre de mots

Ajoutez des mots ou expressions à bloquer :

```
/automod words add mot:"mauvais-mot" action:delete
```

Les actions disponibles sont :

| Action | Description |
|--------|-------------|
| `delete` | Supprime le message |
| `warn` | Avertit l'utilisateur |
| `mute` | Mute l'utilisateur |
| `kick` | Expulse l'utilisateur |
| `ban` | Bannit l'utilisateur |

### Filtre d'invitations Discord

Bloquez automatiquement les invitations Discord provenant d'autres serveurs :

```
/automod invites enable action:delete
```

Vous pouvez ajouter des exceptions pour vos serveurs partenaires :

```
/automod invites whitelist serveur-id:123456789
```

## Logs de modération

Configurez un salon pour recevoir les logs de modération automatique :

```
/logs setup type:automod salon:#logs-mod
```

## Mode test

Avant d'activer les sanctions, testez votre configuration en mode observation :

```
/automod mode:observation
```

En mode observation, Moddy journalise les infractions sans appliquer de sanctions.

## Fonctionnalités Premium

> Ces fonctionnalités nécessitent un abonnement Moddy Premium.

- **IA Anti-toxicité** : détecte les messages toxiques grâce à l'intelligence artificielle
- **Détection de liens malveillants** : bloque les liens de phishing et malware
- **Système de points** : attribution automatique de points de sanction
- **Historique étendu** : accès à 90 jours d'historique de modération

## Dépannage

**Moddy ne sanctionne pas malgré la configuration ?**

1. Vérifiez que Moddy a les permissions nécessaires
2. Vérifiez que l'automod est activé avec `/automod status`
3. Assurez-vous que le rôle de Moddy est au-dessus des rôles des membres à sanctionner

**Les administrateurs sont sanctionnés ?**

Ajoutez les rôles à exclure avec :

```
/automod exempt role:@Admin
```
