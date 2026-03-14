import { F as J, ae as me, C as N, c6 as Ce, bn as ee, aP as le, c7 as ze, ak as X, c as T, c8 as Oe, l as i, y as k, n as f, w as m, e as b, m as v, Q as W, O as s, p as e, R as Pe, N as C, B as x, aV as V, A as $, z as U, ab as z, $ as D, a0 as M, a1 as Ae, c9 as j, ai as Be, b$ as ne, aa as se, bX as he, bZ as be, bI as te, bJ as ae, bY as ve, H as G, aQ as ye, aj as de, L as R, ca as Ke, cb as De, cc as Ue, bd as Re, cd as je, P as Y, f as oe, T as re, ce as Ee, D as He, aK as We, V as ce, a2 as Z, U as ke, cf as xe, r as Q, ah as Ie, cg as Me, bu as Ne, ch as Ve, b8 as Fe, X as Ge, aR as Je, aS as Qe, aw as ge, aT as Xe, ba as Ye, a6 as Ze, a8 as fe, a9 as _e, b2 as pe, ci as et, a7 as tt, cj as at } from "#entry";
import { u as it, d as lt, _ as nt } from "./YN0tvUDC.js";
import { _ as st } from "./Bi8lsjPs.js";
import { _ as ot } from "./CLaRGQ_S.js";
import "./BiwnguJD.js";
import "./iik6CYzq.js";
const Le = { __name: "UDropdownMenuContent", props: { items: { type: null, required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true }, sub: { type: Boolean, required: false }, labelKey: { type: null, required: true }, descriptionKey: { type: null, required: true }, checkedIcon: { type: null, required: false }, loadingIcon: { type: null, required: false }, externalIcon: { type: [Boolean, String], required: false, skipCheck: true }, class: { type: null, required: false }, ui: { type: null, required: true }, uiOverride: { type: null, required: false }, loop: { type: Boolean, required: false }, side: { type: null, required: false }, sideOffset: { type: Number, required: false }, sideFlip: { type: Boolean, required: false }, align: { type: null, required: false }, alignOffset: { type: Number, required: false }, alignFlip: { type: Boolean, required: false }, avoidCollisions: { type: Boolean, required: false }, collisionBoundary: { type: null, required: false }, collisionPadding: { type: [Number, Object], required: false }, arrowPadding: { type: Number, required: false }, hideShiftedArrow: { type: Boolean, required: false }, sticky: { type: String, required: false }, hideWhenDetached: { type: Boolean, required: false }, positionStrategy: { type: String, required: false }, updatePositionStrategy: { type: String, required: false }, disableUpdateOnLayoutShift: { type: Boolean, required: false }, prioritizePosition: { type: Boolean, required: false }, reference: { type: null, required: false } }, emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"], setup(t, { emit: d }) {
  const l = t, g = d, r = J(), { dir: u } = me(), n = N(), y = Ce(ee(() => l.portal)), h = le(ze(l, "sub", "items", "portal", "labelKey", "descriptionKey", "checkedIcon", "loadingIcon", "externalIcon", "class", "ui", "uiOverride"), g), c = () => ve(r, ["default"]), [I, p] = X(), O = T(() => u.value === "rtl" ? n.ui.icons.chevronLeft : n.ui.icons.chevronRight), K = T(() => {
    var _a;
    return ((_a = l.items) == null ? void 0 : _a.length) ? Oe(l.items) ? l.items : [l.items] : [];
  });
  return (q, E) => (i(), k(D, null, [f(e(I), null, { default: m(({ item: a, active: w, index: o }) => [b(q.$slots, a.slot || "item", { item: a, index: o, ui: t.ui }, () => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j;
    return [b(q.$slots, a.slot ? `${a.slot}-leading` : "item-leading", { item: a, active: w, index: o, ui: t.ui }, () => {
      var _a2, _b2, _c2, _d2, _e3, _f2, _g2, _h2;
      return [a.loading ? (i(), v(W, { key: 0, name: t.loadingIcon || e(n).ui.icons.loading, "data-slot": "itemLeadingIcon", class: s(t.ui.itemLeadingIcon({ class: [(_a2 = t.uiOverride) == null ? void 0 : _a2.itemLeadingIcon, (_b2 = a.ui) == null ? void 0 : _b2.itemLeadingIcon], color: a == null ? void 0 : a.color, loading: true })) }, null, 8, ["name", "class"])) : a.icon ? (i(), v(W, { key: 1, name: a.icon, "data-slot": "itemLeadingIcon", class: s(t.ui.itemLeadingIcon({ class: [(_c2 = t.uiOverride) == null ? void 0 : _c2.itemLeadingIcon, (_d2 = a.ui) == null ? void 0 : _d2.itemLeadingIcon], color: a == null ? void 0 : a.color, active: w })) }, null, 8, ["name", "class"])) : a.avatar ? (i(), v(Pe, C({ key: 2, size: ((_e3 = a.ui) == null ? void 0 : _e3.itemLeadingAvatarSize) || ((_f2 = t.uiOverride) == null ? void 0 : _f2.itemLeadingAvatarSize) || t.ui.itemLeadingAvatarSize() }, a.avatar, { "data-slot": "itemLeadingAvatar", class: t.ui.itemLeadingAvatar({ class: [(_g2 = t.uiOverride) == null ? void 0 : _g2.itemLeadingAvatar, (_h2 = a.ui) == null ? void 0 : _h2.itemLeadingAvatar], active: w }) }), null, 16, ["size", "class"])) : x("", true)];
    }), e(V)(a, l.labelKey) || r[a.slot ? `${a.slot}-label` : "item-label"] || e(V)(a, l.descriptionKey) || r[a.slot ? `${a.slot}-description` : "item-description"] ? (i(), k("span", { key: 0, "data-slot": "itemWrapper", class: s(t.ui.itemWrapper({ class: [(_a = t.uiOverride) == null ? void 0 : _a.itemWrapper, (_b = a.ui) == null ? void 0 : _b.itemWrapper] })) }, [$("span", { "data-slot": "itemLabel", class: s(t.ui.itemLabel({ class: [(_c = t.uiOverride) == null ? void 0 : _c.itemLabel, (_d = a.ui) == null ? void 0 : _d.itemLabel], active: w })) }, [b(q.$slots, a.slot ? `${a.slot}-label` : "item-label", { item: a, active: w, index: o }, () => [U(z(e(V)(a, l.labelKey)), 1)]), a.target === "_blank" && t.externalIcon !== false ? (i(), v(W, { key: 0, name: typeof t.externalIcon == "string" ? t.externalIcon : e(n).ui.icons.external, "data-slot": "itemLabelExternalIcon", class: s(t.ui.itemLabelExternalIcon({ class: [(_e2 = t.uiOverride) == null ? void 0 : _e2.itemLabelExternalIcon, (_f = a.ui) == null ? void 0 : _f.itemLabelExternalIcon], color: a == null ? void 0 : a.color, active: w })) }, null, 8, ["name", "class"])) : x("", true)], 2), e(V)(a, l.descriptionKey) || r[a.slot ? `${a.slot}-description` : "item-description"] ? (i(), k("span", { key: 0, "data-slot": "itemDescription", class: s(t.ui.itemDescription({ class: [(_g = t.uiOverride) == null ? void 0 : _g.itemDescription, (_h = a.ui) == null ? void 0 : _h.itemDescription] })) }, [b(q.$slots, a.slot ? `${a.slot}-description` : "item-description", { item: a, active: w, index: o }, () => [U(z(e(V)(a, l.descriptionKey)), 1)])], 2)) : x("", true)], 2)) : x("", true), $("span", { "data-slot": "itemTrailing", class: s(t.ui.itemTrailing({ class: [(_i = t.uiOverride) == null ? void 0 : _i.itemTrailing, (_j = a.ui) == null ? void 0 : _j.itemTrailing] })) }, [b(q.$slots, a.slot ? `${a.slot}-trailing` : "item-trailing", { item: a, active: w, index: o, ui: t.ui }, () => {
      var _a2, _b2, _c2, _d2, _e3, _f2;
      return [((_a2 = a.children) == null ? void 0 : _a2.length) ? (i(), v(W, { key: 0, name: O.value, "data-slot": "itemTrailingIcon", class: s(t.ui.itemTrailingIcon({ class: [(_b2 = t.uiOverride) == null ? void 0 : _b2.itemTrailingIcon, (_c2 = a.ui) == null ? void 0 : _c2.itemTrailingIcon], color: a == null ? void 0 : a.color, active: w })) }, null, 8, ["name", "class"])) : ((_d2 = a.kbds) == null ? void 0 : _d2.length) ? (i(), k("span", { key: 1, "data-slot": "itemTrailingKbds", class: s(t.ui.itemTrailingKbds({ class: [(_e3 = t.uiOverride) == null ? void 0 : _e3.itemTrailingKbds, (_f2 = a.ui) == null ? void 0 : _f2.itemTrailingKbds] })) }, [(i(true), k(D, null, M(a.kbds, (P, H) => {
        var _a3, _b3;
        return i(), v(Ae, C({ key: H, size: ((_a3 = a.ui) == null ? void 0 : _a3.itemTrailingKbdsSize) || ((_b3 = t.uiOverride) == null ? void 0 : _b3.itemTrailingKbdsSize) || t.ui.itemTrailingKbdsSize() }, { ref_for: true }, typeof P == "string" ? { value: P } : P), null, 16, ["size"]);
      }), 128))], 2)) : x("", true)];
    }), f(e(j).ItemIndicator, { "as-child": "" }, { default: m(() => {
      var _a2, _b2;
      return [f(W, { name: t.checkedIcon || e(n).ui.icons.check, "data-slot": "itemTrailingIcon", class: s(t.ui.itemTrailingIcon({ class: [(_a2 = t.uiOverride) == null ? void 0 : _a2.itemTrailingIcon, (_b2 = a.ui) == null ? void 0 : _b2.itemTrailingIcon], color: a == null ? void 0 : a.color })) }, null, 8, ["name", "class"])];
    }), _: 2 }, 1024)], 2)];
  })]), _: 3 }), f(e(j).Portal, te(ae(e(y))), { default: m(() => {
    var _a;
    return [(i(), v(Be(t.sub ? e(j).SubContent : e(j).Content), C({ "data-slot": "content", class: t.ui.content({ class: [(_a = t.uiOverride) == null ? void 0 : _a.content, l.class] }) }, e(h)), { default: m(() => {
      var _a2;
      return [b(q.$slots, "content-top", { sub: t.sub ?? false }), $("div", { role: "presentation", "data-slot": "viewport", class: s(t.ui.viewport({ class: (_a2 = t.uiOverride) == null ? void 0 : _a2.viewport })) }, [(i(true), k(D, null, M(K.value, (a, w) => {
        var _a3;
        return i(), v(e(j).Group, { key: `group-${w}`, "data-slot": "group", class: s(t.ui.group({ class: (_a3 = t.uiOverride) == null ? void 0 : _a3.group })) }, { default: m(() => [(i(true), k(D, null, M(a, (o, P) => {
          var _a4, _b, _c, _d, _e2, _f, _g;
          return i(), k(D, { key: `group-${w}-${P}` }, [o.type === "label" ? (i(), v(e(j).Label, { key: 0, "data-slot": "label", class: s(t.ui.label({ class: [(_a4 = t.uiOverride) == null ? void 0 : _a4.label, (_b = o.ui) == null ? void 0 : _b.label, o.class] })) }, { default: m(() => [f(e(p), { item: o, index: P }, null, 8, ["item", "index"])]), _: 2 }, 1032, ["class"])) : o.type === "separator" ? (i(), v(e(j).Separator, { key: 1, "data-slot": "separator", class: s(t.ui.separator({ class: [(_c = t.uiOverride) == null ? void 0 : _c.separator, (_d = o.ui) == null ? void 0 : _d.separator, o.class] })) }, null, 8, ["class"])) : ((_e2 = o == null ? void 0 : o.children) == null ? void 0 : _e2.length) ? (i(), v(e(j).Sub, { key: 2, open: o.open, "default-open": o.defaultOpen }, { default: m(() => {
            var _a5, _b2, _c2;
            return [f(e(j).SubTrigger, { as: "button", type: "button", disabled: o.disabled, "text-value": e(V)(o, l.labelKey), "data-slot": "item", class: s(t.ui.item({ class: [(_a5 = t.uiOverride) == null ? void 0 : _a5.item, (_b2 = o.ui) == null ? void 0 : _b2.item, o.class], color: o == null ? void 0 : o.color })) }, { default: m(() => [f(e(p), { item: o, index: P }, null, 8, ["item", "index"])]), _: 2 }, 1032, ["disabled", "text-value", "class"]), f(Le, C({ sub: "", class: (_c2 = o.ui) == null ? void 0 : _c2.content, ui: t.ui, "ui-override": t.uiOverride, portal: t.portal, items: o.children, align: "start", "align-offset": -4, "side-offset": 3, "label-key": t.labelKey, "description-key": t.descriptionKey, "checked-icon": t.checkedIcon, "loading-icon": t.loadingIcon, "external-icon": t.externalIcon }, { ref_for: true }, o.content), ne({ _: 2 }, [M(c(), (H, L) => ({ name: L, fn: m((A) => [b(q.$slots, L, C({ ref_for: true }, A))]) }))]), 1040, ["class", "ui", "ui-override", "portal", "items", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon"])];
          }), _: 2 }, 1032, ["open", "default-open"])) : o.type === "checkbox" ? (i(), v(e(j).CheckboxItem, { key: 3, "model-value": o.checked, disabled: o.disabled, "text-value": e(V)(o, l.labelKey), "data-slot": "item", class: s(t.ui.item({ class: [(_f = t.uiOverride) == null ? void 0 : _f.item, (_g = o.ui) == null ? void 0 : _g.item, o.class], color: o == null ? void 0 : o.color })), "onUpdate:modelValue": o.onUpdateChecked, onSelect: o.onSelect }, { default: m(() => [f(e(p), { item: o, index: P }, null, 8, ["item", "index"])]), _: 2 }, 1032, ["model-value", "disabled", "text-value", "class", "onUpdate:modelValue", "onSelect"])) : (i(), v(se, C({ key: 4, ref_for: true }, e(he)(o), { custom: "" }), { default: m(({ active: H, ...L }) => [f(e(j).Item, { "as-child": "", disabled: o.disabled, "text-value": e(V)(o, l.labelKey), onSelect: o.onSelect }, { default: m(() => {
            var _a5, _b2;
            return [f(be, C({ ref_for: true }, L, { "data-slot": "item", class: t.ui.item({ class: [(_a5 = t.uiOverride) == null ? void 0 : _a5.item, (_b2 = o.ui) == null ? void 0 : _b2.item, o.class], color: o == null ? void 0 : o.color, active: H }) }), { default: m(() => [f(e(p), { item: o, active: H, index: P }, null, 8, ["item", "active", "index"])]), _: 2 }, 1040, ["class"])];
          }), _: 2 }, 1032, ["disabled", "text-value", "onSelect"])]), _: 2 }, 1040))], 64);
        }), 128))]), _: 2 }, 1032, ["class"]);
      }), 128))], 2), b(q.$slots, "default"), b(q.$slots, "content-bottom", { sub: t.sub ?? false })];
    }), _: 3 }, 16, ["class"]))];
  }), _: 3 }, 16)], 64));
} }, rt = { slots: { content: "min-w-32 bg-default shadow-lg rounded-md ring ring-default overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-dropdown-menu-content-transform-origin) flex flex-col", viewport: "relative divide-y divide-default scroll-py-1 overflow-y-auto flex-1", arrow: "fill-bg stroke-default", group: "p-1 isolate", label: "w-full flex items-center font-semibold text-highlighted", separator: "-mx-1 my-1 h-px bg-border", item: "group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75", itemLeadingIcon: "shrink-0", itemLeadingAvatar: "shrink-0", itemLeadingAvatarSize: "", itemTrailing: "ms-auto inline-flex gap-1.5 items-center", itemTrailingIcon: "shrink-0", itemTrailingKbds: "hidden lg:inline-flex items-center shrink-0", itemTrailingKbdsSize: "", itemWrapper: "flex-1 flex flex-col text-start min-w-0", itemLabel: "truncate", itemDescription: "truncate text-muted", itemLabelExternalIcon: "inline-block size-3 align-top text-dimmed" }, variants: { color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, active: { true: { item: "text-highlighted before:bg-elevated", itemLeadingIcon: "text-default" }, false: { item: ["text-default data-highlighted:text-highlighted data-[state=open]:text-highlighted data-highlighted:before:bg-elevated/50 data-[state=open]:before:bg-elevated/50", "transition-colors before:transition-colors"], itemLeadingIcon: ["text-dimmed group-data-highlighted:text-default group-data-[state=open]:text-default", "transition-colors"] } }, loading: { true: { itemLeadingIcon: "animate-spin" } }, size: { xs: { label: "p-1 text-xs gap-1", item: "p-1 text-xs gap-1", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemTrailingIcon: "size-4", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "sm" }, sm: { label: "p-1.5 text-xs gap-1.5", item: "p-1.5 text-xs gap-1.5", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemTrailingIcon: "size-4", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "sm" }, md: { label: "p-1.5 text-sm gap-1.5", item: "p-1.5 text-sm gap-1.5", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemTrailingIcon: "size-5", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "md" }, lg: { label: "p-2 text-sm gap-2", item: "p-2 text-sm gap-2", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemTrailingIcon: "size-5", itemTrailingKbds: "gap-1", itemTrailingKbdsSize: "md" }, xl: { label: "p-2 text-base gap-2", item: "p-2 text-base gap-2", itemLeadingIcon: "size-6", itemLeadingAvatarSize: "xs", itemTrailingIcon: "size-6", itemTrailingKbds: "gap-1", itemTrailingKbdsSize: "lg" } } }, compoundVariants: [{ color: "primary", active: false, class: { item: "text-primary data-highlighted:text-primary data-highlighted:before:bg-primary/10 data-[state=open]:before:bg-primary/10", itemLeadingIcon: "text-primary/75 group-data-highlighted:text-primary group-data-[state=open]:text-primary" } }, { color: "secondary", active: false, class: { item: "text-secondary data-highlighted:text-secondary data-highlighted:before:bg-secondary/10 data-[state=open]:before:bg-secondary/10", itemLeadingIcon: "text-secondary/75 group-data-highlighted:text-secondary group-data-[state=open]:text-secondary" } }, { color: "success", active: false, class: { item: "text-success data-highlighted:text-success data-highlighted:before:bg-success/10 data-[state=open]:before:bg-success/10", itemLeadingIcon: "text-success/75 group-data-highlighted:text-success group-data-[state=open]:text-success" } }, { color: "info", active: false, class: { item: "text-info data-highlighted:text-info data-highlighted:before:bg-info/10 data-[state=open]:before:bg-info/10", itemLeadingIcon: "text-info/75 group-data-highlighted:text-info group-data-[state=open]:text-info" } }, { color: "warning", active: false, class: { item: "text-warning data-highlighted:text-warning data-highlighted:before:bg-warning/10 data-[state=open]:before:bg-warning/10", itemLeadingIcon: "text-warning/75 group-data-highlighted:text-warning group-data-[state=open]:text-warning" } }, { color: "error", active: false, class: { item: "text-error data-highlighted:text-error data-highlighted:before:bg-error/10 data-[state=open]:before:bg-error/10", itemLeadingIcon: "text-error/75 group-data-highlighted:text-error group-data-[state=open]:text-error" } }, { color: "neutral", active: false, class: { item: "text-neutral data-highlighted:text-neutral data-highlighted:before:bg-neutral/10 data-[state=open]:before:bg-neutral/10", itemLeadingIcon: "text-neutral/75 group-data-highlighted:text-neutral group-data-[state=open]:text-neutral" } }, { color: "primary", active: true, class: { item: "text-primary before:bg-primary/10", itemLeadingIcon: "text-primary" } }, { color: "secondary", active: true, class: { item: "text-secondary before:bg-secondary/10", itemLeadingIcon: "text-secondary" } }, { color: "success", active: true, class: { item: "text-success before:bg-success/10", itemLeadingIcon: "text-success" } }, { color: "info", active: true, class: { item: "text-info before:bg-info/10", itemLeadingIcon: "text-info" } }, { color: "warning", active: true, class: { item: "text-warning before:bg-warning/10", itemLeadingIcon: "text-warning" } }, { color: "error", active: true, class: { item: "text-error before:bg-error/10", itemLeadingIcon: "text-error" } }, { color: "neutral", active: true, class: { item: "text-neutral before:bg-neutral/10", itemLeadingIcon: "text-neutral" } }], defaultVariants: { size: "md" } }, ct = { __name: "UDropdownMenu", props: { size: { type: null, required: false }, items: { type: null, required: false }, checkedIcon: { type: null, required: false }, loadingIcon: { type: null, required: false }, externalIcon: { type: [Boolean, String], required: false, skipCheck: true, default: true }, content: { type: Object, required: false }, arrow: { type: [Boolean, Object], required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true, default: true }, labelKey: { type: null, required: false, default: "label" }, descriptionKey: { type: null, required: false, default: "description" }, disabled: { type: Boolean, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false }, modal: { type: Boolean, required: false, default: true } }, emits: ["update:open"], setup(t, { emit: d }) {
  const l = t, g = d, r = J(), u = N(), n = G("dropdownMenu", l), y = le(ye(l, "defaultOpen", "open", "modal"), g), h = ee(() => de(l.content, { side: "bottom", sideOffset: 8, collisionPadding: 8 })), c = ee(() => de(l.arrow, { rounded: true })), I = () => ve(r, ["default"]), p = T(() => {
    var _a;
    return R({ extend: R(rt), ...((_a = u.ui) == null ? void 0 : _a.dropdownMenu) || {} })({ size: l.size });
  });
  return (O, K) => (i(), v(e(Ue), te(ae(e(y))), { default: m(({ open: q }) => {
    var _a;
    return [r.default ? (i(), v(e(Ke), { key: 0, "as-child": "", class: s(l.class), disabled: t.disabled }, { default: m(() => [b(O.$slots, "default", { open: q })]), _: 2 }, 1032, ["class", "disabled"])) : x("", true), f(Le, C({ class: p.value.content({ class: [!r.default && l.class, (_a = e(n)) == null ? void 0 : _a.content] }), ui: p.value, "ui-override": e(n) }, h.value, { items: t.items, portal: t.portal, "label-key": t.labelKey, "description-key": t.descriptionKey, "checked-icon": t.checkedIcon, "loading-icon": t.loadingIcon, "external-icon": t.externalIcon }), ne({ default: m(() => {
      var _a2;
      return [t.arrow ? (i(), v(e(De), C({ key: 0 }, c.value, { "data-slot": "arrow", class: p.value.arrow({ class: (_a2 = e(n)) == null ? void 0 : _a2.arrow }) }), null, 16, ["class"])) : x("", true)];
    }), _: 2 }, [M(I(), (E, a) => ({ name: a, fn: m((w) => [b(O.$slots, a, te(ae(w)))]) }))]), 1040, ["class", "ui", "ui-override", "items", "portal", "label-key", "description-key", "checked-icon", "loading-icon", "external-icon"])];
  }), _: 3 }, 16));
} }, ut = { base: "relative", variants: { size: { xs: "", sm: "", md: "", lg: "", xl: "" }, orientation: { horizontal: "inline-flex -space-x-px", vertical: "flex flex-col -space-y-px" } } }, dt = { __name: "UFieldGroup", props: { as: { type: null, required: false }, size: { type: null, required: false }, orientation: { type: null, required: false, default: "horizontal" }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(t) {
  const d = t, l = N(), g = G("fieldGroup", d), r = T(() => {
    var _a;
    return R({ extend: R(ut), ...((_a = l.ui) == null ? void 0 : _a.fieldGroup) || {} });
  });
  return Re(je, T(() => ({ orientation: d.orientation, size: d.size }))), (u, n) => {
    var _a;
    return i(), v(e(Y), { as: t.as, "data-orientation": t.orientation, class: s(r.value({ orientation: t.orientation, class: [(_a = e(g)) == null ? void 0 : _a.base, d.class] })) }, { default: m(() => [b(u.$slots, "default")]), _: 3 }, 8, ["as", "data-orientation", "class"]);
  };
} }, gt = oe({ __name: "DocsPageHeaderLinks", setup(t) {
  var _a;
  const d = re(), l = Ee(), g = ((_a = He().app) == null ? void 0 : _a.baseURL) || "/", { copy: r, copied: u } = We(), { t: n } = ce(), y = T(() => {
    var _a2;
    return `${(_a2 = window == null ? void 0 : window.location) == null ? void 0 : _a2.origin}${g}raw${d.path}.md`;
  }), h = [[{ label: n("docs.copy.link"), icon: "i-lucide-link", onSelect() {
    r(y.value);
  } }, { label: n("docs.copy.view"), icon: "i-simple-icons:markdown", target: "_blank", to: y.value }, { label: n("docs.copy.gpt"), icon: "i-simple-icons:openai", target: "_blank", to: `https://chatgpt.com/?hints=search&q=${encodeURIComponent(`Read ${y.value} so I can ask questions about it.`)}` }, { label: n("docs.copy.claude"), icon: "i-simple-icons:anthropic", target: "_blank", to: `https://claude.ai/new?q=${encodeURIComponent(`Read ${y.value} so I can ask questions about it.`)}` }], [{ label: "Copy MCP Server URL", icon: "i-lucide-link", onSelect() {
    var _a2;
    r(`${(_a2 = window == null ? void 0 : window.location) == null ? void 0 : _a2.origin}${g}mcp`), l.add({ title: "Copied to clipboard", icon: "i-lucide-check-circle" });
  } }, { label: "Add MCP Server", icon: "i-simple-icons:cursor", target: "_blank", to: "/mcp/deeplink" }]];
  async function c() {
    const I = await $fetch(`/raw${d.path}.md`);
    r(I);
  }
  return (I, p) => {
    const O = Z, K = ct, q = dt;
    return i(), v(q, { size: "sm" }, { default: m(() => [f(O, { label: e(n)("docs.copy.page"), icon: e(u) ? "i-lucide-check" : "i-lucide-copy", color: "neutral", variant: "soft", ui: { leadingIcon: "text-neutral size-3.5" }, onClick: c }, null, 8, ["label", "icon"]), f(K, { size: "sm", items: h, content: { align: "end", side: "bottom", sideOffset: 8 } }, { default: m(() => [f(O, { icon: "i-lucide-chevron-down", color: "neutral", variant: "soft", class: "border-l border-muted" })]), _: 1 })]), _: 1 });
  };
} }), ft = Object.assign(gt, { __name: "DocsPageHeaderLinks" }), pt = { slots: { root: "relative border-b border-default py-8", container: "", wrapper: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4", headline: "mb-2.5 text-sm font-semibold text-primary flex items-center gap-1.5", title: "text-3xl sm:text-4xl text-pretty font-bold text-highlighted", description: "text-lg text-pretty text-muted", links: "flex flex-wrap items-center gap-1.5" }, variants: { title: { true: { description: "mt-4" } } } }, mt = { __name: "UPageHeader", props: { as: { type: null, required: false }, headline: { type: String, required: false }, title: { type: String, required: false }, description: { type: String, required: false }, links: { type: Array, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(t) {
  const d = t, l = J(), g = N(), r = G("pageHeader", d), u = T(() => {
    var _a;
    return R({ extend: R(pt), ...((_a = g.ui) == null ? void 0 : _a.pageHeader) || {} })({ title: !!d.title || !!l.title });
  });
  return (n, y) => {
    var _a;
    return i(), v(e(Y), { as: t.as, "data-slot": "root", class: s(u.value.root({ class: [(_a = e(r)) == null ? void 0 : _a.root, d.class] })) }, { default: m(() => {
      var _a2, _b, _c, _d, _e2, _f, _g;
      return [t.headline || l.headline ? (i(), k("div", { key: 0, "data-slot": "headline", class: s(u.value.headline({ class: (_a2 = e(r)) == null ? void 0 : _a2.headline })) }, [b(n.$slots, "headline", {}, () => [U(z(t.headline), 1)])], 2)) : x("", true), $("div", { "data-slot": "container", class: s(u.value.container({ class: (_b = e(r)) == null ? void 0 : _b.container })) }, [$("div", { "data-slot": "wrapper", class: s(u.value.wrapper({ class: (_c = e(r)) == null ? void 0 : _c.wrapper })) }, [t.title || l.title ? (i(), k("h1", { key: 0, "data-slot": "title", class: s(u.value.title({ class: (_d = e(r)) == null ? void 0 : _d.title })) }, [b(n.$slots, "title", {}, () => [U(z(t.title), 1)])], 2)) : x("", true), ((_e2 = t.links) == null ? void 0 : _e2.length) || l.links ? (i(), k("div", { key: 1, "data-slot": "links", class: s(u.value.links({ class: (_f = e(r)) == null ? void 0 : _f.links })) }, [b(n.$slots, "links", {}, () => [(i(true), k(D, null, M(t.links, (h, c) => (i(), v(Z, C({ key: c, color: "neutral", variant: "outline" }, { ref_for: true }, h), null, 16))), 128))])], 2)) : x("", true)], 2), t.description || l.description ? (i(), k("div", { key: 0, "data-slot": "description", class: s(u.value.description({ class: (_g = e(r)) == null ? void 0 : _g.description })) }, [b(n.$slots, "description", {}, () => [U(z(t.description), 1)])], 2)) : x("", true), b(n.$slots, "default")], 2)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} }, ht = { slots: { root: "grid grid-cols-1 sm:grid-cols-2 gap-8", link: ["group block px-6 py-8 rounded-lg border border-default hover:bg-elevated/50 focus-visible:outline-primary", "transition-colors"], linkLeading: ["inline-flex items-center rounded-full p-1.5 bg-elevated group-hover:bg-primary/10 ring ring-accented mb-4 group-hover:ring-primary/50", "transition"], linkLeadingIcon: ["size-5 shrink-0 text-highlighted group-hover:text-primary", "transition-[color,translate]"], linkTitle: "font-medium text-[15px] text-highlighted mb-1 truncate", linkDescription: "text-sm text-muted line-clamp-2" }, variants: { direction: { left: { linkLeadingIcon: ["group-active:-translate-x-0.5"] }, right: { link: "text-right", linkLeadingIcon: ["group-active:translate-x-0.5"] } } } }, bt = { key: 1, class: "hidden sm:block" }, vt = Object.assign({ inheritAttrs: false }, { __name: "UContentSurround", props: { as: { type: null, required: false }, prevIcon: { type: null, required: false }, nextIcon: { type: null, required: false }, surround: { type: Array, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(t) {
  const d = t, l = N(), g = G("contentSurround", d), [r, u] = X({ props: { link: Object, icon: String, direction: String } }), n = T(() => {
    var _a;
    return R({ extend: R(ht), ...((_a = l.ui) == null ? void 0 : _a.contentSurround) || {} })();
  });
  return (y, h) => {
    var _a;
    return i(), k(D, null, [f(e(r), null, { default: m(({ link: c, icon: I, direction: p }) => {
      var _a2, _b;
      return [c ? (i(), v(se, { key: 0, to: c.path, raw: "", "data-slot": "link", class: s(n.value.link({ class: [(_a2 = e(g)) == null ? void 0 : _a2.link, (_b = c.ui) == null ? void 0 : _b.link, c.class], direction: p })) }, { default: m(() => [b(y.$slots, "link", { link: c, ui: n.value }, () => {
        var _a3, _b2, _c, _d, _e2, _f;
        return [$("div", { "data-slot": "linkLeading", class: s(n.value.linkLeading({ class: [(_a3 = e(g)) == null ? void 0 : _a3.linkLeading, (_b2 = c.ui) == null ? void 0 : _b2.linkLeading] })) }, [b(y.$slots, "link-leading", { link: c, ui: n.value }, () => {
          var _a4, _b3;
          return [f(W, { name: c.icon || I, "data-slot": "linkLeadingIcon", class: s(n.value.linkLeadingIcon({ class: [(_a4 = e(g)) == null ? void 0 : _a4.linkLeadingIcon, (_b3 = c.ui) == null ? void 0 : _b3.linkLeadingIcon], direction: p })) }, null, 8, ["name", "class"])];
        })], 2), $("p", { "data-slot": "linkTitle", class: s(n.value.linkTitle({ class: [(_c = e(g)) == null ? void 0 : _c.linkTitle, (_d = c.ui) == null ? void 0 : _d.linkTitle] })) }, [b(y.$slots, "link-title", { link: c, ui: n.value }, () => [U(z(c.title), 1)])], 2), $("p", { "data-slot": "linkDescription", class: s(n.value.linkDescription({ class: [(_e2 = e(g)) == null ? void 0 : _e2.linkDescription, (_f = c.ui) == null ? void 0 : _f.linkDescription] })) }, [b(y.$slots, "link-description", { link: c, ui: n.value }, () => [U(z(c.description), 1)])], 2)];
      })]), _: 2 }, 1032, ["to", "class"])) : (i(), k("span", bt, "\xA0"))];
    }), _: 3 }), t.surround ? (i(), v(e(Y), C({ key: 0, as: t.as }, y.$attrs, { "data-slot": "root", class: n.value.root({ class: [(_a = e(g)) == null ? void 0 : _a.root, d.class] }) }), { default: m(() => [f(e(u), { link: t.surround[0], icon: t.prevIcon || e(l).ui.icons.arrowLeft, direction: "left" }, null, 8, ["link", "icon"]), f(e(u), { link: t.surround[1], icon: t.nextIcon || e(l).ui.icons.arrowRight, direction: "right" }, null, 8, ["link", "icon"])]), _: 1 }, 16, ["as", "class"])) : x("", true)], 64);
  };
} }), yt = { slots: { root: "flex flex-col gap-3", title: "text-sm font-semibold flex items-center gap-1.5", list: "flex flex-col gap-2", item: "relative", link: "group text-sm flex items-center gap-1.5 focus-visible:outline-primary", linkLeadingIcon: "size-5 shrink-0", linkLabel: "truncate", linkLabelExternalIcon: "size-3 absolute top-0 text-dimmed" }, variants: { active: { true: { link: "text-primary font-medium" }, false: { link: ["text-muted hover:text-default", "transition-colors"] } } } }, kt = { __name: "UPageLinks", props: { as: { type: null, required: false, default: "nav" }, title: { type: String, required: false }, links: { type: Array, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(t) {
  const d = t, l = J(), g = N(), r = G("pageLinks", d), u = T(() => {
    var _a;
    return R({ extend: R(yt), ...((_a = g.ui) == null ? void 0 : _a.pageLinks) || {} })();
  });
  return (n, y) => {
    var _a;
    return i(), v(e(Y), { as: t.as, "data-slot": "root", class: s(u.value.root({ class: [(_a = e(r)) == null ? void 0 : _a.root, d.class] })) }, { default: m(() => {
      var _a2, _b;
      return [t.title || l.title ? (i(), k("p", { key: 0, "data-slot": "title", class: s(u.value.title({ class: (_a2 = e(r)) == null ? void 0 : _a2.title })) }, [b(n.$slots, "title", {}, () => [U(z(t.title), 1)])], 2)) : x("", true), $("ul", { "data-slot": "list", class: s(u.value.list({ class: (_b = e(r)) == null ? void 0 : _b.list })) }, [(i(true), k(D, null, M(t.links, (h, c) => {
        var _a3, _b2;
        return i(), k("li", { key: c, "data-slot": "item", class: s(u.value.item({ class: [(_a3 = e(r)) == null ? void 0 : _a3.item, (_b2 = h.ui) == null ? void 0 : _b2.item] })) }, [f(se, C({ ref_for: true }, e(he)(h), { custom: "" }), { default: m(({ active: I, ...p }) => {
          var _a4, _b3;
          return [f(be, C({ ref_for: true }, p, { "data-slot": "link", class: u.value.link({ class: [(_a4 = e(r)) == null ? void 0 : _a4.link, (_b3 = h.ui) == null ? void 0 : _b3.link, h.class], active: I }) }), { default: m(() => [b(n.$slots, "link", { link: h, active: I, ui: u.value }, () => {
            var _a5, _b4, _c, _d;
            return [b(n.$slots, "link-leading", { link: h, active: I, ui: u.value }, () => {
              var _a6, _b5;
              return [h.icon ? (i(), v(W, { key: 0, name: h.icon, "data-slot": "linkLeadingIcon", class: s(u.value.linkLeadingIcon({ class: [(_a6 = e(r)) == null ? void 0 : _a6.linkLeadingIcon, (_b5 = h.ui) == null ? void 0 : _b5.linkLeadingIcon], active: I })) }, null, 8, ["name", "class"])) : x("", true)];
            }), h.label || l["link-label"] ? (i(), k("span", { key: 0, "data-slot": "linkLabel", class: s(u.value.linkLabel({ class: [(_a5 = e(r)) == null ? void 0 : _a5.linkLabel, (_b4 = h.ui) == null ? void 0 : _b4.linkLabel], active: I })) }, [b(n.$slots, "link-label", { link: h, active: I }, () => [U(z(h.label), 1)]), h.target === "_blank" ? (i(), v(W, { key: 0, name: e(g).ui.icons.external, "data-slot": "linkLabelExternalIcon", class: s(u.value.linkLabelExternalIcon({ class: [(_c = e(r)) == null ? void 0 : _c.linkLabelExternalIcon, (_d = h.ui) == null ? void 0 : _d.linkLabelExternalIcon], active: I })) }, null, 8, ["name", "class"])) : x("", true)], 2)) : x("", true), b(n.$slots, "link-trailing", { link: h, active: I })];
          })]), _: 2 }, 1040, ["class"])];
        }), _: 2 }, 1040)], 2);
      }), 128))], 2)];
    }), _: 3 }, 8, ["as", "class"]);
  };
} }, xt = { key: 0, class: "hidden lg:block space-y-6" }, It = oe({ __name: "DocsAsideRightBottom", setup(t) {
  const l = re().path, g = N(), { t: r } = ce(), { isEnabled: u, open: n } = ke(), y = T(() => {
    var _a;
    return u.value && ((_a = g.assistant) == null ? void 0 : _a.explainWithAi) !== false;
  }), h = T(() => {
    var _a, _b;
    return ((_b = (_a = g.assistant) == null ? void 0 : _a.icons) == null ? void 0 : _b.explain) || "i-lucide-brain";
  });
  return (c, I) => {
    var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m;
    const p = xe, O = kt, K = Z;
    return ((_c = (_b = (_a = e(g).toc) == null ? void 0 : _a.bottom) == null ? void 0 : _b.links) == null ? void 0 : _c.length) || e(y) ? (i(), k("div", xt, [f(p, { type: "dashed" }), ((_f = (_e2 = (_d = e(g).toc) == null ? void 0 : _d.bottom) == null ? void 0 : _e2.links) == null ? void 0 : _f.length) ? (i(), v(O, { key: 0, title: ((_h = (_g = e(g).toc) == null ? void 0 : _g.bottom) == null ? void 0 : _h.title) || e(r)("docs.links"), links: (_j = (_i = e(g).toc) == null ? void 0 : _i.bottom) == null ? void 0 : _j.links }, null, 8, ["title", "links"])) : x("", true), ((_m = (_l = (_k = e(g).toc) == null ? void 0 : _k.bottom) == null ? void 0 : _l.links) == null ? void 0 : _m.length) && e(y) ? (i(), v(p, { key: 1, type: "dashed" })) : x("", true), e(y) ? (i(), v(K, { key: 2, icon: e(h), label: e(r)("assistant.explainWithAi"), size: "sm", variant: "link", class: "p-0 text-sm", color: "neutral", onClick: I[0] || (I[0] = (q) => e(n)(`Explain the page ${e(l)}`, true)) }, null, 8, ["icon", "label"])) : x("", true)])) : x("", true);
  };
} }), Lt = Object.assign(It, { __name: "DocsAsideRightBottom" });
function wt() {
  const t = Q(), d = Q([]), l = Q([]);
  function g(u) {
    u.forEach((n) => {
      const y = n.target.id;
      y && (n.isIntersecting ? d.value = [...d.value, y] : d.value = d.value.filter((h) => h !== y));
    });
  }
  function r(u) {
    u.forEach((n) => {
      t.value && t.value.observe(n);
    });
  }
  return Ie(d, (u, n) => {
    u.length === 0 ? l.value = n : l.value = u;
  }), Me(() => t.value = new IntersectionObserver(g)), Ne(() => {
    var _a;
    return (_a = t.value) == null ? void 0 : _a.disconnect();
  }), { visibleHeadings: d, activeHeadings: l, updateHeadings: r };
}
const $t = { slots: { root: "sticky top-(--ui-header-height) z-10 bg-default/75 lg:bg-[initial] backdrop-blur -mx-4 px-4 sm:px-6 sm:-mx-6 overflow-y-auto max-h-[calc(100vh-var(--ui-header-height))]", container: "pt-4 sm:pt-6 pb-2.5 sm:pb-4.5 lg:py-8 border-b border-dashed border-default lg:border-0 flex flex-col", top: "", bottom: "hidden lg:flex lg:flex-col gap-6", trigger: "group text-sm font-semibold flex-1 flex items-center gap-1.5 py-1.5 -mt-1.5 focus-visible:outline-primary", title: "truncate", trailing: "ms-auto inline-flex gap-1.5 items-center", trailingIcon: "size-5 transform transition-transform duration-200 shrink-0 group-data-[state=open]:rotate-180 lg:hidden", content: "relative data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] overflow-hidden focus:outline-none", list: "min-w-0", listWithChildren: "ms-3", item: "min-w-0", itemWithChildren: "", link: "group relative text-sm flex items-center focus-visible:outline-primary py-1", linkText: "truncate", indicator: "absolute ms-2.5 transition-[translate,height] duration-200 h-(--indicator-size) translate-y-(--indicator-position) w-px rounded-full" }, variants: { color: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" }, highlightColor: { primary: { indicator: "bg-primary" }, secondary: { indicator: "bg-secondary" }, success: { indicator: "bg-success" }, info: { indicator: "bg-info" }, warning: { indicator: "bg-warning" }, error: { indicator: "bg-error" }, neutral: { indicator: "bg-inverted" } }, active: { false: { link: ["text-muted hover:text-default", "transition-colors"] } }, highlight: { true: { list: "ms-2.5 ps-4 border-s border-default", item: "-ms-px" } }, body: { true: { bottom: "mt-6" } } }, compoundVariants: [{ color: "primary", active: true, class: { link: "text-primary", linkLeadingIcon: "text-primary" } }, { color: "secondary", active: true, class: { link: "text-secondary", linkLeadingIcon: "text-secondary" } }, { color: "success", active: true, class: { link: "text-success", linkLeadingIcon: "text-success" } }, { color: "info", active: true, class: { link: "text-info", linkLeadingIcon: "text-info" } }, { color: "warning", active: true, class: { link: "text-warning", linkLeadingIcon: "text-warning" } }, { color: "error", active: true, class: { link: "text-error", linkLeadingIcon: "text-error" } }, { color: "neutral", active: true, class: { link: "text-neutral", linkLeadingIcon: "text-neutral" } }, { color: "neutral", active: true, class: { link: "text-highlighted", linkLeadingIcon: "text-highlighted" } }], defaultVariants: { color: "primary", highlightColor: "primary" } }, qt = ["href", "onClick"], Tt = Object.assign({ inheritAttrs: false }, { __name: "UContentToc", props: { as: { type: null, required: false, default: "nav" }, trailingIcon: { type: null, required: false }, title: { type: String, required: false }, color: { type: null, required: false }, highlight: { type: Boolean, required: false }, highlightColor: { type: null, required: false }, links: { type: Array, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, defaultOpen: { type: Boolean, required: false }, open: { type: Boolean, required: false } }, emits: ["update:open", "move"], setup(t, { emit: d }) {
  const l = t, g = d, r = J(), u = le(ye(l, "as", "open", "defaultOpen"), g), { t: n } = me(), y = Ve(), h = N(), c = G("contentToc", l), { activeHeadings: I, updateHeadings: p } = wt(), [O, K] = X({ props: { links: Array, level: Number } }), [q, E] = X(), a = T(() => {
    var _a;
    return R({ extend: R($t), ...((_a = h.ui) == null ? void 0 : _a.contentToc) || {} })({ color: l.color, highlight: l.highlight, highlightColor: l.highlightColor || l.color });
  });
  function w(L) {
    const A = encodeURIComponent(L);
    y.push(`#${A}`), g("move", L);
  }
  function o(L) {
    return L.flatMap((A) => [A, ...A.children ? o(A.children) : []]);
  }
  const P = T(() => {
    var _a;
    if (!((_a = I.value) == null ? void 0 : _a.length)) return;
    const A = o(l.links || []).findIndex((F) => I.value.includes(F.id)), B = 1.75;
    return { "--indicator-size": `${B * I.value.length}rem`, "--indicator-position": A >= 0 ? `${A * B}rem` : "0rem" };
  }), H = Fe();
  return H.hooks.hook("page:loading:end", () => {
    const L = Array.from(document.querySelectorAll("h2, h3"));
    p(L);
  }), H.hooks.hook("page:transition:finish", () => {
    const L = Array.from(document.querySelectorAll("h2, h3"));
    p(L);
  }), (L, A) => {
    var _a;
    return i(), k(D, null, [f(e(O), null, { default: m(({ links: B, level: F }) => {
      var _a2, _b;
      return [$("ul", { class: s(F > 0 ? a.value.listWithChildren({ class: (_a2 = e(c)) == null ? void 0 : _a2.listWithChildren }) : a.value.list({ class: (_b = e(c)) == null ? void 0 : _b.list })) }, [(i(true), k(D, null, M(B, (S, _) => {
        var _a3, _b2, _c, _d, _e2, _f, _g;
        return i(), k("li", { key: _, class: s(S.children && S.children.length > 0 ? a.value.itemWithChildren({ class: [(_a3 = e(c)) == null ? void 0 : _a3.itemWithChildren, (_b2 = S.ui) == null ? void 0 : _b2.itemWithChildren] }) : a.value.item({ class: [(_c = e(c)) == null ? void 0 : _c.item, (_d = S.ui) == null ? void 0 : _d.item] })) }, [$("a", { href: `#${S.id}`, "data-slot": "link", class: s(a.value.link({ class: [(_e2 = e(c)) == null ? void 0 : _e2.link, (_f = S.ui) == null ? void 0 : _f.link, S.class], active: e(I).includes(S.id) })), onClick: Ge((ue) => w(S.id), ["prevent"]) }, [b(L.$slots, "link", { link: S }, () => {
          var _a4, _b3;
          return [$("span", { "data-slot": "linkText", class: s(a.value.linkText({ class: [(_a4 = e(c)) == null ? void 0 : _a4.linkText, (_b3 = S.ui) == null ? void 0 : _b3.linkText] })) }, z(S.text), 3)];
        })], 10, qt), ((_g = S.children) == null ? void 0 : _g.length) ? (i(), v(e(K), { key: 0, links: S.children, level: F + 1 }, null, 8, ["links", "level"])) : x("", true)], 2);
      }), 128))], 2)];
    }), _: 3 }), f(e(q), null, { default: m(({ open: B }) => {
      var _a2, _b;
      return [b(L.$slots, "leading", { open: B, ui: a.value }), $("span", { "data-slot": "title", class: s(a.value.title({ class: (_a2 = e(c)) == null ? void 0 : _a2.title })) }, [b(L.$slots, "default", { open: B }, () => [U(z(t.title || e(n)("contentToc.title")), 1)])], 2), $("span", { "data-slot": "trailing", class: s(a.value.trailing({ class: (_b = e(c)) == null ? void 0 : _b.trailing })) }, [b(L.$slots, "trailing", { open: B, ui: a.value }, () => {
        var _a3;
        return [f(W, { name: t.trailingIcon || e(h).ui.icons.chevronDown, "data-slot": "trailingIcon", class: s(a.value.trailingIcon({ class: (_a3 = e(c)) == null ? void 0 : _a3.trailingIcon })) }, null, 8, ["name", "class"])];
      })], 2)];
    }), _: 3 }), f(e(Xe), C({ ...e(u), ...L.$attrs }, { "default-open": t.defaultOpen, "data-slot": "root", class: a.value.root({ class: [(_a = e(c)) == null ? void 0 : _a.root, l.class] }) }), { default: m(({ open: B }) => {
      var _a2, _b, _c, _d, _e2, _f, _g, _h;
      return [$("div", { "data-slot": "container", class: s(a.value.container({ class: (_a2 = e(c)) == null ? void 0 : _a2.container })) }, [r.top ? (i(), k("div", { key: 0, "data-slot": "top", class: s(a.value.top({ class: (_b = e(c)) == null ? void 0 : _b.top })) }, [b(L.$slots, "top", { links: t.links })], 2)) : x("", true), ((_c = t.links) == null ? void 0 : _c.length) ? (i(), k(D, { key: 1 }, [f(e(Je), { "data-slot": "trigger", class: s(a.value.trigger({ class: "lg:hidden" })) }, { default: m(() => [f(e(E), { open: B }, null, 8, ["open"])]), _: 2 }, 1032, ["class"]), f(e(Qe), { "data-slot": "content", class: s(a.value.content({ class: [(_d = e(c)) == null ? void 0 : _d.content, "lg:hidden"] })) }, { default: m(() => {
        var _a3;
        return [t.highlight ? (i(), k("div", { key: 0, "data-slot": "indicator", class: s(a.value.indicator({ class: (_a3 = e(c)) == null ? void 0 : _a3.indicator })), style: ge(P.value) }, null, 6)) : x("", true), b(L.$slots, "content", { links: t.links }, () => [f(e(K), { links: t.links, level: 0 }, null, 8, ["links"])])];
      }), _: 3 }, 8, ["class"]), $("p", { "data-slot": "trigger", class: s(a.value.trigger({ class: "hidden lg:flex" })) }, [f(e(E), { open: B }, null, 8, ["open"])], 2), $("div", { "data-slot": "content", class: s(a.value.content({ class: [(_e2 = e(c)) == null ? void 0 : _e2.content, "hidden lg:flex"] })) }, [t.highlight ? (i(), k("div", { key: 0, "data-slot": "indicator", class: s(a.value.indicator({ class: (_f = e(c)) == null ? void 0 : _f.indicator })), style: ge(P.value) }, null, 6)) : x("", true), b(L.$slots, "content", { links: t.links }, () => [f(e(K), { links: t.links, level: 0 }, null, 8, ["links"])])], 2)], 64)) : x("", true), r.bottom ? (i(), k("div", { key: 2, "data-slot": "bottom", class: s(a.value.bottom({ class: (_g = e(c)) == null ? void 0 : _g.bottom, body: !!r.top || !!((_h = t.links) == null ? void 0 : _h.length) })) }, [b(L.$slots, "bottom", { links: t.links })], 2)) : x("", true)], 2)];
    }), _: 3 }, 16, ["default-open", "class"])], 64);
  };
} });
function ie(t, d, l) {
  var _a;
  if (!(!(t == null ? void 0 : t.length) || !d)) {
    for (const g of t) if (g.children) {
      for (const u of g.children) {
        const n = (_a = u.stem) == null ? void 0 : _a.endsWith("/index");
        if (u.path === d && !n) return g.title;
      }
      const r = ie(g.children, d);
      if (r) return r;
    }
  }
}
const St = (t) => {
  const d = void 0;
  d && d.node.res.setHeader("x-nitro-prerender", [d.node.res.getHeader("x-nitro-prerender"), t].filter(Boolean).join(","));
}, Ct = { class: "flex items-center gap-2 text-sm text-muted" }, Dt = oe({ __name: "[...slug]", async setup(t) {
  var _a, _b, _c;
  let d, l;
  const g = re(), { locale: r, isEnabled: u, t: n } = ce(), y = N(), h = Ye("navigation"), { shouldPushContent: c } = ke(), I = T(() => u.value ? `docs_${r.value}` : "docs"), [{ data: p }, { data: O }] = ([d, l] = Ze(() => Promise.all([fe(pe(g.path), () => _e(I.value).path(g.path).first(), "$M00rydSJtP"), fe(`${pe(g.path)}-surround`, () => et(I.value, g.path, { fields: ["description"] }))])), d = await d, l(), d);
  if (!p.value) throw tt({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  const K = ((_a = p.value.seo) == null ? void 0 : _a.title) || p.value.title, q = ((_b = p.value.seo) == null ? void 0 : _b.description) || p.value.description, E = Q(ie(h == null ? void 0 : h.value, (_c = p.value) == null ? void 0 : _c.path)), a = T(() => {
    var _a2;
    return at(h == null ? void 0 : h.value, ((_a2 = p.value) == null ? void 0 : _a2.path) || "");
  });
  it({ title: K, description: q, type: "article", modifiedAt: p.value.modifiedAt, breadcrumbs: a }), Ie(() => h == null ? void 0 : h.value, () => {
    var _a2;
    E.value = ie(h == null ? void 0 : h.value, (_a2 = p.value) == null ? void 0 : _a2.path) || E.value;
  }), lt("Docs", { headline: E.value });
  const w = T(() => y.github ? y.github : null), o = T(() => {
    var _a2, _b2;
    if (w.value) return [w.value.url, "edit", w.value.branch, w.value.rootDir, "content", `${(_a2 = p.value) == null ? void 0 : _a2.stem}.${(_b2 = p.value) == null ? void 0 : _b2.extension}`].filter(Boolean).join("/");
  });
  return St(`/raw${g.path}.md`), (P, H) => {
    var _a2, _b2, _c2, _d;
    const L = Z, A = ft, B = mt, F = nt, S = xe, _ = vt, ue = st, we = Lt, $e = Tt, qe = ot;
    return e(p) ? (i(), v(qe, { key: `page-${e(c)}` }, ne({ default: m(() => [f(B, { title: e(p).title, description: e(p).description, headline: e(E), ui: { wrapper: "flex-row items-center flex-wrap justify-between" } }, { links: m(() => [(i(true), k(D, null, M(e(p).links, (Te, Se) => (i(), v(L, C({ key: Se, size: "sm" }, { ref_for: true }, Te), null, 16))), 128)), f(A)]), _: 1 }, 8, ["title", "description", "headline"]), f(ue, null, { default: m(() => [e(p) ? (i(), v(F, { key: 0, value: e(p) }, null, 8, ["value"])) : x("", true), e(w) ? (i(), v(S, { key: 1 }, { default: m(() => [$("div", Ct, [f(L, { variant: "link", color: "neutral", to: e(o), target: "_blank", icon: "i-lucide-pen", ui: { leadingIcon: "size-4" } }, { default: m(() => [U(z(e(n)("docs.edit")), 1)]), _: 1 }, 8, ["to"]), $("span", null, z(e(n)("common.or")), 1), f(L, { variant: "link", color: "neutral", to: `${e(w).url}/issues/new/choose`, target: "_blank", icon: "i-lucide-alert-circle", ui: { leadingIcon: "size-4" } }, { default: m(() => [U(z(e(n)("docs.report")), 1)]), _: 1 }, 8, ["to"])])]), _: 1 })) : x("", true), f(_, { surround: e(O) }, null, 8, ["surround"])]), _: 1 })]), _: 2 }, [((_d = (_c2 = (_b2 = (_a2 = e(p)) == null ? void 0 : _a2.body) == null ? void 0 : _b2.toc) == null ? void 0 : _c2.links) == null ? void 0 : _d.length) && !e(c) ? { name: "right", fn: m(() => {
      var _a3, _b3, _c3;
      return [f($e, { highlight: "", title: ((_a3 = e(y).toc) == null ? void 0 : _a3.title) || e(n)("docs.toc"), links: (_c3 = (_b3 = e(p).body) == null ? void 0 : _b3.toc) == null ? void 0 : _c3.links }, { bottom: m(() => [f(we)]), _: 1 }, 8, ["title", "links"])];
    }), key: "0" } : void 0]), 1024)) : x("", true);
  };
} });
export {
  Dt as default
};
