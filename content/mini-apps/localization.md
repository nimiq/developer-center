---
title: Localization in Mini Apps
description: Match your mini app's language to the user's Nimiq Pay setting using window.nimiqPay.language
icon: i-tabler:language
navigation:
  title: Localization
  order: 8
---

# Localization in Mini Apps

Nimiq Pay injects the user's selected language into every mini app before any script runs. The value is available at `window.nimiqPay.language` as an ISO 639-1 two-letter code (`en`, `es`, `de`, `fr`, `pt`). Use it instead of `navigator.language` so your app matches the user's Nimiq Pay language, not the device locale.

Outside Nimiq Pay (e.g. during local development in a browser), `window.nimiqPay` is `undefined`. Always use optional chaining when reading it.

For the full API details, see the [User Language section](/mini-apps/#user-language) on the overview page.

## Reading the value

Use a three-level fallback: Nimiq Pay language, then device locale, then English.

```javascript
function getLanguage() {
  const nimiqLang = window.nimiqPay?.language
  if (nimiqLang)
    return nimiqLang

  const deviceLang = navigator.language.split('-')[0]
  if (deviceLang)
    return deviceLang

  return 'en'
}
```

`navigator.language` returns a BCP 47 tag like `en-US`. The `.split('-')[0]` extracts the two-letter language code. The final fallback to `'en'` covers the case where both are unavailable.

## TypeScript type declaration

TypeScript does not know about `window.nimiqPay` by default. Add a declaration file to your project to avoid type errors:

```ts
// nimiq-pay.d.ts
declare global {
  interface Window {
    nimiqPay?: {
      readonly language?: string
    }
  }
}
export {}
```

Place this file anywhere in your project's source directory. TypeScript picks it up automatically. No import needed.

## Translations without a library

For most mini apps, a plain object map is enough. No i18n library is needed.

Define your translations as a record keyed by language code. Nimiq Pay currently supports five languages:

```javascript
const translations = {
  en: { greeting: 'Hello', tagline: 'Nimiq Pay mini-app starter' },
  es: { greeting: 'Hola', tagline: 'Plantilla de mini-app para Nimiq Pay' },
  de: { greeting: 'Hallo', tagline: 'Nimiq Pay Mini-App Starter' },
  fr: { greeting: 'Bonjour', tagline: 'Starter de mini-app Nimiq Pay' },
  pt: { greeting: 'Olá', tagline: 'Modelo de mini-app para Nimiq Pay' },
}

function getTranslations(lang) {
  return translations[lang]
    ?? translations[navigator.language.split('-')[0]]
    ?? translations.en
}

// Usage
const lang = getLanguage()
const text = t(lang)
console.log(text.greeting) // "Hello", "Hola", etc.
```

## Framework examples

The examples below show how to make the language value reactive in Vue, React, and Svelte. These are the frameworks covered in the [starter tutorials](/mini-apps/mini-app-tutorial). If you use a different framework, adapt the same pattern: read `window.nimiqPay?.language` once at init, apply the fallback chain, and use the result to index your translations.

::code-group

```vue [Vue (src/App.vue)]
<script setup lang="ts">
const translations = {
  en: { greeting: 'Hello', tagline: 'Nimiq Pay mini-app starter' },
  es: { greeting: 'Hola', tagline: 'Plantilla de mini-app para Nimiq Pay' },
  de: { greeting: 'Hallo', tagline: 'Nimiq Pay Mini-App Starter' },
  fr: { greeting: 'Bonjour', tagline: 'Starter de mini-app Nimiq Pay' },
  pt: { greeting: 'Olá', tagline: 'Modelo de mini-app para Nimiq Pay' },
}

const t = translations[window.nimiqPay?.language]
  ?? translations[navigator.language.split('-')[0]]
  ?? translations.en
</script>

<template>
  <h1>{{ t.greeting }}</h1>
  <p>{{ t.tagline }}</p>
</template>
```

```js [React (src/App.jsx)]
const translations = {
  en: { greeting: 'Hello', tagline: 'Nimiq Pay mini-app starter' },
  es: { greeting: 'Hola', tagline: 'Plantilla de mini-app para Nimiq Pay' },
  de: { greeting: 'Hallo', tagline: 'Nimiq Pay Mini-App Starter' },
  fr: { greeting: 'Bonjour', tagline: 'Starter de mini-app Nimiq Pay' },
  pt: { greeting: 'Olá', tagline: 'Modelo de mini-app para Nimiq Pay' },
}

const t = translations[window.nimiqPay?.language]
  ?? translations[navigator.language.split('-')[0]]
  ?? translations.en

export default function App() {
  return (
    <>
      <h1>{t.greeting}</h1>
      <p>{t.tagline}</p>
    </>
  )
}
```

```bash [Svelte (src/App.svelte)]
<script>
const translations = {
  en: { greeting: 'Hello', tagline: 'Nimiq Pay mini-app starter' },
  es: { greeting: 'Hola', tagline: 'Plantilla de mini-app para Nimiq Pay' },
  de: { greeting: 'Hallo', tagline: 'Nimiq Pay Mini-App Starter' },
  fr: { greeting: 'Bonjour', tagline: 'Starter de mini-app Nimiq Pay' },
  pt: { greeting: 'Olá', tagline: 'Modelo de mini-app para Nimiq Pay' },
}

const t = translations[window.nimiqPay?.language]
  ?? translations[navigator.language.split('-')[0]]
  ?? translations.en
</script>

<h1>{t.greeting}</h1>
<p>{t.tagline}</p>
```

::

## Using an i18n library

For apps with many strings or complex pluralization, pass `window.nimiqPay?.language` as the locale to your i18n library of choice (e.g. [`vue-i18n`](https://vue-i18n.intlify.dev/), [`react-i18next`](https://react.i18next.com/), [`svelte-i18n`](https://github.com/kaisermann/svelte-i18n)) and set `'en'` as the fallback locale.
