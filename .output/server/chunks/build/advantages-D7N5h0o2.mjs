import { _ as __nuxt_component_0 } from './index-h94hsqyg.mjs';
import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '@unhead/shared';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';
import 'nprogress';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "advantages",
  __ssrInlineRender: true,
  setup(__props) {
    const advantages2 = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "streaming__features" }, _attrs))} data-v-819ed25c><div class="vlada-container" data-v-819ed25c><div class="streaming__features-top" data-v-819ed25c><div class="streaming__features-top-title" data-v-819ed25c><h3 data-aos="fade-up" data-v-819ed25c>${ssrInterpolate(_ctx.$t("welcome.advantages.title"))}</h3><p data-aos="fade-up" data-aos-delay="100" data-v-819ed25c>${ssrInterpolate(_ctx.$t("welcome.advantages.description"))}</p></div></div><div class="streaming__features-content" data-v-819ed25c><!--[-->`);
      ssrRenderList(advantages2.value, (device, index) => {
        _push(`<div class="streaming__features-card" data-aos="fade-up" data-aos-delay="200" data-v-819ed25c><div class="streaming__features-card-inner" data-v-819ed25c><div class="streaming__features-card-gradient" data-v-819ed25c></div><div class="streaming__features-card-icon-name" data-v-819ed25c><div class="streaming__features-card-icon" data-v-819ed25c>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: device.icon
        }, null, _parent));
        _push(`</div><h4 data-v-819ed25c>${ssrInterpolate(device.title)}</h4></div><p class="streaming__features-card-description" data-v-819ed25c>${ssrInterpolate(device.description)}</p></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/welcome/advantages.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const advantages = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-819ed25c"]]);

export { advantages as default };
//# sourceMappingURL=advantages-D7N5h0o2.mjs.map
