import { f as b, i as y, g as I, c as l, h as g, o as F, j as h, k as K, l as S, w as u, m as w, n, P as C, e as q, p as T, q as B, s as R, v as k } from "#entry";
var x = b({ __name: "RovingFocusItem", props: { tabStopId: { type: String, required: false }, focusable: { type: Boolean, required: false, default: true }, active: { type: Boolean, required: false }, allowShiftKey: { type: Boolean, required: false }, asChild: { type: Boolean, required: false }, as: { type: null, required: false, default: "span" } }, setup(d) {
  const r = d, a = y(), f = I(), i = l(() => r.tabStopId || f), c = l(() => a.currentTabStopId.value === i.value), { getItems: p, CollectionItem: v } = g();
  F(() => {
    r.focusable && a.onFocusableItemAdd();
  }), h(() => {
    r.focusable && a.onFocusableItemRemove();
  });
  function m(e) {
    if (e.key === "Tab" && e.shiftKey) {
      a.onItemShiftTab();
      return;
    }
    if (e.target !== e.currentTarget) return;
    const t = T(e, a.orientation.value, a.dir.value);
    if (t !== void 0) {
      if (e.metaKey || e.ctrlKey || e.altKey || !r.allowShiftKey && e.shiftKey) return;
      e.preventDefault();
      let o = [...p().map((s) => s.ref).filter((s) => s.dataset.disabled !== "")];
      if (t === "last") o.reverse();
      else if (t === "prev" || t === "next") {
        t === "prev" && o.reverse();
        const s = o.indexOf(e.currentTarget);
        o = a.loop.value ? B(o, s + 1) : o.slice(s + 1);
      }
      R(() => k(o));
    }
  }
  return (e, t) => (K(), S(n(v), null, { default: u(() => [w(n(C), { tabindex: c.value ? 0 : -1, "data-orientation": n(a).orientation.value, "data-active": e.active ? "" : void 0, "data-disabled": e.focusable ? void 0 : "", as: e.as, "as-child": e.asChild, onMousedown: t[0] || (t[0] = (o) => {
    e.focusable ? n(a).onItemFocus(i.value) : o.preventDefault();
  }), onFocus: t[1] || (t[1] = (o) => n(a).onItemFocus(i.value)), onKeydown: m }, { default: u(() => [q(e.$slots, "default")]), _: 3 }, 8, ["tabindex", "data-orientation", "data-active", "data-disabled", "as", "as-child"])]), _: 3 }));
} }), j = x;
export {
  j as R
};
