<template>
  <section class="about-us bg-zinc-950 px-2 pt-2 lg:pt-4 w-full">
    <div class="w-full container mx-auto max-w-8xl flex flex-col lg:flex-row items-center justify-between">
      <div class="w-full xl:w-2/3 pb-16 xl:pb-0">
        <h2 class="h3 mb-1 text-center md:text-left">О нас</h2>
        <p class="opacity-80 text-sm text-center md:text-left md:text-base mb-2">
          Наши активные участники также могут присоединиться к команде модераторов или стать авторами статей, помогая
          нам поддерживать высокое качество контента и взаимодействовать с другими членами сообщества. Мы всегда рады
          новым идеям и активным участникам, которые хотят внести свой вклад в развитие нашего проекта.
        </p>
        <p class="opacity-80 text-sm text-center md:text-left md:text-base mb-2">
          Если вы увлечены разработкой и хотите внести свой вклад в развитие <span
            class="text-blue-400">Ota-ku.ru</span>, мы приглашаем вас стать частью нашей команды. Исходный код нашего
          проекта доступен в публичном репозитории. Вы можете изучить код, предложить улучшения или даже создать свои
          собственные функции.  <NuxtLink to="/" class="link link-primary">Стать разработчиком</NuxtLink>
        </p>
      </div>
      <div class="lg:w-1/4 mt-4 lg:mt-0 lg:pl-8 hidden  xl:block">
        <NuxtImg src="/person/L.png" alt="Ota-ku.ru"
          class="pointer-events-none select-none w-full h-auto rounded-lg shadow-lg" loading="lazy" format="webp">
        </NuxtImg>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "aboutUsComponent",
}); 
</script>
