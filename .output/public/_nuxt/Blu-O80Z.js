import { B as p, R as u, c as d, x as i, z as f, e as m, T as o, n as t, S as r, k as b } from "#entry";
const v = { slots: { root: "relative my-5 overflow-x-auto", base: "w-full border-separate border-spacing-0 rounded-md" } }, B = { __name: "ProseTable", props: { class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(l) {
  const e = l, n = p(), s = u("prose.table", e), a = d(() => {
    var _a, _b;
    return r({ extend: r(v), ...((_b = (_a = n.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.table) || {} })();
  });
  return (c, _) => {
    var _a, _b;
    return b(), i("div", { class: o(a.value.root({ class: [(_a = t(s)) == null ? void 0 : _a.root, e.class] })) }, [f("table", { class: o(a.value.base({ class: (_b = t(s)) == null ? void 0 : _b.base })) }, [m(c.$slots, "default")], 2)], 2);
  };
} };
export {
  B as default
};
