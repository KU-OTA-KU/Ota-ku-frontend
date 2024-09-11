<script setup lang="ts">
interface Props {
	type: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'error';
	size: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'cube';
	rounded?: 'sm' | 'md' | 'lg' | 'full';
	iconPosition?: 'left' | 'right';
	placeholder?: string;
	to?: string;
	icon?: string;
}

const props = defineProps<Props>();
</script>

<template>
	<NuxtLink
			v-if="props.to"
			:to="props.to"
			:class="['button', `button--${props.type}`, `button-size-${props.size}`, `button-rounded-${props.rounded}`]"
			:active-class="`button--${props.type}--active`"
	>
		<Icon v-if="props.icon && props.iconPosition === 'left'" :name="props.icon"
		      :class="`button__icon button__icon--${props.type}`"/>

		<p v-if="props.placeholder" class="button__text">{{ props.placeholder }}</p>

		<Icon v-if="props.icon && props.iconPosition === 'right'" :name="props.icon"
		      :class="`button__icon button__icon--${props.type}`"/>

		<Icon v-if="props.icon && !props.iconPosition" :name="props.icon"
		      :class="`button__icon button__icon--${props.type}`"/>
	</NuxtLink>
	<div v-else
	     :class="['button', `button--${props.type}`, `button-size-${props.size}`, `button-rounded-${props.rounded}`]">
		<Icon v-if="props.icon && props.iconPosition === 'left'" :name="props.icon"
		      :class="`button__icon button__icon--${props.type}`"/>

		<p v-if="props.placeholder" class="button__text">{{ props.placeholder }}</p>

		<Icon v-if="props.icon && props.iconPosition === 'right'" :name="props.icon"
		      :class="`button__icon button__icon--${props.type}`"/>

		<Icon v-if="props.icon && !props.iconPosition" :name="props.icon"
		      :class="`button__icon button__icon--${props.type}`"/>
	</div>
</template>

<style lang="scss" scoped>
.button {
	@apply transition-colors font-manrope text-nowrap flex items-center justify-center gap-1 cursor-pointer;

	&__text {
		@apply select-none pointer-events-none;
	}

	&__icon {
		@apply transition-colors text-xl;
	}

	&-size {
		&-sm {
			@apply px-1 py-1;
		}

		&-md {
			@apply px-5 py-2;
		}

		&-lg {
			@apply px-4 py-2;
		}

		&-xl {
			@apply px-6 py-3;
		}

		&-xxl {
			@apply px-10 py-5;
		}

		&-cube {
			@apply p-2;
		}
	}

	&-rounded {
		&-sm {
			@apply rounded-sm;
		}

		&-md {
			@apply rounded-md;
		}

		&-lg {
			@apply rounded-lg;
		}

		&-full {
			@apply rounded-full;
		}
	}

	/* BUTTONS TYPE */
	/* PRIMARY */
	&--primary {
		@apply bg-vlada-color-quinary text-white hover:bg-vlada-color-octonary active:bg-vlada-color-nonary;

		&__active {
			@apply text-white bg-vlada-color-quaternary border-2;
		}

		&__icon {
			@apply text-4xl;
		}

		&__text {
			@apply text-4xl;
		}
	}
}
</style>
