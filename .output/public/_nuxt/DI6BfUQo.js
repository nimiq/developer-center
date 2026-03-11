import { u as p, d as m, _ } from "./C1COEaeA.js";
import { f as d, E as g, G as f, c as v, Y as y, Z as C, n, l as h, A as I, $ as k, a0 as w, k as x } from "#entry";
import "./6GRe1c0h.js";
import "./iik6CYzq.js";
const R = d({ __name: "landing", async setup(E) {
  var _a, _b, _c, _d, _e, _f;
  let t, a;
  const s = g(), { locale: u, isEnabled: l } = f(), o = v(() => l.value ? `landing_${u.value}` : "landing"), { data: e } = ([t, a] = y(() => k(o.value, () => w(o.value).path(s.path).first(), "$YyjHZbUE_f")), t = await t, a(), t);
  if (!e.value) throw C({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  const c = ((_a = e.value.seo) == null ? void 0 : _a.title) || e.value.title, r = ((_b = e.value.seo) == null ? void 0 : _b.description) || e.value.description;
  return p({ title: c, description: r, type: "website", ogImage: (_d = (_c = e.value) == null ? void 0 : _c.seo) == null ? void 0 : _d.ogImage }), ((_f = (_e = e.value) == null ? void 0 : _e.seo) == null ? void 0 : _f.ogImage) || m("Landing", {}), (b, A) => {
    const i = _;
    return n(e) ? (x(), h(i, { key: 0, value: n(e) }, null, 8, ["value"])) : I("", true);
  };
} });
export {
  R as default
};
