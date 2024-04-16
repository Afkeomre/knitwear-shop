<script setup>
	import { ref, inject } from 'vue';
	import BestsellersList from '@/components/BestsellersList.vue';

	const bestsellers = inject('bestsellers');

	const initialSlide = ref(0);

	const lastSlide = ref(3);

	const goPrew = () => {
		if (initialSlide.value) {
			initialSlide.value--;
			lastSlide.value--;
		} 
	}

	const goNext = () => {
		if (lastSlide.value < bestsellers.value.length - 1) {
			initialSlide.value++;
			lastSlide.value++;
		}
	}
</script>

<template>
	<section class="bestsellers">
		<div class="container">
			<h2 class="bestsellers__title">O.A.D. Best Selling knitwear</h2>
			<div class="bestsellers__content">
				<BestsellersList :initialSlide="initialSlide" :lastSlide="lastSlide" />
				<button :disabled="initialSlide === 0" @click="goPrew" type="button" class="slider-btn">
					<img src="/images/arrow-down.svg" alt="Arrow">
				</button>
				<button :disabled="lastSlide === bestsellers.length - 1" @click="goNext" type="button" class="slider-btn">
					<img src="/images/arrow-down.svg" alt="Arrow">
				</button>
			</div>
		</div>
	</section>
</template>

<style>
	.bestsellers {
		background-color: #fff;
		padding: 28px 0 14px;
	}
	.bestsellers__content {
		position: relative;
	}
	.bestsellers__title {
		margin-left: 99px;
		margin-bottom: 30px;
		font-size: 24px;
	}
	.slider-btn {
		position: absolute;
		width: 40px;
		height: 40px;
		background-color: #789ebf;
		border-radius: 50%;
		transition: all 0.2s ease;
	}
	.slider-btn:first-of-type {
		top: 30%;
		left: -2%;
	}
	.slider-btn:last-of-type {
		top: 30%;
		right: -2%;
	}
	.slider-btn:first-of-type img {
		transform: rotate(90deg);
	}
	.slider-btn:last-of-type img {
		transform: rotate(-90deg);
	}
	.slider-btn:hover {
		background-color:  #6889A5;
	}
	.slider-btn:first-of-type:hover {
		transform: translate(-2px);
	}
	.slider-btn:last-of-type:hover {
		transform: translate(2px);
	}
	.slider-btn:disabled {
		background-color: #e3e3e3;
	}
	.slider-btn:first-of-type:hover:disabled {
		transform: none;
	}
	.slider-btn:last-of-type:hover:disabled {
		transform: none;
	}
</style>