import { defineNuxtPlugin } from '#app';
import Toast, {type PluginOptions } from 'vue-toastification';
// import 'vue-toastification/dist/index.css';
import 'assets/css/toastification.css';

const options: PluginOptions = {
    position: 'top-right',
    timeout: 2500,
    pauseOnFocusLoss: false,
    pauseOnHover: false,
    showCloseButtonOnHover: true,
    draggable: true,
    draggablePercent: 0.30,
    filterToasts: toasts => {
        // Keep track of existing types
        const types = {};
        return toasts.reduce((aggToasts, toast) => {
            // Check if type was not seen before
            if (!types[toast.type]) {
                aggToasts.push(toast);
                types[toast.type] = true;
            }
            return aggToasts;
        }, []);
    }
};

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(Toast, options);
});
