import { defineNuxtPlugin } from '#app';
import Toast, {type PluginOptions, POSITION } from 'vue-toastification';
// import 'vue-toastification/dist/index.css';
import 'assets/css/toastification.css';

const options: PluginOptions = {
    position: POSITION.TOP_CENTER,
    timeout: 2,
    closeOnClick: false,
    draggablePercent: 1,
    closeButton: true,
};

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast, options);
});
