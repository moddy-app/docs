# Community automation

Automation modules handle repetitive tasks while keeping configuration in your server.

## Welcome flows and roles

- **Welcome Channel** posts welcome messages in a configured channel.
- **Welcome DM** sends new members a private message when the server allows it.
- **Auto Role** assigns roles based on your configuration.
- **Auto Restore Roles** saves and restores roles for a member who rejoins. `/view-saved-roles` and `/clear-saved-roles` help inspect or erase this data.

## Activity and highlights

- **Adaptive Slowmode** adjusts a channel's slowmode according to activity, using stabilisation logic to avoid constant changes.
- **Starboard** highlights messages that reach your chosen reaction threshold.

## Wider communication

- **InterServer** connects authorised channels across several servers.
- **Social Notifications** posts new content from followed accounts in a chosen channel.

Always configure permissions and log channels before enabling a module that automatically posts or changes content.
