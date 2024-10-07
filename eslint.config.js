import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  typescript: true,
  markdown: true,
  ignores: ['.vitepress/cache', '*.woff2'],
  rules: {
    'no-irregular-whitespace': 'off', // TODO Find a way to fix this
  },
})
