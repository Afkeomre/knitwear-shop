<script setup>
	
</script>

<template>
	<div class="loader-container">
		<span class="loader"></span>
	</div>
</template>

<style>
	.loader {
	width: 48px;
	height: 48px;
	border: 5px solid #6889A5;
	border-bottom-color: transparent;
	border-radius: 50%;
	display: inline-block;
	box-sizing: border-box;
	animation: rotation 1s linear infinite;
	}

	@keyframes rotation {
		0% {
				transform: rotate(0deg);
		}
		100% {
				transform: rotate(360deg);
		}
	} 
</style>