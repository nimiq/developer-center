import { f as V, b5 as D, b6 as H, a_ as K, k as d, l as f, w as p, e as b, n as a, P as N, U as B, B as P, R as S, aD as U, aE as j, c as A, S as _, x, M as z, N as E, b7 as O, T as r, aJ as q, m as I, b8 as F, a5 as k, A as C, y as $, a2 as w, b9 as R, z as T, a4 as M, ba as J, r as L, W, ab as G, aI as Q } from "#entry";
var X = V({ __name: "AccordionHeader", props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "h3" } }, setup(i) {
  const u = i, l = D(), y = H();
  return K(), (n, g) => (d(), f(a(N), { as: u.as, "as-child": u.asChild, "data-orientation": a(l).orientation, "data-state": a(y).dataState.value, "data-disabled": a(y).dataDisabled.value }, { default: p(() => [b(n.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
} }), Y = X;
const Z = { slots: { root: "w-full", item: "border-b border-default last:border-b-0", header: "flex", trigger: "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0", content: "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none", body: "text-sm pb-3.5", leadingIcon: "shrink-0 size-5", trailingIcon: "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200", label: "text-start break-words" }, variants: { disabled: { true: { trigger: "cursor-not-allowed opacity-75" } } } }, ee = { __name: "UAccordion", props: { as: { type: null, required: false }, items: { type: Array, required: false }, trailingIcon: { type: null, required: false }, valueKey: { type: null, required: false, default: "value" }, labelKey: { type: null, required: false, default: "label" }, class: { type: null, required: false }, ui: { type: Object, required: false }, collapsible: { type: Boolean, required: false, default: true }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, type: { type: String, required: false, default: "single" }, disabled: { type: Boolean, required: false }, unmountOnHide: { type: Boolean, required: false, default: true } }, emits: ["update:modelValue"], setup(i, { emit: u }) {
  const l = i, y = u, n = B(), g = P(), o = S("accordion", l), h = U(j(l, "as", "collapsible", "defaultValue", "disabled", "modelValue", "unmountOnHide"), y), t = A(() => {
    var _a;
    return _({ extend: _(Z), ...((_a = g.ui) == null ? void 0 : _a.accordion) || {} })({ disabled: l.disabled });
  });
  return (s, v) => {
    var _a;
    return d(), f(a(J), M(a(h), { type: i.type, "data-slot": "root", class: t.value.root({ class: [(_a = a(o)) == null ? void 0 : _a.root, l.class] }) }), { default: p(() => [(d(true), x(z, null, E(l.items, (e, c) => {
      var _a2, _b;
      return d(), f(a(O), { key: c, value: a(q)(e, l.valueKey) ?? String(c), disabled: e.disabled, "data-slot": "item", class: r(t.value.item({ class: [(_a2 = a(o)) == null ? void 0 : _a2.item, (_b = e.ui) == null ? void 0 : _b.item, e.class] })) }, { default: p(({ open: m }) => {
        var _a3, _b2, _c, _d;
        return [I(a(Y), { as: "div", "data-slot": "header", class: r(t.value.header({ class: [(_a3 = a(o)) == null ? void 0 : _a3.header, (_b2 = e.ui) == null ? void 0 : _b2.header] })) }, { default: p(() => {
          var _a4, _b3;
          return [I(a(F), { "data-slot": "trigger", class: r(t.value.trigger({ class: [(_a4 = a(o)) == null ? void 0 : _a4.trigger, (_b3 = e.ui) == null ? void 0 : _b3.trigger], disabled: e.disabled })) }, { default: p(() => {
            var _a5, _b4;
            return [b(s.$slots, "leading", { item: e, index: c, open: m, ui: t.value }, () => {
              var _a6, _b5;
              return [e.icon ? (d(), f(k, { key: 0, name: e.icon, "data-slot": "leadingIcon", class: r(t.value.leadingIcon({ class: [(_a6 = a(o)) == null ? void 0 : _a6.leadingIcon, (_b5 = e == null ? void 0 : e.ui) == null ? void 0 : _b5.leadingIcon] })) }, null, 8, ["name", "class"])) : C("", true)];
            }), a(q)(e, l.labelKey) || n.default ? (d(), x("span", { key: 0, "data-slot": "label", class: r(t.value.label({ class: [(_a5 = a(o)) == null ? void 0 : _a5.label, (_b4 = e.ui) == null ? void 0 : _b4.label] })) }, [b(s.$slots, "default", { item: e, index: c, open: m }, () => [$(w(a(q)(e, l.labelKey)), 1)])], 2)) : C("", true), b(s.$slots, "trailing", { item: e, index: c, open: m, ui: t.value }, () => {
              var _a6, _b5;
              return [I(k, { name: e.trailingIcon || i.trailingIcon || a(g).ui.icons.chevronDown, "data-slot": "trailingIcon", class: r(t.value.trailingIcon({ class: [(_a6 = a(o)) == null ? void 0 : _a6.trailingIcon, (_b5 = e.ui) == null ? void 0 : _b5.trailingIcon] })) }, null, 8, ["name", "class"])];
            })];
          }), _: 2 }, 1032, ["class"])];
        }), _: 2 }, 1032, ["class"]), e.content || n.content || e.slot && n[e.slot] || n.body || e.slot && n[`${e.slot}-body`] ? (d(), f(a(R), { key: 0, "data-slot": "content", class: r(t.value.content({ class: [(_c = a(o)) == null ? void 0 : _c.content, (_d = e.ui) == null ? void 0 : _d.content] })) }, { default: p(() => [b(s.$slots, e.slot || "content", { item: e, index: c, open: m, ui: t.value }, () => {
          var _a4, _b3;
          return [T("div", { "data-slot": "body", class: r(t.value.body({ class: [(_a4 = a(o)) == null ? void 0 : _a4.body, (_b3 = e.ui) == null ? void 0 : _b3.body] })) }, [b(s.$slots, e.slot ? `${e.slot}-body` : "body", { item: e, index: c, open: m, ui: t.value }, () => [$(w(e.content), 1)])], 2)];
        })]), _: 2 }, 1032, ["class"])) : C("", true)];
      }), _: 2 }, 1032, ["value", "disabled", "class"]);
    }), 128))]), _: 3 }, 16, ["type", "class"]);
  };
} }, ae = { slots: { root: "my-5", trigger: "text-base" } }, se = { __name: "ProseAccordion", props: { type: { type: String, required: false, default: "multiple" }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(i) {
  const u = i, l = B(), y = P(), n = S("prose.accordion", u), g = A(() => {
    var _a, _b;
    return _({ extend: _(ae), ...((_b = (_a = y.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.accordion) || {} });
  }), o = L(1), h = A(() => {
    var _a, _b;
    return o.value, ((_b = (_a = l.default) == null ? void 0 : _a.call(l)) == null ? void 0 : _b.flatMap(t).filter(Boolean)) || [];
  });
  function t(s, v) {
    var _a, _b, _c, _d;
    return typeof s.type == "symbol" ? (_a = s.children) == null ? void 0 : _a.map(t) : { index: v, label: ((_b = s.props) == null ? void 0 : _b.label) || `${v}`, description: (_c = s.props) == null ? void 0 : _c.description, icon: (_d = s.props) == null ? void 0 : _d.icon, component: s };
  }
  return W(() => o.value++), (s, v) => (d(), f(ee, { type: i.type, items: h.value, "unmount-on-hide": false, class: r(u.class), ui: a(Q)(g.value(), a(n)) }, { content: p(({ item: e }) => [(d(), f(G(e.component)))]), _: 1 }, 8, ["type", "items", "class", "ui"]));
} };
export {
  se as default
};
