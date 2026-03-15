import { C as p, H as c, c as l, y as u, e as d, O as i, p as f, L as s, l as m } from "#entry";
const b = { base: "" }, _ = { __name: "ProseTbody", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(o) {
  const e = o, a = p(), t = c("prose.tbody", e), r = l(() => {
    var _a, _b;
    return s({ extend: s(b), ...((_b = (_a = a.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.tbody) || {} });
  });
  return (n, y) => {
    var _a;
    return m(), u("tbody", { class: i(r.value({ class: [(_a = f(t)) == null ? void 0 : _a.base, e.class] })) }, [d(n.$slots, "default")], 2);
  };
} };
export {
  _ as default
};
