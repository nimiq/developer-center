import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  typescript: true,
  vue: true,
  ignores: ['.vitepress/cache', '*.woff2', '.vitepress/rpc/*.json'],
}, {
  files: ['**/*.md'],
  rules: {
    'no-irregular-whitespace': 'off', // TODO Test i this works
  },
}, {
  rules: {
    // Fix for vue/object-property-newline rule compatibility issue
    'vue/object-property-newline': ['error', {
      allowAllPropertiesOnSameLine: false,
    }],
  },
})
