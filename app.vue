<template>
  <NuxtLayout />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { App as CapacitorApp } from '@capacitor/app';

export default defineComponent({
  name: "appGlobalComponent",

  mounted() {
    let lastBackPress = 0;
    CapacitorApp.addListener('backButton', () => {
      const currentTime = new Date().getTime();
      if (currentTime - lastBackPress < 1500) {
        CapacitorApp.exitApp();
      } else {
        lastBackPress = currentTime;
        window.history.back();
      }
    });
  },
});
</script>

<style>
</style>