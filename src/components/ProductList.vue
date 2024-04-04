<script setup>
	import { inject } from 'vue';
	import ProductCard from '@/components/ProductCard.vue';

	defineProps({
		products: Array
	});

	const onClickAdd = inject('onClickAdd');
</script>

<template>
	<div class="product-list" v-auto-animate>
		<ProductCard 
			v-for="product in products"
			:key="product.id"
			:imgUrl="product.imgUrl"
			:title="product.title"
			:price="product.price"
			:fabrics="product.fabrics"
			:sizes="product.sizes"
			@onClickAdd="onClickAdd(product)"
			:isAdded="product.isAdded"
			:isShownTooltip="product.isShownTooltip"
			@closeTooltip="product.isShownTooltip = false"
		/>
	</div>
</template>

<style>
	.product-list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		row-gap: 60px;
		column-gap: 40px;
	}
</style>