---
footer: false
---
<script setup lang="ts">
import DesignKitItem from '../../../.vitepress/theme/components/DesignKitItem.vue'
import Tags from '../../../.vitepress/theme/components/Tags.vue'
import { useDark, useClipboard } from '@vueuse/core'

const isDark = useDark()

const { copy: copyToClipboard, copied, isSupported: copyIsSupported } = useClipboard({ copiedDuring: 3000 })
</script>

Asset {.label .text-14 .text-neutral-800 .m-0}

# Nimiq Logo{.mb-0}

Welcome to the Nimiq design definition page. The identity has been redefined by carefully selecting colours, typography and shapes to show how powerful, useful & simple Nimiq products are.

<!-- <Tags mt-24 class="nq-raw" :tags="['Nimiq Brand Kit']" /> -->

## The History

The Nimiq logo has evolved gradually over time, but the hexagon shape and wordmark have been constant elements in its design.

<!-- <div border-base mt-24 rounded-6 py-32>
<img src="/assets/images/build/ui/design-kit/logo/nimiq-logo-history-dark.png" alt="The history of the logo of Nimiq" loading="lazy" hidden dark:block />

<img src="/assets/images/build/ui/design-kit/logo/nimiq-logo-history-light.png" alt="The history of the logo of Nimiq" block dark:hidden />
</div> -->

<div border-base mt-24 rounded-6 py-32 grid="~ cols-2">
  <svg width="62" height="56" viewBox="0 0 62 56" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M46.1865 0.5H15.1435L0 27.84L15.1435 55.18H46.1865L61.33 27.84L46.1865 0.5ZM33.5048 43.4633V49.3217H28.7722V44.2442C25.9324 44.2442 22.5258 42.6847 20.254 40.3387L23.4717 35.6522C25.9324 37.605 28.0153 38.5808 30.286 38.5808C32.9368 38.5808 34.0727 37.4089 34.0727 35.2612C34.0727 30.1838 21.3899 30.1838 21.3899 21.5907C21.3899 16.5132 24.4186 13.1936 28.9612 12.2178V6.74933H33.6937V11.8268C36.7224 12.2178 38.9942 13.7796 40.887 15.7323L37.1003 20.0289C35.5887 18.0761 34.077 17.4902 31.9899 17.4902C29.7224 17.4902 28.2042 18.466 28.2042 20.6093C28.5832 25.2957 41.455 24.9058 41.455 34.2787C41.455 38.9663 38.6152 42.6769 33.8827 43.6527L33.5048 43.4633Z" fill="#F6AE2D"/>
</svg>
<div i-nimiq:logos-nimiq w-62 h-56 />
<div
  relative h-3 col-span-2 mt-26.5 w-full
  style="--c: var(--nq-neutral-400); background: linear-gradient(90deg, rgba(var(--c) / 0) 0%, rgb(var(--c) / 0.7) 15%, rgb(var(--c)) 50%, rgb(var(--c) / 0.7) 85%, rgba(var(--c) / 0) 100%)"
/>

<div h-14 w-14 bg-neutral-400 rounded-full mt--8.5 />
<div h-14 w-14 bg-neutral-400 rounded-full mt--8.5 />

<div mt-16 text-18 font-bold>2017</div>
<div mt-16 text-18 font-bold>2018</div>

</div>

## The Logo

The Nimiq logo is a plain hexagon – with rounded corners and a subtle golden radial gradient. That’s it. It’s an ecosystem-first logo. In its simplicity, it leaves enough room for others to build on. It’s not just a logo in the traditional sense, but rather a symbol – a boilerplate intended to be varied and reproduced.

<div grid="~ cols-1 md:cols-2 gap-32 justify-center" mt-24>

  <DesignKitItem label="Light horizontal variant" logo="i-nimiq:logos-nimiq-vertical" :size="96"/>

  <DesignKitItem label="Light Horizontal variant" logo="i-nimiq:logos-nimiq-horizontal" :size="128"/>

  <DesignKitItem label="Dark vertical variant" logo="i-nimiq:logos-nimiq-white-vertical" dark :size="96"/>

  <DesignKitItem label="Dark horizontal variant" logo="i-nimiq:logos-nimiq-white-horizontal" dark :size="128"/>

</div>

<div grid="~ cols-1 md:cols-2 gap-32" f-my-xl>
  <div md-pb-64>

  ### Logo Mark

  Our logo mark is an hexagon with a rounded corners and a subtle radial gold gradient

  </div>

  <DesignKitItem label="Gold hexagon" logo="i-nimiq:logos-nimiq" :size="96"/>
</div>

### Clear space

To ensure that the logo has enough room to breathe, we apply a fixed clear space around it. This space  should always be safeguarded, unless there is no way to avoid encroaching upon it.

For the horizontal variant the clear space is the size of the letter N in our wordmark.

<img mb-12 ml-0 border-base rounded-6 bg-white src="/assets/images/build/ui/design-kit/logo/nimiq-with-n.png" alt="The history of the logo of Nimiq" />

Horizontal logo

<div grid="~ rows-[215px_215px] md:rows-[215px] md:cols-2 gap-32" class="nq-raw" mt-24>

<div flex="~ justify-center" border-base rounded-6 bg-white>
  <img src="/assets/images/build/ui/design-kit/logo/nimiq-hexagon-spacing-1.png" alt="Space around the Nimiq Hexagon" />
</div>

<div flex="~ justify-center" border-base rounded-6 bg-white>
  <img src="/assets/images/build/ui/design-kit/logo/nimiq-hexagon-spacing-2.png" alt="Space around the Nimiq vertical logo"  />
</div>

</div>

## Special use cases

It´s very unlikely you´ll need these, but we like to cover all the bases

### Nimiq Logo

Use only where space constraints don´t allow use of the horizontal logo.

### Small-scale logo

A specific small horizontal logo to use at a size between ??px and ??px wide. And the small vertical logo to use at a size between ??px and ??px wide.  The small logo mark should be used at a size between ??px and ??px wide.

### Logo extention

 In case of logo-extensions, we use a white base and apply an opacity-gradient from the top-right edge to the bottom left edge of the shape, with a color-stop at about 60%.

<div border-base mt-24 rounded-6 py="8 md:32">
<img max-w-520 mx-auto px-48 my="16 md:0" src="/assets/images/build/ui/design-kit/logo/build-your-nim-logo.png" alt="Visual guide on how to build your own logo with the Nimiq Hexagon" />
</div>

## Backgrounds

These are different versions of the logo to use depending on your background.

### Full-color logo

Our go-to version. Use it only with these backgrounds.

<div grid="~ rows-[215px_215px] md:rows-[215px] md:cols-2 gap-32" class="nq-raw" mt-24>

<div flex="~ justify-center items-center" border-base rounded-6 bg-white relative>
  <div i-nimiq:logos-nimiq-horizontal text-128 />
  <div text-neutral-700 absolute inset-x-16 bottom-16 flex="~ justify-between" lh-none>
    <span>White</span>
    <div>
      <Toast v-if="copyIsSupported" v-model="copied" title="Copied to clipboard!" category="success">
        <button @click="copyToClipboard('#FFFFFF')">#FFFFFF</button>
      </Toast>
      <span v-else>#FFFFFF</span>
    </div>
  </div>
</div>

<div flex="~ justify-center items-center" border-base rounded-6 bg-gradient-neutral relative>
  <div i-nimiq:logos-nimiq-white-horizontal text-128 />
  <div text-neutral-600 absolute inset-x-16 bottom-16 flex="~ justify-between" lh-none>
    <span>Dark Blue</span>
    <div>
      <Toast v-if="copyIsSupported" v-model="copied" title="Copied to clipboard!" category="success">
        <button @click="copyToClipboard('#1F2348')">#1F2348</button>
      </Toast>
      <span v-else>#1F2348</span>
    </div>
  </div>
</div>

</div>

### One-color logo

You've got one option: that’s white. Use this only on photographs and color backgrounds within the Nimiq color palette. You can find those gradiants in the Nimig Design Kit in the figma link below. On aubergine backgrounds, we strongly prefer to use the full-color logo. If there are design limitations, then the logo should appear in white on aubergine.

<div grid="~ cols-2 md:cols-3 gap-16 justify-center" mt-24 class="nq-raw">

<div flex="~ justify-center items-center" border-subtle rounded-6 relative aspect-square>
  <div i-nimiq:logos-nimiq-horizontal-mono text="128 white" z-2 />
  <img src="/assets/images/build/ui/design-kit/logo/island.png" alt="A paradisiacal beach seen from the top" rounded-6 border-subtle-light absolute inset-0 aspect-square not-zoomable />
</div>

<div flex="~ justify-center items-center" border-subtle rounded-6 relative aspect-square bg="#EC991C">
  <div i-nimiq:logos-nimiq-horizontal-mono text="128 white" z-1 />
</div>

<div flex="~ justify-center items-center" border-subtle rounded-6 relative aspect-square bg-gradient-red>
  <div i-nimiq:logos-nimiq-horizontal-mono text="128 white" z-1 />
</div>

<div flex="~ justify-center items-center" border-subtle rounded-6 relative aspect-square bg-gradient-orange>
  <div i-nimiq:logos-nimiq-horizontal-mono text="128 white" z-1 />
</div>

<div flex="~ justify-center items-center" border-subtle rounded-6 relative aspect-square bg-gradient-blue>
  <div i-nimiq:logos-nimiq-horizontal-mono text="128 white" z-1 />
</div>

<div flex="~ justify-center items-center" border-subtle rounded-6 relative aspect-square bg-gradient-green>
  <div i-nimiq:logos-nimiq-horizontal-mono text="128 white" z-1 />
</div>

</div>

### Usage

The don'ts with the Nimiq logo

<div grid="~ cols-2 md:cols-3 gap-16 justify-center" mt-24 class="nq-raw">

<div>
<div flex="~ justify-center items-center" border-subtle rounded-6 relative aspect-square bg-white>
  <img src="/assets/images/build/ui/design-kit/logo/nonos/nimiq-horizontal-outline-ugly.svg" alt="An example on how to not use the Nimiq Logo malformating it with shadows or only outlines" rounded-6 not-zoomable />
</div>
<div mt-16 flex="~ gap-8">
  <div bg-gradient-red h-14 w-14 p-3 mt-4 rounded-full>
    <div class="i-nimiq:cross-bold" text="8 white" />
  </div>
  <p text="neutral-900 14 pretty">Don't alter, crop, skew, Outline, distort or recreate the logo in any way</p>
</div>
</div>

<div>
<div flex="~ justify-center items-center" border-subtle rounded-6 relative aspect-square>
  <div i-nimiq:logos-nimiq-horizontal text-128 z-1 />
  <img src="/assets/images/build/ui/design-kit/logo/nonos/grumpy-cat.png" alt="An example on how to not use the Nimiq Logo making it unreadable" rounded-6 absolute inset-0 aspect-square not-zoomable />
</div>
<div mt-16 flex="~ gap-8">
  <div bg-gradient-red h-14 w-14 p-3 mt-4 rounded-full>
    <div class="i-nimiq:cross-bold" text="8 white" />
  </div>
  <p text="neutral-900 14 pretty">Don't use the full/color logo on an unapproved background color or low contrast photo</p>
</div>
</div>

<div>
<div flex="~ justify-center items-center" border-subtle rounded-6 relative aspect-square bg-white >
  <img src="/assets/images/build/ui/design-kit/logo/nonos/nimiq-only-letters.svg" alt="An example on how not use the Nimiq Logo using only letters" not-zoomable rounded-6 />
</div>
<div mt-16 flex="~ gap-8">
  <div bg-gradient-red h-14 w-14 p-3 mt-4 rounded-full>
    <div class="i-nimiq:cross-bold" text="8 white" />
  </div>
  <p text="neutral-900 14 pretty">Don't display the Nimiq name without the logo mark</p>
</div>
</div>

<div>
<div flex="~ justify-center items-center" border-subtle rounded-6 relative aspect-square bg="#EC991C">
  <img src="/assets/images/build/ui/design-kit/logo/nonos/nimiq-only-letters.svg" alt="An example on how to not use the Nimiq Logo only showing letters" rounded-6 ml-24 not-zoomable />
</div>
<div mt-16 flex="~ gap-8">
  <div bg-gradient-red h-14 w-14 p-3 mt-4 rounded-full>
    <div class="i-nimiq:cross-bold" text="8 white" />
  </div>
  <p text="neutral-900 14 pretty">Don't use the full-color logo on the core color backgrounds</p>
</div>
</div>

<div>
<div flex="~ justify-center items-center" border-base rounded-6 relative aspect-square>
    <div i-nimiq:logos-nimiq text-80 z-1 rotate-69 />
</div>
<div mt-16 flex="~ gap-8">
  <div bg-gradient-red h-14 w-14 p-3 mt-4 rounded-full>
    <div class="i-nimiq:cross-bold" text="8 white" />
  </div>
  <p text="neutral-900 14 pretty">Don't change the orientation of the logo mark</p>
</div>
</div>

<div>
<div flex="~ justify-center items-center" border-base rounded-6 relative aspect-square bg-white>
  <img src="/assets/images/build/ui/design-kit/logo/nonos/nimiq-blue.svg" alt="A grumpy cat" rounded-6 not-zoomable />
</div>
<div mt-16 flex="~ gap-8">
  <div bg-gradient-red h-14 w-14 p-3 mt-4 rounded-full>
    <div class="i-nimiq:cross-bold" text="8 white" />
  </div>
  <p text="neutral-900 14 pretty">Don't change the logo color</p>
</div>
</div>

</div>

<!-- ### Icon

<div flex="~ gap-32 justify-center wrap" f-my-xl>
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

The Fira Code font is used for code snippets and can be downloaded from [Bunny Fonts](https://fonts.bunny.net/family/fira-code). -->

## Get started as a Nimiq designer

Designers beware! For a more detailed explanation of how to use the components, such as using secondary colours, typography and how to use shadows. Click on the link below to see the [Nimiq Design Kit on Figma](https://www.figma.com/file/GU6cdS85S2v13QcdzW9v8Tav/NIMIQ-Style-Guide-(Oct-18)?type=design&mode=design&t=SugAiJEQEMPp2f4x-0).

  <a href="https://www.figma.com/file/GU6cdS85S2v13QcdzW9v8Tav/NIMIQ-Style-Guide-(Oct-18)?type=design&mode=design&t=SugAiJEQEMPp2f4x-0" target="_blank" class="raw nq-arrow" mt-16 nq-pill bg-blue-400 text-blue="!">Explore in Figma</a>
