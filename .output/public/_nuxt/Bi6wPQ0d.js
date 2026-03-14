import { C as p, H as c, c as l, y as u, e as m, O as i, p as f, L as s, l as d } from "#entry";
const C = { base: "" }, g = { __name: "ProseEm", props: { class: { type: String, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const e = a, o = p(), t = c("prose.em", e), r = l(() => {
    var _a, _b;
    return s({ extend: s(C), ...((_b = (_a = o.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.em) || {} });
  });
  return (n, _) => {
    var _a;
    return d(), u("em", { class: i(r.value({ class: [(_a = f(t)) == null ? void 0 : _a.base, e.class] })) }, [m(n.$slots, "default")], 2);
  };
} };
export {
  g as default
};
