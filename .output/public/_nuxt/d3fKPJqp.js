import { C as c, c as d, x as n, n as p, e as t, k as r } from "#entry";
const u = ["id"], f = ["href"], k = { __name: "ProseH5", props: { id: { type: String, required: false } }, setup(a) {
  const e = a, { headings: o } = c().public.mdc, i = d(() => {
    var _a;
    return e.id && (typeof (o == null ? void 0 : o.anchorLinks) == "boolean" && (o == null ? void 0 : o.anchorLinks) === true || typeof (o == null ? void 0 : o.anchorLinks) == "object" && ((_a = o == null ? void 0 : o.anchorLinks) == null ? void 0 : _a.h5));
  });
  return (s, h) => (r(), n("h5", { id: e.id }, [e.id && p(i) ? (r(), n("a", { key: 0, href: `#${e.id}` }, [t(s.$slots, "default")], 8, f)) : t(s.$slots, "default", { key: 1 })], 8, u));
} };
export {
  k as default
};
