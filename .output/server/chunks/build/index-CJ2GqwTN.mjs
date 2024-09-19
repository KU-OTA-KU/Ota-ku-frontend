import { useSSRContext, defineAsyncComponent, defineComponent, useAttrs, ref, computed, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, toDisplayString, h, resolveComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { u as useHead, _ as __nuxt_component_0$4 } from './index-h94hsqyg.mjs';
import { _ as _export_sfc, i as encodeParam, b as useNuxtApp, l as useI18n, h as hasProtocol, f as withLeadingSlash, j as joinURL, g as parseURL, c as useRuntimeConfig, u as useRouter, p as parseQuery, n as nuxtLinkDefaults, r as resolveRouteObject, a as navigateTo, k as encodePath, w as withTrailingSlash, d as withoutTrailingSlash } from './server.mjs';
import { q as defu } from '../runtime.mjs';
import throttle from 'lodash/throttle.js';
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
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'ipx';

async function preloadRouteComponents(to, router = useRouter()) {
  {
    return;
  }
}
const firstNonUndefined = (...args) => args.find((arg) => arg !== void 0);
// @__NO_SIDE_EFFECTS__
function defineNuxtLink(options) {
  const componentName = options.componentName || "NuxtLink";
  function resolveTrailingSlashBehavior(to, resolve) {
    if (!to || options.trailingSlash !== "append" && options.trailingSlash !== "remove") {
      return to;
    }
    if (typeof to === "string") {
      return applyTrailingSlashBehavior(to, options.trailingSlash);
    }
    const path = "path" in to && to.path !== void 0 ? to.path : resolve(to).path;
    const resolvedPath = {
      ...to,
      name: void 0,
      // named routes would otherwise always override trailing slash behavior
      path: applyTrailingSlashBehavior(path, options.trailingSlash)
    };
    return resolvedPath;
  }
  function useNuxtLink(props) {
    var _a, _b, _c;
    const router = useRouter();
    const config = useRuntimeConfig();
    const hasTarget = computed(() => !!props.target && props.target !== "_self");
    const isAbsoluteUrl = computed(() => {
      const path = props.to || props.href || "";
      return typeof path === "string" && hasProtocol(path, { acceptRelative: true });
    });
    const builtinRouterLink = resolveComponent("RouterLink");
    const useBuiltinLink = builtinRouterLink && typeof builtinRouterLink !== "string" ? builtinRouterLink.useLink : void 0;
    const isExternal = computed(() => {
      if (props.external) {
        return true;
      }
      const path = props.to || props.href || "";
      if (typeof path === "object") {
        return false;
      }
      return path === "" || isAbsoluteUrl.value;
    });
    const to = computed(() => {
      const path = props.to || props.href || "";
      if (isExternal.value) {
        return path;
      }
      return resolveTrailingSlashBehavior(path, router.resolve);
    });
    const link = isExternal.value ? void 0 : useBuiltinLink == null ? void 0 : useBuiltinLink({ ...props, to });
    const href = computed(() => {
      var _a3;
      var _a2;
      if (!to.value || isAbsoluteUrl.value) {
        return to.value;
      }
      if (isExternal.value) {
        const path = typeof to.value === "object" && "path" in to.value ? resolveRouteObject(to.value) : to.value;
        const href2 = typeof path === "object" ? router.resolve(path).href : path;
        return resolveTrailingSlashBehavior(
          href2,
          router.resolve
          /* will not be called */
        );
      }
      if (typeof to.value === "object") {
        return (_a3 = (_a2 = router.resolve(to.value)) == null ? void 0 : _a2.href) != null ? _a3 : null;
      }
      return resolveTrailingSlashBehavior(
        joinURL(config.app.baseURL, to.value),
        router.resolve
        /* will not be called */
      );
    });
    return {
      to,
      hasTarget,
      isAbsoluteUrl,
      isExternal,
      //
      href,
      isActive: (_a = link == null ? void 0 : link.isActive) != null ? _a : computed(() => to.value === router.currentRoute.value.path),
      isExactActive: (_b = link == null ? void 0 : link.isExactActive) != null ? _b : computed(() => to.value === router.currentRoute.value.path),
      route: (_c = link == null ? void 0 : link.route) != null ? _c : computed(() => router.resolve(to.value)),
      async navigate() {
        await navigateTo(href.value, { replace: props.replace, external: isExternal.value || hasTarget.value });
      }
    };
  }
  return defineComponent({
    name: componentName,
    props: {
      // Routing
      to: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      href: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      // Attributes
      target: {
        type: String,
        default: void 0,
        required: false
      },
      rel: {
        type: String,
        default: void 0,
        required: false
      },
      noRel: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Prefetching
      prefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      prefetchOn: {
        type: [String, Object],
        default: void 0,
        required: false
      },
      noPrefetch: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Styling
      activeClass: {
        type: String,
        default: void 0,
        required: false
      },
      exactActiveClass: {
        type: String,
        default: void 0,
        required: false
      },
      prefetchedClass: {
        type: String,
        default: void 0,
        required: false
      },
      // Vue Router's `<RouterLink>` additional props
      replace: {
        type: Boolean,
        default: void 0,
        required: false
      },
      ariaCurrentValue: {
        type: String,
        default: void 0,
        required: false
      },
      // Edge cases handling
      external: {
        type: Boolean,
        default: void 0,
        required: false
      },
      // Slot API
      custom: {
        type: Boolean,
        default: void 0,
        required: false
      }
    },
    useLink: useNuxtLink,
    setup(props, { slots }) {
      const router = useRouter();
      const { to, href, navigate, isExternal, hasTarget, isAbsoluteUrl } = useNuxtLink(props);
      const prefetched = ref(false);
      const el = void 0;
      const elRef = void 0;
      function shouldPrefetch(mode) {
        var _a2, _b2;
        var _a, _b;
        return !prefetched.value && (typeof props.prefetchOn === "string" ? props.prefetchOn === mode : (_a2 = (_a = props.prefetchOn) == null ? void 0 : _a[mode]) != null ? _a2 : (_b = options.prefetchOn) == null ? void 0 : _b[mode]) && ((_b2 = props.prefetch) != null ? _b2 : options.prefetch) !== false && props.noPrefetch !== true && props.target !== "_blank" && !isSlowConnection();
      }
      async function prefetch(nuxtApp = useNuxtApp()) {
        if (prefetched.value) {
          return;
        }
        prefetched.value = true;
        const path = typeof to.value === "string" ? to.value : isExternal.value ? resolveRouteObject(to.value) : router.resolve(to.value).fullPath;
        await Promise.all([
          nuxtApp.hooks.callHook("link:prefetch", path).catch(() => {
          }),
          !isExternal.value && !hasTarget.value && preloadRouteComponents(to.value, router).catch(() => {
          })
        ]);
      }
      return () => {
        var _a;
        if (!isExternal.value && !hasTarget.value) {
          const routerLinkProps = {
            ref: elRef,
            to: to.value,
            activeClass: props.activeClass || options.activeClass,
            exactActiveClass: props.exactActiveClass || options.exactActiveClass,
            replace: props.replace,
            ariaCurrentValue: props.ariaCurrentValue,
            custom: props.custom
          };
          if (!props.custom) {
            if (shouldPrefetch("interaction")) {
              routerLinkProps.onPointerenter = prefetch.bind(null, void 0);
              routerLinkProps.onFocus = prefetch.bind(null, void 0);
            }
            if (prefetched.value) {
              routerLinkProps.class = props.prefetchedClass || options.prefetchedClass;
            }
            routerLinkProps.rel = props.rel || void 0;
          }
          return h(
            resolveComponent("RouterLink"),
            routerLinkProps,
            slots.default
          );
        }
        const target = props.target || null;
        const rel = firstNonUndefined(
          // converts `""` to `null` to prevent the attribute from being added as empty (`rel=""`)
          props.noRel ? "" : props.rel,
          options.externalRelAttribute,
          /*
          * A fallback rel of `noopener noreferrer` is applied for external links or links that open in a new tab.
          * This solves a reverse tabnapping security flaw in browsers pre-2021 as well as improving privacy.
          */
          isAbsoluteUrl.value || hasTarget.value ? "noopener noreferrer" : ""
        ) || null;
        if (props.custom) {
          if (!slots.default) {
            return null;
          }
          return slots.default({
            href: href.value,
            navigate,
            prefetch,
            get route() {
              if (!href.value) {
                return void 0;
              }
              const url = new URL(href.value, "http://localhost");
              return {
                path: url.pathname,
                fullPath: url.pathname,
                get query() {
                  return parseQuery(url.search);
                },
                hash: url.hash,
                params: {},
                name: void 0,
                matched: [],
                redirectedFrom: void 0,
                meta: {},
                href: href.value
              };
            },
            rel,
            target,
            isExternal: isExternal.value || hasTarget.value,
            isActive: false,
            isExactActive: false
          });
        }
        return h("a", { ref: el, href: href.value || null, rel, target }, (_a = slots.default) == null ? void 0 : _a.call(slots));
      };
    }
  });
}
const __nuxt_component_0$3 = /* @__PURE__ */ defineNuxtLink(nuxtLinkDefaults);
function applyTrailingSlashBehavior(to, trailingSlash) {
  const normalizeFn = trailingSlash === "append" ? withTrailingSlash : withoutTrailingSlash;
  const hasProtocolDifferentFromHttp = hasProtocol(to) && !to.startsWith("http");
  if (hasProtocolDifferentFromHttp) {
    return to;
  }
  return normalizeFn(to, true);
}
function isSlowConnection() {
  {
    return;
  }
}
async function imageMeta(_ctx, url) {
  const meta = await _imageMeta(url).catch((err) => {
    console.error("Failed to get image meta for " + url, err + "");
    return {
      width: 0,
      height: 0,
      ratio: 0
    };
  });
  return meta;
}
async function _imageMeta(url) {
  {
    const imageMeta2 = await import('image-meta').then((r) => r.imageMeta);
    const data = await fetch(url).then((res) => res.buffer());
    const metadata = imageMeta2(data);
    if (!metadata) {
      throw new Error(`No metadata could be extracted from the image \`${url}\`.`);
    }
    const { width, height } = metadata;
    const meta = {
      width,
      height,
      ratio: width && height ? width / height : void 0
    };
    return meta;
  }
}
function createMapper(map) {
  return (key) => {
    return key ? map[key] || key : map.missingValue;
  };
}
function createOperationsGenerator({ formatter, keyMap, joinWith = "/", valueMap } = {}) {
  if (!formatter) {
    formatter = (key, value) => `${key}=${value}`;
  }
  if (keyMap && typeof keyMap !== "function") {
    keyMap = createMapper(keyMap);
  }
  const map = valueMap || {};
  Object.keys(map).forEach((valueKey) => {
    if (typeof map[valueKey] !== "function") {
      map[valueKey] = createMapper(map[valueKey]);
    }
  });
  return (modifiers = {}) => {
    const operations = Object.entries(modifiers).filter(([_, value]) => typeof value !== "undefined").map(([key, value]) => {
      const mapper = map[key];
      if (typeof mapper === "function") {
        value = mapper(modifiers[key]);
      }
      key = typeof keyMap === "function" ? keyMap(key) : key;
      return formatter(key, value);
    });
    return operations.join(joinWith);
  };
}
function parseSize(input = "") {
  if (typeof input === "number") {
    return input;
  }
  if (typeof input === "string") {
    if (input.replace("px", "").match(/^\d+$/g)) {
      return Number.parseInt(input, 10);
    }
  }
}
function parseDensities(input = "") {
  if (input === void 0 || !input.length) {
    return [];
  }
  const densities = /* @__PURE__ */ new Set();
  for (const density of input.split(" ")) {
    const d = Number.parseInt(density.replace("x", ""));
    if (d) {
      densities.add(d);
    }
  }
  return Array.from(densities);
}
function checkDensities(densities) {
  if (densities.length === 0) {
    throw new Error("`densities` must not be empty, configure to `1` to render regular size only (DPR 1.0)");
  }
}
function parseSizes(input) {
  const sizes = {};
  if (typeof input === "string") {
    for (const entry of input.split(/[\s,]+/).filter((e) => e)) {
      const s = entry.split(":");
      if (s.length !== 2) {
        sizes["1px"] = s[0].trim();
      } else {
        sizes[s[0].trim()] = s[1].trim();
      }
    }
  } else {
    Object.assign(sizes, input);
  }
  return sizes;
}
function createImage(globalOptions) {
  const ctx = {
    options: globalOptions
  };
  const getImage2 = (input, options = {}) => {
    const image = resolveImage(ctx, input, options);
    return image;
  };
  const $img = (input, modifiers = {}, options = {}) => {
    return getImage2(input, {
      ...options,
      modifiers: defu(modifiers, options.modifiers || {})
    }).url;
  };
  for (const presetName in globalOptions.presets) {
    $img[presetName] = (source, modifiers, options) => $img(source, modifiers, { ...globalOptions.presets[presetName], ...options });
  }
  $img.options = globalOptions;
  $img.getImage = getImage2;
  $img.getMeta = (input, options) => getMeta(ctx, input, options);
  $img.getSizes = (input, options) => getSizes(ctx, input, options);
  ctx.$img = $img;
  return $img;
}
async function getMeta(ctx, input, options) {
  const image = resolveImage(ctx, input, { ...options });
  if (typeof image.getMeta === "function") {
    return await image.getMeta();
  } else {
    return await imageMeta(ctx, image.url);
  }
}
function resolveImage(ctx, input, options) {
  var _a, _b;
  if (input && typeof input !== "string") {
    throw new TypeError(`input must be a string (received ${typeof input}: ${JSON.stringify(input)})`);
  }
  if (!input || input.startsWith("data:")) {
    return {
      url: input
    };
  }
  const { provider, defaults } = getProvider(ctx, options.provider || ctx.options.provider);
  const preset = getPreset(ctx, options.preset);
  input = hasProtocol(input) ? input : withLeadingSlash(input);
  if (!provider.supportsAlias) {
    for (const base in ctx.options.alias) {
      if (input.startsWith(base)) {
        const alias = ctx.options.alias[base];
        if (alias) {
          input = joinURL(alias, input.slice(base.length));
        }
      }
    }
  }
  if (provider.validateDomains && hasProtocol(input)) {
    const inputHost = parseURL(input).host;
    if (!ctx.options.domains.find((d) => d === inputHost)) {
      return {
        url: input
      };
    }
  }
  const _options = defu(options, preset, defaults);
  _options.modifiers = { ..._options.modifiers };
  const expectedFormat = _options.modifiers.format;
  if ((_a = _options.modifiers) == null ? void 0 : _a.width) {
    _options.modifiers.width = parseSize(_options.modifiers.width);
  }
  if ((_b = _options.modifiers) == null ? void 0 : _b.height) {
    _options.modifiers.height = parseSize(_options.modifiers.height);
  }
  const image = provider.getImage(input, _options, ctx);
  image.format = image.format || expectedFormat || "";
  return image;
}
function getProvider(ctx, name) {
  const provider = ctx.options.providers[name];
  if (!provider) {
    throw new Error("Unknown provider: " + name);
  }
  return provider;
}
function getPreset(ctx, name) {
  if (!name) {
    return {};
  }
  if (!ctx.options.presets[name]) {
    throw new Error("Unknown preset: " + name);
  }
  return ctx.options.presets[name];
}
function getSizes(ctx, input, opts) {
  var _a, _b, _c, _d, _e;
  const width = parseSize((_a = opts.modifiers) == null ? void 0 : _a.width);
  const height = parseSize((_b = opts.modifiers) == null ? void 0 : _b.height);
  const sizes = parseSizes(opts.sizes);
  const densities = ((_c = opts.densities) == null ? void 0 : _c.trim()) ? parseDensities(opts.densities.trim()) : ctx.options.densities;
  checkDensities(densities);
  const hwRatio = width && height ? height / width : 0;
  const sizeVariants = [];
  const srcsetVariants = [];
  if (Object.keys(sizes).length >= 1) {
    for (const key in sizes) {
      const variant = getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx);
      if (variant === void 0) {
        continue;
      }
      sizeVariants.push({
        size: variant.size,
        screenMaxWidth: variant.screenMaxWidth,
        media: `(max-width: ${variant.screenMaxWidth}px)`
      });
      for (const density of densities) {
        srcsetVariants.push({
          width: variant._cWidth * density,
          src: getVariantSrc(ctx, input, opts, variant, density)
        });
      }
    }
    finaliseSizeVariants(sizeVariants);
  } else {
    for (const density of densities) {
      const key = Object.keys(sizes)[0];
      let variant = key ? getSizesVariant(key, String(sizes[key]), height, hwRatio, ctx) : void 0;
      if (variant === void 0) {
        variant = {
          size: "",
          screenMaxWidth: 0,
          _cWidth: (_d = opts.modifiers) == null ? void 0 : _d.width,
          _cHeight: (_e = opts.modifiers) == null ? void 0 : _e.height
        };
      }
      srcsetVariants.push({
        width: density,
        src: getVariantSrc(ctx, input, opts, variant, density)
      });
    }
  }
  finaliseSrcsetVariants(srcsetVariants);
  const defaultVariant = srcsetVariants[srcsetVariants.length - 1];
  const sizesVal = sizeVariants.length ? sizeVariants.map((v) => `${v.media ? v.media + " " : ""}${v.size}`).join(", ") : void 0;
  const suffix = sizesVal ? "w" : "x";
  const srcsetVal = srcsetVariants.map((v) => `${v.src} ${v.width}${suffix}`).join(", ");
  return {
    sizes: sizesVal,
    srcset: srcsetVal,
    src: defaultVariant == null ? void 0 : defaultVariant.src
  };
}
function getSizesVariant(key, size, height, hwRatio, ctx) {
  const screenMaxWidth = ctx.options.screens && ctx.options.screens[key] || Number.parseInt(key);
  const isFluid = size.endsWith("vw");
  if (!isFluid && /^\d+$/.test(size)) {
    size = size + "px";
  }
  if (!isFluid && !size.endsWith("px")) {
    return void 0;
  }
  let _cWidth = Number.parseInt(size);
  if (!screenMaxWidth || !_cWidth) {
    return void 0;
  }
  if (isFluid) {
    _cWidth = Math.round(_cWidth / 100 * screenMaxWidth);
  }
  const _cHeight = hwRatio ? Math.round(_cWidth * hwRatio) : height;
  return {
    size,
    screenMaxWidth,
    _cWidth,
    _cHeight
  };
}
function getVariantSrc(ctx, input, opts, variant, density) {
  return ctx.$img(
    input,
    {
      ...opts.modifiers,
      width: variant._cWidth ? variant._cWidth * density : void 0,
      height: variant._cHeight ? variant._cHeight * density : void 0
    },
    opts
  );
}
function finaliseSizeVariants(sizeVariants) {
  var _a;
  sizeVariants.sort((v1, v2) => v1.screenMaxWidth - v2.screenMaxWidth);
  let previousMedia = null;
  for (let i = sizeVariants.length - 1; i >= 0; i--) {
    const sizeVariant = sizeVariants[i];
    if (sizeVariant.media === previousMedia) {
      sizeVariants.splice(i, 1);
    }
    previousMedia = sizeVariant.media;
  }
  for (let i = 0; i < sizeVariants.length; i++) {
    sizeVariants[i].media = ((_a = sizeVariants[i + 1]) == null ? void 0 : _a.media) || "";
  }
}
function finaliseSrcsetVariants(srcsetVariants) {
  srcsetVariants.sort((v1, v2) => v1.width - v2.width);
  let previousWidth = null;
  for (let i = srcsetVariants.length - 1; i >= 0; i--) {
    const sizeVariant = srcsetVariants[i];
    if (sizeVariant.width === previousWidth) {
      srcsetVariants.splice(i, 1);
    }
    previousWidth = sizeVariant.width;
  }
}
const operationsGenerator = createOperationsGenerator({
  keyMap: {
    format: "f",
    fit: "fit",
    width: "w",
    height: "h",
    resize: "s",
    quality: "q",
    background: "b"
  },
  joinWith: "&",
  formatter: (key, val) => encodeParam(key) + "_" + encodeParam(val)
});
const getImage = (src, { modifiers = {}, baseURL } = {}, ctx) => {
  if (modifiers.width && modifiers.height) {
    modifiers.resize = `${modifiers.width}x${modifiers.height}`;
    delete modifiers.width;
    delete modifiers.height;
  }
  const params = operationsGenerator(modifiers) || "_";
  if (!baseURL) {
    baseURL = joinURL(ctx.options.nuxt.baseURL, "/_ipx");
  }
  return {
    url: joinURL(baseURL, params, encodePath(src))
  };
};
const validateDomains = true;
const supportsAlias = true;
const ipxRuntime$AlFQLF57IN = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getImage,
  supportsAlias,
  validateDomains
}, Symbol.toStringTag, { value: "Module" }));
const imageOptions = {
  "screens": {
    "xs": 320,
    "sm": 640,
    "md": 768,
    "lg": 1024,
    "xl": 1280,
    "xxl": 1536,
    "2xl": 1536
  },
  "presets": {},
  "provider": "ipx",
  "domains": [],
  "alias": {},
  "densities": [
    1,
    2
  ],
  "format": [
    "webp"
  ]
};
imageOptions.providers = {
  ["ipx"]: { provider: ipxRuntime$AlFQLF57IN, defaults: {} }
};
const useImage = () => {
  const config = useRuntimeConfig();
  const nuxtApp = useNuxtApp();
  return nuxtApp.$img || nuxtApp._img || (nuxtApp._img = createImage({
    ...imageOptions,
    nuxt: {
      baseURL: config.app.baseURL
    },
    runtimeConfig: config
  }));
};
const baseImageProps = {
  // input source
  src: { type: String, required: false },
  // modifiers
  format: { type: String, required: false },
  quality: { type: [Number, String], required: false },
  background: { type: String, required: false },
  fit: { type: String, required: false },
  modifiers: { type: Object, required: false },
  // options
  preset: { type: String, required: false },
  provider: { type: String, required: false },
  sizes: { type: [Object, String], required: false },
  densities: { type: String, required: false },
  preload: {
    type: [Boolean, Object],
    required: false
  },
  // <img> attributes
  width: { type: [String, Number], required: false },
  height: { type: [String, Number], required: false },
  alt: { type: String, required: false },
  referrerpolicy: { type: String, required: false },
  usemap: { type: String, required: false },
  longdesc: { type: String, required: false },
  ismap: { type: Boolean, required: false },
  loading: {
    type: String,
    required: false,
    validator: (val) => ["lazy", "eager"].includes(val)
  },
  crossorigin: {
    type: [Boolean, String],
    required: false,
    validator: (val) => ["anonymous", "use-credentials", "", true, false].includes(val)
  },
  decoding: {
    type: String,
    required: false,
    validator: (val) => ["async", "auto", "sync"].includes(val)
  },
  // csp
  nonce: { type: [String], required: false }
};
const useBaseImage = (props) => {
  const options = computed(() => {
    return {
      provider: props.provider,
      preset: props.preset
    };
  });
  const attrs = computed(() => {
    return {
      width: parseSize(props.width),
      height: parseSize(props.height),
      alt: props.alt,
      referrerpolicy: props.referrerpolicy,
      usemap: props.usemap,
      longdesc: props.longdesc,
      ismap: props.ismap,
      crossorigin: props.crossorigin === true ? "anonymous" : props.crossorigin || void 0,
      loading: props.loading,
      decoding: props.decoding,
      nonce: props.nonce
    };
  });
  const $img = useImage();
  const modifiers = computed(() => {
    return {
      ...props.modifiers,
      width: parseSize(props.width),
      height: parseSize(props.height),
      format: props.format,
      quality: props.quality || $img.options.quality,
      background: props.background,
      fit: props.fit
    };
  });
  return {
    options,
    attrs,
    modifiers
  };
};
const imgProps = {
  ...baseImageProps,
  placeholder: { type: [Boolean, String, Number, Array], required: false },
  placeholderClass: { type: String, required: false }
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "NuxtImg",
  __ssrInlineRender: true,
  props: imgProps,
  emits: ["load", "error"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const attrs = useAttrs();
    const isServer = true;
    const $img = useImage();
    const _base = useBaseImage(props);
    const placeholderLoaded = ref(false);
    const imgEl = ref();
    const sizes = computed(() => $img.getSizes(props.src, {
      ..._base.options.value,
      sizes: props.sizes,
      densities: props.densities,
      modifiers: {
        ..._base.modifiers.value,
        width: parseSize(props.width),
        height: parseSize(props.height)
      }
    }));
    const imgAttrs = computed(() => {
      const attrs2 = { ..._base.attrs.value, "data-nuxt-img": "" };
      if (!props.placeholder || placeholderLoaded.value) {
        attrs2.sizes = sizes.value.sizes;
        attrs2.srcset = sizes.value.srcset;
      }
      return attrs2;
    });
    const placeholder = computed(() => {
      let placeholder2 = props.placeholder;
      if (placeholder2 === "") {
        placeholder2 = true;
      }
      if (!placeholder2 || placeholderLoaded.value) {
        return false;
      }
      if (typeof placeholder2 === "string") {
        return placeholder2;
      }
      const size = Array.isArray(placeholder2) ? placeholder2 : typeof placeholder2 === "number" ? [placeholder2, placeholder2] : [10, 10];
      return $img(props.src, {
        ..._base.modifiers.value,
        width: size[0],
        height: size[1],
        quality: size[2] || 50,
        blur: size[3] || 3
      }, _base.options.value);
    });
    const mainSrc = computed(
      () => props.sizes ? sizes.value.src : $img(props.src, _base.modifiers.value, _base.options.value)
    );
    const src = computed(() => placeholder.value ? placeholder.value : mainSrc.value);
    if (props.preload) {
      const isResponsive = Object.values(sizes.value).every((v) => v);
      useHead({
        link: [{
          rel: "preload",
          as: "image",
          nonce: props.nonce,
          ...!isResponsive ? { href: src.value } : {
            href: sizes.value.src,
            imagesizes: sizes.value.sizes,
            imagesrcset: sizes.value.srcset
          },
          ...typeof props.preload !== "boolean" && props.preload.fetchPriority ? { fetchpriority: props.preload.fetchPriority } : {}
        }]
      });
    }
    const nuxtApp = useNuxtApp();
    nuxtApp.isHydrating;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        ref_key: "imgEl",
        ref: imgEl,
        class: props.placeholder && !placeholderLoaded.value ? props.placeholderClass : void 0
      }, {
        ...unref(isServer) ? { onerror: "this.setAttribute('data-error', 1)" } : {},
        ...imgAttrs.value,
        ...unref(attrs)
      }, { src: src.value }, _attrs))}>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/image/dist/runtime/components/NuxtImg.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "button",
  __ssrInlineRender: true,
  props: {
    type: {},
    size: {},
    rounded: {},
    iconPosition: {},
    placeholder: {},
    to: {},
    icon: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$3;
      const _component_Icon = __nuxt_component_0$4;
      if (props.to) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          to: props.to,
          class: ["button", `button--${props.type}`, `button-size-${props.size}`, `button-rounded-${props.rounded}`],
          "active-class": `button--${props.type}--active`
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (props.icon && props.iconPosition === "left") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: props.icon,
                  class: `button__icon button__icon--${props.type}`
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (props.placeholder) {
                _push2(`<p class="button__text" data-v-90d816b3${_scopeId}>${ssrInterpolate(props.placeholder)}</p>`);
              } else {
                _push2(`<!---->`);
              }
              if (props.icon && props.iconPosition === "right") {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: props.icon,
                  class: `button__icon button__icon--${props.type}`
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (props.icon && !props.iconPosition) {
                _push2(ssrRenderComponent(_component_Icon, {
                  name: props.icon,
                  class: `button__icon button__icon--${props.type}`
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                props.icon && props.iconPosition === "left" ? (openBlock(), createBlock(_component_Icon, {
                  key: 0,
                  name: props.icon,
                  class: `button__icon button__icon--${props.type}`
                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                props.placeholder ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "button__text"
                }, toDisplayString(props.placeholder), 1)) : createCommentVNode("", true),
                props.icon && props.iconPosition === "right" ? (openBlock(), createBlock(_component_Icon, {
                  key: 2,
                  name: props.icon,
                  class: `button__icon button__icon--${props.type}`
                }, null, 8, ["name", "class"])) : createCommentVNode("", true),
                props.icon && !props.iconPosition ? (openBlock(), createBlock(_component_Icon, {
                  key: 3,
                  name: props.icon,
                  class: `button__icon button__icon--${props.type}`
                }, null, 8, ["name", "class"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["button", `button--${props.type}`, `button-size-${props.size}`, `button-rounded-${props.rounded}`]
        }, _attrs))} data-v-90d816b3>`);
        if (props.icon && props.iconPosition === "left") {
          _push(ssrRenderComponent(_component_Icon, {
            name: props.icon,
            class: `button__icon button__icon--${props.type}`
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (props.placeholder) {
          _push(`<p class="button__text" data-v-90d816b3>${ssrInterpolate(props.placeholder)}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (props.icon && props.iconPosition === "right") {
          _push(ssrRenderComponent(_component_Icon, {
            name: props.icon,
            class: `button__icon button__icon--${props.type}`
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (props.icon && !props.iconPosition) {
          _push(ssrRenderComponent(_component_Icon, {
            name: props.icon,
            class: `button__icon button__icon--${props.type}`
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vlada/button.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __nuxt_component_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-90d816b3"]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "dropdown",
  __ssrInlineRender: true,
  props: {
    items: {},
    showDropdown: { type: Boolean }
  },
  emits: ["item-select"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "dropdown" }, _attrs))} data-v-9f80f147>`);
      if (_ctx.showDropdown) {
        _push(`<div class="dropdown__menu" data-v-9f80f147><ul data-v-9f80f147><!--[-->`);
        ssrRenderList(_ctx.items, (item) => {
          _push(`<li data-v-9f80f147>${ssrInterpolate(item.label)} `);
          if (item.labelCode) {
            _push(`<p class="dropdown__menu-code" data-v-9f80f147>/ ${ssrInterpolate(item.labelCode)}</p>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vlada/dropdown.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-9f80f147"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "header",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale, setLocale, t } = useI18n();
    const locales = [
      { value: "en", label: t("languages.english"), labelCode: t("language-codes.english") },
      { value: "es", label: t("languages.spanish"), labelCode: t("language-codes.spanish") },
      { value: "fr", label: t("languages.french"), labelCode: t("language-codes.french") },
      { value: "hy", label: t("languages.armenian"), labelCode: t("language-codes.armenian") },
      { value: "ja", label: t("languages.japanese"), labelCode: t("language-codes.japanese") },
      { value: "ru", label: t("languages.russian"), labelCode: t("language-codes.russian") },
      { value: "uk", label: t("languages.ukrainian"), labelCode: t("language-codes.ukrainian") },
      { value: "zh", label: t("languages.chinese"), labelCode: t("language-codes.chinese") }
    ];
    const headerClass = ref("header-default");
    const showLocales = ref(false);
    throttle(() => {
      if ((void 0).scrollY > 30) {
        headerClass.value = "header-scrolled";
      } else {
        headerClass.value = "header-default";
      }
    }, 200);
    const toggleLocales = () => {
      showLocales.value = !showLocales.value;
    };
    const handleLocaleSelect = (item) => {
      setLocale(item.value);
      showLocales.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$8;
      const _component_vlada_button = __nuxt_component_0$2;
      const _component_vlada_dropdown = __nuxt_component_2;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["header", headerClass.value],
        id: "header"
      }, _attrs))} data-v-67c4979c><div class="vlada-container" data-v-67c4979c><div class="header__inner" data-v-67c4979c><div class="header__logo" data-v-67c4979c>`);
      _push(ssrRenderComponent(_component_NuxtImg, { src: "/img/logo-red.svg" }, null, _parent));
      _push(`</div><div class="header__search-profile" data-v-67c4979c><div class="header__translate-button" data-v-67c4979c>`);
      _push(ssrRenderComponent(_component_vlada_button, {
        type: "primary",
        size: "cube",
        rounded: "md",
        icon: "bi:translate",
        onClick: toggleLocales
      }, null, _parent));
      _push(ssrRenderComponent(_component_vlada_dropdown, {
        items: locales,
        showDropdown: showLocales.value,
        animation: "fade-in",
        onItemSelect: handleLocaleSelect
      }, null, _parent));
      _push(`</div></div></div></div></header>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/welcome/header.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-67c4979c"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ImageScroller",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref([
      {
        direction: "left",
        images: ["image.png", "image-1.png", "image-2.png", "image-3.png", "image-4.png", "image-5.png", "image-6.png", "image-7.png", "image-8.png", "image-9.png", "image-10.png", "image.png", "image-1.png", "image-2.png", "image-3.png", "image-4.png", "image-5.png", "image-6.png", "image-7.png", "image-8.png", "image-9.png", "image-10.png"]
      },
      {
        direction: "right",
        images: ["image-12.png", "image-13.png", "image-14.png", "image-15.png", "image-16.png", "image-17.png", "image-18.png", "image-19.png", "image-20.png", "image-21.png", "image-22.png", "image-12.png", "image-13.png", "image-14.png", "image-15.png", "image-16.png", "image-17.png", "image-18.png", "image-19.png", "image-20.png", "image-21.png", "image-22.png"]
      },
      {
        direction: "left",
        images: ["image-23.png", "image-24.png", "image-25.png", "image-26.png", "image-27.png", "image-28.png", "image-29.png", "image-30.png", "image-31.png", "image-32.png", "image-33.png", "image-23.png", "image-24.png", "image-25.png", "image-26.png", "image-27.png", "image-28.png", "image-29.png", "image-30.png", "image-31.png", "image-32.png", "image-33.png"]
      }
    ]);
    const imagePaths = computed(
      () => data.value.map((scroller) => ({
        ...scroller,
        images: scroller.images.map((image) => `/img/welcome-posters/${image}`)
      }))
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = _sfc_main$8;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "header__scroller" }, _attrs))} data-v-8156d0d0><div class="header__scroller-shadow" data-v-8156d0d0></div><div class="header__scroller-title" data-v-8156d0d0><h1 data-v-8156d0d0>${ssrInterpolate(_ctx.$t("welcome.title"))}</h1></div><!--[-->`);
      ssrRenderList(imagePaths.value, (scroller, index2) => {
        _push(`<div class="${ssrRenderClass(["scroller", `scroller--${scroller.direction}`, "scroller--slow", "scroller--animated"])}" data-v-8156d0d0><div class="scroller__inner" data-v-8156d0d0><div class="scroller__container" data-aos="fade-in" data-v-8156d0d0><!--[-->`);
        ssrRenderList(scroller.images, (image, id) => {
          _push(ssrRenderComponent(_component_NuxtImg, {
            key: id,
            src: image,
            class: "scroller__image",
            alt: "header image scroller images " + id
          }, null, _parent));
        });
        _push(`<!--]--></div></div></div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/welcome/components/ImageScroller.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-8156d0d0"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_welcome_components_image_scroller = __nuxt_component_0;
  const _component_vlada_button = __nuxt_component_0$2;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_welcome_components_image_scroller, null, null, _parent));
  _push(`<section class="header__scroller-description" data-v-b35b3292><p class="header__scroller-description-paragraph" data-v-b35b3292>${ssrInterpolate(_ctx.$t("welcome.description"))}</p><div class="header__scroller-button" data-v-b35b3292>`);
  _push(ssrRenderComponent(_component_vlada_button, {
    type: "primary",
    size: "md",
    icon: "bi:play-fill",
    "icon-position": "left",
    rounded: "md",
    placeholder: _ctx.$t("welcome.start-watching-now")
  }, null, _parent));
  _push(`</div></section><!--]-->`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/welcome/primaryHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-b35b3292"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "br",
  __ssrInlineRender: true,
  props: {
    mode: {},
    height: {}
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "vlada-br-" + props.mode + " vlada-br-" + props.height
      }, _attrs))} data-v-60967246></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/vlada/br.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-60967246"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtImg = _sfc_main$8;
  _push(`<footer${ssrRenderAttrs(mergeProps({
    class: "footer",
    id: "footer"
  }, _attrs))} data-v-81adf12c><div class="vlada-container" data-v-81adf12c><div class="footer__content-top" data-v-81adf12c><div class="footer__content-top-description" data-v-81adf12c>`);
  _push(ssrRenderComponent(_component_NuxtImg, {
    src: "/img/logo-red.svg",
    alt: "ota-ku-logo"
  }, null, _parent));
  _push(`<p data-v-81adf12c>Trusted in more than 100 countries &amp; 5 million customers. Have any query ?</p></div><div class="footer__content-top-end-col" data-v-81adf12c><h5 data-v-81adf12c>Paged one</h5><ul data-v-81adf12c><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>Home</a></li><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>About</a></li><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>Pricing</a></li><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>Features</a></li></ul></div><div class="footer__content-top-end-col" data-v-81adf12c><h5 data-v-81adf12c>Paged one</h5><ul data-v-81adf12c><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>Home</a></li><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>About</a></li><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>Pricing</a></li><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>Features</a></li></ul></div><div class="footer__content-top-end-col" data-v-81adf12c><h5 data-v-81adf12c>Paged one</h5><ul data-v-81adf12c><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>Home</a></li><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>About</a></li><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>Pricing</a></li><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>Features</a></li></ul></div><div class="footer__content-top-end-col" data-v-81adf12c><h5 data-v-81adf12c>Paged one</h5><ul data-v-81adf12c><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>Home</a></li><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>About</a></li><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>Pricing</a></li><li data-v-81adf12c><a href="javascript:;" data-v-81adf12c>Features</a></li></ul></div></div><div class="footer__content-bottom" data-v-81adf12c><div class="footer__content-bottom-container" data-v-81adf12c><span class="footer__content-bottom-copyright" data-v-81adf12c>\xA9 <a href="https://pagedone.io/" data-v-81adf12c>ota-ku</a> 2022 - 2024, All rights reserved.</span><div class="footer__content-bottom-social" data-v-81adf12c></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/welcome/footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-81adf12c"]]);
const __nuxt_component_2_lazy = defineAsyncComponent(() => import('./advantages-D7N5h0o2.mjs').then((c) => c.default || c));
const __nuxt_component_4_lazy = defineAsyncComponent(() => import('./faq-pChQBrMh.mjs').then((c) => c.default || c));
const __nuxt_component_5_lazy = defineAsyncComponent(() => import('./subscription-BPWl6OZw.mjs').then((c) => c.default || c));
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_welcome_header = __nuxt_component_0$1;
  const _component_welcome_primary_header = __nuxt_component_1;
  const _component_lazy_welcome_advantages = __nuxt_component_2_lazy;
  const _component_vlada_br = __nuxt_component_3;
  const _component_lazy_welcome_faq = __nuxt_component_4_lazy;
  const _component_lazy_welcome_subscription = __nuxt_component_5_lazy;
  const _component_welcome_footer = __nuxt_component_6;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_welcome_header, null, null, _parent));
  _push(ssrRenderComponent(_component_welcome_primary_header, null, null, _parent));
  _push(ssrRenderComponent(_component_lazy_welcome_advantages, null, null, _parent));
  _push(ssrRenderComponent(_component_vlada_br, { height: "20" }, null, _parent));
  _push(ssrRenderComponent(_component_lazy_welcome_faq, null, null, _parent));
  _push(ssrRenderComponent(_component_vlada_br, { height: "20" }, null, _parent));
  _push(ssrRenderComponent(_component_lazy_welcome_subscription, null, null, _parent));
  _push(ssrRenderComponent(_component_vlada_br, { height: "20" }, null, _parent));
  _push(ssrRenderComponent(_component_welcome_footer, null, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/welcome/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const index$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));

export { __nuxt_component_0$2 as _, index$1 as i };
//# sourceMappingURL=index-CJ2GqwTN.mjs.map
