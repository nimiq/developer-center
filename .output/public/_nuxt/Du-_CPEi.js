import { B as c, R as p, c as l, x as u, e as m, T as i, n as f, S as s, k as d } from "#entry";
const _ = { base: "" }, g = { __name: "ProseEm", props: { class: { type: String, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const e = a, o = c(), t = p("prose.em", e), r = l(() => {
    var _a, _b;
    return s({ extend: s(_), ...((_b = (_a = o.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.em) || {} });
  });
  return (n, C) => {
    var _a;
    return d(), u("em", { class: i(r.value({ class: [(_a = f(t)) == null ? void 0 : _a.base, e.class] })) }, [m(n.$slots, "default")], 2);
  };
} };
export {
  g as default
};
