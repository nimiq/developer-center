import presetRemToPx from '@unocss/preset-rem-to-px'
import transformerDirectives from '@unocss/transformer-directives'
import { presetNimiq } from 'nimiq-css'
import { defineConfig, presetAttributify, presetIcons, presetMini, presetUno } from 'unocss'

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

    // TODO Move this to Nimiq CSS preset
    (matcher) => {
      if (!matcher.startsWith('hocus-'))
        return matcher
      return {
        matcher: matcher.slice(6),
        selector: () => `[hocus]:hover, [hocus]:focus`,
      }
    },

    // TODO Move this to Nimiq CSS preset
    (matcher) => {
      if (!matcher.startsWith('hocus:'))
        return matcher
      return {
        matcher: matcher.slice(6),
        selector: s => `${s}:hover, ${s}:focus`,
      }
    },

    // TODO Move this to Nimiq CSS preset
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
        custom: {
          crane: '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path fill="currentColor" d="M213.293 19.46 29.691 120.34h37.375l133.489-73.346-15.819 73.346h18.41l11.584-53.701 13.688 53.7h18.574l-19.447-76.294 202.941 76.295h51.147zM25 138.34v30h462v-30zm32 48v30h62v-30zm144 0v46h30v-46zm48 0v46h19.273L279 221.613V186.34zm190 0v141.707a24.6 24.6 0 0 1 9-1.707c3.166 0 6.2.61 9 1.707V186.34zm-238 64v242h30v-242zm247 94c-3.973 0-7 3.027-7 7s3.027 7 7 7 7-3.027 7-7-3.027-7-7-7m-20.393 21.365-16.421 24.635h21.63l9.743-14.613c-6.118-1.384-11.417-5.04-14.952-10.022m40.786 0c-3.535 4.981-8.834 8.638-14.952 10.022l9.743 14.613h21.63zM409 408.34v30h78v-30zm-226 24.5-60.4 45.3 10.8 14.4 49.6-37.2zm66 0v22.5l49.6 37.2 10.8-14.4z"/></svg>',
        },
      },
    }),
    presetNimiq({
      utilities: true,
      typography: true,
      attributifyUtilities: true,
      icons: false,
      scrollbar: true,
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
    [/^rounded-([.\d]+)$/, ([_, num]) => ({ 'border-radius': `${num}px` })],
  ],

  shortcuts: [
    { columns: 'flex gap-32 flex-wrap children:flex-1' },
  ],
})
