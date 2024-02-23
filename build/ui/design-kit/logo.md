<script setup lang="ts">
  import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

# Nimiq Design Kit{.mt-0}

Welcome to the Nimiq design definition page. The identity has been redefined by carefully selecting colours, typography and shapes to show how powerful, useful & simple Nimiq products are.{.subline}

<Tags :tags="['Design']" />

## Logo History

The Nimiq logo has evolved over time, but the hexagon shape and the word mark have been constant elements in its design.

<img src="/assets/images/build/ui/design-kit/logo/nimiq-logo-history-dark.png" alt="The history of the logo of Nimiq" v-if="isDark" />

<img src="/assets/images/build/ui/design-kit/logo/nimiq-logo-history-light.png" alt="The history of the logo of Nimiq" v-else />

### Nimiq Logo

The Nimiq logo is a simple hexagon - with rounded corners and a subtle golden radial gradient. That's it. It's an ecosystem logo. In its simplicity, it leaves enough room for others to build on it. It's not just a logo in the traditional sense, it's a symbol - a template designed to be varied and reproduced.

<div flex="~ gap-32 justify-center wrap" mt-64>
<DesignKitItem label="Vertical variant" logo="i-nimiq:logos-nimiq-vertical-transparent-bg" size="96"/>
<DesignKitItem label="Horizontal variant" logo="i-nimiq:logos-nimiq-horizontal-transparent-bg" size="128"/>
</div>

### Icon

<div flex="~ gap-32 justify-center wrap" mt-64>
<DesignKitItem label="Hexagon" logo="i-nimiq:logos-nimiq" size="64"/>
</div>

## Color Palette

While a dark ultramarine embodies trust and reliability, a pale gold conveys value and warmth.

## Muli

Our typeface needs to convey our extraordinary commitment to simplicity, while remaining unique and recognisable. At the same time: Ensure the universality and open source nature of everything we do.

1. They recommend using [Bunny Fonts](https://fonts.bunny.net/family/mulish), a privacy friendly Google font provider.
2. You can also install them locally using `fontsource`:

::: code-group

```npm
npm i @fontsource/mulish
```
```yarn
yarn add @fontsource/mulish
```
```pnpm
pnpm add @fontsource/mulish
```

:::

## Fira Code

The Fira Code font is used for code snippets and can be downloaded from [Bunny Fonts](https://fonts.bunny.net/family/fira-code).

## Get started as a Nimiq designer.

Designers beware! To have a more detailed explanation on how to use the components such as using secondary colours, typographic and how to use shadows. You can find the [Nimiq Design Kit on Figma](https://www.figma.com/file/GU6cdS85S2v13QcdzW9v8Tav/NIMIQ-Style-Guide-(Oct-18)?type=design&mode=design&t=SugAiJEQEMPp2f4x-0)
