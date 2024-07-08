import { defineComponent, useSSRContext, ref, watchEffect, watch, computed, createVNode, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList } from 'file://Z:/Ota-ku-nuxt/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderAttrs, ssrRenderAttr } from 'file://Z:/Ota-ku-nuxt/node_modules/vue/server-renderer/index.mjs';
import { g as genericComponent, p as propsFactory, N as useDisplay, O as clamp, _ as _export_sfc } from './server.mjs';
import { y as makeGroupItemProps, B as useGroupItem, m as makeComponentProps, al as useIntersectionObserver, K as useResizeObserver, ab as getScrollParent, u as useRender, a1 as openAnime, S as cleanDescription, $ as VImg, O as VLayout, ai as VAppBar, Z as VBtn, P as VMain, Q as VContainer, U as VCard, W as VCardTitle, X as VCardSubtitle, a0 as VCardText, Y as VRow, a7 as VCol, _ as VSkeletonLoader } from './VMain-D64eYTiE.mjs';
import { a as VSlideGroupSymbol, V as VSlideGroup } from './VSlideGroup-BSvi5iFT.mjs';
import axios from 'file://Z:/Ota-ku-nuxt/node_modules/axios/index.js';
import moment from 'file://Z:/Ota-ku-nuxt/node_modules/moment-timezone/index.js';
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

const _sfc_main$3 = defineComponent({
  name: "",
  props: {
    screenshots: []
  }
});
const VSlideGroupItem = genericComponent()({
  name: "VSlideGroupItem",
  props: makeGroupItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const slideGroupItem = useGroupItem(props, VSlideGroupSymbol);
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots, {
        isSelected: slideGroupItem.isSelected.value,
        select: slideGroupItem.select,
        toggle: slideGroupItem.toggle,
        selectedClass: slideGroupItem.selectedClass.value
      });
    };
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(VContainer, { style: { "max-width": "var(--ota-ku-max-width)", "padding": "10px 10px 10px 10px", "align-items": "center" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, {
          rounded: "lg",
          variant: "text",
          class: "ota-anime-containers"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCardTitle, { class: "ota-anime-containers-v-title pa-0" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u041A\u0430\u0434\u0440\u044B`);
                  } else {
                    return [
                      createTextVNode("\u041A\u0430\u0434\u0440\u044B")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`\u0422\u043E\u043F \u043A\u0430\u0434\u0440\u044B \u0438\u0437 \u0430\u043D\u0438\u043C\u0435`);
                  } else {
                    return [
                      createTextVNode("\u0422\u043E\u043F \u043A\u0430\u0434\u0440\u044B \u0438\u0437 \u0430\u043D\u0438\u043C\u0435")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VSlideGroup, { class: "slide-group-gallery" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<!--[-->`);
                    ssrRenderList(_ctx.screenshots, (image, index) => {
                      _push4(ssrRenderComponent(VSlideGroupItem, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(VImg, {
                              width: "250",
                              "aspect-ratio": "1.6",
                              rounded: "lg",
                              cover: "",
                              class: "ma-xxl-2 ma-xl-2 ma-lg-2 ma-md-1 ma-sm-1 ma-1",
                              "lazy-src": image,
                              src: image
                            }, null, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(VImg, {
                                width: "250",
                                "aspect-ratio": "1.6",
                                rounded: "lg",
                                cover: "",
                                class: "ma-xxl-2 ma-xl-2 ma-lg-2 ma-md-1 ma-sm-1 ma-1",
                                "lazy-src": image,
                                src: image
                              }, null, 8, ["lazy-src", "src"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.screenshots, (image, index) => {
                        return openBlock(), createBlock(VSlideGroupItem, null, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              width: "250",
                              "aspect-ratio": "1.6",
                              rounded: "lg",
                              cover: "",
                              class: "ma-xxl-2 ma-xl-2 ma-lg-2 ma-md-1 ma-sm-1 ma-1",
                              "lazy-src": image,
                              src: image
                            }, null, 8, ["lazy-src", "src"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 256))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCardTitle, { class: "ota-anime-containers-v-title pa-0" }, {
                  default: withCtx(() => [
                    createTextVNode("\u041A\u0430\u0434\u0440\u044B")
                  ]),
                  _: 1
                }),
                createVNode(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
                  default: withCtx(() => [
                    createTextVNode("\u0422\u043E\u043F \u043A\u0430\u0434\u0440\u044B \u0438\u0437 \u0430\u043D\u0438\u043C\u0435")
                  ]),
                  _: 1
                }),
                createVNode(VSlideGroup, { class: "slide-group-gallery" }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.screenshots, (image, index) => {
                      return openBlock(), createBlock(VSlideGroupItem, null, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            width: "250",
                            "aspect-ratio": "1.6",
                            rounded: "lg",
                            cover: "",
                            class: "ma-xxl-2 ma-xl-2 ma-lg-2 ma-md-1 ma-sm-1 ma-1",
                            "lazy-src": image,
                            src: image
                          }, null, 8, ["lazy-src", "src"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCard, {
            rounded: "lg",
            variant: "text",
            class: "ota-anime-containers"
          }, {
            default: withCtx(() => [
              createVNode(VCardTitle, { class: "ota-anime-containers-v-title pa-0" }, {
                default: withCtx(() => [
                  createTextVNode("\u041A\u0430\u0434\u0440\u044B")
                ]),
                _: 1
              }),
              createVNode(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
                default: withCtx(() => [
                  createTextVNode("\u0422\u043E\u043F \u043A\u0430\u0434\u0440\u044B \u0438\u0437 \u0430\u043D\u0438\u043C\u0435")
                ]),
                _: 1
              }),
              createVNode(VSlideGroup, { class: "slide-group-gallery" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.screenshots, (image, index) => {
                    return openBlock(), createBlock(VSlideGroupItem, null, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          width: "250",
                          "aspect-ratio": "1.6",
                          rounded: "lg",
                          cover: "",
                          class: "ma-xxl-2 ma-xl-2 ma-lg-2 ma-md-1 ma-sm-1 ma-1",
                          "lazy-src": image,
                          src: image
                        }, null, 8, ["lazy-src", "src"])
                      ]),
                      _: 2
                    }, 1024);
                  }), 256))
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OpenAnimeGallery.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({
  name: "OpenAnimePlayer",
  props: {
    currentAnime: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      currentAnimeVoice: 610
    };
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(VContainer, { style: { "max-width": "var(--ota-ku-max-width)", "padding": "0 10px 10px 10px", "align-items": "center" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div style="${ssrRenderStyle({ "width": "100%", "aspect-ratio": "177 / 100", "border-radius": "10px", "overflow": "hidden" })}"${_scopeId}><iframe${ssrRenderAttr("src", "//kodik.cc/find-player?shikimoriID=" + _ctx.currentAnime + "&prioritizeTranslations=[" + _ctx.currentAnimeVoice + "]&blockInCountries=turkey,azerbadjan&types=anime,anime-serial")} width="100%" height="100%" frameborder="0" allowfullscreen allow="autoplay *; fullscreen *"${_scopeId}></iframe></div>`);
      } else {
        return [
          createVNode("div", { style: { "width": "100%", "aspect-ratio": "177 / 100", "border-radius": "10px", "overflow": "hidden" } }, [
            createVNode("iframe", {
              src: "//kodik.cc/find-player?shikimoriID=" + _ctx.currentAnime + "&prioritizeTranslations=[" + _ctx.currentAnimeVoice + "]&blockInCountries=turkey,azerbadjan&types=anime,anime-serial",
              width: "100%",
              height: "100%",
              frameborder: "0",
              allowfullscreen: "",
              allow: "autoplay *; fullscreen *"
            }, null, 8, ["src"])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/OpenAnimePlayer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
function formatDate(dateString, clientTimeZone) {
  console.log(dateString);
  console.log(clientTimeZone);
  if (dateString === "\u043D\u0435\u0442\u0443") {
    return "\u043D\u0435\u0442\u0443";
  } else {
    return moment(dateString).tz(clientTimeZone).calendar(null, {
      sameDay: "[\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432]  HH:mm",
      nextDay: "[\u0417\u0430\u0432\u0442\u0440\u0430 \u0432] HH:mm",
      nextWeek: "DD.MM.YYYY [\u0432] HH:mm",
      sameElse: "DD.MM.YYYY [\u0432] HH:mm"
    });
  }
}
const _sfc_main$1 = defineComponent({
  name: "ota-ku-advertising-banner",
  props: {
    blockId: String,
    renderTo: String
  },
  mounted() {
    (void 0).yaContextCb.push(() => {
      Ya.Context.AdvManager.render({
        "blockId": this.blockId,
        "renderTo": this.renderTo
      });
    });
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(VContainer, { style: { "max-width": "var(--ota-ku-max-width)", "padding": "0 10px 10px 10px", "align-items": "center" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div${ssrRenderAttr("id", this.renderTo)}${_scopeId}></div>`);
      } else {
        return [
          createVNode("div", {
            id: this.renderTo
          }, null, 8, ["id"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</section>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/others/Banner.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Banner = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {
  components: {
    Banner,
    OpenAnimeGallery: __nuxt_component_0,
    OpenAnimePlayer: __nuxt_component_1
  },
  mounted() {
    const animeId = this.$route.query.animeId;
    this.locale = moment.tz.guess();
    if (animeId) {
      this.fetchAnime(animeId);
      this.currentAnime = animeId;
    } else {
      this.goBack();
    }
    this.$watch(
      () => this.$route.query.animeId,
      (newValue, oldValue) => {
        if (newValue !== oldValue) {
          this.fetchAnime(newValue);
          this.currentAnime = newValue;
        }
      }
    );
  },
  data() {
    return {
      animeList: null,
      currentAnime: "",
      genres: [],
      studios: [],
      screenshots: [],
      locale: "ru",
      mostList: [],
      openAnime
    };
  },
  methods: {
    formatDate,
    cleanDescription,
    async fetchAnime(animeId) {
      try {
        const response = await axios.post("https://shikimori.one/api/graphql", {
          query: `
                        query {
                          animes(ids: "${animeId}" limit: 1) {
                            name
                            russian
                            english
                            episodes
                            kind
                            status
                            description
                            nextEpisodeAt
                            genres { id russian }
                            studios { id name }
                            poster { originalUrl miniUrl mainUrl main2xUrl}
                            screenshots { id x332Url }
                            related { id anime { id russian poster { main2xUrl } } relationRu }
                          }
                        }
                    `
        }, {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          }
        });
        if (response.status !== 200) {
          this.$router.push(`/error`);
        } else {
          this.animeList = response.data.data.animes[0];
          this.genres = this.animeList.genres.map((item) => item.russian);
          this.studios = this.animeList.studios.map((item) => item.name);
          this.screenshots = this.animeList.screenshots.map((item) => item.x332Url);
          this.relatedAnime = this.animeList.related.filter((item) => item.anime !== null).map((item) => ({
            id: item.anime.id,
            russian: item.anime.russian,
            main2xUrl: item.anime.poster.main2xUrl,
            relationRu: item.relationRu
          }));
        }
      } catch (error) {
        this.$router.push(`/error`);
      }
    },
    goBack() {
      (void 0).history.back();
    }
  }
};
function floor(val) {
  return Math.floor(Math.abs(val)) * Math.sign(val);
}
const makeVParallaxProps = propsFactory({
  scale: {
    type: [Number, String],
    default: 0.5
  },
  ...makeComponentProps()
}, "VParallax");
const VParallax = genericComponent()({
  name: "VParallax",
  props: makeVParallaxProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      intersectionRef,
      isIntersecting
    } = useIntersectionObserver();
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    const {
      height: displayHeight
    } = useDisplay();
    const root = ref();
    watchEffect(() => {
      var _a;
      intersectionRef.value = resizeRef.value = (_a = root.value) == null ? void 0 : _a.$el;
    });
    let scrollParent;
    watch(isIntersecting, (val) => {
      if (val) {
        scrollParent = getScrollParent(intersectionRef.value);
        scrollParent = scrollParent === (void 0).scrollingElement ? void 0 : scrollParent;
        scrollParent.addEventListener("scroll", onScroll, {
          passive: true
        });
        onScroll();
      } else {
        scrollParent.removeEventListener("scroll", onScroll);
      }
    });
    watch(displayHeight, onScroll);
    watch(() => {
      var _a;
      return (_a = contentRect.value) == null ? void 0 : _a.height;
    }, onScroll);
    const scale = computed(() => {
      return 1 - clamp(+props.scale);
    });
    let frame = -1;
    function onScroll() {
      if (!isIntersecting.value)
        return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        var _a;
        const el = ((_a = root.value) == null ? void 0 : _a.$el).querySelector(".v-img__img");
        if (!el)
          return;
        const scrollHeight = scrollParent instanceof Document ? (void 0).documentElement.clientHeight : scrollParent.clientHeight;
        const scrollPos = scrollParent instanceof Document ? (void 0).scrollY : scrollParent.scrollTop;
        const top = intersectionRef.value.getBoundingClientRect().top + scrollPos;
        const height = contentRect.value.height;
        const center = top + (height - scrollHeight) / 2;
        const translate = floor((scrollPos - center) * scale.value);
        const sizeScale = Math.max(1, (scale.value * (scrollHeight - height) + height) / height);
        el.style.setProperty("transform", `translateY(${translate}px) scale(${sizeScale})`);
      });
    }
    useRender(() => createVNode(VImg, {
      "class": ["v-parallax", {
        "v-parallax--active": isIntersecting.value
      }, props.class],
      "style": props.style,
      "ref": root,
      "cover": true,
      "onLoadstart": onScroll,
      "onLoad": onScroll
    }, slots));
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_open_anime_gallery = __nuxt_component_0;
  const _component_open_anime_player = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(VLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VAppBar, {
          elevation: 0,
          color: "transparent",
          "scroll-behavior": "hide"
        }, {
          prepend: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VBtn, {
                icon: "mdi-arrow-left",
                variant: "tonal",
                theme: "customDarkTheme",
                rounded: "lg",
                onClick: ($event) => $options.goBack()
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VBtn, {
                  icon: "mdi-arrow-left",
                  variant: "tonal",
                  theme: "customDarkTheme",
                  rounded: "lg",
                  onClick: ($event) => $options.goBack()
                }, null, 8, ["onClick"])
              ];
            }
          }),
          append: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VBtn, {
                icon: "mdi-home",
                variant: "tonal",
                theme: "customDarkTheme",
                rounded: "lg",
                class: "mr-3",
                onClick: ($event) => this.$router.push("/")
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VBtn, {
                icon: "mdi-dots-vertical",
                variant: "tonal",
                theme: "customDarkTheme",
                rounded: "lg",
                disabled: ""
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VBtn, {
                  icon: "mdi-home",
                  variant: "tonal",
                  theme: "customDarkTheme",
                  rounded: "lg",
                  class: "mr-3",
                  onClick: ($event) => this.$router.push("/")
                }, null, 8, ["onClick"]),
                createVNode(VBtn, {
                  icon: "mdi-dots-vertical",
                  variant: "tonal",
                  theme: "customDarkTheme",
                  rounded: "lg",
                  disabled: ""
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VAppBar, {
            elevation: 0,
            color: "transparent",
            "scroll-behavior": "hide"
          }, {
            prepend: withCtx(() => [
              createVNode(VBtn, {
                icon: "mdi-arrow-left",
                variant: "tonal",
                theme: "customDarkTheme",
                rounded: "lg",
                onClick: ($event) => $options.goBack()
              }, null, 8, ["onClick"])
            ]),
            append: withCtx(() => [
              createVNode(VBtn, {
                icon: "mdi-home",
                variant: "tonal",
                theme: "customDarkTheme",
                rounded: "lg",
                class: "mr-3",
                onClick: ($event) => this.$router.push("/")
              }, null, 8, ["onClick"]),
              createVNode(VBtn, {
                icon: "mdi-dots-vertical",
                variant: "tonal",
                theme: "customDarkTheme",
                rounded: "lg",
                disabled: ""
              })
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(VLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if ($data.animeList && $data.animeList.poster && $data.currentAnime) {
          _push2(ssrRenderComponent(VMain, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<section class="position-relative"${_scopeId2}>`);
                _push3(ssrRenderComponent(VParallax, {
                  src: $data.animeList.poster.originalUrl,
                  width: "100%",
                  cover: "",
                  class: "anime-background-image"
                }, null, _parent3, _scopeId2));
                _push3(`<div class="anime-background-shadow position-absolute top-0"${_scopeId2}></div></section><section${_scopeId2}>`);
                _push3(ssrRenderComponent(VContainer, {
                  style: { "max-width": "var(--ota-ku-max-width)", "padding": "0 10px 10px 10px" },
                  class: "d-flex ga-5"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div style="${ssrRenderStyle({ "width": "25%" })}" class="name-and-other-anime-poster"${_scopeId3}>`);
                      _push4(ssrRenderComponent(VImg, {
                        rounded: "lg",
                        "aspect-ratio": "0.7",
                        cover: "",
                        "lazy-src": $data.animeList.poster.miniUrl,
                        src: $data.animeList.poster.main2xUrl
                      }, null, _parent4, _scopeId3));
                      _push4(`</div>`);
                      _push4(ssrRenderComponent(VCard, {
                        variant: "text",
                        style: { "width": "75%" },
                        class: "name-and-other-anime-information"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(VCardTitle, { class: "text-wrap pa-0 pb-1" }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($data.animeList.russian)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($data.animeList.russian), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(VCardSubtitle, {
                              class: "text-wrap pa-0 pb-2",
                              style: { "font-size": "0.9em" }
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`${ssrInterpolate($data.animeList.english)} / ${ssrInterpolate($data.animeList.name)}`);
                                } else {
                                  return [
                                    createTextVNode(toDisplayString($data.animeList.english) + " / " + toDisplayString($data.animeList.name), 1)
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(VCardText, { class: "text-wrap pa-0 pb-2 d-flex flex-column ga-2 anime-and-other-info-v-card-text" }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<span style="${ssrRenderStyle({ "font-size": "0.9em" })}"${_scopeId5}>\u0422\u0438\u043F: <i${_scopeId5}>${ssrInterpolate($data.animeList.kind)}</i></span><span style="${ssrRenderStyle({ "font-size": "0.9em" })}"${_scopeId5}>\u042D\u043F\u0438\u0437\u043E\u0434\u044B: <i${_scopeId5}>${ssrInterpolate($data.animeList.episodes)}</i></span><span style="${ssrRenderStyle({ "font-size": "0.9em" })}"${_scopeId5}>\u0421\u0442\u0430\u0442\u0443\u0441: <i${_scopeId5}>${ssrInterpolate($data.animeList.status)}</i></span>`);
                                  if ($data.animeList.nextEpisodeAt != null) {
                                    _push6(`<span style="${ssrRenderStyle({ "font-size": "0.9em" })}"${_scopeId5}>\u0421\u043B\u0435\u0434\u0443\u044E\u0448\u0438\u0439 \u044D\u043F\u0438\u0437\u043E\u0434: <i${_scopeId5}>${ssrInterpolate($options.formatDate($data.animeList.nextEpisodeAt, $data.locale))} \u043F\u043E ${ssrInterpolate($data.locale)}</i></span>`);
                                  } else {
                                    _push6(`<!---->`);
                                  }
                                  _push6(`<span style="${ssrRenderStyle({ "font-size": "0.9em" })}"${_scopeId5}>\u0416\u0430\u043D\u0440\u044B: <i${_scopeId5}>${ssrInterpolate($data.genres.join(", "))}</i></span><span style="${ssrRenderStyle({ "font-size": "0.9em" })}"${_scopeId5}>\u0421\u0442\u0443\u0434\u0438\u0438: <i${_scopeId5}>${ssrInterpolate($data.studios.join(", "))}</i></span><span style="${ssrRenderStyle({ "font-size": "0.9em" })}"${_scopeId5}>\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: <i${_scopeId5}>${ssrInterpolate($options.cleanDescription($data.animeList.description))}</i></span>`);
                                } else {
                                  return [
                                    createVNode("span", { style: { "font-size": "0.9em" } }, [
                                      createTextVNode("\u0422\u0438\u043F: "),
                                      createVNode("i", null, toDisplayString($data.animeList.kind), 1)
                                    ]),
                                    createVNode("span", { style: { "font-size": "0.9em" } }, [
                                      createTextVNode("\u042D\u043F\u0438\u0437\u043E\u0434\u044B: "),
                                      createVNode("i", null, toDisplayString($data.animeList.episodes), 1)
                                    ]),
                                    createVNode("span", { style: { "font-size": "0.9em" } }, [
                                      createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441: "),
                                      createVNode("i", null, toDisplayString($data.animeList.status), 1)
                                    ]),
                                    $data.animeList.nextEpisodeAt != null ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      style: { "font-size": "0.9em" }
                                    }, [
                                      createTextVNode("\u0421\u043B\u0435\u0434\u0443\u044E\u0448\u0438\u0439 \u044D\u043F\u0438\u0437\u043E\u0434: "),
                                      createVNode("i", null, toDisplayString($options.formatDate($data.animeList.nextEpisodeAt, $data.locale)) + " \u043F\u043E " + toDisplayString($data.locale), 1)
                                    ])) : createCommentVNode("", true),
                                    createVNode("span", { style: { "font-size": "0.9em" } }, [
                                      createTextVNode("\u0416\u0430\u043D\u0440\u044B: "),
                                      createVNode("i", null, toDisplayString($data.genres.join(", ")), 1)
                                    ]),
                                    createVNode("span", { style: { "font-size": "0.9em" } }, [
                                      createTextVNode("\u0421\u0442\u0443\u0434\u0438\u0438: "),
                                      createVNode("i", null, toDisplayString($data.studios.join(", ")), 1)
                                    ]),
                                    createVNode("span", { style: { "font-size": "0.9em" } }, [
                                      createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: "),
                                      createVNode("i", null, toDisplayString($options.cleanDescription($data.animeList.description)), 1)
                                    ])
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(VCardTitle, { class: "text-wrap pa-0 pb-1" }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($data.animeList.russian), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, {
                                class: "text-wrap pa-0 pb-2",
                                style: { "font-size": "0.9em" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString($data.animeList.english) + " / " + toDisplayString($data.animeList.name), 1)
                                ]),
                                _: 1
                              }),
                              createVNode(VCardText, { class: "text-wrap pa-0 pb-2 d-flex flex-column ga-2 anime-and-other-info-v-card-text" }, {
                                default: withCtx(() => [
                                  createVNode("span", { style: { "font-size": "0.9em" } }, [
                                    createTextVNode("\u0422\u0438\u043F: "),
                                    createVNode("i", null, toDisplayString($data.animeList.kind), 1)
                                  ]),
                                  createVNode("span", { style: { "font-size": "0.9em" } }, [
                                    createTextVNode("\u042D\u043F\u0438\u0437\u043E\u0434\u044B: "),
                                    createVNode("i", null, toDisplayString($data.animeList.episodes), 1)
                                  ]),
                                  createVNode("span", { style: { "font-size": "0.9em" } }, [
                                    createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441: "),
                                    createVNode("i", null, toDisplayString($data.animeList.status), 1)
                                  ]),
                                  $data.animeList.nextEpisodeAt != null ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    style: { "font-size": "0.9em" }
                                  }, [
                                    createTextVNode("\u0421\u043B\u0435\u0434\u0443\u044E\u0448\u0438\u0439 \u044D\u043F\u0438\u0437\u043E\u0434: "),
                                    createVNode("i", null, toDisplayString($options.formatDate($data.animeList.nextEpisodeAt, $data.locale)) + " \u043F\u043E " + toDisplayString($data.locale), 1)
                                  ])) : createCommentVNode("", true),
                                  createVNode("span", { style: { "font-size": "0.9em" } }, [
                                    createTextVNode("\u0416\u0430\u043D\u0440\u044B: "),
                                    createVNode("i", null, toDisplayString($data.genres.join(", ")), 1)
                                  ]),
                                  createVNode("span", { style: { "font-size": "0.9em" } }, [
                                    createTextVNode("\u0421\u0442\u0443\u0434\u0438\u0438: "),
                                    createVNode("i", null, toDisplayString($data.studios.join(", ")), 1)
                                  ]),
                                  createVNode("span", { style: { "font-size": "0.9em" } }, [
                                    createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: "),
                                    createVNode("i", null, toDisplayString($options.cleanDescription($data.animeList.description)), 1)
                                  ])
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode("div", {
                          style: { "width": "25%" },
                          class: "name-and-other-anime-poster"
                        }, [
                          createVNode(VImg, {
                            rounded: "lg",
                            "aspect-ratio": "0.7",
                            cover: "",
                            "lazy-src": $data.animeList.poster.miniUrl,
                            src: $data.animeList.poster.main2xUrl
                          }, null, 8, ["lazy-src", "src"])
                        ]),
                        createVNode(VCard, {
                          variant: "text",
                          style: { "width": "75%" },
                          class: "name-and-other-anime-information"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "text-wrap pa-0 pb-1" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($data.animeList.russian), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, {
                              class: "text-wrap pa-0 pb-2",
                              style: { "font-size": "0.9em" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($data.animeList.english) + " / " + toDisplayString($data.animeList.name), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "text-wrap pa-0 pb-2 d-flex flex-column ga-2 anime-and-other-info-v-card-text" }, {
                              default: withCtx(() => [
                                createVNode("span", { style: { "font-size": "0.9em" } }, [
                                  createTextVNode("\u0422\u0438\u043F: "),
                                  createVNode("i", null, toDisplayString($data.animeList.kind), 1)
                                ]),
                                createVNode("span", { style: { "font-size": "0.9em" } }, [
                                  createTextVNode("\u042D\u043F\u0438\u0437\u043E\u0434\u044B: "),
                                  createVNode("i", null, toDisplayString($data.animeList.episodes), 1)
                                ]),
                                createVNode("span", { style: { "font-size": "0.9em" } }, [
                                  createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441: "),
                                  createVNode("i", null, toDisplayString($data.animeList.status), 1)
                                ]),
                                $data.animeList.nextEpisodeAt != null ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  style: { "font-size": "0.9em" }
                                }, [
                                  createTextVNode("\u0421\u043B\u0435\u0434\u0443\u044E\u0448\u0438\u0439 \u044D\u043F\u0438\u0437\u043E\u0434: "),
                                  createVNode("i", null, toDisplayString($options.formatDate($data.animeList.nextEpisodeAt, $data.locale)) + " \u043F\u043E " + toDisplayString($data.locale), 1)
                                ])) : createCommentVNode("", true),
                                createVNode("span", { style: { "font-size": "0.9em" } }, [
                                  createTextVNode("\u0416\u0430\u043D\u0440\u044B: "),
                                  createVNode("i", null, toDisplayString($data.genres.join(", ")), 1)
                                ]),
                                createVNode("span", { style: { "font-size": "0.9em" } }, [
                                  createTextVNode("\u0421\u0442\u0443\u0434\u0438\u0438: "),
                                  createVNode("i", null, toDisplayString($data.studios.join(", ")), 1)
                                ]),
                                createVNode("span", { style: { "font-size": "0.9em" } }, [
                                  createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: "),
                                  createVNode("i", null, toDisplayString($options.cleanDescription($data.animeList.description)), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`</section>`);
                if (this.screenshots.length !== 0) {
                  _push3(ssrRenderComponent(_component_open_anime_gallery, {
                    screenshots: this.screenshots
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                if (this.currentAnime) {
                  _push3(ssrRenderComponent(_component_open_anime_player, {
                    currentAnime: this.currentAnime
                  }, null, _parent3, _scopeId2));
                } else {
                  _push3(`<!---->`);
                }
                _push3(`<section${_scopeId2}>`);
                _push3(ssrRenderComponent(VContainer, { style: { "max-width": "var(--ota-ku-max-width)", "padding": "0 10px 10px 10px", "align-items": "center" } }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(ssrRenderComponent(VCard, {
                        variant: "text",
                        rounded: "lg",
                        class: "ota-anime-containers"
                      }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent(VCardTitle, { class: "ota-anime-containers-v-title pa-0" }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`\u041F\u043E\u0445\u043E\u0436\u044B\u0435 \u0440\u0435\u043B\u0438\u0437\u044B`);
                                } else {
                                  return [
                                    createTextVNode("\u041F\u043E\u0445\u043E\u0436\u044B\u0435 \u0440\u0435\u043B\u0438\u0437\u044B")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`\u0410\u043D\u0438\u043C\u0435 \u0438 \u0444\u0438\u043B\u044C\u043C\u044B \u0441\u0432\u044F\u0437\u0435\u043D\u044B\u0435 \u0441 \u0444\u0440\u0430\u043D\u0448\u0438\u0437\u043E\u0439 `);
                                } else {
                                  return [
                                    createTextVNode("\u0410\u043D\u0438\u043C\u0435 \u0438 \u0444\u0438\u043B\u044C\u043C\u044B \u0441\u0432\u044F\u0437\u0435\u043D\u044B\u0435 \u0441 \u0444\u0440\u0430\u043D\u0448\u0438\u0437\u043E\u0439 ")
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                            _push5(ssrRenderComponent(VRow, { "no-gutters": "" }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  if (_ctx.relatedAnime.length === 0) {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(4, (n) => {
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "6",
                                        xxl: "3",
                                        xl: "3",
                                        lg: "3",
                                        md: "4",
                                        sm: "4",
                                        xs: "5",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VSkeletonLoader, { type: "image, list-item-two-line" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VSkeletonLoader, { type: "image, list-item-two-line" })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  } else {
                                    _push6(`<!--[-->`);
                                    ssrRenderList(_ctx.relatedAnime, (related) => {
                                      _push6(ssrRenderComponent(VCol, {
                                        cols: "6",
                                        xxl: "3",
                                        xl: "3",
                                        lg: "3",
                                        md: "4",
                                        sm: "4",
                                        xs: "5",
                                        class: "pa-1 pa-xs-1 pa-sm-1 pa-md-2 pa-lg-2 pa-xl-2 pa-xxl-2",
                                        onClick: ($event) => {
                                          this.openAnime(related.id);
                                        }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(ssrRenderComponent(VCard, {
                                              link: "",
                                              variant: "text"
                                            }, {
                                              default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                                if (_push8) {
                                                  _push8(ssrRenderComponent(VImg, {
                                                    width: "100%",
                                                    "aspect-ratio": "1.6",
                                                    rounded: "lg",
                                                    cover: "",
                                                    "lazy-src": related.main2xUrl,
                                                    src: related.main2xUrl
                                                  }, null, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VCardTitle, {
                                                    class: "pa-0 pt-2",
                                                    style: { "font-size": "0.9em" }
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(related.russian)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(related.russian), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                  _push8(ssrRenderComponent(VCardSubtitle, {
                                                    class: "pa-0 pt-1",
                                                    style: { "font-size": "0.8em" }
                                                  }, {
                                                    default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                      if (_push9) {
                                                        _push9(`${ssrInterpolate(related.relationRu)}`);
                                                      } else {
                                                        return [
                                                          createTextVNode(toDisplayString(related.relationRu), 1)
                                                        ];
                                                      }
                                                    }),
                                                    _: 2
                                                  }, _parent8, _scopeId7));
                                                } else {
                                                  return [
                                                    createVNode(VImg, {
                                                      width: "100%",
                                                      "aspect-ratio": "1.6",
                                                      rounded: "lg",
                                                      cover: "",
                                                      "lazy-src": related.main2xUrl,
                                                      src: related.main2xUrl
                                                    }, null, 8, ["lazy-src", "src"]),
                                                    createVNode(VCardTitle, {
                                                      class: "pa-0 pt-2",
                                                      style: { "font-size": "0.9em" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(related.russian), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024),
                                                    createVNode(VCardSubtitle, {
                                                      class: "pa-0 pt-1",
                                                      style: { "font-size": "0.8em" }
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(related.relationRu), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1024)
                                                  ];
                                                }
                                              }),
                                              _: 2
                                            }, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createVNode(VCard, {
                                                link: "",
                                                variant: "text"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(VImg, {
                                                    width: "100%",
                                                    "aspect-ratio": "1.6",
                                                    rounded: "lg",
                                                    cover: "",
                                                    "lazy-src": related.main2xUrl,
                                                    src: related.main2xUrl
                                                  }, null, 8, ["lazy-src", "src"]),
                                                  createVNode(VCardTitle, {
                                                    class: "pa-0 pt-2",
                                                    style: { "font-size": "0.9em" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(related.russian), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024),
                                                  createVNode(VCardSubtitle, {
                                                    class: "pa-0 pt-1",
                                                    style: { "font-size": "0.8em" }
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(related.relationRu), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1024)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    });
                                    _push6(`<!--]-->`);
                                  }
                                } else {
                                  return [
                                    _ctx.relatedAnime.length === 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(4, (n) => {
                                      return createVNode(VCol, {
                                        cols: "6",
                                        xxl: "3",
                                        xl: "3",
                                        lg: "3",
                                        md: "4",
                                        sm: "4",
                                        xs: "5",
                                        class: "pa-2"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VSkeletonLoader, { type: "image, list-item-two-line" })
                                        ]),
                                        _: 1
                                      });
                                    }), 64)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.relatedAnime, (related) => {
                                      return openBlock(), createBlock(VCol, {
                                        cols: "6",
                                        xxl: "3",
                                        xl: "3",
                                        lg: "3",
                                        md: "4",
                                        sm: "4",
                                        xs: "5",
                                        class: "pa-1 pa-xs-1 pa-sm-1 pa-md-2 pa-lg-2 pa-xl-2 pa-xxl-2",
                                        onClick: ($event) => {
                                          this.openAnime(related.id);
                                        }
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VCard, {
                                            link: "",
                                            variant: "text"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(VImg, {
                                                width: "100%",
                                                "aspect-ratio": "1.6",
                                                rounded: "lg",
                                                cover: "",
                                                "lazy-src": related.main2xUrl,
                                                src: related.main2xUrl
                                              }, null, 8, ["lazy-src", "src"]),
                                              createVNode(VCardTitle, {
                                                class: "pa-0 pt-2",
                                                style: { "font-size": "0.9em" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(related.russian), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCardSubtitle, {
                                                class: "pa-0 pt-1",
                                                style: { "font-size": "0.8em" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(related.relationRu), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1032, ["onClick"]);
                                    }), 256))
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode(VCardTitle, { class: "ota-anime-containers-v-title pa-0" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u0445\u043E\u0436\u044B\u0435 \u0440\u0435\u043B\u0438\u0437\u044B")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u0410\u043D\u0438\u043C\u0435 \u0438 \u0444\u0438\u043B\u044C\u043C\u044B \u0441\u0432\u044F\u0437\u0435\u043D\u044B\u0435 \u0441 \u0444\u0440\u0430\u043D\u0448\u0438\u0437\u043E\u0439 ")
                                ]),
                                _: 1
                              }),
                              createVNode(VRow, { "no-gutters": "" }, {
                                default: withCtx(() => [
                                  _ctx.relatedAnime.length === 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(4, (n) => {
                                    return createVNode(VCol, {
                                      cols: "6",
                                      xxl: "3",
                                      xl: "3",
                                      lg: "3",
                                      md: "4",
                                      sm: "4",
                                      xs: "5",
                                      class: "pa-2"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VSkeletonLoader, { type: "image, list-item-two-line" })
                                      ]),
                                      _: 1
                                    });
                                  }), 64)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.relatedAnime, (related) => {
                                    return openBlock(), createBlock(VCol, {
                                      cols: "6",
                                      xxl: "3",
                                      xl: "3",
                                      lg: "3",
                                      md: "4",
                                      sm: "4",
                                      xs: "5",
                                      class: "pa-1 pa-xs-1 pa-sm-1 pa-md-2 pa-lg-2 pa-xl-2 pa-xxl-2",
                                      onClick: ($event) => {
                                        this.openAnime(related.id);
                                      }
                                    }, {
                                      default: withCtx(() => [
                                        createVNode(VCard, {
                                          link: "",
                                          variant: "text"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(VImg, {
                                              width: "100%",
                                              "aspect-ratio": "1.6",
                                              rounded: "lg",
                                              cover: "",
                                              "lazy-src": related.main2xUrl,
                                              src: related.main2xUrl
                                            }, null, 8, ["lazy-src", "src"]),
                                            createVNode(VCardTitle, {
                                              class: "pa-0 pt-2",
                                              style: { "font-size": "0.9em" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(related.russian), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCardSubtitle, {
                                              class: "pa-0 pt-1",
                                              style: { "font-size": "0.8em" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(related.relationRu), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1032, ["onClick"]);
                                  }), 256))
                                ]),
                                _: 1
                              })
                            ];
                          }
                        }),
                        _: 1
                      }, _parent4, _scopeId3));
                    } else {
                      return [
                        createVNode(VCard, {
                          variant: "text",
                          rounded: "lg",
                          class: "ota-anime-containers"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "ota-anime-containers-v-title pa-0" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041F\u043E\u0445\u043E\u0436\u044B\u0435 \u0440\u0435\u043B\u0438\u0437\u044B")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0410\u043D\u0438\u043C\u0435 \u0438 \u0444\u0438\u043B\u044C\u043C\u044B \u0441\u0432\u044F\u0437\u0435\u043D\u044B\u0435 \u0441 \u0444\u0440\u0430\u043D\u0448\u0438\u0437\u043E\u0439 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, { "no-gutters": "" }, {
                              default: withCtx(() => [
                                _ctx.relatedAnime.length === 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(4, (n) => {
                                  return createVNode(VCol, {
                                    cols: "6",
                                    xxl: "3",
                                    xl: "3",
                                    lg: "3",
                                    md: "4",
                                    sm: "4",
                                    xs: "5",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSkeletonLoader, { type: "image, list-item-two-line" })
                                    ]),
                                    _: 1
                                  });
                                }), 64)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.relatedAnime, (related) => {
                                  return openBlock(), createBlock(VCol, {
                                    cols: "6",
                                    xxl: "3",
                                    xl: "3",
                                    lg: "3",
                                    md: "4",
                                    sm: "4",
                                    xs: "5",
                                    class: "pa-1 pa-xs-1 pa-sm-1 pa-md-2 pa-lg-2 pa-xl-2 pa-xxl-2",
                                    onClick: ($event) => {
                                      this.openAnime(related.id);
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        link: "",
                                        variant: "text"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            width: "100%",
                                            "aspect-ratio": "1.6",
                                            rounded: "lg",
                                            cover: "",
                                            "lazy-src": related.main2xUrl,
                                            src: related.main2xUrl
                                          }, null, 8, ["lazy-src", "src"]),
                                          createVNode(VCardTitle, {
                                            class: "pa-0 pt-2",
                                            style: { "font-size": "0.9em" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(related.russian), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardSubtitle, {
                                            class: "pa-0 pt-1",
                                            style: { "font-size": "0.8em" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(related.relationRu), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 256))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
                _push3(`</section>`);
              } else {
                return [
                  createVNode("section", { class: "position-relative" }, [
                    createVNode(VParallax, {
                      src: $data.animeList.poster.originalUrl,
                      width: "100%",
                      cover: "",
                      class: "anime-background-image"
                    }, null, 8, ["src"]),
                    createVNode("div", { class: "anime-background-shadow position-absolute top-0" })
                  ]),
                  createVNode("section", null, [
                    createVNode(VContainer, {
                      style: { "max-width": "var(--ota-ku-max-width)", "padding": "0 10px 10px 10px" },
                      class: "d-flex ga-5"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          style: { "width": "25%" },
                          class: "name-and-other-anime-poster"
                        }, [
                          createVNode(VImg, {
                            rounded: "lg",
                            "aspect-ratio": "0.7",
                            cover: "",
                            "lazy-src": $data.animeList.poster.miniUrl,
                            src: $data.animeList.poster.main2xUrl
                          }, null, 8, ["lazy-src", "src"])
                        ]),
                        createVNode(VCard, {
                          variant: "text",
                          style: { "width": "75%" },
                          class: "name-and-other-anime-information"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "text-wrap pa-0 pb-1" }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($data.animeList.russian), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, {
                              class: "text-wrap pa-0 pb-2",
                              style: { "font-size": "0.9em" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString($data.animeList.english) + " / " + toDisplayString($data.animeList.name), 1)
                              ]),
                              _: 1
                            }),
                            createVNode(VCardText, { class: "text-wrap pa-0 pb-2 d-flex flex-column ga-2 anime-and-other-info-v-card-text" }, {
                              default: withCtx(() => [
                                createVNode("span", { style: { "font-size": "0.9em" } }, [
                                  createTextVNode("\u0422\u0438\u043F: "),
                                  createVNode("i", null, toDisplayString($data.animeList.kind), 1)
                                ]),
                                createVNode("span", { style: { "font-size": "0.9em" } }, [
                                  createTextVNode("\u042D\u043F\u0438\u0437\u043E\u0434\u044B: "),
                                  createVNode("i", null, toDisplayString($data.animeList.episodes), 1)
                                ]),
                                createVNode("span", { style: { "font-size": "0.9em" } }, [
                                  createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441: "),
                                  createVNode("i", null, toDisplayString($data.animeList.status), 1)
                                ]),
                                $data.animeList.nextEpisodeAt != null ? (openBlock(), createBlock("span", {
                                  key: 0,
                                  style: { "font-size": "0.9em" }
                                }, [
                                  createTextVNode("\u0421\u043B\u0435\u0434\u0443\u044E\u0448\u0438\u0439 \u044D\u043F\u0438\u0437\u043E\u0434: "),
                                  createVNode("i", null, toDisplayString($options.formatDate($data.animeList.nextEpisodeAt, $data.locale)) + " \u043F\u043E " + toDisplayString($data.locale), 1)
                                ])) : createCommentVNode("", true),
                                createVNode("span", { style: { "font-size": "0.9em" } }, [
                                  createTextVNode("\u0416\u0430\u043D\u0440\u044B: "),
                                  createVNode("i", null, toDisplayString($data.genres.join(", ")), 1)
                                ]),
                                createVNode("span", { style: { "font-size": "0.9em" } }, [
                                  createTextVNode("\u0421\u0442\u0443\u0434\u0438\u0438: "),
                                  createVNode("i", null, toDisplayString($data.studios.join(", ")), 1)
                                ]),
                                createVNode("span", { style: { "font-size": "0.9em" } }, [
                                  createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: "),
                                  createVNode("i", null, toDisplayString($options.cleanDescription($data.animeList.description)), 1)
                                ])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  this.screenshots.length !== 0 ? (openBlock(), createBlock(_component_open_anime_gallery, {
                    key: 0,
                    screenshots: this.screenshots
                  }, null, 8, ["screenshots"])) : createCommentVNode("", true),
                  this.currentAnime ? (openBlock(), createBlock(_component_open_anime_player, {
                    key: 1,
                    currentAnime: this.currentAnime
                  }, null, 8, ["currentAnime"])) : createCommentVNode("", true),
                  createVNode("section", null, [
                    createVNode(VContainer, { style: { "max-width": "var(--ota-ku-max-width)", "padding": "0 10px 10px 10px", "align-items": "center" } }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          variant: "text",
                          rounded: "lg",
                          class: "ota-anime-containers"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "ota-anime-containers-v-title pa-0" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041F\u043E\u0445\u043E\u0436\u044B\u0435 \u0440\u0435\u043B\u0438\u0437\u044B")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
                              default: withCtx(() => [
                                createTextVNode("\u0410\u043D\u0438\u043C\u0435 \u0438 \u0444\u0438\u043B\u044C\u043C\u044B \u0441\u0432\u044F\u0437\u0435\u043D\u044B\u0435 \u0441 \u0444\u0440\u0430\u043D\u0448\u0438\u0437\u043E\u0439 ")
                              ]),
                              _: 1
                            }),
                            createVNode(VRow, { "no-gutters": "" }, {
                              default: withCtx(() => [
                                _ctx.relatedAnime.length === 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(4, (n) => {
                                  return createVNode(VCol, {
                                    cols: "6",
                                    xxl: "3",
                                    xl: "3",
                                    lg: "3",
                                    md: "4",
                                    sm: "4",
                                    xs: "5",
                                    class: "pa-2"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VSkeletonLoader, { type: "image, list-item-two-line" })
                                    ]),
                                    _: 1
                                  });
                                }), 64)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.relatedAnime, (related) => {
                                  return openBlock(), createBlock(VCol, {
                                    cols: "6",
                                    xxl: "3",
                                    xl: "3",
                                    lg: "3",
                                    md: "4",
                                    sm: "4",
                                    xs: "5",
                                    class: "pa-1 pa-xs-1 pa-sm-1 pa-md-2 pa-lg-2 pa-xl-2 pa-xxl-2",
                                    onClick: ($event) => {
                                      this.openAnime(related.id);
                                    }
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VCard, {
                                        link: "",
                                        variant: "text"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(VImg, {
                                            width: "100%",
                                            "aspect-ratio": "1.6",
                                            rounded: "lg",
                                            cover: "",
                                            "lazy-src": related.main2xUrl,
                                            src: related.main2xUrl
                                          }, null, 8, ["lazy-src", "src"]),
                                          createVNode(VCardTitle, {
                                            class: "pa-0 pt-2",
                                            style: { "font-size": "0.9em" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(related.russian), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardSubtitle, {
                                            class: "pa-0 pt-1",
                                            style: { "font-size": "0.8em" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(related.relationRu), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 256))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent(VMain, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<div class="position-absolute d-flex" style="${ssrRenderStyle({ "background-color": "#121212", "align-items": "center", "justify-content": "center", "z-index": "1010", "width": "100vw", "height": "100dvh" })}"${_scopeId2}><div class="loader"${_scopeId2}></div></div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "position-absolute d-flex",
                    style: { "background-color": "#121212", "align-items": "center", "justify-content": "center", "z-index": "1010", "width": "100vw", "height": "100dvh" }
                  }, [
                    createVNode("div", { class: "loader" })
                  ])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        }
      } else {
        return [
          $data.animeList && $data.animeList.poster && $data.currentAnime ? (openBlock(), createBlock(VMain, { key: 0 }, {
            default: withCtx(() => [
              createVNode("section", { class: "position-relative" }, [
                createVNode(VParallax, {
                  src: $data.animeList.poster.originalUrl,
                  width: "100%",
                  cover: "",
                  class: "anime-background-image"
                }, null, 8, ["src"]),
                createVNode("div", { class: "anime-background-shadow position-absolute top-0" })
              ]),
              createVNode("section", null, [
                createVNode(VContainer, {
                  style: { "max-width": "var(--ota-ku-max-width)", "padding": "0 10px 10px 10px" },
                  class: "d-flex ga-5"
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      style: { "width": "25%" },
                      class: "name-and-other-anime-poster"
                    }, [
                      createVNode(VImg, {
                        rounded: "lg",
                        "aspect-ratio": "0.7",
                        cover: "",
                        "lazy-src": $data.animeList.poster.miniUrl,
                        src: $data.animeList.poster.main2xUrl
                      }, null, 8, ["lazy-src", "src"])
                    ]),
                    createVNode(VCard, {
                      variant: "text",
                      style: { "width": "75%" },
                      class: "name-and-other-anime-information"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "text-wrap pa-0 pb-1" }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($data.animeList.russian), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCardSubtitle, {
                          class: "text-wrap pa-0 pb-2",
                          style: { "font-size": "0.9em" }
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString($data.animeList.english) + " / " + toDisplayString($data.animeList.name), 1)
                          ]),
                          _: 1
                        }),
                        createVNode(VCardText, { class: "text-wrap pa-0 pb-2 d-flex flex-column ga-2 anime-and-other-info-v-card-text" }, {
                          default: withCtx(() => [
                            createVNode("span", { style: { "font-size": "0.9em" } }, [
                              createTextVNode("\u0422\u0438\u043F: "),
                              createVNode("i", null, toDisplayString($data.animeList.kind), 1)
                            ]),
                            createVNode("span", { style: { "font-size": "0.9em" } }, [
                              createTextVNode("\u042D\u043F\u0438\u0437\u043E\u0434\u044B: "),
                              createVNode("i", null, toDisplayString($data.animeList.episodes), 1)
                            ]),
                            createVNode("span", { style: { "font-size": "0.9em" } }, [
                              createTextVNode("\u0421\u0442\u0430\u0442\u0443\u0441: "),
                              createVNode("i", null, toDisplayString($data.animeList.status), 1)
                            ]),
                            $data.animeList.nextEpisodeAt != null ? (openBlock(), createBlock("span", {
                              key: 0,
                              style: { "font-size": "0.9em" }
                            }, [
                              createTextVNode("\u0421\u043B\u0435\u0434\u0443\u044E\u0448\u0438\u0439 \u044D\u043F\u0438\u0437\u043E\u0434: "),
                              createVNode("i", null, toDisplayString($options.formatDate($data.animeList.nextEpisodeAt, $data.locale)) + " \u043F\u043E " + toDisplayString($data.locale), 1)
                            ])) : createCommentVNode("", true),
                            createVNode("span", { style: { "font-size": "0.9em" } }, [
                              createTextVNode("\u0416\u0430\u043D\u0440\u044B: "),
                              createVNode("i", null, toDisplayString($data.genres.join(", ")), 1)
                            ]),
                            createVNode("span", { style: { "font-size": "0.9em" } }, [
                              createTextVNode("\u0421\u0442\u0443\u0434\u0438\u0438: "),
                              createVNode("i", null, toDisplayString($data.studios.join(", ")), 1)
                            ]),
                            createVNode("span", { style: { "font-size": "0.9em" } }, [
                              createTextVNode("\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435: "),
                              createVNode("i", null, toDisplayString($options.cleanDescription($data.animeList.description)), 1)
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ]),
              this.screenshots.length !== 0 ? (openBlock(), createBlock(_component_open_anime_gallery, {
                key: 0,
                screenshots: this.screenshots
              }, null, 8, ["screenshots"])) : createCommentVNode("", true),
              this.currentAnime ? (openBlock(), createBlock(_component_open_anime_player, {
                key: 1,
                currentAnime: this.currentAnime
              }, null, 8, ["currentAnime"])) : createCommentVNode("", true),
              createVNode("section", null, [
                createVNode(VContainer, { style: { "max-width": "var(--ota-ku-max-width)", "padding": "0 10px 10px 10px", "align-items": "center" } }, {
                  default: withCtx(() => [
                    createVNode(VCard, {
                      variant: "text",
                      rounded: "lg",
                      class: "ota-anime-containers"
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, { class: "ota-anime-containers-v-title pa-0" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041F\u043E\u0445\u043E\u0436\u044B\u0435 \u0440\u0435\u043B\u0438\u0437\u044B")
                          ]),
                          _: 1
                        }),
                        createVNode(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
                          default: withCtx(() => [
                            createTextVNode("\u0410\u043D\u0438\u043C\u0435 \u0438 \u0444\u0438\u043B\u044C\u043C\u044B \u0441\u0432\u044F\u0437\u0435\u043D\u044B\u0435 \u0441 \u0444\u0440\u0430\u043D\u0448\u0438\u0437\u043E\u0439 ")
                          ]),
                          _: 1
                        }),
                        createVNode(VRow, { "no-gutters": "" }, {
                          default: withCtx(() => [
                            _ctx.relatedAnime.length === 0 ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(4, (n) => {
                              return createVNode(VCol, {
                                cols: "6",
                                xxl: "3",
                                xl: "3",
                                lg: "3",
                                md: "4",
                                sm: "4",
                                xs: "5",
                                class: "pa-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSkeletonLoader, { type: "image, list-item-two-line" })
                                ]),
                                _: 1
                              });
                            }), 64)) : (openBlock(true), createBlock(Fragment, { key: 1 }, renderList(_ctx.relatedAnime, (related) => {
                              return openBlock(), createBlock(VCol, {
                                cols: "6",
                                xxl: "3",
                                xl: "3",
                                lg: "3",
                                md: "4",
                                sm: "4",
                                xs: "5",
                                class: "pa-1 pa-xs-1 pa-sm-1 pa-md-2 pa-lg-2 pa-xl-2 pa-xxl-2",
                                onClick: ($event) => {
                                  this.openAnime(related.id);
                                }
                              }, {
                                default: withCtx(() => [
                                  createVNode(VCard, {
                                    link: "",
                                    variant: "text"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        width: "100%",
                                        "aspect-ratio": "1.6",
                                        rounded: "lg",
                                        cover: "",
                                        "lazy-src": related.main2xUrl,
                                        src: related.main2xUrl
                                      }, null, 8, ["lazy-src", "src"]),
                                      createVNode(VCardTitle, {
                                        class: "pa-0 pt-2",
                                        style: { "font-size": "0.9em" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(related.russian), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardSubtitle, {
                                        class: "pa-0 pt-1",
                                        style: { "font-size": "0.8em" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(related.relationRu), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 256))
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })) : (openBlock(), createBlock(VMain, { key: 1 }, {
            default: withCtx(() => [
              createVNode("div", {
                class: "position-absolute d-flex",
                style: { "background-color": "#121212", "align-items": "center", "justify-content": "center", "z-index": "1010", "width": "100vw", "height": "100dvh" }
              }, [
                createVNode("div", { class: "loader" })
              ])
            ]),
            _: 1
          }))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/OpenAnimeView.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const OpenAnimeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { OpenAnimeView as default };
//# sourceMappingURL=OpenAnimeView-Btfo3vCQ.mjs.map
