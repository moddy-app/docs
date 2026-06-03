# Politique de Confidentialité

**Dernière mise à jour : 29 décembre 2025**

Cette Politique de Confidentialité décrit les pratiques de Moddy concernant la collecte, l'utilisation, le stockage et la protection des données personnelles, en conformité avec le Règlement Général sur la Protection des Données (RGPD) et les lois applicables en matière de protection des données.

## Responsable du traitement

**Moddy**

Pour toute demande ou question, veuillez vous référer à la section 12 « Contact » en fin de document.

## Données personnelles collectées

### Données collectées automatiquement

Lors de l'utilisation de nos services, nous collectons automatiquement :

- **Identifiants Discord** : identifiant utilisateur, identifiant serveur, identifiant salon
- **Informations de profil Discord** : nom d'utilisateur, nom du serveur, avatars
- **Adresses e-mail** : lorsqu'elles sont fournies pour la création d'un compte ou des communications
- **Données de journalisation** : journaux d'erreurs, informations techniques, contexte d'exécution des commandes
- **Données d'utilisation** : interactions avec le bot, commandes exécutées, événements système

### Données collectées à l'action de l'utilisateur

Certaines fonctionnalités collectent des données uniquement lorsque vous les utilisez activement :

- **Messages sauvegardés** : contenu des messages, métadonnées, pièces jointes (URLs)
- **Rappels personnalisés** : contenu, date, heure et identifiants associés (maximum 10 par utilisateur)
- **Messages inter-serveurs** : contenu, auteur, serveur d'origine, statut de diffusion
- **Rôles Discord sauvegardés** : liste des identifiants de rôles (si le module est activé)
- **Dossiers de modération** : sanctions, preuves, raisons, notes, historique complet
- **Transcriptions de tickets** : enregistrements des conversations du service client

### Données de configuration et de préférences

- **Attributs utilisateur** : statut BETA, PREMIUM, DEVELOPER, BLACKLISTED
- **Configuration personnalisée** : préférences d'utilisation, paramètres du bot
- **Configuration du serveur** : modules activés, salons configurés, préfixes personnalisés

### Données de paiement

Par l'intermédiaire de notre prestataire de paiement Stripe, nous traitons :

- **Informations de paiement** : numéro de carte (tokenisé), nom du titulaire, adresse de facturation
- **Historique des transactions** : montants, dates, statuts des paiements
- **Identifiants Stripe** : références client et références de transaction

**Important** : Les informations de paiement sensibles (numéros de carte complets, CVV) ne sont jamais stockées dans notre infrastructure. Elles sont directement traitées et sécurisées par Stripe.

### Cookies et données de navigation (site web)

Notre site web peut utiliser :

- **Cookies techniques** : nécessaires au fonctionnement du site web
- **Cookies analytiques** : Google Analytics pour mesurer l'audience et améliorer nos services
- **Cookies de préférences** : mémorisation de vos choix

Vous pouvez configurer vos préférences en matière de cookies via les paramètres de votre navigateur.

## Finalités du traitement des données

Vos données personnelles sont traitées aux fins suivantes :

- **Fourniture du service** : exécution des commandes, gestion des fonctionnalités, modération
- **Gestion des comptes** : authentification, préférences utilisateur, abonnements
- **Traitement des paiements** : gestion des transactions, facturation, prévention de la fraude
- **Support client** : assistance technique, résolution de problèmes, traitement des demandes
- **Amélioration du service** : analyse des performances, correction d'erreurs, développement de nouvelles fonctionnalités
- **Sécurité** : prévention des abus, détection des activités suspectes, application des règles
- **Obligations légales** : réponse aux demandes des autorités, conformité réglementaire
- **Communications** : notifications essentielles, mises à jour du service

## Partage des données avec des prestataires tiers

Nous collaborons avec des prestataires de services tiers pour fournir et améliorer nos services. Ces prestataires traitent vos données selon nos instructions et sont soumis à des obligations strictes de confidentialité :

- **Railway** : hébergement d'infrastructure, base de données PostgreSQL et services backend
- **Vercel** : hébergement du site web
- **Discord** : plateforme d'exploitation du bot (collecte automatique des identifiants et métadonnées)
- **Sentry** : surveillance des erreurs et des performances (reçoit les journaux d'erreurs avec le contexte technique)
- **Stripe** : traitement des paiements, gestion des abonnements
- **DeepL** : service de traduction linguistique
- **OpenAI** : services d'intelligence artificielle et de traitement du langage naturel
- **Google Analytics** (si activé) : analyse de l'audience et statistiques de navigation sur notre site web

### Avertissement important concernant les services externes

**Les données transmises aux services tiers suivants ne sont pas anonymisées** : DeepL, OpenAI, et tout autre service de traitement de contenu.

Les identifiants Discord peuvent être anonymisés lors de la transmission, mais **le contenu textuel que vous soumettez (requêtes, messages, traductions) est transmis tel quel** à ces services.

**Certaines données envoyées à l'API OpenAI peuvent être utilisées par OpenAI pour entraîner et améliorer ses modèles**, conformément à leurs conditions d'utilisation.

> **Important :** N'incluez jamais d'informations personnelles, confidentielles ou sensibles dans vos requêtes adressées aux services de traduction, d'IA ou de traitement de contenu. Cela inclut, sans s'y limiter : les mots de passe, les informations bancaires, les informations médicales, les documents professionnels ou personnels confidentiels.

## Durée de conservation des données

**Toutes les données personnelles collectées sont conservées de manière permanente** jusqu'à :

- Une suppression manuelle effectuée par notre équipe technique, ou
- Une demande de suppression explicite de votre part dans le cadre de l'exercice de votre droit à l'effacement

## Sécurité et confidentialité des données

### Mesures de sécurité techniques

Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles :

- **Chiffrement en transit** : toutes les communications entre nos services utilisent le protocole HTTPS/TLS
- **Chiffrement au repos** : données chiffrées dans nos bases de données selon les standards de Railway
- **Absence de stockage local de fichiers** : les fichiers ne sont jamais stockés sur nos serveurs ; seules les URLs hébergées par le CDN de Discord sont conservées

### Contrôle des accès

L'accès à vos données personnelles est strictement contrôlé :

- **Accès à la base de données** : réservé exclusivement aux développeurs et responsables de Moddy
- **Équipe support** : n'a pas d'accès direct à la base de données mais peut consulter certaines informations dans le cadre du support client
- **Données Stripe** : notre équipe n'a pas accès aux informations de paiement complètes stockées par Stripe

### Engagement de non-commercialisation

**Moddy ne vend jamais vos données personnelles à des tiers.** Vos informations ne sont partagées qu'avec les prestataires de services nécessaires au fonctionnement de notre plateforme, conformément à la section 4 de cette politique.

### Notification des incidents de sécurité

En cas de violation de données personnelles susceptible de présenter un risque pour vos droits et libertés, nous nous engageons à :

- Notifier l'autorité de contrôle compétente (CNIL en France) dans un délai de 72 heures suivant la découverte de l'incident
- Vous informer dans les meilleurs délais par e-mail ou via notre serveur Discord
- Communiquer la nature de la violation, les mesures prises et les recommandations pour atténuer les risques

## Données non collectées

Moddy ne collecte **jamais** les catégories de données suivantes :

- Mots de passe personnels (à l'exception de l'authentification Discord)
- Adresses IP individuelles
- Données de géolocalisation GPS précises
- Messages privés Discord (sauf sauvegarde explicite via une commande dédiée)
- Historique de navigation sur le web
- Carnets d'adresses ou contacts personnels
- Données biométriques

## Vos droits (RGPD)

Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants concernant vos données personnelles :

- **Droit d'accès** : obtenir la confirmation que vos données sont traitées et en recevoir une copie
- **Droit de rectification** : demander la correction de données inexactes ou incomplètes
- **Droit à l'effacement** (droit à l'oubli) : obtenir la suppression de vos données personnelles
- **Droit à la limitation du traitement** : demander la limitation du traitement dans certaines circonstances
- **Droit à la portabilité des données** : recevoir vos données dans un format structuré, couramment utilisé et lisible par machine
- **Droit d'opposition** : vous opposer au traitement de vos données pour des raisons tenant à votre situation particulière
- **Droit de retrait du consentement** : lorsque le traitement est fondé sur votre consentement
- **Droit d'introduire une réclamation** : déposer une plainte auprès de l'autorité de contrôle compétente (CNIL en France)

Nous nous engageons à répondre à toute demande dans un délai maximum d'un mois à compter de sa réception. Ce délai peut être prolongé de deux mois supplémentaires en cas de demande complexe, auquel cas vous serez informé de cette prolongation.

## Transferts internationaux de données

Dans le cadre de la fourniture de nos services, vos données personnelles peuvent être transférées et traitées dans des pays situés en dehors de l'Espace Économique Européen (EEE), notamment aux États-Unis.

Ces transferts sont effectués vers les prestataires suivants : Railway, Vercel, Discord, Sentry, Stripe, DeepL, OpenAI et Google (si Analytics activé).

Nous veillons à ce que ces transferts soient effectués conformément aux mécanismes juridiques appropriés prévus par le RGPD, notamment :

- Les Clauses Contractuelles Types (CCT) approuvées par la Commission européenne
- Les décisions d'adéquation pour certains pays
- Les certifications Privacy Shield ou équivalents
- Les garanties appropriées propres à chaque prestataire

## Modifications de la Politique de Confidentialité

Moddy se réserve le droit de modifier cette Politique de Confidentialité à tout moment pour refléter les évolutions de nos pratiques, services ou obligations légales.

Toute modification substantielle sera :

- Publiée sur cette page avec une date de mise à jour
- Notifiée aux utilisateurs via notre serveur Discord officiel et/ou par e-mail
- Applicable immédiatement pour les nouveaux utilisateurs, et après un délai de préavis raisonnable pour les utilisateurs existants

Nous vous encourageons à consulter régulièrement cette politique afin de rester informé de la manière dont nous protégeons vos données.

## Base juridique du traitement

Le traitement de vos données personnelles repose sur les fondements juridiques suivants :

- **Exécution du contrat** : fourniture des services demandés (article 6.1.b du RGPD)
- **Consentement** : lorsque vous acceptez explicitement certains traitements (article 6.1.a du RGPD)
- **Intérêt légitime** : amélioration du service, sécurité, prévention de la fraude (article 6.1.f du RGPD)
- **Obligation légale** : conformité réglementaire, réponses aux autorités (article 6.1.c du RGPD)

## Contact

**Pour toute question, demande relative à vos données personnelles ou à cette Politique de Confidentialité :**

- **E-mail** : hello@moddy.app
- **Support** (recommandé) : [moddy.app/support](https://moddy.app/support)

Cela inclut : l'exercice de vos droits RGPD, les demandes d'informations, les demandes légales et judiciaires, les questions générales relatives à la confidentialité.

**Autorité de contrôle (France) :**  
Commission Nationale de l'Informatique et des Libertés (CNIL)  
3 Place de Fontenoy - TSA 80715 - 75334 PARIS CEDEX 07  
Téléphone : +33 1 53 73 22 22  
Site web : [www.cnil.fr](https://www.cnil.fr)

---

> **En utilisant les services de Moddy (bot Discord, site web et services associés), vous reconnaissez avoir lu, compris et accepté les termes de cette Politique de Confidentialité.**

**Date d'entrée en vigueur : 29 décembre 2025**
