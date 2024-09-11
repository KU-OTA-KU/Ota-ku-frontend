<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import throttle from 'lodash/throttle';

const headerClass = ref('header-default');

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
</script>

<template>
	<header :class="['header', headerClass]" id="header">
		<div class="vlada-container">
			<div class="header__inner">
				<div class="header__logo">
					<NuxtImg src="/img/logo-red.svg" />
				</div>
				<div class="header__search-profile">
					<vlada-button type="primary" size="md" rounded="md" placeholder="Sign In"/>
					<vlada-button type="primary" size="cube" rounded="md" icon="bi:box-arrow-in-right"/>
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
