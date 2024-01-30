---
layout: home

links:
  - bgColor: blue
    icon: 'i-nimiq:icons-lg-browsermesh'
    label: 'Build'
    title: 'Get Started with Nimiq'
    description:  'Create an app on Nimiq and have it running in 5 minutes.'
    href: 'build/'
    layout: lg
    span: 3
  - bgColor: green
    icon: 'i-nimiq:icons-lg-cubes'
    label: 'Learn'
    title: 'The underlying technology'
    description: 'Learn what makes Nimiq a truly unique blockchain.'
    href: 'learn/'
    span: 3
    layout: lg
  - title: '3 steps to become part of the validator list'
    label: 'Run a validator'
    href: '/'
  - title: 'Accept USDC Polygon now, see how'
    label: 'Cryptopayment Link'
    href: '/'
  - title: 'Find bugs and get paid in our Bug bounty program'
    label: 'Contribute'
    href: '/'
buildTogetherLinks:
  - title: Learn
    description: Learn about the basic and advanced concepts.
    icon: i-nimiq:icons-lg-bulb
    href:  '/'
  - title: Build
    description: Create apps that connect to the blockchain.
    icon: i-nimiq:icons-lg-tools
    href:  '/'
  - title: Run a Validator
    description: Collect stake, blocks and earn.
    icon: i-nimiq:icons-lg-verified
    href:  '/'
---

:::raw
# Welcome to the Nimiq Developer Center

Get guides, resources and tips on how to create with Nimiq.

<Grid :items="$frontmatter.links" />

## Let's build together

Create apps, contribute to the network or run a validator.

<Grid :items="$frontmatter.buildTogetherLinks" />
:::

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
