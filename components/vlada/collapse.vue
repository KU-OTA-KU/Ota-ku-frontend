<script setup lang="ts">
import {ref} from 'vue';

interface Props {
	id: string;
	type: 'primary' | 'secondary' | 'tertiary';
	title: string;
	description: string;
	isOpen?: boolean;
}

const props = defineProps<Props>();

const isOpen = ref(props.isOpen);

const toggleAccordion = () => {
	isOpen.value = !isOpen.value;
};
</script>

<template>
	<div class="accordion">
		<div class="accordion__button" @click="toggleAccordion">
			<div class="accordion__button--id">
				<p>{{ props.id }}</p>
			</div>
			<div class="accordion__button--title">
				<h3>{{ props.title }}</h3>
				<Icon class="accordion__button-icon" name="bi:chevron-up" v-show="isOpen"/>
				<Icon class="accordion__button-icon" name="bi:chevron-down" v-show="!isOpen"/>
			</div>
		</div>
		<transition name="accordion" mode="out-in">
			<div v-if="isOpen" class="accordion__content">
				<p class="text-gray-700">{{ props.description }}</p>
			</div>
		</transition>
	</div>
</template>

<style scoped>
.accordion {
	.accordion__button:hover {
		&:hover {
			.accordion__button--id {
				@apply border-vlada-color-quinary;

				p {
					@apply text-vlada-color-quinary;
				}
			}

			.accordion__button--title {
				h3 {
					@apply text-vlada-color-quinary;
				}
			}

			.accordion__content {
				p {
					@apply text-white;
				}
			}
		}
	}

	.accordion__button {
		@apply flex items-center justify-between cursor-pointer;

		.accordion__button--id {
			@apply text-white bg-vlada-color-tertiary px-8 py-8 rounded-xl flex items-center justify-center text-xl font-bold border-2 border-vlada-color-septenary mr-5 relative transition-colors;

			p {
				@apply absolute;
			}
		}

		.accordion__button--title {
			@apply text-white w-full cursor-pointer flex justify-between items-center transition-colors;

			h3 {
				@apply text-xl transition-colors;
			}

			.accordion__button-icon {
				@apply text-xl text-vlada-color-senary;
			}
		}
	}

	.accordion__content {
		p {
			@apply mt-2 text-vlada-color-senary;
		}
	}
}

.accordion-enter-active,
.accordion-leave-active {
	transition: max-height 0.3s ease, opacity 0.3s ease;
	overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
	max-height: 0;
	opacity: 0;
}

.accordion-enter-to,
.accordion-leave-from {
	max-height: 500px;
	opacity: 1;
}
</style>
