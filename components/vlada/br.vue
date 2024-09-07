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
  .vlada-br-20 {
	  @apply mb-20;
  }
</style>