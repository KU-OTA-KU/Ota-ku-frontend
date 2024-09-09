<script setup lang="ts">
</script>

<template>
	<welcome-components-image-scroller/>
	<section class="header__scroller-description">
		<p class="header__scroller-description-paragraph">StreamVibe is the best streaming experience for
			watching your
			favorite movies and shows on demand,
			anytime,
			anywhere. With<br> StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic
			movies, popular TV shows, and more.<br> You can also create your own watchlist, so you can easily find the
			content you want to watch.</p>
		<vlada-button icon="bi:play-fill" text="Start Watching Now"
		              type="tertiary"
		              icon-position="left"></vlada-button>
	</section>
</template>

<style scoped>
.header__scroller-description {
	@apply flex flex-col items-center mb-20;

	.header__scroller-description-paragraph {
		@apply font-manrope text-center my-4 text-vlada-color-senary font-light;
	}
}
</style>