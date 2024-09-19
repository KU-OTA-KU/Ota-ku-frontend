import { _ as __nuxt_component_0$2 } from './index-CJ2GqwTN.mjs';
import { _ as __nuxt_component_0 } from './index-h94hsqyg.mjs';
import { useSSRContext, defineComponent, ref, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';
import 'lodash/throttle.js';
import '@unhead/shared';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';
import 'nprogress';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "collapse",
  __ssrInlineRender: true,
  props: {
    id: {},
    type: {},
    title: {},
    description: {},
    isOpen: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(props.isOpen);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion" }, _attrs))} data-v-8928de53><div class="accordion__button" data-v-8928de53><div class="accordion__button--id" data-v-8928de53><p data-v-8928de53>${ssrInterpolate(props.id)}</p></div><div class="accordion__button--title" data-v-8928de53><h3 data-v-8928de53>${ssrInterpolate(props.title)}</h3>`);
      _push(ssrRenderComponent(_component_Icon, {
        class: "accordion__button-icon",
        name: "bi:chevron-up",
        style: isOpen.value ? null : { display: "none" }
      }, null, _parent));
      _push(ssrRenderComponent(_component_Icon, {
        class: "accordion__button-icon",
        name: "bi:chevron-down",
        style: !isOpen.value ? null : { display: "none" }
      }, null, _parent));
      _push(`</div></div>`);
      if (isOpen.value) {
        _push(`<div class="accordion__content" data-v-8928de53><p class="text-gray-700" data-v-8928de53>${ssrInterpolate(props.description)}</p></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vlada/collapse.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-8928de53"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const faqs = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_vlada_button = __nuxt_component_0$2;
      const _component_vlada_collapse = __nuxt_component_1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "faq__features" }, _attrs))} data-v-392b16f4><div class="vlada-container" data-v-392b16f4><div class="faq__features-top" data-v-392b16f4><div class="faq__features-top-title" data-v-392b16f4><h3 data-aos="fade-up" data-v-392b16f4>${ssrInterpolate(_ctx.$t("welcome.faq.title"))}</h3><p data-aos="fade-up" data-aos-delay="100" data-v-392b16f4>${ssrInterpolate(_ctx.$t("welcome.faq.description"))}</p></div><div data-aos="fade-left" data-v-392b16f4>`);
      _push(ssrRenderComponent(_component_vlada_button, {
        size: "md",
        text: "Ask a question",
        type: "tertiary"
      }, null, _parent));
      _push(`</div></div><div class="faq__features-content" data-aos="fade-up" data-aos-delay="200" data-v-392b16f4><!--[-->`);
      ssrRenderList(faqs.value, (faq2, index) => {
        _push(ssrRenderComponent(_component_vlada_collapse, {
          key: index,
          type: "secondary",
          id: String(index + 1),
          title: faq2.title,
          description: faq2.description,
          "is-open": true
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/welcome/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const faq = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-392b16f4"]]);

export { faq as default };
//# sourceMappingURL=faq-pChQBrMh.mjs.map
