<script setup lang="ts">
</script>

<template>
    <welcome-components-image-scroller/>
    <section class="header__scroller-description">
        <p class="header__scroller-description-paragraph">{{ $t('welcome.description') }}</p>
        <div class="header__scroller-button">
            <vlada-button type="primary" size="md" icon="bi:play-fill" icon-position="left" rounded="md"
                          :placeholder="$t('welcome.start-watching-now')"/>
        </div>
    </section>
</template>

<style scoped>
.dark-mode .header__scroller-description {
    @apply flex flex-col items-center bg-vlada-color-primary transition-colors;

    .header__scroller-description-paragraph {
        @apply hidden md:block font-manrope text-center my-4 max-w-4xl text-white opacity-70 font-light transition-colors;
    }

    .header__scroller-button {
        @apply mt-3 
    }
}

.light-mode .header__scroller-description {
    @apply flex flex-col items-center bg-vlada-color-primary-light transition-colors;

    .header__scroller-description-paragraph {
        @apply hidden md:block font-manrope text-center my-4 max-w-4xl text-black font-light transition-colors;
    }

    .header__scroller-button {
        @apply mt-3
    }
}
</style>
