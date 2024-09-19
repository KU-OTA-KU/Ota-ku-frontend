import { _ as __nuxt_component_0$2 } from './index-CJ2GqwTN.mjs';
import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './index-h94hsqyg.mjs';
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
import 'lodash/throttle.js';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "subscription",
  __ssrInlineRender: true,
  setup(__props) {
    const subscriptions = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_vlada_button = __nuxt_component_0$2;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "subscription" }, _attrs))} data-v-41d5b01a><div class="vlada-container" data-v-41d5b01a><div class="subscription__top" data-v-41d5b01a><div class="subscription__top-title" data-v-41d5b01a><h3 data-aos="fade-up" data-v-41d5b01a>${ssrInterpolate(_ctx.$t("welcome.subscription.title"))}</h3><p data-aos="fade-up" data-aos-delay="100" data-v-41d5b01a>${ssrInterpolate(_ctx.$t("welcome.subscription.description"))}</p></div></div><div class="subscription__content" data-aos="fade-up" data-aos-delay="200" data-v-41d5b01a><!--[-->`);
      ssrRenderList(subscriptions.value, (device, index) => {
        _push(`<div class="subscription__card" data-v-41d5b01a><div data-v-41d5b01a><h4 data-v-41d5b01a>${ssrInterpolate(device.title)}</h4><p class="subscription__card--description" data-v-41d5b01a>${ssrInterpolate(device.description)}</p></div><div data-v-41d5b01a><ul class="subscription__card-list" data-v-41d5b01a><!--[-->`);
        ssrRenderList(device.benefits, (benefit, i) => {
          _push(`<li data-v-41d5b01a><h5 data-v-41d5b01a>${ssrInterpolate(benefit.title)}</h5><p data-v-41d5b01a>${ssrInterpolate(benefit.description)}</p></li>`);
        });
        _push(`<!--]--></ul></div><div data-v-41d5b01a><div class="subscription__card-price" data-v-41d5b01a><p data-v-41d5b01a>$${ssrInterpolate(device.price)}</p><span data-v-41d5b01a> / ${ssrInterpolate(_ctx.$t("months"))}</span></div><div class="subscription__card-buttons" data-v-41d5b01a>`);
        _push(ssrRenderComponent(_component_vlada_button, {
          type: "primary",
          size: "md",
          rounded: "md",
          placeholder: _ctx.$t("welcome.subscription.subscribe")
        }, null, _parent));
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/welcome/subscription.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const subscription = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-41d5b01a"]]);

export { subscription as default };
//# sourceMappingURL=subscription-BPWl6OZw.mjs.map
