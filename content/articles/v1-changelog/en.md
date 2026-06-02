# v1.0 — Moddy Changelog

Welcome to **v1.0** of Moddy! This major update brings many improvements.

## ✨ What's New

### Overhauled Ticket System

The ticket system has been completely redesigned:

- **Customizable panels** with buttons and emojis
- **Multiple categories** per panel
- **Automatic transcripts** sent by email
- **Ticket assignment** to staff members
- **Priorities** (Low, Normal, High, Urgent)

```
/ticket panel create name:"Support" description:"Open a ticket here"
```

### Auto-Moderation v2

Auto-moderation has been completely rewritten:

| Feature | Availability |
|---|---|
| Anti-spam | Everyone |
| Anti-flood | Everyone |
| Word filter | Everyone |
| Invite detection | Everyone |
| AI Anti-toxicity | Premium |
| Malicious link detection | Premium |

### New Logging System

Logs are now separated by category:

- Moderation logs
- Member logs (join/leave)
- Message logs (edit/delete)
- Server logs (channels, roles)

## 🔧 Improvements

- **Performance**: response time reduced by 40%
- **Reminders**: recurrence support (daily, weekly, monthly)
- **Commands**: improved auto-completion
- **Dashboard**: complete admin panel redesign

## 🐛 Bug Fixes

- Fixed a bug where sanctions weren't saved on disconnect
- Fixed animated avatar display in embeds
- Fixed permission calculation for multiple roles
- Over 50 minor fixes

## 🚨 Breaking Changes

> These changes require action on your part.

- `/warn` is now `/mod warn` — a `/warn` alias remains until v1.1
- Log webhooks must be reconfigured with `/logs setup`

## 📅 Coming Soon

Here's what we're preparing for **v1.1**:

- Discord Forum integration
- Advanced poll system
- Public API

---

Thank you for using Moddy! For any questions, join our [support server](https://moddy.app/support/).
