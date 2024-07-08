import { d as makeLazyProps, e as useLazy, m as makeVOverlayProps, V as VDialogTransition, u as useScopeId, f as forwardRefs, c as VOverlay, _ as __nuxt_component_0 } from './VOverlay-BP5QGpaN.mjs';
import { defineComponent, ref, computed, shallowRef, watch, provide, createVNode, inject, useSSRContext, nextTick, toRef, withDirectives, resolveDirective, mergeProps, Fragment, vShow, withCtx, openBlock, createBlock, renderList, createTextVNode, toDisplayString, resolveComponent } from 'file://Z:/Ota-ku-nuxt/node_modules/vue/index.mjs';
import axios from 'file://Z:/Ota-ku-nuxt/node_modules/axios/index.js';
import { Storage } from 'file://Z:/Ota-ku-nuxt/node_modules/@capacitor/storage/dist/plugin.cjs.js';
import { S as cleanDescription, a1 as openAnime, m as makeComponentProps, a as makeTagProps, x as useGroup, Z as VBtn, u as useRender, y as makeGroupItemProps, B as useGroupItem, b as useSsrBoot, a2 as makeVImgProps, d as makeBorderProps, g as makeElevationProps, a3 as makeLayoutItemProps, h as makeRoundedProps, t as useBackgroundColor, l as useBorder, q as useElevation, r as useRounded, K as useResizeObserver, a4 as useLayoutItem, F as VDefaultsProvider, a5 as VProgressLinear, M as MaybeTransition, $ as VImg, O as VLayout, P as VMain, U as VCard, W as VCardTitle, E as VIcon, X as VCardSubtitle, a0 as VCardText, a6 as VCardActions, Q as VContainer, _ as VSkeletonLoader, Y as VRow, a7 as VCol } from './VMain-D64eYTiE.mjs';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'file://Z:/Ota-ku-nuxt/node_modules/vue/server-renderer/index.mjs';
import { p as propsFactory, m as makeThemeProps, g as genericComponent, k as provideTheme, F as useRtl, A as useLocale, I as IconValue, d as useProxiedModel, _ as _export_sfc, o as convertToUnit, ac as keys } from './server.mjs';
import { u as useHead } from './index-xyyCGchu.mjs';
import '../_/renderer.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/h3/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/devalue/index.js';
import 'file://Z:/Ota-ku-nuxt/node_modules/ufo/dist/index.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file://Z:/Ota-ku-nuxt/node_modules/ofetch/dist/node.mjs';
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

const _sfc_main$4 = defineComponent({
  name: "TopSlider",
  data() {
    return {
      cleanDescription,
      openAnime,
      topSliderAnimeList: [],
      loading: ref(false)
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const { value } = await Storage.get({ key: "topSliderAnimeList" });
        const { value: expirationDateString } = await Storage.get({ key: "topSliderAnimeListExpirationDate" });
        if (value && expirationDateString) {
          const expirationDate = parseInt(expirationDateString, 10);
          const currentDate = (/* @__PURE__ */ new Date()).getTime();
          if (currentDate < expirationDate) {
            this.topSliderAnimeList = JSON.parse(value);
          } else {
            await this.fetchAnimeData();
          }
        } else {
          await this.fetchAnimeData();
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    },
    async fetchAnimeData() {
      try {
        this.loading = true;
        const response = await axios.post("https://shikimori.one/api/graphql", {
          query: `
            query {
              animes(season: "2023_2024", limit: 5, order: popularity, status: "released", kind: "tv") {
                id
                russian
                score
                poster {
                  originalUrl
                }
                description
              }
            }
          `
        }, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        });
        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        const animeList = response.data.data.animes;
        this.topSliderAnimeList = animeList;
        await Storage.set({
          key: "topSliderAnimeList",
          value: JSON.stringify(animeList)
        });
        const expirationDate = /* @__PURE__ */ new Date();
        expirationDate.setDate(expirationDate.getDate() + 2);
        await Storage.set({
          key: "topSliderAnimeListExpirationDate",
          value: expirationDate.getTime().toString()
        });
      } catch (error) {
        console.error("Error fetching anime data:", error);
      } finally {
        this.loading = false;
      }
    }
  }
});
const handleGesture = (wrapper) => {
  const {
    touchstartX,
    touchendX,
    touchstartY,
    touchendY
  } = wrapper;
  const dirRatio = 0.5;
  const minDistance = 16;
  wrapper.offsetX = touchendX - touchstartX;
  wrapper.offsetY = touchendY - touchstartY;
  if (Math.abs(wrapper.offsetY) < dirRatio * Math.abs(wrapper.offsetX)) {
    wrapper.left && touchendX < touchstartX - minDistance && wrapper.left(wrapper);
    wrapper.right && touchendX > touchstartX + minDistance && wrapper.right(wrapper);
  }
  if (Math.abs(wrapper.offsetX) < dirRatio * Math.abs(wrapper.offsetY)) {
    wrapper.up && touchendY < touchstartY - minDistance && wrapper.up(wrapper);
    wrapper.down && touchendY > touchstartY + minDistance && wrapper.down(wrapper);
  }
};
function touchstart(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchstartX = touch.clientX;
  wrapper.touchstartY = touch.clientY;
  (_a = wrapper.start) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function touchend(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchendX = touch.clientX;
  wrapper.touchendY = touch.clientY;
  (_a = wrapper.end) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
  handleGesture(wrapper);
}
function touchmove(event, wrapper) {
  var _a;
  const touch = event.changedTouches[0];
  wrapper.touchmoveX = touch.clientX;
  wrapper.touchmoveY = touch.clientY;
  (_a = wrapper.move) == null ? void 0 : _a.call(wrapper, {
    originalEvent: event,
    ...wrapper
  });
}
function createHandlers() {
  let value = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const wrapper = {
    touchstartX: 0,
    touchstartY: 0,
    touchendX: 0,
    touchendY: 0,
    touchmoveX: 0,
    touchmoveY: 0,
    offsetX: 0,
    offsetY: 0,
    left: value.left,
    right: value.right,
    up: value.up,
    down: value.down,
    start: value.start,
    move: value.move,
    end: value.end
  };
  return {
    touchstart: (e) => touchstart(e, wrapper),
    touchend: (e) => touchend(e, wrapper),
    touchmove: (e) => touchmove(e, wrapper)
  };
}
function mounted(el, binding) {
  var _a2, _b;
  var _a;
  const value = binding.value;
  const target = (value == null ? void 0 : value.parent) ? el.parentElement : el;
  const options = (_a2 = value == null ? void 0 : value.options) != null ? _a2 : {
    passive: true
  };
  const uid = (_a = binding.instance) == null ? void 0 : _a.$.uid;
  if (!target || !uid)
    return;
  const handlers = createHandlers(binding.value);
  target._touchHandlers = (_b = target._touchHandlers) != null ? _b : /* @__PURE__ */ Object.create(null);
  target._touchHandlers[uid] = handlers;
  keys(handlers).forEach((eventName) => {
    target.addEventListener(eventName, handlers[eventName], options);
  });
}
function unmounted(el, binding) {
  var _a, _b;
  const target = ((_a = binding.value) == null ? void 0 : _a.parent) ? el.parentElement : el;
  const uid = (_b = binding.instance) == null ? void 0 : _b.$.uid;
  if (!(target == null ? void 0 : target._touchHandlers) || !uid)
    return;
  const handlers = target._touchHandlers[uid];
  keys(handlers).forEach((eventName) => {
    target.removeEventListener(eventName, handlers[eventName]);
  });
  delete target._touchHandlers[uid];
}
const Touch = {
  mounted,
  unmounted
};
const Touch$1 = Touch;
const VWindowSymbol = Symbol.for("vuetify:v-window");
const VWindowGroupSymbol = Symbol.for("vuetify:v-window-group");
const makeVWindowProps = propsFactory({
  continuous: Boolean,
  nextIcon: {
    type: [Boolean, String, Function, Object],
    default: "$next"
  },
  prevIcon: {
    type: [Boolean, String, Function, Object],
    default: "$prev"
  },
  reverse: Boolean,
  showArrows: {
    type: [Boolean, String],
    validator: (v) => typeof v === "boolean" || v === "hover"
  },
  touch: {
    type: [Object, Boolean],
    default: void 0
  },
  direction: {
    type: String,
    default: "horizontal"
  },
  modelValue: null,
  disabled: Boolean,
  selectedClass: {
    type: String,
    default: "v-window-item--active"
  },
  // TODO: mandatory should probably not be exposed but do this for now
  mandatory: {
    type: [Boolean, String],
    default: "force"
  },
  ...makeComponentProps(),
  ...makeTagProps(),
  ...makeThemeProps()
}, "VWindow");
const VWindow = genericComponent()({
  name: "VWindow",
  directives: {
    Touch
  },
  props: makeVWindowProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      isRtl
    } = useRtl();
    const {
      t
    } = useLocale();
    const group = useGroup(props, VWindowGroupSymbol);
    const rootRef = ref();
    const isRtlReverse = computed(() => isRtl.value ? !props.reverse : props.reverse);
    const isReversed = shallowRef(false);
    const transition = computed(() => {
      const axis = props.direction === "vertical" ? "y" : "x";
      const reverse = isRtlReverse.value ? !isReversed.value : isReversed.value;
      const direction = reverse ? "-reverse" : "";
      return `v-window-${axis}${direction}-transition`;
    });
    const transitionCount = shallowRef(0);
    const transitionHeight = ref(void 0);
    const activeIndex = computed(() => {
      return group.items.value.findIndex((item) => group.selected.value.includes(item.id));
    });
    watch(activeIndex, (newVal, oldVal) => {
      const itemsLength = group.items.value.length;
      const lastIndex = itemsLength - 1;
      if (itemsLength <= 2) {
        isReversed.value = newVal < oldVal;
      } else if (newVal === lastIndex && oldVal === 0) {
        isReversed.value = true;
      } else if (newVal === 0 && oldVal === lastIndex) {
        isReversed.value = false;
      } else {
        isReversed.value = newVal < oldVal;
      }
    });
    provide(VWindowSymbol, {
      transition,
      isReversed,
      transitionCount,
      transitionHeight,
      rootRef
    });
    const canMoveBack = computed(() => props.continuous || activeIndex.value !== 0);
    const canMoveForward = computed(() => props.continuous || activeIndex.value !== group.items.value.length - 1);
    function prev() {
      canMoveBack.value && group.prev();
    }
    function next() {
      canMoveForward.value && group.next();
    }
    const arrows = computed(() => {
      const arrows2 = [];
      const prevProps = {
        icon: isRtl.value ? props.nextIcon : props.prevIcon,
        class: `v-window__${isRtlReverse.value ? "right" : "left"}`,
        onClick: group.prev,
        "aria-label": t("$vuetify.carousel.prev")
      };
      arrows2.push(canMoveBack.value ? slots.prev ? slots.prev({
        props: prevProps
      }) : createVNode(VBtn, prevProps, null) : createVNode("div", null, null));
      const nextProps = {
        icon: isRtl.value ? props.prevIcon : props.nextIcon,
        class: `v-window__${isRtlReverse.value ? "left" : "right"}`,
        onClick: group.next,
        "aria-label": t("$vuetify.carousel.next")
      };
      arrows2.push(canMoveForward.value ? slots.next ? slots.next({
        props: nextProps
      }) : createVNode(VBtn, nextProps, null) : createVNode("div", null, null));
      return arrows2;
    });
    const touchOptions = computed(() => {
      if (props.touch === false)
        return props.touch;
      const options = {
        left: () => {
          isRtlReverse.value ? prev() : next();
        },
        right: () => {
          isRtlReverse.value ? next() : prev();
        },
        start: (_ref2) => {
          let {
            originalEvent
          } = _ref2;
          originalEvent.stopPropagation();
        }
      };
      return {
        ...options,
        ...props.touch === true ? {} : props.touch
      };
    });
    useRender(() => withDirectives(createVNode(props.tag, {
      "ref": rootRef,
      "class": ["v-window", {
        "v-window--show-arrows-on-hover": props.showArrows === "hover"
      }, themeClasses.value, props.class],
      "style": props.style
    }, {
      default: () => {
        var _a, _b;
        return [createVNode("div", {
          "class": "v-window__container",
          "style": {
            height: transitionHeight.value
          }
        }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
          group
        }), props.showArrows !== false && createVNode("div", {
          "class": "v-window__controls"
        }, [arrows.value])]), (_b = slots.additional) == null ? void 0 : _b.call(slots, {
          group
        })];
      }
    }), [[resolveDirective("touch"), touchOptions.value]]));
    return {
      group
    };
  }
});
const makeVCarouselProps = propsFactory({
  color: String,
  cycle: Boolean,
  delimiterIcon: {
    type: IconValue,
    default: "$delimiter"
  },
  height: {
    type: [Number, String],
    default: 500
  },
  hideDelimiters: Boolean,
  hideDelimiterBackground: Boolean,
  interval: {
    type: [Number, String],
    default: 6e3,
    validator: (value) => Number(value) > 0
  },
  progress: [Boolean, String],
  verticalDelimiters: [Boolean, String],
  ...makeVWindowProps({
    continuous: true,
    mandatory: "force",
    showArrows: true
  })
}, "VCarousel");
const VCarousel = genericComponent()({
  name: "VCarousel",
  props: makeVCarouselProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      t
    } = useLocale();
    const windowRef = ref();
    let slideTimeout = -1;
    watch(model, restartTimeout);
    watch(() => props.interval, restartTimeout);
    watch(() => props.cycle, (val) => {
      if (val)
        restartTimeout();
      else
        (void 0).clearTimeout(slideTimeout);
    });
    function startTimeout() {
      if (!props.cycle || !windowRef.value)
        return;
      slideTimeout = (void 0).setTimeout(windowRef.value.group.next, +props.interval > 0 ? +props.interval : 6e3);
    }
    function restartTimeout() {
      (void 0).clearTimeout(slideTimeout);
      (void 0).requestAnimationFrame(startTimeout);
    }
    useRender(() => {
      const windowProps = VWindow.filterProps(props);
      return createVNode(VWindow, mergeProps({
        "ref": windowRef
      }, windowProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-carousel", {
          "v-carousel--hide-delimiter-background": props.hideDelimiterBackground,
          "v-carousel--vertical-delimiters": props.verticalDelimiters
        }, props.class],
        "style": [{
          height: convertToUnit(props.height)
        }, props.style]
      }), {
        default: slots.default,
        additional: (_ref2) => {
          let {
            group
          } = _ref2;
          return createVNode(Fragment, null, [!props.hideDelimiters && createVNode("div", {
            "class": "v-carousel__controls",
            "style": {
              left: props.verticalDelimiters === "left" && props.verticalDelimiters ? 0 : "auto",
              right: props.verticalDelimiters === "right" ? 0 : "auto"
            }
          }, [group.items.value.length > 0 && createVNode(VDefaultsProvider, {
            "defaults": {
              VBtn: {
                color: props.color,
                icon: props.delimiterIcon,
                size: "x-small",
                variant: "text"
              }
            },
            "scoped": true
          }, {
            default: () => [group.items.value.map((item, index2) => {
              const props2 = {
                id: `carousel-item-${item.id}`,
                "aria-label": t("$vuetify.carousel.ariaLabel.delimiter", index2 + 1, group.items.value.length),
                class: ["v-carousel__controls__item", group.isSelected(item.id) && "v-btn--active"],
                onClick: () => group.select(item.id, true)
              };
              return slots.item ? slots.item({
                props: props2,
                item
              }) : createVNode(VBtn, mergeProps(item, props2), null);
            })]
          })]), props.progress && createVNode(VProgressLinear, {
            "class": "v-carousel__progress",
            "color": typeof props.progress === "string" ? props.progress : void 0,
            "modelValue": (group.getItemIndex(model.value) + 1) / group.items.value.length * 100
          }, null)]);
        },
        prev: slots.prev,
        next: slots.next
      });
    });
    return {};
  }
});
const makeVWindowItemProps = propsFactory({
  reverseTransition: {
    type: [Boolean, String],
    default: void 0
  },
  transition: {
    type: [Boolean, String],
    default: void 0
  },
  ...makeComponentProps(),
  ...makeGroupItemProps(),
  ...makeLazyProps()
}, "VWindowItem");
const VWindowItem = genericComponent()({
  name: "VWindowItem",
  directives: {
    Touch: Touch$1
  },
  props: makeVWindowItemProps(),
  emits: {
    "group:selected": (val) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const window = inject(VWindowSymbol);
    const groupItem = useGroupItem(props, VWindowGroupSymbol);
    const {
      isBooted
    } = useSsrBoot();
    if (!window || !groupItem)
      throw new Error("[Vuetify] VWindowItem must be used inside VWindow");
    const isTransitioning = shallowRef(false);
    const hasTransition = computed(() => isBooted.value && (window.isReversed.value ? props.reverseTransition !== false : props.transition !== false));
    function onAfterTransition() {
      if (!isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = false;
      if (window.transitionCount.value > 0) {
        window.transitionCount.value -= 1;
        if (window.transitionCount.value === 0) {
          window.transitionHeight.value = void 0;
        }
      }
    }
    function onBeforeTransition() {
      var _a;
      if (isTransitioning.value || !window) {
        return;
      }
      isTransitioning.value = true;
      if (window.transitionCount.value === 0) {
        window.transitionHeight.value = convertToUnit((_a = window.rootRef.value) == null ? void 0 : _a.clientHeight);
      }
      window.transitionCount.value += 1;
    }
    function onTransitionCancelled() {
      onAfterTransition();
    }
    function onEnterTransition(el) {
      if (!isTransitioning.value) {
        return;
      }
      nextTick(() => {
        if (!hasTransition.value || !isTransitioning.value || !window) {
          return;
        }
        window.transitionHeight.value = convertToUnit(el.clientHeight);
      });
    }
    const transition = computed(() => {
      const name = window.isReversed.value ? props.reverseTransition : props.transition;
      return !hasTransition.value ? false : {
        name: typeof name !== "string" ? window.transition.value : name,
        onBeforeEnter: onBeforeTransition,
        onAfterEnter: onAfterTransition,
        onEnterCancelled: onTransitionCancelled,
        onBeforeLeave: onBeforeTransition,
        onAfterLeave: onAfterTransition,
        onLeaveCancelled: onTransitionCancelled,
        onEnter: onEnterTransition
      };
    });
    const {
      hasContent
    } = useLazy(props, groupItem.isSelected);
    useRender(() => createVNode(MaybeTransition, {
      "transition": transition.value,
      "disabled": !isBooted.value
    }, {
      default: () => {
        var _a;
        return [withDirectives(createVNode("div", {
          "class": ["v-window-item", groupItem.selectedClass.value, props.class],
          "style": props.style
        }, [hasContent.value && ((_a = slots.default) == null ? void 0 : _a.call(slots))]), [[vShow, groupItem.isSelected.value]])];
      }
    }));
    return {
      groupItem
    };
  }
});
const makeVCarouselItemProps = propsFactory({
  ...makeVImgProps(),
  ...makeVWindowItemProps()
}, "VCarouselItem");
const VCarouselItem = genericComponent()({
  name: "VCarouselItem",
  inheritAttrs: false,
  props: makeVCarouselItemProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    useRender(() => {
      const imgProps = VImg.filterProps(props);
      const windowItemProps = VWindowItem.filterProps(props);
      return createVNode(VWindowItem, mergeProps({
        "class": ["v-carousel-item", props.class]
      }, windowItemProps), {
        default: () => [createVNode(VImg, mergeProps(attrs, imgProps), slots)]
      });
    });
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VContainer, mergeProps({
    class: "d-flex",
    style: { "max-width": "var(--ota-ku-max-width)", "padding": "20px 10px 0 10px", "align-items": "center" }
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.topSliderAnimeList.length === 0) {
          _push2(ssrRenderComponent(VSkeletonLoader, {
            type: "list-item-three-line, list-item-three-line, list-item-three-line, list-item-three-line",
            width: "100%",
            style: { "border-radius": "20px", "height": "var(--top-slider-height)" }
          }, null, _parent2, _scopeId));
        } else {
          _push2(ssrRenderComponent(VCarousel, {
            "hide-delimiter-background": "",
            cycle: "",
            "model-value": "1",
            direction: "vertical",
            "show-arrows": "hover",
            style: { "border-radius": "20px", "height": "var(--top-slider-height)" }
          }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(`<!--[-->`);
                ssrRenderList(_ctx.topSliderAnimeList, (anime) => {
                  _push3(ssrRenderComponent(VCarouselItem, {
                    key: anime.id,
                    cover: "",
                    link: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(VImg, {
                          class: "top-slider-anime-image",
                          "lazy-src": anime.poster.originalUrl,
                          src: anime.poster.originalUrl,
                          alt: anime.russian,
                          cover: "",
                          style: { "position": "absolute", "right": "0" }
                        }, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(VCard, {
                          class: "pa-2 d-flex flex-column justify-center top-slider-anime-card",
                          hover: "",
                          color: "",
                          link: "",
                          ripple: false
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(VCardTitle, {
                                class: "fill-height align-end text-wrap top-slider-anime-title",
                                style: {}
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardSubtitle, { class: "pt-0" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`\u041E\u0446\u0435\u043D\u043A\u0430 ${ssrInterpolate(anime.score)}`);
                                  } else {
                                    return [
                                      createTextVNode("\u041E\u0446\u0435\u043D\u043A\u0430 " + toDisplayString(anime.score), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardText, { class: "top-slider-anime-cart-text" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`<p data-v-6b4649b5${_scopeId5}>${ssrInterpolate(_ctx.cleanDescription(anime.description))}</p>`);
                                  } else {
                                    return [
                                      createVNode("p", null, toDisplayString(_ctx.cleanDescription(anime.description)), 1)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(VCardActions, { class: "pa-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VBtn, {
                                      variant: "tonal",
                                      "prepend-icon": "mdi-play",
                                      loading: _ctx.loading,
                                      onClick: ($event) => _ctx.openAnime(anime.id)
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(` \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C `);
                                        } else {
                                          return [
                                            createTextVNode(" \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C ")
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VBtn, {
                                        variant: "tonal",
                                        "prepend-icon": "mdi-play",
                                        loading: _ctx.loading,
                                        onClick: ($event) => _ctx.openAnime(anime.id)
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C ")
                                        ]),
                                        _: 2
                                      }, 1032, ["loading", "onClick"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(VCardTitle, {
                                  class: "fill-height align-end text-wrap top-slider-anime-title",
                                  textContent: toDisplayString(anime.russian),
                                  style: {}
                                }, null, 8, ["textContent"]),
                                createVNode(VCardSubtitle, { class: "pt-0" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041E\u0446\u0435\u043D\u043A\u0430 " + toDisplayString(anime.score), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardText, { class: "top-slider-anime-cart-text" }, {
                                  default: withCtx(() => [
                                    createVNode("p", null, toDisplayString(_ctx.cleanDescription(anime.description)), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode(VCardActions, { class: "pa-4" }, {
                                  default: withCtx(() => [
                                    createVNode(VBtn, {
                                      variant: "tonal",
                                      "prepend-icon": "mdi-play",
                                      loading: _ctx.loading,
                                      onClick: ($event) => _ctx.openAnime(anime.id)
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C ")
                                      ]),
                                      _: 2
                                    }, 1032, ["loading", "onClick"])
                                  ]),
                                  _: 2
                                }, 1024)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(VImg, {
                            class: "top-slider-anime-image",
                            "lazy-src": anime.poster.originalUrl,
                            src: anime.poster.originalUrl,
                            alt: anime.russian,
                            cover: "",
                            style: { "position": "absolute", "right": "0" }
                          }, null, 8, ["lazy-src", "src", "alt"]),
                          createVNode(VCard, {
                            class: "pa-2 d-flex flex-column justify-center top-slider-anime-card",
                            hover: "",
                            color: "",
                            link: "",
                            ripple: false
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, {
                                class: "fill-height align-end text-wrap top-slider-anime-title",
                                textContent: toDisplayString(anime.russian),
                                style: {}
                              }, null, 8, ["textContent"]),
                              createVNode(VCardSubtitle, { class: "pt-0" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041E\u0446\u0435\u043D\u043A\u0430 " + toDisplayString(anime.score), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardText, { class: "top-slider-anime-cart-text" }, {
                                default: withCtx(() => [
                                  createVNode("p", null, toDisplayString(_ctx.cleanDescription(anime.description)), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode(VCardActions, { class: "pa-4" }, {
                                default: withCtx(() => [
                                  createVNode(VBtn, {
                                    variant: "tonal",
                                    "prepend-icon": "mdi-play",
                                    loading: _ctx.loading,
                                    onClick: ($event) => _ctx.openAnime(anime.id)
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C ")
                                    ]),
                                    _: 2
                                  }, 1032, ["loading", "onClick"])
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
                  }, _parent3, _scopeId2));
                });
                _push3(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.topSliderAnimeList, (anime) => {
                    return openBlock(), createBlock(VCarouselItem, {
                      key: anime.id,
                      cover: "",
                      link: ""
                    }, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          class: "top-slider-anime-image",
                          "lazy-src": anime.poster.originalUrl,
                          src: anime.poster.originalUrl,
                          alt: anime.russian,
                          cover: "",
                          style: { "position": "absolute", "right": "0" }
                        }, null, 8, ["lazy-src", "src", "alt"]),
                        createVNode(VCard, {
                          class: "pa-2 d-flex flex-column justify-center top-slider-anime-card",
                          hover: "",
                          color: "",
                          link: "",
                          ripple: false
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, {
                              class: "fill-height align-end text-wrap top-slider-anime-title",
                              textContent: toDisplayString(anime.russian),
                              style: {}
                            }, null, 8, ["textContent"]),
                            createVNode(VCardSubtitle, { class: "pt-0" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041E\u0446\u0435\u043D\u043A\u0430 " + toDisplayString(anime.score), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardText, { class: "top-slider-anime-cart-text" }, {
                              default: withCtx(() => [
                                createVNode("p", null, toDisplayString(_ctx.cleanDescription(anime.description)), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(VCardActions, { class: "pa-4" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  variant: "tonal",
                                  "prepend-icon": "mdi-play",
                                  loading: _ctx.loading,
                                  onClick: ($event) => _ctx.openAnime(anime.id)
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C ")
                                  ]),
                                  _: 2
                                }, 1032, ["loading", "onClick"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        }
      } else {
        return [
          _ctx.topSliderAnimeList.length === 0 ? (openBlock(), createBlock(VSkeletonLoader, {
            key: 0,
            type: "list-item-three-line, list-item-three-line, list-item-three-line, list-item-three-line",
            width: "100%",
            style: { "border-radius": "20px", "height": "var(--top-slider-height)" }
          })) : (openBlock(), createBlock(VCarousel, {
            key: 1,
            "hide-delimiter-background": "",
            cycle: "",
            "model-value": "1",
            direction: "vertical",
            "show-arrows": "hover",
            style: { "border-radius": "20px", "height": "var(--top-slider-height)" }
          }, {
            default: withCtx(() => [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.topSliderAnimeList, (anime) => {
                return openBlock(), createBlock(VCarouselItem, {
                  key: anime.id,
                  cover: "",
                  link: ""
                }, {
                  default: withCtx(() => [
                    createVNode(VImg, {
                      class: "top-slider-anime-image",
                      "lazy-src": anime.poster.originalUrl,
                      src: anime.poster.originalUrl,
                      alt: anime.russian,
                      cover: "",
                      style: { "position": "absolute", "right": "0" }
                    }, null, 8, ["lazy-src", "src", "alt"]),
                    createVNode(VCard, {
                      class: "pa-2 d-flex flex-column justify-center top-slider-anime-card",
                      hover: "",
                      color: "",
                      link: "",
                      ripple: false
                    }, {
                      default: withCtx(() => [
                        createVNode(VCardTitle, {
                          class: "fill-height align-end text-wrap top-slider-anime-title",
                          textContent: toDisplayString(anime.russian),
                          style: {}
                        }, null, 8, ["textContent"]),
                        createVNode(VCardSubtitle, { class: "pt-0" }, {
                          default: withCtx(() => [
                            createTextVNode("\u041E\u0446\u0435\u043D\u043A\u0430 " + toDisplayString(anime.score), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCardText, { class: "top-slider-anime-cart-text" }, {
                          default: withCtx(() => [
                            createVNode("p", null, toDisplayString(_ctx.cleanDescription(anime.description)), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(VCardActions, { class: "pa-4" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              variant: "tonal",
                              "prepend-icon": "mdi-play",
                              loading: _ctx.loading,
                              onClick: ($event) => _ctx.openAnime(anime.id)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C ")
                              ]),
                              _: 2
                            }, 1032, ["loading", "onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ]),
            _: 1
          }))
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TopSlider.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-6b4649b5"]]);
const makeVDialogProps = propsFactory({
  fullscreen: Boolean,
  retainFocus: {
    type: Boolean,
    default: true
  },
  scrollable: Boolean,
  ...makeVOverlayProps({
    origin: "center center",
    scrollStrategy: "block",
    transition: {
      component: VDialogTransition
    },
    zIndex: 2400
  })
}, "VDialog");
const VDialog = genericComponent()({
  name: "VDialog",
  props: makeVDialogProps(),
  emits: {
    "update:modelValue": (value) => true,
    afterLeave: () => true
  },
  setup(props, _ref) {
    let {
      emit,
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const overlay = ref();
    function onAfterEnter() {
      var _a;
      if (((_a = overlay.value) == null ? void 0 : _a.contentEl) && !overlay.value.contentEl.contains((void 0).activeElement)) {
        overlay.value.contentEl.focus({
          preventScroll: true
        });
      }
    }
    function onAfterLeave() {
      emit("afterLeave");
    }
    watch(isActive, async (val) => {
      var _a;
      if (!val) {
        await nextTick();
        (_a = overlay.value.activatorEl) == null ? void 0 : _a.focus({
          preventScroll: true
        });
      }
    });
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      const activatorProps = mergeProps({
        "aria-haspopup": "dialog",
        "aria-expanded": String(isActive.value)
      }, props.activatorProps);
      const contentProps = mergeProps({
        tabindex: -1
      }, props.contentProps);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "class": ["v-dialog", {
          "v-dialog--fullscreen": props.fullscreen,
          "v-dialog--scrollable": props.scrollable
        }, props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "aria-modal": "true",
        "activatorProps": activatorProps,
        "contentProps": contentProps,
        "role": "dialog",
        "onAfterEnter": onAfterEnter,
        "onAfterLeave": onAfterLeave
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VDialog"
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({}, overlay);
  }
});
const _sfc_main$3 = defineComponent({
  props: {
    selectedAnime: Object
  },
  data() {
    return {
      cleanDescription,
      openAnime,
      dialog: false,
      loading: false
    };
  },
  emits: ["update:dialog", "open-anime"],
  methods: {
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    }
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VDialog, mergeProps({
    modelValue: _ctx.dialog,
    "onUpdate:modelValue": ($event) => _ctx.dialog = $event,
    class: "most-anime-dialog-modal-panel"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCard, {
          color: "#212121",
          class: "d-flex flex-column most-anime-dialog-modal-panel-card",
          rounded: "lg"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="most-anime-dialog-modal-panel-one" data-v-9e60ff08${_scopeId2}>`);
              _push3(ssrRenderComponent(VCarousel, {
                style: { "width": "100%" },
                class: "most-anime-dialog-modal-carousel",
                "hide-delimiters": ""
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCarouselItem, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VImg, {
                            "lazy-src": _ctx.selectedAnime.poster.mainUrl,
                            src: _ctx.selectedAnime.poster.mainUrl,
                            alt: _ctx.selectedAnime.name,
                            width: "100%",
                            cover: ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VImg, {
                              "lazy-src": _ctx.selectedAnime.poster.mainUrl,
                              src: _ctx.selectedAnime.poster.mainUrl,
                              alt: _ctx.selectedAnime.name,
                              width: "100%",
                              cover: ""
                            }, null, 8, ["lazy-src", "src", "alt"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<!--[-->`);
                    ssrRenderList(_ctx.selectedAnime.videos, (video) => {
                      _push4(ssrRenderComponent(VCarouselItem, null, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(`<iframe${ssrRenderAttr("src", video.playerUrl)} width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen data-v-9e60ff08${_scopeId4}></iframe>`);
                          } else {
                            return [
                              createVNode("iframe", {
                                src: video.playerUrl,
                                width: "100%",
                                height: "100%",
                                frameborder: "0",
                                allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                allowfullscreen: ""
                              }, null, 8, ["src"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      createVNode(VCarouselItem, null, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            "lazy-src": _ctx.selectedAnime.poster.mainUrl,
                            src: _ctx.selectedAnime.poster.mainUrl,
                            alt: _ctx.selectedAnime.name,
                            width: "100%",
                            cover: ""
                          }, null, 8, ["lazy-src", "src", "alt"])
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.selectedAnime.videos, (video) => {
                        return openBlock(), createBlock(VCarouselItem, null, {
                          default: withCtx(() => [
                            createVNode("iframe", {
                              src: video.playerUrl,
                              width: "100%",
                              height: "100%",
                              frameborder: "0",
                              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                              allowfullscreen: ""
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 256))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div><div class="most-anime-dialog-modal-panel-two" data-v-9e60ff08${_scopeId2}>`);
              _push3(ssrRenderComponent(VCardTitle, { class: "headline pb-0 d-flex justify-space-between" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<p class="text-wrap" data-v-9e60ff08${_scopeId3}>${ssrInterpolate(_ctx.selectedAnime.russian)}</p>`);
                    _push4(ssrRenderComponent(VBtn, {
                      variant: "tonal",
                      "min-width": "30px",
                      "min-height": "30px",
                      onClick: _ctx.closeDialog
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VIcon, null, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`mdi-close`);
                              } else {
                                return [
                                  createTextVNode("mdi-close")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VIcon, null, {
                              default: withCtx(() => [
                                createTextVNode("mdi-close")
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
                      createVNode("p", { class: "text-wrap" }, toDisplayString(_ctx.selectedAnime.russian), 1),
                      createVNode(VBtn, {
                        variant: "tonal",
                        "min-width": "30px",
                        "min-height": "30px",
                        onClick: _ctx.closeDialog
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-close")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCardSubtitle, {
                class: "d-flex ga-1",
                style: { "font-size": "0.8em" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div data-v-9e60ff08${_scopeId3}>\u0422\u0438\u043F: ${ssrInterpolate(_ctx.selectedAnime.kind)}</div><span data-v-9e60ff08${_scopeId3}>\u2022</span><div data-v-9e60ff08${_scopeId3}>\u041E\u0446\u0435\u043D\u043A\u0430: ${ssrInterpolate(_ctx.selectedAnime.score)}</div><span data-v-9e60ff08${_scopeId3}>\u2022</span><div data-v-9e60ff08${_scopeId3}>\u0413\u043E\u0434 \u0432\u044B\u0445\u043E\u0434\u0430: ${ssrInterpolate(_ctx.selectedAnime.airedOn.year)}</div>`);
                  } else {
                    return [
                      createVNode("div", null, "\u0422\u0438\u043F: " + toDisplayString(_ctx.selectedAnime.kind), 1),
                      createVNode("span", null, "\u2022"),
                      createVNode("div", null, "\u041E\u0446\u0435\u043D\u043A\u0430: " + toDisplayString(_ctx.selectedAnime.score), 1),
                      createVNode("span", null, "\u2022"),
                      createVNode("div", null, "\u0413\u043E\u0434 \u0432\u044B\u0445\u043E\u0434\u0430: " + toDisplayString(_ctx.selectedAnime.airedOn.year), 1)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCardText, {
                style: { "font-family": "'Inter', sans-serif", "overflow": "hidden", "color": "#9e9e9e", "display": "-webkit-box", "-webkit-line-clamp": "5", "-webkit-box-orient": "vertical" },
                class: "mt-2 most-anime-dialog-modal-panel-text pa-0 pl-4 pr-4"
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCardActions, { class: "d-flex ga-1 pa-4 most-anime-dialog-modal-panel-actions" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VBtn, {
                      "prepend-icon": "mdi-play",
                      variant: "flat",
                      loading: _ctx.loading,
                      theme: "customDark",
                      onClick: ($event) => _ctx.openAnime(_ctx.selectedAnime.id)
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C `);
                        } else {
                          return [
                            createTextVNode("\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VBtn, {
                      "prepend-icon": "mdi-bookmark",
                      variant: "tonal",
                      disabled: "",
                      theme: "customDark"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435 `);
                        } else {
                          return [
                            createTextVNode("\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VBtn, {
                        "prepend-icon": "mdi-play",
                        variant: "flat",
                        loading: _ctx.loading,
                        theme: "customDark",
                        onClick: ($event) => _ctx.openAnime(_ctx.selectedAnime.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C ")
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"]),
                      createVNode(VBtn, {
                        "prepend-icon": "mdi-bookmark",
                        variant: "tonal",
                        disabled: "",
                        theme: "customDark"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435 ")
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div>`);
            } else {
              return [
                createVNode("div", { class: "most-anime-dialog-modal-panel-one" }, [
                  createVNode(VCarousel, {
                    style: { "width": "100%" },
                    class: "most-anime-dialog-modal-carousel",
                    "hide-delimiters": ""
                  }, {
                    default: withCtx(() => [
                      createVNode(VCarouselItem, null, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            "lazy-src": _ctx.selectedAnime.poster.mainUrl,
                            src: _ctx.selectedAnime.poster.mainUrl,
                            alt: _ctx.selectedAnime.name,
                            width: "100%",
                            cover: ""
                          }, null, 8, ["lazy-src", "src", "alt"])
                        ]),
                        _: 1
                      }),
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.selectedAnime.videos, (video) => {
                        return openBlock(), createBlock(VCarouselItem, null, {
                          default: withCtx(() => [
                            createVNode("iframe", {
                              src: video.playerUrl,
                              width: "100%",
                              height: "100%",
                              frameborder: "0",
                              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                              allowfullscreen: ""
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024);
                      }), 256))
                    ]),
                    _: 1
                  })
                ]),
                createVNode("div", { class: "most-anime-dialog-modal-panel-two" }, [
                  createVNode(VCardTitle, { class: "headline pb-0 d-flex justify-space-between" }, {
                    default: withCtx(() => [
                      createVNode("p", { class: "text-wrap" }, toDisplayString(_ctx.selectedAnime.russian), 1),
                      createVNode(VBtn, {
                        variant: "tonal",
                        "min-width": "30px",
                        "min-height": "30px",
                        onClick: _ctx.closeDialog
                      }, {
                        default: withCtx(() => [
                          createVNode(VIcon, null, {
                            default: withCtx(() => [
                              createTextVNode("mdi-close")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"])
                    ]),
                    _: 1
                  }),
                  createVNode(VCardSubtitle, {
                    class: "d-flex ga-1",
                    style: { "font-size": "0.8em" }
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, "\u0422\u0438\u043F: " + toDisplayString(_ctx.selectedAnime.kind), 1),
                      createVNode("span", null, "\u2022"),
                      createVNode("div", null, "\u041E\u0446\u0435\u043D\u043A\u0430: " + toDisplayString(_ctx.selectedAnime.score), 1),
                      createVNode("span", null, "\u2022"),
                      createVNode("div", null, "\u0413\u043E\u0434 \u0432\u044B\u0445\u043E\u0434\u0430: " + toDisplayString(_ctx.selectedAnime.airedOn.year), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(VCardText, {
                    textContent: toDisplayString(_ctx.cleanDescription(_ctx.selectedAnime.description)),
                    style: { "font-family": "'Inter', sans-serif", "overflow": "hidden", "color": "#9e9e9e", "display": "-webkit-box", "-webkit-line-clamp": "5", "-webkit-box-orient": "vertical" },
                    class: "mt-2 most-anime-dialog-modal-panel-text pa-0 pl-4 pr-4"
                  }, null, 8, ["textContent"]),
                  createVNode(VCardActions, { class: "d-flex ga-1 pa-4 most-anime-dialog-modal-panel-actions" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        "prepend-icon": "mdi-play",
                        variant: "flat",
                        loading: _ctx.loading,
                        theme: "customDark",
                        onClick: ($event) => _ctx.openAnime(_ctx.selectedAnime.id)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C ")
                        ]),
                        _: 1
                      }, 8, ["loading", "onClick"]),
                      createVNode(VBtn, {
                        "prepend-icon": "mdi-bookmark",
                        variant: "tonal",
                        disabled: "",
                        theme: "customDark"
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435 ")
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
        return [
          createVNode(VCard, {
            color: "#212121",
            class: "d-flex flex-column most-anime-dialog-modal-panel-card",
            rounded: "lg"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "most-anime-dialog-modal-panel-one" }, [
                createVNode(VCarousel, {
                  style: { "width": "100%" },
                  class: "most-anime-dialog-modal-carousel",
                  "hide-delimiters": ""
                }, {
                  default: withCtx(() => [
                    createVNode(VCarouselItem, null, {
                      default: withCtx(() => [
                        createVNode(VImg, {
                          "lazy-src": _ctx.selectedAnime.poster.mainUrl,
                          src: _ctx.selectedAnime.poster.mainUrl,
                          alt: _ctx.selectedAnime.name,
                          width: "100%",
                          cover: ""
                        }, null, 8, ["lazy-src", "src", "alt"])
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.selectedAnime.videos, (video) => {
                      return openBlock(), createBlock(VCarouselItem, null, {
                        default: withCtx(() => [
                          createVNode("iframe", {
                            src: video.playerUrl,
                            width: "100%",
                            height: "100%",
                            frameborder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                            allowfullscreen: ""
                          }, null, 8, ["src"])
                        ]),
                        _: 2
                      }, 1024);
                    }), 256))
                  ]),
                  _: 1
                })
              ]),
              createVNode("div", { class: "most-anime-dialog-modal-panel-two" }, [
                createVNode(VCardTitle, { class: "headline pb-0 d-flex justify-space-between" }, {
                  default: withCtx(() => [
                    createVNode("p", { class: "text-wrap" }, toDisplayString(_ctx.selectedAnime.russian), 1),
                    createVNode(VBtn, {
                      variant: "tonal",
                      "min-width": "30px",
                      "min-height": "30px",
                      onClick: _ctx.closeDialog
                    }, {
                      default: withCtx(() => [
                        createVNode(VIcon, null, {
                          default: withCtx(() => [
                            createTextVNode("mdi-close")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ]),
                  _: 1
                }),
                createVNode(VCardSubtitle, {
                  class: "d-flex ga-1",
                  style: { "font-size": "0.8em" }
                }, {
                  default: withCtx(() => [
                    createVNode("div", null, "\u0422\u0438\u043F: " + toDisplayString(_ctx.selectedAnime.kind), 1),
                    createVNode("span", null, "\u2022"),
                    createVNode("div", null, "\u041E\u0446\u0435\u043D\u043A\u0430: " + toDisplayString(_ctx.selectedAnime.score), 1),
                    createVNode("span", null, "\u2022"),
                    createVNode("div", null, "\u0413\u043E\u0434 \u0432\u044B\u0445\u043E\u0434\u0430: " + toDisplayString(_ctx.selectedAnime.airedOn.year), 1)
                  ]),
                  _: 1
                }),
                createVNode(VCardText, {
                  textContent: toDisplayString(_ctx.cleanDescription(_ctx.selectedAnime.description)),
                  style: { "font-family": "'Inter', sans-serif", "overflow": "hidden", "color": "#9e9e9e", "display": "-webkit-box", "-webkit-line-clamp": "5", "-webkit-box-orient": "vertical" },
                  class: "mt-2 most-anime-dialog-modal-panel-text pa-0 pl-4 pr-4"
                }, null, 8, ["textContent"]),
                createVNode(VCardActions, { class: "d-flex ga-1 pa-4 most-anime-dialog-modal-panel-actions" }, {
                  default: withCtx(() => [
                    createVNode(VBtn, {
                      "prepend-icon": "mdi-play",
                      variant: "flat",
                      loading: _ctx.loading,
                      theme: "customDark",
                      onClick: ($event) => _ctx.openAnime(_ctx.selectedAnime.id)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C ")
                      ]),
                      _: 1
                    }, 8, ["loading", "onClick"]),
                    createVNode(VBtn, {
                      "prepend-icon": "mdi-bookmark",
                      variant: "tonal",
                      disabled: "",
                      theme: "customDark"
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u0412 \u0438\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435 ")
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ])
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/others/AnimeDialog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const AnimeDialog = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-9e60ff08"]]);
const _sfc_main$2 = defineComponent({
  components: {
    AnimeDialog
  },
  data() {
    return {
      selectedAnime: {},
      mostAnimeList: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const { value } = await Storage.get({ key: "mostAnimeList" });
        const { value: expirationDateString } = await Storage.get({ key: "mostAnimeListExpirationDate" });
        if (value && expirationDateString) {
          const expirationDate = parseInt(expirationDateString, 10);
          const currentDate = (/* @__PURE__ */ new Date()).getTime();
          if (currentDate < expirationDate) {
            this.mostAnimeList = JSON.parse(value);
          } else {
            await this.fetchAnimeData();
          }
        } else {
          await this.fetchAnimeData();
        }
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    },
    async fetchAnimeData() {
      try {
        const response = await axios.post("https://shikimori.one/api/graphql", {
          query: `
                query {
                  ongoingAnime: animes(season: "2023_2024", limit: 6, order: popularity, status: "ongoing", kind: "tv") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  anonseAnime: animes(season: "2023_2024", limit: 6, order: popularity, status: "anons", kind: "tv,ona,ova") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  topAnime: animes(limit: 6, order: ranked, status: "released", kind: "tv") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  releasedAnime: animes(limit: 6, order: popularity, status: "released", kind: "tv") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  filmsAnime: animes(season: "2020_2024", limit: 6, order: popularity, status: "released", kind: "movie") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  ovaAnime: animes(season: "2022_2024", limit: 6, order: popularity, status: "released", kind: "ova") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  onaAnime: animes(season: "2022_2024", limit: 6, order: popularity, status: "released", kind: "ona") {
                    id
                    russian
                    kind
                    score
                    description
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                }
              `
        }, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        });
        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }
        const data = response.data;
        const animeList = [
          {
            title: "\u041E\u043D\u0433\u043E\u0438\u043D\u0433\u0438",
            description: "\u0412\u0441\u0442\u0443\u043F\u0430\u0439 \u0432 \u043D\u043E\u0432\u044B\u0435 \u044D\u043F\u0438\u0437\u043E\u0434\u044B \u043F\u0440\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439, \u0441\u043B\u0435\u0434\u0438 \u0437\u0430 \u0441\u044E\u0436\u0435\u0442\u043E\u043C!",
            anime: data.data.ongoingAnime,
            moreLink: "status=ongoing&order=popularity"
          },
          {
            title: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 ONA",
            description: "ONA \u0441 \u0443\u043D\u0438\u043A\u0430\u043B\u044C\u043D\u044B\u043C\u0438 \u0438 \u0437\u0430\u0445\u0432\u0430\u0442\u044B\u0432\u0430\u044E\u0449\u0438\u043C\u0438 \u0441\u044E\u0436\u0435\u0442\u0430\u043C\u0438!",
            anime: data.data.onaAnime,
            moreLink: "kind=ona&order=popularity"
          },
          {
            title: "\u0422\u043E\u043F \u0430\u043D\u0438\u043C\u0435",
            description: "\u041F\u043E\u0433\u0440\u0443\u0436\u0430\u0439\u0441\u044F \u0432 \u043B\u0443\u0447\u0448\u0438\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0430\u043D\u0438\u043C\u0435!",
            anime: data.data.topAnime,
            moreLink: "kind=tv&order=popularity"
          },
          {
            title: "\u041F\u043E\u043F\u0443\u043B\u044F\u0440\u043D\u044B\u0435 OVA",
            description: "\u042D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u044B\u0435 \u0430\u043D\u0438\u043C\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F!",
            anime: data.data.ovaAnime,
            moreLink: "kind=ova&order=popularity"
          },
          {
            title: "\u0410\u043D\u043E\u043D\u0441\u044B",
            description: "\u0423\u0437\u043D\u0430\u0432\u0430\u0439 \u043F\u0435\u0440\u0432\u044B\u043C \u043E \u043F\u0440\u0435\u0434\u0441\u0442\u043E\u044F\u0449\u0438\u0445 \u0440\u0435\u043B\u0438\u0437\u0430\u0445!",
            anime: data.data.anonseAnime,
            moreLink: "status=anons&order=popularity"
          },
          {
            title: "\u0417\u0430\u0432\u0435\u0440\u0448\u0435\u043D\u043D\u044B\u0435",
            description: "\u041F\u0440\u043E\u0432\u0435\u0434\u0438 \u0432\u0440\u0435\u043C\u044F \u0432 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u043A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0445 \u0430\u043D\u0438\u043C\u0435!",
            anime: data.data.releasedAnime,
            moreLink: "released=anons&order=popularity"
          },
          {
            title: "\u0424\u0438\u043B\u044C\u043C\u044B",
            description: "\u042D\u043A\u0441\u043A\u043B\u044E\u0437\u0438\u0432\u043D\u0430\u044F \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F \u0444\u0438\u043B\u044C\u043C\u043E\u0432 \u0434\u043B\u044F \u043D\u0430\u0441\u043B\u0430\u0436\u0434\u0435\u043D\u0438\u044F!",
            anime: data.data.filmsAnime,
            moreLink: "kind=movie&released=anons&order=popularity"
          }
        ];
        this.mostAnimeList = animeList;
        await Storage.set({
          key: "mostAnimeList",
          value: JSON.stringify(animeList)
        });
        const expirationDate = /* @__PURE__ */ new Date();
        expirationDate.setDate(expirationDate.getDate() + 2);
        await Storage.set({
          key: "mostAnimeListExpirationDate",
          value: expirationDate.getTime().toString()
        });
      } catch (error) {
        console.error("Error fetching anime data:", error);
      }
    },
    openDialog(anime) {
      this.selectedAnime = anime;
      this.$refs.animeDialogRef.openDialog();
    }
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_anime_dialog = resolveComponent("anime-dialog");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(VContainer, {
    class: "most-anime-container",
    style: { "max-width": "var(--ota-ku-max-width)", "padding": "20px 10px 10px 10px", "align-items": "center" }
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        if (_ctx.mostAnimeList.length === 0) {
          _push2(`<div${_scopeId}><!--[-->`);
          ssrRenderList(10, (n) => {
            _push2(ssrRenderComponent(VCard, {
              variant: "text",
              class: "pa-0",
              key: n
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VSkeletonLoader, {
                    class: "mb-3",
                    type: "list-item-two-line"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VSkeletonLoader, {
                      class: "mb-3",
                      type: "list-item-two-line"
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          });
          _push2(`<!--]--></div>`);
        } else {
          _push2(`<div${_scopeId}><!--[-->`);
          ssrRenderList(_ctx.mostAnimeList, (category) => {
            _push2(`<div class=""${_scopeId}>`);
            _push2(ssrRenderComponent(VCard, {
              variant: "text",
              class: "ota-anime-containers pa-0"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(VCardTitle, { class: "ota-anime-containers-v-title pa-0 d-flex justify-space-between align-center" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(category.title)} `);
                        _push4(ssrRenderComponent(VBtn, {
                          size: "small",
                          rounded: "xl",
                          color: "white",
                          onClick: ($event) => this.$router.push(`catalog?${category.moreLink}`)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u0411\u043E\u043B\u044C\u0448\u0435 `);
                            } else {
                              return [
                                createTextVNode(" \u0411\u043E\u043B\u044C\u0448\u0435 ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createTextVNode(toDisplayString(category.title) + " ", 1),
                          createVNode(VBtn, {
                            size: "small",
                            rounded: "xl",
                            color: "white",
                            onClick: ($event) => this.$router.push(`catalog?${category.moreLink}`)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0411\u043E\u043B\u044C\u0448\u0435 ")
                            ]),
                            _: 2
                          }, 1032, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(category.description)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(category.description), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(VRow, {
                    "no-gutters": "",
                    class: "most-anime-container"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(category.anime, (anime) => {
                          _push4(ssrRenderComponent(VCol, {
                            key: anime.id,
                            cols: "4",
                            xxl: "2",
                            xl: "2",
                            lg: "2",
                            md: "2",
                            sm: "3",
                            xs: "4",
                            class: "most-anime-container-item pa-xxl-2 pa-xl-2 pa-lg-2 pa-md-1 pa-sm-1 pa-1"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(VCard, {
                                  variant: "text",
                                  link: "",
                                  rounded: "lg",
                                  onClick: ($event) => _ctx.openDialog(anime)
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(VImg, {
                                        "lazy-src": anime.poster.mainUrl,
                                        src: anime.poster.mainUrl,
                                        alt: anime.name,
                                        rounded: "lg",
                                        "aspect-ratio": "0.7",
                                        cover: "",
                                        style: { "pointer-events": "none", "user-select": "none" }
                                      }, null, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCardTitle, {
                                        class: "font-weight-regular pa-0",
                                        style: { "font-size": "1em" }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(anime.russian)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(anime.russian), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(VCardSubtitle, {
                                        class: "pa-0 d-flex ga-1 pt-0 pb-3",
                                        style: { "font-size": "0.8em" }
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(` \u0422\u0438\u043F: ${ssrInterpolate(anime.kind)} <span${_scopeId6}>\u2022</span> ${ssrInterpolate(anime.score)} `);
                                            _push7(ssrRenderComponent(VIcon, { class: "" }, null, _parent7, _scopeId6));
                                          } else {
                                            return [
                                              createTextVNode(" \u0422\u0438\u043F: " + toDisplayString(anime.kind) + " ", 1),
                                              createVNode("span", null, "\u2022"),
                                              createTextVNode(" " + toDisplayString(anime.score) + " ", 1),
                                              createVNode(VIcon, { class: "" })
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(VImg, {
                                          "lazy-src": anime.poster.mainUrl,
                                          src: anime.poster.mainUrl,
                                          alt: anime.name,
                                          rounded: "lg",
                                          "aspect-ratio": "0.7",
                                          cover: "",
                                          style: { "pointer-events": "none", "user-select": "none" }
                                        }, null, 8, ["lazy-src", "src", "alt"]),
                                        createVNode(VCardTitle, {
                                          class: "font-weight-regular pa-0",
                                          style: { "font-size": "1em" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(anime.russian), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardSubtitle, {
                                          class: "pa-0 d-flex ga-1 pt-0 pb-3",
                                          style: { "font-size": "0.8em" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" \u0422\u0438\u043F: " + toDisplayString(anime.kind) + " ", 1),
                                            createVNode("span", null, "\u2022"),
                                            createTextVNode(" " + toDisplayString(anime.score) + " ", 1),
                                            createVNode(VIcon, { class: "" })
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(VCard, {
                                    variant: "text",
                                    link: "",
                                    rounded: "lg",
                                    onClick: ($event) => _ctx.openDialog(anime)
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(VImg, {
                                        "lazy-src": anime.poster.mainUrl,
                                        src: anime.poster.mainUrl,
                                        alt: anime.name,
                                        rounded: "lg",
                                        "aspect-ratio": "0.7",
                                        cover: "",
                                        style: { "pointer-events": "none", "user-select": "none" }
                                      }, null, 8, ["lazy-src", "src", "alt"]),
                                      createVNode(VCardTitle, {
                                        class: "font-weight-regular pa-0",
                                        style: { "font-size": "1em" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(anime.russian), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardSubtitle, {
                                        class: "pa-0 d-flex ga-1 pt-0 pb-3",
                                        style: { "font-size": "0.8em" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" \u0422\u0438\u043F: " + toDisplayString(anime.kind) + " ", 1),
                                          createVNode("span", null, "\u2022"),
                                          createTextVNode(" " + toDisplayString(anime.score) + " ", 1),
                                          createVNode(VIcon, { class: "" })
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(category.anime, (anime) => {
                            return openBlock(), createBlock(VCol, {
                              key: anime.id,
                              cols: "4",
                              xxl: "2",
                              xl: "2",
                              lg: "2",
                              md: "2",
                              sm: "3",
                              xs: "4",
                              class: "most-anime-container-item pa-xxl-2 pa-xl-2 pa-lg-2 pa-md-1 pa-sm-1 pa-1"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCard, {
                                  variant: "text",
                                  link: "",
                                  rounded: "lg",
                                  onClick: ($event) => _ctx.openDialog(anime)
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VImg, {
                                      "lazy-src": anime.poster.mainUrl,
                                      src: anime.poster.mainUrl,
                                      alt: anime.name,
                                      rounded: "lg",
                                      "aspect-ratio": "0.7",
                                      cover: "",
                                      style: { "pointer-events": "none", "user-select": "none" }
                                    }, null, 8, ["lazy-src", "src", "alt"]),
                                    createVNode(VCardTitle, {
                                      class: "font-weight-regular pa-0",
                                      style: { "font-size": "1em" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(anime.russian), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardSubtitle, {
                                      class: "pa-0 d-flex ga-1 pt-0 pb-3",
                                      style: { "font-size": "0.8em" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" \u0422\u0438\u043F: " + toDisplayString(anime.kind) + " ", 1),
                                        createVNode("span", null, "\u2022"),
                                        createTextVNode(" " + toDisplayString(anime.score) + " ", 1),
                                        createVNode(VIcon, { class: "" })
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(VCardTitle, { class: "ota-anime-containers-v-title pa-0 d-flex justify-space-between align-center" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(category.title) + " ", 1),
                        createVNode(VBtn, {
                          size: "small",
                          rounded: "xl",
                          color: "white",
                          onClick: ($event) => this.$router.push(`catalog?${category.moreLink}`)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0411\u043E\u043B\u044C\u0448\u0435 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(category.description), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VRow, {
                      "no-gutters": "",
                      class: "most-anime-container"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(category.anime, (anime) => {
                          return openBlock(), createBlock(VCol, {
                            key: anime.id,
                            cols: "4",
                            xxl: "2",
                            xl: "2",
                            lg: "2",
                            md: "2",
                            sm: "3",
                            xs: "4",
                            class: "most-anime-container-item pa-xxl-2 pa-xl-2 pa-lg-2 pa-md-1 pa-sm-1 pa-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                variant: "text",
                                link: "",
                                rounded: "lg",
                                onClick: ($event) => _ctx.openDialog(anime)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    "lazy-src": anime.poster.mainUrl,
                                    src: anime.poster.mainUrl,
                                    alt: anime.name,
                                    rounded: "lg",
                                    "aspect-ratio": "0.7",
                                    cover: "",
                                    style: { "pointer-events": "none", "user-select": "none" }
                                  }, null, 8, ["lazy-src", "src", "alt"]),
                                  createVNode(VCardTitle, {
                                    class: "font-weight-regular pa-0",
                                    style: { "font-size": "1em" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(anime.russian), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardSubtitle, {
                                    class: "pa-0 d-flex ga-1 pt-0 pb-3",
                                    style: { "font-size": "0.8em" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0422\u0438\u043F: " + toDisplayString(anime.kind) + " ", 1),
                                      createVNode("span", null, "\u2022"),
                                      createTextVNode(" " + toDisplayString(anime.score) + " ", 1),
                                      createVNode(VIcon, { class: "" })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div>`);
          });
          _push2(`<!--]--></div>`);
        }
      } else {
        return [
          _ctx.mostAnimeList.length === 0 ? (openBlock(), createBlock("div", { key: 0 }, [
            (openBlock(), createBlock(Fragment, null, renderList(10, (n) => {
              return createVNode(VCard, {
                variant: "text",
                class: "pa-0",
                key: n
              }, {
                default: withCtx(() => [
                  createVNode(VSkeletonLoader, {
                    class: "mb-3",
                    type: "list-item-two-line"
                  })
                ]),
                _: 2
              }, 1024);
            }), 64))
          ])) : (openBlock(), createBlock("div", { key: 1 }, [
            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.mostAnimeList, (category) => {
              return openBlock(), createBlock("div", {
                key: category.title,
                class: ""
              }, [
                createVNode(VCard, {
                  variant: "text",
                  class: "ota-anime-containers pa-0"
                }, {
                  default: withCtx(() => [
                    createVNode(VCardTitle, { class: "ota-anime-containers-v-title pa-0 d-flex justify-space-between align-center" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(category.title) + " ", 1),
                        createVNode(VBtn, {
                          size: "small",
                          rounded: "xl",
                          color: "white",
                          onClick: ($event) => this.$router.push(`catalog?${category.moreLink}`)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u0411\u043E\u043B\u044C\u0448\u0435 ")
                          ]),
                          _: 2
                        }, 1032, ["onClick"])
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(category.description), 1)
                      ]),
                      _: 2
                    }, 1024),
                    createVNode(VRow, {
                      "no-gutters": "",
                      class: "most-anime-container"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(category.anime, (anime) => {
                          return openBlock(), createBlock(VCol, {
                            key: anime.id,
                            cols: "4",
                            xxl: "2",
                            xl: "2",
                            lg: "2",
                            md: "2",
                            sm: "3",
                            xs: "4",
                            class: "most-anime-container-item pa-xxl-2 pa-xl-2 pa-lg-2 pa-md-1 pa-sm-1 pa-1"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCard, {
                                variant: "text",
                                link: "",
                                rounded: "lg",
                                onClick: ($event) => _ctx.openDialog(anime)
                              }, {
                                default: withCtx(() => [
                                  createVNode(VImg, {
                                    "lazy-src": anime.poster.mainUrl,
                                    src: anime.poster.mainUrl,
                                    alt: anime.name,
                                    rounded: "lg",
                                    "aspect-ratio": "0.7",
                                    cover: "",
                                    style: { "pointer-events": "none", "user-select": "none" }
                                  }, null, 8, ["lazy-src", "src", "alt"]),
                                  createVNode(VCardTitle, {
                                    class: "font-weight-regular pa-0",
                                    style: { "font-size": "1em" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(anime.russian), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(VCardSubtitle, {
                                    class: "pa-0 d-flex ga-1 pt-0 pb-3",
                                    style: { "font-size": "0.8em" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0422\u0438\u043F: " + toDisplayString(anime.kind) + " ", 1),
                                      createVNode("span", null, "\u2022"),
                                      createTextVNode(" " + toDisplayString(anime.score) + " ", 1),
                                      createVNode(VIcon, { class: "" })
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024)
              ]);
            }), 128))
          ]))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_anime_dialog, {
    selectedAnime: _ctx.selectedAnime,
    ref: "animeDialogRef"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/MostAnimeList.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const makeVFooterProps = propsFactory({
  app: Boolean,
  color: String,
  height: {
    type: [Number, String],
    default: "auto"
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeElevationProps(),
  ...makeLayoutItemProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "footer"
  }),
  ...makeThemeProps()
}, "VFooter");
const VFooter = genericComponent()({
  name: "VFooter",
  props: makeVFooterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "color"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const autoHeight = shallowRef(32);
    const {
      resizeRef
    } = useResizeObserver();
    const height = computed(() => props.height === "auto" ? autoHeight.value : parseInt(props.height, 10));
    const {
      layoutItemStyles,
      layoutIsReady
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: computed(() => "bottom"),
      layoutSize: height,
      elementSize: computed(() => props.height === "auto" ? void 0 : height.value),
      active: computed(() => props.app),
      absolute: toRef(props, "absolute")
    });
    useRender(() => createVNode(props.tag, {
      "ref": resizeRef,
      "class": ["v-footer", themeClasses.value, backgroundColorClasses.value, borderClasses.value, elevationClasses.value, roundedClasses.value, props.class],
      "style": [backgroundColorStyles.value, props.app ? layoutItemStyles.value : {
        height: convertToUnit(props.height)
      }, props.style]
    }, slots));
    return props.app ? layoutIsReady : {};
  }
});
const _sfc_main$1 = defineComponent({
  name: "FooterComponent"
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  _push(ssrRenderComponent(VLayout, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VFooter, {
          color: "",
          theme: "customDark",
          class: "pa-0 pt-5 pb-10",
          elevation: "8"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VContainer, {
                class: "most-anime-container",
                style: { "max-width": "var(--ota-ku-max-width)", "padding": "0 10px", "align-items": "center" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="mb-1 d-flex ga-4 flex-sm-column flex-md-row"${_scopeId3}><div class="d-md-block d-sm-block d-none"${_scopeId3}><span style="${ssrRenderStyle({ "font-family": "'Inter', sans-serif", "font-size": "0.9em" })}"${_scopeId3}>\u0412\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F. \u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438\u0437 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432. \u0415\u0441\u043B\u0438 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u0432\u0430\u0448\u0438 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438, \u0438 \u043C\u044B \u043D\u0435\u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0434\u0430\u043B\u0438\u043C \u0435\u0433\u043E. \u041E\u0434\u043D\u0430\u043A\u043E \u043C\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u043C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0447\u0442\u043E \u043E\u043D \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u043D\u0430 \u0441\u0430\u0439\u0442 \u0441\u043D\u043E\u0432\u0430 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438. \u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438. \u0421\u0430\u0439\u0442 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u043B\u0438\u0446 \u0441\u0442\u0430\u0440\u0448\u0435 16+ \u043B\u0435\u0442. </span></div><div class="d-flex ga-2"${_scopeId3}><div class="text-no-wrap"${_scopeId3}><h3${_scopeId3}>\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B</h3><ul style="${ssrRenderStyle({ "font-size": "0.9em", "list-style": "none" })}"${_scopeId3}><li class="mb-1"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_router_link, { to: "/doc/privacy_policy_ru" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 `);
                        } else {
                          return [
                            createTextVNode("\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</li><li class="mb-1"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_router_link, { to: "/doc/terms_ru" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 `);
                        } else {
                          return [
                            createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</li><li class="mb-1"${_scopeId3}>`);
                    _push4(ssrRenderComponent(_component_router_link, { to: "/doc/authors_ru" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`\u041F\u0440\u0430\u0432\u043E\u043E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u0438 `);
                        } else {
                          return [
                            createTextVNode("\u041F\u0440\u0430\u0432\u043E\u043E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u0438 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</li></ul></div><div class="text-no-wrap"${_scopeId3}><h3${_scopeId3}>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</h3><ul style="${ssrRenderStyle({ "list-style": "none", "font-size": "0.9em" })}"${_scopeId3}><li class="mb-1"${_scopeId3}>Email: <span${_scopeId3}>w33bv.gl@gmail.com</span></li><li class="mb-1"${_scopeId3}>\u0422\u0435\u043B\u0435\u0444\u043E\u043D: <span${_scopeId3}>+374(94)161-331</span></li></ul></div></div></div><div class="d-flex ga-3" style="${ssrRenderStyle({ "font-size": "0.9em" })}"${_scopeId3}><span${_scopeId3}>\xA9 2023 - 2024 \u30AA\u30BF-KU OTA-KU \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B. \u0421\u0430\u0439\u0442</span><a href="https://ota-ku.ru/"${_scopeId3}>Ota-ku.ru</a></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "mb-1 d-flex ga-4 flex-sm-column flex-md-row" }, [
                        createVNode("div", { class: "d-md-block d-sm-block d-none" }, [
                          createVNode("span", { style: { "font-family": "'Inter', sans-serif", "font-size": "0.9em" } }, "\u0412\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F. \u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438\u0437 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432. \u0415\u0441\u043B\u0438 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u0432\u0430\u0448\u0438 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438, \u0438 \u043C\u044B \u043D\u0435\u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0434\u0430\u043B\u0438\u043C \u0435\u0433\u043E. \u041E\u0434\u043D\u0430\u043A\u043E \u043C\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u043C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0447\u0442\u043E \u043E\u043D \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u043D\u0430 \u0441\u0430\u0439\u0442 \u0441\u043D\u043E\u0432\u0430 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438. \u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438. \u0421\u0430\u0439\u0442 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u043B\u0438\u0446 \u0441\u0442\u0430\u0440\u0448\u0435 16+ \u043B\u0435\u0442. ")
                        ]),
                        createVNode("div", { class: "d-flex ga-2" }, [
                          createVNode("div", { class: "text-no-wrap" }, [
                            createVNode("h3", null, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"),
                            createVNode("ul", { style: { "font-size": "0.9em", "list-style": "none" } }, [
                              createVNode("li", { class: "mb-1" }, [
                                createVNode(_component_router_link, { to: "/doc/privacy_policy_ru" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("li", { class: "mb-1" }, [
                                createVNode(_component_router_link, { to: "/doc/terms_ru" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 ")
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("li", { class: "mb-1" }, [
                                createVNode(_component_router_link, { to: "/doc/authors_ru" }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u041F\u0440\u0430\u0432\u043E\u043E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u0438 ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          createVNode("div", { class: "text-no-wrap" }, [
                            createVNode("h3", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
                            createVNode("ul", { style: { "list-style": "none", "font-size": "0.9em" } }, [
                              createVNode("li", { class: "mb-1" }, [
                                createTextVNode("Email: "),
                                createVNode("span", null, "w33bv.gl@gmail.com")
                              ]),
                              createVNode("li", { class: "mb-1" }, [
                                createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),
                                createVNode("span", null, "+374(94)161-331")
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", {
                        class: "d-flex ga-3",
                        style: { "font-size": "0.9em" }
                      }, [
                        createVNode("span", null, "\xA9 2023 - 2024 \u30AA\u30BF-KU OTA-KU \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B. \u0421\u0430\u0439\u0442"),
                        createVNode("a", { href: "https://ota-ku.ru/" }, "Ota-ku.ru")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VContainer, {
                  class: "most-anime-container",
                  style: { "max-width": "var(--ota-ku-max-width)", "padding": "0 10px", "align-items": "center" }
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "mb-1 d-flex ga-4 flex-sm-column flex-md-row" }, [
                      createVNode("div", { class: "d-md-block d-sm-block d-none" }, [
                        createVNode("span", { style: { "font-family": "'Inter', sans-serif", "font-size": "0.9em" } }, "\u0412\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F. \u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438\u0437 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432. \u0415\u0441\u043B\u0438 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u0432\u0430\u0448\u0438 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438, \u0438 \u043C\u044B \u043D\u0435\u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0434\u0430\u043B\u0438\u043C \u0435\u0433\u043E. \u041E\u0434\u043D\u0430\u043A\u043E \u043C\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u043C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0447\u0442\u043E \u043E\u043D \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u043D\u0430 \u0441\u0430\u0439\u0442 \u0441\u043D\u043E\u0432\u0430 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438. \u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438. \u0421\u0430\u0439\u0442 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u043B\u0438\u0446 \u0441\u0442\u0430\u0440\u0448\u0435 16+ \u043B\u0435\u0442. ")
                      ]),
                      createVNode("div", { class: "d-flex ga-2" }, [
                        createVNode("div", { class: "text-no-wrap" }, [
                          createVNode("h3", null, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"),
                          createVNode("ul", { style: { "font-size": "0.9em", "list-style": "none" } }, [
                            createVNode("li", { class: "mb-1" }, [
                              createVNode(_component_router_link, { to: "/doc/privacy_policy_ru" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("li", { class: "mb-1" }, [
                              createVNode(_component_router_link, { to: "/doc/terms_ru" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 ")
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("li", { class: "mb-1" }, [
                              createVNode(_component_router_link, { to: "/doc/authors_ru" }, {
                                default: withCtx(() => [
                                  createTextVNode("\u041F\u0440\u0430\u0432\u043E\u043E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u0438 ")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "text-no-wrap" }, [
                          createVNode("h3", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
                          createVNode("ul", { style: { "list-style": "none", "font-size": "0.9em" } }, [
                            createVNode("li", { class: "mb-1" }, [
                              createTextVNode("Email: "),
                              createVNode("span", null, "w33bv.gl@gmail.com")
                            ]),
                            createVNode("li", { class: "mb-1" }, [
                              createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),
                              createVNode("span", null, "+374(94)161-331")
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", {
                      class: "d-flex ga-3",
                      style: { "font-size": "0.9em" }
                    }, [
                      createVNode("span", null, "\xA9 2023 - 2024 \u30AA\u30BF-KU OTA-KU \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B. \u0421\u0430\u0439\u0442"),
                      createVNode("a", { href: "https://ota-ku.ru/" }, "Ota-ku.ru")
                    ])
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
          createVNode(VFooter, {
            color: "",
            theme: "customDark",
            class: "pa-0 pt-5 pb-10",
            elevation: "8"
          }, {
            default: withCtx(() => [
              createVNode(VContainer, {
                class: "most-anime-container",
                style: { "max-width": "var(--ota-ku-max-width)", "padding": "0 10px", "align-items": "center" }
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "mb-1 d-flex ga-4 flex-sm-column flex-md-row" }, [
                    createVNode("div", { class: "d-md-block d-sm-block d-none" }, [
                      createVNode("span", { style: { "font-family": "'Inter', sans-serif", "font-size": "0.9em" } }, "\u0412\u0435\u0441\u044C \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0430 \u0441\u0430\u0439\u0442\u0435 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0438\u0441\u043A\u043B\u044E\u0447\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0434\u043B\u044F \u043B\u0438\u0447\u043D\u043E\u0433\u043E \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u043B\u0435\u043D\u0438\u044F. \u041C\u044B \u0438\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u044B \u0438\u0437 \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B\u0445 \u0438\u0441\u0442\u043E\u0447\u043D\u0438\u043A\u043E\u0432. \u0415\u0441\u043B\u0438 \u043A\u0430\u043A\u043E\u0439-\u0442\u043E \u043A\u043E\u043D\u0442\u0435\u043D\u0442 \u043D\u0430\u0440\u0443\u0448\u0430\u0435\u0442 \u0432\u0430\u0448\u0438 \u0430\u0432\u0442\u043E\u0440\u0441\u043A\u0438\u0435 \u043F\u0440\u0430\u0432\u0430, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u0441\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438, \u0438 \u043C\u044B \u043D\u0435\u0437\u0430\u043C\u0435\u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E \u0443\u0434\u0430\u043B\u0438\u043C \u0435\u0433\u043E. \u041E\u0434\u043D\u0430\u043A\u043E \u043C\u044B \u043D\u0435 \u043C\u043E\u0436\u0435\u043C \u0433\u0430\u0440\u0430\u043D\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C, \u0447\u0442\u043E \u043E\u043D \u043D\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D \u043D\u0430 \u0441\u0430\u0439\u0442 \u0441\u043D\u043E\u0432\u0430 \u0434\u0440\u0443\u0433\u0438\u043C\u0438 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F\u043C\u0438. \u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430 \u0441 \u0441\u0430\u0439\u0442\u0430 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u043E \u0442\u043E\u043B\u044C\u043A\u043E \u043F\u043E\u0441\u043B\u0435 \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u0438\u044F \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043D\u0438\u044F \u0430\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438. \u0421\u0430\u0439\u0442 \u043F\u0440\u0435\u0434\u043D\u0430\u0437\u043D\u0430\u0447\u0435\u043D \u0434\u043B\u044F \u043B\u0438\u0446 \u0441\u0442\u0430\u0440\u0448\u0435 16+ \u043B\u0435\u0442. ")
                    ]),
                    createVNode("div", { class: "d-flex ga-2" }, [
                      createVNode("div", { class: "text-no-wrap" }, [
                        createVNode("h3", null, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B"),
                        createVNode("ul", { style: { "font-size": "0.9em", "list-style": "none" } }, [
                          createVNode("li", { class: "mb-1" }, [
                            createVNode(_component_router_link, { to: "/doc/privacy_policy_ru" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("li", { class: "mb-1" }, [
                            createVNode(_component_router_link, { to: "/doc/terms_ru" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u043E\u0435 \u0441\u043E\u0433\u043B\u0430\u0448\u0435\u043D\u0438\u0435 ")
                              ]),
                              _: 1
                            })
                          ]),
                          createVNode("li", { class: "mb-1" }, [
                            createVNode(_component_router_link, { to: "/doc/authors_ru" }, {
                              default: withCtx(() => [
                                createTextVNode("\u041F\u0440\u0430\u0432\u043E\u043E\u0431\u043B\u0430\u0434\u0430\u0442\u0435\u043B\u0438 ")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "text-no-wrap" }, [
                        createVNode("h3", null, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"),
                        createVNode("ul", { style: { "list-style": "none", "font-size": "0.9em" } }, [
                          createVNode("li", { class: "mb-1" }, [
                            createTextVNode("Email: "),
                            createVNode("span", null, "w33bv.gl@gmail.com")
                          ]),
                          createVNode("li", { class: "mb-1" }, [
                            createTextVNode("\u0422\u0435\u043B\u0435\u0444\u043E\u043D: "),
                            createVNode("span", null, "+374(94)161-331")
                          ])
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", {
                    class: "d-flex ga-3",
                    style: { "font-size": "0.9em" }
                  }, [
                    createVNode("span", null, "\xA9 2023 - 2024 \u30AA\u30BF-KU OTA-KU \u0412\u0441\u0435 \u043F\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043D\u044B. \u0421\u0430\u0439\u0442"),
                    createVNode("a", { href: "https://ota-ku.ru/" }, "Ota-ku.ru")
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
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({
  name: "IndexView",
  setup() {
    useHead({
      title: "\u0422\u0432\u043E\u0439 \u041B\u0438\u0447\u043D\u044B\u0439 \u041F\u043E\u0440\u0442\u0430\u043B \u0432 \u041C\u0438\u0440 \u0410\u043D\u0438\u043C\u0435",
      meta: [
        { name: "description", content: "\u041B\u0443\u0447\u0448\u0438\u0435 \u0430\u043D\u0438\u043C\u0435 \u043E\u043D\u043B\u0430\u0439\u043D \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u0441 \u0440\u0443\u0441\u0441\u043A\u043E\u0439 \u043E\u0437\u0432\u0443\u0447\u043A\u043E\u0439!" },
        { name: "subject", content: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043B\u0443\u0447\u0448\u0438\u0435 \u0430\u043D\u0438\u043C\u0435 \u043E\u043D\u043B\u0430\u0439\u043D \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C!" },
        { name: "abstract", content: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043B\u0443\u0447\u0448\u0438\u0435 \u0430\u043D\u0438\u043C\u0435 \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C" },
        { name: "summary", content: "\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043B\u0443\u0447\u0448\u0438\u0435 \u0430\u043D\u0438\u043C\u0435 \u043E\u043D\u043B\u0430\u0439\u043D \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u043D\u0430 \u0440\u0443\u0441\u0441\u043A\u043E\u043C!" },
        { property: "og:url", content: "https://ota-ku.ru" },
        { property: "og:title", content: "Ota-ku - \u0422\u0432\u043E\u0439 \u041B\u0438\u0447\u043D\u044B\u0439 \u041F\u043E\u0440\u0442\u0430\u043B \u0432 \u041C\u0438\u0440 \u0410\u043D\u0438\u043C\u0435" },
        { property: "og:description", content: "\u041B\u0443\u0447\u0448\u0438\u0435 \u0430\u043D\u0438\u043C\u0435 \u043E\u043D\u043B\u0430\u0439\u043D \u0431\u0435\u0441\u043F\u043B\u0430\u0442\u043D\u043E \u0441 \u0440\u0443\u0441\u0441\u043A\u043E\u0439 \u043E\u0437\u0432\u0443\u0447\u043A\u043E\u0439!" },
        { property: "og:image", content: "https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png" },
        { name: "twitter:image:src", content: "https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png" },
        { name: "twitter:image:witdh", content: "1200" },
        { name: "twitter:image:height", content: "600" },
        { property: "og:site:name", content: "Ota-ku - \u0422\u0432\u043E\u0439 \u041B\u0438\u0447\u043D\u044B\u0439 \u041F\u043E\u0440\u0442\u0430\u043B \u0432 \u041C\u0438\u0440 \u0410\u043D\u0438\u043C\u0435" }
      ]
    });
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_PrimaryHeader = __nuxt_component_0;
  const _component_TopSlider = __nuxt_component_1;
  const _component_MostAnimeList = __nuxt_component_2;
  const _component_FooterComponent = __nuxt_component_3;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_PrimaryHeader, null, null, _parent));
  _push(ssrRenderComponent(VLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VMain, { tag: "main" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_TopSlider, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_MostAnimeList, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_FooterComponent, null, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_TopSlider),
                createVNode(_component_MostAnimeList),
                createVNode(_component_FooterComponent)
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VMain, { tag: "main" }, {
            default: withCtx(() => [
              createVNode(_component_TopSlider),
              createVNode(_component_MostAnimeList),
              createVNode(_component_FooterComponent)
            ]),
            _: 1
          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-Bv92T1-j.mjs.map
