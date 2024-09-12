<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import throttle from 'lodash/throttle';
import { useI18n } from 'vue-i18n';

const { locale, setLocale, t } = useI18n();

const locales = [
	{ value: 'en', label: t('languages.english'), labelCode: t('language-codes.english') },
	{ value: 'es', label: t('languages.spanish'), labelCode: t('language-codes.spanish') },
	{ value: 'fr', label: t('languages.french'), labelCode: t('language-codes.french') },
	{ value: 'hy', label: t('languages.armenian'), labelCode: t('language-codes.armenian') },
	{ value: 'ja', label: t('languages.japanese'), labelCode: t('language-codes.japanese') },
	{ value: 'ru', label: t('languages.russian'), labelCode: t('language-codes.russian') },
	{ value: 'uk', label: t('languages.ukrainian'), labelCode: t('language-codes.ukrainian') },
	{ value: 'zh', label: t('languages.chinese'), labelCode: t('language-codes.chinese') },
];

const headerClass = ref('header-default');
const showLocales = ref(false);

const handleScroll = throttle(() => {
	if (window.scrollY > 30) {
		headerClass.value = 'header-scrolled';
	} else {
		headerClass.value = 'header-default';
	}
}, 200);

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
	handleScroll();
});

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll);
});

const toggleLocales = () => {
	showLocales.value = !showLocales.value;
};

const handleLocaleSelect = (item: { value: string, label: string }) => {
	setLocale(item.value);
	showLocales.value = false;
};
</script>

<template>
	<header :class="['header', headerClass]" id="header">
		<div class="vlada-container">
			<div class="header__inner">
				<div class="header__logo">
					<NuxtImg src="/img/logo-red.svg" />
				</div>
				<div class="header__search-profile">
					<vlada-button type="primary" size="md" rounded="md" :placeholder="$t('sign-up')" />
					<div class="header__translate-button">
						<vlada-button type="primary" size="cube" rounded="md" icon="bi:translate" @click="toggleLocales" />
						<vlada-dropdown
								:items="locales"
								:showDropdown="showLocales"
								animation="fade-in"
								@item-select="handleLocaleSelect"
						/>
					</div>
				</div>
			</div>
		</div>

	</header>
</template>

<style scoped>
.header {
	@apply w-full z-50 fixed top-0 transition duration-300 py-4;

	&__inner {
		@apply flex justify-between items-center;

		.header__logo {
			@apply block h-9 relative overflow-hidden;

			img {
				@apply select-none pointer-events-none relative w-full h-full;
			}
		}

		.header__search-profile {
			@apply flex gap-2;
		}
	}
}

.header-default {
	@apply bg-transparent;
}

.header-scrolled {
	@apply bg-vlada-color-primary shadow-md;
}
</style>
