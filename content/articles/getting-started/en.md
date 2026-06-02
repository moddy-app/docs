# Getting Started with Moddy

Moddy is a public Discord bot designed to simplify your community management. This guide walks you through the invitation to complete configuration.

## Prerequisites

- A Discord server where you are **owner or administrator**
- The `Manage Server` permission on your Discord account

## 1. Invite Moddy

Click the invitation link below to add Moddy to your server:

```
https://discord.com/oauth2/authorize?client_id=MODDY_ID&permissions=8&scope=bot+applications.commands
```

> **Tip:** Moddy requests `Administrator` permission to work correctly. You can restrict its permissions afterwards from server settings.

## 2. Run the Setup Wizard

Once Moddy is on your server, type:

```
/setup
```

The interactive wizard will guide you through configuring:

| Feature | Description |
|---|---|
| Log channel | Where to send audit events |
| Welcome system | Welcome message and channel |
| Auto role | Assigned to new members |
| Bot language | French or English |

## 3. Check the Configuration

After setup, use `/config` to verify everything is correctly configured.

```
/config
```

The response shows a summary of all active configuration.

## 4. Test Moderation

Try a test command to make sure everything works:

```
/warn @user This is a test
```

---

## Troubleshooting

If Moddy doesn't respond:

1. Check that it has **Send Messages** permission in the channel
2. Check that it isn't `timeout` or `banned`
3. Join our Discord server and open a support ticket

*Welcome to the Moddy community!*
