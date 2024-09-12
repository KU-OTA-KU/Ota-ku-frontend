<script setup lang="ts">
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
					{{ item.label }} <p class="dropdown__menu-code" v-if="item.labelCode">/ {{ item.labelCode }}</p>
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

		&-code {
			@apply text-xs text-white text-vlada-color-senary;
		}

		ul {
			@apply list-none m-0 p-0;
		}

		li {
			@apply p-2 cursor-pointer hover:bg-vlada-color-tertiary flex items-end gap-1;
		}

	}
}
</style>

