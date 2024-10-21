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
.dark-mode .dropdown {
    @apply relative;

    &__menu {
        @apply absolute transition-colors top-0 right-0 mt-1 text-white border-2 border-vlada-color-septenary rounded-xl shadow-lg p-2 w-52 z-50 bg-vlada-color-primary;

        &-code {
            @apply text-xs text-white opacity-70;
        }

        ul {
            @apply list-none m-0 p-0;
        }

        li {
            @apply p-2 cursor-pointer hover:bg-vlada-color-tertiary flex items-end gap-1 transition-colors;
        }

    }
}

.light-mode .dropdown {
    @apply relative;

    &__menu {
        @apply absolute transition-colors top-0 right-0 mt-1 border-2 border-vlada-color-septenary rounded-xl shadow-lg text-black p-2 w-52 z-50 bg-white border-opacity-5;

        &-code {
            @apply text-xs text-black;
        }

        ul {
            @apply list-none  m-0 p-0;
        }

        li {
            @apply p-2 cursor-pointer hover:bg-vlada-color-primary-light flex items-end gap-1 transition-colors;
        }

    }
}
</style>

