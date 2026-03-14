import { c as R, p as E, a3 as F, ah as O, aB as T, aC as C } from "#entry";
function b(o, r, e) {
  let s = e.initialDeps ?? [], t, n = true;
  function i() {
    var l, a, u;
    let c;
    e.key && ((l = e.debug) != null && l.call(e)) && (c = Date.now());
    const f = o();
    if (!(f.length !== s.length || f.some((v, d) => s[d] !== v))) return t;
    s = f;
    let g;
    if (e.key && ((a = e.debug) != null && a.call(e)) && (g = Date.now()), t = r(...f), e.key && ((u = e.debug) != null && u.call(e))) {
      const v = Math.round((Date.now() - c) * 100) / 100, d = Math.round((Date.now() - g) * 100) / 100, S = d / 16, x = (m, w) => {
        for (m = String(m); m.length < w; ) m = " " + m;
        return m;
      };
      console.info(`%c\u23F1 ${x(d, 5)} /${x(v, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * S, 120))}deg 100% 31%);`, e == null ? void 0 : e.key);
    }
    return (e == null ? void 0 : e.onChange) && !(n && e.skipInitialOnChange) && e.onChange(t), n = false, t;
  }
  return i.updateDeps = (l) => {
    s = l;
  }, i;
}
function I(o, r) {
  if (o === void 0) throw new Error("Unexpected undefined");
  return o;
}
const k = (o, r) => Math.abs(o - r) < 1.01, W = (o, r, e) => {
  let s;
  return function(...t) {
    o.clearTimeout(s), s = o.setTimeout(() => r.apply(this, t), e);
  };
}, z = (o) => {
  const { offsetWidth: r, offsetHeight: e } = o;
  return { width: r, height: e };
}, D = (o) => o, L = (o) => {
  const r = Math.max(o.startIndex - o.overscan, 0), e = Math.min(o.endIndex + o.overscan, o.count - 1), s = [];
  for (let t = r; t <= e; t++) s.push(t);
  return s;
}, j = (o, r) => {
  const e = o.scrollElement;
  if (!e) return;
  const s = o.targetWindow;
  if (!s) return;
  const t = (i) => {
    const { width: l, height: a } = i;
    r({ width: Math.round(l), height: Math.round(a) });
  };
  if (t(z(e)), !s.ResizeObserver) return () => {
  };
  const n = new s.ResizeObserver((i) => {
    const l = () => {
      const a = i[0];
      if (a == null ? void 0 : a.borderBoxSize) {
        const u = a.borderBoxSize[0];
        if (u) {
          t({ width: u.inlineSize, height: u.blockSize });
          return;
        }
      }
      t(z(e));
    };
    o.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
  });
  return n.observe(e, { box: "border-box" }), () => {
    n.unobserve(e);
  };
}, y = { passive: true }, A = typeof window > "u" ? true : "onscrollend" in window, B = (o, r) => {
  const e = o.scrollElement;
  if (!e) return;
  const s = o.targetWindow;
  if (!s) return;
  let t = 0;
  const n = o.options.useScrollendEvent && A ? () => {
  } : W(s, () => {
    r(t, false);
  }, o.options.isScrollingResetDelay), i = (c) => () => {
    const { horizontal: f, isRtl: h } = o.options;
    t = f ? e.scrollLeft * (h && -1 || 1) : e.scrollTop, n(), r(t, c);
  }, l = i(true), a = i(false);
  e.addEventListener("scroll", l, y);
  const u = o.options.useScrollendEvent && A;
  return u && e.addEventListener("scrollend", a, y), () => {
    e.removeEventListener("scroll", l), u && e.removeEventListener("scrollend", a);
  };
}, P = (o, r, e) => {
  if (r == null ? void 0 : r.borderBoxSize) {
    const s = r.borderBoxSize[0];
    if (s) return Math.round(s[e.options.horizontal ? "inlineSize" : "blockSize"]);
  }
  return o[e.options.horizontal ? "offsetWidth" : "offsetHeight"];
}, N = (o, { adjustments: r = 0, behavior: e }, s) => {
  var t, n;
  const i = o + r;
  (n = (t = s.scrollElement) == null ? void 0 : t.scrollTo) == null || n.call(t, { [s.options.horizontal ? "left" : "top"]: i, behavior: e });
};
class V {
  constructor(r) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = false, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = false, this.lanesSettling = false, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.now = () => {
      var e, s, t;
      return ((t = (s = (e = this.targetWindow) == null ? void 0 : e.performance) == null ? void 0 : s.now) == null ? void 0 : t.call(s)) ?? Date.now();
    }, this.observer = /* @__PURE__ */ (() => {
      let e = null;
      const s = () => e || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : e = new this.targetWindow.ResizeObserver((t) => {
        t.forEach((n) => {
          const i = () => {
            this._measureElement(n.target, n);
          };
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i();
        });
      }));
      return { disconnect: () => {
        var t;
        (t = s()) == null || t.disconnect(), e = null;
      }, observe: (t) => {
        var n;
        return (n = s()) == null ? void 0 : n.observe(t, { box: "border-box" });
      }, unobserve: (t) => {
        var n;
        return (n = s()) == null ? void 0 : n.unobserve(t);
      } };
    })(), this.range = null, this.setOptions = (e) => {
      Object.entries(e).forEach(([s, t]) => {
        typeof t > "u" && delete e[s];
      }), this.options = { debug: false, initialOffset: 0, overscan: 1, paddingStart: 0, paddingEnd: 0, scrollPaddingStart: 0, scrollPaddingEnd: 0, horizontal: false, getItemKey: D, rangeExtractor: L, onChange: () => {
      }, measureElement: P, initialRect: { width: 0, height: 0 }, scrollMargin: 0, gap: 0, indexAttribute: "data-index", initialMeasurementsCache: [], lanes: 1, isScrollingResetDelay: 150, enabled: true, isRtl: false, useScrollendEvent: false, useAnimationFrameWithResizeObserver: false, ...e };
    }, this.notify = (e) => {
      var s, t;
      (t = (s = this.options).onChange) == null || t.call(s, this, e);
    }, this.maybeNotify = b(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), (e) => {
      this.notify(e);
    }, { key: false, debug: () => this.options.debug, initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null] }), this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((e) => e()), this.unsubs = [], this.observer.disconnect(), this.rafId != null && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var e;
      const s = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== s) {
        if (this.cleanup(), !s) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = s, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = ((e = this.scrollElement) == null ? void 0 : e.window) ?? null, this.elementsCache.forEach((t) => {
          this.observer.observe(t);
        }), this.unsubs.push(this.options.observeElementRect(this, (t) => {
          this.scrollRect = t, this.maybeNotify();
        })), this.unsubs.push(this.options.observeElementOffset(this, (t, n) => {
          this.scrollAdjustments = 0, this.scrollDirection = n ? this.getScrollOffset() < t ? "forward" : "backward" : null, this.scrollOffset = t, this.isScrolling = n, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify();
        })), this._scrollToOffset(this.getScrollOffset(), { adjustments: void 0, behavior: void 0 });
      }
    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, s) => {
      const t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
      for (let i = s - 1; i >= 0; i--) {
        const l = e[i];
        if (t.has(l.lane)) continue;
        const a = n.get(l.lane);
        if (a == null || l.end > a.end ? n.set(l.lane, l) : l.end < a.end && t.set(l.lane, true), t.size === this.options.lanes) break;
      }
      return n.size === this.options.lanes ? Array.from(n.values()).sort((i, l) => i.end === l.end ? i.index - l.index : i.end - l.end)[0] : void 0;
    }, this.getMeasurementOptions = b(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled, this.options.lanes], (e, s, t, n, i, l) => (this.prevLanes !== void 0 && this.prevLanes !== l && (this.lanesChangedFlag = true), this.prevLanes = l, this.pendingMeasuredCacheIndexes = [], { count: e, paddingStart: s, scrollMargin: t, getItemKey: n, enabled: i, lanes: l }), { key: false }), this.getMeasurements = b(() => [this.getMeasurementOptions(), this.itemSizeCache], ({ count: e, paddingStart: s, scrollMargin: t, getItemKey: n, enabled: i, lanes: l }, a) => {
      if (!i) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
      if (this.laneAssignments.size > e) for (const h of this.laneAssignments.keys()) h >= e && this.laneAssignments.delete(h);
      this.lanesChangedFlag && (this.lanesChangedFlag = false, this.lanesSettling = true, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), this.measurementsCache.length === 0 && !this.lanesSettling && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach((h) => {
        this.itemSizeCache.set(h.key, h.size);
      }));
      const u = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
      this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = false);
      const c = this.measurementsCache.slice(0, u), f = new Array(l).fill(void 0);
      for (let h = 0; h < u; h++) {
        const g = c[h];
        g && (f[g.lane] = h);
      }
      for (let h = u; h < e; h++) {
        const g = n(h), v = this.laneAssignments.get(h);
        let d, S;
        if (v !== void 0 && this.options.lanes > 1) {
          d = v;
          const p = f[d], M = p !== void 0 ? c[p] : void 0;
          S = M ? M.end + this.options.gap : s + t;
        } else {
          const p = this.options.lanes === 1 ? c[h - 1] : this.getFurthestMeasurement(c, h);
          S = p ? p.end + this.options.gap : s + t, d = p ? p.lane : h % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(h, d);
        }
        const x = a.get(g), m = typeof x == "number" ? x : this.options.estimateSize(h), w = S + m;
        c[h] = { index: h, start: S, size: m, end: w, key: g, lane: d }, f[d] = h;
      }
      return this.measurementsCache = c, c;
    }, { key: false, debug: () => this.options.debug }), this.calculateRange = b(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (e, s, t, n) => this.range = e.length > 0 && s > 0 ? H({ measurements: e, outerSize: s, scrollOffset: t, lanes: n }) : null, { key: false, debug: () => this.options.debug }), this.getVirtualIndexes = b(() => {
      let e = null, s = null;
      const t = this.calculateRange();
      return t && (e = t.startIndex, s = t.endIndex), this.maybeNotify.updateDeps([this.isScrolling, e, s]), [this.options.rangeExtractor, this.options.overscan, this.options.count, e, s];
    }, (e, s, t, n, i) => n === null || i === null ? [] : e({ startIndex: n, endIndex: i, overscan: s, count: t }), { key: false, debug: () => this.options.debug }), this.indexFromElement = (e) => {
      const s = this.options.indexAttribute, t = e.getAttribute(s);
      return t ? parseInt(t, 10) : (console.warn(`Missing attribute name '${s}={index}' on measured element.`), -1);
    }, this.shouldMeasureDuringScroll = (e) => {
      var s;
      if (!this.scrollState || this.scrollState.behavior !== "smooth") return true;
      const t = this.scrollState.index ?? ((s = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? void 0 : s.index);
      if (t !== void 0 && this.range) {
        const n = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)), i = Math.max(0, t - n), l = Math.min(this.options.count - 1, t + n);
        return e >= i && e <= l;
      }
      return true;
    }, this._measureElement = (e, s) => {
      if (!e.isConnected) {
        this.observer.unobserve(e);
        return;
      }
      const t = this.indexFromElement(e), n = this.measurementsCache[t];
      if (!n) return;
      const i = n.key, l = this.elementsCache.get(i);
      l !== e && (l && this.observer.unobserve(l), this.observer.observe(e), this.elementsCache.set(i, e)), this.shouldMeasureDuringScroll(t) && this.resizeItem(t, this.options.measureElement(e, s, this));
    }, this.resizeItem = (e, s) => {
      var t;
      const n = this.measurementsCache[e];
      if (!n) return;
      const i = this.itemSizeCache.get(n.key) ?? n.size, l = s - i;
      l !== 0 && (((t = this.scrollState) == null ? void 0 : t.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(n, l, this) : n.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), { adjustments: this.scrollAdjustments += l, behavior: void 0 }), this.pendingMeasuredCacheIndexes.push(n.index), this.itemSizeCache = new Map(this.itemSizeCache.set(n.key, s)), this.notify(false));
    }, this.measureElement = (e) => {
      if (!e) {
        this.elementsCache.forEach((s, t) => {
          s.isConnected || (this.observer.unobserve(s), this.elementsCache.delete(t));
        });
        return;
      }
      this._measureElement(e, void 0);
    }, this.getVirtualItems = b(() => [this.getVirtualIndexes(), this.getMeasurements()], (e, s) => {
      const t = [];
      for (let n = 0, i = e.length; n < i; n++) {
        const l = e[n], a = s[l];
        t.push(a);
      }
      return t;
    }, { key: false, debug: () => this.options.debug }), this.getVirtualItemForOffset = (e) => {
      const s = this.getMeasurements();
      if (s.length !== 0) return I(s[_(0, s.length - 1, (t) => I(s[t]).start, e)]);
    }, this.getMaxScrollOffset = () => {
      if (!this.scrollElement) return 0;
      if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      {
        const e = this.scrollElement.document.documentElement;
        return this.options.horizontal ? e.scrollWidth - this.scrollElement.innerWidth : e.scrollHeight - this.scrollElement.innerHeight;
      }
    }, this.getOffsetForAlignment = (e, s, t = 0) => {
      if (!this.scrollElement) return 0;
      const n = this.getSize(), i = this.getScrollOffset();
      s === "auto" && (s = e >= i + n ? "end" : "start"), s === "center" ? e += (t - n) / 2 : s === "end" && (e -= n);
      const l = this.getMaxScrollOffset();
      return Math.max(Math.min(l, e), 0);
    }, this.getOffsetForIndex = (e, s = "auto") => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const t = this.getSize(), n = this.getScrollOffset(), i = this.measurementsCache[e];
      if (!i) return;
      if (s === "auto") if (i.end >= n + t - this.options.scrollPaddingEnd) s = "end";
      else if (i.start <= n + this.options.scrollPaddingStart) s = "start";
      else return [n, s];
      if (s === "end" && e === this.options.count - 1) return [this.getMaxScrollOffset(), s];
      const l = s === "end" ? i.end + this.options.scrollPaddingEnd : i.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(l, s, i.size), s];
    }, this.scrollToOffset = (e, { align: s = "start", behavior: t = "auto" } = {}) => {
      const n = this.getOffsetForAlignment(e, s), i = this.now();
      this.scrollState = { index: null, align: s, behavior: t, startedAt: i, lastTargetOffset: n, stableFrames: 0 }, this._scrollToOffset(n, { adjustments: void 0, behavior: t }), this.scheduleScrollReconcile();
    }, this.scrollToIndex = (e, { align: s = "auto", behavior: t = "auto" } = {}) => {
      e = Math.max(0, Math.min(e, this.options.count - 1));
      const n = this.getOffsetForIndex(e, s);
      if (!n) return;
      const [i, l] = n, a = this.now();
      this.scrollState = { index: e, align: l, behavior: t, startedAt: a, lastTargetOffset: i, stableFrames: 0 }, this._scrollToOffset(i, { adjustments: void 0, behavior: t }), this.scheduleScrollReconcile();
    }, this.scrollBy = (e, { behavior: s = "auto" } = {}) => {
      const t = this.getScrollOffset() + e, n = this.now();
      this.scrollState = { index: null, align: "start", behavior: s, startedAt: n, lastTargetOffset: t, stableFrames: 0 }, this._scrollToOffset(t, { adjustments: void 0, behavior: s }), this.scheduleScrollReconcile();
    }, this.getTotalSize = () => {
      var e;
      const s = this.getMeasurements();
      let t;
      if (s.length === 0) t = this.options.paddingStart;
      else if (this.options.lanes === 1) t = ((e = s[s.length - 1]) == null ? void 0 : e.end) ?? 0;
      else {
        const n = Array(this.options.lanes).fill(null);
        let i = s.length - 1;
        for (; i >= 0 && n.some((l) => l === null); ) {
          const l = s[i];
          n[l.lane] === null && (n[l.lane] = l.end), i--;
        }
        t = Math.max(...n.filter((l) => l !== null));
      }
      return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0);
    }, this._scrollToOffset = (e, { adjustments: s, behavior: t }) => {
      this.options.scrollToFn(e, { behavior: t, adjustments: s }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.laneAssignments = /* @__PURE__ */ new Map(), this.notify(false);
    }, this.setOptions(r);
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    this.rafId == null && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null, this.reconcileScroll();
    }));
  }
  reconcileScroll() {
    if (!this.scrollState || !this.scrollElement) return;
    if (this.now() - this.scrollState.startedAt > 5e3) {
      this.scrollState = null;
      return;
    }
    const s = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0, t = s ? s[0] : this.scrollState.lastTargetOffset, n = 1, i = t !== this.scrollState.lastTargetOffset;
    if (!i && k(t, this.getScrollOffset())) {
      if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= n) {
        this.scrollState = null;
        return;
      }
    } else this.scrollState.stableFrames = 0, i && (this.scrollState.lastTargetOffset = t, this.scrollState.behavior = "auto", this._scrollToOffset(t, { adjustments: void 0, behavior: "auto" }));
    this.scheduleScrollReconcile();
  }
}
const _ = (o, r, e, s) => {
  for (; o <= r; ) {
    const t = (o + r) / 2 | 0, n = e(t);
    if (n < s) o = t + 1;
    else if (n > s) r = t - 1;
    else return t;
  }
  return o > 0 ? o - 1 : 0;
};
function H({ measurements: o, outerSize: r, scrollOffset: e, lanes: s }) {
  const t = o.length - 1, n = (a) => o[a].start;
  if (o.length <= s) return { startIndex: 0, endIndex: t };
  let i = _(0, t, n, e), l = i;
  if (s === 1) for (; l < t && o[l].end < e + r; ) l++;
  else if (s > 1) {
    const a = Array(s).fill(0);
    for (; l < t && a.some((c) => c < e + r); ) {
      const c = o[l];
      a[c.lane] = c.end, l++;
    }
    const u = Array(s).fill(e + r);
    for (; i >= 0 && u.some((c) => c >= e); ) {
      const c = o[i];
      u[c.lane] = c.start, i--;
    }
    i = Math.max(0, i - i % s), l = Math.min(t, l + (s - 1 - l % s));
  }
  return { startIndex: i, endIndex: l };
}
function U(o) {
  const r = new V(E(o)), e = F(r), s = r._didMount();
  return O(() => E(o).getScrollElement(), (t) => {
    t && r._willUpdate();
  }, { immediate: true }), O(() => E(o), (t) => {
    r.setOptions({ ...t, onChange: (n, i) => {
      var l;
      C(e), (l = t.onChange) == null || l.call(t, n, i);
    } }), r._willUpdate(), C(e);
  }, { immediate: true }), T(s), e;
}
function q(o) {
  return U(R(() => ({ observeElementRect: j, observeElementOffset: B, scrollToFn: N, ...E(o) })));
}
export {
  q as u
};
