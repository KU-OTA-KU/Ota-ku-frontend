<template>
  <header class="w-full hidden top-0 py-2 px-1 z-50 bg-zinc-950 fixed md:block transition-all duration-300" :class="header" id="header">
    <div class="container mx-auto max-w-8xl pt-2 pb-2 flex justify-between items-center">
      <div class="hidden items-center gap-4 lg:flex">
        <NuxtLink class="cursor-pointer" to="/">
          <NuxtImg class="mx-auto w-36 pointer-events-none select-none" preload format="webp"
            src="/otaKu/logo.png" alt="Ota-ku Смотреть аниме в нашем платформе" />
        </NuxtLink>
      </div>
      <nav class="flex gap-3" id="nav">
        <NuxtLink id="1" to="/review" class="transition-colors button button-secondary"><svg
            class="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
          </svg> Обзор</NuxtLink>
        <NuxtLink id="2" to="/catalog" class=" transition-colors button button-secondary">
          <svg class="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L96 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
          </svg>Каталог
        </NuxtLink>
        <NuxtLink id="3" to="/today" class="transition-colors button button-secondary"><svg
            class="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
          </svg>Расписание</NuxtLink>
        <NuxtLink id="4" :to="$localeRoute('/welcome')" class="transition-colors button button-secondary">
          <svg class="w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path
              d="M274.9 34.3c-28.1-28.1-73.7-28.1-101.8 0L34.3 173.1c-28.1 28.1-28.1 73.7 0 101.8L173.1 413.7c28.1 28.1 73.7 28.1 101.8 0L413.7 274.9c28.1-28.1 28.1-73.7 0-101.8L274.9 34.3zM200 224a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM96 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 376a24 24 0 1 1 0-48 24 24 0 1 1 0 48zM352 200a24 24 0 1 1 0 48 24 24 0 1 1 0-48zM224 120a24 24 0 1 1 0-48 24 24 0 1 1 0 48zm96 328c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-114.3 0c11.6 36 3.1 77-25.4 105.5L320 413.8l0 34.2zM480 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
          </svg>
          Рандом
        </NuxtLink>
      </nav>
      <div>
        <div class="flex flex-row items-center">
          <div class="mr-3">
            <p class="text-sm text-right">Эсдэт エスデス</p>
            <p class="text-xs text-gray-300 text-right">41541 :ID</p>
          </div>
          <div class="w-10 h-10  bg-zinc-700 rounded-full cursor-pointer overflow-hidden">
            <NuxtImg class="w-10 pointer-events-none select-none"
              src="https://desu.shikimori.one/uploads/poster/characters/65239/main-a381e764f99d89b536e5d8f264b2eedd.webp"
              alt="Ota-ku profile image" />
          </div>
        </div>
      </div>
    </div>
  </header>
  <header class="fixed z-50 bottom-0 left-0 w-full md:hidden bg-zinc-950 shadow-xl" id="mobile-header">
    <div class="flex justify-between items-center">
      <NuxtLink to="/" id="1" class="navbutton-primary">
        <svg class="w-5 h-5 fill-white " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <path
            d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
        </svg>
        <p class="text-xs pt-1">Главная</p>
      </NuxtLink>
      <NuxtLink class="navbutton-primary" id="2">
        <svg class="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
        </svg>
        <p class="text-xs pt-1">Обзор</p>
      </NuxtLink>
      <NuxtLink class="navbutton-primary" id="3">
        <svg class="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path
            d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
        </svg>
        <p class="text-xs pt-1">Заметки</p>
      </NuxtLink>
      <NuxtLink to="/welcome" class="navbutton-primary" id="4">
        <svg class="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
        </svg>
        <p class="text-xs pt-1">Профиль</p>
      </NuxtLink>
    </div>
  </header>
</template>
<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, toRefs } from 'vue';

export default defineComponent({
  name: "mainHeader",

  props: {
    currentNav: {
      type: Number,
      required: true,
    },
    currentNavMobile: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const header = ref('header-default');
    const { currentNav, currentNavMobile } = toRefs(props);
    const profile = false;

    const handleScroll = () => {
      if (window.scrollY > 30) {
        header.value = 'header-scrolled';
      } else {
        header.value = 'header-default';
      }
    };

    const activeHeaderNavigationLinks = (query: number, queryMobile: number) => {
      const currentNavItem = document.querySelector(`#header #nav a[id="${query}"]`);
      const currentNavItemMobile = document.querySelector(`#mobile-header a[id="${queryMobile}"]`);

      if (currentNavItem) {
        currentNavItem.classList.add('active');
      }

      if (currentNavItemMobile) {
        currentNavItemMobile.classList.add('active');
      }
    };

    const removeHeaderNavigationLinks = (query: number, queryMobile: number) => {
      const currentNavItem = document.querySelector(`#header nav a[id="${query}"]`);
      const currentNavItemMobile = document.querySelector(`#header-mobile a[id="${queryMobile}"]`);

      if (currentNavItem) {
        currentNavItem.classList.remove('active');
      }

      if(currentNavItemMobile) {
        currentNavItemMobile.classList.remove('active');
      }
    };

    onMounted(() => {
      activeHeaderNavigationLinks(currentNav.value, currentNavMobile.value);
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    });

    onBeforeUnmount(() => {
      removeHeaderNavigationLinks(currentNav.value, currentNavMobile.value);
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      header,
      profile,
      activeHeaderNavigationLinks,
      removeHeaderNavigationLinks,
    };
  },
});
</script>
<style></style>
