# Système de rappels

Moddy vous permet de créer des rappels personnalisés pour vous et vos membres.

## Créer un rappel

```
/reminder create message:"Réunion d'équipe" dans:2h
```

```
/reminder create message:"Renouveler l'abonnement" date:2026-01-01 heure:09:00
```

## Rappels récurrents

> Nécessite Moddy Premium.

```
/reminder create message:"Backup hebdomadaire" récurrence:hebdomadaire jour:lundi heure:08:00
```

Récurrences disponibles : `quotidien`, `hebdomadaire`, `mensuel`

## Lister vos rappels

```
/reminder list
```

## Supprimer un rappel

```
/reminder delete id:123
```

## Rappels de serveur

Les administrateurs peuvent créer des rappels visibles par tout le serveur :

```
/reminder server create message:"Maintenance prévue" dans:24h salon:#annonces
```
