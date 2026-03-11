import { B as c, R as o, c as u, S as a, k as p, l as m, w as f, e as d, T as h, n as t, P as v } from "#entry";
const C = { base: "min-h-[calc(100vh-var(--ui-header-height))]" }, g = { __name: "UMain", props: { as: { type: null, required: false, default: "main" }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(s) {
  const e = s, n = c(), l = o("main", e), i = u(() => {
    var _a;
    return a({ extend: a(C), ...((_a = n.ui) == null ? void 0 : _a.main) || {} });
  });
  return (r, _) => {
    var _a;
    return p(), m(t(v), { as: s.as, class: h(i.value({ class: [(_a = t(l)) == null ? void 0 : _a.base, e.class] })) }, { default: f(() => [d(r.$slots, "default")]), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  g as _
};
