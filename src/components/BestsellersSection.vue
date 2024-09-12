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