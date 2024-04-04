<script setup>

</script>

<template>
	<div id="intro" class="header__info">
		<div class="header__info-content">
			<h4 class="header__info-subtitle">FW22 collection</h4>
			<h1 class="header__info-title">An Endless Pursuit of Nature</h1>
			<p class="header__info-text">
				In 1853 Ole Andreas Devold embarked on his journey, and since then our wool has been formed in the roughest conditions. Today, we build on our tradition of mastering wool. Relying on our dedication to craftmanship, we develop the finest quality from the most robust material. Crafted to withstand storms and to comfort on late summer nights. With profound care for nature, we create knitwear that lasts, that can be passed on – a legacy for times to come.
			</p>
		</div>
		<div class="header__info-img">
			<img src="../assets/images/header-img.jpg" alt="Woman in sweater">
		</div>
	</div>
</template>

<style scoped>
	.header__info {
		position: relative;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		color: #EBECDC;
		padding: 63px 99px;
	}

	.header__info-subtitle {
		text-transform: uppercase;
		margin-bottom: 18px;
	}
	.header__info-title {
		font-size: 48px;
		max-width: 247px;
		margin-bottom: 30px;
	}
	.header__info-text {
		font-size: 16px;
		max-width: 372px;
		line-height: 1.2;
	}
	.header__info-img {
		width: 600px;
		height: 750px;
		position: absolute;
		top: 0;
		left: 50%;
	}
</style>