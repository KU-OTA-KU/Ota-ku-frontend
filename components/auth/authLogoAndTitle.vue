<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	name: "authLogoAndTitle",
	props: {
		title: {
			type: String,
			required: true
		}
	}
})
</script>

<template>
	<div class="pointer-events-none select-none">
		<NuxtImg class="mx-auto w-52 pointer-events-none select-none" preload format="webp"
		         src="/ota-ku/Logo.webp" alt="Ota-ku Смотреть аниме в нашем платформе"/>
		<h2 class="mt-3 text-center text-lg font-semibold font-sans leading-5">{{ title }}</h2>
	</div>
</template>

<style scoped>

</style>