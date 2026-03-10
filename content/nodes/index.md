---
icon: i-tabler:layout-grid
title: Nodes & Validators
prose: false
prev: false
next: false
aside: false
footer: false
secondarySidebar: false
---

# Nodes & Validators

This hub helps you choose between being a validator, hosting your own RPC endpoint or contributing prover capacity to the zero-knowledge sync.

:::u-page-grid
  ::::u-page-card
  ---
  title: Run a Node
  description: Deploy a full or history node that matches your infrastructure and security needs.
  icon: i-tabler:server-bolt
  to: https://github.com/nimiq/core-rs-albatross?tab=readme-ov-file#configuration
  variant: outline
  ---
  ::::

  ::::u-page-card
  ---
  title: Become a Validator
  description: Meet staking requirements, configure keys, and maintain uptime to earn rewards for securing the network.
  icon: i-nimiq:verified
  to: ./validators/becoming-a-validator
  variant: outline
  ---
  ::::

  ::::u-page-card
  ---
  title: Operate a Prover
  description: Supply zk-SNARK proofs for Albatross with the hardware, storage, and monitoring it demands.
  icon: i-tabler:cpu
  to: ./prover-node-guide
  variant: outline
  ---
  ::::
:::

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
