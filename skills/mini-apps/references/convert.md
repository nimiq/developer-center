# Convert an Existing App

This reference guides the conversion of an existing web application into a mini app that runs inside Nimiq Pay. It audits the codebase, identifies what can be adapted, flags what cannot, and executes the changes.

## Phase 1 — Audit the codebase

Scan the existing project and answer these questions:

1. **What does the app do?** Summarize its core functionality in 2-3 sentences.
2. **What framework and build tool does it use?** Any build tool that outputs a web app works. Note the current tooling for the conversion plan.
3. **Does it have payment or transaction logic?** Identify any existing payment integrations (Stripe, PayPal, crypto wallets, etc.).
4. **Does it have authentication?** Identify how users log in (email, OAuth, wallet connect, etc.).
5. **Does it call external APIs or backends?** List them. External APIs and backends are fully supported in mini apps.
6. **Is it mobile-friendly?** Mini apps run on mobile. A desktop-only layout will need responsive work.
7. **Does it use secure-context-only Web APIs?** APIs like `crypto.randomUUID()` may not work when loaded over HTTP on a LAN. Identify any usage and note where fallbacks are needed.

Present this audit to the developer and confirm your understanding before proceeding.

## Phase 2 — Assess feasibility

Based on the audit, determine if the app is a good fit for conversion.

**Good fit:**
- Client-side SPA (Vue, React, Svelte, or any framework that outputs a browser-runnable web app)
- Has payment or transaction features that map to Nimiq/Ethereum providers
- Already mobile-friendly or close to it
- Dev server supports binding to `0.0.0.0` so the phone can reach it over LAN

**Challenging but possible:**
- Desktop-only layout (needs responsive work)
- Has server-rendered pages (SSR components may need restructuring for WebView)
- Uses secure-context-only Web APIs without fallbacks

**Not a good fit:**
- Requires server-side wallet access or private key management
- Depends entirely on third-party payment providers with no clear mapping to Nimiq/Ethereum
- Is a native mobile app, not a web app
- Requires features that Nimiq Pay's WebView cannot provide

If the app is not a good fit, explain why clearly and specifically. Do not just say "this won't work." Explain what would need to change for it to work, and let the developer decide if that's worth it. If the gap is too large, suggest starting fresh with the scaffold flow instead ([scaffold.md](scaffold.md)).

## Phase 3 — Plan the conversion

Create a conversion plan with these sections:

**Keep as-is:**
- List existing functionality that works without changes (UI components, external API calls, data display, etc.)

**Replace:**
- Map existing payment/transaction logic to the correct provider methods
- Map existing authentication to wallet-based identity if applicable
- Example: "Replace Stripe checkout with `sendBasicTransaction` via the Nimiq provider" or "Replace MetaMask connection with `eth_requestAccounts` via the injected `window.ethereum`"

**Add:**
- `@nimiq/mini-app-sdk` installation and provider initialization (if the app uses NIM features)
- Dev server configuration so the phone can reach the app over LAN
- Error handling for provider unavailability (app opened outside Nimiq Pay)
- Mobile-responsive adjustments if needed
- Fallbacks for any secure-context-only Web APIs identified in the audit

**Remove:**
- Third-party payment SDKs that are being replaced
- Authentication flows that are being replaced by wallet identity
- Any code that attempts direct key access or bypasses user confirmation

Present this plan to the developer. Do not execute until they approve.

## Phase 4 — Execute the conversion

Follow the approved plan. For each change:

1. Make the change
2. Explain what you changed and why
3. Flag anything that needs the developer's input

After all changes are complete, verify the connection:

1. Start the dev server with `npm run dev -- --host`
2. Tell the developer to open the Network URL in Nimiq Pay on their phone
3. Confirm the provider connects and the converted functionality works

## When the conversion is complete

Run the checklist: [checklist.md](checklist.md)
