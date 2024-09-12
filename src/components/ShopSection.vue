<script setup>
	import ProductList from '@/components/ProductList.vue';
	import Loader from '@/components/Loader.vue';

	defineProps({
		title: String,
		products: Array,
		loading: {
			type: Boolean,
			default: false
		},
		searchQuery: String,
		sortBy: String
	});

</script>

<template>
	<section class="shop">
		<div class="container">
			<div class="shop__content">
				<div class="shop__top-group">
					<h1 class="shop__title title">{{ title }}</h1>

					<div class="shop__filters" v-if="!loading">
						<select 
							:value="sortBy" 
							@change="$emit('update:sortBy', $event.target.value)"
						>
							<option disabled value="">Choose sorting method</option>
							<option value="title">By name</option>
							<option value="price">By price (low to high)</option>
							<option value="-price">By price (high to low)</option>
						</select>
						<input 
							:value="searchQuery"
							type="text" 
							placeholder="Search..." 
							@input="$emit('update:searchQuery', $event.target.value)"
						>
					</div>
				</div>
				
				<div :class="`${loading ? 'shop__content-loading' : ''}`" v-auto-animate>
					<ProductList v-if="!loading" :products="products" />
					<Loader v-else />
					<div v-if="!products.length && !loading" class="shop__content-empty">
						<p>Nothing was found</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>