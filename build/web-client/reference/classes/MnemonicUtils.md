[@nimiq/core](../globals.md) / MnemonicUtils

# Class: MnemonicUtils

Defined in: @nimiq/core/lib/index.d.ts:252

## Constructors

### Constructor

> **new MnemonicUtils**(): `MnemonicUtils`

#### Returns

`MnemonicUtils`

## Properties

### DEFAULT\_WORDLIST

> `static` **DEFAULT\_WORDLIST**: `string`[]

Defined in: @nimiq/core/lib/index.d.ts:260

The default English wordlist.

***

### ENGLISH\_WORDLIST

> `static` **ENGLISH\_WORDLIST**: `string`[]

Defined in: @nimiq/core/lib/index.d.ts:256

The English wordlist.

## Methods

### entropyToMnemonic()

> `static` **entropyToMnemonic**(`entropy`, `wordlist?`): `string`[]

Defined in: @nimiq/core/lib/index.d.ts:264

Converts an Entropy to a mnemonic.

#### Parameters

##### entropy

`string` | `ArrayBuffer` | `Uint8Array` | [`Entropy`](Entropy.md)

##### wordlist?

`string`[]

#### Returns

`string`[]

***

### getMnemonicType()

> `static` **getMnemonicType**(`mnemonic`, `wordlist?`): [`MnemonicType`](../@nimiq/namespaces/MnemonicUtils/enumerations/MnemonicType.md)

Defined in: @nimiq/core/lib/index.d.ts:295

Gets the type of a mnemonic.

Return values:
- `0 = MnemonicType.LEGACY`: the mnemonic is for a legacy Nimiq wallet.
- `1 = MnemonicType.BIP39`: the mnemonic is for a BIP39 wallet.
- `-1 = MnemonicType.UNKNOWN`: the mnemonic can be for both.

Throws if the menmonic is invalid.

#### Parameters

##### mnemonic

`string` | `string`[]

##### wordlist?

`string`[]

#### Returns

[`MnemonicType`](../@nimiq/namespaces/MnemonicUtils/enumerations/MnemonicType.md)

***

### isCollidingChecksum()

> `static` **isCollidingChecksum**(`entropy`): `boolean`

Defined in: @nimiq/core/lib/index.d.ts:284

Tests if a mnemonic can be both for a legacy Nimiq wallet and a BIP39 wallet.

#### Parameters

##### entropy

[`Entropy`](Entropy.md)

#### Returns

`boolean`

***

### mnemonicToEntropy()

> `static` **mnemonicToEntropy**(`mnemonic`, `wordlist?`): [`Entropy`](Entropy.md)

Defined in: @nimiq/core/lib/index.d.ts:268

Converts a mnemonic to an Entropy.

#### Parameters

##### mnemonic

`string` | `string`[]

##### wordlist?

`string`[]

#### Returns

[`Entropy`](Entropy.md)

***

### mnemonicToExtendedPrivateKey()

> `static` **mnemonicToExtendedPrivateKey**(`mnemonic`, `password?`): [`ExtendedPrivateKey`](ExtendedPrivateKey.md)

Defined in: @nimiq/core/lib/index.d.ts:280

Converts a mnemonic to an extended private key.

Optionally takes a password to use for the seed derivation.

#### Parameters

##### mnemonic

`string` | `string`[]

##### password?

`string`

#### Returns

[`ExtendedPrivateKey`](ExtendedPrivateKey.md)

***

### mnemonicToSeed()

> `static` **mnemonicToSeed**(`mnemonic`, `password?`): [`SerialBuffer`](SerialBuffer.md)

Defined in: @nimiq/core/lib/index.d.ts:274

Converts a mnemonic to a seed.

Optionally takes a password to use for the seed derivation.

#### Parameters

##### mnemonic

`string` | `string`[]

##### password?

`string`

#### Returns

[`SerialBuffer`](SerialBuffer.md)
