<script setup>
	import { ref, reactive, provide } from 'vue';
	import FooterComponent from '@/components/FooterComponent.vue';

	const loading = ref(false);
	const filters = reactive({
			sortBy: '',
			searchQuery: ''
		});

	provide('loading', loading);
	provide('filters', filters);
</script>

<template>
  <div class="wrapper">
		<router-view></router-view>
		<FooterComponent />
	</div>
</template>

<style>
	#app {
		height: 100%;
		font-family: Roboto, sans-serif;
		font-weight: 400;
		font-style: normal;
		font-size: 13px;
	}
	a:hover {
		text-decoration: underline;
	}
	.wrapper {
		min-height: 100%;
		display: flex;
		flex-direction: column;
		/* overflow: hidden; */
		background-color: #6889A5;
	}
	.container {
		width: 1168px;
		margin: 0 auto;
	}
	.main-collection,
	.main-cart {
		flex: 1 1 auto;
		background-color: #fff;
	}
	.title {
		font-size: 48px;
	}
	.btn {
		font-size: 18px;
		padding: 12px 24px;
		color: #fff;
		background-color: #6889a5;
	}
	.btn:hover {
		background-color: #536a7a;
	}

</style>
