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
					<h3 data-aos="fade-up">{{ $t('welcome.subscription.title') }}</h3>
					<p data-aos="fade-up" data-aos-delay="100">
						{{ $t('welcome.subscription.description') }}
					</p>
				</div>
			</div>
			<div class="subscription__content" data-aos="fade-up" data-aos-delay="200">
				<div v-for="(device, index) in subscriptions" :key="index" class="subscription__card">
					<h4>{{ device.title }}</h4>
					<p class="subscription__card--description">{{ device.description }}</p>
					<div class="subscription__card-price">
						<p>${{ device.price }}</p><span> / year</span>
					</div>
					<div class="subscription__card-buttons">
						<vlada-button type="primary" size="md" rounded="md" placeholder="Sign Up"/>
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
			@apply bg-vlada-color-quaternary p-8 rounded-2xl border-2 border-vlada-color-septenary transition-colors;

			&:hover {
				@apply border-vlada-color-quinary;

				h4 {
					@apply text-vlada-color-quinary;
				}
			}


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