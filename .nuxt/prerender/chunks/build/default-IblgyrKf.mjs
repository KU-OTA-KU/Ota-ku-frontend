import { _ as _export_sfc, ad as __nuxt_component_0 } from './server.mjs';
import { u as useHead } from './index-xyyCGchu.mjs';
import { defineComponent, useSSRContext } from 'file://Z:/Ota-ku-nuxt/node_modules/vue/index.mjs';
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
import 'file://Z:/Ota-ku-nuxt/node_modules/defu/dist/defu.mjs';
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
import 'file://Z:/Ota-ku-nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/nprogress/nprogress.js';

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
//# sourceMappingURL=default-IblgyrKf.mjs.map
