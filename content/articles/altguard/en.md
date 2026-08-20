# AltGuard verification

AltGuard is Moddy's anti-alt-account verification module. It creates a clear path for new members before granting normal server access.

## Configure the gate

In `/config`, choose a verification channel, a role for unverified members, a role for verified members, and optionally a log channel. Roles must be different, and Moddy must be able to assign them.

## Member experience

Members arrive behind the verification gate and follow its dedicated panel. Permissions on the unverified role should limit access to only the channels intended for this step.

## Manual intervention

Authorised administrators can use `/altguard verify` or `/altguard unverify` when human intervention is required. Keep these actions limited to trusted members.

## Best practices

Do not lock essential support channels. Test the flow with a secondary account and provide a way to contact moderators if someone gets blocked.
