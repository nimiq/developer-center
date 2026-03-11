import { a7 as b, ay as v, B as h, R as x, c as q, x as c, T as o, n as e, m as u, z as d, a2 as k, A as C, Q as S, e as B, a4 as $, S as p, k as m } from "#entry";
import w from "./B3lh_D4v.js";
const z = { slots: { root: "relative my-5 group", header: "flex items-center gap-1.5 border border-muted bg-default border-b-0 relative rounded-t-md px-4 py-3", filename: "text-default text-sm/6", icon: "size-4 shrink-0", copy: "absolute top-[11px] right-[11px] lg:opacity-0 lg:group-hover:opacity-100 transition", base: "group font-mono text-sm/6 border border-muted bg-muted rounded-md px-4 py-3 whitespace-pre-wrap break-words overflow-x-auto focus:outline-none" }, variants: { filename: { true: { root: "[&>pre]:rounded-t-none [&>pre]:my-0 my-5" } } } }, V = { __name: "ProsePre", props: { icon: { type: null, required: false }, code: { type: String, required: false }, language: { type: String, required: false }, filename: { type: String, required: false }, highlights: { type: Array, required: false }, hideHeader: { type: Boolean, required: false }, meta: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const t = a, { t: f } = b(), { copy: y, copied: g } = v(), l = h(), s = x("prose.pre", t), r = q(() => {
    var _a, _b;
    return p({ extend: p(z), ...((_b = (_a = l.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.pre) || {} })();
  });
  return (n, i) => {
    var _a, _b, _c, _d, _e, _f;
    return m(), c("div", { class: o(r.value.root({ class: [(_a = e(s)) == null ? void 0 : _a.root], filename: !!a.filename })) }, [a.filename && !a.hideHeader ? (m(), c("div", { key: 0, class: o(r.value.header({ class: (_b = e(s)) == null ? void 0 : _b.header })) }, [u(w, { icon: a.icon, filename: a.filename, class: o(r.value.icon({ class: (_c = e(s)) == null ? void 0 : _c.icon })) }, null, 8, ["icon", "filename", "class"]), d("span", { class: o(r.value.filename({ class: (_d = e(s)) == null ? void 0 : _d.filename })) }, k(a.filename), 3)], 2)) : C("", true), u(S, { icon: e(g) ? e(l).ui.icons.copyCheck : e(l).ui.icons.copy, color: "neutral", variant: "outline", size: "sm", "aria-label": e(f)("prose.pre.copy"), class: o(r.value.copy({ class: (_e = e(s)) == null ? void 0 : _e.copy })), tabindex: "-1", onClick: i[0] || (i[0] = (P) => e(y)(t.code || "")) }, null, 8, ["icon", "aria-label", "class"]), d("pre", $({ class: r.value.base({ class: [(_f = e(s)) == null ? void 0 : _f.base, t.class] }) }, n.$attrs), [B(n.$slots, "default")], 16)], 2);
  };
} };
export {
  V as default
};
