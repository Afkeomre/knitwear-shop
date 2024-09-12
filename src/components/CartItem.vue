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