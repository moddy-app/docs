# Référence des commandes

Cette page récapitule les principales commandes visibles de Moddy. Leur disponibilité dépend du contexte, de l’installation de l’application et de vos permissions Discord.

## Informations et utilitaires

| Commande | Usage |
| --- | --- |
| `/ping` | Vérifie la disponibilité et la latence de Moddy. |
| `/user` | Consulte les informations publiques d’un compte ou bot. |
| `/avatar`, `/banner` | Affichent les médias de profil disponibles. |
| `/invite` | Consulte les informations d’une invitation. |
| `/emoji` | Consulte et gère les émojis selon vos permissions. |
| `/roll` | Effectue un tirage aléatoire. |
| `/translate` | Traduit du texte. |

## Outils personnels

| Commande | Usage |
| --- | --- |
| `/preferences` | Définit notamment votre préférence incognito. |
| `/reminder` | Crée ou gère vos rappels. |
| `/saved-messages` | Consulte vos messages enregistrés. |
| `/subscription` | Consulte votre statut d’abonnement. |
| `/webhook` | Inspecte et gère les webhooks accessibles. |

## Rappels et bibliothèque

| Commande | Paramètres principaux | Usage |
| --- | --- | --- |
| `/reminder-add` | `message`, `time`, `incognito` | Crée un rappel. Les formats de temps acceptés incluent les durées et certaines dates naturelles. |
| `/reminders` | `incognito` | Ouvre les rappels créés afin de les consulter ou les gérer. |
| `/library` | `incognito` | Ouvre les messages sauvegardés dans votre bibliothèque. |

## Texte, audio et modération

| Commande ou action | Usage |
| --- | --- |
| `/fix`, `/rephrase`, `/summarize` | Corrigent, réécrivent ou résument un texte. |
| **Transcribe** | Transcrit un message vocal compatible. |
| `/cases`, `/mycases` | Consultent les cas du serveur ou vos propres cas. |
| `/clear-saved-roles`, `/view-saved-roles` | Administrent les rôles sauvegardés. |

## Modération de serveur

| Commande | Permission par défaut | Description |
| --- | --- | --- |
| `/ban` | Bannir des membres | Bannit une ou plusieurs cibles avec confirmation. |
| `/kick` | Expulser des membres | Expulse une ou plusieurs cibles avec confirmation. |
| `/mute` | Modérer des membres | Applique un timeout. |
| `/warn` | Modérer des membres | Enregistre un avertissement. |
| `/cases` | Gérer les messages | Ouvre les cas de modération du serveur ; un identifiant de cas peut être fourni directement. |
| `/mycases` | Aucune permission de modération | Permet de consulter ses propres cas, y compris dans un contexte privé compatible. |

## Administration de serveur

| Commande | Usage |
| --- | --- |
| `/config` | Ouvre la configuration des modules du serveur. |
| `/altguard verify`, `/altguard unverify` | Intervient manuellement sur une vérification AltGuard. |

Les commandes de personnel et de développement sont volontairement absentes de cette référence publique : elles sont limitées aux équipes habilitées.

Pour les paramètres détaillés et les contraintes de chaque automatisation, consultez [Modules de serveur](/articles/server-modules/). La disponibilité finale d’une commande dépend du contexte Discord, de l’installation de Moddy et des permissions effectives de l’utilisateur et du bot.
