import { _ as _export_sfc, ad as __nuxt_component_0 } from "../server.mjs";
import { u as useHead } from "./index-xyyCGchu.js";
import { defineComponent, useSSRContext } from "vue";
import { App } from "@capacitor/app";
import { ssrRenderComponent } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
import "destr";
import "klona";
import "nprogress";
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
        { name: "topic", content: "ota-ku, аниме смотреть, аниме, лучшие аниме онлайн бесплатно, ота-ку, сайт аниме отаку, лучшие топ аниме смотреть" },
        { name: "keywords", content: "Ota-ku - Твой Личный Портал в Мир Аниме, аниме смотреть, аниме, лучшие аниме онлайн бесплатно, ота-ку, сайт аниме отаку, лучшие топ аниме смотреть" }
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
export {
  _default as default
};
//# sourceMappingURL=default-IblgyrKf.js.map
