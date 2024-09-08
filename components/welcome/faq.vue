<script setup lang="ts">

</script>

<template>
	<section class="faq__features">
		<div class="vlada-container">
			<div class="faq__features-top">
				<div class="faq__features-top-title">
					<h3 data-aos="fade-up">We Provide you streaming experience across various devices.</h3>
					<p data-aos="fade-up" data-aos-duration="500">
						With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed
						to be compatible with a wide range of<br> devices, ensuring that you never miss a moment of entertainment.
					</p>
				</div>
				<div data-aos="fade-left">
					<vlada-button text="Ask a question" type="tertiary"/>
				</div>
			</div>
			<div class="faq__features-content" data-aos="fade-up" data-aos-duration="600">
				<vlada-collapse type="secondary" id="01" title="What is StreamVibe?"
				                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
				                :is-open="true"/>
				<vlada-collapse type="secondary" id="02" title="How much does StreamVibe cost?"
				                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
				                :is-open="false"/>
				<vlada-collapse type="secondary" id="03" title="What content is available on StreamVibe?"
				                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
				                :is-open="false"/>
				<vlada-collapse type="secondary" id="04" title="How can I watch StreamVibe?"
				                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
				                :is-open="false"/>
				<vlada-collapse type="secondary" id="05" title="How do I sign up for StreamVibe?"
				                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
				                :is-open="false"/>
				<vlada-collapse type="secondary" id="06" title="What is the StreamVibe free trial?"
				                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
				                :is-open="false"/>
				<vlada-collapse type="secondary" id="07" title="What are the StreamVibe payment methods?"
				                description="StreamVibe is a streaming service that allows you to watch movies and shows on demand."
				                :is-open="false"/>
			</div>
		</div>
	</section>
</template>

<style scoped>
.faq__features {
	.faq__features-top {
		@apply flex justify-between items-center mb-5;

		.faq__features-top-title {
			@apply w-full;

			p {
				@apply my-2 text-vlada-color-senary font-light;
			}
		}
	}

	.faq__features-content {
		@apply w-full grid md:grid-cols-2 gap-y-5 gap-x-20;
	}
}
</style>