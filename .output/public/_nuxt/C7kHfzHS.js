import { Z as gt, a3 as dt, ah as Ye, r as ct, bF as ft, f as Ze, bG as pt, p as R, F as mt, ae as St, C as vt, H as Ct, bK as wt, c as ee, bL as Rt, L as Be, ak as be, ad as E, M as je, bM as ht, aQ as _t, bn as Ft, aj as yt, l as V, y as M, n as Z, w as we, A as H, aw as X, O as z, $ as B, a0 as Y, e as b, N as ae, B as re, z as Te, ab as Ne, m as ie, P as $t, af as xt, a6 as Pt } from "#entry";
import { u as Vt } from "./CTu2NUrI.js";
import { u as Mt } from "./BPQ0oOrf.js";
function U(e, o) {
  return typeof e == "function" ? e(o) : e;
}
function G(e, o) {
  return (t) => {
    o.setState((n) => ({ ...n, [e]: U(t, n[e]) }));
  };
}
function pe(e) {
  return e instanceof Function;
}
function It(e) {
  return Array.isArray(e) && e.every((o) => typeof o == "number");
}
function zt(e, o) {
  const t = [], n = (r) => {
    r.forEach((i) => {
      t.push(i);
      const l = o(i);
      l != null && l.length && n(l);
    });
  };
  return n(e), t;
}
function v(e, o, t) {
  let n = [], r;
  return (i) => {
    let l;
    t.key && t.debug && (l = Date.now());
    const u = e(i);
    if (!(u.length !== n.length || u.some((c, p) => n[p] !== c))) return r;
    n = u;
    let g;
    if (t.key && t.debug && (g = Date.now()), r = o(...u), t == null || t.onChange == null || t.onChange(r), t.key && t.debug && t != null && t.debug()) {
      const c = Math.round((Date.now() - l) * 100) / 100, p = Math.round((Date.now() - g) * 100) / 100, d = p / 16, s = (f, m) => {
        for (f = String(f); f.length < m; ) f = " " + f;
        return f;
      };
      console.info(`%c\u23F1 ${s(p, 5)} /${s(c, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * d, 120))}deg 100% 31%);`, t == null ? void 0 : t.key);
    }
    return r;
  };
}
function C(e, o, t, n) {
  return { debug: () => {
    var r;
    return (r = e == null ? void 0 : e.debugAll) != null ? r : e[o];
  }, key: false, onChange: n };
}
function Ot(e, o, t, n) {
  const r = () => {
    var l;
    return (l = i.getValue()) != null ? l : e.options.renderFallbackValue;
  }, i = { id: `${o.id}_${t.id}`, row: o, column: t, getValue: () => o.getValue(n), renderValue: r, getContext: v(() => [e, t, o, i], (l, u, a, g) => ({ table: l, column: u, row: a, cell: g, getValue: g.getValue, renderValue: g.renderValue }), C(e.options, "debugCells")) };
  return e._features.forEach((l) => {
    l.createCell == null || l.createCell(i, t, o, e);
  }, {}), i;
}
function Dt(e, o, t, n) {
  var r, i;
  const u = { ...e._getDefaultColumnDef(), ...o }, a = u.accessorKey;
  let g = (r = (i = u.id) != null ? i : a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) != null ? r : typeof u.header == "string" ? u.header : void 0, c;
  if (u.accessorFn ? c = u.accessorFn : a && (a.includes(".") ? c = (d) => {
    let s = d;
    for (const m of a.split(".")) {
      var f;
      s = (f = s) == null ? void 0 : f[m];
    }
    return s;
  } : c = (d) => d[u.accessorKey]), !g) throw new Error();
  let p = { id: `${String(g)}`, accessorFn: c, parent: n, depth: t, columnDef: u, columns: [], getFlatColumns: v(() => [true], () => {
    var d;
    return [p, ...(d = p.columns) == null ? void 0 : d.flatMap((s) => s.getFlatColumns())];
  }, C(e.options, "debugColumns")), getLeafColumns: v(() => [e._getOrderColumnsFn()], (d) => {
    var s;
    if ((s = p.columns) != null && s.length) {
      let f = p.columns.flatMap((m) => m.getLeafColumns());
      return d(f);
    }
    return [p];
  }, C(e.options, "debugColumns")) };
  for (const d of e._features) d.createColumn == null || d.createColumn(p, e);
  return p;
}
const O = "debugHeaders";
function Ue(e, o, t) {
  var n;
  let i = { id: (n = t.id) != null ? n : o.id, column: o, index: t.index, isPlaceholder: !!t.isPlaceholder, placeholderId: t.placeholderId, depth: t.depth, subHeaders: [], colSpan: 0, rowSpan: 0, headerGroup: null, getLeafHeaders: () => {
    const l = [], u = (a) => {
      a.subHeaders && a.subHeaders.length && a.subHeaders.map(u), l.push(a);
    };
    return u(i), l;
  }, getContext: () => ({ table: e, header: i, column: o }) };
  return e._features.forEach((l) => {
    l.createHeader == null || l.createHeader(i, e);
  }), i;
}
const At = { createTable: (e) => {
  e.getHeaderGroups = v(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (o, t, n, r) => {
    var i, l;
    const u = (i = n == null ? void 0 : n.map((p) => t.find((d) => d.id === p)).filter(Boolean)) != null ? i : [], a = (l = r == null ? void 0 : r.map((p) => t.find((d) => d.id === p)).filter(Boolean)) != null ? l : [], g = t.filter((p) => !(n != null && n.includes(p.id)) && !(r != null && r.includes(p.id)));
    return ge(o, [...u, ...g, ...a], e);
  }, C(e.options, O)), e.getCenterHeaderGroups = v(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (o, t, n, r) => (t = t.filter((i) => !(n != null && n.includes(i.id)) && !(r != null && r.includes(i.id))), ge(o, t, e, "center")), C(e.options, O)), e.getLeftHeaderGroups = v(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.left], (o, t, n) => {
    var r;
    const i = (r = n == null ? void 0 : n.map((l) => t.find((u) => u.id === l)).filter(Boolean)) != null ? r : [];
    return ge(o, i, e, "left");
  }, C(e.options, O)), e.getRightHeaderGroups = v(() => [e.getAllColumns(), e.getVisibleLeafColumns(), e.getState().columnPinning.right], (o, t, n) => {
    var r;
    const i = (r = n == null ? void 0 : n.map((l) => t.find((u) => u.id === l)).filter(Boolean)) != null ? r : [];
    return ge(o, i, e, "right");
  }, C(e.options, O)), e.getFooterGroups = v(() => [e.getHeaderGroups()], (o) => [...o].reverse(), C(e.options, O)), e.getLeftFooterGroups = v(() => [e.getLeftHeaderGroups()], (o) => [...o].reverse(), C(e.options, O)), e.getCenterFooterGroups = v(() => [e.getCenterHeaderGroups()], (o) => [...o].reverse(), C(e.options, O)), e.getRightFooterGroups = v(() => [e.getRightHeaderGroups()], (o) => [...o].reverse(), C(e.options, O)), e.getFlatHeaders = v(() => [e.getHeaderGroups()], (o) => o.map((t) => t.headers).flat(), C(e.options, O)), e.getLeftFlatHeaders = v(() => [e.getLeftHeaderGroups()], (o) => o.map((t) => t.headers).flat(), C(e.options, O)), e.getCenterFlatHeaders = v(() => [e.getCenterHeaderGroups()], (o) => o.map((t) => t.headers).flat(), C(e.options, O)), e.getRightFlatHeaders = v(() => [e.getRightHeaderGroups()], (o) => o.map((t) => t.headers).flat(), C(e.options, O)), e.getCenterLeafHeaders = v(() => [e.getCenterFlatHeaders()], (o) => o.filter((t) => {
    var n;
    return !((n = t.subHeaders) != null && n.length);
  }), C(e.options, O)), e.getLeftLeafHeaders = v(() => [e.getLeftFlatHeaders()], (o) => o.filter((t) => {
    var n;
    return !((n = t.subHeaders) != null && n.length);
  }), C(e.options, O)), e.getRightLeafHeaders = v(() => [e.getRightFlatHeaders()], (o) => o.filter((t) => {
    var n;
    return !((n = t.subHeaders) != null && n.length);
  }), C(e.options, O)), e.getLeafHeaders = v(() => [e.getLeftHeaderGroups(), e.getCenterHeaderGroups(), e.getRightHeaderGroups()], (o, t, n) => {
    var r, i, l, u, a, g;
    return [...(r = (i = o[0]) == null ? void 0 : i.headers) != null ? r : [], ...(l = (u = t[0]) == null ? void 0 : u.headers) != null ? l : [], ...(a = (g = n[0]) == null ? void 0 : g.headers) != null ? a : []].map((c) => c.getLeafHeaders()).flat();
  }, C(e.options, O));
} };
function ge(e, o, t, n) {
  var r, i;
  let l = 0;
  const u = function(d, s) {
    s === void 0 && (s = 1), l = Math.max(l, s), d.filter((f) => f.getIsVisible()).forEach((f) => {
      var m;
      (m = f.columns) != null && m.length && u(f.columns, s + 1);
    }, 0);
  };
  u(e);
  let a = [];
  const g = (d, s) => {
    const f = { depth: s, id: [n, `${s}`].filter(Boolean).join("_"), headers: [] }, m = [];
    d.forEach((F) => {
      const _ = [...m].reverse()[0], x = F.column.depth === f.depth;
      let P, D = false;
      if (x && F.column.parent ? P = F.column.parent : (P = F.column, D = true), _ && (_ == null ? void 0 : _.column) === P) _.subHeaders.push(F);
      else {
        const I = Ue(t, P, { id: [n, s, P.id, F == null ? void 0 : F.id].filter(Boolean).join("_"), isPlaceholder: D, placeholderId: D ? `${m.filter((q) => q.column === P).length}` : void 0, depth: s, index: m.length });
        I.subHeaders.push(F), m.push(I);
      }
      f.headers.push(F), F.headerGroup = f;
    }), a.push(f), s > 0 && g(m, s - 1);
  }, c = o.map((d, s) => Ue(t, d, { depth: l, index: s }));
  g(c, l - 1), a.reverse();
  const p = (d) => d.filter((f) => f.column.getIsVisible()).map((f) => {
    let m = 0, F = 0, _ = [0];
    f.subHeaders && f.subHeaders.length ? (_ = [], p(f.subHeaders).forEach((P) => {
      let { colSpan: D, rowSpan: I } = P;
      m += D, _.push(I);
    })) : m = 1;
    const x = Math.min(..._);
    return F = F + x, f.colSpan = m, f.rowSpan = F, { colSpan: m, rowSpan: F };
  });
  return p((r = (i = a[0]) == null ? void 0 : i.headers) != null ? r : []), a;
}
const Ae = (e, o, t, n, r, i, l) => {
  let u = { id: o, index: n, original: t, depth: r, parentId: l, _valuesCache: {}, _uniqueValuesCache: {}, getValue: (a) => {
    if (u._valuesCache.hasOwnProperty(a)) return u._valuesCache[a];
    const g = e.getColumn(a);
    if (g != null && g.accessorFn) return u._valuesCache[a] = g.accessorFn(u.original, n), u._valuesCache[a];
  }, getUniqueValues: (a) => {
    if (u._uniqueValuesCache.hasOwnProperty(a)) return u._uniqueValuesCache[a];
    const g = e.getColumn(a);
    if (g != null && g.accessorFn) return g.columnDef.getUniqueValues ? (u._uniqueValuesCache[a] = g.columnDef.getUniqueValues(u.original, n), u._uniqueValuesCache[a]) : (u._uniqueValuesCache[a] = [u.getValue(a)], u._uniqueValuesCache[a]);
  }, renderValue: (a) => {
    var g;
    return (g = u.getValue(a)) != null ? g : e.options.renderFallbackValue;
  }, subRows: [], getLeafRows: () => zt(u.subRows, (a) => a.subRows), getParentRow: () => u.parentId ? e.getRow(u.parentId, true) : void 0, getParentRows: () => {
    let a = [], g = u;
    for (; ; ) {
      const c = g.getParentRow();
      if (!c) break;
      a.push(c), g = c;
    }
    return a.reverse();
  }, getAllCells: v(() => [e.getAllLeafColumns()], (a) => a.map((g) => Ot(e, u, g, g.id)), C(e.options, "debugRows")), _getAllCellsByColumnId: v(() => [u.getAllCells()], (a) => a.reduce((g, c) => (g[c.column.id] = c, g), {}), C(e.options, "debugRows")) };
  for (let a = 0; a < e._features.length; a++) {
    const g = e._features[a];
    g == null || g.createRow == null || g.createRow(u, e);
  }
  return u;
}, Et = { createColumn: (e, o) => {
  e._getFacetedRowModel = o.options.getFacetedRowModel && o.options.getFacetedRowModel(o, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : o.getPreFilteredRowModel(), e._getFacetedUniqueValues = o.options.getFacetedUniqueValues && o.options.getFacetedUniqueValues(o, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = o.options.getFacetedMinMaxValues && o.options.getFacetedMinMaxValues(o, e.id), e.getFacetedMinMaxValues = () => {
    if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
  };
} }, Qe = (e, o, t) => {
  var n, r;
  const i = t == null || (n = t.toString()) == null ? void 0 : n.toLowerCase();
  return !!(!((r = e.getValue(o)) == null || (r = r.toString()) == null || (r = r.toLowerCase()) == null) && r.includes(i));
};
Qe.autoRemove = (e) => L(e);
const We = (e, o, t) => {
  var n;
  return !!(!((n = e.getValue(o)) == null || (n = n.toString()) == null) && n.includes(t));
};
We.autoRemove = (e) => L(e);
const Je = (e, o, t) => {
  var n;
  return ((n = e.getValue(o)) == null || (n = n.toString()) == null ? void 0 : n.toLowerCase()) === (t == null ? void 0 : t.toLowerCase());
};
Je.autoRemove = (e) => L(e);
const et = (e, o, t) => {
  var n;
  return (n = e.getValue(o)) == null ? void 0 : n.includes(t);
};
et.autoRemove = (e) => L(e);
const tt = (e, o, t) => !t.some((n) => {
  var r;
  return !((r = e.getValue(o)) != null && r.includes(n));
});
tt.autoRemove = (e) => L(e) || !(e != null && e.length);
const nt = (e, o, t) => t.some((n) => {
  var r;
  return (r = e.getValue(o)) == null ? void 0 : r.includes(n);
});
nt.autoRemove = (e) => L(e) || !(e != null && e.length);
const ot = (e, o, t) => e.getValue(o) === t;
ot.autoRemove = (e) => L(e);
const rt = (e, o, t) => e.getValue(o) == t;
rt.autoRemove = (e) => L(e);
const Ee = (e, o, t) => {
  let [n, r] = t;
  const i = e.getValue(o);
  return i >= n && i <= r;
};
Ee.resolveFilterValue = (e) => {
  let [o, t] = e, n = typeof o != "number" ? parseFloat(o) : o, r = typeof t != "number" ? parseFloat(t) : t, i = o === null || Number.isNaN(n) ? -1 / 0 : n, l = t === null || Number.isNaN(r) ? 1 / 0 : r;
  if (i > l) {
    const u = i;
    i = l, l = u;
  }
  return [i, l];
};
Ee.autoRemove = (e) => L(e) || L(e[0]) && L(e[1]);
const j = { includesString: Qe, includesStringSensitive: We, equalsString: Je, arrIncludes: et, arrIncludesAll: tt, arrIncludesSome: nt, equals: ot, weakEquals: rt, inNumberRange: Ee };
function L(e) {
  return e == null || e === "";
}
const Ht = { getDefaultColumnDef: () => ({ filterFn: "auto" }), getInitialState: (e) => ({ columnFilters: [], ...e }), getDefaultOptions: (e) => ({ onColumnFiltersChange: G("columnFilters", e), filterFromLeafRows: false, maxLeafRowFilterDepth: 100 }), createColumn: (e, o) => {
  e.getAutoFilterFn = () => {
    const t = o.getCoreRowModel().flatRows[0], n = t == null ? void 0 : t.getValue(e.id);
    return typeof n == "string" ? j.includesString : typeof n == "number" ? j.inNumberRange : typeof n == "boolean" || n !== null && typeof n == "object" ? j.equals : Array.isArray(n) ? j.arrIncludes : j.weakEquals;
  }, e.getFilterFn = () => {
    var t, n;
    return pe(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : (t = (n = o.options.filterFns) == null ? void 0 : n[e.columnDef.filterFn]) != null ? t : j[e.columnDef.filterFn];
  }, e.getCanFilter = () => {
    var t, n, r;
    return ((t = e.columnDef.enableColumnFilter) != null ? t : true) && ((n = o.options.enableColumnFilters) != null ? n : true) && ((r = o.options.enableFilters) != null ? r : true) && !!e.accessorFn;
  }, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
    var t;
    return (t = o.getState().columnFilters) == null || (t = t.find((n) => n.id === e.id)) == null ? void 0 : t.value;
  }, e.getFilterIndex = () => {
    var t, n;
    return (t = (n = o.getState().columnFilters) == null ? void 0 : n.findIndex((r) => r.id === e.id)) != null ? t : -1;
  }, e.setFilterValue = (t) => {
    o.setColumnFilters((n) => {
      const r = e.getFilterFn(), i = n == null ? void 0 : n.find((c) => c.id === e.id), l = U(t, i ? i.value : void 0);
      if (Ke(r, l, e)) {
        var u;
        return (u = n == null ? void 0 : n.filter((c) => c.id !== e.id)) != null ? u : [];
      }
      const a = { id: e.id, value: l };
      if (i) {
        var g;
        return (g = n == null ? void 0 : n.map((c) => c.id === e.id ? a : c)) != null ? g : [];
      }
      return n != null && n.length ? [...n, a] : [a];
    });
  };
}, createRow: (e, o) => {
  e.columnFilters = {}, e.columnFiltersMeta = {};
}, createTable: (e) => {
  e.setColumnFilters = (o) => {
    const t = e.getAllLeafColumns(), n = (r) => {
      var i;
      return (i = U(o, r)) == null ? void 0 : i.filter((l) => {
        const u = t.find((a) => a.id === l.id);
        if (u) {
          const a = u.getFilterFn();
          if (Ke(a, l.value, u)) return false;
        }
        return true;
      });
    };
    e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange(n);
  }, e.resetColumnFilters = (o) => {
    var t, n;
    e.setColumnFilters(o ? [] : (t = (n = e.initialState) == null ? void 0 : n.columnFilters) != null ? t : []);
  }, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
} };
function Ke(e, o, t) {
  return (e && e.autoRemove ? e.autoRemove(o, t) : false) || typeof o > "u" || typeof o == "string" && !o;
}
const Gt = (e, o, t) => t.reduce((n, r) => {
  const i = r.getValue(e);
  return n + (typeof i == "number" ? i : 0);
}, 0), Lt = (e, o, t) => {
  let n;
  return t.forEach((r) => {
    const i = r.getValue(e);
    i != null && (n > i || n === void 0 && i >= i) && (n = i);
  }), n;
}, qt = (e, o, t) => {
  let n;
  return t.forEach((r) => {
    const i = r.getValue(e);
    i != null && (n < i || n === void 0 && i >= i) && (n = i);
  }), n;
}, kt = (e, o, t) => {
  let n, r;
  return t.forEach((i) => {
    const l = i.getValue(e);
    l != null && (n === void 0 ? l >= l && (n = r = l) : (n > l && (n = l), r < l && (r = l)));
  }), [n, r];
}, Bt = (e, o) => {
  let t = 0, n = 0;
  if (o.forEach((r) => {
    let i = r.getValue(e);
    i != null && (i = +i) >= i && (++t, n += i);
  }), t) return n / t;
}, bt = (e, o) => {
  if (!o.length) return;
  const t = o.map((i) => i.getValue(e));
  if (!It(t)) return;
  if (t.length === 1) return t[0];
  const n = Math.floor(t.length / 2), r = t.sort((i, l) => i - l);
  return t.length % 2 !== 0 ? r[n] : (r[n - 1] + r[n]) / 2;
}, jt = (e, o) => Array.from(new Set(o.map((t) => t.getValue(e))).values()), Tt = (e, o) => new Set(o.map((t) => t.getValue(e))).size, Nt = (e, o) => o.length, Re = { sum: Gt, min: Lt, max: qt, extent: kt, mean: Bt, median: bt, unique: jt, uniqueCount: Tt, count: Nt }, Ut = { getDefaultColumnDef: () => ({ aggregatedCell: (e) => {
  var o, t;
  return (o = (t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) != null ? o : null;
}, aggregationFn: "auto" }), getInitialState: (e) => ({ grouping: [], ...e }), getDefaultOptions: (e) => ({ onGroupingChange: G("grouping", e), groupedColumnMode: "reorder" }), createColumn: (e, o) => {
  e.toggleGrouping = () => {
    o.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((n) => n !== e.id) : [...t ?? [], e.id]);
  }, e.getCanGroup = () => {
    var t, n;
    return ((t = e.columnDef.enableGrouping) != null ? t : true) && ((n = o.options.enableGrouping) != null ? n : true) && (!!e.accessorFn || !!e.columnDef.getGroupingValue);
  }, e.getIsGrouped = () => {
    var t;
    return (t = o.getState().grouping) == null ? void 0 : t.includes(e.id);
  }, e.getGroupedIndex = () => {
    var t;
    return (t = o.getState().grouping) == null ? void 0 : t.indexOf(e.id);
  }, e.getToggleGroupingHandler = () => {
    const t = e.getCanGroup();
    return () => {
      t && e.toggleGrouping();
    };
  }, e.getAutoAggregationFn = () => {
    const t = o.getCoreRowModel().flatRows[0], n = t == null ? void 0 : t.getValue(e.id);
    if (typeof n == "number") return Re.sum;
    if (Object.prototype.toString.call(n) === "[object Date]") return Re.extent;
  }, e.getAggregationFn = () => {
    var t, n;
    if (!e) throw new Error();
    return pe(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : (t = (n = o.options.aggregationFns) == null ? void 0 : n[e.columnDef.aggregationFn]) != null ? t : Re[e.columnDef.aggregationFn];
  };
}, createTable: (e) => {
  e.setGrouping = (o) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(o), e.resetGrouping = (o) => {
    var t, n;
    e.setGrouping(o ? [] : (t = (n = e.initialState) == null ? void 0 : n.grouping) != null ? t : []);
  }, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
}, createRow: (e, o) => {
  e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (t) => {
    if (e._groupingValuesCache.hasOwnProperty(t)) return e._groupingValuesCache[t];
    const n = o.getColumn(t);
    return n != null && n.columnDef.getGroupingValue ? (e._groupingValuesCache[t] = n.columnDef.getGroupingValue(e.original), e._groupingValuesCache[t]) : e.getValue(t);
  }, e._groupingValuesCache = {};
}, createCell: (e, o, t, n) => {
  e.getIsGrouped = () => o.getIsGrouped() && o.id === t.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && o.getIsGrouped(), e.getIsAggregated = () => {
    var r;
    return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((r = t.subRows) != null && r.length);
  };
} };
function Kt(e, o, t) {
  if (!(o != null && o.length) || !t) return e;
  const n = e.filter((i) => !o.includes(i.id));
  return t === "remove" ? n : [...o.map((i) => e.find((l) => l.id === i)).filter(Boolean), ...n];
}
const Xt = { getInitialState: (e) => ({ columnOrder: [], ...e }), getDefaultOptions: (e) => ({ onColumnOrderChange: G("columnOrder", e) }), createColumn: (e, o) => {
  e.getIndex = v((t) => [ue(o, t)], (t) => t.findIndex((n) => n.id === e.id), C(o.options, "debugColumns")), e.getIsFirstColumn = (t) => {
    var n;
    return ((n = ue(o, t)[0]) == null ? void 0 : n.id) === e.id;
  }, e.getIsLastColumn = (t) => {
    var n;
    const r = ue(o, t);
    return ((n = r[r.length - 1]) == null ? void 0 : n.id) === e.id;
  };
}, createTable: (e) => {
  e.setColumnOrder = (o) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(o), e.resetColumnOrder = (o) => {
    var t;
    e.setColumnOrder(o ? [] : (t = e.initialState.columnOrder) != null ? t : []);
  }, e._getOrderColumnsFn = v(() => [e.getState().columnOrder, e.getState().grouping, e.options.groupedColumnMode], (o, t, n) => (r) => {
    let i = [];
    if (!(o != null && o.length)) i = r;
    else {
      const l = [...o], u = [...r];
      for (; u.length && l.length; ) {
        const a = l.shift(), g = u.findIndex((c) => c.id === a);
        g > -1 && i.push(u.splice(g, 1)[0]);
      }
      i = [...i, ...u];
    }
    return Kt(i, t, n);
  }, C(e.options, "debugTable"));
} }, he = () => ({ left: [], right: [] }), Yt = { getInitialState: (e) => ({ columnPinning: he(), ...e }), getDefaultOptions: (e) => ({ onColumnPinningChange: G("columnPinning", e) }), createColumn: (e, o) => {
  e.pin = (t) => {
    const n = e.getLeafColumns().map((r) => r.id).filter(Boolean);
    o.setColumnPinning((r) => {
      var i, l;
      if (t === "right") {
        var u, a;
        return { left: ((u = r == null ? void 0 : r.left) != null ? u : []).filter((p) => !(n != null && n.includes(p))), right: [...((a = r == null ? void 0 : r.right) != null ? a : []).filter((p) => !(n != null && n.includes(p))), ...n] };
      }
      if (t === "left") {
        var g, c;
        return { left: [...((g = r == null ? void 0 : r.left) != null ? g : []).filter((p) => !(n != null && n.includes(p))), ...n], right: ((c = r == null ? void 0 : r.right) != null ? c : []).filter((p) => !(n != null && n.includes(p))) };
      }
      return { left: ((i = r == null ? void 0 : r.left) != null ? i : []).filter((p) => !(n != null && n.includes(p))), right: ((l = r == null ? void 0 : r.right) != null ? l : []).filter((p) => !(n != null && n.includes(p))) };
    });
  }, e.getCanPin = () => e.getLeafColumns().some((n) => {
    var r, i, l;
    return ((r = n.columnDef.enablePinning) != null ? r : true) && ((i = (l = o.options.enableColumnPinning) != null ? l : o.options.enablePinning) != null ? i : true);
  }), e.getIsPinned = () => {
    const t = e.getLeafColumns().map((u) => u.id), { left: n, right: r } = o.getState().columnPinning, i = t.some((u) => n == null ? void 0 : n.includes(u)), l = t.some((u) => r == null ? void 0 : r.includes(u));
    return i ? "left" : l ? "right" : false;
  }, e.getPinnedIndex = () => {
    var t, n;
    const r = e.getIsPinned();
    return r ? (t = (n = o.getState().columnPinning) == null || (n = n[r]) == null ? void 0 : n.indexOf(e.id)) != null ? t : -1 : 0;
  };
}, createRow: (e, o) => {
  e.getCenterVisibleCells = v(() => [e._getAllVisibleCells(), o.getState().columnPinning.left, o.getState().columnPinning.right], (t, n, r) => {
    const i = [...n ?? [], ...r ?? []];
    return t.filter((l) => !i.includes(l.column.id));
  }, C(o.options, "debugRows")), e.getLeftVisibleCells = v(() => [e._getAllVisibleCells(), o.getState().columnPinning.left], (t, n) => (n ?? []).map((i) => t.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({ ...i, position: "left" })), C(o.options, "debugRows")), e.getRightVisibleCells = v(() => [e._getAllVisibleCells(), o.getState().columnPinning.right], (t, n) => (n ?? []).map((i) => t.find((l) => l.column.id === i)).filter(Boolean).map((i) => ({ ...i, position: "right" })), C(o.options, "debugRows"));
}, createTable: (e) => {
  e.setColumnPinning = (o) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(o), e.resetColumnPinning = (o) => {
    var t, n;
    return e.setColumnPinning(o ? he() : (t = (n = e.initialState) == null ? void 0 : n.columnPinning) != null ? t : he());
  }, e.getIsSomeColumnsPinned = (o) => {
    var t;
    const n = e.getState().columnPinning;
    if (!o) {
      var r, i;
      return !!((r = n.left) != null && r.length || (i = n.right) != null && i.length);
    }
    return !!((t = n[o]) != null && t.length);
  }, e.getLeftLeafColumns = v(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (o, t) => (t ?? []).map((n) => o.find((r) => r.id === n)).filter(Boolean), C(e.options, "debugColumns")), e.getRightLeafColumns = v(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (o, t) => (t ?? []).map((n) => o.find((r) => r.id === n)).filter(Boolean), C(e.options, "debugColumns")), e.getCenterLeafColumns = v(() => [e.getAllLeafColumns(), e.getState().columnPinning.left, e.getState().columnPinning.right], (o, t, n) => {
    const r = [...t ?? [], ...n ?? []];
    return o.filter((i) => !r.includes(i.id));
  }, C(e.options, "debugColumns"));
} };
function Zt(e) {
  return e || (typeof document < "u" ? document : null);
}
const de = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER }, _e = () => ({ startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, isResizingColumn: false, columnSizingStart: [] }), Qt = { getDefaultColumnDef: () => de, getInitialState: (e) => ({ columnSizing: {}, columnSizingInfo: _e(), ...e }), getDefaultOptions: (e) => ({ columnResizeMode: "onEnd", columnResizeDirection: "ltr", onColumnSizingChange: G("columnSizing", e), onColumnSizingInfoChange: G("columnSizingInfo", e) }), createColumn: (e, o) => {
  e.getSize = () => {
    var t, n, r;
    const i = o.getState().columnSizing[e.id];
    return Math.min(Math.max((t = e.columnDef.minSize) != null ? t : de.minSize, (n = i ?? e.columnDef.size) != null ? n : de.size), (r = e.columnDef.maxSize) != null ? r : de.maxSize);
  }, e.getStart = v((t) => [t, ue(o, t), o.getState().columnSizing], (t, n) => n.slice(0, e.getIndex(t)).reduce((r, i) => r + i.getSize(), 0), C(o.options, "debugColumns")), e.getAfter = v((t) => [t, ue(o, t), o.getState().columnSizing], (t, n) => n.slice(e.getIndex(t) + 1).reduce((r, i) => r + i.getSize(), 0), C(o.options, "debugColumns")), e.resetSize = () => {
    o.setColumnSizing((t) => {
      let { [e.id]: n, ...r } = t;
      return r;
    });
  }, e.getCanResize = () => {
    var t, n;
    return ((t = e.columnDef.enableResizing) != null ? t : true) && ((n = o.options.enableColumnResizing) != null ? n : true);
  }, e.getIsResizing = () => o.getState().columnSizingInfo.isResizingColumn === e.id;
}, createHeader: (e, o) => {
  e.getSize = () => {
    let t = 0;
    const n = (r) => {
      if (r.subHeaders.length) r.subHeaders.forEach(n);
      else {
        var i;
        t += (i = r.column.getSize()) != null ? i : 0;
      }
    };
    return n(e), t;
  }, e.getStart = () => {
    if (e.index > 0) {
      const t = e.headerGroup.headers[e.index - 1];
      return t.getStart() + t.getSize();
    }
    return 0;
  }, e.getResizeHandler = (t) => {
    const n = o.getColumn(e.column.id), r = n == null ? void 0 : n.getCanResize();
    return (i) => {
      if (!n || !r || (i.persist == null || i.persist(), Fe(i) && i.touches && i.touches.length > 1)) return;
      const l = e.getSize(), u = e ? e.getLeafHeaders().map((_) => [_.column.id, _.column.getSize()]) : [[n.id, n.getSize()]], a = Fe(i) ? Math.round(i.touches[0].clientX) : i.clientX, g = {}, c = (_, x) => {
        typeof x == "number" && (o.setColumnSizingInfo((P) => {
          var D, I;
          const q = o.options.columnResizeDirection === "rtl" ? -1 : 1, Q = (x - ((D = P == null ? void 0 : P.startOffset) != null ? D : 0)) * q, W = Math.max(Q / ((I = P == null ? void 0 : P.startSize) != null ? I : 0), -0.999999);
          return P.columnSizingStart.forEach((te) => {
            let [ne, J] = te;
            g[ne] = Math.round(Math.max(J + J * W, 0) * 100) / 100;
          }), { ...P, deltaOffset: Q, deltaPercentage: W };
        }), (o.options.columnResizeMode === "onChange" || _ === "end") && o.setColumnSizing((P) => ({ ...P, ...g })));
      }, p = (_) => c("move", _), d = (_) => {
        c("end", _), o.setColumnSizingInfo((x) => ({ ...x, isResizingColumn: false, startOffset: null, startSize: null, deltaOffset: null, deltaPercentage: null, columnSizingStart: [] }));
      }, s = Zt(t), f = { moveHandler: (_) => p(_.clientX), upHandler: (_) => {
        s == null ? void 0 : s.removeEventListener("mousemove", f.moveHandler), s == null ? void 0 : s.removeEventListener("mouseup", f.upHandler), d(_.clientX);
      } }, m = { moveHandler: (_) => (_.cancelable && (_.preventDefault(), _.stopPropagation()), p(_.touches[0].clientX), false), upHandler: (_) => {
        var x;
        s == null ? void 0 : s.removeEventListener("touchmove", m.moveHandler), s == null ? void 0 : s.removeEventListener("touchend", m.upHandler), _.cancelable && (_.preventDefault(), _.stopPropagation()), d((x = _.touches[0]) == null ? void 0 : x.clientX);
      } }, F = Wt() ? { passive: false } : false;
      Fe(i) ? (s == null ? void 0 : s.addEventListener("touchmove", m.moveHandler, F), s == null ? void 0 : s.addEventListener("touchend", m.upHandler, F)) : (s == null ? void 0 : s.addEventListener("mousemove", f.moveHandler, F), s == null ? void 0 : s.addEventListener("mouseup", f.upHandler, F)), o.setColumnSizingInfo((_) => ({ ..._, startOffset: a, startSize: l, deltaOffset: 0, deltaPercentage: 0, columnSizingStart: u, isResizingColumn: n.id }));
    };
  };
}, createTable: (e) => {
  e.setColumnSizing = (o) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(o), e.setColumnSizingInfo = (o) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(o), e.resetColumnSizing = (o) => {
    var t;
    e.setColumnSizing(o ? {} : (t = e.initialState.columnSizing) != null ? t : {});
  }, e.resetHeaderSizeInfo = (o) => {
    var t;
    e.setColumnSizingInfo(o ? _e() : (t = e.initialState.columnSizingInfo) != null ? t : _e());
  }, e.getTotalSize = () => {
    var o, t;
    return (o = (t = e.getHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null ? o : 0;
  }, e.getLeftTotalSize = () => {
    var o, t;
    return (o = (t = e.getLeftHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null ? o : 0;
  }, e.getCenterTotalSize = () => {
    var o, t;
    return (o = (t = e.getCenterHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null ? o : 0;
  }, e.getRightTotalSize = () => {
    var o, t;
    return (o = (t = e.getRightHeaderGroups()[0]) == null ? void 0 : t.headers.reduce((n, r) => n + r.getSize(), 0)) != null ? o : 0;
  };
} };
let ce = null;
function Wt() {
  if (typeof ce == "boolean") return ce;
  let e = false;
  try {
    const o = { get passive() {
      return e = true, false;
    } }, t = () => {
    };
    window.addEventListener("test", t, o), window.removeEventListener("test", t);
  } catch {
    e = false;
  }
  return ce = e, ce;
}
function Fe(e) {
  return e.type === "touchstart";
}
const Jt = { getInitialState: (e) => ({ columnVisibility: {}, ...e }), getDefaultOptions: (e) => ({ onColumnVisibilityChange: G("columnVisibility", e) }), createColumn: (e, o) => {
  e.toggleVisibility = (t) => {
    e.getCanHide() && o.setColumnVisibility((n) => ({ ...n, [e.id]: t ?? !e.getIsVisible() }));
  }, e.getIsVisible = () => {
    var t, n;
    const r = e.columns;
    return (t = r.length ? r.some((i) => i.getIsVisible()) : (n = o.getState().columnVisibility) == null ? void 0 : n[e.id]) != null ? t : true;
  }, e.getCanHide = () => {
    var t, n;
    return ((t = e.columnDef.enableHiding) != null ? t : true) && ((n = o.options.enableHiding) != null ? n : true);
  }, e.getToggleVisibilityHandler = () => (t) => {
    e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
  };
}, createRow: (e, o) => {
  e._getAllVisibleCells = v(() => [e.getAllCells(), o.getState().columnVisibility], (t) => t.filter((n) => n.column.getIsVisible()), C(o.options, "debugRows")), e.getVisibleCells = v(() => [e.getLeftVisibleCells(), e.getCenterVisibleCells(), e.getRightVisibleCells()], (t, n, r) => [...t, ...n, ...r], C(o.options, "debugRows"));
}, createTable: (e) => {
  const o = (t, n) => v(() => [n(), n().filter((r) => r.getIsVisible()).map((r) => r.id).join("_")], (r) => r.filter((i) => i.getIsVisible == null ? void 0 : i.getIsVisible()), C(e.options, "debugColumns"));
  e.getVisibleFlatColumns = o("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = o("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = o("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = o("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = o("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
    var n;
    e.setColumnVisibility(t ? {} : (n = e.initialState.columnVisibility) != null ? n : {});
  }, e.toggleAllColumnsVisible = (t) => {
    var n;
    t = (n = t) != null ? n : !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((r, i) => ({ ...r, [i.id]: t || !(i.getCanHide != null && i.getCanHide()) }), {}));
  }, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((t) => !(t.getIsVisible != null && t.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((t) => t.getIsVisible == null ? void 0 : t.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
    var n;
    e.toggleAllColumnsVisible((n = t.target) == null ? void 0 : n.checked);
  };
} };
function ue(e, o) {
  return o ? o === "center" ? e.getCenterVisibleLeafColumns() : o === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
const en = { createTable: (e) => {
  e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
    if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
  };
} }, tn = { getInitialState: (e) => ({ globalFilter: void 0, ...e }), getDefaultOptions: (e) => ({ onGlobalFilterChange: G("globalFilter", e), globalFilterFn: "auto", getColumnCanGlobalFilter: (o) => {
  var t;
  const n = (t = e.getCoreRowModel().flatRows[0]) == null || (t = t._getAllCellsByColumnId()[o.id]) == null ? void 0 : t.getValue();
  return typeof n == "string" || typeof n == "number";
} }), createColumn: (e, o) => {
  e.getCanGlobalFilter = () => {
    var t, n, r, i;
    return ((t = e.columnDef.enableGlobalFilter) != null ? t : true) && ((n = o.options.enableGlobalFilter) != null ? n : true) && ((r = o.options.enableFilters) != null ? r : true) && ((i = o.options.getColumnCanGlobalFilter == null ? void 0 : o.options.getColumnCanGlobalFilter(e)) != null ? i : true) && !!e.accessorFn;
  };
}, createTable: (e) => {
  e.getGlobalAutoFilterFn = () => j.includesString, e.getGlobalFilterFn = () => {
    var o, t;
    const { globalFilterFn: n } = e.options;
    return pe(n) ? n : n === "auto" ? e.getGlobalAutoFilterFn() : (o = (t = e.options.filterFns) == null ? void 0 : t[n]) != null ? o : j[n];
  }, e.setGlobalFilter = (o) => {
    e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(o);
  }, e.resetGlobalFilter = (o) => {
    e.setGlobalFilter(o ? void 0 : e.initialState.globalFilter);
  };
} }, nn = { getInitialState: (e) => ({ expanded: {}, ...e }), getDefaultOptions: (e) => ({ onExpandedChange: G("expanded", e), paginateExpandedRows: true }), createTable: (e) => {
  let o = false, t = false;
  e._autoResetExpanded = () => {
    var n, r;
    if (!o) {
      e._queue(() => {
        o = true;
      });
      return;
    }
    if ((n = (r = e.options.autoResetAll) != null ? r : e.options.autoResetExpanded) != null ? n : !e.options.manualExpanding) {
      if (t) return;
      t = true, e._queue(() => {
        e.resetExpanded(), t = false;
      });
    }
  }, e.setExpanded = (n) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(n), e.toggleAllRowsExpanded = (n) => {
    n ?? !e.getIsAllRowsExpanded() ? e.setExpanded(true) : e.setExpanded({});
  }, e.resetExpanded = (n) => {
    var r, i;
    e.setExpanded(n ? {} : (r = (i = e.initialState) == null ? void 0 : i.expanded) != null ? r : {});
  }, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((n) => n.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (n) => {
    n.persist == null || n.persist(), e.toggleAllRowsExpanded();
  }, e.getIsSomeRowsExpanded = () => {
    const n = e.getState().expanded;
    return n === true || Object.values(n).some(Boolean);
  }, e.getIsAllRowsExpanded = () => {
    const n = e.getState().expanded;
    return typeof n == "boolean" ? n === true : !(!Object.keys(n).length || e.getRowModel().flatRows.some((r) => !r.getIsExpanded()));
  }, e.getExpandedDepth = () => {
    let n = 0;
    return (e.getState().expanded === true ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((i) => {
      const l = i.split(".");
      n = Math.max(n, l.length);
    }), n;
  }, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
}, createRow: (e, o) => {
  e.toggleExpanded = (t) => {
    o.setExpanded((n) => {
      var r;
      const i = n === true ? true : !!(n != null && n[e.id]);
      let l = {};
      if (n === true ? Object.keys(o.getRowModel().rowsById).forEach((u) => {
        l[u] = true;
      }) : l = n, t = (r = t) != null ? r : !i, !i && t) return { ...l, [e.id]: true };
      if (i && !t) {
        const { [e.id]: u, ...a } = l;
        return a;
      }
      return n;
    });
  }, e.getIsExpanded = () => {
    var t;
    const n = o.getState().expanded;
    return !!((t = o.options.getIsRowExpanded == null ? void 0 : o.options.getIsRowExpanded(e)) != null ? t : n === true || (n == null ? void 0 : n[e.id]));
  }, e.getCanExpand = () => {
    var t, n, r;
    return (t = o.options.getRowCanExpand == null ? void 0 : o.options.getRowCanExpand(e)) != null ? t : ((n = o.options.enableExpanding) != null ? n : true) && !!((r = e.subRows) != null && r.length);
  }, e.getIsAllParentsExpanded = () => {
    let t = true, n = e;
    for (; t && n.parentId; ) n = o.getRow(n.parentId, true), t = n.getIsExpanded();
    return t;
  }, e.getToggleExpandedHandler = () => {
    const t = e.getCanExpand();
    return () => {
      t && e.toggleExpanded();
    };
  };
} }, Me = 0, Ie = 10, ye = () => ({ pageIndex: Me, pageSize: Ie }), on = { getInitialState: (e) => ({ ...e, pagination: { ...ye(), ...e == null ? void 0 : e.pagination } }), getDefaultOptions: (e) => ({ onPaginationChange: G("pagination", e) }), createTable: (e) => {
  let o = false, t = false;
  e._autoResetPageIndex = () => {
    var n, r;
    if (!o) {
      e._queue(() => {
        o = true;
      });
      return;
    }
    if ((n = (r = e.options.autoResetAll) != null ? r : e.options.autoResetPageIndex) != null ? n : !e.options.manualPagination) {
      if (t) return;
      t = true, e._queue(() => {
        e.resetPageIndex(), t = false;
      });
    }
  }, e.setPagination = (n) => {
    const r = (i) => U(n, i);
    return e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange(r);
  }, e.resetPagination = (n) => {
    var r;
    e.setPagination(n ? ye() : (r = e.initialState.pagination) != null ? r : ye());
  }, e.setPageIndex = (n) => {
    e.setPagination((r) => {
      let i = U(n, r.pageIndex);
      const l = typeof e.options.pageCount > "u" || e.options.pageCount === -1 ? Number.MAX_SAFE_INTEGER : e.options.pageCount - 1;
      return i = Math.max(0, Math.min(i, l)), { ...r, pageIndex: i };
    });
  }, e.resetPageIndex = (n) => {
    var r, i;
    e.setPageIndex(n ? Me : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageIndex) != null ? r : Me);
  }, e.resetPageSize = (n) => {
    var r, i;
    e.setPageSize(n ? Ie : (r = (i = e.initialState) == null || (i = i.pagination) == null ? void 0 : i.pageSize) != null ? r : Ie);
  }, e.setPageSize = (n) => {
    e.setPagination((r) => {
      const i = Math.max(1, U(n, r.pageSize)), l = r.pageSize * r.pageIndex, u = Math.floor(l / i);
      return { ...r, pageIndex: u, pageSize: i };
    });
  }, e.setPageCount = (n) => e.setPagination((r) => {
    var i;
    let l = U(n, (i = e.options.pageCount) != null ? i : -1);
    return typeof l == "number" && (l = Math.max(-1, l)), { ...r, pageCount: l };
  }), e.getPageOptions = v(() => [e.getPageCount()], (n) => {
    let r = [];
    return n && n > 0 && (r = [...new Array(n)].fill(null).map((i, l) => l)), r;
  }, C(e.options, "debugTable")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
    const { pageIndex: n } = e.getState().pagination, r = e.getPageCount();
    return r === -1 ? true : r === 0 ? false : n < r - 1;
  }, e.previousPage = () => e.setPageIndex((n) => n - 1), e.nextPage = () => e.setPageIndex((n) => n + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => {
    var n;
    return (n = e.options.pageCount) != null ? n : Math.ceil(e.getRowCount() / e.getState().pagination.pageSize);
  }, e.getRowCount = () => {
    var n;
    return (n = e.options.rowCount) != null ? n : e.getPrePaginationRowModel().rows.length;
  };
} }, $e = () => ({ top: [], bottom: [] }), rn = { getInitialState: (e) => ({ rowPinning: $e(), ...e }), getDefaultOptions: (e) => ({ onRowPinningChange: G("rowPinning", e) }), createRow: (e, o) => {
  e.pin = (t, n, r) => {
    const i = n ? e.getLeafRows().map((a) => {
      let { id: g } = a;
      return g;
    }) : [], l = r ? e.getParentRows().map((a) => {
      let { id: g } = a;
      return g;
    }) : [], u = /* @__PURE__ */ new Set([...l, e.id, ...i]);
    o.setRowPinning((a) => {
      var g, c;
      if (t === "bottom") {
        var p, d;
        return { top: ((p = a == null ? void 0 : a.top) != null ? p : []).filter((m) => !(u != null && u.has(m))), bottom: [...((d = a == null ? void 0 : a.bottom) != null ? d : []).filter((m) => !(u != null && u.has(m))), ...Array.from(u)] };
      }
      if (t === "top") {
        var s, f;
        return { top: [...((s = a == null ? void 0 : a.top) != null ? s : []).filter((m) => !(u != null && u.has(m))), ...Array.from(u)], bottom: ((f = a == null ? void 0 : a.bottom) != null ? f : []).filter((m) => !(u != null && u.has(m))) };
      }
      return { top: ((g = a == null ? void 0 : a.top) != null ? g : []).filter((m) => !(u != null && u.has(m))), bottom: ((c = a == null ? void 0 : a.bottom) != null ? c : []).filter((m) => !(u != null && u.has(m))) };
    });
  }, e.getCanPin = () => {
    var t;
    const { enableRowPinning: n, enablePinning: r } = o.options;
    return typeof n == "function" ? n(e) : (t = n ?? r) != null ? t : true;
  }, e.getIsPinned = () => {
    const t = [e.id], { top: n, bottom: r } = o.getState().rowPinning, i = t.some((u) => n == null ? void 0 : n.includes(u)), l = t.some((u) => r == null ? void 0 : r.includes(u));
    return i ? "top" : l ? "bottom" : false;
  }, e.getPinnedIndex = () => {
    var t, n;
    const r = e.getIsPinned();
    if (!r) return -1;
    const i = (t = r === "top" ? o.getTopRows() : o.getBottomRows()) == null ? void 0 : t.map((l) => {
      let { id: u } = l;
      return u;
    });
    return (n = i == null ? void 0 : i.indexOf(e.id)) != null ? n : -1;
  };
}, createTable: (e) => {
  e.setRowPinning = (o) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(o), e.resetRowPinning = (o) => {
    var t, n;
    return e.setRowPinning(o ? $e() : (t = (n = e.initialState) == null ? void 0 : n.rowPinning) != null ? t : $e());
  }, e.getIsSomeRowsPinned = (o) => {
    var t;
    const n = e.getState().rowPinning;
    if (!o) {
      var r, i;
      return !!((r = n.top) != null && r.length || (i = n.bottom) != null && i.length);
    }
    return !!((t = n[o]) != null && t.length);
  }, e._getPinnedRows = (o, t, n) => {
    var r;
    return ((r = e.options.keepPinnedRows) == null || r ? (t ?? []).map((l) => {
      const u = e.getRow(l, true);
      return u.getIsAllParentsExpanded() ? u : null;
    }) : (t ?? []).map((l) => o.find((u) => u.id === l))).filter(Boolean).map((l) => ({ ...l, position: n }));
  }, e.getTopRows = v(() => [e.getRowModel().rows, e.getState().rowPinning.top], (o, t) => e._getPinnedRows(o, t, "top"), C(e.options, "debugRows")), e.getBottomRows = v(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (o, t) => e._getPinnedRows(o, t, "bottom"), C(e.options, "debugRows")), e.getCenterRows = v(() => [e.getRowModel().rows, e.getState().rowPinning.top, e.getState().rowPinning.bottom], (o, t, n) => {
    const r = /* @__PURE__ */ new Set([...t ?? [], ...n ?? []]);
    return o.filter((i) => !r.has(i.id));
  }, C(e.options, "debugRows"));
} }, ln = { getInitialState: (e) => ({ rowSelection: {}, ...e }), getDefaultOptions: (e) => ({ onRowSelectionChange: G("rowSelection", e), enableRowSelection: true, enableMultiRowSelection: true, enableSubRowSelection: true }), createTable: (e) => {
  e.setRowSelection = (o) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(o), e.resetRowSelection = (o) => {
    var t;
    return e.setRowSelection(o ? {} : (t = e.initialState.rowSelection) != null ? t : {});
  }, e.toggleAllRowsSelected = (o) => {
    e.setRowSelection((t) => {
      o = typeof o < "u" ? o : !e.getIsAllRowsSelected();
      const n = { ...t }, r = e.getPreGroupedRowModel().flatRows;
      return o ? r.forEach((i) => {
        i.getCanSelect() && (n[i.id] = true);
      }) : r.forEach((i) => {
        delete n[i.id];
      }), n;
    });
  }, e.toggleAllPageRowsSelected = (o) => e.setRowSelection((t) => {
    const n = typeof o < "u" ? o : !e.getIsAllPageRowsSelected(), r = { ...t };
    return e.getRowModel().rows.forEach((i) => {
      ze(r, i.id, n, true, e);
    }), r;
  }), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = v(() => [e.getState().rowSelection, e.getCoreRowModel()], (o, t) => Object.keys(o).length ? xe(e, t) : { rows: [], flatRows: [], rowsById: {} }, C(e.options, "debugTable")), e.getFilteredSelectedRowModel = v(() => [e.getState().rowSelection, e.getFilteredRowModel()], (o, t) => Object.keys(o).length ? xe(e, t) : { rows: [], flatRows: [], rowsById: {} }, C(e.options, "debugTable")), e.getGroupedSelectedRowModel = v(() => [e.getState().rowSelection, e.getSortedRowModel()], (o, t) => Object.keys(o).length ? xe(e, t) : { rows: [], flatRows: [], rowsById: {} }, C(e.options, "debugTable")), e.getIsAllRowsSelected = () => {
    const o = e.getFilteredRowModel().flatRows, { rowSelection: t } = e.getState();
    let n = !!(o.length && Object.keys(t).length);
    return n && o.some((r) => r.getCanSelect() && !t[r.id]) && (n = false), n;
  }, e.getIsAllPageRowsSelected = () => {
    const o = e.getPaginationRowModel().flatRows.filter((r) => r.getCanSelect()), { rowSelection: t } = e.getState();
    let n = !!o.length;
    return n && o.some((r) => !t[r.id]) && (n = false), n;
  }, e.getIsSomeRowsSelected = () => {
    var o;
    const t = Object.keys((o = e.getState().rowSelection) != null ? o : {}).length;
    return t > 0 && t < e.getFilteredRowModel().flatRows.length;
  }, e.getIsSomePageRowsSelected = () => {
    const o = e.getPaginationRowModel().flatRows;
    return e.getIsAllPageRowsSelected() ? false : o.filter((t) => t.getCanSelect()).some((t) => t.getIsSelected() || t.getIsSomeSelected());
  }, e.getToggleAllRowsSelectedHandler = () => (o) => {
    e.toggleAllRowsSelected(o.target.checked);
  }, e.getToggleAllPageRowsSelectedHandler = () => (o) => {
    e.toggleAllPageRowsSelected(o.target.checked);
  };
}, createRow: (e, o) => {
  e.toggleSelected = (t, n) => {
    const r = e.getIsSelected();
    o.setRowSelection((i) => {
      var l;
      if (t = typeof t < "u" ? t : !r, e.getCanSelect() && r === t) return i;
      const u = { ...i };
      return ze(u, e.id, t, (l = n == null ? void 0 : n.selectChildren) != null ? l : true, o), u;
    });
  }, e.getIsSelected = () => {
    const { rowSelection: t } = o.getState();
    return He(e, t);
  }, e.getIsSomeSelected = () => {
    const { rowSelection: t } = o.getState();
    return Oe(e, t) === "some";
  }, e.getIsAllSubRowsSelected = () => {
    const { rowSelection: t } = o.getState();
    return Oe(e, t) === "all";
  }, e.getCanSelect = () => {
    var t;
    return typeof o.options.enableRowSelection == "function" ? o.options.enableRowSelection(e) : (t = o.options.enableRowSelection) != null ? t : true;
  }, e.getCanSelectSubRows = () => {
    var t;
    return typeof o.options.enableSubRowSelection == "function" ? o.options.enableSubRowSelection(e) : (t = o.options.enableSubRowSelection) != null ? t : true;
  }, e.getCanMultiSelect = () => {
    var t;
    return typeof o.options.enableMultiRowSelection == "function" ? o.options.enableMultiRowSelection(e) : (t = o.options.enableMultiRowSelection) != null ? t : true;
  }, e.getToggleSelectedHandler = () => {
    const t = e.getCanSelect();
    return (n) => {
      var r;
      t && e.toggleSelected((r = n.target) == null ? void 0 : r.checked);
    };
  };
} }, ze = (e, o, t, n, r) => {
  var i;
  const l = r.getRow(o, true);
  t ? (l.getCanMultiSelect() || Object.keys(e).forEach((u) => delete e[u]), l.getCanSelect() && (e[o] = true)) : delete e[o], n && (i = l.subRows) != null && i.length && l.getCanSelectSubRows() && l.subRows.forEach((u) => ze(e, u.id, t, n, r));
};
function xe(e, o) {
  const t = e.getState().rowSelection, n = [], r = {}, i = function(l, u) {
    return l.map((a) => {
      var g;
      const c = He(a, t);
      if (c && (n.push(a), r[a.id] = a), (g = a.subRows) != null && g.length && (a = { ...a, subRows: i(a.subRows) }), c) return a;
    }).filter(Boolean);
  };
  return { rows: i(o.rows), flatRows: n, rowsById: r };
}
function He(e, o) {
  var t;
  return (t = o[e.id]) != null ? t : false;
}
function Oe(e, o, t) {
  var n;
  if (!((n = e.subRows) != null && n.length)) return false;
  let r = true, i = false;
  return e.subRows.forEach((l) => {
    if (!(i && !r) && (l.getCanSelect() && (He(l, o) ? i = true : r = false), l.subRows && l.subRows.length)) {
      const u = Oe(l, o);
      u === "all" ? i = true : (u === "some" && (i = true), r = false);
    }
  }), r ? "all" : i ? "some" : false;
}
const De = /([0-9]+)/gm, sn = (e, o, t) => it(K(e.getValue(t)).toLowerCase(), K(o.getValue(t)).toLowerCase()), un = (e, o, t) => it(K(e.getValue(t)), K(o.getValue(t))), an = (e, o, t) => Ge(K(e.getValue(t)).toLowerCase(), K(o.getValue(t)).toLowerCase()), gn = (e, o, t) => Ge(K(e.getValue(t)), K(o.getValue(t))), dn = (e, o, t) => {
  const n = e.getValue(t), r = o.getValue(t);
  return n > r ? 1 : n < r ? -1 : 0;
}, cn = (e, o, t) => Ge(e.getValue(t), o.getValue(t));
function Ge(e, o) {
  return e === o ? 0 : e > o ? 1 : -1;
}
function K(e) {
  return typeof e == "number" ? isNaN(e) || e === 1 / 0 || e === -1 / 0 ? "" : String(e) : typeof e == "string" ? e : "";
}
function it(e, o) {
  const t = e.split(De).filter(Boolean), n = o.split(De).filter(Boolean);
  for (; t.length && n.length; ) {
    const r = t.shift(), i = n.shift(), l = parseInt(r, 10), u = parseInt(i, 10), a = [l, u].sort();
    if (isNaN(a[0])) {
      if (r > i) return 1;
      if (i > r) return -1;
      continue;
    }
    if (isNaN(a[1])) return isNaN(l) ? -1 : 1;
    if (l > u) return 1;
    if (u > l) return -1;
  }
  return t.length - n.length;
}
const le = { alphanumeric: sn, alphanumericCaseSensitive: un, text: an, textCaseSensitive: gn, datetime: dn, basic: cn }, fn = { getInitialState: (e) => ({ sorting: [], ...e }), getDefaultColumnDef: () => ({ sortingFn: "auto", sortUndefined: 1 }), getDefaultOptions: (e) => ({ onSortingChange: G("sorting", e), isMultiSortEvent: (o) => o.shiftKey }), createColumn: (e, o) => {
  e.getAutoSortingFn = () => {
    const t = o.getFilteredRowModel().flatRows.slice(10);
    let n = false;
    for (const r of t) {
      const i = r == null ? void 0 : r.getValue(e.id);
      if (Object.prototype.toString.call(i) === "[object Date]") return le.datetime;
      if (typeof i == "string" && (n = true, i.split(De).length > 1)) return le.alphanumeric;
    }
    return n ? le.text : le.basic;
  }, e.getAutoSortDir = () => {
    const t = o.getFilteredRowModel().flatRows[0];
    return typeof (t == null ? void 0 : t.getValue(e.id)) == "string" ? "asc" : "desc";
  }, e.getSortingFn = () => {
    var t, n;
    if (!e) throw new Error();
    return pe(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : (t = (n = o.options.sortingFns) == null ? void 0 : n[e.columnDef.sortingFn]) != null ? t : le[e.columnDef.sortingFn];
  }, e.toggleSorting = (t, n) => {
    const r = e.getNextSortingOrder(), i = typeof t < "u" && t !== null;
    o.setSorting((l) => {
      const u = l == null ? void 0 : l.find((s) => s.id === e.id), a = l == null ? void 0 : l.findIndex((s) => s.id === e.id);
      let g = [], c, p = i ? t : r === "desc";
      if (l != null && l.length && e.getCanMultiSort() && n ? u ? c = "toggle" : c = "add" : l != null && l.length && a !== l.length - 1 ? c = "replace" : u ? c = "toggle" : c = "replace", c === "toggle" && (i || r || (c = "remove")), c === "add") {
        var d;
        g = [...l, { id: e.id, desc: p }], g.splice(0, g.length - ((d = o.options.maxMultiSortColCount) != null ? d : Number.MAX_SAFE_INTEGER));
      } else c === "toggle" ? g = l.map((s) => s.id === e.id ? { ...s, desc: p } : s) : c === "remove" ? g = l.filter((s) => s.id !== e.id) : g = [{ id: e.id, desc: p }];
      return g;
    });
  }, e.getFirstSortDir = () => {
    var t, n;
    return ((t = (n = e.columnDef.sortDescFirst) != null ? n : o.options.sortDescFirst) != null ? t : e.getAutoSortDir() === "desc") ? "desc" : "asc";
  }, e.getNextSortingOrder = (t) => {
    var n, r;
    const i = e.getFirstSortDir(), l = e.getIsSorted();
    return l ? l !== i && ((n = o.options.enableSortingRemoval) == null || n) && (!(t && (r = o.options.enableMultiRemove) != null) || r) ? false : l === "desc" ? "asc" : "desc" : i;
  }, e.getCanSort = () => {
    var t, n;
    return ((t = e.columnDef.enableSorting) != null ? t : true) && ((n = o.options.enableSorting) != null ? n : true) && !!e.accessorFn;
  }, e.getCanMultiSort = () => {
    var t, n;
    return (t = (n = e.columnDef.enableMultiSort) != null ? n : o.options.enableMultiSort) != null ? t : !!e.accessorFn;
  }, e.getIsSorted = () => {
    var t;
    const n = (t = o.getState().sorting) == null ? void 0 : t.find((r) => r.id === e.id);
    return n ? n.desc ? "desc" : "asc" : false;
  }, e.getSortIndex = () => {
    var t, n;
    return (t = (n = o.getState().sorting) == null ? void 0 : n.findIndex((r) => r.id === e.id)) != null ? t : -1;
  }, e.clearSorting = () => {
    o.setSorting((t) => t != null && t.length ? t.filter((n) => n.id !== e.id) : []);
  }, e.getToggleSortingHandler = () => {
    const t = e.getCanSort();
    return (n) => {
      t && (n.persist == null || n.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? o.options.isMultiSortEvent == null ? void 0 : o.options.isMultiSortEvent(n) : false));
    };
  };
}, createTable: (e) => {
  e.setSorting = (o) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(o), e.resetSorting = (o) => {
    var t, n;
    e.setSorting(o ? [] : (t = (n = e.initialState) == null ? void 0 : n.sorting) != null ? t : []);
  }, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
} }, pn = [At, Jt, Xt, Yt, Et, Ht, en, tn, fn, Ut, nn, on, rn, ln, Qt];
function mn(e) {
  var o, t;
  const n = [...pn, ...(o = e._features) != null ? o : []];
  let r = { _features: n };
  const i = r._features.reduce((d, s) => Object.assign(d, s.getDefaultOptions == null ? void 0 : s.getDefaultOptions(r)), {}), l = (d) => r.options.mergeOptions ? r.options.mergeOptions(i, d) : { ...i, ...d };
  let a = { ...{}, ...(t = e.initialState) != null ? t : {} };
  r._features.forEach((d) => {
    var s;
    a = (s = d.getInitialState == null ? void 0 : d.getInitialState(a)) != null ? s : a;
  });
  const g = [];
  let c = false;
  const p = { _features: n, options: { ...i, ...e }, initialState: a, _queue: (d) => {
    g.push(d), c || (c = true, Promise.resolve().then(() => {
      for (; g.length; ) g.shift()();
      c = false;
    }).catch((s) => setTimeout(() => {
      throw s;
    })));
  }, reset: () => {
    r.setState(r.initialState);
  }, setOptions: (d) => {
    const s = U(d, r.options);
    r.options = l(s);
  }, getState: () => r.options.state, setState: (d) => {
    r.options.onStateChange == null || r.options.onStateChange(d);
  }, _getRowId: (d, s, f) => {
    var m;
    return (m = r.options.getRowId == null ? void 0 : r.options.getRowId(d, s, f)) != null ? m : `${f ? [f.id, s].join(".") : s}`;
  }, getCoreRowModel: () => (r._getCoreRowModel || (r._getCoreRowModel = r.options.getCoreRowModel(r)), r._getCoreRowModel()), getRowModel: () => r.getPaginationRowModel(), getRow: (d, s) => {
    let f = (s ? r.getPrePaginationRowModel() : r.getRowModel()).rowsById[d];
    if (!f && (f = r.getCoreRowModel().rowsById[d], !f)) throw new Error();
    return f;
  }, _getDefaultColumnDef: v(() => [r.options.defaultColumn], (d) => {
    var s;
    return d = (s = d) != null ? s : {}, { header: (f) => {
      const m = f.header.column.columnDef;
      return m.accessorKey ? m.accessorKey : m.accessorFn ? m.id : null;
    }, cell: (f) => {
      var m, F;
      return (m = (F = f.renderValue()) == null || F.toString == null ? void 0 : F.toString()) != null ? m : null;
    }, ...r._features.reduce((f, m) => Object.assign(f, m.getDefaultColumnDef == null ? void 0 : m.getDefaultColumnDef()), {}), ...d };
  }, C(e, "debugColumns")), _getColumnDefs: () => r.options.columns, getAllColumns: v(() => [r._getColumnDefs()], (d) => {
    const s = function(f, m, F) {
      return F === void 0 && (F = 0), f.map((_) => {
        const x = Dt(r, _, F, m), P = _;
        return x.columns = P.columns ? s(P.columns, x, F + 1) : [], x;
      });
    };
    return s(d);
  }, C(e, "debugColumns")), getAllFlatColumns: v(() => [r.getAllColumns()], (d) => d.flatMap((s) => s.getFlatColumns()), C(e, "debugColumns")), _getAllFlatColumnsById: v(() => [r.getAllFlatColumns()], (d) => d.reduce((s, f) => (s[f.id] = f, s), {}), C(e, "debugColumns")), getAllLeafColumns: v(() => [r.getAllColumns(), r._getOrderColumnsFn()], (d, s) => {
    let f = d.flatMap((m) => m.getLeafColumns());
    return s(f);
  }, C(e, "debugColumns")), getColumn: (d) => r._getAllFlatColumnsById()[d] };
  Object.assign(r, p);
  for (let d = 0; d < r._features.length; d++) {
    const s = r._features[d];
    s == null || s.createTable == null || s.createTable(r);
  }
  return r;
}
function Sn() {
  return (e) => v(() => [e.options.data], (o) => {
    const t = { rows: [], flatRows: [], rowsById: {} }, n = function(r, i, l) {
      i === void 0 && (i = 0);
      const u = [];
      for (let g = 0; g < r.length; g++) {
        const c = Ae(e, e._getRowId(r[g], g, l), r[g], g, i, void 0, l == null ? void 0 : l.id);
        if (t.flatRows.push(c), t.rowsById[c.id] = c, u.push(c), e.options.getSubRows) {
          var a;
          c.originalSubRows = e.options.getSubRows(r[g], g), (a = c.originalSubRows) != null && a.length && (c.subRows = n(c.originalSubRows, i + 1, c));
        }
      }
      return u;
    };
    return t.rows = n(o), t;
  }, C(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function vn() {
  return (e) => v(() => [e.getState().expanded, e.getPreExpandedRowModel(), e.options.paginateExpandedRows], (o, t, n) => !t.rows.length || o !== true && !Object.keys(o ?? {}).length || !n ? t : Cn(t), C(e.options, "debugTable"));
}
function Cn(e) {
  const o = [], t = (n) => {
    var r;
    o.push(n), (r = n.subRows) != null && r.length && n.getIsExpanded() && n.subRows.forEach(t);
  };
  return e.rows.forEach(t), { rows: o, flatRows: e.flatRows, rowsById: e.rowsById };
}
function wn(e, o, t) {
  return t.options.filterFromLeafRows ? Rn(e, o, t) : hn(e, o, t);
}
function Rn(e, o, t) {
  var n;
  const r = [], i = {}, l = (n = t.options.maxLeafRowFilterDepth) != null ? n : 100, u = function(a, g) {
    g === void 0 && (g = 0);
    const c = [];
    for (let d = 0; d < a.length; d++) {
      var p;
      let s = a[d];
      const f = Ae(t, s.id, s.original, s.index, s.depth, void 0, s.parentId);
      if (f.columnFilters = s.columnFilters, (p = s.subRows) != null && p.length && g < l) {
        if (f.subRows = u(s.subRows, g + 1), s = f, o(s) && !f.subRows.length) {
          c.push(s), i[s.id] = s, r.push(s);
          continue;
        }
        if (o(s) || f.subRows.length) {
          c.push(s), i[s.id] = s, r.push(s);
          continue;
        }
      } else s = f, o(s) && (c.push(s), i[s.id] = s, r.push(s));
    }
    return c;
  };
  return { rows: u(e), flatRows: r, rowsById: i };
}
function hn(e, o, t) {
  var n;
  const r = [], i = {}, l = (n = t.options.maxLeafRowFilterDepth) != null ? n : 100, u = function(a, g) {
    g === void 0 && (g = 0);
    const c = [];
    for (let d = 0; d < a.length; d++) {
      let s = a[d];
      if (o(s)) {
        var p;
        if ((p = s.subRows) != null && p.length && g < l) {
          const m = Ae(t, s.id, s.original, s.index, s.depth, void 0, s.parentId);
          m.subRows = u(s.subRows, g + 1), s = m;
        }
        c.push(s), r.push(s), i[s.id] = s;
      }
    }
    return c;
  };
  return { rows: u(e), flatRows: r, rowsById: i };
}
function _n() {
  return (e) => v(() => [e.getPreFilteredRowModel(), e.getState().columnFilters, e.getState().globalFilter], (o, t, n) => {
    if (!o.rows.length || !(t != null && t.length) && !n) {
      for (let d = 0; d < o.flatRows.length; d++) o.flatRows[d].columnFilters = {}, o.flatRows[d].columnFiltersMeta = {};
      return o;
    }
    const r = [], i = [];
    (t ?? []).forEach((d) => {
      var s;
      const f = e.getColumn(d.id);
      if (!f) return;
      const m = f.getFilterFn();
      m && r.push({ id: d.id, filterFn: m, resolvedValue: (s = m.resolveFilterValue == null ? void 0 : m.resolveFilterValue(d.value)) != null ? s : d.value });
    });
    const l = (t ?? []).map((d) => d.id), u = e.getGlobalFilterFn(), a = e.getAllLeafColumns().filter((d) => d.getCanGlobalFilter());
    n && u && a.length && (l.push("__global__"), a.forEach((d) => {
      var s;
      i.push({ id: d.id, filterFn: u, resolvedValue: (s = u.resolveFilterValue == null ? void 0 : u.resolveFilterValue(n)) != null ? s : n });
    }));
    let g, c;
    for (let d = 0; d < o.flatRows.length; d++) {
      const s = o.flatRows[d];
      if (s.columnFilters = {}, r.length) for (let f = 0; f < r.length; f++) {
        g = r[f];
        const m = g.id;
        s.columnFilters[m] = g.filterFn(s, m, g.resolvedValue, (F) => {
          s.columnFiltersMeta[m] = F;
        });
      }
      if (i.length) {
        for (let f = 0; f < i.length; f++) {
          c = i[f];
          const m = c.id;
          if (c.filterFn(s, m, c.resolvedValue, (F) => {
            s.columnFiltersMeta[m] = F;
          })) {
            s.columnFilters.__global__ = true;
            break;
          }
        }
        s.columnFilters.__global__ !== true && (s.columnFilters.__global__ = false);
      }
    }
    const p = (d) => {
      for (let s = 0; s < l.length; s++) if (d.columnFilters[l[s]] === false) return false;
      return true;
    };
    return wn(o.rows, p, e);
  }, C(e.options, "debugTable", "getFilteredRowModel", () => e._autoResetPageIndex()));
}
function Fn() {
  return (e) => v(() => [e.getState().sorting, e.getPreSortedRowModel()], (o, t) => {
    if (!t.rows.length || !(o != null && o.length)) return t;
    const n = e.getState().sorting, r = [], i = n.filter((a) => {
      var g;
      return (g = e.getColumn(a.id)) == null ? void 0 : g.getCanSort();
    }), l = {};
    i.forEach((a) => {
      const g = e.getColumn(a.id);
      g && (l[a.id] = { sortUndefined: g.columnDef.sortUndefined, invertSorting: g.columnDef.invertSorting, sortingFn: g.getSortingFn() });
    });
    const u = (a) => {
      const g = a.map((c) => ({ ...c }));
      return g.sort((c, p) => {
        for (let s = 0; s < i.length; s += 1) {
          var d;
          const f = i[s], m = l[f.id], F = m.sortUndefined, _ = (d = f == null ? void 0 : f.desc) != null ? d : false;
          let x = 0;
          if (F) {
            const P = c.getValue(f.id), D = p.getValue(f.id), I = P === void 0, q = D === void 0;
            if (I || q) {
              if (F === "first") return I ? -1 : 1;
              if (F === "last") return I ? 1 : -1;
              x = I && q ? 0 : I ? F : -F;
            }
          }
          if (x === 0 && (x = m.sortingFn(c, p, f.id)), x !== 0) return _ && (x *= -1), m.invertSorting && (x *= -1), x;
        }
        return c.index - p.index;
      }), g.forEach((c) => {
        var p;
        r.push(c), (p = c.subRows) != null && p.length && (c.subRows = u(c.subRows));
      }), g;
    };
    return { rows: u(t.rows), flatRows: r, rowsById: t.rowsById };
  }, C(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
function fe() {
  return true;
}
const yn = /* @__PURE__ */ Symbol("merge-proxy"), $n = { get(e, o, t) {
  return o === yn ? t : e.get(o);
}, has(e, o) {
  return e.has(o);
}, set: fe, deleteProperty: fe, getOwnPropertyDescriptor(e, o) {
  return { configurable: true, enumerable: true, get() {
    return e.get(o);
  }, set: fe, deleteProperty: fe };
}, ownKeys(e) {
  return e.keys();
} };
function Pe(e) {
  return "value" in e ? e.value : e;
}
function se() {
  for (var e = arguments.length, o = new Array(e), t = 0; t < e; t++) o[t] = arguments[t];
  return new Proxy({ get(n) {
    for (let r = o.length - 1; r >= 0; r--) {
      const i = Pe(o[r])[n];
      if (i !== void 0) return i;
    }
  }, has(n) {
    for (let r = o.length - 1; r >= 0; r--) if (n in Pe(o[r])) return true;
    return false;
  }, keys() {
    const n = [];
    for (let r = 0; r < o.length; r++) n.push(...Object.keys(Pe(o[r])));
    return [...Array.from(new Set(n))];
  } }, $n);
}
const Ve = Ze({ props: ["render", "props"], setup: (e) => () => typeof e.render == "function" || typeof e.render == "object" ? pt(e.render, e.props) : e.render });
function Xe(e) {
  return se(e, { data: R(e.data) });
}
function xn(e) {
  const o = gt(e.data), t = se({ state: {}, onStateChange: () => {
  }, renderFallbackValue: null, mergeOptions(i, l) {
    return o ? { ...i, ...l } : se(i, l);
  } }, o ? Xe(e) : e), n = mn(t);
  if (o) {
    const i = dt(e.data);
    Ye(i, () => {
      n.setState((l) => ({ ...l, data: i.value }));
    }, { immediate: true });
  }
  const r = ct(n.initialState);
  return ft(() => {
    n.setOptions((i) => {
      var l;
      const u = new Proxy({}, { get: (a, g) => r.value[g] });
      return se(i, o ? Xe(e) : e, { state: se(u, (l = e.state) != null ? l : {}), onStateChange: (a) => {
        a instanceof Function ? r.value = a(r.value) : r.value = a, e.onStateChange == null || e.onStateChange(a);
      } });
    });
  }), n;
}
const Pn = { slots: { root: "relative overflow-auto", base: "min-w-full", caption: "sr-only", thead: "relative", tbody: "isolate [&>tr]:data-[selectable=true]:hover:bg-elevated/50 [&>tr]:data-[selectable=true]:focus-visible:outline-primary", tfoot: "relative", tr: "data-[selected=true]:bg-elevated/50", th: "px-4 py-3.5 text-sm text-highlighted text-left rtl:text-right font-semibold [&:has([role=checkbox])]:pe-0", td: "p-4 text-sm text-muted whitespace-nowrap [&:has([role=checkbox])]:pe-0", separator: "absolute z-1 left-0 w-full h-px bg-(--ui-border-accented)", empty: "py-6 text-center text-sm text-muted", loading: "py-6 text-center" }, variants: { virtualize: { false: { base: "overflow-clip", tbody: "divide-y divide-default" } }, pinned: { true: { th: "sticky bg-default/75 z-1", td: "sticky bg-default/75 z-1" } }, sticky: { true: { thead: "sticky top-0 inset-x-0 bg-default/75 backdrop-blur z-1", tfoot: "sticky bottom-0 inset-x-0 bg-default/75 backdrop-blur z-1" }, header: { thead: "sticky top-0 inset-x-0 bg-default/75 backdrop-blur z-1" }, footer: { tfoot: "sticky bottom-0 inset-x-0 bg-default/75 backdrop-blur z-1" } }, loading: { true: { thead: "after:absolute after:z-1 after:h-px" } }, loadingAnimation: { carousel: "", "carousel-inverse": "", swing: "", elastic: "" }, loadingColor: { primary: "", secondary: "", success: "", info: "", warning: "", error: "", neutral: "" } }, compoundVariants: [{ loading: true, loadingColor: "primary", class: { thead: "after:bg-primary" } }, { loading: true, loadingColor: "secondary", class: { thead: "after:bg-secondary" } }, { loading: true, loadingColor: "success", class: { thead: "after:bg-success" } }, { loading: true, loadingColor: "info", class: { thead: "after:bg-info" } }, { loading: true, loadingColor: "warning", class: { thead: "after:bg-warning" } }, { loading: true, loadingColor: "error", class: { thead: "after:bg-error" } }, { loading: true, loadingColor: "neutral", class: { thead: "after:bg-neutral" } }, { loading: true, loadingColor: "neutral", class: { thead: "after:bg-inverted" } }, { loading: true, loadingAnimation: "carousel", class: { thead: "after:animate-[carousel_2s_ease-in-out_infinite] rtl:after:animate-[carousel-rtl_2s_ease-in-out_infinite]" } }, { loading: true, loadingAnimation: "carousel-inverse", class: { thead: "after:animate-[carousel-inverse_2s_ease-in-out_infinite] rtl:after:animate-[carousel-inverse-rtl_2s_ease-in-out_infinite]" } }, { loading: true, loadingAnimation: "swing", class: { thead: "after:animate-[swing_2s_ease-in-out_infinite]" } }, { loading: true, loadingAnimation: "elastic", class: { thead: "after:animate-[elastic_2s_ease-in-out_infinite]" } }], defaultVariants: { loadingColor: "primary", loadingAnimation: "carousel" } }, Vn = ["data-selected", "data-selectable", "data-expanded", "role", "tabindex", "onClick", "onPointerenter", "onContextmenu"], Mn = ["data-pinned", "colspan", "rowspan"], In = ["colspan"], zn = ["data-pinned", "scope", "colspan", "rowspan"], On = { key: 1 }, Dn = ["colspan"], An = { key: 2 }, En = ["colspan"], Hn = ["data-pinned", "colspan", "rowspan"], Gn = Object.assign({ inheritAttrs: false }, { __name: "UTable", props: xt({ as: { type: null, required: false }, data: { type: Array, required: false }, columns: { type: Array, required: false }, caption: { type: String, required: false }, meta: { type: Object, required: false }, virtualize: { type: [Boolean, Object], required: false, default: false }, empty: { type: String, required: false }, sticky: { type: [Boolean, String], required: false }, loading: { type: Boolean, required: false }, loadingColor: { type: null, required: false }, loadingAnimation: { type: null, required: false }, watchOptions: { type: Object, required: false, default: () => ({ deep: true }) }, globalFilterOptions: { type: Object, required: false }, columnFiltersOptions: { type: Object, required: false }, columnPinningOptions: { type: Object, required: false }, columnSizingOptions: { type: Object, required: false }, visibilityOptions: { type: Object, required: false }, sortingOptions: { type: Object, required: false }, groupingOptions: { type: Object, required: false }, expandedOptions: { type: Object, required: false }, rowSelectionOptions: { type: Object, required: false }, rowPinningOptions: { type: Object, required: false }, paginationOptions: { type: Object, required: false }, facetedOptions: { type: Object, required: false }, onSelect: { type: Function, required: false }, onHover: { type: Function, required: false }, onContextmenu: { type: [Function, Array], required: false }, class: { type: null, required: false }, ui: { type: Object, required: false }, state: { type: Object, required: false }, onStateChange: { type: Function, required: false }, renderFallbackValue: { type: null, required: false }, _features: { type: Array, required: false }, autoResetAll: { type: Boolean, required: false }, debugAll: { type: Boolean, required: false }, debugCells: { type: Boolean, required: false }, debugColumns: { type: Boolean, required: false }, debugHeaders: { type: Boolean, required: false }, debugRows: { type: Boolean, required: false }, debugTable: { type: Boolean, required: false }, defaultColumn: { type: Object, required: false }, getRowId: { type: Function, required: false }, getSubRows: { type: Function, required: false }, initialState: { type: Object, required: false }, mergeOptions: { type: Function, required: false } }, { globalFilter: { type: String }, globalFilterModifiers: {}, columnFilters: { type: Array }, columnFiltersModifiers: {}, columnOrder: { type: Array }, columnOrderModifiers: {}, columnVisibility: { type: Object }, columnVisibilityModifiers: {}, columnPinning: { type: Object }, columnPinningModifiers: {}, columnSizing: { type: Object }, columnSizingModifiers: {}, columnSizingInfo: { type: Object }, columnSizingInfoModifiers: {}, rowSelection: { type: Object }, rowSelectionModifiers: {}, rowPinning: { type: Object }, rowPinningModifiers: {}, sorting: { type: Array }, sortingModifiers: {}, grouping: { type: Array }, groupingModifiers: {}, expanded: { type: [Boolean, Object] }, expandedModifiers: {}, pagination: { type: Object }, paginationModifiers: {} }), emits: ["update:globalFilter", "update:columnFilters", "update:columnOrder", "update:columnVisibility", "update:columnPinning", "update:columnSizing", "update:columnSizingInfo", "update:rowSelection", "update:rowPinning", "update:sorting", "update:grouping", "update:expanded", "update:pagination"], setup(e, { expose: o }) {
  var _a;
  const t = e, n = mt(), { t: r } = St(), i = vt(), l = Ct("table", t), u = wt(t.data ?? [], ((_a = t.watchOptions) == null ? void 0 : _a.deep) !== false), a = ee(() => t.meta ?? {}), g = ee(() => c(t.columns ?? Object.keys(u.value[0] ?? {}).map((S) => ({ accessorKey: S, header: Rt(S) }))));
  function c(S) {
    return S.map(($) => {
      const w = { ...$ };
      return "columns" in w && w.columns && (w.columns = c(w.columns)), w.cell || (w.cell = ({ getValue: h }) => {
        const y = h();
        return y === "" || y === null || y === void 0 ? "\xA0" : String(y);
      }), w;
    });
  }
  const p = ee(() => {
    var _a2;
    return Be({ extend: Be(Pn), ...((_a2 = i.ui) == null ? void 0 : _a2.table) || {} })({ sticky: t.virtualize ? false : t.sticky, loading: t.loading, loadingColor: t.loadingColor, loadingAnimation: t.loadingAnimation, virtualize: !!t.virtualize });
  }), [d, s] = be(), [f, m] = be({ props: { row: { type: Object, required: true }, style: { type: Object, required: false } } }), F = ee(() => {
    function S($) {
      for (const w of $) if ("footer" in w || "columns" in w && S(w.columns)) return true;
      return false;
    }
    return S(g.value);
  }), _ = E(e, "globalFilter"), x = E(e, "columnFilters"), P = E(e, "columnOrder"), D = E(e, "columnVisibility"), I = E(e, "columnPinning"), q = E(e, "columnSizing"), Q = E(e, "columnSizingInfo"), W = E(e, "rowSelection"), te = E(e, "rowPinning"), ne = E(e, "sorting"), J = E(e, "grouping"), me = E(e, "expanded"), Se = E(e, "pagination"), ve = je("rootRef"), Le = je("tableRef"), lt = ht(_t(t, "_features", "autoResetAll", "debugAll", "debugCells", "debugColumns", "debugHeaders", "debugRows", "debugTable", "defaultColumn", "getRowId", "getSubRows", "initialState", "mergeOptions", "renderFallbackValue")), T = xn({ ...lt.value, get data() {
    return u.value;
  }, get columns() {
    return g.value;
  }, meta: a.value, getCoreRowModel: Sn(), ...t.globalFilterOptions || {}, ..._.value !== void 0 && { onGlobalFilterChange: (S) => A(S, _) }, ...t.columnFiltersOptions || {}, getFilteredRowModel: _n(), ...x.value !== void 0 && { onColumnFiltersChange: (S) => A(S, x) }, ...P.value !== void 0 && { onColumnOrderChange: (S) => A(S, P) }, ...t.visibilityOptions || {}, ...D.value !== void 0 && { onColumnVisibilityChange: (S) => A(S, D) }, ...t.columnPinningOptions || {}, ...I.value !== void 0 && { onColumnPinningChange: (S) => A(S, I) }, ...t.columnSizingOptions || {}, ...q.value !== void 0 && { onColumnSizingChange: (S) => A(S, q) }, ...Q.value !== void 0 && { onColumnSizingInfoChange: (S) => A(S, Q) }, ...t.rowSelectionOptions || {}, ...W.value !== void 0 && { onRowSelectionChange: (S) => A(S, W) }, ...t.rowPinningOptions || {}, ...te.value !== void 0 && { onRowPinningChange: (S) => A(S, te) }, ...t.sortingOptions || {}, getSortedRowModel: Fn(), ...ne.value !== void 0 && { onSortingChange: (S) => A(S, ne) }, ...t.groupingOptions || {}, ...J.value !== void 0 && { onGroupingChange: (S) => A(S, J) }, ...t.expandedOptions || {}, getExpandedRowModel: vn(), ...me.value !== void 0 && { onExpandedChange: (S) => A(S, me) }, ...t.paginationOptions || {}, ...Se.value !== void 0 && { onPaginationChange: (S) => A(S, Se) }, ...t.facetedOptions || {}, state: { get globalFilter() {
    return _.value;
  }, get columnFilters() {
    return x.value;
  }, get columnOrder() {
    return P.value;
  }, get columnVisibility() {
    return D.value;
  }, get columnPinning() {
    return I.value;
  }, get expanded() {
    return me.value;
  }, get rowSelection() {
    return W.value;
  }, get sorting() {
    return ne.value;
  }, get grouping() {
    return J.value;
  }, get rowPinning() {
    return te.value;
  }, get columnSizing() {
    return q.value;
  }, get columnSizingInfo() {
    return Q.value;
  }, get pagination() {
    return Se.value;
  } } }), oe = ee(() => T.getRowModel().rows), qe = Ft(() => yt(typeof t.virtualize == "boolean" ? {} : t.virtualize, { estimateSize: 65, overscan: 12 })), N = !!t.virtualize && Vt({ ...qe.value, get count() {
    return oe.value.length;
  }, getScrollElement: () => {
    var _a2;
    return (_a2 = ve.value) == null ? void 0 : _a2.$el;
  }, estimateSize: (S) => {
    const $ = qe.value.estimateSize;
    return typeof $ == "function" ? $(S) : $;
  } }), st = ee(() => {
    if (!N) return 0;
    const S = N.value.getVirtualItems();
    return (S == null ? void 0 : S.length) ? S.reduce(($, w) => $ + w.size, 0) : 0;
  });
  function A(S, $) {
    $.value = typeof S == "function" ? S($.value) : S;
  }
  function ut(S, $) {
    if (!t.onSelect) return;
    const w = S.target;
    w.closest("button") || w.closest("a") || (S.preventDefault(), S.stopPropagation(), t.onSelect(S, $));
  }
  function ke(S, $) {
    t.onHover && t.onHover(S, $);
  }
  function at(S, $) {
    t.onContextmenu && (Array.isArray(t.onContextmenu) ? t.onContextmenu.forEach((w) => w(S, $)) : t.onContextmenu(S, $));
  }
  function k(S, $) {
    return typeof S == "function" ? S($) : S;
  }
  function Ce(S) {
    const $ = {}, w = S.getIsPinned();
    return w === "left" ? $.left = `${S.getStart("left")}px` : w === "right" && ($.right = `${S.getAfter("right")}px`), $;
  }
  return Ye(() => t.data, () => {
    u.value = t.data ? [...t.data] : [];
  }, t.watchOptions), o({ get $el() {
    var _a2;
    return (_a2 = ve.value) == null ? void 0 : _a2.$el;
  }, tableRef: Le, tableApi: T }), (S, $) => {
    var _a2;
    return V(), M(B, null, [Z(R(f), null, { default: we(({ row: w, style: h }) => {
      var _a3, _b, _c, _d, _e2, _f, _g;
      return [H("tr", { "data-selected": w.getIsSelected(), "data-selectable": !!t.onSelect || !!t.onHover || !!t.onContextmenu, "data-expanded": w.getIsExpanded(), role: t.onSelect ? "button" : void 0, tabindex: t.onSelect ? 0 : void 0, "data-slot": "tr", class: z(p.value.tr({ class: [(_a3 = R(l)) == null ? void 0 : _a3.tr, k((_c = (_b = R(T).options.meta) == null ? void 0 : _b.class) == null ? void 0 : _c.tr, w)] })), style: X([k((_e2 = (_d = R(T).options.meta) == null ? void 0 : _d.style) == null ? void 0 : _e2.tr, w), h]), onClick: (y) => ut(y, w), onPointerenter: (y) => ke(y, w), onPointerleave: $[0] || ($[0] = (y) => ke(y, null)), onContextmenu: (y) => at(y, w) }, [(V(true), M(B, null, Y(w.getVisibleCells(), (y) => {
        var _a4, _b2, _c2, _d2, _e3, _f2, _g2, _h, _i;
        return V(), M("td", { key: y.id, "data-pinned": y.column.getIsPinned(), colspan: k((_b2 = (_a4 = y.column.columnDef.meta) == null ? void 0 : _a4.colspan) == null ? void 0 : _b2.td, y), rowspan: k((_d2 = (_c2 = y.column.columnDef.meta) == null ? void 0 : _c2.rowspan) == null ? void 0 : _d2.td, y), "data-slot": "td", class: z(p.value.td({ class: [(_e3 = R(l)) == null ? void 0 : _e3.td, k((_g2 = (_f2 = y.column.columnDef.meta) == null ? void 0 : _f2.class) == null ? void 0 : _g2.td, y)], pinned: !!y.column.getIsPinned() })), style: X([Ce(y.column), k((_i = (_h = y.column.columnDef.meta) == null ? void 0 : _h.style) == null ? void 0 : _i.td, y)]) }, [b(S.$slots, `${y.column.id}-cell`, ae({ ref_for: true }, y.getContext()), () => [Z(R(Ve), { render: y.column.columnDef.cell, props: y.getContext() }, null, 8, ["render", "props"])])], 14, Mn);
      }), 128))], 46, Vn), w.getIsExpanded() ? (V(), M("tr", { key: 0, "data-slot": "tr", class: z(p.value.tr({ class: [(_f = R(l)) == null ? void 0 : _f.tr] })) }, [H("td", { colspan: w.getAllCells().length, "data-slot": "td", class: z(p.value.td({ class: [(_g = R(l)) == null ? void 0 : _g.td] })) }, [b(S.$slots, "expanded", { row: w })], 10, In)], 2)) : re("", true)];
    }), _: 3 }), Z(R(d), null, { default: we(() => {
      var _a3, _b, _c, _d, _e2, _f, _g, _h, _i;
      return [H("table", { ref_key: "tableRef", ref: Le, "data-slot": "base", class: z(p.value.base({ class: [(_a3 = R(l)) == null ? void 0 : _a3.base] })) }, [e.caption || n.caption ? (V(), M("caption", { key: 0, "data-slot": "caption", class: z(p.value.caption({ class: [(_b = R(l)) == null ? void 0 : _b.caption] })) }, [b(S.$slots, "caption", {}, () => [Te(Ne(e.caption), 1)])], 2)) : re("", true), H("thead", { "data-slot": "thead", class: z(p.value.thead({ class: [(_c = R(l)) == null ? void 0 : _c.thead] })) }, [(V(true), M(B, null, Y(R(T).getHeaderGroups(), (w) => {
        var _a4;
        return V(), M("tr", { key: w.id, "data-slot": "tr", class: z(p.value.tr({ class: [(_a4 = R(l)) == null ? void 0 : _a4.tr] })) }, [(V(true), M(B, null, Y(w.headers, (h) => {
          var _a5, _b2, _c2, _d2, _e3;
          return V(), M("th", { key: h.id, "data-pinned": h.column.getIsPinned(), scope: h.colSpan > 1 ? "colgroup" : "col", colspan: h.colSpan > 1 ? h.colSpan : void 0, rowspan: h.rowSpan > 1 ? h.rowSpan : void 0, "data-slot": "th", class: z(p.value.th({ class: [(_a5 = R(l)) == null ? void 0 : _a5.th, k((_c2 = (_b2 = h.column.columnDef.meta) == null ? void 0 : _b2.class) == null ? void 0 : _c2.th, h)], pinned: !!h.column.getIsPinned() })), style: X([Ce(h.column), k((_e3 = (_d2 = h.column.columnDef.meta) == null ? void 0 : _d2.style) == null ? void 0 : _e3.th, h)]) }, [b(S.$slots, `${h.id}-header`, ae({ ref_for: true }, h.getContext()), () => [h.isPlaceholder ? re("", true) : (V(), ie(R(Ve), { key: 0, render: h.column.columnDef.header, props: h.getContext() }, null, 8, ["render", "props"]))])], 14, zn);
        }), 128))], 2);
      }), 128)), H("tr", { "data-slot": "separator", class: z(p.value.separator({ class: [(_d = R(l)) == null ? void 0 : _d.separator] })) }, null, 2)], 2), H("tbody", { "data-slot": "tbody", class: z(p.value.tbody({ class: [(_e2 = R(l)) == null ? void 0 : _e2.tbody] })) }, [b(S.$slots, "body-top"), oe.value.length ? (V(), M(B, { key: 0 }, [R(N) ? (V(true), M(B, { key: 0 }, Y(R(N).getVirtualItems(), (w, h) => {
        var _a4;
        return V(), ie(R(m), { key: (_a4 = oe.value[w.index]) == null ? void 0 : _a4.id, row: oe.value[w.index], style: X({ height: `${w.size}px`, transform: `translateY(${w.start - h * w.size}px)` }) }, null, 8, ["row", "style"]);
      }), 128)) : (V(true), M(B, { key: 1 }, Y(oe.value, (w) => (V(), ie(R(m), { key: w.id, row: w }, null, 8, ["row"]))), 128))], 64)) : e.loading && n.loading ? (V(), M("tr", On, [H("td", { colspan: R(T).getAllLeafColumns().length, "data-slot": "loading", class: z(p.value.loading({ class: (_f = R(l)) == null ? void 0 : _f.loading })) }, [b(S.$slots, "loading")], 10, Dn)])) : (V(), M("tr", An, [H("td", { colspan: R(T).getAllLeafColumns().length, "data-slot": "empty", class: z(p.value.empty({ class: (_g = R(l)) == null ? void 0 : _g.empty })) }, [b(S.$slots, "empty", {}, () => [Te(Ne(e.empty || R(r)("table.noData")), 1)])], 10, En)])), b(S.$slots, "body-bottom")], 2), F.value ? (V(), M("tfoot", { key: 1, "data-slot": "tfoot", class: z(p.value.tfoot({ class: [(_h = R(l)) == null ? void 0 : _h.tfoot] })), style: X(R(N) ? { transform: `translateY(${R(N).getTotalSize() - st.value}px)` } : void 0) }, [H("tr", { "data-slot": "separator", class: z(p.value.separator({ class: [(_i = R(l)) == null ? void 0 : _i.separator] })) }, null, 2), (V(true), M(B, null, Y(R(T).getFooterGroups(), (w) => {
        var _a4;
        return V(), M("tr", { key: w.id, "data-slot": "tr", class: z(p.value.tr({ class: [(_a4 = R(l)) == null ? void 0 : _a4.tr] })) }, [(V(true), M(B, null, Y(w.headers, (h) => {
          var _a5, _b2, _c2, _d2, _e3;
          return V(), M("th", { key: h.id, "data-pinned": h.column.getIsPinned(), colspan: h.colSpan > 1 ? h.colSpan : void 0, rowspan: h.rowSpan > 1 ? h.rowSpan : void 0, "data-slot": "th", class: z(p.value.th({ class: [(_a5 = R(l)) == null ? void 0 : _a5.th, k((_c2 = (_b2 = h.column.columnDef.meta) == null ? void 0 : _b2.class) == null ? void 0 : _c2.th, h)], pinned: !!h.column.getIsPinned() })), style: X([Ce(h.column), k((_e3 = (_d2 = h.column.columnDef.meta) == null ? void 0 : _d2.style) == null ? void 0 : _e3.th, h)]) }, [b(S.$slots, `${h.id}-footer`, ae({ ref_for: true }, h.getContext()), () => [h.isPlaceholder ? re("", true) : (V(), ie(R(Ve), { key: 0, render: h.column.columnDef.footer, props: h.getContext() }, null, 8, ["render", "props"]))])], 14, Hn);
        }), 128))], 2);
      }), 128))], 6)) : re("", true)], 2)];
    }), _: 3 }), Z(R($t), ae({ ref_key: "rootRef", ref: ve, as: e.as }, S.$attrs, { "data-slot": "root", class: p.value.root({ class: [(_a2 = R(l)) == null ? void 0 : _a2.root, t.class] }) }), { default: we(() => [R(N) ? (V(), M("div", { key: 0, style: X({ height: `${R(N).getTotalSize()}px` }) }, [Z(R(s))], 4)) : (V(), ie(R(s), { key: 1 }))]), _: 1 }, 16, ["as", "class"])], 64);
  };
} }), Ln = { class: "space-y-8" }, qn = Ze({ __name: "RpcOpenServers", async setup(e) {
  let o, t;
  const { data: n } = ([o, t] = Pt(() => Mt("/api/rpc-servers", { key: "rpc-servers", default: () => ({ mainnet: [], testnet: [] }) }, "$ZVdbUqjmoF")), o = await o, t(), o), r = [{ accessorKey: "name", header: "Server" }, { accessorKey: "endpoint", header: "URL" }, { accessorKey: "maintainer", header: "Maintainer" }];
  return (i, l) => {
    const u = Gn;
    return V(), M("div", Ln, [H("section", null, [l[0] || (l[0] = H("h2", null, "Mainnet", -1)), Z(u, { data: R(n).mainnet, columns: r, class: "overflow-hidden rounded-[1.25rem]" }, null, 8, ["data"])]), H("section", null, [l[1] || (l[1] = H("h2", null, "Testnet", -1)), Z(u, { data: R(n).testnet, columns: r, class: "overflow-hidden rounded-[1.25rem]" }, null, 8, ["data"])])]);
  };
} }), jn = Object.assign(qn, { __name: "RpcOpenServers" });
export {
  jn as default
};
