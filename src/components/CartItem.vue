<script setup>
	defineProps({
		imgUrl: String,
		title: String,
		price: Number,
		size: String,
	});
</script>

<template>
	<div class="cart-item">
		<img class="cart-item__img" :src="imgUrl" alt="Product">
		<div class="cart-item__content">
			<div class="cart-item__info">
				<h5 class="cart-item__title">{{ title }}</h5>
				<div class="cart-item__size"> Size: {{ size }}</div>
				<div class="cart-item__price">{{ price }} EUR</div>
			</div>
			<div class="cart-item__delete">
				<img src="/images/delete.svg" alt="Delete" @click="$emit('onClickRemove')">
			</div>
		</div>
	</div>
</template>

<style>
	.cart-item {
		width: 400px;
		margin: 0 auto;
		font-size: 16px;
		display: flex;
		justify-content: space-between;
	}
	.cart-item__img {
		width: 120px;
		height: 170px;
		object-fit: cover;
	}
	.cart-item__content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.cart-item__title {
		font-size: 22px;
		margin-bottom: 12px;
	}
	.cart-item__info {
		width: 200px;
		align-self: flex-start;
	}
	.cart-item__size {
		margin-bottom: 6px;
	}
	.cart-item__delete {
		margin: 0 5px 5px 0;
		align-self: flex-end;
	}
	.cart-item__delete img {
		cursor: pointer;
		transition: 0.2s;
	}
	.cart-item__delete img:hover {
		transform: scale(1.1);
	}
</style>