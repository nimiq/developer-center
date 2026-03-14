import { u as m, d as p, _ } from "./YN0tvUDC.js";
import { f as d, T as g, V as v, c as f, a6 as C, a7 as y, p as s, m as h, B as I, a8 as w, a9 as x, l as k } from "#entry";
import "./BiwnguJD.js";
import "./iik6CYzq.js";
const N = d({ __name: "landing", async setup(B) {
  var _a, _b, _c, _d, _e, _f;
  let a, t;
  const n = g(), { locale: u, isEnabled: l } = v(), o = f(() => l.value ? `landing_${u.value}` : "landing"), { data: e } = ([a, t] = C(() => w(o.value, () => x(o.value).path(n.path).first(), "$vVQqWXmrJ5")), a = await a, t(), a);
  if (!e.value) throw y({ statusCode: 404, statusMessage: "Page not found", fatal: true });
  const r = ((_a = e.value.seo) == null ? void 0 : _a.title) || e.value.title, c = ((_b = e.value.seo) == null ? void 0 : _b.description) || e.value.description;
  return m({ title: r, description: c, type: "website", ogImage: (_d = (_c = e.value) == null ? void 0 : _c.seo) == null ? void 0 : _d.ogImage }), ((_f = (_e = e.value) == null ? void 0 : _e.seo) == null ? void 0 : _f.ogImage) || p("Landing", {}), (V, b) => {
    const i = _;
    return s(e) ? (k(), h(i, { key: 0, value: s(e) }, null, 8, ["value"])) : I("", true);
  };
} });
export {
  N as default
};
