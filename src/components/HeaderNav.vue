<script setup>
	import { cart } from '@/constants.js';
	import { onMounted } from 'vue';

	onMounted(() => {
		if (JSON.parse(localStorage.getItem('cart'))) {
			cart.value = JSON.parse(localStorage.getItem('cart'));
		}
	});

</script>

<template>
	<nav class="header__nav">
		<div class="header__nav-logo-group">
			<router-link to="/">
				<a href="#">
					<img src="../assets/images/logo.svg" alt="Logo">
				</a>
			</router-link>
			
			<div class="header__nav-catalog">
				<router-link to="/woman">
					<a href="#">Woman</a>
				</router-link>

				<router-link to="/man">
					<a href="#">Men</a>
				</router-link>
			</div>
		</div>

		<div class="header__nav-menu-group">
			<ul class="header__nav-list">
				<li class="no-wrap"><a href="#heritage">Our Heritage</a></li>
				<li><a href="#intro">Care</a></li>
				<li><a href="#collections">Collections</a></li>
				<li><a href="#policy">Responsibility</a></li>
			</ul>
			<div class="header__nav-select">
				<!-- <select class="select" name="" id="">
					<option value="">IE/EUR</option>
					<option value="">USD</option>
					<option value="">GBP</option>
				</select> -->
				<router-link to="/cart">
					<div class="header__nav-cart">
						<img src="../assets/images/cart.svg" alt="Cart">
						<div v-if="cart.length" class="cart-img__count">{{ cart.length }}</div>
					</div>
				</router-link>
			</div>
		</div>
	</nav>
</template>

<style scoped>
	.header__nav {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		height: 80px;
		color: #fff;
	}

	.header__nav-logo-group {
		display: flex;
		align-items: center;
		gap: 94px;
	}

	.header__nav-catalog {
		display: flex;
		gap: 16px;
		font-size: 32px;
	}

	.header__nav-menu-group {
		display: flex;
		justify-content: space-between;
		/* gap: 36px; */
		padding: 0 6px;
	}

	.header__nav-list {
		display: flex;
		align-items: center;
		gap: 36px;
		text-transform: uppercase;
	}

	.header__nav-select {
		display: flex;
		align-items: center;
		gap: 36px;
		height: 100%;
	}
	.header__nav-cart {
		position: relative;
	}
	/* .select {
		width: 132px;
		padding: 12px 17px;
		outline: none;
		background-color: #6889a5;
	} */
	.no-wrap {
		white-space: nowrap;
	}
	.cart-img__count {
		position: absolute;
		bottom: -20%;
		right: -20%;
		width: 18px;
		height: 18px;
		background-color: red;
		text-align: center;
		padding-top: 8%;
		font-size: 12px;
		border-radius: 50%;
	}

</style>