# Server modules

Server modules are the features Moddy runs automatically inside a server. Configure them through `/config`; each one can be enabled, adjusted, or disabled independently.

## Before you start

At present, `/config` is available to **Team** and **Beta** accounts with Discord's **Manage Server** permission. Moddy also needs administrator permission in the server. Create a test channel, check the bot role hierarchy, and enable one module at a time.

## Join flow

| Module | Purpose | Key setup point |
| --- | --- | --- |
| **Welcome Channel** | Posts a welcome message in a selected channel. | Keep a public help path in the message. |
| **Welcome DM** | Sends a private welcome message. | DMs can be closed, so do not rely on it alone. |
| **Auto Role** | Assigns roles when a member joins. | Moddy's role must be above assigned roles. |
| **Auto Restore Roles** | Saves roles on leave and restores manageable roles on rejoin. | Use `/view-saved-roles` and `/clear-saved-roles` to manage saved entries. |

## Moderation and safety

**AltGuard** keeps newcomers behind a verification gate. Configure distinct unverified and verified roles, a verification channel, and a support path. Trusted administrators can use `/altguard verify` and `/altguard unverify` for manual decisions.

**AutoMod IA** reviews messages through a moderation pipeline using known signals, context, and moderation precedents. Start with cautious actions and a review channel. Automated analysis is not a final moderation decision.

**Adaptive Slowmode** observes message activity and adjusts channel slowmode. Set limits suitable for the community and test them in a controlled channel first.

## Community features

**Starboard** highlights messages that reach your configured reaction threshold, updating when reactions change. **InterServer** relays approved channels across servers and provides `/interserver info` and `/interserver report`; deleting a source message also removes reachable relays. **Social Notifications** posts followed social publications to the chosen channel.

## Content features

**Voice Transcription** offers or posts a transcription for compatible voice messages in configured channels. Only enable it where members understand that audio may be processed. **Bot Customization** lets a server set Moddy's local nickname, avatar, banner, biography, and name style where Discord supports them.

## Recommended rollout

Set up roles and logs first, then the join flow, welcomes, community features, and finally automated moderation or transcription. Test each change with a secondary account before enabling it for everyone.
