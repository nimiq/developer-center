import { B as c, R as n, c as u, S as a, k as p, l as d, w as f, e as g, T as m, n as t, P as C } from "#entry";
const v = { base: "relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" }, b = { __name: "UPageGrid", props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(s) {
  const e = s, r = c(), l = n("pageGrid", e), o = u(() => {
    var _a;
    return a({ extend: a(v), ...((_a = r.ui) == null ? void 0 : _a.pageGrid) || {} });
  });
  return (i, P) => {
    var _a;
    return p(), d(t(C), { as: s.as, class: m(o.value({ class: [(_a = t(l)) == null ? void 0 : _a.base, e.class] })) }, { default: f(() => [g(i.$slots, "default")]), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  b as default
};
