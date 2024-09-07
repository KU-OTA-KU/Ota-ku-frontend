<script setup lang="ts">
const devices = [
	{ icon: '📱', title: 'Smartphones', description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store' },
	{ icon: '📲', title: 'Tablet', description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store' },
	{ icon: '📺', title: 'Smart TV', description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store' },
	{ icon: '💻', title: 'Laptops', description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store' },
	{ icon: '🎮', title: 'Gaming Consoles', description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store' },
	{ icon: '🥽', title: 'VR Headsets', description: 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store' }
]
</script>

<template>
	<section class="streaming__features">
		<div class="vlada-container">
			<div class="streaming__features-top">
				<div class="streaming__features-top-title">
					<h3>We Provide you streaming experience across various devices.</h3>
					<p>
						With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed
						to be compatible with a wide range of<br> devices, ensuring that you never miss a moment of entertainment.
					</p>
				</div>
			</div>
			<div class="streaming__features-content">
				<div v-for="(device, index) in devices" :key="index" class="streaming__features-card bg-dark rounded-lg p-6 shadow-lg text-white">
					<div class="icon text-red-500 text-3xl mb-4">{{ device.icon }}</div>
					<h4 class="text-xl font-semibold mb-2">{{ device.title }}</h4>
					<p class="text-base">{{ device.description }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<style scoped>
.streaming__features {
	.streaming__features-top {
		@apply flex justify-between items-center;

		.streaming__features-top-title {
			p {
				@apply my-2 text-vlada-color-senary font-light;
			}
		}
	}

	.streaming__features-content {
		@apply grid md:grid-cols-3 gap-6;
	}

	.streaming__features-card {
		@apply bg-gray-800 rounded-lg p-6 shadow-lg text-white;
	}
}
</style>
