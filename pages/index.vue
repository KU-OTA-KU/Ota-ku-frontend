<template>
	<MainHeader :currentNav="0" :currentNavMobile="1"/>
	<index-main-slider></index-main-slider>
	<lazy-index-update-list></lazy-index-update-list>
	<lazy-index-genres-slider></lazy-index-genres-slider>
	<lazy-index-feed-panel></lazy-index-feed-panel>
	<lazy-index-about-us></lazy-index-about-us>
	<footer-component></footer-component>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount} from 'vue';
import {useNuxtApp} from '#app';
import {IndexMainSlider, LazyIndexUpdateList, LazyIndexGenresSlider, LazyIndexAboutUs, FooterComponent} from "#components";
export default defineComponent({
	name: 'IndexView',
	components: { IndexMainSlider, LazyIndexUpdateList, LazyIndexGenresSlider, LazyIndexAboutUs, FooterComponent},
	setup() {
		const {$statusBar, $navigationBar} = useNuxtApp();

		onBeforeMount(async () => {
			await $statusBar.overlayHide();
			await $navigationBar.overlayShow();
			await $navigationBar.setColor("#09090b")
		});

		useHead({
			title: "Твой Личный Портал в Мир Аниме",
			meta: [
				{name: 'description', content: 'Лучшие аниме онлайн бесплатно с русской озвучкой!'},
				{name: 'subject', content: 'Смотреть лучшие аниме онлайн бесплатно на русском!'},
				{name: 'abstract', content: 'Смотреть лучшие аниме на русском'},
				{name: 'summary', content: 'Смотреть лучшие аниме онлайн бесплатно на русском!'},
				{property: 'og:url', content: 'https://ota-ku.ru'},
				{property: 'og:title', content: 'Ota-ku - Твой Личный Портал в Мир Аниме'},
				{property: 'og:description', content: 'Лучшие аниме онлайн бесплатно с русской озвучкой!'},
				{property: 'og:image', content: 'https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png'},
				{name: 'twitter:card', content: 'summary_large_image'},
				{name: 'twitter:image', content: 'https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png'},
				{name: 'twitter:image:src', content: 'https://ota-ku.ru/ota-kashima-bann/bann-1200x600-variant-1.png'},
				{name: 'twitter:image:witdh', content: '1200'},
				{name: 'twitter:image:height', content: '600'},
				{property: 'og:site:name', content: 'Ota-ku - Твой Личный Портал в Мир Аниме'},
			]
		});
	}
});
</script>


<style lang="scss" scoped></style>