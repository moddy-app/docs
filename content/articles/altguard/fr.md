# Vérification AltGuard

AltGuard est le module de vérification anti-comptes multiples de Moddy. Il crée un parcours clair pour les nouveaux membres avant de leur donner l’accès normal au serveur.

## Configurer le portail

Dans `/config`, choisissez un canal de vérification, un rôle pour les membres non vérifiés, un rôle pour les membres validés et, si nécessaire, un canal de logs. Les rôles doivent être distincts et Moddy doit pouvoir les attribuer.

## Expérience membre

Le membre arrive derrière le portail de vérification et suit le panneau dédié. Les permissions du rôle non vérifié doivent limiter l’accès aux seuls salons prévus pour cette étape.

## Intervention manuelle

Les administrateurs autorisés peuvent utiliser `/altguard verify` ou `/altguard unverify` lorsqu’une intervention humaine est nécessaire. Chaque action doit être réservée aux membres de confiance.

## Bonnes pratiques

Ne verrouillez pas les canaux d’aide indispensables. Testez le parcours avec un compte secondaire et prévoyez un moyen de contacter la modération en cas de blocage.
