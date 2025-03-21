import { createHead } from '@unhead/vue'
import { defineNimiqThemeConfig } from 'nimiq-vitepress-theme/theme'
import 'virtual:uno.css'

// TODO zoom image

export default defineNimiqThemeConfig({
  enhanceApp({ app }) {
    const head = createHead()
    app.use(head)
  },
})
