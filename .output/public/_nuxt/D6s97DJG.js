import { U as v, B as m, R as f, c as w, x as d, z as b, e as n, T as o, n as r, A as y, S as l, k as u } from "#entry";
const C = { slots: { root: "my-5", preview: "flex justify-center border border-muted relative p-4 rounded-md", code: "[&>div>pre]:rounded-t-none [&>div]:my-0" }, variants: { code: { true: { preview: "border-b-0 rounded-b-none" } } } }, B = { __name: "ProseCodePreview", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(i) {
  const t = i, a = v(), p = m(), e = f("prose.codePreview", t), s = w(() => {
    var _a, _b;
    return l({ extend: l(C), ...((_b = (_a = p.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.codePreview) || {} })({ code: !!a.code });
  });
  return (c, P) => {
    var _a, _b, _c;
    return u(), d("div", { class: o(s.value.root({ class: [(_a = r(e)) == null ? void 0 : _a.root, t.class] })) }, [b("div", { class: o(s.value.preview({ class: [(_b = r(e)) == null ? void 0 : _b.preview] })) }, [n(c.$slots, "default")], 2), a.code ? (u(), d("div", { key: 0, class: o(s.value.code({ class: [(_c = r(e)) == null ? void 0 : _c.code] })) }, [n(c.$slots, "code")], 2)) : y("", true)], 2);
  };
} };
export {
  B as default
};
