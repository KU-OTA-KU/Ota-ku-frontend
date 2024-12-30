<template>
  <v-layout>
    <v-main tag="main">
      <TopSlider/>
      <MostAnimeList/>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'IndexView',

  setup() {
    useHead({
      title: "Твой Личный Портал в Мир Аниме",
      meta: [
        { name: 'description', content: 'Лучшие аниме онлайн бесплатно с русской озвучкой!' },
        { name: 'subject', content: 'Смотреть лучшие аниме онлайн бесплатно на русском!' },
        { name: 'abstract', content: 'Смотреть лучшие аниме на русском' },
        { name: 'summary', content: 'Смотреть лучшие аниме онлайн бесплатно на русском!' },
        { property: 'og:url', content: 'https://ota-ku.ru' },
        { property: 'og:title', content: 'Ota-ku - Твой Личный Портал в Мир Аниме' },
        { property: 'og:description', content: 'Лучшие аниме онлайн бесплатно с русской озвучкой!'},
        { property: 'og:image', content: 'https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png' },
        { name: 'twitter:card', content: 'summary_large_image'},
        { name: 'twitter:image', content: 'https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png' },
        { name: 'twitter:image:src', content: 'https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png'},
        { name: 'twitter:image:witdh', content: '1200'},
        { name: 'twitter:image:height', content: '600'},
        { property: 'og:site:name', content: 'Ota-ku - Твой Личный Портал в Мир Аниме' },
      ]
    });

    return {};
  }
});

</script>

