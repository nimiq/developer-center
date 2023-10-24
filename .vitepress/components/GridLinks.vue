<script setup lang="ts">
defineProps({
  items: {
    type: Object as PropType<object[]>,
    required: true,
  },
})
</script>

<template>
<ul grid="~" grid-cols="1 md:6" grid-rows="md:[1fr_auto]" gap-32>
      <li v-for="item in items"
        :class="['blue', 'green'].includes(item.bgColor) ? 'md:col-span-3' : 'md:col-span-2'">
        <CardLink :item="item" />
      </li>
    </ul>

</template>
