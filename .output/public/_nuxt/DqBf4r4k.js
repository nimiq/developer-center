import { F as B, C as v, H as x, aP as P, aQ as T, c as C, L as p, l as d, m as f, w as n, p as e, aR as O, e as m, B as S, n as q, aS as w, O as l, N as $, aT as k, ae as I, A as _, Q as L, ab as y, aU as N } from "#entry";
const U = { slots: { root: "", content: "data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden" } }, H = { __name: "UCollapsible", props: { as: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, unmountOnHide: { type: Boolean, required: false, default: true } }, emits: ["update:open"], setup(r, { emit: s }) {
  const t = r, i = s, a = B(), o = v(), c = x("collapsible", t), g = P(T(t, "as", "defaultOpen", "open", "disabled", "unmountOnHide"), i), u = C(() => {
    var _a;
    return p({ extend: p(U), ...((_a = o.ui) == null ? void 0 : _a.collapsible) || {} })();
  });
  return (b, j) => {
    var _a;
    return d(), f(e(k), $(e(g), { "data-slot": "root", class: u.value.root({ class: [(_a = e(c)) == null ? void 0 : _a.root, t.class] }) }), { default: n(({ open: h }) => {
      var _a2;
      return [a.default ? (d(), f(e(O), { key: 0, "as-child": "" }, { default: n(() => [m(b.$slots, "default", { open: h })]), _: 2 }, 1024)) : S("", true), q(e(w), { "data-slot": "content", class: l(u.value.content({ class: (_a2 = e(c)) == null ? void 0 : _a2.content })) }, { default: n(() => [m(b.$slots, "content")]), _: 3 }, 8, ["class"])];
    }), _: 3 }, 16, ["class"]);
  };
} }, V = { slots: { root: "my-5", trigger: ["group relative rounded-xs inline-flex items-center gap-1.5 text-muted hover:text-default text-sm focus-visible:ring-2 focus-visible:ring-primary focus:outline-none", "transition-colors"], triggerIcon: "size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-200", triggerLabel: "truncate", content: "*:first:mt-2.5 *:last:mb-0 *:my-1.5" } }, A = { __name: "ProseCollapsible", props: { icon: { type: null, required: false }, name: { type: String, required: false }, openText: { type: String, required: false }, closeText: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(r) {
  const s = r, { t } = I(), i = v(), a = x("prose.collapsible", s), o = C(() => {
    var _a, _b;
    return p({ extend: p(V), ...((_b = (_a = i.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.collapsible) || {} })();
  });
  return (c, g) => (d(), f(H, { "unmount-on-hide": false, class: l(s.class), ui: e(N)(o.value, e(a)) }, { default: n(({ open: u }) => {
    var _a, _b, _c;
    return [_("button", { class: l(o.value.trigger({ class: (_a = e(a)) == null ? void 0 : _a.trigger })) }, [q(L, { name: r.icon || e(i).ui.icons.chevronDown, class: l(o.value.triggerIcon({ class: (_b = e(a)) == null ? void 0 : _b.triggerIcon })) }, null, 8, ["name", "class"]), _("span", { class: l(o.value.triggerLabel({ class: (_c = e(a)) == null ? void 0 : _c.triggerLabel })) }, y(u ? s.closeText || e(t)("prose.collapsible.closeText") : s.openText || e(t)("prose.collapsible.openText")) + " " + y(s.name || e(t)("prose.collapsible.name")), 3)], 2)];
  }), content: n(() => [m(c.$slots, "default")]), _: 3 }, 8, ["class", "ui"]));
} };
export {
  A as default
};
