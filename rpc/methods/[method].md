---
changelog: false
outline: false
widget: true
copyOptions: hidden
inlineActions: false
pageFooterLeftText: 'Page inspired by [DovAzenot](https://www.nimiqhub.com/docs/rpc)'
---

<script setup>
import RpcMethod from '../../.vitepress/theme/components/Rpc/RpcMethod.vue'
</script>

<RpcMethod v-if="$params" v-bind="$params" />
