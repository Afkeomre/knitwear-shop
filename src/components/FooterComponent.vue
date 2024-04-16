<script setup>
	import AcceptCheckbox from '@/components/AcceptCheckbox.vue';

	const policyNav = [
		{
			title: 'Stores and Showroom',
			url: '#'
		},
		{
			title: 'Shipping & Delivery',
			url: '#'
		},
		{
			title: 'Returns & Exhanges',
			url: '#'
		},
		{
			title: 'Terms & Conditions',
			url: '#'
		},
		{
			title: 'Privacy Policy',
			url: '#'
		},
		{
			title: 'Cookies',
			url: '#'
		},
		{
			title: 'Customer service',
			url: '#'
		},
		{
			title: 'Devold of Norway',
			url: '#'
		}
	];
</script>

<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__content">
				<div class="footer__logo">
					<router-link to="/">
						<a href="#">
							<img src="/images/logo-black.svg" alt="Logo">
						</a>
					</router-link>
				</div>
				<div class="footer__menu">
					<ul class="footer__menu-collections">
						<router-link to="/man">
							<li><a href="#">Men</a></li>
						</router-link>
						<router-link to="/woman">
							<li><a href="#">Women</a></li>
						</router-link>
					</ul>
					<ul class="footer__menu-nav">
						<li><a href="#heritage">Our Heritage</a></li>
						<li><a href="#intro">Care</a></li>
						<li><a href="#collections">Collections</a></li>
						<li><a href="#policy">Responsibility</a></li>
					</ul>
				</div>
				<div class="footer__policy">
					<ul class="footer__policy-list">
						<li v-for="item in policyNav" :key="item"><a :href="item.url">{{ item.title }}</a></li>
					</ul>
				</div>
				<div class="footer__info">
					<ul class="footer__info-list">
						<li><a href="#">Newsletter</a></li>
						<li><a href="#">Collections, events and new arrivals</a></li>
						<li><a href="#">Get 10% off on your next online order.</a></li>
					</ul>
					<AcceptCheckbox class="footer__info-checkbox"/>
					<ul class="footer__info-social">
						<li><a href="#"><img src="/images/icon-instagram.svg" alt="Instagram"></a></li>
						<li><a href="#"><img src="/images/icon-in.svg" alt="LinkedIn"></a></li>
					</ul>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
	.footer {
		background-color: #fff;
		color: #2d1e1e;
	}
	.footer__content {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		padding: 24px 0 32px;
	}
	.footer__menu-collections {
		font-size: 32px;
		margin-bottom: 41px;
	}
	.footer__menu-nav {
		display: flex;
		flex-direction: column;
		gap: 10px;
		font-size: 24px;
	}
	.footer__policy,
	.footer__info {
		font-size: 16px;
		padding-top: 6px;
	}
	.footer__policy-list {
		display: flex;
		flex-direction: column;
		gap: 7px;
	}
	.footer__info {
		line-height: 1.3;
	}
	.footer__info-list {
		margin-bottom: 58px;
	}
	.footer__info-social {
		display: flex;
		gap: 16px;
	}
	.footer__info-checkbox {
		margin-bottom: 86px;
	}
</style>