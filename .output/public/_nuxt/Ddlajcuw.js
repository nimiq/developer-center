import { B as i, R as l, c, x as p, e as u, T as m, n as d, S as t, k as f, y as b, a2 as y } from "#entry";
const g = { base: "*:first:mt-0 *:last:mb-0 *:my-1.5" }, x = { __name: "ProseTabsItem", props: { label: { type: String, required: true }, description: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const s = e, a = i(), r = l("prose.tabsItem", s), o = c(() => {
    var _a, _b;
    return t({ extend: t(g), ...((_b = (_a = a.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.tabsItem) || {} });
  });
  return (n, S) => {
    var _a;
    return f(), p("div", { class: m(o.value({ class: [(_a = d(r)) == null ? void 0 : _a.base, s.class] })) }, [u(n.$slots, "default", {}, () => [b(y(e.description), 1)])], 2);
  };
} };
export {
  x as default
};
