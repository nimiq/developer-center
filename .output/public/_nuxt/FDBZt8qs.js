import { C as c, H as l, c as n, y as u, e as i, O as d, p as m, L as e, l as f } from "#entry";
const g = { base: "grid grid-cols-1 sm:grid-cols-2 gap-5 my-5 *:my-0" }, _ = { __name: "ProseCardGroup", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const s = a, o = c(), r = l("prose.cardGroup", s), t = n(() => {
    var _a, _b;
    return e({ extend: e(g), ...((_b = (_a = o.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.cardGroup) || {} });
  });
  return (p, C) => {
    var _a;
    return f(), u("div", { class: d(t.value({ class: [(_a = m(r)) == null ? void 0 : _a.base, s.class] })) }, [i(p.$slots, "default")], 2);
  };
} };
export {
  _ as default
};
