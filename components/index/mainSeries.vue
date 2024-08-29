<template>
  <section class="w-full bg-zinc-950 px-2 py-2 lg:py-4">
    <div class="max-w-8xl mx-auto container">
      <div class="w-full pb-2 md:pb-4">
        <h2 class="h3">{{ title }}<span class="opacity-80 text-sm md:text-base lg:text-lg ml-2">/ {{ subtitle }}</span>
        </h2>
      </div>
      <div class="w-full">
        <Swiper :modules="[]" :loop="false" :effect="'creative'" :grab-cursor="true" :freeMode="true" :breakpoints="{
          390: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 20
          },
          1440: {
            slidesPerView: 7,
            spaceBetween: 30
          }
        }">
          <SwiperSlide v-if="data" v-for="res in data" :key="res.id" class="series-container">
            <div class="w-full  bg-zinc-800 relative rounded-md overflow-hidden cursor-pointer aspect-1/4">
              <NuxtImg format="webp" :src="res.image" class="w-full h-full object-cover" loading="lazy" />
              <div
                class="w-full h-full flex flex-col justify-end p-2 bg-custom-series-gradient-t absolute bottom-0 transition-opacity title">
                <h4 class="h4 mb-1 line-clamp-2">{{ res.titleRU }}</h4>
                <span class="flex line-clamp-2 opacity-80 text-xs">{{ res.airedOnYear.year }} <span
                    class="mx-1 hidden md:block">•</span>
                  <p class="hidden md:block">{{ res.genres[0].titleRU }}</p><span class="mx-1">•</span>
                  <p>{{ res.kind.kindRU }}</p>
                </span>
              </div>
              <div class="absolute top-0 p-2 flex gap-2 transition-opacity status-bar">
                <div class="bg-red-500 py-0.5 text-xs md:text-sm px-3 rounded-md font-semibold">
                  <p>{{ res.resolution }}</p>
                </div>
                <div class="bg-green-500 py-0.5 text-xs md:text-sm px-3 rounded-md font-semibold">
                  <p>{{ res.score }}</p>
                </div>
              </div>
              <div
                class="absolute top-0 w-full bg-black h-full px-2 pt-2 bg-opacity-70 opacity-0 transition-opacity description">
                <p class="line-clamp-6 text-xs opacity-60 ">{{ res.descriptionRU }}</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: "mainSeriesComponent",

  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    apiFetchPath: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const data = ref(null);

    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/anime/${props.apiFetchPath}.json`);
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

<style scoped lang="scss">
.series-container {
  &:hover {
    .description {
      opacity: 1;
    }

    .status-bar {
      opacity: 0;
    }

    .title {
      opacity: 0;
    }
  }
}
</style>
