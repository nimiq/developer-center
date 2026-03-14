import { C as p, H as c, c as l, y as u, e as d, O as i, p as m, L as s, l as f } from "#entry";
const h = { base: "bg-muted" }, b = { __name: "ProseThead", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const e = a, t = p(), o = c("prose.thead", e), r = l(() => {
    var _a, _b;
    return s({ extend: s(h), ...((_b = (_a = t.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.thead) || {} });
  });
  return (n, C) => {
    var _a;
    return f(), u("thead", { class: i(r.value({ class: [(_a = m(o)) == null ? void 0 : _a.base, e.class] })) }, [d(n.$slots, "default")], 2);
  };
} };
export {
  b as default
};
