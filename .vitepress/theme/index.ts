import { createHead } from '@unhead/vue'
import mediumZoom from 'medium-zoom'
import { defineNimiqThemeConfig } from 'nimiq-vitepress-theme'

import { useRoute } from 'vitepress'
import { nextTick, onMounted, watch } from 'vue'
import 'virtual:uno.css'

export default defineNimiqThemeConfig({
  enhanceApp({ app }) {
    const head = createHead()
    app.use(head)
  },
  setup() {
    const route = useRoute()
    function initZoom() {
      mediumZoom('.nq-prose img:not(:is(.not-zoomable,[not-zoomable]))', { background: 'rgb(var(--nq-neutral-0))' })
    }
    onMounted(initZoom)
    watch(() => route.path, nextTick(initZoom))
  },
})
