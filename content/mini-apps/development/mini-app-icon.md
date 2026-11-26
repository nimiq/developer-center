---
title: Mini App Icon
description: How Nimiq Pay finds and caches your Mini App icon, and how to set it with a nimiq/awesome listing
icon: i-tabler:photo
navigation:
  title: Mini App Icon
  order: 3
---

# Your Mini App Icon in Nimiq Pay

Nimiq Pay shows your Mini App icon on the Mini Apps screen, on the Mini Apps button of the home screen, and at the top of approval sheets. It takes the icon from your nimiq/awesome listing or from your site, and remembers what it found on the device.

## Where the icon comes from

Nimiq Pay uses the first of these sources that applies:

1. The `logo` of your Mini App in [nimiq/awesome](https://github.com/nimiq/awesome). If you have one, Nimiq Pay skips the sources below.
2. An icon link in your page. Nimiq Pay downloads your page and picks an icon from its `<link>` tags, as described in [Icons from your page](#icons-from-your-page).
3. `/favicon.ico` on your origin, for example `https://your-app.com/favicon.ico`. Nimiq Pay shows it while it checks your page for the first time, and keeps it when your page has no icon link.

If the image fails to load, Nimiq Pay falls back twice:

4. Google's favicon service for your origin.
5. A generic globe icon, when Google has no icon either.

Nimiq Pay shows Mini App icons in a circle, so it cuts off the corners of a square image.

## Set your icon with a listing logo

A `logo` in nimiq/awesome is the most reliable way to control your icon. Nimiq Pay uses it on every device without checking your page, and picks up a new logo the next time it starts.

To add one:

1. Add your logo as an SVG file in `src/data/assets/mini-apps/`. Name it `{developer}-{name}.svg` in lowercase with hyphens, where `{developer}` is your GitHub handle without the `@` and `{name}` is your Mini App name. For `@Eligioo` and the Mini App Nimtris, that is `eligioo-nimtris.svg`. Use at least two colors: if the SVG has only one fill or stroke color (a single gradient counts as one), the awesome build replaces it with `currentColor`, and Nimiq Pay shows the logo in black.
2. In `src/data/nimiq-mini-apps.json`, set `logo` on your entry to the file's relative path. If your Mini App is not listed yet, add the whole entry in alphabetical order:

   ```json
   {
     "name": "Nimtris",
     "url": "https://nimtris.com",
     "type": "nimiq",
     "category": "Games",
     "description": "Block puzzle game that rewards your high scores with NIM while playing",
     "logo": "./assets/mini-apps/eligioo-nimtris.svg",
     "source": "https://github.com/eligioo/nimtris",
     "developer": "@Eligioo",
     "featured": false
   }
   ```

3. Run `pnpm install` and then `pnpm run build` in the `src` folder. The build fails if the logo is not an SVG, the file is missing, or the file name does not follow the pattern.
4. Open a pull request with the [Mini App template](https://github.com/nimiq/awesome/blob/main/.github/PULL_REQUEST_TEMPLATE/mini-app.md). It asks for a simple icon that works at small sizes.

After the merge, the repository's CI publishes an updated list. Nimiq Pay downloads that list each time it starts, and GitHub may serve a copy up to 5 minutes old. Your logo shows up the first time Nimiq Pay starts after both have happened.

Nimiq Pay matches the logo to the full `url` of your entry and ignores a trailing slash. Keep serving `/favicon.ico` on your origin too: links to other pages of your Mini App can still fall back to it.

## Icons from your page

Without a listing logo, Nimiq Pay checks your page the first time your Mini App appears on the Mini Apps screen or opens. It sends a plain GET request for the Mini App URL, reads the HTML it gets back, and picks the icon like this:

1. The first `<link rel="apple-touch-icon">` or `<link rel="apple-touch-icon-precomposed">`. Its `sizes` attribute is ignored.
2. If there is none, the `<link rel="icon">` with the largest `sizes`. `sizes="any"` beats every number, and a link without `sizes` counts as the smallest. On a tie, the first link wins. `rel="shortcut icon"` counts as an icon link.
3. If there is no icon link, `/favicon.ico`.

For example:

```html
<head>
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" sizes="any">
</head>
```

A few details affect what the check finds:

- It does not run JavaScript. Icon links added on the client are invisible to it, so put them in the HTML your server sends.
- It ignores the web app manifest. An icon listed only in `manifest.json` is not used.
- It only accepts `http` and `https` icon URLs. If the link it picks has a `data:` URL, it uses `/favicon.ico` and does not try your other icon links.
- It follows up to 5 redirects and gives each request 5 seconds. If your Mini App URL redirects to another host or path, use an absolute icon URL.
- Nimiq Pay keeps one icon per origin, so Mini Apps on the same origin share it.

Approval sheets are drawn natively. The Google and globe fallbacks don't apply there, and an SVG only shows when its URL ends in `.svg`. A PNG `apple-touch-icon` works on every screen.

## Caching and updates

Nimiq Pay stores the icon URL it found for your origin on the device and does not check your page again. Later changes on your site are not picked up:

- If you add or change an icon link, devices that already checked your page keep the old URL.
- If your server answers the check with an error status, such as a 403 from a bot check, Nimiq Pay uses `/favicon.ico`. Make sure a plain GET request to your Mini App URL returns your page with status 200.
- Nimiq Pay stores the URL, not the image. You can replace the file at the same URL. If you rename it, the stored link breaks and Nimiq Pay falls back to Google's copy. Don't use file names that change with every build, such as hashed asset names, for the icon you link.

The stored icon is only cleared when the user reinstalls Nimiq Pay or clears its data. A listing logo has none of these problems, because Nimiq Pay downloads the list again each time it starts.

## Google's favicon service

When your icon fails to load, Nimiq Pay asks Google for your origin's icon at 128 pixels. To see what Google returns for your origin, open:

```
https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&drop_404_icon=true&url=https://your-app.com&size=128
```

Google serves its own cached copy of your favicon. It can be missing for a new domain or out of date after you change your icon, and Nimiq Pay cannot refresh it. If Google has no icon, Nimiq Pay shows the globe.
