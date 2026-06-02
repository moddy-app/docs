# v1.0 — Moddy Changelog

Welcome to the first public release of **Moddy**! This release marks the beginning of a journey — a Discord bot designed for community managers who want to focus on what matters most.

---

## 🚀 New Features

### Moderation

- **`/ban`** — Ban a member with optional reason and duration
- **`/kick`** — Kick a member from the server
- **`/mute`** — Temporarily silence a member (timeout)
- **`/warn`** — Issue a recorded warning
- **`/warnings`** — View a member's warnings
- **`/clear`** — Bulk delete messages (1–100)

### Welcome

- Configurable **welcome system** with custom message, banner image, and dedicated channel
- Support for dynamic variables: `{user}`, `{server}`, `{count}`
- Automatic role assignment when a new member joins

### Logs

- **Audit logs**: joins, leaves, role changes, bans, kicks
- Configurable log channel per category
- Timestamp and author for every action

### Configuration

- **`/setup`** — Interactive setup wizard
- **`/config`** — View and modify current configuration
- All configurations saved per server

---

## 🐛 Bug Fixes

- Improved general stability during traffic spikes
- Fixed a crash on startup in certain Docker configurations

---

## ⚠️ Notes

> This version is a **public beta**. Changes may occur without notice. Join our Discord server to report bugs or suggest features.

---

## 📦 Installation

```bash
# Invite Moddy to your server
https://discord.com/oauth2/authorize?client_id=MODDY_ID&permissions=8&scope=bot+applications.commands
```

Then run `/setup` to configure Moddy in a few minutes.

---

*Thank you for using Moddy — Built to let you focus on your community.* 🎉
