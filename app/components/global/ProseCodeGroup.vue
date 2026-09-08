<script lang="ts">
import theme from '#build/ui/prose/code-group'
</script>

<script setup lang="ts">
import { useAppConfig, useState } from '#imports'
import UCodeIcon from '@nuxt/ui/components/prose/CodeIcon.vue'
import { useComponentProps } from '@nuxt/ui/composables/useComponentProps'
import { tv } from '@nuxt/ui/utils/tv'
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
import { computed, onBeforeUpdate, onMounted, ref, watch } from 'vue'
import { labelLanguageIcon, languageIcon, languageLabel } from '~/utils/code-language'

const _props = defineProps({
  defaultValue: { type: String, required: false, default: '0' },
  sync: { type: String, required: false },
  class: { type: null, required: false },
  ui: { type: Object, required: false },
})

const slots = defineSlots()
const model = defineModel({ type: String })

const props = useComponentProps('prose.codeGroup', _props)

const appConfig = useAppConfig() as any
const ui = computed(() => tv({ extend: theme, ...appConfig.ui?.prose?.codeGroup || {} })() as unknown as Record<keyof typeof theme.slots, (opts?: { class?: any }) => string>)

const rerenderCount = ref(1)

const items = computed(() => {
  // touch ref so tab items refresh when children update
  void rerenderCount.value
  return slots.default?.()?.flatMap(transformSlot).filter(Boolean) || []
})

interface SlotItem {
  label: string
  icon?: string
  component: any
}

function transformSlot(slot: any, index: number): SlotItem | SlotItem[] | undefined {
  if (typeof slot.type === 'symbol') {
    return slot.children?.map(transformSlot)
  }

  const filename: string | undefined = slot.props?.filename
  const language: string | undefined = slot.props?.language
  const explicitIcon: string | undefined = slot.props?.icon

  const label = filename || languageLabel(language) || slot.props?.label || `${index}`

  // Icon resolution priority:
  //   1. explicit `icon` prop
  //   2. label-as-language-name (e.g. `[TypeScript]` → TS icon)
  //   3. language fallback when no filename was provided
  const icon = explicitIcon
    ?? labelLanguageIcon(filename)
    ?? (filename ? undefined : languageIcon(language))

  return { label, icon, component: slot }
}

onMounted(() => {
  if (props.sync) {
    const syncKey = `code-group-${props.sync}`
    const syncValue = useState<string | null>(syncKey, () => localStorage.getItem(syncKey))
    watch(syncValue, () => {
      if (!syncValue.value)
        return
      model.value = syncValue.value
    }, { immediate: true })
    watch(model, () => {
      if (!model.value)
        return
      syncValue.value = model.value
      localStorage.setItem(syncKey, model.value)
    })
  }
})

onBeforeUpdate(() => rerenderCount.value++)
</script>

<template>
  <TabsRoot
    v-model="model"
    :default-value="props.defaultValue"
    :unmount-on-hide="false"
    :class="ui.root({ class: [props.ui?.root, props.class] })"
  >
    <TabsList :class="ui.list({ class: props.ui?.list })">
      <TabsIndicator :class="ui.indicator({ class: props.ui?.indicator })" />

      <TabsTrigger
        v-for="(item, index) of items"
        :key="index"
        :value="String(index)"
        :class="ui.trigger({ class: props.ui?.trigger })"
      >
        <UCodeIcon
          :icon="item.icon"
          :filename="item.label"
          :class="ui.triggerIcon({ class: props.ui?.triggerIcon })"
        />

        <span :class="ui.triggerLabel({ class: props.ui?.triggerLabel })">{{ item.label }}</span>
      </TabsTrigger>
    </TabsList>

    <TabsContent
      v-for="(item, index) of items"
      :key="index"
      :value="String(index)"
      as-child
    >
      <component :is="item.component" hide-header tabindex="-1" />
    </TabsContent>
  </TabsRoot>
</template>
