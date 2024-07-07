<template>
  <NuxtPage/>
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
