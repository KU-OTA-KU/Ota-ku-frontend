import { defineComponent, createVNode, Transition, mergeProps, toRef, computed, useSSRContext, shallowRef, watch, reactive, ref, Fragment, Teleport, withDirectives, vShow, resolveDirective, inject, watchEffect, nextTick, effectScope, onScopeDispose, provide, toRaw, readonly, warn, withCtx, createTextVNode } from 'file://Z:/Ota-ku-nuxt/node_modules/vue/index.mjs';
import { g as genericComponent, p as propsFactory, m as makeThemeProps, S as useTheme, d as useProxiedModel, v as provideDefaults, o as convertToUnit, f as getCurrentInstance, k as provideTheme, F as useRtl, C as useToggleScope, W as templateRef, X as IN_BROWSER, K as isOn, R as eventName, _ as _export_sfc, T as destructComputed, z as matchesSelector, U as consoleError, O as clamp, V as defer } from './server.mjs';
import { ssrRenderComponent } from 'file://Z:/Ota-ku-nuxt/node_modules/vue/server-renderer/index.mjs';
import { p as publicAssetsURL } from '../_/renderer.mjs';
import { d as makeBorderProps, m as makeComponentProps, e as makeDensityProps, g as makeElevationProps, h as makeRoundedProps, a3 as makeLayoutItemProps, a as makeTagProps, w as makeGroupProps, l as useBorder, t as useBackgroundColor, o as useDensity, q as useElevation, r as useRounded, b as useSsrBoot, a4 as useLayoutItem, x as useGroup, a8 as VBtnToggleSymbol, u as useRender, c as createSimpleFunctional, j as makeVariantProps, f as makeDimensionProps, v as makeTransitionProps, p as useDimension, a9 as useRouter, aa as getScrollParent, M as MaybeTransition, ab as parseAnchor, ac as flipSide, ad as flipAlign, ae as flipCorner, af as getScrollParents, ag as hasScrollbar, O as VLayout, ah as VAppBar, Q as VContainer, a7 as VCol, ai as VToolbarTitle, $ as VImg, Z as VBtn, E as VIcon, aj as getAxis } from './VMain-DifQI0dA.mjs';

class Box {
  constructor(_ref) {
    let {
      x,
      y,
      width,
      height
    } = _ref;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  get top() {
    return this.y;
  }
  get bottom() {
    return this.y + this.height;
  }
  get left() {
    return this.x;
  }
  get right() {
    return this.x + this.width;
  }
}
function getOverflow(a, b) {
  return {
    x: {
      before: Math.max(0, b.left - a.left),
      after: Math.max(0, a.right - b.right)
    },
    y: {
      before: Math.max(0, b.top - a.top),
      after: Math.max(0, a.bottom - b.bottom)
    }
  };
}
function getTargetBox(target) {
  if (Array.isArray(target)) {
    return new Box({
      x: target[0],
      y: target[1],
      width: 0,
      height: 0
    });
  } else {
    return target.getBoundingClientRect();
  }
}
function nullifyTransforms(el) {
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);
  const tx = style.transform;
  if (tx) {
    let ta, sx, sy, dx, dy;
    if (tx.startsWith("matrix3d(")) {
      ta = tx.slice(9, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[5];
      dx = +ta[12];
      dy = +ta[13];
    } else if (tx.startsWith("matrix(")) {
      ta = tx.slice(7, -1).split(/, /);
      sx = +ta[0];
      sy = +ta[3];
      dx = +ta[4];
      dy = +ta[5];
    } else {
      return new Box(rect);
    }
    const to = style.transformOrigin;
    const x = rect.x - dx - (1 - sx) * parseFloat(to);
    const y = rect.y - dy - (1 - sy) * parseFloat(to.slice(to.indexOf(" ") + 1));
    const w = sx ? rect.width / sx : el.offsetWidth + 1;
    const h = sy ? rect.height / sy : el.offsetHeight + 1;
    return new Box({
      x,
      y,
      width: w,
      height: h
    });
  } else {
    return new Box(rect);
  }
}
function animate(el, keyframes, options) {
  if (typeof el.animate === "undefined")
    return {
      finished: Promise.resolve()
    };
  let animation;
  try {
    animation = el.animate(keyframes, options);
  } catch (err) {
    return {
      finished: Promise.resolve()
    };
  }
  if (typeof animation.finished === "undefined") {
    animation.finished = new Promise((resolve) => {
      animation.onfinish = () => {
        resolve(animation);
      };
    });
  }
  return animation;
}
const handlers = /* @__PURE__ */ new WeakMap();
function bindProps(el, props) {
  Object.keys(props).forEach((k) => {
    var _a;
    if (isOn(k)) {
      const name = eventName(k);
      const handler = handlers.get(el);
      if (props[k] == null) {
        handler == null ? void 0 : handler.forEach((v) => {
          const [n, fn] = v;
          if (n === name) {
            el.removeEventListener(name, fn);
            handler.delete(v);
          }
        });
      } else if (!handler || !((_a = [...handler]) == null ? void 0 : _a.some((v) => v[0] === name && v[1] === props[k]))) {
        el.addEventListener(name, props[k]);
        const _handler = handler || /* @__PURE__ */ new Set();
        _handler.add([name, props[k]]);
        if (!handlers.has(el))
          handlers.set(el, _handler);
      }
    } else {
      if (props[k] == null) {
        el.removeAttribute(k);
      } else {
        el.setAttribute(k, props[k]);
      }
    }
  });
}
function unbindProps(el, props) {
  Object.keys(props).forEach((k) => {
    if (isOn(k)) {
      const name = eventName(k);
      const handler = handlers.get(el);
      handler == null ? void 0 : handler.forEach((v) => {
        const [n, fn] = v;
        if (n === name) {
          el.removeEventListener(name, fn);
          handler.delete(v);
        }
      });
    } else {
      el.removeAttribute(k);
    }
  });
}
function attachedRoot(node) {
  if (typeof node.getRootNode !== "function") {
    while (node.parentNode)
      node = node.parentNode;
    if (node !== void 0)
      return null;
    return void 0;
  }
  const root = node.getRootNode();
  if (root !== void 0 && root.getRootNode({
    composed: true
  }) !== void 0)
    return null;
  return root;
}
const standardEasing = "cubic-bezier(0.4, 0, 0.2, 1)";
const deceleratedEasing = "cubic-bezier(0.0, 0, 0.2, 1)";
const acceleratedEasing = "cubic-bezier(0.4, 0, 1, 1)";
function isFixedPosition(el) {
  while (el) {
    if ((void 0).getComputedStyle(el).position === "fixed") {
      return true;
    }
    el = el.offsetParent;
  }
  return false;
}
const _sfc_main = defineComponent({
  name: "PrimaryHeader",
  methods: {
    navigateToHome() {
      this.$router.push("/");
    },
    getButtonVariant(route) {
      return this.$route.path === route ? "flat" : "text";
    }
  }
});
const _imports_0 = publicAssetsURL("/ota-kashima/ota-ku-kashima.png");
const makeVDialogTransitionProps = propsFactory({
  target: [Object, Array]
}, "v-dialog-transition");
const VDialogTransition = genericComponent()({
  name: "VDialogTransition",
  props: makeVDialogTransitionProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const functions = {
      onBeforeEnter(el) {
        el.style.pointerEvents = "none";
        el.style.visibility = "hidden";
      },
      async onEnter(el, done) {
        var _a;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        await new Promise((resolve) => requestAnimationFrame(resolve));
        el.style.visibility = "";
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }, {}], {
          duration: 225 * speed,
          easing: deceleratedEasing
        });
        (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
          animate(el2, [{
            opacity: 0
          }, {
            opacity: 0,
            offset: 0.33
          }, {}], {
            duration: 225 * 2 * speed,
            easing: standardEasing
          });
        });
        animation.finished.then(() => done());
      },
      onAfterEnter(el) {
        el.style.removeProperty("pointer-events");
      },
      onBeforeLeave(el) {
        el.style.pointerEvents = "none";
      },
      async onLeave(el, done) {
        var _a;
        await new Promise((resolve) => requestAnimationFrame(resolve));
        const {
          x,
          y,
          sx,
          sy,
          speed
        } = getDimensions(props.target, el);
        const animation = animate(el, [{}, {
          transform: `translate(${x}px, ${y}px) scale(${sx}, ${sy})`,
          opacity: 0
        }], {
          duration: 125 * speed,
          easing: acceleratedEasing
        });
        animation.finished.then(() => done());
        (_a = getChildren(el)) == null ? void 0 : _a.forEach((el2) => {
          animate(el2, [{}, {
            opacity: 0,
            offset: 0.2
          }, {
            opacity: 0
          }], {
            duration: 125 * 2 * speed,
            easing: standardEasing
          });
        });
      },
      onAfterLeave(el) {
        el.style.removeProperty("pointer-events");
      }
    };
    return () => {
      return props.target ? createVNode(Transition, mergeProps({
        "name": "dialog-transition"
      }, functions, {
        "css": false
      }), slots) : createVNode(Transition, {
        "name": "dialog-transition"
      }, slots);
    };
  }
});
function getChildren(el) {
  var _a;
  const els = (_a = el.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list")) == null ? void 0 : _a.children;
  return els && [...els];
}
function getDimensions(target, el) {
  const targetBox = getTargetBox(target);
  const elBox = nullifyTransforms(el);
  const [originX, originY] = getComputedStyle(el).transformOrigin.split(" ").map((v) => parseFloat(v));
  const [anchorSide, anchorOffset] = getComputedStyle(el).getPropertyValue("--v-overlay-anchor-origin").split(" ");
  let offsetX = targetBox.left + targetBox.width / 2;
  if (anchorSide === "left" || anchorOffset === "left") {
    offsetX -= targetBox.width / 2;
  } else if (anchorSide === "right" || anchorOffset === "right") {
    offsetX += targetBox.width / 2;
  }
  let offsetY = targetBox.top + targetBox.height / 2;
  if (anchorSide === "top" || anchorOffset === "top") {
    offsetY -= targetBox.height / 2;
  } else if (anchorSide === "bottom" || anchorOffset === "bottom") {
    offsetY += targetBox.height / 2;
  }
  const tsx = targetBox.width / elBox.width;
  const tsy = targetBox.height / elBox.height;
  const maxs = Math.max(1, tsx, tsy);
  const sx = tsx / maxs || 0;
  const sy = tsy / maxs || 0;
  const asa = elBox.width * elBox.height / ((void 0).innerWidth * (void 0).innerHeight);
  const speed = asa > 0.12 ? Math.min(1.5, (asa - 0.12) * 10 + 1) : 1;
  return {
    x: offsetX - (originX + elBox.left),
    y: offsetY - (originY + elBox.top),
    sx,
    sy,
    speed
  };
}
const makeVBottomNavigationProps = propsFactory({
  baseColor: String,
  bgColor: String,
  color: String,
  grow: Boolean,
  mode: {
    type: String,
    validator: (v) => !v || ["horizontal", "shift"].includes(v)
  },
  height: {
    type: [Number, String],
    default: 56
  },
  active: {
    type: Boolean,
    default: true
  },
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeLayoutItemProps({
    name: "bottom-navigation"
  }),
  ...makeTagProps({
    tag: "header"
  }),
  ...makeGroupProps({
    selectedClass: "v-btn--selected"
  }),
  ...makeThemeProps()
}, "VBottomNavigation");
const VBottomNavigation = genericComponent()({
  name: "VBottomNavigation",
  props: makeVBottomNavigationProps(),
  emits: {
    "update:active": (value) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      themeClasses
    } = useTheme();
    const {
      borderClasses
    } = useBorder(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      densityClasses
    } = useDensity(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      ssrBootStyles
    } = useSsrBoot();
    const height = computed(() => Number(props.height) - (props.density === "comfortable" ? 8 : 0) - (props.density === "compact" ? 16 : 0));
    const isActive = useProxiedModel(props, "active", props.active);
    const {
      layoutItemStyles,
      layoutIsReady
    } = useLayoutItem({
      id: props.name,
      order: computed(() => parseInt(props.order, 10)),
      position: computed(() => "bottom"),
      layoutSize: computed(() => isActive.value ? height.value : 0),
      elementSize: height,
      active: isActive,
      absolute: toRef(props, "absolute")
    });
    useGroup(props, VBtnToggleSymbol);
    provideDefaults({
      VBtn: {
        baseColor: toRef(props, "baseColor"),
        color: toRef(props, "color"),
        density: toRef(props, "density"),
        stacked: computed(() => props.mode !== "horizontal"),
        variant: "text"
      }
    }, {
      scoped: true
    });
    useRender(() => {
      return createVNode(props.tag, {
        "class": ["v-bottom-navigation", {
          "v-bottom-navigation--active": isActive.value,
          "v-bottom-navigation--grow": props.grow,
          "v-bottom-navigation--shift": props.mode === "shift"
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, layoutItemStyles.value, {
          height: convertToUnit(height.value)
        }, ssrBootStyles.value, props.style]
      }, {
        default: () => [slots.default && createVNode("div", {
          "class": "v-bottom-navigation__content"
        }, [slots.default()])]
      });
    });
    return layoutIsReady;
  }
});
const VSpacer = createSimpleFunctional("v-spacer", "div", "VSpacer");
const makeVToolbarItemsProps = propsFactory({
  ...makeComponentProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VToolbarItems");
const VToolbarItems = genericComponent()({
  name: "VToolbarItems",
  props: makeVToolbarItemsProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    provideDefaults({
      VBtn: {
        color: toRef(props, "color"),
        height: "inherit",
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-toolbar-items", props.class],
        "style": props.style
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[-->`);
  _push(ssrRenderComponent(VLayout, {
    style: { "height": "70px" },
    class: "header-navigation"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VAppBar, {
          tag: "header",
          color: "black",
          "scroll-behavior": "elevate",
          height: "70"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VContainer, {
                class: "d-flex pa-0",
                style: { "max-width": "var(--ota-ku-max-width)" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VCol, {
                      "align-self": "center",
                      class: "d-flex"
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VToolbarTitle, {
                            style: { "max-width": "130px", "min-width": "130px", "margin-right": "20px" },
                            onClick: _ctx.navigateToHome,
                            class: "cursor-pointer"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VImg, {
                                  class: "ota-ku-ru-icon user-select-none",
                                  src: _imports_0,
                                  width: "100%",
                                  alt: "ota-ku watch anime in good quality"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VImg, {
                                    class: "ota-ku-ru-icon user-select-none",
                                    src: _imports_0,
                                    width: "100%",
                                    alt: "ota-ku watch anime in good quality"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VToolbarItems, { class: "header-toolbar-items ga-2 align-center d-flex" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VBtn, {
                                  variant: _ctx.getButtonVariant("/catalog"),
                                  theme: "customDark",
                                  class: "text-capitalize",
                                  active: "",
                                  to: "/catalog",
                                  rounded: "lg",
                                  size: "small",
                                  height: "30"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u041A\u0430\u0442\u0430\u043B\u043E\u0433 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u041A\u0430\u0442\u0430\u043B\u043E\u0433 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VBtn, {
                                  variant: _ctx.getButtonVariant("/releases"),
                                  theme: "customDark",
                                  class: "text-capitalize",
                                  active: "",
                                  to: "/releases",
                                  rounded: "lg",
                                  size: "small",
                                  disabled: "",
                                  height: "30"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u0420\u0435\u043B\u0438\u0437\u044B `);
                                    } else {
                                      return [
                                        createTextVNode(" \u0420\u0435\u043B\u0438\u0437\u044B ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VBtn, {
                                  variant: _ctx.getButtonVariant("/schedule"),
                                  theme: "customDark",
                                  class: "text-capitalize",
                                  active: "",
                                  to: "/schedule",
                                  rounded: "lg",
                                  size: "small",
                                  disabled: "",
                                  height: "30"
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 `);
                                    } else {
                                      return [
                                        createTextVNode(" \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VBtn, {
                                    variant: _ctx.getButtonVariant("/catalog"),
                                    theme: "customDark",
                                    class: "text-capitalize",
                                    active: "",
                                    to: "/catalog",
                                    rounded: "lg",
                                    size: "small",
                                    height: "30"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u041A\u0430\u0442\u0430\u043B\u043E\u0433 ")
                                    ]),
                                    _: 1
                                  }, 8, ["variant"]),
                                  createVNode(VBtn, {
                                    variant: _ctx.getButtonVariant("/releases"),
                                    theme: "customDark",
                                    class: "text-capitalize",
                                    active: "",
                                    to: "/releases",
                                    rounded: "lg",
                                    size: "small",
                                    disabled: "",
                                    height: "30"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0420\u0435\u043B\u0438\u0437\u044B ")
                                    ]),
                                    _: 1
                                  }, 8, ["variant"]),
                                  createVNode(VBtn, {
                                    variant: _ctx.getButtonVariant("/schedule"),
                                    theme: "customDark",
                                    class: "text-capitalize",
                                    active: "",
                                    to: "/schedule",
                                    rounded: "lg",
                                    size: "small",
                                    disabled: "",
                                    height: "30"
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")
                                    ]),
                                    _: 1
                                  }, 8, ["variant"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VToolbarTitle, {
                              style: { "max-width": "130px", "min-width": "130px", "margin-right": "20px" },
                              onClick: _ctx.navigateToHome,
                              class: "cursor-pointer"
                            }, {
                              default: withCtx(() => [
                                createVNode(VImg, {
                                  class: "ota-ku-ru-icon user-select-none",
                                  src: _imports_0,
                                  width: "100%",
                                  alt: "ota-ku watch anime in good quality"
                                })
                              ]),
                              _: 1
                            }, 8, ["onClick"]),
                            createVNode(VToolbarItems, { class: "header-toolbar-items ga-2 align-center d-flex" }, {
                              default: withCtx(() => [
                                createVNode(VBtn, {
                                  variant: _ctx.getButtonVariant("/catalog"),
                                  theme: "customDark",
                                  class: "text-capitalize",
                                  active: "",
                                  to: "/catalog",
                                  rounded: "lg",
                                  size: "small",
                                  height: "30"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u041A\u0430\u0442\u0430\u043B\u043E\u0433 ")
                                  ]),
                                  _: 1
                                }, 8, ["variant"]),
                                createVNode(VBtn, {
                                  variant: _ctx.getButtonVariant("/releases"),
                                  theme: "customDark",
                                  class: "text-capitalize",
                                  active: "",
                                  to: "/releases",
                                  rounded: "lg",
                                  size: "small",
                                  disabled: "",
                                  height: "30"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0420\u0435\u043B\u0438\u0437\u044B ")
                                  ]),
                                  _: 1
                                }, 8, ["variant"]),
                                createVNode(VBtn, {
                                  variant: _ctx.getButtonVariant("/schedule"),
                                  theme: "customDark",
                                  class: "text-capitalize",
                                  active: "",
                                  to: "/schedule",
                                  rounded: "lg",
                                  size: "small",
                                  disabled: "",
                                  height: "30"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")
                                  ]),
                                  _: 1
                                }, 8, ["variant"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VSpacer, null, null, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(VCol, { class: "d-flex justify-end ga-1" }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VBtn, {
                            theme: "customDarkTheme",
                            icon: "mdi-dice-multiple",
                            variant: "text",
                            onClick: ($event) => this.$router.push("anime?animeId=" + Math.floor(Math.random() * 1e3))
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VBtn, {
                            theme: "customDarkTheme",
                            icon: "mdi-magnify",
                            variant: "text",
                            disabled: ""
                          }, null, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VBtn, {
                            theme: "customDarkTheme",
                            icon: "mdi-account",
                            variant: "text",
                            disabled: ""
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VBtn, {
                              theme: "customDarkTheme",
                              icon: "mdi-dice-multiple",
                              variant: "text",
                              onClick: ($event) => this.$router.push("anime?animeId=" + Math.floor(Math.random() * 1e3))
                            }, null, 8, ["onClick"]),
                            createVNode(VBtn, {
                              theme: "customDarkTheme",
                              icon: "mdi-magnify",
                              variant: "text",
                              disabled: ""
                            }),
                            createVNode(VBtn, {
                              theme: "customDarkTheme",
                              icon: "mdi-account",
                              variant: "text",
                              disabled: ""
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VCol, {
                        "align-self": "center",
                        class: "d-flex"
                      }, {
                        default: withCtx(() => [
                          createVNode(VToolbarTitle, {
                            style: { "max-width": "130px", "min-width": "130px", "margin-right": "20px" },
                            onClick: _ctx.navigateToHome,
                            class: "cursor-pointer"
                          }, {
                            default: withCtx(() => [
                              createVNode(VImg, {
                                class: "ota-ku-ru-icon user-select-none",
                                src: _imports_0,
                                width: "100%",
                                alt: "ota-ku watch anime in good quality"
                              })
                            ]),
                            _: 1
                          }, 8, ["onClick"]),
                          createVNode(VToolbarItems, { class: "header-toolbar-items ga-2 align-center d-flex" }, {
                            default: withCtx(() => [
                              createVNode(VBtn, {
                                variant: _ctx.getButtonVariant("/catalog"),
                                theme: "customDark",
                                class: "text-capitalize",
                                active: "",
                                to: "/catalog",
                                rounded: "lg",
                                size: "small",
                                height: "30"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u041A\u0430\u0442\u0430\u043B\u043E\u0433 ")
                                ]),
                                _: 1
                              }, 8, ["variant"]),
                              createVNode(VBtn, {
                                variant: _ctx.getButtonVariant("/releases"),
                                theme: "customDark",
                                class: "text-capitalize",
                                active: "",
                                to: "/releases",
                                rounded: "lg",
                                size: "small",
                                disabled: "",
                                height: "30"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0420\u0435\u043B\u0438\u0437\u044B ")
                                ]),
                                _: 1
                              }, 8, ["variant"]),
                              createVNode(VBtn, {
                                variant: _ctx.getButtonVariant("/schedule"),
                                theme: "customDark",
                                class: "text-capitalize",
                                active: "",
                                to: "/schedule",
                                rounded: "lg",
                                size: "small",
                                disabled: "",
                                height: "30"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")
                                ]),
                                _: 1
                              }, 8, ["variant"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(VSpacer),
                      createVNode(VCol, { class: "d-flex justify-end ga-1" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            theme: "customDarkTheme",
                            icon: "mdi-dice-multiple",
                            variant: "text",
                            onClick: ($event) => this.$router.push("anime?animeId=" + Math.floor(Math.random() * 1e3))
                          }, null, 8, ["onClick"]),
                          createVNode(VBtn, {
                            theme: "customDarkTheme",
                            icon: "mdi-magnify",
                            variant: "text",
                            disabled: ""
                          }),
                          createVNode(VBtn, {
                            theme: "customDarkTheme",
                            icon: "mdi-account",
                            variant: "text",
                            disabled: ""
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VContainer, {
                  class: "d-flex pa-0",
                  style: { "max-width": "var(--ota-ku-max-width)" }
                }, {
                  default: withCtx(() => [
                    createVNode(VCol, {
                      "align-self": "center",
                      class: "d-flex"
                    }, {
                      default: withCtx(() => [
                        createVNode(VToolbarTitle, {
                          style: { "max-width": "130px", "min-width": "130px", "margin-right": "20px" },
                          onClick: _ctx.navigateToHome,
                          class: "cursor-pointer"
                        }, {
                          default: withCtx(() => [
                            createVNode(VImg, {
                              class: "ota-ku-ru-icon user-select-none",
                              src: _imports_0,
                              width: "100%",
                              alt: "ota-ku watch anime in good quality"
                            })
                          ]),
                          _: 1
                        }, 8, ["onClick"]),
                        createVNode(VToolbarItems, { class: "header-toolbar-items ga-2 align-center d-flex" }, {
                          default: withCtx(() => [
                            createVNode(VBtn, {
                              variant: _ctx.getButtonVariant("/catalog"),
                              theme: "customDark",
                              class: "text-capitalize",
                              active: "",
                              to: "/catalog",
                              rounded: "lg",
                              size: "small",
                              height: "30"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u041A\u0430\u0442\u0430\u043B\u043E\u0433 ")
                              ]),
                              _: 1
                            }, 8, ["variant"]),
                            createVNode(VBtn, {
                              variant: _ctx.getButtonVariant("/releases"),
                              theme: "customDark",
                              class: "text-capitalize",
                              active: "",
                              to: "/releases",
                              rounded: "lg",
                              size: "small",
                              disabled: "",
                              height: "30"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0420\u0435\u043B\u0438\u0437\u044B ")
                              ]),
                              _: 1
                            }, 8, ["variant"]),
                            createVNode(VBtn, {
                              variant: _ctx.getButtonVariant("/schedule"),
                              theme: "customDark",
                              class: "text-capitalize",
                              active: "",
                              to: "/schedule",
                              rounded: "lg",
                              size: "small",
                              disabled: "",
                              height: "30"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")
                              ]),
                              _: 1
                            }, 8, ["variant"])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(VSpacer),
                    createVNode(VCol, { class: "d-flex justify-end ga-1" }, {
                      default: withCtx(() => [
                        createVNode(VBtn, {
                          theme: "customDarkTheme",
                          icon: "mdi-dice-multiple",
                          variant: "text",
                          onClick: ($event) => this.$router.push("anime?animeId=" + Math.floor(Math.random() * 1e3))
                        }, null, 8, ["onClick"]),
                        createVNode(VBtn, {
                          theme: "customDarkTheme",
                          icon: "mdi-magnify",
                          variant: "text",
                          disabled: ""
                        }),
                        createVNode(VBtn, {
                          theme: "customDarkTheme",
                          icon: "mdi-account",
                          variant: "text",
                          disabled: ""
                        })
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
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VAppBar, {
            tag: "header",
            color: "black",
            "scroll-behavior": "elevate",
            height: "70"
          }, {
            default: withCtx(() => [
              createVNode(VContainer, {
                class: "d-flex pa-0",
                style: { "max-width": "var(--ota-ku-max-width)" }
              }, {
                default: withCtx(() => [
                  createVNode(VCol, {
                    "align-self": "center",
                    class: "d-flex"
                  }, {
                    default: withCtx(() => [
                      createVNode(VToolbarTitle, {
                        style: { "max-width": "130px", "min-width": "130px", "margin-right": "20px" },
                        onClick: _ctx.navigateToHome,
                        class: "cursor-pointer"
                      }, {
                        default: withCtx(() => [
                          createVNode(VImg, {
                            class: "ota-ku-ru-icon user-select-none",
                            src: _imports_0,
                            width: "100%",
                            alt: "ota-ku watch anime in good quality"
                          })
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(VToolbarItems, { class: "header-toolbar-items ga-2 align-center d-flex" }, {
                        default: withCtx(() => [
                          createVNode(VBtn, {
                            variant: _ctx.getButtonVariant("/catalog"),
                            theme: "customDark",
                            class: "text-capitalize",
                            active: "",
                            to: "/catalog",
                            rounded: "lg",
                            size: "small",
                            height: "30"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u041A\u0430\u0442\u0430\u043B\u043E\u0433 ")
                            ]),
                            _: 1
                          }, 8, ["variant"]),
                          createVNode(VBtn, {
                            variant: _ctx.getButtonVariant("/releases"),
                            theme: "customDark",
                            class: "text-capitalize",
                            active: "",
                            to: "/releases",
                            rounded: "lg",
                            size: "small",
                            disabled: "",
                            height: "30"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0420\u0435\u043B\u0438\u0437\u044B ")
                            ]),
                            _: 1
                          }, 8, ["variant"]),
                          createVNode(VBtn, {
                            variant: _ctx.getButtonVariant("/schedule"),
                            theme: "customDark",
                            class: "text-capitalize",
                            active: "",
                            to: "/schedule",
                            rounded: "lg",
                            size: "small",
                            disabled: "",
                            height: "30"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u0420\u0430\u0441\u043F\u0438\u0441\u0430\u043D\u0438\u0435 ")
                            ]),
                            _: 1
                          }, 8, ["variant"])
                        ]),
                        _: 1
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(VSpacer),
                  createVNode(VCol, { class: "d-flex justify-end ga-1" }, {
                    default: withCtx(() => [
                      createVNode(VBtn, {
                        theme: "customDarkTheme",
                        icon: "mdi-dice-multiple",
                        variant: "text",
                        onClick: ($event) => this.$router.push("anime?animeId=" + Math.floor(Math.random() * 1e3))
                      }, null, 8, ["onClick"]),
                      createVNode(VBtn, {
                        theme: "customDarkTheme",
                        icon: "mdi-magnify",
                        variant: "text",
                        disabled: ""
                      }),
                      createVNode(VBtn, {
                        theme: "customDarkTheme",
                        icon: "mdi-account",
                        variant: "text",
                        disabled: ""
                      })
                    ]),
                    _: 1
                  })
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
  _push(ssrRenderComponent(VLayout, { class: "bottom-navigation" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VBottomNavigation, {
          tag: "nav",
          class: "pa-1 d-flex ga-3",
          elevation: 5,
          grow: "",
          style: { "background-color": "rgba(0, 0, 0, 0.4)", "backdrop-filter": "blur(10px)", "-webkit-backdrop-filter": "blur(10px)" },
          color: "surface"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VBtn, {
                value: "recent",
                width: "120px",
                rounded: "xl",
                variant: _ctx.getButtonVariant("/schedule"),
                disabled: "",
                theme: "customDark"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-history`);
                        } else {
                          return [
                            createTextVNode("mdi-history")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<span data-v-c89d79dc${_scopeId3}>\u0421\u0435\u0433\u043E\u0434\u043D\u044F</span>`);
                  } else {
                    return [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-history")
                        ]),
                        _: 1
                      }),
                      createVNode("span", null, "\u0421\u0435\u0433\u043E\u0434\u043D\u044F")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VBtn, {
                value: "favorites",
                rounded: "xl",
                width: "120px",
                variant: _ctx.getButtonVariant("/catalog"),
                to: "/catalog",
                theme: "customDark"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-movie-filter`);
                        } else {
                          return [
                            createTextVNode("mdi-movie-filter")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<span data-v-c89d79dc${_scopeId3}>\u041A\u0430\u0442\u0430\u043B\u043E\u0433</span>`);
                  } else {
                    return [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-movie-filter")
                        ]),
                        _: 1
                      }),
                      createVNode("span", null, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VSpacer, null, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VBtn, {
                value: "nearby",
                width: "120px",
                rounded: "xl",
                variant: _ctx.getButtonVariant("/releases"),
                disabled: "",
                theme: "customDark"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VIcon, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(`mdi-filmstrip-box-multiple`);
                        } else {
                          return [
                            createTextVNode("mdi-filmstrip-box-multiple")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`<span data-v-c89d79dc${_scopeId3}>\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430</span>`);
                  } else {
                    return [
                      createVNode(VIcon, null, {
                        default: withCtx(() => [
                          createTextVNode("mdi-filmstrip-box-multiple")
                        ]),
                        _: 1
                      }),
                      createVNode("span", null, "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VBtn, {
                  value: "recent",
                  width: "120px",
                  rounded: "xl",
                  variant: _ctx.getButtonVariant("/schedule"),
                  disabled: "",
                  theme: "customDark"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-history")
                      ]),
                      _: 1
                    }),
                    createVNode("span", null, "\u0421\u0435\u0433\u043E\u0434\u043D\u044F")
                  ]),
                  _: 1
                }, 8, ["variant"]),
                createVNode(VSpacer),
                createVNode(VBtn, {
                  value: "favorites",
                  rounded: "xl",
                  width: "120px",
                  variant: _ctx.getButtonVariant("/catalog"),
                  to: "/catalog",
                  theme: "customDark"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-movie-filter")
                      ]),
                      _: 1
                    }),
                    createVNode("span", null, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433")
                  ]),
                  _: 1
                }, 8, ["variant"]),
                createVNode(VSpacer),
                createVNode(VBtn, {
                  value: "nearby",
                  width: "120px",
                  rounded: "xl",
                  variant: _ctx.getButtonVariant("/releases"),
                  disabled: "",
                  theme: "customDark"
                }, {
                  default: withCtx(() => [
                    createVNode(VIcon, null, {
                      default: withCtx(() => [
                        createTextVNode("mdi-filmstrip-box-multiple")
                      ]),
                      _: 1
                    }),
                    createVNode("span", null, "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430")
                  ]),
                  _: 1
                }, 8, ["variant"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VBottomNavigation, {
            tag: "nav",
            class: "pa-1 d-flex ga-3",
            elevation: 5,
            grow: "",
            style: { "background-color": "rgba(0, 0, 0, 0.4)", "backdrop-filter": "blur(10px)", "-webkit-backdrop-filter": "blur(10px)" },
            color: "surface"
          }, {
            default: withCtx(() => [
              createVNode(VBtn, {
                value: "recent",
                width: "120px",
                rounded: "xl",
                variant: _ctx.getButtonVariant("/schedule"),
                disabled: "",
                theme: "customDark"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-history")
                    ]),
                    _: 1
                  }),
                  createVNode("span", null, "\u0421\u0435\u0433\u043E\u0434\u043D\u044F")
                ]),
                _: 1
              }, 8, ["variant"]),
              createVNode(VSpacer),
              createVNode(VBtn, {
                value: "favorites",
                rounded: "xl",
                width: "120px",
                variant: _ctx.getButtonVariant("/catalog"),
                to: "/catalog",
                theme: "customDark"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-movie-filter")
                    ]),
                    _: 1
                  }),
                  createVNode("span", null, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433")
                ]),
                _: 1
              }, 8, ["variant"]),
              createVNode(VSpacer),
              createVNode(VBtn, {
                value: "nearby",
                width: "120px",
                rounded: "xl",
                variant: _ctx.getButtonVariant("/releases"),
                disabled: "",
                theme: "customDark"
              }, {
                default: withCtx(() => [
                  createVNode(VIcon, null, {
                    default: withCtx(() => [
                      createTextVNode("mdi-filmstrip-box-multiple")
                    ]),
                    _: 1
                  }),
                  createVNode("span", null, "\u0411\u0438\u0431\u043B\u0438\u043E\u0442\u0435\u043A\u0430")
                ]),
                _: 1
              }, 8, ["variant"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PrimaryHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-c89d79dc"]]);
const Refs = Symbol("Forwarded refs");
function getDescriptor(obj, key) {
  let currentObj = obj;
  while (currentObj) {
    const descriptor = Reflect.getOwnPropertyDescriptor(currentObj, key);
    if (descriptor)
      return descriptor;
    currentObj = Object.getPrototypeOf(currentObj);
  }
  return void 0;
}
function forwardRefs(target) {
  for (var _len = arguments.length, refs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    refs[_key - 1] = arguments[_key];
  }
  target[Refs] = refs;
  return new Proxy(target, {
    get(target2, key) {
      if (Reflect.has(target2, key)) {
        return Reflect.get(target2, key);
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__"))
        return;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          const val = Reflect.get(ref2.value, key);
          return typeof val === "function" ? val.bind(ref2.value) : val;
        }
      }
    },
    has(target2, key) {
      if (Reflect.has(target2, key)) {
        return true;
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__"))
        return false;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          return true;
        }
      }
      return false;
    },
    set(target2, key, value) {
      if (Reflect.has(target2, key)) {
        return Reflect.set(target2, key, value);
      }
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__"))
        return false;
      for (const ref2 of refs) {
        if (ref2.value && Reflect.has(ref2.value, key)) {
          return Reflect.set(ref2.value, key, value);
        }
      }
      return false;
    },
    getOwnPropertyDescriptor(target2, key) {
      var _a2;
      var _a;
      const descriptor = Reflect.getOwnPropertyDescriptor(target2, key);
      if (descriptor)
        return descriptor;
      if (typeof key === "symbol" || key.startsWith("$") || key.startsWith("__"))
        return;
      for (const ref2 of refs) {
        if (!ref2.value)
          continue;
        const descriptor2 = (_a2 = getDescriptor(ref2.value, key)) != null ? _a2 : "_" in ref2.value ? getDescriptor((_a = ref2.value._) == null ? void 0 : _a.setupState, key) : void 0;
        if (descriptor2)
          return descriptor2;
      }
      for (const ref2 of refs) {
        const childRefs = ref2.value && ref2.value[Refs];
        if (!childRefs)
          continue;
        const queue = childRefs.slice();
        while (queue.length) {
          const ref3 = queue.shift();
          const descriptor2 = getDescriptor(ref3.value, key);
          if (descriptor2)
            return descriptor2;
          const childRefs2 = ref3.value && ref3.value[Refs];
          if (childRefs2)
            queue.push(...childRefs2);
        }
      }
      return void 0;
    }
  });
}
function elementToViewport(point, offset) {
  return {
    x: point.x + offset.x,
    y: point.y + offset.y
  };
}
function getOffset(a, b) {
  return {
    x: a.x - b.x,
    y: a.y - b.y
  };
}
function anchorToPoint(anchor, box) {
  if (anchor.side === "top" || anchor.side === "bottom") {
    const {
      side,
      align
    } = anchor;
    const x = align === "left" ? 0 : align === "center" ? box.width / 2 : align === "right" ? box.width : align;
    const y = side === "top" ? 0 : side === "bottom" ? box.height : side;
    return elementToViewport({
      x,
      y
    }, box);
  } else if (anchor.side === "left" || anchor.side === "right") {
    const {
      side,
      align
    } = anchor;
    const x = side === "left" ? 0 : side === "right" ? box.width : side;
    const y = align === "top" ? 0 : align === "center" ? box.height / 2 : align === "bottom" ? box.height : align;
    return elementToViewport({
      x,
      y
    }, box);
  }
  return elementToViewport({
    x: box.width / 2,
    y: box.height / 2
  }, box);
}
const locationStrategies = {
  static: staticLocationStrategy,
  // specific viewport position, usually centered
  connected: connectedLocationStrategy
  // connected to a certain element
};
const makeLocationStrategyProps = propsFactory({
  locationStrategy: {
    type: [String, Function],
    default: "static",
    validator: (val) => typeof val === "function" || val in locationStrategies
  },
  location: {
    type: String,
    default: "bottom"
  },
  origin: {
    type: String,
    default: "auto"
  },
  offset: [Number, String, Array]
}, "VOverlay-location-strategies");
function useLocationStrategies(props, data) {
  const contentStyles = ref({});
  const updateLocation = ref();
  return {
    contentStyles,
    updateLocation
  };
}
function staticLocationStrategy() {
}
function getIntrinsicSize(el, isRtl) {
  if (isRtl) {
    el.style.removeProperty("left");
  } else {
    el.style.removeProperty("right");
  }
  const contentBox = nullifyTransforms(el);
  if (isRtl) {
    contentBox.x += parseFloat(el.style.right || 0);
  } else {
    contentBox.x -= parseFloat(el.style.left || 0);
  }
  contentBox.y -= parseFloat(el.style.top || 0);
  return contentBox;
}
function connectedLocationStrategy(data, props, contentStyles) {
  const activatorFixed = Array.isArray(data.target.value) || isFixedPosition(data.target.value);
  if (activatorFixed) {
    Object.assign(contentStyles.value, {
      position: "fixed",
      top: 0,
      [data.isRtl.value ? "right" : "left"]: 0
    });
  }
  const {
    preferredAnchor,
    preferredOrigin
  } = destructComputed(() => {
    const parsedAnchor = parseAnchor(props.location, data.isRtl.value);
    const parsedOrigin = props.origin === "overlap" ? parsedAnchor : props.origin === "auto" ? flipSide(parsedAnchor) : parseAnchor(props.origin, data.isRtl.value);
    if (parsedAnchor.side === parsedOrigin.side && parsedAnchor.align === flipAlign(parsedOrigin).align) {
      return {
        preferredAnchor: flipCorner(parsedAnchor),
        preferredOrigin: flipCorner(parsedOrigin)
      };
    } else {
      return {
        preferredAnchor: parsedAnchor,
        preferredOrigin: parsedOrigin
      };
    }
  });
  const [minWidth, minHeight, maxWidth, maxHeight] = ["minWidth", "minHeight", "maxWidth", "maxHeight"].map((key) => {
    return computed(() => {
      const val = parseFloat(props[key]);
      return isNaN(val) ? Infinity : val;
    });
  });
  const offset = computed(() => {
    if (Array.isArray(props.offset)) {
      return props.offset;
    }
    if (typeof props.offset === "string") {
      const offset2 = props.offset.split(" ").map(parseFloat);
      if (offset2.length < 2)
        offset2.push(0);
      return offset2;
    }
    return typeof props.offset === "number" ? [props.offset, 0] : [0, 0];
  });
  let observe = false;
  const observer = new ResizeObserver(() => {
    if (observe)
      updateLocation();
  });
  watch([data.target, data.contentEl], (_ref, _ref2) => {
    let [newTarget, newContentEl] = _ref;
    let [oldTarget, oldContentEl] = _ref2;
    if (oldTarget && !Array.isArray(oldTarget))
      observer.unobserve(oldTarget);
    if (newTarget && !Array.isArray(newTarget))
      observer.observe(newTarget);
    if (oldContentEl)
      observer.unobserve(oldContentEl);
    if (newContentEl)
      observer.observe(newContentEl);
  }, {
    immediate: true
  });
  onScopeDispose(() => {
    observer.disconnect();
  });
  function updateLocation() {
    observe = false;
    requestAnimationFrame(() => observe = true);
    if (!data.target.value || !data.contentEl.value)
      return;
    const targetBox = getTargetBox(data.target.value);
    const contentBox = getIntrinsicSize(data.contentEl.value, data.isRtl.value);
    const scrollParents = getScrollParents(data.contentEl.value);
    const viewportMargin = 12;
    if (!scrollParents.length) {
      scrollParents.push((void 0).documentElement);
      if (!(data.contentEl.value.style.top && data.contentEl.value.style.left)) {
        contentBox.x -= parseFloat((void 0).documentElement.style.getPropertyValue("--v-body-scroll-x") || 0);
        contentBox.y -= parseFloat((void 0).documentElement.style.getPropertyValue("--v-body-scroll-y") || 0);
      }
    }
    const viewport = scrollParents.reduce((box, el) => {
      const rect = el.getBoundingClientRect();
      const scrollBox = new Box({
        x: el === (void 0).documentElement ? 0 : rect.x,
        y: el === (void 0).documentElement ? 0 : rect.y,
        width: el.clientWidth,
        height: el.clientHeight
      });
      if (box) {
        return new Box({
          x: Math.max(box.left, scrollBox.left),
          y: Math.max(box.top, scrollBox.top),
          width: Math.min(box.right, scrollBox.right) - Math.max(box.left, scrollBox.left),
          height: Math.min(box.bottom, scrollBox.bottom) - Math.max(box.top, scrollBox.top)
        });
      }
      return scrollBox;
    }, void 0);
    viewport.x += viewportMargin;
    viewport.y += viewportMargin;
    viewport.width -= viewportMargin * 2;
    viewport.height -= viewportMargin * 2;
    let placement = {
      anchor: preferredAnchor.value,
      origin: preferredOrigin.value
    };
    function checkOverflow(_placement) {
      const box = new Box(contentBox);
      const targetPoint = anchorToPoint(_placement.anchor, targetBox);
      const contentPoint = anchorToPoint(_placement.origin, box);
      let {
        x: x2,
        y: y2
      } = getOffset(targetPoint, contentPoint);
      switch (_placement.anchor.side) {
        case "top":
          y2 -= offset.value[0];
          break;
        case "bottom":
          y2 += offset.value[0];
          break;
        case "left":
          x2 -= offset.value[0];
          break;
        case "right":
          x2 += offset.value[0];
          break;
      }
      switch (_placement.anchor.align) {
        case "top":
          y2 -= offset.value[1];
          break;
        case "bottom":
          y2 += offset.value[1];
          break;
        case "left":
          x2 -= offset.value[1];
          break;
        case "right":
          x2 += offset.value[1];
          break;
      }
      box.x += x2;
      box.y += y2;
      box.width = Math.min(box.width, maxWidth.value);
      box.height = Math.min(box.height, maxHeight.value);
      const overflows = getOverflow(box, viewport);
      return {
        overflows,
        x: x2,
        y: y2
      };
    }
    let x = 0;
    let y = 0;
    const available = {
      x: 0,
      y: 0
    };
    const flipped = {
      x: false,
      y: false
    };
    let resets = -1;
    while (true) {
      if (resets++ > 10) {
        consoleError("Infinite loop detected in connectedLocationStrategy");
        break;
      }
      const {
        x: _x,
        y: _y,
        overflows
      } = checkOverflow(placement);
      x += _x;
      y += _y;
      contentBox.x += _x;
      contentBox.y += _y;
      {
        const axis2 = getAxis(placement.anchor);
        const hasOverflowX = overflows.x.before || overflows.x.after;
        const hasOverflowY = overflows.y.before || overflows.y.after;
        let reset = false;
        ["x", "y"].forEach((key) => {
          if (key === "x" && hasOverflowX && !flipped.x || key === "y" && hasOverflowY && !flipped.y) {
            const newPlacement = {
              anchor: {
                ...placement.anchor
              },
              origin: {
                ...placement.origin
              }
            };
            const flip = key === "x" ? axis2 === "y" ? flipAlign : flipSide : axis2 === "y" ? flipSide : flipAlign;
            newPlacement.anchor = flip(newPlacement.anchor);
            newPlacement.origin = flip(newPlacement.origin);
            const {
              overflows: newOverflows
            } = checkOverflow(newPlacement);
            if (newOverflows[key].before <= overflows[key].before && newOverflows[key].after <= overflows[key].after || newOverflows[key].before + newOverflows[key].after < (overflows[key].before + overflows[key].after) / 2) {
              placement = newPlacement;
              reset = flipped[key] = true;
            }
          }
        });
        if (reset)
          continue;
      }
      if (overflows.x.before) {
        x += overflows.x.before;
        contentBox.x += overflows.x.before;
      }
      if (overflows.x.after) {
        x -= overflows.x.after;
        contentBox.x -= overflows.x.after;
      }
      if (overflows.y.before) {
        y += overflows.y.before;
        contentBox.y += overflows.y.before;
      }
      if (overflows.y.after) {
        y -= overflows.y.after;
        contentBox.y -= overflows.y.after;
      }
      {
        const overflows2 = getOverflow(contentBox, viewport);
        available.x = viewport.width - overflows2.x.before - overflows2.x.after;
        available.y = viewport.height - overflows2.y.before - overflows2.y.after;
        x += overflows2.x.before;
        contentBox.x += overflows2.x.before;
        y += overflows2.y.before;
        contentBox.y += overflows2.y.before;
      }
      break;
    }
    const axis = getAxis(placement.anchor);
    Object.assign(contentStyles.value, {
      "--v-overlay-anchor-origin": `${placement.anchor.side} ${placement.anchor.align}`,
      transformOrigin: `${placement.origin.side} ${placement.origin.align}`,
      // transform: `translate(${pixelRound(x)}px, ${pixelRound(y)}px)`,
      top: convertToUnit(pixelRound(y)),
      left: data.isRtl.value ? void 0 : convertToUnit(pixelRound(x)),
      right: data.isRtl.value ? convertToUnit(pixelRound(-x)) : void 0,
      minWidth: convertToUnit(axis === "y" ? Math.min(minWidth.value, targetBox.width) : minWidth.value),
      maxWidth: convertToUnit(pixelCeil(clamp(available.x, minWidth.value === Infinity ? 0 : minWidth.value, maxWidth.value))),
      maxHeight: convertToUnit(pixelCeil(clamp(available.y, minHeight.value === Infinity ? 0 : minHeight.value, maxHeight.value)))
    });
    return {
      available,
      contentBox
    };
  }
  watch(() => [preferredAnchor.value, preferredOrigin.value, props.offset, props.minWidth, props.minHeight, props.maxWidth, props.maxHeight], () => updateLocation());
  nextTick(() => {
    const result = updateLocation();
    if (!result)
      return;
    const {
      available,
      contentBox
    } = result;
    if (contentBox.height > available.y) {
      requestAnimationFrame(() => {
        updateLocation();
        requestAnimationFrame(() => {
          updateLocation();
        });
      });
    }
  });
  return {
    updateLocation
  };
}
function pixelRound(val) {
  return Math.round(val * devicePixelRatio) / devicePixelRatio;
}
function pixelCeil(val) {
  return Math.ceil(val * devicePixelRatio) / devicePixelRatio;
}
let clean = true;
const frames = [];
function requestNewFrame(cb) {
  if (!clean || frames.length) {
    frames.push(cb);
    run();
  } else {
    clean = false;
    cb();
    run();
  }
}
let raf = -1;
function run() {
  cancelAnimationFrame(raf);
  raf = requestAnimationFrame(() => {
    const frame = frames.shift();
    if (frame)
      frame();
    if (frames.length)
      run();
    else
      clean = true;
  });
}
const scrollStrategies = {
  none: null,
  close: closeScrollStrategy,
  block: blockScrollStrategy,
  reposition: repositionScrollStrategy
};
const makeScrollStrategyProps = propsFactory({
  scrollStrategy: {
    type: [String, Function],
    default: "block",
    validator: (val) => typeof val === "function" || val in scrollStrategies
  }
}, "VOverlay-scroll-strategies");
function closeScrollStrategy(data) {
  var _a;
  function onScroll(e) {
    data.isActive.value = false;
  }
  bindScroll((_a = data.targetEl.value) != null ? _a : data.contentEl.value, onScroll);
}
function blockScrollStrategy(data, props) {
  var _a;
  const offsetParent = (_a = data.root.value) == null ? void 0 : _a.offsetParent;
  const scrollElements = [.../* @__PURE__ */ new Set([...getScrollParents(data.targetEl.value, props.contained ? offsetParent : void 0), ...getScrollParents(data.contentEl.value, props.contained ? offsetParent : void 0)])].filter((el) => !el.classList.contains("v-overlay-scroll-blocked"));
  const scrollbarWidth = (void 0).innerWidth - (void 0).documentElement.offsetWidth;
  const scrollableParent = ((el) => hasScrollbar(el) && el)(offsetParent || (void 0).documentElement);
  if (scrollableParent) {
    data.root.value.classList.add("v-overlay--scroll-blocked");
  }
  scrollElements.forEach((el, i) => {
    el.style.setProperty("--v-body-scroll-x", convertToUnit(-el.scrollLeft));
    el.style.setProperty("--v-body-scroll-y", convertToUnit(-el.scrollTop));
    if (el !== (void 0).documentElement) {
      el.style.setProperty("--v-scrollbar-offset", convertToUnit(scrollbarWidth));
    }
    el.classList.add("v-overlay-scroll-blocked");
  });
  onScopeDispose(() => {
    scrollElements.forEach((el, i) => {
      const x = parseFloat(el.style.getPropertyValue("--v-body-scroll-x"));
      const y = parseFloat(el.style.getPropertyValue("--v-body-scroll-y"));
      const scrollBehavior = el.style.scrollBehavior;
      el.style.scrollBehavior = "auto";
      el.style.removeProperty("--v-body-scroll-x");
      el.style.removeProperty("--v-body-scroll-y");
      el.style.removeProperty("--v-scrollbar-offset");
      el.classList.remove("v-overlay-scroll-blocked");
      el.scrollLeft = -x;
      el.scrollTop = -y;
      el.style.scrollBehavior = scrollBehavior;
    });
    if (scrollableParent) {
      data.root.value.classList.remove("v-overlay--scroll-blocked");
    }
  });
}
function repositionScrollStrategy(data, props, scope) {
  let slow = false;
  let raf2 = -1;
  let ric = -1;
  function update(e) {
    requestNewFrame(() => {
      var _a, _b;
      const start = performance.now();
      (_b = (_a = data.updateLocation).value) == null ? void 0 : _b.call(_a, e);
      const time = performance.now() - start;
      slow = time / (1e3 / 60) > 2;
    });
  }
  ric = (typeof requestIdleCallback === "undefined" ? (cb) => cb() : requestIdleCallback)(() => {
    scope.run(() => {
      var _a;
      bindScroll((_a = data.targetEl.value) != null ? _a : data.contentEl.value, (e) => {
        if (slow) {
          cancelAnimationFrame(raf2);
          raf2 = requestAnimationFrame(() => {
            raf2 = requestAnimationFrame(() => {
              update(e);
            });
          });
        } else {
          update(e);
        }
      });
    });
  });
  onScopeDispose(() => {
    typeof cancelIdleCallback !== "undefined" && cancelIdleCallback(ric);
    cancelAnimationFrame(raf2);
  });
}
function bindScroll(el, onScroll) {
  const scrollElements = [void 0, ...getScrollParents(el)];
  scrollElements.forEach((el2) => {
    el2.addEventListener("scroll", onScroll, {
      passive: true
    });
  });
  onScopeDispose(() => {
    scrollElements.forEach((el2) => {
      el2.removeEventListener("scroll", onScroll);
    });
  });
}
const VMenuSymbol = Symbol.for("vuetify:v-menu");
const makeDelayProps = propsFactory({
  closeDelay: [Number, String],
  openDelay: [Number, String]
}, "delay");
function useDelay(props, cb) {
  let clearDelay = () => {
  };
  function runDelay(isOpening) {
    clearDelay == null ? void 0 : clearDelay();
    const delay = Number(isOpening ? props.openDelay : props.closeDelay);
    return new Promise((resolve) => {
      clearDelay = defer(delay, () => {
        cb == null ? void 0 : cb(isOpening);
        resolve(isOpening);
      });
    });
  }
  function runOpenDelay() {
    return runDelay(true);
  }
  function runCloseDelay() {
    return runDelay(false);
  }
  return {
    clearDelay,
    runOpenDelay,
    runCloseDelay
  };
}
const makeActivatorProps = propsFactory({
  target: [String, Object],
  activator: [String, Object],
  activatorProps: {
    type: Object,
    default: () => ({})
  },
  openOnClick: {
    type: Boolean,
    default: void 0
  },
  openOnHover: Boolean,
  openOnFocus: {
    type: Boolean,
    default: void 0
  },
  closeOnContentClick: Boolean,
  ...makeDelayProps()
}, "VOverlay-activator");
function useActivator(props, _ref) {
  let {
    isActive,
    isTop
  } = _ref;
  const vm = getCurrentInstance("useActivator");
  const activatorEl = ref();
  let isHovered = false;
  let isFocused = false;
  let firstEnter = true;
  const openOnFocus = computed(() => props.openOnFocus || props.openOnFocus == null && props.openOnHover);
  const openOnClick = computed(() => props.openOnClick || props.openOnClick == null && !props.openOnHover && !openOnFocus.value);
  const {
    runOpenDelay,
    runCloseDelay
  } = useDelay(props, (value) => {
    if (value === (props.openOnHover && isHovered || openOnFocus.value && isFocused) && !(props.openOnHover && isActive.value && !isTop.value)) {
      if (isActive.value !== value) {
        firstEnter = true;
      }
      isActive.value = value;
    }
  });
  const cursorTarget = ref();
  const availableEvents = {
    onClick: (e) => {
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      if (!isActive.value) {
        cursorTarget.value = [e.clientX, e.clientY];
      }
      isActive.value = !isActive.value;
    },
    onMouseenter: (e) => {
      var _a;
      if ((_a = e.sourceCapabilities) == null ? void 0 : _a.firesTouchEvents)
        return;
      isHovered = true;
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    onMouseleave: (e) => {
      isHovered = false;
      runCloseDelay();
    },
    onFocus: (e) => {
      if (matchesSelector(e.target) === false)
        ;
      isFocused = true;
      e.stopPropagation();
      activatorEl.value = e.currentTarget || e.target;
      runOpenDelay();
    },
    onBlur: (e) => {
      isFocused = false;
      e.stopPropagation();
      runCloseDelay();
    }
  };
  const activatorEvents = computed(() => {
    const events = {};
    if (openOnClick.value) {
      events.onClick = availableEvents.onClick;
    }
    if (props.openOnHover) {
      events.onMouseenter = availableEvents.onMouseenter;
      events.onMouseleave = availableEvents.onMouseleave;
    }
    if (openOnFocus.value) {
      events.onFocus = availableEvents.onFocus;
      events.onBlur = availableEvents.onBlur;
    }
    return events;
  });
  const contentEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.onMouseenter = () => {
        isHovered = true;
        runOpenDelay();
      };
      events.onMouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    if (openOnFocus.value) {
      events.onFocusin = () => {
        isFocused = true;
        runOpenDelay();
      };
      events.onFocusout = () => {
        isFocused = false;
        runCloseDelay();
      };
    }
    if (props.closeOnContentClick) {
      const menu = inject(VMenuSymbol, null);
      events.onClick = () => {
        isActive.value = false;
        menu == null ? void 0 : menu.closeParents();
      };
    }
    return events;
  });
  const scrimEvents = computed(() => {
    const events = {};
    if (props.openOnHover) {
      events.onMouseenter = () => {
        if (firstEnter) {
          isHovered = true;
          firstEnter = false;
          runOpenDelay();
        }
      };
      events.onMouseleave = () => {
        isHovered = false;
        runCloseDelay();
      };
    }
    return events;
  });
  watch(isTop, (val) => {
    if (val && (props.openOnHover && !isHovered && (!openOnFocus.value || !isFocused) || openOnFocus.value && !isFocused && (!props.openOnHover || !isHovered))) {
      isActive.value = false;
    }
  });
  watch(isActive, (val) => {
    if (!val) {
      setTimeout(() => {
        cursorTarget.value = void 0;
      });
    }
  }, {
    flush: "post"
  });
  const activatorRef = templateRef();
  watchEffect(() => {
    if (!activatorRef.value)
      return;
    nextTick(() => {
      activatorEl.value = activatorRef.el;
    });
  });
  const targetRef = templateRef();
  const target = computed(() => {
    if (props.target === "cursor" && cursorTarget.value)
      return cursorTarget.value;
    if (targetRef.value)
      return targetRef.el;
    return getTarget(props.target, vm) || activatorEl.value;
  });
  const targetEl = computed(() => {
    return Array.isArray(target.value) ? void 0 : target.value;
  });
  let scope;
  watch(() => !!props.activator, (val) => {
    if (val && IN_BROWSER) {
      scope = effectScope();
      scope.run(() => {
        _useActivator(props, vm, {
          activatorEl,
          activatorEvents
        });
      });
    } else if (scope) {
      scope.stop();
    }
  }, {
    flush: "post",
    immediate: true
  });
  onScopeDispose(() => {
    scope == null ? void 0 : scope.stop();
  });
  return {
    activatorEl,
    activatorRef,
    target,
    targetEl,
    targetRef,
    activatorEvents,
    contentEvents,
    scrimEvents
  };
}
function _useActivator(props, vm, _ref2) {
  let {
    activatorEl,
    activatorEvents
  } = _ref2;
  watch(() => props.activator, (val, oldVal) => {
    if (oldVal && val !== oldVal) {
      const activator = getActivator(oldVal);
      activator && unbindActivatorProps(activator);
    }
    if (val) {
      nextTick(() => bindActivatorProps());
    }
  }, {
    immediate: true
  });
  watch(() => props.activatorProps, () => {
    bindActivatorProps();
  });
  onScopeDispose(() => {
    unbindActivatorProps();
  });
  function bindActivatorProps() {
    let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
    if (!el)
      return;
    bindProps(el, mergeProps(activatorEvents.value, _props));
  }
  function unbindActivatorProps() {
    let el = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getActivator();
    let _props = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : props.activatorProps;
    if (!el)
      return;
    unbindProps(el, mergeProps(activatorEvents.value, _props));
  }
  function getActivator() {
    let selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : props.activator;
    const activator = getTarget(selector, vm);
    activatorEl.value = (activator == null ? void 0 : activator.nodeType) === Node.ELEMENT_NODE ? activator : void 0;
    return activatorEl.value;
  }
}
function getTarget(selector, vm) {
  var _a, _b;
  if (!selector)
    return;
  let target;
  if (selector === "parent") {
    let el = (_b = (_a = vm == null ? void 0 : vm.proxy) == null ? void 0 : _a.$el) == null ? void 0 : _b.parentNode;
    while (el == null ? void 0 : el.hasAttribute("data-no-activator")) {
      el = el.parentNode;
    }
    target = el;
  } else if (typeof selector === "string") {
    target = (void 0).querySelector(selector);
  } else if ("$el" in selector) {
    target = selector.$el;
  } else {
    target = selector;
  }
  return target;
}
function useHydration() {
  return shallowRef(false);
}
const makeLazyProps = propsFactory({
  eager: Boolean
}, "lazy");
function useLazy(props, active) {
  const isBooted = shallowRef(false);
  const hasContent = computed(() => isBooted.value || props.eager || active.value);
  watch(active, () => isBooted.value = true);
  function onAfterLeave() {
    if (!props.eager)
      isBooted.value = false;
  }
  return {
    isBooted,
    hasContent,
    onAfterLeave
  };
}
function useScopeId() {
  const vm = getCurrentInstance("useScopeId");
  const scopeId = vm.vnode.scopeId;
  return {
    scopeId: scopeId ? {
      [scopeId]: ""
    } : void 0
  };
}
const StackSymbol = Symbol.for("vuetify:stack");
const globalStack = reactive([]);
function useStack(isActive, zIndex, disableGlobalStack) {
  const vm = getCurrentInstance("useStack");
  const createStackEntry = !disableGlobalStack;
  const parent = inject(StackSymbol, void 0);
  const stack = reactive({
    activeChildren: /* @__PURE__ */ new Set()
  });
  provide(StackSymbol, stack);
  const _zIndex = shallowRef(+zIndex.value);
  useToggleScope(isActive, () => {
    var _a;
    const lastZIndex = (_a = globalStack.at(-1)) == null ? void 0 : _a[1];
    _zIndex.value = lastZIndex ? lastZIndex + 10 : +zIndex.value;
    if (createStackEntry) {
      globalStack.push([vm.uid, _zIndex.value]);
    }
    parent == null ? void 0 : parent.activeChildren.add(vm.uid);
    onScopeDispose(() => {
      if (createStackEntry) {
        const idx = toRaw(globalStack).findIndex((v) => v[0] === vm.uid);
        globalStack.splice(idx, 1);
      }
      parent == null ? void 0 : parent.activeChildren.delete(vm.uid);
    });
  });
  const globalTop = shallowRef(true);
  if (createStackEntry) {
    watchEffect(() => {
      var _a;
      const _isTop = ((_a = globalStack.at(-1)) == null ? void 0 : _a[0]) === vm.uid;
      setTimeout(() => globalTop.value = _isTop);
    });
  }
  const localTop = computed(() => !stack.activeChildren.size);
  return {
    globalTop: readonly(globalTop),
    localTop,
    stackStyles: computed(() => ({
      zIndex: _zIndex.value
    }))
  };
}
function useTeleport(target) {
  const teleportTarget = computed(() => {
    const _target = target.value;
    if (_target === true || !IN_BROWSER)
      return void 0;
    const targetElement = _target === false ? (void 0).body : typeof _target === "string" ? (void 0).querySelector(_target) : _target;
    if (targetElement == null) {
      warn(`Unable to locate target ${_target}`);
      return void 0;
    }
    let container = targetElement.querySelector(":scope > .v-overlay-container");
    if (!container) {
      container = (void 0).createElement("div");
      container.className = "v-overlay-container";
      targetElement.appendChild(container);
    }
    return container;
  });
  return {
    teleportTarget
  };
}
function defaultConditional() {
  return true;
}
function checkEvent(e, el, binding) {
  if (!e || checkIsActive(e, binding) === false)
    return false;
  const root = attachedRoot(el);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot && root.host === e.target)
    return false;
  const elements = (typeof binding.value === "object" && binding.value.include || (() => []))();
  elements.push(el);
  return !elements.some((el2) => el2 == null ? void 0 : el2.contains(e.target));
}
function checkIsActive(e, binding) {
  const isActive = typeof binding.value === "object" && binding.value.closeConditional || defaultConditional;
  return isActive(e);
}
function directive(e, el, binding) {
  const handler = typeof binding.value === "function" ? binding.value : binding.value.handler;
  el._clickOutside.lastMousedownWasOutside && checkEvent(e, el, binding) && setTimeout(() => {
    checkIsActive(e, binding) && handler && handler(e);
  }, 0);
}
function handleShadow(el, callback) {
  const root = attachedRoot(el);
  callback(void 0);
  if (typeof ShadowRoot !== "undefined" && root instanceof ShadowRoot) {
    callback(root);
  }
}
const ClickOutside = {
  // [data-app] may not be found
  // if using bind, inserted makes
  // sure that the root element is
  // available, iOS does not support
  // clicks on body
  mounted(el, binding) {
    const onClick = (e) => directive(e, el, binding);
    const onMousedown = (e) => {
      el._clickOutside.lastMousedownWasOutside = checkEvent(e, el, binding);
    };
    handleShadow(el, (app) => {
      app.addEventListener("click", onClick, true);
      app.addEventListener("mousedown", onMousedown, true);
    });
    if (!el._clickOutside) {
      el._clickOutside = {
        lastMousedownWasOutside: false
      };
    }
    el._clickOutside[binding.instance.$.uid] = {
      onClick,
      onMousedown
    };
  },
  unmounted(el, binding) {
    if (!el._clickOutside)
      return;
    handleShadow(el, (app) => {
      var _a;
      if (!app || !((_a = el._clickOutside) == null ? void 0 : _a[binding.instance.$.uid]))
        return;
      const {
        onClick,
        onMousedown
      } = el._clickOutside[binding.instance.$.uid];
      app.removeEventListener("click", onClick, true);
      app.removeEventListener("mousedown", onMousedown, true);
    });
    delete el._clickOutside[binding.instance.$.uid];
  }
};
function Scrim(props) {
  const {
    modelValue,
    color,
    ...rest
  } = props;
  return createVNode(Transition, {
    "name": "fade-transition",
    "appear": true
  }, {
    default: () => [props.modelValue && createVNode("div", mergeProps({
      "class": ["v-overlay__scrim", props.color.backgroundColorClasses.value],
      "style": props.color.backgroundColorStyles.value
    }, rest), null)]
  });
}
const makeVOverlayProps = propsFactory({
  absolute: Boolean,
  attach: [Boolean, String, Object],
  closeOnBack: {
    type: Boolean,
    default: true
  },
  contained: Boolean,
  contentClass: null,
  contentProps: null,
  disabled: Boolean,
  opacity: [Number, String],
  noClickAnimation: Boolean,
  modelValue: Boolean,
  persistent: Boolean,
  scrim: {
    type: [Boolean, String],
    default: true
  },
  zIndex: {
    type: [Number, String],
    default: 2e3
  },
  ...makeActivatorProps(),
  ...makeComponentProps(),
  ...makeDimensionProps(),
  ...makeLazyProps(),
  ...makeLocationStrategyProps(),
  ...makeScrollStrategyProps(),
  ...makeThemeProps(),
  ...makeTransitionProps()
}, "VOverlay");
const VOverlay = genericComponent()({
  name: "VOverlay",
  directives: {
    ClickOutside
  },
  inheritAttrs: false,
  props: {
    _disableGlobalStack: Boolean,
    ...makeVOverlayProps()
  },
  emits: {
    "click:outside": (e) => true,
    "update:modelValue": (value) => true,
    afterEnter: () => true,
    afterLeave: () => true
  },
  setup(props, _ref) {
    let {
      slots,
      attrs,
      emit
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const isActive = computed({
      get: () => model.value,
      set: (v) => {
        if (!(v && props.disabled))
          model.value = v;
      }
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses,
      isRtl
    } = useRtl();
    const {
      hasContent,
      onAfterLeave: _onAfterLeave
    } = useLazy(props, isActive);
    const scrimColor = useBackgroundColor(computed(() => {
      return typeof props.scrim === "string" ? props.scrim : null;
    }));
    const {
      globalTop,
      localTop,
      stackStyles
    } = useStack(isActive, toRef(props, "zIndex"), props._disableGlobalStack);
    const {
      activatorEl,
      activatorRef,
      target,
      targetEl,
      targetRef,
      activatorEvents,
      contentEvents,
      scrimEvents
    } = useActivator(props, {
      isActive,
      isTop: localTop
    });
    const potentialShadowDomRoot = computed(() => {
      var _a;
      return (_a = activatorEl == null ? void 0 : activatorEl.value) == null ? void 0 : _a.getRootNode();
    });
    const {
      teleportTarget
    } = useTeleport(computed(() => {
      var _a;
      return props.attach || props.contained || potentialShadowDomRoot.value instanceof ShadowRoot ? (_a = potentialShadowDomRoot.value) != null ? _a : true : false;
    }));
    const {
      dimensionStyles
    } = useDimension(props);
    const isMounted = useHydration();
    const {
      scopeId
    } = useScopeId();
    watch(() => props.disabled, (v) => {
      if (v)
        isActive.value = false;
    });
    const root = ref();
    const scrimEl = ref();
    const contentEl = ref();
    const {
      contentStyles,
      updateLocation
    } = useLocationStrategies();
    function onClickOutside(e) {
      emit("click:outside", e);
      if (!props.persistent)
        isActive.value = false;
      else
        animateClick();
    }
    function closeConditional(e) {
      return isActive.value && globalTop.value && // If using scrim, only close if clicking on it rather than anything opened on top
      (!props.scrim || e.target === scrimEl.value);
    }
    useRouter();
    useToggleScope(() => props.closeOnBack, () => {
    });
    const top = ref();
    watch(() => isActive.value && (props.absolute || props.contained) && teleportTarget.value == null, (val) => {
      if (val) {
        const scrollParent = getScrollParent(root.value);
        if (scrollParent && scrollParent !== (void 0).scrollingElement) {
          top.value = scrollParent.scrollTop;
        }
      }
    });
    function animateClick() {
      if (props.noClickAnimation)
        return;
      contentEl.value && animate(contentEl.value, [{
        transformOrigin: "center"
      }, {
        transform: "scale(1.03)"
      }, {
        transformOrigin: "center"
      }], {
        duration: 150,
        easing: standardEasing
      });
    }
    function onAfterEnter() {
      emit("afterEnter");
    }
    function onAfterLeave() {
      _onAfterLeave();
      emit("afterLeave");
    }
    useRender(() => {
      var _a;
      return createVNode(Fragment, null, [(_a = slots.activator) == null ? void 0 : _a.call(slots, {
        isActive: isActive.value,
        targetRef,
        props: mergeProps({
          ref: activatorRef
        }, activatorEvents.value, props.activatorProps)
      }), isMounted.value && hasContent.value && createVNode(Teleport, {
        "disabled": !teleportTarget.value,
        "to": teleportTarget.value
      }, {
        default: () => [createVNode("div", mergeProps({
          "class": ["v-overlay", {
            "v-overlay--absolute": props.absolute || props.contained,
            "v-overlay--active": isActive.value,
            "v-overlay--contained": props.contained
          }, themeClasses.value, rtlClasses.value, props.class],
          "style": [stackStyles.value, {
            "--v-overlay-opacity": props.opacity,
            top: convertToUnit(top.value)
          }, props.style],
          "ref": root
        }, scopeId, attrs), [createVNode(Scrim, mergeProps({
          "color": scrimColor,
          "modelValue": isActive.value && !!props.scrim,
          "ref": scrimEl
        }, scrimEvents.value), null), createVNode(MaybeTransition, {
          "appear": true,
          "persisted": true,
          "transition": props.transition,
          "target": target.value,
          "onAfterEnter": onAfterEnter,
          "onAfterLeave": onAfterLeave
        }, {
          default: () => {
            var _a2;
            return [withDirectives(createVNode("div", mergeProps({
              "ref": contentEl,
              "class": ["v-overlay__content", props.contentClass],
              "style": [dimensionStyles.value, contentStyles.value]
            }, contentEvents.value, props.contentProps), [(_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
              isActive
            })]), [[vShow, isActive.value], [resolveDirective("click-outside"), {
              handler: onClickOutside,
              closeConditional,
              include: () => [activatorEl.value]
            }]])];
          }
        })])]
      })]);
    });
    return {
      activatorEl,
      scrimEl,
      target,
      animateClick,
      contentEl,
      globalTop,
      localTop,
      updateLocation
    };
  }
});

export { VDialogTransition as V, __nuxt_component_0 as _, VMenuSymbol as a, animate as b, VOverlay as c, makeLazyProps as d, useLazy as e, forwardRefs as f, makeVOverlayProps as m, nullifyTransforms as n, standardEasing as s, useScopeId as u };
//# sourceMappingURL=VOverlay-BfcxL7a6.mjs.map
