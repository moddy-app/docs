# Commandes du quotidien

Les commandes globales de Moddy peuvent être utilisées dans les serveurs, les messages privés avec le bot et, pour les commandes compatibles, les installations personnelles.

## Consulter Discord

| Commande | Ce qu’elle fait | Conseil |
| --- | --- | --- |
| `/user user:@membre` | Affiche une fiche de profil, les badges disponibles et des informations publiques. | Activez incognito si vous consultez un profil dans un salon public. |
| `/avatar user:@membre` | Affiche l’avatar et les formats disponibles. | Fonctionne aussi dans les conversations privées compatibles. |
| `/banner user:@membre` | Affiche la bannière lorsqu’elle est disponible. | Une absence de bannière n’est pas une erreur. |
| `/invite invite_code:…` | Analyse un code ou une URL d’invitation Discord. | Vérifiez le serveur affiché avant de rejoindre. |
| `/emoji emoji:…` | Affiche les informations d’un emoji Discord. | Ne copiez pas d’emoji ou de lien non fiable dans une configuration sensible. |

## Gérer ses informations et son temps

| Commande | Ce qu’elle fait |
| --- | --- |
| `/preferences` | Ouvre les réglages personnels, notamment le comportement incognito par défaut. |
| `/reminder-add message:… time:…` | Crée un rappel à partir d’une durée ou d’une date comprise par le bot, par exemple `1h30m` ou `tomorrow 3pm`. |
| `/reminders` | Ouvre la gestion de vos rappels existants. |
| `/library` | Ouvre votre bibliothèque de messages sauvegardés. |
| `/roll max:…` | Tire un nombre aléatoire, 6 par défaut si aucune valeur maximale n’est fournie. |
| `/subscription` | Affiche le statut d’abonnement Moddy associé à votre compte. |

## Messages et webhooks

`/webhook webhook:…` permet d’inspecter et de gérer un webhook à partir de son URL ou de son identifiant et token. N’envoyez jamais une URL de webhook dans un espace public : elle peut permettre de publier dans le salon associé.

## Conseils

Activez **incognito** pour une recherche personnelle ou une réponse contenant des informations que vous ne souhaitez pas afficher dans le salon.

Les commandes personnelles compatibles peuvent fonctionner dans un serveur, en message privé et avec une installation utilisateur. Les commandes qui modifient un serveur, comme `/config`, les outils de modération ou `/cases`, restent liées aux permissions et au contexte du serveur.
