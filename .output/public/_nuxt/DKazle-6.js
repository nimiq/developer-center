import { C as n, H as l, c, y as u, e as i, O as m, p as f, L as s, l as d } from "#entry";
const y = { base: "my-5 leading-7 text-pretty" }, b = { __name: "ProseP", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const e = a, t = n(), o = l("prose.p", e), p = c(() => {
    var _a, _b;
    return s({ extend: s(y), ...((_b = (_a = t.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.p) || {} });
  });
  return (r, C) => {
    var _a;
    return d(), u("p", { class: m(p.value({ class: [(_a = f(o)) == null ? void 0 : _a.base, e.class] })) }, [i(r.$slots, "default")], 2);
  };
} };
export {
  b as default
};
