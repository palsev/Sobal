import {
  u as O
} from "./useDarkMode-2a25fc5b.js";
import {
  d as M,
  q as B,
  D as t,
  b as s,
  x as n,
  B as S,
  r as A,
  o as C,
  p as F,
  c as b,
  l as w,
  y as a,
  h as D,
  f as m,
  A as f,
  F as N,
  i as q
} from "./runtime-core.esm-bundler-24a2b16f.js";
import {
  _ as T
} from "./BalPopover-e1e06c58.js";
import {
  aq as W,
  au as G,
  aw as H,
  ao as J
} from "./BalBtn-a3a093af.js";
import {
  u as K
} from "./tailwind.config-93ced0cc.js";
import {
  u as Q,
  R as z,
  c as I
} from "./connector-d867b6ec.js";
import {
  u as X
} from "./useTransactions-19512b92.js";
import {
  c as x
} from "./urls-ace5408b.js";
import {
  h as Y
} from "./useGnosisSafeApp-4db73fba.js";
import {
  u as Z
} from "./useBreakpoints-06419e03.js";
const ee = "/assets/logo-dark-4c899b85.svg",
  te = "/assets/logo-light-32c03689.svg",
  oe = {
    key: 1,
    src: te,
    width: "30",
    class: "mr-2"
  },
  Se = M({
    __name: "AppIcon",
    props: {
      forceDark: {
        type: Boolean,
        default: !1
      },
      landing: {
        type: Boolean,
        default: !1
      }
    },
    setup(r) {
      const u = r,
        {
          darkMode: h
        } = O(),
        _ = B(() => u.forceDark ? !0 : h.value);
      return (i, P) => t(_) ? (s(), n("img", {
        key: 0,
        src: ee,
        width: "30",
        class: S({
          "mr-2": !r.landing
        })
      }, null, 2)) : (s(), n("img", oe))
    }
  }),
  se = {
    class: "flex flex-row place-items-center"
  },
  re = ["src", "alt"],
  ae = {
    key: 0,
    class: "hidden lg:block ml-1"
  },
  ne = {
    class: "py-2 px-3 text-sm font-medium text-gray-500 whitespace-nowrap bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-900"
  },
  le = ["href"],
  ce = {
    class: "flex items-center"
  },
  ie = ["src", "alt"],
  ue = {
    class: "ml-1 font-medium"
  },
  de = {
    class: "py-2 px-3 text-sm font-medium text-gray-500 whitespace-nowrap bg-gray-50 dark:bg-gray-800 border-b dark:border-gray-900"
  },
  me = ["href"],
  fe = {
    class: "flex items-center"
  },
  pe = ["src", "alt"],
  ge = {
    class: "ml-1 font-medium"
  },
  Pe = M({
    __name: "AppNavNetworkSelect",
    props: {
      hideLabel: {
        type: Boolean,
        default: !1
      },
      alignMenu: {
        default: "right"
      },
      noBg: {
        type: Boolean,
        default: !1
      },
      noPadding: {
        type: Boolean,
        default: !1
      },
      size: {
        default: 22
      }
    },
    setup(r) {
      const {
        networkId: u,
        networkConfig: h
      } = Q(), {
        chainId: _
      } = W(), i = K(), {
        addNotification: P
      } = X(), {
        t: L
      } = G(), {
        isNarrowMobile: k
      } = Z();

      function $(e) {
        return {
          id: e.slug,
          name: e.chainName,
          networkSlug: e.slug,
          key: e.key,
          testNetwork: e.testNetwork
        }
      }
      const V = Object.values(z).filter(e => e.visibleInUI && !e.testNetwork).map($),
        p = A(V),
        j = Object.values(z).filter(e => e.visibleInUI && e.testNetwork).map($),
        E = A(j),
        R = B(() => p.value.map(e => e.key).includes(u.value.toString())),
        d = B(() => p.value.find(e => !R.value && e.id === "ethereum" ? !0 : v(e)));
      C(async () => {
        var e;
        await i.isReady(), (e = i.currentRoute.value.query) != null && e.poolNetworkAlert && (P({
          type: "error",
          title: "",
          message: `${L("poolDoesntExist")} ${h.chainName}`
        }), i.replace({
          name: "home",
          query: {}
        }))
      }), F(_, (e, g) => {
        if (e && g && g !== e && u.value !== e) {
          const l = p.value.find(c => Number(c.key) === e);
          l && (localStorage.setItem("networkId", e.toString()), Y(y(l)))
        }
      });

      function y(e) {
        var c;
        if (["pool", "create-pool", "add-liquidity", "withdraw", "migrate-pool"].includes(((c = i.currentRoute.value.name) == null ? void 0 : c.toString()) ?? "")) return null; //???
        const l = i.currentRoute.value;
        return i.resolve({
          name: l.name ?? "home",
          params: {
            ...l.params,
            networkSlug: e.networkSlug
          },
          query: l.query
        }).href
      }

      function v(e) {
        return !R.value && e.id === "ethereum" ? !0 : u.value.toString() === e.key
      }
      return (e, g) => {
        const l = H,
          c = J,
          U = T;
        return s(), b(U, {
          noPad: !t(k),
          fullscreen: t(k),
          align: r.alignMenu
        }, {
          activator: w(() => [a("div", se, [D(l, {
            color: r.noBg ? "transparent" : "white",
            size: r.noPadding ? "base-noPad" : "md",
            circle: ""
          }, {
            default: w(() => [t(d) ? (s(), n("img", {
              key: 0,
              src: t(x)(t(d).id),
              alt: t(d).name,
              class: S(`rounded-full h-[${r.size}px] w-[${r.size}px]`)
            }, null, 10, re)) : m("", !0)]),
            _: 1
          }, 8, ["color", "size"]), D(c, {
            name: "chevron-down",
            size: "sm",
            color: r.noBg ? "white" : ""
          }, null, 8, ["color"]), !r.hideLabel && t(d) ? (s(), n("span", ae, f(t(d).name), 1)) : m("", !0)])]),
          default: w(() => [a("div", {
            role: "menu",
            class: S(["flex overflow-hidden flex-col rounded-lg", [{
              "w-52": !t(k)
            }]])
          }, [a("div", ne, f(e.$t("networkSelection")) + ": ", 1), (s(!0), n(N, null, q(p.value, o => (s(), n("a", {
            key: o.id,
            href: y(o),
            class: "flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-850 cursor-pointer"
          }, [a("div", ce, [a("img", {
            src: t(x)(o.id),
            alt: o.name,
            class: "mr-2 w-6 h-6 rounded-full"
          }, null, 8, ie), a("span", ue, f(o.name), 1)]), v(o) ? (s(), b(c, {
            key: 0,
            name: "check",
            class: "text-blue-500 dark:text-blue-400"
          })) : m("", !0)], 8, le))), 128)), t(I).env.APP_ENV === "development" || t(I).env.APP_ENV === "staging" ? (s(), n(N, {
            key: 0
          }, [a("div", de, f(e.$t("testnets")) + ": ", 1), (s(!0), n(N, null, q(E.value, o => (s(), n("a", {
            key: o.id,
            href: y(o),
            class: "flex justify-between items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-850 cursor-pointer"
          }, [a("div", fe, [a("img", {
            src: t(x)(o.id),
            alt: o.name,
            class: "mr-2 w-6 h-6 rounded-full"
          }, null, 8, pe), a("span", ge, f(o.name), 1)]), v(o) ? (s(), b(c, {
            key: 0,
            name: "check",
            class: "text-blue-500 dark:text-blue-400"
          })) : m("", !0)], 8, me))), 128))], 64)) : m("", !0)], 2)]),
          _: 1
        }, 8, ["noPad", "fullscreen", "align"])
      }
    }
  });
export {
  Pe as _, Se as a
};
//# sourceMappingURL=AppNavNetworkSelect.vue_vue_type_script_setup_true_lang-0b92326f.js.map