<script setup>
	import { ref, computed, onMounted, provide } from 'vue';
	import HeaderNav from '@/components/HeaderNav.vue';
	import CartList from '@/components/CartList.vue';
	import InfoBlock from '@/components/InfoBlock.vue';
	import { useClickAdd } from '@/components/composables/useClickAdd.js';

	const { cart, removeFromCart } = useClickAdd();

	const orderId = ref(null);

	const undiscountedSum = computed(() => {
		return cart.value.reduce((acc, item) => acc + item.price, 0);
	});

	const discountedSum = computed(() => {
		return Math.round((undiscountedSum.value * 95) / 100);
	});

	const totalPrice = computed(() => {
		return cart.value.length > 5 ? discountedSum.value : undiscountedSum.value;
	});

	const createOrder = async () => {
		try {
			const response = await fetch('https://809529a6ac8aa704.mokky.dev/orders', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json;charset=utf-8'
				},
				body: JSON.stringify({
					items: cart.value,
					totalPrice: totalPrice.value
				})
			});
			const data = await response.json();

			orderId.value = data.id;

			cart.value = [];
			localStorage.clear();
			window.scrollTo(0, 0);
		} catch (err) {
			console.log(err);
		}
	}

	provide('cart', {
		cart,
		removeFromCart
	});

	onMounted(() => {
		if (JSON.parse(localStorage.getItem('CART'))) {
			cart.value = JSON.parse(localStorage.getItem('CART'));
		}
	});

</script>

<template>
	<div class="container">
		<HeaderNav />
	</div>

	<main class="main-cart">
		<section class="cart">
			<div class="container">
				<h1 class="cart__title title">Cart</h1>
				<InfoBlock v-if="cart.length === 0 && !orderId" 
					imgUrl="/images/empty-cart.png"
					title="Your cart is empty"
					description="Add some products from our shop"
				/>
				<InfoBlock v-if="orderId" 
					imgUrl="/images/order-success.png"
					:title="`Your order №${orderId} is succesfully created`"
					description="We are already working on your order. Thank you for choosing us!"
				/>
				<div v-if="cart.length" class="cart__content">
					<CartList :cart="cart" />
					<div class="cart__info">
						<div class="cart__quantity">
							<span>Product quantity:</span>
							<div class="divider"></div>
							<span>{{ cart.length }}</span>
						</div>
						<div v-if="cart.length > 5" class="cart__discount">
							<span>Discount:</span>
							<div class="divider"></div>
							<span>5%</span>
						</div>
						<div v-else class="cart__discount">
							<span>Buy more than 5 products and get the discount 5%!</span>
						</div>
						<div v-if="cart.length > 5" class="cart__initial-total">
							<span>Total without discount:</span>
							<div class="divider"></div>
							<span>{{ undiscountedSum }}&nbsp;EUR</span>
						</div>
						<div class="cart__total">
							<span>Total:</span>
							<div class="divider"></div>
							<span>{{ totalPrice }}&nbsp;EUR</span>
						</div>
						<button class="cart__btn btn" @click="createOrder">Make an order</button>
					</div>
				</div>
			</div>
		</section>
	</main>
	
</template>

<style>
	.cart {
		padding: 60px 0;
	}
	.cart__title {
		margin-bottom: 40px;
	}
	.cart__content {
		display: flex;
		gap: 60px;
		justify-content: center;
		padding-bottom: 80px;
		border-bottom: 1px solid #2d1e1e;
	}
	.cart__info {
		width: 400px;
		height: fit-content;
		position: sticky;
		top: 80px;
	}
	.cart__total,
	.cart__quantity,
	.cart__discount,
	.cart__initial-total {
		display: flex;
		width: 100%;
		gap: 10px;
		margin-bottom: 30px;
		font-size: 20px;
		align-items: center;
	}
	.cart__initial-total {
		color: #8f8f8f;
		font-size: 14px;
		margin-top: -16px;
	}
	.divider {
		width: 90%;
		border-bottom: 1px dashed #000;
		align-self: flex-end;
	}

</style>