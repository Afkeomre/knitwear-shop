<script setup>
	import { ref, provide, onMounted, watch, inject } from 'vue';
	import HeaderComponent from '@/components/HeaderComponent.vue';
	import MainComponent from '@/components/MainComponent.vue';
	import { useRememberCartState } from '@/components/composables/useRememberCartState.js';
	import { useFetchItems } from '@/components/composables/useFetchItems.js';

	const bestsellers = ref([]);

	const loading = inject('loading');

	onMounted(async () => await useFetchItems(
		'https://809529a6ac8aa704.mokky.dev/bestsellers', 
		bestsellers, 
		loading
	));

	watch(bestsellers, () => {
		useRememberCartState(bestsellers);
	});

	provide('bestsellers', bestsellers);

</script>

<template>
	<HeaderComponent />
	<MainComponent />
</template>