<script setup lang="ts">
import {ref} from 'vue';
import subscriptionsService from "~/utils/api/subscriptionsService";

const subscriptions = ref<any[]>([]);

const fetchSubscriptions = async () => {
    try {
        const response = await subscriptionsService.getAll({});

        subscriptions.value = response.map((subscription: any) => {
            if (typeof subscription.benefits === 'string') {
                subscription.benefits = JSON.parse(subscription.benefits);
            }
            return subscription;
        });
        console.log(subscriptions.value);
    } catch (error) {
        console.error(error);
    }
};

onMounted(() => {
    fetchSubscriptions();
});
</script>

<template>
    <section class="subscription">
        <div class="vlada-container">
            <div class="subscription__top">
                <div class="subscription__top-title">
                    <div data-aos="fade-up">
                        <h3>{{ $t('welcome.subscription.title') }}</h3>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100">
                        <p>
                            {{ $t('welcome.subscription.description') }}
                        </p>
                    </div>

                </div>
            </div>
            <div class="subscription__content" data-aos="fade-up" data-aos-delay="200">
                <div v-for="(device, index) in subscriptions" :key="index" class="subscription__card">
                    <div>
                        <h3>{{ device.title }}</h3>
                        <p class="subscription__card--description">{{ device.description }}</p>
                    </div>
                    <div>
                        <ul class="subscription__card-list">
                            <li v-for="(benefit, i) in device.benefits" :key="i">
                                <h5>{{ benefit.title }}</h5>
                                <p>{{ benefit.description }}</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div class="subscription__card-price">
                            <div>
                                <p>${{ device.price }}</p><span> / {{ $t('welcome.subscription.months') }}</span>
                            </div>
                            <div class="subscription__card-price-calculator">
                                <div>
                                    <p>${{ (device.price * 12).toFixed(2) }}</p><span> / {{
                                        $t('welcome.subscription.years')
                                    }}</span>
                                </div>
                                <div>
                                    <p>${{ (device.price * 6).toFixed(2) }}</p><span> / {{
                                        $t('welcome.subscription.six-months')
                                    }}</span>
                                </div>
                            </div>

                        </div>
                        <div class="subscription__card-buttons">
                            <vlada-button type="primary" size="md" rounded="md"
                                          :placeholder="$t('welcome.subscription.subscribe')"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<style scoped>
.dark-mode .subscription {
    @apply bg-vlada-color-primary transition-colors;

    .subscription__top {
        @apply flex justify-between items-center mb-5;

        .subscription__top-title {
            h3 {
                @apply text-white transition-colors;
            }

            p {
                @apply my-2 text-white opacity-70 font-light transition-colors;
            }
        }
    }

    .subscription__content {
        @apply grid md:grid-cols-3 gap-7;

        .subscription__card {
            @apply bg-vlada-color-quaternary p-8 rounded-2xl border-2 border-vlada-color-septenary transition-colors flex flex-col justify-between;

            &:hover {
                @apply border-vlada-color-quinary;

                h3 {
                    @apply text-vlada-color-quinary;
                }
            }

            h3 {
                @apply text-white;
            }

            .subscription__card-list {
                @apply decoration-2 list-disc text-white ml-5 mt-3;

                li {
                    h5 {
                        @apply opacity-100;
                    }

                    p {
                        @apply opacity-70
                    }
                }
            }

            .subscription__card--description {
                @apply mt-5 text-white opacity-70 font-light;
            }

            .subscription__card-price {
                @apply flex mt-10 mb-5 items-end justify-between;

                div {
                    @apply flex items-end gap-1 text-nowrap;
                }

                p {
                    @apply text-white text-4xl;
                }

                span {
                    @apply text-vlada-color-senary text-xl;
                }

                .subscription__card-price-calculator {
                    @apply flex-col items-start;

                    p {
                        @apply text-base;
                    }

                    span {
                        @apply text-xs;
                    }
                }
            }
        }
    }
}

.light-mode .subscription {
    @apply bg-vlada-color-primary-light transition-colors;

    .subscription__top {
        @apply flex justify-between items-center mb-5;

        .subscription__top-title {
            h3 {
                @apply text-black transition-colors;
            }

            p {
                @apply my-2 text-black font-light transition-colors;
            }
        }
    }

    .subscription__content {
        @apply grid md:grid-cols-3 gap-7;

        .subscription__card {
            @apply bg-vlada-color-primary-light p-8 rounded-2xl border-2 border-vlada-color-septenary border-opacity-5 flex flex-col justify-between transition-colors;

            &:hover {
                @apply border-vlada-color-quinary;

                h3 {
                    @apply text-vlada-color-quinary;
                }
            }

            h3 {
                @apply text-black transition-colors;
            }

            .subscription__card-list {
                @apply decoration-2 list-disc text-black ml-5 mt-3;

                li {
                    h5 {
                        @apply opacity-100;
                    }

                    p {
                        @apply opacity-70
                    }
                }
            }

            .subscription__card--description {
                @apply mt-5 text-black;
            }

            .subscription__card-price {
                @apply flex mt-10 mb-5 items-end justify-between;

                div {
                    @apply flex items-end gap-1 text-nowrap;
                }

                p {
                    @apply text-black text-4xl;
                }

                span {
                    @apply text-black opacity-70 text-xl;
                }

                .subscription__card-price-calculator {
                    @apply flex-col items-start;

                    p {
                        @apply text-base;
                    }

                    span {
                        @apply text-xs;
                    }
                }
            }
        }
    }
}
</style>
