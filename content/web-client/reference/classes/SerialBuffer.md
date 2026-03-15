[@nimiq/core](../globals.md) / SerialBuffer

# Class: SerialBuffer

Defined in: @nimiq/core/lib/index.d.ts:7

## Extends

- `Uint8Array`

## Indexable

\[`index`: `number`\]: `number`

## Constructors

### Constructor

> **new SerialBuffer**(`length`): `SerialBuffer`

Defined in: @nimiq/core/lib/index.d.ts:12

#### Parameters

##### length

`number`

#### Returns

`SerialBuffer`

#### Overrides

`Uint8Array.constructor`

### Constructor

> **new SerialBuffer**(`array`): `SerialBuffer`

Defined in: @nimiq/core/lib/index.d.ts:13

#### Parameters

##### array

`ArrayBufferLike` | `ArrayLike`\<`number`\>

#### Returns

`SerialBuffer`

#### Overrides

`Uint8Array.constructor`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `"Uint8Array"`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:284

#### Inherited from

`Uint8Array.[toStringTag]`

***

### buffer

> `readonly` **buffer**: `ArrayBuffer`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2174

The ArrayBuffer instance referenced by the array.

#### Inherited from

`Uint8Array.buffer`

***

### byteLength

> `readonly` **byteLength**: `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2179

The length in bytes of the array.

#### Inherited from

`Uint8Array.byteLength`

***

### byteOffset

> `readonly` **byteOffset**: `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2184

The offset in bytes of the array.

#### Inherited from

`Uint8Array.byteOffset`

***

### BYTES\_PER\_ELEMENT

> `readonly` **BYTES\_PER\_ELEMENT**: `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2169

The size in bytes of each element in the array.

#### Inherited from

`Uint8Array.BYTES_PER_ELEMENT`

***

### length

> `readonly` **length**: `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2283

The length of the array.

#### Inherited from

`Uint8Array.length`

***

### BYTES\_PER\_ELEMENT

> `readonly` `static` **BYTES\_PER\_ELEMENT**: `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2419

The size in bytes of each element in the array.

#### Inherited from

`Uint8Array.BYTES_PER_ELEMENT`

***

### EMPTY

> `static` **EMPTY**: `SerialBuffer`

Defined in: @nimiq/core/lib/index.d.ts:11

## Accessors

### readPos

#### Get Signature

> **get** **readPos**(): `number`

Defined in: @nimiq/core/lib/index.d.ts:15

##### Returns

`number`

#### Set Signature

> **set** **readPos**(`value`): `void`

Defined in: @nimiq/core/lib/index.d.ts:16

##### Parameters

###### value

`number`

##### Returns

`void`

***

### writePos

#### Get Signature

> **get** **writePos**(): `number`

Defined in: @nimiq/core/lib/index.d.ts:17

##### Returns

`number`

#### Set Signature

> **set** **writePos**(`value`): `void`

Defined in: @nimiq/core/lib/index.d.ts:18

##### Parameters

###### value

`number`

##### Returns

`void`

## Methods

### \[iterator\]()

> **\[iterator\]**(): `ArrayIterator`\<`number`\>

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:313

#### Returns

`ArrayIterator`\<`number`\>

#### Inherited from

`Uint8Array.[iterator]`

***

### copyWithin()

> **copyWithin**(`target`, `start`, `end?`): `this`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2195

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

##### target

`number`

If target is negative, it is treated as length+target where length is the
length of the array.

##### start

`number`

If start is negative, it is treated as length+start. If end is negative, it
is treated as length+end.

##### end?

`number`

If not specified, length of the this object is used as its default value.

#### Returns

`this`

#### Inherited from

`Uint8Array.copyWithin`

***

### entries()

> **entries**(): `ArrayIterator`\<\[`number`, `number`\]\>

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:318

Returns an array of key, value pairs for every entry in the array

#### Returns

`ArrayIterator`\<\[`number`, `number`\]\>

#### Inherited from

`Uint8Array.entries`

***

### every()

> **every**(`predicate`, `thisArg?`): `boolean`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2205

Determines whether all the members of an array satisfy the specified test.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The every method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value false, or until the end of the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

`Uint8Array.every`

***

### fill()

> **fill**(`value`, `start?`, `end?`): `this`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2215

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

##### value

`number`

value to fill array section with

##### start?

`number`

index to start filling the array at. If start is negative, it is treated as
length+start where length is the length of the array.

##### end?

`number`

index to stop filling the array at. If end is negative, it is treated as
length+end.

#### Returns

`this`

#### Inherited from

`Uint8Array.fill`

***

### filter()

> **filter**(`predicate`, `thisArg?`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2224

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `any`

A function that accepts up to three arguments. The filter method calls
the predicate function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`Uint8Array`\<`ArrayBuffer`\>

#### Inherited from

`Uint8Array.filter`

***

### find()

> **find**(`predicate`, `thisArg?`): `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2235

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Parameters

##### predicate

(`value`, `index`, `obj`) => `boolean`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found, find
immediately returns that element value. Otherwise, find returns undefined.

##### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`Uint8Array.find`

***

### findIndex()

> **findIndex**(`predicate`, `thisArg?`): `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2246

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

##### predicate

(`value`, `index`, `obj`) => `boolean`

find calls predicate once for each element of the array, in ascending
order, until it finds one where predicate returns true. If such an element is found,
findIndex immediately returns that element index. Otherwise, findIndex returns -1.

##### thisArg?

`any`

If provided, it will be used as the this value for each invocation of
predicate. If it is not provided, undefined is used instead.

#### Returns

`number`

#### Inherited from

`Uint8Array.findIndex`

***

### forEach()

> **forEach**(`callbackfn`, `thisArg?`): `void`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2255

Performs the specified action for each element in an array.

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `void`

A function that accepts up to three arguments. forEach calls the
callbackfn function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`void`

#### Inherited from

`Uint8Array.forEach`

***

### includes()

> **includes**(`searchElement`, `fromIndex?`): `boolean`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2016.array.include.d.ts:52

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

##### searchElement

`number`

The element to search for.

##### fromIndex?

`number`

The position in this array at which to begin searching for searchElement.

#### Returns

`boolean`

#### Inherited from

`Uint8Array.includes`

***

### indexOf()

> **indexOf**(`searchElement`, `fromIndex?`): `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2263

Returns the index of the first occurrence of a value in an array.

#### Parameters

##### searchElement

`number`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin the search. If fromIndex is omitted, the
search starts at index 0.

#### Returns

`number`

#### Inherited from

`Uint8Array.indexOf`

***

### join()

> **join**(`separator?`): `string`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2270

Adds all the elements of an array separated by the specified separator string.

#### Parameters

##### separator?

`string`

A string used to separate one element of an array from the next in the
resulting String. If omitted, the array elements are separated with a comma.

#### Returns

`string`

#### Inherited from

`Uint8Array.join`

***

### keys()

> **keys**(): `ArrayIterator`\<`number`\>

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:323

Returns an list of keys in the array

#### Returns

`ArrayIterator`\<`number`\>

#### Inherited from

`Uint8Array.keys`

***

### lastIndexOf()

> **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2278

Returns the index of the last occurrence of a value in an array.

#### Parameters

##### searchElement

`number`

The value to locate in the array.

##### fromIndex?

`number`

The array index at which to begin the search. If fromIndex is omitted, the
search starts at index 0.

#### Returns

`number`

#### Inherited from

`Uint8Array.lastIndexOf`

***

### map()

> **map**(`callbackfn`, `thisArg?`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2293

Calls a defined callback function on each element of an array, and returns an array that
contains the results.

#### Parameters

##### callbackfn

(`value`, `index`, `array`) => `number`

A function that accepts up to three arguments. The map method calls the
callbackfn function one time for each element in the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the callbackfn function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`Uint8Array`\<`ArrayBuffer`\>

#### Inherited from

`Uint8Array.map`

***

### read()

> **read**(`length`): `Uint8Array`

Defined in: @nimiq/core/lib/index.d.ts:23

#### Parameters

##### length

`number`

#### Returns

`Uint8Array`

***

### readFloat64()

> **readFloat64**(): `number`

Defined in: @nimiq/core/lib/index.d.ts:36

#### Returns

`number`

***

### readPaddedString()

> **readPaddedString**(`length`): `string`

Defined in: @nimiq/core/lib/index.d.ts:40

#### Parameters

##### length

`number`

#### Returns

`string`

***

### readString()

> **readString**(`length`): `string`

Defined in: @nimiq/core/lib/index.d.ts:38

#### Parameters

##### length

`number`

#### Returns

`string`

***

### readUint16()

> **readUint16**(): `number`

Defined in: @nimiq/core/lib/index.d.ts:27

#### Returns

`number`

***

### readUint32()

> **readUint32**(): `number`

Defined in: @nimiq/core/lib/index.d.ts:29

#### Returns

`number`

***

### readUint64()

> **readUint64**(): `number`

Defined in: @nimiq/core/lib/index.d.ts:31

#### Returns

`number`

***

### readUint8()

> **readUint8**(): `number`

Defined in: @nimiq/core/lib/index.d.ts:25

#### Returns

`number`

***

### readVarLengthString()

> **readVarLengthString**(): `string`

Defined in: @nimiq/core/lib/index.d.ts:42

#### Returns

`string`

***

### readVarUint()

> **readVarUint**(): `number`

Defined in: @nimiq/core/lib/index.d.ts:33

#### Returns

`number`

***

### reduce()

#### Call Signature

> **reduce**(`callbackfn`): `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2305

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `number`

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

##### Returns

`number`

##### Inherited from

`Uint8Array.reduce`

#### Call Signature

> **reduce**(`callbackfn`, `initialValue`): `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2306

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `number`

###### initialValue

`number`

##### Returns

`number`

##### Inherited from

`Uint8Array.reduce`

#### Call Signature

> **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2318

Calls the specified callback function for all the elements in an array. The return value of
the callback function is the accumulated result, and is provided as an argument in the next
call to the callback function.

##### Type Parameters

###### U

`U`

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduce method calls the
callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

##### Returns

`U`

##### Inherited from

`Uint8Array.reduce`

***

### reduceRight()

#### Call Signature

> **reduceRight**(`callbackfn`): `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2330

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `number`

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

##### Returns

`number`

##### Inherited from

`Uint8Array.reduceRight`

#### Call Signature

> **reduceRight**(`callbackfn`, `initialValue`): `number`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2331

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `number`

###### initialValue

`number`

##### Returns

`number`

##### Inherited from

`Uint8Array.reduceRight`

#### Call Signature

> **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2343

Calls the specified callback function for all the elements in an array, in descending order.
The return value of the callback function is the accumulated result, and is provided as an
argument in the next call to the callback function.

##### Type Parameters

###### U

`U`

##### Parameters

###### callbackfn

(`previousValue`, `currentValue`, `currentIndex`, `array`) => `U`

A function that accepts up to four arguments. The reduceRight method calls
the callbackfn function one time for each element in the array.

###### initialValue

`U`

If initialValue is specified, it is used as the initial value to start
the accumulation. The first call to the callbackfn function provides this value as an argument
instead of an array value.

##### Returns

`U`

##### Inherited from

`Uint8Array.reduceRight`

***

### reset()

> **reset**(): `void`

Defined in: @nimiq/core/lib/index.d.ts:22

Resets the read and write position of the buffer to zero.

#### Returns

`void`

***

### reverse()

> **reverse**(): `this`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2348

Reverses the elements in an Array.

#### Returns

`this`

#### Inherited from

`Uint8Array.reverse`

***

### set()

> **set**(`array`, `offset?`): `void`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2355

Sets a value or an array of values.

#### Parameters

##### array

`ArrayLike`\<`number`\>

A typed or untyped array of values to set.

##### offset?

`number`

The index in the current array at which the values are to be written.

#### Returns

`void`

#### Inherited from

`Uint8Array.set`

***

### slice()

> **slice**(`start?`, `end?`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2362

Returns a section of an array.

#### Parameters

##### start?

`number`

The beginning of the specified portion of the array.

##### end?

`number`

The end of the specified portion of the array. This is exclusive of the element at the index 'end'.

#### Returns

`Uint8Array`\<`ArrayBuffer`\>

#### Inherited from

`Uint8Array.slice`

***

### some()

> **some**(`predicate`, `thisArg?`): `boolean`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2372

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

##### predicate

(`value`, `index`, `array`) => `unknown`

A function that accepts up to three arguments. The some method calls
the predicate function for each element in the array until the predicate returns a value
which is coercible to the Boolean value true, or until the end of the array.

##### thisArg?

`any`

An object to which the this keyword can refer in the predicate function.
If thisArg is omitted, undefined is used as the this value.

#### Returns

`boolean`

#### Inherited from

`Uint8Array.some`

***

### sort()

> **sort**(`compareFn?`): `this`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2383

Sorts an array.

#### Parameters

##### compareFn?

(`a`, `b`) => `number`

Function used to determine the order of the elements. It is expected to return
a negative value if first argument is less than second argument, zero if they're equal and a positive
value otherwise. If omitted, the elements are sorted in ascending order.
```ts
[11,2,22,1].sort((a, b) => a - b)
```

#### Returns

`this`

#### Inherited from

`Uint8Array.sort`

***

### subarray()

> **subarray**(`start?`, `end?`): `Uint8Array`

Defined in: @nimiq/core/lib/index.d.ts:14

Gets a new Uint8Array view of the ArrayBuffer store for this array, referencing the elements
at begin, inclusive, up to end, exclusive.

#### Parameters

##### start?

`number`

##### end?

`number`

The index of the end of the array.

#### Returns

`Uint8Array`

#### Overrides

`Uint8Array.subarray`

***

### toLocaleString()

#### Call Signature

> **toLocaleString**(): `string`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2396

Converts a number to a string by using the current locale.

##### Returns

`string`

##### Inherited from

`Uint8Array.toLocaleString`

#### Call Signature

> **toLocaleString**(`locales`, `options?`): `string`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.core.d.ts:568

##### Parameters

###### locales

`string` | `string`[]

###### options?

`NumberFormatOptions`

##### Returns

`string`

##### Inherited from

`Uint8Array.toLocaleString`

***

### toString()

> **toString**(): `string`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2401

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

`Uint8Array.toString`

***

### valueOf()

> **valueOf**(): `this`

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2404

Returns the primitive value of the specified object.

#### Returns

`this`

#### Inherited from

`Uint8Array.valueOf`

***

### values()

> **values**(): `ArrayIterator`\<`number`\>

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:328

Returns an list of values in the array

#### Returns

`ArrayIterator`\<`number`\>

#### Inherited from

`Uint8Array.values`

***

### write()

> **write**(`array`): `void`

Defined in: @nimiq/core/lib/index.d.ts:24

#### Parameters

##### array

`Uint8Array`

#### Returns

`void`

***

### writeFloat64()

> **writeFloat64**(`value`): `void`

Defined in: @nimiq/core/lib/index.d.ts:37

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writePaddedString()

> **writePaddedString**(`value`, `length`): `void`

Defined in: @nimiq/core/lib/index.d.ts:41

#### Parameters

##### value

`string`

##### length

`number`

#### Returns

`void`

***

### writeString()

> **writeString**(`value`, `length`): `void`

Defined in: @nimiq/core/lib/index.d.ts:39

#### Parameters

##### value

`string`

##### length

`number`

#### Returns

`void`

***

### writeUint16()

> **writeUint16**(`value`): `void`

Defined in: @nimiq/core/lib/index.d.ts:28

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeUint32()

> **writeUint32**(`value`): `void`

Defined in: @nimiq/core/lib/index.d.ts:30

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeUint64()

> **writeUint64**(`value`): `void`

Defined in: @nimiq/core/lib/index.d.ts:32

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeUint8()

> **writeUint8**(`value`): `void`

Defined in: @nimiq/core/lib/index.d.ts:26

#### Parameters

##### value

`number`

#### Returns

`void`

***

### writeVarLengthString()

> **writeVarLengthString**(`value`): `void`

Defined in: @nimiq/core/lib/index.d.ts:43

#### Parameters

##### value

`string`

#### Returns

`void`

***

### writeVarUint()

> **writeVarUint**(`value`): `void`

Defined in: @nimiq/core/lib/index.d.ts:34

#### Parameters

##### value

`number`

#### Returns

`void`

***

### from()

#### Call Signature

> `static` **from**(`arrayLike`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2431

Creates an array from an array-like or iterable object.

##### Parameters

###### arrayLike

`ArrayLike`\<`number`\>

An array-like object to convert to an array.

##### Returns

`Uint8Array`\<`ArrayBuffer`\>

##### Inherited from

`Uint8Array.from`

#### Call Signature

> `static` **from**\<`T`\>(`arrayLike`, `mapfn`, `thisArg?`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2439

Creates an array from an array-like or iterable object.

##### Type Parameters

###### T

`T`

##### Parameters

###### arrayLike

`ArrayLike`\<`T`\>

An array-like object to convert to an array.

###### mapfn

(`v`, `k`) => `number`

A mapping function to call on every element of the array.

###### thisArg?

`any`

Value of 'this' used to invoke the mapfn.

##### Returns

`Uint8Array`\<`ArrayBuffer`\>

##### Inherited from

`Uint8Array.from`

#### Call Signature

> `static` **from**(`elements`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:338

Creates an array from an array-like or iterable object.

##### Parameters

###### elements

`Iterable`\<`number`\>

An iterable object to convert to an array.

##### Returns

`Uint8Array`\<`ArrayBuffer`\>

##### Inherited from

`Uint8Array.from`

#### Call Signature

> `static` **from**\<`T`\>(`elements`, `mapfn?`, `thisArg?`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es2015.iterable.d.ts:346

Creates an array from an array-like or iterable object.

##### Type Parameters

###### T

`T`

##### Parameters

###### elements

`Iterable`\<`T`\>

An iterable object to convert to an array.

###### mapfn?

(`v`, `k`) => `number`

A mapping function to call on every element of the array.

###### thisArg?

`any`

Value of 'this' used to invoke the mapfn.

##### Returns

`Uint8Array`\<`ArrayBuffer`\>

##### Inherited from

`Uint8Array.from`

***

### of()

> `static` **of**(...`items`): `Uint8Array`\<`ArrayBuffer`\>

Defined in: .pnpm/typescript@5.9.3/node\_modules/typescript/lib/lib.es5.d.ts:2425

Returns a new array from a set of elements.

#### Parameters

##### items

...`number`[]

A set of elements to include in the new array object.

#### Returns

`Uint8Array`\<`ArrayBuffer`\>

#### Inherited from

`Uint8Array.of`

***

### varLengthStringSize()

> `static` **varLengthStringSize**(`value`): `number`

Defined in: @nimiq/core/lib/index.d.ts:44

#### Parameters

##### value

`string`

#### Returns

`number`

***

### varUintSize()

> `static` **varUintSize**(`value`): `number`

Defined in: @nimiq/core/lib/index.d.ts:35

#### Parameters

##### value

`number`

#### Returns

`number`
