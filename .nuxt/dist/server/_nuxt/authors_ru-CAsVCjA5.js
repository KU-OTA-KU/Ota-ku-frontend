import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
import { ak as _export_sfc } from "../server.mjs";
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
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "authors-container" }, _attrs))} data-v-7f95e8a9><div class="authors-container-inner" data-v-7f95e8a9><div class="authors-container-tit" data-v-7f95e8a9><h1 data-v-7f95e8a9>Для правообладателей:</h1><br data-v-7f95e8a9><span data-v-7f95e8a9> Деятельность сайта Ota-ku.ru осуществляется в соответствии с законодательством Республики Армения в области защиты информации и авторских прав на контент. </span><p data-v-7f95e8a9> Все материалы, размещенные на нашем ресурсе, доступны в свободном доступе и могут быть бесплатно загружены из Интернета. Мы не собираем информацию из сети и не размещаем контент вручную - это происходит в автоматическом режиме. </p><br data-v-7f95e8a9><p data-v-7f95e8a9> Мы строго против публикации нелицензионного контента или материалов, нарушающих авторские права. Вся информация, представленная на нашем сайте, состоит из любительских русскоязычных материалов из свободных источников. </p><br data-v-7f95e8a9><p data-v-7f95e8a9> На <a href="https://ota-ku.ru" data-v-7f95e8a9>Ota-ku.ru</a> мы размещаем только фрагменты материалов, переведенные на русский язык, и контент с любительским переводом для ознакомительного просмотра. Мы не публикуем оригинальные, непереведенные материалы. </p><br data-v-7f95e8a9><p data-v-7f95e8a9> Наша администрация готова сотрудничать с правообладателями контента. Если вы обнаружили материал на нашем сайте, который, по вашему мнению, нарушает ваши авторские права, пожалуйста, свяжитесь с нами по адресу <a href="mailto:w33bv.gl@gmail.com" data-v-7f95e8a9> w33bv.gl@gmail.com </a>, указав следующую информацию: </p><ul data-v-7f95e8a9><li data-v-7f95e8a9>Контактные данные и реквизиты вашей компании.</li><li data-v-7f95e8a9>Прямую ссылку(ссылки) на спорный материал.</li><li data-v-7f95e8a9>Заверенные сканированные копии документов, подтверждающих ваше эксклюзивное право на материал.</li><li data-v-7f95e8a9>Если вы представляете интересы другой компании, приложите копии документов на посреднические услуги. </li></ul><br data-v-7f95e8a9><p data-v-7f95e8a9> Мы обязуемся провести проверку предоставленной информации и связаться с вами в кратчайшие сроки для урегулирования спорного вопроса. </p><p data-v-7f95e8a9> Приносим извинения за возможные неудобства и благодарим за понимание. </p><br data-v-7f95e8a9><p data-v-7f95e8a9> С уважением, Администрация <a href="https://ota-ku.ru" data-v-7f95e8a9>Ota-ku.ru</a></p></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/doc/authors_ru.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const authors_ru = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-7f95e8a9"]]);
export {
  authors_ru as default
};
//# sourceMappingURL=authors_ru-CAsVCjA5.js.map
