<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	name: "authFooter",
})
</script>

<template>
	<div class="mt-5 text-center">
		<p class="text-xs text-gray-400">{{ $t('footer.agreement_message')}}
			<NuxtLink
					to="/doc/terms_ru" class="underline text-blue-500">{{ $t('footer.terms_link') }}
			</NuxtLink>
			{{ $t('and')}}
			<NuxtLink
					to="/doc/privacy_policy_ru" class="underline text-blue-500">{{ $t('footer.privacy_link') }}
			</NuxtLink>
			{{ $t('footer.agreement_message_2')}}
		</p>
	</div>
</template>

<style scoped>

</style>