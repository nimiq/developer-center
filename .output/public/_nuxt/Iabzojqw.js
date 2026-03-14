import { C as p, H as c, c as l, y as u, e as i, O as f, p as m, L as e, l as d } from "#entry";
const g = { base: "" }, b = { __name: "ProseStrong", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(o) {
  const s = o, t = p(), a = c("prose.strong", s), r = l(() => {
    var _a, _b;
    return e({ extend: e(g), ...((_b = (_a = t.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.strong) || {} });
  });
  return (n, C) => {
    var _a;
    return d(), u("strong", { class: f(r.value({ class: [(_a = m(a)) == null ? void 0 : _a.base, s.class] })) }, [i(n.$slots, "default")], 2);
  };
} };
export {
  b as default
};
