import { f as J, c as $, k as l, l as v, w as p, e as y, a4 as S, n as e, P as Q, bz as X, bA as _, U as Z, a7 as he, B as H, c6 as Ce, bc as ie, aD as ne, c7 as Oe, ad as ee, c8 as Pe, x, m as f, a5 as j, T as r, aK as be, A as k, aJ as V, z as w, y as R, a2 as C, M as D, N, O as Ae, c9 as E, ab as Be, bR as se, a1 as oe, bK as ve, bN as ye, bM as xe, R as F, aE as re, ac as ge, S as O, ca as Ke, cb as De, cc as Ue, b2 as Re, cd as Ee, E as ce, ce as je, C as He, ay as We, G as de, Q as te, bE as Me, F as ke, r as Y, aa as Ie, cf as Ne, bl as Ve, cg as Fe, aZ as Ge, I as Ze, aF as Je, aG as Qe, ap as pe, aH as Ye, a$ as Xe, Y as _e, $ as fe, a0 as et, aT as me, ch as tt, Z as at, ci as it } from "#entry";
import { u as lt, d as nt, _ as st } from "./C1COEaeA.js";
import { _ as ot } from "./BIWE6rhi.js";
import { _ as rt } from "./zXH9_LZa.js";
import "./6GRe1c0h.js";
import "./iik6CYzq.js";
var ct = J({ __name: "BaseSeparator", props: { orientation: { type: String, required: false, default: "horizontal" }, decorative: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t) {
  const s = t, n = ["horizontal", "vertical"];
  function c(b) {
    return n.includes(b);
  }
  const o = $(() => c(s.orientation) ? s.orientation : "horizontal"), d = $(() => o.value === "vertical" ? s.orientation : void 0), i = $(() => s.decorative ? { role: "none" } : { "aria-orientation": d.value, role: "separator" });
  return (b, h) => (l(), v(e(Q), S({ as: b.as, "as-child": b.asChild, "data-orientation": o.value }, i.value), { default: p(() => [y(b.$slots, "default")]), _: 3 }, 16, ["as", "as-child", "data-orientation"]));
} }), dt = ct, ut = J({ __name: "Separator", props: { orientation: { type: String, required: false, default: "horizontal" }, decorative: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(t) {
  const s = t;
  return (n, c) => (l(), v(dt, X(_(s)), { default: p(() => [y(n.$slots, "default")]), _: 3 }, 16));
} }), gt = ut;
const Le = { __name: "UDropdownMenuContent", props: { items: { type: null, required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true }, sub: { type: Boolean, required: false }, labelKey: { type: null, required: true }, descriptionKey: { type: null, required: true }, checkedIcon: { type: null, required: false }, loadingIcon: { type: null, required: false }, externalIcon: { type: [Boolean, String], required: false, skipCheck: true }, class: { type: null, required: false }, ui: { type: null, required: true }, uiOverride: { type: null, required: false }, loop: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"], setup(t, { emit: s }) {
  const n = t, c = s, o = Z(), { dir: d } = he(), i = H(), b = Ce(ie(() => n.portal)), h = ne(Oe(n, "sub", "items", "portal", "labelKey", "descriptionKey", "checkedIcon", "loadingIcon", "externalIcon", "class", "ui", "uiOverride"), c), g = () => xe(o, ["default"]), [I, m] = ee(), P = $(() => d.value === "rtl" ? i.ui.icons.chevronLeft : i.ui.icons.chevronRight), U = $(() => {
    var _a;
    return ((_a = n.items) == null ? void 0 : _a.length) ? Pe(n.items) ? n.items : [n.items] : [];
  });
  return (z, W) => (l(), x(D, null, [f(e(I), null, { default: p(({ item: a, active: q, index: u }) => [y(z.$slots, a.slot || "item", { item: a, index: u, ui: t.ui }, () => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j;
    return [y(z.$slots, a.slot ? `${a.slot}-leading` : "item-leading", { item: a, active: q, index: u, ui: t.ui }, () => {
      var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h2;
      return [a.loading ? (l(), v(j, { key: 0, name: t.loadingIcon || e(i).ui.icons.loading, "data-slot": "itemLeadingIcon", class: r(t.ui.itemLeadingIcon({ class: [(_a2 = t.uiOverride) == null ? void 0 : _a2.itemLeadingIcon, (_b2 = a.ui) == null ? void 0 : _b2.itemLeadingIcon], color: a == null ? void 0 : a.color, loading: true })) }, null, 8, ["name", "class"])) : a.icon ? (l(), v(j, { key: 1, name: a.icon, "data-slot": "itemLeadingIcon", class: r(t.ui.itemLeadingIcon({ class: [(_c2 = t.uiOverride) == null ? void 0 : _c2.itemLeadingIcon, (_d2 = a.ui) == null ? void 0 : _d2.itemLeadingIcon], color: a == null ? void 0 : a.color, active: q })) }, null, 8, ["name", "class"])) : a.avatar ? (l(), v(be, S({ key: 2, size: ((_e3 = a.ui) == null ? void 0 : _e3.itemLeadingAvatarSize) || ((_f2 = t.uiOverride) == null ? void 0 : _f2.itemLeadingAvatarSize) || t.ui.itemLeadingAvatarSize() }, a.avatar, { "data-slot": "itemLeadingAvatar", class: t.ui.itemLeadingAvatar({ class: [(_g2 = t.uiOverride) == null ? void 0 : _g2.itemLeadingAvatar, (_h2 = a.ui) == null ? void 0 : _h2.itemLeadingAvatar], active: q }) }), null, 16, ["size", "class"])) : k("", true)];
    }), e(V)(a, n.labelKey) || o[a.slot ? `${a.slot}-label` : "item-label"] || e(V)(a, n.descriptionKey) || o[a.slot ? `${a.slot}-description` : "item-description"] ? (l(), x("span", { key: 0, "data-slot": "itemWrapper", class: r(t.ui.itemWrapper({ class: [(_a = t.uiOverride) == null ? void 0 : _a.itemWrapper, (_b = a.ui) == null ? void 0 : _b.itemWrapper] })) }, [w("span", { "data-slot": "itemLabel", class: r(t.ui.itemLabel({ class: [(_c = t.uiOverride) == null ? void 0 : _c.itemLabel, (_d = a.ui) == null ? void 0 : _d.itemLabel], active: q })) }, [y(z.$slots, a.slot ? `${a.slot}-label` : "item-label", { item: a, active: q, index: u }, () => [R(C(e(V)(a, n.labelKey)), 1)]), a.target === "_blank" && t.externalIcon !== false ? (l(), v(j, { key: 0, name: typeof t.externalIcon == "string" ? t.externalIcon : e(i).ui.icons.external, "data-slot": "itemLabelExternalIcon", class: r(t.ui.itemLabelExternalIcon({ class: [(_e2 = t.uiOverride) == null ? void 0 : _e2.itemLabelExternalIcon, (_f = a.ui) == null ? void 0 : _f.itemLabelExternalIcon], color: a == null ? void 0 : a.color, active: q })) }, null, 8, ["name", "class"])) : k("", true)], 2), e(V)(a, n.descriptionKey) || o[a.slot ? `${a.slot}-description` : "item-description"] ? (l(), x("span", { key: 0, "data-slot": "itemDescription", class: r(t.ui.itemDescription({ class: [(_g = t.uiOverride) == null ? void 0 : _g.itemDescription, (_h = a.ui) == null ? void 0 : _h.itemDescription] })) }, [y(z.$slots, a.slot ? `${a.slot}-description` : "item-description", { item: a, active: q, index: u }, () => [R(C(e(V)(a, n.descriptionKey)), 1)])], 2)) : k("", true)], 2)) : k("", true), w("span", { "data-slot": "itemTrailing", class: r(t.ui.itemTrailing({ class: [(_i = t.uiOverride) == null ? void 0 : _i.itemTrailing, (_j = a.ui) == null ? void 0 : _j.itemTrailing] })) }, [y(z.$slots, a.slot ? `${a.slot}-trailing` : "item-trailing", { item: a, active: q, index: u, ui: t.ui }, () => {
      var _a2, _b2, _c2, _d2, _e3, _f2;
      return [((_a2 = a.children) == null ? void 0 : _a2.length) ? (l(), v(j, { key: 0, name: P.value, "data-slot": "itemTrailingIcon", class: r(t.ui.itemTrailingIcon({ class: [(_b2 = t.uiOverride) == null ? void 0 : _b2.itemTrailingIcon, (_c2 = a.ui) == null ? void 0 : _c2.itemTrailingIcon], color: a == null ? void 0 : a.color, active: q })) }, null, 8, ["name", "class"])) : ((_d2 = a.kbds) == null ? void 0 : _d2.length) ? (l(), x("span", { key: 1, "data-slot": "itemTrailingKbds", class: r(t.ui.itemTrailingKbds({ class: [(_e3 = t.uiOverride) == null ? void 0 : _e3.itemTrailingKbds, (_f2 = a.ui) == null ? void 0 : _f2.itemTrailingKbds] })) }, [(l(true), x(D, null, N(a.kbds, (A, M) => {
        var _a3, _b3;
        return l(), v(Ae, S({ key: M, size: ((_a3 = a.ui) == null ? void 0 : _a3.itemTrailingKbdsSize) || ((_b3 = t.uiOverride) == null ? void 0 : _b3.itemTrailingKbdsSize) || t.ui.itemTrailingKbdsSize() }, { ref_for: true }, typeof A == "string" ? { value: A } : A), null, 16, ["size"]);
      }), 128))], 2)) : k("", true)];
    }), f(e(E).ItemIndicator, { "as-child": "" }, { default: p(() => {
      var _a2, _b2;
      return [f(j, { name: t.checkedIcon || e(i).ui.icons.check, "data-slot": "itemTrailingIcon", class: r(t.ui.itemTrailingIcon({ class: [(_a2 = t.uiOverride) == null ? void 0 : _a2.itemTrailingIcon, (_b2 = a.ui) == null ? void 0 : _b2.itemTrailingIcon], color: a == null ? void 0 : a.color })) }, null, 8, ["name", "class"])];
    }), _: 2 }, 1024)], 2)];
  })]), _: 3 }), f(e(E).Portal, X(_(e(b))), { default: p(() => {
    var _a;
    return [(l(), v(Be(t.sub ? e(E).SubContent : e(E).Content), S({ "data-slot": "content", class: t.ui.content({ class: [(_a = t.uiOverride) == null ? void 0 : _a.content, n.class] }) }, e(h)), { default: p(() => {
      var _a2;
      return [y(z.$slots, "content-top", { sub: t.sub ?? false }), w("div", { role: "presentation", "data-slot": "viewport", class: r(t.ui.viewport({ class: (_a2 = t.uiOverride) == null ? void 0 : _a2.viewport })) }, [(l(true), x(D, null, N(U.value, (a, q) => {
        var _a3;
        return l(), v(e(E).Group, { key: `group-${q}`, "data-slot": "group", class: r(t.ui.group({ class: (_a3 = t.uiOverride) == null ? void 0 : _a3.group })) }, { default: p(() => [(l(true), x(D, null, N(a, (u, A) => {
          var _a4, _b, _c, _d, _e2, _f, _g;
          return l(), x(D, { key: `group-${q}-${A}` }, [u.type === "label" ? (l(), v(e(E).Label, { key: 0, "data-slot": "label", class: r(t.ui.label({ class: [(_a4 = t.uiOverride) == null ? void 0 : _a4.label, (_b = u.ui) == null ? void 0 : _b.label, u.class] })) }, { default: p(() => [f(e(m), { item: u, index: A }, null, 8, ["item", "index"])]), _: 2 }, 1032, ["class"])) : u.type === "separator" ? (l(), v(e(E).Separator, { key: 1, "data-slot": "separator", class: r(t.ui.separator({ class: [(_c = t.uiOverride) == null ? void 0 : _c.separator, (_d = u.ui) == null ? void 0 : _d.separator, u.class] })) }, null, 8, ["class"])) : ((_e2 = u == null ? void 0 : u.children) == null ? void 0 : _e2.length) ? (l(), v(e(E).Sub, { key: 2, open: u.open, "default-open": u.defaultOpen }, { default: p(() => {
            var _a5, _b2, _c2;
            return [f(e(E).SubTrigger, { as: "button", type: "button", disabled: u.disabled, "text-value": e(V)(u, n.labelKey), "data-slot": "item", class: r(t.ui.item({ class: [(_a5 = t.uiOverride) == null ? void 0 : _a5.item, (_b2 = u.ui) == null ? void 0 : _b2.item, u.class], color: u == null ? void 0 : u.color })) }, { default: p(() => [f(e(m), { item: u, index: A }, null, 8, ["item", "index"])]), _: 2 }, 1032, ["disabled", "text-value", "class"]), f(Le, S({ sub: "", class: (_c2 = u.ui) == null ? void 0 : _c2.content, ui: t.ui, "ui-override": t.uiOverride, portal: t.portal, items: u.children, align: "start", "align-offset": -4, "side-offset": 3, "label-key": t.labelKey, "description-key": t.descriptionKey, "checked-icon": t.checkedIcon, "loading-icon": t.loadingIcon, "external-icon": t.externalIcon }, { ref_for: true }, u.content), se({ _: 2 }, [N(g(), (M, L) => ({ name: L, fn: p((B) => [y(z.$slots, L, S({ ref_for: true }, B))]) }))]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon"])];
          }), _: 2 }, 1032, ["open", "default-open"])) : u.type === "checkbox" ? (l(), v(e(E).CheckboxItem, { key: 3, "model-value": u.checked, disabled: u.disabled, "text-value": e(V)(u, n.labelKey), "data-slot": "item", class: r(t.ui.item({ class: [(_f = t.uiOverride) == null ? void 0 : _f.item, (_g = u.ui) == null ? void 0 : _g.item, u.class], color: u == null ? void 0 : u.color })), "onUpdate:modelValue": u.onUpdateChecked, onSelect: u.onSelect }, { default: p(() => [f(e(m), { item: u, index: A }, null, 8, ["item", "index"])]), _: 2 }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (l(), v(oe, S({ key: 4, ref_for: true }, e(ve)(u), { custom: "" }), { default: p(({ active: M, ...L }) => [f(e(E).Item, { "as-child": "", disabled: u.disabled, "text-value": e(V)(u, n.labelKey), onSelect: u.onSelect }, { default: p(() => {
            var _a5, _b2;
            return [f(ye, S({ ref_for: true }, L, { "data-slot": "item", class: t.ui.item({ class: [(_a5 = t.uiOverride) == null ? void 0 : _a5.item, (_b2 = u.ui) == null ? void 0 : _b2.item, u.class], color: u == null ? void 0 : u.color, active: M }) }), { default: p(() => [f(e(m), { item: u, active: M, index: A }, null, 8, ["item", "active", "index"])]), _: 2 }, 1040, ["class"])];
          }), _: 2 }, 1032, ["disabled", "text-value", "onSelect"])]), _: 2 }, 1040))], 64);
        }), 128))]), _: 2 }, 1032, ["class"]);
      }), 128))], 2), y(z.$slots, "default"), y(z.$slots, "content-bottom", { sub: t.sub ?? false })];
    }), _: 3 }, 16, ["class"]))];
  }), _: 3 }, 16)], 64));
} }, pt = { slots: { content: "min-w-32 bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-dropdown-menu-content-transform-origin) flex flex-col", viewport: "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1", arrow: "fill-bg stroke-default", group: "p-1 isolate", label: "w-full flex items-center font-semibold text-highlighted", separator: "-mx-1 my-1 h-px bg-border", item: "group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75", itemLeadingIcon: "shrink-0", itemLeadingAvatar: "shrink-0", itemLeadingAvatarSize: "", itemTrailing: "ms-auto inline-flex gap-1.5 items-center", itemTrailingIcon: "shrink-0", itemTrailingKbds: "hidden lg:inline-flex items-center shrink-0", itemTrailingKbdsSize: "", itemWrapper: "flex-1 flex flex-col text-start min-w-0", itemLabel: "truncate", itemDescription: "truncate text-muted", itemLabelExternalIcon: "inline-block size-3 align-top text-dimmed" }, variants: { color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, active: { true: { item: "text-highlighted before:bg-elevated", itemLeadingIcon: "text-default" }, false: { item: ["text-default data-highlighted:text-highlighted data-[state=open]:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:before:bg-elevated/50", "transition-colors before:transition-colors"], itemLeadingIcon: ["text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default", "transition-colors"] } }, loading: { true: { itemLeadingIcon: "animate-spin" } }, size: { xs: { label: "p-1 text-xs gap-1", item: "p-1 text-xs gap-1", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemTrailingIcon: "size-4", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "sm" }, sm: { label: "p-1.5 text-xs gap-1.5", item: "p-1.5 text-xs gap-1.5", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemTrailingIcon: "size-4", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "sm" }, md: { label: "p-1.5 text-sm gap-1.5", item: "p-1.5 text-sm gap-1.5", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemTrailingIcon: "size-5", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "md" }, lg: { label: "p-2 text-sm gap-2", item: "p-2 text-sm gap-2", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemTrailingIcon: "size-5", itemTrailingKbds: "gap-1", itemTrailingKbdsSize: "md" }, xl: { label: "p-2 text-base gap-2", item: "p-2 text-base gap-2", itemLeadingIcon: "size-6", itemLeadingAvatarSize: "xs", itemTrailingIcon: "size-6", itemTrailingKbds: "gap-1", itemTrailingKbdsSize: "lg" } } }, compoundVariants: [{ color: "primary", active: false, class: { item: "text-primary data-highlighted:text-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10", itemLeadingIcon: "text-primary/75 group-data-highlighted:text-primary group-data-[state=open]:text-primary" } }, { color: "secondary", active: false, class: { item: "text-secondary data-highlighted:text-secondary data-highlighted:before:bg-secondary/10 data-[state=open]:before:bg-secondary/10", itemLeadingIcon: "text-secondary/75 group-data-highlighted:text-secondary group-data-[state=open]:text-secondary" } }, { color: "success", active: false, class: { item: "text-success data-highlighted:text-success data-highlighted:before:bg-success/10 data-[state=open]:before:bg-success/10", itemLeadingIcon: "text-success/75 group-data-highlighted:text-success group-data-[state=open]:text-success" } }, { color: "info", active: false, class: { item: "text-info data-highlighted:text-info data-highlighted:before:bg-info/10 data-[state=open]:before:bg-info/10", itemLeadingIcon: "text-info/75 group-data-highlighted:text-info group-data-[state=open]:text-info" } }, { color: "warning", active: false, class: { item: "text-warning data-highlighted:text-warning data-highlighted:before:bg-warning/10 data-[state=open]:before:bg-warning/10", itemLeadingIcon: "text-warning/75 group-data-highlighted:text-warning group-data-[state=open]:text-warning" } }, { color: "error", active: false, class: { item: "text-error data-highlighted:text-error data-highlighted:before:bg-error/10 data-[state=open]:before:bg-error/10", itemLeadingIcon: "text-error/75 group-data-highlighted:text-error group-data-[state=open]:text-error" } }, { color: "neutral", active: false, class: { item: "text-neutral data-highlighted:text-neutral data-highlighted:before:bg-neutral/10 data-[state=open]:before:bg-neutral/10", itemLeadingIcon: "text-neutral/75 group-data-highlighted:text-neutral group-data-[state=open]:text-neutral" } }, { color: "primary", active: true, class: { item: "text-primary before:bg-primary/10", itemLeadingIcon: "text-primary" } }, { color: "secondary", active: true, class: { item: "text-secondary before:bg-secondary/10", itemLeadingIcon: "text-secondary" } }, { color: "success", active: true, class: { item: "text-success before:bg-success/10", itemLeadingIcon: "text-success" } }, { color: "info", active: true, class: { item: "text-info before:bg-info/10", itemLeadingIcon: "text-info" } }, { color: "warning", active: true, class: { item: "text-warning before:bg-warning/10", itemLeadingIcon: "text-warning" } }, { color: "error", active: true, class: { item: "text-error before:bg-error/10", itemLeadingIcon: "text-error" } }, { color: "neutral", active: true, class: { item: "text-neutral before:bg-neutral/10", itemLeadingIcon: "text-neutral" } }], defaultVariants: { size: "md" } }, ft = { __name: "UDropdownMenu", props: { size: { type: null, required: false }, items: { type: null, required: false }, checkedIcon: { type: null, required: false }, loadingIcon: { type: null, required: false }, externalIcon: { type: [Boolean, String], required: false, skipCheck: true, default: true }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, labelKey: { type: null, required: false, default: "label" }, descriptionKey: { type: null, required: false, default: "description" }, disabled: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: ["update:open"], setup(t, { emit: s }) {
  const n = t, c = s, o = Z(), d = H(), i = F("dropdownMenu", n), b = ne(re(n, "defaultOpen", "open", "modal"), c), h = ie(() => ge(n.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 })), g = ie(() => ge(n.arrow, { rounded: true })), I = () => xe(o, ["default"]), m = $(() => {
    var _a;
    return O({ extend: O(pt), ...((_a = d.ui) == null ? void 0 : _a.dropdownMenu) || {} })({ size: n.size });
  });
  return (P, U) => (l(), v(e(Ue), X(_(e(b))), { default: p(({ open: z }) => {
    var _a;
    return [o.default ? (l(), v(e(Ke), { key: 0, "as-child": "", class: r(n.class), disabled: t.disabled }, { default: p(() => [y(P.$slots, "default", { open: z })]), _: 2 }, 1032, ["class", "disabled"])) : k("", true), f(Le, S({ class: m.value.content({ class: [!o.default && n.class, (_a = e(i)) == null ? void 0 : _a.content] }), ui: m.value, "ui-override": e(i) }, h.value, { items: t.items, portal: t.portal, "label-key": t.labelKey, "description-key": t.descriptionKey, "checked-icon": t.checkedIcon, "loading-icon": t.loadingIcon, "external-icon": t.externalIcon }), se({ default: p(() => {
      var _a2;
      return [t.arrow ? (l(), v(e(De), S({ key: 0 }, g.value, { "data-slot": "arrow", class: m.value.arrow({ class: (_a2 = e(i)) == null ? void 0 : _a2.arrow }) }), null, 16, ["class"])) : k("", true)];
    }), _: 2 }, [N(I(), (W, a) => ({ name: a, fn: p((q) => [y(P.$slots, a, X(_(q)))]) }))]), 1040, ["class", "ui", "ui-override", "items", "portal", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon"])];
  }), _: 3 }, 16));
} }, mt = { base: "relative", variants: { size: { xs: "", sm: "", md: "", lg: "", xl: "" }, orientation: { horizontal: "inline-flex -space-x-px", vertical: "flex flex-col -space-y-px" } } }, ht = { __name: "UFieldGroup", props: { as: { type: null, required: false }, size: { type: null, required: false }, orientation: { type: null, required: false, default: "horizontal" }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(t) {
  const s = t, n = H(), c = F("fieldGroup", s), o = $(() => {
    var _a;
    return O({ extend: O(mt), ...((_a = n.ui) == null ? void 0 : _a.fieldGroup) || {} });
  });
  return Re(Ee, $(() => ({ orientation: s.orientation, size: s.size }))), (d, i) => {
    var _a;
    return l(), v(e(Q), { as: t.as, "data-orientation": t.orientation, class: r(o.value({ orientation: t.orientation, class: [(_a = e(c)) == null ? void 0 : _a.base, s.class] })) }, { default: p(() => [y(d.$slots, "default")]), _: 3 }, 8, ["as", "data-orientation", "class"]);
  };
} }, bt = J({ __name: "DocsPageHeaderLinks", setup(t) {
  var _a;
  const s = ce(), n = je(), c = ((_a = He().app) == null ? void 0 : _a.baseURL) || "/", { copy: o, copied: d } = We(), { t: i } = de(), b = $(() => {
    var _a2;
    return `${(_a2 = window == null ? void 0 : window.location) == null ? void 0 : _a2.origin}${c}raw${s.path}.md`;
  }), h = [[{ label: i("docs.copy.link"), icon: "i-lucide-link", onSelect() {
    o(b.value);
  } }, { label: i("docs.copy.view"), icon: "i-simple-icons:markdown", target: "_blank", to: b.value }, { label: i("docs.copy.gpt"), icon: "i-simple-icons:openai", target: "_blank", to: `https://chatgpt.com/?hints=search&q=${encodeURIComponent(`Read ${b.value} so I can ask questions about it.`)}` }, { label: i("docs.copy.claude"), icon: "i-simple-icons:anthropic", target: "_blank", to: `https://claude.ai/new?q=${encodeURIComponent(`Read ${b.value} so I can ask questions about it.`)}` }], [{ label: "Copy MCP Server URL", icon: "i-lucide-link", onSelect() {
    var _a2;
    o(`${(_a2 = window == null ? void 0 : window.location) == null ? void 0 : _a2.origin}${c}mcp`), n.add({ title: "Copied to clipboard", icon: "i-lucide-check-circle" });
  } }, { label: "Add MCP Server", icon: "i-simple-icons:cursor", target: "_blank", to: "/mcp/deeplink" }]];
  async function g() {
    const I = await $fetch(`/raw${s.path}.md`);
    o(I);
  }
  return (I, m) => {
    const P = te, U = ft, z = ht;
    return l(), v(z, { size: "sm" }, { default: p(() => [f(P, { label: e(i)("docs.copy.page"), icon: e(d) ? "i-lucide-check" : "i-lucide-copy", color: "neutral", variant: "soft", ui: { leadingIcon: "text-neutral size-3.5" }, onClick: g }, null, 8, ["label", "icon"]), f(U, { size: "sm", items: h, content: { align: "end", side: "bottom", sideOffset: 8 } }, { default: p(() => [f(P, { icon: "i-lucide-chevron-down", color: "neutral", variant: "soft", class: "border-l border-muted" })]), _: 1 })]), _: 1 });
  };
} }), vt = Object.assign(bt, { __name: "DocsPageHeaderLinks" }), yt = { slots: { root: "relative border-b border-default py-8", container: "", wrapper: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", headline: "mb-2.5 text-sm font-semibold text-primary flex items-center gap-1.5", title: "text-3xl sm:text-4xl text-pretty font-bold text-highlighted", description: "text-lg text-pretty text-muted", links: "flex flex-wrap items-center gap-1.5" }, variants: { title: { true: { description: "mt-4" } } } }, xt = { __name: "UPageHeader", props: { as: { type: null, required: false }, headline: { type: String, required: false }, title: { type: String, required: false }, description: { type: String, required: false }, links: { type: Array, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(t) {
  const s = t, n = Z(), c = H(), o = F("pageHeader", s), d = $(() => {
    var _a;
    return O({ extend: O(yt), ...((_a = c.ui) == null ? void 0 : _a.pageHeader) || {} })({ title: !!s.title || !!n.title });
  });
  return (i, b) => {
    var _a;
    return l(), v(e(Q), { as: t.as, "data-slot": "root", class: r(d.value.root({ class: [(_a = e(o)) == null ? void 0 : _a.root, s.class] })) }, { default: p(() => {
      var _a2, _b, _c, _d, _e2, _f, _g;
      return [t.headline || n.headline ? (l(), x("div", { key: 0, "data-slot": "headline", class: r(d.value.headline({ class: (_a2 = e(o)) == null ? void 0 : _a2.headline })) }, [y(i.$slots, "headline", {}, () => [R(C(t.headline), 1)])], 2)) : k("", true), w("div", { "data-slot": "container", class: r(d.value.container({ class: (_b = e(o)) == null ? void 0 : _b.container })) }, [w("div", { "data-slot": "wrapper", class: r(d.value.wrapper({ class: (_c = e(o)) == null ? void 0 : _c.wrapper })) }, [t.title || n.title ? (l(), x("h1", { key: 0, "data-slot": "title", class: r(d.value.title({ class: (_d = e(o)) == null ? void 0 : _d.title })) }, [y(i.$slots, "title", {}, () => [R(C(t.title), 1)])], 2)) : k("", true), ((_e2 = t.links) == null ? void 0 : _e2.length) || n.links ? (l(), x("div", { key: 1, "data-slot": "links", class: r(d.value.links({ class: (_f = e(o)) == null ? void 0 : _f.links })) }, [y(i.$slots, "links", {}, () => [(l(true), x(D, null, N(t.links, (h, g) => (l(), v(te, S({ key: g, color: "neutral", variant: "outline" }, { ref_for: true }, h), null, 16))), 128))])], 2)) : k("", true)], 2), t.description || n.description ? (l(), x("div", { key: 0, "data-slot": "description", class: r(d.value.description({ class: (_g = e(o)) == null ? void 0 : _g.description })) }, [y(i.$slots, "description", {}, () => [R(C(t.description), 1)])], 2)) : k("", true), y(i.$slots, "default")], 2)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} }, kt = { slots: { root: "flex items-center align-center text-center", border: "", container: "font-medium text-default flex", icon: "shrink-0 size-5", avatar: "shrink-0", avatarSize: "2xs", label: "text-sm" }, variants: { color: { primary: { border: "border-primary" }, secondary: { border: "border-secondary" }, success: { border: "border-success" }, info: { border: "border-info" }, warning: { border: "border-warning" }, error: { border: "border-error" }, neutral: { border: "border-default" } }, orientation: { horizontal: { root: "w-full flex-row", border: "w-full", container: "mx-3 whitespace-nowrap" }, vertical: { root: "h-full flex-col", border: "h-full", container: "my-2" } }, size: { xs: "", sm: "", md: "", lg: "", xl: "" }, type: { solid: { border: "border-solid" }, dashed: { border: "border-dashed" }, dotted: { border: "border-dotted" } } }, compoundVariants: [{ orientation: "horizontal", size: "xs", class: { border: "border-t" } }, { orientation: "horizontal", size: "sm", class: { border: "border-t-[2px]" } }, { orientation: "horizontal", size: "md", class: { border: "border-t-[3px]" } }, { orientation: "horizontal", size: "lg", class: { border: "border-t-[4px]" } }, { orientation: "horizontal", size: "xl", class: { border: "border-t-[5px]" } }, { orientation: "vertical", size: "xs", class: { border: "border-s" } }, { orientation: "vertical", size: "sm", class: { border: "border-s-[2px]" } }, { orientation: "vertical", size: "md", class: { border: "border-s-[3px]" } }, { orientation: "vertical", size: "lg", class: { border: "border-s-[4px]" } }, { orientation: "vertical", size: "xl", class: { border: "border-s-[5px]" } }], defaultVariants: { color: "neutral", size: "xs", type: "solid" } }, qe = { __name: "USeparator", props: { as: { type: null, required: false }, label: { type: String, required: false }, icon: { type: null, required: false }, avatar: { type: Object, required: false }, color: { type: null, required: false }, size: { type: null, required: false }, type: { type: null, required: false }, orientation: { type: null, required: false, default: "horizontal" }, class: { type: null, required: false }, ui: { type: null, required: false }, decorative: { type: Boolean, required: false } }, setup(t) {
  const s = t, n = Z(), c = H(), o = F("separator", s), d = Me(re(s, "as", "decorative", "orientation")), i = $(() => {
    var _a;
    return O({ extend: O(kt), ...((_a = c.ui) == null ? void 0 : _a.separator) || {} })({ color: s.color, orientation: s.orientation, size: s.size, type: s.type });
  });
  return (b, h) => {
    var _a;
    return l(), v(e(gt), S(e(d), { "data-slot": "root", class: i.value.root({ class: [(_a = e(o)) == null ? void 0 : _a.root, s.class] }) }), { default: p(() => {
      var _a2, _b, _c;
      return [w("div", { "data-slot": "border", class: r(i.value.border({ class: (_a2 = e(o)) == null ? void 0 : _a2.border })) }, null, 2), t.label || t.icon || t.avatar || n.default ? (l(), x(D, { key: 0 }, [w("div", { "data-slot": "container", class: r(i.value.container({ class: (_b = e(o)) == null ? void 0 : _b.container })) }, [y(b.$slots, "default", { ui: i.value }, () => {
        var _a3, _b2, _c2, _d;
        return [t.label ? (l(), x("span", { key: 0, "data-slot": "label", class: r(i.value.label({ class: (_a3 = e(o)) == null ? void 0 : _a3.label })) }, C(t.label), 3)) : t.icon ? (l(), v(j, { key: 1, name: t.icon, "data-slot": "icon", class: r(i.value.icon({ class: (_b2 = e(o)) == null ? void 0 : _b2.icon })) }, null, 8, ["name", "class"])) : t.avatar ? (l(), v(be, S({ key: 2, size: ((_c2 = e(o)) == null ? void 0 : _c2.avatarSize) || i.value.avatarSize() }, t.avatar, { "data-slot": "avatar", class: i.value.avatar({ class: (_d = e(o)) == null ? void 0 : _d.avatar }) }), null, 16, ["size", "class"])) : k("", true)];
      })], 2), w("div", { "data-slot": "border", class: r(i.value.border({ class: (_c = e(o)) == null ? void 0 : _c.border })) }, null, 2)], 64)) : k("", true)];
    }), _: 3 }, 16, ["class"]);
  };
} }, It = { slots: { root: "grid grid-cols-1 sm:grid-cols-2 gap-8", link: ["group block px-6 py-8 rounded-lg border border-default hover:bg-elevated/50 focus-visible:outline-primary", "transition-colors"], linkLeading: ["inline-flex items-center rounded-full p-1.5 bg-elevated group-hover:bg-primary/10 ring ring-accented mb-4 group-hover:ring-primary/50", "transition"], linkLeadingIcon: ["size-5 shrink-0 text-highlighted group-hover:text-primary", "transition-[color,translate]"], linkTitle: "font-medium text-[15px] text-highlighted mb-1 truncate", linkDescription: "text-sm text-muted line-clamp-2" }, variants: { direction: { left: { linkLeadingIcon: ["group-active:-translate-x-0.5"] }, right: { link: "text-right", linkLeadingIcon: ["group-active:translate-x-0.5"] } } } }, Lt = { key: 1, class: "hidden sm:block" }, qt = Object.assign({ inheritAttrs: false }, { __name: "UContentSurround", props: { as: { type: null, required: false }, prevIcon: { type: null, required: false }, nextIcon: { type: null, required: false }, surround: { type: Array, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(t) {
  const s = t, n = H(), c = F("contentSurround", s), [o, d] = ee({ props: { link: Object, icon: String, direction: String } }), i = $(() => {
    var _a;
    return O({ extend: O(It), ...((_a = n.ui) == null ? void 0 : _a.contentSurround) || {} })();
  });
  return (b, h) => {
    var _a;
    return l(), x(D, null, [f(e(o), null, { default: p(({ link: g, icon: I, direction: m }) => {
      var _a2, _b;
      return [g ? (l(), v(oe, { key: 0, to: g.path, raw: "", "data-slot": "link", class: r(i.value.link({ class: [(_a2 = e(c)) == null ? void 0 : _a2.link, (_b = g.ui) == null ? void 0 : _b.link, g.class], direction: m })) }, { default: p(() => [y(b.$slots, "link", { link: g, ui: i.value }, () => {
        var _a3, _b2, _c, _d, _e2, _f;
        return [w("div", { "data-slot": "linkLeading", class: r(i.value.linkLeading({ class: [(_a3 = e(c)) == null ? void 0 : _a3.linkLeading, (_b2 = g.ui) == null ? void 0 : _b2.linkLeading] })) }, [y(b.$slots, "link-leading", { link: g, ui: i.value }, () => {
          var _a4, _b3;
          return [f(j, { name: g.icon || I, "data-slot": "linkLeadingIcon", class: r(i.value.linkLeadingIcon({ class: [(_a4 = e(c)) == null ? void 0 : _a4.linkLeadingIcon, (_b3 = g.ui) == null ? void 0 : _b3.linkLeadingIcon], direction: m })) }, null, 8, ["name", "class"])];
        })], 2), w("p", { "data-slot": "linkTitle", class: r(i.value.linkTitle({ class: [(_c = e(c)) == null ? void 0 : _c.linkTitle, (_d = g.ui) == null ? void 0 : _d.linkTitle] })) }, [y(b.$slots, "link-title", { link: g, ui: i.value }, () => [R(C(g.title), 1)])], 2), w("p", { "data-slot": "linkDescription", class: r(i.value.linkDescription({ class: [(_e2 = e(c)) == null ? void 0 : _e2.linkDescription, (_f = g.ui) == null ? void 0 : _f.linkDescription] })) }, [y(b.$slots, "link-description", { link: g, ui: i.value }, () => [R(C(g.description), 1)])], 2)];
      })]), _: 2 }, 1032, ["to", "class"])) : (l(), x("span", Lt, "\xA0"))];
    }), _: 3 }), t.surround ? (l(), v(e(Q), S({ key: 0, as: t.as }, b.$attrs, { "data-slot": "root", class: i.value.root({ class: [(_a = e(c)) == null ? void 0 : _a.root, s.class] }) }), { default: p(() => [f(e(d), { link: t.surround[0], icon: t.prevIcon || e(n).ui.icons.arrowLeft, direction: "left" }, null, 8, ["link", "icon"]), f(e(d), { link: t.surround[1], icon: t.nextIcon || e(n).ui.icons.arrowRight, direction: "right" }, null, 8, ["link", "icon"])]), _: 1 }, 16, ["as", "class"])) : k("", true)], 64);
  };
} }), wt = { slots: { root: "flex flex-col gap-3", title: "text-sm font-semibold flex items-center gap-1.5", list: "flex flex-col gap-2", item: "relative", link: "group text-sm flex items-center gap-1.5 focus-visible:outline-primary", linkLeadingIcon: "size-5 shrink-0", linkLabel: "truncate", linkLabelExternalIcon: "size-3 absolute top-0 text-dimmed" }, variants: { active: { true: { link: "text-primary font-medium" }, false: { link: ["text-muted hover:text-default", "transition-colors"] } } } }, $t = { __name: "UPageLinks", props: { as: { type: null, required: false, default: "nav" }, title: { type: String, required: false }, links: { type: Array, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(t) {
  const s = t, n = Z(), c = H(), o = F("pageLinks", s), d = $(() => {
    var _a;
    return O({ extend: O(wt), ...((_a = c.ui) == null ? void 0 : _a.pageLinks) || {} })();
  });
  return (i, b) => {
    var _a;
    return l(), v(e(Q), { as: t.as, "data-slot": "root", class: r(d.value.root({ class: [(_a = e(o)) == null ? void 0 : _a.root, s.class] })) }, { default: p(() => {
      var _a2, _b;
      return [t.title || n.title ? (l(), x("p", { key: 0, "data-slot": "title", class: r(d.value.title({ class: (_a2 = e(o)) == null ? void 0 : _a2.title })) }, [y(i.$slots, "title", {}, () => [R(C(t.title), 1)])], 2)) : k("", true), w("ul", { "data-slot": "list", class: r(d.value.list({ class: (_b = e(o)) == null ? void 0 : _b.list })) }, [(l(true), x(D, null, N(t.links, (h, g) => {
        var _a3, _b2;
        return l(), x("li", { key: g, "data-slot": "item", class: r(d.value.item({ class: [(_a3 = e(o)) == null ? void 0 : _a3.item, (_b2 = h.ui) == null ? void 0 : _b2.item] })) }, [f(oe, S({ ref_for: true }, e(ve)(h), { custom: "" }), { default: p(({ active: I, ...m }) => {
          var _a4, _b3;
          return [f(ye, S({ ref_for: true }, m, { "data-slot": "link", class: d.value.link({ class: [(_a4 = e(o)) == null ? void 0 : _a4.link, (_b3 = h.ui) == null ? void 0 : _b3.link, h.class], active: I }) }), { default: p(() => [y(i.$slots, "link", { link: h, active: I, ui: d.value }, () => {
            var _a5, _b4, _c, _d;
            return [y(i.$slots, "link-leading", { link: h, active: I, ui: d.value }, () => {
              var _a6, _b5;
              return [h.icon ? (l(), v(j, { key: 0, name: h.icon, "data-slot": "linkLeadingIcon", class: r(d.value.linkLeadingIcon({ class: [(_a6 = e(o)) == null ? void 0 : _a6.linkLeadingIcon, (_b5 = h.ui) == null ? void 0 : _b5.linkLeadingIcon], active: I })) }, null, 8, ["name", "class"])) : k("", true)];
            }), h.label || n["link-label"] ? (l(), x("span", { key: 0, "data-slot": "linkLabel", class: r(d.value.linkLabel({ class: [(_a5 = e(o)) == null ? void 0 : _a5.linkLabel, (_b4 = h.ui) == null ? void 0 : _b4.linkLabel], active: I })) }, [y(i.$slots, "link-label", { link: h, active: I }, () => [R(C(h.label), 1)]), h.target === "_blank" ? (l(), v(j, { key: 0, name: e(c).ui.icons.external, "data-slot": "linkLabelExternalIcon", class: r(d.value.linkLabelExternalIcon({ class: [(_c = e(o)) == null ? void 0 : _c.linkLabelExternalIcon, (_d = h.ui) == null ? void 0 : _d.linkLabelExternalIcon], active: I })) }, null, 8, ["name", "class"])) : k("", true)], 2)) : k("", true), y(i.$slots, "link-trailing", { link: h, active: I })];
          })]), _: 2 }, 1040, ["class"])];
        }), _: 2 }, 1040)], 2);
      }), 128))], 2)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} }, zt = { key: 0, class: "hidden lg:block space-y-6" }, St = J({ __name: "DocsAsideRightBottom", setup(t) {
  const n = ce().path, c = H(), { t: o } = de(), { isEnabled: d, open: i } = ke(), b = $(() => {
    var _a;
    return d.value && ((_a = c.assistant) == null ? void 0 : _a.explainWithAi) !== false;
  }), h = $(() => {
    var _a, _b;
    return ((_b = (_a = c.assistant) == null ? void 0 : _a.icons) == null ? void 0 : _b.explain) || "i-lucide-brain";
  });
  return (g, I) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m;
    const m = qe, P = $t, U = te;
    return ((_c = (_b = (_a = e(c).toc) == null ? void 0 : _a.bottom) == null ? void 0 : _b.links) == null ? void 0 : _c.length) || e(b) ? (l(), x("div", zt, [f(m, { type: "dashed" }), ((_f = (_e2 = (_d = e(c).toc) == null ? void 0 : _d.bottom) == null ? void 0 : _e2.links) == null ? void 0 : _f.length) ? (l(), v(P, { key: 0, title: ((_h = (_g = e(c).toc) == null ? void 0 : _g.bottom) == null ? void 0 : _h.title) || e(o)("docs.links"), links: (_j = (_i = e(c).toc) == null ? void 0 : _i.bottom) == null ? void 0 : _j.links }, null, 8, ["title", "links"])) : k("", true), ((_m = (_l = (_k = e(c).toc) == null ? void 0 : _k.bottom) == null ? void 0 : _l.links) == null ? void 0 : _m.length) && e(b) ? (l(), v(m, { key: 1, type: "dashed" })) : k("", true), e(b) ? (l(), v(U, { key: 2, icon: e(h), label: e(o)("assistant.explainWithAi"), size: "sm", variant: "link", class: "p-0 text-sm", color: "neutral", onClick: I[0] || (I[0] = (z) => e(i)(`Explain the page ${e(n)}`, true)) }, null, 8, ["icon", "label"])) : k("", true)])) : k("", true);
  };
} }), Tt = Object.assign(St, { __name: "DocsAsideRightBottom" });
function Ct() {
  const t = Y(), s = Y([]), n = Y([]);
  function c(d) {
    d.forEach((i) => {
      const b = i.target.id;
      b && (i.isIntersecting ? s.value = [...s.value, b] : s.value = s.value.filter((h) => h !== b));
    });
  }
  function o(d) {
    d.forEach((i) => {
      t.value && t.value.observe(i);
    });
  }
  return Ie(s, (d, i) => {
    d.length === 0 ? n.value = i : n.value = d;
  }), Ne(() => t.value = new IntersectionObserver(c)), Ve(() => {
    var _a;
    return (_a = t.value) == null ? void 0 : _a.disconnect();
  }), { visibleHeadings: s, activeHeadings: n, updateHeadings: o };
}
const Ot = { slots: { root: "sticky top-(--ui-header-height) z-10 bg-default/75 lg:bg-[initial] backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]", container: "pt-4 sm:pt-6 pb-2.5 sm:pb-4.5 lg:py-8 border-b border-dashed border-default lg:border-0 flex flex-col", top: "", bottom: "hidden lg:flex lg:flex-col gap-6", trigger: "group text-sm font-semibold flex-1 flex items-center gap-1.5 py-1.5 -mt-1.5 focus-visible:outline-primary", title: "truncate", trailing: "ms-auto inline-flex gap-1.5 items-center", trailingIcon: "size-5 transform transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180 lg:hidden", content: "relative data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden focus:outline-none", list: "min-w-0", listWithChildren: "ms-3", item: "min-w-0", itemWithChildren: "", link: "group relative text-sm flex items-center focus-visible:outline-primary py-1", linkText: "truncate", indicator: "absolute ms-2.5 transition-[translate,height] duration-200 h-(--indicator-size) translate-y-(--indicator-position) w-px rounded-full" }, variants: { color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, highlightColor: { primary: { indicator: "bg-primary" }, secondary: { indicator: "bg-secondary" }, success: { indicator: "bg-success" }, info: { indicator: "bg-info" }, warning: { indicator: "bg-warning" }, error: { indicator: "bg-error" }, neutral: { indicator: "bg-inverted" } }, active: { false: { link: ["text-muted hover:text-default", "transition-colors"] } }, highlight: { true: { list: "ms-2.5 ps-4 border-s border-default", item: "-ms-px" } }, body: { true: { bottom: "mt-6" } } }, compoundVariants: [{ color: "primary", active: true, class: { link: "text-primary", linkLeadingIcon: "text-primary" } }, { color: "secondary", active: true, class: { link: "text-secondary", linkLeadingIcon: "text-secondary" } }, { color: "success", active: true, class: { link: "text-success", linkLeadingIcon: "text-success" } }, { color: "info", active: true, class: { link: "text-info", linkLeadingIcon: "text-info" } }, { color: "warning", active: true, class: { link: "text-warning", linkLeadingIcon: "text-warning" } }, { color: "error", active: true, class: { link: "text-error", linkLeadingIcon: "text-error" } }, { color: "neutral", active: true, class: { link: "text-neutral", linkLeadingIcon: "text-neutral" } }, { color: "neutral", active: true, class: { link: "text-highlighted", linkLeadingIcon: "text-highlighted" } }], defaultVariants: { color: "primary", highlightColor: "primary" } }, Pt = ["href", "onClick"], At = Object.assign({ inheritAttrs: false }, { __name: "UContentToc", props: { as: { type: null, required: false, default: "nav" }, trailingIcon: { type: null, required: false }, title: { type: String, required: false }, color: { type: null, required: false }, highlight: { type: Boolean, required: false }, highlightColor: { type: null, required: false }, links: { type: Array, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false } }, emits: ["update:open", "move"], setup(t, { emit: s }) {
  const n = t, c = s, o = Z(), d = ne(re(n, "as", "open", "defaultOpen"), c), { t: i } = he(), b = Fe(), h = H(), g = F("contentToc", n), { activeHeadings: I, updateHeadings: m } = Ct(), [P, U] = ee({ props: { links: Array, level: Number } }), [z, W] = ee(), a = $(() => {
    var _a;
    return O({ extend: O(Ot), ...((_a = h.ui) == null ? void 0 : _a.contentToc) || {} })({ color: n.color, highlight: n.highlight, highlightColor: n.highlightColor || n.color });
  });
  function q(L) {
    const B = encodeURIComponent(L);
    b.push(`#${B}`), c("move", L);
  }
  function u(L) {
    return L.flatMap((B) => [B, ...B.children ? u(B.children) : []]);
  }
  const A = $(() => {
    var _a;
    if (!((_a = I.value) == null ? void 0 : _a.length)) return;
    const B = u(n.links || []).findIndex((G) => I.value.includes(G.id)), K = 1.75;
    return { "--indicator-size": `${K * I.value.length}rem`, "--indicator-position": B >= 0 ? `${B * K}rem` : "0rem" };
  }), M = Ge();
  return M.hooks.hook("page:loading:end", () => {
    const L = Array.from(document.querySelectorAll("h2, h3"));
    m(L);
  }), M.hooks.hook("page:transition:finish", () => {
    const L = Array.from(document.querySelectorAll("h2, h3"));
    m(L);
  }), (L, B) => {
    var _a;
    return l(), x(D, null, [f(e(P), null, { default: p(({ links: K, level: G }) => {
      var _a2, _b;
      return [w("ul", { class: r(G > 0 ? a.value.listWithChildren({ class: (_a2 = e(g)) == null ? void 0 : _a2.listWithChildren }) : a.value.list({ class: (_b = e(g)) == null ? void 0 : _b.list })) }, [(l(true), x(D, null, N(K, (T, ae) => {
        var _a3, _b2, _c, _d, _e2, _f, _g;
        return l(), x("li", { key: ae, class: r(T.children && T.children.length > 0 ? a.value.itemWithChildren({ class: [(_a3 = e(g)) == null ? void 0 : _a3.itemWithChildren, (_b2 = T.ui) == null ? void 0 : _b2.itemWithChildren] }) : a.value.item({ class: [(_c = e(g)) == null ? void 0 : _c.item, (_d = T.ui) == null ? void 0 : _d.item] })) }, [w("a", { href: `#${T.id}`, "data-slot": "link", class: r(a.value.link({ class: [(_e2 = e(g)) == null ? void 0 : _e2.link, (_f = T.ui) == null ? void 0 : _f.link, T.class], active: e(I).includes(T.id) })), onClick: Ze((ue) => q(T.id), ["prevent"]) }, [y(L.$slots, "link", { link: T }, () => {
          var _a4, _b3;
          return [w("span", { "data-slot": "linkText", class: r(a.value.linkText({ class: [(_a4 = e(g)) == null ? void 0 : _a4.linkText, (_b3 = T.ui) == null ? void 0 : _b3.linkText] })) }, C(T.text), 3)];
        })], 10, Pt), ((_g = T.children) == null ? void 0 : _g.length) ? (l(), v(e(U), { key: 0, links: T.children, level: G + 1 }, null, 8, ["links", "level"])) : k("", true)], 2);
      }), 128))], 2)];
    }), _: 3 }), f(e(z), null, { default: p(({ open: K }) => {
      var _a2, _b;
      return [y(L.$slots, "leading", { open: K, ui: a.value }), w("span", { "data-slot": "title", class: r(a.value.title({ class: (_a2 = e(g)) == null ? void 0 : _a2.title })) }, [y(L.$slots, "default", { open: K }, () => [R(C(t.title || e(i)("contentToc.title")), 1)])], 2), w("span", { "data-slot": "trailing", class: r(a.value.trailing({ class: (_b = e(g)) == null ? void 0 : _b.trailing })) }, [y(L.$slots, "trailing", { open: K, ui: a.value }, () => {
        var _a3;
        return [f(j, { name: t.trailingIcon || e(h).ui.icons.chevronDown, "data-slot": "trailingIcon", class: r(a.value.trailingIcon({ class: (_a3 = e(g)) == null ? void 0 : _a3.trailingIcon })) }, null, 8, ["name", "class"])];
      })], 2)];
    }), _: 3 }), f(e(Ye), S({ ...e(d), ...L.$attrs }, { "default-open": t.defaultOpen, "data-slot": "root", class: a.value.root({ class: [(_a = e(g)) == null ? void 0 : _a.root, n.class] }) }), { default: p(({ open: K }) => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      return [w("div", { "data-slot": "container", class: r(a.value.container({ class: (_a2 = e(g)) == null ? void 0 : _a2.container })) }, [o.top ? (l(), x("div", { key: 0, "data-slot": "top", class: r(a.value.top({ class: (_b = e(g)) == null ? void 0 : _b.top })) }, [y(L.$slots, "top", { links: t.links })], 2)) : k("", true), ((_c = t.links) == null ? void 0 : _c.length) ? (l(), x(D, { key: 1 }, [f(e(Je), { "data-slot": "trigger", class: r(a.value.trigger({ class: "lg:hidden" })) }, { default: p(() => [f(e(W), { open: K }, null, 8, ["open"])]), _: 2 }, 1032, ["class"]), f(e(Qe), { "data-slot": "content", class: r(a.value.content({ class: [(_d = e(g)) == null ? void 0 : _d.content, "lg:hidden"] })) }, { default: p(() => {
        var _a3;
        return [t.highlight ? (l(), x("div", { key: 0, "data-slot": "indicator", class: r(a.value.indicator({ class: (_a3 = e(g)) == null ? void 0 : _a3.indicator })), style: pe(A.value) }, null, 6)) : k("", true), y(L.$slots, "content", { links: t.links }, () => [f(e(U), { links: t.links, level: 0 }, null, 8, ["links"])])];
      }), _: 3 }, 8, ["class"]), w("p", { "data-slot": "trigger", class: r(a.value.trigger({ class: "hidden lg:flex" })) }, [f(e(W), { open: K }, null, 8, ["open"])], 2), w("div", { "data-slot": "content", class: r(a.value.content({ class: [(_e2 = e(g)) == null ? void 0 : _e2.content, "hidden lg:flex"] })) }, [t.highlight ? (l(), x("div", { key: 0, "data-slot": "indicator", class: r(a.value.indicator({ class: (_f = e(g)) == null ? void 0 : _f.indicator })), style: pe(A.value) }, null, 6)) : k("", true), y(L.$slots, "content", { links: t.links }, () => [f(e(U), { links: t.links, level: 0 }, null, 8, ["links"])])], 2)], 64)) : k("", true), o.bottom ? (l(), x("div", { key: 2, "data-slot": "bottom", class: r(a.value.bottom({ class: (_g = e(g)) == null ? void 0 : _g.bottom, body: !!o.top || !!((_h = t.links) == null ? void 0 : _h.length) })) }, [y(L.$slots, "bottom", { links: t.links })], 2)) : k("", true)], 2)];
    }), _: 3 }, 16, ["default-open", "class"])], 64);
  };
} });
function le(t, s, n) {
  var _a;
  if (!(!(t == null ? void 0 : t.length) || !s)) {
    for (const c of t) if (c.children) {
      for (const d of c.children) {
        const i = (_a = d.stem) == null ? void 0 : _a.endsWith("/index");
        if (d.path === s && !i) return c.title;
      }
      const o = le(c.children, s);
      if (o) return o;
    }
  }
}
const Bt = (t) => {
  const s = void 0;
  s && s.node.res.setHeader("x-nitro-prerender", [s.node.res.getHeader("x-nitro-prerender"), t].filter(Boolean).join(","));
}, Kt = { class: "flex items-center gap-2 text-sm text-muted" }, Wt = J({ __name: "[...slug]", async setup(t) {
  var _a, _b, _c;
  let s, n;
  const c = ce(), { locale: o, isEnabled: d, t: i } = de(), b = H(), h = Xe("navigation"), { shouldPushContent: g } = ke(), I = $(() => d.value ? `docs_${o.value}` : "docs"), [{ data: m }, { data: P }] = ([s, n] = _e(() => Promise.all([fe(me(c.path), () => et(I.value).path(c.path).first(), "$svWicwEn0c"), fe(`${me(c.path)}-surround`, () => tt(I.value, c.path, { fields: ["description"] }))])), s = await s, n(), s);
  if (!m.value) throw at({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  const U = ((_a = m.value.seo) == null ? void 0 : _a.title) || m.value.title, z = ((_b = m.value.seo) == null ? void 0 : _b.description) || m.value.description, W = Y(le(h == null ? void 0 : h.value, (_c = m.value) == null ? void 0 : _c.path)), a = $(() => {
    var _a2;
    return it(h == null ? void 0 : h.value, ((_a2 = m.value) == null ? void 0 : _a2.path) || "");
  });
  lt({ title: U, description: z, type: "article", modifiedAt: m.value.modifiedAt, breadcrumbs: a }), Ie(() => h == null ? void 0 : h.value, () => {
    var _a2;
    W.value = le(h == null ? void 0 : h.value, (_a2 = m.value) == null ? void 0 : _a2.path) || W.value;
  }), nt("Docs", { headline: W.value });
  const q = $(() => b.github ? b.github : null), u = $(() => {
    var _a2, _b2;
    if (q.value) return [q.value.url, "edit", q.value.branch, q.value.rootDir, "content", `${(_a2 = m.value) == null ? void 0 : _a2.stem}.${(_b2 = m.value) == null ? void 0 : _b2.extension}`].filter(Boolean).join("/");
  });
  return Bt(`/raw${c.path}.md`), (A, M) => {
    var _a2, _b2, _c2, _d;
    const L = te, B = vt, K = xt, G = st, T = qe, ae = qt, ue = ot, we = Tt, $e = At, ze = rt;
    return e(m) ? (l(), v(ze, { key: `page-${e(g)}` }, se({ default: p(() => [f(K, { title: e(m).title, description: e(m).description, headline: e(W), ui: { wrapper: "flex-row items-center flex-wrap justify-between" } }, { links: p(() => [(l(true), x(D, null, N(e(m).links, (Se, Te) => (l(), v(L, S({ key: Te, size: "sm" }, { ref_for: true }, Se), null, 16))), 128)), f(B)]), _: 1 }, 8, ["title", "description", "headline"]), f(ue, null, { default: p(() => [e(m) ? (l(), v(G, { key: 0, value: e(m) }, null, 8, ["value"])) : k("", true), e(q) ? (l(), v(T, { key: 1 }, { default: p(() => [w("div", Kt, [f(L, { variant: "link", color: "neutral", to: e(u), target: "_blank", icon: "i-lucide-pen", ui: { leadingIcon: "size-4" } }, { default: p(() => [R(C(e(i)("docs.edit")), 1)]), _: 1 }, 8, ["to"]), w("span", null, C(e(i)("common.or")), 1), f(L, { variant: "link", color: "neutral", to: `${e(q).url}/issues/new/choose`, target: "_blank", icon: "i-lucide-alert-circle", ui: { leadingIcon: "size-4" } }, { default: p(() => [R(C(e(i)("docs.report")), 1)]), _: 1 }, 8, ["to"])])]), _: 1 })) : k("", true), f(ae, { surround: e(P) }, null, 8, ["surround"])]), _: 1 })]), _: 2 }, [((_d = (_c2 = (_b2 = (_a2 = e(m)) == null ? void 0 : _a2.body) == null ? void 0 : _b2.toc) == null ? void 0 : _c2.links) == null ? void 0 : _d.length) && !e(g) ? { name: "right", fn: p(() => {
      var _a3, _b3, _c3;
      return [f($e, { highlight: "", title: ((_a3 = e(b).toc) == null ? void 0 : _a3.title) || e(i)("docs.toc"), links: (_c3 = (_b3 = e(m).body) == null ? void 0 : _b3.toc) == null ? void 0 : _c3.links }, { bottom: p(() => [f(we)]), _: 1 }, 8, ["title", "links"])];
    }), key: "0" } : void 0]), 1024)) : k("", true);
  };
} });
export {
  Wt as default
};
