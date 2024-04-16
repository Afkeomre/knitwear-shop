<script setup>
	import debounce  from 'lodash.debounce';
	import { ref, onMounted, watch, provide, inject } from 'vue';
	import { useFetchItems } from '@/components/composables/useFetchItems.js';
	import { useSortAndSearch } from '@/components/composables/useSortAndSearch.js';
	import { useClickAdd } from '@/components/composables/useClickAdd.js';
	import { useRememberCartState } from '@/components/composables/useRememberCartState.js';
	import HeaderNav from '@/components/HeaderNav.vue';
	import ShopSection from '@/components/ShopSection.vue';

	const title = ref('Shop Men');

	const { onClickAdd } = useClickAdd();

	const manCollection = ref([]);

	const loading = inject('loading');
	const filters = inject('filters');

	onMounted(async () => await useFetchItems(
		'https://809529a6ac8aa704.mokky.dev/man', 
		manCollection, 
		loading
	));

	watch(() => filters.sortBy, async () => await useSortAndSearch(
		'https://809529a6ac8aa704.mokky.dev/man', 
		manCollection, 
		filters.sortBy, 
		filters.searchQuery
	));
	
	watch(() => filters.searchQuery, debounce(async () => await useSortAndSearch(
		'https://809529a6ac8aa704.mokky.dev/man', 
		manCollection,  
		filters.sortBy, 
		filters.searchQuery
	), 500));

	watch(manCollection, () => {
		useRememberCartState(manCollection);
	});

	provide('onClickAdd', onClickAdd);
</script>

<template>
	<div class="container">
		<HeaderNav />
	</div>

	<main class="main-collection">
		<ShopSection 
			:title="title" 
			:products="manCollection" 
			:loading="loading"
			v-model:searchQuery="filters.searchQuery"
			v-model:sortBy="filters.sortBy"
			@onClickAdd="onClickAdd"
		/>
	</main>
</template>
