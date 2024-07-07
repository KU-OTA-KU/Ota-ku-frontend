<template>
  <section>
    <v-container
        style="max-width: var(--ota-ku-max-width); padding: 0 10px 10px 10px; align-items: center;">
      <div style="width: 100%;  aspect-ratio: 177 / 100; border-radius: 10px; overflow: hidden">
        <iframe
            :src="'//kodik.cc/find-player?shikimoriID=' + currentAnime + '&prioritizeTranslations=[' + currentAnimeVoice + ']&blockInCountries=turkey,azerbadjan&types=anime,anime-serial'"
            width="100%" height="100%" frameborder="0" allowfullscreen
            allow="autoplay *; fullscreen *"></iframe>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: 'OpenAnimePlayer',
  props: {
    currentAnime: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      currentAnimeVoice: 610,
    };
  }
});
</script>