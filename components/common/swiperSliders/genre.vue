<script setup lang="ts">

</script>

<template>
	<div class="genre">
		<div class="genre__container-image">
			<div class="genre__container-image-shadow"></div>
			<img src="/img/swiper-genre/image-container.png" alt="swiper image">
		</div>
		<div class="genre__info">
			<p>Action</p>
			<Icon name="bi:arrow-right-short" class="genre__info-icon"/>
		</div>
	</div>
</template>

<style scoped>
.genre {
	@apply flex flex-col justify-center items-center w-full p-5 bg-vlada-color-tertiary rounded-xl border-2 border-vlada-color-septenary;

	.genre__container-image {
		@apply pointer-events-none select-none relative;

		.genre__container-image-shadow {
			@apply z-10 absolute w-full h-full;
			background: linear-gradient(0deg, rgba(31, 31, 31, 1) 2%, rgba(255, 255, 255, 0) 50%);
		}
	}

	.genre__info {
		@apply text-xl text-white flex justify-between items-center w-full;

		.genre__info-icon {
			@apply text-3xl;
		}
	}
}
</style>