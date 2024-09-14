<script setup lang="ts">
import {ref} from 'vue';
import faqService from "~/utils/api/faqService";

const faqs = ref<any[]>([]);

const fetchFaqs = async () => {
	try {
		faqs.value = await faqService.getAll({});
		console.log(faqs.value);
	} catch (error) {
		console.error(error);
	}
};

onMounted(() => {
	fetchFaqs();
});
</script>

<template>
	<section class="faq__features">
		<div class="vlada-container">
			<div class="faq__features-top">
				<div class="faq__features-top-title">
					<h3 data-aos="fade-up">{{ $t('welcome.faq.title') }}</h3>
					<p data-aos="fade-up" data-aos-delay="100">
						{{ $t('welcome.faq.description') }}
					</p>
				</div>
				<div data-aos="fade-left">
					<vlada-button size="md" text="Ask a question" type="tertiary"/>
				</div>
			</div>
			<div class="faq__features-content" data-aos="fade-up" data-aos-delay="200">
				<vlada-collapse
						v-for="(faq, index) in faqs"
						:key="index"
						type="secondary"
						:id="String(index + 1)"
						:title="faq.title"
						:description="faq.description"
						:is-open="true"
				/>
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