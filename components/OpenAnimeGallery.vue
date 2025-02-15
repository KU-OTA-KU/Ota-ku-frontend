<template>
  <section>
    <v-container
        style="max-width: var(--ota-ku-max-width); padding: 10px 10px 10px 10px; align-items: center;">
      <v-card rounded="lg" variant="text" class="ota-anime-containers">
        <v-card-title class="ota-anime-containers-v-title pa-0">Кадры</v-card-title>
        <v-card-subtitle class="ota-anime-containers-v-subtitle pa-0">Топ кадры из аниме</v-card-subtitle>
        <v-slide-group class="slide-group-gallery">
          <v-slide-group-item
              v-for="(image, index) in screenshots">
            <v-img
                width="250"
                aspect-ratio="1.6"
                rounded="lg"
                cover
                class="ma-xxl-2 ma-xl-2 ma-lg-2 ma-md-1 ma-sm-1 ma-1"
                :lazy-src="image"
                :src="image"
            >
            </v-img>
          </v-slide-group-item>
        </v-slide-group>
      </v-card>
    </v-container>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "",

  props: {
    screenshots: [],
  },
});
</script>