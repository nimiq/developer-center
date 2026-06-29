---
description: Coordinated changes to the Nimiq protocol (hard forks), and what validators and node operators must do for each.
icon: i-tabler-git-fork
navigation:
  title: Overview
  order: 1
---

# Network upgrades

::callout{icon="i-tabler-info-circle" color="info" title="Preview: Upgrade in preparation"}
This network upgrade is scheduled for a future date, which we will announce soon. The documentation below is published now so you can review the changes and prepare ahead of activation. We will update this notice once the upgrade is live.
::

Network upgrades, or hard forks, are coordinated changes to the Nimiq protocol. When one activates, validators and node operators must update their client to stay on the canonical chain.

Every upgrade affects validators and node operators, and the actions, timing, and activation method vary per upgrade. Always follow the page for the specific upgrade you are preparing for.

## Upgrades

| Upgrade | Status | Who acts | Activation | What's changing |
| --- | --- | --- | --- | --- |
| [v2.0.0 hard fork](./upgrades/v2-0-0) | Upcoming | Validators, node operators | Stake signaling, 80% threshold | Security-relevant protocol improvements |
| [PoS migration](/migration/) | Completed | Validators, node operators | Fixed block | Proof-of-Work to Proof-of-Stake consensus |

Status is one of **Upcoming** (announced, no action yet), **In progress** (actions are live), or **Completed** (activated; the chain runs the upgraded rules). Each upgrade page carries its own detailed status and, where relevant, a live readiness dashboard.

## How you'll be notified

- **Validators**: CERT Validators Telegram channel.
- **Node operators**: <!-- TODO: confirm channel before publish --> communication channel to be confirmed.

## Further reading

- [Run a node](/nodes/): set up and operate a Nimiq node.
- [Becoming a validator](/nodes/validators/becoming-a-validator): validator setup.
- [Protocol](/protocol/): how the protocol works, including consensus and block production.
