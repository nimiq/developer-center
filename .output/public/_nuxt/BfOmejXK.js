import { C as c, H as n, c as p, y as u, e as i, O as m, p as d, L as s, l as f } from "#entry";
const C = { base: "list-disc ps-6 my-5 marker:text-(--ui-border-accented)" }, y = { __name: "ProseUl", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const e = a, t = c(), o = n("prose.ul", e), r = p(() => {
    var _a, _b;
    return s({ extend: s(C), ...((_b = (_a = t.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.ul) || {} });
  });
  return (l, _) => {
    var _a;
    return f(), u("ul", { class: m(r.value({ class: [(_a = d(o)) == null ? void 0 : _a.base, e.class] })) }, [i(l.$slots, "default")], 2);
  };
} };
export {
  y as default
};
