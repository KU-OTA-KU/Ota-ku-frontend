<template>
  <section class="w-full bg-zinc-950 px-2 py-2 lg:py-4">
    <div v-for="res in data" :key="res.id"
      class="container max-w-8xl mb-2 lg:mb-4 mx-auto flex flex-col gap-2 md:gap-5 md:flex-row">
      <div class="w-full lg:w-4/5 overflow-hidden aspect-video relative">
        <NuxtImg :src="res.image" class="h-full w-full rounded-lg" style="object-fit: cover; object-position: center;"
          loading="lazy" format="webp"></NuxtImg>
        <div class="w-full h-full absolute top-0 bg-custom-feed-gradient-t z-10"></div>
      </div>
      <div class="text-left lg:text-right w-full container-text">
        <div>
          <h2 class="h3 mb-1">{{ res.titleRU }}</h2>
          <div class="flex lg:justify-end container-genres opacity-65 mt-1 mb-1 text-sm md:text-base md:mt-2 md:mb-2">
            <p class="" v-for="(genre, index) in res.genres" :key="index">{{ genre }}<span
                v-if="index < res.genres.length - 1" class="mr-3 ml-3">•</span>
            </p>
          </div>
          <p class="line-clamp-6 opacity-80 text-xs md:text-base">{{ res.descriptionRU }}</p>
          <div class="mt-4 mb-1 flex-col gap-2 md:mt-3 md:mb-3 flex md:flex-row w-full md:w-auto">
            <NuxtLink class="transition-colors button button-third"><svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                  d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z">
                </path>
              </svg>Смотреть </NuxtLink><NuxtLink class="transition-colors button button-secondary"><svg class="w-5 h-5 fill-white"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path
                  d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z">
                </path>
              </svg>В избранное</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
export default defineComponent({
  name: "feedPanelComponent",
  setup() {
    const data = ref(null);

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/feedPanel.json');
        data.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchData();
    });

    return { data };
  },
}); 
</script>

<style scoped>
.container:nth-child(2) {
  @apply lg:flex-row-reverse
}

.container:nth-child(2) .container-text {
  @apply lg:text-left
}

.container:nth-child(2) .container-genres {
  @apply lg:justify-start
}
</style>