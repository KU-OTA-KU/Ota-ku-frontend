<script setup lang="ts">

</script>

<template>
    <footer class="footer" id="footer">
        <div class="vlada-container">
            <div class="footer__content-top">
                <div class="footer__content-top-description">
                    <!--<NuxtImg src="/img/logo-red.svg" alt="ota-ku-logo" />-->
                    <p>Trusted in more than 100 countries & 5 million customers. Have any query ?</p>
                </div>
                <!--End Col-->
                <div class="footer__content-top-end-col">
                    <h5>О компании</h5>
                    <ul>
                        <li>
                            <NuxtLink href="/">О нас</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/">Наша команда</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/">Вакансии</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/">Новости</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="footer__content-top-end-col">
                    <h5>Поддержка</h5>
                    <ul>
                        <li>
                            <NuxtLink href="/">Помощь</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/">FAQ</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/">Связаться с поддержкой</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/">Условия использования</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="footer__content-top-end-col">
                    <h5>Документы</h5>
                    <ul>
                        <li>
                            <vlada-link to="/support/doc/privacyPolicy" placeholder="Политика конфиденциальности" type="primary" size="sm"/>
                        </li>
                        <li>
                            <NuxtLink href="/">Правообладатели</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/">Условия использования</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/">GDPR</NuxtLink>
                        </li>
                    </ul>
                </div>

                <div class="footer__content-top-end-col">
                    <h5>Ресурсы</h5>
                    <ul>
                        <li>
                            <NuxtLink href="/">Наши спонсоры</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/">Партнёры</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/">Блог</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/">Сообщество</NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
            <!--Grid-->
            <div class="footer__content-bottom">
                <div class="footer__content-bottom-container">
					<span class="footer__content-bottom-copyright">© <a
                        href="https://pagedone.io/">ota-ku</a> 2022 - 2024, All rights reserved.</span>
                    <div class="footer__content-bottom-social">

                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.dark-mode .footer {
    @apply w-full bg-vlada-color-secondary;

    .footer__content-top {
        @apply grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8;

        .footer__content-top-description {
            @apply col-span-full mb-10 lg:col-span-2 lg:mb-0;

            p {
                @apply mt-2 text-white
            }
        }
    }

    .footer__content-top-end-col {
        @apply lg:mx-auto text-left;

        h5 {
            @apply text-white mb-4;
        }

        ul {
            @apply transition-colors;

            li {
                @apply mb-3;
            }
        }
    }

    .footer__content-bottom {
        @apply py-7 border-t border-vlada-color-primary;

        .footer__content-bottom-container {
            @apply flex items-center justify-center flex-col lg:justify-between lg:flex-row;

            .footer__content-bottom-copyright {
                @apply text-sm text-white;
            }

            .footer__content-bottom-social {
                @apply flex mt-4 space-x-4 sm:justify-center lg:mt-0;
            }
        }
    }
}
</style>
