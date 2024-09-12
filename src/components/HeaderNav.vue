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
					<img src="/images/logo.svg" alt="Logo">
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
						<img src="/images/cart.svg" alt="Cart">
						<div v-if="cart.length" class="cart-img__count">{{ cart.length }}</div>
					</div>
				</router-link>
			</div>
		</div>
	</nav>
</template>