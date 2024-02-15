export let contentUpdatedCallbacks: (() => any)[] = [] // eslint-disable-line import/no-mutable-exports

/**
 * Register callback that is called every time the markdown content is updated
 * in the DOM.
 */
export function onContentUpdated(fn: () => any) {
  contentUpdatedCallbacks.push(fn)
  onUnmounted(() => {
    contentUpdatedCallbacks = contentUpdatedCallbacks.filter(f => f !== fn)
  })
}
