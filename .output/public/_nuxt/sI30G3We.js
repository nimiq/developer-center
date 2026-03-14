import { f as S, bg as H, bh as j, b9 as K, l as i, m as f, w as p, e as b, p as a, P as N, F as B, C as P, H as V, aP as O, aQ as U, c as A, L as _, y as $, $ as z, a0 as D, bi as F, O as r, aV as q, n as C, bj as E, Q as k, B as I, z as x, ab as w, bk as L, A as Q, N as R, bl as T, r as M, a4 as G, ai as J, aU as W } from "#entry";
var X = S({ __name: "AccordionHeader", props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "h3" } }, setup(d) {
  const u = d, l = H(), y = j();
  return K(), (n, g) => (i(), f(a(N), { as: u.as, "as-child": u.asChild, "data-orientation": a(l).orientation, "data-state": a(y).dataState.value, "data-disabled": a(y).dataDisabled.value }, { default: p(() => [b(n.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "data-orientation", "data-state", "data-disabled"]));
} }), Y = X;
const Z = { slots: { root: "w-full", item: "border-b border-default last:border-b-0", header: "flex", trigger: "group flex-1 flex items-center gap-1.5 font-medium text-sm py-3.5 focus-visible:outline-primary min-w-0", content: "data-[state=open]:animate-[accordion-down_200ms_ease-out] data-[state=closed]:animate-[accordion-up_200ms_ease-out] overflow-hidden focus:outline-none", body: "text-sm pb-3.5", leadingIcon: "shrink-0 size-5", trailingIcon: "shrink-0 size-5 ms-auto group-data-[state=open]:rotate-180 transition-transform duration-200", label: "text-start break-words" }, variants: { disabled: { true: { trigger: "cursor-not-allowed opacity-75" } } } }, ee = { __name: "UAccordion", props: { as: { type: null, required: false }, items: { type: Array, required: false }, trailingIcon: { type: null, required: false }, valueKey: { type: null, required: false, default: "value" }, labelKey: { type: null, required: false, default: "label" }, class: { type: null, required: false }, ui: { type: Object, required: false }, collapsible: { type: Boolean, required: false, default: true }, defaultValue: { type: null, required: false }, modelValue: { type: null, required: false }, type: { type: String, required: false, default: "single" }, disabled: { type: Boolean, required: false }, unmountOnHide: { type: Boolean, required: false, default: true } }, emits: ["update:modelValue"], setup(d, { emit: u }) {
  const l = d, y = u, n = B(), g = P(), o = V("accordion", l), h = O(U(l, "as", "collapsible", "defaultValue", "disabled", "modelValue", "unmountOnHide"), y), t = A(() => {
    var _a;
    return _({ extend: _(Z), ...((_a = g.ui) == null ? void 0 : _a.accordion) || {} })({ disabled: l.disabled });
  });
  return (s, v) => {
    var _a;
    return i(), f(a(T), R(a(h), { type: d.type, "data-slot": "root", class: t.value.root({ class: [(_a = a(o)) == null ? void 0 : _a.root, l.class] }) }), { default: p(() => [(i(true), $(z, null, D(l.items, (e, c) => {
      var _a2, _b;
      return i(), f(a(F), { key: c, value: a(q)(e, l.valueKey) ?? String(c), disabled: e.disabled, "data-slot": "item", class: r(t.value.item({ class: [(_a2 = a(o)) == null ? void 0 : _a2.item, (_b = e.ui) == null ? void 0 : _b.item, e.class] })) }, { default: p(({ open: m }) => {
        var _a3, _b2, _c, _d;
        return [C(a(Y), { as: "div", "data-slot": "header", class: r(t.value.header({ class: [(_a3 = a(o)) == null ? void 0 : _a3.header, (_b2 = e.ui) == null ? void 0 : _b2.header] })) }, { default: p(() => {
          var _a4, _b3;
          return [C(a(E), { "data-slot": "trigger", class: r(t.value.trigger({ class: [(_a4 = a(o)) == null ? void 0 : _a4.trigger, (_b3 = e.ui) == null ? void 0 : _b3.trigger], disabled: e.disabled })) }, { default: p(() => {
            var _a5, _b4;
            return [b(s.$slots, "leading", { item: e, index: c, open: m, ui: t.value }, () => {
              var _a6, _b5;
              return [e.icon ? (i(), f(k, { key: 0, name: e.icon, "data-slot": "leadingIcon", class: r(t.value.leadingIcon({ class: [(_a6 = a(o)) == null ? void 0 : _a6.leadingIcon, (_b5 = e == null ? void 0 : e.ui) == null ? void 0 : _b5.leadingIcon] })) }, null, 8, ["name", "class"])) : I("", true)];
            }), a(q)(e, l.labelKey) || n.default ? (i(), $("span", { key: 0, "data-slot": "label", class: r(t.value.label({ class: [(_a5 = a(o)) == null ? void 0 : _a5.label, (_b4 = e.ui) == null ? void 0 : _b4.label] })) }, [b(s.$slots, "default", { item: e, index: c, open: m }, () => [x(w(a(q)(e, l.labelKey)), 1)])], 2)) : I("", true), b(s.$slots, "trailing", { item: e, index: c, open: m, ui: t.value }, () => {
              var _a6, _b5;
              return [C(k, { name: e.trailingIcon || d.trailingIcon || a(g).ui.icons.chevronDown, "data-slot": "trailingIcon", class: r(t.value.trailingIcon({ class: [(_a6 = a(o)) == null ? void 0 : _a6.trailingIcon, (_b5 = e.ui) == null ? void 0 : _b5.trailingIcon] })) }, null, 8, ["name", "class"])];
            })];
          }), _: 2 }, 1032, ["class"])];
        }), _: 2 }, 1032, ["class"]), e.content || n.content || e.slot && n[e.slot] || n.body || e.slot && n[`${e.slot}-body`] ? (i(), f(a(L), { key: 0, "data-slot": "content", class: r(t.value.content({ class: [(_c = a(o)) == null ? void 0 : _c.content, (_d = e.ui) == null ? void 0 : _d.content] })) }, { default: p(() => [b(s.$slots, e.slot || "content", { item: e, index: c, open: m, ui: t.value }, () => {
          var _a4, _b3;
          return [Q("div", { "data-slot": "body", class: r(t.value.body({ class: [(_a4 = a(o)) == null ? void 0 : _a4.body, (_b3 = e.ui) == null ? void 0 : _b3.body] })) }, [b(s.$slots, e.slot ? `${e.slot}-body` : "body", { item: e, index: c, open: m, ui: t.value }, () => [x(w(e.content), 1)])], 2)];
        })]), _: 2 }, 1032, ["class"])) : I("", true)];
      }), _: 2 }, 1032, ["value", "disabled", "class"]);
    }), 128))]), _: 3 }, 16, ["type", "class"]);
  };
} }, ae = { slots: { root: "my-5", trigger: "text-base" } }, se = { __name: "ProseAccordion", props: { type: { type: String, required: false, default: "multiple" }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(d) {
  const u = d, l = B(), y = P(), n = V("prose.accordion", u), g = A(() => {
    var _a, _b;
    return _({ extend: _(ae), ...((_b = (_a = y.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.accordion) || {} });
  }), o = M(1), h = A(() => {
    var _a, _b;
    return o.value, ((_b = (_a = l.default) == null ? void 0 : _a.call(l)) == null ? void 0 : _b.flatMap(t).filter(Boolean)) || [];
  });
  function t(s, v) {
    var _a, _b, _c, _d;
    return typeof s.type == "symbol" ? (_a = s.children) == null ? void 0 : _a.map(t) : { index: v, label: ((_b = s.props) == null ? void 0 : _b.label) || `${v}`, description: (_c = s.props) == null ? void 0 : _c.description, icon: (_d = s.props) == null ? void 0 : _d.icon, component: s };
  }
  return G(() => o.value++), (s, v) => (i(), f(ee, { type: d.type, items: h.value, "unmount-on-hide": false, class: r(u.class), ui: a(W)(g.value(), a(n)) }, { content: p(({ item: e }) => [(i(), f(J(e.component)))]), _: 1 }, 8, ["type", "items", "class", "ui"]));
} };
export {
  se as default
};
