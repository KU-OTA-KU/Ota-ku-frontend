<template>
  <footer class="hidden md:block w-full bg-zinc-950 px-1 py-1 lg:py-2 border-t-2 border-zinc-900">
    <div class="container p-4 max-w-8xl mx-auto flex flex-col gap-2 md:gap-5 md:flex-row justify-between mb-7 lg:mb-0">
      <p class="opacity-65 text-center md:text-left">©2023 - 2024 オタ-KU OTA-KU Все права защищены.</p>
      <div class="flex justify-center md:gap-4">
        <NuxtLink class="link link-primary" to="/doc/privacy_policy_ru">Политика</NuxtLink>
        <NuxtLink class="link link-primary" to="/doc/terms_ru">Пользовательское соглашение</NuxtLink>
        <NuxtLink class="link link-primary" to="/doc/authors_ru">Правообладатели</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "footerComponent",
})
</script>