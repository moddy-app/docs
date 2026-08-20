# Modules de serveur

Les modules sont les fonctions que Moddy exécute automatiquement dans un serveur. Ils se configurent depuis `/config` et restent isolés les uns des autres : désactiver Starboard, par exemple, ne modifie ni vos messages d’accueil ni vos réglages de modération.

## Avant de configurer

L’accès actuel à `/config` est réservé aux comptes **Team** ou **Beta** qui disposent de la permission Discord **Gérer le serveur**. Moddy doit également avoir la permission administrateur dans le serveur. Ces contraintes permettent aux modules de créer, modifier ou attribuer les ressources Discord dont ils ont besoin.

Avant toute activation :

1. Créez un canal de test et, quand le module le permet, un canal de journalisation.
2. Vérifiez la position du rôle Moddy. Il doit être au-dessus des rôles qu’il devra attribuer, retirer ou restaurer.
3. Configurez une fonction à la fois, puis testez-la avec un compte secondaire.
4. Gardez les permissions de vos salons cohérentes avec les rôles produits par le module.

## Accueil et arrivée des membres

### Welcome Channel

**But :** publier un message d’arrivée dans un salon du serveur.

Choisissez un salon visible par la communauté et rédigez un message utile : règlement, canal de présentation et point de contact. Évitez d’envoyer des informations privées ou des liens sensibles dans ce message. Testez l’arrivée d’un membre pour vérifier les mentions, permissions et embeds.

### Welcome DM

**But :** envoyer un message privé lors de l’arrivée d’un membre.

Utilisez-le pour le même parcours d’accueil, avec une alternative accessible dans un salon public : Discord peut empêcher un message privé selon les réglages du membre. Le module ne doit donc jamais être votre unique moyen de communiquer une règle indispensable.

### Auto Role

**But :** attribuer automatiquement un ou plusieurs rôles à l’arrivée.

Sélectionnez seulement des rôles sans privilège élevé. Vérifiez la hiérarchie des rôles, puis rejoignez avec un compte de test. Si AltGuard est actif, il traite d’abord le nouveau membre ; Auto Role intervient ensuite selon le parcours de vérification configuré.

### Auto Restore Roles

**But :** sauvegarder les rôles d’un membre qui quitte et les restituer lors d’un retour.

Ce module évite de réattribuer manuellement les rôles communautaires. Il ne peut restaurer que les rôles que Moddy peut gérer. Les administrateurs peuvent contrôler les entrées sauvegardées avec `/view-saved-roles` et effacer les données d’un membre avec `/clear-saved-roles user:@membre`.

**Conseil :** documentez quels rôles doivent être restaurés. Les rôles temporaires, de sanction ou de vérification ne doivent pas être restaurés sans une règle claire.

## Sécurité et modération

### AltGuard

**But :** placer les nouveaux membres derrière un portail de vérification avant l’accès normal au serveur.

Prévoyez un rôle non vérifié, un rôle vérifié, un canal de vérification et, idéalement, un canal de logs. Le rôle non vérifié doit accéder au minimum à l’aide et à la procédure de vérification. Les administrateurs autorisés disposent de `/altguard verify member:@membre` et `/altguard unverify member:@membre` pour résoudre un cas manuellement.

Testez toujours le flux complet : arrivée, accès limité, validation, retrait du rôle initial et accès final. Ne rendez pas inaccessible le salon permettant de joindre la modération.

### AutoMod IA

**But :** examiner les messages et aider l’équipe à détecter les contenus contraires aux règles du serveur.

Commencez avec des actions prudentes et un canal de suivi. Les messages sont transmis dans un pipeline qui peut combiner signaux connus, contexte et précédents de modération. Les réactions sur les messages mis en cache peuvent également alimenter son contexte relationnel. Une analyse automatique n’est jamais une décision définitive : revoyez les journaux, les cas et les appels avant d’augmenter l’automatisation.

### Adaptive Slowmode

**But :** adapter le ralentissement d’un salon à son activité.

Le module observe les messages dans une fenêtre glissante et ajuste le slowmode lorsque l’activité le justifie. Définissez des limites qui restent adaptées à votre communauté ; un réglage trop agressif pénalise les échanges normaux, un réglage trop faible ne protège pas les salons chargés. Testez-le pendant un événement ou dans un salon de test.

## Mise en valeur et échanges entre serveurs

### Starboard

**But :** republier dans un salon dédié les messages qui atteignent un seuil de réactions.

Choisissez le salon de destination, l’emoji et le seuil de réactions. Moddy met à jour le contenu quand une réaction est ajoutée ou retirée. Ne sélectionnez pas un salon déjà inclus dans le flux Starboard et définissez un seuil suffisamment élevé pour éviter le bruit.

### InterServer

**But :** relayer des messages entre les salons autorisés de plusieurs serveurs.

Les messages relayés reçoivent un identifiant Moddy. Utilisez `/interserver info message_id:…` pour consulter un message et `/interserver report message_id:…` pour le signaler. Lorsqu’un message source est supprimé, Moddy supprime les copies relayées qu’il peut encore atteindre.

Configurez une politique commune avant de connecter des communautés : règles éditoriales, responsables de modération, modalités de signalement et salons concernés. Ne reliez jamais un salon privé ou réservé au personnel sans validation explicite.

### Social Notifications

**But :** publier dans un canal les nouvelles publications provenant des sources sociales suivies.

Choisissez un salon qui accepte les notifications et limitez les sources au contenu réellement utile. Testez une publication, puis définissez qui modère les messages si une source est compromise ou devient trop bruyante.

## Outils de contenu

### Voice Transcription

**But :** proposer ou publier une transcription sous un message vocal compatible.

Définissez les salons inclus et le mode de fonctionnement souhaité. Le module intervient sur les nouveaux messages et ne doit être activé que dans les espaces où les membres savent que l’audio peut être traité. Gardez une option manuelle pour les salons sensibles et vérifiez la transcription avant toute modération fondée sur son contenu.

### Bot Customization

**But :** adapter l’identité présentée par Moddy dans votre serveur.

Selon les possibilités de Discord, vous pouvez configurer le surnom, l’avatar, la bannière, la biographie et le style de nom de Moddy pour ce serveur. Ces réglages sont locaux au serveur : ils ne changent pas l’identité du bot ailleurs. Utilisez une identité cohérente avec votre règlement et évitez toute présentation pouvant faire croire que le bot est un membre humain.

## Ordre de déploiement conseillé

1. Configurez les rôles et canaux de logs.
2. Activez AltGuard, Auto Role et Auto Restore Roles si votre parcours d’arrivée le nécessite.
3. Ajoutez les messages d’accueil.
4. Testez les modules de communication : Starboard, notifications sociales et InterServer.
5. Activez enfin AutoMod IA, slowmode adaptatif et transcription avec une période d’observation.

Consultez aussi [la configuration du serveur](/articles/server-configuration/) et [la modération et la sécurité](/articles/moderation-security/) pour les prérequis et procédures détaillés.
