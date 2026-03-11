# Frequently Asked Questions about Nimiq PoS Migration

#### Does every Nimiq user need to run the migration tools to transition to PoS?

The migration process is only mandatory for those who want to be the first validators in the PoS chain or those who wish to have their nodes running from the very beginning. For regular users, no action is required. If you want to participate in the transition, you can find the appropriate guide [here](/archive/).

#### I own a Nimiq Wallet. Do I need to participate in the migration?

No, you don’t need to participate. Your balance and transaction history remains intact during the entire process.

#### Can I access my wallet during the transition?

Yes, you can access your wallet at any time during the transition.

#### Can I log in to the Nimiq Wallet with the same Login File after the transition?

Yes, you can. Since your data remains intact, your Login File will remain the same. If you log out for any reason, you can easily log back in using the same file and your password or the 24 recovery words.

#### Do I need to be a miner to register as a validator?

No, you don't. Any type of user can register as a validator, regardless of whether they are a miner or not.

#### Do I need to register as a validator to participate actively in the migration?

No, registration as a validator is optional. Users can choose to actively participate either as a validator or as an observer. Both options are available but participation in the migration is not mandatory for any Nimiq user.

#### Can I deposit more than the minimum required as a pre-registered validator?

Yes. Any NIM amount exceeding the validator deposit of 100 000 NIM will be considered stake, but only if it exceeds the minimum stake of 100 NIM. If the extra deposit does not meet this minimum, it will be burned.

#### Will my balance remain intact during the transition?

Yes, your balance and transaction history will remain intact throughout the transition.

#### I don’t want to participate in the transition, but I want to earn rewards. How can I do it?

You can participate in the pre-staking phase by delegating NIM to one of the pre-registered validators. Simply select a validator from the [provided list]() and pre-stake your NIM to earn rewards post-transition.

#### Can I stake more than the minimum deposit of 100 NIM?

Yes, you can. Any amount above the required 100 NIM minimum deposit will be added as additional stake to the validator of your choice.

#### Can I pre-stake to a validator anytime during the transition?

No, pre-staking is only available during the pre-staking phase. Your NIM will be added to the pre-registered validator’s deposit, contributing to the required threshold of stake needed for migration readiness. After the migration is complete, you can add more stake, re-stake to another validator, or unstake and recover your staked funds.

#### What happens if the activation doesn’t collect 80% of readiness?

The 80% readiness applies to the stake that has been pre-staked by pre-registered validators. There is no minimum amount of NIM that must be pre-staked, but 80% of the pre-staked NIM must signal readiness during an activation window. If this threshold is not met, a new activation window will start immediately after the current one ends. Each new activation window spans 1440 PoW blocks, equivalent to one day, and this process will continue until the required readiness threshold is reached. For more details, you can find more information [here](../migration/migration-technical-details#activation-phase).

#### I pre-registered as a validator but forgot to run the activation tool/send the readiness transaction within the activation window. Can I recover my validator?

Your validator will still be included in the validator list and you can access to it once you migrate. However, if you are selected to produce a block and fail to do so because you didn't launch the tool in time, you will face penalties for the block you skipped to produce. Once you realize the oversight, you can run the activation tool to migrate the state and history and build the genesis block, and reactivate your validator via sending a transaction to the migrated PoS chain.

#### Do I still need to run the activation tool after the PoS is running?

No, the activation tool is specifically designed to migrate the PoW state and establish the genesis block for the PoS chain. Once this is done, the genesis block will be committed to the repository, making the migration tool no longer necessary. From this point on, you can simply follow the steps to run a validator.

#### Can I withdraw my NIM deposit after pre-registration?

Withdrawals are not possible until the PoS chain is operational. You can find more details on the withdrawal process for validators [here](/protocol/validators/validators).

#### Can I switch the validator I have pre-staked my NIM to?

Yes, you can switch the validator you have pre-staked to. We support switching validators and increasing the NIM stake. You cannot remove or decrease the pre-stake; however, if you want to remove your NIM, you can do it after the transition.
