# Configurer votre serveur

La commande `/config` centralise les modules Moddy. Chaque configuration appartient au serveur dans lequel vous ouvrez le panneau.

## Gérer les modules

Un module peut être activé, modifié ou supprimé sans affecter les autres modules. Les panneaux affichent les sélections actuelles et demandent une confirmation pour les actions sensibles.

## Conditions d’accès actuelles

`/config` s’utilise uniquement dans un serveur. La personne qui l’ouvre doit avoir la permission Discord **Gérer le serveur** et disposer du statut Moddy **Team** ou **Beta**. Moddy doit lui-même avoir la permission administrateur. Si une de ces conditions manque, le panneau explique le blocage au lieu d’appliquer une configuration partielle.

Une sanction globale de type « limité » peut aussi empêcher l’ajout d’un nouveau module tout en laissant la modification des modules déjà configurés.

## Ce que le panneau configure

Le menu `/config` donne accès aux modules Welcome Channel, Welcome DM, InterServer, Starboard, Auto Restore Roles, Auto Role, Social Notifications, Adaptive Slowmode, Voice Transcription, Bot Customization, AltGuard et AutoMod IA. La référence [Modules de serveur](/articles/server-modules/) décrit le parcours de mise en service de chacun.

## Personnaliser Moddy

Le module **Bot Customization** permet d’adapter l’identité du bot à votre serveur : surnom, avatar, bannière, biographie et style de nom quand Discord le permet. Ces réglages n’affectent pas les autres serveurs.

## Permissions

Les commandes de configuration sont réservées aux membres qui peuvent gérer le serveur. Certaines actions demandent des permissions supplémentaires, par exemple pour gérer les rôles ou les salons.

## Bonne méthode

Commencez par un seul module, observez son comportement, puis élargissez progressivement. Gardez un canal de logs séparé des canaux communautaires afin de pouvoir vérifier les actions de Moddy.

## Résoudre un réglage qui ne fonctionne pas

1. Vérifiez que le module est activé dans le bon serveur.
2. Vérifiez les permissions du bot dans le canal ou sur le rôle sélectionné.
3. Vérifiez l’ordre des rôles : Moddy ne peut pas gérer un rôle placé au-dessus du sien.
4. Testez avec un compte secondaire plutôt qu’avec un administrateur déjà exempté de certaines restrictions.
5. Consultez le canal de logs et les cas de modération avant de modifier plusieurs paramètres à la fois.
