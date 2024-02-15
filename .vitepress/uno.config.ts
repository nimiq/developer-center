import { defineConfig, presetAttributify, presetIcons, presetMini, presetUno } from 'unocss'
import presetRemToPx from '@unocss/preset-rem-to-px'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  content: {
    filesystem: ['.vitepress/config.ts', '.vitepress/theme/utils/sidebar.ts'],
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
        logos: () => import('../node_modules/@iconify-json/logos/icons.json').then(res => res.default as any),
        nimiq: () => fetch('https://raw.githubusercontent.com/onmax/nimiq-ui/main/packages/nimiq-icons/dist/icons.json').then(res => res.json()),
      },
    }),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: 'Mulish:400,600,700',
        mono: 'Fira Code:400',
      },
    }),
    presetRemToPx({ baseFontSize: 4 }),
  ],
  theme: {
    colors: {
      darkblue: {
        DEFAULT: '#1f2348',
        6: '#ededf0',
        10: '#e9e9ed',
        15: '#cdcdd5',
        20: '#d2d3da',
        25: '#c7c8d1',
        30: '#bcbdc8',
        40: '#a5a7b6',
        50: '#8f91a3',
        60: '#797b91',
        70: '#62657f',
        80: '#4c4f6d',
        90: '#35395a',
        94: '#2c3053',
        1000: '#1b1d33',
        dimmed: '#292d51',
      },
      blue: {
        DEFAULT: '#0582CA',
        10: '#e6f3fa',
        60: '#69b4df',
      },
      gold: {
        DEFAULT: '#E9B213',
        10: '#fcf7e6',
        20: '#faf0ce',
        30: '#f6e8b6',
        40: '#f3e09e',
        50: '#f1d884',
        60: '#eed06a',
        70: '#ecc850',
        80: '#e8c033',
        90: '#e6b909',
      },
      green: {
        DEFAULT: '#13b59d',
        10: '#e3f2f0',
        20: '#d0f0eb',
        30: '#b8e9e2',
        40: '#a1e1d8',
        50: '#89dace',
        60: '#71d2c4',
        70: '#5acbba',
        80: '#42c3b0',
        90: '#13b59d',
      },
      gray: {
        DEFAULT: '#f8f8f8',
      },
      lightgray: {
        DEFAULT: '#fbfbfb',
      },
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      md2: '960px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  rules: [
    ['bg-radial-lightblue', { 'background-image': 'radial-gradient(100% 100% at 100% 100%, #265DD7 0%, #0582CA 100%)' }],
    ['bg-radial-green', { 'background-image': 'radial-gradient(100% 100% at 100% 100%, #41A38E 0%, #21BCA5 100%)' }],
    ['shadow', { 'box-shadow': '0px 18px 38px rgba(31, 35, 72, 0.07), 0px 7px 8.5px rgba(31, 35, 72, 0.04), 0px 2px 2.5px rgba(31, 35, 72, 0.02)' }],
    [/^rounded-([\.\d]+)$/, ([_, num]) => ({ 'border-radius': `${num}px` })],
  ],

  shortcuts: [
    {
      'label': 'font-bold text-12 leading-12 md:text-14 md:leading-14 uppercase [letter-spacing:1.3px] whitespace-nowrap',
      'border-base': 'border-[1.5px] border-solid border-darkblue-10 dark:border-darkblue-94',
      'blue-pill': 'flex items-center gap-8 rounded-full px-16 py-5.5 w-max font-bold bg-blue-10 dark:bg-blue text-blue dark:text-white',
    },
    [/^border-base-(.*)$/, ([,c]) => `border-${c}-[1.5px] border-${c}-solid border-darkblue-10 dark:border-darkblue-94`],
  ],
})
