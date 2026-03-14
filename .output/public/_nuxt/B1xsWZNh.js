import { D as c, c as d, y as t, p, e as n, l as r } from "#entry";
const l = ["id"], u = ["href"], k = { __name: "ProseH5", props: { id: { type: String, required: false } }, setup(a) {
  const e = a, { headings: o } = c().public.mdc, i = d(() => {
    var _a;
    return e.id && (typeof (o == null ? void 0 : o.anchorLinks) == "boolean" && (o == null ? void 0 : o.anchorLinks) === true || typeof (o == null ? void 0 : o.anchorLinks) == "object" && ((_a = o == null ? void 0 : o.anchorLinks) == null ? void 0 : _a.h5));
  });
  return (s, f) => (r(), t("h5", { id: e.id }, [e.id && p(i) ? (r(), t("a", { key: 0, href: `#${e.id}` }, [n(s.$slots, "default")], 8, u)) : n(s.$slots, "default", { key: 1 })], 8, l));
} };
export {
  k as default
};
