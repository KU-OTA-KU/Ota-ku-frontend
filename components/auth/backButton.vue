<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
	name: "backButton",
	props: {
		href: {
			type: String,
			required: true
		}
	}
})
</script>

<template>
	<div class="block pt-4 pr-5 pl-5 absolute top-0 left-0">
		<NuxtLink :to="$localeRoute(href)" class="font-sans font-sm">
			<svg
					class="w-10 h-10 p-2  bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors" viewBox="0 0 512 512"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg">
				<title>cancel</title>
				<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
					<g id="work-case" class="fill-white" transform="translate(91.520000, 91.520000)">
						<polygon id="Close"
						         points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48">
						</polygon>
					</g>
				</g>
			</svg>
		</NuxtLink>
	</div>
</template>

<style scoped>

</style>