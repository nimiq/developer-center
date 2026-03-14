const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Dw0ZUpBv.js","./DPfMkruS.js","./wDzz0qaB.js","./BPQ3VLAy.js","./Cp-IABpG.js","./CnnebwVN.js","./25uufFqr.js"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import C from "./B1VZEswH.js";
import { getTokenStyleObject as w, createHighlighterCore as R } from "./9jc539TB.js";
import { f, r as T, bF as y, bG as d, aX as P, ah as A, a0 as L, E as l, bH as O, a6 as U, c as _, l as k, m as E, w as I, p as c, bI as q, bJ as D } from "#entry";
import { c as V } from "./QyzFQwww.js";
import "./BGiG5Tvm.js";
import "./BiwnguJD.js";
import "./iik6CYzq.js";
let Y;
let __tla = (async () => {
  class S {
    constructor(e) {
      __publicField(this, "options");
      __publicField(this, "tokensStable", []);
      __publicField(this, "tokensUnstable", []);
      __publicField(this, "lastUnstableCodeChunk", "");
      __publicField(this, "lastStableGrammarState");
      this.options = e;
    }
    async enqueue(e) {
      const r = (this.lastUnstableCodeChunk + e).split(`
`), a = [];
      let s = [];
      const n = this.tokensUnstable.length;
      return r.forEach((o, i) => {
        const u = i === r.length - 1, m = this.options.highlighter.codeToTokens(o, {
          ...this.options,
          grammarState: this.lastStableGrammarState
        }), h = m.tokens[0];
        u || h.push({
          content: `
`,
          offset: 0
        }), u ? (s = h, this.lastUnstableCodeChunk = o) : (this.lastStableGrammarState = m.grammarState, a.push(...h));
      }), this.tokensStable.push(...a), this.tokensUnstable = s, {
        recall: n,
        stable: a,
        unstable: s
      };
    }
    close() {
      const e = this.tokensUnstable;
      return this.tokensUnstable = [], this.lastUnstableCodeChunk = "", this.lastStableGrammarState = void 0, {
        stable: e
      };
    }
    clear() {
      this.tokensStable = [], this.tokensUnstable = [], this.lastUnstableCodeChunk = "", this.lastStableGrammarState = void 0;
    }
    clone() {
      const e = new S(this.options);
      return e.lastUnstableCodeChunk = this.lastUnstableCodeChunk, e.tokensUnstable = this.tokensUnstable, e.tokensStable = this.tokensStable, e.lastStableGrammarState = this.lastStableGrammarState, e;
    }
  }
  class x extends TransformStream {
    constructor(e) {
      const r = new S(e), { allowRecalls: a = false } = e;
      super({
        async transform(s, n) {
          const { stable: o, unstable: i, recall: u } = await r.enqueue(s);
          a && u > 0 && n.enqueue({
            recall: u
          });
          for (const m of o) n.enqueue(m);
          if (a) for (const m of i) n.enqueue(m);
        },
        async flush(s) {
          const { stable: n } = r.close();
          if (!a) for (const o of n) s.enqueue(o);
        }
      });
      __publicField(this, "tokenizer");
      __publicField(this, "options");
      this.tokenizer = r, this.options = e;
    }
  }
  function G(t) {
    return !t || Object(t) !== t;
  }
  const M = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  function j(t = 16, e = M) {
    let r = "", a = t;
    const s = e.length;
    for (; a--; ) r += e[Math.random() * s | 0];
    return r;
  }
  const p = /* @__PURE__ */ new WeakMap();
  function z(t) {
    return G(t) ? t : (p.has(t) || p.set(t, j()), p.get(t));
  }
  const H = f({
    name: "ShikiStreamRenderer",
    props: {
      stream: {
        type: Object,
        required: true
      }
    },
    emits: [
      "stream-start",
      "stream-end"
    ],
    setup(t, { emit: e }) {
      const r = P([]);
      let a = null;
      return A(() => t.stream, (s) => {
        r.length = 0, a && a.abort(), a = new AbortController();
        const n = a.signal;
        let o = false;
        s.pipeTo(new WritableStream({
          write(i) {
            n.aborted || (o || (o = true, e("stream-start")), "recall" in i ? r.length -= i.recall : r.push(i));
          },
          close: () => {
            n.aborted || e("stream-end");
          },
          abort: () => {
            n.aborted || e("stream-end");
          }
        }), {
          signal: n
        }).catch((i) => {
          i.name !== "AbortError" && console.error("Stream error:", i);
        });
      }, {
        immediate: true
      }), () => d("pre", {
        class: "shiki shiki-stream"
      }, d("code", L(r, (s) => d("span", {
        key: z(s),
        style: s.htmlStyle || w(s)
      }, s.content))));
    }
  }), $ = f({
    name: "ShikiCachedRenderer",
    props: {
      code: {
        type: String,
        required: true
      },
      lang: {
        type: String,
        required: true
      },
      theme: {
        type: String,
        required: true
      },
      highlighter: {
        type: Object,
        required: true
      }
    },
    emits: [
      "stream-start",
      "stream-end"
    ],
    setup(t, { emit: e }) {
      const r = T(0);
      let a = null;
      const s = new ReadableStream({
        start(o) {
          a = o;
        }
      });
      y(() => {
        t.code.length > r.value && (a == null ? void 0 : a.enqueue(t.code.slice(r.value)), r.value = t.code.length);
      });
      const n = s.pipeThrough(new x({
        highlighter: t.highlighter,
        lang: t.lang,
        theme: t.theme,
        allowRecalls: true
      }));
      return () => d(H, {
        stream: n,
        onStreamStart: () => e("stream-start"),
        onStreamEnd: () => e("stream-end")
      });
    }
  });
  let g = null, b = null;
  let B;
  B = async () => (b || (b = R({
    langs: [
      l(() => import("./Dw0ZUpBv.js"), __vite__mapDeps([0,1,2,3,4,5,6]), import.meta.url),
      l(() => import("./wDzz0qaB.js"), [], import.meta.url),
      l(() => import("./BPQ3VLAy.js"), [], import.meta.url),
      l(() => import("./DPfMkruS.js"), [], import.meta.url),
      l(() => import("./CnnebwVN.js"), __vite__mapDeps([5,2,1]), import.meta.url),
      l(() => import("./Cp-IABpG.js"), [], import.meta.url),
      l(() => import("./Buea-lGh.js"), [], import.meta.url),
      l(() => import("./Cvjx9yec.js"), [], import.meta.url),
      l(() => import("./BELqPA7S.js").then((t) => t.b), [], import.meta.url)
    ],
    themes: [
      l(() => import("./Csfq5Kiy.js"), [], import.meta.url),
      l(() => import("./B0m2ddpp.js"), [], import.meta.url)
    ],
    engine: V()
  })), g || (g = await b), g);
  Y = f({
    __name: "AssistantPreStream",
    props: {
      code: {},
      language: {},
      class: {},
      meta: {}
    },
    async setup(t) {
      let e, r;
      const a = O(), s = ([e, r] = U(() => B()), e = await e, r(), e), n = t, o = _(() => n.code.trim().replace(/`+$/, "")), i = _(() => {
        switch (n.language) {
          case "vue":
            return "vue";
          case "javascript":
            return "js";
          case "typescript":
            return "ts";
          case "css":
            return "css";
          default:
            return n.language;
        }
      }), u = _(() => `${i.value}-${a.value}`);
      return (m, h) => {
        const v = C;
        return k(), E(v, q(D(n)), {
          default: I(() => [
            (k(), E(c($), {
              key: c(u),
              highlighter: c(s),
              code: c(o),
              lang: c(i),
              theme: c(a).value === "dark" ? "material-theme-palenight" : "material-theme-lighter"
            }, null, 8, [
              "highlighter",
              "code",
              "lang",
              "theme"
            ]))
          ]),
          _: 1
        }, 16);
      };
    }
  });
})();
export {
  __tla,
  Y as default
};
