<script setup lang="ts">
interface Props {
	mode?: 'test';
	height: '20' | '40' | '80' | '100';
}

const props = defineProps<Props>();
</script>

<template>
	<div :class="'vlada-br-' + props.mode + ' vlada-br-' + props.height"></div>
</template>

<style scoped>
  .dark-mode .vlada-br-20 {
	  @apply h-20 bg-vlada-color-primary transition-colors;
  }

  .light-mode .vlada-br-20 {
      @apply h-20 bg-vlada-color-primary-light transition-colors;
  }
</style>
