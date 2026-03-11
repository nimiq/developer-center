import { B as c, R as d, c as i, x as l, e as u, T as p, n as b, S as r, k as m } from "#entry";
const f = { base: "px-1.5 py-0.5 text-sm font-mono font-medium rounded-md inline-block", variants: { color: { primary: "border border-primary/25 bg-primary/10 text-primary", secondary: "border border-secondary/25 bg-secondary/10 text-secondary", success: "border border-success/25 bg-success/10 text-success", info: "border border-info/25 bg-info/10 text-info", warning: "border border-warning/25 bg-warning/10 text-warning", error: "border border-error/25 bg-error/10 text-error", neutral: "border border-muted text-highlighted bg-muted" } }, defaultVariants: { color: "neutral" } }, x = { __name: "ProseCode", props: { lang: { type: String, required: false }, color: { type: null, required: false }, class: { type: null, required: false }, ui: { type: Object, required: false } }, setup(o) {
  const e = o, s = c(), t = d("prose.code", e), n = i(() => {
    var _a, _b;
    return r({ extend: r(f), ...((_b = (_a = s.ui) == null ? void 0 : _a.prose) == null ? void 0 : _b.code) || {} });
  });
  return (a, g) => {
    var _a;
    return m(), l("code", { class: p(n.value({ class: [(_a = b(t)) == null ? void 0 : _a.base, (e.class || "").split(",").join(" ")], color: e.color })) }, [u(a.$slots, "default")], 2);
  };
} };
export {
  x as default
};
