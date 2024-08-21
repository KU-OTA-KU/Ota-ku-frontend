<template>
  <Swiper class="w-full bg-black main-slider" :modules="[SwiperAutoplay, SwiperEffectFade]" :slides-per-view="1"
    :loop="true" :effect="'fade'" :autoplay="{
      delay: 5000,
      disableOnInteraction: true,
    }" :fade-effect="{
      crossFade: true,
    }">
    <SwiperSlide v-for="res in data" :key="res.id">
      <div class="w-full h-full relative">
        <div class="w-full h-full bg-custom-gradient-t md:bg-custom-gradient-r z-10 absolute"></div>
        <NuxtImg :src="res.image" class="absolute right-0 h-full w-dvw"
          style="object-fit: cover; object-position: center;" loading="lazy" format="webp"></NuxtImg>
        <div class="relative w-full h-full p-2">
          <div
            class="relative w-full max-w-8xl mx-auto container flex flex-col items-start justify-end md:justify-center z-10 h-full">
            <h2 class="h2 mb-1 md:mb-3">{{ res.titleRU }}</h2>
            <h2 class="h3 opacity-65">{{ res.titleEN }}</h2>
            <div class="flex opacity-65 mt-1 mb-1 text-sm md:text-base md:mt-3 md:mb-3">
              <p class="" v-for="(genre, index) in res.genres" :key="index">{{ genre }}<span
                  v-if="index < res.genres.length - 1" class="mr-3 ml-3">•</span>
              </p>
            </div>
            <p class="lg:max-w-3xl text-sm md:text-base font-normal  opacity-80 md:font-semibold line-clamp-6">{{ res.description }}
            </p>
            <div class="mt-4 mb-1 flex-col gap-2 md:mt-3 md:mb-3 flex md:flex-row w-full md:w-auto">
              <NuxtLink class="transition-colors button button-third">
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
                </svg>Смотреть
              </NuxtLink>
              <NuxtLink class="transition-colors button button-secondary"><svg class="w-5 h-5 fill-white"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z">
                  </path>
                </svg>В избранное</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  </Swiper>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: "mainSliderComponent",

  setup() {
    const data = ref(null);

    const fetchData = async () => {
      try {
        const response = await axios.get('/api/mainSlider.json');
        data.value = response.data.sort(() => Math.random() - 0.5);
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
<style scoped lang="scss">
.main-slider {
  height: 100vh;


  @media screen and (max-width: 767px) {
    & {
      height: 70vh;
    }
  }
}
</style>