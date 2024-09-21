<script setup lang="ts">
const localeRoute = useLocaleRoute()
console.log(localeRoute)

interface Props {
	type: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'error';
	size: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
	placeholder?: string;
	to?: string;
}

const props = defineProps<Props>();
</script>

<template>
	<NuxtLink
			v-if="props.to"
            :to="localeRoute(props.to)"
			:class="['link', `link--${props.type}`, `link-size-${props.size}`]"
			:active-class="`link--${props.type}--active`"
	>
		<p v-if="props.placeholder" class="link__text">{{ props.placeholder }}</p>
	</NuxtLink>
	<div v-else :class="['link', `link--${props.type}`, `link-size-${props.size}`]">
		<p v-if="props.placeholder" class="link__text">{{ props.placeholder }}</p>
	</div>
</template>

<style lang="scss" scoped>
.link {
	@apply transition-colors font-manrope text-nowrap flex items-center justify-center gap-1 cursor-pointer;

	&__text {
		@apply select-none pointer-events-none text-white;
	}

	&-size {
		&-xs {
			@apply text-xs;
		}

		&-sm {
			@apply text-sm;
		}

		&-base {
			@apply text-base;
		}

		&-lg {
			@apply text-lg;
		}

		&-xl {
			@apply text-xl;
		}
	}

	/* PRIMARY */
	&--primary {
		
		&__active {

		}

		&__text {
			@apply text-white opacity-70;
		}
	}
}
</style>
