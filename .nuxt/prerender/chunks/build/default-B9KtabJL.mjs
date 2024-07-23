import { defineComponent, provide, shallowReactive, h, ref, inject, watch, Suspense, nextTick, Fragment, Transition, useSSRContext } from 'file://Z:/Ota-ku-nuxt/node_modules/vue/index.mjs';
import { RouterView } from 'file://Z:/Ota-ku-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import { defu } from 'file://Z:/Ota-ku-nuxt/node_modules/defu/dist/defu.mjs';
import { aU as PageRouteSymbol, aV as useNuxtApp, aW as LayoutMetaSymbol, aX as generateRouteKey$1, aY as appPageTransition, aZ as appKeepalive, a_ as _wrapIf, a$ as wrapInKeepAlive, b0 as toArray$1, ak as _export_sfc } from './server.mjs';
import { u as useHead } from './index-DB2VMhIb.mjs';
import { App } from 'file://Z:/Ota-ku-nuxt/node_modules/@capacitor/app/dist/plugin.cjs.js';
import { ssrRenderComponent } from 'file://Z:/Ota-ku-nuxt/node_modules/vue/server-renderer/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/h3/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/devalue/index.js';
import 'file://Z:/Ota-ku-nuxt/node_modules/ufo/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/destr/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/hookable/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/klona/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/scule/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/ohash/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/unstorage/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Z:/Ota-ku-nuxt/node_modules/nuxt/dist/core/runtime/nitro/cache-driver.js';
import 'file://Z:/Ota-ku-nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://Z:/Ota-ku-nuxt/node_modules/pathe/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/unhead/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/unctx/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/nprogress/nprogress.js';

const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, slots, expose }) {
    const nuxtApp = useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          var _a, _b, _c, _d;
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!((_b = (_a = props.transition) != null ? _a : routeProps.route.meta.pageTransition) != null ? _b : appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = (_d = (_c = props.keepalive) != null ? _c : routeProps.route.meta.keepalive) != null ? _d : appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: slots.default ? h(Fragment, void 0, slots.default(routeProps)) : routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray$1(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _sfc_main = defineComponent({
  name: "default",
  data() {
    return {
      progress: 0
    };
  },
  setup() {
    useHead({
      meta: [
        { name: "author", content: "ota-ku" },
        { name: "language", content: "RU" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "600" },
        { property: "ot:image:type", content: "image/png" },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "ru" },
        { name: "topic", content: "ota-ku, \u0430\u043D\u0438\u043C\u0435 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C, \u0430\u043D\u0438\u043C\u0435, \u043B\u0443\u0447\u0448\u0438\u0435 \u0430\u043D\u0438\u043C\u0435 \u043E\u043D\u043B\u0430\u0439\u043D \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E, \u043E\u0442\u0430-\u043A\u0443, \u0441\u0430\u0439\u0442 \u0430\u043D\u0438\u043C\u0435 \u043E\u0442\u0430\u043A\u0443, \u043B\u0443\u0447\u0448\u0438\u0435 \u0442\u043E\u043F \u0430\u043D\u0438\u043C\u0435 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C" },
        { name: "keywords", content: "Ota-ku - \u0422\u0432\u043E\u0439 \u041B\u0438\u0447\u043D\u044B\u0439 \u041F\u043E\u0440\u0442\u0430\u043B \u0432 \u041C\u0438\u0440 \u0410\u043D\u0438\u043C\u0435, \u0430\u043D\u0438\u043C\u0435 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C, \u0430\u043D\u0438\u043C\u0435, \u043B\u0443\u0447\u0448\u0438\u0435 \u0430\u043D\u0438\u043C\u0435 \u043E\u043D\u043B\u0430\u0439\u043D \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E, \u043E\u0442\u0430-\u043A\u0443, \u0441\u0430\u0439\u0442 \u0430\u043D\u0438\u043C\u0435 \u043E\u0442\u0430\u043A\u0443, \u043B\u0443\u0447\u0448\u0438\u0435 \u0442\u043E\u043F \u0430\u043D\u0438\u043C\u0435 \u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C" }
      ]
    });
    return {};
  },
  mounted() {
    let lastBackPress = 0;
    App.addListener("backButton", () => {
      const currentTime = (/* @__PURE__ */ new Date()).getTime();
      if (currentTime - lastBackPress < 2e3) {
        App.exitApp();
      } else {
        lastBackPress = currentTime;
        (void 0).history.back();
      }
    });
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtPage = __nuxt_component_0;
  _push(ssrRenderComponent(_component_NuxtPage, _attrs, null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-B9KtabJL.mjs.map
