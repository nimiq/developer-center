import { B as r, R as p, c, x as u, e as i, T as m, n as f, S as s, k as d } from "#entry";
const _ = { base: "my-1.5 ps-1.5 leading-7 [&>ul]:my-0" }, b = { __name: "ProseLi", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const e = a, o = r(), t = p("prose.li", e), l = c(() => {
    var _a, _b;
    return s({ extend: s(_), ...((_b = (_a = o.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.li) || {} });
  });
  return (n, y) => {
    var _a;
    return d(), u("li", { class: m(l.value({ class: [(_a = f(t)) == null ? void 0 : _a.base, e.class] })) }, [i(n.$slots, "default")], 2);
  };
} };
export {
  b as default
};
