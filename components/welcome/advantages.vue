<script setup lang="ts">
import {ref} from 'vue';
import advantagesService from "~/utils/api/advantagesService";

const advantages = ref<any[]>([]);

const fetchAdvantages = async () => {
	try {
		advantages.value = await advantagesService.getAll({});
		console.log(advantages.value);
	} catch (error) {
		console.error(error);
	}
};

onMounted(() => {
	fetchAdvantages();
});
</script>

<template>
	<section class="streaming__features">
		<div class="vlada-container">
			<div class="streaming__features-top">
				<div class="streaming__features-top-title">
					<h3 data-aos="fade-up">{{ $t('welcome.advantages.title') }}</h3>
					<p data-aos="fade-up" data-aos-delay="100">
						{{ $t('welcome.advantages.description') }}
					</p>
				</div>
			</div>
			<div class="streaming__features-content">
				<div v-for="(device, index) in advantages" :key="index" class="streaming__features-card" data-aos="fade-up"
				     data-aos-delay="200">
					<div class="streaming__features-card-inner">
						<div class="streaming__features-card-gradient"></div>
						<div class="streaming__features-card-icon-name">
							<div class="streaming__features-card-icon">
								<Icon :name="device.icon"/>
							</div>
							<h4 class="text-xl font-semibold mb-2">{{ device.title }}</h4>
						</div>
						<p class="streaming__features-card-description">{{ device.description }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.streaming__features {
	.streaming__features-top {
		@apply flex justify-between items-center mb-5;

		.streaming__features-top-title {
			@apply text-center w-full;

			p {
				@apply my-2 text-vlada-color-senary font-light;
			}
		}
	}

	.streaming__features-content {
		@apply grid md:grid-cols-3 gap-7;

		.streaming__features-card {

			.streaming__features-card-inner {
				@apply h-full bg-vlada-color-secondary rounded-2xl p-8 relative overflow-hidden border-2 border-vlada-color-septenary transition-colors;

				&:hover {
					@apply border-vlada-color-quinary;

					.streaming__features-card-icon-name h4 {
						@apply text-vlada-color-quinary;
					}
				}

				.streaming__features-card-gradient {
					@apply absolute top-0 left-0 w-full h-full;
					background: radial-gradient(circle at top right, rgba(400, 0, 0, 0.2) 5%, rgba(31, 31, 31, 0) 35%);
				}

				.streaming__features-card-icon-name {
					@apply flex items-center text-xs gap-2;

					.streaming__features-card-icon {
						@apply text-4xl mb-2 text-vlada-color-quinary bg-vlada-color-primary p-3 flex rounded-lg border-2 border-vlada-color-tertiary mr-3;
					}
				}

				.streaming__features-card-description {
					@apply my-2 text-vlada-color-senary font-light;
				}
			}
		}
	}
}
</style>
