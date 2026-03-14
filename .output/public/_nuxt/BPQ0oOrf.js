var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { aW as F, c as k, t as l, aX as U, aY as M, a8 as A } from "#entry";
const R = Object.prototype.toString, x = (n) => R.call(n), C = (n) => x(n) === "[object Object]", T = [1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372, 528734635, 1541459225], $ = [1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993, -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987, 1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885, -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872, -1866530822, -1538233109, -1090935817, -965641998], q = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", u = [];
class E {
  constructor() {
    __publicField(this, "_data", new w());
    __publicField(this, "_hash", new w([...T]));
    __publicField(this, "_nDataBytes", 0);
    __publicField(this, "_minBufferSize", 0);
  }
  finalize(e) {
    e && this._append(e);
    const s = this._nDataBytes * 8, t = this._data.sigBytes * 8;
    return this._data.words[t >>> 5] |= 128 << 24 - t % 32, this._data.words[(t + 64 >>> 9 << 4) + 14] = Math.floor(s / 4294967296), this._data.words[(t + 64 >>> 9 << 4) + 15] = s, this._data.sigBytes = this._data.words.length * 4, this._process(), this._hash;
  }
  _doProcessBlock(e, s) {
    const t = this._hash.words;
    let o = t[0], a = t[1], i = t[2], h = t[3], c = t[4], d = t[5], y = t[6], _ = t[7];
    for (let r = 0; r < 64; r++) {
      if (r < 16) u[r] = e[s + r] | 0;
      else {
        const f = u[r - 15], O = (f << 25 | f >>> 7) ^ (f << 14 | f >>> 18) ^ f >>> 3, g = u[r - 2], S = (g << 15 | g >>> 17) ^ (g << 13 | g >>> 19) ^ g >>> 10;
        u[r] = O + u[r - 7] + S + u[r - 16];
      }
      const m = c & d ^ ~c & y, b = o & a ^ o & i ^ a & i, v = (o << 30 | o >>> 2) ^ (o << 19 | o >>> 13) ^ (o << 10 | o >>> 22), j = (c << 26 | c >>> 6) ^ (c << 21 | c >>> 11) ^ (c << 7 | c >>> 25), B = _ + j + m + $[r] + u[r], D = v + b;
      _ = y, y = d, d = c, c = h + B | 0, h = i, i = a, a = o, o = B + D | 0;
    }
    t[0] = t[0] + o | 0, t[1] = t[1] + a | 0, t[2] = t[2] + i | 0, t[3] = t[3] + h | 0, t[4] = t[4] + c | 0, t[5] = t[5] + d | 0, t[6] = t[6] + y | 0, t[7] = t[7] + _ | 0;
  }
  _append(e) {
    typeof e == "string" && (e = w.fromUtf8(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;
  }
  _process(e) {
    let s, t = this._data.sigBytes / 64;
    e ? t = Math.ceil(t) : t = Math.max((t | 0) - this._minBufferSize, 0);
    const o = t * 16, a = Math.min(o * 4, this._data.sigBytes);
    if (o) {
      for (let i = 0; i < o; i += 16) this._doProcessBlock(this._data.words, i);
      s = this._data.words.splice(0, o), this._data.sigBytes -= a;
    }
    return new w(s, a);
  }
}
class w {
  constructor(e, s) {
    __publicField(this, "words");
    __publicField(this, "sigBytes");
    e = this.words = e || [], this.sigBytes = s === void 0 ? e.length * 4 : s;
  }
  static fromUtf8(e) {
    const s = unescape(encodeURIComponent(e)), t = s.length, o = [];
    for (let a = 0; a < t; a++) o[a >>> 2] |= (s.charCodeAt(a) & 255) << 24 - a % 4 * 8;
    return new w(o, t);
  }
  toBase64() {
    const e = [];
    for (let s = 0; s < this.sigBytes; s += 3) {
      const t = this.words[s >>> 2] >>> 24 - s % 4 * 8 & 255, o = this.words[s + 1 >>> 2] >>> 24 - (s + 1) % 4 * 8 & 255, a = this.words[s + 2 >>> 2] >>> 24 - (s + 2) % 4 * 8 & 255, i = t << 16 | o << 8 | a;
      for (let h = 0; h < 4 && s * 8 + h * 6 < this.sigBytes * 8; h++) e.push(q.charAt(i >>> 6 * (3 - h) & 63));
    }
    return e.join("");
  }
  concat(e) {
    if (this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8, this.words.length = Math.ceil(this.sigBytes / 4), this.sigBytes % 4) for (let s = 0; s < e.sigBytes; s++) {
      const t = e.words[s >>> 2] >>> 24 - s % 4 * 8 & 255;
      this.words[this.sigBytes + s >>> 2] |= t << 24 - (this.sigBytes + s) % 4 * 8;
    }
    else for (let s = 0; s < e.sigBytes; s += 4) this.words[this.sigBytes + s >>> 2] = e.words[s >>> 2];
    this.sigBytes += e.sigBytes;
  }
}
function L(n) {
  return new E().finalize(n).toBase64();
}
function p(n) {
  return L(F(n));
}
function K(n, e, s) {
  const [t = {}, o] = typeof e == "string" ? [{}, e] : [e, s], a = k(() => l(n)), i = k(() => l(t.key) || "$f" + p([o, typeof a.value == "string" ? a.value : "", ...P(t)]));
  if (!t.baseURL && typeof a.value == "string" && a.value[0] === "/" && a.value[1] === "/") throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  const { server: h, lazy: c, default: d, transform: y, pick: _, watch: r, immediate: m, getCachedData: b, deep: v, dedupe: j, timeout: B, ...D } = t, f = U({ ...M, ...D, cache: typeof t.cache == "boolean" ? void 0 : t.cache }), O = { server: h, lazy: c, default: d, transform: y, pick: _, immediate: m, getCachedData: b, deep: v, dedupe: j, timeout: B, watch: r === false ? [] : [...r || [], f] };
  return A(r === false ? i.value : i, (S, { signal: z }) => (t.$fetch || globalThis.$fetch)(a.value, { signal: z, ...f }), O);
}
function P(n) {
  var _a;
  const e = [((_a = l(n.method)) == null ? void 0 : _a.toUpperCase()) || "GET", l(n.baseURL)];
  for (const s of [n.query || n.params]) {
    const t = l(s);
    if (!t) continue;
    const o = {};
    for (const [a, i] of Object.entries(t)) o[l(a)] = l(i);
    e.push(o);
  }
  if (n.body) {
    const s = l(n.body);
    if (!s) e.push(p(s));
    else if (s instanceof ArrayBuffer) e.push(p(Object.fromEntries([...new Uint8Array(s).entries()].map(([t, o]) => [t, o.toString()]))));
    else if (s instanceof FormData) {
      const t = {};
      for (const o of s.entries()) {
        const [a, i] = o;
        t[a] = i instanceof File ? i.name : i;
      }
      e.push(p(t));
    } else if (C(s)) e.push(p(U(s)));
    else try {
      e.push(p(s));
    } catch {
      console.warn("[useFetch] Failed to hash body", s);
    }
  }
  return e;
}
export {
  K as u
};
