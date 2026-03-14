const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./BZ_nUnuB.js","./CN1p5ccG.js","./entry.DV2Z0fTU.css","./QyzFQwww.js","./BiwnguJD.js","./iik6CYzq.js","./DaWZu8wl.js","./DBBzBJnd.js","./B1VZEswH.js","./BGiG5Tvm.js","./Pre.C6zHuhlv.css","./9jc539TB.js"])))=>i.map(i=>d[i]);
import { f as Un, c as re, r as ue, o as $t, k as ss, l as $, y as R, aw as bt, p as v, $ as fe, a0 as ke, O as X, V as os, ah as Be, A as M, m as Y, w as te, n as oe, W as _n, B as ee, z as Nn, ab as me, E as as, a6 as ca, a8 as da, e as ce, F as zt, C as Nt, H as At, L as Ae, Q as Ft, R as is, N as Ne, ck as ls, a2 as rn, bY as Bt, P as Fn, bn as An, aj as or, cl as fa, v as Ge, cm as pa, b as ar, b$ as Bn, bv as ha, ae as us, bM as cs, c7 as ma, bI as ds, bJ as fs, aU as ps, G as ga, I as ya, K as va, M as hs, S as ba, ad as _a, aQ as wa, Y as ir, X as lr, af as ur, ak as Sa, U as ka, ce as Ia, Z as cr, a1 as Ea, cn as Oa, b1 as $a, D as za } from "#entry";
import { _ as Na } from "./BiwnguJD.js";
let Ja, ne, Eh, Ra, sn, $h, mi, zh, Oh, Fe, Te, Ee, W, He, Es, an, Ih, Jn, xt, ei, _t, se, on, Jt, Se, Xe, wn, Ba, kh, Sh, Va, Vt, Xa, pe, Ya, H, fr, Ie, mt, wh;
let __tla = (async () => {
  let ms, Aa, xa, Ta, Pa, Ca, dr, Za, ja, Vn, gs, Je;
  ms = globalThis.setInterval;
  Aa = Un({
    __name: "AssistantMatrix",
    props: {
      size: {
        default: 4
      },
      dotSize: {
        default: 2
      },
      gap: {
        default: 2
      }
    },
    setup(e) {
      const t = e, n = re(() => t.size * t.size), r = ue(/* @__PURE__ */ new Set()), s = [
        [
          [
            0
          ],
          [
            1
          ],
          [
            2
          ],
          [
            3
          ],
          [
            7
          ],
          [
            11
          ],
          [
            15
          ],
          [
            14
          ],
          [
            13
          ],
          [
            12
          ],
          [
            8
          ],
          [
            4
          ],
          [
            5
          ],
          [
            6
          ],
          [
            10
          ],
          [
            9
          ]
        ],
        [
          [
            0,
            4,
            8,
            12
          ],
          [
            1,
            5,
            9,
            13
          ],
          [
            2,
            6,
            10,
            14
          ],
          [
            3,
            7,
            11,
            15
          ]
        ],
        [
          [
            5,
            6,
            9,
            10
          ],
          [
            1,
            4,
            7,
            8,
            11,
            14
          ],
          [
            0,
            3,
            12,
            15
          ],
          [
            1,
            4,
            7,
            8,
            11,
            14
          ],
          [
            5,
            6,
            9,
            10
          ]
        ],
        [
          [
            0,
            1,
            2,
            3
          ],
          [
            4,
            5,
            6,
            7
          ],
          [
            8,
            9,
            10,
            11
          ],
          [
            12,
            13,
            14,
            15
          ]
        ],
        [
          [
            0
          ],
          [
            3
          ],
          [
            15
          ],
          [
            12
          ]
        ],
        [
          [
            5,
            6,
            9,
            10
          ],
          [
            1,
            2,
            4,
            7,
            8,
            11,
            13,
            14
          ],
          [
            0,
            3,
            12,
            15
          ]
        ],
        [
          [
            0
          ],
          [
            1
          ],
          [
            2
          ],
          [
            3
          ],
          [
            7
          ],
          [
            6
          ],
          [
            5
          ],
          [
            4
          ],
          [
            8
          ],
          [
            9
          ],
          [
            10
          ],
          [
            11
          ],
          [
            15
          ],
          [
            14
          ],
          [
            13
          ],
          [
            12
          ]
        ],
        [
          [
            0
          ],
          [
            1,
            4
          ],
          [
            2,
            5,
            8
          ],
          [
            3,
            6,
            9,
            12
          ],
          [
            7,
            10,
            13
          ],
          [
            11,
            14
          ],
          [
            15
          ]
        ]
      ];
      let o = 0, a = 0, i = null;
      function l() {
        const d = s[o];
        d && (r.value = new Set(d[a]), a++, a >= d.length && (a = 0, o = (o + 1) % s.length));
      }
      const u = re(() => ({
        display: "grid",
        gridTemplateColumns: `repeat(${t.size}, 1fr)`,
        gap: `${t.gap}px`,
        width: `${t.size * t.dotSize + (t.size - 1) * t.gap}px`,
        height: `${t.size * t.dotSize + (t.size - 1) * t.gap}px`
      })), c = re(() => ({
        width: `${t.dotSize}px`,
        height: `${t.dotSize}px`
      }));
      return $t(() => {
        i = ms(l, 120), l();
      }), ss(() => {
        i && clearInterval(i);
      }), (d, h) => ($(), R("div", {
        style: bt(v(u))
      }, [
        ($(true), R(fe, null, ke(v(n), (p) => ($(), R("span", {
          key: p,
          class: X([
            "rounded-[0.5px] bg-current transition-opacity duration-100",
            v(r).has(p - 1) ? "opacity-100" : "opacity-20"
          ]),
          style: bt(v(c))
        }, null, 6))), 128))
      ], 4));
    }
  });
  xa = Object.assign(Aa, {
    __name: "AssistantMatrix"
  });
  Ta = {
    class: "flex flex-col gap-2"
  };
  Pa = {
    class: "flex items-center text-xs text-muted overflow-hidden"
  };
  Ca = {
    class: "text-[11px] text-dimmed truncate max-w-[200px]"
  };
  dr = "abcdefghijklmnopqrstuvwxyz";
  Za = Un({
    __name: "AssistantLoading",
    props: {
      text: {},
      toolCalls: {},
      isLoading: {
        type: Boolean
      }
    },
    setup(e) {
      const t = e, { t: n } = os(), r = re(() => [
        n("assistant.loading.searching"),
        n("assistant.loading.reading"),
        n("assistant.loading.analyzing"),
        n("assistant.loading.finding")
      ]), s = re(() => n("assistant.loading.finished")), o = ue(0), a = re(() => t.isLoading ? t.text || r.value[o.value] : s.value), i = ue(a.value);
      function l(d, h) {
        const p = Math.max(d.length, h.length);
        let b = 0;
        const m = 15, y = () => {
          b++;
          let w = "";
          for (let k = 0; k < p; k++) {
            const S = b / m * p;
            k < S - 2 ? w += h[k] || "" : k < S ? w += dr[Math.floor(Math.random() * dr.length)] : w += d[k] || "";
          }
          i.value = w, b < m ? requestAnimationFrame(y) : i.value = h;
        };
        requestAnimationFrame(y);
      }
      let u = null;
      Be(a, (d, h) => {
        d !== h && d && h && l(h, d);
      }), Be(() => t.isLoading, (d) => {
        !d && u && (clearInterval(u), u = null);
      });
      function c(d, h) {
        const p = (h == null ? void 0 : h.path) || "";
        return d === "list-pages" ? n("assistant.toolListPages") : d === "get-page" ? `${n("assistant.toolReadPage")} ${p || "..."}` : d;
      }
      return $t(() => {
        !t.text && t.isLoading && (u = ms(() => {
          o.value = (o.value + 1) % r.value.length;
        }, 3500));
      }), ss(() => {
        u && clearInterval(u);
      }), (d, h) => {
        var _a2;
        const p = xa;
        return $(), R("div", Ta, [
          M("div", Pa, [
            e.isLoading ? ($(), Y(v(_n).div, {
              key: 0,
              initial: {
                opacity: 1,
                width: "auto"
              },
              exit: {
                opacity: 0,
                width: 0
              },
              transition: {
                duration: 0.2
              },
              class: "shrink-0 mr-2"
            }, {
              default: te(() => [
                oe(p)
              ]),
              _: 1
            })) : ee("", true),
            oe(v(_n).span, {
              animate: {
                x: 0
              },
              transition: {
                duration: 0.2
              },
              class: "font-mono tracking-tight"
            }, {
              default: te(() => [
                Nn(me(v(i)), 1)
              ]),
              _: 1
            })
          ]),
          ((_a2 = e.toolCalls) == null ? void 0 : _a2.length) ? ($(), R("div", {
            key: 0,
            class: X([
              "flex flex-col gap-1",
              e.isLoading ? "pl-[22px]" : "pl-0"
            ])
          }, [
            ($(true), R(fe, null, ke(e.toolCalls, (b) => ($(), Y(v(_n).div, {
              key: `${b.toolCallId}-${JSON.stringify(b.args)}`,
              initial: {
                opacity: 0,
                x: -4
              },
              animate: {
                opacity: 1,
                x: 0
              },
              transition: {
                duration: 0.15
              },
              class: "flex items-center gap-1.5"
            }, {
              default: te(() => [
                h[0] || (h[0] = M("span", {
                  class: "size-1 rounded-full bg-current opacity-40"
                }, null, -1)),
                M("span", Ca, me(c(b.toolName, b.args)), 1)
              ]),
              _: 2
            }, 1024))), 128))
          ], 2)) : ee("", true)
        ]);
      };
    }
  });
  ja = Object.assign(Za, {
    __name: "AssistantLoading"
  });
  Vn = /* @__PURE__ */ Symbol.for("yaml.alias");
  Ra = /* @__PURE__ */ Symbol.for("yaml.document");
  Fe = /* @__PURE__ */ Symbol.for("yaml.map");
  gs = /* @__PURE__ */ Symbol.for("yaml.pair");
  Jn = /* @__PURE__ */ Symbol.for("yaml.scalar");
  xt = /* @__PURE__ */ Symbol.for("yaml.seq");
  Te = /* @__PURE__ */ Symbol.for("yaml.node.type");
  Je = (e) => !!e && typeof e == "object" && e[Te] === Vn;
  sn = (e) => !!e && typeof e == "object" && e[Te] === Ra;
  on = (e) => !!e && typeof e == "object" && e[Te] === Fe;
  ne = (e) => !!e && typeof e == "object" && e[Te] === gs;
  H = (e) => !!e && typeof e == "object" && e[Te] === Jn;
  an = (e) => !!e && typeof e == "object" && e[Te] === xt;
  pe = function(e) {
    if (e && typeof e == "object") switch (e[Te]) {
      case Fe:
      case xt:
        return true;
    }
    return false;
  };
  se = function(e) {
    if (e && typeof e == "object") switch (e[Te]) {
      case Vn:
      case Fe:
      case Jn:
      case xt:
        return true;
    }
    return false;
  };
  const ys = (e) => (H(e) || pe(e)) && !!e.anchor, Le = /* @__PURE__ */ Symbol("break visit"), Ma = /* @__PURE__ */ Symbol("skip children"), yt = /* @__PURE__ */ Symbol("remove node");
  function ut(e, t) {
    const n = Da(t);
    sn(e) ? Qe(null, e.contents, n, Object.freeze([
      e
    ])) === yt && (e.contents = null) : Qe(null, e, n, Object.freeze([]));
  }
  ut.BREAK = Le;
  ut.SKIP = Ma;
  ut.REMOVE = yt;
  function Qe(e, t, n, r) {
    const s = La(e, t, n, r);
    if (se(s) || ne(s)) return qa(e, r, s), Qe(e, s, n, r);
    if (typeof s != "symbol") {
      if (pe(t)) {
        r = Object.freeze(r.concat(t));
        for (let o = 0; o < t.items.length; ++o) {
          const a = Qe(o, t.items[o], n, r);
          if (typeof a == "number") o = a - 1;
          else {
            if (a === Le) return Le;
            a === yt && (t.items.splice(o, 1), o -= 1);
          }
        }
      } else if (ne(t)) {
        r = Object.freeze(r.concat(t));
        const o = Qe("key", t.key, n, r);
        if (o === Le) return Le;
        o === yt && (t.key = null);
        const a = Qe("value", t.value, n, r);
        if (a === Le) return Le;
        a === yt && (t.value = null);
      }
    }
    return s;
  }
  function Da(e) {
    return typeof e == "object" && (e.Collection || e.Node || e.Value) ? Object.assign({
      Alias: e.Node,
      Map: e.Node,
      Scalar: e.Node,
      Seq: e.Node
    }, e.Value && {
      Map: e.Value,
      Scalar: e.Value,
      Seq: e.Value
    }, e.Collection && {
      Map: e.Collection,
      Seq: e.Collection
    }, e) : e;
  }
  function La(e, t, n, r) {
    var _a2, _b, _c2, _d2, _e2;
    if (typeof n == "function") return n(e, t, r);
    if (on(t)) return (_a2 = n.Map) == null ? void 0 : _a2.call(n, e, t, r);
    if (an(t)) return (_b = n.Seq) == null ? void 0 : _b.call(n, e, t, r);
    if (ne(t)) return (_c2 = n.Pair) == null ? void 0 : _c2.call(n, e, t, r);
    if (H(t)) return (_d2 = n.Scalar) == null ? void 0 : _d2.call(n, e, t, r);
    if (Je(t)) return (_e2 = n.Alias) == null ? void 0 : _e2.call(n, e, t, r);
  }
  function qa(e, t, n) {
    const r = t[t.length - 1];
    if (pe(r)) r.items[e] = n;
    else if (ne(r)) e === "key" ? r.key = n : r.value = n;
    else if (sn(r)) r.contents = n;
    else {
      const s = Je(r) ? "alias" : "scalar";
      throw new Error(`Cannot replace node with ${s} parent`);
    }
  }
  const Ua = {
    "!": "%21",
    ",": "%2C",
    "[": "%5B",
    "]": "%5D",
    "{": "%7B",
    "}": "%7D"
  }, Fa = (e) => e.replace(/[!,[\]{}]/g, (t) => Ua[t]);
  Se = class {
    constructor(t, n) {
      this.docStart = null, this.docEnd = false, this.yaml = Object.assign({}, Se.defaultYaml, t), this.tags = Object.assign({}, Se.defaultTags, n);
    }
    clone() {
      const t = new Se(this.yaml, this.tags);
      return t.docStart = this.docStart, t;
    }
    atDocument() {
      const t = new Se(this.yaml, this.tags);
      switch (this.yaml.version) {
        case "1.1":
          this.atNextDocument = true;
          break;
        case "1.2":
          this.atNextDocument = false, this.yaml = {
            explicit: Se.defaultYaml.explicit,
            version: "1.2"
          }, this.tags = Object.assign({}, Se.defaultTags);
          break;
      }
      return t;
    }
    add(t, n) {
      this.atNextDocument && (this.yaml = {
        explicit: Se.defaultYaml.explicit,
        version: "1.1"
      }, this.tags = Object.assign({}, Se.defaultTags), this.atNextDocument = false);
      const r = t.trim().split(/[ \t]+/), s = r.shift();
      switch (s) {
        case "%TAG": {
          if (r.length !== 2 && (n(0, "%TAG directive should contain exactly two parts"), r.length < 2)) return false;
          const [o, a] = r;
          return this.tags[o] = a, true;
        }
        case "%YAML": {
          if (this.yaml.explicit = true, r.length !== 1) return n(0, "%YAML directive should contain exactly one part"), false;
          const [o] = r;
          if (o === "1.1" || o === "1.2") return this.yaml.version = o, true;
          {
            const a = /^\d+\.\d+$/.test(o);
            return n(6, `Unsupported YAML version ${o}`, a), false;
          }
        }
        default:
          return n(0, `Unknown directive ${s}`, true), false;
      }
    }
    tagName(t, n) {
      if (t === "!") return "!";
      if (t[0] !== "!") return n(`Not a valid tag: ${t}`), null;
      if (t[1] === "<") {
        const a = t.slice(2, -1);
        return a === "!" || a === "!!" ? (n(`Verbatim tags aren't resolved, so ${t} is invalid.`), null) : (t[t.length - 1] !== ">" && n("Verbatim tags must end with a >"), a);
      }
      const [, r, s] = t.match(/^(.*!)([^!]*)$/s);
      s || n(`The ${t} tag has no suffix`);
      const o = this.tags[r];
      if (o) try {
        return o + decodeURIComponent(s);
      } catch (a) {
        return n(String(a)), null;
      }
      return r === "!" ? t : (n(`Could not resolve tag: ${t}`), null);
    }
    tagString(t) {
      for (const [n, r] of Object.entries(this.tags)) if (t.startsWith(r)) return n + Fa(t.substring(r.length));
      return t[0] === "!" ? t : `!<${t}>`;
    }
    toString(t) {
      const n = this.yaml.explicit ? [
        `%YAML ${this.yaml.version || "1.2"}`
      ] : [], r = Object.entries(this.tags);
      let s;
      if (t && r.length > 0 && se(t.contents)) {
        const o = {};
        ut(t.contents, (a, i) => {
          se(i) && i.tag && (o[i.tag] = true);
        }), s = Object.keys(o);
      } else s = [];
      for (const [o, a] of r) o === "!!" && a === "tag:yaml.org,2002:" || (!t || s.some((i) => i.startsWith(a))) && n.push(`%TAG ${o} ${a}`);
      return n.join(`
`);
    }
  };
  Se.defaultYaml = {
    explicit: false,
    version: "1.2"
  };
  Se.defaultTags = {
    "!!": "tag:yaml.org,2002:"
  };
  function vs(e) {
    if (/[\x00-\x19\s,[\]{}]/.test(e)) {
      const n = `Anchor must not contain whitespace or control characters: ${JSON.stringify(e)}`;
      throw new Error(n);
    }
    return true;
  }
  Ba = function(e) {
    const t = /* @__PURE__ */ new Set();
    return ut(e, {
      Value(n, r) {
        r.anchor && t.add(r.anchor);
      }
    }), t;
  };
  Va = function(e, t) {
    for (let n = 1; ; ++n) {
      const r = `${e}${n}`;
      if (!t.has(r)) return r;
    }
  };
  wh = function(e, t) {
    const n = [], r = /* @__PURE__ */ new Map();
    let s = null;
    return {
      onAnchor: (o) => {
        n.push(o), s ?? (s = Ba(e));
        const a = Va(t, s);
        return s.add(a), a;
      },
      setAnchors: () => {
        for (const o of n) {
          const a = r.get(o);
          if (typeof a == "object" && a.anchor && (H(a.node) || pe(a.node))) a.node.anchor = a.anchor;
          else {
            const i = new Error("Failed to resolve repeated object (this should not happen)");
            throw i.source = o, i;
          }
        }
      },
      sourceObjects: r
    };
  };
  mt = function(e, t, n, r) {
    if (r && typeof r == "object") if (Array.isArray(r)) for (let s = 0, o = r.length; s < o; ++s) {
      const a = r[s], i = mt(e, r, String(s), a);
      i === void 0 ? delete r[s] : i !== a && (r[s] = i);
    }
    else if (r instanceof Map) for (const s of Array.from(r.keys())) {
      const o = r.get(s), a = mt(e, r, s, o);
      a === void 0 ? r.delete(s) : a !== o && r.set(s, a);
    }
    else if (r instanceof Set) for (const s of Array.from(r)) {
      const o = mt(e, r, s, s);
      o === void 0 ? r.delete(s) : o !== s && (r.delete(s), r.add(o));
    }
    else for (const [s, o] of Object.entries(r)) {
      const a = mt(e, r, s, o);
      a === void 0 ? delete r[s] : a !== o && (r[s] = a);
    }
    return e.call(t, n, r);
  };
  Ie = function(e, t, n) {
    if (Array.isArray(e)) return e.map((r, s) => Ie(r, String(s), n));
    if (e && typeof e.toJSON == "function") {
      if (!n || !ys(e)) return e.toJSON(t, n);
      const r = {
        aliasCount: 0,
        count: 1,
        res: void 0
      };
      n.anchors.set(e, r), n.onCreate = (o) => {
        r.res = o, delete n.onCreate;
      };
      const s = e.toJSON(t, n);
      return n.onCreate && n.onCreate(s), s;
    }
    return typeof e == "bigint" && !(n == null ? void 0 : n.keep) ? Number(e) : e;
  };
  class Wn {
    constructor(t) {
      Object.defineProperty(this, Te, {
        value: t
      });
    }
    clone() {
      const t = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      return this.range && (t.range = this.range.slice()), t;
    }
    toJS(t, { mapAsMap: n, maxAliasCount: r, onAnchor: s, reviver: o } = {}) {
      if (!sn(t)) throw new TypeError("A document argument is required");
      const a = {
        anchors: /* @__PURE__ */ new Map(),
        doc: t,
        keep: true,
        mapAsMap: n === true,
        mapKeyWarned: false,
        maxAliasCount: typeof r == "number" ? r : 100
      }, i = Ie(this, "", a);
      if (typeof s == "function") for (const { count: l, res: u } of a.anchors.values()) s(u, l);
      return typeof o == "function" ? mt(o, {
        "": i
      }, "", i) : i;
    }
  }
  Ja = class extends Wn {
    constructor(t) {
      super(Vn), this.source = t, Object.defineProperty(this, "tag", {
        set() {
          throw new Error("Alias nodes cannot have tags");
        }
      });
    }
    resolve(t, n) {
      let r;
      (n == null ? void 0 : n.aliasResolveCache) ? r = n.aliasResolveCache : (r = [], ut(t, {
        Node: (o, a) => {
          (Je(a) || ys(a)) && r.push(a);
        }
      }), n && (n.aliasResolveCache = r));
      let s;
      for (const o of r) {
        if (o === this) break;
        o.anchor === this.source && (s = o);
      }
      return s;
    }
    toJSON(t, n) {
      if (!n) return {
        source: this.source
      };
      const { anchors: r, doc: s, maxAliasCount: o } = n, a = this.resolve(s, n);
      if (!a) {
        const l = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
        throw new ReferenceError(l);
      }
      let i = r.get(a);
      if (i || (Ie(a, null, n), i = r.get(a)), (i == null ? void 0 : i.res) === void 0) {
        const l = "This should not happen: Alias anchor was not resolved?";
        throw new ReferenceError(l);
      }
      if (o >= 0 && (i.count += 1, i.aliasCount === 0 && (i.aliasCount = Lt(s, a, r)), i.count * i.aliasCount > o)) {
        const l = "Excessive alias count indicates a resource exhaustion attack";
        throw new ReferenceError(l);
      }
      return i.res;
    }
    toString(t, n, r) {
      const s = `*${this.source}`;
      if (t) {
        if (vs(this.source), t.options.verifyAliasOrder && !t.anchors.has(this.source)) {
          const o = `Unresolved alias (the anchor must be set before the alias): ${this.source}`;
          throw new Error(o);
        }
        if (t.implicitKey) return `${s} `;
      }
      return s;
    }
  };
  function Lt(e, t, n) {
    if (Je(t)) {
      const r = t.resolve(e), s = n && r && n.get(r);
      return s ? s.count * s.aliasCount : 0;
    } else if (pe(t)) {
      let r = 0;
      for (const s of t.items) {
        const o = Lt(e, s, n);
        o > r && (r = o);
      }
      return r;
    } else if (ne(t)) {
      const r = Lt(e, t.key, n), s = Lt(e, t.value, n);
      return Math.max(r, s);
    }
    return 1;
  }
  const bs = (e) => !e || typeof e != "function" && typeof e != "object";
  W = class extends Wn {
    constructor(t) {
      super(Jn), this.value = t;
    }
    toJSON(t, n) {
      return (n == null ? void 0 : n.keep) ? this.value : Ie(this.value, t, n);
    }
    toString() {
      return String(this.value);
    }
  };
  W.BLOCK_FOLDED = "BLOCK_FOLDED";
  W.BLOCK_LITERAL = "BLOCK_LITERAL";
  W.PLAIN = "PLAIN";
  W.QUOTE_DOUBLE = "QUOTE_DOUBLE";
  W.QUOTE_SINGLE = "QUOTE_SINGLE";
  const Wa = "tag:yaml.org,2002:";
  function Ka(e, t, n) {
    if (t) {
      const r = n.filter((o) => o.tag === t), s = r.find((o) => !o.format) ?? r[0];
      if (!s) throw new Error(`Tag ${t} not found`);
      return s;
    }
    return n.find((r) => {
      var _a2;
      return ((_a2 = r.identify) == null ? void 0 : _a2.call(r, e)) && !r.format;
    });
  }
  Vt = function(e, t, n) {
    var _a2, _b, _c2;
    if (sn(e) && (e = e.contents), se(e)) return e;
    if (ne(e)) {
      const d = (_b = (_a2 = n.schema[Fe]).createNode) == null ? void 0 : _b.call(_a2, n.schema, null, n);
      return d.items.push(e), d;
    }
    (e instanceof String || e instanceof Number || e instanceof Boolean || typeof BigInt < "u" && e instanceof BigInt) && (e = e.valueOf());
    const { aliasDuplicateObjects: r, onAnchor: s, onTagObj: o, schema: a, sourceObjects: i } = n;
    let l;
    if (r && e && typeof e == "object") {
      if (l = i.get(e), l) return l.anchor ?? (l.anchor = s(e)), new Ja(l.anchor);
      l = {
        anchor: null,
        node: null
      }, i.set(e, l);
    }
    (t == null ? void 0 : t.startsWith("!!")) && (t = Wa + t.slice(2));
    let u = Ka(e, t, a.tags);
    if (!u) {
      if (e && typeof e.toJSON == "function" && (e = e.toJSON()), !e || typeof e != "object") {
        const d = new W(e);
        return l && (l.node = d), d;
      }
      u = e instanceof Map ? a[Fe] : Symbol.iterator in Object(e) ? a[xt] : a[Fe];
    }
    o && (o(u), delete n.onTagObj);
    const c = (u == null ? void 0 : u.createNode) ? u.createNode(n.schema, e, n) : typeof ((_c2 = u == null ? void 0 : u.nodeClass) == null ? void 0 : _c2.from) == "function" ? u.nodeClass.from(n.schema, e, n) : new W(e);
    return t ? c.tag = t : u.default || (c.tag = u.tag), l && (l.node = c), c;
  };
  fr = function(e, t, n) {
    let r = n;
    for (let s = t.length - 1; s >= 0; --s) {
      const o = t[s];
      if (typeof o == "number" && Number.isInteger(o) && o >= 0) {
        const a = [];
        a[o] = r, r = a;
      } else r = /* @__PURE__ */ new Map([
        [
          o,
          r
        ]
      ]);
    }
    return Vt(r, void 0, {
      aliasDuplicateObjects: false,
      keepUndefined: false,
      onAnchor: () => {
        throw new Error("This should not happen, please report a bug.");
      },
      schema: e,
      sourceObjects: /* @__PURE__ */ new Map()
    });
  };
  Ya = (e) => e == null || typeof e == "object" && !!e[Symbol.iterator]().next().done;
  class _s extends Wn {
    constructor(t, n) {
      super(t), Object.defineProperty(this, "schema", {
        value: n,
        configurable: true,
        enumerable: false,
        writable: true
      });
    }
    clone(t) {
      const n = Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this));
      return t && (n.schema = t), n.items = n.items.map((r) => se(r) || ne(r) ? r.clone(t) : r), this.range && (n.range = this.range.slice()), n;
    }
    addIn(t, n) {
      if (Ya(t)) this.add(n);
      else {
        const [r, ...s] = t, o = this.get(r, true);
        if (pe(o)) o.addIn(s, n);
        else if (o === void 0 && this.schema) this.set(r, fr(this.schema, s, n));
        else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${s}`);
      }
    }
    deleteIn(t) {
      const [n, ...r] = t;
      if (r.length === 0) return this.delete(n);
      const s = this.get(n, true);
      if (pe(s)) return s.deleteIn(r);
      throw new Error(`Expected YAML collection at ${n}. Remaining path: ${r}`);
    }
    getIn(t, n) {
      const [r, ...s] = t, o = this.get(r, true);
      return s.length === 0 ? !n && H(o) ? o.value : o : pe(o) ? o.getIn(s, n) : void 0;
    }
    hasAllNullValues(t) {
      return this.items.every((n) => {
        if (!ne(n)) return false;
        const r = n.value;
        return r == null || t && H(r) && r.value == null && !r.commentBefore && !r.comment && !r.tag;
      });
    }
    hasIn(t) {
      const [n, ...r] = t;
      if (r.length === 0) return this.has(n);
      const s = this.get(n, true);
      return pe(s) ? s.hasIn(r) : false;
    }
    setIn(t, n) {
      const [r, ...s] = t;
      if (s.length === 0) this.set(r, n);
      else {
        const o = this.get(r, true);
        if (pe(o)) o.setIn(s, n);
        else if (o === void 0 && this.schema) this.set(r, fr(this.schema, s, n));
        else throw new Error(`Expected YAML collection at ${r}. Remaining path: ${s}`);
      }
    }
  }
  const Ga = (e) => e.replace(/^(?!$)(?: $)?/gm, "#");
  _t = function(e, t) {
    return /^\n+$/.test(e) ? e.substring(1) : t ? e.replace(/^(?! *$)/gm, t) : e;
  };
  let ws, xn, qt;
  Xe = (e, t, n) => e.endsWith(`
`) ? _t(n, t) : n.includes(`
`) ? `
` + _t(n, t) : (e.endsWith(" ") ? "" : " ") + n;
  ws = "flow";
  xn = "block";
  qt = "quoted";
  function ln(e, t, n = "flow", { indentAtStart: r, lineWidth: s = 80, minContentWidth: o = 20, onFold: a, onOverflow: i } = {}) {
    if (!s || s < 0) return e;
    s < o && (o = 0);
    const l = Math.max(1 + o, 1 + s - t.length);
    if (e.length <= l) return e;
    const u = [], c = {};
    let d = s - t.length;
    typeof r == "number" && (r > s - Math.max(2, o) ? u.push(0) : d = s - r);
    let h, p, b = false, m = -1, y = -1, w = -1;
    n === xn && (m = pr(e, m, t.length), m !== -1 && (d = m + l));
    for (let f; f = e[m += 1]; ) {
      if (n === qt && f === "\\") {
        switch (y = m, e[m + 1]) {
          case "x":
            m += 3;
            break;
          case "u":
            m += 5;
            break;
          case "U":
            m += 9;
            break;
          default:
            m += 1;
        }
        w = m;
      }
      if (f === `
`) n === xn && (m = pr(e, m, t.length)), d = m + t.length + l, h = void 0;
      else {
        if (f === " " && p && p !== " " && p !== `
` && p !== "	") {
          const S = e[m + 1];
          S && S !== " " && S !== `
` && S !== "	" && (h = m);
        }
        if (m >= d) if (h) u.push(h), d = h + l, h = void 0;
        else if (n === qt) {
          for (; p === " " || p === "	"; ) p = f, f = e[m += 1], b = true;
          const S = m > w + 1 ? m - 2 : y - 1;
          if (c[S]) return e;
          u.push(S), c[S] = true, d = S + l, h = void 0;
        } else b = true;
      }
      p = f;
    }
    if (b && i && i(), u.length === 0) return e;
    a && a();
    let k = e.slice(0, u[0]);
    for (let f = 0; f < u.length; ++f) {
      const S = u[f], I = u[f + 1] || e.length;
      S === 0 ? k = `
${t}${e.slice(0, I)}` : (n === qt && c[S] && (k += `${e[S]}\\`), k += `
${t}${e.slice(S + 1, I)}`);
    }
    return k;
  }
  function pr(e, t, n) {
    let r = t, s = t + 1, o = e[s];
    for (; o === " " || o === "	"; ) if (t < s + n) o = e[++t];
    else {
      do
        o = e[++t];
      while (o && o !== `
`);
      r = t, s = t + 1, o = e[s];
    }
    return r;
  }
  const un = (e, t) => ({
    indentAtStart: t ? e.indent.length : e.indentAtStart,
    lineWidth: e.options.lineWidth,
    minContentWidth: e.options.minContentWidth
  }), cn = (e) => /^(%|---|\.\.\.)/m.test(e);
  function Ha(e, t, n) {
    if (!t || t < 0) return false;
    const r = t - n, s = e.length;
    if (s <= r) return false;
    for (let o = 0, a = 0; o < s; ++o) if (e[o] === `
`) {
      if (o - a > r) return true;
      if (a = o + 1, s - a <= r) return false;
    }
    return true;
  }
  function vt(e, t) {
    const n = JSON.stringify(e);
    if (t.options.doubleQuotedAsJSON) return n;
    const { implicitKey: r } = t, s = t.options.doubleQuotedMinMultiLineLength, o = t.indent || (cn(e) ? "  " : "");
    let a = "", i = 0;
    for (let l = 0, u = n[l]; u; u = n[++l]) if (u === " " && n[l + 1] === "\\" && n[l + 2] === "n" && (a += n.slice(i, l) + "\\ ", l += 1, i = l, u = "\\"), u === "\\") switch (n[l + 1]) {
      case "u":
        {
          a += n.slice(i, l);
          const c = n.substr(l + 2, 4);
          switch (c) {
            case "0000":
              a += "\\0";
              break;
            case "0007":
              a += "\\a";
              break;
            case "000b":
              a += "\\v";
              break;
            case "001b":
              a += "\\e";
              break;
            case "0085":
              a += "\\N";
              break;
            case "00a0":
              a += "\\_";
              break;
            case "2028":
              a += "\\L";
              break;
            case "2029":
              a += "\\P";
              break;
            default:
              c.substr(0, 2) === "00" ? a += "\\x" + c.substr(2) : a += n.substr(l, 6);
          }
          l += 5, i = l + 1;
        }
        break;
      case "n":
        if (r || n[l + 2] === '"' || n.length < s) l += 1;
        else {
          for (a += n.slice(i, l) + `

`; n[l + 2] === "\\" && n[l + 3] === "n" && n[l + 4] !== '"'; ) a += `
`, l += 2;
          a += o, n[l + 2] === " " && (a += "\\"), l += 1, i = l + 1;
        }
        break;
      default:
        l += 1;
    }
    return a = i ? a + n.slice(i) : n, r ? a : ln(a, o, qt, un(t, false));
  }
  function Tn(e, t) {
    if (t.options.singleQuote === false || t.implicitKey && e.includes(`
`) || /[ \t]\n|\n[ \t]/.test(e)) return vt(e, t);
    const n = t.indent || (cn(e) ? "  " : ""), r = "'" + e.replace(/'/g, "''").replace(/\n+/g, `$&
${n}`) + "'";
    return t.implicitKey ? r : ln(r, n, ws, un(t, false));
  }
  function et(e, t) {
    const { singleQuote: n } = t.options;
    let r;
    if (n === false) r = vt;
    else {
      const s = e.includes('"'), o = e.includes("'");
      s && !o ? r = Tn : o && !s ? r = vt : r = n ? Tn : vt;
    }
    return r(e, t);
  }
  let Pn;
  try {
    Pn = new RegExp(`(^|(?<!
))
+(?!
|$)`, "g");
  } catch {
    Pn = /\n+(?!\n|$)/g;
  }
  function Ut({ comment: e, type: t, value: n }, r, s, o) {
    const { blockQuote: a, commentString: i, lineWidth: l } = r.options;
    if (!a || /\n[\t ]+$/.test(n)) return et(n, r);
    const u = r.indent || (r.forceBlockIndent || cn(n) ? "  " : ""), c = a === "literal" ? true : a === "folded" || t === W.BLOCK_FOLDED ? false : t === W.BLOCK_LITERAL ? true : !Ha(n, l, u.length);
    if (!n) return c ? `|
` : `>
`;
    let d, h;
    for (h = n.length; h > 0; --h) {
      const I = n[h - 1];
      if (I !== `
` && I !== "	" && I !== " ") break;
    }
    let p = n.substring(h);
    const b = p.indexOf(`
`);
    b === -1 ? d = "-" : n === p || b !== p.length - 1 ? (d = "+", o && o()) : d = "", p && (n = n.slice(0, -p.length), p[p.length - 1] === `
` && (p = p.slice(0, -1)), p = p.replace(Pn, `$&${u}`));
    let m = false, y, w = -1;
    for (y = 0; y < n.length; ++y) {
      const I = n[y];
      if (I === " ") m = true;
      else if (I === `
`) w = y;
      else break;
    }
    let k = n.substring(0, w < y ? w + 1 : y);
    k && (n = n.substring(k.length), k = k.replace(/\n+/g, `$&${u}`));
    let S = (m ? u ? "2" : "1" : "") + d;
    if (e && (S += " " + i(e.replace(/ ?[\r\n]+/g, " ")), s && s()), !c) {
      const I = n.replace(/\n+/g, `
$&`).replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, "$1$2").replace(/\n+/g, `$&${u}`);
      let A = false;
      const N = un(r, true);
      a !== "folded" && t !== W.BLOCK_FOLDED && (N.onOverflow = () => {
        A = true;
      });
      const O = ln(`${k}${I}${p}`, u, xn, N);
      if (!A) return `>${S}
${u}${O}`;
    }
    return n = n.replace(/\n+/g, `$&${u}`), `|${S}
${u}${k}${n}${p}`;
  }
  function Qa(e, t, n, r) {
    const { type: s, value: o } = e, { actualString: a, implicitKey: i, indent: l, indentStep: u, inFlow: c } = t;
    if (i && o.includes(`
`) || c && /[[\]{},]/.test(o)) return et(o, t);
    if (/^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(o)) return i || c || !o.includes(`
`) ? et(o, t) : Ut(e, t, n, r);
    if (!i && !c && s !== W.PLAIN && o.includes(`
`)) return Ut(e, t, n, r);
    if (cn(o)) {
      if (l === "") return t.forceBlockIndent = true, Ut(e, t, n, r);
      if (i && l === u) return et(o, t);
    }
    const d = o.replace(/\n+/g, `$&
${l}`);
    if (a) {
      const h = (m) => {
        var _a2;
        return m.default && m.tag !== "tag:yaml.org,2002:str" && ((_a2 = m.test) == null ? void 0 : _a2.test(d));
      }, { compat: p, tags: b } = t.doc.schema;
      if (b.some(h) || (p == null ? void 0 : p.some(h))) return et(o, t);
    }
    return i ? d : ln(d, l, ws, un(t, false));
  }
  Xa = function(e, t, n, r) {
    const { implicitKey: s, inFlow: o } = t, a = typeof e.value == "string" ? e : Object.assign({}, e, {
      value: String(e.value)
    });
    let { type: i } = e;
    i !== W.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f\u{D800}-\u{DFFF}]/u.test(a.value) && (i = W.QUOTE_DOUBLE);
    const l = (c) => {
      switch (c) {
        case W.BLOCK_FOLDED:
        case W.BLOCK_LITERAL:
          return s || o ? et(a.value, t) : Ut(a, t, n, r);
        case W.QUOTE_DOUBLE:
          return vt(a.value, t);
        case W.QUOTE_SINGLE:
          return Tn(a.value, t);
        case W.PLAIN:
          return Qa(a, t, n, r);
        default:
          return null;
      }
    };
    let u = l(i);
    if (u === null) {
      const { defaultKeyType: c, defaultStringType: d } = t.options, h = s && c || d;
      if (u = l(h), u === null) throw new Error(`Unsupported default string type ${h}`);
    }
    return u;
  };
  ei = function(e, t) {
    const n = Object.assign({
      blockQuote: true,
      commentString: Ga,
      defaultKeyType: null,
      defaultStringType: "PLAIN",
      directives: null,
      doubleQuotedAsJSON: false,
      doubleQuotedMinMultiLineLength: 40,
      falseStr: "false",
      flowCollectionPadding: true,
      indentSeq: true,
      lineWidth: 80,
      minContentWidth: 20,
      nullStr: "null",
      simpleKeys: false,
      singleQuote: null,
      trueStr: "true",
      verifyAliasOrder: true
    }, e.schema.toStringOptions, t);
    let r;
    switch (n.collectionStyle) {
      case "block":
        r = false;
        break;
      case "flow":
        r = true;
        break;
      default:
        r = null;
    }
    return {
      anchors: /* @__PURE__ */ new Set(),
      doc: e,
      flowCollectionPadding: n.flowCollectionPadding ? " " : "",
      indent: "",
      indentStep: typeof n.indent == "number" ? " ".repeat(n.indent) : "  ",
      inFlow: r,
      options: n
    };
  };
  function ti(e, t) {
    var _a2;
    if (t.tag) {
      const s = e.filter((o) => o.tag === t.tag);
      if (s.length > 0) return s.find((o) => o.format === t.format) ?? s[0];
    }
    let n, r;
    if (H(t)) {
      r = t.value;
      let s = e.filter((o) => {
        var _a3;
        return (_a3 = o.identify) == null ? void 0 : _a3.call(o, r);
      });
      if (s.length > 1) {
        const o = s.filter((a) => a.test);
        o.length > 0 && (s = o);
      }
      n = s.find((o) => o.format === t.format) ?? s.find((o) => !o.format);
    } else r = t, n = e.find((s) => s.nodeClass && r instanceof s.nodeClass);
    if (!n) {
      const s = ((_a2 = r == null ? void 0 : r.constructor) == null ? void 0 : _a2.name) ?? (r === null ? "null" : typeof r);
      throw new Error(`Tag not resolved for ${s} value`);
    }
    return n;
  }
  function ni(e, t, { anchors: n, doc: r }) {
    if (!r.directives) return "";
    const s = [], o = (H(e) || pe(e)) && e.anchor;
    o && vs(o) && (n.add(o), s.push(`&${o}`));
    const a = e.tag ?? (t.default ? null : t.tag);
    return a && s.push(r.directives.tagString(a)), s.join(" ");
  }
  Jt = function(e, t, n, r) {
    var _a2;
    if (ne(e)) return e.toString(t, n, r);
    if (Je(e)) {
      if (t.doc.directives) return e.toString(t);
      if ((_a2 = t.resolvedAliases) == null ? void 0 : _a2.has(e)) throw new TypeError("Cannot stringify circular structure without alias nodes");
      t.resolvedAliases ? t.resolvedAliases.add(e) : t.resolvedAliases = /* @__PURE__ */ new Set([
        e
      ]), e = e.resolve(t.doc);
    }
    let s;
    const o = se(e) ? e : t.doc.createNode(e, {
      onTagObj: (l) => s = l
    });
    s ?? (s = ti(t.doc.schema.tags, o));
    const a = ni(o, s, t);
    a.length > 0 && (t.indentAtStart = (t.indentAtStart ?? 0) + a.length + 1);
    const i = typeof s.stringify == "function" ? s.stringify(o, t, n, r) : H(o) ? Xa(o, t, n, r) : o.toString(t, n, r);
    return a ? H(o) || i[0] === "{" || i[0] === "[" ? `${a} ${i}` : `${a}
${t.indent}${i}` : i;
  };
  function ri({ key: e, value: t }, n, r, s) {
    const { allNullValues: o, doc: a, indent: i, indentStep: l, options: { commentString: u, indentSeq: c, simpleKeys: d } } = n;
    let h = se(e) && e.comment || null;
    if (d) {
      if (h) throw new Error("With simple keys, key nodes cannot have comments");
      if (pe(e) || !se(e) && typeof e == "object") {
        const N = "With simple keys, collection cannot be used as a key value";
        throw new Error(N);
      }
    }
    let p = !d && (!e || h && t == null && !n.inFlow || pe(e) || (H(e) ? e.type === W.BLOCK_FOLDED || e.type === W.BLOCK_LITERAL : typeof e == "object"));
    n = Object.assign({}, n, {
      allNullValues: false,
      implicitKey: !p && (d || !o),
      indent: i + l
    });
    let b = false, m = false, y = Jt(e, n, () => b = true, () => m = true);
    if (!p && !n.inFlow && y.length > 1024) {
      if (d) throw new Error("With simple keys, single line scalar must not span more than 1024 characters");
      p = true;
    }
    if (n.inFlow) {
      if (o || t == null) return b && r && r(), y === "" ? "?" : p ? `? ${y}` : y;
    } else if (o && !d || t == null && p) return y = `? ${y}`, h && !b ? y += Xe(y, n.indent, u(h)) : m && s && s(), y;
    b && (h = null), p ? (h && (y += Xe(y, n.indent, u(h))), y = `? ${y}
${i}:`) : (y = `${y}:`, h && (y += Xe(y, n.indent, u(h))));
    let w, k, f;
    se(t) ? (w = !!t.spaceBefore, k = t.commentBefore, f = t.comment) : (w = false, k = null, f = null, t && typeof t == "object" && (t = a.createNode(t))), n.implicitKey = false, !p && !h && H(t) && (n.indentAtStart = y.length + 1), m = false, !c && l.length >= 2 && !n.inFlow && !p && an(t) && !t.flow && !t.tag && !t.anchor && (n.indent = n.indent.substring(2));
    let S = false;
    const I = Jt(t, n, () => S = true, () => m = true);
    let A = " ";
    if (h || w || k) {
      if (A = w ? `
` : "", k) {
        const N = u(k);
        A += `
${_t(N, n.indent)}`;
      }
      I === "" && !n.inFlow ? A === `
` && f && (A = `

`) : A += `
${n.indent}`;
    } else if (!p && pe(t)) {
      const N = I[0], O = I.indexOf(`
`), P = O !== -1, x = n.inFlow ?? t.flow ?? t.items.length === 0;
      if (P || !x) {
        let j = false;
        if (P && (N === "&" || N === "!")) {
          let Q = I.indexOf(" ");
          N === "&" && Q !== -1 && Q < O && I[Q + 1] === "!" && (Q = I.indexOf(" ", Q + 1)), (Q === -1 || O < Q) && (j = true);
        }
        j || (A = `
${n.indent}`);
      }
    } else (I === "" || I[0] === `
`) && (A = "");
    return y += A + I, n.inFlow ? S && r && r() : f && !S ? y += Xe(y, n.indent, u(f)) : m && s && s(), y;
  }
  function si(e, t) {
    (e === "debug" || e === "warn") && console.warn(t);
  }
  let Ct, oi;
  Ct = "<<";
  wn = {
    identify: (e) => e === Ct || typeof e == "symbol" && e.description === Ct,
    default: "key",
    tag: "tag:yaml.org,2002:merge",
    test: /^<<$/,
    resolve: () => Object.assign(new W(Symbol(Ct)), {
      addToJSMap: Ss
    }),
    stringify: () => Ct
  };
  oi = (e, t) => (wn.identify(t) || H(t) && (!t.type || t.type === W.PLAIN) && wn.identify(t.value)) && (e == null ? void 0 : e.doc.schema.tags.some((n) => n.tag === wn.tag && n.default));
  function Ss(e, t, n) {
    if (n = e && Je(n) ? n.resolve(e.doc) : n, an(n)) for (const r of n.items) Sn(e, t, r);
    else if (Array.isArray(n)) for (const r of n) Sn(e, t, r);
    else Sn(e, t, n);
  }
  function Sn(e, t, n) {
    const r = e && Je(n) ? n.resolve(e.doc) : n;
    if (!on(r)) throw new Error("Merge sources must be maps or map aliases");
    const s = r.toJSON(null, e, Map);
    for (const [o, a] of s) t instanceof Map ? t.has(o) || t.set(o, a) : t instanceof Set ? t.add(o) : Object.prototype.hasOwnProperty.call(t, o) || Object.defineProperty(t, o, {
      value: a,
      writable: true,
      enumerable: true,
      configurable: true
    });
    return t;
  }
  function ks(e, t, { key: n, value: r }) {
    if (se(n) && n.addToJSMap) n.addToJSMap(e, t, r);
    else if (oi(e, n)) Ss(e, t, r);
    else {
      const s = Ie(n, "", e);
      if (t instanceof Map) t.set(s, Ie(r, s, e));
      else if (t instanceof Set) t.add(s);
      else {
        const o = ai(n, s, e), a = Ie(r, o, e);
        o in t ? Object.defineProperty(t, o, {
          value: a,
          writable: true,
          enumerable: true,
          configurable: true
        }) : t[o] = a;
      }
    }
    return t;
  }
  function ai(e, t, n) {
    if (t === null) return "";
    if (typeof t != "object") return String(t);
    if (se(e) && (n == null ? void 0 : n.doc)) {
      const r = ei(n.doc, {});
      r.anchors = /* @__PURE__ */ new Set();
      for (const o of n.anchors.keys()) r.anchors.add(o.anchor);
      r.inFlow = true, r.inStringifyKey = true;
      const s = e.toString(r);
      if (!n.mapKeyWarned) {
        let o = JSON.stringify(s);
        o.length > 40 && (o = o.substring(0, 36) + '..."'), si(n.doc.options.logLevel, `Keys with collection values will be stringified due to JS Object restrictions: ${o}. Set mapAsMap: true to use object keys.`), n.mapKeyWarned = true;
      }
      return s;
    }
    return JSON.stringify(t);
  }
  function Kn(e, t, n) {
    const r = Vt(e, void 0, n), s = Vt(t, void 0, n);
    return new Ee(r, s);
  }
  Ee = class {
    constructor(t, n = null) {
      Object.defineProperty(this, Te, {
        value: gs
      }), this.key = t, this.value = n;
    }
    clone(t) {
      let { key: n, value: r } = this;
      return se(n) && (n = n.clone(t)), se(r) && (r = r.clone(t)), new Ee(n, r);
    }
    toJSON(t, n) {
      const r = (n == null ? void 0 : n.mapAsMap) ? /* @__PURE__ */ new Map() : {};
      return ks(n, r, this);
    }
    toString(t, n, r) {
      return (t == null ? void 0 : t.doc) ? ri(this, t, n, r) : JSON.stringify(this);
    }
  };
  function Is(e, t, n) {
    return (t.inFlow ?? e.flow ? li : ii)(e, t, n);
  }
  function ii({ comment: e, items: t }, n, { blockItemPrefix: r, flowChars: s, itemIndent: o, onChompKeep: a, onComment: i }) {
    const { indent: l, options: { commentString: u } } = n, c = Object.assign({}, n, {
      indent: o,
      type: null
    });
    let d = false;
    const h = [];
    for (let b = 0; b < t.length; ++b) {
      const m = t[b];
      let y = null;
      if (se(m)) !d && m.spaceBefore && h.push(""), Wt(n, h, m.commentBefore, d), m.comment && (y = m.comment);
      else if (ne(m)) {
        const k = se(m.key) ? m.key : null;
        k && (!d && k.spaceBefore && h.push(""), Wt(n, h, k.commentBefore, d));
      }
      d = false;
      let w = Jt(m, c, () => y = null, () => d = true);
      y && (w += Xe(w, o, u(y))), d && y && (d = false), h.push(r + w);
    }
    let p;
    if (h.length === 0) p = s.start + s.end;
    else {
      p = h[0];
      for (let b = 1; b < h.length; ++b) {
        const m = h[b];
        p += m ? `
${l}${m}` : `
`;
      }
    }
    return e ? (p += `
` + _t(u(e), l), i && i()) : d && a && a(), p;
  }
  function li({ items: e }, t, { flowChars: n, itemIndent: r }) {
    const { indent: s, indentStep: o, flowCollectionPadding: a, options: { commentString: i } } = t;
    r += o;
    const l = Object.assign({}, t, {
      indent: r,
      inFlow: true,
      type: null
    });
    let u = false, c = 0;
    const d = [];
    for (let b = 0; b < e.length; ++b) {
      const m = e[b];
      let y = null;
      if (se(m)) m.spaceBefore && d.push(""), Wt(t, d, m.commentBefore, false), m.comment && (y = m.comment);
      else if (ne(m)) {
        const k = se(m.key) ? m.key : null;
        k && (k.spaceBefore && d.push(""), Wt(t, d, k.commentBefore, false), k.comment && (u = true));
        const f = se(m.value) ? m.value : null;
        f ? (f.comment && (y = f.comment), f.commentBefore && (u = true)) : m.value == null && (k == null ? void 0 : k.comment) && (y = k.comment);
      }
      y && (u = true);
      let w = Jt(m, l, () => y = null);
      b < e.length - 1 && (w += ","), y && (w += Xe(w, r, i(y))), !u && (d.length > c || w.includes(`
`)) && (u = true), d.push(w), c = d.length;
    }
    const { start: h, end: p } = n;
    if (d.length === 0) return h + p;
    if (!u) {
      const b = d.reduce((m, y) => m + y.length + 2, 2);
      u = t.options.lineWidth > 0 && b > t.options.lineWidth;
    }
    if (u) {
      let b = h;
      for (const m of d) b += m ? `
${o}${s}${m}` : `
`;
      return `${b}
${s}${p}`;
    } else return `${h}${a}${d.join(" ")}${a}${p}`;
  }
  function Wt({ indent: e, options: { commentString: t } }, n, r, s) {
    if (r && s && (r = r.replace(/^\n+/, "")), r) {
      const o = _t(t(r), e);
      n.push(o.trimStart());
    }
  }
  function Ue(e, t) {
    const n = H(t) ? t.value : t;
    for (const r of e) if (ne(r) && (r.key === t || r.key === n || H(r.key) && r.key.value === n)) return r;
  }
  He = class extends _s {
    static get tagName() {
      return "tag:yaml.org,2002:map";
    }
    constructor(t) {
      super(Fe, t), this.items = [];
    }
    static from(t, n, r) {
      const { keepUndefined: s, replacer: o } = r, a = new this(t), i = (l, u) => {
        if (typeof o == "function") u = o.call(n, l, u);
        else if (Array.isArray(o) && !o.includes(l)) return;
        (u !== void 0 || s) && a.items.push(Kn(l, u, r));
      };
      if (n instanceof Map) for (const [l, u] of n) i(l, u);
      else if (n && typeof n == "object") for (const l of Object.keys(n)) i(l, n[l]);
      return typeof t.sortMapEntries == "function" && a.items.sort(t.sortMapEntries), a;
    }
    add(t, n) {
      var _a2;
      let r;
      ne(t) ? r = t : !t || typeof t != "object" || !("key" in t) ? r = new Ee(t, t == null ? void 0 : t.value) : r = new Ee(t.key, t.value);
      const s = Ue(this.items, r.key), o = (_a2 = this.schema) == null ? void 0 : _a2.sortMapEntries;
      if (s) {
        if (!n) throw new Error(`Key ${r.key} already set`);
        H(s.value) && bs(r.value) ? s.value.value = r.value : s.value = r.value;
      } else if (o) {
        const a = this.items.findIndex((i) => o(r, i) < 0);
        a === -1 ? this.items.push(r) : this.items.splice(a, 0, r);
      } else this.items.push(r);
    }
    delete(t) {
      const n = Ue(this.items, t);
      return n ? this.items.splice(this.items.indexOf(n), 1).length > 0 : false;
    }
    get(t, n) {
      var _a2;
      const s = (_a2 = Ue(this.items, t)) == null ? void 0 : _a2.value;
      return (!n && H(s) ? s.value : s) ?? void 0;
    }
    has(t) {
      return !!Ue(this.items, t);
    }
    set(t, n) {
      this.add(new Ee(t, n), true);
    }
    toJSON(t, n, r) {
      const s = r ? new r() : (n == null ? void 0 : n.mapAsMap) ? /* @__PURE__ */ new Map() : {};
      (n == null ? void 0 : n.onCreate) && n.onCreate(s);
      for (const o of this.items) ks(n, s, o);
      return s;
    }
    toString(t, n, r) {
      if (!t) return JSON.stringify(this);
      for (const s of this.items) if (!ne(s)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(s)} instead`);
      return !t.allNullValues && this.hasAllNullValues(false) && (t = Object.assign({}, t, {
        allNullValues: true
      })), Is(this, t, {
        blockItemPrefix: "",
        flowChars: {
          start: "{",
          end: "}"
        },
        itemIndent: t.indent || "",
        onChompKeep: r,
        onComment: n
      });
    }
  };
  Es = class extends _s {
    static get tagName() {
      return "tag:yaml.org,2002:seq";
    }
    constructor(t) {
      super(xt, t), this.items = [];
    }
    add(t) {
      this.items.push(t);
    }
    delete(t) {
      const n = Zt(t);
      return typeof n != "number" ? false : this.items.splice(n, 1).length > 0;
    }
    get(t, n) {
      const r = Zt(t);
      if (typeof r != "number") return;
      const s = this.items[r];
      return !n && H(s) ? s.value : s;
    }
    has(t) {
      const n = Zt(t);
      return typeof n == "number" && n < this.items.length;
    }
    set(t, n) {
      const r = Zt(t);
      if (typeof r != "number") throw new Error(`Expected a valid index, not ${t}.`);
      const s = this.items[r];
      H(s) && bs(n) ? s.value = n : this.items[r] = n;
    }
    toJSON(t, n) {
      const r = [];
      (n == null ? void 0 : n.onCreate) && n.onCreate(r);
      let s = 0;
      for (const o of this.items) r.push(Ie(o, String(s++), n));
      return r;
    }
    toString(t, n, r) {
      return t ? Is(this, t, {
        blockItemPrefix: "- ",
        flowChars: {
          start: "[",
          end: "]"
        },
        itemIndent: (t.indent || "") + "  ",
        onChompKeep: r,
        onComment: n
      }) : JSON.stringify(this);
    }
    static from(t, n, r) {
      const { replacer: s } = r, o = new this(t);
      if (n && Symbol.iterator in Object(n)) {
        let a = 0;
        for (let i of n) {
          if (typeof s == "function") {
            const l = n instanceof Set ? i : String(a++);
            i = s.call(n, l, i);
          }
          o.items.push(Vt(i, void 0, r));
        }
      }
      return o;
    }
  };
  function Zt(e) {
    let t = H(e) ? e.value : e;
    return t && typeof t == "string" && (t = Number(t)), typeof t == "number" && Number.isInteger(t) && t >= 0 ? t : null;
  }
  function Os(e, t) {
    if (an(e)) for (let n = 0; n < e.items.length; ++n) {
      let r = e.items[n];
      if (!ne(r)) {
        if (on(r)) {
          r.items.length > 1 && t("Each pair must have its own sequence indicator");
          const s = r.items[0] || new Ee(new W(null));
          if (r.commentBefore && (s.key.commentBefore = s.key.commentBefore ? `${r.commentBefore}
${s.key.commentBefore}` : r.commentBefore), r.comment) {
            const o = s.value ?? s.key;
            o.comment = o.comment ? `${r.comment}
${o.comment}` : r.comment;
          }
          r = s;
        }
        e.items[n] = ne(r) ? r : new Ee(r);
      }
    }
    else t("Expected a sequence for this tag");
    return e;
  }
  function $s(e, t, n) {
    const { replacer: r } = n, s = new Es(e);
    s.tag = "tag:yaml.org,2002:pairs";
    let o = 0;
    if (t && Symbol.iterator in Object(t)) for (let a of t) {
      typeof r == "function" && (a = r.call(t, String(o++), a));
      let i, l;
      if (Array.isArray(a)) if (a.length === 2) i = a[0], l = a[1];
      else throw new TypeError(`Expected [key, value] tuple: ${a}`);
      else if (a && a instanceof Object) {
        const u = Object.keys(a);
        if (u.length === 1) i = u[0], l = a[i];
        else throw new TypeError(`Expected tuple with one key, not ${u.length} keys`);
      } else i = a;
      s.items.push(Kn(i, l, n));
    }
    return s;
  }
  Sh = {
    collection: "seq",
    default: false,
    tag: "tag:yaml.org,2002:pairs",
    resolve: Os,
    createNode: $s
  };
  class rt extends Es {
    constructor() {
      super(), this.add = He.prototype.add.bind(this), this.delete = He.prototype.delete.bind(this), this.get = He.prototype.get.bind(this), this.has = He.prototype.has.bind(this), this.set = He.prototype.set.bind(this), this.tag = rt.tag;
    }
    toJSON(t, n) {
      if (!n) return super.toJSON(t);
      const r = /* @__PURE__ */ new Map();
      (n == null ? void 0 : n.onCreate) && n.onCreate(r);
      for (const s of this.items) {
        let o, a;
        if (ne(s) ? (o = Ie(s.key, "", n), a = Ie(s.value, o, n)) : o = Ie(s, "", n), r.has(o)) throw new Error("Ordered maps must not include duplicate keys");
        r.set(o, a);
      }
      return r;
    }
    static from(t, n, r) {
      const s = $s(t, n, r), o = new this();
      return o.items = s.items, o;
    }
  }
  rt.tag = "tag:yaml.org,2002:omap";
  kh = {
    collection: "seq",
    identify: (e) => e instanceof Map,
    nodeClass: rt,
    default: false,
    tag: "tag:yaml.org,2002:omap",
    resolve(e, t) {
      const n = Os(e, t), r = [];
      for (const { key: s } of n.items) H(s) && (r.includes(s.value) ? t(`Ordered maps must not include duplicate keys: ${s.value}`) : r.push(s.value));
      return Object.assign(new rt(), n);
    },
    createNode: (e, t, n) => rt.from(e, t, n)
  };
  class st extends He {
    constructor(t) {
      super(t), this.tag = st.tag;
    }
    add(t) {
      let n;
      ne(t) ? n = t : t && typeof t == "object" && "key" in t && "value" in t && t.value === null ? n = new Ee(t.key, null) : n = new Ee(t, null), Ue(this.items, n.key) || this.items.push(n);
    }
    get(t, n) {
      const r = Ue(this.items, t);
      return !n && ne(r) ? H(r.key) ? r.key.value : r.key : r;
    }
    set(t, n) {
      if (typeof n != "boolean") throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof n}`);
      const r = Ue(this.items, t);
      r && !n ? this.items.splice(this.items.indexOf(r), 1) : !r && n && this.items.push(new Ee(t));
    }
    toJSON(t, n) {
      return super.toJSON(t, n, Set);
    }
    toString(t, n, r) {
      if (!t) return JSON.stringify(this);
      if (this.hasAllNullValues(true)) return super.toString(Object.assign({}, t, {
        allNullValues: true
      }), n, r);
      throw new Error("Set items must all have null values");
    }
    static from(t, n, r) {
      const { replacer: s } = r, o = new this(t);
      if (n && Symbol.iterator in Object(n)) for (let a of n) typeof s == "function" && (a = s.call(n, a, a)), o.items.push(Kn(a, null, r));
      return o;
    }
  }
  st.tag = "tag:yaml.org,2002:set";
  let zs, Ns, As, Cn;
  Ih = {
    collection: "map",
    identify: (e) => e instanceof Set,
    nodeClass: st,
    default: false,
    tag: "tag:yaml.org,2002:set",
    createNode: (e, t, n) => st.from(e, t, n),
    resolve(e, t) {
      if (on(e)) {
        if (e.hasAllNullValues(true)) return Object.assign(new st(), e);
        t("Set items must all have null values");
      } else t("Expected a mapping for this tag");
      return e;
    }
  };
  zs = "\uFEFF";
  Ns = "";
  As = "";
  Cn = "";
  Eh = function(e) {
    switch (e) {
      case zs:
        return "byte-order-mark";
      case Ns:
        return "doc-mode";
      case As:
        return "flow-error-end";
      case Cn:
        return "scalar";
      case "---":
        return "doc-start";
      case "...":
        return "doc-end";
      case "":
      case `
`:
      case `\r
`:
        return "newline";
      case "-":
        return "seq-item-ind";
      case "?":
        return "explicit-key-ind";
      case ":":
        return "map-value-ind";
      case "{":
        return "flow-map-start";
      case "}":
        return "flow-map-end";
      case "[":
        return "flow-seq-start";
      case "]":
        return "flow-seq-end";
      case ",":
        return "comma";
    }
    switch (e[0]) {
      case " ":
      case "	":
        return "space";
      case "#":
        return "comment";
      case "%":
        return "directive-line";
      case "*":
        return "alias";
      case "&":
        return "anchor";
      case "!":
        return "tag";
      case "'":
        return "single-quoted-scalar";
      case '"':
        return "double-quoted-scalar";
      case "|":
      case ">":
        return "block-scalar-header";
    }
    return null;
  };
  function be(e) {
    switch (e) {
      case void 0:
      case " ":
      case `
`:
      case "\r":
      case "	":
        return true;
      default:
        return false;
    }
  }
  const hr = new Set("0123456789ABCDEFabcdef"), ui = new Set("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-#;/?:@&=+$_.!~*'()"), jt = new Set(",[]{}"), ci = new Set(` ,[]{}
\r	`), kn = (e) => !e || ci.has(e);
  Oh = class {
    constructor() {
      this.atEnd = false, this.blockScalarIndent = -1, this.blockScalarKeep = false, this.buffer = "", this.flowKey = false, this.flowLevel = 0, this.indentNext = 0, this.indentValue = 0, this.lineEndPos = null, this.next = null, this.pos = 0;
    }
    *lex(t, n = false) {
      if (t) {
        if (typeof t != "string") throw TypeError("source is not a string");
        this.buffer = this.buffer ? this.buffer + t : t, this.lineEndPos = null;
      }
      this.atEnd = !n;
      let r = this.next ?? "stream";
      for (; r && (n || this.hasChars(1)); ) r = yield* this.parseNext(r);
    }
    atLineEnd() {
      let t = this.pos, n = this.buffer[t];
      for (; n === " " || n === "	"; ) n = this.buffer[++t];
      return !n || n === "#" || n === `
` ? true : n === "\r" ? this.buffer[t + 1] === `
` : false;
    }
    charAt(t) {
      return this.buffer[this.pos + t];
    }
    continueScalar(t) {
      let n = this.buffer[t];
      if (this.indentNext > 0) {
        let r = 0;
        for (; n === " "; ) n = this.buffer[++r + t];
        if (n === "\r") {
          const s = this.buffer[r + t + 1];
          if (s === `
` || !s && !this.atEnd) return t + r + 1;
        }
        return n === `
` || r >= this.indentNext || !n && !this.atEnd ? t + r : -1;
      }
      if (n === "-" || n === ".") {
        const r = this.buffer.substr(t, 3);
        if ((r === "---" || r === "...") && be(this.buffer[t + 3])) return -1;
      }
      return t;
    }
    getLine() {
      let t = this.lineEndPos;
      return (typeof t != "number" || t !== -1 && t < this.pos) && (t = this.buffer.indexOf(`
`, this.pos), this.lineEndPos = t), t === -1 ? this.atEnd ? this.buffer.substring(this.pos) : null : (this.buffer[t - 1] === "\r" && (t -= 1), this.buffer.substring(this.pos, t));
    }
    hasChars(t) {
      return this.pos + t <= this.buffer.length;
    }
    setNext(t) {
      return this.buffer = this.buffer.substring(this.pos), this.pos = 0, this.lineEndPos = null, this.next = t, null;
    }
    peek(t) {
      return this.buffer.substr(this.pos, t);
    }
    *parseNext(t) {
      switch (t) {
        case "stream":
          return yield* this.parseStream();
        case "line-start":
          return yield* this.parseLineStart();
        case "block-start":
          return yield* this.parseBlockStart();
        case "doc":
          return yield* this.parseDocument();
        case "flow":
          return yield* this.parseFlowCollection();
        case "quoted-scalar":
          return yield* this.parseQuotedScalar();
        case "block-scalar":
          return yield* this.parseBlockScalar();
        case "plain-scalar":
          return yield* this.parsePlainScalar();
      }
    }
    *parseStream() {
      let t = this.getLine();
      if (t === null) return this.setNext("stream");
      if (t[0] === zs && (yield* this.pushCount(1), t = t.substring(1)), t[0] === "%") {
        let n = t.length, r = t.indexOf("#");
        for (; r !== -1; ) {
          const o = t[r - 1];
          if (o === " " || o === "	") {
            n = r - 1;
            break;
          } else r = t.indexOf("#", r + 1);
        }
        for (; ; ) {
          const o = t[n - 1];
          if (o === " " || o === "	") n -= 1;
          else break;
        }
        const s = (yield* this.pushCount(n)) + (yield* this.pushSpaces(true));
        return yield* this.pushCount(t.length - s), this.pushNewline(), "stream";
      }
      if (this.atLineEnd()) {
        const n = yield* this.pushSpaces(true);
        return yield* this.pushCount(t.length - n), yield* this.pushNewline(), "stream";
      }
      return yield Ns, yield* this.parseLineStart();
    }
    *parseLineStart() {
      const t = this.charAt(0);
      if (!t && !this.atEnd) return this.setNext("line-start");
      if (t === "-" || t === ".") {
        if (!this.atEnd && !this.hasChars(4)) return this.setNext("line-start");
        const n = this.peek(3);
        if ((n === "---" || n === "...") && be(this.charAt(3))) return yield* this.pushCount(3), this.indentValue = 0, this.indentNext = 0, n === "---" ? "doc" : "stream";
      }
      return this.indentValue = yield* this.pushSpaces(false), this.indentNext > this.indentValue && !be(this.charAt(1)) && (this.indentNext = this.indentValue), yield* this.parseBlockStart();
    }
    *parseBlockStart() {
      const [t, n] = this.peek(2);
      if (!n && !this.atEnd) return this.setNext("block-start");
      if ((t === "-" || t === "?" || t === ":") && be(n)) {
        const r = (yield* this.pushCount(1)) + (yield* this.pushSpaces(true));
        return this.indentNext = this.indentValue + 1, this.indentValue += r, yield* this.parseBlockStart();
      }
      return "doc";
    }
    *parseDocument() {
      yield* this.pushSpaces(true);
      const t = this.getLine();
      if (t === null) return this.setNext("doc");
      let n = yield* this.pushIndicators();
      switch (t[n]) {
        case "#":
          yield* this.pushCount(t.length - n);
        case void 0:
          return yield* this.pushNewline(), yield* this.parseLineStart();
        case "{":
        case "[":
          return yield* this.pushCount(1), this.flowKey = false, this.flowLevel = 1, "flow";
        case "}":
        case "]":
          return yield* this.pushCount(1), "doc";
        case "*":
          return yield* this.pushUntil(kn), "doc";
        case '"':
        case "'":
          return yield* this.parseQuotedScalar();
        case "|":
        case ">":
          return n += yield* this.parseBlockScalarHeader(), n += yield* this.pushSpaces(true), yield* this.pushCount(t.length - n), yield* this.pushNewline(), yield* this.parseBlockScalar();
        default:
          return yield* this.parsePlainScalar();
      }
    }
    *parseFlowCollection() {
      let t, n, r = -1;
      do
        t = yield* this.pushNewline(), t > 0 ? (n = yield* this.pushSpaces(false), this.indentValue = r = n) : n = 0, n += yield* this.pushSpaces(true);
      while (t + n > 0);
      const s = this.getLine();
      if (s === null) return this.setNext("flow");
      if ((r !== -1 && r < this.indentNext && s[0] !== "#" || r === 0 && (s.startsWith("---") || s.startsWith("...")) && be(s[3])) && !(r === this.indentNext - 1 && this.flowLevel === 1 && (s[0] === "]" || s[0] === "}"))) return this.flowLevel = 0, yield As, yield* this.parseLineStart();
      let o = 0;
      for (; s[o] === ","; ) o += yield* this.pushCount(1), o += yield* this.pushSpaces(true), this.flowKey = false;
      switch (o += yield* this.pushIndicators(), s[o]) {
        case void 0:
          return "flow";
        case "#":
          return yield* this.pushCount(s.length - o), "flow";
        case "{":
        case "[":
          return yield* this.pushCount(1), this.flowKey = false, this.flowLevel += 1, "flow";
        case "}":
        case "]":
          return yield* this.pushCount(1), this.flowKey = true, this.flowLevel -= 1, this.flowLevel ? "flow" : "doc";
        case "*":
          return yield* this.pushUntil(kn), "flow";
        case '"':
        case "'":
          return this.flowKey = true, yield* this.parseQuotedScalar();
        case ":": {
          const a = this.charAt(1);
          if (this.flowKey || be(a) || a === ",") return this.flowKey = false, yield* this.pushCount(1), yield* this.pushSpaces(true), "flow";
        }
        default:
          return this.flowKey = false, yield* this.parsePlainScalar();
      }
    }
    *parseQuotedScalar() {
      const t = this.charAt(0);
      let n = this.buffer.indexOf(t, this.pos + 1);
      if (t === "'") for (; n !== -1 && this.buffer[n + 1] === "'"; ) n = this.buffer.indexOf("'", n + 2);
      else for (; n !== -1; ) {
        let o = 0;
        for (; this.buffer[n - 1 - o] === "\\"; ) o += 1;
        if (o % 2 === 0) break;
        n = this.buffer.indexOf('"', n + 1);
      }
      const r = this.buffer.substring(0, n);
      let s = r.indexOf(`
`, this.pos);
      if (s !== -1) {
        for (; s !== -1; ) {
          const o = this.continueScalar(s + 1);
          if (o === -1) break;
          s = r.indexOf(`
`, o);
        }
        s !== -1 && (n = s - (r[s - 1] === "\r" ? 2 : 1));
      }
      if (n === -1) {
        if (!this.atEnd) return this.setNext("quoted-scalar");
        n = this.buffer.length;
      }
      return yield* this.pushToIndex(n + 1, false), this.flowLevel ? "flow" : "doc";
    }
    *parseBlockScalarHeader() {
      this.blockScalarIndent = -1, this.blockScalarKeep = false;
      let t = this.pos;
      for (; ; ) {
        const n = this.buffer[++t];
        if (n === "+") this.blockScalarKeep = true;
        else if (n > "0" && n <= "9") this.blockScalarIndent = Number(n) - 1;
        else if (n !== "-") break;
      }
      return yield* this.pushUntil((n) => be(n) || n === "#");
    }
    *parseBlockScalar() {
      let t = this.pos - 1, n = 0, r;
      e: for (let o = this.pos; r = this.buffer[o]; ++o) switch (r) {
        case " ":
          n += 1;
          break;
        case `
`:
          t = o, n = 0;
          break;
        case "\r": {
          const a = this.buffer[o + 1];
          if (!a && !this.atEnd) return this.setNext("block-scalar");
          if (a === `
`) break;
        }
        default:
          break e;
      }
      if (!r && !this.atEnd) return this.setNext("block-scalar");
      if (n >= this.indentNext) {
        this.blockScalarIndent === -1 ? this.indentNext = n : this.indentNext = this.blockScalarIndent + (this.indentNext === 0 ? 1 : this.indentNext);
        do {
          const o = this.continueScalar(t + 1);
          if (o === -1) break;
          t = this.buffer.indexOf(`
`, o);
        } while (t !== -1);
        if (t === -1) {
          if (!this.atEnd) return this.setNext("block-scalar");
          t = this.buffer.length;
        }
      }
      let s = t + 1;
      for (r = this.buffer[s]; r === " "; ) r = this.buffer[++s];
      if (r === "	") {
        for (; r === "	" || r === " " || r === "\r" || r === `
`; ) r = this.buffer[++s];
        t = s - 1;
      } else if (!this.blockScalarKeep) do {
        let o = t - 1, a = this.buffer[o];
        a === "\r" && (a = this.buffer[--o]);
        const i = o;
        for (; a === " "; ) a = this.buffer[--o];
        if (a === `
` && o >= this.pos && o + 1 + n > i) t = o;
        else break;
      } while (true);
      return yield Cn, yield* this.pushToIndex(t + 1, true), yield* this.parseLineStart();
    }
    *parsePlainScalar() {
      const t = this.flowLevel > 0;
      let n = this.pos - 1, r = this.pos - 1, s;
      for (; s = this.buffer[++r]; ) if (s === ":") {
        const o = this.buffer[r + 1];
        if (be(o) || t && jt.has(o)) break;
        n = r;
      } else if (be(s)) {
        let o = this.buffer[r + 1];
        if (s === "\r" && (o === `
` ? (r += 1, s = `
`, o = this.buffer[r + 1]) : n = r), o === "#" || t && jt.has(o)) break;
        if (s === `
`) {
          const a = this.continueScalar(r + 1);
          if (a === -1) break;
          r = Math.max(r, a - 2);
        }
      } else {
        if (t && jt.has(s)) break;
        n = r;
      }
      return !s && !this.atEnd ? this.setNext("plain-scalar") : (yield Cn, yield* this.pushToIndex(n + 1, true), t ? "flow" : "doc");
    }
    *pushCount(t) {
      return t > 0 ? (yield this.buffer.substr(this.pos, t), this.pos += t, t) : 0;
    }
    *pushToIndex(t, n) {
      const r = this.buffer.slice(this.pos, t);
      return r ? (yield r, this.pos += r.length, r.length) : (n && (yield ""), 0);
    }
    *pushIndicators() {
      switch (this.charAt(0)) {
        case "!":
          return (yield* this.pushTag()) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
        case "&":
          return (yield* this.pushUntil(kn)) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
        case "-":
        case "?":
        case ":": {
          const t = this.flowLevel > 0, n = this.charAt(1);
          if (be(n) || t && jt.has(n)) return t ? this.flowKey && (this.flowKey = false) : this.indentNext = this.indentValue + 1, (yield* this.pushCount(1)) + (yield* this.pushSpaces(true)) + (yield* this.pushIndicators());
        }
      }
      return 0;
    }
    *pushTag() {
      if (this.charAt(1) === "<") {
        let t = this.pos + 2, n = this.buffer[t];
        for (; !be(n) && n !== ">"; ) n = this.buffer[++t];
        return yield* this.pushToIndex(n === ">" ? t + 1 : t, false);
      } else {
        let t = this.pos + 1, n = this.buffer[t];
        for (; n; ) if (ui.has(n)) n = this.buffer[++t];
        else if (n === "%" && hr.has(this.buffer[t + 1]) && hr.has(this.buffer[t + 2])) n = this.buffer[t += 3];
        else break;
        return yield* this.pushToIndex(t, false);
      }
    }
    *pushNewline() {
      const t = this.buffer[this.pos];
      return t === `
` ? yield* this.pushCount(1) : t === "\r" && this.charAt(1) === `
` ? yield* this.pushCount(2) : 0;
    }
    *pushSpaces(t) {
      let n = this.pos - 1, r;
      do
        r = this.buffer[++n];
      while (r === " " || t && r === "	");
      const s = n - this.pos;
      return s > 0 && (yield this.buffer.substr(this.pos, s), this.pos = n), s;
    }
    *pushUntil(t) {
      let n = this.pos, r = this.buffer[n];
      for (; !t(r); ) r = this.buffer[++n];
      return yield* this.pushToIndex(n, false);
    }
  };
  function xs(e) {
    return e.type === "comment" ? "" : e.type === "text" ? e.value || "" : (e.children || []).reduce((t, n) => t.concat(xs(n)), "");
  }
  function Ts(e, t = 2, n = 0) {
    return !Array.isArray(e.children) || n === t ? [
      e
    ] : [
      e,
      ...e.children.reduce((r, s) => r.concat(Ts(s, t, n + 1)), [])
    ];
  }
  const Ps = [
    "h2",
    "h3",
    "h4",
    "h5",
    "h6"
  ], di = Ps.reduce((e, t) => (e[t] = Number(t.charAt(t.length - 1)), e), {}), fi = (e) => di[e.tag], pi = (e) => ((e < 1 || e > 5) && (console.log(`\`toc.depth\` is set to ${e}. It should be a number between 1 and 5. `), e = 1), Ps.slice(0, e));
  function Cs(e) {
    if (e.length <= 1) return e;
    const t = [];
    let n;
    return e.forEach((r) => {
      !n || r.depth <= n.depth ? (r.children = [], n = r, t.push(r)) : n.children.push(r);
    }), t.forEach((r) => {
      var _a2;
      ((_a2 = r.children) == null ? void 0 : _a2.length) ? r.children = Cs(r.children) : delete r.children;
    }), t;
  }
  function hi(e, t) {
    const { searchDepth: n, depth: r, title: s = "" } = t, o = pi(r), i = Ts(e, n).filter((l) => o.includes(l.tag || "")).map((l) => {
      var _a2;
      return {
        id: (_a2 = l.props) == null ? void 0 : _a2.id,
        depth: fi(l),
        text: xs(l)
      };
    });
    return {
      title: s,
      searchDepth: n,
      depth: r,
      links: i
    };
  }
  $h = function(e, t) {
    const n = hi(e, t);
    return n.links = Cs(n.links), n;
  };
  mi = function(e) {
    let t, n = "", r;
    return async function(o) {
      var _a2, _b, _c2, _d2;
      t || (t = await as(() => import("./BZ_nUnuB.js").then(async (m) => {
        await m.__tla;
        return m;
      }).then((u) => u.i), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url).then((u) => u.createParseProcessor({
        ...e,
        keepPosition: true
      }))), o.startsWith(n) || (n = "", r = void 0);
      let a = 0;
      if (((_a2 = r == null ? void 0 : r.body) == null ? void 0 : _a2.children.length) && r.body.children.length > 1) {
        const u = r.body.children[r.body.children.length - 2];
        ((_b = u == null ? void 0 : u.position) == null ? void 0 : _b.end) && (a = u.position.end);
      }
      const l = (_c2 = await t.process({
        value: o.slice(a)
      })) == null ? void 0 : _c2.result;
      if (l) {
        const u = {
          type: "root",
          children: [
            ...a > 0 ? ((_d2 = r == null ? void 0 : r.body) == null ? void 0 : _d2.children.slice(0, -1)) || [] : [],
            ...l.body.children.map((c) => ({
              ...c,
              position: c.position && {
                start: c.position.start + a,
                end: c.position.end + a
              }
            }))
          ]
        };
        return r = {
          ...l,
          body: u
        }, n = o, r;
      }
    };
  };
  const gi = {
    __name: "MDCCached",
    props: {
      tag: {
        type: [
          String,
          Boolean
        ],
        default: "div"
      },
      value: {
        type: [
          String,
          Object
        ],
        required: true
      },
      excerpt: {
        type: Boolean,
        default: false
      },
      parserOptions: {
        type: Object,
        default: () => ({})
      },
      class: {
        type: [
          String,
          Array,
          Object
        ],
        default: ""
      },
      unwrap: {
        type: [
          Boolean,
          String
        ],
        default: false
      },
      cacheKey: {
        type: String,
        default: void 0
      },
      partial: {
        type: Boolean,
        default: true
      },
      components: {
        type: Object,
        default: () => ({})
      }
    },
    async setup(e) {
      var _a2, _b;
      let t, n;
      const r = e, s = re(() => r.cacheKey ?? c(r.value)), o = mi({
        ...r.parserOptions,
        toc: r.partial ? false : (_a2 = r.parserOptions) == null ? void 0 : _a2.toc,
        contentHeading: r.partial ? false : (_b = r.parserOptions) == null ? void 0 : _b.contentHeading
      }), { data: a, refresh: i, error: l } = ([t, n] = ca(async () => da(s.value, async () => typeof r.value != "string" ? r.value : await o(r.value))), t = await t, n(), t), u = re(() => {
        var _a3, _b2;
        return r.excerpt ? (_a3 = a.value) == null ? void 0 : _a3.excerpt : (_b2 = a.value) == null ? void 0 : _b2.body;
      });
      Be(() => r.value, () => {
        i();
      });
      function c(d) {
        typeof d != "string" && (d = JSON.stringify(d || ""));
        let h = 0;
        for (let p = 0; p < d.length; p++) {
          const b = d.charCodeAt(p);
          h = (h << 6) - h + b, h = h & h;
        }
        return `mdc-${h === 0 ? "0000" : h.toString(36)}-key`;
      }
      return (d, h) => {
        var _a3, _b2, _c2, _d2;
        const p = Na;
        return ce(d.$slots, "default", {
          data: (_a3 = v(a)) == null ? void 0 : _a3.data,
          body: (_b2 = v(a)) == null ? void 0 : _b2.body,
          toc: (_c2 = v(a)) == null ? void 0 : _c2.toc,
          excerpt: (_d2 = v(a)) == null ? void 0 : _d2.excerpt,
          error: v(l)
        }, () => {
          var _a4;
          return [
            u.value ? ($(), Y(p, {
              key: 0,
              tag: r.tag,
              class: X(r.class),
              body: u.value,
              data: (_a4 = v(a)) == null ? void 0 : _a4.data,
              unwrap: r.unwrap,
              components: r.components
            }, null, 8, [
              "tag",
              "class",
              "body",
              "data",
              "unwrap",
              "components"
            ])) : ee("", true)
          ];
        });
      };
    }
  }, yi = {
    slots: {
      root: "group/message relative w-full",
      container: "relative flex items-start",
      leading: "inline-flex items-center justify-center min-h-6",
      leadingIcon: "shrink-0",
      leadingAvatar: "shrink-0",
      leadingAvatarSize: "",
      content: "relative text-pretty min-w-0 *:first:mt-0 *:last:mb-0",
      actions: [
        "opacity-0 group-hover/message:opacity-100 absolute bottom-0 flex items-center",
        "transition-opacity"
      ]
    },
    variants: {
      variant: {
        solid: {
          content: "bg-inverted text-inverted"
        },
        outline: {
          content: "bg-default ring ring-default"
        },
        soft: {
          content: "bg-elevated/50"
        },
        subtle: {
          content: "bg-elevated/50 ring ring-default"
        },
        naked: {
          content: ""
        }
      },
      side: {
        left: {
          container: "rtl:justify-end"
        },
        right: {
          container: "ltr:justify-end ms-auto max-w-[75%]"
        }
      },
      leading: {
        true: ""
      },
      actions: {
        true: ""
      },
      compact: {
        true: {
          root: "scroll-mt-3",
          container: "gap-1.5 pb-3",
          leadingIcon: "size-5",
          leadingAvatarSize: "2xs"
        },
        false: {
          root: "scroll-mt-4 sm:scroll-mt-6",
          container: "gap-3 pb-8",
          leadingIcon: "size-8",
          leadingAvatarSize: "md"
        }
      }
    },
    compoundVariants: [
      {
        compact: true,
        actions: true,
        class: {
          container: "pb-8"
        }
      },
      {
        leading: true,
        compact: false,
        side: "left",
        class: {
          actions: "left-11"
        }
      },
      {
        leading: true,
        compact: true,
        side: "left",
        class: {
          actions: "left-6.5"
        }
      },
      {
        variant: [
          "solid",
          "outline",
          "soft",
          "subtle"
        ],
        compact: false,
        class: {
          content: "px-4 py-3 rounded-lg min-h-12",
          leading: "mt-2"
        }
      },
      {
        variant: [
          "solid",
          "outline",
          "soft",
          "subtle"
        ],
        compact: true,
        class: {
          content: "px-2 py-1 rounded-lg min-h-8",
          leading: "mt-1"
        }
      },
      {
        variant: "naked",
        side: "left",
        class: {
          content: "w-full"
        }
      }
    ],
    defaultVariants: {
      variant: "naked"
    }
  }, mr = {
    __name: "UChatMessage",
    props: {
      as: {
        type: null,
        required: false,
        default: "article"
      },
      icon: {
        type: null,
        required: false
      },
      avatar: {
        type: Object,
        required: false
      },
      variant: {
        type: null,
        required: false
      },
      side: {
        type: null,
        required: false
      },
      actions: {
        type: Array,
        required: false
      },
      compact: {
        type: Boolean,
        required: false
      },
      content: {
        type: String,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      id: {
        type: String,
        required: true
      },
      role: {
        type: String,
        required: true
      },
      metadata: {
        type: null,
        required: false
      },
      parts: {
        type: Array,
        required: true
      }
    },
    setup(e) {
      const t = e, n = zt(), r = Nt(), s = At("chatMessage", t), o = re(() => {
        var _a2;
        return Ae({
          extend: Ae(yi),
          ...((_a2 = r.ui) == null ? void 0 : _a2.chatMessage) || {}
        })({
          variant: t.variant,
          side: t.side,
          leading: !!t.icon || !!t.avatar || !!n.leading,
          actions: !!t.actions || !!n.actions,
          compact: t.compact
        });
      });
      return (a, i) => {
        var _a2;
        return $(), Y(v(Fn), {
          as: e.as,
          "data-role": e.role,
          "data-slot": "root",
          class: X(o.value.root({
            class: [
              (_a2 = v(s)) == null ? void 0 : _a2.root,
              t.class
            ]
          }))
        }, {
          default: te(() => {
            var _a3, _b, _c2, _d2;
            return [
              M("div", {
                "data-slot": "container",
                class: X(o.value.container({
                  class: (_a3 = v(s)) == null ? void 0 : _a3.container
                }))
              }, [
                e.icon || e.avatar || n.leading ? ($(), R("div", {
                  key: 0,
                  "data-slot": "leading",
                  class: X(o.value.leading({
                    class: (_b = v(s)) == null ? void 0 : _b.leading
                  }))
                }, [
                  ce(a.$slots, "leading", {
                    avatar: e.avatar,
                    ui: o.value
                  }, () => {
                    var _a4, _b2, _c3;
                    return [
                      e.icon ? ($(), Y(Ft, {
                        key: 0,
                        name: e.icon,
                        "data-slot": "leadingIcon",
                        class: X(o.value.leadingIcon({
                          class: (_a4 = v(s)) == null ? void 0 : _a4.leadingIcon
                        }))
                      }, null, 8, [
                        "name",
                        "class"
                      ])) : e.avatar ? ($(), Y(is, Ne({
                        key: 1,
                        size: ((_b2 = v(s)) == null ? void 0 : _b2.leadingAvatarSize) || o.value.leadingAvatarSize()
                      }, e.avatar, {
                        "data-slot": "leadingAvatar",
                        class: o.value.leadingAvatar({
                          class: (_c3 = v(s)) == null ? void 0 : _c3.leadingAvatar
                        })
                      }), null, 16, [
                        "size",
                        "class"
                      ])) : ee("", true)
                    ];
                  })
                ], 2)) : ee("", true),
                e.content || e.parts.length || n.content ? ($(), R("div", {
                  key: 1,
                  "data-slot": "content",
                  class: X(o.value.content({
                    class: (_c2 = v(s)) == null ? void 0 : _c2.content
                  }))
                }, [
                  ce(a.$slots, "content", {
                    id: e.id,
                    role: e.role,
                    content: e.content,
                    parts: e.parts
                  }, () => [
                    e.content ? ($(), R(fe, {
                      key: 0
                    }, [
                      Nn(me(e.content), 1)
                    ], 64)) : ($(true), R(fe, {
                      key: 1
                    }, ke(e.parts, (l, u) => ($(), R(fe, {
                      key: `${e.id}-${l.type}-${u}`
                    }, [
                      l.type === "text" ? ($(), R(fe, {
                        key: 0
                      }, [
                        Nn(me(l.text), 1)
                      ], 64)) : ee("", true)
                    ], 64))), 128))
                  ])
                ], 2)) : ee("", true),
                e.actions || n.actions ? ($(), R("div", {
                  key: 2,
                  "data-slot": "actions",
                  class: X(o.value.actions({
                    class: (_d2 = v(s)) == null ? void 0 : _d2.actions
                  }))
                }, [
                  ce(a.$slots, "actions", {
                    actions: e.actions
                  }, () => [
                    ($(true), R(fe, null, ke(e.actions, (l, u) => ($(), Y(ls, {
                      key: u,
                      text: l.label
                    }, {
                      default: te(() => [
                        oe(rn, Ne({
                          size: "sm",
                          color: "neutral",
                          variant: "ghost"
                        }, {
                          ref_for: true
                        }, v(Bt)(l, [
                          "onClick"
                        ]), {
                          label: void 0,
                          onClick: (c) => typeof l.onClick == "function" ? l.onClick(c, t) : void 0
                        }), null, 16, [
                          "onClick"
                        ])
                      ]),
                      _: 2
                    }, 1032, [
                      "text"
                    ]))), 128))
                  ])
                ], 2)) : ee("", true)
              ], 2)
            ];
          }),
          _: 3
        }, 8, [
          "as",
          "data-role",
          "class"
        ]);
      };
    }
  }, vi = {
    slots: {
      root: "w-full flex flex-col gap-1 flex-1 px-2.5 [&>article]:last-of-type:min-h-(--last-message-height)",
      indicator: "h-6 flex items-center gap-1 py-3 *:size-2 *:rounded-full *:bg-elevated [&>*:nth-child(1)]:animate-[bounce_1s_infinite] [&>*:nth-child(2)]:animate-[bounce_1s_0.15s_infinite] [&>*:nth-child(3)]:animate-[bounce_1s_0.3s_infinite]",
      viewport: "absolute inset-x-0 top-[86%] data-[state=open]:animate-[fade-in_200ms_ease-out] data-[state=closed]:animate-[fade-out_200ms_ease-in]",
      autoScroll: "rounded-full absolute right-1/2 translate-x-1/2 bottom-0"
    },
    variants: {
      compact: {
        true: "",
        false: ""
      }
    }
  }, bi = [
    "data-status"
  ], _i = [
    "data-state"
  ], wi = {
    __name: "UChatMessages",
    props: {
      messages: {
        type: Array,
        required: false
      },
      status: {
        type: String,
        required: false
      },
      shouldAutoScroll: {
        type: Boolean,
        required: false,
        default: false
      },
      shouldScrollToBottom: {
        type: Boolean,
        required: false,
        default: true
      },
      autoScroll: {
        type: [
          Boolean,
          Object
        ],
        required: false,
        default: true
      },
      autoScrollIcon: {
        type: null,
        required: false
      },
      user: {
        type: Object,
        required: false
      },
      assistant: {
        type: Object,
        required: false
      },
      compact: {
        type: Boolean,
        required: false
      },
      spacingOffset: {
        type: Number,
        required: false,
        default: 0
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      }
    },
    setup(e) {
      const t = e, n = zt(), r = () => Bt(n, [
        "default",
        "indicator",
        "viewport"
      ]), s = Nt(), o = At("chatMessages", t), a = An(() => or(t.user, {
        side: "right",
        variant: "soft"
      })), i = An(() => or(t.assistant, {
        side: "left",
        variant: "naked"
      })), l = re(() => {
        var _a2;
        return Ae({
          extend: Ae(vi),
          ...((_a2 = s.ui) == null ? void 0 : _a2.chatMessages) || {}
        })({
          compact: t.compact
        });
      }), u = ue(null), c = ue(null), d = ue(/* @__PURE__ */ new Map()), h = ue(false), p = ue(0), b = ue(false), m = ue(0), y = ue(false);
      function w(O, P) {
        const x = P == null ? void 0 : P.$el;
        x && d.value.set(O, x);
      }
      function k(O) {
        const P = d.value.get(O);
        P && P.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
      function f(O = true) {
        c.value && (O ? c.value.scrollTo({
          top: c.value.scrollHeight,
          behavior: "smooth"
        }) : c.value.scrollTop = c.value.scrollHeight);
      }
      fa([
        () => t.messages,
        () => t.status
      ], ([O, P]) => {
        if (P === "streaming") {
          if (!t.shouldAutoScroll) {
            S();
            return;
          }
          Ge(() => {
            !c.value || y.value || c.value.scrollHeight - c.value.scrollTop - c.value.clientHeight < 150 && f(false);
          });
        }
      }, {
        deep: true,
        throttle: 50,
        leading: true
      }), Be(() => t.status, (O) => {
        var _a2;
        if (O !== "submitted") return;
        const P = (_a2 = t.messages) == null ? void 0 : _a2[t.messages.length - 1];
        !P || P.role !== "user" || (y.value = false, Ge(() => {
          b.value = true, N(), Ge(() => {
            k(P.id);
          });
        }));
      });
      function S() {
        if (!c.value) return;
        const O = c.value.scrollTop + c.value.clientHeight, P = c.value.scrollHeight, x = 100;
        h.value = P - O >= x, c.value.scrollTop < m.value ? y.value = true : P - O < x && (y.value = false), m.value = c.value.scrollTop;
      }
      function I() {
        y.value = false, f();
      }
      function A(O) {
        if (!O) return document.documentElement;
        const P = /auto|scroll/;
        let x = O;
        for (; x && x !== document.body && x !== document.documentElement; ) {
          const j = window.getComputedStyle(x);
          if (P.test(j.overflowY)) return x;
          x = x.parentElement;
        }
        return document.documentElement;
      }
      function N() {
        var _a2;
        if (!u.value || !c.value || !((_a2 = t.messages) == null ? void 0 : _a2.length) || !b.value) return;
        const { height: O } = pa(c.value), P = t.messages.findLast((ft) => ft.role === "user");
        if (!P) return;
        const x = d.value.get(P.id);
        if (!x) return;
        let j = t.spacingOffset || 0;
        const Q = window.getComputedStyle(u.value), Oe = window.getComputedStyle(c.value);
        j += Number.parseFloat(Q.rowGap) || Number.parseFloat(Q.gap) || 0, j += Number.parseFloat(Oe.paddingTop) || 0, j += Number.parseFloat(Oe.paddingBottom) || 0, p.value = Math.max(O.value - x.offsetHeight - j, 0);
      }
      return $t(() => {
        c.value = A(u.value), c.value && (m.value = c.value.scrollTop, t.shouldScrollToBottom ? (f(false), setTimeout(() => {
          f(false);
        }, 100)) : Ge(() => {
          S();
        }), ar(c, "scroll", S), ar(window, "resize", () => Ge(N)));
      }), (O, P) => {
        var _a2;
        return $(), R("div", {
          ref_key: "el",
          ref: u,
          "data-status": e.status,
          "data-slot": "root",
          class: X(l.value.root({
            class: [
              (_a2 = v(o)) == null ? void 0 : _a2.root,
              t.class
            ]
          })),
          style: bt({
            "--last-message-height": `${p.value}px`
          })
        }, [
          ce(O.$slots, "default", {}, () => [
            ($(true), R(fe, null, ke(e.messages, (x) => ($(), Y(mr, Ne({
              key: x.id
            }, {
              ref_for: true
            }, {
              ...x.role === "user" ? a.value : i.value,
              ...x
            }, {
              ref_for: true,
              ref: (j) => w(x.id, j),
              compact: e.compact
            }), Bn({
              _: 2
            }, [
              ke(r(), (j, Q) => ({
                name: Q,
                fn: te((Oe) => [
                  ce(O.$slots, Q, Ne({
                    ref_for: true
                  }, Oe, {
                    message: x
                  }))
                ])
              }))
            ]), 1040, [
              "compact"
            ]))), 128))
          ]),
          e.status === "submitted" ? ($(), Y(mr, Ne({
            key: 0,
            id: "indicator",
            role: "assistant"
          }, {
            ...i.value,
            actions: void 0,
            parts: []
          }, {
            compact: e.compact
          }), {
            content: te(() => [
              ce(O.$slots, "indicator", {
                ui: l.value
              }, () => {
                var _a3;
                return [
                  M("div", {
                    "data-slot": "indicator",
                    class: X(l.value.indicator({
                      class: (_a3 = v(o)) == null ? void 0 : _a3.indicator
                    }))
                  }, [
                    ...P[0] || (P[0] = [
                      M("span", null, null, -1),
                      M("span", null, null, -1),
                      M("span", null, null, -1)
                    ])
                  ], 2)
                ];
              })
            ]),
            _: 3
          }, 16, [
            "compact"
          ])) : ee("", true),
          oe(v(ha), {
            present: h.value
          }, {
            default: te(() => {
              var _a3;
              return [
                M("div", {
                  "data-state": h.value ? "open" : "closed",
                  "data-slot": "viewport",
                  class: X(l.value.viewport({
                    class: (_a3 = v(o)) == null ? void 0 : _a3.viewport
                  }))
                }, [
                  ce(O.$slots, "viewport", {
                    ui: l.value,
                    onClick: I
                  }, () => {
                    var _a4;
                    return [
                      e.autoScroll ? ($(), Y(rn, Ne({
                        key: 0,
                        icon: e.autoScrollIcon || v(s).ui.icons.arrowDown,
                        color: "neutral",
                        variant: "outline"
                      }, typeof e.autoScroll == "object" ? e.autoScroll : {}, {
                        "data-slot": "autoScroll",
                        class: l.value.autoScroll({
                          class: (_a4 = v(o)) == null ? void 0 : _a4.autoScroll
                        }),
                        onClick: I
                      }), null, 16, [
                        "icon",
                        "class"
                      ])) : ee("", true)
                    ];
                  })
                ], 10, _i)
              ];
            }),
            _: 3
          }, 8, [
            "present"
          ])
        ], 14, bi);
      };
    }
  }, Si = {
    slots: {
      base: ""
    }
  }, ki = Object.assign({
    inheritAttrs: false
  }, {
    __name: "UChatPromptSubmit",
    props: {
      status: {
        type: String,
        required: false,
        default: "ready"
      },
      icon: {
        type: null,
        required: false
      },
      color: {
        type: null,
        required: false
      },
      variant: {
        type: null,
        required: false
      },
      streamingIcon: {
        type: null,
        required: false
      },
      streamingColor: {
        type: null,
        required: false,
        default: "neutral"
      },
      streamingVariant: {
        type: null,
        required: false,
        default: "subtle"
      },
      submittedIcon: {
        type: null,
        required: false
      },
      submittedColor: {
        type: null,
        required: false,
        default: "neutral"
      },
      submittedVariant: {
        type: null,
        required: false,
        default: "subtle"
      },
      errorIcon: {
        type: null,
        required: false
      },
      errorColor: {
        type: null,
        required: false,
        default: "error"
      },
      errorVariant: {
        type: null,
        required: false,
        default: "soft"
      },
      ui: {
        type: Object,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      label: {
        type: String,
        required: false
      },
      activeColor: {
        type: null,
        required: false
      },
      activeVariant: {
        type: null,
        required: false
      },
      size: {
        type: null,
        required: false
      },
      square: {
        type: Boolean,
        required: false
      },
      block: {
        type: Boolean,
        required: false
      },
      loadingAuto: {
        type: Boolean,
        required: false
      },
      onClick: {
        type: [
          Function,
          Array
        ],
        required: false
      },
      avatar: {
        type: Object,
        required: false
      },
      leading: {
        type: Boolean,
        required: false
      },
      leadingIcon: {
        type: null,
        required: false
      },
      trailing: {
        type: Boolean,
        required: false
      },
      trailingIcon: {
        type: null,
        required: false
      },
      loading: {
        type: Boolean,
        required: false
      },
      loadingIcon: {
        type: null,
        required: false
      },
      as: {
        type: null,
        required: false
      },
      type: {
        type: null,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      },
      exactActiveClass: {
        type: String,
        required: false
      },
      viewTransition: {
        type: Boolean,
        required: false
      }
    },
    emits: [
      "stop",
      "reload"
    ],
    setup(e, { emit: t }) {
      const n = e, r = t, s = zt(), { t: o } = us(), a = Nt(), i = At("chatPromptSubmit", n), l = cs(ma(n, "icon", "color", "variant", "status", "streamingIcon", "streamingColor", "streamingVariant", "submittedIcon", "submittedColor", "submittedVariant", "errorIcon", "errorColor", "errorVariant", "class", "ui")), u = re(() => ({
        ready: {
          icon: n.icon || a.ui.icons.arrowUp,
          color: n.color,
          variant: n.variant,
          type: "submit"
        },
        submitted: {
          icon: n.submittedIcon || a.ui.icons.stop,
          color: n.submittedColor,
          variant: n.submittedVariant,
          onClick(d) {
            r("stop", d);
          }
        },
        streaming: {
          icon: n.streamingIcon || a.ui.icons.stop,
          color: n.streamingColor,
          variant: n.streamingVariant,
          onClick(d) {
            r("stop", d);
          }
        },
        error: {
          icon: n.errorIcon || a.ui.icons.reload,
          color: n.errorColor,
          variant: n.errorVariant,
          onClick(d) {
            r("reload", d);
          }
        }
      })[n.status]), c = re(() => {
        var _a2;
        return Ae({
          extend: Ae(Si),
          ...((_a2 = a.ui) == null ? void 0 : _a2.chatPromptSubmit) || {}
        })();
      });
      return (d, h) => {
        var _a2;
        return $(), Y(rn, Ne({
          ...v(l),
          ...u.value,
          "aria-label": v(o)("chatPromptSubmit.label"),
          ...d.$attrs
        }, {
          class: c.value.base({
            class: [
              (_a2 = v(i)) == null ? void 0 : _a2.base,
              n.class
            ]
          }),
          ui: v(ps)(c.value, v(i))
        }), Bn({
          _: 2
        }, [
          ke(s, (p, b) => ({
            name: b,
            fn: te((m) => [
              ce(d.$slots, b, ds(fs(m)))
            ])
          }))
        ]), 1040, [
          "class",
          "ui"
        ]);
      };
    }
  }), Ii = {
    slots: {
      root: "relative inline-flex items-center",
      base: [
        "w-full rounded-md border-0 appearance-none placeholder:text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75",
        "transition-colors"
      ],
      leading: "absolute start-0 flex items-start",
      leadingIcon: "shrink-0 text-dimmed",
      leadingAvatar: "shrink-0",
      leadingAvatarSize: "",
      trailing: "absolute end-0 flex items-start",
      trailingIcon: "shrink-0 text-dimmed"
    },
    variants: {
      fieldGroup: {
        horizontal: {
          root: "group has-focus-visible:z-[1]",
          base: "group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none"
        },
        vertical: {
          root: "group has-focus-visible:z-[1]",
          base: "group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none"
        }
      },
      size: {
        xs: {
          base: "px-2 py-1 text-sm/4 gap-1",
          leading: "ps-2 inset-y-1",
          trailing: "pe-2 inset-y-1",
          leadingIcon: "size-4",
          leadingAvatarSize: "3xs",
          trailingIcon: "size-4"
        },
        sm: {
          base: "px-2.5 py-1.5 text-sm/4 gap-1.5",
          leading: "ps-2.5 inset-y-1.5",
          trailing: "pe-2.5 inset-y-1.5",
          leadingIcon: "size-4",
          leadingAvatarSize: "3xs",
          trailingIcon: "size-4"
        },
        md: {
          base: "px-2.5 py-1.5 text-base/5 gap-1.5",
          leading: "ps-2.5 inset-y-1.5",
          trailing: "pe-2.5 inset-y-1.5",
          leadingIcon: "size-5",
          leadingAvatarSize: "2xs",
          trailingIcon: "size-5"
        },
        lg: {
          base: "px-3 py-2 text-base/5 gap-2",
          leading: "ps-3 inset-y-2",
          trailing: "pe-3 inset-y-2",
          leadingIcon: "size-5",
          leadingAvatarSize: "2xs",
          trailingIcon: "size-5"
        },
        xl: {
          base: "px-3 py-2 text-base gap-2",
          leading: "ps-3 inset-y-2",
          trailing: "pe-3 inset-y-2",
          leadingIcon: "size-6",
          leadingAvatarSize: "xs",
          trailingIcon: "size-6"
        }
      },
      variant: {
        outline: "text-highlighted bg-default ring ring-inset ring-accented",
        soft: "text-highlighted bg-elevated/50 hover:bg-elevated focus:bg-elevated disabled:bg-elevated/50",
        subtle: "text-highlighted bg-elevated ring ring-inset ring-accented",
        ghost: "text-highlighted bg-transparent hover:bg-elevated focus:bg-elevated disabled:bg-transparent dark:disabled:bg-transparent",
        none: "text-highlighted bg-transparent"
      },
      color: {
        primary: "",
        secondary: "",
        success: "",
        info: "",
        warning: "",
        error: "",
        neutral: ""
      },
      leading: {
        true: ""
      },
      trailing: {
        true: ""
      },
      loading: {
        true: ""
      },
      highlight: {
        true: ""
      },
      fixed: {
        false: ""
      },
      type: {
        file: "file:me-1.5 file:font-medium file:text-muted file:outline-none"
      },
      autoresize: {
        true: {
          base: "resize-none"
        }
      }
    },
    compoundVariants: [
      {
        color: "primary",
        variant: [
          "outline",
          "subtle"
        ],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary"
      },
      {
        color: "secondary",
        variant: [
          "outline",
          "subtle"
        ],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary"
      },
      {
        color: "success",
        variant: [
          "outline",
          "subtle"
        ],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success"
      },
      {
        color: "info",
        variant: [
          "outline",
          "subtle"
        ],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info"
      },
      {
        color: "warning",
        variant: [
          "outline",
          "subtle"
        ],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning"
      },
      {
        color: "error",
        variant: [
          "outline",
          "subtle"
        ],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error"
      },
      {
        color: "neutral",
        variant: [
          "outline",
          "subtle"
        ],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral"
      },
      {
        color: "primary",
        highlight: true,
        class: "ring ring-inset ring-primary"
      },
      {
        color: "secondary",
        highlight: true,
        class: "ring ring-inset ring-secondary"
      },
      {
        color: "success",
        highlight: true,
        class: "ring ring-inset ring-success"
      },
      {
        color: "info",
        highlight: true,
        class: "ring ring-inset ring-info"
      },
      {
        color: "warning",
        highlight: true,
        class: "ring ring-inset ring-warning"
      },
      {
        color: "error",
        highlight: true,
        class: "ring ring-inset ring-error"
      },
      {
        color: "neutral",
        highlight: true,
        class: "ring ring-inset ring-neutral"
      },
      {
        color: "neutral",
        variant: [
          "outline",
          "subtle"
        ],
        class: "focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted"
      },
      {
        color: "neutral",
        highlight: true,
        class: "ring ring-inset ring-inverted"
      },
      {
        leading: true,
        size: "xs",
        class: "ps-7"
      },
      {
        leading: true,
        size: "sm",
        class: "ps-8"
      },
      {
        leading: true,
        size: "md",
        class: "ps-9"
      },
      {
        leading: true,
        size: "lg",
        class: "ps-10"
      },
      {
        leading: true,
        size: "xl",
        class: "ps-11"
      },
      {
        trailing: true,
        size: "xs",
        class: "pe-7"
      },
      {
        trailing: true,
        size: "sm",
        class: "pe-8"
      },
      {
        trailing: true,
        size: "md",
        class: "pe-9"
      },
      {
        trailing: true,
        size: "lg",
        class: "pe-10"
      },
      {
        trailing: true,
        size: "xl",
        class: "pe-11"
      },
      {
        loading: true,
        leading: true,
        class: {
          leadingIcon: "animate-spin"
        }
      },
      {
        loading: true,
        leading: false,
        trailing: true,
        class: {
          trailingIcon: "animate-spin"
        }
      },
      {
        fixed: false,
        size: "xs",
        class: "md:text-xs"
      },
      {
        fixed: false,
        size: "sm",
        class: "md:text-xs"
      },
      {
        fixed: false,
        size: "md",
        class: "md:text-sm"
      },
      {
        fixed: false,
        size: "lg",
        class: "md:text-sm"
      }
    ],
    defaultVariants: {
      size: "md",
      color: "primary",
      variant: "outline"
    }
  }, Ei = [
    "id",
    "value",
    "name",
    "rows",
    "placeholder",
    "disabled",
    "required"
  ], Oi = Object.assign({
    inheritAttrs: false
  }, {
    __name: "UTextarea",
    props: {
      as: {
        type: null,
        required: false
      },
      id: {
        type: String,
        required: false
      },
      name: {
        type: String,
        required: false
      },
      placeholder: {
        type: String,
        required: false
      },
      color: {
        type: null,
        required: false
      },
      variant: {
        type: null,
        required: false
      },
      size: {
        type: null,
        required: false
      },
      required: {
        type: Boolean,
        required: false
      },
      autofocus: {
        type: Boolean,
        required: false
      },
      autofocusDelay: {
        type: Number,
        required: false,
        default: 0
      },
      autoresize: {
        type: Boolean,
        required: false
      },
      autoresizeDelay: {
        type: Number,
        required: false,
        default: 0
      },
      disabled: {
        type: Boolean,
        required: false
      },
      rows: {
        type: Number,
        required: false,
        default: 3
      },
      maxrows: {
        type: Number,
        required: false,
        default: 0
      },
      highlight: {
        type: Boolean,
        required: false
      },
      fixed: {
        type: Boolean,
        required: false
      },
      defaultValue: {
        type: null,
        required: false
      },
      modelValue: {
        type: null,
        required: false
      },
      modelModifiers: {
        type: null,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      icon: {
        type: null,
        required: false
      },
      avatar: {
        type: Object,
        required: false
      },
      leading: {
        type: Boolean,
        required: false
      },
      leadingIcon: {
        type: null,
        required: false
      },
      trailing: {
        type: Boolean,
        required: false
      },
      trailingIcon: {
        type: null,
        required: false
      },
      loading: {
        type: Boolean,
        required: false
      },
      loadingIcon: {
        type: null,
        required: false
      }
    },
    emits: [
      "update:modelValue",
      "blur",
      "change"
    ],
    setup(e, { expose: t, emit: n }) {
      const r = e, s = n, o = zt(), a = ga(r, "modelValue", s, {
        defaultValue: r.defaultValue
      }), i = Nt(), l = At("textarea", r), { emitFormFocus: u, emitFormBlur: c, emitFormInput: d, emitFormChange: h, size: p, color: b, id: m, name: y, highlight: w, disabled: k, ariaAttrs: f } = ya(r, {
        deferInputValidation: true
      }), { isLeading: S, isTrailing: I, leadingIconName: A, trailingIconName: N } = va(r), O = re(() => {
        var _a2;
        return Ae({
          extend: Ae(Ii),
          ...((_a2 = i.ui) == null ? void 0 : _a2.textarea) || {}
        })({
          color: b.value,
          variant: r.variant,
          size: p == null ? void 0 : p.value,
          loading: r.loading,
          highlight: w.value,
          fixed: r.fixed,
          autoresize: r.autoresize,
          leading: S.value || !!r.avatar || !!o.leading,
          trailing: I.value || !!o.trailing
        });
      }), P = hs("textareaRef");
      function x(L) {
        var _a2, _b, _c2, _d2, _e2;
        ((_a2 = r.modelModifiers) == null ? void 0 : _a2.trim) && (typeof L == "string" || L === null || L === void 0) && (L = (L == null ? void 0 : L.trim()) ?? null), ((_b = r.modelModifiers) == null ? void 0 : _b.number) && (L = ba(L)), ((_c2 = r.modelModifiers) == null ? void 0 : _c2.nullable) && (L || (L = null)), ((_d2 = r.modelModifiers) == null ? void 0 : _d2.optional) && !((_e2 = r.modelModifiers) == null ? void 0 : _e2.nullable) && L !== null && (L || (L = void 0)), a.value = L, d();
      }
      function j(L) {
        var _a2;
        pt(), ((_a2 = r.modelModifiers) == null ? void 0 : _a2.lazy) || x(L.target.value);
      }
      function Q(L) {
        var _a2, _b;
        const ve = L.target.value;
        ((_a2 = r.modelModifiers) == null ? void 0 : _a2.lazy) && x(ve), ((_b = r.modelModifiers) == null ? void 0 : _b.trim) && (L.target.value = ve.trim()), h(), s("change", L);
      }
      function Oe(L) {
        c(), s("blur", L);
      }
      function ft() {
        var _a2;
        r.autofocus && ((_a2 = P.value) == null ? void 0 : _a2.focus());
      }
      function pt() {
        if (r.autoresize && P.value) {
          P.value.rows = r.rows;
          const L = P.value.style.overflow;
          P.value.style.overflow = "hidden";
          const ve = window.getComputedStyle(P.value), Ke = Number.parseInt(ve.paddingTop), gn = Number.parseInt(ve.paddingBottom), yn = Ke + gn, vn = Number.parseInt(ve.lineHeight), { scrollHeight: ht } = P.value, G = (ht - yn) / vn;
          G > r.rows && (P.value.rows = r.maxrows ? Math.min(G, r.maxrows) : G), P.value.style.overflow = L;
        }
      }
      return Be(a, () => {
        Ge(pt);
      }), $t(() => {
        setTimeout(() => {
          ft();
        }, r.autofocusDelay), setTimeout(() => {
          pt();
        }, r.autoresizeDelay);
      }), t({
        textareaRef: P
      }), (L, ve) => {
        var _a2;
        return $(), Y(v(Fn), {
          as: e.as,
          "data-slot": "root",
          class: X(O.value.root({
            class: [
              (_a2 = v(l)) == null ? void 0 : _a2.root,
              r.class
            ]
          }))
        }, {
          default: te(() => {
            var _a3, _b, _c2;
            return [
              M("textarea", Ne({
                id: v(m),
                ref_key: "textareaRef",
                ref: P,
                value: v(a),
                name: v(y),
                rows: e.rows,
                placeholder: e.placeholder,
                "data-slot": "base",
                class: O.value.base({
                  class: (_a3 = v(l)) == null ? void 0 : _a3.base
                }),
                disabled: v(k),
                required: e.required
              }, {
                ...L.$attrs,
                ...v(f)
              }, {
                onInput: j,
                onBlur: Oe,
                onChange: Q,
                onFocus: ve[0] || (ve[0] = (...Ke) => v(u) && v(u)(...Ke))
              }), null, 16, Ei),
              ce(L.$slots, "default", {
                ui: O.value
              }),
              v(S) || e.avatar || o.leading ? ($(), R("span", {
                key: 0,
                "data-slot": "leading",
                class: X(O.value.leading({
                  class: (_b = v(l)) == null ? void 0 : _b.leading
                }))
              }, [
                ce(L.$slots, "leading", {
                  ui: O.value
                }, () => {
                  var _a4, _b2, _c3;
                  return [
                    v(S) && v(A) ? ($(), Y(Ft, {
                      key: 0,
                      name: v(A),
                      "data-slot": "leadingIcon",
                      class: X(O.value.leadingIcon({
                        class: (_a4 = v(l)) == null ? void 0 : _a4.leadingIcon
                      }))
                    }, null, 8, [
                      "name",
                      "class"
                    ])) : e.avatar ? ($(), Y(is, Ne({
                      key: 1,
                      size: ((_b2 = v(l)) == null ? void 0 : _b2.leadingAvatarSize) || O.value.leadingAvatarSize()
                    }, e.avatar, {
                      "data-slot": "leadingAvatar",
                      class: O.value.leadingAvatar({
                        class: (_c3 = v(l)) == null ? void 0 : _c3.leadingAvatar
                      })
                    }), null, 16, [
                      "size",
                      "class"
                    ])) : ee("", true)
                  ];
                })
              ], 2)) : ee("", true),
              v(I) || o.trailing ? ($(), R("span", {
                key: 1,
                "data-slot": "trailing",
                class: X(O.value.trailing({
                  class: (_c2 = v(l)) == null ? void 0 : _c2.trailing
                }))
              }, [
                ce(L.$slots, "trailing", {
                  ui: O.value
                }, () => {
                  var _a4;
                  return [
                    v(N) ? ($(), Y(Ft, {
                      key: 0,
                      name: v(N),
                      "data-slot": "trailingIcon",
                      class: X(O.value.trailingIcon({
                        class: (_a4 = v(l)) == null ? void 0 : _a4.trailingIcon
                      }))
                    }, null, 8, [
                      "name",
                      "class"
                    ])) : ee("", true)
                  ];
                })
              ], 2)) : ee("", true)
            ];
          }),
          _: 3
        }, 8, [
          "as",
          "class"
        ]);
      };
    }
  }), $i = {
    slots: {
      root: "relative flex flex-col items-stretch gap-2 px-2.5 py-2 w-full rounded-lg backdrop-blur",
      header: "flex items-center gap-1.5",
      body: "items-start",
      footer: "flex items-center justify-between gap-1.5",
      base: ""
    },
    variants: {
      variant: {
        outline: {
          root: "bg-default/75 ring ring-default"
        },
        soft: {
          root: "bg-elevated/50"
        },
        subtle: {
          root: "bg-elevated/50 ring ring-default"
        },
        naked: {
          root: ""
        }
      }
    },
    defaultVariants: {
      variant: "outline"
    }
  }, zi = Object.assign({
    inheritAttrs: false
  }, {
    __name: "UChatPrompt",
    props: ur({
      as: {
        type: null,
        required: false,
        default: "form"
      },
      placeholder: {
        type: String,
        required: false
      },
      variant: {
        type: null,
        required: false
      },
      error: {
        type: Error,
        required: false
      },
      class: {
        type: null,
        required: false
      },
      ui: {
        type: Object,
        required: false
      },
      rows: {
        type: Number,
        required: false,
        default: 1
      },
      autofocus: {
        type: Boolean,
        required: false,
        default: true
      },
      autofocusDelay: {
        type: Number,
        required: false
      },
      autoresize: {
        type: Boolean,
        required: false,
        default: true
      },
      autoresizeDelay: {
        type: Number,
        required: false
      },
      maxrows: {
        type: Number,
        required: false
      },
      icon: {
        type: null,
        required: false
      },
      avatar: {
        type: Object,
        required: false
      },
      loading: {
        type: Boolean,
        required: false
      },
      loadingIcon: {
        type: null,
        required: false
      },
      disabled: {
        type: Boolean,
        required: false
      }
    }, {
      modelValue: {
        type: String,
        default: ""
      },
      modelModifiers: {}
    }),
    emits: ur([
      "submit",
      "close"
    ], [
      "update:modelValue"
    ]),
    setup(e, { expose: t, emit: n }) {
      const r = e, s = n, o = zt(), a = _a(e, "modelValue", {
        type: String,
        default: ""
      }), { t: i } = us(), l = Nt(), u = At("chatPrompt", r), c = cs(wa(r, "rows", "autofocus", "autofocusDelay", "autoresize", "autoresizeDelay", "maxrows", "icon", "avatar", "loading", "loadingIcon")), d = () => Bt(o, [
        "header",
        "footer"
      ]), h = re(() => {
        var _a2;
        return Ae({
          extend: Ae($i),
          ...((_a2 = l.ui) == null ? void 0 : _a2.chatPrompt) || {}
        })({
          variant: r.variant
        });
      }), p = hs("textareaRef");
      function b(y) {
        a.value.trim() !== "" && s("submit", y);
      }
      function m(y) {
        var _a2, _b;
        (_b = (_a2 = p.value) == null ? void 0 : _a2.textareaRef) == null ? void 0 : _b.blur(), s("close", y);
      }
      return t({
        textareaRef: An(() => {
          var _a2;
          return (_a2 = p.value) == null ? void 0 : _a2.textareaRef;
        })
      }), (y, w) => {
        var _a2;
        return $(), Y(v(Fn), {
          as: e.as,
          "data-slot": "root",
          class: X(h.value.root({
            class: [
              (_a2 = v(u)) == null ? void 0 : _a2.root,
              r.class
            ]
          })),
          onSubmit: lr(b, [
            "prevent"
          ])
        }, {
          default: te(() => {
            var _a3, _b, _c2;
            return [
              o.header ? ($(), R("div", {
                key: 0,
                "data-slot": "header",
                class: X(h.value.header({
                  class: (_a3 = v(u)) == null ? void 0 : _a3.header
                }))
              }, [
                ce(y.$slots, "header")
              ], 2)) : ee("", true),
              oe(Oi, Ne({
                ref_key: "textareaRef",
                ref: p,
                modelValue: a.value,
                "onUpdate:modelValue": w[0] || (w[0] = (k) => a.value = k),
                placeholder: e.placeholder || v(i)("chatPrompt.placeholder"),
                disabled: !!e.error || e.disabled,
                variant: "none",
                fixed: ""
              }, {
                ...v(c),
                ...y.$attrs
              }, {
                ui: v(ps)(v(Bt)(h.value, [
                  "root",
                  "body",
                  "header",
                  "footer"
                ]), v(u)),
                "data-slot": "body",
                class: h.value.body({
                  class: (_b = v(u)) == null ? void 0 : _b.body
                }),
                onKeydown: [
                  ir(lr(b, [
                    "exact",
                    "prevent"
                  ]), [
                    "enter"
                  ]),
                  ir(m, [
                    "esc"
                  ])
                ]
              }), Bn({
                _: 2
              }, [
                ke(d(), (k, f) => ({
                  name: f,
                  fn: te((S) => [
                    ce(y.$slots, f, ds(fs(S)))
                  ])
                }))
              ]), 1040, [
                "modelValue",
                "placeholder",
                "disabled",
                "ui",
                "class",
                "onKeydown"
              ]),
              o.footer ? ($(), R("div", {
                key: 1,
                "data-slot": "footer",
                class: X(h.value.footer({
                  class: (_c2 = v(u)) == null ? void 0 : _c2.footer
                }))
              }, [
                ce(y.$slots, "footer")
              ], 2)) : ee("", true)
            ];
          }),
          _: 3
        }, 8, [
          "as",
          "class"
        ]);
      };
    }
  });
  var Zs = "vercel.ai.error", Ni = Symbol.for(Zs), gr, yr, xe = class js extends (yr = Error, gr = Ni, yr) {
    constructor({ name: t, message: n, cause: r }) {
      super(n), this[gr] = true, this.name = t, this.cause = r;
    }
    static isInstance(t) {
      return js.hasMarker(t, Zs);
    }
    static hasMarker(t, n) {
      const r = Symbol.for(n);
      return t != null && typeof t == "object" && r in t && typeof t[r] == "boolean" && t[r] === true;
    }
  };
  function Rs(e) {
    return e == null ? "unknown error" : typeof e == "string" ? e : e instanceof Error ? e.message : JSON.stringify(e);
  }
  var Ms = "AI_InvalidArgumentError", Ds = `vercel.ai.error.${Ms}`, Ai = Symbol.for(Ds), vr, br, xi = class extends (br = xe, vr = Ai, br) {
    constructor({ message: e, cause: t, argument: n }) {
      super({
        name: Ms,
        message: e,
        cause: t
      }), this[vr] = true, this.argument = n;
    }
    static isInstance(e) {
      return xe.hasMarker(e, Ds);
    }
  }, Ls = "AI_JSONParseError", qs = `vercel.ai.error.${Ls}`, Ti = Symbol.for(qs), _r, wr, Sr = class extends (wr = xe, _r = Ti, wr) {
    constructor({ text: e, cause: t }) {
      super({
        name: Ls,
        message: `JSON parsing failed: Text: ${e}.
Error message: ${Rs(t)}`,
        cause: t
      }), this[_r] = true, this.text = e;
    }
    static isInstance(e) {
      return xe.hasMarker(e, qs);
    }
  }, Us = "AI_TypeValidationError", Fs = `vercel.ai.error.${Us}`, Pi = Symbol.for(Fs), kr, Ir, at = class Zn extends (Ir = xe, kr = Pi, Ir) {
    constructor({ value: t, cause: n, context: r }) {
      let s = "Type validation failed";
      if ((r == null ? void 0 : r.field) && (s += ` for ${r.field}`), (r == null ? void 0 : r.entityName) || (r == null ? void 0 : r.entityId)) {
        s += " (";
        const o = [];
        r.entityName && o.push(r.entityName), r.entityId && o.push(`id: "${r.entityId}"`), s += o.join(", "), s += ")";
      }
      super({
        name: Us,
        message: `${s}: Value: ${JSON.stringify(t)}.
Error message: ${Rs(n)}`,
        cause: n
      }), this[kr] = true, this.value = t, this.context = r;
    }
    static isInstance(t) {
      return xe.hasMarker(t, Fs);
    }
    static wrap({ value: t, cause: n, context: r }) {
      var s, o, a;
      return Zn.isInstance(n) && n.value === t && ((s = n.context) == null ? void 0 : s.field) === (r == null ? void 0 : r.field) && ((o = n.context) == null ? void 0 : o.entityName) === (r == null ? void 0 : r.entityName) && ((a = n.context) == null ? void 0 : a.entityId) === (r == null ? void 0 : r.entityId) ? n : new Zn({
        value: t,
        cause: n,
        context: r
      });
    }
  };
  function g(e, t, n) {
    function r(i, l) {
      if (i._zod || Object.defineProperty(i, "_zod", {
        value: {
          def: l,
          constr: a,
          traits: /* @__PURE__ */ new Set()
        },
        enumerable: false
      }), i._zod.traits.has(e)) return;
      i._zod.traits.add(e), t(i, l);
      const u = a.prototype, c = Object.keys(u);
      for (let d = 0; d < c.length; d++) {
        const h = c[d];
        h in i || (i[h] = u[h].bind(i));
      }
    }
    const s = (n == null ? void 0 : n.Parent) ?? Object;
    class o extends s {
    }
    Object.defineProperty(o, "name", {
      value: e
    });
    function a(i) {
      var l;
      const u = (n == null ? void 0 : n.Parent) ? new o() : this;
      r(u, i), (l = u._zod).deferred ?? (l.deferred = []);
      for (const c of u._zod.deferred) c();
      return u;
    }
    return Object.defineProperty(a, "init", {
      value: r
    }), Object.defineProperty(a, Symbol.hasInstance, {
      value: (i) => {
        var _a2, _b;
        return (n == null ? void 0 : n.Parent) && i instanceof n.Parent ? true : (_b = (_a2 = i == null ? void 0 : i._zod) == null ? void 0 : _a2.traits) == null ? void 0 : _b.has(e);
      }
    }), Object.defineProperty(a, "name", {
      value: e
    }), a;
  }
  class ot extends Error {
    constructor() {
      super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
    }
  }
  class Bs extends Error {
    constructor(t) {
      super(`Encountered unidirectional transform during encode: ${t}`), this.name = "ZodEncodeError";
    }
  }
  const Vs = {};
  function Ze(e) {
    return Vs;
  }
  function Js(e) {
    const t = Object.values(e).filter((r) => typeof r == "number");
    return Object.entries(e).filter(([r, s]) => t.indexOf(+r) === -1).map(([r, s]) => s);
  }
  function jn(e, t) {
    return typeof t == "bigint" ? t.toString() : t;
  }
  function dn(e) {
    return {
      get value() {
        {
          const t = e();
          return Object.defineProperty(this, "value", {
            value: t
          }), t;
        }
      }
    };
  }
  function Yn(e) {
    return e == null;
  }
  function Gn(e) {
    const t = e.startsWith("^") ? 1 : 0, n = e.endsWith("$") ? e.length - 1 : e.length;
    return e.slice(t, n);
  }
  function Ci(e, t) {
    const n = (e.toString().split(".")[1] || "").length, r = t.toString();
    let s = (r.split(".")[1] || "").length;
    if (s === 0 && /\d?e-\d?/.test(r)) {
      const l = r.match(/\d?e-(\d?)/);
      (l == null ? void 0 : l[1]) && (s = Number.parseInt(l[1]));
    }
    const o = n > s ? n : s, a = Number.parseInt(e.toFixed(o).replace(".", "")), i = Number.parseInt(t.toFixed(o).replace(".", ""));
    return a % i / 10 ** o;
  }
  const Er = /* @__PURE__ */ Symbol("evaluating");
  function Z(e, t, n) {
    let r;
    Object.defineProperty(e, t, {
      get() {
        if (r !== Er) return r === void 0 && (r = Er, r = n()), r;
      },
      set(s) {
        Object.defineProperty(e, t, {
          value: s
        });
      },
      configurable: true
    });
  }
  function We(e, t, n) {
    Object.defineProperty(e, t, {
      value: n,
      writable: true,
      enumerable: true,
      configurable: true
    });
  }
  function Re(...e) {
    const t = {};
    for (const n of e) {
      const r = Object.getOwnPropertyDescriptors(n);
      Object.assign(t, r);
    }
    return Object.defineProperties({}, t);
  }
  function Or(e) {
    return JSON.stringify(e);
  }
  function Zi(e) {
    return e.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
  }
  const Ws = "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {
  };
  function wt(e) {
    return typeof e == "object" && e !== null && !Array.isArray(e);
  }
  const ji = dn(() => {
    var _a2;
    if (typeof navigator < "u" && ((_a2 = navigator == null ? void 0 : navigator.userAgent) == null ? void 0 : _a2.includes("Cloudflare"))) return false;
    try {
      const e = Function;
      return new e(""), true;
    } catch {
      return false;
    }
  });
  function it(e) {
    if (wt(e) === false) return false;
    const t = e.constructor;
    if (t === void 0 || typeof t != "function") return true;
    const n = t.prototype;
    return !(wt(n) === false || Object.prototype.hasOwnProperty.call(n, "isPrototypeOf") === false);
  }
  function Ks(e) {
    return it(e) ? {
      ...e
    } : Array.isArray(e) ? [
      ...e
    ] : e;
  }
  const Ri = /* @__PURE__ */ new Set([
    "string",
    "number",
    "symbol"
  ]);
  function lt(e) {
    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }
  function Me(e, t, n) {
    const r = new e._zod.constr(t ?? e._zod.def);
    return (!t || (n == null ? void 0 : n.parent)) && (r._zod.parent = e), r;
  }
  function E(e) {
    const t = e;
    if (!t) return {};
    if (typeof t == "string") return {
      error: () => t
    };
    if ((t == null ? void 0 : t.message) !== void 0) {
      if ((t == null ? void 0 : t.error) !== void 0) throw new Error("Cannot specify both `message` and `error` params");
      t.error = t.message;
    }
    return delete t.message, typeof t.error == "string" ? {
      ...t,
      error: () => t.error
    } : t;
  }
  function Mi(e) {
    return Object.keys(e).filter((t) => e[t]._zod.optin === "optional" && e[t]._zod.optout === "optional");
  }
  const Di = {
    safeint: [
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER
    ],
    int32: [
      -2147483648,
      2147483647
    ],
    uint32: [
      0,
      4294967295
    ],
    float32: [
      -34028234663852886e22,
      34028234663852886e22
    ],
    float64: [
      -Number.MAX_VALUE,
      Number.MAX_VALUE
    ]
  };
  function Li(e, t) {
    const n = e._zod.def, r = n.checks;
    if (r && r.length > 0) throw new Error(".pick() cannot be used on object schemas containing refinements");
    const o = Re(e._zod.def, {
      get shape() {
        const a = {};
        for (const i in t) {
          if (!(i in n.shape)) throw new Error(`Unrecognized key: "${i}"`);
          t[i] && (a[i] = n.shape[i]);
        }
        return We(this, "shape", a), a;
      },
      checks: []
    });
    return Me(e, o);
  }
  function qi(e, t) {
    const n = e._zod.def, r = n.checks;
    if (r && r.length > 0) throw new Error(".omit() cannot be used on object schemas containing refinements");
    const o = Re(e._zod.def, {
      get shape() {
        const a = {
          ...e._zod.def.shape
        };
        for (const i in t) {
          if (!(i in n.shape)) throw new Error(`Unrecognized key: "${i}"`);
          t[i] && delete a[i];
        }
        return We(this, "shape", a), a;
      },
      checks: []
    });
    return Me(e, o);
  }
  function Ui(e, t) {
    if (!it(t)) throw new Error("Invalid input to extend: expected a plain object");
    const n = e._zod.def.checks;
    if (n && n.length > 0) {
      const o = e._zod.def.shape;
      for (const a in t) if (Object.getOwnPropertyDescriptor(o, a) !== void 0) throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
    }
    const s = Re(e._zod.def, {
      get shape() {
        const o = {
          ...e._zod.def.shape,
          ...t
        };
        return We(this, "shape", o), o;
      }
    });
    return Me(e, s);
  }
  function Fi(e, t) {
    if (!it(t)) throw new Error("Invalid input to safeExtend: expected a plain object");
    const n = Re(e._zod.def, {
      get shape() {
        const r = {
          ...e._zod.def.shape,
          ...t
        };
        return We(this, "shape", r), r;
      }
    });
    return Me(e, n);
  }
  function Bi(e, t) {
    const n = Re(e._zod.def, {
      get shape() {
        const r = {
          ...e._zod.def.shape,
          ...t._zod.def.shape
        };
        return We(this, "shape", r), r;
      },
      get catchall() {
        return t._zod.def.catchall;
      },
      checks: []
    });
    return Me(e, n);
  }
  function Vi(e, t, n) {
    const s = t._zod.def.checks;
    if (s && s.length > 0) throw new Error(".partial() cannot be used on object schemas containing refinements");
    const a = Re(t._zod.def, {
      get shape() {
        const i = t._zod.def.shape, l = {
          ...i
        };
        if (n) for (const u in n) {
          if (!(u in i)) throw new Error(`Unrecognized key: "${u}"`);
          n[u] && (l[u] = e ? new e({
            type: "optional",
            innerType: i[u]
          }) : i[u]);
        }
        else for (const u in i) l[u] = e ? new e({
          type: "optional",
          innerType: i[u]
        }) : i[u];
        return We(this, "shape", l), l;
      },
      checks: []
    });
    return Me(t, a);
  }
  function Ji(e, t, n) {
    const r = Re(t._zod.def, {
      get shape() {
        const s = t._zod.def.shape, o = {
          ...s
        };
        if (n) for (const a in n) {
          if (!(a in o)) throw new Error(`Unrecognized key: "${a}"`);
          n[a] && (o[a] = new e({
            type: "nonoptional",
            innerType: s[a]
          }));
        }
        else for (const a in s) o[a] = new e({
          type: "nonoptional",
          innerType: s[a]
        });
        return We(this, "shape", o), o;
      }
    });
    return Me(t, r);
  }
  function tt(e, t = 0) {
    var _a2;
    if (e.aborted === true) return true;
    for (let n = t; n < e.issues.length; n++) if (((_a2 = e.issues[n]) == null ? void 0 : _a2.continue) !== true) return true;
    return false;
  }
  function nt(e, t) {
    return t.map((n) => {
      var r;
      return (r = n).path ?? (r.path = []), n.path.unshift(e), n;
    });
  }
  function Rt(e) {
    return typeof e == "string" ? e : e == null ? void 0 : e.message;
  }
  function je(e, t, n) {
    var _a2, _b, _c2, _d2, _e2, _f2;
    const r = {
      ...e,
      path: e.path ?? []
    };
    if (!e.message) {
      const s = Rt((_c2 = (_b = (_a2 = e.inst) == null ? void 0 : _a2._zod.def) == null ? void 0 : _b.error) == null ? void 0 : _c2.call(_b, e)) ?? Rt((_d2 = t == null ? void 0 : t.error) == null ? void 0 : _d2.call(t, e)) ?? Rt((_e2 = n.customError) == null ? void 0 : _e2.call(n, e)) ?? Rt((_f2 = n.localeError) == null ? void 0 : _f2.call(n, e)) ?? "Invalid input";
      r.message = s;
    }
    return delete r.inst, delete r.continue, (t == null ? void 0 : t.reportInput) || delete r.input, r;
  }
  function Hn(e) {
    return Array.isArray(e) ? "array" : typeof e == "string" ? "string" : "unknown";
  }
  function St(...e) {
    const [t, n, r] = e;
    return typeof t == "string" ? {
      message: t,
      code: "custom",
      input: n,
      inst: r
    } : {
      ...t
    };
  }
  const Ys = (e, t) => {
    e.name = "$ZodError", Object.defineProperty(e, "_zod", {
      value: e._zod,
      enumerable: false
    }), Object.defineProperty(e, "issues", {
      value: t,
      enumerable: false
    }), e.message = JSON.stringify(t, jn, 2), Object.defineProperty(e, "toString", {
      value: () => e.message,
      enumerable: false
    });
  }, Gs = g("$ZodError", Ys), Hs = g("$ZodError", Ys, {
    Parent: Error
  });
  function Wi(e, t = (n) => n.message) {
    const n = {}, r = [];
    for (const s of e.issues) s.path.length > 0 ? (n[s.path[0]] = n[s.path[0]] || [], n[s.path[0]].push(t(s))) : r.push(t(s));
    return {
      formErrors: r,
      fieldErrors: n
    };
  }
  function Ki(e, t = (n) => n.message) {
    const n = {
      _errors: []
    }, r = (s) => {
      for (const o of s.issues) if (o.code === "invalid_union" && o.errors.length) o.errors.map((a) => r({
        issues: a
      }));
      else if (o.code === "invalid_key") r({
        issues: o.issues
      });
      else if (o.code === "invalid_element") r({
        issues: o.issues
      });
      else if (o.path.length === 0) n._errors.push(t(o));
      else {
        let a = n, i = 0;
        for (; i < o.path.length; ) {
          const l = o.path[i];
          i === o.path.length - 1 ? (a[l] = a[l] || {
            _errors: []
          }, a[l]._errors.push(t(o))) : a[l] = a[l] || {
            _errors: []
          }, a = a[l], i++;
        }
      }
    };
    return r(e), n;
  }
  const Qn = (e) => (t, n, r, s) => {
    const o = r ? Object.assign(r, {
      async: false
    }) : {
      async: false
    }, a = t._zod.run({
      value: n,
      issues: []
    }, o);
    if (a instanceof Promise) throw new ot();
    if (a.issues.length) {
      const i = new ((s == null ? void 0 : s.Err) ?? e)(a.issues.map((l) => je(l, o, Ze())));
      throw Ws(i, s == null ? void 0 : s.callee), i;
    }
    return a.value;
  }, Xn = (e) => async (t, n, r, s) => {
    const o = r ? Object.assign(r, {
      async: true
    }) : {
      async: true
    };
    let a = t._zod.run({
      value: n,
      issues: []
    }, o);
    if (a instanceof Promise && (a = await a), a.issues.length) {
      const i = new ((s == null ? void 0 : s.Err) ?? e)(a.issues.map((l) => je(l, o, Ze())));
      throw Ws(i, s == null ? void 0 : s.callee), i;
    }
    return a.value;
  }, fn = (e) => (t, n, r) => {
    const s = r ? {
      ...r,
      async: false
    } : {
      async: false
    }, o = t._zod.run({
      value: n,
      issues: []
    }, s);
    if (o instanceof Promise) throw new ot();
    return o.issues.length ? {
      success: false,
      error: new (e ?? Gs)(o.issues.map((a) => je(a, s, Ze())))
    } : {
      success: true,
      data: o.value
    };
  }, Yi = fn(Hs), pn = (e) => async (t, n, r) => {
    const s = r ? Object.assign(r, {
      async: true
    }) : {
      async: true
    };
    let o = t._zod.run({
      value: n,
      issues: []
    }, s);
    return o instanceof Promise && (o = await o), o.issues.length ? {
      success: false,
      error: new e(o.issues.map((a) => je(a, s, Ze())))
    } : {
      success: true,
      data: o.value
    };
  }, Gi = pn(Hs), Hi = (e) => (t, n, r) => {
    const s = r ? Object.assign(r, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return Qn(e)(t, n, s);
  }, Qi = (e) => (t, n, r) => Qn(e)(t, n, r), Xi = (e) => async (t, n, r) => {
    const s = r ? Object.assign(r, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return Xn(e)(t, n, s);
  }, el = (e) => async (t, n, r) => Xn(e)(t, n, r), tl = (e) => (t, n, r) => {
    const s = r ? Object.assign(r, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return fn(e)(t, n, s);
  }, nl = (e) => (t, n, r) => fn(e)(t, n, r), rl = (e) => async (t, n, r) => {
    const s = r ? Object.assign(r, {
      direction: "backward"
    }) : {
      direction: "backward"
    };
    return pn(e)(t, n, s);
  }, sl = (e) => async (t, n, r) => pn(e)(t, n, r), ol = /^[cC][^\s-]{8,}$/, al = /^[0-9a-z]+$/, il = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, ll = /^[0-9a-vA-V]{20}$/, ul = /^[A-Za-z0-9]{27}$/, cl = /^[a-zA-Z0-9_-]{21}$/, dl = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, fl = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, $r = (e) => e ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, pl = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, hl = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
  function ml() {
    return new RegExp(hl, "u");
  }
  const gl = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, yl = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, vl = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, bl = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, _l = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, Qs = /^[A-Za-z0-9_-]*$/, wl = /^\+[1-9]\d{6,14}$/, Xs = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", Sl = new RegExp(`^${Xs}$`);
  function eo(e) {
    const t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
    return typeof e.precision == "number" ? e.precision === -1 ? `${t}` : e.precision === 0 ? `${t}:[0-5]\\d` : `${t}:[0-5]\\d\\.\\d{${e.precision}}` : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  }
  function kl(e) {
    return new RegExp(`^${eo(e)}$`);
  }
  function Il(e) {
    const t = eo({
      precision: e.precision
    }), n = [
      "Z"
    ];
    e.local && n.push(""), e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
    const r = `${t}(?:${n.join("|")})`;
    return new RegExp(`^${Xs}T(?:${r})$`);
  }
  const El = (e) => {
    const t = e ? `[\\s\\S]{${(e == null ? void 0 : e.minimum) ?? 0},${(e == null ? void 0 : e.maximum) ?? ""}}` : "[\\s\\S]*";
    return new RegExp(`^${t}$`);
  }, Ol = /^-?\d+$/, to = /^-?\d+(?:\.\d+)?$/, $l = /^(?:true|false)$/i, zl = /^null$/i, Nl = /^[^A-Z]*$/, Al = /^[^a-z]*$/, he = g("$ZodCheck", (e, t) => {
    var n;
    e._zod ?? (e._zod = {}), e._zod.def = t, (n = e._zod).onattach ?? (n.onattach = []);
  }), no = {
    number: "number",
    bigint: "bigint",
    object: "date"
  }, ro = g("$ZodCheckLessThan", (e, t) => {
    he.init(e, t);
    const n = no[typeof t.value];
    e._zod.onattach.push((r) => {
      const s = r._zod.bag, o = (t.inclusive ? s.maximum : s.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
      t.value < o && (t.inclusive ? s.maximum = t.value : s.exclusiveMaximum = t.value);
    }), e._zod.check = (r) => {
      (t.inclusive ? r.value <= t.value : r.value < t.value) || r.issues.push({
        origin: n,
        code: "too_big",
        maximum: typeof t.value == "object" ? t.value.getTime() : t.value,
        input: r.value,
        inclusive: t.inclusive,
        inst: e,
        continue: !t.abort
      });
    };
  }), so = g("$ZodCheckGreaterThan", (e, t) => {
    he.init(e, t);
    const n = no[typeof t.value];
    e._zod.onattach.push((r) => {
      const s = r._zod.bag, o = (t.inclusive ? s.minimum : s.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
      t.value > o && (t.inclusive ? s.minimum = t.value : s.exclusiveMinimum = t.value);
    }), e._zod.check = (r) => {
      (t.inclusive ? r.value >= t.value : r.value > t.value) || r.issues.push({
        origin: n,
        code: "too_small",
        minimum: typeof t.value == "object" ? t.value.getTime() : t.value,
        input: r.value,
        inclusive: t.inclusive,
        inst: e,
        continue: !t.abort
      });
    };
  }), xl = g("$ZodCheckMultipleOf", (e, t) => {
    he.init(e, t), e._zod.onattach.push((n) => {
      var r;
      (r = n._zod.bag).multipleOf ?? (r.multipleOf = t.value);
    }), e._zod.check = (n) => {
      if (typeof n.value != typeof t.value) throw new Error("Cannot mix number and bigint in multiple_of check.");
      (typeof n.value == "bigint" ? n.value % t.value === BigInt(0) : Ci(n.value, t.value) === 0) || n.issues.push({
        origin: typeof n.value,
        code: "not_multiple_of",
        divisor: t.value,
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), Tl = g("$ZodCheckNumberFormat", (e, t) => {
    var _a2;
    he.init(e, t), t.format = t.format || "float64";
    const n = (_a2 = t.format) == null ? void 0 : _a2.includes("int"), r = n ? "int" : "number", [s, o] = Di[t.format];
    e._zod.onattach.push((a) => {
      const i = a._zod.bag;
      i.format = t.format, i.minimum = s, i.maximum = o, n && (i.pattern = Ol);
    }), e._zod.check = (a) => {
      const i = a.value;
      if (n) {
        if (!Number.isInteger(i)) {
          a.issues.push({
            expected: r,
            format: t.format,
            code: "invalid_type",
            continue: false,
            input: i,
            inst: e
          });
          return;
        }
        if (!Number.isSafeInteger(i)) {
          i > 0 ? a.issues.push({
            input: i,
            code: "too_big",
            maximum: Number.MAX_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: e,
            origin: r,
            inclusive: true,
            continue: !t.abort
          }) : a.issues.push({
            input: i,
            code: "too_small",
            minimum: Number.MIN_SAFE_INTEGER,
            note: "Integers must be within the safe integer range.",
            inst: e,
            origin: r,
            inclusive: true,
            continue: !t.abort
          });
          return;
        }
      }
      i < s && a.issues.push({
        origin: "number",
        input: i,
        code: "too_small",
        minimum: s,
        inclusive: true,
        inst: e,
        continue: !t.abort
      }), i > o && a.issues.push({
        origin: "number",
        input: i,
        code: "too_big",
        maximum: o,
        inclusive: true,
        inst: e,
        continue: !t.abort
      });
    };
  }), Pl = g("$ZodCheckMaxLength", (e, t) => {
    var n;
    he.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
      const s = r.value;
      return !Yn(s) && s.length !== void 0;
    }), e._zod.onattach.push((r) => {
      const s = r._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
      t.maximum < s && (r._zod.bag.maximum = t.maximum);
    }), e._zod.check = (r) => {
      const s = r.value;
      if (s.length <= t.maximum) return;
      const a = Hn(s);
      r.issues.push({
        origin: a,
        code: "too_big",
        maximum: t.maximum,
        inclusive: true,
        input: s,
        inst: e,
        continue: !t.abort
      });
    };
  }), Cl = g("$ZodCheckMinLength", (e, t) => {
    var n;
    he.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
      const s = r.value;
      return !Yn(s) && s.length !== void 0;
    }), e._zod.onattach.push((r) => {
      const s = r._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
      t.minimum > s && (r._zod.bag.minimum = t.minimum);
    }), e._zod.check = (r) => {
      const s = r.value;
      if (s.length >= t.minimum) return;
      const a = Hn(s);
      r.issues.push({
        origin: a,
        code: "too_small",
        minimum: t.minimum,
        inclusive: true,
        input: s,
        inst: e,
        continue: !t.abort
      });
    };
  }), Zl = g("$ZodCheckLengthEquals", (e, t) => {
    var n;
    he.init(e, t), (n = e._zod.def).when ?? (n.when = (r) => {
      const s = r.value;
      return !Yn(s) && s.length !== void 0;
    }), e._zod.onattach.push((r) => {
      const s = r._zod.bag;
      s.minimum = t.length, s.maximum = t.length, s.length = t.length;
    }), e._zod.check = (r) => {
      const s = r.value, o = s.length;
      if (o === t.length) return;
      const a = Hn(s), i = o > t.length;
      r.issues.push({
        origin: a,
        ...i ? {
          code: "too_big",
          maximum: t.length
        } : {
          code: "too_small",
          minimum: t.length
        },
        inclusive: true,
        exact: true,
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), hn = g("$ZodCheckStringFormat", (e, t) => {
    var n, r;
    he.init(e, t), e._zod.onattach.push((s) => {
      const o = s._zod.bag;
      o.format = t.format, t.pattern && (o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(t.pattern));
    }), t.pattern ? (n = e._zod).check ?? (n.check = (s) => {
      t.pattern.lastIndex = 0, !t.pattern.test(s.value) && s.issues.push({
        origin: "string",
        code: "invalid_format",
        format: t.format,
        input: s.value,
        ...t.pattern ? {
          pattern: t.pattern.toString()
        } : {},
        inst: e,
        continue: !t.abort
      });
    }) : (r = e._zod).check ?? (r.check = () => {
    });
  }), jl = g("$ZodCheckRegex", (e, t) => {
    hn.init(e, t), e._zod.check = (n) => {
      t.pattern.lastIndex = 0, !t.pattern.test(n.value) && n.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "regex",
        input: n.value,
        pattern: t.pattern.toString(),
        inst: e,
        continue: !t.abort
      });
    };
  }), Rl = g("$ZodCheckLowerCase", (e, t) => {
    t.pattern ?? (t.pattern = Nl), hn.init(e, t);
  }), Ml = g("$ZodCheckUpperCase", (e, t) => {
    t.pattern ?? (t.pattern = Al), hn.init(e, t);
  }), Dl = g("$ZodCheckIncludes", (e, t) => {
    he.init(e, t);
    const n = lt(t.includes), r = new RegExp(typeof t.position == "number" ? `^.{${t.position}}${n}` : n);
    t.pattern = r, e._zod.onattach.push((s) => {
      const o = s._zod.bag;
      o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(r);
    }), e._zod.check = (s) => {
      s.value.includes(t.includes, t.position) || s.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "includes",
        includes: t.includes,
        input: s.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), Ll = g("$ZodCheckStartsWith", (e, t) => {
    he.init(e, t);
    const n = new RegExp(`^${lt(t.prefix)}.*`);
    t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
      const s = r._zod.bag;
      s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(n);
    }), e._zod.check = (r) => {
      r.value.startsWith(t.prefix) || r.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "starts_with",
        prefix: t.prefix,
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), ql = g("$ZodCheckEndsWith", (e, t) => {
    he.init(e, t);
    const n = new RegExp(`.*${lt(t.suffix)}$`);
    t.pattern ?? (t.pattern = n), e._zod.onattach.push((r) => {
      const s = r._zod.bag;
      s.patterns ?? (s.patterns = /* @__PURE__ */ new Set()), s.patterns.add(n);
    }), e._zod.check = (r) => {
      r.value.endsWith(t.suffix) || r.issues.push({
        origin: "string",
        code: "invalid_format",
        format: "ends_with",
        suffix: t.suffix,
        input: r.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), Ul = g("$ZodCheckOverwrite", (e, t) => {
    he.init(e, t), e._zod.check = (n) => {
      n.value = t.tx(n.value);
    };
  });
  class Fl {
    constructor(t = []) {
      this.content = [], this.indent = 0, this && (this.args = t);
    }
    indented(t) {
      this.indent += 1, t(this), this.indent -= 1;
    }
    write(t) {
      if (typeof t == "function") {
        t(this, {
          execution: "sync"
        }), t(this, {
          execution: "async"
        });
        return;
      }
      const r = t.split(`
`).filter((a) => a), s = Math.min(...r.map((a) => a.length - a.trimStart().length)), o = r.map((a) => a.slice(s)).map((a) => " ".repeat(this.indent * 2) + a);
      for (const a of o) this.content.push(a);
    }
    compile() {
      const t = Function, n = this == null ? void 0 : this.args, s = [
        ...((this == null ? void 0 : this.content) ?? [
          ""
        ]).map((o) => `  ${o}`)
      ];
      return new t(...n, s.join(`
`));
    }
  }
  const Bl = {
    major: 4,
    minor: 3,
    patch: 6
  }, B = g("$ZodType", (e, t) => {
    var _a2;
    var n;
    e ?? (e = {}), e._zod.def = t, e._zod.bag = e._zod.bag || {}, e._zod.version = Bl;
    const r = [
      ...e._zod.def.checks ?? []
    ];
    e._zod.traits.has("$ZodCheck") && r.unshift(e);
    for (const s of r) for (const o of s._zod.onattach) o(e);
    if (r.length === 0) (n = e._zod).deferred ?? (n.deferred = []), (_a2 = e._zod.deferred) == null ? void 0 : _a2.push(() => {
      e._zod.run = e._zod.parse;
    });
    else {
      const s = (a, i, l) => {
        let u = tt(a), c;
        for (const d of i) {
          if (d._zod.def.when) {
            if (!d._zod.def.when(a)) continue;
          } else if (u) continue;
          const h = a.issues.length, p = d._zod.check(a);
          if (p instanceof Promise && (l == null ? void 0 : l.async) === false) throw new ot();
          if (c || p instanceof Promise) c = (c ?? Promise.resolve()).then(async () => {
            await p, a.issues.length !== h && (u || (u = tt(a, h)));
          });
          else {
            if (a.issues.length === h) continue;
            u || (u = tt(a, h));
          }
        }
        return c ? c.then(() => a) : a;
      }, o = (a, i, l) => {
        if (tt(a)) return a.aborted = true, a;
        const u = s(i, r, l);
        if (u instanceof Promise) {
          if (l.async === false) throw new ot();
          return u.then((c) => e._zod.parse(c, l));
        }
        return e._zod.parse(u, l);
      };
      e._zod.run = (a, i) => {
        if (i.skipChecks) return e._zod.parse(a, i);
        if (i.direction === "backward") {
          const u = e._zod.parse({
            value: a.value,
            issues: []
          }, {
            ...i,
            skipChecks: true
          });
          return u instanceof Promise ? u.then((c) => o(c, a, i)) : o(u, a, i);
        }
        const l = e._zod.parse(a, i);
        if (l instanceof Promise) {
          if (i.async === false) throw new ot();
          return l.then((u) => s(u, r, i));
        }
        return s(l, r, i);
      };
    }
    Z(e, "~standard", () => ({
      validate: (s) => {
        var _a3;
        try {
          const o = Yi(e, s);
          return o.success ? {
            value: o.data
          } : {
            issues: (_a3 = o.error) == null ? void 0 : _a3.issues
          };
        } catch {
          return Gi(e, s).then((a) => {
            var _a4;
            return a.success ? {
              value: a.data
            } : {
              issues: (_a4 = a.error) == null ? void 0 : _a4.issues
            };
          });
        }
      },
      vendor: "zod",
      version: 1
    }));
  }), er = g("$ZodString", (e, t) => {
    var _a2;
    B.init(e, t), e._zod.pattern = [
      ...((_a2 = e == null ? void 0 : e._zod.bag) == null ? void 0 : _a2.patterns) ?? []
    ].pop() ?? El(e._zod.bag), e._zod.parse = (n, r) => {
      if (t.coerce) try {
        n.value = String(n.value);
      } catch {
      }
      return typeof n.value == "string" || n.issues.push({
        expected: "string",
        code: "invalid_type",
        input: n.value,
        inst: e
      }), n;
    };
  }), J = g("$ZodStringFormat", (e, t) => {
    hn.init(e, t), er.init(e, t);
  }), Vl = g("$ZodGUID", (e, t) => {
    t.pattern ?? (t.pattern = fl), J.init(e, t);
  }), Jl = g("$ZodUUID", (e, t) => {
    if (t.version) {
      const r = {
        v1: 1,
        v2: 2,
        v3: 3,
        v4: 4,
        v5: 5,
        v6: 6,
        v7: 7,
        v8: 8
      }[t.version];
      if (r === void 0) throw new Error(`Invalid UUID version: "${t.version}"`);
      t.pattern ?? (t.pattern = $r(r));
    } else t.pattern ?? (t.pattern = $r());
    J.init(e, t);
  }), Wl = g("$ZodEmail", (e, t) => {
    t.pattern ?? (t.pattern = pl), J.init(e, t);
  }), Kl = g("$ZodURL", (e, t) => {
    J.init(e, t), e._zod.check = (n) => {
      try {
        const r = n.value.trim(), s = new URL(r);
        t.hostname && (t.hostname.lastIndex = 0, t.hostname.test(s.hostname) || n.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid hostname",
          pattern: t.hostname.source,
          input: n.value,
          inst: e,
          continue: !t.abort
        })), t.protocol && (t.protocol.lastIndex = 0, t.protocol.test(s.protocol.endsWith(":") ? s.protocol.slice(0, -1) : s.protocol) || n.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid protocol",
          pattern: t.protocol.source,
          input: n.value,
          inst: e,
          continue: !t.abort
        })), t.normalize ? n.value = s.href : n.value = r;
        return;
      } catch {
        n.issues.push({
          code: "invalid_format",
          format: "url",
          input: n.value,
          inst: e,
          continue: !t.abort
        });
      }
    };
  }), Yl = g("$ZodEmoji", (e, t) => {
    t.pattern ?? (t.pattern = ml()), J.init(e, t);
  }), Gl = g("$ZodNanoID", (e, t) => {
    t.pattern ?? (t.pattern = cl), J.init(e, t);
  }), Hl = g("$ZodCUID", (e, t) => {
    t.pattern ?? (t.pattern = ol), J.init(e, t);
  }), Ql = g("$ZodCUID2", (e, t) => {
    t.pattern ?? (t.pattern = al), J.init(e, t);
  }), Xl = g("$ZodULID", (e, t) => {
    t.pattern ?? (t.pattern = il), J.init(e, t);
  }), eu = g("$ZodXID", (e, t) => {
    t.pattern ?? (t.pattern = ll), J.init(e, t);
  }), tu = g("$ZodKSUID", (e, t) => {
    t.pattern ?? (t.pattern = ul), J.init(e, t);
  }), nu = g("$ZodISODateTime", (e, t) => {
    t.pattern ?? (t.pattern = Il(t)), J.init(e, t);
  }), ru = g("$ZodISODate", (e, t) => {
    t.pattern ?? (t.pattern = Sl), J.init(e, t);
  }), su = g("$ZodISOTime", (e, t) => {
    t.pattern ?? (t.pattern = kl(t)), J.init(e, t);
  }), ou = g("$ZodISODuration", (e, t) => {
    t.pattern ?? (t.pattern = dl), J.init(e, t);
  }), au = g("$ZodIPv4", (e, t) => {
    t.pattern ?? (t.pattern = gl), J.init(e, t), e._zod.bag.format = "ipv4";
  }), iu = g("$ZodIPv6", (e, t) => {
    t.pattern ?? (t.pattern = yl), J.init(e, t), e._zod.bag.format = "ipv6", e._zod.check = (n) => {
      try {
        new URL(`http://[${n.value}]`);
      } catch {
        n.issues.push({
          code: "invalid_format",
          format: "ipv6",
          input: n.value,
          inst: e,
          continue: !t.abort
        });
      }
    };
  }), lu = g("$ZodCIDRv4", (e, t) => {
    t.pattern ?? (t.pattern = vl), J.init(e, t);
  }), uu = g("$ZodCIDRv6", (e, t) => {
    t.pattern ?? (t.pattern = bl), J.init(e, t), e._zod.check = (n) => {
      const r = n.value.split("/");
      try {
        if (r.length !== 2) throw new Error();
        const [s, o] = r;
        if (!o) throw new Error();
        const a = Number(o);
        if (`${a}` !== o) throw new Error();
        if (a < 0 || a > 128) throw new Error();
        new URL(`http://[${s}]`);
      } catch {
        n.issues.push({
          code: "invalid_format",
          format: "cidrv6",
          input: n.value,
          inst: e,
          continue: !t.abort
        });
      }
    };
  });
  function oo(e) {
    if (e === "") return true;
    if (e.length % 4 !== 0) return false;
    try {
      return atob(e), true;
    } catch {
      return false;
    }
  }
  const cu = g("$ZodBase64", (e, t) => {
    t.pattern ?? (t.pattern = _l), J.init(e, t), e._zod.bag.contentEncoding = "base64", e._zod.check = (n) => {
      oo(n.value) || n.issues.push({
        code: "invalid_format",
        format: "base64",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    };
  });
  function du(e) {
    if (!Qs.test(e)) return false;
    const t = e.replace(/[-_]/g, (r) => r === "-" ? "+" : "/"), n = t.padEnd(Math.ceil(t.length / 4) * 4, "=");
    return oo(n);
  }
  const fu = g("$ZodBase64URL", (e, t) => {
    t.pattern ?? (t.pattern = Qs), J.init(e, t), e._zod.bag.contentEncoding = "base64url", e._zod.check = (n) => {
      du(n.value) || n.issues.push({
        code: "invalid_format",
        format: "base64url",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), pu = g("$ZodE164", (e, t) => {
    t.pattern ?? (t.pattern = wl), J.init(e, t);
  });
  function hu(e, t = null) {
    try {
      const n = e.split(".");
      if (n.length !== 3) return false;
      const [r] = n;
      if (!r) return false;
      const s = JSON.parse(atob(r));
      return !("typ" in s && (s == null ? void 0 : s.typ) !== "JWT" || !s.alg || t && (!("alg" in s) || s.alg !== t));
    } catch {
      return false;
    }
  }
  const mu = g("$ZodJWT", (e, t) => {
    J.init(e, t), e._zod.check = (n) => {
      hu(n.value, t.alg) || n.issues.push({
        code: "invalid_format",
        format: "jwt",
        input: n.value,
        inst: e,
        continue: !t.abort
      });
    };
  }), ao = g("$ZodNumber", (e, t) => {
    B.init(e, t), e._zod.pattern = e._zod.bag.pattern ?? to, e._zod.parse = (n, r) => {
      if (t.coerce) try {
        n.value = Number(n.value);
      } catch {
      }
      const s = n.value;
      if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s)) return n;
      const o = typeof s == "number" ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : "Infinity" : void 0;
      return n.issues.push({
        expected: "number",
        code: "invalid_type",
        input: s,
        inst: e,
        ...o ? {
          received: o
        } : {}
      }), n;
    };
  }), gu = g("$ZodNumberFormat", (e, t) => {
    Tl.init(e, t), ao.init(e, t);
  }), yu = g("$ZodBoolean", (e, t) => {
    B.init(e, t), e._zod.pattern = $l, e._zod.parse = (n, r) => {
      if (t.coerce) try {
        n.value = !!n.value;
      } catch {
      }
      const s = n.value;
      return typeof s == "boolean" || n.issues.push({
        expected: "boolean",
        code: "invalid_type",
        input: s,
        inst: e
      }), n;
    };
  }), vu = g("$ZodNull", (e, t) => {
    B.init(e, t), e._zod.pattern = zl, e._zod.values = /* @__PURE__ */ new Set([
      null
    ]), e._zod.parse = (n, r) => {
      const s = n.value;
      return s === null || n.issues.push({
        expected: "null",
        code: "invalid_type",
        input: s,
        inst: e
      }), n;
    };
  }), bu = g("$ZodUnknown", (e, t) => {
    B.init(e, t), e._zod.parse = (n) => n;
  }), _u = g("$ZodNever", (e, t) => {
    B.init(e, t), e._zod.parse = (n, r) => (n.issues.push({
      expected: "never",
      code: "invalid_type",
      input: n.value,
      inst: e
    }), n);
  });
  function zr(e, t, n) {
    e.issues.length && t.issues.push(...nt(n, e.issues)), t.value[n] = e.value;
  }
  const wu = g("$ZodArray", (e, t) => {
    B.init(e, t), e._zod.parse = (n, r) => {
      const s = n.value;
      if (!Array.isArray(s)) return n.issues.push({
        expected: "array",
        code: "invalid_type",
        input: s,
        inst: e
      }), n;
      n.value = Array(s.length);
      const o = [];
      for (let a = 0; a < s.length; a++) {
        const i = s[a], l = t.element._zod.run({
          value: i,
          issues: []
        }, r);
        l instanceof Promise ? o.push(l.then((u) => zr(u, n, a))) : zr(l, n, a);
      }
      return o.length ? Promise.all(o).then(() => n) : n;
    };
  });
  function Kt(e, t, n, r, s) {
    if (e.issues.length) {
      if (s && !(n in r)) return;
      t.issues.push(...nt(n, e.issues));
    }
    e.value === void 0 ? n in r && (t.value[n] = void 0) : t.value[n] = e.value;
  }
  function io(e) {
    var _a2, _b, _c2, _d2;
    const t = Object.keys(e.shape);
    for (const r of t) if (!((_d2 = (_c2 = (_b = (_a2 = e.shape) == null ? void 0 : _a2[r]) == null ? void 0 : _b._zod) == null ? void 0 : _c2.traits) == null ? void 0 : _d2.has("$ZodType"))) throw new Error(`Invalid element at key "${r}": expected a Zod schema`);
    const n = Mi(e.shape);
    return {
      ...e,
      keys: t,
      keySet: new Set(t),
      numKeys: t.length,
      optionalKeys: new Set(n)
    };
  }
  function lo(e, t, n, r, s, o) {
    const a = [], i = s.keySet, l = s.catchall._zod, u = l.def.type, c = l.optout === "optional";
    for (const d in t) {
      if (i.has(d)) continue;
      if (u === "never") {
        a.push(d);
        continue;
      }
      const h = l.run({
        value: t[d],
        issues: []
      }, r);
      h instanceof Promise ? e.push(h.then((p) => Kt(p, n, d, t, c))) : Kt(h, n, d, t, c);
    }
    return a.length && n.issues.push({
      code: "unrecognized_keys",
      keys: a,
      input: t,
      inst: o
    }), e.length ? Promise.all(e).then(() => n) : n;
  }
  const Su = g("$ZodObject", (e, t) => {
    var _a2;
    if (B.init(e, t), !((_a2 = Object.getOwnPropertyDescriptor(t, "shape")) == null ? void 0 : _a2.get)) {
      const i = t.shape;
      Object.defineProperty(t, "shape", {
        get: () => {
          const l = {
            ...i
          };
          return Object.defineProperty(t, "shape", {
            value: l
          }), l;
        }
      });
    }
    const r = dn(() => io(t));
    Z(e._zod, "propValues", () => {
      const i = t.shape, l = {};
      for (const u in i) {
        const c = i[u]._zod;
        if (c.values) {
          l[u] ?? (l[u] = /* @__PURE__ */ new Set());
          for (const d of c.values) l[u].add(d);
        }
      }
      return l;
    });
    const s = wt, o = t.catchall;
    let a;
    e._zod.parse = (i, l) => {
      a ?? (a = r.value);
      const u = i.value;
      if (!s(u)) return i.issues.push({
        expected: "object",
        code: "invalid_type",
        input: u,
        inst: e
      }), i;
      i.value = {};
      const c = [], d = a.shape;
      for (const h of a.keys) {
        const p = d[h], b = p._zod.optout === "optional", m = p._zod.run({
          value: u[h],
          issues: []
        }, l);
        m instanceof Promise ? c.push(m.then((y) => Kt(y, i, h, u, b))) : Kt(m, i, h, u, b);
      }
      return o ? lo(c, u, i, l, r.value, e) : c.length ? Promise.all(c).then(() => i) : i;
    };
  }), ku = g("$ZodObjectJIT", (e, t) => {
    Su.init(e, t);
    const n = e._zod.parse, r = dn(() => io(t)), s = (h) => {
      var _a2, _b;
      const p = new Fl([
        "shape",
        "payload",
        "ctx"
      ]), b = r.value, m = (f) => {
        const S = Or(f);
        return `shape[${S}]._zod.run({ value: input[${S}], issues: [] }, ctx)`;
      };
      p.write("const input = payload.value;");
      const y = /* @__PURE__ */ Object.create(null);
      let w = 0;
      for (const f of b.keys) y[f] = `key_${w++}`;
      p.write("const newResult = {};");
      for (const f of b.keys) {
        const S = y[f], I = Or(f), N = ((_b = (_a2 = h[f]) == null ? void 0 : _a2._zod) == null ? void 0 : _b.optout) === "optional";
        p.write(`const ${S} = ${m(f)};`), N ? p.write(`
        if (${S}.issues.length) {
          if (${I} in input) {
            payload.issues = payload.issues.concat(${S}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${I}, ...iss.path] : [${I}]
            })));
          }
        }
        
        if (${S}.value === undefined) {
          if (${I} in input) {
            newResult[${I}] = undefined;
          }
        } else {
          newResult[${I}] = ${S}.value;
        }
        
      `) : p.write(`
        if (${S}.issues.length) {
          payload.issues = payload.issues.concat(${S}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${I}, ...iss.path] : [${I}]
          })));
        }
        
        if (${S}.value === undefined) {
          if (${I} in input) {
            newResult[${I}] = undefined;
          }
        } else {
          newResult[${I}] = ${S}.value;
        }
        
      `);
      }
      p.write("payload.value = newResult;"), p.write("return payload;");
      const k = p.compile();
      return (f, S) => k(h, f, S);
    };
    let o;
    const a = wt, i = !Vs.jitless, u = i && ji.value, c = t.catchall;
    let d;
    e._zod.parse = (h, p) => {
      d ?? (d = r.value);
      const b = h.value;
      return a(b) ? i && u && (p == null ? void 0 : p.async) === false && p.jitless !== true ? (o || (o = s(t.shape)), h = o(h, p), c ? lo([], b, h, p, d, e) : h) : n(h, p) : (h.issues.push({
        expected: "object",
        code: "invalid_type",
        input: b,
        inst: e
      }), h);
    };
  });
  function Nr(e, t, n, r) {
    for (const o of e) if (o.issues.length === 0) return t.value = o.value, t;
    const s = e.filter((o) => !tt(o));
    return s.length === 1 ? (t.value = s[0].value, s[0]) : (t.issues.push({
      code: "invalid_union",
      input: t.value,
      inst: n,
      errors: e.map((o) => o.issues.map((a) => je(a, r, Ze())))
    }), t);
  }
  const uo = g("$ZodUnion", (e, t) => {
    B.init(e, t), Z(e._zod, "optin", () => t.options.some((s) => s._zod.optin === "optional") ? "optional" : void 0), Z(e._zod, "optout", () => t.options.some((s) => s._zod.optout === "optional") ? "optional" : void 0), Z(e._zod, "values", () => {
      if (t.options.every((s) => s._zod.values)) return new Set(t.options.flatMap((s) => Array.from(s._zod.values)));
    }), Z(e._zod, "pattern", () => {
      if (t.options.every((s) => s._zod.pattern)) {
        const s = t.options.map((o) => o._zod.pattern);
        return new RegExp(`^(${s.map((o) => Gn(o.source)).join("|")})$`);
      }
    });
    const n = t.options.length === 1, r = t.options[0]._zod.run;
    e._zod.parse = (s, o) => {
      if (n) return r(s, o);
      let a = false;
      const i = [];
      for (const l of t.options) {
        const u = l._zod.run({
          value: s.value,
          issues: []
        }, o);
        if (u instanceof Promise) i.push(u), a = true;
        else {
          if (u.issues.length === 0) return u;
          i.push(u);
        }
      }
      return a ? Promise.all(i).then((l) => Nr(l, s, e, o)) : Nr(i, s, e, o);
    };
  }), Iu = g("$ZodDiscriminatedUnion", (e, t) => {
    t.inclusive = false, uo.init(e, t);
    const n = e._zod.parse;
    Z(e._zod, "propValues", () => {
      const s = {};
      for (const o of t.options) {
        const a = o._zod.propValues;
        if (!a || Object.keys(a).length === 0) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(o)}"`);
        for (const [i, l] of Object.entries(a)) {
          s[i] || (s[i] = /* @__PURE__ */ new Set());
          for (const u of l) s[i].add(u);
        }
      }
      return s;
    });
    const r = dn(() => {
      var _a2;
      const s = t.options, o = /* @__PURE__ */ new Map();
      for (const a of s) {
        const i = (_a2 = a._zod.propValues) == null ? void 0 : _a2[t.discriminator];
        if (!i || i.size === 0) throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(a)}"`);
        for (const l of i) {
          if (o.has(l)) throw new Error(`Duplicate discriminator value "${String(l)}"`);
          o.set(l, a);
        }
      }
      return o;
    });
    e._zod.parse = (s, o) => {
      const a = s.value;
      if (!wt(a)) return s.issues.push({
        code: "invalid_type",
        expected: "object",
        input: a,
        inst: e
      }), s;
      const i = r.value.get(a == null ? void 0 : a[t.discriminator]);
      return i ? i._zod.run(s, o) : t.unionFallback ? n(s, o) : (s.issues.push({
        code: "invalid_union",
        errors: [],
        note: "No matching discriminator",
        discriminator: t.discriminator,
        input: a,
        path: [
          t.discriminator
        ],
        inst: e
      }), s);
    };
  }), Eu = g("$ZodIntersection", (e, t) => {
    B.init(e, t), e._zod.parse = (n, r) => {
      const s = n.value, o = t.left._zod.run({
        value: s,
        issues: []
      }, r), a = t.right._zod.run({
        value: s,
        issues: []
      }, r);
      return o instanceof Promise || a instanceof Promise ? Promise.all([
        o,
        a
      ]).then(([l, u]) => Ar(n, l, u)) : Ar(n, o, a);
    };
  });
  function Rn(e, t) {
    if (e === t) return {
      valid: true,
      data: e
    };
    if (e instanceof Date && t instanceof Date && +e == +t) return {
      valid: true,
      data: e
    };
    if (it(e) && it(t)) {
      const n = Object.keys(t), r = Object.keys(e).filter((o) => n.indexOf(o) !== -1), s = {
        ...e,
        ...t
      };
      for (const o of r) {
        const a = Rn(e[o], t[o]);
        if (!a.valid) return {
          valid: false,
          mergeErrorPath: [
            o,
            ...a.mergeErrorPath
          ]
        };
        s[o] = a.data;
      }
      return {
        valid: true,
        data: s
      };
    }
    if (Array.isArray(e) && Array.isArray(t)) {
      if (e.length !== t.length) return {
        valid: false,
        mergeErrorPath: []
      };
      const n = [];
      for (let r = 0; r < e.length; r++) {
        const s = e[r], o = t[r], a = Rn(s, o);
        if (!a.valid) return {
          valid: false,
          mergeErrorPath: [
            r,
            ...a.mergeErrorPath
          ]
        };
        n.push(a.data);
      }
      return {
        valid: true,
        data: n
      };
    }
    return {
      valid: false,
      mergeErrorPath: []
    };
  }
  function Ar(e, t, n) {
    const r = /* @__PURE__ */ new Map();
    let s;
    for (const i of t.issues) if (i.code === "unrecognized_keys") {
      s ?? (s = i);
      for (const l of i.keys) r.has(l) || r.set(l, {}), r.get(l).l = true;
    } else e.issues.push(i);
    for (const i of n.issues) if (i.code === "unrecognized_keys") for (const l of i.keys) r.has(l) || r.set(l, {}), r.get(l).r = true;
    else e.issues.push(i);
    const o = [
      ...r
    ].filter(([, i]) => i.l && i.r).map(([i]) => i);
    if (o.length && s && e.issues.push({
      ...s,
      keys: o
    }), tt(e)) return e;
    const a = Rn(t.value, n.value);
    if (!a.valid) throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(a.mergeErrorPath)}`);
    return e.value = a.data, e;
  }
  const Ou = g("$ZodRecord", (e, t) => {
    B.init(e, t), e._zod.parse = (n, r) => {
      const s = n.value;
      if (!it(s)) return n.issues.push({
        expected: "record",
        code: "invalid_type",
        input: s,
        inst: e
      }), n;
      const o = [], a = t.keyType._zod.values;
      if (a) {
        n.value = {};
        const i = /* @__PURE__ */ new Set();
        for (const u of a) if (typeof u == "string" || typeof u == "number" || typeof u == "symbol") {
          i.add(typeof u == "number" ? u.toString() : u);
          const c = t.valueType._zod.run({
            value: s[u],
            issues: []
          }, r);
          c instanceof Promise ? o.push(c.then((d) => {
            d.issues.length && n.issues.push(...nt(u, d.issues)), n.value[u] = d.value;
          })) : (c.issues.length && n.issues.push(...nt(u, c.issues)), n.value[u] = c.value);
        }
        let l;
        for (const u in s) i.has(u) || (l = l ?? [], l.push(u));
        l && l.length > 0 && n.issues.push({
          code: "unrecognized_keys",
          input: s,
          inst: e,
          keys: l
        });
      } else {
        n.value = {};
        for (const i of Reflect.ownKeys(s)) {
          if (i === "__proto__") continue;
          let l = t.keyType._zod.run({
            value: i,
            issues: []
          }, r);
          if (l instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
          if (typeof i == "string" && to.test(i) && l.issues.length) {
            const d = t.keyType._zod.run({
              value: Number(i),
              issues: []
            }, r);
            if (d instanceof Promise) throw new Error("Async schemas not supported in object keys currently");
            d.issues.length === 0 && (l = d);
          }
          if (l.issues.length) {
            t.mode === "loose" ? n.value[i] = s[i] : n.issues.push({
              code: "invalid_key",
              origin: "record",
              issues: l.issues.map((d) => je(d, r, Ze())),
              input: i,
              path: [
                i
              ],
              inst: e
            });
            continue;
          }
          const c = t.valueType._zod.run({
            value: s[i],
            issues: []
          }, r);
          c instanceof Promise ? o.push(c.then((d) => {
            d.issues.length && n.issues.push(...nt(i, d.issues)), n.value[l.value] = d.value;
          })) : (c.issues.length && n.issues.push(...nt(i, c.issues)), n.value[l.value] = c.value);
        }
      }
      return o.length ? Promise.all(o).then(() => n) : n;
    };
  }), $u = g("$ZodEnum", (e, t) => {
    B.init(e, t);
    const n = Js(t.entries), r = new Set(n);
    e._zod.values = r, e._zod.pattern = new RegExp(`^(${n.filter((s) => Ri.has(typeof s)).map((s) => typeof s == "string" ? lt(s) : s.toString()).join("|")})$`), e._zod.parse = (s, o) => {
      const a = s.value;
      return r.has(a) || s.issues.push({
        code: "invalid_value",
        values: n,
        input: a,
        inst: e
      }), s;
    };
  }), zu = g("$ZodLiteral", (e, t) => {
    if (B.init(e, t), t.values.length === 0) throw new Error("Cannot create literal schema with no valid values");
    const n = new Set(t.values);
    e._zod.values = n, e._zod.pattern = new RegExp(`^(${t.values.map((r) => typeof r == "string" ? lt(r) : r ? lt(r.toString()) : String(r)).join("|")})$`), e._zod.parse = (r, s) => {
      const o = r.value;
      return n.has(o) || r.issues.push({
        code: "invalid_value",
        values: t.values,
        input: o,
        inst: e
      }), r;
    };
  }), Nu = g("$ZodTransform", (e, t) => {
    B.init(e, t), e._zod.parse = (n, r) => {
      if (r.direction === "backward") throw new Bs(e.constructor.name);
      const s = t.transform(n.value, n);
      if (r.async) return (s instanceof Promise ? s : Promise.resolve(s)).then((a) => (n.value = a, n));
      if (s instanceof Promise) throw new ot();
      return n.value = s, n;
    };
  });
  function xr(e, t) {
    return e.issues.length && t === void 0 ? {
      issues: [],
      value: void 0
    } : e;
  }
  const co = g("$ZodOptional", (e, t) => {
    B.init(e, t), e._zod.optin = "optional", e._zod.optout = "optional", Z(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([
      ...t.innerType._zod.values,
      void 0
    ]) : void 0), Z(e._zod, "pattern", () => {
      const n = t.innerType._zod.pattern;
      return n ? new RegExp(`^(${Gn(n.source)})?$`) : void 0;
    }), e._zod.parse = (n, r) => {
      if (t.innerType._zod.optin === "optional") {
        const s = t.innerType._zod.run(n, r);
        return s instanceof Promise ? s.then((o) => xr(o, n.value)) : xr(s, n.value);
      }
      return n.value === void 0 ? n : t.innerType._zod.run(n, r);
    };
  }), Au = g("$ZodExactOptional", (e, t) => {
    co.init(e, t), Z(e._zod, "values", () => t.innerType._zod.values), Z(e._zod, "pattern", () => t.innerType._zod.pattern), e._zod.parse = (n, r) => t.innerType._zod.run(n, r);
  }), xu = g("$ZodNullable", (e, t) => {
    B.init(e, t), Z(e._zod, "optin", () => t.innerType._zod.optin), Z(e._zod, "optout", () => t.innerType._zod.optout), Z(e._zod, "pattern", () => {
      const n = t.innerType._zod.pattern;
      return n ? new RegExp(`^(${Gn(n.source)}|null)$`) : void 0;
    }), Z(e._zod, "values", () => t.innerType._zod.values ? /* @__PURE__ */ new Set([
      ...t.innerType._zod.values,
      null
    ]) : void 0), e._zod.parse = (n, r) => n.value === null ? n : t.innerType._zod.run(n, r);
  }), Tu = g("$ZodDefault", (e, t) => {
    B.init(e, t), e._zod.optin = "optional", Z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
      if (r.direction === "backward") return t.innerType._zod.run(n, r);
      if (n.value === void 0) return n.value = t.defaultValue, n;
      const s = t.innerType._zod.run(n, r);
      return s instanceof Promise ? s.then((o) => Tr(o, t)) : Tr(s, t);
    };
  });
  function Tr(e, t) {
    return e.value === void 0 && (e.value = t.defaultValue), e;
  }
  const Pu = g("$ZodPrefault", (e, t) => {
    B.init(e, t), e._zod.optin = "optional", Z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => (r.direction === "backward" || n.value === void 0 && (n.value = t.defaultValue), t.innerType._zod.run(n, r));
  }), Cu = g("$ZodNonOptional", (e, t) => {
    B.init(e, t), Z(e._zod, "values", () => {
      const n = t.innerType._zod.values;
      return n ? new Set([
        ...n
      ].filter((r) => r !== void 0)) : void 0;
    }), e._zod.parse = (n, r) => {
      const s = t.innerType._zod.run(n, r);
      return s instanceof Promise ? s.then((o) => Pr(o, e)) : Pr(s, e);
    };
  });
  function Pr(e, t) {
    return !e.issues.length && e.value === void 0 && e.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: e.value,
      inst: t
    }), e;
  }
  const Zu = g("$ZodCatch", (e, t) => {
    B.init(e, t), Z(e._zod, "optin", () => t.innerType._zod.optin), Z(e._zod, "optout", () => t.innerType._zod.optout), Z(e._zod, "values", () => t.innerType._zod.values), e._zod.parse = (n, r) => {
      if (r.direction === "backward") return t.innerType._zod.run(n, r);
      const s = t.innerType._zod.run(n, r);
      return s instanceof Promise ? s.then((o) => (n.value = o.value, o.issues.length && (n.value = t.catchValue({
        ...n,
        error: {
          issues: o.issues.map((a) => je(a, r, Ze()))
        },
        input: n.value
      }), n.issues = []), n)) : (n.value = s.value, s.issues.length && (n.value = t.catchValue({
        ...n,
        error: {
          issues: s.issues.map((o) => je(o, r, Ze()))
        },
        input: n.value
      }), n.issues = []), n);
    };
  }), ju = g("$ZodPipe", (e, t) => {
    B.init(e, t), Z(e._zod, "values", () => t.in._zod.values), Z(e._zod, "optin", () => t.in._zod.optin), Z(e._zod, "optout", () => t.out._zod.optout), Z(e._zod, "propValues", () => t.in._zod.propValues), e._zod.parse = (n, r) => {
      if (r.direction === "backward") {
        const o = t.out._zod.run(n, r);
        return o instanceof Promise ? o.then((a) => Mt(a, t.in, r)) : Mt(o, t.in, r);
      }
      const s = t.in._zod.run(n, r);
      return s instanceof Promise ? s.then((o) => Mt(o, t.out, r)) : Mt(s, t.out, r);
    };
  });
  function Mt(e, t, n) {
    return e.issues.length ? (e.aborted = true, e) : t._zod.run({
      value: e.value,
      issues: e.issues
    }, n);
  }
  const Ru = g("$ZodReadonly", (e, t) => {
    B.init(e, t), Z(e._zod, "propValues", () => t.innerType._zod.propValues), Z(e._zod, "values", () => t.innerType._zod.values), Z(e._zod, "optin", () => {
      var _a2, _b;
      return (_b = (_a2 = t.innerType) == null ? void 0 : _a2._zod) == null ? void 0 : _b.optin;
    }), Z(e._zod, "optout", () => {
      var _a2, _b;
      return (_b = (_a2 = t.innerType) == null ? void 0 : _a2._zod) == null ? void 0 : _b.optout;
    }), e._zod.parse = (n, r) => {
      if (r.direction === "backward") return t.innerType._zod.run(n, r);
      const s = t.innerType._zod.run(n, r);
      return s instanceof Promise ? s.then(Cr) : Cr(s);
    };
  });
  function Cr(e) {
    return e.value = Object.freeze(e.value), e;
  }
  const Mu = g("$ZodLazy", (e, t) => {
    B.init(e, t), Z(e._zod, "innerType", () => t.getter()), Z(e._zod, "pattern", () => {
      var _a2, _b;
      return (_b = (_a2 = e._zod.innerType) == null ? void 0 : _a2._zod) == null ? void 0 : _b.pattern;
    }), Z(e._zod, "propValues", () => {
      var _a2, _b;
      return (_b = (_a2 = e._zod.innerType) == null ? void 0 : _a2._zod) == null ? void 0 : _b.propValues;
    }), Z(e._zod, "optin", () => {
      var _a2, _b;
      return ((_b = (_a2 = e._zod.innerType) == null ? void 0 : _a2._zod) == null ? void 0 : _b.optin) ?? void 0;
    }), Z(e._zod, "optout", () => {
      var _a2, _b;
      return ((_b = (_a2 = e._zod.innerType) == null ? void 0 : _a2._zod) == null ? void 0 : _b.optout) ?? void 0;
    }), e._zod.parse = (n, r) => e._zod.innerType._zod.run(n, r);
  }), Du = g("$ZodCustom", (e, t) => {
    he.init(e, t), B.init(e, t), e._zod.parse = (n, r) => n, e._zod.check = (n) => {
      const r = n.value, s = t.fn(r);
      if (s instanceof Promise) return s.then((o) => Zr(o, n, r, e));
      Zr(s, n, r, e);
    };
  });
  function Zr(e, t, n, r) {
    if (!e) {
      const s = {
        code: "custom",
        input: n,
        inst: r,
        path: [
          ...r._zod.def.path ?? []
        ],
        continue: !r._zod.def.abort
      };
      r._zod.def.params && (s.params = r._zod.def.params), t.issues.push(St(s));
    }
  }
  var jr;
  class Lu {
    constructor() {
      this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
    }
    add(t, ...n) {
      const r = n[0];
      return this._map.set(t, r), r && typeof r == "object" && "id" in r && this._idmap.set(r.id, t), this;
    }
    clear() {
      return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
    }
    remove(t) {
      const n = this._map.get(t);
      return n && typeof n == "object" && "id" in n && this._idmap.delete(n.id), this._map.delete(t), this;
    }
    get(t) {
      const n = t._zod.parent;
      if (n) {
        const r = {
          ...this.get(n) ?? {}
        };
        delete r.id;
        const s = {
          ...r,
          ...this._map.get(t)
        };
        return Object.keys(s).length ? s : void 0;
      }
      return this._map.get(t);
    }
    has(t) {
      return this._map.has(t);
    }
  }
  function qu() {
    return new Lu();
  }
  (jr = globalThis).__zod_globalRegistry ?? (jr.__zod_globalRegistry = qu());
  const gt = globalThis.__zod_globalRegistry;
  function Uu(e, t) {
    return new e({
      type: "string",
      ...E(t)
    });
  }
  function Fu(e, t) {
    return new e({
      type: "string",
      format: "email",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function Rr(e, t) {
    return new e({
      type: "string",
      format: "guid",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function Bu(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function Vu(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v4",
      ...E(t)
    });
  }
  function Ju(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v6",
      ...E(t)
    });
  }
  function Wu(e, t) {
    return new e({
      type: "string",
      format: "uuid",
      check: "string_format",
      abort: false,
      version: "v7",
      ...E(t)
    });
  }
  function Ku(e, t) {
    return new e({
      type: "string",
      format: "url",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function Yu(e, t) {
    return new e({
      type: "string",
      format: "emoji",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function Gu(e, t) {
    return new e({
      type: "string",
      format: "nanoid",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function Hu(e, t) {
    return new e({
      type: "string",
      format: "cuid",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function Qu(e, t) {
    return new e({
      type: "string",
      format: "cuid2",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function Xu(e, t) {
    return new e({
      type: "string",
      format: "ulid",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function ec(e, t) {
    return new e({
      type: "string",
      format: "xid",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function tc(e, t) {
    return new e({
      type: "string",
      format: "ksuid",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function nc(e, t) {
    return new e({
      type: "string",
      format: "ipv4",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function rc(e, t) {
    return new e({
      type: "string",
      format: "ipv6",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function sc(e, t) {
    return new e({
      type: "string",
      format: "cidrv4",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function oc(e, t) {
    return new e({
      type: "string",
      format: "cidrv6",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function ac(e, t) {
    return new e({
      type: "string",
      format: "base64",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function ic(e, t) {
    return new e({
      type: "string",
      format: "base64url",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function lc(e, t) {
    return new e({
      type: "string",
      format: "e164",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function uc(e, t) {
    return new e({
      type: "string",
      format: "jwt",
      check: "string_format",
      abort: false,
      ...E(t)
    });
  }
  function cc(e, t) {
    return new e({
      type: "string",
      format: "datetime",
      check: "string_format",
      offset: false,
      local: false,
      precision: null,
      ...E(t)
    });
  }
  function dc(e, t) {
    return new e({
      type: "string",
      format: "date",
      check: "string_format",
      ...E(t)
    });
  }
  function fc(e, t) {
    return new e({
      type: "string",
      format: "time",
      check: "string_format",
      precision: null,
      ...E(t)
    });
  }
  function pc(e, t) {
    return new e({
      type: "string",
      format: "duration",
      check: "string_format",
      ...E(t)
    });
  }
  function hc(e, t) {
    return new e({
      type: "number",
      checks: [],
      ...E(t)
    });
  }
  function mc(e, t) {
    return new e({
      type: "number",
      check: "number_format",
      abort: false,
      format: "safeint",
      ...E(t)
    });
  }
  function gc(e, t) {
    return new e({
      type: "boolean",
      ...E(t)
    });
  }
  function yc(e, t) {
    return new e({
      type: "null",
      ...E(t)
    });
  }
  function vc(e) {
    return new e({
      type: "unknown"
    });
  }
  function bc(e, t) {
    return new e({
      type: "never",
      ...E(t)
    });
  }
  function Mr(e, t) {
    return new ro({
      check: "less_than",
      ...E(t),
      value: e,
      inclusive: false
    });
  }
  function In(e, t) {
    return new ro({
      check: "less_than",
      ...E(t),
      value: e,
      inclusive: true
    });
  }
  function Dr(e, t) {
    return new so({
      check: "greater_than",
      ...E(t),
      value: e,
      inclusive: false
    });
  }
  function En(e, t) {
    return new so({
      check: "greater_than",
      ...E(t),
      value: e,
      inclusive: true
    });
  }
  function Lr(e, t) {
    return new xl({
      check: "multiple_of",
      ...E(t),
      value: e
    });
  }
  function fo(e, t) {
    return new Pl({
      check: "max_length",
      ...E(t),
      maximum: e
    });
  }
  function Yt(e, t) {
    return new Cl({
      check: "min_length",
      ...E(t),
      minimum: e
    });
  }
  function po(e, t) {
    return new Zl({
      check: "length_equals",
      ...E(t),
      length: e
    });
  }
  function _c(e, t) {
    return new jl({
      check: "string_format",
      format: "regex",
      ...E(t),
      pattern: e
    });
  }
  function wc(e) {
    return new Rl({
      check: "string_format",
      format: "lowercase",
      ...E(e)
    });
  }
  function Sc(e) {
    return new Ml({
      check: "string_format",
      format: "uppercase",
      ...E(e)
    });
  }
  function kc(e, t) {
    return new Dl({
      check: "string_format",
      format: "includes",
      ...E(t),
      includes: e
    });
  }
  function Ic(e, t) {
    return new Ll({
      check: "string_format",
      format: "starts_with",
      ...E(t),
      prefix: e
    });
  }
  function Ec(e, t) {
    return new ql({
      check: "string_format",
      format: "ends_with",
      ...E(t),
      suffix: e
    });
  }
  function ct(e) {
    return new Ul({
      check: "overwrite",
      tx: e
    });
  }
  function Oc(e) {
    return ct((t) => t.normalize(e));
  }
  function $c() {
    return ct((e) => e.trim());
  }
  function zc() {
    return ct((e) => e.toLowerCase());
  }
  function Nc() {
    return ct((e) => e.toUpperCase());
  }
  function Ac() {
    return ct((e) => Zi(e));
  }
  function xc(e, t, n) {
    return new e({
      type: "array",
      element: t,
      ...E(n)
    });
  }
  function Tc(e, t, n) {
    const r = E(n);
    return r.abort ?? (r.abort = true), new e({
      type: "custom",
      check: "custom",
      fn: t,
      ...r
    });
  }
  function Pc(e, t, n) {
    return new e({
      type: "custom",
      check: "custom",
      fn: t,
      ...E(n)
    });
  }
  function Cc(e) {
    const t = Zc((n) => (n.addIssue = (r) => {
      if (typeof r == "string") n.issues.push(St(r, n.value, t._zod.def));
      else {
        const s = r;
        s.fatal && (s.continue = false), s.code ?? (s.code = "custom"), s.input ?? (s.input = n.value), s.inst ?? (s.inst = t), s.continue ?? (s.continue = !t._zod.def.abort), n.issues.push(St(s));
      }
    }, e(n.value, n)));
    return t;
  }
  function Zc(e, t) {
    const n = new he({
      check: "custom",
      ...E(t)
    });
    return n._zod.check = e, n;
  }
  function Gt(e) {
    let t = (e == null ? void 0 : e.target) ?? "draft-2020-12";
    return t === "draft-4" && (t = "draft-04"), t === "draft-7" && (t = "draft-07"), {
      processors: e.processors ?? {},
      metadataRegistry: (e == null ? void 0 : e.metadata) ?? gt,
      target: t,
      unrepresentable: (e == null ? void 0 : e.unrepresentable) ?? "throw",
      override: (e == null ? void 0 : e.override) ?? (() => {
      }),
      io: (e == null ? void 0 : e.io) ?? "output",
      counter: 0,
      seen: /* @__PURE__ */ new Map(),
      cycles: (e == null ? void 0 : e.cycles) ?? "ref",
      reused: (e == null ? void 0 : e.reused) ?? "inline",
      external: (e == null ? void 0 : e.external) ?? void 0
    };
  }
  function U(e, t, n = {
    path: [],
    schemaPath: []
  }) {
    var _a2, _b;
    var r;
    const s = e._zod.def, o = t.seen.get(e);
    if (o) return o.count++, n.schemaPath.includes(e) && (o.cycle = n.path), o.schema;
    const a = {
      schema: {},
      count: 1,
      cycle: void 0,
      path: n.path
    };
    t.seen.set(e, a);
    const i = (_b = (_a2 = e._zod).toJSONSchema) == null ? void 0 : _b.call(_a2);
    if (i) a.schema = i;
    else {
      const c = {
        ...n,
        schemaPath: [
          ...n.schemaPath,
          e
        ],
        path: n.path
      };
      if (e._zod.processJSONSchema) e._zod.processJSONSchema(t, a.schema, c);
      else {
        const h = a.schema, p = t.processors[s.type];
        if (!p) throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
        p(e, t, h, c);
      }
      const d = e._zod.parent;
      d && (a.ref || (a.ref = d), U(d, t, c), t.seen.get(d).isParent = true);
    }
    const l = t.metadataRegistry.get(e);
    return l && Object.assign(a.schema, l), t.io === "input" && ie(e) && (delete a.schema.examples, delete a.schema.default), t.io === "input" && a.schema._prefault && ((r = a.schema).default ?? (r.default = a.schema._prefault)), delete a.schema._prefault, t.seen.get(e).schema;
  }
  function Ht(e, t) {
    var _a2, _b, _c2, _d2;
    const n = e.seen.get(t);
    if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const r = /* @__PURE__ */ new Map();
    for (const a of e.seen.entries()) {
      const i = (_a2 = e.metadataRegistry.get(a[0])) == null ? void 0 : _a2.id;
      if (i) {
        const l = r.get(i);
        if (l && l !== a[0]) throw new Error(`Duplicate schema id "${i}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
        r.set(i, a[0]);
      }
    }
    const s = (a) => {
      var _a3;
      const i = e.target === "draft-2020-12" ? "$defs" : "definitions";
      if (e.external) {
        const d = (_a3 = e.external.registry.get(a[0])) == null ? void 0 : _a3.id, h = e.external.uri ?? ((b) => b);
        if (d) return {
          ref: h(d)
        };
        const p = a[1].defId ?? a[1].schema.id ?? `schema${e.counter++}`;
        return a[1].defId = p, {
          defId: p,
          ref: `${h("__shared")}#/${i}/${p}`
        };
      }
      if (a[1] === n) return {
        ref: "#"
      };
      const u = `#/${i}/`, c = a[1].schema.id ?? `__schema${e.counter++}`;
      return {
        defId: c,
        ref: u + c
      };
    }, o = (a) => {
      if (a[1].schema.$ref) return;
      const i = a[1], { ref: l, defId: u } = s(a);
      i.def = {
        ...i.schema
      }, u && (i.defId = u);
      const c = i.schema;
      for (const d in c) delete c[d];
      c.$ref = l;
    };
    if (e.cycles === "throw") for (const a of e.seen.entries()) {
      const i = a[1];
      if (i.cycle) throw new Error(`Cycle detected: #/${(_b = i.cycle) == null ? void 0 : _b.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
    for (const a of e.seen.entries()) {
      const i = a[1];
      if (t === a[0]) {
        o(a);
        continue;
      }
      if (e.external) {
        const u = (_c2 = e.external.registry.get(a[0])) == null ? void 0 : _c2.id;
        if (t !== a[0] && u) {
          o(a);
          continue;
        }
      }
      if ((_d2 = e.metadataRegistry.get(a[0])) == null ? void 0 : _d2.id) {
        o(a);
        continue;
      }
      if (i.cycle) {
        o(a);
        continue;
      }
      if (i.count > 1 && e.reused === "ref") {
        o(a);
        continue;
      }
    }
  }
  function Qt(e, t) {
    var _a2, _b, _c2;
    const n = e.seen.get(t);
    if (!n) throw new Error("Unprocessed schema. This is a bug in Zod.");
    const r = (a) => {
      const i = e.seen.get(a);
      if (i.ref === null) return;
      const l = i.def ?? i.schema, u = {
        ...l
      }, c = i.ref;
      if (i.ref = null, c) {
        r(c);
        const h = e.seen.get(c), p = h.schema;
        if (p.$ref && (e.target === "draft-07" || e.target === "draft-04" || e.target === "openapi-3.0") ? (l.allOf = l.allOf ?? [], l.allOf.push(p)) : Object.assign(l, p), Object.assign(l, u), a._zod.parent === c) for (const m in l) m === "$ref" || m === "allOf" || m in u || delete l[m];
        if (p.$ref && h.def) for (const m in l) m === "$ref" || m === "allOf" || m in h.def && JSON.stringify(l[m]) === JSON.stringify(h.def[m]) && delete l[m];
      }
      const d = a._zod.parent;
      if (d && d !== c) {
        r(d);
        const h = e.seen.get(d);
        if ((h == null ? void 0 : h.schema.$ref) && (l.$ref = h.schema.$ref, h.def)) for (const p in l) p === "$ref" || p === "allOf" || p in h.def && JSON.stringify(l[p]) === JSON.stringify(h.def[p]) && delete l[p];
      }
      e.override({
        zodSchema: a,
        jsonSchema: l,
        path: i.path ?? []
      });
    };
    for (const a of [
      ...e.seen.entries()
    ].reverse()) r(a[0]);
    const s = {};
    if (e.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : e.target === "draft-07" ? s.$schema = "http://json-schema.org/draft-07/schema#" : e.target === "draft-04" ? s.$schema = "http://json-schema.org/draft-04/schema#" : e.target, (_a2 = e.external) == null ? void 0 : _a2.uri) {
      const a = (_b = e.external.registry.get(t)) == null ? void 0 : _b.id;
      if (!a) throw new Error("Schema is missing an `id` property");
      s.$id = e.external.uri(a);
    }
    Object.assign(s, n.def ?? n.schema);
    const o = ((_c2 = e.external) == null ? void 0 : _c2.defs) ?? {};
    for (const a of e.seen.entries()) {
      const i = a[1];
      i.def && i.defId && (o[i.defId] = i.def);
    }
    e.external || Object.keys(o).length > 0 && (e.target === "draft-2020-12" ? s.$defs = o : s.definitions = o);
    try {
      const a = JSON.parse(JSON.stringify(s));
      return Object.defineProperty(a, "~standard", {
        value: {
          ...t["~standard"],
          jsonSchema: {
            input: Xt(t, "input", e.processors),
            output: Xt(t, "output", e.processors)
          }
        },
        enumerable: false,
        writable: false
      }), a;
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
  function ie(e, t) {
    const n = t ?? {
      seen: /* @__PURE__ */ new Set()
    };
    if (n.seen.has(e)) return false;
    n.seen.add(e);
    const r = e._zod.def;
    if (r.type === "transform") return true;
    if (r.type === "array") return ie(r.element, n);
    if (r.type === "set") return ie(r.valueType, n);
    if (r.type === "lazy") return ie(r.getter(), n);
    if (r.type === "promise" || r.type === "optional" || r.type === "nonoptional" || r.type === "nullable" || r.type === "readonly" || r.type === "default" || r.type === "prefault") return ie(r.innerType, n);
    if (r.type === "intersection") return ie(r.left, n) || ie(r.right, n);
    if (r.type === "record" || r.type === "map") return ie(r.keyType, n) || ie(r.valueType, n);
    if (r.type === "pipe") return ie(r.in, n) || ie(r.out, n);
    if (r.type === "object") {
      for (const s in r.shape) if (ie(r.shape[s], n)) return true;
      return false;
    }
    if (r.type === "union") {
      for (const s of r.options) if (ie(s, n)) return true;
      return false;
    }
    if (r.type === "tuple") {
      for (const s of r.items) if (ie(s, n)) return true;
      return !!(r.rest && ie(r.rest, n));
    }
    return false;
  }
  const jc = (e, t = {}) => (n) => {
    const r = Gt({
      ...n,
      processors: t
    });
    return U(e, r), Ht(r, e), Qt(r, e);
  }, Xt = (e, t, n = {}) => (r) => {
    const { libraryOptions: s, target: o } = r ?? {}, a = Gt({
      ...s ?? {},
      target: o,
      io: t,
      processors: n
    });
    return U(e, a), Ht(a, e), Qt(a, e);
  }, Rc = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
  }, ho = (e, t, n, r) => {
    const s = n;
    s.type = "string";
    const { minimum: o, maximum: a, format: i, patterns: l, contentEncoding: u } = e._zod.bag;
    if (typeof o == "number" && (s.minLength = o), typeof a == "number" && (s.maxLength = a), i && (s.format = Rc[i] ?? i, s.format === "" && delete s.format, i === "time" && delete s.format), u && (s.contentEncoding = u), l && l.size > 0) {
      const c = [
        ...l
      ];
      c.length === 1 ? s.pattern = c[0].source : c.length > 1 && (s.allOf = [
        ...c.map((d) => ({
          ...t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0" ? {
            type: "string"
          } : {},
          pattern: d.source
        }))
      ]);
    }
  }, mo = (e, t, n, r) => {
    const s = n, { minimum: o, maximum: a, format: i, multipleOf: l, exclusiveMaximum: u, exclusiveMinimum: c } = e._zod.bag;
    typeof i == "string" && i.includes("int") ? s.type = "integer" : s.type = "number", typeof c == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (s.minimum = c, s.exclusiveMinimum = true) : s.exclusiveMinimum = c), typeof o == "number" && (s.minimum = o, typeof c == "number" && t.target !== "draft-04" && (c >= o ? delete s.minimum : delete s.exclusiveMinimum)), typeof u == "number" && (t.target === "draft-04" || t.target === "openapi-3.0" ? (s.maximum = u, s.exclusiveMaximum = true) : s.exclusiveMaximum = u), typeof a == "number" && (s.maximum = a, typeof u == "number" && t.target !== "draft-04" && (u <= a ? delete s.maximum : delete s.exclusiveMaximum)), typeof l == "number" && (s.multipleOf = l);
  }, go = (e, t, n, r) => {
    n.type = "boolean";
  }, Mc = (e, t, n, r) => {
    if (t.unrepresentable === "throw") throw new Error("BigInt cannot be represented in JSON Schema");
  }, Dc = (e, t, n, r) => {
    if (t.unrepresentable === "throw") throw new Error("Symbols cannot be represented in JSON Schema");
  }, yo = (e, t, n, r) => {
    t.target === "openapi-3.0" ? (n.type = "string", n.nullable = true, n.enum = [
      null
    ]) : n.type = "null";
  }, Lc = (e, t, n, r) => {
    if (t.unrepresentable === "throw") throw new Error("Undefined cannot be represented in JSON Schema");
  }, qc = (e, t, n, r) => {
    if (t.unrepresentable === "throw") throw new Error("Void cannot be represented in JSON Schema");
  }, vo = (e, t, n, r) => {
    n.not = {};
  }, Uc = (e, t, n, r) => {
  }, bo = (e, t, n, r) => {
  }, Fc = (e, t, n, r) => {
    if (t.unrepresentable === "throw") throw new Error("Date cannot be represented in JSON Schema");
  }, _o = (e, t, n, r) => {
    const s = e._zod.def, o = Js(s.entries);
    o.every((a) => typeof a == "number") && (n.type = "number"), o.every((a) => typeof a == "string") && (n.type = "string"), n.enum = o;
  }, wo = (e, t, n, r) => {
    const s = e._zod.def, o = [];
    for (const a of s.values) if (a === void 0) {
      if (t.unrepresentable === "throw") throw new Error("Literal `undefined` cannot be represented in JSON Schema");
    } else if (typeof a == "bigint") {
      if (t.unrepresentable === "throw") throw new Error("BigInt literals cannot be represented in JSON Schema");
      o.push(Number(a));
    } else o.push(a);
    if (o.length !== 0) if (o.length === 1) {
      const a = o[0];
      n.type = a === null ? "null" : typeof a, t.target === "draft-04" || t.target === "openapi-3.0" ? n.enum = [
        a
      ] : n.const = a;
    } else o.every((a) => typeof a == "number") && (n.type = "number"), o.every((a) => typeof a == "string") && (n.type = "string"), o.every((a) => typeof a == "boolean") && (n.type = "boolean"), o.every((a) => a === null) && (n.type = "null"), n.enum = o;
  }, Bc = (e, t, n, r) => {
    if (t.unrepresentable === "throw") throw new Error("NaN cannot be represented in JSON Schema");
  }, Vc = (e, t, n, r) => {
    const s = n, o = e._zod.pattern;
    if (!o) throw new Error("Pattern not found in template literal");
    s.type = "string", s.pattern = o.source;
  }, Jc = (e, t, n, r) => {
    const s = n, o = {
      type: "string",
      format: "binary",
      contentEncoding: "binary"
    }, { minimum: a, maximum: i, mime: l } = e._zod.bag;
    a !== void 0 && (o.minLength = a), i !== void 0 && (o.maxLength = i), l ? l.length === 1 ? (o.contentMediaType = l[0], Object.assign(s, o)) : (Object.assign(s, o), s.anyOf = l.map((u) => ({
      contentMediaType: u
    }))) : Object.assign(s, o);
  }, Wc = (e, t, n, r) => {
    n.type = "boolean";
  }, So = (e, t, n, r) => {
    if (t.unrepresentable === "throw") throw new Error("Custom types cannot be represented in JSON Schema");
  }, Kc = (e, t, n, r) => {
    if (t.unrepresentable === "throw") throw new Error("Function types cannot be represented in JSON Schema");
  }, ko = (e, t, n, r) => {
    if (t.unrepresentable === "throw") throw new Error("Transforms cannot be represented in JSON Schema");
  }, Yc = (e, t, n, r) => {
    if (t.unrepresentable === "throw") throw new Error("Map cannot be represented in JSON Schema");
  }, Gc = (e, t, n, r) => {
    if (t.unrepresentable === "throw") throw new Error("Set cannot be represented in JSON Schema");
  }, Io = (e, t, n, r) => {
    const s = n, o = e._zod.def, { minimum: a, maximum: i } = e._zod.bag;
    typeof a == "number" && (s.minItems = a), typeof i == "number" && (s.maxItems = i), s.type = "array", s.items = U(o.element, t, {
      ...r,
      path: [
        ...r.path,
        "items"
      ]
    });
  }, Eo = (e, t, n, r) => {
    var _a2;
    const s = n, o = e._zod.def;
    s.type = "object", s.properties = {};
    const a = o.shape;
    for (const u in a) s.properties[u] = U(a[u], t, {
      ...r,
      path: [
        ...r.path,
        "properties",
        u
      ]
    });
    const i = new Set(Object.keys(a)), l = new Set([
      ...i
    ].filter((u) => {
      const c = o.shape[u]._zod;
      return t.io === "input" ? c.optin === void 0 : c.optout === void 0;
    }));
    l.size > 0 && (s.required = Array.from(l)), ((_a2 = o.catchall) == null ? void 0 : _a2._zod.def.type) === "never" ? s.additionalProperties = false : o.catchall ? o.catchall && (s.additionalProperties = U(o.catchall, t, {
      ...r,
      path: [
        ...r.path,
        "additionalProperties"
      ]
    })) : t.io === "output" && (s.additionalProperties = false);
  }, Oo = (e, t, n, r) => {
    const s = e._zod.def, o = s.inclusive === false, a = s.options.map((i, l) => U(i, t, {
      ...r,
      path: [
        ...r.path,
        o ? "oneOf" : "anyOf",
        l
      ]
    }));
    o ? n.oneOf = a : n.anyOf = a;
  }, $o = (e, t, n, r) => {
    const s = e._zod.def, o = U(s.left, t, {
      ...r,
      path: [
        ...r.path,
        "allOf",
        0
      ]
    }), a = U(s.right, t, {
      ...r,
      path: [
        ...r.path,
        "allOf",
        1
      ]
    }), i = (u) => "allOf" in u && Object.keys(u).length === 1, l = [
      ...i(o) ? o.allOf : [
        o
      ],
      ...i(a) ? a.allOf : [
        a
      ]
    ];
    n.allOf = l;
  }, Hc = (e, t, n, r) => {
    const s = n, o = e._zod.def;
    s.type = "array";
    const a = t.target === "draft-2020-12" ? "prefixItems" : "items", i = t.target === "draft-2020-12" || t.target === "openapi-3.0" ? "items" : "additionalItems", l = o.items.map((h, p) => U(h, t, {
      ...r,
      path: [
        ...r.path,
        a,
        p
      ]
    })), u = o.rest ? U(o.rest, t, {
      ...r,
      path: [
        ...r.path,
        i,
        ...t.target === "openapi-3.0" ? [
          o.items.length
        ] : []
      ]
    }) : null;
    t.target === "draft-2020-12" ? (s.prefixItems = l, u && (s.items = u)) : t.target === "openapi-3.0" ? (s.items = {
      anyOf: l
    }, u && s.items.anyOf.push(u), s.minItems = l.length, u || (s.maxItems = l.length)) : (s.items = l, u && (s.additionalItems = u));
    const { minimum: c, maximum: d } = e._zod.bag;
    typeof c == "number" && (s.minItems = c), typeof d == "number" && (s.maxItems = d);
  }, zo = (e, t, n, r) => {
    var _a2;
    const s = n, o = e._zod.def;
    s.type = "object";
    const a = o.keyType, l = (_a2 = a._zod.bag) == null ? void 0 : _a2.patterns;
    if (o.mode === "loose" && l && l.size > 0) {
      const c = U(o.valueType, t, {
        ...r,
        path: [
          ...r.path,
          "patternProperties",
          "*"
        ]
      });
      s.patternProperties = {};
      for (const d of l) s.patternProperties[d.source] = c;
    } else (t.target === "draft-07" || t.target === "draft-2020-12") && (s.propertyNames = U(o.keyType, t, {
      ...r,
      path: [
        ...r.path,
        "propertyNames"
      ]
    })), s.additionalProperties = U(o.valueType, t, {
      ...r,
      path: [
        ...r.path,
        "additionalProperties"
      ]
    });
    const u = a._zod.values;
    if (u) {
      const c = [
        ...u
      ].filter((d) => typeof d == "string" || typeof d == "number");
      c.length > 0 && (s.required = c);
    }
  }, No = (e, t, n, r) => {
    const s = e._zod.def, o = U(s.innerType, t, r), a = t.seen.get(e);
    t.target === "openapi-3.0" ? (a.ref = s.innerType, n.nullable = true) : n.anyOf = [
      o,
      {
        type: "null"
      }
    ];
  }, Ao = (e, t, n, r) => {
    const s = e._zod.def;
    U(s.innerType, t, r);
    const o = t.seen.get(e);
    o.ref = s.innerType;
  }, xo = (e, t, n, r) => {
    const s = e._zod.def;
    U(s.innerType, t, r);
    const o = t.seen.get(e);
    o.ref = s.innerType, n.default = JSON.parse(JSON.stringify(s.defaultValue));
  }, To = (e, t, n, r) => {
    const s = e._zod.def;
    U(s.innerType, t, r);
    const o = t.seen.get(e);
    o.ref = s.innerType, t.io === "input" && (n._prefault = JSON.parse(JSON.stringify(s.defaultValue)));
  }, Po = (e, t, n, r) => {
    const s = e._zod.def;
    U(s.innerType, t, r);
    const o = t.seen.get(e);
    o.ref = s.innerType;
    let a;
    try {
      a = s.catchValue(void 0);
    } catch {
      throw new Error("Dynamic catch values are not supported in JSON Schema");
    }
    n.default = a;
  }, Co = (e, t, n, r) => {
    const s = e._zod.def, o = t.io === "input" ? s.in._zod.def.type === "transform" ? s.out : s.in : s.out;
    U(o, t, r);
    const a = t.seen.get(e);
    a.ref = o;
  }, Zo = (e, t, n, r) => {
    const s = e._zod.def;
    U(s.innerType, t, r);
    const o = t.seen.get(e);
    o.ref = s.innerType, n.readOnly = true;
  }, Qc = (e, t, n, r) => {
    const s = e._zod.def;
    U(s.innerType, t, r);
    const o = t.seen.get(e);
    o.ref = s.innerType;
  }, tr = (e, t, n, r) => {
    const s = e._zod.def;
    U(s.innerType, t, r);
    const o = t.seen.get(e);
    o.ref = s.innerType;
  }, jo = (e, t, n, r) => {
    const s = e._zod.innerType;
    U(s, t, r);
    const o = t.seen.get(e);
    o.ref = s;
  }, qr = {
    string: ho,
    number: mo,
    boolean: go,
    bigint: Mc,
    symbol: Dc,
    null: yo,
    undefined: Lc,
    void: qc,
    never: vo,
    any: Uc,
    unknown: bo,
    date: Fc,
    enum: _o,
    literal: wo,
    nan: Bc,
    template_literal: Vc,
    file: Jc,
    success: Wc,
    custom: So,
    function: Kc,
    transform: ko,
    map: Yc,
    set: Gc,
    array: Io,
    object: Eo,
    union: Oo,
    intersection: $o,
    tuple: Hc,
    record: zo,
    nullable: No,
    nonoptional: Ao,
    default: xo,
    prefault: To,
    catch: Po,
    pipe: Co,
    readonly: Zo,
    promise: Qc,
    optional: tr,
    lazy: jo
  };
  function Xc(e, t) {
    if ("_idmap" in e) {
      const r = e, s = Gt({
        ...t,
        processors: qr
      }), o = {};
      for (const l of r._idmap.entries()) {
        const [u, c] = l;
        U(c, s);
      }
      const a = {}, i = {
        registry: r,
        uri: t == null ? void 0 : t.uri,
        defs: o
      };
      s.external = i;
      for (const l of r._idmap.entries()) {
        const [u, c] = l;
        Ht(s, c), a[u] = Qt(s, c);
      }
      if (Object.keys(o).length > 0) {
        const l = s.target === "draft-2020-12" ? "$defs" : "definitions";
        a.__shared = {
          [l]: o
        };
      }
      return {
        schemas: a
      };
    }
    const n = Gt({
      ...t,
      processors: qr
    });
    return U(e, n), Ht(n, e), Qt(n, e);
  }
  const ed = g("ZodISODateTime", (e, t) => {
    nu.init(e, t), K.init(e, t);
  });
  function td(e) {
    return cc(ed, e);
  }
  const nd = g("ZodISODate", (e, t) => {
    ru.init(e, t), K.init(e, t);
  });
  function rd(e) {
    return dc(nd, e);
  }
  const sd = g("ZodISOTime", (e, t) => {
    su.init(e, t), K.init(e, t);
  });
  function od(e) {
    return fc(sd, e);
  }
  const ad = g("ZodISODuration", (e, t) => {
    ou.init(e, t), K.init(e, t);
  });
  function id(e) {
    return pc(ad, e);
  }
  const ld = (e, t) => {
    Gs.init(e, t), e.name = "ZodError", Object.defineProperties(e, {
      format: {
        value: (n) => Ki(e, n)
      },
      flatten: {
        value: (n) => Wi(e, n)
      },
      addIssue: {
        value: (n) => {
          e.issues.push(n), e.message = JSON.stringify(e.issues, jn, 2);
        }
      },
      addIssues: {
        value: (n) => {
          e.issues.push(...n), e.message = JSON.stringify(e.issues, jn, 2);
        }
      },
      isEmpty: {
        get() {
          return e.issues.length === 0;
        }
      }
    });
  }, ye = g("ZodError", ld, {
    Parent: Error
  }), ud = Qn(ye), cd = Xn(ye), dd = fn(ye), Ro = pn(ye), fd = Hi(ye), pd = Qi(ye), hd = Xi(ye), md = el(ye), gd = tl(ye), yd = nl(ye), vd = rl(ye), bd = sl(ye), V = g("ZodType", (e, t) => (B.init(e, t), Object.assign(e["~standard"], {
    jsonSchema: {
      input: Xt(e, "input"),
      output: Xt(e, "output")
    }
  }), e.toJSONSchema = jc(e, {}), e.def = t, e.type = t.type, Object.defineProperty(e, "_def", {
    value: t
  }), e.check = (...n) => e.clone(Re(t, {
    checks: [
      ...t.checks ?? [],
      ...n.map((r) => typeof r == "function" ? {
        _zod: {
          check: r,
          def: {
            check: "custom"
          },
          onattach: []
        }
      } : r)
    ]
  }), {
    parent: true
  }), e.with = e.check, e.clone = (n, r) => Me(e, n, r), e.brand = () => e, e.register = ((n, r) => (n.add(e, r), e)), e.parse = (n, r) => ud(e, n, r, {
    callee: e.parse
  }), e.safeParse = (n, r) => dd(e, n, r), e.parseAsync = async (n, r) => cd(e, n, r, {
    callee: e.parseAsync
  }), e.safeParseAsync = async (n, r) => Ro(e, n, r), e.spa = e.safeParseAsync, e.encode = (n, r) => fd(e, n, r), e.decode = (n, r) => pd(e, n, r), e.encodeAsync = async (n, r) => hd(e, n, r), e.decodeAsync = async (n, r) => md(e, n, r), e.safeEncode = (n, r) => gd(e, n, r), e.safeDecode = (n, r) => yd(e, n, r), e.safeEncodeAsync = async (n, r) => vd(e, n, r), e.safeDecodeAsync = async (n, r) => bd(e, n, r), e.refine = (n, r) => e.check(gf(n, r)), e.superRefine = (n) => e.check(yf(n)), e.overwrite = (n) => e.check(ct(n)), e.optional = () => Br(e), e.exactOptional = () => tf(e), e.nullable = () => Vr(e), e.nullish = () => Br(Vr(e)), e.nonoptional = (n) => lf(e, n), e.array = () => dt(e), e.or = (n) => de([
    e,
    n
  ]), e.and = (n) => Yd(e, n), e.transform = (n) => Jr(e, Xd(n)), e.default = (n) => sf(e, n), e.prefault = (n) => af(e, n), e.catch = (n) => cf(e, n), e.pipe = (n) => Jr(e, n), e.readonly = () => pf(e), e.describe = (n) => {
    const r = e.clone();
    return gt.add(r, {
      description: n
    }), r;
  }, Object.defineProperty(e, "description", {
    get() {
      var _a2;
      return (_a2 = gt.get(e)) == null ? void 0 : _a2.description;
    },
    configurable: true
  }), e.meta = (...n) => {
    if (n.length === 0) return gt.get(e);
    const r = e.clone();
    return gt.add(r, n[0]), r;
  }, e.isOptional = () => e.safeParse(void 0).success, e.isNullable = () => e.safeParse(null).success, e.apply = (n) => n(e), e)), Mo = g("_ZodString", (e, t) => {
    er.init(e, t), V.init(e, t), e._zod.processJSONSchema = (r, s, o) => ho(e, r, s);
    const n = e._zod.bag;
    e.format = n.format ?? null, e.minLength = n.minimum ?? null, e.maxLength = n.maximum ?? null, e.regex = (...r) => e.check(_c(...r)), e.includes = (...r) => e.check(kc(...r)), e.startsWith = (...r) => e.check(Ic(...r)), e.endsWith = (...r) => e.check(Ec(...r)), e.min = (...r) => e.check(Yt(...r)), e.max = (...r) => e.check(fo(...r)), e.length = (...r) => e.check(po(...r)), e.nonempty = (...r) => e.check(Yt(1, ...r)), e.lowercase = (r) => e.check(wc(r)), e.uppercase = (r) => e.check(Sc(r)), e.trim = () => e.check($c()), e.normalize = (...r) => e.check(Oc(...r)), e.toLowerCase = () => e.check(zc()), e.toUpperCase = () => e.check(Nc()), e.slugify = () => e.check(Ac());
  }), _d = g("ZodString", (e, t) => {
    er.init(e, t), Mo.init(e, t), e.email = (n) => e.check(Fu(wd, n)), e.url = (n) => e.check(Ku(Sd, n)), e.jwt = (n) => e.check(uc(Rd, n)), e.emoji = (n) => e.check(Yu(kd, n)), e.guid = (n) => e.check(Rr(Ur, n)), e.uuid = (n) => e.check(Bu(Dt, n)), e.uuidv4 = (n) => e.check(Vu(Dt, n)), e.uuidv6 = (n) => e.check(Ju(Dt, n)), e.uuidv7 = (n) => e.check(Wu(Dt, n)), e.nanoid = (n) => e.check(Gu(Id, n)), e.guid = (n) => e.check(Rr(Ur, n)), e.cuid = (n) => e.check(Hu(Ed, n)), e.cuid2 = (n) => e.check(Qu(Od, n)), e.ulid = (n) => e.check(Xu($d, n)), e.base64 = (n) => e.check(ac(Cd, n)), e.base64url = (n) => e.check(ic(Zd, n)), e.xid = (n) => e.check(ec(zd, n)), e.ksuid = (n) => e.check(tc(Nd, n)), e.ipv4 = (n) => e.check(nc(Ad, n)), e.ipv6 = (n) => e.check(rc(xd, n)), e.cidrv4 = (n) => e.check(sc(Td, n)), e.cidrv6 = (n) => e.check(oc(Pd, n)), e.e164 = (n) => e.check(lc(jd, n)), e.datetime = (n) => e.check(td(n)), e.date = (n) => e.check(rd(n)), e.time = (n) => e.check(od(n)), e.duration = (n) => e.check(id(n));
  });
  function _(e) {
    return Uu(_d, e);
  }
  const K = g("ZodStringFormat", (e, t) => {
    J.init(e, t), Mo.init(e, t);
  }), wd = g("ZodEmail", (e, t) => {
    Wl.init(e, t), K.init(e, t);
  }), Ur = g("ZodGUID", (e, t) => {
    Vl.init(e, t), K.init(e, t);
  }), Dt = g("ZodUUID", (e, t) => {
    Jl.init(e, t), K.init(e, t);
  }), Sd = g("ZodURL", (e, t) => {
    Kl.init(e, t), K.init(e, t);
  }), kd = g("ZodEmoji", (e, t) => {
    Yl.init(e, t), K.init(e, t);
  }), Id = g("ZodNanoID", (e, t) => {
    Gl.init(e, t), K.init(e, t);
  }), Ed = g("ZodCUID", (e, t) => {
    Hl.init(e, t), K.init(e, t);
  }), Od = g("ZodCUID2", (e, t) => {
    Ql.init(e, t), K.init(e, t);
  }), $d = g("ZodULID", (e, t) => {
    Xl.init(e, t), K.init(e, t);
  }), zd = g("ZodXID", (e, t) => {
    eu.init(e, t), K.init(e, t);
  }), Nd = g("ZodKSUID", (e, t) => {
    tu.init(e, t), K.init(e, t);
  }), Ad = g("ZodIPv4", (e, t) => {
    au.init(e, t), K.init(e, t);
  }), xd = g("ZodIPv6", (e, t) => {
    iu.init(e, t), K.init(e, t);
  }), Td = g("ZodCIDRv4", (e, t) => {
    lu.init(e, t), K.init(e, t);
  }), Pd = g("ZodCIDRv6", (e, t) => {
    uu.init(e, t), K.init(e, t);
  }), Cd = g("ZodBase64", (e, t) => {
    cu.init(e, t), K.init(e, t);
  }), Zd = g("ZodBase64URL", (e, t) => {
    fu.init(e, t), K.init(e, t);
  }), jd = g("ZodE164", (e, t) => {
    pu.init(e, t), K.init(e, t);
  }), Rd = g("ZodJWT", (e, t) => {
    mu.init(e, t), K.init(e, t);
  }), Do = g("ZodNumber", (e, t) => {
    ao.init(e, t), V.init(e, t), e._zod.processJSONSchema = (r, s, o) => mo(e, r, s), e.gt = (r, s) => e.check(Dr(r, s)), e.gte = (r, s) => e.check(En(r, s)), e.min = (r, s) => e.check(En(r, s)), e.lt = (r, s) => e.check(Mr(r, s)), e.lte = (r, s) => e.check(In(r, s)), e.max = (r, s) => e.check(In(r, s)), e.int = (r) => e.check(Fr(r)), e.safe = (r) => e.check(Fr(r)), e.positive = (r) => e.check(Dr(0, r)), e.nonnegative = (r) => e.check(En(0, r)), e.negative = (r) => e.check(Mr(0, r)), e.nonpositive = (r) => e.check(In(0, r)), e.multipleOf = (r, s) => e.check(Lr(r, s)), e.step = (r, s) => e.check(Lr(r, s)), e.finite = () => e;
    const n = e._zod.bag;
    e.minValue = Math.max(n.minimum ?? Number.NEGATIVE_INFINITY, n.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, e.maxValue = Math.min(n.maximum ?? Number.POSITIVE_INFINITY, n.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, e.isInt = (n.format ?? "").includes("int") || Number.isSafeInteger(n.multipleOf ?? 0.5), e.isFinite = true, e.format = n.format ?? null;
  });
  function Md(e) {
    return hc(Do, e);
  }
  const Dd = g("ZodNumberFormat", (e, t) => {
    gu.init(e, t), Do.init(e, t);
  });
  function Fr(e) {
    return mc(Dd, e);
  }
  const Ld = g("ZodBoolean", (e, t) => {
    yu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => go(e, n, r);
  });
  function le(e) {
    return gc(Ld, e);
  }
  const qd = g("ZodNull", (e, t) => {
    vu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => yo(e, n, r);
  });
  function Ud(e) {
    return yc(qd, e);
  }
  const Fd = g("ZodUnknown", (e, t) => {
    bu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => bo();
  });
  function ze() {
    return vc(Fd);
  }
  const Bd = g("ZodNever", (e, t) => {
    _u.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => vo(e, n, r);
  });
  function Lo(e) {
    return bc(Bd, e);
  }
  const Vd = g("ZodArray", (e, t) => {
    wu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => Io(e, n, r, s), e.element = t.element, e.min = (n, r) => e.check(Yt(n, r)), e.nonempty = (n) => e.check(Yt(1, n)), e.max = (n, r) => e.check(fo(n, r)), e.length = (n, r) => e.check(po(n, r)), e.unwrap = () => e.element;
  });
  function dt(e, t) {
    return xc(Vd, e, t);
  }
  const qo = g("ZodObject", (e, t) => {
    ku.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => Eo(e, n, r, s), Z(e, "shape", () => t.shape), e.keyof = () => Fo(Object.keys(e._zod.def.shape)), e.catchall = (n) => e.clone({
      ...e._zod.def,
      catchall: n
    }), e.passthrough = () => e.clone({
      ...e._zod.def,
      catchall: ze()
    }), e.loose = () => e.clone({
      ...e._zod.def,
      catchall: ze()
    }), e.strict = () => e.clone({
      ...e._zod.def,
      catchall: Lo()
    }), e.strip = () => e.clone({
      ...e._zod.def,
      catchall: void 0
    }), e.extend = (n) => Ui(e, n), e.safeExtend = (n) => Fi(e, n), e.merge = (n) => Bi(e, n), e.pick = (n) => Li(e, n), e.omit = (n) => qi(e, n), e.partial = (...n) => Vi(Bo, e, n[0]), e.required = (...n) => Ji(Vo, e, n[0]);
  });
  function q(e, t) {
    const n = {
      type: "object",
      shape: e ?? {},
      ...E(t)
    };
    return new qo(n);
  }
  function F(e, t) {
    return new qo({
      type: "object",
      shape: e,
      catchall: Lo(),
      ...E(t)
    });
  }
  const Uo = g("ZodUnion", (e, t) => {
    uo.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => Oo(e, n, r, s), e.options = t.options;
  });
  function de(e, t) {
    return new Uo({
      type: "union",
      options: e,
      ...E(t)
    });
  }
  const Jd = g("ZodDiscriminatedUnion", (e, t) => {
    Uo.init(e, t), Iu.init(e, t);
  });
  function Wd(e, t, n) {
    return new Jd({
      type: "union",
      options: t,
      discriminator: e,
      ...E(n)
    });
  }
  const Kd = g("ZodIntersection", (e, t) => {
    Eu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => $o(e, n, r, s);
  });
  function Yd(e, t) {
    return new Kd({
      type: "intersection",
      left: e,
      right: t
    });
  }
  const Gd = g("ZodRecord", (e, t) => {
    Ou.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => zo(e, n, r, s), e.keyType = t.keyType, e.valueType = t.valueType;
  });
  function kt(e, t, n) {
    return new Gd({
      type: "record",
      keyType: e,
      valueType: t,
      ...E(n)
    });
  }
  const Mn = g("ZodEnum", (e, t) => {
    $u.init(e, t), V.init(e, t), e._zod.processJSONSchema = (r, s, o) => _o(e, r, s), e.enum = t.entries, e.options = Object.values(t.entries);
    const n = new Set(Object.keys(t.entries));
    e.extract = (r, s) => {
      const o = {};
      for (const a of r) if (n.has(a)) o[a] = t.entries[a];
      else throw new Error(`Key ${a} not found in enum`);
      return new Mn({
        ...t,
        checks: [],
        ...E(s),
        entries: o
      });
    }, e.exclude = (r, s) => {
      const o = {
        ...t.entries
      };
      for (const a of r) if (n.has(a)) delete o[a];
      else throw new Error(`Key ${a} not found in enum`);
      return new Mn({
        ...t,
        checks: [],
        ...E(s),
        entries: o
      });
    };
  });
  function Fo(e, t) {
    const n = Array.isArray(e) ? Object.fromEntries(e.map((r) => [
      r,
      r
    ])) : e;
    return new Mn({
      type: "enum",
      entries: n,
      ...E(t)
    });
  }
  const Hd = g("ZodLiteral", (e, t) => {
    zu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => wo(e, n, r), e.values = new Set(t.values), Object.defineProperty(e, "value", {
      get() {
        if (t.values.length > 1) throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");
        return t.values[0];
      }
    });
  });
  function z(e, t) {
    return new Hd({
      type: "literal",
      values: Array.isArray(e) ? e : [
        e
      ],
      ...E(t)
    });
  }
  const Qd = g("ZodTransform", (e, t) => {
    Nu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => ko(e, n), e._zod.parse = (n, r) => {
      if (r.direction === "backward") throw new Bs(e.constructor.name);
      n.addIssue = (o) => {
        if (typeof o == "string") n.issues.push(St(o, n.value, t));
        else {
          const a = o;
          a.fatal && (a.continue = false), a.code ?? (a.code = "custom"), a.input ?? (a.input = n.value), a.inst ?? (a.inst = e), n.issues.push(St(a));
        }
      };
      const s = t.transform(n.value, n);
      return s instanceof Promise ? s.then((o) => (n.value = o, n)) : (n.value = s, n);
    };
  });
  function Xd(e) {
    return new Qd({
      type: "transform",
      transform: e
    });
  }
  const Bo = g("ZodOptional", (e, t) => {
    co.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => tr(e, n, r, s), e.unwrap = () => e._zod.def.innerType;
  });
  function Br(e) {
    return new Bo({
      type: "optional",
      innerType: e
    });
  }
  const ef = g("ZodExactOptional", (e, t) => {
    Au.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => tr(e, n, r, s), e.unwrap = () => e._zod.def.innerType;
  });
  function tf(e) {
    return new ef({
      type: "optional",
      innerType: e
    });
  }
  const nf = g("ZodNullable", (e, t) => {
    xu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => No(e, n, r, s), e.unwrap = () => e._zod.def.innerType;
  });
  function Vr(e) {
    return new nf({
      type: "nullable",
      innerType: e
    });
  }
  const rf = g("ZodDefault", (e, t) => {
    Tu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => xo(e, n, r, s), e.unwrap = () => e._zod.def.innerType, e.removeDefault = e.unwrap;
  });
  function sf(e, t) {
    return new rf({
      type: "default",
      innerType: e,
      get defaultValue() {
        return typeof t == "function" ? t() : Ks(t);
      }
    });
  }
  const of = g("ZodPrefault", (e, t) => {
    Pu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => To(e, n, r, s), e.unwrap = () => e._zod.def.innerType;
  });
  function af(e, t) {
    return new of({
      type: "prefault",
      innerType: e,
      get defaultValue() {
        return typeof t == "function" ? t() : Ks(t);
      }
    });
  }
  const Vo = g("ZodNonOptional", (e, t) => {
    Cu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => Ao(e, n, r, s), e.unwrap = () => e._zod.def.innerType;
  });
  function lf(e, t) {
    return new Vo({
      type: "nonoptional",
      innerType: e,
      ...E(t)
    });
  }
  const uf = g("ZodCatch", (e, t) => {
    Zu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => Po(e, n, r, s), e.unwrap = () => e._zod.def.innerType, e.removeCatch = e.unwrap;
  });
  function cf(e, t) {
    return new uf({
      type: "catch",
      innerType: e,
      catchValue: typeof t == "function" ? t : () => t
    });
  }
  const df = g("ZodPipe", (e, t) => {
    ju.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => Co(e, n, r, s), e.in = t.in, e.out = t.out;
  });
  function Jr(e, t) {
    return new df({
      type: "pipe",
      in: e,
      out: t
    });
  }
  const ff = g("ZodReadonly", (e, t) => {
    Ru.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => Zo(e, n, r, s), e.unwrap = () => e._zod.def.innerType;
  });
  function pf(e) {
    return new ff({
      type: "readonly",
      innerType: e
    });
  }
  const hf = g("ZodLazy", (e, t) => {
    Mu.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => jo(e, n, r, s), e.unwrap = () => e._zod.def.getter();
  });
  function mf(e) {
    return new hf({
      type: "lazy",
      getter: e
    });
  }
  const nr = g("ZodCustom", (e, t) => {
    Du.init(e, t), V.init(e, t), e._zod.processJSONSchema = (n, r, s) => So(e, n);
  });
  function Jo(e, t) {
    return Tc(nr, e ?? (() => true), t);
  }
  function gf(e, t = {}) {
    return Pc(nr, e, t);
  }
  function yf(e) {
    return Cc(e);
  }
  function en(e, t = {}) {
    const n = new nr({
      type: "custom",
      check: "custom",
      fn: (r) => r instanceof e,
      abort: true,
      ...E(t)
    });
    return n._zod.bag.Class = e, n._zod.check = (r) => {
      r.value instanceof e || r.issues.push({
        code: "invalid_type",
        expected: e.name,
        input: r.value,
        inst: n,
        path: [
          ...n._zod.def.path ?? []
        ]
      });
    }, n;
  }
  var It;
  (function(e) {
    e.assertEqual = (s) => {
    };
    function t(s) {
    }
    e.assertIs = t;
    function n(s) {
      throw new Error();
    }
    e.assertNever = n, e.arrayToEnum = (s) => {
      const o = {};
      for (const a of s) o[a] = a;
      return o;
    }, e.getValidEnumValues = (s) => {
      const o = e.objectKeys(s).filter((i) => typeof s[s[i]] != "number"), a = {};
      for (const i of o) a[i] = s[i];
      return e.objectValues(a);
    }, e.objectValues = (s) => e.objectKeys(s).map(function(o) {
      return s[o];
    }), e.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
      const o = [];
      for (const a in s) Object.prototype.hasOwnProperty.call(s, a) && o.push(a);
      return o;
    }, e.find = (s, o) => {
      for (const a of s) if (o(a)) return a;
    }, e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && Number.isFinite(s) && Math.floor(s) === s;
    function r(s, o = " | ") {
      return s.map((a) => typeof a == "string" ? `'${a}'` : a).join(o);
    }
    e.joinValues = r, e.jsonStringifyReplacer = (s, o) => typeof o == "bigint" ? o.toString() : o;
  })(It || (It = {}));
  var Wr;
  (function(e) {
    e.mergeShapes = (t, n) => ({
      ...t,
      ...n
    });
  })(Wr || (Wr = {}));
  It.arrayToEnum([
    "string",
    "nan",
    "number",
    "integer",
    "float",
    "boolean",
    "date",
    "bigint",
    "symbol",
    "function",
    "undefined",
    "null",
    "array",
    "object",
    "unknown",
    "promise",
    "void",
    "never",
    "map",
    "set"
  ]);
  It.arrayToEnum([
    "invalid_type",
    "invalid_literal",
    "custom",
    "invalid_union",
    "invalid_union_discriminator",
    "invalid_enum_value",
    "unrecognized_keys",
    "invalid_arguments",
    "invalid_return_type",
    "invalid_date",
    "invalid_string",
    "too_small",
    "too_big",
    "invalid_intersection_types",
    "not_multiple_of",
    "not_finite"
  ]);
  class tn extends Error {
    get errors() {
      return this.issues;
    }
    constructor(t) {
      super(), this.issues = [], this.addIssue = (r) => {
        this.issues = [
          ...this.issues,
          r
        ];
      }, this.addIssues = (r = []) => {
        this.issues = [
          ...this.issues,
          ...r
        ];
      };
      const n = new.target.prototype;
      Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
    }
    format(t) {
      const n = t || function(o) {
        return o.message;
      }, r = {
        _errors: []
      }, s = (o) => {
        for (const a of o.issues) if (a.code === "invalid_union") a.unionErrors.map(s);
        else if (a.code === "invalid_return_type") s(a.returnTypeError);
        else if (a.code === "invalid_arguments") s(a.argumentsError);
        else if (a.path.length === 0) r._errors.push(n(a));
        else {
          let i = r, l = 0;
          for (; l < a.path.length; ) {
            const u = a.path[l];
            l === a.path.length - 1 ? (i[u] = i[u] || {
              _errors: []
            }, i[u]._errors.push(n(a))) : i[u] = i[u] || {
              _errors: []
            }, i = i[u], l++;
          }
        }
      };
      return s(this), r;
    }
    static assert(t) {
      if (!(t instanceof tn)) throw new Error(`Not a ZodError: ${t}`);
    }
    toString() {
      return this.message;
    }
    get message() {
      return JSON.stringify(this.issues, It.jsonStringifyReplacer, 2);
    }
    get isEmpty() {
      return this.issues.length === 0;
    }
    flatten(t = (n) => n.message) {
      const n = /* @__PURE__ */ Object.create(null), r = [];
      for (const s of this.issues) if (s.path.length > 0) {
        const o = s.path[0];
        n[o] = n[o] || [], n[o].push(t(s));
      } else r.push(t(s));
      return {
        formErrors: r,
        fieldErrors: n
      };
    }
    get formErrors() {
      return this.flatten();
    }
  }
  tn.create = (e) => new tn(e);
  var Kr;
  (function(e) {
    e.errToObj = (t) => typeof t == "string" ? {
      message: t
    } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
  })(Kr || (Kr = {}));
  var T;
  (function(e) {
    e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
  })(T || (T = {}));
  class Yr extends Error {
    constructor(t, n) {
      super(t), this.name = "ParseError", this.type = n.type, this.field = n.field, this.value = n.value, this.line = n.line;
    }
  }
  function On(e) {
  }
  function vf(e) {
    if (typeof e == "function") throw new TypeError("`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?");
    const { onEvent: t = On, onError: n = On, onRetry: r = On, onComment: s } = e;
    let o = "", a = true, i, l = "", u = "";
    function c(m) {
      const y = a ? m.replace(/^\xEF\xBB\xBF/, "") : m, [w, k] = bf(`${o}${y}`);
      for (const f of w) d(f);
      o = k, a = false;
    }
    function d(m) {
      if (m === "") {
        p();
        return;
      }
      if (m.startsWith(":")) {
        s && s(m.slice(m.startsWith(": ") ? 2 : 1));
        return;
      }
      const y = m.indexOf(":");
      if (y !== -1) {
        const w = m.slice(0, y), k = m[y + 1] === " " ? 2 : 1, f = m.slice(y + k);
        h(w, f, m);
        return;
      }
      h(m, "", m);
    }
    function h(m, y, w) {
      switch (m) {
        case "event":
          u = y;
          break;
        case "data":
          l = `${l}${y}
`;
          break;
        case "id":
          i = y.includes("\0") ? void 0 : y;
          break;
        case "retry":
          /^\d+$/.test(y) ? r(parseInt(y, 10)) : n(new Yr(`Invalid \`retry\` value: "${y}"`, {
            type: "invalid-retry",
            value: y,
            line: w
          }));
          break;
        default:
          n(new Yr(`Unknown field "${m.length > 20 ? `${m.slice(0, 20)}\u2026` : m}"`, {
            type: "unknown-field",
            field: m,
            value: y,
            line: w
          }));
          break;
      }
    }
    function p() {
      l.length > 0 && t({
        id: i,
        event: u || void 0,
        data: l.endsWith(`
`) ? l.slice(0, -1) : l
      }), i = void 0, l = "", u = "";
    }
    function b(m = {}) {
      o && m.consume && d(o), a = true, i = void 0, l = "", u = "", o = "";
    }
    return {
      feed: c,
      reset: b
    };
  }
  function bf(e) {
    const t = [];
    let n = "", r = 0;
    for (; r < e.length; ) {
      const s = e.indexOf("\r", r), o = e.indexOf(`
`, r);
      let a = -1;
      if (s !== -1 && o !== -1 ? a = Math.min(s, o) : s !== -1 ? s === e.length - 1 ? a = -1 : a = s : o !== -1 && (a = o), a === -1) {
        n = e.slice(r);
        break;
      } else {
        const i = e.slice(r, a);
        t.push(i), r = a + 1, e[r - 1] === "\r" && e[r] === `
` && r++;
      }
    }
    return [
      t,
      n
    ];
  }
  class _f extends TransformStream {
    constructor({ onError: t, onRetry: n, onComment: r } = {}) {
      let s;
      super({
        start(o) {
          s = vf({
            onEvent: (a) => {
              o.enqueue(a);
            },
            onError(a) {
              t === "terminate" ? o.error(a) : typeof t == "function" && t(a);
            },
            onRetry: n,
            onComment: r
          });
        },
        transform(o) {
          s.feed(o);
        }
      });
    }
  }
  var Tt = ({ prefix: e, size: t = 16, alphabet: n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", separator: r = "-" } = {}) => {
    const s = () => {
      const o = n.length, a = new Array(t);
      for (let i = 0; i < t; i++) a[i] = n[Math.random() * o | 0];
      return a.join("");
    };
    if (e == null) return s;
    if (n.includes(r)) throw new xi({
      argument: "separator",
      message: `The separator "${r}" must not be part of the alphabet "${n}".`
    });
    return () => `${e}${r}${s()}`;
  }, wf = Tt();
  function Gr(e = globalThis) {
    var t, n, r;
    return e.window ? "runtime/browser" : (t = e.navigator) != null && t.userAgent ? `runtime/${e.navigator.userAgent.toLowerCase()}` : (r = (n = e.process) == null ? void 0 : n.versions) != null && r.node ? `runtime/node.js/${e.process.version.substring(0)}` : e.EdgeRuntime ? "runtime/vercel-edge" : "runtime/unknown";
  }
  function qe(e) {
    if (e == null) return {};
    const t = {};
    if (e instanceof Headers) e.forEach((n, r) => {
      t[r.toLowerCase()] = n;
    });
    else {
      Array.isArray(e) || (e = Object.entries(e));
      for (const [n, r] of e) r != null && (t[n.toLowerCase()] = r);
    }
    return t;
  }
  function Hr(e, ...t) {
    const n = new Headers(qe(e)), r = n.get("user-agent") || "";
    return n.set("user-agent", [
      r,
      ...t
    ].filter(Boolean).join(" ")), Object.fromEntries(n.entries());
  }
  var Sf = /"(?:_|\\u005[Ff])(?:_|\\u005[Ff])(?:p|\\u0070)(?:r|\\u0072)(?:o|\\u006[Ff])(?:t|\\u0074)(?:o|\\u006[Ff])(?:_|\\u005[Ff])(?:_|\\u005[Ff])"\s*:/, kf = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
  function Qr(e) {
    const t = JSON.parse(e);
    return t === null || typeof t != "object" || Sf.test(e) === false && kf.test(e) === false ? t : If(t);
  }
  function If(e) {
    let t = [
      e
    ];
    for (; t.length; ) {
      const n = t;
      t = [];
      for (const r of n) {
        if (Object.prototype.hasOwnProperty.call(r, "__proto__")) throw new SyntaxError("Object contains forbidden prototype property");
        if (Object.prototype.hasOwnProperty.call(r, "constructor") && r.constructor !== null && typeof r.constructor == "object" && Object.prototype.hasOwnProperty.call(r.constructor, "prototype")) throw new SyntaxError("Object contains forbidden prototype property");
        for (const s in r) {
          const o = r[s];
          o && typeof o == "object" && t.push(o);
        }
      }
    }
    return e;
  }
  function Ef(e) {
    const { stackTraceLimit: t } = Error;
    try {
      Error.stackTraceLimit = 0;
    } catch {
      return Qr(e);
    }
    try {
      return Qr(e);
    } finally {
      Error.stackTraceLimit = t;
    }
  }
  function rr(e) {
    if (e.type === "object" || Array.isArray(e.type) && e.type.includes("object")) {
      e.additionalProperties = false;
      const { properties: n } = e;
      if (n != null) for (const r of Object.keys(n)) n[r] = De(n[r]);
    }
    e.items != null && (e.items = Array.isArray(e.items) ? e.items.map(De) : De(e.items)), e.anyOf != null && (e.anyOf = e.anyOf.map(De)), e.allOf != null && (e.allOf = e.allOf.map(De)), e.oneOf != null && (e.oneOf = e.oneOf.map(De));
    const { definitions: t } = e;
    if (t != null) for (const n of Object.keys(t)) t[n] = De(t[n]);
    return e;
  }
  function De(e) {
    return typeof e == "boolean" ? e : rr(e);
  }
  var Of = /* @__PURE__ */ Symbol("Let zodToJsonSchema decide on which parser to use"), Xr = {
    name: void 0,
    $refStrategy: "root",
    basePath: [
      "#"
    ],
    effectStrategy: "input",
    pipeStrategy: "all",
    dateStrategy: "format:date-time",
    mapStrategy: "entries",
    removeAdditionalStrategy: "passthrough",
    allowedAdditionalProperties: true,
    rejectedAdditionalProperties: false,
    definitionPath: "definitions",
    strictUnions: false,
    definitions: {},
    errorMessages: false,
    patternStrategy: "escape",
    applyRegexFlags: false,
    emailStrategy: "format:email",
    base64Strategy: "contentEncoding:base64",
    nameStrategy: "ref"
  }, $f = (e) => typeof e == "string" ? {
    ...Xr,
    name: e
  } : {
    ...Xr,
    ...e
  };
  function ge() {
    return {};
  }
  function zf(e, t) {
    var n, r, s;
    const o = {
      type: "array"
    };
    return (n = e.type) != null && n._def && ((s = (r = e.type) == null ? void 0 : r._def) == null ? void 0 : s.typeName) !== T.ZodAny && (o.items = D(e.type._def, {
      ...t,
      currentPath: [
        ...t.currentPath,
        "items"
      ]
    })), e.minLength && (o.minItems = e.minLength.value), e.maxLength && (o.maxItems = e.maxLength.value), e.exactLength && (o.minItems = e.exactLength.value, o.maxItems = e.exactLength.value), o;
  }
  function Nf(e) {
    const t = {
      type: "integer",
      format: "int64"
    };
    if (!e.checks) return t;
    for (const n of e.checks) switch (n.kind) {
      case "min":
        n.inclusive ? t.minimum = n.value : t.exclusiveMinimum = n.value;
        break;
      case "max":
        n.inclusive ? t.maximum = n.value : t.exclusiveMaximum = n.value;
        break;
      case "multipleOf":
        t.multipleOf = n.value;
        break;
    }
    return t;
  }
  function Af() {
    return {
      type: "boolean"
    };
  }
  function Wo(e, t) {
    return D(e.type._def, t);
  }
  var xf = (e, t) => D(e.innerType._def, t);
  function Ko(e, t, n) {
    const r = n ?? t.dateStrategy;
    if (Array.isArray(r)) return {
      anyOf: r.map((s, o) => Ko(e, t, s))
    };
    switch (r) {
      case "string":
      case "format:date-time":
        return {
          type: "string",
          format: "date-time"
        };
      case "format:date":
        return {
          type: "string",
          format: "date"
        };
      case "integer":
        return Tf(e);
    }
  }
  var Tf = (e) => {
    const t = {
      type: "integer",
      format: "unix-time"
    };
    for (const n of e.checks) switch (n.kind) {
      case "min":
        t.minimum = n.value;
        break;
      case "max":
        t.maximum = n.value;
        break;
    }
    return t;
  };
  function Pf(e, t) {
    return {
      ...D(e.innerType._def, t),
      default: e.defaultValue()
    };
  }
  function Cf(e, t) {
    return t.effectStrategy === "input" ? D(e.schema._def, t) : ge();
  }
  function Zf(e) {
    return {
      type: "string",
      enum: Array.from(e.values)
    };
  }
  var jf = (e) => "type" in e && e.type === "string" ? false : "allOf" in e;
  function Rf(e, t) {
    const n = [
      D(e.left._def, {
        ...t,
        currentPath: [
          ...t.currentPath,
          "allOf",
          "0"
        ]
      }),
      D(e.right._def, {
        ...t,
        currentPath: [
          ...t.currentPath,
          "allOf",
          "1"
        ]
      })
    ].filter((s) => !!s), r = [];
    return n.forEach((s) => {
      if (jf(s)) r.push(...s.allOf);
      else {
        let o = s;
        if ("additionalProperties" in s && s.additionalProperties === false) {
          const { additionalProperties: a, ...i } = s;
          o = i;
        }
        r.push(o);
      }
    }), r.length ? {
      allOf: r
    } : void 0;
  }
  function Mf(e) {
    const t = typeof e.value;
    return t !== "bigint" && t !== "number" && t !== "boolean" && t !== "string" ? {
      type: Array.isArray(e.value) ? "array" : "object"
    } : {
      type: t === "bigint" ? "integer" : t,
      const: e.value
    };
  }
  var $n = void 0, _e = {
    cuid: /^[cC][^\s-]{8,}$/,
    cuid2: /^[0-9a-z]+$/,
    ulid: /^[0-9A-HJKMNP-TV-Z]{26}$/,
    email: /^(?!\.)(?!.*\.\.)([a-zA-Z0-9_'+\-\.]*)[a-zA-Z0-9_+-]@([a-zA-Z0-9][a-zA-Z0-9\-]*\.)+[a-zA-Z]{2,}$/,
    emoji: () => ($n === void 0 && ($n = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), $n),
    uuid: /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/,
    ipv4: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
    ipv4Cidr: /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
    ipv6: /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
    ipv6Cidr: /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
    base64: /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
    base64url: /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
    nanoid: /^[a-zA-Z0-9_-]{21}$/,
    jwt: /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  };
  function Yo(e, t) {
    const n = {
      type: "string"
    };
    if (e.checks) for (const r of e.checks) switch (r.kind) {
      case "min":
        n.minLength = typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value;
        break;
      case "max":
        n.maxLength = typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value;
        break;
      case "email":
        switch (t.emailStrategy) {
          case "format:email":
            we(n, "email", r.message, t);
            break;
          case "format:idn-email":
            we(n, "idn-email", r.message, t);
            break;
          case "pattern:zod":
            ae(n, _e.email, r.message, t);
            break;
        }
        break;
      case "url":
        we(n, "uri", r.message, t);
        break;
      case "uuid":
        we(n, "uuid", r.message, t);
        break;
      case "regex":
        ae(n, r.regex, r.message, t);
        break;
      case "cuid":
        ae(n, _e.cuid, r.message, t);
        break;
      case "cuid2":
        ae(n, _e.cuid2, r.message, t);
        break;
      case "startsWith":
        ae(n, RegExp(`^${zn(r.value, t)}`), r.message, t);
        break;
      case "endsWith":
        ae(n, RegExp(`${zn(r.value, t)}$`), r.message, t);
        break;
      case "datetime":
        we(n, "date-time", r.message, t);
        break;
      case "date":
        we(n, "date", r.message, t);
        break;
      case "time":
        we(n, "time", r.message, t);
        break;
      case "duration":
        we(n, "duration", r.message, t);
        break;
      case "length":
        n.minLength = typeof n.minLength == "number" ? Math.max(n.minLength, r.value) : r.value, n.maxLength = typeof n.maxLength == "number" ? Math.min(n.maxLength, r.value) : r.value;
        break;
      case "includes": {
        ae(n, RegExp(zn(r.value, t)), r.message, t);
        break;
      }
      case "ip": {
        r.version !== "v6" && we(n, "ipv4", r.message, t), r.version !== "v4" && we(n, "ipv6", r.message, t);
        break;
      }
      case "base64url":
        ae(n, _e.base64url, r.message, t);
        break;
      case "jwt":
        ae(n, _e.jwt, r.message, t);
        break;
      case "cidr": {
        r.version !== "v6" && ae(n, _e.ipv4Cidr, r.message, t), r.version !== "v4" && ae(n, _e.ipv6Cidr, r.message, t);
        break;
      }
      case "emoji":
        ae(n, _e.emoji(), r.message, t);
        break;
      case "ulid": {
        ae(n, _e.ulid, r.message, t);
        break;
      }
      case "base64": {
        switch (t.base64Strategy) {
          case "format:binary": {
            we(n, "binary", r.message, t);
            break;
          }
          case "contentEncoding:base64": {
            n.contentEncoding = "base64";
            break;
          }
          case "pattern:zod": {
            ae(n, _e.base64, r.message, t);
            break;
          }
        }
        break;
      }
      case "nanoid":
        ae(n, _e.nanoid, r.message, t);
    }
    return n;
  }
  function zn(e, t) {
    return t.patternStrategy === "escape" ? Lf(e) : e;
  }
  var Df = new Set("ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz0123456789");
  function Lf(e) {
    let t = "";
    for (let n = 0; n < e.length; n++) Df.has(e[n]) || (t += "\\"), t += e[n];
    return t;
  }
  function we(e, t, n, r) {
    var s;
    e.format || (s = e.anyOf) != null && s.some((o) => o.format) ? (e.anyOf || (e.anyOf = []), e.format && (e.anyOf.push({
      format: e.format
    }), delete e.format), e.anyOf.push({
      format: t,
      ...n && r.errorMessages && {
        errorMessage: {
          format: n
        }
      }
    })) : e.format = t;
  }
  function ae(e, t, n, r) {
    var s;
    e.pattern || (s = e.allOf) != null && s.some((o) => o.pattern) ? (e.allOf || (e.allOf = []), e.pattern && (e.allOf.push({
      pattern: e.pattern
    }), delete e.pattern), e.allOf.push({
      pattern: es(t, r),
      ...n && r.errorMessages && {
        errorMessage: {
          pattern: n
        }
      }
    })) : e.pattern = es(t, r);
  }
  function es(e, t) {
    var n;
    if (!t.applyRegexFlags || !e.flags) return e.source;
    const r = {
      i: e.flags.includes("i"),
      m: e.flags.includes("m"),
      s: e.flags.includes("s")
    }, s = r.i ? e.source.toLowerCase() : e.source;
    let o = "", a = false, i = false, l = false;
    for (let u = 0; u < s.length; u++) {
      if (a) {
        o += s[u], a = false;
        continue;
      }
      if (r.i) {
        if (i) {
          if (s[u].match(/[a-z]/)) {
            l ? (o += s[u], o += `${s[u - 2]}-${s[u]}`.toUpperCase(), l = false) : s[u + 1] === "-" && ((n = s[u + 2]) != null && n.match(/[a-z]/)) ? (o += s[u], l = true) : o += `${s[u]}${s[u].toUpperCase()}`;
            continue;
          }
        } else if (s[u].match(/[a-z]/)) {
          o += `[${s[u]}${s[u].toUpperCase()}]`;
          continue;
        }
      }
      if (r.m) {
        if (s[u] === "^") {
          o += `(^|(?<=[\r
]))`;
          continue;
        } else if (s[u] === "$") {
          o += `($|(?=[\r
]))`;
          continue;
        }
      }
      if (r.s && s[u] === ".") {
        o += i ? `${s[u]}\r
` : `[${s[u]}\r
]`;
        continue;
      }
      o += s[u], s[u] === "\\" ? a = true : i && s[u] === "]" ? i = false : !i && s[u] === "[" && (i = true);
    }
    try {
      new RegExp(o);
    } catch {
      return console.warn(`Could not convert regex pattern at ${t.currentPath.join("/")} to a flag-independent form! Falling back to the flag-ignorant source`), e.source;
    }
    return o;
  }
  function Go(e, t) {
    var n, r, s, o, a, i;
    const l = {
      type: "object",
      additionalProperties: (n = D(e.valueType._def, {
        ...t,
        currentPath: [
          ...t.currentPath,
          "additionalProperties"
        ]
      })) != null ? n : t.allowedAdditionalProperties
    };
    if (((r = e.keyType) == null ? void 0 : r._def.typeName) === T.ZodString && ((s = e.keyType._def.checks) != null && s.length)) {
      const { type: u, ...c } = Yo(e.keyType._def, t);
      return {
        ...l,
        propertyNames: c
      };
    } else {
      if (((o = e.keyType) == null ? void 0 : o._def.typeName) === T.ZodEnum) return {
        ...l,
        propertyNames: {
          enum: e.keyType._def.values
        }
      };
      if (((a = e.keyType) == null ? void 0 : a._def.typeName) === T.ZodBranded && e.keyType._def.type._def.typeName === T.ZodString && ((i = e.keyType._def.type._def.checks) != null && i.length)) {
        const { type: u, ...c } = Wo(e.keyType._def, t);
        return {
          ...l,
          propertyNames: c
        };
      }
    }
    return l;
  }
  function qf(e, t) {
    if (t.mapStrategy === "record") return Go(e, t);
    const n = D(e.keyType._def, {
      ...t,
      currentPath: [
        ...t.currentPath,
        "items",
        "items",
        "0"
      ]
    }) || ge(), r = D(e.valueType._def, {
      ...t,
      currentPath: [
        ...t.currentPath,
        "items",
        "items",
        "1"
      ]
    }) || ge();
    return {
      type: "array",
      maxItems: 125,
      items: {
        type: "array",
        items: [
          n,
          r
        ],
        minItems: 2,
        maxItems: 2
      }
    };
  }
  function Uf(e) {
    const t = e.values, r = Object.keys(e.values).filter((o) => typeof t[t[o]] != "number").map((o) => t[o]), s = Array.from(new Set(r.map((o) => typeof o)));
    return {
      type: s.length === 1 ? s[0] === "string" ? "string" : "number" : [
        "string",
        "number"
      ],
      enum: r
    };
  }
  function Ff() {
    return {
      not: ge()
    };
  }
  function Bf() {
    return {
      type: "null"
    };
  }
  var Dn = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null"
  };
  function Vf(e, t) {
    const n = e.options instanceof Map ? Array.from(e.options.values()) : e.options;
    if (n.every((r) => r._def.typeName in Dn && (!r._def.checks || !r._def.checks.length))) {
      const r = n.reduce((s, o) => {
        const a = Dn[o._def.typeName];
        return a && !s.includes(a) ? [
          ...s,
          a
        ] : s;
      }, []);
      return {
        type: r.length > 1 ? r : r[0]
      };
    } else if (n.every((r) => r._def.typeName === "ZodLiteral" && !r.description)) {
      const r = n.reduce((s, o) => {
        const a = typeof o._def.value;
        switch (a) {
          case "string":
          case "number":
          case "boolean":
            return [
              ...s,
              a
            ];
          case "bigint":
            return [
              ...s,
              "integer"
            ];
          case "object":
            if (o._def.value === null) return [
              ...s,
              "null"
            ];
          default:
            return s;
        }
      }, []);
      if (r.length === n.length) {
        const s = r.filter((o, a, i) => i.indexOf(o) === a);
        return {
          type: s.length > 1 ? s : s[0],
          enum: n.reduce((o, a) => o.includes(a._def.value) ? o : [
            ...o,
            a._def.value
          ], [])
        };
      }
    } else if (n.every((r) => r._def.typeName === "ZodEnum")) return {
      type: "string",
      enum: n.reduce((r, s) => [
        ...r,
        ...s._def.values.filter((o) => !r.includes(o))
      ], [])
    };
    return Jf(e, t);
  }
  var Jf = (e, t) => {
    const n = (e.options instanceof Map ? Array.from(e.options.values()) : e.options).map((r, s) => D(r._def, {
      ...t,
      currentPath: [
        ...t.currentPath,
        "anyOf",
        `${s}`
      ]
    })).filter((r) => !!r && (!t.strictUnions || typeof r == "object" && Object.keys(r).length > 0));
    return n.length ? {
      anyOf: n
    } : void 0;
  };
  function Wf(e, t) {
    if ([
      "ZodString",
      "ZodNumber",
      "ZodBigInt",
      "ZodBoolean",
      "ZodNull"
    ].includes(e.innerType._def.typeName) && (!e.innerType._def.checks || !e.innerType._def.checks.length)) return {
      type: [
        Dn[e.innerType._def.typeName],
        "null"
      ]
    };
    const n = D(e.innerType._def, {
      ...t,
      currentPath: [
        ...t.currentPath,
        "anyOf",
        "0"
      ]
    });
    return n && {
      anyOf: [
        n,
        {
          type: "null"
        }
      ]
    };
  }
  function Kf(e) {
    const t = {
      type: "number"
    };
    if (!e.checks) return t;
    for (const n of e.checks) switch (n.kind) {
      case "int":
        t.type = "integer";
        break;
      case "min":
        n.inclusive ? t.minimum = n.value : t.exclusiveMinimum = n.value;
        break;
      case "max":
        n.inclusive ? t.maximum = n.value : t.exclusiveMaximum = n.value;
        break;
      case "multipleOf":
        t.multipleOf = n.value;
        break;
    }
    return t;
  }
  function Yf(e, t) {
    const n = {
      type: "object",
      properties: {}
    }, r = [], s = e.shape();
    for (const a in s) {
      let i = s[a];
      if (i === void 0 || i._def === void 0) continue;
      const l = Hf(i), u = D(i._def, {
        ...t,
        currentPath: [
          ...t.currentPath,
          "properties",
          a
        ],
        propertyPath: [
          ...t.currentPath,
          "properties",
          a
        ]
      });
      u !== void 0 && (n.properties[a] = u, l || r.push(a));
    }
    r.length && (n.required = r);
    const o = Gf(e, t);
    return o !== void 0 && (n.additionalProperties = o), n;
  }
  function Gf(e, t) {
    if (e.catchall._def.typeName !== "ZodNever") return D(e.catchall._def, {
      ...t,
      currentPath: [
        ...t.currentPath,
        "additionalProperties"
      ]
    });
    switch (e.unknownKeys) {
      case "passthrough":
        return t.allowedAdditionalProperties;
      case "strict":
        return t.rejectedAdditionalProperties;
      case "strip":
        return t.removeAdditionalStrategy === "strict" ? t.allowedAdditionalProperties : t.rejectedAdditionalProperties;
    }
  }
  function Hf(e) {
    try {
      return e.isOptional();
    } catch {
      return true;
    }
  }
  var Qf = (e, t) => {
    var n;
    if (t.currentPath.toString() === ((n = t.propertyPath) == null ? void 0 : n.toString())) return D(e.innerType._def, t);
    const r = D(e.innerType._def, {
      ...t,
      currentPath: [
        ...t.currentPath,
        "anyOf",
        "1"
      ]
    });
    return r ? {
      anyOf: [
        {
          not: ge()
        },
        r
      ]
    } : ge();
  }, Xf = (e, t) => {
    if (t.pipeStrategy === "input") return D(e.in._def, t);
    if (t.pipeStrategy === "output") return D(e.out._def, t);
    const n = D(e.in._def, {
      ...t,
      currentPath: [
        ...t.currentPath,
        "allOf",
        "0"
      ]
    }), r = D(e.out._def, {
      ...t,
      currentPath: [
        ...t.currentPath,
        "allOf",
        n ? "1" : "0"
      ]
    });
    return {
      allOf: [
        n,
        r
      ].filter((s) => s !== void 0)
    };
  };
  function ep(e, t) {
    return D(e.type._def, t);
  }
  function tp(e, t) {
    const r = {
      type: "array",
      uniqueItems: true,
      items: D(e.valueType._def, {
        ...t,
        currentPath: [
          ...t.currentPath,
          "items"
        ]
      })
    };
    return e.minSize && (r.minItems = e.minSize.value), e.maxSize && (r.maxItems = e.maxSize.value), r;
  }
  function np(e, t) {
    return e.rest ? {
      type: "array",
      minItems: e.items.length,
      items: e.items.map((n, r) => D(n._def, {
        ...t,
        currentPath: [
          ...t.currentPath,
          "items",
          `${r}`
        ]
      })).reduce((n, r) => r === void 0 ? n : [
        ...n,
        r
      ], []),
      additionalItems: D(e.rest._def, {
        ...t,
        currentPath: [
          ...t.currentPath,
          "additionalItems"
        ]
      })
    } : {
      type: "array",
      minItems: e.items.length,
      maxItems: e.items.length,
      items: e.items.map((n, r) => D(n._def, {
        ...t,
        currentPath: [
          ...t.currentPath,
          "items",
          `${r}`
        ]
      })).reduce((n, r) => r === void 0 ? n : [
        ...n,
        r
      ], [])
    };
  }
  function rp() {
    return {
      not: ge()
    };
  }
  function sp() {
    return ge();
  }
  var op = (e, t) => D(e.innerType._def, t), ap = (e, t, n) => {
    switch (t) {
      case T.ZodString:
        return Yo(e, n);
      case T.ZodNumber:
        return Kf(e);
      case T.ZodObject:
        return Yf(e, n);
      case T.ZodBigInt:
        return Nf(e);
      case T.ZodBoolean:
        return Af();
      case T.ZodDate:
        return Ko(e, n);
      case T.ZodUndefined:
        return rp();
      case T.ZodNull:
        return Bf();
      case T.ZodArray:
        return zf(e, n);
      case T.ZodUnion:
      case T.ZodDiscriminatedUnion:
        return Vf(e, n);
      case T.ZodIntersection:
        return Rf(e, n);
      case T.ZodTuple:
        return np(e, n);
      case T.ZodRecord:
        return Go(e, n);
      case T.ZodLiteral:
        return Mf(e);
      case T.ZodEnum:
        return Zf(e);
      case T.ZodNativeEnum:
        return Uf(e);
      case T.ZodNullable:
        return Wf(e, n);
      case T.ZodOptional:
        return Qf(e, n);
      case T.ZodMap:
        return qf(e, n);
      case T.ZodSet:
        return tp(e, n);
      case T.ZodLazy:
        return () => e.getter()._def;
      case T.ZodPromise:
        return ep(e, n);
      case T.ZodNaN:
      case T.ZodNever:
        return Ff();
      case T.ZodEffects:
        return Cf(e, n);
      case T.ZodAny:
        return ge();
      case T.ZodUnknown:
        return sp();
      case T.ZodDefault:
        return Pf(e, n);
      case T.ZodBranded:
        return Wo(e, n);
      case T.ZodReadonly:
        return op(e, n);
      case T.ZodCatch:
        return xf(e, n);
      case T.ZodPipeline:
        return Xf(e, n);
      case T.ZodFunction:
      case T.ZodVoid:
      case T.ZodSymbol:
        return;
      default:
        return /* @__PURE__ */ ((r) => {
        })();
    }
  }, ip = (e, t) => {
    let n = 0;
    for (; n < e.length && n < t.length && e[n] === t[n]; n++) ;
    return [
      (e.length - n).toString(),
      ...t.slice(n)
    ].join("/");
  };
  function D(e, t, n = false) {
    var r;
    const s = t.seen.get(e);
    if (t.override) {
      const l = (r = t.override) == null ? void 0 : r.call(t, e, t, s, n);
      if (l !== Of) return l;
    }
    if (s && !n) {
      const l = lp(s, t);
      if (l !== void 0) return l;
    }
    const o = {
      def: e,
      path: t.currentPath,
      jsonSchema: void 0
    };
    t.seen.set(e, o);
    const a = ap(e, e.typeName, t), i = typeof a == "function" ? D(a(), t) : a;
    if (i && up(e, t, i), t.postProcess) {
      const l = t.postProcess(i, e, t);
      return o.jsonSchema = i, l;
    }
    return o.jsonSchema = i, i;
  }
  var lp = (e, t) => {
    switch (t.$refStrategy) {
      case "root":
        return {
          $ref: e.path.join("/")
        };
      case "relative":
        return {
          $ref: ip(t.currentPath, e.path)
        };
      case "none":
      case "seen":
        return e.path.length < t.currentPath.length && e.path.every((n, r) => t.currentPath[r] === n) ? (console.warn(`Recursive reference detected at ${t.currentPath.join("/")}! Defaulting to any`), ge()) : t.$refStrategy === "seen" ? ge() : void 0;
    }
  }, up = (e, t, n) => (e.description && (n.description = e.description), n), cp = (e) => {
    const t = $f(e), n = t.name !== void 0 ? [
      ...t.basePath,
      t.definitionPath,
      t.name
    ] : t.basePath;
    return {
      ...t,
      currentPath: n,
      propertyPath: void 0,
      seen: new Map(Object.entries(t.definitions).map(([r, s]) => [
        s._def,
        {
          def: s._def,
          path: [
            ...t.basePath,
            t.definitionPath,
            r
          ],
          jsonSchema: void 0
        }
      ]))
    };
  }, dp = (e, t) => {
    var n;
    const r = cp(t);
    let s = typeof t == "object" && t.definitions ? Object.entries(t.definitions).reduce((u, [c, d]) => {
      var h;
      return {
        ...u,
        [c]: (h = D(d._def, {
          ...r,
          currentPath: [
            ...r.basePath,
            r.definitionPath,
            c
          ]
        }, true)) != null ? h : ge()
      };
    }, {}) : void 0;
    const o = typeof t == "string" ? t : (t == null ? void 0 : t.nameStrategy) === "title" ? void 0 : t == null ? void 0 : t.name, a = (n = D(e._def, o === void 0 ? r : {
      ...r,
      currentPath: [
        ...r.basePath,
        r.definitionPath,
        o
      ]
    }, false)) != null ? n : ge(), i = typeof t == "object" && t.name !== void 0 && t.nameStrategy === "title" ? t.name : void 0;
    i !== void 0 && (a.title = i);
    const l = o === void 0 ? s ? {
      ...a,
      [r.definitionPath]: s
    } : a : {
      $ref: [
        ...r.$refStrategy === "relative" ? [] : r.basePath,
        r.definitionPath,
        o
      ].join("/"),
      [r.definitionPath]: {
        ...s,
        [o]: a
      }
    };
    return l.$schema = "http://json-schema.org/draft-07/schema#", l;
  }, Ln = /* @__PURE__ */ Symbol.for("vercel.ai.schema");
  function fp(e) {
    let t;
    return () => (t == null && (t = e()), t);
  }
  function mn(e, { validate: t } = {}) {
    return {
      [Ln]: true,
      _type: void 0,
      get jsonSchema() {
        return typeof e == "function" && (e = e()), e;
      },
      validate: t
    };
  }
  function pp(e) {
    return typeof e == "object" && e !== null && Ln in e && e[Ln] === true && "jsonSchema" in e && "validate" in e;
  }
  function sr(e) {
    return e == null ? mn({
      properties: {},
      additionalProperties: false
    }) : pp(e) ? e : "~standard" in e ? e["~standard"].vendor === "zod" ? Ho(e) : hp(e) : e();
  }
  function hp(e) {
    return mn(() => rr(e["~standard"].jsonSchema.input({
      target: "draft-07"
    })), {
      validate: async (t) => {
        const n = await e["~standard"].validate(t);
        return "value" in n ? {
          success: true,
          value: n.value
        } : {
          success: false,
          error: new at({
            value: t,
            cause: n.issues
          })
        };
      }
    });
  }
  function mp(e, t) {
    var n;
    const r = (n = void 0) != null ? n : false;
    return mn(() => dp(e, {
      $refStrategy: r ? "root" : "none"
    }), {
      validate: async (s) => {
        const o = await e.safeParseAsync(s);
        return o.success ? {
          success: true,
          value: o.data
        } : {
          success: false,
          error: o.error
        };
      }
    });
  }
  function gp(e, t) {
    var n;
    const r = (n = void 0) != null ? n : false;
    return mn(() => rr(Xc(e, {
      target: "draft-7",
      io: "input",
      reused: r ? "ref" : "inline"
    })), {
      validate: async (s) => {
        const o = await Ro(e, s);
        return o.success ? {
          success: true,
          value: o.data
        } : {
          success: false,
          error: o.error
        };
      }
    });
  }
  function yp(e) {
    return "_zod" in e;
  }
  function Ho(e, t) {
    return yp(e) ? gp(e) : mp(e);
  }
  async function ts({ value: e, schema: t, context: n }) {
    const r = await Et({
      value: e,
      schema: t,
      context: n
    });
    if (!r.success) throw at.wrap({
      value: e,
      cause: r.error,
      context: n
    });
    return r.value;
  }
  async function Et({ value: e, schema: t, context: n }) {
    const r = sr(t);
    try {
      if (r.validate == null) return {
        success: true,
        value: e,
        rawValue: e
      };
      const s = await r.validate(e);
      return s.success ? {
        success: true,
        value: s.value,
        rawValue: e
      } : {
        success: false,
        error: at.wrap({
          value: e,
          cause: s.error,
          context: n
        }),
        rawValue: e
      };
    } catch (s) {
      return {
        success: false,
        error: at.wrap({
          value: e,
          cause: s,
          context: n
        }),
        rawValue: e
      };
    }
  }
  async function Ve({ text: e, schema: t }) {
    try {
      const n = Ef(e);
      return t == null ? {
        success: true,
        value: n,
        rawValue: n
      } : await Et({
        value: n,
        schema: t
      });
    } catch (n) {
      return {
        success: false,
        error: Sr.isInstance(n) ? n : new Sr({
          text: e,
          cause: n
        }),
        rawValue: void 0
      };
    }
  }
  function vp({ stream: e, schema: t }) {
    return e.pipeThrough(new TextDecoderStream()).pipeThrough(new _f()).pipeThrough(new TransformStream({
      async transform({ data: n }, r) {
        n !== "[DONE]" && r.enqueue(await Ve({
          text: n,
          schema: t
        }));
      }
    }));
  }
  async function Pe(e) {
    return typeof e == "function" && (e = e()), Promise.resolve(e);
  }
  var bp = Object.defineProperty, _p = (e, t) => {
    for (var n in t) bp(e, n, {
      get: t[n],
      enumerable: true
    });
  }, Qo = "AI_NoObjectGeneratedError", Xo = `vercel.ai.error.${Qo}`, wp = Symbol.for(Xo), ea, Ce = class extends xe {
    constructor({ message: e = "No object generated.", cause: t, text: n, response: r, usage: s, finishReason: o }) {
      super({
        name: Qo,
        message: e,
        cause: t
      }), this[ea] = true, this.text = n, this.response = r, this.usage = s, this.finishReason = o;
    }
    static isInstance(e) {
      return xe.hasMarker(e, Xo);
    }
  };
  ea = wp;
  var ta = "AI_UIMessageStreamError", na = `vercel.ai.error.${ta}`, Sp = Symbol.for(na), ra, Ye = class extends xe {
    constructor({ chunkType: e, chunkId: t, message: n }) {
      super({
        name: ta,
        message: n
      }), this[ra] = true, this.chunkType = e, this.chunkId = t;
    }
    static isInstance(e) {
      return xe.hasMarker(e, na);
    }
  };
  ra = Sp;
  var ns = "6.0.116", sa = de([
    _(),
    en(Uint8Array),
    en(ArrayBuffer),
    Jo((e) => {
      var t, n;
      return (n = (t = globalThis.Buffer) == null ? void 0 : t.isBuffer(e)) != null ? n : false;
    }, {
      message: "Must be a Buffer"
    })
  ]), Ot = mf(() => de([
    Ud(),
    _(),
    Md(),
    le(),
    kt(_(), Ot.optional()),
    dt(Ot)
  ])), C = kt(_(), kt(_(), Ot.optional())), oa = q({
    type: z("text"),
    text: _(),
    providerOptions: C.optional()
  }), kp = q({
    type: z("image"),
    image: de([
      sa,
      en(URL)
    ]),
    mediaType: _().optional(),
    providerOptions: C.optional()
  }), aa = q({
    type: z("file"),
    data: de([
      sa,
      en(URL)
    ]),
    filename: _().optional(),
    mediaType: _(),
    providerOptions: C.optional()
  }), Ip = q({
    type: z("reasoning"),
    text: _(),
    providerOptions: C.optional()
  }), Ep = q({
    type: z("tool-call"),
    toolCallId: _(),
    toolName: _(),
    input: ze(),
    providerOptions: C.optional(),
    providerExecuted: le().optional()
  }), Op = Wd("type", [
    q({
      type: z("text"),
      value: _(),
      providerOptions: C.optional()
    }),
    q({
      type: z("json"),
      value: Ot,
      providerOptions: C.optional()
    }),
    q({
      type: z("execution-denied"),
      reason: _().optional(),
      providerOptions: C.optional()
    }),
    q({
      type: z("error-text"),
      value: _(),
      providerOptions: C.optional()
    }),
    q({
      type: z("error-json"),
      value: Ot,
      providerOptions: C.optional()
    }),
    q({
      type: z("content"),
      value: dt(de([
        q({
          type: z("text"),
          text: _(),
          providerOptions: C.optional()
        }),
        q({
          type: z("media"),
          data: _(),
          mediaType: _()
        }),
        q({
          type: z("file-data"),
          data: _(),
          mediaType: _(),
          filename: _().optional(),
          providerOptions: C.optional()
        }),
        q({
          type: z("file-url"),
          url: _(),
          providerOptions: C.optional()
        }),
        q({
          type: z("file-id"),
          fileId: de([
            _(),
            kt(_(), _())
          ]),
          providerOptions: C.optional()
        }),
        q({
          type: z("image-data"),
          data: _(),
          mediaType: _(),
          providerOptions: C.optional()
        }),
        q({
          type: z("image-url"),
          url: _(),
          providerOptions: C.optional()
        }),
        q({
          type: z("image-file-id"),
          fileId: de([
            _(),
            kt(_(), _())
          ]),
          providerOptions: C.optional()
        }),
        q({
          type: z("custom"),
          providerOptions: C.optional()
        })
      ]))
    })
  ]), ia = q({
    type: z("tool-result"),
    toolCallId: _(),
    toolName: _(),
    output: Op,
    providerOptions: C.optional()
  }), $p = q({
    type: z("tool-approval-request"),
    approvalId: _(),
    toolCallId: _()
  }), zp = q({
    type: z("tool-approval-response"),
    approvalId: _(),
    approved: le(),
    reason: _().optional()
  }), Np = q({
    role: z("system"),
    content: _(),
    providerOptions: C.optional()
  }), Ap = q({
    role: z("user"),
    content: de([
      _(),
      dt(de([
        oa,
        kp,
        aa
      ]))
    ]),
    providerOptions: C.optional()
  }), xp = q({
    role: z("assistant"),
    content: de([
      _(),
      dt(de([
        oa,
        aa,
        Ip,
        Ep,
        ia,
        $p
      ]))
    ]),
    providerOptions: C.optional()
  }), Tp = q({
    role: z("tool"),
    content: dt(de([
      ia,
      zp
    ])),
    providerOptions: C.optional()
  });
  de([
    Np,
    Ap,
    xp,
    Tp
  ]);
  function la(e, t) {
    if (e === void 0 && t === void 0) return;
    if (e === void 0) return t;
    if (t === void 0) return e;
    const n = {
      ...e
    };
    for (const r in t) if (Object.prototype.hasOwnProperty.call(t, r)) {
      const s = t[r];
      if (s === void 0) continue;
      const o = r in e ? e[r] : void 0, a = s !== null && typeof s == "object" && !Array.isArray(s) && !(s instanceof Date) && !(s instanceof RegExp), i = o != null && typeof o == "object" && !Array.isArray(o) && !(o instanceof Date) && !(o instanceof RegExp);
      a && i ? n[r] = la(o, s) : n[r] = s;
    }
    return n;
  }
  var Pp = {};
  _p(Pp, {
    array: () => Rp,
    choice: () => Mp,
    json: () => Dp,
    object: () => jp,
    text: () => Zp
  });
  function Cp(e) {
    const t = [
      "ROOT"
    ];
    let n = -1, r = null;
    function s(l, u, c) {
      switch (l) {
        case '"': {
          n = u, t.pop(), t.push(c), t.push("INSIDE_STRING");
          break;
        }
        case "f":
        case "t":
        case "n": {
          n = u, r = u, t.pop(), t.push(c), t.push("INSIDE_LITERAL");
          break;
        }
        case "-": {
          t.pop(), t.push(c), t.push("INSIDE_NUMBER");
          break;
        }
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9": {
          n = u, t.pop(), t.push(c), t.push("INSIDE_NUMBER");
          break;
        }
        case "{": {
          n = u, t.pop(), t.push(c), t.push("INSIDE_OBJECT_START");
          break;
        }
        case "[": {
          n = u, t.pop(), t.push(c), t.push("INSIDE_ARRAY_START");
          break;
        }
      }
    }
    function o(l, u) {
      switch (l) {
        case ",": {
          t.pop(), t.push("INSIDE_OBJECT_AFTER_COMMA");
          break;
        }
        case "}": {
          n = u, t.pop();
          break;
        }
      }
    }
    function a(l, u) {
      switch (l) {
        case ",": {
          t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
          break;
        }
        case "]": {
          n = u, t.pop();
          break;
        }
      }
    }
    for (let l = 0; l < e.length; l++) {
      const u = e[l];
      switch (t[t.length - 1]) {
        case "ROOT":
          s(u, l, "FINISH");
          break;
        case "INSIDE_OBJECT_START": {
          switch (u) {
            case '"': {
              t.pop(), t.push("INSIDE_OBJECT_KEY");
              break;
            }
            case "}": {
              n = l, t.pop();
              break;
            }
          }
          break;
        }
        case "INSIDE_OBJECT_AFTER_COMMA": {
          u === '"' && (t.pop(), t.push("INSIDE_OBJECT_KEY"));
          break;
        }
        case "INSIDE_OBJECT_KEY": {
          u === '"' && (t.pop(), t.push("INSIDE_OBJECT_AFTER_KEY"));
          break;
        }
        case "INSIDE_OBJECT_AFTER_KEY": {
          u === ":" && (t.pop(), t.push("INSIDE_OBJECT_BEFORE_VALUE"));
          break;
        }
        case "INSIDE_OBJECT_BEFORE_VALUE": {
          s(u, l, "INSIDE_OBJECT_AFTER_VALUE");
          break;
        }
        case "INSIDE_OBJECT_AFTER_VALUE": {
          o(u, l);
          break;
        }
        case "INSIDE_STRING": {
          switch (u) {
            case '"': {
              t.pop(), n = l;
              break;
            }
            case "\\": {
              t.push("INSIDE_STRING_ESCAPE");
              break;
            }
            default:
              n = l;
          }
          break;
        }
        case "INSIDE_ARRAY_START": {
          u === "]" ? (n = l, t.pop()) : (n = l, s(u, l, "INSIDE_ARRAY_AFTER_VALUE"));
          break;
        }
        case "INSIDE_ARRAY_AFTER_VALUE": {
          switch (u) {
            case ",": {
              t.pop(), t.push("INSIDE_ARRAY_AFTER_COMMA");
              break;
            }
            case "]": {
              n = l, t.pop();
              break;
            }
            default: {
              n = l;
              break;
            }
          }
          break;
        }
        case "INSIDE_ARRAY_AFTER_COMMA": {
          s(u, l, "INSIDE_ARRAY_AFTER_VALUE");
          break;
        }
        case "INSIDE_STRING_ESCAPE": {
          t.pop(), n = l;
          break;
        }
        case "INSIDE_NUMBER": {
          switch (u) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9": {
              n = l;
              break;
            }
            case "e":
            case "E":
            case "-":
            case ".":
              break;
            case ",": {
              t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && a(u, l), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && o(u, l);
              break;
            }
            case "}": {
              t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" && o(u, l);
              break;
            }
            case "]": {
              t.pop(), t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && a(u, l);
              break;
            }
            default: {
              t.pop();
              break;
            }
          }
          break;
        }
        case "INSIDE_LITERAL": {
          const d = e.substring(r, l + 1);
          !"false".startsWith(d) && !"true".startsWith(d) && !"null".startsWith(d) ? (t.pop(), t[t.length - 1] === "INSIDE_OBJECT_AFTER_VALUE" ? o(u, l) : t[t.length - 1] === "INSIDE_ARRAY_AFTER_VALUE" && a(u, l)) : n = l;
          break;
        }
      }
    }
    let i = e.slice(0, n + 1);
    for (let l = t.length - 1; l >= 0; l--) switch (t[l]) {
      case "INSIDE_STRING": {
        i += '"';
        break;
      }
      case "INSIDE_OBJECT_KEY":
      case "INSIDE_OBJECT_AFTER_KEY":
      case "INSIDE_OBJECT_AFTER_COMMA":
      case "INSIDE_OBJECT_START":
      case "INSIDE_OBJECT_BEFORE_VALUE":
      case "INSIDE_OBJECT_AFTER_VALUE": {
        i += "}";
        break;
      }
      case "INSIDE_ARRAY_START":
      case "INSIDE_ARRAY_AFTER_COMMA":
      case "INSIDE_ARRAY_AFTER_VALUE": {
        i += "]";
        break;
      }
      case "INSIDE_LITERAL": {
        const c = e.substring(r, e.length);
        "true".startsWith(c) ? i += "true".slice(c.length) : "false".startsWith(c) ? i += "false".slice(c.length) : "null".startsWith(c) && (i += "null".slice(c.length));
      }
    }
    return i;
  }
  async function Pt(e) {
    if (e === void 0) return {
      value: void 0,
      state: "undefined-input"
    };
    let t = await Ve({
      text: e
    });
    return t.success ? {
      value: t.value,
      state: "successful-parse"
    } : (t = await Ve({
      text: Cp(e)
    }), t.success ? {
      value: t.value,
      state: "repaired-parse"
    } : {
      value: void 0,
      state: "failed-parse"
    });
  }
  var Zp = () => ({
    name: "text",
    responseFormat: Promise.resolve({
      type: "text"
    }),
    async parseCompleteOutput({ text: e }) {
      return e;
    },
    async parsePartialOutput({ text: e }) {
      return {
        partial: e
      };
    },
    createElementStreamTransform() {
    }
  }), jp = ({ schema: e, name: t, description: n }) => {
    const r = sr(e);
    return {
      name: "object",
      responseFormat: Pe(r.jsonSchema).then((s) => ({
        type: "json",
        schema: s,
        ...t != null && {
          name: t
        },
        ...n != null && {
          description: n
        }
      })),
      async parseCompleteOutput({ text: s }, o) {
        const a = await Ve({
          text: s
        });
        if (!a.success) throw new Ce({
          message: "No object generated: could not parse the response.",
          cause: a.error,
          text: s,
          response: o.response,
          usage: o.usage,
          finishReason: o.finishReason
        });
        const i = await Et({
          value: a.value,
          schema: r
        });
        if (!i.success) throw new Ce({
          message: "No object generated: response did not match schema.",
          cause: i.error,
          text: s,
          response: o.response,
          usage: o.usage,
          finishReason: o.finishReason
        });
        return i.value;
      },
      async parsePartialOutput({ text: s }) {
        const o = await Pt(s);
        switch (o.state) {
          case "failed-parse":
          case "undefined-input":
            return;
          case "repaired-parse":
          case "successful-parse":
            return {
              partial: o.value
            };
        }
      },
      createElementStreamTransform() {
      }
    };
  }, Rp = ({ element: e, name: t, description: n }) => {
    const r = sr(e);
    return {
      name: "array",
      responseFormat: Pe(r.jsonSchema).then((s) => {
        const { $schema: o, ...a } = s;
        return {
          type: "json",
          schema: {
            $schema: "http://json-schema.org/draft-07/schema#",
            type: "object",
            properties: {
              elements: {
                type: "array",
                items: a
              }
            },
            required: [
              "elements"
            ],
            additionalProperties: false
          },
          ...t != null && {
            name: t
          },
          ...n != null && {
            description: n
          }
        };
      }),
      async parseCompleteOutput({ text: s }, o) {
        const a = await Ve({
          text: s
        });
        if (!a.success) throw new Ce({
          message: "No object generated: could not parse the response.",
          cause: a.error,
          text: s,
          response: o.response,
          usage: o.usage,
          finishReason: o.finishReason
        });
        const i = a.value;
        if (i == null || typeof i != "object" || !("elements" in i) || !Array.isArray(i.elements)) throw new Ce({
          message: "No object generated: response did not match schema.",
          cause: new at({
            value: i,
            cause: "response must be an object with an elements array"
          }),
          text: s,
          response: o.response,
          usage: o.usage,
          finishReason: o.finishReason
        });
        for (const l of i.elements) {
          const u = await Et({
            value: l,
            schema: r
          });
          if (!u.success) throw new Ce({
            message: "No object generated: response did not match schema.",
            cause: u.error,
            text: s,
            response: o.response,
            usage: o.usage,
            finishReason: o.finishReason
          });
        }
        return i.elements;
      },
      async parsePartialOutput({ text: s }) {
        const o = await Pt(s);
        switch (o.state) {
          case "failed-parse":
          case "undefined-input":
            return;
          case "repaired-parse":
          case "successful-parse": {
            const a = o.value;
            if (a == null || typeof a != "object" || !("elements" in a) || !Array.isArray(a.elements)) return;
            const i = o.state === "repaired-parse" && a.elements.length > 0 ? a.elements.slice(0, -1) : a.elements, l = [];
            for (const u of i) {
              const c = await Et({
                value: u,
                schema: r
              });
              c.success && l.push(c.value);
            }
            return {
              partial: l
            };
          }
        }
      },
      createElementStreamTransform() {
        let s = 0;
        return new TransformStream({
          transform({ partialOutput: o }, a) {
            if (o != null) for (; s < o.length; s++) a.enqueue(o[s]);
          }
        });
      }
    };
  }, Mp = ({ options: e, name: t, description: n }) => ({
    name: "choice",
    responseFormat: Promise.resolve({
      type: "json",
      schema: {
        $schema: "http://json-schema.org/draft-07/schema#",
        type: "object",
        properties: {
          result: {
            type: "string",
            enum: e
          }
        },
        required: [
          "result"
        ],
        additionalProperties: false
      },
      ...t != null && {
        name: t
      },
      ...n != null && {
        description: n
      }
    }),
    async parseCompleteOutput({ text: r }, s) {
      const o = await Ve({
        text: r
      });
      if (!o.success) throw new Ce({
        message: "No object generated: could not parse the response.",
        cause: o.error,
        text: r,
        response: s.response,
        usage: s.usage,
        finishReason: s.finishReason
      });
      const a = o.value;
      if (a == null || typeof a != "object" || !("result" in a) || typeof a.result != "string" || !e.includes(a.result)) throw new Ce({
        message: "No object generated: response did not match schema.",
        cause: new at({
          value: a,
          cause: "response must be an object that contains a choice value."
        }),
        text: r,
        response: s.response,
        usage: s.usage,
        finishReason: s.finishReason
      });
      return a.result;
    },
    async parsePartialOutput({ text: r }) {
      const s = await Pt(r);
      switch (s.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse": {
          const o = s.value;
          if (o == null || typeof o != "object" || !("result" in o) || typeof o.result != "string") return;
          const a = e.filter((i) => i.startsWith(o.result));
          return s.state === "successful-parse" ? a.includes(o.result) ? {
            partial: o.result
          } : void 0 : a.length === 1 ? {
            partial: a[0]
          } : void 0;
        }
      }
    },
    createElementStreamTransform() {
    }
  }), Dp = ({ name: e, description: t } = {}) => ({
    name: "json",
    responseFormat: Promise.resolve({
      type: "json",
      ...e != null && {
        name: e
      },
      ...t != null && {
        description: t
      }
    }),
    async parseCompleteOutput({ text: n }, r) {
      const s = await Ve({
        text: n
      });
      if (!s.success) throw new Ce({
        message: "No object generated: could not parse the response.",
        cause: s.error,
        text: n,
        response: r.response,
        usage: r.usage,
        finishReason: r.finishReason
      });
      return s.value;
    },
    async parsePartialOutput({ text: n }) {
      const r = await Pt(n);
      switch (r.state) {
        case "failed-parse":
        case "undefined-input":
          return;
        case "repaired-parse":
        case "successful-parse":
          return r.value === void 0 ? void 0 : {
            partial: r.value
          };
      }
    },
    createElementStreamTransform() {
    }
  });
  Tt({
    prefix: "aitxt",
    size: 24
  });
  (class extends TransformStream {
    constructor() {
      super({
        transform(e, t) {
          t.enqueue(`data: ${JSON.stringify(e)}

`);
        },
        flush(e) {
          e.enqueue(`data: [DONE]

`);
        }
      });
    }
  });
  var Lp = fp(() => Ho(de([
    F({
      type: z("text-start"),
      id: _(),
      providerMetadata: C.optional()
    }),
    F({
      type: z("text-delta"),
      id: _(),
      delta: _(),
      providerMetadata: C.optional()
    }),
    F({
      type: z("text-end"),
      id: _(),
      providerMetadata: C.optional()
    }),
    F({
      type: z("error"),
      errorText: _()
    }),
    F({
      type: z("tool-input-start"),
      toolCallId: _(),
      toolName: _(),
      providerExecuted: le().optional(),
      providerMetadata: C.optional(),
      dynamic: le().optional(),
      title: _().optional()
    }),
    F({
      type: z("tool-input-delta"),
      toolCallId: _(),
      inputTextDelta: _()
    }),
    F({
      type: z("tool-input-available"),
      toolCallId: _(),
      toolName: _(),
      input: ze(),
      providerExecuted: le().optional(),
      providerMetadata: C.optional(),
      dynamic: le().optional(),
      title: _().optional()
    }),
    F({
      type: z("tool-input-error"),
      toolCallId: _(),
      toolName: _(),
      input: ze(),
      providerExecuted: le().optional(),
      providerMetadata: C.optional(),
      dynamic: le().optional(),
      errorText: _(),
      title: _().optional()
    }),
    F({
      type: z("tool-approval-request"),
      approvalId: _(),
      toolCallId: _()
    }),
    F({
      type: z("tool-output-available"),
      toolCallId: _(),
      output: ze(),
      providerExecuted: le().optional(),
      dynamic: le().optional(),
      preliminary: le().optional()
    }),
    F({
      type: z("tool-output-error"),
      toolCallId: _(),
      errorText: _(),
      providerExecuted: le().optional(),
      dynamic: le().optional()
    }),
    F({
      type: z("tool-output-denied"),
      toolCallId: _()
    }),
    F({
      type: z("reasoning-start"),
      id: _(),
      providerMetadata: C.optional()
    }),
    F({
      type: z("reasoning-delta"),
      id: _(),
      delta: _(),
      providerMetadata: C.optional()
    }),
    F({
      type: z("reasoning-end"),
      id: _(),
      providerMetadata: C.optional()
    }),
    F({
      type: z("source-url"),
      sourceId: _(),
      url: _(),
      title: _().optional(),
      providerMetadata: C.optional()
    }),
    F({
      type: z("source-document"),
      sourceId: _(),
      mediaType: _(),
      title: _(),
      filename: _().optional(),
      providerMetadata: C.optional()
    }),
    F({
      type: z("file"),
      url: _(),
      mediaType: _(),
      providerMetadata: C.optional()
    }),
    F({
      type: Jo((e) => typeof e == "string" && e.startsWith("data-"), {
        message: 'Type must start with "data-"'
      }),
      id: _().optional(),
      data: ze(),
      transient: le().optional()
    }),
    F({
      type: z("start-step")
    }),
    F({
      type: z("finish-step")
    }),
    F({
      type: z("start"),
      messageId: _().optional(),
      messageMetadata: ze().optional()
    }),
    F({
      type: z("finish"),
      finishReason: Fo([
        "stop",
        "length",
        "content-filter",
        "tool-calls",
        "error",
        "other"
      ]).optional(),
      messageMetadata: ze().optional()
    }),
    F({
      type: z("abort"),
      reason: _().optional()
    }),
    F({
      type: z("message-metadata"),
      messageMetadata: ze()
    })
  ])));
  function qp(e) {
    return e.type.startsWith("data-");
  }
  function qn(e) {
    return e.type.startsWith("tool-");
  }
  function Up(e) {
    return e.type === "dynamic-tool";
  }
  function nn(e) {
    return qn(e) || Up(e);
  }
  function rs(e) {
    return e.type.split("-").slice(1).join("-");
  }
  function Fp({ lastMessage: e, messageId: t }) {
    return {
      message: (e == null ? void 0 : e.role) === "assistant" ? e : {
        id: t,
        metadata: void 0,
        role: "assistant",
        parts: []
      },
      activeTextParts: {},
      activeReasoningParts: {},
      partialToolCalls: {}
    };
  }
  function Bp({ stream: e, messageMetadataSchema: t, dataPartSchemas: n, runUpdateMessageJob: r, onError: s, onToolCall: o, onData: a }) {
    return e.pipeThrough(new TransformStream({
      async transform(i, l) {
        await r(async ({ state: u, write: c }) => {
          var d, h, p, b;
          function m(f) {
            const I = u.message.parts.filter(nn).find((A) => A.toolCallId === f);
            if (I == null) throw new Ye({
              chunkType: "tool-invocation",
              chunkId: f,
              message: `No tool invocation found for tool call ID "${f}".`
            });
            return I;
          }
          function y(f) {
            var S;
            const I = u.message.parts.find((O) => qn(O) && O.toolCallId === f.toolCallId), A = f, N = I;
            I != null ? (I.state = f.state, N.input = A.input, N.output = A.output, N.errorText = A.errorText, N.rawInput = A.rawInput, N.preliminary = A.preliminary, f.title !== void 0 && (N.title = f.title), N.providerExecuted = (S = A.providerExecuted) != null ? S : I.providerExecuted, A.providerMetadata != null && (I.callProviderMetadata = A.providerMetadata)) : u.message.parts.push({
              type: `tool-${f.toolName}`,
              toolCallId: f.toolCallId,
              state: f.state,
              title: f.title,
              input: A.input,
              output: A.output,
              rawInput: A.rawInput,
              errorText: A.errorText,
              providerExecuted: A.providerExecuted,
              preliminary: A.preliminary,
              ...A.providerMetadata != null ? {
                callProviderMetadata: A.providerMetadata
              } : {}
            });
          }
          function w(f) {
            var S, I;
            const A = u.message.parts.find((P) => P.type === "dynamic-tool" && P.toolCallId === f.toolCallId), N = f, O = A;
            A != null ? (A.state = f.state, O.toolName = f.toolName, O.input = N.input, O.output = N.output, O.errorText = N.errorText, O.rawInput = (S = N.rawInput) != null ? S : O.rawInput, O.preliminary = N.preliminary, f.title !== void 0 && (O.title = f.title), O.providerExecuted = (I = N.providerExecuted) != null ? I : A.providerExecuted, N.providerMetadata != null && (A.callProviderMetadata = N.providerMetadata)) : u.message.parts.push({
              type: "dynamic-tool",
              toolName: f.toolName,
              toolCallId: f.toolCallId,
              state: f.state,
              input: N.input,
              output: N.output,
              errorText: N.errorText,
              preliminary: N.preliminary,
              providerExecuted: N.providerExecuted,
              title: f.title,
              ...N.providerMetadata != null ? {
                callProviderMetadata: N.providerMetadata
              } : {}
            });
          }
          async function k(f) {
            if (f != null) {
              const S = u.message.metadata != null ? la(u.message.metadata, f) : f;
              t != null && await ts({
                value: S,
                schema: t,
                context: {
                  field: "message.metadata",
                  entityId: u.message.id
                }
              }), u.message.metadata = S;
            }
          }
          switch (i.type) {
            case "text-start": {
              const f = {
                type: "text",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming"
              };
              u.activeTextParts[i.id] = f, u.message.parts.push(f), c();
              break;
            }
            case "text-delta": {
              const f = u.activeTextParts[i.id];
              if (f == null) throw new Ye({
                chunkType: "text-delta",
                chunkId: i.id,
                message: `Received text-delta for missing text part with ID "${i.id}". Ensure a "text-start" chunk is sent before any "text-delta" chunks.`
              });
              f.text += i.delta, f.providerMetadata = (d = i.providerMetadata) != null ? d : f.providerMetadata, c();
              break;
            }
            case "text-end": {
              const f = u.activeTextParts[i.id];
              if (f == null) throw new Ye({
                chunkType: "text-end",
                chunkId: i.id,
                message: `Received text-end for missing text part with ID "${i.id}". Ensure a "text-start" chunk is sent before any "text-end" chunks.`
              });
              f.state = "done", f.providerMetadata = (h = i.providerMetadata) != null ? h : f.providerMetadata, delete u.activeTextParts[i.id], c();
              break;
            }
            case "reasoning-start": {
              const f = {
                type: "reasoning",
                text: "",
                providerMetadata: i.providerMetadata,
                state: "streaming"
              };
              u.activeReasoningParts[i.id] = f, u.message.parts.push(f), c();
              break;
            }
            case "reasoning-delta": {
              const f = u.activeReasoningParts[i.id];
              if (f == null) throw new Ye({
                chunkType: "reasoning-delta",
                chunkId: i.id,
                message: `Received reasoning-delta for missing reasoning part with ID "${i.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-delta" chunks.`
              });
              f.text += i.delta, f.providerMetadata = (p = i.providerMetadata) != null ? p : f.providerMetadata, c();
              break;
            }
            case "reasoning-end": {
              const f = u.activeReasoningParts[i.id];
              if (f == null) throw new Ye({
                chunkType: "reasoning-end",
                chunkId: i.id,
                message: `Received reasoning-end for missing reasoning part with ID "${i.id}". Ensure a "reasoning-start" chunk is sent before any "reasoning-end" chunks.`
              });
              f.providerMetadata = (b = i.providerMetadata) != null ? b : f.providerMetadata, f.state = "done", delete u.activeReasoningParts[i.id], c();
              break;
            }
            case "file": {
              u.message.parts.push({
                type: "file",
                mediaType: i.mediaType,
                url: i.url,
                ...i.providerMetadata != null ? {
                  providerMetadata: i.providerMetadata
                } : {}
              }), c();
              break;
            }
            case "source-url": {
              u.message.parts.push({
                type: "source-url",
                sourceId: i.sourceId,
                url: i.url,
                title: i.title,
                providerMetadata: i.providerMetadata
              }), c();
              break;
            }
            case "source-document": {
              u.message.parts.push({
                type: "source-document",
                sourceId: i.sourceId,
                mediaType: i.mediaType,
                title: i.title,
                filename: i.filename,
                providerMetadata: i.providerMetadata
              }), c();
              break;
            }
            case "tool-input-start": {
              const f = u.message.parts.filter(qn);
              u.partialToolCalls[i.toolCallId] = {
                text: "",
                toolName: i.toolName,
                index: f.length,
                dynamic: i.dynamic,
                title: i.title
              }, i.dynamic ? w({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-streaming",
                input: void 0,
                providerExecuted: i.providerExecuted,
                title: i.title,
                providerMetadata: i.providerMetadata
              }) : y({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-streaming",
                input: void 0,
                providerExecuted: i.providerExecuted,
                title: i.title,
                providerMetadata: i.providerMetadata
              }), c();
              break;
            }
            case "tool-input-delta": {
              const f = u.partialToolCalls[i.toolCallId];
              if (f == null) throw new Ye({
                chunkType: "tool-input-delta",
                chunkId: i.toolCallId,
                message: `Received tool-input-delta for missing tool call with ID "${i.toolCallId}". Ensure a "tool-input-start" chunk is sent before any "tool-input-delta" chunks.`
              });
              f.text += i.inputTextDelta;
              const { value: S } = await Pt(f.text);
              f.dynamic ? w({
                toolCallId: i.toolCallId,
                toolName: f.toolName,
                state: "input-streaming",
                input: S,
                title: f.title
              }) : y({
                toolCallId: i.toolCallId,
                toolName: f.toolName,
                state: "input-streaming",
                input: S,
                title: f.title
              }), c();
              break;
            }
            case "tool-input-available": {
              i.dynamic ? w({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-available",
                input: i.input,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata,
                title: i.title
              }) : y({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "input-available",
                input: i.input,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata,
                title: i.title
              }), c(), o && !i.providerExecuted && await o({
                toolCall: i
              });
              break;
            }
            case "tool-input-error": {
              const f = u.message.parts.filter(nn).find((I) => I.toolCallId === i.toolCallId);
              (f != null ? f.type === "dynamic-tool" : !!i.dynamic) ? w({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "output-error",
                input: i.input,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata
              }) : y({
                toolCallId: i.toolCallId,
                toolName: i.toolName,
                state: "output-error",
                input: void 0,
                rawInput: i.input,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                providerMetadata: i.providerMetadata
              }), c();
              break;
            }
            case "tool-approval-request": {
              const f = m(i.toolCallId);
              f.state = "approval-requested", f.approval = {
                id: i.approvalId
              }, c();
              break;
            }
            case "tool-output-denied": {
              const f = m(i.toolCallId);
              f.state = "output-denied", c();
              break;
            }
            case "tool-output-available": {
              const f = m(i.toolCallId);
              f.type === "dynamic-tool" ? w({
                toolCallId: i.toolCallId,
                toolName: f.toolName,
                state: "output-available",
                input: f.input,
                output: i.output,
                preliminary: i.preliminary,
                providerExecuted: i.providerExecuted,
                title: f.title
              }) : y({
                toolCallId: i.toolCallId,
                toolName: rs(f),
                state: "output-available",
                input: f.input,
                output: i.output,
                providerExecuted: i.providerExecuted,
                preliminary: i.preliminary,
                title: f.title
              }), c();
              break;
            }
            case "tool-output-error": {
              const f = m(i.toolCallId);
              f.type === "dynamic-tool" ? w({
                toolCallId: i.toolCallId,
                toolName: f.toolName,
                state: "output-error",
                input: f.input,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                title: f.title
              }) : y({
                toolCallId: i.toolCallId,
                toolName: rs(f),
                state: "output-error",
                input: f.input,
                rawInput: f.rawInput,
                errorText: i.errorText,
                providerExecuted: i.providerExecuted,
                title: f.title
              }), c();
              break;
            }
            case "start-step": {
              u.message.parts.push({
                type: "step-start"
              });
              break;
            }
            case "finish-step": {
              u.activeTextParts = {}, u.activeReasoningParts = {};
              break;
            }
            case "start": {
              i.messageId != null && (u.message.id = i.messageId), await k(i.messageMetadata), (i.messageId != null || i.messageMetadata != null) && c();
              break;
            }
            case "finish": {
              i.finishReason != null && (u.finishReason = i.finishReason), await k(i.messageMetadata), i.messageMetadata != null && c();
              break;
            }
            case "message-metadata": {
              await k(i.messageMetadata), i.messageMetadata != null && c();
              break;
            }
            case "error": {
              s == null ? void 0 : s(new Error(i.errorText));
              break;
            }
            default:
              if (qp(i)) {
                if ((n == null ? void 0 : n[i.type]) != null) {
                  const I = u.message.parts.findIndex((N) => "id" in N && "data" in N && N.id === i.id && N.type === i.type), A = I >= 0 ? I : u.message.parts.length;
                  await ts({
                    value: i.data,
                    schema: n[i.type],
                    context: {
                      field: `message.parts[${A}].data`,
                      entityName: i.type,
                      entityId: i.id
                    }
                  });
                }
                const f = i;
                if (f.transient) {
                  a == null ? void 0 : a(f);
                  break;
                }
                const S = f.id != null ? u.message.parts.find((I) => f.type === I.type && f.id === I.id) : void 0;
                S != null ? S.data = f.data : u.message.parts.push(f), a == null ? void 0 : a(f), c();
              }
          }
          l.enqueue(i);
        });
      }
    }));
  }
  async function Vp({ stream: e, onError: t }) {
    const n = e.getReader();
    try {
      for (; ; ) {
        const { done: r } = await n.read();
        if (r) break;
      }
    } catch (r) {
      t == null ? void 0 : t(r);
    } finally {
      n.releaseLock();
    }
  }
  Tt({
    prefix: "aitxt",
    size: 24
  });
  Tt({
    prefix: "aiobj",
    size: 24
  });
  var Jp = class {
    constructor() {
      this.queue = [], this.isProcessing = false;
    }
    async processQueue() {
      if (!this.isProcessing) {
        for (this.isProcessing = true; this.queue.length > 0; ) await this.queue[0](), this.queue.shift();
        this.isProcessing = false;
      }
    }
    async run(e) {
      return new Promise((t, n) => {
        this.queue.push(async () => {
          try {
            await e(), t();
          } catch (r) {
            n(r);
          }
        }), this.processQueue();
      });
    }
  };
  Tt({
    prefix: "aiobj",
    size: 24
  });
  async function Wp(e) {
    if (e == null) return [];
    if (!globalThis.FileList || !(e instanceof globalThis.FileList)) throw new Error("FileList is not supported in the current environment");
    return Promise.all(Array.from(e).map(async (t) => {
      const { name: n, type: r } = t, s = await new Promise((o, a) => {
        const i = new FileReader();
        i.onload = (l) => {
          var u;
          o((u = l.target) == null ? void 0 : u.result);
        }, i.onerror = (l) => a(l), i.readAsDataURL(t);
      });
      return {
        type: "file",
        mediaType: r,
        filename: n,
        url: s
      };
    }));
  }
  var Kp = class {
    constructor({ api: e = "/api/chat", credentials: t, headers: n, body: r, fetch: s, prepareSendMessagesRequest: o, prepareReconnectToStreamRequest: a }) {
      this.api = e, this.credentials = t, this.headers = n, this.body = r, this.fetch = s, this.prepareSendMessagesRequest = o, this.prepareReconnectToStreamRequest = a;
    }
    async sendMessages({ abortSignal: e, ...t }) {
      var n, r, s, o, a;
      const i = await Pe(this.body), l = await Pe(this.headers), u = await Pe(this.credentials), c = {
        ...qe(l),
        ...qe(t.headers)
      }, d = await ((n = this.prepareSendMessagesRequest) == null ? void 0 : n.call(this, {
        api: this.api,
        id: t.chatId,
        messages: t.messages,
        body: {
          ...i,
          ...t.body
        },
        headers: c,
        credentials: u,
        requestMetadata: t.metadata,
        trigger: t.trigger,
        messageId: t.messageId
      })), h = (r = d == null ? void 0 : d.api) != null ? r : this.api, p = (d == null ? void 0 : d.headers) !== void 0 ? qe(d.headers) : c, b = (d == null ? void 0 : d.body) !== void 0 ? d.body : {
        ...i,
        ...t.body,
        id: t.chatId,
        messages: t.messages,
        trigger: t.trigger,
        messageId: t.messageId
      }, m = (s = d == null ? void 0 : d.credentials) != null ? s : u, w = await ((o = this.fetch) != null ? o : globalThis.fetch)(h, {
        method: "POST",
        headers: Hr({
          "Content-Type": "application/json",
          ...p
        }, `ai-sdk/${ns}`, Gr()),
        body: JSON.stringify(b),
        credentials: m,
        signal: e
      });
      if (!w.ok) throw new Error((a = await w.text()) != null ? a : "Failed to fetch the chat response.");
      if (!w.body) throw new Error("The response body is empty.");
      return this.processResponseStream(w.body);
    }
    async reconnectToStream(e) {
      var t, n, r, s, o;
      const a = await Pe(this.body), i = await Pe(this.headers), l = await Pe(this.credentials), u = {
        ...qe(i),
        ...qe(e.headers)
      }, c = await ((t = this.prepareReconnectToStreamRequest) == null ? void 0 : t.call(this, {
        api: this.api,
        id: e.chatId,
        body: {
          ...a,
          ...e.body
        },
        headers: u,
        credentials: l,
        requestMetadata: e.metadata
      })), d = (n = c == null ? void 0 : c.api) != null ? n : `${this.api}/${e.chatId}/stream`, h = (c == null ? void 0 : c.headers) !== void 0 ? qe(c.headers) : u, p = (r = c == null ? void 0 : c.credentials) != null ? r : l, m = await ((s = this.fetch) != null ? s : globalThis.fetch)(d, {
        method: "GET",
        headers: Hr(h, `ai-sdk/${ns}`, Gr()),
        credentials: p
      });
      if (m.status === 204) return null;
      if (!m.ok) throw new Error((o = await m.text()) != null ? o : "Failed to fetch the chat response.");
      if (!m.body) throw new Error("The response body is empty.");
      return this.processResponseStream(m.body);
    }
  }, ua = class extends Kp {
    constructor(e = {}) {
      super(e);
    }
    processResponseStream(e) {
      return vp({
        stream: e,
        schema: Lp
      }).pipeThrough(new TransformStream({
        async transform(t, n) {
          if (!t.success) throw t.error;
          n.enqueue(t.value);
        }
      }));
    }
  }, Yp = class {
    constructor({ generateId: e = wf, id: t = e(), transport: n = new ua(), messageMetadataSchema: r, dataPartSchemas: s, state: o, onError: a, onToolCall: i, onFinish: l, onData: u, sendAutomaticallyWhen: c }) {
      this.activeResponse = void 0, this.jobExecutor = new Jp(), this.sendMessage = async (d, h) => {
        var p, b, m, y;
        if (d == null) {
          await this.makeRequest({
            trigger: "submit-message",
            messageId: (p = this.lastMessage) == null ? void 0 : p.id,
            ...h
          });
          return;
        }
        let w;
        if ("text" in d || "files" in d ? w = {
          parts: [
            ...Array.isArray(d.files) ? d.files : await Wp(d.files),
            ..."text" in d && d.text != null ? [
              {
                type: "text",
                text: d.text
              }
            ] : []
          ]
        } : w = d, d.messageId != null) {
          const k = this.state.messages.findIndex((f) => f.id === d.messageId);
          if (k === -1) throw new Error(`message with id ${d.messageId} not found`);
          if (this.state.messages[k].role !== "user") throw new Error(`message with id ${d.messageId} is not a user message`);
          this.state.messages = this.state.messages.slice(0, k + 1), this.state.replaceMessage(k, {
            ...w,
            id: d.messageId,
            role: (b = w.role) != null ? b : "user",
            metadata: d.metadata
          });
        } else this.state.pushMessage({
          ...w,
          id: (m = w.id) != null ? m : this.generateId(),
          role: (y = w.role) != null ? y : "user",
          metadata: d.metadata
        });
        await this.makeRequest({
          trigger: "submit-message",
          messageId: d.messageId,
          ...h
        });
      }, this.regenerate = async ({ messageId: d, ...h } = {}) => {
        const p = d == null ? this.state.messages.length - 1 : this.state.messages.findIndex((b) => b.id === d);
        if (p === -1) throw new Error(`message ${d} not found`);
        this.state.messages = this.state.messages.slice(0, this.messages[p].role === "assistant" ? p : p + 1), await this.makeRequest({
          trigger: "regenerate-message",
          messageId: d,
          ...h
        });
      }, this.resumeStream = async (d = {}) => {
        await this.makeRequest({
          trigger: "resume-stream",
          ...d
        });
      }, this.clearError = () => {
        this.status === "error" && (this.state.error = void 0, this.setStatus({
          status: "ready"
        }));
      }, this.addToolApprovalResponse = async ({ id: d, approved: h, reason: p }) => this.jobExecutor.run(async () => {
        const b = this.state.messages, m = b[b.length - 1], y = (w) => nn(w) && w.state === "approval-requested" && w.approval.id === d ? {
          ...w,
          state: "approval-responded",
          approval: {
            id: d,
            approved: h,
            reason: p
          }
        } : w;
        this.state.replaceMessage(b.length - 1, {
          ...m,
          parts: m.parts.map(y)
        }), this.activeResponse && (this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(y)), this.status !== "streaming" && this.status !== "submitted" && this.sendAutomaticallyWhen && this.shouldSendAutomatically().then((w) => {
          var k;
          w && this.makeRequest({
            trigger: "submit-message",
            messageId: (k = this.lastMessage) == null ? void 0 : k.id
          });
        });
      }), this.addToolOutput = async ({ state: d = "output-available", tool: h, toolCallId: p, output: b, errorText: m }) => this.jobExecutor.run(async () => {
        const y = this.state.messages, w = y[y.length - 1], k = (f) => nn(f) && f.toolCallId === p ? {
          ...f,
          state: d,
          output: b,
          errorText: m
        } : f;
        this.state.replaceMessage(y.length - 1, {
          ...w,
          parts: w.parts.map(k)
        }), this.activeResponse && (this.activeResponse.state.message.parts = this.activeResponse.state.message.parts.map(k)), this.status !== "streaming" && this.status !== "submitted" && this.sendAutomaticallyWhen && this.shouldSendAutomatically().then((f) => {
          var S;
          f && this.makeRequest({
            trigger: "submit-message",
            messageId: (S = this.lastMessage) == null ? void 0 : S.id
          });
        });
      }), this.addToolResult = this.addToolOutput, this.stop = async () => {
        var d;
        this.status !== "streaming" && this.status !== "submitted" || (d = this.activeResponse) != null && d.abortController && this.activeResponse.abortController.abort();
      }, this.id = t, this.transport = n, this.generateId = e, this.messageMetadataSchema = r, this.dataPartSchemas = s, this.state = o, this.onError = a, this.onToolCall = i, this.onFinish = l, this.onData = u, this.sendAutomaticallyWhen = c;
    }
    get status() {
      return this.state.status;
    }
    setStatus({ status: e, error: t }) {
      this.status !== e && (this.state.status = e, this.state.error = t);
    }
    get error() {
      return this.state.error;
    }
    get messages() {
      return this.state.messages;
    }
    get lastMessage() {
      return this.state.messages[this.state.messages.length - 1];
    }
    set messages(e) {
      this.state.messages = e;
    }
    async shouldSendAutomatically() {
      if (!this.sendAutomaticallyWhen) return false;
      const e = this.sendAutomaticallyWhen({
        messages: this.state.messages
      });
      return e && typeof e == "object" && "then" in e ? await e : e;
    }
    async makeRequest({ trigger: e, metadata: t, headers: n, body: r, messageId: s }) {
      var o, a, i;
      let l;
      if (e === "resume-stream") try {
        const p = await this.transport.reconnectToStream({
          chatId: this.id,
          metadata: t,
          headers: n,
          body: r
        });
        if (p == null) return;
        l = p;
      } catch (p) {
        this.onError && p instanceof Error && this.onError(p), this.setStatus({
          status: "error",
          error: p
        });
        return;
      }
      this.setStatus({
        status: "submitted",
        error: void 0
      });
      const u = this.lastMessage;
      let c = false, d = false, h = false;
      try {
        const p = {
          state: Fp({
            lastMessage: this.state.snapshot(u),
            messageId: this.generateId()
          }),
          abortController: new AbortController()
        };
        p.abortController.signal.addEventListener("abort", () => {
          c = true;
        }), this.activeResponse = p;
        let b;
        e === "resume-stream" ? b = l : b = await this.transport.sendMessages({
          chatId: this.id,
          messages: this.state.messages,
          abortSignal: p.abortController.signal,
          metadata: t,
          headers: n,
          body: r,
          trigger: e,
          messageId: s
        });
        const m = (y) => this.jobExecutor.run(() => y({
          state: p.state,
          write: () => {
            var w;
            this.setStatus({
              status: "streaming"
            }), p.state.message.id === ((w = this.lastMessage) == null ? void 0 : w.id) ? this.state.replaceMessage(this.state.messages.length - 1, p.state.message) : this.state.pushMessage(p.state.message);
          }
        }));
        await Vp({
          stream: Bp({
            stream: b,
            onToolCall: this.onToolCall,
            onData: this.onData,
            messageMetadataSchema: this.messageMetadataSchema,
            dataPartSchemas: this.dataPartSchemas,
            runUpdateMessageJob: m,
            onError: (y) => {
              throw y;
            }
          }),
          onError: (y) => {
            throw y;
          }
        }), this.setStatus({
          status: "ready"
        });
      } catch (p) {
        if (c || p.name === "AbortError") return c = true, this.setStatus({
          status: "ready"
        }), null;
        h = true, p instanceof TypeError && (p.message.toLowerCase().includes("fetch") || p.message.toLowerCase().includes("network")) && (d = true), this.onError && p instanceof Error && this.onError(p), this.setStatus({
          status: "error",
          error: p
        });
      } finally {
        try {
          (a = this.onFinish) == null || a.call(this, {
            message: this.activeResponse.state.message,
            messages: this.state.messages,
            isAbort: c,
            isDisconnect: d,
            isError: h,
            finishReason: (o = this.activeResponse) == null ? void 0 : o.state.finishReason
          });
        } catch (p) {
          console.error(p);
        }
        this.activeResponse = void 0;
      }
      !h && await this.shouldSendAutomatically() && await this.makeRequest({
        trigger: "submit-message",
        messageId: (i = this.lastMessage) == null ? void 0 : i.id,
        metadata: t,
        headers: n,
        body: r
      });
    }
  };
  var Gp = class {
    constructor(e) {
      this.statusRef = ue("ready"), this.errorRef = ue(void 0), this.pushMessage = (t) => {
        this.messagesRef.value = [
          ...this.messagesRef.value,
          t
        ];
      }, this.popMessage = () => {
        this.messagesRef.value = this.messagesRef.value.slice(0, -1);
      }, this.replaceMessage = (t, n) => {
        this.messagesRef.value[t] = {
          ...n
        };
      }, this.snapshot = (t) => t, this.messagesRef = ue(e ?? []);
    }
    get messages() {
      return this.messagesRef.value;
    }
    set messages(e) {
      this.messagesRef.value = e;
    }
    get status() {
      return this.statusRef.value;
    }
    set status(e) {
      this.statusRef.value = e;
    }
    get error() {
      return this.errorRef.value;
    }
    set error(e) {
      this.errorRef.value = e;
    }
  }, Hp = class extends Yp {
    constructor({ messages: e, ...t }) {
      super({
        ...t,
        state: new Gp(e)
      });
    }
  };
  let Qp, Xp, eh, th, nh, rh, sh, oh, ah, ih, lh, uh, ch, dh, fh, ph, hh, mh, gh, yh, vh;
  Qp = {
    class: "flex h-full flex-col"
  };
  Xp = {
    class: "flex h-16 shrink-0 items-center justify-between border-b border-default px-4"
  };
  eh = {
    class: "font-medium text-highlighted"
  };
  th = {
    class: "flex items-center gap-1"
  };
  nh = {
    class: "min-h-0 flex-1 overflow-y-auto"
  };
  rh = {
    class: "flex flex-col gap-2"
  };
  sh = {
    key: 1,
    class: "p-4"
  };
  oh = {
    key: 0,
    class: "flex h-full flex-col items-center justify-center py-12 text-center"
  };
  ah = {
    class: "mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10"
  };
  ih = {
    class: "mb-2 text-base font-medium text-highlighted"
  };
  lh = {
    class: "max-w-xs text-sm text-muted"
  };
  uh = {
    class: "mb-4 text-sm font-medium text-muted"
  };
  ch = {
    class: "flex flex-col gap-5"
  };
  dh = {
    class: "text-xs font-medium uppercase tracking-wide text-dimmed"
  };
  fh = {
    class: "flex flex-col"
  };
  ph = [
    "onClick"
  ];
  hh = {
    class: "w-full shrink-0 p-3"
  };
  mh = {
    class: "flex items-center gap-1 text-xs text-muted"
  };
  gh = {
    class: "mt-1 flex text-xs text-dimmed items-center justify-between"
  };
  yh = Un({
    __name: "AssistantPanel",
    setup(e) {
      var _a2;
      const t = {
        pre: $a(() => as(() => import("./DBBzBJnd.js").then(async (m2) => {
          await m2.__tla;
          return m2;
        }), __vite__mapDeps([7,8,1,2,9,10,11,3,4,5]), import.meta.url))
      }, [n, r] = Sa(), { isOpen: s, isExpanded: o, isMobile: a, panelWidth: i, toggleExpanded: l, messages: u, pendingMessage: c, clearPending: d, faqQuestions: h } = ka(), p = za(), b = Ia(), { t: m } = os(), y = ue(""), w = re(() => m("assistant.title")), k = re(() => m("assistant.placeholder")), f = new Hp({
        messages: u.value,
        transport: new ua({
          api: (((_a2 = p.app) == null ? void 0 : _a2.baseURL.replace(/\/$/, "")) || "") + p.public.assistant.apiPath
        }),
        onError: (x) => {
          const j = (() => {
            var _a3;
            try {
              return ((_a3 = JSON.parse(x.message)) == null ? void 0 : _a3.message) || x.message;
            } catch {
              return x.message;
            }
          })();
          b.add({
            description: j,
            icon: "i-lucide-alert-circle",
            color: "error",
            duration: 0
          });
        },
        onFinish: () => {
          u.value = f.messages;
        }
      });
      Be(c, (x) => {
        x && (u.value.length === 0 && f.messages.length > 0 && (f.messages.length = 0), f.sendMessage({
          text: x
        }), d());
      }, {
        immediate: true
      }), Be(u, (x) => {
        x.length === 0 && f.messages.length > 0 && (f.messages.length = 0);
      }, {
        deep: true
      });
      const S = re(() => f.messages.at(-1)), I = re(() => {
        var _a3, _b, _c2;
        return f.status === "streaming" && ((_a3 = S.value) == null ? void 0 : _a3.role) === "assistant" && !((_c2 = (_b = S.value) == null ? void 0 : _b.parts) == null ? void 0 : _c2.some((x) => x.type === "text"));
      });
      function A(x) {
        return (x == null ? void 0 : x.parts) ? x.parts.filter((j) => j.type === "data-tool-calls").flatMap((j) => {
          var _a3;
          return ((_a3 = j.data) == null ? void 0 : _a3.tools) || [];
        }) : [];
      }
      function N(x) {
        x == null ? void 0 : x.preventDefault(), y.value.trim() && (f.sendMessage({
          text: y.value
        }), y.value = "");
      }
      function O(x) {
        f.sendMessage({
          text: x
        });
      }
      function P() {
        f.stop(), u.value = [], f.messages.length = 0;
      }
      return $t(() => {
        var _a3;
        c.value ? (f.sendMessage({
          text: c.value
        }), d()) : ((_a3 = f.lastMessage) == null ? void 0 : _a3.role) === "user" && f.regenerate();
      }), (x, j) => {
        const Q = rn, Oe = ls, ft = ja, pt = gi, L = wi, ve = Ft, Ke = Ea, gn = ki, yn = zi, vn = Oa;
        return $(), R(fe, null, [
          oe(v(n), null, {
            default: te(({ showExpandButton: ht = true }) => {
              var _a3;
              return [
                M("div", Qp, [
                  M("div", Xp, [
                    M("span", eh, me(v(w)), 1),
                    M("div", th, [
                      ht ? ($(), Y(Oe, {
                        key: 0,
                        text: v(o) ? v(m)("assistant.collapse") : v(m)("assistant.expand")
                      }, {
                        default: te(() => [
                          oe(Q, {
                            icon: v(o) ? "i-lucide-minimize-2" : "i-lucide-maximize-2",
                            color: "neutral",
                            variant: "ghost",
                            size: "sm",
                            class: "text-muted hover:text-highlighted",
                            onClick: v(l)
                          }, null, 8, [
                            "icon",
                            "onClick"
                          ])
                        ]),
                        _: 1
                      }, 8, [
                        "text"
                      ])) : ee("", true),
                      v(f).messages.length > 0 ? ($(), Y(Oe, {
                        key: 1,
                        text: v(m)("assistant.clearChat")
                      }, {
                        default: te(() => [
                          oe(Q, {
                            icon: "i-lucide-trash-2",
                            color: "neutral",
                            variant: "ghost",
                            size: "sm",
                            class: "text-muted hover:text-highlighted",
                            onClick: P
                          })
                        ]),
                        _: 1
                      }, 8, [
                        "text"
                      ])) : ee("", true),
                      oe(Oe, {
                        text: v(m)("assistant.close")
                      }, {
                        default: te(() => [
                          oe(Q, {
                            icon: "i-lucide-x",
                            color: "neutral",
                            variant: "ghost",
                            size: "sm",
                            class: "text-muted hover:text-highlighted",
                            onClick: j[0] || (j[0] = (G) => s.value = false)
                          })
                        ]),
                        _: 1
                      }, 8, [
                        "text"
                      ])
                    ])
                  ]),
                  M("div", nh, [
                    v(f).messages.length > 0 ? ($(), Y(L, {
                      key: 0,
                      messages: v(f).messages,
                      compact: "",
                      status: v(f).status,
                      user: {
                        ui: {
                          content: "text-sm"
                        }
                      },
                      ui: {
                        indicator: "*:bg-accented",
                        root: "h-auto!"
                      },
                      class: "px-4 py-4"
                    }, {
                      content: te(({ message: G }) => {
                        var _a4, _b;
                        return [
                          M("div", rh, [
                            G.role === "assistant" && (A(G).length > 0 || v(I) && G.id === ((_a4 = v(S)) == null ? void 0 : _a4.id)) ? ($(), Y(ft, {
                              key: 0,
                              "tool-calls": A(G),
                              "is-loading": v(I) && G.id === ((_b = v(S)) == null ? void 0 : _b.id)
                            }, null, 8, [
                              "tool-calls",
                              "is-loading"
                            ])) : ee("", true),
                            ($(true), R(fe, null, ke(G.parts, ($e, bn) => ($(), R(fe, {
                              key: `${G.id}-${$e.type}-${bn}${"state" in $e ? `-${$e.state}` : ""}`
                            }, [
                              $e.type === "text" && $e.text ? ($(), Y(pt, {
                                key: 0,
                                value: $e.text,
                                "cache-key": `${G.id}-${bn}`,
                                components: t,
                                "parser-options": {
                                  highlight: false
                                },
                                class: "*:first:mt-0 *:last:mb-0"
                              }, null, 8, [
                                "value",
                                "cache-key"
                              ])) : ee("", true)
                            ], 64))), 128))
                          ])
                        ];
                      }),
                      _: 1
                    }, 8, [
                      "messages",
                      "status"
                    ])) : ($(), R("div", sh, [
                      ((_a3 = v(h)) == null ? void 0 : _a3.length) ? ($(), R(fe, {
                        key: 1
                      }, [
                        M("p", uh, me(v(m)("assistant.faq")), 1),
                        M("div", ch, [
                          ($(true), R(fe, null, ke(v(h), (G) => ($(), R("div", {
                            key: G.category,
                            class: "flex flex-col gap-1.5"
                          }, [
                            M("h4", dh, me(G.category), 1),
                            M("div", fh, [
                              ($(true), R(fe, null, ke(G.items, ($e) => ($(), R("button", {
                                key: $e,
                                class: "py-1.5 text-left text-sm text-muted transition-colors hover:text-highlighted",
                                onClick: (bn) => O($e)
                              }, me($e), 9, ph))), 128))
                            ])
                          ]))), 128))
                        ])
                      ], 64)) : ($(), R("div", oh, [
                        M("div", ah, [
                          oe(ve, {
                            name: "i-lucide-message-circle-question",
                            class: "size-6 text-primary"
                          })
                        ]),
                        M("h3", ih, me(v(m)("assistant.askMeAnything")), 1),
                        M("p", lh, me(v(m)("assistant.askMeAnythingDescription")), 1)
                      ]))
                    ]))
                  ]),
                  M("div", hh, [
                    oe(yn, {
                      modelValue: v(y),
                      "onUpdate:modelValue": j[3] || (j[3] = (G) => cr(y) ? y.value = G : null),
                      rows: 2,
                      placeholder: v(k),
                      maxlength: "1000",
                      ui: {
                        root: "shadow-none!",
                        body: "*:p-0! *:rounded-none! *:text-base!"
                      },
                      onSubmit: N
                    }, {
                      footer: te(() => [
                        M("div", mh, [
                          M("span", null, me(v(m)("assistant.lineBreak")), 1),
                          oe(Ke, {
                            size: "sm",
                            value: "shift"
                          }),
                          oe(Ke, {
                            size: "sm",
                            value: "enter"
                          })
                        ]),
                        oe(gn, {
                          class: "ml-auto",
                          size: "xs",
                          status: v(f).status,
                          onStop: j[1] || (j[1] = (G) => v(f).stop()),
                          onReload: j[2] || (j[2] = (G) => v(f).regenerate())
                        }, null, 8, [
                          "status"
                        ])
                      ]),
                      _: 1
                    }, 8, [
                      "modelValue",
                      "placeholder"
                    ]),
                    M("div", gh, [
                      M("span", null, me(v(m)("assistant.chatCleared")), 1),
                      M("span", null, me(v(y).length) + "/1000 ", 1)
                    ])
                  ])
                ])
              ];
            }),
            _: 1
          }),
          v(a) ? ($(), Y(vn, {
            key: 1,
            open: v(s),
            "onUpdate:open": j[4] || (j[4] = (ht) => cr(s) ? s.value = ht : null),
            side: "right",
            ui: {
              content: "ring-0 bg-default"
            }
          }, {
            content: te(() => [
              oe(v(r), {
                "show-expand-button": false
              })
            ]),
            _: 1
          }, 8, [
            "open"
          ])) : ($(), R("aside", {
            key: 0,
            class: "left-auto! fixed top-0 z-50 h-dvh overflow-hidden border-l border-default bg-default/95 backdrop-blur-xl transition-[right,width] duration-200 ease-linear will-change-[right,width]",
            style: bt({
              width: `${v(i)}px`,
              right: v(s) ? "0" : `-${v(i)}px`
            })
          }, [
            M("div", {
              class: "h-full transition-[width] duration-200 ease-linear",
              style: bt({
                width: `${v(i)}px`
              })
            }, [
              oe(v(r), {
                "show-expand-button": true
              })
            ], 4)
          ], 4))
        ], 64);
      };
    }
  });
  vh = Object.assign(yh, {
    __name: "AssistantPanel"
  });
  zh = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: vh
  }, Symbol.toStringTag, {
    value: "Module"
  }));
})();
export {
  Ja as A,
  ne as B,
  Eh as C,
  Ra as D,
  sn as E,
  $h as F,
  mi as G,
  zh as H,
  Oh as L,
  Fe as M,
  Te as N,
  Ee as P,
  W as S,
  He as Y,
  __tla,
  Es as a,
  an as b,
  Ih as c,
  Jn as d,
  xt as e,
  ei as f,
  _t as g,
  se as h,
  on as i,
  Jt as j,
  Se as k,
  Xe as l,
  wn as m,
  Ba as n,
  kh as o,
  Sh as p,
  Va as q,
  Vt as r,
  Xa as s,
  pe as t,
  Ya as u,
  H as v,
  fr as w,
  Ie as x,
  mt as y,
  wh as z
};
