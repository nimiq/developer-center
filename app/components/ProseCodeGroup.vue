<script lang="ts">
import theme from '#build/ui/prose/code-group'
</script>

<script setup lang="ts">
import { useAppConfig, useState } from '#imports'
import UCodeIcon from '@nuxt/ui/components/prose/CodeIcon.vue'
import { useComponentUI } from '@nuxt/ui/composables/useComponentUI'
import { tv } from '@nuxt/ui/utils/tv'
import { TabsContent, TabsIndicator, TabsList, TabsRoot, TabsTrigger } from 'reka-ui'
import { computed, onBeforeUpdate, onMounted, ref, watch } from 'vue'
import { labelLanguageIcon, languageIcon, languageLabel } from '~/utils/code-language'

const props = defineProps({
  defaultValue: { type: String, required: false, default: '0' },
  sync: { type: String, required: false },
  class: { type: null, required: false },
  ui: { type: Object, required: false },
})

const slots = defineSlots()
const model = defineModel({ type: String })

const appConfig = useAppConfig() as any
const uiProp = useComponentUI('prose.codeGroup', props)
const ui = computed(() => tv({ extend: tv(theme), ...appConfig.ui?.prose?.codeGroup || {} })() as unknown as Record<keyof typeof theme.slots, (opts?: { class?: any }) => string>)

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
    :default-value="defaultValue"
    :unmount-on-hide="false"
    :class="ui.root({ class: [uiProp?.root, props.class] })"
  >
    <TabsList :class="ui.list({ class: uiProp?.list })">
      <TabsIndicator :class="ui.indicator({ class: uiProp?.indicator })" />

      <TabsTrigger
        v-for="(item, index) of items"
        :key="index"
        :value="String(index)"
        :class="ui.trigger({ class: uiProp?.trigger })"
      >
        <UCodeIcon
          :icon="item.icon"
          :filename="item.label"
          :class="ui.triggerIcon({ class: uiProp?.triggerIcon })"
        />

        <span :class="ui.triggerLabel({ class: uiProp?.triggerLabel })">{{ item.label }}</span>
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
