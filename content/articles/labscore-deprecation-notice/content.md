<voidcannon-cta>
    <md-icon slot="icon">waving_hand</md-icon>
    By the time you're reading this labsCore is no longer available.
</voidcannon-cta>

## What's happening?

The labsCore Discord Bot will be ceasing operations starting on the **1st of January 2026**.

## What's next?

labsCore will continue operating as normal throughout 2025. From 2026 onward the public instance (`labsCore#5969`) will
no longer be functional.

> If you're looking for replacements, I can personally vouch for [Assyst](https://discord.com/oauth2/authorize?client_id=571661221854707713)
> and [NotSoBot](https://discord.com/oauth2/authorize?client_id=439205512425504771).

The frontend (bot) source-code will be preserved in a read-only state on [GitLab](https://gitlab.com/bignutty/labscore),
the first-party backend (labscore-api) cannot not be trivially made available due to it relying on a plethora of private
and undocumented services.

## Why now?

The bot has always been a hobby project that I work on in my free time. In the recent months I've gradually felt
less and less motivation to dedicate any significant time towards contributing to the project. I don't feel comfortable
handing this project over to new maintainers, nor do I want to keep it running on "autopilot" until it eventually breaks
down and I disappear from the internet.

labsCore is one of my oldest JavaScript-based projects, two and a half rewrites later it still exhibits many poor
conventions and bad decisions that I'd no longer make today. The entire codebase (both frontend and backend) are still
using CommonJS imports and exports as well as a giant mess of half-baked helper functions and utilities. I believe
another full rewrite of both the frontend and backend would be necessary to get it into a somewhat manageable state,
which is something I simply don't want to invest the time into.

<:flask:1254752675199844372> Thank you for using labsCore.

<voidcannon-cta layout="button">
    <md-icon slot="icon">help</md-icon>
    For any further questions, feel free to reach out.
    <md-text-button href="https://discord.gg/fwU68KBH5d" target="_blank" slot="button">labsCore Discord</md-text-button>
</voidcannon-cta>