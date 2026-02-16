<!-- url: https://nimiq.com/developers/mini-apps/developer-setup -->
<!-- type: setup guide -->
<!-- summary: Guide to setting up a Nimiq Pay mini app dev environment to load an app: prerequisites and testing via local IP in Nimiq Pay. -->

# Developer Setup

Set up your environment so you can run any local web app inside Nimiq Pay. Then follow the [mini app tutorial](/mini-apps/mini-app-tutorial.md) to build your first app.

## Prerequisites

- **Node.js** (version 18+ recommended)
- **Nimiq Pay** app installed on a mobile device (or emulator)

## Run a local web app (example: Vite)

1. Install dependencies in your project.

```bash
npm install
```

1. Start the dev server with network access enabled.

```bash
npm run dev
```

1. Find your local IP address.

- If you need to fetch it manually:
  - macOS: `ipconfig getifaddr en0`
  - Windows: `ipconfig` (look for “IPv4 Address”)
  - Linux: `ip a` (look for `inet` on your active interface)

- Use your local IP with the port: `http://000.000.0.000:0000` (replace with your actual IP)
- Enter this URL in Nimiq Pay's Custom URL field

> [!NOTE]
> **Note**: Loading a mini app works the same on iOS and Android.

## Open in Nimiq Pay mini apps

1. Make sure your phone and dev machine are on the same Wi‑Fi network.
2. Open **Nimiq Pay**.
3. Go to the **Mini apps** section.
4. Enter your dev URL `http://<your-ip>:5175`

Your app should now load inside Nimiq Pay!

Follow the [mini app tutorial](/mini-apps/mini-app-tutorial.md) to build a minimal mini app yourself!
