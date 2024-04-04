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

<style>
	.tooltip {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 210px;
		height: 60px;
		box-shadow: 3px 3px #000;
		position: absolute;
		bottom: 20px;
		left: 78px;
		z-index: 10;
		background-color: #6889a5;
		color: #fff;
		padding: 0 8px;
	}
	.tooltip__text {
		font-size: 14px;
		margin: 0 auto;
	}
	.tooltip__close-btn {
		align-self: flex-start;
		font-size: 20px;
	}
</style>