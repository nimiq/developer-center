import { f as tt, bH as it, k as A, l as k, w as F, e as K, a4 as O, n as c, P as st, r as Re, aa as Be, t as X, c as w, U as Pe, a6 as qe, a7 as Ke, B as Ne, R as je, aD as nt, aE as ge, bc as at, ac as me, bI as rt, ad as lt, S as oe, bJ as ot, bD as He, x as T, m as j, a1 as ut, bK as ct, bL as dt, aJ as J, bM as ve, bN as ht, a5 as ne, T as B, aK as ft, bO as pt, A as N, z as Ee, a2 as ie, y as he, M as ae, N as le, O as gt, bP as mt, bQ as vt, J as yt, K as bt, bR as Ge, Q as Me, bS as At, bT as xt, bU as Ct, bV as Lt, a8 as ye, bW as It, by as St, bE as ke, bz as Fe, bA as Te, aI as Bt, L as Et, bX as Mt } from "#entry";
import { d as kt } from "./B_ViZct3.js";
var Ft = tt({ __name: "ListboxGroupLabel", props: { for: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "div" } }, setup(i) {
  const e = i, t = it({ id: "" });
  return (a, n) => (A(), k(c(st), O(e, { id: c(t).id }), { default: F(() => [K(a.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), Tt = Ft;
function Q(i) {
  return Array.isArray ? Array.isArray(i) : Ue(i) === "[object Array]";
}
function zt(i) {
  if (typeof i == "string") return i;
  let e = i + "";
  return e == "0" && 1 / i == -1 / 0 ? "-0" : e;
}
function Dt(i) {
  return i == null ? "" : zt(i);
}
function W(i) {
  return typeof i == "string";
}
function Ve(i) {
  return typeof i == "number";
}
function $t(i) {
  return i === true || i === false || wt(i) && Ue(i) == "[object Boolean]";
}
function We(i) {
  return typeof i == "object";
}
function wt(i) {
  return We(i) && i !== null;
}
function R(i) {
  return i != null;
}
function fe(i) {
  return !i.trim().length;
}
function Ue(i) {
  return i == null ? i === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(i);
}
const _t = "Incorrect 'index' type", Ot = (i) => `Invalid value for key ${i}`, Rt = (i) => `Pattern length exceeds max of ${i}.`, Pt = (i) => `Missing ${i} property in key`, qt = (i) => `Property 'weight' in key '${i}' must be a positive integer`, ze = Object.prototype.hasOwnProperty;
class Kt {
  constructor(e) {
    this._keys = [], this._keyMap = {};
    let t = 0;
    e.forEach((a) => {
      let n = Je(a);
      this._keys.push(n), this._keyMap[n.id] = n, t += n.weight;
    }), this._keys.forEach((a) => {
      a.weight /= t;
    });
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function Je(i) {
  let e = null, t = null, a = null, n = 1, s = null;
  if (W(i) || Q(i)) a = i, e = De(i), t = be(i);
  else {
    if (!ze.call(i, "name")) throw new Error(Pt("name"));
    const o = i.name;
    if (a = o, ze.call(i, "weight") && (n = i.weight, n <= 0)) throw new Error(qt(o));
    e = De(o), t = be(o), s = i.getFn;
  }
  return { path: e, id: t, weight: n, src: a, getFn: s };
}
function De(i) {
  return Q(i) ? i : i.split(".");
}
function be(i) {
  return Q(i) ? i.join(".") : i;
}
function Nt(i, e) {
  let t = [], a = false;
  const n = (s, o, u) => {
    if (R(s)) if (!o[u]) t.push(s);
    else {
      let l = o[u];
      const d = s[l];
      if (!R(d)) return;
      if (u === o.length - 1 && (W(d) || Ve(d) || $t(d))) t.push(Dt(d));
      else if (Q(d)) {
        a = true;
        for (let f = 0, m = d.length; f < m; f += 1) n(d[f], o, u + 1);
      } else o.length && n(d, o, u + 1);
    }
  };
  return n(i, W(e) ? e.split(".") : e, 0), a ? t : t[0];
}
const jt = { includeMatches: false, findAllMatches: false, minMatchCharLength: 1 }, Ht = { isCaseSensitive: false, ignoreDiacritics: false, includeScore: false, keys: [], shouldSort: true, sortFn: (i, e) => i.score === e.score ? i.idx < e.idx ? -1 : 1 : i.score < e.score ? -1 : 1 }, Gt = { location: 0, threshold: 0.6, distance: 100 }, Vt = { useExtendedSearch: false, getFn: Nt, ignoreLocation: false, ignoreFieldNorm: false, fieldNormWeight: 1 };
var p = { ...Ht, ...jt, ...Gt, ...Vt };
const Wt = /[^ ]+/g;
function Ut(i = 1, e = 3) {
  const t = /* @__PURE__ */ new Map(), a = Math.pow(10, e);
  return { get(n) {
    const s = n.match(Wt).length;
    if (t.has(s)) return t.get(s);
    const o = 1 / Math.pow(s, 0.5 * i), u = parseFloat(Math.round(o * a) / a);
    return t.set(s, u), u;
  }, clear() {
    t.clear();
  } };
}
class Se {
  constructor({ getFn: e = p.getFn, fieldNormWeight: t = p.fieldNormWeight } = {}) {
    this.norm = Ut(t, 3), this.getFn = e, this.isCreated = false, this.setIndexRecords();
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    this.keys = e, this._keysMap = {}, e.forEach((t, a) => {
      this._keysMap[t.id] = a;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = true, W(this.docs[0]) ? this.docs.forEach((e, t) => {
      this._addString(e, t);
    }) : this.docs.forEach((e, t) => {
      this._addObject(e, t);
    }), this.norm.clear());
  }
  add(e) {
    const t = this.size();
    W(e) ? this._addString(e, t) : this._addObject(e, t);
  }
  removeAt(e) {
    this.records.splice(e, 1);
    for (let t = e, a = this.size(); t < a; t += 1) this.records[t].i -= 1;
  }
  getValueForItemAtKeyId(e, t) {
    return e[this._keysMap[t]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, t) {
    if (!R(e) || fe(e)) return;
    let a = { v: e, i: t, n: this.norm.get(e) };
    this.records.push(a);
  }
  _addObject(e, t) {
    let a = { i: t, $: {} };
    this.keys.forEach((n, s) => {
      let o = n.getFn ? n.getFn(e) : this.getFn(e, n.path);
      if (R(o)) {
        if (Q(o)) {
          let u = [];
          const l = [{ nestedArrIndex: -1, value: o }];
          for (; l.length; ) {
            const { nestedArrIndex: d, value: f } = l.pop();
            if (R(f)) if (W(f) && !fe(f)) {
              let m = { v: f, i: d, n: this.norm.get(f) };
              u.push(m);
            } else Q(f) && f.forEach((m, v) => {
              l.push({ nestedArrIndex: v, value: m });
            });
          }
          a.$[s] = u;
        } else if (W(o) && !fe(o)) {
          let u = { v: o, n: this.norm.get(o) };
          a.$[s] = u;
        }
      }
    }), this.records.push(a);
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function Qe(i, e, { getFn: t = p.getFn, fieldNormWeight: a = p.fieldNormWeight } = {}) {
  const n = new Se({ getFn: t, fieldNormWeight: a });
  return n.setKeys(i.map(Je)), n.setSources(e), n.create(), n;
}
function Jt(i, { getFn: e = p.getFn, fieldNormWeight: t = p.fieldNormWeight } = {}) {
  const { keys: a, records: n } = i, s = new Se({ getFn: e, fieldNormWeight: t });
  return s.setKeys(a), s.setIndexRecords(n), s;
}
function re(i, { errors: e = 0, currentLocation: t = 0, expectedLocation: a = 0, distance: n = p.distance, ignoreLocation: s = p.ignoreLocation } = {}) {
  const o = e / i.length;
  if (s) return o;
  const u = Math.abs(a - t);
  return n ? o + u / n : u ? 1 : o;
}
function Qt(i = [], e = p.minMatchCharLength) {
  let t = [], a = -1, n = -1, s = 0;
  for (let o = i.length; s < o; s += 1) {
    let u = i[s];
    u && a === -1 ? a = s : !u && a !== -1 && (n = s - 1, n - a + 1 >= e && t.push([a, n]), a = -1);
  }
  return i[s - 1] && s - a >= e && t.push([a, s - 1]), t;
}
const te = 32;
function Yt(i, e, t, { location: a = p.location, distance: n = p.distance, threshold: s = p.threshold, findAllMatches: o = p.findAllMatches, minMatchCharLength: u = p.minMatchCharLength, includeMatches: l = p.includeMatches, ignoreLocation: d = p.ignoreLocation } = {}) {
  if (e.length > te) throw new Error(Rt(te));
  const f = e.length, m = i.length, v = Math.max(0, Math.min(a, m));
  let h = s, C = v;
  const L = u > 1 || l, M = L ? Array(m) : [];
  let z;
  for (; (z = i.indexOf(e, C)) > -1; ) {
    let y = re(e, { currentLocation: z, expectedLocation: v, distance: n, ignoreLocation: d });
    if (h = Math.min(y, h), C = z + f, L) {
      let S = 0;
      for (; S < f; ) M[z + S] = 1, S += 1;
    }
  }
  C = -1;
  let D = [], H = 1, P = f + m;
  const ee = 1 << f - 1;
  for (let y = 0; y < f; y += 1) {
    let S = 0, $ = P;
    for (; S < $; ) re(e, { errors: y, currentLocation: v + $, expectedLocation: v, distance: n, ignoreLocation: d }) <= h ? S = $ : P = $, $ = Math.floor((P - S) / 2 + S);
    P = $;
    let G = Math.max(1, v - $ + 1), Y = o ? m : Math.min(v + $, m) + f, V = Array(Y + 2);
    V[Y + 1] = (1 << y) - 1;
    for (let x = Y; x >= G; x -= 1) {
      let r = x - 1, E = t[i.charAt(r)];
      if (L && (M[r] = +!!E), V[x] = (V[x + 1] << 1 | 1) & E, y && (V[x] |= (D[x + 1] | D[x]) << 1 | 1 | D[x + 1]), V[x] & ee && (H = re(e, { errors: y, currentLocation: r, expectedLocation: v, distance: n, ignoreLocation: d }), H <= h)) {
        if (h = H, C = r, C <= v) break;
        G = Math.max(1, 2 * v - C);
      }
    }
    if (re(e, { errors: y + 1, currentLocation: v, expectedLocation: v, distance: n, ignoreLocation: d }) > h) break;
    D = V;
  }
  const U = { isMatch: C >= 0, score: Math.max(1e-3, H) };
  if (L) {
    const y = Qt(M, u);
    y.length ? l && (U.indices = y) : U.isMatch = false;
  }
  return U;
}
function Xt(i) {
  let e = {};
  for (let t = 0, a = i.length; t < a; t += 1) {
    const n = i.charAt(t);
    e[n] = (e[n] || 0) | 1 << a - t - 1;
  }
  return e;
}
const ue = String.prototype.normalize ? ((i) => i.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((i) => i);
class Ye {
  constructor(e, { location: t = p.location, threshold: a = p.threshold, distance: n = p.distance, includeMatches: s = p.includeMatches, findAllMatches: o = p.findAllMatches, minMatchCharLength: u = p.minMatchCharLength, isCaseSensitive: l = p.isCaseSensitive, ignoreDiacritics: d = p.ignoreDiacritics, ignoreLocation: f = p.ignoreLocation } = {}) {
    if (this.options = { location: t, threshold: a, distance: n, includeMatches: s, findAllMatches: o, minMatchCharLength: u, isCaseSensitive: l, ignoreDiacritics: d, ignoreLocation: f }, e = l ? e : e.toLowerCase(), e = d ? ue(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
    const m = (h, C) => {
      this.chunks.push({ pattern: h, alphabet: Xt(h), startIndex: C });
    }, v = this.pattern.length;
    if (v > te) {
      let h = 0;
      const C = v % te, L = v - C;
      for (; h < L; ) m(this.pattern.substr(h, te), h), h += te;
      if (C) {
        const M = v - te;
        m(this.pattern.substr(M), M);
      }
    } else m(this.pattern, 0);
  }
  searchIn(e) {
    const { isCaseSensitive: t, ignoreDiacritics: a, includeMatches: n } = this.options;
    if (e = t ? e : e.toLowerCase(), e = a ? ue(e) : e, this.pattern === e) {
      let L = { isMatch: true, score: 0 };
      return n && (L.indices = [[0, e.length - 1]]), L;
    }
    const { location: s, distance: o, threshold: u, findAllMatches: l, minMatchCharLength: d, ignoreLocation: f } = this.options;
    let m = [], v = 0, h = false;
    this.chunks.forEach(({ pattern: L, alphabet: M, startIndex: z }) => {
      const { isMatch: D, score: H, indices: P } = Yt(e, L, M, { location: s + z, distance: o, threshold: u, findAllMatches: l, minMatchCharLength: d, includeMatches: n, ignoreLocation: f });
      D && (h = true), v += H, D && P && (m = [...m, ...P]);
    });
    let C = { isMatch: h, score: h ? v / this.chunks.length : 1 };
    return h && n && (C.indices = m), C;
  }
}
class Z {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return $e(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return $e(e, this.singleRegex);
  }
  search() {
  }
}
function $e(i, e) {
  const t = i.match(e);
  return t ? t[1] : null;
}
class Zt extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    const t = e === this.pattern;
    return { isMatch: t, score: t ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class ei extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    const a = e.indexOf(this.pattern) === -1;
    return { isMatch: a, score: a ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class ti extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    const t = e.startsWith(this.pattern);
    return { isMatch: t, score: t ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class ii extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    const t = !e.startsWith(this.pattern);
    return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class si extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    const t = e.endsWith(this.pattern);
    return { isMatch: t, score: t ? 0 : 1, indices: [e.length - this.pattern.length, e.length - 1] };
  }
}
class ni extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    const t = !e.endsWith(this.pattern);
    return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class Xe extends Z {
  constructor(e, { location: t = p.location, threshold: a = p.threshold, distance: n = p.distance, includeMatches: s = p.includeMatches, findAllMatches: o = p.findAllMatches, minMatchCharLength: u = p.minMatchCharLength, isCaseSensitive: l = p.isCaseSensitive, ignoreDiacritics: d = p.ignoreDiacritics, ignoreLocation: f = p.ignoreLocation } = {}) {
    super(e), this._bitapSearch = new Ye(e, { location: t, threshold: a, distance: n, includeMatches: s, findAllMatches: o, minMatchCharLength: u, isCaseSensitive: l, ignoreDiacritics: d, ignoreLocation: f });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class Ze extends Z {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let t = 0, a;
    const n = [], s = this.pattern.length;
    for (; (a = e.indexOf(this.pattern, t)) > -1; ) t = a + s, n.push([a, t - 1]);
    const o = !!n.length;
    return { isMatch: o, score: o ? 0 : 1, indices: n };
  }
}
const Ae = [Zt, Ze, ti, ii, ni, si, ei, Xe], we = Ae.length, ai = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, ri = "|";
function li(i, e = {}) {
  return i.split(ri).map((t) => {
    let a = t.trim().split(ai).filter((s) => s && !!s.trim()), n = [];
    for (let s = 0, o = a.length; s < o; s += 1) {
      const u = a[s];
      let l = false, d = -1;
      for (; !l && ++d < we; ) {
        const f = Ae[d];
        let m = f.isMultiMatch(u);
        m && (n.push(new f(m, e)), l = true);
      }
      if (!l) for (d = -1; ++d < we; ) {
        const f = Ae[d];
        let m = f.isSingleMatch(u);
        if (m) {
          n.push(new f(m, e));
          break;
        }
      }
    }
    return n;
  });
}
const oi = /* @__PURE__ */ new Set([Xe.type, Ze.type]);
class ui {
  constructor(e, { isCaseSensitive: t = p.isCaseSensitive, ignoreDiacritics: a = p.ignoreDiacritics, includeMatches: n = p.includeMatches, minMatchCharLength: s = p.minMatchCharLength, ignoreLocation: o = p.ignoreLocation, findAllMatches: u = p.findAllMatches, location: l = p.location, threshold: d = p.threshold, distance: f = p.distance } = {}) {
    this.query = null, this.options = { isCaseSensitive: t, ignoreDiacritics: a, includeMatches: n, minMatchCharLength: s, findAllMatches: u, ignoreLocation: o, location: l, threshold: d, distance: f }, e = t ? e : e.toLowerCase(), e = a ? ue(e) : e, this.pattern = e, this.query = li(this.pattern, this.options);
  }
  static condition(e, t) {
    return t.useExtendedSearch;
  }
  searchIn(e) {
    const t = this.query;
    if (!t) return { isMatch: false, score: 1 };
    const { includeMatches: a, isCaseSensitive: n, ignoreDiacritics: s } = this.options;
    e = n ? e : e.toLowerCase(), e = s ? ue(e) : e;
    let o = 0, u = [], l = 0;
    for (let d = 0, f = t.length; d < f; d += 1) {
      const m = t[d];
      u.length = 0, o = 0;
      for (let v = 0, h = m.length; v < h; v += 1) {
        const C = m[v], { isMatch: L, indices: M, score: z } = C.search(e);
        if (L) {
          if (o += 1, l += z, a) {
            const D = C.constructor.type;
            oi.has(D) ? u = [...u, ...M] : u.push(M);
          }
        } else {
          l = 0, o = 0, u.length = 0;
          break;
        }
      }
      if (o) {
        let v = { isMatch: true, score: l / o };
        return a && (v.indices = u), v;
      }
    }
    return { isMatch: false, score: 1 };
  }
}
const xe = [];
function ci(...i) {
  xe.push(...i);
}
function Ce(i, e) {
  for (let t = 0, a = xe.length; t < a; t += 1) {
    let n = xe[t];
    if (n.condition(i, e)) return new n(i, e);
  }
  return new Ye(i, e);
}
const ce = { AND: "$and", OR: "$or" }, Le = { PATH: "$path", PATTERN: "$val" }, Ie = (i) => !!(i[ce.AND] || i[ce.OR]), di = (i) => !!i[Le.PATH], hi = (i) => !Q(i) && We(i) && !Ie(i), _e = (i) => ({ [ce.AND]: Object.keys(i).map((e) => ({ [e]: i[e] })) });
function et(i, e, { auto: t = true } = {}) {
  const a = (n) => {
    let s = Object.keys(n);
    const o = di(n);
    if (!o && s.length > 1 && !Ie(n)) return a(_e(n));
    if (hi(n)) {
      const l = o ? n[Le.PATH] : s[0], d = o ? n[Le.PATTERN] : n[l];
      if (!W(d)) throw new Error(Ot(l));
      const f = { keyId: be(l), pattern: d };
      return t && (f.searcher = Ce(d, e)), f;
    }
    let u = { children: [], operator: s[0] };
    return s.forEach((l) => {
      const d = n[l];
      Q(d) && d.forEach((f) => {
        u.children.push(a(f));
      });
    }), u;
  };
  return Ie(i) || (i = _e(i)), a(i);
}
function fi(i, { ignoreFieldNorm: e = p.ignoreFieldNorm }) {
  i.forEach((t) => {
    let a = 1;
    t.matches.forEach(({ key: n, norm: s, score: o }) => {
      const u = n ? n.weight : null;
      a *= Math.pow(o === 0 && u ? Number.EPSILON : o, (u || 1) * (e ? 1 : s));
    }), t.score = a;
  });
}
function pi(i, e) {
  const t = i.matches;
  e.matches = [], R(t) && t.forEach((a) => {
    if (!R(a.indices) || !a.indices.length) return;
    const { indices: n, value: s } = a;
    let o = { indices: n, value: s };
    a.key && (o.key = a.key.src), a.idx > -1 && (o.refIndex = a.idx), e.matches.push(o);
  });
}
function gi(i, e) {
  e.score = i.score;
}
function mi(i, e, { includeMatches: t = p.includeMatches, includeScore: a = p.includeScore } = {}) {
  const n = [];
  return t && n.push(pi), a && n.push(gi), i.map((s) => {
    const { idx: o } = s, u = { item: e[o], refIndex: o };
    return n.length && n.forEach((l) => {
      l(s, u);
    }), u;
  });
}
class se {
  constructor(e, t = {}, a) {
    this.options = { ...p, ...t }, this.options.useExtendedSearch, this._keyStore = new Kt(this.options.keys), this.setCollection(e, a);
  }
  setCollection(e, t) {
    if (this._docs = e, t && !(t instanceof Se)) throw new Error(_t);
    this._myIndex = t || Qe(this.options.keys, this._docs, { getFn: this.options.getFn, fieldNormWeight: this.options.fieldNormWeight });
  }
  add(e) {
    R(e) && (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => false) {
    const t = [];
    for (let a = 0, n = this._docs.length; a < n; a += 1) {
      const s = this._docs[a];
      e(s, a) && (this.removeAt(a), a -= 1, n -= 1, t.push(s));
    }
    return t;
  }
  removeAt(e) {
    this._docs.splice(e, 1), this._myIndex.removeAt(e);
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: t = -1 } = {}) {
    const { includeMatches: a, includeScore: n, shouldSort: s, sortFn: o, ignoreFieldNorm: u } = this.options;
    let l = W(e) ? W(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
    return fi(l, { ignoreFieldNorm: u }), s && l.sort(o), Ve(t) && t > -1 && (l = l.slice(0, t)), mi(l, this._docs, { includeMatches: a, includeScore: n });
  }
  _searchStringList(e) {
    const t = Ce(e, this.options), { records: a } = this._myIndex, n = [];
    return a.forEach(({ v: s, i: o, n: u }) => {
      if (!R(s)) return;
      const { isMatch: l, score: d, indices: f } = t.searchIn(s);
      l && n.push({ item: s, idx: o, matches: [{ score: d, value: s, norm: u, indices: f }] });
    }), n;
  }
  _searchLogical(e) {
    const t = et(e, this.options), a = (u, l, d) => {
      if (!u.children) {
        const { keyId: m, searcher: v } = u, h = this._findMatches({ key: this._keyStore.get(m), value: this._myIndex.getValueForItemAtKeyId(l, m), searcher: v });
        return h && h.length ? [{ idx: d, item: l, matches: h }] : [];
      }
      const f = [];
      for (let m = 0, v = u.children.length; m < v; m += 1) {
        const h = u.children[m], C = a(h, l, d);
        if (C.length) f.push(...C);
        else if (u.operator === ce.AND) return [];
      }
      return f;
    }, n = this._myIndex.records, s = {}, o = [];
    return n.forEach(({ $: u, i: l }) => {
      if (R(u)) {
        let d = a(t, u, l);
        d.length && (s[l] || (s[l] = { idx: l, item: u, matches: [] }, o.push(s[l])), d.forEach(({ matches: f }) => {
          s[l].matches.push(...f);
        }));
      }
    }), o;
  }
  _searchObjectList(e) {
    const t = Ce(e, this.options), { keys: a, records: n } = this._myIndex, s = [];
    return n.forEach(({ $: o, i: u }) => {
      if (!R(o)) return;
      let l = [];
      a.forEach((d, f) => {
        l.push(...this._findMatches({ key: d, value: o[f], searcher: t }));
      }), l.length && s.push({ idx: u, item: o, matches: l });
    }), s;
  }
  _findMatches({ key: e, value: t, searcher: a }) {
    if (!R(t)) return [];
    let n = [];
    if (Q(t)) t.forEach(({ v: s, i: o, n: u }) => {
      if (!R(s)) return;
      const { isMatch: l, score: d, indices: f } = a.searchIn(s);
      l && n.push({ score: d, key: e, value: s, idx: o, norm: u, indices: f });
    });
    else {
      const { v: s, n: o } = t, { isMatch: u, score: l, indices: d } = a.searchIn(s);
      u && n.push({ score: l, key: e, value: s, norm: o, indices: d });
    }
    return n;
  }
}
se.version = "7.1.0";
se.createIndex = Qe;
se.parseIndex = Jt;
se.config = p;
se.parseQuery = et;
ci(ui);
function vi(i, e, t) {
  const a = () => {
    var s, o;
    return new se((s = X(e)) !== null && s !== void 0 ? s : [], (o = X(t)) === null || o === void 0 ? void 0 : o.fuseOptions);
  }, n = Re(a());
  return Be(() => {
    var s;
    return (s = X(t)) === null || s === void 0 ? void 0 : s.fuseOptions;
  }, () => {
    n.value = a();
  }, { deep: true }), Be(() => X(e), (s) => {
    n.value.setCollection(s);
  }, { deep: true }), { fuse: n, results: w(() => {
    const s = X(t);
    if ((s == null ? void 0 : s.matchAllWhenSearchEmpty) && !X(i)) return X(e).map((u, l) => ({ item: u, refIndex: l }));
    const o = s == null ? void 0 : s.resultLimit;
    return n.value.search(X(i), o ? { limit: o } : void 0);
  }) };
}
const yi = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function bi(i) {
  return i.replace(/[&<>"']/g, (e) => yi[e]);
}
function Ai(i) {
  return /&(?:amp|lt|gt|quot|#39);/.test(i);
}
function pe(i) {
  return Ai(i) ? i : bi(i);
}
function xi(i, e) {
  let t = "", a = 0, n = false;
  for (let s = i.length - 1; s >= 0; s--) {
    if (i[s] === ">") n = true;
    else if (i[s] === "<") {
      n = false, t = i[s] + t;
      continue;
    }
    if (n || a++, a <= e) t = i[s] + t;
    else {
      t = "..." + t;
      break;
    }
  }
  return t;
}
function Oe(i, e, t, a) {
  var _a;
  function n(s, o = []) {
    s = s || "";
    let u = "", l = 0;
    o.forEach((f) => {
      if (f.length === 2 && f[0] === f[1]) return;
      const m = f[1] + 1, v = m - f[0] >= e.length;
      u += [pe(s.substring(l, f[0])), v && "<mark>", pe(s.substring(f[0], m)), v && "</mark>"].filter(Boolean).join(""), l = m;
    }), u += pe(s.substring(l));
    const d = u.indexOf("<mark>");
    return d !== -1 && (u = xi(u, u.length - d)), u;
  }
  if ((_a = i.matches) == null ? void 0 : _a.length) {
    for (const s of i.matches) if (!(t && s.key !== t) && !(a == null ? void 0 : a.includes(s.key))) return n(s.value, s.indices);
  }
}
const Ci = { slots: { root: "flex flex-col min-h-0 min-w-0 divide-y divide-default", input: "", close: "", back: "p-0", content: "relative overflow-hidden flex flex-col", footer: "p-1", viewport: "relative scroll-py-1 overflow-y-auto flex-1 focus:outline-none", group: "p-1 isolate", empty: "text-center text-muted", label: "font-semibold text-highlighted", item: "group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75", itemLeadingIcon: "shrink-0", itemLeadingAvatar: "shrink-0", itemLeadingAvatarSize: "", itemLeadingChip: "shrink-0", itemLeadingChipSize: "", itemTrailing: "ms-auto inline-flex items-center", itemTrailingIcon: "shrink-0", itemTrailingHighlightedIcon: "shrink-0 text-dimmed hidden group-data-highlighted:inline-flex", itemTrailingKbds: "hidden lg:inline-flex items-center shrink-0", itemTrailingKbdsSize: "", itemWrapper: "flex-1 flex flex-col text-start min-w-0", itemLabel: "truncate space-x-1 text-dimmed", itemDescription: "truncate text-muted", itemLabelBase: "text-highlighted [&>mark]:text-inverted [&>mark]:bg-primary", itemLabelPrefix: "text-default", itemLabelSuffix: "text-dimmed [&>mark]:text-inverted [&>mark]:bg-primary" }, variants: { virtualize: { true: { viewport: "p-1 isolate" }, false: { viewport: "divide-y divide-default" } }, size: { xs: { input: "[&>input]:h-10", empty: "py-3 text-xs", label: "p-1 text-[10px]/3 gap-1", item: "p-1 text-xs gap-1", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailing: "gap-1", itemTrailingIcon: "size-4", itemTrailingHighlightedIcon: "size-4", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "sm" }, sm: { input: "[&>input]:h-11", empty: "py-4 text-xs", label: "p-1.5 text-[10px]/3 gap-1.5", item: "p-1.5 text-xs gap-1.5", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailing: "gap-1.5", itemTrailingIcon: "size-4", itemTrailingHighlightedIcon: "size-4", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "sm" }, md: { input: "[&>input]:h-12", empty: "py-6 text-sm", label: "p-1.5 text-xs gap-1.5", item: "p-1.5 text-sm gap-1.5", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailing: "gap-1.5", itemTrailingIcon: "size-5", itemTrailingHighlightedIcon: "size-5", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "md" }, lg: { input: "[&>input]:h-13", empty: "py-7 text-sm", label: "p-2 text-xs gap-2", item: "p-2 text-sm gap-2", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailing: "gap-2", itemTrailingIcon: "size-5", itemTrailingHighlightedIcon: "size-5", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "md" }, xl: { input: "[&>input]:h-14", empty: "py-8 text-base", label: "p-2 text-sm gap-2", item: "p-2 text-base gap-2", itemLeadingIcon: "size-6", itemLeadingAvatarSize: "xs", itemLeadingChip: "size-6", itemLeadingChipSize: "lg", itemTrailing: "gap-2", itemTrailingIcon: "size-6", itemTrailingHighlightedIcon: "size-6", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "lg" } }, active: { true: { item: "text-highlighted before:bg-elevated", itemLeadingIcon: "text-default" }, false: { item: ["text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50", "transition-colors before:transition-colors"], itemLeadingIcon: ["text-dimmed group-data-highlighted:not-group-data-disabled:text-default", "transition-colors"] } }, loading: { true: { itemLeadingIcon: "animate-spin" } } }, defaultVariants: { size: "md" } }, Li = ["innerHTML"], Ii = ["innerHTML"], Si = Object.assign({ inheritAttrs: false }, { __name: "UCommandPalette", props: ye({ as: { type: null, required: false }, size: { type: null, required: false }, icon: { type: null, required: false }, trailingIcon: { type: null, required: false }, selectedIcon: { type: null, required: false }, childrenIcon: { type: null, required: false }, placeholder: { type: String, required: false }, autofocus: { type: Boolean, required: false, default: true }, close: { type: [Boolean, Object], required: false }, closeIcon: { type: null, required: false }, back: { type: [Boolean, Object], required: false, default: true }, backIcon: { type: null, required: false }, input: { type: [Boolean, Object], required: false, default: true }, groups: { type: Array, required: false }, fuse: { type: Object, required: false }, virtualize: { type: [Boolean, Object], required: false, default: false }, valueKey: { type: null, required: false }, labelKey: { type: null, required: false, default: "label" }, descriptionKey: { type: null, required: false, default: "description" }, preserveGroupOrder: { type: Boolean, required: false, default: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, multiple: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, highlightOnHover: { type: Boolean, required: false, default: true }, selectionBehavior: { type: String, required: false }, by: { type: [String, Function], required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false } }, { searchTerm: { type: String, default: "" }, searchTermModifiers: {} }), emits: ye(["update:modelValue", "highlight", "entryFocus", "leave", "update:open"], ["update:searchTerm"]), setup(i, { emit: e }) {
  const t = i, a = e, n = Pe(), s = qe(i, "searchTerm", { type: String, default: "" }), { t: o } = Ke(), u = Ne(), l = je("commandPalette", t), d = nt(ge(t, "as", "disabled", "multiple", "modelValue", "defaultValue", "highlightOnHover", "by"), a), f = at(() => t.virtualize ? me(typeof t.virtualize == "boolean" ? {} : t.virtualize, { estimateSize: rt(y.value, "md", t.descriptionKey, !!n["item-description"]) }) : false), [m, v] = lt({ props: { item: { type: Object, required: true }, group: { type: Object, required: false }, index: { type: Number, required: false } } }), h = w(() => {
    var _a;
    return oe({ extend: oe(Ci), ...((_a = u.ui) == null ? void 0 : _a.commandPalette) || {} })({ size: t.size, virtualize: !!t.virtualize });
  }), C = w(() => me({}, t.fuse, { fuseOptions: { ignoreLocation: true, threshold: 0.1, keys: [t.labelKey, "suffix"] }, resultLimit: 12, matchAllWhenSearchEmpty: true })), L = Re([]), M = w(() => {
    var _a;
    return ((_a = L.value[L.value.length - 1]) == null ? void 0 : _a.placeholder) || t.placeholder || o("commandPalette.placeholder");
  }), z = w(() => {
    var _a;
    return ((_a = L.value) == null ? void 0 : _a.length) ? [L.value[L.value.length - 1]] : t.groups;
  }), D = w(() => {
    var _a, _b;
    return ((_b = (_a = z.value) == null ? void 0 : _a.filter((b) => b.id ? !b.ignoreFilter : (console.warn("[@nuxt/ui] CommandPalette group is missing an `id` property"), false))) == null ? void 0 : _b.flatMap((b) => {
      var _a2;
      return ((_a2 = b.items) == null ? void 0 : _a2.map((x) => ({ ...x, group: b.id }))) || [];
    })) || [];
  }), { results: H } = vi(s, D, C), P = ot(H, 16, true);
  function ee(b, x) {
    let r = x;
    return (b == null ? void 0 : b.postFilter) && typeof b.postFilter == "function" && (r = b.postFilter(s.value, r)), { ...b, items: r.slice(0, C.value.resultLimit).map((E) => ({ ...E, labelHtml: Oe(E, s.value, t.labelKey), suffixHtml: Oe(E, s.value, void 0, [t.labelKey]) })) };
  }
  const U = w(() => {
    var _a, _b, _c, _d, _e2;
    const b = z.value, x = P.value.reduce((g, I) => {
      var _a2, _b2;
      const { item: q, matches: _ } = I;
      return q.group && (g[_a2 = q.group] || (g[_a2] = []), (_b2 = g[q.group]) == null ? void 0 : _b2.push({ ...q, matches: _ })), g;
    }, {});
    if (t.preserveGroupOrder) {
      const g = [];
      for (const I of b || []) {
        if (!((_a = I.items) == null ? void 0 : _a.length)) continue;
        const q = I.ignoreFilter ? I.items : x[I.id];
        if (!(q == null ? void 0 : q.length)) continue;
        const _ = ee(I, q);
        ((_b = _.items) == null ? void 0 : _b.length) && g.push(_);
      }
      return g;
    }
    const r = Object.entries(x).map(([g, I]) => {
      var _a2;
      const q = b == null ? void 0 : b.find((de) => de.id === g);
      if (!q) return;
      const _ = ee(q, I);
      return ((_a2 = _.items) == null ? void 0 : _a2.length) ? _ : void 0;
    }).filter((g) => !!g);
    return (((_e2 = (_d = (_c = b == null ? void 0 : b.map((g, I) => ({ ...g, index: I }))) == null ? void 0 : _c.filter((g) => {
      var _a2;
      return g.ignoreFilter && ((_a2 = g.items) == null ? void 0 : _a2.length);
    })) == null ? void 0 : _d.map((g) => ({ ...ee(g, g.items || []), index: g.index }))) == null ? void 0 : _e2.filter((g) => {
      var _a2;
      return (_a2 = g.items) == null ? void 0 : _a2.length;
    })) || []).reduce((g, I) => (g.splice(I.index, 0, I), g), [...r]);
  }), y = w(() => U.value.flatMap((b) => b.items || [])), S = He("rootRef");
  function $(b) {
    var _a, _b;
    ((_a = b.children) == null ? void 0 : _a.length) && (L.value.push({ id: `history-${L.value.length}`, label: b.label, slot: b.slot, placeholder: b.placeholder, items: b.children }), s.value = "", (_b = S.value) == null ? void 0 : _b.highlightFirstItem());
  }
  function G() {
    var _a;
    L.value.length && (L.value.pop(), s.value = "", (_a = S.value) == null ? void 0 : _a.highlightFirstItem());
  }
  function Y() {
    s.value || G();
  }
  function V(b, x) {
    var _a, _b;
    ((_a = x.children) == null ? void 0 : _a.length) ? (b.preventDefault(), $(x)) : (_b = x.onSelect) == null ? void 0 : _b.call(x, b);
  }
  return (b, x) => {
    var _a;
    return A(), T(ae, null, [j(c(m), null, { default: F(({ item: r, index: E, group: g }) => [j(ut, O(c(ct)(r), { custom: "" }), { default: F(({ active: I, ...q }) => [j(c(dt), { value: t.valueKey ? c(J)(r, t.valueKey) : c(ve)(r, ["matches", "group", "onSelect", "labelHtml", "suffixHtml", "children"]), disabled: r.disabled, "as-child": "", onSelect: (_) => V(_, r) }, { default: F(() => {
      var _a2, _b;
      return [j(ht, O(q, { "data-slot": "item", class: h.value.item({ class: [(_a2 = c(l)) == null ? void 0 : _a2.item, (_b = r.ui) == null ? void 0 : _b.item, r.class], active: I || r.active }) }), { default: F(() => [K(b.$slots, r.slot || (g == null ? void 0 : g.slot) || "item", { item: r, index: E, ui: h.value }, () => {
        var _a3, _b2, _c, _d, _e2, _f, _g, _h, _i;
        return [K(b.$slots, r.slot ? `${r.slot}-leading` : (g == null ? void 0 : g.slot) ? `${g.slot}-leading` : "item-leading", { item: r, index: E, ui: h.value }, () => {
          var _a4, _b3, _c2, _d2, _e3, _f2, _g2, _h2, _i2, _j, _k, _l;
          return [r.loading ? (A(), k(ne, { key: 0, name: i.loadingIcon || c(u).ui.icons.loading, "data-slot": "itemLeadingIcon", class: B(h.value.itemLeadingIcon({ class: [(_a4 = c(l)) == null ? void 0 : _a4.itemLeadingIcon, (_b3 = r.ui) == null ? void 0 : _b3.itemLeadingIcon], loading: true })) }, null, 8, ["name", "class"])) : r.icon ? (A(), k(ne, { key: 1, name: r.icon, "data-slot": "itemLeadingIcon", class: B(h.value.itemLeadingIcon({ class: [(_c2 = c(l)) == null ? void 0 : _c2.itemLeadingIcon, (_d2 = r.ui) == null ? void 0 : _d2.itemLeadingIcon], active: I || r.active })) }, null, 8, ["name", "class"])) : r.avatar ? (A(), k(ft, O({ key: 2, size: ((_e3 = r.ui) == null ? void 0 : _e3.itemLeadingAvatarSize) || ((_f2 = c(l)) == null ? void 0 : _f2.itemLeadingAvatarSize) || h.value.itemLeadingAvatarSize() }, r.avatar, { "data-slot": "itemLeadingAvatar", class: h.value.itemLeadingAvatar({ class: [(_g2 = c(l)) == null ? void 0 : _g2.itemLeadingAvatar, (_h2 = r.ui) == null ? void 0 : _h2.itemLeadingAvatar], active: I || r.active }) }), null, 16, ["size", "class"])) : r.chip ? (A(), k(pt, O({ key: 3, size: ((_i2 = r.ui) == null ? void 0 : _i2.itemLeadingChipSize) || ((_j = c(l)) == null ? void 0 : _j.itemLeadingChipSize) || h.value.itemLeadingChipSize(), inset: "", standalone: "" }, r.chip, { "data-slot": "itemLeadingChip", class: h.value.itemLeadingChip({ class: [(_k = c(l)) == null ? void 0 : _k.itemLeadingChip, (_l = r.ui) == null ? void 0 : _l.itemLeadingChip], active: I || r.active }) }), null, 16, ["size", "class"])) : N("", true)];
        }), r.prefix || r.labelHtml || c(J)(r, t.labelKey) || r.suffixHtml || r.suffix || n[r.slot ? `${r.slot}-label` : (g == null ? void 0 : g.slot) ? `${g.slot}-label` : "item-label"] || c(J)(r, t.descriptionKey) || n[r.slot ? `${r.slot}-description` : (g == null ? void 0 : g.slot) ? `${g.slot}-description` : "item-description"] ? (A(), T("span", { key: 0, "data-slot": "itemWrapper", class: B(h.value.itemWrapper({ class: [(_a3 = c(l)) == null ? void 0 : _a3.itemWrapper, (_b2 = r.ui) == null ? void 0 : _b2.itemWrapper] })) }, [Ee("span", { "data-slot": "itemLabel", class: B(h.value.itemLabel({ class: [(_c = c(l)) == null ? void 0 : _c.itemLabel, (_d = r.ui) == null ? void 0 : _d.itemLabel], active: I || r.active })) }, [K(b.$slots, r.slot ? `${r.slot}-label` : (g == null ? void 0 : g.slot) ? `${g.slot}-label` : "item-label", { item: r, index: E, ui: h.value }, () => {
          var _a4, _b3, _c2, _d2, _e3, _f2, _g2, _h2, _i2, _j;
          return [r.prefix ? (A(), T("span", { key: 0, "data-slot": "itemLabelPrefix", class: B(h.value.itemLabelPrefix({ class: [(_a4 = c(l)) == null ? void 0 : _a4.itemLabelPrefix, (_b3 = r.ui) == null ? void 0 : _b3.itemLabelPrefix] })) }, ie(r.prefix), 3)) : N("", true), r.labelHtml ? (A(), T("span", { key: 1, "data-slot": "itemLabelBase", class: B(h.value.itemLabelBase({ class: [(_c2 = c(l)) == null ? void 0 : _c2.itemLabelBase, (_d2 = r.ui) == null ? void 0 : _d2.itemLabelBase], active: I || r.active })), innerHTML: r.labelHtml }, null, 10, Li)) : (A(), T("span", { key: 2, "data-slot": "itemLabelBase", class: B(h.value.itemLabelBase({ class: [(_e3 = c(l)) == null ? void 0 : _e3.itemLabelBase, (_f2 = r.ui) == null ? void 0 : _f2.itemLabelBase], active: I || r.active })) }, ie(c(J)(r, t.labelKey)), 3)), r.suffixHtml ? (A(), T("span", { key: 3, "data-slot": "itemLabelSuffix", class: B(h.value.itemLabelSuffix({ class: [(_g2 = c(l)) == null ? void 0 : _g2.itemLabelSuffix, (_h2 = r.ui) == null ? void 0 : _h2.itemLabelSuffix], active: I || r.active })), innerHTML: r.suffixHtml }, null, 10, Ii)) : r.suffix ? (A(), T("span", { key: 4, "data-slot": "itemLabelSuffix", class: B(h.value.itemLabelSuffix({ class: [(_i2 = c(l)) == null ? void 0 : _i2.itemLabelSuffix, (_j = r.ui) == null ? void 0 : _j.itemLabelSuffix], active: I || r.active })) }, ie(r.suffix), 3)) : N("", true)];
        })], 2), c(J)(r, t.descriptionKey) || n[r.slot ? `${r.slot}-description` : (g == null ? void 0 : g.slot) ? `${g.slot}-description` : "item-description"] ? (A(), T("span", { key: 0, "data-slot": "itemDescription", class: B(h.value.itemDescription({ class: [(_e2 = c(l)) == null ? void 0 : _e2.itemDescription, (_f = r.ui) == null ? void 0 : _f.itemDescription] })) }, [K(b.$slots, r.slot ? `${r.slot}-description` : (g == null ? void 0 : g.slot) ? `${g.slot}-description` : "item-description", { item: r, index: E, ui: h.value }, () => [he(ie(c(J)(r, t.descriptionKey)), 1)])], 2)) : N("", true)], 2)) : N("", true), Ee("span", { "data-slot": "itemTrailing", class: B(h.value.itemTrailing({ class: [(_g = c(l)) == null ? void 0 : _g.itemTrailing, (_h = r.ui) == null ? void 0 : _h.itemTrailing] })) }, [K(b.$slots, r.slot ? `${r.slot}-trailing` : (g == null ? void 0 : g.slot) ? `${g.slot}-trailing` : "item-trailing", { item: r, index: E, ui: h.value }, () => {
          var _a4, _b3, _c2, _d2, _e3, _f2, _g2;
          return [r.children && r.children.length > 0 ? (A(), k(ne, { key: 0, name: i.childrenIcon || c(u).ui.icons.chevronRight, "data-slot": "itemTrailingIcon", class: B(h.value.itemTrailingIcon({ class: [(_a4 = c(l)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = r.ui) == null ? void 0 : _b3.itemTrailingIcon] })) }, null, 8, ["name", "class"])) : ((_c2 = r.kbds) == null ? void 0 : _c2.length) ? (A(), T("span", { key: 1, "data-slot": "itemTrailingKbds", class: B(h.value.itemTrailingKbds({ class: [(_d2 = c(l)) == null ? void 0 : _d2.itemTrailingKbds, (_e3 = r.ui) == null ? void 0 : _e3.itemTrailingKbds] })) }, [(A(true), T(ae, null, le(r.kbds, (_, de) => {
            var _a5, _b4;
            return A(), k(gt, O({ key: de, size: ((_a5 = r.ui) == null ? void 0 : _a5.itemTrailingKbdsSize) || ((_b4 = c(l)) == null ? void 0 : _b4.itemTrailingKbdsSize) || h.value.itemTrailingKbdsSize() }, { ref_for: true }, typeof _ == "string" ? { value: _ } : _), null, 16, ["size"]);
          }), 128))], 2)) : (g == null ? void 0 : g.highlightedIcon) ? (A(), k(ne, { key: 2, name: g.highlightedIcon, "data-slot": "itemTrailingHighlightedIcon", class: B(h.value.itemTrailingHighlightedIcon({ class: [(_f2 = c(l)) == null ? void 0 : _f2.itemTrailingHighlightedIcon, (_g2 = r.ui) == null ? void 0 : _g2.itemTrailingHighlightedIcon] })) }, null, 8, ["name", "class"])) : N("", true)];
        }), ((_i = r.children) == null ? void 0 : _i.length) ? N("", true) : (A(), k(c(mt), { key: 0, "as-child": "" }, { default: F(() => {
          var _a4, _b3;
          return [j(ne, { name: i.selectedIcon || c(u).ui.icons.check, "data-slot": "itemTrailingIcon", class: B(h.value.itemTrailingIcon({ class: [(_a4 = c(l)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = r.ui) == null ? void 0 : _b3.itemTrailingIcon] })) }, null, 8, ["name", "class"])];
        }), _: 2 }, 1024))], 2)];
      })]), _: 2 }, 1040, ["class"])];
    }), _: 2 }, 1032, ["value", "disabled", "onSelect"])]), _: 2 }, 1040)]), _: 3 }), j(c(Lt), O({ ...c(d), ...b.$attrs }, { ref_key: "rootRef", ref: S, "selection-behavior": i.selectionBehavior, "data-slot": "root", class: h.value.root({ class: [(_a = c(l)) == null ? void 0 : _a.root, t.class] }) }), { default: F(() => {
      var _a2, _b;
      return [i.input ? (A(), k(c(vt), { key: 0, modelValue: s.value, "onUpdate:modelValue": x[1] || (x[1] = (r) => s.value = r), "as-child": "" }, { default: F(() => {
        var _a3, _b2;
        return [j(yt, O({ variant: "none", size: i.size }, typeof t.input == "object" ? t.input : {}, { placeholder: M.value, autofocus: i.autofocus, loading: i.loading, "loading-icon": i.loadingIcon, "trailing-icon": i.trailingIcon, icon: i.icon || c(u).ui.icons.search, "data-slot": "input", class: h.value.input({ class: (_a3 = c(l)) == null ? void 0 : _a3.input }), onKeydown: bt(Y, ["backspace"]) }), Ge({ _: 2 }, [((_b2 = L.value) == null ? void 0 : _b2.length) && (i.back || n.back) ? { name: "leading", fn: F(() => [K(b.$slots, "back", { ui: h.value }, () => {
          var _a4;
          return [j(Me, O({ size: i.size, icon: i.backIcon || c(u).ui.icons.arrowLeft, color: "neutral", variant: "link", "aria-label": c(o)("commandPalette.back") }, typeof i.back == "object" ? i.back : {}, { "data-slot": "back", class: h.value.back({ class: (_a4 = c(l)) == null ? void 0 : _a4.back }), onClick: G }), null, 16, ["size", "icon", "aria-label", "class"])];
        })]), key: "0" } : void 0, i.close || n.close ? { name: "trailing", fn: F(() => [K(b.$slots, "close", { ui: h.value }, () => {
          var _a4;
          return [i.close ? (A(), k(Me, O({ key: 0, size: i.size, icon: i.closeIcon || c(u).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": c(o)("commandPalette.close") }, typeof i.close == "object" ? i.close : {}, { "data-slot": "close", class: h.value.close({ class: (_a4 = c(l)) == null ? void 0 : _a4.close }), onClick: x[0] || (x[0] = (r) => a("update:open", false)) }), null, 16, ["size", "icon", "aria-label", "class"])) : N("", true)];
        })]), key: "1" } : void 0]), 1040, ["size", "placeholder", "autofocus", "loading", "loading-icon", "trailing-icon", "icon", "class"])];
      }), _: 3 }, 8, ["modelValue"])) : N("", true), j(c(At), { "data-slot": "content", class: B(h.value.content({ class: (_a2 = c(l)) == null ? void 0 : _a2.content })) }, { default: F(() => {
        var _a3, _b2, _c;
        return [((_a3 = U.value) == null ? void 0 : _a3.length) ? (A(), T("div", { key: 0, role: "presentation", "data-slot": "viewport", class: B(h.value.viewport({ class: (_b2 = c(l)) == null ? void 0 : _b2.viewport })) }, [i.virtualize ? (A(), k(c(xt), O({ key: 0, options: y.value, "text-content": (r) => c(J)(r, t.labelKey) }, f.value), { default: F(({ option: r, virtualItem: E }) => [j(c(v), { item: r, index: E.index }, null, 8, ["item", "index"])]), _: 1 }, 16, ["options", "text-content"])) : (A(true), T(ae, { key: 1 }, le(U.value, (r) => {
          var _a4;
          return A(), k(c(Ct), { key: `group-${r.id}`, "data-slot": "group", class: B(h.value.group({ class: (_a4 = c(l)) == null ? void 0 : _a4.group })) }, { default: F(() => {
            var _a5;
            return [c(J)(r, t.labelKey) ? (A(), k(c(Tt), { key: 0, "data-slot": "label", class: B(h.value.label({ class: (_a5 = c(l)) == null ? void 0 : _a5.label })) }, { default: F(() => [he(ie(c(J)(r, t.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : N("", true), (A(true), T(ae, null, le(r.items, (E, g) => (A(), k(c(v), { key: `group-${r.id}-${g}`, item: E, index: g, group: r }, null, 8, ["item", "index", "group"]))), 128))];
          }), _: 2 }, 1032, ["class"]);
        }), 128))], 2)) : (A(), T("div", { key: 1, "data-slot": "empty", class: B(h.value.empty({ class: (_c = c(l)) == null ? void 0 : _c.empty })) }, [K(b.$slots, "empty", { searchTerm: s.value }, () => [he(ie(s.value ? c(o)("commandPalette.noMatch", { searchTerm: s.value }) : c(o)("commandPalette.noData")), 1)])], 2))];
      }), _: 3 }, 8, ["class"]), n.footer ? (A(), T("div", { key: 1, "data-slot": "footer", class: B(h.value.footer({ class: (_b = c(l)) == null ? void 0 : _b.footer })) }, [K(b.$slots, "footer", { ui: h.value })], 2)) : N("", true)];
    }), _: 3 }, 16, ["selection-behavior", "class"])], 64);
  };
} }), Bi = { slots: { modal: "", input: "" }, variants: { fullscreen: { false: { modal: "sm:max-w-3xl h-full sm:h-[28rem]" } }, size: { xs: {}, sm: {}, md: {}, lg: {}, xl: {} } }, defaultVariants: { size: "md" } }, ki = { __name: "UContentSearch", props: ye({ size: { type: null, required: false }, icon: { type: null, required: false }, placeholder: { type: String, required: false }, autofocus: { type: Boolean, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false }, close: { type: [Boolean, Object], required: false, default: true }, closeIcon: { type: null, required: false }, shortcut: { type: String, required: false, default: "meta_k" }, links: { type: Array, required: false }, navigation: { type: Array, required: false }, groups: { type: Array, required: false }, files: { type: Array, required: false }, fuse: { type: Object, required: false }, colorMode: { type: Boolean, required: false, default: true }, class: { type: null, required: false }, ui: { type: Object, required: false }, title: { type: String, required: false }, description: { type: String, required: false }, overlay: { type: Boolean, required: false }, transition: { type: Boolean, required: false }, content: { type: Object, required: false }, dismissible: { type: Boolean, required: false }, fullscreen: { type: Boolean, required: false, default: false }, modal: { type: Boolean, required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true } }, { searchTerm: { type: String, default: "" }, searchTermModifiers: {} }), emits: ["update:searchTerm"], setup(i, { expose: e }) {
  const t = i, a = Pe(), n = qe(i, "searchTerm", { type: String, default: "" }), { t: s } = Ke(), { open: o, mapNavigationItems: u, postFilter: l } = It(), d = St(), f = Ne(), m = je("contentSearch", t), v = ke(ge(t, "size", "icon", "placeholder", "autofocus", "loading", "loadingIcon", "close", "closeIcon")), h = ke(ge(t, "overlay", "transition", "content", "dismissible", "fullscreen", "modal", "portal")), C = () => ve(a, ["content"]), L = w(() => me({}, t.fuse, { fuseOptions: { includeMatches: true } })), M = w(() => {
    var _a;
    return oe({ extend: oe(Bi), ...((_a = f.ui) == null ? void 0 : _a.contentSearch) || {} })({ size: t.size, fullscreen: t.fullscreen });
  }), z = He("commandPaletteRef"), D = w(() => {
    var _a;
    return ((_a = t.links) == null ? void 0 : _a.length) ? t.links.flatMap((y) => {
      var _a2;
      return [{ ...y, suffix: y.description, description: void 0, icon: y.icon || f.ui.icons.file, children: void 0 }, ...((_a2 = y.children) == null ? void 0 : _a2.map((S) => ({ ...S, prefix: y.label + " >", suffix: S.description, description: void 0, icon: S.icon || y.icon || f.ui.icons.file }))) || []];
    }) : [];
  }), H = w(() => {
    var _a;
    return ((_a = t.navigation) == null ? void 0 : _a.length) ? t.navigation.some((y) => {
      var _a2;
      return !!((_a2 = y.children) == null ? void 0 : _a2.length);
    }) ? t.navigation.map((y) => ({ id: y.path, label: y.title, items: u(y.children || [], t.files || []), postFilter: l })) : [{ id: "docs", items: u(t.navigation, t.files || []), postFilter: l }] : [];
  }), P = w(() => !t.colorMode || (d == null ? void 0 : d.forced) ? null : { id: "theme", label: s("contentSearch.theme"), items: [{ label: s("colorMode.system"), icon: f.ui.icons.system, active: d.preference === "system", onSelect: () => {
    d.preference = "system";
  } }, { label: s("colorMode.light"), icon: f.ui.icons.light, active: d.preference === "light", onSelect: () => {
    d.preference = "light";
  } }, { label: s("colorMode.dark"), icon: f.ui.icons.dark, active: d.preference === "dark", onSelect: () => {
    d.preference = "dark";
  } }] }), ee = w(() => {
    const y = [];
    return D.value.length && y.push({ id: "links", label: s("contentSearch.links"), items: D.value }), y.push(...H.value), y.push(...t.groups || []), P.value && y.push(P.value), y;
  });
  function U(y) {
    y.disabled || (o.value = false, n.value = "");
  }
  return kt({ [t.shortcut]: { usingInput: true, handler: () => o.value = !o.value } }), e({ commandPaletteRef: z }), (y, S) => {
    var _a;
    return A(), k(Mt, O({ open: c(o), "onUpdate:open": S[2] || (S[2] = ($) => Et(o) ? o.value = $ : null), title: i.title || c(s)("contentSearch.title"), description: i.description || c(s)("contentSearch.description") }, c(h), { "data-slot": "modal", class: M.value.modal({ class: [(_a = c(m)) == null ? void 0 : _a.modal, t.class] }) }), { content: F(($) => [K(y.$slots, "content", Fe(Te($)), () => [j(Si, O({ ref_key: "commandPaletteRef", ref: z, "search-term": n.value, "onUpdate:searchTerm": S[0] || (S[0] = (G) => n.value = G) }, c(v), { groups: ee.value, fuse: L.value, input: { fixed: true }, ui: c(Bt)(c(ve)(M.value, ["modal"]), c(m)), "onUpdate:modelValue": U, "onUpdate:open": S[1] || (S[1] = (G) => o.value = G) }), Ge({ _: 2 }, [le(C(), (G, Y) => ({ name: Y, fn: F((V) => [K(y.$slots, Y, Fe(Te(V)))]) }))]), 1040, ["search-term", "groups", "fuse", "ui"])])]), _: 3 }, 16, ["open", "title", "description", "class"]);
  };
} };
export {
  ki as default
};
