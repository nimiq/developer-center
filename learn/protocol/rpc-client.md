# RPC client

## Requisites

- Rust and its package manager Cargo (installation instructions [here](https://www.rust-lang.org/learn/get-started))
- Clone the Albatross source code from [GitHub](https://github.com/nimiq/core-rs-albatross) and follow the [installation instructions](https://github.com/nimiq/core-rs-albatross#installation)

<br/>

# Usage

The usage of the RPC client is exclusive to Nimiq clients. To interact with the blockchain not using the RPC client, you can read the RPC interface documentation here.

<br/>

1. Open a new terminal and move to the repository directory with `cd core-rs-albatross`
2. Run `cargo build` to install and compile all the necessary dependencies to build your Nimiq Client. This might take a while and will use your full CPU
3. Run `cargo run --bin nimiq-client -- -c ".nimiq/client.toml”` to run your client and get consensus. You will be able to interact with Nimiq’s blockchain in a second terminal.
4. Open a second terminal, move to `cd core-rs-albatross`, and then move to `cd target/debug`. All the requests can be made in this terminal.
5. Run `./nimiq-rpc` to fetch a list of all available commands
6. For a detailed description of a command usage, add the desired command followed by `--help`

<br/>

> 👉 Commands may require additional arguments and/or allow further options as input. Commands with available options work without the option added; however, commands with arguments return an error if the argument is not added.

<br/>

Listed below are the commands grouped by subject and a few examples of the usage of the RPC client.

<!-- TODO RPC-policy.md does not exists -->
<!-- [Policy](RPC-policy.md) -->

<br/>

# Examples of using RPC

## 1. Get the current block number

```json
xxx@xxx:~/core-rs/core-rs-albatross/target/debug$ ./nimiq-rpc block-number

/// response
RPCData {
    data: 27446,
    metadata: (),
}
```

To get further data on the current block, run the command `block`

## 2. Signing a message using a basic account

To sign a message, the client must create or import an existing account, unlock the account and only then, sign the message.

```json
///create an account
xx@xx:~/core-rs/core-rs-albatross/target/debug$ ./nimiq-rpc new

///response
RPCData {
    data: ReturnAccount {
        address: Address(
            "cf689d7524f62d8ce4d76ff7ba60d4be05aec035",
        ),
        public_key: cbdf58e66e41989e51dadc794638823f9d69c943c551e3a51d7e62d1ab472509,
        private_key: PrivateKey,
    },
    metadata: (),
}
```

```json
///unlock the account
xx@xx:~/core-rs/core-rs-albatross/target/debug$ ./nimiq-rpc unlock "cf689d7524f62d8ce4d76ff7ba60d4be05aec035"

///response
RPCData {
    data: true,
    metadata: (),
}
```

```json
///sign a message
xx@xx:~/core-rs/core-rs-albatross/target/debug$ ./nimiq-rpc sign --message "test" --address "cf689d7524f62d8ce4d76ff7ba60d4be05aec035"

///response
RPCData {
    data: ReturnSignature {
        public_key: cbdf58e66e41989e51dadc794638823f9d69c943c551e3a51d7e62d1ab472509,
        signature: Signature(
            Signature {
                R_bytes: "639eb1c317fab2e34e664d3ab953b37445853fe722f6935df87747926cb8d252",
                s_bytes: "c8e917c2f7793c6fa6ad12a59f8ef5970b4aea15825c77a81d039b497757cc03",
            },
        ),
    },
    metadata: (),
}
```

## 3. Follow log events and send a staking transaction

**Validator:**

`validator_address “NQ20 TSB0 DFSM UH9C 15GQ GAGJ TTE4 D3MA 859E”`

`reward_address “NQ46 U66M JNLD 0DJ7 0E9P Q7XR V9KV H976 813A”`

**Account:**

`address = “NQ40 GCAA U3UX 8BKD GUN0 PG3T 17HA 4X5H TXVE”`

`balance = 1000000000000 NIM`

### 1. Follow log events from the validator above

The client wants to follow the following events: `transfer`, `payout-reward`, and `stake`, using the following command:

```json
xx@xx:~/core-rs/core-rs-albatross/target/debug$ ./nimiq-rpc follow-logs-of-addresses-and-types --log-types transfer --log-types payout-reward --log-types stake --addresses "NQ20 TSB0 DFSM UH9C 15GQ GAGJ TTE4 D3MA 859E" --addresses "NQ46 U66M JNLD 0DJ7 0E9P Q7XR V9KV H976 813A"
```

This command will subscribe the client to the events regarding transfers, payout rewards, and stakes to the validator with the provided address. The RPC will output a stream of continuous data, as shown in step 5, showing the data related to the events subscribed.

### 2. Send a staking transaction

```json
xx@xx:~/core-rs/core-rs-albatross/target/debug$ ./nimiq-rpc stake --sender-wallet "NQ40 GCAA U3UX 8BKD GUN0 PG3T 17HA 4X5H TXVE" --staker-address "NQ20 TSB0 DFSM UH9C 15GQ GAGJ TTE4 D3MA 859E" --value 1000
///response
Error: JSON-RPC protocol error: The server responded with an error: JSON-RPC error: code=-32603: Internal error
```

RPC returns an error as to send the staking transaction, the sender wallet must be unlocked.

### 3. Import and unlock the sender's wallet

Due to the above error, the client needs to import the account, unlock it, and can also verify if it was successfully unlocked.

```json
///import the account
xx@xx:~/core-rs/core-rs-albatross/target/debug$ ./nimiq-rpc import "1ef7aad365c195462ed04c275d47189d5362bbfe36b5e93ce7ba2f3add5f439b"
///response
RPCData {
    data: Address(
        "8314ae0f9e42e6d872c0bc07b09e2a278b1dfbae",
    ),
    metadata: (),
}
```

```json
///unlock the account
xx@xx:~/core-rs/core-rs-albatross/target/debug$ ./nimiq-rpc unlock "NQ40 GCAA U3UX 8BKD GUN0 PG3T 17HA 4X5H TXVE"
///response
RPCData {
    data: true,
    metadata: (),
}
```

```json
///verify if the account was successfully unlocked
xx@xx:~/core-rs/core-rs-albatross/target/debug$ ./nimiq-rpc is-unlocked "NQ40 GCAA U3UX 8BKD GUN0 PG3T 17HA 4X5H TXVE"
///response
RPCData {
    data: true,
    metadata: (),
}
```

### 4. Sending the staking transaction

As the sender’s wallet was unlocked, the client can successfully submit the staking transaction.

```json
xx@xx:~/core-rs/core-rs-albatross/target/debug$ ./nimiq-rpc
stake --sender-wallet "NQ40 GCAA U3UX 8BKD GUN0 PG3T 17HA 4X5H TXVE" --staker-address "NQ20 TSB0 DFSM UH9C 15GQ GAGJ TTE4 D3MA 859E" --value 1000
///response
RPCData {
    data: 16ddab2f92f0a0b11f67729cedd1931cb95b267fae5d044302627efe7d5e19a1,
    metadata: (),
}
```

### 5. Follow the stake event corresponding to the sent staking transaction

```json
xx@xx:~/core-rs/core-rs-albatross/target/debug$ ./nimiq-rpc follow-logs-of-addresses-and-types --log-types transfer --log-types payout-reward --log-types stake --addresses "NQ20 TSB0 DFSM UH9C 15GQ GAGJ TTE4 D3MA 859E" --addresses "NQ46 U66M JNLD 0DJ7 0E9P Q7XR V9KV H976 813A"
///response
RPCData {
    data: AppliedBlock {
        inherent_logs: [],
        timestamp: 1669402686368,
        tx_logs: [
            TransactionLog {
                tx_hash: f1142331cfa607713874462721fac0fd70b8e9f367064da8c23a213ba9adf705,
                logs: [
                    Stake {
                        staker_address: Address(
                            "de9606bf55e452c0961882a12dedc468eaa4152e",
                        ),
                        validator_address: None,
                        value: Coin(
                            100000000,
                        ),
                    },
                ],
            },
        ],
    },
    metadata: BlockchainState {
        block_number: 4144,
        block_hash: 4d3c15b7178a644a79be5bb4d8dee51d7ef7c56037bd043e526665b9d32ee8ac,
    },
}
RPCData {
    data: AppliedBlock {
        inherent_logs: [
            PayoutReward {
                to: Address(
                    "e18d595a8d0364703937c1fd9ea67d8a4e64046a",
                ),
                value: Coin(
                    6672863,
                ),
            },
        ],
        timestamp: 1669402744770,
        tx_logs: [],
    },
    metadata: BlockchainState {
        block_number: 4200,
        block_hash: 58172e686db7891815b1a7c5259093182cd6f035b18bb499fd889465f0c2444e,
    },
}
```
