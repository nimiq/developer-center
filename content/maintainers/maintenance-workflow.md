---
title: Maintenance Workflow
description: Operational workflows for running the site, adding docs, adding UI, refreshing generated docs, and validating changes in the Developer Center repository.
navigation: false
layout: docs
---

# Maintenance Workflow

Use this page when you need the operational steps for working in the Developer Center repository.

For conventions and guardrails, see [Best Practices](/maintainers/best-practices).

For page front matter and `_dir.yml` metadata, see [Front Matter Cheatsheet](/maintainers/front-matter-cheatsheet).

For page placement, landing-page ownership, module ordering, and sidebar file ownership, see [Navigation Map](/maintainers/navigation-map).

## What This Page Is For

Use this guide when you need to:

- run the site locally
- add or update docs pages
- add hidden internal pages
- add a new section or module
- change UI in the correct layer
- work with remote-backed data
- refresh generated docs
- prepare a change for merge

## Run the Site Locally

1. Use Node 22+.
2. Install dependencies:

```bash
pnpm install
```

3. Start the dev server:

```bash
pnpm dev
```

4. If port 3000 is already in use, run:

```bash
PORT=3001 HOST=127.0.0.1 pnpm dev
```

`pnpm install` runs `nuxt prepare`, so it may regenerate local Nuxt artifacts before you start the dev server.

## Add a Normal Doc

1. Put the markdown file in the correct folder under `content/`.
2. Add front matter for the page.
3. Use `navigation.title` or `navigation.order` only when placement needs to be explicit.
4. If you are creating a new section, add `_dir.yml` as well.
5. Preview the page locally with `pnpm dev`.

Use [Front Matter Cheatsheet](/maintainers/front-matter-cheatsheet) for the metadata shape and [Navigation Map](/maintainers/navigation-map) for where the page should live.

## Add a Hidden Internal Page

1. Create the markdown file under the correct folder.
2. Add normal page front matter.
3. Set:

```yaml
navigation: false
```

That keeps the page routable without including it in generated navigation.

## Add a New Section

1. Create a nested folder under the correct module in `content/`.
2. Add `_dir.yml`.
3. Set `title`, `icon`, and `navigation.order` if label or order matters.
4. Add the section's pages.
5. Preview the sidebar locally and confirm the new section appears in the right place.

Use [Navigation Map](/maintainers/navigation-map) when you need to confirm which files control section order and sidebar behavior.

## Add a New Module

1. Create a new top-level folder under `content/`.
2. Add the module overview page at `content/<module>/index.md`.
3. Add `_dir.yml` if the module or its sections need folder metadata.
4. Add the module entry to `DOC_MODULES` in `app/utils/modules.ts`.
5. Preview the site locally and confirm the new module appears in the global module bar and has the expected sidebar.

Use [Navigation Map](/maintainers/navigation-map) for the exact ownership points and [Front Matter Cheatsheet](/maintainers/front-matter-cheatsheet) for the metadata syntax.

## Add or Change UI

1. Decide which layer owns the change:
   - `content/` for authored content
   - `app/components/` for reusable local Vue UI
   - `app/app.config.ts` for shared app and component behavior
   - `app/assets/css/main.css` for global CSS, design tokens, and fonts
2. Reuse existing Nuxt UI and local components before creating a new pattern.
3. Add or update the component or styling in the correct layer.
4. Preview the affected pages locally.
5. Validate the change before you merge.

Use [Best Practices](/maintainers/best-practices) for the guardrails around comments, styling, and validation.

## Work with Remote-backed Data

1. Add or update a Nitro endpoint under `server/api/`.
2. Fetch the external data server-side with `$fetch`.
3. Cache the response in the endpoint instead of having docs pages fetch raw external data from the browser.
4. Point the UI or component at the local endpoint.

Current examples:

- `server/api/rpc-servers.get.ts`
- `server/api/blockchain-explorers.get.ts`

Both use `defineCachedEventHandler(...)` and fetch JSON from `nimiq/awesome`.

## Refresh Generated Docs

Use these commands when generated docs or their inputs need to be refreshed:

```bash
pnpm build:rpc
pnpm build:web-client
```

- `pnpm build:rpc` refreshes `data/openrpc-document.json` using `scripts/build-rpc.ts`
- `pnpm build:web-client` regenerates the web-client reference docs through Typedoc

Treat the scripts and their input data as the source of truth. Do not hand-maintain generated output when the script should be updated instead.

## Before You Merge

1. Confirm you changed the correct source-of-truth files.
2. Run the baseline checks:

```bash
pnpm lint
pnpm typecheck
pnpm build
```

3. Run `pnpm dev` and visually verify the affected pages if you changed content, navigation, styling, or UI.
4. Run `pnpm build:rpc` or `pnpm build:web-client` only if your change touched those generated-doc flows.
5. Confirm metadata and page placement are correct.
6. Confirm generated files are intentional.

Use [Best Practices](/maintainers/best-practices) for the repo guardrails and [Navigation Map](/maintainers/navigation-map) plus [Front Matter Cheatsheet](/maintainers/front-matter-cheatsheet) for the supporting reference details.
