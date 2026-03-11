# Load a Local Mini App in Nimiq Pay

Use this guide to load any locally running web app inside Nimiq Pay.

<callout color="info" icon="i-tabler-info-circle">

**Temporary Testing Access**

Mini app testing is currently limited to allowlisted users.

- On iOS, share the email associated with your Apple account. Install TestFlight, and the Nimiq Pay test build will appear there once your account is allowlisted.
- On Android, share the email associated with your Google account. You will receive an email when access is enabled.

</callout>

## Prerequisites

- **Node.js** (version 22+, only if your mini app uses Node.js; the examples in this guide use it)
- **Nimiq Pay** app installed on a mobile device (or emulator)
- Phone and development machine on the same Wi-Fi network

## Start your local app

The commands below assume you're using a Node.js mini app.

1. Go to your project directory.

```bash
cd my-mini-app
```

1. Install dependencies.

```bash
npm install
```

1. Start the dev server with network access enabled.

```bash
npm run dev -- --host
```

Example:

```bash
http://192.168.1.42:5173
```

## Open your local app in Nimiq Pay

1. Open **Nimiq Pay** on your phone.
2. Go to **Mini Apps**.
3. Enter your network URL in the Custom URL field: `http://<your-ip>:5173`.

Your app should load inside Nimiq Pay. You can also test [this demo](https://github.com/Eligioo/nimiq-mini-app-demo) to see a working mini app.

## Tutorials

- Build a first mini app: [Mini app tutorial](https://nimiq.com/developers/mini-apps/mini-app-tutorial)
- Build a dual-chain mini app: [Build a Dual-Chain Mini App with Nimiq Pay](https://nimiq.com/developers/mini-apps/dual-chain-mini-app-tutorial)
