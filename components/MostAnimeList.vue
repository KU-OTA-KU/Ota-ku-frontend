<template>
  <v-container class="most-anime-container pa-2"
               style="max-width: var(--ota-ku-max-width)">
    <div v-if="mostAnimeList.length === 0">
      <v-card variant="text" class="pa-0" v-for="n in 10" :key="n">
        <v-skeleton-loader
            class="mb-3"
            type="list-item-two-line"
        >
        </v-skeleton-loader>
      </v-card>
    </div>
    <div v-else>
      <div v-for="category in mostAnimeList" :key="category.title" class="">
        <v-card variant="text" class="ota-anime-containers pa-0">
          <v-card-title class="ota-anime-containers-v-title pa-0 d-flex justify-space-between align-center">
            {{ category.title }}
            <v-btn size="small" rounded="xl" variant="flat" color="primary" class="text-capitalize" @click="this.$router.push(`catalog?${category.moreLink}`)">
              Больше
            </v-btn>
          </v-card-title>
          <v-card-subtitle class="ota-anime-containers-v-subtitle pa-0">{{ category.description }}</v-card-subtitle>
          <v-row dense class="most-anime-container mt-0">
            <v-col v-for="anime in category.anime" :key="anime.id" cols="4" xxl="2" xl="2" lg="2" md="2"
                   sm="3" xs="4" class="most-anime-container-item">
              <v-card variant="text" link rounded="lg" @click="openDialog(anime)">
                <div class="position-relative">
                  <v-img lazy-src="" :src="anime.poster.mainUrl"
                         :alt="anime.russian"
                         rounded="lg" aspect-ratio="0.7" cover
                         style="pointer-events: none; user-select: none;"></v-img>
                  <div class="position-absolute top-0 d-flex ga-1 ma-1">
                    <span class="top-0 pt-0 pb-0 pl-2 pr-2" style="background-color: limegreen; border-radius: 5px; font-size: 0.8em;" v-if="anime.score != 0">{{ anime.score }}</span>
                    <span class="top-0 pt-0 pb-0 pl-2 pr-2" style="background-color: indianred; border-radius: 5px; font-size: 0.8em;">720p</span>
                  </div>

                </div>
                <v-card-title class="font-weight-regular pa-0" style="font-size: 1em;">{{
                    anime.russian
                  }}
                </v-card-title>
                <v-card-subtitle class="pa-0 d-flex ga-1 pt-0 pb-3" style="font-size: 0.8em">
                  Тип: {{ anime.kind }}
                  <span>•</span>
                  Эпизоды: {{ anime.episodes }}
                  <v-icon class=""></v-icon>
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </div>
    </div>
  </v-container>

  <anime-dialog
      :selectedAnime="selectedAnime"
      ref="animeDialogRef"
  />
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import axios from "axios";
import {Storage} from "@capacitor/storage";
import AnimeDialog from "@/components/others/AnimeDialog.vue";

export default defineComponent({
  components: {
    AnimeDialog,
  },
  data() {
    return {
      selectedAnime: {},
      mostAnimeList: [],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const {value} = await Storage.get({key: 'mostAnimeList'});
        const {value: expirationDateString} = await Storage.get({key: 'mostAnimeListExpirationDate'});

        if (value && expirationDateString) {
          const expirationDate = parseInt(expirationDateString, 10);
          const currentDate = new Date().getTime();

          if (currentDate < expirationDate) {
            this.mostAnimeList = JSON.parse(value);
          } else {
            await this.fetchAnimeData();
          }
        } else {
          await this.fetchAnimeData();
        }
      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    },
    async fetchAnimeData() {
      try {
        const response = await axios.post("https://shikimori.one/api/graphql", {
          query: `
                query {
                  ongoingAnime: animes(season: "2023_2024", limit: 6, order: popularity, status: "ongoing", kind: "tv") {
                    id
                    russian
                    kind
                    score
                    description
                    episodes
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  anonseAnime: animes(season: "2023_2024", limit: 6, order: popularity, status: "anons", kind: "tv,ona,ova") {
                    id
                    russian
                    kind
                    score
                    description
                    episodes
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  topAnime: animes(limit: 6, order: ranked, status: "released", kind: "tv") {
                    id
                    russian
                    kind
                    score
                    description
                    episodes
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  releasedAnime: animes(limit: 6, order: popularity, status: "released", kind: "tv") {
                    id
                    russian
                    kind
                    score
                    description
                    episodes
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  filmsAnime: animes(season: "2020_2024", limit: 6, order: popularity, status: "released", kind: "movie") {
                    id
                    russian
                    kind
                    score
                    description
                    episodes
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  ovaAnime: animes(season: "2022_2024", limit: 6, order: popularity, status: "released", kind: "ova") {
                    id
                    russian
                    kind
                    score
                    description
                    episodes
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                  onaAnime: animes(season: "2022_2024", limit: 6, order: popularity, status: "released", kind: "ona") {
                    id
                    russian
                    kind
                    score
                    description
                    episodes
                    videos { playerUrl }
                    poster {
                      mainUrl
                      originalUrl
                    }
                    airedOn {
                      year
                    }
                  }
                }
              `,
        }, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });

        if (response.status !== 200) {
          throw new Error("Failed to fetch data");
        }

        const data = response.data;
        const animeList = [
          {
            title: "Онгоинги",
            description: "Вступай в новые эпизоды приключений, следи за сюжетом!",
            anime: data.data.ongoingAnime,
            moreLink: 'status=ongoing&order=popularity',
          },
          {
            title: "Популярные ONA",
            description: "ONA с уникальными и захватывающими сюжетами!",
            anime: data.data.onaAnime,
            moreLink: 'kind=ona&order=popularity',
          },
          {
            title: "Топ аниме",
            description: "Погружайся в лучшие произведения аниме!",
            anime: data.data.topAnime,
            moreLink: 'kind=tv&order=popularity',
          },
          {
            title: "Популярные OVA",
            description: "Эксклюзивные анимационные произведения!",
            anime: data.data.ovaAnime,
            moreLink: 'kind=ova&order=popularity',
          },
          {
            title: "Анонсы",
            description: "Узнавай первым о предстоящих релизах!",
            anime: data.data.anonseAnime,
            moreLink: 'status=anons&order=popularity',
          },
          {
            title: "Завершенные",
            description: "Проведи время в компании классических аниме!",
            anime: data.data.releasedAnime,
            moreLink: 'released=anons&order=popularity',
          },
          {
            title: "Фильмы",
            description: "Эксклюзивная коллекция фильмов для наслаждения!",
            anime: data.data.filmsAnime,
            moreLink: 'kind=movie&released=anons&order=popularity',
          },
        ];

        this.mostAnimeList = animeList;
        await Storage.set({
          key: 'mostAnimeList',
          value: JSON.stringify(animeList),
        });

        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 2);

        await Storage.set({
          key: 'mostAnimeListExpirationDate',
          value: expirationDate.getTime().toString(),
        });

      } catch (error) {
        console.error('Error fetching anime data:', error);
      }
    },
    openDialog(anime: number) {
      this.selectedAnime = anime;
      this.$refs.animeDialogRef.openDialog();
    }
  },
});
</script>

<style lang="sass" scoped>
</style>
