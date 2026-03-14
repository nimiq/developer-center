import { C as n, H as p, c, y as u, e as i, O as m, p as d, L as s, l as f } from "#entry";
const C = { base: "list-decimal ps-6 my-5 marker:text-muted" }, b = { __name: "ProseOl", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(a) {
  const e = a, o = n(), t = p("prose.ol", e), l = c(() => {
    var _a, _b;
    return s({ extend: s(C), ...((_b = (_a = o.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.ol) || {} });
  });
  return (r, _) => {
    var _a;
    return f(), u("ol", { class: m(l.value({ class: [(_a = d(t)) == null ? void 0 : _a.base, e.class] })) }, [i(r.$slots, "default")], 2);
  };
} };
export {
  b as default
};
