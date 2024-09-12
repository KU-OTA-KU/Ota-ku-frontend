<script setup lang="ts">
import {defineProps, defineEmits} from 'vue';

interface DropdownItem {
	value: string;
	label: string;
}

interface Props {
	items: DropdownItem[];
	showDropdown: boolean;
}

const props = defineProps<Props>();

const emits = defineEmits<{
	(event: 'item-select', item: { value: string, label: string }): void;
}>();

const handleItemClick = (item: { value: string, label: string }) => {
	emits('item-select', item);
};
</script>

<template>
	<div class="dropdown">
		<div v-if="showDropdown" class="dropdown__menu">
			<ul>
				<li v-for="item in items" :key="item.value" @click="handleItemClick(item)">
					{{ item.label }}
				</li>
			</ul>
		</div>
	</div>
</template>

<style scoped lang="scss">
.dropdown {
	@apply relative;

	&__menu {
		@apply absolute top-0 right-0 mt-1 text-white border border-vlada-color-septenary rounded-xl shadow-lg p-2 w-52 z-50 bg-vlada-color-primary;

		ul {
			@apply list-none m-0 p-0;
		}

		li {
			@apply p-2 cursor-pointer hover:bg-vlada-color-tertiary;
		}

	}
}
</style>

