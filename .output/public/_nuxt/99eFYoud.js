import { C as t, H as r, c as u, m as i, O as l, p, Q as m, L as a, l as f } from "#entry";
const d = { base: "size-4 shrink-0 align-sub" }, g = { __name: "ProseIcon", props: { name: { type: String, required: true }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const s = e, n = t(), o = r("prose.icon", s), c = u(() => {
    var _a, _b;
    return a({ extend: a(d), ...((_b = (_a = n.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.icon) || {} });
  });
  return (_, C) => {
    var _a;
    return f(), i(m, { name: e.name, class: l(c.value({ class: [(_a = p(o)) == null ? void 0 : _a.base, s.class] })) }, null, 8, ["name", "class"]);
  };
} };
export {
  g as default
};
