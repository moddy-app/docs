# Système de tickets

Le système de tickets de Moddy vous permet de gérer facilement les demandes de support de vos membres.

## Créer un panel de tickets

Un panel est un message avec des boutons permettant d'ouvrir un ticket.

```
/ticket panel create nom:"Support" description:"Cliquez sur un bouton pour ouvrir un ticket."
```

### Ajouter des catégories

Chaque catégorie correspond à un type de demande :

```
/ticket panel categorie add panel:Support nom:"Bug" emoji:"🐛" couleur:rouge
/ticket panel categorie add panel:Support nom:"Question" emoji:"❓" couleur:bleu
/ticket panel categorie add panel:Support nom:"Suggestion" emoji:"💡" couleur:vert
```

### Envoyer le panel

```
/ticket panel send panel:Support salon:#support
```

## Configuration des canaux

Configurez où les tickets seront créés :

```
/ticket config categorie:"Tickets Ouverts"
/ticket config archive:"Tickets Fermés"
/ticket config logs:#logs-tickets
```

## Gestion des tickets

### Commandes pour le staff

| Commande | Description |
|----------|-------------|
| `/ticket close` | Ferme le ticket actuel |
| `/ticket add @user` | Ajoute un membre au ticket |
| `/ticket remove @user` | Retire un membre du ticket |
| `/ticket assign @staff` | Assigne le ticket à un membre du staff |
| `/ticket priority haute` | Définit la priorité |
| `/ticket rename nom` | Renomme le ticket |

### Transcripts

Activez les transcripts automatiques pour sauvegarder les conversations :

```
/ticket config transcripts:enable email:support@example.com
```

Les transcripts sont envoyés :
- Par e-mail (si configuré)
- Dans le salon d'archive
- Au membre qui a ouvert le ticket (DM)

## Messages automatiques

Personnalisez les messages envoyés automatiquement :

```
/ticket message ouverture texte:"Bonjour {user} ! Notre équipe vous répondra sous 24h."
/ticket message fermeture texte:"Ticket fermé. Merci d'avoir contacté le support !"
```

Variables disponibles : `{user}`, `{ticket_id}`, `{date}`, `{staff}`

## Rôles du staff

Définissez quels rôles peuvent gérer les tickets :

```
/ticket staff add role:@Modérateur
/ticket staff add role:@Support
```

## Statistiques

Consultez les statistiques de votre système de tickets :

```
/ticket stats
```

Résultat :
- Tickets ouverts ce mois
- Temps de réponse moyen
- Tickets par catégorie
- Membres du staff les plus actifs
