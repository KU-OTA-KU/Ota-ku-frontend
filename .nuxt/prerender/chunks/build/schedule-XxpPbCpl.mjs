import { defineComponent, useSSRContext } from 'file://Z:/Ota-ku-nuxt/node_modules/vue/index.mjs';
import { _ as _export_sfc } from './server.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/h3/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/devalue/index.js';
import 'file://Z:/Ota-ku-nuxt/node_modules/ufo/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/vue/server-renderer/index.mjs';
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
  name: "CatalogView"
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/schedule.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const schedule = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { schedule as default };
//# sourceMappingURL=schedule-XxpPbCpl.mjs.map
