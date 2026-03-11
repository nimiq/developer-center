import { B as r, R as c, c as l, x as u, e as i, T as m, n as f, S as s, k as d } from "#entry";
const _ = { base: "my-5 leading-7 text-pretty" }, C = { __name: "ProseP", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const e = a, t = r(), o = c("prose.p", e), n = l(() => {
    var _a, _b;
    return s({ extend: s(_), ...((_b = (_a = t.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.p) || {} });
  });
  return (p, x) => {
    var _a;
    return d(), u("p", { class: m(n.value({ class: [(_a = f(o)) == null ? void 0 : _a.base, e.class] })) }, [i(p.$slots, "default")], 2);
  };
} };
export {
  C as default
};
