<template>
  <section class="about-us bg-zinc-950 px-2 pt-2 lg:pt-4 w-full">
    <div class="w-full container mx-auto max-w-8xl flex flex-col lg:flex-row items-center justify-between">
      <div class="lg:w-2/3">
        <h2 class="h3 mb-1 text-center md:text-left">О нас</h2>
        <p class="opacity-80 text-sm text-center md:text-left md:text-base mb-2">
          <span class="text-blue-400">Ota-ku.ru</span> — это динамичное сообщество аниме-фанатов, объединяющее людей,
          увлеченных японской анимацией. Наше сообщество предоставляет площадку для обсуждения любимых сериалов, фильмов
          и манги, а также для обмена мнениями и рекомендациями. Мы организуем тематические обсуждения, конкурсы и
          мероприятия, чтобы каждый мог найти единомышленников и погружаться в мир аниме на новом уровне.
        </p>
        <p class="opacity-80 text-sm text-center md:text-left md:text-base mb-2">
          Мы стремимся создать комфортное и поддерживающее пространство, где каждый участник может свободно делиться
          своими впечатлениями, обсуждать новые тренды и открывать для себя новые интересные произведения. На нашем
          сайте вы найдете не только обсуждения и рецензии, но и полезные ресурсы, такие как гайды, новости и
          рекомендации.
        </p>
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
      <div class="lg:w-1/3 mt-4 lg:mt-0 lg:pl-8 hidden lg:block">
        <NuxtImg src="/person/kitagawa.png" alt="Ota-ku.ru"
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
