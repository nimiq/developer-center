---
description: Coordinated changes to the Nimiq protocol (hard forks), and what validators and node operators do for each.
icon: i-tabler-git-fork
navigation:
  title: Overview
  order: 1
---

# Network upgrades

Network upgrades, or hard forks, introduce coordinated changes to the Nimiq protocol. Upgrade implementations are released ahead of activation so validators and node operators can review the changes and decide whether to update their client. Activation follows the mechanism defined for each upgrade, such as validator stake signaling or a predetermined block height.

The actions, timing, and activation method vary per upgrade. Track upcoming and past upgrades in the table below, and follow the page for the specific upgrade you are preparing for.

## Upgrades

| Upgrade | Status | Who acts | Activation | What's changing |
| --- | --- | --- | --- | --- |
| [v2.0.0 hard fork](./upgrades/v2-0-0) | Completed | Validators, node operators | Stake signaling, 80% threshold | Security-relevant protocol improvements |
| [PoS migration](/migration) | Completed | Validators, node operators | Fixed block | Proof-of-Work to Proof-of-Stake consensus |

Status is one of **Proposed** (published, no action yet), **In progress** (actions are live), or **Completed** (activated; the chain runs the upgraded rules). Each upgrade page carries its own detailed status and, where relevant, a live readiness dashboard.

## Where releases are announced

- **Validators**: CERT Validators Telegram channel.
- **Node operators**: Coders Dojo Telegram channel.

## Further reading

- [Run a node](/nodes): set up and operate a Nimiq node.
- [Becoming a validator](/nodes/validators/becoming-a-validator): validator setup.
- [Protocol](/protocol): how the protocol works, including consensus and block production.
