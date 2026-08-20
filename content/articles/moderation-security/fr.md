# Modération et sécurité

Moddy rassemble les actions de modération et leur historique dans un système de cas. Il facilite le suivi sans remplacer le jugement de votre équipe.

## Actions de modération

Les commandes de modération permettent de traiter les comportements qui enfreignent vos règles. Les permissions Discord et celles définies pour votre équipe déterminent qui peut les utiliser.

| Commande | Permission Discord minimale | Comportement |
| --- | --- | --- |
| `/ban` | Bannir des membres | Bannit un ou plusieurs utilisateurs après confirmation. |
| `/kick` | Expulser des membres | Expulse un ou plusieurs membres après confirmation. |
| `/mute` | Modérer des membres | Applique un timeout à un ou plusieurs membres. |
| `/warn` | Modérer des membres | Enregistre un avertissement pour un ou plusieurs utilisateurs. |

Les flux de bannissement, expulsion, timeout et avertissement peuvent demander un motif et proposent une confirmation. Vérifiez toujours la cible, le motif et la durée avant de valider. L’option incognito garde la confirmation visible uniquement par la personne qui modère.

## Cas et historique

`/cases` ouvre le navigateur de cas du serveur pour le personnel habilité. `/mycases` permet à un utilisateur de consulter ses propres cas dans les serveurs concernés. Un cas peut contenir le motif, les preuves, les sanctions et les commentaires associés.

## Appels

Les sanctions créées par les flux compatibles peuvent proposer un appel. Les demandes sont séparées des décisions de modération et sont examinées par les personnes autorisées.

## Sanctions globales

Les sanctions globales Moddy sont réservées à l’équipe Moddy. Elles ne sont pas un outil de modération ordinaire pour les administrateurs de serveurs.

## Réduire les risques

Ne donnez pas une permission de modération à un rôle qui n’en a pas besoin. Protégez le canal de logs, limitez les rôles pouvant utiliser `/cases` et faites passer les décisions contestées par un processus d’appel. Pour le parcours des nouveaux membres, consultez aussi [AltGuard](/articles/altguard/) ; pour l’automatisation, consultez [Modules de serveur](/articles/server-modules/).

## Réduire les erreurs

Documentez le motif, vérifiez l’identité ciblée avant la validation et préférez des sanctions proportionnées. Utilisez les cas pour garder une trace fiable des décisions.
