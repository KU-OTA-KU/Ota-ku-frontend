<script setup lang="ts">
import {ref, onMounted, onBeforeUnmount} from 'vue';

const headerClass = ref('header-default');

const handleScroll = () => {
	if (window.scrollY > 30) {
		headerClass.value = 'header-scrolled';
	} else {
		headerClass.value = 'header-default';
	}
};

onMounted(() => {
	window.addEventListener('scroll', handleScroll);
	handleScroll();
});

onBeforeUnmount(() => {
	window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
	<header :class="['header', headerClass]" id="header"> <!-- Используем динамическое связывание класса -->
		<div class="vlada-container">
			<div class="header__inner">
				<div class="header__logo">
					<img src="~/public/img/logo-red.svg" alt="" loading="lazy">
				</div>
				<nav class="header__navigation">
					<vlada-button type="primary" to="/welcome" text="Home"/>
					<vlada-button type="primary" to="/" text="Movies & Shows"/>
					<vlada-button type="primary" to="/" text="Support"/>
					<vlada-button type="primary" to="/" text="Subscriptions"/>
				</nav>
				<div class="header__search-profile">
					<vlada-button type="secondary" to="/" icon="bi:search"/>
					<vlada-button type="secondary" to="/" icon="bi:bell"/>
				</div>
			</div>
		</div>
	</header>
</template>

<style scoped>
.header {
	@apply w-full mt-2 z-50 fixed top-0 transition duration-300;
	/* Добавляем плавный переход для смены класса */
}

.header-default {
	@apply bg-transparent;
}

.header-scrolled {
	@apply bg-white shadow-md;
	/* Пример стилей при скролле */
}

.header__inner {
	@apply flex justify-between items-center;
}

.header__logo {
	@apply block h-9 relative overflow-hidden;
}

.header__logo img {
	@apply select-none pointer-events-none relative w-full h-full;
}

.header__navigation {
	@apply flex gap-3 bg-vlada-color-secondary p-2 border-2 rounded-xl border-vlada-color-tertiary;
}

.header__search-profile {
	@apply flex gap-2;
}
</style>
