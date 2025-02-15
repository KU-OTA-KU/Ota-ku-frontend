<template>
  <v-container class="d-flex pa-2"
               style="max-width: var(--ota-ku-max-width);">
    <v-skeleton-loader
        v-if="topSliderAnimeList.length === 0"
        type="list-item-three-line, list-item-three-line, list-item-three-line, list-item-three-line"
        width="100%"
        style="border-radius: 20px; height: var(--top-slider-height);"
    >
    </v-skeleton-loader>
    <v-carousel
        v-else
        hide-delimiter-background
        cycle
        model-value="1"
        direction="vertical"
        show-arrows="hover"
        style="border-radius: 20px; height: var(--top-slider-height);"
    >
      <v-carousel-item
          v-for="anime in topSliderAnimeList"
          :key="anime.id"
          cover
          link
      >
        <v-img
            class="top-slider-anime-image"
            :lazy-src="anime.poster.originalUrl"
            :src="anime.poster.originalUrl"
            :alt="anime.russian"
            cover
            style="position: absolute; right: 0;"
        >

        </v-img>
        <v-card class="pa-4 d-flex flex-column justify-center top-slider-anime-card" hover link :ripple="false"
        >
          <v-card-title class="pa-0 fill-height align-end text-wrap top-slider-anime-title"
                        v-text="anime.russian"></v-card-title>
          <v-card-subtitle class="pa-0">Оценка {{ anime.score }}</v-card-subtitle>
          <v-card-subtitle class="pa-0 top-slider-anime-cart-text">
            <p>{{ cleanDescription(anime.description) }}</p>
          </v-card-subtitle>
          <v-card-actions class="pa-0">
            <v-btn variant="flat" color="white" prepend-icon="mdi-play" :loading="loading"
                   @click="openAnime(anime.id)">
              Смотреть
            </v-btn>
            <v-btn icon="mdi-bookmark-outline" variant="tonal" rounded="lg" size="x-small"></v-btn>
            <v-btn icon="mdi-dots-vertical" variant="tonal" rounded="lg" size="x-small"></v-btn>
          </v-card-actions>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import axios from "axios";
import {cleanDescription} from "~/ts/cleanDescription";
import {openAnime} from "~/ts/goTo";

export default defineComponent({
  name: "TopSlider",

  data() {
    return {
      cleanDescription,
      openAnime,
      topSliderAnimeList: [],
      loading: ref(false),
    }
  },

  mounted() {
    this.loadData();
  },

  methods: {
    async loadData() {
        await this.fetchAnimeData();
    },
    async fetchAnimeData() {
      try {
        this.loading = true;
        const response = await axios.post("https://shikimori.one/api/graphql", {
          query: `
            query {
              animes(season: "2023_2024", limit: 5, order: popularity, status: "released", kind: "tv") {
                id
                russian
                score
                poster {
                  originalUrl
                }
                description
              }
            }
          `
        }, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
        });

        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }

        const animeList = response.data.data.animes;
        this.topSliderAnimeList = animeList;

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 2);

      } catch (error) {
        console.error('Error fetching anime data:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});
</script>

<style lang="sass" scoped>
.top-slider-anime-card
  background: linear-gradient(90deg, rgba(10, 10, 10, 1) 0%, rgba(10, 10, 10, 1) 52%, rgba(10, 10, 10, 0.4) 100%)
  min-height: var(--top-slider-height)

.top-slider-anime-image
  width: 48%

.top-slider-anime-title
  font-weight: 600
  font-family: 'Kashima', sans-serif
  letter-spacing: 5px
  line-height: 100%
  font-size: 2em

.top-slider-anime-cart-text
  width: 70%
  display: -webkit-box
  -webkit-line-clamp: 5
  -webkit-box-orient: vertical
  overflow: hidden
  max-height: 115px
  white-space: normal
  font-family: 'Inter', sans-serif

@media screen and (max-width: 600px)
  .top-slider-anime-image
    width: 100%

  .top-slider-anime-card
    background: rgba(10, 10, 10, 0.7)

  .top-slider-anime-cart-text
    width: 100%
</style>
