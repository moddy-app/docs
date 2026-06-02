# Setting Up Auto-Moderation

Moddy's auto-moderation allows you to protect your server from spam, inappropriate messages, and more.

## Prerequisites

- Moddy must be invited to your server
- You need the **Manage Server** permission
- Moddy needs **Timeout Members**, **Manage Messages**, and **Kick Members** permissions

## Enabling Auto-Moderation

To enable auto-moderation:

```
/automod enable
```

To disable it:

```
/automod disable
```

## Rule Configuration

### Anti-Spam

Anti-spam automatically blocks users who send too many messages in a short time.

```
/automod spam sensitivity:medium action:mute duration:5m
```

Available sensitivity levels: `low`, `medium`, `high`, `extreme`

### Word Filter

Add words or phrases to block:

```
/automod words add word:"bad-word" action:delete
```

Available actions:

| Action | Description |
|--------|-------------|
| `delete` | Deletes the message |
| `warn` | Warns the user |
| `mute` | Mutes the user |
| `kick` | Kicks the user |
| `ban` | Bans the user |

### Discord Invite Filter

Automatically block Discord invites from other servers:

```
/automod invites enable action:delete
```

Add exceptions for partner servers:

```
/automod invites whitelist server-id:123456789
```

## Moderation Logs

Set up a channel to receive auto-moderation logs:

```
/logs setup type:automod channel:#mod-logs
```

## Test Mode

Before enabling sanctions, test your configuration in observation mode:

```
/automod mode:observation
```

In observation mode, Moddy logs violations without applying sanctions.

## Premium Features

> These features require a Moddy Premium subscription.

- **AI Anti-toxicity**: detects toxic messages using artificial intelligence
- **Malicious link detection**: blocks phishing and malware links
- **Point system**: automatic sanction point assignment
- **Extended history**: 90 days of moderation history

## Troubleshooting

**Moddy isn't sanctioning despite configuration?**

1. Check that Moddy has the necessary permissions
2. Check that automod is enabled with `/automod status`
3. Make sure Moddy's role is above the roles of members to be sanctioned

**Administrators are being sanctioned?**

Add roles to exclude:

```
/automod exempt role:@Admin
```
