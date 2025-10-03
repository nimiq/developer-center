---
changelog: false
secondarySidebar: false
---

<script setup lang="ts">
import CategoryGrid from '@theme/components/CategoryGrid.vue'
import { data as methods } from '../../.vitepress/data/rpc-methods.data'
</script>

# RPC Methods

Explore all available JSON-RPC methods for interacting with the Nimiq blockchain. Each method provides full documentation, parameters, return types, and interactive examples.

<CategoryGrid :groups="methods" />
