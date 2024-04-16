<script setup>
	import { inject } from 'vue';
	import CartItem from '@/components/CartItem.vue';

	const { cart, removeFromCart } = inject('cart');
</script>

<template>
	<div class="cart__list">
		<CartItem 
			v-for="item in cart"
			:key="item.id"
			:imgUrl="item.imgUrl"
			:title="item.title"
			:price="item.price"
			:size="item.sizes.find(size => size.active).designation"
			@onClickRemove="removeFromCart(item)"
		/>
	</div>
</template>

<style>
	.cart__list {
		display: flex;
		flex-direction: column;
		gap: 40px;
		margin-bottom: 100px;
	}
</style>