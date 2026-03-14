import { C as p, H as r, c as u, L as a, l as i, m as d, w as m, e as f, O as y, p as t, P as C } from "#entry";
const g = { base: "mt-8 pb-24 space-y-12" }, b = { __name: "UPageBody", props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(s) {
  const e = s, o = p(), l = r("pageBody", e), c = u(() => {
    var _a;
    return a({ extend: a(g), ...((_a = o.ui) == null ? void 0 : _a.pageBody) || {} });
  });
  return (n, B) => {
    var _a;
    return i(), d(t(C), { as: s.as, class: y(c.value({ class: [(_a = t(l)) == null ? void 0 : _a.base, e.class] })) }, { default: m(() => [f(n.$slots, "default")]), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  b as _
};
