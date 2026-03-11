import { B as c, R as p, c as l, x as u, e as i, T as f, n as m, S as e, k as d } from "#entry";
const g = { base: "" }, b = { __name: "ProseStrong", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(o) {
  const s = o, t = c(), a = p("prose.strong", s), n = l(() => {
    var _a, _b;
    return e({ extend: e(g), ...((_b = (_a = t.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.strong) || {} });
  });
  return (r, _) => {
    var _a;
    return d(), u("strong", { class: f(n.value({ class: [(_a = m(a)) == null ? void 0 : _a.base, s.class] })) }, [i(r.$slots, "default")], 2);
  };
} };
export {
  b as default
};
