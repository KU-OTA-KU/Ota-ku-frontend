<script setup lang="ts">
import {ref} from 'vue';

const data = ref([
	{
		direction: 'left',
		images: [
			'image.png',
			'image-1.png',
			'image-2.png',
			'image-3.png',
			'image-4.png',
			'image-5.png',
			'image-6.png',
			'image-7.png',
			'image-8.png',
			'image-9.png',
			'image-10.png',
			'image.png',
			'image-1.png',
			'image-2.png',
			'image-3.png',
			'image-4.png',
			'image-5.png',
			'image-6.png',
			'image-7.png',
			'image-8.png',
			'image-9.png',
			'image-10.png',
		],
	},
	{
		direction: 'right',
		images: [
			'image-12.png',
			'image-13.png',
			'image-14.png',
			'image-15.png',
			'image-16.png',
			'image-17.png',
			'image-18.png',
			'image-19.png',
			'image-20.png',
			'image-21.png',
			'image-22.png',
			'image-12.png',
			'image-13.png',
			'image-14.png',
			'image-15.png',
			'image-16.png',
			'image-17.png',
			'image-18.png',
			'image-19.png',
			'image-20.png',
			'image-21.png',
			'image-22.png',
		],
	},
	{
		direction: 'left',
		images: [
			'image-23.png',
			'image-24.png',
			'image-25.png',
			'image-26.png',
			'image-27.png',
			'image-28.png',
			'image-29.png',
			'image-30.png',
			'image-31.png',
			'image-32.png',
			'image-33.png',
			'image-23.png',
			'image-24.png',
			'image-25.png',
			'image-26.png',
			'image-27.png',
			'image-28.png',
			'image-29.png',
			'image-30.png',
			'image-31.png',
			'image-32.png',
			'image-33.png',
		],
	},
]);

function getImagePath(imageName: string) {
	return `img/welcome-posters/${imageName}`;
}
</script>

<template>
	<section class="header__scroller">
		<div class="header__scroller-shadow"></div>
		<div class="header__scroller-title">
			<h1 class="header__scroller-title-text">The Best Streaming Experience</h1>
		</div>
		<div v-for="(scroller, index) in data" :key="index"
		     :class="['scroller', `scroller--${scroller.direction}`, 'scroller--slow', 'scroller--animated']">
			<div class="scroller__inner">
				<div class="scroller__container">
					<img
							v-for="(image, id) in scroller.images"
							:key="id"
							:src="getImagePath(image)"
							loading="lazy"
							class="scroller__image"
							:alt="'header image scroller images ' + id"
					/>
				</div>
			</div>
		</div>
	</section>
	<section class="header__scroller-description">
		<p class="header__scroller-description-paragraph">StreamVibe is the best streaming experience for watching your
			favorite movies and shows on demand,
			anytime,
			anywhere. With<br> StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic
			movies, popular TV shows, and more.<br> You can also create your own watchlist, so you can easily find the
			content you want to watch.</p>
		<vlada-button icon="bi:play-fill" text="Start Watching Now" type="tertiary" to="/"
		              icon-position="left"></vlada-button>
	</section>
</template>

<style>
.header__scroller {
	@apply relative;

	.header__scroller-shadow {
		@apply w-full h-full z-10 absolute;
		background: linear-gradient(180deg, rgba(20, 20, 20, 1) 4%, rgba(255, 255, 255, 0) 50%, rgba(20, 20, 20, 1) 96%);
	}

	.scroller__inner {
		@apply flex flex-col;
	}

	.scroller__container {
		@apply flex;
	}

	.scroller__image {
		@apply rounded-lg pointer-events-none p-2;
		width: 23dvh;
		height: 23dvh;
	}

	.scroller--animated {
		overflow: hidden;
	}

	.scroller--animated .scroller__inner {
		width: max-content;
		flex-wrap: nowrap;
		animation: scroll var(--_animation-duration, 40s) var(--_animation-direction, forwards) linear infinite;
	}

	.scroller--right {
		--_animation-direction: reverse;
	}

	.scroller--left {
		--_animation-direction: forwards;
	}

	.scroller--fast {
		--_animation-duration: 10s;
	}

	.scroller--slow {
		--_animation-duration: 100s;
	}

	@keyframes scroll {
		to {
			transform: translate(calc(-50% - 0.5rem));
		}
	}
}

.header__scroller-description {
	@apply flex flex-col items-center;

	.header__scroller-description-paragraph {
		@apply text-white font-manrope text-center my-4 text-vlada-color-senary font-light;
	}
}

.header__scroller-title {
	@apply absolute bottom-0 text-white z-20 w-full text-center;
}
</style>