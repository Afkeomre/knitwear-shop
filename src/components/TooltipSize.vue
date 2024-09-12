<script setup>
	defineProps({
		isShownTooltip: Boolean
	});
</script>

<template>
	<div v-if="isShownTooltip" class="tooltip">
		<p class="tooltip__text">
			Please choose your size
		</p>
		<button @click="$emit('closeTooltip')" type="button" class="tooltip__close-btn">&times;</button>
	</div>
</template>