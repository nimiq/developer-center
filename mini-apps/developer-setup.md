<!-- url: https://nimiq.com/developers/mini-apps/developer-setup -->
<!-- type: setup guide -->
<!-- summary: Guide to setting up a Nimiq Pay mini app dev environment to load an app: prerequisites and testing via local IP in Nimiq Pay. -->

# Developer Setup

Set up your environment so you can run any local web app inside Nimiq Pay. Then follow the [mini app tutorial](/mini-apps/mini-app-tutorial.md) to build your first app.

## Prerequisites

- **Node.js** (version 22+ required)
- **Nimiq Pay** app installed on a mobile device (or emulator)

## Run a local web app

1. Create your [Vite](https://vite.dev/guide/#scaffolding-your-first-vite-project) project. We use Vite Vue + TypeScript template for this example, but you can use any framework you like.

```bash
npm create vite@latest my-mini-app -- --template vue-ts
```

1. Install dependencies in your project.

```bash
npm install
```

1. Start the dev server with network access enabled.

```bash
npm run dev -- --host
```

The Network URL shown in terminal is what you enter in Nimiq Pay which looks like: `http://xxx.xxx.xxx.xxx:5173`

> [!NOTE]
> **Note**: Loading a mini app works the same on iOS and Android.

## Open in Nimiq Pay mini apps

1. Make sure your phone and dev machine are on the same Wi‑Fi network.
2. Open **Nimiq Pay**.
3. Go to the **Mini apps** section.
4. Enter your network URL in Nimiq Pay's Custom URL field `http://<your-ip>:5173`

Your app should now load inside Nimiq Pay!

Follow the [mini app tutorial](/mini-apps/mini-app-tutorial.md) to build a minimal mini app yourself!
