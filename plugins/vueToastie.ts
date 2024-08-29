import { defineNuxtPlugin } from '#app';
import Toast, {type PluginOptions } from 'vue-toastification';
// import 'vue-toastification/dist/index.css';
import 'assets/css/toastification.css';

const { POSITION } = Toast;
const options: PluginOptions = {
    position: POSITION.TOP_RIGHT,
    timeout: 4000,
    closeOnClick: false,
    draggablePercent: 1,
    closeButton: true,
};

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast, options);
});
