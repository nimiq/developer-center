var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var _a, _b;
import { t as gt } from "./UYQwraN4.js";
import "./6GRe1c0h.js";
import "#entry";
import "./iik6CYzq.js";
let w = class extends Error {
  constructor(e) {
    super(e), this.name = "ShikiError";
  }
};
function mt(t) {
  return be(t);
}
function be(t) {
  return Array.isArray(t) ? _t(t) : t instanceof RegExp ? t : typeof t == "object" ? yt(t) : t;
}
function _t(t) {
  let e = [];
  for (let n = 0, s = t.length; n < s; n++) e[n] = be(t[n]);
  return e;
}
function yt(t) {
  let e = {};
  for (let n in t) e[n] = be(t[n]);
  return e;
}
function He(t, ...e) {
  return e.forEach((n) => {
    for (let s in n) t[s] = n[s];
  }), t;
}
function Ue(t) {
  const e = ~t.lastIndexOf("/") || ~t.lastIndexOf("\\");
  return e === 0 ? t : ~e === t.length - 1 ? Ue(t.substring(0, t.length - 1)) : t.substr(~e + 1);
}
var ce = /\$(\d+)|\${(\d+):\/(downcase|upcase)}/g, U = class {
  static hasCaptures(t) {
    return t === null ? false : (ce.lastIndex = 0, ce.test(t));
  }
  static replaceCaptures(t, e, n) {
    return t.replace(ce, (s, r, i, o) => {
      let c = n[parseInt(r || i, 10)];
      if (c) {
        let a = e.substring(c.start, c.end);
        for (; a[0] === "."; ) a = a.substring(1);
        switch (o) {
          case "downcase":
            return a.toLowerCase();
          case "upcase":
            return a.toUpperCase();
          default:
            return a;
        }
      } else return s;
    });
  }
};
function qe(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function Ke(t, e) {
  if (t === null && e === null) return 0;
  if (!t) return -1;
  if (!e) return 1;
  let n = t.length, s = e.length;
  if (n === s) {
    for (let r = 0; r < n; r++) {
      let i = qe(t[r], e[r]);
      if (i !== 0) return i;
    }
    return 0;
  }
  return n - s;
}
function Le(t) {
  return !!(/^#[0-9a-f]{6}$/i.test(t) || /^#[0-9a-f]{8}$/i.test(t) || /^#[0-9a-f]{3}$/i.test(t) || /^#[0-9a-f]{4}$/i.test(t));
}
function Ve(t) {
  return t.replace(/[\-\\\{\}\*\+\?\|\^\$\.\,\[\]\(\)\#\s]/g, "\\$&");
}
var Je = class {
  constructor(t) {
    __publicField(this, "cache", /* @__PURE__ */ new Map());
    this.fn = t;
  }
  get(t) {
    if (this.cache.has(t)) return this.cache.get(t);
    const e = this.fn(t);
    return this.cache.set(t, e), e;
  }
}, V = class {
  constructor(t, e, n) {
    __publicField(this, "_cachedMatchRoot", new Je((t) => this._root.match(t)));
    this._colorMap = t, this._defaults = e, this._root = n;
  }
  static createFromRawTheme(t, e) {
    return this.createFromParsedTheme(Ct(t), e);
  }
  static createFromParsedTheme(t, e) {
    return Rt(t, e);
  }
  getColorMap() {
    return this._colorMap.getColorMap();
  }
  getDefaults() {
    return this._defaults;
  }
  match(t) {
    if (t === null) return this._defaults;
    const e = t.scopeName, s = this._cachedMatchRoot.get(e).find((r) => St(t.parent, r.parentScopes));
    return s ? new Qe(s.fontStyle, s.foreground, s.background) : null;
  }
}, le = class q {
  constructor(e, n) {
    this.parent = e, this.scopeName = n;
  }
  static push(e, n) {
    for (const s of n) e = new q(e, s);
    return e;
  }
  static from(...e) {
    let n = null;
    for (let s = 0; s < e.length; s++) n = new q(n, e[s]);
    return n;
  }
  push(e) {
    return new q(this, e);
  }
  getSegments() {
    let e = this;
    const n = [];
    for (; e; ) n.push(e.scopeName), e = e.parent;
    return n.reverse(), n;
  }
  toString() {
    return this.getSegments().join(" ");
  }
  extends(e) {
    return this === e ? true : this.parent === null ? false : this.parent.extends(e);
  }
  getExtensionIfDefined(e) {
    const n = [];
    let s = this;
    for (; s && s !== e; ) n.push(s.scopeName), s = s.parent;
    return s === e ? n.reverse() : void 0;
  }
};
function St(t, e) {
  if (e.length === 0) return true;
  for (let n = 0; n < e.length; n++) {
    let s = e[n], r = false;
    if (s === ">") {
      if (n === e.length - 1) return false;
      s = e[++n], r = true;
    }
    for (; t && !bt(t.scopeName, s); ) {
      if (r) return false;
      t = t.parent;
    }
    if (!t) return false;
    t = t.parent;
  }
  return true;
}
function bt(t, e) {
  return e === t || t.startsWith(e) && t[e.length] === ".";
}
var Qe = class {
  constructor(t, e, n) {
    this.fontStyle = t, this.foregroundId = e, this.backgroundId = n;
  }
};
function Ct(t) {
  if (!t) return [];
  if (!t.settings || !Array.isArray(t.settings)) return [];
  let e = t.settings, n = [], s = 0;
  for (let r = 0, i = e.length; r < i; r++) {
    let o = e[r];
    if (!o.settings) continue;
    let c;
    if (typeof o.scope == "string") {
      let u = o.scope;
      u = u.replace(/^[,]+/, ""), u = u.replace(/[,]+$/, ""), c = u.split(",");
    } else Array.isArray(o.scope) ? c = o.scope : c = [""];
    let a = -1;
    if (typeof o.settings.fontStyle == "string") {
      a = 0;
      let u = o.settings.fontStyle.split(" ");
      for (let f = 0, p = u.length; f < p; f++) switch (u[f]) {
        case "italic":
          a = a | 1;
          break;
        case "bold":
          a = a | 2;
          break;
        case "underline":
          a = a | 4;
          break;
        case "strikethrough":
          a = a | 8;
          break;
      }
    }
    let l = null;
    typeof o.settings.foreground == "string" && Le(o.settings.foreground) && (l = o.settings.foreground);
    let h = null;
    typeof o.settings.background == "string" && Le(o.settings.background) && (h = o.settings.background);
    for (let u = 0, f = c.length; u < f; u++) {
      let d = c[u].trim().split(" "), _ = d[d.length - 1], S = null;
      d.length > 1 && (S = d.slice(0, d.length - 1), S.reverse()), n[s++] = new wt(_, S, r, a, l, h);
    }
  }
  return n;
}
var wt = class {
  constructor(t, e, n, s, r, i) {
    this.scope = t, this.parentScopes = e, this.index = n, this.fontStyle = s, this.foreground = r, this.background = i;
  }
}, k = ((t) => (t[t.NotSet = -1] = "NotSet", t[t.None = 0] = "None", t[t.Italic = 1] = "Italic", t[t.Bold = 2] = "Bold", t[t.Underline = 4] = "Underline", t[t.Strikethrough = 8] = "Strikethrough", t))(k || {});
function Rt(t, e) {
  t.sort((a, l) => {
    let h = qe(a.scope, l.scope);
    return h !== 0 || (h = Ke(a.parentScopes, l.parentScopes), h !== 0) ? h : a.index - l.index;
  });
  let n = 0, s = "#000000", r = "#ffffff";
  for (; t.length >= 1 && t[0].scope === ""; ) {
    let a = t.shift();
    a.fontStyle !== -1 && (n = a.fontStyle), a.foreground !== null && (s = a.foreground), a.background !== null && (r = a.background);
  }
  let i = new kt(e), o = new Qe(n, i.getId(s), i.getId(r)), c = new vt(new fe(0, null, -1, 0, 0), []);
  for (let a = 0, l = t.length; a < l; a++) {
    let h = t[a];
    c.insert(0, h.scope, h.parentScopes, h.fontStyle, i.getId(h.foreground), i.getId(h.background));
  }
  return new V(i, o, c);
}
var kt = class {
  constructor(t) {
    __publicField(this, "_isFrozen");
    __publicField(this, "_lastColorId");
    __publicField(this, "_id2color");
    __publicField(this, "_color2id");
    if (this._lastColorId = 0, this._id2color = [], this._color2id = /* @__PURE__ */ Object.create(null), Array.isArray(t)) {
      this._isFrozen = true;
      for (let e = 0, n = t.length; e < n; e++) this._color2id[t[e]] = e, this._id2color[e] = t[e];
    } else this._isFrozen = false;
  }
  getId(t) {
    if (t === null) return 0;
    t = t.toUpperCase();
    let e = this._color2id[t];
    if (e) return e;
    if (this._isFrozen) throw new Error(`Missing color in color map - ${t}`);
    return e = ++this._lastColorId, this._color2id[t] = e, this._id2color[e] = t, e;
  }
  getColorMap() {
    return this._id2color.slice(0);
  }
}, It = Object.freeze([]), fe = class Ye {
  constructor(e, n, s, r, i) {
    __publicField(this, "scopeDepth");
    __publicField(this, "parentScopes");
    __publicField(this, "fontStyle");
    __publicField(this, "foreground");
    __publicField(this, "background");
    this.scopeDepth = e, this.parentScopes = n || It, this.fontStyle = s, this.foreground = r, this.background = i;
  }
  clone() {
    return new Ye(this.scopeDepth, this.parentScopes, this.fontStyle, this.foreground, this.background);
  }
  static cloneArr(e) {
    let n = [];
    for (let s = 0, r = e.length; s < r; s++) n[s] = e[s].clone();
    return n;
  }
  acceptOverwrite(e, n, s, r) {
    this.scopeDepth > e ? console.log("how did this happen?") : this.scopeDepth = e, n !== -1 && (this.fontStyle = n), s !== 0 && (this.foreground = s), r !== 0 && (this.background = r);
  }
}, vt = class de {
  constructor(e, n = [], s = {}) {
    __publicField(this, "_rulesWithParentScopes");
    this._mainRule = e, this._children = s, this._rulesWithParentScopes = n;
  }
  static _cmpBySpecificity(e, n) {
    if (e.scopeDepth !== n.scopeDepth) return n.scopeDepth - e.scopeDepth;
    let s = 0, r = 0;
    for (; e.parentScopes[s] === ">" && s++, n.parentScopes[r] === ">" && r++, !(s >= e.parentScopes.length || r >= n.parentScopes.length); ) {
      const i = n.parentScopes[r].length - e.parentScopes[s].length;
      if (i !== 0) return i;
      s++, r++;
    }
    return n.parentScopes.length - e.parentScopes.length;
  }
  match(e) {
    if (e !== "") {
      let s = e.indexOf("."), r, i;
      if (s === -1 ? (r = e, i = "") : (r = e.substring(0, s), i = e.substring(s + 1)), this._children.hasOwnProperty(r)) return this._children[r].match(i);
    }
    const n = this._rulesWithParentScopes.concat(this._mainRule);
    return n.sort(de._cmpBySpecificity), n;
  }
  insert(e, n, s, r, i, o) {
    if (n === "") {
      this._doInsertHere(e, s, r, i, o);
      return;
    }
    let c = n.indexOf("."), a, l;
    c === -1 ? (a = n, l = "") : (a = n.substring(0, c), l = n.substring(c + 1));
    let h;
    this._children.hasOwnProperty(a) ? h = this._children[a] : (h = new de(this._mainRule.clone(), fe.cloneArr(this._rulesWithParentScopes)), this._children[a] = h), h.insert(e + 1, l, s, r, i, o);
  }
  _doInsertHere(e, n, s, r, i) {
    if (n === null) {
      this._mainRule.acceptOverwrite(e, s, r, i);
      return;
    }
    for (let o = 0, c = this._rulesWithParentScopes.length; o < c; o++) {
      let a = this._rulesWithParentScopes[o];
      if (Ke(a.parentScopes, n) === 0) {
        a.acceptOverwrite(e, s, r, i);
        return;
      }
    }
    s === -1 && (s = this._mainRule.fontStyle), r === 0 && (r = this._mainRule.foreground), i === 0 && (i = this._mainRule.background), this._rulesWithParentScopes.push(new fe(e, n, s, r, i));
  }
}, $ = class I {
  static toBinaryStr(e) {
    return e.toString(2).padStart(32, "0");
  }
  static print(e) {
    const n = I.getLanguageId(e), s = I.getTokenType(e), r = I.getFontStyle(e), i = I.getForeground(e), o = I.getBackground(e);
    console.log({ languageId: n, tokenType: s, fontStyle: r, foreground: i, background: o });
  }
  static getLanguageId(e) {
    return (e & 255) >>> 0;
  }
  static getTokenType(e) {
    return (e & 768) >>> 8;
  }
  static containsBalancedBrackets(e) {
    return (e & 1024) !== 0;
  }
  static getFontStyle(e) {
    return (e & 30720) >>> 11;
  }
  static getForeground(e) {
    return (e & 16744448) >>> 15;
  }
  static getBackground(e) {
    return (e & 4278190080) >>> 24;
  }
  static set(e, n, s, r, i, o, c) {
    let a = I.getLanguageId(e), l = I.getTokenType(e), h = I.containsBalancedBrackets(e) ? 1 : 0, u = I.getFontStyle(e), f = I.getForeground(e), p = I.getBackground(e);
    return n !== 0 && (a = n), s !== 8 && (l = s), r !== null && (h = r ? 1 : 0), i !== -1 && (u = i), o !== 0 && (f = o), c !== 0 && (p = c), (a << 0 | l << 8 | h << 10 | u << 11 | f << 15 | p << 24) >>> 0;
  }
};
function J(t, e) {
  const n = [], s = Tt(t);
  let r = s.next();
  for (; r !== null; ) {
    let a = 0;
    if (r.length === 2 && r.charAt(1) === ":") {
      switch (r.charAt(0)) {
        case "R":
          a = 1;
          break;
        case "L":
          a = -1;
          break;
        default:
          console.log(`Unknown priority ${r} in scope selector`);
      }
      r = s.next();
    }
    let l = o();
    if (n.push({ matcher: l, priority: a }), r !== ",") break;
    r = s.next();
  }
  return n;
  function i() {
    if (r === "-") {
      r = s.next();
      const a = i();
      return (l) => !!a && !a(l);
    }
    if (r === "(") {
      r = s.next();
      const a = c();
      return r === ")" && (r = s.next()), a;
    }
    if (Pe(r)) {
      const a = [];
      do
        a.push(r), r = s.next();
      while (Pe(r));
      return (l) => e(a, l);
    }
    return null;
  }
  function o() {
    const a = [];
    let l = i();
    for (; l; ) a.push(l), l = i();
    return (h) => a.every((u) => u(h));
  }
  function c() {
    const a = [];
    let l = o();
    for (; l && (a.push(l), r === "|" || r === ","); ) {
      do
        r = s.next();
      while (r === "|" || r === ",");
      l = o();
    }
    return (h) => a.some((u) => u(h));
  }
}
function Pe(t) {
  return !!t && !!t.match(/[\w\.:]+/);
}
function Tt(t) {
  let e = /([LR]:|[\w\.:][\w\.:\-]*|[\,\|\-\(\)])/g, n = e.exec(t);
  return { next: () => {
    if (!n) return null;
    const s = n[0];
    return n = e.exec(t), s;
  } };
}
function Xe(t) {
  typeof t.dispose == "function" && t.dispose();
}
var W = class {
  constructor(t) {
    this.scopeName = t;
  }
  toKey() {
    return this.scopeName;
  }
}, At = class {
  constructor(t, e) {
    this.scopeName = t, this.ruleName = e;
  }
  toKey() {
    return `${this.scopeName}#${this.ruleName}`;
  }
}, Nt = class {
  constructor() {
    __publicField(this, "_references", []);
    __publicField(this, "_seenReferenceKeys", /* @__PURE__ */ new Set());
    __publicField(this, "visitedRule", /* @__PURE__ */ new Set());
  }
  get references() {
    return this._references;
  }
  add(t) {
    const e = t.toKey();
    this._seenReferenceKeys.has(e) || (this._seenReferenceKeys.add(e), this._references.push(t));
  }
}, Lt = class {
  constructor(t, e) {
    __publicField(this, "seenFullScopeRequests", /* @__PURE__ */ new Set());
    __publicField(this, "seenPartialScopeRequests", /* @__PURE__ */ new Set());
    __publicField(this, "Q");
    this.repo = t, this.initialScopeName = e, this.seenFullScopeRequests.add(this.initialScopeName), this.Q = [new W(this.initialScopeName)];
  }
  processQueue() {
    const t = this.Q;
    this.Q = [];
    const e = new Nt();
    for (const n of t) Pt(n, this.initialScopeName, this.repo, e);
    for (const n of e.references) if (n instanceof W) {
      if (this.seenFullScopeRequests.has(n.scopeName)) continue;
      this.seenFullScopeRequests.add(n.scopeName), this.Q.push(n);
    } else {
      if (this.seenFullScopeRequests.has(n.scopeName) || this.seenPartialScopeRequests.has(n.toKey())) continue;
      this.seenPartialScopeRequests.add(n.toKey()), this.Q.push(n);
    }
  }
};
function Pt(t, e, n, s) {
  const r = n.lookup(t.scopeName);
  if (!r) {
    if (t.scopeName === e) throw new Error(`No grammar provided for <${e}>`);
    return;
  }
  const i = n.lookup(e);
  t instanceof W ? K({ baseGrammar: i, selfGrammar: r }, s) : pe(t.ruleName, { baseGrammar: i, selfGrammar: r, repository: r.repository }, s);
  const o = n.injections(t.scopeName);
  if (o) for (const c of o) s.add(new W(c));
}
function pe(t, e, n) {
  if (e.repository && e.repository[t]) {
    const s = e.repository[t];
    Q([s], e, n);
  }
}
function K(t, e) {
  t.selfGrammar.patterns && Array.isArray(t.selfGrammar.patterns) && Q(t.selfGrammar.patterns, { ...t, repository: t.selfGrammar.repository }, e), t.selfGrammar.injections && Q(Object.values(t.selfGrammar.injections), { ...t, repository: t.selfGrammar.repository }, e);
}
function Q(t, e, n) {
  for (const s of t) {
    if (n.visitedRule.has(s)) continue;
    n.visitedRule.add(s);
    const r = s.repository ? He({}, e.repository, s.repository) : e.repository;
    Array.isArray(s.patterns) && Q(s.patterns, { ...e, repository: r }, n);
    const i = s.include;
    if (!i) continue;
    const o = Ze(i);
    switch (o.kind) {
      case 0:
        K({ ...e, selfGrammar: e.baseGrammar }, n);
        break;
      case 1:
        K(e, n);
        break;
      case 2:
        pe(o.ruleName, { ...e, repository: r }, n);
        break;
      case 3:
      case 4:
        const c = o.scopeName === e.selfGrammar.scopeName ? e.selfGrammar : o.scopeName === e.baseGrammar.scopeName ? e.baseGrammar : void 0;
        if (c) {
          const a = { baseGrammar: e.baseGrammar, selfGrammar: c, repository: r };
          o.kind === 4 ? pe(o.ruleName, a, n) : K(a, n);
        } else o.kind === 4 ? n.add(new At(o.scopeName, o.ruleName)) : n.add(new W(o.scopeName));
        break;
    }
  }
}
var Et = class {
  constructor() {
    __publicField(this, "kind", 0);
  }
}, xt = class {
  constructor() {
    __publicField(this, "kind", 1);
  }
}, Gt = class {
  constructor(t) {
    __publicField(this, "kind", 2);
    this.ruleName = t;
  }
}, $t = class {
  constructor(t) {
    __publicField(this, "kind", 3);
    this.scopeName = t;
  }
}, Bt = class {
  constructor(t, e) {
    __publicField(this, "kind", 4);
    this.scopeName = t, this.ruleName = e;
  }
};
function Ze(t) {
  if (t === "$base") return new Et();
  if (t === "$self") return new xt();
  const e = t.indexOf("#");
  if (e === -1) return new $t(t);
  if (e === 0) return new Gt(t.substring(1));
  {
    const n = t.substring(0, e), s = t.substring(e + 1);
    return new Bt(n, s);
  }
}
var Mt = /\\(\d+)/, Ee = /\\(\d+)/g, Ot = -1, et = -2;
var H = class {
  constructor(t, e, n, s) {
    __publicField(this, "$location");
    __publicField(this, "id");
    __publicField(this, "_nameIsCapturing");
    __publicField(this, "_name");
    __publicField(this, "_contentNameIsCapturing");
    __publicField(this, "_contentName");
    this.$location = t, this.id = e, this._name = n || null, this._nameIsCapturing = U.hasCaptures(this._name), this._contentName = s || null, this._contentNameIsCapturing = U.hasCaptures(this._contentName);
  }
  get debugName() {
    const t = this.$location ? `${Ue(this.$location.filename)}:${this.$location.line}` : "unknown";
    return `${this.constructor.name}#${this.id} @ ${t}`;
  }
  getName(t, e) {
    return !this._nameIsCapturing || this._name === null || t === null || e === null ? this._name : U.replaceCaptures(this._name, t, e);
  }
  getContentName(t, e) {
    return !this._contentNameIsCapturing || this._contentName === null ? this._contentName : U.replaceCaptures(this._contentName, t, e);
  }
}, jt = class extends H {
  constructor(t, e, n, s, r) {
    super(t, e, n, s);
    __publicField(this, "retokenizeCapturedWithRuleId");
    this.retokenizeCapturedWithRuleId = r;
  }
  dispose() {
  }
  collectPatterns(t, e) {
    throw new Error("Not supported!");
  }
  compile(t, e) {
    throw new Error("Not supported!");
  }
  compileAG(t, e, n, s) {
    throw new Error("Not supported!");
  }
}, Wt = class extends H {
  constructor(t, e, n, s, r) {
    super(t, e, n, null);
    __publicField(this, "_match");
    __publicField(this, "captures");
    __publicField(this, "_cachedCompiledPatterns");
    this._match = new D(s, this.id), this.captures = r, this._cachedCompiledPatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
  }
  get debugMatchRegExp() {
    return `${this._match.source}`;
  }
  collectPatterns(t, e) {
    e.push(this._match);
  }
  compile(t, e) {
    return this._getCachedCompiledPatterns(t).compile(t);
  }
  compileAG(t, e, n, s) {
    return this._getCachedCompiledPatterns(t).compileAG(t, n, s);
  }
  _getCachedCompiledPatterns(t) {
    return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new F(), this.collectPatterns(t, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
  }
}, xe = class extends H {
  constructor(t, e, n, s, r) {
    super(t, e, n, s);
    __publicField(this, "hasMissingPatterns");
    __publicField(this, "patterns");
    __publicField(this, "_cachedCompiledPatterns");
    this.patterns = r.patterns, this.hasMissingPatterns = r.hasMissingPatterns, this._cachedCompiledPatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
  }
  collectPatterns(t, e) {
    for (const n of this.patterns) t.getRule(n).collectPatterns(t, e);
  }
  compile(t, e) {
    return this._getCachedCompiledPatterns(t).compile(t);
  }
  compileAG(t, e, n, s) {
    return this._getCachedCompiledPatterns(t).compileAG(t, n, s);
  }
  _getCachedCompiledPatterns(t) {
    return this._cachedCompiledPatterns || (this._cachedCompiledPatterns = new F(), this.collectPatterns(t, this._cachedCompiledPatterns)), this._cachedCompiledPatterns;
  }
}, ge = class extends H {
  constructor(t, e, n, s, r, i, o, c, a, l) {
    super(t, e, n, s);
    __publicField(this, "_begin");
    __publicField(this, "beginCaptures");
    __publicField(this, "_end");
    __publicField(this, "endHasBackReferences");
    __publicField(this, "endCaptures");
    __publicField(this, "applyEndPatternLast");
    __publicField(this, "hasMissingPatterns");
    __publicField(this, "patterns");
    __publicField(this, "_cachedCompiledPatterns");
    this._begin = new D(r, this.id), this.beginCaptures = i, this._end = new D(o || "\uFFFF", -1), this.endHasBackReferences = this._end.hasBackReferences, this.endCaptures = c, this.applyEndPatternLast = a || false, this.patterns = l.patterns, this.hasMissingPatterns = l.hasMissingPatterns, this._cachedCompiledPatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null);
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugEndRegExp() {
    return `${this._end.source}`;
  }
  getEndWithResolvedBackReferences(t, e) {
    return this._end.resolveBackReferences(t, e);
  }
  collectPatterns(t, e) {
    e.push(this._begin);
  }
  compile(t, e) {
    return this._getCachedCompiledPatterns(t, e).compile(t);
  }
  compileAG(t, e, n, s) {
    return this._getCachedCompiledPatterns(t, e).compileAG(t, n, s);
  }
  _getCachedCompiledPatterns(t, e) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new F();
      for (const n of this.patterns) t.getRule(n).collectPatterns(t, this._cachedCompiledPatterns);
      this.applyEndPatternLast ? this._cachedCompiledPatterns.push(this._end.hasBackReferences ? this._end.clone() : this._end) : this._cachedCompiledPatterns.unshift(this._end.hasBackReferences ? this._end.clone() : this._end);
    }
    return this._end.hasBackReferences && (this.applyEndPatternLast ? this._cachedCompiledPatterns.setSource(this._cachedCompiledPatterns.length() - 1, e) : this._cachedCompiledPatterns.setSource(0, e)), this._cachedCompiledPatterns;
  }
}, Y = class extends H {
  constructor(t, e, n, s, r, i, o, c, a) {
    super(t, e, n, s);
    __publicField(this, "_begin");
    __publicField(this, "beginCaptures");
    __publicField(this, "whileCaptures");
    __publicField(this, "_while");
    __publicField(this, "whileHasBackReferences");
    __publicField(this, "hasMissingPatterns");
    __publicField(this, "patterns");
    __publicField(this, "_cachedCompiledPatterns");
    __publicField(this, "_cachedCompiledWhilePatterns");
    this._begin = new D(r, this.id), this.beginCaptures = i, this.whileCaptures = c, this._while = new D(o, et), this.whileHasBackReferences = this._while.hasBackReferences, this.patterns = a.patterns, this.hasMissingPatterns = a.hasMissingPatterns, this._cachedCompiledPatterns = null, this._cachedCompiledWhilePatterns = null;
  }
  dispose() {
    this._cachedCompiledPatterns && (this._cachedCompiledPatterns.dispose(), this._cachedCompiledPatterns = null), this._cachedCompiledWhilePatterns && (this._cachedCompiledWhilePatterns.dispose(), this._cachedCompiledWhilePatterns = null);
  }
  get debugBeginRegExp() {
    return `${this._begin.source}`;
  }
  get debugWhileRegExp() {
    return `${this._while.source}`;
  }
  getWhileWithResolvedBackReferences(t, e) {
    return this._while.resolveBackReferences(t, e);
  }
  collectPatterns(t, e) {
    e.push(this._begin);
  }
  compile(t, e) {
    return this._getCachedCompiledPatterns(t).compile(t);
  }
  compileAG(t, e, n, s) {
    return this._getCachedCompiledPatterns(t).compileAG(t, n, s);
  }
  _getCachedCompiledPatterns(t) {
    if (!this._cachedCompiledPatterns) {
      this._cachedCompiledPatterns = new F();
      for (const e of this.patterns) t.getRule(e).collectPatterns(t, this._cachedCompiledPatterns);
    }
    return this._cachedCompiledPatterns;
  }
  compileWhile(t, e) {
    return this._getCachedCompiledWhilePatterns(t, e).compile(t);
  }
  compileWhileAG(t, e, n, s) {
    return this._getCachedCompiledWhilePatterns(t, e).compileAG(t, n, s);
  }
  _getCachedCompiledWhilePatterns(t, e) {
    return this._cachedCompiledWhilePatterns || (this._cachedCompiledWhilePatterns = new F(), this._cachedCompiledWhilePatterns.push(this._while.hasBackReferences ? this._while.clone() : this._while)), this._while.hasBackReferences && this._cachedCompiledWhilePatterns.setSource(0, e || "\uFFFF"), this._cachedCompiledWhilePatterns;
  }
}, tt = class R {
  static createCaptureRule(e, n, s, r, i) {
    return e.registerRule((o) => new jt(n, o, s, r, i));
  }
  static getCompiledRuleId(e, n, s) {
    return e.id || n.registerRule((r) => {
      if (e.id = r, e.match) return new Wt(e.$vscodeTextmateLocation, e.id, e.name, e.match, R._compileCaptures(e.captures, n, s));
      if (typeof e.begin > "u") {
        e.repository && (s = He({}, s, e.repository));
        let i = e.patterns;
        return typeof i > "u" && e.include && (i = [{ include: e.include }]), new xe(e.$vscodeTextmateLocation, e.id, e.name, e.contentName, R._compilePatterns(i, n, s));
      }
      return e.while ? new Y(e.$vscodeTextmateLocation, e.id, e.name, e.contentName, e.begin, R._compileCaptures(e.beginCaptures || e.captures, n, s), e.while, R._compileCaptures(e.whileCaptures || e.captures, n, s), R._compilePatterns(e.patterns, n, s)) : new ge(e.$vscodeTextmateLocation, e.id, e.name, e.contentName, e.begin, R._compileCaptures(e.beginCaptures || e.captures, n, s), e.end, R._compileCaptures(e.endCaptures || e.captures, n, s), e.applyEndPatternLast, R._compilePatterns(e.patterns, n, s));
    }), e.id;
  }
  static _compileCaptures(e, n, s) {
    let r = [];
    if (e) {
      let i = 0;
      for (const o in e) {
        if (o === "$vscodeTextmateLocation") continue;
        const c = parseInt(o, 10);
        c > i && (i = c);
      }
      for (let o = 0; o <= i; o++) r[o] = null;
      for (const o in e) {
        if (o === "$vscodeTextmateLocation") continue;
        const c = parseInt(o, 10);
        let a = 0;
        e[o].patterns && (a = R.getCompiledRuleId(e[o], n, s)), r[c] = R.createCaptureRule(n, e[o].$vscodeTextmateLocation, e[o].name, e[o].contentName, a);
      }
    }
    return r;
  }
  static _compilePatterns(e, n, s) {
    let r = [];
    if (e) for (let i = 0, o = e.length; i < o; i++) {
      const c = e[i];
      let a = -1;
      if (c.include) {
        const l = Ze(c.include);
        switch (l.kind) {
          case 0:
          case 1:
            a = R.getCompiledRuleId(s[c.include], n, s);
            break;
          case 2:
            let h = s[l.ruleName];
            h && (a = R.getCompiledRuleId(h, n, s));
            break;
          case 3:
          case 4:
            const u = l.scopeName, f = l.kind === 4 ? l.ruleName : null, p = n.getExternalGrammar(u, s);
            if (p) if (f) {
              let d = p.repository[f];
              d && (a = R.getCompiledRuleId(d, n, p.repository));
            } else a = R.getCompiledRuleId(p.repository.$self, n, p.repository);
            break;
        }
      } else a = R.getCompiledRuleId(c, n, s);
      if (a !== -1) {
        const l = n.getRule(a);
        let h = false;
        if ((l instanceof xe || l instanceof ge || l instanceof Y) && l.hasMissingPatterns && l.patterns.length === 0 && (h = true), h) continue;
        r.push(a);
      }
    }
    return { patterns: r, hasMissingPatterns: (e ? e.length : 0) !== r.length };
  }
}, D = class nt {
  constructor(e, n) {
    __publicField(this, "source");
    __publicField(this, "ruleId");
    __publicField(this, "hasAnchor");
    __publicField(this, "hasBackReferences");
    __publicField(this, "_anchorCache");
    if (e && typeof e == "string") {
      const s = e.length;
      let r = 0, i = [], o = false;
      for (let c = 0; c < s; c++) if (e.charAt(c) === "\\" && c + 1 < s) {
        const l = e.charAt(c + 1);
        l === "z" ? (i.push(e.substring(r, c)), i.push("$(?!\\n)(?<!\\n)"), r = c + 2) : (l === "A" || l === "G") && (o = true), c++;
      }
      this.hasAnchor = o, r === 0 ? this.source = e : (i.push(e.substring(r, s)), this.source = i.join(""));
    } else this.hasAnchor = false, this.source = e;
    this.hasAnchor ? this._anchorCache = this._buildAnchorCache() : this._anchorCache = null, this.ruleId = n, typeof this.source == "string" ? this.hasBackReferences = Mt.test(this.source) : this.hasBackReferences = false;
  }
  clone() {
    return new nt(this.source, this.ruleId);
  }
  setSource(e) {
    this.source !== e && (this.source = e, this.hasAnchor && (this._anchorCache = this._buildAnchorCache()));
  }
  resolveBackReferences(e, n) {
    if (typeof this.source != "string") throw new Error("This method should only be called if the source is a string");
    let s = n.map((r) => e.substring(r.start, r.end));
    return Ee.lastIndex = 0, this.source.replace(Ee, (r, i) => Ve(s[parseInt(i, 10)] || ""));
  }
  _buildAnchorCache() {
    if (typeof this.source != "string") throw new Error("This method should only be called if the source is a string");
    let e = [], n = [], s = [], r = [], i, o, c, a;
    for (i = 0, o = this.source.length; i < o; i++) c = this.source.charAt(i), e[i] = c, n[i] = c, s[i] = c, r[i] = c, c === "\\" && i + 1 < o && (a = this.source.charAt(i + 1), a === "A" ? (e[i + 1] = "\uFFFF", n[i + 1] = "\uFFFF", s[i + 1] = "A", r[i + 1] = "A") : a === "G" ? (e[i + 1] = "\uFFFF", n[i + 1] = "G", s[i + 1] = "\uFFFF", r[i + 1] = "G") : (e[i + 1] = a, n[i + 1] = a, s[i + 1] = a, r[i + 1] = a), i++);
    return { A0_G0: e.join(""), A0_G1: n.join(""), A1_G0: s.join(""), A1_G1: r.join("") };
  }
  resolveAnchors(e, n) {
    return !this.hasAnchor || !this._anchorCache || typeof this.source != "string" ? this.source : e ? n ? this._anchorCache.A1_G1 : this._anchorCache.A1_G0 : n ? this._anchorCache.A0_G1 : this._anchorCache.A0_G0;
  }
}, F = class {
  constructor() {
    __publicField(this, "_items");
    __publicField(this, "_hasAnchors");
    __publicField(this, "_cached");
    __publicField(this, "_anchorCache");
    this._items = [], this._hasAnchors = false, this._cached = null, this._anchorCache = { A0_G0: null, A0_G1: null, A1_G0: null, A1_G1: null };
  }
  dispose() {
    this._disposeCaches();
  }
  _disposeCaches() {
    this._cached && (this._cached.dispose(), this._cached = null), this._anchorCache.A0_G0 && (this._anchorCache.A0_G0.dispose(), this._anchorCache.A0_G0 = null), this._anchorCache.A0_G1 && (this._anchorCache.A0_G1.dispose(), this._anchorCache.A0_G1 = null), this._anchorCache.A1_G0 && (this._anchorCache.A1_G0.dispose(), this._anchorCache.A1_G0 = null), this._anchorCache.A1_G1 && (this._anchorCache.A1_G1.dispose(), this._anchorCache.A1_G1 = null);
  }
  push(t) {
    this._items.push(t), this._hasAnchors = this._hasAnchors || t.hasAnchor;
  }
  unshift(t) {
    this._items.unshift(t), this._hasAnchors = this._hasAnchors || t.hasAnchor;
  }
  length() {
    return this._items.length;
  }
  setSource(t, e) {
    this._items[t].source !== e && (this._disposeCaches(), this._items[t].setSource(e));
  }
  compile(t) {
    if (!this._cached) {
      let e = this._items.map((n) => n.source);
      this._cached = new Ge(t, e, this._items.map((n) => n.ruleId));
    }
    return this._cached;
  }
  compileAG(t, e, n) {
    return this._hasAnchors ? e ? n ? (this._anchorCache.A1_G1 || (this._anchorCache.A1_G1 = this._resolveAnchors(t, e, n)), this._anchorCache.A1_G1) : (this._anchorCache.A1_G0 || (this._anchorCache.A1_G0 = this._resolveAnchors(t, e, n)), this._anchorCache.A1_G0) : n ? (this._anchorCache.A0_G1 || (this._anchorCache.A0_G1 = this._resolveAnchors(t, e, n)), this._anchorCache.A0_G1) : (this._anchorCache.A0_G0 || (this._anchorCache.A0_G0 = this._resolveAnchors(t, e, n)), this._anchorCache.A0_G0) : this.compile(t);
  }
  _resolveAnchors(t, e, n) {
    let s = this._items.map((r) => r.resolveAnchors(e, n));
    return new Ge(t, s, this._items.map((r) => r.ruleId));
  }
}, Ge = class {
  constructor(t, e, n) {
    __publicField(this, "scanner");
    this.regExps = e, this.rules = n, this.scanner = t.createOnigScanner(e);
  }
  dispose() {
    typeof this.scanner.dispose == "function" && this.scanner.dispose();
  }
  toString() {
    const t = [];
    for (let e = 0, n = this.rules.length; e < n; e++) t.push("   - " + this.rules[e] + ": " + this.regExps[e]);
    return t.join(`
`);
  }
  findNextMatchSync(t, e, n) {
    const s = this.scanner.findNextMatchSync(t, e, n);
    return s ? { ruleId: this.rules[s.index], captureIndices: s.captureIndices } : null;
  }
}, he = class {
  constructor(t, e) {
    this.languageId = t, this.tokenType = e;
  }
}, Dt = (_a = class {
  constructor(e, n) {
    __publicField(this, "_defaultAttributes");
    __publicField(this, "_embeddedLanguagesMatcher");
    __publicField(this, "_getBasicScopeAttributes", new Je((e) => {
      const n = this._scopeToLanguage(e), s = this._toStandardTokenType(e);
      return new he(n, s);
    }));
    this._defaultAttributes = new he(e, 8), this._embeddedLanguagesMatcher = new Ft(Object.entries(n || {}));
  }
  getDefaultAttributes() {
    return this._defaultAttributes;
  }
  getBasicScopeAttributes(e) {
    return e === null ? _a._NULL_SCOPE_METADATA : this._getBasicScopeAttributes.get(e);
  }
  _scopeToLanguage(e) {
    return this._embeddedLanguagesMatcher.match(e) || 0;
  }
  _toStandardTokenType(e) {
    const n = e.match(_a.STANDARD_TOKEN_TYPE_REGEXP);
    if (!n) return 8;
    switch (n[1]) {
      case "comment":
        return 1;
      case "string":
        return 2;
      case "regex":
        return 3;
      case "meta.embedded":
        return 0;
    }
    throw new Error("Unexpected match for standard token type!");
  }
}, __publicField(_a, "_NULL_SCOPE_METADATA", new he(0, 0)), __publicField(_a, "STANDARD_TOKEN_TYPE_REGEXP", /\b(comment|string|regex|meta\.embedded)\b/), _a), Ft = class {
  constructor(t) {
    __publicField(this, "values");
    __publicField(this, "scopesRegExp");
    if (t.length === 0) this.values = null, this.scopesRegExp = null;
    else {
      this.values = new Map(t);
      const e = t.map(([n, s]) => Ve(n));
      e.sort(), e.reverse(), this.scopesRegExp = new RegExp(`^((${e.join(")|(")}))($|\\.)`, "");
    }
  }
  match(t) {
    if (!this.scopesRegExp) return;
    const e = t.match(this.scopesRegExp);
    if (e) return this.values.get(e[1]);
  }
}, $e = class {
  constructor(t, e) {
    this.stack = t, this.stoppedEarly = e;
  }
};
function st(t, e, n, s, r, i, o, c) {
  const a = e.content.length;
  let l = false, h = -1;
  if (o) {
    const p = zt(t, e, n, s, r, i);
    r = p.stack, s = p.linePos, n = p.isFirstLine, h = p.anchorPosition;
  }
  const u = Date.now();
  for (; !l; ) {
    if (c !== 0 && Date.now() - u > c) return new $e(r, true);
    f();
  }
  return new $e(r, false);
  function f() {
    const p = Ht(t, e, n, s, r, h);
    if (!p) {
      i.produce(r, a), l = true;
      return;
    }
    const d = p.captureIndices, _ = p.matchedRuleId, S = d && d.length > 0 ? d[0].end > s : false;
    if (_ === Ot) {
      const m = r.getRule(t);
      i.produce(r, d[0].start), r = r.withContentNameScopesList(r.nameScopesList), O(t, e, n, r, i, m.endCaptures, d), i.produce(r, d[0].end);
      const y = r;
      if (r = r.parent, h = y.getAnchorPos(), !S && y.getEnterPos() === s) {
        r = y, i.produce(r, a), l = true;
        return;
      }
    } else {
      const m = t.getRule(_);
      i.produce(r, d[0].start);
      const y = r, g = m.getName(e.content, d), b = r.contentNameScopesList.pushAttributed(g, t);
      if (r = r.push(_, s, h, d[0].end === a, null, b, b), m instanceof ge) {
        const C = m;
        O(t, e, n, r, i, C.beginCaptures, d), i.produce(r, d[0].end), h = d[0].end;
        const v = C.getContentName(e.content, d), L = b.pushAttributed(v, t);
        if (r = r.withContentNameScopesList(L), C.endHasBackReferences && (r = r.withEndRule(C.getEndWithResolvedBackReferences(e.content, d))), !S && y.hasSameRuleAs(r)) {
          r = r.pop(), i.produce(r, a), l = true;
          return;
        }
      } else if (m instanceof Y) {
        const C = m;
        O(t, e, n, r, i, C.beginCaptures, d), i.produce(r, d[0].end), h = d[0].end;
        const v = C.getContentName(e.content, d), L = b.pushAttributed(v, t);
        if (r = r.withContentNameScopesList(L), C.whileHasBackReferences && (r = r.withEndRule(C.getWhileWithResolvedBackReferences(e.content, d))), !S && y.hasSameRuleAs(r)) {
          r = r.pop(), i.produce(r, a), l = true;
          return;
        }
      } else if (O(t, e, n, r, i, m.captures, d), i.produce(r, d[0].end), r = r.pop(), !S) {
        r = r.safePop(), i.produce(r, a), l = true;
        return;
      }
    }
    d[0].end > s && (s = d[0].end, n = false);
  }
}
function zt(t, e, n, s, r, i) {
  let o = r.beginRuleCapturedEOL ? 0 : -1;
  const c = [];
  for (let a = r; a; a = a.pop()) {
    const l = a.getRule(t);
    l instanceof Y && c.push({ rule: l, stack: a });
  }
  for (let a = c.pop(); a; a = c.pop()) {
    const { ruleScanner: l, findOptions: h } = Kt(a.rule, t, a.stack.endRule, n, s === o), u = l.findNextMatchSync(e, s, h);
    if (u) {
      if (u.ruleId !== et) {
        r = a.stack.pop();
        break;
      }
      u.captureIndices && u.captureIndices.length && (i.produce(a.stack, u.captureIndices[0].start), O(t, e, n, a.stack, i, a.rule.whileCaptures, u.captureIndices), i.produce(a.stack, u.captureIndices[0].end), o = u.captureIndices[0].end, u.captureIndices[0].end > s && (s = u.captureIndices[0].end, n = false));
    } else {
      r = a.stack.pop();
      break;
    }
  }
  return { stack: r, linePos: s, anchorPosition: o, isFirstLine: n };
}
function Ht(t, e, n, s, r, i) {
  const o = Ut(t, e, n, s, r, i), c = t.getInjections();
  if (c.length === 0) return o;
  const a = qt(c, t, e, n, s, r, i);
  if (!a) return o;
  if (!o) return a;
  const l = o.captureIndices[0].start, h = a.captureIndices[0].start;
  return h < l || a.priorityMatch && h === l ? a : o;
}
function Ut(t, e, n, s, r, i) {
  const o = r.getRule(t), { ruleScanner: c, findOptions: a } = rt(o, t, r.endRule, n, s === i), l = c.findNextMatchSync(e, s, a);
  return l ? { captureIndices: l.captureIndices, matchedRuleId: l.ruleId } : null;
}
function qt(t, e, n, s, r, i, o) {
  let c = Number.MAX_VALUE, a = null, l, h = 0;
  const u = i.contentNameScopesList.getScopeNames();
  for (let f = 0, p = t.length; f < p; f++) {
    const d = t[f];
    if (!d.matcher(u)) continue;
    const _ = e.getRule(d.ruleId), { ruleScanner: S, findOptions: m } = rt(_, e, null, s, r === o), y = S.findNextMatchSync(n, r, m);
    if (!y) continue;
    const g = y.captureIndices[0].start;
    if (!(g >= c) && (c = g, a = y.captureIndices, l = y.ruleId, h = d.priority, c === r)) break;
  }
  return a ? { priorityMatch: h === -1, captureIndices: a, matchedRuleId: l } : null;
}
function rt(t, e, n, s, r) {
  return { ruleScanner: t.compileAG(e, n, s, r), findOptions: 0 };
}
function Kt(t, e, n, s, r) {
  return { ruleScanner: t.compileWhileAG(e, n, s, r), findOptions: 0 };
}
function O(t, e, n, s, r, i, o) {
  if (i.length === 0) return;
  const c = e.content, a = Math.min(i.length, o.length), l = [], h = o[0].end;
  for (let u = 0; u < a; u++) {
    const f = i[u];
    if (f === null) continue;
    const p = o[u];
    if (p.length === 0) continue;
    if (p.start > h) break;
    for (; l.length > 0 && l[l.length - 1].endPos <= p.start; ) r.produceFromScopes(l[l.length - 1].scopes, l[l.length - 1].endPos), l.pop();
    if (l.length > 0 ? r.produceFromScopes(l[l.length - 1].scopes, p.start) : r.produce(s, p.start), f.retokenizeCapturedWithRuleId) {
      const _ = f.getName(c, o), S = s.contentNameScopesList.pushAttributed(_, t), m = f.getContentName(c, o), y = S.pushAttributed(m, t), g = s.push(f.retokenizeCapturedWithRuleId, p.start, -1, false, null, S, y), b = t.createOnigString(c.substring(0, p.end));
      st(t, b, n && p.start === 0, p.start, g, r, false, 0), Xe(b);
      continue;
    }
    const d = f.getName(c, o);
    if (d !== null) {
      const S = (l.length > 0 ? l[l.length - 1].scopes : s.contentNameScopesList).pushAttributed(d, t);
      l.push(new Vt(S, p.end));
    }
  }
  for (; l.length > 0; ) r.produceFromScopes(l[l.length - 1].scopes, l[l.length - 1].endPos), l.pop();
}
var Vt = class {
  constructor(t, e) {
    __publicField(this, "scopes");
    __publicField(this, "endPos");
    this.scopes = t, this.endPos = e;
  }
};
function Jt(t, e, n, s, r, i, o, c) {
  return new Yt(t, e, n, s, r, i, o, c);
}
function Be(t, e, n, s, r) {
  const i = J(e, X), o = tt.getCompiledRuleId(n, s, r.repository);
  for (const c of i) t.push({ debugSelector: e, matcher: c.matcher, ruleId: o, grammar: r, priority: c.priority });
}
function X(t, e) {
  if (e.length < t.length) return false;
  let n = 0;
  return t.every((s) => {
    for (let r = n; r < e.length; r++) if (Qt(e[r], s)) return n = r + 1, true;
    return false;
  });
}
function Qt(t, e) {
  if (!t) return false;
  if (t === e) return true;
  const n = e.length;
  return t.length > n && t.substr(0, n) === e && t[n] === ".";
}
var Yt = class {
  constructor(t, e, n, s, r, i, o, c) {
    __publicField(this, "_rootId");
    __publicField(this, "_lastRuleId");
    __publicField(this, "_ruleId2desc");
    __publicField(this, "_includedGrammars");
    __publicField(this, "_grammarRepository");
    __publicField(this, "_grammar");
    __publicField(this, "_injections");
    __publicField(this, "_basicScopeAttributesProvider");
    __publicField(this, "_tokenTypeMatchers");
    if (this._rootScopeName = t, this.balancedBracketSelectors = i, this._onigLib = c, this._basicScopeAttributesProvider = new Dt(n, s), this._rootId = -1, this._lastRuleId = 0, this._ruleId2desc = [null], this._includedGrammars = {}, this._grammarRepository = o, this._grammar = Me(e, null), this._injections = null, this._tokenTypeMatchers = [], r) for (const a of Object.keys(r)) {
      const l = J(a, X);
      for (const h of l) this._tokenTypeMatchers.push({ matcher: h.matcher, type: r[a] });
    }
  }
  get themeProvider() {
    return this._grammarRepository;
  }
  dispose() {
    for (const t of this._ruleId2desc) t && t.dispose();
  }
  createOnigScanner(t) {
    return this._onigLib.createOnigScanner(t);
  }
  createOnigString(t) {
    return this._onigLib.createOnigString(t);
  }
  getMetadataForScope(t) {
    return this._basicScopeAttributesProvider.getBasicScopeAttributes(t);
  }
  _collectInjections() {
    const t = { lookup: (r) => r === this._rootScopeName ? this._grammar : this.getExternalGrammar(r), injections: (r) => this._grammarRepository.injections(r) }, e = [], n = this._rootScopeName, s = t.lookup(n);
    if (s) {
      const r = s.injections;
      if (r) for (let o in r) Be(e, o, r[o], this, s);
      const i = this._grammarRepository.injections(n);
      i && i.forEach((o) => {
        const c = this.getExternalGrammar(o);
        if (c) {
          const a = c.injectionSelector;
          a && Be(e, a, c, this, c);
        }
      });
    }
    return e.sort((r, i) => r.priority - i.priority), e;
  }
  getInjections() {
    return this._injections === null && (this._injections = this._collectInjections()), this._injections;
  }
  registerRule(t) {
    const e = ++this._lastRuleId, n = t(e);
    return this._ruleId2desc[e] = n, n;
  }
  getRule(t) {
    return this._ruleId2desc[t];
  }
  getExternalGrammar(t, e) {
    if (this._includedGrammars[t]) return this._includedGrammars[t];
    if (this._grammarRepository) {
      const n = this._grammarRepository.lookup(t);
      if (n) return this._includedGrammars[t] = Me(n, e && e.$base), this._includedGrammars[t];
    }
  }
  tokenizeLine(t, e, n = 0) {
    const s = this._tokenize(t, e, false, n);
    return { tokens: s.lineTokens.getResult(s.ruleStack, s.lineLength), ruleStack: s.ruleStack, stoppedEarly: s.stoppedEarly };
  }
  tokenizeLine2(t, e, n = 0) {
    const s = this._tokenize(t, e, true, n);
    return { tokens: s.lineTokens.getBinaryResult(s.ruleStack, s.lineLength), ruleStack: s.ruleStack, stoppedEarly: s.stoppedEarly };
  }
  _tokenize(t, e, n, s) {
    this._rootId === -1 && (this._rootId = tt.getCompiledRuleId(this._grammar.repository.$self, this, this._grammar.repository), this.getInjections());
    let r;
    if (!e || e === _e.NULL) {
      r = true;
      const l = this._basicScopeAttributesProvider.getDefaultAttributes(), h = this.themeProvider.getDefaults(), u = $.set(0, l.languageId, l.tokenType, null, h.fontStyle, h.foregroundId, h.backgroundId), f = this.getRule(this._rootId).getName(null, null);
      let p;
      f ? p = j.createRootAndLookUpScopeName(f, u, this) : p = j.createRoot("unknown", u), e = new _e(null, this._rootId, -1, -1, false, null, p, p);
    } else r = false, e.reset();
    t = t + `
`;
    const i = this.createOnigString(t), o = i.content.length, c = new Zt(n, t, this._tokenTypeMatchers, this.balancedBracketSelectors), a = st(this, i, r, 0, e, c, true, s);
    return Xe(i), { lineLength: o, lineTokens: c, ruleStack: a.stack, stoppedEarly: a.stoppedEarly };
  }
};
function Me(t, e) {
  return t = mt(t), t.repository = t.repository || {}, t.repository.$self = { $vscodeTextmateLocation: t.$vscodeTextmateLocation, patterns: t.patterns, name: t.scopeName }, t.repository.$base = e || t.repository.$self, t;
}
var j = class T {
  constructor(e, n, s) {
    this.parent = e, this.scopePath = n, this.tokenAttributes = s;
  }
  static fromExtension(e, n) {
    let s = e, r = (e == null ? void 0 : e.scopePath) ?? null;
    for (const i of n) r = le.push(r, i.scopeNames), s = new T(s, r, i.encodedTokenAttributes);
    return s;
  }
  static createRoot(e, n) {
    return new T(null, new le(null, e), n);
  }
  static createRootAndLookUpScopeName(e, n, s) {
    const r = s.getMetadataForScope(e), i = new le(null, e), o = s.themeProvider.themeMatch(i), c = T.mergeAttributes(n, r, o);
    return new T(null, i, c);
  }
  get scopeName() {
    return this.scopePath.scopeName;
  }
  toString() {
    return this.getScopeNames().join(" ");
  }
  equals(e) {
    return T.equals(this, e);
  }
  static equals(e, n) {
    do {
      if (e === n || !e && !n) return true;
      if (!e || !n || e.scopeName !== n.scopeName || e.tokenAttributes !== n.tokenAttributes) return false;
      e = e.parent, n = n.parent;
    } while (true);
  }
  static mergeAttributes(e, n, s) {
    let r = -1, i = 0, o = 0;
    return s !== null && (r = s.fontStyle, i = s.foregroundId, o = s.backgroundId), $.set(e, n.languageId, n.tokenType, null, r, i, o);
  }
  pushAttributed(e, n) {
    if (e === null) return this;
    if (e.indexOf(" ") === -1) return T._pushAttributed(this, e, n);
    const s = e.split(/ /g);
    let r = this;
    for (const i of s) r = T._pushAttributed(r, i, n);
    return r;
  }
  static _pushAttributed(e, n, s) {
    const r = s.getMetadataForScope(n), i = e.scopePath.push(n), o = s.themeProvider.themeMatch(i), c = T.mergeAttributes(e.tokenAttributes, r, o);
    return new T(e, i, c);
  }
  getScopeNames() {
    return this.scopePath.getSegments();
  }
  getExtensionIfDefined(e) {
    var _a2;
    const n = [];
    let s = this;
    for (; s && s !== e; ) n.push({ encodedTokenAttributes: s.tokenAttributes, scopeNames: s.scopePath.getExtensionIfDefined(((_a2 = s.parent) == null ? void 0 : _a2.scopePath) ?? null) }), s = s.parent;
    return s === e ? n.reverse() : void 0;
  }
}, _e = (_b = class {
  constructor(e, n, s, r, i, o, c, a) {
    __publicField(this, "_stackElementBrand");
    __publicField(this, "_enterPos");
    __publicField(this, "_anchorPos");
    __publicField(this, "depth");
    this.parent = e, this.ruleId = n, this.beginRuleCapturedEOL = i, this.endRule = o, this.nameScopesList = c, this.contentNameScopesList = a, this.depth = this.parent ? this.parent.depth + 1 : 1, this._enterPos = s, this._anchorPos = r;
  }
  equals(e) {
    return e === null ? false : _b._equals(this, e);
  }
  static _equals(e, n) {
    return e === n ? true : this._structuralEquals(e, n) ? j.equals(e.contentNameScopesList, n.contentNameScopesList) : false;
  }
  static _structuralEquals(e, n) {
    do {
      if (e === n || !e && !n) return true;
      if (!e || !n || e.depth !== n.depth || e.ruleId !== n.ruleId || e.endRule !== n.endRule) return false;
      e = e.parent, n = n.parent;
    } while (true);
  }
  clone() {
    return this;
  }
  static _reset(e) {
    for (; e; ) e._enterPos = -1, e._anchorPos = -1, e = e.parent;
  }
  reset() {
    _b._reset(this);
  }
  pop() {
    return this.parent;
  }
  safePop() {
    return this.parent ? this.parent : this;
  }
  push(e, n, s, r, i, o, c) {
    return new _b(this, e, n, s, r, i, o, c);
  }
  getEnterPos() {
    return this._enterPos;
  }
  getAnchorPos() {
    return this._anchorPos;
  }
  getRule(e) {
    return e.getRule(this.ruleId);
  }
  toString() {
    const e = [];
    return this._writeString(e, 0), "[" + e.join(",") + "]";
  }
  _writeString(e, n) {
    var _a2, _b2;
    return this.parent && (n = this.parent._writeString(e, n)), e[n++] = `(${this.ruleId}, ${(_a2 = this.nameScopesList) == null ? void 0 : _a2.toString()}, ${(_b2 = this.contentNameScopesList) == null ? void 0 : _b2.toString()})`, n;
  }
  withContentNameScopesList(e) {
    return this.contentNameScopesList === e ? this : this.parent.push(this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, this.endRule, this.nameScopesList, e);
  }
  withEndRule(e) {
    return this.endRule === e ? this : new _b(this.parent, this.ruleId, this._enterPos, this._anchorPos, this.beginRuleCapturedEOL, e, this.nameScopesList, this.contentNameScopesList);
  }
  hasSameRuleAs(e) {
    let n = this;
    for (; n && n._enterPos === e._enterPos; ) {
      if (n.ruleId === e.ruleId) return true;
      n = n.parent;
    }
    return false;
  }
  toStateStackFrame() {
    var _a2, _b2, _c;
    return { ruleId: this.ruleId, beginRuleCapturedEOL: this.beginRuleCapturedEOL, endRule: this.endRule, nameScopesList: ((_b2 = this.nameScopesList) == null ? void 0 : _b2.getExtensionIfDefined(((_a2 = this.parent) == null ? void 0 : _a2.nameScopesList) ?? null)) ?? [], contentNameScopesList: ((_c = this.contentNameScopesList) == null ? void 0 : _c.getExtensionIfDefined(this.nameScopesList)) ?? [] };
  }
  static pushFrame(e, n) {
    const s = j.fromExtension((e == null ? void 0 : e.nameScopesList) ?? null, n.nameScopesList);
    return new _b(e, n.ruleId, n.enterPos ?? -1, n.anchorPos ?? -1, n.beginRuleCapturedEOL, n.endRule, s, j.fromExtension(s, n.contentNameScopesList));
  }
}, __publicField(_b, "NULL", new _b(null, 0, 0, 0, false, null, null, null)), _b), Xt = class {
  constructor(t, e) {
    __publicField(this, "balancedBracketScopes");
    __publicField(this, "unbalancedBracketScopes");
    __publicField(this, "allowAny", false);
    this.balancedBracketScopes = t.flatMap((n) => n === "*" ? (this.allowAny = true, []) : J(n, X).map((s) => s.matcher)), this.unbalancedBracketScopes = e.flatMap((n) => J(n, X).map((s) => s.matcher));
  }
  get matchesAlways() {
    return this.allowAny && this.unbalancedBracketScopes.length === 0;
  }
  get matchesNever() {
    return this.balancedBracketScopes.length === 0 && !this.allowAny;
  }
  match(t) {
    for (const e of this.unbalancedBracketScopes) if (e(t)) return false;
    for (const e of this.balancedBracketScopes) if (e(t)) return true;
    return this.allowAny;
  }
}, Zt = class {
  constructor(t, e, n, s) {
    __publicField(this, "_emitBinaryTokens");
    __publicField(this, "_lineText");
    __publicField(this, "_tokens");
    __publicField(this, "_binaryTokens");
    __publicField(this, "_lastTokenEndIndex");
    __publicField(this, "_tokenTypeOverrides");
    this.balancedBracketSelectors = s, this._emitBinaryTokens = t, this._tokenTypeOverrides = n, this._lineText = null, this._tokens = [], this._binaryTokens = [], this._lastTokenEndIndex = 0;
  }
  produce(t, e) {
    this.produceFromScopes(t.contentNameScopesList, e);
  }
  produceFromScopes(t, e) {
    var _a2;
    if (this._lastTokenEndIndex >= e) return;
    if (this._emitBinaryTokens) {
      let s = (t == null ? void 0 : t.tokenAttributes) ?? 0, r = false;
      if (((_a2 = this.balancedBracketSelectors) == null ? void 0 : _a2.matchesAlways) && (r = true), this._tokenTypeOverrides.length > 0 || this.balancedBracketSelectors && !this.balancedBracketSelectors.matchesAlways && !this.balancedBracketSelectors.matchesNever) {
        const i = (t == null ? void 0 : t.getScopeNames()) ?? [];
        for (const o of this._tokenTypeOverrides) o.matcher(i) && (s = $.set(s, 0, o.type, null, -1, 0, 0));
        this.balancedBracketSelectors && (r = this.balancedBracketSelectors.match(i));
      }
      if (r && (s = $.set(s, 0, 8, r, -1, 0, 0)), this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 1] === s) {
        this._lastTokenEndIndex = e;
        return;
      }
      this._binaryTokens.push(this._lastTokenEndIndex), this._binaryTokens.push(s), this._lastTokenEndIndex = e;
      return;
    }
    const n = (t == null ? void 0 : t.getScopeNames()) ?? [];
    this._tokens.push({ startIndex: this._lastTokenEndIndex, endIndex: e, scopes: n }), this._lastTokenEndIndex = e;
  }
  getResult(t, e) {
    return this._tokens.length > 0 && this._tokens[this._tokens.length - 1].startIndex === e - 1 && this._tokens.pop(), this._tokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(t, e), this._tokens[this._tokens.length - 1].startIndex = 0), this._tokens;
  }
  getBinaryResult(t, e) {
    this._binaryTokens.length > 0 && this._binaryTokens[this._binaryTokens.length - 2] === e - 1 && (this._binaryTokens.pop(), this._binaryTokens.pop()), this._binaryTokens.length === 0 && (this._lastTokenEndIndex = -1, this.produce(t, e), this._binaryTokens[this._binaryTokens.length - 2] = 0);
    const n = new Uint32Array(this._binaryTokens.length);
    for (let s = 0, r = this._binaryTokens.length; s < r; s++) n[s] = this._binaryTokens[s];
    return n;
  }
}, en = class {
  constructor(t, e) {
    __publicField(this, "_grammars", /* @__PURE__ */ new Map());
    __publicField(this, "_rawGrammars", /* @__PURE__ */ new Map());
    __publicField(this, "_injectionGrammars", /* @__PURE__ */ new Map());
    __publicField(this, "_theme");
    this._onigLib = e, this._theme = t;
  }
  dispose() {
    for (const t of this._grammars.values()) t.dispose();
  }
  setTheme(t) {
    this._theme = t;
  }
  getColorMap() {
    return this._theme.getColorMap();
  }
  addGrammar(t, e) {
    this._rawGrammars.set(t.scopeName, t), e && this._injectionGrammars.set(t.scopeName, e);
  }
  lookup(t) {
    return this._rawGrammars.get(t);
  }
  injections(t) {
    return this._injectionGrammars.get(t);
  }
  getDefaults() {
    return this._theme.getDefaults();
  }
  themeMatch(t) {
    return this._theme.match(t);
  }
  grammarForScopeName(t, e, n, s, r) {
    if (!this._grammars.has(t)) {
      let i = this._rawGrammars.get(t);
      if (!i) return null;
      this._grammars.set(t, Jt(t, i, e, n, s, r, this, this._onigLib));
    }
    return this._grammars.get(t);
  }
}, tn = class {
  constructor(e) {
    __publicField(this, "_options");
    __publicField(this, "_syncRegistry");
    __publicField(this, "_ensureGrammarCache");
    this._options = e, this._syncRegistry = new en(V.createFromRawTheme(e.theme, e.colorMap), e.onigLib), this._ensureGrammarCache = /* @__PURE__ */ new Map();
  }
  dispose() {
    this._syncRegistry.dispose();
  }
  setTheme(e, n) {
    this._syncRegistry.setTheme(V.createFromRawTheme(e, n));
  }
  getColorMap() {
    return this._syncRegistry.getColorMap();
  }
  loadGrammarWithEmbeddedLanguages(e, n, s) {
    return this.loadGrammarWithConfiguration(e, n, { embeddedLanguages: s });
  }
  loadGrammarWithConfiguration(e, n, s) {
    return this._loadGrammar(e, n, s.embeddedLanguages, s.tokenTypes, new Xt(s.balancedBracketSelectors || [], s.unbalancedBracketSelectors || []));
  }
  loadGrammar(e) {
    return this._loadGrammar(e, 0, null, null, null);
  }
  _loadGrammar(e, n, s, r, i) {
    const o = new Lt(this._syncRegistry, e);
    for (; o.Q.length > 0; ) o.Q.map((c) => this._loadSingleGrammar(c.scopeName)), o.processQueue();
    return this._grammarForScopeName(e, n, s, r, i);
  }
  _loadSingleGrammar(e) {
    this._ensureGrammarCache.has(e) || (this._doLoadSingleGrammar(e), this._ensureGrammarCache.set(e, true));
  }
  _doLoadSingleGrammar(e) {
    const n = this._options.loadGrammar(e);
    if (n) {
      const s = typeof this._options.getInjections == "function" ? this._options.getInjections(e) : void 0;
      this._syncRegistry.addGrammar(n, s);
    }
  }
  addGrammar(e, n = [], s = 0, r = null) {
    return this._syncRegistry.addGrammar(e, n), this._grammarForScopeName(e.scopeName, s, r);
  }
  _grammarForScopeName(e, n = 0, s = null, r = null, i = null) {
    return this._syncRegistry.grammarForScopeName(e, n, s, r, i);
  }
}, ye = _e.NULL;
function Z(t, e) {
  const n = typeof t == "string" ? {} : { ...t.colorReplacements }, s = typeof t == "string" ? t : t.name;
  for (const [r, i] of Object.entries((e == null ? void 0 : e.colorReplacements) || {})) typeof i == "string" ? n[r] = i : r === s && Object.assign(n, i);
  return n;
}
function N(t, e) {
  return t && ((e == null ? void 0 : e[t == null ? void 0 : t.toLowerCase()]) || t);
}
function nn(t) {
  return Array.isArray(t) ? t : [t];
}
async function it(t) {
  return Promise.resolve(typeof t == "function" ? t() : t).then((e) => e.default || e);
}
function Ce(t) {
  return !t || ["plaintext", "txt", "text", "plain"].includes(t);
}
function sn(t) {
  return t === "ansi" || Ce(t);
}
function we(t) {
  return t === "none";
}
function rn(t) {
  return we(t);
}
function ot(t, e) {
  var _a2;
  if (!e) return t;
  t.properties || (t.properties = {}), (_a2 = t.properties).class || (_a2.class = []), typeof t.properties.class == "string" && (t.properties.class = t.properties.class.split(/\s+/g)), Array.isArray(t.properties.class) || (t.properties.class = []);
  const n = Array.isArray(e) ? e : e.split(/\s+/g);
  for (const s of n) s && !t.properties.class.includes(s) && t.properties.class.push(s);
  return t;
}
function re(t, e = false) {
  var _a2;
  if (t.length === 0) return [["", 0]];
  const n = t.split(/(\r?\n)/g);
  let s = 0;
  const r = [];
  for (let i = 0; i < n.length; i += 2) {
    const o = e ? n[i] + (n[i + 1] || "") : n[i];
    r.push([o, s]), s += n[i].length, s += ((_a2 = n[i + 1]) == null ? void 0 : _a2.length) || 0;
  }
  return r;
}
function on(t) {
  const e = re(t, true).map(([r]) => r);
  function n(r) {
    if (r === t.length) return { line: e.length - 1, character: e[e.length - 1].length };
    let i = r, o = 0;
    for (const c of e) {
      if (i < c.length) break;
      i -= c.length, o++;
    }
    return { line: o, character: i };
  }
  function s(r, i) {
    let o = 0;
    for (let c = 0; c < r; c++) o += e[c].length;
    return o += i, o;
  }
  return { lines: e, indexToPos: n, posToIndex: s };
}
const Re = "light-dark()", an = ["color", "background-color"];
function cn(t, e) {
  let n = 0;
  const s = [];
  for (const r of e) r > n && s.push({ ...t, content: t.content.slice(n, r), offset: t.offset + n }), n = r;
  return n < t.content.length && s.push({ ...t, content: t.content.slice(n), offset: t.offset + n }), s;
}
function ln(t, e) {
  const n = Array.from(e instanceof Set ? e : new Set(e)).sort((s, r) => s - r);
  return n.length ? t.map((s) => s.flatMap((r) => {
    const i = n.filter((o) => r.offset < o && o < r.offset + r.content.length).map((o) => o - r.offset).sort((o, c) => o - c);
    return i.length ? cn(r, i) : r;
  })) : t;
}
function hn(t, e, n, s, r = "css-vars") {
  const i = { content: t.content, explanation: t.explanation, offset: t.offset }, o = e.map((h) => ee(t.variants[h])), c = new Set(o.flatMap((h) => Object.keys(h))), a = {}, l = (h, u) => {
    const f = u === "color" ? "" : u === "background-color" ? "-bg" : `-${u}`;
    return n + e[h] + (u === "color" ? "" : f);
  };
  return o.forEach((h, u) => {
    for (const f of c) {
      const p = h[f] || "inherit";
      if (u === 0 && s && an.includes(f)) if (s === Re && o.length > 1) {
        const d = e.findIndex((y) => y === "light"), _ = e.findIndex((y) => y === "dark");
        if (d === -1 || _ === -1) throw new w('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        const S = o[d][f] || "inherit", m = o[_][f] || "inherit";
        a[f] = `light-dark(${S}, ${m})`, r === "css-vars" && (a[l(u, f)] = p);
      } else a[f] = p;
      else r === "css-vars" && (a[l(u, f)] = p);
    }
  }), i.htmlStyle = a, i;
}
function ee(t) {
  const e = {};
  if (t.color && (e.color = t.color), t.bgColor && (e["background-color"] = t.bgColor), t.fontStyle) {
    t.fontStyle & k.Italic && (e["font-style"] = "italic"), t.fontStyle & k.Bold && (e["font-weight"] = "bold");
    const n = [];
    t.fontStyle & k.Underline && n.push("underline"), t.fontStyle & k.Strikethrough && n.push("line-through"), n.length && (e["text-decoration"] = n.join(" "));
  }
  return e;
}
function Se(t) {
  return typeof t == "string" ? t : Object.entries(t).map(([e, n]) => `${e}:${n}`).join(";");
}
const at = /* @__PURE__ */ new WeakMap();
function ie(t, e) {
  at.set(t, e);
}
function z(t) {
  return at.get(t);
}
class B {
  constructor(...e) {
    __publicField(this, "_stacks", {});
    __publicField(this, "lang");
    if (e.length === 2) {
      const [n, s] = e;
      this.lang = s, this._stacks = n;
    } else {
      const [n, s, r] = e;
      this.lang = s, this._stacks = { [r]: n };
    }
  }
  get themes() {
    return Object.keys(this._stacks);
  }
  get theme() {
    return this.themes[0];
  }
  get _stack() {
    return this._stacks[this.theme];
  }
  static initial(e, n) {
    return new B(Object.fromEntries(nn(n).map((s) => [s, ye])), e);
  }
  getInternalStack(e = this.theme) {
    return this._stacks[e];
  }
  getScopes(e = this.theme) {
    return un(this._stacks[e]);
  }
  toJSON() {
    return { lang: this.lang, theme: this.theme, themes: this.themes, scopes: this.getScopes() };
  }
}
function un(t) {
  const e = [], n = /* @__PURE__ */ new Set();
  function s(r) {
    var _a2;
    if (n.has(r)) return;
    n.add(r);
    const i = (_a2 = r == null ? void 0 : r.nameScopesList) == null ? void 0 : _a2.scopeName;
    i && e.push(i), r.parent && s(r.parent);
  }
  return s(t), e;
}
function fn(t, e) {
  if (!(t instanceof B)) throw new w("Invalid grammar state");
  return t.getInternalStack(e);
}
function dn() {
  const t = /* @__PURE__ */ new WeakMap();
  function e(n) {
    if (!t.has(n.meta)) {
      let s = function(o) {
        if (typeof o == "number") {
          if (o < 0 || o > n.source.length) throw new w(`Invalid decoration offset: ${o}. Code length: ${n.source.length}`);
          return { ...r.indexToPos(o), offset: o };
        } else {
          const c = r.lines[o.line];
          if (c === void 0) throw new w(`Invalid decoration position ${JSON.stringify(o)}. Lines length: ${r.lines.length}`);
          let a = o.character;
          if (a < 0 && (a = c.length + a), a < 0 || a > c.length) throw new w(`Invalid decoration position ${JSON.stringify(o)}. Line ${o.line} length: ${c.length}`);
          return { ...o, character: a, offset: r.posToIndex(o.line, a) };
        }
      };
      const r = on(n.source), i = (n.options.decorations || []).map((o) => ({ ...o, start: s(o.start), end: s(o.end) }));
      pn(i), t.set(n.meta, { decorations: i, converter: r, source: n.source });
    }
    return t.get(n.meta);
  }
  return { name: "shiki:decorations", tokens(n) {
    var _a2;
    if (!((_a2 = this.options.decorations) == null ? void 0 : _a2.length)) return;
    const r = e(this).decorations.flatMap((o) => [o.start.offset, o.end.offset]);
    return ln(n, r);
  }, code(n) {
    var _a2;
    if (!((_a2 = this.options.decorations) == null ? void 0 : _a2.length)) return;
    const s = e(this), r = Array.from(n.children).filter((h) => h.type === "element" && h.tagName === "span");
    if (r.length !== s.converter.lines.length) throw new w(`Number of lines in code element (${r.length}) does not match the number of lines in the source (${s.converter.lines.length}). Failed to apply decorations.`);
    function i(h, u, f, p) {
      const d = r[h];
      let _ = "", S = -1, m = -1;
      if (u === 0 && (S = 0), f === 0 && (m = 0), f === Number.POSITIVE_INFINITY && (m = d.children.length), S === -1 || m === -1) for (let g = 0; g < d.children.length; g++) _ += ct(d.children[g]), S === -1 && _.length === u && (S = g + 1), m === -1 && _.length === f && (m = g + 1);
      if (S === -1) throw new w(`Failed to find start index for decoration ${JSON.stringify(p.start)}`);
      if (m === -1) throw new w(`Failed to find end index for decoration ${JSON.stringify(p.end)}`);
      const y = d.children.slice(S, m);
      if (!p.alwaysWrap && y.length === d.children.length) c(d, p, "line");
      else if (!p.alwaysWrap && y.length === 1 && y[0].type === "element") c(y[0], p, "token");
      else {
        const g = { type: "element", tagName: "span", properties: {}, children: y };
        c(g, p, "wrapper"), d.children.splice(S, y.length, g);
      }
    }
    function o(h, u) {
      r[h] = c(r[h], u, "line");
    }
    function c(h, u, f) {
      var _a3;
      const p = u.properties || {}, d = u.transform || ((_) => _);
      return h.tagName = u.tagName || "span", h.properties = { ...h.properties, ...p, class: h.properties.class }, ((_a3 = u.properties) == null ? void 0 : _a3.class) && ot(h, u.properties.class), h = d(h, f) || h, h;
    }
    const a = [], l = s.decorations.sort((h, u) => u.start.offset - h.start.offset || h.end.offset - u.end.offset);
    for (const h of l) {
      const { start: u, end: f } = h;
      if (u.line === f.line) i(u.line, u.character, f.character, h);
      else if (u.line < f.line) {
        i(u.line, u.character, Number.POSITIVE_INFINITY, h);
        for (let p = u.line + 1; p < f.line; p++) a.unshift(() => o(p, h));
        i(f.line, 0, f.character, h);
      }
    }
    a.forEach((h) => h());
  } };
}
function pn(t) {
  for (let e = 0; e < t.length; e++) {
    const n = t[e];
    if (n.start.offset > n.end.offset) throw new w(`Invalid decoration range: ${JSON.stringify(n.start)} - ${JSON.stringify(n.end)}`);
    for (let s = e + 1; s < t.length; s++) {
      const r = t[s], i = n.start.offset <= r.start.offset && r.start.offset < n.end.offset, o = n.start.offset < r.end.offset && r.end.offset <= n.end.offset, c = r.start.offset <= n.start.offset && n.start.offset < r.end.offset, a = r.start.offset < n.end.offset && n.end.offset <= r.end.offset;
      if (i || o || c || a) {
        if (i && o || c && a || c && n.start.offset === n.end.offset || o && r.start.offset === r.end.offset) continue;
        throw new w(`Decorations ${JSON.stringify(n.start)} and ${JSON.stringify(r.start)} intersect.`);
      }
    }
  }
}
function ct(t) {
  return t.type === "text" ? t.value : t.type === "element" ? t.children.map(ct).join("") : "";
}
const gn = [dn()];
function te(t) {
  const e = mn(t.transformers || []);
  return [...e.pre, ...e.normal, ...e.post, ...gn];
}
function mn(t) {
  const e = [], n = [], s = [];
  for (const r of t) switch (r.enforce) {
    case "pre":
      e.push(r);
      break;
    case "post":
      n.push(r);
      break;
    default:
      s.push(r);
  }
  return { pre: e, post: n, normal: s };
}
var E = ["black", "red", "green", "yellow", "blue", "magenta", "cyan", "white", "brightBlack", "brightRed", "brightGreen", "brightYellow", "brightBlue", "brightMagenta", "brightCyan", "brightWhite"], ue = { 1: "bold", 2: "dim", 3: "italic", 4: "underline", 7: "reverse", 8: "hidden", 9: "strikethrough" };
function _n(t, e) {
  const n = t.indexOf("\x1B", e);
  if (n !== -1 && t[n + 1] === "[") {
    const s = t.indexOf("m", n);
    if (s !== -1) return { sequence: t.substring(n + 2, s).split(";"), startPosition: n, position: s + 1 };
  }
  return { position: t.length };
}
function Oe(t) {
  const e = t.shift();
  if (e === "2") {
    const n = t.splice(0, 3).map((s) => Number.parseInt(s));
    return n.length !== 3 || n.some((s) => Number.isNaN(s)) ? void 0 : { type: "rgb", rgb: n };
  } else if (e === "5") {
    const n = t.shift();
    if (n) return { type: "table", index: Number(n) };
  }
}
function yn(t) {
  const e = [];
  for (; t.length > 0; ) {
    const n = t.shift();
    if (!n) continue;
    const s = Number.parseInt(n);
    if (!Number.isNaN(s)) if (s === 0) e.push({ type: "resetAll" });
    else if (s <= 9) ue[s] && e.push({ type: "setDecoration", value: ue[s] });
    else if (s <= 29) {
      const r = ue[s - 20];
      r && (e.push({ type: "resetDecoration", value: r }), r === "dim" && e.push({ type: "resetDecoration", value: "bold" }));
    } else if (s <= 37) e.push({ type: "setForegroundColor", value: { type: "named", name: E[s - 30] } });
    else if (s === 38) {
      const r = Oe(t);
      r && e.push({ type: "setForegroundColor", value: r });
    } else if (s === 39) e.push({ type: "resetForegroundColor" });
    else if (s <= 47) e.push({ type: "setBackgroundColor", value: { type: "named", name: E[s - 40] } });
    else if (s === 48) {
      const r = Oe(t);
      r && e.push({ type: "setBackgroundColor", value: r });
    } else s === 49 ? e.push({ type: "resetBackgroundColor" }) : s === 53 ? e.push({ type: "setDecoration", value: "overline" }) : s === 55 ? e.push({ type: "resetDecoration", value: "overline" }) : s >= 90 && s <= 97 ? e.push({ type: "setForegroundColor", value: { type: "named", name: E[s - 90 + 8] } }) : s >= 100 && s <= 107 && e.push({ type: "setBackgroundColor", value: { type: "named", name: E[s - 100 + 8] } });
  }
  return e;
}
function Sn() {
  let t = null, e = null, n = /* @__PURE__ */ new Set();
  return { parse(s) {
    const r = [];
    let i = 0;
    do {
      const o = _n(s, i), c = o.sequence ? s.substring(i, o.startPosition) : s.substring(i);
      if (c.length > 0 && r.push({ value: c, foreground: t, background: e, decorations: new Set(n) }), o.sequence) {
        const a = yn(o.sequence);
        for (const l of a) l.type === "resetAll" ? (t = null, e = null, n.clear()) : l.type === "resetForegroundColor" ? t = null : l.type === "resetBackgroundColor" ? e = null : l.type === "resetDecoration" && n.delete(l.value);
        for (const l of a) l.type === "setForegroundColor" ? t = l.value : l.type === "setBackgroundColor" ? e = l.value : l.type === "setDecoration" && n.add(l.value);
      }
      i = o.position;
    } while (i < s.length);
    return r;
  } };
}
var bn = { black: "#000000", red: "#bb0000", green: "#00bb00", yellow: "#bbbb00", blue: "#0000bb", magenta: "#ff00ff", cyan: "#00bbbb", white: "#eeeeee", brightBlack: "#555555", brightRed: "#ff5555", brightGreen: "#00ff00", brightYellow: "#ffff55", brightBlue: "#5555ff", brightMagenta: "#ff55ff", brightCyan: "#55ffff", brightWhite: "#ffffff" };
function Cn(t = bn) {
  function e(c) {
    return t[c];
  }
  function n(c) {
    return `#${c.map((a) => Math.max(0, Math.min(a, 255)).toString(16).padStart(2, "0")).join("")}`;
  }
  let s;
  function r() {
    if (s) return s;
    s = [];
    for (let l = 0; l < E.length; l++) s.push(e(E[l]));
    let c = [0, 95, 135, 175, 215, 255];
    for (let l = 0; l < 6; l++) for (let h = 0; h < 6; h++) for (let u = 0; u < 6; u++) s.push(n([c[l], c[h], c[u]]));
    let a = 8;
    for (let l = 0; l < 24; l++, a += 10) s.push(n([a, a, a]));
    return s;
  }
  function i(c) {
    return r()[c];
  }
  function o(c) {
    switch (c.type) {
      case "named":
        return e(c.name);
      case "rgb":
        return n(c.rgb);
      case "table":
        return i(c.index);
    }
  }
  return { value: o };
}
const wn = { black: "#000000", red: "#cd3131", green: "#0DBC79", yellow: "#E5E510", blue: "#2472C8", magenta: "#BC3FBC", cyan: "#11A8CD", white: "#E5E5E5", brightBlack: "#666666", brightRed: "#F14C4C", brightGreen: "#23D18B", brightYellow: "#F5F543", brightBlue: "#3B8EEA", brightMagenta: "#D670D6", brightCyan: "#29B8DB", brightWhite: "#FFFFFF" };
function Rn(t, e, n) {
  const s = Z(t, n), r = re(e), i = Object.fromEntries(E.map((a) => {
    var _a2;
    const l = `terminal.ansi${a[0].toUpperCase()}${a.substring(1)}`, h = (_a2 = t.colors) == null ? void 0 : _a2[l];
    return [a, h || wn[a]];
  })), o = Cn(i), c = Sn();
  return r.map((a) => c.parse(a[0]).map((l) => {
    let h, u;
    l.decorations.has("reverse") ? (h = l.background ? o.value(l.background) : t.bg, u = l.foreground ? o.value(l.foreground) : t.fg) : (h = l.foreground ? o.value(l.foreground) : t.fg, u = l.background ? o.value(l.background) : void 0), h = N(h, s), u = N(u, s), l.decorations.has("dim") && (h = kn(h));
    let f = k.None;
    return l.decorations.has("bold") && (f |= k.Bold), l.decorations.has("italic") && (f |= k.Italic), l.decorations.has("underline") && (f |= k.Underline), l.decorations.has("strikethrough") && (f |= k.Strikethrough), { content: l.value, offset: a[1], color: h, bgColor: u, fontStyle: f };
  }));
}
function kn(t) {
  const e = t.match(/#([0-9a-f]{3,8})/i);
  if (e) {
    const s = e[1];
    if (s.length === 8) {
      const r = Math.round(Number.parseInt(s.slice(6, 8), 16) / 2).toString(16).padStart(2, "0");
      return `#${s.slice(0, 6)}${r}`;
    } else {
      if (s.length === 6) return `#${s}80`;
      if (s.length === 4) {
        const r = s[0], i = s[1], o = s[2], c = s[3], a = Math.round(Number.parseInt(`${c}${c}`, 16) / 2).toString(16).padStart(2, "0");
        return `#${r}${r}${i}${i}${o}${o}${a}`;
      } else if (s.length === 3) {
        const r = s[0], i = s[1], o = s[2];
        return `#${r}${r}${i}${i}${o}${o}80`;
      }
    }
  }
  const n = t.match(/var\((--[\w-]+-ansi-[\w-]+)\)/);
  return n ? `var(${n[1]}-dim)` : t;
}
function ke(t, e, n = {}) {
  const { theme: s = t.getLoadedThemes()[0] } = n, r = t.resolveLangAlias(n.lang || "text");
  if (Ce(r) || we(s)) return re(e).map((a) => [{ content: a[0], offset: a[1] }]);
  const { theme: i, colorMap: o } = t.setTheme(s);
  if (r === "ansi") return Rn(i, e, n);
  const c = t.getLanguage(n.lang || "text");
  if (n.grammarState) {
    if (n.grammarState.lang !== c.name) throw new w(`Grammar state language "${n.grammarState.lang}" does not match highlight language "${c.name}"`);
    if (!n.grammarState.themes.includes(i.name)) throw new w(`Grammar state themes "${n.grammarState.themes}" do not contain highlight theme "${i.name}"`);
  }
  return vn(e, c, i, o, n);
}
function In(...t) {
  if (t.length === 2) return z(t[1]);
  const [e, n, s = {}] = t, { lang: r = "text", theme: i = e.getLoadedThemes()[0] } = s;
  if (Ce(r) || we(i)) throw new w("Plain language does not have grammar state");
  if (r === "ansi") throw new w("ANSI language does not have grammar state");
  const { theme: o, colorMap: c } = e.setTheme(i), a = e.getLanguage(r);
  return new B(Ie(n, a, o, c, s).stateStack, a.name, o.name);
}
function vn(t, e, n, s, r) {
  const i = Ie(t, e, n, s, r), o = new B(i.stateStack, e.name, n.name);
  return ie(i.tokens, o), i.tokens;
}
function Ie(t, e, n, s, r) {
  const i = Z(n, r), { tokenizeMaxLineLength: o = 0, tokenizeTimeLimit: c = 500 } = r, a = re(t);
  let l = r.grammarState ? fn(r.grammarState, n.name) ?? ye : r.grammarContextCode != null ? Ie(r.grammarContextCode, e, n, s, { ...r, grammarState: void 0, grammarContextCode: void 0 }).stateStack : ye, h = [];
  const u = [];
  for (let f = 0, p = a.length; f < p; f++) {
    const [d, _] = a[f];
    if (d === "") {
      h = [], u.push([]);
      continue;
    }
    if (o > 0 && d.length >= o) {
      h = [], u.push([{ content: d, offset: _, color: "", fontStyle: 0 }]);
      continue;
    }
    let S, m, y;
    r.includeExplanation && (S = e.tokenizeLine(d, l, c), m = S.tokens, y = 0);
    const g = e.tokenizeLine2(d, l, c), b = g.tokens.length / 2;
    for (let C = 0; C < b; C++) {
      const v = g.tokens[2 * C], L = C + 1 < b ? g.tokens[2 * C + 2] : d.length;
      if (v === L) continue;
      const Te = g.tokens[2 * C + 1], dt = N(s[$.getForeground(Te)], i), pt = $.getFontStyle(Te), oe = { content: d.substring(v, L), offset: _ + v, color: dt, fontStyle: pt };
      if (r.includeExplanation) {
        const Ae = [];
        if (r.includeExplanation !== "scopeName") for (const A of n.settings) {
          let x;
          switch (typeof A.scope) {
            case "string":
              x = A.scope.split(/,/).map((ae) => ae.trim());
              break;
            case "object":
              x = A.scope;
              break;
            default:
              continue;
          }
          Ae.push({ settings: A, selectors: x.map((ae) => ae.split(/ /)) });
        }
        oe.explanation = [];
        let Ne = 0;
        for (; v + Ne < L; ) {
          const A = m[y], x = d.substring(A.startIndex, A.endIndex);
          Ne += x.length, oe.explanation.push({ content: x, scopes: r.includeExplanation === "scopeName" ? Tn(A.scopes) : An(Ae, A.scopes) }), y += 1;
        }
      }
      h.push(oe);
    }
    u.push(h), h = [], l = g.ruleStack;
  }
  return { tokens: u, stateStack: l };
}
function Tn(t) {
  return t.map((e) => ({ scopeName: e }));
}
function An(t, e) {
  const n = [];
  for (let s = 0, r = e.length; s < r; s++) {
    const i = e[s];
    n[s] = { scopeName: i, themeMatches: Ln(t, i, e.slice(0, s)) };
  }
  return n;
}
function je(t, e) {
  return t === e || e.substring(0, t.length) === t && e[t.length] === ".";
}
function Nn(t, e, n) {
  if (!je(t[t.length - 1], e)) return false;
  let s = t.length - 2, r = n.length - 1;
  for (; s >= 0 && r >= 0; ) je(t[s], n[r]) && (s -= 1), r -= 1;
  return s === -1;
}
function Ln(t, e, n) {
  const s = [];
  for (const { selectors: r, settings: i } of t) for (const o of r) if (Nn(o, e, n)) {
    s.push(i);
    break;
  }
  return s;
}
function lt(t, e, n) {
  const s = Object.entries(n.themes).filter((a) => a[1]).map((a) => ({ color: a[0], theme: a[1] })), r = s.map((a) => {
    const l = ke(t, e, { ...n, theme: a.theme }), h = z(l), u = typeof a.theme == "string" ? a.theme : a.theme.name;
    return { tokens: l, state: h, theme: u };
  }), i = Pn(...r.map((a) => a.tokens)), o = i[0].map((a, l) => a.map((h, u) => {
    const f = { content: h.content, variants: {}, offset: h.offset };
    return "includeExplanation" in n && n.includeExplanation && (f.explanation = h.explanation), i.forEach((p, d) => {
      const { content: _, explanation: S, offset: m, ...y } = p[l][u];
      f.variants[s[d].color] = y;
    }), f;
  })), c = r[0].state ? new B(Object.fromEntries(r.map((a) => {
    var _a2;
    return [a.theme, (_a2 = a.state) == null ? void 0 : _a2.getInternalStack(a.theme)];
  })), r[0].state.lang) : void 0;
  return c && ie(o, c), o;
}
function Pn(...t) {
  const e = t.map(() => []), n = t.length;
  for (let s = 0; s < t[0].length; s++) {
    const r = t.map((a) => a[s]), i = e.map(() => []);
    e.forEach((a, l) => a.push(i[l]));
    const o = r.map(() => 0), c = r.map((a) => a[0]);
    for (; c.every((a) => a); ) {
      const a = Math.min(...c.map((l) => l.content.length));
      for (let l = 0; l < n; l++) {
        const h = c[l];
        h.content.length === a ? (i[l].push(h), o[l] += 1, c[l] = r[l][o[l]]) : (i[l].push({ ...h, content: h.content.slice(0, a) }), c[l] = { ...h, content: h.content.slice(a), offset: h.offset + a });
      }
    }
  }
  return e;
}
function ne(t, e, n) {
  let s, r, i, o, c, a;
  if ("themes" in n) {
    const { defaultColor: l = "light", cssVariablePrefix: h = "--shiki-", colorsRendering: u = "css-vars" } = n, f = Object.entries(n.themes).filter((m) => m[1]).map((m) => ({ color: m[0], theme: m[1] })).sort((m, y) => m.color === l ? -1 : y.color === l ? 1 : 0);
    if (f.length === 0) throw new w("`themes` option must not be empty");
    const p = lt(t, e, n);
    if (a = z(p), l && Re !== l && !f.find((m) => m.color === l)) throw new w(`\`themes\` option must contain the defaultColor key \`${l}\``);
    const d = f.map((m) => t.getTheme(m.theme)), _ = f.map((m) => m.color);
    i = p.map((m) => m.map((y) => hn(y, _, h, l, u))), a && ie(i, a);
    const S = f.map((m) => Z(m.theme, n));
    r = We(f, d, S, h, l, "fg", u), s = We(f, d, S, h, l, "bg", u), o = `shiki-themes ${d.map((m) => m.name).join(" ")}`, c = l ? void 0 : [r, s].join(";");
  } else if ("theme" in n) {
    const l = Z(n.theme, n);
    i = ke(t, e, n);
    const h = t.getTheme(n.theme);
    s = N(h.bg, l), r = N(h.fg, l), o = h.name, a = z(i);
  } else throw new w("Invalid options, either `theme` or `themes` must be provided");
  return { tokens: i, fg: r, bg: s, themeName: o, rootStyle: c, grammarState: a };
}
function We(t, e, n, s, r, i, o) {
  return t.map((c, a) => {
    const l = N(e[a][i], n[a]) || "inherit", h = `${s + c.color}${i === "bg" ? "-bg" : ""}:${l}`;
    if (a === 0 && r) {
      if (r === Re && t.length > 1) {
        const u = t.findIndex((_) => _.color === "light"), f = t.findIndex((_) => _.color === "dark");
        if (u === -1 || f === -1) throw new w('When using `defaultColor: "light-dark()"`, you must provide both `light` and `dark` themes');
        const p = N(e[u][i], n[u]) || "inherit", d = N(e[f][i], n[f]) || "inherit";
        return `light-dark(${p}, ${d});${h}`;
      }
      return l;
    }
    return o === "css-vars" ? h : null;
  }).filter((c) => !!c).join(";");
}
function se(t, e, n, s = { meta: {}, options: n, codeToHast: (r, i) => se(t, r, i), codeToTokens: (r, i) => ne(t, r, i) }) {
  var _a2, _b2;
  let r = e;
  for (const d of te(n)) r = ((_a2 = d.preprocess) == null ? void 0 : _a2.call(s, r, n)) || r;
  let { tokens: i, fg: o, bg: c, themeName: a, rootStyle: l, grammarState: h } = ne(t, r, n);
  const { mergeWhitespaces: u = true, mergeSameStyleTokens: f = false } = n;
  u === true ? i = xn(i) : u === "never" && (i = Gn(i)), f && (i = $n(i));
  const p = { ...s, get source() {
    return r;
  } };
  for (const d of te(n)) i = ((_b2 = d.tokens) == null ? void 0 : _b2.call(p, i)) || i;
  return En(i, { ...n, fg: o, bg: c, themeName: a, rootStyle: n.rootStyle === false ? false : n.rootStyle ?? l }, p, h);
}
function En(t, e, n, s = z(t)) {
  var _a2, _b2, _c, _d;
  const r = te(e), i = [], o = { type: "root", children: [] }, { structure: c = "classic", tabindex: a = "0" } = e, l = { class: `shiki ${e.themeName || ""}` };
  e.rootStyle !== false && (e.rootStyle != null ? l.style = e.rootStyle : l.style = `background-color:${e.bg};color:${e.fg}`), a !== false && a != null && (l.tabindex = a.toString());
  for (const [_, S] of Object.entries(e.meta || {})) _.startsWith("_") || (l[_] = S);
  let h = { type: "element", tagName: "pre", properties: l, children: [], data: e.data }, u = { type: "element", tagName: "code", properties: {}, children: i };
  const f = [], p = { ...n, structure: c, addClassToHast: ot, get source() {
    return n.source;
  }, get tokens() {
    return t;
  }, get options() {
    return e;
  }, get root() {
    return o;
  }, get pre() {
    return h;
  }, get code() {
    return u;
  }, get lines() {
    return f;
  } };
  if (t.forEach((_, S) => {
    var _a3, _b3;
    S && (c === "inline" ? o.children.push({ type: "element", tagName: "br", properties: {}, children: [] }) : c === "classic" && i.push({ type: "text", value: `
` }));
    let m = { type: "element", tagName: "span", properties: { class: "line" }, children: [] }, y = 0;
    for (const g of _) {
      let b = { type: "element", tagName: "span", properties: { ...g.htmlAttrs }, children: [{ type: "text", value: g.content }] };
      const C = Se(g.htmlStyle || ee(g));
      C && (b.properties.style = C);
      for (const v of r) b = ((_a3 = v == null ? void 0 : v.span) == null ? void 0 : _a3.call(p, b, S + 1, y, m, g)) || b;
      c === "inline" ? o.children.push(b) : c === "classic" && m.children.push(b), y += g.content.length;
    }
    if (c === "classic") {
      for (const g of r) m = ((_b3 = g == null ? void 0 : g.line) == null ? void 0 : _b3.call(p, m, S + 1)) || m;
      f.push(m), i.push(m);
    } else c === "inline" && f.push(m);
  }), c === "classic") {
    for (const _ of r) u = ((_a2 = _ == null ? void 0 : _.code) == null ? void 0 : _a2.call(p, u)) || u;
    h.children.push(u);
    for (const _ of r) h = ((_b2 = _ == null ? void 0 : _.pre) == null ? void 0 : _b2.call(p, h)) || h;
    o.children.push(h);
  } else if (c === "inline") {
    const _ = [];
    let S = { type: "element", tagName: "span", properties: { class: "line" }, children: [] };
    for (const g of o.children) g.type === "element" && g.tagName === "br" ? (_.push(S), S = { type: "element", tagName: "span", properties: { class: "line" }, children: [] }) : (g.type === "element" || g.type === "text") && S.children.push(g);
    _.push(S);
    let y = { type: "element", tagName: "code", properties: {}, children: _ };
    for (const g of r) y = ((_c = g == null ? void 0 : g.code) == null ? void 0 : _c.call(p, y)) || y;
    o.children = [];
    for (let g = 0; g < y.children.length; g++) {
      g > 0 && o.children.push({ type: "element", tagName: "br", properties: {}, children: [] });
      const b = y.children[g];
      b.type === "element" && o.children.push(...b.children);
    }
  }
  let d = o;
  for (const _ of r) d = ((_d = _ == null ? void 0 : _.root) == null ? void 0 : _d.call(p, d)) || d;
  return s && ie(d, s), d;
}
function xn(t) {
  return t.map((e) => {
    const n = [];
    let s = "", r;
    return e.forEach((i, o) => {
      const a = !(i.fontStyle && (i.fontStyle & k.Underline || i.fontStyle & k.Strikethrough));
      a && i.content.match(/^\s+$/) && e[o + 1] ? (r === void 0 && (r = i.offset), s += i.content) : s ? (a ? n.push({ ...i, offset: r, content: s + i.content }) : n.push({ content: s, offset: r }, i), r = void 0, s = "") : n.push(i);
    }), n;
  });
}
function Gn(t) {
  return t.map((e) => e.flatMap((n) => {
    if (n.content.match(/^\s+$/)) return n;
    const s = n.content.match(/^(\s*)(.*?)(\s*)$/);
    if (!s) return n;
    const [, r, i, o] = s;
    if (!r && !o) return n;
    const c = [{ ...n, offset: n.offset + r.length, content: i }];
    return r && c.unshift({ content: r, offset: n.offset }), o && c.push({ content: o, offset: n.offset + r.length + i.length }), c;
  }));
}
function $n(t) {
  return t.map((e) => {
    const n = [];
    for (const s of e) {
      if (n.length === 0) {
        n.push({ ...s });
        continue;
      }
      const r = n[n.length - 1], i = Se(r.htmlStyle || ee(r)), o = Se(s.htmlStyle || ee(s)), c = r.fontStyle && (r.fontStyle & k.Underline || r.fontStyle & k.Strikethrough), a = s.fontStyle && (s.fontStyle & k.Underline || s.fontStyle & k.Strikethrough);
      !c && !a && i === o ? r.content += s.content : n.push({ ...s });
    }
    return n;
  });
}
const Bn = gt;
function Mn(t, e, n) {
  var _a2;
  const s = { meta: {}, options: n, codeToHast: (i, o) => se(t, i, o), codeToTokens: (i, o) => ne(t, i, o) };
  let r = Bn(se(t, e, n, s));
  for (const i of te(n)) r = ((_a2 = i.postprocess) == null ? void 0 : _a2.call(s, r, n)) || r;
  return r;
}
const De = { light: "#333333", dark: "#bbbbbb" }, Fe = { light: "#fffffe", dark: "#1e1e1e" }, ze = "__shiki_resolved";
function ve(t) {
  var _a2, _b2, _c, _d, _e2;
  if (t == null ? void 0 : t[ze]) return t;
  const e = { ...t };
  e.tokenColors && !e.settings && (e.settings = e.tokenColors, delete e.tokenColors), e.type || (e.type = "dark"), e.colorReplacements = { ...e.colorReplacements }, e.settings || (e.settings = []);
  let { bg: n, fg: s } = e;
  if (!n || !s) {
    const c = e.settings ? e.settings.find((a) => !a.name && !a.scope) : void 0;
    ((_a2 = c == null ? void 0 : c.settings) == null ? void 0 : _a2.foreground) && (s = c.settings.foreground), ((_b2 = c == null ? void 0 : c.settings) == null ? void 0 : _b2.background) && (n = c.settings.background), !s && ((_c = e == null ? void 0 : e.colors) == null ? void 0 : _c["editor.foreground"]) && (s = e.colors["editor.foreground"]), !n && ((_d = e == null ? void 0 : e.colors) == null ? void 0 : _d["editor.background"]) && (n = e.colors["editor.background"]), s || (s = e.type === "light" ? De.light : De.dark), n || (n = e.type === "light" ? Fe.light : Fe.dark), e.fg = s, e.bg = n;
  }
  e.settings[0] && e.settings[0].settings && !e.settings[0].scope || e.settings.unshift({ settings: { foreground: e.fg, background: e.bg } });
  let r = 0;
  const i = /* @__PURE__ */ new Map();
  function o(c) {
    var _a3;
    if (i.has(c)) return i.get(c);
    r += 1;
    const a = `#${r.toString(16).padStart(8, "0").toLowerCase()}`;
    return ((_a3 = e.colorReplacements) == null ? void 0 : _a3[`#${a}`]) ? o(c) : (i.set(c, a), a);
  }
  e.settings = e.settings.map((c) => {
    var _a3, _b3;
    const a = ((_a3 = c.settings) == null ? void 0 : _a3.foreground) && !c.settings.foreground.startsWith("#"), l = ((_b3 = c.settings) == null ? void 0 : _b3.background) && !c.settings.background.startsWith("#");
    if (!a && !l) return c;
    const h = { ...c, settings: { ...c.settings } };
    if (a) {
      const u = o(c.settings.foreground);
      e.colorReplacements[u] = c.settings.foreground, h.settings.foreground = u;
    }
    if (l) {
      const u = o(c.settings.background);
      e.colorReplacements[u] = c.settings.background, h.settings.background = u;
    }
    return h;
  });
  for (const c of Object.keys(e.colors || {})) if ((c === "editor.foreground" || c === "editor.background" || c.startsWith("terminal.ansi")) && !((_e2 = e.colors[c]) == null ? void 0 : _e2.startsWith("#"))) {
    const a = o(e.colors[c]);
    e.colorReplacements[a] = e.colors[c], e.colors[c] = a;
  }
  return Object.defineProperty(e, ze, { enumerable: false, writable: false, value: true }), e;
}
async function ht(t) {
  return Array.from(new Set((await Promise.all(t.filter((e) => !sn(e)).map(async (e) => await it(e).then((n) => Array.isArray(n) ? n : [n])))).flat()));
}
async function ut(t) {
  return (await Promise.all(t.map(async (n) => rn(n) ? null : ve(await it(n))))).filter((n) => !!n);
}
let On = 3;
function jn(t, e = 3) {
  e > On || console.trace(`[SHIKI DEPRECATE]: ${t}`);
}
class G extends Error {
  constructor(e) {
    super(e), this.name = "ShikiError";
  }
}
function ft(t, e) {
  if (!e) return t;
  if (e[t]) {
    const n = /* @__PURE__ */ new Set([t]);
    for (; e[t]; ) {
      if (t = e[t], n.has(t)) throw new G(`Circular alias \`${Array.from(n).join(" -> ")} -> ${t}\``);
      n.add(t);
    }
  }
  return t;
}
class Wn extends tn {
  constructor(e, n, s, r = {}) {
    super(e);
    __publicField(this, "_resolvedThemes", /* @__PURE__ */ new Map());
    __publicField(this, "_resolvedGrammars", /* @__PURE__ */ new Map());
    __publicField(this, "_langMap", /* @__PURE__ */ new Map());
    __publicField(this, "_langGraph", /* @__PURE__ */ new Map());
    __publicField(this, "_textmateThemeCache", /* @__PURE__ */ new WeakMap());
    __publicField(this, "_loadedThemesCache", null);
    __publicField(this, "_loadedLanguagesCache", null);
    this._resolver = e, this._themes = n, this._langs = s, this._alias = r, this._themes.map((i) => this.loadTheme(i)), this.loadLanguages(this._langs);
  }
  getTheme(e) {
    return typeof e == "string" ? this._resolvedThemes.get(e) : this.loadTheme(e);
  }
  loadTheme(e) {
    const n = ve(e);
    return n.name && (this._resolvedThemes.set(n.name, n), this._loadedThemesCache = null), n;
  }
  getLoadedThemes() {
    return this._loadedThemesCache || (this._loadedThemesCache = [...this._resolvedThemes.keys()]), this._loadedThemesCache;
  }
  setTheme(e) {
    let n = this._textmateThemeCache.get(e);
    n || (n = V.createFromRawTheme(e), this._textmateThemeCache.set(e, n)), this._syncRegistry.setTheme(n);
  }
  getGrammar(e) {
    return e = ft(e, this._alias), this._resolvedGrammars.get(e);
  }
  loadLanguage(e) {
    var _a2, _b2, _c, _d;
    if (this.getGrammar(e.name)) return;
    const n = new Set([...this._langMap.values()].filter((i) => {
      var _a3;
      return (_a3 = i.embeddedLangsLazy) == null ? void 0 : _a3.includes(e.name);
    }));
    this._resolver.addLanguage(e);
    const s = { balancedBracketSelectors: e.balancedBracketSelectors || ["*"], unbalancedBracketSelectors: e.unbalancedBracketSelectors || [] };
    this._syncRegistry._rawGrammars.set(e.scopeName, e);
    const r = this.loadGrammarWithConfiguration(e.scopeName, 1, s);
    if (r.name = e.name, this._resolvedGrammars.set(e.name, r), e.aliases && e.aliases.forEach((i) => {
      this._alias[i] = e.name;
    }), this._loadedLanguagesCache = null, n.size) for (const i of n) this._resolvedGrammars.delete(i.name), this._loadedLanguagesCache = null, (_b2 = (_a2 = this._syncRegistry) == null ? void 0 : _a2._injectionGrammars) == null ? void 0 : _b2.delete(i.scopeName), (_d = (_c = this._syncRegistry) == null ? void 0 : _c._grammars) == null ? void 0 : _d.delete(i.scopeName), this.loadLanguage(this._langMap.get(i.name));
  }
  dispose() {
    super.dispose(), this._resolvedThemes.clear(), this._resolvedGrammars.clear(), this._langMap.clear(), this._langGraph.clear(), this._loadedThemesCache = null;
  }
  loadLanguages(e) {
    for (const r of e) this.resolveEmbeddedLanguages(r);
    const n = Array.from(this._langGraph.entries()), s = n.filter(([r, i]) => !i);
    if (s.length) {
      const r = n.filter(([i, o]) => {
        var _a2;
        return o ? (_a2 = o.embeddedLanguages || o.embeddedLangs) == null ? void 0 : _a2.some((a) => s.map(([l]) => l).includes(a)) : false;
      }).filter((i) => !s.includes(i));
      throw new G(`Missing languages ${s.map(([i]) => `\`${i}\``).join(", ")}, required by ${r.map(([i]) => `\`${i}\``).join(", ")}`);
    }
    for (const [r, i] of n) this._resolver.addLanguage(i);
    for (const [r, i] of n) this.loadLanguage(i);
  }
  getLoadedLanguages() {
    return this._loadedLanguagesCache || (this._loadedLanguagesCache = [.../* @__PURE__ */ new Set([...this._resolvedGrammars.keys(), ...Object.keys(this._alias)])]), this._loadedLanguagesCache;
  }
  resolveEmbeddedLanguages(e) {
    this._langMap.set(e.name, e), this._langGraph.set(e.name, e);
    const n = e.embeddedLanguages ?? e.embeddedLangs;
    if (n) for (const s of n) this._langGraph.set(s, this._langMap.get(s));
  }
}
class Dn {
  constructor(e, n) {
    __publicField(this, "_langs", /* @__PURE__ */ new Map());
    __publicField(this, "_scopeToLang", /* @__PURE__ */ new Map());
    __publicField(this, "_injections", /* @__PURE__ */ new Map());
    __publicField(this, "_onigLib");
    this._onigLib = { createOnigScanner: (s) => e.createScanner(s), createOnigString: (s) => e.createString(s) }, n.forEach((s) => this.addLanguage(s));
  }
  get onigLib() {
    return this._onigLib;
  }
  getLangRegistration(e) {
    return this._langs.get(e);
  }
  loadGrammar(e) {
    return this._scopeToLang.get(e);
  }
  addLanguage(e) {
    this._langs.set(e.name, e), e.aliases && e.aliases.forEach((n) => {
      this._langs.set(n, e);
    }), this._scopeToLang.set(e.scopeName, e), e.injectTo && e.injectTo.forEach((n) => {
      this._injections.get(n) || this._injections.set(n, []), this._injections.get(n).push(e.scopeName);
    });
  }
  getInjections(e) {
    const n = e.split(".");
    let s = [];
    for (let r = 1; r <= n.length; r++) {
      const i = n.slice(0, r).join(".");
      s = [...s, ...this._injections.get(i) || []];
    }
    return s;
  }
}
let M = 0;
function Fn(t) {
  M += 1, t.warnings !== false && M >= 10 && M % 10 === 0 && console.warn(`[Shiki] ${M} instances have been created. Shiki is supposed to be used as a singleton, consider refactoring your code to cache your highlighter instance; Or call \`highlighter.dispose()\` to release unused instances.`);
  let e = false;
  if (!t.engine) throw new G("`engine` option is required for synchronous mode");
  const n = (t.langs || []).flat(1), s = (t.themes || []).flat(1).map(ve), r = new Dn(t.engine, n), i = new Wn(r, s, n, t.langAlias);
  let o;
  function c(g) {
    return ft(g, t.langAlias);
  }
  function a(g) {
    m();
    const b = i.getGrammar(typeof g == "string" ? g : g.name);
    if (!b) throw new G(`Language \`${g}\` not found, you may need to load it first`);
    return b;
  }
  function l(g) {
    if (g === "none") return { bg: "", fg: "", name: "none", settings: [], type: "dark" };
    m();
    const b = i.getTheme(g);
    if (!b) throw new G(`Theme \`${g}\` not found, you may need to load it first`);
    return b;
  }
  function h(g) {
    m();
    const b = l(g);
    o !== g && (i.setTheme(b), o = g);
    const C = i.getColorMap();
    return { theme: b, colorMap: C };
  }
  function u() {
    return m(), i.getLoadedThemes();
  }
  function f() {
    return m(), i.getLoadedLanguages();
  }
  function p(...g) {
    m(), i.loadLanguages(g.flat(1));
  }
  async function d(...g) {
    return p(await ht(g));
  }
  function _(...g) {
    m();
    for (const b of g.flat(1)) i.loadTheme(b);
  }
  async function S(...g) {
    return m(), _(await ut(g));
  }
  function m() {
    if (e) throw new G("Shiki instance has been disposed");
  }
  function y() {
    e || (e = true, i.dispose(), M -= 1);
  }
  return { setTheme: h, getTheme: l, getLanguage: a, getLoadedThemes: u, getLoadedLanguages: f, resolveLangAlias: c, loadLanguage: d, loadLanguageSync: p, loadTheme: S, loadThemeSync: _, dispose: y, [Symbol.dispose]: y };
}
async function zn(t) {
  t.engine || jn("`engine` option is required. Use `createOnigurumaEngine` or `createJavaScriptRegexEngine` to create an engine.");
  const [e, n, s] = await Promise.all([ut(t.themes || []), ht(t.langs || []), t.engine]);
  return Fn({ ...t, themes: e, langs: n, engine: s });
}
async function Qn(t) {
  const e = await zn(t);
  return { getLastGrammarState: (...n) => In(e, ...n), codeToTokensBase: (n, s) => ke(e, n, s), codeToTokensWithThemes: (n, s) => lt(e, n, s), codeToTokens: (n, s) => ne(e, n, s), codeToHast: (n, s) => se(e, n, s), codeToHtml: (n, s) => Mn(e, n, s), getBundledLanguages: () => ({}), getBundledThemes: () => ({}), ...e, getInternalContext: () => e };
}
export {
  w as ShikiError,
  ot as addClassToHast,
  N as applyColorReplacements,
  se as codeToHast,
  Mn as codeToHtml,
  ne as codeToTokens,
  ke as codeToTokensBase,
  lt as codeToTokensWithThemes,
  Qn as createHighlighterCore,
  on as createPositionConverter,
  zn as createShikiInternal,
  Fn as createShikiInternalSync,
  hn as flatTokenVariants,
  ee as getTokenStyleObject,
  Bn as hastToHtml,
  we as isNoneTheme,
  Ce as isPlainLang,
  sn as isSpecialLang,
  rn as isSpecialTheme,
  it as normalizeGetter,
  ve as normalizeTheme,
  Z as resolveColorReplacements,
  re as splitLines,
  cn as splitToken,
  ln as splitTokens,
  Se as stringifyTokenStyle,
  nn as toArray,
  Rn as tokenizeAnsiWithTheme,
  vn as tokenizeWithTheme,
  En as tokensToHast,
  dn as transformerDecorations,
  jn as warnDeprecated
};
