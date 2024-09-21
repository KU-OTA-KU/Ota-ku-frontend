<script setup lang="ts">
import {ref, computed} from 'vue';

const data = ref([
    {
        direction: 'left',
        images: ['image.png', 'image-1.png', 'image-2.png', 'image-3.png', 'image-4.png', 'image-5.png', 'image-6.png', 'image-7.png', 'image-8.png', 'image-9.png', 'image-10.png', 'image.png', 'image-1.png', 'image-2.png', 'image-3.png', 'image-4.png', 'image-5.png', 'image-6.png', 'image-7.png', 'image-8.png', 'image-9.png', 'image-10.png']
    },
    {
        direction: 'right',
        images: ['image-12.png', 'image-13.png', 'image-14.png', 'image-15.png', 'image-16.png', 'image-17.png', 'image-18.png', 'image-19.png', 'image-20.png', 'image-21.png', 'image-22.png', 'image-12.png', 'image-13.png', 'image-14.png', 'image-15.png', 'image-16.png', 'image-17.png', 'image-18.png', 'image-19.png', 'image-20.png', 'image-21.png', 'image-22.png']
    },
    {
        direction: 'left',
        images: ['image-23.png', 'image-24.png', 'image-25.png', 'image-26.png', 'image-27.png', 'image-28.png', 'image-29.png', 'image-30.png', 'image-31.png', 'image-32.png', 'image-33.png', 'image-23.png', 'image-24.png', 'image-25.png', 'image-26.png', 'image-27.png', 'image-28.png', 'image-29.png', 'image-30.png', 'image-31.png', 'image-32.png', 'image-33.png']
    }
]);

const imagePaths = computed(() =>
    data.value.map((scroller) => ({
        ...scroller,
        images: scroller.images.map((image) => `/img/welcome-posters/${image}`)
    }))
);
</script>

<template>
    <section class="header__scroller">
        <div class="header__scroller-shadow"></div>
        <div class="header__scroller-title">
            <h1>{{ $t('welcome.title') }}</h1>
        </div>
        <div v-for="(scroller, index) in imagePaths" :key="index"
             :class="['scroller', `scroller--${scroller.direction}`, 'scroller--slow', 'scroller--animated']">
            <div class="scroller__inner">
                <div class="scroller__container" data-aos="fade-in">
                    <NuxtImg
                        v-for="(image, id) in scroller.images"
                        :key="id"
                        :src="image"
                        class="scroller__image"
                        :alt="'header image scroller images ' + id"
                    />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
.dark-mode .header__scroller {
    @apply relative bg-vlada-color-primary transition-colors;

    &-shadow {
        @apply w-full h-full z-10 absolute;
        background: linear-gradient(180deg, rgba(20, 20, 20, 1) 4%, rgba(255, 255, 255, 0) 50%, rgba(20, 20, 20, 1) 96%);
    }

    &-title {
        @apply absolute bottom-0 text-white z-20 w-full text-center;
    }
}

.light-mode .header__scroller {
    @apply relative bg-white transition-colors;

    &-shadow {
        @apply w-full h-full z-10 absolute;
        background: linear-gradient(180deg, rgba(242, 242, 242, 1) 4%, rgba(0, 0, 0, 0) 50%, rgba(242, 242, 242, 1) 96%);
    }

    &-title {
        @apply absolute bottom-0 text-black z-20 w-full text-center transition-colors;
    }
}

.scroller {
    @apply overflow-hidden;

    &__inner {
        @apply flex flex-col;
    }

    &__container {
        @apply flex;
    }

    &__image {
        @apply rounded-3xl pointer-events-none p-2;
        width: 23dvh;
        height: 23dvh;
    }

    &--animated {
        overflow: hidden;

        & .scroller__inner {
            width: max-content;
            flex-wrap: nowrap;
            animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
    }

    &--right {
        --animation-direction: reverse;
    }

    &--left {
        --animation-direction: forwards;
    }

    &--fast {
        --animation-duration: 10s;
    }

    &--slow {
        --animation-duration: 100s;
    }
}

@keyframes scroll {
    100% {
        transform: translateX(calc(-50% - 0.5rem));
    }
}
</style>
