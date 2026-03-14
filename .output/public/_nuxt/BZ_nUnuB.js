const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Bhl0HI7y.js","./DaWZu8wl.js","./CN1p5ccG.js","./entry.DV2Z0fTU.css","./exGce14e.js","./BiwnguJD.js","./iik6CYzq.js","./QyzFQwww.js","./9jc539TB.js"])))=>i.map(i=>d[i]);
import { b2 as en, aj as Pr, E as Ln, co as Oc } from "#entry";
import { Y as ut, i as ws, a as Tt, b as Rs, s as Bs, S as ae, m as bt, o as ii, p as ui, c as si, M as wc, d as st, e as Rc, f as Bc, g as mn, h as ai, j as Wi, l as Pc, N as Gi, D as Qi, k as In, n as Mc, q as Uc, A as Ps, r as Hc, t as nt, P as tn, u as En, v as At, w as Xi, x as vc, y as zc, z as Yc, B as Ms, L as qc, C as $c, E as jc, F as Vc, G as Kc, __tla as __tla_0 } from "./exGce14e.js";
import { z as oi, a as Wc, s as Gc, b as Ji, p as Mr, d as Zi, e as Qc, f as Xc, h as Jc, w as jt, t as Zc, c as el } from "./QyzFQwww.js";
import { n as Fn, T as tl, f as nl, i as rl, a as il, b as ul, u as sl } from "./iik6CYzq.js";
import { f as ci, n as eu, a as zn, s as sn, h as al } from "./BiwnguJD.js";
import { g as ol } from "./DaWZu8wl.js";
let Ei, W, Za, hm, uE, TA, gp, K, gA, oA, sE, pn, gi, rt;
let __tla = Promise.all([
  (() => {
    try {
      return __tla_0;
    } catch {
    }
  })()
]).then(async () => {
  function tu(e) {
    if (e) throw e;
  }
  var sr, nu;
  function cl() {
    if (nu) return sr;
    nu = 1;
    var e = Object.prototype.hasOwnProperty, t = Object.prototype.toString, n = Object.defineProperty, r = Object.getOwnPropertyDescriptor, i = function(l) {
      return typeof Array.isArray == "function" ? Array.isArray(l) : t.call(l) === "[object Array]";
    }, u = function(l) {
      if (!l || t.call(l) !== "[object Object]") return false;
      var h = e.call(l, "constructor"), f = l.constructor && l.constructor.prototype && e.call(l.constructor.prototype, "isPrototypeOf");
      if (l.constructor && !h && !f) return false;
      var d;
      for (d in l) ;
      return typeof d > "u" || e.call(l, d);
    }, s = function(l, h) {
      n && h.name === "__proto__" ? n(l, h.name, {
        enumerable: true,
        configurable: true,
        value: h.newValue,
        writable: true
      }) : l[h.name] = h.newValue;
    }, a = function(l, h) {
      if (h === "__proto__") if (e.call(l, h)) {
        if (r) return r(l, h).value;
      } else return;
      return l[h];
    };
    return sr = function o() {
      var l, h, f, d, p, E, m = arguments[0], D = 1, C = arguments.length, x = false;
      for (typeof m == "boolean" && (x = m, m = arguments[1] || {}, D = 2), (m == null || typeof m != "object" && typeof m != "function") && (m = {}); D < C; ++D) if (l = arguments[D], l != null) for (h in l) f = a(m, h), d = a(l, h), m !== d && (x && d && (u(d) || (p = i(d))) ? (p ? (p = false, E = f && i(f) ? f : []) : E = f && u(f) ? f : {}, s(m, {
        name: h,
        newValue: o(x, E, d)
      })) : typeof d < "u" && s(m, {
        name: h,
        newValue: d
      }));
      return m;
    }, sr;
  }
  var ll = cl();
  const ar = ol(ll);
  gA = function() {
  };
  function Ur(e) {
    if (typeof e != "object" || e === null) return false;
    const t = Object.getPrototypeOf(e);
    return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
  }
  function fl() {
    const e = [], t = {
      run: n,
      use: r
    };
    return t;
    function n(...i) {
      let u = -1;
      const s = i.pop();
      if (typeof s != "function") throw new TypeError("Expected function as last argument, not " + s);
      a(null, ...i);
      function a(o, ...l) {
        const h = e[++u];
        let f = -1;
        if (o) {
          s(o);
          return;
        }
        for (; ++f < i.length; ) (l[f] === null || l[f] === void 0) && (l[f] = i[f]);
        i = l, h ? hl(h, a)(...l) : s(null, ...l);
      }
    }
    function r(i) {
      if (typeof i != "function") throw new TypeError("Expected `middelware` to be a function, not " + i);
      return e.push(i), t;
    }
  }
  function hl(e, t) {
    let n;
    return r;
    function r(...s) {
      const a = e.length > s.length;
      let o;
      a && s.push(i);
      try {
        o = e.apply(this, s);
      } catch (l) {
        const h = l;
        if (a && n) throw h;
        return i(h);
      }
      a || (o && o.then && typeof o.then == "function" ? o.then(u, i) : o instanceof Error ? i(o) : u(o));
    }
    function i(s, ...a) {
      n || (n = true, t(s, ...a));
    }
    function u(s) {
      i(null, s);
    }
  }
  function Vt(e) {
    return !e || typeof e != "object" ? "" : "position" in e || "type" in e ? ru(e.position) : "start" in e || "end" in e ? ru(e) : "line" in e || "column" in e ? Hr(e) : "";
  }
  function Hr(e) {
    return iu(e && e.line) + ":" + iu(e && e.column);
  }
  function ru(e) {
    return Hr(e && e.start) + "-" + Hr(e && e.end);
  }
  function iu(e) {
    return e && typeof e == "number" ? e : 1;
  }
  class Ce extends Error {
    constructor(t, n, r) {
      super(), typeof n == "string" && (r = n, n = void 0);
      let i = "", u = {}, s = false;
      if (n && ("line" in n && "column" in n ? u = {
        place: n
      } : "start" in n && "end" in n ? u = {
        place: n
      } : "type" in n ? u = {
        ancestors: [
          n
        ],
        place: n.position
      } : u = {
        ...n
      }), typeof t == "string" ? i = t : !u.cause && t && (s = true, i = t.message, u.cause = t), !u.ruleId && !u.source && typeof r == "string") {
        const o = r.indexOf(":");
        o === -1 ? u.ruleId = r : (u.source = r.slice(0, o), u.ruleId = r.slice(o + 1));
      }
      if (!u.place && u.ancestors && u.ancestors) {
        const o = u.ancestors[u.ancestors.length - 1];
        o && (u.place = o.position);
      }
      const a = u.place && "start" in u.place ? u.place.start : u.place;
      this.ancestors = u.ancestors || void 0, this.cause = u.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file = "", this.message = i, this.line = a ? a.line : void 0, this.name = Vt(u.place) || "1:1", this.place = u.place || void 0, this.reason = this.message, this.ruleId = u.ruleId || void 0, this.source = u.source || void 0, this.stack = s && u.cause && typeof u.cause.stack == "string" ? u.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
    }
  }
  Ce.prototype.file = "";
  Ce.prototype.name = "";
  Ce.prototype.reason = "";
  Ce.prototype.message = "";
  Ce.prototype.stack = "";
  Ce.prototype.column = void 0;
  Ce.prototype.line = void 0;
  Ce.prototype.ancestors = void 0;
  Ce.prototype.cause = void 0;
  Ce.prototype.fatal = void 0;
  Ce.prototype.place = void 0;
  Ce.prototype.ruleId = void 0;
  Ce.prototype.source = void 0;
  const Oe = {
    basename: pl,
    dirname: dl,
    extname: ml,
    join: El,
    sep: "/"
  };
  function pl(e, t) {
    if (t !== void 0 && typeof t != "string") throw new TypeError('"ext" argument must be a string');
    an(e);
    let n = 0, r = -1, i = e.length, u;
    if (t === void 0 || t.length === 0 || t.length > e.length) {
      for (; i--; ) if (e.codePointAt(i) === 47) {
        if (u) {
          n = i + 1;
          break;
        }
      } else r < 0 && (u = true, r = i + 1);
      return r < 0 ? "" : e.slice(n, r);
    }
    if (t === e) return "";
    let s = -1, a = t.length - 1;
    for (; i--; ) if (e.codePointAt(i) === 47) {
      if (u) {
        n = i + 1;
        break;
      }
    } else s < 0 && (u = true, s = i + 1), a > -1 && (e.codePointAt(i) === t.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = s));
    return n === r ? r = s : r < 0 && (r = e.length), e.slice(n, r);
  }
  function dl(e) {
    if (an(e), e.length === 0) return ".";
    let t = -1, n = e.length, r;
    for (; --n; ) if (e.codePointAt(n) === 47) {
      if (r) {
        t = n;
        break;
      }
    } else r || (r = true);
    return t < 0 ? e.codePointAt(0) === 47 ? "/" : "." : t === 1 && e.codePointAt(0) === 47 ? "//" : e.slice(0, t);
  }
  function ml(e) {
    an(e);
    let t = e.length, n = -1, r = 0, i = -1, u = 0, s;
    for (; t--; ) {
      const a = e.codePointAt(t);
      if (a === 47) {
        if (s) {
          r = t + 1;
          break;
        }
        continue;
      }
      n < 0 && (s = true, n = t + 1), a === 46 ? i < 0 ? i = t : u !== 1 && (u = 1) : i > -1 && (u = -1);
    }
    return i < 0 || n < 0 || u === 0 || u === 1 && i === n - 1 && i === r + 1 ? "" : e.slice(i, n);
  }
  function El(...e) {
    let t = -1, n;
    for (; ++t < e.length; ) an(e[t]), e[t] && (n = n === void 0 ? e[t] : n + "/" + e[t]);
    return n === void 0 ? "." : gl(n);
  }
  function gl(e) {
    an(e);
    const t = e.codePointAt(0) === 47;
    let n = bl(e, !t);
    return n.length === 0 && !t && (n = "."), n.length > 0 && e.codePointAt(e.length - 1) === 47 && (n += "/"), t ? "/" + n : n;
  }
  function bl(e, t) {
    let n = "", r = 0, i = -1, u = 0, s = -1, a, o;
    for (; ++s <= e.length; ) {
      if (s < e.length) a = e.codePointAt(s);
      else {
        if (a === 47) break;
        a = 47;
      }
      if (a === 47) {
        if (!(i === s - 1 || u === 1)) if (i !== s - 1 && u === 2) {
          if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
            if (n.length > 2) {
              if (o = n.lastIndexOf("/"), o !== n.length - 1) {
                o < 0 ? (n = "", r = 0) : (n = n.slice(0, o), r = n.length - 1 - n.lastIndexOf("/")), i = s, u = 0;
                continue;
              }
            } else if (n.length > 0) {
              n = "", r = 0, i = s, u = 0;
              continue;
            }
          }
          t && (n = n.length > 0 ? n + "/.." : "..", r = 2);
        } else n.length > 0 ? n += "/" + e.slice(i + 1, s) : n = e.slice(i + 1, s), r = s - i - 1;
        i = s, u = 0;
      } else a === 46 && u > -1 ? u++ : u = -1;
    }
    return n;
  }
  function an(e) {
    if (typeof e != "string") throw new TypeError("Path must be a string. Received " + JSON.stringify(e));
  }
  const Tl = {
    cwd: Al
  };
  function Al() {
    return "/";
  }
  function vr(e) {
    return !!(e !== null && typeof e == "object" && "href" in e && e.href && "protocol" in e && e.protocol && e.auth === void 0);
  }
  function Cl(e) {
    if (typeof e == "string") e = new URL(e);
    else if (!vr(e)) {
      const t = new TypeError('The "path" argument must be of type string or an instance of URL. Received `' + e + "`");
      throw t.code = "ERR_INVALID_ARG_TYPE", t;
    }
    if (e.protocol !== "file:") {
      const t = new TypeError("The URL must be of scheme file");
      throw t.code = "ERR_INVALID_URL_SCHEME", t;
    }
    return _l(e);
  }
  function _l(e) {
    if (e.hostname !== "") {
      const r = new TypeError('File URL host must be "localhost" or empty on darwin');
      throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
    }
    const t = e.pathname;
    let n = -1;
    for (; ++n < t.length; ) if (t.codePointAt(n) === 37 && t.codePointAt(n + 1) === 50) {
      const r = t.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError("File URL path must not include encoded / characters");
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
    return decodeURIComponent(t);
  }
  const or = [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ];
  class Dl {
    constructor(t) {
      let n;
      t ? vr(t) ? n = {
        path: t
      } : typeof t == "string" || yl(t) ? n = {
        value: t
      } : n = t : n = {}, this.cwd = "cwd" in n ? "" : Tl.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
      let r = -1;
      for (; ++r < or.length; ) {
        const u = or[r];
        u in n && n[u] !== void 0 && n[u] !== null && (this[u] = u === "history" ? [
          ...n[u]
        ] : n[u]);
      }
      let i;
      for (i in n) or.includes(i) || (this[i] = n[i]);
    }
    get basename() {
      return typeof this.path == "string" ? Oe.basename(this.path) : void 0;
    }
    set basename(t) {
      lr(t, "basename"), cr(t, "basename"), this.path = Oe.join(this.dirname || "", t);
    }
    get dirname() {
      return typeof this.path == "string" ? Oe.dirname(this.path) : void 0;
    }
    set dirname(t) {
      uu(this.basename, "dirname"), this.path = Oe.join(t || "", this.basename);
    }
    get extname() {
      return typeof this.path == "string" ? Oe.extname(this.path) : void 0;
    }
    set extname(t) {
      if (cr(t, "extname"), uu(this.dirname, "extname"), t) {
        if (t.codePointAt(0) !== 46) throw new Error("`extname` must start with `.`");
        if (t.includes(".", 1)) throw new Error("`extname` cannot contain multiple dots");
      }
      this.path = Oe.join(this.dirname, this.stem + (t || ""));
    }
    get path() {
      return this.history[this.history.length - 1];
    }
    set path(t) {
      vr(t) && (t = Cl(t)), lr(t, "path"), this.path !== t && this.history.push(t);
    }
    get stem() {
      return typeof this.path == "string" ? Oe.basename(this.path, this.extname) : void 0;
    }
    set stem(t) {
      lr(t, "stem"), cr(t, "stem"), this.path = Oe.join(this.dirname || "", t + (this.extname || ""));
    }
    fail(t, n, r) {
      const i = this.message(t, n, r);
      throw i.fatal = true, i;
    }
    info(t, n, r) {
      const i = this.message(t, n, r);
      return i.fatal = void 0, i;
    }
    message(t, n, r) {
      const i = new Ce(t, n, r);
      return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = false, this.messages.push(i), i;
    }
    toString(t) {
      return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(t || void 0).decode(this.value);
    }
  }
  function cr(e, t) {
    if (e && e.includes(Oe.sep)) throw new Error("`" + t + "` cannot be a path: did not expect `" + Oe.sep + "`");
  }
  function lr(e, t) {
    if (!e) throw new Error("`" + t + "` cannot be empty");
  }
  function uu(e, t) {
    if (!e) throw new Error("Setting `" + t + "` requires `path` to be set too");
  }
  function yl(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
  }
  const kl = (function(e) {
    const r = this.constructor.prototype, i = r[e], u = function() {
      return i.apply(u, arguments);
    };
    return Object.setPrototypeOf(u, r), u;
  }), Il = {}.hasOwnProperty;
  class li extends kl {
    constructor() {
      super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = fl();
    }
    copy() {
      const t = new li();
      let n = -1;
      for (; ++n < this.attachers.length; ) {
        const r = this.attachers[n];
        t.use(...r);
      }
      return t.data(ar(true, {}, this.namespace)), t;
    }
    data(t, n) {
      return typeof t == "string" ? arguments.length === 2 ? (pr("data", this.frozen), this.namespace[t] = n, this) : Il.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (pr("data", this.frozen), this.namespace = t, this) : this.namespace;
    }
    freeze() {
      if (this.frozen) return this;
      const t = this;
      for (; ++this.freezeIndex < this.attachers.length; ) {
        const [n, ...r] = this.attachers[this.freezeIndex];
        if (r[0] === false) continue;
        r[0] === true && (r[0] = void 0);
        const i = n.call(t, ...r);
        typeof i == "function" && this.transformers.use(i);
      }
      return this.frozen = true, this.freezeIndex = Number.POSITIVE_INFINITY, this;
    }
    parse(t) {
      this.freeze();
      const n = gn(t), r = this.parser || this.Parser;
      return fr("parse", r), r(String(n), n);
    }
    process(t, n) {
      const r = this;
      return this.freeze(), fr("process", this.parser || this.Parser), hr("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
      function i(u, s) {
        const a = gn(t), o = r.parse(a);
        r.run(o, a, function(h, f, d) {
          if (h || !f || !d) return l(h);
          const p = f, E = r.stringify(p, d);
          Sl(E) ? d.value = E : d.result = E, l(h, d);
        });
        function l(h, f) {
          h || !f ? s(h) : u ? u(f) : n(void 0, f);
        }
      }
    }
    processSync(t) {
      let n = false, r;
      return this.freeze(), fr("processSync", this.parser || this.Parser), hr("processSync", this.compiler || this.Compiler), this.process(t, i), au("processSync", "process", n), r;
      function i(u, s) {
        n = true, tu(u), r = s;
      }
    }
    run(t, n, r) {
      su(t), this.freeze();
      const i = this.transformers;
      return !r && typeof n == "function" && (r = n, n = void 0), r ? u(void 0, r) : new Promise(u);
      function u(s, a) {
        const o = gn(n);
        i.run(t, o, l);
        function l(h, f, d) {
          const p = f || t;
          h ? a(h) : s ? s(p) : r(void 0, p, d);
        }
      }
    }
    runSync(t, n) {
      let r = false, i;
      return this.run(t, n, u), au("runSync", "run", r), i;
      function u(s, a) {
        tu(s), i = a, r = true;
      }
    }
    stringify(t, n) {
      this.freeze();
      const r = gn(n), i = this.compiler || this.Compiler;
      return hr("stringify", i), su(t), i(t, r);
    }
    use(t, ...n) {
      const r = this.attachers, i = this.namespace;
      if (pr("use", this.frozen), t != null) if (typeof t == "function") o(t, n);
      else if (typeof t == "object") Array.isArray(t) ? a(t) : s(t);
      else throw new TypeError("Expected usable value, not `" + t + "`");
      return this;
      function u(l) {
        if (typeof l == "function") o(l, []);
        else if (typeof l == "object") if (Array.isArray(l)) {
          const [h, ...f] = l;
          o(h, f);
        } else s(l);
        else throw new TypeError("Expected usable value, not `" + l + "`");
      }
      function s(l) {
        if (!("plugins" in l) && !("settings" in l)) throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
        a(l.plugins), l.settings && (i.settings = ar(true, i.settings, l.settings));
      }
      function a(l) {
        let h = -1;
        if (l != null) if (Array.isArray(l)) for (; ++h < l.length; ) {
          const f = l[h];
          u(f);
        }
        else throw new TypeError("Expected a list of plugins, not `" + l + "`");
      }
      function o(l, h) {
        let f = -1, d = -1;
        for (; ++f < r.length; ) if (r[f][0] === l) {
          d = f;
          break;
        }
        if (d === -1) r.push([
          l,
          ...h
        ]);
        else if (h.length > 0) {
          let [p, ...E] = h;
          const m = r[d][1];
          Ur(m) && Ur(p) && (p = ar(true, m, p)), r[d] = [
            l,
            p,
            ...E
          ];
        }
      }
    }
  }
  const Us = new li().freeze();
  function fr(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `parser`");
  }
  function hr(e, t) {
    if (typeof t != "function") throw new TypeError("Cannot `" + e + "` without `compiler`");
  }
  function pr(e, t) {
    if (t) throw new Error("Cannot call `" + e + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.");
  }
  function su(e) {
    if (!Ur(e) || typeof e.type != "string") throw new TypeError("Expected node, got `" + e + "`");
  }
  function au(e, t, n) {
    if (!n) throw new Error("`" + e + "` finished async. Use `" + t + "` instead");
  }
  function gn(e) {
    return Nl(e) ? e : new Dl(e);
  }
  function Nl(e) {
    return !!(e && typeof e == "object" && "message" in e && "messages" in e);
  }
  function Sl(e) {
    return typeof e == "string" || xl(e);
  }
  function xl(e) {
    return !!(e && typeof e == "object" && "byteLength" in e && "byteOffset" in e);
  }
  const Ll = {};
  function Yn(e, t) {
    const n = Ll, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : true, i = typeof n.includeHtml == "boolean" ? n.includeHtml : true;
    return Hs(e, r, i);
  }
  function Hs(e, t, n) {
    if (Fl(e)) {
      if ("value" in e) return e.type === "html" && !n ? "" : e.value;
      if (t && "alt" in e && e.alt) return e.alt;
      if ("children" in e) return ou(e.children, t, n);
    }
    return Array.isArray(e) ? ou(e, t, n) : "";
  }
  function ou(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length; ) r[i] = Hs(e[i], t, n);
    return r.join("");
  }
  function Fl(e) {
    return !!(e && typeof e == "object");
  }
  const cu = document.createElement("i");
  function nn(e) {
    const t = "&" + e + ";";
    cu.innerHTML = t;
    const n = cu.textContent;
    return n.charCodeAt(n.length - 1) === 59 && e !== "semi" || n === t ? false : n;
  }
  function De(e, t, n, r) {
    const i = e.length;
    let u = 0, s;
    if (t < 0 ? t = -t > i ? 0 : i + t : t = t > i ? i : t, n = n > 0 ? n : 0, r.length < 1e4) s = Array.from(r), s.unshift(t, n), e.splice(...s);
    else for (n && e.splice(t, n); u < r.length; ) s = r.slice(u, u + 1e4), s.unshift(t, 0), e.splice(...s), u += 1e4, t += 1e4;
  }
  function ye(e, t) {
    return e.length > 0 ? (De(e, e.length, 0, t), e) : t;
  }
  const lu = {}.hasOwnProperty;
  function vs(e) {
    const t = {};
    let n = -1;
    for (; ++n < e.length; ) Ol(t, e[n]);
    return t;
  }
  function Ol(e, t) {
    let n;
    for (n in t) {
      const i = (lu.call(e, n) ? e[n] : void 0) || (e[n] = {}), u = t[n];
      let s;
      if (u) for (s in u) {
        lu.call(i, s) || (i[s] = []);
        const a = u[s];
        wl(i[s], Array.isArray(a) ? a : a ? [
          a
        ] : []);
      }
    }
  }
  function wl(e, t) {
    let n = -1;
    const r = [];
    for (; ++n < t.length; ) (t[n].add === "after" ? e : r).push(t[n]);
    De(e, 0, 0, r);
  }
  function zs(e, t) {
    const n = Number.parseInt(e, t);
    return n < 9 || n === 11 || n > 13 && n < 32 || n > 126 && n < 160 || n > 55295 && n < 57344 || n > 64975 && n < 65008 || (n & 65535) === 65535 || (n & 65535) === 65534 || n > 1114111 ? "\uFFFD" : String.fromCodePoint(n);
  }
  function Se(e) {
    return e.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
  }
  const de = Qe(/[A-Za-z]/), he = Qe(/[\dA-Za-z]/), Rl = Qe(/[#-'*+\--9=?A-Z^-~]/);
  function On(e) {
    return e !== null && (e < 32 || e === 127);
  }
  const zr = Qe(/\d/), Bl = Qe(/[\dA-Fa-f]/), Pl = Qe(/[!-/:-@[-`{-~]/);
  K = function(e) {
    return e !== null && e < -2;
  };
  function ne(e) {
    return e !== null && (e < 0 || e === 32);
  }
  function Q(e) {
    return e === -2 || e === -1 || e === 32;
  }
  const qn = Qe(new RegExp("\\p{P}|\\p{S}", "u")), at = Qe(/\s/);
  function Qe(e) {
    return t;
    function t(n) {
      return n !== null && n > -1 && e.test(String.fromCharCode(n));
    }
  }
  function Xe(e) {
    const t = [];
    let n = -1, r = 0, i = 0;
    for (; ++n < e.length; ) {
      const u = e.charCodeAt(n);
      let s = "";
      if (u === 37 && he(e.charCodeAt(n + 1)) && he(e.charCodeAt(n + 2))) i = 2;
      else if (u < 128) /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(u)) || (s = String.fromCharCode(u));
      else if (u > 55295 && u < 57344) {
        const a = e.charCodeAt(n + 1);
        u < 56320 && a > 56319 && a < 57344 ? (s = String.fromCharCode(u, a), i = 1) : s = "\uFFFD";
      } else s = String.fromCharCode(u);
      s && (t.push(e.slice(r, n), encodeURIComponent(s)), r = n + i + 1, s = ""), i && (n += i, i = 0);
    }
    return t.join("") + e.slice(r);
  }
  W = function(e, t, n, r) {
    const i = r ? r - 1 : Number.POSITIVE_INFINITY;
    let u = 0;
    return s;
    function s(o) {
      return Q(o) ? (e.enter(n), a(o)) : t(o);
    }
    function a(o) {
      return Q(o) && u++ < i ? (e.consume(o), a) : (e.exit(n), t(o));
    }
  };
  const Ml = {
    tokenize: Ul
  };
  function Ul(e) {
    const t = e.attempt(this.parser.constructs.contentInitial, r, i);
    let n;
    return t;
    function r(a) {
      if (a === null) {
        e.consume(a);
        return;
      }
      return e.enter("lineEnding"), e.consume(a), e.exit("lineEnding"), W(e, t, "linePrefix");
    }
    function i(a) {
      return e.enter("paragraph"), u(a);
    }
    function u(a) {
      const o = e.enter("chunkText", {
        contentType: "text",
        previous: n
      });
      return n && (n.next = o), n = o, s(a);
    }
    function s(a) {
      if (a === null) {
        e.exit("chunkText"), e.exit("paragraph"), e.consume(a);
        return;
      }
      return K(a) ? (e.consume(a), e.exit("chunkText"), u) : (e.consume(a), s);
    }
  }
  const Hl = {
    tokenize: vl
  }, fu = {
    tokenize: zl
  };
  function vl(e) {
    const t = this, n = [];
    let r = 0, i, u, s;
    return a;
    function a(S) {
      if (r < n.length) {
        const B = n[r];
        return t.containerState = B[1], e.attempt(B[0].continuation, o, l)(S);
      }
      return l(S);
    }
    function o(S) {
      if (r++, t.containerState._closeFlow) {
        t.containerState._closeFlow = void 0, i && x();
        const B = t.events.length;
        let v = B, k;
        for (; v--; ) if (t.events[v][0] === "exit" && t.events[v][1].type === "chunkFlow") {
          k = t.events[v][1].end;
          break;
        }
        C(r);
        let Y = B;
        for (; Y < t.events.length; ) t.events[Y][1].end = {
          ...k
        }, Y++;
        return De(t.events, v + 1, 0, t.events.slice(B)), t.events.length = Y, l(S);
      }
      return a(S);
    }
    function l(S) {
      if (r === n.length) {
        if (!i) return d(S);
        if (i.currentConstruct && i.currentConstruct.concrete) return E(S);
        t.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
      }
      return t.containerState = {}, e.check(fu, h, f)(S);
    }
    function h(S) {
      return i && x(), C(r), d(S);
    }
    function f(S) {
      return t.parser.lazy[t.now().line] = r !== n.length, s = t.now().offset, E(S);
    }
    function d(S) {
      return t.containerState = {}, e.attempt(fu, p, E)(S);
    }
    function p(S) {
      return r++, n.push([
        t.currentConstruct,
        t.containerState
      ]), d(S);
    }
    function E(S) {
      if (S === null) {
        i && x(), C(0), e.consume(S);
        return;
      }
      return i = i || t.parser.flow(t.now()), e.enter("chunkFlow", {
        _tokenizer: i,
        contentType: "flow",
        previous: u
      }), m(S);
    }
    function m(S) {
      if (S === null) {
        D(e.exit("chunkFlow"), true), C(0), e.consume(S);
        return;
      }
      return K(S) ? (e.consume(S), D(e.exit("chunkFlow")), r = 0, t.interrupt = void 0, a) : (e.consume(S), m);
    }
    function D(S, B) {
      const v = t.sliceStream(S);
      if (B && v.push(null), S.previous = u, u && (u.next = S), u = S, i.defineSkip(S.start), i.write(v), t.parser.lazy[S.start.line]) {
        let k = i.events.length;
        for (; k--; ) if (i.events[k][1].start.offset < s && (!i.events[k][1].end || i.events[k][1].end.offset > s)) return;
        const Y = t.events.length;
        let w = Y, $, I;
        for (; w--; ) if (t.events[w][0] === "exit" && t.events[w][1].type === "chunkFlow") {
          if ($) {
            I = t.events[w][1].end;
            break;
          }
          $ = true;
        }
        for (C(r), k = Y; k < t.events.length; ) t.events[k][1].end = {
          ...I
        }, k++;
        De(t.events, w + 1, 0, t.events.slice(Y)), t.events.length = k;
      }
    }
    function C(S) {
      let B = n.length;
      for (; B-- > S; ) {
        const v = n[B];
        t.containerState = v[1], v[0].exit.call(t, e);
      }
      n.length = S;
    }
    function x() {
      i.write([
        null
      ]), u = void 0, i = void 0, t.containerState._closeFlow = void 0;
    }
  }
  function zl(e, t, n) {
    return W(e, e.attempt(this.parser.constructs.document, t, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
  }
  function Ct(e) {
    if (e === null || ne(e) || at(e)) return 1;
    if (qn(e)) return 2;
  }
  function $n(e, t, n) {
    const r = [];
    let i = -1;
    for (; ++i < e.length; ) {
      const u = e[i].resolveAll;
      u && !r.includes(u) && (t = u(t, n), r.push(u));
    }
    return t;
  }
  const Yr = {
    name: "attention",
    resolveAll: Yl,
    tokenize: ql
  };
  function Yl(e, t) {
    let n = -1, r, i, u, s, a, o, l, h;
    for (; ++n < e.length; ) if (e[n][0] === "enter" && e[n][1].type === "attentionSequence" && e[n][1]._close) {
      for (r = n; r--; ) if (e[r][0] === "exit" && e[r][1].type === "attentionSequence" && e[r][1]._open && t.sliceSerialize(e[r][1]).charCodeAt(0) === t.sliceSerialize(e[n][1]).charCodeAt(0)) {
        if ((e[r][1]._close || e[n][1]._open) && (e[n][1].end.offset - e[n][1].start.offset) % 3 && !((e[r][1].end.offset - e[r][1].start.offset + e[n][1].end.offset - e[n][1].start.offset) % 3)) continue;
        o = e[r][1].end.offset - e[r][1].start.offset > 1 && e[n][1].end.offset - e[n][1].start.offset > 1 ? 2 : 1;
        const f = {
          ...e[r][1].end
        }, d = {
          ...e[n][1].start
        };
        hu(f, -o), hu(d, o), s = {
          type: o > 1 ? "strongSequence" : "emphasisSequence",
          start: f,
          end: {
            ...e[r][1].end
          }
        }, a = {
          type: o > 1 ? "strongSequence" : "emphasisSequence",
          start: {
            ...e[n][1].start
          },
          end: d
        }, u = {
          type: o > 1 ? "strongText" : "emphasisText",
          start: {
            ...e[r][1].end
          },
          end: {
            ...e[n][1].start
          }
        }, i = {
          type: o > 1 ? "strong" : "emphasis",
          start: {
            ...s.start
          },
          end: {
            ...a.end
          }
        }, e[r][1].end = {
          ...s.start
        }, e[n][1].start = {
          ...a.end
        }, l = [], e[r][1].end.offset - e[r][1].start.offset && (l = ye(l, [
          [
            "enter",
            e[r][1],
            t
          ],
          [
            "exit",
            e[r][1],
            t
          ]
        ])), l = ye(l, [
          [
            "enter",
            i,
            t
          ],
          [
            "enter",
            s,
            t
          ],
          [
            "exit",
            s,
            t
          ],
          [
            "enter",
            u,
            t
          ]
        ]), l = ye(l, $n(t.parser.constructs.insideSpan.null, e.slice(r + 1, n), t)), l = ye(l, [
          [
            "exit",
            u,
            t
          ],
          [
            "enter",
            a,
            t
          ],
          [
            "exit",
            a,
            t
          ],
          [
            "exit",
            i,
            t
          ]
        ]), e[n][1].end.offset - e[n][1].start.offset ? (h = 2, l = ye(l, [
          [
            "enter",
            e[n][1],
            t
          ],
          [
            "exit",
            e[n][1],
            t
          ]
        ])) : h = 0, De(e, r - 1, n - r + 3, l), n = r + l.length - h - 2;
        break;
      }
    }
    for (n = -1; ++n < e.length; ) e[n][1].type === "attentionSequence" && (e[n][1].type = "data");
    return e;
  }
  function ql(e, t) {
    const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = Ct(r);
    let u;
    return s;
    function s(o) {
      return u = o, e.enter("attentionSequence"), a(o);
    }
    function a(o) {
      if (o === u) return e.consume(o), a;
      const l = e.exit("attentionSequence"), h = Ct(o), f = !h || h === 2 && i || n.includes(o), d = !i || i === 2 && h || n.includes(r);
      return l._open = !!(u === 42 ? f : f && (i || !d)), l._close = !!(u === 42 ? d : d && (h || !f)), t(o);
    }
  }
  function hu(e, t) {
    e.column += t, e.offset += t, e._bufferIndex += t;
  }
  const $l = {
    name: "autolink",
    tokenize: jl
  };
  function jl(e, t, n) {
    let r = 0;
    return i;
    function i(p) {
      return e.enter("autolink"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.enter("autolinkProtocol"), u;
    }
    function u(p) {
      return de(p) ? (e.consume(p), s) : p === 64 ? n(p) : l(p);
    }
    function s(p) {
      return p === 43 || p === 45 || p === 46 || he(p) ? (r = 1, a(p)) : l(p);
    }
    function a(p) {
      return p === 58 ? (e.consume(p), r = 0, o) : (p === 43 || p === 45 || p === 46 || he(p)) && r++ < 32 ? (e.consume(p), a) : (r = 0, l(p));
    }
    function o(p) {
      return p === 62 ? (e.exit("autolinkProtocol"), e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : p === null || p === 32 || p === 60 || On(p) ? n(p) : (e.consume(p), o);
    }
    function l(p) {
      return p === 64 ? (e.consume(p), h) : Rl(p) ? (e.consume(p), l) : n(p);
    }
    function h(p) {
      return he(p) ? f(p) : n(p);
    }
    function f(p) {
      return p === 46 ? (e.consume(p), r = 0, h) : p === 62 ? (e.exit("autolinkProtocol").type = "autolinkEmail", e.enter("autolinkMarker"), e.consume(p), e.exit("autolinkMarker"), e.exit("autolink"), t) : d(p);
    }
    function d(p) {
      if ((p === 45 || he(p)) && r++ < 63) {
        const E = p === 45 ? d : f;
        return e.consume(p), E;
      }
      return n(p);
    }
  }
  const on = {
    partial: true,
    tokenize: Vl
  };
  function Vl(e, t, n) {
    return r;
    function r(u) {
      return Q(u) ? W(e, i, "linePrefix")(u) : i(u);
    }
    function i(u) {
      return u === null || K(u) ? t(u) : n(u);
    }
  }
  const Ys = {
    continuation: {
      tokenize: Wl
    },
    exit: Gl,
    name: "blockQuote",
    tokenize: Kl
  };
  function Kl(e, t, n) {
    const r = this;
    return i;
    function i(s) {
      if (s === 62) {
        const a = r.containerState;
        return a.open || (e.enter("blockQuote", {
          _container: true
        }), a.open = true), e.enter("blockQuotePrefix"), e.enter("blockQuoteMarker"), e.consume(s), e.exit("blockQuoteMarker"), u;
      }
      return n(s);
    }
    function u(s) {
      return Q(s) ? (e.enter("blockQuotePrefixWhitespace"), e.consume(s), e.exit("blockQuotePrefixWhitespace"), e.exit("blockQuotePrefix"), t) : (e.exit("blockQuotePrefix"), t(s));
    }
  }
  function Wl(e, t, n) {
    const r = this;
    return i;
    function i(s) {
      return Q(s) ? W(e, u, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(s) : u(s);
    }
    function u(s) {
      return e.attempt(Ys, t, n)(s);
    }
  }
  function Gl(e) {
    e.exit("blockQuote");
  }
  const qs = {
    name: "characterEscape",
    tokenize: Ql
  };
  function Ql(e, t, n) {
    return r;
    function r(u) {
      return e.enter("characterEscape"), e.enter("escapeMarker"), e.consume(u), e.exit("escapeMarker"), i;
    }
    function i(u) {
      return Pl(u) ? (e.enter("characterEscapeValue"), e.consume(u), e.exit("characterEscapeValue"), e.exit("characterEscape"), t) : n(u);
    }
  }
  const $s = {
    name: "characterReference",
    tokenize: Xl
  };
  function Xl(e, t, n) {
    const r = this;
    let i = 0, u, s;
    return a;
    function a(f) {
      return e.enter("characterReference"), e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), o;
    }
    function o(f) {
      return f === 35 ? (e.enter("characterReferenceMarkerNumeric"), e.consume(f), e.exit("characterReferenceMarkerNumeric"), l) : (e.enter("characterReferenceValue"), u = 31, s = he, h(f));
    }
    function l(f) {
      return f === 88 || f === 120 ? (e.enter("characterReferenceMarkerHexadecimal"), e.consume(f), e.exit("characterReferenceMarkerHexadecimal"), e.enter("characterReferenceValue"), u = 6, s = Bl, h) : (e.enter("characterReferenceValue"), u = 7, s = zr, h(f));
    }
    function h(f) {
      if (f === 59 && i) {
        const d = e.exit("characterReferenceValue");
        return s === he && !nn(r.sliceSerialize(d)) ? n(f) : (e.enter("characterReferenceMarker"), e.consume(f), e.exit("characterReferenceMarker"), e.exit("characterReference"), t);
      }
      return s(f) && i++ < u ? (e.consume(f), h) : n(f);
    }
  }
  const pu = {
    partial: true,
    tokenize: Zl
  }, qr = {
    concrete: true,
    name: "codeFenced",
    tokenize: Jl
  };
  function Jl(e, t, n) {
    const r = this, i = {
      partial: true,
      tokenize: v
    };
    let u = 0, s = 0, a;
    return o;
    function o(k) {
      return l(k);
    }
    function l(k) {
      const Y = r.events[r.events.length - 1];
      return u = Y && Y[1].type === "linePrefix" ? Y[2].sliceSerialize(Y[1], true).length : 0, a = k, e.enter("codeFenced"), e.enter("codeFencedFence"), e.enter("codeFencedFenceSequence"), h(k);
    }
    function h(k) {
      return k === a ? (s++, e.consume(k), h) : s < 3 ? n(k) : (e.exit("codeFencedFenceSequence"), Q(k) ? W(e, f, "whitespace")(k) : f(k));
    }
    function f(k) {
      return k === null || K(k) ? (e.exit("codeFencedFence"), r.interrupt ? t(k) : e.check(pu, m, B)(k)) : (e.enter("codeFencedFenceInfo"), e.enter("chunkString", {
        contentType: "string"
      }), d(k));
    }
    function d(k) {
      return k === null || K(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), f(k)) : Q(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceInfo"), W(e, p, "whitespace")(k)) : k === 96 && k === a ? n(k) : (e.consume(k), d);
    }
    function p(k) {
      return k === null || K(k) ? f(k) : (e.enter("codeFencedFenceMeta"), e.enter("chunkString", {
        contentType: "string"
      }), E(k));
    }
    function E(k) {
      return k === null || K(k) ? (e.exit("chunkString"), e.exit("codeFencedFenceMeta"), f(k)) : k === 96 && k === a ? n(k) : (e.consume(k), E);
    }
    function m(k) {
      return e.attempt(i, B, D)(k);
    }
    function D(k) {
      return e.enter("lineEnding"), e.consume(k), e.exit("lineEnding"), C;
    }
    function C(k) {
      return u > 0 && Q(k) ? W(e, x, "linePrefix", u + 1)(k) : x(k);
    }
    function x(k) {
      return k === null || K(k) ? e.check(pu, m, B)(k) : (e.enter("codeFlowValue"), S(k));
    }
    function S(k) {
      return k === null || K(k) ? (e.exit("codeFlowValue"), x(k)) : (e.consume(k), S);
    }
    function B(k) {
      return e.exit("codeFenced"), t(k);
    }
    function v(k, Y, w) {
      let $ = 0;
      return I;
      function I(G) {
        return k.enter("lineEnding"), k.consume(G), k.exit("lineEnding"), M;
      }
      function M(G) {
        return k.enter("codeFencedFence"), Q(G) ? W(k, z, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(G) : z(G);
      }
      function z(G) {
        return G === a ? (k.enter("codeFencedFenceSequence"), V(G)) : w(G);
      }
      function V(G) {
        return G === a ? ($++, k.consume(G), V) : $ >= s ? (k.exit("codeFencedFenceSequence"), Q(G) ? W(k, X, "whitespace")(G) : X(G)) : w(G);
      }
      function X(G) {
        return G === null || K(G) ? (k.exit("codeFencedFence"), Y(G)) : w(G);
      }
    }
  }
  function Zl(e, t, n) {
    const r = this;
    return i;
    function i(s) {
      return s === null ? n(s) : (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), u);
    }
    function u(s) {
      return r.parser.lazy[r.now().line] ? n(s) : t(s);
    }
  }
  const dr = {
    name: "codeIndented",
    tokenize: tf
  }, ef = {
    partial: true,
    tokenize: nf
  };
  function tf(e, t, n) {
    const r = this;
    return i;
    function i(l) {
      return e.enter("codeIndented"), W(e, u, "linePrefix", 5)(l);
    }
    function u(l) {
      const h = r.events[r.events.length - 1];
      return h && h[1].type === "linePrefix" && h[2].sliceSerialize(h[1], true).length >= 4 ? s(l) : n(l);
    }
    function s(l) {
      return l === null ? o(l) : K(l) ? e.attempt(ef, s, o)(l) : (e.enter("codeFlowValue"), a(l));
    }
    function a(l) {
      return l === null || K(l) ? (e.exit("codeFlowValue"), s(l)) : (e.consume(l), a);
    }
    function o(l) {
      return e.exit("codeIndented"), t(l);
    }
  }
  function nf(e, t, n) {
    const r = this;
    return i;
    function i(s) {
      return r.parser.lazy[r.now().line] ? n(s) : K(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), i) : W(e, u, "linePrefix", 5)(s);
    }
    function u(s) {
      const a = r.events[r.events.length - 1];
      return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], true).length >= 4 ? t(s) : K(s) ? i(s) : n(s);
    }
  }
  const rf = {
    name: "codeText",
    previous: sf,
    resolve: uf,
    tokenize: af
  };
  function uf(e) {
    let t = e.length - 4, n = 3, r, i;
    if ((e[n][1].type === "lineEnding" || e[n][1].type === "space") && (e[t][1].type === "lineEnding" || e[t][1].type === "space")) {
      for (r = n; ++r < t; ) if (e[r][1].type === "codeTextData") {
        e[n][1].type = "codeTextPadding", e[t][1].type = "codeTextPadding", n += 2, t -= 2;
        break;
      }
    }
    for (r = n - 1, t++; ++r <= t; ) i === void 0 ? r !== t && e[r][1].type !== "lineEnding" && (i = r) : (r === t || e[r][1].type === "lineEnding") && (e[i][1].type = "codeTextData", r !== i + 2 && (e[i][1].end = e[r - 1][1].end, e.splice(i + 2, r - i - 2), t -= r - i - 2, r = i + 2), i = void 0);
    return e;
  }
  function sf(e) {
    return e !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
  }
  function af(e, t, n) {
    let r = 0, i, u;
    return s;
    function s(f) {
      return e.enter("codeText"), e.enter("codeTextSequence"), a(f);
    }
    function a(f) {
      return f === 96 ? (e.consume(f), r++, a) : (e.exit("codeTextSequence"), o(f));
    }
    function o(f) {
      return f === null ? n(f) : f === 32 ? (e.enter("space"), e.consume(f), e.exit("space"), o) : f === 96 ? (u = e.enter("codeTextSequence"), i = 0, h(f)) : K(f) ? (e.enter("lineEnding"), e.consume(f), e.exit("lineEnding"), o) : (e.enter("codeTextData"), l(f));
    }
    function l(f) {
      return f === null || f === 32 || f === 96 || K(f) ? (e.exit("codeTextData"), o(f)) : (e.consume(f), l);
    }
    function h(f) {
      return f === 96 ? (e.consume(f), i++, h) : i === r ? (e.exit("codeTextSequence"), e.exit("codeText"), t(f)) : (u.type = "codeTextData", l(f));
    }
  }
  class of {
    constructor(t) {
      this.left = t ? [
        ...t
      ] : [], this.right = [];
    }
    get(t) {
      if (t < 0 || t >= this.left.length + this.right.length) throw new RangeError("Cannot access index `" + t + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
      return t < this.left.length ? this.left[t] : this.right[this.right.length - t + this.left.length - 1];
    }
    get length() {
      return this.left.length + this.right.length;
    }
    shift() {
      return this.setCursor(0), this.right.pop();
    }
    slice(t, n) {
      const r = n ?? Number.POSITIVE_INFINITY;
      return r < this.left.length ? this.left.slice(t, r) : t > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - t + this.left.length).reverse() : this.left.slice(t).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
    }
    splice(t, n, r) {
      const i = n || 0;
      this.setCursor(Math.trunc(t));
      const u = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
      return r && Rt(this.left, r), u.reverse();
    }
    pop() {
      return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
    }
    push(t) {
      this.setCursor(Number.POSITIVE_INFINITY), this.left.push(t);
    }
    pushMany(t) {
      this.setCursor(Number.POSITIVE_INFINITY), Rt(this.left, t);
    }
    unshift(t) {
      this.setCursor(0), this.right.push(t);
    }
    unshiftMany(t) {
      this.setCursor(0), Rt(this.right, t.reverse());
    }
    setCursor(t) {
      if (!(t === this.left.length || t > this.left.length && this.right.length === 0 || t < 0 && this.left.length === 0)) if (t < this.left.length) {
        const n = this.left.splice(t, Number.POSITIVE_INFINITY);
        Rt(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - t, Number.POSITIVE_INFINITY);
        Rt(this.left, n.reverse());
      }
    }
  }
  function Rt(e, t) {
    let n = 0;
    if (t.length < 1e4) e.push(...t);
    else for (; n < t.length; ) e.push(...t.slice(n, n + 1e4)), n += 1e4;
  }
  function js(e) {
    const t = {};
    let n = -1, r, i, u, s, a, o, l;
    const h = new of(e);
    for (; ++n < h.length; ) {
      for (; n in t; ) n = t[n];
      if (r = h.get(n), n && r[1].type === "chunkFlow" && h.get(n - 1)[1].type === "listItemPrefix" && (o = r[1]._tokenizer.events, u = 0, u < o.length && o[u][1].type === "lineEndingBlank" && (u += 2), u < o.length && o[u][1].type === "content")) for (; ++u < o.length && o[u][1].type !== "content"; ) o[u][1].type === "chunkText" && (o[u][1]._isInFirstContentOfListItem = true, u++);
      if (r[0] === "enter") r[1].contentType && (Object.assign(t, cf(h, n)), n = t[n], l = true);
      else if (r[1]._container) {
        for (u = n, i = void 0; u--; ) if (s = h.get(u), s[1].type === "lineEnding" || s[1].type === "lineEndingBlank") s[0] === "enter" && (i && (h.get(i)[1].type = "lineEndingBlank"), s[1].type = "lineEnding", i = u);
        else if (!(s[1].type === "linePrefix" || s[1].type === "listItemIndent")) break;
        i && (r[1].end = {
          ...h.get(i)[1].start
        }, a = h.slice(i, n), a.unshift(r), h.splice(i, n - i + 1, a));
      }
    }
    return De(e, 0, Number.POSITIVE_INFINITY, h.slice(0)), !l;
  }
  function cf(e, t) {
    const n = e.get(t)[1], r = e.get(t)[2];
    let i = t - 1;
    const u = [];
    let s = n._tokenizer;
    s || (s = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (s._contentTypeTextTrailing = true));
    const a = s.events, o = [], l = {};
    let h, f, d = -1, p = n, E = 0, m = 0;
    const D = [
      m
    ];
    for (; p; ) {
      for (; e.get(++i)[1] !== p; ) ;
      u.push(i), p._tokenizer || (h = r.sliceStream(p), p.next || h.push(null), f && s.defineSkip(p.start), p._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = true), s.write(h), p._isInFirstContentOfListItem && (s._gfmTasklistFirstContentOfListItem = void 0)), f = p, p = p.next;
    }
    for (p = n; ++d < a.length; ) a[d][0] === "exit" && a[d - 1][0] === "enter" && a[d][1].type === a[d - 1][1].type && a[d][1].start.line !== a[d][1].end.line && (m = d + 1, D.push(m), p._tokenizer = void 0, p.previous = void 0, p = p.next);
    for (s.events = [], p ? (p._tokenizer = void 0, p.previous = void 0) : D.pop(), d = D.length; d--; ) {
      const C = a.slice(D[d], D[d + 1]), x = u.pop();
      o.push([
        x,
        x + C.length - 1
      ]), e.splice(x, 2, C);
    }
    for (o.reverse(), d = -1; ++d < o.length; ) l[E + o[d][0]] = E + o[d][1], E += o[d][1] - o[d][0] - 1;
    return l;
  }
  const lf = {
    resolve: hf,
    tokenize: pf
  }, ff = {
    partial: true,
    tokenize: df
  };
  function hf(e) {
    return js(e), e;
  }
  function pf(e, t) {
    let n;
    return r;
    function r(a) {
      return e.enter("content"), n = e.enter("chunkContent", {
        contentType: "content"
      }), i(a);
    }
    function i(a) {
      return a === null ? u(a) : K(a) ? e.check(ff, s, u)(a) : (e.consume(a), i);
    }
    function u(a) {
      return e.exit("chunkContent"), e.exit("content"), t(a);
    }
    function s(a) {
      return e.consume(a), e.exit("chunkContent"), n.next = e.enter("chunkContent", {
        contentType: "content",
        previous: n
      }), n = n.next, i;
    }
  }
  function df(e, t, n) {
    const r = this;
    return i;
    function i(s) {
      return e.exit("chunkContent"), e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), W(e, u, "linePrefix");
    }
    function u(s) {
      if (s === null || K(s)) return n(s);
      const a = r.events[r.events.length - 1];
      return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], true).length >= 4 ? t(s) : e.interrupt(r.parser.constructs.flow, n, t)(s);
    }
  }
  function Vs(e, t, n, r, i, u, s, a, o) {
    const l = o || Number.POSITIVE_INFINITY;
    let h = 0;
    return f;
    function f(C) {
      return C === 60 ? (e.enter(r), e.enter(i), e.enter(u), e.consume(C), e.exit(u), d) : C === null || C === 32 || C === 41 || On(C) ? n(C) : (e.enter(r), e.enter(s), e.enter(a), e.enter("chunkString", {
        contentType: "string"
      }), m(C));
    }
    function d(C) {
      return C === 62 ? (e.enter(u), e.consume(C), e.exit(u), e.exit(i), e.exit(r), t) : (e.enter(a), e.enter("chunkString", {
        contentType: "string"
      }), p(C));
    }
    function p(C) {
      return C === 62 ? (e.exit("chunkString"), e.exit(a), d(C)) : C === null || C === 60 || K(C) ? n(C) : (e.consume(C), C === 92 ? E : p);
    }
    function E(C) {
      return C === 60 || C === 62 || C === 92 ? (e.consume(C), p) : p(C);
    }
    function m(C) {
      return !h && (C === null || C === 41 || ne(C)) ? (e.exit("chunkString"), e.exit(a), e.exit(s), e.exit(r), t(C)) : h < l && C === 40 ? (e.consume(C), h++, m) : C === 41 ? (e.consume(C), h--, m) : C === null || C === 32 || C === 40 || On(C) ? n(C) : (e.consume(C), C === 92 ? D : m);
    }
    function D(C) {
      return C === 40 || C === 41 || C === 92 ? (e.consume(C), m) : m(C);
    }
  }
  function Ks(e, t, n, r, i, u) {
    const s = this;
    let a = 0, o;
    return l;
    function l(p) {
      return e.enter(r), e.enter(i), e.consume(p), e.exit(i), e.enter(u), h;
    }
    function h(p) {
      return a > 999 || p === null || p === 91 || p === 93 && !o || p === 94 && !a && "_hiddenFootnoteSupport" in s.parser.constructs ? n(p) : p === 93 ? (e.exit(u), e.enter(i), e.consume(p), e.exit(i), e.exit(r), t) : K(p) ? (e.enter("lineEnding"), e.consume(p), e.exit("lineEnding"), h) : (e.enter("chunkString", {
        contentType: "string"
      }), f(p));
    }
    function f(p) {
      return p === null || p === 91 || p === 93 || K(p) || a++ > 999 ? (e.exit("chunkString"), h(p)) : (e.consume(p), o || (o = !Q(p)), p === 92 ? d : f);
    }
    function d(p) {
      return p === 91 || p === 92 || p === 93 ? (e.consume(p), a++, f) : f(p);
    }
  }
  function Ws(e, t, n, r, i, u) {
    let s;
    return a;
    function a(d) {
      return d === 34 || d === 39 || d === 40 ? (e.enter(r), e.enter(i), e.consume(d), e.exit(i), s = d === 40 ? 41 : d, o) : n(d);
    }
    function o(d) {
      return d === s ? (e.enter(i), e.consume(d), e.exit(i), e.exit(r), t) : (e.enter(u), l(d));
    }
    function l(d) {
      return d === s ? (e.exit(u), o(s)) : d === null ? n(d) : K(d) ? (e.enter("lineEnding"), e.consume(d), e.exit("lineEnding"), W(e, l, "linePrefix")) : (e.enter("chunkString", {
        contentType: "string"
      }), h(d));
    }
    function h(d) {
      return d === s || d === null || K(d) ? (e.exit("chunkString"), l(d)) : (e.consume(d), d === 92 ? f : h);
    }
    function f(d) {
      return d === s || d === 92 ? (e.consume(d), h) : h(d);
    }
  }
  function Re(e, t) {
    let n;
    return r;
    function r(i) {
      return K(i) ? (e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), n = true, r) : Q(i) ? W(e, r, n ? "linePrefix" : "lineSuffix")(i) : t(i);
    }
  }
  const mf = {
    name: "definition",
    tokenize: gf
  }, Ef = {
    partial: true,
    tokenize: bf
  };
  function gf(e, t, n) {
    const r = this;
    let i;
    return u;
    function u(p) {
      return e.enter("definition"), s(p);
    }
    function s(p) {
      return Ks.call(r, e, a, n, "definitionLabel", "definitionLabelMarker", "definitionLabelString")(p);
    }
    function a(p) {
      return i = Se(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), p === 58 ? (e.enter("definitionMarker"), e.consume(p), e.exit("definitionMarker"), o) : n(p);
    }
    function o(p) {
      return ne(p) ? Re(e, l)(p) : l(p);
    }
    function l(p) {
      return Vs(e, h, n, "definitionDestination", "definitionDestinationLiteral", "definitionDestinationLiteralMarker", "definitionDestinationRaw", "definitionDestinationString")(p);
    }
    function h(p) {
      return e.attempt(Ef, f, f)(p);
    }
    function f(p) {
      return Q(p) ? W(e, d, "whitespace")(p) : d(p);
    }
    function d(p) {
      return p === null || K(p) ? (e.exit("definition"), r.parser.defined.push(i), t(p)) : n(p);
    }
  }
  function bf(e, t, n) {
    return r;
    function r(a) {
      return ne(a) ? Re(e, i)(a) : n(a);
    }
    function i(a) {
      return Ws(e, u, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
    }
    function u(a) {
      return Q(a) ? W(e, s, "whitespace")(a) : s(a);
    }
    function s(a) {
      return a === null || K(a) ? t(a) : n(a);
    }
  }
  const Tf = {
    name: "hardBreakEscape",
    tokenize: Af
  };
  function Af(e, t, n) {
    return r;
    function r(u) {
      return e.enter("hardBreakEscape"), e.consume(u), i;
    }
    function i(u) {
      return K(u) ? (e.exit("hardBreakEscape"), t(u)) : n(u);
    }
  }
  const Cf = {
    name: "headingAtx",
    resolve: _f,
    tokenize: Df
  };
  function _f(e, t) {
    let n = e.length - 2, r = 3, i, u;
    return e[r][1].type === "whitespace" && (r += 2), n - 2 > r && e[n][1].type === "whitespace" && (n -= 2), e[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && e[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
      type: "atxHeadingText",
      start: e[r][1].start,
      end: e[n][1].end
    }, u = {
      type: "chunkText",
      start: e[r][1].start,
      end: e[n][1].end,
      contentType: "text"
    }, De(e, r, n - r + 1, [
      [
        "enter",
        i,
        t
      ],
      [
        "enter",
        u,
        t
      ],
      [
        "exit",
        u,
        t
      ],
      [
        "exit",
        i,
        t
      ]
    ])), e;
  }
  function Df(e, t, n) {
    let r = 0;
    return i;
    function i(h) {
      return e.enter("atxHeading"), u(h);
    }
    function u(h) {
      return e.enter("atxHeadingSequence"), s(h);
    }
    function s(h) {
      return h === 35 && r++ < 6 ? (e.consume(h), s) : h === null || ne(h) ? (e.exit("atxHeadingSequence"), a(h)) : n(h);
    }
    function a(h) {
      return h === 35 ? (e.enter("atxHeadingSequence"), o(h)) : h === null || K(h) ? (e.exit("atxHeading"), t(h)) : Q(h) ? W(e, a, "whitespace")(h) : (e.enter("atxHeadingText"), l(h));
    }
    function o(h) {
      return h === 35 ? (e.consume(h), o) : (e.exit("atxHeadingSequence"), a(h));
    }
    function l(h) {
      return h === null || h === 35 || ne(h) ? (e.exit("atxHeadingText"), a(h)) : (e.consume(h), l);
    }
  }
  const yf = [
    "address",
    "article",
    "aside",
    "base",
    "basefont",
    "blockquote",
    "body",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "details",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hr",
    "html",
    "iframe",
    "legend",
    "li",
    "link",
    "main",
    "menu",
    "menuitem",
    "nav",
    "noframes",
    "ol",
    "optgroup",
    "option",
    "p",
    "param",
    "search",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "title",
    "tr",
    "track",
    "ul"
  ], du = [
    "pre",
    "script",
    "style",
    "textarea"
  ], kf = {
    concrete: true,
    name: "htmlFlow",
    resolveTo: Sf,
    tokenize: xf
  }, If = {
    partial: true,
    tokenize: Ff
  }, Nf = {
    partial: true,
    tokenize: Lf
  };
  function Sf(e) {
    let t = e.length;
    for (; t-- && !(e[t][0] === "enter" && e[t][1].type === "htmlFlow"); ) ;
    return t > 1 && e[t - 2][1].type === "linePrefix" && (e[t][1].start = e[t - 2][1].start, e[t + 1][1].start = e[t - 2][1].start, e.splice(t - 2, 2)), e;
  }
  function xf(e, t, n) {
    const r = this;
    let i, u, s, a, o;
    return l;
    function l(A) {
      return h(A);
    }
    function h(A) {
      return e.enter("htmlFlow"), e.enter("htmlFlowData"), e.consume(A), f;
    }
    function f(A) {
      return A === 33 ? (e.consume(A), d) : A === 47 ? (e.consume(A), u = true, m) : A === 63 ? (e.consume(A), i = 3, r.interrupt ? t : _) : de(A) ? (e.consume(A), s = String.fromCharCode(A), D) : n(A);
    }
    function d(A) {
      return A === 45 ? (e.consume(A), i = 2, p) : A === 91 ? (e.consume(A), i = 5, a = 0, E) : de(A) ? (e.consume(A), i = 4, r.interrupt ? t : _) : n(A);
    }
    function p(A) {
      return A === 45 ? (e.consume(A), r.interrupt ? t : _) : n(A);
    }
    function E(A) {
      const oe = "CDATA[";
      return A === oe.charCodeAt(a++) ? (e.consume(A), a === oe.length ? r.interrupt ? t : z : E) : n(A);
    }
    function m(A) {
      return de(A) ? (e.consume(A), s = String.fromCharCode(A), D) : n(A);
    }
    function D(A) {
      if (A === null || A === 47 || A === 62 || ne(A)) {
        const oe = A === 47, Je = s.toLowerCase();
        return !oe && !u && du.includes(Je) ? (i = 1, r.interrupt ? t(A) : z(A)) : yf.includes(s.toLowerCase()) ? (i = 6, oe ? (e.consume(A), C) : r.interrupt ? t(A) : z(A)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(A) : u ? x(A) : S(A));
      }
      return A === 45 || he(A) ? (e.consume(A), s += String.fromCharCode(A), D) : n(A);
    }
    function C(A) {
      return A === 62 ? (e.consume(A), r.interrupt ? t : z) : n(A);
    }
    function x(A) {
      return Q(A) ? (e.consume(A), x) : I(A);
    }
    function S(A) {
      return A === 47 ? (e.consume(A), I) : A === 58 || A === 95 || de(A) ? (e.consume(A), B) : Q(A) ? (e.consume(A), S) : I(A);
    }
    function B(A) {
      return A === 45 || A === 46 || A === 58 || A === 95 || he(A) ? (e.consume(A), B) : v(A);
    }
    function v(A) {
      return A === 61 ? (e.consume(A), k) : Q(A) ? (e.consume(A), v) : S(A);
    }
    function k(A) {
      return A === null || A === 60 || A === 61 || A === 62 || A === 96 ? n(A) : A === 34 || A === 39 ? (e.consume(A), o = A, Y) : Q(A) ? (e.consume(A), k) : w(A);
    }
    function Y(A) {
      return A === o ? (e.consume(A), o = null, $) : A === null || K(A) ? n(A) : (e.consume(A), Y);
    }
    function w(A) {
      return A === null || A === 34 || A === 39 || A === 47 || A === 60 || A === 61 || A === 62 || A === 96 || ne(A) ? v(A) : (e.consume(A), w);
    }
    function $(A) {
      return A === 47 || A === 62 || Q(A) ? S(A) : n(A);
    }
    function I(A) {
      return A === 62 ? (e.consume(A), M) : n(A);
    }
    function M(A) {
      return A === null || K(A) ? z(A) : Q(A) ? (e.consume(A), M) : n(A);
    }
    function z(A) {
      return A === 45 && i === 2 ? (e.consume(A), L) : A === 60 && i === 1 ? (e.consume(A), O) : A === 62 && i === 4 ? (e.consume(A), ie) : A === 63 && i === 3 ? (e.consume(A), _) : A === 93 && i === 5 ? (e.consume(A), y) : K(A) && (i === 6 || i === 7) ? (e.exit("htmlFlowData"), e.check(If, le, V)(A)) : A === null || K(A) ? (e.exit("htmlFlowData"), V(A)) : (e.consume(A), z);
    }
    function V(A) {
      return e.check(Nf, X, le)(A);
    }
    function X(A) {
      return e.enter("lineEnding"), e.consume(A), e.exit("lineEnding"), G;
    }
    function G(A) {
      return A === null || K(A) ? V(A) : (e.enter("htmlFlowData"), z(A));
    }
    function L(A) {
      return A === 45 ? (e.consume(A), _) : z(A);
    }
    function O(A) {
      return A === 47 ? (e.consume(A), s = "", j) : z(A);
    }
    function j(A) {
      if (A === 62) {
        const oe = s.toLowerCase();
        return du.includes(oe) ? (e.consume(A), ie) : z(A);
      }
      return de(A) && s.length < 8 ? (e.consume(A), s += String.fromCharCode(A), j) : z(A);
    }
    function y(A) {
      return A === 93 ? (e.consume(A), _) : z(A);
    }
    function _(A) {
      return A === 62 ? (e.consume(A), ie) : A === 45 && i === 2 ? (e.consume(A), _) : z(A);
    }
    function ie(A) {
      return A === null || K(A) ? (e.exit("htmlFlowData"), le(A)) : (e.consume(A), ie);
    }
    function le(A) {
      return e.exit("htmlFlow"), t(A);
    }
  }
  function Lf(e, t, n) {
    const r = this;
    return i;
    function i(s) {
      return K(s) ? (e.enter("lineEnding"), e.consume(s), e.exit("lineEnding"), u) : n(s);
    }
    function u(s) {
      return r.parser.lazy[r.now().line] ? n(s) : t(s);
    }
  }
  function Ff(e, t, n) {
    return r;
    function r(i) {
      return e.enter("lineEnding"), e.consume(i), e.exit("lineEnding"), e.attempt(on, t, n);
    }
  }
  const Of = {
    name: "htmlText",
    tokenize: wf
  };
  function wf(e, t, n) {
    const r = this;
    let i, u, s;
    return a;
    function a(_) {
      return e.enter("htmlText"), e.enter("htmlTextData"), e.consume(_), o;
    }
    function o(_) {
      return _ === 33 ? (e.consume(_), l) : _ === 47 ? (e.consume(_), v) : _ === 63 ? (e.consume(_), S) : de(_) ? (e.consume(_), w) : n(_);
    }
    function l(_) {
      return _ === 45 ? (e.consume(_), h) : _ === 91 ? (e.consume(_), u = 0, E) : de(_) ? (e.consume(_), x) : n(_);
    }
    function h(_) {
      return _ === 45 ? (e.consume(_), p) : n(_);
    }
    function f(_) {
      return _ === null ? n(_) : _ === 45 ? (e.consume(_), d) : K(_) ? (s = f, O(_)) : (e.consume(_), f);
    }
    function d(_) {
      return _ === 45 ? (e.consume(_), p) : f(_);
    }
    function p(_) {
      return _ === 62 ? L(_) : _ === 45 ? d(_) : f(_);
    }
    function E(_) {
      const ie = "CDATA[";
      return _ === ie.charCodeAt(u++) ? (e.consume(_), u === ie.length ? m : E) : n(_);
    }
    function m(_) {
      return _ === null ? n(_) : _ === 93 ? (e.consume(_), D) : K(_) ? (s = m, O(_)) : (e.consume(_), m);
    }
    function D(_) {
      return _ === 93 ? (e.consume(_), C) : m(_);
    }
    function C(_) {
      return _ === 62 ? L(_) : _ === 93 ? (e.consume(_), C) : m(_);
    }
    function x(_) {
      return _ === null || _ === 62 ? L(_) : K(_) ? (s = x, O(_)) : (e.consume(_), x);
    }
    function S(_) {
      return _ === null ? n(_) : _ === 63 ? (e.consume(_), B) : K(_) ? (s = S, O(_)) : (e.consume(_), S);
    }
    function B(_) {
      return _ === 62 ? L(_) : S(_);
    }
    function v(_) {
      return de(_) ? (e.consume(_), k) : n(_);
    }
    function k(_) {
      return _ === 45 || he(_) ? (e.consume(_), k) : Y(_);
    }
    function Y(_) {
      return K(_) ? (s = Y, O(_)) : Q(_) ? (e.consume(_), Y) : L(_);
    }
    function w(_) {
      return _ === 45 || he(_) ? (e.consume(_), w) : _ === 47 || _ === 62 || ne(_) ? $(_) : n(_);
    }
    function $(_) {
      return _ === 47 ? (e.consume(_), L) : _ === 58 || _ === 95 || de(_) ? (e.consume(_), I) : K(_) ? (s = $, O(_)) : Q(_) ? (e.consume(_), $) : L(_);
    }
    function I(_) {
      return _ === 45 || _ === 46 || _ === 58 || _ === 95 || he(_) ? (e.consume(_), I) : M(_);
    }
    function M(_) {
      return _ === 61 ? (e.consume(_), z) : K(_) ? (s = M, O(_)) : Q(_) ? (e.consume(_), M) : $(_);
    }
    function z(_) {
      return _ === null || _ === 60 || _ === 61 || _ === 62 || _ === 96 ? n(_) : _ === 34 || _ === 39 ? (e.consume(_), i = _, V) : K(_) ? (s = z, O(_)) : Q(_) ? (e.consume(_), z) : (e.consume(_), X);
    }
    function V(_) {
      return _ === i ? (e.consume(_), i = void 0, G) : _ === null ? n(_) : K(_) ? (s = V, O(_)) : (e.consume(_), V);
    }
    function X(_) {
      return _ === null || _ === 34 || _ === 39 || _ === 60 || _ === 61 || _ === 96 ? n(_) : _ === 47 || _ === 62 || ne(_) ? $(_) : (e.consume(_), X);
    }
    function G(_) {
      return _ === 47 || _ === 62 || ne(_) ? $(_) : n(_);
    }
    function L(_) {
      return _ === 62 ? (e.consume(_), e.exit("htmlTextData"), e.exit("htmlText"), t) : n(_);
    }
    function O(_) {
      return e.exit("htmlTextData"), e.enter("lineEnding"), e.consume(_), e.exit("lineEnding"), j;
    }
    function j(_) {
      return Q(_) ? W(e, y, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(_) : y(_);
    }
    function y(_) {
      return e.enter("htmlTextData"), s(_);
    }
  }
  const fi = {
    name: "labelEnd",
    resolveAll: Mf,
    resolveTo: Uf,
    tokenize: Hf
  }, Rf = {
    tokenize: vf
  }, Bf = {
    tokenize: zf
  }, Pf = {
    tokenize: Yf
  };
  function Mf(e) {
    let t = -1;
    const n = [];
    for (; ++t < e.length; ) {
      const r = e[t][1];
      if (n.push(e[t]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
        const i = r.type === "labelImage" ? 4 : 2;
        r.type = "data", t += i;
      }
    }
    return e.length !== n.length && De(e, 0, e.length, n), e;
  }
  function Uf(e, t) {
    let n = e.length, r = 0, i, u, s, a;
    for (; n--; ) if (i = e[n][1], u) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive) break;
      e[n][0] === "enter" && i.type === "labelLink" && (i._inactive = true);
    } else if (s) {
      if (e[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (u = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (s = n);
    const o = {
      type: e[u][1].type === "labelLink" ? "link" : "image",
      start: {
        ...e[u][1].start
      },
      end: {
        ...e[e.length - 1][1].end
      }
    }, l = {
      type: "label",
      start: {
        ...e[u][1].start
      },
      end: {
        ...e[s][1].end
      }
    }, h = {
      type: "labelText",
      start: {
        ...e[u + r + 2][1].end
      },
      end: {
        ...e[s - 2][1].start
      }
    };
    return a = [
      [
        "enter",
        o,
        t
      ],
      [
        "enter",
        l,
        t
      ]
    ], a = ye(a, e.slice(u + 1, u + r + 3)), a = ye(a, [
      [
        "enter",
        h,
        t
      ]
    ]), a = ye(a, $n(t.parser.constructs.insideSpan.null, e.slice(u + r + 4, s - 3), t)), a = ye(a, [
      [
        "exit",
        h,
        t
      ],
      e[s - 2],
      e[s - 1],
      [
        "exit",
        l,
        t
      ]
    ]), a = ye(a, e.slice(s + 1)), a = ye(a, [
      [
        "exit",
        o,
        t
      ]
    ]), De(e, u, e.length, a), e;
  }
  function Hf(e, t, n) {
    const r = this;
    let i = r.events.length, u, s;
    for (; i--; ) if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      u = r.events[i][1];
      break;
    }
    return a;
    function a(d) {
      return u ? u._inactive ? f(d) : (s = r.parser.defined.includes(Se(r.sliceSerialize({
        start: u.end,
        end: r.now()
      }))), e.enter("labelEnd"), e.enter("labelMarker"), e.consume(d), e.exit("labelMarker"), e.exit("labelEnd"), o) : n(d);
    }
    function o(d) {
      return d === 40 ? e.attempt(Rf, h, s ? h : f)(d) : d === 91 ? e.attempt(Bf, h, s ? l : f)(d) : s ? h(d) : f(d);
    }
    function l(d) {
      return e.attempt(Pf, h, f)(d);
    }
    function h(d) {
      return t(d);
    }
    function f(d) {
      return u._balanced = true, n(d);
    }
  }
  function vf(e, t, n) {
    return r;
    function r(f) {
      return e.enter("resource"), e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), i;
    }
    function i(f) {
      return ne(f) ? Re(e, u)(f) : u(f);
    }
    function u(f) {
      return f === 41 ? h(f) : Vs(e, s, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(f);
    }
    function s(f) {
      return ne(f) ? Re(e, o)(f) : h(f);
    }
    function a(f) {
      return n(f);
    }
    function o(f) {
      return f === 34 || f === 39 || f === 40 ? Ws(e, l, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(f) : h(f);
    }
    function l(f) {
      return ne(f) ? Re(e, h)(f) : h(f);
    }
    function h(f) {
      return f === 41 ? (e.enter("resourceMarker"), e.consume(f), e.exit("resourceMarker"), e.exit("resource"), t) : n(f);
    }
  }
  function zf(e, t, n) {
    const r = this;
    return i;
    function i(a) {
      return Ks.call(r, e, u, s, "reference", "referenceMarker", "referenceString")(a);
    }
    function u(a) {
      return r.parser.defined.includes(Se(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? t(a) : n(a);
    }
    function s(a) {
      return n(a);
    }
  }
  function Yf(e, t, n) {
    return r;
    function r(u) {
      return e.enter("reference"), e.enter("referenceMarker"), e.consume(u), e.exit("referenceMarker"), i;
    }
    function i(u) {
      return u === 93 ? (e.enter("referenceMarker"), e.consume(u), e.exit("referenceMarker"), e.exit("reference"), t) : n(u);
    }
  }
  const qf = {
    name: "labelStartImage",
    resolveAll: fi.resolveAll,
    tokenize: $f
  };
  function $f(e, t, n) {
    const r = this;
    return i;
    function i(a) {
      return e.enter("labelImage"), e.enter("labelImageMarker"), e.consume(a), e.exit("labelImageMarker"), u;
    }
    function u(a) {
      return a === 91 ? (e.enter("labelMarker"), e.consume(a), e.exit("labelMarker"), e.exit("labelImage"), s) : n(a);
    }
    function s(a) {
      return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : t(a);
    }
  }
  const jf = {
    name: "labelStartLink",
    resolveAll: fi.resolveAll,
    tokenize: Vf
  };
  function Vf(e, t, n) {
    const r = this;
    return i;
    function i(s) {
      return e.enter("labelLink"), e.enter("labelMarker"), e.consume(s), e.exit("labelMarker"), e.exit("labelLink"), u;
    }
    function u(s) {
      return s === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(s) : t(s);
    }
  }
  const mr = {
    name: "lineEnding",
    tokenize: Kf
  };
  function Kf(e, t) {
    return n;
    function n(r) {
      return e.enter("lineEnding"), e.consume(r), e.exit("lineEnding"), W(e, t, "linePrefix");
    }
  }
  const Nn = {
    name: "thematicBreak",
    tokenize: Wf
  };
  function Wf(e, t, n) {
    let r = 0, i;
    return u;
    function u(l) {
      return e.enter("thematicBreak"), s(l);
    }
    function s(l) {
      return i = l, a(l);
    }
    function a(l) {
      return l === i ? (e.enter("thematicBreakSequence"), o(l)) : r >= 3 && (l === null || K(l)) ? (e.exit("thematicBreak"), t(l)) : n(l);
    }
    function o(l) {
      return l === i ? (e.consume(l), r++, o) : (e.exit("thematicBreakSequence"), Q(l) ? W(e, a, "whitespace")(l) : a(l));
    }
  }
  const Ae = {
    continuation: {
      tokenize: Jf
    },
    exit: eh,
    name: "list",
    tokenize: Xf
  }, Gf = {
    partial: true,
    tokenize: th
  }, Qf = {
    partial: true,
    tokenize: Zf
  };
  function Xf(e, t, n) {
    const r = this, i = r.events[r.events.length - 1];
    let u = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], true).length : 0, s = 0;
    return a;
    function a(p) {
      const E = r.containerState.type || (p === 42 || p === 43 || p === 45 ? "listUnordered" : "listOrdered");
      if (E === "listUnordered" ? !r.containerState.marker || p === r.containerState.marker : zr(p)) {
        if (r.containerState.type || (r.containerState.type = E, e.enter(E, {
          _container: true
        })), E === "listUnordered") return e.enter("listItemPrefix"), p === 42 || p === 45 ? e.check(Nn, n, l)(p) : l(p);
        if (!r.interrupt || p === 49) return e.enter("listItemPrefix"), e.enter("listItemValue"), o(p);
      }
      return n(p);
    }
    function o(p) {
      return zr(p) && ++s < 10 ? (e.consume(p), o) : (!r.interrupt || s < 2) && (r.containerState.marker ? p === r.containerState.marker : p === 41 || p === 46) ? (e.exit("listItemValue"), l(p)) : n(p);
    }
    function l(p) {
      return e.enter("listItemMarker"), e.consume(p), e.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || p, e.check(on, r.interrupt ? n : h, e.attempt(Gf, d, f));
    }
    function h(p) {
      return r.containerState.initialBlankLine = true, u++, d(p);
    }
    function f(p) {
      return Q(p) ? (e.enter("listItemPrefixWhitespace"), e.consume(p), e.exit("listItemPrefixWhitespace"), d) : n(p);
    }
    function d(p) {
      return r.containerState.size = u + r.sliceSerialize(e.exit("listItemPrefix"), true).length, t(p);
    }
  }
  function Jf(e, t, n) {
    const r = this;
    return r.containerState._closeFlow = void 0, e.check(on, i, u);
    function i(a) {
      return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, W(e, t, "listItemIndent", r.containerState.size + 1)(a);
    }
    function u(a) {
      return r.containerState.furtherBlankLines || !Q(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, s(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, e.attempt(Qf, t, s)(a));
    }
    function s(a) {
      return r.containerState._closeFlow = true, r.interrupt = void 0, W(e, e.attempt(Ae, t, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
    }
  }
  function Zf(e, t, n) {
    const r = this;
    return W(e, i, "listItemIndent", r.containerState.size + 1);
    function i(u) {
      const s = r.events[r.events.length - 1];
      return s && s[1].type === "listItemIndent" && s[2].sliceSerialize(s[1], true).length === r.containerState.size ? t(u) : n(u);
    }
  }
  function eh(e) {
    e.exit(this.containerState.type);
  }
  function th(e, t, n) {
    const r = this;
    return W(e, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
    function i(u) {
      const s = r.events[r.events.length - 1];
      return !Q(u) && s && s[1].type === "listItemPrefixWhitespace" ? t(u) : n(u);
    }
  }
  const mu = {
    name: "setextUnderline",
    resolveTo: nh,
    tokenize: rh
  };
  function nh(e, t) {
    let n = e.length, r, i, u;
    for (; n--; ) if (e[n][0] === "enter") {
      if (e[n][1].type === "content") {
        r = n;
        break;
      }
      e[n][1].type === "paragraph" && (i = n);
    } else e[n][1].type === "content" && e.splice(n, 1), !u && e[n][1].type === "definition" && (u = n);
    const s = {
      type: "setextHeading",
      start: {
        ...e[r][1].start
      },
      end: {
        ...e[e.length - 1][1].end
      }
    };
    return e[i][1].type = "setextHeadingText", u ? (e.splice(i, 0, [
      "enter",
      s,
      t
    ]), e.splice(u + 1, 0, [
      "exit",
      e[r][1],
      t
    ]), e[r][1].end = {
      ...e[u][1].end
    }) : e[r][1] = s, e.push([
      "exit",
      s,
      t
    ]), e;
  }
  function rh(e, t, n) {
    const r = this;
    let i;
    return u;
    function u(l) {
      let h = r.events.length, f;
      for (; h--; ) if (r.events[h][1].type !== "lineEnding" && r.events[h][1].type !== "linePrefix" && r.events[h][1].type !== "content") {
        f = r.events[h][1].type === "paragraph";
        break;
      }
      return !r.parser.lazy[r.now().line] && (r.interrupt || f) ? (e.enter("setextHeadingLine"), i = l, s(l)) : n(l);
    }
    function s(l) {
      return e.enter("setextHeadingLineSequence"), a(l);
    }
    function a(l) {
      return l === i ? (e.consume(l), a) : (e.exit("setextHeadingLineSequence"), Q(l) ? W(e, o, "lineSuffix")(l) : o(l));
    }
    function o(l) {
      return l === null || K(l) ? (e.exit("setextHeadingLine"), t(l)) : n(l);
    }
  }
  const ih = {
    tokenize: uh
  };
  function uh(e) {
    const t = this, n = e.attempt(on, r, e.attempt(this.parser.constructs.flowInitial, i, W(e, e.attempt(this.parser.constructs.flow, i, e.attempt(lf, i)), "linePrefix")));
    return n;
    function r(u) {
      if (u === null) {
        e.consume(u);
        return;
      }
      return e.enter("lineEndingBlank"), e.consume(u), e.exit("lineEndingBlank"), t.currentConstruct = void 0, n;
    }
    function i(u) {
      if (u === null) {
        e.consume(u);
        return;
      }
      return e.enter("lineEnding"), e.consume(u), e.exit("lineEnding"), t.currentConstruct = void 0, n;
    }
  }
  const sh = {
    resolveAll: Qs()
  }, ah = Gs("string"), oh = Gs("text");
  function Gs(e) {
    return {
      resolveAll: Qs(e === "text" ? ch : void 0),
      tokenize: t
    };
    function t(n) {
      const r = this, i = this.parser.constructs[e], u = n.attempt(i, s, a);
      return s;
      function s(h) {
        return l(h) ? u(h) : a(h);
      }
      function a(h) {
        if (h === null) {
          n.consume(h);
          return;
        }
        return n.enter("data"), n.consume(h), o;
      }
      function o(h) {
        return l(h) ? (n.exit("data"), u(h)) : (n.consume(h), o);
      }
      function l(h) {
        if (h === null) return true;
        const f = i[h];
        let d = -1;
        if (f) for (; ++d < f.length; ) {
          const p = f[d];
          if (!p.previous || p.previous.call(r, r.previous)) return true;
        }
        return false;
      }
    }
  }
  function Qs(e) {
    return t;
    function t(n, r) {
      let i = -1, u;
      for (; ++i <= n.length; ) u === void 0 ? n[i] && n[i][1].type === "data" && (u = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== u + 2 && (n[u][1].end = n[i - 1][1].end, n.splice(u + 2, i - u - 2), i = u + 2), u = void 0);
      return e ? e(n, r) : n;
    }
  }
  function ch(e, t) {
    let n = 0;
    for (; ++n <= e.length; ) if ((n === e.length || e[n][1].type === "lineEnding") && e[n - 1][1].type === "data") {
      const r = e[n - 1][1], i = t.sliceStream(r);
      let u = i.length, s = -1, a = 0, o;
      for (; u--; ) {
        const l = i[u];
        if (typeof l == "string") {
          for (s = l.length; l.charCodeAt(s - 1) === 32; ) a++, s--;
          if (s) break;
          s = -1;
        } else if (l === -2) o = true, a++;
        else if (l !== -1) {
          u++;
          break;
        }
      }
      if (t._contentTypeTextTrailing && n === e.length && (a = 0), a) {
        const l = {
          type: n === e.length || o || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: u ? s : r.start._bufferIndex + s,
            _index: r.start._index + u,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...l.start
        }, r.start.offset === r.end.offset ? Object.assign(r, l) : (e.splice(n, 0, [
          "enter",
          l,
          t
        ], [
          "exit",
          l,
          t
        ]), n += 2);
      }
      n++;
    }
    return e;
  }
  const lh = {
    42: Ae,
    43: Ae,
    45: Ae,
    48: Ae,
    49: Ae,
    50: Ae,
    51: Ae,
    52: Ae,
    53: Ae,
    54: Ae,
    55: Ae,
    56: Ae,
    57: Ae,
    62: Ys
  }, fh = {
    91: mf
  }, hh = {
    [-2]: dr,
    [-1]: dr,
    32: dr
  }, ph = {
    35: Cf,
    42: Nn,
    45: [
      mu,
      Nn
    ],
    60: kf,
    61: mu,
    95: Nn,
    96: qr,
    126: qr
  }, dh = {
    38: $s,
    92: qs
  }, mh = {
    [-5]: mr,
    [-4]: mr,
    [-3]: mr,
    33: qf,
    38: $s,
    42: Yr,
    60: [
      $l,
      Of
    ],
    91: jf,
    92: [
      Tf,
      qs
    ],
    93: fi,
    95: Yr,
    96: rf
  }, Eh = {
    null: [
      Yr,
      sh
    ]
  }, gh = {
    null: [
      42,
      95
    ]
  }, bh = {
    null: []
  }, Th = Object.freeze(Object.defineProperty({
    __proto__: null,
    attentionMarkers: gh,
    contentInitial: fh,
    disable: bh,
    document: lh,
    flow: ph,
    flowInitial: hh,
    insideSpan: Eh,
    string: dh,
    text: mh
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  function Ah(e, t, n) {
    let r = {
      _bufferIndex: -1,
      _index: 0,
      line: n && n.line || 1,
      column: n && n.column || 1,
      offset: n && n.offset || 0
    };
    const i = {}, u = [];
    let s = [], a = [];
    const o = {
      attempt: Y(v),
      check: Y(k),
      consume: x,
      enter: S,
      exit: B,
      interrupt: Y(k, {
        interrupt: true
      })
    }, l = {
      code: null,
      containerState: {},
      defineSkip: m,
      events: [],
      now: E,
      parser: e,
      previous: null,
      sliceSerialize: d,
      sliceStream: p,
      write: f
    };
    let h = t.tokenize.call(l, o);
    return t.resolveAll && u.push(t), l;
    function f(M) {
      return s = ye(s, M), D(), s[s.length - 1] !== null ? [] : (w(t, 0), l.events = $n(u, l.events, l), l.events);
    }
    function d(M, z) {
      return _h(p(M), z);
    }
    function p(M) {
      return Ch(s, M);
    }
    function E() {
      const { _bufferIndex: M, _index: z, line: V, column: X, offset: G } = r;
      return {
        _bufferIndex: M,
        _index: z,
        line: V,
        column: X,
        offset: G
      };
    }
    function m(M) {
      i[M.line] = M.column, I();
    }
    function D() {
      let M;
      for (; r._index < s.length; ) {
        const z = s[r._index];
        if (typeof z == "string") for (M = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === M && r._bufferIndex < z.length; ) C(z.charCodeAt(r._bufferIndex));
        else C(z);
      }
    }
    function C(M) {
      h = h(M);
    }
    function x(M) {
      K(M) ? (r.line++, r.column = 1, r.offset += M === -3 ? 2 : 1, I()) : M !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === s[r._index].length && (r._bufferIndex = -1, r._index++)), l.previous = M;
    }
    function S(M, z) {
      const V = z || {};
      return V.type = M, V.start = E(), l.events.push([
        "enter",
        V,
        l
      ]), a.push(V), V;
    }
    function B(M) {
      const z = a.pop();
      return z.end = E(), l.events.push([
        "exit",
        z,
        l
      ]), z;
    }
    function v(M, z) {
      w(M, z.from);
    }
    function k(M, z) {
      z.restore();
    }
    function Y(M, z) {
      return V;
      function V(X, G, L) {
        let O, j, y, _;
        return Array.isArray(X) ? le(X) : "tokenize" in X ? le([
          X
        ]) : ie(X);
        function ie(Ee) {
          return Ft;
          function Ft(qe) {
            const ct = qe !== null && Ee[qe], lt = qe !== null && Ee.null, dn = [
              ...Array.isArray(ct) ? ct : ct ? [
                ct
              ] : [],
              ...Array.isArray(lt) ? lt : lt ? [
                lt
              ] : []
            ];
            return le(dn)(qe);
          }
        }
        function le(Ee) {
          return O = Ee, j = 0, Ee.length === 0 ? L : A(Ee[j]);
        }
        function A(Ee) {
          return Ft;
          function Ft(qe) {
            return _ = $(), y = Ee, Ee.partial || (l.currentConstruct = Ee), Ee.name && l.parser.constructs.disable.null.includes(Ee.name) ? Je() : Ee.tokenize.call(z ? Object.assign(Object.create(l), z) : l, o, oe, Je)(qe);
          }
        }
        function oe(Ee) {
          return M(y, _), G;
        }
        function Je(Ee) {
          return _.restore(), ++j < O.length ? A(O[j]) : L;
        }
      }
    }
    function w(M, z) {
      M.resolveAll && !u.includes(M) && u.push(M), M.resolve && De(l.events, z, l.events.length - z, M.resolve(l.events.slice(z), l)), M.resolveTo && (l.events = M.resolveTo(l.events, l));
    }
    function $() {
      const M = E(), z = l.previous, V = l.currentConstruct, X = l.events.length, G = Array.from(a);
      return {
        from: X,
        restore: L
      };
      function L() {
        r = M, l.previous = z, l.currentConstruct = V, l.events.length = X, a = G, I();
      }
    }
    function I() {
      r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
    }
  }
  function Ch(e, t) {
    const n = t.start._index, r = t.start._bufferIndex, i = t.end._index, u = t.end._bufferIndex;
    let s;
    if (n === i) s = [
      e[n].slice(r, u)
    ];
    else {
      if (s = e.slice(n, i), r > -1) {
        const a = s[0];
        typeof a == "string" ? s[0] = a.slice(r) : s.shift();
      }
      u > 0 && s.push(e[i].slice(0, u));
    }
    return s;
  }
  function _h(e, t) {
    let n = -1;
    const r = [];
    let i;
    for (; ++n < e.length; ) {
      const u = e[n];
      let s;
      if (typeof u == "string") s = u;
      else switch (u) {
        case -5: {
          s = "\r";
          break;
        }
        case -4: {
          s = `
`;
          break;
        }
        case -3: {
          s = `\r
`;
          break;
        }
        case -2: {
          s = t ? " " : "	";
          break;
        }
        case -1: {
          if (!t && i) continue;
          s = " ";
          break;
        }
        default:
          s = String.fromCharCode(u);
      }
      i = u === -2, r.push(s);
    }
    return r.join("");
  }
  function Dh(e) {
    const r = {
      constructs: vs([
        Th,
        ...(e || {}).extensions || []
      ]),
      content: i(Ml),
      defined: [],
      document: i(Hl),
      flow: i(ih),
      lazy: {},
      string: i(ah),
      text: i(oh)
    };
    return r;
    function i(u) {
      return s;
      function s(a) {
        return Ah(r, u, a);
      }
    }
  }
  function yh(e) {
    for (; !js(e); ) ;
    return e;
  }
  const Eu = /[\0\t\n\r]/g;
  function kh() {
    let e = 1, t = "", n = true, r;
    return i;
    function i(u, s, a) {
      const o = [];
      let l, h, f, d, p;
      for (u = t + (typeof u == "string" ? u.toString() : new TextDecoder(s || void 0).decode(u)), f = 0, t = "", n && (u.charCodeAt(0) === 65279 && f++, n = void 0); f < u.length; ) {
        if (Eu.lastIndex = f, l = Eu.exec(u), d = l && l.index !== void 0 ? l.index : u.length, p = u.charCodeAt(d), !l) {
          t = u.slice(f);
          break;
        }
        if (p === 10 && f === d && r) o.push(-3), r = void 0;
        else switch (r && (o.push(-5), r = void 0), f < d && (o.push(u.slice(f, d)), e += d - f), p) {
          case 0: {
            o.push(65533), e++;
            break;
          }
          case 9: {
            for (h = Math.ceil(e / 4) * 4, o.push(-2); e++ < h; ) o.push(-1);
            break;
          }
          case 10: {
            o.push(-4), e = 1;
            break;
          }
          default:
            r = true, e = 1;
        }
        f = d + 1;
      }
      return a && (r && o.push(-5), t && o.push(t), o.push(null)), o;
    }
  }
  const Ih = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
  function Xs(e) {
    return e.replace(Ih, Nh);
  }
  function Nh(e, t, n) {
    if (t) return t;
    if (n.charCodeAt(0) === 35) {
      const i = n.charCodeAt(1), u = i === 120 || i === 88;
      return zs(n.slice(u ? 2 : 1), u ? 16 : 10);
    }
    return nn(n) || e;
  }
  const Js = {}.hasOwnProperty;
  function Sh(e, t, n) {
    return typeof t != "string" && (n = t, t = void 0), xh(n)(yh(Dh(n).document().write(kh()(e, t, true))));
  }
  function xh(e) {
    const t = {
      transforms: [],
      canContainEols: [
        "emphasis",
        "fragment",
        "heading",
        "paragraph",
        "strong"
      ],
      enter: {
        autolink: u(Vi),
        autolinkProtocol: $,
        autolinkEmail: $,
        atxHeading: u(qi),
        blockQuote: u(lt),
        characterEscape: $,
        characterReference: $,
        codeFenced: u(dn),
        codeFencedFenceInfo: s,
        codeFencedFenceMeta: s,
        codeIndented: u(dn, s),
        codeText: u(Dc, s),
        codeTextData: $,
        data: $,
        codeFlowValue: $,
        definition: u(yc),
        definitionDestinationString: s,
        definitionLabelString: s,
        definitionTitleString: s,
        emphasis: u(kc),
        hardBreakEscape: u($i),
        hardBreakTrailing: u($i),
        htmlFlow: u(ji, s),
        htmlFlowData: $,
        htmlText: u(ji, s),
        htmlTextData: $,
        image: u(Ic),
        label: s,
        link: u(Vi),
        listItem: u(Nc),
        listItemValue: d,
        listOrdered: u(Ki, f),
        listUnordered: u(Ki),
        paragraph: u(Sc),
        reference: A,
        referenceString: s,
        resourceDestinationString: s,
        resourceTitleString: s,
        setextHeading: u(qi),
        strong: u(xc),
        thematicBreak: u(Fc)
      },
      exit: {
        atxHeading: o(),
        atxHeadingSequence: v,
        autolink: o(),
        autolinkEmail: ct,
        autolinkProtocol: qe,
        blockQuote: o(),
        characterEscapeValue: I,
        characterReferenceMarkerHexadecimal: Je,
        characterReferenceMarkerNumeric: Je,
        characterReferenceValue: Ee,
        characterReference: Ft,
        codeFenced: o(D),
        codeFencedFence: m,
        codeFencedFenceInfo: p,
        codeFencedFenceMeta: E,
        codeFlowValue: I,
        codeIndented: o(C),
        codeText: o(G),
        codeTextData: I,
        data: I,
        definition: o(),
        definitionDestinationString: B,
        definitionLabelString: x,
        definitionTitleString: S,
        emphasis: o(),
        hardBreakEscape: o(z),
        hardBreakTrailing: o(z),
        htmlFlow: o(V),
        htmlFlowData: I,
        htmlText: o(X),
        htmlTextData: I,
        image: o(O),
        label: y,
        labelText: j,
        lineEnding: M,
        link: o(L),
        listItem: o(),
        listOrdered: o(),
        listUnordered: o(),
        paragraph: o(),
        referenceString: oe,
        resourceDestinationString: _,
        resourceTitleString: ie,
        resource: le,
        setextHeading: o(w),
        setextHeadingLineSequence: Y,
        setextHeadingText: k,
        strong: o(),
        thematicBreak: o()
      }
    };
    Zs(t, (e || {}).mdastExtensions || []);
    const n = {};
    return r;
    function r(P) {
      let q = {
        type: "root",
        children: []
      };
      const J = {
        stack: [
          q
        ],
        tokenStack: [],
        config: t,
        enter: a,
        exit: l,
        buffer: s,
        resume: h,
        data: n
      }, re = [];
      let ue = -1;
      for (; ++ue < P.length; ) if (P[ue][1].type === "listOrdered" || P[ue][1].type === "listUnordered") if (P[ue][0] === "enter") re.push(ue);
      else {
        const Ne = re.pop();
        ue = i(P, Ne, ue);
      }
      for (ue = -1; ++ue < P.length; ) {
        const Ne = t[P[ue][0]];
        Js.call(Ne, P[ue][1].type) && Ne[P[ue][1].type].call(Object.assign({
          sliceSerialize: P[ue][2].sliceSerialize
        }, J), P[ue][1]);
      }
      if (J.tokenStack.length > 0) {
        const Ne = J.tokenStack[J.tokenStack.length - 1];
        (Ne[1] || gu).call(J, void 0, Ne[0]);
      }
      for (q.position = {
        start: $e(P.length > 0 ? P[0][1].start : {
          line: 1,
          column: 1,
          offset: 0
        }),
        end: $e(P.length > 0 ? P[P.length - 2][1].end : {
          line: 1,
          column: 1,
          offset: 0
        })
      }, ue = -1; ++ue < t.transforms.length; ) q = t.transforms[ue](q) || q;
      return q;
    }
    function i(P, q, J) {
      let re = q - 1, ue = -1, Ne = false, Ze, Pe, Ot, wt;
      for (; ++re <= J; ) {
        const _e = P[re];
        switch (_e[1].type) {
          case "listUnordered":
          case "listOrdered":
          case "blockQuote": {
            _e[0] === "enter" ? ue++ : ue--, wt = void 0;
            break;
          }
          case "lineEndingBlank": {
            _e[0] === "enter" && (Ze && !wt && !ue && !Ot && (Ot = re), wt = void 0);
            break;
          }
          case "linePrefix":
          case "listItemValue":
          case "listItemMarker":
          case "listItemPrefix":
          case "listItemPrefixWhitespace":
            break;
          default:
            wt = void 0;
        }
        if (!ue && _e[0] === "enter" && _e[1].type === "listItemPrefix" || ue === -1 && _e[0] === "exit" && (_e[1].type === "listUnordered" || _e[1].type === "listOrdered")) {
          if (Ze) {
            let ft = re;
            for (Pe = void 0; ft--; ) {
              const Me = P[ft];
              if (Me[1].type === "lineEnding" || Me[1].type === "lineEndingBlank") {
                if (Me[0] === "exit") continue;
                Pe && (P[Pe][1].type = "lineEndingBlank", Ne = true), Me[1].type = "lineEnding", Pe = ft;
              } else if (!(Me[1].type === "linePrefix" || Me[1].type === "blockQuotePrefix" || Me[1].type === "blockQuotePrefixWhitespace" || Me[1].type === "blockQuoteMarker" || Me[1].type === "listItemIndent")) break;
            }
            Ot && (!Pe || Ot < Pe) && (Ze._spread = true), Ze.end = Object.assign({}, Pe ? P[Pe][1].start : _e[1].end), P.splice(Pe || re, 0, [
              "exit",
              Ze,
              _e[2]
            ]), re++, J++;
          }
          if (_e[1].type === "listItemPrefix") {
            const ft = {
              type: "listItem",
              _spread: false,
              start: Object.assign({}, _e[1].start),
              end: void 0
            };
            Ze = ft, P.splice(re, 0, [
              "enter",
              ft,
              _e[2]
            ]), re++, J++, Ot = void 0, wt = true;
          }
        }
      }
      return P[q][1]._spread = Ne, J;
    }
    function u(P, q) {
      return J;
      function J(re) {
        a.call(this, P(re), re), q && q.call(this, re);
      }
    }
    function s() {
      this.stack.push({
        type: "fragment",
        children: []
      });
    }
    function a(P, q, J) {
      this.stack[this.stack.length - 1].children.push(P), this.stack.push(P), this.tokenStack.push([
        q,
        J || void 0
      ]), P.position = {
        start: $e(q.start),
        end: void 0
      };
    }
    function o(P) {
      return q;
      function q(J) {
        P && P.call(this, J), l.call(this, J);
      }
    }
    function l(P, q) {
      const J = this.stack.pop(), re = this.tokenStack.pop();
      if (re) re[0].type !== P.type && (q ? q.call(this, P, re[0]) : (re[1] || gu).call(this, P, re[0]));
      else throw new Error("Cannot close `" + P.type + "` (" + Vt({
        start: P.start,
        end: P.end
      }) + "): it\u2019s not open");
      J.position.end = $e(P.end);
    }
    function h() {
      return Yn(this.stack.pop());
    }
    function f() {
      this.data.expectingFirstListItemValue = true;
    }
    function d(P) {
      if (this.data.expectingFirstListItemValue) {
        const q = this.stack[this.stack.length - 2];
        q.start = Number.parseInt(this.sliceSerialize(P), 10), this.data.expectingFirstListItemValue = void 0;
      }
    }
    function p() {
      const P = this.resume(), q = this.stack[this.stack.length - 1];
      q.lang = P;
    }
    function E() {
      const P = this.resume(), q = this.stack[this.stack.length - 1];
      q.meta = P;
    }
    function m() {
      this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = true);
    }
    function D() {
      const P = this.resume(), q = this.stack[this.stack.length - 1];
      q.value = P.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
    }
    function C() {
      const P = this.resume(), q = this.stack[this.stack.length - 1];
      q.value = P.replace(/(\r?\n|\r)$/g, "");
    }
    function x(P) {
      const q = this.resume(), J = this.stack[this.stack.length - 1];
      J.label = q, J.identifier = Se(this.sliceSerialize(P)).toLowerCase();
    }
    function S() {
      const P = this.resume(), q = this.stack[this.stack.length - 1];
      q.title = P;
    }
    function B() {
      const P = this.resume(), q = this.stack[this.stack.length - 1];
      q.url = P;
    }
    function v(P) {
      const q = this.stack[this.stack.length - 1];
      if (!q.depth) {
        const J = this.sliceSerialize(P).length;
        q.depth = J;
      }
    }
    function k() {
      this.data.setextHeadingSlurpLineEnding = true;
    }
    function Y(P) {
      const q = this.stack[this.stack.length - 1];
      q.depth = this.sliceSerialize(P).codePointAt(0) === 61 ? 1 : 2;
    }
    function w() {
      this.data.setextHeadingSlurpLineEnding = void 0;
    }
    function $(P) {
      const J = this.stack[this.stack.length - 1].children;
      let re = J[J.length - 1];
      (!re || re.type !== "text") && (re = Lc(), re.position = {
        start: $e(P.start),
        end: void 0
      }, J.push(re)), this.stack.push(re);
    }
    function I(P) {
      const q = this.stack.pop();
      q.value += this.sliceSerialize(P), q.position.end = $e(P.end);
    }
    function M(P) {
      const q = this.stack[this.stack.length - 1];
      if (this.data.atHardBreak) {
        const J = q.children[q.children.length - 1];
        J.position.end = $e(P.end), this.data.atHardBreak = void 0;
        return;
      }
      !this.data.setextHeadingSlurpLineEnding && t.canContainEols.includes(q.type) && ($.call(this, P), I.call(this, P));
    }
    function z() {
      this.data.atHardBreak = true;
    }
    function V() {
      const P = this.resume(), q = this.stack[this.stack.length - 1];
      q.value = P;
    }
    function X() {
      const P = this.resume(), q = this.stack[this.stack.length - 1];
      q.value = P;
    }
    function G() {
      const P = this.resume(), q = this.stack[this.stack.length - 1];
      q.value = P;
    }
    function L() {
      const P = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const q = this.data.referenceType || "shortcut";
        P.type += "Reference", P.referenceType = q, delete P.url, delete P.title;
      } else delete P.identifier, delete P.label;
      this.data.referenceType = void 0;
    }
    function O() {
      const P = this.stack[this.stack.length - 1];
      if (this.data.inReference) {
        const q = this.data.referenceType || "shortcut";
        P.type += "Reference", P.referenceType = q, delete P.url, delete P.title;
      } else delete P.identifier, delete P.label;
      this.data.referenceType = void 0;
    }
    function j(P) {
      const q = this.sliceSerialize(P), J = this.stack[this.stack.length - 2];
      J.label = Xs(q), J.identifier = Se(q).toLowerCase();
    }
    function y() {
      const P = this.stack[this.stack.length - 1], q = this.resume(), J = this.stack[this.stack.length - 1];
      if (this.data.inReference = true, J.type === "link") {
        const re = P.children;
        J.children = re;
      } else J.alt = q;
    }
    function _() {
      const P = this.resume(), q = this.stack[this.stack.length - 1];
      q.url = P;
    }
    function ie() {
      const P = this.resume(), q = this.stack[this.stack.length - 1];
      q.title = P;
    }
    function le() {
      this.data.inReference = void 0;
    }
    function A() {
      this.data.referenceType = "collapsed";
    }
    function oe(P) {
      const q = this.resume(), J = this.stack[this.stack.length - 1];
      J.label = q, J.identifier = Se(this.sliceSerialize(P)).toLowerCase(), this.data.referenceType = "full";
    }
    function Je(P) {
      this.data.characterReferenceType = P.type;
    }
    function Ee(P) {
      const q = this.sliceSerialize(P), J = this.data.characterReferenceType;
      let re;
      J ? (re = zs(q, J === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : re = nn(q);
      const ue = this.stack[this.stack.length - 1];
      ue.value += re;
    }
    function Ft(P) {
      const q = this.stack.pop();
      q.position.end = $e(P.end);
    }
    function qe(P) {
      I.call(this, P);
      const q = this.stack[this.stack.length - 1];
      q.url = this.sliceSerialize(P);
    }
    function ct(P) {
      I.call(this, P);
      const q = this.stack[this.stack.length - 1];
      q.url = "mailto:" + this.sliceSerialize(P);
    }
    function lt() {
      return {
        type: "blockquote",
        children: []
      };
    }
    function dn() {
      return {
        type: "code",
        lang: null,
        meta: null,
        value: ""
      };
    }
    function Dc() {
      return {
        type: "inlineCode",
        value: ""
      };
    }
    function yc() {
      return {
        type: "definition",
        identifier: "",
        label: null,
        title: null,
        url: ""
      };
    }
    function kc() {
      return {
        type: "emphasis",
        children: []
      };
    }
    function qi() {
      return {
        type: "heading",
        depth: 0,
        children: []
      };
    }
    function $i() {
      return {
        type: "break"
      };
    }
    function ji() {
      return {
        type: "html",
        value: ""
      };
    }
    function Ic() {
      return {
        type: "image",
        title: null,
        url: "",
        alt: null
      };
    }
    function Vi() {
      return {
        type: "link",
        title: null,
        url: "",
        children: []
      };
    }
    function Ki(P) {
      return {
        type: "list",
        ordered: P.type === "listOrdered",
        start: null,
        spread: P._spread,
        children: []
      };
    }
    function Nc(P) {
      return {
        type: "listItem",
        spread: P._spread,
        checked: null,
        children: []
      };
    }
    function Sc() {
      return {
        type: "paragraph",
        children: []
      };
    }
    function xc() {
      return {
        type: "strong",
        children: []
      };
    }
    function Lc() {
      return {
        type: "text",
        value: ""
      };
    }
    function Fc() {
      return {
        type: "thematicBreak"
      };
    }
  }
  function $e(e) {
    return {
      line: e.line,
      column: e.column,
      offset: e.offset
    };
  }
  function Zs(e, t) {
    let n = -1;
    for (; ++n < t.length; ) {
      const r = t[n];
      Array.isArray(r) ? Zs(e, r) : Lh(e, r);
    }
  }
  function Lh(e, t) {
    let n;
    for (n in t) if (Js.call(t, n)) switch (n) {
      case "canContainEols": {
        const r = t[n];
        r && e[n].push(...r);
        break;
      }
      case "transforms": {
        const r = t[n];
        r && e[n].push(...r);
        break;
      }
      case "enter":
      case "exit": {
        const r = t[n];
        r && Object.assign(e[n], r);
        break;
      }
    }
  }
  function gu(e, t) {
    throw e ? new Error("Cannot close `" + e.type + "` (" + Vt({
      start: e.start,
      end: e.end
    }) + "): a different token (`" + t.type + "`, " + Vt({
      start: t.start,
      end: t.end
    }) + ") is open") : new Error("Cannot close document, a token (`" + t.type + "`, " + Vt({
      start: t.start,
      end: t.end
    }) + ") is still open");
  }
  function Fh(e) {
    const t = this;
    t.parser = n;
    function n(r) {
      return Sh(r, {
        ...t.data("settings"),
        ...e,
        extensions: t.data("micromarkExtensions") || [],
        mdastExtensions: t.data("fromMarkdownExtensions") || []
      });
    }
  }
  function Oh(e, t) {
    const n = {
      type: "element",
      tagName: "blockquote",
      properties: {},
      children: e.wrap(e.all(t), true)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function wh(e, t) {
    const n = {
      type: "element",
      tagName: "br",
      properties: {},
      children: []
    };
    return e.patch(t, n), [
      e.applyData(t, n),
      {
        type: "text",
        value: `
`
      }
    ];
  }
  function Rh(e, t) {
    const n = t.value ? t.value + `
` : "", r = {}, i = t.lang ? t.lang.split(/\s+/) : [];
    i.length > 0 && (r.className = [
      "language-" + i[0]
    ]);
    let u = {
      type: "element",
      tagName: "code",
      properties: r,
      children: [
        {
          type: "text",
          value: n
        }
      ]
    };
    return t.meta && (u.data = {
      meta: t.meta
    }), e.patch(t, u), u = e.applyData(t, u), u = {
      type: "element",
      tagName: "pre",
      properties: {},
      children: [
        u
      ]
    }, e.patch(t, u), u;
  }
  function Bh(e, t) {
    const n = {
      type: "element",
      tagName: "del",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function Ph(e, t) {
    const n = {
      type: "element",
      tagName: "em",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function Mh(e, t) {
    const n = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", r = String(t.identifier).toUpperCase(), i = Xe(r.toLowerCase()), u = e.footnoteOrder.indexOf(r);
    let s, a = e.footnoteCounts.get(r);
    a === void 0 ? (a = 0, e.footnoteOrder.push(r), s = e.footnoteOrder.length) : s = u + 1, a += 1, e.footnoteCounts.set(r, a);
    const o = {
      type: "element",
      tagName: "a",
      properties: {
        href: "#" + n + "fn-" + i,
        id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
        dataFootnoteRef: true,
        ariaDescribedBy: [
          "footnote-label"
        ]
      },
      children: [
        {
          type: "text",
          value: String(s)
        }
      ]
    };
    e.patch(t, o);
    const l = {
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        o
      ]
    };
    return e.patch(t, l), e.applyData(t, l);
  }
  function Uh(e, t) {
    const n = {
      type: "element",
      tagName: "h" + t.depth,
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function Hh(e, t) {
    if (e.options.allowDangerousHtml) {
      const n = {
        type: "raw",
        value: t.value
      };
      return e.patch(t, n), e.applyData(t, n);
    }
  }
  function ea(e, t) {
    const n = t.referenceType;
    let r = "]";
    if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (t.label || t.identifier) + "]"), t.type === "imageReference") return [
      {
        type: "text",
        value: "![" + t.alt + r
      }
    ];
    const i = e.all(t), u = i[0];
    u && u.type === "text" ? u.value = "[" + u.value : i.unshift({
      type: "text",
      value: "["
    });
    const s = i[i.length - 1];
    return s && s.type === "text" ? s.value += r : i.push({
      type: "text",
      value: r
    }), i;
  }
  function vh(e, t) {
    const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
    if (!r) return ea(e, t);
    const i = {
      src: Xe(r.url || ""),
      alt: t.alt
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const u = {
      type: "element",
      tagName: "img",
      properties: i,
      children: []
    };
    return e.patch(t, u), e.applyData(t, u);
  }
  function zh(e, t) {
    const n = {
      src: Xe(t.url)
    };
    t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
      type: "element",
      tagName: "img",
      properties: n,
      children: []
    };
    return e.patch(t, r), e.applyData(t, r);
  }
  function Yh(e, t) {
    const n = {
      type: "text",
      value: t.value.replace(/\r?\n|\r/g, " ")
    };
    e.patch(t, n);
    const r = {
      type: "element",
      tagName: "code",
      properties: {},
      children: [
        n
      ]
    };
    return e.patch(t, r), e.applyData(t, r);
  }
  function qh(e, t) {
    const n = String(t.identifier).toUpperCase(), r = e.definitionById.get(n);
    if (!r) return ea(e, t);
    const i = {
      href: Xe(r.url || "")
    };
    r.title !== null && r.title !== void 0 && (i.title = r.title);
    const u = {
      type: "element",
      tagName: "a",
      properties: i,
      children: e.all(t)
    };
    return e.patch(t, u), e.applyData(t, u);
  }
  function $h(e, t) {
    const n = {
      href: Xe(t.url)
    };
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
      type: "element",
      tagName: "a",
      properties: n,
      children: e.all(t)
    };
    return e.patch(t, r), e.applyData(t, r);
  }
  function jh(e, t, n) {
    const r = e.all(t), i = n ? Vh(n) : ta(t), u = {}, s = [];
    if (typeof t.checked == "boolean") {
      const h = r[0];
      let f;
      h && h.type === "element" && h.tagName === "p" ? f = h : (f = {
        type: "element",
        tagName: "p",
        properties: {},
        children: []
      }, r.unshift(f)), f.children.length > 0 && f.children.unshift({
        type: "text",
        value: " "
      }), f.children.unshift({
        type: "element",
        tagName: "input",
        properties: {
          type: "checkbox",
          checked: t.checked,
          disabled: true
        },
        children: []
      }), u.className = [
        "task-list-item"
      ];
    }
    let a = -1;
    for (; ++a < r.length; ) {
      const h = r[a];
      (i || a !== 0 || h.type !== "element" || h.tagName !== "p") && s.push({
        type: "text",
        value: `
`
      }), h.type === "element" && h.tagName === "p" && !i ? s.push(...h.children) : s.push(h);
    }
    const o = r[r.length - 1];
    o && (i || o.type !== "element" || o.tagName !== "p") && s.push({
      type: "text",
      value: `
`
    });
    const l = {
      type: "element",
      tagName: "li",
      properties: u,
      children: s
    };
    return e.patch(t, l), e.applyData(t, l);
  }
  function Vh(e) {
    let t = false;
    if (e.type === "list") {
      t = e.spread || false;
      const n = e.children;
      let r = -1;
      for (; !t && ++r < n.length; ) t = ta(n[r]);
    }
    return t;
  }
  function ta(e) {
    const t = e.spread;
    return t ?? e.children.length > 1;
  }
  function Kh(e, t) {
    const n = {}, r = e.all(t);
    let i = -1;
    for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
      const s = r[i];
      if (s.type === "element" && s.tagName === "li" && s.properties && Array.isArray(s.properties.className) && s.properties.className.includes("task-list-item")) {
        n.className = [
          "contains-task-list"
        ];
        break;
      }
    }
    const u = {
      type: "element",
      tagName: t.ordered ? "ol" : "ul",
      properties: n,
      children: e.wrap(r, true)
    };
    return e.patch(t, u), e.applyData(t, u);
  }
  function Wh(e, t) {
    const n = {
      type: "element",
      tagName: "p",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function Gh(e, t) {
    const n = {
      type: "root",
      children: e.wrap(e.all(t))
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function Qh(e, t) {
    const n = {
      type: "element",
      tagName: "strong",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  const jn = na("end"), ze = na("start");
  function na(e) {
    return t;
    function t(n) {
      const r = n && n.position && n.position[e] || {};
      if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0) return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
    }
  }
  function ra(e) {
    const t = ze(e), n = jn(e);
    if (t && n) return {
      start: t,
      end: n
    };
  }
  function Xh(e, t) {
    const n = e.all(t), r = n.shift(), i = [];
    if (r) {
      const s = {
        type: "element",
        tagName: "thead",
        properties: {},
        children: e.wrap([
          r
        ], true)
      };
      e.patch(t.children[0], s), i.push(s);
    }
    if (n.length > 0) {
      const s = {
        type: "element",
        tagName: "tbody",
        properties: {},
        children: e.wrap(n, true)
      }, a = ze(t.children[1]), o = jn(t.children[t.children.length - 1]);
      a && o && (s.position = {
        start: a,
        end: o
      }), i.push(s);
    }
    const u = {
      type: "element",
      tagName: "table",
      properties: {},
      children: e.wrap(i, true)
    };
    return e.patch(t, u), e.applyData(t, u);
  }
  function Jh(e, t, n) {
    const r = n ? n.children : void 0, u = (r ? r.indexOf(t) : 1) === 0 ? "th" : "td", s = n && n.type === "table" ? n.align : void 0, a = s ? s.length : t.children.length;
    let o = -1;
    const l = [];
    for (; ++o < a; ) {
      const f = t.children[o], d = {}, p = s ? s[o] : void 0;
      p && (d.align = p);
      let E = {
        type: "element",
        tagName: u,
        properties: d,
        children: []
      };
      f && (E.children = e.all(f), e.patch(f, E), E = e.applyData(f, E)), l.push(E);
    }
    const h = {
      type: "element",
      tagName: "tr",
      properties: {},
      children: e.wrap(l, true)
    };
    return e.patch(t, h), e.applyData(t, h);
  }
  function Zh(e, t) {
    const n = {
      type: "element",
      tagName: "td",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  const bu = 9, Tu = 32;
  function e0(e) {
    const t = String(e), n = /\r?\n|\r/g;
    let r = n.exec(t), i = 0;
    const u = [];
    for (; r; ) u.push(Au(t.slice(i, r.index), i > 0, true), r[0]), i = r.index + r[0].length, r = n.exec(t);
    return u.push(Au(t.slice(i), i > 0, false)), u.join("");
  }
  function Au(e, t, n) {
    let r = 0, i = e.length;
    if (t) {
      let u = e.codePointAt(r);
      for (; u === bu || u === Tu; ) r++, u = e.codePointAt(r);
    }
    if (n) {
      let u = e.codePointAt(i - 1);
      for (; u === bu || u === Tu; ) i--, u = e.codePointAt(i - 1);
    }
    return i > r ? e.slice(r, i) : "";
  }
  function t0(e, t) {
    const n = {
      type: "text",
      value: e0(String(t.value))
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function n0(e, t) {
    const n = {
      type: "element",
      tagName: "hr",
      properties: {},
      children: []
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  const r0 = {
    blockquote: Oh,
    break: wh,
    code: Rh,
    delete: Bh,
    emphasis: Ph,
    footnoteReference: Mh,
    heading: Uh,
    html: Hh,
    imageReference: vh,
    image: zh,
    inlineCode: Yh,
    linkReference: qh,
    link: $h,
    listItem: jh,
    list: Kh,
    paragraph: Wh,
    root: Gh,
    strong: Qh,
    table: Xh,
    tableCell: Zh,
    tableRow: Jh,
    text: t0,
    thematicBreak: n0,
    toml: bn,
    yaml: bn,
    definition: bn,
    footnoteDefinition: bn
  };
  function bn() {
  }
  const ia = -1, Vn = 0, Kt = 1, wn = 2, hi = 3, pi = 4, di = 5, mi = 6, ua = 7, sa = 8, Cu = typeof self == "object" ? self : globalThis, i0 = (e, t) => {
    const n = (i, u) => (e.set(u, i), i), r = (i) => {
      if (e.has(i)) return e.get(i);
      const [u, s] = t[i];
      switch (u) {
        case Vn:
        case ia:
          return n(s, i);
        case Kt: {
          const a = n([], i);
          for (const o of s) a.push(r(o));
          return a;
        }
        case wn: {
          const a = n({}, i);
          for (const [o, l] of s) a[r(o)] = r(l);
          return a;
        }
        case hi:
          return n(new Date(s), i);
        case pi: {
          const { source: a, flags: o } = s;
          return n(new RegExp(a, o), i);
        }
        case di: {
          const a = n(/* @__PURE__ */ new Map(), i);
          for (const [o, l] of s) a.set(r(o), r(l));
          return a;
        }
        case mi: {
          const a = n(/* @__PURE__ */ new Set(), i);
          for (const o of s) a.add(r(o));
          return a;
        }
        case ua: {
          const { name: a, message: o } = s;
          return n(new Cu[a](o), i);
        }
        case sa:
          return n(BigInt(s), i);
        case "BigInt":
          return n(Object(BigInt(s)), i);
        case "ArrayBuffer":
          return n(new Uint8Array(s).buffer, s);
        case "DataView": {
          const { buffer: a } = new Uint8Array(s);
          return n(new DataView(a), s);
        }
      }
      return n(new Cu[u](s), i);
    };
    return r;
  }, _u = (e) => i0(/* @__PURE__ */ new Map(), e)(0), ht = "", { toString: u0 } = {}, { keys: s0 } = Object, Bt = (e) => {
    const t = typeof e;
    if (t !== "object" || !e) return [
      Vn,
      t
    ];
    const n = u0.call(e).slice(8, -1);
    switch (n) {
      case "Array":
        return [
          Kt,
          ht
        ];
      case "Object":
        return [
          wn,
          ht
        ];
      case "Date":
        return [
          hi,
          ht
        ];
      case "RegExp":
        return [
          pi,
          ht
        ];
      case "Map":
        return [
          di,
          ht
        ];
      case "Set":
        return [
          mi,
          ht
        ];
      case "DataView":
        return [
          Kt,
          n
        ];
    }
    return n.includes("Array") ? [
      Kt,
      n
    ] : n.includes("Error") ? [
      ua,
      n
    ] : [
      wn,
      n
    ];
  }, Tn = ([e, t]) => e === Vn && (t === "function" || t === "symbol"), a0 = (e, t, n, r) => {
    const i = (s, a) => {
      const o = r.push(s) - 1;
      return n.set(a, o), o;
    }, u = (s) => {
      if (n.has(s)) return n.get(s);
      let [a, o] = Bt(s);
      switch (a) {
        case Vn: {
          let h = s;
          switch (o) {
            case "bigint":
              a = sa, h = s.toString();
              break;
            case "function":
            case "symbol":
              if (e) throw new TypeError("unable to serialize " + o);
              h = null;
              break;
            case "undefined":
              return i([
                ia
              ], s);
          }
          return i([
            a,
            h
          ], s);
        }
        case Kt: {
          if (o) {
            let d = s;
            return o === "DataView" ? d = new Uint8Array(s.buffer) : o === "ArrayBuffer" && (d = new Uint8Array(s)), i([
              o,
              [
                ...d
              ]
            ], s);
          }
          const h = [], f = i([
            a,
            h
          ], s);
          for (const d of s) h.push(u(d));
          return f;
        }
        case wn: {
          if (o) switch (o) {
            case "BigInt":
              return i([
                o,
                s.toString()
              ], s);
            case "Boolean":
            case "Number":
            case "String":
              return i([
                o,
                s.valueOf()
              ], s);
          }
          if (t && "toJSON" in s) return u(s.toJSON());
          const h = [], f = i([
            a,
            h
          ], s);
          for (const d of s0(s)) (e || !Tn(Bt(s[d]))) && h.push([
            u(d),
            u(s[d])
          ]);
          return f;
        }
        case hi:
          return i([
            a,
            s.toISOString()
          ], s);
        case pi: {
          const { source: h, flags: f } = s;
          return i([
            a,
            {
              source: h,
              flags: f
            }
          ], s);
        }
        case di: {
          const h = [], f = i([
            a,
            h
          ], s);
          for (const [d, p] of s) (e || !(Tn(Bt(d)) || Tn(Bt(p)))) && h.push([
            u(d),
            u(p)
          ]);
          return f;
        }
        case mi: {
          const h = [], f = i([
            a,
            h
          ], s);
          for (const d of s) (e || !Tn(Bt(d))) && h.push(u(d));
          return f;
        }
      }
      const { message: l } = s;
      return i([
        a,
        {
          name: o,
          message: l
        }
      ], s);
    };
    return u;
  }, Du = (e, { json: t, lossy: n } = {}) => {
    const r = [];
    return a0(!(t || n), !!t, /* @__PURE__ */ new Map(), r)(e), r;
  }, xe = typeof structuredClone == "function" ? (e, t) => t && ("json" in t || "lossy" in t) ? _u(Du(e, t)) : structuredClone(e) : (e, t) => _u(Du(e, t));
  function o0(e, t) {
    const n = [
      {
        type: "text",
        value: "\u21A9"
      }
    ];
    return t > 1 && n.push({
      type: "element",
      tagName: "sup",
      properties: {},
      children: [
        {
          type: "text",
          value: String(t)
        }
      ]
    }), n;
  }
  function c0(e, t) {
    return "Back to reference " + (e + 1) + (t > 1 ? "-" + t : "");
  }
  function l0(e) {
    const t = typeof e.options.clobberPrefix == "string" ? e.options.clobberPrefix : "user-content-", n = e.options.footnoteBackContent || o0, r = e.options.footnoteBackLabel || c0, i = e.options.footnoteLabel || "Footnotes", u = e.options.footnoteLabelTagName || "h2", s = e.options.footnoteLabelProperties || {
      className: [
        "sr-only"
      ]
    }, a = [];
    let o = -1;
    for (; ++o < e.footnoteOrder.length; ) {
      const l = e.footnoteById.get(e.footnoteOrder[o]);
      if (!l) continue;
      const h = e.all(l), f = String(l.identifier).toUpperCase(), d = Xe(f.toLowerCase());
      let p = 0;
      const E = [], m = e.footnoteCounts.get(f);
      for (; m !== void 0 && ++p <= m; ) {
        E.length > 0 && E.push({
          type: "text",
          value: " "
        });
        let x = typeof n == "string" ? n : n(o, p);
        typeof x == "string" && (x = {
          type: "text",
          value: x
        }), E.push({
          type: "element",
          tagName: "a",
          properties: {
            href: "#" + t + "fnref-" + d + (p > 1 ? "-" + p : ""),
            dataFootnoteBackref: "",
            ariaLabel: typeof r == "string" ? r : r(o, p),
            className: [
              "data-footnote-backref"
            ]
          },
          children: Array.isArray(x) ? x : [
            x
          ]
        });
      }
      const D = h[h.length - 1];
      if (D && D.type === "element" && D.tagName === "p") {
        const x = D.children[D.children.length - 1];
        x && x.type === "text" ? x.value += " " : D.children.push({
          type: "text",
          value: " "
        }), D.children.push(...E);
      } else h.push(...E);
      const C = {
        type: "element",
        tagName: "li",
        properties: {
          id: t + "fn-" + d
        },
        children: e.wrap(h, true)
      };
      e.patch(l, C), a.push(C);
    }
    if (a.length !== 0) return {
      type: "element",
      tagName: "section",
      properties: {
        dataFootnotes: true,
        className: [
          "footnotes"
        ]
      },
      children: [
        {
          type: "element",
          tagName: u,
          properties: {
            ...xe(s),
            id: "footnote-label"
          },
          children: [
            {
              type: "text",
              value: i
            }
          ]
        },
        {
          type: "text",
          value: `
`
        },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: e.wrap(a, true)
        },
        {
          type: "text",
          value: `
`
        }
      ]
    };
  }
  const yt = (function(e) {
    if (e == null) return d0;
    if (typeof e == "function") return Kn(e);
    if (typeof e == "object") return Array.isArray(e) ? f0(e) : h0(e);
    if (typeof e == "string") return p0(e);
    throw new Error("Expected function, string, or object as test");
  });
  function f0(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.length; ) t[n] = yt(e[n]);
    return Kn(r);
    function r(...i) {
      let u = -1;
      for (; ++u < t.length; ) if (t[u].apply(this, i)) return true;
      return false;
    }
  }
  function h0(e) {
    const t = e;
    return Kn(n);
    function n(r) {
      const i = r;
      let u;
      for (u in e) if (i[u] !== t[u]) return false;
      return true;
    }
  }
  function p0(e) {
    return Kn(t);
    function t(n) {
      return n && n.type === e;
    }
  }
  function Kn(e) {
    return t;
    function t(n, r, i) {
      return !!(m0(n) && e.call(this, n, typeof r == "number" ? r : void 0, i || void 0));
    }
  }
  function d0() {
    return true;
  }
  function m0(e) {
    return e !== null && typeof e == "object" && "type" in e;
  }
  let aa, E0, Rn;
  aa = [];
  E0 = true;
  Rn = false;
  Ei = "skip";
  gi = function(e, t, n, r) {
    let i;
    typeof t == "function" && typeof n != "function" ? (r = n, n = t) : i = t;
    const u = yt(i), s = r ? -1 : 1;
    a(e, void 0, [])();
    function a(o, l, h) {
      const f = o && typeof o == "object" ? o : {};
      if (typeof f.type == "string") {
        const p = typeof f.tagName == "string" ? f.tagName : typeof f.name == "string" ? f.name : void 0;
        Object.defineProperty(d, "name", {
          value: "node (" + (o.type + (p ? "<" + p + ">" : "")) + ")"
        });
      }
      return d;
      function d() {
        let p = aa, E, m, D;
        if ((!t || u(o, l, h[h.length - 1] || void 0)) && (p = g0(n(o, h)), p[0] === Rn)) return p;
        if ("children" in o && o.children) {
          const C = o;
          if (C.children && p[0] !== Ei) for (m = (r ? C.children.length : -1) + s, D = h.concat(C); m > -1 && m < C.children.length; ) {
            const x = C.children[m];
            if (E = a(x, m, D)(), E[0] === Rn) return E;
            m = typeof E[1] == "number" ? E[1] : m + s;
          }
        }
        return p;
      }
    }
  };
  function g0(e) {
    return Array.isArray(e) ? e : typeof e == "number" ? [
      E0,
      e
    ] : e == null ? aa : [
      e
    ];
  }
  function ge(e, t, n, r) {
    let i, u, s;
    typeof t == "function" && typeof n != "function" ? (u = void 0, s = t, i = n) : (u = t, s = n, i = r), gi(e, u, a, i);
    function a(o, l) {
      const h = l[l.length - 1], f = h ? h.children.indexOf(o) : void 0;
      return s(o, f, h);
    }
  }
  const $r = {}.hasOwnProperty, b0 = {};
  function T0(e, t) {
    const n = t || b0, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), u = /* @__PURE__ */ new Map(), s = {
      ...r0,
      ...n.handlers
    }, a = {
      all: l,
      applyData: C0,
      definitionById: r,
      footnoteById: i,
      footnoteCounts: u,
      footnoteOrder: [],
      handlers: s,
      one: o,
      options: n,
      patch: A0,
      wrap: D0
    };
    return ge(e, function(h) {
      if (h.type === "definition" || h.type === "footnoteDefinition") {
        const f = h.type === "definition" ? r : i, d = String(h.identifier).toUpperCase();
        f.has(d) || f.set(d, h);
      }
    }), a;
    function o(h, f) {
      const d = h.type, p = a.handlers[d];
      if ($r.call(a.handlers, d) && p) return p(a, h, f);
      if (a.options.passThrough && a.options.passThrough.includes(d)) {
        if ("children" in h) {
          const { children: m, ...D } = h, C = xe(D);
          return C.children = a.all(h), C;
        }
        return xe(h);
      }
      return (a.options.unknownHandler || _0)(a, h, f);
    }
    function l(h) {
      const f = [];
      if ("children" in h) {
        const d = h.children;
        let p = -1;
        for (; ++p < d.length; ) {
          const E = a.one(d[p], h);
          if (E) {
            if (p && d[p - 1].type === "break" && (!Array.isArray(E) && E.type === "text" && (E.value = yu(E.value)), !Array.isArray(E) && E.type === "element")) {
              const m = E.children[0];
              m && m.type === "text" && (m.value = yu(m.value));
            }
            Array.isArray(E) ? f.push(...E) : f.push(E);
          }
        }
      }
      return f;
    }
  }
  function A0(e, t) {
    e.position && (t.position = ra(e));
  }
  function C0(e, t) {
    let n = t;
    if (e && e.data) {
      const r = e.data.hName, i = e.data.hChildren, u = e.data.hProperties;
      if (typeof r == "string") if (n.type === "element") n.tagName = r;
      else {
        const s = "children" in n ? n.children : [
          n
        ];
        n = {
          type: "element",
          tagName: r,
          properties: {},
          children: s
        };
      }
      n.type === "element" && u && Object.assign(n.properties, xe(u)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
    }
    return n;
  }
  function _0(e, t) {
    const n = t.data || {}, r = "value" in t && !($r.call(n, "hProperties") || $r.call(n, "hChildren")) ? {
      type: "text",
      value: t.value
    } : {
      type: "element",
      tagName: "div",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, r), e.applyData(t, r);
  }
  function D0(e, t) {
    const n = [];
    let r = -1;
    for (t && n.push({
      type: "text",
      value: `
`
    }); ++r < e.length; ) r && n.push({
      type: "text",
      value: `
`
    }), n.push(e[r]);
    return t && e.length > 0 && n.push({
      type: "text",
      value: `
`
    }), n;
  }
  function yu(e) {
    let t = 0, n = e.charCodeAt(t);
    for (; n === 9 || n === 32; ) t++, n = e.charCodeAt(t);
    return e.slice(t);
  }
  function ku(e, t) {
    const n = T0(e, t), r = n.one(e, void 0), i = l0(n), u = Array.isArray(r) ? {
      type: "root",
      children: r
    } : r || {
      type: "root",
      children: []
    };
    return i && u.children.push({
      type: "text",
      value: `
`
    }, i), u;
  }
  function y0(e, t) {
    return e && "run" in e ? async function(n, r) {
      const i = ku(n, {
        file: r,
        ...t
      });
      await e.run(i, r);
    } : function(n, r) {
      return ku(n, {
        file: r,
        ...e || t
      });
    };
  }
  const kt = {
    collection: "map",
    default: true,
    nodeClass: ut,
    tag: "tag:yaml.org,2002:map",
    resolve(e, t) {
      return ws(e) || t("Expected a mapping for this tag"), e;
    },
    createNode: (e, t, n) => ut.from(e, t, n)
  }, It = {
    collection: "seq",
    default: true,
    nodeClass: Tt,
    tag: "tag:yaml.org,2002:seq",
    resolve(e, t) {
      return Rs(e) || t("Expected a sequence for this tag"), e;
    },
    createNode: (e, t, n) => Tt.from(e, t, n)
  }, Wn = {
    identify: (e) => typeof e == "string",
    default: true,
    tag: "tag:yaml.org,2002:str",
    resolve: (e) => e,
    stringify(e, t, n, r) {
      return t = Object.assign({
        actualString: true
      }, t), Bs(e, t, n, r);
    }
  }, Gn = {
    identify: (e) => e == null,
    createNode: () => new ae(null),
    default: true,
    tag: "tag:yaml.org,2002:null",
    test: /^(?:~|[Nn]ull|NULL)?$/,
    resolve: () => new ae(null),
    stringify: ({ source: e }, t) => typeof e == "string" && Gn.test.test(e) ? e : t.options.nullStr
  }, bi = {
    identify: (e) => typeof e == "boolean",
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:[Tt]rue|TRUE|[Ff]alse|FALSE)$/,
    resolve: (e) => new ae(e[0] === "t" || e[0] === "T"),
    stringify({ source: e, value: t }, n) {
      if (e && bi.test.test(e)) {
        const r = e[0] === "t" || e[0] === "T";
        if (t === r) return e;
      }
      return t ? n.options.trueStr : n.options.falseStr;
    }
  };
  function Le({ format: e, minFractionDigits: t, tag: n, value: r }) {
    if (typeof r == "bigint") return String(r);
    const i = typeof r == "number" ? r : Number(r);
    if (!isFinite(i)) return isNaN(i) ? ".nan" : i < 0 ? "-.inf" : ".inf";
    let u = Object.is(r, -0) ? "-0" : JSON.stringify(r);
    if (!e && t && (!n || n === "tag:yaml.org,2002:float") && /^\d/.test(u)) {
      let s = u.indexOf(".");
      s < 0 && (s = u.length, u += ".");
      let a = t - (u.length - s - 1);
      for (; a-- > 0; ) u += "0";
    }
    return u;
  }
  const oa = {
    identify: (e) => typeof e == "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: Le
  }, ca = {
    identify: (e) => typeof e == "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+(?:\.[0-9]*)?)[eE][-+]?[0-9]+$/,
    resolve: (e) => parseFloat(e),
    stringify(e) {
      const t = Number(e.value);
      return isFinite(t) ? t.toExponential() : Le(e);
    }
  }, la = {
    identify: (e) => typeof e == "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:\.[0-9]+|[0-9]+\.[0-9]*)$/,
    resolve(e) {
      const t = new ae(parseFloat(e)), n = e.indexOf(".");
      return n !== -1 && e[e.length - 1] === "0" && (t.minFractionDigits = e.length - n - 1), t;
    },
    stringify: Le
  }, Qn = (e) => typeof e == "bigint" || Number.isInteger(e), Ti = (e, t, n, { intAsBigInt: r }) => r ? BigInt(e) : parseInt(e.substring(t), n);
  function fa(e, t, n) {
    const { value: r } = e;
    return Qn(r) && r >= 0 ? n + r.toString(t) : Le(e);
  }
  const ha = {
    identify: (e) => Qn(e) && e >= 0,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^0o[0-7]+$/,
    resolve: (e, t, n) => Ti(e, 2, 8, n),
    stringify: (e) => fa(e, 8, "0o")
  }, pa = {
    identify: Qn,
    default: true,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9]+$/,
    resolve: (e, t, n) => Ti(e, 0, 10, n),
    stringify: Le
  }, da = {
    identify: (e) => Qn(e) && e >= 0,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^0x[0-9a-fA-F]+$/,
    resolve: (e, t, n) => Ti(e, 2, 16, n),
    stringify: (e) => fa(e, 16, "0x")
  }, k0 = [
    kt,
    It,
    Wn,
    Gn,
    bi,
    ha,
    pa,
    da,
    oa,
    ca,
    la
  ];
  function Iu(e) {
    return typeof e == "bigint" || Number.isInteger(e);
  }
  const An = ({ value: e }) => JSON.stringify(e), I0 = [
    {
      identify: (e) => typeof e == "string",
      default: true,
      tag: "tag:yaml.org,2002:str",
      resolve: (e) => e,
      stringify: An
    },
    {
      identify: (e) => e == null,
      createNode: () => new ae(null),
      default: true,
      tag: "tag:yaml.org,2002:null",
      test: /^null$/,
      resolve: () => null,
      stringify: An
    },
    {
      identify: (e) => typeof e == "boolean",
      default: true,
      tag: "tag:yaml.org,2002:bool",
      test: /^true$|^false$/,
      resolve: (e) => e === "true",
      stringify: An
    },
    {
      identify: Iu,
      default: true,
      tag: "tag:yaml.org,2002:int",
      test: /^-?(?:0|[1-9][0-9]*)$/,
      resolve: (e, t, { intAsBigInt: n }) => n ? BigInt(e) : parseInt(e, 10),
      stringify: ({ value: e }) => Iu(e) ? e.toString() : JSON.stringify(e)
    },
    {
      identify: (e) => typeof e == "number",
      default: true,
      tag: "tag:yaml.org,2002:float",
      test: /^-?(?:0|[1-9][0-9]*)(?:\.[0-9]*)?(?:[eE][-+]?[0-9]+)?$/,
      resolve: (e) => parseFloat(e),
      stringify: An
    }
  ], N0 = {
    default: true,
    tag: "",
    test: /^/,
    resolve(e, t) {
      return t(`Unresolved plain scalar ${JSON.stringify(e)}`), e;
    }
  }, S0 = [
    kt,
    It
  ].concat(I0, N0), Ai = {
    identify: (e) => e instanceof Uint8Array,
    default: false,
    tag: "tag:yaml.org,2002:binary",
    resolve(e, t) {
      if (typeof atob == "function") {
        const n = atob(e.replace(/[\n\r]/g, "")), r = new Uint8Array(n.length);
        for (let i = 0; i < n.length; ++i) r[i] = n.charCodeAt(i);
        return r;
      } else return t("This environment does not support reading binary tags; either Buffer or atob is required"), e;
    },
    stringify({ comment: e, type: t, value: n }, r, i, u) {
      if (!n) return "";
      const s = n;
      let a;
      if (typeof btoa == "function") {
        let o = "";
        for (let l = 0; l < s.length; ++l) o += String.fromCharCode(s[l]);
        a = btoa(o);
      } else throw new Error("This environment does not support writing binary tags; either Buffer or btoa is required");
      if (t ?? (t = ae.BLOCK_LITERAL), t !== ae.QUOTE_DOUBLE) {
        const o = Math.max(r.options.lineWidth - r.indent.length, r.options.minContentWidth), l = Math.ceil(a.length / o), h = new Array(l);
        for (let f = 0, d = 0; f < l; ++f, d += o) h[f] = a.substr(d, o);
        a = h.join(t === ae.BLOCK_LITERAL ? `
` : " ");
      }
      return Bs({
        comment: e,
        type: t,
        value: a
      }, r, i, u);
    }
  };
  function ma({ value: e, source: t }, n) {
    return t && (e ? Ea : ga).test.test(t) ? t : e ? n.options.trueStr : n.options.falseStr;
  }
  const Ea = {
    identify: (e) => e === true,
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:Y|y|[Yy]es|YES|[Tt]rue|TRUE|[Oo]n|ON)$/,
    resolve: () => new ae(true),
    stringify: ma
  }, ga = {
    identify: (e) => e === false,
    default: true,
    tag: "tag:yaml.org,2002:bool",
    test: /^(?:N|n|[Nn]o|NO|[Ff]alse|FALSE|[Oo]ff|OFF)$/,
    resolve: () => new ae(false),
    stringify: ma
  }, x0 = {
    identify: (e) => typeof e == "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^(?:[-+]?\.(?:inf|Inf|INF)|\.nan|\.NaN|\.NAN)$/,
    resolve: (e) => e.slice(-3).toLowerCase() === "nan" ? NaN : e[0] === "-" ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY,
    stringify: Le
  }, L0 = {
    identify: (e) => typeof e == "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    format: "EXP",
    test: /^[-+]?(?:[0-9][0-9_]*)?(?:\.[0-9_]*)?[eE][-+]?[0-9]+$/,
    resolve: (e) => parseFloat(e.replace(/_/g, "")),
    stringify(e) {
      const t = Number(e.value);
      return isFinite(t) ? t.toExponential() : Le(e);
    }
  }, F0 = {
    identify: (e) => typeof e == "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    test: /^[-+]?(?:[0-9][0-9_]*)?\.[0-9_]*$/,
    resolve(e) {
      const t = new ae(parseFloat(e.replace(/_/g, ""))), n = e.indexOf(".");
      if (n !== -1) {
        const r = e.substring(n + 1).replace(/_/g, "");
        r[r.length - 1] === "0" && (t.minFractionDigits = r.length);
      }
      return t;
    },
    stringify: Le
  }, cn = (e) => typeof e == "bigint" || Number.isInteger(e);
  function Xn(e, t, n, { intAsBigInt: r }) {
    const i = e[0];
    if ((i === "-" || i === "+") && (t += 1), e = e.substring(t).replace(/_/g, ""), r) {
      switch (n) {
        case 2:
          e = `0b${e}`;
          break;
        case 8:
          e = `0o${e}`;
          break;
        case 16:
          e = `0x${e}`;
          break;
      }
      const s = BigInt(e);
      return i === "-" ? BigInt(-1) * s : s;
    }
    const u = parseInt(e, n);
    return i === "-" ? -1 * u : u;
  }
  function Ci(e, t, n) {
    const { value: r } = e;
    if (cn(r)) {
      const i = r.toString(t);
      return r < 0 ? "-" + n + i.substr(1) : n + i;
    }
    return Le(e);
  }
  const O0 = {
    identify: cn,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "BIN",
    test: /^[-+]?0b[0-1_]+$/,
    resolve: (e, t, n) => Xn(e, 2, 2, n),
    stringify: (e) => Ci(e, 2, "0b")
  }, w0 = {
    identify: cn,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "OCT",
    test: /^[-+]?0[0-7_]+$/,
    resolve: (e, t, n) => Xn(e, 1, 8, n),
    stringify: (e) => Ci(e, 8, "0")
  }, R0 = {
    identify: cn,
    default: true,
    tag: "tag:yaml.org,2002:int",
    test: /^[-+]?[0-9][0-9_]*$/,
    resolve: (e, t, n) => Xn(e, 0, 10, n),
    stringify: Le
  }, B0 = {
    identify: cn,
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "HEX",
    test: /^[-+]?0x[0-9a-fA-F_]+$/,
    resolve: (e, t, n) => Xn(e, 2, 16, n),
    stringify: (e) => Ci(e, 16, "0x")
  };
  function _i(e, t) {
    const n = e[0], r = n === "-" || n === "+" ? e.substring(1) : e, i = (s) => t ? BigInt(s) : Number(s), u = r.replace(/_/g, "").split(":").reduce((s, a) => s * i(60) + i(a), i(0));
    return n === "-" ? i(-1) * u : u;
  }
  function ba(e) {
    let { value: t } = e, n = (s) => s;
    if (typeof t == "bigint") n = (s) => BigInt(s);
    else if (isNaN(t) || !isFinite(t)) return Le(e);
    let r = "";
    t < 0 && (r = "-", t *= n(-1));
    const i = n(60), u = [
      t % i
    ];
    return t < 60 ? u.unshift(0) : (t = (t - u[0]) / i, u.unshift(t % i), t >= 60 && (t = (t - u[0]) / i, u.unshift(t))), r + u.map((s) => String(s).padStart(2, "0")).join(":").replace(/000000\d*$/, "");
  }
  const Ta = {
    identify: (e) => typeof e == "bigint" || Number.isInteger(e),
    default: true,
    tag: "tag:yaml.org,2002:int",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+$/,
    resolve: (e, t, { intAsBigInt: n }) => _i(e, n),
    stringify: ba
  }, Aa = {
    identify: (e) => typeof e == "number",
    default: true,
    tag: "tag:yaml.org,2002:float",
    format: "TIME",
    test: /^[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*$/,
    resolve: (e) => _i(e, false),
    stringify: ba
  }, Jn = {
    identify: (e) => e instanceof Date,
    default: true,
    tag: "tag:yaml.org,2002:timestamp",
    test: RegExp("^([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})(?:(?:t|T|[ \\t]+)([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?)?$"),
    resolve(e) {
      const t = e.match(Jn.test);
      if (!t) throw new Error("!!timestamp expects a date, starting with yyyy-mm-dd");
      const [, n, r, i, u, s, a] = t.map(Number), o = t[7] ? Number((t[7] + "00").substr(1, 3)) : 0;
      let l = Date.UTC(n, r - 1, i, u || 0, s || 0, a || 0, o);
      const h = t[8];
      if (h && h !== "Z") {
        let f = _i(h, false);
        Math.abs(f) < 30 && (f *= 60), l -= 6e4 * f;
      }
      return new Date(l);
    },
    stringify: ({ value: e }) => (e == null ? void 0 : e.toISOString().replace(/(T00:00:00)?\.000Z$/, "")) ?? ""
  }, Nu = [
    kt,
    It,
    Wn,
    Gn,
    Ea,
    ga,
    O0,
    w0,
    R0,
    B0,
    x0,
    L0,
    F0,
    Ai,
    bt,
    ii,
    ui,
    si,
    Ta,
    Aa,
    Jn
  ], Su = /* @__PURE__ */ new Map([
    [
      "core",
      k0
    ],
    [
      "failsafe",
      [
        kt,
        It,
        Wn
      ]
    ],
    [
      "json",
      S0
    ],
    [
      "yaml11",
      Nu
    ],
    [
      "yaml-1.1",
      Nu
    ]
  ]), xu = {
    binary: Ai,
    bool: bi,
    float: la,
    floatExp: ca,
    floatNaN: oa,
    floatTime: Aa,
    int: pa,
    intHex: da,
    intOct: ha,
    intTime: Ta,
    map: kt,
    merge: bt,
    null: Gn,
    omap: ii,
    pairs: ui,
    seq: It,
    set: si,
    timestamp: Jn
  }, P0 = {
    "tag:yaml.org,2002:binary": Ai,
    "tag:yaml.org,2002:merge": bt,
    "tag:yaml.org,2002:omap": ii,
    "tag:yaml.org,2002:pairs": ui,
    "tag:yaml.org,2002:set": si,
    "tag:yaml.org,2002:timestamp": Jn
  };
  function Er(e, t, n) {
    const r = Su.get(t);
    if (r && !e) return n && !r.includes(bt) ? r.concat(bt) : r.slice();
    let i = r;
    if (!i) if (Array.isArray(e)) i = [];
    else {
      const u = Array.from(Su.keys()).filter((s) => s !== "yaml11").map((s) => JSON.stringify(s)).join(", ");
      throw new Error(`Unknown schema "${t}"; use one of ${u} or define customTags array`);
    }
    if (Array.isArray(e)) for (const u of e) i = i.concat(u);
    else typeof e == "function" && (i = e(i.slice()));
    return n && (i = i.concat(bt)), i.reduce((u, s) => {
      const a = typeof s == "string" ? xu[s] : s;
      if (!a) {
        const o = JSON.stringify(s), l = Object.keys(xu).map((h) => JSON.stringify(h)).join(", ");
        throw new Error(`Unknown custom tag ${o}; use one of ${l}`);
      }
      return u.includes(a) || u.push(a), u;
    }, []);
  }
  const M0 = (e, t) => e.key < t.key ? -1 : e.key > t.key ? 1 : 0;
  class Di {
    constructor({ compat: t, customTags: n, merge: r, resolveKnownTags: i, schema: u, sortMapEntries: s, toStringDefaults: a }) {
      this.compat = Array.isArray(t) ? Er(t, "compat") : t ? Er(null, t) : null, this.name = typeof u == "string" && u || "core", this.knownTags = i ? P0 : {}, this.tags = Er(n, this.name, r), this.toStringOptions = a ?? null, Object.defineProperty(this, wc, {
        value: kt
      }), Object.defineProperty(this, st, {
        value: Wn
      }), Object.defineProperty(this, Rc, {
        value: It
      }), this.sortMapEntries = typeof s == "function" ? s : s === true ? M0 : null;
    }
    clone() {
      const t = Object.create(Di.prototype, Object.getOwnPropertyDescriptors(this));
      return t.tags = this.tags.slice(), t;
    }
  }
  function U0(e, t) {
    var _a2;
    const n = [];
    let r = t.directives === true;
    if (t.directives !== false && e.directives) {
      const o = e.directives.toString(e);
      o ? (n.push(o), r = true) : e.directives.docStart && (r = true);
    }
    r && n.push("---");
    const i = Bc(e, t), { commentString: u } = i.options;
    if (e.commentBefore) {
      n.length !== 1 && n.unshift("");
      const o = u(e.commentBefore);
      n.unshift(mn(o, ""));
    }
    let s = false, a = null;
    if (e.contents) {
      if (ai(e.contents)) {
        if (e.contents.spaceBefore && r && n.push(""), e.contents.commentBefore) {
          const h = u(e.contents.commentBefore);
          n.push(mn(h, ""));
        }
        i.forceBlockIndent = !!e.comment, a = e.contents.comment;
      }
      const o = a ? void 0 : () => s = true;
      let l = Wi(e.contents, i, () => a = null, o);
      a && (l += Pc(l, "", u(a))), (l[0] === "|" || l[0] === ">") && n[n.length - 1] === "---" ? n[n.length - 1] = `--- ${l}` : n.push(l);
    } else n.push(Wi(e.contents, i));
    if ((_a2 = e.directives) == null ? void 0 : _a2.docEnd) if (e.comment) {
      const o = u(e.comment);
      o.includes(`
`) ? (n.push("..."), n.push(mn(o, ""))) : n.push(`... ${o}`);
    } else n.push("...");
    else {
      let o = e.comment;
      o && s && (o = o.replace(/^\n+/, "")), o && ((!s || a) && n[n.length - 1] !== "" && n.push(""), n.push(mn(u(o), "")));
    }
    return n.join(`
`) + `
`;
  }
  class Nt {
    constructor(t, n, r) {
      this.commentBefore = null, this.comment = null, this.errors = [], this.warnings = [], Object.defineProperty(this, Gi, {
        value: Qi
      });
      let i = null;
      typeof n == "function" || Array.isArray(n) ? i = n : r === void 0 && n && (r = n, n = void 0);
      const u = Object.assign({
        intAsBigInt: false,
        keepSourceTokens: false,
        logLevel: "warn",
        prettyErrors: true,
        strict: true,
        stringKeys: false,
        uniqueKeys: true,
        version: "1.2"
      }, r);
      this.options = u;
      let { version: s } = u;
      (r == null ? void 0 : r._directives) ? (this.directives = r._directives.atDocument(), this.directives.yaml.explicit && (s = this.directives.yaml.version)) : this.directives = new In({
        version: s
      }), this.setSchema(s, r), this.contents = t === void 0 ? null : this.createNode(t, i, r);
    }
    clone() {
      const t = Object.create(Nt.prototype, {
        [Gi]: {
          value: Qi
        }
      });
      return t.commentBefore = this.commentBefore, t.comment = this.comment, t.errors = this.errors.slice(), t.warnings = this.warnings.slice(), t.options = Object.assign({}, this.options), this.directives && (t.directives = this.directives.clone()), t.schema = this.schema.clone(), t.contents = ai(this.contents) ? this.contents.clone(t.schema) : this.contents, this.range && (t.range = this.range.slice()), t;
    }
    add(t) {
      pt(this.contents) && this.contents.add(t);
    }
    addIn(t, n) {
      pt(this.contents) && this.contents.addIn(t, n);
    }
    createAlias(t, n) {
      if (!t.anchor) {
        const r = Mc(this);
        t.anchor = !n || r.has(n) ? Uc(n || "a", r) : n;
      }
      return new Ps(t.anchor);
    }
    createNode(t, n, r) {
      let i;
      if (typeof n == "function") t = n.call({
        "": t
      }, "", t), i = n;
      else if (Array.isArray(n)) {
        const D = (x) => typeof x == "number" || x instanceof String || x instanceof Number, C = n.filter(D).map(String);
        C.length > 0 && (n = n.concat(C)), i = n;
      } else r === void 0 && n && (r = n, n = void 0);
      const { aliasDuplicateObjects: u, anchorPrefix: s, flow: a, keepUndefined: o, onTagObj: l, tag: h } = r ?? {}, { onAnchor: f, setAnchors: d, sourceObjects: p } = Yc(this, s || "a"), E = {
        aliasDuplicateObjects: u ?? true,
        keepUndefined: o ?? false,
        onAnchor: f,
        onTagObj: l,
        replacer: i,
        schema: this.schema,
        sourceObjects: p
      }, m = Hc(t, h, E);
      return a && nt(m) && (m.flow = true), d(), m;
    }
    createPair(t, n, r = {}) {
      const i = this.createNode(t, null, r), u = this.createNode(n, null, r);
      return new tn(i, u);
    }
    delete(t) {
      return pt(this.contents) ? this.contents.delete(t) : false;
    }
    deleteIn(t) {
      return En(t) ? this.contents == null ? false : (this.contents = null, true) : pt(this.contents) ? this.contents.deleteIn(t) : false;
    }
    get(t, n) {
      return nt(this.contents) ? this.contents.get(t, n) : void 0;
    }
    getIn(t, n) {
      return En(t) ? !n && At(this.contents) ? this.contents.value : this.contents : nt(this.contents) ? this.contents.getIn(t, n) : void 0;
    }
    has(t) {
      return nt(this.contents) ? this.contents.has(t) : false;
    }
    hasIn(t) {
      return En(t) ? this.contents !== void 0 : nt(this.contents) ? this.contents.hasIn(t) : false;
    }
    set(t, n) {
      this.contents == null ? this.contents = Xi(this.schema, [
        t
      ], n) : pt(this.contents) && this.contents.set(t, n);
    }
    setIn(t, n) {
      En(t) ? this.contents = n : this.contents == null ? this.contents = Xi(this.schema, Array.from(t), n) : pt(this.contents) && this.contents.setIn(t, n);
    }
    setSchema(t, n = {}) {
      typeof t == "number" && (t = String(t));
      let r;
      switch (t) {
        case "1.1":
          this.directives ? this.directives.yaml.version = "1.1" : this.directives = new In({
            version: "1.1"
          }), r = {
            resolveKnownTags: false,
            schema: "yaml-1.1"
          };
          break;
        case "1.2":
        case "next":
          this.directives ? this.directives.yaml.version = t : this.directives = new In({
            version: t
          }), r = {
            resolveKnownTags: true,
            schema: "core"
          };
          break;
        case null:
          this.directives && delete this.directives, r = null;
          break;
        default: {
          const i = JSON.stringify(t);
          throw new Error(`Expected '1.1', '1.2' or null as first argument, but found: ${i}`);
        }
      }
      if (n.schema instanceof Object) this.schema = n.schema;
      else if (r) this.schema = new Di(Object.assign(r, n));
      else throw new Error("With a null YAML version, the { schema: Schema } option is required");
    }
    toJS({ json: t, jsonArg: n, mapAsMap: r, maxAliasCount: i, onAnchor: u, reviver: s } = {}) {
      const a = {
        anchors: /* @__PURE__ */ new Map(),
        doc: this,
        keep: !t,
        mapAsMap: r === true,
        mapKeyWarned: false,
        maxAliasCount: typeof i == "number" ? i : 100
      }, o = vc(this.contents, n ?? "", a);
      if (typeof u == "function") for (const { count: l, res: h } of a.anchors.values()) u(h, l);
      return typeof s == "function" ? zc(s, {
        "": o
      }, "", o) : o;
    }
    toJSON(t, n) {
      return this.toJS({
        json: true,
        jsonArg: t,
        mapAsMap: false,
        onAnchor: n
      });
    }
    toString(t = {}) {
      if (this.errors.length > 0) throw new Error("Document with errors cannot be stringified");
      if ("indent" in t && (!Number.isInteger(t.indent) || Number(t.indent) <= 0)) {
        const n = JSON.stringify(t.indent);
        throw new Error(`"indent" option must be a positive integer, not ${n}`);
      }
      return U0(this, t);
    }
  }
  function pt(e) {
    if (nt(e)) return true;
    throw new Error("Expected a YAML collection as document contents");
  }
  class Ca extends Error {
    constructor(t, n, r, i) {
      super(), this.name = t, this.code = r, this.message = i, this.pos = n;
    }
  }
  class Yt extends Ca {
    constructor(t, n, r) {
      super("YAMLParseError", t, n, r);
    }
  }
  class H0 extends Ca {
    constructor(t, n, r) {
      super("YAMLWarning", t, n, r);
    }
  }
  const Lu = (e, t) => (n) => {
    if (n.pos[0] === -1) return;
    n.linePos = n.pos.map((a) => t.linePos(a));
    const { line: r, col: i } = n.linePos[0];
    n.message += ` at line ${r}, column ${i}`;
    let u = i - 1, s = e.substring(t.lineStarts[r - 1], t.lineStarts[r]).replace(/[\n\r]+$/, "");
    if (u >= 60 && s.length > 80) {
      const a = Math.min(u - 39, s.length - 79);
      s = "\u2026" + s.substring(a), u -= a - 1;
    }
    if (s.length > 80 && (s = s.substring(0, 79) + "\u2026"), r > 1 && /^ *$/.test(s.substring(0, u))) {
      let a = e.substring(t.lineStarts[r - 2], t.lineStarts[r - 1]);
      a.length > 80 && (a = a.substring(0, 79) + `\u2026
`), s = a + s;
    }
    if (/[^ ]/.test(s)) {
      let a = 1;
      const o = n.linePos[1];
      (o == null ? void 0 : o.line) === r && o.col > i && (a = Math.max(1, Math.min(o.col - i, 80 - u)));
      const l = " ".repeat(u) + "^".repeat(a);
      n.message += `:

${s}
${l}
`;
    }
  };
  function _t(e, { flow: t, indicator: n, next: r, offset: i, onError: u, parentIndent: s, startOnNewline: a }) {
    let o = false, l = a, h = a, f = "", d = "", p = false, E = false, m = null, D = null, C = null, x = null, S = null, B = null, v = null;
    for (const w of e) switch (E && (w.type !== "space" && w.type !== "newline" && w.type !== "comma" && u(w.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), E = false), m && (l && w.type !== "comment" && w.type !== "newline" && u(m, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), m = null), w.type) {
      case "space":
        !t && (n !== "doc-start" || (r == null ? void 0 : r.type) !== "flow-collection") && w.source.includes("	") && (m = w), h = true;
        break;
      case "comment": {
        h || u(w, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
        const $ = w.source.substring(1) || " ";
        f ? f += d + $ : f = $, d = "", l = false;
        break;
      }
      case "newline":
        l ? f ? f += w.source : (!B || n !== "seq-item-ind") && (o = true) : d += w.source, l = true, p = true, (D || C) && (x = w), h = true;
        break;
      case "anchor":
        D && u(w, "MULTIPLE_ANCHORS", "A node can have at most one anchor"), w.source.endsWith(":") && u(w.offset + w.source.length - 1, "BAD_ALIAS", "Anchor ending in : is ambiguous", true), D = w, v ?? (v = w.offset), l = false, h = false, E = true;
        break;
      case "tag": {
        C && u(w, "MULTIPLE_TAGS", "A node can have at most one tag"), C = w, v ?? (v = w.offset), l = false, h = false, E = true;
        break;
      }
      case n:
        (D || C) && u(w, "BAD_PROP_ORDER", `Anchors and tags must be after the ${w.source} indicator`), B && u(w, "UNEXPECTED_TOKEN", `Unexpected ${w.source} in ${t ?? "collection"}`), B = w, l = n === "seq-item-ind" || n === "explicit-key-ind", h = false;
        break;
      case "comma":
        if (t) {
          S && u(w, "UNEXPECTED_TOKEN", `Unexpected , in ${t}`), S = w, l = false, h = false;
          break;
        }
      default:
        u(w, "UNEXPECTED_TOKEN", `Unexpected ${w.type} token`), l = false, h = false;
    }
    const k = e[e.length - 1], Y = k ? k.offset + k.source.length : i;
    return E && r && r.type !== "space" && r.type !== "newline" && r.type !== "comma" && (r.type !== "scalar" || r.source !== "") && u(r.offset, "MISSING_CHAR", "Tags and anchors must be separated from the next token by white space"), m && (l && m.indent <= s || (r == null ? void 0 : r.type) === "block-map" || (r == null ? void 0 : r.type) === "block-seq") && u(m, "TAB_AS_INDENT", "Tabs are not allowed as indentation"), {
      comma: S,
      found: B,
      spaceBefore: o,
      comment: f,
      hasNewline: p,
      anchor: D,
      tag: C,
      newlineAfterProp: x,
      end: Y,
      start: v ?? Y
    };
  }
  function rn(e) {
    if (!e) return null;
    switch (e.type) {
      case "alias":
      case "scalar":
      case "double-quoted-scalar":
      case "single-quoted-scalar":
        if (e.source.includes(`
`)) return true;
        if (e.end) {
          for (const t of e.end) if (t.type === "newline") return true;
        }
        return false;
      case "flow-collection":
        for (const t of e.items) {
          for (const n of t.start) if (n.type === "newline") return true;
          if (t.sep) {
            for (const n of t.sep) if (n.type === "newline") return true;
          }
          if (rn(t.key) || rn(t.value)) return true;
        }
        return false;
      default:
        return true;
    }
  }
  function jr(e, t, n) {
    if ((t == null ? void 0 : t.type) === "flow-collection") {
      const r = t.end[0];
      r.indent === e && (r.source === "]" || r.source === "}") && rn(t) && n(r, "BAD_INDENT", "Flow end indicator should be more indented than parent", true);
    }
  }
  function _a(e, t, n) {
    const { uniqueKeys: r } = e.options;
    if (r === false) return false;
    const i = typeof r == "function" ? r : (u, s) => u === s || At(u) && At(s) && u.value === s.value;
    return t.some((u) => i(u.key, n));
  }
  const Fu = "All mapping items must start at the same column";
  function v0({ composeNode: e, composeEmptyNode: t }, n, r, i, u) {
    var _a2;
    const s = (u == null ? void 0 : u.nodeClass) ?? ut, a = new s(n.schema);
    n.atRoot && (n.atRoot = false);
    let o = r.offset, l = null;
    for (const h of r.items) {
      const { start: f, key: d, sep: p, value: E } = h, m = _t(f, {
        indicator: "explicit-key-ind",
        next: d ?? (p == null ? void 0 : p[0]),
        offset: o,
        onError: i,
        parentIndent: r.indent,
        startOnNewline: true
      }), D = !m.found;
      if (D) {
        if (d && (d.type === "block-seq" ? i(o, "BLOCK_AS_IMPLICIT_KEY", "A block sequence may not be used as an implicit map key") : "indent" in d && d.indent !== r.indent && i(o, "BAD_INDENT", Fu)), !m.anchor && !m.tag && !p) {
          l = m.end, m.comment && (a.comment ? a.comment += `
` + m.comment : a.comment = m.comment);
          continue;
        }
        (m.newlineAfterProp || rn(d)) && i(d ?? f[f.length - 1], "MULTILINE_IMPLICIT_KEY", "Implicit keys need to be on a single line");
      } else ((_a2 = m.found) == null ? void 0 : _a2.indent) !== r.indent && i(o, "BAD_INDENT", Fu);
      n.atKey = true;
      const C = m.end, x = d ? e(n, d, m, i) : t(n, C, f, null, m, i);
      n.schema.compat && jr(r.indent, d, i), n.atKey = false, _a(n, a.items, x) && i(C, "DUPLICATE_KEY", "Map keys must be unique");
      const S = _t(p ?? [], {
        indicator: "map-value-ind",
        next: E,
        offset: x.range[2],
        onError: i,
        parentIndent: r.indent,
        startOnNewline: !d || d.type === "block-scalar"
      });
      if (o = S.end, S.found) {
        D && ((E == null ? void 0 : E.type) === "block-map" && !S.hasNewline && i(o, "BLOCK_AS_IMPLICIT_KEY", "Nested mappings are not allowed in compact mappings"), n.options.strict && m.start < S.found.offset - 1024 && i(x.range, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit block mapping key"));
        const B = E ? e(n, E, S, i) : t(n, o, p, null, S, i);
        n.schema.compat && jr(r.indent, E, i), o = B.range[2];
        const v = new tn(x, B);
        n.options.keepSourceTokens && (v.srcToken = h), a.items.push(v);
      } else {
        D && i(x.range, "MISSING_CHAR", "Implicit map keys need to be followed by map values"), S.comment && (x.comment ? x.comment += `
` + S.comment : x.comment = S.comment);
        const B = new tn(x);
        n.options.keepSourceTokens && (B.srcToken = h), a.items.push(B);
      }
    }
    return l && l < o && i(l, "IMPOSSIBLE", "Map comment with trailing content"), a.range = [
      r.offset,
      o,
      l ?? o
    ], a;
  }
  function z0({ composeNode: e, composeEmptyNode: t }, n, r, i, u) {
    const s = (u == null ? void 0 : u.nodeClass) ?? Tt, a = new s(n.schema);
    n.atRoot && (n.atRoot = false), n.atKey && (n.atKey = false);
    let o = r.offset, l = null;
    for (const { start: h, value: f } of r.items) {
      const d = _t(h, {
        indicator: "seq-item-ind",
        next: f,
        offset: o,
        onError: i,
        parentIndent: r.indent,
        startOnNewline: true
      });
      if (!d.found) if (d.anchor || d.tag || f) (f == null ? void 0 : f.type) === "block-seq" ? i(d.end, "BAD_INDENT", "All sequence items must start at the same column") : i(o, "MISSING_CHAR", "Sequence item without - indicator");
      else {
        l = d.end, d.comment && (a.comment = d.comment);
        continue;
      }
      const p = f ? e(n, f, d, i) : t(n, d.end, h, null, d, i);
      n.schema.compat && jr(r.indent, f, i), o = p.range[2], a.items.push(p);
    }
    return a.range = [
      r.offset,
      o,
      l ?? o
    ], a;
  }
  function ln(e, t, n, r) {
    let i = "";
    if (e) {
      let u = false, s = "";
      for (const a of e) {
        const { source: o, type: l } = a;
        switch (l) {
          case "space":
            u = true;
            break;
          case "comment": {
            n && !u && r(a, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters");
            const h = o.substring(1) || " ";
            i ? i += s + h : i = h, s = "";
            break;
          }
          case "newline":
            i && (s += o), u = true;
            break;
          default:
            r(a, "UNEXPECTED_TOKEN", `Unexpected ${l} at node end`);
        }
        t += o.length;
      }
    }
    return {
      comment: i,
      offset: t
    };
  }
  const gr = "Block collections are not allowed within flow collections", br = (e) => e && (e.type === "block-map" || e.type === "block-seq");
  function Y0({ composeNode: e, composeEmptyNode: t }, n, r, i, u) {
    var _a2;
    const s = r.start.source === "{", a = s ? "flow map" : "flow sequence", o = (u == null ? void 0 : u.nodeClass) ?? (s ? ut : Tt), l = new o(n.schema);
    l.flow = true;
    const h = n.atRoot;
    h && (n.atRoot = false), n.atKey && (n.atKey = false);
    let f = r.offset + r.start.source.length;
    for (let D = 0; D < r.items.length; ++D) {
      const C = r.items[D], { start: x, key: S, sep: B, value: v } = C, k = _t(x, {
        flow: a,
        indicator: "explicit-key-ind",
        next: S ?? (B == null ? void 0 : B[0]),
        offset: f,
        onError: i,
        parentIndent: r.indent,
        startOnNewline: false
      });
      if (!k.found) {
        if (!k.anchor && !k.tag && !B && !v) {
          D === 0 && k.comma ? i(k.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${a}`) : D < r.items.length - 1 && i(k.start, "UNEXPECTED_TOKEN", `Unexpected empty item in ${a}`), k.comment && (l.comment ? l.comment += `
` + k.comment : l.comment = k.comment), f = k.end;
          continue;
        }
        !s && n.options.strict && rn(S) && i(S, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
      }
      if (D === 0) k.comma && i(k.comma, "UNEXPECTED_TOKEN", `Unexpected , in ${a}`);
      else if (k.comma || i(k.start, "MISSING_CHAR", `Missing , between ${a} items`), k.comment) {
        let Y = "";
        e: for (const w of x) switch (w.type) {
          case "comma":
          case "space":
            break;
          case "comment":
            Y = w.source.substring(1);
            break e;
          default:
            break e;
        }
        if (Y) {
          let w = l.items[l.items.length - 1];
          Ms(w) && (w = w.value ?? w.key), w.comment ? w.comment += `
` + Y : w.comment = Y, k.comment = k.comment.substring(Y.length + 1);
        }
      }
      if (!s && !B && !k.found) {
        const Y = v ? e(n, v, k, i) : t(n, k.end, B, null, k, i);
        l.items.push(Y), f = Y.range[2], br(v) && i(Y.range, "BLOCK_IN_FLOW", gr);
      } else {
        n.atKey = true;
        const Y = k.end, w = S ? e(n, S, k, i) : t(n, Y, x, null, k, i);
        br(S) && i(w.range, "BLOCK_IN_FLOW", gr), n.atKey = false;
        const $ = _t(B ?? [], {
          flow: a,
          indicator: "map-value-ind",
          next: v,
          offset: w.range[2],
          onError: i,
          parentIndent: r.indent,
          startOnNewline: false
        });
        if ($.found) {
          if (!s && !k.found && n.options.strict) {
            if (B) for (const z of B) {
              if (z === $.found) break;
              if (z.type === "newline") {
                i(z, "MULTILINE_IMPLICIT_KEY", "Implicit keys of flow sequence pairs need to be on a single line");
                break;
              }
            }
            k.start < $.found.offset - 1024 && i($.found, "KEY_OVER_1024_CHARS", "The : indicator must be at most 1024 chars after the start of an implicit flow sequence key");
          }
        } else v && ("source" in v && ((_a2 = v.source) == null ? void 0 : _a2[0]) === ":" ? i(v, "MISSING_CHAR", `Missing space after : in ${a}`) : i($.start, "MISSING_CHAR", `Missing , or : between ${a} items`));
        const I = v ? e(n, v, $, i) : $.found ? t(n, $.end, B, null, $, i) : null;
        I ? br(v) && i(I.range, "BLOCK_IN_FLOW", gr) : $.comment && (w.comment ? w.comment += `
` + $.comment : w.comment = $.comment);
        const M = new tn(w, I);
        if (n.options.keepSourceTokens && (M.srcToken = C), s) {
          const z = l;
          _a(n, z.items, w) && i(Y, "DUPLICATE_KEY", "Map keys must be unique"), z.items.push(M);
        } else {
          const z = new ut(n.schema);
          z.flow = true, z.items.push(M);
          const V = (I ?? w).range;
          z.range = [
            w.range[0],
            V[1],
            V[2]
          ], l.items.push(z);
        }
        f = I ? I.range[2] : $.end;
      }
    }
    const d = s ? "}" : "]", [p, ...E] = r.end;
    let m = f;
    if ((p == null ? void 0 : p.source) === d) m = p.offset + p.source.length;
    else {
      const D = a[0].toUpperCase() + a.substring(1), C = h ? `${D} must end with a ${d}` : `${D} in block collection must be sufficiently indented and end with a ${d}`;
      i(f, h ? "MISSING_CHAR" : "BAD_INDENT", C), p && p.source.length !== 1 && E.unshift(p);
    }
    if (E.length > 0) {
      const D = ln(E, m, n.options.strict, i);
      D.comment && (l.comment ? l.comment += `
` + D.comment : l.comment = D.comment), l.range = [
        r.offset,
        m,
        D.offset
      ];
    } else l.range = [
      r.offset,
      m,
      m
    ];
    return l;
  }
  function Tr(e, t, n, r, i, u) {
    const s = n.type === "block-map" ? v0(e, t, n, r, u) : n.type === "block-seq" ? z0(e, t, n, r, u) : Y0(e, t, n, r, u), a = s.constructor;
    return i === "!" || i === a.tagName ? (s.tag = a.tagName, s) : (i && (s.tag = i), s);
  }
  function q0(e, t, n, r, i) {
    var _a2;
    const u = r.tag, s = u ? t.directives.tagName(u.source, (d) => i(u, "TAG_RESOLVE_FAILED", d)) : null;
    if (n.type === "block-seq") {
      const { anchor: d, newlineAfterProp: p } = r, E = d && u ? d.offset > u.offset ? d : u : d ?? u;
      E && (!p || p.offset < E.offset) && i(E, "MISSING_CHAR", "Missing newline after block sequence props");
    }
    const a = n.type === "block-map" ? "map" : n.type === "block-seq" ? "seq" : n.start.source === "{" ? "map" : "seq";
    if (!u || !s || s === "!" || s === ut.tagName && a === "map" || s === Tt.tagName && a === "seq") return Tr(e, t, n, i, s);
    let o = t.schema.tags.find((d) => d.tag === s && d.collection === a);
    if (!o) {
      const d = t.schema.knownTags[s];
      if ((d == null ? void 0 : d.collection) === a) t.schema.tags.push(Object.assign({}, d, {
        default: false
      })), o = d;
      else return d ? i(u, "BAD_COLLECTION_TYPE", `${d.tag} used for ${a} collection, but expects ${d.collection ?? "scalar"}`, true) : i(u, "TAG_RESOLVE_FAILED", `Unresolved tag: ${s}`, true), Tr(e, t, n, i, s);
    }
    const l = Tr(e, t, n, i, s, o), h = ((_a2 = o.resolve) == null ? void 0 : _a2.call(o, l, (d) => i(u, "TAG_RESOLVE_FAILED", d), t.options)) ?? l, f = ai(h) ? h : new ae(h);
    return f.range = l.range, f.tag = s, (o == null ? void 0 : o.format) && (f.format = o.format), f;
  }
  function $0(e, t, n) {
    const r = t.offset, i = j0(t, e.options.strict, n);
    if (!i) return {
      value: "",
      type: null,
      comment: "",
      range: [
        r,
        r,
        r
      ]
    };
    const u = i.mode === ">" ? ae.BLOCK_FOLDED : ae.BLOCK_LITERAL, s = t.source ? V0(t.source) : [];
    let a = s.length;
    for (let m = s.length - 1; m >= 0; --m) {
      const D = s[m][1];
      if (D === "" || D === "\r") a = m;
      else break;
    }
    if (a === 0) {
      const m = i.chomp === "+" && s.length > 0 ? `
`.repeat(Math.max(1, s.length - 1)) : "";
      let D = r + i.length;
      return t.source && (D += t.source.length), {
        value: m,
        type: u,
        comment: i.comment,
        range: [
          r,
          D,
          D
        ]
      };
    }
    let o = t.indent + i.indent, l = t.offset + i.length, h = 0;
    for (let m = 0; m < a; ++m) {
      const [D, C] = s[m];
      if (C === "" || C === "\r") i.indent === 0 && D.length > o && (o = D.length);
      else {
        D.length < o && n(l + D.length, "MISSING_CHAR", "Block scalars with more-indented leading empty lines must use an explicit indentation indicator"), i.indent === 0 && (o = D.length), h = m, o === 0 && !e.atRoot && n(l, "BAD_INDENT", "Block scalar values in collections must be indented");
        break;
      }
      l += D.length + C.length + 1;
    }
    for (let m = s.length - 1; m >= a; --m) s[m][0].length > o && (a = m + 1);
    let f = "", d = "", p = false;
    for (let m = 0; m < h; ++m) f += s[m][0].slice(o) + `
`;
    for (let m = h; m < a; ++m) {
      let [D, C] = s[m];
      l += D.length + C.length + 1;
      const x = C[C.length - 1] === "\r";
      if (x && (C = C.slice(0, -1)), C && D.length < o) {
        const B = `Block scalar lines must not be less indented than their ${i.indent ? "explicit indentation indicator" : "first line"}`;
        n(l - C.length - (x ? 2 : 1), "BAD_INDENT", B), D = "";
      }
      u === ae.BLOCK_LITERAL ? (f += d + D.slice(o) + C, d = `
`) : D.length > o || C[0] === "	" ? (d === " " ? d = `
` : !p && d === `
` && (d = `

`), f += d + D.slice(o) + C, d = `
`, p = true) : C === "" ? d === `
` ? f += `
` : d = `
` : (f += d + C, d = " ", p = false);
    }
    switch (i.chomp) {
      case "-":
        break;
      case "+":
        for (let m = a; m < s.length; ++m) f += `
` + s[m][0].slice(o);
        f[f.length - 1] !== `
` && (f += `
`);
        break;
      default:
        f += `
`;
    }
    const E = r + i.length + t.source.length;
    return {
      value: f,
      type: u,
      comment: i.comment,
      range: [
        r,
        E,
        E
      ]
    };
  }
  function j0({ offset: e, props: t }, n, r) {
    if (t[0].type !== "block-scalar-header") return r(t[0], "IMPOSSIBLE", "Block scalar header not found"), null;
    const { source: i } = t[0], u = i[0];
    let s = 0, a = "", o = -1;
    for (let d = 1; d < i.length; ++d) {
      const p = i[d];
      if (!a && (p === "-" || p === "+")) a = p;
      else {
        const E = Number(p);
        !s && E ? s = E : o === -1 && (o = e + d);
      }
    }
    o !== -1 && r(o, "UNEXPECTED_TOKEN", `Block scalar header includes extra characters: ${i}`);
    let l = false, h = "", f = i.length;
    for (let d = 1; d < t.length; ++d) {
      const p = t[d];
      switch (p.type) {
        case "space":
          l = true;
        case "newline":
          f += p.source.length;
          break;
        case "comment":
          n && !l && r(p, "MISSING_CHAR", "Comments must be separated from other tokens by white space characters"), f += p.source.length, h = p.source.substring(1);
          break;
        case "error":
          r(p, "UNEXPECTED_TOKEN", p.message), f += p.source.length;
          break;
        default: {
          const E = `Unexpected token in block scalar header: ${p.type}`;
          r(p, "UNEXPECTED_TOKEN", E);
          const m = p.source;
          m && typeof m == "string" && (f += m.length);
        }
      }
    }
    return {
      mode: u,
      indent: s,
      chomp: a,
      comment: h,
      length: f
    };
  }
  function V0(e) {
    const t = e.split(/\n( *)/), n = t[0], r = n.match(/^( *)/), u = [
      (r == null ? void 0 : r[1]) ? [
        r[1],
        n.slice(r[1].length)
      ] : [
        "",
        n
      ]
    ];
    for (let s = 1; s < t.length; s += 2) u.push([
      t[s],
      t[s + 1]
    ]);
    return u;
  }
  function K0(e, t, n) {
    const { offset: r, type: i, source: u, end: s } = e;
    let a, o;
    const l = (d, p, E) => n(r + d, p, E);
    switch (i) {
      case "scalar":
        a = ae.PLAIN, o = W0(u, l);
        break;
      case "single-quoted-scalar":
        a = ae.QUOTE_SINGLE, o = G0(u, l);
        break;
      case "double-quoted-scalar":
        a = ae.QUOTE_DOUBLE, o = Q0(u, l);
        break;
      default:
        return n(e, "UNEXPECTED_TOKEN", `Expected a flow scalar value, but found: ${i}`), {
          value: "",
          type: null,
          comment: "",
          range: [
            r,
            r + u.length,
            r + u.length
          ]
        };
    }
    const h = r + u.length, f = ln(s, h, t, n);
    return {
      value: o,
      type: a,
      comment: f.comment,
      range: [
        r,
        h,
        f.offset
      ]
    };
  }
  function W0(e, t) {
    let n = "";
    switch (e[0]) {
      case "	":
        n = "a tab character";
        break;
      case ",":
        n = "flow indicator character ,";
        break;
      case "%":
        n = "directive indicator character %";
        break;
      case "|":
      case ">": {
        n = `block scalar indicator ${e[0]}`;
        break;
      }
      case "@":
      case "`": {
        n = `reserved character ${e[0]}`;
        break;
      }
    }
    return n && t(0, "BAD_SCALAR_START", `Plain value cannot start with ${n}`), Da(e);
  }
  function G0(e, t) {
    return (e[e.length - 1] !== "'" || e.length === 1) && t(e.length, "MISSING_CHAR", "Missing closing 'quote"), Da(e.slice(1, -1)).replace(/''/g, "'");
  }
  function Da(e) {
    let t, n;
    try {
      t = new RegExp(`(.*?)(?<![ 	])[ 	]*\r?
`, "sy"), n = new RegExp(`[ 	]*(.*?)(?:(?<![ 	])[ 	]*)?\r?
`, "sy");
    } catch {
      t = /(.*?)[ \t]*\r?\n/sy, n = /[ \t]*(.*?)[ \t]*\r?\n/sy;
    }
    let r = t.exec(e);
    if (!r) return e;
    let i = r[1], u = " ", s = t.lastIndex;
    for (n.lastIndex = s; r = n.exec(e); ) r[1] === "" ? u === `
` ? i += u : u = `
` : (i += u + r[1], u = " "), s = n.lastIndex;
    const a = /[ \t]*(.*)/sy;
    return a.lastIndex = s, r = a.exec(e), i + u + ((r == null ? void 0 : r[1]) ?? "");
  }
  function Q0(e, t) {
    let n = "";
    for (let r = 1; r < e.length - 1; ++r) {
      const i = e[r];
      if (!(i === "\r" && e[r + 1] === `
`)) if (i === `
`) {
        const { fold: u, offset: s } = X0(e, r);
        n += u, r = s;
      } else if (i === "\\") {
        let u = e[++r];
        const s = J0[u];
        if (s) n += s;
        else if (u === `
`) for (u = e[r + 1]; u === " " || u === "	"; ) u = e[++r + 1];
        else if (u === "\r" && e[r + 1] === `
`) for (u = e[++r + 1]; u === " " || u === "	"; ) u = e[++r + 1];
        else if (u === "x" || u === "u" || u === "U") {
          const a = {
            x: 2,
            u: 4,
            U: 8
          }[u];
          n += Z0(e, r + 1, a, t), r += a;
        } else {
          const a = e.substr(r - 1, 2);
          t(r - 1, "BAD_DQ_ESCAPE", `Invalid escape sequence ${a}`), n += a;
        }
      } else if (i === " " || i === "	") {
        const u = r;
        let s = e[r + 1];
        for (; s === " " || s === "	"; ) s = e[++r + 1];
        s !== `
` && !(s === "\r" && e[r + 2] === `
`) && (n += r > u ? e.slice(u, r + 1) : i);
      } else n += i;
    }
    return (e[e.length - 1] !== '"' || e.length === 1) && t(e.length, "MISSING_CHAR", 'Missing closing "quote'), n;
  }
  function X0(e, t) {
    let n = "", r = e[t + 1];
    for (; (r === " " || r === "	" || r === `
` || r === "\r") && !(r === "\r" && e[t + 2] !== `
`); ) r === `
` && (n += `
`), t += 1, r = e[t + 1];
    return n || (n = " "), {
      fold: n,
      offset: t
    };
  }
  const J0 = {
    0: "\0",
    a: "\x07",
    b: "\b",
    e: "\x1B",
    f: "\f",
    n: `
`,
    r: "\r",
    t: "	",
    v: "\v",
    N: "\x85",
    _: "\xA0",
    L: "\u2028",
    P: "\u2029",
    " ": " ",
    '"': '"',
    "/": "/",
    "\\": "\\",
    "	": "	"
  };
  function Z0(e, t, n, r) {
    const i = e.substr(t, n), s = i.length === n && /^[0-9a-fA-F]+$/.test(i) ? parseInt(i, 16) : NaN;
    if (isNaN(s)) {
      const a = e.substr(t - 2, n + 2);
      return r(t - 2, "BAD_DQ_ESCAPE", `Invalid escape sequence ${a}`), a;
    }
    return String.fromCodePoint(s);
  }
  function ya(e, t, n, r) {
    const { value: i, type: u, comment: s, range: a } = t.type === "block-scalar" ? $0(e, t, r) : K0(t, e.options.strict, r), o = n ? e.directives.tagName(n.source, (f) => r(n, "TAG_RESOLVE_FAILED", f)) : null;
    let l;
    e.options.stringKeys && e.atKey ? l = e.schema[st] : o ? l = ep(e.schema, i, o, n, r) : t.type === "scalar" ? l = tp(e, i, t, r) : l = e.schema[st];
    let h;
    try {
      const f = l.resolve(i, (d) => r(n ?? t, "TAG_RESOLVE_FAILED", d), e.options);
      h = At(f) ? f : new ae(f);
    } catch (f) {
      const d = f instanceof Error ? f.message : String(f);
      r(n ?? t, "TAG_RESOLVE_FAILED", d), h = new ae(i);
    }
    return h.range = a, h.source = i, u && (h.type = u), o && (h.tag = o), l.format && (h.format = l.format), s && (h.comment = s), h;
  }
  function ep(e, t, n, r, i) {
    var _a2;
    if (n === "!") return e[st];
    const u = [];
    for (const a of e.tags) if (!a.collection && a.tag === n) if (a.default && a.test) u.push(a);
    else return a;
    for (const a of u) if ((_a2 = a.test) == null ? void 0 : _a2.test(t)) return a;
    const s = e.knownTags[n];
    return s && !s.collection ? (e.tags.push(Object.assign({}, s, {
      default: false,
      test: void 0
    })), s) : (i(r, "TAG_RESOLVE_FAILED", `Unresolved tag: ${n}`, n !== "tag:yaml.org,2002:str"), e[st]);
  }
  function tp({ atKey: e, directives: t, schema: n }, r, i, u) {
    const s = n.tags.find((a) => {
      var _a2;
      return (a.default === true || e && a.default === "key") && ((_a2 = a.test) == null ? void 0 : _a2.test(r));
    }) || n[st];
    if (n.compat) {
      const a = n.compat.find((o) => {
        var _a2;
        return o.default && ((_a2 = o.test) == null ? void 0 : _a2.test(r));
      }) ?? n[st];
      if (s.tag !== a.tag) {
        const o = t.tagString(s.tag), l = t.tagString(a.tag), h = `Value may be parsed as either ${o} or ${l}`;
        u(i, "TAG_RESOLVE_FAILED", h, true);
      }
    }
    return s;
  }
  function np(e, t, n) {
    if (t) {
      n ?? (n = t.length);
      for (let r = n - 1; r >= 0; --r) {
        let i = t[r];
        switch (i.type) {
          case "space":
          case "comment":
          case "newline":
            e -= i.source.length;
            continue;
        }
        for (i = t[++r]; (i == null ? void 0 : i.type) === "space"; ) e += i.source.length, i = t[++r];
        break;
      }
    }
    return e;
  }
  const rp = {
    composeNode: ka,
    composeEmptyNode: yi
  };
  function ka(e, t, n, r) {
    const i = e.atKey, { spaceBefore: u, comment: s, anchor: a, tag: o } = n;
    let l, h = true;
    switch (t.type) {
      case "alias":
        l = ip(e, t, r), (a || o) && r(t, "ALIAS_PROPS", "An alias node must not specify any properties");
        break;
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
      case "block-scalar":
        l = ya(e, t, o, r), a && (l.anchor = a.source.substring(1));
        break;
      case "block-map":
      case "block-seq":
      case "flow-collection":
        l = q0(rp, e, t, n, r), a && (l.anchor = a.source.substring(1));
        break;
      default: {
        const f = t.type === "error" ? t.message : `Unsupported token (type: ${t.type})`;
        r(t, "UNEXPECTED_TOKEN", f), l = yi(e, t.offset, void 0, null, n, r), h = false;
      }
    }
    return a && l.anchor === "" && r(a, "BAD_ALIAS", "Anchor cannot be an empty string"), i && e.options.stringKeys && (!At(l) || typeof l.value != "string" || l.tag && l.tag !== "tag:yaml.org,2002:str") && r(o ?? t, "NON_STRING_KEY", "With stringKeys, all keys must be strings"), u && (l.spaceBefore = true), s && (t.type === "scalar" && t.source === "" ? l.comment = s : l.commentBefore = s), e.options.keepSourceTokens && h && (l.srcToken = t), l;
  }
  function yi(e, t, n, r, { spaceBefore: i, comment: u, anchor: s, tag: a, end: o }, l) {
    const h = {
      type: "scalar",
      offset: np(t, n, r),
      indent: -1,
      source: ""
    }, f = ya(e, h, a, l);
    return s && (f.anchor = s.source.substring(1), f.anchor === "" && l(s, "BAD_ALIAS", "Anchor cannot be an empty string")), i && (f.spaceBefore = true), u && (f.comment = u, f.range[2] = o), f;
  }
  function ip({ options: e }, { offset: t, source: n, end: r }, i) {
    const u = new Ps(n.substring(1));
    u.source === "" && i(t, "BAD_ALIAS", "Alias cannot be an empty string"), u.source.endsWith(":") && i(t + n.length - 1, "BAD_ALIAS", "Alias ending in : is ambiguous", true);
    const s = t + n.length, a = ln(r, s, e.strict, i);
    return u.range = [
      t,
      s,
      a.offset
    ], a.comment && (u.comment = a.comment), u;
  }
  function up(e, t, { offset: n, start: r, value: i, end: u }, s) {
    const a = Object.assign({
      _directives: t
    }, e), o = new Nt(void 0, a), l = {
      atKey: false,
      atRoot: true,
      directives: o.directives,
      options: o.options,
      schema: o.schema
    }, h = _t(r, {
      indicator: "doc-start",
      next: i ?? (u == null ? void 0 : u[0]),
      offset: n,
      onError: s,
      parentIndent: 0,
      startOnNewline: true
    });
    h.found && (o.directives.docStart = true, i && (i.type === "block-map" || i.type === "block-seq") && !h.hasNewline && s(h.end, "MISSING_CHAR", "Block collection cannot start on same line with directives-end marker")), o.contents = i ? ka(l, i, h, s) : yi(l, h.end, r, null, h, s);
    const f = o.contents.range[2], d = ln(u, f, false, s);
    return d.comment && (o.comment = d.comment), o.range = [
      n,
      f,
      d.offset
    ], o;
  }
  function Pt(e) {
    if (typeof e == "number") return [
      e,
      e + 1
    ];
    if (Array.isArray(e)) return e.length === 2 ? e : [
      e[0],
      e[1]
    ];
    const { offset: t, source: n } = e;
    return [
      t,
      t + (typeof n == "string" ? n.length : 1)
    ];
  }
  function Ou(e) {
    var _a2;
    let t = "", n = false, r = false;
    for (let i = 0; i < e.length; ++i) {
      const u = e[i];
      switch (u[0]) {
        case "#":
          t += (t === "" ? "" : r ? `

` : `
`) + (u.substring(1) || " "), n = true, r = false;
          break;
        case "%":
          ((_a2 = e[i + 1]) == null ? void 0 : _a2[0]) !== "#" && (i += 1), n = false;
          break;
        default:
          n || (r = true), n = false;
      }
    }
    return {
      comment: t,
      afterEmptyLine: r
    };
  }
  class sp {
    constructor(t = {}) {
      this.doc = null, this.atDirectives = false, this.prelude = [], this.errors = [], this.warnings = [], this.onError = (n, r, i, u) => {
        const s = Pt(n);
        u ? this.warnings.push(new H0(s, r, i)) : this.errors.push(new Yt(s, r, i));
      }, this.directives = new In({
        version: t.version || "1.2"
      }), this.options = t;
    }
    decorate(t, n) {
      const { comment: r, afterEmptyLine: i } = Ou(this.prelude);
      if (r) {
        const u = t.contents;
        if (n) t.comment = t.comment ? `${t.comment}
${r}` : r;
        else if (i || t.directives.docStart || !u) t.commentBefore = r;
        else if (nt(u) && !u.flow && u.items.length > 0) {
          let s = u.items[0];
          Ms(s) && (s = s.key);
          const a = s.commentBefore;
          s.commentBefore = a ? `${r}
${a}` : r;
        } else {
          const s = u.commentBefore;
          u.commentBefore = s ? `${r}
${s}` : r;
        }
      }
      n ? (Array.prototype.push.apply(t.errors, this.errors), Array.prototype.push.apply(t.warnings, this.warnings)) : (t.errors = this.errors, t.warnings = this.warnings), this.prelude = [], this.errors = [], this.warnings = [];
    }
    streamInfo() {
      return {
        comment: Ou(this.prelude).comment,
        directives: this.directives,
        errors: this.errors,
        warnings: this.warnings
      };
    }
    *compose(t, n = false, r = -1) {
      for (const i of t) yield* this.next(i);
      yield* this.end(n, r);
    }
    *next(t) {
      switch (t.type) {
        case "directive":
          this.directives.add(t.source, (n, r, i) => {
            const u = Pt(t);
            u[0] += n, this.onError(u, "BAD_DIRECTIVE", r, i);
          }), this.prelude.push(t.source), this.atDirectives = true;
          break;
        case "document": {
          const n = up(this.options, this.directives, t, this.onError);
          this.atDirectives && !n.directives.docStart && this.onError(t, "MISSING_CHAR", "Missing directives-end/doc-start indicator line"), this.decorate(n, false), this.doc && (yield this.doc), this.doc = n, this.atDirectives = false;
          break;
        }
        case "byte-order-mark":
        case "space":
          break;
        case "comment":
        case "newline":
          this.prelude.push(t.source);
          break;
        case "error": {
          const n = t.source ? `${t.message}: ${JSON.stringify(t.source)}` : t.message, r = new Yt(Pt(t), "UNEXPECTED_TOKEN", n);
          this.atDirectives || !this.doc ? this.errors.push(r) : this.doc.errors.push(r);
          break;
        }
        case "doc-end": {
          if (!this.doc) {
            const r = "Unexpected doc-end without preceding document";
            this.errors.push(new Yt(Pt(t), "UNEXPECTED_TOKEN", r));
            break;
          }
          this.doc.directives.docEnd = true;
          const n = ln(t.end, t.offset + t.source.length, this.doc.options.strict, this.onError);
          if (this.decorate(this.doc, true), n.comment) {
            const r = this.doc.comment;
            this.doc.comment = r ? `${r}
${n.comment}` : n.comment;
          }
          this.doc.range[2] = n.offset;
          break;
        }
        default:
          this.errors.push(new Yt(Pt(t), "UNEXPECTED_TOKEN", `Unsupported token ${t.type}`));
      }
    }
    *end(t = false, n = -1) {
      if (this.doc) this.decorate(this.doc, true), yield this.doc, this.doc = null;
      else if (t) {
        const r = Object.assign({
          _directives: this.directives
        }, this.options), i = new Nt(void 0, r);
        this.atDirectives && this.onError(n, "MISSING_CHAR", "Missing directives-end indicator line"), i.range = [
          0,
          n,
          n
        ], this.decorate(i, false), yield i;
      }
    }
  }
  class ap {
    constructor() {
      this.lineStarts = [], this.addNewLine = (t) => this.lineStarts.push(t), this.linePos = (t) => {
        let n = 0, r = this.lineStarts.length;
        for (; n < r; ) {
          const u = n + r >> 1;
          this.lineStarts[u] < t ? n = u + 1 : r = u;
        }
        if (this.lineStarts[n] === t) return {
          line: n + 1,
          col: 1
        };
        if (n === 0) return {
          line: 0,
          col: t
        };
        const i = this.lineStarts[n - 1];
        return {
          line: n,
          col: t - i + 1
        };
      };
    }
  }
  function Ke(e, t) {
    for (let n = 0; n < e.length; ++n) if (e[n].type === t) return true;
    return false;
  }
  function wu(e) {
    for (let t = 0; t < e.length; ++t) switch (e[t].type) {
      case "space":
      case "comment":
      case "newline":
        break;
      default:
        return t;
    }
    return -1;
  }
  function Ia(e) {
    switch (e == null ? void 0 : e.type) {
      case "alias":
      case "scalar":
      case "single-quoted-scalar":
      case "double-quoted-scalar":
      case "flow-collection":
        return true;
      default:
        return false;
    }
  }
  function Cn(e) {
    switch (e.type) {
      case "document":
        return e.start;
      case "block-map": {
        const t = e.items[e.items.length - 1];
        return t.sep ?? t.start;
      }
      case "block-seq":
        return e.items[e.items.length - 1].start;
      default:
        return [];
    }
  }
  function dt(e) {
    var _a2;
    if (e.length === 0) return [];
    let t = e.length;
    e: for (; --t >= 0; ) switch (e[t].type) {
      case "doc-start":
      case "explicit-key-ind":
      case "map-value-ind":
      case "seq-item-ind":
      case "newline":
        break e;
    }
    for (; ((_a2 = e[++t]) == null ? void 0 : _a2.type) === "space"; ) ;
    return e.splice(t, e.length);
  }
  function Ru(e) {
    if (e.start.type === "flow-seq-start") for (const t of e.items) t.sep && !t.value && !Ke(t.start, "explicit-key-ind") && !Ke(t.sep, "map-value-ind") && (t.key && (t.value = t.key), delete t.key, Ia(t.value) ? t.value.end ? Array.prototype.push.apply(t.value.end, t.sep) : t.value.end = t.sep : Array.prototype.push.apply(t.start, t.sep), delete t.sep);
  }
  let op = class {
    constructor(t) {
      this.atNewLine = true, this.atScalar = false, this.indent = 0, this.offset = 0, this.onKeyLine = false, this.stack = [], this.source = "", this.type = "", this.lexer = new qc(), this.onNewLine = t;
    }
    *parse(t, n = false) {
      this.onNewLine && this.offset === 0 && this.onNewLine(0);
      for (const r of this.lexer.lex(t, n)) yield* this.next(r);
      n || (yield* this.end());
    }
    *next(t) {
      if (this.source = t, this.atScalar) {
        this.atScalar = false, yield* this.step(), this.offset += t.length;
        return;
      }
      const n = $c(t);
      if (n) if (n === "scalar") this.atNewLine = false, this.atScalar = true, this.type = "scalar";
      else {
        switch (this.type = n, yield* this.step(), n) {
          case "newline":
            this.atNewLine = true, this.indent = 0, this.onNewLine && this.onNewLine(this.offset + t.length);
            break;
          case "space":
            this.atNewLine && t[0] === " " && (this.indent += t.length);
            break;
          case "explicit-key-ind":
          case "map-value-ind":
          case "seq-item-ind":
            this.atNewLine && (this.indent += t.length);
            break;
          case "doc-mode":
          case "flow-error-end":
            return;
          default:
            this.atNewLine = false;
        }
        this.offset += t.length;
      }
      else {
        const r = `Not a YAML token: ${t}`;
        yield* this.pop({
          type: "error",
          offset: this.offset,
          message: r,
          source: t
        }), this.offset += t.length;
      }
    }
    *end() {
      for (; this.stack.length > 0; ) yield* this.pop();
    }
    get sourceToken() {
      return {
        type: this.type,
        offset: this.offset,
        indent: this.indent,
        source: this.source
      };
    }
    *step() {
      const t = this.peek(1);
      if (this.type === "doc-end" && (t == null ? void 0 : t.type) !== "doc-end") {
        for (; this.stack.length > 0; ) yield* this.pop();
        this.stack.push({
          type: "doc-end",
          offset: this.offset,
          source: this.source
        });
        return;
      }
      if (!t) return yield* this.stream();
      switch (t.type) {
        case "document":
          return yield* this.document(t);
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return yield* this.scalar(t);
        case "block-scalar":
          return yield* this.blockScalar(t);
        case "block-map":
          return yield* this.blockMap(t);
        case "block-seq":
          return yield* this.blockSequence(t);
        case "flow-collection":
          return yield* this.flowCollection(t);
        case "doc-end":
          return yield* this.documentEnd(t);
      }
      yield* this.pop();
    }
    peek(t) {
      return this.stack[this.stack.length - t];
    }
    *pop(t) {
      const n = t ?? this.stack.pop();
      if (!n) yield {
        type: "error",
        offset: this.offset,
        source: "",
        message: "Tried to pop an empty stack"
      };
      else if (this.stack.length === 0) yield n;
      else {
        const r = this.peek(1);
        switch (n.type === "block-scalar" ? n.indent = "indent" in r ? r.indent : 0 : n.type === "flow-collection" && r.type === "document" && (n.indent = 0), n.type === "flow-collection" && Ru(n), r.type) {
          case "document":
            r.value = n;
            break;
          case "block-scalar":
            r.props.push(n);
            break;
          case "block-map": {
            const i = r.items[r.items.length - 1];
            if (i.value) {
              r.items.push({
                start: [],
                key: n,
                sep: []
              }), this.onKeyLine = true;
              return;
            } else if (i.sep) i.value = n;
            else {
              Object.assign(i, {
                key: n,
                sep: []
              }), this.onKeyLine = !i.explicitKey;
              return;
            }
            break;
          }
          case "block-seq": {
            const i = r.items[r.items.length - 1];
            i.value ? r.items.push({
              start: [],
              value: n
            }) : i.value = n;
            break;
          }
          case "flow-collection": {
            const i = r.items[r.items.length - 1];
            !i || i.value ? r.items.push({
              start: [],
              key: n,
              sep: []
            }) : i.sep ? i.value = n : Object.assign(i, {
              key: n,
              sep: []
            });
            return;
          }
          default:
            yield* this.pop(), yield* this.pop(n);
        }
        if ((r.type === "document" || r.type === "block-map" || r.type === "block-seq") && (n.type === "block-map" || n.type === "block-seq")) {
          const i = n.items[n.items.length - 1];
          i && !i.sep && !i.value && i.start.length > 0 && wu(i.start) === -1 && (n.indent === 0 || i.start.every((u) => u.type !== "comment" || u.indent < n.indent)) && (r.type === "document" ? r.end = i.start : r.items.push({
            start: i.start
          }), n.items.splice(-1, 1));
        }
      }
    }
    *stream() {
      switch (this.type) {
        case "directive-line":
          yield {
            type: "directive",
            offset: this.offset,
            source: this.source
          };
          return;
        case "byte-order-mark":
        case "space":
        case "comment":
        case "newline":
          yield this.sourceToken;
          return;
        case "doc-mode":
        case "doc-start": {
          const t = {
            type: "document",
            offset: this.offset,
            start: []
          };
          this.type === "doc-start" && t.start.push(this.sourceToken), this.stack.push(t);
          return;
        }
      }
      yield {
        type: "error",
        offset: this.offset,
        message: `Unexpected ${this.type} token in YAML stream`,
        source: this.source
      };
    }
    *document(t) {
      if (t.value) return yield* this.lineEnd(t);
      switch (this.type) {
        case "doc-start": {
          wu(t.start) !== -1 ? (yield* this.pop(), yield* this.step()) : t.start.push(this.sourceToken);
          return;
        }
        case "anchor":
        case "tag":
        case "space":
        case "comment":
        case "newline":
          t.start.push(this.sourceToken);
          return;
      }
      const n = this.startBlockValue(t);
      n ? this.stack.push(n) : yield {
        type: "error",
        offset: this.offset,
        message: `Unexpected ${this.type} token in YAML document`,
        source: this.source
      };
    }
    *scalar(t) {
      if (this.type === "map-value-ind") {
        const n = Cn(this.peek(2)), r = dt(n);
        let i;
        t.end ? (i = t.end, i.push(this.sourceToken), delete t.end) : i = [
          this.sourceToken
        ];
        const u = {
          type: "block-map",
          offset: t.offset,
          indent: t.indent,
          items: [
            {
              start: r,
              key: t,
              sep: i
            }
          ]
        };
        this.onKeyLine = true, this.stack[this.stack.length - 1] = u;
      } else yield* this.lineEnd(t);
    }
    *blockScalar(t) {
      switch (this.type) {
        case "space":
        case "comment":
        case "newline":
          t.props.push(this.sourceToken);
          return;
        case "scalar":
          if (t.source = this.source, this.atNewLine = true, this.indent = 0, this.onNewLine) {
            let n = this.source.indexOf(`
`) + 1;
            for (; n !== 0; ) this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
          }
          yield* this.pop();
          break;
        default:
          yield* this.pop(), yield* this.step();
      }
    }
    *blockMap(t) {
      var _a2, _b2, _c2;
      const n = t.items[t.items.length - 1];
      switch (this.type) {
        case "newline":
          if (this.onKeyLine = false, n.value) {
            const r = "end" in n.value ? n.value.end : void 0;
            ((_a2 = Array.isArray(r) ? r[r.length - 1] : void 0) == null ? void 0 : _a2.type) === "comment" ? r == null ? void 0 : r.push(this.sourceToken) : t.items.push({
              start: [
                this.sourceToken
              ]
            });
          } else n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
          return;
        case "space":
        case "comment":
          if (n.value) t.items.push({
            start: [
              this.sourceToken
            ]
          });
          else if (n.sep) n.sep.push(this.sourceToken);
          else {
            if (this.atIndentedComment(n.start, t.indent)) {
              const i = (_c2 = (_b2 = t.items[t.items.length - 2]) == null ? void 0 : _b2.value) == null ? void 0 : _c2.end;
              if (Array.isArray(i)) {
                Array.prototype.push.apply(i, n.start), i.push(this.sourceToken), t.items.pop();
                return;
              }
            }
            n.start.push(this.sourceToken);
          }
          return;
      }
      if (this.indent >= t.indent) {
        const r = !this.onKeyLine && this.indent === t.indent, i = r && (n.sep || n.explicitKey) && this.type !== "seq-item-ind";
        let u = [];
        if (i && n.sep && !n.value) {
          const s = [];
          for (let a = 0; a < n.sep.length; ++a) {
            const o = n.sep[a];
            switch (o.type) {
              case "newline":
                s.push(a);
                break;
              case "space":
                break;
              case "comment":
                o.indent > t.indent && (s.length = 0);
                break;
              default:
                s.length = 0;
            }
          }
          s.length >= 2 && (u = n.sep.splice(s[1]));
        }
        switch (this.type) {
          case "anchor":
          case "tag":
            i || n.value ? (u.push(this.sourceToken), t.items.push({
              start: u
            }), this.onKeyLine = true) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
            return;
          case "explicit-key-ind":
            !n.sep && !n.explicitKey ? (n.start.push(this.sourceToken), n.explicitKey = true) : i || n.value ? (u.push(this.sourceToken), t.items.push({
              start: u,
              explicitKey: true
            })) : this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [
                {
                  start: [
                    this.sourceToken
                  ],
                  explicitKey: true
                }
              ]
            }), this.onKeyLine = true;
            return;
          case "map-value-ind":
            if (n.explicitKey) if (n.sep) if (n.value) t.items.push({
              start: [],
              key: null,
              sep: [
                this.sourceToken
              ]
            });
            else if (Ke(n.sep, "map-value-ind")) this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [
                {
                  start: u,
                  key: null,
                  sep: [
                    this.sourceToken
                  ]
                }
              ]
            });
            else if (Ia(n.key) && !Ke(n.sep, "newline")) {
              const s = dt(n.start), a = n.key, o = n.sep;
              o.push(this.sourceToken), delete n.key, delete n.sep, this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [
                  {
                    start: s,
                    key: a,
                    sep: o
                  }
                ]
              });
            } else u.length > 0 ? n.sep = n.sep.concat(u, this.sourceToken) : n.sep.push(this.sourceToken);
            else if (Ke(n.start, "newline")) Object.assign(n, {
              key: null,
              sep: [
                this.sourceToken
              ]
            });
            else {
              const s = dt(n.start);
              this.stack.push({
                type: "block-map",
                offset: this.offset,
                indent: this.indent,
                items: [
                  {
                    start: s,
                    key: null,
                    sep: [
                      this.sourceToken
                    ]
                  }
                ]
              });
            }
            else n.sep ? n.value || i ? t.items.push({
              start: u,
              key: null,
              sep: [
                this.sourceToken
              ]
            }) : Ke(n.sep, "map-value-ind") ? this.stack.push({
              type: "block-map",
              offset: this.offset,
              indent: this.indent,
              items: [
                {
                  start: [],
                  key: null,
                  sep: [
                    this.sourceToken
                  ]
                }
              ]
            }) : n.sep.push(this.sourceToken) : Object.assign(n, {
              key: null,
              sep: [
                this.sourceToken
              ]
            });
            this.onKeyLine = true;
            return;
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar": {
            const s = this.flowScalar(this.type);
            i || n.value ? (t.items.push({
              start: u,
              key: s,
              sep: []
            }), this.onKeyLine = true) : n.sep ? this.stack.push(s) : (Object.assign(n, {
              key: s,
              sep: []
            }), this.onKeyLine = true);
            return;
          }
          default: {
            const s = this.startBlockValue(t);
            if (s) {
              if (s.type === "block-seq") {
                if (!n.explicitKey && n.sep && !Ke(n.sep, "newline")) {
                  yield* this.pop({
                    type: "error",
                    offset: this.offset,
                    message: "Unexpected block-seq-ind on same line with key",
                    source: this.source
                  });
                  return;
                }
              } else r && t.items.push({
                start: u
              });
              this.stack.push(s);
              return;
            }
          }
        }
      }
      yield* this.pop(), yield* this.step();
    }
    *blockSequence(t) {
      var _a2, _b2, _c2;
      const n = t.items[t.items.length - 1];
      switch (this.type) {
        case "newline":
          if (n.value) {
            const r = "end" in n.value ? n.value.end : void 0;
            ((_a2 = Array.isArray(r) ? r[r.length - 1] : void 0) == null ? void 0 : _a2.type) === "comment" ? r == null ? void 0 : r.push(this.sourceToken) : t.items.push({
              start: [
                this.sourceToken
              ]
            });
          } else n.start.push(this.sourceToken);
          return;
        case "space":
        case "comment":
          if (n.value) t.items.push({
            start: [
              this.sourceToken
            ]
          });
          else {
            if (this.atIndentedComment(n.start, t.indent)) {
              const i = (_c2 = (_b2 = t.items[t.items.length - 2]) == null ? void 0 : _b2.value) == null ? void 0 : _c2.end;
              if (Array.isArray(i)) {
                Array.prototype.push.apply(i, n.start), i.push(this.sourceToken), t.items.pop();
                return;
              }
            }
            n.start.push(this.sourceToken);
          }
          return;
        case "anchor":
        case "tag":
          if (n.value || this.indent <= t.indent) break;
          n.start.push(this.sourceToken);
          return;
        case "seq-item-ind":
          if (this.indent !== t.indent) break;
          n.value || Ke(n.start, "seq-item-ind") ? t.items.push({
            start: [
              this.sourceToken
            ]
          }) : n.start.push(this.sourceToken);
          return;
      }
      if (this.indent > t.indent) {
        const r = this.startBlockValue(t);
        if (r) {
          this.stack.push(r);
          return;
        }
      }
      yield* this.pop(), yield* this.step();
    }
    *flowCollection(t) {
      const n = t.items[t.items.length - 1];
      if (this.type === "flow-error-end") {
        let r;
        do
          yield* this.pop(), r = this.peek(1);
        while ((r == null ? void 0 : r.type) === "flow-collection");
      } else if (t.end.length === 0) {
        switch (this.type) {
          case "comma":
          case "explicit-key-ind":
            !n || n.sep ? t.items.push({
              start: [
                this.sourceToken
              ]
            }) : n.start.push(this.sourceToken);
            return;
          case "map-value-ind":
            !n || n.value ? t.items.push({
              start: [],
              key: null,
              sep: [
                this.sourceToken
              ]
            }) : n.sep ? n.sep.push(this.sourceToken) : Object.assign(n, {
              key: null,
              sep: [
                this.sourceToken
              ]
            });
            return;
          case "space":
          case "comment":
          case "newline":
          case "anchor":
          case "tag":
            !n || n.value ? t.items.push({
              start: [
                this.sourceToken
              ]
            }) : n.sep ? n.sep.push(this.sourceToken) : n.start.push(this.sourceToken);
            return;
          case "alias":
          case "scalar":
          case "single-quoted-scalar":
          case "double-quoted-scalar": {
            const i = this.flowScalar(this.type);
            !n || n.value ? t.items.push({
              start: [],
              key: i,
              sep: []
            }) : n.sep ? this.stack.push(i) : Object.assign(n, {
              key: i,
              sep: []
            });
            return;
          }
          case "flow-map-end":
          case "flow-seq-end":
            t.end.push(this.sourceToken);
            return;
        }
        const r = this.startBlockValue(t);
        r ? this.stack.push(r) : (yield* this.pop(), yield* this.step());
      } else {
        const r = this.peek(2);
        if (r.type === "block-map" && (this.type === "map-value-ind" && r.indent === t.indent || this.type === "newline" && !r.items[r.items.length - 1].sep)) yield* this.pop(), yield* this.step();
        else if (this.type === "map-value-ind" && r.type !== "flow-collection") {
          const i = Cn(r), u = dt(i);
          Ru(t);
          const s = t.end.splice(1, t.end.length);
          s.push(this.sourceToken);
          const a = {
            type: "block-map",
            offset: t.offset,
            indent: t.indent,
            items: [
              {
                start: u,
                key: t,
                sep: s
              }
            ]
          };
          this.onKeyLine = true, this.stack[this.stack.length - 1] = a;
        } else yield* this.lineEnd(t);
      }
    }
    flowScalar(t) {
      if (this.onNewLine) {
        let n = this.source.indexOf(`
`) + 1;
        for (; n !== 0; ) this.onNewLine(this.offset + n), n = this.source.indexOf(`
`, n) + 1;
      }
      return {
        type: t,
        offset: this.offset,
        indent: this.indent,
        source: this.source
      };
    }
    startBlockValue(t) {
      switch (this.type) {
        case "alias":
        case "scalar":
        case "single-quoted-scalar":
        case "double-quoted-scalar":
          return this.flowScalar(this.type);
        case "block-scalar-header":
          return {
            type: "block-scalar",
            offset: this.offset,
            indent: this.indent,
            props: [
              this.sourceToken
            ],
            source: ""
          };
        case "flow-map-start":
        case "flow-seq-start":
          return {
            type: "flow-collection",
            offset: this.offset,
            indent: this.indent,
            start: this.sourceToken,
            items: [],
            end: []
          };
        case "seq-item-ind":
          return {
            type: "block-seq",
            offset: this.offset,
            indent: this.indent,
            items: [
              {
                start: [
                  this.sourceToken
                ]
              }
            ]
          };
        case "explicit-key-ind": {
          this.onKeyLine = true;
          const n = Cn(t), r = dt(n);
          return r.push(this.sourceToken), {
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [
              {
                start: r,
                explicitKey: true
              }
            ]
          };
        }
        case "map-value-ind": {
          this.onKeyLine = true;
          const n = Cn(t), r = dt(n);
          return {
            type: "block-map",
            offset: this.offset,
            indent: this.indent,
            items: [
              {
                start: r,
                key: null,
                sep: [
                  this.sourceToken
                ]
              }
            ]
          };
        }
      }
      return null;
    }
    atIndentedComment(t, n) {
      return this.type !== "comment" || this.indent <= n ? false : t.every((r) => r.type === "newline" || r.type === "space");
    }
    *documentEnd(t) {
      this.type !== "doc-mode" && (t.end ? t.end.push(this.sourceToken) : t.end = [
        this.sourceToken
      ], this.type === "newline" && (yield* this.pop()));
    }
    *lineEnd(t) {
      switch (this.type) {
        case "comma":
        case "doc-start":
        case "doc-end":
        case "flow-seq-end":
        case "flow-map-end":
        case "map-value-ind":
          yield* this.pop(), yield* this.step();
          break;
        case "newline":
          this.onKeyLine = false;
        default:
          t.end ? t.end.push(this.sourceToken) : t.end = [
            this.sourceToken
          ], this.type === "newline" && (yield* this.pop());
      }
    }
  };
  function cp(e) {
    const t = e.prettyErrors !== false;
    return {
      lineCounter: e.lineCounter || t && new ap() || null,
      prettyErrors: t
    };
  }
  function lp(e, t = {}) {
    const { lineCounter: n, prettyErrors: r } = cp(t), i = new op(n == null ? void 0 : n.addNewLine), u = new sp(t);
    let s = null;
    for (const a of u.compose(i.parse(e), true, e.length)) if (!s) s = a;
    else if (s.options.logLevel !== "silent") {
      s.errors.push(new Yt(a.range.slice(0, 2), "MULTIPLE_DOCS", "Source contains multiple documents; please use YAML.parseAllDocuments()"));
      break;
    }
    return r && n && (s.errors.forEach(Lu(e, n)), s.warnings.forEach(Lu(e, n))), s;
  }
  function fp(e, t, n) {
    let r = null;
    if (typeof t == "function" || Array.isArray(t) ? r = t : n === void 0 && t && (n = t), typeof n == "string" && (n = n.length), typeof n == "number") {
      const i = Math.round(n);
      n = i < 1 ? void 0 : i > 8 ? {
        indent: 8
      } : {
        indent: i
      };
    }
    if (e === void 0) {
      const { keepUndefined: i } = n ?? t ?? {};
      if (!i) return;
    }
    return jc(e) && !r ? e.toString(n) : new Nt(e, r, n).toString(n);
  }
  function Na(e) {
    return e && e.constructor && typeof e.constructor.isBuffer == "function" && e.constructor.isBuffer(e);
  }
  function Sa(e) {
    return e;
  }
  function hp(e, t) {
    t = t || {};
    const n = t.delimiter || ".", r = t.maxDepth, i = t.transformKey || Sa, u = {};
    function s(a, o, l) {
      l = l || 1, Object.keys(a).forEach(function(h) {
        const f = a[h], d = t.safe && Array.isArray(f), p = Object.prototype.toString.call(f), E = Na(f), m = p === "[object Object]" || p === "[object Array]", D = o ? o + n + i(h) : i(h);
        if (!d && !E && m && Object.keys(f).length && (!t.maxDepth || l < r)) return s(f, D, l + 1);
        u[D] = f;
      });
    }
    return s(e), u;
  }
  function ki(e, t) {
    t = t || {};
    const n = t.delimiter || ".", r = t.overwrite || false, i = t.transformKey || Sa, u = {};
    if (Na(e) || Object.prototype.toString.call(e) !== "[object Object]") return e;
    function a(h) {
      const f = Number(h);
      return isNaN(f) || h.indexOf(".") !== -1 || t.object ? h : f;
    }
    function o(h, f, d) {
      return Object.keys(d).reduce(function(p, E) {
        return p[h + n + E] = d[E], p;
      }, f);
    }
    function l(h) {
      const f = Object.prototype.toString.call(h), d = f === "[object Array]", p = f === "[object Object]";
      if (h) {
        if (d) return !h.length;
        if (p) return !Object.keys(h).length;
      } else return true;
    }
    return e = Object.keys(e).reduce(function(h, f) {
      const d = Object.prototype.toString.call(e[f]);
      return !(d === "[object Object]" || d === "[object Array]") || l(e[f]) ? (h[f] = e[f], h) : o(f, h, hp(e[f], t));
    }, {}), Object.keys(e).forEach(function(h) {
      const f = h.split(n).map(i);
      let d = a(f.shift()), p = a(f[0]), E = u;
      for (; p !== void 0; ) {
        if (d === "__proto__") return;
        const m = Object.prototype.toString.call(E[d]), D = m === "[object Object]" || m === "[object Array]";
        if (!r && !D && typeof E[d] < "u") return;
        (r && !D || !r && E[d] == null) && (E[d] = typeof p == "number" && !t.object ? [] : {}), E = E[d], f.length > 0 && (d = a(f.shift()), p = a(f[0]));
      }
      E[d] = ki(e[h], t);
    }), u;
  }
  const pp = {}.hasOwnProperty;
  function xa(e, t) {
    let n = -1, r;
    if (t.extensions) for (; ++n < t.extensions.length; ) xa(e, t.extensions[n]);
    for (r in t) if (pp.call(t, r)) switch (r) {
      case "extensions":
        break;
      case "unsafe": {
        Bu(e[r], t[r]);
        break;
      }
      case "join": {
        Bu(e[r], t[r]);
        break;
      }
      case "handlers": {
        dp(e[r], t[r]);
        break;
      }
      default:
        e.options[r] = t[r];
    }
    return e;
  }
  function Bu(e, t) {
    t && e.push(...t);
  }
  function dp(e, t) {
    t && Object.assign(e, t);
  }
  function mp(e, t, n, r) {
    const i = n.enter("blockquote"), u = n.createTracker(r);
    u.move("> "), u.shift(2);
    const s = n.indentLines(n.containerFlow(e, u.current()), Ep);
    return i(), s;
  }
  function Ep(e, t, n) {
    return ">" + (n ? "" : " ") + e;
  }
  function La(e, t) {
    return Pu(e, t.inConstruct, true) && !Pu(e, t.notInConstruct, false);
  }
  function Pu(e, t, n) {
    if (typeof t == "string" && (t = [
      t
    ]), !t || t.length === 0) return n;
    let r = -1;
    for (; ++r < t.length; ) if (e.includes(t[r])) return true;
    return false;
  }
  function Mu(e, t, n, r) {
    let i = -1;
    for (; ++i < n.unsafe.length; ) if (n.unsafe[i].character === `
` && La(n.stack, n.unsafe[i])) return /[ \t]/.test(r.before) ? "" : " ";
    return `\\
`;
  }
  gp = function(e, t) {
    const n = String(e);
    let r = n.indexOf(t), i = r, u = 0, s = 0;
    if (typeof t != "string") throw new TypeError("Expected substring");
    for (; r !== -1; ) r === i ? ++u > s && (s = u) : u = 1, i = r + t.length, r = n.indexOf(t, i);
    return s;
  };
  function Vr(e, t) {
    return !!(t.options.fences === false && e.value && !e.lang && /[^ \r\n]/.test(e.value) && !/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value));
  }
  function bp(e) {
    const t = e.options.fence || "`";
    if (t !== "`" && t !== "~") throw new Error("Cannot serialize code with `" + t + "` for `options.fence`, expected `` ` `` or `~`");
    return t;
  }
  function Tp(e, t, n, r) {
    const i = bp(n), u = e.value || "", s = i === "`" ? "GraveAccent" : "Tilde";
    if (Vr(e, n)) {
      const f = n.enter("codeIndented"), d = n.indentLines(u, Ap);
      return f(), d;
    }
    const a = n.createTracker(r), o = i.repeat(Math.max(gp(u, i) + 1, 3)), l = n.enter("codeFenced");
    let h = a.move(o);
    if (e.lang) {
      const f = n.enter(`codeFencedLang${s}`);
      h += a.move(n.safe(e.lang, {
        before: h,
        after: " ",
        encode: [
          "`"
        ],
        ...a.current()
      })), f();
    }
    if (e.lang && e.meta) {
      const f = n.enter(`codeFencedMeta${s}`);
      h += a.move(" "), h += a.move(n.safe(e.meta, {
        before: h,
        after: `
`,
        encode: [
          "`"
        ],
        ...a.current()
      })), f();
    }
    return h += a.move(`
`), u && (h += a.move(u + `
`)), h += a.move(o), l(), h;
  }
  function Ap(e, t, n) {
    return (n ? "" : "    ") + e;
  }
  function Ii(e) {
    const t = e.options.quote || '"';
    if (t !== '"' && t !== "'") throw new Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
    return t;
  }
  function Cp(e, t, n, r) {
    const i = Ii(n), u = i === '"' ? "Quote" : "Apostrophe", s = n.enter("definition");
    let a = n.enter("label");
    const o = n.createTracker(r);
    let l = o.move("[");
    return l += o.move(n.safe(n.associationId(e), {
      before: l,
      after: "]",
      ...o.current()
    })), l += o.move("]: "), a(), !e.url || /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(n.safe(e.url, {
      before: l,
      after: ">",
      ...o.current()
    })), l += o.move(">")) : (a = n.enter("destinationRaw"), l += o.move(n.safe(e.url, {
      before: l,
      after: e.title ? " " : `
`,
      ...o.current()
    }))), a(), e.title && (a = n.enter(`title${u}`), l += o.move(" " + i), l += o.move(n.safe(e.title, {
      before: l,
      after: i,
      ...o.current()
    })), l += o.move(i), a()), s(), l;
  }
  function _p(e) {
    const t = e.options.emphasis || "*";
    if (t !== "*" && t !== "_") throw new Error("Cannot serialize emphasis with `" + t + "` for `options.emphasis`, expected `*`, or `_`");
    return t;
  }
  function Ge(e) {
    return "&#x" + e.toString(16).toUpperCase() + ";";
  }
  function Bn(e, t, n) {
    const r = Ct(e), i = Ct(t);
    return r === void 0 ? i === void 0 ? n === "_" ? {
      inside: true,
      outside: true
    } : {
      inside: false,
      outside: false
    } : i === 1 ? {
      inside: true,
      outside: true
    } : {
      inside: false,
      outside: true
    } : r === 1 ? i === void 0 ? {
      inside: false,
      outside: false
    } : i === 1 ? {
      inside: true,
      outside: true
    } : {
      inside: false,
      outside: false
    } : i === void 0 ? {
      inside: false,
      outside: false
    } : i === 1 ? {
      inside: true,
      outside: false
    } : {
      inside: false,
      outside: false
    };
  }
  Fa.peek = Dp;
  function Fa(e, t, n, r) {
    const i = _p(n), u = n.enter("emphasis"), s = n.createTracker(r), a = s.move(i);
    let o = s.move(n.containerPhrasing(e, {
      after: i,
      before: a,
      ...s.current()
    }));
    const l = o.charCodeAt(0), h = Bn(r.before.charCodeAt(r.before.length - 1), l, i);
    h.inside && (o = Ge(l) + o.slice(1));
    const f = o.charCodeAt(o.length - 1), d = Bn(r.after.charCodeAt(0), f, i);
    d.inside && (o = o.slice(0, -1) + Ge(f));
    const p = s.move(i);
    return u(), n.attentionEncodeSurroundingInfo = {
      after: d.outside,
      before: h.outside
    }, a + o + p;
  }
  function Dp(e, t, n) {
    return n.options.emphasis || "*";
  }
  function Oa(e, t) {
    let n = false;
    return ge(e, function(r) {
      if ("value" in r && /\r?\n|\r/.test(r.value) || r.type === "break") return n = true, Rn;
    }), !!((!e.depth || e.depth < 3) && Yn(e) && (t.options.setext || n));
  }
  function yp(e, t, n, r) {
    const i = Math.max(Math.min(6, e.depth || 1), 1), u = n.createTracker(r);
    if (Oa(e, n)) {
      const h = n.enter("headingSetext"), f = n.enter("phrasing"), d = n.containerPhrasing(e, {
        ...u.current(),
        before: `
`,
        after: `
`
      });
      return f(), h(), d + `
` + (i === 1 ? "=" : "-").repeat(d.length - (Math.max(d.lastIndexOf("\r"), d.lastIndexOf(`
`)) + 1));
    }
    const s = "#".repeat(i), a = n.enter("headingAtx"), o = n.enter("phrasing");
    u.move(s + " ");
    let l = n.containerPhrasing(e, {
      before: "# ",
      after: `
`,
      ...u.current()
    });
    return /^[\t ]/.test(l) && (l = Ge(l.charCodeAt(0)) + l.slice(1)), l = l ? s + " " + l : s, n.options.closeAtx && (l += " " + s), o(), a(), l;
  }
  wa.peek = kp;
  function wa(e) {
    return e.value || "";
  }
  function kp() {
    return "<";
  }
  Ra.peek = Ip;
  function Ra(e, t, n, r) {
    const i = Ii(n), u = i === '"' ? "Quote" : "Apostrophe", s = n.enter("image");
    let a = n.enter("label");
    const o = n.createTracker(r);
    let l = o.move("![");
    return l += o.move(n.safe(e.alt, {
      before: l,
      after: "]",
      ...o.current()
    })), l += o.move("]("), a(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (a = n.enter("destinationLiteral"), l += o.move("<"), l += o.move(n.safe(e.url, {
      before: l,
      after: ">",
      ...o.current()
    })), l += o.move(">")) : (a = n.enter("destinationRaw"), l += o.move(n.safe(e.url, {
      before: l,
      after: e.title ? " " : ")",
      ...o.current()
    }))), a(), e.title && (a = n.enter(`title${u}`), l += o.move(" " + i), l += o.move(n.safe(e.title, {
      before: l,
      after: i,
      ...o.current()
    })), l += o.move(i), a()), l += o.move(")"), s(), l;
  }
  function Ip() {
    return "!";
  }
  Ba.peek = Np;
  function Ba(e, t, n, r) {
    const i = e.referenceType, u = n.enter("imageReference");
    let s = n.enter("label");
    const a = n.createTracker(r);
    let o = a.move("![");
    const l = n.safe(e.alt, {
      before: o,
      after: "]",
      ...a.current()
    });
    o += a.move(l + "]["), s();
    const h = n.stack;
    n.stack = [], s = n.enter("reference");
    const f = n.safe(n.associationId(e), {
      before: o,
      after: "]",
      ...a.current()
    });
    return s(), n.stack = h, u(), i === "full" || !l || l !== f ? o += a.move(f + "]") : i === "shortcut" ? o = o.slice(0, -1) : o += a.move("]"), o;
  }
  function Np() {
    return "!";
  }
  Pa.peek = Sp;
  function Pa(e, t, n) {
    let r = e.value || "", i = "`", u = -1;
    for (; new RegExp("(^|[^`])" + i + "([^`]|$)").test(r); ) i += "`";
    for (/[^ \r\n]/.test(r) && (/^[ \r\n]/.test(r) && /[ \r\n]$/.test(r) || /^`|`$/.test(r)) && (r = " " + r + " "); ++u < n.unsafe.length; ) {
      const s = n.unsafe[u], a = n.compilePattern(s);
      let o;
      if (s.atBreak) for (; o = a.exec(r); ) {
        let l = o.index;
        r.charCodeAt(l) === 10 && r.charCodeAt(l - 1) === 13 && l--, r = r.slice(0, l) + " " + r.slice(o.index + 1);
      }
    }
    return i + r + i;
  }
  function Sp() {
    return "`";
  }
  function Ma(e, t) {
    const n = Yn(e);
    return !!(!t.options.resourceLink && e.url && !e.title && e.children && e.children.length === 1 && e.children[0].type === "text" && (n === e.url || "mailto:" + n === e.url) && /^[a-z][a-z+.-]+:/i.test(e.url) && !/[\0- <>\u007F]/.test(e.url));
  }
  Ua.peek = xp;
  function Ua(e, t, n, r) {
    const i = Ii(n), u = i === '"' ? "Quote" : "Apostrophe", s = n.createTracker(r);
    let a, o;
    if (Ma(e, n)) {
      const h = n.stack;
      n.stack = [], a = n.enter("autolink");
      let f = s.move("<");
      return f += s.move(n.containerPhrasing(e, {
        before: f,
        after: ">",
        ...s.current()
      })), f += s.move(">"), a(), n.stack = h, f;
    }
    a = n.enter("link"), o = n.enter("label");
    let l = s.move("[");
    return l += s.move(n.containerPhrasing(e, {
      before: l,
      after: "](",
      ...s.current()
    })), l += s.move("]("), o(), !e.url && e.title || /[\0- \u007F]/.test(e.url) ? (o = n.enter("destinationLiteral"), l += s.move("<"), l += s.move(n.safe(e.url, {
      before: l,
      after: ">",
      ...s.current()
    })), l += s.move(">")) : (o = n.enter("destinationRaw"), l += s.move(n.safe(e.url, {
      before: l,
      after: e.title ? " " : ")",
      ...s.current()
    }))), o(), e.title && (o = n.enter(`title${u}`), l += s.move(" " + i), l += s.move(n.safe(e.title, {
      before: l,
      after: i,
      ...s.current()
    })), l += s.move(i), o()), l += s.move(")"), a(), l;
  }
  function xp(e, t, n) {
    return Ma(e, n) ? "<" : "[";
  }
  Ha.peek = Lp;
  function Ha(e, t, n, r) {
    const i = e.referenceType, u = n.enter("linkReference");
    let s = n.enter("label");
    const a = n.createTracker(r);
    let o = a.move("[");
    const l = n.containerPhrasing(e, {
      before: o,
      after: "]",
      ...a.current()
    });
    o += a.move(l + "]["), s();
    const h = n.stack;
    n.stack = [], s = n.enter("reference");
    const f = n.safe(n.associationId(e), {
      before: o,
      after: "]",
      ...a.current()
    });
    return s(), n.stack = h, u(), i === "full" || !l || l !== f ? o += a.move(f + "]") : i === "shortcut" ? o = o.slice(0, -1) : o += a.move("]"), o;
  }
  function Lp() {
    return "[";
  }
  function Ni(e) {
    const t = e.options.bullet || "*";
    if (t !== "*" && t !== "+" && t !== "-") throw new Error("Cannot serialize items with `" + t + "` for `options.bullet`, expected `*`, `+`, or `-`");
    return t;
  }
  function Fp(e) {
    const t = Ni(e), n = e.options.bulletOther;
    if (!n) return t === "*" ? "-" : "*";
    if (n !== "*" && n !== "+" && n !== "-") throw new Error("Cannot serialize items with `" + n + "` for `options.bulletOther`, expected `*`, `+`, or `-`");
    if (n === t) throw new Error("Expected `bullet` (`" + t + "`) and `bulletOther` (`" + n + "`) to be different");
    return n;
  }
  function Op(e) {
    const t = e.options.bulletOrdered || ".";
    if (t !== "." && t !== ")") throw new Error("Cannot serialize items with `" + t + "` for `options.bulletOrdered`, expected `.` or `)`");
    return t;
  }
  function va(e) {
    const t = e.options.rule || "*";
    if (t !== "*" && t !== "-" && t !== "_") throw new Error("Cannot serialize rules with `" + t + "` for `options.rule`, expected `*`, `-`, or `_`");
    return t;
  }
  function wp(e, t, n, r) {
    const i = n.enter("list"), u = n.bulletCurrent;
    let s = e.ordered ? Op(n) : Ni(n);
    const a = e.ordered ? s === "." ? ")" : "." : Fp(n);
    let o = t && n.bulletLastUsed ? s === n.bulletLastUsed : false;
    if (!e.ordered) {
      const h = e.children ? e.children[0] : void 0;
      if ((s === "*" || s === "-") && h && (!h.children || !h.children[0]) && n.stack[n.stack.length - 1] === "list" && n.stack[n.stack.length - 2] === "listItem" && n.stack[n.stack.length - 3] === "list" && n.stack[n.stack.length - 4] === "listItem" && n.indexStack[n.indexStack.length - 1] === 0 && n.indexStack[n.indexStack.length - 2] === 0 && n.indexStack[n.indexStack.length - 3] === 0 && (o = true), va(n) === s && h) {
        let f = -1;
        for (; ++f < e.children.length; ) {
          const d = e.children[f];
          if (d && d.type === "listItem" && d.children && d.children[0] && d.children[0].type === "thematicBreak") {
            o = true;
            break;
          }
        }
      }
    }
    o && (s = a), n.bulletCurrent = s;
    const l = n.containerFlow(e, r);
    return n.bulletLastUsed = s, n.bulletCurrent = u, i(), l;
  }
  function Rp(e) {
    const t = e.options.listItemIndent || "one";
    if (t !== "tab" && t !== "one" && t !== "mixed") throw new Error("Cannot serialize items with `" + t + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");
    return t;
  }
  function Bp(e, t, n, r) {
    const i = Rp(n);
    let u = n.bulletCurrent || Ni(n);
    t && t.type === "list" && t.ordered && (u = (typeof t.start == "number" && t.start > -1 ? t.start : 1) + (n.options.incrementListMarker === false ? 0 : t.children.indexOf(e)) + u);
    let s = u.length + 1;
    (i === "tab" || i === "mixed" && (t && t.type === "list" && t.spread || e.spread)) && (s = Math.ceil(s / 4) * 4);
    const a = n.createTracker(r);
    a.move(u + " ".repeat(s - u.length)), a.shift(s);
    const o = n.enter("listItem"), l = n.indentLines(n.containerFlow(e, a.current()), h);
    return o(), l;
    function h(f, d, p) {
      return d ? (p ? "" : " ".repeat(s)) + f : (p ? u : u + " ".repeat(s - u.length)) + f;
    }
  }
  function Pp(e, t, n, r) {
    const i = n.enter("paragraph"), u = n.enter("phrasing"), s = n.containerPhrasing(e, r);
    return u(), i(), s;
  }
  const za = yt([
    "break",
    "delete",
    "emphasis",
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    "inlineMath",
    "link",
    "linkReference",
    "mdxJsxTextElement",
    "mdxTextExpression",
    "strong",
    "text",
    "textDirective"
  ]);
  function Mp(e, t, n, r) {
    return (e.children.some(function(s) {
      return za(s);
    }) ? n.containerPhrasing : n.containerFlow).call(n, e, r);
  }
  function Up(e) {
    const t = e.options.strong || "*";
    if (t !== "*" && t !== "_") throw new Error("Cannot serialize strong with `" + t + "` for `options.strong`, expected `*`, or `_`");
    return t;
  }
  Ya.peek = Hp;
  function Ya(e, t, n, r) {
    const i = Up(n), u = n.enter("strong"), s = n.createTracker(r), a = s.move(i + i);
    let o = s.move(n.containerPhrasing(e, {
      after: i,
      before: a,
      ...s.current()
    }));
    const l = o.charCodeAt(0), h = Bn(r.before.charCodeAt(r.before.length - 1), l, i);
    h.inside && (o = Ge(l) + o.slice(1));
    const f = o.charCodeAt(o.length - 1), d = Bn(r.after.charCodeAt(0), f, i);
    d.inside && (o = o.slice(0, -1) + Ge(f));
    const p = s.move(i + i);
    return u(), n.attentionEncodeSurroundingInfo = {
      after: d.outside,
      before: h.outside
    }, a + o + p;
  }
  function Hp(e, t, n) {
    return n.options.strong || "*";
  }
  function vp(e, t, n, r) {
    return n.safe(e.value, r);
  }
  function zp(e) {
    const t = e.options.ruleRepetition || 3;
    if (t < 3) throw new Error("Cannot serialize rules with repetition `" + t + "` for `options.ruleRepetition`, expected `3` or more");
    return t;
  }
  function Yp(e, t, n) {
    const r = (va(n) + (n.options.ruleSpaces ? " " : "")).repeat(zp(n));
    return n.options.ruleSpaces ? r.slice(0, -1) : r;
  }
  const He = {
    blockquote: mp,
    break: Mu,
    code: Tp,
    definition: Cp,
    emphasis: Fa,
    hardBreak: Mu,
    heading: yp,
    html: wa,
    image: Ra,
    imageReference: Ba,
    inlineCode: Pa,
    link: Ua,
    linkReference: Ha,
    list: wp,
    listItem: Bp,
    paragraph: Pp,
    root: Mp,
    strong: Ya,
    text: vp,
    thematicBreak: Yp
  }, qp = [
    $p
  ];
  function $p(e, t, n, r) {
    if (t.type === "code" && Vr(t, r) && (e.type === "list" || e.type === t.type && Vr(e, r))) return false;
    if ("spread" in n && typeof n.spread == "boolean") return e.type === "paragraph" && (e.type === t.type || t.type === "definition" || t.type === "heading" && Oa(t, r)) ? void 0 : n.spread ? 1 : 0;
  }
  const et = [
    "autolink",
    "destinationLiteral",
    "destinationRaw",
    "reference",
    "titleQuote",
    "titleApostrophe"
  ], jp = [
    {
      character: "	",
      after: "[\\r\\n]",
      inConstruct: "phrasing"
    },
    {
      character: "	",
      before: "[\\r\\n]",
      inConstruct: "phrasing"
    },
    {
      character: "	",
      inConstruct: [
        "codeFencedLangGraveAccent",
        "codeFencedLangTilde"
      ]
    },
    {
      character: "\r",
      inConstruct: [
        "codeFencedLangGraveAccent",
        "codeFencedLangTilde",
        "codeFencedMetaGraveAccent",
        "codeFencedMetaTilde",
        "destinationLiteral",
        "headingAtx"
      ]
    },
    {
      character: `
`,
      inConstruct: [
        "codeFencedLangGraveAccent",
        "codeFencedLangTilde",
        "codeFencedMetaGraveAccent",
        "codeFencedMetaTilde",
        "destinationLiteral",
        "headingAtx"
      ]
    },
    {
      character: " ",
      after: "[\\r\\n]",
      inConstruct: "phrasing"
    },
    {
      character: " ",
      before: "[\\r\\n]",
      inConstruct: "phrasing"
    },
    {
      character: " ",
      inConstruct: [
        "codeFencedLangGraveAccent",
        "codeFencedLangTilde"
      ]
    },
    {
      character: "!",
      after: "\\[",
      inConstruct: "phrasing",
      notInConstruct: et
    },
    {
      character: '"',
      inConstruct: "titleQuote"
    },
    {
      atBreak: true,
      character: "#"
    },
    {
      character: "#",
      inConstruct: "headingAtx",
      after: `(?:[\r
]|$)`
    },
    {
      character: "&",
      after: "[#A-Za-z]",
      inConstruct: "phrasing"
    },
    {
      character: "'",
      inConstruct: "titleApostrophe"
    },
    {
      character: "(",
      inConstruct: "destinationRaw"
    },
    {
      before: "\\]",
      character: "(",
      inConstruct: "phrasing",
      notInConstruct: et
    },
    {
      atBreak: true,
      before: "\\d+",
      character: ")"
    },
    {
      character: ")",
      inConstruct: "destinationRaw"
    },
    {
      atBreak: true,
      character: "*",
      after: `(?:[ 	\r
*])`
    },
    {
      character: "*",
      inConstruct: "phrasing",
      notInConstruct: et
    },
    {
      atBreak: true,
      character: "+",
      after: `(?:[ 	\r
])`
    },
    {
      atBreak: true,
      character: "-",
      after: `(?:[ 	\r
-])`
    },
    {
      atBreak: true,
      before: "\\d+",
      character: ".",
      after: `(?:[ 	\r
]|$)`
    },
    {
      atBreak: true,
      character: "<",
      after: "[!/?A-Za-z]"
    },
    {
      character: "<",
      after: "[!/?A-Za-z]",
      inConstruct: "phrasing",
      notInConstruct: et
    },
    {
      character: "<",
      inConstruct: "destinationLiteral"
    },
    {
      atBreak: true,
      character: "="
    },
    {
      atBreak: true,
      character: ">"
    },
    {
      character: ">",
      inConstruct: "destinationLiteral"
    },
    {
      atBreak: true,
      character: "["
    },
    {
      character: "[",
      inConstruct: "phrasing",
      notInConstruct: et
    },
    {
      character: "[",
      inConstruct: [
        "label",
        "reference"
      ]
    },
    {
      character: "\\",
      after: "[\\r\\n]",
      inConstruct: "phrasing"
    },
    {
      character: "]",
      inConstruct: [
        "label",
        "reference"
      ]
    },
    {
      atBreak: true,
      character: "_"
    },
    {
      character: "_",
      inConstruct: "phrasing",
      notInConstruct: et
    },
    {
      atBreak: true,
      character: "`"
    },
    {
      character: "`",
      inConstruct: [
        "codeFencedLangGraveAccent",
        "codeFencedMetaGraveAccent"
      ]
    },
    {
      character: "`",
      inConstruct: "phrasing",
      notInConstruct: et
    },
    {
      atBreak: true,
      character: "~"
    }
  ];
  function Vp(e) {
    return e.label || !e.identifier ? e.label || "" : Xs(e.identifier);
  }
  function Kp(e) {
    if (!e._compiled) {
      const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
      e._compiled = new RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g");
    }
    return e._compiled;
  }
  function Wp(e, t, n) {
    const r = t.indexStack, i = e.children || [], u = [];
    let s = -1, a = n.before, o;
    r.push(-1);
    let l = t.createTracker(n);
    for (; ++s < i.length; ) {
      const h = i[s];
      let f;
      if (r[r.length - 1] = s, s + 1 < i.length) {
        let E = t.handle.handlers[i[s + 1].type];
        E && E.peek && (E = E.peek), f = E ? E(i[s + 1], e, t, {
          before: "",
          after: "",
          ...l.current()
        }).charAt(0) : "";
      } else f = n.after;
      u.length > 0 && (a === "\r" || a === `
`) && h.type === "html" && (u[u.length - 1] = u[u.length - 1].replace(/(\r?\n|\r)$/, " "), a = " ", l = t.createTracker(n), l.move(u.join("")));
      let d = t.handle(h, e, t, {
        ...l.current(),
        after: f,
        before: a
      });
      o && o === d.slice(0, 1) && (d = Ge(o.charCodeAt(0)) + d.slice(1));
      const p = t.attentionEncodeSurroundingInfo;
      t.attentionEncodeSurroundingInfo = void 0, o = void 0, p && (u.length > 0 && p.before && a === u[u.length - 1].slice(-1) && (u[u.length - 1] = u[u.length - 1].slice(0, -1) + Ge(a.charCodeAt(0))), p.after && (o = f)), l.move(d), u.push(d), a = d.slice(-1);
    }
    return r.pop(), u.join("");
  }
  function Gp(e, t, n) {
    const r = t.indexStack, i = e.children || [], u = t.createTracker(n), s = [];
    let a = -1;
    for (r.push(-1); ++a < i.length; ) {
      const o = i[a];
      r[r.length - 1] = a, s.push(u.move(t.handle(o, e, t, {
        before: `
`,
        after: `
`,
        ...u.current()
      }))), o.type !== "list" && (t.bulletLastUsed = void 0), a < i.length - 1 && s.push(u.move(Qp(o, i[a + 1], e, t)));
    }
    return r.pop(), s.join("");
  }
  function Qp(e, t, n, r) {
    let i = r.join.length;
    for (; i--; ) {
      const u = r.join[i](e, t, n, r);
      if (u === true || u === 1) break;
      if (typeof u == "number") return `
`.repeat(1 + u);
      if (u === false) return `

<!---->

`;
    }
    return `

`;
  }
  const Xp = /\r?\n|\r/g;
  function Jp(e, t) {
    const n = [];
    let r = 0, i = 0, u;
    for (; u = Xp.exec(e); ) s(e.slice(r, u.index)), n.push(u[0]), r = u.index + u[0].length, i++;
    return s(e.slice(r)), n.join("");
    function s(a) {
      n.push(t(a, i, !a));
    }
  }
  function Zp(e, t, n) {
    const r = (n.before || "") + (t || "") + (n.after || ""), i = [], u = [], s = {};
    let a = -1;
    for (; ++a < e.unsafe.length; ) {
      const h = e.unsafe[a];
      if (!La(e.stack, h)) continue;
      const f = e.compilePattern(h);
      let d;
      for (; d = f.exec(r); ) {
        const p = "before" in h || !!h.atBreak, E = "after" in h, m = d.index + (p ? d[1].length : 0);
        i.includes(m) ? (s[m].before && !p && (s[m].before = false), s[m].after && !E && (s[m].after = false)) : (i.push(m), s[m] = {
          before: p,
          after: E
        });
      }
    }
    i.sort(ed);
    let o = n.before ? n.before.length : 0;
    const l = r.length - (n.after ? n.after.length : 0);
    for (a = -1; ++a < i.length; ) {
      const h = i[a];
      h < o || h >= l || h + 1 < l && i[a + 1] === h + 1 && s[h].after && !s[h + 1].before && !s[h + 1].after || i[a - 1] === h - 1 && s[h].before && !s[h - 1].before && !s[h - 1].after || (o !== h && u.push(Uu(r.slice(o, h), "\\")), o = h, /[!-/:-@[-`{-~]/.test(r.charAt(h)) && (!n.encode || !n.encode.includes(r.charAt(h))) ? u.push("\\") : (u.push(Ge(r.charCodeAt(h))), o++));
    }
    return u.push(Uu(r.slice(o, l), n.after)), u.join("");
  }
  function ed(e, t) {
    return e - t;
  }
  function Uu(e, t) {
    const n = /\\(?=[!-/:-@[-`{-~])/g, r = [], i = [], u = e + t;
    let s = -1, a = 0, o;
    for (; o = n.exec(u); ) r.push(o.index);
    for (; ++s < r.length; ) a !== r[s] && i.push(e.slice(a, r[s])), i.push("\\"), a = r[s];
    return i.push(e.slice(a)), i.join("");
  }
  function td(e) {
    const t = e || {}, n = t.now || {};
    let r = t.lineShift || 0, i = n.line || 1, u = n.column || 1;
    return {
      move: o,
      current: s,
      shift: a
    };
    function s() {
      return {
        now: {
          line: i,
          column: u
        },
        lineShift: r
      };
    }
    function a(l) {
      r += l;
    }
    function o(l) {
      const h = l || "", f = h.split(/\r?\n|\r/g), d = f[f.length - 1];
      return i += f.length - 1, u = f.length === 1 ? u + d.length : 1 + d.length + r, h;
    }
  }
  function nd(e, t) {
    const n = t || {}, r = {
      associationId: Vp,
      containerPhrasing: sd,
      containerFlow: ad,
      createTracker: td,
      compilePattern: Kp,
      enter: u,
      handlers: {
        ...He
      },
      handle: void 0,
      indentLines: Jp,
      indexStack: [],
      join: [
        ...qp
      ],
      options: {},
      safe: od,
      stack: [],
      unsafe: [
        ...jp
      ]
    };
    xa(r, n), r.options.tightDefinitions && r.join.push(ud), r.handle = oi("type", {
      invalid: rd,
      unknown: id,
      handlers: r.handlers
    });
    let i = r.handle(e, void 0, r, {
      before: `
`,
      after: `
`,
      now: {
        line: 1,
        column: 1
      },
      lineShift: 0
    });
    return i && i.charCodeAt(i.length - 1) !== 10 && i.charCodeAt(i.length - 1) !== 13 && (i += `
`), i;
    function u(s) {
      return r.stack.push(s), a;
      function a() {
        r.stack.pop();
      }
    }
  }
  function rd(e) {
    throw new Error("Cannot handle value `" + e + "`, expected node");
  }
  function id(e) {
    const t = e;
    throw new Error("Cannot handle unknown node `" + t.type + "`");
  }
  function ud(e, t) {
    if (e.type === "definition" && e.type === t.type) return 0;
  }
  function sd(e, t) {
    return Wp(e, this, t);
  }
  function ad(e, t) {
    return Gp(e, this, t);
  }
  function od(e, t) {
    return Zp(this, e, t);
  }
  const Hu = {
    0: "\uFFFD",
    128: "\u20AC",
    130: "\u201A",
    131: "\u0192",
    132: "\u201E",
    133: "\u2026",
    134: "\u2020",
    135: "\u2021",
    136: "\u02C6",
    137: "\u2030",
    138: "\u0160",
    139: "\u2039",
    140: "\u0152",
    142: "\u017D",
    145: "\u2018",
    146: "\u2019",
    147: "\u201C",
    148: "\u201D",
    149: "\u2022",
    150: "\u2013",
    151: "\u2014",
    152: "\u02DC",
    153: "\u2122",
    154: "\u0161",
    155: "\u203A",
    156: "\u0153",
    158: "\u017E",
    159: "\u0178"
  };
  function qa(e) {
    const t = typeof e == "string" ? e.charCodeAt(0) : e;
    return t >= 48 && t <= 57;
  }
  function cd(e) {
    const t = typeof e == "string" ? e.charCodeAt(0) : e;
    return t >= 97 && t <= 102 || t >= 65 && t <= 70 || t >= 48 && t <= 57;
  }
  function ld(e) {
    const t = typeof e == "string" ? e.charCodeAt(0) : e;
    return t >= 97 && t <= 122 || t >= 65 && t <= 90;
  }
  function vu(e) {
    return ld(e) || qa(e);
  }
  const fd = [
    "",
    "Named character references must be terminated by a semicolon",
    "Numeric character references must be terminated by a semicolon",
    "Named character references cannot be empty",
    "Numeric character references cannot be empty",
    "Named character references must be known",
    "Numeric character references cannot be disallowed",
    "Numeric character references cannot be outside the permissible Unicode range"
  ];
  function Ar(e, t) {
    const n = {}, r = typeof n.additional == "string" ? n.additional.charCodeAt(0) : n.additional, i = [];
    let u = 0, s = -1, a = "", o, l;
    n.position && ("start" in n.position || "indent" in n.position ? (l = n.position.indent, o = n.position.start) : o = n.position);
    let h = (o ? o.line : 0) || 1, f = (o ? o.column : 0) || 1, d = E(), p;
    for (u--; ++u <= e.length; ) if (p === 10 && (f = (l ? l[s] : 0) || 1), p = e.charCodeAt(u), p === 38) {
      const C = e.charCodeAt(u + 1);
      if (C === 9 || C === 10 || C === 12 || C === 32 || C === 38 || C === 60 || Number.isNaN(C) || r && C === r) {
        a += String.fromCharCode(p), f++;
        continue;
      }
      const x = u + 1;
      let S = x, B = x, v;
      if (C === 35) {
        B = ++S;
        const V = e.charCodeAt(B);
        V === 88 || V === 120 ? (v = "hexadecimal", B = ++S) : v = "decimal";
      } else v = "named";
      let k = "", Y = "", w = "";
      const $ = v === "named" ? vu : v === "decimal" ? qa : cd;
      for (B--; ++B <= e.length; ) {
        const V = e.charCodeAt(B);
        if (!$(V)) break;
        w += String.fromCharCode(V), v === "named" && Wc.includes(w) && (k = w, Y = nn(w));
      }
      let I = e.charCodeAt(B) === 59;
      if (I) {
        B++;
        const V = v === "named" ? nn(w) : false;
        V && (k = w, Y = V);
      }
      let M = 1 + B - x, z = "";
      if (!(!I && n.nonTerminated === false)) if (!w) v !== "named" && m(4, M);
      else if (v === "named") {
        if (I && !Y) m(5, 1);
        else if (k !== w && (B = S + k.length, M = 1 + B - S, I = false), !I) {
          const V = k ? 1 : 3;
          if (n.attribute) {
            const X = e.charCodeAt(B);
            X === 61 ? (m(V, M), Y = "") : vu(X) ? Y = "" : m(V, M);
          } else m(V, M);
        }
        z = Y;
      } else {
        I || m(2, M);
        let V = Number.parseInt(w, v === "hexadecimal" ? 16 : 10);
        if (hd(V)) m(7, M), z = "\uFFFD";
        else if (V in Hu) m(6, M), z = Hu[V];
        else {
          let X = "";
          pd(V) && m(6, M), V > 65535 && (V -= 65536, X += String.fromCharCode(V >>> 10 | 55296), V = 56320 | V & 1023), z = X + String.fromCharCode(V);
        }
      }
      if (z) {
        D(), d = E(), u = B - 1, f += B - x + 1, i.push(z);
        const V = E();
        V.offset++, n.reference && n.reference.call(n.referenceContext || void 0, z, {
          start: d,
          end: V
        }, e.slice(x - 1, B)), d = V;
      } else w = e.slice(x - 1, B), a += w, f += w.length, u = B - 1;
    } else p === 10 && (h++, s++, f = 0), Number.isNaN(p) ? D() : (a += String.fromCharCode(p), f++);
    return i.join("");
    function E() {
      return {
        line: h,
        column: f,
        offset: u + ((o ? o.offset : 0) || 0)
      };
    }
    function m(C, x) {
      let S;
      n.warning && (S = E(), S.column += x, S.offset += x, n.warning.call(n.warningContext || void 0, fd[C], S, C));
    }
    function D() {
      a && (i.push(a), n.text && n.text.call(n.textContext || void 0, a, {
        start: d,
        end: E()
      }), a = "");
    }
  }
  function hd(e) {
    return e >= 55296 && e <= 57343 || e > 1114111;
  }
  function pd(e) {
    return e >= 1 && e <= 8 || e === 11 || e >= 13 && e <= 31 || e >= 127 && e <= 159 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534;
  }
  const Pn = "---", dd = "```yaml [props]", md = `
`, Ed = "\r";
  function $a(e, t) {
    if (!e || !Object.keys(e).length) return "";
    if ((t == null ? void 0 : t.preserveOrder) && e.__order__) {
      const n = new Nt();
      return n.contents = Wr(e.__order__), String(n).trim();
    }
    return Reflect.deleteProperty(e, "__order__"), e = ki(e || {}, {}), [
      (t == null ? void 0 : t.prefix) || "",
      fp(e, t).trim(),
      (t == null ? void 0 : t.suffix) || ""
    ].join(`
`).trim();
  }
  function ja(e, t = "", n) {
    return [
      $a(e, {
        prefix: Pn,
        suffix: Pn,
        ...n
      }),
      "",
      t.trim()
    ].join(`
`).trim() + `
`;
  }
  function gd(e, t = "", n) {
    return [
      $a(e, {
        prefix: dd,
        suffix: "```",
        ...n
      }),
      t.trim()
    ].join(`
`).trim() + `
`;
  }
  function Va(e, t) {
    let n = {};
    if (e.startsWith(Pn)) {
      const r = e.indexOf(md + Pn);
      if (r !== -1) {
        const i = e[r - 1] === Ed, u = e.slice(4, r - (i ? 1 : 0));
        if (u) {
          const s = lp(u, t);
          n = s.toJSON(), (t == null ? void 0 : t.preserveOrder) && (n.__order__ = Kr(s.contents)), e = e.slice(r + 4 + (i ? 1 : 0));
        }
      }
    }
    return {
      content: e,
      data: ki(n || {}, {})
    };
  }
  function Kr(e) {
    if (ws(e)) {
      const t = [];
      for (const n of e.items) t.push([
        n.key.value,
        Kr(n.value)
      ]);
      return {
        type: "map",
        value: t
      };
    }
    return Rs(e) ? {
      type: "seq",
      value: e.items.map((t) => Kr(t))
    } : At(e) ? {
      type: "scalar",
      value: e.value
    } : {
      type: "scalar",
      value: null
    };
  }
  function Wr(e) {
    if (e.type === "map") {
      const t = new ut();
      for (const [n, r] of e.value) t.items.push(new tn(new ae(n), Wr(r)));
      return t;
    }
    if (e.type === "seq") {
      const t = new Tt();
      for (const n of e.value) t.items.push(Wr(n));
      return t;
    }
    return new ae(e.value);
  }
  function Mn(e) {
    const t = e || {}, n = t.now || {};
    let r = t.lineShift || 0, i = n.line || 1, u = n.column || 1;
    return {
      move: o,
      current: s,
      shift: a
    };
    function s() {
      return {
        now: {
          line: i,
          column: u
        },
        lineShift: r
      };
    }
    function a(l) {
      r += l;
    }
    function o(l = "") {
      const h = l.split(/\r?\n|\r/g), f = h[h.length - 1];
      return i += h.length - 1, u = h.length === 1 ? u + f.length : 1 + f.length + r, l;
    }
  }
  function bd(e, t, n = {}) {
    const r = t.indexStack, i = e.children || [], u = Mn(n), s = [];
    let a = -1;
    for (r.push(-1); ++a < i.length; ) {
      const o = i[a];
      r[r.length - 1] = a, s.push(u.move(t.handle(o, e, t, {
        before: "",
        after: "",
        ...u.current()
      })));
    }
    return r.pop(), s.join("");
  }
  function Td(e, t, n = {}) {
    const r = t.indexStack, i = e.children || [], u = Mn(n), s = [];
    let a = -1;
    for (r.push(-1); ++a < i.length; ) {
      const l = i[a];
      r[r.length - 1] = a, s.push(u.move(t.handle(l, e, t, {
        before: `
`,
        after: `
`,
        ...u.current()
      }))), l.type !== "list" && (t.bulletLastUsed = void 0), a < i.length - 1 && s.push(u.move(o(l, i[a + 1])));
    }
    return r.pop(), s.join("");
    function o(l, h) {
      let f = t.join.length;
      for (; f--; ) {
        const d = t.join[f](l, h, e, t);
        if (d === true || d === 1) break;
        if (typeof d == "number") return `
`.repeat(1 + d);
        if (d === false) return `

<!---->

`;
      }
      return `

`;
    }
  }
  function Ad(e, t, n) {
    const r = t.indexStack, i = e.children || [], u = [];
    let s = -1, a = n.before;
    r.push(-1);
    let o = Mn(n);
    for (; ++s < i.length; ) {
      const l = i[s];
      let h;
      if (r[r.length - 1] = s, s + 1 < i.length) {
        let f = t.handle.handlers[i[s + 1].type];
        f && f.peek && (f = f.peek), h = "", f && (h = f(i[s + 1], e, t, {
          before: "",
          after: "",
          ...o.current()
        }).charAt(0));
      } else h = n.after;
      u.length > 0 && (a === "\r" || a === `
`) && l.type === "html" && (u[u.length - 1] = u[u.length - 1].replace(/(\r?\n|\r)$/, " "), a = " ", o = Mn(n), o.move(u.join(""))), u.push(o.move(t.handle(l, e, t, {
        ...o.current(),
        before: a,
        after: h
      }))), a = u[u.length - 1].slice(-1);
    }
    return r.pop(), u.join("");
  }
  function Cd(e) {
    const t = e.options.quote || '"';
    if (t !== '"' && t !== "'") throw new Error("Cannot serialize title with `" + t + "` for `options.quote`, expected `\"`, or `'`");
    return t;
  }
  const Ka = /* @__PURE__ */ new Set([
    "componentContainerSection",
    "containerComponent",
    "leafComponent"
  ]), _d = /* @__PURE__ */ new Set([
    "componentContainerSection",
    "componentContainerDataSection",
    "containerComponent",
    "leafComponent",
    "table",
    "pre",
    "code",
    "textComponent",
    "heading"
  ]);
  function Dd(e) {
    return e.replace(/&#x([0-9A-Fa-f]+);/g, (t, n) => String.fromCodePoint(Number.parseInt(n, 16)));
  }
  const zu = /^[^\t\n\r "'.<=>`}]+$/, yd = 2;
  function Yu(e) {
    if (!e._compiled) {
      const t = (e.atBreak ? "[\\r\\n][\\t ]*" : "") + (e.before ? "(?:" + e.before + ")" : "");
      e._compiled = new RegExp((t ? "(" + t + ")" : "") + (/[|\\{}()[\]^$+*?.-]/.test(e.character) ? "\\" : "") + e.character + (e.after ? "(?:" + e.after + ")" : ""), "g");
    }
    return e._compiled;
  }
  const kd = (e = {}) => {
    const t = (p, E) => {
      if (!Ka.has(p.type)) return;
      const m = (C) => [
        "paragraph"
      ].includes(C) || _d.has(C), D = p.children.filter((C) => !m(C.type));
      D.length !== 0 && (p.children = [
        {
          type: "paragraph",
          children: D
        },
        ...p.children.filter((C) => m(C.type))
      ]);
    }, n = (p) => {
      var _a2;
      const E = Object.entries(p.fmAttributes || {});
      if (E.length === 0) return "";
      const m = E.sort(([D], [C]) => D.localeCompare(C)).reduce((D, [C, x]) => {
        if ((C == null ? void 0 : C.startsWith(":")) && l(x)) {
          try {
            x = JSON.parse(x);
          } catch {
          }
          C = C.slice(1);
        }
        return D[C] = x, D;
      }, {});
      return `
` + (((_a2 = e == null ? void 0 : e.attributes) == null ? void 0 : _a2.yamlCodeBlock) ? gd(m).trim() : ja(m).trim());
    }, r = (p) => {
      e.autoUnwrap && t(p, typeof e.autoUnwrap == "boolean" ? {} : e.autoUnwrap);
    };
    function i(p, E, m) {
      return m.indexStack = m.stack, r(p), `#${p.name}${h(p, m)}
${f(p, m)}`.trim();
    }
    function u(p, E, m) {
      let D;
      m.indexStack = m.stack;
      const C = m.enter(p.type);
      if (p.name === "span") D = `[${f(p, m)}]${h(p, m)}`;
      else if (p.name === "binding") {
        const x = p.attributes || {};
        D = x.defaultValue ? `{{ ${x.value} || '${x.defaultValue}' }}` : `{{ ${x.value} }}`;
      } else D = ":" + (p.name || "") + o(p, m) + h(p, m);
      return C(), D;
    }
    let s = 0;
    function a(p, E, m) {
      var _a2, _b2;
      m.indexStack = m.stack;
      const D = ":".repeat(yd + s);
      s += 1;
      const C = m.enter(p.type);
      m.bulletLastUsed = void 0;
      let x = D + (p.name || "") + o(p, m);
      const S = p.children.filter((w) => w.type !== "componentContainerSection"), B = p.children.filter((w) => w.type === "componentContainerSection");
      p.children = [
        ...S,
        ...B
      ], p.fmAttributes = p.fmAttributes || {};
      const v = h(p, m), k = Object.entries(p.attributes || {});
      ((x + v).length > (((_a2 = e == null ? void 0 : e.attributes) == null ? void 0 : _a2.maxLength) || 80) || Object.keys(p.fmAttributes).length > 0 || k.length > 3 || k.some(([w, $]) => typeof $ == "object") || v.match(/(=['"][{[]|\n)/) || ((_b2 = p.children) == null ? void 0 : _b2.some((w) => w.type === "componentContainerSection"))) && (Object.assign(p.fmAttributes, p.attributes), p.attributes = []), r(p), x += h(p, m), x += n(p);
      let Y;
      return p.type === "containerComponent" && (Y = f(p, m), Y && (x += `
` + Y), x += `
` + D, s > 1 && (x = x.split(`
`).map((w) => w.length > 0 ? "  " + w : w).join(`
`))), s -= 1, C(), x;
    }
    a.peek = function() {
      return ":";
    };
    function o(p, E) {
      let m = p;
      if (p.type === "containerComponent") {
        if (!d(p)) return "";
        m = p.children[0];
      }
      const D = E.enter("label"), C = E.enter(p.type + "Label"), x = Ad(m, E, {
        before: "[",
        after: "]"
      });
      return C(), D(), x ? "[" + x + "]" : "";
    }
    const l = (p) => {
      try {
        return JSON.parse(p), true;
      } catch {
        return false;
      }
    };
    function h(p, E) {
      var _a2, _b2;
      const m = Cd(E), D = p.type === "textComponent" ? [
        m
      ] : [
        m,
        `
`,
        "\r"
      ], C = p.attributes || {}, x = ((_a2 = e.attributes) == null ? void 0 : _a2.preserveOrder) && C.__order__ ? (_b2 = C.__order__) == null ? void 0 : _b2.value : Object.entries(C).sort(([$], [I]) => $.localeCompare(I)), S = [];
      let B, v = "", k = "", Y;
      for (const $ of x) {
        const I = $[0];
        let M = $[1];
        if ($[1] != null) if (M = String($[1]), I === "id") B = zu.test(M) ? "#" + M : w("id", M);
        else if (I === "class" || I === "className") {
          for (M = Array.isArray(x[I]) ? x[I].join(" ") : M, M = M.split(/[\t\n\r ]+/g).filter(Boolean), v = [], k = [], Y = -1; ++Y < M.length; ) (zu.test(M[Y]) ? k : v).push(M[Y]);
          v = v.length ? w("class", v.join(" ")) : "", k = k.length ? "." + k.join(".") : "";
        } else I.startsWith(":") && M === "true" ? S.push(I.slice(1)) : I.startsWith(":") && l(M) ? S.push(`${I}='${M.replace(/([^/])'/g, "$1\\'")}'`) : typeof $[1] == "object" ? S.push(w(I, JSON.stringify(M))) : S.push(w(I, M));
      }
      return v && S.unshift(v), k && S.unshift(k), B && S.unshift(B), S.length ? "{" + S.join(" ") + "}" : "";
      function w($, I) {
        return $ + "=" + m + Gc(I, {
          subset: D
        }) + m;
      }
    }
    function f(p, E) {
      const m = d(p) ? Object.assign({}, p, {
        children: p.children.slice(1)
      }) : p;
      let D = p.type === "textComponent" ? bd(m, E) : Td(m, E);
      return D.includes("&#x") && (D = Dd(D)), D;
    }
    function d(p) {
      return p.children && p.children[0] && p.children[0].data && p.children[0].data.componentLabel;
    }
    return {
      compilePattern: Yu,
      unsafe: [
        {
          character: "\r",
          inConstruct: [
            "leafComponentLabel",
            "containerComponentLabel"
          ]
        },
        {
          character: `
`,
          inConstruct: [
            "leafComponentLabel",
            "containerComponentLabel"
          ]
        },
        {
          before: "[^:]",
          character: ":",
          after: "[A-Za-z]",
          inConstruct: [
            "phrasing"
          ]
        },
        {
          atBreak: true,
          character: ":",
          after: ":"
        }
      ],
      handlers: {
        containerComponent: a,
        textComponent: u,
        componentContainerSection: i,
        image: (p, E, m, D) => He.image(p, E, m, D) + h(p, m),
        link: (p, E, m, D) => {
          const C = m.unsafe.find((B) => B.character === "&"), x = (C == null ? void 0 : C.notInConstruct) || [];
          C && (C.notInConstruct = "destinationRaw");
          const S = He.link(p, E, m, D) + h(p, m);
          return C && (C.notInConstruct = x), S;
        },
        linkReference: (p, E, m, D) => He.linkReference(p, E, m, D) + h(p, m),
        strong: (p, E, m, D) => He.strong(p, E, m, D) + h(p, m),
        inlineCode: (p, E, m) => (m.compilePattern = m.compilePattern || Yu, He.inlineCode(p, E, m) + h(p, m)),
        emphasis: (p, E, m, D) => He.emphasis(p, E, m, D) + h(p, m)
      }
    };
  }, Id = (e = {}) => {
    const t = [
      "textComponent"
    ], n = (O) => {
      var _a2, _b2, _c2, _d2;
      const j = O.children[0];
      j && ((_a2 = j.children) == null ? void 0 : _a2.length) && ((_b2 = j.children[0]) == null ? void 0 : _b2.type) === "code" && ((_c2 = j.children[0]) == null ? void 0 : _c2.lang) === "yaml" && ((_d2 = j.children[0]) == null ? void 0 : _d2.meta) === "[props]" && (O.rawData = j.children[0].value, O.mdc = O.mdc || {}, O.mdc.codeBlockProps = true, j.children.splice(0, 1));
    }, r = (O, j) => {
      if (!Ka.has(O.type)) return;
      const y = O.children.filter((le) => le.type !== "componentContainerSection");
      if (y.length !== 1) return;
      const _ = y[0];
      if (_.type !== "paragraph") return;
      const ie = O.children.indexOf(_);
      O.children.splice(ie, 1, ...(_ == null ? void 0 : _.children) || []);
    }, i = (O) => {
      var _a2;
      ((_a2 = e.attributes) == null ? void 0 : _a2.yamlCodeBlock) && n(O), e.autoUnwrap && r(O, typeof e.autoUnwrap == "boolean" ? {} : e.autoUnwrap);
    }, u = {
      componentContainer: l,
      componentContainerSection: f,
      componentContainerDataSection: d,
      componentContainerAttributes: w,
      componentContainerLabel: k,
      bindingContent: a,
      componentLeaf: D,
      componentLeafAttributes: w,
      componentText: x,
      textSpan: C,
      componentTextAttributes: w
    }, s = {
      bindingContent: o,
      componentContainerSectionTitle: m,
      listUnordered: G,
      listOrdered: G,
      listItem: G,
      componentContainerSection: p,
      componentContainerDataSection: E,
      componentContainer: h,
      componentContainerAttributeClassValue: I,
      componentContainerAttributeIdValue: $,
      componentContainerAttributeName: z,
      componentContainerAttributeValue: M,
      componentContainerAttributes: V,
      componentContainerLabel: Y,
      componentContainerName: B,
      componentContainerAttributeInitializerMarker() {
        const O = this.data.componentAttributes;
        O[O.length - 1][1] = "";
      },
      componentLeaf: X,
      componentLeafAttributeClassValue: I,
      componentLeafAttributeIdValue: $,
      componentLeafAttributeName: z,
      componentLeafAttributeValue: M,
      componentLeafAttributes: V,
      componentLeafName: v,
      componentText: X,
      textSpan: X,
      componentTextAttributeClassValue: I,
      componentTextAttributeIdValue: $,
      componentTextAttributeName: z,
      componentTextAttributeValue: M,
      componentTextAttributes: V,
      componentTextName: B
    };
    function a(O) {
      var _a2;
      const y = /([^|]*)(?:\|\|\s*'(.*)')?/.exec(this.sliceSerialize(O));
      this.enter({
        type: "textComponent",
        name: "binding",
        attributes: {
          value: (_a2 = y == null ? void 0 : y[1]) == null ? void 0 : _a2.trim(),
          defaultValue: y == null ? void 0 : y[2]
        }
      }, O);
    }
    function o(O) {
      this.exit(O);
    }
    function l(O) {
      S.call(this, "containerComponent", O);
    }
    function h(O) {
      const j = this.stack[this.stack.length - 1];
      if (j.children.length > 1) {
        const y = j.children.find((_) => _.rawData);
        j.rawData = y == null ? void 0 : y.rawData;
      }
      i(j), j.children = j.children.flatMap((y) => {
        var _a2, _b2;
        return y.rawData ? [] : y.name === "default" && Object.keys(y.attributes).length === 0 || !y.name ? (((_a2 = y.mdc) == null ? void 0 : _a2.unwrapped) && (j.mdc = j.mdc || {}, j.mdc.unwrapped = (_b2 = y.mdc) == null ? void 0 : _b2.unwrapped), y.children) : (y.data = {
          hName: "component-slot",
          hProperties: {
            ...y.attributes,
            [`v-slot:${y.name}`]: ""
          }
        }, y);
      }), this.exit(O);
    }
    function f(O) {
      S.call(this, "componentContainerSection", O);
    }
    function d(O) {
      S.call(this, "componentContainerDataSection", O);
    }
    function p(O) {
      const j = this.stack[this.stack.length - 1];
      L.call(this, j), i(j), this.exit(O);
    }
    function E(O) {
      let j = this.stack[this.stack.length - 1];
      j = L.call(this, j), j.type === "componentContainerDataSection" && (j.rawData = this.sliceSerialize(O), this.exit(O));
    }
    function m(O) {
      var _a2;
      this.stack[this.stack.length - 1].name = (_a2 = this.sliceSerialize(O)) == null ? void 0 : _a2.trim();
    }
    function D(O) {
      S.call(this, "leafComponent", O);
    }
    function C(O) {
      this.enter({
        type: "textComponent",
        name: "span",
        attributes: {},
        children: []
      }, O);
    }
    function x(O) {
      S.call(this, "textComponent", O);
    }
    function S(O, j) {
      this.enter({
        type: O,
        name: "",
        attributes: {},
        children: []
      }, j);
    }
    function B(O) {
      this.stack[this.stack.length - 1].name = en(this.sliceSerialize(O));
    }
    function v(O) {
      this.stack[this.stack.length - 1].name = this.sliceSerialize(O);
    }
    function k(O) {
      this.enter({
        type: "paragraph",
        data: {
          componentLabel: true
        },
        children: []
      }, O);
    }
    function Y(O) {
      this.exit(O);
    }
    function w() {
      this.data.componentAttributes = [], this.buffer();
    }
    function $(O) {
      this.data.componentAttributes.push([
        "id",
        Ar(this.sliceSerialize(O))
      ]);
    }
    function I(O) {
      this.data.componentAttributes.push([
        "class",
        Ar(this.sliceSerialize(O))
      ]);
    }
    function M(O) {
      const j = this.data.componentAttributes, y = j[j.length - 1];
      y[1] = (typeof y[1] == "string" ? y[1] : "") + Ar(this.sliceSerialize(O));
    }
    function z(O) {
      this.data.componentAttributes.push([
        this.sliceSerialize(O),
        true
      ]);
    }
    function V() {
      var _a2, _b2, _c2;
      const O = this.data.componentAttributes, j = {};
      let y = -1, _;
      for (; ++y < O.length; ) {
        _ = O[y];
        const le = en(_[0]);
        le === "class" && j.class ? j.class += " " + _[1] : j[le] = _[1];
      }
      this.data.componentAttributes = O, this.resume();
      let ie = this.stack[this.stack.length - 1];
      if ((ie == null ? void 0 : ie.type) !== "textComponent" || (ie == null ? void 0 : ie.name) === "span") for (; !((_a2 = ie == null ? void 0 : ie.position) == null ? void 0 : _a2.end) && ((_b2 = ie.children) == null ? void 0 : _b2.length) > 0; ) ie = ie.children[ie.children.length - 1];
      ie.attributes = ((_c2 = e.attributes) == null ? void 0 : _c2.preserveOrder) ? {
        __order__: {
          type: "map",
          value: O
        },
        ...j
      } : j;
    }
    function X(O) {
      this.exit(O);
    }
    function G(O) {
      const [j] = this.tokenStack[this.tokenStack.length - 1];
      j.type === O.type && this.exit(O);
    }
    function L(O) {
      for (; O.type === "listItem" || O.type === "list"; ) {
        const [j] = this.tokenStack[this.tokenStack.length - 1];
        this.exit(j), O = this.stack[this.stack.length - 1];
      }
      return O;
    }
    return {
      canContainEols: t,
      enter: u,
      exit: s
    };
  }, Nd = 2, Sd = 3, qu = 35, xd = 1, R = {
    EOF: null,
    space: 32,
    quotationMark: 34,
    hash: 35,
    apostrophe: 39,
    openingParentheses: 40,
    star: 42,
    dash: 45,
    dot: 46,
    colon: 58,
    LessThan: 60,
    equals: 61,
    greaterThan: 62,
    uppercaseX: 88,
    openingSquareBracket: 91,
    backSlash: 92,
    closingSquareBracket: 93,
    underscore: 95,
    backTick: 96,
    lowercaseX: 120,
    openingCurlyBracket: 123,
    closingCurlyBracket: 125,
    tilde: 126
  };
  function Si(e, t, n, r, i, u, s) {
    let a = 0, o = 0;
    return l;
    function l(m) {
      if (m !== R.openingSquareBracket) throw new Error("expected `[`");
      return e.enter(r), e.enter(i), e.consume(m), e.exit(i), h;
    }
    function h(m) {
      return m === R.closingSquareBracket ? (e.enter(i), e.consume(m), e.exit(i), e.exit(r), t) : (e.enter(u), f(m));
    }
    function f(m) {
      return m === R.EOF || a > 999 ? n(m) : m === R.closingSquareBracket && !o-- ? p(m) : K(m) ? s ? n(m) : (e.enter("lineEnding"), e.consume(m), e.exit("lineEnding"), f) : (e.enter("chunkText", {
        contentType: "text"
      }), d(m));
    }
    function d(m) {
      return m === R.EOF || K(m) || a > 999 ? (e.exit("chunkText"), f(m)) : m === R.openingSquareBracket && ++o > 3 ? n(m) : m === R.closingSquareBracket && !o-- ? (e.exit("chunkText"), p(m)) : (e.consume(m), m === R.backSlash ? E : d);
    }
    function p(m) {
      return e.exit(u), e.enter(i), e.consume(m), e.exit(i), e.exit(r), t;
    }
    function E(m) {
      return m === R.openingSquareBracket || m === R.backSlash || m === R.closingSquareBracket ? (e.consume(m), a++, d) : d(m);
    }
  }
  const Ld = {
    tokenize: Rd,
    partial: true
  }, Fd = {
    tokenize: Pd,
    partial: true
  }, Od = {
    tokenize: Md,
    partial: true
  };
  function wd(e, t, n) {
    const r = this;
    return i;
    function i(o) {
      if (o !== R.openingSquareBracket) throw new Error("expected `[`");
      return r.previous === R.EOF && r._gfmTasklistFirstContentOfListItem ? e.check(Fd, n, u)(o) : r.previous === R.openingSquareBracket ? n(o) : e.check(Od, n, u)(o);
    }
    function u(o) {
      return e.enter("textSpan"), e.attempt(Ld, s, n)(o);
    }
    function s(o) {
      return o === R.openingParentheses || o === R.openingSquareBracket ? n(o) : a(o);
    }
    function a(o) {
      return e.exit("textSpan"), t(o);
    }
  }
  function Rd(e, t, n) {
    return Si(e, t, n, "componentTextLabel", "componentTextLabelMarker", "componentTextLabelString");
  }
  const Bd = {
    tokenize: wd
  };
  function Pd(e, t, n) {
    return r;
    function r(u) {
      return e.enter("formGfmTaskCheckbox"), e.consume(u), i;
    }
    function i(u) {
      return Q(u) || u === R.uppercaseX || u === R.lowercaseX ? (e.consume(u), i) : u === R.closingSquareBracket ? (e.exit("formGfmTaskCheckbox"), t(u)) : n(u);
    }
  }
  function Md(e, t, n) {
    return r;
    function r(u) {
      return e.enter("doubleBracket"), e.consume(u), i;
    }
    function i(u) {
      return u !== R.openingSquareBracket ? n(u) : (e.exit("doubleBracket"), t(u));
    }
  }
  function xi(e, t, n, r, i, u, s, a, o, l, h, f, d, p, E) {
    let m, D, C = false;
    return x;
    function x(y) {
      return e.enter(r), e.enter(i), e.consume(y), e.exit(i), S;
    }
    function S(y) {
      return y === R.hash ? (m = s, B(y)) : y === R.dot ? (m = a, B(y)) : y === R.colon || y === R.underscore || de(y) ? (e.enter(u), e.enter(o), e.consume(y), C = y === R.colon, y === R.colon ? Y : $) : E && Q(y) ? W(e, S, "whitespace")(y) : !E && ne(y) ? Re(e, S)(y) : j(y);
    }
    function B(y) {
      return e.enter(u), e.enter(m), e.enter(m + "Marker"), e.consume(y), e.exit(m + "Marker"), v;
    }
    function v(y) {
      return y === R.EOF || y === R.quotationMark || y === R.hash || y === R.apostrophe || y === R.dot || y === R.LessThan || y === R.equals || y === R.greaterThan || y === R.backTick || y === R.closingCurlyBracket || ne(y) ? n(y) : (e.enter(m + "Value"), e.consume(y), k);
    }
    function k(y) {
      return y === R.EOF || y === R.quotationMark || y === R.apostrophe || y === R.LessThan || y === R.equals || y === R.greaterThan || y === R.backTick ? n(y) : y === R.dot || y === R.closingCurlyBracket || ne(y) ? (e.exit(m + "Value"), e.exit(m), e.exit(u), S(y)) : (e.consume(y), k);
    }
    function Y(y) {
      return y === R.dash || he(y) ? (e.consume(y), Y) : (e.exit(o), E && Q(y) ? W(e, w, "whitespace")(y) : !E && ne(y) ? Re(e, w)(y) : w(y));
    }
    function w(y) {
      return y === R.equals ? (e.enter(l), e.consume(y), e.exit(l), M) : (e.exit(u), n(y));
    }
    function $(y) {
      return y === R.dash || y === R.dot || y === R.colon || y === R.underscore || he(y) ? (e.consume(y), $) : (e.exit(o), E && Q(y) ? W(e, I, "whitespace")(y) : !E && ne(y) ? Re(e, I)(y) : I(y));
    }
    function I(y) {
      return y === R.equals ? (e.enter(l), e.consume(y), e.exit(l), M) : (e.exit(u), S(y));
    }
    function M(y) {
      return y === R.EOF || y === R.LessThan || y === R.equals || y === R.greaterThan || y === R.backTick || y === R.closingCurlyBracket || E && K(y) ? n(y) : y === R.quotationMark || y === R.apostrophe ? (e.enter(h), e.enter(d), e.consume(y), e.exit(d), D = y, V) : E && Q(y) ? W(e, M, "whitespace")(y) : !E && ne(y) ? Re(e, M)(y) : (e.enter(f), e.enter(p), e.consume(y), D = void 0, z);
    }
    function z(y) {
      return y === R.EOF || y === R.quotationMark || y === R.apostrophe || y === R.LessThan || y === R.equals || y === R.greaterThan || y === R.backTick ? n(y) : y === R.closingCurlyBracket || ne(y) ? (e.exit(p), e.exit(f), e.exit(u), S(y)) : (e.consume(y), z);
    }
    function V(y) {
      return y === D ? (e.enter(d), e.consume(y), e.exit(d), e.exit(h), e.exit(u), O) : (e.enter(f), X(y));
    }
    function X(y) {
      return y === D ? (e.exit(f), V(y)) : y === R.EOF ? n(y) : K(y) ? E ? n(y) : Re(e, X)(y) : (e.enter(p), e.consume(y), G);
    }
    function G(y) {
      return C && y === R.backSlash ? (e.exit(p), e.exit(f), e.enter("escapeCharacter"), e.consume(y), e.exit("escapeCharacter"), e.enter(f), e.enter(p), L) : y === D || y === R.EOF || K(y) ? (e.exit(p), X(y)) : (e.consume(y), G);
    }
    function L(y) {
      return e.consume(y), G;
    }
    function O(y) {
      return y === R.closingCurlyBracket || ne(y) ? S(y) : j(y);
    }
    function j(y) {
      return y === R.closingCurlyBracket ? (e.enter(i), e.consume(y), e.exit(i), e.exit(r), t) : n(y);
    }
  }
  const Ud = {
    tokenize: zd,
    partial: true
  }, Hd = [
    "textSpan",
    "attentionSequence",
    "codeText",
    "link",
    "image"
  ];
  function vd(e, t, n) {
    const r = this;
    return i;
    function i(u) {
      if (u !== R.openingCurlyBracket) throw new Error("expected `{`");
      const s = r.events[r.events.length - 1];
      return K(r.previous) || !s || !Hd.includes(s[1].type) ? n(u) : e.attempt(Ud, t, n)(u);
    }
  }
  function zd(e, t, n) {
    return xi(e, t, n, "componentTextAttributes", "componentTextAttributesMarker", "componentTextAttribute", "componentTextAttributeId", "componentTextAttributeClass", "componentTextAttributeName", "componentTextAttributeInitializerMarker", "componentTextAttributeValueLiteral", "componentTextAttributeValue", "componentTextAttributeValueMarker", "componentTextAttributeValueData");
  }
  const Yd = {
    tokenize: vd
  };
  function qd(e, t, n) {
    return r;
    function r(u) {
      return u !== R.closingCurlyBracket ? n(u) : (e.exit("bindingContent"), e.enter("bindingFence"), e.consume(u), i);
    }
    function i(u) {
      return u !== R.closingCurlyBracket ? n(u) : (e.consume(u), e.exit("bindingFence"), t);
    }
  }
  function $d(e, t, n) {
    return r;
    function r(a) {
      if (a !== R.openingCurlyBracket) throw new Error("expected `{`");
      return e.enter("bindingFence"), e.consume(a), i;
    }
    function i(a) {
      return a !== R.openingCurlyBracket ? n(a) : (e.consume(a), e.exit("bindingFence"), e.enter("bindingContent"), u);
    }
    function u(a) {
      return a === R.closingCurlyBracket ? e.attempt({
        tokenize: qd,
        partial: true
      }, s, (o) => (e.consume(o), u))(a) : (e.consume(a), u);
    }
    function s(a) {
      return t(a);
    }
  }
  const jd = {
    tokenize: $d
  };
  function Wa(e, t, n, r) {
    const i = this;
    return u;
    function u(a) {
      return de(a) ? (e.enter(r), e.consume(a), s) : n(a);
    }
    function s(a) {
      return a === R.dash || a === R.underscore || he(a) ? (e.consume(a), s) : (e.exit(r), i.previous === R.underscore ? n(a) : t(a));
    }
  }
  const $u = {
    tokenize: Kd,
    partial: true
  }, ju = {
    tokenize: Wd,
    partial: true
  };
  function Ga(e) {
    var _a2, _b2;
    return e !== R.colon || ((_b2 = (_a2 = this.events[this.events.length - 1]) == null ? void 0 : _a2[1]) == null ? void 0 : _b2.type) === "characterEscape";
  }
  function Vd(e, t, n) {
    const r = this;
    return i;
    function i(l) {
      if (l !== R.colon) throw new Error("expected `:`");
      if (r.previous !== null && !ne(r.previous) && ![
        R.openingSquareBracket,
        R.star,
        R.underscore,
        R.openingParentheses
      ].includes(r.previous)) return n(l);
      if (!Ga.call(r, r.previous)) throw new Error("expected correct previous");
      return e.enter("componentText"), e.enter("componentTextMarker"), e.consume(l), e.exit("componentTextMarker"), Wa.call(r, e, u, n, "componentTextName");
    }
    function u(l) {
      return l === R.colon ? n(l) : l === R.openingSquareBracket ? e.attempt($u, a, a)(l) : l === R.openingCurlyBracket ? e.attempt(ju, s, s)(l) : o(l);
    }
    function s(l) {
      return l === R.openingSquareBracket ? e.attempt($u, a, a)(l) : o(l);
    }
    function a(l) {
      return l === R.openingCurlyBracket ? e.attempt(ju, o, o)(l) : o(l);
    }
    function o(l) {
      return e.exit("componentText"), t(l);
    }
  }
  function Kd(e, t, n) {
    return Si(e, t, n, "componentTextLabel", "componentTextLabelMarker", "componentTextLabelString");
  }
  function Wd(e, t, n) {
    return xi(e, t, n, "componentTextAttributes", "componentTextAttributesMarker", "componentTextAttribute", "componentTextAttributeId", "componentTextAttributeClass", "componentTextAttributeName", "componentTextAttributeInitializerMarker", "componentTextAttributeValueLiteral", "componentTextAttributeValue", "componentTextAttributeValueMarker", "componentTextAttributeValueData");
  }
  const Qa = {
    tokenize: Vd,
    previous: Ga
  };
  function Xa(e) {
    let t = -1, n = 0;
    for (; ++t < e.length; ) n += typeof e[t] == "string" ? e[t].length : 1;
    return n;
  }
  function Gd(e, t) {
    const n = e[e.length - 1];
    return !n || n[1].type !== t ? 0 : Xa(n[2].sliceStream(n[1]));
  }
  function Gr(e) {
    let t = 0, n = e.length - 1, r = e[n];
    for (; n >= 0 && r && r[1].type === "linePrefix" && r[0] === "exit"; ) t += Xa(r[2].sliceStream(r[1])), n -= 1, r = e[n];
    return t;
  }
  const Qd = (e) => {
    const t = {
      isOpen: false,
      enter: (n) => {
        const r = t.isOpen;
        return t.exit(n), n.enter(e), t.isOpen = true, () => {
          t.isOpen = r;
        };
      },
      enterOnce: (n) => {
        const r = t.isOpen;
        return t.isOpen || (n.enter(e), t.isOpen = true), () => {
          t.isOpen = r;
        };
      },
      exit: (n) => {
        const r = t.isOpen;
        return t.isOpen && (n.exit(e), t.isOpen = false), () => {
          t.isOpen = r;
        };
      }
    };
    return t;
  }, Xd = {
    tokenize: Jd,
    partial: true
  };
  function Jd(e, t, n) {
    let r = 0;
    return i;
    function i(s) {
      return e.enter("codeFenced"), u(s);
    }
    function u(s) {
      return s === R.backTick || s === R.tilde ? (r++, e.consume(s), u) : (e.exit("codeFenced"), r >= 3 ? t(s) : n(s));
    }
  }
  function Zd(e, t, n, r, i) {
    let u;
    return e.attempt({
      tokenize: s,
      partial: true
    }, a, r);
    function s(f, d, p) {
      const E = this;
      let m = 0, D = 0;
      return x;
      function C(B) {
        return Q(B) ? (f.consume(B), D += 1, C) : (f.exit("space"), x(B));
      }
      function x(B) {
        return Q(B) ? (f.enter("space"), C(B)) : (D === 0 && (D = Gr(E.events)), f.enter("componentContainerSectionSequence"), S(B));
      }
      function S(B) {
        return B === R.dash || Q(B) ? (f.consume(B), m++, S) : m < Sd || D !== i || !K(B) ? p(B) : (f.exit("componentContainerSectionSequence"), W(f, d, "whitespace")(B));
      }
    }
    function a(f) {
      return e.enter("componentContainerDataSection"), e.attempt({
        tokenize: s,
        partial: true
      }, h, o)(f);
    }
    function o(f) {
      if (f === null) return e.exit("componentContainerDataSection"), e.exit("componentContainer"), t(f);
      const d = e.enter("chunkDocument", {
        contentType: "document",
        previous: u
      });
      return u && (u.next = d), u = d, l(f);
    }
    function l(f) {
      return f === null ? (e.exit("chunkDocument"), e.exit("componentContainerDataSection"), e.exit("componentContainer"), t(f)) : K(f) ? (e.consume(f), e.exit("chunkDocument"), e.attempt({
        tokenize: s,
        partial: true
      }, h, o)) : (e.consume(f), l);
    }
    function h(f) {
      return e.exit("componentContainerDataSection"), W(e, r, "whitespace")(f);
    }
  }
  const em = {
    tokenize: nm,
    partial: true
  }, Cr = {
    tokenize: rm,
    partial: true
  };
  function tm(e, t, n) {
    const r = this, i = Gr(this.events);
    let u = 0, s;
    const a = [];
    let o = true, l = false, h = 0, f = false;
    const d = Qd("componentContainerSection");
    return p;
    function p(L) {
      if (L !== R.colon) throw new Error("expected `:`");
      return e.enter("componentContainer"), e.enter("componentContainerFence"), e.enter("componentContainerSequence"), C(L);
    }
    function E(L, O, j) {
      let y = 0, _ = 0, ie;
      return le;
      function le(oe) {
        return _ = Gr(r.events), ie = d.exit(L), L.enter("componentContainerSectionSequence"), A(oe);
      }
      function A(oe) {
        return oe === qu ? (L.consume(oe), y++, A) : y !== xd || _ !== i || !de(oe) ? (ie(), j(oe)) : (L.exit("componentContainerSectionSequence"), W(L, O, "whitespace")(oe));
      }
    }
    function m(L) {
      return d.enter(e), K(L) ? W(e, I, "whitespace")(L) : (e.enter("componentContainerSectionTitle"), D(L));
    }
    function D(L) {
      return L === R.openingCurlyBracket ? e.check(Cr, (O) => (e.exit("componentContainerSectionTitle"), e.attempt(Cr, W(e, I, "linePrefix", 4), n)(O)), (O) => (e.consume(O), D))(L) : K(L) ? (e.exit("componentContainerSectionTitle"), W(e, I, "linePrefix", 4)(L)) : (e.consume(L), D);
    }
    function C(L) {
      return L === R.colon ? (e.consume(L), u++, C) : u < Nd ? n(L) : (e.exit("componentContainerSequence"), Wa.call(r, e, x, n, "componentContainerName")(L));
    }
    function x(L) {
      return L === R.openingSquareBracket ? e.attempt(em, S, S)(L) : S(L);
    }
    function S(L) {
      return L === R.openingCurlyBracket ? e.attempt(Cr, B, B)(L) : B(L);
    }
    function B(L) {
      return W(e, v, "whitespace")(L);
    }
    function v(L) {
      return e.exit("componentContainerFence"), L === null ? (e.exit("componentContainer"), t(L)) : K(L) ? (e.enter("lineEnding"), e.consume(L), e.exit("lineEnding"), r.interrupt ? t : k) : n(L);
    }
    function k(L) {
      return L === null ? (e.exit("componentContainer"), t(L)) : o && (L === R.dash || Q(L)) ? (o = false, Zd(e, t, n, k, i)(L)) : (e.enter("componentContainerContent"), I(L));
    }
    function Y(L) {
      return L === null ? V(L) : L === R.backTick ? e.check(Xd, (O) => (f = !f, M(O)), M)(L) : f ? M(L) : !a.length && (L === qu || L === R.space) ? e.attempt({
        tokenize: E,
        partial: true
      }, m, M)(L) : L === R.colon ? e.attempt({
        tokenize: X,
        partial: true
      }, V, M)(L) : M(L);
    }
    function w(L) {
      return h ? W(e, Y, "linePrefix", h + 1)(L) : Y(L);
    }
    function $(L) {
      return h ? W(e, Y, "linePrefix", h + 1)(L) : e.check({
        tokenize: G,
        partial: true
      }, w, Y)(L);
    }
    function I(L) {
      if (L === null) return V(L);
      let O = w;
      return l && (O = $), l = K(L), i > 0 ? W(e, O, "linePrefix", i + 1)(L) : O(L);
    }
    function M(L) {
      if (L === null) return V(L);
      d.enterOnce(e);
      const O = e.enter("chunkDocument", {
        contentType: "document",
        previous: s
      });
      return s && (s.next = O), s = O, z(L);
    }
    function z(L) {
      return L === null ? (e.exit("chunkDocument"), V(L)) : K(L) ? (e.consume(L), e.exit("chunkDocument"), I) : (e.consume(L), z);
    }
    function V(L) {
      return d.exit(e), e.exit("componentContainerContent"), e.exit("componentContainer"), t(L);
    }
    function X(L, O, j) {
      let y = 0;
      return W(L, _, "linePrefix", 4);
      function _(A) {
        return L.enter("componentContainerFence"), L.enter("componentContainerSequence"), ie(A);
      }
      function ie(A) {
        return A === R.colon ? (L.consume(A), y++, ie) : a.length ? (y === a[a.length - 1] && a.pop(), j(A)) : y !== u ? j(A) : (L.exit("componentContainerSequence"), W(L, le, "whitespace")(A));
      }
      function le(A) {
        return A === null || K(A) ? (L.exit("componentContainerFence"), O(A)) : (a.push(y), j(A));
      }
    }
    function G(L, O, j) {
      let y = 0;
      function _(A) {
        return A !== R.space ? j(A) : ie(A);
      }
      function ie(A) {
        return L.enter("linePrefix"), A === R.space ? (L.consume(A), y += 1, ie) : le(A);
      }
      return _;
      function le(A) {
        return A === R.colon && y > 0 ? (h = y, O(A)) : K(A) ? (l = false, h = 0, O(A)) : j(A);
      }
    }
  }
  function nm(e, t, n) {
    return Si(e, t, n, "componentContainerLabel", "componentContainerLabelMarker", "componentContainerLabelString", true);
  }
  function rm(e, t, n) {
    return xi(e, t, n, "componentContainerAttributes", "componentContainerAttributesMarker", "componentContainerAttribute", "componentContainerAttributeId", "componentContainerAttributeClass", "componentContainerAttributeName", "componentContainerAttributeInitializerMarker", "componentContainerAttributeValueLiteral", "componentContainerAttributeValue", "componentContainerAttributeValueMarker", "componentContainerAttributeValueData", true);
  }
  const Ja = {
    tokenize: tm,
    concrete: true
  };
  function im(e, t, n) {
    const r = this;
    return W(e, i, "linePrefix");
    function i(u) {
      if (Gd(r.events, "linePrefix") < 4) return n(u);
      switch (u) {
        case R.backTick:
          return qr.tokenize.call(r, e, t, n)(u);
        case R.colon:
          return Ja.tokenize.call(r, e, t, n)(u);
        default:
          return n(u);
      }
    }
  }
  const _r = {
    tokenize: im
  };
  function um(e, t, n) {
    const r = this, i = Qa.tokenize.call(r, e, W(e, s, "linePrefix"), n);
    return W(e, u, "linePrefix");
    function u(a) {
      return a === R.colon ? i(a) : n(a);
    }
    function s(a) {
      return K(a) || a === R.EOF ? t(a) : n(a);
    }
  }
  const sm = {
    tokenize: um
  };
  function am() {
    return {
      text: {
        [R.colon]: Qa,
        [R.openingSquareBracket]: [
          Bd
        ],
        [R.openingCurlyBracket]: [
          jd,
          Yd
        ]
      },
      flow: {
        [R.colon]: [
          Ja,
          sm
        ]
      },
      flowInitial: {
        "-2": _r,
        "-1": _r,
        [R.space]: _r
      }
    };
  }
  let om;
  om = (e) => `---
${e}
---`;
  Za = (function(t = {}) {
    var _a2, _b2, _c2;
    const n = this.data();
    t.autoUnwrap === void 0 && ((_a2 = t.experimental) == null ? void 0 : _a2.autoUnwrap) && (t.autoUnwrap = t.experimental.autoUnwrap ? {
      safeTypes: []
    } : false), t.attributes || (t.attributes = {}), t.attributes.maxLength = t.attributes.maxLength ?? t.maxAttributesLength ?? 80, t.attributes.yamlCodeBlock = t.attributes.yamlCodeBlock ?? t.yamlCodeBlockProps ?? ((_b2 = t.experimental) == null ? void 0 : _b2.componentCodeBlockYamlProps) ?? false, r("micromarkExtensions", am()), r("fromMarkdownExtensions", Id(t)), r("toMarkdownExtensions", kd(t));
    function r(i, u) {
      n[i] || (n[i] = []), n[i].push(u);
    }
    return ((_c2 = t == null ? void 0 : t.components) == null ? void 0 : _c2.length) ? async (i, { data: u }) => {
      const s = [];
      return ge(i, [
        "textComponent",
        "leafComponent",
        "containerComponent"
      ], (a) => {
        Vu(a, t.frontmatter);
        const { instance: o, options: l } = t.components.find((h) => h.name === a.name) || {};
        o && s.push(o(l)(a, u));
      }), await Promise.all(s), i;
    } : (i) => {
      ge(i, [
        "textComponent",
        "leafComponent",
        "containerComponent"
      ], (u) => {
        Vu(u, t.frontmatter);
      });
    };
  });
  function Vu(e, t) {
    const n = e.data || (e.data = {});
    e.fmAttributes = cm(e, t), n.hName = en(e.name), n.hProperties = lm({
      ...e.attributes,
      ...e.fmAttributes
    });
  }
  function cm(e, t) {
    if (e.rawData) {
      const n = e.rawData.replace(/\s-+$/, ""), { data: r } = Va(om(n), t);
      return r;
    }
    return {};
  }
  function lm(e) {
    const t = Object.entries(e).map(([n, r]) => n.startsWith(":") ? [
      n,
      r
    ] : typeof r == "string" ? [
      n,
      r
    ] : [
      `:${n}`,
      JSON.stringify(r)
    ]);
    return Object.fromEntries(t);
  }
  const Ku = async (e, t = {}) => {
    const n = Object.entries(t).filter((r) => r[1] !== false);
    for (const r of n) {
      const i = r[1].instance || await import(r[0]).then(async (m) => {
        await m.__tla;
        return m;
      }).then((u) => u.default || u);
      e.use(i, r[1].options);
    }
  };
  function fm(e) {
    if (typeof e != "string") throw new TypeError("Expected a string");
    return e.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
  }
  hm = function(e, t, n) {
    const i = yt((n || {}).ignore || []), u = pm(t);
    let s = -1;
    for (; ++s < u.length; ) gi(e, "text", a);
    function a(l, h) {
      let f = -1, d;
      for (; ++f < h.length; ) {
        const p = h[f], E = d ? d.children : void 0;
        if (i(p, E ? E.indexOf(p) : void 0, d)) return;
        d = p;
      }
      if (d) return o(l, h);
    }
    function o(l, h) {
      const f = h[h.length - 1], d = u[s][0], p = u[s][1];
      let E = 0;
      const D = f.children.indexOf(l);
      let C = false, x = [];
      d.lastIndex = 0;
      let S = d.exec(l.value);
      for (; S; ) {
        const B = S.index, v = {
          index: S.index,
          input: S.input,
          stack: [
            ...h,
            l
          ]
        };
        let k = p(...S, v);
        if (typeof k == "string" && (k = k.length > 0 ? {
          type: "text",
          value: k
        } : void 0), k === false ? d.lastIndex = B + 1 : (E !== B && x.push({
          type: "text",
          value: l.value.slice(E, B)
        }), Array.isArray(k) ? x.push(...k) : k && x.push(k), E = B + S[0].length, C = true), !d.global) break;
        S = d.exec(l.value);
      }
      return C ? (E < l.value.length && x.push({
        type: "text",
        value: l.value.slice(E)
      }), f.children.splice(D, 1, ...x)) : x = [
        l
      ], D + x.length;
    }
  };
  function pm(e) {
    const t = [];
    if (!Array.isArray(e)) throw new TypeError("Expected find and replace tuple or list of tuples");
    const n = !e[0] || Array.isArray(e[0]) ? e : [
      e
    ];
    let r = -1;
    for (; ++r < n.length; ) {
      const i = n[r];
      t.push([
        dm(i[0]),
        mm(i[1])
      ]);
    }
    return t;
  }
  function dm(e) {
    return typeof e == "string" ? new RegExp(fm(e), "g") : e;
  }
  function mm(e) {
    return typeof e == "function" ? e : function() {
      return e;
    };
  }
  const Dr = "phrasing", yr = [
    "autolink",
    "link",
    "image",
    "label"
  ];
  function Em() {
    return {
      transforms: [
        Dm
      ],
      enter: {
        literalAutolink: bm,
        literalAutolinkEmail: kr,
        literalAutolinkHttp: kr,
        literalAutolinkWww: kr
      },
      exit: {
        literalAutolink: _m,
        literalAutolinkEmail: Cm,
        literalAutolinkHttp: Tm,
        literalAutolinkWww: Am
      }
    };
  }
  function gm() {
    return {
      unsafe: [
        {
          character: "@",
          before: "[+\\-.\\w]",
          after: "[\\-.\\w]",
          inConstruct: Dr,
          notInConstruct: yr
        },
        {
          character: ".",
          before: "[Ww]",
          after: "[\\-.\\w]",
          inConstruct: Dr,
          notInConstruct: yr
        },
        {
          character: ":",
          before: "[ps]",
          after: "\\/",
          inConstruct: Dr,
          notInConstruct: yr
        }
      ]
    };
  }
  function bm(e) {
    this.enter({
      type: "link",
      title: null,
      url: "",
      children: []
    }, e);
  }
  function kr(e) {
    this.config.enter.autolinkProtocol.call(this, e);
  }
  function Tm(e) {
    this.config.exit.autolinkProtocol.call(this, e);
  }
  function Am(e) {
    this.config.exit.data.call(this, e);
    const t = this.stack[this.stack.length - 1];
    t.type, t.url = "http://" + this.sliceSerialize(e);
  }
  function Cm(e) {
    this.config.exit.autolinkEmail.call(this, e);
  }
  function _m(e) {
    this.exit(e);
  }
  function Dm(e) {
    hm(e, [
      [
        /(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,
        ym
      ],
      [
        new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"),
        km
      ]
    ], {
      ignore: [
        "link",
        "linkReference"
      ]
    });
  }
  function ym(e, t, n, r, i) {
    let u = "";
    if (!eo(i) || (/^w/i.test(t) && (n = t + n, t = "", u = "http://"), !Im(n))) return false;
    const s = Nm(n + r);
    if (!s[0]) return false;
    const a = {
      type: "link",
      title: null,
      url: u + t + s[0],
      children: [
        {
          type: "text",
          value: t + s[0]
        }
      ]
    };
    return s[1] ? [
      a,
      {
        type: "text",
        value: s[1]
      }
    ] : a;
  }
  function km(e, t, n, r) {
    return !eo(r, true) || /[-\d_]$/.test(n) ? false : {
      type: "link",
      title: null,
      url: "mailto:" + t + "@" + n,
      children: [
        {
          type: "text",
          value: t + "@" + n
        }
      ]
    };
  }
  function Im(e) {
    const t = e.split(".");
    return !(t.length < 2 || t[t.length - 1] && (/_/.test(t[t.length - 1]) || !/[a-zA-Z\d]/.test(t[t.length - 1])) || t[t.length - 2] && (/_/.test(t[t.length - 2]) || !/[a-zA-Z\d]/.test(t[t.length - 2])));
  }
  function Nm(e) {
    const t = /[!"&'),.:;<>?\]}]+$/.exec(e);
    if (!t) return [
      e,
      void 0
    ];
    e = e.slice(0, t.index);
    let n = t[0], r = n.indexOf(")");
    const i = Ji(e, "(");
    let u = Ji(e, ")");
    for (; r !== -1 && i > u; ) e += n.slice(0, r + 1), n = n.slice(r + 1), r = n.indexOf(")"), u++;
    return [
      e,
      n
    ];
  }
  function eo(e, t) {
    const n = e.input.charCodeAt(e.index - 1);
    return (e.index === 0 || at(n) || qn(n)) && (!t || n !== 47);
  }
  to.peek = Pm;
  function Sm() {
    this.buffer();
  }
  function xm(e) {
    this.enter({
      type: "footnoteReference",
      identifier: "",
      label: ""
    }, e);
  }
  function Lm() {
    this.buffer();
  }
  function Fm(e) {
    this.enter({
      type: "footnoteDefinition",
      identifier: "",
      label: "",
      children: []
    }, e);
  }
  function Om(e) {
    const t = this.resume(), n = this.stack[this.stack.length - 1];
    n.type, n.identifier = Se(this.sliceSerialize(e)).toLowerCase(), n.label = t;
  }
  function wm(e) {
    this.exit(e);
  }
  function Rm(e) {
    const t = this.resume(), n = this.stack[this.stack.length - 1];
    n.type, n.identifier = Se(this.sliceSerialize(e)).toLowerCase(), n.label = t;
  }
  function Bm(e) {
    this.exit(e);
  }
  function Pm() {
    return "[";
  }
  function to(e, t, n, r) {
    const i = n.createTracker(r);
    let u = i.move("[^");
    const s = n.enter("footnoteReference"), a = n.enter("reference");
    return u += i.move(n.safe(n.associationId(e), {
      after: "]",
      before: u
    })), a(), s(), u += i.move("]"), u;
  }
  function Mm() {
    return {
      enter: {
        gfmFootnoteCallString: Sm,
        gfmFootnoteCall: xm,
        gfmFootnoteDefinitionLabelString: Lm,
        gfmFootnoteDefinition: Fm
      },
      exit: {
        gfmFootnoteCallString: Om,
        gfmFootnoteCall: wm,
        gfmFootnoteDefinitionLabelString: Rm,
        gfmFootnoteDefinition: Bm
      }
    };
  }
  function Um(e) {
    let t = false;
    return e && e.firstLineBlank && (t = true), {
      handlers: {
        footnoteDefinition: n,
        footnoteReference: to
      },
      unsafe: [
        {
          character: "[",
          inConstruct: [
            "label",
            "phrasing",
            "reference"
          ]
        }
      ]
    };
    function n(r, i, u, s) {
      const a = u.createTracker(s);
      let o = a.move("[^");
      const l = u.enter("footnoteDefinition"), h = u.enter("label");
      return o += a.move(u.safe(u.associationId(r), {
        before: o,
        after: "]"
      })), h(), o += a.move("]:"), r.children && r.children.length > 0 && (a.shift(4), o += a.move((t ? `
` : " ") + u.indentLines(u.containerFlow(r, a.current()), t ? no : Hm))), l(), o;
    }
  }
  function Hm(e, t, n) {
    return t === 0 ? e : no(e, t, n);
  }
  function no(e, t, n) {
    return (n ? "" : "    ") + e;
  }
  const vm = [
    "autolink",
    "destinationLiteral",
    "destinationRaw",
    "reference",
    "titleQuote",
    "titleApostrophe"
  ];
  ro.peek = jm;
  function zm() {
    return {
      canContainEols: [
        "delete"
      ],
      enter: {
        strikethrough: qm
      },
      exit: {
        strikethrough: $m
      }
    };
  }
  function Ym() {
    return {
      unsafe: [
        {
          character: "~",
          inConstruct: "phrasing",
          notInConstruct: vm
        }
      ],
      handlers: {
        delete: ro
      }
    };
  }
  function qm(e) {
    this.enter({
      type: "delete",
      children: []
    }, e);
  }
  function $m(e) {
    this.exit(e);
  }
  function ro(e, t, n, r) {
    const i = n.createTracker(r), u = n.enter("strikethrough");
    let s = i.move("~~");
    return s += n.containerPhrasing(e, {
      ...i.current(),
      before: s,
      after: "~"
    }), s += i.move("~~"), u(), s;
  }
  function jm() {
    return "~";
  }
  function Vm(e) {
    return e.length;
  }
  function Km(e, t) {
    const n = t || {}, r = (n.align || []).concat(), i = n.stringLength || Vm, u = [], s = [], a = [], o = [];
    let l = 0, h = -1;
    for (; ++h < e.length; ) {
      const m = [], D = [];
      let C = -1;
      for (e[h].length > l && (l = e[h].length); ++C < e[h].length; ) {
        const x = Wm(e[h][C]);
        if (n.alignDelimiters !== false) {
          const S = i(x);
          D[C] = S, (o[C] === void 0 || S > o[C]) && (o[C] = S);
        }
        m.push(x);
      }
      s[h] = m, a[h] = D;
    }
    let f = -1;
    if (typeof r == "object" && "length" in r) for (; ++f < l; ) u[f] = Wu(r[f]);
    else {
      const m = Wu(r);
      for (; ++f < l; ) u[f] = m;
    }
    f = -1;
    const d = [], p = [];
    for (; ++f < l; ) {
      const m = u[f];
      let D = "", C = "";
      m === 99 ? (D = ":", C = ":") : m === 108 ? D = ":" : m === 114 && (C = ":");
      let x = n.alignDelimiters === false ? 1 : Math.max(1, o[f] - D.length - C.length);
      const S = D + "-".repeat(x) + C;
      n.alignDelimiters !== false && (x = D.length + x + C.length, x > o[f] && (o[f] = x), p[f] = x), d[f] = S;
    }
    s.splice(1, 0, d), a.splice(1, 0, p), h = -1;
    const E = [];
    for (; ++h < s.length; ) {
      const m = s[h], D = a[h];
      f = -1;
      const C = [];
      for (; ++f < l; ) {
        const x = m[f] || "";
        let S = "", B = "";
        if (n.alignDelimiters !== false) {
          const v = o[f] - (D[f] || 0), k = u[f];
          k === 114 ? S = " ".repeat(v) : k === 99 ? v % 2 ? (S = " ".repeat(v / 2 + 0.5), B = " ".repeat(v / 2 - 0.5)) : (S = " ".repeat(v / 2), B = S) : B = " ".repeat(v);
        }
        n.delimiterStart !== false && !f && C.push("|"), n.padding !== false && !(n.alignDelimiters === false && x === "") && (n.delimiterStart !== false || f) && C.push(" "), n.alignDelimiters !== false && C.push(S), C.push(x), n.alignDelimiters !== false && C.push(B), n.padding !== false && C.push(" "), (n.delimiterEnd !== false || f !== l - 1) && C.push("|");
      }
      E.push(n.delimiterEnd === false ? C.join("").replace(/ +$/, "") : C.join(""));
    }
    return E.join(`
`);
  }
  function Wm(e) {
    return e == null ? "" : String(e);
  }
  function Wu(e) {
    const t = typeof e == "string" ? e.codePointAt(0) : 0;
    return t === 67 || t === 99 ? 99 : t === 76 || t === 108 ? 108 : t === 82 || t === 114 ? 114 : 0;
  }
  function Gm() {
    return {
      enter: {
        table: Qm,
        tableData: Gu,
        tableHeader: Gu,
        tableRow: Jm
      },
      exit: {
        codeText: Zm,
        table: Xm,
        tableData: Ir,
        tableHeader: Ir,
        tableRow: Ir
      }
    };
  }
  function Qm(e) {
    const t = e._align;
    this.enter({
      type: "table",
      align: t.map(function(n) {
        return n === "none" ? null : n;
      }),
      children: []
    }, e), this.data.inTable = true;
  }
  function Xm(e) {
    this.exit(e), this.data.inTable = void 0;
  }
  function Jm(e) {
    this.enter({
      type: "tableRow",
      children: []
    }, e);
  }
  function Ir(e) {
    this.exit(e);
  }
  function Gu(e) {
    this.enter({
      type: "tableCell",
      children: []
    }, e);
  }
  function Zm(e) {
    let t = this.resume();
    this.data.inTable && (t = t.replace(/\\([\\|])/g, e1));
    const n = this.stack[this.stack.length - 1];
    n.type, n.value = t, this.exit(e);
  }
  function e1(e, t) {
    return t === "|" ? t : e;
  }
  function t1(e) {
    const t = e || {}, n = t.tableCellPadding, r = t.tablePipeAlign, i = t.stringLength, u = n ? " " : "|";
    return {
      unsafe: [
        {
          character: "\r",
          inConstruct: "tableCell"
        },
        {
          character: `
`,
          inConstruct: "tableCell"
        },
        {
          atBreak: true,
          character: "|",
          after: "[	 :-]"
        },
        {
          character: "|",
          inConstruct: "tableCell"
        },
        {
          atBreak: true,
          character: ":",
          after: "-"
        },
        {
          atBreak: true,
          character: "-",
          after: "[:|-]"
        }
      ],
      handlers: {
        inlineCode: d,
        table: s,
        tableCell: o,
        tableRow: a
      }
    };
    function s(p, E, m, D) {
      return l(h(p, m, D), p.align);
    }
    function a(p, E, m, D) {
      const C = f(p, m, D), x = l([
        C
      ]);
      return x.slice(0, x.indexOf(`
`));
    }
    function o(p, E, m, D) {
      const C = m.enter("tableCell"), x = m.enter("phrasing"), S = m.containerPhrasing(p, {
        ...D,
        before: u,
        after: u
      });
      return x(), C(), S;
    }
    function l(p, E) {
      return Km(p, {
        align: E,
        alignDelimiters: r,
        padding: n,
        stringLength: i
      });
    }
    function h(p, E, m) {
      const D = p.children;
      let C = -1;
      const x = [], S = E.enter("table");
      for (; ++C < D.length; ) x[C] = f(D[C], E, m);
      return S(), x;
    }
    function f(p, E, m) {
      const D = p.children;
      let C = -1;
      const x = [], S = E.enter("tableRow");
      for (; ++C < D.length; ) x[C] = o(D[C], p, E, m);
      return S(), x;
    }
    function d(p, E, m) {
      let D = He.inlineCode(p, E, m);
      return m.stack.includes("tableCell") && (D = D.replace(/\|/g, "\\$&")), D;
    }
  }
  function n1() {
    return {
      exit: {
        taskListCheckValueChecked: Qu,
        taskListCheckValueUnchecked: Qu,
        paragraph: i1
      }
    };
  }
  function r1() {
    return {
      unsafe: [
        {
          atBreak: true,
          character: "-",
          after: "[:|-]"
        }
      ],
      handlers: {
        listItem: u1
      }
    };
  }
  function Qu(e) {
    const t = this.stack[this.stack.length - 2];
    t.type, t.checked = e.type === "taskListCheckValueChecked";
  }
  function i1(e) {
    const t = this.stack[this.stack.length - 2];
    if (t && t.type === "listItem" && typeof t.checked == "boolean") {
      const n = this.stack[this.stack.length - 1];
      n.type;
      const r = n.children[0];
      if (r && r.type === "text") {
        const i = t.children;
        let u = -1, s;
        for (; ++u < i.length; ) {
          const a = i[u];
          if (a.type === "paragraph") {
            s = a;
            break;
          }
        }
        s === n && (r.value = r.value.slice(1), r.value.length === 0 ? n.children.shift() : n.position && r.position && typeof r.position.start.offset == "number" && (r.position.start.column++, r.position.start.offset++, n.position.start = Object.assign({}, r.position.start)));
      }
    }
    this.exit(e);
  }
  function u1(e, t, n, r) {
    const i = e.children[0], u = typeof e.checked == "boolean" && i && i.type === "paragraph", s = "[" + (e.checked ? "x" : " ") + "] ", a = n.createTracker(r);
    u && a.move(s);
    let o = He.listItem(e, t, n, {
      ...r,
      ...a.current()
    });
    return u && (o = o.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, l)), o;
    function l(h) {
      return h + s;
    }
  }
  function s1() {
    return [
      Em(),
      Mm(),
      zm(),
      Gm(),
      n1()
    ];
  }
  function a1(e) {
    return {
      extensions: [
        gm(),
        Um(e),
        Ym(),
        t1(e),
        r1()
      ]
    };
  }
  const o1 = {
    tokenize: d1,
    partial: true
  }, io = {
    tokenize: m1,
    partial: true
  }, uo = {
    tokenize: E1,
    partial: true
  }, so = {
    tokenize: g1,
    partial: true
  }, c1 = {
    tokenize: b1,
    partial: true
  }, ao = {
    name: "wwwAutolink",
    tokenize: h1,
    previous: co
  }, oo = {
    name: "protocolAutolink",
    tokenize: p1,
    previous: lo
  }, Ye = {
    name: "emailAutolink",
    tokenize: f1,
    previous: fo
  }, Be = {};
  function l1() {
    return {
      text: Be
    };
  }
  let tt = 48;
  for (; tt < 123; ) Be[tt] = Ye, tt++, tt === 58 ? tt = 65 : tt === 91 && (tt = 97);
  Be[43] = Ye;
  Be[45] = Ye;
  Be[46] = Ye;
  Be[95] = Ye;
  Be[72] = [
    Ye,
    oo
  ];
  Be[104] = [
    Ye,
    oo
  ];
  Be[87] = [
    Ye,
    ao
  ];
  Be[119] = [
    Ye,
    ao
  ];
  function f1(e, t, n) {
    const r = this;
    let i, u;
    return s;
    function s(f) {
      return !Qr(f) || !fo.call(r, r.previous) || Li(r.events) ? n(f) : (e.enter("literalAutolink"), e.enter("literalAutolinkEmail"), a(f));
    }
    function a(f) {
      return Qr(f) ? (e.consume(f), a) : f === 64 ? (e.consume(f), o) : n(f);
    }
    function o(f) {
      return f === 46 ? e.check(c1, h, l)(f) : f === 45 || f === 95 || he(f) ? (u = true, e.consume(f), o) : h(f);
    }
    function l(f) {
      return e.consume(f), i = true, o;
    }
    function h(f) {
      return u && i && de(r.previous) ? (e.exit("literalAutolinkEmail"), e.exit("literalAutolink"), t(f)) : n(f);
    }
  }
  function h1(e, t, n) {
    const r = this;
    return i;
    function i(s) {
      return s !== 87 && s !== 119 || !co.call(r, r.previous) || Li(r.events) ? n(s) : (e.enter("literalAutolink"), e.enter("literalAutolinkWww"), e.check(o1, e.attempt(io, e.attempt(uo, u), n), n)(s));
    }
    function u(s) {
      return e.exit("literalAutolinkWww"), e.exit("literalAutolink"), t(s);
    }
  }
  function p1(e, t, n) {
    const r = this;
    let i = "", u = false;
    return s;
    function s(f) {
      return (f === 72 || f === 104) && lo.call(r, r.previous) && !Li(r.events) ? (e.enter("literalAutolink"), e.enter("literalAutolinkHttp"), i += String.fromCodePoint(f), e.consume(f), a) : n(f);
    }
    function a(f) {
      if (de(f) && i.length < 5) return i += String.fromCodePoint(f), e.consume(f), a;
      if (f === 58) {
        const d = i.toLowerCase();
        if (d === "http" || d === "https") return e.consume(f), o;
      }
      return n(f);
    }
    function o(f) {
      return f === 47 ? (e.consume(f), u ? l : (u = true, o)) : n(f);
    }
    function l(f) {
      return f === null || On(f) || ne(f) || at(f) || qn(f) ? n(f) : e.attempt(io, e.attempt(uo, h), n)(f);
    }
    function h(f) {
      return e.exit("literalAutolinkHttp"), e.exit("literalAutolink"), t(f);
    }
  }
  function d1(e, t, n) {
    let r = 0;
    return i;
    function i(s) {
      return (s === 87 || s === 119) && r < 3 ? (r++, e.consume(s), i) : s === 46 && r === 3 ? (e.consume(s), u) : n(s);
    }
    function u(s) {
      return s === null ? n(s) : t(s);
    }
  }
  function m1(e, t, n) {
    let r, i, u;
    return s;
    function s(l) {
      return l === 46 || l === 95 ? e.check(so, o, a)(l) : l === null || ne(l) || at(l) || l !== 45 && qn(l) ? o(l) : (u = true, e.consume(l), s);
    }
    function a(l) {
      return l === 95 ? r = true : (i = r, r = void 0), e.consume(l), s;
    }
    function o(l) {
      return i || r || !u ? n(l) : t(l);
    }
  }
  function E1(e, t) {
    let n = 0, r = 0;
    return i;
    function i(s) {
      return s === 40 ? (n++, e.consume(s), i) : s === 41 && r < n ? u(s) : s === 33 || s === 34 || s === 38 || s === 39 || s === 41 || s === 42 || s === 44 || s === 46 || s === 58 || s === 59 || s === 60 || s === 63 || s === 93 || s === 95 || s === 126 ? e.check(so, t, u)(s) : s === null || ne(s) || at(s) ? t(s) : (e.consume(s), i);
    }
    function u(s) {
      return s === 41 && r++, e.consume(s), i;
    }
  }
  function g1(e, t, n) {
    return r;
    function r(a) {
      return a === 33 || a === 34 || a === 39 || a === 41 || a === 42 || a === 44 || a === 46 || a === 58 || a === 59 || a === 63 || a === 95 || a === 126 ? (e.consume(a), r) : a === 38 ? (e.consume(a), u) : a === 93 ? (e.consume(a), i) : a === 60 || a === null || ne(a) || at(a) ? t(a) : n(a);
    }
    function i(a) {
      return a === null || a === 40 || a === 91 || ne(a) || at(a) ? t(a) : r(a);
    }
    function u(a) {
      return de(a) ? s(a) : n(a);
    }
    function s(a) {
      return a === 59 ? (e.consume(a), r) : de(a) ? (e.consume(a), s) : n(a);
    }
  }
  function b1(e, t, n) {
    return r;
    function r(u) {
      return e.consume(u), i;
    }
    function i(u) {
      return he(u) ? n(u) : t(u);
    }
  }
  function co(e) {
    return e === null || e === 40 || e === 42 || e === 95 || e === 91 || e === 93 || e === 126 || ne(e);
  }
  function lo(e) {
    return !de(e);
  }
  function fo(e) {
    return !(e === 47 || Qr(e));
  }
  function Qr(e) {
    return e === 43 || e === 45 || e === 46 || e === 95 || he(e);
  }
  function Li(e) {
    let t = e.length, n = false;
    for (; t--; ) {
      const r = e[t][1];
      if ((r.type === "labelLink" || r.type === "labelImage") && !r._balanced) {
        n = true;
        break;
      }
      if (r._gfmAutolinkLiteralWalkedInto) {
        n = false;
        break;
      }
    }
    return e.length > 0 && !n && (e[e.length - 1][1]._gfmAutolinkLiteralWalkedInto = true), n;
  }
  const T1 = {
    tokenize: N1,
    partial: true
  };
  function A1() {
    return {
      document: {
        91: {
          name: "gfmFootnoteDefinition",
          tokenize: y1,
          continuation: {
            tokenize: k1
          },
          exit: I1
        }
      },
      text: {
        91: {
          name: "gfmFootnoteCall",
          tokenize: D1
        },
        93: {
          name: "gfmPotentialFootnoteCall",
          add: "after",
          tokenize: C1,
          resolveTo: _1
        }
      }
    };
  }
  function C1(e, t, n) {
    const r = this;
    let i = r.events.length;
    const u = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let s;
    for (; i--; ) {
      const o = r.events[i][1];
      if (o.type === "labelImage") {
        s = o;
        break;
      }
      if (o.type === "gfmFootnoteCall" || o.type === "labelLink" || o.type === "label" || o.type === "image" || o.type === "link") break;
    }
    return a;
    function a(o) {
      if (!s || !s._balanced) return n(o);
      const l = Se(r.sliceSerialize({
        start: s.end,
        end: r.now()
      }));
      return l.codePointAt(0) !== 94 || !u.includes(l.slice(1)) ? n(o) : (e.enter("gfmFootnoteCallLabelMarker"), e.consume(o), e.exit("gfmFootnoteCallLabelMarker"), t(o));
    }
  }
  function _1(e, t) {
    let n = e.length;
    for (; n--; ) if (e[n][1].type === "labelImage" && e[n][0] === "enter") {
      e[n][1];
      break;
    }
    e[n + 1][1].type = "data", e[n + 3][1].type = "gfmFootnoteCallLabelMarker";
    const r = {
      type: "gfmFootnoteCall",
      start: Object.assign({}, e[n + 3][1].start),
      end: Object.assign({}, e[e.length - 1][1].end)
    }, i = {
      type: "gfmFootnoteCallMarker",
      start: Object.assign({}, e[n + 3][1].end),
      end: Object.assign({}, e[n + 3][1].end)
    };
    i.end.column++, i.end.offset++, i.end._bufferIndex++;
    const u = {
      type: "gfmFootnoteCallString",
      start: Object.assign({}, i.end),
      end: Object.assign({}, e[e.length - 1][1].start)
    }, s = {
      type: "chunkString",
      contentType: "string",
      start: Object.assign({}, u.start),
      end: Object.assign({}, u.end)
    }, a = [
      e[n + 1],
      e[n + 2],
      [
        "enter",
        r,
        t
      ],
      e[n + 3],
      e[n + 4],
      [
        "enter",
        i,
        t
      ],
      [
        "exit",
        i,
        t
      ],
      [
        "enter",
        u,
        t
      ],
      [
        "enter",
        s,
        t
      ],
      [
        "exit",
        s,
        t
      ],
      [
        "exit",
        u,
        t
      ],
      e[e.length - 2],
      e[e.length - 1],
      [
        "exit",
        r,
        t
      ]
    ];
    return e.splice(n, e.length - n + 1, ...a), e;
  }
  function D1(e, t, n) {
    const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let u = 0, s;
    return a;
    function a(f) {
      return e.enter("gfmFootnoteCall"), e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), o;
    }
    function o(f) {
      return f !== 94 ? n(f) : (e.enter("gfmFootnoteCallMarker"), e.consume(f), e.exit("gfmFootnoteCallMarker"), e.enter("gfmFootnoteCallString"), e.enter("chunkString").contentType = "string", l);
    }
    function l(f) {
      if (u > 999 || f === 93 && !s || f === null || f === 91 || ne(f)) return n(f);
      if (f === 93) {
        e.exit("chunkString");
        const d = e.exit("gfmFootnoteCallString");
        return i.includes(Se(r.sliceSerialize(d))) ? (e.enter("gfmFootnoteCallLabelMarker"), e.consume(f), e.exit("gfmFootnoteCallLabelMarker"), e.exit("gfmFootnoteCall"), t) : n(f);
      }
      return ne(f) || (s = true), u++, e.consume(f), f === 92 ? h : l;
    }
    function h(f) {
      return f === 91 || f === 92 || f === 93 ? (e.consume(f), u++, l) : l(f);
    }
  }
  function y1(e, t, n) {
    const r = this, i = r.parser.gfmFootnotes || (r.parser.gfmFootnotes = []);
    let u, s = 0, a;
    return o;
    function o(E) {
      return e.enter("gfmFootnoteDefinition")._container = true, e.enter("gfmFootnoteDefinitionLabel"), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(E), e.exit("gfmFootnoteDefinitionLabelMarker"), l;
    }
    function l(E) {
      return E === 94 ? (e.enter("gfmFootnoteDefinitionMarker"), e.consume(E), e.exit("gfmFootnoteDefinitionMarker"), e.enter("gfmFootnoteDefinitionLabelString"), e.enter("chunkString").contentType = "string", h) : n(E);
    }
    function h(E) {
      if (s > 999 || E === 93 && !a || E === null || E === 91 || ne(E)) return n(E);
      if (E === 93) {
        e.exit("chunkString");
        const m = e.exit("gfmFootnoteDefinitionLabelString");
        return u = Se(r.sliceSerialize(m)), e.enter("gfmFootnoteDefinitionLabelMarker"), e.consume(E), e.exit("gfmFootnoteDefinitionLabelMarker"), e.exit("gfmFootnoteDefinitionLabel"), d;
      }
      return ne(E) || (a = true), s++, e.consume(E), E === 92 ? f : h;
    }
    function f(E) {
      return E === 91 || E === 92 || E === 93 ? (e.consume(E), s++, h) : h(E);
    }
    function d(E) {
      return E === 58 ? (e.enter("definitionMarker"), e.consume(E), e.exit("definitionMarker"), i.includes(u) || i.push(u), W(e, p, "gfmFootnoteDefinitionWhitespace")) : n(E);
    }
    function p(E) {
      return t(E);
    }
  }
  function k1(e, t, n) {
    return e.check(on, t, e.attempt(T1, t, n));
  }
  function I1(e) {
    e.exit("gfmFootnoteDefinition");
  }
  function N1(e, t, n) {
    const r = this;
    return W(e, i, "gfmFootnoteDefinitionIndent", 5);
    function i(u) {
      const s = r.events[r.events.length - 1];
      return s && s[1].type === "gfmFootnoteDefinitionIndent" && s[2].sliceSerialize(s[1], true).length === 4 ? t(u) : n(u);
    }
  }
  function S1(e) {
    let n = (e || {}).singleTilde;
    const r = {
      name: "strikethrough",
      tokenize: u,
      resolveAll: i
    };
    return n == null && (n = true), {
      text: {
        126: r
      },
      insideSpan: {
        null: [
          r
        ]
      },
      attentionMarkers: {
        null: [
          126
        ]
      }
    };
    function i(s, a) {
      let o = -1;
      for (; ++o < s.length; ) if (s[o][0] === "enter" && s[o][1].type === "strikethroughSequenceTemporary" && s[o][1]._close) {
        let l = o;
        for (; l--; ) if (s[l][0] === "exit" && s[l][1].type === "strikethroughSequenceTemporary" && s[l][1]._open && s[o][1].end.offset - s[o][1].start.offset === s[l][1].end.offset - s[l][1].start.offset) {
          s[o][1].type = "strikethroughSequence", s[l][1].type = "strikethroughSequence";
          const h = {
            type: "strikethrough",
            start: Object.assign({}, s[l][1].start),
            end: Object.assign({}, s[o][1].end)
          }, f = {
            type: "strikethroughText",
            start: Object.assign({}, s[l][1].end),
            end: Object.assign({}, s[o][1].start)
          }, d = [
            [
              "enter",
              h,
              a
            ],
            [
              "enter",
              s[l][1],
              a
            ],
            [
              "exit",
              s[l][1],
              a
            ],
            [
              "enter",
              f,
              a
            ]
          ], p = a.parser.constructs.insideSpan.null;
          p && De(d, d.length, 0, $n(p, s.slice(l + 1, o), a)), De(d, d.length, 0, [
            [
              "exit",
              f,
              a
            ],
            [
              "enter",
              s[o][1],
              a
            ],
            [
              "exit",
              s[o][1],
              a
            ],
            [
              "exit",
              h,
              a
            ]
          ]), De(s, l - 1, o - l + 3, d), o = l + d.length - 2;
          break;
        }
      }
      for (o = -1; ++o < s.length; ) s[o][1].type === "strikethroughSequenceTemporary" && (s[o][1].type = "data");
      return s;
    }
    function u(s, a, o) {
      const l = this.previous, h = this.events;
      let f = 0;
      return d;
      function d(E) {
        return l === 126 && h[h.length - 1][1].type !== "characterEscape" ? o(E) : (s.enter("strikethroughSequenceTemporary"), p(E));
      }
      function p(E) {
        const m = Ct(l);
        if (E === 126) return f > 1 ? o(E) : (s.consume(E), f++, p);
        if (f < 2 && !n) return o(E);
        const D = s.exit("strikethroughSequenceTemporary"), C = Ct(E);
        return D._open = !C || C === 2 && !!m, D._close = !m || m === 2 && !!C, a(E);
      }
    }
  }
  class x1 {
    constructor() {
      this.map = [];
    }
    add(t, n, r) {
      L1(this, t, n, r);
    }
    consume(t) {
      if (this.map.sort(function(u, s) {
        return u[0] - s[0];
      }), this.map.length === 0) return;
      let n = this.map.length;
      const r = [];
      for (; n > 0; ) n -= 1, r.push(t.slice(this.map[n][0] + this.map[n][1]), this.map[n][2]), t.length = this.map[n][0];
      r.push(t.slice()), t.length = 0;
      let i = r.pop();
      for (; i; ) {
        for (const u of i) t.push(u);
        i = r.pop();
      }
      this.map.length = 0;
    }
  }
  function L1(e, t, n, r) {
    let i = 0;
    if (!(n === 0 && r.length === 0)) {
      for (; i < e.map.length; ) {
        if (e.map[i][0] === t) {
          e.map[i][1] += n, e.map[i][2].push(...r);
          return;
        }
        i += 1;
      }
      e.map.push([
        t,
        n,
        r
      ]);
    }
  }
  function F1(e, t) {
    let n = false;
    const r = [];
    for (; t < e.length; ) {
      const i = e[t];
      if (n) {
        if (i[0] === "enter") i[1].type === "tableContent" && r.push(e[t + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
        else if (i[1].type === "tableContent") {
          if (e[t - 1][1].type === "tableDelimiterMarker") {
            const u = r.length - 1;
            r[u] = r[u] === "left" ? "center" : "right";
          }
        } else if (i[1].type === "tableDelimiterRow") break;
      } else i[0] === "enter" && i[1].type === "tableDelimiterRow" && (n = true);
      t += 1;
    }
    return r;
  }
  function O1() {
    return {
      flow: {
        null: {
          name: "table",
          tokenize: w1,
          resolveAll: R1
        }
      }
    };
  }
  function w1(e, t, n) {
    const r = this;
    let i = 0, u = 0, s;
    return a;
    function a(I) {
      let M = r.events.length - 1;
      for (; M > -1; ) {
        const X = r.events[M][1].type;
        if (X === "lineEnding" || X === "linePrefix") M--;
        else break;
      }
      const z = M > -1 ? r.events[M][1].type : null, V = z === "tableHead" || z === "tableRow" ? k : o;
      return V === k && r.parser.lazy[r.now().line] ? n(I) : V(I);
    }
    function o(I) {
      return e.enter("tableHead"), e.enter("tableRow"), l(I);
    }
    function l(I) {
      return I === 124 || (s = true, u += 1), h(I);
    }
    function h(I) {
      return I === null ? n(I) : K(I) ? u > 1 ? (u = 0, r.interrupt = true, e.exit("tableRow"), e.enter("lineEnding"), e.consume(I), e.exit("lineEnding"), p) : n(I) : Q(I) ? W(e, h, "whitespace")(I) : (u += 1, s && (s = false, i += 1), I === 124 ? (e.enter("tableCellDivider"), e.consume(I), e.exit("tableCellDivider"), s = true, h) : (e.enter("data"), f(I)));
    }
    function f(I) {
      return I === null || I === 124 || ne(I) ? (e.exit("data"), h(I)) : (e.consume(I), I === 92 ? d : f);
    }
    function d(I) {
      return I === 92 || I === 124 ? (e.consume(I), f) : f(I);
    }
    function p(I) {
      return r.interrupt = false, r.parser.lazy[r.now().line] ? n(I) : (e.enter("tableDelimiterRow"), s = false, Q(I) ? W(e, E, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(I) : E(I));
    }
    function E(I) {
      return I === 45 || I === 58 ? D(I) : I === 124 ? (s = true, e.enter("tableCellDivider"), e.consume(I), e.exit("tableCellDivider"), m) : v(I);
    }
    function m(I) {
      return Q(I) ? W(e, D, "whitespace")(I) : D(I);
    }
    function D(I) {
      return I === 58 ? (u += 1, s = true, e.enter("tableDelimiterMarker"), e.consume(I), e.exit("tableDelimiterMarker"), C) : I === 45 ? (u += 1, C(I)) : I === null || K(I) ? B(I) : v(I);
    }
    function C(I) {
      return I === 45 ? (e.enter("tableDelimiterFiller"), x(I)) : v(I);
    }
    function x(I) {
      return I === 45 ? (e.consume(I), x) : I === 58 ? (s = true, e.exit("tableDelimiterFiller"), e.enter("tableDelimiterMarker"), e.consume(I), e.exit("tableDelimiterMarker"), S) : (e.exit("tableDelimiterFiller"), S(I));
    }
    function S(I) {
      return Q(I) ? W(e, B, "whitespace")(I) : B(I);
    }
    function B(I) {
      return I === 124 ? E(I) : I === null || K(I) ? !s || i !== u ? v(I) : (e.exit("tableDelimiterRow"), e.exit("tableHead"), t(I)) : v(I);
    }
    function v(I) {
      return n(I);
    }
    function k(I) {
      return e.enter("tableRow"), Y(I);
    }
    function Y(I) {
      return I === 124 ? (e.enter("tableCellDivider"), e.consume(I), e.exit("tableCellDivider"), Y) : I === null || K(I) ? (e.exit("tableRow"), t(I)) : Q(I) ? W(e, Y, "whitespace")(I) : (e.enter("data"), w(I));
    }
    function w(I) {
      return I === null || I === 124 || ne(I) ? (e.exit("data"), Y(I)) : (e.consume(I), I === 92 ? $ : w);
    }
    function $(I) {
      return I === 92 || I === 124 ? (e.consume(I), w) : w(I);
    }
  }
  function R1(e, t) {
    let n = -1, r = true, i = 0, u = [
      0,
      0,
      0,
      0
    ], s = [
      0,
      0,
      0,
      0
    ], a = false, o = 0, l, h, f;
    const d = new x1();
    for (; ++n < e.length; ) {
      const p = e[n], E = p[1];
      p[0] === "enter" ? E.type === "tableHead" ? (a = false, o !== 0 && (Xu(d, t, o, l, h), h = void 0, o = 0), l = {
        type: "table",
        start: Object.assign({}, E.start),
        end: Object.assign({}, E.end)
      }, d.add(n, 0, [
        [
          "enter",
          l,
          t
        ]
      ])) : E.type === "tableRow" || E.type === "tableDelimiterRow" ? (r = true, f = void 0, u = [
        0,
        0,
        0,
        0
      ], s = [
        0,
        n + 1,
        0,
        0
      ], a && (a = false, h = {
        type: "tableBody",
        start: Object.assign({}, E.start),
        end: Object.assign({}, E.end)
      }, d.add(n, 0, [
        [
          "enter",
          h,
          t
        ]
      ])), i = E.type === "tableDelimiterRow" ? 2 : h ? 3 : 1) : i && (E.type === "data" || E.type === "tableDelimiterMarker" || E.type === "tableDelimiterFiller") ? (r = false, s[2] === 0 && (u[1] !== 0 && (s[0] = s[1], f = _n(d, t, u, i, void 0, f), u = [
        0,
        0,
        0,
        0
      ]), s[2] = n)) : E.type === "tableCellDivider" && (r ? r = false : (u[1] !== 0 && (s[0] = s[1], f = _n(d, t, u, i, void 0, f)), u = s, s = [
        u[1],
        n,
        0,
        0
      ])) : E.type === "tableHead" ? (a = true, o = n) : E.type === "tableRow" || E.type === "tableDelimiterRow" ? (o = n, u[1] !== 0 ? (s[0] = s[1], f = _n(d, t, u, i, n, f)) : s[1] !== 0 && (f = _n(d, t, s, i, n, f)), i = 0) : i && (E.type === "data" || E.type === "tableDelimiterMarker" || E.type === "tableDelimiterFiller") && (s[3] = n);
    }
    for (o !== 0 && Xu(d, t, o, l, h), d.consume(t.events), n = -1; ++n < t.events.length; ) {
      const p = t.events[n];
      p[0] === "enter" && p[1].type === "table" && (p[1]._align = F1(t.events, n));
    }
    return e;
  }
  function _n(e, t, n, r, i, u) {
    const s = r === 1 ? "tableHeader" : r === 2 ? "tableDelimiter" : "tableData", a = "tableContent";
    n[0] !== 0 && (u.end = Object.assign({}, Et(t.events, n[0])), e.add(n[0], 0, [
      [
        "exit",
        u,
        t
      ]
    ]));
    const o = Et(t.events, n[1]);
    if (u = {
      type: s,
      start: Object.assign({}, o),
      end: Object.assign({}, o)
    }, e.add(n[1], 0, [
      [
        "enter",
        u,
        t
      ]
    ]), n[2] !== 0) {
      const l = Et(t.events, n[2]), h = Et(t.events, n[3]), f = {
        type: a,
        start: Object.assign({}, l),
        end: Object.assign({}, h)
      };
      if (e.add(n[2], 0, [
        [
          "enter",
          f,
          t
        ]
      ]), r !== 2) {
        const d = t.events[n[2]], p = t.events[n[3]];
        if (d[1].end = Object.assign({}, p[1].end), d[1].type = "chunkText", d[1].contentType = "text", n[3] > n[2] + 1) {
          const E = n[2] + 1, m = n[3] - n[2] - 1;
          e.add(E, m, []);
        }
      }
      e.add(n[3] + 1, 0, [
        [
          "exit",
          f,
          t
        ]
      ]);
    }
    return i !== void 0 && (u.end = Object.assign({}, Et(t.events, i)), e.add(i, 0, [
      [
        "exit",
        u,
        t
      ]
    ]), u = void 0), u;
  }
  function Xu(e, t, n, r, i) {
    const u = [], s = Et(t.events, n);
    i && (i.end = Object.assign({}, s), u.push([
      "exit",
      i,
      t
    ])), r.end = Object.assign({}, s), u.push([
      "exit",
      r,
      t
    ]), e.add(n + 1, 0, u);
  }
  function Et(e, t) {
    const n = e[t], r = n[0] === "enter" ? "start" : "end";
    return n[1][r];
  }
  const B1 = {
    name: "tasklistCheck",
    tokenize: M1
  };
  function P1() {
    return {
      text: {
        91: B1
      }
    };
  }
  function M1(e, t, n) {
    const r = this;
    return i;
    function i(o) {
      return r.previous !== null || !r._gfmTasklistFirstContentOfListItem ? n(o) : (e.enter("taskListCheck"), e.enter("taskListCheckMarker"), e.consume(o), e.exit("taskListCheckMarker"), u);
    }
    function u(o) {
      return ne(o) ? (e.enter("taskListCheckValueUnchecked"), e.consume(o), e.exit("taskListCheckValueUnchecked"), s) : o === 88 || o === 120 ? (e.enter("taskListCheckValueChecked"), e.consume(o), e.exit("taskListCheckValueChecked"), s) : n(o);
    }
    function s(o) {
      return o === 93 ? (e.enter("taskListCheckMarker"), e.consume(o), e.exit("taskListCheckMarker"), e.exit("taskListCheck"), a) : n(o);
    }
    function a(o) {
      return K(o) ? t(o) : Q(o) ? e.check({
        tokenize: U1
      }, t, n)(o) : n(o);
    }
  }
  function U1(e, t, n) {
    return W(e, r, "whitespace");
    function r(i) {
      return i === null ? n(i) : t(i);
    }
  }
  function H1(e) {
    return vs([
      l1(),
      A1(),
      S1(e),
      O1(),
      P1()
    ]);
  }
  const v1 = {};
  function ho(e) {
    const t = this, n = e || v1, r = t.data(), i = r.micromarkExtensions || (r.micromarkExtensions = []), u = r.fromMarkdownExtensions || (r.fromMarkdownExtensions = []), s = r.toMarkdownExtensions || (r.toMarkdownExtensions = []);
    i.push(H1(n)), u.push(s1()), s.push(a1(n));
  }
  const Zn = (function(e, t, n, r, i) {
    const u = Ie(t);
    return po(e) ? u.call(i, e, n, r) : false;
  }), Ie = (function(e) {
    if (e == null) return q1;
    if (typeof e == "string") return Y1(e);
    if (typeof e == "object") return z1(e);
    if (typeof e == "function") return Fi(e);
    throw new Error("Expected function, string, or array as `test`");
  });
  function z1(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.length; ) t[n] = Ie(e[n]);
    return Fi(r);
    function r(...i) {
      let u = -1;
      for (; ++u < t.length; ) if (t[u].apply(this, i)) return true;
      return false;
    }
  }
  function Y1(e) {
    return Fi(t);
    function t(n) {
      return n.tagName === e;
    }
  }
  function Fi(e) {
    return t;
    function t(n, r, i) {
      return !!(po(n) && e.call(this, n, typeof r == "number" ? r : void 0, i || void 0));
    }
  }
  function q1(e) {
    return !!(e && typeof e == "object" && "type" in e && e.type === "element" && "tagName" in e && typeof e.tagName == "string");
  }
  function po(e) {
    return e !== null && typeof e == "object" && "type" in e && "tagName" in e;
  }
  const $1 = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/, j1 = /^[a-zA-Z]:\\/;
  function V1(e) {
    if (typeof e != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof e}\``);
    return j1.test(e) ? false : $1.test(e);
  }
  const K1 = [
    "http",
    "https"
  ], W1 = [
    "nofollow"
  ], G1 = {};
  function Q1(e) {
    const t = e || G1, n = t.protocols || K1, r = Ie(t.test);
    return function(i) {
      ge(i, "element", function(u, s, a) {
        if (u.tagName === "a" && typeof u.properties.href == "string" && r(u, s, a)) {
          const o = u.properties.href;
          if (V1(o) ? n.includes(o.slice(0, o.indexOf(":"))) : o.startsWith("//")) {
            const l = Mt(t.content, u), h = l && !Array.isArray(l) ? [
              l
            ] : l, f = Mt(t.rel, u) || W1, d = typeof f == "string" ? Mr(f) : f, p = Mt(t.target, u), E = Mt(t.properties, u);
            if (E && Object.assign(u.properties, xe(E)), d.length > 0 && (u.properties.rel = [
              ...d
            ]), p && (u.properties.target = p), h) {
              const m = Mt(t.contentProperties, u) || {};
              u.children.push({
                type: "element",
                tagName: "span",
                properties: xe(m),
                children: xe(h)
              });
            }
          }
        }
      });
    };
  }
  function Mt(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  const Ju = {
    accept: "input",
    className: null,
    dropzone: null,
    htmlFor: "output",
    headers: [
      "td",
      "th"
    ],
    itemProp: null,
    itemRef: null,
    itemType: null,
    ping: [
      "a",
      "area"
    ],
    rel: [
      "a",
      "area",
      "link"
    ],
    sandbox: "iframe",
    sizes: "link"
  };
  function X1() {
    return function(e) {
      const t = /* @__PURE__ */ new Map(), n = [];
      ge(e, "element", function(u) {
        let s;
        for (s in u.properties) if (Object.hasOwn(u.properties, s)) {
          const a = u.properties[s];
          Object.hasOwn(Ju, s) && Zn(u, Ju[s]) && Array.isArray(a) && r(s, a);
        }
      }), i();
      function r(u, s) {
        let a = -1, o = t.get(u);
        for (o || (o = /* @__PURE__ */ new Map(), t.set(u, o)); ++a < s.length; ) {
          const l = s[a];
          o.set(l, (o.get(l) || 0) + 1);
        }
        n.push([
          u,
          s
        ]);
      }
      function i() {
        const u = /* @__PURE__ */ new Map();
        for (const [a, o] of t) u.set(a, [
          ...o.entries()
        ].sort(function(l, h) {
          return h[1] - l[1] || mo(String(l[0]), String(h[0]), 0);
        }).map(function(l) {
          return l[0];
        }));
        let s = -1;
        for (; ++s < n.length; ) {
          const a = n[s], o = u.get(a[0]);
          o && a[1].sort(function(l, h) {
            return o.indexOf(l) - o.indexOf(h);
          });
        }
      }
    };
  }
  function mo(e, t, n) {
    return (e.charCodeAt(n) || 0) - (t.charCodeAt(n) || 0) || mo(e, t, n + 1);
  }
  function J1() {
    return function(e) {
      const t = /* @__PURE__ */ new Map();
      ge(e, "element", function(i) {
        let u = t.get(i.tagName);
        u || (u = /* @__PURE__ */ new Map(), t.set(i.tagName, u));
        let s;
        for (s in i.properties) Object.hasOwn(i.properties, s) && u.set(s, (u.get(s) || 0) + 1);
      });
      const n = r();
      ge(e, "element", function(i) {
        const u = n.get(i.tagName);
        if (u) {
          const s = [], a = {};
          let o = -1, l;
          for (l in i.properties) Object.hasOwn(i.properties, l) && s.push(l);
          for (s.sort(function(h, f) {
            return u.indexOf(h) - u.indexOf(f);
          }); ++o < s.length; ) a[s[o]] = i.properties[s[o]];
          i.properties = a;
        }
      });
      function r() {
        const i = /* @__PURE__ */ new Map();
        for (const [u, s] of t.entries()) i.set(u, [
          ...s.entries()
        ].sort(function(a, o) {
          return o[1] - a[1] || Eo(String(a[0]), String(o[0]), 0);
        }).map(function(a) {
          return a[0];
        }));
        return i;
      }
    };
  }
  function Eo(e, t, n) {
    return (e.charCodeAt(n) || 0) - (t.charCodeAt(n) || 0) || Eo(e, t, n + 1);
  }
  const Zu = /[#.]/g;
  function Z1(e, t) {
    const n = e || "", r = {};
    let i = 0, u, s;
    for (; i < n.length; ) {
      Zu.lastIndex = i;
      const a = Zu.exec(n), o = n.slice(i, a ? a.index : n.length);
      o && (u ? u === "#" ? r.id = o : Array.isArray(r.className) ? r.className.push(o) : r.className = [
        o
      ] : s = o, i += o.length), a && (u = a[0], i++);
    }
    return {
      type: "element",
      tagName: s || t || "div",
      properties: r,
      children: []
    };
  }
  function go(e, t, n) {
    const r = n ? rE(n) : void 0;
    function i(u, s, ...a) {
      let o;
      if (u == null) {
        o = {
          type: "root",
          children: []
        };
        const l = s;
        a.unshift(l);
      } else {
        o = Z1(u, t);
        const l = o.tagName.toLowerCase(), h = r ? r.get(l) : void 0;
        if (o.tagName = h || l, eE(s)) a.unshift(s);
        else for (const [f, d] of Object.entries(s)) tE(e, o.properties, f, d);
      }
      for (const l of a) Xr(o.children, l);
      return o.type === "element" && o.tagName === "template" && (o.content = {
        type: "root",
        children: o.children
      }, o.children = []), o;
    }
    return i;
  }
  function eE(e) {
    if (e === null || typeof e != "object" || Array.isArray(e)) return true;
    if (typeof e.type != "string") return false;
    const t = e, n = Object.keys(e);
    for (const r of n) {
      const i = t[r];
      if (i && typeof i == "object") {
        if (!Array.isArray(i)) return true;
        const u = i;
        for (const s of u) if (typeof s != "number" && typeof s != "string") return true;
      }
    }
    return !!("children" in e && Array.isArray(e.children));
  }
  function tE(e, t, n, r) {
    const i = ci(e, n);
    let u;
    if (r != null) {
      if (typeof r == "number") {
        if (Number.isNaN(r)) return;
        u = r;
      } else typeof r == "boolean" ? u = r : typeof r == "string" ? i.spaceSeparated ? u = Mr(r) : i.commaSeparated ? u = Zi(r) : i.commaOrSpaceSeparated ? u = Mr(Zi(r).join(" ")) : u = es(i, i.property, r) : Array.isArray(r) ? u = [
        ...r
      ] : u = i.property === "style" ? nE(r) : String(r);
      if (Array.isArray(u)) {
        const s = [];
        for (const a of u) s.push(es(i, i.property, a));
        u = s;
      }
      i.property === "className" && Array.isArray(t.className) && (u = t.className.concat(u)), t[i.property] = u;
    }
  }
  function Xr(e, t) {
    if (t != null) if (typeof t == "number" || typeof t == "string") e.push({
      type: "text",
      value: String(t)
    });
    else if (Array.isArray(t)) for (const n of t) Xr(e, n);
    else if (typeof t == "object" && "type" in t) t.type === "root" ? Xr(e, t.children) : e.push(t);
    else throw new Error("Expected node, nodes, or string, got `" + t + "`");
  }
  function es(e, t, n) {
    if (typeof n == "string") {
      if (e.number && n && !Number.isNaN(Number(n))) return Number(n);
      if ((e.boolean || e.overloadedBoolean) && (n === "" || eu(n) === eu(t))) return true;
    }
    return n;
  }
  function nE(e) {
    const t = [];
    for (const [n, r] of Object.entries(e)) t.push([
      n,
      r
    ].join(": "));
    return t.join("; ");
  }
  function rE(e) {
    const t = /* @__PURE__ */ new Map();
    for (const n of e) t.set(n.toLowerCase(), n);
    return t;
  }
  let iE;
  iE = [
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "solidColor",
    "textArea",
    "textPath"
  ];
  uE = go(zn, "div");
  sE = go(sn, "g", iE);
  function aE(e) {
    const t = String(e), n = [];
    return {
      toOffset: i,
      toPoint: r
    };
    function r(u) {
      if (typeof u == "number" && u > -1 && u <= t.length) {
        let s = 0;
        for (; ; ) {
          let a = n[s];
          if (a === void 0) {
            const o = ts(t, n[s - 1]);
            a = o === -1 ? t.length + 1 : o + 1, n[s] = a;
          }
          if (a > u) return {
            line: s + 1,
            column: u - (s > 0 ? n[s - 1] : 0) + 1,
            offset: u
          };
          s++;
        }
      }
    }
    function i(u) {
      if (u && typeof u.line == "number" && typeof u.column == "number" && !Number.isNaN(u.line) && !Number.isNaN(u.column)) {
        for (; n.length < u.line; ) {
          const a = n[n.length - 1], o = ts(t, a), l = o === -1 ? t.length + 1 : o + 1;
          if (a === l) break;
          n.push(l);
        }
        const s = (u.line > 1 ? n[u.line - 2] : 0) + u.column - 1;
        if (s < n[u.line - 1]) return s;
      }
    }
  }
  function ts(e, t) {
    const n = e.indexOf("\r", t), r = e.indexOf(`
`, t);
    return r === -1 ? n : n === -1 || n + 1 === r ? r : n < r ? n : r;
  }
  let bo, oE;
  rt = {
    html: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
    svg: "http://www.w3.org/2000/svg",
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  bo = {}.hasOwnProperty;
  oE = Object.prototype;
  function cE(e, t) {
    const n = t || {};
    return Oi({
      file: n.file || void 0,
      location: false,
      schema: n.space === "svg" ? sn : zn,
      verbose: n.verbose || false
    }, e);
  }
  function Oi(e, t) {
    let n;
    switch (t.nodeName) {
      case "#comment": {
        const r = t;
        return n = {
          type: "comment",
          value: r.data
        }, Sn(e, r, n), n;
      }
      case "#document":
      case "#document-fragment": {
        const r = t, i = "mode" in r ? r.mode === "quirks" || r.mode === "limited-quirks" : false;
        if (n = {
          type: "root",
          children: To(e, t.childNodes),
          data: {
            quirksMode: i
          }
        }, e.file && e.location) {
          const u = String(e.file), s = aE(u), a = s.toPoint(0), o = s.toPoint(u.length);
          n.position = {
            start: a,
            end: o
          };
        }
        return n;
      }
      case "#documentType": {
        const r = t;
        return n = {
          type: "doctype"
        }, Sn(e, r, n), n;
      }
      case "#text": {
        const r = t;
        return n = {
          type: "text",
          value: r.value
        }, Sn(e, r, n), n;
      }
      default:
        return n = lE(e, t), n;
    }
  }
  function To(e, t) {
    let n = -1;
    const r = [];
    for (; ++n < t.length; ) {
      const i = Oi(e, t[n]);
      r.push(i);
    }
    return r;
  }
  function lE(e, t) {
    const n = e.schema;
    e.schema = t.namespaceURI === rt.svg ? sn : zn;
    let r = -1;
    const i = {};
    for (; ++r < t.attrs.length; ) {
      const a = t.attrs[r], o = (a.prefix ? a.prefix + ":" : "") + a.name;
      bo.call(oE, o) || (i[o] = a.value);
    }
    const s = (e.schema.space === "svg" ? sE : uE)(t.tagName, i, To(e, t.childNodes));
    if (Sn(e, t, s), s.tagName === "template") {
      const a = t, o = a.sourceCodeLocation, l = o && o.startTag && gt(o.startTag), h = o && o.endTag && gt(o.endTag), f = Oi(e, a.content);
      l && h && e.file && (f.position = {
        start: l.end,
        end: h.start
      }), s.content = f;
    }
    return e.schema = n, s;
  }
  function Sn(e, t, n) {
    if ("sourceCodeLocation" in t && t.sourceCodeLocation && e.file) {
      const r = fE(e, n, t.sourceCodeLocation);
      r && (e.location = true, n.position = r);
    }
  }
  function fE(e, t, n) {
    const r = gt(n);
    if (t.type === "element") {
      const i = t.children[t.children.length - 1];
      if (r && !n.endTag && i && i.position && i.position.end && (r.end = Object.assign({}, i.position.end)), e.verbose) {
        const u = {};
        let s;
        if (n.attrs) for (s in n.attrs) bo.call(n.attrs, s) && (u[ci(e.schema, s).property] = gt(n.attrs[s]));
        n.startTag;
        const a = gt(n.startTag), o = n.endTag ? gt(n.endTag) : void 0, l = {
          opening: a
        };
        o && (l.closing = o), l.properties = u, t.data = {
          position: l
        };
      }
    }
    return r;
  }
  function gt(e) {
    const t = ns({
      line: e.startLine,
      column: e.startCol,
      offset: e.startOffset
    }), n = ns({
      line: e.endLine,
      column: e.endCol,
      offset: e.endOffset
    });
    return t || n ? {
      start: t,
      end: n
    } : void 0;
  }
  function ns(e) {
    return e.line && e.column ? e : void 0;
  }
  const hE = {}, pE = {}.hasOwnProperty, Ao = oi("type", {
    handlers: {
      root: mE,
      element: AE,
      text: bE,
      comment: TE,
      doctype: gE
    }
  });
  function dE(e, t) {
    const r = (t || hE).space;
    return Ao(e, r === "svg" ? sn : zn);
  }
  function mE(e, t) {
    const n = {
      nodeName: "#document",
      mode: (e.data || {}).quirksMode ? "quirks" : "no-quirks",
      childNodes: []
    };
    return n.childNodes = wi(e.children, n, t), St(e, n), n;
  }
  function EE(e, t) {
    const n = {
      nodeName: "#document-fragment",
      childNodes: []
    };
    return n.childNodes = wi(e.children, n, t), St(e, n), n;
  }
  function gE(e) {
    const t = {
      nodeName: "#documentType",
      name: "html",
      publicId: "",
      systemId: "",
      parentNode: null
    };
    return St(e, t), t;
  }
  function bE(e) {
    const t = {
      nodeName: "#text",
      value: e.value,
      parentNode: null
    };
    return St(e, t), t;
  }
  function TE(e) {
    const t = {
      nodeName: "#comment",
      data: e.value,
      parentNode: null
    };
    return St(e, t), t;
  }
  function AE(e, t) {
    const n = t;
    let r = n;
    e.type === "element" && e.tagName.toLowerCase() === "svg" && n.space === "html" && (r = sn);
    const i = [];
    let u;
    if (e.properties) {
      for (u in e.properties) if (u !== "children" && pE.call(e.properties, u)) {
        const o = CE(r, u, e.properties[u]);
        o && i.push(o);
      }
    }
    const s = r.space, a = {
      nodeName: e.tagName,
      tagName: e.tagName,
      attrs: i,
      namespaceURI: rt[s],
      childNodes: [],
      parentNode: null
    };
    return a.childNodes = wi(e.children, a, r), St(e, a), e.tagName === "template" && e.content && (a.content = EE(e.content, r)), a;
  }
  function CE(e, t, n) {
    const r = ci(e, t);
    if (n === false || n === null || n === void 0 || typeof n == "number" && Number.isNaN(n) || !n && r.boolean) return;
    Array.isArray(n) && (n = r.commaSeparated ? Qc(n) : Xc(n));
    const i = {
      name: r.attribute,
      value: n === true ? "" : String(n)
    };
    if (r.space && r.space !== "html" && r.space !== "svg") {
      const u = i.name.indexOf(":");
      u < 0 ? i.prefix = "" : (i.name = i.name.slice(u + 1), i.prefix = r.attribute.slice(0, u)), i.namespace = rt[r.space];
    }
    return i;
  }
  function wi(e, t, n) {
    let r = -1;
    const i = [];
    if (e) for (; ++r < e.length; ) {
      const u = Ao(e[r], n);
      u.parentNode = t, i.push(u);
    }
    return i;
  }
  function St(e, t) {
    const n = e.position;
    n && n.start && n.end && (n.start.offset, n.end.offset, t.sourceCodeLocation = {
      startLine: n.start.line,
      startCol: n.start.column,
      startOffset: n.start.offset,
      endLine: n.end.line,
      endCol: n.end.column,
      endOffset: n.end.offset
    });
  }
  const _E = /* @__PURE__ */ new Set([
    65534,
    65535,
    131070,
    131071,
    196606,
    196607,
    262142,
    262143,
    327678,
    327679,
    393214,
    393215,
    458750,
    458751,
    524286,
    524287,
    589822,
    589823,
    655358,
    655359,
    720894,
    720895,
    786430,
    786431,
    851966,
    851967,
    917502,
    917503,
    983038,
    983039,
    1048574,
    1048575,
    1114110,
    1114111
  ]), se = "\uFFFD";
  var g;
  (function(e) {
    e[e.EOF = -1] = "EOF", e[e.NULL = 0] = "NULL", e[e.TABULATION = 9] = "TABULATION", e[e.CARRIAGE_RETURN = 13] = "CARRIAGE_RETURN", e[e.LINE_FEED = 10] = "LINE_FEED", e[e.FORM_FEED = 12] = "FORM_FEED", e[e.SPACE = 32] = "SPACE", e[e.EXCLAMATION_MARK = 33] = "EXCLAMATION_MARK", e[e.QUOTATION_MARK = 34] = "QUOTATION_MARK", e[e.AMPERSAND = 38] = "AMPERSAND", e[e.APOSTROPHE = 39] = "APOSTROPHE", e[e.HYPHEN_MINUS = 45] = "HYPHEN_MINUS", e[e.SOLIDUS = 47] = "SOLIDUS", e[e.DIGIT_0 = 48] = "DIGIT_0", e[e.DIGIT_9 = 57] = "DIGIT_9", e[e.SEMICOLON = 59] = "SEMICOLON", e[e.LESS_THAN_SIGN = 60] = "LESS_THAN_SIGN", e[e.EQUALS_SIGN = 61] = "EQUALS_SIGN", e[e.GREATER_THAN_SIGN = 62] = "GREATER_THAN_SIGN", e[e.QUESTION_MARK = 63] = "QUESTION_MARK", e[e.LATIN_CAPITAL_A = 65] = "LATIN_CAPITAL_A", e[e.LATIN_CAPITAL_Z = 90] = "LATIN_CAPITAL_Z", e[e.RIGHT_SQUARE_BRACKET = 93] = "RIGHT_SQUARE_BRACKET", e[e.GRAVE_ACCENT = 96] = "GRAVE_ACCENT", e[e.LATIN_SMALL_A = 97] = "LATIN_SMALL_A", e[e.LATIN_SMALL_Z = 122] = "LATIN_SMALL_Z";
  })(g || (g = {}));
  const Te = {
    DASH_DASH: "--",
    CDATA_START: "[CDATA[",
    DOCTYPE: "doctype",
    SCRIPT: "script",
    PUBLIC: "public",
    SYSTEM: "system"
  };
  function Co(e) {
    return e >= 55296 && e <= 57343;
  }
  function DE(e) {
    return e >= 56320 && e <= 57343;
  }
  function yE(e, t) {
    return (e - 55296) * 1024 + 9216 + t;
  }
  function _o(e) {
    return e !== 32 && e !== 10 && e !== 13 && e !== 9 && e !== 12 && e >= 1 && e <= 31 || e >= 127 && e <= 159;
  }
  function Do(e) {
    return e >= 64976 && e <= 65007 || _E.has(e);
  }
  var F;
  (function(e) {
    e.controlCharacterInInputStream = "control-character-in-input-stream", e.noncharacterInInputStream = "noncharacter-in-input-stream", e.surrogateInInputStream = "surrogate-in-input-stream", e.nonVoidHtmlElementStartTagWithTrailingSolidus = "non-void-html-element-start-tag-with-trailing-solidus", e.endTagWithAttributes = "end-tag-with-attributes", e.endTagWithTrailingSolidus = "end-tag-with-trailing-solidus", e.unexpectedSolidusInTag = "unexpected-solidus-in-tag", e.unexpectedNullCharacter = "unexpected-null-character", e.unexpectedQuestionMarkInsteadOfTagName = "unexpected-question-mark-instead-of-tag-name", e.invalidFirstCharacterOfTagName = "invalid-first-character-of-tag-name", e.unexpectedEqualsSignBeforeAttributeName = "unexpected-equals-sign-before-attribute-name", e.missingEndTagName = "missing-end-tag-name", e.unexpectedCharacterInAttributeName = "unexpected-character-in-attribute-name", e.unknownNamedCharacterReference = "unknown-named-character-reference", e.missingSemicolonAfterCharacterReference = "missing-semicolon-after-character-reference", e.unexpectedCharacterAfterDoctypeSystemIdentifier = "unexpected-character-after-doctype-system-identifier", e.unexpectedCharacterInUnquotedAttributeValue = "unexpected-character-in-unquoted-attribute-value", e.eofBeforeTagName = "eof-before-tag-name", e.eofInTag = "eof-in-tag", e.missingAttributeValue = "missing-attribute-value", e.missingWhitespaceBetweenAttributes = "missing-whitespace-between-attributes", e.missingWhitespaceAfterDoctypePublicKeyword = "missing-whitespace-after-doctype-public-keyword", e.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers = "missing-whitespace-between-doctype-public-and-system-identifiers", e.missingWhitespaceAfterDoctypeSystemKeyword = "missing-whitespace-after-doctype-system-keyword", e.missingQuoteBeforeDoctypePublicIdentifier = "missing-quote-before-doctype-public-identifier", e.missingQuoteBeforeDoctypeSystemIdentifier = "missing-quote-before-doctype-system-identifier", e.missingDoctypePublicIdentifier = "missing-doctype-public-identifier", e.missingDoctypeSystemIdentifier = "missing-doctype-system-identifier", e.abruptDoctypePublicIdentifier = "abrupt-doctype-public-identifier", e.abruptDoctypeSystemIdentifier = "abrupt-doctype-system-identifier", e.cdataInHtmlContent = "cdata-in-html-content", e.incorrectlyOpenedComment = "incorrectly-opened-comment", e.eofInScriptHtmlCommentLikeText = "eof-in-script-html-comment-like-text", e.eofInDoctype = "eof-in-doctype", e.nestedComment = "nested-comment", e.abruptClosingOfEmptyComment = "abrupt-closing-of-empty-comment", e.eofInComment = "eof-in-comment", e.incorrectlyClosedComment = "incorrectly-closed-comment", e.eofInCdata = "eof-in-cdata", e.absenceOfDigitsInNumericCharacterReference = "absence-of-digits-in-numeric-character-reference", e.nullCharacterReference = "null-character-reference", e.surrogateCharacterReference = "surrogate-character-reference", e.characterReferenceOutsideUnicodeRange = "character-reference-outside-unicode-range", e.controlCharacterReference = "control-character-reference", e.noncharacterCharacterReference = "noncharacter-character-reference", e.missingWhitespaceBeforeDoctypeName = "missing-whitespace-before-doctype-name", e.missingDoctypeName = "missing-doctype-name", e.invalidCharacterSequenceAfterDoctypeName = "invalid-character-sequence-after-doctype-name", e.duplicateAttribute = "duplicate-attribute", e.nonConformingDoctype = "non-conforming-doctype", e.missingDoctype = "missing-doctype", e.misplacedDoctype = "misplaced-doctype", e.endTagWithoutMatchingOpenElement = "end-tag-without-matching-open-element", e.closingOfElementWithOpenChildElements = "closing-of-element-with-open-child-elements", e.disallowedContentInNoscriptInHead = "disallowed-content-in-noscript-in-head", e.openElementsLeftAfterEof = "open-elements-left-after-eof", e.abandonedHeadElementChild = "abandoned-head-element-child", e.misplacedStartTagForHeadElement = "misplaced-start-tag-for-head-element", e.nestedNoscriptInHead = "nested-noscript-in-head", e.eofInElementThatCanContainOnlyText = "eof-in-element-that-can-contain-only-text";
  })(F || (F = {}));
  const kE = 65536;
  class IE {
    constructor(t) {
      this.handler = t, this.html = "", this.pos = -1, this.lastGapPos = -2, this.gapStack = [], this.skipNextNewLine = false, this.lastChunkWritten = false, this.endOfChunkHit = false, this.bufferWaterline = kE, this.isEol = false, this.lineStartPos = 0, this.droppedBufferSize = 0, this.line = 1, this.lastErrOffset = -1;
    }
    get col() {
      return this.pos - this.lineStartPos + +(this.lastGapPos !== this.pos);
    }
    get offset() {
      return this.droppedBufferSize + this.pos;
    }
    getError(t, n) {
      const { line: r, col: i, offset: u } = this, s = i + n, a = u + n;
      return {
        code: t,
        startLine: r,
        endLine: r,
        startCol: s,
        endCol: s,
        startOffset: a,
        endOffset: a
      };
    }
    _err(t) {
      this.handler.onParseError && this.lastErrOffset !== this.offset && (this.lastErrOffset = this.offset, this.handler.onParseError(this.getError(t, 0)));
    }
    _addGap() {
      this.gapStack.push(this.lastGapPos), this.lastGapPos = this.pos;
    }
    _processSurrogate(t) {
      if (this.pos !== this.html.length - 1) {
        const n = this.html.charCodeAt(this.pos + 1);
        if (DE(n)) return this.pos++, this._addGap(), yE(t, n);
      } else if (!this.lastChunkWritten) return this.endOfChunkHit = true, g.EOF;
      return this._err(F.surrogateInInputStream), t;
    }
    willDropParsedChunk() {
      return this.pos > this.bufferWaterline;
    }
    dropParsedChunk() {
      this.willDropParsedChunk() && (this.html = this.html.substring(this.pos), this.lineStartPos -= this.pos, this.droppedBufferSize += this.pos, this.pos = 0, this.lastGapPos = -2, this.gapStack.length = 0);
    }
    write(t, n) {
      this.html.length > 0 ? this.html += t : this.html = t, this.endOfChunkHit = false, this.lastChunkWritten = n;
    }
    insertHtmlAtCurrentPos(t) {
      this.html = this.html.substring(0, this.pos + 1) + t + this.html.substring(this.pos + 1), this.endOfChunkHit = false;
    }
    startsWith(t, n) {
      if (this.pos + t.length > this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, false;
      if (n) return this.html.startsWith(t, this.pos);
      for (let r = 0; r < t.length; r++) if ((this.html.charCodeAt(this.pos + r) | 32) !== t.charCodeAt(r)) return false;
      return true;
    }
    peek(t) {
      const n = this.pos + t;
      if (n >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, g.EOF;
      const r = this.html.charCodeAt(n);
      return r === g.CARRIAGE_RETURN ? g.LINE_FEED : r;
    }
    advance() {
      if (this.pos++, this.isEol && (this.isEol = false, this.line++, this.lineStartPos = this.pos), this.pos >= this.html.length) return this.endOfChunkHit = !this.lastChunkWritten, g.EOF;
      let t = this.html.charCodeAt(this.pos);
      return t === g.CARRIAGE_RETURN ? (this.isEol = true, this.skipNextNewLine = true, g.LINE_FEED) : t === g.LINE_FEED && (this.isEol = true, this.skipNextNewLine) ? (this.line--, this.skipNextNewLine = false, this._addGap(), this.advance()) : (this.skipNextNewLine = false, Co(t) && (t = this._processSurrogate(t)), this.handler.onParseError === null || t > 31 && t < 127 || t === g.LINE_FEED || t === g.CARRIAGE_RETURN || t > 159 && t < 64976 || this._checkForProblematicCharacters(t), t);
    }
    _checkForProblematicCharacters(t) {
      _o(t) ? this._err(F.controlCharacterInInputStream) : Do(t) && this._err(F.noncharacterInInputStream);
    }
    retreat(t) {
      for (this.pos -= t; this.pos < this.lastGapPos; ) this.lastGapPos = this.gapStack.pop(), this.pos--;
      this.isEol = false;
    }
  }
  var te;
  (function(e) {
    e[e.CHARACTER = 0] = "CHARACTER", e[e.NULL_CHARACTER = 1] = "NULL_CHARACTER", e[e.WHITESPACE_CHARACTER = 2] = "WHITESPACE_CHARACTER", e[e.START_TAG = 3] = "START_TAG", e[e.END_TAG = 4] = "END_TAG", e[e.COMMENT = 5] = "COMMENT", e[e.DOCTYPE = 6] = "DOCTYPE", e[e.EOF = 7] = "EOF", e[e.HIBERNATION = 8] = "HIBERNATION";
  })(te || (te = {}));
  function yo(e, t) {
    for (let n = e.attrs.length - 1; n >= 0; n--) if (e.attrs[n].name === t) return e.attrs[n].value;
    return null;
  }
  const NE = new Uint16Array('\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((e) => e.charCodeAt(0))), SE = /* @__PURE__ */ new Map([
    [
      0,
      65533
    ],
    [
      128,
      8364
    ],
    [
      130,
      8218
    ],
    [
      131,
      402
    ],
    [
      132,
      8222
    ],
    [
      133,
      8230
    ],
    [
      134,
      8224
    ],
    [
      135,
      8225
    ],
    [
      136,
      710
    ],
    [
      137,
      8240
    ],
    [
      138,
      352
    ],
    [
      139,
      8249
    ],
    [
      140,
      338
    ],
    [
      142,
      381
    ],
    [
      145,
      8216
    ],
    [
      146,
      8217
    ],
    [
      147,
      8220
    ],
    [
      148,
      8221
    ],
    [
      149,
      8226
    ],
    [
      150,
      8211
    ],
    [
      151,
      8212
    ],
    [
      152,
      732
    ],
    [
      153,
      8482
    ],
    [
      154,
      353
    ],
    [
      155,
      8250
    ],
    [
      156,
      339
    ],
    [
      158,
      382
    ],
    [
      159,
      376
    ]
  ]);
  function xE(e) {
    var t;
    return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = SE.get(e)) !== null && t !== void 0 ? t : e;
  }
  var me;
  (function(e) {
    e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
  })(me || (me = {}));
  const LE = 32;
  var We;
  (function(e) {
    e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
  })(We || (We = {}));
  function Jr(e) {
    return e >= me.ZERO && e <= me.NINE;
  }
  function FE(e) {
    return e >= me.UPPER_A && e <= me.UPPER_F || e >= me.LOWER_A && e <= me.LOWER_F;
  }
  function OE(e) {
    return e >= me.UPPER_A && e <= me.UPPER_Z || e >= me.LOWER_A && e <= me.LOWER_Z || Jr(e);
  }
  function wE(e) {
    return e === me.EQUALS || OE(e);
  }
  var pe;
  (function(e) {
    e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
  })(pe || (pe = {}));
  var ve;
  (function(e) {
    e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
  })(ve || (ve = {}));
  class RE {
    constructor(t, n, r) {
      this.decodeTree = t, this.emitCodePoint = n, this.errors = r, this.state = pe.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = ve.Strict;
    }
    startEntity(t) {
      this.decodeMode = t, this.state = pe.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
    }
    write(t, n) {
      switch (this.state) {
        case pe.EntityStart:
          return t.charCodeAt(n) === me.NUM ? (this.state = pe.NumericStart, this.consumed += 1, this.stateNumericStart(t, n + 1)) : (this.state = pe.NamedEntity, this.stateNamedEntity(t, n));
        case pe.NumericStart:
          return this.stateNumericStart(t, n);
        case pe.NumericDecimal:
          return this.stateNumericDecimal(t, n);
        case pe.NumericHex:
          return this.stateNumericHex(t, n);
        case pe.NamedEntity:
          return this.stateNamedEntity(t, n);
      }
    }
    stateNumericStart(t, n) {
      return n >= t.length ? -1 : (t.charCodeAt(n) | LE) === me.LOWER_X ? (this.state = pe.NumericHex, this.consumed += 1, this.stateNumericHex(t, n + 1)) : (this.state = pe.NumericDecimal, this.stateNumericDecimal(t, n));
    }
    addToNumericResult(t, n, r, i) {
      if (n !== r) {
        const u = r - n;
        this.result = this.result * Math.pow(i, u) + Number.parseInt(t.substr(n, u), i), this.consumed += u;
      }
    }
    stateNumericHex(t, n) {
      const r = n;
      for (; n < t.length; ) {
        const i = t.charCodeAt(n);
        if (Jr(i) || FE(i)) n += 1;
        else return this.addToNumericResult(t, r, n, 16), this.emitNumericEntity(i, 3);
      }
      return this.addToNumericResult(t, r, n, 16), -1;
    }
    stateNumericDecimal(t, n) {
      const r = n;
      for (; n < t.length; ) {
        const i = t.charCodeAt(n);
        if (Jr(i)) n += 1;
        else return this.addToNumericResult(t, r, n, 10), this.emitNumericEntity(i, 2);
      }
      return this.addToNumericResult(t, r, n, 10), -1;
    }
    emitNumericEntity(t, n) {
      var r;
      if (this.consumed <= n) return (r = this.errors) === null || r === void 0 || r.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      if (t === me.SEMI) this.consumed += 1;
      else if (this.decodeMode === ve.Strict) return 0;
      return this.emitCodePoint(xE(this.result), this.consumed), this.errors && (t !== me.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
    }
    stateNamedEntity(t, n) {
      const { decodeTree: r } = this;
      let i = r[this.treeIndex], u = (i & We.VALUE_LENGTH) >> 14;
      for (; n < t.length; n++, this.excess++) {
        const s = t.charCodeAt(n);
        if (this.treeIndex = BE(r, i, this.treeIndex + Math.max(1, u), s), this.treeIndex < 0) return this.result === 0 || this.decodeMode === ve.Attribute && (u === 0 || wE(s)) ? 0 : this.emitNotTerminatedNamedEntity();
        if (i = r[this.treeIndex], u = (i & We.VALUE_LENGTH) >> 14, u !== 0) {
          if (s === me.SEMI) return this.emitNamedEntityData(this.treeIndex, u, this.consumed + this.excess);
          this.decodeMode !== ve.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
        }
      }
      return -1;
    }
    emitNotTerminatedNamedEntity() {
      var t;
      const { result: n, decodeTree: r } = this, i = (r[n] & We.VALUE_LENGTH) >> 14;
      return this.emitNamedEntityData(n, i, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
    }
    emitNamedEntityData(t, n, r) {
      const { decodeTree: i } = this;
      return this.emitCodePoint(n === 1 ? i[t] & ~We.VALUE_LENGTH : i[t + 1], r), n === 3 && this.emitCodePoint(i[t + 2], r), r;
    }
    end() {
      var t;
      switch (this.state) {
        case pe.NamedEntity:
          return this.result !== 0 && (this.decodeMode !== ve.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
        case pe.NumericDecimal:
          return this.emitNumericEntity(0, 2);
        case pe.NumericHex:
          return this.emitNumericEntity(0, 3);
        case pe.NumericStart:
          return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
        case pe.EntityStart:
          return 0;
      }
    }
  }
  function BE(e, t, n, r) {
    const i = (t & We.BRANCH_LENGTH) >> 7, u = t & We.JUMP_TABLE;
    if (i === 0) return u !== 0 && r === u ? n : -1;
    if (u) {
      const o = r - u;
      return o < 0 || o >= i ? -1 : e[n + o] - 1;
    }
    let s = n, a = s + i - 1;
    for (; s <= a; ) {
      const o = s + a >>> 1, l = e[o];
      if (l < r) s = o + 1;
      else if (l > r) a = o - 1;
      else return e[o + i];
    }
    return -1;
  }
  var U;
  (function(e) {
    e.HTML = "http://www.w3.org/1999/xhtml", e.MATHML = "http://www.w3.org/1998/Math/MathML", e.SVG = "http://www.w3.org/2000/svg", e.XLINK = "http://www.w3.org/1999/xlink", e.XML = "http://www.w3.org/XML/1998/namespace", e.XMLNS = "http://www.w3.org/2000/xmlns/";
  })(U || (U = {}));
  var it;
  (function(e) {
    e.TYPE = "type", e.ACTION = "action", e.ENCODING = "encoding", e.PROMPT = "prompt", e.NAME = "name", e.COLOR = "color", e.FACE = "face", e.SIZE = "size";
  })(it || (it = {}));
  var ke;
  (function(e) {
    e.NO_QUIRKS = "no-quirks", e.QUIRKS = "quirks", e.LIMITED_QUIRKS = "limited-quirks";
  })(ke || (ke = {}));
  var N;
  (function(e) {
    e.A = "a", e.ADDRESS = "address", e.ANNOTATION_XML = "annotation-xml", e.APPLET = "applet", e.AREA = "area", e.ARTICLE = "article", e.ASIDE = "aside", e.B = "b", e.BASE = "base", e.BASEFONT = "basefont", e.BGSOUND = "bgsound", e.BIG = "big", e.BLOCKQUOTE = "blockquote", e.BODY = "body", e.BR = "br", e.BUTTON = "button", e.CAPTION = "caption", e.CENTER = "center", e.CODE = "code", e.COL = "col", e.COLGROUP = "colgroup", e.DD = "dd", e.DESC = "desc", e.DETAILS = "details", e.DIALOG = "dialog", e.DIR = "dir", e.DIV = "div", e.DL = "dl", e.DT = "dt", e.EM = "em", e.EMBED = "embed", e.FIELDSET = "fieldset", e.FIGCAPTION = "figcaption", e.FIGURE = "figure", e.FONT = "font", e.FOOTER = "footer", e.FOREIGN_OBJECT = "foreignObject", e.FORM = "form", e.FRAME = "frame", e.FRAMESET = "frameset", e.H1 = "h1", e.H2 = "h2", e.H3 = "h3", e.H4 = "h4", e.H5 = "h5", e.H6 = "h6", e.HEAD = "head", e.HEADER = "header", e.HGROUP = "hgroup", e.HR = "hr", e.HTML = "html", e.I = "i", e.IMG = "img", e.IMAGE = "image", e.INPUT = "input", e.IFRAME = "iframe", e.KEYGEN = "keygen", e.LABEL = "label", e.LI = "li", e.LINK = "link", e.LISTING = "listing", e.MAIN = "main", e.MALIGNMARK = "malignmark", e.MARQUEE = "marquee", e.MATH = "math", e.MENU = "menu", e.META = "meta", e.MGLYPH = "mglyph", e.MI = "mi", e.MO = "mo", e.MN = "mn", e.MS = "ms", e.MTEXT = "mtext", e.NAV = "nav", e.NOBR = "nobr", e.NOFRAMES = "noframes", e.NOEMBED = "noembed", e.NOSCRIPT = "noscript", e.OBJECT = "object", e.OL = "ol", e.OPTGROUP = "optgroup", e.OPTION = "option", e.P = "p", e.PARAM = "param", e.PLAINTEXT = "plaintext", e.PRE = "pre", e.RB = "rb", e.RP = "rp", e.RT = "rt", e.RTC = "rtc", e.RUBY = "ruby", e.S = "s", e.SCRIPT = "script", e.SEARCH = "search", e.SECTION = "section", e.SELECT = "select", e.SOURCE = "source", e.SMALL = "small", e.SPAN = "span", e.STRIKE = "strike", e.STRONG = "strong", e.STYLE = "style", e.SUB = "sub", e.SUMMARY = "summary", e.SUP = "sup", e.TABLE = "table", e.TBODY = "tbody", e.TEMPLATE = "template", e.TEXTAREA = "textarea", e.TFOOT = "tfoot", e.TD = "td", e.TH = "th", e.THEAD = "thead", e.TITLE = "title", e.TR = "tr", e.TRACK = "track", e.TT = "tt", e.U = "u", e.UL = "ul", e.SVG = "svg", e.VAR = "var", e.WBR = "wbr", e.XMP = "xmp";
  })(N || (N = {}));
  var c;
  (function(e) {
    e[e.UNKNOWN = 0] = "UNKNOWN", e[e.A = 1] = "A", e[e.ADDRESS = 2] = "ADDRESS", e[e.ANNOTATION_XML = 3] = "ANNOTATION_XML", e[e.APPLET = 4] = "APPLET", e[e.AREA = 5] = "AREA", e[e.ARTICLE = 6] = "ARTICLE", e[e.ASIDE = 7] = "ASIDE", e[e.B = 8] = "B", e[e.BASE = 9] = "BASE", e[e.BASEFONT = 10] = "BASEFONT", e[e.BGSOUND = 11] = "BGSOUND", e[e.BIG = 12] = "BIG", e[e.BLOCKQUOTE = 13] = "BLOCKQUOTE", e[e.BODY = 14] = "BODY", e[e.BR = 15] = "BR", e[e.BUTTON = 16] = "BUTTON", e[e.CAPTION = 17] = "CAPTION", e[e.CENTER = 18] = "CENTER", e[e.CODE = 19] = "CODE", e[e.COL = 20] = "COL", e[e.COLGROUP = 21] = "COLGROUP", e[e.DD = 22] = "DD", e[e.DESC = 23] = "DESC", e[e.DETAILS = 24] = "DETAILS", e[e.DIALOG = 25] = "DIALOG", e[e.DIR = 26] = "DIR", e[e.DIV = 27] = "DIV", e[e.DL = 28] = "DL", e[e.DT = 29] = "DT", e[e.EM = 30] = "EM", e[e.EMBED = 31] = "EMBED", e[e.FIELDSET = 32] = "FIELDSET", e[e.FIGCAPTION = 33] = "FIGCAPTION", e[e.FIGURE = 34] = "FIGURE", e[e.FONT = 35] = "FONT", e[e.FOOTER = 36] = "FOOTER", e[e.FOREIGN_OBJECT = 37] = "FOREIGN_OBJECT", e[e.FORM = 38] = "FORM", e[e.FRAME = 39] = "FRAME", e[e.FRAMESET = 40] = "FRAMESET", e[e.H1 = 41] = "H1", e[e.H2 = 42] = "H2", e[e.H3 = 43] = "H3", e[e.H4 = 44] = "H4", e[e.H5 = 45] = "H5", e[e.H6 = 46] = "H6", e[e.HEAD = 47] = "HEAD", e[e.HEADER = 48] = "HEADER", e[e.HGROUP = 49] = "HGROUP", e[e.HR = 50] = "HR", e[e.HTML = 51] = "HTML", e[e.I = 52] = "I", e[e.IMG = 53] = "IMG", e[e.IMAGE = 54] = "IMAGE", e[e.INPUT = 55] = "INPUT", e[e.IFRAME = 56] = "IFRAME", e[e.KEYGEN = 57] = "KEYGEN", e[e.LABEL = 58] = "LABEL", e[e.LI = 59] = "LI", e[e.LINK = 60] = "LINK", e[e.LISTING = 61] = "LISTING", e[e.MAIN = 62] = "MAIN", e[e.MALIGNMARK = 63] = "MALIGNMARK", e[e.MARQUEE = 64] = "MARQUEE", e[e.MATH = 65] = "MATH", e[e.MENU = 66] = "MENU", e[e.META = 67] = "META", e[e.MGLYPH = 68] = "MGLYPH", e[e.MI = 69] = "MI", e[e.MO = 70] = "MO", e[e.MN = 71] = "MN", e[e.MS = 72] = "MS", e[e.MTEXT = 73] = "MTEXT", e[e.NAV = 74] = "NAV", e[e.NOBR = 75] = "NOBR", e[e.NOFRAMES = 76] = "NOFRAMES", e[e.NOEMBED = 77] = "NOEMBED", e[e.NOSCRIPT = 78] = "NOSCRIPT", e[e.OBJECT = 79] = "OBJECT", e[e.OL = 80] = "OL", e[e.OPTGROUP = 81] = "OPTGROUP", e[e.OPTION = 82] = "OPTION", e[e.P = 83] = "P", e[e.PARAM = 84] = "PARAM", e[e.PLAINTEXT = 85] = "PLAINTEXT", e[e.PRE = 86] = "PRE", e[e.RB = 87] = "RB", e[e.RP = 88] = "RP", e[e.RT = 89] = "RT", e[e.RTC = 90] = "RTC", e[e.RUBY = 91] = "RUBY", e[e.S = 92] = "S", e[e.SCRIPT = 93] = "SCRIPT", e[e.SEARCH = 94] = "SEARCH", e[e.SECTION = 95] = "SECTION", e[e.SELECT = 96] = "SELECT", e[e.SOURCE = 97] = "SOURCE", e[e.SMALL = 98] = "SMALL", e[e.SPAN = 99] = "SPAN", e[e.STRIKE = 100] = "STRIKE", e[e.STRONG = 101] = "STRONG", e[e.STYLE = 102] = "STYLE", e[e.SUB = 103] = "SUB", e[e.SUMMARY = 104] = "SUMMARY", e[e.SUP = 105] = "SUP", e[e.TABLE = 106] = "TABLE", e[e.TBODY = 107] = "TBODY", e[e.TEMPLATE = 108] = "TEMPLATE", e[e.TEXTAREA = 109] = "TEXTAREA", e[e.TFOOT = 110] = "TFOOT", e[e.TD = 111] = "TD", e[e.TH = 112] = "TH", e[e.THEAD = 113] = "THEAD", e[e.TITLE = 114] = "TITLE", e[e.TR = 115] = "TR", e[e.TRACK = 116] = "TRACK", e[e.TT = 117] = "TT", e[e.U = 118] = "U", e[e.UL = 119] = "UL", e[e.SVG = 120] = "SVG", e[e.VAR = 121] = "VAR", e[e.WBR = 122] = "WBR", e[e.XMP = 123] = "XMP";
  })(c || (c = {}));
  const PE = /* @__PURE__ */ new Map([
    [
      N.A,
      c.A
    ],
    [
      N.ADDRESS,
      c.ADDRESS
    ],
    [
      N.ANNOTATION_XML,
      c.ANNOTATION_XML
    ],
    [
      N.APPLET,
      c.APPLET
    ],
    [
      N.AREA,
      c.AREA
    ],
    [
      N.ARTICLE,
      c.ARTICLE
    ],
    [
      N.ASIDE,
      c.ASIDE
    ],
    [
      N.B,
      c.B
    ],
    [
      N.BASE,
      c.BASE
    ],
    [
      N.BASEFONT,
      c.BASEFONT
    ],
    [
      N.BGSOUND,
      c.BGSOUND
    ],
    [
      N.BIG,
      c.BIG
    ],
    [
      N.BLOCKQUOTE,
      c.BLOCKQUOTE
    ],
    [
      N.BODY,
      c.BODY
    ],
    [
      N.BR,
      c.BR
    ],
    [
      N.BUTTON,
      c.BUTTON
    ],
    [
      N.CAPTION,
      c.CAPTION
    ],
    [
      N.CENTER,
      c.CENTER
    ],
    [
      N.CODE,
      c.CODE
    ],
    [
      N.COL,
      c.COL
    ],
    [
      N.COLGROUP,
      c.COLGROUP
    ],
    [
      N.DD,
      c.DD
    ],
    [
      N.DESC,
      c.DESC
    ],
    [
      N.DETAILS,
      c.DETAILS
    ],
    [
      N.DIALOG,
      c.DIALOG
    ],
    [
      N.DIR,
      c.DIR
    ],
    [
      N.DIV,
      c.DIV
    ],
    [
      N.DL,
      c.DL
    ],
    [
      N.DT,
      c.DT
    ],
    [
      N.EM,
      c.EM
    ],
    [
      N.EMBED,
      c.EMBED
    ],
    [
      N.FIELDSET,
      c.FIELDSET
    ],
    [
      N.FIGCAPTION,
      c.FIGCAPTION
    ],
    [
      N.FIGURE,
      c.FIGURE
    ],
    [
      N.FONT,
      c.FONT
    ],
    [
      N.FOOTER,
      c.FOOTER
    ],
    [
      N.FOREIGN_OBJECT,
      c.FOREIGN_OBJECT
    ],
    [
      N.FORM,
      c.FORM
    ],
    [
      N.FRAME,
      c.FRAME
    ],
    [
      N.FRAMESET,
      c.FRAMESET
    ],
    [
      N.H1,
      c.H1
    ],
    [
      N.H2,
      c.H2
    ],
    [
      N.H3,
      c.H3
    ],
    [
      N.H4,
      c.H4
    ],
    [
      N.H5,
      c.H5
    ],
    [
      N.H6,
      c.H6
    ],
    [
      N.HEAD,
      c.HEAD
    ],
    [
      N.HEADER,
      c.HEADER
    ],
    [
      N.HGROUP,
      c.HGROUP
    ],
    [
      N.HR,
      c.HR
    ],
    [
      N.HTML,
      c.HTML
    ],
    [
      N.I,
      c.I
    ],
    [
      N.IMG,
      c.IMG
    ],
    [
      N.IMAGE,
      c.IMAGE
    ],
    [
      N.INPUT,
      c.INPUT
    ],
    [
      N.IFRAME,
      c.IFRAME
    ],
    [
      N.KEYGEN,
      c.KEYGEN
    ],
    [
      N.LABEL,
      c.LABEL
    ],
    [
      N.LI,
      c.LI
    ],
    [
      N.LINK,
      c.LINK
    ],
    [
      N.LISTING,
      c.LISTING
    ],
    [
      N.MAIN,
      c.MAIN
    ],
    [
      N.MALIGNMARK,
      c.MALIGNMARK
    ],
    [
      N.MARQUEE,
      c.MARQUEE
    ],
    [
      N.MATH,
      c.MATH
    ],
    [
      N.MENU,
      c.MENU
    ],
    [
      N.META,
      c.META
    ],
    [
      N.MGLYPH,
      c.MGLYPH
    ],
    [
      N.MI,
      c.MI
    ],
    [
      N.MO,
      c.MO
    ],
    [
      N.MN,
      c.MN
    ],
    [
      N.MS,
      c.MS
    ],
    [
      N.MTEXT,
      c.MTEXT
    ],
    [
      N.NAV,
      c.NAV
    ],
    [
      N.NOBR,
      c.NOBR
    ],
    [
      N.NOFRAMES,
      c.NOFRAMES
    ],
    [
      N.NOEMBED,
      c.NOEMBED
    ],
    [
      N.NOSCRIPT,
      c.NOSCRIPT
    ],
    [
      N.OBJECT,
      c.OBJECT
    ],
    [
      N.OL,
      c.OL
    ],
    [
      N.OPTGROUP,
      c.OPTGROUP
    ],
    [
      N.OPTION,
      c.OPTION
    ],
    [
      N.P,
      c.P
    ],
    [
      N.PARAM,
      c.PARAM
    ],
    [
      N.PLAINTEXT,
      c.PLAINTEXT
    ],
    [
      N.PRE,
      c.PRE
    ],
    [
      N.RB,
      c.RB
    ],
    [
      N.RP,
      c.RP
    ],
    [
      N.RT,
      c.RT
    ],
    [
      N.RTC,
      c.RTC
    ],
    [
      N.RUBY,
      c.RUBY
    ],
    [
      N.S,
      c.S
    ],
    [
      N.SCRIPT,
      c.SCRIPT
    ],
    [
      N.SEARCH,
      c.SEARCH
    ],
    [
      N.SECTION,
      c.SECTION
    ],
    [
      N.SELECT,
      c.SELECT
    ],
    [
      N.SOURCE,
      c.SOURCE
    ],
    [
      N.SMALL,
      c.SMALL
    ],
    [
      N.SPAN,
      c.SPAN
    ],
    [
      N.STRIKE,
      c.STRIKE
    ],
    [
      N.STRONG,
      c.STRONG
    ],
    [
      N.STYLE,
      c.STYLE
    ],
    [
      N.SUB,
      c.SUB
    ],
    [
      N.SUMMARY,
      c.SUMMARY
    ],
    [
      N.SUP,
      c.SUP
    ],
    [
      N.TABLE,
      c.TABLE
    ],
    [
      N.TBODY,
      c.TBODY
    ],
    [
      N.TEMPLATE,
      c.TEMPLATE
    ],
    [
      N.TEXTAREA,
      c.TEXTAREA
    ],
    [
      N.TFOOT,
      c.TFOOT
    ],
    [
      N.TD,
      c.TD
    ],
    [
      N.TH,
      c.TH
    ],
    [
      N.THEAD,
      c.THEAD
    ],
    [
      N.TITLE,
      c.TITLE
    ],
    [
      N.TR,
      c.TR
    ],
    [
      N.TRACK,
      c.TRACK
    ],
    [
      N.TT,
      c.TT
    ],
    [
      N.U,
      c.U
    ],
    [
      N.UL,
      c.UL
    ],
    [
      N.SVG,
      c.SVG
    ],
    [
      N.VAR,
      c.VAR
    ],
    [
      N.WBR,
      c.WBR
    ],
    [
      N.XMP,
      c.XMP
    ]
  ]);
  function xt(e) {
    var t;
    return (t = PE.get(e)) !== null && t !== void 0 ? t : c.UNKNOWN;
  }
  const H = c, ME = {
    [U.HTML]: /* @__PURE__ */ new Set([
      H.ADDRESS,
      H.APPLET,
      H.AREA,
      H.ARTICLE,
      H.ASIDE,
      H.BASE,
      H.BASEFONT,
      H.BGSOUND,
      H.BLOCKQUOTE,
      H.BODY,
      H.BR,
      H.BUTTON,
      H.CAPTION,
      H.CENTER,
      H.COL,
      H.COLGROUP,
      H.DD,
      H.DETAILS,
      H.DIR,
      H.DIV,
      H.DL,
      H.DT,
      H.EMBED,
      H.FIELDSET,
      H.FIGCAPTION,
      H.FIGURE,
      H.FOOTER,
      H.FORM,
      H.FRAME,
      H.FRAMESET,
      H.H1,
      H.H2,
      H.H3,
      H.H4,
      H.H5,
      H.H6,
      H.HEAD,
      H.HEADER,
      H.HGROUP,
      H.HR,
      H.HTML,
      H.IFRAME,
      H.IMG,
      H.INPUT,
      H.LI,
      H.LINK,
      H.LISTING,
      H.MAIN,
      H.MARQUEE,
      H.MENU,
      H.META,
      H.NAV,
      H.NOEMBED,
      H.NOFRAMES,
      H.NOSCRIPT,
      H.OBJECT,
      H.OL,
      H.P,
      H.PARAM,
      H.PLAINTEXT,
      H.PRE,
      H.SCRIPT,
      H.SECTION,
      H.SELECT,
      H.SOURCE,
      H.STYLE,
      H.SUMMARY,
      H.TABLE,
      H.TBODY,
      H.TD,
      H.TEMPLATE,
      H.TEXTAREA,
      H.TFOOT,
      H.TH,
      H.THEAD,
      H.TITLE,
      H.TR,
      H.TRACK,
      H.UL,
      H.WBR,
      H.XMP
    ]),
    [U.MATHML]: /* @__PURE__ */ new Set([
      H.MI,
      H.MO,
      H.MN,
      H.MS,
      H.MTEXT,
      H.ANNOTATION_XML
    ]),
    [U.SVG]: /* @__PURE__ */ new Set([
      H.TITLE,
      H.FOREIGN_OBJECT,
      H.DESC
    ]),
    [U.XLINK]: /* @__PURE__ */ new Set(),
    [U.XML]: /* @__PURE__ */ new Set(),
    [U.XMLNS]: /* @__PURE__ */ new Set()
  }, Zr = /* @__PURE__ */ new Set([
    H.H1,
    H.H2,
    H.H3,
    H.H4,
    H.H5,
    H.H6
  ]);
  N.STYLE, N.SCRIPT, N.XMP, N.IFRAME, N.NOEMBED, N.NOFRAMES, N.PLAINTEXT;
  var b;
  (function(e) {
    e[e.DATA = 0] = "DATA", e[e.RCDATA = 1] = "RCDATA", e[e.RAWTEXT = 2] = "RAWTEXT", e[e.SCRIPT_DATA = 3] = "SCRIPT_DATA", e[e.PLAINTEXT = 4] = "PLAINTEXT", e[e.TAG_OPEN = 5] = "TAG_OPEN", e[e.END_TAG_OPEN = 6] = "END_TAG_OPEN", e[e.TAG_NAME = 7] = "TAG_NAME", e[e.RCDATA_LESS_THAN_SIGN = 8] = "RCDATA_LESS_THAN_SIGN", e[e.RCDATA_END_TAG_OPEN = 9] = "RCDATA_END_TAG_OPEN", e[e.RCDATA_END_TAG_NAME = 10] = "RCDATA_END_TAG_NAME", e[e.RAWTEXT_LESS_THAN_SIGN = 11] = "RAWTEXT_LESS_THAN_SIGN", e[e.RAWTEXT_END_TAG_OPEN = 12] = "RAWTEXT_END_TAG_OPEN", e[e.RAWTEXT_END_TAG_NAME = 13] = "RAWTEXT_END_TAG_NAME", e[e.SCRIPT_DATA_LESS_THAN_SIGN = 14] = "SCRIPT_DATA_LESS_THAN_SIGN", e[e.SCRIPT_DATA_END_TAG_OPEN = 15] = "SCRIPT_DATA_END_TAG_OPEN", e[e.SCRIPT_DATA_END_TAG_NAME = 16] = "SCRIPT_DATA_END_TAG_NAME", e[e.SCRIPT_DATA_ESCAPE_START = 17] = "SCRIPT_DATA_ESCAPE_START", e[e.SCRIPT_DATA_ESCAPE_START_DASH = 18] = "SCRIPT_DATA_ESCAPE_START_DASH", e[e.SCRIPT_DATA_ESCAPED = 19] = "SCRIPT_DATA_ESCAPED", e[e.SCRIPT_DATA_ESCAPED_DASH = 20] = "SCRIPT_DATA_ESCAPED_DASH", e[e.SCRIPT_DATA_ESCAPED_DASH_DASH = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_OPEN = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN", e[e.SCRIPT_DATA_ESCAPED_END_TAG_NAME = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_START = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START", e[e.SCRIPT_DATA_DOUBLE_ESCAPED = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH", e[e.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN", e[e.SCRIPT_DATA_DOUBLE_ESCAPE_END = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END", e[e.BEFORE_ATTRIBUTE_NAME = 31] = "BEFORE_ATTRIBUTE_NAME", e[e.ATTRIBUTE_NAME = 32] = "ATTRIBUTE_NAME", e[e.AFTER_ATTRIBUTE_NAME = 33] = "AFTER_ATTRIBUTE_NAME", e[e.BEFORE_ATTRIBUTE_VALUE = 34] = "BEFORE_ATTRIBUTE_VALUE", e[e.ATTRIBUTE_VALUE_DOUBLE_QUOTED = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED", e[e.ATTRIBUTE_VALUE_SINGLE_QUOTED = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED", e[e.ATTRIBUTE_VALUE_UNQUOTED = 37] = "ATTRIBUTE_VALUE_UNQUOTED", e[e.AFTER_ATTRIBUTE_VALUE_QUOTED = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED", e[e.SELF_CLOSING_START_TAG = 39] = "SELF_CLOSING_START_TAG", e[e.BOGUS_COMMENT = 40] = "BOGUS_COMMENT", e[e.MARKUP_DECLARATION_OPEN = 41] = "MARKUP_DECLARATION_OPEN", e[e.COMMENT_START = 42] = "COMMENT_START", e[e.COMMENT_START_DASH = 43] = "COMMENT_START_DASH", e[e.COMMENT = 44] = "COMMENT", e[e.COMMENT_LESS_THAN_SIGN = 45] = "COMMENT_LESS_THAN_SIGN", e[e.COMMENT_LESS_THAN_SIGN_BANG = 46] = "COMMENT_LESS_THAN_SIGN_BANG", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH", e[e.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH", e[e.COMMENT_END_DASH = 49] = "COMMENT_END_DASH", e[e.COMMENT_END = 50] = "COMMENT_END", e[e.COMMENT_END_BANG = 51] = "COMMENT_END_BANG", e[e.DOCTYPE = 52] = "DOCTYPE", e[e.BEFORE_DOCTYPE_NAME = 53] = "BEFORE_DOCTYPE_NAME", e[e.DOCTYPE_NAME = 54] = "DOCTYPE_NAME", e[e.AFTER_DOCTYPE_NAME = 55] = "AFTER_DOCTYPE_NAME", e[e.AFTER_DOCTYPE_PUBLIC_KEYWORD = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD", e[e.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER", e[e.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_PUBLIC_IDENTIFIER = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER", e[e.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS", e[e.AFTER_DOCTYPE_SYSTEM_KEYWORD = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD", e[e.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER", e[e.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED", e[e.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED", e[e.AFTER_DOCTYPE_SYSTEM_IDENTIFIER = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER", e[e.BOGUS_DOCTYPE = 67] = "BOGUS_DOCTYPE", e[e.CDATA_SECTION = 68] = "CDATA_SECTION", e[e.CDATA_SECTION_BRACKET = 69] = "CDATA_SECTION_BRACKET", e[e.CDATA_SECTION_END = 70] = "CDATA_SECTION_END", e[e.CHARACTER_REFERENCE = 71] = "CHARACTER_REFERENCE", e[e.AMBIGUOUS_AMPERSAND = 72] = "AMBIGUOUS_AMPERSAND";
  })(b || (b = {}));
  const ce = {
    DATA: b.DATA,
    RCDATA: b.RCDATA,
    RAWTEXT: b.RAWTEXT,
    SCRIPT_DATA: b.SCRIPT_DATA,
    PLAINTEXT: b.PLAINTEXT,
    CDATA_SECTION: b.CDATA_SECTION
  };
  function UE(e) {
    return e >= g.DIGIT_0 && e <= g.DIGIT_9;
  }
  function qt(e) {
    return e >= g.LATIN_CAPITAL_A && e <= g.LATIN_CAPITAL_Z;
  }
  function HE(e) {
    return e >= g.LATIN_SMALL_A && e <= g.LATIN_SMALL_Z;
  }
  function je(e) {
    return HE(e) || qt(e);
  }
  function rs(e) {
    return je(e) || UE(e);
  }
  function Dn(e) {
    return e + 32;
  }
  function ko(e) {
    return e === g.SPACE || e === g.LINE_FEED || e === g.TABULATION || e === g.FORM_FEED;
  }
  function is(e) {
    return ko(e) || e === g.SOLIDUS || e === g.GREATER_THAN_SIGN;
  }
  function vE(e) {
    return e === g.NULL ? F.nullCharacterReference : e > 1114111 ? F.characterReferenceOutsideUnicodeRange : Co(e) ? F.surrogateCharacterReference : Do(e) ? F.noncharacterCharacterReference : _o(e) || e === g.CARRIAGE_RETURN ? F.controlCharacterReference : null;
  }
  class zE {
    constructor(t, n) {
      this.options = t, this.handler = n, this.paused = false, this.inLoop = false, this.inForeignNode = false, this.lastStartTagName = "", this.active = false, this.state = b.DATA, this.returnState = b.DATA, this.entityStartPos = 0, this.consumedAfterSnapshot = -1, this.currentCharacterToken = null, this.currentToken = null, this.currentAttr = {
        name: "",
        value: ""
      }, this.preprocessor = new IE(n), this.currentLocation = this.getCurrentLocation(-1), this.entityDecoder = new RE(NE, (r, i) => {
        this.preprocessor.pos = this.entityStartPos + i - 1, this._flushCodePointConsumedAsCharacterReference(r);
      }, n.onParseError ? {
        missingSemicolonAfterCharacterReference: () => {
          this._err(F.missingSemicolonAfterCharacterReference, 1);
        },
        absenceOfDigitsInNumericCharacterReference: (r) => {
          this._err(F.absenceOfDigitsInNumericCharacterReference, this.entityStartPos - this.preprocessor.pos + r);
        },
        validateNumericCharacterReference: (r) => {
          const i = vE(r);
          i && this._err(i, 1);
        }
      } : void 0);
    }
    _err(t, n = 0) {
      var r, i;
      (i = (r = this.handler).onParseError) === null || i === void 0 || i.call(r, this.preprocessor.getError(t, n));
    }
    getCurrentLocation(t) {
      return this.options.sourceCodeLocationInfo ? {
        startLine: this.preprocessor.line,
        startCol: this.preprocessor.col - t,
        startOffset: this.preprocessor.offset - t,
        endLine: -1,
        endCol: -1,
        endOffset: -1
      } : null;
    }
    _runParsingLoop() {
      if (!this.inLoop) {
        for (this.inLoop = true; this.active && !this.paused; ) {
          this.consumedAfterSnapshot = 0;
          const t = this._consume();
          this._ensureHibernation() || this._callState(t);
        }
        this.inLoop = false;
      }
    }
    pause() {
      this.paused = true;
    }
    resume(t) {
      if (!this.paused) throw new Error("Parser was already resumed");
      this.paused = false, !this.inLoop && (this._runParsingLoop(), this.paused || (t == null ? void 0 : t()));
    }
    write(t, n, r) {
      this.active = true, this.preprocessor.write(t, n), this._runParsingLoop(), this.paused || (r == null ? void 0 : r());
    }
    insertHtmlAtCurrentPos(t) {
      this.active = true, this.preprocessor.insertHtmlAtCurrentPos(t), this._runParsingLoop();
    }
    _ensureHibernation() {
      return this.preprocessor.endOfChunkHit ? (this.preprocessor.retreat(this.consumedAfterSnapshot), this.consumedAfterSnapshot = 0, this.active = false, true) : false;
    }
    _consume() {
      return this.consumedAfterSnapshot++, this.preprocessor.advance();
    }
    _advanceBy(t) {
      this.consumedAfterSnapshot += t;
      for (let n = 0; n < t; n++) this.preprocessor.advance();
    }
    _consumeSequenceIfMatch(t, n) {
      return this.preprocessor.startsWith(t, n) ? (this._advanceBy(t.length - 1), true) : false;
    }
    _createStartTagToken() {
      this.currentToken = {
        type: te.START_TAG,
        tagName: "",
        tagID: c.UNKNOWN,
        selfClosing: false,
        ackSelfClosing: false,
        attrs: [],
        location: this.getCurrentLocation(1)
      };
    }
    _createEndTagToken() {
      this.currentToken = {
        type: te.END_TAG,
        tagName: "",
        tagID: c.UNKNOWN,
        selfClosing: false,
        ackSelfClosing: false,
        attrs: [],
        location: this.getCurrentLocation(2)
      };
    }
    _createCommentToken(t) {
      this.currentToken = {
        type: te.COMMENT,
        data: "",
        location: this.getCurrentLocation(t)
      };
    }
    _createDoctypeToken(t) {
      this.currentToken = {
        type: te.DOCTYPE,
        name: t,
        forceQuirks: false,
        publicId: null,
        systemId: null,
        location: this.currentLocation
      };
    }
    _createCharacterToken(t, n) {
      this.currentCharacterToken = {
        type: t,
        chars: n,
        location: this.currentLocation
      };
    }
    _createAttr(t) {
      this.currentAttr = {
        name: t,
        value: ""
      }, this.currentLocation = this.getCurrentLocation(0);
    }
    _leaveAttrName() {
      var t, n;
      const r = this.currentToken;
      if (yo(r, this.currentAttr.name) === null) {
        if (r.attrs.push(this.currentAttr), r.location && this.currentLocation) {
          const i = (t = (n = r.location).attrs) !== null && t !== void 0 ? t : n.attrs = /* @__PURE__ */ Object.create(null);
          i[this.currentAttr.name] = this.currentLocation, this._leaveAttrValue();
        }
      } else this._err(F.duplicateAttribute);
    }
    _leaveAttrValue() {
      this.currentLocation && (this.currentLocation.endLine = this.preprocessor.line, this.currentLocation.endCol = this.preprocessor.col, this.currentLocation.endOffset = this.preprocessor.offset);
    }
    prepareToken(t) {
      this._emitCurrentCharacterToken(t.location), this.currentToken = null, t.location && (t.location.endLine = this.preprocessor.line, t.location.endCol = this.preprocessor.col + 1, t.location.endOffset = this.preprocessor.offset + 1), this.currentLocation = this.getCurrentLocation(-1);
    }
    emitCurrentTagToken() {
      const t = this.currentToken;
      this.prepareToken(t), t.tagID = xt(t.tagName), t.type === te.START_TAG ? (this.lastStartTagName = t.tagName, this.handler.onStartTag(t)) : (t.attrs.length > 0 && this._err(F.endTagWithAttributes), t.selfClosing && this._err(F.endTagWithTrailingSolidus), this.handler.onEndTag(t)), this.preprocessor.dropParsedChunk();
    }
    emitCurrentComment(t) {
      this.prepareToken(t), this.handler.onComment(t), this.preprocessor.dropParsedChunk();
    }
    emitCurrentDoctype(t) {
      this.prepareToken(t), this.handler.onDoctype(t), this.preprocessor.dropParsedChunk();
    }
    _emitCurrentCharacterToken(t) {
      if (this.currentCharacterToken) {
        switch (t && this.currentCharacterToken.location && (this.currentCharacterToken.location.endLine = t.startLine, this.currentCharacterToken.location.endCol = t.startCol, this.currentCharacterToken.location.endOffset = t.startOffset), this.currentCharacterToken.type) {
          case te.CHARACTER: {
            this.handler.onCharacter(this.currentCharacterToken);
            break;
          }
          case te.NULL_CHARACTER: {
            this.handler.onNullCharacter(this.currentCharacterToken);
            break;
          }
          case te.WHITESPACE_CHARACTER: {
            this.handler.onWhitespaceCharacter(this.currentCharacterToken);
            break;
          }
        }
        this.currentCharacterToken = null;
      }
    }
    _emitEOFToken() {
      const t = this.getCurrentLocation(0);
      t && (t.endLine = t.startLine, t.endCol = t.startCol, t.endOffset = t.startOffset), this._emitCurrentCharacterToken(t), this.handler.onEof({
        type: te.EOF,
        location: t
      }), this.active = false;
    }
    _appendCharToCurrentCharacterToken(t, n) {
      if (this.currentCharacterToken) if (this.currentCharacterToken.type === t) {
        this.currentCharacterToken.chars += n;
        return;
      } else this.currentLocation = this.getCurrentLocation(0), this._emitCurrentCharacterToken(this.currentLocation), this.preprocessor.dropParsedChunk();
      this._createCharacterToken(t, n);
    }
    _emitCodePoint(t) {
      const n = ko(t) ? te.WHITESPACE_CHARACTER : t === g.NULL ? te.NULL_CHARACTER : te.CHARACTER;
      this._appendCharToCurrentCharacterToken(n, String.fromCodePoint(t));
    }
    _emitChars(t) {
      this._appendCharToCurrentCharacterToken(te.CHARACTER, t);
    }
    _startCharacterReference() {
      this.returnState = this.state, this.state = b.CHARACTER_REFERENCE, this.entityStartPos = this.preprocessor.pos, this.entityDecoder.startEntity(this._isCharacterReferenceInAttribute() ? ve.Attribute : ve.Legacy);
    }
    _isCharacterReferenceInAttribute() {
      return this.returnState === b.ATTRIBUTE_VALUE_DOUBLE_QUOTED || this.returnState === b.ATTRIBUTE_VALUE_SINGLE_QUOTED || this.returnState === b.ATTRIBUTE_VALUE_UNQUOTED;
    }
    _flushCodePointConsumedAsCharacterReference(t) {
      this._isCharacterReferenceInAttribute() ? this.currentAttr.value += String.fromCodePoint(t) : this._emitCodePoint(t);
    }
    _callState(t) {
      switch (this.state) {
        case b.DATA: {
          this._stateData(t);
          break;
        }
        case b.RCDATA: {
          this._stateRcdata(t);
          break;
        }
        case b.RAWTEXT: {
          this._stateRawtext(t);
          break;
        }
        case b.SCRIPT_DATA: {
          this._stateScriptData(t);
          break;
        }
        case b.PLAINTEXT: {
          this._statePlaintext(t);
          break;
        }
        case b.TAG_OPEN: {
          this._stateTagOpen(t);
          break;
        }
        case b.END_TAG_OPEN: {
          this._stateEndTagOpen(t);
          break;
        }
        case b.TAG_NAME: {
          this._stateTagName(t);
          break;
        }
        case b.RCDATA_LESS_THAN_SIGN: {
          this._stateRcdataLessThanSign(t);
          break;
        }
        case b.RCDATA_END_TAG_OPEN: {
          this._stateRcdataEndTagOpen(t);
          break;
        }
        case b.RCDATA_END_TAG_NAME: {
          this._stateRcdataEndTagName(t);
          break;
        }
        case b.RAWTEXT_LESS_THAN_SIGN: {
          this._stateRawtextLessThanSign(t);
          break;
        }
        case b.RAWTEXT_END_TAG_OPEN: {
          this._stateRawtextEndTagOpen(t);
          break;
        }
        case b.RAWTEXT_END_TAG_NAME: {
          this._stateRawtextEndTagName(t);
          break;
        }
        case b.SCRIPT_DATA_LESS_THAN_SIGN: {
          this._stateScriptDataLessThanSign(t);
          break;
        }
        case b.SCRIPT_DATA_END_TAG_OPEN: {
          this._stateScriptDataEndTagOpen(t);
          break;
        }
        case b.SCRIPT_DATA_END_TAG_NAME: {
          this._stateScriptDataEndTagName(t);
          break;
        }
        case b.SCRIPT_DATA_ESCAPE_START: {
          this._stateScriptDataEscapeStart(t);
          break;
        }
        case b.SCRIPT_DATA_ESCAPE_START_DASH: {
          this._stateScriptDataEscapeStartDash(t);
          break;
        }
        case b.SCRIPT_DATA_ESCAPED: {
          this._stateScriptDataEscaped(t);
          break;
        }
        case b.SCRIPT_DATA_ESCAPED_DASH: {
          this._stateScriptDataEscapedDash(t);
          break;
        }
        case b.SCRIPT_DATA_ESCAPED_DASH_DASH: {
          this._stateScriptDataEscapedDashDash(t);
          break;
        }
        case b.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
          this._stateScriptDataEscapedLessThanSign(t);
          break;
        }
        case b.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
          this._stateScriptDataEscapedEndTagOpen(t);
          break;
        }
        case b.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
          this._stateScriptDataEscapedEndTagName(t);
          break;
        }
        case b.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
          this._stateScriptDataDoubleEscapeStart(t);
          break;
        }
        case b.SCRIPT_DATA_DOUBLE_ESCAPED: {
          this._stateScriptDataDoubleEscaped(t);
          break;
        }
        case b.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
          this._stateScriptDataDoubleEscapedDash(t);
          break;
        }
        case b.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
          this._stateScriptDataDoubleEscapedDashDash(t);
          break;
        }
        case b.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
          this._stateScriptDataDoubleEscapedLessThanSign(t);
          break;
        }
        case b.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
          this._stateScriptDataDoubleEscapeEnd(t);
          break;
        }
        case b.BEFORE_ATTRIBUTE_NAME: {
          this._stateBeforeAttributeName(t);
          break;
        }
        case b.ATTRIBUTE_NAME: {
          this._stateAttributeName(t);
          break;
        }
        case b.AFTER_ATTRIBUTE_NAME: {
          this._stateAfterAttributeName(t);
          break;
        }
        case b.BEFORE_ATTRIBUTE_VALUE: {
          this._stateBeforeAttributeValue(t);
          break;
        }
        case b.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
          this._stateAttributeValueDoubleQuoted(t);
          break;
        }
        case b.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
          this._stateAttributeValueSingleQuoted(t);
          break;
        }
        case b.ATTRIBUTE_VALUE_UNQUOTED: {
          this._stateAttributeValueUnquoted(t);
          break;
        }
        case b.AFTER_ATTRIBUTE_VALUE_QUOTED: {
          this._stateAfterAttributeValueQuoted(t);
          break;
        }
        case b.SELF_CLOSING_START_TAG: {
          this._stateSelfClosingStartTag(t);
          break;
        }
        case b.BOGUS_COMMENT: {
          this._stateBogusComment(t);
          break;
        }
        case b.MARKUP_DECLARATION_OPEN: {
          this._stateMarkupDeclarationOpen(t);
          break;
        }
        case b.COMMENT_START: {
          this._stateCommentStart(t);
          break;
        }
        case b.COMMENT_START_DASH: {
          this._stateCommentStartDash(t);
          break;
        }
        case b.COMMENT: {
          this._stateComment(t);
          break;
        }
        case b.COMMENT_LESS_THAN_SIGN: {
          this._stateCommentLessThanSign(t);
          break;
        }
        case b.COMMENT_LESS_THAN_SIGN_BANG: {
          this._stateCommentLessThanSignBang(t);
          break;
        }
        case b.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
          this._stateCommentLessThanSignBangDash(t);
          break;
        }
        case b.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
          this._stateCommentLessThanSignBangDashDash(t);
          break;
        }
        case b.COMMENT_END_DASH: {
          this._stateCommentEndDash(t);
          break;
        }
        case b.COMMENT_END: {
          this._stateCommentEnd(t);
          break;
        }
        case b.COMMENT_END_BANG: {
          this._stateCommentEndBang(t);
          break;
        }
        case b.DOCTYPE: {
          this._stateDoctype(t);
          break;
        }
        case b.BEFORE_DOCTYPE_NAME: {
          this._stateBeforeDoctypeName(t);
          break;
        }
        case b.DOCTYPE_NAME: {
          this._stateDoctypeName(t);
          break;
        }
        case b.AFTER_DOCTYPE_NAME: {
          this._stateAfterDoctypeName(t);
          break;
        }
        case b.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
          this._stateAfterDoctypePublicKeyword(t);
          break;
        }
        case b.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
          this._stateBeforeDoctypePublicIdentifier(t);
          break;
        }
        case b.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
          this._stateDoctypePublicIdentifierDoubleQuoted(t);
          break;
        }
        case b.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
          this._stateDoctypePublicIdentifierSingleQuoted(t);
          break;
        }
        case b.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
          this._stateAfterDoctypePublicIdentifier(t);
          break;
        }
        case b.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
          this._stateBetweenDoctypePublicAndSystemIdentifiers(t);
          break;
        }
        case b.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
          this._stateAfterDoctypeSystemKeyword(t);
          break;
        }
        case b.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
          this._stateBeforeDoctypeSystemIdentifier(t);
          break;
        }
        case b.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
          this._stateDoctypeSystemIdentifierDoubleQuoted(t);
          break;
        }
        case b.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
          this._stateDoctypeSystemIdentifierSingleQuoted(t);
          break;
        }
        case b.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
          this._stateAfterDoctypeSystemIdentifier(t);
          break;
        }
        case b.BOGUS_DOCTYPE: {
          this._stateBogusDoctype(t);
          break;
        }
        case b.CDATA_SECTION: {
          this._stateCdataSection(t);
          break;
        }
        case b.CDATA_SECTION_BRACKET: {
          this._stateCdataSectionBracket(t);
          break;
        }
        case b.CDATA_SECTION_END: {
          this._stateCdataSectionEnd(t);
          break;
        }
        case b.CHARACTER_REFERENCE: {
          this._stateCharacterReference();
          break;
        }
        case b.AMBIGUOUS_AMPERSAND: {
          this._stateAmbiguousAmpersand(t);
          break;
        }
        default:
          throw new Error("Unknown state");
      }
    }
    _stateData(t) {
      switch (t) {
        case g.LESS_THAN_SIGN: {
          this.state = b.TAG_OPEN;
          break;
        }
        case g.AMPERSAND: {
          this._startCharacterReference();
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this._emitCodePoint(t);
          break;
        }
        case g.EOF: {
          this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateRcdata(t) {
      switch (t) {
        case g.AMPERSAND: {
          this._startCharacterReference();
          break;
        }
        case g.LESS_THAN_SIGN: {
          this.state = b.RCDATA_LESS_THAN_SIGN;
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this._emitChars(se);
          break;
        }
        case g.EOF: {
          this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateRawtext(t) {
      switch (t) {
        case g.LESS_THAN_SIGN: {
          this.state = b.RAWTEXT_LESS_THAN_SIGN;
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this._emitChars(se);
          break;
        }
        case g.EOF: {
          this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateScriptData(t) {
      switch (t) {
        case g.LESS_THAN_SIGN: {
          this.state = b.SCRIPT_DATA_LESS_THAN_SIGN;
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this._emitChars(se);
          break;
        }
        case g.EOF: {
          this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _statePlaintext(t) {
      switch (t) {
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this._emitChars(se);
          break;
        }
        case g.EOF: {
          this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateTagOpen(t) {
      if (je(t)) this._createStartTagToken(), this.state = b.TAG_NAME, this._stateTagName(t);
      else switch (t) {
        case g.EXCLAMATION_MARK: {
          this.state = b.MARKUP_DECLARATION_OPEN;
          break;
        }
        case g.SOLIDUS: {
          this.state = b.END_TAG_OPEN;
          break;
        }
        case g.QUESTION_MARK: {
          this._err(F.unexpectedQuestionMarkInsteadOfTagName), this._createCommentToken(1), this.state = b.BOGUS_COMMENT, this._stateBogusComment(t);
          break;
        }
        case g.EOF: {
          this._err(F.eofBeforeTagName), this._emitChars("<"), this._emitEOFToken();
          break;
        }
        default:
          this._err(F.invalidFirstCharacterOfTagName), this._emitChars("<"), this.state = b.DATA, this._stateData(t);
      }
    }
    _stateEndTagOpen(t) {
      if (je(t)) this._createEndTagToken(), this.state = b.TAG_NAME, this._stateTagName(t);
      else switch (t) {
        case g.GREATER_THAN_SIGN: {
          this._err(F.missingEndTagName), this.state = b.DATA;
          break;
        }
        case g.EOF: {
          this._err(F.eofBeforeTagName), this._emitChars("</"), this._emitEOFToken();
          break;
        }
        default:
          this._err(F.invalidFirstCharacterOfTagName), this._createCommentToken(2), this.state = b.BOGUS_COMMENT, this._stateBogusComment(t);
      }
    }
    _stateTagName(t) {
      const n = this.currentToken;
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED: {
          this.state = b.BEFORE_ATTRIBUTE_NAME;
          break;
        }
        case g.SOLIDUS: {
          this.state = b.SELF_CLOSING_START_TAG;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this.state = b.DATA, this.emitCurrentTagToken();
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), n.tagName += se;
          break;
        }
        case g.EOF: {
          this._err(F.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          n.tagName += String.fromCodePoint(qt(t) ? Dn(t) : t);
      }
    }
    _stateRcdataLessThanSign(t) {
      t === g.SOLIDUS ? this.state = b.RCDATA_END_TAG_OPEN : (this._emitChars("<"), this.state = b.RCDATA, this._stateRcdata(t));
    }
    _stateRcdataEndTagOpen(t) {
      je(t) ? (this.state = b.RCDATA_END_TAG_NAME, this._stateRcdataEndTagName(t)) : (this._emitChars("</"), this.state = b.RCDATA, this._stateRcdata(t));
    }
    handleSpecialEndTag(t) {
      if (!this.preprocessor.startsWith(this.lastStartTagName, false)) return !this._ensureHibernation();
      this._createEndTagToken();
      const n = this.currentToken;
      switch (n.tagName = this.lastStartTagName, this.preprocessor.peek(this.lastStartTagName.length)) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED:
          return this._advanceBy(this.lastStartTagName.length), this.state = b.BEFORE_ATTRIBUTE_NAME, false;
        case g.SOLIDUS:
          return this._advanceBy(this.lastStartTagName.length), this.state = b.SELF_CLOSING_START_TAG, false;
        case g.GREATER_THAN_SIGN:
          return this._advanceBy(this.lastStartTagName.length), this.emitCurrentTagToken(), this.state = b.DATA, false;
        default:
          return !this._ensureHibernation();
      }
    }
    _stateRcdataEndTagName(t) {
      this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = b.RCDATA, this._stateRcdata(t));
    }
    _stateRawtextLessThanSign(t) {
      t === g.SOLIDUS ? this.state = b.RAWTEXT_END_TAG_OPEN : (this._emitChars("<"), this.state = b.RAWTEXT, this._stateRawtext(t));
    }
    _stateRawtextEndTagOpen(t) {
      je(t) ? (this.state = b.RAWTEXT_END_TAG_NAME, this._stateRawtextEndTagName(t)) : (this._emitChars("</"), this.state = b.RAWTEXT, this._stateRawtext(t));
    }
    _stateRawtextEndTagName(t) {
      this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = b.RAWTEXT, this._stateRawtext(t));
    }
    _stateScriptDataLessThanSign(t) {
      switch (t) {
        case g.SOLIDUS: {
          this.state = b.SCRIPT_DATA_END_TAG_OPEN;
          break;
        }
        case g.EXCLAMATION_MARK: {
          this.state = b.SCRIPT_DATA_ESCAPE_START, this._emitChars("<!");
          break;
        }
        default:
          this._emitChars("<"), this.state = b.SCRIPT_DATA, this._stateScriptData(t);
      }
    }
    _stateScriptDataEndTagOpen(t) {
      je(t) ? (this.state = b.SCRIPT_DATA_END_TAG_NAME, this._stateScriptDataEndTagName(t)) : (this._emitChars("</"), this.state = b.SCRIPT_DATA, this._stateScriptData(t));
    }
    _stateScriptDataEndTagName(t) {
      this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = b.SCRIPT_DATA, this._stateScriptData(t));
    }
    _stateScriptDataEscapeStart(t) {
      t === g.HYPHEN_MINUS ? (this.state = b.SCRIPT_DATA_ESCAPE_START_DASH, this._emitChars("-")) : (this.state = b.SCRIPT_DATA, this._stateScriptData(t));
    }
    _stateScriptDataEscapeStartDash(t) {
      t === g.HYPHEN_MINUS ? (this.state = b.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-")) : (this.state = b.SCRIPT_DATA, this._stateScriptData(t));
    }
    _stateScriptDataEscaped(t) {
      switch (t) {
        case g.HYPHEN_MINUS: {
          this.state = b.SCRIPT_DATA_ESCAPED_DASH, this._emitChars("-");
          break;
        }
        case g.LESS_THAN_SIGN: {
          this.state = b.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this._emitChars(se);
          break;
        }
        case g.EOF: {
          this._err(F.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateScriptDataEscapedDash(t) {
      switch (t) {
        case g.HYPHEN_MINUS: {
          this.state = b.SCRIPT_DATA_ESCAPED_DASH_DASH, this._emitChars("-");
          break;
        }
        case g.LESS_THAN_SIGN: {
          this.state = b.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this.state = b.SCRIPT_DATA_ESCAPED, this._emitChars(se);
          break;
        }
        case g.EOF: {
          this._err(F.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        }
        default:
          this.state = b.SCRIPT_DATA_ESCAPED, this._emitCodePoint(t);
      }
    }
    _stateScriptDataEscapedDashDash(t) {
      switch (t) {
        case g.HYPHEN_MINUS: {
          this._emitChars("-");
          break;
        }
        case g.LESS_THAN_SIGN: {
          this.state = b.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this.state = b.SCRIPT_DATA, this._emitChars(">");
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this.state = b.SCRIPT_DATA_ESCAPED, this._emitChars(se);
          break;
        }
        case g.EOF: {
          this._err(F.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        }
        default:
          this.state = b.SCRIPT_DATA_ESCAPED, this._emitCodePoint(t);
      }
    }
    _stateScriptDataEscapedLessThanSign(t) {
      t === g.SOLIDUS ? this.state = b.SCRIPT_DATA_ESCAPED_END_TAG_OPEN : je(t) ? (this._emitChars("<"), this.state = b.SCRIPT_DATA_DOUBLE_ESCAPE_START, this._stateScriptDataDoubleEscapeStart(t)) : (this._emitChars("<"), this.state = b.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
    }
    _stateScriptDataEscapedEndTagOpen(t) {
      je(t) ? (this.state = b.SCRIPT_DATA_ESCAPED_END_TAG_NAME, this._stateScriptDataEscapedEndTagName(t)) : (this._emitChars("</"), this.state = b.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
    }
    _stateScriptDataEscapedEndTagName(t) {
      this.handleSpecialEndTag(t) && (this._emitChars("</"), this.state = b.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
    }
    _stateScriptDataDoubleEscapeStart(t) {
      if (this.preprocessor.startsWith(Te.SCRIPT, false) && is(this.preprocessor.peek(Te.SCRIPT.length))) {
        this._emitCodePoint(t);
        for (let n = 0; n < Te.SCRIPT.length; n++) this._emitCodePoint(this._consume());
        this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED;
      } else this._ensureHibernation() || (this.state = b.SCRIPT_DATA_ESCAPED, this._stateScriptDataEscaped(t));
    }
    _stateScriptDataDoubleEscaped(t) {
      switch (t) {
        case g.HYPHEN_MINUS: {
          this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED_DASH, this._emitChars("-");
          break;
        }
        case g.LESS_THAN_SIGN: {
          this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this._emitChars(se);
          break;
        }
        case g.EOF: {
          this._err(F.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateScriptDataDoubleEscapedDash(t) {
      switch (t) {
        case g.HYPHEN_MINUS: {
          this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH, this._emitChars("-");
          break;
        }
        case g.LESS_THAN_SIGN: {
          this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(se);
          break;
        }
        case g.EOF: {
          this._err(F.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        }
        default:
          this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(t);
      }
    }
    _stateScriptDataDoubleEscapedDashDash(t) {
      switch (t) {
        case g.HYPHEN_MINUS: {
          this._emitChars("-");
          break;
        }
        case g.LESS_THAN_SIGN: {
          this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN, this._emitChars("<");
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this.state = b.SCRIPT_DATA, this._emitChars(">");
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitChars(se);
          break;
        }
        case g.EOF: {
          this._err(F.eofInScriptHtmlCommentLikeText), this._emitEOFToken();
          break;
        }
        default:
          this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED, this._emitCodePoint(t);
      }
    }
    _stateScriptDataDoubleEscapedLessThanSign(t) {
      t === g.SOLIDUS ? (this.state = b.SCRIPT_DATA_DOUBLE_ESCAPE_END, this._emitChars("/")) : (this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(t));
    }
    _stateScriptDataDoubleEscapeEnd(t) {
      if (this.preprocessor.startsWith(Te.SCRIPT, false) && is(this.preprocessor.peek(Te.SCRIPT.length))) {
        this._emitCodePoint(t);
        for (let n = 0; n < Te.SCRIPT.length; n++) this._emitCodePoint(this._consume());
        this.state = b.SCRIPT_DATA_ESCAPED;
      } else this._ensureHibernation() || (this.state = b.SCRIPT_DATA_DOUBLE_ESCAPED, this._stateScriptDataDoubleEscaped(t));
    }
    _stateBeforeAttributeName(t) {
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED:
          break;
        case g.SOLIDUS:
        case g.GREATER_THAN_SIGN:
        case g.EOF: {
          this.state = b.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(t);
          break;
        }
        case g.EQUALS_SIGN: {
          this._err(F.unexpectedEqualsSignBeforeAttributeName), this._createAttr("="), this.state = b.ATTRIBUTE_NAME;
          break;
        }
        default:
          this._createAttr(""), this.state = b.ATTRIBUTE_NAME, this._stateAttributeName(t);
      }
    }
    _stateAttributeName(t) {
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED:
        case g.SOLIDUS:
        case g.GREATER_THAN_SIGN:
        case g.EOF: {
          this._leaveAttrName(), this.state = b.AFTER_ATTRIBUTE_NAME, this._stateAfterAttributeName(t);
          break;
        }
        case g.EQUALS_SIGN: {
          this._leaveAttrName(), this.state = b.BEFORE_ATTRIBUTE_VALUE;
          break;
        }
        case g.QUOTATION_MARK:
        case g.APOSTROPHE:
        case g.LESS_THAN_SIGN: {
          this._err(F.unexpectedCharacterInAttributeName), this.currentAttr.name += String.fromCodePoint(t);
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this.currentAttr.name += se;
          break;
        }
        default:
          this.currentAttr.name += String.fromCodePoint(qt(t) ? Dn(t) : t);
      }
    }
    _stateAfterAttributeName(t) {
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED:
          break;
        case g.SOLIDUS: {
          this.state = b.SELF_CLOSING_START_TAG;
          break;
        }
        case g.EQUALS_SIGN: {
          this.state = b.BEFORE_ATTRIBUTE_VALUE;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this.state = b.DATA, this.emitCurrentTagToken();
          break;
        }
        case g.EOF: {
          this._err(F.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          this._createAttr(""), this.state = b.ATTRIBUTE_NAME, this._stateAttributeName(t);
      }
    }
    _stateBeforeAttributeValue(t) {
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED:
          break;
        case g.QUOTATION_MARK: {
          this.state = b.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
          break;
        }
        case g.APOSTROPHE: {
          this.state = b.ATTRIBUTE_VALUE_SINGLE_QUOTED;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.missingAttributeValue), this.state = b.DATA, this.emitCurrentTagToken();
          break;
        }
        default:
          this.state = b.ATTRIBUTE_VALUE_UNQUOTED, this._stateAttributeValueUnquoted(t);
      }
    }
    _stateAttributeValueDoubleQuoted(t) {
      switch (t) {
        case g.QUOTATION_MARK: {
          this.state = b.AFTER_ATTRIBUTE_VALUE_QUOTED;
          break;
        }
        case g.AMPERSAND: {
          this._startCharacterReference();
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this.currentAttr.value += se;
          break;
        }
        case g.EOF: {
          this._err(F.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          this.currentAttr.value += String.fromCodePoint(t);
      }
    }
    _stateAttributeValueSingleQuoted(t) {
      switch (t) {
        case g.APOSTROPHE: {
          this.state = b.AFTER_ATTRIBUTE_VALUE_QUOTED;
          break;
        }
        case g.AMPERSAND: {
          this._startCharacterReference();
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this.currentAttr.value += se;
          break;
        }
        case g.EOF: {
          this._err(F.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          this.currentAttr.value += String.fromCodePoint(t);
      }
    }
    _stateAttributeValueUnquoted(t) {
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED: {
          this._leaveAttrValue(), this.state = b.BEFORE_ATTRIBUTE_NAME;
          break;
        }
        case g.AMPERSAND: {
          this._startCharacterReference();
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._leaveAttrValue(), this.state = b.DATA, this.emitCurrentTagToken();
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this.currentAttr.value += se;
          break;
        }
        case g.QUOTATION_MARK:
        case g.APOSTROPHE:
        case g.LESS_THAN_SIGN:
        case g.EQUALS_SIGN:
        case g.GRAVE_ACCENT: {
          this._err(F.unexpectedCharacterInUnquotedAttributeValue), this.currentAttr.value += String.fromCodePoint(t);
          break;
        }
        case g.EOF: {
          this._err(F.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          this.currentAttr.value += String.fromCodePoint(t);
      }
    }
    _stateAfterAttributeValueQuoted(t) {
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED: {
          this._leaveAttrValue(), this.state = b.BEFORE_ATTRIBUTE_NAME;
          break;
        }
        case g.SOLIDUS: {
          this._leaveAttrValue(), this.state = b.SELF_CLOSING_START_TAG;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._leaveAttrValue(), this.state = b.DATA, this.emitCurrentTagToken();
          break;
        }
        case g.EOF: {
          this._err(F.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          this._err(F.missingWhitespaceBetweenAttributes), this.state = b.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(t);
      }
    }
    _stateSelfClosingStartTag(t) {
      switch (t) {
        case g.GREATER_THAN_SIGN: {
          const n = this.currentToken;
          n.selfClosing = true, this.state = b.DATA, this.emitCurrentTagToken();
          break;
        }
        case g.EOF: {
          this._err(F.eofInTag), this._emitEOFToken();
          break;
        }
        default:
          this._err(F.unexpectedSolidusInTag), this.state = b.BEFORE_ATTRIBUTE_NAME, this._stateBeforeAttributeName(t);
      }
    }
    _stateBogusComment(t) {
      const n = this.currentToken;
      switch (t) {
        case g.GREATER_THAN_SIGN: {
          this.state = b.DATA, this.emitCurrentComment(n);
          break;
        }
        case g.EOF: {
          this.emitCurrentComment(n), this._emitEOFToken();
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), n.data += se;
          break;
        }
        default:
          n.data += String.fromCodePoint(t);
      }
    }
    _stateMarkupDeclarationOpen(t) {
      this._consumeSequenceIfMatch(Te.DASH_DASH, true) ? (this._createCommentToken(Te.DASH_DASH.length + 1), this.state = b.COMMENT_START) : this._consumeSequenceIfMatch(Te.DOCTYPE, false) ? (this.currentLocation = this.getCurrentLocation(Te.DOCTYPE.length + 1), this.state = b.DOCTYPE) : this._consumeSequenceIfMatch(Te.CDATA_START, true) ? this.inForeignNode ? this.state = b.CDATA_SECTION : (this._err(F.cdataInHtmlContent), this._createCommentToken(Te.CDATA_START.length + 1), this.currentToken.data = "[CDATA[", this.state = b.BOGUS_COMMENT) : this._ensureHibernation() || (this._err(F.incorrectlyOpenedComment), this._createCommentToken(2), this.state = b.BOGUS_COMMENT, this._stateBogusComment(t));
    }
    _stateCommentStart(t) {
      switch (t) {
        case g.HYPHEN_MINUS: {
          this.state = b.COMMENT_START_DASH;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.abruptClosingOfEmptyComment), this.state = b.DATA;
          const n = this.currentToken;
          this.emitCurrentComment(n);
          break;
        }
        default:
          this.state = b.COMMENT, this._stateComment(t);
      }
    }
    _stateCommentStartDash(t) {
      const n = this.currentToken;
      switch (t) {
        case g.HYPHEN_MINUS: {
          this.state = b.COMMENT_END;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.abruptClosingOfEmptyComment), this.state = b.DATA, this.emitCurrentComment(n);
          break;
        }
        case g.EOF: {
          this._err(F.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
          break;
        }
        default:
          n.data += "-", this.state = b.COMMENT, this._stateComment(t);
      }
    }
    _stateComment(t) {
      const n = this.currentToken;
      switch (t) {
        case g.HYPHEN_MINUS: {
          this.state = b.COMMENT_END_DASH;
          break;
        }
        case g.LESS_THAN_SIGN: {
          n.data += "<", this.state = b.COMMENT_LESS_THAN_SIGN;
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), n.data += se;
          break;
        }
        case g.EOF: {
          this._err(F.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
          break;
        }
        default:
          n.data += String.fromCodePoint(t);
      }
    }
    _stateCommentLessThanSign(t) {
      const n = this.currentToken;
      switch (t) {
        case g.EXCLAMATION_MARK: {
          n.data += "!", this.state = b.COMMENT_LESS_THAN_SIGN_BANG;
          break;
        }
        case g.LESS_THAN_SIGN: {
          n.data += "<";
          break;
        }
        default:
          this.state = b.COMMENT, this._stateComment(t);
      }
    }
    _stateCommentLessThanSignBang(t) {
      t === g.HYPHEN_MINUS ? this.state = b.COMMENT_LESS_THAN_SIGN_BANG_DASH : (this.state = b.COMMENT, this._stateComment(t));
    }
    _stateCommentLessThanSignBangDash(t) {
      t === g.HYPHEN_MINUS ? this.state = b.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH : (this.state = b.COMMENT_END_DASH, this._stateCommentEndDash(t));
    }
    _stateCommentLessThanSignBangDashDash(t) {
      t !== g.GREATER_THAN_SIGN && t !== g.EOF && this._err(F.nestedComment), this.state = b.COMMENT_END, this._stateCommentEnd(t);
    }
    _stateCommentEndDash(t) {
      const n = this.currentToken;
      switch (t) {
        case g.HYPHEN_MINUS: {
          this.state = b.COMMENT_END;
          break;
        }
        case g.EOF: {
          this._err(F.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
          break;
        }
        default:
          n.data += "-", this.state = b.COMMENT, this._stateComment(t);
      }
    }
    _stateCommentEnd(t) {
      const n = this.currentToken;
      switch (t) {
        case g.GREATER_THAN_SIGN: {
          this.state = b.DATA, this.emitCurrentComment(n);
          break;
        }
        case g.EXCLAMATION_MARK: {
          this.state = b.COMMENT_END_BANG;
          break;
        }
        case g.HYPHEN_MINUS: {
          n.data += "-";
          break;
        }
        case g.EOF: {
          this._err(F.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
          break;
        }
        default:
          n.data += "--", this.state = b.COMMENT, this._stateComment(t);
      }
    }
    _stateCommentEndBang(t) {
      const n = this.currentToken;
      switch (t) {
        case g.HYPHEN_MINUS: {
          n.data += "--!", this.state = b.COMMENT_END_DASH;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.incorrectlyClosedComment), this.state = b.DATA, this.emitCurrentComment(n);
          break;
        }
        case g.EOF: {
          this._err(F.eofInComment), this.emitCurrentComment(n), this._emitEOFToken();
          break;
        }
        default:
          n.data += "--!", this.state = b.COMMENT, this._stateComment(t);
      }
    }
    _stateDoctype(t) {
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED: {
          this.state = b.BEFORE_DOCTYPE_NAME;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this.state = b.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(t);
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), this._createDoctypeToken(null);
          const n = this.currentToken;
          n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          this._err(F.missingWhitespaceBeforeDoctypeName), this.state = b.BEFORE_DOCTYPE_NAME, this._stateBeforeDoctypeName(t);
      }
    }
    _stateBeforeDoctypeName(t) {
      if (qt(t)) this._createDoctypeToken(String.fromCharCode(Dn(t))), this.state = b.DOCTYPE_NAME;
      else switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED:
          break;
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), this._createDoctypeToken(se), this.state = b.DOCTYPE_NAME;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.missingDoctypeName), this._createDoctypeToken(null);
          const n = this.currentToken;
          n.forceQuirks = true, this.emitCurrentDoctype(n), this.state = b.DATA;
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), this._createDoctypeToken(null);
          const n = this.currentToken;
          n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          this._createDoctypeToken(String.fromCodePoint(t)), this.state = b.DOCTYPE_NAME;
      }
    }
    _stateDoctypeName(t) {
      const n = this.currentToken;
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED: {
          this.state = b.AFTER_DOCTYPE_NAME;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this.state = b.DATA, this.emitCurrentDoctype(n);
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), n.name += se;
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          n.name += String.fromCodePoint(qt(t) ? Dn(t) : t);
      }
    }
    _stateAfterDoctypeName(t) {
      const n = this.currentToken;
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED:
          break;
        case g.GREATER_THAN_SIGN: {
          this.state = b.DATA, this.emitCurrentDoctype(n);
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          this._consumeSequenceIfMatch(Te.PUBLIC, false) ? this.state = b.AFTER_DOCTYPE_PUBLIC_KEYWORD : this._consumeSequenceIfMatch(Te.SYSTEM, false) ? this.state = b.AFTER_DOCTYPE_SYSTEM_KEYWORD : this._ensureHibernation() || (this._err(F.invalidCharacterSequenceAfterDoctypeName), n.forceQuirks = true, this.state = b.BOGUS_DOCTYPE, this._stateBogusDoctype(t));
      }
    }
    _stateAfterDoctypePublicKeyword(t) {
      const n = this.currentToken;
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED: {
          this.state = b.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
          break;
        }
        case g.QUOTATION_MARK: {
          this._err(F.missingWhitespaceAfterDoctypePublicKeyword), n.publicId = "", this.state = b.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
          break;
        }
        case g.APOSTROPHE: {
          this._err(F.missingWhitespaceAfterDoctypePublicKeyword), n.publicId = "", this.state = b.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.missingDoctypePublicIdentifier), n.forceQuirks = true, this.state = b.DATA, this.emitCurrentDoctype(n);
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          this._err(F.missingQuoteBeforeDoctypePublicIdentifier), n.forceQuirks = true, this.state = b.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
      }
    }
    _stateBeforeDoctypePublicIdentifier(t) {
      const n = this.currentToken;
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED:
          break;
        case g.QUOTATION_MARK: {
          n.publicId = "", this.state = b.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
          break;
        }
        case g.APOSTROPHE: {
          n.publicId = "", this.state = b.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.missingDoctypePublicIdentifier), n.forceQuirks = true, this.state = b.DATA, this.emitCurrentDoctype(n);
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          this._err(F.missingQuoteBeforeDoctypePublicIdentifier), n.forceQuirks = true, this.state = b.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
      }
    }
    _stateDoctypePublicIdentifierDoubleQuoted(t) {
      const n = this.currentToken;
      switch (t) {
        case g.QUOTATION_MARK: {
          this.state = b.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), n.publicId += se;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.abruptDoctypePublicIdentifier), n.forceQuirks = true, this.emitCurrentDoctype(n), this.state = b.DATA;
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          n.publicId += String.fromCodePoint(t);
      }
    }
    _stateDoctypePublicIdentifierSingleQuoted(t) {
      const n = this.currentToken;
      switch (t) {
        case g.APOSTROPHE: {
          this.state = b.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), n.publicId += se;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.abruptDoctypePublicIdentifier), n.forceQuirks = true, this.emitCurrentDoctype(n), this.state = b.DATA;
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          n.publicId += String.fromCodePoint(t);
      }
    }
    _stateAfterDoctypePublicIdentifier(t) {
      const n = this.currentToken;
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED: {
          this.state = b.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this.state = b.DATA, this.emitCurrentDoctype(n);
          break;
        }
        case g.QUOTATION_MARK: {
          this._err(F.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), n.systemId = "", this.state = b.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
          break;
        }
        case g.APOSTROPHE: {
          this._err(F.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers), n.systemId = "", this.state = b.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          this._err(F.missingQuoteBeforeDoctypeSystemIdentifier), n.forceQuirks = true, this.state = b.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
      }
    }
    _stateBetweenDoctypePublicAndSystemIdentifiers(t) {
      const n = this.currentToken;
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED:
          break;
        case g.GREATER_THAN_SIGN: {
          this.emitCurrentDoctype(n), this.state = b.DATA;
          break;
        }
        case g.QUOTATION_MARK: {
          n.systemId = "", this.state = b.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
          break;
        }
        case g.APOSTROPHE: {
          n.systemId = "", this.state = b.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          this._err(F.missingQuoteBeforeDoctypeSystemIdentifier), n.forceQuirks = true, this.state = b.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
      }
    }
    _stateAfterDoctypeSystemKeyword(t) {
      const n = this.currentToken;
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED: {
          this.state = b.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
          break;
        }
        case g.QUOTATION_MARK: {
          this._err(F.missingWhitespaceAfterDoctypeSystemKeyword), n.systemId = "", this.state = b.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
          break;
        }
        case g.APOSTROPHE: {
          this._err(F.missingWhitespaceAfterDoctypeSystemKeyword), n.systemId = "", this.state = b.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.missingDoctypeSystemIdentifier), n.forceQuirks = true, this.state = b.DATA, this.emitCurrentDoctype(n);
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          this._err(F.missingQuoteBeforeDoctypeSystemIdentifier), n.forceQuirks = true, this.state = b.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
      }
    }
    _stateBeforeDoctypeSystemIdentifier(t) {
      const n = this.currentToken;
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED:
          break;
        case g.QUOTATION_MARK: {
          n.systemId = "", this.state = b.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
          break;
        }
        case g.APOSTROPHE: {
          n.systemId = "", this.state = b.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.missingDoctypeSystemIdentifier), n.forceQuirks = true, this.state = b.DATA, this.emitCurrentDoctype(n);
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          this._err(F.missingQuoteBeforeDoctypeSystemIdentifier), n.forceQuirks = true, this.state = b.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
      }
    }
    _stateDoctypeSystemIdentifierDoubleQuoted(t) {
      const n = this.currentToken;
      switch (t) {
        case g.QUOTATION_MARK: {
          this.state = b.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), n.systemId += se;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.abruptDoctypeSystemIdentifier), n.forceQuirks = true, this.emitCurrentDoctype(n), this.state = b.DATA;
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          n.systemId += String.fromCodePoint(t);
      }
    }
    _stateDoctypeSystemIdentifierSingleQuoted(t) {
      const n = this.currentToken;
      switch (t) {
        case g.APOSTROPHE: {
          this.state = b.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter), n.systemId += se;
          break;
        }
        case g.GREATER_THAN_SIGN: {
          this._err(F.abruptDoctypeSystemIdentifier), n.forceQuirks = true, this.emitCurrentDoctype(n), this.state = b.DATA;
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          n.systemId += String.fromCodePoint(t);
      }
    }
    _stateAfterDoctypeSystemIdentifier(t) {
      const n = this.currentToken;
      switch (t) {
        case g.SPACE:
        case g.LINE_FEED:
        case g.TABULATION:
        case g.FORM_FEED:
          break;
        case g.GREATER_THAN_SIGN: {
          this.emitCurrentDoctype(n), this.state = b.DATA;
          break;
        }
        case g.EOF: {
          this._err(F.eofInDoctype), n.forceQuirks = true, this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
        default:
          this._err(F.unexpectedCharacterAfterDoctypeSystemIdentifier), this.state = b.BOGUS_DOCTYPE, this._stateBogusDoctype(t);
      }
    }
    _stateBogusDoctype(t) {
      const n = this.currentToken;
      switch (t) {
        case g.GREATER_THAN_SIGN: {
          this.emitCurrentDoctype(n), this.state = b.DATA;
          break;
        }
        case g.NULL: {
          this._err(F.unexpectedNullCharacter);
          break;
        }
        case g.EOF: {
          this.emitCurrentDoctype(n), this._emitEOFToken();
          break;
        }
      }
    }
    _stateCdataSection(t) {
      switch (t) {
        case g.RIGHT_SQUARE_BRACKET: {
          this.state = b.CDATA_SECTION_BRACKET;
          break;
        }
        case g.EOF: {
          this._err(F.eofInCdata), this._emitEOFToken();
          break;
        }
        default:
          this._emitCodePoint(t);
      }
    }
    _stateCdataSectionBracket(t) {
      t === g.RIGHT_SQUARE_BRACKET ? this.state = b.CDATA_SECTION_END : (this._emitChars("]"), this.state = b.CDATA_SECTION, this._stateCdataSection(t));
    }
    _stateCdataSectionEnd(t) {
      switch (t) {
        case g.GREATER_THAN_SIGN: {
          this.state = b.DATA;
          break;
        }
        case g.RIGHT_SQUARE_BRACKET: {
          this._emitChars("]");
          break;
        }
        default:
          this._emitChars("]]"), this.state = b.CDATA_SECTION, this._stateCdataSection(t);
      }
    }
    _stateCharacterReference() {
      let t = this.entityDecoder.write(this.preprocessor.html, this.preprocessor.pos);
      if (t < 0) if (this.preprocessor.lastChunkWritten) t = this.entityDecoder.end();
      else {
        this.active = false, this.preprocessor.pos = this.preprocessor.html.length - 1, this.consumedAfterSnapshot = 0, this.preprocessor.endOfChunkHit = true;
        return;
      }
      t === 0 ? (this.preprocessor.pos = this.entityStartPos, this._flushCodePointConsumedAsCharacterReference(g.AMPERSAND), this.state = !this._isCharacterReferenceInAttribute() && rs(this.preprocessor.peek(1)) ? b.AMBIGUOUS_AMPERSAND : this.returnState) : this.state = this.returnState;
    }
    _stateAmbiguousAmpersand(t) {
      rs(t) ? this._flushCodePointConsumedAsCharacterReference(t) : (t === g.SEMICOLON && this._err(F.unknownNamedCharacterReference), this.state = this.returnState, this._callState(t));
    }
  }
  const Io = /* @__PURE__ */ new Set([
    c.DD,
    c.DT,
    c.LI,
    c.OPTGROUP,
    c.OPTION,
    c.P,
    c.RB,
    c.RP,
    c.RT,
    c.RTC
  ]), us = /* @__PURE__ */ new Set([
    ...Io,
    c.CAPTION,
    c.COLGROUP,
    c.TBODY,
    c.TD,
    c.TFOOT,
    c.TH,
    c.THEAD,
    c.TR
  ]), Un = /* @__PURE__ */ new Set([
    c.APPLET,
    c.CAPTION,
    c.HTML,
    c.MARQUEE,
    c.OBJECT,
    c.TABLE,
    c.TD,
    c.TEMPLATE,
    c.TH
  ]), YE = /* @__PURE__ */ new Set([
    ...Un,
    c.OL,
    c.UL
  ]), qE = /* @__PURE__ */ new Set([
    ...Un,
    c.BUTTON
  ]), ss = /* @__PURE__ */ new Set([
    c.ANNOTATION_XML,
    c.MI,
    c.MN,
    c.MO,
    c.MS,
    c.MTEXT
  ]), as = /* @__PURE__ */ new Set([
    c.DESC,
    c.FOREIGN_OBJECT,
    c.TITLE
  ]), $E = /* @__PURE__ */ new Set([
    c.TR,
    c.TEMPLATE,
    c.HTML
  ]), jE = /* @__PURE__ */ new Set([
    c.TBODY,
    c.TFOOT,
    c.THEAD,
    c.TEMPLATE,
    c.HTML
  ]), VE = /* @__PURE__ */ new Set([
    c.TABLE,
    c.TEMPLATE,
    c.HTML
  ]), KE = /* @__PURE__ */ new Set([
    c.TD,
    c.TH
  ]);
  class WE {
    get currentTmplContentOrNode() {
      return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
    }
    constructor(t, n, r) {
      this.treeAdapter = n, this.handler = r, this.items = [], this.tagIDs = [], this.stackTop = -1, this.tmplCount = 0, this.currentTagId = c.UNKNOWN, this.current = t;
    }
    _indexOf(t) {
      return this.items.lastIndexOf(t, this.stackTop);
    }
    _isInTemplate() {
      return this.currentTagId === c.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === U.HTML;
    }
    _updateCurrentElement() {
      this.current = this.items[this.stackTop], this.currentTagId = this.tagIDs[this.stackTop];
    }
    push(t, n) {
      this.stackTop++, this.items[this.stackTop] = t, this.current = t, this.tagIDs[this.stackTop] = n, this.currentTagId = n, this._isInTemplate() && this.tmplCount++, this.handler.onItemPush(t, n, true);
    }
    pop() {
      const t = this.current;
      this.tmplCount > 0 && this._isInTemplate() && this.tmplCount--, this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, true);
    }
    replace(t, n) {
      const r = this._indexOf(t);
      this.items[r] = n, r === this.stackTop && (this.current = n);
    }
    insertAfter(t, n, r) {
      const i = this._indexOf(t) + 1;
      this.items.splice(i, 0, n), this.tagIDs.splice(i, 0, r), this.stackTop++, i === this.stackTop && this._updateCurrentElement(), this.current && this.currentTagId !== void 0 && this.handler.onItemPush(this.current, this.currentTagId, i === this.stackTop);
    }
    popUntilTagNamePopped(t) {
      let n = this.stackTop + 1;
      do
        n = this.tagIDs.lastIndexOf(t, n - 1);
      while (n > 0 && this.treeAdapter.getNamespaceURI(this.items[n]) !== U.HTML);
      this.shortenToLength(Math.max(n, 0));
    }
    shortenToLength(t) {
      for (; this.stackTop >= t; ) {
        const n = this.current;
        this.tmplCount > 0 && this._isInTemplate() && (this.tmplCount -= 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(n, this.stackTop < t);
      }
    }
    popUntilElementPopped(t) {
      const n = this._indexOf(t);
      this.shortenToLength(Math.max(n, 0));
    }
    popUntilPopped(t, n) {
      const r = this._indexOfTagNames(t, n);
      this.shortenToLength(Math.max(r, 0));
    }
    popUntilNumberedHeaderPopped() {
      this.popUntilPopped(Zr, U.HTML);
    }
    popUntilTableCellPopped() {
      this.popUntilPopped(KE, U.HTML);
    }
    popAllUpToHtmlElement() {
      this.tmplCount = 0, this.shortenToLength(1);
    }
    _indexOfTagNames(t, n) {
      for (let r = this.stackTop; r >= 0; r--) if (t.has(this.tagIDs[r]) && this.treeAdapter.getNamespaceURI(this.items[r]) === n) return r;
      return -1;
    }
    clearBackTo(t, n) {
      const r = this._indexOfTagNames(t, n);
      this.shortenToLength(r + 1);
    }
    clearBackToTableContext() {
      this.clearBackTo(VE, U.HTML);
    }
    clearBackToTableBodyContext() {
      this.clearBackTo(jE, U.HTML);
    }
    clearBackToTableRowContext() {
      this.clearBackTo($E, U.HTML);
    }
    remove(t) {
      const n = this._indexOf(t);
      n >= 0 && (n === this.stackTop ? this.pop() : (this.items.splice(n, 1), this.tagIDs.splice(n, 1), this.stackTop--, this._updateCurrentElement(), this.handler.onItemPop(t, false)));
    }
    tryPeekProperlyNestedBodyElement() {
      return this.stackTop >= 1 && this.tagIDs[1] === c.BODY ? this.items[1] : null;
    }
    contains(t) {
      return this._indexOf(t) > -1;
    }
    getCommonAncestor(t) {
      const n = this._indexOf(t) - 1;
      return n >= 0 ? this.items[n] : null;
    }
    isRootHtmlElementCurrent() {
      return this.stackTop === 0 && this.tagIDs[0] === c.HTML;
    }
    hasInDynamicScope(t, n) {
      for (let r = this.stackTop; r >= 0; r--) {
        const i = this.tagIDs[r];
        switch (this.treeAdapter.getNamespaceURI(this.items[r])) {
          case U.HTML: {
            if (i === t) return true;
            if (n.has(i)) return false;
            break;
          }
          case U.SVG: {
            if (as.has(i)) return false;
            break;
          }
          case U.MATHML: {
            if (ss.has(i)) return false;
            break;
          }
        }
      }
      return true;
    }
    hasInScope(t) {
      return this.hasInDynamicScope(t, Un);
    }
    hasInListItemScope(t) {
      return this.hasInDynamicScope(t, YE);
    }
    hasInButtonScope(t) {
      return this.hasInDynamicScope(t, qE);
    }
    hasNumberedHeaderInScope() {
      for (let t = this.stackTop; t >= 0; t--) {
        const n = this.tagIDs[t];
        switch (this.treeAdapter.getNamespaceURI(this.items[t])) {
          case U.HTML: {
            if (Zr.has(n)) return true;
            if (Un.has(n)) return false;
            break;
          }
          case U.SVG: {
            if (as.has(n)) return false;
            break;
          }
          case U.MATHML: {
            if (ss.has(n)) return false;
            break;
          }
        }
      }
      return true;
    }
    hasInTableScope(t) {
      for (let n = this.stackTop; n >= 0; n--) if (this.treeAdapter.getNamespaceURI(this.items[n]) === U.HTML) switch (this.tagIDs[n]) {
        case t:
          return true;
        case c.TABLE:
        case c.HTML:
          return false;
      }
      return true;
    }
    hasTableBodyContextInTableScope() {
      for (let t = this.stackTop; t >= 0; t--) if (this.treeAdapter.getNamespaceURI(this.items[t]) === U.HTML) switch (this.tagIDs[t]) {
        case c.TBODY:
        case c.THEAD:
        case c.TFOOT:
          return true;
        case c.TABLE:
        case c.HTML:
          return false;
      }
      return true;
    }
    hasInSelectScope(t) {
      for (let n = this.stackTop; n >= 0; n--) if (this.treeAdapter.getNamespaceURI(this.items[n]) === U.HTML) switch (this.tagIDs[n]) {
        case t:
          return true;
        case c.OPTION:
        case c.OPTGROUP:
          break;
        default:
          return false;
      }
      return true;
    }
    generateImpliedEndTags() {
      for (; this.currentTagId !== void 0 && Io.has(this.currentTagId); ) this.pop();
    }
    generateImpliedEndTagsThoroughly() {
      for (; this.currentTagId !== void 0 && us.has(this.currentTagId); ) this.pop();
    }
    generateImpliedEndTagsWithExclusion(t) {
      for (; this.currentTagId !== void 0 && this.currentTagId !== t && us.has(this.currentTagId); ) this.pop();
    }
  }
  const Nr = 3;
  var we;
  (function(e) {
    e[e.Marker = 0] = "Marker", e[e.Element = 1] = "Element";
  })(we || (we = {}));
  const os = {
    type: we.Marker
  };
  class GE {
    constructor(t) {
      this.treeAdapter = t, this.entries = [], this.bookmark = null;
    }
    _getNoahArkConditionCandidates(t, n) {
      const r = [], i = n.length, u = this.treeAdapter.getTagName(t), s = this.treeAdapter.getNamespaceURI(t);
      for (let a = 0; a < this.entries.length; a++) {
        const o = this.entries[a];
        if (o.type === we.Marker) break;
        const { element: l } = o;
        if (this.treeAdapter.getTagName(l) === u && this.treeAdapter.getNamespaceURI(l) === s) {
          const h = this.treeAdapter.getAttrList(l);
          h.length === i && r.push({
            idx: a,
            attrs: h
          });
        }
      }
      return r;
    }
    _ensureNoahArkCondition(t) {
      if (this.entries.length < Nr) return;
      const n = this.treeAdapter.getAttrList(t), r = this._getNoahArkConditionCandidates(t, n);
      if (r.length < Nr) return;
      const i = new Map(n.map((s) => [
        s.name,
        s.value
      ]));
      let u = 0;
      for (let s = 0; s < r.length; s++) {
        const a = r[s];
        a.attrs.every((o) => i.get(o.name) === o.value) && (u += 1, u >= Nr && this.entries.splice(a.idx, 1));
      }
    }
    insertMarker() {
      this.entries.unshift(os);
    }
    pushElement(t, n) {
      this._ensureNoahArkCondition(t), this.entries.unshift({
        type: we.Element,
        element: t,
        token: n
      });
    }
    insertElementAfterBookmark(t, n) {
      const r = this.entries.indexOf(this.bookmark);
      this.entries.splice(r, 0, {
        type: we.Element,
        element: t,
        token: n
      });
    }
    removeEntry(t) {
      const n = this.entries.indexOf(t);
      n !== -1 && this.entries.splice(n, 1);
    }
    clearToLastMarker() {
      const t = this.entries.indexOf(os);
      t === -1 ? this.entries.length = 0 : this.entries.splice(0, t + 1);
    }
    getElementEntryInScopeWithTagName(t) {
      const n = this.entries.find((r) => r.type === we.Marker || this.treeAdapter.getTagName(r.element) === t);
      return n && n.type === we.Element ? n : null;
    }
    getElementEntry(t) {
      return this.entries.find((n) => n.type === we.Element && n.element === t);
    }
  }
  const Ve = {
    createDocument() {
      return {
        nodeName: "#document",
        mode: ke.NO_QUIRKS,
        childNodes: []
      };
    },
    createDocumentFragment() {
      return {
        nodeName: "#document-fragment",
        childNodes: []
      };
    },
    createElement(e, t, n) {
      return {
        nodeName: e,
        tagName: e,
        attrs: n,
        namespaceURI: t,
        childNodes: [],
        parentNode: null
      };
    },
    createCommentNode(e) {
      return {
        nodeName: "#comment",
        data: e,
        parentNode: null
      };
    },
    createTextNode(e) {
      return {
        nodeName: "#text",
        value: e,
        parentNode: null
      };
    },
    appendChild(e, t) {
      e.childNodes.push(t), t.parentNode = e;
    },
    insertBefore(e, t, n) {
      const r = e.childNodes.indexOf(n);
      e.childNodes.splice(r, 0, t), t.parentNode = e;
    },
    setTemplateContent(e, t) {
      e.content = t;
    },
    getTemplateContent(e) {
      return e.content;
    },
    setDocumentType(e, t, n, r) {
      const i = e.childNodes.find((u) => u.nodeName === "#documentType");
      if (i) i.name = t, i.publicId = n, i.systemId = r;
      else {
        const u = {
          nodeName: "#documentType",
          name: t,
          publicId: n,
          systemId: r,
          parentNode: null
        };
        Ve.appendChild(e, u);
      }
    },
    setDocumentMode(e, t) {
      e.mode = t;
    },
    getDocumentMode(e) {
      return e.mode;
    },
    detachNode(e) {
      if (e.parentNode) {
        const t = e.parentNode.childNodes.indexOf(e);
        e.parentNode.childNodes.splice(t, 1), e.parentNode = null;
      }
    },
    insertText(e, t) {
      if (e.childNodes.length > 0) {
        const n = e.childNodes[e.childNodes.length - 1];
        if (Ve.isTextNode(n)) {
          n.value += t;
          return;
        }
      }
      Ve.appendChild(e, Ve.createTextNode(t));
    },
    insertTextBefore(e, t, n) {
      const r = e.childNodes[e.childNodes.indexOf(n) - 1];
      r && Ve.isTextNode(r) ? r.value += t : Ve.insertBefore(e, Ve.createTextNode(t), n);
    },
    adoptAttributes(e, t) {
      const n = new Set(e.attrs.map((r) => r.name));
      for (let r = 0; r < t.length; r++) n.has(t[r].name) || e.attrs.push(t[r]);
    },
    getFirstChild(e) {
      return e.childNodes[0];
    },
    getChildNodes(e) {
      return e.childNodes;
    },
    getParentNode(e) {
      return e.parentNode;
    },
    getAttrList(e) {
      return e.attrs;
    },
    getTagName(e) {
      return e.tagName;
    },
    getNamespaceURI(e) {
      return e.namespaceURI;
    },
    getTextNodeContent(e) {
      return e.value;
    },
    getCommentNodeContent(e) {
      return e.data;
    },
    getDocumentTypeNodeName(e) {
      return e.name;
    },
    getDocumentTypeNodePublicId(e) {
      return e.publicId;
    },
    getDocumentTypeNodeSystemId(e) {
      return e.systemId;
    },
    isTextNode(e) {
      return e.nodeName === "#text";
    },
    isCommentNode(e) {
      return e.nodeName === "#comment";
    },
    isDocumentTypeNode(e) {
      return e.nodeName === "#documentType";
    },
    isElementNode(e) {
      return Object.prototype.hasOwnProperty.call(e, "tagName");
    },
    setNodeSourceCodeLocation(e, t) {
      e.sourceCodeLocation = t;
    },
    getNodeSourceCodeLocation(e) {
      return e.sourceCodeLocation;
    },
    updateNodeSourceCodeLocation(e, t) {
      e.sourceCodeLocation = {
        ...e.sourceCodeLocation,
        ...t
      };
    }
  }, No = "html", QE = "about:legacy-compat", XE = "http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd", So = [
    "+//silmaril//dtd html pro v0r11 19970101//",
    "-//as//dtd html 3.0 aswedit + extensions//",
    "-//advasoft ltd//dtd html 3.0 aswedit + extensions//",
    "-//ietf//dtd html 2.0 level 1//",
    "-//ietf//dtd html 2.0 level 2//",
    "-//ietf//dtd html 2.0 strict level 1//",
    "-//ietf//dtd html 2.0 strict level 2//",
    "-//ietf//dtd html 2.0 strict//",
    "-//ietf//dtd html 2.0//",
    "-//ietf//dtd html 2.1e//",
    "-//ietf//dtd html 3.0//",
    "-//ietf//dtd html 3.2 final//",
    "-//ietf//dtd html 3.2//",
    "-//ietf//dtd html 3//",
    "-//ietf//dtd html level 0//",
    "-//ietf//dtd html level 1//",
    "-//ietf//dtd html level 2//",
    "-//ietf//dtd html level 3//",
    "-//ietf//dtd html strict level 0//",
    "-//ietf//dtd html strict level 1//",
    "-//ietf//dtd html strict level 2//",
    "-//ietf//dtd html strict level 3//",
    "-//ietf//dtd html strict//",
    "-//ietf//dtd html//",
    "-//metrius//dtd metrius presentational//",
    "-//microsoft//dtd internet explorer 2.0 html strict//",
    "-//microsoft//dtd internet explorer 2.0 html//",
    "-//microsoft//dtd internet explorer 2.0 tables//",
    "-//microsoft//dtd internet explorer 3.0 html strict//",
    "-//microsoft//dtd internet explorer 3.0 html//",
    "-//microsoft//dtd internet explorer 3.0 tables//",
    "-//netscape comm. corp.//dtd html//",
    "-//netscape comm. corp.//dtd strict html//",
    "-//o'reilly and associates//dtd html 2.0//",
    "-//o'reilly and associates//dtd html extended 1.0//",
    "-//o'reilly and associates//dtd html extended relaxed 1.0//",
    "-//sq//dtd html 2.0 hotmetal + extensions//",
    "-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//",
    "-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//",
    "-//spyglass//dtd html 2.0 extended//",
    "-//sun microsystems corp.//dtd hotjava html//",
    "-//sun microsystems corp.//dtd hotjava strict html//",
    "-//w3c//dtd html 3 1995-03-24//",
    "-//w3c//dtd html 3.2 draft//",
    "-//w3c//dtd html 3.2 final//",
    "-//w3c//dtd html 3.2//",
    "-//w3c//dtd html 3.2s draft//",
    "-//w3c//dtd html 4.0 frameset//",
    "-//w3c//dtd html 4.0 transitional//",
    "-//w3c//dtd html experimental 19960712//",
    "-//w3c//dtd html experimental 970421//",
    "-//w3c//dtd w3 html//",
    "-//w3o//dtd w3 html 3.0//",
    "-//webtechs//dtd mozilla html 2.0//",
    "-//webtechs//dtd mozilla html//"
  ], JE = [
    ...So,
    "-//w3c//dtd html 4.01 frameset//",
    "-//w3c//dtd html 4.01 transitional//"
  ], ZE = /* @__PURE__ */ new Set([
    "-//w3o//dtd w3 html strict 3.0//en//",
    "-/w3c/dtd html 4.0 transitional/en",
    "html"
  ]), xo = [
    "-//w3c//dtd xhtml 1.0 frameset//",
    "-//w3c//dtd xhtml 1.0 transitional//"
  ], eg = [
    ...xo,
    "-//w3c//dtd html 4.01 frameset//",
    "-//w3c//dtd html 4.01 transitional//"
  ];
  function cs(e, t) {
    return t.some((n) => e.startsWith(n));
  }
  function tg(e) {
    return e.name === No && e.publicId === null && (e.systemId === null || e.systemId === QE);
  }
  function ng(e) {
    if (e.name !== No) return ke.QUIRKS;
    const { systemId: t } = e;
    if (t && t.toLowerCase() === XE) return ke.QUIRKS;
    let { publicId: n } = e;
    if (n !== null) {
      if (n = n.toLowerCase(), ZE.has(n)) return ke.QUIRKS;
      let r = t === null ? JE : So;
      if (cs(n, r)) return ke.QUIRKS;
      if (r = t === null ? xo : eg, cs(n, r)) return ke.LIMITED_QUIRKS;
    }
    return ke.NO_QUIRKS;
  }
  const ls = {
    TEXT_HTML: "text/html",
    APPLICATION_XML: "application/xhtml+xml"
  }, rg = "definitionurl", ig = "definitionURL", ug = new Map([
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan"
  ].map((e) => [
    e.toLowerCase(),
    e
  ])), sg = /* @__PURE__ */ new Map([
    [
      "xlink:actuate",
      {
        prefix: "xlink",
        name: "actuate",
        namespace: U.XLINK
      }
    ],
    [
      "xlink:arcrole",
      {
        prefix: "xlink",
        name: "arcrole",
        namespace: U.XLINK
      }
    ],
    [
      "xlink:href",
      {
        prefix: "xlink",
        name: "href",
        namespace: U.XLINK
      }
    ],
    [
      "xlink:role",
      {
        prefix: "xlink",
        name: "role",
        namespace: U.XLINK
      }
    ],
    [
      "xlink:show",
      {
        prefix: "xlink",
        name: "show",
        namespace: U.XLINK
      }
    ],
    [
      "xlink:title",
      {
        prefix: "xlink",
        name: "title",
        namespace: U.XLINK
      }
    ],
    [
      "xlink:type",
      {
        prefix: "xlink",
        name: "type",
        namespace: U.XLINK
      }
    ],
    [
      "xml:lang",
      {
        prefix: "xml",
        name: "lang",
        namespace: U.XML
      }
    ],
    [
      "xml:space",
      {
        prefix: "xml",
        name: "space",
        namespace: U.XML
      }
    ],
    [
      "xmlns",
      {
        prefix: "",
        name: "xmlns",
        namespace: U.XMLNS
      }
    ],
    [
      "xmlns:xlink",
      {
        prefix: "xmlns",
        name: "xlink",
        namespace: U.XMLNS
      }
    ]
  ]), ag = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath"
  ].map((e) => [
    e.toLowerCase(),
    e
  ])), og = /* @__PURE__ */ new Set([
    c.B,
    c.BIG,
    c.BLOCKQUOTE,
    c.BODY,
    c.BR,
    c.CENTER,
    c.CODE,
    c.DD,
    c.DIV,
    c.DL,
    c.DT,
    c.EM,
    c.EMBED,
    c.H1,
    c.H2,
    c.H3,
    c.H4,
    c.H5,
    c.H6,
    c.HEAD,
    c.HR,
    c.I,
    c.IMG,
    c.LI,
    c.LISTING,
    c.MENU,
    c.META,
    c.NOBR,
    c.OL,
    c.P,
    c.PRE,
    c.RUBY,
    c.S,
    c.SMALL,
    c.SPAN,
    c.STRONG,
    c.STRIKE,
    c.SUB,
    c.SUP,
    c.TABLE,
    c.TT,
    c.U,
    c.UL,
    c.VAR
  ]);
  function cg(e) {
    const t = e.tagID;
    return t === c.FONT && e.attrs.some(({ name: r }) => r === it.COLOR || r === it.SIZE || r === it.FACE) || og.has(t);
  }
  function Lo(e) {
    for (let t = 0; t < e.attrs.length; t++) if (e.attrs[t].name === rg) {
      e.attrs[t].name = ig;
      break;
    }
  }
  function Fo(e) {
    for (let t = 0; t < e.attrs.length; t++) {
      const n = ug.get(e.attrs[t].name);
      n != null && (e.attrs[t].name = n);
    }
  }
  function Ri(e) {
    for (let t = 0; t < e.attrs.length; t++) {
      const n = sg.get(e.attrs[t].name);
      n && (e.attrs[t].prefix = n.prefix, e.attrs[t].name = n.name, e.attrs[t].namespace = n.namespace);
    }
  }
  function lg(e) {
    const t = ag.get(e.tagName);
    t != null && (e.tagName = t, e.tagID = xt(e.tagName));
  }
  function fg(e, t) {
    return t === U.MATHML && (e === c.MI || e === c.MO || e === c.MN || e === c.MS || e === c.MTEXT);
  }
  function hg(e, t, n) {
    if (t === U.MATHML && e === c.ANNOTATION_XML) {
      for (let r = 0; r < n.length; r++) if (n[r].name === it.ENCODING) {
        const i = n[r].value.toLowerCase();
        return i === ls.TEXT_HTML || i === ls.APPLICATION_XML;
      }
    }
    return t === U.SVG && (e === c.FOREIGN_OBJECT || e === c.DESC || e === c.TITLE);
  }
  function pg(e, t, n, r) {
    return (!r || r === U.HTML) && hg(e, t, n) || (!r || r === U.MATHML) && fg(e, t);
  }
  const dg = "hidden", mg = 8, Eg = 3;
  var T;
  (function(e) {
    e[e.INITIAL = 0] = "INITIAL", e[e.BEFORE_HTML = 1] = "BEFORE_HTML", e[e.BEFORE_HEAD = 2] = "BEFORE_HEAD", e[e.IN_HEAD = 3] = "IN_HEAD", e[e.IN_HEAD_NO_SCRIPT = 4] = "IN_HEAD_NO_SCRIPT", e[e.AFTER_HEAD = 5] = "AFTER_HEAD", e[e.IN_BODY = 6] = "IN_BODY", e[e.TEXT = 7] = "TEXT", e[e.IN_TABLE = 8] = "IN_TABLE", e[e.IN_TABLE_TEXT = 9] = "IN_TABLE_TEXT", e[e.IN_CAPTION = 10] = "IN_CAPTION", e[e.IN_COLUMN_GROUP = 11] = "IN_COLUMN_GROUP", e[e.IN_TABLE_BODY = 12] = "IN_TABLE_BODY", e[e.IN_ROW = 13] = "IN_ROW", e[e.IN_CELL = 14] = "IN_CELL", e[e.IN_SELECT = 15] = "IN_SELECT", e[e.IN_SELECT_IN_TABLE = 16] = "IN_SELECT_IN_TABLE", e[e.IN_TEMPLATE = 17] = "IN_TEMPLATE", e[e.AFTER_BODY = 18] = "AFTER_BODY", e[e.IN_FRAMESET = 19] = "IN_FRAMESET", e[e.AFTER_FRAMESET = 20] = "AFTER_FRAMESET", e[e.AFTER_AFTER_BODY = 21] = "AFTER_AFTER_BODY", e[e.AFTER_AFTER_FRAMESET = 22] = "AFTER_AFTER_FRAMESET";
  })(T || (T = {}));
  const gg = {
    startLine: -1,
    startCol: -1,
    startOffset: -1,
    endLine: -1,
    endCol: -1,
    endOffset: -1
  }, Oo = /* @__PURE__ */ new Set([
    c.TABLE,
    c.TBODY,
    c.TFOOT,
    c.THEAD,
    c.TR
  ]), fs = {
    scriptingEnabled: true,
    sourceCodeLocationInfo: false,
    treeAdapter: Ve,
    onParseError: null
  };
  class hs {
    constructor(t, n, r = null, i = null) {
      this.fragmentContext = r, this.scriptHandler = i, this.currentToken = null, this.stopped = false, this.insertionMode = T.INITIAL, this.originalInsertionMode = T.INITIAL, this.headElement = null, this.formElement = null, this.currentNotInHTML = false, this.tmplInsertionModeStack = [], this.pendingCharacterTokens = [], this.hasNonWhitespacePendingCharacterToken = false, this.framesetOk = true, this.skipNextNewLine = false, this.fosterParentingEnabled = false, this.options = {
        ...fs,
        ...t
      }, this.treeAdapter = this.options.treeAdapter, this.onParseError = this.options.onParseError, this.onParseError && (this.options.sourceCodeLocationInfo = true), this.document = n ?? this.treeAdapter.createDocument(), this.tokenizer = new zE(this.options, this), this.activeFormattingElements = new GE(this.treeAdapter), this.fragmentContextID = r ? xt(this.treeAdapter.getTagName(r)) : c.UNKNOWN, this._setContextModes(r ?? this.document, this.fragmentContextID), this.openElements = new WE(this.document, this.treeAdapter, this);
    }
    static parse(t, n) {
      const r = new this(n);
      return r.tokenizer.write(t, true), r.document;
    }
    static getFragmentParser(t, n) {
      const r = {
        ...fs,
        ...n
      };
      t ?? (t = r.treeAdapter.createElement(N.TEMPLATE, U.HTML, []));
      const i = r.treeAdapter.createElement("documentmock", U.HTML, []), u = new this(r, i, t);
      return u.fragmentContextID === c.TEMPLATE && u.tmplInsertionModeStack.unshift(T.IN_TEMPLATE), u._initTokenizerForFragmentParsing(), u._insertFakeRootElement(), u._resetInsertionMode(), u._findFormInFragmentContext(), u;
    }
    getFragment() {
      const t = this.treeAdapter.getFirstChild(this.document), n = this.treeAdapter.createDocumentFragment();
      return this._adoptNodes(t, n), n;
    }
    _err(t, n, r) {
      var i;
      if (!this.onParseError) return;
      const u = (i = t.location) !== null && i !== void 0 ? i : gg, s = {
        code: n,
        startLine: u.startLine,
        startCol: u.startCol,
        startOffset: u.startOffset,
        endLine: r ? u.startLine : u.endLine,
        endCol: r ? u.startCol : u.endCol,
        endOffset: r ? u.startOffset : u.endOffset
      };
      this.onParseError(s);
    }
    onItemPush(t, n, r) {
      var i, u;
      (u = (i = this.treeAdapter).onItemPush) === null || u === void 0 || u.call(i, t), r && this.openElements.stackTop > 0 && this._setContextModes(t, n);
    }
    onItemPop(t, n) {
      var r, i;
      if (this.options.sourceCodeLocationInfo && this._setEndLocation(t, this.currentToken), (i = (r = this.treeAdapter).onItemPop) === null || i === void 0 || i.call(r, t, this.openElements.current), n) {
        let u, s;
        this.openElements.stackTop === 0 && this.fragmentContext ? (u = this.fragmentContext, s = this.fragmentContextID) : { current: u, currentTagId: s } = this.openElements, this._setContextModes(u, s);
      }
    }
    _setContextModes(t, n) {
      const r = t === this.document || t && this.treeAdapter.getNamespaceURI(t) === U.HTML;
      this.currentNotInHTML = !r, this.tokenizer.inForeignNode = !r && t !== void 0 && n !== void 0 && !this._isIntegrationPoint(n, t);
    }
    _switchToTextParsing(t, n) {
      this._insertElement(t, U.HTML), this.tokenizer.state = n, this.originalInsertionMode = this.insertionMode, this.insertionMode = T.TEXT;
    }
    switchToPlaintextParsing() {
      this.insertionMode = T.TEXT, this.originalInsertionMode = T.IN_BODY, this.tokenizer.state = ce.PLAINTEXT;
    }
    _getAdjustedCurrentElement() {
      return this.openElements.stackTop === 0 && this.fragmentContext ? this.fragmentContext : this.openElements.current;
    }
    _findFormInFragmentContext() {
      let t = this.fragmentContext;
      for (; t; ) {
        if (this.treeAdapter.getTagName(t) === N.FORM) {
          this.formElement = t;
          break;
        }
        t = this.treeAdapter.getParentNode(t);
      }
    }
    _initTokenizerForFragmentParsing() {
      if (!(!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== U.HTML)) switch (this.fragmentContextID) {
        case c.TITLE:
        case c.TEXTAREA: {
          this.tokenizer.state = ce.RCDATA;
          break;
        }
        case c.STYLE:
        case c.XMP:
        case c.IFRAME:
        case c.NOEMBED:
        case c.NOFRAMES:
        case c.NOSCRIPT: {
          this.tokenizer.state = ce.RAWTEXT;
          break;
        }
        case c.SCRIPT: {
          this.tokenizer.state = ce.SCRIPT_DATA;
          break;
        }
        case c.PLAINTEXT: {
          this.tokenizer.state = ce.PLAINTEXT;
          break;
        }
      }
    }
    _setDocumentType(t) {
      const n = t.name || "", r = t.publicId || "", i = t.systemId || "";
      if (this.treeAdapter.setDocumentType(this.document, n, r, i), t.location) {
        const s = this.treeAdapter.getChildNodes(this.document).find((a) => this.treeAdapter.isDocumentTypeNode(a));
        s && this.treeAdapter.setNodeSourceCodeLocation(s, t.location);
      }
    }
    _attachElementToTree(t, n) {
      if (this.options.sourceCodeLocationInfo) {
        const r = n && {
          ...n,
          startTag: n
        };
        this.treeAdapter.setNodeSourceCodeLocation(t, r);
      }
      if (this._shouldFosterParentOnInsertion()) this._fosterParentElement(t);
      else {
        const r = this.openElements.currentTmplContentOrNode;
        this.treeAdapter.appendChild(r ?? this.document, t);
      }
    }
    _appendElement(t, n) {
      const r = this.treeAdapter.createElement(t.tagName, n, t.attrs);
      this._attachElementToTree(r, t.location);
    }
    _insertElement(t, n) {
      const r = this.treeAdapter.createElement(t.tagName, n, t.attrs);
      this._attachElementToTree(r, t.location), this.openElements.push(r, t.tagID);
    }
    _insertFakeElement(t, n) {
      const r = this.treeAdapter.createElement(t, U.HTML, []);
      this._attachElementToTree(r, null), this.openElements.push(r, n);
    }
    _insertTemplate(t) {
      const n = this.treeAdapter.createElement(t.tagName, U.HTML, t.attrs), r = this.treeAdapter.createDocumentFragment();
      this.treeAdapter.setTemplateContent(n, r), this._attachElementToTree(n, t.location), this.openElements.push(n, t.tagID), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(r, null);
    }
    _insertFakeRootElement() {
      const t = this.treeAdapter.createElement(N.HTML, U.HTML, []);
      this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(t, null), this.treeAdapter.appendChild(this.openElements.current, t), this.openElements.push(t, c.HTML);
    }
    _appendCommentNode(t, n) {
      const r = this.treeAdapter.createCommentNode(t.data);
      this.treeAdapter.appendChild(n, r), this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(r, t.location);
    }
    _insertCharacters(t) {
      let n, r;
      if (this._shouldFosterParentOnInsertion() ? ({ parent: n, beforeElement: r } = this._findFosterParentingLocation(), r ? this.treeAdapter.insertTextBefore(n, t.chars, r) : this.treeAdapter.insertText(n, t.chars)) : (n = this.openElements.currentTmplContentOrNode, this.treeAdapter.insertText(n, t.chars)), !t.location) return;
      const i = this.treeAdapter.getChildNodes(n), u = r ? i.lastIndexOf(r) : i.length, s = i[u - 1];
      if (this.treeAdapter.getNodeSourceCodeLocation(s)) {
        const { endLine: o, endCol: l, endOffset: h } = t.location;
        this.treeAdapter.updateNodeSourceCodeLocation(s, {
          endLine: o,
          endCol: l,
          endOffset: h
        });
      } else this.options.sourceCodeLocationInfo && this.treeAdapter.setNodeSourceCodeLocation(s, t.location);
    }
    _adoptNodes(t, n) {
      for (let r = this.treeAdapter.getFirstChild(t); r; r = this.treeAdapter.getFirstChild(t)) this.treeAdapter.detachNode(r), this.treeAdapter.appendChild(n, r);
    }
    _setEndLocation(t, n) {
      if (this.treeAdapter.getNodeSourceCodeLocation(t) && n.location) {
        const r = n.location, i = this.treeAdapter.getTagName(t), u = n.type === te.END_TAG && i === n.tagName ? {
          endTag: {
            ...r
          },
          endLine: r.endLine,
          endCol: r.endCol,
          endOffset: r.endOffset
        } : {
          endLine: r.startLine,
          endCol: r.startCol,
          endOffset: r.startOffset
        };
        this.treeAdapter.updateNodeSourceCodeLocation(t, u);
      }
    }
    shouldProcessStartTagTokenInForeignContent(t) {
      if (!this.currentNotInHTML) return false;
      let n, r;
      return this.openElements.stackTop === 0 && this.fragmentContext ? (n = this.fragmentContext, r = this.fragmentContextID) : { current: n, currentTagId: r } = this.openElements, t.tagID === c.SVG && this.treeAdapter.getTagName(n) === N.ANNOTATION_XML && this.treeAdapter.getNamespaceURI(n) === U.MATHML ? false : this.tokenizer.inForeignNode || (t.tagID === c.MGLYPH || t.tagID === c.MALIGNMARK) && r !== void 0 && !this._isIntegrationPoint(r, n, U.HTML);
    }
    _processToken(t) {
      switch (t.type) {
        case te.CHARACTER: {
          this.onCharacter(t);
          break;
        }
        case te.NULL_CHARACTER: {
          this.onNullCharacter(t);
          break;
        }
        case te.COMMENT: {
          this.onComment(t);
          break;
        }
        case te.DOCTYPE: {
          this.onDoctype(t);
          break;
        }
        case te.START_TAG: {
          this._processStartTag(t);
          break;
        }
        case te.END_TAG: {
          this.onEndTag(t);
          break;
        }
        case te.EOF: {
          this.onEof(t);
          break;
        }
        case te.WHITESPACE_CHARACTER: {
          this.onWhitespaceCharacter(t);
          break;
        }
      }
    }
    _isIntegrationPoint(t, n, r) {
      const i = this.treeAdapter.getNamespaceURI(n), u = this.treeAdapter.getAttrList(n);
      return pg(t, i, u, r);
    }
    _reconstructActiveFormattingElements() {
      const t = this.activeFormattingElements.entries.length;
      if (t) {
        const n = this.activeFormattingElements.entries.findIndex((i) => i.type === we.Marker || this.openElements.contains(i.element)), r = n === -1 ? t - 1 : n - 1;
        for (let i = r; i >= 0; i--) {
          const u = this.activeFormattingElements.entries[i];
          this._insertElement(u.token, this.treeAdapter.getNamespaceURI(u.element)), u.element = this.openElements.current;
        }
      }
    }
    _closeTableCell() {
      this.openElements.generateImpliedEndTags(), this.openElements.popUntilTableCellPopped(), this.activeFormattingElements.clearToLastMarker(), this.insertionMode = T.IN_ROW;
    }
    _closePElement() {
      this.openElements.generateImpliedEndTagsWithExclusion(c.P), this.openElements.popUntilTagNamePopped(c.P);
    }
    _resetInsertionMode() {
      for (let t = this.openElements.stackTop; t >= 0; t--) switch (t === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[t]) {
        case c.TR: {
          this.insertionMode = T.IN_ROW;
          return;
        }
        case c.TBODY:
        case c.THEAD:
        case c.TFOOT: {
          this.insertionMode = T.IN_TABLE_BODY;
          return;
        }
        case c.CAPTION: {
          this.insertionMode = T.IN_CAPTION;
          return;
        }
        case c.COLGROUP: {
          this.insertionMode = T.IN_COLUMN_GROUP;
          return;
        }
        case c.TABLE: {
          this.insertionMode = T.IN_TABLE;
          return;
        }
        case c.BODY: {
          this.insertionMode = T.IN_BODY;
          return;
        }
        case c.FRAMESET: {
          this.insertionMode = T.IN_FRAMESET;
          return;
        }
        case c.SELECT: {
          this._resetInsertionModeForSelect(t);
          return;
        }
        case c.TEMPLATE: {
          this.insertionMode = this.tmplInsertionModeStack[0];
          return;
        }
        case c.HTML: {
          this.insertionMode = this.headElement ? T.AFTER_HEAD : T.BEFORE_HEAD;
          return;
        }
        case c.TD:
        case c.TH: {
          if (t > 0) {
            this.insertionMode = T.IN_CELL;
            return;
          }
          break;
        }
        case c.HEAD: {
          if (t > 0) {
            this.insertionMode = T.IN_HEAD;
            return;
          }
          break;
        }
      }
      this.insertionMode = T.IN_BODY;
    }
    _resetInsertionModeForSelect(t) {
      if (t > 0) for (let n = t - 1; n > 0; n--) {
        const r = this.openElements.tagIDs[n];
        if (r === c.TEMPLATE) break;
        if (r === c.TABLE) {
          this.insertionMode = T.IN_SELECT_IN_TABLE;
          return;
        }
      }
      this.insertionMode = T.IN_SELECT;
    }
    _isElementCausesFosterParenting(t) {
      return Oo.has(t);
    }
    _shouldFosterParentOnInsertion() {
      return this.fosterParentingEnabled && this.openElements.currentTagId !== void 0 && this._isElementCausesFosterParenting(this.openElements.currentTagId);
    }
    _findFosterParentingLocation() {
      for (let t = this.openElements.stackTop; t >= 0; t--) {
        const n = this.openElements.items[t];
        switch (this.openElements.tagIDs[t]) {
          case c.TEMPLATE: {
            if (this.treeAdapter.getNamespaceURI(n) === U.HTML) return {
              parent: this.treeAdapter.getTemplateContent(n),
              beforeElement: null
            };
            break;
          }
          case c.TABLE: {
            const r = this.treeAdapter.getParentNode(n);
            return r ? {
              parent: r,
              beforeElement: n
            } : {
              parent: this.openElements.items[t - 1],
              beforeElement: null
            };
          }
        }
      }
      return {
        parent: this.openElements.items[0],
        beforeElement: null
      };
    }
    _fosterParentElement(t) {
      const n = this._findFosterParentingLocation();
      n.beforeElement ? this.treeAdapter.insertBefore(n.parent, t, n.beforeElement) : this.treeAdapter.appendChild(n.parent, t);
    }
    _isSpecialElement(t, n) {
      const r = this.treeAdapter.getNamespaceURI(t);
      return ME[r].has(n);
    }
    onCharacter(t) {
      if (this.skipNextNewLine = false, this.tokenizer.inForeignNode) {
        Kb(this, t);
        return;
      }
      switch (this.insertionMode) {
        case T.INITIAL: {
          Ut(this, t);
          break;
        }
        case T.BEFORE_HTML: {
          Wt(this, t);
          break;
        }
        case T.BEFORE_HEAD: {
          Gt(this, t);
          break;
        }
        case T.IN_HEAD: {
          Qt(this, t);
          break;
        }
        case T.IN_HEAD_NO_SCRIPT: {
          Xt(this, t);
          break;
        }
        case T.AFTER_HEAD: {
          Jt(this, t);
          break;
        }
        case T.IN_BODY:
        case T.IN_CAPTION:
        case T.IN_CELL:
        case T.IN_TEMPLATE: {
          Ro(this, t);
          break;
        }
        case T.TEXT:
        case T.IN_SELECT:
        case T.IN_SELECT_IN_TABLE: {
          this._insertCharacters(t);
          break;
        }
        case T.IN_TABLE:
        case T.IN_TABLE_BODY:
        case T.IN_ROW: {
          Sr(this, t);
          break;
        }
        case T.IN_TABLE_TEXT: {
          vo(this, t);
          break;
        }
        case T.IN_COLUMN_GROUP: {
          Hn(this, t);
          break;
        }
        case T.AFTER_BODY: {
          vn(this, t);
          break;
        }
        case T.AFTER_AFTER_BODY: {
          xn(this, t);
          break;
        }
      }
    }
    onNullCharacter(t) {
      if (this.skipNextNewLine = false, this.tokenizer.inForeignNode) {
        Vb(this, t);
        return;
      }
      switch (this.insertionMode) {
        case T.INITIAL: {
          Ut(this, t);
          break;
        }
        case T.BEFORE_HTML: {
          Wt(this, t);
          break;
        }
        case T.BEFORE_HEAD: {
          Gt(this, t);
          break;
        }
        case T.IN_HEAD: {
          Qt(this, t);
          break;
        }
        case T.IN_HEAD_NO_SCRIPT: {
          Xt(this, t);
          break;
        }
        case T.AFTER_HEAD: {
          Jt(this, t);
          break;
        }
        case T.TEXT: {
          this._insertCharacters(t);
          break;
        }
        case T.IN_TABLE:
        case T.IN_TABLE_BODY:
        case T.IN_ROW: {
          Sr(this, t);
          break;
        }
        case T.IN_COLUMN_GROUP: {
          Hn(this, t);
          break;
        }
        case T.AFTER_BODY: {
          vn(this, t);
          break;
        }
        case T.AFTER_AFTER_BODY: {
          xn(this, t);
          break;
        }
      }
    }
    onComment(t) {
      if (this.skipNextNewLine = false, this.currentNotInHTML) {
        ei(this, t);
        return;
      }
      switch (this.insertionMode) {
        case T.INITIAL:
        case T.BEFORE_HTML:
        case T.BEFORE_HEAD:
        case T.IN_HEAD:
        case T.IN_HEAD_NO_SCRIPT:
        case T.AFTER_HEAD:
        case T.IN_BODY:
        case T.IN_TABLE:
        case T.IN_CAPTION:
        case T.IN_COLUMN_GROUP:
        case T.IN_TABLE_BODY:
        case T.IN_ROW:
        case T.IN_CELL:
        case T.IN_SELECT:
        case T.IN_SELECT_IN_TABLE:
        case T.IN_TEMPLATE:
        case T.IN_FRAMESET:
        case T.AFTER_FRAMESET: {
          ei(this, t);
          break;
        }
        case T.IN_TABLE_TEXT: {
          Ht(this, t);
          break;
        }
        case T.AFTER_BODY: {
          yg(this, t);
          break;
        }
        case T.AFTER_AFTER_BODY:
        case T.AFTER_AFTER_FRAMESET: {
          kg(this, t);
          break;
        }
      }
    }
    onDoctype(t) {
      switch (this.skipNextNewLine = false, this.insertionMode) {
        case T.INITIAL: {
          Ig(this, t);
          break;
        }
        case T.BEFORE_HEAD:
        case T.IN_HEAD:
        case T.IN_HEAD_NO_SCRIPT:
        case T.AFTER_HEAD: {
          this._err(t, F.misplacedDoctype);
          break;
        }
        case T.IN_TABLE_TEXT: {
          Ht(this, t);
          break;
        }
      }
    }
    onStartTag(t) {
      this.skipNextNewLine = false, this.currentToken = t, this._processStartTag(t), t.selfClosing && !t.ackSelfClosing && this._err(t, F.nonVoidHtmlElementStartTagWithTrailingSolidus);
    }
    _processStartTag(t) {
      this.shouldProcessStartTagTokenInForeignContent(t) ? Wb(this, t) : this._startTagOutsideForeignContent(t);
    }
    _startTagOutsideForeignContent(t) {
      switch (this.insertionMode) {
        case T.INITIAL: {
          Ut(this, t);
          break;
        }
        case T.BEFORE_HTML: {
          Ng(this, t);
          break;
        }
        case T.BEFORE_HEAD: {
          xg(this, t);
          break;
        }
        case T.IN_HEAD: {
          Fe(this, t);
          break;
        }
        case T.IN_HEAD_NO_SCRIPT: {
          Og(this, t);
          break;
        }
        case T.AFTER_HEAD: {
          Rg(this, t);
          break;
        }
        case T.IN_BODY: {
          be(this, t);
          break;
        }
        case T.IN_TABLE: {
          Dt(this, t);
          break;
        }
        case T.IN_TABLE_TEXT: {
          Ht(this, t);
          break;
        }
        case T.IN_CAPTION: {
          Lb(this, t);
          break;
        }
        case T.IN_COLUMN_GROUP: {
          Mi(this, t);
          break;
        }
        case T.IN_TABLE_BODY: {
          nr(this, t);
          break;
        }
        case T.IN_ROW: {
          rr(this, t);
          break;
        }
        case T.IN_CELL: {
          wb(this, t);
          break;
        }
        case T.IN_SELECT: {
          qo(this, t);
          break;
        }
        case T.IN_SELECT_IN_TABLE: {
          Bb(this, t);
          break;
        }
        case T.IN_TEMPLATE: {
          Mb(this, t);
          break;
        }
        case T.AFTER_BODY: {
          Hb(this, t);
          break;
        }
        case T.IN_FRAMESET: {
          vb(this, t);
          break;
        }
        case T.AFTER_FRAMESET: {
          Yb(this, t);
          break;
        }
        case T.AFTER_AFTER_BODY: {
          $b(this, t);
          break;
        }
        case T.AFTER_AFTER_FRAMESET: {
          jb(this, t);
          break;
        }
      }
    }
    onEndTag(t) {
      this.skipNextNewLine = false, this.currentToken = t, this.currentNotInHTML ? Gb(this, t) : this._endTagOutsideForeignContent(t);
    }
    _endTagOutsideForeignContent(t) {
      switch (this.insertionMode) {
        case T.INITIAL: {
          Ut(this, t);
          break;
        }
        case T.BEFORE_HTML: {
          Sg(this, t);
          break;
        }
        case T.BEFORE_HEAD: {
          Lg(this, t);
          break;
        }
        case T.IN_HEAD: {
          Fg(this, t);
          break;
        }
        case T.IN_HEAD_NO_SCRIPT: {
          wg(this, t);
          break;
        }
        case T.AFTER_HEAD: {
          Bg(this, t);
          break;
        }
        case T.IN_BODY: {
          tr(this, t);
          break;
        }
        case T.TEXT: {
          Ab(this, t);
          break;
        }
        case T.IN_TABLE: {
          un(this, t);
          break;
        }
        case T.IN_TABLE_TEXT: {
          Ht(this, t);
          break;
        }
        case T.IN_CAPTION: {
          Fb(this, t);
          break;
        }
        case T.IN_COLUMN_GROUP: {
          Ob(this, t);
          break;
        }
        case T.IN_TABLE_BODY: {
          ti(this, t);
          break;
        }
        case T.IN_ROW: {
          Yo(this, t);
          break;
        }
        case T.IN_CELL: {
          Rb(this, t);
          break;
        }
        case T.IN_SELECT: {
          $o(this, t);
          break;
        }
        case T.IN_SELECT_IN_TABLE: {
          Pb(this, t);
          break;
        }
        case T.IN_TEMPLATE: {
          Ub(this, t);
          break;
        }
        case T.AFTER_BODY: {
          Vo(this, t);
          break;
        }
        case T.IN_FRAMESET: {
          zb(this, t);
          break;
        }
        case T.AFTER_FRAMESET: {
          qb(this, t);
          break;
        }
        case T.AFTER_AFTER_BODY: {
          xn(this, t);
          break;
        }
      }
    }
    onEof(t) {
      switch (this.insertionMode) {
        case T.INITIAL: {
          Ut(this, t);
          break;
        }
        case T.BEFORE_HTML: {
          Wt(this, t);
          break;
        }
        case T.BEFORE_HEAD: {
          Gt(this, t);
          break;
        }
        case T.IN_HEAD: {
          Qt(this, t);
          break;
        }
        case T.IN_HEAD_NO_SCRIPT: {
          Xt(this, t);
          break;
        }
        case T.AFTER_HEAD: {
          Jt(this, t);
          break;
        }
        case T.IN_BODY:
        case T.IN_TABLE:
        case T.IN_CAPTION:
        case T.IN_COLUMN_GROUP:
        case T.IN_TABLE_BODY:
        case T.IN_ROW:
        case T.IN_CELL:
        case T.IN_SELECT:
        case T.IN_SELECT_IN_TABLE: {
          Uo(this, t);
          break;
        }
        case T.TEXT: {
          Cb(this, t);
          break;
        }
        case T.IN_TABLE_TEXT: {
          Ht(this, t);
          break;
        }
        case T.IN_TEMPLATE: {
          jo(this, t);
          break;
        }
        case T.AFTER_BODY:
        case T.IN_FRAMESET:
        case T.AFTER_FRAMESET:
        case T.AFTER_AFTER_BODY:
        case T.AFTER_AFTER_FRAMESET: {
          Pi(this, t);
          break;
        }
      }
    }
    onWhitespaceCharacter(t) {
      if (this.skipNextNewLine && (this.skipNextNewLine = false, t.chars.charCodeAt(0) === g.LINE_FEED)) {
        if (t.chars.length === 1) return;
        t.chars = t.chars.substr(1);
      }
      if (this.tokenizer.inForeignNode) {
        this._insertCharacters(t);
        return;
      }
      switch (this.insertionMode) {
        case T.IN_HEAD:
        case T.IN_HEAD_NO_SCRIPT:
        case T.AFTER_HEAD:
        case T.TEXT:
        case T.IN_COLUMN_GROUP:
        case T.IN_SELECT:
        case T.IN_SELECT_IN_TABLE:
        case T.IN_FRAMESET:
        case T.AFTER_FRAMESET: {
          this._insertCharacters(t);
          break;
        }
        case T.IN_BODY:
        case T.IN_CAPTION:
        case T.IN_CELL:
        case T.IN_TEMPLATE:
        case T.AFTER_BODY:
        case T.AFTER_AFTER_BODY:
        case T.AFTER_AFTER_FRAMESET: {
          wo(this, t);
          break;
        }
        case T.IN_TABLE:
        case T.IN_TABLE_BODY:
        case T.IN_ROW: {
          Sr(this, t);
          break;
        }
        case T.IN_TABLE_TEXT: {
          Ho(this, t);
          break;
        }
      }
    }
  }
  function bg(e, t) {
    let n = e.activeFormattingElements.getElementEntryInScopeWithTagName(t.tagName);
    return n ? e.openElements.contains(n.element) ? e.openElements.hasInScope(t.tagID) || (n = null) : (e.activeFormattingElements.removeEntry(n), n = null) : Mo(e, t), n;
  }
  function Tg(e, t) {
    let n = null, r = e.openElements.stackTop;
    for (; r >= 0; r--) {
      const i = e.openElements.items[r];
      if (i === t.element) break;
      e._isSpecialElement(i, e.openElements.tagIDs[r]) && (n = i);
    }
    return n || (e.openElements.shortenToLength(Math.max(r, 0)), e.activeFormattingElements.removeEntry(t)), n;
  }
  function Ag(e, t, n) {
    let r = t, i = e.openElements.getCommonAncestor(t);
    for (let u = 0, s = i; s !== n; u++, s = i) {
      i = e.openElements.getCommonAncestor(s);
      const a = e.activeFormattingElements.getElementEntry(s), o = a && u >= Eg;
      !a || o ? (o && e.activeFormattingElements.removeEntry(a), e.openElements.remove(s)) : (s = Cg(e, a), r === t && (e.activeFormattingElements.bookmark = a), e.treeAdapter.detachNode(r), e.treeAdapter.appendChild(s, r), r = s);
    }
    return r;
  }
  function Cg(e, t) {
    const n = e.treeAdapter.getNamespaceURI(t.element), r = e.treeAdapter.createElement(t.token.tagName, n, t.token.attrs);
    return e.openElements.replace(t.element, r), t.element = r, r;
  }
  function _g(e, t, n) {
    const r = e.treeAdapter.getTagName(t), i = xt(r);
    if (e._isElementCausesFosterParenting(i)) e._fosterParentElement(n);
    else {
      const u = e.treeAdapter.getNamespaceURI(t);
      i === c.TEMPLATE && u === U.HTML && (t = e.treeAdapter.getTemplateContent(t)), e.treeAdapter.appendChild(t, n);
    }
  }
  function Dg(e, t, n) {
    const r = e.treeAdapter.getNamespaceURI(n.element), { token: i } = n, u = e.treeAdapter.createElement(i.tagName, r, i.attrs);
    e._adoptNodes(t, u), e.treeAdapter.appendChild(t, u), e.activeFormattingElements.insertElementAfterBookmark(u, i), e.activeFormattingElements.removeEntry(n), e.openElements.remove(n.element), e.openElements.insertAfter(t, u, i.tagID);
  }
  function Bi(e, t) {
    for (let n = 0; n < mg; n++) {
      const r = bg(e, t);
      if (!r) break;
      const i = Tg(e, r);
      if (!i) break;
      e.activeFormattingElements.bookmark = r;
      const u = Ag(e, i, r.element), s = e.openElements.getCommonAncestor(r.element);
      e.treeAdapter.detachNode(u), s && _g(e, s, u), Dg(e, i, r);
    }
  }
  function ei(e, t) {
    e._appendCommentNode(t, e.openElements.currentTmplContentOrNode);
  }
  function yg(e, t) {
    e._appendCommentNode(t, e.openElements.items[0]);
  }
  function kg(e, t) {
    e._appendCommentNode(t, e.document);
  }
  function Pi(e, t) {
    if (e.stopped = true, t.location) {
      const n = e.fragmentContext ? 0 : 2;
      for (let r = e.openElements.stackTop; r >= n; r--) e._setEndLocation(e.openElements.items[r], t);
      if (!e.fragmentContext && e.openElements.stackTop >= 0) {
        const r = e.openElements.items[0], i = e.treeAdapter.getNodeSourceCodeLocation(r);
        if (i && !i.endTag && (e._setEndLocation(r, t), e.openElements.stackTop >= 1)) {
          const u = e.openElements.items[1], s = e.treeAdapter.getNodeSourceCodeLocation(u);
          s && !s.endTag && e._setEndLocation(u, t);
        }
      }
    }
  }
  function Ig(e, t) {
    e._setDocumentType(t);
    const n = t.forceQuirks ? ke.QUIRKS : ng(t);
    tg(t) || e._err(t, F.nonConformingDoctype), e.treeAdapter.setDocumentMode(e.document, n), e.insertionMode = T.BEFORE_HTML;
  }
  function Ut(e, t) {
    e._err(t, F.missingDoctype, true), e.treeAdapter.setDocumentMode(e.document, ke.QUIRKS), e.insertionMode = T.BEFORE_HTML, e._processToken(t);
  }
  function Ng(e, t) {
    t.tagID === c.HTML ? (e._insertElement(t, U.HTML), e.insertionMode = T.BEFORE_HEAD) : Wt(e, t);
  }
  function Sg(e, t) {
    const n = t.tagID;
    (n === c.HTML || n === c.HEAD || n === c.BODY || n === c.BR) && Wt(e, t);
  }
  function Wt(e, t) {
    e._insertFakeRootElement(), e.insertionMode = T.BEFORE_HEAD, e._processToken(t);
  }
  function xg(e, t) {
    switch (t.tagID) {
      case c.HTML: {
        be(e, t);
        break;
      }
      case c.HEAD: {
        e._insertElement(t, U.HTML), e.headElement = e.openElements.current, e.insertionMode = T.IN_HEAD;
        break;
      }
      default:
        Gt(e, t);
    }
  }
  function Lg(e, t) {
    const n = t.tagID;
    n === c.HEAD || n === c.BODY || n === c.HTML || n === c.BR ? Gt(e, t) : e._err(t, F.endTagWithoutMatchingOpenElement);
  }
  function Gt(e, t) {
    e._insertFakeElement(N.HEAD, c.HEAD), e.headElement = e.openElements.current, e.insertionMode = T.IN_HEAD, e._processToken(t);
  }
  function Fe(e, t) {
    switch (t.tagID) {
      case c.HTML: {
        be(e, t);
        break;
      }
      case c.BASE:
      case c.BASEFONT:
      case c.BGSOUND:
      case c.LINK:
      case c.META: {
        e._appendElement(t, U.HTML), t.ackSelfClosing = true;
        break;
      }
      case c.TITLE: {
        e._switchToTextParsing(t, ce.RCDATA);
        break;
      }
      case c.NOSCRIPT: {
        e.options.scriptingEnabled ? e._switchToTextParsing(t, ce.RAWTEXT) : (e._insertElement(t, U.HTML), e.insertionMode = T.IN_HEAD_NO_SCRIPT);
        break;
      }
      case c.NOFRAMES:
      case c.STYLE: {
        e._switchToTextParsing(t, ce.RAWTEXT);
        break;
      }
      case c.SCRIPT: {
        e._switchToTextParsing(t, ce.SCRIPT_DATA);
        break;
      }
      case c.TEMPLATE: {
        e._insertTemplate(t), e.activeFormattingElements.insertMarker(), e.framesetOk = false, e.insertionMode = T.IN_TEMPLATE, e.tmplInsertionModeStack.unshift(T.IN_TEMPLATE);
        break;
      }
      case c.HEAD: {
        e._err(t, F.misplacedStartTagForHeadElement);
        break;
      }
      default:
        Qt(e, t);
    }
  }
  function Fg(e, t) {
    switch (t.tagID) {
      case c.HEAD: {
        e.openElements.pop(), e.insertionMode = T.AFTER_HEAD;
        break;
      }
      case c.BODY:
      case c.BR:
      case c.HTML: {
        Qt(e, t);
        break;
      }
      case c.TEMPLATE: {
        ot(e, t);
        break;
      }
      default:
        e._err(t, F.endTagWithoutMatchingOpenElement);
    }
  }
  function ot(e, t) {
    e.openElements.tmplCount > 0 ? (e.openElements.generateImpliedEndTagsThoroughly(), e.openElements.currentTagId !== c.TEMPLATE && e._err(t, F.closingOfElementWithOpenChildElements), e.openElements.popUntilTagNamePopped(c.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode()) : e._err(t, F.endTagWithoutMatchingOpenElement);
  }
  function Qt(e, t) {
    e.openElements.pop(), e.insertionMode = T.AFTER_HEAD, e._processToken(t);
  }
  function Og(e, t) {
    switch (t.tagID) {
      case c.HTML: {
        be(e, t);
        break;
      }
      case c.BASEFONT:
      case c.BGSOUND:
      case c.HEAD:
      case c.LINK:
      case c.META:
      case c.NOFRAMES:
      case c.STYLE: {
        Fe(e, t);
        break;
      }
      case c.NOSCRIPT: {
        e._err(t, F.nestedNoscriptInHead);
        break;
      }
      default:
        Xt(e, t);
    }
  }
  function wg(e, t) {
    switch (t.tagID) {
      case c.NOSCRIPT: {
        e.openElements.pop(), e.insertionMode = T.IN_HEAD;
        break;
      }
      case c.BR: {
        Xt(e, t);
        break;
      }
      default:
        e._err(t, F.endTagWithoutMatchingOpenElement);
    }
  }
  function Xt(e, t) {
    const n = t.type === te.EOF ? F.openElementsLeftAfterEof : F.disallowedContentInNoscriptInHead;
    e._err(t, n), e.openElements.pop(), e.insertionMode = T.IN_HEAD, e._processToken(t);
  }
  function Rg(e, t) {
    switch (t.tagID) {
      case c.HTML: {
        be(e, t);
        break;
      }
      case c.BODY: {
        e._insertElement(t, U.HTML), e.framesetOk = false, e.insertionMode = T.IN_BODY;
        break;
      }
      case c.FRAMESET: {
        e._insertElement(t, U.HTML), e.insertionMode = T.IN_FRAMESET;
        break;
      }
      case c.BASE:
      case c.BASEFONT:
      case c.BGSOUND:
      case c.LINK:
      case c.META:
      case c.NOFRAMES:
      case c.SCRIPT:
      case c.STYLE:
      case c.TEMPLATE:
      case c.TITLE: {
        e._err(t, F.abandonedHeadElementChild), e.openElements.push(e.headElement, c.HEAD), Fe(e, t), e.openElements.remove(e.headElement);
        break;
      }
      case c.HEAD: {
        e._err(t, F.misplacedStartTagForHeadElement);
        break;
      }
      default:
        Jt(e, t);
    }
  }
  function Bg(e, t) {
    switch (t.tagID) {
      case c.BODY:
      case c.HTML:
      case c.BR: {
        Jt(e, t);
        break;
      }
      case c.TEMPLATE: {
        ot(e, t);
        break;
      }
      default:
        e._err(t, F.endTagWithoutMatchingOpenElement);
    }
  }
  function Jt(e, t) {
    e._insertFakeElement(N.BODY, c.BODY), e.insertionMode = T.IN_BODY, er(e, t);
  }
  function er(e, t) {
    switch (t.type) {
      case te.CHARACTER: {
        Ro(e, t);
        break;
      }
      case te.WHITESPACE_CHARACTER: {
        wo(e, t);
        break;
      }
      case te.COMMENT: {
        ei(e, t);
        break;
      }
      case te.START_TAG: {
        be(e, t);
        break;
      }
      case te.END_TAG: {
        tr(e, t);
        break;
      }
      case te.EOF: {
        Uo(e, t);
        break;
      }
    }
  }
  function wo(e, t) {
    e._reconstructActiveFormattingElements(), e._insertCharacters(t);
  }
  function Ro(e, t) {
    e._reconstructActiveFormattingElements(), e._insertCharacters(t), e.framesetOk = false;
  }
  function Pg(e, t) {
    e.openElements.tmplCount === 0 && e.treeAdapter.adoptAttributes(e.openElements.items[0], t.attrs);
  }
  function Mg(e, t) {
    const n = e.openElements.tryPeekProperlyNestedBodyElement();
    n && e.openElements.tmplCount === 0 && (e.framesetOk = false, e.treeAdapter.adoptAttributes(n, t.attrs));
  }
  function Ug(e, t) {
    const n = e.openElements.tryPeekProperlyNestedBodyElement();
    e.framesetOk && n && (e.treeAdapter.detachNode(n), e.openElements.popAllUpToHtmlElement(), e._insertElement(t, U.HTML), e.insertionMode = T.IN_FRAMESET);
  }
  function Hg(e, t) {
    e.openElements.hasInButtonScope(c.P) && e._closePElement(), e._insertElement(t, U.HTML);
  }
  function vg(e, t) {
    e.openElements.hasInButtonScope(c.P) && e._closePElement(), e.openElements.currentTagId !== void 0 && Zr.has(e.openElements.currentTagId) && e.openElements.pop(), e._insertElement(t, U.HTML);
  }
  function zg(e, t) {
    e.openElements.hasInButtonScope(c.P) && e._closePElement(), e._insertElement(t, U.HTML), e.skipNextNewLine = true, e.framesetOk = false;
  }
  function Yg(e, t) {
    const n = e.openElements.tmplCount > 0;
    (!e.formElement || n) && (e.openElements.hasInButtonScope(c.P) && e._closePElement(), e._insertElement(t, U.HTML), n || (e.formElement = e.openElements.current));
  }
  function qg(e, t) {
    e.framesetOk = false;
    const n = t.tagID;
    for (let r = e.openElements.stackTop; r >= 0; r--) {
      const i = e.openElements.tagIDs[r];
      if (n === c.LI && i === c.LI || (n === c.DD || n === c.DT) && (i === c.DD || i === c.DT)) {
        e.openElements.generateImpliedEndTagsWithExclusion(i), e.openElements.popUntilTagNamePopped(i);
        break;
      }
      if (i !== c.ADDRESS && i !== c.DIV && i !== c.P && e._isSpecialElement(e.openElements.items[r], i)) break;
    }
    e.openElements.hasInButtonScope(c.P) && e._closePElement(), e._insertElement(t, U.HTML);
  }
  function $g(e, t) {
    e.openElements.hasInButtonScope(c.P) && e._closePElement(), e._insertElement(t, U.HTML), e.tokenizer.state = ce.PLAINTEXT;
  }
  function jg(e, t) {
    e.openElements.hasInScope(c.BUTTON) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(c.BUTTON)), e._reconstructActiveFormattingElements(), e._insertElement(t, U.HTML), e.framesetOk = false;
  }
  function Vg(e, t) {
    const n = e.activeFormattingElements.getElementEntryInScopeWithTagName(N.A);
    n && (Bi(e, t), e.openElements.remove(n.element), e.activeFormattingElements.removeEntry(n)), e._reconstructActiveFormattingElements(), e._insertElement(t, U.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
  }
  function Kg(e, t) {
    e._reconstructActiveFormattingElements(), e._insertElement(t, U.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
  }
  function Wg(e, t) {
    e._reconstructActiveFormattingElements(), e.openElements.hasInScope(c.NOBR) && (Bi(e, t), e._reconstructActiveFormattingElements()), e._insertElement(t, U.HTML), e.activeFormattingElements.pushElement(e.openElements.current, t);
  }
  function Gg(e, t) {
    e._reconstructActiveFormattingElements(), e._insertElement(t, U.HTML), e.activeFormattingElements.insertMarker(), e.framesetOk = false;
  }
  function Qg(e, t) {
    e.treeAdapter.getDocumentMode(e.document) !== ke.QUIRKS && e.openElements.hasInButtonScope(c.P) && e._closePElement(), e._insertElement(t, U.HTML), e.framesetOk = false, e.insertionMode = T.IN_TABLE;
  }
  function Bo(e, t) {
    e._reconstructActiveFormattingElements(), e._appendElement(t, U.HTML), e.framesetOk = false, t.ackSelfClosing = true;
  }
  function Po(e) {
    const t = yo(e, it.TYPE);
    return t != null && t.toLowerCase() === dg;
  }
  function Xg(e, t) {
    e._reconstructActiveFormattingElements(), e._appendElement(t, U.HTML), Po(t) || (e.framesetOk = false), t.ackSelfClosing = true;
  }
  function Jg(e, t) {
    e._appendElement(t, U.HTML), t.ackSelfClosing = true;
  }
  function Zg(e, t) {
    e.openElements.hasInButtonScope(c.P) && e._closePElement(), e._appendElement(t, U.HTML), e.framesetOk = false, t.ackSelfClosing = true;
  }
  function eb(e, t) {
    t.tagName = N.IMG, t.tagID = c.IMG, Bo(e, t);
  }
  function tb(e, t) {
    e._insertElement(t, U.HTML), e.skipNextNewLine = true, e.tokenizer.state = ce.RCDATA, e.originalInsertionMode = e.insertionMode, e.framesetOk = false, e.insertionMode = T.TEXT;
  }
  function nb(e, t) {
    e.openElements.hasInButtonScope(c.P) && e._closePElement(), e._reconstructActiveFormattingElements(), e.framesetOk = false, e._switchToTextParsing(t, ce.RAWTEXT);
  }
  function rb(e, t) {
    e.framesetOk = false, e._switchToTextParsing(t, ce.RAWTEXT);
  }
  function ps(e, t) {
    e._switchToTextParsing(t, ce.RAWTEXT);
  }
  function ib(e, t) {
    e._reconstructActiveFormattingElements(), e._insertElement(t, U.HTML), e.framesetOk = false, e.insertionMode = e.insertionMode === T.IN_TABLE || e.insertionMode === T.IN_CAPTION || e.insertionMode === T.IN_TABLE_BODY || e.insertionMode === T.IN_ROW || e.insertionMode === T.IN_CELL ? T.IN_SELECT_IN_TABLE : T.IN_SELECT;
  }
  function ub(e, t) {
    e.openElements.currentTagId === c.OPTION && e.openElements.pop(), e._reconstructActiveFormattingElements(), e._insertElement(t, U.HTML);
  }
  function sb(e, t) {
    e.openElements.hasInScope(c.RUBY) && e.openElements.generateImpliedEndTags(), e._insertElement(t, U.HTML);
  }
  function ab(e, t) {
    e.openElements.hasInScope(c.RUBY) && e.openElements.generateImpliedEndTagsWithExclusion(c.RTC), e._insertElement(t, U.HTML);
  }
  function ob(e, t) {
    e._reconstructActiveFormattingElements(), Lo(t), Ri(t), t.selfClosing ? e._appendElement(t, U.MATHML) : e._insertElement(t, U.MATHML), t.ackSelfClosing = true;
  }
  function cb(e, t) {
    e._reconstructActiveFormattingElements(), Fo(t), Ri(t), t.selfClosing ? e._appendElement(t, U.SVG) : e._insertElement(t, U.SVG), t.ackSelfClosing = true;
  }
  function ds(e, t) {
    e._reconstructActiveFormattingElements(), e._insertElement(t, U.HTML);
  }
  function be(e, t) {
    switch (t.tagID) {
      case c.I:
      case c.S:
      case c.B:
      case c.U:
      case c.EM:
      case c.TT:
      case c.BIG:
      case c.CODE:
      case c.FONT:
      case c.SMALL:
      case c.STRIKE:
      case c.STRONG: {
        Kg(e, t);
        break;
      }
      case c.A: {
        Vg(e, t);
        break;
      }
      case c.H1:
      case c.H2:
      case c.H3:
      case c.H4:
      case c.H5:
      case c.H6: {
        vg(e, t);
        break;
      }
      case c.P:
      case c.DL:
      case c.OL:
      case c.UL:
      case c.DIV:
      case c.DIR:
      case c.NAV:
      case c.MAIN:
      case c.MENU:
      case c.ASIDE:
      case c.CENTER:
      case c.FIGURE:
      case c.FOOTER:
      case c.HEADER:
      case c.HGROUP:
      case c.DIALOG:
      case c.DETAILS:
      case c.ADDRESS:
      case c.ARTICLE:
      case c.SEARCH:
      case c.SECTION:
      case c.SUMMARY:
      case c.FIELDSET:
      case c.BLOCKQUOTE:
      case c.FIGCAPTION: {
        Hg(e, t);
        break;
      }
      case c.LI:
      case c.DD:
      case c.DT: {
        qg(e, t);
        break;
      }
      case c.BR:
      case c.IMG:
      case c.WBR:
      case c.AREA:
      case c.EMBED:
      case c.KEYGEN: {
        Bo(e, t);
        break;
      }
      case c.HR: {
        Zg(e, t);
        break;
      }
      case c.RB:
      case c.RTC: {
        sb(e, t);
        break;
      }
      case c.RT:
      case c.RP: {
        ab(e, t);
        break;
      }
      case c.PRE:
      case c.LISTING: {
        zg(e, t);
        break;
      }
      case c.XMP: {
        nb(e, t);
        break;
      }
      case c.SVG: {
        cb(e, t);
        break;
      }
      case c.HTML: {
        Pg(e, t);
        break;
      }
      case c.BASE:
      case c.LINK:
      case c.META:
      case c.STYLE:
      case c.TITLE:
      case c.SCRIPT:
      case c.BGSOUND:
      case c.BASEFONT:
      case c.TEMPLATE: {
        Fe(e, t);
        break;
      }
      case c.BODY: {
        Mg(e, t);
        break;
      }
      case c.FORM: {
        Yg(e, t);
        break;
      }
      case c.NOBR: {
        Wg(e, t);
        break;
      }
      case c.MATH: {
        ob(e, t);
        break;
      }
      case c.TABLE: {
        Qg(e, t);
        break;
      }
      case c.INPUT: {
        Xg(e, t);
        break;
      }
      case c.PARAM:
      case c.TRACK:
      case c.SOURCE: {
        Jg(e, t);
        break;
      }
      case c.IMAGE: {
        eb(e, t);
        break;
      }
      case c.BUTTON: {
        jg(e, t);
        break;
      }
      case c.APPLET:
      case c.OBJECT:
      case c.MARQUEE: {
        Gg(e, t);
        break;
      }
      case c.IFRAME: {
        rb(e, t);
        break;
      }
      case c.SELECT: {
        ib(e, t);
        break;
      }
      case c.OPTION:
      case c.OPTGROUP: {
        ub(e, t);
        break;
      }
      case c.NOEMBED:
      case c.NOFRAMES: {
        ps(e, t);
        break;
      }
      case c.FRAMESET: {
        Ug(e, t);
        break;
      }
      case c.TEXTAREA: {
        tb(e, t);
        break;
      }
      case c.NOSCRIPT: {
        e.options.scriptingEnabled ? ps(e, t) : ds(e, t);
        break;
      }
      case c.PLAINTEXT: {
        $g(e, t);
        break;
      }
      case c.COL:
      case c.TH:
      case c.TD:
      case c.TR:
      case c.HEAD:
      case c.FRAME:
      case c.TBODY:
      case c.TFOOT:
      case c.THEAD:
      case c.CAPTION:
      case c.COLGROUP:
        break;
      default:
        ds(e, t);
    }
  }
  function lb(e, t) {
    if (e.openElements.hasInScope(c.BODY) && (e.insertionMode = T.AFTER_BODY, e.options.sourceCodeLocationInfo)) {
      const n = e.openElements.tryPeekProperlyNestedBodyElement();
      n && e._setEndLocation(n, t);
    }
  }
  function fb(e, t) {
    e.openElements.hasInScope(c.BODY) && (e.insertionMode = T.AFTER_BODY, Vo(e, t));
  }
  function hb(e, t) {
    const n = t.tagID;
    e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n));
  }
  function pb(e) {
    const t = e.openElements.tmplCount > 0, { formElement: n } = e;
    t || (e.formElement = null), (n || t) && e.openElements.hasInScope(c.FORM) && (e.openElements.generateImpliedEndTags(), t ? e.openElements.popUntilTagNamePopped(c.FORM) : n && e.openElements.remove(n));
  }
  function db(e) {
    e.openElements.hasInButtonScope(c.P) || e._insertFakeElement(N.P, c.P), e._closePElement();
  }
  function mb(e) {
    e.openElements.hasInListItemScope(c.LI) && (e.openElements.generateImpliedEndTagsWithExclusion(c.LI), e.openElements.popUntilTagNamePopped(c.LI));
  }
  function Eb(e, t) {
    const n = t.tagID;
    e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTagsWithExclusion(n), e.openElements.popUntilTagNamePopped(n));
  }
  function gb(e) {
    e.openElements.hasNumberedHeaderInScope() && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilNumberedHeaderPopped());
  }
  function bb(e, t) {
    const n = t.tagID;
    e.openElements.hasInScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker());
  }
  function Tb(e) {
    e._reconstructActiveFormattingElements(), e._insertFakeElement(N.BR, c.BR), e.openElements.pop(), e.framesetOk = false;
  }
  function Mo(e, t) {
    const n = t.tagName, r = t.tagID;
    for (let i = e.openElements.stackTop; i > 0; i--) {
      const u = e.openElements.items[i], s = e.openElements.tagIDs[i];
      if (r === s && (r !== c.UNKNOWN || e.treeAdapter.getTagName(u) === n)) {
        e.openElements.generateImpliedEndTagsWithExclusion(r), e.openElements.stackTop >= i && e.openElements.shortenToLength(i);
        break;
      }
      if (e._isSpecialElement(u, s)) break;
    }
  }
  function tr(e, t) {
    switch (t.tagID) {
      case c.A:
      case c.B:
      case c.I:
      case c.S:
      case c.U:
      case c.EM:
      case c.TT:
      case c.BIG:
      case c.CODE:
      case c.FONT:
      case c.NOBR:
      case c.SMALL:
      case c.STRIKE:
      case c.STRONG: {
        Bi(e, t);
        break;
      }
      case c.P: {
        db(e);
        break;
      }
      case c.DL:
      case c.UL:
      case c.OL:
      case c.DIR:
      case c.DIV:
      case c.NAV:
      case c.PRE:
      case c.MAIN:
      case c.MENU:
      case c.ASIDE:
      case c.BUTTON:
      case c.CENTER:
      case c.FIGURE:
      case c.FOOTER:
      case c.HEADER:
      case c.HGROUP:
      case c.DIALOG:
      case c.ADDRESS:
      case c.ARTICLE:
      case c.DETAILS:
      case c.SEARCH:
      case c.SECTION:
      case c.SUMMARY:
      case c.LISTING:
      case c.FIELDSET:
      case c.BLOCKQUOTE:
      case c.FIGCAPTION: {
        hb(e, t);
        break;
      }
      case c.LI: {
        mb(e);
        break;
      }
      case c.DD:
      case c.DT: {
        Eb(e, t);
        break;
      }
      case c.H1:
      case c.H2:
      case c.H3:
      case c.H4:
      case c.H5:
      case c.H6: {
        gb(e);
        break;
      }
      case c.BR: {
        Tb(e);
        break;
      }
      case c.BODY: {
        lb(e, t);
        break;
      }
      case c.HTML: {
        fb(e, t);
        break;
      }
      case c.FORM: {
        pb(e);
        break;
      }
      case c.APPLET:
      case c.OBJECT:
      case c.MARQUEE: {
        bb(e, t);
        break;
      }
      case c.TEMPLATE: {
        ot(e, t);
        break;
      }
      default:
        Mo(e, t);
    }
  }
  function Uo(e, t) {
    e.tmplInsertionModeStack.length > 0 ? jo(e, t) : Pi(e, t);
  }
  function Ab(e, t) {
    var n;
    t.tagID === c.SCRIPT && ((n = e.scriptHandler) === null || n === void 0 || n.call(e, e.openElements.current)), e.openElements.pop(), e.insertionMode = e.originalInsertionMode;
  }
  function Cb(e, t) {
    e._err(t, F.eofInElementThatCanContainOnlyText), e.openElements.pop(), e.insertionMode = e.originalInsertionMode, e.onEof(t);
  }
  function Sr(e, t) {
    if (e.openElements.currentTagId !== void 0 && Oo.has(e.openElements.currentTagId)) switch (e.pendingCharacterTokens.length = 0, e.hasNonWhitespacePendingCharacterToken = false, e.originalInsertionMode = e.insertionMode, e.insertionMode = T.IN_TABLE_TEXT, t.type) {
      case te.CHARACTER: {
        vo(e, t);
        break;
      }
      case te.WHITESPACE_CHARACTER: {
        Ho(e, t);
        break;
      }
    }
    else fn(e, t);
  }
  function _b(e, t) {
    e.openElements.clearBackToTableContext(), e.activeFormattingElements.insertMarker(), e._insertElement(t, U.HTML), e.insertionMode = T.IN_CAPTION;
  }
  function Db(e, t) {
    e.openElements.clearBackToTableContext(), e._insertElement(t, U.HTML), e.insertionMode = T.IN_COLUMN_GROUP;
  }
  function yb(e, t) {
    e.openElements.clearBackToTableContext(), e._insertFakeElement(N.COLGROUP, c.COLGROUP), e.insertionMode = T.IN_COLUMN_GROUP, Mi(e, t);
  }
  function kb(e, t) {
    e.openElements.clearBackToTableContext(), e._insertElement(t, U.HTML), e.insertionMode = T.IN_TABLE_BODY;
  }
  function Ib(e, t) {
    e.openElements.clearBackToTableContext(), e._insertFakeElement(N.TBODY, c.TBODY), e.insertionMode = T.IN_TABLE_BODY, nr(e, t);
  }
  function Nb(e, t) {
    e.openElements.hasInTableScope(c.TABLE) && (e.openElements.popUntilTagNamePopped(c.TABLE), e._resetInsertionMode(), e._processStartTag(t));
  }
  function Sb(e, t) {
    Po(t) ? e._appendElement(t, U.HTML) : fn(e, t), t.ackSelfClosing = true;
  }
  function xb(e, t) {
    !e.formElement && e.openElements.tmplCount === 0 && (e._insertElement(t, U.HTML), e.formElement = e.openElements.current, e.openElements.pop());
  }
  function Dt(e, t) {
    switch (t.tagID) {
      case c.TD:
      case c.TH:
      case c.TR: {
        Ib(e, t);
        break;
      }
      case c.STYLE:
      case c.SCRIPT:
      case c.TEMPLATE: {
        Fe(e, t);
        break;
      }
      case c.COL: {
        yb(e, t);
        break;
      }
      case c.FORM: {
        xb(e, t);
        break;
      }
      case c.TABLE: {
        Nb(e, t);
        break;
      }
      case c.TBODY:
      case c.TFOOT:
      case c.THEAD: {
        kb(e, t);
        break;
      }
      case c.INPUT: {
        Sb(e, t);
        break;
      }
      case c.CAPTION: {
        _b(e, t);
        break;
      }
      case c.COLGROUP: {
        Db(e, t);
        break;
      }
      default:
        fn(e, t);
    }
  }
  function un(e, t) {
    switch (t.tagID) {
      case c.TABLE: {
        e.openElements.hasInTableScope(c.TABLE) && (e.openElements.popUntilTagNamePopped(c.TABLE), e._resetInsertionMode());
        break;
      }
      case c.TEMPLATE: {
        ot(e, t);
        break;
      }
      case c.BODY:
      case c.CAPTION:
      case c.COL:
      case c.COLGROUP:
      case c.HTML:
      case c.TBODY:
      case c.TD:
      case c.TFOOT:
      case c.TH:
      case c.THEAD:
      case c.TR:
        break;
      default:
        fn(e, t);
    }
  }
  function fn(e, t) {
    const n = e.fosterParentingEnabled;
    e.fosterParentingEnabled = true, er(e, t), e.fosterParentingEnabled = n;
  }
  function Ho(e, t) {
    e.pendingCharacterTokens.push(t);
  }
  function vo(e, t) {
    e.pendingCharacterTokens.push(t), e.hasNonWhitespacePendingCharacterToken = true;
  }
  function Ht(e, t) {
    let n = 0;
    if (e.hasNonWhitespacePendingCharacterToken) for (; n < e.pendingCharacterTokens.length; n++) fn(e, e.pendingCharacterTokens[n]);
    else for (; n < e.pendingCharacterTokens.length; n++) e._insertCharacters(e.pendingCharacterTokens[n]);
    e.insertionMode = e.originalInsertionMode, e._processToken(t);
  }
  const zo = /* @__PURE__ */ new Set([
    c.CAPTION,
    c.COL,
    c.COLGROUP,
    c.TBODY,
    c.TD,
    c.TFOOT,
    c.TH,
    c.THEAD,
    c.TR
  ]);
  function Lb(e, t) {
    const n = t.tagID;
    zo.has(n) ? e.openElements.hasInTableScope(c.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(c.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = T.IN_TABLE, Dt(e, t)) : be(e, t);
  }
  function Fb(e, t) {
    const n = t.tagID;
    switch (n) {
      case c.CAPTION:
      case c.TABLE: {
        e.openElements.hasInTableScope(c.CAPTION) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(c.CAPTION), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = T.IN_TABLE, n === c.TABLE && un(e, t));
        break;
      }
      case c.BODY:
      case c.COL:
      case c.COLGROUP:
      case c.HTML:
      case c.TBODY:
      case c.TD:
      case c.TFOOT:
      case c.TH:
      case c.THEAD:
      case c.TR:
        break;
      default:
        tr(e, t);
    }
  }
  function Mi(e, t) {
    switch (t.tagID) {
      case c.HTML: {
        be(e, t);
        break;
      }
      case c.COL: {
        e._appendElement(t, U.HTML), t.ackSelfClosing = true;
        break;
      }
      case c.TEMPLATE: {
        Fe(e, t);
        break;
      }
      default:
        Hn(e, t);
    }
  }
  function Ob(e, t) {
    switch (t.tagID) {
      case c.COLGROUP: {
        e.openElements.currentTagId === c.COLGROUP && (e.openElements.pop(), e.insertionMode = T.IN_TABLE);
        break;
      }
      case c.TEMPLATE: {
        ot(e, t);
        break;
      }
      case c.COL:
        break;
      default:
        Hn(e, t);
    }
  }
  function Hn(e, t) {
    e.openElements.currentTagId === c.COLGROUP && (e.openElements.pop(), e.insertionMode = T.IN_TABLE, e._processToken(t));
  }
  function nr(e, t) {
    switch (t.tagID) {
      case c.TR: {
        e.openElements.clearBackToTableBodyContext(), e._insertElement(t, U.HTML), e.insertionMode = T.IN_ROW;
        break;
      }
      case c.TH:
      case c.TD: {
        e.openElements.clearBackToTableBodyContext(), e._insertFakeElement(N.TR, c.TR), e.insertionMode = T.IN_ROW, rr(e, t);
        break;
      }
      case c.CAPTION:
      case c.COL:
      case c.COLGROUP:
      case c.TBODY:
      case c.TFOOT:
      case c.THEAD: {
        e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE, Dt(e, t));
        break;
      }
      default:
        Dt(e, t);
    }
  }
  function ti(e, t) {
    const n = t.tagID;
    switch (t.tagID) {
      case c.TBODY:
      case c.TFOOT:
      case c.THEAD: {
        e.openElements.hasInTableScope(n) && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE);
        break;
      }
      case c.TABLE: {
        e.openElements.hasTableBodyContextInTableScope() && (e.openElements.clearBackToTableBodyContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE, un(e, t));
        break;
      }
      case c.BODY:
      case c.CAPTION:
      case c.COL:
      case c.COLGROUP:
      case c.HTML:
      case c.TD:
      case c.TH:
      case c.TR:
        break;
      default:
        un(e, t);
    }
  }
  function rr(e, t) {
    switch (t.tagID) {
      case c.TH:
      case c.TD: {
        e.openElements.clearBackToTableRowContext(), e._insertElement(t, U.HTML), e.insertionMode = T.IN_CELL, e.activeFormattingElements.insertMarker();
        break;
      }
      case c.CAPTION:
      case c.COL:
      case c.COLGROUP:
      case c.TBODY:
      case c.TFOOT:
      case c.THEAD:
      case c.TR: {
        e.openElements.hasInTableScope(c.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE_BODY, nr(e, t));
        break;
      }
      default:
        Dt(e, t);
    }
  }
  function Yo(e, t) {
    switch (t.tagID) {
      case c.TR: {
        e.openElements.hasInTableScope(c.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE_BODY);
        break;
      }
      case c.TABLE: {
        e.openElements.hasInTableScope(c.TR) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE_BODY, ti(e, t));
        break;
      }
      case c.TBODY:
      case c.TFOOT:
      case c.THEAD: {
        (e.openElements.hasInTableScope(t.tagID) || e.openElements.hasInTableScope(c.TR)) && (e.openElements.clearBackToTableRowContext(), e.openElements.pop(), e.insertionMode = T.IN_TABLE_BODY, ti(e, t));
        break;
      }
      case c.BODY:
      case c.CAPTION:
      case c.COL:
      case c.COLGROUP:
      case c.HTML:
      case c.TD:
      case c.TH:
        break;
      default:
        un(e, t);
    }
  }
  function wb(e, t) {
    const n = t.tagID;
    zo.has(n) ? (e.openElements.hasInTableScope(c.TD) || e.openElements.hasInTableScope(c.TH)) && (e._closeTableCell(), rr(e, t)) : be(e, t);
  }
  function Rb(e, t) {
    const n = t.tagID;
    switch (n) {
      case c.TD:
      case c.TH: {
        e.openElements.hasInTableScope(n) && (e.openElements.generateImpliedEndTags(), e.openElements.popUntilTagNamePopped(n), e.activeFormattingElements.clearToLastMarker(), e.insertionMode = T.IN_ROW);
        break;
      }
      case c.TABLE:
      case c.TBODY:
      case c.TFOOT:
      case c.THEAD:
      case c.TR: {
        e.openElements.hasInTableScope(n) && (e._closeTableCell(), Yo(e, t));
        break;
      }
      case c.BODY:
      case c.CAPTION:
      case c.COL:
      case c.COLGROUP:
      case c.HTML:
        break;
      default:
        tr(e, t);
    }
  }
  function qo(e, t) {
    switch (t.tagID) {
      case c.HTML: {
        be(e, t);
        break;
      }
      case c.OPTION: {
        e.openElements.currentTagId === c.OPTION && e.openElements.pop(), e._insertElement(t, U.HTML);
        break;
      }
      case c.OPTGROUP: {
        e.openElements.currentTagId === c.OPTION && e.openElements.pop(), e.openElements.currentTagId === c.OPTGROUP && e.openElements.pop(), e._insertElement(t, U.HTML);
        break;
      }
      case c.HR: {
        e.openElements.currentTagId === c.OPTION && e.openElements.pop(), e.openElements.currentTagId === c.OPTGROUP && e.openElements.pop(), e._appendElement(t, U.HTML), t.ackSelfClosing = true;
        break;
      }
      case c.INPUT:
      case c.KEYGEN:
      case c.TEXTAREA:
      case c.SELECT: {
        e.openElements.hasInSelectScope(c.SELECT) && (e.openElements.popUntilTagNamePopped(c.SELECT), e._resetInsertionMode(), t.tagID !== c.SELECT && e._processStartTag(t));
        break;
      }
      case c.SCRIPT:
      case c.TEMPLATE: {
        Fe(e, t);
        break;
      }
    }
  }
  function $o(e, t) {
    switch (t.tagID) {
      case c.OPTGROUP: {
        e.openElements.stackTop > 0 && e.openElements.currentTagId === c.OPTION && e.openElements.tagIDs[e.openElements.stackTop - 1] === c.OPTGROUP && e.openElements.pop(), e.openElements.currentTagId === c.OPTGROUP && e.openElements.pop();
        break;
      }
      case c.OPTION: {
        e.openElements.currentTagId === c.OPTION && e.openElements.pop();
        break;
      }
      case c.SELECT: {
        e.openElements.hasInSelectScope(c.SELECT) && (e.openElements.popUntilTagNamePopped(c.SELECT), e._resetInsertionMode());
        break;
      }
      case c.TEMPLATE: {
        ot(e, t);
        break;
      }
    }
  }
  function Bb(e, t) {
    const n = t.tagID;
    n === c.CAPTION || n === c.TABLE || n === c.TBODY || n === c.TFOOT || n === c.THEAD || n === c.TR || n === c.TD || n === c.TH ? (e.openElements.popUntilTagNamePopped(c.SELECT), e._resetInsertionMode(), e._processStartTag(t)) : qo(e, t);
  }
  function Pb(e, t) {
    const n = t.tagID;
    n === c.CAPTION || n === c.TABLE || n === c.TBODY || n === c.TFOOT || n === c.THEAD || n === c.TR || n === c.TD || n === c.TH ? e.openElements.hasInTableScope(n) && (e.openElements.popUntilTagNamePopped(c.SELECT), e._resetInsertionMode(), e.onEndTag(t)) : $o(e, t);
  }
  function Mb(e, t) {
    switch (t.tagID) {
      case c.BASE:
      case c.BASEFONT:
      case c.BGSOUND:
      case c.LINK:
      case c.META:
      case c.NOFRAMES:
      case c.SCRIPT:
      case c.STYLE:
      case c.TEMPLATE:
      case c.TITLE: {
        Fe(e, t);
        break;
      }
      case c.CAPTION:
      case c.COLGROUP:
      case c.TBODY:
      case c.TFOOT:
      case c.THEAD: {
        e.tmplInsertionModeStack[0] = T.IN_TABLE, e.insertionMode = T.IN_TABLE, Dt(e, t);
        break;
      }
      case c.COL: {
        e.tmplInsertionModeStack[0] = T.IN_COLUMN_GROUP, e.insertionMode = T.IN_COLUMN_GROUP, Mi(e, t);
        break;
      }
      case c.TR: {
        e.tmplInsertionModeStack[0] = T.IN_TABLE_BODY, e.insertionMode = T.IN_TABLE_BODY, nr(e, t);
        break;
      }
      case c.TD:
      case c.TH: {
        e.tmplInsertionModeStack[0] = T.IN_ROW, e.insertionMode = T.IN_ROW, rr(e, t);
        break;
      }
      default:
        e.tmplInsertionModeStack[0] = T.IN_BODY, e.insertionMode = T.IN_BODY, be(e, t);
    }
  }
  function Ub(e, t) {
    t.tagID === c.TEMPLATE && ot(e, t);
  }
  function jo(e, t) {
    e.openElements.tmplCount > 0 ? (e.openElements.popUntilTagNamePopped(c.TEMPLATE), e.activeFormattingElements.clearToLastMarker(), e.tmplInsertionModeStack.shift(), e._resetInsertionMode(), e.onEof(t)) : Pi(e, t);
  }
  function Hb(e, t) {
    t.tagID === c.HTML ? be(e, t) : vn(e, t);
  }
  function Vo(e, t) {
    var n;
    if (t.tagID === c.HTML) {
      if (e.fragmentContext || (e.insertionMode = T.AFTER_AFTER_BODY), e.options.sourceCodeLocationInfo && e.openElements.tagIDs[0] === c.HTML) {
        e._setEndLocation(e.openElements.items[0], t);
        const r = e.openElements.items[1];
        r && !(!((n = e.treeAdapter.getNodeSourceCodeLocation(r)) === null || n === void 0) && n.endTag) && e._setEndLocation(r, t);
      }
    } else vn(e, t);
  }
  function vn(e, t) {
    e.insertionMode = T.IN_BODY, er(e, t);
  }
  function vb(e, t) {
    switch (t.tagID) {
      case c.HTML: {
        be(e, t);
        break;
      }
      case c.FRAMESET: {
        e._insertElement(t, U.HTML);
        break;
      }
      case c.FRAME: {
        e._appendElement(t, U.HTML), t.ackSelfClosing = true;
        break;
      }
      case c.NOFRAMES: {
        Fe(e, t);
        break;
      }
    }
  }
  function zb(e, t) {
    t.tagID === c.FRAMESET && !e.openElements.isRootHtmlElementCurrent() && (e.openElements.pop(), !e.fragmentContext && e.openElements.currentTagId !== c.FRAMESET && (e.insertionMode = T.AFTER_FRAMESET));
  }
  function Yb(e, t) {
    switch (t.tagID) {
      case c.HTML: {
        be(e, t);
        break;
      }
      case c.NOFRAMES: {
        Fe(e, t);
        break;
      }
    }
  }
  function qb(e, t) {
    t.tagID === c.HTML && (e.insertionMode = T.AFTER_AFTER_FRAMESET);
  }
  function $b(e, t) {
    t.tagID === c.HTML ? be(e, t) : xn(e, t);
  }
  function xn(e, t) {
    e.insertionMode = T.IN_BODY, er(e, t);
  }
  function jb(e, t) {
    switch (t.tagID) {
      case c.HTML: {
        be(e, t);
        break;
      }
      case c.NOFRAMES: {
        Fe(e, t);
        break;
      }
    }
  }
  function Vb(e, t) {
    t.chars = se, e._insertCharacters(t);
  }
  function Kb(e, t) {
    e._insertCharacters(t), e.framesetOk = false;
  }
  function Ko(e) {
    for (; e.treeAdapter.getNamespaceURI(e.openElements.current) !== U.HTML && e.openElements.currentTagId !== void 0 && !e._isIntegrationPoint(e.openElements.currentTagId, e.openElements.current); ) e.openElements.pop();
  }
  function Wb(e, t) {
    if (cg(t)) Ko(e), e._startTagOutsideForeignContent(t);
    else {
      const n = e._getAdjustedCurrentElement(), r = e.treeAdapter.getNamespaceURI(n);
      r === U.MATHML ? Lo(t) : r === U.SVG && (lg(t), Fo(t)), Ri(t), t.selfClosing ? e._appendElement(t, r) : e._insertElement(t, r), t.ackSelfClosing = true;
    }
  }
  function Gb(e, t) {
    if (t.tagID === c.P || t.tagID === c.BR) {
      Ko(e), e._endTagOutsideForeignContent(t);
      return;
    }
    for (let n = e.openElements.stackTop; n > 0; n--) {
      const r = e.openElements.items[n];
      if (e.treeAdapter.getNamespaceURI(r) === U.HTML) {
        e._endTagOutsideForeignContent(t);
        break;
      }
      const i = e.treeAdapter.getTagName(r);
      if (i.toLowerCase() === t.tagName) {
        t.tagName = i, e.openElements.shortenToLength(n);
        break;
      }
    }
  }
  N.AREA, N.BASE, N.BASEFONT, N.BGSOUND, N.BR, N.COL, N.EMBED, N.FRAME, N.HR, N.IMG, N.INPUT, N.KEYGEN, N.LINK, N.META, N.PARAM, N.SOURCE, N.TRACK, N.WBR;
  const Qb = /<(\/?)(iframe|noembed|noframes|plaintext|script|style|textarea|title|xmp)(?=[\t\n\f\r />])/gi, Xb = /* @__PURE__ */ new Set([
    "mdxFlowExpression",
    "mdxJsxFlowElement",
    "mdxJsxTextElement",
    "mdxTextExpression",
    "mdxjsEsm"
  ]), ms = {
    sourceCodeLocationInfo: true,
    scriptingEnabled: false
  };
  function Wo(e, t) {
    const n = aT(e), r = oi("type", {
      handlers: {
        root: Jb,
        element: Zb,
        text: eT,
        comment: Qo,
        doctype: tT,
        raw: rT
      },
      unknown: iT
    }), i = {
      parser: n ? new hs(ms) : hs.getFragmentParser(void 0, ms),
      handle(a) {
        r(a, i);
      },
      stitches: false,
      options: t || {}
    };
    r(e, i), Lt(i, ze());
    const u = n ? i.parser.document : i.parser.getFragment(), s = cE(u, {
      file: i.options.file
    });
    return i.stitches && ge(s, "comment", function(a, o, l) {
      const h = a;
      if (h.value.stitch && l && o !== void 0) {
        const f = l.children;
        return f[o] = h.value.stitch, o;
      }
    }), s.type === "root" && s.children.length === 1 && s.children[0].type === e.type ? s.children[0] : s;
  }
  function Go(e, t) {
    let n = -1;
    if (e) for (; ++n < e.length; ) t.handle(e[n]);
  }
  function Jb(e, t) {
    Go(e.children, t);
  }
  function Zb(e, t) {
    uT(e, t), Go(e.children, t), sT(e, t);
  }
  function eT(e, t) {
    t.parser.tokenizer.state > 4 && (t.parser.tokenizer.state = 0);
    const n = {
      type: te.CHARACTER,
      chars: e.value,
      location: hn(e)
    };
    Lt(t, ze(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken);
  }
  function tT(e, t) {
    const n = {
      type: te.DOCTYPE,
      name: "html",
      forceQuirks: false,
      publicId: "",
      systemId: "",
      location: hn(e)
    };
    Lt(t, ze(e)), t.parser.currentToken = n, t.parser._processToken(t.parser.currentToken);
  }
  function nT(e, t) {
    t.stitches = true;
    const n = oT(e);
    if ("children" in e && "children" in n) {
      const r = Wo({
        type: "root",
        children: e.children
      }, t.options);
      n.children = r.children;
    }
    Qo({
      type: "comment",
      value: {
        stitch: n
      }
    }, t);
  }
  function Qo(e, t) {
    const n = e.value, r = {
      type: te.COMMENT,
      data: n,
      location: hn(e)
    };
    Lt(t, ze(e)), t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken);
  }
  function rT(e, t) {
    if (t.parser.tokenizer.preprocessor.html = "", t.parser.tokenizer.preprocessor.pos = -1, t.parser.tokenizer.preprocessor.lastGapPos = -2, t.parser.tokenizer.preprocessor.gapStack = [], t.parser.tokenizer.preprocessor.skipNextNewLine = false, t.parser.tokenizer.preprocessor.lastChunkWritten = false, t.parser.tokenizer.preprocessor.endOfChunkHit = false, t.parser.tokenizer.preprocessor.isEol = false, Xo(t, ze(e)), t.parser.tokenizer.write(t.options.tagfilter ? e.value.replace(Qb, "&lt;$1$2") : e.value, false), t.parser.tokenizer._runParsingLoop(), t.parser.tokenizer.state === 72 || t.parser.tokenizer.state === 78) {
      t.parser.tokenizer.preprocessor.lastChunkWritten = true;
      const n = t.parser.tokenizer._consume();
      t.parser.tokenizer._callState(n);
    }
  }
  function iT(e, t) {
    const n = e;
    if (t.options.passThrough && t.options.passThrough.includes(n.type)) nT(n, t);
    else {
      let r = "";
      throw Xb.has(n.type) && (r = ". It looks like you are using MDX nodes with `hast-util-raw` (or `rehype-raw`). If you use this because you are using remark or rehype plugins that inject `'html'` nodes, then please raise an issue with that plugin, as its a bad and slow idea. If you use this because you are using markdown syntax, then you have to configure this utility (or plugin) to pass through these nodes (see `passThrough` in docs), but you can also migrate to use the MDX syntax"), new Error("Cannot compile `" + n.type + "` node" + r);
    }
  }
  function Lt(e, t) {
    Xo(e, t);
    const n = e.parser.tokenizer.currentCharacterToken;
    n && n.location && (n.location.endLine = e.parser.tokenizer.preprocessor.line, n.location.endCol = e.parser.tokenizer.preprocessor.col + 1, n.location.endOffset = e.parser.tokenizer.preprocessor.offset + 1, e.parser.currentToken = n, e.parser._processToken(e.parser.currentToken)), e.parser.tokenizer.paused = false, e.parser.tokenizer.inLoop = false, e.parser.tokenizer.active = false, e.parser.tokenizer.returnState = ce.DATA, e.parser.tokenizer.charRefCode = -1, e.parser.tokenizer.consumedAfterSnapshot = -1, e.parser.tokenizer.currentLocation = null, e.parser.tokenizer.currentCharacterToken = null, e.parser.tokenizer.currentToken = null, e.parser.tokenizer.currentAttr = {
      name: "",
      value: ""
    };
  }
  function Xo(e, t) {
    if (t && t.offset !== void 0) {
      const n = {
        startLine: t.line,
        startCol: t.column,
        startOffset: t.offset,
        endLine: -1,
        endCol: -1,
        endOffset: -1
      };
      e.parser.tokenizer.preprocessor.lineStartPos = -t.column + 1, e.parser.tokenizer.preprocessor.droppedBufferSize = t.offset, e.parser.tokenizer.preprocessor.line = t.line, e.parser.tokenizer.currentLocation = n;
    }
  }
  function uT(e, t) {
    const n = e.tagName.toLowerCase();
    if (t.parser.tokenizer.state === ce.PLAINTEXT) return;
    Lt(t, ze(e));
    const r = t.parser.openElements.current;
    let i = "namespaceURI" in r ? r.namespaceURI : rt.html;
    i === rt.html && n === "svg" && (i = rt.svg);
    const u = dE({
      ...e,
      children: []
    }, {
      space: i === rt.svg ? "svg" : "html"
    }), s = {
      type: te.START_TAG,
      tagName: n,
      tagID: xt(n),
      selfClosing: false,
      ackSelfClosing: false,
      attrs: "attrs" in u ? u.attrs : [],
      location: hn(e)
    };
    t.parser.currentToken = s, t.parser._processToken(t.parser.currentToken), t.parser.tokenizer.lastStartTagName = n;
  }
  function sT(e, t) {
    const n = e.tagName.toLowerCase();
    if (!t.parser.tokenizer.inForeignNode && Jc.includes(n) || t.parser.tokenizer.state === ce.PLAINTEXT) return;
    Lt(t, jn(e));
    const r = {
      type: te.END_TAG,
      tagName: n,
      tagID: xt(n),
      selfClosing: false,
      ackSelfClosing: false,
      attrs: [],
      location: hn(e)
    };
    t.parser.currentToken = r, t.parser._processToken(t.parser.currentToken), n === t.parser.tokenizer.lastStartTagName && (t.parser.tokenizer.state === ce.RCDATA || t.parser.tokenizer.state === ce.RAWTEXT || t.parser.tokenizer.state === ce.SCRIPT_DATA) && (t.parser.tokenizer.state = ce.DATA);
  }
  function aT(e) {
    const t = e.type === "root" ? e.children[0] : e;
    return !!(t && (t.type === "doctype" || t.type === "element" && t.tagName.toLowerCase() === "html"));
  }
  function hn(e) {
    const t = ze(e) || {
      line: void 0,
      column: void 0,
      offset: void 0
    }, n = jn(e) || {
      line: void 0,
      column: void 0,
      offset: void 0
    };
    return {
      startLine: t.line,
      startCol: t.column,
      startOffset: t.offset,
      endLine: n.line,
      endCol: n.column,
      endOffset: n.offset
    };
  }
  function oT(e) {
    return "children" in e ? xe({
      ...e,
      children: []
    }) : xe(e);
  }
  function cT(e) {
    return function(t, n) {
      return Wo(t, {
        ...e,
        file: n
      });
    };
  }
  function lT(e, t) {
    const n = {
      type: "element",
      tagName: "em",
      properties: t.attributes || {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  const Es = /[\t\n\r]/g;
  function fT(e, t = 4) {
    const n = [];
    let r = 0, i = 0, u = -1;
    if (typeof e != "string") throw new TypeError("detab expected string");
    for (; i < e.length; ) {
      Es.lastIndex = i;
      const s = Es.exec(e), a = s ? s.index : e.length;
      if (e.codePointAt(a) === 9) {
        const o = t - (u + a - i + 1) % t;
        n.push(e.slice(r, a), " ".repeat(o)), u += a - i + o, r = a + 1;
      } else u = -1;
      i = a + 1;
    }
    return n.push(e.slice(r)), n.join("");
  }
  function hT(e) {
    if (!(e == null ? void 0 : e.trim())) return {
      language: void 0,
      highlights: void 0,
      filename: void 0,
      meta: void 0
    };
    const t = e.replace(/[{|[](.+)/, "").match(/^[^ \t]+(?=[ \t]|$)/), n = e.match(/\{([^}]*)\}/), r = e.match(/\[(.*)\]/), i = e.replace((t == null ? void 0 : t[0]) ?? "", "").replace((n == null ? void 0 : n[0]) ?? "", "").replace((r == null ? void 0 : r[0]) ?? "", "").trim();
    let u;
    return (r == null ? void 0 : r[1]) && (u = r[1].replace(/\\([[\]{}().*+?^$|])/g, "$1")), {
      language: (t == null ? void 0 : t[0]) || void 0,
      highlights: pT((n == null ? void 0 : n[1]) || void 0),
      filename: u,
      meta: i
    };
  }
  function pT(e) {
    const t = String(e || "").split(",").filter(Boolean).flatMap((n) => {
      const [r, i] = n.trim().split("-").map((u) => Number(u.trim()));
      return Array.from({
        length: (i || r || 0) - (r || 0) + 1
      }).map((u, s) => (r || 0) + s);
    });
    return t.length ? t : void 0;
  }
  const dT = /^<\/?([\w-]+)(\s[^>]*?)?\/?>/;
  function Jo(e) {
    const t = String(e).match(dT);
    return t && t[1];
  }
  const mT = (e, t) => {
    const n = (t.lang || "") + " " + (t.meta || ""), { language: r = "text", highlights: i, filename: u, meta: s } = hT(n), a = t.value ? fT(t.value + `
`) : "";
    let o = {
      type: "element",
      tagName: "code",
      properties: {
        __ignoreMap: ""
      },
      children: [
        {
          type: "text",
          value: a
        }
      ]
    };
    s && (o.data = {
      meta: s
    }), e.patch(t, o), o = e.applyData(t, o);
    const l = {
      language: r || "text",
      filename: u,
      highlights: i,
      meta: s,
      code: a
    };
    return r && (l.className = [
      "language-" + r
    ]), o = {
      type: "element",
      tagName: "pre",
      properties: l,
      children: [
        o
      ]
    }, e.patch(t, o), o;
  };
  function ET(e, t) {
    var _a2;
    const n = Jo(t.value);
    if (n && /[A-Z]/.test(n) && (t.value = t.value.replace(n, en(n))), e.dangerous || ((_a2 = e.options) == null ? void 0 : _a2.allowDangerousHtml)) {
      const r = {
        type: "raw",
        value: t.value
      };
      return e.patch(t, r), e.applyData(t, r);
    }
  }
  function gT(e, t) {
    const n = {
      ...t.attributes || {},
      href: Xe(t.url)
    };
    t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
      type: "element",
      tagName: "a",
      properties: n,
      children: e.all(t)
    };
    return e.patch(t, r), e.applyData(t, r);
  }
  function bT(e, t) {
    const n = {}, r = e.all(t);
    let i = -1;
    for (typeof t.start == "number" && t.start !== 1 && (n.start = t.start); ++i < r.length; ) {
      const s = r[i];
      if (s && s.type === "element" && s.tagName === "li" && s.properties && Array.isArray(s.properties.className) && s.properties.className.includes("task-list-item")) {
        n.className = [
          "contains-task-list"
        ];
        break;
      }
    }
    (t.children || []).some((s) => typeof s.checked == "boolean") && (n.className = [
      "contains-task-list"
    ]);
    const u = {
      type: "element",
      tagName: t.ordered ? "ol" : "ul",
      properties: n,
      children: e.wrap(r, true)
    };
    return e.patch(t, u), e.applyData(t, u);
  }
  function TT(e, t) {
    if (t.children && t.children[0] && t.children[0].type === "html") {
      const r = en(Jo(t.children[0].value) || "div");
      if (!al.has(r)) return e.all(t);
    }
    const n = {
      type: "element",
      tagName: "p",
      properties: {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function AT(e, t) {
    const n = {
      ...t.attributes,
      src: Xe(t.url)
    };
    t.alt !== null && t.alt !== void 0 && (n.alt = t.alt), t.title !== null && t.title !== void 0 && (n.title = t.title);
    const r = {
      type: "element",
      tagName: "img",
      properties: n,
      children: []
    };
    return e.patch(t, r), e.applyData(t, r);
  }
  function CT(e, t) {
    const n = {
      type: "element",
      tagName: "strong",
      properties: t.attributes || {},
      children: e.all(t)
    };
    return e.patch(t, n), e.applyData(t, n);
  }
  function _T(e, t) {
    var _a2, _b2;
    const n = ((_a2 = t.attributes) == null ? void 0 : _a2.language) || ((_b2 = t.attributes) == null ? void 0 : _b2.lang), r = {
      type: "text",
      value: t.value.replace(/\r?\n|\r/g, " ")
    };
    e.patch(t, r);
    const i = {
      type: "element",
      tagName: "code",
      properties: t.attributes || {},
      children: [
        r
      ]
    }, u = (i.properties.class || "").split(" ");
    return delete i.properties.class, n && (i.properties.language = n, delete i.properties.lang, u.push("language-" + n)), i.properties.className = u.join(" "), e.patch(t, i), e.applyData(t, i);
  }
  function DT(e, t) {
    var _a2;
    const n = {
      type: "element",
      tagName: t.name,
      properties: {
        ...t.attributes,
        ...(_a2 = t.data) == null ? void 0 : _a2.hProperties
      },
      children: e.all(t)
    };
    return e.patch(t, n), n.attributes = t.attributes, n.fmAttributes = t.fmAttributes, n;
  }
  const yT = {
    emphasis: lT,
    code: mT,
    link: gT,
    paragraph: TT,
    html: ET,
    list: bT,
    image: AT,
    strong: CT,
    inlineCode: _T,
    containerComponent: DT
  }, Zo = {
    remark: {
      plugins: {
        "remark-mdc": {
          instance: Za
        },
        "remark-gfm": {
          instance: ho
        }
      }
    },
    rehype: {
      options: {
        handlers: yT,
        allowDangerousHtml: true
      },
      plugins: {
        "rehype-external-links": {
          instance: Q1
        },
        "rehype-sort-attribute-values": {
          instance: X1
        },
        "rehype-sort-attributes": {
          instance: J1
        },
        "rehype-raw": {
          instance: cT,
          options: {
            passThrough: [
              "element"
            ]
          }
        }
      }
    },
    highlight: false,
    toc: {
      searchDepth: 2,
      depth: 2
    }
  };
  function ec(e) {
    return "children" in e ? tc(e) : "value" in e ? e.value : "";
  }
  function kT(e) {
    return e.type === "text" ? e.value : "children" in e ? tc(e) : "";
  }
  function tc(e) {
    let t = -1;
    const n = [];
    for (; ++t < e.children.length; ) n[t] = kT(e.children[t]);
    return n.join("");
  }
  const IT = /[\0-\x1F!-,\.\/:-@\[-\^`\{-\xA9\xAB-\xB4\xB6-\xB9\xBB-\xBF\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0378\u0379\u037E\u0380-\u0385\u0387\u038B\u038D\u03A2\u03F6\u0482\u0530\u0557\u0558\u055A-\u055F\u0589-\u0590\u05BE\u05C0\u05C3\u05C6\u05C8-\u05CF\u05EB-\u05EE\u05F3-\u060F\u061B-\u061F\u066A-\u066D\u06D4\u06DD\u06DE\u06E9\u06FD\u06FE\u0700-\u070F\u074B\u074C\u07B2-\u07BF\u07F6-\u07F9\u07FB\u07FC\u07FE\u07FF\u082E-\u083F\u085C-\u085F\u086B-\u089F\u08B5\u08C8-\u08D2\u08E2\u0964\u0965\u0970\u0984\u098D\u098E\u0991\u0992\u09A9\u09B1\u09B3-\u09B5\u09BA\u09BB\u09C5\u09C6\u09C9\u09CA\u09CF-\u09D6\u09D8-\u09DB\u09DE\u09E4\u09E5\u09F2-\u09FB\u09FD\u09FF\u0A00\u0A04\u0A0B-\u0A0E\u0A11\u0A12\u0A29\u0A31\u0A34\u0A37\u0A3A\u0A3B\u0A3D\u0A43-\u0A46\u0A49\u0A4A\u0A4E-\u0A50\u0A52-\u0A58\u0A5D\u0A5F-\u0A65\u0A76-\u0A80\u0A84\u0A8E\u0A92\u0AA9\u0AB1\u0AB4\u0ABA\u0ABB\u0AC6\u0ACA\u0ACE\u0ACF\u0AD1-\u0ADF\u0AE4\u0AE5\u0AF0-\u0AF8\u0B00\u0B04\u0B0D\u0B0E\u0B11\u0B12\u0B29\u0B31\u0B34\u0B3A\u0B3B\u0B45\u0B46\u0B49\u0B4A\u0B4E-\u0B54\u0B58-\u0B5B\u0B5E\u0B64\u0B65\u0B70\u0B72-\u0B81\u0B84\u0B8B-\u0B8D\u0B91\u0B96-\u0B98\u0B9B\u0B9D\u0BA0-\u0BA2\u0BA5-\u0BA7\u0BAB-\u0BAD\u0BBA-\u0BBD\u0BC3-\u0BC5\u0BC9\u0BCE\u0BCF\u0BD1-\u0BD6\u0BD8-\u0BE5\u0BF0-\u0BFF\u0C0D\u0C11\u0C29\u0C3A-\u0C3C\u0C45\u0C49\u0C4E-\u0C54\u0C57\u0C5B-\u0C5F\u0C64\u0C65\u0C70-\u0C7F\u0C84\u0C8D\u0C91\u0CA9\u0CB4\u0CBA\u0CBB\u0CC5\u0CC9\u0CCE-\u0CD4\u0CD7-\u0CDD\u0CDF\u0CE4\u0CE5\u0CF0\u0CF3-\u0CFF\u0D0D\u0D11\u0D45\u0D49\u0D4F-\u0D53\u0D58-\u0D5E\u0D64\u0D65\u0D70-\u0D79\u0D80\u0D84\u0D97-\u0D99\u0DB2\u0DBC\u0DBE\u0DBF\u0DC7-\u0DC9\u0DCB-\u0DCE\u0DD5\u0DD7\u0DE0-\u0DE5\u0DF0\u0DF1\u0DF4-\u0E00\u0E3B-\u0E3F\u0E4F\u0E5A-\u0E80\u0E83\u0E85\u0E8B\u0EA4\u0EA6\u0EBE\u0EBF\u0EC5\u0EC7\u0ECE\u0ECF\u0EDA\u0EDB\u0EE0-\u0EFF\u0F01-\u0F17\u0F1A-\u0F1F\u0F2A-\u0F34\u0F36\u0F38\u0F3A-\u0F3D\u0F48\u0F6D-\u0F70\u0F85\u0F98\u0FBD-\u0FC5\u0FC7-\u0FFF\u104A-\u104F\u109E\u109F\u10C6\u10C8-\u10CC\u10CE\u10CF\u10FB\u1249\u124E\u124F\u1257\u1259\u125E\u125F\u1289\u128E\u128F\u12B1\u12B6\u12B7\u12BF\u12C1\u12C6\u12C7\u12D7\u1311\u1316\u1317\u135B\u135C\u1360-\u137F\u1390-\u139F\u13F6\u13F7\u13FE-\u1400\u166D\u166E\u1680\u169B-\u169F\u16EB-\u16ED\u16F9-\u16FF\u170D\u1715-\u171F\u1735-\u173F\u1754-\u175F\u176D\u1771\u1774-\u177F\u17D4-\u17D6\u17D8-\u17DB\u17DE\u17DF\u17EA-\u180A\u180E\u180F\u181A-\u181F\u1879-\u187F\u18AB-\u18AF\u18F6-\u18FF\u191F\u192C-\u192F\u193C-\u1945\u196E\u196F\u1975-\u197F\u19AC-\u19AF\u19CA-\u19CF\u19DA-\u19FF\u1A1C-\u1A1F\u1A5F\u1A7D\u1A7E\u1A8A-\u1A8F\u1A9A-\u1AA6\u1AA8-\u1AAF\u1AC1-\u1AFF\u1B4C-\u1B4F\u1B5A-\u1B6A\u1B74-\u1B7F\u1BF4-\u1BFF\u1C38-\u1C3F\u1C4A-\u1C4C\u1C7E\u1C7F\u1C89-\u1C8F\u1CBB\u1CBC\u1CC0-\u1CCF\u1CD3\u1CFB-\u1CFF\u1DFA\u1F16\u1F17\u1F1E\u1F1F\u1F46\u1F47\u1F4E\u1F4F\u1F58\u1F5A\u1F5C\u1F5E\u1F7E\u1F7F\u1FB5\u1FBD\u1FBF-\u1FC1\u1FC5\u1FCD-\u1FCF\u1FD4\u1FD5\u1FDC-\u1FDF\u1FED-\u1FF1\u1FF5\u1FFD-\u203E\u2041-\u2053\u2055-\u2070\u2072-\u207E\u2080-\u208F\u209D-\u20CF\u20F1-\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F-\u215F\u2189-\u24B5\u24EA-\u2BFF\u2C2F\u2C5F\u2CE5-\u2CEA\u2CF4-\u2CFF\u2D26\u2D28-\u2D2C\u2D2E\u2D2F\u2D68-\u2D6E\u2D70-\u2D7E\u2D97-\u2D9F\u2DA7\u2DAF\u2DB7\u2DBF\u2DC7\u2DCF\u2DD7\u2DDF\u2E00-\u2E2E\u2E30-\u3004\u3008-\u3020\u3030\u3036\u3037\u303D-\u3040\u3097\u3098\u309B\u309C\u30A0\u30FB\u3100-\u3104\u3130\u318F-\u319F\u31C0-\u31EF\u3200-\u33FF\u4DC0-\u4DFF\u9FFD-\u9FFF\uA48D-\uA4CF\uA4FE\uA4FF\uA60D-\uA60F\uA62C-\uA63F\uA673\uA67E\uA6F2-\uA716\uA720\uA721\uA789\uA78A\uA7C0\uA7C1\uA7CB-\uA7F4\uA828-\uA82B\uA82D-\uA83F\uA874-\uA87F\uA8C6-\uA8CF\uA8DA-\uA8DF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA954-\uA95F\uA97D-\uA97F\uA9C1-\uA9CE\uA9DA-\uA9DF\uA9FF\uAA37-\uAA3F\uAA4E\uAA4F\uAA5A-\uAA5F\uAA77-\uAA79\uAAC3-\uAADA\uAADE\uAADF\uAAF0\uAAF1\uAAF7-\uAB00\uAB07\uAB08\uAB0F\uAB10\uAB17-\uAB1F\uAB27\uAB2F\uAB5B\uAB6A-\uAB6F\uABEB\uABEE\uABEF\uABFA-\uABFF\uD7A4-\uD7AF\uD7C7-\uD7CA\uD7FC-\uD7FF\uE000-\uF8FF\uFA6E\uFA6F\uFADA-\uFAFF\uFB07-\uFB12\uFB18-\uFB1C\uFB29\uFB37\uFB3D\uFB3F\uFB42\uFB45\uFBB2-\uFBD2\uFD3E-\uFD4F\uFD90\uFD91\uFDC8-\uFDEF\uFDFC-\uFDFF\uFE10-\uFE1F\uFE30-\uFE32\uFE35-\uFE4C\uFE50-\uFE6F\uFE75\uFEFD-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF3E\uFF40\uFF5B-\uFF65\uFFBF-\uFFC1\uFFC8\uFFC9\uFFD0\uFFD1\uFFD8\uFFD9\uFFDD-\uFFFF]|\uD800[\uDC0C\uDC27\uDC3B\uDC3E\uDC4E\uDC4F\uDC5E-\uDC7F\uDCFB-\uDD3F\uDD75-\uDDFC\uDDFE-\uDE7F\uDE9D-\uDE9F\uDED1-\uDEDF\uDEE1-\uDEFF\uDF20-\uDF2C\uDF4B-\uDF4F\uDF7B-\uDF7F\uDF9E\uDF9F\uDFC4-\uDFC7\uDFD0\uDFD6-\uDFFF]|\uD801[\uDC9E\uDC9F\uDCAA-\uDCAF\uDCD4-\uDCD7\uDCFC-\uDCFF\uDD28-\uDD2F\uDD64-\uDDFF\uDF37-\uDF3F\uDF56-\uDF5F\uDF68-\uDFFF]|\uD802[\uDC06\uDC07\uDC09\uDC36\uDC39-\uDC3B\uDC3D\uDC3E\uDC56-\uDC5F\uDC77-\uDC7F\uDC9F-\uDCDF\uDCF3\uDCF6-\uDCFF\uDD16-\uDD1F\uDD3A-\uDD7F\uDDB8-\uDDBD\uDDC0-\uDDFF\uDE04\uDE07-\uDE0B\uDE14\uDE18\uDE36\uDE37\uDE3B-\uDE3E\uDE40-\uDE5F\uDE7D-\uDE7F\uDE9D-\uDEBF\uDEC8\uDEE7-\uDEFF\uDF36-\uDF3F\uDF56-\uDF5F\uDF73-\uDF7F\uDF92-\uDFFF]|\uD803[\uDC49-\uDC7F\uDCB3-\uDCBF\uDCF3-\uDCFF\uDD28-\uDD2F\uDD3A-\uDE7F\uDEAA\uDEAD-\uDEAF\uDEB2-\uDEFF\uDF1D-\uDF26\uDF28-\uDF2F\uDF51-\uDFAF\uDFC5-\uDFDF\uDFF7-\uDFFF]|\uD804[\uDC47-\uDC65\uDC70-\uDC7E\uDCBB-\uDCCF\uDCE9-\uDCEF\uDCFA-\uDCFF\uDD35\uDD40-\uDD43\uDD48-\uDD4F\uDD74\uDD75\uDD77-\uDD7F\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDFF\uDE12\uDE38-\uDE3D\uDE3F-\uDE7F\uDE87\uDE89\uDE8E\uDE9E\uDEA9-\uDEAF\uDEEB-\uDEEF\uDEFA-\uDEFF\uDF04\uDF0D\uDF0E\uDF11\uDF12\uDF29\uDF31\uDF34\uDF3A\uDF45\uDF46\uDF49\uDF4A\uDF4E\uDF4F\uDF51-\uDF56\uDF58-\uDF5C\uDF64\uDF65\uDF6D-\uDF6F\uDF75-\uDFFF]|\uD805[\uDC4B-\uDC4F\uDC5A-\uDC5D\uDC62-\uDC7F\uDCC6\uDCC8-\uDCCF\uDCDA-\uDD7F\uDDB6\uDDB7\uDDC1-\uDDD7\uDDDE-\uDDFF\uDE41-\uDE43\uDE45-\uDE4F\uDE5A-\uDE7F\uDEB9-\uDEBF\uDECA-\uDEFF\uDF1B\uDF1C\uDF2C-\uDF2F\uDF3A-\uDFFF]|\uD806[\uDC3B-\uDC9F\uDCEA-\uDCFE\uDD07\uDD08\uDD0A\uDD0B\uDD14\uDD17\uDD36\uDD39\uDD3A\uDD44-\uDD4F\uDD5A-\uDD9F\uDDA8\uDDA9\uDDD8\uDDD9\uDDE2\uDDE5-\uDDFF\uDE3F-\uDE46\uDE48-\uDE4F\uDE9A-\uDE9C\uDE9E-\uDEBF\uDEF9-\uDFFF]|\uD807[\uDC09\uDC37\uDC41-\uDC4F\uDC5A-\uDC71\uDC90\uDC91\uDCA8\uDCB7-\uDCFF\uDD07\uDD0A\uDD37-\uDD39\uDD3B\uDD3E\uDD48-\uDD4F\uDD5A-\uDD5F\uDD66\uDD69\uDD8F\uDD92\uDD99-\uDD9F\uDDAA-\uDEDF\uDEF7-\uDFAF\uDFB1-\uDFFF]|\uD808[\uDF9A-\uDFFF]|\uD809[\uDC6F-\uDC7F\uDD44-\uDFFF]|[\uD80A\uD80B\uD80E-\uD810\uD812-\uD819\uD824-\uD82B\uD82D\uD82E\uD830-\uD833\uD837\uD839\uD83D\uD83F\uD87B-\uD87D\uD87F\uD885-\uDB3F\uDB41-\uDBFF][\uDC00-\uDFFF]|\uD80D[\uDC2F-\uDFFF]|\uD811[\uDE47-\uDFFF]|\uD81A[\uDE39-\uDE3F\uDE5F\uDE6A-\uDECF\uDEEE\uDEEF\uDEF5-\uDEFF\uDF37-\uDF3F\uDF44-\uDF4F\uDF5A-\uDF62\uDF78-\uDF7C\uDF90-\uDFFF]|\uD81B[\uDC00-\uDE3F\uDE80-\uDEFF\uDF4B-\uDF4E\uDF88-\uDF8E\uDFA0-\uDFDF\uDFE2\uDFE5-\uDFEF\uDFF2-\uDFFF]|\uD821[\uDFF8-\uDFFF]|\uD823[\uDCD6-\uDCFF\uDD09-\uDFFF]|\uD82C[\uDD1F-\uDD4F\uDD53-\uDD63\uDD68-\uDD6F\uDEFC-\uDFFF]|\uD82F[\uDC6B-\uDC6F\uDC7D-\uDC7F\uDC89-\uDC8F\uDC9A-\uDC9C\uDC9F-\uDFFF]|\uD834[\uDC00-\uDD64\uDD6A-\uDD6C\uDD73-\uDD7A\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDE41\uDE45-\uDFFF]|\uD835[\uDC55\uDC9D\uDCA0\uDCA1\uDCA3\uDCA4\uDCA7\uDCA8\uDCAD\uDCBA\uDCBC\uDCC4\uDD06\uDD0B\uDD0C\uDD15\uDD1D\uDD3A\uDD3F\uDD45\uDD47-\uDD49\uDD51\uDEA6\uDEA7\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3\uDFCC\uDFCD]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85-\uDE9A\uDEA0\uDEB0-\uDFFF]|\uD838[\uDC07\uDC19\uDC1A\uDC22\uDC25\uDC2B-\uDCFF\uDD2D-\uDD2F\uDD3E\uDD3F\uDD4A-\uDD4D\uDD4F-\uDEBF\uDEFA-\uDFFF]|\uD83A[\uDCC5-\uDCCF\uDCD7-\uDCFF\uDD4C-\uDD4F\uDD5A-\uDFFF]|\uD83B[\uDC00-\uDDFF\uDE04\uDE20\uDE23\uDE25\uDE26\uDE28\uDE33\uDE38\uDE3A\uDE3C-\uDE41\uDE43-\uDE46\uDE48\uDE4A\uDE4C\uDE50\uDE53\uDE55\uDE56\uDE58\uDE5A\uDE5C\uDE5E\uDE60\uDE63\uDE65\uDE66\uDE6B\uDE73\uDE78\uDE7D\uDE7F\uDE8A\uDE9C-\uDEA0\uDEA4\uDEAA\uDEBC-\uDFFF]|\uD83C[\uDC00-\uDD2F\uDD4A-\uDD4F\uDD6A-\uDD6F\uDD8A-\uDFFF]|\uD83E[\uDC00-\uDFEF\uDFFA-\uDFFF]|\uD869[\uDEDE-\uDEFF]|\uD86D[\uDF35-\uDF3F]|\uD86E[\uDC1E\uDC1F]|\uD873[\uDEA2-\uDEAF]|\uD87A[\uDFE1-\uDFFF]|\uD87E[\uDE1E-\uDFFF]|\uD884[\uDF4B-\uDFFF]|\uDB40[\uDC00-\uDCFF\uDDF0-\uDFFF]/g, NT = Object.hasOwnProperty;
  class ST {
    constructor() {
      this.occurrences, this.reset();
    }
    slug(t, n) {
      const r = this;
      let i = xT(t, n === true);
      const u = i;
      for (; NT.call(r.occurrences, i); ) r.occurrences[u]++, i = u + "-" + r.occurrences[u];
      return r.occurrences[i] = 0, i;
    }
    reset() {
      this.occurrences = /* @__PURE__ */ Object.create(null);
    }
  }
  function xT(e, t) {
    return typeof e != "string" ? "" : (t || (e = e.toLowerCase()), e.replace(IT, "").replace(/ /g, "-"));
  }
  const LT = [
    "object"
  ], FT = [
    "srcdoc",
    "formaction"
  ], OT = [
    "javascript:",
    "data:text/html",
    "vbscript:",
    "data:text/javascript",
    "data:text/vbscript",
    "data:text/css",
    "data:text/plain",
    "data:text/xml"
  ];
  function wT(e) {
    const n = decodeURIComponent(e).replace(/&#x([0-9a-f]+);?/gi, "").replace(/&#(\d+);?/g, "").replace(/&[a-z]+;?/gi, "");
    try {
      const r = new URL(n, "http://example.com");
      if (r.origin === "http://example.com") return true;
      if (OT.some((i) => r.protocol.toLowerCase().startsWith(i))) return false;
    } catch {
      return false;
    }
    return true;
  }
  const RT = (e, t) => (e = e.toLowerCase(), e.startsWith("on") || FT.includes(e) ? false : e === "href" || e === "src" ? wT(t) : true), BT = (e, t) => LT.includes(e) ? {} : t ? (t = Object.fromEntries(Object.entries(t).filter(([n, r]) => {
    if (t == null ? void 0 : t[`:${n}`]) return false;
    const i = RT(n, r);
    return i || console.warn(`[@nuxtjs/mdc] removing unsafe attribute: ${n}="${r}"`), i;
  })), e === "pre" && typeof t.highlights == "string" && (t.highlights = t.highlights.split(" ").map((n) => Number.parseInt(n))), t) : {};
  function PT(e = {}) {
    const t = new ST();
    function n(r, i) {
      var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2;
      if (r.type === "root") return {
        type: "root",
        children: r.children.map((s) => n(s, r)).filter(Boolean)
      };
      const u = ((_b2 = (_a2 = r.position) == null ? void 0 : _a2.start) == null ? void 0 : _b2.offset) && ((_d2 = (_c2 = r.position) == null ? void 0 : _c2.end) == null ? void 0 : _d2.offset) ? {
        start: r.position.start.offset,
        end: r.position.end.offset
      } : void 0;
      if (r.type === "element") {
        if (r.tagName === "p" && r.children.every((o) => o.type === "text" && /^\s*$/.test(o.value))) return null;
        if (r.tagName === "li") {
          let o = false;
          r.children = (_e = r.children) == null ? void 0 : _e.flatMap((l) => l.type === "element" && l.tagName === "p" ? (o && l.children.unshift({
            type: "element",
            tagName: "br",
            properties: {},
            children: []
          }), o = true, l.children) : l);
        }
        ((_f2 = r.tagName) == null ? void 0 : _f2.match(/^h\d$/)) && (r.properties = r.properties || {}, r.properties.id = String(((_g2 = r.properties) == null ? void 0 : _g2.id) || t.slug(ec(r))).replace(/-+/g, "-").replace(/^-|-$/g, "").replace(/^(\d)/, "_$1")), r.tagName === "component-slot" && (r.tagName = "template");
        const s = (r.tagName === "template" && ((_h2 = r.content) == null ? void 0 : _h2.children.length) ? r.content.children : r.children).map((o) => n(o, r)).filter(Boolean), a = {
          type: "element",
          tag: r.tagName,
          props: BT(r.tagName, r.properties),
          children: s
        };
        return e.keepPosition && (a.position = u), a;
      }
      return r.type === "text" && (!/^\n+$/.test(r.value || "") || ((_i2 = i == null ? void 0 : i.properties) == null ? void 0 : _i2.emptyLinePlaceholder)) ? e.keepPosition ? {
        type: "text",
        value: r.value,
        position: u
      } : {
        type: "text",
        value: r.value
      } : e.keepComments && r.type === "comment" ? e.keepPosition ? {
        type: "comment",
        value: r.value,
        position: u
      } : {
        type: "comment",
        value: r.value
      } : null;
    }
    this.Compiler = (r) => {
      const i = n(r);
      let u;
      const s = r.children.findIndex((a) => {
        var _a2;
        return a.type === "comment" && ((_a2 = a.value) == null ? void 0 : _a2.trim()) === "more";
      });
      if (s !== -1 && (u = n({
        type: "root",
        children: r.children.slice(0, s)
      }), u.children.find((a) => a.type === "element" && a.tag === "pre"))) {
        const a = i.children[i.children.length - 1];
        a && a.type === "element" && a.tag === "style" && u.children.push(a);
      }
      return i.children = (i.children || []).filter((a) => a.type !== "text"), {
        body: i,
        excerpt: u
      };
    };
  }
  let vt, xr;
  const nc = async (e = {}) => {
    var _a2, _b2, _c2, _d2, _e, _f2, _g2, _h2, _i2, _j, _k, _l2, _m2;
    vt || (vt = await Ln(() => import("./Bhl0HI7y.js").then(async (m) => {
      await m.__tla;
      return m;
    }), __vite__mapDeps([0,1,2,3,4,5,6,7]), import.meta.url).catch(() => ({}))), xr || (xr = await Ln(() => import("./bNaE6FFb.js"), [], import.meta.url).then((i) => i.getMdcConfigs()).catch(() => []));
    const t = [
      ...xr || [],
      ...e.configs || []
    ];
    e.highlight != null && e.highlight != false && e.highlight.highlighter !== void 0 && typeof e.highlight.highlighter != "function" && (e = {
      ...e,
      highlight: {
        ...e.highlight
      }
    }, delete e.highlight.highlighter);
    const n = Pr(e, {
      remark: {
        plugins: vt == null ? void 0 : vt.remarkPlugins
      },
      rehype: {
        plugins: vt == null ? void 0 : vt.rehypePlugins
      },
      highlight: vt == null ? void 0 : vt.highlight
    }, Zo);
    ((_b2 = (_a2 = n.rehype) == null ? void 0 : _a2.plugins) == null ? void 0 : _b2.highlight) && (e.highlight === false ? delete n.rehype.plugins.highlight : n.rehype.plugins.highlight.options = Pr({}, n.rehype.plugins.highlight.options, n.highlight || {}));
    let r = Us();
    for (const i of t) r = await ((_d2 = (_c2 = i.unified) == null ? void 0 : _c2.pre) == null ? void 0 : _d2.call(_c2, r)) || r;
    r.use(Fh);
    for (const i of t) r = await ((_f2 = (_e = i.unified) == null ? void 0 : _e.remark) == null ? void 0 : _f2.call(_e, r)) || r;
    await Ku(r, (_g2 = n.remark) == null ? void 0 : _g2.plugins), r.use(y0, (_h2 = n.rehype) == null ? void 0 : _h2.options);
    for (const i of t) r = await ((_j = (_i2 = i.unified) == null ? void 0 : _i2.rehype) == null ? void 0 : _j.call(_i2, r)) || r;
    await Ku(r, (_k = n.rehype) == null ? void 0 : _k.plugins), r.use(PT, n);
    for (const i of t) r = await ((_m2 = (_l2 = i.unified) == null ? void 0 : _l2.post) == null ? void 0 : _m2.call(_l2, r)) || r;
    return r;
  }, rc = async (e = {}) => {
    const t = await nc(e);
    return async function(r, { fileOptions: i } = {}) {
      const { content: u, data: s } = await Va(r), a = typeof process < "u" && typeof process.cwd == "function" ? process.cwd() : "/tmp", o = await new Promise((p, E) => {
        t.process({
          cwd: a,
          ...i,
          value: u,
          data: s
        }, (m, D) => {
          m ? E(m) : p(D);
        });
      }), l = o == null ? void 0 : o.result, h = Object.assign(e.contentHeading !== false ? UT(l.body) : {}, s, (o == null ? void 0 : o.data) || {}), f = {
        data: h,
        body: l.body
      }, d = h.toc ?? e.toc;
      if (d !== false) {
        const p = Pr({}, d, Zo.toc);
        f.toc = Vc(l.body, p);
      }
      return l.excerpt && (f.excerpt = l.excerpt), f;
    };
  }, MT = async (e, t = {}, n = {}) => (await rc(t))(e.replace(/\r\n/g, `
`), n);
  function UT(e) {
    let t = "", n = "";
    const r = e.children.filter((i) => i.type === "element" && i.tag !== "hr");
    if (r.length && r[0].tag === "h1") {
      const i = r.shift();
      t = Fn(i);
    }
    if (r.length && r[0].tag === "p") {
      const i = r.shift();
      n = Fn(i);
    }
    return {
      title: t,
      description: n
    };
  }
  function HT(e) {
    const t = this;
    t.compiler = n;
    function n(r) {
      return nd(r, {
        ...t.data("settings"),
        ...e,
        extensions: t.data("toMarkdownExtensions") || []
      });
    }
  }
  const Ui = Ie(function(e) {
    return e.tagName === "audio" || e.tagName === "canvas" || e.tagName === "embed" || e.tagName === "iframe" || e.tagName === "img" || e.tagName === "math" || e.tagName === "object" || e.tagName === "picture" || e.tagName === "svg" || e.tagName === "video";
  }), vT = [
    "address",
    "article",
    "aside",
    "blockquote",
    "body",
    "br",
    "caption",
    "center",
    "col",
    "colgroup",
    "dd",
    "dialog",
    "dir",
    "div",
    "dl",
    "dt",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "legend",
    "li",
    "li",
    "listing",
    "main",
    "menu",
    "nav",
    "ol",
    "optgroup",
    "option",
    "p",
    "plaintext",
    "pre",
    "section",
    "summary",
    "table",
    "tbody",
    "td",
    "td",
    "tfoot",
    "th",
    "th",
    "thead",
    "tr",
    "ul",
    "wbr",
    "xmp"
  ], zT = [
    "button",
    "input",
    "select",
    "textarea"
  ], YT = [
    "area",
    "base",
    "basefont",
    "dialog",
    "datalist",
    "head",
    "link",
    "meta",
    "noembed",
    "noframes",
    "param",
    "rp",
    "script",
    "source",
    "style",
    "template",
    "track",
    "title"
  ], qT = {}, Hi = yt([
    "comment",
    "doctype"
  ]);
  function ic(e, t) {
    uc(e, {
      collapse: QT((t || qT).newlines ? WT : GT),
      whitespace: "normal"
    });
  }
  function uc(e, t) {
    if ("children" in e) {
      const n = {
        ...t
      };
      return (e.type === "root" || oc(e)) && (n.before = true, n.after = true), n.whitespace = XT(e, t), jT(e, n);
    }
    if (e.type === "text") {
      if (t.whitespace === "normal") return $T(e, t);
      t.whitespace === "nowrap" && (e.value = t.collapse(e.value));
    }
    return {
      ignore: Hi(e),
      stripAtStart: false,
      remove: false
    };
  }
  function $T(e, t) {
    const n = t.collapse(e.value), r = {
      ignore: false,
      stripAtStart: false,
      remove: false
    };
    let i = 0, u = n.length;
    return t.before && gs(n.charAt(0)) && i++, i !== u && gs(n.charAt(u - 1)) && (t.after ? u-- : r.stripAtStart = true), i === u ? r.remove = true : e.value = n.slice(i, u), r;
  }
  function jT(e, t) {
    let n = t.before;
    const r = t.after, i = e.children;
    let u = i.length, s = -1;
    for (; ++s < u; ) {
      const a = uc(i[s], {
        ...t,
        after: sc(i, s, r),
        before: n
      });
      a.remove ? (i.splice(s, 1), s--, u--) : a.ignore || (n = a.stripAtStart), ac(i[s]) && (n = false);
    }
    return {
      ignore: false,
      stripAtStart: !!(n || r),
      remove: false
    };
  }
  function sc(e, t, n) {
    for (; ++t < e.length; ) {
      const r = e[t];
      let i = VT(r);
      if (i === void 0 && "children" in r && !KT(r) && (i = sc(r.children, -1)), typeof i == "boolean") return i;
    }
    return n;
  }
  function VT(e) {
    if (e.type === "element") {
      if (ac(e)) return false;
      if (oc(e)) return true;
    } else if (e.type === "text") {
      if (!jt(e)) return false;
    } else if (!Hi(e)) return false;
  }
  function ac(e) {
    return Ui(e) || Zn(e, zT);
  }
  function oc(e) {
    return Zn(e, vT);
  }
  function KT(e) {
    return !!(e.type === "element" && e.properties.hidden) || Hi(e) || Zn(e, YT);
  }
  function gs(e) {
    return e === " " || e === `
`;
  }
  function WT(e) {
    const t = /\r?\n|\r/.exec(e);
    return t ? t[0] : " ";
  }
  function GT() {
    return " ";
  }
  function QT(e) {
    return t;
    function t(n) {
      return String(n).replace(/[\t\n\v\f\r ]+/g, e);
    }
  }
  function XT(e, t) {
    if ("tagName" in e && e.properties) switch (e.tagName) {
      case "listing":
      case "plaintext":
      case "script":
      case "style":
      case "xmp":
        return "pre";
      case "nobr":
        return "nowrap";
      case "pre":
        return e.properties.wrap ? "pre-wrap" : "pre";
      case "td":
      case "th":
        return e.properties.noWrap ? "nowrap" : t.whitespace;
      case "textarea":
        return "pre-wrap";
    }
    return t.whitespace;
  }
  function JT(e) {
    return function(t) {
      ic(t, e);
    };
  }
  function ZT(e, t) {
    const n = t.properties || {}, r = e.all(t), i = {
      type: "link",
      url: e.resolve(String(n.href || "") || null),
      title: n.title ? String(n.title) : null,
      children: r
    };
    return e.patch(t, i), i;
  }
  function e2(e, t) {
    e.baseFound || (e.frozenBaseUrl = String(t.properties && t.properties.href || "") || void 0, e.baseFound = true);
  }
  function t2(e, t) {
    const n = {
      type: "blockquote",
      children: e.toFlow(e.all(t))
    };
    return e.patch(t, n), n;
  }
  function n2(e, t) {
    const n = {
      type: "break"
    };
    return e.patch(t, n), n;
  }
  const bs = (function(e, t, n) {
    const r = yt(n);
    if (!e || !e.type || !e.children) throw new Error("Expected parent node");
    if (typeof t == "number") {
      if (t < 0 || t === Number.POSITIVE_INFINITY) throw new Error("Expected positive finite number as index");
    } else if (t = e.children.indexOf(t), t < 0) throw new Error("Expected child node or index");
    for (; ++t < e.children.length; ) if (r(e.children[t], t, e)) return e.children[t];
  }), Ts = /\n/g, As = /[\t ]+/g, ni = Ie("br"), Cs = Ie(c2), r2 = Ie("p"), _s = Ie("tr"), i2 = Ie([
    "datalist",
    "head",
    "noembed",
    "noframes",
    "noscript",
    "rp",
    "script",
    "style",
    "template",
    "title",
    o2,
    l2
  ]), cc = Ie([
    "address",
    "article",
    "aside",
    "blockquote",
    "body",
    "caption",
    "center",
    "dd",
    "dialog",
    "dir",
    "dl",
    "dt",
    "div",
    "figure",
    "figcaption",
    "footer",
    "form,",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hgroup",
    "hr",
    "html",
    "legend",
    "li",
    "listing",
    "main",
    "menu",
    "nav",
    "ol",
    "p",
    "plaintext",
    "pre",
    "section",
    "ul",
    "xmp"
  ]);
  pn = function(e, t) {
    const n = t || {}, r = "children" in e ? e.children : [], i = cc(e), u = hc(e, {
      whitespace: n.whitespace || "normal"
    }), s = [];
    (e.type === "text" || e.type === "comment") && s.push(...fc(e, {
      breakBefore: true,
      breakAfter: true
    }));
    let a = -1;
    for (; ++a < r.length; ) s.push(...lc(r[a], e, {
      whitespace: u,
      breakBefore: a ? void 0 : i,
      breakAfter: a < r.length - 1 ? ni(r[a + 1]) : i
    }));
    const o = [];
    let l;
    for (a = -1; ++a < s.length; ) {
      const h = s[a];
      typeof h == "number" ? l !== void 0 && h > l && (l = h) : h && (l !== void 0 && l > -1 && o.push(`
`.repeat(l) || " "), l = -1, o.push(h));
    }
    return o.join("");
  };
  function lc(e, t, n) {
    return e.type === "element" ? u2(e, t, n) : e.type === "text" ? n.whitespace === "normal" ? fc(e, n) : s2(e) : [];
  }
  function u2(e, t, n) {
    const r = hc(e, n), i = e.children || [];
    let u = -1, s = [];
    if (i2(e)) return s;
    let a, o;
    for (ni(e) || _s(e) && bs(t, e, _s) ? o = `
` : r2(e) ? (a = 2, o = 2) : cc(e) && (a = 1, o = 1); ++u < i.length; ) s = s.concat(lc(i[u], e, {
      whitespace: r,
      breakBefore: u ? void 0 : a,
      breakAfter: u < i.length - 1 ? ni(i[u + 1]) : o
    }));
    return Cs(e) && bs(t, e, Cs) && s.push("	"), a && s.unshift(a), o && s.push(o), s;
  }
  function fc(e, t) {
    const n = String(e.value), r = [], i = [];
    let u = 0;
    for (; u <= n.length; ) {
      Ts.lastIndex = u;
      const o = Ts.exec(n), l = o && "index" in o ? o.index : n.length;
      r.push(a2(n.slice(u, l).replace(/[\u061C\u200E\u200F\u202A-\u202E\u2066-\u2069]/g, ""), u === 0 ? t.breakBefore : true, l === n.length ? t.breakAfter : true)), u = l + 1;
    }
    let s = -1, a;
    for (; ++s < r.length; ) r[s].charCodeAt(r[s].length - 1) === 8203 || s < r.length - 1 && r[s + 1].charCodeAt(0) === 8203 ? (i.push(r[s]), a = void 0) : r[s] ? (typeof a == "number" && i.push(a), i.push(r[s]), a = 0) : (s === 0 || s === r.length - 1) && i.push(0);
    return i;
  }
  function s2(e) {
    return [
      String(e.value)
    ];
  }
  function a2(e, t, n) {
    const r = [];
    let i = 0, u;
    for (; i < e.length; ) {
      As.lastIndex = i;
      const s = As.exec(e);
      u = s ? s.index : e.length, !i && !u && s && !t && r.push(""), i !== u && r.push(e.slice(i, u)), i = s ? u + s[0].length : u;
    }
    return i !== u && !n && r.push(""), r.join(" ");
  }
  function hc(e, t) {
    if (e.type === "element") {
      const n = e.properties || {};
      switch (e.tagName) {
        case "listing":
        case "plaintext":
        case "xmp":
          return "pre";
        case "nobr":
          return "nowrap";
        case "pre":
          return n.wrap ? "pre-wrap" : "pre";
        case "td":
        case "th":
          return n.noWrap ? "nowrap" : t.whitespace;
        case "textarea":
          return "pre-wrap";
      }
    }
    return t.whitespace;
  }
  function o2(e) {
    return !!(e.properties || {}).hidden;
  }
  function c2(e) {
    return e.tagName === "td" || e.tagName === "th";
  }
  function l2(e) {
    return e.tagName === "dialog" && !(e.properties || {}).open;
  }
  function f2(e) {
    const t = String(e);
    let n = t.length;
    for (; n > 0; ) {
      const r = t.codePointAt(n - 1);
      if (r !== void 0 && (r === 10 || r === 13)) n--;
      else break;
    }
    return t.slice(0, n);
  }
  const Lr = "language-";
  function yn(e, t) {
    const n = t.children;
    let r = -1, i, u;
    if (t.tagName === "pre") for (; ++r < n.length; ) {
      const a = n[r];
      if (a.type === "element" && a.tagName === "code" && a.properties && a.properties.className && Array.isArray(a.properties.className)) {
        i = a.properties.className;
        break;
      }
    }
    if (i) {
      for (r = -1; ++r < i.length; ) if (String(i[r]).slice(0, Lr.length) === Lr) {
        u = String(i[r]).slice(Lr.length);
        break;
      }
    }
    const s = {
      type: "code",
      lang: u || null,
      meta: null,
      value: f2(pn(t))
    };
    return e.patch(t, s), s;
  }
  function h2(e, t) {
    const n = {
      type: "html",
      value: "<!--" + t.value + "-->"
    };
    return e.patch(t, n), n;
  }
  function Fr(e, t) {
    const r = {
      type: "delete",
      children: e.all(t)
    };
    return e.patch(t, r), r;
  }
  function vi(e) {
    let t = -1;
    if (e.length > 1) {
      for (; ++t < e.length; ) if (e[t].spread) return true;
    }
    return false;
  }
  function p2(e, t) {
    const n = [], r = [];
    let i = -1;
    for (; ++i < t.children.length; ) {
      const a = t.children[i];
      a.type === "element" && a.tagName === "div" ? n.push(...a.children) : n.push(a);
    }
    let u = {
      definitions: [],
      titles: []
    };
    for (i = -1; ++i < n.length; ) {
      const a = n[i];
      if (a.type === "element" && a.tagName === "dt") {
        const o = n[i - 1];
        o && o.type === "element" && o.tagName === "dd" && (r.push(u), u = {
          definitions: [],
          titles: []
        }), u.titles.push(a);
      } else u.definitions.push(a);
    }
    r.push(u), i = -1;
    const s = [];
    for (; ++i < r.length; ) {
      const a = [
        ...Ds(e, r[i].titles),
        ...Ds(e, r[i].definitions)
      ];
      a.length > 0 && s.push({
        type: "listItem",
        spread: a.length > 1,
        checked: null,
        children: a
      });
    }
    if (s.length > 0) {
      const a = {
        type: "list",
        ordered: false,
        start: null,
        spread: vi(s),
        children: s
      };
      return e.patch(t, a), a;
    }
  }
  function Ds(e, t) {
    const n = e.all({
      type: "root",
      children: t
    }), r = e.toSpecificContent(n, d2);
    return r.length === 0 ? [] : r.length === 1 ? r[0].children : [
      {
        type: "list",
        ordered: false,
        start: null,
        spread: vi(r),
        children: r
      }
    ];
  }
  function d2() {
    return {
      type: "listItem",
      spread: false,
      checked: null,
      children: []
    };
  }
  function kn(e, t) {
    const r = {
      type: "emphasis",
      children: e.all(t)
    };
    return e.patch(t, r), r;
  }
  function zi(e) {
    let t = 0, n = e.length;
    for (; t < n && e[t].type === "break"; ) t++;
    for (; n > t && e[n - 1].type === "break"; ) n--;
    return t === 0 && n === e.length ? e : e.slice(t, n);
  }
  function mt(e, t) {
    const n = Number(t.tagName.charAt(1)) || 1, r = zi(e.all(t)), i = {
      type: "heading",
      depth: n,
      children: r
    };
    return e.patch(t, i), i;
  }
  function m2(e, t) {
    const n = {
      type: "thematicBreak"
    };
    return e.patch(t, n), n;
  }
  function E2(e, t) {
    const n = t.properties || {}, r = String(n.src || ""), i = String(n.title || "");
    if (r && i) {
      const u = {
        type: "link",
        title: null,
        url: e.resolve(r),
        children: [
          {
            type: "text",
            value: i
          }
        ]
      };
      return e.patch(t, u), u;
    }
  }
  function ys(e, t) {
    const n = t.properties || {}, r = {
      type: "image",
      url: e.resolve(String(n.src || "") || null),
      title: n.title ? String(n.title) : null,
      alt: n.alt ? String(n.alt) : ""
    };
    return e.patch(t, r), r;
  }
  function zt(e, t) {
    const n = {
      type: "inlineCode",
      value: pn(t)
    };
    return e.patch(t, n), n;
  }
  function pc(e, t) {
    const n = [], r = [], i = t || e.properties || {}, u = dc(e), s = Math.min(Number.parseInt(String(i.size), 10), 0) || (i.multiple ? 4 : 1);
    let a = -1;
    for (; ++a < u.length; ) {
      const h = u[a];
      h && h.properties && h.properties.selected && n.push(h);
    }
    const o = n.length > 0 ? n : u, l = Math.min(o.length, s);
    for (a = -1; ++a < l; ) {
      const h = o[a], f = h.properties || {}, d = pn(h), p = d || String(f.label || ""), E = String(f.value || "") || d;
      r.push([
        E,
        p === E ? void 0 : p
      ]);
    }
    return r;
  }
  function dc(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.children.length; ) {
      const r = e.children[n];
      "children" in r && Array.isArray(r.children) && t.push(...dc(r)), r.type === "element" && r.tagName === "option" && (!r.properties || !r.properties.disabled) && t.push(r);
    }
    return t;
  }
  const g2 = "[x]", b2 = "[ ]";
  function T2(e, t) {
    const n = t.properties || {}, r = String(n.value || n.placeholder || "");
    if (n.disabled || n.type === "hidden" || n.type === "file") return;
    if (n.type === "checkbox" || n.type === "radio") {
      const o = {
        type: "text",
        value: n.checked ? e.options.checked || g2 : e.options.unchecked || b2
      };
      return e.patch(t, o), o;
    }
    if (n.type === "image") {
      const o = n.alt || r;
      if (o) {
        const l = {
          type: "image",
          url: e.resolve(String(n.src || "") || null),
          title: String(n.title || "") || null,
          alt: String(o)
        };
        return e.patch(t, l), l;
      }
      return;
    }
    let i = [];
    if (r) i = [
      [
        r,
        void 0
      ]
    ];
    else if (n.type !== "button" && n.type !== "file" && n.type !== "password" && n.type !== "reset" && n.type !== "submit" && n.list) {
      const o = String(n.list), l = e.elementById.get(o);
      l && l.tagName === "datalist" && (i = pc(l, n));
    }
    if (i.length === 0) return;
    if (n.type === "password" && (i[0] = [
      "\u2022".repeat(i[0][0].length),
      void 0
    ]), n.type === "email" || n.type === "url") {
      const o = [];
      let l = -1;
      for (; ++l < i.length; ) {
        const h = e.resolve(i[l][0]), f = {
          type: "link",
          title: null,
          url: n.type === "email" ? "mailto:" + h : h,
          children: [
            {
              type: "text",
              value: i[l][1] || h
            }
          ]
        };
        o.push(f), l !== i.length - 1 && o.push({
          type: "text",
          value: ", "
        });
      }
      return o;
    }
    const u = [];
    let s = -1;
    for (; ++s < i.length; ) u.push(i[s][1] ? i[s][1] + " (" + i[s][0] + ")" : i[s][0]);
    const a = {
      type: "text",
      value: u.join(", ")
    };
    return e.patch(t, a), a;
  }
  const A2 = {}.hasOwnProperty;
  function C2(e, t) {
    const n = e.type === "element" && A2.call(e.properties, t) && e.properties[t];
    return n != null && n !== false;
  }
  const _2 = /* @__PURE__ */ new Set([
    "pingback",
    "prefetch",
    "stylesheet"
  ]);
  function D2(e) {
    if (e.type !== "element" || e.tagName !== "link") return false;
    if (e.properties.itemProp) return true;
    const t = e.properties.rel;
    let n = -1;
    if (!Array.isArray(t) || t.length === 0) return false;
    for (; ++n < t.length; ) if (!_2.has(String(t[n]))) return false;
    return true;
  }
  const y2 = Ie([
    "a",
    "abbr",
    "area",
    "b",
    "bdi",
    "bdo",
    "br",
    "button",
    "cite",
    "code",
    "data",
    "datalist",
    "del",
    "dfn",
    "em",
    "i",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "map",
    "mark",
    "meter",
    "noscript",
    "output",
    "progress",
    "q",
    "ruby",
    "s",
    "samp",
    "script",
    "select",
    "small",
    "span",
    "strong",
    "sub",
    "sup",
    "template",
    "textarea",
    "time",
    "u",
    "var",
    "wbr"
  ]), k2 = Ie("meta");
  function Yi(e) {
    return !!(e.type === "text" || y2(e) || Ui(e) || D2(e) || k2(e) && C2(e, "itemProp"));
  }
  function Or(e, t) {
    const { rest: n, checkbox: r } = Ec(t), i = r ? !!r.properties.checked : null, u = mc(n), s = e.toFlow(e.all(n)), a = {
      type: "listItem",
      spread: u,
      checked: i,
      children: s
    };
    return e.patch(t, a), a;
  }
  function mc(e) {
    let t = -1, n = false;
    for (; ++t < e.children.length; ) {
      const r = e.children[t];
      if (r.type === "element") {
        if (Yi(r)) continue;
        if (r.tagName === "p" || n || mc(r)) return true;
        n = true;
      }
    }
    return false;
  }
  function Ec(e) {
    const t = e.children[0];
    if (t && t.type === "element" && t.tagName === "input" && t.properties && (t.properties.type === "checkbox" || t.properties.type === "radio")) {
      const n = {
        ...e,
        children: e.children.slice(1)
      };
      return {
        checkbox: t,
        rest: n
      };
    }
    if (t && t.type === "element" && t.tagName === "p") {
      const { checkbox: n, rest: r } = Ec(t);
      if (n) {
        const i = {
          ...e,
          children: [
            r,
            ...e.children.slice(1)
          ]
        };
        return {
          checkbox: n,
          rest: i
        };
      }
    }
    return {
      checkbox: void 0,
      rest: e
    };
  }
  function wr(e, t) {
    const n = t.tagName === "ol", r = e.toSpecificContent(e.all(t), I2);
    let i = null;
    n && (i = t.properties && t.properties.start ? Number.parseInt(String(t.properties.start), 10) : 1);
    const u = {
      type: "list",
      ordered: n,
      start: i,
      spread: vi(r),
      children: r
    };
    return e.patch(t, u), u;
  }
  function I2() {
    return {
      type: "listItem",
      spread: false,
      checked: null,
      children: []
    };
  }
  function ir(e) {
    let t = -1;
    for (; ++t < e.length; ) {
      const n = e[t];
      if (!Tc(n) || "children" in n && ir(n.children)) return true;
    }
    return false;
  }
  function gc(e) {
    return bc(e, t, function(n) {
      return n;
    });
    function t(n) {
      return n.every(function(r) {
        return r.type === "text" ? jt(r.value) : false;
      }) ? [] : [
        {
          type: "paragraph",
          children: zi(n)
        }
      ];
    }
  }
  function N2(e) {
    return bc(e.children, t, n);
    function t(r) {
      const i = Rr(e);
      return i.children = r, [
        i
      ];
    }
    function n(r) {
      if ("children" in r && "children" in e) {
        const i = Rr(e), u = Rr(r);
        return i.children = r.children, u.children.push(i), u;
      }
      return {
        ...r
      };
    }
  }
  function bc(e, t, n) {
    const r = S2(e), i = [];
    let u = [], s = -1;
    for (; ++s < r.length; ) {
      const a = r[s];
      Tc(a) ? u.push(a) : (u.length > 0 && (i.push(...t(u)), u = []), i.push(n(a)));
    }
    return u.length > 0 && (i.push(...t(u)), u = []), i;
  }
  function S2(e) {
    const t = [];
    let n = -1;
    for (; ++n < e.length; ) {
      const r = e[n];
      (r.type === "delete" || r.type === "link") && ir(r.children) ? t.push(...N2(r)) : t.push(r);
    }
    return t;
  }
  function Tc(e) {
    const t = e.data && e.data.hName;
    return t ? Yi({
      type: "element",
      tagName: t,
      properties: {},
      children: []
    }) : za(e);
  }
  function Rr(e) {
    return xe({
      ...e,
      children: []
    });
  }
  function ks(e, t) {
    const n = t.properties || {}, r = t.tagName === "video" ? String(n.poster || "") : "";
    let i = String(n.src || ""), u = -1, s = false, a = e.all(t);
    if (ge({
      type: "root",
      children: a
    }, function(f) {
      if (f.type === "link") return s = true, Rn;
    }), s || ir(a)) return a;
    for (; !i && ++u < t.children.length; ) {
      const f = t.children[u];
      f.type === "element" && f.tagName === "source" && f.properties && (i = String(f.properties.src || ""));
    }
    if (r) {
      const f = {
        type: "image",
        title: null,
        url: e.resolve(r),
        alt: Yn(a)
      };
      e.patch(t, f), a = [
        f
      ];
    }
    const l = a, h = {
      type: "link",
      title: n.title ? String(n.title) : null,
      url: e.resolve(i),
      children: l
    };
    return e.patch(t, h), h;
  }
  function Is(e, t) {
    const n = zi(e.all(t));
    if (n.length > 0) {
      const r = {
        type: "paragraph",
        children: n
      };
      return e.patch(t, r), r;
    }
  }
  const x2 = [
    '"'
  ];
  function L2(e, t) {
    const n = e.options.quotes || x2;
    e.qNesting++;
    const r = e.all(t);
    e.qNesting--;
    const i = n[e.qNesting % n.length], u = r[0], s = r[r.length - 1], a = i.charAt(0), o = i.length > 1 ? i.charAt(1) : i;
    return u && u.type === "text" ? u.value = a + u.value : r.unshift({
      type: "text",
      value: a
    }), s && s.type === "text" ? s.value += o : r.push({
      type: "text",
      value: o
    }), r;
  }
  function F2(e, t) {
    let n = e.all(t);
    (e.options.document || ir(n)) && (n = gc(n));
    const r = {
      type: "root",
      children: n
    };
    return e.patch(t, r), r;
  }
  function O2(e, t) {
    const n = pc(t);
    let r = -1;
    const i = [];
    for (; ++r < n.length; ) {
      const u = n[r];
      i.push(u[1] ? u[1] + " (" + u[0] + ")" : u[0]);
    }
    if (i.length > 0) {
      const u = {
        type: "text",
        value: i.join(", ")
      };
      return e.patch(t, u), u;
    }
  }
  function Ns(e, t) {
    const r = {
      type: "strong",
      children: e.all(t)
    };
    return e.patch(t, r), r;
  }
  function Ss(e, t) {
    const r = {
      type: "tableCell",
      children: e.all(t)
    };
    if (e.patch(t, r), t.properties) {
      const i = t.properties.rowSpan, u = t.properties.colSpan;
      if (i || u) {
        const s = r.data || (r.data = {});
        i && (s.hastUtilToMdastTemporaryRowSpan = i), u && (s.hastUtilToMdastTemporaryColSpan = u);
      }
    }
    return r;
  }
  function w2(e, t) {
    const r = {
      type: "tableRow",
      children: e.toSpecificContent(e.all(t), R2)
    };
    return e.patch(t, r), r;
  }
  function R2() {
    return {
      type: "tableCell",
      children: []
    };
  }
  function B2(e, t) {
    if (e.inTable) {
      const l = {
        type: "text",
        value: pn(t)
      };
      return e.patch(t, l), l;
    }
    e.inTable = true;
    const { align: n, headless: r } = P2(t), i = e.toSpecificContent(e.all(t), xs);
    r && i.unshift(xs());
    let u = -1;
    for (; ++u < i.length; ) {
      const l = i[u], h = e.toSpecificContent(l.children, M2);
      l.children = h;
    }
    let s = 1;
    for (u = -1; ++u < i.length; ) {
      const l = i[u].children;
      let h = -1;
      for (; ++h < l.length; ) {
        const f = l[h];
        if (f.data) {
          const d = f.data, p = Number.parseInt(String(d.hastUtilToMdastTemporaryColSpan), 10) || 1, E = Number.parseInt(String(d.hastUtilToMdastTemporaryRowSpan), 10) || 1;
          if (p > 1 || E > 1) {
            let m = u - 1;
            for (; ++m < u + E; ) {
              let D = h - 1;
              for (; ++D < h + p && i[m]; ) {
                const C = [];
                (m !== u || D !== h) && C.push({
                  type: "tableCell",
                  children: []
                }), i[m].children.splice(D, 0, ...C);
              }
            }
          }
          "hastUtilToMdastTemporaryColSpan" in f.data && delete f.data.hastUtilToMdastTemporaryColSpan, "hastUtilToMdastTemporaryRowSpan" in f.data && delete f.data.hastUtilToMdastTemporaryRowSpan, Object.keys(f.data).length === 0 && delete f.data;
        }
      }
      l.length > s && (s = l.length);
    }
    for (u = -1; ++u < i.length; ) {
      const l = i[u].children;
      let h = l.length - 1;
      for (; ++h < s; ) l.push({
        type: "tableCell",
        children: []
      });
    }
    let a = n.length - 1;
    for (; ++a < s; ) n.push(null);
    e.inTable = false;
    const o = {
      type: "table",
      align: n,
      children: i
    };
    return e.patch(t, o), o;
  }
  function P2(e) {
    const t = {
      align: [
        null
      ],
      headless: true
    };
    let n = 0, r = 0;
    return ge(e, function(i) {
      if (i.type === "element") {
        if (i.tagName === "table" && e !== i) return Ei;
        if ((i.tagName === "th" || i.tagName === "td") && i.properties) {
          if (!t.align[r]) {
            const u = String(i.properties.align || "") || null;
            (u === "center" || u === "left" || u === "right" || u === null) && (t.align[r] = u);
          }
          t.headless && n < 2 && i.tagName === "th" && (t.headless = false), r++;
        } else i.tagName === "thead" ? t.headless = false : i.tagName === "tr" && (n++, r = 0);
      }
    }), t;
  }
  function M2() {
    return {
      type: "tableCell",
      children: []
    };
  }
  function xs() {
    return {
      type: "tableRow",
      children: []
    };
  }
  function U2(e, t) {
    const n = {
      type: "text",
      value: t.value
    };
    return e.patch(t, n), n;
  }
  function H2(e, t) {
    const n = {
      type: "text",
      value: pn(t)
    };
    return e.patch(t, n), n;
  }
  function v2(e, t) {
    const n = {
      type: "text",
      value: "\u200B"
    };
    return e.patch(t, n), n;
  }
  const z2 = {
    comment: h2,
    doctype: ee,
    root: F2,
    text: U2
  }, $t = {
    applet: ee,
    area: ee,
    basefont: ee,
    bgsound: ee,
    caption: ee,
    col: ee,
    colgroup: ee,
    command: ee,
    content: ee,
    datalist: ee,
    dialog: ee,
    element: ee,
    embed: ee,
    frame: ee,
    frameset: ee,
    isindex: ee,
    keygen: ee,
    link: ee,
    math: ee,
    menu: ee,
    menuitem: ee,
    meta: ee,
    nextid: ee,
    noembed: ee,
    noframes: ee,
    optgroup: ee,
    option: ee,
    param: ee,
    script: ee,
    shadow: ee,
    source: ee,
    spacer: ee,
    style: ee,
    svg: ee,
    template: ee,
    title: ee,
    track: ee,
    abbr: Z,
    acronym: Z,
    bdi: Z,
    bdo: Z,
    big: Z,
    blink: Z,
    button: Z,
    canvas: Z,
    cite: Z,
    data: Z,
    details: Z,
    dfn: Z,
    font: Z,
    ins: Z,
    label: Z,
    map: Z,
    marquee: Z,
    meter: Z,
    nobr: Z,
    noscript: Z,
    object: Z,
    output: Z,
    progress: Z,
    rb: Z,
    rbc: Z,
    rp: Z,
    rt: Z,
    rtc: Z,
    ruby: Z,
    slot: Z,
    small: Z,
    span: Z,
    sup: Z,
    sub: Z,
    tbody: Z,
    tfoot: Z,
    thead: Z,
    time: Z,
    address: fe,
    article: fe,
    aside: fe,
    body: fe,
    center: fe,
    div: fe,
    fieldset: fe,
    figcaption: fe,
    figure: fe,
    form: fe,
    footer: fe,
    header: fe,
    hgroup: fe,
    html: fe,
    legend: fe,
    main: fe,
    multicol: fe,
    nav: fe,
    picture: fe,
    section: fe,
    a: ZT,
    audio: ks,
    b: Ns,
    base: e2,
    blockquote: t2,
    br: n2,
    code: zt,
    dir: wr,
    dl: p2,
    dt: Or,
    dd: Or,
    del: Fr,
    em: kn,
    h1: mt,
    h2: mt,
    h3: mt,
    h4: mt,
    h5: mt,
    h6: mt,
    hr: m2,
    i: kn,
    iframe: E2,
    img: ys,
    image: ys,
    input: T2,
    kbd: zt,
    li: Or,
    listing: yn,
    mark: kn,
    ol: wr,
    p: Is,
    plaintext: yn,
    pre: yn,
    q: L2,
    s: Fr,
    samp: zt,
    select: O2,
    strike: Fr,
    strong: Ns,
    summary: Is,
    table: B2,
    td: Ss,
    textarea: H2,
    th: Ss,
    tr: w2,
    tt: zt,
    u: kn,
    ul: wr,
    var: zt,
    video: ks,
    wbr: v2,
    xmp: yn
  };
  function Z(e, t) {
    return e.all(t);
  }
  function fe(e, t) {
    return e.toFlow(e.all(t));
  }
  function ee() {
  }
  const Ls = {}.hasOwnProperty;
  function Y2(e) {
    return {
      all: q2,
      baseFound: false,
      elementById: /* @__PURE__ */ new Map(),
      frozenBaseUrl: void 0,
      handlers: {
        ...$t,
        ...e.handlers
      },
      inTable: false,
      nodeHandlers: {
        ...z2,
        ...e.nodeHandlers
      },
      one: $2,
      options: e,
      patch: j2,
      qNesting: 0,
      resolve: V2,
      toFlow: K2,
      toSpecificContent: W2
    };
  }
  function q2(e) {
    const t = e.children || [], n = [];
    let r = -1;
    for (; ++r < t.length; ) {
      const i = t[r], u = this.one(i, e);
      Array.isArray(u) ? n.push(...u) : u && n.push(u);
    }
    return n;
  }
  function $2(e, t) {
    if (e.type === "element") {
      if (e.properties && e.properties.dataMdast === "ignore") return;
      if (Ls.call(this.handlers, e.tagName)) return this.handlers[e.tagName](this, e, t) || void 0;
    } else if (Ls.call(this.nodeHandlers, e.type)) return this.nodeHandlers[e.type](this, e, t) || void 0;
    if ("value" in e && typeof e.value == "string") {
      const n = {
        type: "text",
        value: e.value
      };
      return this.patch(e, n), n;
    }
    if ("children" in e) return this.all(e);
  }
  function j2(e, t) {
    e.position && (t.position = ra(e));
  }
  function V2(e) {
    const t = this.frozenBaseUrl;
    return e == null ? "" : t ? String(new URL(e, t)) : e;
  }
  function K2(e) {
    return gc(e);
  }
  function W2(e, t) {
    const n = t(), r = [];
    let i = [], u = -1;
    for (; ++u < e.length; ) {
      const a = e[u];
      if (s(a)) i.length > 0 && (a.children.unshift(...i), i = []), r.push(a);
      else {
        const o = a;
        i.push(o);
      }
    }
    if (i.length > 0) {
      let a = r[r.length - 1];
      a || (a = t(), r.push(a)), a.children.push(...i), i = [];
    }
    return r;
    function s(a) {
      return a.type === n.type;
    }
  }
  const G2 = {};
  function Q2(e, t) {
    const n = xe(e), r = t || G2, i = JT({
      newlines: r.newlines === true
    }), u = Y2(r);
    let s;
    i(n), ge(n, function(o) {
      if (o && o.type === "element" && o.properties) {
        const l = String(o.properties.id || "") || void 0;
        l && !u.elementById.has(l) && u.elementById.set(l, o);
      }
    });
    const a = u.one(n, void 0);
    return a ? Array.isArray(a) ? s = {
      type: "root",
      children: a
    } : s = a : s = {
      type: "root",
      children: []
    }, ge(s, function(o, l, h) {
      if (o.type === "text" && l !== void 0 && h) {
        const f = h.children[l - 1];
        if (f && f.type === o.type) return f.value += o.value, h.children.splice(l, 1), f.position && o.position && (f.position.end = o.position.end), l - 1;
        if (o.value = o.value.replace(/[\t ]*(\r?\n|\r)[\t ]*/, "$1"), h && (h.type === "heading" || h.type === "paragraph" || h.type === "root") && (l || (o.value = o.value.replace(/^[\t ]+/, "")), l === h.children.length - 1 && (o.value = o.value.replace(/[\t ]+$/, ""))), !o.value) return h.children.splice(l, 1), l;
      }
    }), s;
  }
  const X2 = [
    "pre",
    "script",
    "style",
    "textarea"
  ], J2 = {};
  function Z2(e, t) {
    const n = J2, r = {
      blanks: n.blanks || [],
      head: false,
      indentInitial: n.indentInitial !== false,
      indent: typeof n.indent == "number" ? " ".repeat(n.indent) : typeof n.indent == "string" ? n.indent : "  "
    };
    ic(e, {
      newlines: true
    }), gi(e, i);
    function i(s, a) {
      if (!("children" in s)) return;
      if (s.type === "element" && s.tagName === "head" && (r.head = true), r.head && s.type === "element" && s.tagName === "body" && (r.head = false), s.type === "element" && X2.includes(s.tagName)) return Ei;
      if (s.children.length === 0 || !Br(r, s)) return;
      let o = a.length;
      r.indentInitial || o--;
      let l = false;
      for (const d of s.children) (d.type === "comment" || d.type === "text") && (d.value.includes(`
`) && (l = true), d.value = d.value.replace(/ *\n/g, "$&" + r.indent.repeat(o)));
      const h = [];
      let f;
      for (const d of s.children) (Br(r, d) || l && !f) && (u(h, o, d), l = true), f = d, h.push(d);
      f && (l || Br(r, f)) && (jt(f) && (h.pop(), f = h[h.length - 1]), u(h, o - 1)), s.children = h;
    }
    function u(s, a, o) {
      const l = s[s.length - 1], h = l && jt(l) ? s[s.length - 2] : l, f = (Fs(r, h) && Fs(r, o) ? `

` : `
`) + r.indent.repeat(Math.max(a, 0));
      l && l.type === "text" ? l.value = jt(l) ? f : l.value + f : s.push({
        type: "text",
        value: f
      });
    }
  }
  function Fs(e, t) {
    return !!(t && t.type === "element" && e.blanks.length > 0 && e.blanks.includes(t.tagName));
  }
  function Br(e, t) {
    return t.type === "root" || (t.type === "element" ? e.head || t.tagName === "script" || Ui(t) || !Yi(t) : false);
  }
  function eA(e) {
    const t = Array.isArray(e) ? e.map(Number) : e.split(",").map(Number), n = [];
    let r = t[0];
    for (let i = 1; i <= t.length; i++) t[i] !== t[i - 1] + 1 && (r === t[i - 1] ? n.push(`${r}`) : n.push(`${r}-${t[i - 1]}`), r = t[i]);
    return n.join(",");
  }
  function Os(e) {
    return String(e || "").trim();
  }
  const ur = "mdc-element", Zt = "textDirective", tA = "textComponent", nA = {}.hasOwnProperty;
  function rA(e) {
    return function(t, n) {
      const r = ri(t), i = Q2(r, {
        document: true,
        newlines: true,
        ...e,
        handlers: {
          ...uA,
          ...e == null ? void 0 : e.handlers
        },
        nodeHandlers: {
          ...iA,
          ...e == null ? void 0 : e.nodeHandlers
        }
      });
      return ge(i, (u) => u.type === Zt, (u, s, a) => {
        var _a2, _b2;
        if (u.type = tA, u.name !== "binding" && s && a && a.children) {
          if (s > 0 && ((_a2 = a.children[s - 1]) == null ? void 0 : _a2.type) === "text") {
            const o = a.children[s - 1];
            [
              `
`,
              " ",
              "	"
            ].includes(o.value.slice(-1)) || (o.value += " ");
          }
          if (s && s < a.children.length - 1 && ((_b2 = a.children[s + 1]) == null ? void 0 : _b2.type) === "text") {
            const o = a.children[s + 1];
            [
              `
`,
              " ",
              "	",
              ",",
              "."
            ].includes(o.value.slice(0, 1)) || (o.value = " " + o.value);
          }
        }
      }), i;
    };
  }
  function ri(e) {
    var _a2, _b2;
    if (e.type === "element") {
      ((_a2 = e.children) == null ? void 0 : _a2.length) && (e.children || []).every((n) => n.tag === "template") && (e.children = e.children.flatMap((n) => {
        var _a3;
        return typeof ((_a3 = n.props) == null ? void 0 : _a3["v-slot:default"]) < "u" && Object.keys(n.props).length === 1 ? n.children || [] : n;
      }));
      const t = {
        type: ur,
        tagName: e.tag,
        properties: e.props,
        children: (e.children || []).map(ri)
      };
      return ((_b2 = e.children) == null ? void 0 : _b2.length) || delete t.children, t;
    }
    return (e == null ? void 0 : e.children) ? {
      ...e,
      children: (e.children || []).map(ri)
    } : e;
  }
  const iA = {
    [ur]: (e, t, n) => {
      var _a2;
      if (t.properties && t.properties.dataMdast === "ignore") return;
      if (t.properties && (t.properties.className || t.properties["class-name"])) {
        const u = Array.isArray(t.properties.className || "") ? t.properties.className : String(t.properties.className || "").split(" "), s = Array.isArray(t.properties["class-name"] || "") ? t.properties["class-name"] : String(t.properties["class-name"] || "").split(" ");
        t.properties.class = [
          t.properties.class || "",
          ...u,
          ...s
        ].filter(Boolean).join(" "), Reflect.deleteProperty(t.properties, "className"), Reflect.deleteProperty(t.properties, "class-name");
      }
      if (nA.call(e.handlers, t.tagName)) return e.handlers[t.tagName](e, t, n) || void 0;
      if ("value" in t && typeof t.value == "string") {
        const u = {
          type: "text",
          value: t.value
        };
        return e.patch(t, u), u;
      }
      if (Ac(t, n)) return {
        type: Zt,
        name: t.tagName,
        attributes: t.properties,
        children: e.all(t)
      };
      if (![
        "li",
        "p"
      ].includes((n == null ? void 0 : n.tagName) || "") && !((_a2 = t.children) == null ? void 0 : _a2.length)) {
        const u = Object.entries(t.properties || {});
        if (u.length < 4 && !u.some(([s, a]) => String(a).includes(`
`) || s.startsWith(":"))) return {
          type: "paragraph",
          children: [
            {
              type: Zt,
              name: t.tagName,
              attributes: t.properties,
              children: e.all(t)
            }
          ]
        };
      }
      let i = e.all(t);
      return i.every((u) => [
        Zt,
        "text"
      ].includes(u.type)) && (i = [
        {
          type: "paragraph",
          children: i
        }
      ]), {
        type: "containerComponent",
        name: t.tagName,
        attributes: t.properties,
        children: i
      };
    }
  }, uA = {
    template: (e, t) => {
      var _a2;
      const n = ((_a2 = Object.keys(t.properties || {}).find((i) => i == null ? void 0 : i.startsWith("v-slot:"))) == null ? void 0 : _a2.replace("v-slot:", "")) || "default", r = Object.fromEntries(Object.entries(t.properties || {}).filter(([i]) => !i.startsWith("v-slot:")));
      return {
        type: "componentContainerSection",
        name: n,
        attributes: r,
        children: e.toFlow(e.all(t))
      };
    },
    div: (e, t) => ({
      type: "containerComponent",
      name: "div",
      attributes: t.properties,
      children: e.toFlow(e.all(t))
    }),
    li: (e, t) => {
      var _a2, _b2;
      const n = $t.li(e, t);
      if (((_a2 = n.children[0]) == null ? void 0 : _a2.type) === "paragraph") {
        const r = n.children[0], i = r.children[r.children.length - 1];
        (i == null ? void 0 : i.type) === "text" && ((_b2 = i.value) == null ? void 0 : _b2.endsWith(`
`)) && (i.value = i.value.trim());
      }
      return n;
    },
    ul: (e, t, n) => {
      const r = $t.ul(e, t);
      return [
        "p",
        "li"
      ].includes((n == null ? void 0 : n.tagName) || "") ? r : {
        type: "paragraph",
        children: [
          r
        ]
      };
    },
    ol: (e, t, n) => {
      const r = $t.ol(e, t);
      return [
        "p",
        "li"
      ].includes((n == null ? void 0 : n.tagName) || "") ? r : {
        type: "paragraph",
        children: [
          r
        ]
      };
    },
    code: (e, t) => {
      const n = {
        ...t.properties
      };
      "style" in n && !n.style && delete n.style, "class" in n && (n.className = String(n.class).split(" ").filter(Boolean), delete n.class), Array.isArray(n.className) && (n.className = n.className.filter((i) => !i.startsWith("language-")), Array.isArray(n.className) && !n.className.length && delete n.className), n.language && (n.lang = Os(n.language), delete n.language);
      const r = {
        type: "inlineCode",
        value: Fn(t),
        attributes: n
      };
      return e.patch(t, r), r;
    },
    pre: (e, t) => {
      var _a2;
      const n = [
        t.properties.filename ? `[${String(t.properties.filename).replace(/\]/g, "\\]")}]` : "",
        ((_a2 = t.properties.highlights) == null ? void 0 : _a2.length) ? `{${eA(t.properties.highlights)}}` : "",
        t.properties.meta
      ].filter(Boolean).join(" ");
      return {
        type: "code",
        value: String(t.properties.code || "").replace(/\n$/, ""),
        lang: Os(t.properties.language),
        meta: n
      };
    },
    button: (e, t, n) => sA(t, n) ? Ue("button")(e, t) : {
      type: "containerComponent",
      name: "button",
      children: e.all(t),
      attributes: t.properties
    },
    span: Ue("span"),
    kbd: Ue("kbd"),
    binding: Ue("binding"),
    iframe: Ue("iframe"),
    video: Ue("video"),
    "nuxt-img": Ue("nuxt-img"),
    "nuxt-picture": Ue("nuxt-picture"),
    br: Ue("br"),
    table: (e, t) => (ge(t, (n) => {
      n.type === ur && (n.type = "element");
    }), Object.keys(t.properties).length ? (Z2({
      type: "root",
      children: [
        t
      ]
    }), {
      type: "html",
      value: Zc(t)
    }) : $t.table(e, t)),
    img: (e, t) => {
      const { src: n, title: r, alt: i, ...u } = t.properties || {}, s = {
        type: "image",
        url: e.resolve(String(n || "") || null),
        title: r ? String(r) : null,
        alt: i ? String(i) : "",
        attributes: u
      };
      return e.patch(t, s), s;
    },
    em: (e, t) => {
      const n = {
        type: "emphasis",
        children: e.all(t),
        attributes: t.properties
      };
      return e.patch(t, n), n;
    },
    strong: (e, t) => {
      const n = {
        type: "strong",
        children: e.all(t),
        attributes: t.properties
      };
      return e.patch(t, n), n;
    },
    a(e, t) {
      const { href: n, title: r, ...i } = t.properties || {};
      Oc(String(n || "")) && (i.target === "_blank" && delete i.target, [
        "nofollow,noopener,noreferrer"
      ].includes(String(i.rel)) && delete i.rel);
      const u = {
        type: "link",
        url: e.resolve(String(n || "") || null),
        title: r ? String(r) : null,
        children: e.all(t),
        attributes: i
      };
      return e.patch(t, u), u;
    }
  };
  function Ue(e) {
    return (t, n) => {
      const r = {
        type: Zt,
        name: e,
        attributes: n.properties,
        children: t.all(n)
      };
      return t.patch(n, r), r;
    };
  }
  function Ac(e, t) {
    var _a2;
    return !!([
      "p",
      "li",
      "strong",
      "em",
      "span",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6"
    ].includes((t == null ? void 0 : t.tagName) || "") || ((_a2 = t == null ? void 0 : t.children) == null ? void 0 : _a2.some((n) => n.type === "text")));
  }
  function sA(e, t) {
    var _a2, _b2;
    return !(((_a2 = e.children) == null ? void 0 : _a2.find((n) => n.type === ur)) || ((_b2 = e.children) == null ? void 0 : _b2.find((n) => n.type === "text" && n.value.includes(`
`))) || !Ac(e, t));
  }
  function Cc(e = {}) {
    var _a2, _b2, _c2, _d2, _e, _f2;
    return Us().use(function() {
      this.parser = function(n) {
        return JSON.parse(n);
      };
    }).use(rA).use(ho).use(Za, ((_b2 = (_a2 = e == null ? void 0 : e.plugins) == null ? void 0 : _a2["remark-mdc"]) == null ? void 0 : _b2.options) || ((_d2 = (_c2 = e == null ? void 0 : e.plugins) == null ? void 0 : _c2.remarkMDC) == null ? void 0 : _d2.options) || {}).use(HT, {
      bullet: "-",
      emphasis: "*",
      rule: "-",
      listItemIndent: "one",
      fence: "`",
      fences: true,
      ...(_f2 = (_e = e == null ? void 0 : e.plugins) == null ? void 0 : _e.remarkStringify) == null ? void 0 : _f2.options
    });
  }
  function _c(e = {}) {
    const t = Cc(e);
    async function n(r, i = {}) {
      var _a2;
      const u = await t.process({
        value: JSON.stringify(r)
      });
      return Object.keys(i).length ? ja(i, u.value, (_a2 = e.frontMatter) == null ? void 0 : _a2.options) : u.value;
    }
    return n;
  }
  async function aA(e, t, n = {}) {
    const r = _c(n);
    return e ? await r(e, t) : null;
  }
  oA = function(e) {
    const t = e;
    return async (n) => {
      const r = [], i = [];
      ge(n, (u) => {
        var _a2, _b2, _c2;
        const s = u;
        if (![
          "pre",
          "code"
        ].includes(s.tagName)) return false;
        const a = ((_a2 = s.properties) == null ? void 0 : _a2.language) !== void 0 && ((_b2 = s.properties) == null ? void 0 : _b2.language) !== "text", o = !!((_c2 = s.properties) == null ? void 0 : _c2.highlights);
        return a || o;
      }, (u) => {
        const s = u, a = typeof s.properties.highlights == "string" ? s.properties.highlights.split(/[,\s]+/).map(Number) : Array.isArray(s.properties.highlights) ? s.properties.highlights.map(Number) : [], o = t.highlighter(ec(u), s.properties.language, t.theme, {
          highlights: a.filter(Boolean),
          meta: s.properties.meta
        }).then(({ tree: l, className: h, style: f, inlineStyle: d }) => {
          var _a2;
          s.properties.className = ((s.properties.className || "") + " " + h).trim(), s.properties.style = ((s.properties.style || "") + " " + d).trim(), ((_a2 = s.children[0]) == null ? void 0 : _a2.tagName) === "code" ? s.children[0].children = l : s.children = l[0].children || l, f && i.push(f);
        });
        r.push(o);
      }), r.length && (await Promise.all(r), n.children.push({
        type: "element",
        tagName: "style",
        children: [
          {
            type: "text",
            value: cA(i.join(""))
          }
        ],
        properties: {}
      }));
    };
  };
  const cA = (e) => {
    const t = e.split("}").filter((n) => !!n.trim()).map((n) => n.trim() + "}");
    return Array.from(new Set(t)).join("");
  };
  function lA({ langs: e = [], themes: t = [], bundledLangs: n = {}, bundledThemes: r = {}, getMdcConfigs: i, options: u, engine: s } = {}) {
    let a, o;
    async function l() {
      var _a2, _b2;
      const { createHighlighterCore: p, addClassToHast: E, isSpecialLang: m, isSpecialTheme: D } = await Ln(async () => {
        const { createHighlighterCore: k, addClassToHast: Y, isSpecialLang: w, isSpecialTheme: $ } = await import("./9jc539TB.js");
        return {
          createHighlighterCore: k,
          addClassToHast: Y,
          isSpecialLang: w,
          isSpecialTheme: $
        };
      }, __vite__mapDeps([8,7,5,2,3,6]), import.meta.url), { transformerNotationDiff: C, transformerNotationErrorLevel: x, transformerNotationFocus: S, transformerNotationHighlight: B } = await Ln(async () => {
        const { transformerNotationDiff: k, transformerNotationErrorLevel: Y, transformerNotationFocus: w, transformerNotationHighlight: $ } = await import("./BUm4nZhI.js");
        return {
          transformerNotationDiff: k,
          transformerNotationErrorLevel: Y,
          transformerNotationFocus: w,
          transformerNotationHighlight: $
        };
      }, [], import.meta.url), v = await p({
        langs: e,
        themes: t,
        engine: s || el()
      });
      for await (const k of await f()) await ((_b2 = (_a2 = k.shiki) == null ? void 0 : _a2.setup) == null ? void 0 : _b2.call(_a2, v));
      return {
        shiki: v,
        addClassToHast: E,
        isSpecialLang: m,
        isSpecialTheme: D,
        transformers: [
          C(),
          x(),
          S(),
          B()
        ]
      };
    }
    async function h() {
      return a || (a = l()), a;
    }
    async function f() {
      return o || (o = Promise.resolve((i == null ? void 0 : i()) || [])), o;
    }
    return async (p, E, m, D = {}) => {
      var _a2, _b2, _c2;
      const { shiki: C, addClassToHast: x, isSpecialLang: S, isSpecialTheme: B, transformers: v } = await h(), k = {
        defaultColor: false,
        meta: {
          __raw: D.meta
        }
      };
      E === "ts-type" || E === "typescript-type" ? (E = "typescript", k.grammarContextCode = "let a:") : (E === "vue-html" || E === "vue-template") && (E = "vue", k.grammarContextCode = "<template>");
      const Y = {
        ...typeof m == "string" ? {
          default: m
        } : m || {}
      }, w = C.getLoadedThemes(), $ = C.getLoadedLanguages();
      typeof E == "string" && !$.includes(E) && !S(E) && (n[E] ? await C.loadLanguage(n[E]) : E = "text");
      for (const [L, O] of Object.entries(Y)) typeof O == "string" && !w.includes(O) && !B(O) && (r[O] ? await C.loadTheme(r[O]) : Y[L] = "none");
      const I = /* @__PURE__ */ new Map();
      for (const L of v) I.set(L.name || `transformer:${Math.random()}-${L.constructor.name}`, L);
      for (const L of await f()) {
        const O = typeof ((_a2 = L.shiki) == null ? void 0 : _a2.transformers) == "function" ? await ((_b2 = L.shiki) == null ? void 0 : _b2.transformers(p, E, m, D)) : ((_c2 = L.shiki) == null ? void 0 : _c2.transformers) || [];
        for (const j of O) I.set(j.name || `transformer:${Math.random()}-${j.constructor.name}`, j);
      }
      const z = C.codeToHast(p.trimEnd(), {
        lang: E,
        ...k,
        themes: Y,
        transformers: [
          ...I.values(),
          {
            name: "mdc:highlight",
            line(L, O) {
              var _a3;
              ((_a3 = D.highlights) == null ? void 0 : _a3.includes(O)) && x(L, "highlight"), L.properties.line = O;
            }
          },
          {
            name: "mdc:newline",
            line(L) {
              if (p == null ? void 0 : p.includes(`
`)) {
                if (L.children.length === 0 || L.children.length === 1 && L.children[0].type === "element" && L.children[0].children.length === 1 && L.children[0].children[0].type === "text" && L.children[0].children[0].value === "") {
                  L.children = [
                    {
                      type: "element",
                      tagName: "span",
                      properties: {
                        emptyLinePlaceholder: true
                      },
                      children: [
                        {
                          type: "text",
                          value: `
`
                        }
                      ]
                    }
                  ];
                  return;
                }
                const O = L.children.at(-1);
                if ((O == null ? void 0 : O.type) === "element" && O.tagName === "span") {
                  const j = O.children.at(-1);
                  (j == null ? void 0 : j.type) === "text" && (j.value += `
`);
                }
              }
            }
          }
        ]
      }).children[0], V = z.children[0], X = u == null ? void 0 : u.wrapperStyle;
      z.properties.style = X ? typeof X == "string" ? X : z.properties.style : "";
      const G = [];
      return Object.keys(Y).forEach((L) => {
        const O = L !== "default" ? `.${L}` : "";
        G.push(X ? `${O} .shiki,` : "", `html .${L} .shiki span {`, `color: var(--shiki-${L});`, `background: var(--shiki-${L}-bg);`, `font-style: var(--shiki-${L}-font-style);`, `font-weight: var(--shiki-${L}-font-weight);`, `text-decoration: var(--shiki-${L}-text-decoration);`, "}"), G.push(`html${O} .shiki span {`, `color: var(--shiki-${L});`, `background: var(--shiki-${L}-bg);`, `font-style: var(--shiki-${L}-font-style);`, `font-weight: var(--shiki-${L}-font-weight);`, `text-decoration: var(--shiki-${L}-text-decoration);`, "}");
      }), {
        tree: V.children,
        className: Array.isArray(z.properties.class) ? z.properties.class.join(" ") : z.properties.class,
        inlineStyle: z.properties.style,
        style: G.join("")
      };
    };
  }
  TA = Object.freeze(Object.defineProperty({
    __proto__: null,
    TEXT_TAGS: tl,
    createCachedParser: Kc,
    createMarkdownParser: rc,
    createMarkdownStringifier: _c,
    createParseProcessor: nc,
    createShikiHighlighter: lA,
    createStringifyProcessor: Cc,
    flatUnwrap: nl,
    isTag: rl,
    isText: il,
    nodeChildren: ul,
    nodeTextContent: Fn,
    parseMarkdown: MT,
    rehypeHighlight: oA,
    stringifyMarkdown: aA,
    unwrap: sl
  }, Symbol.toStringTag, {
    value: "Module"
  }));
});
export {
  Ei as S,
  __tla,
  W as a,
  Za as b,
  hm as f,
  uE as h,
  TA as i,
  gp as l,
  K as m,
  gA as o,
  oA as r,
  sE as s,
  pn as t,
  gi as v,
  rt as w
};
