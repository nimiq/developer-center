# Validator keys

Validators hold a set of keys in order to participate in the consensus. Besides a validator address, which serves as the validator’s identifier, validators hold three key pairs: a cold, a warm, and a hot key pair. These keys enable validators to sign several transactions.

A key pair consists of public and private keys, mathematically linked. The private key is used for authentication by the validator, while the corresponding public key is used to validate the authenticity of the validator. Validators use their private key to sign transactions. Then anyone can verify the validity of such transaction by using the validator’s corresponding public key.

For a node to become a validator, it must generate an address and a set of keypairs. Validators also own a fee key from a basic account, which has the sole purpose of paying `automatic_reactivate` transaction fees. To learn how to generate these keys, click here.

The [Schnorr](https://en.wikipedia.org/wiki/Schnorr_signature) signature scheme is used for generating the cold and warm key pairs, providing simplicity and short signatures. The [BLS](https://en.wikipedia.org/wiki/BLS_digital_signature) signature scheme is used for the hot key for signature aggregation and voting efficiency.

## Cold key

- The validator’s address is derived from the cold public key
- The cold private key is used for the validator to sign create, update and delete transactions

## Warm key

- The warm public key is stored in the validator as the `signing_key`
- The warm private key is used for the validator to sign reactivate, and deactivate transactions
- The warm private key is also used for the validator to sign micro blocks, macro block proposals and generate random seeds

## Hot key

- The hot public key is stored in the validator as the `voting_key`
- The hot private key is used for the validator to vote for macro block proposals and skip blocks

###

Having 3 key pairs for validators adds layers of security and reduces the chance of compromising each key. Validators use their keys to sign blocks, vote for block proposals, and send staking contract transactions.

The terminology of hot, warm, and cold keys outlines the frequency of key usage. The hot key is used more often and readily accessible for regular use. While still used regularly, the warm key is less frequently accessed. On the other hand, the cold key is meant to be kept offline and used less often, making it less susceptible to potential attacks.

The `update` transaction allows the validator to update its keys in case they are compromised. However, the cold key is immutable, and, by extension, so is the validator’s address.
