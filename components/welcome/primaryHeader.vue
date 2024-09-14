<script setup lang="ts">
</script>

<template>
	<welcome-components-image-scroller/>
	<section class="header__scroller-description">
		<p class="header__scroller-description-paragraph" data-aos="fade-in" data-aos-duration="100">{{ $t('welcome.description')}}</p>
		<div data-aos="fade-in" data-aos-duration="200">
			<vlada-button type="primary" size="md" icon="bi:play-fill" icon-position="left" rounded="md" :placeholder="$t('welcome.start-watching-now')"/>
		</div>
	</section>
</template>

<style scoped>
.header__scroller-description {
	@apply flex flex-col items-center mb-20;

	.header__scroller-description-paragraph {
		@apply font-manrope text-center my-4 max-w-4xl text-vlada-color-senary font-light;
	}
}
</style>