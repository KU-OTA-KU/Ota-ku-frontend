<template>
  <section class="px-2 py-2 lg:py-4 bg-zinc-950 flex flex-col md:flex-row justify-between">
    <div class="w-full container max-w-8xl mx-auto">
      <h1 class="h2 text-4xl font-bold mb-1">
        <span class="text-blue-500">OTA</span>-KU
        <span class="opacity-80 text-lg md:text-2xl">/ версия 5.0.0 "Новое начало"</span>
      </h1>
      <p class="opacity-80 text-sm md:text-base">
        Мы рады представить вам последнюю версию нашего приложения OTA-KU! В этой версии мы добавили множество новых
        функций и улучшений, чтобы сделать ваше использование приложения еще более увлекательным и удобным.
      </p>
      <div v-if="showMore">
        <p class="opacity-80 text-sm md:text-base mt-2">
          Среди новых функций стоит отметить улучшенный интерфейс, который стал более интуитивным и удобным. Мы
          переработали
          дизайн, чтобы он был более современным и соответствовал ожиданиям наших пользователей. Теперь навигация по
          приложению
          стала еще проще и понятнее.
        </p>
        <p class="opacity-80 text-sm md:text-base mt-2">
          Кроме того, мы внедрили новую систему рекомендаций, которая будет предлагать вам аниме на основе ваших
          предпочтений
          и истории просмотра. Это позволит вам легко находить новые и интересные аниме, которые могут вам понравиться.
        </p>
        <p class="opacity-80 text-sm md:text-base mt-2">
          Мы также улучшили производительность приложения, чтобы оно работало быстрее и стабильнее. Теперь загрузка
          страниц
          и видео происходит намного быстрее, а воспроизведение видео стало более плавным и без задержек.
        </p>
      </div>
      <button class="transition-colors button button-secondary mt-2" @click="toggleShowMore">
        {{ showMore ? 'Скрыть' : 'Подробнее' }}
      </button>
    </div>
  </section>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: "UpdateListComponent",

  setup() {
    const showMore = ref(false);

    const toggleShowMore = () => {
      showMore.value = !showMore.value;
    };

    return {
      showMore,
      toggleShowMore
    }
  }
});
</script>

<style scoped></style>
