import { C as p, H as u, c as d, y as i, A as f, e as m, O as o, p as t, L as r, l as b } from "#entry";
const v = { slots: { root: "relative my-5 overflow-x-auto", base: "w-full border-separate border-spacing-0 rounded-md" } }, y = { __name: "ProseTable", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(l) {
  const e = l, c = p(), s = u("prose.table", e), a = d(() => {
    var _a, _b;
    return r({ extend: r(v), ...((_b = (_a = c.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.table) || {} })();
  });
  return (n, C) => {
    var _a, _b;
    return b(), i("div", { class: o(a.value.root({ class: [(_a = t(s)) == null ? void 0 : _a.root, e.class] })) }, [f("table", { class: o(a.value.base({ class: (_b = t(s)) == null ? void 0 : _b.base })) }, [m(n.$slots, "default")], 2)], 2);
  };
} };
export {
  y as default
};
