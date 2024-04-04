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
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.59429 9.07168L0 3.69568L0.822857 1.67969L4.73143 6.15968L8.64 1.67969L9.48571 3.69568L4.89143 9.07168H4.59429Z" fill="white"/>
					</svg>
				</button>
				<button :disabled="lastSlide === bestsellers.length - 1" @click="goNext" type="button" class="slider-btn">
					<svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M4.59429 9.07168L0 3.69568L0.822857 1.67969L4.73143 6.15968L8.64 1.67969L9.48571 3.69568L4.89143 9.07168H4.59429Z" fill="white"/>
					</svg>
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
	.slider-btn:first-of-type svg {
		transform: rotate(90deg);
	}
	.slider-btn:last-of-type svg {
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