<script setup>
	import TooltipSize from '@/components/TooltipSize.vue';

	const chooseSize = (sizes, index) => {
		sizes.forEach((s, i) => {
			if (i !== index) {
				s.active = false;
			} else {
				s.active = true;
			}
		});
	};

	defineProps({
		imgUrl: String,
		title: String,
		price: Number,
		sizes: Array,
		fabrics: Array,
		isAdded: Boolean,
		isShownTooltip: Boolean
	});

</script>

<template>
	<div class="card">
		<img :src="imgUrl" alt="Best" class="card__img">
		<footer class="card__footer">
			<div class="card__footer-top">
				<h5 class="card__footer-title">{{ title }}</h5>
				<span class="card__footer-price">{{ price }} EUR</span>
			</div>
			<div class="card__footer-makeup">
				<div class="made-of">Made of</div>
				<div class="fabric" v-for="(fabric, i) in fabrics" :key="i">{{ fabric }}</div>
			</div>
			<div class="card__footer-bottom">
				<div class="card__footer-sizes">
					<span 
						v-for="(size, i) in sizes" 
						:key="i"
						@click="chooseSize(sizes, i)"
						:class="`card__footer-size ${size.active ? 'active' : ''}`"
					>
						{{ size.designation }}
					</span>
					<TooltipSize :isShownTooltip="isShownTooltip" @closeTooltip="$emit('closeTooltip')"/>
				</div>
				<img :src="isAdded ? '/images/checked.svg' : '/images/plus.svg'" alt="Add to cart" @click="$emit('onClickAdd')">
			</div>
		</footer>
	</div>
</template>