import { F as P, C as K, H as U, aP as O, aQ as R, c as B, L as x, r as _, l as o, m as d, w as b, n as A, p as a, O as g, e as f, y as q, $ as I, a0 as $, aV as y, Q as j, R as F, N as V, B as m, z as T, ab as C, ac as H, ad as L, o as D, ag as E, ah as M, a4 as Q, ai as W, aU as G, af as J } from "#entry";
import { a as X, T as Y, c as Z, d as ee, b as ae } from "./L6K8xIKg.js";
import "./NIOXM6Tq.js";
const te = { slots: { root: "flex items-center gap-2", list: "relative flex p-1 group", indicator: "absolute transition-[translate,width] duration-200", trigger: ["group relative inline-flex items-center min-w-0 data-[state=inactive]:text-muted hover:data-[state=inactive]:not-disabled:text-default font-medium rounded-md disabled:cursor-not-allowed disabled:opacity-75", "transition-colors"], leadingIcon: "shrink-0", leadingAvatar: "shrink-0", leadingAvatarSize: "", label: "truncate", trailingBadge: "shrink-0", trailingBadgeSize: "sm", content: "focus:outline-none w-full" }, variants: { color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, variant: { pill: { list: "bg-elevated rounded-lg", trigger: "grow", indicator: "rounded-md shadow-xs" }, link: { list: "border-default", indicator: "rounded-full", trigger: "focus:outline-none" } }, orientation: { horizontal: { root: "flex-col", list: "w-full", indicator: "left-0 w-(--reka-tabs-indicator-size) translate-x-(--reka-tabs-indicator-position)", trigger: "justify-center" }, vertical: { list: "flex-col", indicator: "top-0 h-(--reka-tabs-indicator-size) translate-y-(--reka-tabs-indicator-position)" } }, size: { xs: { trigger: "px-2 py-1 text-xs gap-1", leadingIcon: "size-4", leadingAvatarSize: "3xs" }, sm: { trigger: "px-2.5 py-1.5 text-xs gap-1.5", leadingIcon: "size-4", leadingAvatarSize: "3xs" }, md: { trigger: "px-3 py-1.5 text-sm gap-1.5", leadingIcon: "size-5", leadingAvatarSize: "2xs" }, lg: { trigger: "px-3 py-2 text-sm gap-2", leadingIcon: "size-5", leadingAvatarSize: "2xs" }, xl: { trigger: "px-3 py-2 text-base gap-2", leadingIcon: "size-6", leadingAvatarSize: "xs" } } }, compoundVariants: [{ orientation: "horizontal", variant: "pill", class: { indicator: "inset-y-1" } }, { orientation: "horizontal", variant: "link", class: { list: "border-b -mb-px", indicator: "-bottom-px h-px" } }, { orientation: "vertical", variant: "pill", class: { indicator: "inset-x-1", list: "items-center" } }, { orientation: "vertical", variant: "link", class: { list: "border-s -ms-px", indicator: "-start-px w-px" } }, { color: "primary", variant: "pill", class: { indicator: "bg-primary", trigger: "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary" } }, { color: "secondary", variant: "pill", class: { indicator: "bg-secondary", trigger: "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary" } }, { color: "success", variant: "pill", class: { indicator: "bg-success", trigger: "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-success" } }, { color: "info", variant: "pill", class: { indicator: "bg-info", trigger: "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-info" } }, { color: "warning", variant: "pill", class: { indicator: "bg-warning", trigger: "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-warning" } }, { color: "error", variant: "pill", class: { indicator: "bg-error", trigger: "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-error" } }, { color: "neutral", variant: "pill", class: { indicator: "bg-neutral", trigger: "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral" } }, { color: "neutral", variant: "pill", class: { indicator: "bg-inverted", trigger: "data-[state=active]:text-inverted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverted" } }, { color: "primary", variant: "link", class: { indicator: "bg-primary", trigger: "data-[state=active]:text-primary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary" } }, { color: "secondary", variant: "link", class: { indicator: "bg-secondary", trigger: "data-[state=active]:text-secondary focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-secondary" } }, { color: "success", variant: "link", class: { indicator: "bg-success", trigger: "data-[state=active]:text-success focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-success" } }, { color: "info", variant: "link", class: { indicator: "bg-info", trigger: "data-[state=active]:text-info focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-info" } }, { color: "warning", variant: "link", class: { indicator: "bg-warning", trigger: "data-[state=active]:text-warning focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-warning" } }, { color: "error", variant: "link", class: { indicator: "bg-error", trigger: "data-[state=active]:text-error focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-error" } }, { color: "neutral", variant: "link", class: { indicator: "bg-neutral", trigger: "data-[state=active]:text-neutral focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-neutral" } }, { color: "neutral", variant: "link", class: { indicator: "bg-inverted", trigger: "data-[state=active]:text-highlighted focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-inverted" } }], defaultVariants: { color: "primary", variant: "pill", size: "md" } }, ie = { __name: "UTabs", props: { as: { type: null, required: false }, items: { type: Array, required: false }, color: { type: null, required: false }, variant: { type: null, required: false }, size: { type: null, required: false }, orientation: { type: null, required: false, default: "horizontal" }, content: { type: Boolean, required: false, default: true }, valueKey: { type: null, required: false, default: "value" }, labelKey: { type: null, required: false, default: "label" }, class: { type: null, required: false }, ui: { type: Object, required: false }, defaultValue: { type: [String, Number], required: false, default: "0" }, modelValue: { type: [String, Number], required: false }, activationMode: { type: String, required: false }, unmountOnHide: { type: Boolean, required: false, default: true } }, emits: ["update:modelValue"], setup(n, { expose: c, emit: h }) {
  const t = n, z = h, k = P(), S = K(), r = U("tabs", t), w = O(R(t, "as", "unmountOnHide"), z), s = B(() => {
    var _a;
    return x({ extend: x(te), ...((_a = S.ui) == null ? void 0 : _a.tabs) || {} })({ color: t.color, variant: t.variant, size: t.size, orientation: t.orientation });
  }), p = _([]);
  function l(i, v) {
    p.value[i] = v;
  }
  return c({ triggersRef: p }), (i, v) => {
    var _a;
    return o(), d(a(ae), V(a(w), { "model-value": n.modelValue, "default-value": n.defaultValue, orientation: n.orientation, "activation-mode": n.activationMode, "data-slot": "root", class: s.value.root({ class: [(_a = a(r)) == null ? void 0 : _a.root, t.class] }) }), { default: b(() => {
      var _a2;
      return [A(a(X), { "data-slot": "list", class: g(s.value.list({ class: (_a2 = a(r)) == null ? void 0 : _a2.list })) }, { default: b(() => {
        var _a3;
        return [A(a(Y), { "data-slot": "indicator", class: g(s.value.indicator({ class: (_a3 = a(r)) == null ? void 0 : _a3.indicator })) }, null, 8, ["class"]), f(i.$slots, "list-leading"), (o(true), q(I, null, $(n.items, (e, u) => {
          var _a4, _b;
          return o(), d(a(Z), { key: u, ref_for: true, ref: (N) => l(u, N), value: a(y)(e, t.valueKey) ?? String(u), disabled: e.disabled, "data-slot": "trigger", class: g(s.value.trigger({ class: [(_a4 = a(r)) == null ? void 0 : _a4.trigger, (_b = e.ui) == null ? void 0 : _b.trigger] })) }, { default: b(() => {
            var _a5, _b2;
            return [f(i.$slots, "leading", { item: e, index: u, ui: s.value }, () => {
              var _a6, _b3, _c, _d, _e, _f;
              return [e.icon ? (o(), d(j, { key: 0, name: e.icon, "data-slot": "leadingIcon", class: g(s.value.leadingIcon({ class: [(_a6 = a(r)) == null ? void 0 : _a6.leadingIcon, (_b3 = e.ui) == null ? void 0 : _b3.leadingIcon] })) }, null, 8, ["name", "class"])) : e.avatar ? (o(), d(F, V({ key: 1, size: ((_c = e.ui) == null ? void 0 : _c.leadingAvatarSize) || ((_d = a(r)) == null ? void 0 : _d.leadingAvatarSize) || s.value.leadingAvatarSize() }, { ref_for: true }, e.avatar, { "data-slot": "leadingAvatar", class: s.value.leadingAvatar({ class: [(_e = a(r)) == null ? void 0 : _e.leadingAvatar, (_f = e.ui) == null ? void 0 : _f.leadingAvatar] }) }), null, 16, ["size", "class"])) : m("", true)];
            }), a(y)(e, t.labelKey) || k.default ? (o(), q("span", { key: 0, "data-slot": "label", class: g(s.value.label({ class: [(_a5 = a(r)) == null ? void 0 : _a5.label, (_b2 = e.ui) == null ? void 0 : _b2.label] })) }, [f(i.$slots, "default", { item: e, index: u }, () => [T(C(a(y)(e, t.labelKey)), 1)])], 2)) : m("", true), f(i.$slots, "trailing", { item: e, index: u, ui: s.value }, () => {
              var _a6, _b3, _c, _d;
              return [e.badge || e.badge === 0 ? (o(), d(H, V({ key: 0, color: "neutral", variant: "outline", size: ((_a6 = e.ui) == null ? void 0 : _a6.trailingBadgeSize) || ((_b3 = a(r)) == null ? void 0 : _b3.trailingBadgeSize) || s.value.trailingBadgeSize() }, { ref_for: true }, typeof e.badge == "string" || typeof e.badge == "number" ? { label: e.badge } : e.badge, { "data-slot": "trailingBadge", class: s.value.trailingBadge({ class: [(_c = a(r)) == null ? void 0 : _c.trailingBadge, (_d = e.ui) == null ? void 0 : _d.trailingBadge] }) }), null, 16, ["size", "class"])) : m("", true)];
            })];
          }), _: 2 }, 1032, ["value", "disabled", "class"]);
        }), 128)), f(i.$slots, "list-trailing")];
      }), _: 3 }, 8, ["class"]), n.content ? (o(true), q(I, { key: 0 }, $(n.items, (e, u) => {
        var _a3, _b;
        return o(), d(a(ee), { key: u, value: a(y)(e, t.valueKey) ?? String(u), "data-slot": "content", class: g(s.value.content({ class: [(_a3 = a(r)) == null ? void 0 : _a3.content, (_b = e.ui) == null ? void 0 : _b.content, e.class] })) }, { default: b(() => [f(i.$slots, e.slot || "content", { item: e, index: u, ui: s.value }, () => [T(C(e.content), 1)])]), _: 2 }, 1032, ["value", "class"]);
      }), 128)) : m("", true)];
    }), _: 3 }, 16, ["model-value", "default-value", "orientation", "activation-mode", "class"]);
  };
} }, se = { slots: { root: "my-5 gap-4" } }, oe = { __name: "ProseTabs", props: J({ defaultValue: { type: String, required: false, default: "0" }, sync: { type: String, required: false }, hash: { type: String, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, { modelValue: { type: String }, modelModifiers: {} }), emits: ["update:modelValue"], setup(n) {
  const c = n, h = P(), t = L(n, "modelValue"), z = K(), k = U("prose.tabs", c), S = B(() => {
    var _a, _b;
    return x({ extend: x(se), ...((_b = (_a = z.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.tabs) || {} });
  }), r = _(1), w = B(() => {
    var _a, _b;
    return r.value, ((_b = (_a = h.default) == null ? void 0 : _a.call(h)) == null ? void 0 : _b.flatMap(s).filter(Boolean)) || [];
  });
  function s(l, i) {
    var _a, _b, _c, _d;
    return typeof l.type == "symbol" ? (_a = l.children) == null ? void 0 : _a.map(s) : { index: i, label: ((_b = l.props) == null ? void 0 : _b.label) || `${i}`, description: (_c = l.props) == null ? void 0 : _c.description, icon: (_d = l.props) == null ? void 0 : _d.icon, component: l };
  }
  D(() => {
    if (c.sync) {
      const l = `tabs-${c.sync}`, i = E(l, () => localStorage.getItem(l));
      M(i, () => {
        i.value && (t.value = i.value);
      }, { immediate: true }), M(t, () => {
        t.value && (i.value = t.value, localStorage.setItem(l, t.value));
      });
    }
  });
  async function p() {
    if (c.hash) {
      const l = c.hash.startsWith("#") ? c.hash : `#${c.hash}`;
      setTimeout(() => {
        var _a;
        (_a = document.querySelector(l)) == null ? void 0 : _a.scrollIntoView();
      }, 200);
    }
  }
  return Q(() => r.value++), (l, i) => (o(), d(ie, { modelValue: t.value, "onUpdate:modelValue": [i[0] || (i[0] = (v) => t.value = v), p], color: "primary", variant: "link", items: w.value, class: g(c.class), "unmount-on-hide": false, ui: a(G)(S.value(), a(k)) }, { content: b(({ item: v }) => [(o(), d(W(v.component)))]), _: 1 }, 8, ["modelValue", "items", "class", "ui"]));
} };
export {
  oe as default
};
