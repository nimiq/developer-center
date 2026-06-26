---
title: Device Identifier in Mini Apps
description: Request a pseudonymous per-device handle from Nimiq Pay using requestDeviceIdentifier
icon: i-tabler:fingerprint
navigation:
  title: Device Identifier
  order: 3
---

# Device Identifier in Mini Apps

Nimiq Pay can issue a pseudonymous, per-device identifier to mini apps that need a stable handle, for example for leaderboards, anti-spam, or save slots. The identifier is a 64-character hex SHA-256 string scoped to your mini app's origin. It identifies the device, not the user: a shared device returns the same value to every user, and the same user on two devices receives two different identifiers.

## Requesting the identifier

Call `requestDeviceIdentifier()` with a `reason` string. The reason is shown verbatim to the user in a consent prompt the first time your origin requests it. Subsequent calls from the same origin resolve silently.

```ts
import { requestDeviceIdentifier } from '@nimiq/mini-app-sdk'

try {
  const id = await requestDeviceIdentifier({ reason: 'Leaderboard ranking' })
  // id: 64-char hex SHA-256, stable for this mini app on this device
}
catch (error) {
  // user denied, reason was empty, or not running inside Nimiq Pay
}
```

## How the value behaves

| Property | Behaviour |
| --- | --- |
| Format | 64-character hex string (SHA-256 digest) |
| Scope | One value per (device, origin). Different mini apps on the same device receive different identifiers |
| Stability | Stable across Nimiq Pay reinstalls and across different user accounts on the same device |
| Prompts | First call per origin shows a consent prompt with your `reason`. Later calls resolve without a prompt |

The host derives the value by hashing a host-side device ID with your origin, so two mini apps cannot recognise the same device by comparing identifiers.

## What you should not use it for

The identifier is for device-scoped state, not user identity. Do not use it for authentication or as a user ID: a shared device returns the same value to every user, and the same user on two devices receives two different identifiers.

If you need a user identity, use the Nimiq provider to request the user's account address through [`listAccounts`](/mini-apps/api-reference/nimiq-provider#listaccounts).

## Error handling

`requestDeviceIdentifier()` rejects in three cases:

- **User denied the consent prompt.**
- **`reason` is empty.**
- **Not running inside Nimiq Pay.** The host API is unavailable outside the Nimiq Pay app.
