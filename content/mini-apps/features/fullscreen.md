---
title: Fullscreen in Mini Apps
description: Let users expand a Mini App with Nimiq Pay's fullscreen host API
icon: i-tabler:arrows-maximize
navigation:
  title: Fullscreen
  order: 4
---

# Fullscreen in Mini Apps

Nimiq Pay can show the current Mini App in immersive fullscreen without reloading its page. This controls the native WebView presentation; it is separate from the browser's HTML or video fullscreen APIs.

`@nimiq/mini-app-sdk` 0.2.3 and later exports helpers for the same host methods:

```ts
import { exitFullscreen, getFullscreen, onFullscreenChange, requestFullscreen } from '@nimiq/mini-app-sdk'
```

The examples below use `window.nimiqPay` directly, so they also work without the SDK. The helpers call the matching injected methods.

## Enter fullscreen

Give users a clear control such as **Go Fullscreen**, then call `window.nimiqPay.requestFullscreen()` when they use it. Your Mini App owns this request. Nimiq Pay does not show another approval prompt, and users can leave through the native exit button or Android Back.

```html
<button id="go-fullscreen">Go Fullscreen</button>
```

```js
const host = window.nimiqPay
const goButton = document.querySelector('#go-fullscreen')

if (host?.requestFullscreen && goButton) {
  goButton.addEventListener('click', async () => {
    try {
      await host.requestFullscreen()
    }
    catch (error) {
      console.error('Could not enter fullscreen', error)
    }
  })
}
```

Check for the method before showing the control. It is unavailable in a regular browser or an older Nimiq Pay version.

## Read state and exit

| Method | Result |
| --- | --- |
| `requestFullscreen()` | `Promise<void>`; enters fullscreen |
| `exitFullscreen()` | `Promise<void>`; leaves fullscreen |
| `getFullscreen()` | `Promise<boolean>`; reads the applied native state |
| `onFullscreenChange(listener)` | Calls `listener(enabled: boolean)` on changes and returns an unsubscribe function |

Subscribe to changes so your UI follows native exits. The subscription does not supply an initial value; call `getFullscreen()` when you need one.

```js
const host = window.nimiqPay

if (host?.onFullscreenChange && host?.getFullscreen) {
  const stopWatching = host.onFullscreenChange((enabled) => {
    console.log('Fullscreen:', enabled)
  })

  try {
    console.log('Initially fullscreen:', await host.getFullscreen())
  }
  catch (error) {
    console.error('Could not read fullscreen state', error)
  }

  // Call stopWatching() when this UI is removed.
}

// Call window.nimiqPay.exitFullscreen() to leave from your own UI.
```

Calls can reject when the WebView is hidden or the host cannot apply fullscreen. In particular, `getFullscreen()` does not return `false` for a hidden WebView. Handle rejection and use change events instead of repeatedly polling.

Fullscreen also ends when Nimiq Pay backgrounds or hides the WebView, closes it, or the Mini App navigates to another origin. It does not re-enter automatically when the Mini App becomes visible again. The page, cookies, and history stay loaded while fullscreen changes.
