import { defineConfig, presetAttributify, presetIcons, presetMini, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import { presetNimiq } from 'nimiq-css'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  content: {
    filesystem: ['.vitepress/**config.ts', '**/**.md'],
  },
  variants: [
    (matcher) => {
      if (!matcher.startsWith('inverted:'))
        return matcher
      return {
        matcher: matcher.slice(9),
        selector: s => `[data-inverted] ${s}`,
      }
    },

    (matcher) => {
      if (!matcher.startsWith('hocus-'))
        return matcher
      return {
        matcher: matcher.slice(6),
        selector: () => `[hocus]:hover, [hocus]:focus`,
      }
    },

    (matcher) => {
      if (!matcher.startsWith('hocus:'))
        return matcher
      return {
        matcher: matcher.slice(6),
        selector: s => `${s}:hover, ${s}:focus`,
      }
    },

    (matcher) => {
      if (!matcher.startsWith('group-hocus:'))
        return matcher
      return {
        matcher: matcher.slice(12),
        selector: s => `:is(.group,[group]):hover ${s}, :is(.group,[group]):focus ${s}`,
      }
    },
  ],

  transformers: [
    transformerDirectives(),
  ],

  presets: [
    presetMini(),
    presetUno({ attributifyPseudo: true }),
    presetAttributify(),
    presetIcons({
      collections: {
        nimiq: async () => {
          return await fetch('https://raw.githubusercontent.com/onmax/nimiq-ui/main/packages/nimiq-icons/dist/icons.json').then(res => res.json())
        },

      },
    }),
    presetNimiq({
      utilities: true,
      typography: true,
    }),
    presetRemToPx({ baseFontSize: 4 }),
  ],
  theme: {
    breakpoints: {
      xs: '380px',
      sm: '640px',
      md: '768px',
      md2: '960px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  rules: [
    [/^rounded-([\.\d]+)$/, ([_, num]) => ({ 'border-radius': `${num}px` })],
  ],

  shortcuts: [
  ],
})
