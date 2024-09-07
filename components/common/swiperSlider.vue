<script setup lang="ts">
import {ref} from 'vue';

const carousel = ref(null);
const currentSlide = ref(0);
const totalSlides = ref(10);


const settings = {
	itemsToShow: 5.3,
	wrapAround: true,
	snapAlign: 'center',
};

const next = () => {
	if (carousel.value) {
		carousel.value.next();
	}
};

const prev = () => {
	if (carousel.value) {
		carousel.value.prev();
	}
};
</script>

<template>
	<section class="swiper__slider">
		<div class="vlada-container">
			<div class="swiper__slider-top">
				<div class="swiper__slider-top-title">
					<h3>Explore our wide variety of categories</h3>
					<p>
						Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn
						something new
					</p>
				</div>
				<div class="swiper__slider-top-swiper-buttons">
					<div @click="prev">
						<vlada-button icon="bi:arrow-left-short" type="quaternary"/>
					</div>
					<div class="swiper__slider-top-swiper-sections">
						1 / 10
					</div>
					<div @click="next">
						<vlada-button icon="bi:arrow-right-short" type="quaternary"/>
					</div>
				</div>
			</div>
			<div class="swiper__slider-content">
				<Carousel ref="carousel" v-model:currentSlide="currentSlide" v-bind="settings">
					<Slide v-for="slide in totalSlides" :key="slide" class="carousel-slide">
						<common-swiper-sliders-genre/>
					</Slide>
				</Carousel>
			</div>
		</div>
	</section>
</template>

<style scoped>
.carousel__slide {
	@apply px-3.5
}

.swiper__slider {
	.swiper__slider-top {
		@apply flex justify-between items-center mb-5;

		.swiper__slider-top-title {
			p {
				@apply my-2 text-vlada-color-senary font-light;
			}
		}

		.swiper__slider-top-swiper-buttons {
			@apply flex gap-1 bg-vlada-color-secondary p-2 border-2 rounded-lg border-vlada-color-tertiary items-center text-white;

			.swiper__slider-top-swiper-sections {
				@apply flex gap-2 mx-2;
			}
		}
	}
}
</style>
