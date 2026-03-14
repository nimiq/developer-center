import { C as l, H as i, c as p, y as c, e as u, O as m, p as d, L as t, l as f, z as b, ab as y } from "#entry";
const g = { base: "*:first:mt-0 *:last:mb-0 *:my-1.5" }, I = { __name: "ProseTabsItem", props: { label: { type: String, required: true }, description: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(e) {
  const s = e, a = l(), r = i("prose.tabsItem", s), o = p(() => {
    var _a, _b;
    return t({ extend: t(g), ...((_b = (_a = a.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.tabsItem) || {} });
  });
  return (n, C) => {
    var _a;
    return f(), c("div", { class: m(o.value({ class: [(_a = d(r)) == null ? void 0 : _a.base, s.class] })) }, [u(n.$slots, "default", {}, () => [b(y(e.description), 1)])], 2);
  };
} };
export {
  I as default
};
