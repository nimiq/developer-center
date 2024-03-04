import { defineConfig, presetAttributify, presetIcons, presetMini, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import { presetNimiq } from 'nimiq-css'
import presetRemToPx from '@unocss/preset-rem-to-px'

export default defineConfig({
  content: {
    filesystem: ['.vitepress/config.ts', '.vitepress/theme/utils/sidebar.ts', '**/**.md'],
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
          const res = await fetch('https://raw.githubusercontent.com/onmax/nimiq-ui/main/packages/nimiq-icons/dist/icons.json')
          const json = await res.json()
          return json
        },
      },
    }),
    presetNimiq({
      components: true,
      typography: true,
    }),
    presetRemToPx({ baseFontSize: 4 }),
  ],
  theme: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      md2: '960px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  rules: [
    ['shadow', { 'box-shadow': '0px 18px 38px rgba(31, 35, 72, 0.07), 0px 7px 8.5px rgba(31, 35, 72, 0.04), 0px 2px 2.5px rgba(31, 35, 72, 0.02)' }],
    ['shadow-card', { 'box-shadow': '0px 6px 20px rgba(59, 76, 106, 0.13), 0px 1.34018px 4.46726px rgba(59, 76, 106, 0.0774939), 0px 0.399006px 1.33002px rgba(59, 76, 106, 0.0525061)' }],
    [/^rounded-([\.\d]+)$/, ([_, num]) => ({ 'border-radius': `${num}px` })],
  ],

  shortcuts: [
    {
      'label': 'font-bold text-12 leading-12 md:text-14 md:leading-14 uppercase [letter-spacing:1.3px] whitespace-nowrap',
      'border-base': 'border-[1.5px] border-solid',
      'blue-pill': 'flex items-center gap-8 rounded-full px-16 py-5.5 w-max font-bold bg-blue-10 dark:bg-blue text-blue dark:text-white',
    },
    [/^border-base-(.*)$/, ([,color]) => `border-base border-${color}-600`],
  ],
})
