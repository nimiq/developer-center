---
links:
  - title: Validators and Stakers
    description: Learn about the pillars of Albatross PoS
    href: 'protocol/validators/validators-and-stakers'
    bgColor: green
  - title: Staking contract
    description:  The repository of data for validators, stakers, and staking.
    href: 'protocol/validators/staking-contract'
  - title: Block format
    description: Everything about micro and macro blocks.
    href: 'protocol/block-format'
becomeValidator:
  - title: Run a validator
    description: Start earning by validating blocks and securing the network.
    bgColor: blue
    icon: 'i-nimiq:icons-lg-verified'
    duration: '30-45 min'
prev: false
next: false
aside: false
footer: false

---

::: warning Work in progress

Our documentation is an ongoing project, a dynamic reflection of the evolving blockchain. As we actively update its content, please note that the information provided may undergo changes.

:::

<Hero mt-64 :items="$frontmatter.links">
  <template #headline>
    Nimiq - a blockchain built from scratch
  </template>
  <template #subline>
    Everybody should be a peer: The basic idea of the Nimiq Blockchain.
  </template>
</Hero>

<Hero mt-32 h2 :items="$frontmatter.becomeValidator">
  <template #label>Build</template>
  <template #headline>
    Become a validator
  </template>
  <template #subline>
    Setting your own validator is easy.
  </template>
</Hero>
