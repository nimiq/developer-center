# MnemonicUtils

> @nimiq/core / MnemonicUtils

[@nimiq/core](../globals) / MnemonicUtils

# Class: MnemonicUtils

Defined in: @nimiq/core/lib/index.d.ts:252

## Constructors

### Constructor

> **new MnemonicUtils**(): `MnemonicUtils`

#### Returns

`MnemonicUtils`

## Properties

### DEFAULT_WORDLIST

> `static` **DEFAULT_WORDLIST**: `string`<span>
> 
> 
> 
> </span>

Defined in: @nimiq/core/lib/index.d.ts:260

The default English wordlist.

---

### ENGLISH_WORDLIST

> `static` **ENGLISH_WORDLIST**: `string`<span>
> 
> 
> 
> </span>

Defined in: @nimiq/core/lib/index.d.ts:256

The English wordlist.

## Methods

### entropyToMnemonic()

> `static` **entropyToMnemonic**(`entropy`, `wordlist?`): `string`<span>
> 
> 
> 
> </span>

Defined in: @nimiq/core/lib/index.d.ts:264

Converts an Entropy to a mnemonic.

#### Parameters

##### entropy

`string` | `ArrayBuffer` | `Uint8Array`<`ArrayBufferLike`> | [`Entropy`](Entropy)

##### wordlist?

`string`<span>



</span>



#### Returns

`string`<span>



</span>



---

### getMnemonicType()

> `static` **getMnemonicType**(`mnemonic`, `wordlist?`): [`MnemonicType`](../@nimiq/namespaces/MnemonicUtils/enumerations/MnemonicType)

Defined in: @nimiq/core/lib/index.d.ts:295

Gets the type of a mnemonic.

Return values:

- `0 = MnemonicType.LEGACY`: the mnemonic is for a legacy Nimiq wallet.
- `1 = MnemonicType.BIP39`: the mnemonic is for a BIP39 wallet.
- `-1 = MnemonicType.UNKNOWN`: the mnemonic can be for both.

Throws if the menmonic is invalid.

#### Parameters

##### mnemonic

`string` | `string`<span>



</span>



##### wordlist?

`string`<span>



</span>



#### Returns

[`MnemonicType`](../@nimiq/namespaces/MnemonicUtils/enumerations/MnemonicType)

---

### isCollidingChecksum()

> `static` **isCollidingChecksum**(`entropy`): `boolean`

Defined in: @nimiq/core/lib/index.d.ts:284

Tests if a mnemonic can be both for a legacy Nimiq wallet and a BIP39 wallet.

#### Parameters

##### entropy

[`Entropy`](Entropy)

#### Returns

`boolean`

---

### mnemonicToEntropy()

> `static` **mnemonicToEntropy**(`mnemonic`, `wordlist?`): [`Entropy`](Entropy)

Defined in: @nimiq/core/lib/index.d.ts:268

Converts a mnemonic to an Entropy.

#### Parameters

##### mnemonic

`string` | `string`<span>



</span>



##### wordlist?

`string`<span>



</span>



#### Returns

[`Entropy`](Entropy)

---

### mnemonicToExtendedPrivateKey()

> `static` **mnemonicToExtendedPrivateKey**(`mnemonic`, `password?`): [`ExtendedPrivateKey`](ExtendedPrivateKey)

Defined in: @nimiq/core/lib/index.d.ts:280

Converts a mnemonic to an extended private key.

Optionally takes a password to use for the seed derivation.

#### Parameters

##### mnemonic

`string` | `string`<span>



</span>



##### password?

`string`

#### Returns

[`ExtendedPrivateKey`](ExtendedPrivateKey)

---

### mnemonicToSeed()

> `static` **mnemonicToSeed**(`mnemonic`, `password?`): [`SerialBuffer`](SerialBuffer)

Defined in: @nimiq/core/lib/index.d.ts:274

Converts a mnemonic to a seed.

Optionally takes a password to use for the seed derivation.

#### Parameters

##### mnemonic

`string` | `string`<span>



</span>



##### password?

`string`

#### Returns

[`SerialBuffer`](SerialBuffer)
