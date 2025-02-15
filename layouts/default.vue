<template>
  <NuxtPage></NuxtPage>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {App as CapacitorApp} from '@capacitor/app';

export default defineComponent({
  name: "default",

  data() {
    return {
      progress: 0,
    };
  },

  setup() {
    useHead({
      meta: [
        { name: 'author', content: 'ota-ku' },
        { name: 'language', content: 'RU' },
        { property: 'og:image:width', content: '1200'},
        { property: 'og:image:height', content: '600'},
        { property: 'ot:image:type', content: 'image/png'},
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'ru' },
        { name: 'topic', content: 'ota-ku, аниме смотреть, аниме, лучшие аниме онлайн бесплатно, ота-ку, сайт аниме отаку, лучшие топ аниме смотреть'},
        { name: 'keywords', content: 'Ota-ku - Твой Личный Портал в Мир Аниме, аниме смотреть, аниме, лучшие аниме онлайн бесплатно, ота-ку, сайт аниме отаку, лучшие топ аниме смотреть'},
      ]
    });

    return{};
  },

  mounted() {
    // watch(
    //     () => this.$route,
    //     (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    //       console.log('routeChanged:', to.fullPath);
    //       setTimeout(function compileToFunction() {
    //         window.scrollTo({top: 0});
    //       },2)
    //     }
    // );

    let lastBackPress = 0;
    CapacitorApp.addListener('backButton', () => {
      const currentTime = new Date().getTime();
      if (currentTime - lastBackPress < 2000) {
        CapacitorApp.exitApp();
      } else {
        lastBackPress = currentTime;
        window.history.back();
      }
    });
  },
});
</script>
