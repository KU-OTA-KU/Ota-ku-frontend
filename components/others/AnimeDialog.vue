<template>
  <v-dialog v-model="dialog" class="most-anime-dialog-modal-panel">
    <v-card class="d-flex flex-column most-anime-dialog-modal-panel-card" rounded="lg">
      <div class="most-anime-dialog-modal-panel-one">
        <v-carousel style="width: 100%;" class="most-anime-dialog-modal-carousel" hide-delimiters>
          <v-carousel-item>
            <v-img cover :lazy-src="selectedAnime.poster.originalUrl" :src="selectedAnime.poster.originalUrl"
                   :alt="selectedAnime.russian" width="100%"></v-img>
            <div class="position-absolute top-0 d-flex ga-1 ma-2">
              <span class="top-0 pt-0 pb-0 pl-2 pr-2" style="background-color: limegreen; border-radius: 5px; font-size: 1em;" v-if="selectedAnime.score != 0">{{ selectedAnime.score }}</span>
              <span class="top-0 pt-0 pb-0 pl-2 pr-2" style="background-color: indianred; border-radius: 5px; font-size: 1em;">720p</span>
            </div>
          </v-carousel-item>
          <v-carousel-item v-for="video in selectedAnime.videos">
            <iframe
                :src="video.playerUrl"
                width="100%"
                height="100%"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
          </v-carousel-item>
        </v-carousel>

      </div>
      <div class="most-anime-dialog-modal-panel-two">
        <v-card-title class="headline pb-0 d-flex justify-space-between mb-2 text-wrap" style="font-size: 1.3em">
          {{ selectedAnime.russian }}
          <!--<v-btn variant="tonal" min-width="30px" min-height="30px" @click="closeDialog">-->
          <!--<v-icon>mdi-close</v-icon>-->
          <!--</v-btn>-->
        </v-card-title>
        <v-card-subtitle class="d-flex ga-1" style="font-size: 0.8em">
          <div>Тип: {{ selectedAnime.kind }}</div>
          <span>•</span>
          <div>Оценка: {{ selectedAnime.score }}</div>
          <span>•</span>
          <div>Эпизоды: {{ selectedAnime.episodes }}</div>
          <span>•</span>
          <div>Год выхода: {{ selectedAnime.airedOn.year }}</div>
        </v-card-subtitle>
        <v-card-actions class="d-flex pa-4 most-anime-dialog-modal-panel-actions">
          <v-btn prepend-icon="mdi-play" variant="flat" :loading="loading" color="primary"
                 @click="openAnime(selectedAnime.id)">Смотреть
          </v-btn>
          <v-btn prepend-icon="mdi-bookmark" variant="tonal" disabled>В избранное
          </v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
import {defineComponent} from 'vue';
import {cleanDescription} from "@/ts/cleanDescription.ts";
import {openAnime} from '@/ts/goTo.ts';

export default defineComponent({
  props: {
    selectedAnime: Object,
  },
  data() {
    return {
      cleanDescription,
      openAnime,
      dialog: false,
      loading: false,
    }
  },
  emits: ['update:dialog', 'open-anime'],
  methods: {
    openDialog() {
      this.dialog = true;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
});
</script>

<style scoped lang="sass">
.most-anime-dialog-modal-carousel
  height: 600px !important

.most-anime-dialog-modal-panel
  max-width: 700px

  &-one, &-two
    width: 100%

@media screen and (max-width: 910px)
  .most-anime-dialog-modal-carousel
    height: 400px !important

  .most-anime-dialog-modal-panel
    max-width: 700px !important

@media screen and (max-width: 600px)
  .most-anime-dialog-modal-carousel
    height: 350px !important

  .most-anime-dialog-modal-panel
    max-width: 500px !important

    .most-anime-dialog-modal-panel-actions
      flex-direction: column !important
      gap: 10px

      button
        width: 100%
        margin-inline-start: 0 !important

    .most-anime-dialog-modal-panel-text
      display: none !important

@media screen and (max-width: 425px)
  .most-anime-dialog-modal-panel
    max-width: 500px !important
</style>
