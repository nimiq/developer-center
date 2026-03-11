import { u as m, d as p, _ } from "./EJ4J3pYY.js";
import { f as d, E as g, G as f, c as v, Y as C, Z as y, n as s, l as h, A as I, $ as k, a0 as w, k as x } from "#entry";
import "./6GRe1c0h.js";
import "./iik6CYzq.js";
const R = d({ __name: "landing", async setup(A) {
  var _a, _b, _c, _d, _e, _f;
  let t, a;
  const n = g(), { locale: u, isEnabled: l } = f(), o = v(() => l.value ? `landing_${u.value}` : "landing"), { data: e } = ([t, a] = C(() => k(o.value, () => w(o.value).path(n.path).first(), "$6EAs-m0-2t")), t = await t, a(), t);
  if (!e.value) throw y({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  const c = ((_a = e.value.seo) == null ? void 0 : _a.title) || e.value.title, r = ((_b = e.value.seo) == null ? void 0 : _b.description) || e.value.description;
  return m({ title: c, description: r, type: "website", ogImage: (_d = (_c = e.value) == null ? void 0 : _c.seo) == null ? void 0 : _d.ogImage }), ((_f = (_e = e.value) == null ? void 0 : _e.seo) == null ? void 0 : _f.ogImage) || p("Landing", {}), (E, $) => {
    const i = _;
    return s(e) ? (x(), h(i, { key: 0, value: s(e) }, null, 8, ["value"])) : I("", true);
  };
} });
export {
  R as default
};
