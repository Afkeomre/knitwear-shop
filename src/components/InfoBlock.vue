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