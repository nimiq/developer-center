import { C as r, H as p, c, y as u, e as i, O as m, p as f, L as s, l as d } from "#entry";
const y = { base: "my-1.5 ps-1.5 leading-7 [&>ul]:my-0" }, b = { __name: "ProseLi", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const e = a, o = r(), t = p("prose.li", e), l = c(() => {
    var _a, _b;
    return s({ extend: s(y), ...((_b = (_a = o.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.li) || {} });
  });
  return (n, C) => {
    var _a;
    return d(), u("li", { class: m(l.value({ class: [(_a = f(t)) == null ? void 0 : _a.base, e.class] })) }, [i(n.$slots, "default")], 2);
  };
} };
export {
  b as default
};
