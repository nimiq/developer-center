# Staking Contract

The staking contract is a special contract that deals with functions regarding validators, stakers, and staking. The staking contract is coded at the genesis block and is continuously updated as the blockchain evolves. This contract is where the data of the staking contract, validators, and stakers is compiled. It also keeps all the staking contract accounts in a single location, namely the validators and stakers accounts. Any node with a wallet and stake in Nimiq's blockchain can propose to be a validator or a staker.

<br/>

### Validator

A validator's responsibility is to produce, propose and sign blocks, thus validating blocks and participating in the consensus. A node must have a wallet in Nimiq's blockchain to propose to be a validator. Having a wallet allows the node to deposit its coins to its validator's address.

<br/>

By validating blocks, validators get rewarded for their work. The [rewards](rewards.md) are distributed to the validator. Our blockchain requires a 10 000 NIM deposit. This minimum deposit prevents the validator from getting offline, delaying the block production, or acting maliciously. Furthermore, validator accounts are heavy on data, so the minimum deposit prevents someone from creating a validator account with 10 NIM and forgetting about it.

<br/>

### Staker

If a node doesn't have the resources, knowledge, or availability to be a validator, it can be a staker. A staker delegates its deposit to a validator, which validates blocks on behalf of it. The staker deposits its stake to its staker's account. Unlike validators, stakers don't have to secure a minimum amount to become a staker. Also, stakers don't get rewarded in the staking contract. The distribution of the rewards to the stakers is made by the validators off-chain.

<br/>

### Staking contract main components:

- The **staking contract object** is where the information of the contract is tracked, such as the address of validators for the current epoch, their balance, and the punishment sets.
- The **validator**'**s object** is where is stored each validator's address, their balance, their keys, and the number of stakers they validate for.
- The **staker object** contains the address, the balance, and the address of the validator to which the staker delegates its coins.

<br/>

![trie staking contract.drawio.png](/public/protocol/trie_staking_contract.png)

<br/>

This is an illustration to navigate through the staking contract. For instance, to reach for a specific validator address, the path would be:

1. Start by getting the **staking contract address**
2. Navigate and select the path to the **validators list**
3. Select the path to the preferred **validator's address**
4. Select the path of the chosen **main validator**
5. Access to the address of the selected **validator's account**

<br/>

### Staking contract object

- Balance: The total amount of coins staked in the staking contract. This amount includes both validators and stakers deposits.
- Active validators list: A list of all the validators eligible to receive validator and validator [slots](slots.md). It also includes their corresponding balance.
- Parked set: The list of validators parked in the current epoch. A parked validator gets inactivated at the end of the epoch unless it sends an unparking transaction.
- Current lost reward: The list of validator slots that lost rewards in the current batch, meaning that they won't receive the rewards of the current batch when distributed at the end of the next batch.
- Previous lost reward: The list of validator slots that lost rewards in the previous batch, meaning that they won't receive the rewards at the end of the current batch.
- Current disabled slots: The list of the validator slots that are ineligible to produce micro blocks in the current batch.
- Previous disabled slot: The list of the validator slots that were ineligible to produce micro blocks in the previous batch.

<br/>

The staking contract gathers both current and previous lost rewards and disabled slots to keep track of the validators that get their rewards slashed. As explained in the [punishments](punishments.md) document, validators are immediately added to the punishment sets once they misbehave. It is essential to monitor when they are added and removed since the punishment sets dictate the rewards distribution.

<br/>

Since the rewards of a batch are distributed at the end of the next batch and [fork proofs](fork-proofs.md) can be submitted until the end of the batch after the fork occurred, the staking contract needed to keep track of which validators are punished and in which batch. The punishment sets also monitor which validators are eligible to produce blocks.

<br/>

### Validators

Each validator has its own account. Once it sends a transaction to create an account in the staking contract as a validator, the validator receives the following object.

<br/>

- Address: It serves as an identifier of the validator's account. A key corresponding to this address is used to interact with the staking contract through transactions.
- Signing key ([Schnorr public key](https://en.wikipedia.org/wiki/Schnorr_signature)): Validators sign the blocks they have produced using this key. It is also used to sign certain transactions inherent to the validator.
- Voting key ([BLS public key](https://en.wikipedia.org/wiki/BLS_digital_signature)): Validators use this key to vote for macro blocks and skip blocks.
- Reward address: Account where the rewards of a batch are sent to.
- Signal data: Optional field which the validator can use to coordinate with other validators.
- Balance: The amount of coins staked by the validator, including those delegated to the validator by stakers.
- Number of stakers: The number of stakers delegating to the validator. A validator can have multiple stakers.
- Inactivity flag: Field that states if the validator is active or inactive. If inactive, it contains the block height where it became inactive.

<br/>

The validator's deposit can't be withdrawn or changed unless the validator deletes its account and its deposit is then refunded.

<br/>

### Stakers

- Address: It serves as an identifier of the staker's account. A key corresponding to this address is used to interact with the staking contract through transactions.
- Balance: The staker's balance that could be delegated to a validator. The staker never loses control of its stake, even though it delegated its coins to a validator.
- Delegation: Optional field where it is stored the address of the validator to whom the staker has delegated its coins. A staker can have one validator or none.

<br/>

If a validator deletes its account in the staking contract, the staker remains in the contract, but the delegation field gets empty. At this point, the staker can delegate its coins to another validator, updating the validator's address.

<br/>

### Validator's transactions

- Create: When a node proposes to validate blocks, it sends a create transaction and becomes part of the staking contract.
- Update: Using the corresponding key of its address, the validator can update specific fields of its object. Validators can update the signing key, the voting key, reward address, and signal data.
- Inactivate: Once it sends this transaction, the validator gets inactive immediately. Being inactive allows the validator to delete its account from the staking contract after the second batch of the next epoch. Also, when a validator is inactive, it can't be elected as a validator.
- Reactivate: Once the inactive validator sends this transaction, it is automatically removed from the inactive state, clearing the inactivity flag field. At this point, it can be elected as a validator again.
- Unpark: This transaction prevents the validator from being inactivated at the end of the epoch. This transaction removes the validator from the parked set and all their validator slots from the disabled set.
- Delete: If a validator is inactive, it can send this transaction to delete itself from the staking contract. The delete transaction can only be sent by inactive validators, but only at the second batch of the next epoch. This span is mandatory to delete a validator account from the staking contract since the rewards of a batch are distributed in the next batch. Given this span, the rewards distribution is secured to the validator who desires to delete itself from the contract.

<br/>

These are incoming transactions, except for the `delete` transaction, which is an outgoing transaction.

<br/>

The corresponding key to the validator’s account is used for the following transactions:

- Create
- Update
- Delete

<br/>

The validator’s signing key is used for the following transactions:

- Inactivate
- Reactivate
- Unpark

<br/>

![validator txs.drawio.png](/public/protocol/validator_txs.png)

<br/>

### Staker's transactions:

- Create: Creates the object of the staker.
- Stake: Anyone can send this transaction, adding coins from an outside address to the staker's balance. Add coins from any outside address to the staker's balance. This transaction can be made by the staker itself or by staking pools. Usually, the rewards distributed to a staker are then restaked to the staker's balance.
- Update: This transaction updates the delegation.
- Unstake: It removes coins from the staker's balance.

<br/>

These are incoming transactions, except for the "unstake” transaction, which is an outgoing transaction.

<br/>

The corresponding key to the staker’s account is used for the following transactions:

- Create
- Update
- Unstake
