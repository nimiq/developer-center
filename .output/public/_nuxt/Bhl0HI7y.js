const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./xTU4Lixx.js","./CN1p5ccG.js","./entry.DV2Z0fTU.css","./bNaE6FFb.js","./QyzFQwww.js","./BiwnguJD.js","./iik6CYzq.js"])))=>i.map(i=>d[i]);
import { g as Vr } from "./DaWZu8wl.js";
import { f as eo, o as ia, l as ao, a as wa, m as Ve, w as Qa, s as to, h as ro, v as so, t as oo, S as no, r as co, b as io, __tla as __tla_0 } from "./BZ_nUnuB.js";
import { E as nr, D as lo } from "#entry";
import { __tla as __tla_1 } from "./exGce14e.js";
import "./BiwnguJD.js";
import "./iik6CYzq.js";
import "./QyzFQwww.js";
let WA, XA, VA;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })(),
  (() => {
    try {
      return __tla_1;
    } catch {
    }
  })()
]).then(async () => {
  var ba = {
    exports: {}
  }, cr;
  function fo() {
    return cr || (cr = 1, (function(t, e) {
      Object.defineProperty(e, "__esModule", {
        value: true
      });
      const a = [
        "Int8Array",
        "Uint8Array",
        "Uint8ClampedArray",
        "Int16Array",
        "Uint16Array",
        "Int32Array",
        "Uint32Array",
        "Float32Array",
        "Float64Array",
        "BigInt64Array",
        "BigUint64Array"
      ];
      function r(i) {
        return a.includes(i);
      }
      const s = [
        "Function",
        "Generator",
        "AsyncGenerator",
        "GeneratorFunction",
        "AsyncGeneratorFunction",
        "AsyncFunction",
        "Observable",
        "Array",
        "Buffer",
        "Blob",
        "Object",
        "RegExp",
        "Date",
        "Error",
        "Map",
        "Set",
        "WeakMap",
        "WeakSet",
        "ArrayBuffer",
        "SharedArrayBuffer",
        "DataView",
        "Promise",
        "URL",
        "FormData",
        "URLSearchParams",
        "HTMLElement",
        ...a
      ];
      function n(i) {
        return s.includes(i);
      }
      const l = [
        "null",
        "undefined",
        "string",
        "number",
        "bigint",
        "boolean",
        "symbol"
      ];
      function u(i) {
        return l.includes(i);
      }
      function d(i) {
        return (z) => typeof z === i;
      }
      const { toString: m } = Object.prototype, g = (i) => {
        const z = m.call(i).slice(8, -1);
        if (/HTML\w+Element/.test(z) && h.domElement(i)) return "HTMLElement";
        if (n(z)) return z;
      }, _ = (i) => (z) => g(z) === i;
      function h(i) {
        if (i === null) return "null";
        switch (typeof i) {
          case "undefined":
            return "undefined";
          case "string":
            return "string";
          case "number":
            return "number";
          case "boolean":
            return "boolean";
          case "function":
            return "Function";
          case "bigint":
            return "bigint";
          case "symbol":
            return "symbol";
        }
        if (h.observable(i)) return "Observable";
        if (h.array(i)) return "Array";
        if (h.buffer(i)) return "Buffer";
        const z = g(i);
        if (z) return z;
        if (i instanceof String || i instanceof Boolean || i instanceof Number) throw new TypeError("Please don't use object wrappers for primitive types");
        return "Object";
      }
      h.undefined = d("undefined"), h.string = d("string");
      const b = d("number");
      h.number = (i) => b(i) && !h.nan(i), h.bigint = d("bigint"), h.function_ = d("function"), h.null_ = (i) => i === null, h.class_ = (i) => h.function_(i) && i.toString().startsWith("class "), h.boolean = (i) => i === true || i === false, h.symbol = d("symbol"), h.numericString = (i) => h.string(i) && !h.emptyStringOrWhitespace(i) && !Number.isNaN(Number(i)), h.array = (i, z) => Array.isArray(i) ? h.function_(z) ? i.every(z) : true : false, h.buffer = (i) => {
        var z, F, O, X;
        return (X = (O = (F = (z = i) === null || z === void 0 ? void 0 : z.constructor) === null || F === void 0 ? void 0 : F.isBuffer) === null || O === void 0 ? void 0 : O.call(F, i)) !== null && X !== void 0 ? X : false;
      }, h.blob = (i) => _("Blob")(i), h.nullOrUndefined = (i) => h.null_(i) || h.undefined(i), h.object = (i) => !h.null_(i) && (typeof i == "object" || h.function_(i)), h.iterable = (i) => {
        var z;
        return h.function_((z = i) === null || z === void 0 ? void 0 : z[Symbol.iterator]);
      }, h.asyncIterable = (i) => {
        var z;
        return h.function_((z = i) === null || z === void 0 ? void 0 : z[Symbol.asyncIterator]);
      }, h.generator = (i) => {
        var z, F;
        return h.iterable(i) && h.function_((z = i) === null || z === void 0 ? void 0 : z.next) && h.function_((F = i) === null || F === void 0 ? void 0 : F.throw);
      }, h.asyncGenerator = (i) => h.asyncIterable(i) && h.function_(i.next) && h.function_(i.throw), h.nativePromise = (i) => _("Promise")(i);
      const S = (i) => {
        var z, F;
        return h.function_((z = i) === null || z === void 0 ? void 0 : z.then) && h.function_((F = i) === null || F === void 0 ? void 0 : F.catch);
      };
      h.promise = (i) => h.nativePromise(i) || S(i), h.generatorFunction = _("GeneratorFunction"), h.asyncGeneratorFunction = (i) => g(i) === "AsyncGeneratorFunction", h.asyncFunction = (i) => g(i) === "AsyncFunction", h.boundFunction = (i) => h.function_(i) && !i.hasOwnProperty("prototype"), h.regExp = _("RegExp"), h.date = _("Date"), h.error = _("Error"), h.map = (i) => _("Map")(i), h.set = (i) => _("Set")(i), h.weakMap = (i) => _("WeakMap")(i), h.weakSet = (i) => _("WeakSet")(i), h.int8Array = _("Int8Array"), h.uint8Array = _("Uint8Array"), h.uint8ClampedArray = _("Uint8ClampedArray"), h.int16Array = _("Int16Array"), h.uint16Array = _("Uint16Array"), h.int32Array = _("Int32Array"), h.uint32Array = _("Uint32Array"), h.float32Array = _("Float32Array"), h.float64Array = _("Float64Array"), h.bigInt64Array = _("BigInt64Array"), h.bigUint64Array = _("BigUint64Array"), h.arrayBuffer = _("ArrayBuffer"), h.sharedArrayBuffer = _("SharedArrayBuffer"), h.dataView = _("DataView"), h.enumCase = (i, z) => Object.values(z).includes(i), h.directInstanceOf = (i, z) => Object.getPrototypeOf(i) === z.prototype, h.urlInstance = (i) => _("URL")(i), h.urlString = (i) => {
        if (!h.string(i)) return false;
        try {
          return new URL(i), true;
        } catch {
          return false;
        }
      }, h.truthy = (i) => !!i, h.falsy = (i) => !i, h.nan = (i) => Number.isNaN(i), h.primitive = (i) => h.null_(i) || u(typeof i), h.integer = (i) => Number.isInteger(i), h.safeInteger = (i) => Number.isSafeInteger(i), h.plainObject = (i) => {
        if (m.call(i) !== "[object Object]") return false;
        const z = Object.getPrototypeOf(i);
        return z === null || z === Object.getPrototypeOf({});
      }, h.typedArray = (i) => r(g(i));
      const v = (i) => h.safeInteger(i) && i >= 0;
      h.arrayLike = (i) => !h.nullOrUndefined(i) && !h.function_(i) && v(i.length), h.inRange = (i, z) => {
        if (h.number(z)) return i >= Math.min(0, z) && i <= Math.max(z, 0);
        if (h.array(z) && z.length === 2) return i >= Math.min(...z) && i <= Math.max(...z);
        throw new TypeError(`Invalid range: ${JSON.stringify(z)}`);
      };
      const B = 1, C = [
        "innerHTML",
        "ownerDocument",
        "style",
        "attributes",
        "nodeValue"
      ];
      h.domElement = (i) => h.object(i) && i.nodeType === B && h.string(i.nodeName) && !h.plainObject(i) && C.every((z) => z in i), h.observable = (i) => {
        var z, F, O, X;
        return i ? i === ((F = (z = i)[Symbol.observable]) === null || F === void 0 ? void 0 : F.call(z)) || i === ((X = (O = i)["@@observable"]) === null || X === void 0 ? void 0 : X.call(O)) : false;
      }, h.nodeStream = (i) => h.object(i) && h.function_(i.pipe) && !h.observable(i), h.infinite = (i) => i === 1 / 0 || i === -1 / 0;
      const A = (i) => (z) => h.integer(z) && Math.abs(z % 2) === i;
      h.evenInteger = A(0), h.oddInteger = A(1), h.emptyArray = (i) => h.array(i) && i.length === 0, h.nonEmptyArray = (i) => h.array(i) && i.length > 0, h.emptyString = (i) => h.string(i) && i.length === 0;
      const R = (i) => h.string(i) && !/\S/.test(i);
      h.emptyStringOrWhitespace = (i) => h.emptyString(i) || R(i), h.nonEmptyString = (i) => h.string(i) && i.length > 0, h.nonEmptyStringAndNotWhitespace = (i) => h.string(i) && !h.emptyStringOrWhitespace(i), h.emptyObject = (i) => h.object(i) && !h.map(i) && !h.set(i) && Object.keys(i).length === 0, h.nonEmptyObject = (i) => h.object(i) && !h.map(i) && !h.set(i) && Object.keys(i).length > 0, h.emptySet = (i) => h.set(i) && i.size === 0, h.nonEmptySet = (i) => h.set(i) && i.size > 0, h.emptyMap = (i) => h.map(i) && i.size === 0, h.nonEmptyMap = (i) => h.map(i) && i.size > 0, h.propertyKey = (i) => h.any([
        h.string,
        h.number,
        h.symbol
      ], i), h.formData = (i) => _("FormData")(i), h.urlSearchParams = (i) => _("URLSearchParams")(i);
      const N = (i, z, F) => {
        if (!h.function_(z)) throw new TypeError(`Invalid predicate: ${JSON.stringify(z)}`);
        if (F.length === 0) throw new TypeError("Invalid number of values");
        return i.call(F, z);
      };
      h.any = (i, ...z) => (h.array(i) ? i : [
        i
      ]).some((O) => N(Array.prototype.some, O, z)), h.all = (i, ...z) => N(Array.prototype.every, i, z);
      const x = (i, z, F, O = {}) => {
        if (!i) {
          const { multipleValues: X } = O, se = X ? `received values of types ${[
            ...new Set(F.map((Q) => `\`${h(Q)}\``))
          ].join(", ")}` : `received value of type \`${h(F)}\``;
          throw new TypeError(`Expected value which is \`${z}\`, ${se}.`);
        }
      };
      e.assert = {
        undefined: (i) => x(h.undefined(i), "undefined", i),
        string: (i) => x(h.string(i), "string", i),
        number: (i) => x(h.number(i), "number", i),
        bigint: (i) => x(h.bigint(i), "bigint", i),
        function_: (i) => x(h.function_(i), "Function", i),
        null_: (i) => x(h.null_(i), "null", i),
        class_: (i) => x(h.class_(i), "Class", i),
        boolean: (i) => x(h.boolean(i), "boolean", i),
        symbol: (i) => x(h.symbol(i), "symbol", i),
        numericString: (i) => x(h.numericString(i), "string with a number", i),
        array: (i, z) => {
          x(h.array(i), "Array", i), z && i.forEach(z);
        },
        buffer: (i) => x(h.buffer(i), "Buffer", i),
        blob: (i) => x(h.blob(i), "Blob", i),
        nullOrUndefined: (i) => x(h.nullOrUndefined(i), "null or undefined", i),
        object: (i) => x(h.object(i), "Object", i),
        iterable: (i) => x(h.iterable(i), "Iterable", i),
        asyncIterable: (i) => x(h.asyncIterable(i), "AsyncIterable", i),
        generator: (i) => x(h.generator(i), "Generator", i),
        asyncGenerator: (i) => x(h.asyncGenerator(i), "AsyncGenerator", i),
        nativePromise: (i) => x(h.nativePromise(i), "native Promise", i),
        promise: (i) => x(h.promise(i), "Promise", i),
        generatorFunction: (i) => x(h.generatorFunction(i), "GeneratorFunction", i),
        asyncGeneratorFunction: (i) => x(h.asyncGeneratorFunction(i), "AsyncGeneratorFunction", i),
        asyncFunction: (i) => x(h.asyncFunction(i), "AsyncFunction", i),
        boundFunction: (i) => x(h.boundFunction(i), "Function", i),
        regExp: (i) => x(h.regExp(i), "RegExp", i),
        date: (i) => x(h.date(i), "Date", i),
        error: (i) => x(h.error(i), "Error", i),
        map: (i) => x(h.map(i), "Map", i),
        set: (i) => x(h.set(i), "Set", i),
        weakMap: (i) => x(h.weakMap(i), "WeakMap", i),
        weakSet: (i) => x(h.weakSet(i), "WeakSet", i),
        int8Array: (i) => x(h.int8Array(i), "Int8Array", i),
        uint8Array: (i) => x(h.uint8Array(i), "Uint8Array", i),
        uint8ClampedArray: (i) => x(h.uint8ClampedArray(i), "Uint8ClampedArray", i),
        int16Array: (i) => x(h.int16Array(i), "Int16Array", i),
        uint16Array: (i) => x(h.uint16Array(i), "Uint16Array", i),
        int32Array: (i) => x(h.int32Array(i), "Int32Array", i),
        uint32Array: (i) => x(h.uint32Array(i), "Uint32Array", i),
        float32Array: (i) => x(h.float32Array(i), "Float32Array", i),
        float64Array: (i) => x(h.float64Array(i), "Float64Array", i),
        bigInt64Array: (i) => x(h.bigInt64Array(i), "BigInt64Array", i),
        bigUint64Array: (i) => x(h.bigUint64Array(i), "BigUint64Array", i),
        arrayBuffer: (i) => x(h.arrayBuffer(i), "ArrayBuffer", i),
        sharedArrayBuffer: (i) => x(h.sharedArrayBuffer(i), "SharedArrayBuffer", i),
        dataView: (i) => x(h.dataView(i), "DataView", i),
        enumCase: (i, z) => x(h.enumCase(i, z), "EnumCase", i),
        urlInstance: (i) => x(h.urlInstance(i), "URL", i),
        urlString: (i) => x(h.urlString(i), "string with a URL", i),
        truthy: (i) => x(h.truthy(i), "truthy", i),
        falsy: (i) => x(h.falsy(i), "falsy", i),
        nan: (i) => x(h.nan(i), "NaN", i),
        primitive: (i) => x(h.primitive(i), "primitive", i),
        integer: (i) => x(h.integer(i), "integer", i),
        safeInteger: (i) => x(h.safeInteger(i), "integer", i),
        plainObject: (i) => x(h.plainObject(i), "plain object", i),
        typedArray: (i) => x(h.typedArray(i), "TypedArray", i),
        arrayLike: (i) => x(h.arrayLike(i), "array-like", i),
        domElement: (i) => x(h.domElement(i), "HTMLElement", i),
        observable: (i) => x(h.observable(i), "Observable", i),
        nodeStream: (i) => x(h.nodeStream(i), "Node.js Stream", i),
        infinite: (i) => x(h.infinite(i), "infinite number", i),
        emptyArray: (i) => x(h.emptyArray(i), "empty array", i),
        nonEmptyArray: (i) => x(h.nonEmptyArray(i), "non-empty array", i),
        emptyString: (i) => x(h.emptyString(i), "empty string", i),
        emptyStringOrWhitespace: (i) => x(h.emptyStringOrWhitespace(i), "empty string or whitespace", i),
        nonEmptyString: (i) => x(h.nonEmptyString(i), "non-empty string", i),
        nonEmptyStringAndNotWhitespace: (i) => x(h.nonEmptyStringAndNotWhitespace(i), "non-empty string and not whitespace", i),
        emptyObject: (i) => x(h.emptyObject(i), "empty object", i),
        nonEmptyObject: (i) => x(h.nonEmptyObject(i), "non-empty object", i),
        emptySet: (i) => x(h.emptySet(i), "empty set", i),
        nonEmptySet: (i) => x(h.nonEmptySet(i), "non-empty set", i),
        emptyMap: (i) => x(h.emptyMap(i), "empty map", i),
        nonEmptyMap: (i) => x(h.nonEmptyMap(i), "non-empty map", i),
        propertyKey: (i) => x(h.propertyKey(i), "PropertyKey", i),
        formData: (i) => x(h.formData(i), "FormData", i),
        urlSearchParams: (i) => x(h.urlSearchParams(i), "URLSearchParams", i),
        evenInteger: (i) => x(h.evenInteger(i), "even integer", i),
        oddInteger: (i) => x(h.oddInteger(i), "odd integer", i),
        directInstanceOf: (i, z) => x(h.directInstanceOf(i, z), "T", i),
        inRange: (i, z) => x(h.inRange(i, z), "in range", i),
        any: (i, ...z) => x(h.any(i, ...z), "predicate returns truthy for any value", z, {
          multipleValues: true
        }),
        all: (i, ...z) => x(h.all(i, ...z), "predicate returns truthy for all values", z, {
          multipleValues: true
        })
      }, Object.defineProperties(h, {
        class: {
          value: h.class_
        },
        function: {
          value: h.function_
        },
        null: {
          value: h.null_
        }
      }), Object.defineProperties(e.assert, {
        class: {
          value: e.assert.class_
        },
        function: {
          value: e.assert.function_
        },
        null: {
          value: e.assert.null_
        }
      }), e.default = h, t.exports = h, t.exports.default = h, t.exports.assert = e.assert;
    })(ba, ba.exports)), ba.exports;
  }
  var uo = fo();
  const ho = {
    keywords: [
      "face",
      "smile",
      "happy",
      "joy",
      ":D",
      "grin"
    ],
    char: "\u{1F600}",
    fitzpatrick_scale: false,
    category: "people"
  }, po = {
    keywords: [
      "face",
      "grimace",
      "teeth"
    ],
    char: "\u{1F62C}",
    fitzpatrick_scale: false,
    category: "people"
  }, mo = {
    keywords: [
      "face",
      "happy",
      "smile",
      "joy",
      "kawaii"
    ],
    char: "\u{1F601}",
    fitzpatrick_scale: false,
    category: "people"
  }, yo = {
    keywords: [
      "face",
      "cry",
      "tears",
      "weep",
      "happy",
      "happytears",
      "haha"
    ],
    char: "\u{1F602}",
    fitzpatrick_scale: false,
    category: "people"
  }, go = {
    keywords: [
      "face",
      "rolling",
      "floor",
      "laughing",
      "lol",
      "haha"
    ],
    char: "\u{1F923}",
    fitzpatrick_scale: false,
    category: "people"
  }, ko = {
    keywords: [
      "face",
      "celebration",
      "woohoo"
    ],
    char: "\u{1F973}",
    fitzpatrick_scale: false,
    category: "people"
  }, _o = {
    keywords: [
      "face",
      "happy",
      "joy",
      "haha",
      ":D",
      ":)",
      "smile",
      "funny"
    ],
    char: "\u{1F603}",
    fitzpatrick_scale: false,
    category: "people"
  }, wo = {
    keywords: [
      "face",
      "happy",
      "joy",
      "funny",
      "haha",
      "laugh",
      "like",
      ":D",
      ":)"
    ],
    char: "\u{1F604}",
    fitzpatrick_scale: false,
    category: "people"
  }, bo = {
    keywords: [
      "face",
      "hot",
      "happy",
      "laugh",
      "sweat",
      "smile",
      "relief"
    ],
    char: "\u{1F605}",
    fitzpatrick_scale: false,
    category: "people"
  }, vo = {
    keywords: [
      "happy",
      "joy",
      "lol",
      "satisfied",
      "haha",
      "face",
      "glad",
      "XD",
      "laugh"
    ],
    char: "\u{1F606}",
    fitzpatrick_scale: false,
    category: "people"
  }, zo = {
    keywords: [
      "face",
      "angel",
      "heaven",
      "halo"
    ],
    char: "\u{1F607}",
    fitzpatrick_scale: false,
    category: "people"
  }, xo = {
    keywords: [
      "face",
      "happy",
      "mischievous",
      "secret",
      ";)",
      "smile",
      "eye"
    ],
    char: "\u{1F609}",
    fitzpatrick_scale: false,
    category: "people"
  }, So = {
    keywords: [
      "face",
      "smile",
      "happy",
      "flushed",
      "crush",
      "embarrassed",
      "shy",
      "joy"
    ],
    char: "\u{1F60A}",
    fitzpatrick_scale: false,
    category: "people"
  }, Ao = {
    keywords: [
      "face",
      "smile"
    ],
    char: "\u{1F642}",
    fitzpatrick_scale: false,
    category: "people"
  }, Mo = {
    keywords: [
      "face",
      "flipped",
      "silly",
      "smile"
    ],
    char: "\u{1F643}",
    fitzpatrick_scale: false,
    category: "people"
  }, To = {
    keywords: [
      "face",
      "blush",
      "massage",
      "happiness"
    ],
    char: "\u263A\uFE0F",
    fitzpatrick_scale: false,
    category: "people"
  }, qo = {
    keywords: [
      "happy",
      "joy",
      "tongue",
      "smile",
      "face",
      "silly",
      "yummy",
      "nom",
      "delicious",
      "savouring"
    ],
    char: "\u{1F60B}",
    fitzpatrick_scale: false,
    category: "people"
  }, jo = {
    keywords: [
      "face",
      "relaxed",
      "phew",
      "massage",
      "happiness"
    ],
    char: "\u{1F60C}",
    fitzpatrick_scale: false,
    category: "people"
  }, Do = {
    keywords: [
      "face",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "crush",
      "heart"
    ],
    char: "\u{1F60D}",
    fitzpatrick_scale: false,
    category: "people"
  }, Bo = {
    keywords: [
      "face",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "crush",
      "hearts",
      "adore"
    ],
    char: "\u{1F970}",
    fitzpatrick_scale: false,
    category: "people"
  }, Co = {
    keywords: [
      "face",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "kiss"
    ],
    char: "\u{1F618}",
    fitzpatrick_scale: false,
    category: "people"
  }, Eo = {
    keywords: [
      "love",
      "like",
      "face",
      "3",
      "valentines",
      "infatuation",
      "kiss"
    ],
    char: "\u{1F617}",
    fitzpatrick_scale: false,
    category: "people"
  }, Io = {
    keywords: [
      "face",
      "affection",
      "valentines",
      "infatuation",
      "kiss"
    ],
    char: "\u{1F619}",
    fitzpatrick_scale: false,
    category: "people"
  }, No = {
    keywords: [
      "face",
      "love",
      "like",
      "affection",
      "valentines",
      "infatuation",
      "kiss"
    ],
    char: "\u{1F61A}",
    fitzpatrick_scale: false,
    category: "people"
  }, Ro = {
    keywords: [
      "face",
      "prank",
      "childish",
      "playful",
      "mischievous",
      "smile",
      "wink",
      "tongue"
    ],
    char: "\u{1F61C}",
    fitzpatrick_scale: false,
    category: "people"
  }, Fo = {
    keywords: [
      "face",
      "goofy",
      "crazy"
    ],
    char: "\u{1F92A}",
    fitzpatrick_scale: false,
    category: "people"
  }, Oo = {
    keywords: [
      "face",
      "distrust",
      "scepticism",
      "disapproval",
      "disbelief",
      "surprise"
    ],
    char: "\u{1F928}",
    fitzpatrick_scale: false,
    category: "people"
  }, Ho = {
    keywords: [
      "face",
      "stuffy",
      "wealthy"
    ],
    char: "\u{1F9D0}",
    fitzpatrick_scale: false,
    category: "people"
  }, Po = {
    keywords: [
      "face",
      "prank",
      "playful",
      "mischievous",
      "smile",
      "tongue"
    ],
    char: "\u{1F61D}",
    fitzpatrick_scale: false,
    category: "people"
  }, Lo = {
    keywords: [
      "face",
      "prank",
      "childish",
      "playful",
      "mischievous",
      "smile",
      "tongue"
    ],
    char: "\u{1F61B}",
    fitzpatrick_scale: false,
    category: "people"
  }, Go = {
    keywords: [
      "face",
      "rich",
      "dollar",
      "money"
    ],
    char: "\u{1F911}",
    fitzpatrick_scale: false,
    category: "people"
  }, Uo = {
    keywords: [
      "face",
      "nerdy",
      "geek",
      "dork"
    ],
    char: "\u{1F913}",
    fitzpatrick_scale: false,
    category: "people"
  }, $o = {
    keywords: [
      "face",
      "cool",
      "smile",
      "summer",
      "beach",
      "sunglass"
    ],
    char: "\u{1F60E}",
    fitzpatrick_scale: false,
    category: "people"
  }, Vo = {
    keywords: [
      "face",
      "smile",
      "starry",
      "eyes",
      "grinning"
    ],
    char: "\u{1F929}",
    fitzpatrick_scale: false,
    category: "people"
  }, Xo = {
    keywords: [
      "face"
    ],
    char: "\u{1F921}",
    fitzpatrick_scale: false,
    category: "people"
  }, Wo = {
    keywords: [
      "face",
      "cowgirl",
      "hat"
    ],
    char: "\u{1F920}",
    fitzpatrick_scale: false,
    category: "people"
  }, Yo = {
    keywords: [
      "face",
      "smile",
      "hug"
    ],
    char: "\u{1F917}",
    fitzpatrick_scale: false,
    category: "people"
  }, Zo = {
    keywords: [
      "face",
      "smile",
      "mean",
      "prank",
      "smug",
      "sarcasm"
    ],
    char: "\u{1F60F}",
    fitzpatrick_scale: false,
    category: "people"
  }, Ko = {
    keywords: [
      "face",
      "hellokitty"
    ],
    char: "\u{1F636}",
    fitzpatrick_scale: false,
    category: "people"
  }, Jo = {
    keywords: [
      "indifference",
      "meh",
      ":|",
      "neutral"
    ],
    char: "\u{1F610}",
    fitzpatrick_scale: false,
    category: "people"
  }, Qo = {
    keywords: [
      "face",
      "indifferent",
      "-_-",
      "meh",
      "deadpan"
    ],
    char: "\u{1F611}",
    fitzpatrick_scale: false,
    category: "people"
  }, en = {
    keywords: [
      "indifference",
      "bored",
      "straight face",
      "serious",
      "sarcasm",
      "unimpressed",
      "skeptical",
      "dubious",
      "side_eye"
    ],
    char: "\u{1F612}",
    fitzpatrick_scale: false,
    category: "people"
  }, an = {
    keywords: [
      "face",
      "eyeroll",
      "frustrated"
    ],
    char: "\u{1F644}",
    fitzpatrick_scale: false,
    category: "people"
  }, tn = {
    keywords: [
      "face",
      "hmmm",
      "think",
      "consider"
    ],
    char: "\u{1F914}",
    fitzpatrick_scale: false,
    category: "people"
  }, rn = {
    keywords: [
      "face",
      "lie",
      "pinocchio"
    ],
    char: "\u{1F925}",
    fitzpatrick_scale: false,
    category: "people"
  }, sn = {
    keywords: [
      "face",
      "whoops",
      "shock",
      "surprise"
    ],
    char: "\u{1F92D}",
    fitzpatrick_scale: false,
    category: "people"
  }, on = {
    keywords: [
      "face",
      "quiet",
      "shhh"
    ],
    char: "\u{1F92B}",
    fitzpatrick_scale: false,
    category: "people"
  }, nn = {
    keywords: [
      "face",
      "swearing",
      "cursing",
      "cussing",
      "profanity",
      "expletive"
    ],
    char: "\u{1F92C}",
    fitzpatrick_scale: false,
    category: "people"
  }, cn = {
    keywords: [
      "face",
      "shocked",
      "mind",
      "blown"
    ],
    char: "\u{1F92F}",
    fitzpatrick_scale: false,
    category: "people"
  }, ln = {
    keywords: [
      "face",
      "blush",
      "shy",
      "flattered"
    ],
    char: "\u{1F633}",
    fitzpatrick_scale: false,
    category: "people"
  }, fn = {
    keywords: [
      "face",
      "sad",
      "upset",
      "depressed",
      ":("
    ],
    char: "\u{1F61E}",
    fitzpatrick_scale: false,
    category: "people"
  }, un = {
    keywords: [
      "face",
      "concern",
      "nervous",
      ":("
    ],
    char: "\u{1F61F}",
    fitzpatrick_scale: false,
    category: "people"
  }, hn = {
    keywords: [
      "mad",
      "face",
      "annoyed",
      "frustrated"
    ],
    char: "\u{1F620}",
    fitzpatrick_scale: false,
    category: "people"
  }, dn = {
    keywords: [
      "angry",
      "mad",
      "hate",
      "despise"
    ],
    char: "\u{1F621}",
    fitzpatrick_scale: false,
    category: "people"
  }, pn = {
    keywords: [
      "face",
      "sad",
      "depressed",
      "upset"
    ],
    char: "\u{1F614}",
    fitzpatrick_scale: false,
    category: "people"
  }, mn = {
    keywords: [
      "face",
      "indifference",
      "huh",
      "weird",
      "hmmm",
      ":/"
    ],
    char: "\u{1F615}",
    fitzpatrick_scale: false,
    category: "people"
  }, yn = {
    keywords: [
      "face",
      "frowning",
      "disappointed",
      "sad",
      "upset"
    ],
    char: "\u{1F641}",
    fitzpatrick_scale: false,
    category: "people"
  }, gn = {
    keywords: [
      "face",
      "sad",
      "upset",
      "frown"
    ],
    char: "\u2639",
    fitzpatrick_scale: false,
    category: "people"
  }, kn = {
    keywords: [
      "face",
      "sick",
      "no",
      "upset",
      "oops"
    ],
    char: "\u{1F623}",
    fitzpatrick_scale: false,
    category: "people"
  }, _n = {
    keywords: [
      "face",
      "confused",
      "sick",
      "unwell",
      "oops",
      ":S"
    ],
    char: "\u{1F616}",
    fitzpatrick_scale: false,
    category: "people"
  }, wn = {
    keywords: [
      "sick",
      "whine",
      "upset",
      "frustrated"
    ],
    char: "\u{1F62B}",
    fitzpatrick_scale: false,
    category: "people"
  }, bn = {
    keywords: [
      "face",
      "tired",
      "sleepy",
      "sad",
      "frustrated",
      "upset"
    ],
    char: "\u{1F629}",
    fitzpatrick_scale: false,
    category: "people"
  }, vn = {
    keywords: [
      "face",
      "begging",
      "mercy"
    ],
    char: "\u{1F97A}",
    fitzpatrick_scale: false,
    category: "people"
  }, zn = {
    keywords: [
      "face",
      "gas",
      "phew",
      "proud",
      "pride"
    ],
    char: "\u{1F624}",
    fitzpatrick_scale: false,
    category: "people"
  }, xn = {
    keywords: [
      "face",
      "surprise",
      "impressed",
      "wow",
      "whoa",
      ":O"
    ],
    char: "\u{1F62E}",
    fitzpatrick_scale: false,
    category: "people"
  }, Sn = {
    keywords: [
      "face",
      "munch",
      "scared",
      "omg"
    ],
    char: "\u{1F631}",
    fitzpatrick_scale: false,
    category: "people"
  }, An = {
    keywords: [
      "face",
      "scared",
      "terrified",
      "nervous",
      "oops",
      "huh"
    ],
    char: "\u{1F628}",
    fitzpatrick_scale: false,
    category: "people"
  }, Mn = {
    keywords: [
      "face",
      "nervous",
      "sweat"
    ],
    char: "\u{1F630}",
    fitzpatrick_scale: false,
    category: "people"
  }, Tn = {
    keywords: [
      "face",
      "woo",
      "shh"
    ],
    char: "\u{1F62F}",
    fitzpatrick_scale: false,
    category: "people"
  }, qn = {
    keywords: [
      "face",
      "aw",
      "what"
    ],
    char: "\u{1F626}",
    fitzpatrick_scale: false,
    category: "people"
  }, jn = {
    keywords: [
      "face",
      "stunned",
      "nervous"
    ],
    char: "\u{1F627}",
    fitzpatrick_scale: false,
    category: "people"
  }, Dn = {
    keywords: [
      "face",
      "tears",
      "sad",
      "depressed",
      "upset",
      ":'("
    ],
    char: "\u{1F622}",
    fitzpatrick_scale: false,
    category: "people"
  }, Bn = {
    keywords: [
      "face",
      "phew",
      "sweat",
      "nervous"
    ],
    char: "\u{1F625}",
    fitzpatrick_scale: false,
    category: "people"
  }, Cn = {
    keywords: [
      "face"
    ],
    char: "\u{1F924}",
    fitzpatrick_scale: false,
    category: "people"
  }, En = {
    keywords: [
      "face",
      "tired",
      "rest",
      "nap"
    ],
    char: "\u{1F62A}",
    fitzpatrick_scale: false,
    category: "people"
  }, In = {
    keywords: [
      "face",
      "hot",
      "sad",
      "tired",
      "exercise"
    ],
    char: "\u{1F613}",
    fitzpatrick_scale: false,
    category: "people"
  }, Nn = {
    keywords: [
      "face",
      "feverish",
      "heat",
      "red",
      "sweating"
    ],
    char: "\u{1F975}",
    fitzpatrick_scale: false,
    category: "people"
  }, Rn = {
    keywords: [
      "face",
      "blue",
      "freezing",
      "frozen",
      "frostbite",
      "icicles"
    ],
    char: "\u{1F976}",
    fitzpatrick_scale: false,
    category: "people"
  }, Fn = {
    keywords: [
      "face",
      "cry",
      "tears",
      "sad",
      "upset",
      "depressed"
    ],
    char: "\u{1F62D}",
    fitzpatrick_scale: false,
    category: "people"
  }, On = {
    keywords: [
      "spent",
      "unconscious",
      "xox",
      "dizzy"
    ],
    char: "\u{1F635}",
    fitzpatrick_scale: false,
    category: "people"
  }, Hn = {
    keywords: [
      "face",
      "xox",
      "surprised",
      "poisoned"
    ],
    char: "\u{1F632}",
    fitzpatrick_scale: false,
    category: "people"
  }, Pn = {
    keywords: [
      "face",
      "sealed",
      "zipper",
      "secret"
    ],
    char: "\u{1F910}",
    fitzpatrick_scale: false,
    category: "people"
  }, Ln = {
    keywords: [
      "face",
      "vomit",
      "gross",
      "green",
      "sick",
      "throw up",
      "ill"
    ],
    char: "\u{1F922}",
    fitzpatrick_scale: false,
    category: "people"
  }, Gn = {
    keywords: [
      "face",
      "gesundheit",
      "sneeze",
      "sick",
      "allergy"
    ],
    char: "\u{1F927}",
    fitzpatrick_scale: false,
    category: "people"
  }, Un = {
    keywords: [
      "face",
      "sick"
    ],
    char: "\u{1F92E}",
    fitzpatrick_scale: false,
    category: "people"
  }, $n = {
    keywords: [
      "face",
      "sick",
      "ill",
      "disease"
    ],
    char: "\u{1F637}",
    fitzpatrick_scale: false,
    category: "people"
  }, Vn = {
    keywords: [
      "sick",
      "temperature",
      "thermometer",
      "cold",
      "fever"
    ],
    char: "\u{1F912}",
    fitzpatrick_scale: false,
    category: "people"
  }, Xn = {
    keywords: [
      "injured",
      "clumsy",
      "bandage",
      "hurt"
    ],
    char: "\u{1F915}",
    fitzpatrick_scale: false,
    category: "people"
  }, Wn = {
    keywords: [
      "face",
      "dizzy",
      "intoxicated",
      "tipsy",
      "wavy"
    ],
    char: "\u{1F974}",
    fitzpatrick_scale: false,
    category: "people"
  }, Yn = {
    keywords: [
      "face",
      "tired",
      "sleepy",
      "night",
      "zzz"
    ],
    char: "\u{1F634}",
    fitzpatrick_scale: false,
    category: "people"
  }, Zn = {
    keywords: [
      "sleepy",
      "tired",
      "dream"
    ],
    char: "\u{1F4A4}",
    fitzpatrick_scale: false,
    category: "people"
  }, Kn = {
    keywords: [
      "hankey",
      "shitface",
      "fail",
      "turd",
      "shit"
    ],
    char: "\u{1F4A9}",
    fitzpatrick_scale: false,
    category: "people"
  }, Jn = {
    keywords: [
      "devil",
      "horns"
    ],
    char: "\u{1F608}",
    fitzpatrick_scale: false,
    category: "people"
  }, Qn = {
    keywords: [
      "devil",
      "angry",
      "horns"
    ],
    char: "\u{1F47F}",
    fitzpatrick_scale: false,
    category: "people"
  }, e0 = {
    keywords: [
      "monster",
      "red",
      "mask",
      "halloween",
      "scary",
      "creepy",
      "devil",
      "demon",
      "japanese",
      "ogre"
    ],
    char: "\u{1F479}",
    fitzpatrick_scale: false,
    category: "people"
  }, a0 = {
    keywords: [
      "red",
      "evil",
      "mask",
      "monster",
      "scary",
      "creepy",
      "japanese",
      "goblin"
    ],
    char: "\u{1F47A}",
    fitzpatrick_scale: false,
    category: "people"
  }, t0 = {
    keywords: [
      "dead",
      "skeleton",
      "creepy",
      "death"
    ],
    char: "\u{1F480}",
    fitzpatrick_scale: false,
    category: "people"
  }, r0 = {
    keywords: [
      "halloween",
      "spooky",
      "scary"
    ],
    char: "\u{1F47B}",
    fitzpatrick_scale: false,
    category: "people"
  }, s0 = {
    keywords: [
      "UFO",
      "paul",
      "weird",
      "outer_space"
    ],
    char: "\u{1F47D}",
    fitzpatrick_scale: false,
    category: "people"
  }, o0 = {
    keywords: [
      "computer",
      "machine",
      "bot"
    ],
    char: "\u{1F916}",
    fitzpatrick_scale: false,
    category: "people"
  }, n0 = {
    keywords: [
      "animal",
      "cats",
      "happy",
      "smile"
    ],
    char: "\u{1F63A}",
    fitzpatrick_scale: false,
    category: "people"
  }, c0 = {
    keywords: [
      "animal",
      "cats",
      "smile"
    ],
    char: "\u{1F638}",
    fitzpatrick_scale: false,
    category: "people"
  }, i0 = {
    keywords: [
      "animal",
      "cats",
      "haha",
      "happy",
      "tears"
    ],
    char: "\u{1F639}",
    fitzpatrick_scale: false,
    category: "people"
  }, l0 = {
    keywords: [
      "animal",
      "love",
      "like",
      "affection",
      "cats",
      "valentines",
      "heart"
    ],
    char: "\u{1F63B}",
    fitzpatrick_scale: false,
    category: "people"
  }, f0 = {
    keywords: [
      "animal",
      "cats",
      "smirk"
    ],
    char: "\u{1F63C}",
    fitzpatrick_scale: false,
    category: "people"
  }, u0 = {
    keywords: [
      "animal",
      "cats",
      "kiss"
    ],
    char: "\u{1F63D}",
    fitzpatrick_scale: false,
    category: "people"
  }, h0 = {
    keywords: [
      "animal",
      "cats",
      "munch",
      "scared",
      "scream"
    ],
    char: "\u{1F640}",
    fitzpatrick_scale: false,
    category: "people"
  }, d0 = {
    keywords: [
      "animal",
      "tears",
      "weep",
      "sad",
      "cats",
      "upset",
      "cry"
    ],
    char: "\u{1F63F}",
    fitzpatrick_scale: false,
    category: "people"
  }, p0 = {
    keywords: [
      "animal",
      "cats"
    ],
    char: "\u{1F63E}",
    fitzpatrick_scale: false,
    category: "people"
  }, m0 = {
    keywords: [
      "hands",
      "gesture",
      "cupped",
      "prayer"
    ],
    char: "\u{1F932}",
    fitzpatrick_scale: true,
    category: "people"
  }, y0 = {
    keywords: [
      "gesture",
      "hooray",
      "yea",
      "celebration",
      "hands"
    ],
    char: "\u{1F64C}",
    fitzpatrick_scale: true,
    category: "people"
  }, g0 = {
    keywords: [
      "hands",
      "praise",
      "applause",
      "congrats",
      "yay"
    ],
    char: "\u{1F44F}",
    fitzpatrick_scale: true,
    category: "people"
  }, k0 = {
    keywords: [
      "hands",
      "gesture",
      "goodbye",
      "solong",
      "farewell",
      "hello",
      "hi",
      "palm"
    ],
    char: "\u{1F44B}",
    fitzpatrick_scale: true,
    category: "people"
  }, _0 = {
    keywords: [
      "hands",
      "gesture"
    ],
    char: "\u{1F919}",
    fitzpatrick_scale: true,
    category: "people"
  }, w0 = {
    keywords: [
      "angry",
      "violence",
      "fist",
      "hit",
      "attack",
      "hand"
    ],
    char: "\u{1F44A}",
    fitzpatrick_scale: true,
    category: "people"
  }, b0 = {
    keywords: [
      "fingers",
      "hand",
      "grasp"
    ],
    char: "\u270A",
    fitzpatrick_scale: true,
    category: "people"
  }, v0 = {
    keywords: [
      "hand",
      "fistbump"
    ],
    char: "\u{1F91B}",
    fitzpatrick_scale: true,
    category: "people"
  }, z0 = {
    keywords: [
      "hand",
      "fistbump"
    ],
    char: "\u{1F91C}",
    fitzpatrick_scale: true,
    category: "people"
  }, x0 = {
    keywords: [
      "fingers",
      "ohyeah",
      "hand",
      "peace",
      "victory",
      "two"
    ],
    char: "\u270C",
    fitzpatrick_scale: true,
    category: "people"
  }, S0 = {
    keywords: [
      "fingers",
      "limbs",
      "perfect",
      "ok",
      "okay"
    ],
    char: "\u{1F44C}",
    fitzpatrick_scale: true,
    category: "people"
  }, A0 = {
    keywords: [
      "fingers",
      "stop",
      "highfive",
      "palm",
      "ban"
    ],
    char: "\u270B",
    fitzpatrick_scale: true,
    category: "people"
  }, M0 = {
    keywords: [
      "fingers",
      "raised",
      "backhand"
    ],
    char: "\u{1F91A}",
    fitzpatrick_scale: true,
    category: "people"
  }, T0 = {
    keywords: [
      "fingers",
      "butterfly",
      "hands",
      "open"
    ],
    char: "\u{1F450}",
    fitzpatrick_scale: true,
    category: "people"
  }, q0 = {
    keywords: [
      "arm",
      "flex",
      "hand",
      "summer",
      "strong",
      "biceps"
    ],
    char: "\u{1F4AA}",
    fitzpatrick_scale: true,
    category: "people"
  }, j0 = {
    keywords: [
      "please",
      "hope",
      "wish",
      "namaste",
      "highfive"
    ],
    char: "\u{1F64F}",
    fitzpatrick_scale: true,
    category: "people"
  }, D0 = {
    keywords: [
      "kick",
      "stomp"
    ],
    char: "\u{1F9B6}",
    fitzpatrick_scale: true,
    category: "people"
  }, B0 = {
    keywords: [
      "kick",
      "limb"
    ],
    char: "\u{1F9B5}",
    fitzpatrick_scale: true,
    category: "people"
  }, C0 = {
    keywords: [
      "agreement",
      "shake"
    ],
    char: "\u{1F91D}",
    fitzpatrick_scale: false,
    category: "people"
  }, E0 = {
    keywords: [
      "hand",
      "fingers",
      "direction",
      "up"
    ],
    char: "\u261D",
    fitzpatrick_scale: true,
    category: "people"
  }, I0 = {
    keywords: [
      "fingers",
      "hand",
      "direction",
      "up"
    ],
    char: "\u{1F446}",
    fitzpatrick_scale: true,
    category: "people"
  }, N0 = {
    keywords: [
      "fingers",
      "hand",
      "direction",
      "down"
    ],
    char: "\u{1F447}",
    fitzpatrick_scale: true,
    category: "people"
  }, R0 = {
    keywords: [
      "direction",
      "fingers",
      "hand",
      "left"
    ],
    char: "\u{1F448}",
    fitzpatrick_scale: true,
    category: "people"
  }, F0 = {
    keywords: [
      "fingers",
      "hand",
      "direction",
      "right"
    ],
    char: "\u{1F449}",
    fitzpatrick_scale: true,
    category: "people"
  }, O0 = {
    keywords: [
      "hand",
      "fingers",
      "rude",
      "middle",
      "flipping"
    ],
    char: "\u{1F595}",
    fitzpatrick_scale: true,
    category: "people"
  }, H0 = {
    keywords: [
      "hand",
      "fingers",
      "palm"
    ],
    char: "\u{1F590}",
    fitzpatrick_scale: true,
    category: "people"
  }, P0 = {
    keywords: [
      "hand",
      "fingers",
      "gesture"
    ],
    char: "\u{1F91F}",
    fitzpatrick_scale: true,
    category: "people"
  }, L0 = {
    keywords: [
      "hand",
      "fingers",
      "evil_eye",
      "sign_of_horns",
      "rock_on"
    ],
    char: "\u{1F918}",
    fitzpatrick_scale: true,
    category: "people"
  }, G0 = {
    keywords: [
      "good",
      "lucky"
    ],
    char: "\u{1F91E}",
    fitzpatrick_scale: true,
    category: "people"
  }, U0 = {
    keywords: [
      "hand",
      "fingers",
      "spock",
      "star trek"
    ],
    char: "\u{1F596}",
    fitzpatrick_scale: true,
    category: "people"
  }, $0 = {
    keywords: [
      "lower_left_ballpoint_pen",
      "stationery",
      "write",
      "compose"
    ],
    char: "\u270D",
    fitzpatrick_scale: true,
    category: "people"
  }, V0 = {
    keywords: [
      "camera",
      "phone"
    ],
    char: "\u{1F933}",
    fitzpatrick_scale: true,
    category: "people"
  }, X0 = {
    keywords: [
      "beauty",
      "manicure",
      "finger",
      "fashion",
      "nail"
    ],
    char: "\u{1F485}",
    fitzpatrick_scale: true,
    category: "people"
  }, W0 = {
    keywords: [
      "mouth",
      "kiss"
    ],
    char: "\u{1F444}",
    fitzpatrick_scale: false,
    category: "people"
  }, Y0 = {
    keywords: [
      "teeth",
      "dentist"
    ],
    char: "\u{1F9B7}",
    fitzpatrick_scale: false,
    category: "people"
  }, Z0 = {
    keywords: [
      "mouth",
      "playful"
    ],
    char: "\u{1F445}",
    fitzpatrick_scale: false,
    category: "people"
  }, K0 = {
    keywords: [
      "face",
      "hear",
      "sound",
      "listen"
    ],
    char: "\u{1F442}",
    fitzpatrick_scale: true,
    category: "people"
  }, J0 = {
    keywords: [
      "smell",
      "sniff"
    ],
    char: "\u{1F443}",
    fitzpatrick_scale: true,
    category: "people"
  }, Q0 = {
    keywords: [
      "face",
      "look",
      "see",
      "watch",
      "stare"
    ],
    char: "\u{1F441}",
    fitzpatrick_scale: false,
    category: "people"
  }, ec = {
    keywords: [
      "look",
      "watch",
      "stalk",
      "peek",
      "see"
    ],
    char: "\u{1F440}",
    fitzpatrick_scale: false,
    category: "people"
  }, ac = {
    keywords: [
      "smart",
      "intelligent"
    ],
    char: "\u{1F9E0}",
    fitzpatrick_scale: false,
    category: "people"
  }, tc = {
    keywords: [
      "user",
      "person",
      "human"
    ],
    char: "\u{1F464}",
    fitzpatrick_scale: false,
    category: "people"
  }, rc = {
    keywords: [
      "user",
      "person",
      "human",
      "group",
      "team"
    ],
    char: "\u{1F465}",
    fitzpatrick_scale: false,
    category: "people"
  }, sc = {
    keywords: [
      "user",
      "person",
      "human",
      "sing",
      "say",
      "talk"
    ],
    char: "\u{1F5E3}",
    fitzpatrick_scale: false,
    category: "people"
  }, oc = {
    keywords: [
      "child",
      "boy",
      "girl",
      "toddler"
    ],
    char: "\u{1F476}",
    fitzpatrick_scale: true,
    category: "people"
  }, nc = {
    keywords: [
      "gender-neutral",
      "young"
    ],
    char: "\u{1F9D2}",
    fitzpatrick_scale: true,
    category: "people"
  }, cc = {
    keywords: [
      "man",
      "male",
      "guy",
      "teenager"
    ],
    char: "\u{1F466}",
    fitzpatrick_scale: true,
    category: "people"
  }, ic = {
    keywords: [
      "female",
      "woman",
      "teenager"
    ],
    char: "\u{1F467}",
    fitzpatrick_scale: true,
    category: "people"
  }, lc = {
    keywords: [
      "gender-neutral",
      "person"
    ],
    char: "\u{1F9D1}",
    fitzpatrick_scale: true,
    category: "people"
  }, fc = {
    keywords: [
      "mustache",
      "father",
      "dad",
      "guy",
      "classy",
      "sir",
      "moustache"
    ],
    char: "\u{1F468}",
    fitzpatrick_scale: true,
    category: "people"
  }, uc = {
    keywords: [
      "female",
      "girls",
      "lady"
    ],
    char: "\u{1F469}",
    fitzpatrick_scale: true,
    category: "people"
  }, hc = {
    keywords: [
      "woman",
      "female",
      "girl",
      "blonde",
      "person"
    ],
    char: "\u{1F471}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, dc = {
    keywords: [
      "man",
      "male",
      "boy",
      "blonde",
      "guy",
      "person"
    ],
    char: "\u{1F471}",
    fitzpatrick_scale: true,
    category: "people"
  }, pc = {
    keywords: [
      "person",
      "bewhiskered"
    ],
    char: "\u{1F9D4}",
    fitzpatrick_scale: true,
    category: "people"
  }, mc = {
    keywords: [
      "human",
      "elder",
      "senior",
      "gender-neutral"
    ],
    char: "\u{1F9D3}",
    fitzpatrick_scale: true,
    category: "people"
  }, yc = {
    keywords: [
      "human",
      "male",
      "men",
      "old",
      "elder",
      "senior"
    ],
    char: "\u{1F474}",
    fitzpatrick_scale: true,
    category: "people"
  }, gc = {
    keywords: [
      "human",
      "female",
      "women",
      "lady",
      "old",
      "elder",
      "senior"
    ],
    char: "\u{1F475}",
    fitzpatrick_scale: true,
    category: "people"
  }, kc = {
    keywords: [
      "male",
      "boy",
      "chinese"
    ],
    char: "\u{1F472}",
    fitzpatrick_scale: true,
    category: "people"
  }, _c = {
    keywords: [
      "female",
      "hijab",
      "mantilla",
      "tichel"
    ],
    char: "\u{1F9D5}",
    fitzpatrick_scale: true,
    category: "people"
  }, wc = {
    keywords: [
      "female",
      "indian",
      "hinduism",
      "arabs",
      "woman"
    ],
    char: "\u{1F473}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, bc = {
    keywords: [
      "male",
      "indian",
      "hinduism",
      "arabs"
    ],
    char: "\u{1F473}",
    fitzpatrick_scale: true,
    category: "people"
  }, vc = {
    keywords: [
      "woman",
      "police",
      "law",
      "legal",
      "enforcement",
      "arrest",
      "911",
      "female"
    ],
    char: "\u{1F46E}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, zc = {
    keywords: [
      "man",
      "police",
      "law",
      "legal",
      "enforcement",
      "arrest",
      "911"
    ],
    char: "\u{1F46E}",
    fitzpatrick_scale: true,
    category: "people"
  }, xc = {
    keywords: [
      "female",
      "human",
      "wip",
      "build",
      "construction",
      "worker",
      "labor",
      "woman"
    ],
    char: "\u{1F477}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Sc = {
    keywords: [
      "male",
      "human",
      "wip",
      "guy",
      "build",
      "construction",
      "worker",
      "labor"
    ],
    char: "\u{1F477}",
    fitzpatrick_scale: true,
    category: "people"
  }, Ac = {
    keywords: [
      "uk",
      "gb",
      "british",
      "female",
      "royal",
      "woman"
    ],
    char: "\u{1F482}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Mc = {
    keywords: [
      "uk",
      "gb",
      "british",
      "male",
      "guy",
      "royal"
    ],
    char: "\u{1F482}",
    fitzpatrick_scale: true,
    category: "people"
  }, Tc = {
    keywords: [
      "human",
      "spy",
      "detective",
      "female",
      "woman"
    ],
    char: "\u{1F575}\uFE0F\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, qc = {
    keywords: [
      "human",
      "spy",
      "detective"
    ],
    char: "\u{1F575}",
    fitzpatrick_scale: true,
    category: "people"
  }, jc = {
    keywords: [
      "doctor",
      "nurse",
      "therapist",
      "healthcare",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u2695\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Dc = {
    keywords: [
      "doctor",
      "nurse",
      "therapist",
      "healthcare",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u2695\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Bc = {
    keywords: [
      "rancher",
      "gardener",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u{1F33E}",
    fitzpatrick_scale: true,
    category: "people"
  }, Cc = {
    keywords: [
      "rancher",
      "gardener",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u{1F33E}",
    fitzpatrick_scale: true,
    category: "people"
  }, Ec = {
    keywords: [
      "chef",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u{1F373}",
    fitzpatrick_scale: true,
    category: "people"
  }, Ic = {
    keywords: [
      "chef",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u{1F373}",
    fitzpatrick_scale: true,
    category: "people"
  }, Nc = {
    keywords: [
      "graduate",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u{1F393}",
    fitzpatrick_scale: true,
    category: "people"
  }, Rc = {
    keywords: [
      "graduate",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u{1F393}",
    fitzpatrick_scale: true,
    category: "people"
  }, Fc = {
    keywords: [
      "rockstar",
      "entertainer",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u{1F3A4}",
    fitzpatrick_scale: true,
    category: "people"
  }, Oc = {
    keywords: [
      "rockstar",
      "entertainer",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u{1F3A4}",
    fitzpatrick_scale: true,
    category: "people"
  }, Hc = {
    keywords: [
      "instructor",
      "professor",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u{1F3EB}",
    fitzpatrick_scale: true,
    category: "people"
  }, Pc = {
    keywords: [
      "instructor",
      "professor",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u{1F3EB}",
    fitzpatrick_scale: true,
    category: "people"
  }, Lc = {
    keywords: [
      "assembly",
      "industrial",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u{1F3ED}",
    fitzpatrick_scale: true,
    category: "people"
  }, Gc = {
    keywords: [
      "assembly",
      "industrial",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u{1F3ED}",
    fitzpatrick_scale: true,
    category: "people"
  }, Uc = {
    keywords: [
      "coder",
      "developer",
      "engineer",
      "programmer",
      "software",
      "woman",
      "human",
      "laptop",
      "computer"
    ],
    char: "\u{1F469}\u200D\u{1F4BB}",
    fitzpatrick_scale: true,
    category: "people"
  }, $c = {
    keywords: [
      "coder",
      "developer",
      "engineer",
      "programmer",
      "software",
      "man",
      "human",
      "laptop",
      "computer"
    ],
    char: "\u{1F468}\u200D\u{1F4BB}",
    fitzpatrick_scale: true,
    category: "people"
  }, Vc = {
    keywords: [
      "business",
      "manager",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u{1F4BC}",
    fitzpatrick_scale: true,
    category: "people"
  }, Xc = {
    keywords: [
      "business",
      "manager",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u{1F4BC}",
    fitzpatrick_scale: true,
    category: "people"
  }, Wc = {
    keywords: [
      "plumber",
      "woman",
      "human",
      "wrench"
    ],
    char: "\u{1F469}\u200D\u{1F527}",
    fitzpatrick_scale: true,
    category: "people"
  }, Yc = {
    keywords: [
      "plumber",
      "man",
      "human",
      "wrench"
    ],
    char: "\u{1F468}\u200D\u{1F527}",
    fitzpatrick_scale: true,
    category: "people"
  }, Zc = {
    keywords: [
      "biologist",
      "chemist",
      "engineer",
      "physicist",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u{1F52C}",
    fitzpatrick_scale: true,
    category: "people"
  }, Kc = {
    keywords: [
      "biologist",
      "chemist",
      "engineer",
      "physicist",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u{1F52C}",
    fitzpatrick_scale: true,
    category: "people"
  }, Jc = {
    keywords: [
      "painter",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u{1F3A8}",
    fitzpatrick_scale: true,
    category: "people"
  }, Qc = {
    keywords: [
      "painter",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u{1F3A8}",
    fitzpatrick_scale: true,
    category: "people"
  }, ei = {
    keywords: [
      "fireman",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u{1F692}",
    fitzpatrick_scale: true,
    category: "people"
  }, ai = {
    keywords: [
      "fireman",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u{1F692}",
    fitzpatrick_scale: true,
    category: "people"
  }, ti = {
    keywords: [
      "aviator",
      "plane",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u2708\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, ri = {
    keywords: [
      "aviator",
      "plane",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u2708\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, si = {
    keywords: [
      "space",
      "rocket",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u{1F680}",
    fitzpatrick_scale: true,
    category: "people"
  }, oi = {
    keywords: [
      "space",
      "rocket",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u{1F680}",
    fitzpatrick_scale: true,
    category: "people"
  }, ni = {
    keywords: [
      "justice",
      "court",
      "woman",
      "human"
    ],
    char: "\u{1F469}\u200D\u2696\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, ci = {
    keywords: [
      "justice",
      "court",
      "man",
      "human"
    ],
    char: "\u{1F468}\u200D\u2696\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, ii = {
    keywords: [
      "woman",
      "female",
      "good",
      "heroine",
      "superpowers"
    ],
    char: "\u{1F9B8}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, li = {
    keywords: [
      "man",
      "male",
      "good",
      "hero",
      "superpowers"
    ],
    char: "\u{1F9B8}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, fi = {
    keywords: [
      "woman",
      "female",
      "evil",
      "bad",
      "criminal",
      "heroine",
      "superpowers"
    ],
    char: "\u{1F9B9}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, ui = {
    keywords: [
      "man",
      "male",
      "evil",
      "bad",
      "criminal",
      "hero",
      "superpowers"
    ],
    char: "\u{1F9B9}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, hi = {
    keywords: [
      "woman",
      "female",
      "xmas",
      "mother christmas"
    ],
    char: "\u{1F936}",
    fitzpatrick_scale: true,
    category: "people"
  }, di = {
    keywords: [
      "festival",
      "man",
      "male",
      "xmas",
      "father christmas"
    ],
    char: "\u{1F385}",
    fitzpatrick_scale: true,
    category: "people"
  }, pi = {
    keywords: [
      "woman",
      "female",
      "mage",
      "witch"
    ],
    char: "\u{1F9D9}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, mi = {
    keywords: [
      "man",
      "male",
      "mage",
      "sorcerer"
    ],
    char: "\u{1F9D9}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, yi = {
    keywords: [
      "woman",
      "female"
    ],
    char: "\u{1F9DD}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, gi = {
    keywords: [
      "man",
      "male"
    ],
    char: "\u{1F9DD}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, ki = {
    keywords: [
      "woman",
      "female"
    ],
    char: "\u{1F9DB}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, _i = {
    keywords: [
      "man",
      "male",
      "dracula"
    ],
    char: "\u{1F9DB}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, wi = {
    keywords: [
      "woman",
      "female",
      "undead",
      "walking dead"
    ],
    char: "\u{1F9DF}\u200D\u2640\uFE0F",
    fitzpatrick_scale: false,
    category: "people"
  }, bi = {
    keywords: [
      "man",
      "male",
      "dracula",
      "undead",
      "walking dead"
    ],
    char: "\u{1F9DF}\u200D\u2642\uFE0F",
    fitzpatrick_scale: false,
    category: "people"
  }, vi = {
    keywords: [
      "woman",
      "female"
    ],
    char: "\u{1F9DE}\u200D\u2640\uFE0F",
    fitzpatrick_scale: false,
    category: "people"
  }, zi = {
    keywords: [
      "man",
      "male"
    ],
    char: "\u{1F9DE}\u200D\u2642\uFE0F",
    fitzpatrick_scale: false,
    category: "people"
  }, xi = {
    keywords: [
      "woman",
      "female",
      "merwoman",
      "ariel"
    ],
    char: "\u{1F9DC}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Si = {
    keywords: [
      "man",
      "male",
      "triton"
    ],
    char: "\u{1F9DC}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Ai = {
    keywords: [
      "woman",
      "female"
    ],
    char: "\u{1F9DA}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Mi = {
    keywords: [
      "man",
      "male"
    ],
    char: "\u{1F9DA}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Ti = {
    keywords: [
      "heaven",
      "wings",
      "halo"
    ],
    char: "\u{1F47C}",
    fitzpatrick_scale: true,
    category: "people"
  }, qi = {
    keywords: [
      "baby"
    ],
    char: "\u{1F930}",
    fitzpatrick_scale: true,
    category: "people"
  }, ji = {
    keywords: [
      "nursing",
      "baby"
    ],
    char: "\u{1F931}",
    fitzpatrick_scale: true,
    category: "people"
  }, Di = {
    keywords: [
      "girl",
      "woman",
      "female",
      "blond",
      "crown",
      "royal",
      "queen"
    ],
    char: "\u{1F478}",
    fitzpatrick_scale: true,
    category: "people"
  }, Bi = {
    keywords: [
      "boy",
      "man",
      "male",
      "crown",
      "royal",
      "king"
    ],
    char: "\u{1F934}",
    fitzpatrick_scale: true,
    category: "people"
  }, Ci = {
    keywords: [
      "couple",
      "marriage",
      "wedding",
      "woman",
      "bride"
    ],
    char: "\u{1F470}",
    fitzpatrick_scale: true,
    category: "people"
  }, Ei = {
    keywords: [
      "couple",
      "marriage",
      "wedding",
      "groom"
    ],
    char: "\u{1F935}",
    fitzpatrick_scale: true,
    category: "people"
  }, Ii = {
    keywords: [
      "woman",
      "walking",
      "exercise",
      "race",
      "running",
      "female"
    ],
    char: "\u{1F3C3}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Ni = {
    keywords: [
      "man",
      "walking",
      "exercise",
      "race",
      "running"
    ],
    char: "\u{1F3C3}",
    fitzpatrick_scale: true,
    category: "people"
  }, Ri = {
    keywords: [
      "human",
      "feet",
      "steps",
      "woman",
      "female"
    ],
    char: "\u{1F6B6}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Fi = {
    keywords: [
      "human",
      "feet",
      "steps"
    ],
    char: "\u{1F6B6}",
    fitzpatrick_scale: true,
    category: "people"
  }, Oi = {
    keywords: [
      "female",
      "girl",
      "woman",
      "fun"
    ],
    char: "\u{1F483}",
    fitzpatrick_scale: true,
    category: "people"
  }, Hi = {
    keywords: [
      "male",
      "boy",
      "fun",
      "dancer"
    ],
    char: "\u{1F57A}",
    fitzpatrick_scale: true,
    category: "people"
  }, Pi = {
    keywords: [
      "female",
      "bunny",
      "women",
      "girls"
    ],
    char: "\u{1F46F}",
    fitzpatrick_scale: false,
    category: "people"
  }, Li = {
    keywords: [
      "male",
      "bunny",
      "men",
      "boys"
    ],
    char: "\u{1F46F}\u200D\u2642\uFE0F",
    fitzpatrick_scale: false,
    category: "people"
  }, Gi = {
    keywords: [
      "pair",
      "people",
      "human",
      "love",
      "date",
      "dating",
      "like",
      "affection",
      "valentines",
      "marriage"
    ],
    char: "\u{1F46B}",
    fitzpatrick_scale: false,
    category: "people"
  }, Ui = {
    keywords: [
      "pair",
      "couple",
      "love",
      "like",
      "bromance",
      "friendship",
      "people",
      "human"
    ],
    char: "\u{1F46C}",
    fitzpatrick_scale: false,
    category: "people"
  }, $i = {
    keywords: [
      "pair",
      "friendship",
      "couple",
      "love",
      "like",
      "female",
      "people",
      "human"
    ],
    char: "\u{1F46D}",
    fitzpatrick_scale: false,
    category: "people"
  }, Vi = {
    keywords: [
      "woman",
      "female",
      "girl"
    ],
    char: "\u{1F647}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Xi = {
    keywords: [
      "man",
      "male",
      "boy"
    ],
    char: "\u{1F647}",
    fitzpatrick_scale: true,
    category: "people"
  }, Wi = {
    keywords: [
      "man",
      "male",
      "boy",
      "disbelief"
    ],
    char: "\u{1F926}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Yi = {
    keywords: [
      "woman",
      "female",
      "girl",
      "disbelief"
    ],
    char: "\u{1F926}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Zi = {
    keywords: [
      "woman",
      "female",
      "girl",
      "confused",
      "indifferent",
      "doubt"
    ],
    char: "\u{1F937}",
    fitzpatrick_scale: true,
    category: "people"
  }, Ki = {
    keywords: [
      "man",
      "male",
      "boy",
      "confused",
      "indifferent",
      "doubt"
    ],
    char: "\u{1F937}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, Ji = {
    keywords: [
      "female",
      "girl",
      "woman",
      "human",
      "information"
    ],
    char: "\u{1F481}",
    fitzpatrick_scale: true,
    category: "people"
  }, Qi = {
    keywords: [
      "male",
      "boy",
      "man",
      "human",
      "information"
    ],
    char: "\u{1F481}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, el = {
    keywords: [
      "female",
      "girl",
      "woman",
      "nope"
    ],
    char: "\u{1F645}",
    fitzpatrick_scale: true,
    category: "people"
  }, al = {
    keywords: [
      "male",
      "boy",
      "man",
      "nope"
    ],
    char: "\u{1F645}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, tl = {
    keywords: [
      "women",
      "girl",
      "female",
      "pink",
      "human",
      "woman"
    ],
    char: "\u{1F646}",
    fitzpatrick_scale: true,
    category: "people"
  }, rl = {
    keywords: [
      "men",
      "boy",
      "male",
      "blue",
      "human",
      "man"
    ],
    char: "\u{1F646}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, sl = {
    keywords: [
      "female",
      "girl",
      "woman"
    ],
    char: "\u{1F64B}",
    fitzpatrick_scale: true,
    category: "people"
  }, ol = {
    keywords: [
      "male",
      "boy",
      "man"
    ],
    char: "\u{1F64B}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, nl = {
    keywords: [
      "female",
      "girl",
      "woman"
    ],
    char: "\u{1F64E}",
    fitzpatrick_scale: true,
    category: "people"
  }, cl = {
    keywords: [
      "male",
      "boy",
      "man"
    ],
    char: "\u{1F64E}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, il = {
    keywords: [
      "female",
      "girl",
      "woman",
      "sad",
      "depressed",
      "discouraged",
      "unhappy"
    ],
    char: "\u{1F64D}",
    fitzpatrick_scale: true,
    category: "people"
  }, ll = {
    keywords: [
      "male",
      "boy",
      "man",
      "sad",
      "depressed",
      "discouraged",
      "unhappy"
    ],
    char: "\u{1F64D}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, fl = {
    keywords: [
      "female",
      "girl",
      "woman"
    ],
    char: "\u{1F487}",
    fitzpatrick_scale: true,
    category: "people"
  }, ul = {
    keywords: [
      "male",
      "boy",
      "man"
    ],
    char: "\u{1F487}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, hl = {
    keywords: [
      "female",
      "girl",
      "woman",
      "head"
    ],
    char: "\u{1F486}",
    fitzpatrick_scale: true,
    category: "people"
  }, dl = {
    keywords: [
      "male",
      "boy",
      "man",
      "head"
    ],
    char: "\u{1F486}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, pl = {
    keywords: [
      "female",
      "woman",
      "spa",
      "steamroom",
      "sauna"
    ],
    char: "\u{1F9D6}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, ml = {
    keywords: [
      "male",
      "man",
      "spa",
      "steamroom",
      "sauna"
    ],
    char: "\u{1F9D6}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "people"
  }, yl = {
    keywords: [
      "pair",
      "love",
      "like",
      "affection",
      "human",
      "dating",
      "valentines",
      "marriage"
    ],
    char: "\u{1F491}",
    fitzpatrick_scale: false,
    category: "people"
  }, gl = {
    keywords: [
      "pair",
      "love",
      "like",
      "affection",
      "human",
      "dating",
      "valentines",
      "marriage"
    ],
    char: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}",
    fitzpatrick_scale: false,
    category: "people"
  }, kl = {
    keywords: [
      "pair",
      "love",
      "like",
      "affection",
      "human",
      "dating",
      "valentines",
      "marriage"
    ],
    char: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}",
    fitzpatrick_scale: false,
    category: "people"
  }, _l = {
    keywords: [
      "pair",
      "valentines",
      "love",
      "like",
      "dating",
      "marriage"
    ],
    char: "\u{1F48F}",
    fitzpatrick_scale: false,
    category: "people"
  }, wl = {
    keywords: [
      "pair",
      "valentines",
      "love",
      "like",
      "dating",
      "marriage"
    ],
    char: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}",
    fitzpatrick_scale: false,
    category: "people"
  }, bl = {
    keywords: [
      "pair",
      "valentines",
      "love",
      "like",
      "dating",
      "marriage"
    ],
    char: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
    fitzpatrick_scale: false,
    category: "people"
  }, vl = {
    keywords: [
      "home",
      "parents",
      "child",
      "mom",
      "dad",
      "father",
      "mother",
      "people",
      "human"
    ],
    char: "\u{1F46A}",
    fitzpatrick_scale: false,
    category: "people"
  }, zl = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "child"
    ],
    char: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
    fitzpatrick_scale: false,
    category: "people"
  }, xl = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, Sl = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, Al = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
    fitzpatrick_scale: false,
    category: "people"
  }, Ml = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, Tl = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}",
    fitzpatrick_scale: false,
    category: "people"
  }, ql = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, jl = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, Dl = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
    fitzpatrick_scale: false,
    category: "people"
  }, Bl = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, Cl = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}",
    fitzpatrick_scale: false,
    category: "people"
  }, El = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, Il = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, Nl = {
    keywords: [
      "home",
      "parents",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
    fitzpatrick_scale: false,
    category: "people"
  }, Rl = {
    keywords: [
      "home",
      "parent",
      "people",
      "human",
      "child"
    ],
    char: "\u{1F469}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, Fl = {
    keywords: [
      "home",
      "parent",
      "people",
      "human",
      "child"
    ],
    char: "\u{1F469}\u200D\u{1F467}",
    fitzpatrick_scale: false,
    category: "people"
  }, Ol = {
    keywords: [
      "home",
      "parent",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, Hl = {
    keywords: [
      "home",
      "parent",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, Pl = {
    keywords: [
      "home",
      "parent",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
    fitzpatrick_scale: false,
    category: "people"
  }, Ll = {
    keywords: [
      "home",
      "parent",
      "people",
      "human",
      "child"
    ],
    char: "\u{1F468}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, Gl = {
    keywords: [
      "home",
      "parent",
      "people",
      "human",
      "child"
    ],
    char: "\u{1F468}\u200D\u{1F467}",
    fitzpatrick_scale: false,
    category: "people"
  }, Ul = {
    keywords: [
      "home",
      "parent",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, $l = {
    keywords: [
      "home",
      "parent",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
    fitzpatrick_scale: false,
    category: "people"
  }, Vl = {
    keywords: [
      "home",
      "parent",
      "people",
      "human",
      "children"
    ],
    char: "\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
    fitzpatrick_scale: false,
    category: "people"
  }, Xl = {
    keywords: [
      "ball",
      "crochet",
      "knit"
    ],
    char: "\u{1F9F6}",
    fitzpatrick_scale: false,
    category: "people"
  }, Wl = {
    keywords: [
      "needle",
      "sewing",
      "spool",
      "string"
    ],
    char: "\u{1F9F5}",
    fitzpatrick_scale: false,
    category: "people"
  }, Yl = {
    keywords: [
      "jacket"
    ],
    char: "\u{1F9E5}",
    fitzpatrick_scale: false,
    category: "people"
  }, Zl = {
    keywords: [
      "doctor",
      "experiment",
      "scientist",
      "chemist"
    ],
    char: "\u{1F97C}",
    fitzpatrick_scale: false,
    category: "people"
  }, Kl = {
    keywords: [
      "fashion",
      "shopping_bags",
      "female"
    ],
    char: "\u{1F45A}",
    fitzpatrick_scale: false,
    category: "people"
  }, Jl = {
    keywords: [
      "fashion",
      "cloth",
      "casual",
      "shirt",
      "tee"
    ],
    char: "\u{1F455}",
    fitzpatrick_scale: false,
    category: "people"
  }, Ql = {
    keywords: [
      "fashion",
      "shopping"
    ],
    char: "\u{1F456}",
    fitzpatrick_scale: false,
    category: "people"
  }, ef = {
    keywords: [
      "shirt",
      "suitup",
      "formal",
      "fashion",
      "cloth",
      "business"
    ],
    char: "\u{1F454}",
    fitzpatrick_scale: false,
    category: "people"
  }, af = {
    keywords: [
      "clothes",
      "fashion",
      "shopping"
    ],
    char: "\u{1F457}",
    fitzpatrick_scale: false,
    category: "people"
  }, tf = {
    keywords: [
      "swimming",
      "female",
      "woman",
      "girl",
      "fashion",
      "beach",
      "summer"
    ],
    char: "\u{1F459}",
    fitzpatrick_scale: false,
    category: "people"
  }, rf = {
    keywords: [
      "dress",
      "fashion",
      "women",
      "female",
      "japanese"
    ],
    char: "\u{1F458}",
    fitzpatrick_scale: false,
    category: "people"
  }, sf = {
    keywords: [
      "female",
      "girl",
      "fashion",
      "woman"
    ],
    char: "\u{1F484}",
    fitzpatrick_scale: false,
    category: "people"
  }, of = {
    keywords: [
      "face",
      "lips",
      "love",
      "like",
      "affection",
      "valentines"
    ],
    char: "\u{1F48B}",
    fitzpatrick_scale: false,
    category: "people"
  }, nf = {
    keywords: [
      "feet",
      "tracking",
      "walking",
      "beach"
    ],
    char: "\u{1F463}",
    fitzpatrick_scale: false,
    category: "people"
  }, cf = {
    keywords: [
      "ballet",
      "slip-on",
      "slipper"
    ],
    char: "\u{1F97F}",
    fitzpatrick_scale: false,
    category: "people"
  }, lf = {
    keywords: [
      "fashion",
      "shoes",
      "female",
      "pumps",
      "stiletto"
    ],
    char: "\u{1F460}",
    fitzpatrick_scale: false,
    category: "people"
  }, ff = {
    keywords: [
      "shoes",
      "fashion",
      "flip flops"
    ],
    char: "\u{1F461}",
    fitzpatrick_scale: false,
    category: "people"
  }, uf = {
    keywords: [
      "shoes",
      "fashion"
    ],
    char: "\u{1F462}",
    fitzpatrick_scale: false,
    category: "people"
  }, hf = {
    keywords: [
      "fashion",
      "male"
    ],
    char: "\u{1F45E}",
    fitzpatrick_scale: false,
    category: "people"
  }, df = {
    keywords: [
      "shoes",
      "sports",
      "sneakers"
    ],
    char: "\u{1F45F}",
    fitzpatrick_scale: false,
    category: "people"
  }, pf = {
    keywords: [
      "backpacking",
      "camping",
      "hiking"
    ],
    char: "\u{1F97E}",
    fitzpatrick_scale: false,
    category: "people"
  }, mf = {
    keywords: [
      "stockings",
      "clothes"
    ],
    char: "\u{1F9E6}",
    fitzpatrick_scale: false,
    category: "people"
  }, yf = {
    keywords: [
      "hands",
      "winter",
      "clothes"
    ],
    char: "\u{1F9E4}",
    fitzpatrick_scale: false,
    category: "people"
  }, gf = {
    keywords: [
      "neck",
      "winter",
      "clothes"
    ],
    char: "\u{1F9E3}",
    fitzpatrick_scale: false,
    category: "people"
  }, kf = {
    keywords: [
      "fashion",
      "accessories",
      "female",
      "lady",
      "spring"
    ],
    char: "\u{1F452}",
    fitzpatrick_scale: false,
    category: "people"
  }, _f = {
    keywords: [
      "magic",
      "gentleman",
      "classy",
      "circus"
    ],
    char: "\u{1F3A9}",
    fitzpatrick_scale: false,
    category: "people"
  }, wf = {
    keywords: [
      "cap",
      "baseball"
    ],
    char: "\u{1F9E2}",
    fitzpatrick_scale: false,
    category: "people"
  }, bf = {
    keywords: [
      "construction",
      "build"
    ],
    char: "\u26D1",
    fitzpatrick_scale: false,
    category: "people"
  }, vf = {
    keywords: [
      "school",
      "college",
      "degree",
      "university",
      "graduation",
      "cap",
      "hat",
      "legal",
      "learn",
      "education"
    ],
    char: "\u{1F393}",
    fitzpatrick_scale: false,
    category: "people"
  }, zf = {
    keywords: [
      "king",
      "kod",
      "leader",
      "royalty",
      "lord"
    ],
    char: "\u{1F451}",
    fitzpatrick_scale: false,
    category: "people"
  }, xf = {
    keywords: [
      "student",
      "education",
      "bag",
      "backpack"
    ],
    char: "\u{1F392}",
    fitzpatrick_scale: false,
    category: "people"
  }, Sf = {
    keywords: [
      "packing",
      "travel"
    ],
    char: "\u{1F9F3}",
    fitzpatrick_scale: false,
    category: "people"
  }, Af = {
    keywords: [
      "bag",
      "accessories",
      "shopping"
    ],
    char: "\u{1F45D}",
    fitzpatrick_scale: false,
    category: "people"
  }, Mf = {
    keywords: [
      "fashion",
      "accessories",
      "money",
      "sales",
      "shopping"
    ],
    char: "\u{1F45B}",
    fitzpatrick_scale: false,
    category: "people"
  }, Tf = {
    keywords: [
      "fashion",
      "accessory",
      "accessories",
      "shopping"
    ],
    char: "\u{1F45C}",
    fitzpatrick_scale: false,
    category: "people"
  }, qf = {
    keywords: [
      "business",
      "documents",
      "work",
      "law",
      "legal",
      "job",
      "career"
    ],
    char: "\u{1F4BC}",
    fitzpatrick_scale: false,
    category: "people"
  }, jf = {
    keywords: [
      "fashion",
      "accessories",
      "eyesight",
      "nerdy",
      "dork",
      "geek"
    ],
    char: "\u{1F453}",
    fitzpatrick_scale: false,
    category: "people"
  }, Df = {
    keywords: [
      "face",
      "cool",
      "accessories"
    ],
    char: "\u{1F576}",
    fitzpatrick_scale: false,
    category: "people"
  }, Bf = {
    keywords: [
      "eyes",
      "protection",
      "safety"
    ],
    char: "\u{1F97D}",
    fitzpatrick_scale: false,
    category: "people"
  }, Cf = {
    keywords: [
      "wedding",
      "propose",
      "marriage",
      "valentines",
      "diamond",
      "fashion",
      "jewelry",
      "gem",
      "engagement"
    ],
    char: "\u{1F48D}",
    fitzpatrick_scale: false,
    category: "people"
  }, Ef = {
    keywords: [
      "weather",
      "rain",
      "drizzle"
    ],
    char: "\u{1F302}",
    fitzpatrick_scale: false,
    category: "people"
  }, If = {
    keywords: [
      "animal",
      "friend",
      "nature",
      "woof",
      "puppy",
      "pet",
      "faithful"
    ],
    char: "\u{1F436}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Nf = {
    keywords: [
      "animal",
      "meow",
      "nature",
      "pet",
      "kitten"
    ],
    char: "\u{1F431}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Rf = {
    keywords: [
      "animal",
      "nature",
      "cheese_wedge",
      "rodent"
    ],
    char: "\u{1F42D}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Ff = {
    keywords: [
      "animal",
      "nature"
    ],
    char: "\u{1F439}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Of = {
    keywords: [
      "animal",
      "nature",
      "pet",
      "spring",
      "magic",
      "bunny"
    ],
    char: "\u{1F430}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Hf = {
    keywords: [
      "animal",
      "nature",
      "face"
    ],
    char: "\u{1F98A}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Pf = {
    keywords: [
      "animal",
      "nature",
      "wild"
    ],
    char: "\u{1F43B}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Lf = {
    keywords: [
      "animal",
      "nature",
      "panda"
    ],
    char: "\u{1F43C}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Gf = {
    keywords: [
      "animal",
      "nature"
    ],
    char: "\u{1F428}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Uf = {
    keywords: [
      "animal",
      "cat",
      "danger",
      "wild",
      "nature",
      "roar"
    ],
    char: "\u{1F42F}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, $f = {
    keywords: [
      "animal",
      "nature"
    ],
    char: "\u{1F981}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Vf = {
    keywords: [
      "beef",
      "ox",
      "animal",
      "nature",
      "moo",
      "milk"
    ],
    char: "\u{1F42E}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Xf = {
    keywords: [
      "animal",
      "oink",
      "nature"
    ],
    char: "\u{1F437}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Wf = {
    keywords: [
      "animal",
      "oink"
    ],
    char: "\u{1F43D}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Yf = {
    keywords: [
      "animal",
      "nature",
      "croak",
      "toad"
    ],
    char: "\u{1F438}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Zf = {
    keywords: [
      "animal",
      "nature",
      "ocean",
      "sea"
    ],
    char: "\u{1F991}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Kf = {
    keywords: [
      "animal",
      "creature",
      "ocean",
      "sea",
      "nature",
      "beach"
    ],
    char: "\u{1F419}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Jf = {
    keywords: [
      "animal",
      "ocean",
      "nature",
      "seafood"
    ],
    char: "\u{1F990}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Qf = {
    keywords: [
      "animal",
      "nature",
      "circus"
    ],
    char: "\u{1F435}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, eu = {
    keywords: [
      "animal",
      "nature",
      "circus"
    ],
    char: "\u{1F98D}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, au = {
    keywords: [
      "monkey",
      "animal",
      "nature",
      "haha"
    ],
    char: "\u{1F648}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, tu = {
    keywords: [
      "animal",
      "monkey",
      "nature"
    ],
    char: "\u{1F649}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, ru = {
    keywords: [
      "monkey",
      "animal",
      "nature",
      "omg"
    ],
    char: "\u{1F64A}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, su = {
    keywords: [
      "animal",
      "nature",
      "banana",
      "circus"
    ],
    char: "\u{1F412}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, ou = {
    keywords: [
      "animal",
      "cluck",
      "nature",
      "bird"
    ],
    char: "\u{1F414}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, nu = {
    keywords: [
      "animal",
      "nature"
    ],
    char: "\u{1F427}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, cu = {
    keywords: [
      "animal",
      "nature",
      "fly",
      "tweet",
      "spring"
    ],
    char: "\u{1F426}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, iu = {
    keywords: [
      "animal",
      "chicken",
      "bird"
    ],
    char: "\u{1F424}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, lu = {
    keywords: [
      "animal",
      "chicken",
      "egg",
      "born",
      "baby",
      "bird"
    ],
    char: "\u{1F423}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, fu = {
    keywords: [
      "animal",
      "chicken",
      "baby",
      "bird"
    ],
    char: "\u{1F425}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, uu = {
    keywords: [
      "animal",
      "nature",
      "bird",
      "mallard"
    ],
    char: "\u{1F986}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, hu = {
    keywords: [
      "animal",
      "nature",
      "bird"
    ],
    char: "\u{1F985}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, du = {
    keywords: [
      "animal",
      "nature",
      "bird",
      "hoot"
    ],
    char: "\u{1F989}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, pu = {
    keywords: [
      "animal",
      "nature",
      "blind",
      "vampire"
    ],
    char: "\u{1F987}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, mu = {
    keywords: [
      "animal",
      "nature",
      "wild"
    ],
    char: "\u{1F43A}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, yu = {
    keywords: [
      "animal",
      "nature"
    ],
    char: "\u{1F417}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, gu = {
    keywords: [
      "animal",
      "brown",
      "nature"
    ],
    char: "\u{1F434}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, ku = {
    keywords: [
      "animal",
      "nature",
      "mystical"
    ],
    char: "\u{1F984}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, _u = {
    keywords: [
      "animal",
      "insect",
      "nature",
      "bug",
      "spring",
      "honey"
    ],
    char: "\u{1F41D}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, wu = {
    keywords: [
      "animal",
      "insect",
      "nature",
      "worm"
    ],
    char: "\u{1F41B}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, bu = {
    keywords: [
      "animal",
      "insect",
      "nature",
      "caterpillar"
    ],
    char: "\u{1F98B}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, vu = {
    keywords: [
      "slow",
      "animal",
      "shell"
    ],
    char: "\u{1F40C}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, zu = {
    keywords: [
      "animal",
      "insect",
      "nature",
      "ladybug"
    ],
    char: "\u{1F41E}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, xu = {
    keywords: [
      "animal",
      "insect",
      "nature",
      "bug"
    ],
    char: "\u{1F41C}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Su = {
    keywords: [
      "animal",
      "cricket",
      "chirp"
    ],
    char: "\u{1F997}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Au = {
    keywords: [
      "animal",
      "arachnid"
    ],
    char: "\u{1F577}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Mu = {
    keywords: [
      "animal",
      "arachnid"
    ],
    char: "\u{1F982}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Tu = {
    keywords: [
      "animal",
      "crustacean"
    ],
    char: "\u{1F980}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, qu = {
    keywords: [
      "animal",
      "evil",
      "nature",
      "hiss",
      "python"
    ],
    char: "\u{1F40D}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, ju = {
    keywords: [
      "animal",
      "nature",
      "reptile"
    ],
    char: "\u{1F98E}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Du = {
    keywords: [
      "animal",
      "nature",
      "dinosaur",
      "brachiosaurus",
      "brontosaurus",
      "diplodocus",
      "extinct"
    ],
    char: "\u{1F995}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Bu = {
    keywords: [
      "animal",
      "slow",
      "nature",
      "tortoise"
    ],
    char: "\u{1F422}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Cu = {
    keywords: [
      "animal",
      "swim",
      "ocean",
      "beach",
      "nemo"
    ],
    char: "\u{1F420}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Eu = {
    keywords: [
      "animal",
      "food",
      "nature"
    ],
    char: "\u{1F41F}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Iu = {
    keywords: [
      "animal",
      "nature",
      "food",
      "sea",
      "ocean"
    ],
    char: "\u{1F421}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Nu = {
    keywords: [
      "animal",
      "nature",
      "fish",
      "sea",
      "ocean",
      "flipper",
      "fins",
      "beach"
    ],
    char: "\u{1F42C}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Ru = {
    keywords: [
      "animal",
      "nature",
      "fish",
      "sea",
      "ocean",
      "jaws",
      "fins",
      "beach"
    ],
    char: "\u{1F988}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Fu = {
    keywords: [
      "animal",
      "nature",
      "sea",
      "ocean"
    ],
    char: "\u{1F433}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Ou = {
    keywords: [
      "animal",
      "nature",
      "sea",
      "ocean"
    ],
    char: "\u{1F40B}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Hu = {
    keywords: [
      "animal",
      "nature",
      "reptile",
      "lizard",
      "alligator"
    ],
    char: "\u{1F40A}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Pu = {
    keywords: [
      "animal",
      "nature"
    ],
    char: "\u{1F406}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Lu = {
    keywords: [
      "animal",
      "nature",
      "stripes",
      "safari"
    ],
    char: "\u{1F993}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Gu = {
    keywords: [
      "animal",
      "nature",
      "roar"
    ],
    char: "\u{1F405}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Uu = {
    keywords: [
      "animal",
      "nature",
      "ox",
      "cow"
    ],
    char: "\u{1F403}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, $u = {
    keywords: [
      "animal",
      "cow",
      "beef"
    ],
    char: "\u{1F402}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Vu = {
    keywords: [
      "beef",
      "ox",
      "animal",
      "nature",
      "moo",
      "milk"
    ],
    char: "\u{1F404}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Xu = {
    keywords: [
      "animal",
      "nature",
      "horns",
      "venison"
    ],
    char: "\u{1F98C}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Wu = {
    keywords: [
      "animal",
      "hot",
      "desert",
      "hump"
    ],
    char: "\u{1F42A}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Yu = {
    keywords: [
      "animal",
      "nature",
      "hot",
      "desert",
      "hump"
    ],
    char: "\u{1F42B}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Zu = {
    keywords: [
      "animal",
      "nature",
      "spots",
      "safari"
    ],
    char: "\u{1F992}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Ku = {
    keywords: [
      "animal",
      "nature",
      "nose",
      "th",
      "circus"
    ],
    char: "\u{1F418}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Ju = {
    keywords: [
      "animal",
      "nature",
      "horn"
    ],
    char: "\u{1F98F}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Qu = {
    keywords: [
      "animal",
      "nature"
    ],
    char: "\u{1F410}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, eh = {
    keywords: [
      "animal",
      "sheep",
      "nature"
    ],
    char: "\u{1F40F}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, ah = {
    keywords: [
      "animal",
      "nature",
      "wool",
      "shipit"
    ],
    char: "\u{1F411}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, th = {
    keywords: [
      "animal",
      "gamble",
      "luck"
    ],
    char: "\u{1F40E}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, rh = {
    keywords: [
      "animal",
      "nature"
    ],
    char: "\u{1F416}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, sh = {
    keywords: [
      "animal",
      "mouse",
      "rodent"
    ],
    char: "\u{1F400}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, oh = {
    keywords: [
      "animal",
      "nature",
      "rodent"
    ],
    char: "\u{1F401}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, nh = {
    keywords: [
      "animal",
      "nature",
      "chicken"
    ],
    char: "\u{1F413}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, ch = {
    keywords: [
      "animal",
      "bird"
    ],
    char: "\u{1F983}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, ih = {
    keywords: [
      "animal",
      "bird"
    ],
    char: "\u{1F54A}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, lh = {
    keywords: [
      "animal",
      "nature",
      "friend",
      "doge",
      "pet",
      "faithful"
    ],
    char: "\u{1F415}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, fh = {
    keywords: [
      "dog",
      "animal",
      "101",
      "nature",
      "pet"
    ],
    char: "\u{1F429}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, uh = {
    keywords: [
      "animal",
      "meow",
      "pet",
      "cats"
    ],
    char: "\u{1F408}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, hh = {
    keywords: [
      "animal",
      "nature",
      "pet",
      "magic",
      "spring"
    ],
    char: "\u{1F407}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, dh = {
    keywords: [
      "animal",
      "nature",
      "rodent",
      "squirrel"
    ],
    char: "\u{1F43F}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, ph = {
    keywords: [
      "animal",
      "nature",
      "spiny"
    ],
    char: "\u{1F994}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, mh = {
    keywords: [
      "animal",
      "nature"
    ],
    char: "\u{1F99D}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, yh = {
    keywords: [
      "animal",
      "nature",
      "alpaca"
    ],
    char: "\u{1F999}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, gh = {
    keywords: [
      "animal",
      "nature"
    ],
    char: "\u{1F99B}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, kh = {
    keywords: [
      "animal",
      "nature",
      "australia",
      "joey",
      "hop",
      "marsupial"
    ],
    char: "\u{1F998}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, _h = {
    keywords: [
      "animal",
      "nature",
      "honey"
    ],
    char: "\u{1F9A1}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, wh = {
    keywords: [
      "animal",
      "nature",
      "bird"
    ],
    char: "\u{1F9A2}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, bh = {
    keywords: [
      "animal",
      "nature",
      "peahen",
      "bird"
    ],
    char: "\u{1F99A}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, vh = {
    keywords: [
      "animal",
      "nature",
      "bird",
      "pirate",
      "talk"
    ],
    char: "\u{1F99C}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, zh = {
    keywords: [
      "animal",
      "nature",
      "bisque",
      "claws",
      "seafood"
    ],
    char: "\u{1F99E}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, xh = {
    keywords: [
      "animal",
      "nature",
      "insect",
      "malaria"
    ],
    char: "\u{1F99F}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Sh = {
    keywords: [
      "animal",
      "tracking",
      "footprints",
      "dog",
      "cat",
      "pet",
      "feet"
    ],
    char: "\u{1F43E}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Ah = {
    keywords: [
      "animal",
      "myth",
      "nature",
      "chinese",
      "green"
    ],
    char: "\u{1F409}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Mh = {
    keywords: [
      "animal",
      "myth",
      "nature",
      "chinese",
      "green"
    ],
    char: "\u{1F432}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Th = {
    keywords: [
      "vegetable",
      "plant",
      "nature"
    ],
    char: "\u{1F335}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, qh = {
    keywords: [
      "festival",
      "vacation",
      "december",
      "xmas",
      "celebration"
    ],
    char: "\u{1F384}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, jh = {
    keywords: [
      "plant",
      "nature"
    ],
    char: "\u{1F332}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Dh = {
    keywords: [
      "plant",
      "nature"
    ],
    char: "\u{1F333}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Bh = {
    keywords: [
      "plant",
      "vegetable",
      "nature",
      "summer",
      "beach",
      "mojito",
      "tropical"
    ],
    char: "\u{1F334}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Ch = {
    keywords: [
      "plant",
      "nature",
      "grass",
      "lawn",
      "spring"
    ],
    char: "\u{1F331}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Eh = {
    keywords: [
      "vegetable",
      "plant",
      "medicine",
      "weed",
      "grass",
      "lawn"
    ],
    char: "\u{1F33F}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Ih = {
    keywords: [
      "vegetable",
      "plant",
      "nature",
      "irish",
      "clover"
    ],
    char: "\u2618",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Nh = {
    keywords: [
      "vegetable",
      "plant",
      "nature",
      "lucky",
      "irish"
    ],
    char: "\u{1F340}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Rh = {
    keywords: [
      "plant",
      "nature",
      "vegetable",
      "panda",
      "pine_decoration"
    ],
    char: "\u{1F38D}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Fh = {
    keywords: [
      "plant",
      "nature",
      "branch",
      "summer"
    ],
    char: "\u{1F38B}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Oh = {
    keywords: [
      "nature",
      "plant",
      "tree",
      "vegetable",
      "grass",
      "lawn",
      "spring"
    ],
    char: "\u{1F343}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Hh = {
    keywords: [
      "nature",
      "plant",
      "vegetable",
      "leaves"
    ],
    char: "\u{1F342}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Ph = {
    keywords: [
      "nature",
      "plant",
      "vegetable",
      "ca",
      "fall"
    ],
    char: "\u{1F341}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Lh = {
    keywords: [
      "nature",
      "plant"
    ],
    char: "\u{1F33E}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Gh = {
    keywords: [
      "plant",
      "vegetable",
      "flowers",
      "beach"
    ],
    char: "\u{1F33A}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Uh = {
    keywords: [
      "nature",
      "plant",
      "fall"
    ],
    char: "\u{1F33B}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, $h = {
    keywords: [
      "flowers",
      "valentines",
      "love",
      "spring"
    ],
    char: "\u{1F339}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Vh = {
    keywords: [
      "plant",
      "nature",
      "flower"
    ],
    char: "\u{1F940}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Xh = {
    keywords: [
      "flowers",
      "plant",
      "nature",
      "summer",
      "spring"
    ],
    char: "\u{1F337}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Wh = {
    keywords: [
      "nature",
      "flowers",
      "yellow"
    ],
    char: "\u{1F33C}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Yh = {
    keywords: [
      "nature",
      "plant",
      "spring",
      "flower"
    ],
    char: "\u{1F338}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Zh = {
    keywords: [
      "flowers",
      "nature",
      "spring"
    ],
    char: "\u{1F490}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Kh = {
    keywords: [
      "plant",
      "vegetable"
    ],
    char: "\u{1F344}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Jh = {
    keywords: [
      "food",
      "squirrel"
    ],
    char: "\u{1F330}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Qh = {
    keywords: [
      "halloween",
      "light",
      "pumpkin",
      "creepy",
      "fall"
    ],
    char: "\u{1F383}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, e1 = {
    keywords: [
      "nature",
      "sea",
      "beach"
    ],
    char: "\u{1F41A}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, a1 = {
    keywords: [
      "animal",
      "insect",
      "arachnid",
      "silk"
    ],
    char: "\u{1F578}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, t1 = {
    keywords: [
      "globe",
      "world",
      "USA",
      "international"
    ],
    char: "\u{1F30E}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, r1 = {
    keywords: [
      "globe",
      "world",
      "international"
    ],
    char: "\u{1F30D}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, s1 = {
    keywords: [
      "globe",
      "world",
      "east",
      "international"
    ],
    char: "\u{1F30F}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, o1 = {
    keywords: [
      "nature",
      "yellow",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    char: "\u{1F315}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, n1 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep",
      "waxing_gibbous_moon"
    ],
    char: "\u{1F316}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, c1 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    char: "\u{1F317}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, i1 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    char: "\u{1F318}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, l1 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    char: "\u{1F311}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, f1 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    char: "\u{1F312}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, u1 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    char: "\u{1F313}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, h1 = {
    keywords: [
      "nature",
      "night",
      "sky",
      "gray",
      "twilight",
      "planet",
      "space",
      "evening",
      "sleep"
    ],
    char: "\u{1F314}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, d1 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    char: "\u{1F31A}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, p1 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    char: "\u{1F31D}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, m1 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    char: "\u{1F31B}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, y1 = {
    keywords: [
      "nature",
      "twilight",
      "planet",
      "space",
      "night",
      "evening",
      "sleep"
    ],
    char: "\u{1F31C}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, g1 = {
    keywords: [
      "nature",
      "morning",
      "sky"
    ],
    char: "\u{1F31E}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, k1 = {
    keywords: [
      "night",
      "sleep",
      "sky",
      "evening",
      "magic"
    ],
    char: "\u{1F319}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, _1 = {
    keywords: [
      "night",
      "yellow"
    ],
    char: "\u2B50",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, w1 = {
    keywords: [
      "night",
      "sparkle",
      "awesome",
      "good",
      "magic"
    ],
    char: "\u{1F31F}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, b1 = {
    keywords: [
      "star",
      "sparkle",
      "shoot",
      "magic"
    ],
    char: "\u{1F4AB}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, v1 = {
    keywords: [
      "stars",
      "shine",
      "shiny",
      "cool",
      "awesome",
      "good",
      "magic"
    ],
    char: "\u2728",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, z1 = {
    keywords: [
      "space"
    ],
    char: "\u2604",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, x1 = {
    keywords: [
      "weather",
      "nature",
      "brightness",
      "summer",
      "beach",
      "spring"
    ],
    char: "\u2600\uFE0F",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, S1 = {
    keywords: [
      "weather"
    ],
    char: "\u{1F324}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, A1 = {
    keywords: [
      "weather",
      "nature",
      "cloudy",
      "morning",
      "fall",
      "spring"
    ],
    char: "\u26C5",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, M1 = {
    keywords: [
      "weather"
    ],
    char: "\u{1F325}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, T1 = {
    keywords: [
      "weather"
    ],
    char: "\u{1F326}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, q1 = {
    keywords: [
      "weather",
      "sky"
    ],
    char: "\u2601\uFE0F",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, j1 = {
    keywords: [
      "weather"
    ],
    char: "\u{1F327}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, D1 = {
    keywords: [
      "weather",
      "lightning"
    ],
    char: "\u26C8",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, B1 = {
    keywords: [
      "weather",
      "thunder"
    ],
    char: "\u{1F329}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, C1 = {
    keywords: [
      "thunder",
      "weather",
      "lightning bolt",
      "fast"
    ],
    char: "\u26A1",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, E1 = {
    keywords: [
      "hot",
      "cook",
      "flame"
    ],
    char: "\u{1F525}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, I1 = {
    keywords: [
      "bomb",
      "explode",
      "explosion",
      "collision",
      "blown"
    ],
    char: "\u{1F4A5}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, N1 = {
    keywords: [
      "winter",
      "season",
      "cold",
      "weather",
      "christmas",
      "xmas"
    ],
    char: "\u2744\uFE0F",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, R1 = {
    keywords: [
      "weather"
    ],
    char: "\u{1F328}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, F1 = {
    keywords: [
      "winter",
      "season",
      "cold",
      "weather",
      "christmas",
      "xmas",
      "frozen",
      "without_snow"
    ],
    char: "\u26C4",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, O1 = {
    keywords: [
      "winter",
      "season",
      "cold",
      "weather",
      "christmas",
      "xmas",
      "frozen"
    ],
    char: "\u2603",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, H1 = {
    keywords: [
      "gust",
      "air"
    ],
    char: "\u{1F32C}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, P1 = {
    keywords: [
      "wind",
      "air",
      "fast",
      "shoo",
      "fart",
      "smoke",
      "puff"
    ],
    char: "\u{1F4A8}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, L1 = {
    keywords: [
      "weather",
      "cyclone",
      "twister"
    ],
    char: "\u{1F32A}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, G1 = {
    keywords: [
      "weather"
    ],
    char: "\u{1F32B}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, U1 = {
    keywords: [
      "weather",
      "spring"
    ],
    char: "\u2602",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, $1 = {
    keywords: [
      "rainy",
      "weather",
      "spring"
    ],
    char: "\u2614",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, V1 = {
    keywords: [
      "water",
      "drip",
      "faucet",
      "spring"
    ],
    char: "\u{1F4A7}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, X1 = {
    keywords: [
      "water",
      "drip",
      "oops"
    ],
    char: "\u{1F4A6}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, W1 = {
    keywords: [
      "sea",
      "water",
      "wave",
      "nature",
      "tsunami",
      "disaster"
    ],
    char: "\u{1F30A}",
    fitzpatrick_scale: false,
    category: "animals_and_nature"
  }, Y1 = {
    keywords: [
      "fruit",
      "nature"
    ],
    char: "\u{1F34F}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Z1 = {
    keywords: [
      "fruit",
      "mac",
      "school"
    ],
    char: "\u{1F34E}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, K1 = {
    keywords: [
      "fruit",
      "nature",
      "food"
    ],
    char: "\u{1F350}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, J1 = {
    keywords: [
      "food",
      "fruit",
      "nature",
      "orange"
    ],
    char: "\u{1F34A}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Q1 = {
    keywords: [
      "fruit",
      "nature"
    ],
    char: "\u{1F34B}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, ed = {
    keywords: [
      "fruit",
      "food",
      "monkey"
    ],
    char: "\u{1F34C}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, ad = {
    keywords: [
      "fruit",
      "food",
      "picnic",
      "summer"
    ],
    char: "\u{1F349}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, td = {
    keywords: [
      "fruit",
      "food",
      "wine"
    ],
    char: "\u{1F347}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, rd = {
    keywords: [
      "fruit",
      "food",
      "nature"
    ],
    char: "\u{1F353}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, sd = {
    keywords: [
      "fruit",
      "nature",
      "food"
    ],
    char: "\u{1F348}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, od = {
    keywords: [
      "food",
      "fruit"
    ],
    char: "\u{1F352}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, nd = {
    keywords: [
      "fruit",
      "nature",
      "food"
    ],
    char: "\u{1F351}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, cd = {
    keywords: [
      "fruit",
      "nature",
      "food"
    ],
    char: "\u{1F34D}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, id = {
    keywords: [
      "fruit",
      "nature",
      "food",
      "palm"
    ],
    char: "\u{1F965}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, ld = {
    keywords: [
      "fruit",
      "food"
    ],
    char: "\u{1F95D}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, fd = {
    keywords: [
      "fruit",
      "food",
      "tropical"
    ],
    char: "\u{1F96D}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, ud = {
    keywords: [
      "fruit",
      "food"
    ],
    char: "\u{1F951}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, hd = {
    keywords: [
      "fruit",
      "food",
      "vegetable"
    ],
    char: "\u{1F966}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, dd = {
    keywords: [
      "fruit",
      "vegetable",
      "nature",
      "food"
    ],
    char: "\u{1F345}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, pd = {
    keywords: [
      "vegetable",
      "nature",
      "food",
      "aubergine"
    ],
    char: "\u{1F346}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, md = {
    keywords: [
      "fruit",
      "food",
      "pickle"
    ],
    char: "\u{1F952}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, yd = {
    keywords: [
      "vegetable",
      "food",
      "orange"
    ],
    char: "\u{1F955}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, gd = {
    keywords: [
      "food",
      "spicy",
      "chilli",
      "chili"
    ],
    char: "\u{1F336}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, kd = {
    keywords: [
      "food",
      "tuber",
      "vegatable",
      "starch"
    ],
    char: "\u{1F954}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, _d = {
    keywords: [
      "food",
      "vegetable",
      "plant"
    ],
    char: "\u{1F33D}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, wd = {
    keywords: [
      "food",
      "vegetable",
      "plant",
      "bok choy",
      "cabbage",
      "kale",
      "lettuce"
    ],
    char: "\u{1F96C}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, bd = {
    keywords: [
      "food",
      "nature"
    ],
    char: "\u{1F360}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, vd = {
    keywords: [
      "food",
      "nut"
    ],
    char: "\u{1F95C}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, zd = {
    keywords: [
      "bees",
      "sweet",
      "kitchen"
    ],
    char: "\u{1F36F}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, xd = {
    keywords: [
      "food",
      "bread",
      "french"
    ],
    char: "\u{1F950}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Sd = {
    keywords: [
      "food",
      "wheat",
      "breakfast",
      "toast"
    ],
    char: "\u{1F35E}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Ad = {
    keywords: [
      "food",
      "bread",
      "french"
    ],
    char: "\u{1F956}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Md = {
    keywords: [
      "food",
      "bread",
      "bakery",
      "schmear"
    ],
    char: "\u{1F96F}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Td = {
    keywords: [
      "food",
      "bread",
      "twisted"
    ],
    char: "\u{1F968}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, qd = {
    keywords: [
      "food",
      "chadder"
    ],
    char: "\u{1F9C0}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, jd = {
    keywords: [
      "food",
      "chicken",
      "breakfast"
    ],
    char: "\u{1F95A}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Dd = {
    keywords: [
      "food",
      "breakfast",
      "pork",
      "pig",
      "meat"
    ],
    char: "\u{1F953}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Bd = {
    keywords: [
      "food",
      "cow",
      "meat",
      "cut",
      "chop",
      "lambchop",
      "porkchop"
    ],
    char: "\u{1F969}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Cd = {
    keywords: [
      "food",
      "breakfast",
      "flapjacks",
      "hotcakes"
    ],
    char: "\u{1F95E}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Ed = {
    keywords: [
      "food",
      "meat",
      "drumstick",
      "bird",
      "chicken",
      "turkey"
    ],
    char: "\u{1F357}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Id = {
    keywords: [
      "good",
      "food",
      "drumstick"
    ],
    char: "\u{1F356}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Nd = {
    keywords: [
      "skeleton"
    ],
    char: "\u{1F9B4}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Rd = {
    keywords: [
      "food",
      "animal",
      "appetizer",
      "summer"
    ],
    char: "\u{1F364}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Fd = {
    keywords: [
      "food",
      "breakfast",
      "kitchen",
      "egg"
    ],
    char: "\u{1F373}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Od = {
    keywords: [
      "meat",
      "fast food",
      "beef",
      "cheeseburger",
      "mcdonalds",
      "burger king"
    ],
    char: "\u{1F354}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Hd = {
    keywords: [
      "chips",
      "snack",
      "fast food"
    ],
    char: "\u{1F35F}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Pd = {
    keywords: [
      "food",
      "flatbread",
      "stuffed",
      "gyro"
    ],
    char: "\u{1F959}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Ld = {
    keywords: [
      "food",
      "frankfurter"
    ],
    char: "\u{1F32D}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Gd = {
    keywords: [
      "food",
      "party"
    ],
    char: "\u{1F355}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Ud = {
    keywords: [
      "food",
      "lunch",
      "bread"
    ],
    char: "\u{1F96A}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, $d = {
    keywords: [
      "food",
      "soup"
    ],
    char: "\u{1F96B}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Vd = {
    keywords: [
      "food",
      "italian",
      "noodle"
    ],
    char: "\u{1F35D}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Xd = {
    keywords: [
      "food",
      "mexican"
    ],
    char: "\u{1F32E}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Wd = {
    keywords: [
      "food",
      "mexican"
    ],
    char: "\u{1F32F}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Yd = {
    keywords: [
      "food",
      "healthy",
      "lettuce"
    ],
    char: "\u{1F957}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Zd = {
    keywords: [
      "food",
      "cooking",
      "casserole",
      "paella"
    ],
    char: "\u{1F958}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Kd = {
    keywords: [
      "food",
      "japanese",
      "noodle",
      "chopsticks"
    ],
    char: "\u{1F35C}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Jd = {
    keywords: [
      "food",
      "meat",
      "soup"
    ],
    char: "\u{1F372}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Qd = {
    keywords: [
      "food",
      "japan",
      "sea",
      "beach",
      "narutomaki",
      "pink",
      "swirl",
      "kamaboko",
      "surimi",
      "ramen"
    ],
    char: "\u{1F365}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, ep = {
    keywords: [
      "food",
      "prophecy"
    ],
    char: "\u{1F960}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, ap = {
    keywords: [
      "food",
      "fish",
      "japanese",
      "rice"
    ],
    char: "\u{1F363}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, tp = {
    keywords: [
      "food",
      "japanese",
      "box"
    ],
    char: "\u{1F371}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, rp = {
    keywords: [
      "food",
      "spicy",
      "hot",
      "indian"
    ],
    char: "\u{1F35B}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, sp = {
    keywords: [
      "food",
      "japanese"
    ],
    char: "\u{1F359}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, op = {
    keywords: [
      "food",
      "china",
      "asian"
    ],
    char: "\u{1F35A}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, np = {
    keywords: [
      "food",
      "japanese"
    ],
    char: "\u{1F358}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, cp = {
    keywords: [
      "food",
      "japanese"
    ],
    char: "\u{1F362}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, ip = {
    keywords: [
      "food",
      "dessert",
      "sweet",
      "japanese",
      "barbecue",
      "meat"
    ],
    char: "\u{1F361}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, lp = {
    keywords: [
      "hot",
      "dessert",
      "summer"
    ],
    char: "\u{1F367}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, fp = {
    keywords: [
      "food",
      "hot",
      "dessert"
    ],
    char: "\u{1F368}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, up = {
    keywords: [
      "food",
      "hot",
      "dessert",
      "summer"
    ],
    char: "\u{1F366}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, hp = {
    keywords: [
      "food",
      "dessert",
      "pastry"
    ],
    char: "\u{1F967}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, dp = {
    keywords: [
      "food",
      "dessert"
    ],
    char: "\u{1F370}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, pp = {
    keywords: [
      "food",
      "dessert",
      "bakery",
      "sweet"
    ],
    char: "\u{1F9C1}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, mp = {
    keywords: [
      "food",
      "autumn"
    ],
    char: "\u{1F96E}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, yp = {
    keywords: [
      "food",
      "dessert",
      "cake"
    ],
    char: "\u{1F382}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, gp = {
    keywords: [
      "dessert",
      "food"
    ],
    char: "\u{1F36E}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, kp = {
    keywords: [
      "snack",
      "dessert",
      "sweet",
      "lolly"
    ],
    char: "\u{1F36C}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, _p = {
    keywords: [
      "food",
      "snack",
      "candy",
      "sweet"
    ],
    char: "\u{1F36D}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, wp = {
    keywords: [
      "food",
      "snack",
      "dessert",
      "sweet"
    ],
    char: "\u{1F36B}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, bp = {
    keywords: [
      "food",
      "movie theater",
      "films",
      "snack"
    ],
    char: "\u{1F37F}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, vp = {
    keywords: [
      "food",
      "empanada",
      "pierogi",
      "potsticker"
    ],
    char: "\u{1F95F}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, zp = {
    keywords: [
      "food",
      "dessert",
      "snack",
      "sweet",
      "donut"
    ],
    char: "\u{1F369}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, xp = {
    keywords: [
      "food",
      "snack",
      "oreo",
      "chocolate",
      "sweet",
      "dessert"
    ],
    char: "\u{1F36A}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Sp = {
    keywords: [
      "beverage",
      "drink",
      "cow"
    ],
    char: "\u{1F95B}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Ap = {
    keywords: [
      "relax",
      "beverage",
      "drink",
      "drunk",
      "party",
      "pub",
      "summer",
      "alcohol",
      "booze"
    ],
    char: "\u{1F37A}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Mp = {
    keywords: [
      "relax",
      "beverage",
      "drink",
      "drunk",
      "party",
      "pub",
      "summer",
      "alcohol",
      "booze"
    ],
    char: "\u{1F37B}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Tp = {
    keywords: [
      "beverage",
      "drink",
      "party",
      "alcohol",
      "celebrate",
      "cheers",
      "wine",
      "champagne",
      "toast"
    ],
    char: "\u{1F942}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, qp = {
    keywords: [
      "drink",
      "beverage",
      "drunk",
      "alcohol",
      "booze"
    ],
    char: "\u{1F377}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, jp = {
    keywords: [
      "drink",
      "beverage",
      "drunk",
      "alcohol",
      "liquor",
      "booze",
      "bourbon",
      "scotch",
      "whisky",
      "glass",
      "shot"
    ],
    char: "\u{1F943}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Dp = {
    keywords: [
      "drink",
      "drunk",
      "alcohol",
      "beverage",
      "booze",
      "mojito"
    ],
    char: "\u{1F378}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Bp = {
    keywords: [
      "beverage",
      "cocktail",
      "summer",
      "beach",
      "alcohol",
      "booze",
      "mojito"
    ],
    char: "\u{1F379}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Cp = {
    keywords: [
      "drink",
      "wine",
      "bottle",
      "celebration"
    ],
    char: "\u{1F37E}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Ep = {
    keywords: [
      "wine",
      "drink",
      "drunk",
      "beverage",
      "japanese",
      "alcohol",
      "booze"
    ],
    char: "\u{1F376}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Ip = {
    keywords: [
      "drink",
      "bowl",
      "breakfast",
      "green",
      "british"
    ],
    char: "\u{1F375}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Np = {
    keywords: [
      "drink",
      "soda"
    ],
    char: "\u{1F964}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Rp = {
    keywords: [
      "beverage",
      "caffeine",
      "latte",
      "espresso"
    ],
    char: "\u2615",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Fp = {
    keywords: [
      "food",
      "container",
      "milk"
    ],
    char: "\u{1F37C}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Op = {
    keywords: [
      "condiment",
      "shaker"
    ],
    char: "\u{1F9C2}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Hp = {
    keywords: [
      "cutlery",
      "kitchen",
      "tableware"
    ],
    char: "\u{1F944}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Pp = {
    keywords: [
      "cutlery",
      "kitchen"
    ],
    char: "\u{1F374}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Lp = {
    keywords: [
      "food",
      "eat",
      "meal",
      "lunch",
      "dinner",
      "restaurant"
    ],
    char: "\u{1F37D}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Gp = {
    keywords: [
      "food",
      "breakfast",
      "cereal",
      "oatmeal",
      "porridge"
    ],
    char: "\u{1F963}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Up = {
    keywords: [
      "food",
      "leftovers"
    ],
    char: "\u{1F961}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, $p = {
    keywords: [
      "food"
    ],
    char: "\u{1F962}",
    fitzpatrick_scale: false,
    category: "food_and_drink"
  }, Vp = {
    keywords: [
      "sports",
      "football"
    ],
    char: "\u26BD",
    fitzpatrick_scale: false,
    category: "activity"
  }, Xp = {
    keywords: [
      "sports",
      "balls",
      "NBA"
    ],
    char: "\u{1F3C0}",
    fitzpatrick_scale: false,
    category: "activity"
  }, Wp = {
    keywords: [
      "sports",
      "balls",
      "NFL"
    ],
    char: "\u{1F3C8}",
    fitzpatrick_scale: false,
    category: "activity"
  }, Yp = {
    keywords: [
      "sports",
      "balls"
    ],
    char: "\u26BE",
    fitzpatrick_scale: false,
    category: "activity"
  }, Zp = {
    keywords: [
      "sports",
      "balls"
    ],
    char: "\u{1F94E}",
    fitzpatrick_scale: false,
    category: "activity"
  }, Kp = {
    keywords: [
      "sports",
      "balls",
      "green"
    ],
    char: "\u{1F3BE}",
    fitzpatrick_scale: false,
    category: "activity"
  }, Jp = {
    keywords: [
      "sports",
      "balls"
    ],
    char: "\u{1F3D0}",
    fitzpatrick_scale: false,
    category: "activity"
  }, Qp = {
    keywords: [
      "sports",
      "team"
    ],
    char: "\u{1F3C9}",
    fitzpatrick_scale: false,
    category: "activity"
  }, em = {
    keywords: [
      "sports",
      "frisbee",
      "ultimate"
    ],
    char: "\u{1F94F}",
    fitzpatrick_scale: false,
    category: "activity"
  }, am = {
    keywords: [
      "sports",
      "business",
      "flag",
      "hole",
      "summer"
    ],
    char: "\u26F3",
    fitzpatrick_scale: false,
    category: "activity"
  }, tm = {
    keywords: [
      "sports",
      "business",
      "woman",
      "female"
    ],
    char: "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F",
    fitzpatrick_scale: false,
    category: "activity"
  }, rm = {
    keywords: [
      "sports",
      "business"
    ],
    char: "\u{1F3CC}",
    fitzpatrick_scale: true,
    category: "activity"
  }, sm = {
    keywords: [
      "sports",
      "pingpong"
    ],
    char: "\u{1F3D3}",
    fitzpatrick_scale: false,
    category: "activity"
  }, om = {
    keywords: [
      "sports"
    ],
    char: "\u{1F3F8}",
    fitzpatrick_scale: false,
    category: "activity"
  }, nm = {
    keywords: [
      "sports"
    ],
    char: "\u{1F945}",
    fitzpatrick_scale: false,
    category: "activity"
  }, cm = {
    keywords: [
      "sports"
    ],
    char: "\u{1F3D2}",
    fitzpatrick_scale: false,
    category: "activity"
  }, im = {
    keywords: [
      "sports"
    ],
    char: "\u{1F3D1}",
    fitzpatrick_scale: false,
    category: "activity"
  }, lm = {
    keywords: [
      "sports",
      "ball",
      "stick"
    ],
    char: "\u{1F94D}",
    fitzpatrick_scale: false,
    category: "activity"
  }, fm = {
    keywords: [
      "sports"
    ],
    char: "\u{1F3CF}",
    fitzpatrick_scale: false,
    category: "activity"
  }, um = {
    keywords: [
      "sports",
      "winter",
      "cold",
      "snow"
    ],
    char: "\u{1F3BF}",
    fitzpatrick_scale: false,
    category: "activity"
  }, hm = {
    keywords: [
      "sports",
      "winter",
      "snow"
    ],
    char: "\u26F7",
    fitzpatrick_scale: false,
    category: "activity"
  }, dm = {
    keywords: [
      "sports",
      "winter"
    ],
    char: "\u{1F3C2}",
    fitzpatrick_scale: true,
    category: "activity"
  }, pm = {
    keywords: [
      "sports",
      "fencing",
      "sword"
    ],
    char: "\u{1F93A}",
    fitzpatrick_scale: false,
    category: "activity"
  }, mm = {
    keywords: [
      "sports",
      "wrestlers"
    ],
    char: "\u{1F93C}\u200D\u2640\uFE0F",
    fitzpatrick_scale: false,
    category: "activity"
  }, ym = {
    keywords: [
      "sports",
      "wrestlers"
    ],
    char: "\u{1F93C}\u200D\u2642\uFE0F",
    fitzpatrick_scale: false,
    category: "activity"
  }, gm = {
    keywords: [
      "gymnastics"
    ],
    char: "\u{1F938}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, km = {
    keywords: [
      "gymnastics"
    ],
    char: "\u{1F938}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, _m = {
    keywords: [
      "sports"
    ],
    char: "\u{1F93E}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, wm = {
    keywords: [
      "sports"
    ],
    char: "\u{1F93E}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, bm = {
    keywords: [
      "sports"
    ],
    char: "\u26F8",
    fitzpatrick_scale: false,
    category: "activity"
  }, vm = {
    keywords: [
      "sports"
    ],
    char: "\u{1F94C}",
    fitzpatrick_scale: false,
    category: "activity"
  }, zm = {
    keywords: [
      "board"
    ],
    char: "\u{1F6F9}",
    fitzpatrick_scale: false,
    category: "activity"
  }, xm = {
    keywords: [
      "sleigh",
      "luge",
      "toboggan"
    ],
    char: "\u{1F6F7}",
    fitzpatrick_scale: false,
    category: "activity"
  }, Sm = {
    keywords: [
      "sports"
    ],
    char: "\u{1F3F9}",
    fitzpatrick_scale: false,
    category: "activity"
  }, Am = {
    keywords: [
      "food",
      "hobby",
      "summer"
    ],
    char: "\u{1F3A3}",
    fitzpatrick_scale: false,
    category: "activity"
  }, Mm = {
    keywords: [
      "sports",
      "fighting"
    ],
    char: "\u{1F94A}",
    fitzpatrick_scale: false,
    category: "activity"
  }, Tm = {
    keywords: [
      "judo",
      "karate",
      "taekwondo"
    ],
    char: "\u{1F94B}",
    fitzpatrick_scale: false,
    category: "activity"
  }, qm = {
    keywords: [
      "sports",
      "hobby",
      "water",
      "ship",
      "woman",
      "female"
    ],
    char: "\u{1F6A3}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, jm = {
    keywords: [
      "sports",
      "hobby",
      "water",
      "ship"
    ],
    char: "\u{1F6A3}",
    fitzpatrick_scale: true,
    category: "activity"
  }, Dm = {
    keywords: [
      "sports",
      "hobby",
      "woman",
      "female",
      "rock"
    ],
    char: "\u{1F9D7}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, Bm = {
    keywords: [
      "sports",
      "hobby",
      "man",
      "male",
      "rock"
    ],
    char: "\u{1F9D7}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, Cm = {
    keywords: [
      "sports",
      "exercise",
      "human",
      "athlete",
      "water",
      "summer",
      "woman",
      "female"
    ],
    char: "\u{1F3CA}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, Em = {
    keywords: [
      "sports",
      "exercise",
      "human",
      "athlete",
      "water",
      "summer"
    ],
    char: "\u{1F3CA}",
    fitzpatrick_scale: true,
    category: "activity"
  }, Im = {
    keywords: [
      "sports",
      "pool"
    ],
    char: "\u{1F93D}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, Nm = {
    keywords: [
      "sports",
      "pool"
    ],
    char: "\u{1F93D}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, Rm = {
    keywords: [
      "woman",
      "female",
      "meditation",
      "yoga",
      "serenity",
      "zen",
      "mindfulness"
    ],
    char: "\u{1F9D8}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, Fm = {
    keywords: [
      "man",
      "male",
      "meditation",
      "yoga",
      "serenity",
      "zen",
      "mindfulness"
    ],
    char: "\u{1F9D8}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, Om = {
    keywords: [
      "sports",
      "ocean",
      "sea",
      "summer",
      "beach",
      "woman",
      "female"
    ],
    char: "\u{1F3C4}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, Hm = {
    keywords: [
      "sports",
      "ocean",
      "sea",
      "summer",
      "beach"
    ],
    char: "\u{1F3C4}",
    fitzpatrick_scale: true,
    category: "activity"
  }, Pm = {
    keywords: [
      "clean",
      "shower",
      "bathroom"
    ],
    char: "\u{1F6C0}",
    fitzpatrick_scale: true,
    category: "activity"
  }, Lm = {
    keywords: [
      "sports",
      "human",
      "woman",
      "female"
    ],
    char: "\u26F9\uFE0F\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, Gm = {
    keywords: [
      "sports",
      "human"
    ],
    char: "\u26F9",
    fitzpatrick_scale: true,
    category: "activity"
  }, Um = {
    keywords: [
      "sports",
      "training",
      "exercise",
      "woman",
      "female"
    ],
    char: "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, $m = {
    keywords: [
      "sports",
      "training",
      "exercise"
    ],
    char: "\u{1F3CB}",
    fitzpatrick_scale: true,
    category: "activity"
  }, Vm = {
    keywords: [
      "sports",
      "bike",
      "exercise",
      "hipster",
      "woman",
      "female"
    ],
    char: "\u{1F6B4}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, Xm = {
    keywords: [
      "sports",
      "bike",
      "exercise",
      "hipster"
    ],
    char: "\u{1F6B4}",
    fitzpatrick_scale: true,
    category: "activity"
  }, Wm = {
    keywords: [
      "transportation",
      "sports",
      "human",
      "race",
      "bike",
      "woman",
      "female"
    ],
    char: "\u{1F6B5}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, Ym = {
    keywords: [
      "transportation",
      "sports",
      "human",
      "race",
      "bike"
    ],
    char: "\u{1F6B5}",
    fitzpatrick_scale: true,
    category: "activity"
  }, Zm = {
    keywords: [
      "animal",
      "betting",
      "competition",
      "gambling",
      "luck"
    ],
    char: "\u{1F3C7}",
    fitzpatrick_scale: true,
    category: "activity"
  }, Km = {
    keywords: [
      "suit",
      "business",
      "levitate",
      "hover",
      "jump"
    ],
    char: "\u{1F574}",
    fitzpatrick_scale: true,
    category: "activity"
  }, Jm = {
    keywords: [
      "win",
      "award",
      "contest",
      "place",
      "ftw",
      "ceremony"
    ],
    char: "\u{1F3C6}",
    fitzpatrick_scale: false,
    category: "activity"
  }, Qm = {
    keywords: [
      "play",
      "pageant"
    ],
    char: "\u{1F3BD}",
    fitzpatrick_scale: false,
    category: "activity"
  }, ey = {
    keywords: [
      "award",
      "winning"
    ],
    char: "\u{1F3C5}",
    fitzpatrick_scale: false,
    category: "activity"
  }, ay = {
    keywords: [
      "award",
      "winning",
      "army"
    ],
    char: "\u{1F396}",
    fitzpatrick_scale: false,
    category: "activity"
  }, ty = {
    keywords: [
      "sports",
      "cause",
      "support",
      "awareness"
    ],
    char: "\u{1F397}",
    fitzpatrick_scale: false,
    category: "activity"
  }, ry = {
    keywords: [
      "flower",
      "decoration",
      "military"
    ],
    char: "\u{1F3F5}",
    fitzpatrick_scale: false,
    category: "activity"
  }, sy = {
    keywords: [
      "event",
      "concert",
      "pass"
    ],
    char: "\u{1F3AB}",
    fitzpatrick_scale: false,
    category: "activity"
  }, oy = {
    keywords: [
      "sports",
      "concert",
      "entrance"
    ],
    char: "\u{1F39F}",
    fitzpatrick_scale: false,
    category: "activity"
  }, ny = {
    keywords: [
      "acting",
      "theater",
      "drama"
    ],
    char: "\u{1F3AD}",
    fitzpatrick_scale: false,
    category: "activity"
  }, cy = {
    keywords: [
      "design",
      "paint",
      "draw",
      "colors"
    ],
    char: "\u{1F3A8}",
    fitzpatrick_scale: false,
    category: "activity"
  }, iy = {
    keywords: [
      "festival",
      "carnival",
      "party"
    ],
    char: "\u{1F3AA}",
    fitzpatrick_scale: false,
    category: "activity"
  }, ly = {
    keywords: [
      "juggle",
      "balance",
      "skill",
      "multitask"
    ],
    char: "\u{1F939}\u200D\u2640\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, fy = {
    keywords: [
      "juggle",
      "balance",
      "skill",
      "multitask"
    ],
    char: "\u{1F939}\u200D\u2642\uFE0F",
    fitzpatrick_scale: true,
    category: "activity"
  }, uy = {
    keywords: [
      "sound",
      "music",
      "PA",
      "sing",
      "talkshow"
    ],
    char: "\u{1F3A4}",
    fitzpatrick_scale: false,
    category: "activity"
  }, hy = {
    keywords: [
      "music",
      "score",
      "gadgets"
    ],
    char: "\u{1F3A7}",
    fitzpatrick_scale: false,
    category: "activity"
  }, dy = {
    keywords: [
      "treble",
      "clef",
      "compose"
    ],
    char: "\u{1F3BC}",
    fitzpatrick_scale: false,
    category: "activity"
  }, py = {
    keywords: [
      "piano",
      "instrument",
      "compose"
    ],
    char: "\u{1F3B9}",
    fitzpatrick_scale: false,
    category: "activity"
  }, my = {
    keywords: [
      "music",
      "instrument",
      "drumsticks",
      "snare"
    ],
    char: "\u{1F941}",
    fitzpatrick_scale: false,
    category: "activity"
  }, yy = {
    keywords: [
      "music",
      "instrument",
      "jazz",
      "blues"
    ],
    char: "\u{1F3B7}",
    fitzpatrick_scale: false,
    category: "activity"
  }, gy = {
    keywords: [
      "music",
      "brass"
    ],
    char: "\u{1F3BA}",
    fitzpatrick_scale: false,
    category: "activity"
  }, ky = {
    keywords: [
      "music",
      "instrument"
    ],
    char: "\u{1F3B8}",
    fitzpatrick_scale: false,
    category: "activity"
  }, _y = {
    keywords: [
      "music",
      "instrument",
      "orchestra",
      "symphony"
    ],
    char: "\u{1F3BB}",
    fitzpatrick_scale: false,
    category: "activity"
  }, wy = {
    keywords: [
      "movie",
      "film",
      "record"
    ],
    char: "\u{1F3AC}",
    fitzpatrick_scale: false,
    category: "activity"
  }, by = {
    keywords: [
      "play",
      "console",
      "PS4",
      "controller"
    ],
    char: "\u{1F3AE}",
    fitzpatrick_scale: false,
    category: "activity"
  }, vy = {
    keywords: [
      "game",
      "arcade",
      "play"
    ],
    char: "\u{1F47E}",
    fitzpatrick_scale: false,
    category: "activity"
  }, zy = {
    keywords: [
      "game",
      "play",
      "bar",
      "target",
      "bullseye"
    ],
    char: "\u{1F3AF}",
    fitzpatrick_scale: false,
    category: "activity"
  }, xy = {
    keywords: [
      "dice",
      "random",
      "tabletop",
      "play",
      "luck"
    ],
    char: "\u{1F3B2}",
    fitzpatrick_scale: false,
    category: "activity"
  }, Sy = {
    keywords: [
      "expendable"
    ],
    char: "\u265F",
    fitzpatrick_scale: false,
    category: "activity"
  }, Ay = {
    keywords: [
      "bet",
      "gamble",
      "vegas",
      "fruit machine",
      "luck",
      "casino"
    ],
    char: "\u{1F3B0}",
    fitzpatrick_scale: false,
    category: "activity"
  }, My = {
    keywords: [
      "interlocking",
      "puzzle",
      "piece"
    ],
    char: "\u{1F9E9}",
    fitzpatrick_scale: false,
    category: "activity"
  }, Ty = {
    keywords: [
      "sports",
      "fun",
      "play"
    ],
    char: "\u{1F3B3}",
    fitzpatrick_scale: false,
    category: "activity"
  }, qy = {
    keywords: [
      "red",
      "transportation",
      "vehicle"
    ],
    char: "\u{1F697}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, jy = {
    keywords: [
      "uber",
      "vehicle",
      "cars",
      "transportation"
    ],
    char: "\u{1F695}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Dy = {
    keywords: [
      "transportation",
      "vehicle"
    ],
    char: "\u{1F699}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, By = {
    keywords: [
      "car",
      "vehicle",
      "transportation"
    ],
    char: "\u{1F68C}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Cy = {
    keywords: [
      "bart",
      "transportation",
      "vehicle"
    ],
    char: "\u{1F68E}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Ey = {
    keywords: [
      "sports",
      "race",
      "fast",
      "formula",
      "f1"
    ],
    char: "\u{1F3CE}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Iy = {
    keywords: [
      "vehicle",
      "cars",
      "transportation",
      "law",
      "legal",
      "enforcement"
    ],
    char: "\u{1F693}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Ny = {
    keywords: [
      "health",
      "911",
      "hospital"
    ],
    char: "\u{1F691}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Ry = {
    keywords: [
      "transportation",
      "cars",
      "vehicle"
    ],
    char: "\u{1F692}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Fy = {
    keywords: [
      "vehicle",
      "car",
      "transportation"
    ],
    char: "\u{1F690}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Oy = {
    keywords: [
      "cars",
      "transportation"
    ],
    char: "\u{1F69A}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Hy = {
    keywords: [
      "vehicle",
      "cars",
      "transportation",
      "express"
    ],
    char: "\u{1F69B}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Py = {
    keywords: [
      "vehicle",
      "car",
      "farming",
      "agriculture"
    ],
    char: "\u{1F69C}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Ly = {
    keywords: [
      "vehicle",
      "kick",
      "razor"
    ],
    char: "\u{1F6F4}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Gy = {
    keywords: [
      "race",
      "sports",
      "fast"
    ],
    char: "\u{1F3CD}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Uy = {
    keywords: [
      "sports",
      "bicycle",
      "exercise",
      "hipster"
    ],
    char: "\u{1F6B2}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, $y = {
    keywords: [
      "vehicle",
      "vespa",
      "sasha"
    ],
    char: "\u{1F6F5}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Vy = {
    keywords: [
      "police",
      "ambulance",
      "911",
      "emergency",
      "alert",
      "error",
      "pinged",
      "law",
      "legal"
    ],
    char: "\u{1F6A8}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Xy = {
    keywords: [
      "vehicle",
      "law",
      "legal",
      "enforcement",
      "911"
    ],
    char: "\u{1F694}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Wy = {
    keywords: [
      "vehicle",
      "transportation"
    ],
    char: "\u{1F68D}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Yy = {
    keywords: [
      "car",
      "vehicle",
      "transportation"
    ],
    char: "\u{1F698}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Zy = {
    keywords: [
      "vehicle",
      "cars",
      "uber"
    ],
    char: "\u{1F696}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Ky = {
    keywords: [
      "transportation",
      "vehicle",
      "ski"
    ],
    char: "\u{1F6A1}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Jy = {
    keywords: [
      "transportation",
      "vehicle",
      "ski"
    ],
    char: "\u{1F6A0}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Qy = {
    keywords: [
      "vehicle",
      "transportation"
    ],
    char: "\u{1F69F}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, e4 = {
    keywords: [
      "transportation",
      "vehicle"
    ],
    char: "\u{1F683}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, a4 = {
    keywords: [
      "transportation",
      "vehicle",
      "carriage",
      "public",
      "travel"
    ],
    char: "\u{1F68B}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, t4 = {
    keywords: [
      "transportation",
      "vehicle"
    ],
    char: "\u{1F69D}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, r4 = {
    keywords: [
      "transportation",
      "vehicle"
    ],
    char: "\u{1F684}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, s4 = {
    keywords: [
      "transportation",
      "vehicle",
      "speed",
      "fast",
      "public",
      "travel"
    ],
    char: "\u{1F685}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, o4 = {
    keywords: [
      "transportation",
      "vehicle"
    ],
    char: "\u{1F688}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, n4 = {
    keywords: [
      "transportation",
      "vehicle"
    ],
    char: "\u{1F69E}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, c4 = {
    keywords: [
      "transportation",
      "vehicle",
      "train"
    ],
    char: "\u{1F682}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, i4 = {
    keywords: [
      "transportation",
      "vehicle"
    ],
    char: "\u{1F686}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, l4 = {
    keywords: [
      "transportation",
      "blue-square",
      "mrt",
      "underground",
      "tube"
    ],
    char: "\u{1F687}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, f4 = {
    keywords: [
      "transportation",
      "vehicle"
    ],
    char: "\u{1F68A}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, u4 = {
    keywords: [
      "transportation",
      "vehicle",
      "public"
    ],
    char: "\u{1F689}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, h4 = {
    keywords: [
      "transportation",
      "vehicle",
      "ufo"
    ],
    char: "\u{1F6F8}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, d4 = {
    keywords: [
      "transportation",
      "vehicle",
      "fly"
    ],
    char: "\u{1F681}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, p4 = {
    keywords: [
      "flight",
      "transportation",
      "fly",
      "vehicle"
    ],
    char: "\u{1F6E9}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, m4 = {
    keywords: [
      "vehicle",
      "transportation",
      "flight",
      "fly"
    ],
    char: "\u2708\uFE0F",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, y4 = {
    keywords: [
      "airport",
      "flight",
      "landing"
    ],
    char: "\u{1F6EB}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, g4 = {
    keywords: [
      "airport",
      "flight",
      "boarding"
    ],
    char: "\u{1F6EC}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, k4 = {
    keywords: [
      "ship",
      "summer",
      "transportation",
      "water",
      "sailing"
    ],
    char: "\u26F5",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, _4 = {
    keywords: [
      "ship"
    ],
    char: "\u{1F6E5}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, w4 = {
    keywords: [
      "ship",
      "transportation",
      "vehicle",
      "summer"
    ],
    char: "\u{1F6A4}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, b4 = {
    keywords: [
      "boat",
      "ship",
      "yacht"
    ],
    char: "\u26F4",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, v4 = {
    keywords: [
      "yacht",
      "cruise",
      "ferry"
    ],
    char: "\u{1F6F3}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, z4 = {
    keywords: [
      "launch",
      "ship",
      "staffmode",
      "NASA",
      "outer space",
      "outer_space",
      "fly"
    ],
    char: "\u{1F680}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, x4 = {
    keywords: [
      "communication",
      "gps",
      "orbit",
      "spaceflight",
      "NASA",
      "ISS"
    ],
    char: "\u{1F6F0}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, S4 = {
    keywords: [
      "sit",
      "airplane",
      "transport",
      "bus",
      "flight",
      "fly"
    ],
    char: "\u{1F4BA}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, A4 = {
    keywords: [
      "boat",
      "paddle",
      "water",
      "ship"
    ],
    char: "\u{1F6F6}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, M4 = {
    keywords: [
      "ship",
      "ferry",
      "sea",
      "boat"
    ],
    char: "\u2693",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, T4 = {
    keywords: [
      "wip",
      "progress",
      "caution",
      "warning"
    ],
    char: "\u{1F6A7}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, q4 = {
    keywords: [
      "gas station",
      "petroleum"
    ],
    char: "\u26FD",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, j4 = {
    keywords: [
      "transportation",
      "wait"
    ],
    char: "\u{1F68F}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, D4 = {
    keywords: [
      "transportation",
      "driving"
    ],
    char: "\u{1F6A6}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, B4 = {
    keywords: [
      "transportation",
      "signal"
    ],
    char: "\u{1F6A5}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, C4 = {
    keywords: [
      "contest",
      "finishline",
      "race",
      "gokart"
    ],
    char: "\u{1F3C1}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, E4 = {
    keywords: [
      "transportation",
      "titanic",
      "deploy"
    ],
    char: "\u{1F6A2}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, I4 = {
    keywords: [
      "photo",
      "carnival",
      "londoneye"
    ],
    char: "\u{1F3A1}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, N4 = {
    keywords: [
      "carnival",
      "playground",
      "photo",
      "fun"
    ],
    char: "\u{1F3A2}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, R4 = {
    keywords: [
      "photo",
      "carnival"
    ],
    char: "\u{1F3A0}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, F4 = {
    keywords: [
      "wip",
      "working",
      "progress"
    ],
    char: "\u{1F3D7}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, O4 = {
    keywords: [
      "photo",
      "mountain"
    ],
    char: "\u{1F301}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, H4 = {
    keywords: [
      "photo",
      "japanese"
    ],
    char: "\u{1F5FC}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, P4 = {
    keywords: [
      "building",
      "industry",
      "pollution",
      "smoke"
    ],
    char: "\u{1F3ED}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, L4 = {
    keywords: [
      "photo",
      "summer",
      "water",
      "fresh"
    ],
    char: "\u26F2",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, G4 = {
    keywords: [
      "photo",
      "japan",
      "asia",
      "tsukimi"
    ],
    char: "\u{1F391}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, U4 = {
    keywords: [
      "photo",
      "nature",
      "environment"
    ],
    char: "\u26F0",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, $4 = {
    keywords: [
      "photo",
      "nature",
      "environment",
      "winter",
      "cold"
    ],
    char: "\u{1F3D4}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, V4 = {
    keywords: [
      "photo",
      "mountain",
      "nature",
      "japanese"
    ],
    char: "\u{1F5FB}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, X4 = {
    keywords: [
      "photo",
      "nature",
      "disaster"
    ],
    char: "\u{1F30B}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, W4 = {
    keywords: [
      "nation",
      "country",
      "japanese",
      "asia"
    ],
    char: "\u{1F5FE}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Y4 = {
    keywords: [
      "photo",
      "outdoors",
      "tent"
    ],
    char: "\u{1F3D5}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Z4 = {
    keywords: [
      "photo",
      "camping",
      "outdoors"
    ],
    char: "\u26FA",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, K4 = {
    keywords: [
      "photo",
      "environment",
      "nature"
    ],
    char: "\u{1F3DE}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, J4 = {
    keywords: [
      "road",
      "cupertino",
      "interstate",
      "highway"
    ],
    char: "\u{1F6E3}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Q4 = {
    keywords: [
      "train",
      "transportation"
    ],
    char: "\u{1F6E4}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, eg = {
    keywords: [
      "morning",
      "view",
      "vacation",
      "photo"
    ],
    char: "\u{1F305}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, ag = {
    keywords: [
      "view",
      "vacation",
      "photo"
    ],
    char: "\u{1F304}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, tg = {
    keywords: [
      "photo",
      "warm",
      "saharah"
    ],
    char: "\u{1F3DC}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, rg = {
    keywords: [
      "weather",
      "summer",
      "sunny",
      "sand",
      "mojito"
    ],
    char: "\u{1F3D6}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, sg = {
    keywords: [
      "photo",
      "tropical",
      "mojito"
    ],
    char: "\u{1F3DD}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, og = {
    keywords: [
      "photo",
      "good morning",
      "dawn"
    ],
    char: "\u{1F307}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, ng = {
    keywords: [
      "photo",
      "evening",
      "sky",
      "buildings"
    ],
    char: "\u{1F306}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, cg = {
    keywords: [
      "photo",
      "night life",
      "urban"
    ],
    char: "\u{1F3D9}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, ig = {
    keywords: [
      "evening",
      "city",
      "downtown"
    ],
    char: "\u{1F303}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, lg = {
    keywords: [
      "photo",
      "sanfrancisco"
    ],
    char: "\u{1F309}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, fg = {
    keywords: [
      "photo",
      "space",
      "stars"
    ],
    char: "\u{1F30C}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, ug = {
    keywords: [
      "night",
      "photo"
    ],
    char: "\u{1F320}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, hg = {
    keywords: [
      "stars",
      "night",
      "shine"
    ],
    char: "\u{1F387}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, dg = {
    keywords: [
      "photo",
      "festival",
      "carnival",
      "congratulations"
    ],
    char: "\u{1F386}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, pg = {
    keywords: [
      "nature",
      "happy",
      "unicorn_face",
      "photo",
      "sky",
      "spring"
    ],
    char: "\u{1F308}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, mg = {
    keywords: [
      "buildings",
      "photo"
    ],
    char: "\u{1F3D8}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, yg = {
    keywords: [
      "building",
      "royalty",
      "history"
    ],
    char: "\u{1F3F0}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, gg = {
    keywords: [
      "photo",
      "building"
    ],
    char: "\u{1F3EF}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, kg = {
    keywords: [
      "photo",
      "place",
      "sports",
      "concert",
      "venue"
    ],
    char: "\u{1F3DF}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, _g = {
    keywords: [
      "american",
      "newyork"
    ],
    char: "\u{1F5FD}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, wg = {
    keywords: [
      "building",
      "home"
    ],
    char: "\u{1F3E0}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, bg = {
    keywords: [
      "home",
      "plant",
      "nature"
    ],
    char: "\u{1F3E1}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, vg = {
    keywords: [
      "abandon",
      "evict",
      "broken",
      "building"
    ],
    char: "\u{1F3DA}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, zg = {
    keywords: [
      "building",
      "bureau",
      "work"
    ],
    char: "\u{1F3E2}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, xg = {
    keywords: [
      "building",
      "shopping",
      "mall"
    ],
    char: "\u{1F3EC}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Sg = {
    keywords: [
      "building",
      "envelope",
      "communication"
    ],
    char: "\u{1F3E3}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Ag = {
    keywords: [
      "building",
      "email"
    ],
    char: "\u{1F3E4}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Mg = {
    keywords: [
      "building",
      "health",
      "surgery",
      "doctor"
    ],
    char: "\u{1F3E5}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Tg = {
    keywords: [
      "building",
      "money",
      "sales",
      "cash",
      "business",
      "enterprise"
    ],
    char: "\u{1F3E6}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, qg = {
    keywords: [
      "building",
      "accomodation",
      "checkin"
    ],
    char: "\u{1F3E8}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, jg = {
    keywords: [
      "building",
      "shopping",
      "groceries"
    ],
    char: "\u{1F3EA}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Dg = {
    keywords: [
      "building",
      "student",
      "education",
      "learn",
      "teach"
    ],
    char: "\u{1F3EB}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Bg = {
    keywords: [
      "like",
      "affection",
      "dating"
    ],
    char: "\u{1F3E9}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Cg = {
    keywords: [
      "love",
      "like",
      "affection",
      "couple",
      "marriage",
      "bride",
      "groom"
    ],
    char: "\u{1F492}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Eg = {
    keywords: [
      "art",
      "culture",
      "history"
    ],
    char: "\u{1F3DB}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Ig = {
    keywords: [
      "building",
      "religion",
      "christ"
    ],
    char: "\u26EA",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Ng = {
    keywords: [
      "islam",
      "worship",
      "minaret"
    ],
    char: "\u{1F54C}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Rg = {
    keywords: [
      "judaism",
      "worship",
      "temple",
      "jewish"
    ],
    char: "\u{1F54D}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Fg = {
    keywords: [
      "mecca",
      "mosque",
      "islam"
    ],
    char: "\u{1F54B}",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Og = {
    keywords: [
      "temple",
      "japan",
      "kyoto"
    ],
    char: "\u26E9",
    fitzpatrick_scale: false,
    category: "travel_and_places"
  }, Hg = {
    keywords: [
      "time",
      "accessories"
    ],
    char: "\u231A",
    fitzpatrick_scale: false,
    category: "objects"
  }, Pg = {
    keywords: [
      "technology",
      "apple",
      "gadgets",
      "dial"
    ],
    char: "\u{1F4F1}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Lg = {
    keywords: [
      "iphone",
      "incoming"
    ],
    char: "\u{1F4F2}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Gg = {
    keywords: [
      "technology",
      "laptop",
      "screen",
      "display",
      "monitor"
    ],
    char: "\u{1F4BB}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Ug = {
    keywords: [
      "technology",
      "computer",
      "type",
      "input",
      "text"
    ],
    char: "\u2328",
    fitzpatrick_scale: false,
    category: "objects"
  }, $g = {
    keywords: [
      "technology",
      "computing",
      "screen"
    ],
    char: "\u{1F5A5}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Vg = {
    keywords: [
      "paper",
      "ink"
    ],
    char: "\u{1F5A8}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Xg = {
    keywords: [
      "click"
    ],
    char: "\u{1F5B1}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Wg = {
    keywords: [
      "technology",
      "trackpad"
    ],
    char: "\u{1F5B2}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Yg = {
    keywords: [
      "game",
      "play"
    ],
    char: "\u{1F579}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Zg = {
    keywords: [
      "tool"
    ],
    char: "\u{1F5DC}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Kg = {
    keywords: [
      "technology",
      "record",
      "data",
      "disk",
      "90s"
    ],
    char: "\u{1F4BD}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Jg = {
    keywords: [
      "oldschool",
      "technology",
      "save",
      "90s",
      "80s"
    ],
    char: "\u{1F4BE}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Qg = {
    keywords: [
      "technology",
      "dvd",
      "disk",
      "disc",
      "90s"
    ],
    char: "\u{1F4BF}",
    fitzpatrick_scale: false,
    category: "objects"
  }, e2 = {
    keywords: [
      "cd",
      "disk",
      "disc"
    ],
    char: "\u{1F4C0}",
    fitzpatrick_scale: false,
    category: "objects"
  }, a2 = {
    keywords: [
      "record",
      "video",
      "oldschool",
      "90s",
      "80s"
    ],
    char: "\u{1F4FC}",
    fitzpatrick_scale: false,
    category: "objects"
  }, t2 = {
    keywords: [
      "gadgets",
      "photography"
    ],
    char: "\u{1F4F7}",
    fitzpatrick_scale: false,
    category: "objects"
  }, r2 = {
    keywords: [
      "photography",
      "gadgets"
    ],
    char: "\u{1F4F8}",
    fitzpatrick_scale: false,
    category: "objects"
  }, s2 = {
    keywords: [
      "film",
      "record"
    ],
    char: "\u{1F4F9}",
    fitzpatrick_scale: false,
    category: "objects"
  }, o2 = {
    keywords: [
      "film",
      "record"
    ],
    char: "\u{1F3A5}",
    fitzpatrick_scale: false,
    category: "objects"
  }, n2 = {
    keywords: [
      "video",
      "tape",
      "record",
      "movie"
    ],
    char: "\u{1F4FD}",
    fitzpatrick_scale: false,
    category: "objects"
  }, c2 = {
    keywords: [
      "movie"
    ],
    char: "\u{1F39E}",
    fitzpatrick_scale: false,
    category: "objects"
  }, i2 = {
    keywords: [
      "technology",
      "communication",
      "dial"
    ],
    char: "\u{1F4DE}",
    fitzpatrick_scale: false,
    category: "objects"
  }, l2 = {
    keywords: [
      "technology",
      "communication",
      "dial",
      "telephone"
    ],
    char: "\u260E\uFE0F",
    fitzpatrick_scale: false,
    category: "objects"
  }, f2 = {
    keywords: [
      "bbcall",
      "oldschool",
      "90s"
    ],
    char: "\u{1F4DF}",
    fitzpatrick_scale: false,
    category: "objects"
  }, u2 = {
    keywords: [
      "communication",
      "technology"
    ],
    char: "\u{1F4E0}",
    fitzpatrick_scale: false,
    category: "objects"
  }, h2 = {
    keywords: [
      "technology",
      "program",
      "oldschool",
      "show",
      "television"
    ],
    char: "\u{1F4FA}",
    fitzpatrick_scale: false,
    category: "objects"
  }, d2 = {
    keywords: [
      "communication",
      "music",
      "podcast",
      "program"
    ],
    char: "\u{1F4FB}",
    fitzpatrick_scale: false,
    category: "objects"
  }, p2 = {
    keywords: [
      "sing",
      "recording",
      "artist",
      "talkshow"
    ],
    char: "\u{1F399}",
    fitzpatrick_scale: false,
    category: "objects"
  }, m2 = {
    keywords: [
      "scale"
    ],
    char: "\u{1F39A}",
    fitzpatrick_scale: false,
    category: "objects"
  }, y2 = {
    keywords: [
      "dial"
    ],
    char: "\u{1F39B}",
    fitzpatrick_scale: false,
    category: "objects"
  }, g2 = {
    keywords: [
      "magnetic",
      "navigation",
      "orienteering"
    ],
    char: "\u{1F9ED}",
    fitzpatrick_scale: false,
    category: "objects"
  }, k2 = {
    keywords: [
      "time",
      "deadline"
    ],
    char: "\u23F1",
    fitzpatrick_scale: false,
    category: "objects"
  }, _2 = {
    keywords: [
      "alarm"
    ],
    char: "\u23F2",
    fitzpatrick_scale: false,
    category: "objects"
  }, w2 = {
    keywords: [
      "time",
      "wake"
    ],
    char: "\u23F0",
    fitzpatrick_scale: false,
    category: "objects"
  }, b2 = {
    keywords: [
      "time"
    ],
    char: "\u{1F570}",
    fitzpatrick_scale: false,
    category: "objects"
  }, v2 = {
    keywords: [
      "oldschool",
      "time",
      "countdown"
    ],
    char: "\u23F3",
    fitzpatrick_scale: false,
    category: "objects"
  }, z2 = {
    keywords: [
      "time",
      "clock",
      "oldschool",
      "limit",
      "exam",
      "quiz",
      "test"
    ],
    char: "\u231B",
    fitzpatrick_scale: false,
    category: "objects"
  }, x2 = {
    keywords: [
      "communication",
      "future",
      "radio",
      "space"
    ],
    char: "\u{1F4E1}",
    fitzpatrick_scale: false,
    category: "objects"
  }, S2 = {
    keywords: [
      "power",
      "energy",
      "sustain"
    ],
    char: "\u{1F50B}",
    fitzpatrick_scale: false,
    category: "objects"
  }, A2 = {
    keywords: [
      "charger",
      "power"
    ],
    char: "\u{1F50C}",
    fitzpatrick_scale: false,
    category: "objects"
  }, M2 = {
    keywords: [
      "light",
      "electricity",
      "idea"
    ],
    char: "\u{1F4A1}",
    fitzpatrick_scale: false,
    category: "objects"
  }, T2 = {
    keywords: [
      "dark",
      "camping",
      "sight",
      "night"
    ],
    char: "\u{1F526}",
    fitzpatrick_scale: false,
    category: "objects"
  }, q2 = {
    keywords: [
      "fire",
      "wax"
    ],
    char: "\u{1F56F}",
    fitzpatrick_scale: false,
    category: "objects"
  }, j2 = {
    keywords: [
      "quench"
    ],
    char: "\u{1F9EF}",
    fitzpatrick_scale: false,
    category: "objects"
  }, D2 = {
    keywords: [
      "bin",
      "trash",
      "rubbish",
      "garbage",
      "toss"
    ],
    char: "\u{1F5D1}",
    fitzpatrick_scale: false,
    category: "objects"
  }, B2 = {
    keywords: [
      "barrell"
    ],
    char: "\u{1F6E2}",
    fitzpatrick_scale: false,
    category: "objects"
  }, C2 = {
    keywords: [
      "dollar",
      "bills",
      "payment",
      "sale"
    ],
    char: "\u{1F4B8}",
    fitzpatrick_scale: false,
    category: "objects"
  }, E2 = {
    keywords: [
      "money",
      "sales",
      "bill",
      "currency"
    ],
    char: "\u{1F4B5}",
    fitzpatrick_scale: false,
    category: "objects"
  }, I2 = {
    keywords: [
      "money",
      "sales",
      "japanese",
      "dollar",
      "currency"
    ],
    char: "\u{1F4B4}",
    fitzpatrick_scale: false,
    category: "objects"
  }, N2 = {
    keywords: [
      "money",
      "sales",
      "dollar",
      "currency"
    ],
    char: "\u{1F4B6}",
    fitzpatrick_scale: false,
    category: "objects"
  }, R2 = {
    keywords: [
      "british",
      "sterling",
      "money",
      "sales",
      "bills",
      "uk",
      "england",
      "currency"
    ],
    char: "\u{1F4B7}",
    fitzpatrick_scale: false,
    category: "objects"
  }, F2 = {
    keywords: [
      "dollar",
      "payment",
      "coins",
      "sale"
    ],
    char: "\u{1F4B0}",
    fitzpatrick_scale: false,
    category: "objects"
  }, O2 = {
    keywords: [
      "money",
      "sales",
      "dollar",
      "bill",
      "payment",
      "shopping"
    ],
    char: "\u{1F4B3}",
    fitzpatrick_scale: false,
    category: "objects"
  }, H2 = {
    keywords: [
      "blue",
      "ruby",
      "diamond",
      "jewelry"
    ],
    char: "\u{1F48E}",
    fitzpatrick_scale: false,
    category: "objects"
  }, P2 = {
    keywords: [
      "law",
      "fairness",
      "weight"
    ],
    char: "\u2696",
    fitzpatrick_scale: false,
    category: "objects"
  }, L2 = {
    keywords: [
      "tools",
      "diy",
      "fix",
      "maintainer",
      "mechanic"
    ],
    char: "\u{1F9F0}",
    fitzpatrick_scale: false,
    category: "objects"
  }, G2 = {
    keywords: [
      "tools",
      "diy",
      "ikea",
      "fix",
      "maintainer"
    ],
    char: "\u{1F527}",
    fitzpatrick_scale: false,
    category: "objects"
  }, U2 = {
    keywords: [
      "tools",
      "build",
      "create"
    ],
    char: "\u{1F528}",
    fitzpatrick_scale: false,
    category: "objects"
  }, $2 = {
    keywords: [
      "tools",
      "build",
      "create"
    ],
    char: "\u2692",
    fitzpatrick_scale: false,
    category: "objects"
  }, V2 = {
    keywords: [
      "tools",
      "build",
      "create"
    ],
    char: "\u{1F6E0}",
    fitzpatrick_scale: false,
    category: "objects"
  }, X2 = {
    keywords: [
      "tools",
      "dig"
    ],
    char: "\u26CF",
    fitzpatrick_scale: false,
    category: "objects"
  }, W2 = {
    keywords: [
      "handy",
      "tools",
      "fix"
    ],
    char: "\u{1F529}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Y2 = {
    keywords: [
      "cog"
    ],
    char: "\u2699",
    fitzpatrick_scale: false,
    category: "objects"
  }, Z2 = {
    keywords: [
      "bricks"
    ],
    char: "\u{1F9F1}",
    fitzpatrick_scale: false,
    category: "objects"
  }, K2 = {
    keywords: [
      "lock",
      "arrest"
    ],
    char: "\u26D3",
    fitzpatrick_scale: false,
    category: "objects"
  }, J2 = {
    keywords: [
      "attraction",
      "magnetic"
    ],
    char: "\u{1F9F2}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Q2 = {
    keywords: [
      "violence",
      "weapon",
      "pistol",
      "revolver"
    ],
    char: "\u{1F52B}",
    fitzpatrick_scale: false,
    category: "objects"
  }, ek = {
    keywords: [
      "boom",
      "explode",
      "explosion",
      "terrorism"
    ],
    char: "\u{1F4A3}",
    fitzpatrick_scale: false,
    category: "objects"
  }, ak = {
    keywords: [
      "dynamite",
      "boom",
      "explode",
      "explosion",
      "explosive"
    ],
    char: "\u{1F9E8}",
    fitzpatrick_scale: false,
    category: "objects"
  }, tk = {
    keywords: [
      "knife",
      "blade",
      "cutlery",
      "kitchen",
      "weapon"
    ],
    char: "\u{1F52A}",
    fitzpatrick_scale: false,
    category: "objects"
  }, rk = {
    keywords: [
      "weapon"
    ],
    char: "\u{1F5E1}",
    fitzpatrick_scale: false,
    category: "objects"
  }, sk = {
    keywords: [
      "weapon"
    ],
    char: "\u2694",
    fitzpatrick_scale: false,
    category: "objects"
  }, ok = {
    keywords: [
      "protection",
      "security"
    ],
    char: "\u{1F6E1}",
    fitzpatrick_scale: false,
    category: "objects"
  }, nk = {
    keywords: [
      "kills",
      "tobacco",
      "cigarette",
      "joint",
      "smoke"
    ],
    char: "\u{1F6AC}",
    fitzpatrick_scale: false,
    category: "objects"
  }, ck = {
    keywords: [
      "poison",
      "danger",
      "deadly",
      "scary",
      "death",
      "pirate",
      "evil"
    ],
    char: "\u2620",
    fitzpatrick_scale: false,
    category: "objects"
  }, ik = {
    keywords: [
      "vampire",
      "dead",
      "die",
      "death",
      "rip",
      "graveyard",
      "cemetery",
      "casket",
      "funeral",
      "box"
    ],
    char: "\u26B0",
    fitzpatrick_scale: false,
    category: "objects"
  }, lk = {
    keywords: [
      "dead",
      "die",
      "death",
      "rip",
      "ashes"
    ],
    char: "\u26B1",
    fitzpatrick_scale: false,
    category: "objects"
  }, fk = {
    keywords: [
      "vase",
      "jar"
    ],
    char: "\u{1F3FA}",
    fitzpatrick_scale: false,
    category: "objects"
  }, uk = {
    keywords: [
      "disco",
      "party",
      "magic",
      "circus",
      "fortune_teller"
    ],
    char: "\u{1F52E}",
    fitzpatrick_scale: false,
    category: "objects"
  }, hk = {
    keywords: [
      "dhikr",
      "religious"
    ],
    char: "\u{1F4FF}",
    fitzpatrick_scale: false,
    category: "objects"
  }, dk = {
    keywords: [
      "bead",
      "charm"
    ],
    char: "\u{1F9FF}",
    fitzpatrick_scale: false,
    category: "objects"
  }, pk = {
    keywords: [
      "hair",
      "salon",
      "style"
    ],
    char: "\u{1F488}",
    fitzpatrick_scale: false,
    category: "objects"
  }, mk = {
    keywords: [
      "distilling",
      "science",
      "experiment",
      "chemistry"
    ],
    char: "\u2697",
    fitzpatrick_scale: false,
    category: "objects"
  }, yk = {
    keywords: [
      "stars",
      "space",
      "zoom",
      "science",
      "astronomy"
    ],
    char: "\u{1F52D}",
    fitzpatrick_scale: false,
    category: "objects"
  }, gk = {
    keywords: [
      "laboratory",
      "experiment",
      "zoomin",
      "science",
      "study"
    ],
    char: "\u{1F52C}",
    fitzpatrick_scale: false,
    category: "objects"
  }, kk = {
    keywords: [
      "embarrassing"
    ],
    char: "\u{1F573}",
    fitzpatrick_scale: false,
    category: "objects"
  }, _k = {
    keywords: [
      "health",
      "medicine",
      "doctor",
      "pharmacy",
      "drug"
    ],
    char: "\u{1F48A}",
    fitzpatrick_scale: false,
    category: "objects"
  }, wk = {
    keywords: [
      "health",
      "hospital",
      "drugs",
      "blood",
      "medicine",
      "needle",
      "doctor",
      "nurse"
    ],
    char: "\u{1F489}",
    fitzpatrick_scale: false,
    category: "objects"
  }, bk = {
    keywords: [
      "biologist",
      "genetics",
      "life"
    ],
    char: "\u{1F9EC}",
    fitzpatrick_scale: false,
    category: "objects"
  }, vk = {
    keywords: [
      "amoeba",
      "bacteria",
      "germs"
    ],
    char: "\u{1F9A0}",
    fitzpatrick_scale: false,
    category: "objects"
  }, zk = {
    keywords: [
      "bacteria",
      "biology",
      "culture",
      "lab"
    ],
    char: "\u{1F9EB}",
    fitzpatrick_scale: false,
    category: "objects"
  }, xk = {
    keywords: [
      "chemistry",
      "experiment",
      "lab",
      "science"
    ],
    char: "\u{1F9EA}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Sk = {
    keywords: [
      "weather",
      "temperature",
      "hot",
      "cold"
    ],
    char: "\u{1F321}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Ak = {
    keywords: [
      "cleaning",
      "sweeping",
      "witch"
    ],
    char: "\u{1F9F9}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Mk = {
    keywords: [
      "laundry"
    ],
    char: "\u{1F9FA}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Tk = {
    keywords: [
      "roll"
    ],
    char: "\u{1F9FB}",
    fitzpatrick_scale: false,
    category: "objects"
  }, qk = {
    keywords: [
      "sale",
      "tag"
    ],
    char: "\u{1F3F7}",
    fitzpatrick_scale: false,
    category: "objects"
  }, jk = {
    keywords: [
      "favorite",
      "label",
      "save"
    ],
    char: "\u{1F516}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Dk = {
    keywords: [
      "restroom",
      "wc",
      "washroom",
      "bathroom",
      "potty"
    ],
    char: "\u{1F6BD}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Bk = {
    keywords: [
      "clean",
      "water",
      "bathroom"
    ],
    char: "\u{1F6BF}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Ck = {
    keywords: [
      "clean",
      "shower",
      "bathroom"
    ],
    char: "\u{1F6C1}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Ek = {
    keywords: [
      "bar",
      "bathing",
      "cleaning",
      "lather"
    ],
    char: "\u{1F9FC}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Ik = {
    keywords: [
      "absorbing",
      "cleaning",
      "porous"
    ],
    char: "\u{1F9FD}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Nk = {
    keywords: [
      "moisturizer",
      "sunscreen"
    ],
    char: "\u{1F9F4}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Rk = {
    keywords: [
      "lock",
      "door",
      "password"
    ],
    char: "\u{1F511}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Fk = {
    keywords: [
      "lock",
      "door",
      "password"
    ],
    char: "\u{1F5DD}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Ok = {
    keywords: [
      "read",
      "chill"
    ],
    char: "\u{1F6CB}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Hk = {
    keywords: [
      "bed",
      "rest"
    ],
    char: "\u{1F6CC}",
    fitzpatrick_scale: true,
    category: "objects"
  }, Pk = {
    keywords: [
      "sleep",
      "rest"
    ],
    char: "\u{1F6CF}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Lk = {
    keywords: [
      "house",
      "entry",
      "exit"
    ],
    char: "\u{1F6AA}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Gk = {
    keywords: [
      "service"
    ],
    char: "\u{1F6CE}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Uk = {
    keywords: [
      "plush",
      "stuffed"
    ],
    char: "\u{1F9F8}",
    fitzpatrick_scale: false,
    category: "objects"
  }, $k = {
    keywords: [
      "photography"
    ],
    char: "\u{1F5BC}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Vk = {
    keywords: [
      "location",
      "direction"
    ],
    char: "\u{1F5FA}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Xk = {
    keywords: [
      "weather",
      "summer"
    ],
    char: "\u26F1",
    fitzpatrick_scale: false,
    category: "objects"
  }, Wk = {
    keywords: [
      "rock",
      "easter island",
      "moai"
    ],
    char: "\u{1F5FF}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Yk = {
    keywords: [
      "mall",
      "buy",
      "purchase"
    ],
    char: "\u{1F6CD}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Zk = {
    keywords: [
      "trolley"
    ],
    char: "\u{1F6D2}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Kk = {
    keywords: [
      "party",
      "celebration",
      "birthday",
      "circus"
    ],
    char: "\u{1F388}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Jk = {
    keywords: [
      "fish",
      "japanese",
      "koinobori",
      "carp",
      "banner"
    ],
    char: "\u{1F38F}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Qk = {
    keywords: [
      "decoration",
      "pink",
      "girl",
      "bowtie"
    ],
    char: "\u{1F380}",
    fitzpatrick_scale: false,
    category: "objects"
  }, e5 = {
    keywords: [
      "present",
      "birthday",
      "christmas",
      "xmas"
    ],
    char: "\u{1F381}",
    fitzpatrick_scale: false,
    category: "objects"
  }, a5 = {
    keywords: [
      "festival",
      "party",
      "birthday",
      "circus"
    ],
    char: "\u{1F38A}",
    fitzpatrick_scale: false,
    category: "objects"
  }, t5 = {
    keywords: [
      "party",
      "congratulations",
      "birthday",
      "magic",
      "circus",
      "celebration"
    ],
    char: "\u{1F389}",
    fitzpatrick_scale: false,
    category: "objects"
  }, r5 = {
    keywords: [
      "japanese",
      "toy",
      "kimono"
    ],
    char: "\u{1F38E}",
    fitzpatrick_scale: false,
    category: "objects"
  }, s5 = {
    keywords: [
      "nature",
      "ding",
      "spring",
      "bell"
    ],
    char: "\u{1F390}",
    fitzpatrick_scale: false,
    category: "objects"
  }, o5 = {
    keywords: [
      "japanese",
      "nation",
      "country",
      "border"
    ],
    char: "\u{1F38C}",
    fitzpatrick_scale: false,
    category: "objects"
  }, n5 = {
    keywords: [
      "light",
      "paper",
      "halloween",
      "spooky"
    ],
    char: "\u{1F3EE}",
    fitzpatrick_scale: false,
    category: "objects"
  }, c5 = {
    keywords: [
      "gift"
    ],
    char: "\u{1F9E7}",
    fitzpatrick_scale: false,
    category: "objects"
  }, i5 = {
    keywords: [
      "letter",
      "postal",
      "inbox",
      "communication"
    ],
    char: "\u2709\uFE0F",
    fitzpatrick_scale: false,
    category: "objects"
  }, l5 = {
    keywords: [
      "email",
      "communication"
    ],
    char: "\u{1F4E9}",
    fitzpatrick_scale: false,
    category: "objects"
  }, f5 = {
    keywords: [
      "email",
      "inbox"
    ],
    char: "\u{1F4E8}",
    fitzpatrick_scale: false,
    category: "objects"
  }, u5 = {
    keywords: [
      "email",
      "like",
      "affection",
      "envelope",
      "valentines"
    ],
    char: "\u{1F48C}",
    fitzpatrick_scale: false,
    category: "objects"
  }, h5 = {
    keywords: [
      "email",
      "letter",
      "envelope"
    ],
    char: "\u{1F4EE}",
    fitzpatrick_scale: false,
    category: "objects"
  }, d5 = {
    keywords: [
      "email",
      "communication",
      "inbox"
    ],
    char: "\u{1F4EA}",
    fitzpatrick_scale: false,
    category: "objects"
  }, p5 = {
    keywords: [
      "email",
      "inbox",
      "communication"
    ],
    char: "\u{1F4EB}",
    fitzpatrick_scale: false,
    category: "objects"
  }, m5 = {
    keywords: [
      "email",
      "inbox",
      "communication"
    ],
    char: "\u{1F4EC}",
    fitzpatrick_scale: false,
    category: "objects"
  }, y5 = {
    keywords: [
      "email",
      "inbox"
    ],
    char: "\u{1F4ED}",
    fitzpatrick_scale: false,
    category: "objects"
  }, g5 = {
    keywords: [
      "instrument",
      "music"
    ],
    char: "\u{1F4EF}",
    fitzpatrick_scale: false,
    category: "objects"
  }, k5 = {
    keywords: [
      "email",
      "documents"
    ],
    char: "\u{1F4E5}",
    fitzpatrick_scale: false,
    category: "objects"
  }, _5 = {
    keywords: [
      "inbox",
      "email"
    ],
    char: "\u{1F4E4}",
    fitzpatrick_scale: false,
    category: "objects"
  }, w5 = {
    keywords: [
      "documents",
      "ancient",
      "history",
      "paper"
    ],
    char: "\u{1F4DC}",
    fitzpatrick_scale: false,
    category: "objects"
  }, b5 = {
    keywords: [
      "documents",
      "office",
      "paper"
    ],
    char: "\u{1F4C3}",
    fitzpatrick_scale: false,
    category: "objects"
  }, v5 = {
    keywords: [
      "favorite",
      "save",
      "order",
      "tidy"
    ],
    char: "\u{1F4D1}",
    fitzpatrick_scale: false,
    category: "objects"
  }, z5 = {
    keywords: [
      "accounting",
      "expenses"
    ],
    char: "\u{1F9FE}",
    fitzpatrick_scale: false,
    category: "objects"
  }, x5 = {
    keywords: [
      "graph",
      "presentation",
      "stats"
    ],
    char: "\u{1F4CA}",
    fitzpatrick_scale: false,
    category: "objects"
  }, S5 = {
    keywords: [
      "graph",
      "presentation",
      "stats",
      "recovery",
      "business",
      "economics",
      "money",
      "sales",
      "good",
      "success"
    ],
    char: "\u{1F4C8}",
    fitzpatrick_scale: false,
    category: "objects"
  }, A5 = {
    keywords: [
      "graph",
      "presentation",
      "stats",
      "recession",
      "business",
      "economics",
      "money",
      "sales",
      "bad",
      "failure"
    ],
    char: "\u{1F4C9}",
    fitzpatrick_scale: false,
    category: "objects"
  }, M5 = {
    keywords: [
      "documents",
      "office",
      "paper",
      "information"
    ],
    char: "\u{1F4C4}",
    fitzpatrick_scale: false,
    category: "objects"
  }, T5 = {
    keywords: [
      "calendar",
      "schedule"
    ],
    char: "\u{1F4C5}",
    fitzpatrick_scale: false,
    category: "objects"
  }, q5 = {
    keywords: [
      "schedule",
      "date",
      "planning"
    ],
    char: "\u{1F4C6}",
    fitzpatrick_scale: false,
    category: "objects"
  }, j5 = {
    keywords: [
      "date",
      "schedule",
      "planning"
    ],
    char: "\u{1F5D3}",
    fitzpatrick_scale: false,
    category: "objects"
  }, D5 = {
    keywords: [
      "business",
      "stationery"
    ],
    char: "\u{1F4C7}",
    fitzpatrick_scale: false,
    category: "objects"
  }, B5 = {
    keywords: [
      "business",
      "stationery"
    ],
    char: "\u{1F5C3}",
    fitzpatrick_scale: false,
    category: "objects"
  }, C5 = {
    keywords: [
      "election",
      "vote"
    ],
    char: "\u{1F5F3}",
    fitzpatrick_scale: false,
    category: "objects"
  }, E5 = {
    keywords: [
      "filing",
      "organizing"
    ],
    char: "\u{1F5C4}",
    fitzpatrick_scale: false,
    category: "objects"
  }, I5 = {
    keywords: [
      "stationery",
      "documents"
    ],
    char: "\u{1F4CB}",
    fitzpatrick_scale: false,
    category: "objects"
  }, N5 = {
    keywords: [
      "memo",
      "stationery"
    ],
    char: "\u{1F5D2}",
    fitzpatrick_scale: false,
    category: "objects"
  }, R5 = {
    keywords: [
      "documents",
      "business",
      "office"
    ],
    char: "\u{1F4C1}",
    fitzpatrick_scale: false,
    category: "objects"
  }, F5 = {
    keywords: [
      "documents",
      "load"
    ],
    char: "\u{1F4C2}",
    fitzpatrick_scale: false,
    category: "objects"
  }, O5 = {
    keywords: [
      "organizing",
      "business",
      "stationery"
    ],
    char: "\u{1F5C2}",
    fitzpatrick_scale: false,
    category: "objects"
  }, H5 = {
    keywords: [
      "press",
      "headline"
    ],
    char: "\u{1F5DE}",
    fitzpatrick_scale: false,
    category: "objects"
  }, P5 = {
    keywords: [
      "press",
      "headline"
    ],
    char: "\u{1F4F0}",
    fitzpatrick_scale: false,
    category: "objects"
  }, L5 = {
    keywords: [
      "stationery",
      "record",
      "notes",
      "paper",
      "study"
    ],
    char: "\u{1F4D3}",
    fitzpatrick_scale: false,
    category: "objects"
  }, G5 = {
    keywords: [
      "read",
      "library",
      "knowledge",
      "textbook",
      "learn"
    ],
    char: "\u{1F4D5}",
    fitzpatrick_scale: false,
    category: "objects"
  }, U5 = {
    keywords: [
      "read",
      "library",
      "knowledge",
      "study"
    ],
    char: "\u{1F4D7}",
    fitzpatrick_scale: false,
    category: "objects"
  }, $5 = {
    keywords: [
      "read",
      "library",
      "knowledge",
      "learn",
      "study"
    ],
    char: "\u{1F4D8}",
    fitzpatrick_scale: false,
    category: "objects"
  }, V5 = {
    keywords: [
      "read",
      "library",
      "knowledge",
      "textbook",
      "study"
    ],
    char: "\u{1F4D9}",
    fitzpatrick_scale: false,
    category: "objects"
  }, X5 = {
    keywords: [
      "classroom",
      "notes",
      "record",
      "paper",
      "study"
    ],
    char: "\u{1F4D4}",
    fitzpatrick_scale: false,
    category: "objects"
  }, W5 = {
    keywords: [
      "notes",
      "paper"
    ],
    char: "\u{1F4D2}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Y5 = {
    keywords: [
      "literature",
      "library",
      "study"
    ],
    char: "\u{1F4DA}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Z5 = {
    keywords: [
      "book",
      "read",
      "library",
      "knowledge",
      "literature",
      "learn",
      "study"
    ],
    char: "\u{1F4D6}",
    fitzpatrick_scale: false,
    category: "objects"
  }, K5 = {
    keywords: [
      "diaper"
    ],
    char: "\u{1F9F7}",
    fitzpatrick_scale: false,
    category: "objects"
  }, J5 = {
    keywords: [
      "rings",
      "url"
    ],
    char: "\u{1F517}",
    fitzpatrick_scale: false,
    category: "objects"
  }, Q5 = {
    keywords: [
      "documents",
      "stationery"
    ],
    char: "\u{1F4CE}",
    fitzpatrick_scale: false,
    category: "objects"
  }, e3 = {
    keywords: [
      "documents",
      "stationery"
    ],
    char: "\u{1F587}",
    fitzpatrick_scale: false,
    category: "objects"
  }, a3 = {
    keywords: [
      "stationery",
      "cut"
    ],
    char: "\u2702\uFE0F",
    fitzpatrick_scale: false,
    category: "objects"
  }, t3 = {
    keywords: [
      "stationery",
      "math",
      "architect",
      "sketch"
    ],
    char: "\u{1F4D0}",
    fitzpatrick_scale: false,
    category: "objects"
  }, r3 = {
    keywords: [
      "stationery",
      "calculate",
      "length",
      "math",
      "school",
      "drawing",
      "architect",
      "sketch"
    ],
    char: "\u{1F4CF}",
    fitzpatrick_scale: false,
    category: "objects"
  }, s3 = {
    keywords: [
      "calculation"
    ],
    char: "\u{1F9EE}",
    fitzpatrick_scale: false,
    category: "objects"
  }, o3 = {
    keywords: [
      "stationery",
      "mark",
      "here"
    ],
    char: "\u{1F4CC}",
    fitzpatrick_scale: false,
    category: "objects"
  }, n3 = {
    keywords: [
      "stationery",
      "location",
      "map",
      "here"
    ],
    char: "\u{1F4CD}",
    fitzpatrick_scale: false,
    category: "objects"
  }, c3 = {
    keywords: [
      "mark",
      "milestone",
      "place"
    ],
    char: "\u{1F6A9}",
    fitzpatrick_scale: false,
    category: "objects"
  }, i3 = {
    keywords: [
      "losing",
      "loser",
      "lost",
      "surrender",
      "give up",
      "fail"
    ],
    char: "\u{1F3F3}",
    fitzpatrick_scale: false,
    category: "objects"
  }, l3 = {
    keywords: [
      "pirate"
    ],
    char: "\u{1F3F4}",
    fitzpatrick_scale: false,
    category: "objects"
  }, f3 = {
    keywords: [
      "flag",
      "rainbow",
      "pride",
      "gay",
      "lgbt",
      "glbt",
      "queer",
      "homosexual",
      "lesbian",
      "bisexual",
      "transgender"
    ],
    char: "\u{1F3F3}\uFE0F\u200D\u{1F308}",
    fitzpatrick_scale: false,
    category: "objects"
  }, u3 = {
    keywords: [
      "security",
      "privacy"
    ],
    char: "\u{1F510}",
    fitzpatrick_scale: false,
    category: "objects"
  }, h3 = {
    keywords: [
      "security",
      "password",
      "padlock"
    ],
    char: "\u{1F512}",
    fitzpatrick_scale: false,
    category: "objects"
  }, d3 = {
    keywords: [
      "privacy",
      "security"
    ],
    char: "\u{1F513}",
    fitzpatrick_scale: false,
    category: "objects"
  }, p3 = {
    keywords: [
      "security",
      "secret"
    ],
    char: "\u{1F50F}",
    fitzpatrick_scale: false,
    category: "objects"
  }, m3 = {
    keywords: [
      "stationery",
      "writing",
      "write"
    ],
    char: "\u{1F58A}",
    fitzpatrick_scale: false,
    category: "objects"
  }, y3 = {
    keywords: [
      "stationery",
      "writing",
      "write"
    ],
    char: "\u{1F58B}",
    fitzpatrick_scale: false,
    category: "objects"
  }, g3 = {
    keywords: [
      "pen",
      "stationery",
      "writing",
      "write"
    ],
    char: "\u2712\uFE0F",
    fitzpatrick_scale: false,
    category: "objects"
  }, k3 = {
    keywords: [
      "write",
      "documents",
      "stationery",
      "pencil",
      "paper",
      "writing",
      "legal",
      "exam",
      "quiz",
      "test",
      "study",
      "compose"
    ],
    char: "\u{1F4DD}",
    fitzpatrick_scale: false,
    category: "objects"
  }, _3 = {
    keywords: [
      "stationery",
      "write",
      "paper",
      "writing",
      "school",
      "study"
    ],
    char: "\u270F\uFE0F",
    fitzpatrick_scale: false,
    category: "objects"
  }, w3 = {
    keywords: [
      "drawing",
      "creativity"
    ],
    char: "\u{1F58D}",
    fitzpatrick_scale: false,
    category: "objects"
  }, b3 = {
    keywords: [
      "drawing",
      "creativity",
      "art"
    ],
    char: "\u{1F58C}",
    fitzpatrick_scale: false,
    category: "objects"
  }, v3 = {
    keywords: [
      "search",
      "zoom",
      "find",
      "detective"
    ],
    char: "\u{1F50D}",
    fitzpatrick_scale: false,
    category: "objects"
  }, z3 = {
    keywords: [
      "search",
      "zoom",
      "find",
      "detective"
    ],
    char: "\u{1F50E}",
    fitzpatrick_scale: false,
    category: "objects"
  }, x3 = {
    keywords: [
      "love",
      "like",
      "valentines"
    ],
    char: "\u2764\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, S3 = {
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    char: "\u{1F9E1}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, A3 = {
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    char: "\u{1F49B}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, M3 = {
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    char: "\u{1F49A}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, T3 = {
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    char: "\u{1F499}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, q3 = {
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    char: "\u{1F49C}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, j3 = {
    keywords: [
      "evil"
    ],
    char: "\u{1F5A4}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, D3 = {
    keywords: [
      "sad",
      "sorry",
      "break",
      "heart",
      "heartbreak"
    ],
    char: "\u{1F494}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, B3 = {
    keywords: [
      "decoration",
      "love"
    ],
    char: "\u2763",
    fitzpatrick_scale: false,
    category: "symbols"
  }, C3 = {
    keywords: [
      "love",
      "like",
      "affection",
      "valentines",
      "heart"
    ],
    char: "\u{1F495}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, E3 = {
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    char: "\u{1F49E}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, I3 = {
    keywords: [
      "love",
      "like",
      "affection",
      "valentines",
      "pink",
      "heart"
    ],
    char: "\u{1F493}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, N3 = {
    keywords: [
      "like",
      "love",
      "affection",
      "valentines",
      "pink"
    ],
    char: "\u{1F497}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, R3 = {
    keywords: [
      "love",
      "like",
      "affection",
      "valentines"
    ],
    char: "\u{1F496}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, F3 = {
    keywords: [
      "love",
      "like",
      "heart",
      "affection",
      "valentines"
    ],
    char: "\u{1F498}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, O3 = {
    keywords: [
      "love",
      "valentines"
    ],
    char: "\u{1F49D}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, H3 = {
    keywords: [
      "purple-square",
      "love",
      "like"
    ],
    char: "\u{1F49F}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, P3 = {
    keywords: [
      "hippie"
    ],
    char: "\u262E",
    fitzpatrick_scale: false,
    category: "symbols"
  }, L3 = {
    keywords: [
      "christianity"
    ],
    char: "\u271D",
    fitzpatrick_scale: false,
    category: "symbols"
  }, G3 = {
    keywords: [
      "islam"
    ],
    char: "\u262A",
    fitzpatrick_scale: false,
    category: "symbols"
  }, U3 = {
    keywords: [
      "hinduism",
      "buddhism",
      "sikhism",
      "jainism"
    ],
    char: "\u{1F549}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, $3 = {
    keywords: [
      "hinduism",
      "buddhism",
      "sikhism",
      "jainism"
    ],
    char: "\u2638",
    fitzpatrick_scale: false,
    category: "symbols"
  }, V3 = {
    keywords: [
      "judaism"
    ],
    char: "\u2721",
    fitzpatrick_scale: false,
    category: "symbols"
  }, X3 = {
    keywords: [
      "purple-square",
      "religion",
      "jewish",
      "hexagram"
    ],
    char: "\u{1F52F}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, W3 = {
    keywords: [
      "hanukkah",
      "candles",
      "jewish"
    ],
    char: "\u{1F54E}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Y3 = {
    keywords: [
      "balance"
    ],
    char: "\u262F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Z3 = {
    keywords: [
      "suppedaneum",
      "religion"
    ],
    char: "\u2626",
    fitzpatrick_scale: false,
    category: "symbols"
  }, K3 = {
    keywords: [
      "religion",
      "church",
      "temple",
      "prayer"
    ],
    char: "\u{1F6D0}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, J3 = {
    keywords: [
      "sign",
      "purple-square",
      "constellation",
      "astrology"
    ],
    char: "\u26CE",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Q3 = {
    keywords: [
      "sign",
      "purple-square",
      "zodiac",
      "astrology"
    ],
    char: "\u2648",
    fitzpatrick_scale: false,
    category: "symbols"
  }, e6 = {
    keywords: [
      "purple-square",
      "sign",
      "zodiac",
      "astrology"
    ],
    char: "\u2649",
    fitzpatrick_scale: false,
    category: "symbols"
  }, a6 = {
    keywords: [
      "sign",
      "zodiac",
      "purple-square",
      "astrology"
    ],
    char: "\u264A",
    fitzpatrick_scale: false,
    category: "symbols"
  }, t6 = {
    keywords: [
      "sign",
      "zodiac",
      "purple-square",
      "astrology"
    ],
    char: "\u264B",
    fitzpatrick_scale: false,
    category: "symbols"
  }, r6 = {
    keywords: [
      "sign",
      "purple-square",
      "zodiac",
      "astrology"
    ],
    char: "\u264C",
    fitzpatrick_scale: false,
    category: "symbols"
  }, s6 = {
    keywords: [
      "sign",
      "zodiac",
      "purple-square",
      "astrology"
    ],
    char: "\u264D",
    fitzpatrick_scale: false,
    category: "symbols"
  }, o6 = {
    keywords: [
      "sign",
      "purple-square",
      "zodiac",
      "astrology"
    ],
    char: "\u264E",
    fitzpatrick_scale: false,
    category: "symbols"
  }, n6 = {
    keywords: [
      "sign",
      "zodiac",
      "purple-square",
      "astrology",
      "scorpio"
    ],
    char: "\u264F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, c6 = {
    keywords: [
      "sign",
      "zodiac",
      "purple-square",
      "astrology"
    ],
    char: "\u2650",
    fitzpatrick_scale: false,
    category: "symbols"
  }, i6 = {
    keywords: [
      "sign",
      "zodiac",
      "purple-square",
      "astrology"
    ],
    char: "\u2651",
    fitzpatrick_scale: false,
    category: "symbols"
  }, l6 = {
    keywords: [
      "sign",
      "purple-square",
      "zodiac",
      "astrology"
    ],
    char: "\u2652",
    fitzpatrick_scale: false,
    category: "symbols"
  }, f6 = {
    keywords: [
      "purple-square",
      "sign",
      "zodiac",
      "astrology"
    ],
    char: "\u2653",
    fitzpatrick_scale: false,
    category: "symbols"
  }, u6 = {
    keywords: [
      "purple-square",
      "words"
    ],
    char: "\u{1F194}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, h6 = {
    keywords: [
      "science",
      "physics",
      "chemistry"
    ],
    char: "\u269B",
    fitzpatrick_scale: false,
    category: "symbols"
  }, d6 = {
    keywords: [
      "kanji",
      "japanese",
      "chinese",
      "empty",
      "sky",
      "blue-square"
    ],
    char: "\u{1F233}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, p6 = {
    keywords: [
      "cut",
      "divide",
      "chinese",
      "kanji",
      "pink-square"
    ],
    char: "\u{1F239}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, m6 = {
    keywords: [
      "nuclear",
      "danger"
    ],
    char: "\u2622",
    fitzpatrick_scale: false,
    category: "symbols"
  }, y6 = {
    keywords: [
      "danger"
    ],
    char: "\u2623",
    fitzpatrick_scale: false,
    category: "symbols"
  }, g6 = {
    keywords: [
      "mute",
      "orange-square",
      "silence",
      "quiet"
    ],
    char: "\u{1F4F4}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, k6 = {
    keywords: [
      "orange-square",
      "phone"
    ],
    char: "\u{1F4F3}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, _6 = {
    keywords: [
      "orange-square",
      "chinese",
      "have",
      "kanji"
    ],
    char: "\u{1F236}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, w6 = {
    keywords: [
      "nothing",
      "chinese",
      "kanji",
      "japanese",
      "orange-square"
    ],
    char: "\u{1F21A}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, b6 = {
    keywords: [
      "chinese",
      "japanese",
      "kanji",
      "orange-square"
    ],
    char: "\u{1F238}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, v6 = {
    keywords: [
      "japanese",
      "opening hours",
      "orange-square"
    ],
    char: "\u{1F23A}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, z6 = {
    keywords: [
      "chinese",
      "month",
      "moon",
      "japanese",
      "orange-square",
      "kanji"
    ],
    char: "\u{1F237}\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, x6 = {
    keywords: [
      "orange-square",
      "shape",
      "polygon"
    ],
    char: "\u2734\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, S6 = {
    keywords: [
      "words",
      "orange-square"
    ],
    char: "\u{1F19A}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, A6 = {
    keywords: [
      "ok",
      "good",
      "chinese",
      "kanji",
      "agree",
      "yes",
      "orange-circle"
    ],
    char: "\u{1F251}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, M6 = {
    keywords: [
      "japanese",
      "spring"
    ],
    char: "\u{1F4AE}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, T6 = {
    keywords: [
      "chinese",
      "kanji",
      "obtain",
      "get",
      "circle"
    ],
    char: "\u{1F250}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, q6 = {
    keywords: [
      "privacy",
      "chinese",
      "sshh",
      "kanji",
      "red-circle"
    ],
    char: "\u3299\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, j6 = {
    keywords: [
      "chinese",
      "kanji",
      "japanese",
      "red-circle"
    ],
    char: "\u3297\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, D6 = {
    keywords: [
      "japanese",
      "chinese",
      "join",
      "kanji",
      "red-square"
    ],
    char: "\u{1F234}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, B6 = {
    keywords: [
      "full",
      "chinese",
      "japanese",
      "red-square",
      "kanji"
    ],
    char: "\u{1F235}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, C6 = {
    keywords: [
      "kanji",
      "japanese",
      "chinese",
      "forbidden",
      "limit",
      "restricted",
      "red-square"
    ],
    char: "\u{1F232}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, E6 = {
    keywords: [
      "red-square",
      "alphabet",
      "letter"
    ],
    char: "\u{1F170}\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, I6 = {
    keywords: [
      "red-square",
      "alphabet",
      "letter"
    ],
    char: "\u{1F171}\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, N6 = {
    keywords: [
      "red-square",
      "alphabet"
    ],
    char: "\u{1F18E}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, R6 = {
    keywords: [
      "alphabet",
      "words",
      "red-square"
    ],
    char: "\u{1F191}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, F6 = {
    keywords: [
      "alphabet",
      "red-square",
      "letter"
    ],
    char: "\u{1F17E}\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, O6 = {
    keywords: [
      "help",
      "red-square",
      "words",
      "emergency",
      "911"
    ],
    char: "\u{1F198}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, H6 = {
    keywords: [
      "limit",
      "security",
      "privacy",
      "bad",
      "denied",
      "stop",
      "circle"
    ],
    char: "\u26D4",
    fitzpatrick_scale: false,
    category: "symbols"
  }, P6 = {
    keywords: [
      "fire",
      "forbid"
    ],
    char: "\u{1F4DB}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, L6 = {
    keywords: [
      "forbid",
      "stop",
      "limit",
      "denied",
      "disallow",
      "circle"
    ],
    char: "\u{1F6AB}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, G6 = {
    keywords: [
      "no",
      "delete",
      "remove",
      "cancel",
      "red"
    ],
    char: "\u274C",
    fitzpatrick_scale: false,
    category: "symbols"
  }, U6 = {
    keywords: [
      "circle",
      "round"
    ],
    char: "\u2B55",
    fitzpatrick_scale: false,
    category: "symbols"
  }, $6 = {
    keywords: [
      "stop"
    ],
    char: "\u{1F6D1}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, V6 = {
    keywords: [
      "angry",
      "mad"
    ],
    char: "\u{1F4A2}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, X6 = {
    keywords: [
      "bath",
      "warm",
      "relax"
    ],
    char: "\u2668\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, W6 = {
    keywords: [
      "rules",
      "crossing",
      "walking",
      "circle"
    ],
    char: "\u{1F6B7}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Y6 = {
    keywords: [
      "trash",
      "bin",
      "garbage",
      "circle"
    ],
    char: "\u{1F6AF}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Z6 = {
    keywords: [
      "cyclist",
      "prohibited",
      "circle"
    ],
    char: "\u{1F6B3}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, K6 = {
    keywords: [
      "18",
      "drink",
      "pub",
      "night",
      "minor",
      "circle"
    ],
    char: "\u{1F51E}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, J6 = {
    keywords: [
      "iphone",
      "mute",
      "circle"
    ],
    char: "\u{1F4F5}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Q6 = {
    keywords: [
      "heavy_exclamation_mark",
      "danger",
      "surprise",
      "punctuation",
      "wow",
      "warning"
    ],
    char: "\u2757",
    fitzpatrick_scale: false,
    category: "symbols"
  }, e7 = {
    keywords: [
      "surprise",
      "punctuation",
      "gray",
      "wow",
      "warning"
    ],
    char: "\u2755",
    fitzpatrick_scale: false,
    category: "symbols"
  }, a7 = {
    keywords: [
      "doubt",
      "confused"
    ],
    char: "\u2753",
    fitzpatrick_scale: false,
    category: "symbols"
  }, t7 = {
    keywords: [
      "doubts",
      "gray",
      "huh",
      "confused"
    ],
    char: "\u2754",
    fitzpatrick_scale: false,
    category: "symbols"
  }, r7 = {
    keywords: [
      "exclamation",
      "surprise"
    ],
    char: "\u203C\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, s7 = {
    keywords: [
      "wat",
      "punctuation",
      "surprise"
    ],
    char: "\u2049\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, o7 = {
    keywords: [
      "sun",
      "afternoon",
      "warm",
      "summer"
    ],
    char: "\u{1F505}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, n7 = {
    keywords: [
      "sun",
      "light"
    ],
    char: "\u{1F506}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, c7 = {
    keywords: [
      "weapon",
      "spear"
    ],
    char: "\u{1F531}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, i7 = {
    keywords: [
      "decorative",
      "scout"
    ],
    char: "\u269C",
    fitzpatrick_scale: false,
    category: "symbols"
  }, l7 = {
    keywords: [
      "graph",
      "presentation",
      "stats",
      "business",
      "economics",
      "bad"
    ],
    char: "\u303D\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, f7 = {
    keywords: [
      "exclamation",
      "wip",
      "alert",
      "error",
      "problem",
      "issue"
    ],
    char: "\u26A0\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, u7 = {
    keywords: [
      "school",
      "warning",
      "danger",
      "sign",
      "driving",
      "yellow-diamond"
    ],
    char: "\u{1F6B8}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, h7 = {
    keywords: [
      "badge",
      "shield"
    ],
    char: "\u{1F530}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, d7 = {
    keywords: [
      "arrow",
      "environment",
      "garbage",
      "trash"
    ],
    char: "\u267B\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, p7 = {
    keywords: [
      "chinese",
      "point",
      "green-square",
      "kanji"
    ],
    char: "\u{1F22F}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, m7 = {
    keywords: [
      "green-square",
      "graph",
      "presentation",
      "stats"
    ],
    char: "\u{1F4B9}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, y7 = {
    keywords: [
      "stars",
      "green-square",
      "awesome",
      "good",
      "fireworks"
    ],
    char: "\u2747\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, g7 = {
    keywords: [
      "star",
      "sparkle",
      "green-square"
    ],
    char: "\u2733\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, k7 = {
    keywords: [
      "x",
      "green-square",
      "no",
      "deny"
    ],
    char: "\u274E",
    fitzpatrick_scale: false,
    category: "symbols"
  }, _7 = {
    keywords: [
      "green-square",
      "ok",
      "agree",
      "vote",
      "election",
      "answer",
      "tick"
    ],
    char: "\u2705",
    fitzpatrick_scale: false,
    category: "symbols"
  }, w7 = {
    keywords: [
      "jewel",
      "blue",
      "gem",
      "crystal",
      "fancy"
    ],
    char: "\u{1F4A0}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, b7 = {
    keywords: [
      "weather",
      "swirl",
      "blue",
      "cloud",
      "vortex",
      "spiral",
      "whirlpool",
      "spin",
      "tornado",
      "hurricane",
      "typhoon"
    ],
    char: "\u{1F300}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, v7 = {
    keywords: [
      "tape",
      "cassette"
    ],
    char: "\u27BF",
    fitzpatrick_scale: false,
    category: "symbols"
  }, z7 = {
    keywords: [
      "earth",
      "international",
      "world",
      "internet",
      "interweb",
      "i18n"
    ],
    char: "\u{1F310}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, x7 = {
    keywords: [
      "alphabet",
      "blue-circle",
      "letter"
    ],
    char: "\u24C2\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, S7 = {
    keywords: [
      "money",
      "sales",
      "cash",
      "blue-square",
      "payment",
      "bank"
    ],
    char: "\u{1F3E7}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, A7 = {
    keywords: [
      "japanese",
      "blue-square",
      "katakana"
    ],
    char: "\u{1F202}\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, M7 = {
    keywords: [
      "custom",
      "blue-square"
    ],
    char: "\u{1F6C2}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, T7 = {
    keywords: [
      "passport",
      "border",
      "blue-square"
    ],
    char: "\u{1F6C3}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, q7 = {
    keywords: [
      "blue-square",
      "airport",
      "transport"
    ],
    char: "\u{1F6C4}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, j7 = {
    keywords: [
      "blue-square",
      "travel"
    ],
    char: "\u{1F6C5}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, D7 = {
    keywords: [
      "blue-square",
      "disabled",
      "a11y",
      "accessibility"
    ],
    char: "\u267F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, B7 = {
    keywords: [
      "cigarette",
      "blue-square",
      "smell",
      "smoke"
    ],
    char: "\u{1F6AD}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, C7 = {
    keywords: [
      "toilet",
      "restroom",
      "blue-square"
    ],
    char: "\u{1F6BE}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, E7 = {
    keywords: [
      "cars",
      "blue-square",
      "alphabet",
      "letter"
    ],
    char: "\u{1F17F}\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, I7 = {
    keywords: [
      "blue-square",
      "liquid",
      "restroom",
      "cleaning",
      "faucet"
    ],
    char: "\u{1F6B0}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, N7 = {
    keywords: [
      "toilet",
      "restroom",
      "wc",
      "blue-square",
      "gender",
      "male"
    ],
    char: "\u{1F6B9}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, R7 = {
    keywords: [
      "purple-square",
      "woman",
      "female",
      "toilet",
      "loo",
      "restroom",
      "gender"
    ],
    char: "\u{1F6BA}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, F7 = {
    keywords: [
      "orange-square",
      "child"
    ],
    char: "\u{1F6BC}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, O7 = {
    keywords: [
      "blue-square",
      "toilet",
      "refresh",
      "wc",
      "gender"
    ],
    char: "\u{1F6BB}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, H7 = {
    keywords: [
      "blue-square",
      "sign",
      "human",
      "info"
    ],
    char: "\u{1F6AE}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, P7 = {
    keywords: [
      "blue-square",
      "record",
      "film",
      "movie",
      "curtain",
      "stage",
      "theater"
    ],
    char: "\u{1F3A6}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, L7 = {
    keywords: [
      "blue-square",
      "reception",
      "phone",
      "internet",
      "connection",
      "wifi",
      "bluetooth",
      "bars"
    ],
    char: "\u{1F4F6}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, G7 = {
    keywords: [
      "blue-square",
      "here",
      "katakana",
      "japanese",
      "destination"
    ],
    char: "\u{1F201}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, U7 = {
    keywords: [
      "blue-square",
      "words",
      "shape",
      "icon"
    ],
    char: "\u{1F196}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, $7 = {
    keywords: [
      "good",
      "agree",
      "yes",
      "blue-square"
    ],
    char: "\u{1F197}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, V7 = {
    keywords: [
      "blue-square",
      "above",
      "high"
    ],
    char: "\u{1F199}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, X7 = {
    keywords: [
      "words",
      "blue-square"
    ],
    char: "\u{1F192}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, W7 = {
    keywords: [
      "blue-square",
      "words"
    ],
    char: "\u{1F193}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Y7 = {
    keywords: [
      "0",
      "numbers",
      "blue-square",
      "null"
    ],
    char: "0\uFE0F\u20E3",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Z7 = {
    keywords: [
      "blue-square",
      "numbers",
      "1"
    ],
    char: "1\uFE0F\u20E3",
    fitzpatrick_scale: false,
    category: "symbols"
  }, K7 = {
    keywords: [
      "numbers",
      "2",
      "prime",
      "blue-square"
    ],
    char: "2\uFE0F\u20E3",
    fitzpatrick_scale: false,
    category: "symbols"
  }, J7 = {
    keywords: [
      "3",
      "numbers",
      "prime",
      "blue-square"
    ],
    char: "3\uFE0F\u20E3",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Q7 = {
    keywords: [
      "4",
      "numbers",
      "blue-square"
    ],
    char: "4\uFE0F\u20E3",
    fitzpatrick_scale: false,
    category: "symbols"
  }, e_ = {
    keywords: [
      "5",
      "numbers",
      "blue-square",
      "prime"
    ],
    char: "5\uFE0F\u20E3",
    fitzpatrick_scale: false,
    category: "symbols"
  }, a_ = {
    keywords: [
      "6",
      "numbers",
      "blue-square"
    ],
    char: "6\uFE0F\u20E3",
    fitzpatrick_scale: false,
    category: "symbols"
  }, t_ = {
    keywords: [
      "7",
      "numbers",
      "blue-square",
      "prime"
    ],
    char: "7\uFE0F\u20E3",
    fitzpatrick_scale: false,
    category: "symbols"
  }, r_ = {
    keywords: [
      "8",
      "blue-square",
      "numbers"
    ],
    char: "8\uFE0F\u20E3",
    fitzpatrick_scale: false,
    category: "symbols"
  }, s_ = {
    keywords: [
      "blue-square",
      "numbers",
      "9"
    ],
    char: "9\uFE0F\u20E3",
    fitzpatrick_scale: false,
    category: "symbols"
  }, o_ = {
    keywords: [
      "numbers",
      "10",
      "blue-square"
    ],
    char: "\u{1F51F}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, n_ = {
    keywords: [
      "star",
      "keycap"
    ],
    char: "*\u20E3",
    fitzpatrick_scale: false,
    category: "symbols"
  }, c_ = {
    keywords: [
      "blue-square"
    ],
    char: "\u23CF\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, i_ = {
    keywords: [
      "blue-square",
      "right",
      "direction",
      "play"
    ],
    char: "\u25B6\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, l_ = {
    keywords: [
      "pause",
      "blue-square"
    ],
    char: "\u23F8",
    fitzpatrick_scale: false,
    category: "symbols"
  }, f_ = {
    keywords: [
      "forward",
      "next",
      "blue-square"
    ],
    char: "\u23ED",
    fitzpatrick_scale: false,
    category: "symbols"
  }, u_ = {
    keywords: [
      "blue-square"
    ],
    char: "\u23F9",
    fitzpatrick_scale: false,
    category: "symbols"
  }, h_ = {
    keywords: [
      "blue-square"
    ],
    char: "\u23FA",
    fitzpatrick_scale: false,
    category: "symbols"
  }, d_ = {
    keywords: [
      "blue-square",
      "play",
      "pause"
    ],
    char: "\u23EF",
    fitzpatrick_scale: false,
    category: "symbols"
  }, p_ = {
    keywords: [
      "backward"
    ],
    char: "\u23EE",
    fitzpatrick_scale: false,
    category: "symbols"
  }, m_ = {
    keywords: [
      "blue-square",
      "play",
      "speed",
      "continue"
    ],
    char: "\u23E9",
    fitzpatrick_scale: false,
    category: "symbols"
  }, y_ = {
    keywords: [
      "play",
      "blue-square"
    ],
    char: "\u23EA",
    fitzpatrick_scale: false,
    category: "symbols"
  }, g_ = {
    keywords: [
      "blue-square",
      "shuffle",
      "music",
      "random"
    ],
    char: "\u{1F500}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, k_ = {
    keywords: [
      "loop",
      "record"
    ],
    char: "\u{1F501}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, __ = {
    keywords: [
      "blue-square",
      "loop"
    ],
    char: "\u{1F502}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, w_ = {
    keywords: [
      "blue-square",
      "left",
      "direction"
    ],
    char: "\u25C0\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, b_ = {
    keywords: [
      "blue-square",
      "triangle",
      "direction",
      "point",
      "forward",
      "top"
    ],
    char: "\u{1F53C}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, v_ = {
    keywords: [
      "blue-square",
      "direction",
      "bottom"
    ],
    char: "\u{1F53D}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, z_ = {
    keywords: [
      "blue-square",
      "direction",
      "top"
    ],
    char: "\u23EB",
    fitzpatrick_scale: false,
    category: "symbols"
  }, x_ = {
    keywords: [
      "blue-square",
      "direction",
      "bottom"
    ],
    char: "\u23EC",
    fitzpatrick_scale: false,
    category: "symbols"
  }, S_ = {
    keywords: [
      "blue-square",
      "next"
    ],
    char: "\u27A1\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, A_ = {
    keywords: [
      "blue-square",
      "previous",
      "back"
    ],
    char: "\u2B05\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, M_ = {
    keywords: [
      "blue-square",
      "continue",
      "top",
      "direction"
    ],
    char: "\u2B06\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, T_ = {
    keywords: [
      "blue-square",
      "direction",
      "bottom"
    ],
    char: "\u2B07\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, q_ = {
    keywords: [
      "blue-square",
      "point",
      "direction",
      "diagonal",
      "northeast"
    ],
    char: "\u2197\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, j_ = {
    keywords: [
      "blue-square",
      "direction",
      "diagonal",
      "southeast"
    ],
    char: "\u2198\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, D_ = {
    keywords: [
      "blue-square",
      "direction",
      "diagonal",
      "southwest"
    ],
    char: "\u2199\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, B_ = {
    keywords: [
      "blue-square",
      "point",
      "direction",
      "diagonal",
      "northwest"
    ],
    char: "\u2196\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, C_ = {
    keywords: [
      "blue-square",
      "direction",
      "way",
      "vertical"
    ],
    char: "\u2195\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, E_ = {
    keywords: [
      "shape",
      "direction",
      "horizontal",
      "sideways"
    ],
    char: "\u2194\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, I_ = {
    keywords: [
      "blue-square",
      "sync",
      "cycle"
    ],
    char: "\u{1F504}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, N_ = {
    keywords: [
      "blue-square",
      "return",
      "rotate",
      "direction"
    ],
    char: "\u21AA\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, R_ = {
    keywords: [
      "back",
      "return",
      "blue-square",
      "undo",
      "enter"
    ],
    char: "\u21A9\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, F_ = {
    keywords: [
      "blue-square",
      "direction",
      "top"
    ],
    char: "\u2934\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, O_ = {
    keywords: [
      "blue-square",
      "direction",
      "bottom"
    ],
    char: "\u2935\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, H_ = {
    keywords: [
      "symbol",
      "blue-square",
      "twitter"
    ],
    char: "#\uFE0F\u20E3",
    fitzpatrick_scale: false,
    category: "symbols"
  }, P_ = {
    keywords: [
      "blue-square",
      "alphabet",
      "letter"
    ],
    char: "\u2139\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, L_ = {
    keywords: [
      "blue-square",
      "alphabet"
    ],
    char: "\u{1F524}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, G_ = {
    keywords: [
      "blue-square",
      "alphabet"
    ],
    char: "\u{1F521}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, U_ = {
    keywords: [
      "alphabet",
      "words",
      "blue-square"
    ],
    char: "\u{1F520}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, $_ = {
    keywords: [
      "blue-square",
      "music",
      "note",
      "ampersand",
      "percent",
      "glyphs",
      "characters"
    ],
    char: "\u{1F523}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, V_ = {
    keywords: [
      "score",
      "tone",
      "sound"
    ],
    char: "\u{1F3B5}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, X_ = {
    keywords: [
      "music",
      "score"
    ],
    char: "\u{1F3B6}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, W_ = {
    keywords: [
      "draw",
      "line",
      "moustache",
      "mustache",
      "squiggle",
      "scribble"
    ],
    char: "\u3030\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Y_ = {
    keywords: [
      "scribble",
      "draw",
      "shape",
      "squiggle"
    ],
    char: "\u27B0",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Z_ = {
    keywords: [
      "ok",
      "nike",
      "answer",
      "yes",
      "tick"
    ],
    char: "\u2714\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, K_ = {
    keywords: [
      "sync",
      "cycle",
      "round",
      "repeat"
    ],
    char: "\u{1F503}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, J_ = {
    keywords: [
      "math",
      "calculation",
      "addition",
      "more",
      "increase"
    ],
    char: "\u2795",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Q_ = {
    keywords: [
      "math",
      "calculation",
      "subtract",
      "less"
    ],
    char: "\u2796",
    fitzpatrick_scale: false,
    category: "symbols"
  }, e8 = {
    keywords: [
      "divide",
      "math",
      "calculation"
    ],
    char: "\u2797",
    fitzpatrick_scale: false,
    category: "symbols"
  }, a8 = {
    keywords: [
      "math",
      "calculation"
    ],
    char: "\u2716\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, t8 = {
    keywords: [
      "forever"
    ],
    char: "\u267E",
    fitzpatrick_scale: false,
    category: "symbols"
  }, r8 = {
    keywords: [
      "money",
      "sales",
      "payment",
      "currency",
      "buck"
    ],
    char: "\u{1F4B2}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, s8 = {
    keywords: [
      "money",
      "sales",
      "dollar",
      "travel"
    ],
    char: "\u{1F4B1}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, o8 = {
    keywords: [
      "ip",
      "license",
      "circle",
      "law",
      "legal"
    ],
    char: "\xA9\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, n8 = {
    keywords: [
      "alphabet",
      "circle"
    ],
    char: "\xAE\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, c8 = {
    keywords: [
      "trademark",
      "brand",
      "law",
      "legal"
    ],
    char: "\u2122\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, i8 = {
    keywords: [
      "words",
      "arrow"
    ],
    char: "\u{1F51A}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, l8 = {
    keywords: [
      "arrow",
      "words",
      "return"
    ],
    char: "\u{1F519}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, f8 = {
    keywords: [
      "arrow",
      "words"
    ],
    char: "\u{1F51B}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, u8 = {
    keywords: [
      "words",
      "blue-square"
    ],
    char: "\u{1F51D}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, h8 = {
    keywords: [
      "arrow",
      "words"
    ],
    char: "\u{1F51C}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, d8 = {
    keywords: [
      "ok",
      "agree",
      "confirm",
      "black-square",
      "vote",
      "election",
      "yes",
      "tick"
    ],
    char: "\u2611\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, p8 = {
    keywords: [
      "input",
      "old",
      "music",
      "circle"
    ],
    char: "\u{1F518}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, m8 = {
    keywords: [
      "shape",
      "round"
    ],
    char: "\u26AA",
    fitzpatrick_scale: false,
    category: "symbols"
  }, y8 = {
    keywords: [
      "shape",
      "button",
      "round"
    ],
    char: "\u26AB",
    fitzpatrick_scale: false,
    category: "symbols"
  }, g8 = {
    keywords: [
      "shape",
      "error",
      "danger"
    ],
    char: "\u{1F534}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, k8 = {
    keywords: [
      "shape",
      "icon",
      "button"
    ],
    char: "\u{1F535}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, _8 = {
    keywords: [
      "shape",
      "jewel",
      "gem"
    ],
    char: "\u{1F538}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, w8 = {
    keywords: [
      "shape",
      "jewel",
      "gem"
    ],
    char: "\u{1F539}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, b8 = {
    keywords: [
      "shape",
      "jewel",
      "gem"
    ],
    char: "\u{1F536}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, v8 = {
    keywords: [
      "shape",
      "jewel",
      "gem"
    ],
    char: "\u{1F537}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, z8 = {
    keywords: [
      "shape",
      "direction",
      "up",
      "top"
    ],
    char: "\u{1F53A}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, x8 = {
    keywords: [
      "shape",
      "icon"
    ],
    char: "\u25AA\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, S8 = {
    keywords: [
      "shape",
      "icon"
    ],
    char: "\u25AB\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, A8 = {
    keywords: [
      "shape",
      "icon",
      "button"
    ],
    char: "\u2B1B",
    fitzpatrick_scale: false,
    category: "symbols"
  }, M8 = {
    keywords: [
      "shape",
      "icon",
      "stone",
      "button"
    ],
    char: "\u2B1C",
    fitzpatrick_scale: false,
    category: "symbols"
  }, T8 = {
    keywords: [
      "shape",
      "direction",
      "bottom"
    ],
    char: "\u{1F53B}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, q8 = {
    keywords: [
      "shape",
      "button",
      "icon"
    ],
    char: "\u25FC\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, j8 = {
    keywords: [
      "shape",
      "stone",
      "icon"
    ],
    char: "\u25FB\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, D8 = {
    keywords: [
      "icon",
      "shape",
      "button"
    ],
    char: "\u25FE",
    fitzpatrick_scale: false,
    category: "symbols"
  }, B8 = {
    keywords: [
      "shape",
      "stone",
      "icon",
      "button"
    ],
    char: "\u25FD",
    fitzpatrick_scale: false,
    category: "symbols"
  }, C8 = {
    keywords: [
      "shape",
      "input",
      "frame"
    ],
    char: "\u{1F532}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, E8 = {
    keywords: [
      "shape",
      "input"
    ],
    char: "\u{1F533}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, I8 = {
    keywords: [
      "sound",
      "volume",
      "silence",
      "broadcast"
    ],
    char: "\u{1F508}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, N8 = {
    keywords: [
      "volume",
      "speaker",
      "broadcast"
    ],
    char: "\u{1F509}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, R8 = {
    keywords: [
      "volume",
      "noise",
      "noisy",
      "speaker",
      "broadcast"
    ],
    char: "\u{1F50A}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, F8 = {
    keywords: [
      "sound",
      "volume",
      "silence",
      "quiet"
    ],
    char: "\u{1F507}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, O8 = {
    keywords: [
      "sound",
      "speaker",
      "volume"
    ],
    char: "\u{1F4E3}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, H8 = {
    keywords: [
      "volume",
      "sound"
    ],
    char: "\u{1F4E2}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, P8 = {
    keywords: [
      "sound",
      "notification",
      "christmas",
      "xmas",
      "chime"
    ],
    char: "\u{1F514}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, L8 = {
    keywords: [
      "sound",
      "volume",
      "mute",
      "quiet",
      "silent"
    ],
    char: "\u{1F515}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, G8 = {
    keywords: [
      "poker",
      "cards",
      "game",
      "play",
      "magic"
    ],
    char: "\u{1F0CF}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, U8 = {
    keywords: [
      "game",
      "play",
      "chinese",
      "kanji"
    ],
    char: "\u{1F004}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, $8 = {
    keywords: [
      "poker",
      "cards",
      "suits",
      "magic"
    ],
    char: "\u2660\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, V8 = {
    keywords: [
      "poker",
      "cards",
      "magic",
      "suits"
    ],
    char: "\u2663\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, X8 = {
    keywords: [
      "poker",
      "cards",
      "magic",
      "suits"
    ],
    char: "\u2665\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, W8 = {
    keywords: [
      "poker",
      "cards",
      "magic",
      "suits"
    ],
    char: "\u2666\uFE0F",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Y8 = {
    keywords: [
      "game",
      "sunset",
      "red"
    ],
    char: "\u{1F3B4}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Z8 = {
    keywords: [
      "bubble",
      "cloud",
      "speech",
      "thinking",
      "dream"
    ],
    char: "\u{1F4AD}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, K8 = {
    keywords: [
      "caption",
      "speech",
      "thinking",
      "mad"
    ],
    char: "\u{1F5EF}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, J8 = {
    keywords: [
      "bubble",
      "words",
      "message",
      "talk",
      "chatting"
    ],
    char: "\u{1F4AC}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, Q8 = {
    keywords: [
      "words",
      "message",
      "talk",
      "chatting"
    ],
    char: "\u{1F5E8}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, ew = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F550}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, aw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F551}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, tw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F552}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, rw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F553}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, sw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F554}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, ow = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule",
      "dawn",
      "dusk"
    ],
    char: "\u{1F555}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, nw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F556}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, cw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F557}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, iw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F558}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, lw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F559}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, fw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F55A}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, uw = {
    keywords: [
      "time",
      "noon",
      "midnight",
      "midday",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F55B}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, hw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F55C}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, dw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F55D}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, pw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F55E}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, mw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F55F}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, yw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F560}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, gw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F561}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, kw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F562}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, _w = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F563}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, ww = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F564}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, bw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F565}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, vw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F566}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, zw = {
    keywords: [
      "time",
      "late",
      "early",
      "schedule"
    ],
    char: "\u{1F567}",
    fitzpatrick_scale: false,
    category: "symbols"
  }, xw = {
    keywords: [
      "af",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1EB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Sw = {
    keywords: [
      "\xC5land",
      "islands",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1FD}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Aw = {
    keywords: [
      "al",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1F1}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Mw = {
    keywords: [
      "dz",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E9}\u{1F1FF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Tw = {
    keywords: [
      "american",
      "ws",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1F8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, qw = {
    keywords: [
      "ad",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1E9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, jw = {
    keywords: [
      "ao",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1F4}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Dw = {
    keywords: [
      "ai",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1EE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Bw = {
    keywords: [
      "aq",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1F6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Cw = {
    keywords: [
      "antigua",
      "barbuda",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Ew = {
    keywords: [
      "ar",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Iw = {
    keywords: [
      "am",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Nw = {
    keywords: [
      "aw",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1FC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Rw = {
    keywords: [
      "au",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1FA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Fw = {
    keywords: [
      "at",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1F9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Ow = {
    keywords: [
      "az",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1FF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Hw = {
    keywords: [
      "bs",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1F8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Pw = {
    keywords: [
      "bh",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1ED}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Lw = {
    keywords: [
      "bd",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1E9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Gw = {
    keywords: [
      "bb",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1E7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Uw = {
    keywords: [
      "by",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1FE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, $w = {
    keywords: [
      "be",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Vw = {
    keywords: [
      "bz",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1FF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Xw = {
    keywords: [
      "bj",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1EF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Ww = {
    keywords: [
      "bm",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Yw = {
    keywords: [
      "bt",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1F9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Zw = {
    keywords: [
      "bo",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1F4}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Kw = {
    keywords: [
      "bonaire",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1F6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Jw = {
    keywords: [
      "bosnia",
      "herzegovina",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1E6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Qw = {
    keywords: [
      "bw",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1FC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, eb = {
    keywords: [
      "br",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, ab = {
    keywords: [
      "british",
      "indian",
      "ocean",
      "territory",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EE}\u{1F1F4}",
    fitzpatrick_scale: false,
    category: "flags"
  }, tb = {
    keywords: [
      "british",
      "virgin",
      "islands",
      "bvi",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FB}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, rb = {
    keywords: [
      "bn",
      "darussalam",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1F3}",
    fitzpatrick_scale: false,
    category: "flags"
  }, sb = {
    keywords: [
      "bg",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, ob = {
    keywords: [
      "burkina",
      "faso",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1EB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, nb = {
    keywords: [
      "bi",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1EE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, cb = {
    keywords: [
      "cabo",
      "verde",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1FB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, ib = {
    keywords: [
      "kh",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F0}\u{1F1ED}",
    fitzpatrick_scale: false,
    category: "flags"
  }, lb = {
    keywords: [
      "cm",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, fb = {
    keywords: [
      "ca",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1E6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, ub = {
    keywords: [
      "canary",
      "islands",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EE}\u{1F1E8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, hb = {
    keywords: [
      "cayman",
      "islands",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F0}\u{1F1FE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, db = {
    keywords: [
      "central",
      "african",
      "republic",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1EB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, pb = {
    keywords: [
      "td",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1E9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, mb = {
    keywords: [
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1F1}",
    fitzpatrick_scale: false,
    category: "flags"
  }, yb = {
    keywords: [
      "china",
      "chinese",
      "prc",
      "flag",
      "country",
      "nation",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1F3}",
    fitzpatrick_scale: false,
    category: "flags"
  }, gb = {
    keywords: [
      "christmas",
      "island",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1FD}",
    fitzpatrick_scale: false,
    category: "flags"
  }, kb = {
    keywords: [
      "cocos",
      "keeling",
      "islands",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1E8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, _b = {
    keywords: [
      "co",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1F4}",
    fitzpatrick_scale: false,
    category: "flags"
  }, wb = {
    keywords: [
      "km",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F0}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, bb = {
    keywords: [
      "congo",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, vb = {
    keywords: [
      "congo",
      "democratic",
      "republic",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1E9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, zb = {
    keywords: [
      "cook",
      "islands",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1F0}",
    fitzpatrick_scale: false,
    category: "flags"
  }, xb = {
    keywords: [
      "costa",
      "rica",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Sb = {
    keywords: [
      "hr",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1ED}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Ab = {
    keywords: [
      "cu",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1FA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Mb = {
    keywords: [
      "cura\xE7ao",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1FC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Tb = {
    keywords: [
      "cy",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1FE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, qb = {
    keywords: [
      "cz",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1FF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, jb = {
    keywords: [
      "dk",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E9}\u{1F1F0}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Db = {
    keywords: [
      "dj",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E9}\u{1F1EF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Bb = {
    keywords: [
      "dm",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E9}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Cb = {
    keywords: [
      "dominican",
      "republic",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E9}\u{1F1F4}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Eb = {
    keywords: [
      "ec",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EA}\u{1F1E8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Ib = {
    keywords: [
      "eg",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EA}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Nb = {
    keywords: [
      "el",
      "salvador",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1FB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Rb = {
    keywords: [
      "equatorial",
      "gn",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1F6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Fb = {
    keywords: [
      "er",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EA}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Ob = {
    keywords: [
      "ee",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EA}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Hb = {
    keywords: [
      "et",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EA}\u{1F1F9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Pb = {
    keywords: [
      "european",
      "union",
      "flag",
      "banner"
    ],
    char: "\u{1F1EA}\u{1F1FA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Lb = {
    keywords: [
      "falkland",
      "islands",
      "malvinas",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EB}\u{1F1F0}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Gb = {
    keywords: [
      "faroe",
      "islands",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EB}\u{1F1F4}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Ub = {
    keywords: [
      "fj",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EB}\u{1F1EF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, $b = {
    keywords: [
      "fi",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EB}\u{1F1EE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Vb = {
    keywords: [
      "banner",
      "flag",
      "nation",
      "france",
      "french",
      "country"
    ],
    char: "\u{1F1EB}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Xb = {
    keywords: [
      "french",
      "guiana",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1EB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Wb = {
    keywords: [
      "french",
      "polynesia",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1EB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Yb = {
    keywords: [
      "french",
      "southern",
      "territories",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1EB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Zb = {
    keywords: [
      "ga",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1E6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Kb = {
    keywords: [
      "gm",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Jb = {
    keywords: [
      "ge",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Qb = {
    keywords: [
      "german",
      "nation",
      "flag",
      "country",
      "banner"
    ],
    char: "\u{1F1E9}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, e9 = {
    keywords: [
      "gh",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1ED}",
    fitzpatrick_scale: false,
    category: "flags"
  }, a9 = {
    keywords: [
      "gi",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1EE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, t9 = {
    keywords: [
      "gr",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, r9 = {
    keywords: [
      "gl",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1F1}",
    fitzpatrick_scale: false,
    category: "flags"
  }, s9 = {
    keywords: [
      "gd",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1E9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, o9 = {
    keywords: [
      "gp",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1F5}",
    fitzpatrick_scale: false,
    category: "flags"
  }, n9 = {
    keywords: [
      "gu",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1FA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, c9 = {
    keywords: [
      "gt",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1F9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, i9 = {
    keywords: [
      "gg",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, l9 = {
    keywords: [
      "gn",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1F3}",
    fitzpatrick_scale: false,
    category: "flags"
  }, f9 = {
    keywords: [
      "gw",
      "bissau",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1FC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, u9 = {
    keywords: [
      "gy",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1FE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, h9 = {
    keywords: [
      "ht",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1ED}\u{1F1F9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, d9 = {
    keywords: [
      "hn",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1ED}\u{1F1F3}",
    fitzpatrick_scale: false,
    category: "flags"
  }, p9 = {
    keywords: [
      "hong",
      "kong",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1ED}\u{1F1F0}",
    fitzpatrick_scale: false,
    category: "flags"
  }, m9 = {
    keywords: [
      "hu",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1ED}\u{1F1FA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, y9 = {
    keywords: [
      "is",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EE}\u{1F1F8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, g9 = {
    keywords: [
      "in",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EE}\u{1F1F3}",
    fitzpatrick_scale: false,
    category: "flags"
  }, k9 = {
    keywords: [
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EE}\u{1F1E9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, _9 = {
    keywords: [
      "iran,",
      "islamic",
      "republic",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EE}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, w9 = {
    keywords: [
      "iq",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EE}\u{1F1F6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, b9 = {
    keywords: [
      "ie",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EE}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, v9 = {
    keywords: [
      "isle",
      "man",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EE}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, z9 = {
    keywords: [
      "il",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EE}\u{1F1F1}",
    fitzpatrick_scale: false,
    category: "flags"
  }, x9 = {
    keywords: [
      "italy",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EE}\u{1F1F9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, S9 = {
    keywords: [
      "ivory",
      "coast",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1EE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, A9 = {
    keywords: [
      "jm",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EF}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, M9 = {
    keywords: [
      "japanese",
      "nation",
      "flag",
      "country",
      "banner"
    ],
    char: "\u{1F1EF}\u{1F1F5}",
    fitzpatrick_scale: false,
    category: "flags"
  }, T9 = {
    keywords: [
      "je",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EF}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, q9 = {
    keywords: [
      "jo",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EF}\u{1F1F4}",
    fitzpatrick_scale: false,
    category: "flags"
  }, j9 = {
    keywords: [
      "kz",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F0}\u{1F1FF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, D9 = {
    keywords: [
      "ke",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F0}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, B9 = {
    keywords: [
      "ki",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F0}\u{1F1EE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, C9 = {
    keywords: [
      "xk",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FD}\u{1F1F0}",
    fitzpatrick_scale: false,
    category: "flags"
  }, E9 = {
    keywords: [
      "kw",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F0}\u{1F1FC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, I9 = {
    keywords: [
      "kg",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F0}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, N9 = {
    keywords: [
      "lao",
      "democratic",
      "republic",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F1}\u{1F1E6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, R9 = {
    keywords: [
      "lv",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F1}\u{1F1FB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, F9 = {
    keywords: [
      "lb",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F1}\u{1F1E7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, O9 = {
    keywords: [
      "ls",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F1}\u{1F1F8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, H9 = {
    keywords: [
      "lr",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F1}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, P9 = {
    keywords: [
      "ly",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F1}\u{1F1FE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, L9 = {
    keywords: [
      "li",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F1}\u{1F1EE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, G9 = {
    keywords: [
      "lt",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F1}\u{1F1F9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, U9 = {
    keywords: [
      "lu",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F1}\u{1F1FA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, $9 = {
    keywords: [
      "macao",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1F4}",
    fitzpatrick_scale: false,
    category: "flags"
  }, V9 = {
    keywords: [
      "macedonia,",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1F0}",
    fitzpatrick_scale: false,
    category: "flags"
  }, X9 = {
    keywords: [
      "mg",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, W9 = {
    keywords: [
      "mw",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1FC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Y9 = {
    keywords: [
      "my",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1FE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Z9 = {
    keywords: [
      "mv",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1FB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, K9 = {
    keywords: [
      "ml",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1F1}",
    fitzpatrick_scale: false,
    category: "flags"
  }, J9 = {
    keywords: [
      "mt",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1F9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Q9 = {
    keywords: [
      "marshall",
      "islands",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1ED}",
    fitzpatrick_scale: false,
    category: "flags"
  }, ev = {
    keywords: [
      "mq",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1F6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, av = {
    keywords: [
      "mr",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, tv = {
    keywords: [
      "mu",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1FA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, rv = {
    keywords: [
      "yt",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FE}\u{1F1F9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, sv = {
    keywords: [
      "mx",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1FD}",
    fitzpatrick_scale: false,
    category: "flags"
  }, ov = {
    keywords: [
      "micronesia,",
      "federated",
      "states",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EB}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, nv = {
    keywords: [
      "moldova,",
      "republic",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1E9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, cv = {
    keywords: [
      "mc",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1E8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, iv = {
    keywords: [
      "mn",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1F3}",
    fitzpatrick_scale: false,
    category: "flags"
  }, lv = {
    keywords: [
      "me",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, fv = {
    keywords: [
      "ms",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1F8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, uv = {
    keywords: [
      "ma",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1E6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, hv = {
    keywords: [
      "mz",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1FF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, dv = {
    keywords: [
      "mm",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, pv = {
    keywords: [
      "na",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F3}\u{1F1E6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, mv = {
    keywords: [
      "nr",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F3}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, yv = {
    keywords: [
      "np",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F3}\u{1F1F5}",
    fitzpatrick_scale: false,
    category: "flags"
  }, gv = {
    keywords: [
      "nl",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F3}\u{1F1F1}",
    fitzpatrick_scale: false,
    category: "flags"
  }, kv = {
    keywords: [
      "new",
      "caledonia",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F3}\u{1F1E8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, _v = {
    keywords: [
      "new",
      "zealand",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F3}\u{1F1FF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, wv = {
    keywords: [
      "ni",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F3}\u{1F1EE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, bv = {
    keywords: [
      "ne",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F3}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, vv = {
    keywords: [
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F3}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, zv = {
    keywords: [
      "nu",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F3}\u{1F1FA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, xv = {
    keywords: [
      "norfolk",
      "island",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F3}\u{1F1EB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Sv = {
    keywords: [
      "northern",
      "mariana",
      "islands",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F2}\u{1F1F5}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Av = {
    keywords: [
      "north",
      "korea",
      "nation",
      "flag",
      "country",
      "banner"
    ],
    char: "\u{1F1F0}\u{1F1F5}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Mv = {
    keywords: [
      "no",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F3}\u{1F1F4}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Tv = {
    keywords: [
      "om_symbol",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F4}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, qv = {
    keywords: [
      "pk",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1F0}",
    fitzpatrick_scale: false,
    category: "flags"
  }, jv = {
    keywords: [
      "pw",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1FC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Dv = {
    keywords: [
      "palestine",
      "palestinian",
      "territories",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1F8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Bv = {
    keywords: [
      "pa",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1E6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Cv = {
    keywords: [
      "papua",
      "new",
      "guinea",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Ev = {
    keywords: [
      "py",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1FE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Iv = {
    keywords: [
      "pe",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Nv = {
    keywords: [
      "ph",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1ED}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Rv = {
    keywords: [
      "pitcairn",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1F3}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Fv = {
    keywords: [
      "pl",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1F1}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Ov = {
    keywords: [
      "pt",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1F9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Hv = {
    keywords: [
      "puerto",
      "rico",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Pv = {
    keywords: [
      "qa",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F6}\u{1F1E6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Lv = {
    keywords: [
      "r\xE9union",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F7}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Gv = {
    keywords: [
      "ro",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F7}\u{1F1F4}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Uv = {
    keywords: [
      "russian",
      "federation",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F7}\u{1F1FA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, $v = {
    keywords: [
      "rw",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F7}\u{1F1FC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Vv = {
    keywords: [
      "saint",
      "barth\xE9lemy",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E7}\u{1F1F1}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Xv = {
    keywords: [
      "saint",
      "helena",
      "ascension",
      "tristan",
      "cunha",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1ED}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Wv = {
    keywords: [
      "saint",
      "kitts",
      "nevis",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F0}\u{1F1F3}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Yv = {
    keywords: [
      "saint",
      "lucia",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F1}\u{1F1E8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Zv = {
    keywords: [
      "saint",
      "pierre",
      "miquelon",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F5}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Kv = {
    keywords: [
      "saint",
      "vincent",
      "grenadines",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FB}\u{1F1E8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Jv = {
    keywords: [
      "ws",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FC}\u{1F1F8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Qv = {
    keywords: [
      "san",
      "marino",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, ez = {
    keywords: [
      "sao",
      "tome",
      "principe",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1F9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, az = {
    keywords: [
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1E6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, tz = {
    keywords: [
      "sn",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1F3}",
    fitzpatrick_scale: false,
    category: "flags"
  }, rz = {
    keywords: [
      "rs",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F7}\u{1F1F8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, sz = {
    keywords: [
      "sc",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1E8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, oz = {
    keywords: [
      "sierra",
      "leone",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1F1}",
    fitzpatrick_scale: false,
    category: "flags"
  }, nz = {
    keywords: [
      "sg",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, cz = {
    keywords: [
      "sint",
      "maarten",
      "dutch",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1FD}",
    fitzpatrick_scale: false,
    category: "flags"
  }, iz = {
    keywords: [
      "sk",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1F0}",
    fitzpatrick_scale: false,
    category: "flags"
  }, lz = {
    keywords: [
      "si",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1EE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, fz = {
    keywords: [
      "solomon",
      "islands",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1E7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, uz = {
    keywords: [
      "so",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1F4}",
    fitzpatrick_scale: false,
    category: "flags"
  }, hz = {
    keywords: [
      "south",
      "africa",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FF}\u{1F1E6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, dz = {
    keywords: [
      "south",
      "georgia",
      "sandwich",
      "islands",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EC}\u{1F1F8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, pz = {
    keywords: [
      "south",
      "korea",
      "nation",
      "flag",
      "country",
      "banner"
    ],
    char: "\u{1F1F0}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, mz = {
    keywords: [
      "south",
      "sd",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1F8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, yz = {
    keywords: [
      "spain",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EA}\u{1F1F8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, gz = {
    keywords: [
      "sri",
      "lanka",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F1}\u{1F1F0}",
    fitzpatrick_scale: false,
    category: "flags"
  }, kz = {
    keywords: [
      "sd",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1E9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, _z = {
    keywords: [
      "sr",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, wz = {
    keywords: [
      "sz",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1FF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, bz = {
    keywords: [
      "se",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, vz = {
    keywords: [
      "ch",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E8}\u{1F1ED}",
    fitzpatrick_scale: false,
    category: "flags"
  }, zz = {
    keywords: [
      "syrian",
      "arab",
      "republic",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F8}\u{1F1FE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, xz = {
    keywords: [
      "tw",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1FC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Sz = {
    keywords: [
      "tj",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1EF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Az = {
    keywords: [
      "tanzania,",
      "united",
      "republic",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1FF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Mz = {
    keywords: [
      "th",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1ED}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Tz = {
    keywords: [
      "timor",
      "leste",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1F1}",
    fitzpatrick_scale: false,
    category: "flags"
  }, qz = {
    keywords: [
      "tg",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, jz = {
    keywords: [
      "tk",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1F0}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Dz = {
    keywords: [
      "to",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1F4}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Bz = {
    keywords: [
      "trinidad",
      "tobago",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1F9}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Cz = {
    keywords: [
      "tn",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1F3}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Ez = {
    keywords: [
      "turkey",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1F7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Iz = {
    keywords: [
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Nz = {
    keywords: [
      "turks",
      "caicos",
      "islands",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1E8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Rz = {
    keywords: [
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1F9}\u{1F1FB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Fz = {
    keywords: [
      "ug",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FA}\u{1F1EC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Oz = {
    keywords: [
      "ua",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FA}\u{1F1E6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Hz = {
    keywords: [
      "united",
      "arab",
      "emirates",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1E6}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Pz = {
    keywords: [
      "united",
      "kingdom",
      "great",
      "britain",
      "northern",
      "ireland",
      "flag",
      "nation",
      "country",
      "banner",
      "british",
      "UK",
      "english",
      "england",
      "union jack"
    ],
    char: "\u{1F1EC}\u{1F1E7}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Lz = {
    keywords: [
      "flag",
      "english"
    ],
    char: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Gz = {
    keywords: [
      "flag",
      "scottish"
    ],
    char: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Uz = {
    keywords: [
      "flag",
      "welsh"
    ],
    char: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}",
    fitzpatrick_scale: false,
    category: "flags"
  }, $z = {
    keywords: [
      "united",
      "states",
      "america",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FA}\u{1F1F8}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Vz = {
    keywords: [
      "virgin",
      "islands",
      "us",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FB}\u{1F1EE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Xz = {
    keywords: [
      "uy",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FA}\u{1F1FE}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Wz = {
    keywords: [
      "uz",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FA}\u{1F1FF}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Yz = {
    keywords: [
      "vu",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FB}\u{1F1FA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Zz = {
    keywords: [
      "vatican",
      "city",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FB}\u{1F1E6}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Kz = {
    keywords: [
      "ve",
      "bolivarian",
      "republic",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FB}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Jz = {
    keywords: [
      "viet",
      "nam",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FB}\u{1F1F3}",
    fitzpatrick_scale: false,
    category: "flags"
  }, Qz = {
    keywords: [
      "wallis",
      "futuna",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FC}\u{1F1EB}",
    fitzpatrick_scale: false,
    category: "flags"
  }, ex = {
    keywords: [
      "western",
      "sahara",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1EA}\u{1F1ED}",
    fitzpatrick_scale: false,
    category: "flags"
  }, ax = {
    keywords: [
      "ye",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FE}\u{1F1EA}",
    fitzpatrick_scale: false,
    category: "flags"
  }, tx = {
    keywords: [
      "zm",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FF}\u{1F1F2}",
    fitzpatrick_scale: false,
    category: "flags"
  }, rx = {
    keywords: [
      "zw",
      "flag",
      "nation",
      "country",
      "banner"
    ],
    char: "\u{1F1FF}\u{1F1FC}",
    fitzpatrick_scale: false,
    category: "flags"
  }, sx = {
    keywords: [
      "un",
      "flag",
      "banner"
    ],
    char: "\u{1F1FA}\u{1F1F3}",
    fitzpatrick_scale: false,
    category: "flags"
  }, ox = {
    keywords: [
      "skull",
      "crossbones",
      "flag",
      "banner"
    ],
    char: "\u{1F3F4}\u200D\u2620\uFE0F",
    fitzpatrick_scale: false,
    category: "flags"
  }, nx = {
    100: {
      keywords: [
        "score",
        "perfect",
        "numbers",
        "century",
        "exam",
        "quiz",
        "test",
        "pass",
        "hundred"
      ],
      char: "\u{1F4AF}",
      fitzpatrick_scale: false,
      category: "symbols"
    },
    1234: {
      keywords: [
        "numbers",
        "blue-square"
      ],
      char: "\u{1F522}",
      fitzpatrick_scale: false,
      category: "symbols"
    },
    grinning: ho,
    grimacing: po,
    grin: mo,
    joy: yo,
    rofl: go,
    partying: ko,
    smiley: _o,
    smile: wo,
    sweat_smile: bo,
    laughing: vo,
    innocent: zo,
    wink: xo,
    blush: So,
    slightly_smiling_face: Ao,
    upside_down_face: Mo,
    relaxed: To,
    yum: qo,
    relieved: jo,
    heart_eyes: Do,
    smiling_face_with_three_hearts: Bo,
    kissing_heart: Co,
    kissing: Eo,
    kissing_smiling_eyes: Io,
    kissing_closed_eyes: No,
    stuck_out_tongue_winking_eye: Ro,
    zany: Fo,
    raised_eyebrow: Oo,
    monocle: Ho,
    stuck_out_tongue_closed_eyes: Po,
    stuck_out_tongue: Lo,
    money_mouth_face: Go,
    nerd_face: Uo,
    sunglasses: $o,
    star_struck: Vo,
    clown_face: Xo,
    cowboy_hat_face: Wo,
    hugs: Yo,
    smirk: Zo,
    no_mouth: Ko,
    neutral_face: Jo,
    expressionless: Qo,
    unamused: en,
    roll_eyes: an,
    thinking: tn,
    lying_face: rn,
    hand_over_mouth: sn,
    shushing: on,
    symbols_over_mouth: nn,
    exploding_head: cn,
    flushed: ln,
    disappointed: fn,
    worried: un,
    angry: hn,
    rage: dn,
    pensive: pn,
    confused: mn,
    slightly_frowning_face: yn,
    frowning_face: gn,
    persevere: kn,
    confounded: _n,
    tired_face: wn,
    weary: bn,
    pleading: vn,
    triumph: zn,
    open_mouth: xn,
    scream: Sn,
    fearful: An,
    cold_sweat: Mn,
    hushed: Tn,
    frowning: qn,
    anguished: jn,
    cry: Dn,
    disappointed_relieved: Bn,
    drooling_face: Cn,
    sleepy: En,
    sweat: In,
    hot: Nn,
    cold: Rn,
    sob: Fn,
    dizzy_face: On,
    astonished: Hn,
    zipper_mouth_face: Pn,
    nauseated_face: Ln,
    sneezing_face: Gn,
    vomiting: Un,
    mask: $n,
    face_with_thermometer: Vn,
    face_with_head_bandage: Xn,
    woozy: Wn,
    sleeping: Yn,
    zzz: Zn,
    poop: Kn,
    smiling_imp: Jn,
    imp: Qn,
    japanese_ogre: e0,
    japanese_goblin: a0,
    skull: t0,
    ghost: r0,
    alien: s0,
    robot: o0,
    smiley_cat: n0,
    smile_cat: c0,
    joy_cat: i0,
    heart_eyes_cat: l0,
    smirk_cat: f0,
    kissing_cat: u0,
    scream_cat: h0,
    crying_cat_face: d0,
    pouting_cat: p0,
    palms_up: m0,
    raised_hands: y0,
    clap: g0,
    wave: k0,
    call_me_hand: _0,
    "+1": {
      keywords: [
        "thumbsup",
        "yes",
        "awesome",
        "good",
        "agree",
        "accept",
        "cool",
        "hand",
        "like"
      ],
      char: "\u{1F44D}",
      fitzpatrick_scale: true,
      category: "people"
    },
    "-1": {
      keywords: [
        "thumbsdown",
        "no",
        "dislike",
        "hand"
      ],
      char: "\u{1F44E}",
      fitzpatrick_scale: true,
      category: "people"
    },
    facepunch: w0,
    fist: b0,
    fist_left: v0,
    fist_right: z0,
    v: x0,
    ok_hand: S0,
    raised_hand: A0,
    raised_back_of_hand: M0,
    open_hands: T0,
    muscle: q0,
    pray: j0,
    foot: D0,
    leg: B0,
    handshake: C0,
    point_up: E0,
    point_up_2: I0,
    point_down: N0,
    point_left: R0,
    point_right: F0,
    fu: O0,
    raised_hand_with_fingers_splayed: H0,
    love_you: P0,
    metal: L0,
    crossed_fingers: G0,
    vulcan_salute: U0,
    writing_hand: $0,
    selfie: V0,
    nail_care: X0,
    lips: W0,
    tooth: Y0,
    tongue: Z0,
    ear: K0,
    nose: J0,
    eye: Q0,
    eyes: ec,
    brain: ac,
    bust_in_silhouette: tc,
    busts_in_silhouette: rc,
    speaking_head: sc,
    baby: oc,
    child: nc,
    boy: cc,
    girl: ic,
    adult: lc,
    man: fc,
    woman: uc,
    blonde_woman: hc,
    blonde_man: dc,
    bearded_person: pc,
    older_adult: mc,
    older_man: yc,
    older_woman: gc,
    man_with_gua_pi_mao: kc,
    woman_with_headscarf: _c,
    woman_with_turban: wc,
    man_with_turban: bc,
    policewoman: vc,
    policeman: zc,
    construction_worker_woman: xc,
    construction_worker_man: Sc,
    guardswoman: Ac,
    guardsman: Mc,
    female_detective: Tc,
    male_detective: qc,
    woman_health_worker: jc,
    man_health_worker: Dc,
    woman_farmer: Bc,
    man_farmer: Cc,
    woman_cook: Ec,
    man_cook: Ic,
    woman_student: Nc,
    man_student: Rc,
    woman_singer: Fc,
    man_singer: Oc,
    woman_teacher: Hc,
    man_teacher: Pc,
    woman_factory_worker: Lc,
    man_factory_worker: Gc,
    woman_technologist: Uc,
    man_technologist: $c,
    woman_office_worker: Vc,
    man_office_worker: Xc,
    woman_mechanic: Wc,
    man_mechanic: Yc,
    woman_scientist: Zc,
    man_scientist: Kc,
    woman_artist: Jc,
    man_artist: Qc,
    woman_firefighter: ei,
    man_firefighter: ai,
    woman_pilot: ti,
    man_pilot: ri,
    woman_astronaut: si,
    man_astronaut: oi,
    woman_judge: ni,
    man_judge: ci,
    woman_superhero: ii,
    man_superhero: li,
    woman_supervillain: fi,
    man_supervillain: ui,
    mrs_claus: hi,
    santa: di,
    sorceress: pi,
    wizard: mi,
    woman_elf: yi,
    man_elf: gi,
    woman_vampire: ki,
    man_vampire: _i,
    woman_zombie: wi,
    man_zombie: bi,
    woman_genie: vi,
    man_genie: zi,
    mermaid: xi,
    merman: Si,
    woman_fairy: Ai,
    man_fairy: Mi,
    angel: Ti,
    pregnant_woman: qi,
    breastfeeding: ji,
    princess: Di,
    prince: Bi,
    bride_with_veil: Ci,
    man_in_tuxedo: Ei,
    running_woman: Ii,
    running_man: Ni,
    walking_woman: Ri,
    walking_man: Fi,
    dancer: Oi,
    man_dancing: Hi,
    dancing_women: Pi,
    dancing_men: Li,
    couple: Gi,
    two_men_holding_hands: Ui,
    two_women_holding_hands: $i,
    bowing_woman: Vi,
    bowing_man: Xi,
    man_facepalming: Wi,
    woman_facepalming: Yi,
    woman_shrugging: Zi,
    man_shrugging: Ki,
    tipping_hand_woman: Ji,
    tipping_hand_man: Qi,
    no_good_woman: el,
    no_good_man: al,
    ok_woman: tl,
    ok_man: rl,
    raising_hand_woman: sl,
    raising_hand_man: ol,
    pouting_woman: nl,
    pouting_man: cl,
    frowning_woman: il,
    frowning_man: ll,
    haircut_woman: fl,
    haircut_man: ul,
    massage_woman: hl,
    massage_man: dl,
    woman_in_steamy_room: pl,
    man_in_steamy_room: ml,
    couple_with_heart_woman_man: yl,
    couple_with_heart_woman_woman: gl,
    couple_with_heart_man_man: kl,
    couplekiss_man_woman: _l,
    couplekiss_woman_woman: wl,
    couplekiss_man_man: bl,
    family_man_woman_boy: vl,
    family_man_woman_girl: zl,
    family_man_woman_girl_boy: xl,
    family_man_woman_boy_boy: Sl,
    family_man_woman_girl_girl: Al,
    family_woman_woman_boy: Ml,
    family_woman_woman_girl: Tl,
    family_woman_woman_girl_boy: ql,
    family_woman_woman_boy_boy: jl,
    family_woman_woman_girl_girl: Dl,
    family_man_man_boy: Bl,
    family_man_man_girl: Cl,
    family_man_man_girl_boy: El,
    family_man_man_boy_boy: Il,
    family_man_man_girl_girl: Nl,
    family_woman_boy: Rl,
    family_woman_girl: Fl,
    family_woman_girl_boy: Ol,
    family_woman_boy_boy: Hl,
    family_woman_girl_girl: Pl,
    family_man_boy: Ll,
    family_man_girl: Gl,
    family_man_girl_boy: Ul,
    family_man_boy_boy: $l,
    family_man_girl_girl: Vl,
    yarn: Xl,
    thread: Wl,
    coat: Yl,
    labcoat: Zl,
    womans_clothes: Kl,
    tshirt: Jl,
    jeans: Ql,
    necktie: ef,
    dress: af,
    bikini: tf,
    kimono: rf,
    lipstick: sf,
    kiss: of,
    footprints: nf,
    flat_shoe: cf,
    high_heel: lf,
    sandal: ff,
    boot: uf,
    mans_shoe: hf,
    athletic_shoe: df,
    hiking_boot: pf,
    socks: mf,
    gloves: yf,
    scarf: gf,
    womans_hat: kf,
    tophat: _f,
    billed_hat: wf,
    rescue_worker_helmet: bf,
    mortar_board: vf,
    crown: zf,
    school_satchel: xf,
    luggage: Sf,
    pouch: Af,
    purse: Mf,
    handbag: Tf,
    briefcase: qf,
    eyeglasses: jf,
    dark_sunglasses: Df,
    goggles: Bf,
    ring: Cf,
    closed_umbrella: Ef,
    dog: If,
    cat: Nf,
    mouse: Rf,
    hamster: Ff,
    rabbit: Of,
    fox_face: Hf,
    bear: Pf,
    panda_face: Lf,
    koala: Gf,
    tiger: Uf,
    lion: $f,
    cow: Vf,
    pig: Xf,
    pig_nose: Wf,
    frog: Yf,
    squid: Zf,
    octopus: Kf,
    shrimp: Jf,
    monkey_face: Qf,
    gorilla: eu,
    see_no_evil: au,
    hear_no_evil: tu,
    speak_no_evil: ru,
    monkey: su,
    chicken: ou,
    penguin: nu,
    bird: cu,
    baby_chick: iu,
    hatching_chick: lu,
    hatched_chick: fu,
    duck: uu,
    eagle: hu,
    owl: du,
    bat: pu,
    wolf: mu,
    boar: yu,
    horse: gu,
    unicorn: ku,
    honeybee: _u,
    bug: wu,
    butterfly: bu,
    snail: vu,
    beetle: zu,
    ant: xu,
    grasshopper: Su,
    spider: Au,
    scorpion: Mu,
    crab: Tu,
    snake: qu,
    lizard: ju,
    "t-rex": {
      keywords: [
        "animal",
        "nature",
        "dinosaur",
        "tyrannosaurus",
        "extinct"
      ],
      char: "\u{1F996}",
      fitzpatrick_scale: false,
      category: "animals_and_nature"
    },
    sauropod: Du,
    turtle: Bu,
    tropical_fish: Cu,
    fish: Eu,
    blowfish: Iu,
    dolphin: Nu,
    shark: Ru,
    whale: Fu,
    whale2: Ou,
    crocodile: Hu,
    leopard: Pu,
    zebra: Lu,
    tiger2: Gu,
    water_buffalo: Uu,
    ox: $u,
    cow2: Vu,
    deer: Xu,
    dromedary_camel: Wu,
    camel: Yu,
    giraffe: Zu,
    elephant: Ku,
    rhinoceros: Ju,
    goat: Qu,
    ram: eh,
    sheep: ah,
    racehorse: th,
    pig2: rh,
    rat: sh,
    mouse2: oh,
    rooster: nh,
    turkey: ch,
    dove: ih,
    dog2: lh,
    poodle: fh,
    cat2: uh,
    rabbit2: hh,
    chipmunk: dh,
    hedgehog: ph,
    raccoon: mh,
    llama: yh,
    hippopotamus: gh,
    kangaroo: kh,
    badger: _h,
    swan: wh,
    peacock: bh,
    parrot: vh,
    lobster: zh,
    mosquito: xh,
    paw_prints: Sh,
    dragon: Ah,
    dragon_face: Mh,
    cactus: Th,
    christmas_tree: qh,
    evergreen_tree: jh,
    deciduous_tree: Dh,
    palm_tree: Bh,
    seedling: Ch,
    herb: Eh,
    shamrock: Ih,
    four_leaf_clover: Nh,
    bamboo: Rh,
    tanabata_tree: Fh,
    leaves: Oh,
    fallen_leaf: Hh,
    maple_leaf: Ph,
    ear_of_rice: Lh,
    hibiscus: Gh,
    sunflower: Uh,
    rose: $h,
    wilted_flower: Vh,
    tulip: Xh,
    blossom: Wh,
    cherry_blossom: Yh,
    bouquet: Zh,
    mushroom: Kh,
    chestnut: Jh,
    jack_o_lantern: Qh,
    shell: e1,
    spider_web: a1,
    earth_americas: t1,
    earth_africa: r1,
    earth_asia: s1,
    full_moon: o1,
    waning_gibbous_moon: n1,
    last_quarter_moon: c1,
    waning_crescent_moon: i1,
    new_moon: l1,
    waxing_crescent_moon: f1,
    first_quarter_moon: u1,
    waxing_gibbous_moon: h1,
    new_moon_with_face: d1,
    full_moon_with_face: p1,
    first_quarter_moon_with_face: m1,
    last_quarter_moon_with_face: y1,
    sun_with_face: g1,
    crescent_moon: k1,
    star: _1,
    star2: w1,
    dizzy: b1,
    sparkles: v1,
    comet: z1,
    sunny: x1,
    sun_behind_small_cloud: S1,
    partly_sunny: A1,
    sun_behind_large_cloud: M1,
    sun_behind_rain_cloud: T1,
    cloud: q1,
    cloud_with_rain: j1,
    cloud_with_lightning_and_rain: D1,
    cloud_with_lightning: B1,
    zap: C1,
    fire: E1,
    boom: I1,
    snowflake: N1,
    cloud_with_snow: R1,
    snowman: F1,
    snowman_with_snow: O1,
    wind_face: H1,
    dash: P1,
    tornado: L1,
    fog: G1,
    open_umbrella: U1,
    umbrella: $1,
    droplet: V1,
    sweat_drops: X1,
    ocean: W1,
    green_apple: Y1,
    apple: Z1,
    pear: K1,
    tangerine: J1,
    lemon: Q1,
    banana: ed,
    watermelon: ad,
    grapes: td,
    strawberry: rd,
    melon: sd,
    cherries: od,
    peach: nd,
    pineapple: cd,
    coconut: id,
    kiwi_fruit: ld,
    mango: fd,
    avocado: ud,
    broccoli: hd,
    tomato: dd,
    eggplant: pd,
    cucumber: md,
    carrot: yd,
    hot_pepper: gd,
    potato: kd,
    corn: _d,
    leafy_greens: wd,
    sweet_potato: bd,
    peanuts: vd,
    honey_pot: zd,
    croissant: xd,
    bread: Sd,
    baguette_bread: Ad,
    bagel: Md,
    pretzel: Td,
    cheese: qd,
    egg: jd,
    bacon: Dd,
    steak: Bd,
    pancakes: Cd,
    poultry_leg: Ed,
    meat_on_bone: Id,
    bone: Nd,
    fried_shrimp: Rd,
    fried_egg: Fd,
    hamburger: Od,
    fries: Hd,
    stuffed_flatbread: Pd,
    hotdog: Ld,
    pizza: Gd,
    sandwich: Ud,
    canned_food: $d,
    spaghetti: Vd,
    taco: Xd,
    burrito: Wd,
    green_salad: Yd,
    shallow_pan_of_food: Zd,
    ramen: Kd,
    stew: Jd,
    fish_cake: Qd,
    fortune_cookie: ep,
    sushi: ap,
    bento: tp,
    curry: rp,
    rice_ball: sp,
    rice: op,
    rice_cracker: np,
    oden: cp,
    dango: ip,
    shaved_ice: lp,
    ice_cream: fp,
    icecream: up,
    pie: hp,
    cake: dp,
    cupcake: pp,
    moon_cake: mp,
    birthday: yp,
    custard: gp,
    candy: kp,
    lollipop: _p,
    chocolate_bar: wp,
    popcorn: bp,
    dumpling: vp,
    doughnut: zp,
    cookie: xp,
    milk_glass: Sp,
    beer: Ap,
    beers: Mp,
    clinking_glasses: Tp,
    wine_glass: qp,
    tumbler_glass: jp,
    cocktail: Dp,
    tropical_drink: Bp,
    champagne: Cp,
    sake: Ep,
    tea: Ip,
    cup_with_straw: Np,
    coffee: Rp,
    baby_bottle: Fp,
    salt: Op,
    spoon: Hp,
    fork_and_knife: Pp,
    plate_with_cutlery: Lp,
    bowl_with_spoon: Gp,
    takeout_box: Up,
    chopsticks: $p,
    soccer: Vp,
    basketball: Xp,
    football: Wp,
    baseball: Yp,
    softball: Zp,
    tennis: Kp,
    volleyball: Jp,
    rugby_football: Qp,
    flying_disc: em,
    "8ball": {
      keywords: [
        "pool",
        "hobby",
        "game",
        "luck",
        "magic"
      ],
      char: "\u{1F3B1}",
      fitzpatrick_scale: false,
      category: "activity"
    },
    golf: am,
    golfing_woman: tm,
    golfing_man: rm,
    ping_pong: sm,
    badminton: om,
    goal_net: nm,
    ice_hockey: cm,
    field_hockey: im,
    lacrosse: lm,
    cricket: fm,
    ski: um,
    skier: hm,
    snowboarder: dm,
    person_fencing: pm,
    women_wrestling: mm,
    men_wrestling: ym,
    woman_cartwheeling: gm,
    man_cartwheeling: km,
    woman_playing_handball: _m,
    man_playing_handball: wm,
    ice_skate: bm,
    curling_stone: vm,
    skateboard: zm,
    sled: xm,
    bow_and_arrow: Sm,
    fishing_pole_and_fish: Am,
    boxing_glove: Mm,
    martial_arts_uniform: Tm,
    rowing_woman: qm,
    rowing_man: jm,
    climbing_woman: Dm,
    climbing_man: Bm,
    swimming_woman: Cm,
    swimming_man: Em,
    woman_playing_water_polo: Im,
    man_playing_water_polo: Nm,
    woman_in_lotus_position: Rm,
    man_in_lotus_position: Fm,
    surfing_woman: Om,
    surfing_man: Hm,
    bath: Pm,
    basketball_woman: Lm,
    basketball_man: Gm,
    weight_lifting_woman: Um,
    weight_lifting_man: $m,
    biking_woman: Vm,
    biking_man: Xm,
    mountain_biking_woman: Wm,
    mountain_biking_man: Ym,
    horse_racing: Zm,
    business_suit_levitating: Km,
    trophy: Jm,
    running_shirt_with_sash: Qm,
    medal_sports: ey,
    medal_military: ay,
    "1st_place_medal": {
      keywords: [
        "award",
        "winning",
        "first"
      ],
      char: "\u{1F947}",
      fitzpatrick_scale: false,
      category: "activity"
    },
    "2nd_place_medal": {
      keywords: [
        "award",
        "second"
      ],
      char: "\u{1F948}",
      fitzpatrick_scale: false,
      category: "activity"
    },
    "3rd_place_medal": {
      keywords: [
        "award",
        "third"
      ],
      char: "\u{1F949}",
      fitzpatrick_scale: false,
      category: "activity"
    },
    reminder_ribbon: ty,
    rosette: ry,
    ticket: sy,
    tickets: oy,
    performing_arts: ny,
    art: cy,
    circus_tent: iy,
    woman_juggling: ly,
    man_juggling: fy,
    microphone: uy,
    headphones: hy,
    musical_score: dy,
    musical_keyboard: py,
    drum: my,
    saxophone: yy,
    trumpet: gy,
    guitar: ky,
    violin: _y,
    clapper: wy,
    video_game: by,
    space_invader: vy,
    dart: zy,
    game_die: xy,
    chess_pawn: Sy,
    slot_machine: Ay,
    jigsaw: My,
    bowling: Ty,
    red_car: qy,
    taxi: jy,
    blue_car: Dy,
    bus: By,
    trolleybus: Cy,
    racing_car: Ey,
    police_car: Iy,
    ambulance: Ny,
    fire_engine: Ry,
    minibus: Fy,
    truck: Oy,
    articulated_lorry: Hy,
    tractor: Py,
    kick_scooter: Ly,
    motorcycle: Gy,
    bike: Uy,
    motor_scooter: $y,
    rotating_light: Vy,
    oncoming_police_car: Xy,
    oncoming_bus: Wy,
    oncoming_automobile: Yy,
    oncoming_taxi: Zy,
    aerial_tramway: Ky,
    mountain_cableway: Jy,
    suspension_railway: Qy,
    railway_car: e4,
    train: a4,
    monorail: t4,
    bullettrain_side: r4,
    bullettrain_front: s4,
    light_rail: o4,
    mountain_railway: n4,
    steam_locomotive: c4,
    train2: i4,
    metro: l4,
    tram: f4,
    station: u4,
    flying_saucer: h4,
    helicopter: d4,
    small_airplane: p4,
    airplane: m4,
    flight_departure: y4,
    flight_arrival: g4,
    sailboat: k4,
    motor_boat: _4,
    speedboat: w4,
    ferry: b4,
    passenger_ship: v4,
    rocket: z4,
    artificial_satellite: x4,
    seat: S4,
    canoe: A4,
    anchor: M4,
    construction: T4,
    fuelpump: q4,
    busstop: j4,
    vertical_traffic_light: D4,
    traffic_light: B4,
    checkered_flag: C4,
    ship: E4,
    ferris_wheel: I4,
    roller_coaster: N4,
    carousel_horse: R4,
    building_construction: F4,
    foggy: O4,
    tokyo_tower: H4,
    factory: P4,
    fountain: L4,
    rice_scene: G4,
    mountain: U4,
    mountain_snow: $4,
    mount_fuji: V4,
    volcano: X4,
    japan: W4,
    camping: Y4,
    tent: Z4,
    national_park: K4,
    motorway: J4,
    railway_track: Q4,
    sunrise: eg,
    sunrise_over_mountains: ag,
    desert: tg,
    beach_umbrella: rg,
    desert_island: sg,
    city_sunrise: og,
    city_sunset: ng,
    cityscape: cg,
    night_with_stars: ig,
    bridge_at_night: lg,
    milky_way: fg,
    stars: ug,
    sparkler: hg,
    fireworks: dg,
    rainbow: pg,
    houses: mg,
    european_castle: yg,
    japanese_castle: gg,
    stadium: kg,
    statue_of_liberty: _g,
    house: wg,
    house_with_garden: bg,
    derelict_house: vg,
    office: zg,
    department_store: xg,
    post_office: Sg,
    european_post_office: Ag,
    hospital: Mg,
    bank: Tg,
    hotel: qg,
    convenience_store: jg,
    school: Dg,
    love_hotel: Bg,
    wedding: Cg,
    classical_building: Eg,
    church: Ig,
    mosque: Ng,
    synagogue: Rg,
    kaaba: Fg,
    shinto_shrine: Og,
    watch: Hg,
    iphone: Pg,
    calling: Lg,
    computer: Gg,
    keyboard: Ug,
    desktop_computer: $g,
    printer: Vg,
    computer_mouse: Xg,
    trackball: Wg,
    joystick: Yg,
    clamp: Zg,
    minidisc: Kg,
    floppy_disk: Jg,
    cd: Qg,
    dvd: e2,
    vhs: a2,
    camera: t2,
    camera_flash: r2,
    video_camera: s2,
    movie_camera: o2,
    film_projector: n2,
    film_strip: c2,
    telephone_receiver: i2,
    phone: l2,
    pager: f2,
    fax: u2,
    tv: h2,
    radio: d2,
    studio_microphone: p2,
    level_slider: m2,
    control_knobs: y2,
    compass: g2,
    stopwatch: k2,
    timer_clock: _2,
    alarm_clock: w2,
    mantelpiece_clock: b2,
    hourglass_flowing_sand: v2,
    hourglass: z2,
    satellite: x2,
    battery: S2,
    electric_plug: A2,
    bulb: M2,
    flashlight: T2,
    candle: q2,
    fire_extinguisher: j2,
    wastebasket: D2,
    oil_drum: B2,
    money_with_wings: C2,
    dollar: E2,
    yen: I2,
    euro: N2,
    pound: R2,
    moneybag: F2,
    credit_card: O2,
    gem: H2,
    balance_scale: P2,
    toolbox: L2,
    wrench: G2,
    hammer: U2,
    hammer_and_pick: $2,
    hammer_and_wrench: V2,
    pick: X2,
    nut_and_bolt: W2,
    gear: Y2,
    brick: Z2,
    chains: K2,
    magnet: J2,
    gun: Q2,
    bomb: ek,
    firecracker: ak,
    hocho: tk,
    dagger: rk,
    crossed_swords: sk,
    shield: ok,
    smoking: nk,
    skull_and_crossbones: ck,
    coffin: ik,
    funeral_urn: lk,
    amphora: fk,
    crystal_ball: uk,
    prayer_beads: hk,
    nazar_amulet: dk,
    barber: pk,
    alembic: mk,
    telescope: yk,
    microscope: gk,
    hole: kk,
    pill: _k,
    syringe: wk,
    dna: bk,
    microbe: vk,
    petri_dish: zk,
    test_tube: xk,
    thermometer: Sk,
    broom: Ak,
    basket: Mk,
    toilet_paper: Tk,
    label: qk,
    bookmark: jk,
    toilet: Dk,
    shower: Bk,
    bathtub: Ck,
    soap: Ek,
    sponge: Ik,
    lotion_bottle: Nk,
    key: Rk,
    old_key: Fk,
    couch_and_lamp: Ok,
    sleeping_bed: Hk,
    bed: Pk,
    door: Lk,
    bellhop_bell: Gk,
    teddy_bear: Uk,
    framed_picture: $k,
    world_map: Vk,
    parasol_on_ground: Xk,
    moyai: Wk,
    shopping: Yk,
    shopping_cart: Zk,
    balloon: Kk,
    flags: Jk,
    ribbon: Qk,
    gift: e5,
    confetti_ball: a5,
    tada: t5,
    dolls: r5,
    wind_chime: s5,
    crossed_flags: o5,
    izakaya_lantern: n5,
    red_envelope: c5,
    email: i5,
    envelope_with_arrow: l5,
    incoming_envelope: f5,
    "e-mail": {
      keywords: [
        "communication",
        "inbox"
      ],
      char: "\u{1F4E7}",
      fitzpatrick_scale: false,
      category: "objects"
    },
    love_letter: u5,
    postbox: h5,
    mailbox_closed: d5,
    mailbox: p5,
    mailbox_with_mail: m5,
    mailbox_with_no_mail: y5,
    package: {
      keywords: [
        "mail",
        "gift",
        "cardboard",
        "box",
        "moving"
      ],
      char: "\u{1F4E6}",
      fitzpatrick_scale: false,
      category: "objects"
    },
    postal_horn: g5,
    inbox_tray: k5,
    outbox_tray: _5,
    scroll: w5,
    page_with_curl: b5,
    bookmark_tabs: v5,
    receipt: z5,
    bar_chart: x5,
    chart_with_upwards_trend: S5,
    chart_with_downwards_trend: A5,
    page_facing_up: M5,
    date: T5,
    calendar: q5,
    spiral_calendar: j5,
    card_index: D5,
    card_file_box: B5,
    ballot_box: C5,
    file_cabinet: E5,
    clipboard: I5,
    spiral_notepad: N5,
    file_folder: R5,
    open_file_folder: F5,
    card_index_dividers: O5,
    newspaper_roll: H5,
    newspaper: P5,
    notebook: L5,
    closed_book: G5,
    green_book: U5,
    blue_book: $5,
    orange_book: V5,
    notebook_with_decorative_cover: X5,
    ledger: W5,
    books: Y5,
    open_book: Z5,
    safety_pin: K5,
    link: J5,
    paperclip: Q5,
    paperclips: e3,
    scissors: a3,
    triangular_ruler: t3,
    straight_ruler: r3,
    abacus: s3,
    pushpin: o3,
    round_pushpin: n3,
    triangular_flag_on_post: c3,
    white_flag: i3,
    black_flag: l3,
    rainbow_flag: f3,
    closed_lock_with_key: u3,
    lock: h3,
    unlock: d3,
    lock_with_ink_pen: p3,
    pen: m3,
    fountain_pen: y3,
    black_nib: g3,
    memo: k3,
    pencil2: _3,
    crayon: w3,
    paintbrush: b3,
    mag: v3,
    mag_right: z3,
    heart: x3,
    orange_heart: S3,
    yellow_heart: A3,
    green_heart: M3,
    blue_heart: T3,
    purple_heart: q3,
    black_heart: j3,
    broken_heart: D3,
    heavy_heart_exclamation: B3,
    two_hearts: C3,
    revolving_hearts: E3,
    heartbeat: I3,
    heartpulse: N3,
    sparkling_heart: R3,
    cupid: F3,
    gift_heart: O3,
    heart_decoration: H3,
    peace_symbol: P3,
    latin_cross: L3,
    star_and_crescent: G3,
    om: U3,
    wheel_of_dharma: $3,
    star_of_david: V3,
    six_pointed_star: X3,
    menorah: W3,
    yin_yang: Y3,
    orthodox_cross: Z3,
    place_of_worship: K3,
    ophiuchus: J3,
    aries: Q3,
    taurus: e6,
    gemini: a6,
    cancer: t6,
    leo: r6,
    virgo: s6,
    libra: o6,
    scorpius: n6,
    sagittarius: c6,
    capricorn: i6,
    aquarius: l6,
    pisces: f6,
    id: u6,
    atom_symbol: h6,
    u7a7a: d6,
    u5272: p6,
    radioactive: m6,
    biohazard: y6,
    mobile_phone_off: g6,
    vibration_mode: k6,
    u6709: _6,
    u7121: w6,
    u7533: b6,
    u55b6: v6,
    u6708: z6,
    eight_pointed_black_star: x6,
    vs: S6,
    accept: A6,
    white_flower: M6,
    ideograph_advantage: T6,
    secret: q6,
    congratulations: j6,
    u5408: D6,
    u6e80: B6,
    u7981: C6,
    a: E6,
    b: I6,
    ab: N6,
    cl: R6,
    o2: F6,
    sos: O6,
    no_entry: H6,
    name_badge: P6,
    no_entry_sign: L6,
    x: G6,
    o: U6,
    stop_sign: $6,
    anger: V6,
    hotsprings: X6,
    no_pedestrians: W6,
    do_not_litter: Y6,
    no_bicycles: Z6,
    "non-potable_water": {
      keywords: [
        "drink",
        "faucet",
        "tap",
        "circle"
      ],
      char: "\u{1F6B1}",
      fitzpatrick_scale: false,
      category: "symbols"
    },
    underage: K6,
    no_mobile_phones: J6,
    exclamation: Q6,
    grey_exclamation: e7,
    question: a7,
    grey_question: t7,
    bangbang: r7,
    interrobang: s7,
    low_brightness: o7,
    high_brightness: n7,
    trident: c7,
    fleur_de_lis: i7,
    part_alternation_mark: l7,
    warning: f7,
    children_crossing: u7,
    beginner: h7,
    recycle: d7,
    u6307: p7,
    chart: m7,
    sparkle: y7,
    eight_spoked_asterisk: g7,
    negative_squared_cross_mark: k7,
    white_check_mark: _7,
    diamond_shape_with_a_dot_inside: w7,
    cyclone: b7,
    loop: v7,
    globe_with_meridians: z7,
    m: x7,
    atm: S7,
    sa: A7,
    passport_control: M7,
    customs: T7,
    baggage_claim: q7,
    left_luggage: j7,
    wheelchair: D7,
    no_smoking: B7,
    wc: C7,
    parking: E7,
    potable_water: I7,
    mens: N7,
    womens: R7,
    baby_symbol: F7,
    restroom: O7,
    put_litter_in_its_place: H7,
    cinema: P7,
    signal_strength: L7,
    koko: G7,
    ng: U7,
    ok: $7,
    up: V7,
    cool: X7,
    new: {
      keywords: [
        "blue-square",
        "words",
        "start"
      ],
      char: "\u{1F195}",
      fitzpatrick_scale: false,
      category: "symbols"
    },
    free: W7,
    zero: Y7,
    one: Z7,
    two: K7,
    three: J7,
    four: Q7,
    five: e_,
    six: a_,
    seven: t_,
    eight: r_,
    nine: s_,
    keycap_ten: o_,
    asterisk: n_,
    eject_button: c_,
    arrow_forward: i_,
    pause_button: l_,
    next_track_button: f_,
    stop_button: u_,
    record_button: h_,
    play_or_pause_button: d_,
    previous_track_button: p_,
    fast_forward: m_,
    rewind: y_,
    twisted_rightwards_arrows: g_,
    repeat: k_,
    repeat_one: __,
    arrow_backward: w_,
    arrow_up_small: b_,
    arrow_down_small: v_,
    arrow_double_up: z_,
    arrow_double_down: x_,
    arrow_right: S_,
    arrow_left: A_,
    arrow_up: M_,
    arrow_down: T_,
    arrow_upper_right: q_,
    arrow_lower_right: j_,
    arrow_lower_left: D_,
    arrow_upper_left: B_,
    arrow_up_down: C_,
    left_right_arrow: E_,
    arrows_counterclockwise: I_,
    arrow_right_hook: N_,
    leftwards_arrow_with_hook: R_,
    arrow_heading_up: F_,
    arrow_heading_down: O_,
    hash: H_,
    information_source: P_,
    abc: L_,
    abcd: G_,
    capital_abcd: U_,
    symbols: $_,
    musical_note: V_,
    notes: X_,
    wavy_dash: W_,
    curly_loop: Y_,
    heavy_check_mark: Z_,
    arrows_clockwise: K_,
    heavy_plus_sign: J_,
    heavy_minus_sign: Q_,
    heavy_division_sign: e8,
    heavy_multiplication_x: a8,
    infinity: t8,
    heavy_dollar_sign: r8,
    currency_exchange: s8,
    copyright: o8,
    registered: n8,
    tm: c8,
    end: i8,
    back: l8,
    on: f8,
    top: u8,
    soon: h8,
    ballot_box_with_check: d8,
    radio_button: p8,
    white_circle: m8,
    black_circle: y8,
    red_circle: g8,
    large_blue_circle: k8,
    small_orange_diamond: _8,
    small_blue_diamond: w8,
    large_orange_diamond: b8,
    large_blue_diamond: v8,
    small_red_triangle: z8,
    black_small_square: x8,
    white_small_square: S8,
    black_large_square: A8,
    white_large_square: M8,
    small_red_triangle_down: T8,
    black_medium_square: q8,
    white_medium_square: j8,
    black_medium_small_square: D8,
    white_medium_small_square: B8,
    black_square_button: C8,
    white_square_button: E8,
    speaker: I8,
    sound: N8,
    loud_sound: R8,
    mute: F8,
    mega: O8,
    loudspeaker: H8,
    bell: P8,
    no_bell: L8,
    black_joker: G8,
    mahjong: U8,
    spades: $8,
    clubs: V8,
    hearts: X8,
    diamonds: W8,
    flower_playing_cards: Y8,
    thought_balloon: Z8,
    right_anger_bubble: K8,
    speech_balloon: J8,
    left_speech_bubble: Q8,
    clock1: ew,
    clock2: aw,
    clock3: tw,
    clock4: rw,
    clock5: sw,
    clock6: ow,
    clock7: nw,
    clock8: cw,
    clock9: iw,
    clock10: lw,
    clock11: fw,
    clock12: uw,
    clock130: hw,
    clock230: dw,
    clock330: pw,
    clock430: mw,
    clock530: yw,
    clock630: gw,
    clock730: kw,
    clock830: _w,
    clock930: ww,
    clock1030: bw,
    clock1130: vw,
    clock1230: zw,
    afghanistan: xw,
    aland_islands: Sw,
    albania: Aw,
    algeria: Mw,
    american_samoa: Tw,
    andorra: qw,
    angola: jw,
    anguilla: Dw,
    antarctica: Bw,
    antigua_barbuda: Cw,
    argentina: Ew,
    armenia: Iw,
    aruba: Nw,
    australia: Rw,
    austria: Fw,
    azerbaijan: Ow,
    bahamas: Hw,
    bahrain: Pw,
    bangladesh: Lw,
    barbados: Gw,
    belarus: Uw,
    belgium: $w,
    belize: Vw,
    benin: Xw,
    bermuda: Ww,
    bhutan: Yw,
    bolivia: Zw,
    caribbean_netherlands: Kw,
    bosnia_herzegovina: Jw,
    botswana: Qw,
    brazil: eb,
    british_indian_ocean_territory: ab,
    british_virgin_islands: tb,
    brunei: rb,
    bulgaria: sb,
    burkina_faso: ob,
    burundi: nb,
    cape_verde: cb,
    cambodia: ib,
    cameroon: lb,
    canada: fb,
    canary_islands: ub,
    cayman_islands: hb,
    central_african_republic: db,
    chad: pb,
    chile: mb,
    cn: yb,
    christmas_island: gb,
    cocos_islands: kb,
    colombia: _b,
    comoros: wb,
    congo_brazzaville: bb,
    congo_kinshasa: vb,
    cook_islands: zb,
    costa_rica: xb,
    croatia: Sb,
    cuba: Ab,
    curacao: Mb,
    cyprus: Tb,
    czech_republic: qb,
    denmark: jb,
    djibouti: Db,
    dominica: Bb,
    dominican_republic: Cb,
    ecuador: Eb,
    egypt: Ib,
    el_salvador: Nb,
    equatorial_guinea: Rb,
    eritrea: Fb,
    estonia: Ob,
    ethiopia: Hb,
    eu: Pb,
    falkland_islands: Lb,
    faroe_islands: Gb,
    fiji: Ub,
    finland: $b,
    fr: Vb,
    french_guiana: Xb,
    french_polynesia: Wb,
    french_southern_territories: Yb,
    gabon: Zb,
    gambia: Kb,
    georgia: Jb,
    de: Qb,
    ghana: e9,
    gibraltar: a9,
    greece: t9,
    greenland: r9,
    grenada: s9,
    guadeloupe: o9,
    guam: n9,
    guatemala: c9,
    guernsey: i9,
    guinea: l9,
    guinea_bissau: f9,
    guyana: u9,
    haiti: h9,
    honduras: d9,
    hong_kong: p9,
    hungary: m9,
    iceland: y9,
    india: g9,
    indonesia: k9,
    iran: _9,
    iraq: w9,
    ireland: b9,
    isle_of_man: v9,
    israel: z9,
    it: x9,
    cote_divoire: S9,
    jamaica: A9,
    jp: M9,
    jersey: T9,
    jordan: q9,
    kazakhstan: j9,
    kenya: D9,
    kiribati: B9,
    kosovo: C9,
    kuwait: E9,
    kyrgyzstan: I9,
    laos: N9,
    latvia: R9,
    lebanon: F9,
    lesotho: O9,
    liberia: H9,
    libya: P9,
    liechtenstein: L9,
    lithuania: G9,
    luxembourg: U9,
    macau: $9,
    macedonia: V9,
    madagascar: X9,
    malawi: W9,
    malaysia: Y9,
    maldives: Z9,
    mali: K9,
    malta: J9,
    marshall_islands: Q9,
    martinique: ev,
    mauritania: av,
    mauritius: tv,
    mayotte: rv,
    mexico: sv,
    micronesia: ov,
    moldova: nv,
    monaco: cv,
    mongolia: iv,
    montenegro: lv,
    montserrat: fv,
    morocco: uv,
    mozambique: hv,
    myanmar: dv,
    namibia: pv,
    nauru: mv,
    nepal: yv,
    netherlands: gv,
    new_caledonia: kv,
    new_zealand: _v,
    nicaragua: wv,
    niger: bv,
    nigeria: vv,
    niue: zv,
    norfolk_island: xv,
    northern_mariana_islands: Sv,
    north_korea: Av,
    norway: Mv,
    oman: Tv,
    pakistan: qv,
    palau: jv,
    palestinian_territories: Dv,
    panama: Bv,
    papua_new_guinea: Cv,
    paraguay: Ev,
    peru: Iv,
    philippines: Nv,
    pitcairn_islands: Rv,
    poland: Fv,
    portugal: Ov,
    puerto_rico: Hv,
    qatar: Pv,
    reunion: Lv,
    romania: Gv,
    ru: Uv,
    rwanda: $v,
    st_barthelemy: Vv,
    st_helena: Xv,
    st_kitts_nevis: Wv,
    st_lucia: Yv,
    st_pierre_miquelon: Zv,
    st_vincent_grenadines: Kv,
    samoa: Jv,
    san_marino: Qv,
    sao_tome_principe: ez,
    saudi_arabia: az,
    senegal: tz,
    serbia: rz,
    seychelles: sz,
    sierra_leone: oz,
    singapore: nz,
    sint_maarten: cz,
    slovakia: iz,
    slovenia: lz,
    solomon_islands: fz,
    somalia: uz,
    south_africa: hz,
    south_georgia_south_sandwich_islands: dz,
    kr: pz,
    south_sudan: mz,
    es: yz,
    sri_lanka: gz,
    sudan: kz,
    suriname: _z,
    swaziland: wz,
    sweden: bz,
    switzerland: vz,
    syria: zz,
    taiwan: xz,
    tajikistan: Sz,
    tanzania: Az,
    thailand: Mz,
    timor_leste: Tz,
    togo: qz,
    tokelau: jz,
    tonga: Dz,
    trinidad_tobago: Bz,
    tunisia: Cz,
    tr: Ez,
    turkmenistan: Iz,
    turks_caicos_islands: Nz,
    tuvalu: Rz,
    uganda: Fz,
    ukraine: Oz,
    united_arab_emirates: Hz,
    uk: Pz,
    england: Lz,
    scotland: Gz,
    wales: Uz,
    us: $z,
    us_virgin_islands: Vz,
    uruguay: Xz,
    uzbekistan: Wz,
    vanuatu: Yz,
    vatican_city: Zz,
    venezuela: Kz,
    vietnam: Jz,
    wallis_futuna: Qz,
    western_sahara: ex,
    yemen: ax,
    zambia: tx,
    zimbabwe: rx,
    united_nations: sx,
    pirate_flag: ox
  }, cx = JSON.parse('["grinning","smiley","smile","grin","laughing","sweat_smile","joy","rofl","relaxed","blush","innocent","slightly_smiling_face","upside_down_face","wink","relieved","heart_eyes","smiling_face_with_three_hearts","kissing_heart","kissing","kissing_smiling_eyes","kissing_closed_eyes","yum","stuck_out_tongue","stuck_out_tongue_closed_eyes","stuck_out_tongue_winking_eye","zany","raised_eyebrow","monocle","nerd_face","sunglasses","star_struck","partying","smirk","unamused","disappointed","pensive","worried","confused","slightly_frowning_face","frowning_face","persevere","confounded","tired_face","weary","pleading","cry","sob","triumph","angry","rage","symbols_over_mouth","exploding_head","flushed","hot","cold","scream","fearful","cold_sweat","disappointed_relieved","sweat","hugs","thinking","hand_over_mouth","shushing","lying_face","no_mouth","neutral_face","expressionless","grimacing","roll_eyes","hushed","frowning","anguished","open_mouth","astonished","sleeping","drooling_face","sleepy","dizzy_face","zipper_mouth_face","woozy","nauseated_face","vomiting","sneezing_face","mask","face_with_thermometer","face_with_head_bandage","money_mouth_face","cowboy_hat_face","smiling_imp","imp","japanese_ogre","japanese_goblin","clown_face","poop","ghost","skull","skull_and_crossbones","alien","space_invader","robot","jack_o_lantern","smiley_cat","smile_cat","joy_cat","heart_eyes_cat","smirk_cat","kissing_cat","scream_cat","crying_cat_face","pouting_cat","palms_up","open_hands","raised_hands","clap","handshake","+1","-1","facepunch","fist","fist_left","fist_right","crossed_fingers","v","love_you","metal","ok_hand","point_left","point_right","point_up","point_down","point_up_2","raised_hand","raised_back_of_hand","raised_hand_with_fingers_splayed","vulcan_salute","wave","call_me_hand","muscle","fu","writing_hand","pray","foot","leg","ring","lipstick","kiss","lips","tooth","tongue","ear","nose","footprints","eye","eyes","brain","speaking_head","bust_in_silhouette","busts_in_silhouette","baby","girl","child","boy","woman","adult","man","blonde_woman","blonde_man","bearded_person","older_woman","older_adult","older_man","man_with_gua_pi_mao","woman_with_headscarf","woman_with_turban","man_with_turban","policewoman","policeman","construction_worker_woman","construction_worker_man","guardswoman","guardsman","female_detective","male_detective","woman_health_worker","man_health_worker","woman_farmer","man_farmer","woman_cook","man_cook","woman_student","man_student","woman_singer","man_singer","woman_teacher","man_teacher","woman_factory_worker","man_factory_worker","woman_technologist","man_technologist","woman_office_worker","man_office_worker","woman_mechanic","man_mechanic","woman_scientist","man_scientist","woman_artist","man_artist","woman_firefighter","man_firefighter","woman_pilot","man_pilot","woman_astronaut","man_astronaut","woman_judge","man_judge","bride_with_veil","man_in_tuxedo","princess","prince","woman_superhero","man_superhero","woman_supervillain","man_supervillain","mrs_claus","santa","sorceress","wizard","woman_elf","man_elf","woman_vampire","man_vampire","woman_zombie","man_zombie","woman_genie","man_genie","mermaid","merman","woman_fairy","man_fairy","angel","pregnant_woman","breastfeeding","bowing_woman","bowing_man","tipping_hand_woman","tipping_hand_man","no_good_woman","no_good_man","ok_woman","ok_man","raising_hand_woman","raising_hand_man","woman_facepalming","man_facepalming","woman_shrugging","man_shrugging","pouting_woman","pouting_man","frowning_woman","frowning_man","haircut_woman","haircut_man","massage_woman","massage_man","woman_in_steamy_room","man_in_steamy_room","nail_care","selfie","dancer","man_dancing","dancing_women","dancing_men","business_suit_levitating","walking_woman","walking_man","running_woman","running_man","couple","two_women_holding_hands","two_men_holding_hands","couple_with_heart_woman_man","couple_with_heart_woman_woman","couple_with_heart_man_man","couplekiss_man_woman","couplekiss_woman_woman","couplekiss_man_man","family_man_woman_boy","family_man_woman_girl","family_man_woman_girl_boy","family_man_woman_boy_boy","family_man_woman_girl_girl","family_woman_woman_boy","family_woman_woman_girl","family_woman_woman_girl_boy","family_woman_woman_boy_boy","family_woman_woman_girl_girl","family_man_man_boy","family_man_man_girl","family_man_man_girl_boy","family_man_man_boy_boy","family_man_man_girl_girl","family_woman_boy","family_woman_girl","family_woman_girl_boy","family_woman_boy_boy","family_woman_girl_girl","family_man_boy","family_man_girl","family_man_girl_boy","family_man_boy_boy","family_man_girl_girl","yarn","thread","coat","labcoat","womans_clothes","tshirt","jeans","necktie","dress","bikini","kimono","flat_shoe","high_heel","sandal","boot","mans_shoe","athletic_shoe","hiking_boot","socks","gloves","scarf","tophat","billed_hat","womans_hat","mortar_board","rescue_worker_helmet","crown","pouch","purse","handbag","briefcase","school_satchel","luggage","eyeglasses","dark_sunglasses","goggles","closed_umbrella","dog","cat","mouse","hamster","rabbit","fox_face","bear","panda_face","koala","tiger","lion","cow","pig","pig_nose","frog","monkey_face","see_no_evil","hear_no_evil","speak_no_evil","monkey","chicken","penguin","bird","baby_chick","hatching_chick","hatched_chick","duck","eagle","owl","bat","wolf","boar","horse","unicorn","honeybee","bug","butterfly","snail","shell","beetle","ant","mosquito","grasshopper","spider","spider_web","scorpion","turtle","snake","lizard","t-rex","sauropod","octopus","squid","shrimp","lobster","crab","blowfish","tropical_fish","fish","dolphin","whale","whale2","shark","crocodile","tiger2","leopard","zebra","gorilla","elephant","hippopotamus","rhinoceros","dromedary_camel","giraffe","kangaroo","camel","water_buffalo","ox","cow2","racehorse","pig2","ram","sheep","llama","goat","deer","dog2","poodle","cat2","rooster","turkey","peacock","parrot","swan","dove","rabbit2","raccoon","badger","rat","mouse2","chipmunk","hedgehog","paw_prints","dragon","dragon_face","cactus","christmas_tree","evergreen_tree","deciduous_tree","palm_tree","seedling","herb","shamrock","four_leaf_clover","bamboo","tanabata_tree","leaves","fallen_leaf","maple_leaf","ear_of_rice","hibiscus","sunflower","rose","wilted_flower","tulip","blossom","cherry_blossom","bouquet","mushroom","earth_americas","earth_africa","earth_asia","full_moon","waning_gibbous_moon","last_quarter_moon","waning_crescent_moon","new_moon","waxing_crescent_moon","first_quarter_moon","waxing_gibbous_moon","new_moon_with_face","full_moon_with_face","first_quarter_moon_with_face","last_quarter_moon_with_face","sun_with_face","crescent_moon","star","star2","dizzy","sparkles","comet","sunny","sun_behind_small_cloud","partly_sunny","sun_behind_large_cloud","sun_behind_rain_cloud","cloud","cloud_with_rain","cloud_with_lightning_and_rain","cloud_with_lightning","zap","fire","boom","snowflake","cloud_with_snow","snowman","snowman_with_snow","wind_face","dash","tornado","fog","open_umbrella","umbrella","droplet","sweat_drops","ocean","green_apple","apple","pear","tangerine","lemon","banana","watermelon","grapes","strawberry","melon","cherries","peach","mango","pineapple","coconut","kiwi_fruit","tomato","eggplant","avocado","broccoli","leafy_greens","cucumber","hot_pepper","corn","carrot","potato","sweet_potato","croissant","bagel","bread","baguette_bread","pretzel","cheese","egg","fried_egg","pancakes","bacon","steak","poultry_leg","meat_on_bone","bone","hotdog","hamburger","fries","pizza","sandwich","stuffed_flatbread","taco","burrito","green_salad","shallow_pan_of_food","canned_food","spaghetti","ramen","stew","curry","sushi","bento","fried_shrimp","rice_ball","rice","rice_cracker","fish_cake","fortune_cookie","moon_cake","oden","dango","shaved_ice","ice_cream","icecream","pie","cupcake","cake","birthday","custard","lollipop","candy","chocolate_bar","popcorn","doughnut","dumpling","cookie","chestnut","peanuts","honey_pot","milk_glass","baby_bottle","coffee","tea","cup_with_straw","sake","beer","beers","clinking_glasses","wine_glass","tumbler_glass","cocktail","tropical_drink","champagne","spoon","fork_and_knife","plate_with_cutlery","bowl_with_spoon","takeout_box","chopsticks","salt","soccer","basketball","football","baseball","softball","tennis","volleyball","rugby_football","flying_disc","8ball","golf","golfing_woman","golfing_man","ping_pong","badminton","goal_net","ice_hockey","field_hockey","lacrosse","cricket","ski","skier","snowboarder","person_fencing","women_wrestling","men_wrestling","woman_cartwheeling","man_cartwheeling","woman_playing_handball","man_playing_handball","ice_skate","curling_stone","skateboard","sled","bow_and_arrow","fishing_pole_and_fish","boxing_glove","martial_arts_uniform","rowing_woman","rowing_man","climbing_woman","climbing_man","swimming_woman","swimming_man","woman_playing_water_polo","man_playing_water_polo","woman_in_lotus_position","man_in_lotus_position","surfing_woman","surfing_man","basketball_woman","basketball_man","weight_lifting_woman","weight_lifting_man","biking_woman","biking_man","mountain_biking_woman","mountain_biking_man","horse_racing","trophy","running_shirt_with_sash","medal_sports","medal_military","1st_place_medal","2nd_place_medal","3rd_place_medal","reminder_ribbon","rosette","ticket","tickets","performing_arts","art","circus_tent","woman_juggling","man_juggling","microphone","headphones","musical_score","musical_keyboard","drum","saxophone","trumpet","guitar","violin","clapper","video_game","dart","game_die","chess_pawn","slot_machine","jigsaw","bowling","red_car","taxi","blue_car","bus","trolleybus","racing_car","police_car","ambulance","fire_engine","minibus","truck","articulated_lorry","tractor","kick_scooter","motorcycle","bike","motor_scooter","rotating_light","oncoming_police_car","oncoming_bus","oncoming_automobile","oncoming_taxi","aerial_tramway","mountain_cableway","suspension_railway","railway_car","train","monorail","bullettrain_side","bullettrain_front","light_rail","mountain_railway","steam_locomotive","train2","metro","tram","station","flying_saucer","helicopter","small_airplane","airplane","flight_departure","flight_arrival","sailboat","motor_boat","speedboat","ferry","passenger_ship","rocket","artificial_satellite","seat","canoe","anchor","construction","fuelpump","busstop","vertical_traffic_light","traffic_light","ship","ferris_wheel","roller_coaster","carousel_horse","building_construction","foggy","tokyo_tower","factory","fountain","rice_scene","mountain","mountain_snow","mount_fuji","volcano","japan","camping","tent","national_park","motorway","railway_track","sunrise","sunrise_over_mountains","desert","beach_umbrella","desert_island","city_sunrise","city_sunset","cityscape","night_with_stars","bridge_at_night","milky_way","stars","sparkler","fireworks","rainbow","houses","european_castle","japanese_castle","stadium","statue_of_liberty","house","house_with_garden","derelict_house","office","department_store","post_office","european_post_office","hospital","bank","hotel","convenience_store","school","love_hotel","wedding","classical_building","church","mosque","synagogue","kaaba","shinto_shrine","watch","iphone","calling","computer","keyboard","desktop_computer","printer","computer_mouse","trackball","joystick","clamp","minidisc","floppy_disk","cd","dvd","vhs","camera","camera_flash","video_camera","movie_camera","film_projector","film_strip","telephone_receiver","phone","pager","fax","tv","radio","studio_microphone","level_slider","control_knobs","compass","stopwatch","timer_clock","alarm_clock","mantelpiece_clock","hourglass_flowing_sand","hourglass","satellite","battery","electric_plug","bulb","flashlight","candle","fire_extinguisher","wastebasket","oil_drum","money_with_wings","dollar","yen","euro","pound","moneybag","credit_card","gem","balance_scale","toolbox","wrench","hammer","hammer_and_pick","hammer_and_wrench","pick","nut_and_bolt","gear","brick","chains","magnet","gun","bomb","firecracker","hocho","dagger","crossed_swords","shield","smoking","coffin","funeral_urn","amphora","crystal_ball","prayer_beads","nazar_amulet","barber","alembic","telescope","microscope","hole","pill","syringe","dna","microbe","petri_dish","test_tube","thermometer","broom","basket","toilet_paper","label","bookmark","toilet","shower","bathtub","bath","soap","sponge","lotion_bottle","key","old_key","couch_and_lamp","sleeping_bed","bed","door","bellhop_bell","teddy_bear","framed_picture","world_map","parasol_on_ground","moyai","shopping","shopping_cart","balloon","flags","ribbon","gift","confetti_ball","tada","dolls","wind_chime","crossed_flags","izakaya_lantern","red_envelope","email","envelope_with_arrow","incoming_envelope","e-mail","love_letter","postbox","mailbox_closed","mailbox","mailbox_with_mail","mailbox_with_no_mail","package","postal_horn","inbox_tray","outbox_tray","scroll","page_with_curl","bookmark_tabs","receipt","bar_chart","chart_with_upwards_trend","chart_with_downwards_trend","page_facing_up","date","calendar","spiral_calendar","card_index","card_file_box","ballot_box","file_cabinet","clipboard","spiral_notepad","file_folder","open_file_folder","card_index_dividers","newspaper_roll","newspaper","notebook","closed_book","green_book","blue_book","orange_book","notebook_with_decorative_cover","ledger","books","open_book","safety_pin","link","paperclip","paperclips","scissors","triangular_ruler","straight_ruler","abacus","pushpin","round_pushpin","closed_lock_with_key","lock","unlock","lock_with_ink_pen","pen","fountain_pen","black_nib","memo","pencil2","crayon","paintbrush","mag","mag_right","heart","orange_heart","yellow_heart","green_heart","blue_heart","purple_heart","black_heart","broken_heart","heavy_heart_exclamation","two_hearts","revolving_hearts","heartbeat","heartpulse","sparkling_heart","cupid","gift_heart","heart_decoration","peace_symbol","latin_cross","star_and_crescent","om","wheel_of_dharma","star_of_david","six_pointed_star","menorah","yin_yang","orthodox_cross","place_of_worship","ophiuchus","aries","taurus","gemini","cancer","leo","virgo","libra","scorpius","sagittarius","capricorn","aquarius","pisces","id","atom_symbol","u7a7a","u5272","radioactive","biohazard","mobile_phone_off","vibration_mode","u6709","u7121","u7533","u55b6","u6708","eight_pointed_black_star","vs","accept","white_flower","ideograph_advantage","secret","congratulations","u5408","u6e80","u7981","a","b","ab","cl","o2","sos","no_entry","name_badge","no_entry_sign","x","o","stop_sign","anger","hotsprings","no_pedestrians","do_not_litter","no_bicycles","non-potable_water","underage","no_mobile_phones","exclamation","grey_exclamation","question","grey_question","bangbang","interrobang","100","low_brightness","high_brightness","trident","fleur_de_lis","part_alternation_mark","warning","children_crossing","beginner","recycle","u6307","chart","sparkle","eight_spoked_asterisk","negative_squared_cross_mark","white_check_mark","diamond_shape_with_a_dot_inside","cyclone","loop","globe_with_meridians","m","atm","zzz","sa","passport_control","customs","baggage_claim","left_luggage","wheelchair","no_smoking","wc","parking","potable_water","mens","womens","baby_symbol","restroom","put_litter_in_its_place","cinema","signal_strength","koko","ng","ok","up","cool","new","free","zero","one","two","three","four","five","six","seven","eight","nine","keycap_ten","asterisk","1234","eject_button","arrow_forward","pause_button","next_track_button","stop_button","record_button","play_or_pause_button","previous_track_button","fast_forward","rewind","twisted_rightwards_arrows","repeat","repeat_one","arrow_backward","arrow_up_small","arrow_down_small","arrow_double_up","arrow_double_down","arrow_right","arrow_left","arrow_up","arrow_down","arrow_upper_right","arrow_lower_right","arrow_lower_left","arrow_upper_left","arrow_up_down","left_right_arrow","arrows_counterclockwise","arrow_right_hook","leftwards_arrow_with_hook","arrow_heading_up","arrow_heading_down","hash","information_source","abc","abcd","capital_abcd","symbols","musical_note","notes","wavy_dash","curly_loop","heavy_check_mark","arrows_clockwise","heavy_plus_sign","heavy_minus_sign","heavy_division_sign","heavy_multiplication_x","infinity","heavy_dollar_sign","currency_exchange","copyright","registered","tm","end","back","on","top","soon","ballot_box_with_check","radio_button","white_circle","black_circle","red_circle","large_blue_circle","small_orange_diamond","small_blue_diamond","large_orange_diamond","large_blue_diamond","small_red_triangle","black_small_square","white_small_square","black_large_square","white_large_square","small_red_triangle_down","black_medium_square","white_medium_square","black_medium_small_square","white_medium_small_square","black_square_button","white_square_button","speaker","sound","loud_sound","mute","mega","loudspeaker","bell","no_bell","black_joker","mahjong","spades","clubs","hearts","diamonds","flower_playing_cards","thought_balloon","right_anger_bubble","speech_balloon","left_speech_bubble","clock1","clock2","clock3","clock4","clock5","clock6","clock7","clock8","clock9","clock10","clock11","clock12","clock130","clock230","clock330","clock430","clock530","clock630","clock730","clock830","clock930","clock1030","clock1130","clock1230","white_flag","black_flag","pirate_flag","checkered_flag","triangular_flag_on_post","rainbow_flag","united_nations","afghanistan","aland_islands","albania","algeria","american_samoa","andorra","angola","anguilla","antarctica","antigua_barbuda","argentina","armenia","aruba","australia","austria","azerbaijan","bahamas","bahrain","bangladesh","barbados","belarus","belgium","belize","benin","bermuda","bhutan","bolivia","caribbean_netherlands","bosnia_herzegovina","botswana","brazil","british_indian_ocean_territory","british_virgin_islands","brunei","bulgaria","burkina_faso","burundi","cape_verde","cambodia","cameroon","canada","canary_islands","cayman_islands","central_african_republic","chad","chile","cn","christmas_island","cocos_islands","colombia","comoros","congo_brazzaville","congo_kinshasa","cook_islands","costa_rica","croatia","cuba","curacao","cyprus","czech_republic","denmark","djibouti","dominica","dominican_republic","ecuador","egypt","el_salvador","equatorial_guinea","eritrea","estonia","ethiopia","eu","falkland_islands","faroe_islands","fiji","finland","fr","french_guiana","french_polynesia","french_southern_territories","gabon","gambia","georgia","de","ghana","gibraltar","greece","greenland","grenada","guadeloupe","guam","guatemala","guernsey","guinea","guinea_bissau","guyana","haiti","honduras","hong_kong","hungary","iceland","india","indonesia","iran","iraq","ireland","isle_of_man","israel","it","cote_divoire","jamaica","jp","jersey","jordan","kazakhstan","kenya","kiribati","kosovo","kuwait","kyrgyzstan","laos","latvia","lebanon","lesotho","liberia","libya","liechtenstein","lithuania","luxembourg","macau","macedonia","madagascar","malawi","malaysia","maldives","mali","malta","marshall_islands","martinique","mauritania","mauritius","mayotte","mexico","micronesia","moldova","monaco","mongolia","montenegro","montserrat","morocco","mozambique","myanmar","namibia","nauru","nepal","netherlands","new_caledonia","new_zealand","nicaragua","niger","nigeria","niue","norfolk_island","northern_mariana_islands","north_korea","norway","oman","pakistan","palau","palestinian_territories","panama","papua_new_guinea","paraguay","peru","philippines","pitcairn_islands","poland","portugal","puerto_rico","qatar","reunion","romania","ru","rwanda","st_barthelemy","st_helena","st_kitts_nevis","st_lucia","st_pierre_miquelon","st_vincent_grenadines","samoa","san_marino","sao_tome_principe","saudi_arabia","senegal","serbia","seychelles","sierra_leone","singapore","sint_maarten","slovakia","slovenia","solomon_islands","somalia","south_africa","south_georgia_south_sandwich_islands","kr","south_sudan","es","sri_lanka","sudan","suriname","swaziland","sweden","switzerland","syria","taiwan","tajikistan","tanzania","thailand","timor_leste","togo","tokelau","tonga","trinidad_tobago","tunisia","tr","turkmenistan","turks_caicos_islands","tuvalu","uganda","ukraine","united_arab_emirates","uk","england","scotland","wales","us","us_virgin_islands","uruguay","uzbekistan","vanuatu","vatican_city","venezuela","vietnam","wallis_futuna","western_sahara","yemen","zambia","zimbabwe"]');
  var et, ir;
  function ix() {
    return ir || (ir = 1, et = {
      lib: nx,
      ordered: cx,
      fitzpatrick_scale_modifiers: [
        "\u{1F3FB}",
        "\u{1F3FC}",
        "\u{1F3FD}",
        "\u{1F3FE}",
        "\u{1F3FF}"
      ]
    }), et;
  }
  var lx = ix();
  const fx = Vr(lx);
  var at, lr;
  function ux() {
    return lr || (lr = 1, at = () => {
      const t = "\\ud800-\\udfff", l = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\u1ab0-\\u1aff\\u1dc0-\\u1dff", u = "\\ufe0e\\ufe0f", d = "\\uD83D\\uDC69\\uD83C\\uDFFB\\u200D\\uD83C\\uDF93", m = `[${t}]`, g = `[${l}]`, _ = "\\ud83c[\\udffb-\\udfff]", h = `(?:${g}|${_})`, b = `[^${t}]`, S = "(?:\\uD83C[\\uDDE6-\\uDDFF]){2}", v = "[\\ud800-\\udbff][\\udc00-\\udfff]", B = "\\u200d", C = "(?:\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40(?:\\udc65|\\udc73|\\udc77)\\udb40(?:\\udc6e|\\udc63|\\udc6c)\\udb40(?:\\udc67|\\udc74|\\udc73)\\udb40\\udc7f)", A = `[${d}]`, R = `${h}?`, N = `[${u}]?`, x = `(?:${B}(?:${[
        b,
        S,
        v
      ].join("|")})${N + R})*`, i = N + R + x, F = `(?:${[
        `${b}${g}?`,
        g,
        S,
        v,
        m,
        A
      ].join("|")})`;
      return new RegExp(`${C}|${_}(?=${_})|${F + i}`, "g");
    }), at;
  }
  var hx = ux();
  const dx = Vr(hx);
  dx();
  var px = "\uFE0F", mx = new RegExp(px, "g");
  function yx(t) {
    return t.replace(mx, "");
  }
  function gx(t) {
    return /:.+:/.test(t) ? t.slice(1, -1) : t;
  }
  var Xr = Object.entries(fx.lib).map(([t, { char: e }]) => [
    t,
    e
  ]), kx = new Map(Xr);
  new Map(Xr.map(([t, e]) => [
    yx(e),
    t
  ]));
  var _x = (t) => (uo.assert.string(t), kx.get(gx(t)));
  const va = [
    {
      description: "angry face",
      emoji: "\u{1F620}",
      emoticons: [
        ">:(",
        ">:[",
        ">:-(",
        ">:-[",
        ">=(",
        ">=[",
        ">=-(",
        ">=-["
      ],
      name: "angry",
      tags: [
        "mad",
        "annoyed"
      ]
    },
    {
      description: "smiling face with smiling eyes",
      emoji: "\u{1F60A}",
      emoticons: [
        ':")',
        ':"]',
        ':"D',
        ':-")',
        ':-"]',
        ':-"D',
        '=")',
        '="]',
        '="D',
        '=-")',
        '=-"]',
        '=-"D'
      ],
      name: "blush",
      tags: [
        "proud"
      ]
    },
    {
      description: "broken heart",
      emoji: "\u{1F494}",
      emoticons: [
        "<\\3",
        "</3"
      ],
      name: "broken_heart",
      tags: []
    },
    {
      description: "confused face",
      emoji: "\u{1F615}",
      emoticons: [
        ":/",
        ":\\",
        ":-/",
        ":-\\",
        "=/",
        "=\\",
        "=-/",
        "=-\\"
      ],
      name: "confused",
      tags: []
    },
    {
      description: "crying face",
      emoji: "\u{1F622}",
      emoticons: [
        ":,(",
        ":,[",
        ":,|",
        ":,-(",
        ":,-[",
        ":,-|",
        ":'(",
        ":'[",
        ":'|",
        ":'-(",
        ":'-[",
        ":'-|",
        "=,(",
        "=,[",
        "=,|",
        "=,-(",
        "=,-[",
        "=,-|",
        "='(",
        "='[",
        "='|",
        "='-(",
        "='-[",
        "='-|",
        "T-T"
      ],
      name: "cry",
      tags: [
        "sad",
        "tear"
      ]
    },
    {
      description: "frowning face with open mouth",
      emoji: "\u{1F626}",
      emoticons: [
        ":(",
        ":[",
        ":-(",
        ":-[",
        "=(",
        "=[",
        "=-(",
        "=-["
      ],
      name: "frowning",
      tags: []
    },
    {
      description: "red heart",
      emoji: "\u2764\uFE0F",
      emoticons: [
        "<3"
      ],
      name: "heart",
      tags: [
        "love"
      ]
    },
    {
      description: "angry face with horns",
      emoji: "\u{1F47F}",
      emoticons: [
        "]:(",
        "]:[",
        "]:-(",
        "]:-[",
        "]=(",
        "]=[",
        "]=-(",
        "]=-["
      ],
      name: "imp",
      tags: [
        "angry",
        "devil",
        "evil",
        "horns"
      ]
    },
    {
      description: "smiling face with halo",
      emoji: "\u{1F607}",
      emoticons: [
        "o:)",
        "o:]",
        "o:D",
        "o:-)",
        "o:-]",
        "o:-D",
        "o=)",
        "o=]",
        "o=D",
        "o=-)",
        "o=-]",
        "o=-D",
        "O:)",
        "O:]",
        "O:D",
        "O:-)",
        "O:-]",
        "O:-D",
        "O=)",
        "O=]",
        "O=D",
        "O=-)",
        "O=-]",
        "O=-D",
        "0:)",
        "0:]",
        "0:D",
        "0:-)",
        "0:-]",
        "0:-D",
        "0=)",
        "0=]",
        "0=D",
        "0=-)",
        "0=-]",
        "0=-D"
      ],
      name: "innocent",
      tags: [
        "angel"
      ]
    },
    {
      description: "face with tears of joy",
      emoji: "\u{1F602}",
      emoticons: [
        ":,)",
        ":,]",
        ":,D",
        ":,-)",
        ":,-]",
        ":,-D",
        ":')",
        ":']",
        ":'D",
        ":'-)",
        ":'-]",
        ":'-D",
        "=,)",
        "=,]",
        "=,D",
        "=,-)",
        "=,-]",
        "=,-D",
        "=')",
        "=']",
        "='D",
        "='-)",
        "='-]",
        "='-D"
      ],
      name: "joy",
      tags: [
        "tears"
      ]
    },
    {
      description: "kissing face",
      emoji: "\u{1F617}",
      emoticons: [
        ":*",
        ":-*",
        "=*",
        "=-*"
      ],
      name: "kissing",
      tags: []
    },
    {
      description: "grinning squinting face",
      emoji: "\u{1F606}",
      emoticons: [
        "x)",
        "x]",
        "xD",
        "x-)",
        "x-]",
        "x-D",
        "X)",
        "X]",
        "X-)",
        "X-]",
        "X-D"
      ],
      name: "laughing",
      tags: [
        "happy",
        "haha"
      ]
    },
    {
      description: "man",
      emoji: "\u{1F468}",
      emoticons: [
        ":3",
        ":-3",
        "=3",
        "=-3",
        ";3",
        ";-3",
        "x3",
        "x-3",
        "X3",
        "X-3"
      ],
      name: "man",
      tags: [
        "mustache",
        "father",
        "dad"
      ]
    },
    {
      description: "neutral face",
      emoji: "\u{1F610}",
      emoticons: [
        ":|",
        ":-|",
        "=|",
        "=-|"
      ],
      name: "neutral_face",
      tags: [
        "meh"
      ]
    },
    {
      description: "face without mouth",
      emoji: "\u{1F636}",
      emoticons: [
        ":-"
      ],
      name: "no_mouth",
      tags: [
        "mute",
        "silence"
      ]
    },
    {
      description: "face with open mouth",
      emoji: "\u{1F62E}",
      emoticons: [
        ":o",
        ":O",
        ":0",
        ":-o",
        ":-O",
        ":-0",
        "=o",
        "=O",
        "=0",
        "=-o",
        "=-O",
        "=-0"
      ],
      name: "open_mouth",
      tags: [
        "surprise",
        "impressed",
        "wow"
      ]
    },
    {
      description: "enraged face",
      emoji: "\u{1F621}",
      emoticons: [
        ":@",
        ":-@",
        "=@",
        "=-@"
      ],
      name: "rage",
      tags: [
        "angry"
      ]
    },
    {
      description: "grinning face with smiling eyes",
      emoji: "\u{1F604}",
      emoticons: [
        ":D",
        ":-D",
        "=D",
        "=-D"
      ],
      name: "smile",
      tags: [
        "happy",
        "joy",
        "laugh",
        "pleased"
      ]
    },
    {
      description: "grinning face with big eyes",
      emoji: "\u{1F603}",
      emoticons: [
        ":)",
        ":]",
        ":-)",
        ":-]",
        "=)",
        "=]",
        "=-)",
        "=-]"
      ],
      name: "smiley",
      tags: [
        "happy",
        "joy",
        "haha"
      ]
    },
    {
      description: "smiling face with horns",
      emoji: "\u{1F608}",
      emoticons: [
        "]:)",
        "]:]",
        "]:D",
        "]:-)",
        "]:-]",
        "]:-D",
        "]=)",
        "]=]",
        "]=D",
        "]=-)",
        "]=-]",
        "]=-D"
      ],
      name: "smiling_imp",
      tags: [
        "devil",
        "evil",
        "horns"
      ]
    },
    {
      description: "loudly crying face",
      emoji: "\u{1F62D}",
      emoticons: [
        ":,'(",
        ":,'[",
        ":,'-(",
        ":,'-[",
        ":',(",
        ":',[",
        ":',-(",
        ":',-[",
        "=,'(",
        "=,'[",
        "=,'-(",
        "=,'-[",
        "=',(",
        "=',[",
        "=',-(",
        "=',-["
      ],
      name: "sob",
      tags: [
        "sad",
        "cry",
        "bawling"
      ]
    },
    {
      description: "face with tongue",
      emoji: "\u{1F61B}",
      emoticons: [
        ":p",
        ":P",
        ":d",
        ":-p",
        ":-P",
        ":-d",
        "=p",
        "=P",
        "=d",
        "=-p",
        "=-P",
        "=-d"
      ],
      name: "stuck_out_tongue",
      tags: []
    },
    {
      description: "squinting face with tongue",
      emoji: "\u{1F61D}",
      emoticons: [
        "xP",
        "x-p",
        "x-P",
        "x-d",
        "Xp",
        "Xd",
        "X-p",
        "X-P",
        "X-d"
      ],
      name: "stuck_out_tongue_closed_eyes",
      tags: [
        "prank"
      ]
    },
    {
      description: "winking face with tongue",
      emoji: "\u{1F61C}",
      emoticons: [
        ";p",
        ";P",
        ";d",
        ";-p",
        ";-P",
        ";-d"
      ],
      name: "stuck_out_tongue_winking_eye",
      tags: [
        "prank",
        "silly"
      ]
    },
    {
      description: "smiling face with sunglasses",
      emoji: "\u{1F60E}",
      emoticons: [
        "8)",
        "8]",
        "8D",
        "8-)",
        "8-]",
        "8-D",
        "B)",
        "B]",
        "B-)",
        "B-]",
        "B-D"
      ],
      name: "sunglasses",
      tags: [
        "cool"
      ]
    },
    {
      description: "downcast face with sweat",
      emoji: "\u{1F613}",
      emoticons: [
        ",:(",
        ",:[",
        ",:-(",
        ",:-[",
        ",=(",
        ",=[",
        ",=-(",
        ",=-[",
        "':(",
        "':[",
        "':-(",
        "':-[",
        "'=(",
        "'=[",
        "'=-(",
        "'=-["
      ],
      name: "sweat",
      tags: []
    },
    {
      description: "grinning face with sweat",
      emoji: "\u{1F605}",
      emoticons: [
        ",:)",
        ",:]",
        ",:D",
        ",:-)",
        ",:-]",
        ",:-D",
        ",=)",
        ",=]",
        ",=D",
        ",=-)",
        ",=-]",
        ",=-D",
        "':)",
        "':]",
        "':D",
        "':-)",
        "':-]",
        "':-D",
        "'=)",
        "'=]",
        "'=D",
        "'=-)",
        "'=-]",
        "'=-D"
      ],
      name: "sweat_smile",
      tags: [
        "hot"
      ]
    },
    {
      description: "unamused face",
      emoji: "\u{1F612}",
      emoticons: [
        ":$",
        ":s",
        ":z",
        ":S",
        ":Z",
        ":-$",
        ":-s",
        ":-z",
        ":-S",
        ":-Z",
        "=$",
        "=s",
        "=z",
        "=S",
        "=Z",
        "=-$",
        "=-s",
        "=-z",
        "=-S",
        "=-Z"
      ],
      name: "unamused",
      tags: [
        "meh"
      ]
    },
    {
      description: "winking face",
      emoji: "\u{1F609}",
      emoticons: [
        ";)",
        ";]",
        ";D",
        ";-)",
        ";-]",
        ";-D"
      ],
      name: "wink",
      tags: [
        "flirt"
      ]
    }
  ], wx = /:\+1:|:-1:|:[\w-]+:/g, bx = /(^|\s)[@$|*'",;.=:\-)([\]\\/<>038BOopPsSdDxXzZ]{2,5}/g, vx = /(?:_|-(?!1))/g, zx = {
    padSpaceAfter: false,
    emoticon: false,
    accessible: false
  }, xx = (t) => {
    const e = Object.assign({}, zx, t), a = !!e.padSpaceAfter, r = !!e.emoticon, s = !!e.accessible;
    function n(g, _) {
      return {
        type: "text",
        value: g,
        data: {
          hName: "span",
          hProperties: {
            role: "img",
            ariaLabel: _
          },
          hChildren: [
            {
              type: "text",
              value: g
            }
          ]
        }
      };
    }
    function l(g) {
      const _ = va.find((N) => N.emoticons.includes(g)), h = va.find((N) => N.emoticons.includes(g.slice(0, -1))), b = va.find((N) => N.emoticons.includes(g.slice(1))), S = va.find((N) => N.emoticons.includes(g.slice(1, -1))), v = _ || h || b || S;
      if (!v) return false;
      const B = !(_ || b) && (S || h) ? g.slice(-1) : "", C = !(_ || h) && (S || b) ? g.slice(0, 1) : "", A = a ? " " : "", R = C + v.emoji + A + B;
      return s ? n(R, v.name + " emoticon") : R;
    }
    function u(g) {
      let _ = _x(g);
      if (typeof _ > "u") return false;
      if (a && (_ = _ + " "), s) {
        const h = g.slice(1, -1).replace(vx, " ") + " emoji";
        return n(_, h);
      }
      return _;
    }
    const d = [
      [
        wx,
        u
      ]
    ];
    r && d.push([
      bx,
      l
    ]);
    function m(g) {
      eo(g, d);
    }
    return m;
  };
  function Sx() {
    return {
      enter: {
        mathFlow: t,
        mathFlowFenceMeta: e,
        mathText: n
      },
      exit: {
        mathFlow: s,
        mathFlowFence: r,
        mathFlowFenceMeta: a,
        mathFlowValue: u,
        mathText: l,
        mathTextData: u
      }
    };
    function t(d) {
      const m = {
        type: "element",
        tagName: "code",
        properties: {
          className: [
            "language-math",
            "math-display"
          ]
        },
        children: []
      };
      this.enter({
        type: "math",
        meta: null,
        value: "",
        data: {
          hName: "pre",
          hChildren: [
            m
          ]
        }
      }, d);
    }
    function e() {
      this.buffer();
    }
    function a() {
      const d = this.resume(), m = this.stack[this.stack.length - 1];
      ia(m.type === "math"), m.meta = d;
    }
    function r() {
      this.data.mathFlowInside || (this.buffer(), this.data.mathFlowInside = true);
    }
    function s(d) {
      const m = this.resume().replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), g = this.stack[this.stack.length - 1];
      ia(g.type === "math"), this.exit(d), g.value = m;
      const _ = g.data.hChildren[0];
      ia(_.type === "element"), ia(_.tagName === "code"), _.children.push({
        type: "text",
        value: m
      }), this.data.mathFlowInside = void 0;
    }
    function n(d) {
      this.enter({
        type: "inlineMath",
        value: "",
        data: {
          hName: "code",
          hProperties: {
            className: [
              "language-math",
              "math-inline"
            ]
          },
          hChildren: []
        }
      }, d), this.buffer();
    }
    function l(d) {
      const m = this.resume(), g = this.stack[this.stack.length - 1];
      ia(g.type === "inlineMath"), this.exit(d), g.value = m, g.data.hChildren.push({
        type: "text",
        value: m
      });
    }
    function u(d) {
      this.config.enter.data.call(this, d), this.config.exit.data.call(this, d);
    }
  }
  function Ax(t) {
    let e = (t || {}).singleDollarTextMath;
    return e == null && (e = true), r.peek = s, {
      unsafe: [
        {
          character: "\r",
          inConstruct: "mathFlowMeta"
        },
        {
          character: `
`,
          inConstruct: "mathFlowMeta"
        },
        {
          character: "$",
          after: e ? void 0 : "\\$",
          inConstruct: "phrasing"
        },
        {
          character: "$",
          inConstruct: "mathFlowMeta"
        },
        {
          atBreak: true,
          character: "$",
          after: "\\$"
        }
      ],
      handlers: {
        math: a,
        inlineMath: r
      }
    };
    function a(n, l, u, d) {
      const m = n.value || "", g = u.createTracker(d), _ = "$".repeat(Math.max(ao(m, "$") + 1, 2)), h = u.enter("mathFlow");
      let b = g.move(_);
      if (n.meta) {
        const S = u.enter("mathFlowMeta");
        b += g.move(u.safe(n.meta, {
          after: `
`,
          before: b,
          encode: [
            "$"
          ],
          ...g.current()
        })), S();
      }
      return b += g.move(`
`), m && (b += g.move(m + `
`)), b += g.move(_), h(), b;
    }
    function r(n, l, u) {
      let d = n.value || "", m = 1;
      for (e || m++; new RegExp("(^|[^$])" + "\\$".repeat(m) + "([^$]|$)").test(d); ) m++;
      const g = "$".repeat(m);
      /[^ \r\n]/.test(d) && (/^[ \r\n]/.test(d) && /[ \r\n]$/.test(d) || /^\$|\$$/.test(d)) && (d = " " + d + " ");
      let _ = -1;
      for (; ++_ < u.unsafe.length; ) {
        const h = u.unsafe[_];
        if (!h.atBreak) continue;
        const b = u.compilePattern(h);
        let S;
        for (; S = b.exec(d); ) {
          let v = S.index;
          d.codePointAt(v) === 10 && d.codePointAt(v - 1) === 13 && v--, d = d.slice(0, v) + " " + d.slice(S.index + 1);
        }
      }
      return g + d + g;
    }
    function s() {
      return "$";
    }
  }
  const Mx = {
    tokenize: Tx,
    concrete: true,
    name: "mathFlow"
  }, fr = {
    tokenize: qx,
    partial: true
  };
  function Tx(t, e, a) {
    const r = this, s = r.events[r.events.length - 1], n = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], true).length : 0;
    let l = 0;
    return u;
    function u(A) {
      return t.enter("mathFlow"), t.enter("mathFlowFence"), t.enter("mathFlowFenceSequence"), d(A);
    }
    function d(A) {
      return A === 36 ? (t.consume(A), l++, d) : l < 2 ? a(A) : (t.exit("mathFlowFenceSequence"), wa(t, m, "whitespace")(A));
    }
    function m(A) {
      return A === null || Ve(A) ? _(A) : (t.enter("mathFlowFenceMeta"), t.enter("chunkString", {
        contentType: "string"
      }), g(A));
    }
    function g(A) {
      return A === null || Ve(A) ? (t.exit("chunkString"), t.exit("mathFlowFenceMeta"), _(A)) : A === 36 ? a(A) : (t.consume(A), g);
    }
    function _(A) {
      return t.exit("mathFlowFence"), r.interrupt ? e(A) : t.attempt(fr, h, B)(A);
    }
    function h(A) {
      return t.attempt({
        tokenize: C,
        partial: true
      }, B, b)(A);
    }
    function b(A) {
      return (n ? wa(t, S, "linePrefix", n + 1) : S)(A);
    }
    function S(A) {
      return A === null ? B(A) : Ve(A) ? t.attempt(fr, h, B)(A) : (t.enter("mathFlowValue"), v(A));
    }
    function v(A) {
      return A === null || Ve(A) ? (t.exit("mathFlowValue"), S(A)) : (t.consume(A), v);
    }
    function B(A) {
      return t.exit("mathFlow"), e(A);
    }
    function C(A, R, N) {
      let x = 0;
      return wa(A, i, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
      function i(O) {
        return A.enter("mathFlowFence"), A.enter("mathFlowFenceSequence"), z(O);
      }
      function z(O) {
        return O === 36 ? (x++, A.consume(O), z) : x < l ? N(O) : (A.exit("mathFlowFenceSequence"), wa(A, F, "whitespace")(O));
      }
      function F(O) {
        return O === null || Ve(O) ? (A.exit("mathFlowFence"), R(O)) : N(O);
      }
    }
  }
  function qx(t, e, a) {
    const r = this;
    return s;
    function s(l) {
      return l === null ? e(l) : (t.enter("lineEnding"), t.consume(l), t.exit("lineEnding"), n);
    }
    function n(l) {
      return r.parser.lazy[r.now().line] ? a(l) : e(l);
    }
  }
  function jx(t) {
    let a = (t || {}).singleDollarTextMath;
    return a == null && (a = true), {
      tokenize: r,
      resolve: Dx,
      previous: Bx,
      name: "mathText"
    };
    function r(s, n, l) {
      let u = 0, d, m;
      return g;
      function g(v) {
        return s.enter("mathText"), s.enter("mathTextSequence"), _(v);
      }
      function _(v) {
        return v === 36 ? (s.consume(v), u++, _) : u < 2 && !a ? l(v) : (s.exit("mathTextSequence"), h(v));
      }
      function h(v) {
        return v === null ? l(v) : v === 36 ? (m = s.enter("mathTextSequence"), d = 0, S(v)) : v === 32 ? (s.enter("space"), s.consume(v), s.exit("space"), h) : Ve(v) ? (s.enter("lineEnding"), s.consume(v), s.exit("lineEnding"), h) : (s.enter("mathTextData"), b(v));
      }
      function b(v) {
        return v === null || v === 32 || v === 36 || Ve(v) ? (s.exit("mathTextData"), h(v)) : (s.consume(v), b);
      }
      function S(v) {
        return v === 36 ? (s.consume(v), d++, S) : d === u ? (s.exit("mathTextSequence"), s.exit("mathText"), n(v)) : (m.type = "mathTextData", b(v));
      }
    }
  }
  function Dx(t) {
    let e = t.length - 4, a = 3, r, s;
    if ((t[a][1].type === "lineEnding" || t[a][1].type === "space") && (t[e][1].type === "lineEnding" || t[e][1].type === "space")) {
      for (r = a; ++r < e; ) if (t[r][1].type === "mathTextData") {
        t[e][1].type = "mathTextPadding", t[a][1].type = "mathTextPadding", a += 2, e -= 2;
        break;
      }
    }
    for (r = a - 1, e++; ++r <= e; ) s === void 0 ? r !== e && t[r][1].type !== "lineEnding" && (s = r) : (r === e || t[r][1].type === "lineEnding") && (t[s][1].type = "mathTextData", r !== s + 2 && (t[s][1].end = t[r - 1][1].end, t.splice(s + 2, r - s - 2), e -= r - s - 2, r = s + 2), s = void 0);
    return t;
  }
  function Bx(t) {
    return t !== 36 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function Cx(t) {
    return {
      flow: {
        36: Mx
      },
      text: {
        36: jx(t)
      }
    };
  }
  class q extends Error {
    constructor(e, a) {
      var r = "KaTeX parse error: " + e, s, n, l = a && a.loc;
      if (l && l.start <= l.end) {
        var u = l.lexer.input;
        s = l.start, n = l.end, s === u.length ? r += " at end of input: " : r += " at position " + (s + 1) + ": ";
        var d = u.slice(s, n).replace(/[^]/g, "$&\u0332"), m;
        s > 15 ? m = "\u2026" + u.slice(s - 15, s) : m = u.slice(0, s);
        var g;
        n + 15 < u.length ? g = u.slice(n, n + 15) + "\u2026" : g = u.slice(n), r += m + d + g;
      }
      super(r), this.name = "ParseError", Object.setPrototypeOf(this, q.prototype), this.position = s, s != null && n != null && (this.length = n - s), this.rawMessage = e;
    }
  }
  var Ex = /([A-Z])/g, Ct = (t) => t.replace(Ex, "-$1").toLowerCase(), Ix = {
    "&": "&amp;",
    ">": "&gt;",
    "<": "&lt;",
    '"': "&quot;",
    "'": "&#x27;"
  }, Nx = /[&><"']/g, oe = (t) => String(t).replace(Nx, (e) => Ix[e]), Ba = (t) => t.type === "ordgroup" || t.type === "color" ? t.body.length === 1 ? Ba(t.body[0]) : t : t.type === "font" ? Ba(t.body) : t, Rx = /* @__PURE__ */ new Set([
    "mathord",
    "textord",
    "atom"
  ]), qe = (t) => Rx.has(Ba(t).type), Fx = (t) => {
    var e = /^[\x00-\x20]*([^\\/#?]*?)(:|&#0*58|&#x0*3a|&colon)/i.exec(t);
    return e ? e[2] !== ":" || !/^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(e[1]) ? null : e[1].toLowerCase() : "_relative";
  }, kt = {
    displayMode: {
      type: "boolean",
      description: "Render math in display mode, which puts the math in display style (so \\int and \\sum are large, for example), and centers the math on the page on its own line.",
      cli: "-d, --display-mode"
    },
    output: {
      type: {
        enum: [
          "htmlAndMathml",
          "html",
          "mathml"
        ]
      },
      description: "Determines the markup language of the output.",
      cli: "-F, --format <type>"
    },
    leqno: {
      type: "boolean",
      description: "Render display math in leqno style (left-justified tags)."
    },
    fleqn: {
      type: "boolean",
      description: "Render display math flush left."
    },
    throwOnError: {
      type: "boolean",
      default: true,
      cli: "-t, --no-throw-on-error",
      cliDescription: "Render errors (in the color given by --error-color) instead of throwing a ParseError exception when encountering an error."
    },
    errorColor: {
      type: "string",
      default: "#cc0000",
      cli: "-c, --error-color <color>",
      cliDescription: "A color string given in the format 'rgb' or 'rrggbb' (no #). This option determines the color of errors rendered by the -t option.",
      cliProcessor: (t) => "#" + t
    },
    macros: {
      type: "object",
      cli: "-m, --macro <def>",
      cliDescription: "Define custom macro of the form '\\foo:expansion' (use multiple -m arguments for multiple macros).",
      cliDefault: [],
      cliProcessor: (t, e) => (e.push(t), e)
    },
    minRuleThickness: {
      type: "number",
      description: "Specifies a minimum thickness, in ems, for fraction lines, `\\sqrt` top lines, `{array}` vertical lines, `\\hline`, `\\hdashline`, `\\underline`, `\\overline`, and the borders of `\\fbox`, `\\boxed`, and `\\fcolorbox`.",
      processor: (t) => Math.max(0, t),
      cli: "--min-rule-thickness <size>",
      cliProcessor: parseFloat
    },
    colorIsTextColor: {
      type: "boolean",
      description: "Makes \\color behave like LaTeX's 2-argument \\textcolor, instead of LaTeX's one-argument \\color mode change.",
      cli: "-b, --color-is-text-color"
    },
    strict: {
      type: [
        {
          enum: [
            "warn",
            "ignore",
            "error"
          ]
        },
        "boolean",
        "function"
      ],
      description: "Turn on strict / LaTeX faithfulness mode, which throws an error if the input uses features that are not supported by LaTeX.",
      cli: "-S, --strict",
      cliDefault: false
    },
    trust: {
      type: [
        "boolean",
        "function"
      ],
      description: "Trust the input, enabling all HTML features such as \\url.",
      cli: "-T, --trust"
    },
    maxSize: {
      type: "number",
      default: 1 / 0,
      description: "If non-zero, all user-specified sizes, e.g. in \\rule{500em}{500em}, will be capped to maxSize ems. Otherwise, elements and spaces can be arbitrarily large",
      processor: (t) => Math.max(0, t),
      cli: "-s, --max-size <n>",
      cliProcessor: parseInt
    },
    maxExpand: {
      type: "number",
      default: 1e3,
      description: "Limit the number of macro expansions to the specified number, to prevent e.g. infinite macro loops. If set to Infinity, the macro expander will try to fully expand as in LaTeX.",
      processor: (t) => Math.max(0, t),
      cli: "-e, --max-expand <n>",
      cliProcessor: (t) => t === "Infinity" ? 1 / 0 : parseInt(t)
    },
    globalGroup: {
      type: "boolean",
      cli: false
    }
  };
  function Ox(t) {
    if ("default" in t) return t.default;
    var e = t.type, a = Array.isArray(e) ? e[0] : e;
    if (typeof a != "string") return a.enum[0];
    switch (a) {
      case "boolean":
        return false;
      case "string":
        return "";
      case "number":
        return 0;
      case "object":
        return {};
    }
  }
  class Et {
    constructor(e) {
      e === void 0 && (e = {}), e = e || {};
      for (var a of Object.keys(kt)) {
        var r = kt[a], s = e[a];
        this[a] = s !== void 0 ? r.processor ? r.processor(s) : s : Ox(r);
      }
    }
    reportNonstrict(e, a, r) {
      var s = this.strict;
      if (typeof s == "function" && (s = s(e, a, r)), !(!s || s === "ignore")) {
        if (s === true || s === "error") throw new q("LaTeX-incompatible input and strict mode is set to 'error': " + (a + " [" + e + "]"), r);
        s === "warn" ? typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (a + " [" + e + "]")) : typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + s + "': " + a + " [" + e + "]"));
      }
    }
    useStrictBehavior(e, a, r) {
      var s = this.strict;
      if (typeof s == "function") try {
        s = s(e, a, r);
      } catch {
        s = "error";
      }
      return !s || s === "ignore" ? false : s === true || s === "error" ? true : s === "warn" ? (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + (a + " [" + e + "]")), false) : (typeof console < "u" && console.warn("LaTeX-incompatible input and strict mode is set to " + ("unrecognized '" + s + "': " + a + " [" + e + "]")), false);
    }
    isTrusted(e) {
      if ("url" in e && e.url && !e.protocol) {
        var a = Fx(e.url);
        if (a == null) return false;
        e.protocol = a;
      }
      var r = typeof this.trust == "function" ? this.trust(e) : this.trust;
      return !!r;
    }
  }
  class Ie {
    constructor(e, a, r) {
      this.id = e, this.size = a, this.cramped = r;
    }
    sup() {
      return we[Hx[this.id]];
    }
    sub() {
      return we[Px[this.id]];
    }
    fracNum() {
      return we[Lx[this.id]];
    }
    fracDen() {
      return we[Gx[this.id]];
    }
    cramp() {
      return we[Ux[this.id]];
    }
    text() {
      return we[$x[this.id]];
    }
    isTight() {
      return this.size >= 2;
    }
  }
  var It = 0, Ea = 1, Qe = 2, Me = 3, ua = 4, ye = 5, ea = 6, ie = 7, we = [
    new Ie(It, 0, false),
    new Ie(Ea, 0, true),
    new Ie(Qe, 1, false),
    new Ie(Me, 1, true),
    new Ie(ua, 2, false),
    new Ie(ye, 2, true),
    new Ie(ea, 3, false),
    new Ie(ie, 3, true)
  ], Hx = [
    ua,
    ye,
    ua,
    ye,
    ea,
    ie,
    ea,
    ie
  ], Px = [
    ye,
    ye,
    ye,
    ye,
    ie,
    ie,
    ie,
    ie
  ], Lx = [
    Qe,
    Me,
    ua,
    ye,
    ea,
    ie,
    ea,
    ie
  ], Gx = [
    Me,
    Me,
    ye,
    ye,
    ie,
    ie,
    ie,
    ie
  ], Ux = [
    Ea,
    Ea,
    Me,
    Me,
    ye,
    ye,
    ie,
    ie
  ], $x = [
    It,
    Ea,
    Qe,
    Me,
    Qe,
    Me,
    Qe,
    Me
  ], L = {
    DISPLAY: we[It],
    TEXT: we[Qe],
    SCRIPT: we[ua],
    SCRIPTSCRIPT: we[ea]
  }, _t = [
    {
      name: "latin",
      blocks: [
        [
          256,
          591
        ],
        [
          768,
          879
        ]
      ]
    },
    {
      name: "cyrillic",
      blocks: [
        [
          1024,
          1279
        ]
      ]
    },
    {
      name: "armenian",
      blocks: [
        [
          1328,
          1423
        ]
      ]
    },
    {
      name: "brahmic",
      blocks: [
        [
          2304,
          4255
        ]
      ]
    },
    {
      name: "georgian",
      blocks: [
        [
          4256,
          4351
        ]
      ]
    },
    {
      name: "cjk",
      blocks: [
        [
          12288,
          12543
        ],
        [
          19968,
          40879
        ],
        [
          65280,
          65376
        ]
      ]
    },
    {
      name: "hangul",
      blocks: [
        [
          44032,
          55215
        ]
      ]
    }
  ];
  function Vx(t) {
    for (var e = 0; e < _t.length; e++) for (var a = _t[e], r = 0; r < a.blocks.length; r++) {
      var s = a.blocks[r];
      if (t >= s[0] && t <= s[1]) return a.name;
    }
    return null;
  }
  var Ca = [];
  _t.forEach((t) => t.blocks.forEach((e) => Ca.push(...e)));
  function Wr(t) {
    for (var e = 0; e < Ca.length; e += 2) if (t >= Ca[e] && t <= Ca[e + 1]) return true;
    return false;
  }
  var Je = 80, Xx = function(e, a) {
    return "M95," + (622 + e + a) + `
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l` + e / 2.075 + " -" + e + `
c5.3,-9.3,12,-14,20,-14
H400000v` + (40 + e) + `H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M` + (834 + e) + " " + a + "h400000v" + (40 + e) + "h-400000z";
  }, Wx = function(e, a) {
    return "M263," + (601 + e + a) + `c0.7,0,18,39.7,52,119
c34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120
c340,-704.7,510.7,-1060.3,512,-1067
l` + e / 2.084 + " -" + e + `
c4.7,-7.3,11,-11,19,-11
H40000v` + (40 + e) + `H1012.3
s-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232
c-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1
s-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26
c-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z
M` + (1001 + e) + " " + a + "h400000v" + (40 + e) + "h-400000z";
  }, Yx = function(e, a) {
    return "M983 " + (10 + e + a) + `
l` + e / 3.13 + " -" + e + `
c4,-6.7,10,-10,18,-10 H400000v` + (40 + e) + `
H1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7
s-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744
c-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30
c26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722
c56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5
c53.7,-170.3,84.5,-266.8,92.5,-289.5z
M` + (1001 + e) + " " + a + "h400000v" + (40 + e) + "h-400000z";
  }, Zx = function(e, a) {
    return "M424," + (2398 + e + a) + `
c-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514
c0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20
s-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121
s209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081
l` + e / 4.223 + " -" + e + `c4,-6.7,10,-10,18,-10 H400000
v` + (40 + e) + `H1014.6
s-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185
c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2z M` + (1001 + e) + " " + a + `
h400000v` + (40 + e) + "h-400000z";
  }, Kx = function(e, a) {
    return "M473," + (2713 + e + a) + `
c339.3,-1799.3,509.3,-2700,510,-2702 l` + e / 5.298 + " -" + e + `
c3.3,-7.3,9.3,-11,18,-11 H400000v` + (40 + e) + `H1017.7
s-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9
c-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200
c0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26
s76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,
606zM` + (1001 + e) + " " + a + "h400000v" + (40 + e) + "H1017.7z";
  }, Jx = function(e) {
    var a = e / 2;
    return "M400000 " + e + " H0 L" + a + " 0 l65 45 L145 " + (e - 80) + " H400000z";
  }, Qx = function(e, a, r) {
    var s = r - 54 - a - e;
    return "M702 " + (e + a) + "H400000" + (40 + e) + `
H742v` + s + `l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1
h-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170
c-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667
219 661 l218 661zM702 ` + a + "H400000v" + (40 + e) + "H742z";
  }, eS = function(e, a, r) {
    a = 1e3 * a;
    var s = "";
    switch (e) {
      case "sqrtMain":
        s = Xx(a, Je);
        break;
      case "sqrtSize1":
        s = Wx(a, Je);
        break;
      case "sqrtSize2":
        s = Yx(a, Je);
        break;
      case "sqrtSize3":
        s = Zx(a, Je);
        break;
      case "sqrtSize4":
        s = Kx(a, Je);
        break;
      case "sqrtTall":
        s = Qx(a, Je, r);
    }
    return s;
  }, aS = function(e, a) {
    switch (e) {
      case "\u239C":
        return "M291 0 H417 V" + a + " H291z M291 0 H417 V" + a + " H291z";
      case "\u2223":
        return "M145 0 H188 V" + a + " H145z M145 0 H188 V" + a + " H145z";
      case "\u2225":
        return "M145 0 H188 V" + a + " H145z M145 0 H188 V" + a + " H145z" + ("M367 0 H410 V" + a + " H367z M367 0 H410 V" + a + " H367z");
      case "\u239F":
        return "M457 0 H583 V" + a + " H457z M457 0 H583 V" + a + " H457z";
      case "\u23A2":
        return "M319 0 H403 V" + a + " H319z M319 0 H403 V" + a + " H319z";
      case "\u23A5":
        return "M263 0 H347 V" + a + " H263z M263 0 H347 V" + a + " H263z";
      case "\u23AA":
        return "M384 0 H504 V" + a + " H384z M384 0 H504 V" + a + " H384z";
      case "\u23D0":
        return "M312 0 H355 V" + a + " H312z M312 0 H355 V" + a + " H312z";
      case "\u2016":
        return "M257 0 H300 V" + a + " H257z M257 0 H300 V" + a + " H257z" + ("M478 0 H521 V" + a + " H478z M478 0 H521 V" + a + " H478z");
      default:
        return "";
    }
  }, ur = {
    doubleleftarrow: `M262 157
l10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3
 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28
 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5
c2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5
 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87
-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7
-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z
m8 0v40h399730v-40zm0 194v40h399730v-40z`,
    doublerightarrow: `M399738 392l
-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5
 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88
-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68
-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18
-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782
c-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3
-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z`,
    leftarrow: `M400000 241H110l3-3c68.7-52.7 113.7-120
 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8
-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247
c-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208
 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3
 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202
 l-3-3h399890zM100 241v40h399900v-40z`,
    leftbrace: `M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117
-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7
 5-6 9-10 13-.7 1-7.3 1-20 1H6z`,
    leftbraceunder: `M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13
 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688
 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7
-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z`,
    leftgroup: `M400000 80
H435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0
 435 0h399565z`,
    leftgroupunder: `M400000 262
H435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219
 435 219h399565z`,
    leftharpoon: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3
-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5
-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7
-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z`,
    leftharpoonplus: `M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5
 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3
-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7
-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z
m0 0v40h400000v-40z`,
    leftharpoondown: `M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333
 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5
 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667
-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z`,
    leftharpoondownplus: `M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12
 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7
-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0
v40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z`,
    lefthook: `M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5
-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3
-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21
 71.5 23h399859zM103 281v-40h399897v40z`,
    leftlinesegment: `M40 281 V428 H0 V94 H40 V241 H400000 v40z
M40 281 V428 H0 V94 H40 V241 H400000 v40z`,
    leftmapsto: `M40 281 V448H0V74H40V241H400000v40z
M40 281 V448H0V74H40V241H400000v40z`,
    leftToFrom: `M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23
-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8
c28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3
 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z`,
    longequal: `M0 50 h400000 v40H0z m0 194h40000v40H0z
M0 50 h400000 v40H0z m0 194h40000v40H0z`,
    midbrace: `M200428 334
c-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14
-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7
 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11
 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z`,
    midbraceunder: `M199572 214
c100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14
 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3
 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0
-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z`,
    oiintSize1: `M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6
-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z
m368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8
60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z`,
    oiintSize2: `M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8
-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z
m502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2
c0 110 84 276 504 276s502.4-166 502.4-276z`,
    oiiintSize1: `M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6
-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z
m525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0
85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z`,
    oiiintSize2: `M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8
-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z
m770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1
c0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z`,
    rightarrow: `M0 241v40h399891c-47.3 35.3-84 78-110 128
-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20
 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7
 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85
-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
 151.7 139 205zm0 0v40h399900v-40z`,
    rightbrace: `M400000 542l
-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5
s-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1
c124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z`,
    rightbraceunder: `M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3
 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237
-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z`,
    rightgroup: `M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0
 3-1 3-3v-38c-76-158-257-219-435-219H0z`,
    rightgroupunder: `M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18
 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z`,
    rightharpoon: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3
-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2
-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58
 69.2 92 94.5zm0 0v40h399900v-40z`,
    rightharpoonplus: `M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11
-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7
 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z
m0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z`,
    rightharpoondown: `M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8
 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5
-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95
-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z`,
    rightharpoondownplus: `M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8
 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3
 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3
-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z
m0-194v40h400000v-40zm0 0v40h400000v-40z`,
    righthook: `M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3
 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0
-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21
 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z`,
    rightlinesegment: `M399960 241 V94 h40 V428 h-40 V281 H0 v-40z
M399960 241 V94 h40 V428 h-40 V281 H0 v-40z`,
    rightToFrom: `M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23
 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32
-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142
-167z M100 147v40h399900v-40zM0 341v40h399900v-40z`,
    twoheadleftarrow: `M0 167c68 40
 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69
-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3
-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19
-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101
 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z`,
    twoheadrightarrow: `M400000 167
c-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3
 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42
 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333
-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70
 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z`,
    tilde1: `M200 55.538c-77 0-168 73.953-177 73.953-3 0-7
-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0
 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0
 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128
-68.267.847-113-73.952-191-73.952z`,
    tilde2: `M344 55.266c-142 0-300.638 81.316-311.5 86.418
-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9
 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114
c1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751
 181.476 676 181.476c-149 0-189-126.21-332-126.21z`,
    tilde3: `M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457
-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0
 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697
 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696
 -338 0-409-156.573-744-156.573z`,
    tilde4: `M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345
-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409
 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9
 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409
 -175.236-744-175.236z`,
    vec: `M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5
3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11
10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63
-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1
-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59
H213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359
c-16-25.333-24-45-24-59z`,
    widehat1: `M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22
c-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z`,
    widehat2: `M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat3: `M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widehat4: `M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10
-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z`,
    widecheck1: `M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,
-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z`,
    widecheck2: `M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck3: `M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    widecheck4: `M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,
-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z`,
    baraboveleftarrow: `M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202
c4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5
c-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130
s-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47
121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6
s2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11
c0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z
M100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z`,
    rightarrowabovebar: `M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32
-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0
13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39
-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5
-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5
-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67
151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z`,
    baraboveshortleftharpoon: `M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17
c2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21
c-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40
c-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z
M0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z`,
    rightharpoonaboveshortbar: `M0,241 l0,40c399126,0,399993,0,399993,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z`,
    shortbaraboveleftharpoon: `M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11
c1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,
1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,
-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z
M93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z`,
    shortrightharpoonabovebar: `M53,241l0,40c398570,0,399437,0,399437,0
c4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,
-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6
c-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z
M500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z`
  }, tS = function(e, a) {
    switch (e) {
      case "lbrack":
        return "M403 1759 V84 H666 V0 H319 V1759 v" + a + ` v1759 h347 v-84
H403z M403 1759 V0 H319 V1759 v` + a + " v1759 h84z";
      case "rbrack":
        return "M347 1759 V0 H0 V84 H263 V1759 v" + a + ` v1759 H0 v84 H347z
M347 1759 V0 H263 V1759 v` + a + " v1759 h84z";
      case "vert":
        return "M145 15 v585 v" + a + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -a + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + a + " v585 h43z";
      case "doublevert":
        return "M145 15 v585 v" + a + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -a + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M188 15 H145 v585 v` + a + ` v585 h43z
M367 15 v585 v` + a + ` v585 c2.667,10,9.667,15,21,15
c10,0,16.667,-5,20,-15 v-585 v` + -a + ` v-585 c-2.667,-10,-9.667,-15,-21,-15
c-10,0,-16.667,5,-20,15z M410 15 H367 v585 v` + a + " v585 h43z";
      case "lfloor":
        return "M319 602 V0 H403 V602 v" + a + ` v1715 h263 v84 H319z
MM319 602 V0 H403 V602 v` + a + " v1715 H319z";
      case "rfloor":
        return "M319 602 V0 H403 V602 v" + a + ` v1799 H0 v-84 H319z
MM319 602 V0 H403 V602 v` + a + " v1715 H319z";
      case "lceil":
        return "M403 1759 V84 H666 V0 H319 V1759 v" + a + ` v602 h84z
M403 1759 V0 H319 V1759 v` + a + " v602 h84z";
      case "rceil":
        return "M347 1759 V0 H0 V84 H263 V1759 v" + a + ` v602 h84z
M347 1759 V0 h-84 V1759 v` + a + " v602 h84z";
      case "lparen":
        return `M863,9c0,-2,-2,-5,-6,-9c0,0,-17,0,-17,0c-12.7,0,-19.3,0.3,-20,1
c-5.3,5.3,-10.3,11,-15,17c-242.7,294.7,-395.3,682,-458,1162c-21.3,163.3,-33.3,349,
-36,557 l0,` + (a + 84) + `c0.2,6,0,26,0,60c2,159.3,10,310.7,24,454c53.3,528,210,
949.7,470,1265c4.7,6,9.7,11.7,15,17c0.7,0.7,7,1,19,1c0,0,18,0,18,0c4,-4,6,-7,6,-9
c0,-2.7,-3.3,-8.7,-10,-18c-135.3,-192.7,-235.5,-414.3,-300.5,-665c-65,-250.7,-102.5,
-544.7,-112.5,-882c-2,-104,-3,-167,-3,-189
l0,-` + (a + 92) + `c0,-162.7,5.7,-314,17,-454c20.7,-272,63.7,-513,129,-723c65.3,
-210,155.3,-396.3,270,-559c6.7,-9.3,10,-15.3,10,-18z`;
      case "rparen":
        return `M76,0c-16.7,0,-25,3,-25,9c0,2,2,6.3,6,13c21.3,28.7,42.3,60.3,
63,95c96.7,156.7,172.8,332.5,228.5,527.5c55.7,195,92.8,416.5,111.5,664.5
c11.3,139.3,17,290.7,17,454c0,28,1.7,43,3.3,45l0,` + (a + 9) + `
c-3,4,-3.3,16.7,-3.3,38c0,162,-5.7,313.7,-17,455c-18.7,248,-55.8,469.3,-111.5,664
c-55.7,194.7,-131.8,370.3,-228.5,527c-20.7,34.7,-41.7,66.3,-63,95c-2,3.3,-4,7,-6,11
c0,7.3,5.7,11,17,11c0,0,11,0,11,0c9.3,0,14.3,-0.3,15,-1c5.3,-5.3,10.3,-11,15,-17
c242.7,-294.7,395.3,-681.7,458,-1161c21.3,-164.7,33.3,-350.7,36,-558
l0,-` + (a + 144) + `c-2,-159.3,-10,-310.7,-24,-454c-53.3,-528,-210,-949.7,
-470,-1265c-4.7,-6,-9.7,-11.7,-15,-17c-0.7,-0.7,-6.7,-1,-18,-1z`;
      default:
        throw new Error("Unknown stretchy delimiter.");
    }
  };
  class ra {
    constructor(e) {
      this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {};
    }
    hasClass(e) {
      return this.classes.includes(e);
    }
    toNode() {
      for (var e = document.createDocumentFragment(), a = 0; a < this.children.length; a++) e.appendChild(this.children[a].toNode());
      return e;
    }
    toMarkup() {
      for (var e = "", a = 0; a < this.children.length; a++) e += this.children[a].toMarkup();
      return e;
    }
    toText() {
      var e = (a) => a.toText();
      return this.children.map(e).join("");
    }
  }
  var wt = {
    pt: 1,
    mm: 7227 / 2540,
    cm: 7227 / 254,
    in: 72.27,
    bp: 803 / 800,
    pc: 12,
    dd: 1238 / 1157,
    cc: 14856 / 1157,
    nd: 685 / 642,
    nc: 1370 / 107,
    sp: 1 / 65536,
    px: 803 / 800
  }, rS = {
    ex: true,
    em: true,
    mu: true
  }, Yr = function(e) {
    return typeof e != "string" && (e = e.unit), e in wt || e in rS || e === "ex";
  }, K = function(e, a) {
    var r;
    if (e.unit in wt) r = wt[e.unit] / a.fontMetrics().ptPerEm / a.sizeMultiplier;
    else if (e.unit === "mu") r = a.fontMetrics().cssEmPerMu;
    else {
      var s;
      if (a.style.isTight() ? s = a.havingStyle(a.style.text()) : s = a, e.unit === "ex") r = s.fontMetrics().xHeight;
      else if (e.unit === "em") r = s.fontMetrics().quad;
      else throw new q("Invalid unit: '" + e.unit + "'");
      s !== a && (r *= s.sizeMultiplier / a.sizeMultiplier);
    }
    return Math.min(e.number * r, a.maxSize);
  }, D = function(e) {
    return +e.toFixed(4) + "em";
  }, Fe = function(e) {
    return e.filter((a) => a).join(" ");
  }, Zr = function(e, a, r) {
    if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, a) {
      a.style.isTight() && this.classes.push("mtight");
      var s = a.getColor();
      s && (this.style.color = s);
    }
  }, Kr = function(e) {
    var a = document.createElement(e);
    a.className = Fe(this.classes);
    for (var r of Object.keys(this.style)) a.style[r] = this.style[r];
    for (var s of Object.keys(this.attributes)) a.setAttribute(s, this.attributes[s]);
    for (var n = 0; n < this.children.length; n++) a.appendChild(this.children[n].toNode());
    return a;
  }, sS = /[\s"'>/=\x00-\x1f]/, Jr = function(e) {
    var a = "<" + e;
    this.classes.length && (a += ' class="' + oe(Fe(this.classes)) + '"');
    var r = "";
    for (var s of Object.keys(this.style)) r += Ct(s) + ":" + this.style[s] + ";";
    r && (a += ' style="' + oe(r) + '"');
    for (var n of Object.keys(this.attributes)) {
      if (sS.test(n)) throw new q("Invalid attribute name '" + n + "'");
      a += " " + n + '="' + oe(this.attributes[n]) + '"';
    }
    a += ">";
    for (var l = 0; l < this.children.length; l++) a += this.children[l].toMarkup();
    return a += "</" + e + ">", a;
  };
  class sa {
    constructor(e, a, r, s) {
      Zr.call(this, e, r, s), this.children = a || [];
    }
    setAttribute(e, a) {
      this.attributes[e] = a;
    }
    hasClass(e) {
      return this.classes.includes(e);
    }
    toNode() {
      return Kr.call(this, "span");
    }
    toMarkup() {
      return Jr.call(this, "span");
    }
  }
  class Oa {
    constructor(e, a, r, s) {
      Zr.call(this, a, s), this.children = r || [], this.setAttribute("href", e);
    }
    setAttribute(e, a) {
      this.attributes[e] = a;
    }
    hasClass(e) {
      return this.classes.includes(e);
    }
    toNode() {
      return Kr.call(this, "a");
    }
    toMarkup() {
      return Jr.call(this, "a");
    }
  }
  class oS {
    constructor(e, a, r) {
      this.alt = a, this.src = e, this.classes = [
        "mord"
      ], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r;
    }
    hasClass(e) {
      return this.classes.includes(e);
    }
    toNode() {
      var e = document.createElement("img");
      e.src = this.src, e.alt = this.alt, e.className = "mord";
      for (var a of Object.keys(this.style)) e.style[a] = this.style[a];
      return e;
    }
    toMarkup() {
      var e = '<img src="' + oe(this.src) + '"' + (' alt="' + oe(this.alt) + '"'), a = "";
      for (var r of Object.keys(this.style)) a += Ct(r) + ":" + this.style[r] + ";";
      return a && (e += ' style="' + oe(a) + '"'), e += "'/>", e;
    }
  }
  var nS = {
    \u00EE: "\u0131\u0302",
    \u00EF: "\u0131\u0308",
    \u00ED: "\u0131\u0301",
    \u00EC: "\u0131\u0300"
  };
  class de {
    constructor(e, a, r, s, n, l, u, d) {
      this.text = e, this.height = a || 0, this.depth = r || 0, this.italic = s || 0, this.skew = n || 0, this.width = l || 0, this.classes = u || [], this.style = d || {}, this.maxFontSize = 0;
      var m = Vx(this.text.charCodeAt(0));
      m && this.classes.push(m + "_fallback"), /[îïíì]/.test(this.text) && (this.text = nS[this.text]);
    }
    hasClass(e) {
      return this.classes.includes(e);
    }
    toNode() {
      var e = document.createTextNode(this.text), a = null;
      this.italic > 0 && (a = document.createElement("span"), a.style.marginRight = D(this.italic)), this.classes.length > 0 && (a = a || document.createElement("span"), a.className = Fe(this.classes));
      for (var r of Object.keys(this.style)) a = a || document.createElement("span"), a.style[r] = this.style[r];
      return a ? (a.appendChild(e), a) : e;
    }
    toMarkup() {
      var e = false, a = "<span";
      this.classes.length && (e = true, a += ' class="', a += oe(Fe(this.classes)), a += '"');
      var r = "";
      this.italic > 0 && (r += "margin-right:" + this.italic + "em;");
      for (var s of Object.keys(this.style)) r += Ct(s) + ":" + this.style[s] + ";";
      r && (e = true, a += ' style="' + oe(r) + '"');
      var n = oe(this.text);
      return e ? (a += ">", a += n, a += "</span>", a) : n;
    }
  }
  class Te {
    constructor(e, a) {
      this.children = e || [], this.attributes = a || {};
    }
    toNode() {
      var e = "http://www.w3.org/2000/svg", a = document.createElementNS(e, "svg");
      for (var r of Object.keys(this.attributes)) a.setAttribute(r, this.attributes[r]);
      for (var s = 0; s < this.children.length; s++) a.appendChild(this.children[s].toNode());
      return a;
    }
    toMarkup() {
      var e = '<svg xmlns="http://www.w3.org/2000/svg"';
      for (var a of Object.keys(this.attributes)) e += " " + a + '="' + oe(this.attributes[a]) + '"';
      e += ">";
      for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
      return e += "</svg>", e;
    }
  }
  class Oe {
    constructor(e, a) {
      this.pathName = e, this.alternate = a;
    }
    toNode() {
      var e = "http://www.w3.org/2000/svg", a = document.createElementNS(e, "path");
      return this.alternate ? a.setAttribute("d", this.alternate) : a.setAttribute("d", ur[this.pathName]), a;
    }
    toMarkup() {
      return this.alternate ? '<path d="' + oe(this.alternate) + '"/>' : '<path d="' + oe(ur[this.pathName]) + '"/>';
    }
  }
  class bt {
    constructor(e) {
      this.attributes = e || {};
    }
    toNode() {
      var e = "http://www.w3.org/2000/svg", a = document.createElementNS(e, "line");
      for (var r of Object.keys(this.attributes)) a.setAttribute(r, this.attributes[r]);
      return a;
    }
    toMarkup() {
      var e = "<line";
      for (var a of Object.keys(this.attributes)) e += " " + a + '="' + oe(this.attributes[a]) + '"';
      return e += "/>", e;
    }
  }
  function cS(t) {
    if (t instanceof de) return t;
    throw new Error("Expected symbolNode but got " + String(t) + ".");
  }
  function iS(t) {
    if (t instanceof sa) return t;
    throw new Error("Expected span<HtmlDomNode> but got " + String(t) + ".");
  }
  var lS = (t) => t instanceof sa || t instanceof Oa || t instanceof ra, be = {
    "AMS-Regular": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      65: [
        0,
        0.68889,
        0,
        0,
        0.72222
      ],
      66: [
        0,
        0.68889,
        0,
        0,
        0.66667
      ],
      67: [
        0,
        0.68889,
        0,
        0,
        0.72222
      ],
      68: [
        0,
        0.68889,
        0,
        0,
        0.72222
      ],
      69: [
        0,
        0.68889,
        0,
        0,
        0.66667
      ],
      70: [
        0,
        0.68889,
        0,
        0,
        0.61111
      ],
      71: [
        0,
        0.68889,
        0,
        0,
        0.77778
      ],
      72: [
        0,
        0.68889,
        0,
        0,
        0.77778
      ],
      73: [
        0,
        0.68889,
        0,
        0,
        0.38889
      ],
      74: [
        0.16667,
        0.68889,
        0,
        0,
        0.5
      ],
      75: [
        0,
        0.68889,
        0,
        0,
        0.77778
      ],
      76: [
        0,
        0.68889,
        0,
        0,
        0.66667
      ],
      77: [
        0,
        0.68889,
        0,
        0,
        0.94445
      ],
      78: [
        0,
        0.68889,
        0,
        0,
        0.72222
      ],
      79: [
        0.16667,
        0.68889,
        0,
        0,
        0.77778
      ],
      80: [
        0,
        0.68889,
        0,
        0,
        0.61111
      ],
      81: [
        0.16667,
        0.68889,
        0,
        0,
        0.77778
      ],
      82: [
        0,
        0.68889,
        0,
        0,
        0.72222
      ],
      83: [
        0,
        0.68889,
        0,
        0,
        0.55556
      ],
      84: [
        0,
        0.68889,
        0,
        0,
        0.66667
      ],
      85: [
        0,
        0.68889,
        0,
        0,
        0.72222
      ],
      86: [
        0,
        0.68889,
        0,
        0,
        0.72222
      ],
      87: [
        0,
        0.68889,
        0,
        0,
        1
      ],
      88: [
        0,
        0.68889,
        0,
        0,
        0.72222
      ],
      89: [
        0,
        0.68889,
        0,
        0,
        0.72222
      ],
      90: [
        0,
        0.68889,
        0,
        0,
        0.66667
      ],
      107: [
        0,
        0.68889,
        0,
        0,
        0.55556
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      165: [
        0,
        0.675,
        0.025,
        0,
        0.75
      ],
      174: [
        0.15559,
        0.69224,
        0,
        0,
        0.94666
      ],
      240: [
        0,
        0.68889,
        0,
        0,
        0.55556
      ],
      295: [
        0,
        0.68889,
        0,
        0,
        0.54028
      ],
      710: [
        0,
        0.825,
        0,
        0,
        2.33334
      ],
      732: [
        0,
        0.9,
        0,
        0,
        2.33334
      ],
      770: [
        0,
        0.825,
        0,
        0,
        2.33334
      ],
      771: [
        0,
        0.9,
        0,
        0,
        2.33334
      ],
      989: [
        0.08167,
        0.58167,
        0,
        0,
        0.77778
      ],
      1008: [
        0,
        0.43056,
        0.04028,
        0,
        0.66667
      ],
      8245: [
        0,
        0.54986,
        0,
        0,
        0.275
      ],
      8463: [
        0,
        0.68889,
        0,
        0,
        0.54028
      ],
      8487: [
        0,
        0.68889,
        0,
        0,
        0.72222
      ],
      8498: [
        0,
        0.68889,
        0,
        0,
        0.55556
      ],
      8502: [
        0,
        0.68889,
        0,
        0,
        0.66667
      ],
      8503: [
        0,
        0.68889,
        0,
        0,
        0.44445
      ],
      8504: [
        0,
        0.68889,
        0,
        0,
        0.66667
      ],
      8513: [
        0,
        0.68889,
        0,
        0,
        0.63889
      ],
      8592: [
        -0.03598,
        0.46402,
        0,
        0,
        0.5
      ],
      8594: [
        -0.03598,
        0.46402,
        0,
        0,
        0.5
      ],
      8602: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8603: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8606: [
        0.01354,
        0.52239,
        0,
        0,
        1
      ],
      8608: [
        0.01354,
        0.52239,
        0,
        0,
        1
      ],
      8610: [
        0.01354,
        0.52239,
        0,
        0,
        1.11111
      ],
      8611: [
        0.01354,
        0.52239,
        0,
        0,
        1.11111
      ],
      8619: [
        0,
        0.54986,
        0,
        0,
        1
      ],
      8620: [
        0,
        0.54986,
        0,
        0,
        1
      ],
      8621: [
        -0.13313,
        0.37788,
        0,
        0,
        1.38889
      ],
      8622: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8624: [
        0,
        0.69224,
        0,
        0,
        0.5
      ],
      8625: [
        0,
        0.69224,
        0,
        0,
        0.5
      ],
      8630: [
        0,
        0.43056,
        0,
        0,
        1
      ],
      8631: [
        0,
        0.43056,
        0,
        0,
        1
      ],
      8634: [
        0.08198,
        0.58198,
        0,
        0,
        0.77778
      ],
      8635: [
        0.08198,
        0.58198,
        0,
        0,
        0.77778
      ],
      8638: [
        0.19444,
        0.69224,
        0,
        0,
        0.41667
      ],
      8639: [
        0.19444,
        0.69224,
        0,
        0,
        0.41667
      ],
      8642: [
        0.19444,
        0.69224,
        0,
        0,
        0.41667
      ],
      8643: [
        0.19444,
        0.69224,
        0,
        0,
        0.41667
      ],
      8644: [
        0.1808,
        0.675,
        0,
        0,
        1
      ],
      8646: [
        0.1808,
        0.675,
        0,
        0,
        1
      ],
      8647: [
        0.1808,
        0.675,
        0,
        0,
        1
      ],
      8648: [
        0.19444,
        0.69224,
        0,
        0,
        0.83334
      ],
      8649: [
        0.1808,
        0.675,
        0,
        0,
        1
      ],
      8650: [
        0.19444,
        0.69224,
        0,
        0,
        0.83334
      ],
      8651: [
        0.01354,
        0.52239,
        0,
        0,
        1
      ],
      8652: [
        0.01354,
        0.52239,
        0,
        0,
        1
      ],
      8653: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8654: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8655: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8666: [
        0.13667,
        0.63667,
        0,
        0,
        1
      ],
      8667: [
        0.13667,
        0.63667,
        0,
        0,
        1
      ],
      8669: [
        -0.13313,
        0.37788,
        0,
        0,
        1
      ],
      8672: [
        -0.064,
        0.437,
        0,
        0,
        1.334
      ],
      8674: [
        -0.064,
        0.437,
        0,
        0,
        1.334
      ],
      8705: [
        0,
        0.825,
        0,
        0,
        0.5
      ],
      8708: [
        0,
        0.68889,
        0,
        0,
        0.55556
      ],
      8709: [
        0.08167,
        0.58167,
        0,
        0,
        0.77778
      ],
      8717: [
        0,
        0.43056,
        0,
        0,
        0.42917
      ],
      8722: [
        -0.03598,
        0.46402,
        0,
        0,
        0.5
      ],
      8724: [
        0.08198,
        0.69224,
        0,
        0,
        0.77778
      ],
      8726: [
        0.08167,
        0.58167,
        0,
        0,
        0.77778
      ],
      8733: [
        0,
        0.69224,
        0,
        0,
        0.77778
      ],
      8736: [
        0,
        0.69224,
        0,
        0,
        0.72222
      ],
      8737: [
        0,
        0.69224,
        0,
        0,
        0.72222
      ],
      8738: [
        0.03517,
        0.52239,
        0,
        0,
        0.72222
      ],
      8739: [
        0.08167,
        0.58167,
        0,
        0,
        0.22222
      ],
      8740: [
        0.25142,
        0.74111,
        0,
        0,
        0.27778
      ],
      8741: [
        0.08167,
        0.58167,
        0,
        0,
        0.38889
      ],
      8742: [
        0.25142,
        0.74111,
        0,
        0,
        0.5
      ],
      8756: [
        0,
        0.69224,
        0,
        0,
        0.66667
      ],
      8757: [
        0,
        0.69224,
        0,
        0,
        0.66667
      ],
      8764: [
        -0.13313,
        0.36687,
        0,
        0,
        0.77778
      ],
      8765: [
        -0.13313,
        0.37788,
        0,
        0,
        0.77778
      ],
      8769: [
        -0.13313,
        0.36687,
        0,
        0,
        0.77778
      ],
      8770: [
        -0.03625,
        0.46375,
        0,
        0,
        0.77778
      ],
      8774: [
        0.30274,
        0.79383,
        0,
        0,
        0.77778
      ],
      8776: [
        -0.01688,
        0.48312,
        0,
        0,
        0.77778
      ],
      8778: [
        0.08167,
        0.58167,
        0,
        0,
        0.77778
      ],
      8782: [
        0.06062,
        0.54986,
        0,
        0,
        0.77778
      ],
      8783: [
        0.06062,
        0.54986,
        0,
        0,
        0.77778
      ],
      8785: [
        0.08198,
        0.58198,
        0,
        0,
        0.77778
      ],
      8786: [
        0.08198,
        0.58198,
        0,
        0,
        0.77778
      ],
      8787: [
        0.08198,
        0.58198,
        0,
        0,
        0.77778
      ],
      8790: [
        0,
        0.69224,
        0,
        0,
        0.77778
      ],
      8791: [
        0.22958,
        0.72958,
        0,
        0,
        0.77778
      ],
      8796: [
        0.08198,
        0.91667,
        0,
        0,
        0.77778
      ],
      8806: [
        0.25583,
        0.75583,
        0,
        0,
        0.77778
      ],
      8807: [
        0.25583,
        0.75583,
        0,
        0,
        0.77778
      ],
      8808: [
        0.25142,
        0.75726,
        0,
        0,
        0.77778
      ],
      8809: [
        0.25142,
        0.75726,
        0,
        0,
        0.77778
      ],
      8812: [
        0.25583,
        0.75583,
        0,
        0,
        0.5
      ],
      8814: [
        0.20576,
        0.70576,
        0,
        0,
        0.77778
      ],
      8815: [
        0.20576,
        0.70576,
        0,
        0,
        0.77778
      ],
      8816: [
        0.30274,
        0.79383,
        0,
        0,
        0.77778
      ],
      8817: [
        0.30274,
        0.79383,
        0,
        0,
        0.77778
      ],
      8818: [
        0.22958,
        0.72958,
        0,
        0,
        0.77778
      ],
      8819: [
        0.22958,
        0.72958,
        0,
        0,
        0.77778
      ],
      8822: [
        0.1808,
        0.675,
        0,
        0,
        0.77778
      ],
      8823: [
        0.1808,
        0.675,
        0,
        0,
        0.77778
      ],
      8828: [
        0.13667,
        0.63667,
        0,
        0,
        0.77778
      ],
      8829: [
        0.13667,
        0.63667,
        0,
        0,
        0.77778
      ],
      8830: [
        0.22958,
        0.72958,
        0,
        0,
        0.77778
      ],
      8831: [
        0.22958,
        0.72958,
        0,
        0,
        0.77778
      ],
      8832: [
        0.20576,
        0.70576,
        0,
        0,
        0.77778
      ],
      8833: [
        0.20576,
        0.70576,
        0,
        0,
        0.77778
      ],
      8840: [
        0.30274,
        0.79383,
        0,
        0,
        0.77778
      ],
      8841: [
        0.30274,
        0.79383,
        0,
        0,
        0.77778
      ],
      8842: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      8843: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      8847: [
        0.03517,
        0.54986,
        0,
        0,
        0.77778
      ],
      8848: [
        0.03517,
        0.54986,
        0,
        0,
        0.77778
      ],
      8858: [
        0.08198,
        0.58198,
        0,
        0,
        0.77778
      ],
      8859: [
        0.08198,
        0.58198,
        0,
        0,
        0.77778
      ],
      8861: [
        0.08198,
        0.58198,
        0,
        0,
        0.77778
      ],
      8862: [
        0,
        0.675,
        0,
        0,
        0.77778
      ],
      8863: [
        0,
        0.675,
        0,
        0,
        0.77778
      ],
      8864: [
        0,
        0.675,
        0,
        0,
        0.77778
      ],
      8865: [
        0,
        0.675,
        0,
        0,
        0.77778
      ],
      8872: [
        0,
        0.69224,
        0,
        0,
        0.61111
      ],
      8873: [
        0,
        0.69224,
        0,
        0,
        0.72222
      ],
      8874: [
        0,
        0.69224,
        0,
        0,
        0.88889
      ],
      8876: [
        0,
        0.68889,
        0,
        0,
        0.61111
      ],
      8877: [
        0,
        0.68889,
        0,
        0,
        0.61111
      ],
      8878: [
        0,
        0.68889,
        0,
        0,
        0.72222
      ],
      8879: [
        0,
        0.68889,
        0,
        0,
        0.72222
      ],
      8882: [
        0.03517,
        0.54986,
        0,
        0,
        0.77778
      ],
      8883: [
        0.03517,
        0.54986,
        0,
        0,
        0.77778
      ],
      8884: [
        0.13667,
        0.63667,
        0,
        0,
        0.77778
      ],
      8885: [
        0.13667,
        0.63667,
        0,
        0,
        0.77778
      ],
      8888: [
        0,
        0.54986,
        0,
        0,
        1.11111
      ],
      8890: [
        0.19444,
        0.43056,
        0,
        0,
        0.55556
      ],
      8891: [
        0.19444,
        0.69224,
        0,
        0,
        0.61111
      ],
      8892: [
        0.19444,
        0.69224,
        0,
        0,
        0.61111
      ],
      8901: [
        0,
        0.54986,
        0,
        0,
        0.27778
      ],
      8903: [
        0.08167,
        0.58167,
        0,
        0,
        0.77778
      ],
      8905: [
        0.08167,
        0.58167,
        0,
        0,
        0.77778
      ],
      8906: [
        0.08167,
        0.58167,
        0,
        0,
        0.77778
      ],
      8907: [
        0,
        0.69224,
        0,
        0,
        0.77778
      ],
      8908: [
        0,
        0.69224,
        0,
        0,
        0.77778
      ],
      8909: [
        -0.03598,
        0.46402,
        0,
        0,
        0.77778
      ],
      8910: [
        0,
        0.54986,
        0,
        0,
        0.76042
      ],
      8911: [
        0,
        0.54986,
        0,
        0,
        0.76042
      ],
      8912: [
        0.03517,
        0.54986,
        0,
        0,
        0.77778
      ],
      8913: [
        0.03517,
        0.54986,
        0,
        0,
        0.77778
      ],
      8914: [
        0,
        0.54986,
        0,
        0,
        0.66667
      ],
      8915: [
        0,
        0.54986,
        0,
        0,
        0.66667
      ],
      8916: [
        0,
        0.69224,
        0,
        0,
        0.66667
      ],
      8918: [
        0.0391,
        0.5391,
        0,
        0,
        0.77778
      ],
      8919: [
        0.0391,
        0.5391,
        0,
        0,
        0.77778
      ],
      8920: [
        0.03517,
        0.54986,
        0,
        0,
        1.33334
      ],
      8921: [
        0.03517,
        0.54986,
        0,
        0,
        1.33334
      ],
      8922: [
        0.38569,
        0.88569,
        0,
        0,
        0.77778
      ],
      8923: [
        0.38569,
        0.88569,
        0,
        0,
        0.77778
      ],
      8926: [
        0.13667,
        0.63667,
        0,
        0,
        0.77778
      ],
      8927: [
        0.13667,
        0.63667,
        0,
        0,
        0.77778
      ],
      8928: [
        0.30274,
        0.79383,
        0,
        0,
        0.77778
      ],
      8929: [
        0.30274,
        0.79383,
        0,
        0,
        0.77778
      ],
      8934: [
        0.23222,
        0.74111,
        0,
        0,
        0.77778
      ],
      8935: [
        0.23222,
        0.74111,
        0,
        0,
        0.77778
      ],
      8936: [
        0.23222,
        0.74111,
        0,
        0,
        0.77778
      ],
      8937: [
        0.23222,
        0.74111,
        0,
        0,
        0.77778
      ],
      8938: [
        0.20576,
        0.70576,
        0,
        0,
        0.77778
      ],
      8939: [
        0.20576,
        0.70576,
        0,
        0,
        0.77778
      ],
      8940: [
        0.30274,
        0.79383,
        0,
        0,
        0.77778
      ],
      8941: [
        0.30274,
        0.79383,
        0,
        0,
        0.77778
      ],
      8994: [
        0.19444,
        0.69224,
        0,
        0,
        0.77778
      ],
      8995: [
        0.19444,
        0.69224,
        0,
        0,
        0.77778
      ],
      9416: [
        0.15559,
        0.69224,
        0,
        0,
        0.90222
      ],
      9484: [
        0,
        0.69224,
        0,
        0,
        0.5
      ],
      9488: [
        0,
        0.69224,
        0,
        0,
        0.5
      ],
      9492: [
        0,
        0.37788,
        0,
        0,
        0.5
      ],
      9496: [
        0,
        0.37788,
        0,
        0,
        0.5
      ],
      9585: [
        0.19444,
        0.68889,
        0,
        0,
        0.88889
      ],
      9586: [
        0.19444,
        0.74111,
        0,
        0,
        0.88889
      ],
      9632: [
        0,
        0.675,
        0,
        0,
        0.77778
      ],
      9633: [
        0,
        0.675,
        0,
        0,
        0.77778
      ],
      9650: [
        0,
        0.54986,
        0,
        0,
        0.72222
      ],
      9651: [
        0,
        0.54986,
        0,
        0,
        0.72222
      ],
      9654: [
        0.03517,
        0.54986,
        0,
        0,
        0.77778
      ],
      9660: [
        0,
        0.54986,
        0,
        0,
        0.72222
      ],
      9661: [
        0,
        0.54986,
        0,
        0,
        0.72222
      ],
      9664: [
        0.03517,
        0.54986,
        0,
        0,
        0.77778
      ],
      9674: [
        0.11111,
        0.69224,
        0,
        0,
        0.66667
      ],
      9733: [
        0.19444,
        0.69224,
        0,
        0,
        0.94445
      ],
      10003: [
        0,
        0.69224,
        0,
        0,
        0.83334
      ],
      10016: [
        0,
        0.69224,
        0,
        0,
        0.83334
      ],
      10731: [
        0.11111,
        0.69224,
        0,
        0,
        0.66667
      ],
      10846: [
        0.19444,
        0.75583,
        0,
        0,
        0.61111
      ],
      10877: [
        0.13667,
        0.63667,
        0,
        0,
        0.77778
      ],
      10878: [
        0.13667,
        0.63667,
        0,
        0,
        0.77778
      ],
      10885: [
        0.25583,
        0.75583,
        0,
        0,
        0.77778
      ],
      10886: [
        0.25583,
        0.75583,
        0,
        0,
        0.77778
      ],
      10887: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      10888: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      10889: [
        0.26167,
        0.75726,
        0,
        0,
        0.77778
      ],
      10890: [
        0.26167,
        0.75726,
        0,
        0,
        0.77778
      ],
      10891: [
        0.48256,
        0.98256,
        0,
        0,
        0.77778
      ],
      10892: [
        0.48256,
        0.98256,
        0,
        0,
        0.77778
      ],
      10901: [
        0.13667,
        0.63667,
        0,
        0,
        0.77778
      ],
      10902: [
        0.13667,
        0.63667,
        0,
        0,
        0.77778
      ],
      10933: [
        0.25142,
        0.75726,
        0,
        0,
        0.77778
      ],
      10934: [
        0.25142,
        0.75726,
        0,
        0,
        0.77778
      ],
      10935: [
        0.26167,
        0.75726,
        0,
        0,
        0.77778
      ],
      10936: [
        0.26167,
        0.75726,
        0,
        0,
        0.77778
      ],
      10937: [
        0.26167,
        0.75726,
        0,
        0,
        0.77778
      ],
      10938: [
        0.26167,
        0.75726,
        0,
        0,
        0.77778
      ],
      10949: [
        0.25583,
        0.75583,
        0,
        0,
        0.77778
      ],
      10950: [
        0.25583,
        0.75583,
        0,
        0,
        0.77778
      ],
      10955: [
        0.28481,
        0.79383,
        0,
        0,
        0.77778
      ],
      10956: [
        0.28481,
        0.79383,
        0,
        0,
        0.77778
      ],
      57350: [
        0.08167,
        0.58167,
        0,
        0,
        0.22222
      ],
      57351: [
        0.08167,
        0.58167,
        0,
        0,
        0.38889
      ],
      57352: [
        0.08167,
        0.58167,
        0,
        0,
        0.77778
      ],
      57353: [
        0,
        0.43056,
        0.04028,
        0,
        0.66667
      ],
      57356: [
        0.25142,
        0.75726,
        0,
        0,
        0.77778
      ],
      57357: [
        0.25142,
        0.75726,
        0,
        0,
        0.77778
      ],
      57358: [
        0.41951,
        0.91951,
        0,
        0,
        0.77778
      ],
      57359: [
        0.30274,
        0.79383,
        0,
        0,
        0.77778
      ],
      57360: [
        0.30274,
        0.79383,
        0,
        0,
        0.77778
      ],
      57361: [
        0.41951,
        0.91951,
        0,
        0,
        0.77778
      ],
      57366: [
        0.25142,
        0.75726,
        0,
        0,
        0.77778
      ],
      57367: [
        0.25142,
        0.75726,
        0,
        0,
        0.77778
      ],
      57368: [
        0.25142,
        0.75726,
        0,
        0,
        0.77778
      ],
      57369: [
        0.25142,
        0.75726,
        0,
        0,
        0.77778
      ],
      57370: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      57371: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ]
    },
    "Caligraphic-Regular": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      65: [
        0,
        0.68333,
        0,
        0.19445,
        0.79847
      ],
      66: [
        0,
        0.68333,
        0.03041,
        0.13889,
        0.65681
      ],
      67: [
        0,
        0.68333,
        0.05834,
        0.13889,
        0.52653
      ],
      68: [
        0,
        0.68333,
        0.02778,
        0.08334,
        0.77139
      ],
      69: [
        0,
        0.68333,
        0.08944,
        0.11111,
        0.52778
      ],
      70: [
        0,
        0.68333,
        0.09931,
        0.11111,
        0.71875
      ],
      71: [
        0.09722,
        0.68333,
        0.0593,
        0.11111,
        0.59487
      ],
      72: [
        0,
        0.68333,
        965e-5,
        0.11111,
        0.84452
      ],
      73: [
        0,
        0.68333,
        0.07382,
        0,
        0.54452
      ],
      74: [
        0.09722,
        0.68333,
        0.18472,
        0.16667,
        0.67778
      ],
      75: [
        0,
        0.68333,
        0.01445,
        0.05556,
        0.76195
      ],
      76: [
        0,
        0.68333,
        0,
        0.13889,
        0.68972
      ],
      77: [
        0,
        0.68333,
        0,
        0.13889,
        1.2009
      ],
      78: [
        0,
        0.68333,
        0.14736,
        0.08334,
        0.82049
      ],
      79: [
        0,
        0.68333,
        0.02778,
        0.11111,
        0.79611
      ],
      80: [
        0,
        0.68333,
        0.08222,
        0.08334,
        0.69556
      ],
      81: [
        0.09722,
        0.68333,
        0,
        0.11111,
        0.81667
      ],
      82: [
        0,
        0.68333,
        0,
        0.08334,
        0.8475
      ],
      83: [
        0,
        0.68333,
        0.075,
        0.13889,
        0.60556
      ],
      84: [
        0,
        0.68333,
        0.25417,
        0,
        0.54464
      ],
      85: [
        0,
        0.68333,
        0.09931,
        0.08334,
        0.62583
      ],
      86: [
        0,
        0.68333,
        0.08222,
        0,
        0.61278
      ],
      87: [
        0,
        0.68333,
        0.08222,
        0.08334,
        0.98778
      ],
      88: [
        0,
        0.68333,
        0.14643,
        0.13889,
        0.7133
      ],
      89: [
        0.09722,
        0.68333,
        0.08222,
        0.08334,
        0.66834
      ],
      90: [
        0,
        0.68333,
        0.07944,
        0.13889,
        0.72473
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ]
    },
    "Fraktur-Regular": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      33: [
        0,
        0.69141,
        0,
        0,
        0.29574
      ],
      34: [
        0,
        0.69141,
        0,
        0,
        0.21471
      ],
      38: [
        0,
        0.69141,
        0,
        0,
        0.73786
      ],
      39: [
        0,
        0.69141,
        0,
        0,
        0.21201
      ],
      40: [
        0.24982,
        0.74947,
        0,
        0,
        0.38865
      ],
      41: [
        0.24982,
        0.74947,
        0,
        0,
        0.38865
      ],
      42: [
        0,
        0.62119,
        0,
        0,
        0.27764
      ],
      43: [
        0.08319,
        0.58283,
        0,
        0,
        0.75623
      ],
      44: [
        0,
        0.10803,
        0,
        0,
        0.27764
      ],
      45: [
        0.08319,
        0.58283,
        0,
        0,
        0.75623
      ],
      46: [
        0,
        0.10803,
        0,
        0,
        0.27764
      ],
      47: [
        0.24982,
        0.74947,
        0,
        0,
        0.50181
      ],
      48: [
        0,
        0.47534,
        0,
        0,
        0.50181
      ],
      49: [
        0,
        0.47534,
        0,
        0,
        0.50181
      ],
      50: [
        0,
        0.47534,
        0,
        0,
        0.50181
      ],
      51: [
        0.18906,
        0.47534,
        0,
        0,
        0.50181
      ],
      52: [
        0.18906,
        0.47534,
        0,
        0,
        0.50181
      ],
      53: [
        0.18906,
        0.47534,
        0,
        0,
        0.50181
      ],
      54: [
        0,
        0.69141,
        0,
        0,
        0.50181
      ],
      55: [
        0.18906,
        0.47534,
        0,
        0,
        0.50181
      ],
      56: [
        0,
        0.69141,
        0,
        0,
        0.50181
      ],
      57: [
        0.18906,
        0.47534,
        0,
        0,
        0.50181
      ],
      58: [
        0,
        0.47534,
        0,
        0,
        0.21606
      ],
      59: [
        0.12604,
        0.47534,
        0,
        0,
        0.21606
      ],
      61: [
        -0.13099,
        0.36866,
        0,
        0,
        0.75623
      ],
      63: [
        0,
        0.69141,
        0,
        0,
        0.36245
      ],
      65: [
        0,
        0.69141,
        0,
        0,
        0.7176
      ],
      66: [
        0,
        0.69141,
        0,
        0,
        0.88397
      ],
      67: [
        0,
        0.69141,
        0,
        0,
        0.61254
      ],
      68: [
        0,
        0.69141,
        0,
        0,
        0.83158
      ],
      69: [
        0,
        0.69141,
        0,
        0,
        0.66278
      ],
      70: [
        0.12604,
        0.69141,
        0,
        0,
        0.61119
      ],
      71: [
        0,
        0.69141,
        0,
        0,
        0.78539
      ],
      72: [
        0.06302,
        0.69141,
        0,
        0,
        0.7203
      ],
      73: [
        0,
        0.69141,
        0,
        0,
        0.55448
      ],
      74: [
        0.12604,
        0.69141,
        0,
        0,
        0.55231
      ],
      75: [
        0,
        0.69141,
        0,
        0,
        0.66845
      ],
      76: [
        0,
        0.69141,
        0,
        0,
        0.66602
      ],
      77: [
        0,
        0.69141,
        0,
        0,
        1.04953
      ],
      78: [
        0,
        0.69141,
        0,
        0,
        0.83212
      ],
      79: [
        0,
        0.69141,
        0,
        0,
        0.82699
      ],
      80: [
        0.18906,
        0.69141,
        0,
        0,
        0.82753
      ],
      81: [
        0.03781,
        0.69141,
        0,
        0,
        0.82699
      ],
      82: [
        0,
        0.69141,
        0,
        0,
        0.82807
      ],
      83: [
        0,
        0.69141,
        0,
        0,
        0.82861
      ],
      84: [
        0,
        0.69141,
        0,
        0,
        0.66899
      ],
      85: [
        0,
        0.69141,
        0,
        0,
        0.64576
      ],
      86: [
        0,
        0.69141,
        0,
        0,
        0.83131
      ],
      87: [
        0,
        0.69141,
        0,
        0,
        1.04602
      ],
      88: [
        0,
        0.69141,
        0,
        0,
        0.71922
      ],
      89: [
        0.18906,
        0.69141,
        0,
        0,
        0.83293
      ],
      90: [
        0.12604,
        0.69141,
        0,
        0,
        0.60201
      ],
      91: [
        0.24982,
        0.74947,
        0,
        0,
        0.27764
      ],
      93: [
        0.24982,
        0.74947,
        0,
        0,
        0.27764
      ],
      94: [
        0,
        0.69141,
        0,
        0,
        0.49965
      ],
      97: [
        0,
        0.47534,
        0,
        0,
        0.50046
      ],
      98: [
        0,
        0.69141,
        0,
        0,
        0.51315
      ],
      99: [
        0,
        0.47534,
        0,
        0,
        0.38946
      ],
      100: [
        0,
        0.62119,
        0,
        0,
        0.49857
      ],
      101: [
        0,
        0.47534,
        0,
        0,
        0.40053
      ],
      102: [
        0.18906,
        0.69141,
        0,
        0,
        0.32626
      ],
      103: [
        0.18906,
        0.47534,
        0,
        0,
        0.5037
      ],
      104: [
        0.18906,
        0.69141,
        0,
        0,
        0.52126
      ],
      105: [
        0,
        0.69141,
        0,
        0,
        0.27899
      ],
      106: [
        0,
        0.69141,
        0,
        0,
        0.28088
      ],
      107: [
        0,
        0.69141,
        0,
        0,
        0.38946
      ],
      108: [
        0,
        0.69141,
        0,
        0,
        0.27953
      ],
      109: [
        0,
        0.47534,
        0,
        0,
        0.76676
      ],
      110: [
        0,
        0.47534,
        0,
        0,
        0.52666
      ],
      111: [
        0,
        0.47534,
        0,
        0,
        0.48885
      ],
      112: [
        0.18906,
        0.52396,
        0,
        0,
        0.50046
      ],
      113: [
        0.18906,
        0.47534,
        0,
        0,
        0.48912
      ],
      114: [
        0,
        0.47534,
        0,
        0,
        0.38919
      ],
      115: [
        0,
        0.47534,
        0,
        0,
        0.44266
      ],
      116: [
        0,
        0.62119,
        0,
        0,
        0.33301
      ],
      117: [
        0,
        0.47534,
        0,
        0,
        0.5172
      ],
      118: [
        0,
        0.52396,
        0,
        0,
        0.5118
      ],
      119: [
        0,
        0.52396,
        0,
        0,
        0.77351
      ],
      120: [
        0.18906,
        0.47534,
        0,
        0,
        0.38865
      ],
      121: [
        0.18906,
        0.47534,
        0,
        0,
        0.49884
      ],
      122: [
        0.18906,
        0.47534,
        0,
        0,
        0.39054
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      8216: [
        0,
        0.69141,
        0,
        0,
        0.21471
      ],
      8217: [
        0,
        0.69141,
        0,
        0,
        0.21471
      ],
      58112: [
        0,
        0.62119,
        0,
        0,
        0.49749
      ],
      58113: [
        0,
        0.62119,
        0,
        0,
        0.4983
      ],
      58114: [
        0.18906,
        0.69141,
        0,
        0,
        0.33328
      ],
      58115: [
        0.18906,
        0.69141,
        0,
        0,
        0.32923
      ],
      58116: [
        0.18906,
        0.47534,
        0,
        0,
        0.50343
      ],
      58117: [
        0,
        0.69141,
        0,
        0,
        0.33301
      ],
      58118: [
        0,
        0.62119,
        0,
        0,
        0.33409
      ],
      58119: [
        0,
        0.47534,
        0,
        0,
        0.50073
      ]
    },
    "Main-Bold": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      33: [
        0,
        0.69444,
        0,
        0,
        0.35
      ],
      34: [
        0,
        0.69444,
        0,
        0,
        0.60278
      ],
      35: [
        0.19444,
        0.69444,
        0,
        0,
        0.95833
      ],
      36: [
        0.05556,
        0.75,
        0,
        0,
        0.575
      ],
      37: [
        0.05556,
        0.75,
        0,
        0,
        0.95833
      ],
      38: [
        0,
        0.69444,
        0,
        0,
        0.89444
      ],
      39: [
        0,
        0.69444,
        0,
        0,
        0.31944
      ],
      40: [
        0.25,
        0.75,
        0,
        0,
        0.44722
      ],
      41: [
        0.25,
        0.75,
        0,
        0,
        0.44722
      ],
      42: [
        0,
        0.75,
        0,
        0,
        0.575
      ],
      43: [
        0.13333,
        0.63333,
        0,
        0,
        0.89444
      ],
      44: [
        0.19444,
        0.15556,
        0,
        0,
        0.31944
      ],
      45: [
        0,
        0.44444,
        0,
        0,
        0.38333
      ],
      46: [
        0,
        0.15556,
        0,
        0,
        0.31944
      ],
      47: [
        0.25,
        0.75,
        0,
        0,
        0.575
      ],
      48: [
        0,
        0.64444,
        0,
        0,
        0.575
      ],
      49: [
        0,
        0.64444,
        0,
        0,
        0.575
      ],
      50: [
        0,
        0.64444,
        0,
        0,
        0.575
      ],
      51: [
        0,
        0.64444,
        0,
        0,
        0.575
      ],
      52: [
        0,
        0.64444,
        0,
        0,
        0.575
      ],
      53: [
        0,
        0.64444,
        0,
        0,
        0.575
      ],
      54: [
        0,
        0.64444,
        0,
        0,
        0.575
      ],
      55: [
        0,
        0.64444,
        0,
        0,
        0.575
      ],
      56: [
        0,
        0.64444,
        0,
        0,
        0.575
      ],
      57: [
        0,
        0.64444,
        0,
        0,
        0.575
      ],
      58: [
        0,
        0.44444,
        0,
        0,
        0.31944
      ],
      59: [
        0.19444,
        0.44444,
        0,
        0,
        0.31944
      ],
      60: [
        0.08556,
        0.58556,
        0,
        0,
        0.89444
      ],
      61: [
        -0.10889,
        0.39111,
        0,
        0,
        0.89444
      ],
      62: [
        0.08556,
        0.58556,
        0,
        0,
        0.89444
      ],
      63: [
        0,
        0.69444,
        0,
        0,
        0.54305
      ],
      64: [
        0,
        0.69444,
        0,
        0,
        0.89444
      ],
      65: [
        0,
        0.68611,
        0,
        0,
        0.86944
      ],
      66: [
        0,
        0.68611,
        0,
        0,
        0.81805
      ],
      67: [
        0,
        0.68611,
        0,
        0,
        0.83055
      ],
      68: [
        0,
        0.68611,
        0,
        0,
        0.88194
      ],
      69: [
        0,
        0.68611,
        0,
        0,
        0.75555
      ],
      70: [
        0,
        0.68611,
        0,
        0,
        0.72361
      ],
      71: [
        0,
        0.68611,
        0,
        0,
        0.90416
      ],
      72: [
        0,
        0.68611,
        0,
        0,
        0.9
      ],
      73: [
        0,
        0.68611,
        0,
        0,
        0.43611
      ],
      74: [
        0,
        0.68611,
        0,
        0,
        0.59444
      ],
      75: [
        0,
        0.68611,
        0,
        0,
        0.90138
      ],
      76: [
        0,
        0.68611,
        0,
        0,
        0.69166
      ],
      77: [
        0,
        0.68611,
        0,
        0,
        1.09166
      ],
      78: [
        0,
        0.68611,
        0,
        0,
        0.9
      ],
      79: [
        0,
        0.68611,
        0,
        0,
        0.86388
      ],
      80: [
        0,
        0.68611,
        0,
        0,
        0.78611
      ],
      81: [
        0.19444,
        0.68611,
        0,
        0,
        0.86388
      ],
      82: [
        0,
        0.68611,
        0,
        0,
        0.8625
      ],
      83: [
        0,
        0.68611,
        0,
        0,
        0.63889
      ],
      84: [
        0,
        0.68611,
        0,
        0,
        0.8
      ],
      85: [
        0,
        0.68611,
        0,
        0,
        0.88472
      ],
      86: [
        0,
        0.68611,
        0.01597,
        0,
        0.86944
      ],
      87: [
        0,
        0.68611,
        0.01597,
        0,
        1.18888
      ],
      88: [
        0,
        0.68611,
        0,
        0,
        0.86944
      ],
      89: [
        0,
        0.68611,
        0.02875,
        0,
        0.86944
      ],
      90: [
        0,
        0.68611,
        0,
        0,
        0.70277
      ],
      91: [
        0.25,
        0.75,
        0,
        0,
        0.31944
      ],
      92: [
        0.25,
        0.75,
        0,
        0,
        0.575
      ],
      93: [
        0.25,
        0.75,
        0,
        0,
        0.31944
      ],
      94: [
        0,
        0.69444,
        0,
        0,
        0.575
      ],
      95: [
        0.31,
        0.13444,
        0.03194,
        0,
        0.575
      ],
      97: [
        0,
        0.44444,
        0,
        0,
        0.55902
      ],
      98: [
        0,
        0.69444,
        0,
        0,
        0.63889
      ],
      99: [
        0,
        0.44444,
        0,
        0,
        0.51111
      ],
      100: [
        0,
        0.69444,
        0,
        0,
        0.63889
      ],
      101: [
        0,
        0.44444,
        0,
        0,
        0.52708
      ],
      102: [
        0,
        0.69444,
        0.10903,
        0,
        0.35139
      ],
      103: [
        0.19444,
        0.44444,
        0.01597,
        0,
        0.575
      ],
      104: [
        0,
        0.69444,
        0,
        0,
        0.63889
      ],
      105: [
        0,
        0.69444,
        0,
        0,
        0.31944
      ],
      106: [
        0.19444,
        0.69444,
        0,
        0,
        0.35139
      ],
      107: [
        0,
        0.69444,
        0,
        0,
        0.60694
      ],
      108: [
        0,
        0.69444,
        0,
        0,
        0.31944
      ],
      109: [
        0,
        0.44444,
        0,
        0,
        0.95833
      ],
      110: [
        0,
        0.44444,
        0,
        0,
        0.63889
      ],
      111: [
        0,
        0.44444,
        0,
        0,
        0.575
      ],
      112: [
        0.19444,
        0.44444,
        0,
        0,
        0.63889
      ],
      113: [
        0.19444,
        0.44444,
        0,
        0,
        0.60694
      ],
      114: [
        0,
        0.44444,
        0,
        0,
        0.47361
      ],
      115: [
        0,
        0.44444,
        0,
        0,
        0.45361
      ],
      116: [
        0,
        0.63492,
        0,
        0,
        0.44722
      ],
      117: [
        0,
        0.44444,
        0,
        0,
        0.63889
      ],
      118: [
        0,
        0.44444,
        0.01597,
        0,
        0.60694
      ],
      119: [
        0,
        0.44444,
        0.01597,
        0,
        0.83055
      ],
      120: [
        0,
        0.44444,
        0,
        0,
        0.60694
      ],
      121: [
        0.19444,
        0.44444,
        0.01597,
        0,
        0.60694
      ],
      122: [
        0,
        0.44444,
        0,
        0,
        0.51111
      ],
      123: [
        0.25,
        0.75,
        0,
        0,
        0.575
      ],
      124: [
        0.25,
        0.75,
        0,
        0,
        0.31944
      ],
      125: [
        0.25,
        0.75,
        0,
        0,
        0.575
      ],
      126: [
        0.35,
        0.34444,
        0,
        0,
        0.575
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      163: [
        0,
        0.69444,
        0,
        0,
        0.86853
      ],
      168: [
        0,
        0.69444,
        0,
        0,
        0.575
      ],
      172: [
        0,
        0.44444,
        0,
        0,
        0.76666
      ],
      176: [
        0,
        0.69444,
        0,
        0,
        0.86944
      ],
      177: [
        0.13333,
        0.63333,
        0,
        0,
        0.89444
      ],
      184: [
        0.17014,
        0,
        0,
        0,
        0.51111
      ],
      198: [
        0,
        0.68611,
        0,
        0,
        1.04166
      ],
      215: [
        0.13333,
        0.63333,
        0,
        0,
        0.89444
      ],
      216: [
        0.04861,
        0.73472,
        0,
        0,
        0.89444
      ],
      223: [
        0,
        0.69444,
        0,
        0,
        0.59722
      ],
      230: [
        0,
        0.44444,
        0,
        0,
        0.83055
      ],
      247: [
        0.13333,
        0.63333,
        0,
        0,
        0.89444
      ],
      248: [
        0.09722,
        0.54167,
        0,
        0,
        0.575
      ],
      305: [
        0,
        0.44444,
        0,
        0,
        0.31944
      ],
      338: [
        0,
        0.68611,
        0,
        0,
        1.16944
      ],
      339: [
        0,
        0.44444,
        0,
        0,
        0.89444
      ],
      567: [
        0.19444,
        0.44444,
        0,
        0,
        0.35139
      ],
      710: [
        0,
        0.69444,
        0,
        0,
        0.575
      ],
      711: [
        0,
        0.63194,
        0,
        0,
        0.575
      ],
      713: [
        0,
        0.59611,
        0,
        0,
        0.575
      ],
      714: [
        0,
        0.69444,
        0,
        0,
        0.575
      ],
      715: [
        0,
        0.69444,
        0,
        0,
        0.575
      ],
      728: [
        0,
        0.69444,
        0,
        0,
        0.575
      ],
      729: [
        0,
        0.69444,
        0,
        0,
        0.31944
      ],
      730: [
        0,
        0.69444,
        0,
        0,
        0.86944
      ],
      732: [
        0,
        0.69444,
        0,
        0,
        0.575
      ],
      733: [
        0,
        0.69444,
        0,
        0,
        0.575
      ],
      915: [
        0,
        0.68611,
        0,
        0,
        0.69166
      ],
      916: [
        0,
        0.68611,
        0,
        0,
        0.95833
      ],
      920: [
        0,
        0.68611,
        0,
        0,
        0.89444
      ],
      923: [
        0,
        0.68611,
        0,
        0,
        0.80555
      ],
      926: [
        0,
        0.68611,
        0,
        0,
        0.76666
      ],
      928: [
        0,
        0.68611,
        0,
        0,
        0.9
      ],
      931: [
        0,
        0.68611,
        0,
        0,
        0.83055
      ],
      933: [
        0,
        0.68611,
        0,
        0,
        0.89444
      ],
      934: [
        0,
        0.68611,
        0,
        0,
        0.83055
      ],
      936: [
        0,
        0.68611,
        0,
        0,
        0.89444
      ],
      937: [
        0,
        0.68611,
        0,
        0,
        0.83055
      ],
      8211: [
        0,
        0.44444,
        0.03194,
        0,
        0.575
      ],
      8212: [
        0,
        0.44444,
        0.03194,
        0,
        1.14999
      ],
      8216: [
        0,
        0.69444,
        0,
        0,
        0.31944
      ],
      8217: [
        0,
        0.69444,
        0,
        0,
        0.31944
      ],
      8220: [
        0,
        0.69444,
        0,
        0,
        0.60278
      ],
      8221: [
        0,
        0.69444,
        0,
        0,
        0.60278
      ],
      8224: [
        0.19444,
        0.69444,
        0,
        0,
        0.51111
      ],
      8225: [
        0.19444,
        0.69444,
        0,
        0,
        0.51111
      ],
      8242: [
        0,
        0.55556,
        0,
        0,
        0.34444
      ],
      8407: [
        0,
        0.72444,
        0.15486,
        0,
        0.575
      ],
      8463: [
        0,
        0.69444,
        0,
        0,
        0.66759
      ],
      8465: [
        0,
        0.69444,
        0,
        0,
        0.83055
      ],
      8467: [
        0,
        0.69444,
        0,
        0,
        0.47361
      ],
      8472: [
        0.19444,
        0.44444,
        0,
        0,
        0.74027
      ],
      8476: [
        0,
        0.69444,
        0,
        0,
        0.83055
      ],
      8501: [
        0,
        0.69444,
        0,
        0,
        0.70277
      ],
      8592: [
        -0.10889,
        0.39111,
        0,
        0,
        1.14999
      ],
      8593: [
        0.19444,
        0.69444,
        0,
        0,
        0.575
      ],
      8594: [
        -0.10889,
        0.39111,
        0,
        0,
        1.14999
      ],
      8595: [
        0.19444,
        0.69444,
        0,
        0,
        0.575
      ],
      8596: [
        -0.10889,
        0.39111,
        0,
        0,
        1.14999
      ],
      8597: [
        0.25,
        0.75,
        0,
        0,
        0.575
      ],
      8598: [
        0.19444,
        0.69444,
        0,
        0,
        1.14999
      ],
      8599: [
        0.19444,
        0.69444,
        0,
        0,
        1.14999
      ],
      8600: [
        0.19444,
        0.69444,
        0,
        0,
        1.14999
      ],
      8601: [
        0.19444,
        0.69444,
        0,
        0,
        1.14999
      ],
      8636: [
        -0.10889,
        0.39111,
        0,
        0,
        1.14999
      ],
      8637: [
        -0.10889,
        0.39111,
        0,
        0,
        1.14999
      ],
      8640: [
        -0.10889,
        0.39111,
        0,
        0,
        1.14999
      ],
      8641: [
        -0.10889,
        0.39111,
        0,
        0,
        1.14999
      ],
      8656: [
        -0.10889,
        0.39111,
        0,
        0,
        1.14999
      ],
      8657: [
        0.19444,
        0.69444,
        0,
        0,
        0.70277
      ],
      8658: [
        -0.10889,
        0.39111,
        0,
        0,
        1.14999
      ],
      8659: [
        0.19444,
        0.69444,
        0,
        0,
        0.70277
      ],
      8660: [
        -0.10889,
        0.39111,
        0,
        0,
        1.14999
      ],
      8661: [
        0.25,
        0.75,
        0,
        0,
        0.70277
      ],
      8704: [
        0,
        0.69444,
        0,
        0,
        0.63889
      ],
      8706: [
        0,
        0.69444,
        0.06389,
        0,
        0.62847
      ],
      8707: [
        0,
        0.69444,
        0,
        0,
        0.63889
      ],
      8709: [
        0.05556,
        0.75,
        0,
        0,
        0.575
      ],
      8711: [
        0,
        0.68611,
        0,
        0,
        0.95833
      ],
      8712: [
        0.08556,
        0.58556,
        0,
        0,
        0.76666
      ],
      8715: [
        0.08556,
        0.58556,
        0,
        0,
        0.76666
      ],
      8722: [
        0.13333,
        0.63333,
        0,
        0,
        0.89444
      ],
      8723: [
        0.13333,
        0.63333,
        0,
        0,
        0.89444
      ],
      8725: [
        0.25,
        0.75,
        0,
        0,
        0.575
      ],
      8726: [
        0.25,
        0.75,
        0,
        0,
        0.575
      ],
      8727: [
        -0.02778,
        0.47222,
        0,
        0,
        0.575
      ],
      8728: [
        -0.02639,
        0.47361,
        0,
        0,
        0.575
      ],
      8729: [
        -0.02639,
        0.47361,
        0,
        0,
        0.575
      ],
      8730: [
        0.18,
        0.82,
        0,
        0,
        0.95833
      ],
      8733: [
        0,
        0.44444,
        0,
        0,
        0.89444
      ],
      8734: [
        0,
        0.44444,
        0,
        0,
        1.14999
      ],
      8736: [
        0,
        0.69224,
        0,
        0,
        0.72222
      ],
      8739: [
        0.25,
        0.75,
        0,
        0,
        0.31944
      ],
      8741: [
        0.25,
        0.75,
        0,
        0,
        0.575
      ],
      8743: [
        0,
        0.55556,
        0,
        0,
        0.76666
      ],
      8744: [
        0,
        0.55556,
        0,
        0,
        0.76666
      ],
      8745: [
        0,
        0.55556,
        0,
        0,
        0.76666
      ],
      8746: [
        0,
        0.55556,
        0,
        0,
        0.76666
      ],
      8747: [
        0.19444,
        0.69444,
        0.12778,
        0,
        0.56875
      ],
      8764: [
        -0.10889,
        0.39111,
        0,
        0,
        0.89444
      ],
      8768: [
        0.19444,
        0.69444,
        0,
        0,
        0.31944
      ],
      8771: [
        222e-5,
        0.50222,
        0,
        0,
        0.89444
      ],
      8773: [
        0.027,
        0.638,
        0,
        0,
        0.894
      ],
      8776: [
        0.02444,
        0.52444,
        0,
        0,
        0.89444
      ],
      8781: [
        222e-5,
        0.50222,
        0,
        0,
        0.89444
      ],
      8801: [
        222e-5,
        0.50222,
        0,
        0,
        0.89444
      ],
      8804: [
        0.19667,
        0.69667,
        0,
        0,
        0.89444
      ],
      8805: [
        0.19667,
        0.69667,
        0,
        0,
        0.89444
      ],
      8810: [
        0.08556,
        0.58556,
        0,
        0,
        1.14999
      ],
      8811: [
        0.08556,
        0.58556,
        0,
        0,
        1.14999
      ],
      8826: [
        0.08556,
        0.58556,
        0,
        0,
        0.89444
      ],
      8827: [
        0.08556,
        0.58556,
        0,
        0,
        0.89444
      ],
      8834: [
        0.08556,
        0.58556,
        0,
        0,
        0.89444
      ],
      8835: [
        0.08556,
        0.58556,
        0,
        0,
        0.89444
      ],
      8838: [
        0.19667,
        0.69667,
        0,
        0,
        0.89444
      ],
      8839: [
        0.19667,
        0.69667,
        0,
        0,
        0.89444
      ],
      8846: [
        0,
        0.55556,
        0,
        0,
        0.76666
      ],
      8849: [
        0.19667,
        0.69667,
        0,
        0,
        0.89444
      ],
      8850: [
        0.19667,
        0.69667,
        0,
        0,
        0.89444
      ],
      8851: [
        0,
        0.55556,
        0,
        0,
        0.76666
      ],
      8852: [
        0,
        0.55556,
        0,
        0,
        0.76666
      ],
      8853: [
        0.13333,
        0.63333,
        0,
        0,
        0.89444
      ],
      8854: [
        0.13333,
        0.63333,
        0,
        0,
        0.89444
      ],
      8855: [
        0.13333,
        0.63333,
        0,
        0,
        0.89444
      ],
      8856: [
        0.13333,
        0.63333,
        0,
        0,
        0.89444
      ],
      8857: [
        0.13333,
        0.63333,
        0,
        0,
        0.89444
      ],
      8866: [
        0,
        0.69444,
        0,
        0,
        0.70277
      ],
      8867: [
        0,
        0.69444,
        0,
        0,
        0.70277
      ],
      8868: [
        0,
        0.69444,
        0,
        0,
        0.89444
      ],
      8869: [
        0,
        0.69444,
        0,
        0,
        0.89444
      ],
      8900: [
        -0.02639,
        0.47361,
        0,
        0,
        0.575
      ],
      8901: [
        -0.02639,
        0.47361,
        0,
        0,
        0.31944
      ],
      8902: [
        -0.02778,
        0.47222,
        0,
        0,
        0.575
      ],
      8968: [
        0.25,
        0.75,
        0,
        0,
        0.51111
      ],
      8969: [
        0.25,
        0.75,
        0,
        0,
        0.51111
      ],
      8970: [
        0.25,
        0.75,
        0,
        0,
        0.51111
      ],
      8971: [
        0.25,
        0.75,
        0,
        0,
        0.51111
      ],
      8994: [
        -0.13889,
        0.36111,
        0,
        0,
        1.14999
      ],
      8995: [
        -0.13889,
        0.36111,
        0,
        0,
        1.14999
      ],
      9651: [
        0.19444,
        0.69444,
        0,
        0,
        1.02222
      ],
      9657: [
        -0.02778,
        0.47222,
        0,
        0,
        0.575
      ],
      9661: [
        0.19444,
        0.69444,
        0,
        0,
        1.02222
      ],
      9667: [
        -0.02778,
        0.47222,
        0,
        0,
        0.575
      ],
      9711: [
        0.19444,
        0.69444,
        0,
        0,
        1.14999
      ],
      9824: [
        0.12963,
        0.69444,
        0,
        0,
        0.89444
      ],
      9825: [
        0.12963,
        0.69444,
        0,
        0,
        0.89444
      ],
      9826: [
        0.12963,
        0.69444,
        0,
        0,
        0.89444
      ],
      9827: [
        0.12963,
        0.69444,
        0,
        0,
        0.89444
      ],
      9837: [
        0,
        0.75,
        0,
        0,
        0.44722
      ],
      9838: [
        0.19444,
        0.69444,
        0,
        0,
        0.44722
      ],
      9839: [
        0.19444,
        0.69444,
        0,
        0,
        0.44722
      ],
      10216: [
        0.25,
        0.75,
        0,
        0,
        0.44722
      ],
      10217: [
        0.25,
        0.75,
        0,
        0,
        0.44722
      ],
      10815: [
        0,
        0.68611,
        0,
        0,
        0.9
      ],
      10927: [
        0.19667,
        0.69667,
        0,
        0,
        0.89444
      ],
      10928: [
        0.19667,
        0.69667,
        0,
        0,
        0.89444
      ],
      57376: [
        0.19444,
        0.69444,
        0,
        0,
        0
      ]
    },
    "Main-BoldItalic": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      33: [
        0,
        0.69444,
        0.11417,
        0,
        0.38611
      ],
      34: [
        0,
        0.69444,
        0.07939,
        0,
        0.62055
      ],
      35: [
        0.19444,
        0.69444,
        0.06833,
        0,
        0.94444
      ],
      37: [
        0.05556,
        0.75,
        0.12861,
        0,
        0.94444
      ],
      38: [
        0,
        0.69444,
        0.08528,
        0,
        0.88555
      ],
      39: [
        0,
        0.69444,
        0.12945,
        0,
        0.35555
      ],
      40: [
        0.25,
        0.75,
        0.15806,
        0,
        0.47333
      ],
      41: [
        0.25,
        0.75,
        0.03306,
        0,
        0.47333
      ],
      42: [
        0,
        0.75,
        0.14333,
        0,
        0.59111
      ],
      43: [
        0.10333,
        0.60333,
        0.03306,
        0,
        0.88555
      ],
      44: [
        0.19444,
        0.14722,
        0,
        0,
        0.35555
      ],
      45: [
        0,
        0.44444,
        0.02611,
        0,
        0.41444
      ],
      46: [
        0,
        0.14722,
        0,
        0,
        0.35555
      ],
      47: [
        0.25,
        0.75,
        0.15806,
        0,
        0.59111
      ],
      48: [
        0,
        0.64444,
        0.13167,
        0,
        0.59111
      ],
      49: [
        0,
        0.64444,
        0.13167,
        0,
        0.59111
      ],
      50: [
        0,
        0.64444,
        0.13167,
        0,
        0.59111
      ],
      51: [
        0,
        0.64444,
        0.13167,
        0,
        0.59111
      ],
      52: [
        0.19444,
        0.64444,
        0.13167,
        0,
        0.59111
      ],
      53: [
        0,
        0.64444,
        0.13167,
        0,
        0.59111
      ],
      54: [
        0,
        0.64444,
        0.13167,
        0,
        0.59111
      ],
      55: [
        0.19444,
        0.64444,
        0.13167,
        0,
        0.59111
      ],
      56: [
        0,
        0.64444,
        0.13167,
        0,
        0.59111
      ],
      57: [
        0,
        0.64444,
        0.13167,
        0,
        0.59111
      ],
      58: [
        0,
        0.44444,
        0.06695,
        0,
        0.35555
      ],
      59: [
        0.19444,
        0.44444,
        0.06695,
        0,
        0.35555
      ],
      61: [
        -0.10889,
        0.39111,
        0.06833,
        0,
        0.88555
      ],
      63: [
        0,
        0.69444,
        0.11472,
        0,
        0.59111
      ],
      64: [
        0,
        0.69444,
        0.09208,
        0,
        0.88555
      ],
      65: [
        0,
        0.68611,
        0,
        0,
        0.86555
      ],
      66: [
        0,
        0.68611,
        0.0992,
        0,
        0.81666
      ],
      67: [
        0,
        0.68611,
        0.14208,
        0,
        0.82666
      ],
      68: [
        0,
        0.68611,
        0.09062,
        0,
        0.87555
      ],
      69: [
        0,
        0.68611,
        0.11431,
        0,
        0.75666
      ],
      70: [
        0,
        0.68611,
        0.12903,
        0,
        0.72722
      ],
      71: [
        0,
        0.68611,
        0.07347,
        0,
        0.89527
      ],
      72: [
        0,
        0.68611,
        0.17208,
        0,
        0.8961
      ],
      73: [
        0,
        0.68611,
        0.15681,
        0,
        0.47166
      ],
      74: [
        0,
        0.68611,
        0.145,
        0,
        0.61055
      ],
      75: [
        0,
        0.68611,
        0.14208,
        0,
        0.89499
      ],
      76: [
        0,
        0.68611,
        0,
        0,
        0.69777
      ],
      77: [
        0,
        0.68611,
        0.17208,
        0,
        1.07277
      ],
      78: [
        0,
        0.68611,
        0.17208,
        0,
        0.8961
      ],
      79: [
        0,
        0.68611,
        0.09062,
        0,
        0.85499
      ],
      80: [
        0,
        0.68611,
        0.0992,
        0,
        0.78721
      ],
      81: [
        0.19444,
        0.68611,
        0.09062,
        0,
        0.85499
      ],
      82: [
        0,
        0.68611,
        0.02559,
        0,
        0.85944
      ],
      83: [
        0,
        0.68611,
        0.11264,
        0,
        0.64999
      ],
      84: [
        0,
        0.68611,
        0.12903,
        0,
        0.7961
      ],
      85: [
        0,
        0.68611,
        0.17208,
        0,
        0.88083
      ],
      86: [
        0,
        0.68611,
        0.18625,
        0,
        0.86555
      ],
      87: [
        0,
        0.68611,
        0.18625,
        0,
        1.15999
      ],
      88: [
        0,
        0.68611,
        0.15681,
        0,
        0.86555
      ],
      89: [
        0,
        0.68611,
        0.19803,
        0,
        0.86555
      ],
      90: [
        0,
        0.68611,
        0.14208,
        0,
        0.70888
      ],
      91: [
        0.25,
        0.75,
        0.1875,
        0,
        0.35611
      ],
      93: [
        0.25,
        0.75,
        0.09972,
        0,
        0.35611
      ],
      94: [
        0,
        0.69444,
        0.06709,
        0,
        0.59111
      ],
      95: [
        0.31,
        0.13444,
        0.09811,
        0,
        0.59111
      ],
      97: [
        0,
        0.44444,
        0.09426,
        0,
        0.59111
      ],
      98: [
        0,
        0.69444,
        0.07861,
        0,
        0.53222
      ],
      99: [
        0,
        0.44444,
        0.05222,
        0,
        0.53222
      ],
      100: [
        0,
        0.69444,
        0.10861,
        0,
        0.59111
      ],
      101: [
        0,
        0.44444,
        0.085,
        0,
        0.53222
      ],
      102: [
        0.19444,
        0.69444,
        0.21778,
        0,
        0.4
      ],
      103: [
        0.19444,
        0.44444,
        0.105,
        0,
        0.53222
      ],
      104: [
        0,
        0.69444,
        0.09426,
        0,
        0.59111
      ],
      105: [
        0,
        0.69326,
        0.11387,
        0,
        0.35555
      ],
      106: [
        0.19444,
        0.69326,
        0.1672,
        0,
        0.35555
      ],
      107: [
        0,
        0.69444,
        0.11111,
        0,
        0.53222
      ],
      108: [
        0,
        0.69444,
        0.10861,
        0,
        0.29666
      ],
      109: [
        0,
        0.44444,
        0.09426,
        0,
        0.94444
      ],
      110: [
        0,
        0.44444,
        0.09426,
        0,
        0.64999
      ],
      111: [
        0,
        0.44444,
        0.07861,
        0,
        0.59111
      ],
      112: [
        0.19444,
        0.44444,
        0.07861,
        0,
        0.59111
      ],
      113: [
        0.19444,
        0.44444,
        0.105,
        0,
        0.53222
      ],
      114: [
        0,
        0.44444,
        0.11111,
        0,
        0.50167
      ],
      115: [
        0,
        0.44444,
        0.08167,
        0,
        0.48694
      ],
      116: [
        0,
        0.63492,
        0.09639,
        0,
        0.385
      ],
      117: [
        0,
        0.44444,
        0.09426,
        0,
        0.62055
      ],
      118: [
        0,
        0.44444,
        0.11111,
        0,
        0.53222
      ],
      119: [
        0,
        0.44444,
        0.11111,
        0,
        0.76777
      ],
      120: [
        0,
        0.44444,
        0.12583,
        0,
        0.56055
      ],
      121: [
        0.19444,
        0.44444,
        0.105,
        0,
        0.56166
      ],
      122: [
        0,
        0.44444,
        0.13889,
        0,
        0.49055
      ],
      126: [
        0.35,
        0.34444,
        0.11472,
        0,
        0.59111
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      168: [
        0,
        0.69444,
        0.11473,
        0,
        0.59111
      ],
      176: [
        0,
        0.69444,
        0,
        0,
        0.94888
      ],
      184: [
        0.17014,
        0,
        0,
        0,
        0.53222
      ],
      198: [
        0,
        0.68611,
        0.11431,
        0,
        1.02277
      ],
      216: [
        0.04861,
        0.73472,
        0.09062,
        0,
        0.88555
      ],
      223: [
        0.19444,
        0.69444,
        0.09736,
        0,
        0.665
      ],
      230: [
        0,
        0.44444,
        0.085,
        0,
        0.82666
      ],
      248: [
        0.09722,
        0.54167,
        0.09458,
        0,
        0.59111
      ],
      305: [
        0,
        0.44444,
        0.09426,
        0,
        0.35555
      ],
      338: [
        0,
        0.68611,
        0.11431,
        0,
        1.14054
      ],
      339: [
        0,
        0.44444,
        0.085,
        0,
        0.82666
      ],
      567: [
        0.19444,
        0.44444,
        0.04611,
        0,
        0.385
      ],
      710: [
        0,
        0.69444,
        0.06709,
        0,
        0.59111
      ],
      711: [
        0,
        0.63194,
        0.08271,
        0,
        0.59111
      ],
      713: [
        0,
        0.59444,
        0.10444,
        0,
        0.59111
      ],
      714: [
        0,
        0.69444,
        0.08528,
        0,
        0.59111
      ],
      715: [
        0,
        0.69444,
        0,
        0,
        0.59111
      ],
      728: [
        0,
        0.69444,
        0.10333,
        0,
        0.59111
      ],
      729: [
        0,
        0.69444,
        0.12945,
        0,
        0.35555
      ],
      730: [
        0,
        0.69444,
        0,
        0,
        0.94888
      ],
      732: [
        0,
        0.69444,
        0.11472,
        0,
        0.59111
      ],
      733: [
        0,
        0.69444,
        0.11472,
        0,
        0.59111
      ],
      915: [
        0,
        0.68611,
        0.12903,
        0,
        0.69777
      ],
      916: [
        0,
        0.68611,
        0,
        0,
        0.94444
      ],
      920: [
        0,
        0.68611,
        0.09062,
        0,
        0.88555
      ],
      923: [
        0,
        0.68611,
        0,
        0,
        0.80666
      ],
      926: [
        0,
        0.68611,
        0.15092,
        0,
        0.76777
      ],
      928: [
        0,
        0.68611,
        0.17208,
        0,
        0.8961
      ],
      931: [
        0,
        0.68611,
        0.11431,
        0,
        0.82666
      ],
      933: [
        0,
        0.68611,
        0.10778,
        0,
        0.88555
      ],
      934: [
        0,
        0.68611,
        0.05632,
        0,
        0.82666
      ],
      936: [
        0,
        0.68611,
        0.10778,
        0,
        0.88555
      ],
      937: [
        0,
        0.68611,
        0.0992,
        0,
        0.82666
      ],
      8211: [
        0,
        0.44444,
        0.09811,
        0,
        0.59111
      ],
      8212: [
        0,
        0.44444,
        0.09811,
        0,
        1.18221
      ],
      8216: [
        0,
        0.69444,
        0.12945,
        0,
        0.35555
      ],
      8217: [
        0,
        0.69444,
        0.12945,
        0,
        0.35555
      ],
      8220: [
        0,
        0.69444,
        0.16772,
        0,
        0.62055
      ],
      8221: [
        0,
        0.69444,
        0.07939,
        0,
        0.62055
      ]
    },
    "Main-Italic": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      33: [
        0,
        0.69444,
        0.12417,
        0,
        0.30667
      ],
      34: [
        0,
        0.69444,
        0.06961,
        0,
        0.51444
      ],
      35: [
        0.19444,
        0.69444,
        0.06616,
        0,
        0.81777
      ],
      37: [
        0.05556,
        0.75,
        0.13639,
        0,
        0.81777
      ],
      38: [
        0,
        0.69444,
        0.09694,
        0,
        0.76666
      ],
      39: [
        0,
        0.69444,
        0.12417,
        0,
        0.30667
      ],
      40: [
        0.25,
        0.75,
        0.16194,
        0,
        0.40889
      ],
      41: [
        0.25,
        0.75,
        0.03694,
        0,
        0.40889
      ],
      42: [
        0,
        0.75,
        0.14917,
        0,
        0.51111
      ],
      43: [
        0.05667,
        0.56167,
        0.03694,
        0,
        0.76666
      ],
      44: [
        0.19444,
        0.10556,
        0,
        0,
        0.30667
      ],
      45: [
        0,
        0.43056,
        0.02826,
        0,
        0.35778
      ],
      46: [
        0,
        0.10556,
        0,
        0,
        0.30667
      ],
      47: [
        0.25,
        0.75,
        0.16194,
        0,
        0.51111
      ],
      48: [
        0,
        0.64444,
        0.13556,
        0,
        0.51111
      ],
      49: [
        0,
        0.64444,
        0.13556,
        0,
        0.51111
      ],
      50: [
        0,
        0.64444,
        0.13556,
        0,
        0.51111
      ],
      51: [
        0,
        0.64444,
        0.13556,
        0,
        0.51111
      ],
      52: [
        0.19444,
        0.64444,
        0.13556,
        0,
        0.51111
      ],
      53: [
        0,
        0.64444,
        0.13556,
        0,
        0.51111
      ],
      54: [
        0,
        0.64444,
        0.13556,
        0,
        0.51111
      ],
      55: [
        0.19444,
        0.64444,
        0.13556,
        0,
        0.51111
      ],
      56: [
        0,
        0.64444,
        0.13556,
        0,
        0.51111
      ],
      57: [
        0,
        0.64444,
        0.13556,
        0,
        0.51111
      ],
      58: [
        0,
        0.43056,
        0.0582,
        0,
        0.30667
      ],
      59: [
        0.19444,
        0.43056,
        0.0582,
        0,
        0.30667
      ],
      61: [
        -0.13313,
        0.36687,
        0.06616,
        0,
        0.76666
      ],
      63: [
        0,
        0.69444,
        0.1225,
        0,
        0.51111
      ],
      64: [
        0,
        0.69444,
        0.09597,
        0,
        0.76666
      ],
      65: [
        0,
        0.68333,
        0,
        0,
        0.74333
      ],
      66: [
        0,
        0.68333,
        0.10257,
        0,
        0.70389
      ],
      67: [
        0,
        0.68333,
        0.14528,
        0,
        0.71555
      ],
      68: [
        0,
        0.68333,
        0.09403,
        0,
        0.755
      ],
      69: [
        0,
        0.68333,
        0.12028,
        0,
        0.67833
      ],
      70: [
        0,
        0.68333,
        0.13305,
        0,
        0.65277
      ],
      71: [
        0,
        0.68333,
        0.08722,
        0,
        0.77361
      ],
      72: [
        0,
        0.68333,
        0.16389,
        0,
        0.74333
      ],
      73: [
        0,
        0.68333,
        0.15806,
        0,
        0.38555
      ],
      74: [
        0,
        0.68333,
        0.14028,
        0,
        0.525
      ],
      75: [
        0,
        0.68333,
        0.14528,
        0,
        0.76888
      ],
      76: [
        0,
        0.68333,
        0,
        0,
        0.62722
      ],
      77: [
        0,
        0.68333,
        0.16389,
        0,
        0.89666
      ],
      78: [
        0,
        0.68333,
        0.16389,
        0,
        0.74333
      ],
      79: [
        0,
        0.68333,
        0.09403,
        0,
        0.76666
      ],
      80: [
        0,
        0.68333,
        0.10257,
        0,
        0.67833
      ],
      81: [
        0.19444,
        0.68333,
        0.09403,
        0,
        0.76666
      ],
      82: [
        0,
        0.68333,
        0.03868,
        0,
        0.72944
      ],
      83: [
        0,
        0.68333,
        0.11972,
        0,
        0.56222
      ],
      84: [
        0,
        0.68333,
        0.13305,
        0,
        0.71555
      ],
      85: [
        0,
        0.68333,
        0.16389,
        0,
        0.74333
      ],
      86: [
        0,
        0.68333,
        0.18361,
        0,
        0.74333
      ],
      87: [
        0,
        0.68333,
        0.18361,
        0,
        0.99888
      ],
      88: [
        0,
        0.68333,
        0.15806,
        0,
        0.74333
      ],
      89: [
        0,
        0.68333,
        0.19383,
        0,
        0.74333
      ],
      90: [
        0,
        0.68333,
        0.14528,
        0,
        0.61333
      ],
      91: [
        0.25,
        0.75,
        0.1875,
        0,
        0.30667
      ],
      93: [
        0.25,
        0.75,
        0.10528,
        0,
        0.30667
      ],
      94: [
        0,
        0.69444,
        0.06646,
        0,
        0.51111
      ],
      95: [
        0.31,
        0.12056,
        0.09208,
        0,
        0.51111
      ],
      97: [
        0,
        0.43056,
        0.07671,
        0,
        0.51111
      ],
      98: [
        0,
        0.69444,
        0.06312,
        0,
        0.46
      ],
      99: [
        0,
        0.43056,
        0.05653,
        0,
        0.46
      ],
      100: [
        0,
        0.69444,
        0.10333,
        0,
        0.51111
      ],
      101: [
        0,
        0.43056,
        0.07514,
        0,
        0.46
      ],
      102: [
        0.19444,
        0.69444,
        0.21194,
        0,
        0.30667
      ],
      103: [
        0.19444,
        0.43056,
        0.08847,
        0,
        0.46
      ],
      104: [
        0,
        0.69444,
        0.07671,
        0,
        0.51111
      ],
      105: [
        0,
        0.65536,
        0.1019,
        0,
        0.30667
      ],
      106: [
        0.19444,
        0.65536,
        0.14467,
        0,
        0.30667
      ],
      107: [
        0,
        0.69444,
        0.10764,
        0,
        0.46
      ],
      108: [
        0,
        0.69444,
        0.10333,
        0,
        0.25555
      ],
      109: [
        0,
        0.43056,
        0.07671,
        0,
        0.81777
      ],
      110: [
        0,
        0.43056,
        0.07671,
        0,
        0.56222
      ],
      111: [
        0,
        0.43056,
        0.06312,
        0,
        0.51111
      ],
      112: [
        0.19444,
        0.43056,
        0.06312,
        0,
        0.51111
      ],
      113: [
        0.19444,
        0.43056,
        0.08847,
        0,
        0.46
      ],
      114: [
        0,
        0.43056,
        0.10764,
        0,
        0.42166
      ],
      115: [
        0,
        0.43056,
        0.08208,
        0,
        0.40889
      ],
      116: [
        0,
        0.61508,
        0.09486,
        0,
        0.33222
      ],
      117: [
        0,
        0.43056,
        0.07671,
        0,
        0.53666
      ],
      118: [
        0,
        0.43056,
        0.10764,
        0,
        0.46
      ],
      119: [
        0,
        0.43056,
        0.10764,
        0,
        0.66444
      ],
      120: [
        0,
        0.43056,
        0.12042,
        0,
        0.46389
      ],
      121: [
        0.19444,
        0.43056,
        0.08847,
        0,
        0.48555
      ],
      122: [
        0,
        0.43056,
        0.12292,
        0,
        0.40889
      ],
      126: [
        0.35,
        0.31786,
        0.11585,
        0,
        0.51111
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      168: [
        0,
        0.66786,
        0.10474,
        0,
        0.51111
      ],
      176: [
        0,
        0.69444,
        0,
        0,
        0.83129
      ],
      184: [
        0.17014,
        0,
        0,
        0,
        0.46
      ],
      198: [
        0,
        0.68333,
        0.12028,
        0,
        0.88277
      ],
      216: [
        0.04861,
        0.73194,
        0.09403,
        0,
        0.76666
      ],
      223: [
        0.19444,
        0.69444,
        0.10514,
        0,
        0.53666
      ],
      230: [
        0,
        0.43056,
        0.07514,
        0,
        0.71555
      ],
      248: [
        0.09722,
        0.52778,
        0.09194,
        0,
        0.51111
      ],
      338: [
        0,
        0.68333,
        0.12028,
        0,
        0.98499
      ],
      339: [
        0,
        0.43056,
        0.07514,
        0,
        0.71555
      ],
      710: [
        0,
        0.69444,
        0.06646,
        0,
        0.51111
      ],
      711: [
        0,
        0.62847,
        0.08295,
        0,
        0.51111
      ],
      713: [
        0,
        0.56167,
        0.10333,
        0,
        0.51111
      ],
      714: [
        0,
        0.69444,
        0.09694,
        0,
        0.51111
      ],
      715: [
        0,
        0.69444,
        0,
        0,
        0.51111
      ],
      728: [
        0,
        0.69444,
        0.10806,
        0,
        0.51111
      ],
      729: [
        0,
        0.66786,
        0.11752,
        0,
        0.30667
      ],
      730: [
        0,
        0.69444,
        0,
        0,
        0.83129
      ],
      732: [
        0,
        0.66786,
        0.11585,
        0,
        0.51111
      ],
      733: [
        0,
        0.69444,
        0.1225,
        0,
        0.51111
      ],
      915: [
        0,
        0.68333,
        0.13305,
        0,
        0.62722
      ],
      916: [
        0,
        0.68333,
        0,
        0,
        0.81777
      ],
      920: [
        0,
        0.68333,
        0.09403,
        0,
        0.76666
      ],
      923: [
        0,
        0.68333,
        0,
        0,
        0.69222
      ],
      926: [
        0,
        0.68333,
        0.15294,
        0,
        0.66444
      ],
      928: [
        0,
        0.68333,
        0.16389,
        0,
        0.74333
      ],
      931: [
        0,
        0.68333,
        0.12028,
        0,
        0.71555
      ],
      933: [
        0,
        0.68333,
        0.11111,
        0,
        0.76666
      ],
      934: [
        0,
        0.68333,
        0.05986,
        0,
        0.71555
      ],
      936: [
        0,
        0.68333,
        0.11111,
        0,
        0.76666
      ],
      937: [
        0,
        0.68333,
        0.10257,
        0,
        0.71555
      ],
      8211: [
        0,
        0.43056,
        0.09208,
        0,
        0.51111
      ],
      8212: [
        0,
        0.43056,
        0.09208,
        0,
        1.02222
      ],
      8216: [
        0,
        0.69444,
        0.12417,
        0,
        0.30667
      ],
      8217: [
        0,
        0.69444,
        0.12417,
        0,
        0.30667
      ],
      8220: [
        0,
        0.69444,
        0.1685,
        0,
        0.51444
      ],
      8221: [
        0,
        0.69444,
        0.06961,
        0,
        0.51444
      ],
      8463: [
        0,
        0.68889,
        0,
        0,
        0.54028
      ]
    },
    "Main-Regular": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      33: [
        0,
        0.69444,
        0,
        0,
        0.27778
      ],
      34: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      35: [
        0.19444,
        0.69444,
        0,
        0,
        0.83334
      ],
      36: [
        0.05556,
        0.75,
        0,
        0,
        0.5
      ],
      37: [
        0.05556,
        0.75,
        0,
        0,
        0.83334
      ],
      38: [
        0,
        0.69444,
        0,
        0,
        0.77778
      ],
      39: [
        0,
        0.69444,
        0,
        0,
        0.27778
      ],
      40: [
        0.25,
        0.75,
        0,
        0,
        0.38889
      ],
      41: [
        0.25,
        0.75,
        0,
        0,
        0.38889
      ],
      42: [
        0,
        0.75,
        0,
        0,
        0.5
      ],
      43: [
        0.08333,
        0.58333,
        0,
        0,
        0.77778
      ],
      44: [
        0.19444,
        0.10556,
        0,
        0,
        0.27778
      ],
      45: [
        0,
        0.43056,
        0,
        0,
        0.33333
      ],
      46: [
        0,
        0.10556,
        0,
        0,
        0.27778
      ],
      47: [
        0.25,
        0.75,
        0,
        0,
        0.5
      ],
      48: [
        0,
        0.64444,
        0,
        0,
        0.5
      ],
      49: [
        0,
        0.64444,
        0,
        0,
        0.5
      ],
      50: [
        0,
        0.64444,
        0,
        0,
        0.5
      ],
      51: [
        0,
        0.64444,
        0,
        0,
        0.5
      ],
      52: [
        0,
        0.64444,
        0,
        0,
        0.5
      ],
      53: [
        0,
        0.64444,
        0,
        0,
        0.5
      ],
      54: [
        0,
        0.64444,
        0,
        0,
        0.5
      ],
      55: [
        0,
        0.64444,
        0,
        0,
        0.5
      ],
      56: [
        0,
        0.64444,
        0,
        0,
        0.5
      ],
      57: [
        0,
        0.64444,
        0,
        0,
        0.5
      ],
      58: [
        0,
        0.43056,
        0,
        0,
        0.27778
      ],
      59: [
        0.19444,
        0.43056,
        0,
        0,
        0.27778
      ],
      60: [
        0.0391,
        0.5391,
        0,
        0,
        0.77778
      ],
      61: [
        -0.13313,
        0.36687,
        0,
        0,
        0.77778
      ],
      62: [
        0.0391,
        0.5391,
        0,
        0,
        0.77778
      ],
      63: [
        0,
        0.69444,
        0,
        0,
        0.47222
      ],
      64: [
        0,
        0.69444,
        0,
        0,
        0.77778
      ],
      65: [
        0,
        0.68333,
        0,
        0,
        0.75
      ],
      66: [
        0,
        0.68333,
        0,
        0,
        0.70834
      ],
      67: [
        0,
        0.68333,
        0,
        0,
        0.72222
      ],
      68: [
        0,
        0.68333,
        0,
        0,
        0.76389
      ],
      69: [
        0,
        0.68333,
        0,
        0,
        0.68056
      ],
      70: [
        0,
        0.68333,
        0,
        0,
        0.65278
      ],
      71: [
        0,
        0.68333,
        0,
        0,
        0.78472
      ],
      72: [
        0,
        0.68333,
        0,
        0,
        0.75
      ],
      73: [
        0,
        0.68333,
        0,
        0,
        0.36111
      ],
      74: [
        0,
        0.68333,
        0,
        0,
        0.51389
      ],
      75: [
        0,
        0.68333,
        0,
        0,
        0.77778
      ],
      76: [
        0,
        0.68333,
        0,
        0,
        0.625
      ],
      77: [
        0,
        0.68333,
        0,
        0,
        0.91667
      ],
      78: [
        0,
        0.68333,
        0,
        0,
        0.75
      ],
      79: [
        0,
        0.68333,
        0,
        0,
        0.77778
      ],
      80: [
        0,
        0.68333,
        0,
        0,
        0.68056
      ],
      81: [
        0.19444,
        0.68333,
        0,
        0,
        0.77778
      ],
      82: [
        0,
        0.68333,
        0,
        0,
        0.73611
      ],
      83: [
        0,
        0.68333,
        0,
        0,
        0.55556
      ],
      84: [
        0,
        0.68333,
        0,
        0,
        0.72222
      ],
      85: [
        0,
        0.68333,
        0,
        0,
        0.75
      ],
      86: [
        0,
        0.68333,
        0.01389,
        0,
        0.75
      ],
      87: [
        0,
        0.68333,
        0.01389,
        0,
        1.02778
      ],
      88: [
        0,
        0.68333,
        0,
        0,
        0.75
      ],
      89: [
        0,
        0.68333,
        0.025,
        0,
        0.75
      ],
      90: [
        0,
        0.68333,
        0,
        0,
        0.61111
      ],
      91: [
        0.25,
        0.75,
        0,
        0,
        0.27778
      ],
      92: [
        0.25,
        0.75,
        0,
        0,
        0.5
      ],
      93: [
        0.25,
        0.75,
        0,
        0,
        0.27778
      ],
      94: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      95: [
        0.31,
        0.12056,
        0.02778,
        0,
        0.5
      ],
      97: [
        0,
        0.43056,
        0,
        0,
        0.5
      ],
      98: [
        0,
        0.69444,
        0,
        0,
        0.55556
      ],
      99: [
        0,
        0.43056,
        0,
        0,
        0.44445
      ],
      100: [
        0,
        0.69444,
        0,
        0,
        0.55556
      ],
      101: [
        0,
        0.43056,
        0,
        0,
        0.44445
      ],
      102: [
        0,
        0.69444,
        0.07778,
        0,
        0.30556
      ],
      103: [
        0.19444,
        0.43056,
        0.01389,
        0,
        0.5
      ],
      104: [
        0,
        0.69444,
        0,
        0,
        0.55556
      ],
      105: [
        0,
        0.66786,
        0,
        0,
        0.27778
      ],
      106: [
        0.19444,
        0.66786,
        0,
        0,
        0.30556
      ],
      107: [
        0,
        0.69444,
        0,
        0,
        0.52778
      ],
      108: [
        0,
        0.69444,
        0,
        0,
        0.27778
      ],
      109: [
        0,
        0.43056,
        0,
        0,
        0.83334
      ],
      110: [
        0,
        0.43056,
        0,
        0,
        0.55556
      ],
      111: [
        0,
        0.43056,
        0,
        0,
        0.5
      ],
      112: [
        0.19444,
        0.43056,
        0,
        0,
        0.55556
      ],
      113: [
        0.19444,
        0.43056,
        0,
        0,
        0.52778
      ],
      114: [
        0,
        0.43056,
        0,
        0,
        0.39167
      ],
      115: [
        0,
        0.43056,
        0,
        0,
        0.39445
      ],
      116: [
        0,
        0.61508,
        0,
        0,
        0.38889
      ],
      117: [
        0,
        0.43056,
        0,
        0,
        0.55556
      ],
      118: [
        0,
        0.43056,
        0.01389,
        0,
        0.52778
      ],
      119: [
        0,
        0.43056,
        0.01389,
        0,
        0.72222
      ],
      120: [
        0,
        0.43056,
        0,
        0,
        0.52778
      ],
      121: [
        0.19444,
        0.43056,
        0.01389,
        0,
        0.52778
      ],
      122: [
        0,
        0.43056,
        0,
        0,
        0.44445
      ],
      123: [
        0.25,
        0.75,
        0,
        0,
        0.5
      ],
      124: [
        0.25,
        0.75,
        0,
        0,
        0.27778
      ],
      125: [
        0.25,
        0.75,
        0,
        0,
        0.5
      ],
      126: [
        0.35,
        0.31786,
        0,
        0,
        0.5
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      163: [
        0,
        0.69444,
        0,
        0,
        0.76909
      ],
      167: [
        0.19444,
        0.69444,
        0,
        0,
        0.44445
      ],
      168: [
        0,
        0.66786,
        0,
        0,
        0.5
      ],
      172: [
        0,
        0.43056,
        0,
        0,
        0.66667
      ],
      176: [
        0,
        0.69444,
        0,
        0,
        0.75
      ],
      177: [
        0.08333,
        0.58333,
        0,
        0,
        0.77778
      ],
      182: [
        0.19444,
        0.69444,
        0,
        0,
        0.61111
      ],
      184: [
        0.17014,
        0,
        0,
        0,
        0.44445
      ],
      198: [
        0,
        0.68333,
        0,
        0,
        0.90278
      ],
      215: [
        0.08333,
        0.58333,
        0,
        0,
        0.77778
      ],
      216: [
        0.04861,
        0.73194,
        0,
        0,
        0.77778
      ],
      223: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      230: [
        0,
        0.43056,
        0,
        0,
        0.72222
      ],
      247: [
        0.08333,
        0.58333,
        0,
        0,
        0.77778
      ],
      248: [
        0.09722,
        0.52778,
        0,
        0,
        0.5
      ],
      305: [
        0,
        0.43056,
        0,
        0,
        0.27778
      ],
      338: [
        0,
        0.68333,
        0,
        0,
        1.01389
      ],
      339: [
        0,
        0.43056,
        0,
        0,
        0.77778
      ],
      567: [
        0.19444,
        0.43056,
        0,
        0,
        0.30556
      ],
      710: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      711: [
        0,
        0.62847,
        0,
        0,
        0.5
      ],
      713: [
        0,
        0.56778,
        0,
        0,
        0.5
      ],
      714: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      715: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      728: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      729: [
        0,
        0.66786,
        0,
        0,
        0.27778
      ],
      730: [
        0,
        0.69444,
        0,
        0,
        0.75
      ],
      732: [
        0,
        0.66786,
        0,
        0,
        0.5
      ],
      733: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      915: [
        0,
        0.68333,
        0,
        0,
        0.625
      ],
      916: [
        0,
        0.68333,
        0,
        0,
        0.83334
      ],
      920: [
        0,
        0.68333,
        0,
        0,
        0.77778
      ],
      923: [
        0,
        0.68333,
        0,
        0,
        0.69445
      ],
      926: [
        0,
        0.68333,
        0,
        0,
        0.66667
      ],
      928: [
        0,
        0.68333,
        0,
        0,
        0.75
      ],
      931: [
        0,
        0.68333,
        0,
        0,
        0.72222
      ],
      933: [
        0,
        0.68333,
        0,
        0,
        0.77778
      ],
      934: [
        0,
        0.68333,
        0,
        0,
        0.72222
      ],
      936: [
        0,
        0.68333,
        0,
        0,
        0.77778
      ],
      937: [
        0,
        0.68333,
        0,
        0,
        0.72222
      ],
      8211: [
        0,
        0.43056,
        0.02778,
        0,
        0.5
      ],
      8212: [
        0,
        0.43056,
        0.02778,
        0,
        1
      ],
      8216: [
        0,
        0.69444,
        0,
        0,
        0.27778
      ],
      8217: [
        0,
        0.69444,
        0,
        0,
        0.27778
      ],
      8220: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      8221: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      8224: [
        0.19444,
        0.69444,
        0,
        0,
        0.44445
      ],
      8225: [
        0.19444,
        0.69444,
        0,
        0,
        0.44445
      ],
      8230: [
        0,
        0.123,
        0,
        0,
        1.172
      ],
      8242: [
        0,
        0.55556,
        0,
        0,
        0.275
      ],
      8407: [
        0,
        0.71444,
        0.15382,
        0,
        0.5
      ],
      8463: [
        0,
        0.68889,
        0,
        0,
        0.54028
      ],
      8465: [
        0,
        0.69444,
        0,
        0,
        0.72222
      ],
      8467: [
        0,
        0.69444,
        0,
        0.11111,
        0.41667
      ],
      8472: [
        0.19444,
        0.43056,
        0,
        0.11111,
        0.63646
      ],
      8476: [
        0,
        0.69444,
        0,
        0,
        0.72222
      ],
      8501: [
        0,
        0.69444,
        0,
        0,
        0.61111
      ],
      8592: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8593: [
        0.19444,
        0.69444,
        0,
        0,
        0.5
      ],
      8594: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8595: [
        0.19444,
        0.69444,
        0,
        0,
        0.5
      ],
      8596: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8597: [
        0.25,
        0.75,
        0,
        0,
        0.5
      ],
      8598: [
        0.19444,
        0.69444,
        0,
        0,
        1
      ],
      8599: [
        0.19444,
        0.69444,
        0,
        0,
        1
      ],
      8600: [
        0.19444,
        0.69444,
        0,
        0,
        1
      ],
      8601: [
        0.19444,
        0.69444,
        0,
        0,
        1
      ],
      8614: [
        0.011,
        0.511,
        0,
        0,
        1
      ],
      8617: [
        0.011,
        0.511,
        0,
        0,
        1.126
      ],
      8618: [
        0.011,
        0.511,
        0,
        0,
        1.126
      ],
      8636: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8637: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8640: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8641: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8652: [
        0.011,
        0.671,
        0,
        0,
        1
      ],
      8656: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8657: [
        0.19444,
        0.69444,
        0,
        0,
        0.61111
      ],
      8658: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8659: [
        0.19444,
        0.69444,
        0,
        0,
        0.61111
      ],
      8660: [
        -0.13313,
        0.36687,
        0,
        0,
        1
      ],
      8661: [
        0.25,
        0.75,
        0,
        0,
        0.61111
      ],
      8704: [
        0,
        0.69444,
        0,
        0,
        0.55556
      ],
      8706: [
        0,
        0.69444,
        0.05556,
        0.08334,
        0.5309
      ],
      8707: [
        0,
        0.69444,
        0,
        0,
        0.55556
      ],
      8709: [
        0.05556,
        0.75,
        0,
        0,
        0.5
      ],
      8711: [
        0,
        0.68333,
        0,
        0,
        0.83334
      ],
      8712: [
        0.0391,
        0.5391,
        0,
        0,
        0.66667
      ],
      8715: [
        0.0391,
        0.5391,
        0,
        0,
        0.66667
      ],
      8722: [
        0.08333,
        0.58333,
        0,
        0,
        0.77778
      ],
      8723: [
        0.08333,
        0.58333,
        0,
        0,
        0.77778
      ],
      8725: [
        0.25,
        0.75,
        0,
        0,
        0.5
      ],
      8726: [
        0.25,
        0.75,
        0,
        0,
        0.5
      ],
      8727: [
        -0.03472,
        0.46528,
        0,
        0,
        0.5
      ],
      8728: [
        -0.05555,
        0.44445,
        0,
        0,
        0.5
      ],
      8729: [
        -0.05555,
        0.44445,
        0,
        0,
        0.5
      ],
      8730: [
        0.2,
        0.8,
        0,
        0,
        0.83334
      ],
      8733: [
        0,
        0.43056,
        0,
        0,
        0.77778
      ],
      8734: [
        0,
        0.43056,
        0,
        0,
        1
      ],
      8736: [
        0,
        0.69224,
        0,
        0,
        0.72222
      ],
      8739: [
        0.25,
        0.75,
        0,
        0,
        0.27778
      ],
      8741: [
        0.25,
        0.75,
        0,
        0,
        0.5
      ],
      8743: [
        0,
        0.55556,
        0,
        0,
        0.66667
      ],
      8744: [
        0,
        0.55556,
        0,
        0,
        0.66667
      ],
      8745: [
        0,
        0.55556,
        0,
        0,
        0.66667
      ],
      8746: [
        0,
        0.55556,
        0,
        0,
        0.66667
      ],
      8747: [
        0.19444,
        0.69444,
        0.11111,
        0,
        0.41667
      ],
      8764: [
        -0.13313,
        0.36687,
        0,
        0,
        0.77778
      ],
      8768: [
        0.19444,
        0.69444,
        0,
        0,
        0.27778
      ],
      8771: [
        -0.03625,
        0.46375,
        0,
        0,
        0.77778
      ],
      8773: [
        -0.022,
        0.589,
        0,
        0,
        0.778
      ],
      8776: [
        -0.01688,
        0.48312,
        0,
        0,
        0.77778
      ],
      8781: [
        -0.03625,
        0.46375,
        0,
        0,
        0.77778
      ],
      8784: [
        -0.133,
        0.673,
        0,
        0,
        0.778
      ],
      8801: [
        -0.03625,
        0.46375,
        0,
        0,
        0.77778
      ],
      8804: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      8805: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      8810: [
        0.0391,
        0.5391,
        0,
        0,
        1
      ],
      8811: [
        0.0391,
        0.5391,
        0,
        0,
        1
      ],
      8826: [
        0.0391,
        0.5391,
        0,
        0,
        0.77778
      ],
      8827: [
        0.0391,
        0.5391,
        0,
        0,
        0.77778
      ],
      8834: [
        0.0391,
        0.5391,
        0,
        0,
        0.77778
      ],
      8835: [
        0.0391,
        0.5391,
        0,
        0,
        0.77778
      ],
      8838: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      8839: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      8846: [
        0,
        0.55556,
        0,
        0,
        0.66667
      ],
      8849: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      8850: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      8851: [
        0,
        0.55556,
        0,
        0,
        0.66667
      ],
      8852: [
        0,
        0.55556,
        0,
        0,
        0.66667
      ],
      8853: [
        0.08333,
        0.58333,
        0,
        0,
        0.77778
      ],
      8854: [
        0.08333,
        0.58333,
        0,
        0,
        0.77778
      ],
      8855: [
        0.08333,
        0.58333,
        0,
        0,
        0.77778
      ],
      8856: [
        0.08333,
        0.58333,
        0,
        0,
        0.77778
      ],
      8857: [
        0.08333,
        0.58333,
        0,
        0,
        0.77778
      ],
      8866: [
        0,
        0.69444,
        0,
        0,
        0.61111
      ],
      8867: [
        0,
        0.69444,
        0,
        0,
        0.61111
      ],
      8868: [
        0,
        0.69444,
        0,
        0,
        0.77778
      ],
      8869: [
        0,
        0.69444,
        0,
        0,
        0.77778
      ],
      8872: [
        0.249,
        0.75,
        0,
        0,
        0.867
      ],
      8900: [
        -0.05555,
        0.44445,
        0,
        0,
        0.5
      ],
      8901: [
        -0.05555,
        0.44445,
        0,
        0,
        0.27778
      ],
      8902: [
        -0.03472,
        0.46528,
        0,
        0,
        0.5
      ],
      8904: [
        5e-3,
        0.505,
        0,
        0,
        0.9
      ],
      8942: [
        0.03,
        0.903,
        0,
        0,
        0.278
      ],
      8943: [
        -0.19,
        0.313,
        0,
        0,
        1.172
      ],
      8945: [
        -0.1,
        0.823,
        0,
        0,
        1.282
      ],
      8968: [
        0.25,
        0.75,
        0,
        0,
        0.44445
      ],
      8969: [
        0.25,
        0.75,
        0,
        0,
        0.44445
      ],
      8970: [
        0.25,
        0.75,
        0,
        0,
        0.44445
      ],
      8971: [
        0.25,
        0.75,
        0,
        0,
        0.44445
      ],
      8994: [
        -0.14236,
        0.35764,
        0,
        0,
        1
      ],
      8995: [
        -0.14236,
        0.35764,
        0,
        0,
        1
      ],
      9136: [
        0.244,
        0.744,
        0,
        0,
        0.412
      ],
      9137: [
        0.244,
        0.745,
        0,
        0,
        0.412
      ],
      9651: [
        0.19444,
        0.69444,
        0,
        0,
        0.88889
      ],
      9657: [
        -0.03472,
        0.46528,
        0,
        0,
        0.5
      ],
      9661: [
        0.19444,
        0.69444,
        0,
        0,
        0.88889
      ],
      9667: [
        -0.03472,
        0.46528,
        0,
        0,
        0.5
      ],
      9711: [
        0.19444,
        0.69444,
        0,
        0,
        1
      ],
      9824: [
        0.12963,
        0.69444,
        0,
        0,
        0.77778
      ],
      9825: [
        0.12963,
        0.69444,
        0,
        0,
        0.77778
      ],
      9826: [
        0.12963,
        0.69444,
        0,
        0,
        0.77778
      ],
      9827: [
        0.12963,
        0.69444,
        0,
        0,
        0.77778
      ],
      9837: [
        0,
        0.75,
        0,
        0,
        0.38889
      ],
      9838: [
        0.19444,
        0.69444,
        0,
        0,
        0.38889
      ],
      9839: [
        0.19444,
        0.69444,
        0,
        0,
        0.38889
      ],
      10216: [
        0.25,
        0.75,
        0,
        0,
        0.38889
      ],
      10217: [
        0.25,
        0.75,
        0,
        0,
        0.38889
      ],
      10222: [
        0.244,
        0.744,
        0,
        0,
        0.412
      ],
      10223: [
        0.244,
        0.745,
        0,
        0,
        0.412
      ],
      10229: [
        0.011,
        0.511,
        0,
        0,
        1.609
      ],
      10230: [
        0.011,
        0.511,
        0,
        0,
        1.638
      ],
      10231: [
        0.011,
        0.511,
        0,
        0,
        1.859
      ],
      10232: [
        0.024,
        0.525,
        0,
        0,
        1.609
      ],
      10233: [
        0.024,
        0.525,
        0,
        0,
        1.638
      ],
      10234: [
        0.024,
        0.525,
        0,
        0,
        1.858
      ],
      10236: [
        0.011,
        0.511,
        0,
        0,
        1.638
      ],
      10815: [
        0,
        0.68333,
        0,
        0,
        0.75
      ],
      10927: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      10928: [
        0.13597,
        0.63597,
        0,
        0,
        0.77778
      ],
      57376: [
        0.19444,
        0.69444,
        0,
        0,
        0
      ]
    },
    "Math-BoldItalic": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      48: [
        0,
        0.44444,
        0,
        0,
        0.575
      ],
      49: [
        0,
        0.44444,
        0,
        0,
        0.575
      ],
      50: [
        0,
        0.44444,
        0,
        0,
        0.575
      ],
      51: [
        0.19444,
        0.44444,
        0,
        0,
        0.575
      ],
      52: [
        0.19444,
        0.44444,
        0,
        0,
        0.575
      ],
      53: [
        0.19444,
        0.44444,
        0,
        0,
        0.575
      ],
      54: [
        0,
        0.64444,
        0,
        0,
        0.575
      ],
      55: [
        0.19444,
        0.44444,
        0,
        0,
        0.575
      ],
      56: [
        0,
        0.64444,
        0,
        0,
        0.575
      ],
      57: [
        0.19444,
        0.44444,
        0,
        0,
        0.575
      ],
      65: [
        0,
        0.68611,
        0,
        0,
        0.86944
      ],
      66: [
        0,
        0.68611,
        0.04835,
        0,
        0.8664
      ],
      67: [
        0,
        0.68611,
        0.06979,
        0,
        0.81694
      ],
      68: [
        0,
        0.68611,
        0.03194,
        0,
        0.93812
      ],
      69: [
        0,
        0.68611,
        0.05451,
        0,
        0.81007
      ],
      70: [
        0,
        0.68611,
        0.15972,
        0,
        0.68889
      ],
      71: [
        0,
        0.68611,
        0,
        0,
        0.88673
      ],
      72: [
        0,
        0.68611,
        0.08229,
        0,
        0.98229
      ],
      73: [
        0,
        0.68611,
        0.07778,
        0,
        0.51111
      ],
      74: [
        0,
        0.68611,
        0.10069,
        0,
        0.63125
      ],
      75: [
        0,
        0.68611,
        0.06979,
        0,
        0.97118
      ],
      76: [
        0,
        0.68611,
        0,
        0,
        0.75555
      ],
      77: [
        0,
        0.68611,
        0.11424,
        0,
        1.14201
      ],
      78: [
        0,
        0.68611,
        0.11424,
        0,
        0.95034
      ],
      79: [
        0,
        0.68611,
        0.03194,
        0,
        0.83666
      ],
      80: [
        0,
        0.68611,
        0.15972,
        0,
        0.72309
      ],
      81: [
        0.19444,
        0.68611,
        0,
        0,
        0.86861
      ],
      82: [
        0,
        0.68611,
        421e-5,
        0,
        0.87235
      ],
      83: [
        0,
        0.68611,
        0.05382,
        0,
        0.69271
      ],
      84: [
        0,
        0.68611,
        0.15972,
        0,
        0.63663
      ],
      85: [
        0,
        0.68611,
        0.11424,
        0,
        0.80027
      ],
      86: [
        0,
        0.68611,
        0.25555,
        0,
        0.67778
      ],
      87: [
        0,
        0.68611,
        0.15972,
        0,
        1.09305
      ],
      88: [
        0,
        0.68611,
        0.07778,
        0,
        0.94722
      ],
      89: [
        0,
        0.68611,
        0.25555,
        0,
        0.67458
      ],
      90: [
        0,
        0.68611,
        0.06979,
        0,
        0.77257
      ],
      97: [
        0,
        0.44444,
        0,
        0,
        0.63287
      ],
      98: [
        0,
        0.69444,
        0,
        0,
        0.52083
      ],
      99: [
        0,
        0.44444,
        0,
        0,
        0.51342
      ],
      100: [
        0,
        0.69444,
        0,
        0,
        0.60972
      ],
      101: [
        0,
        0.44444,
        0,
        0,
        0.55361
      ],
      102: [
        0.19444,
        0.69444,
        0.11042,
        0,
        0.56806
      ],
      103: [
        0.19444,
        0.44444,
        0.03704,
        0,
        0.5449
      ],
      104: [
        0,
        0.69444,
        0,
        0,
        0.66759
      ],
      105: [
        0,
        0.69326,
        0,
        0,
        0.4048
      ],
      106: [
        0.19444,
        0.69326,
        0.0622,
        0,
        0.47083
      ],
      107: [
        0,
        0.69444,
        0.01852,
        0,
        0.6037
      ],
      108: [
        0,
        0.69444,
        88e-4,
        0,
        0.34815
      ],
      109: [
        0,
        0.44444,
        0,
        0,
        1.0324
      ],
      110: [
        0,
        0.44444,
        0,
        0,
        0.71296
      ],
      111: [
        0,
        0.44444,
        0,
        0,
        0.58472
      ],
      112: [
        0.19444,
        0.44444,
        0,
        0,
        0.60092
      ],
      113: [
        0.19444,
        0.44444,
        0.03704,
        0,
        0.54213
      ],
      114: [
        0,
        0.44444,
        0.03194,
        0,
        0.5287
      ],
      115: [
        0,
        0.44444,
        0,
        0,
        0.53125
      ],
      116: [
        0,
        0.63492,
        0,
        0,
        0.41528
      ],
      117: [
        0,
        0.44444,
        0,
        0,
        0.68102
      ],
      118: [
        0,
        0.44444,
        0.03704,
        0,
        0.56666
      ],
      119: [
        0,
        0.44444,
        0.02778,
        0,
        0.83148
      ],
      120: [
        0,
        0.44444,
        0,
        0,
        0.65903
      ],
      121: [
        0.19444,
        0.44444,
        0.03704,
        0,
        0.59028
      ],
      122: [
        0,
        0.44444,
        0.04213,
        0,
        0.55509
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      915: [
        0,
        0.68611,
        0.15972,
        0,
        0.65694
      ],
      916: [
        0,
        0.68611,
        0,
        0,
        0.95833
      ],
      920: [
        0,
        0.68611,
        0.03194,
        0,
        0.86722
      ],
      923: [
        0,
        0.68611,
        0,
        0,
        0.80555
      ],
      926: [
        0,
        0.68611,
        0.07458,
        0,
        0.84125
      ],
      928: [
        0,
        0.68611,
        0.08229,
        0,
        0.98229
      ],
      931: [
        0,
        0.68611,
        0.05451,
        0,
        0.88507
      ],
      933: [
        0,
        0.68611,
        0.15972,
        0,
        0.67083
      ],
      934: [
        0,
        0.68611,
        0,
        0,
        0.76666
      ],
      936: [
        0,
        0.68611,
        0.11653,
        0,
        0.71402
      ],
      937: [
        0,
        0.68611,
        0.04835,
        0,
        0.8789
      ],
      945: [
        0,
        0.44444,
        0,
        0,
        0.76064
      ],
      946: [
        0.19444,
        0.69444,
        0.03403,
        0,
        0.65972
      ],
      947: [
        0.19444,
        0.44444,
        0.06389,
        0,
        0.59003
      ],
      948: [
        0,
        0.69444,
        0.03819,
        0,
        0.52222
      ],
      949: [
        0,
        0.44444,
        0,
        0,
        0.52882
      ],
      950: [
        0.19444,
        0.69444,
        0.06215,
        0,
        0.50833
      ],
      951: [
        0.19444,
        0.44444,
        0.03704,
        0,
        0.6
      ],
      952: [
        0,
        0.69444,
        0.03194,
        0,
        0.5618
      ],
      953: [
        0,
        0.44444,
        0,
        0,
        0.41204
      ],
      954: [
        0,
        0.44444,
        0,
        0,
        0.66759
      ],
      955: [
        0,
        0.69444,
        0,
        0,
        0.67083
      ],
      956: [
        0.19444,
        0.44444,
        0,
        0,
        0.70787
      ],
      957: [
        0,
        0.44444,
        0.06898,
        0,
        0.57685
      ],
      958: [
        0.19444,
        0.69444,
        0.03021,
        0,
        0.50833
      ],
      959: [
        0,
        0.44444,
        0,
        0,
        0.58472
      ],
      960: [
        0,
        0.44444,
        0.03704,
        0,
        0.68241
      ],
      961: [
        0.19444,
        0.44444,
        0,
        0,
        0.6118
      ],
      962: [
        0.09722,
        0.44444,
        0.07917,
        0,
        0.42361
      ],
      963: [
        0,
        0.44444,
        0.03704,
        0,
        0.68588
      ],
      964: [
        0,
        0.44444,
        0.13472,
        0,
        0.52083
      ],
      965: [
        0,
        0.44444,
        0.03704,
        0,
        0.63055
      ],
      966: [
        0.19444,
        0.44444,
        0,
        0,
        0.74722
      ],
      967: [
        0.19444,
        0.44444,
        0,
        0,
        0.71805
      ],
      968: [
        0.19444,
        0.69444,
        0.03704,
        0,
        0.75833
      ],
      969: [
        0,
        0.44444,
        0.03704,
        0,
        0.71782
      ],
      977: [
        0,
        0.69444,
        0,
        0,
        0.69155
      ],
      981: [
        0.19444,
        0.69444,
        0,
        0,
        0.7125
      ],
      982: [
        0,
        0.44444,
        0.03194,
        0,
        0.975
      ],
      1009: [
        0.19444,
        0.44444,
        0,
        0,
        0.6118
      ],
      1013: [
        0,
        0.44444,
        0,
        0,
        0.48333
      ],
      57649: [
        0,
        0.44444,
        0,
        0,
        0.39352
      ],
      57911: [
        0.19444,
        0.44444,
        0,
        0,
        0.43889
      ]
    },
    "Math-Italic": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      48: [
        0,
        0.43056,
        0,
        0,
        0.5
      ],
      49: [
        0,
        0.43056,
        0,
        0,
        0.5
      ],
      50: [
        0,
        0.43056,
        0,
        0,
        0.5
      ],
      51: [
        0.19444,
        0.43056,
        0,
        0,
        0.5
      ],
      52: [
        0.19444,
        0.43056,
        0,
        0,
        0.5
      ],
      53: [
        0.19444,
        0.43056,
        0,
        0,
        0.5
      ],
      54: [
        0,
        0.64444,
        0,
        0,
        0.5
      ],
      55: [
        0.19444,
        0.43056,
        0,
        0,
        0.5
      ],
      56: [
        0,
        0.64444,
        0,
        0,
        0.5
      ],
      57: [
        0.19444,
        0.43056,
        0,
        0,
        0.5
      ],
      65: [
        0,
        0.68333,
        0,
        0.13889,
        0.75
      ],
      66: [
        0,
        0.68333,
        0.05017,
        0.08334,
        0.75851
      ],
      67: [
        0,
        0.68333,
        0.07153,
        0.08334,
        0.71472
      ],
      68: [
        0,
        0.68333,
        0.02778,
        0.05556,
        0.82792
      ],
      69: [
        0,
        0.68333,
        0.05764,
        0.08334,
        0.7382
      ],
      70: [
        0,
        0.68333,
        0.13889,
        0.08334,
        0.64306
      ],
      71: [
        0,
        0.68333,
        0,
        0.08334,
        0.78625
      ],
      72: [
        0,
        0.68333,
        0.08125,
        0.05556,
        0.83125
      ],
      73: [
        0,
        0.68333,
        0.07847,
        0.11111,
        0.43958
      ],
      74: [
        0,
        0.68333,
        0.09618,
        0.16667,
        0.55451
      ],
      75: [
        0,
        0.68333,
        0.07153,
        0.05556,
        0.84931
      ],
      76: [
        0,
        0.68333,
        0,
        0.02778,
        0.68056
      ],
      77: [
        0,
        0.68333,
        0.10903,
        0.08334,
        0.97014
      ],
      78: [
        0,
        0.68333,
        0.10903,
        0.08334,
        0.80347
      ],
      79: [
        0,
        0.68333,
        0.02778,
        0.08334,
        0.76278
      ],
      80: [
        0,
        0.68333,
        0.13889,
        0.08334,
        0.64201
      ],
      81: [
        0.19444,
        0.68333,
        0,
        0.08334,
        0.79056
      ],
      82: [
        0,
        0.68333,
        773e-5,
        0.08334,
        0.75929
      ],
      83: [
        0,
        0.68333,
        0.05764,
        0.08334,
        0.6132
      ],
      84: [
        0,
        0.68333,
        0.13889,
        0.08334,
        0.58438
      ],
      85: [
        0,
        0.68333,
        0.10903,
        0.02778,
        0.68278
      ],
      86: [
        0,
        0.68333,
        0.22222,
        0,
        0.58333
      ],
      87: [
        0,
        0.68333,
        0.13889,
        0,
        0.94445
      ],
      88: [
        0,
        0.68333,
        0.07847,
        0.08334,
        0.82847
      ],
      89: [
        0,
        0.68333,
        0.22222,
        0,
        0.58056
      ],
      90: [
        0,
        0.68333,
        0.07153,
        0.08334,
        0.68264
      ],
      97: [
        0,
        0.43056,
        0,
        0,
        0.52859
      ],
      98: [
        0,
        0.69444,
        0,
        0,
        0.42917
      ],
      99: [
        0,
        0.43056,
        0,
        0.05556,
        0.43276
      ],
      100: [
        0,
        0.69444,
        0,
        0.16667,
        0.52049
      ],
      101: [
        0,
        0.43056,
        0,
        0.05556,
        0.46563
      ],
      102: [
        0.19444,
        0.69444,
        0.10764,
        0.16667,
        0.48959
      ],
      103: [
        0.19444,
        0.43056,
        0.03588,
        0.02778,
        0.47697
      ],
      104: [
        0,
        0.69444,
        0,
        0,
        0.57616
      ],
      105: [
        0,
        0.65952,
        0,
        0,
        0.34451
      ],
      106: [
        0.19444,
        0.65952,
        0.05724,
        0,
        0.41181
      ],
      107: [
        0,
        0.69444,
        0.03148,
        0,
        0.5206
      ],
      108: [
        0,
        0.69444,
        0.01968,
        0.08334,
        0.29838
      ],
      109: [
        0,
        0.43056,
        0,
        0,
        0.87801
      ],
      110: [
        0,
        0.43056,
        0,
        0,
        0.60023
      ],
      111: [
        0,
        0.43056,
        0,
        0.05556,
        0.48472
      ],
      112: [
        0.19444,
        0.43056,
        0,
        0.08334,
        0.50313
      ],
      113: [
        0.19444,
        0.43056,
        0.03588,
        0.08334,
        0.44641
      ],
      114: [
        0,
        0.43056,
        0.02778,
        0.05556,
        0.45116
      ],
      115: [
        0,
        0.43056,
        0,
        0.05556,
        0.46875
      ],
      116: [
        0,
        0.61508,
        0,
        0.08334,
        0.36111
      ],
      117: [
        0,
        0.43056,
        0,
        0.02778,
        0.57246
      ],
      118: [
        0,
        0.43056,
        0.03588,
        0.02778,
        0.48472
      ],
      119: [
        0,
        0.43056,
        0.02691,
        0.08334,
        0.71592
      ],
      120: [
        0,
        0.43056,
        0,
        0.02778,
        0.57153
      ],
      121: [
        0.19444,
        0.43056,
        0.03588,
        0.05556,
        0.49028
      ],
      122: [
        0,
        0.43056,
        0.04398,
        0.05556,
        0.46505
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      915: [
        0,
        0.68333,
        0.13889,
        0.08334,
        0.61528
      ],
      916: [
        0,
        0.68333,
        0,
        0.16667,
        0.83334
      ],
      920: [
        0,
        0.68333,
        0.02778,
        0.08334,
        0.76278
      ],
      923: [
        0,
        0.68333,
        0,
        0.16667,
        0.69445
      ],
      926: [
        0,
        0.68333,
        0.07569,
        0.08334,
        0.74236
      ],
      928: [
        0,
        0.68333,
        0.08125,
        0.05556,
        0.83125
      ],
      931: [
        0,
        0.68333,
        0.05764,
        0.08334,
        0.77986
      ],
      933: [
        0,
        0.68333,
        0.13889,
        0.05556,
        0.58333
      ],
      934: [
        0,
        0.68333,
        0,
        0.08334,
        0.66667
      ],
      936: [
        0,
        0.68333,
        0.11,
        0.05556,
        0.61222
      ],
      937: [
        0,
        0.68333,
        0.05017,
        0.08334,
        0.7724
      ],
      945: [
        0,
        0.43056,
        37e-4,
        0.02778,
        0.6397
      ],
      946: [
        0.19444,
        0.69444,
        0.05278,
        0.08334,
        0.56563
      ],
      947: [
        0.19444,
        0.43056,
        0.05556,
        0,
        0.51773
      ],
      948: [
        0,
        0.69444,
        0.03785,
        0.05556,
        0.44444
      ],
      949: [
        0,
        0.43056,
        0,
        0.08334,
        0.46632
      ],
      950: [
        0.19444,
        0.69444,
        0.07378,
        0.08334,
        0.4375
      ],
      951: [
        0.19444,
        0.43056,
        0.03588,
        0.05556,
        0.49653
      ],
      952: [
        0,
        0.69444,
        0.02778,
        0.08334,
        0.46944
      ],
      953: [
        0,
        0.43056,
        0,
        0.05556,
        0.35394
      ],
      954: [
        0,
        0.43056,
        0,
        0,
        0.57616
      ],
      955: [
        0,
        0.69444,
        0,
        0,
        0.58334
      ],
      956: [
        0.19444,
        0.43056,
        0,
        0.02778,
        0.60255
      ],
      957: [
        0,
        0.43056,
        0.06366,
        0.02778,
        0.49398
      ],
      958: [
        0.19444,
        0.69444,
        0.04601,
        0.11111,
        0.4375
      ],
      959: [
        0,
        0.43056,
        0,
        0.05556,
        0.48472
      ],
      960: [
        0,
        0.43056,
        0.03588,
        0,
        0.57003
      ],
      961: [
        0.19444,
        0.43056,
        0,
        0.08334,
        0.51702
      ],
      962: [
        0.09722,
        0.43056,
        0.07986,
        0.08334,
        0.36285
      ],
      963: [
        0,
        0.43056,
        0.03588,
        0,
        0.57141
      ],
      964: [
        0,
        0.43056,
        0.1132,
        0.02778,
        0.43715
      ],
      965: [
        0,
        0.43056,
        0.03588,
        0.02778,
        0.54028
      ],
      966: [
        0.19444,
        0.43056,
        0,
        0.08334,
        0.65417
      ],
      967: [
        0.19444,
        0.43056,
        0,
        0.05556,
        0.62569
      ],
      968: [
        0.19444,
        0.69444,
        0.03588,
        0.11111,
        0.65139
      ],
      969: [
        0,
        0.43056,
        0.03588,
        0,
        0.62245
      ],
      977: [
        0,
        0.69444,
        0,
        0.08334,
        0.59144
      ],
      981: [
        0.19444,
        0.69444,
        0,
        0.08334,
        0.59583
      ],
      982: [
        0,
        0.43056,
        0.02778,
        0,
        0.82813
      ],
      1009: [
        0.19444,
        0.43056,
        0,
        0.08334,
        0.51702
      ],
      1013: [
        0,
        0.43056,
        0,
        0.05556,
        0.4059
      ],
      57649: [
        0,
        0.43056,
        0,
        0.02778,
        0.32246
      ],
      57911: [
        0.19444,
        0.43056,
        0,
        0.08334,
        0.38403
      ]
    },
    "SansSerif-Bold": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      33: [
        0,
        0.69444,
        0,
        0,
        0.36667
      ],
      34: [
        0,
        0.69444,
        0,
        0,
        0.55834
      ],
      35: [
        0.19444,
        0.69444,
        0,
        0,
        0.91667
      ],
      36: [
        0.05556,
        0.75,
        0,
        0,
        0.55
      ],
      37: [
        0.05556,
        0.75,
        0,
        0,
        1.02912
      ],
      38: [
        0,
        0.69444,
        0,
        0,
        0.83056
      ],
      39: [
        0,
        0.69444,
        0,
        0,
        0.30556
      ],
      40: [
        0.25,
        0.75,
        0,
        0,
        0.42778
      ],
      41: [
        0.25,
        0.75,
        0,
        0,
        0.42778
      ],
      42: [
        0,
        0.75,
        0,
        0,
        0.55
      ],
      43: [
        0.11667,
        0.61667,
        0,
        0,
        0.85556
      ],
      44: [
        0.10556,
        0.13056,
        0,
        0,
        0.30556
      ],
      45: [
        0,
        0.45833,
        0,
        0,
        0.36667
      ],
      46: [
        0,
        0.13056,
        0,
        0,
        0.30556
      ],
      47: [
        0.25,
        0.75,
        0,
        0,
        0.55
      ],
      48: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      49: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      50: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      51: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      52: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      53: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      54: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      55: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      56: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      57: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      58: [
        0,
        0.45833,
        0,
        0,
        0.30556
      ],
      59: [
        0.10556,
        0.45833,
        0,
        0,
        0.30556
      ],
      61: [
        -0.09375,
        0.40625,
        0,
        0,
        0.85556
      ],
      63: [
        0,
        0.69444,
        0,
        0,
        0.51945
      ],
      64: [
        0,
        0.69444,
        0,
        0,
        0.73334
      ],
      65: [
        0,
        0.69444,
        0,
        0,
        0.73334
      ],
      66: [
        0,
        0.69444,
        0,
        0,
        0.73334
      ],
      67: [
        0,
        0.69444,
        0,
        0,
        0.70278
      ],
      68: [
        0,
        0.69444,
        0,
        0,
        0.79445
      ],
      69: [
        0,
        0.69444,
        0,
        0,
        0.64167
      ],
      70: [
        0,
        0.69444,
        0,
        0,
        0.61111
      ],
      71: [
        0,
        0.69444,
        0,
        0,
        0.73334
      ],
      72: [
        0,
        0.69444,
        0,
        0,
        0.79445
      ],
      73: [
        0,
        0.69444,
        0,
        0,
        0.33056
      ],
      74: [
        0,
        0.69444,
        0,
        0,
        0.51945
      ],
      75: [
        0,
        0.69444,
        0,
        0,
        0.76389
      ],
      76: [
        0,
        0.69444,
        0,
        0,
        0.58056
      ],
      77: [
        0,
        0.69444,
        0,
        0,
        0.97778
      ],
      78: [
        0,
        0.69444,
        0,
        0,
        0.79445
      ],
      79: [
        0,
        0.69444,
        0,
        0,
        0.79445
      ],
      80: [
        0,
        0.69444,
        0,
        0,
        0.70278
      ],
      81: [
        0.10556,
        0.69444,
        0,
        0,
        0.79445
      ],
      82: [
        0,
        0.69444,
        0,
        0,
        0.70278
      ],
      83: [
        0,
        0.69444,
        0,
        0,
        0.61111
      ],
      84: [
        0,
        0.69444,
        0,
        0,
        0.73334
      ],
      85: [
        0,
        0.69444,
        0,
        0,
        0.76389
      ],
      86: [
        0,
        0.69444,
        0.01528,
        0,
        0.73334
      ],
      87: [
        0,
        0.69444,
        0.01528,
        0,
        1.03889
      ],
      88: [
        0,
        0.69444,
        0,
        0,
        0.73334
      ],
      89: [
        0,
        0.69444,
        0.0275,
        0,
        0.73334
      ],
      90: [
        0,
        0.69444,
        0,
        0,
        0.67223
      ],
      91: [
        0.25,
        0.75,
        0,
        0,
        0.34306
      ],
      93: [
        0.25,
        0.75,
        0,
        0,
        0.34306
      ],
      94: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      95: [
        0.35,
        0.10833,
        0.03056,
        0,
        0.55
      ],
      97: [
        0,
        0.45833,
        0,
        0,
        0.525
      ],
      98: [
        0,
        0.69444,
        0,
        0,
        0.56111
      ],
      99: [
        0,
        0.45833,
        0,
        0,
        0.48889
      ],
      100: [
        0,
        0.69444,
        0,
        0,
        0.56111
      ],
      101: [
        0,
        0.45833,
        0,
        0,
        0.51111
      ],
      102: [
        0,
        0.69444,
        0.07639,
        0,
        0.33611
      ],
      103: [
        0.19444,
        0.45833,
        0.01528,
        0,
        0.55
      ],
      104: [
        0,
        0.69444,
        0,
        0,
        0.56111
      ],
      105: [
        0,
        0.69444,
        0,
        0,
        0.25556
      ],
      106: [
        0.19444,
        0.69444,
        0,
        0,
        0.28611
      ],
      107: [
        0,
        0.69444,
        0,
        0,
        0.53056
      ],
      108: [
        0,
        0.69444,
        0,
        0,
        0.25556
      ],
      109: [
        0,
        0.45833,
        0,
        0,
        0.86667
      ],
      110: [
        0,
        0.45833,
        0,
        0,
        0.56111
      ],
      111: [
        0,
        0.45833,
        0,
        0,
        0.55
      ],
      112: [
        0.19444,
        0.45833,
        0,
        0,
        0.56111
      ],
      113: [
        0.19444,
        0.45833,
        0,
        0,
        0.56111
      ],
      114: [
        0,
        0.45833,
        0.01528,
        0,
        0.37222
      ],
      115: [
        0,
        0.45833,
        0,
        0,
        0.42167
      ],
      116: [
        0,
        0.58929,
        0,
        0,
        0.40417
      ],
      117: [
        0,
        0.45833,
        0,
        0,
        0.56111
      ],
      118: [
        0,
        0.45833,
        0.01528,
        0,
        0.5
      ],
      119: [
        0,
        0.45833,
        0.01528,
        0,
        0.74445
      ],
      120: [
        0,
        0.45833,
        0,
        0,
        0.5
      ],
      121: [
        0.19444,
        0.45833,
        0.01528,
        0,
        0.5
      ],
      122: [
        0,
        0.45833,
        0,
        0,
        0.47639
      ],
      126: [
        0.35,
        0.34444,
        0,
        0,
        0.55
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      168: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      176: [
        0,
        0.69444,
        0,
        0,
        0.73334
      ],
      180: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      184: [
        0.17014,
        0,
        0,
        0,
        0.48889
      ],
      305: [
        0,
        0.45833,
        0,
        0,
        0.25556
      ],
      567: [
        0.19444,
        0.45833,
        0,
        0,
        0.28611
      ],
      710: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      711: [
        0,
        0.63542,
        0,
        0,
        0.55
      ],
      713: [
        0,
        0.63778,
        0,
        0,
        0.55
      ],
      728: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      729: [
        0,
        0.69444,
        0,
        0,
        0.30556
      ],
      730: [
        0,
        0.69444,
        0,
        0,
        0.73334
      ],
      732: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      733: [
        0,
        0.69444,
        0,
        0,
        0.55
      ],
      915: [
        0,
        0.69444,
        0,
        0,
        0.58056
      ],
      916: [
        0,
        0.69444,
        0,
        0,
        0.91667
      ],
      920: [
        0,
        0.69444,
        0,
        0,
        0.85556
      ],
      923: [
        0,
        0.69444,
        0,
        0,
        0.67223
      ],
      926: [
        0,
        0.69444,
        0,
        0,
        0.73334
      ],
      928: [
        0,
        0.69444,
        0,
        0,
        0.79445
      ],
      931: [
        0,
        0.69444,
        0,
        0,
        0.79445
      ],
      933: [
        0,
        0.69444,
        0,
        0,
        0.85556
      ],
      934: [
        0,
        0.69444,
        0,
        0,
        0.79445
      ],
      936: [
        0,
        0.69444,
        0,
        0,
        0.85556
      ],
      937: [
        0,
        0.69444,
        0,
        0,
        0.79445
      ],
      8211: [
        0,
        0.45833,
        0.03056,
        0,
        0.55
      ],
      8212: [
        0,
        0.45833,
        0.03056,
        0,
        1.10001
      ],
      8216: [
        0,
        0.69444,
        0,
        0,
        0.30556
      ],
      8217: [
        0,
        0.69444,
        0,
        0,
        0.30556
      ],
      8220: [
        0,
        0.69444,
        0,
        0,
        0.55834
      ],
      8221: [
        0,
        0.69444,
        0,
        0,
        0.55834
      ]
    },
    "SansSerif-Italic": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      33: [
        0,
        0.69444,
        0.05733,
        0,
        0.31945
      ],
      34: [
        0,
        0.69444,
        316e-5,
        0,
        0.5
      ],
      35: [
        0.19444,
        0.69444,
        0.05087,
        0,
        0.83334
      ],
      36: [
        0.05556,
        0.75,
        0.11156,
        0,
        0.5
      ],
      37: [
        0.05556,
        0.75,
        0.03126,
        0,
        0.83334
      ],
      38: [
        0,
        0.69444,
        0.03058,
        0,
        0.75834
      ],
      39: [
        0,
        0.69444,
        0.07816,
        0,
        0.27778
      ],
      40: [
        0.25,
        0.75,
        0.13164,
        0,
        0.38889
      ],
      41: [
        0.25,
        0.75,
        0.02536,
        0,
        0.38889
      ],
      42: [
        0,
        0.75,
        0.11775,
        0,
        0.5
      ],
      43: [
        0.08333,
        0.58333,
        0.02536,
        0,
        0.77778
      ],
      44: [
        0.125,
        0.08333,
        0,
        0,
        0.27778
      ],
      45: [
        0,
        0.44444,
        0.01946,
        0,
        0.33333
      ],
      46: [
        0,
        0.08333,
        0,
        0,
        0.27778
      ],
      47: [
        0.25,
        0.75,
        0.13164,
        0,
        0.5
      ],
      48: [
        0,
        0.65556,
        0.11156,
        0,
        0.5
      ],
      49: [
        0,
        0.65556,
        0.11156,
        0,
        0.5
      ],
      50: [
        0,
        0.65556,
        0.11156,
        0,
        0.5
      ],
      51: [
        0,
        0.65556,
        0.11156,
        0,
        0.5
      ],
      52: [
        0,
        0.65556,
        0.11156,
        0,
        0.5
      ],
      53: [
        0,
        0.65556,
        0.11156,
        0,
        0.5
      ],
      54: [
        0,
        0.65556,
        0.11156,
        0,
        0.5
      ],
      55: [
        0,
        0.65556,
        0.11156,
        0,
        0.5
      ],
      56: [
        0,
        0.65556,
        0.11156,
        0,
        0.5
      ],
      57: [
        0,
        0.65556,
        0.11156,
        0,
        0.5
      ],
      58: [
        0,
        0.44444,
        0.02502,
        0,
        0.27778
      ],
      59: [
        0.125,
        0.44444,
        0.02502,
        0,
        0.27778
      ],
      61: [
        -0.13,
        0.37,
        0.05087,
        0,
        0.77778
      ],
      63: [
        0,
        0.69444,
        0.11809,
        0,
        0.47222
      ],
      64: [
        0,
        0.69444,
        0.07555,
        0,
        0.66667
      ],
      65: [
        0,
        0.69444,
        0,
        0,
        0.66667
      ],
      66: [
        0,
        0.69444,
        0.08293,
        0,
        0.66667
      ],
      67: [
        0,
        0.69444,
        0.11983,
        0,
        0.63889
      ],
      68: [
        0,
        0.69444,
        0.07555,
        0,
        0.72223
      ],
      69: [
        0,
        0.69444,
        0.11983,
        0,
        0.59722
      ],
      70: [
        0,
        0.69444,
        0.13372,
        0,
        0.56945
      ],
      71: [
        0,
        0.69444,
        0.11983,
        0,
        0.66667
      ],
      72: [
        0,
        0.69444,
        0.08094,
        0,
        0.70834
      ],
      73: [
        0,
        0.69444,
        0.13372,
        0,
        0.27778
      ],
      74: [
        0,
        0.69444,
        0.08094,
        0,
        0.47222
      ],
      75: [
        0,
        0.69444,
        0.11983,
        0,
        0.69445
      ],
      76: [
        0,
        0.69444,
        0,
        0,
        0.54167
      ],
      77: [
        0,
        0.69444,
        0.08094,
        0,
        0.875
      ],
      78: [
        0,
        0.69444,
        0.08094,
        0,
        0.70834
      ],
      79: [
        0,
        0.69444,
        0.07555,
        0,
        0.73611
      ],
      80: [
        0,
        0.69444,
        0.08293,
        0,
        0.63889
      ],
      81: [
        0.125,
        0.69444,
        0.07555,
        0,
        0.73611
      ],
      82: [
        0,
        0.69444,
        0.08293,
        0,
        0.64584
      ],
      83: [
        0,
        0.69444,
        0.09205,
        0,
        0.55556
      ],
      84: [
        0,
        0.69444,
        0.13372,
        0,
        0.68056
      ],
      85: [
        0,
        0.69444,
        0.08094,
        0,
        0.6875
      ],
      86: [
        0,
        0.69444,
        0.1615,
        0,
        0.66667
      ],
      87: [
        0,
        0.69444,
        0.1615,
        0,
        0.94445
      ],
      88: [
        0,
        0.69444,
        0.13372,
        0,
        0.66667
      ],
      89: [
        0,
        0.69444,
        0.17261,
        0,
        0.66667
      ],
      90: [
        0,
        0.69444,
        0.11983,
        0,
        0.61111
      ],
      91: [
        0.25,
        0.75,
        0.15942,
        0,
        0.28889
      ],
      93: [
        0.25,
        0.75,
        0.08719,
        0,
        0.28889
      ],
      94: [
        0,
        0.69444,
        0.0799,
        0,
        0.5
      ],
      95: [
        0.35,
        0.09444,
        0.08616,
        0,
        0.5
      ],
      97: [
        0,
        0.44444,
        981e-5,
        0,
        0.48056
      ],
      98: [
        0,
        0.69444,
        0.03057,
        0,
        0.51667
      ],
      99: [
        0,
        0.44444,
        0.08336,
        0,
        0.44445
      ],
      100: [
        0,
        0.69444,
        0.09483,
        0,
        0.51667
      ],
      101: [
        0,
        0.44444,
        0.06778,
        0,
        0.44445
      ],
      102: [
        0,
        0.69444,
        0.21705,
        0,
        0.30556
      ],
      103: [
        0.19444,
        0.44444,
        0.10836,
        0,
        0.5
      ],
      104: [
        0,
        0.69444,
        0.01778,
        0,
        0.51667
      ],
      105: [
        0,
        0.67937,
        0.09718,
        0,
        0.23889
      ],
      106: [
        0.19444,
        0.67937,
        0.09162,
        0,
        0.26667
      ],
      107: [
        0,
        0.69444,
        0.08336,
        0,
        0.48889
      ],
      108: [
        0,
        0.69444,
        0.09483,
        0,
        0.23889
      ],
      109: [
        0,
        0.44444,
        0.01778,
        0,
        0.79445
      ],
      110: [
        0,
        0.44444,
        0.01778,
        0,
        0.51667
      ],
      111: [
        0,
        0.44444,
        0.06613,
        0,
        0.5
      ],
      112: [
        0.19444,
        0.44444,
        0.0389,
        0,
        0.51667
      ],
      113: [
        0.19444,
        0.44444,
        0.04169,
        0,
        0.51667
      ],
      114: [
        0,
        0.44444,
        0.10836,
        0,
        0.34167
      ],
      115: [
        0,
        0.44444,
        0.0778,
        0,
        0.38333
      ],
      116: [
        0,
        0.57143,
        0.07225,
        0,
        0.36111
      ],
      117: [
        0,
        0.44444,
        0.04169,
        0,
        0.51667
      ],
      118: [
        0,
        0.44444,
        0.10836,
        0,
        0.46111
      ],
      119: [
        0,
        0.44444,
        0.10836,
        0,
        0.68334
      ],
      120: [
        0,
        0.44444,
        0.09169,
        0,
        0.46111
      ],
      121: [
        0.19444,
        0.44444,
        0.10836,
        0,
        0.46111
      ],
      122: [
        0,
        0.44444,
        0.08752,
        0,
        0.43472
      ],
      126: [
        0.35,
        0.32659,
        0.08826,
        0,
        0.5
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      168: [
        0,
        0.67937,
        0.06385,
        0,
        0.5
      ],
      176: [
        0,
        0.69444,
        0,
        0,
        0.73752
      ],
      184: [
        0.17014,
        0,
        0,
        0,
        0.44445
      ],
      305: [
        0,
        0.44444,
        0.04169,
        0,
        0.23889
      ],
      567: [
        0.19444,
        0.44444,
        0.04169,
        0,
        0.26667
      ],
      710: [
        0,
        0.69444,
        0.0799,
        0,
        0.5
      ],
      711: [
        0,
        0.63194,
        0.08432,
        0,
        0.5
      ],
      713: [
        0,
        0.60889,
        0.08776,
        0,
        0.5
      ],
      714: [
        0,
        0.69444,
        0.09205,
        0,
        0.5
      ],
      715: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      728: [
        0,
        0.69444,
        0.09483,
        0,
        0.5
      ],
      729: [
        0,
        0.67937,
        0.07774,
        0,
        0.27778
      ],
      730: [
        0,
        0.69444,
        0,
        0,
        0.73752
      ],
      732: [
        0,
        0.67659,
        0.08826,
        0,
        0.5
      ],
      733: [
        0,
        0.69444,
        0.09205,
        0,
        0.5
      ],
      915: [
        0,
        0.69444,
        0.13372,
        0,
        0.54167
      ],
      916: [
        0,
        0.69444,
        0,
        0,
        0.83334
      ],
      920: [
        0,
        0.69444,
        0.07555,
        0,
        0.77778
      ],
      923: [
        0,
        0.69444,
        0,
        0,
        0.61111
      ],
      926: [
        0,
        0.69444,
        0.12816,
        0,
        0.66667
      ],
      928: [
        0,
        0.69444,
        0.08094,
        0,
        0.70834
      ],
      931: [
        0,
        0.69444,
        0.11983,
        0,
        0.72222
      ],
      933: [
        0,
        0.69444,
        0.09031,
        0,
        0.77778
      ],
      934: [
        0,
        0.69444,
        0.04603,
        0,
        0.72222
      ],
      936: [
        0,
        0.69444,
        0.09031,
        0,
        0.77778
      ],
      937: [
        0,
        0.69444,
        0.08293,
        0,
        0.72222
      ],
      8211: [
        0,
        0.44444,
        0.08616,
        0,
        0.5
      ],
      8212: [
        0,
        0.44444,
        0.08616,
        0,
        1
      ],
      8216: [
        0,
        0.69444,
        0.07816,
        0,
        0.27778
      ],
      8217: [
        0,
        0.69444,
        0.07816,
        0,
        0.27778
      ],
      8220: [
        0,
        0.69444,
        0.14205,
        0,
        0.5
      ],
      8221: [
        0,
        0.69444,
        316e-5,
        0,
        0.5
      ]
    },
    "SansSerif-Regular": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      33: [
        0,
        0.69444,
        0,
        0,
        0.31945
      ],
      34: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      35: [
        0.19444,
        0.69444,
        0,
        0,
        0.83334
      ],
      36: [
        0.05556,
        0.75,
        0,
        0,
        0.5
      ],
      37: [
        0.05556,
        0.75,
        0,
        0,
        0.83334
      ],
      38: [
        0,
        0.69444,
        0,
        0,
        0.75834
      ],
      39: [
        0,
        0.69444,
        0,
        0,
        0.27778
      ],
      40: [
        0.25,
        0.75,
        0,
        0,
        0.38889
      ],
      41: [
        0.25,
        0.75,
        0,
        0,
        0.38889
      ],
      42: [
        0,
        0.75,
        0,
        0,
        0.5
      ],
      43: [
        0.08333,
        0.58333,
        0,
        0,
        0.77778
      ],
      44: [
        0.125,
        0.08333,
        0,
        0,
        0.27778
      ],
      45: [
        0,
        0.44444,
        0,
        0,
        0.33333
      ],
      46: [
        0,
        0.08333,
        0,
        0,
        0.27778
      ],
      47: [
        0.25,
        0.75,
        0,
        0,
        0.5
      ],
      48: [
        0,
        0.65556,
        0,
        0,
        0.5
      ],
      49: [
        0,
        0.65556,
        0,
        0,
        0.5
      ],
      50: [
        0,
        0.65556,
        0,
        0,
        0.5
      ],
      51: [
        0,
        0.65556,
        0,
        0,
        0.5
      ],
      52: [
        0,
        0.65556,
        0,
        0,
        0.5
      ],
      53: [
        0,
        0.65556,
        0,
        0,
        0.5
      ],
      54: [
        0,
        0.65556,
        0,
        0,
        0.5
      ],
      55: [
        0,
        0.65556,
        0,
        0,
        0.5
      ],
      56: [
        0,
        0.65556,
        0,
        0,
        0.5
      ],
      57: [
        0,
        0.65556,
        0,
        0,
        0.5
      ],
      58: [
        0,
        0.44444,
        0,
        0,
        0.27778
      ],
      59: [
        0.125,
        0.44444,
        0,
        0,
        0.27778
      ],
      61: [
        -0.13,
        0.37,
        0,
        0,
        0.77778
      ],
      63: [
        0,
        0.69444,
        0,
        0,
        0.47222
      ],
      64: [
        0,
        0.69444,
        0,
        0,
        0.66667
      ],
      65: [
        0,
        0.69444,
        0,
        0,
        0.66667
      ],
      66: [
        0,
        0.69444,
        0,
        0,
        0.66667
      ],
      67: [
        0,
        0.69444,
        0,
        0,
        0.63889
      ],
      68: [
        0,
        0.69444,
        0,
        0,
        0.72223
      ],
      69: [
        0,
        0.69444,
        0,
        0,
        0.59722
      ],
      70: [
        0,
        0.69444,
        0,
        0,
        0.56945
      ],
      71: [
        0,
        0.69444,
        0,
        0,
        0.66667
      ],
      72: [
        0,
        0.69444,
        0,
        0,
        0.70834
      ],
      73: [
        0,
        0.69444,
        0,
        0,
        0.27778
      ],
      74: [
        0,
        0.69444,
        0,
        0,
        0.47222
      ],
      75: [
        0,
        0.69444,
        0,
        0,
        0.69445
      ],
      76: [
        0,
        0.69444,
        0,
        0,
        0.54167
      ],
      77: [
        0,
        0.69444,
        0,
        0,
        0.875
      ],
      78: [
        0,
        0.69444,
        0,
        0,
        0.70834
      ],
      79: [
        0,
        0.69444,
        0,
        0,
        0.73611
      ],
      80: [
        0,
        0.69444,
        0,
        0,
        0.63889
      ],
      81: [
        0.125,
        0.69444,
        0,
        0,
        0.73611
      ],
      82: [
        0,
        0.69444,
        0,
        0,
        0.64584
      ],
      83: [
        0,
        0.69444,
        0,
        0,
        0.55556
      ],
      84: [
        0,
        0.69444,
        0,
        0,
        0.68056
      ],
      85: [
        0,
        0.69444,
        0,
        0,
        0.6875
      ],
      86: [
        0,
        0.69444,
        0.01389,
        0,
        0.66667
      ],
      87: [
        0,
        0.69444,
        0.01389,
        0,
        0.94445
      ],
      88: [
        0,
        0.69444,
        0,
        0,
        0.66667
      ],
      89: [
        0,
        0.69444,
        0.025,
        0,
        0.66667
      ],
      90: [
        0,
        0.69444,
        0,
        0,
        0.61111
      ],
      91: [
        0.25,
        0.75,
        0,
        0,
        0.28889
      ],
      93: [
        0.25,
        0.75,
        0,
        0,
        0.28889
      ],
      94: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      95: [
        0.35,
        0.09444,
        0.02778,
        0,
        0.5
      ],
      97: [
        0,
        0.44444,
        0,
        0,
        0.48056
      ],
      98: [
        0,
        0.69444,
        0,
        0,
        0.51667
      ],
      99: [
        0,
        0.44444,
        0,
        0,
        0.44445
      ],
      100: [
        0,
        0.69444,
        0,
        0,
        0.51667
      ],
      101: [
        0,
        0.44444,
        0,
        0,
        0.44445
      ],
      102: [
        0,
        0.69444,
        0.06944,
        0,
        0.30556
      ],
      103: [
        0.19444,
        0.44444,
        0.01389,
        0,
        0.5
      ],
      104: [
        0,
        0.69444,
        0,
        0,
        0.51667
      ],
      105: [
        0,
        0.67937,
        0,
        0,
        0.23889
      ],
      106: [
        0.19444,
        0.67937,
        0,
        0,
        0.26667
      ],
      107: [
        0,
        0.69444,
        0,
        0,
        0.48889
      ],
      108: [
        0,
        0.69444,
        0,
        0,
        0.23889
      ],
      109: [
        0,
        0.44444,
        0,
        0,
        0.79445
      ],
      110: [
        0,
        0.44444,
        0,
        0,
        0.51667
      ],
      111: [
        0,
        0.44444,
        0,
        0,
        0.5
      ],
      112: [
        0.19444,
        0.44444,
        0,
        0,
        0.51667
      ],
      113: [
        0.19444,
        0.44444,
        0,
        0,
        0.51667
      ],
      114: [
        0,
        0.44444,
        0.01389,
        0,
        0.34167
      ],
      115: [
        0,
        0.44444,
        0,
        0,
        0.38333
      ],
      116: [
        0,
        0.57143,
        0,
        0,
        0.36111
      ],
      117: [
        0,
        0.44444,
        0,
        0,
        0.51667
      ],
      118: [
        0,
        0.44444,
        0.01389,
        0,
        0.46111
      ],
      119: [
        0,
        0.44444,
        0.01389,
        0,
        0.68334
      ],
      120: [
        0,
        0.44444,
        0,
        0,
        0.46111
      ],
      121: [
        0.19444,
        0.44444,
        0.01389,
        0,
        0.46111
      ],
      122: [
        0,
        0.44444,
        0,
        0,
        0.43472
      ],
      126: [
        0.35,
        0.32659,
        0,
        0,
        0.5
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      168: [
        0,
        0.67937,
        0,
        0,
        0.5
      ],
      176: [
        0,
        0.69444,
        0,
        0,
        0.66667
      ],
      184: [
        0.17014,
        0,
        0,
        0,
        0.44445
      ],
      305: [
        0,
        0.44444,
        0,
        0,
        0.23889
      ],
      567: [
        0.19444,
        0.44444,
        0,
        0,
        0.26667
      ],
      710: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      711: [
        0,
        0.63194,
        0,
        0,
        0.5
      ],
      713: [
        0,
        0.60889,
        0,
        0,
        0.5
      ],
      714: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      715: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      728: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      729: [
        0,
        0.67937,
        0,
        0,
        0.27778
      ],
      730: [
        0,
        0.69444,
        0,
        0,
        0.66667
      ],
      732: [
        0,
        0.67659,
        0,
        0,
        0.5
      ],
      733: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      915: [
        0,
        0.69444,
        0,
        0,
        0.54167
      ],
      916: [
        0,
        0.69444,
        0,
        0,
        0.83334
      ],
      920: [
        0,
        0.69444,
        0,
        0,
        0.77778
      ],
      923: [
        0,
        0.69444,
        0,
        0,
        0.61111
      ],
      926: [
        0,
        0.69444,
        0,
        0,
        0.66667
      ],
      928: [
        0,
        0.69444,
        0,
        0,
        0.70834
      ],
      931: [
        0,
        0.69444,
        0,
        0,
        0.72222
      ],
      933: [
        0,
        0.69444,
        0,
        0,
        0.77778
      ],
      934: [
        0,
        0.69444,
        0,
        0,
        0.72222
      ],
      936: [
        0,
        0.69444,
        0,
        0,
        0.77778
      ],
      937: [
        0,
        0.69444,
        0,
        0,
        0.72222
      ],
      8211: [
        0,
        0.44444,
        0.02778,
        0,
        0.5
      ],
      8212: [
        0,
        0.44444,
        0.02778,
        0,
        1
      ],
      8216: [
        0,
        0.69444,
        0,
        0,
        0.27778
      ],
      8217: [
        0,
        0.69444,
        0,
        0,
        0.27778
      ],
      8220: [
        0,
        0.69444,
        0,
        0,
        0.5
      ],
      8221: [
        0,
        0.69444,
        0,
        0,
        0.5
      ]
    },
    "Script-Regular": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      65: [
        0,
        0.7,
        0.22925,
        0,
        0.80253
      ],
      66: [
        0,
        0.7,
        0.04087,
        0,
        0.90757
      ],
      67: [
        0,
        0.7,
        0.1689,
        0,
        0.66619
      ],
      68: [
        0,
        0.7,
        0.09371,
        0,
        0.77443
      ],
      69: [
        0,
        0.7,
        0.18583,
        0,
        0.56162
      ],
      70: [
        0,
        0.7,
        0.13634,
        0,
        0.89544
      ],
      71: [
        0,
        0.7,
        0.17322,
        0,
        0.60961
      ],
      72: [
        0,
        0.7,
        0.29694,
        0,
        0.96919
      ],
      73: [
        0,
        0.7,
        0.19189,
        0,
        0.80907
      ],
      74: [
        0.27778,
        0.7,
        0.19189,
        0,
        1.05159
      ],
      75: [
        0,
        0.7,
        0.31259,
        0,
        0.91364
      ],
      76: [
        0,
        0.7,
        0.19189,
        0,
        0.87373
      ],
      77: [
        0,
        0.7,
        0.15981,
        0,
        1.08031
      ],
      78: [
        0,
        0.7,
        0.3525,
        0,
        0.9015
      ],
      79: [
        0,
        0.7,
        0.08078,
        0,
        0.73787
      ],
      80: [
        0,
        0.7,
        0.08078,
        0,
        1.01262
      ],
      81: [
        0,
        0.7,
        0.03305,
        0,
        0.88282
      ],
      82: [
        0,
        0.7,
        0.06259,
        0,
        0.85
      ],
      83: [
        0,
        0.7,
        0.19189,
        0,
        0.86767
      ],
      84: [
        0,
        0.7,
        0.29087,
        0,
        0.74697
      ],
      85: [
        0,
        0.7,
        0.25815,
        0,
        0.79996
      ],
      86: [
        0,
        0.7,
        0.27523,
        0,
        0.62204
      ],
      87: [
        0,
        0.7,
        0.27523,
        0,
        0.80532
      ],
      88: [
        0,
        0.7,
        0.26006,
        0,
        0.94445
      ],
      89: [
        0,
        0.7,
        0.2939,
        0,
        0.70961
      ],
      90: [
        0,
        0.7,
        0.24037,
        0,
        0.8212
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ]
    },
    "Size1-Regular": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      40: [
        0.35001,
        0.85,
        0,
        0,
        0.45834
      ],
      41: [
        0.35001,
        0.85,
        0,
        0,
        0.45834
      ],
      47: [
        0.35001,
        0.85,
        0,
        0,
        0.57778
      ],
      91: [
        0.35001,
        0.85,
        0,
        0,
        0.41667
      ],
      92: [
        0.35001,
        0.85,
        0,
        0,
        0.57778
      ],
      93: [
        0.35001,
        0.85,
        0,
        0,
        0.41667
      ],
      123: [
        0.35001,
        0.85,
        0,
        0,
        0.58334
      ],
      125: [
        0.35001,
        0.85,
        0,
        0,
        0.58334
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      710: [
        0,
        0.72222,
        0,
        0,
        0.55556
      ],
      732: [
        0,
        0.72222,
        0,
        0,
        0.55556
      ],
      770: [
        0,
        0.72222,
        0,
        0,
        0.55556
      ],
      771: [
        0,
        0.72222,
        0,
        0,
        0.55556
      ],
      8214: [
        -99e-5,
        0.601,
        0,
        0,
        0.77778
      ],
      8593: [
        1e-5,
        0.6,
        0,
        0,
        0.66667
      ],
      8595: [
        1e-5,
        0.6,
        0,
        0,
        0.66667
      ],
      8657: [
        1e-5,
        0.6,
        0,
        0,
        0.77778
      ],
      8659: [
        1e-5,
        0.6,
        0,
        0,
        0.77778
      ],
      8719: [
        0.25001,
        0.75,
        0,
        0,
        0.94445
      ],
      8720: [
        0.25001,
        0.75,
        0,
        0,
        0.94445
      ],
      8721: [
        0.25001,
        0.75,
        0,
        0,
        1.05556
      ],
      8730: [
        0.35001,
        0.85,
        0,
        0,
        1
      ],
      8739: [
        -599e-5,
        0.606,
        0,
        0,
        0.33333
      ],
      8741: [
        -599e-5,
        0.606,
        0,
        0,
        0.55556
      ],
      8747: [
        0.30612,
        0.805,
        0.19445,
        0,
        0.47222
      ],
      8748: [
        0.306,
        0.805,
        0.19445,
        0,
        0.47222
      ],
      8749: [
        0.306,
        0.805,
        0.19445,
        0,
        0.47222
      ],
      8750: [
        0.30612,
        0.805,
        0.19445,
        0,
        0.47222
      ],
      8896: [
        0.25001,
        0.75,
        0,
        0,
        0.83334
      ],
      8897: [
        0.25001,
        0.75,
        0,
        0,
        0.83334
      ],
      8898: [
        0.25001,
        0.75,
        0,
        0,
        0.83334
      ],
      8899: [
        0.25001,
        0.75,
        0,
        0,
        0.83334
      ],
      8968: [
        0.35001,
        0.85,
        0,
        0,
        0.47222
      ],
      8969: [
        0.35001,
        0.85,
        0,
        0,
        0.47222
      ],
      8970: [
        0.35001,
        0.85,
        0,
        0,
        0.47222
      ],
      8971: [
        0.35001,
        0.85,
        0,
        0,
        0.47222
      ],
      9168: [
        -99e-5,
        0.601,
        0,
        0,
        0.66667
      ],
      10216: [
        0.35001,
        0.85,
        0,
        0,
        0.47222
      ],
      10217: [
        0.35001,
        0.85,
        0,
        0,
        0.47222
      ],
      10752: [
        0.25001,
        0.75,
        0,
        0,
        1.11111
      ],
      10753: [
        0.25001,
        0.75,
        0,
        0,
        1.11111
      ],
      10754: [
        0.25001,
        0.75,
        0,
        0,
        1.11111
      ],
      10756: [
        0.25001,
        0.75,
        0,
        0,
        0.83334
      ],
      10758: [
        0.25001,
        0.75,
        0,
        0,
        0.83334
      ]
    },
    "Size2-Regular": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      40: [
        0.65002,
        1.15,
        0,
        0,
        0.59722
      ],
      41: [
        0.65002,
        1.15,
        0,
        0,
        0.59722
      ],
      47: [
        0.65002,
        1.15,
        0,
        0,
        0.81111
      ],
      91: [
        0.65002,
        1.15,
        0,
        0,
        0.47222
      ],
      92: [
        0.65002,
        1.15,
        0,
        0,
        0.81111
      ],
      93: [
        0.65002,
        1.15,
        0,
        0,
        0.47222
      ],
      123: [
        0.65002,
        1.15,
        0,
        0,
        0.66667
      ],
      125: [
        0.65002,
        1.15,
        0,
        0,
        0.66667
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      710: [
        0,
        0.75,
        0,
        0,
        1
      ],
      732: [
        0,
        0.75,
        0,
        0,
        1
      ],
      770: [
        0,
        0.75,
        0,
        0,
        1
      ],
      771: [
        0,
        0.75,
        0,
        0,
        1
      ],
      8719: [
        0.55001,
        1.05,
        0,
        0,
        1.27778
      ],
      8720: [
        0.55001,
        1.05,
        0,
        0,
        1.27778
      ],
      8721: [
        0.55001,
        1.05,
        0,
        0,
        1.44445
      ],
      8730: [
        0.65002,
        1.15,
        0,
        0,
        1
      ],
      8747: [
        0.86225,
        1.36,
        0.44445,
        0,
        0.55556
      ],
      8748: [
        0.862,
        1.36,
        0.44445,
        0,
        0.55556
      ],
      8749: [
        0.862,
        1.36,
        0.44445,
        0,
        0.55556
      ],
      8750: [
        0.86225,
        1.36,
        0.44445,
        0,
        0.55556
      ],
      8896: [
        0.55001,
        1.05,
        0,
        0,
        1.11111
      ],
      8897: [
        0.55001,
        1.05,
        0,
        0,
        1.11111
      ],
      8898: [
        0.55001,
        1.05,
        0,
        0,
        1.11111
      ],
      8899: [
        0.55001,
        1.05,
        0,
        0,
        1.11111
      ],
      8968: [
        0.65002,
        1.15,
        0,
        0,
        0.52778
      ],
      8969: [
        0.65002,
        1.15,
        0,
        0,
        0.52778
      ],
      8970: [
        0.65002,
        1.15,
        0,
        0,
        0.52778
      ],
      8971: [
        0.65002,
        1.15,
        0,
        0,
        0.52778
      ],
      10216: [
        0.65002,
        1.15,
        0,
        0,
        0.61111
      ],
      10217: [
        0.65002,
        1.15,
        0,
        0,
        0.61111
      ],
      10752: [
        0.55001,
        1.05,
        0,
        0,
        1.51112
      ],
      10753: [
        0.55001,
        1.05,
        0,
        0,
        1.51112
      ],
      10754: [
        0.55001,
        1.05,
        0,
        0,
        1.51112
      ],
      10756: [
        0.55001,
        1.05,
        0,
        0,
        1.11111
      ],
      10758: [
        0.55001,
        1.05,
        0,
        0,
        1.11111
      ]
    },
    "Size3-Regular": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      40: [
        0.95003,
        1.45,
        0,
        0,
        0.73611
      ],
      41: [
        0.95003,
        1.45,
        0,
        0,
        0.73611
      ],
      47: [
        0.95003,
        1.45,
        0,
        0,
        1.04445
      ],
      91: [
        0.95003,
        1.45,
        0,
        0,
        0.52778
      ],
      92: [
        0.95003,
        1.45,
        0,
        0,
        1.04445
      ],
      93: [
        0.95003,
        1.45,
        0,
        0,
        0.52778
      ],
      123: [
        0.95003,
        1.45,
        0,
        0,
        0.75
      ],
      125: [
        0.95003,
        1.45,
        0,
        0,
        0.75
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      710: [
        0,
        0.75,
        0,
        0,
        1.44445
      ],
      732: [
        0,
        0.75,
        0,
        0,
        1.44445
      ],
      770: [
        0,
        0.75,
        0,
        0,
        1.44445
      ],
      771: [
        0,
        0.75,
        0,
        0,
        1.44445
      ],
      8730: [
        0.95003,
        1.45,
        0,
        0,
        1
      ],
      8968: [
        0.95003,
        1.45,
        0,
        0,
        0.58334
      ],
      8969: [
        0.95003,
        1.45,
        0,
        0,
        0.58334
      ],
      8970: [
        0.95003,
        1.45,
        0,
        0,
        0.58334
      ],
      8971: [
        0.95003,
        1.45,
        0,
        0,
        0.58334
      ],
      10216: [
        0.95003,
        1.45,
        0,
        0,
        0.75
      ],
      10217: [
        0.95003,
        1.45,
        0,
        0,
        0.75
      ]
    },
    "Size4-Regular": {
      32: [
        0,
        0,
        0,
        0,
        0.25
      ],
      40: [
        1.25003,
        1.75,
        0,
        0,
        0.79167
      ],
      41: [
        1.25003,
        1.75,
        0,
        0,
        0.79167
      ],
      47: [
        1.25003,
        1.75,
        0,
        0,
        1.27778
      ],
      91: [
        1.25003,
        1.75,
        0,
        0,
        0.58334
      ],
      92: [
        1.25003,
        1.75,
        0,
        0,
        1.27778
      ],
      93: [
        1.25003,
        1.75,
        0,
        0,
        0.58334
      ],
      123: [
        1.25003,
        1.75,
        0,
        0,
        0.80556
      ],
      125: [
        1.25003,
        1.75,
        0,
        0,
        0.80556
      ],
      160: [
        0,
        0,
        0,
        0,
        0.25
      ],
      710: [
        0,
        0.825,
        0,
        0,
        1.8889
      ],
      732: [
        0,
        0.825,
        0,
        0,
        1.8889
      ],
      770: [
        0,
        0.825,
        0,
        0,
        1.8889
      ],
      771: [
        0,
        0.825,
        0,
        0,
        1.8889
      ],
      8730: [
        1.25003,
        1.75,
        0,
        0,
        1
      ],
      8968: [
        1.25003,
        1.75,
        0,
        0,
        0.63889
      ],
      8969: [
        1.25003,
        1.75,
        0,
        0,
        0.63889
      ],
      8970: [
        1.25003,
        1.75,
        0,
        0,
        0.63889
      ],
      8971: [
        1.25003,
        1.75,
        0,
        0,
        0.63889
      ],
      9115: [
        0.64502,
        1.155,
        0,
        0,
        0.875
      ],
      9116: [
        1e-5,
        0.6,
        0,
        0,
        0.875
      ],
      9117: [
        0.64502,
        1.155,
        0,
        0,
        0.875
      ],
      9118: [
        0.64502,
        1.155,
        0,
        0,
        0.875
      ],
      9119: [
        1e-5,
        0.6,
        0,
        0,
        0.875
      ],
      9120: [
        0.64502,
        1.155,
        0,
        0,
        0.875
      ],
      9121: [
        0.64502,
        1.155,
        0,
        0,
        0.66667
      ],
      9122: [
        -99e-5,
        0.601,
        0,
        0,
        0.66667
      ],
      9123: [
        0.64502,
        1.155,
        0,
        0,
        0.66667
      ],
      9124: [
        0.64502,
        1.155,
        0,
        0,
        0.66667
      ],
      9125: [
        -99e-5,
        0.601,
        0,
        0,
        0.66667
      ],
      9126: [
        0.64502,
        1.155,
        0,
        0,
        0.66667
      ],
      9127: [
        1e-5,
        0.9,
        0,
        0,
        0.88889
      ],
      9128: [
        0.65002,
        1.15,
        0,
        0,
        0.88889
      ],
      9129: [
        0.90001,
        0,
        0,
        0,
        0.88889
      ],
      9130: [
        0,
        0.3,
        0,
        0,
        0.88889
      ],
      9131: [
        1e-5,
        0.9,
        0,
        0,
        0.88889
      ],
      9132: [
        0.65002,
        1.15,
        0,
        0,
        0.88889
      ],
      9133: [
        0.90001,
        0,
        0,
        0,
        0.88889
      ],
      9143: [
        0.88502,
        0.915,
        0,
        0,
        1.05556
      ],
      10216: [
        1.25003,
        1.75,
        0,
        0,
        0.80556
      ],
      10217: [
        1.25003,
        1.75,
        0,
        0,
        0.80556
      ],
      57344: [
        -499e-5,
        0.605,
        0,
        0,
        1.05556
      ],
      57345: [
        -499e-5,
        0.605,
        0,
        0,
        1.05556
      ],
      57680: [
        0,
        0.12,
        0,
        0,
        0.45
      ],
      57681: [
        0,
        0.12,
        0,
        0,
        0.45
      ],
      57682: [
        0,
        0.12,
        0,
        0,
        0.45
      ],
      57683: [
        0,
        0.12,
        0,
        0,
        0.45
      ]
    },
    "Typewriter-Regular": {
      32: [
        0,
        0,
        0,
        0,
        0.525
      ],
      33: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      34: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      35: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      36: [
        0.08333,
        0.69444,
        0,
        0,
        0.525
      ],
      37: [
        0.08333,
        0.69444,
        0,
        0,
        0.525
      ],
      38: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      39: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      40: [
        0.08333,
        0.69444,
        0,
        0,
        0.525
      ],
      41: [
        0.08333,
        0.69444,
        0,
        0,
        0.525
      ],
      42: [
        0,
        0.52083,
        0,
        0,
        0.525
      ],
      43: [
        -0.08056,
        0.53055,
        0,
        0,
        0.525
      ],
      44: [
        0.13889,
        0.125,
        0,
        0,
        0.525
      ],
      45: [
        -0.08056,
        0.53055,
        0,
        0,
        0.525
      ],
      46: [
        0,
        0.125,
        0,
        0,
        0.525
      ],
      47: [
        0.08333,
        0.69444,
        0,
        0,
        0.525
      ],
      48: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      49: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      50: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      51: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      52: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      53: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      54: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      55: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      56: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      57: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      58: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      59: [
        0.13889,
        0.43056,
        0,
        0,
        0.525
      ],
      60: [
        -0.05556,
        0.55556,
        0,
        0,
        0.525
      ],
      61: [
        -0.19549,
        0.41562,
        0,
        0,
        0.525
      ],
      62: [
        -0.05556,
        0.55556,
        0,
        0,
        0.525
      ],
      63: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      64: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      65: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      66: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      67: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      68: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      69: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      70: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      71: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      72: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      73: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      74: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      75: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      76: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      77: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      78: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      79: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      80: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      81: [
        0.13889,
        0.61111,
        0,
        0,
        0.525
      ],
      82: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      83: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      84: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      85: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      86: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      87: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      88: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      89: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      90: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      91: [
        0.08333,
        0.69444,
        0,
        0,
        0.525
      ],
      92: [
        0.08333,
        0.69444,
        0,
        0,
        0.525
      ],
      93: [
        0.08333,
        0.69444,
        0,
        0,
        0.525
      ],
      94: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      95: [
        0.09514,
        0,
        0,
        0,
        0.525
      ],
      96: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      97: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      98: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      99: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      100: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      101: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      102: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      103: [
        0.22222,
        0.43056,
        0,
        0,
        0.525
      ],
      104: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      105: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      106: [
        0.22222,
        0.61111,
        0,
        0,
        0.525
      ],
      107: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      108: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      109: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      110: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      111: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      112: [
        0.22222,
        0.43056,
        0,
        0,
        0.525
      ],
      113: [
        0.22222,
        0.43056,
        0,
        0,
        0.525
      ],
      114: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      115: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      116: [
        0,
        0.55358,
        0,
        0,
        0.525
      ],
      117: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      118: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      119: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      120: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      121: [
        0.22222,
        0.43056,
        0,
        0,
        0.525
      ],
      122: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      123: [
        0.08333,
        0.69444,
        0,
        0,
        0.525
      ],
      124: [
        0.08333,
        0.69444,
        0,
        0,
        0.525
      ],
      125: [
        0.08333,
        0.69444,
        0,
        0,
        0.525
      ],
      126: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      127: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      160: [
        0,
        0,
        0,
        0,
        0.525
      ],
      176: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      184: [
        0.19445,
        0,
        0,
        0,
        0.525
      ],
      305: [
        0,
        0.43056,
        0,
        0,
        0.525
      ],
      567: [
        0.22222,
        0.43056,
        0,
        0,
        0.525
      ],
      711: [
        0,
        0.56597,
        0,
        0,
        0.525
      ],
      713: [
        0,
        0.56555,
        0,
        0,
        0.525
      ],
      714: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      715: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      728: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      730: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      770: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      771: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      776: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      915: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      916: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      920: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      923: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      926: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      928: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      931: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      933: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      934: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      936: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      937: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      8216: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      8217: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      8242: [
        0,
        0.61111,
        0,
        0,
        0.525
      ],
      9251: [
        0.11111,
        0.21944,
        0,
        0,
        0.525
      ]
    }
  }, za = {
    slant: [
      0.25,
      0.25,
      0.25
    ],
    space: [
      0,
      0,
      0
    ],
    stretch: [
      0,
      0,
      0
    ],
    shrink: [
      0,
      0,
      0
    ],
    xHeight: [
      0.431,
      0.431,
      0.431
    ],
    quad: [
      1,
      1.171,
      1.472
    ],
    extraSpace: [
      0,
      0,
      0
    ],
    num1: [
      0.677,
      0.732,
      0.925
    ],
    num2: [
      0.394,
      0.384,
      0.387
    ],
    num3: [
      0.444,
      0.471,
      0.504
    ],
    denom1: [
      0.686,
      0.752,
      1.025
    ],
    denom2: [
      0.345,
      0.344,
      0.532
    ],
    sup1: [
      0.413,
      0.503,
      0.504
    ],
    sup2: [
      0.363,
      0.431,
      0.404
    ],
    sup3: [
      0.289,
      0.286,
      0.294
    ],
    sub1: [
      0.15,
      0.143,
      0.2
    ],
    sub2: [
      0.247,
      0.286,
      0.4
    ],
    supDrop: [
      0.386,
      0.353,
      0.494
    ],
    subDrop: [
      0.05,
      0.071,
      0.1
    ],
    delim1: [
      2.39,
      1.7,
      1.98
    ],
    delim2: [
      1.01,
      1.157,
      1.42
    ],
    axisHeight: [
      0.25,
      0.25,
      0.25
    ],
    defaultRuleThickness: [
      0.04,
      0.049,
      0.049
    ],
    bigOpSpacing1: [
      0.111,
      0.111,
      0.111
    ],
    bigOpSpacing2: [
      0.166,
      0.166,
      0.166
    ],
    bigOpSpacing3: [
      0.2,
      0.2,
      0.2
    ],
    bigOpSpacing4: [
      0.6,
      0.611,
      0.611
    ],
    bigOpSpacing5: [
      0.1,
      0.143,
      0.143
    ],
    sqrtRuleThickness: [
      0.04,
      0.04,
      0.04
    ],
    ptPerEm: [
      10,
      10,
      10
    ],
    doubleRuleSep: [
      0.2,
      0.2,
      0.2
    ],
    arrayRuleWidth: [
      0.04,
      0.04,
      0.04
    ],
    fboxsep: [
      0.3,
      0.3,
      0.3
    ],
    fboxrule: [
      0.04,
      0.04,
      0.04
    ]
  }, hr = {
    \u00C5: "A",
    \u00D0: "D",
    \u00DE: "o",
    \u00E5: "a",
    \u00F0: "d",
    \u00FE: "o",
    \u0410: "A",
    \u0411: "B",
    \u0412: "B",
    \u0413: "F",
    \u0414: "A",
    \u0415: "E",
    \u0416: "K",
    \u0417: "3",
    \u0418: "N",
    \u0419: "N",
    \u041A: "K",
    \u041B: "N",
    \u041C: "M",
    \u041D: "H",
    \u041E: "O",
    \u041F: "N",
    \u0420: "P",
    \u0421: "C",
    \u0422: "T",
    \u0423: "y",
    \u0424: "O",
    \u0425: "X",
    \u0426: "U",
    \u0427: "h",
    \u0428: "W",
    \u0429: "W",
    \u042A: "B",
    \u042B: "X",
    \u042C: "B",
    \u042D: "3",
    \u042E: "X",
    \u042F: "R",
    \u0430: "a",
    \u0431: "b",
    \u0432: "a",
    \u0433: "r",
    \u0434: "y",
    \u0435: "e",
    \u0436: "m",
    \u0437: "e",
    \u0438: "n",
    \u0439: "n",
    \u043A: "n",
    \u043B: "n",
    \u043C: "m",
    \u043D: "n",
    \u043E: "o",
    \u043F: "n",
    \u0440: "p",
    \u0441: "c",
    \u0442: "o",
    \u0443: "y",
    \u0444: "b",
    \u0445: "x",
    \u0446: "n",
    \u0447: "n",
    \u0448: "w",
    \u0449: "w",
    \u044A: "a",
    \u044B: "m",
    \u044C: "a",
    \u044D: "e",
    \u044E: "m",
    \u044F: "r"
  };
  function fS(t, e) {
    be[t] = e;
  }
  function Nt(t, e, a) {
    if (!be[e]) throw new Error("Font metrics not found for font: " + e + ".");
    var r = t.charCodeAt(0), s = be[e][r];
    if (!s && t[0] in hr && (r = hr[t[0]].charCodeAt(0), s = be[e][r]), !s && a === "text" && Wr(r) && (s = be[e][77]), s) return {
      depth: s[0],
      height: s[1],
      italic: s[2],
      skew: s[3],
      width: s[4]
    };
  }
  var tt = {};
  function uS(t) {
    var e;
    if (t >= 5 ? e = 0 : t >= 3 ? e = 1 : e = 2, !tt[e]) {
      var a = tt[e] = {
        cssEmPerMu: za.quad[e] / 18
      };
      for (var r in za) za.hasOwnProperty(r) && (a[r] = za[r][e]);
    }
    return tt[e];
  }
  var hS = {
    bin: 1,
    close: 1,
    inner: 1,
    open: 1,
    punct: 1,
    rel: 1
  }, dS = {
    "accent-token": 1,
    mathord: 1,
    "op-token": 1,
    spacing: 1,
    textord: 1
  }, W = {
    math: {},
    text: {}
  };
  function o(t, e, a, r, s, n) {
    W[t][s] = {
      font: e,
      group: a,
      replace: r
    }, n && r && (W[t][r] = W[t][s]);
  }
  var c = "math", M = "text", f = "main", y = "ams", Y = "accent-token", I = "bin", le = "close", oa = "inner", H = "mathord", te = "op-token", pe = "open", Ha = "punct", k = "rel", je = "spacing", w = "textord";
  o(c, f, k, "\u2261", "\\equiv", true);
  o(c, f, k, "\u227A", "\\prec", true);
  o(c, f, k, "\u227B", "\\succ", true);
  o(c, f, k, "\u223C", "\\sim", true);
  o(c, f, k, "\u22A5", "\\perp");
  o(c, f, k, "\u2AAF", "\\preceq", true);
  o(c, f, k, "\u2AB0", "\\succeq", true);
  o(c, f, k, "\u2243", "\\simeq", true);
  o(c, f, k, "\u2223", "\\mid", true);
  o(c, f, k, "\u226A", "\\ll", true);
  o(c, f, k, "\u226B", "\\gg", true);
  o(c, f, k, "\u224D", "\\asymp", true);
  o(c, f, k, "\u2225", "\\parallel");
  o(c, f, k, "\u22C8", "\\bowtie", true);
  o(c, f, k, "\u2323", "\\smile", true);
  o(c, f, k, "\u2291", "\\sqsubseteq", true);
  o(c, f, k, "\u2292", "\\sqsupseteq", true);
  o(c, f, k, "\u2250", "\\doteq", true);
  o(c, f, k, "\u2322", "\\frown", true);
  o(c, f, k, "\u220B", "\\ni", true);
  o(c, f, k, "\u221D", "\\propto", true);
  o(c, f, k, "\u22A2", "\\vdash", true);
  o(c, f, k, "\u22A3", "\\dashv", true);
  o(c, f, k, "\u220B", "\\owns");
  o(c, f, Ha, ".", "\\ldotp");
  o(c, f, Ha, "\u22C5", "\\cdotp");
  o(c, f, w, "#", "\\#");
  o(M, f, w, "#", "\\#");
  o(c, f, w, "&", "\\&");
  o(M, f, w, "&", "\\&");
  o(c, f, w, "\u2135", "\\aleph", true);
  o(c, f, w, "\u2200", "\\forall", true);
  o(c, f, w, "\u210F", "\\hbar", true);
  o(c, f, w, "\u2203", "\\exists", true);
  o(c, f, w, "\u2207", "\\nabla", true);
  o(c, f, w, "\u266D", "\\flat", true);
  o(c, f, w, "\u2113", "\\ell", true);
  o(c, f, w, "\u266E", "\\natural", true);
  o(c, f, w, "\u2663", "\\clubsuit", true);
  o(c, f, w, "\u2118", "\\wp", true);
  o(c, f, w, "\u266F", "\\sharp", true);
  o(c, f, w, "\u2662", "\\diamondsuit", true);
  o(c, f, w, "\u211C", "\\Re", true);
  o(c, f, w, "\u2661", "\\heartsuit", true);
  o(c, f, w, "\u2111", "\\Im", true);
  o(c, f, w, "\u2660", "\\spadesuit", true);
  o(c, f, w, "\xA7", "\\S", true);
  o(M, f, w, "\xA7", "\\S");
  o(c, f, w, "\xB6", "\\P", true);
  o(M, f, w, "\xB6", "\\P");
  o(c, f, w, "\u2020", "\\dag");
  o(M, f, w, "\u2020", "\\dag");
  o(M, f, w, "\u2020", "\\textdagger");
  o(c, f, w, "\u2021", "\\ddag");
  o(M, f, w, "\u2021", "\\ddag");
  o(M, f, w, "\u2021", "\\textdaggerdbl");
  o(c, f, le, "\u23B1", "\\rmoustache", true);
  o(c, f, pe, "\u23B0", "\\lmoustache", true);
  o(c, f, le, "\u27EF", "\\rgroup", true);
  o(c, f, pe, "\u27EE", "\\lgroup", true);
  o(c, f, I, "\u2213", "\\mp", true);
  o(c, f, I, "\u2296", "\\ominus", true);
  o(c, f, I, "\u228E", "\\uplus", true);
  o(c, f, I, "\u2293", "\\sqcap", true);
  o(c, f, I, "\u2217", "\\ast");
  o(c, f, I, "\u2294", "\\sqcup", true);
  o(c, f, I, "\u25EF", "\\bigcirc", true);
  o(c, f, I, "\u2219", "\\bullet", true);
  o(c, f, I, "\u2021", "\\ddagger");
  o(c, f, I, "\u2240", "\\wr", true);
  o(c, f, I, "\u2A3F", "\\amalg");
  o(c, f, I, "&", "\\And");
  o(c, f, k, "\u27F5", "\\longleftarrow", true);
  o(c, f, k, "\u21D0", "\\Leftarrow", true);
  o(c, f, k, "\u27F8", "\\Longleftarrow", true);
  o(c, f, k, "\u27F6", "\\longrightarrow", true);
  o(c, f, k, "\u21D2", "\\Rightarrow", true);
  o(c, f, k, "\u27F9", "\\Longrightarrow", true);
  o(c, f, k, "\u2194", "\\leftrightarrow", true);
  o(c, f, k, "\u27F7", "\\longleftrightarrow", true);
  o(c, f, k, "\u21D4", "\\Leftrightarrow", true);
  o(c, f, k, "\u27FA", "\\Longleftrightarrow", true);
  o(c, f, k, "\u21A6", "\\mapsto", true);
  o(c, f, k, "\u27FC", "\\longmapsto", true);
  o(c, f, k, "\u2197", "\\nearrow", true);
  o(c, f, k, "\u21A9", "\\hookleftarrow", true);
  o(c, f, k, "\u21AA", "\\hookrightarrow", true);
  o(c, f, k, "\u2198", "\\searrow", true);
  o(c, f, k, "\u21BC", "\\leftharpoonup", true);
  o(c, f, k, "\u21C0", "\\rightharpoonup", true);
  o(c, f, k, "\u2199", "\\swarrow", true);
  o(c, f, k, "\u21BD", "\\leftharpoondown", true);
  o(c, f, k, "\u21C1", "\\rightharpoondown", true);
  o(c, f, k, "\u2196", "\\nwarrow", true);
  o(c, f, k, "\u21CC", "\\rightleftharpoons", true);
  o(c, y, k, "\u226E", "\\nless", true);
  o(c, y, k, "\uE010", "\\@nleqslant");
  o(c, y, k, "\uE011", "\\@nleqq");
  o(c, y, k, "\u2A87", "\\lneq", true);
  o(c, y, k, "\u2268", "\\lneqq", true);
  o(c, y, k, "\uE00C", "\\@lvertneqq");
  o(c, y, k, "\u22E6", "\\lnsim", true);
  o(c, y, k, "\u2A89", "\\lnapprox", true);
  o(c, y, k, "\u2280", "\\nprec", true);
  o(c, y, k, "\u22E0", "\\npreceq", true);
  o(c, y, k, "\u22E8", "\\precnsim", true);
  o(c, y, k, "\u2AB9", "\\precnapprox", true);
  o(c, y, k, "\u2241", "\\nsim", true);
  o(c, y, k, "\uE006", "\\@nshortmid");
  o(c, y, k, "\u2224", "\\nmid", true);
  o(c, y, k, "\u22AC", "\\nvdash", true);
  o(c, y, k, "\u22AD", "\\nvDash", true);
  o(c, y, k, "\u22EA", "\\ntriangleleft");
  o(c, y, k, "\u22EC", "\\ntrianglelefteq", true);
  o(c, y, k, "\u228A", "\\subsetneq", true);
  o(c, y, k, "\uE01A", "\\@varsubsetneq");
  o(c, y, k, "\u2ACB", "\\subsetneqq", true);
  o(c, y, k, "\uE017", "\\@varsubsetneqq");
  o(c, y, k, "\u226F", "\\ngtr", true);
  o(c, y, k, "\uE00F", "\\@ngeqslant");
  o(c, y, k, "\uE00E", "\\@ngeqq");
  o(c, y, k, "\u2A88", "\\gneq", true);
  o(c, y, k, "\u2269", "\\gneqq", true);
  o(c, y, k, "\uE00D", "\\@gvertneqq");
  o(c, y, k, "\u22E7", "\\gnsim", true);
  o(c, y, k, "\u2A8A", "\\gnapprox", true);
  o(c, y, k, "\u2281", "\\nsucc", true);
  o(c, y, k, "\u22E1", "\\nsucceq", true);
  o(c, y, k, "\u22E9", "\\succnsim", true);
  o(c, y, k, "\u2ABA", "\\succnapprox", true);
  o(c, y, k, "\u2246", "\\ncong", true);
  o(c, y, k, "\uE007", "\\@nshortparallel");
  o(c, y, k, "\u2226", "\\nparallel", true);
  o(c, y, k, "\u22AF", "\\nVDash", true);
  o(c, y, k, "\u22EB", "\\ntriangleright");
  o(c, y, k, "\u22ED", "\\ntrianglerighteq", true);
  o(c, y, k, "\uE018", "\\@nsupseteqq");
  o(c, y, k, "\u228B", "\\supsetneq", true);
  o(c, y, k, "\uE01B", "\\@varsupsetneq");
  o(c, y, k, "\u2ACC", "\\supsetneqq", true);
  o(c, y, k, "\uE019", "\\@varsupsetneqq");
  o(c, y, k, "\u22AE", "\\nVdash", true);
  o(c, y, k, "\u2AB5", "\\precneqq", true);
  o(c, y, k, "\u2AB6", "\\succneqq", true);
  o(c, y, k, "\uE016", "\\@nsubseteqq");
  o(c, y, I, "\u22B4", "\\unlhd");
  o(c, y, I, "\u22B5", "\\unrhd");
  o(c, y, k, "\u219A", "\\nleftarrow", true);
  o(c, y, k, "\u219B", "\\nrightarrow", true);
  o(c, y, k, "\u21CD", "\\nLeftarrow", true);
  o(c, y, k, "\u21CF", "\\nRightarrow", true);
  o(c, y, k, "\u21AE", "\\nleftrightarrow", true);
  o(c, y, k, "\u21CE", "\\nLeftrightarrow", true);
  o(c, y, k, "\u25B3", "\\vartriangle");
  o(c, y, w, "\u210F", "\\hslash");
  o(c, y, w, "\u25BD", "\\triangledown");
  o(c, y, w, "\u25CA", "\\lozenge");
  o(c, y, w, "\u24C8", "\\circledS");
  o(c, y, w, "\xAE", "\\circledR");
  o(M, y, w, "\xAE", "\\circledR");
  o(c, y, w, "\u2221", "\\measuredangle", true);
  o(c, y, w, "\u2204", "\\nexists");
  o(c, y, w, "\u2127", "\\mho");
  o(c, y, w, "\u2132", "\\Finv", true);
  o(c, y, w, "\u2141", "\\Game", true);
  o(c, y, w, "\u2035", "\\backprime");
  o(c, y, w, "\u25B2", "\\blacktriangle");
  o(c, y, w, "\u25BC", "\\blacktriangledown");
  o(c, y, w, "\u25A0", "\\blacksquare");
  o(c, y, w, "\u29EB", "\\blacklozenge");
  o(c, y, w, "\u2605", "\\bigstar");
  o(c, y, w, "\u2222", "\\sphericalangle", true);
  o(c, y, w, "\u2201", "\\complement", true);
  o(c, y, w, "\xF0", "\\eth", true);
  o(M, f, w, "\xF0", "\xF0");
  o(c, y, w, "\u2571", "\\diagup");
  o(c, y, w, "\u2572", "\\diagdown");
  o(c, y, w, "\u25A1", "\\square");
  o(c, y, w, "\u25A1", "\\Box");
  o(c, y, w, "\u25CA", "\\Diamond");
  o(c, y, w, "\xA5", "\\yen", true);
  o(M, y, w, "\xA5", "\\yen", true);
  o(c, y, w, "\u2713", "\\checkmark", true);
  o(M, y, w, "\u2713", "\\checkmark");
  o(c, y, w, "\u2136", "\\beth", true);
  o(c, y, w, "\u2138", "\\daleth", true);
  o(c, y, w, "\u2137", "\\gimel", true);
  o(c, y, w, "\u03DD", "\\digamma", true);
  o(c, y, w, "\u03F0", "\\varkappa");
  o(c, y, pe, "\u250C", "\\@ulcorner", true);
  o(c, y, le, "\u2510", "\\@urcorner", true);
  o(c, y, pe, "\u2514", "\\@llcorner", true);
  o(c, y, le, "\u2518", "\\@lrcorner", true);
  o(c, y, k, "\u2266", "\\leqq", true);
  o(c, y, k, "\u2A7D", "\\leqslant", true);
  o(c, y, k, "\u2A95", "\\eqslantless", true);
  o(c, y, k, "\u2272", "\\lesssim", true);
  o(c, y, k, "\u2A85", "\\lessapprox", true);
  o(c, y, k, "\u224A", "\\approxeq", true);
  o(c, y, I, "\u22D6", "\\lessdot");
  o(c, y, k, "\u22D8", "\\lll", true);
  o(c, y, k, "\u2276", "\\lessgtr", true);
  o(c, y, k, "\u22DA", "\\lesseqgtr", true);
  o(c, y, k, "\u2A8B", "\\lesseqqgtr", true);
  o(c, y, k, "\u2251", "\\doteqdot");
  o(c, y, k, "\u2253", "\\risingdotseq", true);
  o(c, y, k, "\u2252", "\\fallingdotseq", true);
  o(c, y, k, "\u223D", "\\backsim", true);
  o(c, y, k, "\u22CD", "\\backsimeq", true);
  o(c, y, k, "\u2AC5", "\\subseteqq", true);
  o(c, y, k, "\u22D0", "\\Subset", true);
  o(c, y, k, "\u228F", "\\sqsubset", true);
  o(c, y, k, "\u227C", "\\preccurlyeq", true);
  o(c, y, k, "\u22DE", "\\curlyeqprec", true);
  o(c, y, k, "\u227E", "\\precsim", true);
  o(c, y, k, "\u2AB7", "\\precapprox", true);
  o(c, y, k, "\u22B2", "\\vartriangleleft");
  o(c, y, k, "\u22B4", "\\trianglelefteq");
  o(c, y, k, "\u22A8", "\\vDash", true);
  o(c, y, k, "\u22AA", "\\Vvdash", true);
  o(c, y, k, "\u2323", "\\smallsmile");
  o(c, y, k, "\u2322", "\\smallfrown");
  o(c, y, k, "\u224F", "\\bumpeq", true);
  o(c, y, k, "\u224E", "\\Bumpeq", true);
  o(c, y, k, "\u2267", "\\geqq", true);
  o(c, y, k, "\u2A7E", "\\geqslant", true);
  o(c, y, k, "\u2A96", "\\eqslantgtr", true);
  o(c, y, k, "\u2273", "\\gtrsim", true);
  o(c, y, k, "\u2A86", "\\gtrapprox", true);
  o(c, y, I, "\u22D7", "\\gtrdot");
  o(c, y, k, "\u22D9", "\\ggg", true);
  o(c, y, k, "\u2277", "\\gtrless", true);
  o(c, y, k, "\u22DB", "\\gtreqless", true);
  o(c, y, k, "\u2A8C", "\\gtreqqless", true);
  o(c, y, k, "\u2256", "\\eqcirc", true);
  o(c, y, k, "\u2257", "\\circeq", true);
  o(c, y, k, "\u225C", "\\triangleq", true);
  o(c, y, k, "\u223C", "\\thicksim");
  o(c, y, k, "\u2248", "\\thickapprox");
  o(c, y, k, "\u2AC6", "\\supseteqq", true);
  o(c, y, k, "\u22D1", "\\Supset", true);
  o(c, y, k, "\u2290", "\\sqsupset", true);
  o(c, y, k, "\u227D", "\\succcurlyeq", true);
  o(c, y, k, "\u22DF", "\\curlyeqsucc", true);
  o(c, y, k, "\u227F", "\\succsim", true);
  o(c, y, k, "\u2AB8", "\\succapprox", true);
  o(c, y, k, "\u22B3", "\\vartriangleright");
  o(c, y, k, "\u22B5", "\\trianglerighteq");
  o(c, y, k, "\u22A9", "\\Vdash", true);
  o(c, y, k, "\u2223", "\\shortmid");
  o(c, y, k, "\u2225", "\\shortparallel");
  o(c, y, k, "\u226C", "\\between", true);
  o(c, y, k, "\u22D4", "\\pitchfork", true);
  o(c, y, k, "\u221D", "\\varpropto");
  o(c, y, k, "\u25C0", "\\blacktriangleleft");
  o(c, y, k, "\u2234", "\\therefore", true);
  o(c, y, k, "\u220D", "\\backepsilon");
  o(c, y, k, "\u25B6", "\\blacktriangleright");
  o(c, y, k, "\u2235", "\\because", true);
  o(c, y, k, "\u22D8", "\\llless");
  o(c, y, k, "\u22D9", "\\gggtr");
  o(c, y, I, "\u22B2", "\\lhd");
  o(c, y, I, "\u22B3", "\\rhd");
  o(c, y, k, "\u2242", "\\eqsim", true);
  o(c, f, k, "\u22C8", "\\Join");
  o(c, y, k, "\u2251", "\\Doteq", true);
  o(c, y, I, "\u2214", "\\dotplus", true);
  o(c, y, I, "\u2216", "\\smallsetminus");
  o(c, y, I, "\u22D2", "\\Cap", true);
  o(c, y, I, "\u22D3", "\\Cup", true);
  o(c, y, I, "\u2A5E", "\\doublebarwedge", true);
  o(c, y, I, "\u229F", "\\boxminus", true);
  o(c, y, I, "\u229E", "\\boxplus", true);
  o(c, y, I, "\u22C7", "\\divideontimes", true);
  o(c, y, I, "\u22C9", "\\ltimes", true);
  o(c, y, I, "\u22CA", "\\rtimes", true);
  o(c, y, I, "\u22CB", "\\leftthreetimes", true);
  o(c, y, I, "\u22CC", "\\rightthreetimes", true);
  o(c, y, I, "\u22CF", "\\curlywedge", true);
  o(c, y, I, "\u22CE", "\\curlyvee", true);
  o(c, y, I, "\u229D", "\\circleddash", true);
  o(c, y, I, "\u229B", "\\circledast", true);
  o(c, y, I, "\u22C5", "\\centerdot");
  o(c, y, I, "\u22BA", "\\intercal", true);
  o(c, y, I, "\u22D2", "\\doublecap");
  o(c, y, I, "\u22D3", "\\doublecup");
  o(c, y, I, "\u22A0", "\\boxtimes", true);
  o(c, y, k, "\u21E2", "\\dashrightarrow", true);
  o(c, y, k, "\u21E0", "\\dashleftarrow", true);
  o(c, y, k, "\u21C7", "\\leftleftarrows", true);
  o(c, y, k, "\u21C6", "\\leftrightarrows", true);
  o(c, y, k, "\u21DA", "\\Lleftarrow", true);
  o(c, y, k, "\u219E", "\\twoheadleftarrow", true);
  o(c, y, k, "\u21A2", "\\leftarrowtail", true);
  o(c, y, k, "\u21AB", "\\looparrowleft", true);
  o(c, y, k, "\u21CB", "\\leftrightharpoons", true);
  o(c, y, k, "\u21B6", "\\curvearrowleft", true);
  o(c, y, k, "\u21BA", "\\circlearrowleft", true);
  o(c, y, k, "\u21B0", "\\Lsh", true);
  o(c, y, k, "\u21C8", "\\upuparrows", true);
  o(c, y, k, "\u21BF", "\\upharpoonleft", true);
  o(c, y, k, "\u21C3", "\\downharpoonleft", true);
  o(c, f, k, "\u22B6", "\\origof", true);
  o(c, f, k, "\u22B7", "\\imageof", true);
  o(c, y, k, "\u22B8", "\\multimap", true);
  o(c, y, k, "\u21AD", "\\leftrightsquigarrow", true);
  o(c, y, k, "\u21C9", "\\rightrightarrows", true);
  o(c, y, k, "\u21C4", "\\rightleftarrows", true);
  o(c, y, k, "\u21A0", "\\twoheadrightarrow", true);
  o(c, y, k, "\u21A3", "\\rightarrowtail", true);
  o(c, y, k, "\u21AC", "\\looparrowright", true);
  o(c, y, k, "\u21B7", "\\curvearrowright", true);
  o(c, y, k, "\u21BB", "\\circlearrowright", true);
  o(c, y, k, "\u21B1", "\\Rsh", true);
  o(c, y, k, "\u21CA", "\\downdownarrows", true);
  o(c, y, k, "\u21BE", "\\upharpoonright", true);
  o(c, y, k, "\u21C2", "\\downharpoonright", true);
  o(c, y, k, "\u21DD", "\\rightsquigarrow", true);
  o(c, y, k, "\u21DD", "\\leadsto");
  o(c, y, k, "\u21DB", "\\Rrightarrow", true);
  o(c, y, k, "\u21BE", "\\restriction");
  o(c, f, w, "\u2018", "`");
  o(c, f, w, "$", "\\$");
  o(M, f, w, "$", "\\$");
  o(M, f, w, "$", "\\textdollar");
  o(c, f, w, "%", "\\%");
  o(M, f, w, "%", "\\%");
  o(c, f, w, "_", "\\_");
  o(M, f, w, "_", "\\_");
  o(M, f, w, "_", "\\textunderscore");
  o(c, f, w, "\u2220", "\\angle", true);
  o(c, f, w, "\u221E", "\\infty", true);
  o(c, f, w, "\u2032", "\\prime");
  o(c, f, w, "\u25B3", "\\triangle");
  o(c, f, w, "\u0393", "\\Gamma", true);
  o(c, f, w, "\u0394", "\\Delta", true);
  o(c, f, w, "\u0398", "\\Theta", true);
  o(c, f, w, "\u039B", "\\Lambda", true);
  o(c, f, w, "\u039E", "\\Xi", true);
  o(c, f, w, "\u03A0", "\\Pi", true);
  o(c, f, w, "\u03A3", "\\Sigma", true);
  o(c, f, w, "\u03A5", "\\Upsilon", true);
  o(c, f, w, "\u03A6", "\\Phi", true);
  o(c, f, w, "\u03A8", "\\Psi", true);
  o(c, f, w, "\u03A9", "\\Omega", true);
  o(c, f, w, "A", "\u0391");
  o(c, f, w, "B", "\u0392");
  o(c, f, w, "E", "\u0395");
  o(c, f, w, "Z", "\u0396");
  o(c, f, w, "H", "\u0397");
  o(c, f, w, "I", "\u0399");
  o(c, f, w, "K", "\u039A");
  o(c, f, w, "M", "\u039C");
  o(c, f, w, "N", "\u039D");
  o(c, f, w, "O", "\u039F");
  o(c, f, w, "P", "\u03A1");
  o(c, f, w, "T", "\u03A4");
  o(c, f, w, "X", "\u03A7");
  o(c, f, w, "\xAC", "\\neg", true);
  o(c, f, w, "\xAC", "\\lnot");
  o(c, f, w, "\u22A4", "\\top");
  o(c, f, w, "\u22A5", "\\bot");
  o(c, f, w, "\u2205", "\\emptyset");
  o(c, y, w, "\u2205", "\\varnothing");
  o(c, f, H, "\u03B1", "\\alpha", true);
  o(c, f, H, "\u03B2", "\\beta", true);
  o(c, f, H, "\u03B3", "\\gamma", true);
  o(c, f, H, "\u03B4", "\\delta", true);
  o(c, f, H, "\u03F5", "\\epsilon", true);
  o(c, f, H, "\u03B6", "\\zeta", true);
  o(c, f, H, "\u03B7", "\\eta", true);
  o(c, f, H, "\u03B8", "\\theta", true);
  o(c, f, H, "\u03B9", "\\iota", true);
  o(c, f, H, "\u03BA", "\\kappa", true);
  o(c, f, H, "\u03BB", "\\lambda", true);
  o(c, f, H, "\u03BC", "\\mu", true);
  o(c, f, H, "\u03BD", "\\nu", true);
  o(c, f, H, "\u03BE", "\\xi", true);
  o(c, f, H, "\u03BF", "\\omicron", true);
  o(c, f, H, "\u03C0", "\\pi", true);
  o(c, f, H, "\u03C1", "\\rho", true);
  o(c, f, H, "\u03C3", "\\sigma", true);
  o(c, f, H, "\u03C4", "\\tau", true);
  o(c, f, H, "\u03C5", "\\upsilon", true);
  o(c, f, H, "\u03D5", "\\phi", true);
  o(c, f, H, "\u03C7", "\\chi", true);
  o(c, f, H, "\u03C8", "\\psi", true);
  o(c, f, H, "\u03C9", "\\omega", true);
  o(c, f, H, "\u03B5", "\\varepsilon", true);
  o(c, f, H, "\u03D1", "\\vartheta", true);
  o(c, f, H, "\u03D6", "\\varpi", true);
  o(c, f, H, "\u03F1", "\\varrho", true);
  o(c, f, H, "\u03C2", "\\varsigma", true);
  o(c, f, H, "\u03C6", "\\varphi", true);
  o(c, f, I, "\u2217", "*", true);
  o(c, f, I, "+", "+");
  o(c, f, I, "\u2212", "-", true);
  o(c, f, I, "\u22C5", "\\cdot", true);
  o(c, f, I, "\u2218", "\\circ", true);
  o(c, f, I, "\xF7", "\\div", true);
  o(c, f, I, "\xB1", "\\pm", true);
  o(c, f, I, "\xD7", "\\times", true);
  o(c, f, I, "\u2229", "\\cap", true);
  o(c, f, I, "\u222A", "\\cup", true);
  o(c, f, I, "\u2216", "\\setminus", true);
  o(c, f, I, "\u2227", "\\land");
  o(c, f, I, "\u2228", "\\lor");
  o(c, f, I, "\u2227", "\\wedge", true);
  o(c, f, I, "\u2228", "\\vee", true);
  o(c, f, w, "\u221A", "\\surd");
  o(c, f, pe, "\u27E8", "\\langle", true);
  o(c, f, pe, "\u2223", "\\lvert");
  o(c, f, pe, "\u2225", "\\lVert");
  o(c, f, le, "?", "?");
  o(c, f, le, "!", "!");
  o(c, f, le, "\u27E9", "\\rangle", true);
  o(c, f, le, "\u2223", "\\rvert");
  o(c, f, le, "\u2225", "\\rVert");
  o(c, f, k, "=", "=");
  o(c, f, k, ":", ":");
  o(c, f, k, "\u2248", "\\approx", true);
  o(c, f, k, "\u2245", "\\cong", true);
  o(c, f, k, "\u2265", "\\ge");
  o(c, f, k, "\u2265", "\\geq", true);
  o(c, f, k, "\u2190", "\\gets");
  o(c, f, k, ">", "\\gt", true);
  o(c, f, k, "\u2208", "\\in", true);
  o(c, f, k, "\uE020", "\\@not");
  o(c, f, k, "\u2282", "\\subset", true);
  o(c, f, k, "\u2283", "\\supset", true);
  o(c, f, k, "\u2286", "\\subseteq", true);
  o(c, f, k, "\u2287", "\\supseteq", true);
  o(c, y, k, "\u2288", "\\nsubseteq", true);
  o(c, y, k, "\u2289", "\\nsupseteq", true);
  o(c, f, k, "\u22A8", "\\models");
  o(c, f, k, "\u2190", "\\leftarrow", true);
  o(c, f, k, "\u2264", "\\le");
  o(c, f, k, "\u2264", "\\leq", true);
  o(c, f, k, "<", "\\lt", true);
  o(c, f, k, "\u2192", "\\rightarrow", true);
  o(c, f, k, "\u2192", "\\to");
  o(c, y, k, "\u2271", "\\ngeq", true);
  o(c, y, k, "\u2270", "\\nleq", true);
  o(c, f, je, "\xA0", "\\ ");
  o(c, f, je, "\xA0", "\\space");
  o(c, f, je, "\xA0", "\\nobreakspace");
  o(M, f, je, "\xA0", "\\ ");
  o(M, f, je, "\xA0", " ");
  o(M, f, je, "\xA0", "\\space");
  o(M, f, je, "\xA0", "\\nobreakspace");
  o(c, f, je, null, "\\nobreak");
  o(c, f, je, null, "\\allowbreak");
  o(c, f, Ha, ",", ",");
  o(c, f, Ha, ";", ";");
  o(c, y, I, "\u22BC", "\\barwedge", true);
  o(c, y, I, "\u22BB", "\\veebar", true);
  o(c, f, I, "\u2299", "\\odot", true);
  o(c, f, I, "\u2295", "\\oplus", true);
  o(c, f, I, "\u2297", "\\otimes", true);
  o(c, f, w, "\u2202", "\\partial", true);
  o(c, f, I, "\u2298", "\\oslash", true);
  o(c, y, I, "\u229A", "\\circledcirc", true);
  o(c, y, I, "\u22A1", "\\boxdot", true);
  o(c, f, I, "\u25B3", "\\bigtriangleup");
  o(c, f, I, "\u25BD", "\\bigtriangledown");
  o(c, f, I, "\u2020", "\\dagger");
  o(c, f, I, "\u22C4", "\\diamond");
  o(c, f, I, "\u22C6", "\\star");
  o(c, f, I, "\u25C3", "\\triangleleft");
  o(c, f, I, "\u25B9", "\\triangleright");
  o(c, f, pe, "{", "\\{");
  o(M, f, w, "{", "\\{");
  o(M, f, w, "{", "\\textbraceleft");
  o(c, f, le, "}", "\\}");
  o(M, f, w, "}", "\\}");
  o(M, f, w, "}", "\\textbraceright");
  o(c, f, pe, "{", "\\lbrace");
  o(c, f, le, "}", "\\rbrace");
  o(c, f, pe, "[", "\\lbrack", true);
  o(M, f, w, "[", "\\lbrack", true);
  o(c, f, le, "]", "\\rbrack", true);
  o(M, f, w, "]", "\\rbrack", true);
  o(c, f, pe, "(", "\\lparen", true);
  o(c, f, le, ")", "\\rparen", true);
  o(M, f, w, "<", "\\textless", true);
  o(M, f, w, ">", "\\textgreater", true);
  o(c, f, pe, "\u230A", "\\lfloor", true);
  o(c, f, le, "\u230B", "\\rfloor", true);
  o(c, f, pe, "\u2308", "\\lceil", true);
  o(c, f, le, "\u2309", "\\rceil", true);
  o(c, f, w, "\\", "\\backslash");
  o(c, f, w, "\u2223", "|");
  o(c, f, w, "\u2223", "\\vert");
  o(M, f, w, "|", "\\textbar", true);
  o(c, f, w, "\u2225", "\\|");
  o(c, f, w, "\u2225", "\\Vert");
  o(M, f, w, "\u2225", "\\textbardbl");
  o(M, f, w, "~", "\\textasciitilde");
  o(M, f, w, "\\", "\\textbackslash");
  o(M, f, w, "^", "\\textasciicircum");
  o(c, f, k, "\u2191", "\\uparrow", true);
  o(c, f, k, "\u21D1", "\\Uparrow", true);
  o(c, f, k, "\u2193", "\\downarrow", true);
  o(c, f, k, "\u21D3", "\\Downarrow", true);
  o(c, f, k, "\u2195", "\\updownarrow", true);
  o(c, f, k, "\u21D5", "\\Updownarrow", true);
  o(c, f, te, "\u2210", "\\coprod");
  o(c, f, te, "\u22C1", "\\bigvee");
  o(c, f, te, "\u22C0", "\\bigwedge");
  o(c, f, te, "\u2A04", "\\biguplus");
  o(c, f, te, "\u22C2", "\\bigcap");
  o(c, f, te, "\u22C3", "\\bigcup");
  o(c, f, te, "\u222B", "\\int");
  o(c, f, te, "\u222B", "\\intop");
  o(c, f, te, "\u222C", "\\iint");
  o(c, f, te, "\u222D", "\\iiint");
  o(c, f, te, "\u220F", "\\prod");
  o(c, f, te, "\u2211", "\\sum");
  o(c, f, te, "\u2A02", "\\bigotimes");
  o(c, f, te, "\u2A01", "\\bigoplus");
  o(c, f, te, "\u2A00", "\\bigodot");
  o(c, f, te, "\u222E", "\\oint");
  o(c, f, te, "\u222F", "\\oiint");
  o(c, f, te, "\u2230", "\\oiiint");
  o(c, f, te, "\u2A06", "\\bigsqcup");
  o(c, f, te, "\u222B", "\\smallint");
  o(M, f, oa, "\u2026", "\\textellipsis");
  o(c, f, oa, "\u2026", "\\mathellipsis");
  o(M, f, oa, "\u2026", "\\ldots", true);
  o(c, f, oa, "\u2026", "\\ldots", true);
  o(c, f, oa, "\u22EF", "\\@cdots", true);
  o(c, f, oa, "\u22F1", "\\ddots", true);
  o(c, f, w, "\u22EE", "\\varvdots");
  o(M, f, w, "\u22EE", "\\varvdots");
  o(c, f, Y, "\u02CA", "\\acute");
  o(c, f, Y, "\u02CB", "\\grave");
  o(c, f, Y, "\xA8", "\\ddot");
  o(c, f, Y, "~", "\\tilde");
  o(c, f, Y, "\u02C9", "\\bar");
  o(c, f, Y, "\u02D8", "\\breve");
  o(c, f, Y, "\u02C7", "\\check");
  o(c, f, Y, "^", "\\hat");
  o(c, f, Y, "\u20D7", "\\vec");
  o(c, f, Y, "\u02D9", "\\dot");
  o(c, f, Y, "\u02DA", "\\mathring");
  o(c, f, H, "\uE131", "\\@imath");
  o(c, f, H, "\uE237", "\\@jmath");
  o(c, f, w, "\u0131", "\u0131");
  o(c, f, w, "\u0237", "\u0237");
  o(M, f, w, "\u0131", "\\i", true);
  o(M, f, w, "\u0237", "\\j", true);
  o(M, f, w, "\xDF", "\\ss", true);
  o(M, f, w, "\xE6", "\\ae", true);
  o(M, f, w, "\u0153", "\\oe", true);
  o(M, f, w, "\xF8", "\\o", true);
  o(M, f, w, "\xC6", "\\AE", true);
  o(M, f, w, "\u0152", "\\OE", true);
  o(M, f, w, "\xD8", "\\O", true);
  o(M, f, Y, "\u02CA", "\\'");
  o(M, f, Y, "\u02CB", "\\`");
  o(M, f, Y, "\u02C6", "\\^");
  o(M, f, Y, "\u02DC", "\\~");
  o(M, f, Y, "\u02C9", "\\=");
  o(M, f, Y, "\u02D8", "\\u");
  o(M, f, Y, "\u02D9", "\\.");
  o(M, f, Y, "\xB8", "\\c");
  o(M, f, Y, "\u02DA", "\\r");
  o(M, f, Y, "\u02C7", "\\v");
  o(M, f, Y, "\xA8", '\\"');
  o(M, f, Y, "\u02DD", "\\H");
  o(M, f, Y, "\u25EF", "\\textcircled");
  var Qr = {
    "--": true,
    "---": true,
    "``": true,
    "''": true
  };
  o(M, f, w, "\u2013", "--", true);
  o(M, f, w, "\u2013", "\\textendash");
  o(M, f, w, "\u2014", "---", true);
  o(M, f, w, "\u2014", "\\textemdash");
  o(M, f, w, "\u2018", "`", true);
  o(M, f, w, "\u2018", "\\textquoteleft");
  o(M, f, w, "\u2019", "'", true);
  o(M, f, w, "\u2019", "\\textquoteright");
  o(M, f, w, "\u201C", "``", true);
  o(M, f, w, "\u201C", "\\textquotedblleft");
  o(M, f, w, "\u201D", "''", true);
  o(M, f, w, "\u201D", "\\textquotedblright");
  o(c, f, w, "\xB0", "\\degree", true);
  o(M, f, w, "\xB0", "\\degree");
  o(M, f, w, "\xB0", "\\textdegree", true);
  o(c, f, w, "\xA3", "\\pounds");
  o(c, f, w, "\xA3", "\\mathsterling", true);
  o(M, f, w, "\xA3", "\\pounds");
  o(M, f, w, "\xA3", "\\textsterling", true);
  o(c, y, w, "\u2720", "\\maltese");
  o(M, y, w, "\u2720", "\\maltese");
  var dr = '0123456789/@."';
  for (var rt = 0; rt < dr.length; rt++) {
    var pr = dr.charAt(rt);
    o(c, f, w, pr, pr);
  }
  var mr = '0123456789!@*()-=+";:?/.,';
  for (var st = 0; st < mr.length; st++) {
    var yr = mr.charAt(st);
    o(M, f, w, yr, yr);
  }
  var Ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (var ot = 0; ot < Ia.length; ot++) {
    var xa = Ia.charAt(ot);
    o(c, f, H, xa, xa), o(M, f, w, xa, xa);
  }
  o(c, y, w, "C", "\u2102");
  o(M, y, w, "C", "\u2102");
  o(c, y, w, "H", "\u210D");
  o(M, y, w, "H", "\u210D");
  o(c, y, w, "N", "\u2115");
  o(M, y, w, "N", "\u2115");
  o(c, y, w, "P", "\u2119");
  o(M, y, w, "P", "\u2119");
  o(c, y, w, "Q", "\u211A");
  o(M, y, w, "Q", "\u211A");
  o(c, y, w, "R", "\u211D");
  o(M, y, w, "R", "\u211D");
  o(c, y, w, "Z", "\u2124");
  o(M, y, w, "Z", "\u2124");
  o(c, f, H, "h", "\u210E");
  o(M, f, H, "h", "\u210E");
  var P = "";
  for (var ne = 0; ne < Ia.length; ne++) {
    var J = Ia.charAt(ne);
    P = String.fromCharCode(55349, 56320 + ne), o(c, f, H, J, P), o(M, f, w, J, P), P = String.fromCharCode(55349, 56372 + ne), o(c, f, H, J, P), o(M, f, w, J, P), P = String.fromCharCode(55349, 56424 + ne), o(c, f, H, J, P), o(M, f, w, J, P), P = String.fromCharCode(55349, 56580 + ne), o(c, f, H, J, P), o(M, f, w, J, P), P = String.fromCharCode(55349, 56684 + ne), o(c, f, H, J, P), o(M, f, w, J, P), P = String.fromCharCode(55349, 56736 + ne), o(c, f, H, J, P), o(M, f, w, J, P), P = String.fromCharCode(55349, 56788 + ne), o(c, f, H, J, P), o(M, f, w, J, P), P = String.fromCharCode(55349, 56840 + ne), o(c, f, H, J, P), o(M, f, w, J, P), P = String.fromCharCode(55349, 56944 + ne), o(c, f, H, J, P), o(M, f, w, J, P), ne < 26 && (P = String.fromCharCode(55349, 56632 + ne), o(c, f, H, J, P), o(M, f, w, J, P), P = String.fromCharCode(55349, 56476 + ne), o(c, f, H, J, P), o(M, f, w, J, P));
  }
  P = "\u{1D55C}";
  o(c, f, H, "k", P);
  o(M, f, w, "k", P);
  for (var Ue = 0; Ue < 10; Ue++) {
    var Ne = Ue.toString();
    P = String.fromCharCode(55349, 57294 + Ue), o(c, f, H, Ne, P), o(M, f, w, Ne, P), P = String.fromCharCode(55349, 57314 + Ue), o(c, f, H, Ne, P), o(M, f, w, Ne, P), P = String.fromCharCode(55349, 57324 + Ue), o(c, f, H, Ne, P), o(M, f, w, Ne, P), P = String.fromCharCode(55349, 57334 + Ue), o(c, f, H, Ne, P), o(M, f, w, Ne, P);
  }
  var vt = "\xD0\xDE\xFE";
  for (var nt = 0; nt < vt.length; nt++) {
    var Sa = vt.charAt(nt);
    o(c, f, H, Sa, Sa), o(M, f, w, Sa, Sa);
  }
  var Aa = [
    [
      "mathbf",
      "textbf",
      "Main-Bold"
    ],
    [
      "mathbf",
      "textbf",
      "Main-Bold"
    ],
    [
      "mathnormal",
      "textit",
      "Math-Italic"
    ],
    [
      "mathnormal",
      "textit",
      "Math-Italic"
    ],
    [
      "boldsymbol",
      "boldsymbol",
      "Main-BoldItalic"
    ],
    [
      "boldsymbol",
      "boldsymbol",
      "Main-BoldItalic"
    ],
    [
      "mathscr",
      "textscr",
      "Script-Regular"
    ],
    [
      "",
      "",
      ""
    ],
    [
      "",
      "",
      ""
    ],
    [
      "",
      "",
      ""
    ],
    [
      "mathfrak",
      "textfrak",
      "Fraktur-Regular"
    ],
    [
      "mathfrak",
      "textfrak",
      "Fraktur-Regular"
    ],
    [
      "mathbb",
      "textbb",
      "AMS-Regular"
    ],
    [
      "mathbb",
      "textbb",
      "AMS-Regular"
    ],
    [
      "mathboldfrak",
      "textboldfrak",
      "Fraktur-Regular"
    ],
    [
      "mathboldfrak",
      "textboldfrak",
      "Fraktur-Regular"
    ],
    [
      "mathsf",
      "textsf",
      "SansSerif-Regular"
    ],
    [
      "mathsf",
      "textsf",
      "SansSerif-Regular"
    ],
    [
      "mathboldsf",
      "textboldsf",
      "SansSerif-Bold"
    ],
    [
      "mathboldsf",
      "textboldsf",
      "SansSerif-Bold"
    ],
    [
      "mathitsf",
      "textitsf",
      "SansSerif-Italic"
    ],
    [
      "mathitsf",
      "textitsf",
      "SansSerif-Italic"
    ],
    [
      "",
      "",
      ""
    ],
    [
      "",
      "",
      ""
    ],
    [
      "mathtt",
      "texttt",
      "Typewriter-Regular"
    ],
    [
      "mathtt",
      "texttt",
      "Typewriter-Regular"
    ]
  ], gr = [
    [
      "mathbf",
      "textbf",
      "Main-Bold"
    ],
    [
      "",
      "",
      ""
    ],
    [
      "mathsf",
      "textsf",
      "SansSerif-Regular"
    ],
    [
      "mathboldsf",
      "textboldsf",
      "SansSerif-Bold"
    ],
    [
      "mathtt",
      "texttt",
      "Typewriter-Regular"
    ]
  ], pS = (t, e) => {
    var a = t.charCodeAt(0), r = t.charCodeAt(1), s = (a - 55296) * 1024 + (r - 56320) + 65536, n = e === "math" ? 0 : 1;
    if (119808 <= s && s < 120484) {
      var l = Math.floor((s - 119808) / 26);
      return [
        Aa[l][2],
        Aa[l][n]
      ];
    } else if (120782 <= s && s <= 120831) {
      var u = Math.floor((s - 120782) / 10);
      return [
        gr[u][2],
        gr[u][n]
      ];
    } else {
      if (s === 120485 || s === 120486) return [
        Aa[0][2],
        Aa[0][n]
      ];
      if (120486 < s && s < 120782) return [
        "",
        ""
      ];
      throw new q("Unsupported character: " + t);
    }
  }, Pa = function(e, a, r) {
    if (W[r][e]) {
      var s = W[r][e].replace;
      s && (e = s);
    }
    return {
      value: e,
      metrics: Nt(e, a, r)
    };
  }, ce = function(e, a, r, s, n) {
    var l = Pa(e, a, r), u = l.metrics;
    e = l.value;
    var d;
    if (u) {
      var m = u.italic;
      (r === "text" || s && s.font === "mathit") && (m = 0), d = new de(e, u.height, u.depth, m, u.skew, u.width, n);
    } else typeof console < "u" && console.warn("No character metrics " + ("for '" + e + "' in style '" + a + "' and mode '" + r + "'")), d = new de(e, 0, 0, 0, 0, 0, n);
    if (s) {
      d.maxFontSize = s.sizeMultiplier, s.style.isTight() && d.classes.push("mtight");
      var g = s.getColor();
      g && (d.style.color = g);
    }
    return d;
  }, Rt = function(e, a, r, s) {
    return s === void 0 && (s = []), r.font === "boldsymbol" && Pa(e, "Main-Bold", a).metrics ? ce(e, "Main-Bold", a, r, s.concat([
      "mathbf"
    ])) : e === "\\" || W[a][e].font === "main" ? ce(e, "Main-Regular", a, r, s) : ce(e, "AMS-Regular", a, r, s.concat([
      "amsrm"
    ]));
  }, mS = function(e, a, r, s, n) {
    return n !== "textord" && Pa(e, "Math-BoldItalic", a).metrics ? {
      fontName: "Math-BoldItalic",
      fontClass: "boldsymbol"
    } : {
      fontName: "Main-Bold",
      fontClass: "mathbf"
    };
  }, La = function(e, a, r) {
    var s = e.mode, n = e.text, l = [
      "mord"
    ], u = s === "math" || s === "text" && a.font, d = u ? a.font : a.fontFamily, m = "", g = "";
    if (n.charCodeAt(0) === 55349 && ([m, g] = pS(n, s)), m.length > 0) return ce(n, m, s, a, l.concat(g));
    if (d) {
      var _, h;
      if (d === "boldsymbol") {
        var b = mS(n, s, a, l, r);
        _ = b.fontName, h = [
          b.fontClass
        ];
      } else u ? (_ = zt[d].fontName, h = [
        d
      ]) : (_ = Ma(d, a.fontWeight, a.fontShape), h = [
        d,
        a.fontWeight,
        a.fontShape
      ]);
      if (Pa(n, _, s).metrics) return ce(n, _, s, a, l.concat(h));
      if (Qr.hasOwnProperty(n) && _.slice(0, 10) === "Typewriter") {
        for (var S = [], v = 0; v < n.length; v++) S.push(ce(n[v], _, s, a, l.concat(h)));
        return De(S);
      }
    }
    if (r === "mathord") return ce(n, "Math-Italic", s, a, l.concat([
      "mathnormal"
    ]));
    if (r === "textord") {
      var B = W[s][n] && W[s][n].font;
      if (B === "ams") {
        var C = Ma("amsrm", a.fontWeight, a.fontShape);
        return ce(n, C, s, a, l.concat("amsrm", a.fontWeight, a.fontShape));
      } else if (B === "main" || !B) {
        var A = Ma("textrm", a.fontWeight, a.fontShape);
        return ce(n, A, s, a, l.concat(a.fontWeight, a.fontShape));
      } else {
        var R = Ma(B, a.fontWeight, a.fontShape);
        return ce(n, R, s, a, l.concat(R, a.fontWeight, a.fontShape));
      }
    } else throw new Error("unexpected type: " + r + " in makeOrd");
  }, yS = (t, e) => {
    if (Fe(t.classes) !== Fe(e.classes) || t.skew !== e.skew || t.maxFontSize !== e.maxFontSize || t.italic !== 0 && t.hasClass("mathnormal")) return false;
    if (t.classes.length === 1) {
      var a = t.classes[0];
      if (a === "mbin" || a === "mord") return false;
    }
    for (var r of Object.keys(t.style)) if (t.style[r] !== e.style[r]) return false;
    for (var s of Object.keys(e.style)) if (t.style[s] !== e.style[s]) return false;
    return true;
  }, es = (t) => {
    for (var e = 0; e < t.length - 1; e++) {
      var a = t[e], r = t[e + 1];
      a instanceof de && r instanceof de && yS(a, r) && (a.text += r.text, a.height = Math.max(a.height, r.height), a.depth = Math.max(a.depth, r.depth), a.italic = r.italic, t.splice(e + 1, 1), e--);
    }
    return t;
  }, Ft = function(e) {
    for (var a = 0, r = 0, s = 0, n = 0; n < e.children.length; n++) {
      var l = e.children[n];
      l.height > a && (a = l.height), l.depth > r && (r = l.depth), l.maxFontSize > s && (s = l.maxFontSize);
    }
    e.height = a, e.depth = r, e.maxFontSize = s;
  }, T = function(e, a, r, s) {
    var n = new sa(e, a, r, s);
    return Ft(n), n;
  }, He = (t, e, a, r) => new sa(t, e, a, r), aa = function(e, a, r) {
    var s = T([
      e
    ], [], a);
    return s.height = Math.max(r || a.fontMetrics().defaultRuleThickness, a.minRuleThickness), s.style.borderBottomWidth = D(s.height), s.maxFontSize = 1, s;
  }, gS = function(e, a, r, s) {
    var n = new Oa(e, a, r, s);
    return Ft(n), n;
  }, De = function(e) {
    var a = new ra(e);
    return Ft(a), a;
  }, ta = function(e, a) {
    return e instanceof ra ? T([], [
      e
    ], a) : e;
  }, kS = function(e) {
    if (e.positionType === "individualShift") {
      for (var a = e.children, r = [
        a[0]
      ], s = -a[0].shift - a[0].elem.depth, n = s, l = 1; l < a.length; l++) {
        var u = -a[l].shift - n - a[l].elem.depth, d = u - (a[l - 1].elem.height + a[l - 1].elem.depth);
        n = n + u, r.push({
          type: "kern",
          size: d
        }), r.push(a[l]);
      }
      return {
        children: r,
        depth: s
      };
    }
    var m;
    if (e.positionType === "top") {
      for (var g = e.positionData, _ = 0; _ < e.children.length; _++) {
        var h = e.children[_];
        g -= h.type === "kern" ? h.size : h.elem.height + h.elem.depth;
      }
      m = g;
    } else if (e.positionType === "bottom") m = -e.positionData;
    else {
      var b = e.children[0];
      if (b.type !== "elem") throw new Error('First child must have type "elem".');
      if (e.positionType === "shift") m = -b.elem.depth - e.positionData;
      else if (e.positionType === "firstBaseline") m = -b.elem.depth;
      else throw new Error("Invalid positionType " + e.positionType + ".");
    }
    return {
      children: e.children,
      depth: m
    };
  }, U = function(e, a) {
    for (var { children: r, depth: s } = kS(e), n = 0, l = 0; l < r.length; l++) {
      var u = r[l];
      if (u.type === "elem") {
        var d = u.elem;
        n = Math.max(n, d.maxFontSize, d.height);
      }
    }
    n += 2;
    var m = T([
      "pstrut"
    ], []);
    m.style.height = D(n);
    for (var g = [], _ = s, h = s, b = s, S = 0; S < r.length; S++) {
      var v = r[S];
      if (v.type === "kern") b += v.size;
      else {
        var B = v.elem, C = v.wrapperClasses || [], A = v.wrapperStyle || {}, R = T(C, [
          m,
          B
        ], void 0, A);
        R.style.top = D(-n - b - B.depth), v.marginLeft && (R.style.marginLeft = v.marginLeft), v.marginRight && (R.style.marginRight = v.marginRight), g.push(R), b += B.height + B.depth;
      }
      _ = Math.min(_, b), h = Math.max(h, b);
    }
    var N = T([
      "vlist"
    ], g);
    N.style.height = D(h);
    var x;
    if (_ < 0) {
      var i = T([], []), z = T([
        "vlist"
      ], [
        i
      ]);
      z.style.height = D(-_);
      var F = T([
        "vlist-s"
      ], [
        new de("\u200B")
      ]);
      x = [
        T([
          "vlist-r"
        ], [
          N,
          F
        ]),
        T([
          "vlist-r"
        ], [
          z
        ])
      ];
    } else x = [
      T([
        "vlist-r"
      ], [
        N
      ])
    ];
    var O = T([
      "vlist-t"
    ], x);
    return x.length === 2 && O.classes.push("vlist-t2"), O.height = h, O.depth = -_, O;
  }, as = (t, e) => {
    var a = T([
      "mspace"
    ], [], e), r = K(t, e);
    return a.style.marginRight = D(r), a;
  }, Ma = function(e, a, r) {
    var s = "";
    switch (e) {
      case "amsrm":
        s = "AMS";
        break;
      case "textrm":
        s = "Main";
        break;
      case "textsf":
        s = "SansSerif";
        break;
      case "texttt":
        s = "Typewriter";
        break;
      default:
        s = e;
    }
    var n;
    return a === "textbf" && r === "textit" ? n = "BoldItalic" : a === "textbf" ? n = "Bold" : a === "textit" ? n = "Italic" : n = "Regular", s + "-" + n;
  }, zt = {
    mathbf: {
      variant: "bold",
      fontName: "Main-Bold"
    },
    mathrm: {
      variant: "normal",
      fontName: "Main-Regular"
    },
    textit: {
      variant: "italic",
      fontName: "Main-Italic"
    },
    mathit: {
      variant: "italic",
      fontName: "Main-Italic"
    },
    mathnormal: {
      variant: "italic",
      fontName: "Math-Italic"
    },
    mathsfit: {
      variant: "sans-serif-italic",
      fontName: "SansSerif-Italic"
    },
    mathbb: {
      variant: "double-struck",
      fontName: "AMS-Regular"
    },
    mathcal: {
      variant: "script",
      fontName: "Caligraphic-Regular"
    },
    mathfrak: {
      variant: "fraktur",
      fontName: "Fraktur-Regular"
    },
    mathscr: {
      variant: "script",
      fontName: "Script-Regular"
    },
    mathsf: {
      variant: "sans-serif",
      fontName: "SansSerif-Regular"
    },
    mathtt: {
      variant: "monospace",
      fontName: "Typewriter-Regular"
    }
  }, ts = {
    vec: [
      "vec",
      0.471,
      0.714
    ],
    oiintSize1: [
      "oiintSize1",
      0.957,
      0.499
    ],
    oiintSize2: [
      "oiintSize2",
      1.472,
      0.659
    ],
    oiiintSize1: [
      "oiiintSize1",
      1.304,
      0.499
    ],
    oiiintSize2: [
      "oiiintSize2",
      1.98,
      0.659
    ]
  }, rs = function(e, a) {
    var [r, s, n] = ts[e], l = new Oe(r), u = new Te([
      l
    ], {
      width: D(s),
      height: D(n),
      style: "width:" + D(s),
      viewBox: "0 0 " + 1e3 * s + " " + 1e3 * n,
      preserveAspectRatio: "xMinYMin"
    }), d = He([
      "overlay"
    ], [
      u
    ], a);
    return d.height = n, d.style.height = D(n), d.style.width = D(s), d;
  }, Z = {
    number: 3,
    unit: "mu"
  }, $e = {
    number: 4,
    unit: "mu"
  }, Se = {
    number: 5,
    unit: "mu"
  }, _S = {
    mord: {
      mop: Z,
      mbin: $e,
      mrel: Se,
      minner: Z
    },
    mop: {
      mord: Z,
      mop: Z,
      mrel: Se,
      minner: Z
    },
    mbin: {
      mord: $e,
      mop: $e,
      mopen: $e,
      minner: $e
    },
    mrel: {
      mord: Se,
      mop: Se,
      mopen: Se,
      minner: Se
    },
    mopen: {},
    mclose: {
      mop: Z,
      mbin: $e,
      mrel: Se,
      minner: Z
    },
    mpunct: {
      mord: Z,
      mop: Z,
      mrel: Se,
      mopen: Z,
      mclose: Z,
      mpunct: Z,
      minner: Z
    },
    minner: {
      mord: Z,
      mop: Z,
      mbin: $e,
      mrel: Se,
      mopen: Z,
      mpunct: Z,
      minner: Z
    }
  }, wS = {
    mord: {
      mop: Z
    },
    mop: {
      mord: Z,
      mop: Z
    },
    mbin: {},
    mrel: {},
    mopen: {},
    mclose: {
      mop: Z
    },
    mpunct: {},
    minner: {
      mop: Z
    }
  }, ss = {}, Na = {}, Ra = {};
  function E(t) {
    for (var { type: e, names: a, props: r, handler: s, htmlBuilder: n, mathmlBuilder: l } = t, u = {
      type: e,
      numArgs: r.numArgs,
      argTypes: r.argTypes,
      allowedInArgument: !!r.allowedInArgument,
      allowedInText: !!r.allowedInText,
      allowedInMath: r.allowedInMath === void 0 ? true : r.allowedInMath,
      numOptionalArgs: r.numOptionalArgs || 0,
      infix: !!r.infix,
      primitive: !!r.primitive,
      handler: s
    }, d = 0; d < a.length; ++d) ss[a[d]] = u;
    e && (n && (Na[e] = n), l && (Ra[e] = l));
  }
  function Xe(t) {
    var { type: e, htmlBuilder: a, mathmlBuilder: r } = t;
    E({
      type: e,
      names: [],
      props: {
        numArgs: 0
      },
      handler() {
        throw new Error("Should never be called.");
      },
      htmlBuilder: a,
      mathmlBuilder: r
    });
  }
  var Fa = function(e) {
    return e.type === "ordgroup" && e.body.length === 1 ? e.body[0] : e;
  }, ee = function(e) {
    return e.type === "ordgroup" ? e.body : [
      e
    ];
  }, bS = /* @__PURE__ */ new Set([
    "leftmost",
    "mbin",
    "mopen",
    "mrel",
    "mop",
    "mpunct"
  ]), vS = /* @__PURE__ */ new Set([
    "rightmost",
    "mrel",
    "mclose",
    "mpunct"
  ]), zS = {
    display: L.DISPLAY,
    text: L.TEXT,
    script: L.SCRIPT,
    scriptscript: L.SCRIPTSCRIPT
  }, xS = {
    mord: "mord",
    mop: "mop",
    mbin: "mbin",
    mrel: "mrel",
    mopen: "mopen",
    mclose: "mclose",
    mpunct: "mpunct",
    minner: "minner"
  }, re = function(e, a, r, s) {
    s === void 0 && (s = [
      null,
      null
    ]);
    for (var n = [], l = 0; l < e.length; l++) {
      var u = $(e[l], a);
      if (u instanceof ra) {
        var d = u.children;
        n.push(...d);
      } else n.push(u);
    }
    if (es(n), !r) return n;
    var m = a;
    if (e.length === 1) {
      var g = e[0];
      g.type === "sizing" ? m = a.havingSize(g.size) : g.type === "styling" && (m = a.havingStyle(zS[g.style]));
    }
    var _ = T([
      s[0] || "leftmost"
    ], [], a), h = T([
      s[1] || "rightmost"
    ], [], a), b = r === "root";
    return xt(n, (S, v) => {
      var B = v.classes[0], C = S.classes[0];
      B === "mbin" && vS.has(C) ? v.classes[0] = "mord" : C === "mbin" && bS.has(B) && (S.classes[0] = "mord");
    }, {
      node: _
    }, h, b), xt(n, (S, v) => {
      var B, C, A = At(v), R = At(S), N = A && R ? S.hasClass("mtight") ? (B = wS[A]) == null ? void 0 : B[R] : (C = _S[A]) == null ? void 0 : C[R] : null;
      if (N) return as(N, m);
    }, {
      node: _
    }, h, b), n;
  }, xt = function(e, a, r, s, n) {
    s && e.push(s);
    for (var l = 0; l < e.length; l++) {
      var u = e[l], d = os(u);
      if (d) {
        xt(d.children, a, r, null, n);
        continue;
      }
      var m = !u.hasClass("mspace");
      if (m) {
        var g = a(u, r.node);
        g && (r.insertAfter ? r.insertAfter(g) : (e.unshift(g), l++));
      }
      m ? r.node = u : n && u.hasClass("newline") && (r.node = T([
        "leftmost"
      ])), r.insertAfter = /* @__PURE__ */ ((_) => (h) => {
        e.splice(_ + 1, 0, h), l++;
      })(l);
    }
    s && e.pop();
  }, os = function(e) {
    return e instanceof ra || e instanceof Oa || e instanceof sa && e.hasClass("enclosing") ? e : null;
  }, St = function(e, a) {
    var r = os(e);
    if (r) {
      var s = r.children;
      if (s.length) {
        if (a === "right") return St(s[s.length - 1], "right");
        if (a === "left") return St(s[0], "left");
      }
    }
    return e;
  }, At = function(e, a) {
    if (!e) return null;
    a && (e = St(e, a));
    var r = e.classes[0];
    return xS[r] || null;
  }, ha = function(e, a) {
    var r = [
      "nulldelimiter"
    ].concat(e.baseSizingClasses());
    return T(a.concat(r));
  }, $ = function(e, a, r) {
    if (!e) return T();
    if (Na[e.type]) {
      var s = Na[e.type](e, a);
      if (r && a.size !== r.size) {
        s = T(a.sizingClasses(r), [
          s
        ], a);
        var n = a.sizeMultiplier / r.sizeMultiplier;
        s.height *= n, s.depth *= n;
      }
      return s;
    } else throw new q("Got group of unknown type: '" + e.type + "'");
  };
  function Ta(t, e) {
    var a = T([
      "base"
    ], t, e), r = T([
      "strut"
    ]);
    return r.style.height = D(a.height + a.depth), a.depth && (r.style.verticalAlign = D(-a.depth)), a.children.unshift(r), a;
  }
  function Mt(t, e) {
    var a = null;
    t.length === 1 && t[0].type === "tag" && (a = t[0].tag, t = t[0].body);
    var r = re(t, e, "root"), s;
    r.length === 2 && r[1].hasClass("tag") && (s = r.pop());
    for (var n = [], l = [], u = 0; u < r.length; u++) if (l.push(r[u]), r[u].hasClass("mbin") || r[u].hasClass("mrel") || r[u].hasClass("allowbreak")) {
      for (var d = false; u < r.length - 1 && r[u + 1].hasClass("mspace") && !r[u + 1].hasClass("newline"); ) u++, l.push(r[u]), r[u].hasClass("nobreak") && (d = true);
      d || (n.push(Ta(l, e)), l = []);
    } else r[u].hasClass("newline") && (l.pop(), l.length > 0 && (n.push(Ta(l, e)), l = []), n.push(r[u]));
    l.length > 0 && n.push(Ta(l, e));
    var m;
    a ? (m = Ta(re(a, e, true), e), m.classes = [
      "tag"
    ], n.push(m)) : s && n.push(s);
    var g = T([
      "katex-html"
    ], n);
    if (g.setAttribute("aria-hidden", "true"), m) {
      var _ = m.children[0];
      _.style.height = D(g.height + g.depth), g.depth && (_.style.verticalAlign = D(-g.depth));
    }
    return g;
  }
  function ns(t) {
    return new ra(t);
  }
  class j {
    constructor(e, a, r) {
      this.type = e, this.attributes = {}, this.children = a || [], this.classes = r || [];
    }
    setAttribute(e, a) {
      this.attributes[e] = a;
    }
    getAttribute(e) {
      return this.attributes[e];
    }
    toNode() {
      var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
      for (var a in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, a) && e.setAttribute(a, this.attributes[a]);
      this.classes.length > 0 && (e.className = Fe(this.classes));
      for (var r = 0; r < this.children.length; r++) if (this.children[r] instanceof ae && this.children[r + 1] instanceof ae) {
        for (var s = this.children[r].toText() + this.children[++r].toText(); this.children[r + 1] instanceof ae; ) s += this.children[++r].toText();
        e.appendChild(new ae(s).toNode());
      } else e.appendChild(this.children[r].toNode());
      return e;
    }
    toMarkup() {
      var e = "<" + this.type;
      for (var a in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, a) && (e += " " + a + '="', e += oe(this.attributes[a]), e += '"');
      this.classes.length > 0 && (e += ' class ="' + oe(Fe(this.classes)) + '"'), e += ">";
      for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
      return e += "</" + this.type + ">", e;
    }
    toText() {
      return this.children.map((e) => e.toText()).join("");
    }
  }
  class ae {
    constructor(e) {
      this.text = e;
    }
    toNode() {
      return document.createTextNode(this.text);
    }
    toMarkup() {
      return oe(this.toText());
    }
    toText() {
      return this.text;
    }
  }
  class cs {
    constructor(e) {
      this.width = e, e >= 0.05555 && e <= 0.05556 ? this.character = "\u200A" : e >= 0.1666 && e <= 0.1667 ? this.character = "\u2009" : e >= 0.2222 && e <= 0.2223 ? this.character = "\u2005" : e >= 0.2777 && e <= 0.2778 ? this.character = "\u2005\u200A" : e >= -0.05556 && e <= -0.05555 ? this.character = "\u200A\u2063" : e >= -0.1667 && e <= -0.1666 ? this.character = "\u2009\u2063" : e >= -0.2223 && e <= -0.2222 ? this.character = "\u205F\u2063" : e >= -0.2778 && e <= -0.2777 ? this.character = "\u2005\u2063" : this.character = null;
    }
    toNode() {
      if (this.character) return document.createTextNode(this.character);
      var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
      return e.setAttribute("width", D(this.width)), e;
    }
    toMarkup() {
      return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + D(this.width) + '"/>';
    }
    toText() {
      return this.character ? this.character : " ";
    }
  }
  var SS = /* @__PURE__ */ new Set([
    "\\imath",
    "\\jmath"
  ]), AS = /* @__PURE__ */ new Set([
    "mrow",
    "mtable"
  ]), ge = function(e, a, r) {
    return W[a][e] && W[a][e].replace && e.charCodeAt(0) !== 55349 && !(Qr.hasOwnProperty(e) && r && (r.fontFamily && r.fontFamily.slice(4, 6) === "tt" || r.font && r.font.slice(4, 6) === "tt")) && (e = W[a][e].replace), new ae(e);
  }, Ot = function(e) {
    return e.length === 1 ? e[0] : new j("mrow", e);
  }, Ht = function(e, a) {
    if (a.fontFamily === "texttt") return "monospace";
    if (a.fontFamily === "textsf") return a.fontShape === "textit" && a.fontWeight === "textbf" ? "sans-serif-bold-italic" : a.fontShape === "textit" ? "sans-serif-italic" : a.fontWeight === "textbf" ? "bold-sans-serif" : "sans-serif";
    if (a.fontShape === "textit" && a.fontWeight === "textbf") return "bold-italic";
    if (a.fontShape === "textit") return "italic";
    if (a.fontWeight === "textbf") return "bold";
    var r = a.font;
    if (!r || r === "mathnormal") return null;
    var s = e.mode;
    if (r === "mathit") return "italic";
    if (r === "boldsymbol") return e.type === "textord" ? "bold" : "bold-italic";
    if (r === "mathbf") return "bold";
    if (r === "mathbb") return "double-struck";
    if (r === "mathsfit") return "sans-serif-italic";
    if (r === "mathfrak") return "fraktur";
    if (r === "mathscr" || r === "mathcal") return "script";
    if (r === "mathsf") return "sans-serif";
    if (r === "mathtt") return "monospace";
    var n = e.text;
    if (SS.has(n)) return null;
    if (W[s][n]) {
      var l = W[s][n].replace;
      l && (n = l);
    }
    var u = zt[r].fontName;
    return Nt(n, u, s) ? zt[r].variant : null;
  };
  function ct(t) {
    if (!t) return false;
    if (t.type === "mi" && t.children.length === 1) {
      var e = t.children[0];
      return e instanceof ae && e.text === ".";
    } else if (t.type === "mo" && t.children.length === 1 && t.getAttribute("separator") === "true" && t.getAttribute("lspace") === "0em" && t.getAttribute("rspace") === "0em") {
      var a = t.children[0];
      return a instanceof ae && a.text === ",";
    } else return false;
  }
  var me = function(e, a, r) {
    if (e.length === 1) {
      var s = V(e[0], a);
      return r && s instanceof j && s.type === "mo" && (s.setAttribute("lspace", "0em"), s.setAttribute("rspace", "0em")), [
        s
      ];
    }
    for (var n = [], l, u = 0; u < e.length; u++) {
      var d = V(e[u], a);
      if (d instanceof j && l instanceof j) {
        if (d.type === "mtext" && l.type === "mtext" && d.getAttribute("mathvariant") === l.getAttribute("mathvariant")) {
          l.children.push(...d.children);
          continue;
        } else if (d.type === "mn" && l.type === "mn") {
          l.children.push(...d.children);
          continue;
        } else if (ct(d) && l.type === "mn") {
          l.children.push(...d.children);
          continue;
        } else if (d.type === "mn" && ct(l)) d.children = [
          ...l.children,
          ...d.children
        ], n.pop();
        else if ((d.type === "msup" || d.type === "msub") && d.children.length >= 1 && (l.type === "mn" || ct(l))) {
          var m = d.children[0];
          m instanceof j && m.type === "mn" && (m.children = [
            ...l.children,
            ...m.children
          ], n.pop());
        } else if (l.type === "mi" && l.children.length === 1) {
          var g = l.children[0];
          if (g instanceof ae && g.text === "\u0338" && (d.type === "mo" || d.type === "mi" || d.type === "mn")) {
            var _ = d.children[0];
            _ instanceof ae && _.text.length > 0 && (_.text = _.text.slice(0, 1) + "\u0338" + _.text.slice(1), n.pop());
          }
        }
      }
      n.push(d), l = d;
    }
    return n;
  }, Pe = function(e, a, r) {
    return Ot(me(e, a, r));
  }, V = function(e, a) {
    if (!e) return new j("mrow");
    if (Ra[e.type]) {
      var r = Ra[e.type](e, a);
      return r;
    } else throw new q("Got group of unknown type: '" + e.type + "'");
  };
  function kr(t, e, a, r, s) {
    var n = me(t, a), l;
    n.length === 1 && n[0] instanceof j && AS.has(n[0].type) ? l = n[0] : l = new j("mrow", n);
    var u = new j("annotation", [
      new ae(e)
    ]);
    u.setAttribute("encoding", "application/x-tex");
    var d = new j("semantics", [
      l,
      u
    ]), m = new j("math", [
      d
    ]);
    m.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), r && m.setAttribute("display", "block");
    var g = s ? "katex" : "katex-mathml";
    return T([
      g
    ], [
      m
    ]);
  }
  var MS = [
    [
      1,
      1,
      1
    ],
    [
      2,
      1,
      1
    ],
    [
      3,
      1,
      1
    ],
    [
      4,
      2,
      1
    ],
    [
      5,
      2,
      1
    ],
    [
      6,
      3,
      1
    ],
    [
      7,
      4,
      2
    ],
    [
      8,
      6,
      3
    ],
    [
      9,
      7,
      6
    ],
    [
      10,
      8,
      7
    ],
    [
      11,
      10,
      9
    ]
  ], _r = [
    0.5,
    0.6,
    0.7,
    0.8,
    0.9,
    1,
    1.2,
    1.44,
    1.728,
    2.074,
    2.488
  ], wr = function(e, a) {
    return a.size < 2 ? e : MS[e - 1][a.size - 1];
  };
  class Ae {
    constructor(e) {
      this.style = e.style, this.color = e.color, this.size = e.size || Ae.BASESIZE, this.textSize = e.textSize || this.size, this.phantom = !!e.phantom, this.font = e.font || "", this.fontFamily = e.fontFamily || "", this.fontWeight = e.fontWeight || "", this.fontShape = e.fontShape || "", this.sizeMultiplier = _r[this.size - 1], this.maxSize = e.maxSize, this.minRuleThickness = e.minRuleThickness, this._fontMetrics = void 0;
    }
    extend(e) {
      var a = {
        style: this.style,
        size: this.size,
        textSize: this.textSize,
        color: this.color,
        phantom: this.phantom,
        font: this.font,
        fontFamily: this.fontFamily,
        fontWeight: this.fontWeight,
        fontShape: this.fontShape,
        maxSize: this.maxSize,
        minRuleThickness: this.minRuleThickness
      };
      return Object.assign(a, e), new Ae(a);
    }
    havingStyle(e) {
      return this.style === e ? this : this.extend({
        style: e,
        size: wr(this.textSize, e)
      });
    }
    havingCrampedStyle() {
      return this.havingStyle(this.style.cramp());
    }
    havingSize(e) {
      return this.size === e && this.textSize === e ? this : this.extend({
        style: this.style.text(),
        size: e,
        textSize: e,
        sizeMultiplier: _r[e - 1]
      });
    }
    havingBaseStyle(e) {
      e = e || this.style.text();
      var a = wr(Ae.BASESIZE, e);
      return this.size === a && this.textSize === Ae.BASESIZE && this.style === e ? this : this.extend({
        style: e,
        size: a
      });
    }
    havingBaseSizing() {
      var e;
      switch (this.style.id) {
        case 4:
        case 5:
          e = 3;
          break;
        case 6:
        case 7:
          e = 1;
          break;
        default:
          e = 6;
      }
      return this.extend({
        style: this.style.text(),
        size: e
      });
    }
    withColor(e) {
      return this.extend({
        color: e
      });
    }
    withPhantom() {
      return this.extend({
        phantom: true
      });
    }
    withFont(e) {
      return this.extend({
        font: e
      });
    }
    withTextFontFamily(e) {
      return this.extend({
        fontFamily: e,
        font: ""
      });
    }
    withTextFontWeight(e) {
      return this.extend({
        fontWeight: e,
        font: ""
      });
    }
    withTextFontShape(e) {
      return this.extend({
        fontShape: e,
        font: ""
      });
    }
    sizingClasses(e) {
      return e.size !== this.size ? [
        "sizing",
        "reset-size" + e.size,
        "size" + this.size
      ] : [];
    }
    baseSizingClasses() {
      return this.size !== Ae.BASESIZE ? [
        "sizing",
        "reset-size" + this.size,
        "size" + Ae.BASESIZE
      ] : [];
    }
    fontMetrics() {
      return this._fontMetrics || (this._fontMetrics = uS(this.size)), this._fontMetrics;
    }
    getColor() {
      return this.phantom ? "transparent" : this.color;
    }
  }
  Ae.BASESIZE = 6;
  var is = function(e) {
    return new Ae({
      style: e.displayMode ? L.DISPLAY : L.TEXT,
      maxSize: e.maxSize,
      minRuleThickness: e.minRuleThickness
    });
  }, ls = function(e, a) {
    if (a.displayMode) {
      var r = [
        "katex-display"
      ];
      a.leqno && r.push("leqno"), a.fleqn && r.push("fleqn"), e = T(r, [
        e
      ]);
    }
    return e;
  }, TS = function(e, a, r) {
    var s = is(r), n;
    if (r.output === "mathml") return kr(e, a, s, r.displayMode, true);
    if (r.output === "html") {
      var l = Mt(e, s);
      n = T([
        "katex"
      ], [
        l
      ]);
    } else {
      var u = kr(e, a, s, r.displayMode, false), d = Mt(e, s);
      n = T([
        "katex"
      ], [
        u,
        d
      ]);
    }
    return ls(n, r);
  }, qS = function(e, a, r) {
    var s = is(r), n = Mt(e, s), l = T([
      "katex"
    ], [
      n
    ]);
    return ls(l, r);
  }, jS = {
    widehat: "^",
    widecheck: "\u02C7",
    widetilde: "~",
    utilde: "~",
    overleftarrow: "\u2190",
    underleftarrow: "\u2190",
    xleftarrow: "\u2190",
    overrightarrow: "\u2192",
    underrightarrow: "\u2192",
    xrightarrow: "\u2192",
    underbrace: "\u23DF",
    overbrace: "\u23DE",
    overgroup: "\u23E0",
    undergroup: "\u23E1",
    overleftrightarrow: "\u2194",
    underleftrightarrow: "\u2194",
    xleftrightarrow: "\u2194",
    Overrightarrow: "\u21D2",
    xRightarrow: "\u21D2",
    overleftharpoon: "\u21BC",
    xleftharpoonup: "\u21BC",
    overrightharpoon: "\u21C0",
    xrightharpoonup: "\u21C0",
    xLeftarrow: "\u21D0",
    xLeftrightarrow: "\u21D4",
    xhookleftarrow: "\u21A9",
    xhookrightarrow: "\u21AA",
    xmapsto: "\u21A6",
    xrightharpoondown: "\u21C1",
    xleftharpoondown: "\u21BD",
    xrightleftharpoons: "\u21CC",
    xleftrightharpoons: "\u21CB",
    xtwoheadleftarrow: "\u219E",
    xtwoheadrightarrow: "\u21A0",
    xlongequal: "=",
    xtofrom: "\u21C4",
    xrightleftarrows: "\u21C4",
    xrightequilibrium: "\u21CC",
    xleftequilibrium: "\u21CB",
    "\\cdrightarrow": "\u2192",
    "\\cdleftarrow": "\u2190",
    "\\cdlongequal": "="
  }, Ga = function(e) {
    var a = new j("mo", [
      new ae(jS[e.replace(/^\\/, "")])
    ]);
    return a.setAttribute("stretchy", "true"), a;
  }, DS = {
    overrightarrow: [
      [
        "rightarrow"
      ],
      0.888,
      522,
      "xMaxYMin"
    ],
    overleftarrow: [
      [
        "leftarrow"
      ],
      0.888,
      522,
      "xMinYMin"
    ],
    underrightarrow: [
      [
        "rightarrow"
      ],
      0.888,
      522,
      "xMaxYMin"
    ],
    underleftarrow: [
      [
        "leftarrow"
      ],
      0.888,
      522,
      "xMinYMin"
    ],
    xrightarrow: [
      [
        "rightarrow"
      ],
      1.469,
      522,
      "xMaxYMin"
    ],
    "\\cdrightarrow": [
      [
        "rightarrow"
      ],
      3,
      522,
      "xMaxYMin"
    ],
    xleftarrow: [
      [
        "leftarrow"
      ],
      1.469,
      522,
      "xMinYMin"
    ],
    "\\cdleftarrow": [
      [
        "leftarrow"
      ],
      3,
      522,
      "xMinYMin"
    ],
    Overrightarrow: [
      [
        "doublerightarrow"
      ],
      0.888,
      560,
      "xMaxYMin"
    ],
    xRightarrow: [
      [
        "doublerightarrow"
      ],
      1.526,
      560,
      "xMaxYMin"
    ],
    xLeftarrow: [
      [
        "doubleleftarrow"
      ],
      1.526,
      560,
      "xMinYMin"
    ],
    overleftharpoon: [
      [
        "leftharpoon"
      ],
      0.888,
      522,
      "xMinYMin"
    ],
    xleftharpoonup: [
      [
        "leftharpoon"
      ],
      0.888,
      522,
      "xMinYMin"
    ],
    xleftharpoondown: [
      [
        "leftharpoondown"
      ],
      0.888,
      522,
      "xMinYMin"
    ],
    overrightharpoon: [
      [
        "rightharpoon"
      ],
      0.888,
      522,
      "xMaxYMin"
    ],
    xrightharpoonup: [
      [
        "rightharpoon"
      ],
      0.888,
      522,
      "xMaxYMin"
    ],
    xrightharpoondown: [
      [
        "rightharpoondown"
      ],
      0.888,
      522,
      "xMaxYMin"
    ],
    xlongequal: [
      [
        "longequal"
      ],
      0.888,
      334,
      "xMinYMin"
    ],
    "\\cdlongequal": [
      [
        "longequal"
      ],
      3,
      334,
      "xMinYMin"
    ],
    xtwoheadleftarrow: [
      [
        "twoheadleftarrow"
      ],
      0.888,
      334,
      "xMinYMin"
    ],
    xtwoheadrightarrow: [
      [
        "twoheadrightarrow"
      ],
      0.888,
      334,
      "xMaxYMin"
    ],
    overleftrightarrow: [
      [
        "leftarrow",
        "rightarrow"
      ],
      0.888,
      522
    ],
    overbrace: [
      [
        "leftbrace",
        "midbrace",
        "rightbrace"
      ],
      1.6,
      548
    ],
    underbrace: [
      [
        "leftbraceunder",
        "midbraceunder",
        "rightbraceunder"
      ],
      1.6,
      548
    ],
    underleftrightarrow: [
      [
        "leftarrow",
        "rightarrow"
      ],
      0.888,
      522
    ],
    xleftrightarrow: [
      [
        "leftarrow",
        "rightarrow"
      ],
      1.75,
      522
    ],
    xLeftrightarrow: [
      [
        "doubleleftarrow",
        "doublerightarrow"
      ],
      1.75,
      560
    ],
    xrightleftharpoons: [
      [
        "leftharpoondownplus",
        "rightharpoonplus"
      ],
      1.75,
      716
    ],
    xleftrightharpoons: [
      [
        "leftharpoonplus",
        "rightharpoondownplus"
      ],
      1.75,
      716
    ],
    xhookleftarrow: [
      [
        "leftarrow",
        "righthook"
      ],
      1.08,
      522
    ],
    xhookrightarrow: [
      [
        "lefthook",
        "rightarrow"
      ],
      1.08,
      522
    ],
    overlinesegment: [
      [
        "leftlinesegment",
        "rightlinesegment"
      ],
      0.888,
      522
    ],
    underlinesegment: [
      [
        "leftlinesegment",
        "rightlinesegment"
      ],
      0.888,
      522
    ],
    overgroup: [
      [
        "leftgroup",
        "rightgroup"
      ],
      0.888,
      342
    ],
    undergroup: [
      [
        "leftgroupunder",
        "rightgroupunder"
      ],
      0.888,
      342
    ],
    xmapsto: [
      [
        "leftmapsto",
        "rightarrow"
      ],
      1.5,
      522
    ],
    xtofrom: [
      [
        "leftToFrom",
        "rightToFrom"
      ],
      1.75,
      528
    ],
    xrightleftarrows: [
      [
        "baraboveleftarrow",
        "rightarrowabovebar"
      ],
      1.75,
      901
    ],
    xrightequilibrium: [
      [
        "baraboveshortleftharpoon",
        "rightharpoonaboveshortbar"
      ],
      1.75,
      716
    ],
    xleftequilibrium: [
      [
        "shortbaraboveleftharpoon",
        "shortrightharpoonabovebar"
      ],
      1.75,
      716
    ]
  }, BS = /* @__PURE__ */ new Set([
    "widehat",
    "widecheck",
    "widetilde",
    "utilde"
  ]), Ua = function(e, a) {
    function r() {
      var u = 4e5, d = e.label.slice(1);
      if (BS.has(d)) {
        var m = e, g = m.base.type === "ordgroup" ? m.base.body.length : 1, _, h, b;
        if (g > 5) d === "widehat" || d === "widecheck" ? (_ = 420, u = 2364, b = 0.42, h = d + "4") : (_ = 312, u = 2340, b = 0.34, h = "tilde4");
        else {
          var S = [
            1,
            1,
            2,
            2,
            3,
            3
          ][g];
          d === "widehat" || d === "widecheck" ? (u = [
            0,
            1062,
            2364,
            2364,
            2364
          ][S], _ = [
            0,
            239,
            300,
            360,
            420
          ][S], b = [
            0,
            0.24,
            0.3,
            0.3,
            0.36,
            0.42
          ][S], h = d + S) : (u = [
            0,
            600,
            1033,
            2339,
            2340
          ][S], _ = [
            0,
            260,
            286,
            306,
            312
          ][S], b = [
            0,
            0.26,
            0.286,
            0.3,
            0.306,
            0.34
          ][S], h = "tilde" + S);
        }
        var v = new Oe(h), B = new Te([
          v
        ], {
          width: "100%",
          height: D(b),
          viewBox: "0 0 " + u + " " + _,
          preserveAspectRatio: "none"
        });
        return {
          span: He([], [
            B
          ], a),
          minWidth: 0,
          height: b
        };
      } else {
        var C = [], A = DS[d], [R, N, x] = A, i = x / 1e3, z = R.length, F, O;
        if (z === 1) {
          var X = A[3];
          F = [
            "hide-tail"
          ], O = [
            X
          ];
        } else if (z === 2) F = [
          "halfarrow-left",
          "halfarrow-right"
        ], O = [
          "xMinYMin",
          "xMaxYMin"
        ];
        else if (z === 3) F = [
          "brace-left",
          "brace-center",
          "brace-right"
        ], O = [
          "xMinYMin",
          "xMidYMin",
          "xMaxYMin"
        ];
        else throw new Error(`Correct katexImagesData or update code here to support
                    ` + z + " children.");
        for (var se = 0; se < z; se++) {
          var Q = new Oe(R[se]), Ge = new Te([
            Q
          ], {
            width: "400em",
            height: D(i),
            viewBox: "0 0 " + u + " " + x,
            preserveAspectRatio: O[se] + " slice"
          }), fe = He([
            F[se]
          ], [
            Ge
          ], a);
          if (z === 1) return {
            span: fe,
            minWidth: N,
            height: i
          };
          fe.style.height = D(i), C.push(fe);
        }
        return {
          span: T([
            "stretchy"
          ], C, a),
          minWidth: N,
          height: i
        };
      }
    }
    var { span: s, minWidth: n, height: l } = r();
    return s.height = l, s.style.height = D(l), n > 0 && (s.style.minWidth = D(n)), s;
  }, CS = function(e, a, r, s, n) {
    var l, u = e.height + e.depth + r + s;
    if (/fbox|color|angl/.test(a)) {
      if (l = T([
        "stretchy",
        a
      ], [], n), a === "fbox") {
        var d = n.color && n.getColor();
        d && (l.style.borderColor = d);
      }
    } else {
      var m = [];
      /^[bx]cancel$/.test(a) && m.push(new bt({
        x1: "0",
        y1: "0",
        x2: "100%",
        y2: "100%",
        "stroke-width": "0.046em"
      })), /^x?cancel$/.test(a) && m.push(new bt({
        x1: "0",
        y1: "100%",
        x2: "100%",
        y2: "0",
        "stroke-width": "0.046em"
      }));
      var g = new Te(m, {
        width: "100%",
        height: D(u)
      });
      l = He([], [
        g
      ], n);
    }
    return l.height = u, l.style.height = D(u), l;
  };
  function G(t, e) {
    if (!t || t.type !== e) throw new Error("Expected node of type " + e + ", but got " + (t ? "node of type " + t.type : String(t)));
    return t;
  }
  function $a(t) {
    var e = Va(t);
    if (!e) throw new Error("Expected node of symbol group type, but got " + (t ? "node of type " + t.type : String(t)));
    return e;
  }
  function Va(t) {
    return t && (t.type === "atom" || dS.hasOwnProperty(t.type)) ? t : null;
  }
  var fs = (t) => {
    if (t instanceof de) return t;
    if (lS(t) && t.children.length === 1) return fs(t.children[0]);
  }, Pt = (t, e) => {
    var a, r, s;
    t && t.type === "supsub" ? (r = G(t.base, "accent"), a = r.base, t.base = a, s = iS($(t, e)), t.base = r) : (r = G(t, "accent"), a = r.base);
    var n = $(a, e.havingCrampedStyle()), l = r.isShifty && qe(a), u = 0;
    if (l) {
      var d, m;
      u = (d = (m = fs(n)) == null ? void 0 : m.skew) != null ? d : 0;
    }
    var g = r.label === "\\c", _ = g ? n.height + n.depth : Math.min(n.height, e.fontMetrics().xHeight), h;
    if (r.isStretchy) h = Ua(r, e), h = U({
      positionType: "firstBaseline",
      children: [
        {
          type: "elem",
          elem: n
        },
        {
          type: "elem",
          elem: h,
          wrapperClasses: [
            "svg-align"
          ],
          wrapperStyle: u > 0 ? {
            width: "calc(100% - " + D(2 * u) + ")",
            marginLeft: D(2 * u)
          } : void 0
        }
      ]
    });
    else {
      var b, S;
      r.label === "\\vec" ? (b = rs("vec", e), S = ts.vec[1]) : (b = La({
        mode: r.mode,
        text: r.label
      }, e, "textord"), b = cS(b), b.italic = 0, S = b.width, g && (_ += b.depth)), h = T([
        "accent-body"
      ], [
        b
      ]);
      var v = r.label === "\\textcircled";
      v && (h.classes.push("accent-full"), _ = n.height);
      var B = u;
      v || (B -= S / 2), h.style.left = D(B), r.label === "\\textcircled" && (h.style.top = ".2em"), h = U({
        positionType: "firstBaseline",
        children: [
          {
            type: "elem",
            elem: n
          },
          {
            type: "kern",
            size: -_
          },
          {
            type: "elem",
            elem: h
          }
        ]
      });
    }
    var C = T([
      "mord",
      "accent"
    ], [
      h
    ], e);
    return s ? (s.children[0] = C, s.height = Math.max(C.height, s.height), s.classes[0] = "mord", s) : C;
  }, us = (t, e) => {
    var a = t.isStretchy ? Ga(t.label) : new j("mo", [
      ge(t.label, t.mode)
    ]), r = new j("mover", [
      V(t.base, e),
      a
    ]);
    return r.setAttribute("accent", "true"), r;
  }, ES = new RegExp([
    "\\acute",
    "\\grave",
    "\\ddot",
    "\\tilde",
    "\\bar",
    "\\breve",
    "\\check",
    "\\hat",
    "\\vec",
    "\\dot",
    "\\mathring"
  ].map((t) => "\\" + t).join("|"));
  E({
    type: "accent",
    names: [
      "\\acute",
      "\\grave",
      "\\ddot",
      "\\tilde",
      "\\bar",
      "\\breve",
      "\\check",
      "\\hat",
      "\\vec",
      "\\dot",
      "\\mathring",
      "\\widecheck",
      "\\widehat",
      "\\widetilde",
      "\\overrightarrow",
      "\\overleftarrow",
      "\\Overrightarrow",
      "\\overleftrightarrow",
      "\\overgroup",
      "\\overlinesegment",
      "\\overleftharpoon",
      "\\overrightharpoon"
    ],
    props: {
      numArgs: 1
    },
    handler: (t, e) => {
      var a = Fa(e[0]), r = !ES.test(t.funcName), s = !r || t.funcName === "\\widehat" || t.funcName === "\\widetilde" || t.funcName === "\\widecheck";
      return {
        type: "accent",
        mode: t.parser.mode,
        label: t.funcName,
        isStretchy: r,
        isShifty: s,
        base: a
      };
    },
    htmlBuilder: Pt,
    mathmlBuilder: us
  });
  E({
    type: "accent",
    names: [
      "\\'",
      "\\`",
      "\\^",
      "\\~",
      "\\=",
      "\\u",
      "\\.",
      '\\"',
      "\\c",
      "\\r",
      "\\H",
      "\\v",
      "\\textcircled"
    ],
    props: {
      numArgs: 1,
      allowedInText: true,
      allowedInMath: true,
      argTypes: [
        "primitive"
      ]
    },
    handler: (t, e) => {
      var a = e[0], r = t.parser.mode;
      return r === "math" && (t.parser.settings.reportNonstrict("mathVsTextAccents", "LaTeX's accent " + t.funcName + " works only in text mode"), r = "text"), {
        type: "accent",
        mode: r,
        label: t.funcName,
        isStretchy: false,
        isShifty: true,
        base: a
      };
    },
    htmlBuilder: Pt,
    mathmlBuilder: us
  });
  E({
    type: "accentUnder",
    names: [
      "\\underleftarrow",
      "\\underrightarrow",
      "\\underleftrightarrow",
      "\\undergroup",
      "\\underlinesegment",
      "\\utilde"
    ],
    props: {
      numArgs: 1
    },
    handler: (t, e) => {
      var { parser: a, funcName: r } = t, s = e[0];
      return {
        type: "accentUnder",
        mode: a.mode,
        label: r,
        base: s
      };
    },
    htmlBuilder: (t, e) => {
      var a = $(t.base, e), r = Ua(t, e), s = t.label === "\\utilde" ? 0.12 : 0, n = U({
        positionType: "top",
        positionData: a.height,
        children: [
          {
            type: "elem",
            elem: r,
            wrapperClasses: [
              "svg-align"
            ]
          },
          {
            type: "kern",
            size: s
          },
          {
            type: "elem",
            elem: a
          }
        ]
      });
      return T([
        "mord",
        "accentunder"
      ], [
        n
      ], e);
    },
    mathmlBuilder: (t, e) => {
      var a = Ga(t.label), r = new j("munder", [
        V(t.base, e),
        a
      ]);
      return r.setAttribute("accentunder", "true"), r;
    }
  });
  var qa = (t) => {
    var e = new j("mpadded", t ? [
      t
    ] : []);
    return e.setAttribute("width", "+0.6em"), e.setAttribute("lspace", "0.3em"), e;
  };
  E({
    type: "xArrow",
    names: [
      "\\xleftarrow",
      "\\xrightarrow",
      "\\xLeftarrow",
      "\\xRightarrow",
      "\\xleftrightarrow",
      "\\xLeftrightarrow",
      "\\xhookleftarrow",
      "\\xhookrightarrow",
      "\\xmapsto",
      "\\xrightharpoondown",
      "\\xrightharpoonup",
      "\\xleftharpoondown",
      "\\xleftharpoonup",
      "\\xrightleftharpoons",
      "\\xleftrightharpoons",
      "\\xlongequal",
      "\\xtwoheadrightarrow",
      "\\xtwoheadleftarrow",
      "\\xtofrom",
      "\\xrightleftarrows",
      "\\xrightequilibrium",
      "\\xleftequilibrium",
      "\\\\cdrightarrow",
      "\\\\cdleftarrow",
      "\\\\cdlongequal"
    ],
    props: {
      numArgs: 1,
      numOptionalArgs: 1
    },
    handler(t, e, a) {
      var { parser: r, funcName: s } = t;
      return {
        type: "xArrow",
        mode: r.mode,
        label: s,
        body: e[0],
        below: a[0]
      };
    },
    htmlBuilder(t, e) {
      var a = e.style, r = e.havingStyle(a.sup()), s = ta($(t.body, r, e), e), n = t.label.slice(0, 2) === "\\x" ? "x" : "cd";
      s.classes.push(n + "-arrow-pad");
      var l;
      t.below && (r = e.havingStyle(a.sub()), l = ta($(t.below, r, e), e), l.classes.push(n + "-arrow-pad"));
      var u = Ua(t, e), d = -e.fontMetrics().axisHeight + 0.5 * u.height, m = -e.fontMetrics().axisHeight - 0.5 * u.height - 0.111;
      (s.depth > 0.25 || t.label === "\\xleftequilibrium") && (m -= s.depth);
      var g;
      if (l) {
        var _ = -e.fontMetrics().axisHeight + l.height + 0.5 * u.height + 0.111;
        g = U({
          positionType: "individualShift",
          children: [
            {
              type: "elem",
              elem: s,
              shift: m
            },
            {
              type: "elem",
              elem: u,
              shift: d
            },
            {
              type: "elem",
              elem: l,
              shift: _
            }
          ]
        });
      } else g = U({
        positionType: "individualShift",
        children: [
          {
            type: "elem",
            elem: s,
            shift: m
          },
          {
            type: "elem",
            elem: u,
            shift: d
          }
        ]
      });
      return g.children[0].children[0].children[1].classes.push("svg-align"), T([
        "mrel",
        "x-arrow"
      ], [
        g
      ], e);
    },
    mathmlBuilder(t, e) {
      var a = Ga(t.label);
      a.setAttribute("minsize", t.label.charAt(0) === "x" ? "1.75em" : "3.0em");
      var r;
      if (t.body) {
        var s = qa(V(t.body, e));
        if (t.below) {
          var n = qa(V(t.below, e));
          r = new j("munderover", [
            a,
            n,
            s
          ]);
        } else r = new j("mover", [
          a,
          s
        ]);
      } else if (t.below) {
        var l = qa(V(t.below, e));
        r = new j("munder", [
          a,
          l
        ]);
      } else r = qa(), r = new j("mover", [
        a,
        r
      ]);
      return r;
    }
  });
  function hs(t, e) {
    var a = re(t.body, e, true);
    return T([
      t.mclass
    ], a, e);
  }
  function ds(t, e) {
    var a, r = me(t.body, e);
    return t.mclass === "minner" ? a = new j("mpadded", r) : t.mclass === "mord" ? t.isCharacterBox ? (a = r[0], a.type = "mi") : a = new j("mi", r) : (t.isCharacterBox ? (a = r[0], a.type = "mo") : a = new j("mo", r), t.mclass === "mbin" ? (a.attributes.lspace = "0.22em", a.attributes.rspace = "0.22em") : t.mclass === "mpunct" ? (a.attributes.lspace = "0em", a.attributes.rspace = "0.17em") : t.mclass === "mopen" || t.mclass === "mclose" ? (a.attributes.lspace = "0em", a.attributes.rspace = "0em") : t.mclass === "minner" && (a.attributes.lspace = "0.0556em", a.attributes.width = "+0.1111em")), a;
  }
  E({
    type: "mclass",
    names: [
      "\\mathord",
      "\\mathbin",
      "\\mathrel",
      "\\mathopen",
      "\\mathclose",
      "\\mathpunct",
      "\\mathinner"
    ],
    props: {
      numArgs: 1,
      primitive: true
    },
    handler(t, e) {
      var { parser: a, funcName: r } = t, s = e[0];
      return {
        type: "mclass",
        mode: a.mode,
        mclass: "m" + r.slice(5),
        body: ee(s),
        isCharacterBox: qe(s)
      };
    },
    htmlBuilder: hs,
    mathmlBuilder: ds
  });
  var Xa = (t) => {
    var e = t.type === "ordgroup" && t.body.length ? t.body[0] : t;
    return e.type === "atom" && (e.family === "bin" || e.family === "rel") ? "m" + e.family : "mord";
  };
  E({
    type: "mclass",
    names: [
      "\\@binrel"
    ],
    props: {
      numArgs: 2
    },
    handler(t, e) {
      var { parser: a } = t;
      return {
        type: "mclass",
        mode: a.mode,
        mclass: Xa(e[0]),
        body: ee(e[1]),
        isCharacterBox: qe(e[1])
      };
    }
  });
  E({
    type: "mclass",
    names: [
      "\\stackrel",
      "\\overset",
      "\\underset"
    ],
    props: {
      numArgs: 2
    },
    handler(t, e) {
      var { parser: a, funcName: r } = t, s = e[1], n = e[0], l;
      r !== "\\stackrel" ? l = Xa(s) : l = "mrel";
      var u = {
        type: "op",
        mode: s.mode,
        limits: true,
        alwaysHandleSupSub: true,
        parentIsSupSub: false,
        symbol: false,
        suppressBaseShift: r !== "\\stackrel",
        body: ee(s)
      }, d = {
        type: "supsub",
        mode: n.mode,
        base: u,
        sup: r === "\\underset" ? null : n,
        sub: r === "\\underset" ? n : null
      };
      return {
        type: "mclass",
        mode: a.mode,
        mclass: l,
        body: [
          d
        ],
        isCharacterBox: qe(d)
      };
    },
    htmlBuilder: hs,
    mathmlBuilder: ds
  });
  E({
    type: "pmb",
    names: [
      "\\pmb"
    ],
    props: {
      numArgs: 1,
      allowedInText: true
    },
    handler(t, e) {
      var { parser: a } = t;
      return {
        type: "pmb",
        mode: a.mode,
        mclass: Xa(e[0]),
        body: ee(e[0])
      };
    },
    htmlBuilder(t, e) {
      var a = re(t.body, e, true), r = T([
        t.mclass
      ], a, e);
      return r.style.textShadow = "0.02em 0.01em 0.04px", r;
    },
    mathmlBuilder(t, e) {
      var a = me(t.body, e), r = new j("mstyle", a);
      return r.setAttribute("style", "text-shadow: 0.02em 0.01em 0.04px"), r;
    }
  });
  var IS = {
    ">": "\\\\cdrightarrow",
    "<": "\\\\cdleftarrow",
    "=": "\\\\cdlongequal",
    A: "\\uparrow",
    V: "\\downarrow",
    "|": "\\Vert",
    ".": "no arrow"
  }, br = () => ({
    type: "styling",
    body: [],
    mode: "math",
    style: "display"
  }), vr = (t) => t.type === "textord" && t.text === "@", NS = (t, e) => (t.type === "mathord" || t.type === "atom") && t.text === e;
  function RS(t, e, a) {
    var r = IS[t];
    switch (r) {
      case "\\\\cdrightarrow":
      case "\\\\cdleftarrow":
        return a.callFunction(r, [
          e[0]
        ], [
          e[1]
        ]);
      case "\\uparrow":
      case "\\downarrow": {
        var s = a.callFunction("\\\\cdleft", [
          e[0]
        ], []), n = {
          type: "atom",
          text: r,
          mode: "math",
          family: "rel"
        }, l = a.callFunction("\\Big", [
          n
        ], []), u = a.callFunction("\\\\cdright", [
          e[1]
        ], []), d = {
          type: "ordgroup",
          mode: "math",
          body: [
            s,
            l,
            u
          ]
        };
        return a.callFunction("\\\\cdparent", [
          d
        ], []);
      }
      case "\\\\cdlongequal":
        return a.callFunction("\\\\cdlongequal", [], []);
      case "\\Vert": {
        var m = {
          type: "textord",
          text: "\\Vert",
          mode: "math"
        };
        return a.callFunction("\\Big", [
          m
        ], []);
      }
      default:
        return {
          type: "textord",
          text: " ",
          mode: "math"
        };
    }
  }
  function FS(t) {
    var e = [];
    for (t.gullet.beginGroup(), t.gullet.macros.set("\\cr", "\\\\\\relax"), t.gullet.beginGroup(); ; ) {
      e.push(t.parseExpression(false, "\\\\")), t.gullet.endGroup(), t.gullet.beginGroup();
      var a = t.fetch().text;
      if (a === "&" || a === "\\\\") t.consume();
      else if (a === "\\end") {
        e[e.length - 1].length === 0 && e.pop();
        break;
      } else throw new q("Expected \\\\ or \\cr or \\end", t.nextToken);
    }
    for (var r = [], s = [
      r
    ], n = 0; n < e.length; n++) {
      for (var l = e[n], u = br(), d = 0; d < l.length; d++) if (!vr(l[d])) u.body.push(l[d]);
      else {
        r.push(u), d += 1;
        var m = $a(l[d]).text, g = new Array(2);
        if (g[0] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, g[1] = {
          type: "ordgroup",
          mode: "math",
          body: []
        }, !"=|.".includes(m)) if ("<>AV".includes(m)) for (var _ = 0; _ < 2; _++) {
          for (var h = true, b = d + 1; b < l.length; b++) {
            if (NS(l[b], m)) {
              h = false, d = b;
              break;
            }
            if (vr(l[b])) throw new q("Missing a " + m + " character to complete a CD arrow.", l[b]);
            g[_].body.push(l[b]);
          }
          if (h) throw new q("Missing a " + m + " character to complete a CD arrow.", l[d]);
        }
        else throw new q('Expected one of "<>AV=|." after @', l[d]);
        var S = RS(m, g, t), v = {
          type: "styling",
          body: [
            S
          ],
          mode: "math",
          style: "display"
        };
        r.push(v), u = br();
      }
      n % 2 === 0 ? r.push(u) : r.shift(), r = [], s.push(r);
    }
    t.gullet.endGroup(), t.gullet.endGroup();
    var B = new Array(s[0].length).fill({
      type: "align",
      align: "c",
      pregap: 0.25,
      postgap: 0.25
    });
    return {
      type: "array",
      mode: "math",
      body: s,
      arraystretch: 1,
      addJot: true,
      rowGaps: [
        null
      ],
      cols: B,
      colSeparationType: "CD",
      hLinesBeforeRow: new Array(s.length + 1).fill([])
    };
  }
  E({
    type: "cdlabel",
    names: [
      "\\\\cdleft",
      "\\\\cdright"
    ],
    props: {
      numArgs: 1
    },
    handler(t, e) {
      var { parser: a, funcName: r } = t;
      return {
        type: "cdlabel",
        mode: a.mode,
        side: r.slice(4),
        label: e[0]
      };
    },
    htmlBuilder(t, e) {
      var a = e.havingStyle(e.style.sup()), r = ta($(t.label, a, e), e);
      return r.classes.push("cd-label-" + t.side), r.style.bottom = D(0.8 - r.depth), r.height = 0, r.depth = 0, r;
    },
    mathmlBuilder(t, e) {
      var a = new j("mrow", [
        V(t.label, e)
      ]);
      return a = new j("mpadded", [
        a
      ]), a.setAttribute("width", "0"), t.side === "left" && a.setAttribute("lspace", "-1width"), a.setAttribute("voffset", "0.7em"), a = new j("mstyle", [
        a
      ]), a.setAttribute("displaystyle", "false"), a.setAttribute("scriptlevel", "1"), a;
    }
  });
  E({
    type: "cdlabelparent",
    names: [
      "\\\\cdparent"
    ],
    props: {
      numArgs: 1
    },
    handler(t, e) {
      var { parser: a } = t;
      return {
        type: "cdlabelparent",
        mode: a.mode,
        fragment: e[0]
      };
    },
    htmlBuilder(t, e) {
      var a = ta($(t.fragment, e), e);
      return a.classes.push("cd-vert-arrow"), a;
    },
    mathmlBuilder(t, e) {
      return new j("mrow", [
        V(t.fragment, e)
      ]);
    }
  });
  E({
    type: "textord",
    names: [
      "\\@char"
    ],
    props: {
      numArgs: 1,
      allowedInText: true
    },
    handler(t, e) {
      for (var { parser: a } = t, r = G(e[0], "ordgroup"), s = r.body, n = "", l = 0; l < s.length; l++) {
        var u = G(s[l], "textord");
        n += u.text;
      }
      var d = parseInt(n), m;
      if (isNaN(d)) throw new q("\\@char has non-numeric argument " + n);
      if (d < 0 || d >= 1114111) throw new q("\\@char with invalid code point " + n);
      return d <= 65535 ? m = String.fromCharCode(d) : (d -= 65536, m = String.fromCharCode((d >> 10) + 55296, (d & 1023) + 56320)), {
        type: "textord",
        mode: a.mode,
        text: m
      };
    }
  });
  var ps = (t, e) => {
    var a = re(t.body, e.withColor(t.color), false);
    return De(a);
  }, ms = (t, e) => {
    var a = me(t.body, e.withColor(t.color)), r = new j("mstyle", a);
    return r.setAttribute("mathcolor", t.color), r;
  };
  E({
    type: "color",
    names: [
      "\\textcolor"
    ],
    props: {
      numArgs: 2,
      allowedInText: true,
      argTypes: [
        "color",
        "original"
      ]
    },
    handler(t, e) {
      var { parser: a } = t, r = G(e[0], "color-token").color, s = e[1];
      return {
        type: "color",
        mode: a.mode,
        color: r,
        body: ee(s)
      };
    },
    htmlBuilder: ps,
    mathmlBuilder: ms
  });
  E({
    type: "color",
    names: [
      "\\color"
    ],
    props: {
      numArgs: 1,
      allowedInText: true,
      argTypes: [
        "color"
      ]
    },
    handler(t, e) {
      var { parser: a, breakOnTokenText: r } = t, s = G(e[0], "color-token").color;
      a.gullet.macros.set("\\current@color", s);
      var n = a.parseExpression(true, r);
      return {
        type: "color",
        mode: a.mode,
        color: s,
        body: n
      };
    },
    htmlBuilder: ps,
    mathmlBuilder: ms
  });
  E({
    type: "cr",
    names: [
      "\\\\"
    ],
    props: {
      numArgs: 0,
      numOptionalArgs: 0,
      allowedInText: true
    },
    handler(t, e, a) {
      var { parser: r } = t, s = r.gullet.future().text === "[" ? r.parseSizeGroup(true) : null, n = !r.settings.displayMode || !r.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode");
      return {
        type: "cr",
        mode: r.mode,
        newLine: n,
        size: s && G(s, "size").value
      };
    },
    htmlBuilder(t, e) {
      var a = T([
        "mspace"
      ], [], e);
      return t.newLine && (a.classes.push("newline"), t.size && (a.style.marginTop = D(K(t.size, e)))), a;
    },
    mathmlBuilder(t, e) {
      var a = new j("mspace");
      return t.newLine && (a.setAttribute("linebreak", "newline"), t.size && a.setAttribute("height", D(K(t.size, e)))), a;
    }
  });
  var Tt = {
    "\\global": "\\global",
    "\\long": "\\\\globallong",
    "\\\\globallong": "\\\\globallong",
    "\\def": "\\gdef",
    "\\gdef": "\\gdef",
    "\\edef": "\\xdef",
    "\\xdef": "\\xdef",
    "\\let": "\\\\globallet",
    "\\futurelet": "\\\\globalfuture"
  }, ys = (t) => {
    var e = t.text;
    if (/^(?:[\\{}$&#^_]|EOF)$/.test(e)) throw new q("Expected a control sequence", t);
    return e;
  }, OS = (t) => {
    var e = t.gullet.popToken();
    return e.text === "=" && (e = t.gullet.popToken(), e.text === " " && (e = t.gullet.popToken())), e;
  }, gs = (t, e, a, r) => {
    var s = t.gullet.macros.get(a.text);
    s == null && (a.noexpand = true, s = {
      tokens: [
        a
      ],
      numArgs: 0,
      unexpandable: !t.gullet.isExpandable(a.text)
    }), t.gullet.macros.set(e, s, r);
  };
  E({
    type: "internal",
    names: [
      "\\global",
      "\\long",
      "\\\\globallong"
    ],
    props: {
      numArgs: 0,
      allowedInText: true
    },
    handler(t) {
      var { parser: e, funcName: a } = t;
      e.consumeSpaces();
      var r = e.fetch();
      if (Tt[r.text]) return (a === "\\global" || a === "\\\\globallong") && (r.text = Tt[r.text]), G(e.parseFunction(), "internal");
      throw new q("Invalid token after macro prefix", r);
    }
  });
  E({
    type: "internal",
    names: [
      "\\def",
      "\\gdef",
      "\\edef",
      "\\xdef"
    ],
    props: {
      numArgs: 0,
      allowedInText: true,
      primitive: true
    },
    handler(t) {
      var { parser: e, funcName: a } = t, r = e.gullet.popToken(), s = r.text;
      if (/^(?:[\\{}$&#^_]|EOF)$/.test(s)) throw new q("Expected a control sequence", r);
      for (var n = 0, l, u = [
        []
      ]; e.gullet.future().text !== "{"; ) if (r = e.gullet.popToken(), r.text === "#") {
        if (e.gullet.future().text === "{") {
          l = e.gullet.future(), u[n].push("{");
          break;
        }
        if (r = e.gullet.popToken(), !/^[1-9]$/.test(r.text)) throw new q('Invalid argument number "' + r.text + '"');
        if (parseInt(r.text) !== n + 1) throw new q('Argument number "' + r.text + '" out of order');
        n++, u.push([]);
      } else {
        if (r.text === "EOF") throw new q("Expected a macro definition");
        u[n].push(r.text);
      }
      var { tokens: d } = e.gullet.consumeArg();
      return l && d.unshift(l), (a === "\\edef" || a === "\\xdef") && (d = e.gullet.expandTokens(d), d.reverse()), e.gullet.macros.set(s, {
        tokens: d,
        numArgs: n,
        delimiters: u
      }, a === Tt[a]), {
        type: "internal",
        mode: e.mode
      };
    }
  });
  E({
    type: "internal",
    names: [
      "\\let",
      "\\\\globallet"
    ],
    props: {
      numArgs: 0,
      allowedInText: true,
      primitive: true
    },
    handler(t) {
      var { parser: e, funcName: a } = t, r = ys(e.gullet.popToken());
      e.gullet.consumeSpaces();
      var s = OS(e);
      return gs(e, r, s, a === "\\\\globallet"), {
        type: "internal",
        mode: e.mode
      };
    }
  });
  E({
    type: "internal",
    names: [
      "\\futurelet",
      "\\\\globalfuture"
    ],
    props: {
      numArgs: 0,
      allowedInText: true,
      primitive: true
    },
    handler(t) {
      var { parser: e, funcName: a } = t, r = ys(e.gullet.popToken()), s = e.gullet.popToken(), n = e.gullet.popToken();
      return gs(e, r, n, a === "\\\\globalfuture"), e.gullet.pushToken(n), e.gullet.pushToken(s), {
        type: "internal",
        mode: e.mode
      };
    }
  });
  var la = function(e, a, r) {
    var s = W.math[e] && W.math[e].replace, n = Nt(s || e, a, r);
    if (!n) throw new Error("Unsupported symbol " + e + " and font size " + a + ".");
    return n;
  }, Lt = function(e, a, r, s) {
    var n = r.havingBaseStyle(a), l = T(s.concat(n.sizingClasses(r)), [
      e
    ], r), u = n.sizeMultiplier / r.sizeMultiplier;
    return l.height *= u, l.depth *= u, l.maxFontSize = n.sizeMultiplier, l;
  }, ks = function(e, a, r) {
    var s = a.havingBaseStyle(r), n = (1 - a.sizeMultiplier / s.sizeMultiplier) * a.fontMetrics().axisHeight;
    e.classes.push("delimcenter"), e.style.top = D(n), e.height -= n, e.depth += n;
  }, HS = function(e, a, r, s, n, l) {
    var u = ce(e, "Main-Regular", n, s), d = Lt(u, a, s, l);
    return ks(d, s, a), d;
  }, PS = function(e, a, r, s) {
    return ce(e, "Size" + a + "-Regular", r, s);
  }, _s = function(e, a, r, s, n, l) {
    var u = PS(e, a, n, s), d = Lt(T([
      "delimsizing",
      "size" + a
    ], [
      u
    ], s), L.TEXT, s, l);
    return r && ks(d, s, L.TEXT), d;
  }, it = function(e, a, r) {
    var s;
    a === "Size1-Regular" ? s = "delim-size1" : s = "delim-size4";
    var n = T([
      "delimsizinginner",
      s
    ], [
      T([], [
        ce(e, a, r)
      ])
    ]);
    return {
      type: "elem",
      elem: n
    };
  }, lt = function(e, a, r) {
    var s = be["Size4-Regular"][e.charCodeAt(0)] ? be["Size4-Regular"][e.charCodeAt(0)][4] : be["Size1-Regular"][e.charCodeAt(0)][4], n = new Oe("inner", aS(e, Math.round(1e3 * a))), l = new Te([
      n
    ], {
      width: D(s),
      height: D(a),
      style: "width:" + D(s),
      viewBox: "0 0 " + 1e3 * s + " " + Math.round(1e3 * a),
      preserveAspectRatio: "xMinYMin"
    }), u = He([], [
      l
    ], r);
    return u.height = a, u.style.height = D(a), u.style.width = D(s), {
      type: "elem",
      elem: u
    };
  }, qt = 8e-3, ja = {
    type: "kern",
    size: -1 * qt
  }, LS = /* @__PURE__ */ new Set([
    "|",
    "\\lvert",
    "\\rvert",
    "\\vert"
  ]), GS = /* @__PURE__ */ new Set([
    "\\|",
    "\\lVert",
    "\\rVert",
    "\\Vert"
  ]), ws = function(e, a, r, s, n, l) {
    var u, d, m, g, _ = "", h = 0;
    u = m = g = e, d = null;
    var b = "Size1-Regular";
    e === "\\uparrow" ? m = g = "\u23D0" : e === "\\Uparrow" ? m = g = "\u2016" : e === "\\downarrow" ? u = m = "\u23D0" : e === "\\Downarrow" ? u = m = "\u2016" : e === "\\updownarrow" ? (u = "\\uparrow", m = "\u23D0", g = "\\downarrow") : e === "\\Updownarrow" ? (u = "\\Uparrow", m = "\u2016", g = "\\Downarrow") : LS.has(e) ? (m = "\u2223", _ = "vert", h = 333) : GS.has(e) ? (m = "\u2225", _ = "doublevert", h = 556) : e === "[" || e === "\\lbrack" ? (u = "\u23A1", m = "\u23A2", g = "\u23A3", b = "Size4-Regular", _ = "lbrack", h = 667) : e === "]" || e === "\\rbrack" ? (u = "\u23A4", m = "\u23A5", g = "\u23A6", b = "Size4-Regular", _ = "rbrack", h = 667) : e === "\\lfloor" || e === "\u230A" ? (m = u = "\u23A2", g = "\u23A3", b = "Size4-Regular", _ = "lfloor", h = 667) : e === "\\lceil" || e === "\u2308" ? (u = "\u23A1", m = g = "\u23A2", b = "Size4-Regular", _ = "lceil", h = 667) : e === "\\rfloor" || e === "\u230B" ? (m = u = "\u23A5", g = "\u23A6", b = "Size4-Regular", _ = "rfloor", h = 667) : e === "\\rceil" || e === "\u2309" ? (u = "\u23A4", m = g = "\u23A5", b = "Size4-Regular", _ = "rceil", h = 667) : e === "(" || e === "\\lparen" ? (u = "\u239B", m = "\u239C", g = "\u239D", b = "Size4-Regular", _ = "lparen", h = 875) : e === ")" || e === "\\rparen" ? (u = "\u239E", m = "\u239F", g = "\u23A0", b = "Size4-Regular", _ = "rparen", h = 875) : e === "\\{" || e === "\\lbrace" ? (u = "\u23A7", d = "\u23A8", g = "\u23A9", m = "\u23AA", b = "Size4-Regular") : e === "\\}" || e === "\\rbrace" ? (u = "\u23AB", d = "\u23AC", g = "\u23AD", m = "\u23AA", b = "Size4-Regular") : e === "\\lgroup" || e === "\u27EE" ? (u = "\u23A7", g = "\u23A9", m = "\u23AA", b = "Size4-Regular") : e === "\\rgroup" || e === "\u27EF" ? (u = "\u23AB", g = "\u23AD", m = "\u23AA", b = "Size4-Regular") : e === "\\lmoustache" || e === "\u23B0" ? (u = "\u23A7", g = "\u23AD", m = "\u23AA", b = "Size4-Regular") : (e === "\\rmoustache" || e === "\u23B1") && (u = "\u23AB", g = "\u23A9", m = "\u23AA", b = "Size4-Regular");
    var S = la(u, b, n), v = S.height + S.depth, B = la(m, b, n), C = B.height + B.depth, A = la(g, b, n), R = A.height + A.depth, N = 0, x = 1;
    if (d !== null) {
      var i = la(d, b, n);
      N = i.height + i.depth, x = 2;
    }
    var z = v + R + N, F = Math.max(0, Math.ceil((a - z) / (x * C))), O = z + F * x * C, X = s.fontMetrics().axisHeight;
    r && (X *= s.sizeMultiplier);
    var se = O / 2 - X, Q = [];
    if (_.length > 0) {
      var Ge = O - v - R, fe = Math.round(O * 1e3), ke = tS(_, Math.round(Ge * 1e3)), Be = new Oe(_, ke), We = (h / 1e3).toFixed(3) + "em", Ye = (fe / 1e3).toFixed(3) + "em", Ka = new Te([
        Be
      ], {
        width: We,
        height: Ye,
        viewBox: "0 0 " + h + " " + fe
      }), Ce = He([], [
        Ka
      ], s);
      Ce.height = fe / 1e3, Ce.style.width = We, Ce.style.height = Ye, Q.push({
        type: "elem",
        elem: Ce
      });
    } else {
      if (Q.push(it(g, b, n)), Q.push(ja), d === null) {
        var Ee = O - v - R + 2 * qt;
        Q.push(lt(m, Ee, s));
      } else {
        var ca = (O - v - R - N) / 2 + 2 * qt;
        Q.push(lt(m, ca, s)), Q.push(ja), Q.push(it(d, b, n)), Q.push(ja), Q.push(lt(m, ca, s));
      }
      Q.push(ja), Q.push(it(u, b, n));
    }
    var _e = s.havingBaseStyle(L.TEXT), pa = U({
      positionType: "bottom",
      positionData: se,
      children: Q
    });
    return Lt(T([
      "delimsizing",
      "mult"
    ], [
      pa
    ], _e), L.TEXT, s, l);
  }, ft = 80, ut = 0.08, ht = function(e, a, r, s, n) {
    var l = eS(e, s, r), u = new Oe(e, l), d = new Te([
      u
    ], {
      width: "400em",
      height: D(a),
      viewBox: "0 0 400000 " + r,
      preserveAspectRatio: "xMinYMin slice"
    });
    return He([
      "hide-tail"
    ], [
      d
    ], n);
  }, US = function(e, a) {
    var r = a.havingBaseSizing(), s = Ss("\\surd", e * r.sizeMultiplier, xs, r), n = r.sizeMultiplier, l = Math.max(0, a.minRuleThickness - a.fontMetrics().sqrtRuleThickness), u, d = 0, m = 0, g = 0, _;
    return s.type === "small" ? (g = 1e3 + 1e3 * l + ft, e < 1 ? n = 1 : e < 1.4 && (n = 0.7), d = (1 + l + ut) / n, m = (1 + l) / n, u = ht("sqrtMain", d, g, l, a), u.style.minWidth = "0.853em", _ = 0.833 / n) : s.type === "large" ? (g = (1e3 + ft) * fa[s.size], m = (fa[s.size] + l) / n, d = (fa[s.size] + l + ut) / n, u = ht("sqrtSize" + s.size, d, g, l, a), u.style.minWidth = "1.02em", _ = 1 / n) : (d = e + l + ut, m = e + l, g = Math.floor(1e3 * e + l) + ft, u = ht("sqrtTall", d, g, l, a), u.style.minWidth = "0.742em", _ = 1.056), u.height = m, u.style.height = D(d), {
      span: u,
      advanceWidth: _,
      ruleWidth: (a.fontMetrics().sqrtRuleThickness + l) * n
    };
  }, bs = /* @__PURE__ */ new Set([
    "(",
    "\\lparen",
    ")",
    "\\rparen",
    "[",
    "\\lbrack",
    "]",
    "\\rbrack",
    "\\{",
    "\\lbrace",
    "\\}",
    "\\rbrace",
    "\\lfloor",
    "\\rfloor",
    "\u230A",
    "\u230B",
    "\\lceil",
    "\\rceil",
    "\u2308",
    "\u2309",
    "\\surd"
  ]), $S = /* @__PURE__ */ new Set([
    "\\uparrow",
    "\\downarrow",
    "\\updownarrow",
    "\\Uparrow",
    "\\Downarrow",
    "\\Updownarrow",
    "|",
    "\\|",
    "\\vert",
    "\\Vert",
    "\\lvert",
    "\\rvert",
    "\\lVert",
    "\\rVert",
    "\\lgroup",
    "\\rgroup",
    "\u27EE",
    "\u27EF",
    "\\lmoustache",
    "\\rmoustache",
    "\u23B0",
    "\u23B1"
  ]), vs = /* @__PURE__ */ new Set([
    "<",
    ">",
    "\\langle",
    "\\rangle",
    "/",
    "\\backslash",
    "\\lt",
    "\\gt"
  ]), fa = [
    0,
    1.2,
    1.8,
    2.4,
    3
  ], zs = function(e, a, r, s, n) {
    if (e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle"), bs.has(e) || vs.has(e)) return _s(e, a, false, r, s, n);
    if ($S.has(e)) return ws(e, fa[a], false, r, s, n);
    throw new q("Illegal delimiter: '" + e + "'");
  }, VS = [
    {
      type: "small",
      style: L.SCRIPTSCRIPT
    },
    {
      type: "small",
      style: L.SCRIPT
    },
    {
      type: "small",
      style: L.TEXT
    },
    {
      type: "large",
      size: 1
    },
    {
      type: "large",
      size: 2
    },
    {
      type: "large",
      size: 3
    },
    {
      type: "large",
      size: 4
    }
  ], XS = [
    {
      type: "small",
      style: L.SCRIPTSCRIPT
    },
    {
      type: "small",
      style: L.SCRIPT
    },
    {
      type: "small",
      style: L.TEXT
    },
    {
      type: "stack"
    }
  ], xs = [
    {
      type: "small",
      style: L.SCRIPTSCRIPT
    },
    {
      type: "small",
      style: L.SCRIPT
    },
    {
      type: "small",
      style: L.TEXT
    },
    {
      type: "large",
      size: 1
    },
    {
      type: "large",
      size: 2
    },
    {
      type: "large",
      size: 3
    },
    {
      type: "large",
      size: 4
    },
    {
      type: "stack"
    }
  ], WS = function(e) {
    if (e.type === "small") return "Main-Regular";
    if (e.type === "large") return "Size" + e.size + "-Regular";
    if (e.type === "stack") return "Size4-Regular";
    var a = e.type;
    throw new Error("Add support for delim type '" + a + "' here.");
  }, Ss = function(e, a, r, s) {
    for (var n = Math.min(2, 3 - s.style.size), l = n; l < r.length; l++) {
      var u = r[l];
      if (u.type === "stack") break;
      var d = la(e, WS(u), "math"), m = d.height + d.depth;
      if (u.type === "small") {
        var g = s.havingBaseStyle(u.style);
        m *= g.sizeMultiplier;
      }
      if (m > a) return u;
    }
    return r[r.length - 1];
  }, jt = function(e, a, r, s, n, l) {
    e === "<" || e === "\\lt" || e === "\u27E8" ? e = "\\langle" : (e === ">" || e === "\\gt" || e === "\u27E9") && (e = "\\rangle");
    var u;
    vs.has(e) ? u = VS : bs.has(e) ? u = xs : u = XS;
    var d = Ss(e, a, u, s);
    return d.type === "small" ? HS(e, d.style, r, s, n, l) : d.type === "large" ? _s(e, d.size, r, s, n, l) : ws(e, a, r, s, n, l);
  }, dt = function(e, a, r, s, n, l) {
    var u = s.fontMetrics().axisHeight * s.sizeMultiplier, d = 901, m = 5 / s.fontMetrics().ptPerEm, g = Math.max(a - u, r + u), _ = Math.max(g / 500 * d, 2 * g - m);
    return jt(e, _, true, s, n, l);
  }, zr = {
    "\\bigl": {
      mclass: "mopen",
      size: 1
    },
    "\\Bigl": {
      mclass: "mopen",
      size: 2
    },
    "\\biggl": {
      mclass: "mopen",
      size: 3
    },
    "\\Biggl": {
      mclass: "mopen",
      size: 4
    },
    "\\bigr": {
      mclass: "mclose",
      size: 1
    },
    "\\Bigr": {
      mclass: "mclose",
      size: 2
    },
    "\\biggr": {
      mclass: "mclose",
      size: 3
    },
    "\\Biggr": {
      mclass: "mclose",
      size: 4
    },
    "\\bigm": {
      mclass: "mrel",
      size: 1
    },
    "\\Bigm": {
      mclass: "mrel",
      size: 2
    },
    "\\biggm": {
      mclass: "mrel",
      size: 3
    },
    "\\Biggm": {
      mclass: "mrel",
      size: 4
    },
    "\\big": {
      mclass: "mord",
      size: 1
    },
    "\\Big": {
      mclass: "mord",
      size: 2
    },
    "\\bigg": {
      mclass: "mord",
      size: 3
    },
    "\\Bigg": {
      mclass: "mord",
      size: 4
    }
  }, YS = /* @__PURE__ */ new Set([
    "(",
    "\\lparen",
    ")",
    "\\rparen",
    "[",
    "\\lbrack",
    "]",
    "\\rbrack",
    "\\{",
    "\\lbrace",
    "\\}",
    "\\rbrace",
    "\\lfloor",
    "\\rfloor",
    "\u230A",
    "\u230B",
    "\\lceil",
    "\\rceil",
    "\u2308",
    "\u2309",
    "<",
    ">",
    "\\langle",
    "\u27E8",
    "\\rangle",
    "\u27E9",
    "\\lt",
    "\\gt",
    "\\lvert",
    "\\rvert",
    "\\lVert",
    "\\rVert",
    "\\lgroup",
    "\\rgroup",
    "\u27EE",
    "\u27EF",
    "\\lmoustache",
    "\\rmoustache",
    "\u23B0",
    "\u23B1",
    "/",
    "\\backslash",
    "|",
    "\\vert",
    "\\|",
    "\\Vert",
    "\\uparrow",
    "\\Uparrow",
    "\\downarrow",
    "\\Downarrow",
    "\\updownarrow",
    "\\Updownarrow",
    "."
  ]);
  function Wa(t, e) {
    var a = Va(t);
    if (a && YS.has(a.text)) return a;
    throw a ? new q("Invalid delimiter '" + a.text + "' after '" + e.funcName + "'", t) : new q("Invalid delimiter type '" + t.type + "'", t);
  }
  E({
    type: "delimsizing",
    names: [
      "\\bigl",
      "\\Bigl",
      "\\biggl",
      "\\Biggl",
      "\\bigr",
      "\\Bigr",
      "\\biggr",
      "\\Biggr",
      "\\bigm",
      "\\Bigm",
      "\\biggm",
      "\\Biggm",
      "\\big",
      "\\Big",
      "\\bigg",
      "\\Bigg"
    ],
    props: {
      numArgs: 1,
      argTypes: [
        "primitive"
      ]
    },
    handler: (t, e) => {
      var a = Wa(e[0], t);
      return {
        type: "delimsizing",
        mode: t.parser.mode,
        size: zr[t.funcName].size,
        mclass: zr[t.funcName].mclass,
        delim: a.text
      };
    },
    htmlBuilder: (t, e) => t.delim === "." ? T([
      t.mclass
    ]) : zs(t.delim, t.size, e, t.mode, [
      t.mclass
    ]),
    mathmlBuilder: (t) => {
      var e = [];
      t.delim !== "." && e.push(ge(t.delim, t.mode));
      var a = new j("mo", e);
      t.mclass === "mopen" || t.mclass === "mclose" ? a.setAttribute("fence", "true") : a.setAttribute("fence", "false"), a.setAttribute("stretchy", "true");
      var r = D(fa[t.size]);
      return a.setAttribute("minsize", r), a.setAttribute("maxsize", r), a;
    }
  });
  function xr(t) {
    if (!t.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.");
  }
  E({
    type: "leftright-right",
    names: [
      "\\right"
    ],
    props: {
      numArgs: 1,
      primitive: true
    },
    handler: (t, e) => {
      var a = t.parser.gullet.macros.get("\\current@color");
      if (a && typeof a != "string") throw new q("\\current@color set to non-string in \\right");
      return {
        type: "leftright-right",
        mode: t.parser.mode,
        delim: Wa(e[0], t).text,
        color: a
      };
    }
  });
  E({
    type: "leftright",
    names: [
      "\\left"
    ],
    props: {
      numArgs: 1,
      primitive: true
    },
    handler: (t, e) => {
      var a = Wa(e[0], t), r = t.parser;
      ++r.leftrightDepth;
      var s = r.parseExpression(false);
      --r.leftrightDepth, r.expect("\\right", false);
      var n = G(r.parseFunction(), "leftright-right");
      return {
        type: "leftright",
        mode: r.mode,
        body: s,
        left: a.text,
        right: n.delim,
        rightColor: n.color
      };
    },
    htmlBuilder: (t, e) => {
      xr(t);
      for (var a = re(t.body, e, true, [
        "mopen",
        "mclose"
      ]), r = 0, s = 0, n = false, l = 0; l < a.length; l++) a[l].isMiddle ? n = true : (r = Math.max(a[l].height, r), s = Math.max(a[l].depth, s));
      r *= e.sizeMultiplier, s *= e.sizeMultiplier;
      var u;
      if (t.left === "." ? u = ha(e, [
        "mopen"
      ]) : u = dt(t.left, r, s, e, t.mode, [
        "mopen"
      ]), a.unshift(u), n) for (var d = 1; d < a.length; d++) {
        var m = a[d], g = m.isMiddle;
        g && (a[d] = dt(g.delim, r, s, g.options, t.mode, []));
      }
      var _;
      if (t.right === ".") _ = ha(e, [
        "mclose"
      ]);
      else {
        var h = t.rightColor ? e.withColor(t.rightColor) : e;
        _ = dt(t.right, r, s, h, t.mode, [
          "mclose"
        ]);
      }
      return a.push(_), T([
        "minner"
      ], a, e);
    },
    mathmlBuilder: (t, e) => {
      xr(t);
      var a = me(t.body, e);
      if (t.left !== ".") {
        var r = new j("mo", [
          ge(t.left, t.mode)
        ]);
        r.setAttribute("fence", "true"), a.unshift(r);
      }
      if (t.right !== ".") {
        var s = new j("mo", [
          ge(t.right, t.mode)
        ]);
        s.setAttribute("fence", "true"), t.rightColor && s.setAttribute("mathcolor", t.rightColor), a.push(s);
      }
      return Ot(a);
    }
  });
  E({
    type: "middle",
    names: [
      "\\middle"
    ],
    props: {
      numArgs: 1,
      primitive: true
    },
    handler: (t, e) => {
      var a = Wa(e[0], t);
      if (!t.parser.leftrightDepth) throw new q("\\middle without preceding \\left", a);
      return {
        type: "middle",
        mode: t.parser.mode,
        delim: a.text
      };
    },
    htmlBuilder: (t, e) => {
      var a;
      if (t.delim === ".") a = ha(e, []);
      else {
        a = zs(t.delim, 1, e, t.mode, []);
        var r = {
          delim: t.delim,
          options: e
        };
        a.isMiddle = r;
      }
      return a;
    },
    mathmlBuilder: (t, e) => {
      var a = t.delim === "\\vert" || t.delim === "|" ? ge("|", "text") : ge(t.delim, t.mode), r = new j("mo", [
        a
      ]);
      return r.setAttribute("fence", "true"), r.setAttribute("lspace", "0.05em"), r.setAttribute("rspace", "0.05em"), r;
    }
  });
  var Gt = (t, e) => {
    var a = ta($(t.body, e), e), r = t.label.slice(1), s = e.sizeMultiplier, n, l = 0, u = qe(t.body);
    if (r === "sout") n = T([
      "stretchy",
      "sout"
    ]), n.height = e.fontMetrics().defaultRuleThickness / s, l = -0.5 * e.fontMetrics().xHeight;
    else if (r === "phase") {
      var d = K({
        number: 0.6,
        unit: "pt"
      }, e), m = K({
        number: 0.35,
        unit: "ex"
      }, e), g = e.havingBaseSizing();
      s = s / g.sizeMultiplier;
      var _ = a.height + a.depth + d + m;
      a.style.paddingLeft = D(_ / 2 + d);
      var h = Math.floor(1e3 * _ * s), b = Jx(h), S = new Te([
        new Oe("phase", b)
      ], {
        width: "400em",
        height: D(h / 1e3),
        viewBox: "0 0 400000 " + h,
        preserveAspectRatio: "xMinYMin slice"
      });
      n = He([
        "hide-tail"
      ], [
        S
      ], e), n.style.height = D(_), l = a.depth + d + m;
    } else {
      /cancel/.test(r) ? u || a.classes.push("cancel-pad") : r === "angl" ? a.classes.push("anglpad") : a.classes.push("boxpad");
      var v = 0, B = 0, C = 0;
      /box/.test(r) ? (C = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness), v = e.fontMetrics().fboxsep + (r === "colorbox" ? 0 : C), B = v) : r === "angl" ? (C = Math.max(e.fontMetrics().defaultRuleThickness, e.minRuleThickness), v = 4 * C, B = Math.max(0, 0.25 - a.depth)) : (v = u ? 0.2 : 0, B = v), n = CS(a, r, v, B, e), /fbox|boxed|fcolorbox/.test(r) ? (n.style.borderStyle = "solid", n.style.borderWidth = D(C)) : r === "angl" && C !== 0.049 && (n.style.borderTopWidth = D(C), n.style.borderRightWidth = D(C)), l = a.depth + B, t.backgroundColor && (n.style.backgroundColor = t.backgroundColor, t.borderColor && (n.style.borderColor = t.borderColor));
    }
    var A;
    if (t.backgroundColor) A = U({
      positionType: "individualShift",
      children: [
        {
          type: "elem",
          elem: n,
          shift: l
        },
        {
          type: "elem",
          elem: a,
          shift: 0
        }
      ]
    });
    else {
      var R = /cancel|phase/.test(r) ? [
        "svg-align"
      ] : [];
      A = U({
        positionType: "individualShift",
        children: [
          {
            type: "elem",
            elem: a,
            shift: 0
          },
          {
            type: "elem",
            elem: n,
            shift: l,
            wrapperClasses: R
          }
        ]
      });
    }
    return /cancel/.test(r) && (A.height = a.height, A.depth = a.depth), /cancel/.test(r) && !u ? T([
      "mord",
      "cancel-lap"
    ], [
      A
    ], e) : T([
      "mord"
    ], [
      A
    ], e);
  }, Ut = (t, e) => {
    var a = 0, r = new j(t.label.includes("colorbox") ? "mpadded" : "menclose", [
      V(t.body, e)
    ]);
    switch (t.label) {
      case "\\cancel":
        r.setAttribute("notation", "updiagonalstrike");
        break;
      case "\\bcancel":
        r.setAttribute("notation", "downdiagonalstrike");
        break;
      case "\\phase":
        r.setAttribute("notation", "phasorangle");
        break;
      case "\\sout":
        r.setAttribute("notation", "horizontalstrike");
        break;
      case "\\fbox":
        r.setAttribute("notation", "box");
        break;
      case "\\angl":
        r.setAttribute("notation", "actuarial");
        break;
      case "\\fcolorbox":
      case "\\colorbox":
        if (a = e.fontMetrics().fboxsep * e.fontMetrics().ptPerEm, r.setAttribute("width", "+" + 2 * a + "pt"), r.setAttribute("height", "+" + 2 * a + "pt"), r.setAttribute("lspace", a + "pt"), r.setAttribute("voffset", a + "pt"), t.label === "\\fcolorbox") {
          var s = Math.max(e.fontMetrics().fboxrule, e.minRuleThickness);
          r.setAttribute("style", "border: " + s + "em solid " + String(t.borderColor));
        }
        break;
      case "\\xcancel":
        r.setAttribute("notation", "updiagonalstrike downdiagonalstrike");
        break;
    }
    return t.backgroundColor && r.setAttribute("mathbackground", t.backgroundColor), r;
  };
  E({
    type: "enclose",
    names: [
      "\\colorbox"
    ],
    props: {
      numArgs: 2,
      allowedInText: true,
      argTypes: [
        "color",
        "text"
      ]
    },
    handler(t, e, a) {
      var { parser: r, funcName: s } = t, n = G(e[0], "color-token").color, l = e[1];
      return {
        type: "enclose",
        mode: r.mode,
        label: s,
        backgroundColor: n,
        body: l
      };
    },
    htmlBuilder: Gt,
    mathmlBuilder: Ut
  });
  E({
    type: "enclose",
    names: [
      "\\fcolorbox"
    ],
    props: {
      numArgs: 3,
      allowedInText: true,
      argTypes: [
        "color",
        "color",
        "text"
      ]
    },
    handler(t, e, a) {
      var { parser: r, funcName: s } = t, n = G(e[0], "color-token").color, l = G(e[1], "color-token").color, u = e[2];
      return {
        type: "enclose",
        mode: r.mode,
        label: s,
        backgroundColor: l,
        borderColor: n,
        body: u
      };
    },
    htmlBuilder: Gt,
    mathmlBuilder: Ut
  });
  E({
    type: "enclose",
    names: [
      "\\fbox"
    ],
    props: {
      numArgs: 1,
      argTypes: [
        "hbox"
      ],
      allowedInText: true
    },
    handler(t, e) {
      var { parser: a } = t;
      return {
        type: "enclose",
        mode: a.mode,
        label: "\\fbox",
        body: e[0]
      };
    }
  });
  E({
    type: "enclose",
    names: [
      "\\cancel",
      "\\bcancel",
      "\\xcancel",
      "\\sout",
      "\\phase"
    ],
    props: {
      numArgs: 1
    },
    handler(t, e) {
      var { parser: a, funcName: r } = t, s = e[0];
      return {
        type: "enclose",
        mode: a.mode,
        label: r,
        body: s
      };
    },
    htmlBuilder: Gt,
    mathmlBuilder: Ut
  });
  E({
    type: "enclose",
    names: [
      "\\angl"
    ],
    props: {
      numArgs: 1,
      argTypes: [
        "hbox"
      ],
      allowedInText: false
    },
    handler(t, e) {
      var { parser: a } = t;
      return {
        type: "enclose",
        mode: a.mode,
        label: "\\angl",
        body: e[0]
      };
    }
  });
  var As = {};
  function ve(t) {
    for (var { type: e, names: a, props: r, handler: s, htmlBuilder: n, mathmlBuilder: l } = t, u = {
      type: e,
      numArgs: r.numArgs || 0,
      allowedInText: false,
      numOptionalArgs: 0,
      handler: s
    }, d = 0; d < a.length; ++d) As[a[d]] = u;
    n && (Na[e] = n), l && (Ra[e] = l);
  }
  var Ms = {};
  function p(t, e) {
    Ms[t] = e;
  }
  class ue {
    constructor(e, a, r) {
      this.lexer = e, this.start = a, this.end = r;
    }
    static range(e, a) {
      return a ? !e || !e.loc || !a.loc || e.loc.lexer !== a.loc.lexer ? null : new ue(e.loc.lexer, e.loc.start, a.loc.end) : e && e.loc;
    }
  }
  class he {
    constructor(e, a) {
      this.text = e, this.loc = a;
    }
    range(e, a) {
      return new he(a, ue.range(this, e));
    }
  }
  function Sr(t) {
    var e = [];
    t.consumeSpaces();
    var a = t.fetch().text;
    for (a === "\\relax" && (t.consume(), t.consumeSpaces(), a = t.fetch().text); a === "\\hline" || a === "\\hdashline"; ) t.consume(), e.push(a === "\\hdashline"), t.consumeSpaces(), a = t.fetch().text;
    return e;
  }
  var Ya = (t) => {
    var e = t.parser.settings;
    if (!e.displayMode) throw new q("{" + t.envName + "} can be used only in display mode.");
  }, ZS = /* @__PURE__ */ new Set([
    "gather",
    "gather*"
  ]);
  function $t(t) {
    if (!t.includes("ed")) return !t.includes("*");
  }
  function Le(t, e, a) {
    var { hskipBeforeAndAfter: r, addJot: s, cols: n, arraystretch: l, colSeparationType: u, autoTag: d, singleRow: m, emptySingleRow: g, maxNumCols: _, leqno: h } = e;
    if (t.gullet.beginGroup(), m || t.gullet.macros.set("\\cr", "\\\\\\relax"), !l) {
      var b = t.gullet.expandMacroAsText("\\arraystretch");
      if (b == null) l = 1;
      else if (l = parseFloat(b), !l || l < 0) throw new q("Invalid \\arraystretch: " + b);
    }
    t.gullet.beginGroup();
    var S = [], v = [
      S
    ], B = [], C = [], A = d != null ? [] : void 0;
    function R() {
      d && t.gullet.macros.set("\\@eqnsw", "1", true);
    }
    function N() {
      A && (t.gullet.macros.get("\\df@tag") ? (A.push(t.subparse([
        new he("\\df@tag")
      ])), t.gullet.macros.set("\\df@tag", void 0, true)) : A.push(!!d && t.gullet.macros.get("\\@eqnsw") === "1"));
    }
    for (R(), C.push(Sr(t)); ; ) {
      var x = t.parseExpression(false, m ? "\\end" : "\\\\");
      t.gullet.endGroup(), t.gullet.beginGroup();
      var i = {
        type: "ordgroup",
        mode: t.mode,
        body: x
      };
      a && (i = {
        type: "styling",
        mode: t.mode,
        style: a,
        body: [
          i
        ]
      }), S.push(i);
      var z = t.fetch().text;
      if (z === "&") {
        if (_ && S.length === _) {
          if (m || u) throw new q("Too many tab characters: &", t.nextToken);
          t.settings.reportNonstrict("textEnv", "Too few columns specified in the {array} column argument.");
        }
        t.consume();
      } else if (z === "\\end") {
        N(), S.length === 1 && i.type === "styling" && i.body.length === 1 && i.body[0].type === "ordgroup" && i.body[0].body.length === 0 && (v.length > 1 || !g) && v.pop(), C.length < v.length + 1 && C.push([]);
        break;
      } else if (z === "\\\\") {
        t.consume();
        var F = void 0;
        t.gullet.future().text !== " " && (F = t.parseSizeGroup(true)), B.push(F ? F.value : null), N(), C.push(Sr(t)), S = [], v.push(S), R();
      } else throw new q("Expected & or \\\\ or \\cr or \\end", t.nextToken);
    }
    return t.gullet.endGroup(), t.gullet.endGroup(), {
      type: "array",
      mode: t.mode,
      addJot: s,
      arraystretch: l,
      body: v,
      cols: n,
      rowGaps: B,
      hskipBeforeAndAfter: r,
      hLinesBeforeRow: C,
      colSeparationType: u,
      tags: A,
      leqno: h
    };
  }
  function Vt(t) {
    return t.slice(0, 1) === "d" ? "display" : "text";
  }
  var ze = function(e, a) {
    var r, s, n = e.body.length, l = e.hLinesBeforeRow, u = 0, d = new Array(n), m = [], g = Math.max(a.fontMetrics().arrayRuleWidth, a.minRuleThickness), _ = 1 / a.fontMetrics().ptPerEm, h = 5 * _;
    if (e.colSeparationType && e.colSeparationType === "small") {
      var b = a.havingStyle(L.SCRIPT).sizeMultiplier;
      h = 0.2778 * (b / a.sizeMultiplier);
    }
    var S = e.colSeparationType === "CD" ? K({
      number: 3,
      unit: "ex"
    }, a) : 12 * _, v = 3 * _, B = e.arraystretch * S, C = 0.7 * B, A = 0.3 * B, R = 0;
    function N(ka) {
      for (var _a = 0; _a < ka.length; ++_a) _a > 0 && (R += 0.25), m.push({
        pos: R,
        isDashed: ka[_a]
      });
    }
    for (N(l[0]), r = 0; r < e.body.length; ++r) {
      var x = e.body[r], i = C, z = A;
      u < x.length && (u = x.length);
      var F = new Array(x.length);
      for (s = 0; s < x.length; ++s) {
        var O = $(x[s], a);
        z < O.depth && (z = O.depth), i < O.height && (i = O.height), F[s] = O;
      }
      var X = e.rowGaps[r], se = 0;
      X && (se = K(X, a), se > 0 && (se += A, z < se && (z = se), se = 0)), e.addJot && (z += v), F.height = i, F.depth = z, R += i, F.pos = R, R += z + se, d[r] = F, N(l[r + 1]);
    }
    var Q = R / 2 + a.fontMetrics().axisHeight, Ge = e.cols || [], fe = [], ke, Be, We = [];
    if (e.tags && e.tags.some((ka) => ka)) for (r = 0; r < n; ++r) {
      var Ye = d[r], Ka = Ye.pos - Q, Ce = e.tags[r], Ee = void 0;
      Ce === true ? Ee = T([
        "eqn-num"
      ], [], a) : Ce === false ? Ee = T([], [], a) : Ee = T([], re(Ce, a, true), a), Ee.depth = Ye.depth, Ee.height = Ye.height, We.push({
        type: "elem",
        elem: Ee,
        shift: Ka
      });
    }
    for (s = 0, Be = 0; s < u || Be < Ge.length; ++s, ++Be) {
      for (var ca, _e = Ge[Be], pa = true; ((Kt = _e) == null ? void 0 : Kt.type) === "separator"; ) {
        var Kt;
        if (pa || (ke = T([
          "arraycolsep"
        ], []), ke.style.width = D(a.fontMetrics().doubleRuleSep), fe.push(ke)), _e.separator === "|" || _e.separator === ":") {
          var Vs = _e.separator === "|" ? "solid" : "dashed", Ze = T([
            "vertical-separator"
          ], [], a);
          Ze.style.height = D(R), Ze.style.borderRightWidth = D(g), Ze.style.borderRightStyle = Vs, Ze.style.margin = "0 " + D(-g / 2);
          var Jt = R - Q;
          Jt && (Ze.style.verticalAlign = D(-Jt)), fe.push(Ze);
        } else throw new q("Invalid separator type: " + _e.separator);
        Be++, _e = Ge[Be], pa = false;
      }
      if (!(s >= u)) {
        var Ke = void 0;
        if (s > 0 || e.hskipBeforeAndAfter) {
          var Qt, er;
          Ke = (Qt = (er = _e) == null ? void 0 : er.pregap) != null ? Qt : h, Ke !== 0 && (ke = T([
            "arraycolsep"
          ], []), ke.style.width = D(Ke), fe.push(ke));
        }
        var ar = [];
        for (r = 0; r < n; ++r) {
          var ma = d[r], ya = ma[s];
          if (ya) {
            var Xs = ma.pos - Q;
            ya.depth = ma.depth, ya.height = ma.height, ar.push({
              type: "elem",
              elem: ya,
              shift: Xs
            });
          }
        }
        var Ws = U({
          positionType: "individualShift",
          children: ar
        }), Ys = T([
          "col-align-" + (((ca = _e) == null ? void 0 : ca.align) || "c")
        ], [
          Ws
        ]);
        if (fe.push(Ys), s < u - 1 || e.hskipBeforeAndAfter) {
          var tr, rr;
          Ke = (tr = (rr = _e) == null ? void 0 : rr.postgap) != null ? tr : h, Ke !== 0 && (ke = T([
            "arraycolsep"
          ], []), ke.style.width = D(Ke), fe.push(ke));
        }
      }
    }
    var ga = T([
      "mtable"
    ], fe);
    if (m.length > 0) {
      for (var Zs = aa("hline", a, g), Ks = aa("hdashline", a, g), Ja = [
        {
          type: "elem",
          elem: ga,
          shift: 0
        }
      ]; m.length > 0; ) {
        var sr = m.pop(), or = sr.pos - Q;
        sr.isDashed ? Ja.push({
          type: "elem",
          elem: Ks,
          shift: or
        }) : Ja.push({
          type: "elem",
          elem: Zs,
          shift: or
        });
      }
      ga = U({
        positionType: "individualShift",
        children: Ja
      });
    }
    if (We.length === 0) return T([
      "mord"
    ], [
      ga
    ], a);
    var Js = U({
      positionType: "individualShift",
      children: We
    }), Qs = T([
      "tag"
    ], [
      Js
    ], a);
    return De([
      ga,
      Qs
    ]);
  }, KS = {
    c: "center ",
    l: "left ",
    r: "right "
  }, xe = function(e, a) {
    for (var r = [], s = new j("mtd", [], [
      "mtr-glue"
    ]), n = new j("mtd", [], [
      "mml-eqn-num"
    ]), l = 0; l < e.body.length; l++) {
      for (var u = e.body[l], d = [], m = 0; m < u.length; m++) d.push(new j("mtd", [
        V(u[m], a)
      ]));
      e.tags && e.tags[l] && (d.unshift(s), d.push(s), e.leqno ? d.unshift(n) : d.push(n)), r.push(new j("mtr", d));
    }
    var g = new j("mtable", r), _ = e.arraystretch === 0.5 ? 0.1 : 0.16 + e.arraystretch - 1 + (e.addJot ? 0.09 : 0);
    g.setAttribute("rowspacing", D(_));
    var h = "", b = "";
    if (e.cols && e.cols.length > 0) {
      var S = e.cols, v = "", B = false, C = 0, A = S.length;
      S[0].type === "separator" && (h += "top ", C = 1), S[S.length - 1].type === "separator" && (h += "bottom ", A -= 1);
      for (var R = C; R < A; R++) {
        var N = S[R];
        N.type === "align" ? (b += KS[N.align], B && (v += "none "), B = true) : N.type === "separator" && B && (v += N.separator === "|" ? "solid " : "dashed ", B = false);
      }
      g.setAttribute("columnalign", b.trim()), /[sd]/.test(v) && g.setAttribute("columnlines", v.trim());
    }
    if (e.colSeparationType === "align") {
      for (var x = e.cols || [], i = "", z = 1; z < x.length; z++) i += z % 2 ? "0em " : "1em ";
      g.setAttribute("columnspacing", i.trim());
    } else e.colSeparationType === "alignat" || e.colSeparationType === "gather" ? g.setAttribute("columnspacing", "0em") : e.colSeparationType === "small" ? g.setAttribute("columnspacing", "0.2778em") : e.colSeparationType === "CD" ? g.setAttribute("columnspacing", "0.5em") : g.setAttribute("columnspacing", "1em");
    var F = "", O = e.hLinesBeforeRow;
    h += O[0].length > 0 ? "left " : "", h += O[O.length - 1].length > 0 ? "right " : "";
    for (var X = 1; X < O.length - 1; X++) F += O[X].length === 0 ? "none " : O[X][0] ? "dashed " : "solid ";
    return /[sd]/.test(F) && g.setAttribute("rowlines", F.trim()), h !== "" && (g = new j("menclose", [
      g
    ]), g.setAttribute("notation", h.trim())), e.arraystretch && e.arraystretch < 1 && (g = new j("mstyle", [
      g
    ]), g.setAttribute("scriptlevel", "1")), g;
  }, Ts = function(e, a) {
    e.envName.includes("ed") || Ya(e);
    var r = [], s = e.envName.includes("at") ? "alignat" : "align", n = e.envName === "split", l = Le(e.parser, {
      cols: r,
      addJot: true,
      autoTag: n ? void 0 : $t(e.envName),
      emptySingleRow: true,
      colSeparationType: s,
      maxNumCols: n ? 2 : void 0,
      leqno: e.parser.settings.leqno
    }, "display"), u = 0, d = 0, m = {
      type: "ordgroup",
      mode: e.mode,
      body: []
    };
    if (a[0] && a[0].type === "ordgroup") {
      for (var g = "", _ = 0; _ < a[0].body.length; _++) {
        var h = G(a[0].body[_], "textord");
        g += h.text;
      }
      u = Number(g), d = u * 2;
    }
    var b = !d;
    l.body.forEach(function(C) {
      for (var A = 1; A < C.length; A += 2) {
        var R = G(C[A], "styling"), N = G(R.body[0], "ordgroup");
        N.body.unshift(m);
      }
      if (b) d < C.length && (d = C.length);
      else {
        var x = C.length / 2;
        if (u < x) throw new q("Too many math in a row: " + ("expected " + u + ", but got " + x), C[0]);
      }
    });
    for (var S = 0; S < d; ++S) {
      var v = "r", B = 0;
      S % 2 === 1 ? v = "l" : S > 0 && b && (B = 1), r[S] = {
        type: "align",
        align: v,
        pregap: B,
        postgap: 0
      };
    }
    return l.colSeparationType = b ? "align" : "alignat", l;
  };
  ve({
    type: "array",
    names: [
      "array",
      "darray"
    ],
    props: {
      numArgs: 1
    },
    handler(t, e) {
      var a = Va(e[0]), r = a ? [
        e[0]
      ] : G(e[0], "ordgroup").body, s = r.map(function(l) {
        var u = $a(l), d = u.text;
        if ("lcr".includes(d)) return {
          type: "align",
          align: d
        };
        if (d === "|") return {
          type: "separator",
          separator: "|"
        };
        if (d === ":") return {
          type: "separator",
          separator: ":"
        };
        throw new q("Unknown column alignment: " + d, l);
      }), n = {
        cols: s,
        hskipBeforeAndAfter: true,
        maxNumCols: s.length
      };
      return Le(t.parser, n, Vt(t.envName));
    },
    htmlBuilder: ze,
    mathmlBuilder: xe
  });
  ve({
    type: "array",
    names: [
      "matrix",
      "pmatrix",
      "bmatrix",
      "Bmatrix",
      "vmatrix",
      "Vmatrix",
      "matrix*",
      "pmatrix*",
      "bmatrix*",
      "Bmatrix*",
      "vmatrix*",
      "Vmatrix*"
    ],
    props: {
      numArgs: 0
    },
    handler(t) {
      var e = {
        matrix: null,
        pmatrix: [
          "(",
          ")"
        ],
        bmatrix: [
          "[",
          "]"
        ],
        Bmatrix: [
          "\\{",
          "\\}"
        ],
        vmatrix: [
          "|",
          "|"
        ],
        Vmatrix: [
          "\\Vert",
          "\\Vert"
        ]
      }[t.envName.replace("*", "")], a = "c", r = {
        hskipBeforeAndAfter: false,
        cols: [
          {
            type: "align",
            align: a
          }
        ]
      };
      if (t.envName.charAt(t.envName.length - 1) === "*") {
        var s = t.parser;
        if (s.consumeSpaces(), s.fetch().text === "[") {
          if (s.consume(), s.consumeSpaces(), a = s.fetch().text, !"lcr".includes(a)) throw new q("Expected l or c or r", s.nextToken);
          s.consume(), s.consumeSpaces(), s.expect("]"), s.consume(), r.cols = [
            {
              type: "align",
              align: a
            }
          ];
        }
      }
      var n = Le(t.parser, r, Vt(t.envName)), l = Math.max(0, ...n.body.map((u) => u.length));
      return n.cols = new Array(l).fill({
        type: "align",
        align: a
      }), e ? {
        type: "leftright",
        mode: t.mode,
        body: [
          n
        ],
        left: e[0],
        right: e[1],
        rightColor: void 0
      } : n;
    },
    htmlBuilder: ze,
    mathmlBuilder: xe
  });
  ve({
    type: "array",
    names: [
      "smallmatrix"
    ],
    props: {
      numArgs: 0
    },
    handler(t) {
      var e = {
        arraystretch: 0.5
      }, a = Le(t.parser, e, "script");
      return a.colSeparationType = "small", a;
    },
    htmlBuilder: ze,
    mathmlBuilder: xe
  });
  ve({
    type: "array",
    names: [
      "subarray"
    ],
    props: {
      numArgs: 1
    },
    handler(t, e) {
      var a = Va(e[0]), r = a ? [
        e[0]
      ] : G(e[0], "ordgroup").body, s = r.map(function(u) {
        var d = $a(u), m = d.text;
        if ("lc".includes(m)) return {
          type: "align",
          align: m
        };
        throw new q("Unknown column alignment: " + m, u);
      });
      if (s.length > 1) throw new q("{subarray} can contain only one column");
      var n = {
        cols: s,
        hskipBeforeAndAfter: false,
        arraystretch: 0.5
      }, l = Le(t.parser, n, "script");
      if (l.body.length > 0 && l.body[0].length > 1) throw new q("{subarray} can contain only one column");
      return l;
    },
    htmlBuilder: ze,
    mathmlBuilder: xe
  });
  ve({
    type: "array",
    names: [
      "cases",
      "dcases",
      "rcases",
      "drcases"
    ],
    props: {
      numArgs: 0
    },
    handler(t) {
      var e = {
        arraystretch: 1.2,
        cols: [
          {
            type: "align",
            align: "l",
            pregap: 0,
            postgap: 1
          },
          {
            type: "align",
            align: "l",
            pregap: 0,
            postgap: 0
          }
        ]
      }, a = Le(t.parser, e, Vt(t.envName));
      return {
        type: "leftright",
        mode: t.mode,
        body: [
          a
        ],
        left: t.envName.includes("r") ? "." : "\\{",
        right: t.envName.includes("r") ? "\\}" : ".",
        rightColor: void 0
      };
    },
    htmlBuilder: ze,
    mathmlBuilder: xe
  });
  ve({
    type: "array",
    names: [
      "align",
      "align*",
      "aligned",
      "split"
    ],
    props: {
      numArgs: 0
    },
    handler: Ts,
    htmlBuilder: ze,
    mathmlBuilder: xe
  });
  ve({
    type: "array",
    names: [
      "gathered",
      "gather",
      "gather*"
    ],
    props: {
      numArgs: 0
    },
    handler(t) {
      ZS.has(t.envName) && Ya(t);
      var e = {
        cols: [
          {
            type: "align",
            align: "c"
          }
        ],
        addJot: true,
        colSeparationType: "gather",
        autoTag: $t(t.envName),
        emptySingleRow: true,
        leqno: t.parser.settings.leqno
      };
      return Le(t.parser, e, "display");
    },
    htmlBuilder: ze,
    mathmlBuilder: xe
  });
  ve({
    type: "array",
    names: [
      "alignat",
      "alignat*",
      "alignedat"
    ],
    props: {
      numArgs: 1
    },
    handler: Ts,
    htmlBuilder: ze,
    mathmlBuilder: xe
  });
  ve({
    type: "array",
    names: [
      "equation",
      "equation*"
    ],
    props: {
      numArgs: 0
    },
    handler(t) {
      Ya(t);
      var e = {
        autoTag: $t(t.envName),
        emptySingleRow: true,
        singleRow: true,
        maxNumCols: 1,
        leqno: t.parser.settings.leqno
      };
      return Le(t.parser, e, "display");
    },
    htmlBuilder: ze,
    mathmlBuilder: xe
  });
  ve({
    type: "array",
    names: [
      "CD"
    ],
    props: {
      numArgs: 0
    },
    handler(t) {
      return Ya(t), FS(t.parser);
    },
    htmlBuilder: ze,
    mathmlBuilder: xe
  });
  p("\\nonumber", "\\gdef\\@eqnsw{0}");
  p("\\notag", "\\nonumber");
  E({
    type: "text",
    names: [
      "\\hline",
      "\\hdashline"
    ],
    props: {
      numArgs: 0,
      allowedInText: true,
      allowedInMath: true
    },
    handler(t, e) {
      throw new q(t.funcName + " valid only within array environment");
    }
  });
  var Ar = As;
  E({
    type: "environment",
    names: [
      "\\begin",
      "\\end"
    ],
    props: {
      numArgs: 1,
      argTypes: [
        "text"
      ]
    },
    handler(t, e) {
      var { parser: a, funcName: r } = t, s = e[0];
      if (s.type !== "ordgroup") throw new q("Invalid environment name", s);
      for (var n = "", l = 0; l < s.body.length; ++l) n += G(s.body[l], "textord").text;
      if (r === "\\begin") {
        if (!Ar.hasOwnProperty(n)) throw new q("No such environment: " + n, s);
        var u = Ar[n], { args: d, optArgs: m } = a.parseArguments("\\begin{" + n + "}", u), g = {
          mode: a.mode,
          envName: n,
          parser: a
        }, _ = u.handler(g, d, m);
        a.expect("\\end", false);
        var h = a.nextToken, b = G(a.parseFunction(), "environment");
        if (b.name !== n) throw new q("Mismatch: \\begin{" + n + "} matched by \\end{" + b.name + "}", h);
        return _;
      }
      return {
        type: "environment",
        mode: a.mode,
        name: n,
        nameGroup: s
      };
    }
  });
  var qs = (t, e) => {
    var a = t.font, r = e.withFont(a);
    return $(t.body, r);
  }, js = (t, e) => {
    var a = t.font, r = e.withFont(a);
    return V(t.body, r);
  }, Mr = {
    "\\Bbb": "\\mathbb",
    "\\bold": "\\mathbf",
    "\\frak": "\\mathfrak",
    "\\bm": "\\boldsymbol"
  };
  E({
    type: "font",
    names: [
      "\\mathrm",
      "\\mathit",
      "\\mathbf",
      "\\mathnormal",
      "\\mathsfit",
      "\\mathbb",
      "\\mathcal",
      "\\mathfrak",
      "\\mathscr",
      "\\mathsf",
      "\\mathtt",
      "\\Bbb",
      "\\bold",
      "\\frak"
    ],
    props: {
      numArgs: 1,
      allowedInArgument: true
    },
    handler: (t, e) => {
      var { parser: a, funcName: r } = t, s = Fa(e[0]), n = r;
      return n in Mr && (n = Mr[n]), {
        type: "font",
        mode: a.mode,
        font: n.slice(1),
        body: s
      };
    },
    htmlBuilder: qs,
    mathmlBuilder: js
  });
  E({
    type: "mclass",
    names: [
      "\\boldsymbol",
      "\\bm"
    ],
    props: {
      numArgs: 1
    },
    handler: (t, e) => {
      var { parser: a } = t, r = e[0];
      return {
        type: "mclass",
        mode: a.mode,
        mclass: Xa(r),
        body: [
          {
            type: "font",
            mode: a.mode,
            font: "boldsymbol",
            body: r
          }
        ],
        isCharacterBox: qe(r)
      };
    }
  });
  E({
    type: "font",
    names: [
      "\\rm",
      "\\sf",
      "\\tt",
      "\\bf",
      "\\it",
      "\\cal"
    ],
    props: {
      numArgs: 0,
      allowedInText: true
    },
    handler: (t, e) => {
      var { parser: a, funcName: r, breakOnTokenText: s } = t, { mode: n } = a, l = a.parseExpression(true, s), u = "math" + r.slice(1);
      return {
        type: "font",
        mode: n,
        font: u,
        body: {
          type: "ordgroup",
          mode: a.mode,
          body: l
        }
      };
    },
    htmlBuilder: qs,
    mathmlBuilder: js
  });
  var JS = (t, e) => {
    var a = e.style, r = a.fracNum(), s = a.fracDen(), n;
    n = e.havingStyle(r);
    var l = $(t.numer, n, e);
    if (t.continued) {
      var u = 8.5 / e.fontMetrics().ptPerEm, d = 3.5 / e.fontMetrics().ptPerEm;
      l.height = l.height < u ? u : l.height, l.depth = l.depth < d ? d : l.depth;
    }
    n = e.havingStyle(s);
    var m = $(t.denom, n, e), g, _, h;
    t.hasBarLine ? (t.barSize ? (_ = K(t.barSize, e), g = aa("frac-line", e, _)) : g = aa("frac-line", e), _ = g.height, h = g.height) : (g = null, _ = 0, h = e.fontMetrics().defaultRuleThickness);
    var b, S, v;
    a.size === L.DISPLAY.size ? (b = e.fontMetrics().num1, _ > 0 ? S = 3 * h : S = 7 * h, v = e.fontMetrics().denom1) : (_ > 0 ? (b = e.fontMetrics().num2, S = h) : (b = e.fontMetrics().num3, S = 3 * h), v = e.fontMetrics().denom2);
    var B;
    if (g) {
      var A = e.fontMetrics().axisHeight;
      b - l.depth - (A + 0.5 * _) < S && (b += S - (b - l.depth - (A + 0.5 * _))), A - 0.5 * _ - (m.height - v) < S && (v += S - (A - 0.5 * _ - (m.height - v)));
      var R = -(A - 0.5 * _);
      B = U({
        positionType: "individualShift",
        children: [
          {
            type: "elem",
            elem: m,
            shift: v
          },
          {
            type: "elem",
            elem: g,
            shift: R
          },
          {
            type: "elem",
            elem: l,
            shift: -b
          }
        ]
      });
    } else {
      var C = b - l.depth - (m.height - v);
      C < S && (b += 0.5 * (S - C), v += 0.5 * (S - C)), B = U({
        positionType: "individualShift",
        children: [
          {
            type: "elem",
            elem: m,
            shift: v
          },
          {
            type: "elem",
            elem: l,
            shift: -b
          }
        ]
      });
    }
    n = e.havingStyle(a), B.height *= n.sizeMultiplier / e.sizeMultiplier, B.depth *= n.sizeMultiplier / e.sizeMultiplier;
    var N;
    a.size === L.DISPLAY.size ? N = e.fontMetrics().delim1 : a.size === L.SCRIPTSCRIPT.size ? N = e.havingStyle(L.SCRIPT).fontMetrics().delim2 : N = e.fontMetrics().delim2;
    var x, i;
    return t.leftDelim == null ? x = ha(e, [
      "mopen"
    ]) : x = jt(t.leftDelim, N, true, e.havingStyle(a), t.mode, [
      "mopen"
    ]), t.continued ? i = T([]) : t.rightDelim == null ? i = ha(e, [
      "mclose"
    ]) : i = jt(t.rightDelim, N, true, e.havingStyle(a), t.mode, [
      "mclose"
    ]), T([
      "mord"
    ].concat(n.sizingClasses(e)), [
      x,
      T([
        "mfrac"
      ], [
        B
      ]),
      i
    ], e);
  }, QS = (t, e) => {
    var a = new j("mfrac", [
      V(t.numer, e),
      V(t.denom, e)
    ]);
    if (!t.hasBarLine) a.setAttribute("linethickness", "0px");
    else if (t.barSize) {
      var r = K(t.barSize, e);
      a.setAttribute("linethickness", D(r));
    }
    if (t.leftDelim != null || t.rightDelim != null) {
      var s = [];
      if (t.leftDelim != null) {
        var n = new j("mo", [
          new ae(t.leftDelim.replace("\\", ""))
        ]);
        n.setAttribute("fence", "true"), s.push(n);
      }
      if (s.push(a), t.rightDelim != null) {
        var l = new j("mo", [
          new ae(t.rightDelim.replace("\\", ""))
        ]);
        l.setAttribute("fence", "true"), s.push(l);
      }
      return Ot(s);
    }
    return a;
  }, Ds = (t, e) => {
    if (!e) return t;
    var a = {
      type: "styling",
      mode: t.mode,
      style: e,
      body: [
        t
      ]
    };
    return a;
  };
  E({
    type: "genfrac",
    names: [
      "\\cfrac",
      "\\dfrac",
      "\\frac",
      "\\tfrac",
      "\\dbinom",
      "\\binom",
      "\\tbinom",
      "\\\\atopfrac",
      "\\\\bracefrac",
      "\\\\brackfrac"
    ],
    props: {
      numArgs: 2,
      allowedInArgument: true
    },
    handler: (t, e) => {
      var { parser: a, funcName: r } = t, s = e[0], n = e[1], l, u = null, d = null;
      switch (r) {
        case "\\cfrac":
        case "\\dfrac":
        case "\\frac":
        case "\\tfrac":
          l = true;
          break;
        case "\\\\atopfrac":
          l = false;
          break;
        case "\\dbinom":
        case "\\binom":
        case "\\tbinom":
          l = false, u = "(", d = ")";
          break;
        case "\\\\bracefrac":
          l = false, u = "\\{", d = "\\}";
          break;
        case "\\\\brackfrac":
          l = false, u = "[", d = "]";
          break;
        default:
          throw new Error("Unrecognized genfrac command");
      }
      var m = r === "\\cfrac", g = null;
      return m || r.startsWith("\\d") ? g = "display" : r.startsWith("\\t") && (g = "text"), Ds({
        type: "genfrac",
        mode: a.mode,
        numer: s,
        denom: n,
        continued: m,
        hasBarLine: l,
        leftDelim: u,
        rightDelim: d,
        barSize: null
      }, g);
    },
    htmlBuilder: JS,
    mathmlBuilder: QS
  });
  E({
    type: "infix",
    names: [
      "\\over",
      "\\choose",
      "\\atop",
      "\\brace",
      "\\brack"
    ],
    props: {
      numArgs: 0,
      infix: true
    },
    handler(t) {
      var { parser: e, funcName: a, token: r } = t, s;
      switch (a) {
        case "\\over":
          s = "\\frac";
          break;
        case "\\choose":
          s = "\\binom";
          break;
        case "\\atop":
          s = "\\\\atopfrac";
          break;
        case "\\brace":
          s = "\\\\bracefrac";
          break;
        case "\\brack":
          s = "\\\\brackfrac";
          break;
        default:
          throw new Error("Unrecognized infix genfrac command");
      }
      return {
        type: "infix",
        mode: e.mode,
        replaceWith: s,
        token: r
      };
    }
  });
  var Tr = [
    "display",
    "text",
    "script",
    "scriptscript"
  ], qr = function(e) {
    var a = null;
    return e.length > 0 && (a = e, a = a === "." ? null : a), a;
  };
  E({
    type: "genfrac",
    names: [
      "\\genfrac"
    ],
    props: {
      numArgs: 6,
      allowedInArgument: true,
      argTypes: [
        "math",
        "math",
        "size",
        "text",
        "math",
        "math"
      ]
    },
    handler(t, e) {
      var { parser: a } = t, r = e[4], s = e[5], n = Fa(e[0]), l = n.type === "atom" && n.family === "open" ? qr(n.text) : null, u = Fa(e[1]), d = u.type === "atom" && u.family === "close" ? qr(u.text) : null, m = G(e[2], "size"), g, _ = null;
      m.isBlank ? g = true : (_ = m.value, g = _.number > 0);
      var h = null, b = e[3];
      if (b.type === "ordgroup") {
        if (b.body.length > 0) {
          var S = G(b.body[0], "textord");
          h = Tr[Number(S.text)];
        }
      } else b = G(b, "textord"), h = Tr[Number(b.text)];
      return Ds({
        type: "genfrac",
        mode: a.mode,
        numer: r,
        denom: s,
        continued: false,
        hasBarLine: g,
        barSize: _,
        leftDelim: l,
        rightDelim: d
      }, h);
    }
  });
  E({
    type: "infix",
    names: [
      "\\above"
    ],
    props: {
      numArgs: 1,
      argTypes: [
        "size"
      ],
      infix: true
    },
    handler(t, e) {
      var { parser: a, funcName: r, token: s } = t;
      return {
        type: "infix",
        mode: a.mode,
        replaceWith: "\\\\abovefrac",
        size: G(e[0], "size").value,
        token: s
      };
    }
  });
  E({
    type: "genfrac",
    names: [
      "\\\\abovefrac"
    ],
    props: {
      numArgs: 3,
      argTypes: [
        "math",
        "size",
        "math"
      ]
    },
    handler: (t, e) => {
      var { parser: a, funcName: r } = t, s = e[0], n = G(e[1], "infix").size;
      if (!n) throw new Error("\\\\abovefrac expected size, but got " + String(n));
      var l = e[2], u = n.number > 0;
      return {
        type: "genfrac",
        mode: a.mode,
        numer: s,
        denom: l,
        continued: false,
        hasBarLine: u,
        barSize: n,
        leftDelim: null,
        rightDelim: null
      };
    }
  });
  var Bs = (t, e) => {
    var a = e.style, r, s;
    t.type === "supsub" ? (r = t.sup ? $(t.sup, e.havingStyle(a.sup()), e) : $(t.sub, e.havingStyle(a.sub()), e), s = G(t.base, "horizBrace")) : s = G(t, "horizBrace");
    var n = $(s.base, e.havingBaseStyle(L.DISPLAY)), l = Ua(s, e), u;
    if (s.isOver ? (u = U({
      positionType: "firstBaseline",
      children: [
        {
          type: "elem",
          elem: n
        },
        {
          type: "kern",
          size: 0.1
        },
        {
          type: "elem",
          elem: l
        }
      ]
    }), u.children[0].children[0].children[1].classes.push("svg-align")) : (u = U({
      positionType: "bottom",
      positionData: n.depth + 0.1 + l.height,
      children: [
        {
          type: "elem",
          elem: l
        },
        {
          type: "kern",
          size: 0.1
        },
        {
          type: "elem",
          elem: n
        }
      ]
    }), u.children[0].children[0].children[0].classes.push("svg-align")), r) {
      var d = T([
        "mord",
        s.isOver ? "mover" : "munder"
      ], [
        u
      ], e);
      s.isOver ? u = U({
        positionType: "firstBaseline",
        children: [
          {
            type: "elem",
            elem: d
          },
          {
            type: "kern",
            size: 0.2
          },
          {
            type: "elem",
            elem: r
          }
        ]
      }) : u = U({
        positionType: "bottom",
        positionData: d.depth + 0.2 + r.height + r.depth,
        children: [
          {
            type: "elem",
            elem: r
          },
          {
            type: "kern",
            size: 0.2
          },
          {
            type: "elem",
            elem: d
          }
        ]
      });
    }
    return T([
      "mord",
      s.isOver ? "mover" : "munder"
    ], [
      u
    ], e);
  }, eA = (t, e) => {
    var a = Ga(t.label);
    return new j(t.isOver ? "mover" : "munder", [
      V(t.base, e),
      a
    ]);
  };
  E({
    type: "horizBrace",
    names: [
      "\\overbrace",
      "\\underbrace"
    ],
    props: {
      numArgs: 1
    },
    handler(t, e) {
      var { parser: a, funcName: r } = t;
      return {
        type: "horizBrace",
        mode: a.mode,
        label: r,
        isOver: /^\\over/.test(r),
        base: e[0]
      };
    },
    htmlBuilder: Bs,
    mathmlBuilder: eA
  });
  E({
    type: "href",
    names: [
      "\\href"
    ],
    props: {
      numArgs: 2,
      argTypes: [
        "url",
        "original"
      ],
      allowedInText: true
    },
    handler: (t, e) => {
      var { parser: a } = t, r = e[1], s = G(e[0], "url").url;
      return a.settings.isTrusted({
        command: "\\href",
        url: s
      }) ? {
        type: "href",
        mode: a.mode,
        href: s,
        body: ee(r)
      } : a.formatUnsupportedCmd("\\href");
    },
    htmlBuilder: (t, e) => {
      var a = re(t.body, e, false);
      return gS(t.href, [], a, e);
    },
    mathmlBuilder: (t, e) => {
      var a = Pe(t.body, e);
      return a instanceof j || (a = new j("mrow", [
        a
      ])), a.setAttribute("href", t.href), a;
    }
  });
  E({
    type: "href",
    names: [
      "\\url"
    ],
    props: {
      numArgs: 1,
      argTypes: [
        "url"
      ],
      allowedInText: true
    },
    handler: (t, e) => {
      var { parser: a } = t, r = G(e[0], "url").url;
      if (!a.settings.isTrusted({
        command: "\\url",
        url: r
      })) return a.formatUnsupportedCmd("\\url");
      for (var s = [], n = 0; n < r.length; n++) {
        var l = r[n];
        l === "~" && (l = "\\textasciitilde"), s.push({
          type: "textord",
          mode: "text",
          text: l
        });
      }
      var u = {
        type: "text",
        mode: a.mode,
        font: "\\texttt",
        body: s
      };
      return {
        type: "href",
        mode: a.mode,
        href: r,
        body: ee(u)
      };
    }
  });
  E({
    type: "hbox",
    names: [
      "\\hbox"
    ],
    props: {
      numArgs: 1,
      argTypes: [
        "text"
      ],
      allowedInText: true,
      primitive: true
    },
    handler(t, e) {
      var { parser: a } = t;
      return {
        type: "hbox",
        mode: a.mode,
        body: ee(e[0])
      };
    },
    htmlBuilder(t, e) {
      var a = re(t.body, e, false);
      return De(a);
    },
    mathmlBuilder(t, e) {
      return new j("mrow", me(t.body, e));
    }
  });
  E({
    type: "html",
    names: [
      "\\htmlClass",
      "\\htmlId",
      "\\htmlStyle",
      "\\htmlData"
    ],
    props: {
      numArgs: 2,
      argTypes: [
        "raw",
        "original"
      ],
      allowedInText: true
    },
    handler: (t, e) => {
      var { parser: a, funcName: r, token: s } = t, n = G(e[0], "raw").string, l = e[1];
      a.settings.strict && a.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
      var u, d = {};
      switch (r) {
        case "\\htmlClass":
          d.class = n, u = {
            command: "\\htmlClass",
            class: n
          };
          break;
        case "\\htmlId":
          d.id = n, u = {
            command: "\\htmlId",
            id: n
          };
          break;
        case "\\htmlStyle":
          d.style = n, u = {
            command: "\\htmlStyle",
            style: n
          };
          break;
        case "\\htmlData": {
          for (var m = n.split(","), g = 0; g < m.length; g++) {
            var _ = m[g], h = _.indexOf("=");
            if (h < 0) throw new q("\\htmlData key/value '" + _ + "' missing equals sign");
            var b = _.slice(0, h), S = _.slice(h + 1);
            d["data-" + b.trim()] = S;
          }
          u = {
            command: "\\htmlData",
            attributes: d
          };
          break;
        }
        default:
          throw new Error("Unrecognized html command");
      }
      return a.settings.isTrusted(u) ? {
        type: "html",
        mode: a.mode,
        attributes: d,
        body: ee(l)
      } : a.formatUnsupportedCmd(r);
    },
    htmlBuilder: (t, e) => {
      var a = re(t.body, e, false), r = [
        "enclosing"
      ];
      t.attributes.class && r.push(...t.attributes.class.trim().split(/\s+/));
      var s = T(r, a, e);
      for (var n in t.attributes) n !== "class" && t.attributes.hasOwnProperty(n) && s.setAttribute(n, t.attributes[n]);
      return s;
    },
    mathmlBuilder: (t, e) => Pe(t.body, e)
  });
  E({
    type: "htmlmathml",
    names: [
      "\\html@mathml"
    ],
    props: {
      numArgs: 2,
      allowedInArgument: true,
      allowedInText: true
    },
    handler: (t, e) => {
      var { parser: a } = t;
      return {
        type: "htmlmathml",
        mode: a.mode,
        html: ee(e[0]),
        mathml: ee(e[1])
      };
    },
    htmlBuilder: (t, e) => {
      var a = re(t.html, e, false);
      return De(a);
    },
    mathmlBuilder: (t, e) => Pe(t.mathml, e)
  });
  var pt = function(e) {
    if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return {
      number: +e,
      unit: "bp"
    };
    var a = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
    if (!a) throw new q("Invalid size: '" + e + "' in \\includegraphics");
    var r = {
      number: +(a[1] + a[2]),
      unit: a[3]
    };
    if (!Yr(r)) throw new q("Invalid unit: '" + r.unit + "' in \\includegraphics.");
    return r;
  };
  E({
    type: "includegraphics",
    names: [
      "\\includegraphics"
    ],
    props: {
      numArgs: 1,
      numOptionalArgs: 1,
      argTypes: [
        "raw",
        "url"
      ],
      allowedInText: false
    },
    handler: (t, e, a) => {
      var { parser: r } = t, s = {
        number: 0,
        unit: "em"
      }, n = {
        number: 0.9,
        unit: "em"
      }, l = {
        number: 0,
        unit: "em"
      }, u = "";
      if (a[0]) for (var d = G(a[0], "raw").string, m = d.split(","), g = 0; g < m.length; g++) {
        var _ = m[g].split("=");
        if (_.length === 2) {
          var h = _[1].trim();
          switch (_[0].trim()) {
            case "alt":
              u = h;
              break;
            case "width":
              s = pt(h);
              break;
            case "height":
              n = pt(h);
              break;
            case "totalheight":
              l = pt(h);
              break;
            default:
              throw new q("Invalid key: '" + _[0] + "' in \\includegraphics.");
          }
        }
      }
      var b = G(e[0], "url").url;
      return u === "" && (u = b, u = u.replace(/^.*[\\/]/, ""), u = u.substring(0, u.lastIndexOf("."))), r.settings.isTrusted({
        command: "\\includegraphics",
        url: b
      }) ? {
        type: "includegraphics",
        mode: r.mode,
        alt: u,
        width: s,
        height: n,
        totalheight: l,
        src: b
      } : r.formatUnsupportedCmd("\\includegraphics");
    },
    htmlBuilder: (t, e) => {
      var a = K(t.height, e), r = 0;
      t.totalheight.number > 0 && (r = K(t.totalheight, e) - a);
      var s = 0;
      t.width.number > 0 && (s = K(t.width, e));
      var n = {
        height: D(a + r)
      };
      s > 0 && (n.width = D(s)), r > 0 && (n.verticalAlign = D(-r));
      var l = new oS(t.src, t.alt, n);
      return l.height = a, l.depth = r, l;
    },
    mathmlBuilder: (t, e) => {
      var a = new j("mglyph", []);
      a.setAttribute("alt", t.alt);
      var r = K(t.height, e), s = 0;
      if (t.totalheight.number > 0 && (s = K(t.totalheight, e) - r, a.setAttribute("valign", D(-s))), a.setAttribute("height", D(r + s)), t.width.number > 0) {
        var n = K(t.width, e);
        a.setAttribute("width", D(n));
      }
      return a.setAttribute("src", t.src), a;
    }
  });
  E({
    type: "kern",
    names: [
      "\\kern",
      "\\mkern",
      "\\hskip",
      "\\mskip"
    ],
    props: {
      numArgs: 1,
      argTypes: [
        "size"
      ],
      primitive: true,
      allowedInText: true
    },
    handler(t, e) {
      var { parser: a, funcName: r } = t, s = G(e[0], "size");
      if (a.settings.strict) {
        var n = r[1] === "m", l = s.value.unit === "mu";
        n ? (l || a.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " supports only mu units, " + ("not " + s.value.unit + " units")), a.mode !== "math" && a.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " works only in math mode")) : l && a.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + r + " doesn't support mu units");
      }
      return {
        type: "kern",
        mode: a.mode,
        dimension: s.value
      };
    },
    htmlBuilder(t, e) {
      return as(t.dimension, e);
    },
    mathmlBuilder(t, e) {
      var a = K(t.dimension, e);
      return new cs(a);
    }
  });
  E({
    type: "lap",
    names: [
      "\\mathllap",
      "\\mathrlap",
      "\\mathclap"
    ],
    props: {
      numArgs: 1,
      allowedInText: true
    },
    handler: (t, e) => {
      var { parser: a, funcName: r } = t, s = e[0];
      return {
        type: "lap",
        mode: a.mode,
        alignment: r.slice(5),
        body: s
      };
    },
    htmlBuilder: (t, e) => {
      var a;
      t.alignment === "clap" ? (a = T([], [
        $(t.body, e)
      ]), a = T([
        "inner"
      ], [
        a
      ], e)) : a = T([
        "inner"
      ], [
        $(t.body, e)
      ]);
      var r = T([
        "fix"
      ], []), s = T([
        t.alignment
      ], [
        a,
        r
      ], e), n = T([
        "strut"
      ]);
      return n.style.height = D(s.height + s.depth), s.depth && (n.style.verticalAlign = D(-s.depth)), s.children.unshift(n), s = T([
        "thinbox"
      ], [
        s
      ], e), T([
        "mord",
        "vbox"
      ], [
        s
      ], e);
    },
    mathmlBuilder: (t, e) => {
      var a = new j("mpadded", [
        V(t.body, e)
      ]);
      if (t.alignment !== "rlap") {
        var r = t.alignment === "llap" ? "-1" : "-0.5";
        a.setAttribute("lspace", r + "width");
      }
      return a.setAttribute("width", "0px"), a;
    }
  });
  E({
    type: "styling",
    names: [
      "\\(",
      "$"
    ],
    props: {
      numArgs: 0,
      allowedInText: true,
      allowedInMath: false
    },
    handler(t, e) {
      var { funcName: a, parser: r } = t, s = r.mode;
      r.switchMode("math");
      var n = a === "\\(" ? "\\)" : "$", l = r.parseExpression(false, n);
      return r.expect(n), r.switchMode(s), {
        type: "styling",
        mode: r.mode,
        style: "text",
        body: l
      };
    }
  });
  E({
    type: "text",
    names: [
      "\\)",
      "\\]"
    ],
    props: {
      numArgs: 0,
      allowedInText: true,
      allowedInMath: false
    },
    handler(t, e) {
      throw new q("Mismatched " + t.funcName);
    }
  });
  var jr = (t, e) => {
    switch (e.style.size) {
      case L.DISPLAY.size:
        return t.display;
      case L.TEXT.size:
        return t.text;
      case L.SCRIPT.size:
        return t.script;
      case L.SCRIPTSCRIPT.size:
        return t.scriptscript;
      default:
        return t.text;
    }
  };
  E({
    type: "mathchoice",
    names: [
      "\\mathchoice"
    ],
    props: {
      numArgs: 4,
      primitive: true
    },
    handler: (t, e) => {
      var { parser: a } = t;
      return {
        type: "mathchoice",
        mode: a.mode,
        display: ee(e[0]),
        text: ee(e[1]),
        script: ee(e[2]),
        scriptscript: ee(e[3])
      };
    },
    htmlBuilder: (t, e) => {
      var a = jr(t, e), r = re(a, e, false);
      return De(r);
    },
    mathmlBuilder: (t, e) => {
      var a = jr(t, e);
      return Pe(a, e);
    }
  });
  var Cs = (t, e, a, r, s, n, l) => {
    t = T([], [
      t
    ]);
    var u = a && qe(a), d, m;
    if (e) {
      var g = $(e, r.havingStyle(s.sup()), r);
      m = {
        elem: g,
        kern: Math.max(r.fontMetrics().bigOpSpacing1, r.fontMetrics().bigOpSpacing3 - g.depth)
      };
    }
    if (a) {
      var _ = $(a, r.havingStyle(s.sub()), r);
      d = {
        elem: _,
        kern: Math.max(r.fontMetrics().bigOpSpacing2, r.fontMetrics().bigOpSpacing4 - _.height)
      };
    }
    var h;
    if (m && d) {
      var b = r.fontMetrics().bigOpSpacing5 + d.elem.height + d.elem.depth + d.kern + t.depth + l;
      h = U({
        positionType: "bottom",
        positionData: b,
        children: [
          {
            type: "kern",
            size: r.fontMetrics().bigOpSpacing5
          },
          {
            type: "elem",
            elem: d.elem,
            marginLeft: D(-n)
          },
          {
            type: "kern",
            size: d.kern
          },
          {
            type: "elem",
            elem: t
          },
          {
            type: "kern",
            size: m.kern
          },
          {
            type: "elem",
            elem: m.elem,
            marginLeft: D(n)
          },
          {
            type: "kern",
            size: r.fontMetrics().bigOpSpacing5
          }
        ]
      });
    } else if (d) {
      var S = t.height - l;
      h = U({
        positionType: "top",
        positionData: S,
        children: [
          {
            type: "kern",
            size: r.fontMetrics().bigOpSpacing5
          },
          {
            type: "elem",
            elem: d.elem,
            marginLeft: D(-n)
          },
          {
            type: "kern",
            size: d.kern
          },
          {
            type: "elem",
            elem: t
          }
        ]
      });
    } else if (m) {
      var v = t.depth + l;
      h = U({
        positionType: "bottom",
        positionData: v,
        children: [
          {
            type: "elem",
            elem: t
          },
          {
            type: "kern",
            size: m.kern
          },
          {
            type: "elem",
            elem: m.elem,
            marginLeft: D(n)
          },
          {
            type: "kern",
            size: r.fontMetrics().bigOpSpacing5
          }
        ]
      });
    } else return t;
    var B = [
      h
    ];
    if (d && n !== 0 && !u) {
      var C = T([
        "mspace"
      ], [], r);
      C.style.marginRight = D(n), B.unshift(C);
    }
    return T([
      "mop",
      "op-limits"
    ], B, r);
  }, Es = /* @__PURE__ */ new Set([
    "\\smallint"
  ]), na = (t, e) => {
    var a, r, s = false, n;
    t.type === "supsub" ? (a = t.sup, r = t.sub, n = G(t.base, "op"), s = true) : n = G(t, "op");
    var l = e.style, u = false;
    l.size === L.DISPLAY.size && n.symbol && !Es.has(n.name) && (u = true);
    var d;
    if (n.symbol) {
      var m = u ? "Size2-Regular" : "Size1-Regular", g = "";
      if ((n.name === "\\oiint" || n.name === "\\oiiint") && (g = n.name.slice(1), n.name = g === "oiint" ? "\\iint" : "\\iiint"), d = ce(n.name, m, "math", e, [
        "mop",
        "op-symbol",
        u ? "large-op" : "small-op"
      ]), g.length > 0) {
        var _ = d.italic, h = rs(g + "Size" + (u ? "2" : "1"), e);
        d = U({
          positionType: "individualShift",
          children: [
            {
              type: "elem",
              elem: d,
              shift: 0
            },
            {
              type: "elem",
              elem: h,
              shift: u ? 0.08 : 0
            }
          ]
        }), n.name = "\\" + g, d.classes.unshift("mop"), d.italic = _;
      }
    } else if (n.body) {
      var b = re(n.body, e, true);
      b.length === 1 && b[0] instanceof de ? (d = b[0], d.classes[0] = "mop") : d = T([
        "mop"
      ], b, e);
    } else {
      for (var S = [], v = 1; v < n.name.length; v++) S.push(Rt(n.name[v], n.mode, e));
      d = T([
        "mop"
      ], S, e);
    }
    var B = 0, C = 0;
    return (d instanceof de || n.name === "\\oiint" || n.name === "\\oiiint") && !n.suppressBaseShift && (B = (d.height - d.depth) / 2 - e.fontMetrics().axisHeight, C = d.italic || 0), s ? Cs(d, a, r, e, l, C, B) : (B && (d.style.position = "relative", d.style.top = D(B)), d);
  }, da = (t, e) => {
    var a;
    if (t.symbol) a = new j("mo", [
      ge(t.name, t.mode)
    ]), Es.has(t.name) && a.setAttribute("largeop", "false");
    else if (t.body) a = new j("mo", me(t.body, e));
    else {
      a = new j("mi", [
        new ae(t.name.slice(1))
      ]);
      var r = new j("mo", [
        ge("\u2061", "text")
      ]);
      t.parentIsSupSub ? a = new j("mrow", [
        a,
        r
      ]) : a = ns([
        a,
        r
      ]);
    }
    return a;
  }, aA = {
    "\u220F": "\\prod",
    "\u2210": "\\coprod",
    "\u2211": "\\sum",
    "\u22C0": "\\bigwedge",
    "\u22C1": "\\bigvee",
    "\u22C2": "\\bigcap",
    "\u22C3": "\\bigcup",
    "\u2A00": "\\bigodot",
    "\u2A01": "\\bigoplus",
    "\u2A02": "\\bigotimes",
    "\u2A04": "\\biguplus",
    "\u2A06": "\\bigsqcup"
  };
  E({
    type: "op",
    names: [
      "\\coprod",
      "\\bigvee",
      "\\bigwedge",
      "\\biguplus",
      "\\bigcap",
      "\\bigcup",
      "\\intop",
      "\\prod",
      "\\sum",
      "\\bigotimes",
      "\\bigoplus",
      "\\bigodot",
      "\\bigsqcup",
      "\\smallint",
      "\u220F",
      "\u2210",
      "\u2211",
      "\u22C0",
      "\u22C1",
      "\u22C2",
      "\u22C3",
      "\u2A00",
      "\u2A01",
      "\u2A02",
      "\u2A04",
      "\u2A06"
    ],
    props: {
      numArgs: 0
    },
    handler: (t, e) => {
      var { parser: a, funcName: r } = t, s = r;
      return s.length === 1 && (s = aA[s]), {
        type: "op",
        mode: a.mode,
        limits: true,
        parentIsSupSub: false,
        symbol: true,
        name: s
      };
    },
    htmlBuilder: na,
    mathmlBuilder: da
  });
  E({
    type: "op",
    names: [
      "\\mathop"
    ],
    props: {
      numArgs: 1,
      primitive: true
    },
    handler: (t, e) => {
      var { parser: a } = t, r = e[0];
      return {
        type: "op",
        mode: a.mode,
        limits: false,
        parentIsSupSub: false,
        symbol: false,
        body: ee(r)
      };
    },
    htmlBuilder: na,
    mathmlBuilder: da
  });
  var tA = {
    "\u222B": "\\int",
    "\u222C": "\\iint",
    "\u222D": "\\iiint",
    "\u222E": "\\oint",
    "\u222F": "\\oiint",
    "\u2230": "\\oiiint"
  };
  E({
    type: "op",
    names: [
      "\\arcsin",
      "\\arccos",
      "\\arctan",
      "\\arctg",
      "\\arcctg",
      "\\arg",
      "\\ch",
      "\\cos",
      "\\cosec",
      "\\cosh",
      "\\cot",
      "\\cotg",
      "\\coth",
      "\\csc",
      "\\ctg",
      "\\cth",
      "\\deg",
      "\\dim",
      "\\exp",
      "\\hom",
      "\\ker",
      "\\lg",
      "\\ln",
      "\\log",
      "\\sec",
      "\\sin",
      "\\sinh",
      "\\sh",
      "\\tan",
      "\\tanh",
      "\\tg",
      "\\th"
    ],
    props: {
      numArgs: 0
    },
    handler(t) {
      var { parser: e, funcName: a } = t;
      return {
        type: "op",
        mode: e.mode,
        limits: false,
        parentIsSupSub: false,
        symbol: false,
        name: a
      };
    },
    htmlBuilder: na,
    mathmlBuilder: da
  });
  E({
    type: "op",
    names: [
      "\\det",
      "\\gcd",
      "\\inf",
      "\\lim",
      "\\max",
      "\\min",
      "\\Pr",
      "\\sup"
    ],
    props: {
      numArgs: 0
    },
    handler(t) {
      var { parser: e, funcName: a } = t;
      return {
        type: "op",
        mode: e.mode,
        limits: true,
        parentIsSupSub: false,
        symbol: false,
        name: a
      };
    },
    htmlBuilder: na,
    mathmlBuilder: da
  });
  E({
    type: "op",
    names: [
      "\\int",
      "\\iint",
      "\\iiint",
      "\\oint",
      "\\oiint",
      "\\oiiint",
      "\u222B",
      "\u222C",
      "\u222D",
      "\u222E",
      "\u222F",
      "\u2230"
    ],
    props: {
      numArgs: 0,
      allowedInArgument: true
    },
    handler(t) {
      var { parser: e, funcName: a } = t, r = a;
      return r.length === 1 && (r = tA[r]), {
        type: "op",
        mode: e.mode,
        limits: false,
        parentIsSupSub: false,
        symbol: true,
        name: r
      };
    },
    htmlBuilder: na,
    mathmlBuilder: da
  });
  var Is = (t, e) => {
    var a, r, s = false, n;
    t.type === "supsub" ? (a = t.sup, r = t.sub, n = G(t.base, "operatorname"), s = true) : n = G(t, "operatorname");
    var l;
    if (n.body.length > 0) {
      for (var u = n.body.map((_) => {
        var h = "text" in _ ? _.text : void 0;
        return typeof h == "string" ? {
          type: "textord",
          mode: _.mode,
          text: h
        } : _;
      }), d = re(u, e.withFont("mathrm"), true), m = 0; m < d.length; m++) {
        var g = d[m];
        g instanceof de && (g.text = g.text.replace(/\u2212/, "-").replace(/\u2217/, "*"));
      }
      l = T([
        "mop"
      ], d, e);
    } else l = T([
      "mop"
    ], [], e);
    return s ? Cs(l, a, r, e, e.style, 0, 0) : l;
  }, rA = (t, e) => {
    for (var a = me(t.body, e.withFont("mathrm")), r = true, s = 0; s < a.length; s++) {
      var n = a[s];
      if (!(n instanceof cs)) if (n instanceof j) switch (n.type) {
        case "mi":
        case "mn":
        case "mspace":
        case "mtext":
          break;
        case "mo": {
          var l = n.children[0];
          n.children.length === 1 && l instanceof ae ? l.text = l.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : r = false;
          break;
        }
        default:
          r = false;
      }
      else r = false;
    }
    if (r) {
      var u = a.map((g) => g.toText()).join("");
      a = [
        new ae(u)
      ];
    }
    var d = new j("mi", a);
    d.setAttribute("mathvariant", "normal");
    var m = new j("mo", [
      ge("\u2061", "text")
    ]);
    return t.parentIsSupSub ? new j("mrow", [
      d,
      m
    ]) : ns([
      d,
      m
    ]);
  };
  E({
    type: "operatorname",
    names: [
      "\\operatorname@",
      "\\operatornamewithlimits"
    ],
    props: {
      numArgs: 1
    },
    handler: (t, e) => {
      var { parser: a, funcName: r } = t, s = e[0];
      return {
        type: "operatorname",
        mode: a.mode,
        body: ee(s),
        alwaysHandleSupSub: r === "\\operatornamewithlimits",
        limits: false,
        parentIsSupSub: false
      };
    },
    htmlBuilder: Is,
    mathmlBuilder: rA
  });
  p("\\operatorname", "\\@ifstar\\operatornamewithlimits\\operatorname@");
  Xe({
    type: "ordgroup",
    htmlBuilder(t, e) {
      return t.semisimple ? De(re(t.body, e, false)) : T([
        "mord"
      ], re(t.body, e, true), e);
    },
    mathmlBuilder(t, e) {
      return Pe(t.body, e, true);
    }
  });
  E({
    type: "overline",
    names: [
      "\\overline"
    ],
    props: {
      numArgs: 1
    },
    handler(t, e) {
      var { parser: a } = t, r = e[0];
      return {
        type: "overline",
        mode: a.mode,
        body: r
      };
    },
    htmlBuilder(t, e) {
      var a = $(t.body, e.havingCrampedStyle()), r = aa("overline-line", e), s = e.fontMetrics().defaultRuleThickness, n = U({
        positionType: "firstBaseline",
        children: [
          {
            type: "elem",
            elem: a
          },
          {
            type: "kern",
            size: 3 * s
          },
          {
            type: "elem",
            elem: r
          },
          {
            type: "kern",
            size: s
          }
        ]
      });
      return T([
        "mord",
        "overline"
      ], [
        n
      ], e);
    },
    mathmlBuilder(t, e) {
      var a = new j("mo", [
        new ae("\u203E")
      ]);
      a.setAttribute("stretchy", "true");
      var r = new j("mover", [
        V(t.body, e),
        a
      ]);
      return r.setAttribute("accent", "true"), r;
    }
  });
  E({
    type: "phantom",
    names: [
      "\\phantom"
    ],
    props: {
      numArgs: 1,
      allowedInText: true
    },
    handler: (t, e) => {
      var { parser: a } = t, r = e[0];
      return {
        type: "phantom",
        mode: a.mode,
        body: ee(r)
      };
    },
    htmlBuilder: (t, e) => {
      var a = re(t.body, e.withPhantom(), false);
      return De(a);
    },
    mathmlBuilder: (t, e) => {
      var a = me(t.body, e);
      return new j("mphantom", a);
    }
  });
  p("\\hphantom", "\\smash{\\phantom{#1}}");
  E({
    type: "vphantom",
    names: [
      "\\vphantom"
    ],
    props: {
      numArgs: 1,
      allowedInText: true
    },
    handler: (t, e) => {
      var { parser: a } = t, r = e[0];
      return {
        type: "vphantom",
        mode: a.mode,
        body: r
      };
    },
    htmlBuilder: (t, e) => {
      var a = T([
        "inner"
      ], [
        $(t.body, e.withPhantom())
      ]), r = T([
        "fix"
      ], []);
      return T([
        "mord",
        "rlap"
      ], [
        a,
        r
      ], e);
    },
    mathmlBuilder: (t, e) => {
      var a = me(ee(t.body), e), r = new j("mphantom", a), s = new j("mpadded", [
        r
      ]);
      return s.setAttribute("width", "0px"), s;
    }
  });
  E({
    type: "raisebox",
    names: [
      "\\raisebox"
    ],
    props: {
      numArgs: 2,
      argTypes: [
        "size",
        "hbox"
      ],
      allowedInText: true
    },
    handler(t, e) {
      var { parser: a } = t, r = G(e[0], "size").value, s = e[1];
      return {
        type: "raisebox",
        mode: a.mode,
        dy: r,
        body: s
      };
    },
    htmlBuilder(t, e) {
      var a = $(t.body, e), r = K(t.dy, e);
      return U({
        positionType: "shift",
        positionData: -r,
        children: [
          {
            type: "elem",
            elem: a
          }
        ]
      });
    },
    mathmlBuilder(t, e) {
      var a = new j("mpadded", [
        V(t.body, e)
      ]), r = t.dy.number + t.dy.unit;
      return a.setAttribute("voffset", r), a;
    }
  });
  E({
    type: "internal",
    names: [
      "\\relax"
    ],
    props: {
      numArgs: 0,
      allowedInText: true,
      allowedInArgument: true
    },
    handler(t) {
      var { parser: e } = t;
      return {
        type: "internal",
        mode: e.mode
      };
    }
  });
  E({
    type: "rule",
    names: [
      "\\rule"
    ],
    props: {
      numArgs: 2,
      numOptionalArgs: 1,
      allowedInText: true,
      allowedInMath: true,
      argTypes: [
        "size",
        "size",
        "size"
      ]
    },
    handler(t, e, a) {
      var { parser: r } = t, s = a[0], n = G(e[0], "size"), l = G(e[1], "size");
      return {
        type: "rule",
        mode: r.mode,
        shift: s && G(s, "size").value,
        width: n.value,
        height: l.value
      };
    },
    htmlBuilder(t, e) {
      var a = T([
        "mord",
        "rule"
      ], [], e), r = K(t.width, e), s = K(t.height, e), n = t.shift ? K(t.shift, e) : 0;
      return a.style.borderRightWidth = D(r), a.style.borderTopWidth = D(s), a.style.bottom = D(n), a.width = r, a.height = s + n, a.depth = -n, a.maxFontSize = s * 1.125 * e.sizeMultiplier, a;
    },
    mathmlBuilder(t, e) {
      var a = K(t.width, e), r = K(t.height, e), s = t.shift ? K(t.shift, e) : 0, n = e.color && e.getColor() || "black", l = new j("mspace");
      l.setAttribute("mathbackground", n), l.setAttribute("width", D(a)), l.setAttribute("height", D(r));
      var u = new j("mpadded", [
        l
      ]);
      return s >= 0 ? u.setAttribute("height", D(s)) : (u.setAttribute("height", D(s)), u.setAttribute("depth", D(-s))), u.setAttribute("voffset", D(s)), u;
    }
  });
  function Ns(t, e, a) {
    for (var r = re(t, e, false), s = e.sizeMultiplier / a.sizeMultiplier, n = 0; n < r.length; n++) {
      var l = r[n].classes.indexOf("sizing");
      l < 0 ? Array.prototype.push.apply(r[n].classes, e.sizingClasses(a)) : r[n].classes[l + 1] === "reset-size" + e.size && (r[n].classes[l + 1] = "reset-size" + a.size), r[n].height *= s, r[n].depth *= s;
    }
    return De(r);
  }
  var Dr = [
    "\\tiny",
    "\\sixptsize",
    "\\scriptsize",
    "\\footnotesize",
    "\\small",
    "\\normalsize",
    "\\large",
    "\\Large",
    "\\LARGE",
    "\\huge",
    "\\Huge"
  ], sA = (t, e) => {
    var a = e.havingSize(t.size);
    return Ns(t.body, a, e);
  };
  E({
    type: "sizing",
    names: Dr,
    props: {
      numArgs: 0,
      allowedInText: true
    },
    handler: (t, e) => {
      var { breakOnTokenText: a, funcName: r, parser: s } = t, n = s.parseExpression(false, a);
      return {
        type: "sizing",
        mode: s.mode,
        size: Dr.indexOf(r) + 1,
        body: n
      };
    },
    htmlBuilder: sA,
    mathmlBuilder: (t, e) => {
      var a = e.havingSize(t.size), r = me(t.body, a), s = new j("mstyle", r);
      return s.setAttribute("mathsize", D(a.sizeMultiplier)), s;
    }
  });
  E({
    type: "smash",
    names: [
      "\\smash"
    ],
    props: {
      numArgs: 1,
      numOptionalArgs: 1,
      allowedInText: true
    },
    handler: (t, e, a) => {
      var { parser: r } = t, s = false, n = false, l = a[0] && G(a[0], "ordgroup");
      if (l) for (var u = "", d = 0; d < l.body.length; ++d) {
        var m = l.body[d];
        if (u = $a(m).text, u === "t") s = true;
        else if (u === "b") n = true;
        else {
          s = false, n = false;
          break;
        }
      }
      else s = true, n = true;
      var g = e[0];
      return {
        type: "smash",
        mode: r.mode,
        body: g,
        smashHeight: s,
        smashDepth: n
      };
    },
    htmlBuilder: (t, e) => {
      var a = T([], [
        $(t.body, e)
      ]);
      if (!t.smashHeight && !t.smashDepth) return a;
      if (t.smashHeight && (a.height = 0), t.smashDepth && (a.depth = 0), t.smashHeight && t.smashDepth) return T([
        "mord",
        "smash"
      ], [
        a
      ], e);
      if (a.children) for (var r = 0; r < a.children.length; r++) t.smashHeight && (a.children[r].height = 0), t.smashDepth && (a.children[r].depth = 0);
      var s = U({
        positionType: "firstBaseline",
        children: [
          {
            type: "elem",
            elem: a
          }
        ]
      });
      return T([
        "mord"
      ], [
        s
      ], e);
    },
    mathmlBuilder: (t, e) => {
      var a = new j("mpadded", [
        V(t.body, e)
      ]);
      return t.smashHeight && a.setAttribute("height", "0px"), t.smashDepth && a.setAttribute("depth", "0px"), a;
    }
  });
  E({
    type: "sqrt",
    names: [
      "\\sqrt"
    ],
    props: {
      numArgs: 1,
      numOptionalArgs: 1
    },
    handler(t, e, a) {
      var { parser: r } = t, s = a[0], n = e[0];
      return {
        type: "sqrt",
        mode: r.mode,
        body: n,
        index: s
      };
    },
    htmlBuilder(t, e) {
      var a = $(t.body, e.havingCrampedStyle());
      a.height === 0 && (a.height = e.fontMetrics().xHeight), a = ta(a, e);
      var r = e.fontMetrics(), s = r.defaultRuleThickness, n = s;
      e.style.id < L.TEXT.id && (n = e.fontMetrics().xHeight);
      var l = s + n / 4, u = a.height + a.depth + l + s, { span: d, ruleWidth: m, advanceWidth: g } = US(u, e), _ = d.height - m;
      _ > a.height + a.depth + l && (l = (l + _ - a.height - a.depth) / 2);
      var h = d.height - a.height - l - m;
      a.style.paddingLeft = D(g);
      var b = U({
        positionType: "firstBaseline",
        children: [
          {
            type: "elem",
            elem: a,
            wrapperClasses: [
              "svg-align"
            ]
          },
          {
            type: "kern",
            size: -(a.height + h)
          },
          {
            type: "elem",
            elem: d
          },
          {
            type: "kern",
            size: m
          }
        ]
      });
      if (t.index) {
        var S = e.havingStyle(L.SCRIPTSCRIPT), v = $(t.index, S, e), B = 0.6 * (b.height - b.depth), C = U({
          positionType: "shift",
          positionData: -B,
          children: [
            {
              type: "elem",
              elem: v
            }
          ]
        }), A = T([
          "root"
        ], [
          C
        ]);
        return T([
          "mord",
          "sqrt"
        ], [
          A,
          b
        ], e);
      } else return T([
        "mord",
        "sqrt"
      ], [
        b
      ], e);
    },
    mathmlBuilder(t, e) {
      var { body: a, index: r } = t;
      return r ? new j("mroot", [
        V(a, e),
        V(r, e)
      ]) : new j("msqrt", [
        V(a, e)
      ]);
    }
  });
  var Br = {
    display: L.DISPLAY,
    text: L.TEXT,
    script: L.SCRIPT,
    scriptscript: L.SCRIPTSCRIPT
  };
  E({
    type: "styling",
    names: [
      "\\displaystyle",
      "\\textstyle",
      "\\scriptstyle",
      "\\scriptscriptstyle"
    ],
    props: {
      numArgs: 0,
      allowedInText: true,
      primitive: true
    },
    handler(t, e) {
      var { breakOnTokenText: a, funcName: r, parser: s } = t, n = s.parseExpression(true, a), l = r.slice(1, r.length - 5);
      return {
        type: "styling",
        mode: s.mode,
        style: l,
        body: n
      };
    },
    htmlBuilder(t, e) {
      var a = Br[t.style], r = e.havingStyle(a).withFont("");
      return Ns(t.body, r, e);
    },
    mathmlBuilder(t, e) {
      var a = Br[t.style], r = e.havingStyle(a), s = me(t.body, r), n = new j("mstyle", s), l = {
        display: [
          "0",
          "true"
        ],
        text: [
          "0",
          "false"
        ],
        script: [
          "1",
          "false"
        ],
        scriptscript: [
          "2",
          "false"
        ]
      }, u = l[t.style];
      return n.setAttribute("scriptlevel", u[0]), n.setAttribute("displaystyle", u[1]), n;
    }
  });
  var oA = function(e, a) {
    var r = e.base;
    if (r) if (r.type === "op") {
      var s = r.limits && (a.style.size === L.DISPLAY.size || r.alwaysHandleSupSub);
      return s ? na : null;
    } else if (r.type === "operatorname") {
      var n = r.alwaysHandleSupSub && (a.style.size === L.DISPLAY.size || r.limits);
      return n ? Is : null;
    } else {
      if (r.type === "accent") return qe(r.base) ? Pt : null;
      if (r.type === "horizBrace") {
        var l = !e.sub;
        return l === r.isOver ? Bs : null;
      } else return null;
    }
    else return null;
  };
  Xe({
    type: "supsub",
    htmlBuilder(t, e) {
      var a = oA(t, e);
      if (a) return a(t, e);
      var { base: r, sup: s, sub: n } = t, l = $(r, e), u, d, m = e.fontMetrics(), g = 0, _ = 0, h = r && qe(r);
      if (s) {
        var b = e.havingStyle(e.style.sup());
        u = $(s, b, e), h || (g = l.height - b.fontMetrics().supDrop * b.sizeMultiplier / e.sizeMultiplier);
      }
      if (n) {
        var S = e.havingStyle(e.style.sub());
        d = $(n, S, e), h || (_ = l.depth + S.fontMetrics().subDrop * S.sizeMultiplier / e.sizeMultiplier);
      }
      var v;
      e.style === L.DISPLAY ? v = m.sup1 : e.style.cramped ? v = m.sup3 : v = m.sup2;
      var B = e.sizeMultiplier, C = D(0.5 / m.ptPerEm / B), A = null;
      if (d) {
        var R = t.base && t.base.type === "op" && t.base.name && (t.base.name === "\\oiint" || t.base.name === "\\oiiint");
        (l instanceof de || R) && (A = D(-l.italic));
      }
      var N;
      if (u && d) {
        g = Math.max(g, v, u.depth + 0.25 * m.xHeight), _ = Math.max(_, m.sub2);
        var x = m.defaultRuleThickness, i = 4 * x;
        if (g - u.depth - (d.height - _) < i) {
          _ = i - (g - u.depth) + d.height;
          var z = 0.8 * m.xHeight - (g - u.depth);
          z > 0 && (g += z, _ -= z);
        }
        var F = [
          {
            type: "elem",
            elem: d,
            shift: _,
            marginRight: C,
            marginLeft: A
          },
          {
            type: "elem",
            elem: u,
            shift: -g,
            marginRight: C
          }
        ];
        N = U({
          positionType: "individualShift",
          children: F
        });
      } else if (d) {
        _ = Math.max(_, m.sub1, d.height - 0.8 * m.xHeight);
        var O = [
          {
            type: "elem",
            elem: d,
            marginLeft: A,
            marginRight: C
          }
        ];
        N = U({
          positionType: "shift",
          positionData: _,
          children: O
        });
      } else if (u) g = Math.max(g, v, u.depth + 0.25 * m.xHeight), N = U({
        positionType: "shift",
        positionData: -g,
        children: [
          {
            type: "elem",
            elem: u,
            marginRight: C
          }
        ]
      });
      else throw new Error("supsub must have either sup or sub.");
      var X = At(l, "right") || "mord";
      return T([
        X
      ], [
        l,
        T([
          "msupsub"
        ], [
          N
        ])
      ], e);
    },
    mathmlBuilder(t, e) {
      var a = false, r, s;
      t.base && t.base.type === "horizBrace" && (s = !!t.sup, s === t.base.isOver && (a = true, r = t.base.isOver)), t.base && (t.base.type === "op" || t.base.type === "operatorname") && (t.base.parentIsSupSub = true);
      var n = [
        V(t.base, e)
      ];
      t.sub && n.push(V(t.sub, e)), t.sup && n.push(V(t.sup, e));
      var l;
      if (a) l = r ? "mover" : "munder";
      else if (t.sub) if (t.sup) {
        var m = t.base;
        m && m.type === "op" && m.limits && e.style === L.DISPLAY || m && m.type === "operatorname" && m.alwaysHandleSupSub && (e.style === L.DISPLAY || m.limits) ? l = "munderover" : l = "msubsup";
      } else {
        var d = t.base;
        d && d.type === "op" && d.limits && (e.style === L.DISPLAY || d.alwaysHandleSupSub) || d && d.type === "operatorname" && d.alwaysHandleSupSub && (d.limits || e.style === L.DISPLAY) ? l = "munder" : l = "msub";
      }
      else {
        var u = t.base;
        u && u.type === "op" && u.limits && (e.style === L.DISPLAY || u.alwaysHandleSupSub) || u && u.type === "operatorname" && u.alwaysHandleSupSub && (u.limits || e.style === L.DISPLAY) ? l = "mover" : l = "msup";
      }
      return new j(l, n);
    }
  });
  Xe({
    type: "atom",
    htmlBuilder(t, e) {
      return Rt(t.text, t.mode, e, [
        "m" + t.family
      ]);
    },
    mathmlBuilder(t, e) {
      var a = new j("mo", [
        ge(t.text, t.mode)
      ]);
      if (t.family === "bin") {
        var r = Ht(t, e);
        r === "bold-italic" && a.setAttribute("mathvariant", r);
      } else t.family === "punct" ? a.setAttribute("separator", "true") : (t.family === "open" || t.family === "close") && a.setAttribute("stretchy", "false");
      return a;
    }
  });
  var Rs = {
    mi: "italic",
    mn: "normal",
    mtext: "normal"
  };
  Xe({
    type: "mathord",
    htmlBuilder(t, e) {
      return La(t, e, "mathord");
    },
    mathmlBuilder(t, e) {
      var a = new j("mi", [
        ge(t.text, t.mode, e)
      ]), r = Ht(t, e) || "italic";
      return r !== Rs[a.type] && a.setAttribute("mathvariant", r), a;
    }
  });
  Xe({
    type: "textord",
    htmlBuilder(t, e) {
      return La(t, e, "textord");
    },
    mathmlBuilder(t, e) {
      var a = ge(t.text, t.mode, e), r = Ht(t, e) || "normal", s;
      return t.mode === "text" ? s = new j("mtext", [
        a
      ]) : /[0-9]/.test(t.text) ? s = new j("mn", [
        a
      ]) : t.text === "\\prime" ? s = new j("mo", [
        a
      ]) : s = new j("mi", [
        a
      ]), r !== Rs[s.type] && s.setAttribute("mathvariant", r), s;
    }
  });
  var mt = {
    "\\nobreak": "nobreak",
    "\\allowbreak": "allowbreak"
  }, yt = {
    " ": {},
    "\\ ": {},
    "~": {
      className: "nobreak"
    },
    "\\space": {},
    "\\nobreakspace": {
      className: "nobreak"
    }
  };
  Xe({
    type: "spacing",
    htmlBuilder(t, e) {
      if (yt.hasOwnProperty(t.text)) {
        var a = yt[t.text].className || "";
        if (t.mode === "text") {
          var r = La(t, e, "textord");
          return r.classes.push(a), r;
        } else return T([
          "mspace",
          a
        ], [
          Rt(t.text, t.mode, e)
        ], e);
      } else {
        if (mt.hasOwnProperty(t.text)) return T([
          "mspace",
          mt[t.text]
        ], [], e);
        throw new q('Unknown type of space "' + t.text + '"');
      }
    },
    mathmlBuilder(t, e) {
      var a;
      if (yt.hasOwnProperty(t.text)) a = new j("mtext", [
        new ae("\xA0")
      ]);
      else {
        if (mt.hasOwnProperty(t.text)) return new j("mspace");
        throw new q('Unknown type of space "' + t.text + '"');
      }
      return a;
    }
  });
  var Cr = () => {
    var t = new j("mtd", []);
    return t.setAttribute("width", "50%"), t;
  };
  Xe({
    type: "tag",
    mathmlBuilder(t, e) {
      var a = new j("mtable", [
        new j("mtr", [
          Cr(),
          new j("mtd", [
            Pe(t.body, e)
          ]),
          Cr(),
          new j("mtd", [
            Pe(t.tag, e)
          ])
        ])
      ]);
      return a.setAttribute("width", "100%"), a;
    }
  });
  var Er = {
    "\\text": void 0,
    "\\textrm": "textrm",
    "\\textsf": "textsf",
    "\\texttt": "texttt",
    "\\textnormal": "textrm"
  }, Ir = {
    "\\textbf": "textbf",
    "\\textmd": "textmd"
  }, nA = {
    "\\textit": "textit",
    "\\textup": "textup"
  }, Nr = (t, e) => {
    var a = t.font;
    if (a) {
      if (Er[a]) return e.withTextFontFamily(Er[a]);
      if (Ir[a]) return e.withTextFontWeight(Ir[a]);
      if (a === "\\emph") return e.fontShape === "textit" ? e.withTextFontShape("textup") : e.withTextFontShape("textit");
    } else return e;
    return e.withTextFontShape(nA[a]);
  };
  E({
    type: "text",
    names: [
      "\\text",
      "\\textrm",
      "\\textsf",
      "\\texttt",
      "\\textnormal",
      "\\textbf",
      "\\textmd",
      "\\textit",
      "\\textup",
      "\\emph"
    ],
    props: {
      numArgs: 1,
      argTypes: [
        "text"
      ],
      allowedInArgument: true,
      allowedInText: true
    },
    handler(t, e) {
      var { parser: a, funcName: r } = t, s = e[0];
      return {
        type: "text",
        mode: a.mode,
        body: ee(s),
        font: r
      };
    },
    htmlBuilder(t, e) {
      var a = Nr(t, e), r = re(t.body, a, true);
      return T([
        "mord",
        "text"
      ], r, a);
    },
    mathmlBuilder(t, e) {
      var a = Nr(t, e);
      return Pe(t.body, a);
    }
  });
  E({
    type: "underline",
    names: [
      "\\underline"
    ],
    props: {
      numArgs: 1,
      allowedInText: true
    },
    handler(t, e) {
      var { parser: a } = t;
      return {
        type: "underline",
        mode: a.mode,
        body: e[0]
      };
    },
    htmlBuilder(t, e) {
      var a = $(t.body, e), r = aa("underline-line", e), s = e.fontMetrics().defaultRuleThickness, n = U({
        positionType: "top",
        positionData: a.height,
        children: [
          {
            type: "kern",
            size: s
          },
          {
            type: "elem",
            elem: r
          },
          {
            type: "kern",
            size: 3 * s
          },
          {
            type: "elem",
            elem: a
          }
        ]
      });
      return T([
        "mord",
        "underline"
      ], [
        n
      ], e);
    },
    mathmlBuilder(t, e) {
      var a = new j("mo", [
        new ae("\u203E")
      ]);
      a.setAttribute("stretchy", "true");
      var r = new j("munder", [
        V(t.body, e),
        a
      ]);
      return r.setAttribute("accentunder", "true"), r;
    }
  });
  E({
    type: "vcenter",
    names: [
      "\\vcenter"
    ],
    props: {
      numArgs: 1,
      argTypes: [
        "original"
      ],
      allowedInText: false
    },
    handler(t, e) {
      var { parser: a } = t;
      return {
        type: "vcenter",
        mode: a.mode,
        body: e[0]
      };
    },
    htmlBuilder(t, e) {
      var a = $(t.body, e), r = e.fontMetrics().axisHeight, s = 0.5 * (a.height - r - (a.depth + r));
      return U({
        positionType: "shift",
        positionData: s,
        children: [
          {
            type: "elem",
            elem: a
          }
        ]
      });
    },
    mathmlBuilder(t, e) {
      return new j("mpadded", [
        V(t.body, e)
      ], [
        "vcenter"
      ]);
    }
  });
  E({
    type: "verb",
    names: [
      "\\verb"
    ],
    props: {
      numArgs: 0,
      allowedInText: true
    },
    handler(t, e, a) {
      throw new q("\\verb ended by end of line instead of matching delimiter");
    },
    htmlBuilder(t, e) {
      for (var a = Rr(t), r = [], s = e.havingStyle(e.style.text()), n = 0; n < a.length; n++) {
        var l = a[n];
        l === "~" && (l = "\\textasciitilde"), r.push(ce(l, "Typewriter-Regular", t.mode, s, [
          "mord",
          "texttt"
        ]));
      }
      return T([
        "mord",
        "text"
      ].concat(s.sizingClasses(e)), es(r), s);
    },
    mathmlBuilder(t, e) {
      var a = new ae(Rr(t)), r = new j("mtext", [
        a
      ]);
      return r.setAttribute("mathvariant", "monospace"), r;
    }
  });
  var Rr = (t) => t.body.replace(/ /g, t.star ? "\u2423" : "\xA0"), Re = ss, Fs = `[ \r
	]`, cA = "\\\\[a-zA-Z@]+", iA = "\\\\[^\uD800-\uDFFF]", lA = "(" + cA + ")" + Fs + "*", fA = `\\\\(
|[ \r	]+
?)[ \r	]*`, Dt = "[\u0300-\u036F]", uA = new RegExp(Dt + "+$"), hA = "(" + Fs + "+)|" + (fA + "|") + "([!-\\[\\]-\u2027\u202A-\uD7FF\uF900-\uFFFF]" + (Dt + "*") + "|[\uD800-\uDBFF][\uDC00-\uDFFF]" + (Dt + "*") + "|\\\\verb\\*([^]).*?\\4|\\\\verb([^*a-zA-Z]).*?\\5" + ("|" + lA) + ("|" + iA + ")");
  class Fr {
    constructor(e, a) {
      this.input = e, this.settings = a, this.tokenRegex = new RegExp(hA, "g"), this.catcodes = {
        "%": 14,
        "~": 13
      };
    }
    setCatcode(e, a) {
      this.catcodes[e] = a;
    }
    lex() {
      var e = this.input, a = this.tokenRegex.lastIndex;
      if (a === e.length) return new he("EOF", new ue(this, a, a));
      var r = this.tokenRegex.exec(e);
      if (r === null || r.index !== a) throw new q("Unexpected character: '" + e[a] + "'", new he(e[a], new ue(this, a, a + 1)));
      var s = r[6] || r[3] || (r[2] ? "\\ " : " ");
      if (this.catcodes[s] === 14) {
        var n = e.indexOf(`
`, this.tokenRegex.lastIndex);
        return n === -1 ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = n + 1, this.lex();
      }
      return new he(s, new ue(this, a, this.tokenRegex.lastIndex));
    }
  }
  class dA {
    constructor(e, a) {
      e === void 0 && (e = {}), a === void 0 && (a = {}), this.current = a, this.builtins = e, this.undefStack = [];
    }
    beginGroup() {
      this.undefStack.push({});
    }
    endGroup() {
      if (this.undefStack.length === 0) throw new q("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
      var e = this.undefStack.pop();
      for (var a in e) e.hasOwnProperty(a) && (e[a] == null ? delete this.current[a] : this.current[a] = e[a]);
    }
    endGroups() {
      for (; this.undefStack.length > 0; ) this.endGroup();
    }
    has(e) {
      return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e);
    }
    get(e) {
      return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e];
    }
    set(e, a, r) {
      if (r === void 0 && (r = false), r) {
        for (var s = 0; s < this.undefStack.length; s++) delete this.undefStack[s][e];
        this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = a);
      } else {
        var n = this.undefStack[this.undefStack.length - 1];
        n && !n.hasOwnProperty(e) && (n[e] = this.current[e]);
      }
      a == null ? delete this.current[e] : this.current[e] = a;
    }
  }
  var pA = Ms;
  p("\\noexpand", function(t) {
    var e = t.popToken();
    return t.isExpandable(e.text) && (e.noexpand = true, e.treatAsRelax = true), {
      tokens: [
        e
      ],
      numArgs: 0
    };
  });
  p("\\expandafter", function(t) {
    var e = t.popToken();
    return t.expandOnce(true), {
      tokens: [
        e
      ],
      numArgs: 0
    };
  });
  p("\\@firstoftwo", function(t) {
    var e = t.consumeArgs(2);
    return {
      tokens: e[0],
      numArgs: 0
    };
  });
  p("\\@secondoftwo", function(t) {
    var e = t.consumeArgs(2);
    return {
      tokens: e[1],
      numArgs: 0
    };
  });
  p("\\@ifnextchar", function(t) {
    var e = t.consumeArgs(3);
    t.consumeSpaces();
    var a = t.future();
    return e[0].length === 1 && e[0][0].text === a.text ? {
      tokens: e[1],
      numArgs: 0
    } : {
      tokens: e[2],
      numArgs: 0
    };
  });
  p("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}");
  p("\\TextOrMath", function(t) {
    var e = t.consumeArgs(2);
    return t.mode === "text" ? {
      tokens: e[0],
      numArgs: 0
    } : {
      tokens: e[1],
      numArgs: 0
    };
  });
  var Or = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
  p("\\char", function(t) {
    var e = t.popToken(), a, r = 0;
    if (e.text === "'") a = 8, e = t.popToken();
    else if (e.text === '"') a = 16, e = t.popToken();
    else if (e.text === "`") if (e = t.popToken(), e.text[0] === "\\") r = e.text.charCodeAt(1);
    else {
      if (e.text === "EOF") throw new q("\\char` missing argument");
      r = e.text.charCodeAt(0);
    }
    else a = 10;
    if (a) {
      if (r = Or[e.text], r == null || r >= a) throw new q("Invalid base-" + a + " digit " + e.text);
      for (var s; (s = Or[t.future().text]) != null && s < a; ) r *= a, r += s, t.popToken();
    }
    return "\\@char{" + r + "}";
  });
  var Xt = (t, e, a, r) => {
    var s = t.consumeArg().tokens;
    if (s.length !== 1) throw new q("\\newcommand's first argument must be a macro name");
    var n = s[0].text, l = t.isDefined(n);
    if (l && !e) throw new q("\\newcommand{" + n + "} attempting to redefine " + (n + "; use \\renewcommand"));
    if (!l && !a) throw new q("\\renewcommand{" + n + "} when command " + n + " does not yet exist; use \\newcommand");
    var u = 0;
    if (s = t.consumeArg().tokens, s.length === 1 && s[0].text === "[") {
      for (var d = "", m = t.expandNextToken(); m.text !== "]" && m.text !== "EOF"; ) d += m.text, m = t.expandNextToken();
      if (!d.match(/^\s*[0-9]+\s*$/)) throw new q("Invalid number of arguments: " + d);
      u = parseInt(d), s = t.consumeArg().tokens;
    }
    return l && r || t.macros.set(n, {
      tokens: s,
      numArgs: u
    }), "";
  };
  p("\\newcommand", (t) => Xt(t, false, true, false));
  p("\\renewcommand", (t) => Xt(t, true, false, false));
  p("\\providecommand", (t) => Xt(t, true, true, true));
  p("\\message", (t) => {
    var e = t.consumeArgs(1)[0];
    return console.log(e.reverse().map((a) => a.text).join("")), "";
  });
  p("\\errmessage", (t) => {
    var e = t.consumeArgs(1)[0];
    return console.error(e.reverse().map((a) => a.text).join("")), "";
  });
  p("\\show", (t) => {
    var e = t.popToken(), a = e.text;
    return console.log(e, t.macros.get(a), Re[a], W.math[a], W.text[a]), "";
  });
  p("\\bgroup", "{");
  p("\\egroup", "}");
  p("~", "\\nobreakspace");
  p("\\lq", "`");
  p("\\rq", "'");
  p("\\aa", "\\r a");
  p("\\AA", "\\r A");
  p("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xA9}");
  p("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}");
  p("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xAE}");
  p("\u212C", "\\mathscr{B}");
  p("\u2130", "\\mathscr{E}");
  p("\u2131", "\\mathscr{F}");
  p("\u210B", "\\mathscr{H}");
  p("\u2110", "\\mathscr{I}");
  p("\u2112", "\\mathscr{L}");
  p("\u2133", "\\mathscr{M}");
  p("\u211B", "\\mathscr{R}");
  p("\u212D", "\\mathfrak{C}");
  p("\u210C", "\\mathfrak{H}");
  p("\u2128", "\\mathfrak{Z}");
  p("\\Bbbk", "\\Bbb{k}");
  p("\xB7", "\\cdotp");
  p("\\llap", "\\mathllap{\\textrm{#1}}");
  p("\\rlap", "\\mathrlap{\\textrm{#1}}");
  p("\\clap", "\\mathclap{\\textrm{#1}}");
  p("\\mathstrut", "\\vphantom{(}");
  p("\\underbar", "\\underline{\\text{#1}}");
  p("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}\\nobreak}{\\char"338}');
  p("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}");
  p("\\ne", "\\neq");
  p("\u2260", "\\neq");
  p("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}");
  p("\u2209", "\\notin");
  p("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}");
  p("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}");
  p("\u225A", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225A}}");
  p("\u225B", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225B}}");
  p("\u225D", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225D}}");
  p("\u225E", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225E}}");
  p("\u225F", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225F}}");
  p("\u27C2", "\\perp");
  p("\u203C", "\\mathclose{!\\mkern-0.8mu!}");
  p("\u220C", "\\notni");
  p("\u231C", "\\ulcorner");
  p("\u231D", "\\urcorner");
  p("\u231E", "\\llcorner");
  p("\u231F", "\\lrcorner");
  p("\xA9", "\\copyright");
  p("\xAE", "\\textregistered");
  p("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}');
  p("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}');
  p("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}');
  p("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}');
  p("\\vdots", "{\\varvdots\\rule{0pt}{15pt}}");
  p("\u22EE", "\\vdots");
  p("\\varGamma", "\\mathit{\\Gamma}");
  p("\\varDelta", "\\mathit{\\Delta}");
  p("\\varTheta", "\\mathit{\\Theta}");
  p("\\varLambda", "\\mathit{\\Lambda}");
  p("\\varXi", "\\mathit{\\Xi}");
  p("\\varPi", "\\mathit{\\Pi}");
  p("\\varSigma", "\\mathit{\\Sigma}");
  p("\\varUpsilon", "\\mathit{\\Upsilon}");
  p("\\varPhi", "\\mathit{\\Phi}");
  p("\\varPsi", "\\mathit{\\Psi}");
  p("\\varOmega", "\\mathit{\\Omega}");
  p("\\substack", "\\begin{subarray}{c}#1\\end{subarray}");
  p("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu\\relax");
  p("\\boxed", "\\fbox{$\\displaystyle{#1}$}");
  p("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;");
  p("\\implies", "\\DOTSB\\;\\Longrightarrow\\;");
  p("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
  p("\\dddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ...}}{#1}}");
  p("\\ddddot", "{\\overset{\\raisebox{-0.1ex}{\\normalsize ....}}{#1}}");
  var Hr = {
    ",": "\\dotsc",
    "\\not": "\\dotsb",
    "+": "\\dotsb",
    "=": "\\dotsb",
    "<": "\\dotsb",
    ">": "\\dotsb",
    "-": "\\dotsb",
    "*": "\\dotsb",
    ":": "\\dotsb",
    "\\DOTSB": "\\dotsb",
    "\\coprod": "\\dotsb",
    "\\bigvee": "\\dotsb",
    "\\bigwedge": "\\dotsb",
    "\\biguplus": "\\dotsb",
    "\\bigcap": "\\dotsb",
    "\\bigcup": "\\dotsb",
    "\\prod": "\\dotsb",
    "\\sum": "\\dotsb",
    "\\bigotimes": "\\dotsb",
    "\\bigoplus": "\\dotsb",
    "\\bigodot": "\\dotsb",
    "\\bigsqcup": "\\dotsb",
    "\\And": "\\dotsb",
    "\\longrightarrow": "\\dotsb",
    "\\Longrightarrow": "\\dotsb",
    "\\longleftarrow": "\\dotsb",
    "\\Longleftarrow": "\\dotsb",
    "\\longleftrightarrow": "\\dotsb",
    "\\Longleftrightarrow": "\\dotsb",
    "\\mapsto": "\\dotsb",
    "\\longmapsto": "\\dotsb",
    "\\hookrightarrow": "\\dotsb",
    "\\doteq": "\\dotsb",
    "\\mathbin": "\\dotsb",
    "\\mathrel": "\\dotsb",
    "\\relbar": "\\dotsb",
    "\\Relbar": "\\dotsb",
    "\\xrightarrow": "\\dotsb",
    "\\xleftarrow": "\\dotsb",
    "\\DOTSI": "\\dotsi",
    "\\int": "\\dotsi",
    "\\oint": "\\dotsi",
    "\\iint": "\\dotsi",
    "\\iiint": "\\dotsi",
    "\\iiiint": "\\dotsi",
    "\\idotsint": "\\dotsi",
    "\\DOTSX": "\\dotsx"
  }, mA = /* @__PURE__ */ new Set([
    "bin",
    "rel"
  ]);
  p("\\dots", function(t) {
    var e = "\\dotso", a = t.expandAfterFuture().text;
    return a in Hr ? e = Hr[a] : (a.slice(0, 4) === "\\not" || a in W.math && mA.has(W.math[a].group)) && (e = "\\dotsb"), e;
  });
  var Wt = {
    ")": true,
    "]": true,
    "\\rbrack": true,
    "\\}": true,
    "\\rbrace": true,
    "\\rangle": true,
    "\\rceil": true,
    "\\rfloor": true,
    "\\rgroup": true,
    "\\rmoustache": true,
    "\\right": true,
    "\\bigr": true,
    "\\biggr": true,
    "\\Bigr": true,
    "\\Biggr": true,
    $: true,
    ";": true,
    ".": true,
    ",": true
  };
  p("\\dotso", function(t) {
    var e = t.future().text;
    return e in Wt ? "\\ldots\\," : "\\ldots";
  });
  p("\\dotsc", function(t) {
    var e = t.future().text;
    return e in Wt && e !== "," ? "\\ldots\\," : "\\ldots";
  });
  p("\\cdots", function(t) {
    var e = t.future().text;
    return e in Wt ? "\\@cdots\\," : "\\@cdots";
  });
  p("\\dotsb", "\\cdots");
  p("\\dotsm", "\\cdots");
  p("\\dotsi", "\\!\\cdots");
  p("\\dotsx", "\\ldots\\,");
  p("\\DOTSI", "\\relax");
  p("\\DOTSB", "\\relax");
  p("\\DOTSX", "\\relax");
  p("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax");
  p("\\,", "\\tmspace+{3mu}{.1667em}");
  p("\\thinspace", "\\,");
  p("\\>", "\\mskip{4mu}");
  p("\\:", "\\tmspace+{4mu}{.2222em}");
  p("\\medspace", "\\:");
  p("\\;", "\\tmspace+{5mu}{.2777em}");
  p("\\thickspace", "\\;");
  p("\\!", "\\tmspace-{3mu}{.1667em}");
  p("\\negthinspace", "\\!");
  p("\\negmedspace", "\\tmspace-{4mu}{.2222em}");
  p("\\negthickspace", "\\tmspace-{5mu}{.277em}");
  p("\\enspace", "\\kern.5em ");
  p("\\enskip", "\\hskip.5em\\relax");
  p("\\quad", "\\hskip1em\\relax");
  p("\\qquad", "\\hskip2em\\relax");
  p("\\tag", "\\@ifstar\\tag@literal\\tag@paren");
  p("\\tag@paren", "\\tag@literal{({#1})}");
  p("\\tag@literal", (t) => {
    if (t.macros.get("\\df@tag")) throw new q("Multiple \\tag");
    return "\\gdef\\df@tag{\\text{#1}}";
  });
  p("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}");
  p("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)");
  p("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}");
  p("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1");
  p("\\newline", "\\\\\\relax");
  p("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
  var Os = D(be["Main-Regular"][84][1] - 0.7 * be["Main-Regular"][65][1]);
  p("\\LaTeX", "\\textrm{\\html@mathml{" + ("L\\kern-.36em\\raisebox{" + Os + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{LaTeX}}");
  p("\\KaTeX", "\\textrm{\\html@mathml{" + ("K\\kern-.17em\\raisebox{" + Os + "}{\\scriptstyle A}") + "\\kern-.15em\\TeX}{KaTeX}}");
  p("\\hspace", "\\@ifstar\\@hspacer\\@hspace");
  p("\\@hspace", "\\hskip #1\\relax");
  p("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax");
  p("\\ordinarycolon", ":");
  p("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}");
  p("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}');
  p("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}');
  p("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}');
  p("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}');
  p("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}');
  p("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}');
  p("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}');
  p("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}');
  p("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}');
  p("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}');
  p("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}');
  p("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}');
  p("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}');
  p("\u2237", "\\dblcolon");
  p("\u2239", "\\eqcolon");
  p("\u2254", "\\coloneqq");
  p("\u2255", "\\eqqcolon");
  p("\u2A74", "\\Coloneqq");
  p("\\ratio", "\\vcentcolon");
  p("\\coloncolon", "\\dblcolon");
  p("\\colonequals", "\\coloneqq");
  p("\\coloncolonequals", "\\Coloneqq");
  p("\\equalscolon", "\\eqqcolon");
  p("\\equalscoloncolon", "\\Eqqcolon");
  p("\\colonminus", "\\coloneq");
  p("\\coloncolonminus", "\\Coloneq");
  p("\\minuscolon", "\\eqcolon");
  p("\\minuscoloncolon", "\\Eqcolon");
  p("\\coloncolonapprox", "\\Colonapprox");
  p("\\coloncolonsim", "\\Colonsim");
  p("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
  p("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}");
  p("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}");
  p("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}");
  p("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220C}}");
  p("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}");
  p("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}");
  p("\\injlim", "\\DOTSB\\operatorname*{inj\\,lim}");
  p("\\projlim", "\\DOTSB\\operatorname*{proj\\,lim}");
  p("\\varlimsup", "\\DOTSB\\operatorname*{\\overline{lim}}");
  p("\\varliminf", "\\DOTSB\\operatorname*{\\underline{lim}}");
  p("\\varinjlim", "\\DOTSB\\operatorname*{\\underrightarrow{lim}}");
  p("\\varprojlim", "\\DOTSB\\operatorname*{\\underleftarrow{lim}}");
  p("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}");
  p("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}");
  p("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}");
  p("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}");
  p("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}");
  p("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}");
  p("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}");
  p("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}");
  p("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}");
  p("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}");
  p("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228A}");
  p("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2ACB}");
  p("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228B}");
  p("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2ACC}");
  p("\\imath", "\\html@mathml{\\@imath}{\u0131}");
  p("\\jmath", "\\html@mathml{\\@jmath}{\u0237}");
  p("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27E6}}");
  p("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27E7}}");
  p("\u27E6", "\\llbracket");
  p("\u27E7", "\\rrbracket");
  p("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}");
  p("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}");
  p("\u2983", "\\lBrace");
  p("\u2984", "\\rBrace");
  p("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29B5}}");
  p("\u29B5", "\\minuso");
  p("\\darr", "\\downarrow");
  p("\\dArr", "\\Downarrow");
  p("\\Darr", "\\Downarrow");
  p("\\lang", "\\langle");
  p("\\rang", "\\rangle");
  p("\\uarr", "\\uparrow");
  p("\\uArr", "\\Uparrow");
  p("\\Uarr", "\\Uparrow");
  p("\\N", "\\mathbb{N}");
  p("\\R", "\\mathbb{R}");
  p("\\Z", "\\mathbb{Z}");
  p("\\alef", "\\aleph");
  p("\\alefsym", "\\aleph");
  p("\\Alpha", "\\mathrm{A}");
  p("\\Beta", "\\mathrm{B}");
  p("\\bull", "\\bullet");
  p("\\Chi", "\\mathrm{X}");
  p("\\clubs", "\\clubsuit");
  p("\\cnums", "\\mathbb{C}");
  p("\\Complex", "\\mathbb{C}");
  p("\\Dagger", "\\ddagger");
  p("\\diamonds", "\\diamondsuit");
  p("\\empty", "\\emptyset");
  p("\\Epsilon", "\\mathrm{E}");
  p("\\Eta", "\\mathrm{H}");
  p("\\exist", "\\exists");
  p("\\harr", "\\leftrightarrow");
  p("\\hArr", "\\Leftrightarrow");
  p("\\Harr", "\\Leftrightarrow");
  p("\\hearts", "\\heartsuit");
  p("\\image", "\\Im");
  p("\\infin", "\\infty");
  p("\\Iota", "\\mathrm{I}");
  p("\\isin", "\\in");
  p("\\Kappa", "\\mathrm{K}");
  p("\\larr", "\\leftarrow");
  p("\\lArr", "\\Leftarrow");
  p("\\Larr", "\\Leftarrow");
  p("\\lrarr", "\\leftrightarrow");
  p("\\lrArr", "\\Leftrightarrow");
  p("\\Lrarr", "\\Leftrightarrow");
  p("\\Mu", "\\mathrm{M}");
  p("\\natnums", "\\mathbb{N}");
  p("\\Nu", "\\mathrm{N}");
  p("\\Omicron", "\\mathrm{O}");
  p("\\plusmn", "\\pm");
  p("\\rarr", "\\rightarrow");
  p("\\rArr", "\\Rightarrow");
  p("\\Rarr", "\\Rightarrow");
  p("\\real", "\\Re");
  p("\\reals", "\\mathbb{R}");
  p("\\Reals", "\\mathbb{R}");
  p("\\Rho", "\\mathrm{P}");
  p("\\sdot", "\\cdot");
  p("\\sect", "\\S");
  p("\\spades", "\\spadesuit");
  p("\\sub", "\\subset");
  p("\\sube", "\\subseteq");
  p("\\supe", "\\supseteq");
  p("\\Tau", "\\mathrm{T}");
  p("\\thetasym", "\\vartheta");
  p("\\weierp", "\\wp");
  p("\\Zeta", "\\mathrm{Z}");
  p("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}");
  p("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}");
  p("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits");
  p("\\bra", "\\mathinner{\\langle{#1}|}");
  p("\\ket", "\\mathinner{|{#1}\\rangle}");
  p("\\braket", "\\mathinner{\\langle{#1}\\rangle}");
  p("\\Bra", "\\left\\langle#1\\right|");
  p("\\Ket", "\\left|#1\\right\\rangle");
  var Hs = (t) => (e) => {
    var a = e.consumeArg().tokens, r = e.consumeArg().tokens, s = e.consumeArg().tokens, n = e.consumeArg().tokens, l = e.macros.get("|"), u = e.macros.get("\\|");
    e.macros.beginGroup();
    var d = (_) => (h) => {
      t && (h.macros.set("|", l), s.length && h.macros.set("\\|", u));
      var b = _;
      if (!_ && s.length) {
        var S = h.future();
        S.text === "|" && (h.popToken(), b = true);
      }
      return {
        tokens: b ? s : r,
        numArgs: 0
      };
    };
    e.macros.set("|", d(false)), s.length && e.macros.set("\\|", d(true));
    var m = e.consumeArg().tokens, g = e.expandTokens([
      ...n,
      ...m,
      ...a
    ]);
    return e.macros.endGroup(), {
      tokens: g.reverse(),
      numArgs: 0
    };
  };
  p("\\bra@ket", Hs(false));
  p("\\bra@set", Hs(true));
  p("\\Braket", "\\bra@ket{\\left\\langle}{\\,\\middle\\vert\\,}{\\,\\middle\\vert\\,}{\\right\\rangle}");
  p("\\Set", "\\bra@set{\\left\\{\\:}{\\;\\middle\\vert\\;}{\\;\\middle\\Vert\\;}{\\:\\right\\}}");
  p("\\set", "\\bra@set{\\{\\,}{\\mid}{}{\\,\\}}");
  p("\\angln", "{\\angl n}");
  p("\\blue", "\\textcolor{##6495ed}{#1}");
  p("\\orange", "\\textcolor{##ffa500}{#1}");
  p("\\pink", "\\textcolor{##ff00af}{#1}");
  p("\\red", "\\textcolor{##df0030}{#1}");
  p("\\green", "\\textcolor{##28ae7b}{#1}");
  p("\\gray", "\\textcolor{gray}{#1}");
  p("\\purple", "\\textcolor{##9d38bd}{#1}");
  p("\\blueA", "\\textcolor{##ccfaff}{#1}");
  p("\\blueB", "\\textcolor{##80f6ff}{#1}");
  p("\\blueC", "\\textcolor{##63d9ea}{#1}");
  p("\\blueD", "\\textcolor{##11accd}{#1}");
  p("\\blueE", "\\textcolor{##0c7f99}{#1}");
  p("\\tealA", "\\textcolor{##94fff5}{#1}");
  p("\\tealB", "\\textcolor{##26edd5}{#1}");
  p("\\tealC", "\\textcolor{##01d1c1}{#1}");
  p("\\tealD", "\\textcolor{##01a995}{#1}");
  p("\\tealE", "\\textcolor{##208170}{#1}");
  p("\\greenA", "\\textcolor{##b6ffb0}{#1}");
  p("\\greenB", "\\textcolor{##8af281}{#1}");
  p("\\greenC", "\\textcolor{##74cf70}{#1}");
  p("\\greenD", "\\textcolor{##1fab54}{#1}");
  p("\\greenE", "\\textcolor{##0d923f}{#1}");
  p("\\goldA", "\\textcolor{##ffd0a9}{#1}");
  p("\\goldB", "\\textcolor{##ffbb71}{#1}");
  p("\\goldC", "\\textcolor{##ff9c39}{#1}");
  p("\\goldD", "\\textcolor{##e07d10}{#1}");
  p("\\goldE", "\\textcolor{##a75a05}{#1}");
  p("\\redA", "\\textcolor{##fca9a9}{#1}");
  p("\\redB", "\\textcolor{##ff8482}{#1}");
  p("\\redC", "\\textcolor{##f9685d}{#1}");
  p("\\redD", "\\textcolor{##e84d39}{#1}");
  p("\\redE", "\\textcolor{##bc2612}{#1}");
  p("\\maroonA", "\\textcolor{##ffbde0}{#1}");
  p("\\maroonB", "\\textcolor{##ff92c6}{#1}");
  p("\\maroonC", "\\textcolor{##ed5fa6}{#1}");
  p("\\maroonD", "\\textcolor{##ca337c}{#1}");
  p("\\maroonE", "\\textcolor{##9e034e}{#1}");
  p("\\purpleA", "\\textcolor{##ddd7ff}{#1}");
  p("\\purpleB", "\\textcolor{##c6b9fc}{#1}");
  p("\\purpleC", "\\textcolor{##aa87ff}{#1}");
  p("\\purpleD", "\\textcolor{##7854ab}{#1}");
  p("\\purpleE", "\\textcolor{##543b78}{#1}");
  p("\\mintA", "\\textcolor{##f5f9e8}{#1}");
  p("\\mintB", "\\textcolor{##edf2df}{#1}");
  p("\\mintC", "\\textcolor{##e0e5cc}{#1}");
  p("\\grayA", "\\textcolor{##f6f7f7}{#1}");
  p("\\grayB", "\\textcolor{##f0f1f2}{#1}");
  p("\\grayC", "\\textcolor{##e3e5e6}{#1}");
  p("\\grayD", "\\textcolor{##d6d8da}{#1}");
  p("\\grayE", "\\textcolor{##babec2}{#1}");
  p("\\grayF", "\\textcolor{##888d93}{#1}");
  p("\\grayG", "\\textcolor{##626569}{#1}");
  p("\\grayH", "\\textcolor{##3b3e40}{#1}");
  p("\\grayI", "\\textcolor{##21242c}{#1}");
  p("\\kaBlue", "\\textcolor{##314453}{#1}");
  p("\\kaGreen", "\\textcolor{##71B307}{#1}");
  var Ps = {
    "^": true,
    _: true,
    "\\limits": true,
    "\\nolimits": true
  };
  class yA {
    constructor(e, a, r) {
      this.settings = a, this.expansionCount = 0, this.feed(e), this.macros = new dA(pA, a.macros), this.mode = r, this.stack = [];
    }
    feed(e) {
      this.lexer = new Fr(e, this.settings);
    }
    switchMode(e) {
      this.mode = e;
    }
    beginGroup() {
      this.macros.beginGroup();
    }
    endGroup() {
      this.macros.endGroup();
    }
    endGroups() {
      this.macros.endGroups();
    }
    future() {
      return this.stack.length === 0 && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1];
    }
    popToken() {
      return this.future(), this.stack.pop();
    }
    pushToken(e) {
      this.stack.push(e);
    }
    pushTokens(e) {
      this.stack.push(...e);
    }
    scanArgument(e) {
      var a, r, s;
      if (e) {
        if (this.consumeSpaces(), this.future().text !== "[") return null;
        a = this.popToken(), { tokens: s, end: r } = this.consumeArg([
          "]"
        ]);
      } else ({ tokens: s, start: a, end: r } = this.consumeArg());
      return this.pushToken(new he("EOF", r.loc)), this.pushTokens(s), new he("", ue.range(a, r));
    }
    consumeSpaces() {
      for (; ; ) {
        var e = this.future();
        if (e.text === " ") this.stack.pop();
        else break;
      }
    }
    consumeArg(e) {
      var a = [], r = e && e.length > 0;
      r || this.consumeSpaces();
      var s = this.future(), n, l = 0, u = 0;
      do {
        if (n = this.popToken(), a.push(n), n.text === "{") ++l;
        else if (n.text === "}") {
          if (--l, l === -1) throw new q("Extra }", n);
        } else if (n.text === "EOF") throw new q("Unexpected end of input in a macro argument, expected '" + (e && r ? e[u] : "}") + "'", n);
        if (e && r) if ((l === 0 || l === 1 && e[u] === "{") && n.text === e[u]) {
          if (++u, u === e.length) {
            a.splice(-u, u);
            break;
          }
        } else u = 0;
      } while (l !== 0 || r);
      return s.text === "{" && a[a.length - 1].text === "}" && (a.pop(), a.shift()), a.reverse(), {
        tokens: a,
        start: s,
        end: n
      };
    }
    consumeArgs(e, a) {
      if (a) {
        if (a.length !== e + 1) throw new q("The length of delimiters doesn't match the number of args!");
        for (var r = a[0], s = 0; s < r.length; s++) {
          var n = this.popToken();
          if (r[s] !== n.text) throw new q("Use of the macro doesn't match its definition", n);
        }
      }
      for (var l = [], u = 0; u < e; u++) l.push(this.consumeArg(a && a[u + 1]).tokens);
      return l;
    }
    countExpansion(e) {
      if (this.expansionCount += e, this.expansionCount > this.settings.maxExpand) throw new q("Too many expansions: infinite loop or need to increase maxExpand setting");
    }
    expandOnce(e) {
      var a = this.popToken(), r = a.text, s = a.noexpand ? null : this._getExpansion(r);
      if (s == null || e && s.unexpandable) {
        if (e && s == null && r[0] === "\\" && !this.isDefined(r)) throw new q("Undefined control sequence: " + r);
        return this.pushToken(a), false;
      }
      this.countExpansion(1);
      var n = s.tokens, l = this.consumeArgs(s.numArgs, s.delimiters);
      if (s.numArgs) {
        n = n.slice();
        for (var u = n.length - 1; u >= 0; --u) {
          var d = n[u];
          if (d.text === "#") {
            if (u === 0) throw new q("Incomplete placeholder at end of macro body", d);
            if (d = n[--u], d.text === "#") n.splice(u + 1, 1);
            else if (/^[1-9]$/.test(d.text)) n.splice(u, 2, ...l[+d.text - 1]);
            else throw new q("Not a valid argument number", d);
          }
        }
      }
      return this.pushTokens(n), n.length;
    }
    expandAfterFuture() {
      return this.expandOnce(), this.future();
    }
    expandNextToken() {
      for (; ; ) if (this.expandOnce() === false) {
        var e = this.stack.pop();
        return e.treatAsRelax && (e.text = "\\relax"), e;
      }
    }
    expandMacro(e) {
      return this.macros.has(e) ? this.expandTokens([
        new he(e)
      ]) : void 0;
    }
    expandTokens(e) {
      var a = [], r = this.stack.length;
      for (this.pushTokens(e); this.stack.length > r; ) if (this.expandOnce(true) === false) {
        var s = this.stack.pop();
        s.treatAsRelax && (s.noexpand = false, s.treatAsRelax = false), a.push(s);
      }
      return this.countExpansion(a.length), a;
    }
    expandMacroAsText(e) {
      var a = this.expandMacro(e);
      return a && a.map((r) => r.text).join("");
    }
    _getExpansion(e) {
      var a = this.macros.get(e);
      if (a == null) return a;
      if (e.length === 1) {
        var r = this.lexer.catcodes[e];
        if (r != null && r !== 13) return;
      }
      var s = typeof a == "function" ? a(this) : a;
      if (typeof s == "string") {
        var n = 0;
        if (s.includes("#")) for (var l = s.replace(/##/g, ""); l.includes("#" + (n + 1)); ) ++n;
        for (var u = new Fr(s, this.settings), d = [], m = u.lex(); m.text !== "EOF"; ) d.push(m), m = u.lex();
        d.reverse();
        var g = {
          tokens: d,
          numArgs: n
        };
        return g;
      }
      return s;
    }
    isDefined(e) {
      return this.macros.has(e) || Re.hasOwnProperty(e) || W.math.hasOwnProperty(e) || W.text.hasOwnProperty(e) || Ps.hasOwnProperty(e);
    }
    isExpandable(e) {
      var a = this.macros.get(e);
      return a != null ? typeof a == "string" || typeof a == "function" || !a.unexpandable : Re.hasOwnProperty(e) && !Re[e].primitive;
    }
  }
  var Pr = /^[₊₋₌₍₎₀₁₂₃₄₅₆₇₈₉ₐₑₕᵢⱼₖₗₘₙₒₚᵣₛₜᵤᵥₓᵦᵧᵨᵩᵪ]/, Da = Object.freeze({
    "\u208A": "+",
    "\u208B": "-",
    "\u208C": "=",
    "\u208D": "(",
    "\u208E": ")",
    "\u2080": "0",
    "\u2081": "1",
    "\u2082": "2",
    "\u2083": "3",
    "\u2084": "4",
    "\u2085": "5",
    "\u2086": "6",
    "\u2087": "7",
    "\u2088": "8",
    "\u2089": "9",
    "\u2090": "a",
    "\u2091": "e",
    "\u2095": "h",
    "\u1D62": "i",
    "\u2C7C": "j",
    "\u2096": "k",
    "\u2097": "l",
    "\u2098": "m",
    "\u2099": "n",
    "\u2092": "o",
    "\u209A": "p",
    "\u1D63": "r",
    "\u209B": "s",
    "\u209C": "t",
    "\u1D64": "u",
    "\u1D65": "v",
    "\u2093": "x",
    "\u1D66": "\u03B2",
    "\u1D67": "\u03B3",
    "\u1D68": "\u03C1",
    "\u1D69": "\u03D5",
    "\u1D6A": "\u03C7",
    "\u207A": "+",
    "\u207B": "-",
    "\u207C": "=",
    "\u207D": "(",
    "\u207E": ")",
    "\u2070": "0",
    "\xB9": "1",
    "\xB2": "2",
    "\xB3": "3",
    "\u2074": "4",
    "\u2075": "5",
    "\u2076": "6",
    "\u2077": "7",
    "\u2078": "8",
    "\u2079": "9",
    "\u1D2C": "A",
    "\u1D2E": "B",
    "\u1D30": "D",
    "\u1D31": "E",
    "\u1D33": "G",
    "\u1D34": "H",
    "\u1D35": "I",
    "\u1D36": "J",
    "\u1D37": "K",
    "\u1D38": "L",
    "\u1D39": "M",
    "\u1D3A": "N",
    "\u1D3C": "O",
    "\u1D3E": "P",
    "\u1D3F": "R",
    "\u1D40": "T",
    "\u1D41": "U",
    "\u2C7D": "V",
    "\u1D42": "W",
    "\u1D43": "a",
    "\u1D47": "b",
    "\u1D9C": "c",
    "\u1D48": "d",
    "\u1D49": "e",
    "\u1DA0": "f",
    "\u1D4D": "g",
    \u02B0: "h",
    "\u2071": "i",
    \u02B2: "j",
    "\u1D4F": "k",
    \u02E1: "l",
    "\u1D50": "m",
    \u207F: "n",
    "\u1D52": "o",
    "\u1D56": "p",
    \u02B3: "r",
    \u02E2: "s",
    "\u1D57": "t",
    "\u1D58": "u",
    "\u1D5B": "v",
    \u02B7: "w",
    \u02E3: "x",
    \u02B8: "y",
    "\u1DBB": "z",
    "\u1D5D": "\u03B2",
    "\u1D5E": "\u03B3",
    "\u1D5F": "\u03B4",
    "\u1D60": "\u03D5",
    "\u1D61": "\u03C7",
    "\u1DBF": "\u03B8"
  }), gt = {
    "\u0301": {
      text: "\\'",
      math: "\\acute"
    },
    "\u0300": {
      text: "\\`",
      math: "\\grave"
    },
    "\u0308": {
      text: '\\"',
      math: "\\ddot"
    },
    "\u0303": {
      text: "\\~",
      math: "\\tilde"
    },
    "\u0304": {
      text: "\\=",
      math: "\\bar"
    },
    "\u0306": {
      text: "\\u",
      math: "\\breve"
    },
    "\u030C": {
      text: "\\v",
      math: "\\check"
    },
    "\u0302": {
      text: "\\^",
      math: "\\hat"
    },
    "\u0307": {
      text: "\\.",
      math: "\\dot"
    },
    "\u030A": {
      text: "\\r",
      math: "\\mathring"
    },
    "\u030B": {
      text: "\\H"
    },
    "\u0327": {
      text: "\\c"
    }
  }, Lr = {
    \u00E1: "a\u0301",
    \u00E0: "a\u0300",
    \u00E4: "a\u0308",
    \u01DF: "a\u0308\u0304",
    \u00E3: "a\u0303",
    \u0101: "a\u0304",
    \u0103: "a\u0306",
    \u1EAF: "a\u0306\u0301",
    \u1EB1: "a\u0306\u0300",
    \u1EB5: "a\u0306\u0303",
    \u01CE: "a\u030C",
    \u00E2: "a\u0302",
    \u1EA5: "a\u0302\u0301",
    \u1EA7: "a\u0302\u0300",
    \u1EAB: "a\u0302\u0303",
    \u0227: "a\u0307",
    \u01E1: "a\u0307\u0304",
    \u00E5: "a\u030A",
    \u01FB: "a\u030A\u0301",
    \u1E03: "b\u0307",
    \u0107: "c\u0301",
    \u1E09: "c\u0327\u0301",
    \u010D: "c\u030C",
    \u0109: "c\u0302",
    \u010B: "c\u0307",
    \u00E7: "c\u0327",
    \u010F: "d\u030C",
    \u1E0B: "d\u0307",
    \u1E11: "d\u0327",
    \u00E9: "e\u0301",
    \u00E8: "e\u0300",
    \u00EB: "e\u0308",
    \u1EBD: "e\u0303",
    \u0113: "e\u0304",
    \u1E17: "e\u0304\u0301",
    \u1E15: "e\u0304\u0300",
    \u0115: "e\u0306",
    \u1E1D: "e\u0327\u0306",
    \u011B: "e\u030C",
    \u00EA: "e\u0302",
    \u1EBF: "e\u0302\u0301",
    \u1EC1: "e\u0302\u0300",
    \u1EC5: "e\u0302\u0303",
    \u0117: "e\u0307",
    \u0229: "e\u0327",
    \u1E1F: "f\u0307",
    \u01F5: "g\u0301",
    \u1E21: "g\u0304",
    \u011F: "g\u0306",
    \u01E7: "g\u030C",
    \u011D: "g\u0302",
    \u0121: "g\u0307",
    \u0123: "g\u0327",
    \u1E27: "h\u0308",
    \u021F: "h\u030C",
    \u0125: "h\u0302",
    \u1E23: "h\u0307",
    \u1E29: "h\u0327",
    \u00ED: "i\u0301",
    \u00EC: "i\u0300",
    \u00EF: "i\u0308",
    \u1E2F: "i\u0308\u0301",
    \u0129: "i\u0303",
    \u012B: "i\u0304",
    \u012D: "i\u0306",
    \u01D0: "i\u030C",
    \u00EE: "i\u0302",
    \u01F0: "j\u030C",
    \u0135: "j\u0302",
    \u1E31: "k\u0301",
    \u01E9: "k\u030C",
    \u0137: "k\u0327",
    \u013A: "l\u0301",
    \u013E: "l\u030C",
    \u013C: "l\u0327",
    \u1E3F: "m\u0301",
    \u1E41: "m\u0307",
    \u0144: "n\u0301",
    \u01F9: "n\u0300",
    \u00F1: "n\u0303",
    \u0148: "n\u030C",
    \u1E45: "n\u0307",
    \u0146: "n\u0327",
    \u00F3: "o\u0301",
    \u00F2: "o\u0300",
    \u00F6: "o\u0308",
    \u022B: "o\u0308\u0304",
    \u00F5: "o\u0303",
    \u1E4D: "o\u0303\u0301",
    \u1E4F: "o\u0303\u0308",
    \u022D: "o\u0303\u0304",
    \u014D: "o\u0304",
    \u1E53: "o\u0304\u0301",
    \u1E51: "o\u0304\u0300",
    \u014F: "o\u0306",
    \u01D2: "o\u030C",
    \u00F4: "o\u0302",
    \u1ED1: "o\u0302\u0301",
    \u1ED3: "o\u0302\u0300",
    \u1ED7: "o\u0302\u0303",
    \u022F: "o\u0307",
    \u0231: "o\u0307\u0304",
    \u0151: "o\u030B",
    \u1E55: "p\u0301",
    \u1E57: "p\u0307",
    \u0155: "r\u0301",
    \u0159: "r\u030C",
    \u1E59: "r\u0307",
    \u0157: "r\u0327",
    \u015B: "s\u0301",
    \u1E65: "s\u0301\u0307",
    \u0161: "s\u030C",
    \u1E67: "s\u030C\u0307",
    \u015D: "s\u0302",
    \u1E61: "s\u0307",
    \u015F: "s\u0327",
    \u1E97: "t\u0308",
    \u0165: "t\u030C",
    \u1E6B: "t\u0307",
    \u0163: "t\u0327",
    \u00FA: "u\u0301",
    \u00F9: "u\u0300",
    \u00FC: "u\u0308",
    \u01D8: "u\u0308\u0301",
    \u01DC: "u\u0308\u0300",
    \u01D6: "u\u0308\u0304",
    \u01DA: "u\u0308\u030C",
    \u0169: "u\u0303",
    \u1E79: "u\u0303\u0301",
    \u016B: "u\u0304",
    \u1E7B: "u\u0304\u0308",
    \u016D: "u\u0306",
    \u01D4: "u\u030C",
    \u00FB: "u\u0302",
    \u016F: "u\u030A",
    \u0171: "u\u030B",
    \u1E7D: "v\u0303",
    \u1E83: "w\u0301",
    \u1E81: "w\u0300",
    \u1E85: "w\u0308",
    \u0175: "w\u0302",
    \u1E87: "w\u0307",
    \u1E98: "w\u030A",
    \u1E8D: "x\u0308",
    \u1E8B: "x\u0307",
    \u00FD: "y\u0301",
    \u1EF3: "y\u0300",
    \u00FF: "y\u0308",
    \u1EF9: "y\u0303",
    \u0233: "y\u0304",
    \u0177: "y\u0302",
    \u1E8F: "y\u0307",
    \u1E99: "y\u030A",
    \u017A: "z\u0301",
    \u017E: "z\u030C",
    \u1E91: "z\u0302",
    \u017C: "z\u0307",
    \u00C1: "A\u0301",
    \u00C0: "A\u0300",
    \u00C4: "A\u0308",
    \u01DE: "A\u0308\u0304",
    \u00C3: "A\u0303",
    \u0100: "A\u0304",
    \u0102: "A\u0306",
    \u1EAE: "A\u0306\u0301",
    \u1EB0: "A\u0306\u0300",
    \u1EB4: "A\u0306\u0303",
    \u01CD: "A\u030C",
    \u00C2: "A\u0302",
    \u1EA4: "A\u0302\u0301",
    \u1EA6: "A\u0302\u0300",
    \u1EAA: "A\u0302\u0303",
    \u0226: "A\u0307",
    \u01E0: "A\u0307\u0304",
    \u00C5: "A\u030A",
    \u01FA: "A\u030A\u0301",
    \u1E02: "B\u0307",
    \u0106: "C\u0301",
    \u1E08: "C\u0327\u0301",
    \u010C: "C\u030C",
    \u0108: "C\u0302",
    \u010A: "C\u0307",
    \u00C7: "C\u0327",
    \u010E: "D\u030C",
    \u1E0A: "D\u0307",
    \u1E10: "D\u0327",
    \u00C9: "E\u0301",
    \u00C8: "E\u0300",
    \u00CB: "E\u0308",
    \u1EBC: "E\u0303",
    \u0112: "E\u0304",
    \u1E16: "E\u0304\u0301",
    \u1E14: "E\u0304\u0300",
    \u0114: "E\u0306",
    \u1E1C: "E\u0327\u0306",
    \u011A: "E\u030C",
    \u00CA: "E\u0302",
    \u1EBE: "E\u0302\u0301",
    \u1EC0: "E\u0302\u0300",
    \u1EC4: "E\u0302\u0303",
    \u0116: "E\u0307",
    \u0228: "E\u0327",
    \u1E1E: "F\u0307",
    \u01F4: "G\u0301",
    \u1E20: "G\u0304",
    \u011E: "G\u0306",
    \u01E6: "G\u030C",
    \u011C: "G\u0302",
    \u0120: "G\u0307",
    \u0122: "G\u0327",
    \u1E26: "H\u0308",
    \u021E: "H\u030C",
    \u0124: "H\u0302",
    \u1E22: "H\u0307",
    \u1E28: "H\u0327",
    \u00CD: "I\u0301",
    \u00CC: "I\u0300",
    \u00CF: "I\u0308",
    \u1E2E: "I\u0308\u0301",
    \u0128: "I\u0303",
    \u012A: "I\u0304",
    \u012C: "I\u0306",
    \u01CF: "I\u030C",
    \u00CE: "I\u0302",
    \u0130: "I\u0307",
    \u0134: "J\u0302",
    \u1E30: "K\u0301",
    \u01E8: "K\u030C",
    \u0136: "K\u0327",
    \u0139: "L\u0301",
    \u013D: "L\u030C",
    \u013B: "L\u0327",
    \u1E3E: "M\u0301",
    \u1E40: "M\u0307",
    \u0143: "N\u0301",
    \u01F8: "N\u0300",
    \u00D1: "N\u0303",
    \u0147: "N\u030C",
    \u1E44: "N\u0307",
    \u0145: "N\u0327",
    \u00D3: "O\u0301",
    \u00D2: "O\u0300",
    \u00D6: "O\u0308",
    \u022A: "O\u0308\u0304",
    \u00D5: "O\u0303",
    \u1E4C: "O\u0303\u0301",
    \u1E4E: "O\u0303\u0308",
    \u022C: "O\u0303\u0304",
    \u014C: "O\u0304",
    \u1E52: "O\u0304\u0301",
    \u1E50: "O\u0304\u0300",
    \u014E: "O\u0306",
    \u01D1: "O\u030C",
    \u00D4: "O\u0302",
    \u1ED0: "O\u0302\u0301",
    \u1ED2: "O\u0302\u0300",
    \u1ED6: "O\u0302\u0303",
    \u022E: "O\u0307",
    \u0230: "O\u0307\u0304",
    \u0150: "O\u030B",
    \u1E54: "P\u0301",
    \u1E56: "P\u0307",
    \u0154: "R\u0301",
    \u0158: "R\u030C",
    \u1E58: "R\u0307",
    \u0156: "R\u0327",
    \u015A: "S\u0301",
    \u1E64: "S\u0301\u0307",
    \u0160: "S\u030C",
    \u1E66: "S\u030C\u0307",
    \u015C: "S\u0302",
    \u1E60: "S\u0307",
    \u015E: "S\u0327",
    \u0164: "T\u030C",
    \u1E6A: "T\u0307",
    \u0162: "T\u0327",
    \u00DA: "U\u0301",
    \u00D9: "U\u0300",
    \u00DC: "U\u0308",
    \u01D7: "U\u0308\u0301",
    \u01DB: "U\u0308\u0300",
    \u01D5: "U\u0308\u0304",
    \u01D9: "U\u0308\u030C",
    \u0168: "U\u0303",
    \u1E78: "U\u0303\u0301",
    \u016A: "U\u0304",
    \u1E7A: "U\u0304\u0308",
    \u016C: "U\u0306",
    \u01D3: "U\u030C",
    \u00DB: "U\u0302",
    \u016E: "U\u030A",
    \u0170: "U\u030B",
    \u1E7C: "V\u0303",
    \u1E82: "W\u0301",
    \u1E80: "W\u0300",
    \u1E84: "W\u0308",
    \u0174: "W\u0302",
    \u1E86: "W\u0307",
    \u1E8C: "X\u0308",
    \u1E8A: "X\u0307",
    \u00DD: "Y\u0301",
    \u1EF2: "Y\u0300",
    \u0178: "Y\u0308",
    \u1EF8: "Y\u0303",
    \u0232: "Y\u0304",
    \u0176: "Y\u0302",
    \u1E8E: "Y\u0307",
    \u0179: "Z\u0301",
    \u017D: "Z\u030C",
    \u1E90: "Z\u0302",
    \u017B: "Z\u0307",
    \u03AC: "\u03B1\u0301",
    \u1F70: "\u03B1\u0300",
    \u1FB1: "\u03B1\u0304",
    \u1FB0: "\u03B1\u0306",
    \u03AD: "\u03B5\u0301",
    \u1F72: "\u03B5\u0300",
    \u03AE: "\u03B7\u0301",
    \u1F74: "\u03B7\u0300",
    \u03AF: "\u03B9\u0301",
    \u1F76: "\u03B9\u0300",
    \u03CA: "\u03B9\u0308",
    \u0390: "\u03B9\u0308\u0301",
    \u1FD2: "\u03B9\u0308\u0300",
    \u1FD1: "\u03B9\u0304",
    \u1FD0: "\u03B9\u0306",
    \u03CC: "\u03BF\u0301",
    \u1F78: "\u03BF\u0300",
    \u03CD: "\u03C5\u0301",
    \u1F7A: "\u03C5\u0300",
    \u03CB: "\u03C5\u0308",
    \u03B0: "\u03C5\u0308\u0301",
    \u1FE2: "\u03C5\u0308\u0300",
    \u1FE1: "\u03C5\u0304",
    \u1FE0: "\u03C5\u0306",
    \u03CE: "\u03C9\u0301",
    \u1F7C: "\u03C9\u0300",
    \u038E: "\u03A5\u0301",
    \u1FEA: "\u03A5\u0300",
    \u03AB: "\u03A5\u0308",
    \u1FE9: "\u03A5\u0304",
    \u1FE8: "\u03A5\u0306",
    \u038F: "\u03A9\u0301",
    \u1FFA: "\u03A9\u0300"
  };
  class Za {
    constructor(e, a) {
      this.mode = "math", this.gullet = new yA(e, a, this.mode), this.settings = a, this.leftrightDepth = 0, this.nextToken = null;
    }
    expect(e, a) {
      if (a === void 0 && (a = true), this.fetch().text !== e) throw new q("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
      a && this.consume();
    }
    consume() {
      this.nextToken = null;
    }
    fetch() {
      return this.nextToken == null && (this.nextToken = this.gullet.expandNextToken()), this.nextToken;
    }
    switchMode(e) {
      this.mode = e, this.gullet.switchMode(e);
    }
    parse() {
      this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
      try {
        var e = this.parseExpression(false);
        return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e;
      } finally {
        this.gullet.endGroups();
      }
    }
    subparse(e) {
      var a = this.nextToken;
      this.consume(), this.gullet.pushToken(new he("}")), this.gullet.pushTokens(e);
      var r = this.parseExpression(false);
      return this.expect("}"), this.nextToken = a, r;
    }
    parseExpression(e, a) {
      for (var r = []; ; ) {
        this.mode === "math" && this.consumeSpaces();
        var s = this.fetch();
        if (Za.endOfExpression.has(s.text) || a && s.text === a || e && Re[s.text] && Re[s.text].infix) break;
        var n = this.parseAtom(a);
        if (n) {
          if (n.type === "internal") continue;
        } else break;
        r.push(n);
      }
      return this.mode === "text" && this.formLigatures(r), this.handleInfixNodes(r);
    }
    handleInfixNodes(e) {
      for (var a = -1, r, s = 0; s < e.length; s++) {
        var n = e[s];
        if (n.type === "infix") {
          if (a !== -1) throw new q("only one infix operator per group", n.token);
          a = s, r = n.replaceWith;
        }
      }
      if (a !== -1 && r) {
        var l, u, d = e.slice(0, a), m = e.slice(a + 1);
        d.length === 1 && d[0].type === "ordgroup" ? l = d[0] : l = {
          type: "ordgroup",
          mode: this.mode,
          body: d
        }, m.length === 1 && m[0].type === "ordgroup" ? u = m[0] : u = {
          type: "ordgroup",
          mode: this.mode,
          body: m
        };
        var g;
        return r === "\\\\abovefrac" ? g = this.callFunction(r, [
          l,
          e[a],
          u
        ], []) : g = this.callFunction(r, [
          l,
          u
        ], []), [
          g
        ];
      } else return e;
    }
    handleSupSubscript(e) {
      var a = this.fetch(), r = a.text;
      this.consume(), this.consumeSpaces();
      var s;
      do {
        var n;
        s = this.parseGroup(e);
      } while (((n = s) == null ? void 0 : n.type) === "internal");
      if (!s) throw new q("Expected group after '" + r + "'", a);
      return s;
    }
    formatUnsupportedCmd(e) {
      for (var a = [], r = 0; r < e.length; r++) a.push({
        type: "textord",
        mode: "text",
        text: e[r]
      });
      var s = {
        type: "text",
        mode: this.mode,
        body: a
      }, n = {
        type: "color",
        mode: this.mode,
        color: this.settings.errorColor,
        body: [
          s
        ]
      };
      return n;
    }
    parseAtom(e) {
      var a = this.parseGroup("atom", e);
      if ((a == null ? void 0 : a.type) === "internal" || this.mode === "text") return a;
      for (var r, s; ; ) {
        this.consumeSpaces();
        var n = this.fetch();
        if (n.text === "\\limits" || n.text === "\\nolimits") {
          if (a && a.type === "op") {
            var l = n.text === "\\limits";
            a.limits = l, a.alwaysHandleSupSub = true;
          } else if (a && a.type === "operatorname") a.alwaysHandleSupSub && (a.limits = n.text === "\\limits");
          else throw new q("Limit controls must follow a math operator", n);
          this.consume();
        } else if (n.text === "^") {
          if (r) throw new q("Double superscript", n);
          r = this.handleSupSubscript("superscript");
        } else if (n.text === "_") {
          if (s) throw new q("Double subscript", n);
          s = this.handleSupSubscript("subscript");
        } else if (n.text === "'") {
          if (r) throw new q("Double superscript", n);
          var u = {
            type: "textord",
            mode: this.mode,
            text: "\\prime"
          }, d = [
            u
          ];
          for (this.consume(); this.fetch().text === "'"; ) d.push(u), this.consume();
          this.fetch().text === "^" && d.push(this.handleSupSubscript("superscript")), r = {
            type: "ordgroup",
            mode: this.mode,
            body: d
          };
        } else if (Da[n.text]) {
          var m = Pr.test(n.text), g = [];
          for (g.push(new he(Da[n.text])), this.consume(); ; ) {
            var _ = this.fetch().text;
            if (!Da[_] || Pr.test(_) !== m) break;
            g.unshift(new he(Da[_])), this.consume();
          }
          var h = this.subparse(g);
          m ? s = {
            type: "ordgroup",
            mode: "math",
            body: h
          } : r = {
            type: "ordgroup",
            mode: "math",
            body: h
          };
        } else break;
      }
      return r || s ? {
        type: "supsub",
        mode: this.mode,
        base: a,
        sup: r,
        sub: s
      } : a;
    }
    parseFunction(e, a) {
      var r = this.fetch(), s = r.text, n = Re[s];
      if (!n) return null;
      if (this.consume(), a && a !== "atom" && !n.allowedInArgument) throw new q("Got function '" + s + "' with no arguments" + (a ? " as " + a : ""), r);
      if (this.mode === "text" && !n.allowedInText) throw new q("Can't use function '" + s + "' in text mode", r);
      if (this.mode === "math" && n.allowedInMath === false) throw new q("Can't use function '" + s + "' in math mode", r);
      var { args: l, optArgs: u } = this.parseArguments(s, n);
      return this.callFunction(s, l, u, r, e);
    }
    callFunction(e, a, r, s, n) {
      var l = {
        funcName: e,
        parser: this,
        token: s,
        breakOnTokenText: n
      }, u = Re[e];
      if (u && u.handler) return u.handler(l, a, r);
      throw new q("No function handler for " + e);
    }
    parseArguments(e, a) {
      var r = a.numArgs + a.numOptionalArgs;
      if (r === 0) return {
        args: [],
        optArgs: []
      };
      for (var s = [], n = [], l = 0; l < r; l++) {
        var u = a.argTypes && a.argTypes[l], d = l < a.numOptionalArgs;
        ("primitive" in a && a.primitive && u == null || a.type === "sqrt" && l === 1 && n[0] == null) && (u = "primitive");
        var m = this.parseGroupOfType("argument to '" + e + "'", u, d);
        if (d) n.push(m);
        else if (m != null) s.push(m);
        else throw new q("Null argument, please report this as a bug");
      }
      return {
        args: s,
        optArgs: n
      };
    }
    parseGroupOfType(e, a, r) {
      switch (a) {
        case "color":
          return this.parseColorGroup(r);
        case "size":
          return this.parseSizeGroup(r);
        case "url":
          return this.parseUrlGroup(r);
        case "math":
        case "text":
          return this.parseArgumentGroup(r, a);
        case "hbox": {
          var s = this.parseArgumentGroup(r, "text");
          return s != null ? {
            type: "styling",
            mode: s.mode,
            body: [
              s
            ],
            style: "text"
          } : null;
        }
        case "raw": {
          var n = this.parseStringGroup("raw", r);
          return n != null ? {
            type: "raw",
            mode: "text",
            string: n.text
          } : null;
        }
        case "primitive": {
          if (r) throw new q("A primitive argument cannot be optional");
          var l = this.parseGroup(e);
          if (l == null) throw new q("Expected group as " + e, this.fetch());
          return l;
        }
        case "original":
        case null:
        case void 0:
          return this.parseArgumentGroup(r);
        default:
          throw new q("Unknown group type as " + e, this.fetch());
      }
    }
    consumeSpaces() {
      for (; this.fetch().text === " "; ) this.consume();
    }
    parseStringGroup(e, a) {
      var r = this.gullet.scanArgument(a);
      if (r == null) return null;
      for (var s = "", n; (n = this.fetch()).text !== "EOF"; ) s += n.text, this.consume();
      return this.consume(), r.text = s, r;
    }
    parseRegexGroup(e, a) {
      for (var r = this.fetch(), s = r, n = "", l; (l = this.fetch()).text !== "EOF" && e.test(n + l.text); ) s = l, n += s.text, this.consume();
      if (n === "") throw new q("Invalid " + a + ": '" + r.text + "'", r);
      return r.range(s, n);
    }
    parseColorGroup(e) {
      var a = this.parseStringGroup("color", e);
      if (a == null) return null;
      var r = /^(#[a-f0-9]{3,4}|#[a-f0-9]{6}|#[a-f0-9]{8}|[a-f0-9]{6}|[a-z]+)$/i.exec(a.text);
      if (!r) throw new q("Invalid color: '" + a.text + "'", a);
      var s = r[0];
      return /^[0-9a-f]{6}$/i.test(s) && (s = "#" + s), {
        type: "color-token",
        mode: this.mode,
        color: s
      };
    }
    parseSizeGroup(e) {
      var a, r = false;
      if (this.gullet.consumeSpaces(), !e && this.gullet.future().text !== "{" ? a = this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size") : a = this.parseStringGroup("size", e), !a) return null;
      !e && a.text.length === 0 && (a.text = "0pt", r = true);
      var s = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(a.text);
      if (!s) throw new q("Invalid size: '" + a.text + "'", a);
      var n = {
        number: +(s[1] + s[2]),
        unit: s[3]
      };
      if (!Yr(n)) throw new q("Invalid unit: '" + n.unit + "'", a);
      return {
        type: "size",
        mode: this.mode,
        value: n,
        isBlank: r
      };
    }
    parseUrlGroup(e) {
      this.gullet.lexer.setCatcode("%", 13), this.gullet.lexer.setCatcode("~", 12);
      var a = this.parseStringGroup("url", e);
      if (this.gullet.lexer.setCatcode("%", 14), this.gullet.lexer.setCatcode("~", 13), a == null) return null;
      var r = a.text.replace(/\\([#$%&~_^{}])/g, "$1");
      return {
        type: "url",
        mode: this.mode,
        url: r
      };
    }
    parseArgumentGroup(e, a) {
      var r = this.gullet.scanArgument(e);
      if (r == null) return null;
      var s = this.mode;
      a && this.switchMode(a), this.gullet.beginGroup();
      var n = this.parseExpression(false, "EOF");
      this.expect("EOF"), this.gullet.endGroup();
      var l = {
        type: "ordgroup",
        mode: this.mode,
        loc: r.loc,
        body: n
      };
      return a && this.switchMode(s), l;
    }
    parseGroup(e, a) {
      var r = this.fetch(), s = r.text, n;
      if (s === "{" || s === "\\begingroup") {
        this.consume();
        var l = s === "{" ? "}" : "\\endgroup";
        this.gullet.beginGroup();
        var u = this.parseExpression(false, l), d = this.fetch();
        this.expect(l), this.gullet.endGroup(), n = {
          type: "ordgroup",
          mode: this.mode,
          loc: ue.range(r, d),
          body: u,
          semisimple: s === "\\begingroup" || void 0
        };
      } else if (n = this.parseFunction(a, e) || this.parseSymbol(), n == null && s[0] === "\\" && !Ps.hasOwnProperty(s)) {
        if (this.settings.throwOnError) throw new q("Undefined control sequence: " + s, r);
        n = this.formatUnsupportedCmd(s), this.consume();
      }
      return n;
    }
    formLigatures(e) {
      for (var a = e.length - 1, r = 0; r < a; ++r) {
        var s = e[r];
        if (s.type === "textord") {
          var n = s.text, l = e[r + 1];
          if (!(!l || l.type !== "textord")) {
            if (n === "-" && l.text === "-") {
              var u = e[r + 2];
              r + 1 < a && u && u.type === "textord" && u.text === "-" ? (e.splice(r, 3, {
                type: "textord",
                mode: "text",
                loc: ue.range(s, u),
                text: "---"
              }), a -= 2) : (e.splice(r, 2, {
                type: "textord",
                mode: "text",
                loc: ue.range(s, l),
                text: "--"
              }), a -= 1);
            }
            (n === "'" || n === "`") && l.text === n && (e.splice(r, 2, {
              type: "textord",
              mode: "text",
              loc: ue.range(s, l),
              text: n + n
            }), a -= 1);
          }
        }
      }
    }
    parseSymbol() {
      var e = this.fetch(), a = e.text;
      if (/^\\verb[^a-zA-Z]/.test(a)) {
        this.consume();
        var r = a.slice(5), s = r.charAt(0) === "*";
        if (s && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1)) throw new q(`\\verb assertion failed --
                    please report what input caused this bug`);
        return r = r.slice(1, -1), {
          type: "verb",
          mode: "text",
          body: r,
          star: s
        };
      }
      Lr.hasOwnProperty(a[0]) && !W[this.mode][a[0]] && (this.settings.strict && this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + a[0] + '" used in math mode', e), a = Lr[a[0]] + a.slice(1));
      var n = uA.exec(a);
      n && (a = a.substring(0, n.index), a === "i" ? a = "\u0131" : a === "j" && (a = "\u0237"));
      var l;
      if (W[this.mode][a]) {
        this.settings.strict && this.mode === "math" && vt.includes(a) && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + a[0] + '" used in math mode', e);
        var u = W[this.mode][a].group, d = ue.range(e), m;
        if (hS.hasOwnProperty(u)) {
          var g = u;
          m = {
            type: "atom",
            mode: this.mode,
            family: g,
            loc: d,
            text: a
          };
        } else m = {
          type: u,
          mode: this.mode,
          loc: d,
          text: a
        };
        l = m;
      } else if (a.charCodeAt(0) >= 128) this.settings.strict && (Wr(a.charCodeAt(0)) ? this.mode === "math" && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + a[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + a[0] + '"' + (" (" + a.charCodeAt(0) + ")"), e)), l = {
        type: "textord",
        mode: "text",
        loc: ue.range(e),
        text: a
      };
      else return null;
      if (this.consume(), n) for (var _ = 0; _ < n[0].length; _++) {
        var h = n[0][_];
        if (!gt[h]) throw new q("Unknown accent ' " + h + "'", e);
        var b = gt[h][this.mode] || gt[h].text;
        if (!b) throw new q("Accent " + h + " unsupported in " + this.mode + " mode", e);
        l = {
          type: "accent",
          mode: this.mode,
          loc: ue.range(e),
          label: b,
          isStretchy: false,
          isShifty: true,
          base: l
        };
      }
      return l;
    }
  }
  Za.endOfExpression = /* @__PURE__ */ new Set([
    "}",
    "\\endgroup",
    "\\end",
    "\\right",
    "&"
  ]);
  var Yt = function(e, a) {
    if (!(typeof e == "string" || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
    var r = new Za(e, a);
    delete r.gullet.macros.current["\\df@tag"];
    var s = r.parse();
    if (delete r.gullet.macros.current["\\current@color"], delete r.gullet.macros.current["\\color"], r.gullet.macros.get("\\df@tag")) {
      if (!a.displayMode) throw new q("\\tag works only in display equations");
      s = [
        {
          type: "tag",
          mode: "text",
          body: s,
          tag: r.subparse([
            new he("\\df@tag")
          ])
        }
      ];
    }
    return s;
  }, Ls = function(e, a, r) {
    a.textContent = "";
    var s = Zt(e, r).toNode();
    a.appendChild(s);
  };
  typeof document < "u" && document.compatMode !== "CSS1Compat" && (typeof console < "u" && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Ls = function() {
    throw new q("KaTeX doesn't work in quirks mode.");
  });
  var gA = function(e, a) {
    var r = Zt(e, a).toMarkup();
    return r;
  }, kA = function(e, a) {
    var r = new Et(a);
    return Yt(e, r);
  }, Gs = function(e, a, r) {
    if (r.throwOnError || !(e instanceof q)) throw e;
    var s = T([
      "katex-error"
    ], [
      new de(a)
    ]);
    return s.setAttribute("title", e.toString()), s.setAttribute("style", "color:" + r.errorColor), s;
  }, Zt = function(e, a) {
    var r = new Et(a);
    try {
      var s = Yt(e, r);
      return TS(s, e, r);
    } catch (n) {
      return Gs(n, e, r);
    }
  }, _A = function(e, a) {
    var r = new Et(a);
    try {
      var s = Yt(e, r);
      return qS(s, e, r);
    } catch (n) {
      return Gs(n, e, r);
    }
  }, wA = "0.16.38", bA = {
    Span: sa,
    Anchor: Oa,
    SymbolNode: de,
    SvgNode: Te,
    PathNode: Oe,
    LineNode: bt
  }, Gr = {
    version: wA,
    render: Ls,
    renderToString: gA,
    ParseError: q,
    SETTINGS_SCHEMA: kt,
    __parse: kA,
    __renderToDomTree: Zt,
    __renderToHTMLTree: _A,
    __setFontMetrics: fS,
    __defineSymbol: o,
    __defineFunction: E,
    __defineMacro: p,
    __domTree: bA
  };
  const vA = {};
  function zA(t) {
    const e = this, a = t || vA, r = e.data(), s = r.micromarkExtensions || (r.micromarkExtensions = []), n = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), l = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
    s.push(Cx(a)), n.push(Sx()), l.push(Ax(a));
  }
  function xA() {
    return (t, e) => {
      const a = t.children, r = a.findIndex((u) => u.type === "heading" && u.depth === 1);
      if (r === -1) return;
      const s = a[r], n = Bt(s);
      e.data && n && (e.data.title || (e.data.title = n), e.data.matter || (e.data.matter = {}), e.data.matter.title || (e.data.matter.title = n)), a.splice(r, 1);
      const l = a.findIndex((u, d) => d >= r && u.type === "paragraph");
      if (l !== -1) {
        const u = Bt(a[l]);
        e.data && u && (e.data.description || (e.data.description = u), e.data.matter && !e.data.matter.description && (e.data.matter.description = u)), a.splice(l, 1);
      }
    };
  }
  function Bt(t) {
    return t ? t.type === "text" ? t.value || "" : t.children ? t.children.map(Bt).join("") : "" : "";
  }
  function SA(t, e) {
    return Us(t, {}) || {
      type: "root",
      children: []
    };
  }
  function Us(t, e) {
    const a = AA(t, e);
    return a && e.afterTransform && e.afterTransform(t, a), a;
  }
  function AA(t, e) {
    switch (t.nodeType) {
      case 1:
        return jA(t, e);
      case 3:
        return TA(t);
      case 8:
        return qA(t);
      case 9:
        return Ur(t, e);
      case 10:
        return MA();
      case 11:
        return Ur(t, e);
      default:
        return;
    }
  }
  function Ur(t, e) {
    return {
      type: "root",
      children: $s(t, e)
    };
  }
  function MA() {
    return {
      type: "doctype"
    };
  }
  function TA(t) {
    return {
      type: "text",
      value: t.nodeValue || ""
    };
  }
  function qA(t) {
    return {
      type: "comment",
      value: t.nodeValue || ""
    };
  }
  function jA(t, e) {
    const a = t.namespaceURI, r = a === Qa.svg ? to : ro, s = a === Qa.html ? t.tagName.toLowerCase() : t.tagName, n = a === Qa.html && s === "template" ? t.content : t, l = t.getAttributeNames(), u = {};
    let d = -1;
    for (; ++d < l.length; ) u[l[d]] = t.getAttribute(l[d]) || "";
    return r(s, u, $s(n, e));
  }
  function $s(t, e) {
    const a = t.childNodes, r = [];
    let s = -1;
    for (; ++s < a.length; ) {
      const n = Us(a[s], e);
      n !== void 0 && r.push(n);
    }
    return r;
  }
  new DOMParser();
  function DA(t, e) {
    const a = BA(t);
    return SA(a);
  }
  function BA(t) {
    const e = document.createElement("template");
    return e.innerHTML = t, e.content;
  }
  const CA = {}, EA = [];
  function IA(t) {
    const e = t || CA;
    return function(a, r) {
      so(a, "element", function(s, n) {
        const l = Array.isArray(s.properties.className) ? s.properties.className : EA, u = l.includes("language-math"), d = l.includes("math-display"), m = l.includes("math-inline");
        let g = d;
        if (!u && !d && !m) return;
        let _ = n[n.length - 1], h = s;
        if (s.tagName === "code" && u && _ && _.type === "element" && _.tagName === "pre" && (h = _, _ = n[n.length - 2], g = true), !_) return;
        const b = oo(h, {
          whitespace: "pre"
        });
        let S;
        try {
          S = Gr.renderToString(b, {
            ...e,
            displayMode: g,
            throwOnError: true
          });
        } catch (B) {
          const C = B, A = C.name.toLowerCase();
          r.message("Could not render math with KaTeX", {
            ancestors: [
              ...n,
              s
            ],
            cause: C,
            place: s.position,
            ruleId: A,
            source: "rehype-katex"
          });
          try {
            S = Gr.renderToString(b, {
              ...e,
              displayMode: g,
              strict: "ignore",
              throwOnError: false
            });
          } catch {
            S = [
              {
                type: "element",
                tagName: "span",
                properties: {
                  className: [
                    "katex-error"
                  ],
                  style: "color:" + (e.errorColor || "#cc0000"),
                  title: String(B)
                },
                children: [
                  {
                    type: "text",
                    value: b
                  }
                ]
              }
            ];
          }
        }
        typeof S == "string" && (S = DA(S).children);
        const v = _.children.indexOf(h);
        return _.children.splice(v, 1, ...S), no;
      });
    };
  }
  class NA extends Error {
    constructor(e, a) {
      super(e), this.httpStatus = a, this.name = "HighlighterError";
    }
  }
  function RA(t) {
    return t ? "tree" in t : false;
  }
  const $r = {
    theme: {},
    async highlighter(t, e, a, r) {
      var _a, _b2;
      try {
        if (window.sessionStorage.getItem("mdc-shiki-highlighter") === "browser") return nr(() => import("./xTU4Lixx.js").then(async (m) => {
          await m.__tla;
          return m;
        }), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url).then((n) => n.default(t, e, a, r)).catch(() => ({}));
        {
          const n = lo().public.mdc.highlight;
          if (n === false) return Promise.resolve({
            tree: [
              {
                type: "text",
                value: t
              }
            ],
            className: "",
            style: ""
          });
          if ((n == null ? void 0 : n.noApiRoute) === true) return nr(() => import("./xTU4Lixx.js").then(async (m) => {
            await m.__tla;
            return m;
          }), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url).then((l) => l.default(t, e, a, r)).catch(() => ({}));
        }
        const s = await $fetch("/api/_mdc/highlight", {
          params: {
            code: t,
            lang: e,
            theme: JSON.stringify(a),
            options: JSON.stringify(r)
          }
        });
        if (!RA(s)) throw new NA(`result:${s}`);
        return s;
      } catch (s) {
        if (((_a = s == null ? void 0 : s.response) == null ? void 0 : _a.status) > 399 || (s == null ? void 0 : s.name) == "HighlighterError") return window.sessionStorage.setItem("mdc-shiki-highlighter", "browser"), (_b2 = this.highlighter) == null ? void 0 : _b2.call(this, t, e, a, r);
      }
      return Promise.resolve({
        tree: [
          {
            type: "text",
            value: t
          }
        ],
        className: "",
        style: ""
      });
    }
  };
  function FA(t = {}) {
    const e = {
      ...$r,
      ...t
    };
    return typeof e.highlighter != "function" && (e.highlighter = $r.highlighter), co(e);
  }
  VA = {
    "remark-emoji": {
      instance: xx
    },
    "remark-mdc": {
      instance: io,
      options: {
        autoUnwrap: true
      }
    },
    "remark-math": {
      instance: zA
    },
    "/Users/maxi/nimiq/developer-center/remark-extract-title.mjs": {
      instance: xA
    }
  };
  XA = {
    "rehype-katex": {
      instance: IA
    },
    highlight: {
      instance: FA,
      options: {}
    }
  };
  WA = {
    theme: {
      light: "material-theme-lighter",
      default: "material-theme",
      dark: "material-theme-palenight"
    }
  };
});
export {
  __tla,
  WA as highlight,
  XA as rehypePlugins,
  VA as remarkPlugins
};
