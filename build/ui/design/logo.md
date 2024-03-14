<script setup lang="ts">
import DesignKitItem from '../../../.vitepress/theme/components/DesignKitItem.vue'
import Tags from '../../../.vitepress/theme/components/Tags.vue'
import { useDark, useClipboard } from '@vueuse/core'

const isDark = useDark()

const { copy: copyToClipboard, copied, isSupported: copyIsSupported } = useClipboard({ copiedDuring: 3000 })
</script>

# Nimiq Logo{.mb-0}

Welcome to the Nimiq design definition page. The identity has been redefined by carefully selecting colours, typography and shapes to show how powerful, useful & simple Nimiq products are.

<Tags mt-24 class="raw" :tags="['Nimiq Brand Kit']" />

## The History

The Nimiq logo has evolved gradually over time, but the hexagon shape and wordmark have been constant elements in its design.

<div border-base mt-24 rounded-6 py-32>
<img src="/assets/images/build/ui/design-kit/logo/nimiq-logo-history-dark.png" alt="The history of the logo of Nimiq" v-if="isDark" />

<img src="/assets/images/build/ui/design-kit/logo/nimiq-logo-history-light.png" alt="The history of the logo of Nimiq" v-else />
</div>

## The Logo

The Nimiq logo is a plain hexagon – with rounded corners and a subtle golden radial gradient. That’s it. It’s an ecosystem-first logo. In its simplicity, it leaves enough room for others to build on. It’s not just a logo in the traditional sense, but rather a symbol – a boilerplate intended to be varied and reproduced.

<div grid="~ cols-1 md:cols-2 gap-32 justify-center" mt-24>

  <DesignKitItem label="Light horizontal variant" logo="i-nimiq:logos-nimiq-vertical" :size="96"/>

  <DesignKitItem label="Light Horizontal variant" logo="i-nimiq:logos-nimiq-horizontal" :size="128"/>

  <DesignKitItem label="Dark vertical variant" logo="i-nimiq:logos-nimiq-white-vertical" dark :size="96"/>

  <DesignKitItem label="Dark horizontal variant" logo="i-nimiq:logos-nimiq-white-horizontal" dark :size="128"/>

</div>

<div grid="~ cols-1 md:cols-2 gap-32" mt-64>
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

<div grid="~ rows-[215px_215px] md:rows-[215px] md:cols-2 gap-32" class="raw" mt-24>

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

<div grid="~ rows-[215px_215px] md:rows-[215px] md:cols-2 gap-32" class="raw" mt-24>

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

<div grid="~ cols-2 md:cols-3 gap-16 justify-center" mt-24 class="raw">

<div flex="~ justify-center items-center" border-subtle rounded-6 relative aspect-square>
  <div i-nimiq:logos-nimiq-horizontal-mono text="128 white" z-1 />
  <img src="/assets/images/build/ui/design-kit/logo/island.png" alt="A paradisiacal beach seen from the top" rounded-6 border-subtle-light absolute inset-0 aspect-square />
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

<div grid="~ cols-2 md:cols-3 gap-16 justify-center" mt-24 class="raw">

<div>
<div flex="~ justify-center items-center" border-subtle rounded-6 relative aspect-square bg-white>
  <img src="/assets/images/build/ui/design-kit/logo/nonos/nimiq-horizontal-outline-ugly.svg" alt="An example on how to not use the Nimiq Logo malformating it with shadows or only outlines" rounded-6  />
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
  <img src="/assets/images/build/ui/design-kit/logo/nonos/grumpy-cat.png" alt="An example on how to not use the Nimiq Logo making it unreadable" rounded-6 absolute inset-0 aspect-square />
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
  <img src="/assets/images/build/ui/design-kit/logo/nonos/nimiq-only-letters.svg" alt="" rounded-6 />
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
  <img src="/assets/images/build/ui/design-kit/logo/nonos/nimiq-only-letters.svg" alt="An example on how to not use the Nimiq Logo only showing letters" rounded-6 ml-24 />
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
  <img src="/assets/images/build/ui/design-kit/logo/nonos/nimiq-blue.svg" alt="A grumpy cat" rounded-6 />
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

The Fira Code font is used for code snippets and can be downloaded from [Bunny Fonts](https://fonts.bunny.net/family/fira-code). -->

## Get started as a Nimiq designer

Designers beware! For a more detailed explanation of how to use the components, such as using secondary colours, typography and how to use shadows. Click on the link below to see the [Nimiq Design Kit on Figma](https://www.figma.com/file/GU6cdS85S2v13QcdzW9v8Tav/NIMIQ-Style-Guide-(Oct-18)?type=design&mode=design&t=SugAiJEQEMPp2f4x-0).

  <a href="https://www.figma.com/file/GU6cdS85S2v13QcdzW9v8Tav/NIMIQ-Style-Guide-(Oct-18)?type=design&mode=design&t=SugAiJEQEMPp2f4x-0" target="_blank" class="raw" mt-16 pill arrow bg-blue-400 text-blue="!">Explore in Figma</a>
