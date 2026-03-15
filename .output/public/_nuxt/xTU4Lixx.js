const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./9jc539TB.js","./QyzFQwww.js","./BiwnguJD.js","./CN1p5ccG.js","./entry.DV2Z0fTU.css","./iik6CYzq.js","./CnnebwVN.js","./wDzz0qaB.js","./DPfMkruS.js","./Dw0ZUpBv.js","./BPQ3VLAy.js","./Cp-IABpG.js","./25uufFqr.js","./BMG7h6za.js","./Cvjx9yec.js","./Buea-lGh.js"])))=>i.map(i=>d[i]);
import { E as i } from "#entry";
import { getMdcConfigs as C } from "./bNaE6FFb.js";
import { c as k } from "./QyzFQwww.js";
import "./BiwnguJD.js";
import "./iik6CYzq.js";
let b, Q;
let __tla = (async () => {
  b = function({ langs: t = [], themes: R = [], bundledLangs: P = {}, bundledThemes: A = {}, getMdcConfigs: I, options: V, engine: w } = {}) {
    let E, g;
    async function $() {
      var _a, _b;
      const { createHighlighterCore: h, addClassToHast: o, isSpecialLang: l, isSpecialTheme: u } = await i(async () => {
        const { createHighlighterCore: a, addClassToHast: s, isSpecialLang: p, isSpecialTheme: d } = await import("./9jc539TB.js");
        return {
          createHighlighterCore: a,
          addClassToHast: s,
          isSpecialLang: p,
          isSpecialTheme: d
        };
      }, __vite__mapDeps([0,1,2,3,4,5]), import.meta.url), { transformerNotationDiff: n, transformerNotationErrorLevel: v, transformerNotationFocus: T, transformerNotationHighlight: y } = await i(async () => {
        const { transformerNotationDiff: a, transformerNotationErrorLevel: s, transformerNotationFocus: p, transformerNotationHighlight: d } = await import("./BUm4nZhI.js");
        return {
          transformerNotationDiff: a,
          transformerNotationErrorLevel: s,
          transformerNotationFocus: p,
          transformerNotationHighlight: d
        };
      }, [], import.meta.url), f = await h({
        langs: t,
        themes: R,
        engine: w || k()
      });
      for await (const a of await D()) await ((_b = (_a = a.shiki) == null ? void 0 : _a.setup) == null ? void 0 : _b.call(_a, f));
      return {
        shiki: f,
        addClassToHast: o,
        isSpecialLang: l,
        isSpecialTheme: u,
        transformers: [
          n(),
          v(),
          T(),
          y()
        ]
      };
    }
    async function S() {
      return E || (E = $()), E;
    }
    async function D() {
      return g || (g = Promise.resolve((I == null ? void 0 : I()) || [])), g;
    }
    return async (h, o, l, u = {}) => {
      var _a, _b, _c;
      const { shiki: n, addClassToHast: v, isSpecialLang: T, isSpecialTheme: y, transformers: f } = await S(), a = {
        defaultColor: false,
        meta: {
          __raw: u.meta
        }
      };
      o === "ts-type" || o === "typescript-type" ? (o = "typescript", a.grammarContextCode = "let a:") : (o === "vue-html" || o === "vue-template") && (o = "vue", a.grammarContextCode = "<template>");
      const s = {
        ...typeof l == "string" ? {
          default: l
        } : l || {}
      }, p = n.getLoadedThemes(), d = n.getLoadedLanguages();
      typeof o == "string" && !d.includes(o) && !T(o) && (P[o] ? await n.loadLanguage(P[o]) : o = "text");
      for (const [e, r] of Object.entries(s)) typeof r == "string" && !p.includes(r) && !y(r) && (A[r] ? await n.loadTheme(A[r]) : s[e] = "none");
      const L = /* @__PURE__ */ new Map();
      for (const e of f) L.set(e.name || `transformer:${Math.random()}-${e.constructor.name}`, e);
      for (const e of await D()) {
        const r = typeof ((_a = e.shiki) == null ? void 0 : _a.transformers) == "function" ? await ((_b = e.shiki) == null ? void 0 : _b.transformers(h, o, l, u)) : ((_c = e.shiki) == null ? void 0 : _c.transformers) || [];
        for (const _ of r) L.set(_.name || `transformer:${Math.random()}-${_.constructor.name}`, _);
      }
      const m = n.codeToHast(h.trimEnd(), {
        lang: o,
        ...a,
        themes: s,
        transformers: [
          ...L.values(),
          {
            name: "mdc:highlight",
            line(e, r) {
              var _a2;
              ((_a2 = u.highlights) == null ? void 0 : _a2.includes(r)) && v(e, "highlight"), e.properties.line = r;
            }
          },
          {
            name: "mdc:newline",
            line(e) {
              if (h == null ? void 0 : h.includes(`
`)) {
                if (e.children.length === 0 || e.children.length === 1 && e.children[0].type === "element" && e.children[0].children.length === 1 && e.children[0].children[0].type === "text" && e.children[0].children[0].value === "") {
                  e.children = [
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
                const r = e.children.at(-1);
                if ((r == null ? void 0 : r.type) === "element" && r.tagName === "span") {
                  const _ = r.children.at(-1);
                  (_ == null ? void 0 : _.type) === "text" && (_.value += `
`);
                }
              }
            }
          }
        ]
      }).children[0], x = m.children[0], c = V == null ? void 0 : V.wrapperStyle;
      m.properties.style = c ? typeof c == "string" ? c : m.properties.style : "";
      const O = [];
      return Object.keys(s).forEach((e) => {
        const r = e !== "default" ? `.${e}` : "";
        O.push(c ? `${r} .shiki,` : "", `html .${e} .shiki span {`, `color: var(--shiki-${e});`, `background: var(--shiki-${e}-bg);`, `font-style: var(--shiki-${e}-font-style);`, `font-weight: var(--shiki-${e}-font-weight);`, `text-decoration: var(--shiki-${e}-text-decoration);`, "}"), O.push(`html${r} .shiki span {`, `color: var(--shiki-${e});`, `background: var(--shiki-${e}-bg);`, `font-style: var(--shiki-${e}-font-style);`, `font-weight: var(--shiki-${e}-font-weight);`, `text-decoration: var(--shiki-${e}-text-decoration);`, "}");
      }), {
        tree: x.children,
        className: Array.isArray(m.properties.class) ? m.properties.class.join(" ") : m.properties.class,
        inlineStyle: m.properties.style,
        style: O.join("")
      };
    };
  };
  let N, j, H, M;
  N = {
    shellscript: () => i(() => import("./BELqPA7S.js").then((t) => t.s), [], import.meta.url).then((t) => t.default || t),
    bash: () => i(() => import("./BELqPA7S.js").then((t) => t.s), [], import.meta.url).then((t) => t.default || t),
    sh: () => i(() => import("./BELqPA7S.js").then((t) => t.s), [], import.meta.url).then((t) => t.default || t),
    shell: () => i(() => import("./BELqPA7S.js").then((t) => t.s), [], import.meta.url).then((t) => t.default || t),
    zsh: () => i(() => import("./BELqPA7S.js").then((t) => t.s), [], import.meta.url).then((t) => t.default || t),
    diff: () => i(() => import("./D97Zzqfu.js"), [], import.meta.url).then((t) => t.default || t),
    json: () => i(() => import("./Cp-IABpG.js"), [], import.meta.url).then((t) => t.default || t),
    javascript: () => i(() => import("./wDzz0qaB.js"), [], import.meta.url).then((t) => t.default || t),
    js: () => i(() => import("./wDzz0qaB.js"), [], import.meta.url).then((t) => t.default || t),
    cjs: () => i(() => import("./wDzz0qaB.js"), [], import.meta.url).then((t) => t.default || t),
    mjs: () => i(() => import("./wDzz0qaB.js"), [], import.meta.url).then((t) => t.default || t),
    typescript: () => i(() => import("./BPQ3VLAy.js"), [], import.meta.url).then((t) => t.default || t),
    ts: () => i(() => import("./BPQ3VLAy.js"), [], import.meta.url).then((t) => t.default || t),
    cts: () => i(() => import("./BPQ3VLAy.js"), [], import.meta.url).then((t) => t.default || t),
    mts: () => i(() => import("./BPQ3VLAy.js"), [], import.meta.url).then((t) => t.default || t),
    html: () => i(() => import("./CnnebwVN.js"), __vite__mapDeps([6,7,8]), import.meta.url).then((t) => t.default || t),
    css: () => i(() => import("./DPfMkruS.js"), [], import.meta.url).then((t) => t.default || t),
    vue: () => i(() => import("./Dw0ZUpBv.js"), __vite__mapDeps([9,8,7,10,11,6,12]), import.meta.url).then((t) => t.default || t),
    mdc: () => i(() => import("./BMG7h6za.js"), __vite__mapDeps([13,14,15,12,6,7,8]), import.meta.url).then((t) => t.default || t),
    markdown: () => i(() => import("./Cvjx9yec.js"), [], import.meta.url).then((t) => t.default || t),
    md: () => i(() => import("./Cvjx9yec.js"), [], import.meta.url).then((t) => t.default || t),
    yaml: () => i(() => import("./Buea-lGh.js"), [], import.meta.url).then((t) => t.default || t),
    yml: () => i(() => import("./Buea-lGh.js"), [], import.meta.url).then((t) => t.default || t)
  };
  j = {
    "material-theme-lighter": () => i(() => import("./B0m2ddpp.js"), [], import.meta.url).then((t) => t.default || t),
    "material-theme": () => i(() => import("./D5KoaKCx.js"), [], import.meta.url).then((t) => t.default || t),
    "material-theme-palenight": () => i(() => import("./Csfq5Kiy.js"), [], import.meta.url).then((t) => t.default || t)
  };
  H = {};
  M = k({
    forgiving: true
  });
  Q = b({
    bundledLangs: N,
    bundledThemes: j,
    options: H,
    getMdcConfigs: C,
    engine: M
  });
})();
export {
  __tla,
  b as createShikiHighlighter,
  Q as default
};
