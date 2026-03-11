import { B as c, R as r, c as i, S as a, k as p, l as m, w as d, e as f, T as g, n as l, P as C } from "#entry";
const v = { base: "relative column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 *:break-inside-avoid-column *:will-change-transform" }, k = { __name: "UPageColumns", props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(s) {
  const e = s, n = c(), o = r("pageColumns", e), t = i(() => {
    var _a;
    return a({ extend: a(v), ...((_a = n.ui) == null ? void 0 : _a.pageColumns) || {} });
  });
  return (u, b) => {
    var _a;
    return p(), m(l(C), { as: s.as, class: g(t.value({ class: [(_a = l(o)) == null ? void 0 : _a.base, e.class] })) }, { default: d(() => [f(u.$slots, "default")]), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  k as default
};
