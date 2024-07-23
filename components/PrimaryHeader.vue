<template>
  <v-layout style="height: 65px;" class="header-navigation">
    <v-app-bar tag="header" scroll-behavior="elevate" height="65">
      <v-container class="d-flex pa-0" style="max-width: var(--ota-ku-max-width)">
        <v-col align-self="center" class="d-flex">
          <v-toolbar-title style="max-width: 120px; min-width: 120px; margin-right: 20px" @click="navigateToHome"
                           class="cursor-pointer">
            <v-img class="ota-ku-ru-icon user-select-none"
                   src="/ota-kashima/ota-ku-kashima.png"
                   width="100%"
                   alt="ota-ku watch anime in good quality"
            ></v-img>
          </v-toolbar-title>
          <v-toolbar-items class="header-toolbar-items ga-2 align-center d-flex">
            <v-btn variant="flat" class="text-capitalize font-weight-regular"
                   to="/catalog"
                   rounded="lg" size="small" height="35">
              Каталог
            </v-btn>
            <v-btn class="text-capitalize font-weight-regular"
                   to="/releases"
                   disabled
                   rounded="lg" size="small" height="35">
              Релизы
            </v-btn>
            <v-btn class="text-capitalize font-weight-regular"
                   to="/schedule"
                   disabled
                   rounded="lg" size="small" height="35">
              Расписание
            </v-btn>
            <!--            <v-btn class="text-capitalize font-weight-regular"-->
            <!--                   to="/schedule"-->
            <!--                   rounded="lg" size="small"  height="35">-->
            <!--              Приложение-->
            <!--            </v-btn>-->
          </v-toolbar-items>
        </v-col>
        <v-spacer></v-spacer>
        <v-col class="d-flex justify-end ga-1">
          <v-btn density="comfortable" icon="mdi-dice-multiple" variant="text"
                 @click="this.$router.push('openAnimeView?animeId=' + Math.floor(Math.random() * 1000))"></v-btn>
          <!--<v-btn density="comfortable" icon="mdi-magnify" variant="text" disabled></v-btn>-->
          <v-btn density="comfortable" icon="mdi-cog" variant="text" disabled></v-btn>
          <v-btn density="comfortable" icon="mdi-theme-light-dark" variant="text" @click="changeTheme()" disabled></v-btn>
          <v-btn density="comfortable" icon="mdi-account" variant="text" disabled></v-btn>
        </v-col>
      </v-container>
    </v-app-bar>
  </v-layout>
  <v-layout class="bottom-navigation">
    <v-bottom-navigation tag="nav" elevation="4" class="pa-1 d-flex ga-2" grow
                         style="backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);"
                         color="surface">
      <v-btn disabled :loading="loading.schedule" value="recent" width="120px" rounded="xl"
             @click="openBottomNavigationRoute('schedule')">
        <v-icon>mdi-history</v-icon>
        <span>Сегодня</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn :loading="loading.catalog" value="catalog" rounded="xl" width="120px"
             color="blue"
             to="/catalog"
             @click="openBottomNavigationRoute('catalog')"
      >
        <v-icon>mdi-movie-filter</v-icon>
        <span>Каталог</span>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn disabled :loading="loading.releases" value="releases" width="120px" rounded="xl"
             @click="openBottomNavigationRoute('releases')">
        <v-icon>mdi-filmstrip-box-multiple</v-icon>
        <span>Библиотека</span>
      </v-btn>
    </v-bottom-navigation>
  </v-layout>
</template>

<script lang="ts">
import {defineComponent, reactive} from "vue";
import {useTheme} from 'vuetify';
import {openBottomNavigationRoute} from "~/ts/goTo";

export default defineComponent({
  name: "PrimaryHeader",

  data() {
    return {
      openBottomNavigationRoute,
      loading: reactive({
        schedule: false,
        catalog: false,
        releases: false
      }),
    };
  },
  setup() {
    const theme = useTheme();

    const changeTheme = () => {
      theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
    };

    return {
      changeTheme
    };
  },
  methods: {
    navigateToHome() {
      this.$router.push('/');
    },
    getButtonVariant(route: string) {
      return this.$route.path === route ? 'tonal' : 'text';
    }
  }
});
</script>

<style lang="sass" scoped>
.bottom-navigation
  display: none

@media screen and (max-width: 768px)
  .header-toolbar-items
    display: none !important

  .bottom-navigation
    display: block !important
</style>