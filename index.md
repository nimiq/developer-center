---
layout: home

links:
  - bgColor: blue
    icon: i-nimiq:icons-lg-browsermesh
    label: Build
    title: Get Started with Nimiq
    description:  Create an app on Nimiq and have it running in 5 minutes.
    href: build/
  - bgColor: green
    icon: i-nimiq:icons-lg-cubes
    label: Learn
    title: The underlying technology
    description: Learn what makes Nimiq a truly unique blockchain.
    href: learn/
  - label: Validators and Stakers
    title: Learn about the pillars of Albatross PoS
    href: protocol/validators/validators-and-stakers
  - label: Staking contract
    title: Everything for validators, stakers, and staking.
    href: protocol/validators/staking-contract
  - label: Block format
    title: Everything about micro and macro blocks.
    href: protocol/block-format
buildTogetherLinks:
  - title: Start building
    icon: i-nimiq:icons-lg-tools
    description: Connect and interact with the Albatross using JS
    href: build/web-client
  - title: Run a validator
    icon: i-nimiq:icons-lg-verified
    description: Collect stake, validate blocks and earn.
  - title: Use our designs
    href: build/ui/css-framework/overview
    description: Use our components to build something awesome
    icon: i-nimiq:icons-lg-palette
---

::: warning Work in progress

Our documentation is an ongoing project, a dynamic reflection of the evolving blockchain. As we actively update its content, please note that the information provided may undergo changes.

:::

<Hero mt-64 :items="$frontmatter.links">
  <template #headline>
    Welcome to the Nimiq Developer Center
  </template>
  <template #subline>
    Get guides, resources and tips on how to create with Nimiq.
  </template>
</Hero>

<Hero :items="$frontmatter.buildTogetherLinks" h2>
  <template #headline>
    Let's build together
  </template>
  <template #subline>
    Create apps, run a validator or craft something delightful with Nimiq.
  </template>
</Hero>

<script setup>
const isDev = import.meta.env.DEV
</script>

<div v-if="isDev">

::: info
Only shown in development mode.
:::

## Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

### Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: goal
Getting started by building...
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

::: goal
Getting started by building a minimal app that connects to the Nimiq network and establishes consensus.
:::

### More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

</div>
