import { i as Tt, f as le, br as Mt, j as Ie, bz as Dt, az as ot, bs as zt, r as te, G as ut, ah as Me, v as ve, l as C, m as D, w as z, e as V, p as l, B as Y, P as ue, bA as ke, q as wt, bt as He, bQ as ct, n as Q, Y as pe, X as Ne, c as $, bR as qt, o as $t, k as Kt, h as dt, N, b9 as ft, bS as Rt, bD as Ot, F as je, bT as Pt, $ as he, bU as Vt, bB as Ht, bC as Nt, bV as jt, y as H, a0 as be, ai as Gt, aw as Wt, t as ae, aV as ee, ad as ht, ae as pt, C as gt, H as mt, aP as Ut, aQ as De, bn as Yt, aj as ze, ak as Qt, L as Ce, bW as Xt, M as vt, aa as Jt, bX as Zt, bY as we, bZ as ei, Q as ye, O as q, R as ti, b_ as ii, A as Ye, ab as fe, z as Be, a1 as si, b$ as yt, a2 as Qe, af as qe, c0 as ai, bH as ni, bM as Xe, bI as Je, bJ as Ze, aU as li, Z as ri, c1 as oi } from "#entry";
import { f as Ae } from "./CANvInnb.js";
import { u as ui, V as ci } from "./Ck59o4im.js";
import { u as di } from "./CTu2NUrI.js";
import { _ as fi } from "./CUG6gCyP.js";
import { d as hi } from "./B_ViZct3.js";
function pi() {
  return { ALT: "Alt", ARROW_DOWN: "ArrowDown", ARROW_LEFT: "ArrowLeft", ARROW_RIGHT: "ArrowRight", ARROW_UP: "ArrowUp", BACKSPACE: "Backspace", CAPS_LOCK: "CapsLock", CONTROL: "Control", DELETE: "Delete", END: "End", ENTER: "Enter", ESCAPE: "Escape", F1: "F1", F10: "F10", F11: "F11", F12: "F12", F2: "F2", F3: "F3", F4: "F4", F5: "F5", F6: "F6", F7: "F7", F8: "F8", F9: "F9", HOME: "Home", META: "Meta", PAGE_DOWN: "PageDown", PAGE_UP: "PageUp", SHIFT: "Shift", SPACE: " ", TAB: "Tab", CTRL: "Control", ASTERISK: "*", SPACE_CODE: "Space" };
}
function et(i) {
  return i == null ? void 0 : i.querySelector("[data-state=checked]");
}
function gi(i, e, t) {
  return i === void 0 ? false : Array.isArray(i) ? i.some((s) => ne(s, e, t)) : ne(i, e, t);
}
function ne(i, e, t) {
  return i === void 0 || e === void 0 ? false : typeof i == "string" ? i === e : typeof t == "function" ? t(i, e) : typeof t == "string" ? (i == null ? void 0 : i[t]) === (e == null ? void 0 : e[t]) : Tt(i, e);
}
const [Se, mi] = He("ListboxRoot");
var vi = le({ __name: "ListboxRoot", props: { modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, multiple: { type: Boolean, required: false }, orientation: { type: String, required: false, default: "vertical" }, dir: { type: String, required: false }, disabled: { type: Boolean, required: false }, selectionBehavior: { type: String, required: false, default: "toggle" }, highlightOnHover: { type: Boolean, required: false }, by: { type: [String, Function], required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false }, name: { type: String, required: false }, required: { type: Boolean, required: false } }, emits: ["update:modelValue", "highlight", "entryFocus", "leave"], setup(i, { expose: e, emit: t }) {
  const s = i, n = t, { multiple: a, highlightOnHover: o, orientation: c, disabled: r, selectionBehavior: h, dir: f } = Mt(s), { getItems: m } = Ie({ isProvider: true }), { handleTypeaheadSearch: p } = Dt(), { primitiveElement: d, currentElement: g } = ot(), b = pi(), k = zt(f), T = ui(g), M = te(), P = te(false), K = te(true), F = ut(s, "modelValue", n, { defaultValue: s.defaultValue ?? (a.value ? [] : void 0), passive: s.modelValue === void 0, deep: true });
  function J(v) {
    if (P.value = true, s.multiple) {
      const L = Array.isArray(F.value) ? [...F.value] : [], I = L.findIndex((O) => ne(O, v, s.by));
      s.selectionBehavior === "toggle" ? (I === -1 ? L.push(v) : L.splice(I, 1), F.value = L) : (F.value = [v], M.value = v);
    } else s.selectionBehavior === "toggle" && ne(F.value, v, s.by) ? F.value = void 0 : F.value = v;
    setTimeout(() => {
      P.value = false;
    }, 1);
  }
  const y = te(null), B = te(null), w = te(false), G = te(false), Z = ke(), W = ke(), E = ke();
  function S() {
    return m().map((v) => v.ref).filter((v) => v.dataset.disabled !== "");
  }
  function u(v, L = true) {
    if (!v) return;
    y.value = v, K.value && y.value.focus(), L && y.value.scrollIntoView({ block: "nearest" });
    const I = m().find((O) => O.ref === v);
    n("highlight", I);
  }
  function R(v) {
    if (w.value) E.trigger(v);
    else {
      const L = m().find((I) => ne(I.value, v, s.by));
      L && (y.value = L.ref, u(L.ref));
    }
  }
  function x(v) {
    y.value && y.value.isConnected && (v.preventDefault(), v.stopPropagation(), G.value || y.value.click());
  }
  function _(v) {
    if (K.value) {
      if (P.value = true, w.value) W.trigger(v);
      else {
        const L = v.altKey || v.ctrlKey || v.metaKey;
        if (L && v.key === "a" && a.value) {
          const I = m(), O = I.map((de) => de.value);
          F.value = [...O], v.preventDefault(), u(I[I.length - 1].ref);
        } else if (!L) {
          const I = p(v.key, m());
          I && u(I);
        }
      }
      setTimeout(() => {
        P.value = false;
      }, 1);
    }
  }
  function U() {
    G.value = true;
  }
  function j() {
    ve(() => {
      G.value = false;
    });
  }
  function ce() {
    ve(() => {
      const v = new KeyboardEvent("keydown", { key: "PageUp" });
      We(v);
    });
  }
  function Fe(v) {
    const L = y.value;
    (L == null ? void 0 : L.isConnected) && (B.value = L), y.value = null, n("leave", v);
  }
  function kt(v) {
    var _a, _b;
    const L = new CustomEvent("listbox.entryFocus", { bubbles: false, cancelable: true });
    if ((_a = v.currentTarget) == null ? void 0 : _a.dispatchEvent(L), n("entryFocus", L), !L.defaultPrevented) if (B.value) u(B.value);
    else {
      const I = (_b = S()) == null ? void 0 : _b[0];
      u(I);
    }
  }
  function We(v) {
    const L = wt(v, c.value, k.value);
    if (!L) return;
    let I = S();
    if (y.value) {
      if (L === "last") I.reverse();
      else if (L === "prev" || L === "next") {
        L === "prev" && I.reverse();
        const O = I.indexOf(y.value);
        I = I.slice(O + 1);
      }
      Bt(v, I[0]);
    }
    if (I.length) {
      const O = !y.value && L === "prev" ? I.length - 1 : 0;
      u(I[O]);
    }
    if (w.value) return W.trigger(v);
  }
  function Bt(v, L) {
    var _a;
    if (!(w.value || s.selectionBehavior !== "replace" || !a.value || !Array.isArray(F.value) || (v.altKey || v.ctrlKey || v.metaKey) && !v.shiftKey) && v.shiftKey) {
      const O = m().filter((me) => me.ref.dataset.disabled !== "");
      let de = (_a = O.find((me) => me.ref === L)) == null ? void 0 : _a.value;
      if (v.key === b.END ? de = O[O.length - 1].value : v.key === b.HOME && (de = O[0].value), !de || !M.value) return;
      const _t = Ae(O.map((me) => me.value), M.value, de);
      F.value = _t;
    }
  }
  async function Ue(v) {
    if (await ve(), w.value) Z.trigger(v);
    else {
      const L = S(), I = L.find((O) => O.dataset.state === "checked");
      I ? u(I) : L.length && u(L[0]);
    }
  }
  return Me(F, () => {
    P.value || ve(() => {
      Ue();
    });
  }, { immediate: true, deep: true }), e({ highlightedElement: y, highlightItem: R, highlightFirstItem: ce, highlightSelected: Ue, getItems: m }), mi({ modelValue: F, onValueChange: J, multiple: a, orientation: c, dir: k, disabled: r, highlightOnHover: o, highlightedElement: y, isVirtual: w, virtualFocusHook: Z, virtualKeydownHook: W, virtualHighlightHook: E, by: s.by, firstValue: M, selectionBehavior: h, focusable: K, onLeave: Fe, onEnter: kt, changeHighlight: u, onKeydownEnter: x, onKeydownNavigation: We, onKeydownTypeAhead: _, onCompositionStart: U, onCompositionEnd: j, highlightFirstItem: ce }), (v, L) => (C(), D(l(ue), { ref_key: "primitiveElement", ref: d, as: v.as, "as-child": v.asChild, dir: l(k), "data-disabled": l(r) ? "" : void 0, onPointerleave: Fe, onFocusout: L[0] || (L[0] = async (I) => {
    const O = I.relatedTarget || I.target;
    await ve(), y.value && l(g) && !l(g).contains(O) && Fe(I);
  }) }, { default: z(() => [V(v.$slots, "default", { modelValue: l(F) }), l(T) && v.name ? (C(), D(l(ci), { key: 0, name: v.name, value: l(F), disabled: l(r), required: v.required }, null, 8, ["name", "value", "disabled", "required"])) : Y("v-if", true)]), _: 3 }, 8, ["as", "as-child", "dir", "data-disabled"]));
} }), yi = vi, bi = le({ __name: "ListboxContent", props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(i) {
  const { CollectionSlot: e } = Ie(), t = Se(), s = ct(false, 10);
  return (n, a) => (C(), D(l(e), null, { default: z(() => [Q(l(ue), { role: "listbox", as: n.as, "as-child": n.asChild, tabindex: l(t).focusable.value ? l(t).highlightedElement.value ? "-1" : "0" : "-1", "aria-orientation": l(t).orientation.value, "aria-multiselectable": !!l(t).multiple.value, "data-orientation": l(t).orientation.value, onMousedown: a[0] || (a[0] = Ne((o) => s.value = true, ["left"])), onFocus: a[1] || (a[1] = (o) => {
    l(s) || l(t).onEnter(o);
  }), onKeydown: [a[2] || (a[2] = pe((o) => {
    l(t).orientation.value === "vertical" && (o.key === "ArrowLeft" || o.key === "ArrowRight") || l(t).orientation.value === "horizontal" && (o.key === "ArrowUp" || o.key === "ArrowDown") || (o.preventDefault(), l(t).focusable.value && l(t).onKeydownNavigation(o));
  }, ["down", "up", "left", "right", "home", "end"])), pe(l(t).onKeydownEnter, ["enter"]), l(t).onKeydownTypeAhead] }, { default: z(() => [V(n.$slots, "default")]), _: 3 }, 8, ["as", "as-child", "tabindex", "aria-orientation", "aria-multiselectable", "data-orientation", "onKeydown"])]), _: 3 }));
} }), xi = bi, Ai = le({ __name: "ListboxFilter", props: { modelValue: { type: String, required: false }, autoFocus: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "input" } }, emits: ["update:modelValue"], setup(i, { emit: e }) {
  const t = i, n = ut(t, "modelValue", e, { defaultValue: "", passive: t.modelValue === void 0 }), a = Se(), { primitiveElement: o, currentElement: c } = ot(), r = $(() => t.disabled || a.disabled.value || false), h = te();
  return qt(() => {
    var _a;
    return h.value = (_a = a.highlightedElement.value) == null ? void 0 : _a.id;
  }), $t(() => {
    a.focusable.value = false, setTimeout(() => {
      var _a;
      t.autoFocus && ((_a = c.value) == null ? void 0 : _a.focus());
    }, 1);
  }), Kt(() => {
    a.focusable.value = true;
  }), (f, m) => (C(), D(l(ue), { ref_key: "primitiveElement", ref: o, as: f.as, "as-child": f.asChild, value: l(n), disabled: r.value ? "" : void 0, "data-disabled": r.value ? "" : void 0, "aria-disabled": r.value ?? void 0, "aria-activedescendant": h.value, type: "text", onKeydown: [pe(Ne(l(a).onKeydownNavigation, ["prevent"]), ["down", "up", "home", "end"]), pe(l(a).onKeydownEnter, ["enter"])], onInput: m[0] || (m[0] = (p) => {
    n.value = p.target.value, l(a).highlightFirstItem();
  }), onCompositionstart: l(a).onCompositionStart, onCompositionend: l(a).onCompositionEnd }, { default: z(() => [V(f.$slots, "default", { modelValue: l(n) })]), _: 3 }, 8, ["as", "as-child", "value", "disabled", "data-disabled", "aria-disabled", "aria-activedescendant", "onKeydown", "onCompositionstart", "onCompositionend"]));
} }), Ci = Ai;
const [Ei, Li] = He("ListboxGroup");
var Ii = le({ __name: "ListboxGroup", props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false } }, setup(i) {
  const e = i, t = dt(void 0, "reka-listbox-group");
  return Li({ id: t }), (s, n) => (C(), D(l(ue), N({ role: "group" }, e, { "aria-labelledby": l(t) }), { default: z(() => [V(s.$slots, "default")]), _: 3 }, 16, ["aria-labelledby"]));
} }), Si = Ii, Fi = le({ __name: "ListboxGroupLabel", props: { for: { type: String, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "div" } }, setup(i) {
  const e = i, t = Ei({ id: "" });
  return (s, n) => (C(), D(l(ue), N(e, { id: l(t).id }), { default: z(() => [V(s.$slots, "default")]), _: 3 }, 16, ["id"]));
} }), ki = Fi;
const Bi = "listbox.select", [_i, Ti] = He("ListboxItem");
var Mi = le({ __name: "ListboxItem", props: { value: { type: null, required: true }, disabled: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "div" } }, emits: ["select"], setup(i, { emit: e }) {
  const t = i, s = e, n = dt(void 0, "reka-listbox-item"), { CollectionItem: a } = Ie(), { forwardRef: o, currentElement: c } = ft(), r = Se(), h = $(() => c.value === r.highlightedElement.value), f = $(() => gi(r.modelValue.value, t.value, r.by)), m = $(() => r.disabled.value || t.disabled);
  async function p(g) {
    s("select", g), !(g == null ? void 0 : g.defaultPrevented) && !m.value && g && (r.onValueChange(t.value), r.changeHighlight(c.value));
  }
  function d(g) {
    const b = { originalEvent: g, value: t.value };
    Ot(Bi, p, b);
  }
  return Ti({ isSelected: f }), (g, b) => (C(), D(l(a), { value: g.value }, { default: z(() => [Rt([h.value, f.value], () => Q(l(ue), N({ id: l(n) }, g.$attrs, { ref: l(o), role: "option", tabindex: l(r).focusable.value ? h.value ? "0" : "-1" : -1, "aria-selected": f.value, as: g.as, "as-child": g.asChild, disabled: m.value ? "" : void 0, "data-disabled": m.value ? "" : void 0, "data-highlighted": h.value ? "" : void 0, "data-state": f.value ? "checked" : "unchecked", onClick: d, onKeydown: pe(Ne(d, ["prevent"]), ["space"]), onPointermove: b[0] || (b[0] = () => {
    l(r).highlightedElement.value !== l(c) && l(r).highlightOnHover.value && !l(r).focusable.value && l(r).changeHighlight(l(c), false);
  }) }), { default: z(() => [V(g.$slots, "default")]), _: 3 }, 16, ["id", "tabindex", "aria-selected", "as", "as-child", "disabled", "data-disabled", "data-highlighted", "data-state", "onKeydown"]), b, 1)]), _: 3 }, 8, ["value"]));
} }), Di = Mi, zi = le({ __name: "ListboxItemIndicator", props: { asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "span" } }, setup(i) {
  const e = i;
  ft();
  const t = _i();
  return (s, n) => l(t).isSelected.value ? (C(), D(l(ue), N({ key: 0, "aria-hidden": "true" }, e), { default: z(() => [V(s.$slots, "default")]), _: 3 }, 16)) : Y("v-if", true);
} }), wi = zi, qi = le({ __name: "ListboxVirtualizer", props: { options: { type: Array, required: true }, overscan: { type: Number, required: false }, estimateSize: { type: [Number, Function], required: false }, textContent: { type: Function, required: false } }, setup(i) {
  const e = i, t = je(), s = Se(), n = Pt(), { getItems: a } = Ie();
  s.isVirtual.value = true;
  const o = $(() => {
    const p = n.value;
    if (p) {
      const d = window.getComputedStyle(p);
      return { start: Number.parseFloat(d.paddingBlockStart || d.paddingTop), end: Number.parseFloat(d.paddingBlockEnd || d.paddingBottom) };
    } else return { start: 0, end: 0 };
  }), c = di({ get scrollPaddingStart() {
    return o.value.start;
  }, get scrollPaddingEnd() {
    return o.value.end;
  }, get count() {
    return e.options.length;
  }, get horizontal() {
    return s.orientation.value === "horizontal";
  }, estimateSize(p) {
    return typeof e.estimateSize == "function" ? e.estimateSize(p) : e.estimateSize ?? 28;
  }, getScrollElement() {
    return n.value;
  }, overscan: e.overscan ?? 12 }), r = $(() => c.value.getVirtualItems().map((p) => {
    const d = t.default({ option: e.options[p.index], virtualizer: c.value, virtualItem: p })[0], g = d.type === he && Array.isArray(d.children) ? d.children[0] : d;
    return { item: p, is: Vt(g, { key: `${p.key}`, "data-index": p.index, "aria-setsize": e.options.length, "aria-posinset": p.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${p.start}px)`, overflowAnchor: "none" } }) };
  }));
  s.virtualFocusHook.on((p) => {
    const d = e.options.findIndex((g) => Array.isArray(s.modelValue.value) ? ne(g, s.modelValue.value[0], s.by) : ne(g, s.modelValue.value, s.by));
    d !== -1 ? (p == null ? void 0 : p.preventDefault(), c.value.scrollToIndex(d, { align: "start" }), requestAnimationFrame(() => {
      const g = et(n.value);
      g && (s.changeHighlight(g), p && (g == null ? void 0 : g.focus()));
    })) : s.highlightFirstItem();
  }), s.virtualHighlightHook.on((p) => {
    const d = e.options.findIndex((g) => ne(g, p, s.by));
    c.value.scrollToIndex(d, { align: "start" }), requestAnimationFrame(() => {
      const g = et(n.value);
      g && s.changeHighlight(g);
    });
  });
  const h = ct("", 1e3), f = $(() => {
    const p = (d) => e.textContent ? e.textContent(d) : d == null ? void 0 : d.toString().toLowerCase();
    return e.options.map((d, g) => ({ index: g, textContent: p(d) }));
  });
  function m(p, d) {
    var _a, _b, _c, _d;
    if (!((_a = s.firstValue) == null ? void 0 : _a.value) || !s.multiple.value || !Array.isArray(s.modelValue.value)) return;
    const b = (_b = a().filter((T) => T.ref.dataset.disabled !== "").find((T) => T.ref === s.highlightedElement.value)) == null ? void 0 : _b.value;
    if (!b) return;
    let k = null;
    switch (d) {
      case "prev":
      case "next": {
        k = Ae(e.options, s.firstValue.value, b);
        break;
      }
      case "first": {
        k = Ae(e.options, s.firstValue.value, (_c = e.options) == null ? void 0 : _c[0]);
        break;
      }
      case "last": {
        k = Ae(e.options, s.firstValue.value, (_d = e.options) == null ? void 0 : _d[e.options.length - 1]);
        break;
      }
    }
    s.modelValue.value = k;
  }
  return s.virtualKeydownHook.on((p) => {
    var _a;
    const d = p.altKey || p.ctrlKey || p.metaKey;
    if (p.key === "Tab" && !d) return;
    let b = Ht[p.key];
    if (d && p.key === "a" && s.multiple.value ? (p.preventDefault(), s.modelValue.value = [...e.options], b = "last") : p.shiftKey && b && m(p, b), ["first", "last"].includes(b)) {
      p.preventDefault();
      const k = b === "first" ? 0 : e.options.length - 1;
      c.value.scrollToIndex(k), requestAnimationFrame(() => {
        const T = a(), M = b === "first" ? T[0] : T[T.length - 1];
        M && s.changeHighlight(M.ref);
      });
    } else if (!b && !d) {
      h.value += p.key;
      const k = Number((_a = Nt()) == null ? void 0 : _a.getAttribute("data-index")), T = f.value[k].textContent, M = f.value.map((F) => F.textContent ?? ""), P = jt(M, h.value, T), K = f.value.find((F) => F.textContent === P);
      K && (c.value.scrollToIndex(K.index, { align: "start" }), requestAnimationFrame(() => {
        const F = n.value.querySelector(`[data-index="${K.index}"]`);
        F instanceof HTMLElement && s.changeHighlight(F);
      }));
    }
  }), (p, d) => (C(), H("div", { "data-reka-virtualizer": "", style: Wt({ position: "relative", width: "100%", height: `${l(c).getTotalSize()}px` }) }, [(C(true), H(he, null, be(r.value, ({ is: g, item: b }) => (C(), D(Gt(g), { key: b.index }))), 128))], 4));
} }), $i = qi;
function se(i) {
  return Array.isArray ? Array.isArray(i) : At(i) === "[object Array]";
}
function Ki(i) {
  if (typeof i == "string") return i;
  let e = i + "";
  return e == "0" && 1 / i == -1 / 0 ? "-0" : e;
}
function Ri(i) {
  return i == null ? "" : Ki(i);
}
function ie(i) {
  return typeof i == "string";
}
function bt(i) {
  return typeof i == "number";
}
function Oi(i) {
  return i === true || i === false || Pi(i) && At(i) == "[object Boolean]";
}
function xt(i) {
  return typeof i == "object";
}
function Pi(i) {
  return xt(i) && i !== null;
}
function X(i) {
  return i != null;
}
function _e(i) {
  return !i.trim().length;
}
function At(i) {
  return i == null ? i === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(i);
}
const Vi = "Incorrect 'index' type", Hi = (i) => `Invalid value for key ${i}`, Ni = (i) => `Pattern length exceeds max of ${i}.`, ji = (i) => `Missing ${i} property in key`, Gi = (i) => `Property 'weight' in key '${i}' must be a positive integer`, tt = Object.prototype.hasOwnProperty;
class Wi {
  constructor(e) {
    this._keys = [], this._keyMap = {};
    let t = 0;
    e.forEach((s) => {
      let n = Ct(s);
      this._keys.push(n), this._keyMap[n.id] = n, t += n.weight;
    }), this._keys.forEach((s) => {
      s.weight /= t;
    });
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function Ct(i) {
  let e = null, t = null, s = null, n = 1, a = null;
  if (ie(i) || se(i)) s = i, e = it(i), t = $e(i);
  else {
    if (!tt.call(i, "name")) throw new Error(ji("name"));
    const o = i.name;
    if (s = o, tt.call(i, "weight") && (n = i.weight, n <= 0)) throw new Error(Gi(o));
    e = it(o), t = $e(o), a = i.getFn;
  }
  return { path: e, id: t, weight: n, src: s, getFn: a };
}
function it(i) {
  return se(i) ? i : i.split(".");
}
function $e(i) {
  return se(i) ? i.join(".") : i;
}
function Ui(i, e) {
  let t = [], s = false;
  const n = (a, o, c) => {
    if (X(a)) if (!o[c]) t.push(a);
    else {
      let r = o[c];
      const h = a[r];
      if (!X(h)) return;
      if (c === o.length - 1 && (ie(h) || bt(h) || Oi(h))) t.push(Ri(h));
      else if (se(h)) {
        s = true;
        for (let f = 0, m = h.length; f < m; f += 1) n(h[f], o, c + 1);
      } else o.length && n(h, o, c + 1);
    }
  };
  return n(i, ie(e) ? e.split(".") : e, 0), s ? t : t[0];
}
const Yi = { includeMatches: false, findAllMatches: false, minMatchCharLength: 1 }, Qi = { isCaseSensitive: false, ignoreDiacritics: false, includeScore: false, keys: [], shouldSort: true, sortFn: (i, e) => i.score === e.score ? i.idx < e.idx ? -1 : 1 : i.score < e.score ? -1 : 1 }, Xi = { location: 0, threshold: 0.6, distance: 100 }, Ji = { useExtendedSearch: false, getFn: Ui, ignoreLocation: false, ignoreFieldNorm: false, fieldNormWeight: 1 };
var A = { ...Qi, ...Yi, ...Xi, ...Ji };
const Zi = /[^ ]+/g;
function es(i = 1, e = 3) {
  const t = /* @__PURE__ */ new Map(), s = Math.pow(10, e);
  return { get(n) {
    const a = n.match(Zi).length;
    if (t.has(a)) return t.get(a);
    const o = 1 / Math.pow(a, 0.5 * i), c = parseFloat(Math.round(o * s) / s);
    return t.set(a, c), c;
  }, clear() {
    t.clear();
  } };
}
class Ge {
  constructor({ getFn: e = A.getFn, fieldNormWeight: t = A.fieldNormWeight } = {}) {
    this.norm = es(t, 3), this.getFn = e, this.isCreated = false, this.setIndexRecords();
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    this.keys = e, this._keysMap = {}, e.forEach((t, s) => {
      this._keysMap[t.id] = s;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = true, ie(this.docs[0]) ? this.docs.forEach((e, t) => {
      this._addString(e, t);
    }) : this.docs.forEach((e, t) => {
      this._addObject(e, t);
    }), this.norm.clear());
  }
  add(e) {
    const t = this.size();
    ie(e) ? this._addString(e, t) : this._addObject(e, t);
  }
  removeAt(e) {
    this.records.splice(e, 1);
    for (let t = e, s = this.size(); t < s; t += 1) this.records[t].i -= 1;
  }
  getValueForItemAtKeyId(e, t) {
    return e[this._keysMap[t]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, t) {
    if (!X(e) || _e(e)) return;
    let s = { v: e, i: t, n: this.norm.get(e) };
    this.records.push(s);
  }
  _addObject(e, t) {
    let s = { i: t, $: {} };
    this.keys.forEach((n, a) => {
      let o = n.getFn ? n.getFn(e) : this.getFn(e, n.path);
      if (X(o)) {
        if (se(o)) {
          let c = [];
          const r = [{ nestedArrIndex: -1, value: o }];
          for (; r.length; ) {
            const { nestedArrIndex: h, value: f } = r.pop();
            if (X(f)) if (ie(f) && !_e(f)) {
              let m = { v: f, i: h, n: this.norm.get(f) };
              c.push(m);
            } else se(f) && f.forEach((m, p) => {
              r.push({ nestedArrIndex: p, value: m });
            });
          }
          s.$[a] = c;
        } else if (ie(o) && !_e(o)) {
          let c = { v: o, n: this.norm.get(o) };
          s.$[a] = c;
        }
      }
    }), this.records.push(s);
  }
  toJSON() {
    return { keys: this.keys, records: this.records };
  }
}
function Et(i, e, { getFn: t = A.getFn, fieldNormWeight: s = A.fieldNormWeight } = {}) {
  const n = new Ge({ getFn: t, fieldNormWeight: s });
  return n.setKeys(i.map(Ct)), n.setSources(e), n.create(), n;
}
function ts(i, { getFn: e = A.getFn, fieldNormWeight: t = A.fieldNormWeight } = {}) {
  const { keys: s, records: n } = i, a = new Ge({ getFn: e, fieldNormWeight: t });
  return a.setKeys(s), a.setIndexRecords(n), a;
}
function xe(i, { errors: e = 0, currentLocation: t = 0, expectedLocation: s = 0, distance: n = A.distance, ignoreLocation: a = A.ignoreLocation } = {}) {
  const o = e / i.length;
  if (a) return o;
  const c = Math.abs(s - t);
  return n ? o + c / n : c ? 1 : o;
}
function is(i = [], e = A.minMatchCharLength) {
  let t = [], s = -1, n = -1, a = 0;
  for (let o = i.length; a < o; a += 1) {
    let c = i[a];
    c && s === -1 ? s = a : !c && s !== -1 && (n = a - 1, n - s + 1 >= e && t.push([s, n]), s = -1);
  }
  return i[a - 1] && a - s >= e && t.push([s, a - 1]), t;
}
const oe = 32;
function ss(i, e, t, { location: s = A.location, distance: n = A.distance, threshold: a = A.threshold, findAllMatches: o = A.findAllMatches, minMatchCharLength: c = A.minMatchCharLength, includeMatches: r = A.includeMatches, ignoreLocation: h = A.ignoreLocation } = {}) {
  if (e.length > oe) throw new Error(Ni(oe));
  const f = e.length, m = i.length, p = Math.max(0, Math.min(s, m));
  let d = a, g = p;
  const b = c > 1 || r, k = b ? Array(m) : [];
  let T;
  for (; (T = i.indexOf(e, g)) > -1; ) {
    let y = xe(e, { currentLocation: T, expectedLocation: p, distance: n, ignoreLocation: h });
    if (d = Math.min(y, d), g = T + f, b) {
      let B = 0;
      for (; B < f; ) k[T + B] = 1, B += 1;
    }
  }
  g = -1;
  let M = [], P = 1, K = f + m;
  const F = 1 << f - 1;
  for (let y = 0; y < f; y += 1) {
    let B = 0, w = K;
    for (; B < w; ) xe(e, { errors: y, currentLocation: p + w, expectedLocation: p, distance: n, ignoreLocation: h }) <= d ? B = w : K = w, w = Math.floor((K - B) / 2 + B);
    K = w;
    let G = Math.max(1, p - w + 1), Z = o ? m : Math.min(p + w, m) + f, W = Array(Z + 2);
    W[Z + 1] = (1 << y) - 1;
    for (let S = Z; S >= G; S -= 1) {
      let u = S - 1, R = t[i.charAt(u)];
      if (b && (k[u] = +!!R), W[S] = (W[S + 1] << 1 | 1) & R, y && (W[S] |= (M[S + 1] | M[S]) << 1 | 1 | M[S + 1]), W[S] & F && (P = xe(e, { errors: y, currentLocation: u, expectedLocation: p, distance: n, ignoreLocation: h }), P <= d)) {
        if (d = P, g = u, g <= p) break;
        G = Math.max(1, 2 * p - g);
      }
    }
    if (xe(e, { errors: y + 1, currentLocation: p, expectedLocation: p, distance: n, ignoreLocation: h }) > d) break;
    M = W;
  }
  const J = { isMatch: g >= 0, score: Math.max(1e-3, P) };
  if (b) {
    const y = is(k, c);
    y.length ? r && (J.indices = y) : J.isMatch = false;
  }
  return J;
}
function as(i) {
  let e = {};
  for (let t = 0, s = i.length; t < s; t += 1) {
    const n = i.charAt(t);
    e[n] = (e[n] || 0) | 1 << s - t - 1;
  }
  return e;
}
const Ee = String.prototype.normalize ? ((i) => i.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((i) => i);
class Lt {
  constructor(e, { location: t = A.location, threshold: s = A.threshold, distance: n = A.distance, includeMatches: a = A.includeMatches, findAllMatches: o = A.findAllMatches, minMatchCharLength: c = A.minMatchCharLength, isCaseSensitive: r = A.isCaseSensitive, ignoreDiacritics: h = A.ignoreDiacritics, ignoreLocation: f = A.ignoreLocation } = {}) {
    if (this.options = { location: t, threshold: s, distance: n, includeMatches: a, findAllMatches: o, minMatchCharLength: c, isCaseSensitive: r, ignoreDiacritics: h, ignoreLocation: f }, e = r ? e : e.toLowerCase(), e = h ? Ee(e) : e, this.pattern = e, this.chunks = [], !this.pattern.length) return;
    const m = (d, g) => {
      this.chunks.push({ pattern: d, alphabet: as(d), startIndex: g });
    }, p = this.pattern.length;
    if (p > oe) {
      let d = 0;
      const g = p % oe, b = p - g;
      for (; d < b; ) m(this.pattern.substr(d, oe), d), d += oe;
      if (g) {
        const k = p - oe;
        m(this.pattern.substr(k), k);
      }
    } else m(this.pattern, 0);
  }
  searchIn(e) {
    const { isCaseSensitive: t, ignoreDiacritics: s, includeMatches: n } = this.options;
    if (e = t ? e : e.toLowerCase(), e = s ? Ee(e) : e, this.pattern === e) {
      let b = { isMatch: true, score: 0 };
      return n && (b.indices = [[0, e.length - 1]]), b;
    }
    const { location: a, distance: o, threshold: c, findAllMatches: r, minMatchCharLength: h, ignoreLocation: f } = this.options;
    let m = [], p = 0, d = false;
    this.chunks.forEach(({ pattern: b, alphabet: k, startIndex: T }) => {
      const { isMatch: M, score: P, indices: K } = ss(e, b, k, { location: a + T, distance: o, threshold: c, findAllMatches: r, minMatchCharLength: h, includeMatches: n, ignoreLocation: f });
      M && (d = true), p += P, M && K && (m = [...m, ...K]);
    });
    let g = { isMatch: d, score: d ? p / this.chunks.length : 1 };
    return d && n && (g.indices = m), g;
  }
}
class re {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return st(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return st(e, this.singleRegex);
  }
  search() {
  }
}
function st(i, e) {
  const t = i.match(e);
  return t ? t[1] : null;
}
class ns extends re {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    const t = e === this.pattern;
    return { isMatch: t, score: t ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class ls extends re {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    const s = e.indexOf(this.pattern) === -1;
    return { isMatch: s, score: s ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class rs extends re {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    const t = e.startsWith(this.pattern);
    return { isMatch: t, score: t ? 0 : 1, indices: [0, this.pattern.length - 1] };
  }
}
class os extends re {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    const t = !e.startsWith(this.pattern);
    return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class us extends re {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    const t = e.endsWith(this.pattern);
    return { isMatch: t, score: t ? 0 : 1, indices: [e.length - this.pattern.length, e.length - 1] };
  }
}
class cs extends re {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    const t = !e.endsWith(this.pattern);
    return { isMatch: t, score: t ? 0 : 1, indices: [0, e.length - 1] };
  }
}
class It extends re {
  constructor(e, { location: t = A.location, threshold: s = A.threshold, distance: n = A.distance, includeMatches: a = A.includeMatches, findAllMatches: o = A.findAllMatches, minMatchCharLength: c = A.minMatchCharLength, isCaseSensitive: r = A.isCaseSensitive, ignoreDiacritics: h = A.ignoreDiacritics, ignoreLocation: f = A.ignoreLocation } = {}) {
    super(e), this._bitapSearch = new Lt(e, { location: t, threshold: s, distance: n, includeMatches: a, findAllMatches: o, minMatchCharLength: c, isCaseSensitive: r, ignoreDiacritics: h, ignoreLocation: f });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class St extends re {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let t = 0, s;
    const n = [], a = this.pattern.length;
    for (; (s = e.indexOf(this.pattern, t)) > -1; ) t = s + a, n.push([s, t - 1]);
    const o = !!n.length;
    return { isMatch: o, score: o ? 0 : 1, indices: n };
  }
}
const Ke = [ns, St, rs, os, cs, us, ls, It], at = Ke.length, ds = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, fs = "|";
function hs(i, e = {}) {
  return i.split(fs).map((t) => {
    let s = t.trim().split(ds).filter((a) => a && !!a.trim()), n = [];
    for (let a = 0, o = s.length; a < o; a += 1) {
      const c = s[a];
      let r = false, h = -1;
      for (; !r && ++h < at; ) {
        const f = Ke[h];
        let m = f.isMultiMatch(c);
        m && (n.push(new f(m, e)), r = true);
      }
      if (!r) for (h = -1; ++h < at; ) {
        const f = Ke[h];
        let m = f.isSingleMatch(c);
        if (m) {
          n.push(new f(m, e));
          break;
        }
      }
    }
    return n;
  });
}
const ps = /* @__PURE__ */ new Set([It.type, St.type]);
class gs {
  constructor(e, { isCaseSensitive: t = A.isCaseSensitive, ignoreDiacritics: s = A.ignoreDiacritics, includeMatches: n = A.includeMatches, minMatchCharLength: a = A.minMatchCharLength, ignoreLocation: o = A.ignoreLocation, findAllMatches: c = A.findAllMatches, location: r = A.location, threshold: h = A.threshold, distance: f = A.distance } = {}) {
    this.query = null, this.options = { isCaseSensitive: t, ignoreDiacritics: s, includeMatches: n, minMatchCharLength: a, findAllMatches: c, ignoreLocation: o, location: r, threshold: h, distance: f }, e = t ? e : e.toLowerCase(), e = s ? Ee(e) : e, this.pattern = e, this.query = hs(this.pattern, this.options);
  }
  static condition(e, t) {
    return t.useExtendedSearch;
  }
  searchIn(e) {
    const t = this.query;
    if (!t) return { isMatch: false, score: 1 };
    const { includeMatches: s, isCaseSensitive: n, ignoreDiacritics: a } = this.options;
    e = n ? e : e.toLowerCase(), e = a ? Ee(e) : e;
    let o = 0, c = [], r = 0;
    for (let h = 0, f = t.length; h < f; h += 1) {
      const m = t[h];
      c.length = 0, o = 0;
      for (let p = 0, d = m.length; p < d; p += 1) {
        const g = m[p], { isMatch: b, indices: k, score: T } = g.search(e);
        if (b) {
          if (o += 1, r += T, s) {
            const M = g.constructor.type;
            ps.has(M) ? c = [...c, ...k] : c.push(k);
          }
        } else {
          r = 0, o = 0, c.length = 0;
          break;
        }
      }
      if (o) {
        let p = { isMatch: true, score: r / o };
        return s && (p.indices = c), p;
      }
    }
    return { isMatch: false, score: 1 };
  }
}
const Re = [];
function ms(...i) {
  Re.push(...i);
}
function Oe(i, e) {
  for (let t = 0, s = Re.length; t < s; t += 1) {
    let n = Re[t];
    if (n.condition(i, e)) return new n(i, e);
  }
  return new Lt(i, e);
}
const Le = { AND: "$and", OR: "$or" }, Pe = { PATH: "$path", PATTERN: "$val" }, Ve = (i) => !!(i[Le.AND] || i[Le.OR]), vs = (i) => !!i[Pe.PATH], ys = (i) => !se(i) && xt(i) && !Ve(i), nt = (i) => ({ [Le.AND]: Object.keys(i).map((e) => ({ [e]: i[e] })) });
function Ft(i, e, { auto: t = true } = {}) {
  const s = (n) => {
    let a = Object.keys(n);
    const o = vs(n);
    if (!o && a.length > 1 && !Ve(n)) return s(nt(n));
    if (ys(n)) {
      const r = o ? n[Pe.PATH] : a[0], h = o ? n[Pe.PATTERN] : n[r];
      if (!ie(h)) throw new Error(Hi(r));
      const f = { keyId: $e(r), pattern: h };
      return t && (f.searcher = Oe(h, e)), f;
    }
    let c = { children: [], operator: a[0] };
    return a.forEach((r) => {
      const h = n[r];
      se(h) && h.forEach((f) => {
        c.children.push(s(f));
      });
    }), c;
  };
  return Ve(i) || (i = nt(i)), s(i);
}
function bs(i, { ignoreFieldNorm: e = A.ignoreFieldNorm }) {
  i.forEach((t) => {
    let s = 1;
    t.matches.forEach(({ key: n, norm: a, score: o }) => {
      const c = n ? n.weight : null;
      s *= Math.pow(o === 0 && c ? Number.EPSILON : o, (c || 1) * (e ? 1 : a));
    }), t.score = s;
  });
}
function xs(i, e) {
  const t = i.matches;
  e.matches = [], X(t) && t.forEach((s) => {
    if (!X(s.indices) || !s.indices.length) return;
    const { indices: n, value: a } = s;
    let o = { indices: n, value: a };
    s.key && (o.key = s.key.src), s.idx > -1 && (o.refIndex = s.idx), e.matches.push(o);
  });
}
function As(i, e) {
  e.score = i.score;
}
function Cs(i, e, { includeMatches: t = A.includeMatches, includeScore: s = A.includeScore } = {}) {
  const n = [];
  return t && n.push(xs), s && n.push(As), i.map((a) => {
    const { idx: o } = a, c = { item: e[o], refIndex: o };
    return n.length && n.forEach((r) => {
      r(a, c);
    }), c;
  });
}
class ge {
  constructor(e, t = {}, s) {
    this.options = { ...A, ...t }, this.options.useExtendedSearch, this._keyStore = new Wi(this.options.keys), this.setCollection(e, s);
  }
  setCollection(e, t) {
    if (this._docs = e, t && !(t instanceof Ge)) throw new Error(Vi);
    this._myIndex = t || Et(this.options.keys, this._docs, { getFn: this.options.getFn, fieldNormWeight: this.options.fieldNormWeight });
  }
  add(e) {
    X(e) && (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => false) {
    const t = [];
    for (let s = 0, n = this._docs.length; s < n; s += 1) {
      const a = this._docs[s];
      e(a, s) && (this.removeAt(s), s -= 1, n -= 1, t.push(a));
    }
    return t;
  }
  removeAt(e) {
    this._docs.splice(e, 1), this._myIndex.removeAt(e);
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: t = -1 } = {}) {
    const { includeMatches: s, includeScore: n, shouldSort: a, sortFn: o, ignoreFieldNorm: c } = this.options;
    let r = ie(e) ? ie(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
    return bs(r, { ignoreFieldNorm: c }), a && r.sort(o), bt(t) && t > -1 && (r = r.slice(0, t)), Cs(r, this._docs, { includeMatches: s, includeScore: n });
  }
  _searchStringList(e) {
    const t = Oe(e, this.options), { records: s } = this._myIndex, n = [];
    return s.forEach(({ v: a, i: o, n: c }) => {
      if (!X(a)) return;
      const { isMatch: r, score: h, indices: f } = t.searchIn(a);
      r && n.push({ item: a, idx: o, matches: [{ score: h, value: a, norm: c, indices: f }] });
    }), n;
  }
  _searchLogical(e) {
    const t = Ft(e, this.options), s = (c, r, h) => {
      if (!c.children) {
        const { keyId: m, searcher: p } = c, d = this._findMatches({ key: this._keyStore.get(m), value: this._myIndex.getValueForItemAtKeyId(r, m), searcher: p });
        return d && d.length ? [{ idx: h, item: r, matches: d }] : [];
      }
      const f = [];
      for (let m = 0, p = c.children.length; m < p; m += 1) {
        const d = c.children[m], g = s(d, r, h);
        if (g.length) f.push(...g);
        else if (c.operator === Le.AND) return [];
      }
      return f;
    }, n = this._myIndex.records, a = {}, o = [];
    return n.forEach(({ $: c, i: r }) => {
      if (X(c)) {
        let h = s(t, c, r);
        h.length && (a[r] || (a[r] = { idx: r, item: c, matches: [] }, o.push(a[r])), h.forEach(({ matches: f }) => {
          a[r].matches.push(...f);
        }));
      }
    }), o;
  }
  _searchObjectList(e) {
    const t = Oe(e, this.options), { keys: s, records: n } = this._myIndex, a = [];
    return n.forEach(({ $: o, i: c }) => {
      if (!X(o)) return;
      let r = [];
      s.forEach((h, f) => {
        r.push(...this._findMatches({ key: h, value: o[f], searcher: t }));
      }), r.length && a.push({ idx: c, item: o, matches: r });
    }), a;
  }
  _findMatches({ key: e, value: t, searcher: s }) {
    if (!X(t)) return [];
    let n = [];
    if (se(t)) t.forEach(({ v: a, i: o, n: c }) => {
      if (!X(a)) return;
      const { isMatch: r, score: h, indices: f } = s.searchIn(a);
      r && n.push({ score: h, key: e, value: a, idx: o, norm: c, indices: f });
    });
    else {
      const { v: a, n: o } = t, { isMatch: c, score: r, indices: h } = s.searchIn(a);
      c && n.push({ score: r, key: e, value: a, norm: o, indices: h });
    }
    return n;
  }
}
ge.version = "7.1.0";
ge.createIndex = Et;
ge.parseIndex = ts;
ge.config = A;
ge.parseQuery = Ft;
ms(gs);
function Es(i, e, t) {
  const s = () => {
    var a, o;
    return new ge((a = ae(e)) !== null && a !== void 0 ? a : [], (o = ae(t)) === null || o === void 0 ? void 0 : o.fuseOptions);
  }, n = te(s());
  return Me(() => {
    var a;
    return (a = ae(t)) === null || a === void 0 ? void 0 : a.fuseOptions;
  }, () => {
    n.value = s();
  }, { deep: true }), Me(() => ae(e), (a) => {
    n.value.setCollection(a);
  }, { deep: true }), { fuse: n, results: $(() => {
    const a = ae(t);
    if ((a == null ? void 0 : a.matchAllWhenSearchEmpty) && !ae(i)) return ae(e).map((c, r) => ({ item: c, refIndex: r }));
    const o = a == null ? void 0 : a.resultLimit;
    return n.value.search(ae(i), o ? { limit: o } : void 0);
  }) };
}
const Ls = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
function Is(i) {
  return i.replace(/[&<>"']/g, (e) => Ls[e]);
}
function Ss(i) {
  return /&(?:amp|lt|gt|quot|#39);/.test(i);
}
function Te(i) {
  return Ss(i) ? i : Is(i);
}
function Fs(i, e) {
  let t = "", s = 0, n = false;
  for (let a = i.length - 1; a >= 0; a--) {
    if (i[a] === ">") n = true;
    else if (i[a] === "<") {
      n = false, t = i[a] + t;
      continue;
    }
    if (n || s++, s <= e) t = i[a] + t;
    else {
      t = "..." + t;
      break;
    }
  }
  return t;
}
function lt(i, e, t, s) {
  var _a;
  function n(a, o = []) {
    a = a || "";
    let c = "", r = 0;
    o.forEach((f) => {
      if (f.length === 2 && f[0] === f[1]) return;
      const m = f[1] + 1, p = m - f[0] >= e.length;
      c += [Te(a.substring(r, f[0])), p && "<mark>", Te(a.substring(f[0], m)), p && "</mark>"].filter(Boolean).join(""), r = m;
    }), c += Te(a.substring(r));
    const h = c.indexOf("<mark>");
    return h !== -1 && (c = Fs(c, c.length - h)), c;
  }
  if ((_a = i.matches) == null ? void 0 : _a.length) {
    for (const a of i.matches) if (!(t && a.key !== t) && !(s == null ? void 0 : s.includes(a.key))) return n(a.value, a.indices);
  }
}
function ks(i, e) {
  if (typeof i != "object" || i === null) return false;
  const t = ee(i, e);
  return t != null && t !== "";
}
function rt(i, e) {
  return e ? { xs: 44, sm: 48, md: 52, lg: 56, xl: 60 }[i] : { xs: 24, sm: 28, md: 32, lg: 36, xl: 40 }[i];
}
function Bs(i, e, t, s) {
  const n = rt(e, true), a = rt(e, false);
  return s ? () => n : t ? (o) => ks(i[o], t) ? n : a : () => a;
}
const _s = { slots: { root: "flex flex-col min-h-0 min-w-0 divide-y divide-default", input: "", close: "", back: "p-0", content: "relative overflow-hidden flex flex-col", footer: "p-1", viewport: "relative scroll-py-1 overflow-y-auto flex-1 focus:outline-none", group: "p-1 isolate", empty: "text-center text-muted", label: "font-semibold text-highlighted", item: "group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75", itemLeadingIcon: "shrink-0", itemLeadingAvatar: "shrink-0", itemLeadingAvatarSize: "", itemLeadingChip: "shrink-0", itemLeadingChipSize: "", itemTrailing: "ms-auto inline-flex items-center", itemTrailingIcon: "shrink-0", itemTrailingHighlightedIcon: "shrink-0 text-dimmed hidden group-data-highlighted:inline-flex", itemTrailingKbds: "hidden lg:inline-flex items-center shrink-0", itemTrailingKbdsSize: "", itemWrapper: "flex-1 flex flex-col text-start min-w-0", itemLabel: "truncate space-x-1 text-dimmed", itemDescription: "truncate text-muted", itemLabelBase: "text-highlighted [&>mark]:text-inverted [&>mark]:bg-primary", itemLabelPrefix: "text-default", itemLabelSuffix: "text-dimmed [&>mark]:text-inverted [&>mark]:bg-primary" }, variants: { virtualize: { true: { viewport: "p-1 isolate" }, false: { viewport: "divide-y divide-default" } }, size: { xs: { input: "[&>input]:h-10", empty: "py-3 text-xs", label: "p-1 text-[10px]/3 gap-1", item: "p-1 text-xs gap-1", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailing: "gap-1", itemTrailingIcon: "size-4", itemTrailingHighlightedIcon: "size-4", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "sm" }, sm: { input: "[&>input]:h-11", empty: "py-4 text-xs", label: "p-1.5 text-[10px]/3 gap-1.5", item: "p-1.5 text-xs gap-1.5", itemLeadingIcon: "size-4", itemLeadingAvatarSize: "3xs", itemLeadingChip: "size-4", itemLeadingChipSize: "sm", itemTrailing: "gap-1.5", itemTrailingIcon: "size-4", itemTrailingHighlightedIcon: "size-4", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "sm" }, md: { input: "[&>input]:h-12", empty: "py-6 text-sm", label: "p-1.5 text-xs gap-1.5", item: "p-1.5 text-sm gap-1.5", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailing: "gap-1.5", itemTrailingIcon: "size-5", itemTrailingHighlightedIcon: "size-5", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "md" }, lg: { input: "[&>input]:h-13", empty: "py-7 text-sm", label: "p-2 text-xs gap-2", item: "p-2 text-sm gap-2", itemLeadingIcon: "size-5", itemLeadingAvatarSize: "2xs", itemLeadingChip: "size-5", itemLeadingChipSize: "md", itemTrailing: "gap-2", itemTrailingIcon: "size-5", itemTrailingHighlightedIcon: "size-5", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "md" }, xl: { input: "[&>input]:h-14", empty: "py-8 text-base", label: "p-2 text-sm gap-2", item: "p-2 text-base gap-2", itemLeadingIcon: "size-6", itemLeadingAvatarSize: "xs", itemLeadingChip: "size-6", itemLeadingChipSize: "lg", itemTrailing: "gap-2", itemTrailingIcon: "size-6", itemTrailingHighlightedIcon: "size-6", itemTrailingKbds: "gap-0.5", itemTrailingKbdsSize: "lg" } }, active: { true: { item: "text-highlighted before:bg-elevated", itemLeadingIcon: "text-default" }, false: { item: ["text-default data-highlighted:not-data-disabled:text-highlighted data-highlighted:not-data-disabled:before:bg-elevated/50", "transition-colors before:transition-colors"], itemLeadingIcon: ["text-dimmed group-data-highlighted:not-group-data-disabled:text-default", "transition-colors"] } }, loading: { true: { itemLeadingIcon: "animate-spin" } } }, defaultVariants: { size: "md" } }, Ts = ["innerHTML"], Ms = ["innerHTML"], Ds = Object.assign({ inheritAttrs: false }, { __name: "UCommandPalette", props: qe({ as: { type: null, required: false }, size: { type: null, required: false }, icon: { type: null, required: false }, trailingIcon: { type: null, required: false }, selectedIcon: { type: null, required: false }, childrenIcon: { type: null, required: false }, placeholder: { type: String, required: false }, autofocus: { type: Boolean, required: false, default: true }, close: { type: [Boolean, Object], required: false }, closeIcon: { type: null, required: false }, back: { type: [Boolean, Object], required: false, default: true }, backIcon: { type: null, required: false }, input: { type: [Boolean, Object], required: false, default: true }, groups: { type: Array, required: false }, fuse: { type: Object, required: false }, virtualize: { type: [Boolean, Object], required: false, default: false }, valueKey: { type: null, required: false }, labelKey: { type: null, required: false, default: "label" }, descriptionKey: { type: null, required: false, default: "description" }, preserveGroupOrder: { type: Boolean, required: false, default: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, multiple: { type: Boolean, required: false }, disabled: { type: Boolean, required: false }, modelValue: { type: null, required: false }, defaultValue: { type: null, required: false }, highlightOnHover: { type: Boolean, required: false, default: true }, selectionBehavior: { type: String, required: false }, by: { type: [String, Function], required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false } }, { searchTerm: { type: String, default: "" }, searchTermModifiers: {} }), emits: qe(["update:modelValue", "highlight", "entryFocus", "leave", "update:open"], ["update:searchTerm"]), setup(i, { emit: e }) {
  const t = i, s = e, n = je(), a = ht(i, "searchTerm", { type: String, default: "" }), { t: o } = pt(), c = gt(), r = mt("commandPalette", t), h = Ut(De(t, "as", "disabled", "multiple", "modelValue", "defaultValue", "highlightOnHover", "by"), s), f = Yt(() => t.virtualize ? ze(typeof t.virtualize == "boolean" ? {} : t.virtualize, { estimateSize: Bs(y.value, "md", t.descriptionKey, !!n["item-description"]) }) : false), [m, p] = Qt({ props: { item: { type: Object, required: true }, group: { type: Object, required: false }, index: { type: Number, required: false } } }), d = $(() => {
    var _a;
    return Ce({ extend: Ce(_s), ...((_a = c.ui) == null ? void 0 : _a.commandPalette) || {} })({ size: t.size, virtualize: !!t.virtualize });
  }), g = $(() => ze({}, t.fuse, { fuseOptions: { ignoreLocation: true, threshold: 0.1, keys: [t.labelKey, "suffix"] }, resultLimit: 12, matchAllWhenSearchEmpty: true })), b = te([]), k = $(() => {
    var _a;
    return ((_a = b.value[b.value.length - 1]) == null ? void 0 : _a.placeholder) || t.placeholder || o("commandPalette.placeholder");
  }), T = $(() => {
    var _a;
    return ((_a = b.value) == null ? void 0 : _a.length) ? [b.value[b.value.length - 1]] : t.groups;
  }), M = $(() => {
    var _a, _b;
    return ((_b = (_a = T.value) == null ? void 0 : _a.filter((E) => E.id ? !E.ignoreFilter : (console.warn("[@nuxt/ui] CommandPalette group is missing an `id` property"), false))) == null ? void 0 : _b.flatMap((E) => {
      var _a2;
      return ((_a2 = E.items) == null ? void 0 : _a2.map((S) => ({ ...S, group: E.id }))) || [];
    })) || [];
  }), { results: P } = Es(a, M, g), K = Xt(P, 16, true);
  function F(E, S) {
    let u = S;
    return (E == null ? void 0 : E.postFilter) && typeof E.postFilter == "function" && (u = E.postFilter(a.value, u)), { ...E, items: u.slice(0, g.value.resultLimit).map((R) => ({ ...R, labelHtml: lt(R, a.value, t.labelKey), suffixHtml: lt(R, a.value, void 0, [t.labelKey]) })) };
  }
  const J = $(() => {
    var _a, _b, _c, _d, _e2;
    const E = T.value, S = K.value.reduce((x, _) => {
      var _a2, _b2;
      const { item: U, matches: j } = _;
      return U.group && (x[_a2 = U.group] || (x[_a2] = []), (_b2 = x[U.group]) == null ? void 0 : _b2.push({ ...U, matches: j })), x;
    }, {});
    if (t.preserveGroupOrder) {
      const x = [];
      for (const _ of E || []) {
        if (!((_a = _.items) == null ? void 0 : _a.length)) continue;
        const U = _.ignoreFilter ? _.items : S[_.id];
        if (!(U == null ? void 0 : U.length)) continue;
        const j = F(_, U);
        ((_b = j.items) == null ? void 0 : _b.length) && x.push(j);
      }
      return x;
    }
    const u = Object.entries(S).map(([x, _]) => {
      var _a2;
      const U = E == null ? void 0 : E.find((ce) => ce.id === x);
      if (!U) return;
      const j = F(U, _);
      return ((_a2 = j.items) == null ? void 0 : _a2.length) ? j : void 0;
    }).filter((x) => !!x);
    return (((_e2 = (_d = (_c = E == null ? void 0 : E.map((x, _) => ({ ...x, index: _ }))) == null ? void 0 : _c.filter((x) => {
      var _a2;
      return x.ignoreFilter && ((_a2 = x.items) == null ? void 0 : _a2.length);
    })) == null ? void 0 : _d.map((x) => ({ ...F(x, x.items || []), index: x.index }))) == null ? void 0 : _e2.filter((x) => {
      var _a2;
      return (_a2 = x.items) == null ? void 0 : _a2.length;
    })) || []).reduce((x, _) => (x.splice(_.index, 0, _), x), [...u]);
  }), y = $(() => J.value.flatMap((E) => E.items || [])), B = vt("rootRef");
  function w(E) {
    var _a, _b;
    ((_a = E.children) == null ? void 0 : _a.length) && (b.value.push({ id: `history-${b.value.length}`, label: E.label, slot: E.slot, placeholder: E.placeholder, items: E.children }), a.value = "", (_b = B.value) == null ? void 0 : _b.highlightFirstItem());
  }
  function G() {
    var _a;
    b.value.length && (b.value.pop(), a.value = "", (_a = B.value) == null ? void 0 : _a.highlightFirstItem());
  }
  function Z() {
    a.value || G();
  }
  function W(E, S) {
    var _a, _b;
    ((_a = S.children) == null ? void 0 : _a.length) ? (E.preventDefault(), w(S)) : (_b = S.onSelect) == null ? void 0 : _b.call(S, E);
  }
  return (E, S) => {
    var _a;
    return C(), H(he, null, [Q(l(m), null, { default: z(({ item: u, index: R, group: x }) => [Q(Jt, N(l(Zt)(u), { custom: "" }), { default: z(({ active: _, ...U }) => [Q(l(Di), { value: t.valueKey ? l(ee)(u, t.valueKey) : l(we)(u, ["matches", "group", "onSelect", "labelHtml", "suffixHtml", "children"]), disabled: u.disabled, "as-child": "", onSelect: (j) => W(j, u) }, { default: z(() => {
      var _a2, _b;
      return [Q(ei, N(U, { "data-slot": "item", class: d.value.item({ class: [(_a2 = l(r)) == null ? void 0 : _a2.item, (_b = u.ui) == null ? void 0 : _b.item, u.class], active: _ || u.active }) }), { default: z(() => [V(E.$slots, u.slot || (x == null ? void 0 : x.slot) || "item", { item: u, index: R, ui: d.value }, () => {
        var _a3, _b2, _c, _d, _e2, _f, _g, _h, _i2;
        return [V(E.$slots, u.slot ? `${u.slot}-leading` : (x == null ? void 0 : x.slot) ? `${x.slot}-leading` : "item-leading", { item: u, index: R, ui: d.value }, () => {
          var _a4, _b3, _c2, _d2, _e3, _f2, _g2, _h2, _i3, _j, _k, _l;
          return [u.loading ? (C(), D(ye, { key: 0, name: i.loadingIcon || l(c).ui.icons.loading, "data-slot": "itemLeadingIcon", class: q(d.value.itemLeadingIcon({ class: [(_a4 = l(r)) == null ? void 0 : _a4.itemLeadingIcon, (_b3 = u.ui) == null ? void 0 : _b3.itemLeadingIcon], loading: true })) }, null, 8, ["name", "class"])) : u.icon ? (C(), D(ye, { key: 1, name: u.icon, "data-slot": "itemLeadingIcon", class: q(d.value.itemLeadingIcon({ class: [(_c2 = l(r)) == null ? void 0 : _c2.itemLeadingIcon, (_d2 = u.ui) == null ? void 0 : _d2.itemLeadingIcon], active: _ || u.active })) }, null, 8, ["name", "class"])) : u.avatar ? (C(), D(ti, N({ key: 2, size: ((_e3 = u.ui) == null ? void 0 : _e3.itemLeadingAvatarSize) || ((_f2 = l(r)) == null ? void 0 : _f2.itemLeadingAvatarSize) || d.value.itemLeadingAvatarSize() }, u.avatar, { "data-slot": "itemLeadingAvatar", class: d.value.itemLeadingAvatar({ class: [(_g2 = l(r)) == null ? void 0 : _g2.itemLeadingAvatar, (_h2 = u.ui) == null ? void 0 : _h2.itemLeadingAvatar], active: _ || u.active }) }), null, 16, ["size", "class"])) : u.chip ? (C(), D(ii, N({ key: 3, size: ((_i3 = u.ui) == null ? void 0 : _i3.itemLeadingChipSize) || ((_j = l(r)) == null ? void 0 : _j.itemLeadingChipSize) || d.value.itemLeadingChipSize(), inset: "", standalone: "" }, u.chip, { "data-slot": "itemLeadingChip", class: d.value.itemLeadingChip({ class: [(_k = l(r)) == null ? void 0 : _k.itemLeadingChip, (_l = u.ui) == null ? void 0 : _l.itemLeadingChip], active: _ || u.active }) }), null, 16, ["size", "class"])) : Y("", true)];
        }), u.prefix || u.labelHtml || l(ee)(u, t.labelKey) || u.suffixHtml || u.suffix || n[u.slot ? `${u.slot}-label` : (x == null ? void 0 : x.slot) ? `${x.slot}-label` : "item-label"] || l(ee)(u, t.descriptionKey) || n[u.slot ? `${u.slot}-description` : (x == null ? void 0 : x.slot) ? `${x.slot}-description` : "item-description"] ? (C(), H("span", { key: 0, "data-slot": "itemWrapper", class: q(d.value.itemWrapper({ class: [(_a3 = l(r)) == null ? void 0 : _a3.itemWrapper, (_b2 = u.ui) == null ? void 0 : _b2.itemWrapper] })) }, [Ye("span", { "data-slot": "itemLabel", class: q(d.value.itemLabel({ class: [(_c = l(r)) == null ? void 0 : _c.itemLabel, (_d = u.ui) == null ? void 0 : _d.itemLabel], active: _ || u.active })) }, [V(E.$slots, u.slot ? `${u.slot}-label` : (x == null ? void 0 : x.slot) ? `${x.slot}-label` : "item-label", { item: u, index: R, ui: d.value }, () => {
          var _a4, _b3, _c2, _d2, _e3, _f2, _g2, _h2, _i3, _j;
          return [u.prefix ? (C(), H("span", { key: 0, "data-slot": "itemLabelPrefix", class: q(d.value.itemLabelPrefix({ class: [(_a4 = l(r)) == null ? void 0 : _a4.itemLabelPrefix, (_b3 = u.ui) == null ? void 0 : _b3.itemLabelPrefix] })) }, fe(u.prefix), 3)) : Y("", true), u.labelHtml ? (C(), H("span", { key: 1, "data-slot": "itemLabelBase", class: q(d.value.itemLabelBase({ class: [(_c2 = l(r)) == null ? void 0 : _c2.itemLabelBase, (_d2 = u.ui) == null ? void 0 : _d2.itemLabelBase], active: _ || u.active })), innerHTML: u.labelHtml }, null, 10, Ts)) : (C(), H("span", { key: 2, "data-slot": "itemLabelBase", class: q(d.value.itemLabelBase({ class: [(_e3 = l(r)) == null ? void 0 : _e3.itemLabelBase, (_f2 = u.ui) == null ? void 0 : _f2.itemLabelBase], active: _ || u.active })) }, fe(l(ee)(u, t.labelKey)), 3)), u.suffixHtml ? (C(), H("span", { key: 3, "data-slot": "itemLabelSuffix", class: q(d.value.itemLabelSuffix({ class: [(_g2 = l(r)) == null ? void 0 : _g2.itemLabelSuffix, (_h2 = u.ui) == null ? void 0 : _h2.itemLabelSuffix], active: _ || u.active })), innerHTML: u.suffixHtml }, null, 10, Ms)) : u.suffix ? (C(), H("span", { key: 4, "data-slot": "itemLabelSuffix", class: q(d.value.itemLabelSuffix({ class: [(_i3 = l(r)) == null ? void 0 : _i3.itemLabelSuffix, (_j = u.ui) == null ? void 0 : _j.itemLabelSuffix], active: _ || u.active })) }, fe(u.suffix), 3)) : Y("", true)];
        })], 2), l(ee)(u, t.descriptionKey) || n[u.slot ? `${u.slot}-description` : (x == null ? void 0 : x.slot) ? `${x.slot}-description` : "item-description"] ? (C(), H("span", { key: 0, "data-slot": "itemDescription", class: q(d.value.itemDescription({ class: [(_e2 = l(r)) == null ? void 0 : _e2.itemDescription, (_f = u.ui) == null ? void 0 : _f.itemDescription] })) }, [V(E.$slots, u.slot ? `${u.slot}-description` : (x == null ? void 0 : x.slot) ? `${x.slot}-description` : "item-description", { item: u, index: R, ui: d.value }, () => [Be(fe(l(ee)(u, t.descriptionKey)), 1)])], 2)) : Y("", true)], 2)) : Y("", true), Ye("span", { "data-slot": "itemTrailing", class: q(d.value.itemTrailing({ class: [(_g = l(r)) == null ? void 0 : _g.itemTrailing, (_h = u.ui) == null ? void 0 : _h.itemTrailing] })) }, [V(E.$slots, u.slot ? `${u.slot}-trailing` : (x == null ? void 0 : x.slot) ? `${x.slot}-trailing` : "item-trailing", { item: u, index: R, ui: d.value }, () => {
          var _a4, _b3, _c2, _d2, _e3, _f2, _g2;
          return [u.children && u.children.length > 0 ? (C(), D(ye, { key: 0, name: i.childrenIcon || l(c).ui.icons.chevronRight, "data-slot": "itemTrailingIcon", class: q(d.value.itemTrailingIcon({ class: [(_a4 = l(r)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = u.ui) == null ? void 0 : _b3.itemTrailingIcon] })) }, null, 8, ["name", "class"])) : ((_c2 = u.kbds) == null ? void 0 : _c2.length) ? (C(), H("span", { key: 1, "data-slot": "itemTrailingKbds", class: q(d.value.itemTrailingKbds({ class: [(_d2 = l(r)) == null ? void 0 : _d2.itemTrailingKbds, (_e3 = u.ui) == null ? void 0 : _e3.itemTrailingKbds] })) }, [(C(true), H(he, null, be(u.kbds, (j, ce) => {
            var _a5, _b4;
            return C(), D(si, N({ key: ce, size: ((_a5 = u.ui) == null ? void 0 : _a5.itemTrailingKbdsSize) || ((_b4 = l(r)) == null ? void 0 : _b4.itemTrailingKbdsSize) || d.value.itemTrailingKbdsSize() }, { ref_for: true }, typeof j == "string" ? { value: j } : j), null, 16, ["size"]);
          }), 128))], 2)) : (x == null ? void 0 : x.highlightedIcon) ? (C(), D(ye, { key: 2, name: x.highlightedIcon, "data-slot": "itemTrailingHighlightedIcon", class: q(d.value.itemTrailingHighlightedIcon({ class: [(_f2 = l(r)) == null ? void 0 : _f2.itemTrailingHighlightedIcon, (_g2 = u.ui) == null ? void 0 : _g2.itemTrailingHighlightedIcon] })) }, null, 8, ["name", "class"])) : Y("", true)];
        }), ((_i2 = u.children) == null ? void 0 : _i2.length) ? Y("", true) : (C(), D(l(wi), { key: 0, "as-child": "" }, { default: z(() => {
          var _a4, _b3;
          return [Q(ye, { name: i.selectedIcon || l(c).ui.icons.check, "data-slot": "itemTrailingIcon", class: q(d.value.itemTrailingIcon({ class: [(_a4 = l(r)) == null ? void 0 : _a4.itemTrailingIcon, (_b3 = u.ui) == null ? void 0 : _b3.itemTrailingIcon] })) }, null, 8, ["name", "class"])];
        }), _: 2 }, 1024))], 2)];
      })]), _: 2 }, 1040, ["class"])];
    }), _: 2 }, 1032, ["value", "disabled", "onSelect"])]), _: 2 }, 1040)]), _: 3 }), Q(l(yi), N({ ...l(h), ...E.$attrs }, { ref_key: "rootRef", ref: B, "selection-behavior": i.selectionBehavior, "data-slot": "root", class: d.value.root({ class: [(_a = l(r)) == null ? void 0 : _a.root, t.class] }) }), { default: z(() => {
      var _a2, _b;
      return [i.input ? (C(), D(l(Ci), { key: 0, modelValue: a.value, "onUpdate:modelValue": S[1] || (S[1] = (u) => a.value = u), "as-child": "" }, { default: z(() => {
        var _a3, _b2;
        return [Q(fi, N({ variant: "none", size: i.size }, typeof t.input == "object" ? t.input : {}, { placeholder: k.value, autofocus: i.autofocus, loading: i.loading, "loading-icon": i.loadingIcon, "trailing-icon": i.trailingIcon, icon: i.icon || l(c).ui.icons.search, "data-slot": "input", class: d.value.input({ class: (_a3 = l(r)) == null ? void 0 : _a3.input }), onKeydown: pe(Z, ["backspace"]) }), yt({ _: 2 }, [((_b2 = b.value) == null ? void 0 : _b2.length) && (i.back || n.back) ? { name: "leading", fn: z(() => [V(E.$slots, "back", { ui: d.value }, () => {
          var _a4;
          return [Q(Qe, N({ size: i.size, icon: i.backIcon || l(c).ui.icons.arrowLeft, color: "neutral", variant: "link", "aria-label": l(o)("commandPalette.back") }, typeof i.back == "object" ? i.back : {}, { "data-slot": "back", class: d.value.back({ class: (_a4 = l(r)) == null ? void 0 : _a4.back }), onClick: G }), null, 16, ["size", "icon", "aria-label", "class"])];
        })]), key: "0" } : void 0, i.close || n.close ? { name: "trailing", fn: z(() => [V(E.$slots, "close", { ui: d.value }, () => {
          var _a4;
          return [i.close ? (C(), D(Qe, N({ key: 0, size: i.size, icon: i.closeIcon || l(c).ui.icons.close, color: "neutral", variant: "ghost", "aria-label": l(o)("commandPalette.close") }, typeof i.close == "object" ? i.close : {}, { "data-slot": "close", class: d.value.close({ class: (_a4 = l(r)) == null ? void 0 : _a4.close }), onClick: S[0] || (S[0] = (u) => s("update:open", false)) }), null, 16, ["size", "icon", "aria-label", "class"])) : Y("", true)];
        })]), key: "1" } : void 0]), 1040, ["size", "placeholder", "autofocus", "loading", "loading-icon", "trailing-icon", "icon", "class"])];
      }), _: 3 }, 8, ["modelValue"])) : Y("", true), Q(l(xi), { "data-slot": "content", class: q(d.value.content({ class: (_a2 = l(r)) == null ? void 0 : _a2.content })) }, { default: z(() => {
        var _a3, _b2, _c;
        return [((_a3 = J.value) == null ? void 0 : _a3.length) ? (C(), H("div", { key: 0, role: "presentation", "data-slot": "viewport", class: q(d.value.viewport({ class: (_b2 = l(r)) == null ? void 0 : _b2.viewport })) }, [i.virtualize ? (C(), D(l($i), N({ key: 0, options: y.value, "text-content": (u) => l(ee)(u, t.labelKey) }, f.value), { default: z(({ option: u, virtualItem: R }) => [Q(l(p), { item: u, index: R.index }, null, 8, ["item", "index"])]), _: 1 }, 16, ["options", "text-content"])) : (C(true), H(he, { key: 1 }, be(J.value, (u) => {
          var _a4;
          return C(), D(l(Si), { key: `group-${u.id}`, "data-slot": "group", class: q(d.value.group({ class: (_a4 = l(r)) == null ? void 0 : _a4.group })) }, { default: z(() => {
            var _a5;
            return [l(ee)(u, t.labelKey) ? (C(), D(l(ki), { key: 0, "data-slot": "label", class: q(d.value.label({ class: (_a5 = l(r)) == null ? void 0 : _a5.label })) }, { default: z(() => [Be(fe(l(ee)(u, t.labelKey)), 1)]), _: 2 }, 1032, ["class"])) : Y("", true), (C(true), H(he, null, be(u.items, (R, x) => (C(), D(l(p), { key: `group-${u.id}-${x}`, item: R, index: x, group: u }, null, 8, ["item", "index", "group"]))), 128))];
          }), _: 2 }, 1032, ["class"]);
        }), 128))], 2)) : (C(), H("div", { key: 1, "data-slot": "empty", class: q(d.value.empty({ class: (_c = l(r)) == null ? void 0 : _c.empty })) }, [V(E.$slots, "empty", { searchTerm: a.value }, () => [Be(fe(a.value ? l(o)("commandPalette.noMatch", { searchTerm: a.value }) : l(o)("commandPalette.noData")), 1)])], 2))];
      }), _: 3 }, 8, ["class"]), n.footer ? (C(), H("div", { key: 1, "data-slot": "footer", class: q(d.value.footer({ class: (_b = l(r)) == null ? void 0 : _b.footer })) }, [V(E.$slots, "footer", { ui: d.value })], 2)) : Y("", true)];
    }), _: 3 }, 16, ["selection-behavior", "class"])], 64);
  };
} }), zs = { slots: { modal: "", input: "" }, variants: { fullscreen: { false: { modal: "sm:max-w-3xl h-full sm:h-[28rem]" } }, size: { xs: {}, sm: {}, md: {}, lg: {}, xl: {} } }, defaultVariants: { size: "md" } }, Ps = { __name: "UContentSearch", props: qe({ size: { type: null, required: false }, icon: { type: null, required: false }, placeholder: { type: String, required: false }, autofocus: { type: Boolean, required: false }, loading: { type: Boolean, required: false }, loadingIcon: { type: null, required: false }, close: { type: [Boolean, Object], required: false, default: true }, closeIcon: { type: null, required: false }, shortcut: { type: String, required: false, default: "meta_k" }, links: { type: Array, required: false }, navigation: { type: Array, required: false }, groups: { type: Array, required: false }, files: { type: Array, required: false }, fuse: { type: Object, required: false }, colorMode: { type: Boolean, required: false, default: true }, class: { type: null, required: false }, ui: { type: Object, required: false }, title: { type: String, required: false }, description: { type: String, required: false }, overlay: { type: Boolean, required: false }, transition: { type: Boolean, required: false }, content: { type: Object, required: false }, dismissible: { type: Boolean, required: false }, fullscreen: { type: Boolean, required: false, default: false }, modal: { type: Boolean, required: false }, portal: { type: [Boolean, String], required: false, skipCheck: true } }, { searchTerm: { type: String, default: "" }, searchTermModifiers: {} }), emits: ["update:searchTerm"], setup(i, { expose: e }) {
  const t = i, s = je(), n = ht(i, "searchTerm", { type: String, default: "" }), { t: a } = pt(), { open: o, mapNavigationItems: c, postFilter: r } = ai(), h = ni(), f = gt(), m = mt("contentSearch", t), p = Xe(De(t, "size", "icon", "placeholder", "autofocus", "loading", "loadingIcon", "close", "closeIcon")), d = Xe(De(t, "overlay", "transition", "content", "dismissible", "fullscreen", "modal", "portal")), g = () => we(s, ["content"]), b = $(() => ze({}, t.fuse, { fuseOptions: { includeMatches: true } })), k = $(() => {
    var _a;
    return Ce({ extend: Ce(zs), ...((_a = f.ui) == null ? void 0 : _a.contentSearch) || {} })({ size: t.size, fullscreen: t.fullscreen });
  }), T = vt("commandPaletteRef"), M = $(() => {
    var _a;
    return ((_a = t.links) == null ? void 0 : _a.length) ? t.links.flatMap((y) => {
      var _a2;
      return [{ ...y, suffix: y.description, description: void 0, icon: y.icon || f.ui.icons.file, children: void 0 }, ...((_a2 = y.children) == null ? void 0 : _a2.map((B) => ({ ...B, prefix: y.label + " >", suffix: B.description, description: void 0, icon: B.icon || y.icon || f.ui.icons.file }))) || []];
    }) : [];
  }), P = $(() => {
    var _a;
    return ((_a = t.navigation) == null ? void 0 : _a.length) ? t.navigation.some((y) => {
      var _a2;
      return !!((_a2 = y.children) == null ? void 0 : _a2.length);
    }) ? t.navigation.map((y) => ({ id: y.path, label: y.title, items: c(y.children || [], t.files || []), postFilter: r })) : [{ id: "docs", items: c(t.navigation, t.files || []), postFilter: r }] : [];
  }), K = $(() => !t.colorMode || (h == null ? void 0 : h.forced) ? null : { id: "theme", label: a("contentSearch.theme"), items: [{ label: a("colorMode.system"), icon: f.ui.icons.system, active: h.preference === "system", onSelect: () => {
    h.preference = "system";
  } }, { label: a("colorMode.light"), icon: f.ui.icons.light, active: h.preference === "light", onSelect: () => {
    h.preference = "light";
  } }, { label: a("colorMode.dark"), icon: f.ui.icons.dark, active: h.preference === "dark", onSelect: () => {
    h.preference = "dark";
  } }] }), F = $(() => {
    const y = [];
    return M.value.length && y.push({ id: "links", label: a("contentSearch.links"), items: M.value }), y.push(...P.value), y.push(...t.groups || []), K.value && y.push(K.value), y;
  });
  function J(y) {
    y.disabled || (o.value = false, n.value = "");
  }
  return hi({ [t.shortcut]: { usingInput: true, handler: () => o.value = !o.value } }), e({ commandPaletteRef: T }), (y, B) => {
    var _a;
    return C(), D(oi, N({ open: l(o), "onUpdate:open": B[2] || (B[2] = (w) => ri(o) ? o.value = w : null), title: i.title || l(a)("contentSearch.title"), description: i.description || l(a)("contentSearch.description") }, l(d), { "data-slot": "modal", class: k.value.modal({ class: [(_a = l(m)) == null ? void 0 : _a.modal, t.class] }) }), { content: z((w) => [V(y.$slots, "content", Je(Ze(w)), () => [Q(Ds, N({ ref_key: "commandPaletteRef", ref: T, "search-term": n.value, "onUpdate:searchTerm": B[0] || (B[0] = (G) => n.value = G) }, l(p), { groups: F.value, fuse: b.value, input: { fixed: true }, ui: l(li)(l(we)(k.value, ["modal"]), l(m)), "onUpdate:modelValue": J, "onUpdate:open": B[1] || (B[1] = (G) => o.value = G) }), yt({ _: 2 }, [be(g(), (G, Z) => ({ name: Z, fn: z((W) => [V(y.$slots, Z, Je(Ze(W)))]) }))]), 1040, ["search-term", "groups", "fuse", "ui"])])]), _: 3 }, 16, ["open", "title", "description", "class"]);
  };
} };
export {
  Ps as default
};
