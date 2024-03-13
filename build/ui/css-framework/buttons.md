<script>
import "/assets/css/css-framework.css"
</script>

# Buttons

The Nimiq's CSS Framework provides a set of buttons that can be used in your web application. The buttons are available in different colors and sizes.

## Large buttons

::: raw
<div flex flex-col mt-16>
  <div bg-white p-16 rounded-t-8 flex flex-col>
    <button class="nq-button">Min width</button>
    <button class="nq-button">Regular button</button>
    <button class="nq-button">Button with lots of text</button>
    <button class="nq-button" disabled>Disabled button</button>
  </div>

  <div bg-blue p-16 flex flex-col rounded="b-8 t-8 dark:t-0">
    <button class="nq-button light-blue inverse">Inverse button</button>
    <button class="nq-button light-blue inverse" disabled>Inverse button</button>
  </div>
</div>
:::

```html
<button class="nq-button">Min width</button>
<button class="nq-button">Regular button</button>
<button class="nq-button">Button with lots of text</button>
<button class="nq-button" disabled>Disabled button</button>

<button class="nq-button light-blue inverse">Inverse button</button>
<button class="nq-button light-blue inverse" disabled>Inverse button</button>
```

### With colors

::: raw
<button class="nq-button light-blue" mt-16>Light-blue button</button>
<button class="nq-button green">Green button</button>
<button class="nq-button orange">Orange button</button>
<button class="nq-button red">Red button</button>
<button class="nq-button gold">Gold button</button>
:::

```html
<button class="nq-button light-blue">Light-blue button</button>
<button class="nq-button green">Green button</button>
<button class="nq-button orange">Orange button</button>
<button class="nq-button red">Red button</button>
<button class="nq-button gold">Gold button</button>
```

## Small buttons

<div flex flex-col mt-16>
  <div bg-white p-16 rounded-t-8 flex flex-wrap gap-8 justify-center>
    <button class="nq-button-s">Small button</button>
    <button class="nq-button-s" disabled>Disabled small button</button>
  </div>

  <div bg-darkblue p-16 flex flex-wrap gap-8 justify-center rounded="b-8 t-8 dark:t-0">
    <button class="nq-button-s inverse">Inverse small button</button>
    <button class="nq-button-s inverse" disabled>Inverse disabled</button>
  </div>
</div>

```html
<button class="nq-button-s">Small button</button>
<button class="nq-button-s" disabled>Disabled small button</button>

<button class="nq-button-s inverse">Inverse small button</button>
<button class="nq-button-s inverse" disabled>Inverse disabled</button>
```

### With colors (or Pill buttons)

<div flex flex-col mt-16>
  <div bg-white p-16 rounded-t-8 flex flex-wrap gap-8>
    <button class="nq-button-pill" w-max>Pill button</button>
  </div>

  <div bg-white p-16 flex flex-wrap gap-8>
    <button class="nq-button-pill light-blue">Light-blue button</button>
    <button class="nq-button-pill green">Green button</button>
    <button class="nq-button-pill orange">Orange button</button>
    <button class="nq-button-pill red">Red button</button>
    <button class="nq-button-pill gold">Gold button</button>
  </div>

  <div bg-darkblue p-16 flex flex-wrap gap-8 rounded="b-8 t-8 dark:t-0">
    <button class="nq-button-pill inverse">Inverse button</button>
    <button class="nq-button-pill light-blue inverse">Light-blue button</button>
    <button class="nq-button-pill green inverse">Green button</button>
    <button class="nq-button-pill orange inverse">Orange button</button>
    <button class="nq-button-pill red inverse">Red button</button>
    <button class="nq-button-pill gold inverse">Gold button</button>
  </div>
</div>
