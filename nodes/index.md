---
title: Nodes & Validators
prose: false
prev: false
next: false
aside: false
footer: false
secondarySidebar: false
links:
  - title: Run a Node
    description: Deploy a full or history node that matches your infrastructure and security needs.
    href: 'https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#configuration'
    icon: i-tabler:server-bolt
    hoverColor: blue
    label: Explore the checklist
  - title: Become a Validator
    description: Meet staking requirements, configure keys, and maintain uptime to earn rewards for securing the network.
    href: './validators/becoming-a-validator'
    icon: i-nimiq:verified
    hoverColor: green
    label: Follow the validator path
  - title: Operate a Prover
    description: Supply zk-SNARK proofs for Albatross with the hardware, storage, and monitoring it demands.
    href: './prover-node-guide'
    icon: i-tabler:cpu
    hoverColor: purple
    label: Configure the prover
---

# Nodes & Validators

This hub helps you choose between being a validator, hosting your own RPC endpoint or contributing prover capacity to the zero-knowledge sync.

<NqGrid f-my-xl :cards="$frontmatter.links" large-cards />

## Choose your path

| Goal | Jump In | Outcome |
| --- | --- | --- |
| Prototype quickly | [Explore the RPC](../rpc/) | Make JSON-RPC calls right away using hosted or local endpoints |
| Control your own endpoint | [Run a node](https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#configuration) | Tune availability, security, and data retention to your needs |
| Stake or pool NIM | [Become a validator](./validators/becoming-a-validator) | Enter consensus and earn rewards from bonded or delegated stake |
| Provide zero-knowledge proofs | [Operate a prover](./prover-node-guide) | Supply zk-SNARK proofs that feed the Albatross pipeline |

## Helpful references

- [Web Client vs RPC Client](/web-client/web-client-vs-rpc) — decide when a hosted node is necessary.
- [JSON-RPC Methods](../rpc/methods/index.md) — integrate your applications once the endpoint is live.
- [Protocol documentation](/protocol/) — understand how validators, staking, and ZKP systems fit into Albatross.
