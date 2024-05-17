# Nimiq Typography

A CSS stylesheet for Nimiq's typography. Inspired by the [Tailwind CSS Typography plugin](https://github.com/tailwindlabs/tailwindcss-typography).

## Installation

::: code-group

```sh [npm]
npm install nimiq-css
```

```sh [pnpm]
pnpm add nimiq-css
```

```sh [yarn]
yarn add nimiq-css
```

:::

## Usage

Now you can use the `prose` class to add sensible typography styles to any vanilla HTML:

```html
<article class="prose">
  <h1>Your awesome content</h1>
  <p>...</p>
</article>
```

### Undoing typography styles

If you have a block of markup embedded in some content that shouldn’t inherit the prose styles, use the `raw` class to sandbox it:

```html
<article class="prose">
  <h1>My Heading</h1>
  <p>...</p>

  <div class="raw">
    <!-- Some example or demo that needs to be prose-free -->
  </div>

  <p>...</p>
  <!-- ... -->
</article>
```

## Dark mode

Adding a `dark` class to any preceding parent element will automatically adjust the typography styles to use colors that work well on dark backgrounds.

```html
<body class="dark">
  <article class="prose">
    <h1>Your awesome content</h1>
    <p>...</p>
  </article>
</body>
```

> The CSS styles will not update the background color, you need to handle that yourself.

## Demo

You can see a demo of the typography styles in the [demo.md](./demo.md) file.
