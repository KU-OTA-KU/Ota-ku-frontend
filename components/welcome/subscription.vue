<script setup lang="ts">
const subscriptions = [
	{
		title: 'Basic Plan',
		description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
		price: 9.99,
	},
	{
		title: 'Standard Plan',
		description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
		price: 12.99,
	},
	{
		title: 'Premium Plan',
		description: 'Access to a widest selection of movies and shows, including all new releases and Offline Viewing',
		price: 14.99,
	}
]
</script>

<template>
	<section class="subscription">
		<div class="vlada-container">
			<div class="subscription__top">
				<div class="subscription__top-title">
					<h3 data-aos="fade-up">Explore our wide variety of categories</h3>
					<p data-aos="fade-up" data-aos-duration="500">
						Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn
						something new
					</p>
				</div>
			</div>
			<div class="subscription__content">
				<div v-for="(device, index) in subscriptions" :key="index" class="subscription__card" data-aos="fade-up"
				     data-aos-duration="600">
					<h4>{{ device.title }}</h4>
					<p class="subscription__card--description">{{ device.description }}</p>
					<div class="subscription__card-price">
						<p>${{ device.price }}</p><span> / year</span>
					</div>
					<div class="subscription__card-buttons">
						<vlada-button  type="primary" size="md" rounded="md" placeholder="Sign Up"/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.subscription {
	.subscription__top {
		@apply flex justify-between items-center mb-5;

		.subscription__top-title {
			p {
				@apply my-2 text-vlada-color-senary font-light;
			}
		}
	}

	.subscription__content {
		@apply grid md:grid-cols-3 gap-7;

		.subscription__card {
			@apply bg-vlada-color-quaternary p-8 rounded-2xl border-2 border-vlada-color-septenary;

			.subscription__card--description {
				@apply mt-5 text-vlada-color-senary font-light;
			}

			.subscription__card-price {
				@apply flex mt-10 mb-5 items-end;

				p {
					@apply text-white text-4xl;
				}

				span {
					@apply text-vlada-color-senary text-xl;
				}
			}
		}
	}
}
</style>