<script setup>
	import HeaderNav from '@/components/HeaderNav.vue';
	import HeaderInfo from '@/components/HeaderInfo.vue';
</script>

<template>
	<header class="header">
		<div class="container">
			<HeaderNav />
			<HeaderInfo />
		</div>
	</header>
</template>

<style scoped>
	.header {
		height: 892px;
		color: #fff;
		background-color: #6889A5;
	}
</style>