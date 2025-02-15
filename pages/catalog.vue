<template>
  <primary-header/>
  <v-layout>
    <v-main tag="main">
      <v-container style="max-width: var(--ota-ku-max-width); padding: 20px 10px 0 10px; align-items: center;">
        <v-breadcrumbs :items="['Главная Страница', 'Каталог']" class="pa-0" style="font-size: 0.8em">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right" color="#9e9e9e"></v-icon>
          </template>
        </v-breadcrumbs>
        <AnimeCatalog/>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CatalogView",

  setup() {
    useHead({
      title: "Лучший aниме каталог",
      meta: [
        { name: 'description', content: 'лучший аниме каталог для поиска и фильтраци любимых аниме' },
        { name: 'subject', content: 'лучший аниме каталог для поиска и фильтраци любимых аниме' },
        { name: 'abstract', content: 'лучший аниме каталог' },
        { name: 'summary', content: 'лучший аниме каталог для поиска и фильтраци любимых аниме' },
        { property: 'og:url', content: 'https://ota-ku.ru/catalog' },
        { property: 'og:title', content: 'Ota-ku - Лучший aниме каталог' },
        { property: 'og:description', content: 'лучший аниме каталог для поиска и фильтраци любимых аниме'},
        { property: 'og:image', content: 'https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png' },
        { name: 'twitter:card', content: 'summary_large_image'},
        { name: 'twitter:image', content: 'https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png' },
        { name: 'twitter:image:src', content: 'https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png'},
        { name: 'twitter:image:witdh', content: '1200'},
        { name: 'twitter:image:height', content: '600'},
        { property: 'og:site:name', content: 'Ota-ku - Лучший aниме каталог' },
      ]
    });

    return {};
  }
});
</script>
