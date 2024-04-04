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
				<img :src="isAdded ? 'src/assets/images/checked.svg' : 'src/assets/images/plus.svg'" alt="Add to cart" @click="$emit('onClickAdd')">
			</div>
		</footer>
	</div>
</template>

<style scoped>
	.card {
		max-width: 280px;
		padding-bottom: 8px;

	}
	.card__img {
		width: 280px;
		height: 372px;
		object-fit: cover;
		margin-bottom: 16px;
	}
	.card__footer {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		min-height: 163px;
	}
	.card__footer-title,
	.card__footer-price {
		font-size: 16px;
	}
	.card__footer-top {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.card__footer-makeup {
		text-transform: uppercase;
		line-height: 1.5;
	}
	.card__footer-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.card__footer-bottom img {
		cursor: pointer;
		margin: 0 5px 5px 0;
		transition: 0.2s;
	}
	.card__footer-bottom img:hover {
		transform: scale(1.1);
	}
	.card__footer-sizes {
		display: flex;
		gap: 6px;
		line-height: 1.5;
		position: relative;
	}
	.card__footer-size:hover {
		cursor: pointer;
		font-weight: 700;
	}
	.card__footer-size.active {
		font-weight: 700;
	}
</style>