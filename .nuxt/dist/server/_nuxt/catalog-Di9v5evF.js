import { f as forwardRefs, m as makeVOverlayProps, V as VDialogTransition, u as useScopeId, a as VMenuSymbol, b as VOverlay, n as nullifyTransforms, c as animate, s as standardEasing, _ as __nuxt_component_0 } from "./VOverlay-tSqOqrjm.js";
import { c as cleanDescription, o as openAnimeNotLoading, u as useSsrBoot, V as VExpandTransition, a as VSlideYTransition, b as VExpandXTransition, d as VRow, e as VSkeletonLoader, f as VMain } from "./VMain-5HMtes9m.js";
import { computed, shallowRef, ref, watch, provide, markRaw, toRef, inject, createVNode, toRaw, withDirectives, vShow, Fragment, resolveDirective, mergeProps, onScopeDispose, nextTick, unref, cloneVNode, watchEffect, createTextVNode, withCtx, withModifiers, toDisplayString, openBlock, createBlock, createCommentVNode, renderList, useSSRContext, defineComponent as defineComponent$1 } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { p as propsFactory, u as useProxiedModel, c as consoleWarn, m as makeComponentProps, g as genericComponent, a as useRender, w as wrapInArray, b as getCurrentInstance, d as getUid, e as defineComponent, I as IconValue, f as makeTagProps, V as VDefaultsProvider, M as MaybeTransition, h as createSimpleFunctional, E as EventProp, i as makeBorderProps, j as makeDensityProps, k as makeDimensionProps, l as makeElevationProps, n as makeRoundedProps, o as makeRouterProps, q as makeThemeProps, r as makeVariantProps, R as Ripple, s as useLink, t as provideTheme, v as useBorder, x as useVariant, y as useDensity, z as useDimension, A as useElevation, B as useRounded, C as deprecate, D as genOverlays, F as VAvatar, G as VIcon, H as useTextColor, J as convertToUnit, K as deepEqual, L as getPropertyFromItem, N as omit, O as useBackgroundColor, P as provideDefaults, Q as focusChild, S as filterInputAttrs, T as matchesSelector, U as useLocale, W as makeTransitionProps, X as getCurrentInstanceName, Y as useToggleScope, Z as only, _ as useRtl, $ as makeGroupProps, a0 as useGroup, a1 as makeGroupItemProps, a2 as makeSizeProps, a3 as useSize, a4 as useGroupItem, a5 as isClickInsideElement, a6 as focusableChildren, a7 as getNextElement, a8 as makeLoaderProps, a9 as useLoader, aa as LoaderSlot, ab as isOn, ac as pick, ad as Intersect, ae as callEvent, af as useResizeObserver, ag as useDisplay, ah as clamp, ai as debounce, aj as ensureValidVNode, ak as _export_sfc, al as VCard, am as VCardTitle, an as VCardSubtitle, ao as VBtn, ap as VImg, aq as VCardText, ar as VLayout, as as VContainer } from "../server.mjs";
import { m as makeVSlideGroupProps, V as VSlideGroup } from "./VSlideGroup-BlnKM8yY.js";
import { u as useHead } from "./index-DB2VMhIb.js";
import "#internal/nuxt/paths";
import "ofetch";
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
const _sfc_main$1 = {
  name: "AnimeCatalog",
  data: () => ({
    animeList: [],
    currPage: 1,
    limit: 10,
    loading: false,
    animeFound: true,
    animeFoundInitialized: false,
    cleanDescription,
    openAnimeNotLoading,
    searchQuery: "",
    finished: false,
    selectedAnime: {},
    sidebarVisible: false,
    animeCatalogListSkeleton: true,
    statusItems: [
      {
        id: "anons",
        name: "Анонсировано",
        subtitle: "Ожидается скорый выход"
      },
      {
        id: "ongoing",
        name: "Сейчас выходит",
        subtitle: "Новые эпизоды регулярно появляются"
      },
      {
        id: "released",
        name: "Вышедшее",
        subtitle: "Доступны для просмотра все эпизоды"
      }
    ],
    kindItems: [
      {
        id: "tv",
        name: "ТВ Сериал",
        subtitle: "Несколько эпизодов сериала"
      },
      {
        id: "ova",
        name: "OVA",
        subtitle: "Отдельные выпуски анимации"
      },
      {
        id: "movie",
        name: "Фильм",
        subtitle: "Полнометражный"
      },
      {
        id: "ona",
        name: "ONA",
        subtitle: "Анимация для интернета"
      }
    ],
    genreItems: [
      { id: "5", name: "Авангард", subtitle: "Экспериментальный жанр" },
      { id: "543", name: "Гурман", subtitle: "Кулинарные приключения" },
      { id: "8", name: "Драма", subtitle: "Эмоциональные сюжеты" },
      { id: "4", name: "Комедия", subtitle: "Юмор и веселье" },
      { id: "36", name: "Повседневность", subtitle: "Жизненные истории" },
      { id: "2", name: "Приключения", subtitle: "Увлекательные путешествия" },
      { id: "22", name: "Романтика", subtitle: "Любовные истории" },
      { id: "37", name: "Сверхъестественное", subtitle: "Силы за гранью" },
      { id: "30", name: "Спорт", subtitle: "Спортивные соревнования" },
      { id: "7", name: "Тайна", subtitle: "Загадочные сюжеты" },
      { id: "117", name: "Триллер", subtitle: "Напряженные моменты" },
      { id: "14", name: "Ужасы", subtitle: "Страшные истории" },
      { id: "24", name: "Фантастика", subtitle: "Научные миры" },
      { id: "10", name: "Фэнтези", subtitle: "Магические миры" },
      { id: "1", name: "Экшен", subtitle: "Боевое искусство" },
      { id: "9", name: "Этти", subtitle: "Романтические комедии" },
      { id: "143", name: "Антропоморфизм", subtitle: "Человекообразные" },
      { id: "119", name: "CGDCT", subtitle: "Милые девочки" },
      { id: "17", name: "Боевые искусства", subtitle: "Боевые техники" },
      { id: "32", name: "Вампиры", subtitle: "Истории о вампирах" },
      { id: "104", name: "Взрослые персонажи", subtitle: "Взрослая жизнь" },
      { id: "103", name: "Видеоигры", subtitle: "Мир игр" },
      { id: "38", name: "Военное", subtitle: "Военная тематика" },
      { id: "141", name: "Выживание", subtitle: "Борьба за жизнь" },
      { id: "35", name: "Гарем", subtitle: "Много любовных интересов" },
      { id: "3", name: "Гонки", subtitle: "Автоспорт" },
      { id: "112", name: "Гэг-юмор", subtitle: "Комические ситуации" },
      { id: "39", name: "Детектив", subtitle: "Расследования" },
      { id: "105", name: "Жесткость", subtitle: "Жестокие сцены" },
      { id: "134", name: "Забота о детях", subtitle: "Детская забота" },
      { id: "146", name: "Игра с высокими ставками", subtitle: "Риск и азарт" },
      { id: "145", name: "Идолы (жен.)", subtitle: "Женские идолы" },
      { id: "150", name: "Идолы (муж.)", subtitle: "Мужские идолы" },
      { id: "108", name: "Изобразительное искусство", subtitle: "Визуальное искусство" },
      { id: "142", name: "Исполнительское искусство", subtitle: "Сценические выступления" },
      { id: "13", name: "Исторический", subtitle: "Исторические события" },
      { id: "130", name: "Исэкай", subtitle: "Другие миры" },
      { id: "140", name: "Иясикэй", subtitle: "Успокаивающие сюжеты" },
      { id: "102", name: "Командный спорт", subtitle: "Командные соревнования" },
      { id: "29", name: "Космос", subtitle: "Космические приключения" },
      { id: "144", name: "Кроссдрессинг", subtitle: "Смена одежды" },
      { id: "137", name: "Культура отаку", subtitle: "Отаку культура" },
      { id: "107", name: "Любовный многоугольник", subtitle: "Сложные отношения" },
      { id: "135", name: "Магическая смена пола", subtitle: "Смена пола" },
      { id: "124", name: "Махо-сёдзё", subtitle: "Волшебные девочки" },
      { id: "147", name: "Медицина", subtitle: "Медицинские истории" },
      { id: "18", name: "Меха", subtitle: "Роботы и машины" },
      { id: "6", name: "Мифология", subtitle: "Мифические истории" },
      { id: "19", name: "Музыка", subtitle: "Музыкальные сюжеты" },
      { id: "149", name: "Образовательное", subtitle: "Обучающие сюжеты" },
      { id: "138", name: "Организованная преступность", subtitle: "Преступные синдикаты" },
      { id: "20", name: "Пародия", subtitle: "Юмористические пародии" },
      { id: "148", name: "Питомцы", subtitle: "Домашние животные" },
      { id: "40", name: "Психологическое", subtitle: "Психологические драмы" },
      { id: "111", name: "Путешествие во времени", subtitle: "Путешествия через время" },
      { id: "139", name: "Работа", subtitle: "Профессиональная жизнь" },
      { id: "125", name: "Реверс-гарем", subtitle: "Много мужчин" },
      { id: "106", name: "Реинкарнация", subtitle: "Перерождение" },
      { id: "151", name: "Романтический подтекст", subtitle: "Скрытая романтика" },
      { id: "21", name: "Самураи", subtitle: "Истории о самураях" },
      { id: "118", name: "Спортивные единоборства", subtitle: "Боевые виды спорта" },
      { id: "11", name: "Стратегические игры", subtitle: "Игры и стратегии" },
      { id: "31", name: "Супер сила", subtitle: "Сверхспособности" },
      { id: "114", name: "Удостоено наград", subtitle: "Награжденные произведения" },
      { id: "131", name: "Хулиганы", subtitle: "Истории о хулиганах" },
      { id: "23", name: "Школа", subtitle: "Школьные истории" },
      { id: "136", name: "Шоу бизнес", subtitle: "Мир шоу бизнеса" }
    ],
    sortItems: [
      { id: "ranked", name: "По рейтингу", subtitle: "Сортировка по рейтингу" },
      { id: "popularity", name: "По популярности", subtitle: "Сортировка по популярности" },
      { id: "name", name: "По алфавиту", subtitle: "Сортировка по алфавиту" },
      { id: "aired_on", name: "По дате выхода", subtitle: "Сортировка по дате выхода" },
      { id: "status", name: "Случайно", subtitle: "Случайная сортировка" },
      { id: "episodes", name: "По количеству серий", subtitle: "Сортировка по количеству серий" },
      { id: "id", name: "По ID", subtitle: "Сортировка по идентификатору" }
    ],
    yearItems: [
      { id: "2024", name: "2024 год", subtitle: "Аниме 2024 года" },
      { id: "2023", name: "2023 год", subtitle: "Аниме 2023 года" },
      { id: "2000_2024", name: "2000-2024", subtitle: "Аниме с 2000 по 2024" },
      { id: "2020_2024", name: "2020-2024", subtitle: "Аниме с 2020 по 2024" },
      { id: "2021_2022", name: "2021-2022", subtitle: "Аниме с 2021 по 2022" },
      { id: "2016_2020", name: "2016-2020", subtitle: "Аниме с 2016 по 2020" },
      { id: "2010_2015", name: "2010-2015", subtitle: "Аниме с 2010 по 2015" },
      { id: "2000_2009", name: "2000-2009", subtitle: "Аниме с 2000 по 2009" },
      { id: "1980_1999", name: "1999-е годы", subtitle: "Аниме 1980-1999 годов" },
      { id: "1970_1980", name: "1980-е годы", subtitle: "Аниме 1970-1980 годов" },
      { id: "1968_1999", name: "Динозавры 1968", subtitle: "Аниме 1968-1999 годов" }
    ],
    ratingItems: [
      { id: "none", name: "Без оценки", subtitle: "Нет возрастных ограничений" },
      { id: "g", name: "Все оценки", subtitle: "Для всех возрастов" },
      { id: "pg", name: "PG", subtitle: "Для детей" },
      { id: "pg_13", name: "PG-13", subtitle: "Для детей 13 лет" },
      { id: "r", name: "R", subtitle: "Для подростков 17+" },
      { id: "r_plus", name: "R+", subtitle: "Умеренная нагота" }
    ]
  }),
  mounted() {
    this.fetchAnimeData();
    (void 0).addEventListener("scroll", this.loadNextPage);
    this.$watch(
      () => this.$route.query,
      () => {
        this.handleUrlChange();
      }
    );
    let sidebar = (void 0).getElementsByClassName("sidebar")[0];
    let sidebar_content = (void 0).getElementsByClassName("content-wrapper")[0];
    (void 0).onscroll = () => {
      let scrollTop = (void 0).scrollY;
      let viewportHeight = (void 0).innerHeight;
      let contentHeight = sidebar_content.getBoundingClientRect().height;
      let sidebarTop = sidebar.getBoundingClientRect().top + (void 0).pageYOffset;
      if (scrollTop >= contentHeight - viewportHeight + sidebarTop && (void 0).innerWidth > 1024) {
        sidebar_content.style.transform = `translateY(-${contentHeight - viewportHeight + sidebarTop}px)`;
        sidebar_content.style.position = "fixed";
      } else {
        sidebar_content.style.transform = "";
        sidebar_content.style.position = "";
      }
    };
    (void 0).onresize = () => {
      if ((void 0).innerWidth <= 1024) {
        sidebar_content.style.position = "relative";
        sidebar_content.style.transform = "";
      }
    };
    if ((void 0).innerWidth >= 1024) {
      this.sidebarVisible = true;
    }
  },
  beforeUnmount() {
    (void 0).removeEventListener("scroll", this.loadNextPage);
  },
  methods: {
    openDialog(anime) {
      this.selectedAnime = anime;
      this.$refs.animeDialogRef.openDialog();
    },
    itemProps(item) {
      return {
        id: item.id,
        title: item.name,
        subtitle: item.subtitle
      };
    },
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    handleUrlChange() {
      this.animeList = [];
      this.currPage = 1;
      this.animeFound = true;
      this.animeFoundInitialized = false;
      this.fetchAnimeData();
      (void 0).scrollTo({ top: 0 });
    },
    submitForm() {
      this.$router.push(`/catalog?search=${encodeURIComponent(this.searchQuery)}`);
    },
    getUrlParams() {
      const searchParams = new URLSearchParams((void 0).location.search);
      const params = {};
      for (const [key, value] of searchParams) {
        const paramName = key.replace(/\[\]$/, "");
        if (paramName in params) {
          params[paramName] += `,${value}`;
        } else {
          params[paramName] = value;
        }
      }
      return params;
    },
    loadNextPage() {
      if (this.isNearBottom()) {
        this.fetchAnimeData();
      }
    },
    isNearBottom() {
      const mainContent = this.$refs.animeCatalog;
      if (mainContent) {
        const mainContentBottom = mainContent.offsetTop + mainContent.offsetHeight;
        return (void 0).innerHeight + (void 0).scrollY >= mainContentBottom - 200;
      }
      return false;
    },
    async fetchAnimeData() {
      if (!this.loading) {
        try {
          this.loading = true;
          const currentParams = this.getUrlParams();
          const response = await fetch("https://shikimori.one/api/graphql", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              query: `
                        query {
                            animes(
                                search: "${currentParams.search || ""}",
                                season: "${currentParams.season || ""}",
                                status: "${currentParams.status || "released,ongoing"}",
                                kind: "${currentParams.kind || "tv,ona,ova"}",
                                order: ${currentParams.sort || "popularity"},
                                rating: "${currentParams.rating || ""}",
                                genre: "${currentParams.genre || ""}",
                                limit: ${this.limit},
                                page: ${this.currPage},
                                censored: false,
                            ) {
                                id
                                russian
                                kind
                                score
                                episodes
                                description
                                airedOn {
                                    year
                                }
                                poster {
                                    mainUrl
                                }
                            }
                        }
                    `
            })
          });
          const data = await response.json();
          const animeList = data.data.animes;
          this.animeCatalogListSkeleton = false;
          this.animeList = [...this.animeList, ...animeList];
          this.currPage++;
          if (animeList.length === 0 && this.animeFoundInitialized === false) {
            this.animeFound = false;
            this.animeFoundInitialized = true;
          } else {
            this.animeFound = true;
            this.animeFoundInitialized = true;
          }
        } catch (e) {
          this.error();
        } finally {
          this.loading = false;
        }
      }
    }
  }
};
const FormKey = Symbol.for("vuetify:form");
const makeFormProps = propsFactory({
  disabled: Boolean,
  fastFail: Boolean,
  readonly: Boolean,
  modelValue: {
    type: Boolean,
    default: null
  },
  validateOn: {
    type: String,
    default: "input"
  }
}, "form");
function createForm(props) {
  const model = useProxiedModel(props, "modelValue");
  const isDisabled = computed(() => props.disabled);
  const isReadonly = computed(() => props.readonly);
  const isValidating = shallowRef(false);
  const items = ref([]);
  const errors = ref([]);
  async function validate() {
    const results = [];
    let valid = true;
    errors.value = [];
    isValidating.value = true;
    for (const item of items.value) {
      const itemErrorMessages = await item.validate();
      if (itemErrorMessages.length > 0) {
        valid = false;
        results.push({
          id: item.id,
          errorMessages: itemErrorMessages
        });
      }
      if (!valid && props.fastFail) break;
    }
    errors.value = results;
    isValidating.value = false;
    return {
      valid,
      errors: errors.value
    };
  }
  function reset() {
    items.value.forEach((item) => item.reset());
  }
  function resetValidation() {
    items.value.forEach((item) => item.resetValidation());
  }
  watch(items, () => {
    let valid = 0;
    let invalid = 0;
    const results = [];
    for (const item of items.value) {
      if (item.isValid === false) {
        invalid++;
        results.push({
          id: item.id,
          errorMessages: item.errorMessages
        });
      } else if (item.isValid === true) valid++;
    }
    errors.value = results;
    model.value = invalid > 0 ? false : valid === items.value.length ? true : null;
  }, {
    deep: true,
    flush: "post"
  });
  provide(FormKey, {
    register: (_ref) => {
      let {
        id,
        vm,
        validate: validate2,
        reset: reset2,
        resetValidation: resetValidation2
      } = _ref;
      if (items.value.some((item) => item.id === id)) {
        consoleWarn(`Duplicate input name "${id}"`);
      }
      items.value.push({
        id,
        validate: validate2,
        reset: reset2,
        resetValidation: resetValidation2,
        vm: markRaw(vm),
        isValid: null,
        errorMessages: []
      });
    },
    unregister: (id) => {
      items.value = items.value.filter((item) => {
        return item.id !== id;
      });
    },
    update: (id, isValid, errorMessages) => {
      const found = items.value.find((item) => item.id === id);
      if (!found) return;
      found.isValid = isValid;
      found.errorMessages = errorMessages;
    },
    isDisabled,
    isReadonly,
    isValidating,
    isValid: model,
    items,
    validateOn: toRef(props, "validateOn")
  });
  return {
    errors,
    isDisabled,
    isReadonly,
    isValidating,
    isValid: model,
    items,
    validate,
    reset,
    resetValidation
  };
}
function useForm() {
  return inject(FormKey, null);
}
const makeVFormProps = propsFactory({
  ...makeComponentProps(),
  ...makeFormProps()
}, "VForm");
const VForm = genericComponent()({
  name: "VForm",
  props: makeVFormProps(),
  emits: {
    "update:modelValue": (val) => true,
    submit: (e) => true
  },
  setup(props, _ref) {
    let {
      slots,
      emit
    } = _ref;
    const form = createForm(props);
    const formRef = ref();
    function onReset(e) {
      e.preventDefault();
      form.reset();
    }
    function onSubmit(_e) {
      const e = _e;
      const ready = form.validate();
      e.then = ready.then.bind(ready);
      e.catch = ready.catch.bind(ready);
      e.finally = ready.finally.bind(ready);
      emit("submit", e);
      if (!e.defaultPrevented) {
        ready.then((_ref2) => {
          var _a;
          let {
            valid
          } = _ref2;
          if (valid) {
            (_a = formRef.value) == null ? void 0 : _a.submit();
          }
        });
      }
      e.preventDefault();
    }
    useRender(() => {
      var _a;
      return createVNode("form", {
        "ref": formRef,
        "class": ["v-form", props.class],
        "style": props.style,
        "novalidate": true,
        "onReset": onReset,
        "onSubmit": onSubmit
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, form)]);
    });
    return forwardRefs(form, formRef);
  }
});
const ListKey = Symbol.for("vuetify:list");
function createList() {
  const parent = inject(ListKey, {
    hasPrepend: shallowRef(false),
    updateHasPrepend: () => null
  });
  const data = {
    hasPrepend: shallowRef(false),
    updateHasPrepend: (value) => {
      if (value) data.hasPrepend.value = value;
    }
  };
  provide(ListKey, data);
  return parent;
}
function useList() {
  return inject(ListKey, null);
}
const independentActiveStrategy = (mandatory) => {
  const strategy = {
    activate: (_ref) => {
      let {
        id,
        value,
        activated
      } = _ref;
      id = toRaw(id);
      if (mandatory && !value && activated.size === 1 && activated.has(id)) return activated;
      if (value) {
        activated.add(id);
      } else {
        activated.delete(id);
      }
      return activated;
    },
    in: (v, children, parents) => {
      let set = /* @__PURE__ */ new Set();
      if (v != null) {
        for (const id of wrapInArray(v)) {
          set = strategy.activate({
            id,
            value: true,
            activated: new Set(set),
            children,
            parents
          });
        }
      }
      return set;
    },
    out: (v) => {
      return Array.from(v);
    }
  };
  return strategy;
};
const independentSingleActiveStrategy = (mandatory) => {
  const parentStrategy = independentActiveStrategy(mandatory);
  const strategy = {
    activate: (_ref2) => {
      let {
        activated,
        id,
        ...rest
      } = _ref2;
      id = toRaw(id);
      const singleSelected = activated.has(id) ? /* @__PURE__ */ new Set([id]) : /* @__PURE__ */ new Set();
      return parentStrategy.activate({
        ...rest,
        id,
        activated: singleSelected
      });
    },
    in: (v, children, parents) => {
      let set = /* @__PURE__ */ new Set();
      if (v != null) {
        const arr = wrapInArray(v);
        if (arr.length) {
          set = parentStrategy.in(arr.slice(0, 1), children, parents);
        }
      }
      return set;
    },
    out: (v, children, parents) => {
      return parentStrategy.out(v, children, parents);
    }
  };
  return strategy;
};
const leafActiveStrategy = (mandatory) => {
  const parentStrategy = independentActiveStrategy(mandatory);
  const strategy = {
    activate: (_ref3) => {
      let {
        id,
        activated,
        children,
        ...rest
      } = _ref3;
      id = toRaw(id);
      if (children.has(id)) return activated;
      return parentStrategy.activate({
        id,
        activated,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
const leafSingleActiveStrategy = (mandatory) => {
  const parentStrategy = independentSingleActiveStrategy(mandatory);
  const strategy = {
    activate: (_ref4) => {
      let {
        id,
        activated,
        children,
        ...rest
      } = _ref4;
      id = toRaw(id);
      if (children.has(id)) return activated;
      return parentStrategy.activate({
        id,
        activated,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
const singleOpenStrategy = {
  open: (_ref) => {
    let {
      id,
      value,
      opened,
      parents
    } = _ref;
    if (value) {
      const newOpened = /* @__PURE__ */ new Set();
      newOpened.add(id);
      let parent = parents.get(id);
      while (parent != null) {
        newOpened.add(parent);
        parent = parents.get(parent);
      }
      return newOpened;
    } else {
      opened.delete(id);
      return opened;
    }
  },
  select: () => null
};
const multipleOpenStrategy = {
  open: (_ref2) => {
    let {
      id,
      value,
      opened,
      parents
    } = _ref2;
    if (value) {
      let parent = parents.get(id);
      opened.add(id);
      while (parent != null && parent !== id) {
        opened.add(parent);
        parent = parents.get(parent);
      }
      return opened;
    } else {
      opened.delete(id);
    }
    return opened;
  },
  select: () => null
};
const listOpenStrategy = {
  open: multipleOpenStrategy.open,
  select: (_ref3) => {
    let {
      id,
      value,
      opened,
      parents
    } = _ref3;
    if (!value) return opened;
    const path = [];
    let parent = parents.get(id);
    while (parent != null) {
      path.push(parent);
      parent = parents.get(parent);
    }
    return new Set(path);
  }
};
const independentSelectStrategy = (mandatory) => {
  const strategy = {
    select: (_ref) => {
      let {
        id,
        value,
        selected
      } = _ref;
      id = toRaw(id);
      if (mandatory && !value) {
        const on = Array.from(selected.entries()).reduce((arr, _ref2) => {
          let [key, value2] = _ref2;
          if (value2 === "on") arr.push(key);
          return arr;
        }, []);
        if (on.length === 1 && on[0] === id) return selected;
      }
      selected.set(id, value ? "on" : "off");
      return selected;
    },
    in: (v, children, parents) => {
      let map = /* @__PURE__ */ new Map();
      for (const id of v || []) {
        map = strategy.select({
          id,
          value: true,
          selected: new Map(map),
          children,
          parents
        });
      }
      return map;
    },
    out: (v) => {
      const arr = [];
      for (const [key, value] of v.entries()) {
        if (value === "on") arr.push(key);
      }
      return arr;
    }
  };
  return strategy;
};
const independentSingleSelectStrategy = (mandatory) => {
  const parentStrategy = independentSelectStrategy(mandatory);
  const strategy = {
    select: (_ref3) => {
      let {
        selected,
        id,
        ...rest
      } = _ref3;
      id = toRaw(id);
      const singleSelected = selected.has(id) ? /* @__PURE__ */ new Map([[id, selected.get(id)]]) : /* @__PURE__ */ new Map();
      return parentStrategy.select({
        ...rest,
        id,
        selected: singleSelected
      });
    },
    in: (v, children, parents) => {
      let map = /* @__PURE__ */ new Map();
      if (v == null ? void 0 : v.length) {
        map = parentStrategy.in(v.slice(0, 1), children, parents);
      }
      return map;
    },
    out: (v, children, parents) => {
      return parentStrategy.out(v, children, parents);
    }
  };
  return strategy;
};
const leafSelectStrategy = (mandatory) => {
  const parentStrategy = independentSelectStrategy(mandatory);
  const strategy = {
    select: (_ref4) => {
      let {
        id,
        selected,
        children,
        ...rest
      } = _ref4;
      id = toRaw(id);
      if (children.has(id)) return selected;
      return parentStrategy.select({
        id,
        selected,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
const leafSingleSelectStrategy = (mandatory) => {
  const parentStrategy = independentSingleSelectStrategy(mandatory);
  const strategy = {
    select: (_ref5) => {
      let {
        id,
        selected,
        children,
        ...rest
      } = _ref5;
      id = toRaw(id);
      if (children.has(id)) return selected;
      return parentStrategy.select({
        id,
        selected,
        children,
        ...rest
      });
    },
    in: parentStrategy.in,
    out: parentStrategy.out
  };
  return strategy;
};
const classicSelectStrategy = (mandatory) => {
  const strategy = {
    select: (_ref6) => {
      let {
        id,
        value,
        selected,
        children,
        parents
      } = _ref6;
      id = toRaw(id);
      const original = new Map(selected);
      const items = [id];
      while (items.length) {
        const item = items.shift();
        selected.set(item, value ? "on" : "off");
        if (children.has(item)) {
          items.push(...children.get(item));
        }
      }
      let parent = parents.get(id);
      while (parent) {
        const childrenIds = children.get(parent);
        const everySelected = childrenIds.every((cid) => selected.get(cid) === "on");
        const noneSelected = childrenIds.every((cid) => !selected.has(cid) || selected.get(cid) === "off");
        selected.set(parent, everySelected ? "on" : noneSelected ? "off" : "indeterminate");
        parent = parents.get(parent);
      }
      if (mandatory && !value) {
        const on = Array.from(selected.entries()).reduce((arr, _ref7) => {
          let [key, value2] = _ref7;
          if (value2 === "on") arr.push(key);
          return arr;
        }, []);
        if (on.length === 0) return original;
      }
      return selected;
    },
    in: (v, children, parents) => {
      let map = /* @__PURE__ */ new Map();
      for (const id of v || []) {
        map = strategy.select({
          id,
          value: true,
          selected: new Map(map),
          children,
          parents
        });
      }
      return map;
    },
    out: (v, children) => {
      const arr = [];
      for (const [key, value] of v.entries()) {
        if (value === "on" && !children.has(key)) arr.push(key);
      }
      return arr;
    }
  };
  return strategy;
};
const VNestedSymbol = Symbol.for("vuetify:nested");
const emptyNested = {
  id: shallowRef(),
  root: {
    register: () => null,
    unregister: () => null,
    parents: ref(/* @__PURE__ */ new Map()),
    children: ref(/* @__PURE__ */ new Map()),
    open: () => null,
    openOnSelect: () => null,
    activate: () => null,
    select: () => null,
    activatable: ref(false),
    selectable: ref(false),
    opened: ref(/* @__PURE__ */ new Set()),
    activated: ref(/* @__PURE__ */ new Set()),
    selected: ref(/* @__PURE__ */ new Map()),
    selectedValues: ref([])
  }
};
const makeNestedProps = propsFactory({
  activatable: Boolean,
  selectable: Boolean,
  activeStrategy: [String, Function, Object],
  selectStrategy: [String, Function, Object],
  openStrategy: [String, Object],
  opened: null,
  activated: null,
  selected: null,
  mandatory: Boolean
}, "nested");
const useNested = (props) => {
  const children = ref(/* @__PURE__ */ new Map());
  const parents = ref(/* @__PURE__ */ new Map());
  const opened = useProxiedModel(props, "opened", props.opened, (v) => new Set(v), (v) => [...v.values()]);
  const activeStrategy = computed(() => {
    if (typeof props.activeStrategy === "object") return props.activeStrategy;
    if (typeof props.activeStrategy === "function") return props.activeStrategy(props.mandatory);
    switch (props.activeStrategy) {
      case "leaf":
        return leafActiveStrategy(props.mandatory);
      case "single-leaf":
        return leafSingleActiveStrategy(props.mandatory);
      case "independent":
        return independentActiveStrategy(props.mandatory);
      case "single-independent":
      default:
        return independentSingleActiveStrategy(props.mandatory);
    }
  });
  const selectStrategy = computed(() => {
    if (typeof props.selectStrategy === "object") return props.selectStrategy;
    if (typeof props.selectStrategy === "function") return props.selectStrategy(props.mandatory);
    switch (props.selectStrategy) {
      case "single-leaf":
        return leafSingleSelectStrategy(props.mandatory);
      case "leaf":
        return leafSelectStrategy(props.mandatory);
      case "independent":
        return independentSelectStrategy(props.mandatory);
      case "single-independent":
        return independentSingleSelectStrategy(props.mandatory);
      case "classic":
      default:
        return classicSelectStrategy(props.mandatory);
    }
  });
  const openStrategy = computed(() => {
    if (typeof props.openStrategy === "object") return props.openStrategy;
    switch (props.openStrategy) {
      case "list":
        return listOpenStrategy;
      case "single":
        return singleOpenStrategy;
      case "multiple":
      default:
        return multipleOpenStrategy;
    }
  });
  const activated = useProxiedModel(props, "activated", props.activated, (v) => activeStrategy.value.in(v, children.value, parents.value), (v) => activeStrategy.value.out(v, children.value, parents.value));
  const selected = useProxiedModel(props, "selected", props.selected, (v) => selectStrategy.value.in(v, children.value, parents.value), (v) => selectStrategy.value.out(v, children.value, parents.value));
  function getPath(id) {
    const path = [];
    let parent = id;
    while (parent != null) {
      path.unshift(parent);
      parent = parents.value.get(parent);
    }
    return path;
  }
  const vm = getCurrentInstance("nested");
  const nested = {
    id: shallowRef(),
    root: {
      opened,
      activatable: toRef(props, "activatable"),
      selectable: toRef(props, "selectable"),
      activated,
      selected,
      selectedValues: computed(() => {
        const arr = [];
        for (const [key, value] of selected.value.entries()) {
          if (value === "on") arr.push(key);
        }
        return arr;
      }),
      register: (id, parentId, isGroup) => {
        parentId && id !== parentId && parents.value.set(id, parentId);
        isGroup && children.value.set(id, []);
        if (parentId != null) {
          children.value.set(parentId, [...children.value.get(parentId) || [], id]);
        }
      },
      unregister: (id) => {
        children.value.delete(id);
        const parent = parents.value.get(id);
        if (parent) {
          const list = children.value.get(parent) ?? [];
          children.value.set(parent, list.filter((child) => child !== id));
        }
        parents.value.delete(id);
        opened.value.delete(id);
      },
      open: (id, value, event) => {
        vm.emit("click:open", {
          id,
          value,
          path: getPath(id),
          event
        });
        const newOpened = openStrategy.value.open({
          id,
          value,
          opened: new Set(opened.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newOpened && (opened.value = newOpened);
      },
      openOnSelect: (id, value, event) => {
        const newOpened = openStrategy.value.select({
          id,
          value,
          selected: new Map(selected.value),
          opened: new Set(opened.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newOpened && (opened.value = newOpened);
      },
      select: (id, value, event) => {
        vm.emit("click:select", {
          id,
          value,
          path: getPath(id),
          event
        });
        const newSelected = selectStrategy.value.select({
          id,
          value,
          selected: new Map(selected.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newSelected && (selected.value = newSelected);
        nested.root.openOnSelect(id, value, event);
      },
      activate: (id, value, event) => {
        if (!props.activatable) {
          return nested.root.select(id, true, event);
        }
        vm.emit("click:activate", {
          id,
          value,
          path: getPath(id),
          event
        });
        const newActivated = activeStrategy.value.activate({
          id,
          value,
          activated: new Set(activated.value),
          children: children.value,
          parents: parents.value,
          event
        });
        newActivated && (activated.value = newActivated);
      },
      children,
      parents
    }
  };
  provide(VNestedSymbol, nested);
  return nested.root;
};
const useNestedItem = (id, isGroup) => {
  const parent = inject(VNestedSymbol, emptyNested);
  const uidSymbol = Symbol(getUid());
  const computedId = computed(() => id.value !== void 0 ? id.value : uidSymbol);
  const item = {
    ...parent,
    id: computedId,
    open: (open, e) => parent.root.open(computedId.value, open, e),
    openOnSelect: (open, e) => parent.root.openOnSelect(computedId.value, open, e),
    isOpen: computed(() => parent.root.opened.value.has(computedId.value)),
    parent: computed(() => parent.root.parents.value.get(computedId.value)),
    activate: (activated, e) => parent.root.activate(computedId.value, activated, e),
    isActivated: computed(() => parent.root.activated.value.has(toRaw(computedId.value))),
    select: (selected, e) => parent.root.select(computedId.value, selected, e),
    isSelected: computed(() => parent.root.selected.value.get(toRaw(computedId.value)) === "on"),
    isIndeterminate: computed(() => parent.root.selected.value.get(computedId.value) === "indeterminate"),
    isLeaf: computed(() => !parent.root.children.value.get(computedId.value)),
    isGroupActivator: parent.isGroupActivator
  };
  !parent.isGroupActivator && parent.root.register(computedId.value, parent.id.value, isGroup);
  isGroup && provide(VNestedSymbol, item);
  return item;
};
const useNestedGroupActivator = () => {
  const parent = inject(VNestedSymbol, emptyNested);
  provide(VNestedSymbol, {
    ...parent,
    isGroupActivator: true
  });
};
const VListGroupActivator = defineComponent({
  name: "VListGroupActivator",
  setup(_, _ref) {
    let {
      slots
    } = _ref;
    useNestedGroupActivator();
    return () => {
      var _a;
      return (_a = slots.default) == null ? void 0 : _a.call(slots);
    };
  }
});
const makeVListGroupProps = propsFactory({
  /* @deprecated */
  activeColor: String,
  baseColor: String,
  color: String,
  collapseIcon: {
    type: IconValue,
    default: "$collapse"
  },
  expandIcon: {
    type: IconValue,
    default: "$expand"
  },
  prependIcon: IconValue,
  appendIcon: IconValue,
  fluid: Boolean,
  subgroup: Boolean,
  title: String,
  value: null,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListGroup");
const VListGroup = genericComponent()({
  name: "VListGroup",
  props: makeVListGroupProps(),
  setup(props, _ref2) {
    let {
      slots
    } = _ref2;
    const {
      isOpen,
      open,
      id: _id
    } = useNestedItem(toRef(props, "value"), true);
    const id = computed(() => `v-list-group--id-${String(_id.value)}`);
    const list = useList();
    const {
      isBooted
    } = useSsrBoot();
    function onClick(e) {
      e.stopPropagation();
      open(!isOpen.value, e);
    }
    const activatorProps = computed(() => ({
      onClick,
      class: "v-list-group__header",
      id: id.value
    }));
    const toggleIcon = computed(() => isOpen.value ? props.collapseIcon : props.expandIcon);
    const activatorDefaults = computed(() => ({
      VListItem: {
        active: isOpen.value,
        activeColor: props.activeColor,
        baseColor: props.baseColor,
        color: props.color,
        prependIcon: props.prependIcon || props.subgroup && toggleIcon.value,
        appendIcon: props.appendIcon || !props.subgroup && toggleIcon.value,
        title: props.title,
        value: props.value
      }
    }));
    useRender(() => createVNode(props.tag, {
      "class": ["v-list-group", {
        "v-list-group--prepend": list == null ? void 0 : list.hasPrepend.value,
        "v-list-group--fluid": props.fluid,
        "v-list-group--subgroup": props.subgroup,
        "v-list-group--open": isOpen.value
      }, props.class],
      "style": props.style
    }, {
      default: () => [slots.activator && createVNode(VDefaultsProvider, {
        "defaults": activatorDefaults.value
      }, {
        default: () => [createVNode(VListGroupActivator, null, {
          default: () => [slots.activator({
            props: activatorProps.value,
            isOpen: isOpen.value
          })]
        })]
      }), createVNode(MaybeTransition, {
        "transition": {
          component: VExpandTransition
        },
        "disabled": !isBooted.value
      }, {
        default: () => {
          var _a;
          return [withDirectives(createVNode("div", {
            "class": "v-list-group__items",
            "role": "group",
            "aria-labelledby": id.value
          }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]), [[vShow, isOpen.value]])];
        }
      })]
    }));
    return {
      isOpen
    };
  }
});
const makeVListItemSubtitleProps = propsFactory({
  opacity: [Number, String],
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListItemSubtitle");
const VListItemSubtitle = genericComponent()({
  name: "VListItemSubtitle",
  props: makeVListItemSubtitleProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(props.tag, {
      "class": ["v-list-item-subtitle", props.class],
      "style": [{
        "--v-list-item-subtitle-opacity": props.opacity
      }, props.style]
    }, slots));
    return {};
  }
});
const VListItemTitle = createSimpleFunctional("v-list-item-title");
const makeVListItemProps = propsFactory({
  active: {
    type: Boolean,
    default: void 0
  },
  activeClass: String,
  /* @deprecated */
  activeColor: String,
  appendAvatar: String,
  appendIcon: IconValue,
  baseColor: String,
  disabled: Boolean,
  lines: [Boolean, String],
  link: {
    type: Boolean,
    default: void 0
  },
  nav: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  slim: Boolean,
  subtitle: [String, Number],
  title: [String, Number],
  value: null,
  onClick: EventProp(),
  onClickOnce: EventProp(),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VListItem");
const VListItem = genericComponent()({
  name: "VListItem",
  directives: {
    Ripple
  },
  props: makeVListItemProps(),
  emits: {
    click: (e) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const link = useLink(props, attrs);
    const id = computed(() => props.value === void 0 ? link.href.value : props.value);
    const {
      activate,
      isActivated,
      select,
      isSelected,
      isIndeterminate,
      isGroupActivator,
      root,
      parent,
      openOnSelect
    } = useNestedItem(id, false);
    const list = useList();
    const isActive = computed(() => {
      var _a;
      return props.active !== false && (props.active || ((_a = link.isActive) == null ? void 0 : _a.value) || (root.activatable.value ? isActivated.value : isSelected.value));
    });
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (props.link || link.isClickable.value || !!list && (root.selectable.value || root.activatable.value || props.value != null)));
    const roundedProps = computed(() => props.rounded || props.nav);
    const color = computed(() => props.color ?? props.activeColor);
    const variantProps = computed(() => ({
      color: isActive.value ? color.value ?? props.baseColor : props.baseColor,
      variant: props.variant
    }));
    watch(() => {
      var _a;
      return (_a = link.isActive) == null ? void 0 : _a.value;
    }, (val) => {
      if (val && parent.value != null) {
        root.open(parent.value, true);
      }
      if (val) {
        openOnSelect(val);
      }
    }, {
      immediate: true
    });
    const {
      themeClasses
    } = provideTheme(props);
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(variantProps);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(roundedProps);
    const lineClasses = computed(() => props.lines ? `v-list-item--${props.lines}-line` : void 0);
    const slotProps = computed(() => ({
      isActive: isActive.value,
      select,
      isSelected: isSelected.value,
      isIndeterminate: isIndeterminate.value
    }));
    function onClick(e) {
      var _a;
      emit("click", e);
      if (!isClickable.value) return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      if (isGroupActivator) return;
      if (root.activatable.value) {
        activate(!isActivated.value, e);
      } else if (root.selectable.value) {
        select(!isSelected.value, e);
      } else if (props.value != null) {
        select(!isSelected.value, e);
      }
    }
    function onKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    }
    useRender(() => {
      const Tag = isLink.value ? "a" : props.tag;
      const hasTitle = slots.title || props.title != null;
      const hasSubtitle = slots.subtitle || props.subtitle != null;
      const hasAppendMedia = !!(props.appendAvatar || props.appendIcon);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasPrependMedia = !!(props.prependAvatar || props.prependIcon);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      list == null ? void 0 : list.updateHasPrepend(hasPrepend);
      if (props.activeColor) {
        deprecate("active-color", ["color", "base-color"]);
      }
      return withDirectives(createVNode(Tag, {
        "class": ["v-list-item", {
          "v-list-item--active": isActive.value,
          "v-list-item--disabled": props.disabled,
          "v-list-item--link": isClickable.value,
          "v-list-item--nav": props.nav,
          "v-list-item--prepend": !hasPrepend && (list == null ? void 0 : list.hasPrepend.value),
          "v-list-item--slim": props.slim,
          [`${props.activeClass}`]: props.activeClass && isActive.value
        }, themeClasses.value, borderClasses.value, colorClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, variantClasses.value, props.class],
        "style": [colorStyles.value, dimensionStyles.value, props.style],
        "href": link.href.value,
        "tabindex": isClickable.value ? list ? -2 : 0 : void 0,
        "onClick": onClick,
        "onKeydown": isClickable.value && !isLink.value && onKeyDown
      }, {
        default: () => {
          var _a;
          return [genOverlays(isClickable.value || isActive.value, "v-list-item"), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-list-item__prepend"
          }, [!slots.prepend ? createVNode(Fragment, null, [props.prependAvatar && createVNode(VAvatar, {
            "key": "prepend-avatar",
            "density": props.density,
            "image": props.prependAvatar
          }, null), props.prependIcon && createVNode(VIcon, {
            "key": "prepend-icon",
            "density": props.density,
            "icon": props.prependIcon
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !hasPrependMedia,
            "defaults": {
              VAvatar: {
                density: props.density,
                image: props.prependAvatar
              },
              VIcon: {
                density: props.density,
                icon: props.prependIcon
              },
              VListItemAction: {
                start: true
              }
            }
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots.prepend) == null ? void 0 : _a2.call(slots, slotProps.value)];
            }
          }), createVNode("div", {
            "class": "v-list-item__spacer"
          }, null)]), createVNode("div", {
            "class": "v-list-item__content",
            "data-no-activator": ""
          }, [hasTitle && createVNode(VListItemTitle, {
            "key": "title"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.title) == null ? void 0 : _a2.call(slots, {
                title: props.title
              })) ?? props.title];
            }
          }), hasSubtitle && createVNode(VListItemSubtitle, {
            "key": "subtitle"
          }, {
            default: () => {
              var _a2;
              return [((_a2 = slots.subtitle) == null ? void 0 : _a2.call(slots, {
                subtitle: props.subtitle
              })) ?? props.subtitle];
            }
          }), (_a = slots.default) == null ? void 0 : _a.call(slots, slotProps.value)]), hasAppend && createVNode("div", {
            "key": "append",
            "class": "v-list-item__append"
          }, [!slots.append ? createVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
            "key": "append-icon",
            "density": props.density,
            "icon": props.appendIcon
          }, null), props.appendAvatar && createVNode(VAvatar, {
            "key": "append-avatar",
            "density": props.density,
            "image": props.appendAvatar
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !hasAppendMedia,
            "defaults": {
              VAvatar: {
                density: props.density,
                image: props.appendAvatar
              },
              VIcon: {
                density: props.density,
                icon: props.appendIcon
              },
              VListItemAction: {
                end: true
              }
            }
          }, {
            default: () => {
              var _a2;
              return [(_a2 = slots.append) == null ? void 0 : _a2.call(slots, slotProps.value)];
            }
          }), createVNode("div", {
            "class": "v-list-item__spacer"
          }, null)])];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple]]);
    });
    return {
      activate,
      isActivated,
      isGroupActivator,
      isSelected,
      list,
      select
    };
  }
});
const makeVListSubheaderProps = propsFactory({
  color: String,
  inset: Boolean,
  sticky: Boolean,
  title: String,
  ...makeComponentProps(),
  ...makeTagProps()
}, "VListSubheader");
const VListSubheader = genericComponent()({
  name: "VListSubheader",
  props: makeVListSubheaderProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    useRender(() => {
      const hasText = !!(slots.default || props.title);
      return createVNode(props.tag, {
        "class": ["v-list-subheader", {
          "v-list-subheader--inset": props.inset,
          "v-list-subheader--sticky": props.sticky
        }, textColorClasses.value, props.class],
        "style": [{
          textColorStyles
        }, props.style]
      }, {
        default: () => {
          var _a;
          return [hasText && createVNode("div", {
            "class": "v-list-subheader__text"
          }, [((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.title])];
        }
      });
    });
    return {};
  }
});
const makeVDividerProps = propsFactory({
  color: String,
  inset: Boolean,
  length: [Number, String],
  opacity: [Number, String],
  thickness: [Number, String],
  vertical: Boolean,
  ...makeComponentProps(),
  ...makeThemeProps()
}, "VDivider");
const VDivider = genericComponent()({
  name: "VDivider",
  props: makeVDividerProps(),
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(toRef(props, "color"));
    const dividerStyles = computed(() => {
      const styles = {};
      if (props.length) {
        styles[props.vertical ? "height" : "width"] = convertToUnit(props.length);
      }
      if (props.thickness) {
        styles[props.vertical ? "borderRightWidth" : "borderTopWidth"] = convertToUnit(props.thickness);
      }
      return styles;
    });
    useRender(() => {
      const divider = createVNode("hr", {
        "class": [{
          "v-divider": true,
          "v-divider--inset": props.inset,
          "v-divider--vertical": props.vertical
        }, themeClasses.value, textColorClasses.value, props.class],
        "style": [dividerStyles.value, textColorStyles.value, {
          "--v-border-opacity": props.opacity
        }, props.style],
        "aria-orientation": !attrs.role || attrs.role === "separator" ? props.vertical ? "vertical" : "horizontal" : void 0,
        "role": `${attrs.role || "separator"}`
      }, null);
      if (!slots.default) return divider;
      return createVNode("div", {
        "class": ["v-divider__wrapper", {
          "v-divider__wrapper--vertical": props.vertical,
          "v-divider__wrapper--inset": props.inset
        }]
      }, [divider, createVNode("div", {
        "class": "v-divider__content"
      }, [slots.default()]), divider]);
    });
    return {};
  }
});
const makeVListChildrenProps = propsFactory({
  items: Array,
  returnObject: Boolean
}, "VListChildren");
const VListChildren = genericComponent()({
  name: "VListChildren",
  props: makeVListChildrenProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    createList();
    return () => {
      var _a, _b;
      return ((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? ((_b = props.items) == null ? void 0 : _b.map((_ref2) => {
        var _a2, _b2;
        let {
          children,
          props: itemProps,
          type,
          raw: item
        } = _ref2;
        if (type === "divider") {
          return ((_a2 = slots.divider) == null ? void 0 : _a2.call(slots, {
            props: itemProps
          })) ?? createVNode(VDivider, itemProps, null);
        }
        if (type === "subheader") {
          return ((_b2 = slots.subheader) == null ? void 0 : _b2.call(slots, {
            props: itemProps
          })) ?? createVNode(VListSubheader, itemProps, null);
        }
        const slotsWithItem = {
          subtitle: slots.subtitle ? (slotProps) => {
            var _a3;
            return (_a3 = slots.subtitle) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0,
          prepend: slots.prepend ? (slotProps) => {
            var _a3;
            return (_a3 = slots.prepend) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0,
          append: slots.append ? (slotProps) => {
            var _a3;
            return (_a3 = slots.append) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0,
          title: slots.title ? (slotProps) => {
            var _a3;
            return (_a3 = slots.title) == null ? void 0 : _a3.call(slots, {
              ...slotProps,
              item
            });
          } : void 0
        };
        const listGroupProps = VListGroup.filterProps(itemProps);
        return children ? createVNode(VListGroup, mergeProps({
          "value": itemProps == null ? void 0 : itemProps.value
        }, listGroupProps), {
          activator: (_ref3) => {
            let {
              props: activatorProps
            } = _ref3;
            const listItemProps = {
              ...itemProps,
              ...activatorProps,
              value: props.returnObject ? item : itemProps.value
            };
            return slots.header ? slots.header({
              props: listItemProps
            }) : createVNode(VListItem, listItemProps, slotsWithItem);
          },
          default: () => createVNode(VListChildren, {
            "items": children,
            "returnObject": props.returnObject
          }, slots)
        }) : slots.item ? slots.item({
          props: itemProps
        }) : createVNode(VListItem, mergeProps(itemProps, {
          "value": props.returnObject ? item : itemProps.value
        }), slotsWithItem);
      }));
    };
  }
});
const makeItemsProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  itemTitle: {
    type: [String, Array, Function],
    default: "title"
  },
  itemValue: {
    type: [String, Array, Function],
    default: "value"
  },
  itemChildren: {
    type: [Boolean, String, Array, Function],
    default: "children"
  },
  itemProps: {
    type: [Boolean, String, Array, Function],
    default: "props"
  },
  returnObject: Boolean,
  valueComparator: {
    type: Function,
    default: deepEqual
  }
}, "list-items");
function transformItem$1(props, item) {
  const title = getPropertyFromItem(item, props.itemTitle, item);
  const value = getPropertyFromItem(item, props.itemValue, title);
  const children = getPropertyFromItem(item, props.itemChildren);
  const itemProps = props.itemProps === true ? typeof item === "object" && item != null && !Array.isArray(item) ? "children" in item ? omit(item, ["children"]) : item : void 0 : getPropertyFromItem(item, props.itemProps);
  const _props = {
    title,
    value,
    ...itemProps
  };
  return {
    title: String(_props.title ?? ""),
    value: _props.value,
    props: _props,
    children: Array.isArray(children) ? transformItems$1(props, children) : void 0,
    raw: item
  };
}
function transformItems$1(props, items) {
  const array = [];
  for (const item of items) {
    array.push(transformItem$1(props, item));
  }
  return array;
}
function useItems(props) {
  const items = computed(() => transformItems$1(props, props.items));
  const hasNullItem = computed(() => items.value.some((item) => item.value === null));
  function transformIn(value) {
    if (!hasNullItem.value) {
      value = value.filter((v) => v !== null);
    }
    return value.map((v) => {
      if (props.returnObject && typeof v === "string") {
        return transformItem$1(props, v);
      }
      return items.value.find((item) => props.valueComparator(v, item.value)) || transformItem$1(props, v);
    });
  }
  function transformOut(value) {
    return props.returnObject ? value.map((_ref) => {
      let {
        raw
      } = _ref;
      return raw;
    }) : value.map((_ref2) => {
      let {
        value: value2
      } = _ref2;
      return value2;
    });
  }
  return {
    items,
    transformIn,
    transformOut
  };
}
function isPrimitive(value) {
  return typeof value === "string" || typeof value === "number" || typeof value === "boolean";
}
function transformItem(props, item) {
  const type = getPropertyFromItem(item, props.itemType, "item");
  const title = isPrimitive(item) ? item : getPropertyFromItem(item, props.itemTitle);
  const value = getPropertyFromItem(item, props.itemValue, void 0);
  const children = getPropertyFromItem(item, props.itemChildren);
  const itemProps = props.itemProps === true ? omit(item, ["children"]) : getPropertyFromItem(item, props.itemProps);
  const _props = {
    title,
    value,
    ...itemProps
  };
  return {
    type,
    title: _props.title,
    value: _props.value,
    props: _props,
    children: type === "item" && children ? transformItems(props, children) : void 0,
    raw: item
  };
}
function transformItems(props, items) {
  const array = [];
  for (const item of items) {
    array.push(transformItem(props, item));
  }
  return array;
}
function useListItems(props) {
  const items = computed(() => transformItems(props, props.items));
  return {
    items
  };
}
const makeVListProps = propsFactory({
  baseColor: String,
  /* @deprecated */
  activeColor: String,
  activeClass: String,
  bgColor: String,
  disabled: Boolean,
  expandIcon: String,
  collapseIcon: String,
  lines: {
    type: [Boolean, String],
    default: "one"
  },
  slim: Boolean,
  nav: Boolean,
  "onClick:open": EventProp(),
  "onClick:select": EventProp(),
  "onUpdate:opened": EventProp(),
  ...makeNestedProps({
    selectStrategy: "single-leaf",
    openStrategy: "list"
  }),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeDimensionProps(),
  ...makeElevationProps(),
  itemType: {
    type: String,
    default: "type"
  },
  ...makeItemsProps(),
  ...makeRoundedProps(),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "text"
  })
}, "VList");
const VList = genericComponent()({
  name: "VList",
  props: makeVListProps(),
  emits: {
    "update:selected": (value) => true,
    "update:activated": (value) => true,
    "update:opened": (value) => true,
    "click:open": (value) => true,
    "click:activate": (value) => true,
    "click:select": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      items
    } = useListItems(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      borderClasses
    } = useBorder(props);
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      elevationClasses
    } = useElevation(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      children,
      open,
      parents,
      select
    } = useNested(props);
    const lineClasses = computed(() => props.lines ? `v-list--${props.lines}-line` : void 0);
    const activeColor = toRef(props, "activeColor");
    const baseColor = toRef(props, "baseColor");
    const color = toRef(props, "color");
    createList();
    provideDefaults({
      VListGroup: {
        activeColor,
        baseColor,
        color,
        expandIcon: toRef(props, "expandIcon"),
        collapseIcon: toRef(props, "collapseIcon")
      },
      VListItem: {
        activeClass: toRef(props, "activeClass"),
        activeColor,
        baseColor,
        color,
        density: toRef(props, "density"),
        disabled: toRef(props, "disabled"),
        lines: toRef(props, "lines"),
        nav: toRef(props, "nav"),
        slim: toRef(props, "slim"),
        variant: toRef(props, "variant")
      }
    });
    const isFocused = shallowRef(false);
    const contentRef = ref();
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onFocusout(e) {
      isFocused.value = false;
    }
    function onFocus(e) {
      var _a;
      if (!isFocused.value && !(e.relatedTarget && ((_a = contentRef.value) == null ? void 0 : _a.contains(e.relatedTarget)))) focus();
    }
    function onKeydown(e) {
      const target = e.target;
      if (!contentRef.value || ["INPUT", "TEXTAREA"].includes(target.tagName)) return;
      if (e.key === "ArrowDown") {
        focus("next");
      } else if (e.key === "ArrowUp") {
        focus("prev");
      } else if (e.key === "Home") {
        focus("first");
      } else if (e.key === "End") {
        focus("last");
      } else {
        return;
      }
      e.preventDefault();
    }
    function onMousedown(e) {
      isFocused.value = true;
    }
    function focus(location) {
      if (contentRef.value) {
        return focusChild(contentRef.value, location);
      }
    }
    useRender(() => {
      return createVNode(props.tag, {
        "ref": contentRef,
        "class": ["v-list", {
          "v-list--disabled": props.disabled,
          "v-list--nav": props.nav,
          "v-list--slim": props.slim
        }, themeClasses.value, backgroundColorClasses.value, borderClasses.value, densityClasses.value, elevationClasses.value, lineClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, dimensionStyles.value, props.style],
        "tabindex": props.disabled || isFocused.value ? -1 : 0,
        "role": "listbox",
        "aria-activedescendant": void 0,
        "onFocusin": onFocusin,
        "onFocusout": onFocusout,
        "onFocus": onFocus,
        "onKeydown": onKeydown,
        "onMousedown": onMousedown
      }, {
        default: () => [createVNode(VListChildren, {
          "items": items.value,
          "returnObject": props.returnObject
        }, slots)]
      });
    });
    return {
      open,
      select,
      focus,
      children,
      parents
    };
  }
});
const makeVLabelProps = propsFactory({
  text: String,
  onClick: EventProp(),
  ...makeComponentProps(),
  ...makeThemeProps()
}, "VLabel");
const VLabel = genericComponent()({
  name: "VLabel",
  props: makeVLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      return createVNode("label", {
        "class": ["v-label", {
          "v-label--clickable": !!props.onClick
        }, props.class],
        "style": props.style,
        "onClick": props.onClick
      }, [props.text, (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const VSelectionControlGroupSymbol = Symbol.for("vuetify:selection-control-group");
const makeSelectionControlGroupProps = propsFactory({
  color: String,
  disabled: {
    type: Boolean,
    default: null
  },
  defaultsTarget: String,
  error: Boolean,
  id: String,
  inline: Boolean,
  falseIcon: IconValue,
  trueIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  multiple: {
    type: Boolean,
    default: null
  },
  name: String,
  readonly: {
    type: Boolean,
    default: null
  },
  modelValue: null,
  type: String,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeThemeProps()
}, "SelectionControlGroup");
const makeVSelectionControlGroupProps = propsFactory({
  ...makeSelectionControlGroupProps({
    defaultsTarget: "VSelectionControl"
  })
}, "VSelectionControlGroup");
genericComponent()({
  name: "VSelectionControlGroup",
  props: makeVSelectionControlGroupProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const modelValue = useProxiedModel(props, "modelValue");
    const uid = getUid();
    const id = computed(() => props.id || `v-selection-control-group-${uid}`);
    const name = computed(() => props.name || id.value);
    const updateHandlers = /* @__PURE__ */ new Set();
    provide(VSelectionControlGroupSymbol, {
      modelValue,
      forceUpdate: () => {
        updateHandlers.forEach((fn) => fn());
      },
      onForceUpdate: (cb) => {
        updateHandlers.add(cb);
        onScopeDispose(() => {
          updateHandlers.delete(cb);
        });
      }
    });
    provideDefaults({
      [props.defaultsTarget]: {
        color: toRef(props, "color"),
        disabled: toRef(props, "disabled"),
        density: toRef(props, "density"),
        error: toRef(props, "error"),
        inline: toRef(props, "inline"),
        modelValue,
        multiple: computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value)),
        name,
        falseIcon: toRef(props, "falseIcon"),
        trueIcon: toRef(props, "trueIcon"),
        readonly: toRef(props, "readonly"),
        ripple: toRef(props, "ripple"),
        type: toRef(props, "type"),
        valueComparator: toRef(props, "valueComparator")
      }
    });
    useRender(() => {
      var _a;
      return createVNode("div", {
        "class": ["v-selection-control-group", {
          "v-selection-control-group--inline": props.inline
        }, props.class],
        "style": props.style,
        "role": props.type === "radio" ? "radiogroup" : void 0
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots)]);
    });
    return {};
  }
});
const makeVSelectionControlProps = propsFactory({
  label: String,
  baseColor: String,
  trueValue: null,
  falseValue: null,
  value: null,
  ...makeComponentProps(),
  ...makeSelectionControlGroupProps()
}, "VSelectionControl");
function useSelectionControl(props) {
  const group = inject(VSelectionControlGroupSymbol, void 0);
  const {
    densityClasses
  } = useDensity(props);
  const modelValue = useProxiedModel(props, "modelValue");
  const trueValue = computed(() => props.trueValue !== void 0 ? props.trueValue : props.value !== void 0 ? props.value : true);
  const falseValue = computed(() => props.falseValue !== void 0 ? props.falseValue : false);
  const isMultiple = computed(() => !!props.multiple || props.multiple == null && Array.isArray(modelValue.value));
  const model = computed({
    get() {
      const val = group ? group.modelValue.value : modelValue.value;
      return isMultiple.value ? wrapInArray(val).some((v) => props.valueComparator(v, trueValue.value)) : props.valueComparator(val, trueValue.value);
    },
    set(val) {
      if (props.readonly) return;
      const currentValue = val ? trueValue.value : falseValue.value;
      let newVal = currentValue;
      if (isMultiple.value) {
        newVal = val ? [...wrapInArray(modelValue.value), currentValue] : wrapInArray(modelValue.value).filter((item) => !props.valueComparator(item, trueValue.value));
      }
      if (group) {
        group.modelValue.value = newVal;
      } else {
        modelValue.value = newVal;
      }
    }
  });
  const {
    textColorClasses,
    textColorStyles
  } = useTextColor(computed(() => {
    if (props.error || props.disabled) return void 0;
    return model.value ? props.color : props.baseColor;
  }));
  const {
    backgroundColorClasses,
    backgroundColorStyles
  } = useBackgroundColor(computed(() => {
    return model.value && !props.error && !props.disabled ? props.color : props.baseColor;
  }));
  const icon = computed(() => model.value ? props.trueIcon : props.falseIcon);
  return {
    group,
    densityClasses,
    trueValue,
    falseValue,
    model,
    textColorClasses,
    textColorStyles,
    backgroundColorClasses,
    backgroundColorStyles,
    icon
  };
}
const VSelectionControl = genericComponent()({
  name: "VSelectionControl",
  directives: {
    Ripple
  },
  inheritAttrs: false,
  props: makeVSelectionControlProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots
    } = _ref;
    const {
      group,
      densityClasses,
      icon,
      model,
      textColorClasses,
      textColorStyles,
      backgroundColorClasses,
      backgroundColorStyles,
      trueValue
    } = useSelectionControl(props);
    const uid = getUid();
    const isFocused = shallowRef(false);
    const isFocusVisible = shallowRef(false);
    const input = ref();
    const id = computed(() => props.id || `input-${uid}`);
    const isInteractive = computed(() => !props.disabled && !props.readonly);
    group == null ? void 0 : group.onForceUpdate(() => {
      if (input.value) {
        input.value.checked = model.value;
      }
    });
    function onFocus(e) {
      if (!isInteractive.value) return;
      isFocused.value = true;
      if (matchesSelector(e.target) !== false) {
        isFocusVisible.value = true;
      }
    }
    function onBlur() {
      isFocused.value = false;
      isFocusVisible.value = false;
    }
    function onClickLabel(e) {
      e.stopPropagation();
    }
    function onInput(e) {
      if (!isInteractive.value) {
        if (input.value) {
          input.value.checked = model.value;
        }
        return;
      }
      if (props.readonly && group) {
        nextTick(() => group.forceUpdate());
      }
      model.value = e.target.checked;
    }
    useRender(() => {
      var _a, _b;
      const label = slots.label ? slots.label({
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const inputNode = createVNode("input", mergeProps({
        "ref": input,
        "checked": model.value,
        "disabled": !!props.disabled,
        "id": id.value,
        "onBlur": onBlur,
        "onFocus": onFocus,
        "onInput": onInput,
        "aria-disabled": !!props.disabled,
        "aria-label": props.label,
        "type": props.type,
        "value": trueValue.value,
        "name": props.name,
        "aria-checked": props.type === "checkbox" ? model.value : void 0
      }, inputAttrs), null);
      return createVNode("div", mergeProps({
        "class": ["v-selection-control", {
          "v-selection-control--dirty": model.value,
          "v-selection-control--disabled": props.disabled,
          "v-selection-control--error": props.error,
          "v-selection-control--focused": isFocused.value,
          "v-selection-control--focus-visible": isFocusVisible.value,
          "v-selection-control--inline": props.inline
        }, densityClasses.value, props.class]
      }, rootAttrs, {
        "style": props.style
      }), [createVNode("div", {
        "class": ["v-selection-control__wrapper", textColorClasses.value],
        "style": textColorStyles.value
      }, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
        backgroundColorClasses,
        backgroundColorStyles
      }), withDirectives(createVNode("div", {
        "class": ["v-selection-control__input"]
      }, [((_b = slots.input) == null ? void 0 : _b.call(slots, {
        model,
        textColorClasses,
        textColorStyles,
        backgroundColorClasses,
        backgroundColorStyles,
        inputNode,
        icon: icon.value,
        props: {
          onFocus,
          onBlur,
          id: id.value
        }
      })) ?? createVNode(Fragment, null, [icon.value && createVNode(VIcon, {
        "key": "icon",
        "icon": icon.value
      }, null), inputNode])]), [[resolveDirective("ripple"), props.ripple && [!props.disabled && !props.readonly, null, ["center", "circle"]]]])]), label && createVNode(VLabel, {
        "for": id.value,
        "onClick": onClickLabel
      }, {
        default: () => [label]
      })]);
    });
    return {
      isFocused,
      input
    };
  }
});
const makeVCheckboxBtnProps = propsFactory({
  indeterminate: Boolean,
  indeterminateIcon: {
    type: IconValue,
    default: "$checkboxIndeterminate"
  },
  ...makeVSelectionControlProps({
    falseIcon: "$checkboxOff",
    trueIcon: "$checkboxOn"
  })
}, "VCheckboxBtn");
const VCheckboxBtn = genericComponent()({
  name: "VCheckboxBtn",
  props: makeVCheckboxBtnProps(),
  emits: {
    "update:modelValue": (value) => true,
    "update:indeterminate": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const indeterminate = useProxiedModel(props, "indeterminate");
    const model = useProxiedModel(props, "modelValue");
    function onChange(v) {
      if (indeterminate.value) {
        indeterminate.value = false;
      }
    }
    const falseIcon = computed(() => {
      return indeterminate.value ? props.indeterminateIcon : props.falseIcon;
    });
    const trueIcon = computed(() => {
      return indeterminate.value ? props.indeterminateIcon : props.trueIcon;
    });
    useRender(() => {
      const controlProps = omit(VSelectionControl.filterProps(props), ["modelValue"]);
      return createVNode(VSelectionControl, mergeProps(controlProps, {
        "modelValue": model.value,
        "onUpdate:modelValue": [($event) => model.value = $event, onChange],
        "class": ["v-checkbox-btn", props.class],
        "style": props.style,
        "type": "checkbox",
        "falseIcon": falseIcon.value,
        "trueIcon": trueIcon.value,
        "aria-checked": indeterminate.value ? "mixed" : void 0
      }), slots);
    });
    return {};
  }
});
function useInputIcon(props) {
  const {
    t
  } = useLocale();
  function InputIcon(_ref) {
    let {
      name
    } = _ref;
    const localeKey = {
      prepend: "prependAction",
      prependInner: "prependAction",
      append: "appendAction",
      appendInner: "appendAction",
      clear: "clear"
    }[name];
    const listener = props[`onClick:${name}`];
    const label = listener && localeKey ? t(`$vuetify.input.${localeKey}`, props.label ?? "") : void 0;
    return createVNode(VIcon, {
      "icon": props[`${name}Icon`],
      "aria-label": label,
      "onClick": listener
    }, null);
  }
  return {
    InputIcon
  };
}
const makeVMessagesProps = propsFactory({
  active: Boolean,
  color: String,
  messages: {
    type: [Array, String],
    default: () => []
  },
  ...makeComponentProps(),
  ...makeTransitionProps({
    transition: {
      component: VSlideYTransition,
      leaveAbsolute: true,
      group: true
    }
  })
}, "VMessages");
const VMessages = genericComponent()({
  name: "VMessages",
  props: makeVMessagesProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const messages = computed(() => wrapInArray(props.messages));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(computed(() => props.color));
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition,
      "tag": "div",
      "class": ["v-messages", textColorClasses.value, props.class],
      "style": [textColorStyles.value, props.style],
      "role": "alert",
      "aria-live": "polite"
    }, {
      default: () => [props.active && messages.value.map((message, i) => createVNode("div", {
        "class": "v-messages__message",
        "key": `${i}-${messages.value}`
      }, [slots.message ? slots.message({
        message
      }) : message]))]
    }));
    return {};
  }
});
const makeFocusProps = propsFactory({
  focused: Boolean,
  "onUpdate:focused": EventProp()
}, "focus");
function useFocus(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  const isFocused = useProxiedModel(props, "focused");
  const focusClasses = computed(() => {
    return {
      [`${name}--focused`]: isFocused.value
    };
  });
  function focus() {
    isFocused.value = true;
  }
  function blur() {
    isFocused.value = false;
  }
  return {
    focusClasses,
    isFocused,
    focus,
    blur
  };
}
const makeValidationProps = propsFactory({
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  errorMessages: {
    type: [Array, String],
    default: () => []
  },
  maxErrors: {
    type: [Number, String],
    default: 1
  },
  name: String,
  label: String,
  readonly: {
    type: Boolean,
    default: null
  },
  rules: {
    type: Array,
    default: () => []
  },
  modelValue: null,
  validateOn: String,
  validationValue: null,
  ...makeFocusProps()
}, "validation");
function useValidation(props) {
  let name = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : getCurrentInstanceName();
  let id = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : getUid();
  const model = useProxiedModel(props, "modelValue");
  const validationModel = computed(() => props.validationValue === void 0 ? model.value : props.validationValue);
  const form = useForm();
  const internalErrorMessages = ref([]);
  const isPristine = shallowRef(true);
  const isDirty = computed(() => !!(wrapInArray(model.value === "" ? null : model.value).length || wrapInArray(validationModel.value === "" ? null : validationModel.value).length));
  const isDisabled = computed(() => !!(props.disabled ?? (form == null ? void 0 : form.isDisabled.value)));
  const isReadonly = computed(() => !!(props.readonly ?? (form == null ? void 0 : form.isReadonly.value)));
  const errorMessages = computed(() => {
    var _a;
    return ((_a = props.errorMessages) == null ? void 0 : _a.length) ? wrapInArray(props.errorMessages).concat(internalErrorMessages.value).slice(0, Math.max(0, +props.maxErrors)) : internalErrorMessages.value;
  });
  const validateOn = computed(() => {
    let value = (props.validateOn ?? (form == null ? void 0 : form.validateOn.value)) || "input";
    if (value === "lazy") value = "input lazy";
    const set = new Set((value == null ? void 0 : value.split(" ")) ?? []);
    return {
      blur: set.has("blur") || set.has("input"),
      input: set.has("input"),
      submit: set.has("submit"),
      lazy: set.has("lazy")
    };
  });
  const isValid = computed(() => {
    var _a;
    if (props.error || ((_a = props.errorMessages) == null ? void 0 : _a.length)) return false;
    if (!props.rules.length) return true;
    if (isPristine.value) {
      return internalErrorMessages.value.length || validateOn.value.lazy ? null : true;
    } else {
      return !internalErrorMessages.value.length;
    }
  });
  const isValidating = shallowRef(false);
  const validationClasses = computed(() => {
    return {
      [`${name}--error`]: isValid.value === false,
      [`${name}--dirty`]: isDirty.value,
      [`${name}--disabled`]: isDisabled.value,
      [`${name}--readonly`]: isReadonly.value
    };
  });
  getCurrentInstance("validation");
  const uid = computed(() => props.name ?? unref(id));
  useToggleScope(() => validateOn.value.input, () => {
    watch(validationModel, () => {
      if (validationModel.value != null) {
        validate();
      } else if (props.focused) {
        const unwatch = watch(() => props.focused, (val) => {
          if (!val) validate();
          unwatch();
        });
      }
    });
  });
  useToggleScope(() => validateOn.value.blur, () => {
    watch(() => props.focused, (val) => {
      if (!val) validate();
    });
  });
  watch([isValid, errorMessages], () => {
    form == null ? void 0 : form.update(uid.value, isValid.value, errorMessages.value);
  });
  async function reset() {
    model.value = null;
    await nextTick();
    await resetValidation();
  }
  async function resetValidation() {
    isPristine.value = true;
    if (!validateOn.value.lazy) {
      await validate(true);
    } else {
      internalErrorMessages.value = [];
    }
  }
  async function validate() {
    let silent = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const results = [];
    isValidating.value = true;
    for (const rule of props.rules) {
      if (results.length >= +(props.maxErrors ?? 1)) {
        break;
      }
      const handler = typeof rule === "function" ? rule : () => rule;
      const result = await handler(validationModel.value);
      if (result === true) continue;
      if (result !== false && typeof result !== "string") {
        console.warn(`${result} is not a valid value. Rule functions must return boolean true or a string.`);
        continue;
      }
      results.push(result || "");
    }
    internalErrorMessages.value = results;
    isValidating.value = false;
    isPristine.value = silent;
    return internalErrorMessages.value;
  }
  return {
    errorMessages,
    isDirty,
    isDisabled,
    isReadonly,
    isPristine,
    isValid,
    isValidating,
    reset,
    resetValidation,
    validate,
    validationClasses
  };
}
const makeVInputProps = propsFactory({
  id: String,
  appendIcon: IconValue,
  centerAffix: {
    type: Boolean,
    default: true
  },
  prependIcon: IconValue,
  hideDetails: [Boolean, String],
  hideSpinButtons: Boolean,
  hint: String,
  persistentHint: Boolean,
  messages: {
    type: [Array, String],
    default: () => []
  },
  direction: {
    type: String,
    default: "horizontal",
    validator: (v) => ["horizontal", "vertical"].includes(v)
  },
  "onClick:prepend": EventProp(),
  "onClick:append": EventProp(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...only(makeDimensionProps(), ["maxWidth", "minWidth", "width"]),
  ...makeThemeProps(),
  ...makeValidationProps()
}, "VInput");
const VInput = genericComponent()({
  name: "VInput",
  props: {
    ...makeVInputProps()
  },
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      slots,
      emit
    } = _ref;
    const {
      densityClasses
    } = useDensity(props);
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      themeClasses
    } = provideTheme(props);
    const {
      rtlClasses
    } = useRtl();
    const {
      InputIcon
    } = useInputIcon(props);
    const uid = getUid();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = computed(() => `${id.value}-messages`);
    const {
      errorMessages,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate,
      validationClasses
    } = useValidation(props, "v-input", id);
    const slotProps = computed(() => ({
      id,
      messagesId,
      isDirty,
      isDisabled,
      isReadonly,
      isPristine,
      isValid,
      isValidating,
      reset,
      resetValidation,
      validate
    }));
    const messages = computed(() => {
      var _a;
      if (((_a = props.errorMessages) == null ? void 0 : _a.length) || !isPristine.value && errorMessages.value.length) {
        return errorMessages.value;
      } else if (props.hint && (props.persistentHint || props.focused)) {
        return props.hint;
      } else {
        return props.messages;
      }
    });
    useRender(() => {
      var _a, _b, _c, _d;
      const hasPrepend = !!(slots.prepend || props.prependIcon);
      const hasAppend = !!(slots.append || props.appendIcon);
      const hasMessages = messages.value.length > 0;
      const hasDetails = !props.hideDetails || props.hideDetails === "auto" && (hasMessages || !!slots.details);
      return createVNode("div", {
        "class": ["v-input", `v-input--${props.direction}`, {
          "v-input--center-affix": props.centerAffix,
          "v-input--hide-spin-buttons": props.hideSpinButtons
        }, densityClasses.value, themeClasses.value, rtlClasses.value, validationClasses.value, props.class],
        "style": [dimensionStyles.value, props.style]
      }, [hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-input__prepend"
      }, [(_a = slots.prepend) == null ? void 0 : _a.call(slots, slotProps.value), props.prependIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prepend"
      }, null)]), slots.default && createVNode("div", {
        "class": "v-input__control"
      }, [(_b = slots.default) == null ? void 0 : _b.call(slots, slotProps.value)]), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-input__append"
      }, [props.appendIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "append"
      }, null), (_c = slots.append) == null ? void 0 : _c.call(slots, slotProps.value)]), hasDetails && createVNode("div", {
        "class": "v-input__details"
      }, [createVNode(VMessages, {
        "id": messagesId.value,
        "active": hasMessages,
        "messages": messages.value
      }, {
        message: slots.message
      }), (_d = slots.details) == null ? void 0 : _d.call(slots, slotProps.value)])]);
    });
    return {
      reset,
      resetValidation,
      validate,
      isValid,
      errorMessages
    };
  }
});
const VChipGroupSymbol = Symbol.for("vuetify:v-chip-group");
const makeVChipGroupProps = propsFactory({
  column: Boolean,
  filter: Boolean,
  valueComparator: {
    type: Function,
    default: deepEqual
  },
  ...makeVSlideGroupProps(),
  ...makeComponentProps(),
  ...makeGroupProps({
    selectedClass: "v-chip--selected"
  }),
  ...makeTagProps(),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "tonal"
  })
}, "VChipGroup");
genericComponent()({
  name: "VChipGroup",
  props: makeVChipGroupProps(),
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
      isSelected,
      select,
      next,
      prev,
      selected
    } = useGroup(props, VChipGroupSymbol);
    provideDefaults({
      VChip: {
        color: toRef(props, "color"),
        disabled: toRef(props, "disabled"),
        filter: toRef(props, "filter"),
        variant: toRef(props, "variant")
      }
    });
    useRender(() => {
      const slideGroupProps = VSlideGroup.filterProps(props);
      return createVNode(VSlideGroup, mergeProps(slideGroupProps, {
        "class": ["v-chip-group", {
          "v-chip-group--column": props.column
        }, themeClasses.value, props.class],
        "style": props.style
      }), {
        default: () => {
          var _a;
          return [(_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected,
            select,
            next,
            prev,
            selected: selected.value
          })];
        }
      });
    });
    return {};
  }
});
const makeVChipProps = propsFactory({
  activeClass: String,
  appendAvatar: String,
  appendIcon: IconValue,
  closable: Boolean,
  closeIcon: {
    type: IconValue,
    default: "$delete"
  },
  closeLabel: {
    type: String,
    default: "$vuetify.close"
  },
  draggable: Boolean,
  filter: Boolean,
  filterIcon: {
    type: String,
    default: "$complete"
  },
  label: Boolean,
  link: {
    type: Boolean,
    default: void 0
  },
  pill: Boolean,
  prependAvatar: String,
  prependIcon: IconValue,
  ripple: {
    type: [Boolean, Object],
    default: true
  },
  text: String,
  modelValue: {
    type: Boolean,
    default: true
  },
  onClick: EventProp(),
  onClickOnce: EventProp(),
  ...makeBorderProps(),
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeElevationProps(),
  ...makeGroupItemProps(),
  ...makeRoundedProps(),
  ...makeRouterProps(),
  ...makeSizeProps(),
  ...makeTagProps({
    tag: "span"
  }),
  ...makeThemeProps(),
  ...makeVariantProps({
    variant: "tonal"
  })
}, "VChip");
const VChip = genericComponent()({
  name: "VChip",
  directives: {
    Ripple
  },
  props: makeVChipProps(),
  emits: {
    "click:close": (e) => true,
    "update:modelValue": (value) => true,
    "group:selected": (val) => true,
    click: (e) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const {
      borderClasses
    } = useBorder(props);
    const {
      colorClasses,
      colorStyles,
      variantClasses
    } = useVariant(props);
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
      sizeClasses
    } = useSize(props);
    const {
      themeClasses
    } = provideTheme(props);
    const isActive = useProxiedModel(props, "modelValue");
    const group = useGroupItem(props, VChipGroupSymbol, false);
    const link = useLink(props, attrs);
    const isLink = computed(() => props.link !== false && link.isLink.value);
    const isClickable = computed(() => !props.disabled && props.link !== false && (!!group || props.link || link.isClickable.value));
    const closeProps = computed(() => ({
      "aria-label": t(props.closeLabel),
      onClick(e) {
        e.preventDefault();
        e.stopPropagation();
        isActive.value = false;
        emit("click:close", e);
      }
    }));
    function onClick(e) {
      var _a;
      emit("click", e);
      if (!isClickable.value) return;
      (_a = link.navigate) == null ? void 0 : _a.call(link, e);
      group == null ? void 0 : group.toggle();
    }
    function onKeyDown(e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onClick(e);
      }
    }
    return () => {
      const Tag = link.isLink.value ? "a" : props.tag;
      const hasAppendMedia = !!(props.appendIcon || props.appendAvatar);
      const hasAppend = !!(hasAppendMedia || slots.append);
      const hasClose = !!(slots.close || props.closable);
      const hasFilter = !!(slots.filter || props.filter) && group;
      const hasPrependMedia = !!(props.prependIcon || props.prependAvatar);
      const hasPrepend = !!(hasPrependMedia || slots.prepend);
      const hasColor = !group || group.isSelected.value;
      return isActive.value && withDirectives(createVNode(Tag, {
        "class": ["v-chip", {
          "v-chip--disabled": props.disabled,
          "v-chip--label": props.label,
          "v-chip--link": isClickable.value,
          "v-chip--filter": hasFilter,
          "v-chip--pill": props.pill
        }, themeClasses.value, borderClasses.value, hasColor ? colorClasses.value : void 0, densityClasses.value, elevationClasses.value, roundedClasses.value, sizeClasses.value, variantClasses.value, group == null ? void 0 : group.selectedClass.value, props.class],
        "style": [hasColor ? colorStyles.value : void 0, props.style],
        "disabled": props.disabled || void 0,
        "draggable": props.draggable,
        "href": link.href.value,
        "tabindex": isClickable.value ? 0 : void 0,
        "onClick": onClick,
        "onKeydown": isClickable.value && !isLink.value && onKeyDown
      }, {
        default: () => {
          var _a;
          return [genOverlays(isClickable.value, "v-chip"), hasFilter && createVNode(VExpandXTransition, {
            "key": "filter"
          }, {
            default: () => [withDirectives(createVNode("div", {
              "class": "v-chip__filter"
            }, [!slots.filter ? createVNode(VIcon, {
              "key": "filter-icon",
              "icon": props.filterIcon
            }, null) : createVNode(VDefaultsProvider, {
              "key": "filter-defaults",
              "disabled": !props.filterIcon,
              "defaults": {
                VIcon: {
                  icon: props.filterIcon
                }
              }
            }, slots.filter)]), [[vShow, group.isSelected.value]])]
          }), hasPrepend && createVNode("div", {
            "key": "prepend",
            "class": "v-chip__prepend"
          }, [!slots.prepend ? createVNode(Fragment, null, [props.prependIcon && createVNode(VIcon, {
            "key": "prepend-icon",
            "icon": props.prependIcon,
            "start": true
          }, null), props.prependAvatar && createVNode(VAvatar, {
            "key": "prepend-avatar",
            "image": props.prependAvatar,
            "start": true
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !hasPrependMedia,
            "defaults": {
              VAvatar: {
                image: props.prependAvatar,
                start: true
              },
              VIcon: {
                icon: props.prependIcon,
                start: true
              }
            }
          }, slots.prepend)]), createVNode("div", {
            "class": "v-chip__content",
            "data-no-activator": ""
          }, [((_a = slots.default) == null ? void 0 : _a.call(slots, {
            isSelected: group == null ? void 0 : group.isSelected.value,
            selectedClass: group == null ? void 0 : group.selectedClass.value,
            select: group == null ? void 0 : group.select,
            toggle: group == null ? void 0 : group.toggle,
            value: group == null ? void 0 : group.value.value,
            disabled: props.disabled
          })) ?? props.text]), hasAppend && createVNode("div", {
            "key": "append",
            "class": "v-chip__append"
          }, [!slots.append ? createVNode(Fragment, null, [props.appendIcon && createVNode(VIcon, {
            "key": "append-icon",
            "end": true,
            "icon": props.appendIcon
          }, null), props.appendAvatar && createVNode(VAvatar, {
            "key": "append-avatar",
            "end": true,
            "image": props.appendAvatar
          }, null)]) : createVNode(VDefaultsProvider, {
            "key": "append-defaults",
            "disabled": !hasAppendMedia,
            "defaults": {
              VAvatar: {
                end: true,
                image: props.appendAvatar
              },
              VIcon: {
                end: true,
                icon: props.appendIcon
              }
            }
          }, slots.append)]), hasClose && createVNode("button", mergeProps({
            "key": "close",
            "class": "v-chip__close",
            "type": "button"
          }, closeProps.value), [!slots.close ? createVNode(VIcon, {
            "key": "close-icon",
            "icon": props.closeIcon,
            "size": "x-small"
          }, null) : createVNode(VDefaultsProvider, {
            "key": "close-defaults",
            "defaults": {
              VIcon: {
                icon: props.closeIcon,
                size: "x-small"
              }
            }
          }, slots.close)])];
        }
      }), [[resolveDirective("ripple"), isClickable.value && props.ripple, null]]);
    };
  }
});
const makeVMenuProps = propsFactory({
  // TODO
  // disableKeys: Boolean,
  id: String,
  ...omit(makeVOverlayProps({
    closeDelay: 250,
    closeOnContentClick: true,
    locationStrategy: "connected",
    openDelay: 300,
    scrim: false,
    scrollStrategy: "reposition",
    transition: {
      component: VDialogTransition
    }
  }), ["absolute"])
}, "VMenu");
const VMenu = genericComponent()({
  name: "VMenu",
  props: makeVMenuProps(),
  emits: {
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const isActive = useProxiedModel(props, "modelValue");
    const {
      scopeId
    } = useScopeId();
    const uid = getUid();
    const id = computed(() => props.id || `v-menu-${uid}`);
    const overlay = ref();
    const parent = inject(VMenuSymbol, null);
    const openChildren = shallowRef(0);
    provide(VMenuSymbol, {
      register() {
        ++openChildren.value;
      },
      unregister() {
        --openChildren.value;
      },
      closeParents(e) {
        setTimeout(() => {
          if (!openChildren.value && !props.persistent && (e == null || e && !isClickInsideElement(e, overlay.value.contentEl))) {
            isActive.value = false;
            parent == null ? void 0 : parent.closeParents();
          }
        }, 40);
      }
    });
    async function onFocusIn(e) {
      var _a, _b, _c;
      const before = e.relatedTarget;
      const after = e.target;
      await nextTick();
      if (isActive.value && before !== after && ((_a = overlay.value) == null ? void 0 : _a.contentEl) && // We're the topmost menu
      ((_b = overlay.value) == null ? void 0 : _b.globalTop) && // It isn't the document or the menu body
      ![void 0, overlay.value.contentEl].includes(after) && // It isn't inside the menu body
      !overlay.value.contentEl.contains(after)) {
        const focusable = focusableChildren(overlay.value.contentEl);
        (_c = focusable[0]) == null ? void 0 : _c.focus();
      }
    }
    watch(isActive, (val) => {
      if (val) {
        parent == null ? void 0 : parent.register();
        (void 0).addEventListener("focusin", onFocusIn, {
          once: true
        });
      } else {
        parent == null ? void 0 : parent.unregister();
        (void 0).removeEventListener("focusin", onFocusIn);
      }
    });
    function onClickOutside(e) {
      parent == null ? void 0 : parent.closeParents(e);
    }
    function onKeydown(e) {
      var _a, _b, _c;
      if (props.disabled) return;
      if (e.key === "Tab" || e.key === "Enter" && !props.closeOnContentClick) {
        if (e.key === "Enter" && (e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLInputElement && !!e.target.closest("form"))) return;
        if (e.key === "Enter") e.preventDefault();
        const nextElement = getNextElement(focusableChildren((_a = overlay.value) == null ? void 0 : _a.contentEl, false), e.shiftKey ? "prev" : "next", (el) => el.tabIndex >= 0);
        if (!nextElement) {
          isActive.value = false;
          (_c = (_b = overlay.value) == null ? void 0 : _b.activatorEl) == null ? void 0 : _c.focus();
        }
      } else if (["Enter", " "].includes(e.key) && props.closeOnContentClick) {
        isActive.value = false;
        parent == null ? void 0 : parent.closeParents();
      }
    }
    function onActivatorKeydown(e) {
      var _a;
      if (props.disabled) return;
      const el = (_a = overlay.value) == null ? void 0 : _a.contentEl;
      if (el && isActive.value) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          focusChild(el, "next");
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          focusChild(el, "prev");
        }
      } else if (["ArrowDown", "ArrowUp"].includes(e.key)) {
        isActive.value = true;
        e.preventDefault();
        setTimeout(() => setTimeout(() => onActivatorKeydown(e)));
      }
    }
    const activatorProps = computed(() => mergeProps({
      "aria-haspopup": "menu",
      "aria-expanded": String(isActive.value),
      "aria-owns": id.value,
      onKeydown: onActivatorKeydown
    }, props.activatorProps));
    useRender(() => {
      const overlayProps = VOverlay.filterProps(props);
      return createVNode(VOverlay, mergeProps({
        "ref": overlay,
        "id": id.value,
        "class": ["v-menu", props.class],
        "style": props.style
      }, overlayProps, {
        "modelValue": isActive.value,
        "onUpdate:modelValue": ($event) => isActive.value = $event,
        "absolute": true,
        "activatorProps": activatorProps.value,
        "onClick:outside": onClickOutside,
        "onKeydown": onKeydown
      }, scopeId), {
        activator: slots.activator,
        default: function() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(VDefaultsProvider, {
            "root": "VMenu"
          }, {
            default: () => {
              var _a;
              return [(_a = slots.default) == null ? void 0 : _a.call(slots, ...args)];
            }
          });
        }
      });
    });
    return forwardRefs({
      id,
      ΨopenChildren: openChildren
    }, overlay);
  }
});
const makeVCounterProps = propsFactory({
  active: Boolean,
  disabled: Boolean,
  max: [Number, String],
  value: {
    type: [Number, String],
    default: 0
  },
  ...makeComponentProps(),
  ...makeTransitionProps({
    transition: {
      component: VSlideYTransition
    }
  })
}, "VCounter");
const VCounter = genericComponent()({
  name: "VCounter",
  functional: true,
  props: makeVCounterProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const counter = computed(() => {
      return props.max ? `${props.value} / ${props.max}` : String(props.value);
    });
    useRender(() => createVNode(MaybeTransition, {
      "transition": props.transition
    }, {
      default: () => [withDirectives(createVNode("div", {
        "class": ["v-counter", {
          "text-error": props.max && !props.disabled && parseFloat(props.value) > parseFloat(props.max)
        }, props.class],
        "style": props.style
      }, [slots.default ? slots.default({
        counter: counter.value,
        max: props.max,
        value: props.value
      }) : counter.value]), [[vShow, props.active]])]
    }));
    return {};
  }
});
const makeVFieldLabelProps = propsFactory({
  floating: Boolean,
  ...makeComponentProps()
}, "VFieldLabel");
const VFieldLabel = genericComponent()({
  name: "VFieldLabel",
  props: makeVFieldLabelProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => createVNode(VLabel, {
      "class": ["v-field-label", {
        "v-field-label--floating": props.floating
      }, props.class],
      "style": props.style,
      "aria-hidden": props.floating || void 0
    }, slots));
    return {};
  }
});
const allowedVariants = ["underlined", "outlined", "filled", "solo", "solo-inverted", "solo-filled", "plain"];
const makeVFieldProps = propsFactory({
  appendInnerIcon: IconValue,
  bgColor: String,
  clearable: Boolean,
  clearIcon: {
    type: IconValue,
    default: "$clear"
  },
  active: Boolean,
  centerAffix: {
    type: Boolean,
    default: void 0
  },
  color: String,
  baseColor: String,
  dirty: Boolean,
  disabled: {
    type: Boolean,
    default: null
  },
  error: Boolean,
  flat: Boolean,
  label: String,
  persistentClear: Boolean,
  prependInnerIcon: IconValue,
  reverse: Boolean,
  singleLine: Boolean,
  variant: {
    type: String,
    default: "filled",
    validator: (v) => allowedVariants.includes(v)
  },
  "onClick:clear": EventProp(),
  "onClick:appendInner": EventProp(),
  "onClick:prependInner": EventProp(),
  ...makeComponentProps(),
  ...makeLoaderProps(),
  ...makeRoundedProps(),
  ...makeThemeProps()
}, "VField");
const VField = genericComponent()({
  name: "VField",
  inheritAttrs: false,
  props: {
    id: String,
    ...makeFocusProps(),
    ...makeVFieldProps()
  },
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      themeClasses
    } = provideTheme(props);
    const {
      loaderClasses
    } = useLoader(props);
    const {
      focusClasses,
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const {
      InputIcon
    } = useInputIcon(props);
    const {
      roundedClasses
    } = useRounded(props);
    const {
      rtlClasses
    } = useRtl();
    const isActive = computed(() => props.dirty || props.active);
    const hasLabel = computed(() => !props.singleLine && !!(props.label || slots.label));
    const uid = getUid();
    const id = computed(() => props.id || `input-${uid}`);
    const messagesId = computed(() => `${id.value}-messages`);
    const labelRef = ref();
    const floatingLabelRef = ref();
    const controlRef = ref();
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(computed(() => {
      return props.error || props.disabled ? void 0 : isActive.value && isFocused.value ? props.color : props.baseColor;
    }));
    watch(isActive, (val) => {
      if (hasLabel.value) {
        const el = labelRef.value.$el;
        const targetEl = floatingLabelRef.value.$el;
        requestAnimationFrame(() => {
          const rect = nullifyTransforms(el);
          const targetRect = targetEl.getBoundingClientRect();
          const x = targetRect.x - rect.x;
          const y = targetRect.y - rect.y - (rect.height / 2 - targetRect.height / 2);
          const targetWidth = targetRect.width / 0.75;
          const width = Math.abs(targetWidth - rect.width) > 1 ? {
            maxWidth: convertToUnit(targetWidth)
          } : void 0;
          const style = getComputedStyle(el);
          const targetStyle = getComputedStyle(targetEl);
          const duration = parseFloat(style.transitionDuration) * 1e3 || 150;
          const scale = parseFloat(targetStyle.getPropertyValue("--v-field-label-scale"));
          const color = targetStyle.getPropertyValue("color");
          el.style.visibility = "visible";
          targetEl.style.visibility = "hidden";
          animate(el, {
            transform: `translate(${x}px, ${y}px) scale(${scale})`,
            color,
            ...width
          }, {
            duration,
            easing: standardEasing,
            direction: val ? "normal" : "reverse"
          }).finished.then(() => {
            el.style.removeProperty("visibility");
            targetEl.style.removeProperty("visibility");
          });
        });
      }
    }, {
      flush: "post"
    });
    const slotProps = computed(() => ({
      isActive,
      isFocused,
      controlRef,
      blur,
      focus
    }));
    function onClick(e) {
      if (e.target !== (void 0).activeElement) {
        e.preventDefault();
      }
    }
    function onKeydownClear(e) {
      var _a;
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault();
      e.stopPropagation();
      (_a = props["onClick:clear"]) == null ? void 0 : _a.call(props, new MouseEvent("click"));
    }
    useRender(() => {
      var _a, _b, _c;
      const isOutlined = props.variant === "outlined";
      const hasPrepend = !!(slots["prepend-inner"] || props.prependInnerIcon);
      const hasClear = !!(props.clearable || slots.clear);
      const hasAppend = !!(slots["append-inner"] || props.appendInnerIcon || hasClear);
      const label = () => slots.label ? slots.label({
        ...slotProps.value,
        label: props.label,
        props: {
          for: id.value
        }
      }) : props.label;
      return createVNode("div", mergeProps({
        "class": ["v-field", {
          "v-field--active": isActive.value,
          "v-field--appended": hasAppend,
          "v-field--center-affix": props.centerAffix ?? !isPlainOrUnderlined.value,
          "v-field--disabled": props.disabled,
          "v-field--dirty": props.dirty,
          "v-field--error": props.error,
          "v-field--flat": props.flat,
          "v-field--has-background": !!props.bgColor,
          "v-field--persistent-clear": props.persistentClear,
          "v-field--prepended": hasPrepend,
          "v-field--reverse": props.reverse,
          "v-field--single-line": props.singleLine,
          "v-field--no-label": !label(),
          [`v-field--variant-${props.variant}`]: true
        }, themeClasses.value, backgroundColorClasses.value, focusClasses.value, loaderClasses.value, roundedClasses.value, rtlClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style],
        "onClick": onClick
      }, attrs), [createVNode("div", {
        "class": "v-field__overlay"
      }, null), createVNode(LoaderSlot, {
        "name": "v-field",
        "active": !!props.loading,
        "color": props.error ? "error" : typeof props.loading === "string" ? props.loading : props.color
      }, {
        default: slots.loader
      }), hasPrepend && createVNode("div", {
        "key": "prepend",
        "class": "v-field__prepend-inner"
      }, [props.prependInnerIcon && createVNode(InputIcon, {
        "key": "prepend-icon",
        "name": "prependInner"
      }, null), (_a = slots["prepend-inner"]) == null ? void 0 : _a.call(slots, slotProps.value)]), createVNode("div", {
        "class": "v-field__field",
        "data-no-activator": ""
      }, [["filled", "solo", "solo-inverted", "solo-filled"].includes(props.variant) && hasLabel.value && createVNode(VFieldLabel, {
        "key": "floating-label",
        "ref": floatingLabelRef,
        "class": [textColorClasses.value],
        "floating": true,
        "for": id.value,
        "style": textColorStyles.value
      }, {
        default: () => [label()]
      }), createVNode(VFieldLabel, {
        "ref": labelRef,
        "for": id.value
      }, {
        default: () => [label()]
      }), (_b = slots.default) == null ? void 0 : _b.call(slots, {
        ...slotProps.value,
        props: {
          id: id.value,
          class: "v-field__input",
          "aria-describedby": messagesId.value
        },
        focus,
        blur
      })]), hasClear && createVNode(VExpandXTransition, {
        "key": "clear"
      }, {
        default: () => [withDirectives(createVNode("div", {
          "class": "v-field__clearable",
          "onMousedown": (e) => {
            e.preventDefault();
            e.stopPropagation();
          }
        }, [createVNode(VDefaultsProvider, {
          "defaults": {
            VIcon: {
              icon: props.clearIcon
            }
          }
        }, {
          default: () => [slots.clear ? slots.clear({
            ...slotProps.value,
            props: {
              onKeydown: onKeydownClear,
              onFocus: focus,
              onBlur: blur,
              onClick: props["onClick:clear"]
            }
          }) : createVNode(InputIcon, {
            "name": "clear",
            "onKeydown": onKeydownClear,
            "onFocus": focus,
            "onBlur": blur
          }, null)]
        })]), [[vShow, props.dirty]])]
      }), hasAppend && createVNode("div", {
        "key": "append",
        "class": "v-field__append-inner"
      }, [(_c = slots["append-inner"]) == null ? void 0 : _c.call(slots, slotProps.value), props.appendInnerIcon && createVNode(InputIcon, {
        "key": "append-icon",
        "name": "appendInner"
      }, null)]), createVNode("div", {
        "class": ["v-field__outline", textColorClasses.value],
        "style": textColorStyles.value
      }, [isOutlined && createVNode(Fragment, null, [createVNode("div", {
        "class": "v-field__outline__start"
      }, null), hasLabel.value && createVNode("div", {
        "class": "v-field__outline__notch"
      }, [createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label()]
      })]), createVNode("div", {
        "class": "v-field__outline__end"
      }, null)]), isPlainOrUnderlined.value && hasLabel.value && createVNode(VFieldLabel, {
        "ref": floatingLabelRef,
        "floating": true,
        "for": id.value
      }, {
        default: () => [label()]
      })])]);
    });
    return {
      controlRef
    };
  }
});
function filterFieldProps(attrs) {
  const keys = Object.keys(VField.props).filter((k) => !isOn(k) && k !== "class" && k !== "style");
  return pick(attrs, keys);
}
const activeTypes = ["color", "file", "time", "date", "datetime-local", "week", "month"];
const makeVTextFieldProps = propsFactory({
  autofocus: Boolean,
  counter: [Boolean, Number, String],
  counterValue: [Number, Function],
  prefix: String,
  placeholder: String,
  persistentPlaceholder: Boolean,
  persistentCounter: Boolean,
  suffix: String,
  role: String,
  type: {
    type: String,
    default: "text"
  },
  modelModifiers: Object,
  ...makeVInputProps(),
  ...makeVFieldProps()
}, "VTextField");
const VTextField = genericComponent()({
  name: "VTextField",
  directives: {
    Intersect
  },
  inheritAttrs: false,
  props: makeVTextFieldProps(),
  emits: {
    "click:control": (e) => true,
    "mousedown:control": (e) => true,
    "update:focused": (focused) => true,
    "update:modelValue": (val) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const model = useProxiedModel(props, "modelValue");
    const {
      isFocused,
      focus,
      blur
    } = useFocus(props);
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : (model.value ?? "").toString().length;
    });
    const max = computed(() => {
      if (attrs.maxlength) return attrs.maxlength;
      if (!props.counter || typeof props.counter !== "number" && typeof props.counter !== "string") return void 0;
      return props.counter;
    });
    const isPlainOrUnderlined = computed(() => ["plain", "underlined"].includes(props.variant));
    function onIntersect(isIntersecting, entries) {
      var _a, _b;
      if (!props.autofocus || !isIntersecting) return;
      (_b = (_a = entries[0].target) == null ? void 0 : _a.focus) == null ? void 0 : _b.call(_a);
    }
    const vInputRef = ref();
    const vFieldRef = ref();
    const inputRef = ref();
    const isActive = computed(() => activeTypes.includes(props.type) || props.persistentPlaceholder || isFocused.value || props.active);
    function onFocus() {
      var _a;
      if (inputRef.value !== (void 0).activeElement) {
        (_a = inputRef.value) == null ? void 0 : _a.focus();
      }
      if (!isFocused.value) focus();
    }
    function onControlMousedown(e) {
      emit("mousedown:control", e);
      if (e.target === inputRef.value) return;
      onFocus();
      e.preventDefault();
    }
    function onControlClick(e) {
      onFocus();
      emit("click:control", e);
    }
    function onClear(e) {
      e.stopPropagation();
      onFocus();
      nextTick(() => {
        model.value = null;
        callEvent(props["onClick:clear"], e);
      });
    }
    function onInput(e) {
      var _a;
      const el = e.target;
      model.value = el.value;
      if (((_a = props.modelModifiers) == null ? void 0 : _a.trim) && ["text", "search", "password", "tel", "url"].includes(props.type)) {
        const caretPosition = [el.selectionStart, el.selectionEnd];
        nextTick(() => {
          el.selectionStart = caretPosition[0];
          el.selectionEnd = caretPosition[1];
        });
      }
    }
    useRender(() => {
      const hasCounter = !!(slots.counter || props.counter !== false && props.counter != null);
      const hasDetails = !!(hasCounter || slots.details);
      const [rootAttrs, inputAttrs] = filterInputAttrs(attrs);
      const {
        modelValue: _,
        ...inputProps
      } = VInput.filterProps(props);
      const fieldProps = filterFieldProps(props);
      return createVNode(VInput, mergeProps({
        "ref": vInputRef,
        "modelValue": model.value,
        "onUpdate:modelValue": ($event) => model.value = $event,
        "class": ["v-text-field", {
          "v-text-field--prefixed": props.prefix,
          "v-text-field--suffixed": props.suffix,
          "v-input--plain-underlined": isPlainOrUnderlined.value
        }, props.class],
        "style": props.style
      }, rootAttrs, inputProps, {
        "centerAffix": !isPlainOrUnderlined.value,
        "focused": isFocused.value
      }), {
        ...slots,
        default: (_ref2) => {
          let {
            id,
            isDisabled,
            isDirty,
            isReadonly,
            isValid
          } = _ref2;
          return createVNode(VField, mergeProps({
            "ref": vFieldRef,
            "onMousedown": onControlMousedown,
            "onClick": onControlClick,
            "onClick:clear": onClear,
            "onClick:prependInner": props["onClick:prependInner"],
            "onClick:appendInner": props["onClick:appendInner"],
            "role": props.role
          }, fieldProps, {
            "id": id.value,
            "active": isActive.value || isDirty.value,
            "dirty": isDirty.value || props.dirty,
            "disabled": isDisabled.value,
            "focused": isFocused.value,
            "error": isValid.value === false
          }), {
            ...slots,
            default: (_ref3) => {
              let {
                props: {
                  class: fieldClass,
                  ...slotProps
                }
              } = _ref3;
              const inputNode = withDirectives(createVNode("input", mergeProps({
                "ref": inputRef,
                "value": model.value,
                "onInput": onInput,
                "autofocus": props.autofocus,
                "readonly": isReadonly.value,
                "disabled": isDisabled.value,
                "name": props.name,
                "placeholder": props.placeholder,
                "size": 1,
                "type": props.type,
                "onFocus": onFocus,
                "onBlur": blur
              }, slotProps, inputAttrs), null), [[resolveDirective("intersect"), {
                handler: onIntersect
              }, null, {
                once: true
              }]]);
              return createVNode(Fragment, null, [props.prefix && createVNode("span", {
                "class": "v-text-field__prefix"
              }, [createVNode("span", {
                "class": "v-text-field__prefix__text"
              }, [props.prefix])]), slots.default ? createVNode("div", {
                "class": fieldClass,
                "data-no-activator": ""
              }, [slots.default(), inputNode]) : cloneVNode(inputNode, {
                class: fieldClass
              }), props.suffix && createVNode("span", {
                "class": "v-text-field__suffix"
              }, [createVNode("span", {
                "class": "v-text-field__suffix__text"
              }, [props.suffix])])]);
            }
          });
        },
        details: hasDetails ? (slotProps) => {
          var _a;
          return createVNode(Fragment, null, [(_a = slots.details) == null ? void 0 : _a.call(slots, slotProps), hasCounter && createVNode(Fragment, null, [createVNode("span", null, null), createVNode(VCounter, {
            "active": props.persistentCounter || isFocused.value,
            "value": counterValue.value,
            "max": max.value,
            "disabled": props.disabled
          }, slots.counter)])]);
        } : void 0
      });
    });
    return forwardRefs({}, vInputRef, vFieldRef, inputRef);
  }
});
const makeVVirtualScrollItemProps = propsFactory({
  renderless: Boolean,
  ...makeComponentProps()
}, "VVirtualScrollItem");
const VVirtualScrollItem = genericComponent()({
  name: "VVirtualScrollItem",
  inheritAttrs: false,
  props: makeVVirtualScrollItemProps(),
  emits: {
    "update:height": (height) => true
  },
  setup(props, _ref) {
    let {
      attrs,
      emit,
      slots
    } = _ref;
    const {
      resizeRef,
      contentRect
    } = useResizeObserver();
    watch(() => {
      var _a;
      return (_a = contentRect.value) == null ? void 0 : _a.height;
    }, (height) => {
      if (height != null) emit("update:height", height);
    });
    useRender(() => {
      var _a, _b;
      return props.renderless ? createVNode(Fragment, null, [(_a = slots.default) == null ? void 0 : _a.call(slots, {
        itemRef: resizeRef
      })]) : createVNode("div", mergeProps({
        "ref": resizeRef,
        "class": ["v-virtual-scroll__item", props.class],
        "style": props.style
      }, attrs), [(_b = slots.default) == null ? void 0 : _b.call(slots)]);
    });
  }
});
const UP = -1;
const DOWN = 1;
const BUFFER_PX = 100;
const makeVirtualProps = propsFactory({
  itemHeight: {
    type: [Number, String],
    default: null
  },
  height: [Number, String]
}, "virtual");
function useVirtual(props, items) {
  const display = useDisplay();
  const itemHeight = shallowRef(0);
  watchEffect(() => {
    itemHeight.value = parseFloat(props.itemHeight || 0);
  });
  const first = shallowRef(0);
  const last = shallowRef(Math.ceil(
    // Assume 16px items filling the entire screen height if
    // not provided. This is probably incorrect but it minimises
    // the chance of ending up with empty space at the bottom.
    // The default value is set here to avoid poisoning getSize()
    (parseInt(props.height) || display.height.value) / (itemHeight.value || 16)
  ) || 1);
  const paddingTop = shallowRef(0);
  const paddingBottom = shallowRef(0);
  const containerRef = ref();
  const markerRef = ref();
  let markerOffset = 0;
  const {
    resizeRef,
    contentRect
  } = useResizeObserver();
  watchEffect(() => {
    resizeRef.value = containerRef.value;
  });
  const viewportHeight = computed(() => {
    var _a;
    return containerRef.value === (void 0).documentElement ? display.height.value : ((_a = contentRect.value) == null ? void 0 : _a.height) || parseInt(props.height) || 0;
  });
  const hasInitialRender = computed(() => {
    return !!(containerRef.value && markerRef.value && viewportHeight.value && itemHeight.value);
  });
  let sizes = Array.from({
    length: items.value.length
  });
  let offsets = Array.from({
    length: items.value.length
  });
  const updateTime = shallowRef(0);
  let targetScrollIndex = -1;
  function getSize(index) {
    return sizes[index] || itemHeight.value;
  }
  const updateOffsets = debounce(() => {
    const start = performance.now();
    offsets[0] = 0;
    const length = items.value.length;
    for (let i = 1; i <= length - 1; i++) {
      offsets[i] = (offsets[i - 1] || 0) + getSize(i - 1);
    }
    updateTime.value = Math.max(updateTime.value, performance.now() - start);
  }, updateTime);
  const unwatch = watch(hasInitialRender, (v) => {
    if (!v) return;
    unwatch();
    markerOffset = markerRef.value.offsetTop;
    updateOffsets.immediate();
    calculateVisibleItems();
    if (!~targetScrollIndex) return;
    nextTick(() => {
    });
  });
  onScopeDispose(() => {
    updateOffsets.clear();
  });
  function handleItemResize(index, height) {
    const prevHeight = sizes[index];
    const prevMinHeight = itemHeight.value;
    itemHeight.value = prevMinHeight ? Math.min(itemHeight.value, height) : height;
    if (prevHeight !== height || prevMinHeight !== itemHeight.value) {
      sizes[index] = height;
      updateOffsets();
    }
  }
  function calculateOffset(index) {
    index = clamp(index, 0, items.value.length - 1);
    return offsets[index] || 0;
  }
  function calculateIndex(scrollTop) {
    return binaryClosest(offsets, scrollTop);
  }
  let lastScrollTop = 0;
  let scrollVelocity = 0;
  let lastScrollTime = 0;
  watch(viewportHeight, (val, oldVal) => {
    if (oldVal) {
      calculateVisibleItems();
      if (val < oldVal) {
        requestAnimationFrame(() => {
          scrollVelocity = 0;
          calculateVisibleItems();
        });
      }
    }
  });
  function handleScroll() {
    if (!containerRef.value || !markerRef.value) return;
    const scrollTop = containerRef.value.scrollTop;
    const scrollTime = performance.now();
    const scrollDeltaT = scrollTime - lastScrollTime;
    if (scrollDeltaT > 500) {
      scrollVelocity = Math.sign(scrollTop - lastScrollTop);
      markerOffset = markerRef.value.offsetTop;
    } else {
      scrollVelocity = scrollTop - lastScrollTop;
    }
    lastScrollTop = scrollTop;
    lastScrollTime = scrollTime;
    calculateVisibleItems();
  }
  function handleScrollend() {
    if (!containerRef.value || !markerRef.value) return;
    scrollVelocity = 0;
    lastScrollTime = 0;
    calculateVisibleItems();
  }
  let raf = -1;
  function calculateVisibleItems() {
    cancelAnimationFrame(raf);
    raf = requestAnimationFrame(_calculateVisibleItems);
  }
  function _calculateVisibleItems() {
    if (!containerRef.value || !viewportHeight.value) return;
    const scrollTop = lastScrollTop - markerOffset;
    const direction = Math.sign(scrollVelocity);
    const startPx = Math.max(0, scrollTop - BUFFER_PX);
    const start = clamp(calculateIndex(startPx), 0, items.value.length);
    const endPx = scrollTop + viewportHeight.value + BUFFER_PX;
    const end = clamp(calculateIndex(endPx) + 1, start + 1, items.value.length);
    if (
      // Only update the side we're scrolling towards,
      // the other side will be updated incidentally
      (direction !== UP || start < first.value) && (direction !== DOWN || end > last.value)
    ) {
      const topOverflow = calculateOffset(first.value) - calculateOffset(start);
      const bottomOverflow = calculateOffset(end) - calculateOffset(last.value);
      const bufferOverflow = Math.max(topOverflow, bottomOverflow);
      if (bufferOverflow > BUFFER_PX) {
        first.value = start;
        last.value = end;
      } else {
        if (start <= 0) first.value = start;
        if (end >= items.value.length) last.value = end;
      }
    }
    paddingTop.value = calculateOffset(first.value);
    paddingBottom.value = calculateOffset(items.value.length) - calculateOffset(last.value);
  }
  function scrollToIndex(index) {
    const offset = calculateOffset(index);
    if (!containerRef.value || index && !offset) {
      targetScrollIndex = index;
    } else {
      containerRef.value.scrollTop = offset;
    }
  }
  const computedItems = computed(() => {
    return items.value.slice(first.value, last.value).map((item, index) => ({
      raw: item,
      index: index + first.value
    }));
  });
  watch(items, () => {
    sizes = Array.from({
      length: items.value.length
    });
    offsets = Array.from({
      length: items.value.length
    });
    updateOffsets.immediate();
    calculateVisibleItems();
  }, {
    deep: true
  });
  return {
    containerRef,
    markerRef,
    computedItems,
    paddingTop,
    paddingBottom,
    scrollToIndex,
    handleScroll,
    handleScrollend,
    handleItemResize
  };
}
function binaryClosest(arr, val) {
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;
  let item = null;
  let target = -1;
  if (arr[high] < val) {
    return high;
  }
  while (low <= high) {
    mid = low + high >> 1;
    item = arr[mid];
    if (item > val) {
      high = mid - 1;
    } else if (item < val) {
      target = mid;
      low = mid + 1;
    } else if (item === val) {
      return mid;
    } else {
      return low;
    }
  }
  return target;
}
const makeVVirtualScrollProps = propsFactory({
  items: {
    type: Array,
    default: () => []
  },
  renderless: Boolean,
  ...makeVirtualProps(),
  ...makeComponentProps(),
  ...makeDimensionProps()
}, "VVirtualScroll");
const VVirtualScroll = genericComponent()({
  name: "VVirtualScroll",
  props: makeVVirtualScrollProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    getCurrentInstance("VVirtualScroll");
    const {
      dimensionStyles
    } = useDimension(props);
    const {
      containerRef,
      markerRef,
      handleScroll,
      handleScrollend,
      handleItemResize,
      scrollToIndex,
      paddingTop,
      paddingBottom,
      computedItems
    } = useVirtual(props, toRef(props, "items"));
    useToggleScope(() => props.renderless, () => {
      function handleListeners() {
        var _a, _b;
        let add = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
        const method = add ? "addEventListener" : "removeEventListener";
        if (containerRef.value === (void 0).documentElement) {
          (void 0)[method]("scroll", handleScroll, {
            passive: true
          });
          (void 0)[method]("scrollend", handleScrollend);
        } else {
          (_a = containerRef.value) == null ? void 0 : _a[method]("scroll", handleScroll, {
            passive: true
          });
          (_b = containerRef.value) == null ? void 0 : _b[method]("scrollend", handleScrollend);
        }
      }
      onScopeDispose(handleListeners);
    });
    useRender(() => {
      const children = computedItems.value.map((item) => createVNode(VVirtualScrollItem, {
        "key": item.index,
        "renderless": props.renderless,
        "onUpdate:height": (height) => handleItemResize(item.index, height)
      }, {
        default: (slotProps) => {
          var _a;
          return (_a = slots.default) == null ? void 0 : _a.call(slots, {
            item: item.raw,
            index: item.index,
            ...slotProps
          });
        }
      }));
      return props.renderless ? createVNode(Fragment, null, [createVNode("div", {
        "ref": markerRef,
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingTop: convertToUnit(paddingTop.value)
        }
      }, null), children, createVNode("div", {
        "class": "v-virtual-scroll__spacer",
        "style": {
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, null)]) : createVNode("div", {
        "ref": containerRef,
        "class": ["v-virtual-scroll", props.class],
        "onScrollPassive": handleScroll,
        "onScrollend": handleScrollend,
        "style": [dimensionStyles.value, props.style]
      }, [createVNode("div", {
        "ref": markerRef,
        "class": "v-virtual-scroll__container",
        "style": {
          paddingTop: convertToUnit(paddingTop.value),
          paddingBottom: convertToUnit(paddingBottom.value)
        }
      }, [children])]);
    });
    return {
      scrollToIndex
    };
  }
});
function useScrolling(listRef, textFieldRef) {
  const isScrolling = shallowRef(false);
  let scrollTimeout;
  function onListScroll(e) {
    cancelAnimationFrame(scrollTimeout);
    isScrolling.value = true;
    scrollTimeout = requestAnimationFrame(() => {
      scrollTimeout = requestAnimationFrame(() => {
        isScrolling.value = false;
      });
    });
  }
  async function finishScrolling() {
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await new Promise((resolve) => {
      if (isScrolling.value) {
        const stop = watch(isScrolling, () => {
          stop();
          resolve();
        });
      } else resolve();
    });
  }
  async function onListKeydown(e) {
    var _a, _b;
    if (e.key === "Tab") {
      (_a = textFieldRef.value) == null ? void 0 : _a.focus();
    }
    if (!["PageDown", "PageUp", "Home", "End"].includes(e.key)) return;
    const el = (_b = listRef.value) == null ? void 0 : _b.$el;
    if (!el) return;
    if (e.key === "Home" || e.key === "End") {
      el.scrollTo({
        top: e.key === "Home" ? 0 : el.scrollHeight,
        behavior: "smooth"
      });
    }
    await finishScrolling();
    const children = el.querySelectorAll(":scope > :not(.v-virtual-scroll__spacer)");
    if (e.key === "PageDown" || e.key === "Home") {
      const top = el.getBoundingClientRect().top;
      for (const child of children) {
        if (child.getBoundingClientRect().top >= top) {
          child.focus();
          break;
        }
      }
    } else {
      const bottom = el.getBoundingClientRect().bottom;
      for (const child of [...children].reverse()) {
        if (child.getBoundingClientRect().bottom <= bottom) {
          child.focus();
          break;
        }
      }
    }
  }
  return {
    onListScroll,
    onListKeydown
  };
}
const makeSelectProps = propsFactory({
  chips: Boolean,
  closableChips: Boolean,
  closeText: {
    type: String,
    default: "$vuetify.close"
  },
  openText: {
    type: String,
    default: "$vuetify.open"
  },
  eager: Boolean,
  hideNoData: Boolean,
  hideSelected: Boolean,
  listProps: {
    type: Object
  },
  menu: Boolean,
  menuIcon: {
    type: IconValue,
    default: "$dropdown"
  },
  menuProps: {
    type: Object
  },
  multiple: Boolean,
  noDataText: {
    type: String,
    default: "$vuetify.noDataText"
  },
  openOnClear: Boolean,
  itemColor: String,
  ...makeItemsProps({
    itemChildren: false
  })
}, "Select");
const makeVSelectProps = propsFactory({
  ...makeSelectProps(),
  ...omit(makeVTextFieldProps({
    modelValue: null,
    role: "combobox"
  }), ["validationValue", "dirty", "appendInnerIcon"]),
  ...makeTransitionProps({
    transition: {
      component: VDialogTransition
    }
  })
}, "VSelect");
const VSelect = genericComponent()({
  name: "VSelect",
  props: makeVSelectProps(),
  emits: {
    "update:focused": (focused) => true,
    "update:modelValue": (value) => true,
    "update:menu": (ue) => true
  },
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      t
    } = useLocale();
    const vTextFieldRef = ref();
    const vMenuRef = ref();
    const vVirtualScrollRef = ref();
    const _menu = useProxiedModel(props, "menu");
    const menu = computed({
      get: () => _menu.value,
      set: (v) => {
        var _a;
        if (_menu.value && !v && ((_a = vMenuRef.value) == null ? void 0 : _a.ΨopenChildren)) return;
        _menu.value = v;
      }
    });
    const {
      items,
      transformIn,
      transformOut
    } = useItems(props);
    const model = useProxiedModel(props, "modelValue", [], (v) => transformIn(v === null ? [null] : wrapInArray(v)), (v) => {
      const transformed = transformOut(v);
      return props.multiple ? transformed : transformed[0] ?? null;
    });
    const counterValue = computed(() => {
      return typeof props.counterValue === "function" ? props.counterValue(model.value) : typeof props.counterValue === "number" ? props.counterValue : model.value.length;
    });
    const form = useForm();
    const selectedValues = computed(() => model.value.map((selection) => selection.value));
    const isFocused = shallowRef(false);
    const label = computed(() => menu.value ? props.closeText : props.openText);
    let keyboardLookupPrefix = "";
    let keyboardLookupLastTime;
    const displayItems = computed(() => {
      if (props.hideSelected) {
        return items.value.filter((item) => !model.value.some((s) => props.valueComparator(s, item)));
      }
      return items.value;
    });
    const menuDisabled = computed(() => props.hideNoData && !displayItems.value.length || props.readonly || (form == null ? void 0 : form.isReadonly.value));
    const computedMenuProps = computed(() => {
      var _a;
      return {
        ...props.menuProps,
        activatorProps: {
          ...((_a = props.menuProps) == null ? void 0 : _a.activatorProps) || {},
          "aria-haspopup": "listbox"
          // Set aria-haspopup to 'listbox'
        }
      };
    });
    const listRef = ref();
    const {
      onListScroll,
      onListKeydown
    } = useScrolling(listRef, vTextFieldRef);
    function onClear(e) {
      if (props.openOnClear) {
        menu.value = true;
      }
    }
    function onMousedownControl() {
      if (menuDisabled.value) return;
      menu.value = !menu.value;
    }
    function onKeydown(e) {
      var _a, _b;
      if (!e.key || props.readonly || (form == null ? void 0 : form.isReadonly.value)) return;
      if (["Enter", " ", "ArrowDown", "ArrowUp", "Home", "End"].includes(e.key)) {
        e.preventDefault();
      }
      if (["Enter", "ArrowDown", " "].includes(e.key)) {
        menu.value = true;
      }
      if (["Escape", "Tab"].includes(e.key)) {
        menu.value = false;
      }
      if (e.key === "Home") {
        (_a = listRef.value) == null ? void 0 : _a.focus("first");
      } else if (e.key === "End") {
        (_b = listRef.value) == null ? void 0 : _b.focus("last");
      }
      const KEYBOARD_LOOKUP_THRESHOLD = 1e3;
      function checkPrintable(e2) {
        const isPrintableChar = e2.key.length === 1;
        const noModifier = !e2.ctrlKey && !e2.metaKey && !e2.altKey;
        return isPrintableChar && noModifier;
      }
      if (props.multiple || !checkPrintable(e)) return;
      const now = performance.now();
      if (now - keyboardLookupLastTime > KEYBOARD_LOOKUP_THRESHOLD) {
        keyboardLookupPrefix = "";
      }
      keyboardLookupPrefix += e.key.toLowerCase();
      keyboardLookupLastTime = now;
      const item = items.value.find((item2) => item2.title.toLowerCase().startsWith(keyboardLookupPrefix));
      if (item !== void 0) {
        model.value = [item];
        displayItems.value.indexOf(item);
      }
    }
    function select(item) {
      let set = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true;
      if (item.props.disabled) return;
      if (props.multiple) {
        const index = model.value.findIndex((selection) => props.valueComparator(selection.value, item.value));
        const add = set == null ? !~index : set;
        if (~index) {
          const value = add ? [...model.value, item] : [...model.value];
          value.splice(index, 1);
          model.value = value;
        } else if (add) {
          model.value = [...model.value, item];
        }
      } else {
        const add = set !== false;
        model.value = add ? [item] : [];
        nextTick(() => {
          menu.value = false;
        });
      }
    }
    function onBlur(e) {
      var _a;
      if (!((_a = listRef.value) == null ? void 0 : _a.$el.contains(e.relatedTarget))) {
        menu.value = false;
      }
    }
    function onAfterLeave() {
      var _a;
      if (isFocused.value) {
        (_a = vTextFieldRef.value) == null ? void 0 : _a.focus();
      }
    }
    function onFocusin(e) {
      isFocused.value = true;
    }
    function onModelUpdate(v) {
      if (v == null) model.value = [];
      else if (matchesSelector(vTextFieldRef.value) || matchesSelector(vTextFieldRef.value)) {
        const item = items.value.find((item2) => item2.title === v);
        if (item) {
          select(item);
        }
      } else if (vTextFieldRef.value) {
        vTextFieldRef.value.value = "";
      }
    }
    watch(menu, () => {
      if (!props.hideSelected && menu.value && model.value.length) {
        displayItems.value.findIndex((item) => model.value.some((s) => props.valueComparator(s.value, item.value)));
      }
    });
    watch(() => props.items, (newVal, oldVal) => {
      if (menu.value) return;
      if (isFocused.value && !oldVal.length && newVal.length) {
        menu.value = true;
      }
    });
    useRender(() => {
      const hasChips = !!(props.chips || slots.chip);
      const hasList = !!(!props.hideNoData || displayItems.value.length || slots["prepend-item"] || slots["append-item"] || slots["no-data"]);
      const isDirty = model.value.length > 0;
      const textFieldProps = VTextField.filterProps(props);
      const placeholder = isDirty || !isFocused.value && props.label && !props.persistentPlaceholder ? void 0 : props.placeholder;
      return createVNode(VTextField, mergeProps({
        "ref": vTextFieldRef
      }, textFieldProps, {
        "modelValue": model.value.map((v) => v.props.value).join(", "),
        "onUpdate:modelValue": onModelUpdate,
        "focused": isFocused.value,
        "onUpdate:focused": ($event) => isFocused.value = $event,
        "validationValue": model.externalValue,
        "counterValue": counterValue.value,
        "dirty": isDirty,
        "class": ["v-select", {
          "v-select--active-menu": menu.value,
          "v-select--chips": !!props.chips,
          [`v-select--${props.multiple ? "multiple" : "single"}`]: true,
          "v-select--selected": model.value.length,
          "v-select--selection-slot": !!slots.selection
        }, props.class],
        "style": props.style,
        "inputmode": "none",
        "placeholder": placeholder,
        "onClick:clear": onClear,
        "onMousedown:control": onMousedownControl,
        "onBlur": onBlur,
        "onKeydown": onKeydown,
        "aria-label": t(label.value),
        "title": t(label.value)
      }), {
        ...slots,
        default: () => createVNode(Fragment, null, [createVNode(VMenu, mergeProps({
          "ref": vMenuRef,
          "modelValue": menu.value,
          "onUpdate:modelValue": ($event) => menu.value = $event,
          "activator": "parent",
          "contentClass": "v-select__content",
          "disabled": menuDisabled.value,
          "eager": props.eager,
          "maxHeight": 310,
          "openOnClick": false,
          "closeOnContentClick": false,
          "transition": props.transition,
          "onAfterLeave": onAfterLeave
        }, computedMenuProps.value), {
          default: () => [hasList && createVNode(VList, mergeProps({
            "ref": listRef,
            "selected": selectedValues.value,
            "selectStrategy": props.multiple ? "independent" : "single-independent",
            "onMousedown": (e) => e.preventDefault(),
            "onKeydown": onListKeydown,
            "onFocusin": onFocusin,
            "onScrollPassive": onListScroll,
            "tabindex": "-1",
            "aria-live": "polite",
            "color": props.itemColor ?? props.color
          }, props.listProps), {
            default: () => {
              var _a, _b, _c;
              return [(_a = slots["prepend-item"]) == null ? void 0 : _a.call(slots), !displayItems.value.length && !props.hideNoData && (((_b = slots["no-data"]) == null ? void 0 : _b.call(slots)) ?? createVNode(VListItem, {
                "title": t(props.noDataText)
              }, null)), createVNode(VVirtualScroll, {
                "ref": vVirtualScrollRef,
                "renderless": true,
                "items": displayItems.value
              }, {
                default: (_ref2) => {
                  var _a2;
                  let {
                    item,
                    index,
                    itemRef
                  } = _ref2;
                  const itemProps = mergeProps(item.props, {
                    ref: itemRef,
                    key: index,
                    onClick: () => select(item, null)
                  });
                  return ((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
                    item,
                    index,
                    props: itemProps
                  })) ?? createVNode(VListItem, mergeProps(itemProps, {
                    "role": "option"
                  }), {
                    prepend: (_ref3) => {
                      let {
                        isSelected
                      } = _ref3;
                      return createVNode(Fragment, null, [props.multiple && !props.hideSelected ? createVNode(VCheckboxBtn, {
                        "key": item.value,
                        "modelValue": isSelected,
                        "ripple": false,
                        "tabindex": "-1"
                      }, null) : void 0, item.props.prependAvatar && createVNode(VAvatar, {
                        "image": item.props.prependAvatar
                      }, null), item.props.prependIcon && createVNode(VIcon, {
                        "icon": item.props.prependIcon
                      }, null)]);
                    }
                  });
                }
              }), (_c = slots["append-item"]) == null ? void 0 : _c.call(slots)];
            }
          })]
        }), model.value.map((item, index) => {
          function onChipClose(e) {
            e.stopPropagation();
            e.preventDefault();
            select(item, false);
          }
          const slotProps = {
            "onClick:close": onChipClose,
            onKeydown(e) {
              if (e.key !== "Enter" && e.key !== " ") return;
              e.preventDefault();
              e.stopPropagation();
              onChipClose(e);
            },
            onMousedown(e) {
              e.preventDefault();
              e.stopPropagation();
            },
            modelValue: true,
            "onUpdate:modelValue": void 0
          };
          const hasSlot = hasChips ? !!slots.chip : !!slots.selection;
          const slotContent = hasSlot ? ensureValidVNode(hasChips ? slots.chip({
            item,
            index,
            props: slotProps
          }) : slots.selection({
            item,
            index
          })) : void 0;
          if (hasSlot && !slotContent) return void 0;
          return createVNode("div", {
            "key": item.value,
            "class": "v-select__selection"
          }, [hasChips ? !slots.chip ? createVNode(VChip, mergeProps({
            "key": "chip",
            "closable": props.closableChips,
            "size": "small",
            "text": item.title,
            "disabled": item.props.disabled
          }, slotProps), null) : createVNode(VDefaultsProvider, {
            "key": "chip-defaults",
            "defaults": {
              VChip: {
                closable: props.closableChips,
                size: "small",
                text: item.title
              }
            }
          }, {
            default: () => [slotContent]
          }) : slotContent ?? createVNode("span", {
            "class": "v-select__selection-text"
          }, [item.title, props.multiple && index < model.value.length - 1 && createVNode("span", {
            "class": "v-select__selection-comma"
          }, [createTextVNode(",")])])]);
        })]),
        "append-inner": function() {
          var _a;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return createVNode(Fragment, null, [(_a = slots["append-inner"]) == null ? void 0 : _a.call(slots, ...args), props.menuIcon ? createVNode(VIcon, {
            "class": "v-select__menu-icon",
            "icon": props.menuIcon
          }, null) : void 0]);
        }
      });
    });
    return forwardRefs({
      isFocused,
      menu,
      select
    }, vTextFieldRef);
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent(VCard, mergeProps({
    class: "ota-anime-containers mt-4 mb-13",
    variant: "text"
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VCardTitle, { class: "ota-anime-containers-v-title pa-0" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Каталог релизов`);
            } else {
              return [
                createTextVNode("Каталог релизов")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Самые новые и свежие эпизоды в каталоге `);
            } else {
              return [
                createTextVNode("Самые новые и свежие эпизоды в каталоге ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VRow, {
          "no-gutters": "",
          class: "mt-2 flex-nowrap"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VForm, {
                onSubmit: $options.submitForm,
                class: "w-100"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VTextField, {
                      label: "Что будем искать в мире аниме?",
                      placeholder: "например. Атака титанов",
                      "hide-details": "",
                      density: "comfortable",
                      autocomplete: "off",
                      clearable: "",
                      modelValue: _ctx.searchQuery,
                      "onUpdate:modelValue": ($event) => _ctx.searchQuery = $event
                    }, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VTextField, {
                        label: "Что будем искать в мире аниме?",
                        placeholder: "например. Атака титанов",
                        "hide-details": "",
                        density: "comfortable",
                        autocomplete: "off",
                        clearable: "",
                        modelValue: _ctx.searchQuery,
                        "onUpdate:modelValue": ($event) => _ctx.searchQuery = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VBtn, {
                icon: _ctx.sidebarVisible ? "mdi-close" : "mdi-filter",
                rounded: "",
                class: "ml-2",
                variant: "tonal",
                density: "default",
                onClick: $options.toggleSidebar
              }, null, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VForm, {
                  onSubmit: withModifiers($options.submitForm, ["prevent"]),
                  class: "w-100"
                }, {
                  default: withCtx(() => [
                    createVNode(VTextField, {
                      label: "Что будем искать в мире аниме?",
                      placeholder: "например. Атака титанов",
                      "hide-details": "",
                      density: "comfortable",
                      autocomplete: "off",
                      clearable: "",
                      modelValue: _ctx.searchQuery,
                      "onUpdate:modelValue": ($event) => _ctx.searchQuery = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["onSubmit"]),
                createVNode(VBtn, {
                  icon: _ctx.sidebarVisible ? "mdi-close" : "mdi-filter",
                  rounded: "",
                  class: "ml-2",
                  variant: "tonal",
                  density: "default",
                  onClick: $options.toggleSidebar
                }, null, 8, ["icon", "onClick"])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(VRow, {
          "no-gutters": "",
          class: "mt-2 d-flex ga-2 flex-row flex-nowrap catalog-container"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VCard, {
                "max-width": "100%",
                width: "100%",
                rounded: "lg"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VList, null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          if (_ctx.animeCatalogListSkeleton) {
                            _push5(`<div data-v-dbd99fcc${_scopeId4}><!--[-->`);
                            ssrRenderList(10, (n) => {
                              _push5(ssrRenderComponent(VCard, {
                                variant: "text",
                                class: "pa-0",
                                key: n
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VSkeletonLoader, {
                                      class: "mb-2",
                                      type: "list-item-three-line"
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VSkeletonLoader, {
                                        class: "mb-2",
                                        type: "list-item-three-line"
                                      })
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            });
                            _push5(`<!--]--></div>`);
                          } else {
                            _push5(`<div data-v-dbd99fcc${_scopeId4}><!--[-->`);
                            ssrRenderList(_ctx.animeList, (anime) => {
                              _push5(ssrRenderComponent(VCard, {
                                key: anime.id,
                                onClick: ($event) => _ctx.openAnimeNotLoading(anime.id),
                                link: "",
                                rounded: "0",
                                class: "catalog-content-containers pa-2 pa-xs-2 pa-sm-2 pa-md-3 pa-lg-4 pa-xl-5 pa-xxl-5 pt-3 pt-xs-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-6 pt-xxl-6 pb-3 pb-xs-3 pb-sm-3 pb-md-4 pb-lg-5 pb-xl-6 pb-xxl-6",
                                variant: "text"
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(VRow, {
                                      "no-gutters": "",
                                      class: "flex-nowrap"
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div class="position-relative mr-3 catalog-content-containers-v-image" data-v-dbd99fcc${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VImg, {
                                            "lazy-src": anime.poster.mainUrl,
                                            src: anime.poster.mainUrl,
                                            rounded: "lg",
                                            cover: "",
                                            class: "pointer-events-none user-select-none overflow-hidden"
                                          }, null, _parent7, _scopeId6));
                                          _push7(`<div class="position-absolute top-0 d-flex ga-1 ma-1" data-v-dbd99fcc${_scopeId6}>`);
                                          if (anime.score != 0) {
                                            _push7(`<span class="top-0 pt-0 pb-0 pl-2 pr-2" style="${ssrRenderStyle({ "background-color": "limegreen", "border-radius": "5px", "font-size": "0.8em" })}" data-v-dbd99fcc${_scopeId6}>${ssrInterpolate(anime.score)}</span>`);
                                          } else {
                                            _push7(`<!---->`);
                                          }
                                          _push7(`<span class="top-0 pt-0 pb-0 pl-2 pr-2" style="${ssrRenderStyle({ "background-color": "indianred", "border-radius": "5px", "font-size": "0.8em" })}" data-v-dbd99fcc${_scopeId6}>720p</span></div></div><div style="${ssrRenderStyle({ "width": "100%" })}" data-v-dbd99fcc${_scopeId6}>`);
                                          _push7(ssrRenderComponent(VCardTitle, {
                                            class: "pa-0 text-wrap",
                                            style: { "font-size": "1.2em", "font-weight": "bold" }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(anime.russian)}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(anime.russian), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardSubtitle, {
                                            class: "pa-0 d-flex ga-1 pt-1 pb-2 text-wrap",
                                            style: { "font-size": "0.8em" }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(` Тип: ${ssrInterpolate(anime.kind)} <span data-v-dbd99fcc${_scopeId7}>•</span> Эпизоды: ${ssrInterpolate(anime.episodes)} <span data-v-dbd99fcc${_scopeId7}>•</span> Год выхода: ${ssrInterpolate(anime.airedOn.year)}`);
                                              } else {
                                                return [
                                                  createTextVNode(" Тип: " + toDisplayString(anime.kind) + " ", 1),
                                                  createVNode("span", null, "•"),
                                                  createTextVNode(" Эпизоды: " + toDisplayString(anime.episodes) + " ", 1),
                                                  createVNode("span", null, "•"),
                                                  createTextVNode(" Год выхода: " + toDisplayString(anime.airedOn.year), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(VCardText, {
                                            class: "pa-0 catalog-content-container-card-text",
                                            style: { "font-family": "'Inter', sans-serif" }
                                          }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`${ssrInterpolate(_ctx.cleanDescription(anime.description))}`);
                                              } else {
                                                return [
                                                  createTextVNode(toDisplayString(_ctx.cleanDescription(anime.description)), 1)
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent7, _scopeId6));
                                          _push7(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "position-relative mr-3 catalog-content-containers-v-image" }, [
                                              createVNode(VImg, {
                                                "lazy-src": anime.poster.mainUrl,
                                                src: anime.poster.mainUrl,
                                                rounded: "lg",
                                                cover: "",
                                                class: "pointer-events-none user-select-none overflow-hidden"
                                              }, null, 8, ["lazy-src", "src"]),
                                              createVNode("div", { class: "position-absolute top-0 d-flex ga-1 ma-1" }, [
                                                anime.score != 0 ? (openBlock(), createBlock("span", {
                                                  key: 0,
                                                  class: "top-0 pt-0 pb-0 pl-2 pr-2",
                                                  style: { "background-color": "limegreen", "border-radius": "5px", "font-size": "0.8em" }
                                                }, toDisplayString(anime.score), 1)) : createCommentVNode("", true),
                                                createVNode("span", {
                                                  class: "top-0 pt-0 pb-0 pl-2 pr-2",
                                                  style: { "background-color": "indianred", "border-radius": "5px", "font-size": "0.8em" }
                                                }, "720p")
                                              ])
                                            ]),
                                            createVNode("div", { style: { "width": "100%" } }, [
                                              createVNode(VCardTitle, {
                                                class: "pa-0 text-wrap",
                                                style: { "font-size": "1.2em", "font-weight": "bold" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(anime.russian), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCardSubtitle, {
                                                class: "pa-0 d-flex ga-1 pt-1 pb-2 text-wrap",
                                                style: { "font-size": "0.8em" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(" Тип: " + toDisplayString(anime.kind) + " ", 1),
                                                  createVNode("span", null, "•"),
                                                  createTextVNode(" Эпизоды: " + toDisplayString(anime.episodes) + " ", 1),
                                                  createVNode("span", null, "•"),
                                                  createTextVNode(" Год выхода: " + toDisplayString(anime.airedOn.year), 1)
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(VCardText, {
                                                class: "pa-0 catalog-content-container-card-text",
                                                style: { "font-family": "'Inter', sans-serif" }
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(_ctx.cleanDescription(anime.description)), 1)
                                                ]),
                                                _: 2
                                              }, 1024)
                                            ])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(VRow, {
                                        "no-gutters": "",
                                        class: "flex-nowrap"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "position-relative mr-3 catalog-content-containers-v-image" }, [
                                            createVNode(VImg, {
                                              "lazy-src": anime.poster.mainUrl,
                                              src: anime.poster.mainUrl,
                                              rounded: "lg",
                                              cover: "",
                                              class: "pointer-events-none user-select-none overflow-hidden"
                                            }, null, 8, ["lazy-src", "src"]),
                                            createVNode("div", { class: "position-absolute top-0 d-flex ga-1 ma-1" }, [
                                              anime.score != 0 ? (openBlock(), createBlock("span", {
                                                key: 0,
                                                class: "top-0 pt-0 pb-0 pl-2 pr-2",
                                                style: { "background-color": "limegreen", "border-radius": "5px", "font-size": "0.8em" }
                                              }, toDisplayString(anime.score), 1)) : createCommentVNode("", true),
                                              createVNode("span", {
                                                class: "top-0 pt-0 pb-0 pl-2 pr-2",
                                                style: { "background-color": "indianred", "border-radius": "5px", "font-size": "0.8em" }
                                              }, "720p")
                                            ])
                                          ]),
                                          createVNode("div", { style: { "width": "100%" } }, [
                                            createVNode(VCardTitle, {
                                              class: "pa-0 text-wrap",
                                              style: { "font-size": "1.2em", "font-weight": "bold" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(anime.russian), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCardSubtitle, {
                                              class: "pa-0 d-flex ga-1 pt-1 pb-2 text-wrap",
                                              style: { "font-size": "0.8em" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(" Тип: " + toDisplayString(anime.kind) + " ", 1),
                                                createVNode("span", null, "•"),
                                                createTextVNode(" Эпизоды: " + toDisplayString(anime.episodes) + " ", 1),
                                                createVNode("span", null, "•"),
                                                createTextVNode(" Год выхода: " + toDisplayString(anime.airedOn.year), 1)
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(VCardText, {
                                              class: "pa-0 catalog-content-container-card-text",
                                              style: { "font-family": "'Inter', sans-serif" }
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(_ctx.cleanDescription(anime.description)), 1)
                                              ]),
                                              _: 2
                                            }, 1024)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            });
                            _push5(`<!--]--></div>`);
                          }
                          if (!_ctx.animeFound || !_ctx.animeFound && !_ctx.animeFoundInitialized) {
                            _push5(ssrRenderComponent(VCard, {
                              variant: "tonal",
                              class: "empty-anime-message ma-2"
                            }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(ssrRenderComponent(VCardTitle, { class: "text-center" }, {
                                    default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                      if (_push7) {
                                        _push7(`Ничего не найдено 😔`);
                                      } else {
                                        return [
                                          createTextVNode("Ничего не найдено 😔")
                                        ];
                                      }
                                    }),
                                    _: 1
                                  }, _parent6, _scopeId5));
                                } else {
                                  return [
                                    createVNode(VCardTitle, { class: "text-center" }, {
                                      default: withCtx(() => [
                                        createTextVNode("Ничего не найдено 😔")
                                      ]),
                                      _: 1
                                    })
                                  ];
                                }
                              }),
                              _: 1
                            }, _parent5, _scopeId4));
                          } else {
                            _push5(`<!---->`);
                          }
                        } else {
                          return [
                            _ctx.animeCatalogListSkeleton ? (openBlock(), createBlock("div", { key: 0 }, [
                              (openBlock(), createBlock(Fragment, null, renderList(10, (n) => {
                                return createVNode(VCard, {
                                  variant: "text",
                                  class: "pa-0",
                                  key: n
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VSkeletonLoader, {
                                      class: "mb-2",
                                      type: "list-item-three-line"
                                    })
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 64))
                            ])) : (openBlock(), createBlock("div", {
                              key: 1,
                              ref: "animeCatalog"
                            }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.animeList, (anime) => {
                                return openBlock(), createBlock(VCard, {
                                  key: anime.id,
                                  onClick: ($event) => _ctx.openAnimeNotLoading(anime.id),
                                  link: "",
                                  rounded: "0",
                                  class: "catalog-content-containers pa-2 pa-xs-2 pa-sm-2 pa-md-3 pa-lg-4 pa-xl-5 pa-xxl-5 pt-3 pt-xs-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-6 pt-xxl-6 pb-3 pb-xs-3 pb-sm-3 pb-md-4 pb-lg-5 pb-xl-6 pb-xxl-6",
                                  variant: "text"
                                }, {
                                  default: withCtx(() => [
                                    createVNode(VRow, {
                                      "no-gutters": "",
                                      class: "flex-nowrap"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "position-relative mr-3 catalog-content-containers-v-image" }, [
                                          createVNode(VImg, {
                                            "lazy-src": anime.poster.mainUrl,
                                            src: anime.poster.mainUrl,
                                            rounded: "lg",
                                            cover: "",
                                            class: "pointer-events-none user-select-none overflow-hidden"
                                          }, null, 8, ["lazy-src", "src"]),
                                          createVNode("div", { class: "position-absolute top-0 d-flex ga-1 ma-1" }, [
                                            anime.score != 0 ? (openBlock(), createBlock("span", {
                                              key: 0,
                                              class: "top-0 pt-0 pb-0 pl-2 pr-2",
                                              style: { "background-color": "limegreen", "border-radius": "5px", "font-size": "0.8em" }
                                            }, toDisplayString(anime.score), 1)) : createCommentVNode("", true),
                                            createVNode("span", {
                                              class: "top-0 pt-0 pb-0 pl-2 pr-2",
                                              style: { "background-color": "indianred", "border-radius": "5px", "font-size": "0.8em" }
                                            }, "720p")
                                          ])
                                        ]),
                                        createVNode("div", { style: { "width": "100%" } }, [
                                          createVNode(VCardTitle, {
                                            class: "pa-0 text-wrap",
                                            style: { "font-size": "1.2em", "font-weight": "bold" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(anime.russian), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardSubtitle, {
                                            class: "pa-0 d-flex ga-1 pt-1 pb-2 text-wrap",
                                            style: { "font-size": "0.8em" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(" Тип: " + toDisplayString(anime.kind) + " ", 1),
                                              createVNode("span", null, "•"),
                                              createTextVNode(" Эпизоды: " + toDisplayString(anime.episodes) + " ", 1),
                                              createVNode("span", null, "•"),
                                              createTextVNode(" Год выхода: " + toDisplayString(anime.airedOn.year), 1)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(VCardText, {
                                            class: "pa-0 catalog-content-container-card-text",
                                            style: { "font-family": "'Inter', sans-serif" }
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(_ctx.cleanDescription(anime.description)), 1)
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]);
                              }), 128))
                            ], 512)),
                            !_ctx.animeFound || !_ctx.animeFound && !_ctx.animeFoundInitialized ? (openBlock(), createBlock(VCard, {
                              key: 2,
                              variant: "tonal",
                              class: "empty-anime-message ma-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, { class: "text-center" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Ничего не найдено 😔")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VList, null, {
                        default: withCtx(() => [
                          _ctx.animeCatalogListSkeleton ? (openBlock(), createBlock("div", { key: 0 }, [
                            (openBlock(), createBlock(Fragment, null, renderList(10, (n) => {
                              return createVNode(VCard, {
                                variant: "text",
                                class: "pa-0",
                                key: n
                              }, {
                                default: withCtx(() => [
                                  createVNode(VSkeletonLoader, {
                                    class: "mb-2",
                                    type: "list-item-three-line"
                                  })
                                ]),
                                _: 2
                              }, 1024);
                            }), 64))
                          ])) : (openBlock(), createBlock("div", {
                            key: 1,
                            ref: "animeCatalog"
                          }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(_ctx.animeList, (anime) => {
                              return openBlock(), createBlock(VCard, {
                                key: anime.id,
                                onClick: ($event) => _ctx.openAnimeNotLoading(anime.id),
                                link: "",
                                rounded: "0",
                                class: "catalog-content-containers pa-2 pa-xs-2 pa-sm-2 pa-md-3 pa-lg-4 pa-xl-5 pa-xxl-5 pt-3 pt-xs-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-6 pt-xxl-6 pb-3 pb-xs-3 pb-sm-3 pb-md-4 pb-lg-5 pb-xl-6 pb-xxl-6",
                                variant: "text"
                              }, {
                                default: withCtx(() => [
                                  createVNode(VRow, {
                                    "no-gutters": "",
                                    class: "flex-nowrap"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "position-relative mr-3 catalog-content-containers-v-image" }, [
                                        createVNode(VImg, {
                                          "lazy-src": anime.poster.mainUrl,
                                          src: anime.poster.mainUrl,
                                          rounded: "lg",
                                          cover: "",
                                          class: "pointer-events-none user-select-none overflow-hidden"
                                        }, null, 8, ["lazy-src", "src"]),
                                        createVNode("div", { class: "position-absolute top-0 d-flex ga-1 ma-1" }, [
                                          anime.score != 0 ? (openBlock(), createBlock("span", {
                                            key: 0,
                                            class: "top-0 pt-0 pb-0 pl-2 pr-2",
                                            style: { "background-color": "limegreen", "border-radius": "5px", "font-size": "0.8em" }
                                          }, toDisplayString(anime.score), 1)) : createCommentVNode("", true),
                                          createVNode("span", {
                                            class: "top-0 pt-0 pb-0 pl-2 pr-2",
                                            style: { "background-color": "indianred", "border-radius": "5px", "font-size": "0.8em" }
                                          }, "720p")
                                        ])
                                      ]),
                                      createVNode("div", { style: { "width": "100%" } }, [
                                        createVNode(VCardTitle, {
                                          class: "pa-0 text-wrap",
                                          style: { "font-size": "1.2em", "font-weight": "bold" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(anime.russian), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardSubtitle, {
                                          class: "pa-0 d-flex ga-1 pt-1 pb-2 text-wrap",
                                          style: { "font-size": "0.8em" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(" Тип: " + toDisplayString(anime.kind) + " ", 1),
                                            createVNode("span", null, "•"),
                                            createTextVNode(" Эпизоды: " + toDisplayString(anime.episodes) + " ", 1),
                                            createVNode("span", null, "•"),
                                            createTextVNode(" Год выхода: " + toDisplayString(anime.airedOn.year), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(VCardText, {
                                          class: "pa-0 catalog-content-container-card-text",
                                          style: { "font-family": "'Inter', sans-serif" }
                                        }, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(_ctx.cleanDescription(anime.description)), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["onClick"]);
                            }), 128))
                          ], 512)),
                          !_ctx.animeFound || !_ctx.animeFound && !_ctx.animeFoundInitialized ? (openBlock(), createBlock(VCard, {
                            key: 2,
                            variant: "tonal",
                            class: "empty-anime-message ma-2"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, { class: "text-center" }, {
                                default: withCtx(() => [
                                  createTextVNode("Ничего не найдено 😔")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent(VCard, {
                style: _ctx.sidebarVisible ? null : { display: "none" },
                width: "100%",
                class: "sidebar",
                rounded: "lg"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="content-wrapper d-flex flex-column" data-v-dbd99fcc${_scopeId3}>`);
                    _push4(ssrRenderComponent(VForm, {
                      class: "contents pt-2 position-relative",
                      style: { "height": "100%", "border-radius": "6px" }
                    }, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VCard, {
                            variant: "text",
                            class: "anime-filter-content-v-card pl-4 pr-4",
                            width: "100%"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Статус`);
                                    } else {
                                      return [
                                        createTextVNode("Статус")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Пожалуйста, выберите статус, в котором находится аниме, из предложенных вариантов: `);
                                    } else {
                                      return [
                                        createTextVNode(" Пожалуйста, выберите статус, в котором находится аниме, из предложенных вариантов: ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VSelect, {
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.statusItems,
                                  label: "Выбирите Статус"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCardTitle, {
                                    class: "pa-0",
                                    style: { "font-size": "1em" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Статус")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardSubtitle, {
                                    class: "pa-0",
                                    style: { "font-size": "0.9em", "white-space": "normal !important" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Пожалуйста, выберите статус, в котором находится аниме, из предложенных вариантов: ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSelect, {
                                    density: "comfortable",
                                    variant: "outlined",
                                    clearable: "",
                                    class: "mt-2",
                                    "item-props": $options.itemProps,
                                    items: _ctx.statusItems,
                                    label: "Выбирите Статус"
                                  }, null, 8, ["item-props", "items"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCard, {
                            variant: "text",
                            class: "anime-filter-content-v-card pl-4 pr-4",
                            width: "100%"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Тип`);
                                    } else {
                                      return [
                                        createTextVNode("Тип")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Пожалуйста, выберите один или несколько типов аниме из списка: `);
                                    } else {
                                      return [
                                        createTextVNode(" Пожалуйста, выберите один или несколько типов аниме из списка: ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VSelect, {
                                  multiple: "",
                                  chips: "",
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.kindItems,
                                  label: "Выбирите Тип"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCardTitle, {
                                    class: "pa-0",
                                    style: { "font-size": "1em" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Тип")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardSubtitle, {
                                    class: "pa-0",
                                    style: { "font-size": "0.9em", "white-space": "normal !important" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Пожалуйста, выберите один или несколько типов аниме из списка: ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSelect, {
                                    multiple: "",
                                    chips: "",
                                    density: "comfortable",
                                    variant: "outlined",
                                    clearable: "",
                                    class: "mt-2",
                                    "item-props": $options.itemProps,
                                    items: _ctx.kindItems,
                                    label: "Выбирите Тип"
                                  }, null, 8, ["item-props", "items"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCard, {
                            variant: "text",
                            class: "anime-filter-content-v-card pl-4 pr-4",
                            width: "100%"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Жанры`);
                                    } else {
                                      return [
                                        createTextVNode("Жанры")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Пожалуйста, укажите жанры для фильтрации наших релизов: `);
                                    } else {
                                      return [
                                        createTextVNode(" Пожалуйста, укажите жанры для фильтрации наших релизов: ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VSelect, {
                                  multiple: "",
                                  chips: "",
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.genreItems,
                                  label: "Выбирите Жанры"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCardTitle, {
                                    class: "pa-0",
                                    style: { "font-size": "1em" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Жанры")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardSubtitle, {
                                    class: "pa-0",
                                    style: { "font-size": "0.9em", "white-space": "normal !important" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Пожалуйста, укажите жанры для фильтрации наших релизов: ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSelect, {
                                    multiple: "",
                                    chips: "",
                                    density: "comfortable",
                                    variant: "outlined",
                                    clearable: "",
                                    class: "mt-2",
                                    "item-props": $options.itemProps,
                                    items: _ctx.genreItems,
                                    label: "Выбирите Жанры"
                                  }, null, 8, ["item-props", "items"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCard, {
                            variant: "text",
                            class: "anime-filter-content-v-card pl-4 pr-4",
                            width: "100%"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Cортировка`);
                                    } else {
                                      return [
                                        createTextVNode("Cортировка")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Пожалуйста, выберите предпочтительный порядок сортировки из списка опций: `);
                                    } else {
                                      return [
                                        createTextVNode(" Пожалуйста, выберите предпочтительный порядок сортировки из списка опций: ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VSelect, {
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.sortItems,
                                  label: "Cортировать По"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCardTitle, {
                                    class: "pa-0",
                                    style: { "font-size": "1em" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Cортировка")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardSubtitle, {
                                    class: "pa-0",
                                    style: { "font-size": "0.9em", "white-space": "normal !important" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Пожалуйста, выберите предпочтительный порядок сортировки из списка опций: ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSelect, {
                                    density: "comfortable",
                                    variant: "outlined",
                                    clearable: "",
                                    class: "mt-2",
                                    "item-props": $options.itemProps,
                                    items: _ctx.sortItems,
                                    label: "Cортировать По"
                                  }, null, 8, ["item-props", "items"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCard, {
                            variant: "text",
                            class: "anime-filter-content-v-card pl-4 pr-4",
                            width: "100%"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Сезон`);
                                    } else {
                                      return [
                                        createTextVNode("Сезон")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Пожалуйста, выберите желаемый сезон из предложенных вариантов: `);
                                    } else {
                                      return [
                                        createTextVNode(" Пожалуйста, выберите желаемый сезон из предложенных вариантов: ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VSelect, {
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.yearItems,
                                  label: "Выбирите Сезон"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCardTitle, {
                                    class: "pa-0",
                                    style: { "font-size": "1em" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Сезон")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardSubtitle, {
                                    class: "pa-0",
                                    style: { "font-size": "0.9em", "white-space": "normal !important" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Пожалуйста, выберите желаемый сезон из предложенных вариантов: ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSelect, {
                                    density: "comfortable",
                                    variant: "outlined",
                                    clearable: "",
                                    class: "mt-2",
                                    "item-props": $options.itemProps,
                                    items: _ctx.yearItems,
                                    label: "Выбирите Сезон"
                                  }, null, 8, ["item-props", "items"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VCard, {
                            variant: "text",
                            class: "anime-filter-content-v-card pl-4 pr-4",
                            width: "100%"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(ssrRenderComponent(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(`Оценка`);
                                    } else {
                                      return [
                                        createTextVNode("Оценка")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                    if (_push7) {
                                      _push7(` Выберите параметры для сортировки аниме по оценкам: `);
                                    } else {
                                      return [
                                        createTextVNode(" Выберите параметры для сортировки аниме по оценкам: ")
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent6, _scopeId5));
                                _push6(ssrRenderComponent(VSelect, {
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.ratingItems,
                                  label: "Выбирите Оценку"
                                }, null, _parent6, _scopeId5));
                              } else {
                                return [
                                  createVNode(VCardTitle, {
                                    class: "pa-0",
                                    style: { "font-size": "1em" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("Оценка")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VCardSubtitle, {
                                    class: "pa-0",
                                    style: { "font-size": "0.9em", "white-space": "normal !important" }
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(" Выберите параметры для сортировки аниме по оценкам: ")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(VSelect, {
                                    density: "comfortable",
                                    variant: "outlined",
                                    clearable: "",
                                    class: "mt-2",
                                    "item-props": $options.itemProps,
                                    items: _ctx.ratingItems,
                                    label: "Выбирите Оценку"
                                  }, null, 8, ["item-props", "items"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`<div class="submit-filter" data-v-dbd99fcc${_scopeId4}><div class="submit-filter-inner-container pr-4 pl-4 d-flex ga-2 pb-2" style="${ssrRenderStyle({ "border-radius": "6px" })}" data-v-dbd99fcc${_scopeId4}>`);
                          _push5(ssrRenderComponent(VBtn, {
                            variant: "flat",
                            color: "primary",
                            "prepend-icon": "mdi-check-all"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Поиск `);
                              } else {
                                return [
                                  createTextVNode(" Поиск ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(ssrRenderComponent(VBtn, {
                            variant: "tonal",
                            color: "red",
                            "prepend-icon": "mdi-window-close"
                          }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(` Сбросить `);
                              } else {
                                return [
                                  createTextVNode(" Сбросить ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                          _push5(`</div></div>`);
                        } else {
                          return [
                            createVNode(VCard, {
                              variant: "text",
                              class: "anime-filter-content-v-card pl-4 pr-4",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Статус")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Пожалуйста, выберите статус, в котором находится аниме, из предложенных вариантов: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.statusItems,
                                  label: "Выбирите Статус"
                                }, null, 8, ["item-props", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              variant: "text",
                              class: "anime-filter-content-v-card pl-4 pr-4",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Тип")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Пожалуйста, выберите один или несколько типов аниме из списка: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  multiple: "",
                                  chips: "",
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.kindItems,
                                  label: "Выбирите Тип"
                                }, null, 8, ["item-props", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              variant: "text",
                              class: "anime-filter-content-v-card pl-4 pr-4",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Жанры")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Пожалуйста, укажите жанры для фильтрации наших релизов: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  multiple: "",
                                  chips: "",
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.genreItems,
                                  label: "Выбирите Жанры"
                                }, null, 8, ["item-props", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              variant: "text",
                              class: "anime-filter-content-v-card pl-4 pr-4",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cортировка")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Пожалуйста, выберите предпочтительный порядок сортировки из списка опций: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.sortItems,
                                  label: "Cортировать По"
                                }, null, 8, ["item-props", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              variant: "text",
                              class: "anime-filter-content-v-card pl-4 pr-4",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Сезон")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Пожалуйста, выберите желаемый сезон из предложенных вариантов: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.yearItems,
                                  label: "Выбирите Сезон"
                                }, null, 8, ["item-props", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              variant: "text",
                              class: "anime-filter-content-v-card pl-4 pr-4",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Оценка")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Выберите параметры для сортировки аниме по оценкам: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.ratingItems,
                                  label: "Выбирите Оценку"
                                }, null, 8, ["item-props", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "submit-filter" }, [
                              createVNode("div", {
                                class: "submit-filter-inner-container pr-4 pl-4 d-flex ga-2 pb-2",
                                style: { "border-radius": "6px" }
                              }, [
                                createVNode(VBtn, {
                                  variant: "flat",
                                  color: "primary",
                                  "prepend-icon": "mdi-check-all"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Поиск ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  variant: "tonal",
                                  color: "red",
                                  "prepend-icon": "mdi-window-close"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Сбросить ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "content-wrapper d-flex flex-column" }, [
                        createVNode(VForm, {
                          class: "contents pt-2 position-relative",
                          style: { "height": "100%", "border-radius": "6px" }
                        }, {
                          default: withCtx(() => [
                            createVNode(VCard, {
                              variant: "text",
                              class: "anime-filter-content-v-card pl-4 pr-4",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Статус")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Пожалуйста, выберите статус, в котором находится аниме, из предложенных вариантов: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.statusItems,
                                  label: "Выбирите Статус"
                                }, null, 8, ["item-props", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              variant: "text",
                              class: "anime-filter-content-v-card pl-4 pr-4",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Тип")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Пожалуйста, выберите один или несколько типов аниме из списка: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  multiple: "",
                                  chips: "",
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.kindItems,
                                  label: "Выбирите Тип"
                                }, null, 8, ["item-props", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              variant: "text",
                              class: "anime-filter-content-v-card pl-4 pr-4",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Жанры")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Пожалуйста, укажите жанры для фильтрации наших релизов: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  multiple: "",
                                  chips: "",
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.genreItems,
                                  label: "Выбирите Жанры"
                                }, null, 8, ["item-props", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              variant: "text",
                              class: "anime-filter-content-v-card pl-4 pr-4",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Cортировка")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Пожалуйста, выберите предпочтительный порядок сортировки из списка опций: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.sortItems,
                                  label: "Cортировать По"
                                }, null, 8, ["item-props", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              variant: "text",
                              class: "anime-filter-content-v-card pl-4 pr-4",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Сезон")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Пожалуйста, выберите желаемый сезон из предложенных вариантов: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.yearItems,
                                  label: "Выбирите Сезон"
                                }, null, 8, ["item-props", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode(VCard, {
                              variant: "text",
                              class: "anime-filter-content-v-card pl-4 pr-4",
                              width: "100%"
                            }, {
                              default: withCtx(() => [
                                createVNode(VCardTitle, {
                                  class: "pa-0",
                                  style: { "font-size": "1em" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("Оценка")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VCardSubtitle, {
                                  class: "pa-0",
                                  style: { "font-size": "0.9em", "white-space": "normal !important" }
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Выберите параметры для сортировки аниме по оценкам: ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VSelect, {
                                  density: "comfortable",
                                  variant: "outlined",
                                  clearable: "",
                                  class: "mt-2",
                                  "item-props": $options.itemProps,
                                  items: _ctx.ratingItems,
                                  label: "Выбирите Оценку"
                                }, null, 8, ["item-props", "items"])
                              ]),
                              _: 1
                            }),
                            createVNode("div", { class: "submit-filter" }, [
                              createVNode("div", {
                                class: "submit-filter-inner-container pr-4 pl-4 d-flex ga-2 pb-2",
                                style: { "border-radius": "6px" }
                              }, [
                                createVNode(VBtn, {
                                  variant: "flat",
                                  color: "primary",
                                  "prepend-icon": "mdi-check-all"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Поиск ")
                                  ]),
                                  _: 1
                                }),
                                createVNode(VBtn, {
                                  variant: "tonal",
                                  color: "red",
                                  "prepend-icon": "mdi-window-close"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Сбросить ")
                                  ]),
                                  _: 1
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VCard, {
                  "max-width": "100%",
                  width: "100%",
                  rounded: "lg"
                }, {
                  default: withCtx(() => [
                    createVNode(VList, null, {
                      default: withCtx(() => [
                        _ctx.animeCatalogListSkeleton ? (openBlock(), createBlock("div", { key: 0 }, [
                          (openBlock(), createBlock(Fragment, null, renderList(10, (n) => {
                            return createVNode(VCard, {
                              variant: "text",
                              class: "pa-0",
                              key: n
                            }, {
                              default: withCtx(() => [
                                createVNode(VSkeletonLoader, {
                                  class: "mb-2",
                                  type: "list-item-three-line"
                                })
                              ]),
                              _: 2
                            }, 1024);
                          }), 64))
                        ])) : (openBlock(), createBlock("div", {
                          key: 1,
                          ref: "animeCatalog"
                        }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.animeList, (anime) => {
                            return openBlock(), createBlock(VCard, {
                              key: anime.id,
                              onClick: ($event) => _ctx.openAnimeNotLoading(anime.id),
                              link: "",
                              rounded: "0",
                              class: "catalog-content-containers pa-2 pa-xs-2 pa-sm-2 pa-md-3 pa-lg-4 pa-xl-5 pa-xxl-5 pt-3 pt-xs-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-6 pt-xxl-6 pb-3 pb-xs-3 pb-sm-3 pb-md-4 pb-lg-5 pb-xl-6 pb-xxl-6",
                              variant: "text"
                            }, {
                              default: withCtx(() => [
                                createVNode(VRow, {
                                  "no-gutters": "",
                                  class: "flex-nowrap"
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "position-relative mr-3 catalog-content-containers-v-image" }, [
                                      createVNode(VImg, {
                                        "lazy-src": anime.poster.mainUrl,
                                        src: anime.poster.mainUrl,
                                        rounded: "lg",
                                        cover: "",
                                        class: "pointer-events-none user-select-none overflow-hidden"
                                      }, null, 8, ["lazy-src", "src"]),
                                      createVNode("div", { class: "position-absolute top-0 d-flex ga-1 ma-1" }, [
                                        anime.score != 0 ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "top-0 pt-0 pb-0 pl-2 pr-2",
                                          style: { "background-color": "limegreen", "border-radius": "5px", "font-size": "0.8em" }
                                        }, toDisplayString(anime.score), 1)) : createCommentVNode("", true),
                                        createVNode("span", {
                                          class: "top-0 pt-0 pb-0 pl-2 pr-2",
                                          style: { "background-color": "indianred", "border-radius": "5px", "font-size": "0.8em" }
                                        }, "720p")
                                      ])
                                    ]),
                                    createVNode("div", { style: { "width": "100%" } }, [
                                      createVNode(VCardTitle, {
                                        class: "pa-0 text-wrap",
                                        style: { "font-size": "1.2em", "font-weight": "bold" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(anime.russian), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardSubtitle, {
                                        class: "pa-0 d-flex ga-1 pt-1 pb-2 text-wrap",
                                        style: { "font-size": "0.8em" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(" Тип: " + toDisplayString(anime.kind) + " ", 1),
                                          createVNode("span", null, "•"),
                                          createTextVNode(" Эпизоды: " + toDisplayString(anime.episodes) + " ", 1),
                                          createVNode("span", null, "•"),
                                          createTextVNode(" Год выхода: " + toDisplayString(anime.airedOn.year), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(VCardText, {
                                        class: "pa-0 catalog-content-container-card-text",
                                        style: { "font-family": "'Inter', sans-serif" }
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(_ctx.cleanDescription(anime.description)), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128))
                        ], 512)),
                        !_ctx.animeFound || !_ctx.animeFound && !_ctx.animeFoundInitialized ? (openBlock(), createBlock(VCard, {
                          key: 2,
                          variant: "tonal",
                          class: "empty-anime-message ma-2"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, { class: "text-center" }, {
                              default: withCtx(() => [
                                createTextVNode("Ничего не найдено 😔")
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                withDirectives(createVNode(VCard, {
                  width: "100%",
                  class: "sidebar",
                  rounded: "lg"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "content-wrapper d-flex flex-column" }, [
                      createVNode(VForm, {
                        class: "contents pt-2 position-relative",
                        style: { "height": "100%", "border-radius": "6px" }
                      }, {
                        default: withCtx(() => [
                          createVNode(VCard, {
                            variant: "text",
                            class: "anime-filter-content-v-card pl-4 pr-4",
                            width: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, {
                                class: "pa-0",
                                style: { "font-size": "1em" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Статус")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, {
                                class: "pa-0",
                                style: { "font-size": "0.9em", "white-space": "normal !important" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Пожалуйста, выберите статус, в котором находится аниме, из предложенных вариантов: ")
                                ]),
                                _: 1
                              }),
                              createVNode(VSelect, {
                                density: "comfortable",
                                variant: "outlined",
                                clearable: "",
                                class: "mt-2",
                                "item-props": $options.itemProps,
                                items: _ctx.statusItems,
                                label: "Выбирите Статус"
                              }, null, 8, ["item-props", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCard, {
                            variant: "text",
                            class: "anime-filter-content-v-card pl-4 pr-4",
                            width: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, {
                                class: "pa-0",
                                style: { "font-size": "1em" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Тип")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, {
                                class: "pa-0",
                                style: { "font-size": "0.9em", "white-space": "normal !important" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Пожалуйста, выберите один или несколько типов аниме из списка: ")
                                ]),
                                _: 1
                              }),
                              createVNode(VSelect, {
                                multiple: "",
                                chips: "",
                                density: "comfortable",
                                variant: "outlined",
                                clearable: "",
                                class: "mt-2",
                                "item-props": $options.itemProps,
                                items: _ctx.kindItems,
                                label: "Выбирите Тип"
                              }, null, 8, ["item-props", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCard, {
                            variant: "text",
                            class: "anime-filter-content-v-card pl-4 pr-4",
                            width: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, {
                                class: "pa-0",
                                style: { "font-size": "1em" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Жанры")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, {
                                class: "pa-0",
                                style: { "font-size": "0.9em", "white-space": "normal !important" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Пожалуйста, укажите жанры для фильтрации наших релизов: ")
                                ]),
                                _: 1
                              }),
                              createVNode(VSelect, {
                                multiple: "",
                                chips: "",
                                density: "comfortable",
                                variant: "outlined",
                                clearable: "",
                                class: "mt-2",
                                "item-props": $options.itemProps,
                                items: _ctx.genreItems,
                                label: "Выбирите Жанры"
                              }, null, 8, ["item-props", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCard, {
                            variant: "text",
                            class: "anime-filter-content-v-card pl-4 pr-4",
                            width: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, {
                                class: "pa-0",
                                style: { "font-size": "1em" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Cортировка")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, {
                                class: "pa-0",
                                style: { "font-size": "0.9em", "white-space": "normal !important" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Пожалуйста, выберите предпочтительный порядок сортировки из списка опций: ")
                                ]),
                                _: 1
                              }),
                              createVNode(VSelect, {
                                density: "comfortable",
                                variant: "outlined",
                                clearable: "",
                                class: "mt-2",
                                "item-props": $options.itemProps,
                                items: _ctx.sortItems,
                                label: "Cортировать По"
                              }, null, 8, ["item-props", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCard, {
                            variant: "text",
                            class: "anime-filter-content-v-card pl-4 pr-4",
                            width: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, {
                                class: "pa-0",
                                style: { "font-size": "1em" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Сезон")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, {
                                class: "pa-0",
                                style: { "font-size": "0.9em", "white-space": "normal !important" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Пожалуйста, выберите желаемый сезон из предложенных вариантов: ")
                                ]),
                                _: 1
                              }),
                              createVNode(VSelect, {
                                density: "comfortable",
                                variant: "outlined",
                                clearable: "",
                                class: "mt-2",
                                "item-props": $options.itemProps,
                                items: _ctx.yearItems,
                                label: "Выбирите Сезон"
                              }, null, 8, ["item-props", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode(VCard, {
                            variant: "text",
                            class: "anime-filter-content-v-card pl-4 pr-4",
                            width: "100%"
                          }, {
                            default: withCtx(() => [
                              createVNode(VCardTitle, {
                                class: "pa-0",
                                style: { "font-size": "1em" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("Оценка")
                                ]),
                                _: 1
                              }),
                              createVNode(VCardSubtitle, {
                                class: "pa-0",
                                style: { "font-size": "0.9em", "white-space": "normal !important" }
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Выберите параметры для сортировки аниме по оценкам: ")
                                ]),
                                _: 1
                              }),
                              createVNode(VSelect, {
                                density: "comfortable",
                                variant: "outlined",
                                clearable: "",
                                class: "mt-2",
                                "item-props": $options.itemProps,
                                items: _ctx.ratingItems,
                                label: "Выбирите Оценку"
                              }, null, 8, ["item-props", "items"])
                            ]),
                            _: 1
                          }),
                          createVNode("div", { class: "submit-filter" }, [
                            createVNode("div", {
                              class: "submit-filter-inner-container pr-4 pl-4 d-flex ga-2 pb-2",
                              style: { "border-radius": "6px" }
                            }, [
                              createVNode(VBtn, {
                                variant: "flat",
                                color: "primary",
                                "prepend-icon": "mdi-check-all"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Поиск ")
                                ]),
                                _: 1
                              }),
                              createVNode(VBtn, {
                                variant: "tonal",
                                color: "red",
                                "prepend-icon": "mdi-window-close"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Сбросить ")
                                ]),
                                _: 1
                              })
                            ])
                          ])
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }, 512), [
                  [vShow, _ctx.sidebarVisible]
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(VCardTitle, { class: "ota-anime-containers-v-title pa-0" }, {
            default: withCtx(() => [
              createTextVNode("Каталог релизов")
            ]),
            _: 1
          }),
          createVNode(VCardSubtitle, { class: "ota-anime-containers-v-subtitle pa-0" }, {
            default: withCtx(() => [
              createTextVNode("Самые новые и свежие эпизоды в каталоге ")
            ]),
            _: 1
          }),
          createVNode(VRow, {
            "no-gutters": "",
            class: "mt-2 flex-nowrap"
          }, {
            default: withCtx(() => [
              createVNode(VForm, {
                onSubmit: withModifiers($options.submitForm, ["prevent"]),
                class: "w-100"
              }, {
                default: withCtx(() => [
                  createVNode(VTextField, {
                    label: "Что будем искать в мире аниме?",
                    placeholder: "например. Атака титанов",
                    "hide-details": "",
                    density: "comfortable",
                    autocomplete: "off",
                    clearable: "",
                    modelValue: _ctx.searchQuery,
                    "onUpdate:modelValue": ($event) => _ctx.searchQuery = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }, 8, ["onSubmit"]),
              createVNode(VBtn, {
                icon: _ctx.sidebarVisible ? "mdi-close" : "mdi-filter",
                rounded: "",
                class: "ml-2",
                variant: "tonal",
                density: "default",
                onClick: $options.toggleSidebar
              }, null, 8, ["icon", "onClick"])
            ]),
            _: 1
          }),
          createVNode(VRow, {
            "no-gutters": "",
            class: "mt-2 d-flex ga-2 flex-row flex-nowrap catalog-container"
          }, {
            default: withCtx(() => [
              createVNode(VCard, {
                "max-width": "100%",
                width: "100%",
                rounded: "lg"
              }, {
                default: withCtx(() => [
                  createVNode(VList, null, {
                    default: withCtx(() => [
                      _ctx.animeCatalogListSkeleton ? (openBlock(), createBlock("div", { key: 0 }, [
                        (openBlock(), createBlock(Fragment, null, renderList(10, (n) => {
                          return createVNode(VCard, {
                            variant: "text",
                            class: "pa-0",
                            key: n
                          }, {
                            default: withCtx(() => [
                              createVNode(VSkeletonLoader, {
                                class: "mb-2",
                                type: "list-item-three-line"
                              })
                            ]),
                            _: 2
                          }, 1024);
                        }), 64))
                      ])) : (openBlock(), createBlock("div", {
                        key: 1,
                        ref: "animeCatalog"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(_ctx.animeList, (anime) => {
                          return openBlock(), createBlock(VCard, {
                            key: anime.id,
                            onClick: ($event) => _ctx.openAnimeNotLoading(anime.id),
                            link: "",
                            rounded: "0",
                            class: "catalog-content-containers pa-2 pa-xs-2 pa-sm-2 pa-md-3 pa-lg-4 pa-xl-5 pa-xxl-5 pt-3 pt-xs-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-6 pt-xxl-6 pb-3 pb-xs-3 pb-sm-3 pb-md-4 pb-lg-5 pb-xl-6 pb-xxl-6",
                            variant: "text"
                          }, {
                            default: withCtx(() => [
                              createVNode(VRow, {
                                "no-gutters": "",
                                class: "flex-nowrap"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "position-relative mr-3 catalog-content-containers-v-image" }, [
                                    createVNode(VImg, {
                                      "lazy-src": anime.poster.mainUrl,
                                      src: anime.poster.mainUrl,
                                      rounded: "lg",
                                      cover: "",
                                      class: "pointer-events-none user-select-none overflow-hidden"
                                    }, null, 8, ["lazy-src", "src"]),
                                    createVNode("div", { class: "position-absolute top-0 d-flex ga-1 ma-1" }, [
                                      anime.score != 0 ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "top-0 pt-0 pb-0 pl-2 pr-2",
                                        style: { "background-color": "limegreen", "border-radius": "5px", "font-size": "0.8em" }
                                      }, toDisplayString(anime.score), 1)) : createCommentVNode("", true),
                                      createVNode("span", {
                                        class: "top-0 pt-0 pb-0 pl-2 pr-2",
                                        style: { "background-color": "indianred", "border-radius": "5px", "font-size": "0.8em" }
                                      }, "720p")
                                    ])
                                  ]),
                                  createVNode("div", { style: { "width": "100%" } }, [
                                    createVNode(VCardTitle, {
                                      class: "pa-0 text-wrap",
                                      style: { "font-size": "1.2em", "font-weight": "bold" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(anime.russian), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardSubtitle, {
                                      class: "pa-0 d-flex ga-1 pt-1 pb-2 text-wrap",
                                      style: { "font-size": "0.8em" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(" Тип: " + toDisplayString(anime.kind) + " ", 1),
                                        createVNode("span", null, "•"),
                                        createTextVNode(" Эпизоды: " + toDisplayString(anime.episodes) + " ", 1),
                                        createVNode("span", null, "•"),
                                        createTextVNode(" Год выхода: " + toDisplayString(anime.airedOn.year), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(VCardText, {
                                      class: "pa-0 catalog-content-container-card-text",
                                      style: { "font-family": "'Inter', sans-serif" }
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(_ctx.cleanDescription(anime.description)), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]);
                        }), 128))
                      ], 512)),
                      !_ctx.animeFound || !_ctx.animeFound && !_ctx.animeFoundInitialized ? (openBlock(), createBlock(VCard, {
                        key: 2,
                        variant: "tonal",
                        class: "empty-anime-message ma-2"
                      }, {
                        default: withCtx(() => [
                          createVNode(VCardTitle, { class: "text-center" }, {
                            default: withCtx(() => [
                              createTextVNode("Ничего не найдено 😔")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })) : createCommentVNode("", true)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              withDirectives(createVNode(VCard, {
                width: "100%",
                class: "sidebar",
                rounded: "lg"
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "content-wrapper d-flex flex-column" }, [
                    createVNode(VForm, {
                      class: "contents pt-2 position-relative",
                      style: { "height": "100%", "border-radius": "6px" }
                    }, {
                      default: withCtx(() => [
                        createVNode(VCard, {
                          variant: "text",
                          class: "anime-filter-content-v-card pl-4 pr-4",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, {
                              class: "pa-0",
                              style: { "font-size": "1em" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Статус")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, {
                              class: "pa-0",
                              style: { "font-size": "0.9em", "white-space": "normal !important" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Пожалуйста, выберите статус, в котором находится аниме, из предложенных вариантов: ")
                              ]),
                              _: 1
                            }),
                            createVNode(VSelect, {
                              density: "comfortable",
                              variant: "outlined",
                              clearable: "",
                              class: "mt-2",
                              "item-props": $options.itemProps,
                              items: _ctx.statusItems,
                              label: "Выбирите Статус"
                            }, null, 8, ["item-props", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCard, {
                          variant: "text",
                          class: "anime-filter-content-v-card pl-4 pr-4",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, {
                              class: "pa-0",
                              style: { "font-size": "1em" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Тип")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, {
                              class: "pa-0",
                              style: { "font-size": "0.9em", "white-space": "normal !important" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Пожалуйста, выберите один или несколько типов аниме из списка: ")
                              ]),
                              _: 1
                            }),
                            createVNode(VSelect, {
                              multiple: "",
                              chips: "",
                              density: "comfortable",
                              variant: "outlined",
                              clearable: "",
                              class: "mt-2",
                              "item-props": $options.itemProps,
                              items: _ctx.kindItems,
                              label: "Выбирите Тип"
                            }, null, 8, ["item-props", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCard, {
                          variant: "text",
                          class: "anime-filter-content-v-card pl-4 pr-4",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, {
                              class: "pa-0",
                              style: { "font-size": "1em" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Жанры")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, {
                              class: "pa-0",
                              style: { "font-size": "0.9em", "white-space": "normal !important" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Пожалуйста, укажите жанры для фильтрации наших релизов: ")
                              ]),
                              _: 1
                            }),
                            createVNode(VSelect, {
                              multiple: "",
                              chips: "",
                              density: "comfortable",
                              variant: "outlined",
                              clearable: "",
                              class: "mt-2",
                              "item-props": $options.itemProps,
                              items: _ctx.genreItems,
                              label: "Выбирите Жанры"
                            }, null, 8, ["item-props", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCard, {
                          variant: "text",
                          class: "anime-filter-content-v-card pl-4 pr-4",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, {
                              class: "pa-0",
                              style: { "font-size": "1em" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Cортировка")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, {
                              class: "pa-0",
                              style: { "font-size": "0.9em", "white-space": "normal !important" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Пожалуйста, выберите предпочтительный порядок сортировки из списка опций: ")
                              ]),
                              _: 1
                            }),
                            createVNode(VSelect, {
                              density: "comfortable",
                              variant: "outlined",
                              clearable: "",
                              class: "mt-2",
                              "item-props": $options.itemProps,
                              items: _ctx.sortItems,
                              label: "Cортировать По"
                            }, null, 8, ["item-props", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCard, {
                          variant: "text",
                          class: "anime-filter-content-v-card pl-4 pr-4",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, {
                              class: "pa-0",
                              style: { "font-size": "1em" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Сезон")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, {
                              class: "pa-0",
                              style: { "font-size": "0.9em", "white-space": "normal !important" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Пожалуйста, выберите желаемый сезон из предложенных вариантов: ")
                              ]),
                              _: 1
                            }),
                            createVNode(VSelect, {
                              density: "comfortable",
                              variant: "outlined",
                              clearable: "",
                              class: "mt-2",
                              "item-props": $options.itemProps,
                              items: _ctx.yearItems,
                              label: "Выбирите Сезон"
                            }, null, 8, ["item-props", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode(VCard, {
                          variant: "text",
                          class: "anime-filter-content-v-card pl-4 pr-4",
                          width: "100%"
                        }, {
                          default: withCtx(() => [
                            createVNode(VCardTitle, {
                              class: "pa-0",
                              style: { "font-size": "1em" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode("Оценка")
                              ]),
                              _: 1
                            }),
                            createVNode(VCardSubtitle, {
                              class: "pa-0",
                              style: { "font-size": "0.9em", "white-space": "normal !important" }
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Выберите параметры для сортировки аниме по оценкам: ")
                              ]),
                              _: 1
                            }),
                            createVNode(VSelect, {
                              density: "comfortable",
                              variant: "outlined",
                              clearable: "",
                              class: "mt-2",
                              "item-props": $options.itemProps,
                              items: _ctx.ratingItems,
                              label: "Выбирите Оценку"
                            }, null, 8, ["item-props", "items"])
                          ]),
                          _: 1
                        }),
                        createVNode("div", { class: "submit-filter" }, [
                          createVNode("div", {
                            class: "submit-filter-inner-container pr-4 pl-4 d-flex ga-2 pb-2",
                            style: { "border-radius": "6px" }
                          }, [
                            createVNode(VBtn, {
                              variant: "flat",
                              color: "primary",
                              "prepend-icon": "mdi-check-all"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Поиск ")
                              ]),
                              _: 1
                            }),
                            createVNode(VBtn, {
                              variant: "tonal",
                              color: "red",
                              "prepend-icon": "mdi-window-close"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Сбросить ")
                              ]),
                              _: 1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }, 512), [
                [vShow, _ctx.sidebarVisible]
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AnimeCatalog.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-dbd99fcc"]]);
const _sfc_main = defineComponent$1({
  name: "CatalogView",
  setup() {
    useHead({
      title: "Лучший aниме каталог",
      meta: [
        { name: "description", content: "лучший аниме каталог для поиска и фильтраци любимых аниме" },
        { name: "subject", content: "лучший аниме каталог для поиска и фильтраци любимых аниме" },
        { name: "abstract", content: "лучший аниме каталог" },
        { name: "summary", content: "лучший аниме каталог для поиска и фильтраци любимых аниме" },
        { property: "og:url", content: "https://ota-ku.ru/catalog" },
        { property: "og:title", content: "Ota-ku - Лучший aниме каталог" },
        { property: "og:description", content: "лучший аниме каталог для поиска и фильтраци любимых аниме" },
        { property: "og:image", content: "https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:image", content: "https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png" },
        { name: "twitter:image:src", content: "https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png" },
        { name: "twitter:image:witdh", content: "1200" },
        { name: "twitter:image:height", content: "600" },
        { property: "og:site:name", content: "Ota-ku - Лучший aниме каталог" }
      ]
    });
    return {};
  }
});
const makeVBreadcrumbsDividerProps = propsFactory({
  divider: [Number, String],
  ...makeComponentProps()
}, "VBreadcrumbsDivider");
const VBreadcrumbsDivider = genericComponent()({
  name: "VBreadcrumbsDivider",
  props: makeVBreadcrumbsDividerProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    useRender(() => {
      var _a;
      return createVNode("li", {
        "class": ["v-breadcrumbs-divider", props.class],
        "style": props.style
      }, [((_a = slots == null ? void 0 : slots.default) == null ? void 0 : _a.call(slots)) ?? props.divider]);
    });
    return {};
  }
});
const makeVBreadcrumbsItemProps = propsFactory({
  active: Boolean,
  activeClass: String,
  activeColor: String,
  color: String,
  disabled: Boolean,
  title: String,
  ...makeComponentProps(),
  ...makeRouterProps(),
  ...makeTagProps({
    tag: "li"
  })
}, "VBreadcrumbsItem");
const VBreadcrumbsItem = genericComponent()({
  name: "VBreadcrumbsItem",
  props: makeVBreadcrumbsItemProps(),
  setup(props, _ref) {
    let {
      slots,
      attrs
    } = _ref;
    const link = useLink(props, attrs);
    const isActive = computed(() => {
      var _a;
      return props.active || ((_a = link.isActive) == null ? void 0 : _a.value);
    });
    const color = computed(() => isActive.value ? props.activeColor : props.color);
    const {
      textColorClasses,
      textColorStyles
    } = useTextColor(color);
    useRender(() => {
      return createVNode(props.tag, {
        "class": ["v-breadcrumbs-item", {
          "v-breadcrumbs-item--active": isActive.value,
          "v-breadcrumbs-item--disabled": props.disabled,
          [`${props.activeClass}`]: isActive.value && props.activeClass
        }, textColorClasses.value, props.class],
        "style": [textColorStyles.value, props.style],
        "aria-current": isActive.value ? "page" : void 0
      }, {
        default: () => {
          var _a, _b;
          return [!link.isLink.value ? ((_a = slots.default) == null ? void 0 : _a.call(slots)) ?? props.title : createVNode("a", {
            "class": "v-breadcrumbs-item--link",
            "href": link.href.value,
            "aria-current": isActive.value ? "page" : void 0,
            "onClick": link.navigate
          }, [((_b = slots.default) == null ? void 0 : _b.call(slots)) ?? props.title])];
        }
      });
    });
    return {};
  }
});
const makeVBreadcrumbsProps = propsFactory({
  activeClass: String,
  activeColor: String,
  bgColor: String,
  color: String,
  disabled: Boolean,
  divider: {
    type: String,
    default: "/"
  },
  icon: IconValue,
  items: {
    type: Array,
    default: () => []
  },
  ...makeComponentProps(),
  ...makeDensityProps(),
  ...makeRoundedProps(),
  ...makeTagProps({
    tag: "ul"
  })
}, "VBreadcrumbs");
const VBreadcrumbs = genericComponent()({
  name: "VBreadcrumbs",
  props: makeVBreadcrumbsProps(),
  setup(props, _ref) {
    let {
      slots
    } = _ref;
    const {
      backgroundColorClasses,
      backgroundColorStyles
    } = useBackgroundColor(toRef(props, "bgColor"));
    const {
      densityClasses
    } = useDensity(props);
    const {
      roundedClasses
    } = useRounded(props);
    provideDefaults({
      VBreadcrumbsDivider: {
        divider: toRef(props, "divider")
      },
      VBreadcrumbsItem: {
        activeClass: toRef(props, "activeClass"),
        activeColor: toRef(props, "activeColor"),
        color: toRef(props, "color"),
        disabled: toRef(props, "disabled")
      }
    });
    const items = computed(() => props.items.map((item) => {
      return typeof item === "string" ? {
        item: {
          title: item
        },
        raw: item
      } : {
        item,
        raw: item
      };
    }));
    useRender(() => {
      const hasPrepend = !!(slots.prepend || props.icon);
      return createVNode(props.tag, {
        "class": ["v-breadcrumbs", backgroundColorClasses.value, densityClasses.value, roundedClasses.value, props.class],
        "style": [backgroundColorStyles.value, props.style]
      }, {
        default: () => {
          var _a;
          return [hasPrepend && createVNode("li", {
            "key": "prepend",
            "class": "v-breadcrumbs__prepend"
          }, [!slots.prepend ? createVNode(VIcon, {
            "key": "prepend-icon",
            "start": true,
            "icon": props.icon
          }, null) : createVNode(VDefaultsProvider, {
            "key": "prepend-defaults",
            "disabled": !props.icon,
            "defaults": {
              VIcon: {
                icon: props.icon,
                start: true
              }
            }
          }, slots.prepend)]), items.value.map((_ref2, index, array) => {
            var _a2;
            let {
              item,
              raw
            } = _ref2;
            return createVNode(Fragment, null, [((_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
              item,
              index
            })) ?? createVNode(VBreadcrumbsItem, mergeProps({
              "key": index,
              "disabled": index >= array.length - 1
            }, typeof item === "string" ? {
              title: item
            } : item), {
              default: slots.title ? () => {
                var _a3;
                return (_a3 = slots.title) == null ? void 0 : _a3.call(slots, {
                  item,
                  index
                });
              } : void 0
            }), index < array.length - 1 && createVNode(VBreadcrumbsDivider, null, {
              default: slots.divider ? () => {
                var _a3;
                return (_a3 = slots.divider) == null ? void 0 : _a3.call(slots, {
                  item: raw,
                  index
                });
              } : void 0
            })]);
          }), (_a = slots.default) == null ? void 0 : _a.call(slots)];
        }
      });
    });
    return {};
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_primary_header = __nuxt_component_0;
  const _component_AnimeCatalog = __nuxt_component_1;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_primary_header, null, null, _parent));
  _push(ssrRenderComponent(VLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(VMain, { tag: "main" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(VContainer, { style: { "max-width": "var(--ota-ku-max-width)", "padding": "20px 10px 0 10px", "align-items": "center" } }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(ssrRenderComponent(VBreadcrumbs, {
                      items: ["Главная Страница", "Каталог"],
                      class: "pa-0",
                      style: { "font-size": "0.8em" }
                    }, {
                      divider: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent(VIcon, {
                            icon: "mdi-chevron-right",
                            color: "#9e9e9e"
                          }, null, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode(VIcon, {
                              icon: "mdi-chevron-right",
                              color: "#9e9e9e"
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(ssrRenderComponent(_component_AnimeCatalog, null, null, _parent4, _scopeId3));
                  } else {
                    return [
                      createVNode(VBreadcrumbs, {
                        items: ["Главная Страница", "Каталог"],
                        class: "pa-0",
                        style: { "font-size": "0.8em" }
                      }, {
                        divider: withCtx(() => [
                          createVNode(VIcon, {
                            icon: "mdi-chevron-right",
                            color: "#9e9e9e"
                          })
                        ]),
                        _: 1
                      }),
                      createVNode(_component_AnimeCatalog)
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(VContainer, { style: { "max-width": "var(--ota-ku-max-width)", "padding": "20px 10px 0 10px", "align-items": "center" } }, {
                  default: withCtx(() => [
                    createVNode(VBreadcrumbs, {
                      items: ["Главная Страница", "Каталог"],
                      class: "pa-0",
                      style: { "font-size": "0.8em" }
                    }, {
                      divider: withCtx(() => [
                        createVNode(VIcon, {
                          icon: "mdi-chevron-right",
                          color: "#9e9e9e"
                        })
                      ]),
                      _: 1
                    }),
                    createVNode(_component_AnimeCatalog)
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
          createVNode(VMain, { tag: "main" }, {
            default: withCtx(() => [
              createVNode(VContainer, { style: { "max-width": "var(--ota-ku-max-width)", "padding": "20px 10px 0 10px", "align-items": "center" } }, {
                default: withCtx(() => [
                  createVNode(VBreadcrumbs, {
                    items: ["Главная Страница", "Каталог"],
                    class: "pa-0",
                    style: { "font-size": "0.8em" }
                  }, {
                    divider: withCtx(() => [
                      createVNode(VIcon, {
                        icon: "mdi-chevron-right",
                        color: "#9e9e9e"
                      })
                    ]),
                    _: 1
                  }),
                  createVNode(_component_AnimeCatalog)
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
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const catalog = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  catalog as default
};
//# sourceMappingURL=catalog-Di9v5evF.js.map
