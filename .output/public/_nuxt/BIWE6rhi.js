import { B as r, R as p, c as u, S as a, k as i, l as d, w as f, e as m, T as y, n as t, P as B } from "#entry";
const g = { base: "mt-8 pb-24 space-y-12" }, b = { __name: "UPageBody", props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(s) {
  const e = s, o = r(), l = p("pageBody", e), n = u(() => {
    var _a;
    return a({ extend: a(g), ...((_a = o.ui) == null ? void 0 : _a.pageBody) || {} });
  });
  return (c, C) => {
    var _a;
    return i(), d(t(B), { as: s.as, class: y(n.value({ class: [(_a = t(l)) == null ? void 0 : _a.base, e.class] })) }, { default: f(() => [m(c.$slots, "default")]), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  b as _
};
