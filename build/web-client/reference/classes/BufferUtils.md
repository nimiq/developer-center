[@nimiq/core](../globals.md) / BufferUtils

# Class: BufferUtils

Defined in: @nimiq/core/lib/index.d.ts:48

## Constructors

### Constructor

> **new BufferUtils**(): `BufferUtils`

#### Returns

`BufferUtils`

## Properties

### \_BASE64\_LOOKUP

> `static` **\_BASE64\_LOOKUP**: `string`[]

Defined in: @nimiq/core/lib/index.d.ts:56

***

### BASE32\_ALPHABET

> `static` **BASE32\_ALPHABET**: `object`

Defined in: @nimiq/core/lib/index.d.ts:50

#### NIMIQ

> **NIMIQ**: `string`

#### RFC4648

> **RFC4648**: `string`

#### RFC4648\_HEX

> **RFC4648\_HEX**: `string`

***

### BASE64\_ALPHABET

> `static` **BASE64\_ALPHABET**: `string`

Defined in: @nimiq/core/lib/index.d.ts:49

***

### HEX\_ALPHABET

> `static` **HEX\_ALPHABET**: `string`

Defined in: @nimiq/core/lib/index.d.ts:55

## Methods

### \_base64encodeChunk()

> `static` **\_base64encodeChunk**(`u8`, `start`, `end`): `string`

Defined in: @nimiq/core/lib/index.d.ts:62

#### Parameters

##### u8

`Uint8Array`

##### start

`number`

##### end

`number`

#### Returns

`string`

***

### \_base64fromByteArray()

> `static` **\_base64fromByteArray**(`u8`): `string`

Defined in: @nimiq/core/lib/index.d.ts:63

#### Parameters

##### u8

`Uint8Array`

#### Returns

`string`

***

### \_codePointTextDecoder()

> `static` **\_codePointTextDecoder**(`buffer`): `string`

Defined in: @nimiq/core/lib/index.d.ts:60

#### Parameters

##### buffer

`Uint8Array`

#### Returns

`string`

***

### \_tripletToBase64()

> `static` **\_tripletToBase64**(`num`): `string`

Defined in: @nimiq/core/lib/index.d.ts:61

#### Parameters

##### num

`number`

#### Returns

`string`

***

### compare()

> `static` **compare**(`a`, `b`): `number`

Defined in: @nimiq/core/lib/index.d.ts:82

Returns -1 if a is smaller than b, 1 if a is larger than b, 0 if a equals b.
Shorter arrays are always considered smaller than longer ones.

#### Parameters

##### a

`TypedArray`

##### b

`TypedArray`

#### Returns

`number`

***

### equals()

> `static` **equals**(`a`, `b`): `boolean`

Defined in: @nimiq/core/lib/index.d.ts:77

#### Parameters

##### a

`TypedArray`

##### b

`TypedArray`

#### Returns

`boolean`

***

### fromAny()

> `static` **fromAny**(`o`, `length?`): [`SerialBuffer`](SerialBuffer.md)

Defined in: @nimiq/core/lib/index.d.ts:76

#### Parameters

##### o

`string` | `Uint8Array`

##### length?

`number`

#### Returns

[`SerialBuffer`](SerialBuffer.md)

***

### fromBase32()

> `static` **fromBase32**(`base32`, `alphabet?`): `Uint8Array`

Defined in: @nimiq/core/lib/index.d.ts:69

#### Parameters

##### base32

`string`

##### alphabet?

`string`

#### Returns

`Uint8Array`

***

### fromBase64()

> `static` **fromBase64**(`base64`, `length?`): [`SerialBuffer`](SerialBuffer.md)

Defined in: @nimiq/core/lib/index.d.ts:65

#### Parameters

##### base64

`string`

##### length?

`number`

#### Returns

[`SerialBuffer`](SerialBuffer.md)

***

### fromBase64Url()

> `static` **fromBase64Url**(`base64`, `length?`): [`SerialBuffer`](SerialBuffer.md)

Defined in: @nimiq/core/lib/index.d.ts:67

#### Parameters

##### base64

`string`

##### length?

`number`

#### Returns

[`SerialBuffer`](SerialBuffer.md)

***

### fromHex()

> `static` **fromHex**(`hex`, `length?`): [`SerialBuffer`](SerialBuffer.md)

Defined in: @nimiq/core/lib/index.d.ts:71

#### Parameters

##### hex

`string`

##### length?

`number`

#### Returns

[`SerialBuffer`](SerialBuffer.md)

***

### fromUtf8()

> `static` **fromUtf8**(`str`): `Uint8Array`

Defined in: @nimiq/core/lib/index.d.ts:73

#### Parameters

##### str

`string`

#### Returns

`Uint8Array`

***

### toBase32()

> `static` **toBase32**(`buf`, `alphabet?`): `string`

Defined in: @nimiq/core/lib/index.d.ts:68

#### Parameters

##### buf

`Uint8Array`

##### alphabet?

`string`

#### Returns

`string`

***

### toBase64()

> `static` **toBase64**(`buffer`): `string`

Defined in: @nimiq/core/lib/index.d.ts:64

#### Parameters

##### buffer

`Uint8Array`

#### Returns

`string`

***

### toBase64Url()

> `static` **toBase64Url**(`buffer`): `string`

Defined in: @nimiq/core/lib/index.d.ts:66

#### Parameters

##### buffer

`Uint8Array`

#### Returns

`string`

***

### toHex()

> `static` **toHex**(`buffer`): `string`

Defined in: @nimiq/core/lib/index.d.ts:70

#### Parameters

##### buffer

`Uint8Array`

#### Returns

`string`

***

### toUtf8()

> `static` **toUtf8**(`buf`): `string`

Defined in: @nimiq/core/lib/index.d.ts:75

#### Parameters

##### buf

`TypedArray`

#### Returns

`string`

***

### xor()

> `static` **xor**(`a`, `b`): `Uint8Array`

Defined in: @nimiq/core/lib/index.d.ts:83

#### Parameters

##### a

`Uint8Array`

##### b

`Uint8Array`

#### Returns

`Uint8Array`
