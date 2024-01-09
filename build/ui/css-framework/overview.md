---
prev: false
---

:::raw
# The Nimiq's CSS framework

Nimiq's CSS framework is a set of styles and components that can be used to build Nimiq apps.
:::

## Installation

You can install the Nimiq's CSS framework using your favorite package manager.

::: code-group

```sh [npm]
npm add @nimiq/style
```

```sh [pnpm]
pnpm add @nimiq/style
```

```sh [yarn]
yarn add @nimiq/style
```

```sh [bun]
bun add @nimiq/style
```

:::

Then import the style into your CSS or module files:

```css
@import 'node_modules/@nimiq/style/nimiq-style.min.css';
```

To use icons, you need to link to the icon sprite:

```css
<svg class="nq-icon">
    <use xlink:href="node_modules/@nimiq/style/nimiq-style.icons.svg#nq-hexagon"/>
</svg>
```

### From CDN

You can also link to the Nimiq Style CSS directly in your HTML:

```html
<link href="https://cdn.jsdelivr.net/npm/@nimiq/style@v0.8.5/nimiq-style.min.css" rel="stylesheet">
```

Note: To use icons, you need to host and serve [the nimiq-style.icons.svg](https://cdn.jsdelivr.net/npm/@nimiq/style@v0.8.5/nimiq-style.icons.svg) file yourself, because cross-origin requests of SVG sprites are not allowed by browsers.
