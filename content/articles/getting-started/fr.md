# Débuter avec Moddy

Moddy est un bot Discord public conçu pour simplifier la gestion de votre communauté. Ce guide vous accompagne de l'invitation jusqu'à la configuration complète.

## Prérequis

- Un serveur Discord dont vous êtes **propriétaire ou administrateur**
- Les permissions `Gérer le serveur` sur votre compte Discord

## 1. Inviter Moddy

Cliquez sur le lien d'invitation ci-dessous pour ajouter Moddy à votre serveur :

```
https://discord.com/oauth2/authorize?client_id=MODDY_ID&permissions=8&scope=bot+applications.commands
```

> **Astuce :** Moddy demande l'autorisation `Administrateur` pour fonctionner correctement. Vous pouvez restreindre ses permissions par la suite depuis les paramètres du serveur.

## 2. Lancer l'assistant de configuration

Une fois Moddy présent sur votre serveur, tapez :

```
/setup
```

L'assistant interactif vous guidera pour configurer :

| Fonctionnalité | Description |
|---|---|
| Canal de logs | Où envoyer les événements d'audit |
| Système de bienvenue | Message et canal d'accueil |
| Rôle automatique | Attribué aux nouveaux membres |
| Langue du bot | Français ou Anglais |

## 3. Vérifier la configuration

Après le setup, utilisez `/config` pour vérifier que tout est correctement paramétré.

```
/config
```

La réponse affiche un récapitulatif de toute la configuration active.

## 4. Tester la modération

Essayez une commande de test pour vous assurer que tout fonctionne :

```
/warn @utilisateur Ceci est un test
```

---

## En cas de problème

Si Moddy ne répond pas :

1. Vérifiez qu'il a les permissions **Envoyer des messages** dans le canal
2. Vérifiez qu'il n'est pas `timeout` ou `banni`
3. Rejoignez notre serveur Discord et ouvrez un ticket de support

*Bienvenue dans la communauté Moddy !*
