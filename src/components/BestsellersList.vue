<script setup>
	import { inject } from 'vue';
	import ProductCard from '@/components/ProductCard.vue';
	import { useClickAdd } from '@/components/composables/useClickAdd.js';

	const { onClickAdd } = useClickAdd();
	const bestsellers = inject('bestsellers');
	
	defineProps({
		initialSlide: Number,
		lastSlide: Number,
	});
</script>

<template>
	<div class="bestsellers__list">
		<ProductCard 
			class="animation"
			v-for="(bestseller, i) in bestsellers"
			v-show="i >= initialSlide && i <= lastSlide"
			:key="bestseller.id"
			:imgUrl="bestseller.imgUrl"
			:title="bestseller.title"
			:price="bestseller.price"
			:fabrics="bestseller.fabrics"
			:sizes="bestseller.sizes"
			@onClickAdd="onClickAdd(bestseller)"
			:isAdded="bestseller.isAdded"
			:isShownTooltip="bestseller.isShownTooltip"
			@closeTooltip="bestseller.isShownTooltip = false"
		/>
	</div>
</template>

<style scoped>
	.bestsellers__list {
		display: flex;
		gap: 16px;
		border-bottom: 1px solid #2d1e1e;
	}
	.animation {
		animation-name: fade;
		animation-duration: .8s;
		animation-timing-function:cubic-bezier(0.455, 0.03, 0.515, 0.955);
	}
	@keyframes fade {
		from {
			transform: scale(0.95);
			opacity: .7;
		} 
		to {
			transform: scale(1);
			opacity: 1;
		}
	}
</style>