<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	name: "authFooter",
})
</script>

<template>
	<div class="mt-5 text-center">
		<p class="text-xs text-gray-400">Используя сайт / приложение, Вы соглашаетесь с условиями
			<NuxtLink
					to="/doc/terms_ru" class="underline text-blue-500">Пользовательсово соглашения.
			</NuxtLink>
			и
			<NuxtLink
					to="/doc/privacy_policy_ru" class="underline text-blue-500">Политика конфиденциальности.
			</NuxtLink>
			Если Вы не согласны с условиями данного соглашения, не используйте сайт / приложение Ota-ku!<br>
			а также подтверждаете, что вам больше 16 лет.
		</p>
	</div>
</template>

<style scoped>

</style>