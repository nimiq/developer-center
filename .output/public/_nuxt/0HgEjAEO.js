import { B as p, R as n, c as l, x as u, e as i, T as d, n as m, S as e, k as f } from "#entry";
const g = { base: "grid grid-cols-1 sm:grid-cols-2 gap-5 my-5 *:my-0" }, y = { __name: "ProseCardGroup", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const s = a, o = p(), r = n("prose.cardGroup", s), t = l(() => {
    var _a, _b;
    return e({ extend: e(g), ...((_b = (_a = o.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.cardGroup) || {} });
  });
  return (c, C) => {
    var _a;
    return f(), u("div", { class: d(t.value({ class: [(_a = m(r)) == null ? void 0 : _a.base, s.class] })) }, [i(c.$slots, "default")], 2);
  };
} };
export {
  y as default
};
