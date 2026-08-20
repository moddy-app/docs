# Exploitation et développement

Moddy est un bot Python asynchrone construit sur `discord.py`, avec PostgreSQL pour les données persistantes, Redis pour les fonctionnalités partagées et FastAPI pour les routes internes.

## Lancer le projet

Configurez les variables d’environnement décrites dans le dépôt du bot, notamment le token Discord et les connexions de données nécessaires. Ne stockez jamais un token, une clé d’API ou une URL de webhook dans Git.

## Architecture

- Les **cogs** portent les commandes et événements Discord.
- Les **modules** ajoutent des fonctionnalités configurables par serveur.
- La couche **db** centralise l’accès à PostgreSQL.
- Le **gateway** centralise les appels aux fournisseurs externes, quotas, limitations et reprises.
- Les **services** portent les intégrations métier partagées.

## Le framework `moddy`

Le package interne `moddy` fournit une couche compatible avec `discord.py` pour les futurs développements : `Bot`, `Cog`, `app_commands`, `ui` et des helpers de réponse aux interactions. Il est adopté progressivement afin de préserver le comportement du bot existant.

## Contribution sûre

Ajoutez des tests pour chaque comportement nouveau, utilisez les composants Discord modernes et gardez les textes visibles traduisibles. Avant une mise en production, vérifiez la configuration, les permissions et les migrations de données.
