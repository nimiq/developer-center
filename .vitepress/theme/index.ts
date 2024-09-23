import { createHead } from '@unhead/vue'
import mediumZoom from 'medium-zoom'
import { useRoute } from 'vitepress'
import Theme from 'vitepress/theme'
import { h, nextTick, onMounted, watch } from 'vue'
import MainLayout from './MainLayout.vue'
// https://vitepress.dev/guide/custom-theme
import './layers.css'
import './style.css'
import 'uno.css'

function initZoom() {
  mediumZoom('.nq-prose img:not(:is(.not-zoomable,[not-zoomable]))', { background: 'rgb(var(--nq-neutral-0))' })
}

export default {
  extends: Theme,
  Layout: () => {
    return h(MainLayout)
  },
  enhanceApp({ app }) {
    const head = createHead()
    app.use(head)
  },
  setup() {
    const route = useRoute()
    onMounted(() => initZoom())
    watch(
      () => route.path,
      () => nextTick(() => initZoom()),
    )
  },
}
