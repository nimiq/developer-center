import { a6 as d, a7 as f, B as g, R as m, c as v, x, e as C, z as y, m as b, n as e, T as n, Q as h, a8 as T, S as i, k as _ } from "#entry";
const q = { slots: { root: "relative [&_pre]:h-[200px]", footer: "h-16 absolute inset-x-px bottom-px rounded-b-md flex items-center justify-center", trigger: "group", triggerIcon: "group-data-[state=open]:rotate-180" }, variants: { open: { true: { root: "[&_pre]:h-auto [&_pre]:min-h-[200px] [&_pre]:max-h-[80vh] [&_pre]:pb-12" }, false: { root: "[&_pre]:overflow-hidden", footer: "bg-gradient-to-t from-muted" } } } }, S = { __name: "ProseCodeCollapse", props: T({ icon: { type: null, required: false }, name: { type: String, required: false }, openText: { type: String, required: false }, closeText: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, { open: { type: Boolean, default: false }, openModifiers: {} }), emits: ["update:open"], setup(r) {
  const o = r, a = d(r, "open", { type: Boolean, default: false }), { t: l } = f(), p = g(), t = m("prose.codeCollapse", o), s = v(() => {
    var _a, _b;
    return i({ extend: i(q), ...((_b = (_a = p.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.codeCollapse) || {} })({ open: a.value });
  });
  return (u, c) => {
    var _a, _b, _c, _d;
    return _(), x("div", { class: n(s.value.root({ class: [(_a = e(t)) == null ? void 0 : _a.root, o.class] })) }, [C(u.$slots, "default"), y("div", { class: n(s.value.footer({ class: (_b = e(t)) == null ? void 0 : _b.footer })) }, [b(h, { icon: r.icon || e(p).ui.icons.chevronDown, color: "neutral", variant: "outline", "data-state": a.value ? "open" : "closed", label: `${a.value ? o.closeText || e(l)("prose.codeCollapse.closeText") : o.openText || e(l)("prose.codeCollapse.openText")} ${o.name || e(l)("prose.codeCollapse.name")}`, class: n(s.value.trigger({ class: (_c = e(t)) == null ? void 0 : _c.trigger })), ui: { leadingIcon: s.value.triggerIcon({ class: (_d = e(t)) == null ? void 0 : _d.triggerIcon }) }, onClick: c[0] || (c[0] = (B) => a.value = !a.value) }, null, 8, ["icon", "data-state", "label", "class", "ui"])], 2)], 2);
  };
} };
export {
  S as default
};
