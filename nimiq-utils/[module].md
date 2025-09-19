---
changelog: false
outline: true
---

<script setup lang="ts">
import { useData } from 'vitepress'
import CodeExample from '../.vitepress/theme/components/CodeExample.vue'

const { params: moduleData } = useData()
</script>

# {{ moduleData.title }}

{{ moduleData.description }}

## Usage

<div v-for="(example, index) in moduleData.usageExamples" :key="index" class="example-section">
  <h3 v-if="example.title">{{ example.title }}</h3>
  <div class="language-typescript">
    <pre><code>{{ example.code }}</code></pre>
  </div>
</div>

## API

<div class="vp-table">
  <table>
    <thead>
      <tr>
        <th>Method</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in moduleData.api" :key="index">
        <td><code>{{ item.method }}</code></td>
        <td>{{ item.description }}</td>
      </tr>
    </tbody>
  </table>
</div>
