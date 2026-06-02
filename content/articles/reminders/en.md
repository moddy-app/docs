# Reminder System

Moddy lets you create personalized reminders for yourself and your members.

## Create a Reminder

```
/reminder create message:"Team meeting" in:2h
```

```
/reminder create message:"Renew subscription" date:2026-01-01 time:09:00
```

## Recurring Reminders

> Requires Moddy Premium.

```
/reminder create message:"Weekly backup" recurrence:weekly day:monday time:08:00
```

Available recurrences: `daily`, `weekly`, `monthly`

## List Your Reminders

```
/reminder list
```

## Delete a Reminder

```
/reminder delete id:123
```

## Server Reminders

Admins can create reminders visible to the whole server:

```
/reminder server create message:"Planned maintenance" in:24h channel:#announcements
```
