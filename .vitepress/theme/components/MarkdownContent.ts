import { defineComponent, h } from 'vue'
import { useRoute } from 'vitepress'
import { contentUpdatedCallbacks } from '../utils/markdown-content'

const runCbs = () => contentUpdatedCallbacks.forEach(fn => fn())

export const MarkdownContent = defineComponent({
  name: 'VitePressContent',
  props: {
    as: { type: [Object, String], default: 'div' },
  },
  setup(props) {
    const route = useRoute()
    return () =>
      h(
        props.as,
        null,
        [
          route.component
            ? h(route.component, {
              onVnodeMounted: runCbs,
              onVnodeUpdated: runCbs,
              onVnodeUnmounted: runCbs,
            })
            : '404 Page Not Found',
        ],
      )
  },
})
