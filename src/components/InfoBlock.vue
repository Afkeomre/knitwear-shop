<script setup>
	defineProps({
		imgUrl: String,
		title: String,
		description: String
	})
</script>

<template>
	<div class="info-block">
		<img class="info-block__img" :src="imgUrl" alt="Empty cart">
		<h3 class="info-block__title">{{ title }}</h3>
		<p class="info-block__text">{{ description }}</p>
		<router-link to="/">
			<button class="info-block__btn btn">Return to the main page</button>
		</router-link>
	</div>
</template>

<style>
	.info-block{
		padding: 60px 0 100px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 15px;
		border-bottom: 1px solid #2d1e1e;
		text-align: center;	
	}
	.info-block__img {
		width: 80px;
		height: 90px;
	}
	.info-block__title{
		font-size: 30px;
	}
	.info-block__text {
		margin-bottom: 15px;
		font-size: 20px;
	}
	/* .info-block__btn {
		font-size: 16px;
	} */
</style>