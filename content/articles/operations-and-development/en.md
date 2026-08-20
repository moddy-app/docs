# Operations and development

Moddy is an asynchronous Python bot built on `discord.py`, using PostgreSQL for persistent data, Redis for shared capabilities, and FastAPI for internal routes.

## Run the project

Configure the environment variables described in the bot repository, including the Discord token and required data connections. Never commit a token, API key, or webhook URL to Git.

## Architecture

- **Cogs** contain Discord commands and events.
- **Modules** add server-configurable features.
- The **db** layer centralises PostgreSQL access.
- The **gateway** centralises calls to external providers, quotas, rate limits, and retries.
- **Services** contain shared business integrations.

## The `moddy` framework

The internal `moddy` package provides a `discord.py`-compatible layer for future development: `Bot`, `Cog`, `app_commands`, `ui`, and interaction response helpers. It is adopted gradually to preserve existing bot behaviour.

## Contribute safely

Add tests for each new behaviour, use modern Discord components, and keep visible text translatable. Before production, verify configuration, permissions, and data migrations.
