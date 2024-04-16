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
