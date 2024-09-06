<script setup lang="ts">

</script>

<template>
	<section class="swiper__slider">
		<div class="vlada-container">
			<div class="swiper__slider-top">
				<div class="swiper__slider-top-title">
					<h3>Explore our wide variety of categories</h3>
					<p>Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn
						something new</p>
				</div>
				<div class="swiper__slider-top-swiper-buttons">
					<vlada-button icon="bi:arrow-left-short" type="quaternary" to="/"></vlada-button>
					<div class="swiper__slider-top-swiper-sections">

					</div>
					<vlada-button icon="bi:arrow-right-short" type="quaternary" to="/"></vlada-button>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.swiper__slider {

	.swiper__slider-top {
		@apply flex justify-between items-center;

		.swiper__slider-top-title {
			p {
				@apply text-center my-2 text-vlada-color-senary font-light;
			}
		}

		.swiper__slider-top-swiper-buttons {
			@apply flex gap-1 bg-vlada-color-secondary p-2 border-2 rounded-lg border-vlada-color-tertiary items-center text-white;

			.swiper__slider-top-swiper-sections {
				@apply w-20
			}
		}
	}
}
</style>