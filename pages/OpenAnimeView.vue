<template>
  <v-layout>
    <v-app-bar :elevation="0" color="transparent" scroll-behavior="hide">
      <v-container class="d-flex pa-2" style="max-width: var(--ota-ku-max-width)">
        <v-btn icon="mdi-arrow-left" variant="flat" size="small" rounded="lg" @click="goBack()">
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-home" variant="flat" size="small" rounded="lg" class="mr-3"
               @click="this.$router.push('/')">
        </v-btn>
        <v-btn icon="mdi-dots-vertical" variant="flat" size="small" rounded="lg" disabled>
        </v-btn>
      </v-container>
    </v-app-bar>
  </v-layout>
  <v-layout>
    <v-main v-if="animeList && animeList.poster && currentAnime">
      <!-- background and image-->
      <section class="position-relative">
        <v-parallax
            :src="animeList.poster.originalUrl"
            width="100%"
            cover
            class="anime-background-image"
        >
        </v-parallax>
        <div class="anime-background-shadow position-absolute top-0 ">
        </div>
      </section>
      <!-- name and other info -->
      <section>
        <v-container
            style="max-width: var(--ota-ku-max-width); padding: 0 10px 10px 10px;" class="d-flex ga-5">
          <div style="width: 25%;" class="name-and-other-anime-poster">
            <v-img
                rounded="lg"
                aspect-ratio="0.7"
                cover
                :lazy-src="animeList.poster.miniUrl"
                :src="animeList.poster.main2xUrl"
            >
            </v-img>
          </div>
          <v-card variant="text" style="width: 75%;" class="name-and-other-anime-information">
            <v-card-title class="text-wrap pa-0 pb-1">{{ animeList.russian }}</v-card-title>
            <v-card-subtitle class="text-wrap pa-0 pb-2" style="font-size: 0.9em">{{ animeList.english }} /
              {{ animeList.name }}
            </v-card-subtitle>
            <v-card-text
                class="text-wrap pa-0 pb-2 d-flex flex-column ga-2 anime-and-other-info-v-card-text">
              <span style="font-size: 0.9em">Тип: <i>{{ animeList.kind }}</i></span>
              <span style="font-size: 0.9em">Эпизоды: <i>{{ animeList.episodes }}</i></span>
              <span style="font-size: 0.9em">Статус: <i>{{ animeList.status }}</i></span>
              <span v-if="animeList.nextEpisodeAt != null" style="font-size: 0.9em">Следуюший эпизод: <i>{{
                  formatDate(animeList.nextEpisodeAt, locale)
                }} по {{ locale }}</i></span>
              <span style="font-size: 0.9em">Жанры: <i>{{ genres.join(', ') }}</i></span>
              <span style="font-size: 0.9em">Студии: <i>{{ studios.join(', ') }}</i></span>
              <span
                  style="font-size: 0.9em">Описание: <i>{{ cleanDescription(animeList.description) }}</i></span>
            </v-card-text>
          </v-card>
        </v-container>
      </section>
      <open-anime-gallery :screenshots="this.screenshots" v-if="this.screenshots.length !== 0"></open-anime-gallery>
      <open-anime-player :currentAnime="this.currentAnime" v-if="this.currentAnime"></open-anime-player>
      <!-- most anime List-->
      <section>
        <v-container
            style="max-width: var(--ota-ku-max-width); padding: 0 10px 10px 10px; align-items: center;">
          <v-card variant="text" rounded="lg" class="ota-anime-containers">
            <v-card-title class="ota-anime-containers-v-title pa-0">Похожые релизы</v-card-title>
            <v-card-subtitle class="ota-anime-containers-v-subtitle pa-0">Аниме и фильмы связеные с франшизой
            </v-card-subtitle>
            <v-row no-gutters>
              <v-col v-if="relatedAnime.length === 0" v-for="n in 4" cols="6" xxl="3" xl="3" lg="3" md="4" sm="4" xs="5"
                     class="pa-2">
                <v-skeleton-loader
                    type="image, list-item-two-line"
                ></v-skeleton-loader>
              </v-col>
              <v-col v-else cols="6" xxl="3" xl="3" lg="3" md="4" sm="4" xs="5"
                     class="pa-1 pa-xs-1 pa-sm-1 pa-md-2 pa-lg-2 pa-xl-2 pa-xxl-2"
                     v-for="related in relatedAnime" @click="this.openAnime(related.id);">
                <v-card link variant="text">
                  <v-img
                      width="100%"
                      aspect-ratio="1.6"
                      rounded="lg"
                      cover
                      :lazy-src="related.main2xUrl"
                      :src="related.main2xUrl"
                  >
                  </v-img>
                  <v-card-title class="pa-0 pt-2" style="font-size: 0.9em">{{
                      related.russian
                    }}
                  </v-card-title>
                  <v-card-subtitle class="pa-0 pt-1" style="font-size: 0.8em">
                    {{ related.relationRu }}
                  </v-card-subtitle>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </section>
    </v-main>
    <v-main v-else>
      <div class="position-absolute d-flex"
           style="background-color: #121212; align-items: center; justify-content: center; z-index: 1010; width: 100vw; height: 100dvh;">
        <div class="loader"></div>
      </div>
    </v-main>
  </v-layout>
</template>

<script lang="ts">
import axios from 'axios';
import {cleanDescription} from "~/ts/cleanDescription";
import {formatDate} from "~/ts/formatDate";
import moment from 'moment-timezone';
import {openAnime} from "@/ts/goTo";
import Banner from "@/components/others/Banner.vue";
import OpenAnimeGallery from "@/components/OpenAnimeGallery.vue";
import OpenAnimePlayer from "@/components/OpenAnimePlayer.vue";

export default {
  components: {
    Banner,
    OpenAnimeGallery,
    OpenAnimePlayer,
  },
  mounted() {
    const animeId = this.$route.query.animeId;
    this.locale = moment.tz.guess();
    if (animeId) {
      this.fetchAnime(animeId);
      this.currentAnime = animeId;
    } else {
      this.goBack();
    }

    this.$watch(
        () => this.$route.query.animeId,
        (newValue, oldValue) => {
          if (newValue !== oldValue) {
            this.fetchAnime(newValue);
            this.currentAnime = newValue;
          }
        }
    );
  },
  data() {
    return {
      animeList: null,
      currentAnime: '',
      genres: [],
      studios: [],
      screenshots: [],
      locale: 'ru',
      mostList: [],
      openAnime,
    };
  },
  methods: {
    formatDate,
    cleanDescription,
    async fetchAnime(animeId: number) {
      try {
        const response = await axios.post('https://shikimori.one/api/graphql', {
          query: `
                        query {
                          animes(ids: "${animeId}" limit: 1) {
                            name
                            russian
                            english
                            episodes
                            kind
                            status
                            description
                            nextEpisodeAt
                            genres { id russian }
                            studios { id name }
                            poster { originalUrl miniUrl mainUrl main2xUrl}
                            screenshots { id x332Url }
                            related { id anime { id russian poster { main2xUrl } } relationRu }
                          }
                        }
                    `
        }, {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        });

        if (response.status !== 200) {
          this.$router.push(`/error`);
        } else {
          this.animeList = response.data.data.animes[0];
          this.genres = this.animeList.genres.map(item => item.russian);
          this.studios = this.animeList.studios.map(item => item.name);
          this.screenshots = this.animeList.screenshots.map(item => item.x332Url);
          this.relatedAnime = this.animeList.related
              .filter(item => item.anime !== null)
              .map(item => ({
                id: item.anime.id,
                russian: item.anime.russian,
                main2xUrl: item.anime.poster.main2xUrl,
                relationRu: item.relationRu
              }));
        }
      } catch (error) {
        this.$router.push(`/error`);
      }
    },
    goBack() {
      window.history.back();
    },
  },
}
</script>

<style lang="sass">
.loader
  width: 40px
  padding: 6px
  aspect-ratio: 1
  border-radius: 50%
  background: #e3e3e3
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box
  -webkit-mask: var(--_m)
  mask: var(--_m)
  -webkit-mask-composite: source-out
  mask-composite: subtract
  animation: l3 1s infinite linear

  @keyframes l3
    to
      transform: rotate(1turn)

.anime-background-shadow
  width: 100%
  height: 100%
  background: rgb(18, 18, 18)
  background: linear-gradient(0deg, rgba(18, 18, 18, 1) 5%, rgba(18, 18, 18, 0.2049194677871149) 100%)

.anime-background-image
  height: 500px

.anime-and-other-info-v-card-text
  span
    font-weight: bold

    i
      font-weight: normal
      font-style: normal
      opacity: 0.7

@media screen and (max-width: 768px)
  .name-and-other-anime-poster
    display: none

  .name-and-other-anime-information
    width: 100% !important


.slide-group-gallery
  position: relative
  overflow: hidden

  .v-slide-group__prev,
  .v-slide-group__next
    position: absolute
    z-index: 2
    height: 100%

  .v-slide-group__next
    right: 0

  .v-slide-group__prev
    left: 0
</style>
