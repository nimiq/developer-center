var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { a as Xt, g as en } from "./DaWZu8wl.js";
const rn = "1.2.6", tn = { title: "Nimiq JSON-RPC Specification", description: "Through the use of JSON-RPC, Nimiq nodes expose a set of standardized methods and endpoints that allow external applications and tools to interact, stream and control the behavior of the nodes. This includes functionalities such as retrieving information about the blockchain state, submitting transactions, managing accounts, and configuring node settings.", version: "v1.2.0", contact: { name: "The Nimiq Core Development Team <info@nimiq.com>", email: "", url: "https://nimiq.com" }, license: { name: "Apache-2.0", url: "" } }, nn = JSON.parse('[{"name":"addVotingKey","description":"","tags":[{"name":"validator"}],"params":[{"name":"secretKey","schema":{"type":"string"},"required":true}],"result":{"name":"null","schema":{"type":"null"}}},{"name":"createAccount","description":"Generates a new account and store it.","tags":[{"name":"wallet"}],"params":[{"name":"passphrase","schema":{"type":"string"},"required":true}],"result":{"name":"ReturnAccount","schema":{"$ref":"#/components/schemas/ReturnAccount"}}},{"name":"createBasicTransaction","description":"Returns a serialized basic transaction.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createBasicTransactionWithData","description":"Returns a serialized basic transaction with an arbitrary data field.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"data","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createDeactivateValidatorTransaction","description":"Returns a serialized `deactivate_validator` transaction. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"validatorAddress","schema":{"type":"string"},"required":true},{"name":"signingSecretKey","schema":{"type":"string"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createDeleteValidatorTransaction","description":"Returns a serialized `delete_validator` transaction. The transaction fee will be paid from the validator deposit that is being returned. Note in order for this transaction to be accepted fee + value should be equal to the validator deposit, which is not a fixed value: Failed delete validator transactions can diminish the validator deposit","tags":[{"name":"consensus"}],"params":[{"name":"validatorWallet","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createNewHtlcTransaction","description":"Returns a serialized transaction creating a new HTLC contract.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"htlcSender","schema":{"type":"string"},"required":true},{"name":"htlcRecipient","schema":{"type":"string"},"required":true},{"name":"hashRoot","schema":{"type":"string"},"required":true},{"name":"hashCount","schema":{"type":"number"},"required":true},{"name":"timeout","schema":{"type":"number"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createNewStakerTransaction","description":"Returns a serialized `new_staker` transaction. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"stakerWallet","schema":{"type":"string"},"required":true},{"name":"delegation","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createNewValidatorTransaction","description":"Returns a serialized `new_validator` transaction. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee and the validator deposit. Since JSON doesn\'t have a primitive for Option (it just has the null primitive), we can\'t have a double Option. So we use the following work-around for the signal data: \\\\\\"\\\\\\" = Set the signal data field to None. \\\\\\"0x29a4b...\\\\\\" = Set the signal data field to Some(0x29a4b...).","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"validatorWallet","schema":{"type":"string"},"required":true},{"name":"signingSecretKey","schema":{"type":"string"},"required":true},{"name":"votingSecretKey","schema":{"type":"string"},"required":true},{"name":"rewardAddress","schema":{"type":"string"},"required":true},{"name":"signalData","schema":{"type":"string"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createNewVestingTransaction","description":"Returns a serialized transaction creating a new vesting contract.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"owner","schema":{"type":"string"},"required":true},{"name":"startTime","schema":{"type":"number"},"required":true},{"name":"timeStep","schema":{"type":"number"},"required":true},{"name":"numSteps","schema":{"type":"number"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createReactivateValidatorTransaction","description":"Returns a serialized `reactivate_validator` transaction. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"validatorAddress","schema":{"type":"string"},"required":true},{"name":"signingSecretKey","schema":{"type":"string"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createRedeemEarlyHtlcTransaction","description":"Returns a serialized transaction redeeming a HTLC contract using the `EarlyResolve` method.","tags":[{"name":"consensus"}],"params":[{"name":"contractAddress","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"htlcSenderSignature","schema":{"type":"string"},"required":true},{"name":"htlcRecipientSignature","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createRedeemRegularHtlcTransaction","description":"Returns a serialized transaction redeeming a HTLC contract using the `RegularTransfer` method.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"contractAddress","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"preImage","schema":{"type":"string"},"required":true},{"name":"hashRoot","schema":{"type":"string"},"required":true},{"name":"hashCount","schema":{"type":"number"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createRedeemTimeoutHtlcTransaction","description":"Returns a serialized transaction redeeming a HTLC contract using the `TimeoutResolve` method.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"contractAddress","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createRedeemVestingTransaction","description":"Returns a serialized transaction redeeming a vesting contract.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"contractAddress","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createRemoveStakeTransaction","description":"Returns a serialized `remove_stake` transaction. The transaction fee will be paid from the funds being removed.","tags":[{"name":"consensus"}],"params":[{"name":"stakerWallet","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createRetireStakeTransaction","description":"Returns a serialized `retire_stake` transaction. You can pay the transaction fee from a basic account (by providing the sender wallet) or from the staker account\'s balance (by not providing a sender wallet).","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"stakerWallet","schema":{"type":"string"},"required":true},{"name":"retireStake","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createRetireValidatorTransaction","description":"Returns a serialized `retire_validator` transaction. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"validatorWallet","schema":{"type":"string"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createSetActiveStakeTransaction","description":"Returns a serialized `set_active_stake` transaction. You can pay the transaction fee from a basic account (by providing the sender wallet) or from the staker account\'s balance (by not providing a sender wallet).","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"stakerWallet","schema":{"type":"string"},"required":true},{"name":"newActiveBalance","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createStakeTransaction","description":"Returns a serialized `stake` transaction. The funds to be staked and the transaction fee will be paid from the `sender_wallet`.","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"stakerAddress","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createUpdateStakerTransaction","description":"Returns a serialized `update_staker` transaction. You can pay the transaction fee from a basic account (by providing the sender wallet) or from the staker account\'s balance (by not providing a sender wallet).","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"stakerWallet","schema":{"type":"string"},"required":true},{"name":"newDelegation","schema":{"type":"string"},"required":true},{"name":"reactivateAllStake","schema":{"type":"boolean"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"createUpdateValidatorTransaction","description":"Returns a serialized `update_validator` transaction. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee. Since JSON doesn\'t have a primitive for Option (it just has the null primitive), we can\'t have a double Option. So we use the following work-around for the signal data: null = No change in the signal data field. \\\\\\"\\\\\\" = Change the signal data field to None. \\\\\\"0x29a4b...\\\\\\" = Change the signal data field to Some(0x29a4b...).","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"validatorWallet","schema":{"type":"string"},"required":true},{"name":"newSigningSecretKey","schema":{"type":"string"},"required":true},{"name":"newVotingSecretKey","schema":{"type":"string"},"required":true},{"name":"newRewardAddress","schema":{"type":"string"},"required":true},{"name":"newSignalData","schema":{"type":"string"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"getAccountByAddress","description":"Tries to fetch the account at the given address.","tags":[{"name":"blockchain"}],"params":[{"name":"address","schema":{"type":"string"},"required":true}],"result":{"name":"Account","schema":{"$ref":"#/components/schemas/Account"}}},{"name":"getAccounts","description":"Fetches all accounts in the accounts tree. IMPORTANT: This operation iterates over all accounts in the accounts tree and thus is extremely computationally expensive.","tags":[{"name":"blockchain"}],"params":[],"result":{"name":"Vec","schema":{"type":"array","items":{"$ref":"#/components/schemas/Account"}}}},{"name":"getActiveValidators","description":"Returns a collection of the currently active validator\'s addresses and balances.","tags":[{"name":"blockchain"}],"params":[],"result":{"name":"Vec","schema":{"type":"array","items":{"$ref":"#/components/schemas/Validator"}}}},{"name":"getAddress","description":"Returns our validator address.","tags":[{"name":"validator"}],"params":[],"result":{"name":"Address","schema":{"type":"string"}}},{"name":"getAddressBook","description":"Returns the address book","tags":[{"name":"network"}],"params":[],"result":{"name":"Vec","schema":{"type":"array","items":{"type":"object","properties":{"0":{"type":"string"},"1":{"type":"object"}}}}}},{"name":"getBatchAt","description":"Returns the batch number at a given `block_number` (height).","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getBatchIndexAt","description":"Returns the batch index at a given block number. The batch index is the number of a block relative to the batch it is in. For example, the first block of any batch always has an batch index of 0.","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getBatchNumber","description":"Returns the batch number for the current head.","tags":[{"name":"blockchain"}],"params":[],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getBlockAfterJail","description":"Returns the first block after the jail period of a given block number has ended.","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getBlockAfterReportingWindow","description":"Returns the first block after the reporting window of a given block number has ended.","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getBlockByHash","description":"Tries to fetch a block given its hash. It has an option to include the transactions in the block, which defaults to false.","tags":[{"name":"blockchain"}],"params":[{"name":"hash","schema":{"type":"string"},"required":true},{"name":"includeBody","schema":{"type":"boolean"},"required":true}],"result":{"name":"Block","schema":{"$ref":"#/components/schemas/Block"}}},{"name":"getBlockByNumber","description":"Tries to fetch a block given its number. It has an option to include the transactions in the block, which defaults to false. Note that this function will only fetch blocks that are part of the main chain.","tags":[{"name":"blockchain"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true},{"name":"includeBody","schema":{"type":"boolean"},"required":true}],"result":{"name":"Block","schema":{"$ref":"#/components/schemas/Block"}}},{"name":"getBlockNumber","description":"Returns the block number for the current head.","tags":[{"name":"blockchain"}],"params":[],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getCurrentPenalizedSlots","description":"Returns information about the currently penalized slots. This includes slots that lost rewards and that were disabled.","tags":[{"name":"blockchain"}],"params":[],"result":{"name":"PenalizedSlots","schema":{"$ref":"#/components/schemas/PenalizedSlots"}}},{"name":"getElectionBlockAfter","description":"Returns the number (height) of the next election macro block after a given block number (height).","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getElectionBlockBefore","description":"Returns the number block (height) of the preceding election macro block before a given block number (height). If the given block number is an election macro block, it returns the election macro block before it.","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getElectionBlockOf","description":"Returns the block number of the election macro block of the given epoch (which is always the last block).","tags":[{"name":"policy"}],"params":[{"name":"epoch","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getEpochAt","description":"Returns the epoch number at a given block number (height).","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getEpochIndexAt","description":"Returns the epoch index at a given block number. The epoch index is the number of a block relative to the epoch it is in. For example, the first block of any epoch always has an epoch index of 0.","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getEpochNumber","description":"Returns the epoch number for the current head.","tags":[{"name":"blockchain"}],"params":[],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getFirstBatchOfEpoch","description":"Returns a boolean expressing if the batch at a given block number (height) is the first batch of the epoch.","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"bool","schema":{"type":"boolean"}}},{"name":"getFirstBlockOf","description":"Returns the block number of the first block of the given epoch (which is always a micro block).","tags":[{"name":"policy"}],"params":[{"name":"epoch","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getFirstBlockOfBatch","description":"Returns the block number of the first block of the given batch (which is always a micro block).","tags":[{"name":"policy"}],"params":[{"name":"batch","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getInherentsByBatchNumber","description":"Returns all the inherents (including reward inherents) for the given batch number. Note that this only considers blocks in the main chain.","tags":[{"name":"blockchain"}],"params":[{"name":"batchNumber","schema":{"type":"number"},"required":true}],"result":{"name":"Vec","schema":{"type":"array","items":{"type":"object"}}}},{"name":"getInherentsByBlockNumber","description":"Returns all the inherents (including reward inherents) for the given block number. Note that this only considers blocks in the main chain.","tags":[{"name":"blockchain"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"Vec","schema":{"type":"array","items":{"type":"object"}}}},{"name":"getLastElectionBlock","description":"Returns the block number (height) of the last election macro block at a given block number (height). If the given block number is an election macro block, then it returns that block number.","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getLastMacroBlock","description":"Returns block the number (height) of the last macro block at a given block number (height). If the given block number is a macro block, then it returns that block number.","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getLatestBlock","description":"Returns the block at the head of the main chain. It has an option to include the transactions in the block, which defaults to false.","tags":[{"name":"blockchain"}],"params":[{"name":"includeBody","schema":{"type":"boolean"},"required":true}],"result":{"name":"Block","schema":{"$ref":"#/components/schemas/Block"}}},{"name":"getMacroBlockAfter","description":"Returns the block number (height) of the next macro block after a given block number (height).","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getMacroBlockBefore","description":"Returns the block number (height) of the preceding macro block before a given block number (height). If the given block number is a macro block, it returns the macro block before it.","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getMacroBlockOf","description":"Returns the block number of the macro block (checkpoint or election) of the given batch (which is always the last block).","tags":[{"name":"policy"}],"params":[{"name":"batch","schema":{"type":"number"},"required":true}],"result":{"name":"u32","schema":{"type":"number"}}},{"name":"getMinFeePerByte","description":"Obtains the minimum fee per byte as per mempool configuration.","tags":[{"name":"mempool"}],"params":[],"result":{"name":"f64","schema":{"type":"number"}}},{"name":"getNetworkId","description":"Returns the network ID.","tags":[{"name":"blockchain"}],"params":[],"result":{"name":"NetworkId","schema":{"$ref":"#/components/schemas/NetworkId"}}},{"name":"getPeerCount","description":"Returns the number of peers.","tags":[{"name":"network"}],"params":[],"result":{"name":"usize","schema":{"type":"number"}}},{"name":"getPeerId","description":"Returns the peer ID for our local peer.","tags":[{"name":"network"}],"params":[],"result":{"name":"String","schema":{"type":"string"}}},{"name":"getPeerList","description":"Returns a list with the IDs of all our peers.","tags":[{"name":"network"}],"params":[],"result":{"name":"Vec","schema":{"type":"array","items":{"type":"string"}}}},{"name":"getPolicyConstants","description":"Returns a bundle of policy constants.","tags":[{"name":"policy"}],"params":[],"result":{"name":"PolicyConstants","schema":{"$ref":"#/components/schemas/PolicyConstants"}}},{"name":"getPreviousPenalizedSlots","description":"Returns information about the penalized slots of the previous batch. This includes slots that lost rewards and that were disabled.","tags":[{"name":"blockchain"}],"params":[],"result":{"name":"PenalizedSlots","schema":{"$ref":"#/components/schemas/PenalizedSlots"}}},{"name":"getRawTransactionInfo","description":"Given a serialized transaction, it will return the corresponding transaction struct.","tags":[{"name":"consensus"}],"params":[{"name":"rawTx","schema":{"type":"string"},"required":true}],"result":{"name":"Transaction","schema":{"$ref":"#/components/schemas/Transaction"}}},{"name":"getSigningKey","description":"Returns our validator signing key.","tags":[{"name":"validator"}],"params":[],"result":{"name":"String","schema":{"type":"string"}}},{"name":"getSlotAt","description":"Returns information about the proposer slot at the given block height and offset. The offset is optional, it will default to getting the offset for the existing block at the given height. We only have this information available for the last 2 batches at most.","tags":[{"name":"blockchain"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true},{"name":"offsetOpt","schema":{"type":"number"},"required":true}],"result":{"name":"Slot","schema":{"$ref":"#/components/schemas/Slot"}}},{"name":"getStakerByAddress","description":"Tries to fetch a staker information given its address.","tags":[{"name":"blockchain"}],"params":[{"name":"address","schema":{"type":"string"},"required":true}],"result":{"name":"Staker","schema":{"$ref":"#/components/schemas/Staker"}}},{"name":"getStakersByValidatorAddress","description":"Fetches all stakers for a given validator. IMPORTANT: This operation iterates over all stakers of the staking contract and thus is extremely computationally expensive.","tags":[{"name":"blockchain"}],"params":[{"name":"address","schema":{"type":"string"},"required":true}],"result":{"name":"Vec","schema":{"type":"array","items":{"$ref":"#/components/schemas/Staker"}}}},{"name":"getSupplyAt","description":"Returns the supply at a given time (as Unix time) in Lunas (1 NIM = 100,000 Lunas). It is calculated using the following formula: ```text supply(t) = total_supply - (total_supply - genesis_supply) * supply_decay^t ``` Where t is the time in milliseconds since the PoS genesis block and `genesis_supply` is the supply at the genesis of the Nimiq 2.0 chain.","tags":[{"name":"policy"}],"params":[{"name":"genesisSupply","schema":{"type":"number"},"required":true},{"name":"genesisTime","schema":{"type":"number"},"required":true},{"name":"currentTime","schema":{"type":"number"},"required":true}],"result":{"name":"u64","schema":{"type":"number"}}},{"name":"getSyncStatus","description":"Returns the status of the sync process","tags":[{"name":"consensus"}],"params":[],"result":{"name":"ConsensusSyncStatus","schema":{"$ref":"#/components/schemas/ConsensusSyncStatus"}}},{"name":"getTransactionByHash","description":"Tries to fetch a transaction (including reward transactions) given its hash.","tags":[{"name":"blockchain"}],"params":[{"name":"hash","schema":{"type":"string"},"required":true}],"result":{"name":"ExecutedTransaction","schema":{"$ref":"#/components/schemas/ExecutedTransaction"}}},{"name":"getTransactionFromMempool","description":"Tries to obtain the given transaction (using its hash) from the mempool.","tags":[{"name":"mempool"}],"params":[{"name":"hash","schema":{"type":"string"},"required":true}],"result":{"name":"Transaction","schema":{"$ref":"#/components/schemas/Transaction"}}},{"name":"getTransactionHashesByAddress","description":"Returns the hashes for the latest transactions for a given address. All the transactions where the given address is listed as a recipient or as a sender are considered. Reward transactions are also returned. It has an option to specify the maximum number of hashes to fetch, it defaults to 500. It has also an option to retrieve transactions before a given transaction hash (exclusive). If this hash is not found or does not belong to this address, it will return an empty list. The transaction hashes are returned in descending order, meaning the latest transaction is the first.","tags":[{"name":"blockchain"}],"params":[{"name":"address","schema":{"type":"string"},"required":true},{"name":"max","schema":{"type":"number"},"required":true},{"name":"startAt","schema":{"type":"string"},"required":true}],"result":{"name":"Vec","schema":{"type":"array","items":{"type":"string"}}}},{"name":"getTransactionReferencesByAddress","description":"Returns the transactions receipts (similar to get transactions by address)","tags":[{"name":"blockchain"}],"params":[{"name":"address","schema":{"type":"string"},"required":true},{"name":"max","schema":{"type":"number"},"required":true},{"name":"startAt","schema":{"type":"string"},"required":true}],"result":{"name":"Vec","schema":{"type":"array","items":{"type":"object","properties":{"0":{"type":"string"},"1":{"type":"number"}}}}}},{"name":"getTransactionsByAddress","description":"Returns the latest transactions for a given address. All the transactions where the given address is listed as a recipient or as a sender are considered. Reward transactions are also returned. It has an option to specify the maximum number of transactions to fetch, it defaults to 500. It has also an option to retrieve transactions before a given transaction hash (exclusive). If this hash is not found or does not belong to this address, it will return an empty list. The transactions are returned in descending order, meaning the latest transaction is the first.","tags":[{"name":"blockchain"}],"params":[{"name":"address","schema":{"type":"string"},"required":true},{"name":"max","schema":{"type":"number"},"required":true},{"name":"startAt","schema":{"type":"string"},"required":true}],"result":{"name":"Vec","schema":{"type":"array","items":{"$ref":"#/components/schemas/ExecutedTransaction"}}}},{"name":"getTransactionsByBatchNumber","description":"Returns all the transactions (including reward transactions) for the given batch number. Note that this only considers blocks in the main chain.","tags":[{"name":"blockchain"}],"params":[{"name":"batchNumber","schema":{"type":"number"},"required":true}],"result":{"name":"Vec","schema":{"type":"array","items":{"$ref":"#/components/schemas/ExecutedTransaction"}}}},{"name":"getTransactionsByBlockNumber","description":"Returns all the transactions (including reward transactions) for the given block number. Note that this only considers blocks in the main chain.","tags":[{"name":"blockchain"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"Vec","schema":{"type":"array","items":{"$ref":"#/components/schemas/ExecutedTransaction"}}}},{"name":"getValidatorByAddress","description":"Tries to fetch a validator information given its address.","tags":[{"name":"blockchain"}],"params":[{"name":"address","schema":{"type":"string"},"required":true}],"result":{"name":"Validator","schema":{"$ref":"#/components/schemas/Validator"}}},{"name":"getValidators","description":"Fetches all validators in the staking contract. IMPORTANT: This operation iterates over all validators in the staking contract and thus is extremely computationally expensive.","tags":[{"name":"blockchain"}],"params":[],"result":{"name":"Vec","schema":{"type":"array","items":{"$ref":"#/components/schemas/Validator"}}}},{"name":"getVotingKey","description":"Returns our current validator voting key.","tags":[{"name":"validator"}],"params":[],"result":{"name":"String","schema":{"type":"string"}}},{"name":"getVotingKeys","description":"Returns all available voting keys.","tags":[{"name":"validator"}],"params":[],"result":{"name":"Vec","schema":{"type":"array","items":{"type":"string"}}}},{"name":"getZkpState","description":"Returns the current ZKP state (proof with its related block hash and block number).","tags":[{"name":"zkp_component"}],"params":[],"result":{"name":"ZKPState","schema":{"$ref":"#/components/schemas/ZKPState"}}},{"name":"importRawKey","description":"Import an account by its private key, in hexadecimal format, and lock it with the passphrase.","tags":[{"name":"wallet"}],"params":[{"name":"keyData","schema":{"type":"string"},"required":true},{"name":"passphrase","schema":{"type":"string"},"required":true}],"result":{"name":"Address","schema":{"type":"string"}}},{"name":"isAccountImported","description":"Returns if an account has been imported.","tags":[{"name":"wallet"}],"params":[{"name":"address","schema":{"type":"string"},"required":true}],"result":{"name":"bool","schema":{"type":"boolean"}}},{"name":"isAccountUnlocked","description":"Returns if the account currently is unlocked.","tags":[{"name":"wallet"}],"params":[{"name":"address","schema":{"type":"string"},"required":true}],"result":{"name":"bool","schema":{"type":"boolean"}}},{"name":"isConsensusEstablished","description":"Returns a boolean specifying if we have established consensus with the network.","tags":[{"name":"consensus"}],"params":[],"result":{"name":"bool","schema":{"type":"boolean"}}},{"name":"isElectionBlockAt","description":"Returns a boolean expressing if the block at a given block number (height) is an election macro block.","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"bool","schema":{"type":"boolean"}}},{"name":"isMacroBlockAt","description":"Returns a boolean expressing if the block at a given block number (height) is a macro block.","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"bool","schema":{"type":"boolean"}}},{"name":"isMicroBlockAt","description":"Returns a boolean expressing if the block at a given block number (height) is a micro block.","tags":[{"name":"policy"}],"params":[{"name":"blockNumber","schema":{"type":"number"},"required":true}],"result":{"name":"bool","schema":{"type":"boolean"}}},{"name":"isValidatorElected","description":"Returns if our validator is currently elected.","tags":[{"name":"validator"}],"params":[],"result":{"name":"bool","schema":{"type":"boolean"}}},{"name":"isValidatorSynced","description":"Returns if our validator is currently synced.","tags":[{"name":"validator"}],"params":[],"result":{"name":"bool","schema":{"type":"boolean"}}},{"name":"listAccounts","description":"Returns the accounts that have been imported.","tags":[{"name":"wallet"}],"params":[],"result":{"name":"Vec","schema":{"type":"array","items":{"type":"string"}}}},{"name":"lockAccount","description":"Locks the account to prevent further usage.","tags":[{"name":"wallet"}],"params":[{"name":"address","schema":{"type":"string"},"required":true}],"result":{"name":"null","schema":{"type":"null"}}},{"name":"mempool","description":"Obtains the mempool content in fee per byte buckets.","tags":[{"name":"mempool"}],"params":[],"result":{"name":"MempoolInfo","schema":{"$ref":"#/components/schemas/MempoolInfo"}}},{"name":"mempoolContent","description":"Obtains the list of transactions that are currently in the mempool.","tags":[{"name":"mempool"}],"params":[{"name":"includeTransactions","schema":{"type":"boolean"},"required":true}],"result":{"name":"Vec","schema":{"type":"array","items":{"type":"object"}}}},{"name":"pushHighPriorityTransaction","description":"Pushes a raw transaction with a high priority assigned into the mempool and broadcast it to the network.","tags":[{"name":"mempool"}],"params":[{"name":"rawTx","schema":{"type":"string"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"pushTransaction","description":"Pushes a raw transaction with a default priority assigned into the mempool and broadcast it to the network.","tags":[{"name":"mempool"}],"params":[{"name":"rawTx","schema":{"type":"string"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"removeAccount","description":"Removes an imported account. IMPORTANT: This action is irreversible, and the account can only be recovered with its private key.","tags":[{"name":"wallet"}],"params":[{"name":"address","schema":{"type":"string"},"required":true}],"result":{"name":"bool","schema":{"type":"boolean"}}},{"name":"sendBasicTransaction","description":"Sends a basic transaction to the network.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendBasicTransactionWithData","description":"Sends a basic transaction, with an arbitrary data field, to the network.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"data","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendDeactivateValidatorTransaction","description":"Sends a `deactivate_validator` transaction to the network. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"validatorAddress","schema":{"type":"string"},"required":true},{"name":"signingSecretKey","schema":{"type":"string"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendDeleteValidatorTransaction","description":"Sends a `delete_validator` transaction to the network. The transaction fee will be paid from the validator deposit that is being returned.","tags":[{"name":"consensus"}],"params":[{"name":"validatorWallet","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendNewHtlcTransaction","description":"Sends a transaction creating a new HTLC contract to the network.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"htlcSender","schema":{"type":"string"},"required":true},{"name":"htlcRecipient","schema":{"type":"string"},"required":true},{"name":"hashRoot","schema":{"type":"string"},"required":true},{"name":"hashCount","schema":{"type":"number"},"required":true},{"name":"timeout","schema":{"type":"number"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendNewStakerTransaction","description":"Sends a `new_staker` transaction to the network. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"stakerWallet","schema":{"type":"string"},"required":true},{"name":"delegation","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendNewValidatorTransaction","description":"Sends a `new_validator` transaction to the network. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee and the validator deposit. Since JSON doesn\'t have a primitive for Option (it just has the null primitive), we can\'t have a double Option. So we use the following work-around for the signal data: \\\\\\"\\\\\\" = Set the signal data field to None. \\\\\\"0x29a4b...\\\\\\" = Set the signal data field to Some(0x29a4b...).","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"validatorWallet","schema":{"type":"string"},"required":true},{"name":"signingSecretKey","schema":{"type":"string"},"required":true},{"name":"votingSecretKey","schema":{"type":"string"},"required":true},{"name":"rewardAddress","schema":{"type":"string"},"required":true},{"name":"signalData","schema":{"type":"string"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendNewVestingTransaction","description":"Sends a transaction creating a new vesting contract to the network.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"owner","schema":{"type":"string"},"required":true},{"name":"startTime","schema":{"type":"number"},"required":true},{"name":"timeStep","schema":{"type":"number"},"required":true},{"name":"numSteps","schema":{"type":"number"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendRawTransaction","description":"Sends the given serialized transaction to the network.","tags":[{"name":"consensus"}],"params":[{"name":"rawTx","schema":{"type":"string"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendReactivateValidatorTransaction","description":"Sends a `reactivate_validator` transaction to the network. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"validatorAddress","schema":{"type":"string"},"required":true},{"name":"signingSecretKey","schema":{"type":"string"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendRedeemEarlyHtlcTransaction","description":"Sends a transaction redeeming a HTLC contract, using the `EarlyResolve` method, to the network.","tags":[{"name":"consensus"}],"params":[{"name":"contractAddress","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"htlcSenderSignature","schema":{"type":"string"},"required":true},{"name":"htlcRecipientSignature","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendRedeemRegularHtlcTransaction","description":"Sends a transaction redeeming a HTLC contract, using the `RegularTransfer` method, to the network.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"contractAddress","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"preImage","schema":{"type":"string"},"required":true},{"name":"hashRoot","schema":{"type":"string"},"required":true},{"name":"hashCount","schema":{"type":"number"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendRedeemTimeoutHtlcTransaction","description":"Sends a transaction redeeming a HTLC contract, using the `TimeoutResolve` method, to the network.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"contractAddress","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendRedeemVestingTransaction","description":"Sends a transaction redeeming a vesting contract to the network.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"contractAddress","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendRemoveStakeTransaction","description":"Sends a `remove_stake` transaction to the network. The transaction fee will be paid from the funds being removed.","tags":[{"name":"consensus"}],"params":[{"name":"stakerWallet","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendRetireStakeTransaction","description":"Sends a `retire_stake` transaction to the network. You can pay the transaction fee from a basic account (by providing the sender wallet) or from the staker account\'s balance (by not providing a sender wallet).","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"stakerWallet","schema":{"type":"string"},"required":true},{"name":"retireStake","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendRetireValidatorTransaction","description":"Sends a `retire_validator` transaction to the network. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee.","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"validatorWallet","schema":{"type":"string"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendSetActiveStakeTransaction","description":"Sends a `set_active_stake` transaction to the network. You can pay the transaction fee from a basic account (by providing the sender wallet) or from the staker account\'s balance (by not providing a sender wallet).","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"stakerWallet","schema":{"type":"string"},"required":true},{"name":"newActiveBalance","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendStakeTransaction","description":"Sends a `stake` transaction to the network. The funds to be staked and the transaction fee will be paid from the `sender_wallet`.","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"stakerAddress","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendUpdateStakerTransaction","description":"Sends a `update_staker` transaction to the network. You can pay the transaction fee from a basic account (by providing the sender wallet) or from the staker account\'s balance (by not providing a sender wallet).","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"stakerWallet","schema":{"type":"string"},"required":true},{"name":"newDelegation","schema":{"type":"string"},"required":true},{"name":"reactivateAllStake","schema":{"type":"boolean"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"sendUpdateValidatorTransaction","description":"Sends a `update_validator` transaction to the network. You need to provide the address of a basic account (the sender wallet) to pay the transaction fee. Since JSON doesn\'t have a primitive for Option (it just has the null primitive), we can\'t have a double Option. So we use the following work-around for the signal data: null = No change in the signal data field. \\\\\\"\\\\\\" = Change the signal data field to None. \\\\\\"0x29a4b...\\\\\\" = Change the signal data field to Some(0x29a4b...).","tags":[{"name":"consensus"}],"params":[{"name":"senderWallet","schema":{"type":"string"},"required":true},{"name":"validatorWallet","schema":{"type":"string"},"required":true},{"name":"newSigningSecretKey","schema":{"type":"string"},"required":true},{"name":"newVotingSecretKey","schema":{"type":"string"},"required":true},{"name":"newRewardAddress","schema":{"type":"string"},"required":true},{"name":"newSignalData","schema":{"type":"string"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"Blake2bHash","schema":{"type":"string"}}},{"name":"setAutomaticReactivation","description":"Updates the configuration setting to automatically reactivate our validator.","tags":[{"name":"validator"}],"params":[{"name":"automaticReactivate","schema":{"type":"boolean"},"required":true}],"result":{"name":"null","schema":{"type":"null"}}},{"name":"sign","description":"","tags":[{"name":"wallet"}],"params":[{"name":"message","schema":{"type":"string"},"required":true},{"name":"address","schema":{"type":"string"},"required":true},{"name":"passphrase","schema":{"type":"string"},"required":true},{"name":"isHex","schema":{"type":"boolean"},"required":true}],"result":{"name":"ReturnSignature","schema":{"$ref":"#/components/schemas/ReturnSignature"}}},{"name":"signRedeemEarlyHtlcTransaction","description":"Returns a serialized signature that can be used to redeem funds from a HTLC contract using the `EarlyResolve` method.","tags":[{"name":"consensus"}],"params":[{"name":"wallet","schema":{"type":"string"},"required":true},{"name":"contractAddress","schema":{"type":"string"},"required":true},{"name":"recipient","schema":{"type":"string"},"required":true},{"name":"value","schema":{"type":"number"},"required":true},{"name":"fee","schema":{"type":"number"},"required":true},{"name":"validityStartHeight","schema":{"type":"number"},"required":true}],"result":{"name":"String","schema":{"type":"string"}}},{"name":"subscribeForHeadBlock","description":"Subscribes to new block events (retrieves the full block).","tags":[{"name":"blockchain"},{"name":"stream"}],"params":[{"name":"includeBody","schema":{"type":"boolean"},"required":true}],"result":{"name":"BoxStream","schema":{"type":"number"}}},{"name":"subscribeForHeadBlockHash","description":"Subscribes to new block events (only retrieves the block hash).","tags":[{"name":"blockchain"},{"name":"stream"}],"params":[],"result":{"name":"BoxStream","schema":{"type":"number"}}},{"name":"subscribeForLogsByAddressesAndTypes","description":"Subscribes to log events related to a given list of addresses and of any of the log types provided. If addresses is empty it does not filter by address. If log_types is empty it won\'t filter by log types. Thus the behavior is to assume all addresses or log_types are to be provided if the corresponding vec is empty.","tags":[{"name":"blockchain"},{"name":"stream"}],"params":[{"name":"addresses","schema":{"type":"string"},"required":true},{"name":"logTypes","schema":{"type":"array","items":{"type":"string"}},"required":true}],"result":{"name":"BoxStream","schema":{"type":"number"}}},{"name":"subscribeForValidatorElectionByAddress","description":"Subscribes to pre epoch validators events.","tags":[{"name":"blockchain"},{"name":"stream"}],"params":[{"name":"address","schema":{"type":"string"},"required":true}],"result":{"name":"BoxStream","schema":{"type":"number"}}},{"name":"unlockAccount","description":"Unlocks the account.","tags":[{"name":"wallet"}],"params":[{"name":"address","schema":{"type":"string"},"required":true},{"name":"passphrase","schema":{"type":"string"},"required":true},{"name":"duration","schema":{"type":"number"},"required":true}],"result":{"name":"bool","schema":{"type":"boolean"}}},{"name":"verifySignature","description":"Verifies the signature based on the provided public key and message.","tags":[{"name":"wallet"}],"params":[{"name":"message","schema":{"type":"string"},"required":true},{"name":"publicKey","schema":{"type":"string"},"required":true},{"name":"signature","schema":{"type":"string"},"required":true},{"name":"isHex","schema":{"type":"boolean"},"required":true}],"result":{"name":"bool","schema":{"type":"boolean"}}}]'), an = { schemas: { Account: { title: "Account", description: "", required: ["address", "balance", "accountAdditionalFields"], properties: { address: { title: "address", type: "string" }, balance: { title: "balance", type: "number" }, accountAdditionalFields: { title: "accountAdditionalFields", type: "object" } } }, Block: { title: "Block", description: "", required: ["hash", "size", "batch", "epoch", "network", "version", "number", "timestamp", "parentHash", "seed", "extraData", "stateHash", "bodyHash", "historyHash", "additionalFields"], properties: { hash: { title: "hash", type: "string" }, size: { title: "size", type: "number" }, batch: { title: "batch", type: "number" }, epoch: { title: "epoch", type: "number" }, network: { title: "network", type: "string" }, version: { title: "version", type: "number" }, number: { title: "number", type: "number" }, timestamp: { title: "timestamp", type: "number" }, parentHash: { title: "parentHash", type: "string" }, seed: { title: "seed", type: "string" }, extraData: { title: "extraData", type: "array", items: { type: "number" } }, stateHash: { title: "stateHash", type: "string" }, bodyHash: { title: "bodyHash", type: "string" }, historyHash: { title: "historyHash", type: "string" }, transactions: { title: "transactions", type: "array", items: { $ref: "#/components/schemas/ExecutedTransaction" } }, additionalFields: { title: "additionalFields", type: "object" } } }, BlockchainState: { title: "BlockchainState", description: "", required: ["blockNumber", "blockHash"], properties: { blockNumber: { title: "blockNumber", type: "number" }, blockHash: { title: "blockHash", type: "string" } } }, DoubleProposalProof: { title: "DoubleProposalProof", description: "", required: ["blockNumber", "hashes"], properties: { blockNumber: { title: "blockNumber", type: "number" } } }, DoubleVoteProof: { title: "DoubleVoteProof", description: "", required: ["blockNumber"], properties: { blockNumber: { title: "blockNumber", type: "number" } } }, ExecutedTransaction: { title: "ExecutedTransaction", description: "", required: ["transaction", "executionResult"], properties: { transaction: { title: "transaction", $ref: "#/components/schemas/Transaction" }, executionResult: { title: "executionResult", type: "boolean" } } }, ForkProof: { title: "ForkProof", description: "", required: ["blockNumber", "hashes"], properties: { blockNumber: { title: "blockNumber", type: "number" } } }, MempoolInfo: { title: "MempoolInfo", description: "", required: ["total", "buckets"], properties: { 0: { title: "0", type: "number" }, 1: { title: "1", type: "number" }, 2: { title: "2", type: "number" }, 5: { title: "5", type: "number" }, 10: { title: "10", type: "number" }, 20: { title: "20", type: "number" }, 50: { title: "50", type: "number" }, 100: { title: "100", type: "number" }, 200: { title: "200", type: "number" }, 500: { title: "500", type: "number" }, 1e3: { title: "1000", type: "number" }, 2e3: { title: "2000", type: "number" }, 5e3: { title: "5000", type: "number" }, 1e4: { title: "10000", type: "number" }, total: { title: "total", type: "number" }, buckets: { title: "buckets", type: "array", items: { type: "number" } } } }, PenalizedSlots: { title: "PenalizedSlots", description: "", required: ["blockNumber", "disabled"], properties: { blockNumber: { title: "blockNumber", type: "number" }, disabled: { title: "disabled", type: "object" } } }, PolicyConstants: { title: "PolicyConstants", description: "", required: ["stakingContractAddress", "coinbaseAddress", "transactionValidityWindow", "maxSizeMicroBody", "slots", "blocksPerBatch", "batchesPerEpoch", "blocksPerEpoch", "validatorDeposit", "minimumStake", "totalSupply", "blockSeparationTime", "jailEpochs", "genesisBlockNumber", "maxSupportedVersion"], properties: { stakingContractAddress: { title: "stakingContractAddress", type: "string" }, coinbaseAddress: { title: "coinbaseAddress", type: "string" }, transactionValidityWindow: { title: "transactionValidityWindow", type: "number" }, maxSizeMicroBody: { title: "maxSizeMicroBody", type: "number" }, slots: { title: "slots", type: "number" }, blocksPerBatch: { title: "blocksPerBatch", type: "number" }, batchesPerEpoch: { title: "batchesPerEpoch", type: "number" }, blocksPerEpoch: { title: "blocksPerEpoch", type: "number" }, validatorDeposit: { title: "validatorDeposit", type: "number" }, minimumStake: { title: "minimumStake", type: "number" }, totalSupply: { title: "totalSupply", type: "number" }, blockSeparationTime: { title: "blockSeparationTime", type: "number" }, jailEpochs: { title: "jailEpochs", type: "number" }, genesisBlockNumber: { title: "genesisBlockNumber", type: "number" }, maxSupportedVersion: { title: "maxSupportedVersion", type: "number" } } }, RPCData: { title: "RPCData", description: "", required: ["data", "metadata"], properties: { data: { title: "data", type: "object" }, metadata: { title: "metadata", type: "object" } } }, ReturnAccount: { title: "ReturnAccount", description: "", required: ["address", "publicKey", "privateKey"], properties: { address: { title: "address", type: "string" }, publicKey: { title: "publicKey", type: "string" }, privateKey: { title: "privateKey", type: "string" } } }, ReturnSignature: { title: "ReturnSignature", description: "", required: ["publicKey", "signature"], properties: { publicKey: { title: "publicKey", type: "string" }, signature: { title: "signature", type: "string" } } }, Slot: { title: "Slot", description: "", required: ["slotNumber", "validator", "publicKey"], properties: { slotNumber: { title: "slotNumber", type: "number" }, validator: { title: "validator", type: "string" }, publicKey: { title: "publicKey", type: "string" } } }, Slots: { title: "Slots", description: "", required: ["firstSlotNumber", "numSlots", "validator", "publicKey"], properties: { firstSlotNumber: { title: "firstSlotNumber", type: "number" }, numSlots: { title: "numSlots", type: "number" }, validator: { title: "validator", type: "string" }, publicKey: { title: "publicKey", type: "string" } } }, Staker: { title: "Staker", description: "", required: ["address", "balance", "inactiveBalance", "retiredBalance"], properties: { address: { title: "address", type: "string" }, balance: { title: "balance", type: "number" }, delegation: { title: "delegation", type: "string" }, inactiveBalance: { title: "inactiveBalance", type: "number" }, inactiveFrom: { title: "inactiveFrom", type: "number" }, retiredBalance: { title: "retiredBalance", type: "number" } } }, TendermintProof: { title: "TendermintProof", description: "", required: ["round", "sig"], properties: { round: { title: "round", type: "number" }, sig: { title: "sig", type: "object" } } }, Transaction: { title: "Transaction", description: "", required: ["hash", "size", "relatedAddresses", "from", "fromType", "to", "toType", "value", "fee", "senderData", "recipientData", "flags", "validityStartHeight", "proof", "networkId"], properties: { hash: { title: "hash", type: "string" }, blockNumber: { title: "blockNumber", type: "number" }, timestamp: { title: "timestamp", type: "number" }, confirmations: { title: "confirmations", type: "number" }, size: { title: "size", type: "number" }, relatedAddresses: { title: "relatedAddresses", type: "object" }, from: { title: "from", type: "string" }, fromType: { title: "fromType", type: "number" }, to: { title: "to", type: "string" }, toType: { title: "toType", type: "number" }, value: { title: "value", type: "number" }, fee: { title: "fee", type: "number" }, senderData: { title: "senderData", type: "array", items: { type: "number" } }, recipientData: { title: "recipientData", type: "array", items: { type: "number" } }, flags: { title: "flags", type: "number" }, validityStartHeight: { title: "validityStartHeight", type: "number" }, proof: { title: "proof", type: "array", items: { type: "number" } }, networkId: { title: "networkId", type: "number" } } }, Validator: { title: "Validator", description: "", required: ["address", "signingKey", "votingKey", "rewardAddress", "balance", "numStakers", "retired"], properties: { address: { title: "address", type: "string" }, signingKey: { title: "signingKey", type: "string" }, votingKey: { title: "votingKey", type: "string" }, rewardAddress: { title: "rewardAddress", type: "string" }, signalData: { title: "signalData", type: "string" }, balance: { title: "balance", type: "number" }, numStakers: { title: "numStakers", type: "number" }, inactivityFlag: { title: "inactivityFlag", type: "number" }, retired: { title: "retired", type: "boolean" }, jailedFrom: { title: "jailedFrom", type: "number" } } }, ZKPState: { title: "ZKPState", description: "", required: ["latestBlock"], properties: { latestBlock: { title: "latestBlock", $ref: "#/components/schemas/Block" }, latestProof: { title: "latestProof", type: "string" } } } }, examplePairings: {} }, Mn = { openrpc: rn, info: tn, methods: nn, components: an };
var we = {}, he = {}, ke = {}, Se = {}, ne = {}, Ie = {};
const sn = {}, on = Object.freeze(Object.defineProperty({ __proto__: null, default: sn }, Symbol.toStringTag, { value: "Module" })), sr = Xt(on);
var Mr;
function Nt() {
  if (Mr) return Ie;
  Mr = 1;
  var l = Ie && Ie.__importDefault || function(A) {
    return A && A.__esModule ? A : { default: A };
  };
  Object.defineProperty(Ie, "__esModule", { value: true }), Ie.default = x;
  const v = l(sr);
  function x(A) {
    var _a, _b, _c, _d;
    return A.startsWith("\\\\?\\") ? A : A.split((_b = (_a = v.default) == null ? void 0 : _a.win32) == null ? void 0 : _b.sep).join(((_d = (_c = v.default) == null ? void 0 : _c.posix) == null ? void 0 : _d.sep) ?? "/");
  }
  return Ie;
}
var $e = {}, Dr;
function un() {
  if (Dr) return $e;
  Dr = 1, Object.defineProperty($e, "__esModule", { value: true }), $e.isWindows = void 0;
  const l = /^win/.test(globalThis.process ? globalThis.process.platform : ""), v = () => l;
  return $e.isWindows = v, $e;
}
var Fr;
function _e() {
  if (Fr) return ne;
  Fr = 1;
  var l = ne && ne.__createBinding || (Object.create ? (function(S, g, K, Y) {
    Y === void 0 && (Y = K);
    var V = Object.getOwnPropertyDescriptor(g, K);
    (!V || ("get" in V ? !g.__esModule : V.writable || V.configurable)) && (V = { enumerable: true, get: function() {
      return g[K];
    } }), Object.defineProperty(S, Y, V);
  }) : (function(S, g, K, Y) {
    Y === void 0 && (Y = K), S[Y] = g[K];
  })), v = ne && ne.__setModuleDefault || (Object.create ? (function(S, g) {
    Object.defineProperty(S, "default", { enumerable: true, value: g });
  }) : function(S, g) {
    S.default = g;
  }), x = ne && ne.__importStar || /* @__PURE__ */ (function() {
    var S = function(g) {
      return S = Object.getOwnPropertyNames || function(K) {
        var Y = [];
        for (var V in K) Object.prototype.hasOwnProperty.call(K, V) && (Y[Y.length] = V);
        return Y;
      }, S(g);
    };
    return function(g) {
      if (g && g.__esModule) return g;
      var K = {};
      if (g != null) for (var Y = S(g), V = 0; V < Y.length; V++) Y[V] !== "default" && l(K, g, Y[V]);
      return v(K, g), K;
    };
  })(), A = ne && ne.__importDefault || function(S) {
    return S && S.__esModule ? S : { default: S };
  };
  Object.defineProperty(ne, "__esModule", { value: true }), ne.parse = void 0, ne.resolve = q, ne.cwd = b, ne.getProtocol = y, ne.getExtension = p, ne.stripQuery = m, ne.getHash = w, ne.stripHash = T, ne.isHttp = P, ne.isUnsafeUrl = J, ne.isFileSystemPath = z, ne.fromFileSystemPath = oe, ne.toFileSystemPath = ee, ne.safePointerToPath = te, ne.relative = Z;
  const c = A(Nt()), d = x(sr), f = /\//g, a = /^(\w{2,}):\/\//i, n = /~1/g, s = /~0/g, t = sr, u = un(), o = [[/\?/g, "%3F"], [/#/g, "%23"]], i = [/%23/g, "#", /%24/g, "$", /%26/g, "&", /%2C/g, ",", /%40/g, "@"], h = (S) => new URL(S);
  ne.parse = h;
  function q(S, g) {
    var _a;
    const K = new URL((0, c.default)(S), "https://aaa.nonexistanturl.com"), Y = new URL((0, c.default)(g), K), V = ((_a = g.match(/(\s*)$/)) == null ? void 0 : _a[1]) || "";
    if (Y.hostname === "aaa.nonexistanturl.com") {
      const { pathname: me, search: ce, hash: qe } = Y;
      return me + ce + qe + V;
    }
    return Y.toString() + V;
  }
  function b() {
    if (typeof window < "u" && window.location && window.location.href) {
      const S = window.location.href;
      if (!S || !S.startsWith("http")) try {
        return new URL(S), S;
      } catch {
        return "/";
      }
      return S;
    }
    if (typeof process < "u" && process.cwd) {
      const S = process.cwd(), g = S.slice(-1);
      return g === "/" || g === "\\" ? S : S + "/";
    }
    return "/";
  }
  function y(S) {
    const g = a.exec(S || "");
    if (g) return g[1].toLowerCase();
  }
  function p(S) {
    const g = S.lastIndexOf(".");
    return g >= 0 ? m(S.substring(g).toLowerCase()) : "";
  }
  function m(S) {
    const g = S.indexOf("?");
    return g >= 0 && (S = S.substring(0, g)), S;
  }
  function w(S) {
    if (!S) return "#";
    const g = S.indexOf("#");
    return g >= 0 ? S.substring(g) : "#";
  }
  function T(S) {
    if (!S) return "";
    const g = S.indexOf("#");
    return g >= 0 && (S = S.substring(0, g)), S;
  }
  function P(S) {
    const g = y(S);
    return g === "http" || g === "https" ? true : g === void 0 ? typeof window < "u" : false;
  }
  function J(S) {
    if (!S || typeof S != "string") return true;
    const g = S.trim().toLowerCase();
    if (!g || g.startsWith("javascript:") || g.startsWith("vbscript:") || g.startsWith("data:") || g.startsWith("file:")) return true;
    if (typeof window < "u" && window.location && window.location.href) return false;
    const K = ["localhost", "127.0.0.1", "::1", "10.", "172.16.", "172.17.", "172.18.", "172.19.", "172.20.", "172.21.", "172.22.", "172.23.", "172.24.", "172.25.", "172.26.", "172.27.", "172.28.", "172.29.", "172.30.", "172.31.", "192.168.", "169.254.", ".local", ".internal", ".intranet", ".corp", ".home", ".lan"];
    try {
      const Y = new URL(g.startsWith("//") ? "http:" + g : g), V = Y.hostname.toLowerCase();
      for (const ce of K) if (V === ce || V.startsWith(ce) || V.endsWith(ce)) return true;
      if (X(V)) return true;
      const me = Y.port;
      if (me && W(parseInt(me))) return true;
    } catch {
      if (g.startsWith("/") && !g.startsWith("//")) return false;
      for (const Y of K) if (g.includes(Y)) return true;
    }
    return false;
  }
  function X(S) {
    const g = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/, K = S.match(g);
    if (!K) return false;
    const [, Y, V, me, ce] = K.map(Number);
    return Y > 255 || V > 255 || me > 255 || ce > 255 ? false : Y === 10 || Y === 127 || Y === 172 && V >= 16 && V <= 31 || Y === 192 && V === 168 || Y === 169 && V === 254;
  }
  function W(S) {
    return [22, 23, 25, 53, 135, 139, 445, 993, 995, 1433, 1521, 3306, 3389, 5432, 5900, 6379, 8080, 8443, 9200, 27017].includes(S);
  }
  function z(S) {
    if (typeof window < "u" || typeof process < "u") return false;
    const g = y(S);
    return g === void 0 || g === "file";
  }
  function oe(S) {
    var _a;
    if ((0, u.isWindows)()) {
      const g = b(), K = S.toUpperCase(), V = (0, c.default)(g).toUpperCase(), me = K.includes(V), ce = K.includes(V), qe = ((_a = d.win32) == null ? void 0 : _a.isAbsolute(S)) || S.startsWith("http://") || S.startsWith("https://") || S.startsWith("file://");
      !(me || ce || qe) && !g.startsWith("http") && (S = (0, t.join)(g, S)), S = (0, c.default)(S);
    }
    S = encodeURI(S);
    for (const g of o) S = S.replace(g[0], g[1]);
    return S;
  }
  function ee(S, g) {
    S = decodeURI(S);
    for (let Y = 0; Y < i.length; Y += 2) S = S.replace(i[Y], i[Y + 1]);
    let K = S.toLowerCase().startsWith("file://");
    return K && (S = S.replace(/^file:\/\//, "").replace(/^\//, ""), (0, u.isWindows)() && S[1] === "/" && (S = `${S[0]}:${S.substring(1)}`), g ? S = "file:///" + S : (K = false, S = (0, u.isWindows)() ? S : "/" + S)), (0, u.isWindows)() && !K && (S = S.replace(f, "\\"), S.match(/^[a-z]:\\/i) && (S = S[0].toUpperCase() + S.substring(1))), S;
  }
  function te(S) {
    return S.length <= 1 || S[0] !== "#" || S[1] !== "/" ? [] : S.slice(2).split("/").map((g) => decodeURIComponent(g).replace(n, "/").replace(s, "~"));
  }
  function Z(S, g) {
    if (!z(S) || !z(g)) return q(S, g);
    const K = d.default.dirname(T(S)), Y = T(g);
    return d.default.relative(K, Y) + w(g);
  }
  return ne;
}
var ae = {}, Hr;
function xe() {
  if (Hr) return ae;
  Hr = 1, Object.defineProperty(ae, "__esModule", { value: true }), ae.InvalidPointerError = ae.TimeoutError = ae.MissingPointerError = ae.UnmatchedResolverError = ae.ResolverError = ae.UnmatchedParserError = ae.ParserError = ae.JSONParserErrorGroup = ae.JSONParserError = void 0, ae.toJSON = c, ae.getDeepKeys = d, ae.isHandledError = q, ae.normalizeError = b;
  const l = _e(), v = ["function", "symbol", "undefined"], x = ["constructor", "prototype", "__proto__"], A = Object.getPrototypeOf({});
  function c() {
    const y = {}, p = this;
    for (const m of d(p)) if (typeof m == "string") {
      const w = p[m], T = typeof w;
      v.includes(T) || (y[m] = w);
    }
    return y;
  }
  function d(y, p = []) {
    let m = [];
    for (; y && y !== A; ) m = m.concat(Object.getOwnPropertyNames(y), Object.getOwnPropertySymbols(y)), y = Object.getPrototypeOf(y);
    const w = new Set(m);
    for (const T of p.concat(x)) w.delete(T);
    return w;
  }
  class f extends Error {
    constructor(p, m) {
      super();
      __publicField(this, "name");
      __publicField(this, "message");
      __publicField(this, "source");
      __publicField(this, "path");
      __publicField(this, "code");
      __publicField(this, "toJSON", c.bind(this));
      this.code = "EUNKNOWN", this.name = "JSONParserError", this.message = p, this.source = m, this.path = null;
    }
    get footprint() {
      return `${this.path}+${this.source}+${this.code}+${this.message}`;
    }
  }
  ae.JSONParserError = f;
  class a extends Error {
    constructor(p) {
      super();
      __publicField(this, "files");
      __publicField(this, "toJSON", c.bind(this));
      this.files = p, this.name = "JSONParserErrorGroup", this.message = `${this.errors.length} error${this.errors.length > 1 ? "s" : ""} occurred while reading '${(0, l.toFileSystemPath)(p.$refs._root$Ref.path)}'`;
    }
    static getParserErrors(p) {
      const m = [];
      for (const w of Object.values(p.$refs._$refs)) w.errors && m.push(...w.errors);
      return m;
    }
    get errors() {
      return a.getParserErrors(this.files);
    }
  }
  ae.JSONParserErrorGroup = a;
  class n extends f {
    constructor(p, m) {
      super(`Error parsing ${m}: ${p}`, m);
      __publicField(this, "code", "EPARSER");
      __publicField(this, "name", "ParserError");
    }
  }
  ae.ParserError = n;
  class s extends f {
    constructor(p) {
      super(`Could not find parser for "${p}"`, p);
      __publicField(this, "code", "EUNMATCHEDPARSER");
      __publicField(this, "name", "UnmatchedParserError");
    }
  }
  ae.UnmatchedParserError = s;
  class t extends f {
    constructor(p, m) {
      super(p.message || `Error reading file "${m}"`, m);
      __publicField(this, "code", "ERESOLVER");
      __publicField(this, "name", "ResolverError");
      __publicField(this, "ioErrorCode");
      "code" in p && (this.ioErrorCode = String(p.code));
    }
  }
  ae.ResolverError = t;
  class u extends f {
    constructor(p) {
      super(`Could not find resolver for "${p}"`, p);
      __publicField(this, "code", "EUNMATCHEDRESOLVER");
      __publicField(this, "name", "UnmatchedResolverError");
    }
  }
  ae.UnmatchedResolverError = u;
  class o extends f {
    constructor(p, m, w, T, P) {
      super(`Missing $ref pointer "${(0, l.getHash)(m)}". Token "${p}" does not exist.`, (0, l.stripHash)(m));
      __publicField(this, "code", "EMISSINGPOINTER");
      __publicField(this, "name", "MissingPointerError");
      __publicField(this, "targetToken");
      __publicField(this, "targetRef");
      __publicField(this, "targetFound");
      __publicField(this, "parentPath");
      this.targetToken = p, this.targetRef = w, this.targetFound = T, this.parentPath = P;
    }
  }
  ae.MissingPointerError = o;
  class i extends f {
    constructor(p) {
      super(`Dereferencing timeout reached: ${p}ms`);
      __publicField(this, "code", "ETIMEOUT");
      __publicField(this, "name", "TimeoutError");
    }
  }
  ae.TimeoutError = i;
  class h extends f {
    constructor(p, m) {
      super(`Invalid $ref pointer "${p}". Pointers must begin with "#/"`, (0, l.stripHash)(m));
      __publicField(this, "code", "EUNMATCHEDRESOLVER");
      __publicField(this, "name", "InvalidPointerError");
    }
  }
  ae.InvalidPointerError = h;
  function q(y) {
    return y instanceof f || y instanceof a;
  }
  function b(y) {
    return y.path === null && (y.path = []), y;
  }
  return ae;
}
var Lr;
function or() {
  return Lr || (Lr = 1, (function(l) {
    var v = Se && Se.__createBinding || (Object.create ? (function(p, m, w, T) {
      T === void 0 && (T = w);
      var P = Object.getOwnPropertyDescriptor(m, w);
      (!P || ("get" in P ? !m.__esModule : P.writable || P.configurable)) && (P = { enumerable: true, get: function() {
        return m[w];
      } }), Object.defineProperty(p, T, P);
    }) : (function(p, m, w, T) {
      T === void 0 && (T = w), p[T] = m[w];
    })), x = Se && Se.__setModuleDefault || (Object.create ? (function(p, m) {
      Object.defineProperty(p, "default", { enumerable: true, value: m });
    }) : function(p, m) {
      p.default = m;
    }), A = Se && Se.__importStar || /* @__PURE__ */ (function() {
      var p = function(m) {
        return p = Object.getOwnPropertyNames || function(w) {
          var T = [];
          for (var P in w) Object.prototype.hasOwnProperty.call(w, P) && (T[T.length] = P);
          return T;
        }, p(m);
      };
      return function(m) {
        if (m && m.__esModule) return m;
        var w = {};
        if (m != null) for (var T = p(m), P = 0; P < T.length; P++) T[P] !== "default" && v(w, m, T[P]);
        return x(w, m), w;
      };
    })(), c = Se && Se.__importDefault || function(p) {
      return p && p.__esModule ? p : { default: p };
    };
    Object.defineProperty(l, "__esModule", { value: true }), l.nullSymbol = void 0;
    const d = c(Ke()), f = A(_e()), a = xe();
    l.nullSymbol = /* @__PURE__ */ Symbol("null");
    const n = /\//g, s = /~/g, t = /~1/g, u = /~0/g, o = (p) => {
      try {
        return decodeURIComponent(p);
      } catch {
        return p;
      }
    };
    class i {
      constructor(m, w, T) {
        __publicField(this, "$ref");
        __publicField(this, "path");
        __publicField(this, "originalPath");
        __publicField(this, "value");
        __publicField(this, "circular");
        __publicField(this, "indirections");
        this.$ref = m, this.path = w, this.originalPath = T || w, this.value = void 0, this.circular = false, this.indirections = 0;
      }
      resolve(m, w, T) {
        const P = i.parse(this.path, this.originalPath), J = [];
        this.value = b(m);
        for (let X = 0; X < P.length; X++) {
          h(this, w, T) && (this.path = i.join(this.path, P.slice(X)));
          const W = P[X];
          if (this.value[W] === void 0 || this.value[W] === null && X === P.length - 1) {
            let z = false;
            for (let S = P.length - 1; S > X; S--) {
              const g = P.slice(X, S + 1).join("/");
              if (this.value[g] !== void 0) {
                this.value = this.value[g], X = S, z = true;
                break;
              }
            }
            if (z) continue;
            if (W in this.value && this.value[W] === null) {
              this.value = l.nullSymbol;
              continue;
            }
            this.value = null;
            const oe = this.$ref.path || "", ee = this.path.replace(oe, ""), te = i.join("", J), Z = T == null ? void 0 : T.replace(oe, "");
            throw new a.MissingPointerError(W, decodeURI(this.originalPath), ee, te, Z);
          } else this.value = this.value[W];
          J.push(W);
        }
        return (!this.value || this.value.$ref && f.resolve(this.path, this.value.$ref) !== T) && h(this, w, T), this;
      }
      set(m, w, T) {
        const P = i.parse(this.path);
        let J;
        if (P.length === 0) return this.value = w, w;
        this.value = b(m);
        for (let X = 0; X < P.length - 1; X++) h(this, T), J = P[X], this.value && this.value[J] !== void 0 ? this.value = this.value[J] : this.value = q(this, J, {});
        return h(this, T), J = P[P.length - 1], q(this, J, w), m;
      }
      static parse(m, w) {
        const T = f.getHash(m).substring(1);
        if (!T) return [];
        const P = T.split("/");
        for (let J = 0; J < P.length; J++) P[J] = o(P[J].replace(t, "/").replace(u, "~"));
        if (P[0] !== "") throw new a.InvalidPointerError(T, w === void 0 ? m : w);
        return P.slice(1);
      }
      static join(m, w) {
        m.indexOf("#") === -1 && (m += "#"), w = Array.isArray(w) ? w : [w];
        for (let T = 0; T < w.length; T++) {
          const P = w[T];
          m += "/" + encodeURIComponent(P.replace(s, "~0").replace(n, "~1"));
        }
        return m;
      }
    }
    function h(p, m, w) {
      if (d.default.isAllowed$Ref(p.value, m)) {
        const T = f.resolve(p.path, p.value.$ref);
        if (T === p.path && !y(w)) p.circular = true;
        else {
          const P = p.$ref.$refs._resolve(T, p.path, m);
          return P === null ? false : (p.indirections += P.indirections + 1, d.default.isExtended$Ref(p.value) ? (p.value = d.default.dereference(p.value, P.value), false) : (p.$ref = P.$ref, p.path = P.path, p.value = P.value, true));
        }
      }
    }
    l.default = i;
    function q(p, m, w) {
      if (p.value && typeof p.value == "object") m === "-" && Array.isArray(p.value) ? p.value.push(w) : p.value[m] = w;
      else throw new a.JSONParserError(`Error assigning $ref pointer "${p.path}". 
Cannot set "${m}" of a non-object.`);
      return w;
    }
    function b(p) {
      if ((0, a.isHandledError)(p)) throw p;
      return p;
    }
    function y(p) {
      return typeof p == "string" && i.parse(p).length == 0;
    }
  })(Se)), Se;
}
var $r;
function Ke() {
  if ($r) return ke;
  $r = 1;
  var l = ke && ke.__createBinding || (Object.create ? (function(a, n, s, t) {
    t === void 0 && (t = s);
    var u = Object.getOwnPropertyDescriptor(n, s);
    (!u || ("get" in u ? !n.__esModule : u.writable || u.configurable)) && (u = { enumerable: true, get: function() {
      return n[s];
    } }), Object.defineProperty(a, t, u);
  }) : (function(a, n, s, t) {
    t === void 0 && (t = s), a[t] = n[s];
  })), v = ke && ke.__setModuleDefault || (Object.create ? (function(a, n) {
    Object.defineProperty(a, "default", { enumerable: true, value: n });
  }) : function(a, n) {
    a.default = n;
  }), x = ke && ke.__importStar || /* @__PURE__ */ (function() {
    var a = function(n) {
      return a = Object.getOwnPropertyNames || function(s) {
        var t = [];
        for (var u in s) Object.prototype.hasOwnProperty.call(s, u) && (t[t.length] = u);
        return t;
      }, a(n);
    };
    return function(n) {
      if (n && n.__esModule) return n;
      var s = {};
      if (n != null) for (var t = a(n), u = 0; u < t.length; u++) t[u] !== "default" && l(s, n, t[u]);
      return v(s, n), s;
    };
  })();
  Object.defineProperty(ke, "__esModule", { value: true });
  const A = x(or()), c = xe(), d = _e();
  class f {
    constructor(n) {
      __publicField(this, "path");
      __publicField(this, "value");
      __publicField(this, "$refs");
      __publicField(this, "pathType");
      __publicField(this, "errors", []);
      this.$refs = n;
    }
    addError(n) {
      this.errors === void 0 && (this.errors = []);
      const s = this.errors.map(({ footprint: t }) => t);
      "errors" in n && Array.isArray(n.errors) ? this.errors.push(...n.errors.map(c.normalizeError).filter(({ footprint: t }) => !s.includes(t))) : (!("footprint" in n) || !s.includes(n.footprint)) && this.errors.push((0, c.normalizeError)(n));
    }
    exists(n, s) {
      try {
        return this.resolve(n, s), true;
      } catch {
        return false;
      }
    }
    get(n, s) {
      var _a;
      return (_a = this.resolve(n, s)) == null ? void 0 : _a.value;
    }
    resolve(n, s, t, u) {
      const o = new A.default(this, n, t);
      try {
        const i = o.resolve(this.value, s, u);
        return i.value === A.nullSymbol && (i.value = null), i;
      } catch (i) {
        if (!s || !s.continueOnError || !(0, c.isHandledError)(i)) throw i;
        return i.path === null && (i.path = (0, d.safePointerToPath)((0, d.getHash)(u))), i instanceof c.InvalidPointerError && (i.source = decodeURI((0, d.stripHash)(u))), this.addError(i), null;
      }
    }
    set(n, s) {
      const t = new A.default(this, n);
      this.value = t.set(this.value, s), this.value === A.nullSymbol && (this.value = null);
    }
    static is$Ref(n) {
      return !!n && typeof n == "object" && n !== null && "$ref" in n && typeof n.$ref == "string" && n.$ref.length > 0;
    }
    static isExternal$Ref(n) {
      return f.is$Ref(n) && n.$ref[0] !== "#";
    }
    static isAllowed$Ref(n, s) {
      var _a;
      if (this.is$Ref(n)) {
        if (n.$ref.substring(0, 2) === "#/" || n.$ref === "#") return true;
        if (n.$ref[0] !== "#" && (!s || ((_a = s.resolve) == null ? void 0 : _a.external))) return true;
      }
    }
    static isExtended$Ref(n) {
      return f.is$Ref(n) && Object.keys(n).length > 1;
    }
    static dereference(n, s) {
      if (s && typeof s == "object" && f.isExtended$Ref(n)) {
        const t = {};
        for (const u of Object.keys(n)) u !== "$ref" && (t[u] = n[u]);
        for (const u of Object.keys(s)) u in t || (t[u] = s[u]);
        return t;
      } else return s;
    }
  }
  return ke.default = f, ke;
}
var Ur;
function cn() {
  if (Ur) return he;
  Ur = 1;
  var l = he && he.__createBinding || (Object.create ? (function(s, t, u, o) {
    o === void 0 && (o = u);
    var i = Object.getOwnPropertyDescriptor(t, u);
    (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: true, get: function() {
      return t[u];
    } }), Object.defineProperty(s, o, i);
  }) : (function(s, t, u, o) {
    o === void 0 && (o = u), s[o] = t[u];
  })), v = he && he.__setModuleDefault || (Object.create ? (function(s, t) {
    Object.defineProperty(s, "default", { enumerable: true, value: t });
  }) : function(s, t) {
    s.default = t;
  }), x = he && he.__importStar || /* @__PURE__ */ (function() {
    var s = function(t) {
      return s = Object.getOwnPropertyNames || function(u) {
        var o = [];
        for (var i in u) Object.prototype.hasOwnProperty.call(u, i) && (o[o.length] = i);
        return o;
      }, s(t);
    };
    return function(t) {
      if (t && t.__esModule) return t;
      var u = {};
      if (t != null) for (var o = s(t), i = 0; i < o.length; i++) o[i] !== "default" && l(u, t, o[i]);
      return v(u, t), u;
    };
  })(), A = he && he.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  };
  Object.defineProperty(he, "__esModule", { value: true });
  const c = A(Ke()), d = x(_e()), f = A(Nt());
  class a {
    constructor() {
      __publicField(this, "circular");
      __publicField(this, "_$refs", {});
      __publicField(this, "_root$Ref");
      __publicField(this, "toJSON", this.values);
      this.circular = false, this._$refs = {}, this._root$Ref = null;
    }
    paths(...t) {
      return n(this._$refs, t.flat()).map((o) => (0, f.default)(o.decoded));
    }
    values(...t) {
      const u = this._$refs;
      return n(u, t.flat()).reduce((i, h) => (i[(0, f.default)(h.decoded)] = u[h.encoded].value, i), {});
    }
    exists(t, u) {
      try {
        return this._resolve(t, "", u), true;
      } catch {
        return false;
      }
    }
    get(t, u) {
      return this._resolve(t, "", u).value;
    }
    set(t, u) {
      const o = d.resolve(this._root$Ref.path, t), i = d.stripHash(o), h = this._$refs[i];
      if (!h) throw new Error(`Error resolving $ref pointer "${t}". 
"${i}" not found.`);
      h.set(o, u);
    }
    _get$Ref(t) {
      t = d.resolve(this._root$Ref.path, t);
      const u = d.stripHash(t);
      return this._$refs[u];
    }
    _add(t) {
      const u = d.stripHash(t), o = new c.default(this);
      return o.path = u, this._$refs[u] = o, this._root$Ref = this._root$Ref || o, o;
    }
    _resolve(t, u, o) {
      const i = d.resolve(this._root$Ref.path, t), h = d.stripHash(i), q = this._$refs[h];
      if (!q) throw new Error(`Error resolving $ref pointer "${t}". 
"${h}" not found.`);
      return q.resolve(i, o, t, u);
    }
  }
  he.default = a;
  function n(s, t) {
    let u = Object.keys(s);
    return t = Array.isArray(t[0]) ? t[0] : Array.prototype.slice.call(t), t.length > 0 && t[0] && (u = u.filter((o) => t.includes(s[o].pathType))), u.map((o) => ({ encoded: o, decoded: s[o].pathType === "file" ? d.toFileSystemPath(o, true) : o }));
  }
  return he;
}
var Ae = {}, je = {}, Wr;
function ln() {
  if (Wr) return je;
  Wr = 1, Object.defineProperty(je, "__esModule", { value: true }), je.all = l, je.filter = v, je.sort = x, je.run = A;
  function l(d) {
    return Object.keys(d || {}).filter((f) => typeof d[f] == "object").map((f) => (d[f].name = f, d[f]));
  }
  function v(d, f, a) {
    return d.filter((n) => !!c(n, f, a));
  }
  function x(d) {
    for (const f of d) f.order = f.order || Number.MAX_SAFE_INTEGER;
    return d.sort((f, a) => f.order - a.order);
  }
  async function A(d, f, a, n) {
    let s, t, u = 0;
    return new Promise((o, i) => {
      h();
      function h() {
        if (s = d[u++], !s) return i(t);
        try {
          const p = c(s, f, a, q, n);
          if (p && typeof p.then == "function") p.then(b, y);
          else if (p !== void 0) b(p);
          else if (u === d.length) throw new Error("No promise has been returned or callback has been called.");
        } catch (p) {
          y(p);
        }
      }
      function q(p, m) {
        p ? y(p) : b(m);
      }
      function b(p) {
        o({ plugin: s, result: p });
      }
      function y(p) {
        t = { plugin: s, error: p }, h();
      }
    });
  }
  function c(d, f, a, n, s) {
    const t = d[f];
    if (typeof t == "function") return t.apply(d, [a, n, s]);
    if (!n) {
      if (t instanceof RegExp) return t.test(a.url);
      if (typeof t == "string") return t === a.extension;
      if (Array.isArray(t)) return t.indexOf(a.extension) !== -1;
    }
    return t;
  }
  return je;
}
var Kr;
function Ct() {
  if (Kr) return Ae;
  Kr = 1;
  var l = Ae && Ae.__createBinding || (Object.create ? (function(t, u, o, i) {
    i === void 0 && (i = o);
    var h = Object.getOwnPropertyDescriptor(u, o);
    (!h || ("get" in h ? !u.__esModule : h.writable || h.configurable)) && (h = { enumerable: true, get: function() {
      return u[o];
    } }), Object.defineProperty(t, i, h);
  }) : (function(t, u, o, i) {
    i === void 0 && (i = o), t[i] = u[o];
  })), v = Ae && Ae.__setModuleDefault || (Object.create ? (function(t, u) {
    Object.defineProperty(t, "default", { enumerable: true, value: u });
  }) : function(t, u) {
    t.default = u;
  }), x = Ae && Ae.__importStar || /* @__PURE__ */ (function() {
    var t = function(u) {
      return t = Object.getOwnPropertyNames || function(o) {
        var i = [];
        for (var h in o) Object.prototype.hasOwnProperty.call(o, h) && (i[i.length] = h);
        return i;
      }, t(u);
    };
    return function(u) {
      if (u && u.__esModule) return u;
      var o = {};
      if (u != null) for (var i = t(u), h = 0; h < i.length; h++) i[h] !== "default" && l(o, u, i[h]);
      return v(o, u), o;
    };
  })();
  Object.defineProperty(Ae, "__esModule", { value: true });
  const A = x(_e()), c = x(ln()), d = xe();
  async function f(t, u, o) {
    const i = t.indexOf("#");
    let h = "";
    i >= 0 && (h = t.substring(i), t = t.substring(0, i));
    const q = u._add(t), b = { url: t, hash: h, extension: A.getExtension(t) };
    try {
      const y = await a(b, o, u);
      q.pathType = y.plugin.name, b.data = y.result;
      const p = await n(b, o, u);
      return q.value = p.result, p.result;
    } catch (y) {
      throw (0, d.isHandledError)(y) && (q.value = y), y;
    }
  }
  async function a(t, u, o) {
    let i = c.all(u.resolve);
    i = c.filter(i, "canRead", t), c.sort(i);
    try {
      return await c.run(i, "read", t, o);
    } catch (h) {
      throw !h && u.continueOnError ? new d.UnmatchedResolverError(t.url) : !h || !("error" in h) ? new SyntaxError(`Unable to resolve $ref pointer "${t.url}"`) : h.error instanceof d.ResolverError ? h.error : new d.ResolverError(h, t.url);
    }
  }
  async function n(t, u, o) {
    const i = c.all(u.parse), h = c.filter(i, "canParse", t), q = h.length > 0 ? h : i;
    c.sort(q);
    try {
      const b = await c.run(q, "parse", t, o);
      if (!b.plugin.allowEmpty && s(b.result)) throw new SyntaxError(`Error parsing "${t.url}" as ${b.plugin.name}. 
Parsed value is empty`);
      return b;
    } catch (b) {
      throw !b && u.continueOnError ? new d.UnmatchedParserError(t.url) : b && b.message && b.message.startsWith("Error parsing") ? b : !b || !("error" in b) ? new SyntaxError(`Unable to parse ${t.url}`) : b.error instanceof d.ParserError ? b.error : new d.ParserError(b.error.message, t.url);
    }
  }
  function s(t) {
    return t === void 0 || typeof t == "object" && Object.keys(t).length === 0 || typeof t == "string" && t.trim().length === 0 || Buffer.isBuffer(t) && t.length === 0;
  }
  return Ae.default = f, Ae;
}
var Ue = {}, We = {}, rr = {}, Yr;
function mn() {
  if (Yr) return rr;
  Yr = 1, Object.defineProperty(rr, "__esModule", { value: true });
  const l = xe();
  return rr.default = { order: 100, allowEmpty: true, canParse: ".json", allowBOM: true, async parse(v) {
    let x = v.data;
    if (Buffer.isBuffer(x) && (x = x.toString()), typeof x == "string") {
      if (x.trim().length === 0) return;
      try {
        return JSON.parse(x);
      } catch (A) {
        if (this.allowBOM) try {
          const c = x.indexOf("{");
          return x = x.slice(c), JSON.parse(x);
        } catch (c) {
          throw new l.ParserError(c.message, v.url);
        }
        throw new l.ParserError(A.message, v.url);
      }
    } else return x;
  } }, rr;
}
var Me = {}, fe = {}, tr = {}, Ne = {}, Vr;
function Ye() {
  if (Vr) return Ne;
  Vr = 1;
  function l(f) {
    return typeof f > "u" || f === null;
  }
  function v(f) {
    return typeof f == "object" && f !== null;
  }
  function x(f) {
    return Array.isArray(f) ? f : l(f) ? [] : [f];
  }
  function A(f, a) {
    var n, s, t, u;
    if (a) for (u = Object.keys(a), n = 0, s = u.length; n < s; n += 1) t = u[n], f[t] = a[t];
    return f;
  }
  function c(f, a) {
    var n = "", s;
    for (s = 0; s < a; s += 1) n += f;
    return n;
  }
  function d(f) {
    return f === 0 && Number.NEGATIVE_INFINITY === 1 / f;
  }
  return Ne.isNothing = l, Ne.isObject = v, Ne.toArray = x, Ne.repeat = c, Ne.isNegativeZero = d, Ne.extend = A, Ne;
}
var mr, zr;
function Ve() {
  if (zr) return mr;
  zr = 1;
  function l(x, A) {
    var c = "", d = x.reason || "(unknown reason)";
    return x.mark ? (x.mark.name && (c += 'in "' + x.mark.name + '" '), c += "(" + (x.mark.line + 1) + ":" + (x.mark.column + 1) + ")", !A && x.mark.snippet && (c += `

` + x.mark.snippet), d + " " + c) : d;
  }
  function v(x, A) {
    Error.call(this), this.name = "YAMLException", this.reason = x, this.mark = A, this.message = l(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
  }
  return v.prototype = Object.create(Error.prototype), v.prototype.constructor = v, v.prototype.toString = function(A) {
    return this.name + ": " + l(this, A);
  }, mr = v, mr;
}
var dr, Jr;
function dn() {
  if (Jr) return dr;
  Jr = 1;
  var l = Ye();
  function v(c, d, f, a, n) {
    var s = "", t = "", u = Math.floor(n / 2) - 1;
    return a - d > u && (s = " ... ", d = a - u + s.length), f - a > u && (t = " ...", f = a + u - t.length), { str: s + c.slice(d, f).replace(/\t/g, "\u2192") + t, pos: a - d + s.length };
  }
  function x(c, d) {
    return l.repeat(" ", d - c.length) + c;
  }
  function A(c, d) {
    if (d = Object.create(d || null), !c.buffer) return null;
    d.maxLength || (d.maxLength = 79), typeof d.indent != "number" && (d.indent = 1), typeof d.linesBefore != "number" && (d.linesBefore = 3), typeof d.linesAfter != "number" && (d.linesAfter = 2);
    for (var f = /\r?\n|\r|\0/g, a = [0], n = [], s, t = -1; s = f.exec(c.buffer); ) n.push(s.index), a.push(s.index + s[0].length), c.position <= s.index && t < 0 && (t = a.length - 2);
    t < 0 && (t = a.length - 1);
    var u = "", o, i, h = Math.min(c.line + d.linesAfter, n.length).toString().length, q = d.maxLength - (d.indent + h + 3);
    for (o = 1; o <= d.linesBefore && !(t - o < 0); o++) i = v(c.buffer, a[t - o], n[t - o], c.position - (a[t] - a[t - o]), q), u = l.repeat(" ", d.indent) + x((c.line - o + 1).toString(), h) + " | " + i.str + `
` + u;
    for (i = v(c.buffer, a[t], n[t], c.position, q), u += l.repeat(" ", d.indent) + x((c.line + 1).toString(), h) + " | " + i.str + `
`, u += l.repeat("-", d.indent + h + 3 + i.pos) + `^
`, o = 1; o <= d.linesAfter && !(t + o >= n.length); o++) i = v(c.buffer, a[t + o], n[t + o], c.position - (a[t] - a[t + o]), q), u += l.repeat(" ", d.indent) + x((c.line + o + 1).toString(), h) + " | " + i.str + `
`;
    return u.replace(/\n$/, "");
  }
  return dr = A, dr;
}
var fr, Gr;
function pe() {
  if (Gr) return fr;
  Gr = 1;
  var l = Ve(), v = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], x = ["scalar", "sequence", "mapping"];
  function A(d) {
    var f = {};
    return d !== null && Object.keys(d).forEach(function(a) {
      d[a].forEach(function(n) {
        f[String(n)] = a;
      });
    }), f;
  }
  function c(d, f) {
    if (f = f || {}, Object.keys(f).forEach(function(a) {
      if (v.indexOf(a) === -1) throw new l('Unknown option "' + a + '" is met in definition of "' + d + '" YAML type.');
    }), this.options = f, this.tag = d, this.kind = f.kind || null, this.resolve = f.resolve || function() {
      return true;
    }, this.construct = f.construct || function(a) {
      return a;
    }, this.instanceOf = f.instanceOf || null, this.predicate = f.predicate || null, this.represent = f.represent || null, this.representName = f.representName || null, this.defaultStyle = f.defaultStyle || null, this.multi = f.multi || false, this.styleAliases = A(f.styleAliases || null), x.indexOf(this.kind) === -1) throw new l('Unknown kind "' + this.kind + '" is specified for "' + d + '" YAML type.');
  }
  return fr = c, fr;
}
var pr, Qr;
function jt() {
  if (Qr) return pr;
  Qr = 1;
  var l = Ve(), v = pe();
  function x(d, f) {
    var a = [];
    return d[f].forEach(function(n) {
      var s = a.length;
      a.forEach(function(t, u) {
        t.tag === n.tag && t.kind === n.kind && t.multi === n.multi && (s = u);
      }), a[s] = n;
    }), a;
  }
  function A() {
    var d = { scalar: {}, sequence: {}, mapping: {}, fallback: {}, multi: { scalar: [], sequence: [], mapping: [], fallback: [] } }, f, a;
    function n(s) {
      s.multi ? (d.multi[s.kind].push(s), d.multi.fallback.push(s)) : d[s.kind][s.tag] = d.fallback[s.tag] = s;
    }
    for (f = 0, a = arguments.length; f < a; f += 1) arguments[f].forEach(n);
    return d;
  }
  function c(d) {
    return this.extend(d);
  }
  return c.prototype.extend = function(f) {
    var a = [], n = [];
    if (f instanceof v) n.push(f);
    else if (Array.isArray(f)) n = n.concat(f);
    else if (f && (Array.isArray(f.implicit) || Array.isArray(f.explicit))) f.implicit && (a = a.concat(f.implicit)), f.explicit && (n = n.concat(f.explicit));
    else throw new l("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    a.forEach(function(t) {
      if (!(t instanceof v)) throw new l("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      if (t.loadKind && t.loadKind !== "scalar") throw new l("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      if (t.multi) throw new l("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }), n.forEach(function(t) {
      if (!(t instanceof v)) throw new l("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    });
    var s = Object.create(c.prototype);
    return s.implicit = (this.implicit || []).concat(a), s.explicit = (this.explicit || []).concat(n), s.compiledImplicit = x(s, "implicit"), s.compiledExplicit = x(s, "explicit"), s.compiledTypeMap = A(s.compiledImplicit, s.compiledExplicit), s;
  }, pr = c, pr;
}
var hr, Zr;
function Bt() {
  if (Zr) return hr;
  Zr = 1;
  var l = pe();
  return hr = new l("tag:yaml.org,2002:str", { kind: "scalar", construct: function(v) {
    return v !== null ? v : "";
  } }), hr;
}
var gr, Xr;
function It() {
  if (Xr) return gr;
  Xr = 1;
  var l = pe();
  return gr = new l("tag:yaml.org,2002:seq", { kind: "sequence", construct: function(v) {
    return v !== null ? v : [];
  } }), gr;
}
var yr, et;
function Mt() {
  if (et) return yr;
  et = 1;
  var l = pe();
  return yr = new l("tag:yaml.org,2002:map", { kind: "mapping", construct: function(v) {
    return v !== null ? v : {};
  } }), yr;
}
var br, rt;
function Dt() {
  if (rt) return br;
  rt = 1;
  var l = jt();
  return br = new l({ explicit: [Bt(), It(), Mt()] }), br;
}
var vr, tt;
function Ft() {
  if (tt) return vr;
  tt = 1;
  var l = pe();
  function v(c) {
    if (c === null) return true;
    var d = c.length;
    return d === 1 && c === "~" || d === 4 && (c === "null" || c === "Null" || c === "NULL");
  }
  function x() {
    return null;
  }
  function A(c) {
    return c === null;
  }
  return vr = new l("tag:yaml.org,2002:null", { kind: "scalar", resolve: v, construct: x, predicate: A, represent: { canonical: function() {
    return "~";
  }, lowercase: function() {
    return "null";
  }, uppercase: function() {
    return "NULL";
  }, camelcase: function() {
    return "Null";
  }, empty: function() {
    return "";
  } }, defaultStyle: "lowercase" }), vr;
}
var _r, nt;
function Ht() {
  if (nt) return _r;
  nt = 1;
  var l = pe();
  function v(c) {
    if (c === null) return false;
    var d = c.length;
    return d === 4 && (c === "true" || c === "True" || c === "TRUE") || d === 5 && (c === "false" || c === "False" || c === "FALSE");
  }
  function x(c) {
    return c === "true" || c === "True" || c === "TRUE";
  }
  function A(c) {
    return Object.prototype.toString.call(c) === "[object Boolean]";
  }
  return _r = new l("tag:yaml.org,2002:bool", { kind: "scalar", resolve: v, construct: x, predicate: A, represent: { lowercase: function(c) {
    return c ? "true" : "false";
  }, uppercase: function(c) {
    return c ? "TRUE" : "FALSE";
  }, camelcase: function(c) {
    return c ? "True" : "False";
  } }, defaultStyle: "lowercase" }), _r;
}
var wr, it;
function Lt() {
  if (it) return wr;
  it = 1;
  var l = Ye(), v = pe();
  function x(n) {
    return 48 <= n && n <= 57 || 65 <= n && n <= 70 || 97 <= n && n <= 102;
  }
  function A(n) {
    return 48 <= n && n <= 55;
  }
  function c(n) {
    return 48 <= n && n <= 57;
  }
  function d(n) {
    if (n === null) return false;
    var s = n.length, t = 0, u = false, o;
    if (!s) return false;
    if (o = n[t], (o === "-" || o === "+") && (o = n[++t]), o === "0") {
      if (t + 1 === s) return true;
      if (o = n[++t], o === "b") {
        for (t++; t < s; t++) if (o = n[t], o !== "_") {
          if (o !== "0" && o !== "1") return false;
          u = true;
        }
        return u && o !== "_";
      }
      if (o === "x") {
        for (t++; t < s; t++) if (o = n[t], o !== "_") {
          if (!x(n.charCodeAt(t))) return false;
          u = true;
        }
        return u && o !== "_";
      }
      if (o === "o") {
        for (t++; t < s; t++) if (o = n[t], o !== "_") {
          if (!A(n.charCodeAt(t))) return false;
          u = true;
        }
        return u && o !== "_";
      }
    }
    if (o === "_") return false;
    for (; t < s; t++) if (o = n[t], o !== "_") {
      if (!c(n.charCodeAt(t))) return false;
      u = true;
    }
    return !(!u || o === "_");
  }
  function f(n) {
    var s = n, t = 1, u;
    if (s.indexOf("_") !== -1 && (s = s.replace(/_/g, "")), u = s[0], (u === "-" || u === "+") && (u === "-" && (t = -1), s = s.slice(1), u = s[0]), s === "0") return 0;
    if (u === "0") {
      if (s[1] === "b") return t * parseInt(s.slice(2), 2);
      if (s[1] === "x") return t * parseInt(s.slice(2), 16);
      if (s[1] === "o") return t * parseInt(s.slice(2), 8);
    }
    return t * parseInt(s, 10);
  }
  function a(n) {
    return Object.prototype.toString.call(n) === "[object Number]" && n % 1 === 0 && !l.isNegativeZero(n);
  }
  return wr = new v("tag:yaml.org,2002:int", { kind: "scalar", resolve: d, construct: f, predicate: a, represent: { binary: function(n) {
    return n >= 0 ? "0b" + n.toString(2) : "-0b" + n.toString(2).slice(1);
  }, octal: function(n) {
    return n >= 0 ? "0o" + n.toString(8) : "-0o" + n.toString(8).slice(1);
  }, decimal: function(n) {
    return n.toString(10);
  }, hexadecimal: function(n) {
    return n >= 0 ? "0x" + n.toString(16).toUpperCase() : "-0x" + n.toString(16).toUpperCase().slice(1);
  } }, defaultStyle: "decimal", styleAliases: { binary: [2, "bin"], octal: [8, "oct"], decimal: [10, "dec"], hexadecimal: [16, "hex"] } }), wr;
}
var Sr, at;
function $t() {
  if (at) return Sr;
  at = 1;
  var l = Ye(), v = pe(), x = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
  function A(n) {
    return !(n === null || !x.test(n) || n[n.length - 1] === "_");
  }
  function c(n) {
    var s, t;
    return s = n.replace(/_/g, "").toLowerCase(), t = s[0] === "-" ? -1 : 1, "+-".indexOf(s[0]) >= 0 && (s = s.slice(1)), s === ".inf" ? t === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : s === ".nan" ? NaN : t * parseFloat(s, 10);
  }
  var d = /^[-+]?[0-9]+e/;
  function f(n, s) {
    var t;
    if (isNaN(n)) switch (s) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
    else if (Number.POSITIVE_INFINITY === n) switch (s) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
    else if (Number.NEGATIVE_INFINITY === n) switch (s) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
    else if (l.isNegativeZero(n)) return "-0.0";
    return t = n.toString(10), d.test(t) ? t.replace("e", ".e") : t;
  }
  function a(n) {
    return Object.prototype.toString.call(n) === "[object Number]" && (n % 1 !== 0 || l.isNegativeZero(n));
  }
  return Sr = new v("tag:yaml.org,2002:float", { kind: "scalar", resolve: A, construct: c, predicate: a, represent: f, defaultStyle: "lowercase" }), Sr;
}
var xr, st;
function Ut() {
  return st || (st = 1, xr = Dt().extend({ implicit: [Ft(), Ht(), Lt(), $t()] })), xr;
}
var qr, ot;
function Wt() {
  return ot || (ot = 1, qr = Ut()), qr;
}
var kr, ut;
function Kt() {
  if (ut) return kr;
  ut = 1;
  var l = pe(), v = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), x = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
  function A(f) {
    return f === null ? false : v.exec(f) !== null || x.exec(f) !== null;
  }
  function c(f) {
    var a, n, s, t, u, o, i, h = 0, q = null, b, y, p;
    if (a = v.exec(f), a === null && (a = x.exec(f)), a === null) throw new Error("Date resolve error");
    if (n = +a[1], s = +a[2] - 1, t = +a[3], !a[4]) return new Date(Date.UTC(n, s, t));
    if (u = +a[4], o = +a[5], i = +a[6], a[7]) {
      for (h = a[7].slice(0, 3); h.length < 3; ) h += "0";
      h = +h;
    }
    return a[9] && (b = +a[10], y = +(a[11] || 0), q = (b * 60 + y) * 6e4, a[9] === "-" && (q = -q)), p = new Date(Date.UTC(n, s, t, u, o, i, h)), q && p.setTime(p.getTime() - q), p;
  }
  function d(f) {
    return f.toISOString();
  }
  return kr = new l("tag:yaml.org,2002:timestamp", { kind: "scalar", resolve: A, construct: c, instanceOf: Date, represent: d }), kr;
}
var Ar, ct;
function Yt() {
  if (ct) return Ar;
  ct = 1;
  var l = pe();
  function v(x) {
    return x === "<<" || x === null;
  }
  return Ar = new l("tag:yaml.org,2002:merge", { kind: "scalar", resolve: v }), Ar;
}
var Er, lt;
function Vt() {
  if (lt) return Er;
  lt = 1;
  var l = pe(), v = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
  function x(f) {
    if (f === null) return false;
    var a, n, s = 0, t = f.length, u = v;
    for (n = 0; n < t; n++) if (a = u.indexOf(f.charAt(n)), !(a > 64)) {
      if (a < 0) return false;
      s += 6;
    }
    return s % 8 === 0;
  }
  function A(f) {
    var a, n, s = f.replace(/[\r\n=]/g, ""), t = s.length, u = v, o = 0, i = [];
    for (a = 0; a < t; a++) a % 4 === 0 && a && (i.push(o >> 16 & 255), i.push(o >> 8 & 255), i.push(o & 255)), o = o << 6 | u.indexOf(s.charAt(a));
    return n = t % 4 * 6, n === 0 ? (i.push(o >> 16 & 255), i.push(o >> 8 & 255), i.push(o & 255)) : n === 18 ? (i.push(o >> 10 & 255), i.push(o >> 2 & 255)) : n === 12 && i.push(o >> 4 & 255), new Uint8Array(i);
  }
  function c(f) {
    var a = "", n = 0, s, t, u = f.length, o = v;
    for (s = 0; s < u; s++) s % 3 === 0 && s && (a += o[n >> 18 & 63], a += o[n >> 12 & 63], a += o[n >> 6 & 63], a += o[n & 63]), n = (n << 8) + f[s];
    return t = u % 3, t === 0 ? (a += o[n >> 18 & 63], a += o[n >> 12 & 63], a += o[n >> 6 & 63], a += o[n & 63]) : t === 2 ? (a += o[n >> 10 & 63], a += o[n >> 4 & 63], a += o[n << 2 & 63], a += o[64]) : t === 1 && (a += o[n >> 2 & 63], a += o[n << 4 & 63], a += o[64], a += o[64]), a;
  }
  function d(f) {
    return Object.prototype.toString.call(f) === "[object Uint8Array]";
  }
  return Er = new l("tag:yaml.org,2002:binary", { kind: "scalar", resolve: x, construct: A, predicate: d, represent: c }), Er;
}
var Or, mt;
function zt() {
  if (mt) return Or;
  mt = 1;
  var l = pe(), v = Object.prototype.hasOwnProperty, x = Object.prototype.toString;
  function A(d) {
    if (d === null) return true;
    var f = [], a, n, s, t, u, o = d;
    for (a = 0, n = o.length; a < n; a += 1) {
      if (s = o[a], u = false, x.call(s) !== "[object Object]") return false;
      for (t in s) if (v.call(s, t)) if (!u) u = true;
      else return false;
      if (!u) return false;
      if (f.indexOf(t) === -1) f.push(t);
      else return false;
    }
    return true;
  }
  function c(d) {
    return d !== null ? d : [];
  }
  return Or = new l("tag:yaml.org,2002:omap", { kind: "sequence", resolve: A, construct: c }), Or;
}
var Rr, dt;
function Jt() {
  if (dt) return Rr;
  dt = 1;
  var l = pe(), v = Object.prototype.toString;
  function x(c) {
    if (c === null) return true;
    var d, f, a, n, s, t = c;
    for (s = new Array(t.length), d = 0, f = t.length; d < f; d += 1) {
      if (a = t[d], v.call(a) !== "[object Object]" || (n = Object.keys(a), n.length !== 1)) return false;
      s[d] = [n[0], a[n[0]]];
    }
    return true;
  }
  function A(c) {
    if (c === null) return [];
    var d, f, a, n, s, t = c;
    for (s = new Array(t.length), d = 0, f = t.length; d < f; d += 1) a = t[d], n = Object.keys(a), s[d] = [n[0], a[n[0]]];
    return s;
  }
  return Rr = new l("tag:yaml.org,2002:pairs", { kind: "sequence", resolve: x, construct: A }), Rr;
}
var Pr, ft;
function Gt() {
  if (ft) return Pr;
  ft = 1;
  var l = pe(), v = Object.prototype.hasOwnProperty;
  function x(c) {
    if (c === null) return true;
    var d, f = c;
    for (d in f) if (v.call(f, d) && f[d] !== null) return false;
    return true;
  }
  function A(c) {
    return c !== null ? c : {};
  }
  return Pr = new l("tag:yaml.org,2002:set", { kind: "mapping", resolve: x, construct: A }), Pr;
}
var Tr, pt;
function Br() {
  return pt || (pt = 1, Tr = Wt().extend({ implicit: [Kt(), Yt()], explicit: [Vt(), zt(), Jt(), Gt()] })), Tr;
}
var ht;
function fn() {
  if (ht) return tr;
  ht = 1;
  var l = Ye(), v = Ve(), x = dn(), A = Br(), c = Object.prototype.hasOwnProperty, d = 1, f = 2, a = 3, n = 4, s = 1, t = 2, u = 3, o = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, i = /[\x85\u2028\u2029]/, h = /[,\[\]\{\}]/, q = /^(?:!|!!|![a-z\-]+!)$/i, b = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function y(e) {
    return Object.prototype.toString.call(e);
  }
  function p(e) {
    return e === 10 || e === 13;
  }
  function m(e) {
    return e === 9 || e === 32;
  }
  function w(e) {
    return e === 9 || e === 32 || e === 10 || e === 13;
  }
  function T(e) {
    return e === 44 || e === 91 || e === 93 || e === 123 || e === 125;
  }
  function P(e) {
    var _;
    return 48 <= e && e <= 57 ? e - 48 : (_ = e | 32, 97 <= _ && _ <= 102 ? _ - 97 + 10 : -1);
  }
  function J(e) {
    return e === 120 ? 2 : e === 117 ? 4 : e === 85 ? 8 : 0;
  }
  function X(e) {
    return 48 <= e && e <= 57 ? e - 48 : -1;
  }
  function W(e) {
    return e === 48 ? "\0" : e === 97 ? "\x07" : e === 98 ? "\b" : e === 116 || e === 9 ? "	" : e === 110 ? `
` : e === 118 ? "\v" : e === 102 ? "\f" : e === 114 ? "\r" : e === 101 ? "\x1B" : e === 32 ? " " : e === 34 ? '"' : e === 47 ? "/" : e === 92 ? "\\" : e === 78 ? "\x85" : e === 95 ? "\xA0" : e === 76 ? "\u2028" : e === 80 ? "\u2029" : "";
  }
  function z(e) {
    return e <= 65535 ? String.fromCharCode(e) : String.fromCharCode((e - 65536 >> 10) + 55296, (e - 65536 & 1023) + 56320);
  }
  for (var oe = new Array(256), ee = new Array(256), te = 0; te < 256; te++) oe[te] = W(te) ? 1 : 0, ee[te] = W(te);
  function Z(e, _) {
    this.input = e, this.filename = _.filename || null, this.schema = _.schema || A, this.onWarning = _.onWarning || null, this.legacy = _.legacy || false, this.json = _.json || false, this.listener = _.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = e.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
  }
  function S(e, _) {
    var E = { name: e.filename, buffer: e.input.slice(0, -1), position: e.position, line: e.line, column: e.position - e.lineStart };
    return E.snippet = x(E), new v(_, E);
  }
  function g(e, _) {
    throw S(e, _);
  }
  function K(e, _) {
    e.onWarning && e.onWarning.call(null, S(e, _));
  }
  var Y = { YAML: function(_, E, M) {
    var O, I, j;
    _.version !== null && g(_, "duplication of %YAML directive"), M.length !== 1 && g(_, "YAML directive accepts exactly one argument"), O = /^([0-9]+)\.([0-9]+)$/.exec(M[0]), O === null && g(_, "ill-formed argument of the YAML directive"), I = parseInt(O[1], 10), j = parseInt(O[2], 10), I !== 1 && g(_, "unacceptable YAML version of the document"), _.version = M[0], _.checkLineBreaks = j < 2, j !== 1 && j !== 2 && K(_, "unsupported YAML version of the document");
  }, TAG: function(_, E, M) {
    var O, I;
    M.length !== 2 && g(_, "TAG directive accepts exactly two arguments"), O = M[0], I = M[1], q.test(O) || g(_, "ill-formed tag handle (first argument) of the TAG directive"), c.call(_.tagMap, O) && g(_, 'there is a previously declared suffix for "' + O + '" tag handle'), b.test(I) || g(_, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      I = decodeURIComponent(I);
    } catch {
      g(_, "tag prefix is malformed: " + I);
    }
    _.tagMap[O] = I;
  } };
  function V(e, _, E, M) {
    var O, I, j, D;
    if (_ < E) {
      if (D = e.input.slice(_, E), M) for (O = 0, I = D.length; O < I; O += 1) j = D.charCodeAt(O), j === 9 || 32 <= j && j <= 1114111 || g(e, "expected valid JSON character");
      else o.test(D) && g(e, "the stream contains non-printable characters");
      e.result += D;
    }
  }
  function me(e, _, E, M) {
    var O, I, j, D;
    for (l.isObject(E) || g(e, "cannot merge mappings; the provided source object is unacceptable"), O = Object.keys(E), j = 0, D = O.length; j < D; j += 1) I = O[j], c.call(_, I) || (_[I] = E[I], M[I] = true);
  }
  function ce(e, _, E, M, O, I, j, D, U) {
    var Q, re;
    if (Array.isArray(O)) for (O = Array.prototype.slice.call(O), Q = 0, re = O.length; Q < re; Q += 1) Array.isArray(O[Q]) && g(e, "nested arrays are not supported inside keys"), typeof O == "object" && y(O[Q]) === "[object Object]" && (O[Q] = "[object Object]");
    if (typeof O == "object" && y(O) === "[object Object]" && (O = "[object Object]"), O = String(O), _ === null && (_ = {}), M === "tag:yaml.org,2002:merge") if (Array.isArray(I)) for (Q = 0, re = I.length; Q < re; Q += 1) me(e, _, I[Q], E);
    else me(e, _, I, E);
    else !e.json && !c.call(E, O) && c.call(_, O) && (e.line = j || e.line, e.lineStart = D || e.lineStart, e.position = U || e.position, g(e, "duplicated mapping key")), O === "__proto__" ? Object.defineProperty(_, O, { configurable: true, enumerable: true, writable: true, value: I }) : _[O] = I, delete E[O];
    return _;
  }
  function qe(e) {
    var _;
    _ = e.input.charCodeAt(e.position), _ === 10 ? e.position++ : _ === 13 ? (e.position++, e.input.charCodeAt(e.position) === 10 && e.position++) : g(e, "a line break is expected"), e.line += 1, e.lineStart = e.position, e.firstTabInLine = -1;
  }
  function se(e, _, E) {
    for (var M = 0, O = e.input.charCodeAt(e.position); O !== 0; ) {
      for (; m(O); ) O === 9 && e.firstTabInLine === -1 && (e.firstTabInLine = e.position), O = e.input.charCodeAt(++e.position);
      if (_ && O === 35) do
        O = e.input.charCodeAt(++e.position);
      while (O !== 10 && O !== 13 && O !== 0);
      if (p(O)) for (qe(e), O = e.input.charCodeAt(e.position), M++, e.lineIndent = 0; O === 32; ) e.lineIndent++, O = e.input.charCodeAt(++e.position);
      else break;
    }
    return E !== -1 && M !== 0 && e.lineIndent < E && K(e, "deficient indentation"), M;
  }
  function Be(e) {
    var _ = e.position, E;
    return E = e.input.charCodeAt(_), !!((E === 45 || E === 46) && E === e.input.charCodeAt(_ + 1) && E === e.input.charCodeAt(_ + 2) && (_ += 3, E = e.input.charCodeAt(_), E === 0 || w(E)));
  }
  function Re(e, _) {
    _ === 1 ? e.result += " " : _ > 1 && (e.result += l.repeat(`
`, _ - 1));
  }
  function Ce(e, _, E) {
    var M, O, I, j, D, U, Q, re, L = e.kind, de = e.result, r;
    if (r = e.input.charCodeAt(e.position), w(r) || T(r) || r === 35 || r === 38 || r === 42 || r === 33 || r === 124 || r === 62 || r === 39 || r === 34 || r === 37 || r === 64 || r === 96 || (r === 63 || r === 45) && (O = e.input.charCodeAt(e.position + 1), w(O) || E && T(O))) return false;
    for (e.kind = "scalar", e.result = "", I = j = e.position, D = false; r !== 0; ) {
      if (r === 58) {
        if (O = e.input.charCodeAt(e.position + 1), w(O) || E && T(O)) break;
      } else if (r === 35) {
        if (M = e.input.charCodeAt(e.position - 1), w(M)) break;
      } else {
        if (e.position === e.lineStart && Be(e) || E && T(r)) break;
        if (p(r)) if (U = e.line, Q = e.lineStart, re = e.lineIndent, se(e, false, -1), e.lineIndent >= _) {
          D = true, r = e.input.charCodeAt(e.position);
          continue;
        } else {
          e.position = j, e.line = U, e.lineStart = Q, e.lineIndent = re;
          break;
        }
      }
      D && (V(e, I, j, false), Re(e, e.line - U), I = j = e.position, D = false), m(r) || (j = e.position + 1), r = e.input.charCodeAt(++e.position);
    }
    return V(e, I, j, false), e.result ? true : (e.kind = L, e.result = de, false);
  }
  function ze(e, _) {
    var E, M, O;
    if (E = e.input.charCodeAt(e.position), E !== 39) return false;
    for (e.kind = "scalar", e.result = "", e.position++, M = O = e.position; (E = e.input.charCodeAt(e.position)) !== 0; ) if (E === 39) if (V(e, M, e.position, true), E = e.input.charCodeAt(++e.position), E === 39) M = e.position, e.position++, O = e.position;
    else return true;
    else p(E) ? (V(e, M, O, true), Re(e, se(e, false, _)), M = O = e.position) : e.position === e.lineStart && Be(e) ? g(e, "unexpected end of the document within a single quoted scalar") : (e.position++, O = e.position);
    g(e, "unexpected end of the stream within a single quoted scalar");
  }
  function Je(e, _) {
    var E, M, O, I, j, D;
    if (D = e.input.charCodeAt(e.position), D !== 34) return false;
    for (e.kind = "scalar", e.result = "", e.position++, E = M = e.position; (D = e.input.charCodeAt(e.position)) !== 0; ) {
      if (D === 34) return V(e, E, e.position, true), e.position++, true;
      if (D === 92) {
        if (V(e, E, e.position, true), D = e.input.charCodeAt(++e.position), p(D)) se(e, false, _);
        else if (D < 256 && oe[D]) e.result += ee[D], e.position++;
        else if ((j = J(D)) > 0) {
          for (O = j, I = 0; O > 0; O--) D = e.input.charCodeAt(++e.position), (j = P(D)) >= 0 ? I = (I << 4) + j : g(e, "expected hexadecimal character");
          e.result += z(I), e.position++;
        } else g(e, "unknown escape sequence");
        E = M = e.position;
      } else p(D) ? (V(e, E, M, true), Re(e, se(e, false, _)), E = M = e.position) : e.position === e.lineStart && Be(e) ? g(e, "unexpected end of the document within a double quoted scalar") : (e.position++, M = e.position);
    }
    g(e, "unexpected end of the stream within a double quoted scalar");
  }
  function ur(e, _) {
    var E = true, M, O, I, j = e.tag, D, U = e.anchor, Q, re, L, de, r, k = /* @__PURE__ */ Object.create(null), N, R, C, B;
    if (B = e.input.charCodeAt(e.position), B === 91) re = 93, r = false, D = [];
    else if (B === 123) re = 125, r = true, D = {};
    else return false;
    for (e.anchor !== null && (e.anchorMap[e.anchor] = D), B = e.input.charCodeAt(++e.position); B !== 0; ) {
      if (se(e, true, _), B = e.input.charCodeAt(e.position), B === re) return e.position++, e.tag = j, e.anchor = U, e.kind = r ? "mapping" : "sequence", e.result = D, true;
      E ? B === 44 && g(e, "expected the node content, but found ','") : g(e, "missed comma between flow collection entries"), R = N = C = null, L = de = false, B === 63 && (Q = e.input.charCodeAt(e.position + 1), w(Q) && (L = de = true, e.position++, se(e, true, _))), M = e.line, O = e.lineStart, I = e.position, Oe(e, _, d, false, true), R = e.tag, N = e.result, se(e, true, _), B = e.input.charCodeAt(e.position), (de || e.line === M) && B === 58 && (L = true, B = e.input.charCodeAt(++e.position), se(e, true, _), Oe(e, _, d, false, true), C = e.result), r ? ce(e, D, k, R, N, C, M, O, I) : L ? D.push(ce(e, null, k, R, N, C, M, O, I)) : D.push(N), se(e, true, _), B = e.input.charCodeAt(e.position), B === 44 ? (E = true, B = e.input.charCodeAt(++e.position)) : E = false;
    }
    g(e, "unexpected end of the stream within a flow collection");
  }
  function cr(e, _) {
    var E, M, O = s, I = false, j = false, D = _, U = 0, Q = false, re, L;
    if (L = e.input.charCodeAt(e.position), L === 124) M = false;
    else if (L === 62) M = true;
    else return false;
    for (e.kind = "scalar", e.result = ""; L !== 0; ) if (L = e.input.charCodeAt(++e.position), L === 43 || L === 45) s === O ? O = L === 43 ? u : t : g(e, "repeat of a chomping mode identifier");
    else if ((re = X(L)) >= 0) re === 0 ? g(e, "bad explicit indentation width of a block scalar; it cannot be less than one") : j ? g(e, "repeat of an indentation width identifier") : (D = _ + re - 1, j = true);
    else break;
    if (m(L)) {
      do
        L = e.input.charCodeAt(++e.position);
      while (m(L));
      if (L === 35) do
        L = e.input.charCodeAt(++e.position);
      while (!p(L) && L !== 0);
    }
    for (; L !== 0; ) {
      for (qe(e), e.lineIndent = 0, L = e.input.charCodeAt(e.position); (!j || e.lineIndent < D) && L === 32; ) e.lineIndent++, L = e.input.charCodeAt(++e.position);
      if (!j && e.lineIndent > D && (D = e.lineIndent), p(L)) {
        U++;
        continue;
      }
      if (e.lineIndent < D) {
        O === u ? e.result += l.repeat(`
`, I ? 1 + U : U) : O === s && I && (e.result += `
`);
        break;
      }
      for (M ? m(L) ? (Q = true, e.result += l.repeat(`
`, I ? 1 + U : U)) : Q ? (Q = false, e.result += l.repeat(`
`, U + 1)) : U === 0 ? I && (e.result += " ") : e.result += l.repeat(`
`, U) : e.result += l.repeat(`
`, I ? 1 + U : U), I = true, j = true, U = 0, E = e.position; !p(L) && L !== 0; ) L = e.input.charCodeAt(++e.position);
      V(e, E, e.position, false);
    }
    return true;
  }
  function Pe(e, _) {
    var E, M = e.tag, O = e.anchor, I = [], j, D = false, U;
    if (e.firstTabInLine !== -1) return false;
    for (e.anchor !== null && (e.anchorMap[e.anchor] = I), U = e.input.charCodeAt(e.position); U !== 0 && (e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, g(e, "tab characters must not be used in indentation")), !(U !== 45 || (j = e.input.charCodeAt(e.position + 1), !w(j)))); ) {
      if (D = true, e.position++, se(e, true, -1) && e.lineIndent <= _) {
        I.push(null), U = e.input.charCodeAt(e.position);
        continue;
      }
      if (E = e.line, Oe(e, _, a, false, true), I.push(e.result), se(e, true, -1), U = e.input.charCodeAt(e.position), (e.line === E || e.lineIndent > _) && U !== 0) g(e, "bad indentation of a sequence entry");
      else if (e.lineIndent < _) break;
    }
    return D ? (e.tag = M, e.anchor = O, e.kind = "sequence", e.result = I, true) : false;
  }
  function Ge(e, _, E) {
    var M, O, I, j, D, U, Q = e.tag, re = e.anchor, L = {}, de = /* @__PURE__ */ Object.create(null), r = null, k = null, N = null, R = false, C = false, B;
    if (e.firstTabInLine !== -1) return false;
    for (e.anchor !== null && (e.anchorMap[e.anchor] = L), B = e.input.charCodeAt(e.position); B !== 0; ) {
      if (!R && e.firstTabInLine !== -1 && (e.position = e.firstTabInLine, g(e, "tab characters must not be used in indentation")), M = e.input.charCodeAt(e.position + 1), I = e.line, (B === 63 || B === 58) && w(M)) B === 63 ? (R && (ce(e, L, de, r, k, null, j, D, U), r = k = N = null), C = true, R = true, O = true) : R ? (R = false, O = true) : g(e, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), e.position += 1, B = M;
      else {
        if (j = e.line, D = e.lineStart, U = e.position, !Oe(e, E, f, false, true)) break;
        if (e.line === I) {
          for (B = e.input.charCodeAt(e.position); m(B); ) B = e.input.charCodeAt(++e.position);
          if (B === 58) B = e.input.charCodeAt(++e.position), w(B) || g(e, "a whitespace character is expected after the key-value separator within a block mapping"), R && (ce(e, L, de, r, k, null, j, D, U), r = k = N = null), C = true, R = false, O = false, r = e.tag, k = e.result;
          else if (C) g(e, "can not read an implicit mapping pair; a colon is missed");
          else return e.tag = Q, e.anchor = re, true;
        } else if (C) g(e, "can not read a block mapping entry; a multiline key may not be an implicit key");
        else return e.tag = Q, e.anchor = re, true;
      }
      if ((e.line === I || e.lineIndent > _) && (R && (j = e.line, D = e.lineStart, U = e.position), Oe(e, _, n, true, O) && (R ? k = e.result : N = e.result), R || (ce(e, L, de, r, k, N, j, D, U), r = k = N = null), se(e, true, -1), B = e.input.charCodeAt(e.position)), (e.line === I || e.lineIndent > _) && B !== 0) g(e, "bad indentation of a mapping entry");
      else if (e.lineIndent < _) break;
    }
    return R && ce(e, L, de, r, k, null, j, D, U), C && (e.tag = Q, e.anchor = re, e.kind = "mapping", e.result = L), C;
  }
  function Qe(e) {
    var _, E = false, M = false, O, I, j;
    if (j = e.input.charCodeAt(e.position), j !== 33) return false;
    if (e.tag !== null && g(e, "duplication of a tag property"), j = e.input.charCodeAt(++e.position), j === 60 ? (E = true, j = e.input.charCodeAt(++e.position)) : j === 33 ? (M = true, O = "!!", j = e.input.charCodeAt(++e.position)) : O = "!", _ = e.position, E) {
      do
        j = e.input.charCodeAt(++e.position);
      while (j !== 0 && j !== 62);
      e.position < e.length ? (I = e.input.slice(_, e.position), j = e.input.charCodeAt(++e.position)) : g(e, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; j !== 0 && !w(j); ) j === 33 && (M ? g(e, "tag suffix cannot contain exclamation marks") : (O = e.input.slice(_ - 1, e.position + 1), q.test(O) || g(e, "named tag handle cannot contain such characters"), M = true, _ = e.position + 1)), j = e.input.charCodeAt(++e.position);
      I = e.input.slice(_, e.position), h.test(I) && g(e, "tag suffix cannot contain flow indicator characters");
    }
    I && !b.test(I) && g(e, "tag name cannot contain such characters: " + I);
    try {
      I = decodeURIComponent(I);
    } catch {
      g(e, "tag name is malformed: " + I);
    }
    return E ? e.tag = I : c.call(e.tagMap, O) ? e.tag = e.tagMap[O] + I : O === "!" ? e.tag = "!" + I : O === "!!" ? e.tag = "tag:yaml.org,2002:" + I : g(e, 'undeclared tag handle "' + O + '"'), true;
  }
  function Fe(e) {
    var _, E;
    if (E = e.input.charCodeAt(e.position), E !== 38) return false;
    for (e.anchor !== null && g(e, "duplication of an anchor property"), E = e.input.charCodeAt(++e.position), _ = e.position; E !== 0 && !w(E) && !T(E); ) E = e.input.charCodeAt(++e.position);
    return e.position === _ && g(e, "name of an anchor node must contain at least one character"), e.anchor = e.input.slice(_, e.position), true;
  }
  function Ze(e) {
    var _, E, M;
    if (M = e.input.charCodeAt(e.position), M !== 42) return false;
    for (M = e.input.charCodeAt(++e.position), _ = e.position; M !== 0 && !w(M) && !T(M); ) M = e.input.charCodeAt(++e.position);
    return e.position === _ && g(e, "name of an alias node must contain at least one character"), E = e.input.slice(_, e.position), c.call(e.anchorMap, E) || g(e, 'unidentified alias "' + E + '"'), e.result = e.anchorMap[E], se(e, true, -1), true;
  }
  function Oe(e, _, E, M, O) {
    var I, j, D, U = 1, Q = false, re = false, L, de, r, k, N, R;
    if (e.listener !== null && e.listener("open", e), e.tag = null, e.anchor = null, e.kind = null, e.result = null, I = j = D = n === E || a === E, M && se(e, true, -1) && (Q = true, e.lineIndent > _ ? U = 1 : e.lineIndent === _ ? U = 0 : e.lineIndent < _ && (U = -1)), U === 1) for (; Qe(e) || Fe(e); ) se(e, true, -1) ? (Q = true, D = I, e.lineIndent > _ ? U = 1 : e.lineIndent === _ ? U = 0 : e.lineIndent < _ && (U = -1)) : D = false;
    if (D && (D = Q || O), (U === 1 || n === E) && (d === E || f === E ? N = _ : N = _ + 1, R = e.position - e.lineStart, U === 1 ? D && (Pe(e, R) || Ge(e, R, N)) || ur(e, N) ? re = true : (j && cr(e, N) || ze(e, N) || Je(e, N) ? re = true : Ze(e) ? (re = true, (e.tag !== null || e.anchor !== null) && g(e, "alias node should not have any properties")) : Ce(e, N, d === E) && (re = true, e.tag === null && (e.tag = "?")), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : U === 0 && (re = D && Pe(e, R))), e.tag === null) e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
    else if (e.tag === "?") {
      for (e.result !== null && e.kind !== "scalar" && g(e, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + e.kind + '"'), L = 0, de = e.implicitTypes.length; L < de; L += 1) if (k = e.implicitTypes[L], k.resolve(e.result)) {
        e.result = k.construct(e.result), e.tag = k.tag, e.anchor !== null && (e.anchorMap[e.anchor] = e.result);
        break;
      }
    } else if (e.tag !== "!") {
      if (c.call(e.typeMap[e.kind || "fallback"], e.tag)) k = e.typeMap[e.kind || "fallback"][e.tag];
      else for (k = null, r = e.typeMap.multi[e.kind || "fallback"], L = 0, de = r.length; L < de; L += 1) if (e.tag.slice(0, r[L].tag.length) === r[L].tag) {
        k = r[L];
        break;
      }
      k || g(e, "unknown tag !<" + e.tag + ">"), e.result !== null && k.kind !== e.kind && g(e, "unacceptable node kind for !<" + e.tag + '> tag; it should be "' + k.kind + '", not "' + e.kind + '"'), k.resolve(e.result, e.tag) ? (e.result = k.construct(e.result, e.tag), e.anchor !== null && (e.anchorMap[e.anchor] = e.result)) : g(e, "cannot resolve a node with !<" + e.tag + "> explicit tag");
    }
    return e.listener !== null && e.listener("close", e), e.tag !== null || e.anchor !== null || re;
  }
  function Te(e) {
    var _ = e.position, E, M, O, I = false, j;
    for (e.version = null, e.checkLineBreaks = e.legacy, e.tagMap = /* @__PURE__ */ Object.create(null), e.anchorMap = /* @__PURE__ */ Object.create(null); (j = e.input.charCodeAt(e.position)) !== 0 && (se(e, true, -1), j = e.input.charCodeAt(e.position), !(e.lineIndent > 0 || j !== 37)); ) {
      for (I = true, j = e.input.charCodeAt(++e.position), E = e.position; j !== 0 && !w(j); ) j = e.input.charCodeAt(++e.position);
      for (M = e.input.slice(E, e.position), O = [], M.length < 1 && g(e, "directive name must not be less than one character in length"); j !== 0; ) {
        for (; m(j); ) j = e.input.charCodeAt(++e.position);
        if (j === 35) {
          do
            j = e.input.charCodeAt(++e.position);
          while (j !== 0 && !p(j));
          break;
        }
        if (p(j)) break;
        for (E = e.position; j !== 0 && !w(j); ) j = e.input.charCodeAt(++e.position);
        O.push(e.input.slice(E, e.position));
      }
      j !== 0 && qe(e), c.call(Y, M) ? Y[M](e, M, O) : K(e, 'unknown document directive "' + M + '"');
    }
    if (se(e, true, -1), e.lineIndent === 0 && e.input.charCodeAt(e.position) === 45 && e.input.charCodeAt(e.position + 1) === 45 && e.input.charCodeAt(e.position + 2) === 45 ? (e.position += 3, se(e, true, -1)) : I && g(e, "directives end mark is expected"), Oe(e, e.lineIndent - 1, n, false, true), se(e, true, -1), e.checkLineBreaks && i.test(e.input.slice(_, e.position)) && K(e, "non-ASCII line breaks are interpreted as content"), e.documents.push(e.result), e.position === e.lineStart && Be(e)) {
      e.input.charCodeAt(e.position) === 46 && (e.position += 3, se(e, true, -1));
      return;
    }
    if (e.position < e.length - 1) g(e, "end of the stream or a document separator is expected");
    else return;
  }
  function Xe(e, _) {
    e = String(e), _ = _ || {}, e.length !== 0 && (e.charCodeAt(e.length - 1) !== 10 && e.charCodeAt(e.length - 1) !== 13 && (e += `
`), e.charCodeAt(0) === 65279 && (e = e.slice(1)));
    var E = new Z(e, _), M = e.indexOf("\0");
    for (M !== -1 && (E.position = M, g(E, "null byte is not allowed in input")), E.input += "\0"; E.input.charCodeAt(E.position) === 32; ) E.lineIndent += 1, E.position += 1;
    for (; E.position < E.length - 1; ) Te(E);
    return E.documents;
  }
  function lr(e, _, E) {
    _ !== null && typeof _ == "object" && typeof E > "u" && (E = _, _ = null);
    var M = Xe(e, E);
    if (typeof _ != "function") return M;
    for (var O = 0, I = M.length; O < I; O += 1) _(M[O]);
  }
  function er(e, _) {
    var E = Xe(e, _);
    if (E.length !== 0) {
      if (E.length === 1) return E[0];
      throw new v("expected a single document in the stream, but found more");
    }
  }
  return tr.loadAll = lr, tr.load = er, tr;
}
var Nr = {}, gt;
function pn() {
  if (gt) return Nr;
  gt = 1;
  var l = Ye(), v = Ve(), x = Br(), A = Object.prototype.toString, c = Object.prototype.hasOwnProperty, d = 65279, f = 9, a = 10, n = 13, s = 32, t = 33, u = 34, o = 35, i = 37, h = 38, q = 39, b = 42, y = 44, p = 45, m = 58, w = 61, T = 62, P = 63, J = 64, X = 91, W = 93, z = 96, oe = 123, ee = 124, te = 125, Z = {};
  Z[0] = "\\0", Z[7] = "\\a", Z[8] = "\\b", Z[9] = "\\t", Z[10] = "\\n", Z[11] = "\\v", Z[12] = "\\f", Z[13] = "\\r", Z[27] = "\\e", Z[34] = '\\"', Z[92] = "\\\\", Z[133] = "\\N", Z[160] = "\\_", Z[8232] = "\\L", Z[8233] = "\\P";
  var S = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"], g = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function K(r, k) {
    var N, R, C, B, H, F, $;
    if (k === null) return {};
    for (N = {}, R = Object.keys(k), C = 0, B = R.length; C < B; C += 1) H = R[C], F = String(k[H]), H.slice(0, 2) === "!!" && (H = "tag:yaml.org,2002:" + H.slice(2)), $ = r.compiledTypeMap.fallback[H], $ && c.call($.styleAliases, F) && (F = $.styleAliases[F]), N[H] = F;
    return N;
  }
  function Y(r) {
    var k, N, R;
    if (k = r.toString(16).toUpperCase(), r <= 255) N = "x", R = 2;
    else if (r <= 65535) N = "u", R = 4;
    else if (r <= 4294967295) N = "U", R = 8;
    else throw new v("code point within a string may not be greater than 0xFFFFFFFF");
    return "\\" + N + l.repeat("0", R - k.length) + k;
  }
  var V = 1, me = 2;
  function ce(r) {
    this.schema = r.schema || x, this.indent = Math.max(1, r.indent || 2), this.noArrayIndent = r.noArrayIndent || false, this.skipInvalid = r.skipInvalid || false, this.flowLevel = l.isNothing(r.flowLevel) ? -1 : r.flowLevel, this.styleMap = K(this.schema, r.styles || null), this.sortKeys = r.sortKeys || false, this.lineWidth = r.lineWidth || 80, this.noRefs = r.noRefs || false, this.noCompatMode = r.noCompatMode || false, this.condenseFlow = r.condenseFlow || false, this.quotingType = r.quotingType === '"' ? me : V, this.forceQuotes = r.forceQuotes || false, this.replacer = typeof r.replacer == "function" ? r.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
  }
  function qe(r, k) {
    for (var N = l.repeat(" ", k), R = 0, C = -1, B = "", H, F = r.length; R < F; ) C = r.indexOf(`
`, R), C === -1 ? (H = r.slice(R), R = F) : (H = r.slice(R, C + 1), R = C + 1), H.length && H !== `
` && (B += N), B += H;
    return B;
  }
  function se(r, k) {
    return `
` + l.repeat(" ", r.indent * k);
  }
  function Be(r, k) {
    var N, R, C;
    for (N = 0, R = r.implicitTypes.length; N < R; N += 1) if (C = r.implicitTypes[N], C.resolve(k)) return true;
    return false;
  }
  function Re(r) {
    return r === s || r === f;
  }
  function Ce(r) {
    return 32 <= r && r <= 126 || 161 <= r && r <= 55295 && r !== 8232 && r !== 8233 || 57344 <= r && r <= 65533 && r !== d || 65536 <= r && r <= 1114111;
  }
  function ze(r) {
    return Ce(r) && r !== d && r !== n && r !== a;
  }
  function Je(r, k, N) {
    var R = ze(r), C = R && !Re(r);
    return (N ? R : R && r !== y && r !== X && r !== W && r !== oe && r !== te) && r !== o && !(k === m && !C) || ze(k) && !Re(k) && r === o || k === m && C;
  }
  function ur(r) {
    return Ce(r) && r !== d && !Re(r) && r !== p && r !== P && r !== m && r !== y && r !== X && r !== W && r !== oe && r !== te && r !== o && r !== h && r !== b && r !== t && r !== ee && r !== w && r !== T && r !== q && r !== u && r !== i && r !== J && r !== z;
  }
  function cr(r) {
    return !Re(r) && r !== m;
  }
  function Pe(r, k) {
    var N = r.charCodeAt(k), R;
    return N >= 55296 && N <= 56319 && k + 1 < r.length && (R = r.charCodeAt(k + 1), R >= 56320 && R <= 57343) ? (N - 55296) * 1024 + R - 56320 + 65536 : N;
  }
  function Ge(r) {
    var k = /^\n* /;
    return k.test(r);
  }
  var Qe = 1, Fe = 2, Ze = 3, Oe = 4, Te = 5;
  function Xe(r, k, N, R, C, B, H, F) {
    var $, G = 0, ue = null, le = false, ie = false, Ir = R !== -1, He = -1, Le = ur(Pe(r, 0)) && cr(Pe(r, r.length - 1));
    if (k || H) for ($ = 0; $ < r.length; G >= 65536 ? $ += 2 : $++) {
      if (G = Pe(r, $), !Ce(G)) return Te;
      Le = Le && Je(G, ue, F), ue = G;
    }
    else {
      for ($ = 0; $ < r.length; G >= 65536 ? $ += 2 : $++) {
        if (G = Pe(r, $), G === a) le = true, Ir && (ie = ie || $ - He - 1 > R && r[He + 1] !== " ", He = $);
        else if (!Ce(G)) return Te;
        Le = Le && Je(G, ue, F), ue = G;
      }
      ie = ie || Ir && $ - He - 1 > R && r[He + 1] !== " ";
    }
    return !le && !ie ? Le && !H && !C(r) ? Qe : B === me ? Te : Fe : N > 9 && Ge(r) ? Te : H ? B === me ? Te : Fe : ie ? Oe : Ze;
  }
  function lr(r, k, N, R, C) {
    r.dump = (function() {
      if (k.length === 0) return r.quotingType === me ? '""' : "''";
      if (!r.noCompatMode && (S.indexOf(k) !== -1 || g.test(k))) return r.quotingType === me ? '"' + k + '"' : "'" + k + "'";
      var B = r.indent * Math.max(1, N), H = r.lineWidth === -1 ? -1 : Math.max(Math.min(r.lineWidth, 40), r.lineWidth - B), F = R || r.flowLevel > -1 && N >= r.flowLevel;
      function $(G) {
        return Be(r, G);
      }
      switch (Xe(k, F, r.indent, H, $, r.quotingType, r.forceQuotes && !R, C)) {
        case Qe:
          return k;
        case Fe:
          return "'" + k.replace(/'/g, "''") + "'";
        case Ze:
          return "|" + er(k, r.indent) + e(qe(k, B));
        case Oe:
          return ">" + er(k, r.indent) + e(qe(_(k, H), B));
        case Te:
          return '"' + M(k) + '"';
        default:
          throw new v("impossible error: invalid scalar style");
      }
    })();
  }
  function er(r, k) {
    var N = Ge(r) ? String(k) : "", R = r[r.length - 1] === `
`, C = R && (r[r.length - 2] === `
` || r === `
`), B = C ? "+" : R ? "" : "-";
    return N + B + `
`;
  }
  function e(r) {
    return r[r.length - 1] === `
` ? r.slice(0, -1) : r;
  }
  function _(r, k) {
    for (var N = /(\n+)([^\n]*)/g, R = (function() {
      var G = r.indexOf(`
`);
      return G = G !== -1 ? G : r.length, N.lastIndex = G, E(r.slice(0, G), k);
    })(), C = r[0] === `
` || r[0] === " ", B, H; H = N.exec(r); ) {
      var F = H[1], $ = H[2];
      B = $[0] === " ", R += F + (!C && !B && $ !== "" ? `
` : "") + E($, k), C = B;
    }
    return R;
  }
  function E(r, k) {
    if (r === "" || r[0] === " ") return r;
    for (var N = / [^ ]/g, R, C = 0, B, H = 0, F = 0, $ = ""; R = N.exec(r); ) F = R.index, F - C > k && (B = H > C ? H : F, $ += `
` + r.slice(C, B), C = B + 1), H = F;
    return $ += `
`, r.length - C > k && H > C ? $ += r.slice(C, H) + `
` + r.slice(H + 1) : $ += r.slice(C), $.slice(1);
  }
  function M(r) {
    for (var k = "", N = 0, R, C = 0; C < r.length; N >= 65536 ? C += 2 : C++) N = Pe(r, C), R = Z[N], !R && Ce(N) ? (k += r[C], N >= 65536 && (k += r[C + 1])) : k += R || Y(N);
    return k;
  }
  function O(r, k, N) {
    var R = "", C = r.tag, B, H, F;
    for (B = 0, H = N.length; B < H; B += 1) F = N[B], r.replacer && (F = r.replacer.call(N, String(B), F)), (Q(r, k, F, false, false) || typeof F > "u" && Q(r, k, null, false, false)) && (R !== "" && (R += "," + (r.condenseFlow ? "" : " ")), R += r.dump);
    r.tag = C, r.dump = "[" + R + "]";
  }
  function I(r, k, N, R) {
    var C = "", B = r.tag, H, F, $;
    for (H = 0, F = N.length; H < F; H += 1) $ = N[H], r.replacer && ($ = r.replacer.call(N, String(H), $)), (Q(r, k + 1, $, true, true, false, true) || typeof $ > "u" && Q(r, k + 1, null, true, true, false, true)) && ((!R || C !== "") && (C += se(r, k)), r.dump && a === r.dump.charCodeAt(0) ? C += "-" : C += "- ", C += r.dump);
    r.tag = B, r.dump = C || "[]";
  }
  function j(r, k, N) {
    var R = "", C = r.tag, B = Object.keys(N), H, F, $, G, ue;
    for (H = 0, F = B.length; H < F; H += 1) ue = "", R !== "" && (ue += ", "), r.condenseFlow && (ue += '"'), $ = B[H], G = N[$], r.replacer && (G = r.replacer.call(N, $, G)), Q(r, k, $, false, false) && (r.dump.length > 1024 && (ue += "? "), ue += r.dump + (r.condenseFlow ? '"' : "") + ":" + (r.condenseFlow ? "" : " "), Q(r, k, G, false, false) && (ue += r.dump, R += ue));
    r.tag = C, r.dump = "{" + R + "}";
  }
  function D(r, k, N, R) {
    var C = "", B = r.tag, H = Object.keys(N), F, $, G, ue, le, ie;
    if (r.sortKeys === true) H.sort();
    else if (typeof r.sortKeys == "function") H.sort(r.sortKeys);
    else if (r.sortKeys) throw new v("sortKeys must be a boolean or a function");
    for (F = 0, $ = H.length; F < $; F += 1) ie = "", (!R || C !== "") && (ie += se(r, k)), G = H[F], ue = N[G], r.replacer && (ue = r.replacer.call(N, G, ue)), Q(r, k + 1, G, true, true, true) && (le = r.tag !== null && r.tag !== "?" || r.dump && r.dump.length > 1024, le && (r.dump && a === r.dump.charCodeAt(0) ? ie += "?" : ie += "? "), ie += r.dump, le && (ie += se(r, k)), Q(r, k + 1, ue, true, le) && (r.dump && a === r.dump.charCodeAt(0) ? ie += ":" : ie += ": ", ie += r.dump, C += ie));
    r.tag = B, r.dump = C || "{}";
  }
  function U(r, k, N) {
    var R, C, B, H, F, $;
    for (C = N ? r.explicitTypes : r.implicitTypes, B = 0, H = C.length; B < H; B += 1) if (F = C[B], (F.instanceOf || F.predicate) && (!F.instanceOf || typeof k == "object" && k instanceof F.instanceOf) && (!F.predicate || F.predicate(k))) {
      if (N ? F.multi && F.representName ? r.tag = F.representName(k) : r.tag = F.tag : r.tag = "?", F.represent) {
        if ($ = r.styleMap[F.tag] || F.defaultStyle, A.call(F.represent) === "[object Function]") R = F.represent(k, $);
        else if (c.call(F.represent, $)) R = F.represent[$](k, $);
        else throw new v("!<" + F.tag + '> tag resolver accepts not "' + $ + '" style');
        r.dump = R;
      }
      return true;
    }
    return false;
  }
  function Q(r, k, N, R, C, B, H) {
    r.tag = null, r.dump = N, U(r, N, false) || U(r, N, true);
    var F = A.call(r.dump), $ = R, G;
    R && (R = r.flowLevel < 0 || r.flowLevel > k);
    var ue = F === "[object Object]" || F === "[object Array]", le, ie;
    if (ue && (le = r.duplicates.indexOf(N), ie = le !== -1), (r.tag !== null && r.tag !== "?" || ie || r.indent !== 2 && k > 0) && (C = false), ie && r.usedDuplicates[le]) r.dump = "*ref_" + le;
    else {
      if (ue && ie && !r.usedDuplicates[le] && (r.usedDuplicates[le] = true), F === "[object Object]") R && Object.keys(r.dump).length !== 0 ? (D(r, k, r.dump, C), ie && (r.dump = "&ref_" + le + r.dump)) : (j(r, k, r.dump), ie && (r.dump = "&ref_" + le + " " + r.dump));
      else if (F === "[object Array]") R && r.dump.length !== 0 ? (r.noArrayIndent && !H && k > 0 ? I(r, k - 1, r.dump, C) : I(r, k, r.dump, C), ie && (r.dump = "&ref_" + le + r.dump)) : (O(r, k, r.dump), ie && (r.dump = "&ref_" + le + " " + r.dump));
      else if (F === "[object String]") r.tag !== "?" && lr(r, r.dump, k, B, $);
      else {
        if (F === "[object Undefined]") return false;
        if (r.skipInvalid) return false;
        throw new v("unacceptable kind of an object to dump " + F);
      }
      r.tag !== null && r.tag !== "?" && (G = encodeURI(r.tag[0] === "!" ? r.tag.slice(1) : r.tag).replace(/!/g, "%21"), r.tag[0] === "!" ? G = "!" + G : G.slice(0, 18) === "tag:yaml.org,2002:" ? G = "!!" + G.slice(18) : G = "!<" + G + ">", r.dump = G + " " + r.dump);
    }
    return true;
  }
  function re(r, k) {
    var N = [], R = [], C, B;
    for (L(r, N, R), C = 0, B = R.length; C < B; C += 1) k.duplicates.push(N[R[C]]);
    k.usedDuplicates = new Array(B);
  }
  function L(r, k, N) {
    var R, C, B;
    if (r !== null && typeof r == "object") if (C = k.indexOf(r), C !== -1) N.indexOf(C) === -1 && N.push(C);
    else if (k.push(r), Array.isArray(r)) for (C = 0, B = r.length; C < B; C += 1) L(r[C], k, N);
    else for (R = Object.keys(r), C = 0, B = R.length; C < B; C += 1) L(r[R[C]], k, N);
  }
  function de(r, k) {
    k = k || {};
    var N = new ce(k);
    N.noRefs || re(r, N);
    var R = r;
    return N.replacer && (R = N.replacer.call({ "": R }, "", R)), Q(N, 0, R, true, true) ? N.dump + `
` : "";
  }
  return Nr.dump = de, Nr;
}
var yt;
function bt() {
  if (yt) return fe;
  yt = 1;
  var l = fn(), v = pn();
  function x(A, c) {
    return function() {
      throw new Error("Function yaml." + A + " is removed in js-yaml 4. Use yaml." + c + " instead, which is now safe by default.");
    };
  }
  return fe.Type = pe(), fe.Schema = jt(), fe.FAILSAFE_SCHEMA = Dt(), fe.JSON_SCHEMA = Ut(), fe.CORE_SCHEMA = Wt(), fe.DEFAULT_SCHEMA = Br(), fe.load = l.load, fe.loadAll = l.loadAll, fe.dump = v.dump, fe.YAMLException = Ve(), fe.types = { binary: Vt(), float: $t(), map: Mt(), null: Ft(), pairs: Jt(), set: Gt(), timestamp: Kt(), bool: Ht(), int: Lt(), merge: Yt(), omap: zt(), seq: It(), str: Bt() }, fe.safeLoad = x("safeLoad", "load"), fe.safeLoadAll = x("safeLoadAll", "loadAll"), fe.safeDump = x("safeDump", "dump"), fe;
}
var vt;
function hn() {
  if (vt) return Me;
  vt = 1;
  var l = Me && Me.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(Me, "__esModule", { value: true });
  const v = xe(), x = l(bt()), A = bt();
  return Me.default = { order: 200, allowEmpty: true, canParse: [".yaml", ".yml", ".json"], async parse(c) {
    let d = c.data;
    if (Buffer.isBuffer(d) && (d = d.toString()), typeof d == "string") try {
      return x.default.load(d, { schema: A.JSON_SCHEMA });
    } catch {
      try {
        return x.default.load(d);
      } catch (a) {
        throw new v.ParserError((a == null ? void 0 : a.message) || "Parser Error", c.url);
      }
    }
    else return d;
  } }, Me;
}
var nr = {}, _t;
function gn() {
  if (_t) return nr;
  _t = 1, Object.defineProperty(nr, "__esModule", { value: true });
  const l = xe(), v = /\.(txt|htm|html|md|xml|js|min|map|css|scss|less|svg)$/i;
  return nr.default = { order: 300, allowEmpty: true, encoding: "utf8", canParse(x) {
    return (typeof x.data == "string" || Buffer.isBuffer(x.data)) && v.test(x.url);
  }, parse(x) {
    if (typeof x.data == "string") return x.data;
    if (Buffer.isBuffer(x.data)) return x.data.toString(this.encoding);
    throw new l.ParserError("data is not text", x.url);
  } }, nr;
}
var ir = {}, wt;
function yn() {
  if (wt) return ir;
  wt = 1, Object.defineProperty(ir, "__esModule", { value: true });
  const l = /\.(jpeg|jpg|gif|png|bmp|ico)$/i;
  return ir.default = { order: 400, allowEmpty: true, canParse(v) {
    return Buffer.isBuffer(v.data) && l.test(v.url);
  }, parse(v) {
    return Buffer.isBuffer(v.data) ? v.data : Buffer.from(v.data);
  } }, ir;
}
var ge = {}, St;
function bn() {
  if (St) return ge;
  St = 1;
  var l = ge && ge.__createBinding || (Object.create ? (function(a, n, s, t) {
    t === void 0 && (t = s);
    var u = Object.getOwnPropertyDescriptor(n, s);
    (!u || ("get" in u ? !n.__esModule : u.writable || u.configurable)) && (u = { enumerable: true, get: function() {
      return n[s];
    } }), Object.defineProperty(a, t, u);
  }) : (function(a, n, s, t) {
    t === void 0 && (t = s), a[t] = n[s];
  })), v = ge && ge.__setModuleDefault || (Object.create ? (function(a, n) {
    Object.defineProperty(a, "default", { enumerable: true, value: n });
  }) : function(a, n) {
    a.default = n;
  }), x = ge && ge.__importStar || /* @__PURE__ */ (function() {
    var a = function(n) {
      return a = Object.getOwnPropertyNames || function(s) {
        var t = [];
        for (var u in s) Object.prototype.hasOwnProperty.call(s, u) && (t[t.length] = u);
        return t;
      }, a(n);
    };
    return function(n) {
      if (n && n.__esModule) return n;
      var s = {};
      if (n != null) for (var t = a(n), u = 0; u < t.length; u++) t[u] !== "default" && l(s, n, t[u]);
      return v(s, n), s;
    };
  })(), A = ge && ge.__importDefault || function(a) {
    return a && a.__esModule ? a : { default: a };
  };
  Object.defineProperty(ge, "__esModule", { value: true });
  const c = A(sr), d = x(_e()), f = xe();
  return ge.default = { order: 100, canRead(a) {
    return d.isFileSystemPath(a.url);
  }, async read(a) {
    let n;
    try {
      n = d.toFileSystemPath(a.url);
    } catch (s) {
      const t = s;
      throw t.message = `Malformed URI: ${a.url}: ${t.message}`, new f.ResolverError(t, a.url);
    }
    (n.endsWith("/") || n.endsWith("\\")) && (n = n.slice(0, -1));
    try {
      return await c.default.promises.readFile(n);
    } catch (s) {
      const t = s;
      throw t.message = `Error opening file ${n}: ${t.message}`, new f.ResolverError(t, n);
    }
  } }, ge;
}
var Ee = {}, xt;
function vn() {
  if (xt) return Ee;
  xt = 1;
  var l = Ee && Ee.__createBinding || (Object.create ? (function(a, n, s, t) {
    t === void 0 && (t = s);
    var u = Object.getOwnPropertyDescriptor(n, s);
    (!u || ("get" in u ? !n.__esModule : u.writable || u.configurable)) && (u = { enumerable: true, get: function() {
      return n[s];
    } }), Object.defineProperty(a, t, u);
  }) : (function(a, n, s, t) {
    t === void 0 && (t = s), a[t] = n[s];
  })), v = Ee && Ee.__setModuleDefault || (Object.create ? (function(a, n) {
    Object.defineProperty(a, "default", { enumerable: true, value: n });
  }) : function(a, n) {
    a.default = n;
  }), x = Ee && Ee.__importStar || /* @__PURE__ */ (function() {
    var a = function(n) {
      return a = Object.getOwnPropertyNames || function(s) {
        var t = [];
        for (var u in s) Object.prototype.hasOwnProperty.call(s, u) && (t[t.length] = u);
        return t;
      }, a(n);
    };
    return function(n) {
      if (n && n.__esModule) return n;
      var s = {};
      if (n != null) for (var t = a(n), u = 0; u < t.length; u++) t[u] !== "default" && l(s, n, t[u]);
      return v(s, n), s;
    };
  })();
  Object.defineProperty(Ee, "__esModule", { value: true });
  const A = x(_e()), c = xe();
  Ee.default = { order: 200, headers: null, timeout: 6e4, redirects: 5, withCredentials: false, safeUrlResolver: true, canRead(a) {
    return A.isHttp(a.url) && (!this.safeUrlResolver || !A.isUnsafeUrl(a.url));
  }, read(a) {
    const n = A.parse(a.url);
    return typeof window < "u" && !n.protocol && (n.protocol = A.parse(location.href).protocol), d(n, this);
  } };
  async function d(a, n, s) {
    a = A.parse(a);
    const t = s || [];
    t.push(a.href);
    try {
      const u = await f(a, n);
      if (u.status >= 400) {
        const o = new Error(`HTTP ERROR ${u.status}`);
        throw o.status = u.status, o;
      } else if (u.status >= 300) if (!Number.isNaN(n.redirects) && t.length > n.redirects) {
        const o = new Error(`Error downloading ${t[0]}. 
Too many redirects: 
  ${t.join(` 
  `)}`);
        throw o.status = u.status, new c.ResolverError(o);
      } else if (!("location" in u.headers) || !u.headers.location) {
        const o = new Error(`HTTP ${u.status} redirect with no location header`);
        throw o.status = u.status, o;
      } else {
        const o = A.resolve(a.href, u.headers.location);
        return d(o, n, t);
      }
      else {
        if (u.body) {
          const o = await u.arrayBuffer();
          return Buffer.from(o);
        }
        return Buffer.alloc(0);
      }
    } catch (u) {
      const o = u;
      throw o.message = `Error downloading ${a.href}: ${o.message}`, new c.ResolverError(o, a.href);
    }
  }
  async function f(a, n) {
    let s, t;
    n.timeout && (s = new AbortController(), t = setTimeout(() => s.abort(), n.timeout));
    const u = await fetch(a, { method: "GET", headers: n.headers || {}, credentials: n.withCredentials ? "include" : "same-origin", signal: s ? s.signal : null });
    return t && clearTimeout(t), u;
  }
  return Ee;
}
var qt;
function Qt() {
  return qt || (qt = 1, (function(l) {
    var v = We && We.__importDefault || function(o) {
      return o && o.__esModule ? o : { default: o };
    };
    Object.defineProperty(l, "__esModule", { value: true }), l.getNewOptions = l.getJsonSchemaRefParserDefaultOptions = void 0;
    const x = v(mn()), A = v(hn()), c = v(gn()), d = v(yn()), f = v(bn()), a = v(vn()), n = () => ({ parse: { json: { ...x.default }, yaml: { ...A.default }, text: { ...c.default }, binary: { ...d.default } }, resolve: { file: { ...f.default }, http: { ...a.default }, external: true }, continueOnError: false, bundle: { excludedPathMatcher: () => false }, dereference: { circular: true, excludedPathMatcher: () => false, referenceResolution: "relative" }, mutateInputSchema: true });
    l.getJsonSchemaRefParserDefaultOptions = n;
    const s = (o) => {
      const i = (0, l.getJsonSchemaRefParserDefaultOptions)();
      return o && t(i, o), i;
    };
    l.getNewOptions = s;
    function t(o, i) {
      if (u(i)) {
        const h = Object.keys(i).filter((q) => !["__proto__", "constructor", "prototype"].includes(q));
        for (let q = 0; q < h.length; q++) {
          const b = h[q], y = i[b], p = o[b];
          u(y) ? o[b] = t(p || {}, y) : y !== void 0 && (o[b] = y);
        }
      }
      return o;
    }
    function u(o) {
      return o && typeof o == "object" && !Array.isArray(o) && !(o instanceof RegExp) && !(o instanceof Date);
    }
  })(We)), We;
}
var kt;
function _n() {
  if (kt) return Ue;
  kt = 1, Object.defineProperty(Ue, "__esModule", { value: true }), Ue.normalizeArgs = v;
  const l = Qt();
  function v(x) {
    let A, c, d, f;
    const a = Array.prototype.slice.call(x);
    typeof a[a.length - 1] == "function" && (f = a.pop()), typeof a[0] == "string" ? (A = a[0], typeof a[2] == "object" ? (c = a[1], d = a[2]) : (c = void 0, d = a[1])) : (A = "", c = a[0], d = a[1]);
    try {
      d = (0, l.getNewOptions)(d);
    } catch (n) {
      console.error(`JSON Schema Ref Parser: Error normalizing options: ${n}`);
    }
    return !d.mutateInputSchema && typeof c == "object" && (c = JSON.parse(JSON.stringify(c))), { path: A, schema: c, options: d, callback: f };
  }
  return Ue.default = v, Ue;
}
var ye = {}, At;
function wn() {
  if (At) return ye;
  At = 1;
  var l = ye && ye.__createBinding || (Object.create ? (function(o, i, h, q) {
    q === void 0 && (q = h);
    var b = Object.getOwnPropertyDescriptor(i, h);
    (!b || ("get" in b ? !i.__esModule : b.writable || b.configurable)) && (b = { enumerable: true, get: function() {
      return i[h];
    } }), Object.defineProperty(o, q, b);
  }) : (function(o, i, h, q) {
    q === void 0 && (q = h), o[q] = i[h];
  })), v = ye && ye.__setModuleDefault || (Object.create ? (function(o, i) {
    Object.defineProperty(o, "default", { enumerable: true, value: i });
  }) : function(o, i) {
    o.default = i;
  }), x = ye && ye.__importStar || /* @__PURE__ */ (function() {
    var o = function(i) {
      return o = Object.getOwnPropertyNames || function(h) {
        var q = [];
        for (var b in h) Object.prototype.hasOwnProperty.call(h, b) && (q[q.length] = b);
        return q;
      }, o(i);
    };
    return function(i) {
      if (i && i.__esModule) return i;
      var h = {};
      if (i != null) for (var q = o(i), b = 0; b < q.length; b++) q[b] !== "default" && l(h, i, q[b]);
      return v(h, i), h;
    };
  })(), A = ye && ye.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(ye, "__esModule", { value: true });
  const c = A(Ke()), d = A(or()), f = A(Ct()), a = x(_e()), n = xe();
  function s(o, i) {
    var _a;
    if (!((_a = i.resolve) == null ? void 0 : _a.external)) return Promise.resolve();
    try {
      const h = t(o.schema, o.$refs._root$Ref.path + "#", o.$refs, i);
      return Promise.all(h);
    } catch (h) {
      return Promise.reject(h);
    }
  }
  function t(o, i, h, q, b, y) {
    b || (b = /* @__PURE__ */ new Set());
    let p = [];
    if (o && typeof o == "object" && !ArrayBuffer.isView(o) && !b.has(o)) {
      b.add(o), c.default.isExternal$Ref(o) && p.push(u(o, i, h, q));
      const m = Object.keys(o);
      for (const w of m) {
        const T = d.default.join(i, w), P = o[w];
        p = p.concat(t(P, T, h, q, b));
      }
    }
    return p;
  }
  async function u(o, i, h, q) {
    var _a;
    const b = ((_a = q.dereference) == null ? void 0 : _a.externalReferenceResolution) === "root", y = a.resolve(b ? a.cwd() : i, o.$ref), p = a.stripHash(y), m = h._$refs[p];
    if (m) return Promise.resolve(m.value);
    try {
      const w = await (0, f.default)(y, h, q), T = t(w, p + "#", h, q, /* @__PURE__ */ new Set(), true);
      return Promise.all(T);
    } catch (w) {
      if (!(q == null ? void 0 : q.continueOnError) || !(0, n.isHandledError)(w)) throw w;
      return h._$refs[p] && (w.source = decodeURI(a.stripHash(i)), w.path = a.safePointerToPath(a.getHash(i))), [];
    }
  }
  return ye.default = s, ye;
}
var be = {}, Et;
function Sn() {
  if (Et) return be;
  Et = 1;
  var l = be && be.__createBinding || (Object.create ? (function(i, h, q, b) {
    b === void 0 && (b = q);
    var y = Object.getOwnPropertyDescriptor(h, q);
    (!y || ("get" in y ? !h.__esModule : y.writable || y.configurable)) && (y = { enumerable: true, get: function() {
      return h[q];
    } }), Object.defineProperty(i, b, y);
  }) : (function(i, h, q, b) {
    b === void 0 && (b = q), i[b] = h[q];
  })), v = be && be.__setModuleDefault || (Object.create ? (function(i, h) {
    Object.defineProperty(i, "default", { enumerable: true, value: h });
  }) : function(i, h) {
    i.default = h;
  }), x = be && be.__importStar || /* @__PURE__ */ (function() {
    var i = function(h) {
      return i = Object.getOwnPropertyNames || function(q) {
        var b = [];
        for (var y in q) Object.prototype.hasOwnProperty.call(q, y) && (b[b.length] = y);
        return b;
      }, i(h);
    };
    return function(h) {
      if (h && h.__esModule) return h;
      var q = {};
      if (h != null) for (var b = i(h), y = 0; y < b.length; y++) b[y] !== "default" && l(q, h, b[y]);
      return v(q, h), q;
    };
  })(), A = be && be.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(be, "__esModule", { value: true });
  const c = A(Ke()), d = A(or()), f = x(_e());
  function a(i, h) {
    const q = [];
    n(i, "schema", i.$refs._root$Ref.path + "#", "#", 0, q, i.$refs, h), t(q);
  }
  function n(i, h, q, b, y, p, m, w) {
    var _a;
    const T = h === null ? i : i[h], P = w.bundle || {}, J = P.excludedPathMatcher || (() => false);
    if (T && typeof T == "object" && !ArrayBuffer.isView(T) && !J(b)) if (c.default.isAllowed$Ref(T)) s(i, h, q, b, y, p, m, w);
    else {
      const X = Object.keys(T).sort((W, z) => W === "definitions" || W === "$defs" ? -1 : z === "definitions" || z === "$defs" ? 1 : W.length - z.length);
      for (const W of X) {
        const z = d.default.join(q, W), oe = d.default.join(b, W), ee = T[W];
        c.default.isAllowed$Ref(ee) ? s(T, W, q, oe, y, p, m, w) : n(T, W, z, oe, y, p, m, w), ee && typeof ee == "object" && !Array.isArray(ee) && "$ref" in ee && ((_a = P == null ? void 0 : P.onBundle) == null ? void 0 : _a.call(P, ee.$ref, T[W], T, W));
      }
    }
  }
  function s(i, h, q, b, y, p, m, w) {
    const T = h === null ? i : i[h], P = f.resolve(q, T.$ref), J = m._resolve(P, b, w);
    if (J === null) return;
    const W = d.default.parse(b).length, z = f.stripHash(J.path), oe = f.getHash(J.path), ee = z !== m._root$Ref.path, te = c.default.isExtended$Ref(T);
    y += J.indirections;
    const Z = u(p, i, h);
    if (Z) if (W < Z.depth || y < Z.indirections) o(p, Z);
    else return;
    p.push({ $ref: T, parent: i, key: h, pathFromRoot: b, depth: W, file: z, hash: oe, value: J.value, circular: J.circular, extended: te, external: ee, indirections: y }), (!Z || ee) && n(J.value, null, J.path, b, y + 1, p, m, w);
  }
  function t(i) {
    i.sort((y, p) => {
      if (y.file !== p.file) return y.file < p.file ? -1 : 1;
      if (y.hash !== p.hash) return y.hash < p.hash ? -1 : 1;
      if (y.circular !== p.circular) return y.circular ? -1 : 1;
      if (y.extended !== p.extended) return y.extended ? 1 : -1;
      if (y.indirections !== p.indirections) return y.indirections - p.indirections;
      if (y.depth !== p.depth) return y.depth - p.depth;
      {
        const m = Math.max(y.pathFromRoot.lastIndexOf("/definitions"), y.pathFromRoot.lastIndexOf("/$defs")), w = Math.max(p.pathFromRoot.lastIndexOf("/definitions"), p.pathFromRoot.lastIndexOf("/$defs"));
        return m !== w ? w - m : y.pathFromRoot.length - p.pathFromRoot.length;
      }
    });
    let h, q, b;
    for (const y of i) y.external ? y.file === h && y.hash === q ? y.$ref.$ref = b : y.file === h && y.hash.indexOf(q + "/") === 0 ? y.$ref.$ref = d.default.join(b, d.default.parse(y.hash.replace(q, "#"))) : (h = y.file, q = y.hash, b = y.pathFromRoot, y.$ref = y.parent[y.key] = c.default.dereference(y.$ref, y.value), y.circular && (y.$ref.$ref = y.pathFromRoot)) : y.$ref.$ref = y.hash;
  }
  function u(i, h, q) {
    for (const b of i) if (b && b.parent === h && b.key === q) return b;
  }
  function o(i, h) {
    const q = i.indexOf(h);
    i.splice(q, 1);
  }
  return be.default = a, be;
}
var ve = {}, Ot;
function xn() {
  if (Ot) return ve;
  Ot = 1;
  var l = ve && ve.__createBinding || (Object.create ? (function(i, h, q, b) {
    b === void 0 && (b = q);
    var y = Object.getOwnPropertyDescriptor(h, q);
    (!y || ("get" in y ? !h.__esModule : y.writable || y.configurable)) && (y = { enumerable: true, get: function() {
      return h[q];
    } }), Object.defineProperty(i, b, y);
  }) : (function(i, h, q, b) {
    b === void 0 && (b = q), i[b] = h[q];
  })), v = ve && ve.__setModuleDefault || (Object.create ? (function(i, h) {
    Object.defineProperty(i, "default", { enumerable: true, value: h });
  }) : function(i, h) {
    i.default = h;
  }), x = ve && ve.__importStar || /* @__PURE__ */ (function() {
    var i = function(h) {
      return i = Object.getOwnPropertyNames || function(q) {
        var b = [];
        for (var y in q) Object.prototype.hasOwnProperty.call(q, y) && (b[b.length] = y);
        return b;
      }, i(h);
    };
    return function(h) {
      if (h && h.__esModule) return h;
      var q = {};
      if (h != null) for (var b = i(h), y = 0; y < b.length; y++) b[y] !== "default" && l(q, h, b[y]);
      return v(q, h), q;
    };
  })(), A = ve && ve.__importDefault || function(i) {
    return i && i.__esModule ? i : { default: i };
  };
  Object.defineProperty(ve, "__esModule", { value: true });
  const c = A(Ke()), d = A(or()), f = x(_e()), a = xe();
  ve.default = n;
  function n(i, h) {
    const q = Date.now(), b = s(i.schema, i.$refs._root$Ref.path, "#", /* @__PURE__ */ new Set(), /* @__PURE__ */ new Set(), /* @__PURE__ */ new Map(), i.$refs, h, q);
    i.$refs.circular = b.circular, i.schema = b.value;
  }
  function s(i, h, q, b, y, p, m, w, T) {
    var _a;
    let P;
    const J = { value: i, circular: false };
    u(T, w);
    const X = w.dereference || {}, W = X.excludedPathMatcher || (() => false);
    if (((X == null ? void 0 : X.circular) === "ignore" || !y.has(i)) && i && typeof i == "object" && !ArrayBuffer.isView(i) && !W(q)) {
      if (b.add(i), y.add(i), c.default.isAllowed$Ref(i, w)) P = t(i, h, q, b, y, p, m, w, T), J.circular = P.circular, J.value = P.value;
      else for (const z of Object.keys(i)) {
        u(T, w);
        const oe = d.default.join(h, z), ee = d.default.join(q, z);
        if (W(ee)) continue;
        const te = i[z];
        let Z = false;
        if (c.default.isAllowed$Ref(te, w)) {
          if (P = t(te, oe, ee, b, y, p, m, w, T), Z = P.circular, i[z] !== P.value) {
            const S = /* @__PURE__ */ new Map();
            (X == null ? void 0 : X.preservedProperties) && typeof i[z] == "object" && !Array.isArray(i[z]) && (X == null ? void 0 : X.preservedProperties.forEach((g) => {
              g in i[z] && S.set(g, i[z][g]);
            })), i[z] = P.value, (X == null ? void 0 : X.preservedProperties) && S.size && typeof i[z] == "object" && !Array.isArray(i[z]) && S.forEach((g, K) => {
              i[z][K] = g;
            }), (_a = X == null ? void 0 : X.onDereference) == null ? void 0 : _a.call(X, te.$ref, i[z], i, z);
          }
        } else b.has(te) ? Z = o(oe, m, w) : (P = s(te, oe, ee, b, y, p, m, w, T), Z = P.circular, i[z] !== P.value && (i[z] = P.value));
        J.circular = J.circular || Z;
      }
      b.delete(i);
    }
    return J;
  }
  function t(i, h, q, b, y, p, m, w, T) {
    var _a, _b;
    const J = c.default.isExternal$Ref(i) && ((_a = w == null ? void 0 : w.dereference) == null ? void 0 : _a.externalReferenceResolution) === "root", X = f.resolve(J ? f.cwd() : h, i.$ref), W = p.get(X);
    if (W) {
      if (!W.circular) {
        const S = Object.keys(i);
        if (S.length > 1) {
          const g = {};
          for (const K of S) K !== "$ref" && !(K in W.value) && (g[K] = i[K]);
          return { circular: W.circular, value: Object.assign({}, W.value, g) };
        }
        return W;
      }
      if (typeof W.value == "object" && "$ref" in W.value && "$ref" in i) {
        if (W.value.$ref === i.$ref) return W;
      } else return W;
    }
    const z = m._resolve(X, h, w);
    if (z === null) return { circular: false, value: null };
    const oe = z.circular;
    let ee = oe || b.has(z.value);
    ee && o(h, m, w);
    let te = c.default.dereference(i, z.value);
    if (!ee) {
      const S = s(te, z.path, q, b, y, p, m, w, T);
      ee = S.circular, te = S.value;
    }
    ee && !oe && ((_b = w.dereference) == null ? void 0 : _b.circular) === "ignore" && (te = i), oe && (te.$ref = q);
    const Z = { circular: ee, value: te };
    return Object.keys(i).length === 1 && p.set(X, Z), Z;
  }
  function u(i, h) {
    if (h && h.timeoutMs && Date.now() - i > h.timeoutMs) throw new a.TimeoutError(h.timeoutMs);
  }
  function o(i, h, q) {
    var _a, _b;
    if (h.circular = true, (_b = (_a = q == null ? void 0 : q.dereference) == null ? void 0 : _a.onCircular) == null ? void 0 : _b.call(_a, i), !q.dereference.circular) throw new ReferenceError(`Circular $ref pointer found at ${i}`);
    return true;
  }
  return ve;
}
var De = {}, ar = {}, Rt;
function qn() {
  if (Rt) return ar;
  Rt = 1, Object.defineProperty(ar, "__esModule", { value: true });
  function l() {
    return typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : typeof setImmediate == "function" ? setImmediate : function(x) {
      setTimeout(x, 0);
    };
  }
  return ar.default = l(), ar;
}
var Pt;
function kn() {
  if (Pt) return De;
  Pt = 1;
  var l = De && De.__importDefault || function(A) {
    return A && A.__esModule ? A : { default: A };
  };
  Object.defineProperty(De, "__esModule", { value: true }), De.default = x;
  const v = l(qn());
  function x(A, c) {
    if (A) {
      c.then(function(d) {
        (0, v.default)(function() {
          A(null, d);
        });
      }, function(d) {
        (0, v.default)(function() {
          A(d);
        });
      });
      return;
    } else return c;
  }
  return De;
}
var Tt;
function An() {
  return Tt || (Tt = 1, (function(l) {
    var v = we && we.__createBinding || (Object.create ? (function(p, m, w, T) {
      T === void 0 && (T = w);
      var P = Object.getOwnPropertyDescriptor(m, w);
      (!P || ("get" in P ? !m.__esModule : P.writable || P.configurable)) && (P = { enumerable: true, get: function() {
        return m[w];
      } }), Object.defineProperty(p, T, P);
    }) : (function(p, m, w, T) {
      T === void 0 && (T = w), p[T] = m[w];
    })), x = we && we.__setModuleDefault || (Object.create ? (function(p, m) {
      Object.defineProperty(p, "default", { enumerable: true, value: m });
    }) : function(p, m) {
      p.default = m;
    }), A = we && we.__importStar || /* @__PURE__ */ (function() {
      var p = function(m) {
        return p = Object.getOwnPropertyNames || function(w) {
          var T = [];
          for (var P in w) Object.prototype.hasOwnProperty.call(w, P) && (T[T.length] = P);
          return T;
        }, p(m);
      };
      return function(m) {
        if (m && m.__esModule) return m;
        var w = {};
        if (m != null) for (var T = p(m), P = 0; P < T.length; P++) T[P] !== "default" && v(w, m, T[P]);
        return x(w, m), w;
      };
    })(), c = we && we.__importDefault || function(p) {
      return p && p.__esModule ? p : { default: p };
    };
    Object.defineProperty(l, "__esModule", { value: true }), l.isUnsafeUrl = l.$Refs = l.getJsonSchemaRefParserDefaultOptions = l.jsonSchemaParserNormalizeArgs = l.dereferenceInternal = l.JSONParserErrorGroup = l.isHandledError = l.UnmatchedParserError = l.ParserError = l.ResolverError = l.MissingPointerError = l.InvalidPointerError = l.JSONParserError = l.UnmatchedResolverError = l.dereference = l.bundle = l.resolve = l.parse = l.$RefParser = void 0;
    const d = c(cn());
    l.$Refs = d.default;
    const f = c(Ct()), a = c(_n());
    l.jsonSchemaParserNormalizeArgs = a.default;
    const n = c(wn()), s = c(Sn()), t = c(xn());
    l.dereferenceInternal = t.default;
    const u = A(_e()), o = xe();
    Object.defineProperty(l, "JSONParserError", { enumerable: true, get: function() {
      return o.JSONParserError;
    } }), Object.defineProperty(l, "InvalidPointerError", { enumerable: true, get: function() {
      return o.InvalidPointerError;
    } }), Object.defineProperty(l, "MissingPointerError", { enumerable: true, get: function() {
      return o.MissingPointerError;
    } }), Object.defineProperty(l, "ResolverError", { enumerable: true, get: function() {
      return o.ResolverError;
    } }), Object.defineProperty(l, "ParserError", { enumerable: true, get: function() {
      return o.ParserError;
    } }), Object.defineProperty(l, "UnmatchedParserError", { enumerable: true, get: function() {
      return o.UnmatchedParserError;
    } }), Object.defineProperty(l, "UnmatchedResolverError", { enumerable: true, get: function() {
      return o.UnmatchedResolverError;
    } }), Object.defineProperty(l, "isHandledError", { enumerable: true, get: function() {
      return o.isHandledError;
    } }), Object.defineProperty(l, "JSONParserErrorGroup", { enumerable: true, get: function() {
      return o.JSONParserErrorGroup;
    } });
    const i = c(kn()), h = Qt();
    Object.defineProperty(l, "getJsonSchemaRefParserDefaultOptions", { enumerable: true, get: function() {
      return h.getJsonSchemaRefParserDefaultOptions;
    } });
    const q = _e();
    Object.defineProperty(l, "isUnsafeUrl", { enumerable: true, get: function() {
      return q.isUnsafeUrl;
    } });
    class b {
      constructor() {
        __publicField(this, "schema", null);
        __publicField(this, "$refs", new d.default());
      }
      async parse() {
        const m = (0, a.default)(arguments);
        let w;
        if (!m.path && !m.schema) {
          const P = new Error(`Expected a file path, URL, or object. Got ${m.path || m.schema}`);
          return (0, i.default)(m.callback, Promise.reject(P));
        }
        this.schema = null, this.$refs = new d.default();
        let T = "http";
        if (u.isFileSystemPath(m.path)) m.path = u.fromFileSystemPath(m.path), T = "file";
        else if (!m.path && m.schema && "$id" in m.schema && m.schema.$id) {
          const P = u.parse(m.schema.$id), J = P.protocol === "https:" ? 443 : 80;
          m.path = `${P.protocol}//${P.hostname}:${J}`;
        }
        if (m.path = u.resolve(u.cwd(), m.path), m.schema && typeof m.schema == "object") {
          const P = this.$refs._add(m.path);
          P.value = m.schema, P.pathType = T, w = Promise.resolve(m.schema);
        } else w = (0, f.default)(m.path, this.$refs, m.options);
        try {
          const P = await w;
          if (P !== null && typeof P == "object" && !Buffer.isBuffer(P)) return this.schema = P, (0, i.default)(m.callback, Promise.resolve(this.schema));
          if (m.options.continueOnError) return this.schema = null, (0, i.default)(m.callback, Promise.resolve(this.schema));
          throw new SyntaxError(`"${this.$refs._root$Ref.path || P}" is not a valid JSON Schema`);
        } catch (P) {
          return !m.options.continueOnError || !(0, o.isHandledError)(P) ? (0, i.default)(m.callback, Promise.reject(P)) : (this.$refs._$refs[u.stripHash(m.path)] && this.$refs._$refs[u.stripHash(m.path)].addError(P), (0, i.default)(m.callback, Promise.resolve(null)));
        }
      }
      static parse() {
        const m = new b();
        return m.parse.apply(m, arguments);
      }
      async resolve() {
        const m = (0, a.default)(arguments);
        try {
          return await this.parse(m.path, m.schema, m.options), await (0, n.default)(this, m.options), y(this), (0, i.default)(m.callback, Promise.resolve(this.$refs));
        } catch (w) {
          return (0, i.default)(m.callback, Promise.reject(w));
        }
      }
      static resolve() {
        const m = new b();
        return m.resolve.apply(m, arguments);
      }
      static bundle() {
        const m = new b();
        return m.bundle.apply(m, arguments);
      }
      async bundle() {
        const m = (0, a.default)(arguments);
        try {
          return await this.resolve(m.path, m.schema, m.options), (0, s.default)(this, m.options), y(this), (0, i.default)(m.callback, Promise.resolve(this.schema));
        } catch (w) {
          return (0, i.default)(m.callback, Promise.reject(w));
        }
      }
      static dereference() {
        const m = new b();
        return m.dereference.apply(m, arguments);
      }
      async dereference() {
        const m = (0, a.default)(arguments);
        try {
          return await this.resolve(m.path, m.schema, m.options), (0, t.default)(this, m.options), y(this), (0, i.default)(m.callback, Promise.resolve(this.schema));
        } catch (w) {
          return (0, i.default)(m.callback, Promise.reject(w));
        }
      }
    }
    l.$RefParser = b, l.default = b;
    function y(p) {
      if (o.JSONParserErrorGroup.getParserErrors(p).length > 0) throw new o.JSONParserErrorGroup(p);
    }
    l.parse = b.parse, l.resolve = b.resolve, l.bundle = b.bundle, l.dereference = b.dereference;
  })(we)), we;
}
var En = An();
const On = en(En), Cr = (l) => l.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Zt = (l) => l.charAt(0).toUpperCase() + l.slice(1), Rn = (l) => Zt(l.replace(/([a-z0-9])([A-Z])/g, "$1 $2").toLowerCase());
async function Pn(l) {
  const v = JSON.parse(JSON.stringify(l));
  let x;
  try {
    x = (await On.dereference(v)).methods;
  } catch {
    x = v.methods;
  }
  return x;
}
const Tn = ["validator", "blockchain", "consensus", "wallet", "policy", "mempool", "network", "zkp_component"], Nn = { validator: "i-nimiq:verified", blockchain: "i-nimiq:nodes", consensus: "i-tabler:network", wallet: "i-tabler:wallet", policy: "i-nimiq:verified", mempool: "i-nimiq:cubes", network: "i-nimiq:duotone-network", zkp_component: "i-tabler:lock" }, Cn = ["getAccountByAddress", "getLatestBlock", "getBlockNumber", "getTransactionByHash", "sendBasicTransaction", "createBasicTransaction", "getValidators", "mempool", "subscribeForHeadBlock", "getAddress"];
async function Dn(l) {
  const x = (await Pn(l)).map((c) => ({ ...c, method: Cr(c.name), humanReadableName: Rn(c.name), input: jn(c.params), output: Bn(c.result), link: `/rpc/methods/${Cr(c.name)}`, popular: Cn.includes(c.name) })), A = [];
  for (const c of Tn) {
    const d = x.filter((f) => {
      var _a;
      return (_a = f.tags) == null ? void 0 : _a.map((a) => a.name).includes(c);
    });
    A.push({ icon: Nn[c], methods: d, text: Zt(c), items: d.map((f) => ({ text: `\`${f.name}\``, link: `/rpc/methods/${Cr(f.name)}`, popular: f.popular })) });
  }
  return A;
}
function jr(l) {
  if (l.oneOf) return l.oneOf.map((v) => v.type).join(" | ");
  if (l.type === "array" && l.items) {
    if (l.items.type === "object" && l.items.properties) {
      const x = Object.keys(l.items.properties);
      if (x.every((c) => /^\d+$/.test(c))) return `[${x.sort((f, a) => Number(f) - Number(a)).map((f) => l.items.properties[f].type || "any").join(", ")}][]`;
    }
    return `${l.items.type || "any"}[]`;
  }
  return l.type || "unknown";
}
function jn(l) {
  const v = (A) => {
    var _a;
    return ((_a = l.find((c) => c.name === A)) == null ? void 0 : _a.required) || false;
  };
  return l.map((A) => ({ key: A.name, type: jr(A.schema), required: v(A.name), label: A.humanReadableName }));
}
function Bn(l) {
  let v = [];
  if ("properties" in l.schema) {
    const x = (f) => {
      var _a;
      return ((_a = l.schema.required) == null ? void 0 : _a.includes(f)) || false;
    }, A = l.schema.properties || [], c = Object.keys(A), d = c.every((f) => /^\d+$/.test(f));
    v = c.map((f) => ({ key: d ? `[${f}]` : f, type: jr(A[f]), required: x(f), label: A[f].humanReadableName }));
  } else ("type" in l.schema || "oneOf" in l.schema) && (v = [{ key: l.name, type: jr(l.schema), required: true, label: l.humanReadableName }]);
  return v;
}
export {
  Dn as l,
  Mn as o
};
