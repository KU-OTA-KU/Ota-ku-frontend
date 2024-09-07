<script setup lang="ts">
interface Props {
	type: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'error';
	text?: string;
	to?: string;
	icon?: string;
	iconPosition?: 'left' | 'right';
}

const props = defineProps<Props>();
</script>

<template>
	<NuxtLink
			v-if="props.to"
			:to="props.to"
			:class="['button', `button--${props.type}`]"
			:active-class="`button--${props.type}--active`"
	>
		<Icon v-if="props.icon && props.iconPosition === 'left'" :name="props.icon"
		      :class="`button__icon button__icon--${props.type}`"/>

		<p v-if="props.text">{{ props.text }}</p>

		<Icon v-if="props.icon && props.iconPosition === 'right'" :name="props.icon"
		      :class="`button__icon button__icon--${props.type}`"/>

		<Icon v-if="props.icon && !props.iconPosition" :name="props.icon"
		      :class="`button__icon button__icon--${props.type}`"/>
	</NuxtLink>
	<div v-else :class="['button', `button--${props.type}`]">
		<Icon v-if="props.icon && props.iconPosition === 'left'" :name="props.icon"
		      :class="`button__icon button__icon--${props.type}`"/>

		<p v-if="props.text">{{ props.text }}</p>

		<Icon v-if="props.icon && props.iconPosition === 'right'" :name="props.icon"
		      :class="`button__icon button__icon--${props.type}`"/>

		<Icon v-if="props.icon && !props.iconPosition" :name="props.icon"
		      :class="`button__icon button__icon--${props.type}`"/>
	</div>
</template>

<style scoped>
.button {
	@apply transition-colors font-manrope text-nowrap flex items-center justify-center gap-1 cursor-pointer;
}

.button__icon {
	@apply transition-colors text-xl;
}

/* primary */
.button--primary {
	@apply dark:text-white text-black px-4 py-2 rounded-lg border-vlada-color-tertiary hover:bg-vlada-color-quaternary;
}

.button--primary--active {
	@apply text-white bg-vlada-color-quaternary border-2;
}

/* secondary */
.button--secondary {
	@apply bg-transparent text-3xl;
}

.button--secondary--active {
	@apply text-vlada-color-quinary;
}

/* tertiary */
.button--tertiary {
	@apply bg-vlada-color-quinary px-5 py-2 rounded-lg text-white hover:bg-vlada-color-quaternary;

	p {
		@apply text-lg;
	}

	.button__icon--tertiary {
		@apply text-4xl;
	}
}

.button--tertiary--active {
	@apply text-vlada-color-quinary;
}

/* quaternary */
.button--quaternary {
	@apply bg-vlada-color-quaternary p-2 rounded-lg text-white hover:bg-vlada-color-quinary;

	p {
		@apply text-lg;
	}

	.button__icon--quaternary {
		@apply text-3xl;
	}
}

.button--quaternary--active {
	@apply text-vlada-color-quinary;
}

/* icons */
.button__icon--secondary {
	@apply text-white mr-3 hover:text-vlada-color-quinary;
}
</style>
