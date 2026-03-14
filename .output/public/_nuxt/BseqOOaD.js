import { C as c, H as r, c as i, L as a, l as p, m, w as d, e as f, O as C, p as l, P as g } from "#entry";
const v = { base: "relative column-1 md:columns-2 lg:columns-3 gap-8 space-y-8 *:break-inside-avoid-column *:will-change-transform" }, y = { __name: "UPageColumns", props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(s) {
  const e = s, n = c(), o = r("pageColumns", e), t = i(() => {
    var _a;
    return a({ extend: a(v), ...((_a = n.ui) == null ? void 0 : _a.pageColumns) || {} });
  });
  return (u, b) => {
    var _a;
    return p(), m(l(g), { as: s.as, class: C(t.value({ class: [(_a = l(o)) == null ? void 0 : _a.base, e.class] })) }, { default: d(() => [f(u.$slots, "default")]), _: 3 }, 8, ["as", "class"]);
  };
} };
export {
  y as default
};
