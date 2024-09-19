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
                    <div data-aos="fade-up">
                        <h3>{{ $t('welcome.faq.title') }}</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <p>
                            {{ $t('welcome.faq.description') }}
                        </p>
                    </div>
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
.dark-mode .faq__features {
    @apply bg-vlada-color-primary transition-colors;

    .faq__features-top {
        @apply flex justify-between items-center mb-5;

        .faq__features-top-title {
            @apply w-full text-white transition-colors;

            p {
                @apply my-2 text-white opacity-70 transition-colors;
            }
        }
    }

    .faq__features-content {
        @apply w-full grid md:grid-cols-2 gap-y-5 gap-x-20;
    }
}

.light-mode .faq__features {
    @apply bg-vlada-color-primary-light transition-colors;

    .faq__features-top {
        @apply flex justify-between items-center mb-5;

        .faq__features-top-title {
            @apply w-full text-black transition-colors;

            p {
                @apply my-2 text-black transition-colors;
            }
        }
    }

    .faq__features-content {
        @apply w-full grid md:grid-cols-2 gap-y-5 gap-x-20;
    }
}
</style>
