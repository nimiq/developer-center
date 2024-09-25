# Registration Guide

This document guides users through the registration process to become one of the first validators on the Nimiq PoS chain. It is part of the overall documentation for the transition from PoW to PoS. For registering a validator post-transition, refer to the [Becoming a Validator](/build/set-up-your-own-node/becoming-a-validator.md) guide. For more technical details on the migration, see [Migration Technical Details](migration-technical-details).

## Validator Registration Tool

This guide focuses on **Phase 1: Validator Registration** of the migration process, which takes place between **September 12 and October 6**. During this phase, you will create and register your validator on the PoW Mainnet, preparing it for the transition to PoS.

Nimiq has developed a **Validator Registration Tool** specifically for this process. By using this tool, validators pre-register within the PoW chain, ensuring they are ready for the PoS transition. The tool operates in two modes:

- **Key and Address Generation**: Generates the validator's keys and corresponding address
- **Validator Registration**: Registers the validator by sending the necessary transactions on the PoW chain

| **Phase** | **Start Date** | **End Date** |
| --- | --- | --- |
| **Validator Registration** | **12th September** | **6th October** |
| Pre-Stake Phase | 7th October | 10th November |
| Validator Activation | 19th November | - |

The steps outlined in this guide are only applicable during the **Validator Registration Phase**.

### Prerequisites

- Ensure [Node.js](https://nodejs.org) ≥ v18.20.4 is installed
- Clone the [Nimiq Validator Registration Tool repository](https://github.com/nimiq/validator-registration-tool) and move to the cloned directory
- Install Yarn globally with `npm install -g yarn`
- Install all dependencies by executing `yarn` inside the cloned repository

### Step 1: Generate the Validator Keys

Execute the tool without parameters to generate a validator address, signing key, and voting key:

```bash
node validator-registration.js
```

The tool generates fresh keys and stores them into the `validator-keys.json` file in your current directory. The screenshot demonstrates an example output of the script:

<img class="object-contain max-h-[max(80vh,220px)]" src="/assets/images/migration/migration.png" alt="Validator example keys" />

<Callout type='tip'>

Save the private keys securely, especially the validator private key! **There is no recovery mechanism for lost private keys**. Once lost, access to your validator and related NIM may be permanently lost.

</Callout>

For detailed guidance through the scripts and their options, run `node validator-registration.js --help`. This will print out the usage instructions.

**Using your own keys**

You can of course also generate your own validator, signing, and/or voting keys using other methods. To do so, copy the `validator-keys.json` file generated in the previous step and replace the auto-generated address and keys with your own. Once you have added your keys, continue with the next step.

### Step 2: Fund your Validator Address

To start the validator registration process, fund the validator address you just generated to cover the nominal transaction fees of 1 Luna each associated with the validator registration process. During the [Activation Phase](migration-technical-details#readiness-and-activation-tool), you will also need to pay the readiness transaction, so ensure your address is funded with at least **10 Lunas** (0.00010 NIM) for both the registration and activation transactions. You can use any Nimiq Wallet to send Lunas to this address.

### Step 3: Run the Validator Registration Tool

The Validator Registration Tool connects to the Nimiq PoW chain when executed. It registers your validator by importing the **generated keys** and then creates and sends **six transactions**, each with a **nominal fee of 1 Luna**. These transactions use your validator keys to sign and submit the necessary data to register your validator.

Run the following command from the cloned `validator-registration-tool` repository. You must specify the arguments as follows:

```bash
node validator-registration.js --validator validator-keys.json --network main
```

### Step 4: Deposit Payment and Commit

The final step involves committing to the registration and paying the validator's deposit of 100 000 NIM. This transaction can be sent from any address, but **you must include your validator address** in the transaction’s “public message” field. This allows the deposit to be linked to your validator.

To send the transaction manually via **Nimiq Wallet**, you need the following data:

|                       |                                                                      |
| --------------------- | -------------------------------------------------------------------- |
| **Recipient Address** | `NQ07 0000 0000 0000 0000 0000 0000 0000 0000`                       |
| **Value**             | `100 000` NIM or more                                                |
| **Public Message**    | Your validator address in human-readable format (starting with `NQ`) |

<Callout type='warning'>

**We recommend using the Nimiq Wallet** to send the validator deposit, as it allows you to include the necessary public message. If you are using an exchange or another wallet, be aware that they often don’t allow public messages on-chain for withdrawals. To avoid errors, test with a small amount of NIM first to ensure the transaction is processed correctly.

Please also note that any value below 100 000 NIM will result in permanent loss. Any amount above 100 000 NIM will be assigned as stake as long as the difference is greater than the minimum stake (100 NIM); otherwise, the excess will be burned.

</Callout>

**Verify Registration and Deposit**

After the command runs successfully and the deposit is sent, you can verify both on the network using our NIM block explorer [Nimiq Watch](https://nimiq.watch/#validator-registrations).

### What’s Next?

Congratulations! You have successfully registered your validator and paid the deposit. The next step is to prepare for the Activation Phase, which begins on **November 19**.

You will need to follow the [Activation Tool](validator-activation) guide, and we recommend running it before November 19, allowing your node to download the database snapshot early and speeding up the activation process. Click [here](migration-technical-details#activation-phase) to learn more about the activation phase.
